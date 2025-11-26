/**
 * Adgeist SDK for managing ad serving, tracking, and user consent.
 * @module AdgeistSDK
 */
(function () {
  "use strict";

  /**
   * Constants for event types and configuration.
   * @constant
   */
  const EVENT_TYPES = {
    IMPRESSION: "IMPRESSION",
    VIEW: "VIEW",
    TOTAL_VIEW: "TOTAL_VIEW",
    HOVER: "HOVER",
    CLICK: "CLICK",
    VIDEO_PLAYBACK: "VIDEO_PLAYBACK",
    VIDEO_QUARTILE: "VIDEO_QUARTILE",
  };

  const DEFAULTS = {
    VISIBILITY_THRESHOLD: 0.5,
    MIN_VIEW_TIME: 1000,
    VIDEO_MIN_VIEW_TIME: 2000,
    CONSENT_COOKIE_NAME: "adgeist_event_collection_consent",
    ADGEIST_VERSION: "1.0.0",
  };

  /**
   * Utility module for reusable functions.
   * @module Utils
   */
  const Utils = {
    getUserTimezone() {
      if (typeof Intl !== "undefined" && Intl.DateTimeFormat) {
        try {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch (_) {}
      }
      const offset = -new Date().getTimezoneOffset() / 60;
      const sign = offset >= 0 ? "+" : "";
      const hours = Math.floor(Math.abs(offset));
      const minutes = (Math.abs(offset) - hours) * 60;
      return minutes
        ? `UTC${sign}${hours}:${minutes.toString().padStart(2, "0")}`
        : `UTC${sign}${hours}`;
    },

    debounce(func, wait) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    },

    sanitizeUrl(url) {
      try {
        const parsedUrl = new URL(url);
        if (!["http:", "https:"].includes(parsedUrl.protocol)) {
          throw new Error("Invalid protocol");
        }
        return parsedUrl.toString();
      } catch (e) {
        return "about:blank";
      }
    },

    hashString(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= hash;
      }
      return hash.toString();
    },
  };

  /**
   * Logger class for handling logging.
   */
  class Logger {
    constructor(env) {
      this.env = env;
    }

    log(message) {
      if (this.env === "development") {
        console.log(`[AdgeistSDK] ${message}`);
      }
    }
  }

  /**
   * DeviceInfoCollector class for gathering device and browser information.
   */
  class DeviceInfoCollector {
    constructor(sdk) {
      this.sdk = sdk;
    }

    getReportedPPI() {
      const div = document.createElement("div");
      div.style.width = "1in"; // 1 physical inch
      document.body.appendChild(div);
      const cssPixelsPerInch = div.offsetWidth; // CSS pixels in 1 inch
      document.body.removeChild(div);

      // Calculate PPI: CSS pixels per inch * devicePixelRatio
      const ppi = Math.round(cssPixelsPerInch * window.devicePixelRatio);
      return ppi || 96;
    }

    async getDeviceInfo() {
      let uaResult = {};
      let NFCsupported = false;
      let NFCenabled = false;
      let ISP = null;

      await new Promise((resolve) => {
        const url =
          "https://cdn.jsdelivr.net/npm/ua-parser-js@1.0.2/dist/ua-parser.min.js";
        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = () => {
          let parser;
          try {
            parser = new UAParser();
            uaResult = parser.getResult();
          } catch (error) {
            this.sdk.logger.log(`UAParser.js not available: ${error.message}`);
            uaResult = {
              device: { type: null, vendor: null, model: null },
              os: { name: null, version: null },
              browser: { name: null, version: null },
            };
          }
          resolve();
        };
        script.onerror = () => {
          this.sdk.logger.log(`Script load failed: ${url}`);
          resolve();
        };
        document.head.appendChild(script);
      });

      async function checkNFC() {
        return new Promise((resolve) => {
          if ("NDEFReader" in window) {
            const ndef = new NDEFReader();
            ndef
              .scan()
              .then(() => {
                NFCsupported = true;
                NFCenabled = true;
                resolve();
              })
              .catch((error) => {
                NFCsupported = true;
                NFCenabled = false;
                this.sdk.logger.log("NFC not enabled: " + error);
                resolve();
              });
          } else {
            NFCsupported = false;
            NFCenabled = false;
            this.sdk.logger.log("NFC not supported");
            resolve();
          }
        });
      }

      const [nfcResult, ispResult] = await Promise.allSettled([
        checkNFC(),
        fetch("https://ipapi.co/json/")
          .then((res) => (res.ok ? res.json() : null))
          .catch(() => null),
      ]);

      ISP =
        ispResult.status === "fulfilled" && ispResult.value
          ? ispResult.value.org
          : "Unknown";

      return {
        deviceType:
          uaResult.device?.type ||
          (navigator.userAgentData?.mobile !== undefined
            ? navigator.userAgentData.mobile
              ? "Mobile"
              : "Desktop"
            : /mobile/i.test(navigator.userAgent)
            ? "Mobile"
            : "Desktop"),
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        screenPixelRatio: window.devicePixelRatio,
        screenDensity: this.getReportedPPI(),
        osName:
          uaResult.os?.name ||
          navigator.userAgentData?.platform ||
          navigator.platform ||
          "Unavailable (browser privacy)",
        osVersion: uaResult.os?.version || null,
        noOfProcessors: navigator.hardwareConcurrency || null,
        browserName: uaResult.browser?.name || null,
        browserVersion: uaResult.browser?.version || null,
        networkType:
          navigator.connection?.effectiveType ||
          "Unavailable (browser privacy)",
        networkServiceProvider: ISP,
        isTouchScreenCapable: navigator.maxTouchPoints > 0,
        isNFCCapable: NFCsupported,
        isNFCEnabled: NFCenabled,
        isGPUCapable: !!navigator.gpu,
        webglRenderer: (() => {
          try {
            const canvas = document.createElement("canvas");
            const gl = canvas.getContext("webgl");
            return gl?.getParameter(gl.RENDERER) || null;
          } catch {
            return null;
          }
        })(),
      };
    }
  }

  /**
   * ConsentManager class for handling user consent and banner display.
   */
  class ConsentManager {
    constructor(sdk) {
      this.sdk = sdk;
      this.consentCookieName = DEFAULTS.CONSENT_COOKIE_NAME;
    }

    getUserConsent() {
      return document.cookie.includes(`${this.consentCookieName}=true`);
    }

    showConsentBanner() {
      if (document.cookie.includes(this.consentCookieName)) return;
      const existingBanner = document.getElementById("adgeist-consent-banner");
      if (existingBanner) {
        existingBanner.parentNode.removeChild(existingBanner);
      }
      const banner = document.createElement("div");
      banner.id = "adgeist-consent-banner";
      banner.style.cssText = `
                position: fixed; bottom: 0; left: 0; width: 100%; background: #fff;
                box-shadow: 0 -2px 8px rgba(0,0,0,0.1); z-index: 9999;
                display: flex; justify-content: center; align-items: center; padding: 16px;
            `;
      banner.innerHTML = `
                <div style="max-width: 600px; width: 100%; display: flex; flex-direction: column; align-items: center;">
                  <span style="font-size: 16px; color: #333; margin-bottom: 12px;">
                    We use cookies and similar technologies to enhance your browsing experience, analyze site usage, and deliver personalized content.
                    By clicking "Accept", you consent to our use of cookies for these purposes.
                  </span>
                  <div style="display: flex; gap: 12px;">
                    <button id="adgeist-consent-accept" style="padding: 8px 20px; background: #63aa75; color: #fff; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
                      Accept
                    </button>
                    <button id="adgeist-consent-deny" style="padding: 8px 20px; background: #eee; color: #333; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
                      Deny
                    </button>
                  </div>
                </div>
            `;
      document.body.appendChild(banner);
      const removeBanner = () => {
        const bannerToRemove = document.getElementById(
          "adgeist-consent-banner"
        );
        if (bannerToRemove && bannerToRemove.parentNode) {
          bannerToRemove.parentNode.removeChild(bannerToRemove);
        }
      };
      setTimeout(() => {
        const acceptBtn = document.getElementById("adgeist-consent-accept");
        const denyBtn = document.getElementById("adgeist-consent-deny");
        if (acceptBtn) {
          acceptBtn.addEventListener("click", () => {
            this.updateAdgeistUserConsent(true);
            removeBanner();
          });
        }
        if (denyBtn) {
          denyBtn.addEventListener("click", () => {
            this.updateAdgeistUserConsent(false);
            removeBanner();
          });
        }
      }, 0);
    }

    updateAdgeistUserConsent(consentGiven) {
      document.cookie = `${
        this.consentCookieName
      }=${consentGiven}; expires=${new Date(
        "9999-12-31T23:59:59Z"
      ).toUTCString()}; path=/; SameSite=Lax`;
    }
  }

  /**
   * CDPEventCollector class to handle collection of CDP-related data.
   */
  class CDPEventCollector {
    constructor(cdpManager) {
      this.cdpManager = cdpManager;
      this.fingerprint = null;
      this.userIP = null;
      this.userDetails = {};
    }

    /**
     * Generates a custom fingerprint based on browser attributes.
     * @returns {Promise<string>} Fingerprint.
     */
    async generateCustomFingerprint() {
      const attributes = [
        navigator.userAgent,
        navigator.language,
        navigator.hardwareConcurrency || "unknown",
        navigator.deviceMemory || "unknown",
        screen.width,
        screen.height,
        screen.colorDepth,
        new Date().getTimezoneOffset(),
        !!navigator.cookieEnabled,
        !!navigator.doNotTrack,
        navigator.platform,
      ].join("|");

      try {
        const encoder = new TextEncoder();
        const data = await crypto.subtle.digest(
          "SHA-256",
          encoder.encode(attributes)
        );
        return Array.from(new Uint8Array(data))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
      } catch (error) {
        this.cdpManager.logger.log(
          `Crypto API unavailable, using fallback: ${error.message}`
        );
        return Utils.hashString(attributes);
      }
    }

    /**
     * Retrieves or generates a device fingerprint.
     * @returns {Promise<string>} Fingerprint.
     */
    async getDeviceFingerprint() {
      if (this.fingerprint) return this.fingerprint;
      try {
        const { default: FingerprintJS } = await import(
          "https://openfpcdn.io/fingerprintjs/v4"
        );
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        this.fingerprint = result.visitorId;
      } catch (error) {
        this.cdpManager.logger.log(
          `FingerprintJS failed, using custom fingerprint: ${error.message}`
        );
        this.fingerprint = await this.generateCustomFingerprint();
      }
      return this.fingerprint;
    }

    /**
     * Retrieves the user's IP address.
     * @returns {Promise<string|null>} IP address or null.
     */
    async getUserIP() {
      if (this.userIP) return this.userIP;
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const { ip } = await response.json();
        this.userIP = ip;
        return ip;
      } catch (error) {
        this.cdpManager.logger.log(
          `Failed to retrieve user IP: ${error.message}`
        );
        return null;
      }
    }

    /**
     * Collects page metadata including title and meta tags.
     * @returns {object} Metadata object.
     */
    collectPageMetadata() {
      const metadata = { title: document.title || null, meta: {} };
      document.querySelectorAll("meta").forEach((meta) => {
        const name = meta.getAttribute("name") || meta.getAttribute("property");
        const content = meta.getAttribute("content");
        if (name && content) metadata.meta[name] = content;
      });
      return metadata;
    }

    /**
     * Sets or updates user details.
     * @param {object} details - User details (e.g., { userId: '123', email: 'user@example.com' }).
     * @returns {object} Updated user details.
     */
    setUserDetails(details) {
      if (typeof details !== "object" || details === null) {
        this.cdpManager.logger.log("Invalid user details");
        return this.userDetails;
      }
      this.userDetails = { ...this.userDetails, ...details };
      return this.userDetails;
    }
  }

  /**
   * CDPEventSender class to handle sending CDP-related events.
   */
  class CDPEventSender {
    constructor(cdpManager, collector) {
      this.cdpManager = cdpManager;
      this.collector = collector;
      this.cdpUrl = cdpManager.cdpUrl;
    }

    /**
     * Sends data to the CDP.
     * @param {string} eventType - Event type.
     * @param {object} eventProperties - Event properties.
     * @returns {Promise<void>}
     */
    async sendToCDP(eventType, eventProperties) {
      if (!this.cdpManager.shouldIngestEventsToCDP) return;
      try {
        const [fingerprint, userIP] = await Promise.all([
          this.collector.getDeviceFingerprint(),
          this.collector.getUserIP(),
        ]);
        const response = await fetch(`${this.cdpUrl}/ingest`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJraXNob3JlIiwiaWF0IjoxNzU0Mzc1NzIwLCJuYmYiOjE3NTQzNzU3MjAsImV4cCI6MTc1Nzk3NTcyMCwianRpIjoiOTdmNTI1YjAtM2NhNy00MzQwLTlhOGItZDgwZWI2ZjJmOTAzIiwicm9sZSI6ImFkbWluIiwic2NvcGUiOiJpbmdlc3QiLCJwbGF0Zm9ybSI6Im1vYmlsZSIsImNvbXBhbnlfaWQiOiJraXNob3JlIiwiaXNzIjoiQWRHZWlzdC1DRFAifQ.IYQus53aQETqOaQzEED8L51jwKRN3n-Oq-M8jY_ZSaw",
          },
          body: JSON.stringify({
            event_type: eventType,
            traits: {
              consent_given: this.cdpManager.consentManager.getUserConsent(),
              source: "website",
              timestamp: new Date().toISOString(),
              fingerprint_id: fingerprint,
              ...this.collector.userDetails,
            },
            context: {
              page_url: window.location.href,
              page_title: document.title,
              ip: userIP,
            },
            event_properties: eventProperties,
          }),
        });
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        this.cdpManager.logger.log(`CDP event ${eventType} sent successfully`);
      } catch (error) {
        this.cdpManager.logger.log(
          `Failed to send CDP event ${eventType}: ${error.message}`
        );
      }
    }
  }

  /**
   * CDPManager class to orchestrate CDP-related functionality.
   */
  class CDPManager {
    constructor(sdk) {
      this.sdk = sdk;
      this.cdpUrl = sdk.cdpUrl;
      this.shouldIngestEventsToCDP = sdk.shouldIngestEventsToCDP;
      this.logger = new Logger(sdk.env);
      this.consentManager = new ConsentManager(this);
      this.collector = new CDPEventCollector(this);
      this.sender = new CDPEventSender(this, this.collector);
      this.lastMetadataSent = null;
    }

    /**
     * Sets or updates user details and resends metadata if userId changes.
     * @param {object} details - User details (e.g., { userId: '123', email: 'user@example.com' }).
     * @returns {Promise<void>}
     */
    async setUserDetails(details) {
      const previousUserId = this.collector.userDetails.userId;
      this.collector.setUserDetails(details);
      if (details.userId && details.userId !== previousUserId) {
        try {
          const originalLastMetadataSent = this.lastMetadataSent;
          this.lastMetadataSent = null;
          await this.sendPageMetadata();
          this.lastMetadataSent = originalLastMetadataSent;
        } catch (error) {
          this.logger.log(`Failed to resend metadata: ${error.message}`);
        }
      }
    }

    /**
     * Sends page metadata to CDP if not already sent for the current URL.
     * @returns {Promise<void>}
     */
    async sendPageMetadata() {
      const currentUrl = window.location.href;
      if (this.lastMetadataSent === currentUrl) return;
      try {
        const metadata = this.collector.collectPageMetadata();
        await this.sender.sendToCDP("METADATA", {
          pageUrl: currentUrl,
          metadata,
        });
        this.lastMetadataSent = currentUrl;
      } catch (error) {
        this.logger.log(`Failed to send page metadata: ${error.message}`);
      }
    }

    /**
     * Tracks a custom event.
     * @param {string} eventType - Event type.
     * @param {object} eventData - Event data.
     * @returns {Promise<void>}
     */
    async trackCustomEvent(eventType, eventData) {
      await this.sender.sendToCDP(eventType, {
        pageUrl: window.location.href,
        ...eventData,
      });
    }
  }

  /**
   * AdAudioManager class for managing video ad mute/unmute states.
   */
  class AdAudioManager {
    constructor(sdk) {
      this.sdk = sdk;
      this.activeUnmutedAd = null;
      this.setupMuteEventListener();
    }

    setupMuteEventListener() {
      window.addEventListener("message", (event) => {
        if (event.data.type === "adgeist_mute_event") {
          const { adElementId, muted } = event.data;
          if (!muted && this.activeUnmutedAd !== adElementId) {
            this.activeUnmutedAd = adElementId;
            this.muteAllOtherAds(adElementId);
          } else if (muted && this.activeUnmutedAd === adElementId) {
            this.activeUnmutedAd = null;
          }
        }
      });
    }

    muteAllOtherAds(excludeAdElementId) {
      const iframes = document.querySelectorAll(
        'iframe[id^="adgeist_ads_iframe_"]'
      );
      iframes.forEach((iframe) => {
        if (iframe.id !== excludeAdElementId) {
          try {
            iframe.contentWindow.postMessage(
              { type: "adgeist_mute", mute: true },
              "*"
            );
          } catch (error) {
            this.sdk.logger.log(
              `Failed to send mute message to iframe ${iframe.id}: ${error.message}`
            );
          }
        }
      });
    }
  }

  /**
   * AdEventSender class to handle sending ad-related events.
   */
  class AdEventSender {
    constructor(
      sdk,
      adElementId,
      adSpaceId,
      adType,
      buyType,
      bidResponseMetadata
    ) {
      this.sdk = sdk;
      this.adElementId = adElementId;
      this.adSpaceId = adSpaceId;
      this.responseId = bidResponseMetadata.responseId;
      this.trackId = bidResponseMetadata.trackId;
      this.campaignId = bidResponseMetadata.campaignId;
      this.adResponseGeneratedAt = bidResponseMetadata.responseGeneratedAt;
      this.metaData = bidResponseMetadata.metaData;
      this.adType = adType;
      this.buyType = buyType;
      this.adTrackingUrl = sdk.adTrackingUrl;
    }

    /**
     * Sends an event to the tracking API.
     * @param {string} eventType - Type of event (e.g., 'IMPRESSION', 'CLICK').
     * @param {object} data - Event-specific data.
     * @returns {Promise<void>}
     */
    async sendEvent(eventType, data) {
      try {
        const [userIP, fingerprint] = await Promise.all([
          this.sdk.cdpManager.collector.getUserIP(),
          this.sdk.cdpManager.collector.getDeviceFingerprint(),
        ]);

        const analyticsPayload = this.buildAnalyticsPayload(eventType, data);
        if (!analyticsPayload) {
          this.sdk.logger.log(`Unknown event type: ${eventType}`);
          return;
        }

        let response;

        if (
          this.buyType === "FIXED" &&
          !(eventType === EVENT_TYPES.CLICK || eventType === EVENT_TYPES.VIEW)
        ) {
          return;
        }

        if (this.buyType === "FIXED") {
          response = await fetch(`${this.adTrackingUrl}/v2/ssp/impression`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: eventType,
              metaData: this.metaData,
              companyId: "68f8c700c40a64049896a72d",
              origin: "https://hackathon-lake-nine.vercel.app",
              ...analyticsPayload,
            }),
          });
        } else {
          response = await fetch(
            `${this.adTrackingUrl}/api/analytics/track?${new URLSearchParams({
              campaignId: this.campaignId,
              companyId: this.sdk.publisherId,
              adSpaceId: this.adSpaceId,
              test: this.sdk.env === "development" ? "1" : "0",
            })}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-user-id": fingerprint,
                "x-platform": "website",
                "x-api-key": this.sdk.apiKey,
                "x-forwarded-for": userIP || "",
              },
              body: JSON.stringify({
                eventType,
                winningBidId: this.trackId,
                campaignId: this.campaignId,
                ...analyticsPayload,
              }),
            }
          );
        }

        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        this.sdk.logger.log(`${eventType} tracked for track: ${this.trackId}`);
      } catch (error) {
        this.sdk.logger.log(`${eventType} tracking failed: ${error.message}`);
      }
    }

    /**
     * Builds the analytics payload based on event type.
     * @param {string} eventType - The event type.
     * @param {object} data - Event-specific data.
     * @returns {object|null} Payload or null if event type is unknown.
     */
    buildAnalyticsPayload(eventType, data) {
      const payload = {};
      switch (eventType) {
        case EVENT_TYPES.IMPRESSION:
          return { ...payload, renderTime: data.renderTime };
        case EVENT_TYPES.VIEW:
          return {
            ...payload,
            viewTime: data.viewTime,
            visibilityRatio: data.visibilityRatio,
            scrollDepth: data.scrollDepth,
            timeToVisible: data.timeToVisible,
          };
        case EVENT_TYPES.TOTAL_VIEW:
          return {
            ...payload,
            totalViewTime: data.totalViewTime,
            visibilityRatio: data.visibilityRatio,
          };
        case EVENT_TYPES.HOVER:
          return { ...payload, hoverTime: data.hoverTime };
        case EVENT_TYPES.CLICK:
          return payload;
        case EVENT_TYPES.VIDEO_PLAYBACK:
          return {
            ...payload,
            totalPlaybackTime: data.totalPlaybackTime,
          };
        case EVENT_TYPES.VIDEO_QUARTILE:
          return { ...payload, quartile: data.quartile };
        default:
          return null;
      }
    }

    /**
     * Retrieves the ad slot element from the DOM.
     * @returns {HTMLElement|null} Ad slot element or null.
     */
    getAdSlotElement() {
      return document.getElementById(this.adElementId);
    }
  }

  /**
   * AdTracker class to track ad interactions (impressions, views, clicks, etc.).
   */
  class AdTracker {
    constructor(
      sdk,
      adElementId,
      adSpaceId,
      adType,
      buyType,
      startTime,
      bidResponseMetadata,
      visibilityThreshold = DEFAULTS.VISIBILITY_THRESHOLD
    ) {
      this.sdk = sdk;
      this.adElementId = adElementId;
      this.adType = adType;
      this.visibilityThreshold = visibilityThreshold;
      this.minViewTime =
        adType === "video"
          ? DEFAULTS.VIDEO_MIN_VIEW_TIME
          : DEFAULTS.MIN_VIEW_TIME;
      this.isVisible = false;
      this.viewStartTime = null;
      this.totalViewTime = 0;
      this.hoverStartTime = null;
      this.totalHoverTime = 0;
      this.playbackStartTime = null;
      this.totalPlaybackTime = 0;
      this.lastPausedTime = 0;
      this.hasEnded = false;
      this.hasSentPlaybackEvent = false;
      this.observer = null;
      this.renderStartTime = startTime || performance.now();
      this.hasImpression = false;
      this.hasViewEvent = false;
      this.visibilityCheckInterval = null;
      this.currentVisibilityRatio = 0;
      this.eventSender = new AdEventSender(
        sdk,
        adElementId,
        adSpaceId,
        adType,
        buyType,
        bidResponseMetadata
      );
      this.adElement = document.getElementById(adElementId);
      if (!this.adElement) {
        this.sdk.logger.log(`Ad element not found: ${adElementId}`);
        return;
      }
      this.init();
    }

    /**
     * Initializes event listeners and observers for ad tracking.
     */
    init() {
      this.setupImpressionTracking();
      this.setupClickTracking();
      if (!("IntersectionObserver" in window)) {
        this.sdk.logger.log(
          "IntersectionObserver not supported. Using fallback."
        );
        this.fallbackTracking();
      } else {
        this.setupIntersectionObserver();
      }
      this.setupInteractionListeners();
      this.setupVisibilityChangeListener();
    }

    /**
     * Sets up impression tracking for banner or video ads.
     */
    setupImpressionTracking() {
      const adCreative = this.getAdCreative();
      if (this.adType === "banner") {
        const img = adCreative.querySelector("img");
        if (img) {
          if (img.complete) {
            this.recordImpression();
          } else {
            img.addEventListener("load", () => this.recordImpression());
          }
        }
      } else if (this.adType === "video") {
        const video = adCreative.querySelector("video");
        if (video) {
          if (video.complete) {
            this.recordImpression();
          } else {
            video.addEventListener("canplay", () => this.recordImpression());
          }
        }
      }
    }

    /**
     * Sets up click tracking for the ad, excluding mute and play controls.
     */
    setupClickTracking() {
      const adLink = this.getAdCreative();
      if (adLink) {
        adLink.addEventListener("click", (event) => {
          const target = event.target;
          if (target.id === "mute-toggle" || target.id === "play-toggle") {
            event.preventDefault();
            return;
          }
          this.sendClickData();
        });
      } else {
        this.sdk.logger.log(
          `Ad link element not found for ${this.adElementId}`
        );
      }
    }

    /**
     * Sets up IntersectionObserver for visibility tracking.
     */
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries),
        {
          root: null,
          rootMargin: "0px",
          threshold: [
            0,
            this.visibilityThreshold,
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9,
            1.0,
          ],
        }
      );
      this.observer.observe(this.adElement);
    }

    /**
     * Sets up interaction listeners for hover and video events.
     */
    setupInteractionListeners() {
      if (!("ontouchstart" in window)) {
        this.adElement.addEventListener("mouseover", () => {
          if (!this.hoverStartTime) {
            this.hoverStartTime = performance.now();
          }
        });
        this.adElement.addEventListener("mouseout", () =>
          this.updateHoverTime()
        );
      }

      if (this.adType === "video") {
        const video = this.getAdCreative().querySelector("video");
        video.addEventListener("play", () => {
          if (!this.playbackStartTime) {
            this.playbackStartTime = performance.now();
          }
        });
        video.addEventListener("pause", () => {
          this.updatePlaybackTime();
        });
        video.addEventListener("ended", () => {
          if (!this.hasEnded) {
            this.hasEnded = true;
            this.updatePlaybackTime();
            this.sendVideoPlaybackData();
          }
          video.play();
        });
      }
    }

    /**
     * Sets up listener for visibility change events.
     */
    setupVisibilityChangeListener() {
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          this.updateViewTime();
          this.updateHoverTime();
          this.updatePlaybackTime();
          if (this.adType === "video" && !this.hasEnded) {
            const video = this.getAdCreative().querySelector("video");
            this.lastPausedTime = video.currentTime;
            video.pause();
            this.updatePlaybackTime();
          }
          this.stopVisibilityCheck();
        }
      });
    }

    /**
     * Records an impression event if not already recorded.
     */
    recordImpression() {
      if (!this.hasImpression) {
        const renderTime = performance.now() - this.renderStartTime;
        this.eventSender.sendEvent(EVENT_TYPES.IMPRESSION, {
          renderTime,
        });
        this.hasImpression = true;
      }
    }

    /**
     * Starts a timer to check if minViewTime is reached while the ad is visible.
     */
    startVisibilityCheck() {
      if (this.visibilityCheckInterval) return;
      this.visibilityCheckInterval = setInterval(() => {
        if (this.isVisible && this.viewStartTime && !this.hasViewEvent) {
          const timeInView = performance.now() - this.viewStartTime;
          if (timeInView >= this.minViewTime) {
            this.hasViewEvent = true;
            const scrollDepth = window.scrollY / document.body.scrollHeight;
            const timeToVisible = performance.now() - this.renderStartTime;
            const visibilityRatio = this.getCurrentVisibilityRatio();
            this.eventSender.sendEvent(EVENT_TYPES.VIEW, {
              viewTime: timeInView,
              visibilityRatio,
              scrollDepth,
              timeToVisible,
            });
            this.stopVisibilityCheck();
          }
        }
      }, 100);
    }

    /**
     * Stops the visibility check timer.
     */
    stopVisibilityCheck() {
      if (this.visibilityCheckInterval) {
        clearInterval(this.visibilityCheckInterval);
        this.visibilityCheckInterval = null;
      }
    }

    /**
     * Gets the current visibility ratio of the ad element.
     * @returns {number} Visibility ratio.
     */
    getCurrentVisibilityRatio() {
      if (!("IntersectionObserver" in window)) {
        const rect = this.adElement.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        return Math.min(
          rect.bottom / windowHeight,
          (windowHeight - rect.top) / windowHeight,
          1
        );
      }
      return this.currentVisibilityRatio;
    }

    /**
     * Handles IntersectionObserver entries for visibility tracking.
     * @param {IntersectionObserverEntry[]} entries - Observer entries.
     */
    handleIntersection(entries) {
      entries.forEach((entry) => {
        const visibilityRatio = entry.intersectionRatio;
        const wasVisible = this.isVisible;
        this.currentVisibilityRatio = visibilityRatio;
        this.isVisible = visibilityRatio >= this.visibilityThreshold;
        const video =
          this.adType === "video"
            ? this.getAdCreative().querySelector("video")
            : null;

        if (this.isVisible && !wasVisible) {
          if (!this.viewStartTime) {
            this.viewStartTime = performance.now();
            this.startVisibilityCheck();
          }
          if (video && !this.hasEnded) {
            video.currentTime = this.lastPausedTime;
            video
              .play()
              .catch((e) =>
                this.sdk.logger.log(
                  `Video play failed for ${this.adElementId}: ${e.message}`
                )
              );
            if (!this.playbackStartTime) {
              this.playbackStartTime = performance.now();
            }
          }
        } else if (!this.isVisible && wasVisible) {
          this.updateViewTime();
          this.stopVisibilityCheck();
          if (video && !this.hasEnded) {
            this.lastPausedTime = video.currentTime;
            video.pause();
            this.updatePlaybackTime();
          }
        }
      });
    }

    /**
     * Updates total view time when visibility changes.
     */
    updateViewTime() {
      if (this.viewStartTime) {
        this.totalViewTime += performance.now() - this.viewStartTime;
        this.viewStartTime = null;
        this.stopVisibilityCheck();
      }
    }

    /**
     * Updates total hover time when hover ends.
     */
    updateHoverTime() {
      if (this.hoverStartTime) {
        this.totalHoverTime += performance.now() - this.hoverStartTime;
        this.hoverStartTime = null;
      }
    }

    /**
     * Updates total playback time for video ads.
     */
    updatePlaybackTime() {
      if (this.playbackStartTime && this.adType === "video") {
        this.totalPlaybackTime += performance.now() - this.playbackStartTime;
        this.playbackStartTime = null;
      }
    }

    /**
     * Sends hover event data if applicable.
     */
    sendHoverData() {
      if (this.totalHoverTime > 0) {
        this.eventSender.sendEvent(EVENT_TYPES.HOVER, {
          hoverTime: this.totalHoverTime,
        });
      }
    }

    /**
     * Sends click event data.
     */
    sendClickData() {
      this.eventSender.sendEvent(EVENT_TYPES.CLICK, {});
    }

    /**
     * Sends video playback data if applicable.
     */
    sendVideoPlaybackData() {
      if (this.totalPlaybackTime > 0 && !this.hasSentPlaybackEvent) {
        this.eventSender.sendEvent(EVENT_TYPES.VIDEO_PLAYBACK, {
          totalPlaybackTime: this.totalPlaybackTime,
        });
        this.hasSentPlaybackEvent = true;
      }
    }

    /**
     * Sends total view time data if applicable.
     */
    sendTotalTimeInView() {
      this.updateViewTime();
      if (this.totalViewTime > 0) {
        this.eventSender.sendEvent(EVENT_TYPES.TOTAL_VIEW, {
          totalViewTime: this.totalViewTime,
          visibilityRatio: this.hasViewEvent
            ? this.visibilityThreshold
            : DEFAULTS.VISIBILITY_THRESHOLD,
        });
      }
    }

    /**
     * Fallback tracking for browsers without IntersectionObserver.
     */
    fallbackTracking() {
      const checkVisibility = () => {
        const rect = this.adElement.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const visibilityRatio = Math.min(
          rect.bottom / windowHeight,
          (windowHeight - rect.top) / windowHeight,
          1
        );
        const wasVisible = this.isVisible;
        this.currentVisibilityRatio = visibilityRatio;
        this.isVisible = visibilityRatio >= this.visibilityThreshold;
        const video =
          this.adType === "video"
            ? this.getAdCreative().querySelector("video")
            : null;

        if (this.isVisible && !wasVisible) {
          if (!this.viewStartTime) {
            this.viewStartTime = performance.now();
            this.startVisibilityCheck();
          }
          if (video && !this.hasEnded) {
            video.currentTime = this.lastPausedTime;
            video
              .play()
              .catch((e) =>
                this.sdk.logger.log(
                  `Video play failed for ${this.adElementId}: ${e.message}`
                )
              );
            if (!this.playbackStartTime) {
              this.playbackStartTime = performance.now();
            }
          }
        } else if (!this.isVisible && wasVisible) {
          this.updateViewTime();
          this.stopVisibilityCheck();
          if (video && !this.hasEnded) {
            this.lastPausedTime = video.currentTime;
            video.pause();
            this.updatePlaybackTime();
          }
        }
      };

      window.addEventListener("scroll", checkVisibility);
      window.addEventListener("resize", checkVisibility);
    }

    /**
     * Retrieves the ad creative element.
     * @returns {HTMLElement} Ad creative element.
     */
    getAdCreative() {
      return (
        this.adElement.contentDocument?.querySelector(".adgeist-ad") ||
        this.adElement
      );
    }

    /**
     * Cleans up observers and sends final events.
     */
    destroy() {
      if (this.observer) {
        this.observer.unobserve(this.adElement);
        this.observer = null;
      }
      this.stopVisibilityCheck();
      this.updateViewTime();
      this.updateHoverTime();
      this.sendTotalTimeInView();
      this.sendHoverData();
      if (this.adType === "video" && !this.hasEnded) {
        this.sendVideoPlaybackData();
      }
    }
  }

  /**
   * AdLoader class for fetching and rendering ads.
   */
  class AdLoader {
    constructor(sdk) {
      this.sdk = sdk;
      this.adServeUrl = sdk.adServeUrl;
      this.adTrackingUrl = sdk.adTrackingUrl;
    }

    async loadAdCard() {
      const script = document.createElement("script");
      document.head.appendChild(script);
      script.src = "/adcard.js";
    }

    async loadAds(adSlots = null) {
      const slots = adSlots || document.querySelectorAll(".adsbyadgeist");
      const [fingerprint, userIP] = await Promise.all([
        this.sdk.cdpManager.collector.getDeviceFingerprint(),
        this.sdk.cdpManager.collector.getUserIP(),
      ]);
      for (const slot of slots) {
        try {
          const publisherId = this.sdk.publisherId;
          const apiKey = this.sdk.apiKey;
          const { adSpaceId, buyType } = this.getAdSlotAttributes(slot);
          if (!adSpaceId || !publisherId || !apiKey || !buyType) {
            this.sdk.logger.log("Missing required attributes for ad slot");
            continue;
          }
          let response;
          if (buyType === "FIXED") {
            response = await fetch(`${this.adServeUrl}/v2/dsp/ad/fixed`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                adSpaceId,
                timeZone: Utils.getUserTimezone(),
                userAgent: navigator.userAgent,
                device: {
                  ...this.sdk.deviceInfo,
                },
                companyId: "68f8c700c40a64049896a72d",
                origin: "https://hackathon-lake-nine.vercel.app",
              }),
            });
          } else {
            response = await fetch(
              `${this.adServeUrl}/v1/app/ssp/bid?${new URLSearchParams({
                adSpaceId,
                companyId: publisherId,
                test: this.sdk.env === "development" ? "1" : "0",
              })}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-user-id": fingerprint,
                  "x-platform": "website",
                  "x-api-key": apiKey,
                  "x-forwarded-for": userIP || "",
                },
                body: JSON.stringify({
                  siteDto: { page: window.location.href },
                }),
              }
            );
          }

          if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
          const adData = await response.json();
          if (adData) this.renderAd(slot, adData, fingerprint);
        } catch (error) {
          this.sdk.logger.log(`Ad loading error for slot: ${error.message}`);
        }
      }
    }

    /**
     * Renders ad content into a slot.
     * @param {HTMLElement} slot - Ad slot element.
     * @param {object} adData - Ad data from server.
     * @param {string} fingerprint - User fingerprint.
     */
    renderAd(slot, adData, fingerprint) {
      const { adSpaceId, buyType, isAdspaceResponsive, adType } =
        this.getAdSlotAttributes(slot);

      let adDetail = buyType === "FIXED" ? adData : adData?.data;

      if (
        (buyType === "FIXED" && !adData?.creatives?.[0]) ||
        (buyType !== "FIXED" && !adDetail?.seatBid?.[0]?.bid?.[0])
      ) {
        this.sdk.logger.log("Invalid ad data");
        return;
      }
      let creativeData;
      if (buyType === "FIXED") {
        creativeData = adDetail;
      } else {
        creativeData = adDetail.seatBid[0].bid[0]?.ext;
      }

      // Normalize ctaUrl
      const normalizeUrl = (url) => {
        if (!url) return url;
        if (url.startsWith("www.")) return `https://${url}`;
        if (!url.match(/^[a-zA-Z]+:\/\//)) return `https://${url}`;
        return url;
      };

      let ad;
      let bidResponseMetadata;
      if (buyType === "FIXED") {
        ad = {
          creativeUrl: creativeData?.creatives?.[0].fileUrl,
          clickUrl: normalizeUrl(creativeData?.creatives?.[0].ctaUrl),
          type: adType,
          fileUrl: creativeData?.creatives?.[0].fileUrl,
          title: creativeData?.creatives?.[0]?.title,
          description: creativeData?.creatives?.[0]?.description,
          altText: creativeData?.creatives?.[0]?.altText || "",
          scriptUrl: creativeData?.scriptUrl,
          brandName: creativeData?.advertiser?.name || "",
          creativeType: creativeData?.creatives?.[0]?.type || "image",
          thumbnailUrl: creativeData?.creatives?.[0]?.thumbnailUrl || "",
        };
        bidResponseMetadata = {
          responseId: creativeData.id || "",
          trackId: creativeData.signature || "",
          campaignId: creativeData.campaignId || "",
          responseGeneratedAt: creativeData.generatedAt || "",
          metaData: creativeData.metaData || "",
        };
      } else {
        ad = {
          creativeUrl: creativeData?.creativeUrl,
          clickUrl: normalizeUrl(creativeData?.ctaUrl),
          type: adType,
          fileUrl: adDetail?.creative?.fileUrl,
          title: creativeData?.creativeTitle || "Ad Title",
          description: creativeData?.creativeDescription || "Ad Description",
          altText: creativeData?.creatives?.[0]?.altText || "",
          scriptUrl: creativeData?.scriptUrl,
          brandName: creativeData?.brandName || "",
          creativeType: creativeData?.type || "image",
          thumbnailUrl: creativeData?.thumbnailUrl || "",
        };
        bidResponseMetadata = {
          responseId: adDetail.id || "",
          trackId: adDetail.id || "",
          campaignId: adDetail.seatBid[0].bid[0].id,
          responseGeneratedAt: new Date().toISOString(),
        };
      }

      if (!ad.clickUrl) {
        this.sdk.logger.log("Missing or invalid ctaUrl");
        return;
      }

      const { width, height } = slot.getBoundingClientRect();
      const containerWidth = `${width}px`;
      const containerHeight = `${height}px`;

      const adElementId = `adgeist_ads_iframe_${adSpaceId}`;
      const startTime = performance.now();

      let adCard;

      if (adType === "banner" || adType === "video" || adType === "display") {
        console.log(ad, "ad");

        const adCardRenderer = new window.AdCard({
          adElementId: adElementId,
          title: ad.title,
          description: ad.description,
          altText: ad.altText,
          name: "Brand Name",
          ctaUrl: ad.clickUrl,
          fileUrl: ad.creativeUrl,
          type: adType,
          isResponsive: isAdspaceResponsive,
          height: containerHeight,
          width: containerWidth,
          mediaType: ad.creativeType,
          adspaceType: adType,
          media: [
            {
              src: ad.creativeUrl,
              thumbnailUrl: ad.thumbnailUrl,
            },
          ],
        });
        adCard = adCardRenderer.renderHtml();
      } else if (adType === "richmedia" && ad.scriptUrl) {
        this.injectScript(ad.scriptUrl, () =>
          this.sdk.logger.log("Rich media ad loaded")
        );
        return;
      } else {
        this.sdk.logger.log(
          `Unsupported slot type or missing scriptUrl: ${adType}`
        );
        return;
      }

      const iframe = document.createElement("iframe");
      iframe.setAttribute("id", adElementId);
      iframe.setAttribute("width", containerWidth);
      iframe.setAttribute("height", containerHeight);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("scrolling", "no");
      iframe.style.border = "none";
      iframe.srcdoc = adCard;
      slot.innerHTML = "";
      slot.appendChild(iframe);

      iframe.addEventListener("load", () => {
        const adElement = document.querySelector(`#${adElementId}`);
        if (adElement) {
          const tracker = new AdTracker(
            this.sdk,
            adElementId,
            adSpaceId,
            adType,
            buyType,
            startTime,
            bidResponseMetadata
          );
          this.sdk.adTrackers.set(adElementId, tracker);
        } else {
          this.sdk.logger.log("No ad element found for tracking");
        }
      });
    }

    injectScript(url, callback) {
      const trustedDomains = [
        "trusted-domain.com",
        "another-trusted-domain.com",
      ];
      if (!url.match(new RegExp(`^https://(${trustedDomains.join("|")})`))) {
        this.sdk.logger.log(`Invalid script URL: ${url}`);
        return;
      }
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.onload = callback;
      script.onerror = () => this.sdk.logger.log(`Script load failed: ${url}`);
      document.head.appendChild(script);
    }

    getAdSlotAttributes(slotElement) {
      return {
        adSpaceId: slotElement?.getAttribute("data-ad-slot") || "",
        buyType: slotElement?.getAttribute("data-buy-type") || "",
        isAdspaceResponsive:
          slotElement?.getAttribute("data-responsive") !== "false",
        adType: slotElement?.getAttribute("data-slot-type") || "banner",
      };
    }

    createBannerAd(ad, width, height) {
      const safeCreativeUrl = Utils.sanitizeUrl(ad.creativeUrl);
      const safeClickUrl = Utils.sanitizeUrl(ad.clickUrl);
      return `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  * { box-sizing: border-box; margin: 0; padding: 0; font-family: system-ui; }
                  html, body { width: 100%; height: 100%; overflow: hidden; }
                </style>
              </head>
              <body>
                <a href="${safeClickUrl}" target="_blank" class="adgeist-ad" style="width: ${width}; height: ${height}; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; cursor: pointer; text-decoration: none;">
                  <div style="width: 100%; height: 70%; background-color: white; position: relative;">
                    <div style="position: absolute; top: 10px; left: 10px; border: 2px solid rgb(99, 170, 117); border-radius: 5px; padding: 2px 5px; background-color: white;">
                      <p style="color: rgb(99, 170, 117);">ad</p>
                    </div>
                    <img src="${safeCreativeUrl}" alt="Ad" style="width: 100%; height: 100%; object-fit: contain;">
                  </div>
                  <div style="width: 100%; padding: 10px 10px; background-color: #FFF; display: flex; flex-direction: row; gap: 5px; align-items: center;">
                    <div style="flex: 1; overflow: hidden;">
                      <h3 style="font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; color: #000000BB; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${ad.title}
                      </h3>
                      <p style="font-family: system-ui, sans-serif; font-size: 12px; color: #555; white-space: nowrap; overflow: hidden; margin: 2.5px 0px 5px 0px; text-overflow: ellipsis;">
                        ${ad.description}
                      </p>
                      <p style="font-family: system-ui, sans-serif; font-size: 12px; opacity:0.50; color: #555; text-transform: capitalize; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                       ${ad.brandName}
                      </p>
                    </div>
                    <img src="https://d2cfeg6k9cklz9.cloudfront.net/ad-icons/Button.png" alt="Ad" style="width: 70px; height: 30px; object-fit: cover;">
                  </div>
                </a>
              </body>
            </html>
            `;
    }

    /**
     * Creates HTML for a video ad with mute/unmute and play/pause functionality.
     * @param {object} ad - Ad data.
     * @param {string} width - Container width.
     * @param {string} height - Container height.
     * @param {string} adElementId - The ID of the ad element.
     * @returns {string} HTML content.
     */
    createVideoAd(ad, width, height, adElementId) {
      const safeCreativeUrl = Utils.sanitizeUrl(ad.creativeUrl);
      const safeClickUrl = Utils.sanitizeUrl(ad.clickUrl);

      return `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  * { box-sizing: border-box; margin: 0; padding: 0; }
                  html, body { width: 100%; height: 100%; overflow: hidden; }
                  .mute-button { cursor: pointer; transition: opacity 0.2s; }
                  .mute-button:hover { opacity: 0.8; }
                </style>
              </head>
              <body>
                <a href="${safeClickUrl}" target="_blank" class="adgeist-ad" style="width: ${width}; height: ${height}; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; cursor: pointer; text-decoration: none;">
                  <div style="width: 100%; height: 70%; background-color: white; position: relative;">
                    <div style="position: absolute; top: 10px; left: 10px; border: 2px solid rgb(99, 170, 117); border-radius: 5px; padding: 2px 5px; background-color: white;">
                      <p style="color: rgb(99, 170, 117);">ad</p>
                    </div>
                    <video class="ad-video" muted style="width: 100%; height: 100%; object-fit: contain;">
                      <source src="${safeCreativeUrl}" type="video/mp4">
                    </video>
                    <img id="play-toggle" class="mute-button" src="https://d2cfeg6k9cklz9.cloudfront.net/ad-icons/Pause.png" alt="Toggle Play" style="width: 30px; height: 30px; object-fit: cover; position: absolute; bottom: 8px; left: 10px;">
                    <img id="mute-toggle" class="mute-button" src="https://d2cfeg6k9cklz9.cloudfront.net/ad-icons/Muted.png" alt="Toggle Mute" style="width: 30px; height: 30px; object-fit: cover; position: absolute; bottom: 10px; right: 10px;">
                  </div>
                  <div style="width: 100%; padding: 10px 10px; background-color: #FFF; display: flex; flex-direction: row; gap: 5px; align-items: center;">
                    <div style="flex: 1; overflow: hidden;">
                      <h3 style="font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; color: #000000BB; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${ad.title}
                      </h3>
                      <p style="font-family: system-ui, sans-serif; font-size: 12px; color: #555; white-space: nowrap; overflow: hidden; margin: 2.5px 0px 5px 0px; text-overflow: ellipsis;">
                        ${ad.description}
                      </p>
                      <p style="font-family: system-ui, sans-serif; font-size: 12px; opacity:0.50; color: #555; text-transform: capitalize; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                       ${ad.brandName}
                      </p>
                    </div>
                    <img src="https://d2cfeg6k9cklz9.cloudfront.net/ad-icons/Button.png" alt="Ad" style="width: 70px; height: 30px; object-fit: cover;">
                  </div>
                </a>
                <script>
                  const video = document.querySelector('.ad-video');
                  const muteToggle = document.getElementById('mute-toggle');
                  const playToggle = document.getElementById('play-toggle');
                  const muteIcon = 'https://d2cfeg6k9cklz9.cloudfront.net/ad-icons/Muted.png';
                  const unmuteIcon = 'https://d2cfeg6k9cklz9.cloudfront.net/ad-icons/Unmuted.png';
                  const playIcon = 'https://d2cfeg6k9cklz9.cloudfront.net/ad-icons/Play.png';
                  const pauseIcon = 'https://d2cfeg6k9cklz9.cloudfront.net/ad-icons/Pause.png';

                  // Play/Pause toggle
                  playToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    const wasPaused = video.paused;
                    playToggle.src = video.paused ? playIcon : pauseIcon;

                    if (wasPaused) {
                      video.play().catch(e => console.log('Play failed', e));
                    } else {
                      video.pause();
                    }
                  });

                  // Update icons on play/pause events
                  video.addEventListener('play', () => {
                    playToggle.src = pauseIcon;
                  });
                  video.addEventListener('pause', () => {
                    playToggle.src = playIcon;
                  });

                  // Mute/Unmute toggle
                  muteToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    video.muted = !video.muted;
                    muteToggle.src = video.muted ? muteIcon : unmuteIcon;

                    window.parent.postMessage({
                      type: 'adgeist_mute_event',
                      adElementId: '${adElementId}',
                      muted: video.muted
                    }, '*');
                  });

                 // Listen for mute commands from parent window
                  window.addEventListener('message', (event) => {
                    if (event.data.type === 'adgeist_mute' && event.data.mute) {
                      video.muted = true;
                      muteToggle.src = muteIcon;
                    }
                  });
                </script>
              </body>
            </html>
            `;
    }
  }

  /**
   * AdSlotObserver class for observing DOM changes and managing ad queue.
   */
  class AdSlotObserver {
    constructor(sdk, adLoader) {
      this.sdk = sdk;
      this.adLoader = adLoader;
      this.observer = null;
    }

    observeAdSlots() {
      const container =
        document.querySelector(".ad-container") || document.body;
      this.observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              if (node.classList.contains("adsbyadgeist")) {
                window.sspAdsQueue.push(node);
              }
              node
                .querySelectorAll(".adsbyadgeist")
                .forEach((adSlot) => window.sspAdsQueue.push(adSlot));
              this.processAdQueue();
            }
          });
        });
      });
      this.observer.observe(container, {
        childList: true,
        subtree: true,
      });
      container.querySelectorAll(".adsbyadgeist").forEach((adSlot) => {
        window.sspAdsQueue.push(adSlot);
        this.processAdQueue();
      });
    }

    processAdQueue() {
      while (window.sspAdsQueue.length > 0) {
        this.adLoader.loadAds([window.sspAdsQueue.shift()]);
      }
    }
  }

  /**
   * AdgeistSDK class for initializing and coordinating components.
   */
  class AdgeistSDK {
    constructor() {
      const script = document.currentScript;
      this.adServeUrl = "https://beta.v2.bg-services.adgeist.ai";
      this.adTrackingUrl = "https://beta.v2.bg-services.adgeist.ai";
      this.cdpUrl =
        script.getAttribute("data-cdp-url") ||
        "https://rl2ptnqw5f.execute-api.ap-south-1.amazonaws.com";
      this.shouldIngestEventsToCDP =
        !script.getAttribute("data-should-ingest-events-to-cdp") ||
        script.getAttribute("data-should-ingest-events-to-cdp") === "true";
      this.env = script.getAttribute("data-env") || "production";
      this.publisherId = script.getAttribute("data-publisher-id") || "";
      this.apiKey = script.getAttribute("data-api-key") || "";
      this.logger = new Logger(this.env);
      this.cdpManager = new CDPManager(this);
      this.adLoader = new AdLoader(this);
      this.adSlotObserver = new AdSlotObserver(this, this.adLoader);
      this.adAudioManager = new AdAudioManager(this);
      this.deviceInfoCollector = new DeviceInfoCollector(this);
      this.adTrackers = new Map();
      this.deviceInfo = null;
    }

    async init() {
      try {
        this.deviceInfo = await this.deviceInfoCollector.getDeviceInfo();
        await this.cdpManager.sendPageMetadata();
        this.adSlotObserver.observeAdSlots();
        this.adLoader.loadAdCard();
        this.logger.log("SDK initialized successfully");
      } catch (error) {
        this.logger.log(`Initialization failed: ${error.message}`);
      }
    }

    async destroy() {
      if (this.adSlotObserver.observer) {
        this.adSlotObserver.observer.disconnect();
        this.adSlotObserver.observer = null;
      }
      this.adTrackers.forEach((tracker) => tracker.destroy());
      this.adTrackers.clear();
      window.removeEventListener("popstate", this.handleRouteChange);
    }

    handleRouteChange = () => {
      setTimeout(() => {
        this.cdpManager.sendPageMetadata();
        this.adTrackers.forEach((tracker) => tracker.destroy());
        this.adTrackers.clear();
        this.adSlotObserver.observeAdSlots();
      }, 200);
    };
  }

  // Initialize SDK
  const sdkInstance = new AdgeistSDK();

  // Setup global interface
  window.sspAdsQueue = window.sspAdsQueue || [];
  window.adsbyadgeist = window.adsbyadgeist || {
    push: (...args) => sdkInstance.adLoader.loadAds(args.length ? args : null),
    trackCustomEvent: (eventType, eventData) =>
      sdkInstance.cdpManager.trackCustomEvent(eventType, eventData),
    setUserDetails: (details) => sdkInstance.cdpManager.setUserDetails(details),
    showConsentBanner: () =>
      sdkInstance.cdpManager.consentManager.showConsentBanner(),
    updateAdgeistUserConsent: (consentGiven) =>
      sdkInstance.cdpManager.consentManager.updateAdgeistUserConsent(
        consentGiven
      ),
    getUserConsent: () =>
      sdkInstance.cdpManager.consentManager.getUserConsent(),
    destroy: () => sdkInstance.destroy(),
    version: DEFAULTS.ADGEIST_VERSION,
  };

  // Handle SPA route changes
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    sdkInstance.handleRouteChange();
  };
  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    sdkInstance.handleRouteChange();
  };
  window.addEventListener("popstate", sdkInstance.handleRouteChange);

  // Initialize metadata sending on page load
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(() => sdkInstance.cdpManager.sendPageMetadata(), 0);
  } else {
    document.addEventListener("DOMContentLoaded", () =>
      sdkInstance.cdpManager.sendPageMetadata()
    );
  }

  // Start SDK
  sdkInstance.init();
})();
