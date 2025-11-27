(function () {
  "use strict";

  // Inject shared DISPLAY_CSS styles once
  const DISPLAY_STYLE_ID = "adcard-v2-styles";
  const BANNER_STYLES_ID = "banner-card-styles";

  const DISPLAY_CSS = `
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; }
    .ad-card-container {
      container-type: size;
      container-name: ad-card;
      max-height: 900px;
      max-width: 1200px;
      overflow: hidden;
      outline: 1px solid #E0E0E0;
      background-color: #FFFFFF;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .ad-title-text {
      margin: 0;
      color: #000;
    }
    .ad-description-text {
      margin: 0;
      color: #4B5563;
    }
    .ad-name-text {
      margin: 0;
      color: #9CA3AF;
    }
    .cta-button {
      background: #85C896;
      color: rgba(29, 29, 29, 1);
      border-radius: 9999px;
      padding: 6px 16px;
      font-weight: 500;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      white-space: nowrap;
      box-shadow:
        inset 0 0 2px -2px #ACFFB1,
        inset 8px 3px 15px 0 #6FC974,
        inset -4px -4px 13px -5px rgba(51,51,51,0.74),
        inset 4px 0 4px 0 rgba(38,100,42,0.68);
      transition: transform .2s;
    }
    .cta-button:hover { transform: scale(1.01); }
`;

  const BANNER_CSS = `
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; }
      .banner-ad-card {
        container-type: size;
        container-name: banner-ad;
        max-width: 1200px;
        min-width: 240px;
        min-height: 50px;
        max-height: 900px;
        overflow: hidden;
        outline: 1px solid #e0e0e0;
        background-color: #d5d4d4ff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
      }

      .ad-media {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .ad-media img,
      .ad-media video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
      }

      .mute-button { cursor: pointer; transition: opacity 0.2s; }
      .mute-button:hover { opacity: 0.8; }
  `;

  function ensureHttpProtocol(url) {
    if (!url) return "";
    if (!/^https?:\/\//i.test(url)) return "https://" + url;
    return url;
  }

  function getAdLayout(width, height) {
    const ratio = width / height;
    const heightDifference = height > width ? height - width : 0;
    console.log(heightDifference, "heightDifference");

    if (height > 450 && width > 450) return null;
    if (heightDifference > 60) return "layout-4rows";
    if (ratio <= 1.4) return "layout-3rows";
    if (ratio <= 2) return "layout-2rows";
    if (ratio <= 3.3) return "layout-2row-2col";
    return "layout-1row";
  }

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

  class AdCard {
    constructor(options = {}) {
      this.adAudioManager = new AdAudioManager(this);
      this.adElementId = options.adElementId;
      this.title = options.title || "Headline 25 characters";
      this.description =
        options.description ||
        "Body text with 50 characters of describing the advertisement.";
      this.name = options.name || "-";
      this.ctaUrl = options.ctaUrl || "https://www.example.com";
      this.fileUrl = options.fileUrl || "/assets/png/dummy-preview-bg.png";
      this.type = options.type || "image";
      this.isResponsive = options.isResponsive ?? false;
      this.responsiveType = options.responsiveType || "Square";
      this.width = parseInt(options.width || 300);
      this.height = parseInt(options.height || 300);
      this.appliedClass = getAdLayout(this.width, this.height);
      this.adspaceType = options.adspaceType || "banner";
      this.media = options?.media || [];
      this.mediaType = options?.mediaType || "image";
      this.altText = options?.altText || "";
    }

    renderHtml() {
      console.log(this.adspaceType, "this.adspaceType");

      if (this.adspaceType === "banner") {
        const bannerAdCard = new BannerAdCard(this);
        return bannerAdCard.renderBannerHtml();
      } else if (this.adspaceType === "display") {
        const displayAdCard = new DisplayAdCard(this);
        return displayAdCard.renderDisplayHtml();
      }
    }

    mount(targetEl) {
      if (!targetEl) {
        throw new Error("AdCard: mount target element not found");
      }
      targetEl.innerHTML = this.renderHtml();
    }
  }

  class BannerAdCard extends AdCard {
    constructor(options = {}) {
      super(options);
      this.isResponsive = options.isResponsive ?? true;
      this.media = options?.media || [];
      this.ctaUrl = options?.ctaUrl || "#";
      this.mediaType = options?.mediaType || "image";
      this.adElementId = options?.adElementId;
      this.altText = options?.altText || "Banner Image";
    }

    renderBannerHtml() {
      const rawWidth = this.isResponsive ? "100%" : this.width + "px";
      const rawHeight = this.isResponsive ? "100%" : this.height + "px";

      const getEffectiveMedia = () => {
        if (!Array.isArray(this.media) || this.media.length === 0) {
          return null;
        }

        if (this.media.length === 1) return this.media[0];

        const width = parseFloat(this.width);
        const height = parseFloat(this.height);
        if (!width || !height || height === 0) {
          return this.media[0];
        }
        const containerRatio = width / height;

        return this.media.reduce((closest, media) => {
          const mediaRatio = parseFloat(media.ratio);
          if (!isFinite(mediaRatio)) return closest; // skip invalid ratios

          const diff = Math.abs(containerRatio - mediaRatio);
          const closestDiff = Math.abs(
            containerRatio - parseFloat(closest.ratio)
          );

          return diff < closestDiff ? media : closest;
        });
      };

      return `
        <style id="${BANNER_STYLES_ID}">${BANNER_CSS}</style>
        <a href="${ensureHttpProtocol(
          this.ctaUrl
        )}" target="_blank" id="banner-container" class="banner-ad-card" style="width:${rawWidth};height:${rawHeight};">
          <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;">AD</span>

          <div class="ad-media adgeist-ad">
             ${
               this.mediaType === "video"
                 ? `
                  <video
                    id="ad-video"
                    class="media"
                    poster="${getEffectiveMedia()?.thumbnailUrl || ""}" 
                    autoplay
                    loop 
                    muted 
                    style="width: 100%; height: 100%; object-fit: contain;" 
                    onloadeddata="if(window.Android){window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'}))}"
                  }>
                      <source src="${
                        getEffectiveMedia()?.src || ""
                      }" type="video/mp4">
                  </video>
                  `
                 : `
                <img
                  class="media"
                  src="${getEffectiveMedia()?.src || ""}"
                  fallback="${getEffectiveMedia()?.thumbnailUrl || ""}"
                  alt="${this.altText}"
                  loading="eager"
                  style="aspect-ratio: ${
                    getEffectiveMedia()?.ratio || "1.91/1"
                  };"
                  type="${getEffectiveMedia()?.mimeType || "image/*"}"
                  onload="if(window.Android){window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'}))}"
                />
              `
             }
          </div>
        </a>
      `;
    }
  }

  class DisplayAdCard extends AdCard {
    constructor(options = {}) {
      super(options);
    }

    estimateTextHeight(chars, baseSize, isBold, availableWidth) {
      const effectiveSize = baseSize;
      // Increased multiplier from 0.5 to 0.6 to be more conservative and prevent clipping
      const avgCharWidth = effectiveSize * 0.6 * (isBold ? 1.1 : 1.0);
      const totalTextWidth = chars * avgCharWidth;
      const lines = Math.max(1, Math.ceil(totalTextWidth / availableWidth));
      // Increased line height multiplier for safety
      const lineHeight = effectiveSize * 1.4;
      return lines * lineHeight;
    }

    getLayoutConfig() {
      const width = this.width;
      const height = this.height;
      const MEDIA_ASPECT_RATIO = 1.91;

      // Calculate theoretical height if full width
      let stackedImageHeight = width / MEDIA_ASPECT_RATIO;
      let remainingHeight = height - stackedImageHeight;

      // Stacked Preferred
      const MIN_TEXT_HEIGHT = 40;
      const isStacked = remainingHeight >= MIN_TEXT_HEIGHT;

      if (isStacked) {
        // Enforce Min Content Height (e.g. 35% of total height)
        const minContentH = height * 0.35;
        if (remainingHeight < minContentH) {
          stackedImageHeight = height - minContentH;
        }

        return {
          type: "stacked",
          imageHeight: stackedImageHeight,
          imageWidth: width,
          contentHeight: remainingHeight,
          flexDirection: "column",
        };
      } else {
        // Side-by-Side Fallback
        let imgH = height;
        let imgW = imgH * MEDIA_ASPECT_RATIO;

        // Micro Banner Optimization (Height < 70px)
        // User Request: "scale the image down and make space for title"
        if (height < 70) {
          // Force image to be smaller to give text room
          // Max 20% width or aspect ratio width, whichever is smaller
          const maxMicroImgWidth = width * 0.2;
          imgW = Math.min(imgW, maxMicroImgWidth);
        }

        const MIN_TEXT_WIDTH = 110;
        let maxImgW = width - MIN_TEXT_WIDTH;

        // Enforce Min Content Width (e.g. 45% of total width)
        const minContentW = width * 0.45;
        if (width - imgW < minContentW) {
          maxImgW = width - minContentW;
        }

        if (imgW > maxImgW) {
          imgW = Math.max(0, maxImgW);
          // Force full height to allow pillarboxing/letterboxing within the container
          imgH = height;
        }

        return {
          type: "side",
          imageHeight: imgH,
          imageWidth: imgW,
          contentHeight: height,
          flexDirection: "row",
        };
      }
    }
    calculateLayoutDetails(layoutConfig) {
      const width = this.width;
      const height = this.height;
      const isStacked = layoutConfig.type === "stacked";

      const contentAreaHeight = isStacked
        ? height - layoutConfig.imageHeight
        : height;
      const contentAreaWidth = isStacked
        ? width
        : width - layoutConfig.imageWidth;

      // Dynamic Padding
      let PADDING_Y = height < 150 ? 16 : height < 350 ? 20 : 32;
      let GAP = 4;
      const PADDING_X = width < 200 ? 16 : 32;

      if (height < 60) {
        PADDING_Y = 8;
        GAP = 2;
      }

      const isSplitContent = !isStacked && contentAreaWidth > 480;
      const isHorizontalContent = !isSplitContent && height < 90;

      let availableTextWidth = Math.max(10, contentAreaWidth - PADDING_X);
      const hCTA = 40;
      const wCTA = 100;

      if (isHorizontalContent) {
        availableTextWidth -= wCTA;
      } else if (isSplitContent) {
        availableTextWidth = (contentAreaWidth - PADDING_X - 16) / 2;
      } else if (height < 90 && !isStacked) {
        availableTextWidth = (contentAreaWidth - PADDING_X - 32) / 2;
      }

      const baseTitleSize = 16;
      const baseBodySize = 14;
      const availableH = contentAreaHeight - PADDING_Y;

      // --- Helper to try a specific configuration ---
      const tryLayout = (showTitle, showBody, showCTA) => {
        // 1. Determine Content Height at Base Scale (Scale = 1.0)
        let contentHeightBase = 0;
        let hTitleBase = 0;
        let hBodyBase = 0;

        if (showTitle) {
          hTitleBase = this.estimateTextHeight(
            this.title.length,
            baseTitleSize,
            true,
            availableTextWidth
          );
        }
        if (showBody) {
          hBodyBase = this.estimateTextHeight(
            this.description.length,
            baseBodySize,
            false,
            availableTextWidth
          );
        }

        if (isSplitContent) {
          // Split: Max of Col1 (Title) or Col2 (Desc)
          const hCol1 = showTitle ? hTitleBase + GAP : 0;
          const hCol2 = showBody ? hBodyBase : 0;
          contentHeightBase = Math.max(hCol1, hCol2);
        } else {
          // Stacked/Standard: Sum of heights
          if (showTitle) contentHeightBase += hTitleBase;
          if (showBody) contentHeightBase += hBodyBase;
          if (showTitle && showBody) contentHeightBase += GAP;

          if (showCTA && !isHorizontalContent) {
            // CTA Height + Margin
            contentHeightBase += 16 + hCTA; // 16px margin
          }
        }

        // 2. Calculate Ideal Scale to fill Available Height
        // availableH = scale * contentHeightBase  => scale = availableH / contentHeightBase
        // BUT text height doesn't scale linearly with font size (wrapping changes).
        // We use a heuristic: Scale ~ sqrt(HeightRatio) or similar, but let's try a direct ratio first
        // and then clamp.

        let targetScale = 1.0;
        if (contentHeightBase > 0) {
          // If we have content, we want it to fill the space comfortably.
          // Let's aim for filling 90% of space to leave some breathing room?
          // Or 100%? Let's try to calculate the scale that makes it FIT.

          // We can't easily inverse `estimateTextHeight`.
          // So we use the iterative approach from before, but we start with a guess.

          const heightRatio = availableH / contentHeightBase;
          targetScale = Math.sqrt(heightRatio); // Heuristic
        }

        // Clamp Scale
        const maxScaleByWidth = availableTextWidth / 7 / baseTitleSize; // Prevent super wide chars
        const maxScale = Math.min(2.5, maxScaleByWidth); // Allow up to 2.5x if space permits
        targetScale = Math.max(0.1, Math.min(maxScale, targetScale));

        // 3. Verify Fit with Iterative Downscaling
        let finalScale = targetScale;
        let fits = false;
        let retries = 10;

        while (retries >= 0) {
          const titleSizePx = Math.max(14, baseTitleSize * finalScale);
          const bodySizePx = Math.max(12, baseBodySize * finalScale);

          let currentHTitle = 0;
          let currentHBody = 0;

          if (showTitle) {
            currentHTitle = this.estimateTextHeight(
              this.title.length,
              titleSizePx,
              true,
              availableTextWidth
            );
          }
          if (showBody) {
            currentHBody = this.estimateTextHeight(
              this.description.length,
              bodySizePx,
              false,
              availableTextWidth
            );
          }

          let neededH = 0;
          if (isSplitContent) {
            const hCol1 = showTitle ? currentHTitle + GAP : 0;
            const hCol2 = showBody ? currentHBody : 0;
            if (hCol1 <= availableH && hCol2 <= availableH) {
              fits = true;
            }
          } else {
            if (showTitle) neededH += currentHTitle;
            if (showBody) neededH += currentHBody;
            if (showTitle && showBody) neededH += GAP;

            if (showCTA && !isHorizontalContent) {
              const ctaFontSize = Math.max(12, 14 * finalScale);
              const currentHCta = ctaFontSize * 1.2 + 12;
              neededH += 16 + currentHCta;
            }

            if (neededH <= availableH) {
              fits = true;
            }
          }

          if (fits) break;

          finalScale *= 0.9; // Reduce by 10%
          retries--;
        }

        return {
          fits,
          scale: finalScale,
          showTitle,
          showBody,
          showCTA,
        };
      };

      // --- Priority Configurations ---
      // 1. Full Content: Title + Desc + CTA
      // 2. No Desc: Title + CTA (Preferred for performance)
      // 3. No CTA: Title + Desc (Fallback)
      // 4. Minimal: Title Only

      const configs = [
        { t: true, d: true, c: true }, // Full
        { t: true, d: true, c: false }, // No CTA
        { t: true, d: false, c: false }, // Title Only (Preferred over Title+CTA if space is tight)
        { t: true, d: false, c: true }, // No Desc (Title + CTA)
      ];

      let bestLayout = null;

      for (const config of configs) {
        // Skip CTA if horizontal content mode and height is too small for CTA
        if (config.c && isHorizontalContent && contentAreaHeight < hCTA)
          continue;

        // In Split Content, we rarely want to hide things unless necessary,
        // but the logic still holds: if full doesn't fit, try hiding.

        const result = tryLayout(config.t, config.d, config.c);

        if (result.fits) {
          // If it fits, is it "good enough"?
          // If we are dropping content (e.g. Desc), we should only do it if
          // the Full content scale was terrible (e.g. < 0.6).
          // But here we are iterating in priority order.
          // If Full fits (even at 0.8 scale), we take it.
          // If Full DOESN'T fit (scale dropped below threshold in loop? No, loop just finds MAX scale that fits),
          // Wait, the loop finds *a* scale that fits. It might be 0.1.

          // We need a minimum acceptable scale.
          // For "No CTA" (Title + Desc), we are more lenient because showing description is high priority.
          const isNoCTA = config.d && !config.c;
          const threshold = isNoCTA ? 0.35 : 0.75;

          if (result.scale >= threshold) {
            bestLayout = result;
            break; // Found a good fit!
          }

          // If it fits but scale is tiny, we treat it as "doesn't fit well" and try next config (which has less content, so scale should improve).
          // However, we should keep track of the "best so far" just in case nothing meets the threshold.
          if (!bestLayout || result.scale > bestLayout.scale) {
            bestLayout = result;
          }
        }
      }

      // Fallback if absolutely nothing "fits" (shouldn't happen with Title Only and tiny scale)
      if (!bestLayout) {
        bestLayout = tryLayout(true, false, false); // Force Title Only
      }

      return {
        ...layoutConfig,
        fontSizeScale: bestLayout.scale,
        isHorizontalContent,
        isSplitContent,
        paddingY: PADDING_Y / 2,
        fontSizes: {
          title: Math.max(14, baseTitleSize * bestLayout.scale),
          body: Math.max(12, baseBodySize * bestLayout.scale),
        },
        visible: {
          title: bestLayout.showTitle,
          description: bestLayout.showBody,
          cta: bestLayout.showCTA,
        },
      };
    }

    renderContentHtml(details) {
      const {
        fontSizes,
        visible,
        type,
        isHorizontalContent,
        isSplitContent,
        paddingY,
      } = details;
      const isStacked = type === "stacked";

      // Styles
      const titleStyle = visible.title
        ? `font-size:${fontSizes.title}px;line-height:1.2;margin-bottom:4px;font-weight:700;`
        : "display:none;";
      const descStyle = visible.description
        ? `font-size:${fontSizes.body}px;line-height:1.35;margin-bottom:4px;opacity:0.8;`
        : "display:none;";
      // const nameStyle = visible.name
      //   ? `font-size:${fontSizes.brand}px;line-height:1.2;opacity:0.6;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;`
      //   : 'display:none;'; // Removed
      const ctaStyle = visible.cta
        ? `font-size:${Math.max(12, 14 * details.fontSizeScale)}px;`
        : "display:none;";

      if (isSplitContent) {
        // Split Layout: Col 1 (Title/Name) | Col 2 (Desc) - No CTA, No Separator
        return `
            <div class="ad-content-container" style="flex:1;display:flex;flex-direction:row;align-items:center;padding:${paddingY}px 16px;overflow:visible;justify-content:center;">
                <div style="display:flex;flex-direction:column;justify-content:center;flex:1;padding-right:16px;text-align:left;height:100%;overflow:visible;">
                    <div class="ad-title-text" style="${titleStyle}">${this.title}</div>
                </div>
                <div style="display:flex;flex-direction:column;justify-content:center;flex:2;text-align:left;height:100%;overflow:visible;">
                    <div class="ad-description-text" style="${descStyle}">${this.description}</div>
                </div>
            </div>
        `;
      }

      // Alignment
      const contentDir = isHorizontalContent ? "row" : "column";
      const alignStyle = isStacked
        ? "align-items:center;text-align:center;"
        : "align-items:flex-start;text-align:left;";
      // Horizontal: Space between Text and CTA. Stacked: Center.
      const containerAlign = isHorizontalContent
        ? "align-items:center;justify-content:space-between;text-align:left;"
        : isStacked
        ? "align-items:center;justify-content:space-around;"
        : "align-items:center;justify-content:center;";

      // CTA Margin: Horizontal -> Left margin. Stacked -> Top margin (gap).
      // Note: In Stacked, TextContainer will be flex:1, so it pushes CTA down.
      const ctaMargin = isHorizontalContent
        ? "margin-left:16px;"
        : "margin-top:16px;";

      // Text Container:
      // Horizontal: Width 100%, Center Vertically.
      // Stacked: Flex 1 (to fill space), Center Vertically (justify-content: center).
      const textContainerStyle = isHorizontalContent
        ? "width:100%;justify-content:center;"
        : isStacked
        ? "justify-content:center;width:100%;"
        : "width:100%;";

      return `
        <div class="ad-content-container" style="flex:1;display:flex;flex-direction:${contentDir};${containerAlign}padding:${paddingY}px 16px;overflow:visible;">
            <div style="display:flex;flex-direction:column;${textContainerStyle}${alignStyle}overflow:visible;">
                <div class="ad-title-text" style="${titleStyle}">${
        this.title
      }</div>
                <div class="ad-description-text" style="${descStyle}">${
        this.description
      }</div>
            </div>
            <a href="${ensureHttpProtocol(
              this.ctaUrl
            )}" target="_blank" class="cta-button" style="${ctaStyle}${ctaMargin}flex-shrink:0;">Open</a>
        </div>
      `;
    }

    renderDisplayHtml() {
      const baseConfig = this.getLayoutConfig();
      const details = this.calculateLayoutDetails(baseConfig);
      console.log(details, "details");
      console.log(this.media, "this.media");

      // Use object-fit: contain to allow letterbox/pillarbox
      const media =
        this.mediaType === "video"
          ? `<video
              poster="${this.media[0]?.thumbnailUrl || ""}" 
              autoplay 
              loop 
              playsinline
              muted 
              style="width: 100%; height: 100%; object-fit: contain;" 
              onloadeddata="if(window.Android){window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'}))}"
            }>
              <source src="${this.media[0].src || ""}" type="video/mp4">
            </video>`
          : `<img 
              src="${this.media[0].src}"  
              fallback="${this.media[0]?.thumbnailUrl || ""}"
              alt="${this.altText}" 
              style="width:100%;height:100%;object-fit:contain;"
            />`;

      return `
        <style id="${DISPLAY_STYLE_ID}">${DISPLAY_CSS}</style>
        <a href="${ensureHttpProtocol(this.ctaUrl)}" 
        target="_blank" 
        style="text-decoration:none;color:inherit;" 
        >
          <div class="ad-card-container adgeist-ad"
          style="width:${this.width}px;height:${
        this.height
      }px;display:flex;flex-direction:${details.flexDirection};">
            <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;">AD</span>
            
            <div class="image-container" style="width:${
              details.imageWidth
            }px;height:${
        details.imageHeight
      }px;flex-shrink:0;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#d5d4d4ff;">
              ${media}
            </div>
            
            ${this.renderContentHtml(details)}
          </div>
        </a>
      `;
    }
  }

  window.AdCard = AdCard;
})();
