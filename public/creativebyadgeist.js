(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
      ? define(factory)
      : ((global =
          typeof globalThis !== "undefined" ? globalThis : global || self),
        (global.AdgeistSDK = factory()));
})(this, function () {
  "use strict";

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _assertThisInitialized(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _callSuper(t, o, e) {
    return (
      (o = _getPrototypeOf(o)),
      _possibleConstructorReturn(
        t,
        _isNativeReflectConstruct()
          ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
          : o.apply(t, e),
      )
    );
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      ((o.enumerable = o.enumerable || false),
        (o.configurable = true),
        "value" in o && (o.writable = true),
        Object.defineProperty(e, _toPropertyKey(o.key), o));
    }
  }
  function _createClass(e, r, t) {
    return (
      r && _defineProperties(e.prototype, r),
      t && _defineProperties(e, t),
      Object.defineProperty(e, "prototype", {
        writable: false,
      }),
      e
    );
  }
  function _createForOfIteratorHelper(r, e) {
    var t =
      ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length
              ? {
                  done: true,
                }
              : {
                  done: false,
                  value: r[n++],
                };
          },
          e: function (r) {
            throw r;
          },
          f: F,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    var o,
      a = true,
      u = false;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return ((a = r.done), r);
      },
      e: function (r) {
        ((u = true), (o = r));
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      },
    };
  }
  function _defineProperty(e, r, t) {
    return (
      (r = _toPropertyKey(r)) in e
        ? Object.defineProperty(e, r, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true,
          })
        : (e[r] = t),
      e
    );
  }
  function _getPrototypeOf(t) {
    return (
      (_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      _getPrototypeOf(t)
    );
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    ((t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true,
      },
    })),
      Object.defineProperty(t, "prototype", {
        writable: false,
      }),
      e && _setPrototypeOf(t, e));
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t =
      null == r
        ? null
        : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
          r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = true,
        o = false;
      try {
        if (((i = (t = t.call(r)).next), 0 === l));
        else
          for (
            ;
            !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
            f = !0
          );
      } catch (r) {
        ((o = true), (n = r));
      } finally {
        try {
          if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
            return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      (r &&
        (o = o.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })),
        t.push.apply(t, o));
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2
        ? ownKeys(Object(t), true).forEach(function (r) {
            _defineProperty(e, r, t[r]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : ownKeys(Object(t)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(t, r),
              );
            });
    }
    return e;
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return _assertThisInitialized(t);
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return (
        _regeneratorDefine(
          u,
          "_invoke",
          (function (r, n, o) {
            var i,
              c,
              u,
              f = 0,
              p = o || [],
              y = false,
              G = {
                p: 0,
                n: 0,
                v: e,
                a: d,
                f: d.bind(e, 4),
                d: function (t, r) {
                  return ((i = t), (c = 0), (u = e), (G.n = r), a);
                },
              };
            function d(r, n) {
              for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
                var o,
                  i = p[t],
                  d = G.p,
                  l = i[2];
                r > 3
                  ? (o = l === n) &&
                    ((u = i[(c = i[4]) ? 5 : ((c = 3), 3)]), (i[4] = i[5] = e))
                  : i[0] <= d &&
                    ((o = r < 2 && d < i[1])
                      ? ((c = 0), (G.v = n), (G.n = i[1]))
                      : d < l &&
                        (o = r < 3 || i[0] > n || n > l) &&
                        ((i[4] = r), (i[5] = n), (G.n = l), (c = 0)));
              }
              if (o || r > 1) return a;
              throw ((y = true), n);
            }
            return function (o, p, l) {
              if (f > 1) throw TypeError("Generator is already running");
              for (
                y && 1 === p && d(p, l), c = p, u = l;
                (t = c < 2 ? e : u) || !y;
              ) {
                i ||
                  (c
                    ? c < 3
                      ? (c > 1 && (G.n = -1), d(c, u))
                      : (G.n = u)
                    : (G.v = u));
                try {
                  if (((f = 2), i)) {
                    if ((c || (o = "next"), (t = i[o]))) {
                      if (!(t = t.call(i, u)))
                        throw TypeError("iterator result is not an object");
                      if (!t.done) return t;
                      ((u = t.value), c < 2 && (c = 0));
                    } else
                      (1 === c && (t = i.return) && t.call(i),
                        c < 2 &&
                          ((u = TypeError(
                            "The iterator does not provide a '" +
                              o +
                              "' method",
                          )),
                          (c = 1)));
                    i = e;
                  } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a)
                    break;
                } catch (t) {
                  ((i = e), (c = 1), (u = t));
                } finally {
                  f = 1;
                }
              }
              return {
                value: t,
                done: y,
              };
            };
          })(r, o, i),
          true,
        ),
        u
      );
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n]
        ? t(t([][n]()))
        : (_regeneratorDefine((t = {}), n, function () {
            return this;
          }),
          t),
      u =
        (GeneratorFunctionPrototype.prototype =
        Generator.prototype =
          Object.create(c));
    function f(e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, GeneratorFunctionPrototype)
          : ((e.__proto__ = GeneratorFunctionPrototype),
            _regeneratorDefine(e, o, "GeneratorFunction")),
        (e.prototype = Object.create(u)),
        e
      );
    }
    return (
      (GeneratorFunction.prototype = GeneratorFunctionPrototype),
      _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype),
      _regeneratorDefine(
        GeneratorFunctionPrototype,
        "constructor",
        GeneratorFunction,
      ),
      (GeneratorFunction.displayName = "GeneratorFunction"),
      _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"),
      _regeneratorDefine(u),
      _regeneratorDefine(u, o, "Generator"),
      _regeneratorDefine(u, n, function () {
        return this;
      }),
      _regeneratorDefine(u, "toString", function () {
        return "[object Generator]";
      }),
      (_regenerator = function () {
        return {
          w: i,
          m: f,
        };
      })()
    );
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    ((_regeneratorDefine = function (e, r, n, t) {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      r
        ? i
          ? i(e, r, {
              value: n,
              enumerable: !t,
              configurable: !t,
              writable: !t,
            })
          : (e[r] = n)
        : (o("next", 0), o("throw", 1), o("return", 2));
    }),
      _regeneratorDefine(e, r, n, t));
  }
  function _setPrototypeOf(t, e) {
    return (
      (_setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          }),
      _setPrototypeOf(t, e)
    );
  }
  function _slicedToArray(r, e) {
    return (
      _arrayWithHoles(r) ||
      _iterableToArrayLimit(r, e) ||
      _unsupportedIterableToArray(r, e) ||
      _nonIterableRest()
    );
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return (
      (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (o) {
              return typeof o;
            }
          : function (o) {
              return o &&
                "function" == typeof Symbol &&
                o.constructor === Symbol &&
                o !== Symbol.prototype
                ? "symbol"
                : typeof o;
            }),
      _typeof(o)
    );
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return (
        "Object" === t && r.constructor && (t = r.constructor.name),
        "Map" === t || "Set" === t
          ? Array.from(r)
          : "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            ? _arrayLikeToArray(r, a)
            : void 0
      );
    }
  }

  /**
   * Base class for SDK components that need access to the SDK instance
   */
  var SDKComponent = /*#__PURE__*/ _createClass(function SDKComponent(sdk) {
    _classCallCheck(this, SDKComponent);
    this.sdk = sdk;
  });
  /**
   * Independent Logger class for handling logging across the SDK.
   * No longer depends on SDK instance for configuration.
   */
  var Logger = /*#__PURE__*/ (function () {
    function Logger() {
      var config =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Logger);
      var _a, _b, _c;
      this.config = {
        enableConsoleLogging:
          (_a = config.enableConsoleLogging) !== null && _a !== void 0
            ? _a
            : true,
        enableRemoteLogging:
          (_b = config.enableRemoteLogging) !== null && _b !== void 0
            ? _b
            : false,
        logPrefix:
          (_c = config.logPrefix) !== null && _c !== void 0
            ? _c
            : "[AdgeistSDK]",
      };
    }
    /**
     * Update logger configuration
     */
    return _createClass(Logger, [
      {
        key: "updateConfig",
        value: function updateConfig(newConfig) {
          this.config = _objectSpread2(
            _objectSpread2({}, this.config),
            newConfig,
          );
        },
      },
      {
        key: "log",
        value: function log(message) {
          if (this.config.enableConsoleLogging) {
            console.log("".concat(this.config.logPrefix, " ").concat(message));
          }
        },
      },
      {
        key: "error",
        value: function error(message, data) {
          if (this.config.enableConsoleLogging) {
            console.error(
              "".concat(this.config.logPrefix, " ").concat(message),
              data || "",
            );
          }
          if (this.config.enableRemoteLogging) {
            // send error to remote logging service in production
            this.sendToRemoteService(message, data);
          }
        },
      },
      {
        key: "warn",
        value: function warn(message) {
          if (this.config.enableConsoleLogging) {
            console.warn("".concat(this.config.logPrefix, " ").concat(message));
          }
        },
      },
      {
        key: "sendToRemoteService",
        value: function sendToRemoteService(message, data) {
          // Implementation for remote logging service
          // This would be implemented based on your remote logging requirements
        },
      },
    ]);
  })();

  var AdAudioManager$1 = /*#__PURE__*/ (function (_SDKComponent) {
    function AdAudioManager(sdk) {
      var _this;
      _classCallCheck(this, AdAudioManager);
      _this = _callSuper(this, AdAudioManager, [sdk]);
      _this.activeUnmutedAd = null;
      _this.activeUnmutedAd = null;
      _this.setupMuteEventListener();
      return _this;
    }
    _inherits(AdAudioManager, _SDKComponent);
    return _createClass(AdAudioManager, [
      {
        key: "setupMuteEventListener",
        value: function setupMuteEventListener() {
          var _this2 = this;
          window.addEventListener("message", function (event) {
            if (event.data && event.data.type === "adgeist_mute_event") {
              var eventData = event.data;
              var adElementId = eventData.adElementId,
                muted = eventData.muted;
              if (!muted && _this2.activeUnmutedAd !== adElementId) {
                _this2.activeUnmutedAd = adElementId;
                _this2.muteAllOtherAds(adElementId);
              } else if (muted && _this2.activeUnmutedAd === adElementId) {
                _this2.activeUnmutedAd = null;
              }
            }
          });
        },
      },
      {
        key: "muteAllOtherAds",
        value: function muteAllOtherAds(excludeAdElementId) {
          var _this3 = this;
          var iframes = document.querySelectorAll(
            'iframe[id^="adgeist_ads_iframe_"]',
          );
          iframes.forEach(function (iframe) {
            var _a;
            if (iframe.id !== excludeAdElementId) {
              try {
                var muteCommand = {
                  type: "adgeist_mute",
                  mute: true,
                };
                (_a = iframe.contentWindow) === null || _a === void 0
                  ? void 0
                  : _a.postMessage(muteCommand, "*");
              } catch (error) {
                var errorMessage =
                  error instanceof Error ? error.message : String(error);
                _this3.sdk.logger.log(
                  "Failed to send mute message to iframe "
                    .concat(iframe.id, ": ")
                    .concat(errorMessage),
                );
              }
            }
          });
        },
      },
    ]);
  })(SDKComponent);

  function getUserTimezone() {
    if (typeof Intl !== "undefined" && Intl.DateTimeFormat) {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (_) {}
    }
    var offset = -new Date().getTimezoneOffset() / 60;
    var sign = offset >= 0 ? "+" : "";
    var hours = Math.floor(Math.abs(offset));
    var minutes = (Math.abs(offset) - hours) * 60;
    return minutes
      ? "UTC"
          .concat(sign)
          .concat(hours, ":")
          .concat(minutes.toString().padStart(2, "0"))
      : "UTC".concat(sign).concat(hours);
  }
  function hashString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      var char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash &= hash;
    }
    return hash.toString();
  }
  var calculateValidDimensions = function calculateValidDimensions(
    rawWidth,
    rawHeight,
    adSpaceSpec,
  ) {
    var validWidth = Math.min(
      adSpaceSpec.MAX_WIDTH,
      Math.max(adSpaceSpec.MIN_WIDTH, rawWidth),
    );
    var validHeight = Math.min(
      adSpaceSpec.MAX_HEIGHT,
      Math.max(adSpaceSpec.MIN_HEIGHT, rawHeight),
    );
    return {
      width: "".concat(validWidth, "px"),
      height: "".concat(validHeight, "px"),
    };
  };

  /**
   * Constants for event types and configuration.
   * @constant
   */
  var EVENT_TYPES;
  (function (EVENT_TYPES) {
    EVENT_TYPES["IMPRESSION"] = "IMPRESSION";
    EVENT_TYPES["VIEW"] = "VIEW";
    EVENT_TYPES["TOTAL_VIEW"] = "TOTAL_VIEW";
    EVENT_TYPES["HOVER"] = "HOVER";
    EVENT_TYPES["CLICK"] = "CLICK";
    EVENT_TYPES["VIDEO_PLAYBACK"] = "VIDEO_PLAYBACK";
    EVENT_TYPES["VIDEO_QUARTILE"] = "VIDEO_QUARTILE";
  })(EVENT_TYPES || (EVENT_TYPES = {}));
  var DEFAULTS = {
    VISIBILITY_THRESHOLD: 0.5,
    MIN_VIEW_TIME: 1000,
    VIDEO_MIN_VIEW_TIME: 2000,
    CONSENT_COOKIE_NAME: "adgeist_event_collection_consent",
    ADGEIST_VERSION: "1.0.0",
  };
  var ADSPACE_DIMENSION_CONFIG = {
    banner: {
      MIN_WIDTH: 240,
      MIN_HEIGHT: 50,
      MAX_WIDTH: 1200,
      MAX_HEIGHT: 900,
    },
    display: {
      MIN_WIDTH: 300,
      MIN_HEIGHT: 60,
      MAX_WIDTH: 1200,
      MAX_HEIGHT: 900,
    },
  };

  var AdEventSender = /*#__PURE__*/ (function () {
    function AdEventSender(
      sdk,
      adElementId,
      adSpaceId,
      adType,
      buyType,
      bidResponseMetadata,
    ) {
      _classCallCheck(this, AdEventSender);
      this.viewEventsSent = false;
      this.clickEventsSent = false;
      this.sdk = sdk;
      this.adElementId = adElementId;
      this.adSpaceId = adSpaceId;
      this.responseId = bidResponseMetadata.responseId;
      this.trackId = bidResponseMetadata.trackId;
      this.campaignId = bidResponseMetadata.campaignId;
      this.metaData = bidResponseMetadata.metaData;
      this.adType = adType;
      this.buyType = buyType;
      this.adTrackingUrl = sdk.adTrackingUrl;
      this.expiresAt =
        (bidResponseMetadata === null || bidResponseMetadata === void 0
          ? void 0
          : bidResponseMetadata.expiresAt) || "";
    }
    /**
     * Sends an event to the tracking API.
     * @param eventType - Type of event (e.g., 'IMPRESSION', 'CLICK').
     * @param data - Event-specific data.
     */
    return _createClass(AdEventSender, [
      {
        key: "sendEvent",
        value: (function () {
          var _sendEvent = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee(eventType, data) {
              var currentTime,
                expiresTime,
                _yield$Promise$all,
                _yield$Promise$all2,
                userIP,
                fingerprint,
                analyticsPayload,
                response,
                errorMessage,
                _t;
              return _regenerator().w(
                function (_context) {
                  while (1)
                    switch ((_context.p = _context.n)) {
                      case 0:
                        _context.p = 0;
                        if (!this.expiresAt) {
                          _context.n = 1;
                          break;
                        }
                        currentTime = Date.now();
                        expiresTime = new Date(this.expiresAt).getTime();
                        if (!(currentTime > expiresTime)) {
                          _context.n = 1;
                          break;
                        }
                        this.sdk.logger.log(
                          "Ad event tracking expired for track: ".concat(
                            this.trackId,
                          ),
                        );
                        return _context.a(2);
                      case 1:
                        if (!(eventType === EVENT_TYPES.VIEW)) {
                          _context.n = 3;
                          break;
                        }
                        if (!this.viewEventsSent) {
                          _context.n = 2;
                          break;
                        }
                        this.sdk.logger.log(
                          "VIEW event already sent for track: ".concat(
                            this.trackId,
                          ),
                        );
                        return _context.a(2);
                      case 2:
                        _context.n = 4;
                        break;
                      case 3:
                        if (!(eventType === EVENT_TYPES.CLICK)) {
                          _context.n = 4;
                          break;
                        }
                        if (!this.clickEventsSent) {
                          _context.n = 4;
                          break;
                        }
                        this.sdk.logger.log(
                          "CLICK event already sent for track: ".concat(
                            this.trackId,
                          ),
                        );
                        return _context.a(2);
                      case 4:
                        _context.n = 5;
                        return Promise.all([
                          this.sdk.cdpManager.collector.getUserIP(),
                          this.sdk.cdpManager.collector.getDeviceFingerprint(),
                        ]);
                      case 5:
                        _yield$Promise$all = _context.v;
                        _yield$Promise$all2 = _slicedToArray(
                          _yield$Promise$all,
                          2,
                        );
                        userIP = _yield$Promise$all2[0];
                        fingerprint = _yield$Promise$all2[1];
                        analyticsPayload = this.buildAnalyticsPayload(
                          eventType,
                          data,
                        );
                        if (analyticsPayload) {
                          _context.n = 6;
                          break;
                        }
                        this.sdk.logger.log(
                          "Unknown event type: ".concat(eventType),
                        );
                        return _context.a(2);
                      case 6:
                        if (
                          !(
                            this.buyType === "FIXED" &&
                            !(
                              eventType === EVENT_TYPES.CLICK ||
                              eventType === EVENT_TYPES.VIEW
                            )
                          )
                        ) {
                          _context.n = 7;
                          break;
                        }
                        return _context.a(2);
                      case 7:
                        if (!(this.buyType === "FIXED")) {
                          _context.n = 9;
                          break;
                        }
                        _context.n = 8;
                        return fetch(
                          "".concat(this.adTrackingUrl, "/v2/ssp/impression"),
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(
                              _objectSpread2(
                                {
                                  type: eventType,
                                  metaData: this.metaData,
                                  isTest: this.sdk.isTest,
                                },
                                analyticsPayload,
                              ),
                            ),
                          },
                        );
                      case 8:
                        response = _context.v;
                        _context.n = 11;
                        break;
                      case 9:
                        _context.n = 10;
                        return fetch(
                          ""
                            .concat(
                              this.adTrackingUrl,
                              "/v1/api/analytics/track?",
                            )
                            .concat(
                              new URLSearchParams({
                                campaignId: this.campaignId,
                                companyId: this.sdk.publisherId,
                                adSpaceId: this.adSpaceId,
                                test: this.sdk.isTest ? "1" : "0",
                              }),
                            ),
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              "x-user-id": fingerprint,
                              "x-platform": "website",
                              "x-forwarded-for": userIP || "",
                            },
                            body: JSON.stringify(
                              _objectSpread2(
                                {
                                  eventType: eventType,
                                  winningBidId: this.trackId,
                                  campaignId: this.campaignId,
                                },
                                analyticsPayload,
                              ),
                            ),
                          },
                        );
                      case 10:
                        response = _context.v;
                      case 11:
                        if (response.ok) {
                          _context.n = 12;
                          break;
                        }
                        throw new Error("HTTP error: ".concat(response.status));
                      case 12:
                        if (eventType === EVENT_TYPES.VIEW) {
                          this.viewEventsSent = true;
                        } else if (eventType === EVENT_TYPES.CLICK) {
                          this.clickEventsSent = true;
                        }
                        this.sdk.logger.log(
                          ""
                            .concat(eventType, " tracked for track: ")
                            .concat(this.trackId),
                        );
                        _context.n = 14;
                        break;
                      case 13:
                        _context.p = 13;
                        _t = _context.v;
                        errorMessage =
                          _t instanceof Error ? _t.message : String(_t);
                        this.sdk.logger.error(
                          ""
                            .concat(eventType, " tracking failed: ")
                            .concat(errorMessage),
                        );
                      case 14:
                        return _context.a(2);
                    }
                },
                _callee,
                this,
                [[0, 13]],
              );
            }),
          );
          function sendEvent(_x, _x2) {
            return _sendEvent.apply(this, arguments);
          }
          return sendEvent;
        })(),
        /**
         * Builds the analytics payload based on event type.
         * @param eventType - The event type.
         * @param data - Event-specific data.
         * @returns Payload or null if event type is unknown.
         */
      },
      {
        key: "buildAnalyticsPayload",
        value: function buildAnalyticsPayload(eventType, data) {
          var payload = {};
          switch (eventType) {
            case EVENT_TYPES.IMPRESSION:
              return _objectSpread2(
                _objectSpread2({}, payload),
                {},
                {
                  renderTime: data.renderTime,
                },
              );
            case EVENT_TYPES.VIEW:
              var viewData = data;
              return _objectSpread2(
                _objectSpread2({}, payload),
                {},
                {
                  viewTime: viewData.viewTime,
                  visibilityRatio: viewData.visibilityRatio,
                  scrollDepth: viewData.scrollDepth,
                  timeToVisible: viewData.timeToVisible,
                },
              );
            case EVENT_TYPES.TOTAL_VIEW:
              var totalViewData = data;
              return _objectSpread2(
                _objectSpread2({}, payload),
                {},
                {
                  totalViewTime: totalViewData.totalViewTime,
                  visibilityRatio: totalViewData.visibilityRatio,
                },
              );
            case EVENT_TYPES.HOVER:
              return _objectSpread2(
                _objectSpread2({}, payload),
                {},
                {
                  hoverTime: data.hoverTime,
                },
              );
            case EVENT_TYPES.CLICK:
              return payload;
            case EVENT_TYPES.VIDEO_PLAYBACK:
              return _objectSpread2(
                _objectSpread2({}, payload),
                {},
                {
                  totalPlaybackTime: data.totalPlaybackTime,
                },
              );
            case EVENT_TYPES.VIDEO_QUARTILE:
              return _objectSpread2(
                _objectSpread2({}, payload),
                {},
                {
                  quartile: data.quartile,
                },
              );
            default:
              return null;
          }
        },
        /**
         * Retrieves the ad slot element from the DOM.
         * @returns Ad slot element or null.
         */
      },
      {
        key: "getAdSlotElement",
        value: function getAdSlotElement() {
          return document.getElementById(this.adElementId);
        },
      },
    ]);
  })();

  /**
   * AdTracker class to track ad interactions (impressions, views, clicks, etc.).
   */
  var AdTracker = /*#__PURE__*/ (function () {
    function AdTracker(
      sdk,
      adElementId,
      adSpaceId,
      adType,
      buyType,
      startTime,
      bidResponseMetadata,
      mediaType,
    ) {
      var visibilityThreshold =
        arguments.length > 8 && arguments[8] !== undefined
          ? arguments[8]
          : DEFAULTS.VISIBILITY_THRESHOLD;
      _classCallCheck(this, AdTracker);
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
      this.hasImpression = false;
      this.hasViewEvent = false;
      this.visibilityCheckInterval = null;
      this.currentVisibilityRatio = 0;
      this.sdk = sdk;
      this.adElementId = adElementId;
      this.adType = adType;
      this.visibilityThreshold = visibilityThreshold;
      this.minViewTime =
        mediaType === "video"
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
        bidResponseMetadata,
      );
      this.mediaType = mediaType;
      this.adElement = document.getElementById(adElementId);
      if (!this.adElement) {
        this.sdk.logger.log("Ad element not found: ".concat(adElementId));
        return;
      }
      this.init();
    }
    /**
     * Initializes event listeners and observers for ad tracking.
     */
    return _createClass(AdTracker, [
      {
        key: "init",
        value: function init() {
          this.setupImpressionTracking();
          this.setupClickTracking();
          if (!("IntersectionObserver" in window)) {
            this.sdk.logger.log(
              "IntersectionObserver not supported. Using fallback.",
            );
            this.fallbackTracking();
          } else {
            this.setupIntersectionObserver();
          }
          this.setupInteractionListeners();
          this.setupVisibilityChangeListener();
        },
        /**
         * Sets up impression tracking for banner or video ads.
         */
      },
      {
        key: "setupImpressionTracking",
        value: function setupImpressionTracking() {
          var _this = this;
          var adCreative = this.getAdCreative();
          if (this.mediaType === "image" || this.mediaType === "gif") {
            var img =
              adCreative === null || adCreative === void 0
                ? void 0
                : adCreative.querySelector("img");
            if (img) {
              if (img.complete) {
                this.recordImpression();
              } else {
                img.addEventListener("load", function () {
                  return _this.recordImpression();
                });
              }
            }
          } else if (this.mediaType === "video") {
            var video =
              adCreative === null || adCreative === void 0
                ? void 0
                : adCreative.querySelector("video");
            if (video) {
              if (video.complete) {
                this.recordImpression();
              } else {
                video.addEventListener("canplay", function () {
                  return _this.recordImpression();
                });
              }
            }
          }
        },
        /**
         * Sets up click tracking for the ad, excluding mute and play controls.
         */
      },
      {
        key: "setupClickTracking",
        value: function setupClickTracking() {
          var adLink = this.getAdCreative();
          if (adLink) {
            // Set up click tracking on the ad creative
            this.addClickListener(adLink);
            // If the ad element is an iframe, also add listener to the iframe itself
            if (
              this.adElement &&
              this.adElement.tagName.toLowerCase() === "iframe" &&
              adLink !== this.adElement
            ) {
              this.addClickListener(this.adElement);
            }
          } else {
            this.sdk.logger.log(
              "Ad link element not found for ".concat(this.adElementId),
            );
            // Fallback: if we can't get the creative, try the main ad element
            if (this.adElement) {
              this.addClickListener(this.adElement);
            }
          }
        },
        /**
         * Adds click event listener to an element with control filtering.
         */
      },
      {
        key: "addClickListener",
        value: function addClickListener(element) {
          var _this2 = this;
          element.addEventListener("click", function (event) {
            var _a, _b, _c;
            var target = event.target;
            // Check if click is on video controls or other control elements
            var isControlElement =
              target.closest(
                '[id*="mute"], [id*="play"], [id*="pause"], [class*="control"], [class*="button"]',
              ) ||
              ((_a = target.id) === null || _a === void 0
                ? void 0
                : _a.includes("mute")) ||
              ((_b = target.id) === null || _b === void 0
                ? void 0
                : _b.includes("play")) ||
              ((_c = target.id) === null || _c === void 0
                ? void 0
                : _c.includes("pause")) ||
              target.classList.contains("video-controls");
            if (isControlElement) {
              return;
            }
            _this2.sendClickData();
          });
        },
        /**
         * Sets up IntersectionObserver for visibility tracking.
         */
      },
      {
        key: "setupIntersectionObserver",
        value: function setupIntersectionObserver() {
          var _this3 = this;
          if (!this.adElement) return;
          this.observer = new IntersectionObserver(
            function (entries) {
              return _this3.handleIntersection(entries);
            },
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
            },
          );
          this.observer.observe(this.adElement);
        },
        /**
         * Sets up interaction listeners for hover and video events.
         */
      },
      {
        key: "setupInteractionListeners",
        value: function setupInteractionListeners() {
          var _this4 = this;
          var _a;
          if (!this.adElement) return;
          if (!("ontouchstart" in window)) {
            this.adElement.addEventListener("mouseover", function () {
              if (!_this4.hoverStartTime) {
                _this4.hoverStartTime = performance.now();
              }
            });
            this.adElement.addEventListener("mouseout", function () {
              return _this4.updateHoverTime();
            });
          }
          if (this.mediaType === "video") {
            var video =
              (_a = this.getAdCreative()) === null || _a === void 0
                ? void 0
                : _a.querySelector("video");
            if (video) {
              video.addEventListener("play", function () {
                if (!_this4.playbackStartTime) {
                  _this4.playbackStartTime = performance.now();
                }
              });
              video.addEventListener("pause", function () {
                _this4.updatePlaybackTime();
              });
              video.addEventListener("ended", function () {
                if (!_this4.hasEnded) {
                  _this4.hasEnded = true;
                  _this4.updatePlaybackTime();
                  _this4.sendVideoPlaybackData();
                }
                video.play();
              });
            }
          }
        },
        /**
         * Sets up listener for visibility change events.
         */
      },
      {
        key: "setupVisibilityChangeListener",
        value: function setupVisibilityChangeListener() {
          var _this5 = this;
          document.addEventListener("visibilitychange", function () {
            var _a, _b;
            if (document.hidden) {
              _this5.updateViewTime();
              _this5.updateHoverTime();
              _this5.updatePlaybackTime();
              if (_this5.mediaType === "video" && !_this5.hasEnded) {
                var video =
                  (_a = _this5.getAdCreative()) === null || _a === void 0
                    ? void 0
                    : _a.querySelector("video");
                if (video) {
                  _this5.lastPausedTime = video.currentTime;
                  // video.pause();
                  _this5.updatePlaybackTime();
                }
              }
              _this5.stopVisibilityCheck();
            } else if (document.visibilityState === "visible") {
              _this5.startVisibilityCheck();
              if (_this5.mediaType === "video") {
                var _video =
                  (_b = _this5.getAdCreative()) === null || _b === void 0
                    ? void 0
                    : _b.querySelector("video");
                if (_video) {
                  _this5.lastPausedTime = _video.currentTime;
                  _this5.updatePlaybackTime();
                }
              }
            }
          });
        },
        /**
         * Records an impression event if not already recorded.
         */
      },
      {
        key: "recordImpression",
        value: function recordImpression() {
          if (!this.hasImpression) {
            var renderTime = performance.now() - this.renderStartTime;
            this.eventSender.sendEvent(EVENT_TYPES.IMPRESSION, {
              renderTime: renderTime,
            });
            this.hasImpression = true;
          }
        },
        /**
         * Starts a timer to check if minViewTime is reached while the ad is visible.
         */
      },
      {
        key: "startVisibilityCheck",
        value: function startVisibilityCheck() {
          var _this6 = this;
          if (this.visibilityCheckInterval) return;
          this.visibilityCheckInterval = setInterval(function () {
            if (
              _this6.isVisible &&
              _this6.viewStartTime &&
              !_this6.hasViewEvent
            ) {
              var timeInView = performance.now() - _this6.viewStartTime;
              if (timeInView >= _this6.minViewTime) {
                _this6.hasViewEvent = true;
                var scrollDepth = window.scrollY / document.body.scrollHeight;
                var timeToVisible = performance.now() - _this6.renderStartTime;
                var visibilityRatio = _this6.getCurrentVisibilityRatio();
                _this6.eventSender.sendEvent(EVENT_TYPES.VIEW, {
                  viewTime: timeInView,
                  visibilityRatio: visibilityRatio,
                  scrollDepth: scrollDepth,
                  timeToVisible: timeToVisible,
                });
                _this6.stopVisibilityCheck();
              }
            }
          }, 100);
        },
        /**
         * Stops the visibility check timer.
         */
      },
      {
        key: "stopVisibilityCheck",
        value: function stopVisibilityCheck() {
          if (this.visibilityCheckInterval) {
            clearInterval(this.visibilityCheckInterval);
            this.visibilityCheckInterval = null;
          }
        },
        /**
         * Gets the current visibility ratio of the ad element.
         * @returns Visibility ratio.
         */
      },
      {
        key: "getCurrentVisibilityRatio",
        value: function getCurrentVisibilityRatio() {
          if (!("IntersectionObserver" in window) && this.adElement) {
            var rect = this.adElement.getBoundingClientRect();
            var windowHeight =
              window.innerHeight || document.documentElement.clientHeight;
            return Math.min(
              rect.bottom / windowHeight,
              (windowHeight - rect.top) / windowHeight,
              1,
            );
          }
          return this.currentVisibilityRatio;
        },
        /**
         * Handles IntersectionObserver entries for visibility tracking.
         * @param entries - Observer entries.
         */
      },
      {
        key: "handleIntersection",
        value: function handleIntersection(entries) {
          var _this7 = this;
          entries.forEach(function (entry) {
            var _a;
            var visibilityRatio = entry.intersectionRatio;
            var wasVisible = _this7.isVisible;
            _this7.currentVisibilityRatio = visibilityRatio;
            _this7.isVisible = visibilityRatio >= _this7.visibilityThreshold;
            var video =
              _this7.mediaType === "video"
                ? (_a = _this7.getAdCreative()) === null || _a === void 0
                  ? void 0
                  : _a.querySelector("video")
                : null;
            if (_this7.isVisible && !wasVisible) {
              if (!_this7.viewStartTime) {
                _this7.viewStartTime = performance.now();
                _this7.startVisibilityCheck();
              }
              if (video && !_this7.hasEnded) {
                video.currentTime = _this7.lastPausedTime;
                video.play().catch(function (e) {
                  return _this7.sdk.logger.error(
                    "Video play failed for "
                      .concat(_this7.adElementId, ": ")
                      .concat(e.message),
                  );
                });
                if (!_this7.playbackStartTime) {
                  _this7.playbackStartTime = performance.now();
                }
              }
            } else if (!_this7.isVisible && wasVisible) {
              _this7.updateViewTime();
              _this7.stopVisibilityCheck();
              if (video && !_this7.hasEnded) {
                _this7.lastPausedTime = video.currentTime;
                video.pause();
                _this7.updatePlaybackTime();
              }
            }
          });
        },
        /**
         * Updates total view time when visibility changes.
         */
      },
      {
        key: "updateViewTime",
        value: function updateViewTime() {
          if (this.viewStartTime) {
            this.totalViewTime += performance.now() - this.viewStartTime;
            this.viewStartTime = null;
            this.stopVisibilityCheck();
          }
        },
        /**
         * Updates total hover time when hover ends.
         */
      },
      {
        key: "updateHoverTime",
        value: function updateHoverTime() {
          if (this.hoverStartTime) {
            this.totalHoverTime += performance.now() - this.hoverStartTime;
            this.hoverStartTime = null;
          }
        },
        /**
         * Updates total playback time for video ads.
         */
      },
      {
        key: "updatePlaybackTime",
        value: function updatePlaybackTime() {
          if (this.playbackStartTime && this.mediaType === "video") {
            this.totalPlaybackTime +=
              performance.now() - this.playbackStartTime;
            this.playbackStartTime = null;
          }
        },
        /**
         * Sends hover event data if applicable.
         */
      },
      {
        key: "sendHoverData",
        value: function sendHoverData() {
          if (this.totalHoverTime > 0) {
            this.eventSender.sendEvent(EVENT_TYPES.HOVER, {
              hoverTime: this.totalHoverTime,
            });
          }
        },
        /**
         * Sends click event data.
         */
      },
      {
        key: "sendClickData",
        value: function sendClickData() {
          this.eventSender.sendEvent(EVENT_TYPES.CLICK, {});
        },
        /**
         * Sends video playback data if applicable.
         */
      },
      {
        key: "sendVideoPlaybackData",
        value: function sendVideoPlaybackData() {
          if (this.totalPlaybackTime > 0 && !this.hasSentPlaybackEvent) {
            this.eventSender.sendEvent(EVENT_TYPES.VIDEO_PLAYBACK, {
              totalPlaybackTime: this.totalPlaybackTime,
            });
            this.hasSentPlaybackEvent = true;
          }
        },
        /**
         * Sends total view time data if applicable.
         */
      },
      {
        key: "sendTotalTimeInView",
        value: function sendTotalTimeInView() {
          this.updateViewTime();
          if (this.totalViewTime > 0) {
            this.eventSender.sendEvent(EVENT_TYPES.TOTAL_VIEW, {
              totalViewTime: this.totalViewTime,
              visibilityRatio: this.hasViewEvent
                ? this.visibilityThreshold
                : DEFAULTS.VISIBILITY_THRESHOLD,
            });
          }
        },
        /**
         * Fallback tracking for browsers without IntersectionObserver.
         */
      },
      {
        key: "fallbackTracking",
        value: function fallbackTracking() {
          var _this8 = this;
          var checkVisibility = function checkVisibility() {
            var _a;
            if (!_this8.adElement) return;
            var rect = _this8.adElement.getBoundingClientRect();
            var windowHeight =
              window.innerHeight || document.documentElement.clientHeight;
            var visibilityRatio = Math.min(
              rect.bottom / windowHeight,
              (windowHeight - rect.top) / windowHeight,
              1,
            );
            var wasVisible = _this8.isVisible;
            _this8.currentVisibilityRatio = visibilityRatio;
            _this8.isVisible = visibilityRatio >= _this8.visibilityThreshold;
            var video =
              _this8.mediaType === "video"
                ? (_a = _this8.getAdCreative()) === null || _a === void 0
                  ? void 0
                  : _a.querySelector("video")
                : null;
            if (_this8.isVisible && !wasVisible) {
              if (!_this8.viewStartTime) {
                _this8.viewStartTime = performance.now();
                _this8.startVisibilityCheck();
              }
              if (video && !_this8.hasEnded) {
                video.currentTime = _this8.lastPausedTime;
                video.play().catch(function (e) {
                  return _this8.sdk.logger.error(
                    "Video play failed for "
                      .concat(_this8.adElementId, ": ")
                      .concat(e.message),
                  );
                });
                if (!_this8.playbackStartTime) {
                  _this8.playbackStartTime = performance.now();
                }
              }
            } else if (!_this8.isVisible && wasVisible) {
              _this8.updateViewTime();
              _this8.stopVisibilityCheck();
              if (video && !_this8.hasEnded) {
                _this8.lastPausedTime = video.currentTime;
                video.pause();
                _this8.updatePlaybackTime();
              }
            }
          };
          window.addEventListener("scroll", checkVisibility);
          window.addEventListener("resize", checkVisibility);
        },
        /**
         * Retrieves the ad creative element.
         * @returns Ad creative element.
         */
      },
      {
        key: "getAdCreative",
        value: function getAdCreative() {
          if (!this.adElement) return null;
          // If it's an iframe, try to access its content
          if (this.adElement.tagName.toLowerCase() === "iframe") {
            var iframe = this.adElement;
            try {
              // Check if we can access the iframe content (same-origin)
              if (iframe.contentDocument) {
                var _adCreative =
                  iframe.contentDocument.querySelector(".adgeist-ad");
                if (_adCreative) {
                  return _adCreative;
                }
                // Fallback to iframe body if .adgeist-ad not found
                return iframe.contentDocument.body || null;
              }
            } catch (error) {
              // Cross-origin iframe - can't access content
              this.sdk.logger.log(
                "Cannot access iframe content (cross-origin): ".concat(
                  this.adElementId,
                ),
              );
            }
            // Return the iframe itself if we can't access its content
            return iframe;
          }
          // For non-iframe elements, return the element itself or look for .adgeist-ad within it
          var adCreative = this.adElement.querySelector(".adgeist-ad");
          return adCreative || this.adElement;
        },
        /**
         * Cleans up observers and sends final events.
         */
      },
      {
        key: "destroy",
        value: function destroy() {
          if (this.observer && this.adElement) {
            this.observer.unobserve(this.adElement);
            this.observer = null;
          }
          if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
          }
          this.stopVisibilityCheck();
          this.updateViewTime();
          this.updateHoverTime();
          this.sendTotalTimeInView();
          this.sendHoverData();
          if (this.mediaType === "video" && !this.hasEnded) {
            this.sendVideoPlaybackData();
          }
        },
      },
    ]);
  })();

  // Constants
  var DISPLAY_STYLE_ID = "adcard-v2-styles";
  var BANNER_STYLES_ID = "banner-card-styles";
  var COMPANION_STYLES_ID = "companion-card-styles";
  var DISPLAY_CSS =
    "\n    html, body { margin: 0; padding: 0; width: 100%; height: 100%; }\n    .card-container {\n      container-type: size;\n      container-name: adgeist-card;\n      max-height: 900px;\n      max-width: 1200px;\n      overflow: hidden;\n      outline: 1px solid #E0E0E0;\n      background-color: #FFFFFF;\n      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);\n      box-sizing: border-box;\n      font-family: system-ui, -apple-system, sans-serif;\n    }\n    .adgeist-title-text {\n      margin: 0;\n      color: #000;\n      word-break: break-word;\n    }\n    .adgeist-description-text {\n      margin: 0;\n      color: #4B5563;\n      word-break: break-word;\n    }\n    .adgeist-name-text {\n      margin: 0;\n      color: #9CA3AF;\n    }\n    .cta-button {\n      background: #85C896;\n      color: rgba(29, 29, 29, 1);\n      border-radius: 9999px;\n      padding: 6px 16px;\n      font-weight: 500;\n      text-decoration: none;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      white-space: nowrap;\n      box-shadow:\n        inset 0 0 2px -2px #ACFFB1,\n        inset 8px 3px 15px 0 #6FC974,\n        inset -4px -4px 13px -5px rgba(51,51,51,0.74),\n        inset 4px 0 4px 0 rgba(38,100,42,0.68);\n      transition: transform .2s;\n    }\n    .cta-button:hover { transform: scale(1.01); }\n";
  var BANNER_CSS =
    "\n    html, body { margin: 0; padding: 0; width: 100%; height: 100%; }\n      .banner-adgeist-card {\n        container-type: size;\n        container-name: banner-ad;\n        max-width: 1200px;\n        min-width: 240px;\n        min-height: 50px;\n        max-height: 900px;\n        overflow: hidden;\n        outline: 1px solid #e0e0e0;\n        background-color: #d5d4d4ff;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .adgeist-media {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      .adgeist-media img,\n      .adgeist-media video {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        display: block;\n      }\n\n      .mute-button { cursor: pointer; transition: opacity 0.2s; }\n      .mute-button:hover { opacity: 0.8; }\n  ";
  var COMPANION_CSS =
    "\n    html, body { margin: 0; padding: 0; width: 100%; height: 100%; }\n\n  .companion-ad-container {\n            display:flex;\n            position: relative;\n            flex-direction: column;\n            outline: 1px solid #E0E0E0;\n            background-color: #FFFFFF;\n            width:100%;\n            height:max-content;\n            max-width: 560px;\n            min-width: 320px;\n            min-height: 180px;\n            max-height: 470px;\n            overflow: hidden;\n            text-decoration: none;\n            color: inherit;\n        }\n        .cta-button {\n            background: #85C896;\n            color: rgba(29, 29, 29, 1);\n            border-radius: 9999px;\n            padding: 6px 16px;\n            font-weight: 500;\n            text-decoration: none;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            white-space: nowrap;\n            box-shadow:\n                inset 0 0 2px -2px #ACFFB1,\n                inset 8px 3px 15px 0 #6FC974,\n                inset -4px -4px 13px -5px rgba(51,51,51,0.74),\n                inset 4px 0 4px 0 rgba(38,100,42,0.68);\n            transition: transform .2s;\n        }\n        .cta-button:hover { transform: scale(1.01); }\n        .adgeist-title-text {\n          margin: 0;\n          color: #000;\n          word-break: break-word;\n        }\n        .adgeist-description-text {\n          margin: 0;\n          color: #4B5563;\n          word-break: break-word;\n        }\n";
  // Utility functions
  function ensureHttpProtocol(url) {
    if (!url) return "";
    if (!/^https?:\/\//i.test(url)) return "https://" + url;
    return url;
  }
  function getAdLayout(width, height) {
    var ratio = width / height;
    if (height > 450 && width > 450) return null;
    if (height > width) return "layout-4rows ";
    if (ratio <= 1.4) return "layout-3rows";
    if (ratio <= 2) return "layout-2rows";
    if (ratio <= 3.3) return "layout-2row-2col";
    return "layout-1row";
  }
  // AdAudioManager class
  var AdAudioManager = /*#__PURE__*/ (function () {
    function AdAudioManager(sdk) {
      _classCallCheck(this, AdAudioManager);
      this.activeUnmutedAd = null;
      this.sdk = sdk;
      this.setupMuteEventListener();
    }
    return _createClass(AdAudioManager, [
      {
        key: "setupMuteEventListener",
        value: function setupMuteEventListener() {
          var _this = this;
          window.addEventListener("message", function (event) {
            if (event.data.type === "adgeist_mute_event") {
              var _event$data = event.data,
                adElementId = _event$data.adElementId,
                muted = _event$data.muted;
              if (!muted && _this.activeUnmutedAd !== adElementId) {
                _this.activeUnmutedAd = adElementId;
                _this.muteAllOtherAds(adElementId);
              } else if (muted && _this.activeUnmutedAd === adElementId) {
                _this.activeUnmutedAd = null;
              }
            }
          });
        },
      },
      {
        key: "muteAllOtherAds",
        value: function muteAllOtherAds(excludeAdElementId) {
          var _this2 = this;
          var iframes = document.querySelectorAll(
            'iframe[id^="adgeist_ads_iframe_"]',
          );
          iframes.forEach(function (iframe) {
            var _a;
            if (iframe.id !== excludeAdElementId) {
              try {
                (_a = iframe.contentWindow) === null || _a === void 0
                  ? void 0
                  : _a.postMessage(
                      {
                        type: "adgeist_mute",
                        mute: true,
                      },
                      "*",
                    );
              } catch (error) {
                _this2.sdk.logger.log(
                  "Failed to send mute message to iframe "
                    .concat(iframe.id, ": ")
                    .concat(
                      error instanceof Error ? error.message : String(error),
                    ),
                );
              }
            }
          });
        },
      },
    ]);
  })();
  // AdCard base class
  var AdCard = /*#__PURE__*/ (function () {
    function AdCard() {
      var options =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, AdCard);
      var _a;
      this.logger = {
        log: console.log,
      };
      this.adAudioManager = new AdAudioManager(this);
      this.adElementId = options.adElementId || "";
      this.title = options.title || "Headline 25 characters";
      this.description =
        options.description ||
        "Body text with 50 characters of describing the advertisement.";
      this.name = options.name || "-";
      this.ctaUrl = options.ctaUrl || "https://www.example.com";
      this.fileUrl = options.fileUrl || "/assets/png/dummy-preview-bg.png";
      this.type = options.type || "image";
      this.isResponsive =
        (_a = options.isResponsive) !== null && _a !== void 0 ? _a : false;
      this.responsiveType = options.responsiveType || "Square";
      this.width = parseInt(String(options.width || 300));
      this.height = parseInt(String(options.height || 300));
      this.appliedClass = getAdLayout(this.width, this.height);
      this.adspaceType = options.adspaceType || "banner";
      this.media = options.media || [];
      this.mediaType = options.mediaType || "image";
      this.altText = options.altText || "";
      this.placeholderSrc = options.placeholderSrc || "";
    }
    return _createClass(AdCard, [
      {
        key: "renderHtml",
        value: function renderHtml() {
          var props = {
            adElementId: this.adElementId,
            title: this.title,
            description: this.description,
            name: this.name,
            ctaUrl: this.ctaUrl,
            fileUrl: this.fileUrl,
            type: this.type,
            isResponsive: this.isResponsive,
            responsiveType: this.responsiveType,
            width: this.width,
            height: this.height,
            adspaceType: this.adspaceType,
            media: this.media,
            mediaType: this.mediaType,
            altText: this.altText,
            placeholderSrc: this.placeholderSrc,
          };
          if (this.adspaceType === "banner") {
            var bannerAdCard = new BannerAdCard(props);
            return bannerAdCard.renderBannerHtml();
          } else if (this.adspaceType === "display") {
            var displayAdCard = new DisplayAdCard(props);
            return displayAdCard.renderDisplayHtml();
          } else if (this.adspaceType === "companion") {
            var companionAdCard = new CompanionAdCard(props);
            return companionAdCard.renderCompanionHtml();
          }
          return "";
        },
      },
      {
        key: "mount",
        value: function mount(targetEl) {
          if (!targetEl) {
            throw new Error("AdCard: mount target element not found");
          }
          targetEl.innerHTML = this.renderHtml();
        },
      },
    ]);
  })();
  // BannerAdCard class
  var BannerAdCard = /*#__PURE__*/ (function (_AdCard) {
    function BannerAdCard() {
      var _this3;
      var options =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, BannerAdCard);
      var _a;
      _this3 = _callSuper(this, BannerAdCard, [options]);
      _this3.isResponsive =
        (_a = options.isResponsive) !== null && _a !== void 0 ? _a : true;
      _this3.media = options.media || [];
      _this3.ctaUrl = options.ctaUrl || "#";
      _this3.mediaType = options.mediaType || "image";
      _this3.adElementId = options.adElementId || "";
      _this3.altText = options.altText || "Banner Image";
      return _this3;
    }
    _inherits(BannerAdCard, _AdCard);
    return _createClass(BannerAdCard, [
      {
        key: "renderBannerHtml",
        value: function renderBannerHtml() {
          var rawWidth = this.isResponsive ? "100%" : this.width + "px";
          var rawHeight = this.isResponsive ? "100%" : this.height + "px";
          // const getEffectiveMedia = (): MediaItem | null => {
          //   if (!Array.isArray(this.media) || this.media.length === 0) {
          //     return null;
          //   }
          //   if (this.media.length === 1) return this.media[0];
          //   const width = parseFloat(String(this.width));
          //   const height = parseFloat(String(this.height));
          //   if (!width || !height || height === 0) {
          //     return this.media[0];
          //   }
          //   const containerRatio = width / height;
          //   return this.media.reduce((closest, media) => {
          //     const mediaRatio = parseFloat(media.ratio || "1");
          //     if (!isFinite(mediaRatio)) return closest; // skip invalid ratios
          //     const diff = Math.abs(containerRatio - mediaRatio);
          //     const closestDiff = Math.abs(
          //       containerRatio - parseFloat(closest.ratio || "1")
          //     );
          //     return diff < closestDiff ? media : closest;
          //   });
          // };
          var effectiveMedia = this.media[0];
          console.log(effectiveMedia, "effectiveMedia");
          console.log(this.placeholderSrc, "placeholderSrc");
          return '\n        <style id="'
            .concat(BANNER_STYLES_ID, '">')
            .concat(BANNER_CSS, '</style>\n        <a href="')
            .concat(
              ensureHttpProtocol(this.ctaUrl),
              '" target="_blank" id="banner-container" class="banner-adgeist-card" style="width:',
            )
            .concat(rawWidth, ";height:")
            .concat(
              rawHeight,
              ';">\n          <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;">AD</span>\n\n          <div class="adgeist-media adgeist-ad">\n             ',
            )
            .concat(
              this.mediaType === "video"
                ? '\n                  <video\n                    id="adgeist-video"\n                    class="media"\n                    poster="'
                    .concat(
                      (effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.thumbnailUrl) || "",
                      '" \n                    autoplay muted loop\n                    playsinline\n                    webkit-playsinline\n                    width="',
                    )
                    .concat(
                      (effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.width) || "100%",
                      '"\n                    height="',
                    )
                    .concat(
                      (effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.height) || "100%",
                      "\"\n                    style=\"object-fit: contain;\" \n                    onloadeddata=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                                  if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n                    preload=\"auto\"\n                  >\n                      <source src=\"",
                    )
                    .concat(
                      (effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.src) ||
                        this.placeholderSrc ||
                        "",
                      '" type="video/mp4">\n                  </video>\n                  ',
                    )
                : '\n                <img\n                  class="media"\n                  src="'
                    .concat(
                      (effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.src) ||
                        this.placeholderSrc ||
                        "",
                      '"\n                  fallback="',
                    )
                    .concat(
                      (effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.thumbnailUrl) ||
                        this.placeholderSrc ||
                        "",
                      '"\n                  alt="',
                    )
                    .concat(
                      this.altText,
                      '"\n                  loading="eager"s\n                  width="',
                    )
                    .concat(
                      effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.width,
                      '"\n                  height="',
                    )
                    .concat(
                      effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.height,
                      '"\n                  type="',
                    )
                    .concat(
                      (effectiveMedia === null || effectiveMedia === void 0
                        ? void 0
                        : effectiveMedia.mimeType) || "image/*",
                      "\"\n                  onload=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                          if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n                />\n              ",
                    ),
              "\n          </div>\n        </a>\n      ",
            );
        },
      },
    ]);
  })(AdCard);
  // DisplayAdCard class
  var DisplayAdCard = /*#__PURE__*/ (function (_AdCard2) {
    function DisplayAdCard() {
      var options =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, DisplayAdCard);
      return _callSuper(this, DisplayAdCard, [options]);
    }
    _inherits(DisplayAdCard, _AdCard2);
    return _createClass(DisplayAdCard, [
      {
        key: "estimateTextHeight",
        value: function estimateTextHeight(
          chars,
          baseSize,
          isBold,
          availableWidth,
        ) {
          var effectiveSize = baseSize;
          // Increased multiplier from 0.5 to 0.6 to be more conservative and prevent clipping
          var avgCharWidth = effectiveSize * 0.6 * (isBold ? 1.1 : 1.0);
          var totalTextWidth = chars * avgCharWidth;
          var lines = Math.max(1, Math.ceil(totalTextWidth / availableWidth));
          // Increased line height multiplier for safety
          var lineHeight = effectiveSize * 1.4;
          return lines * lineHeight;
        },
      },
      {
        key: "getLayoutConfig",
        value: function getLayoutConfig() {
          var width = this.width;
          var height = this.height;
          var MEDIA_ASPECT_RATIO = 1.91;
          // Calculate theoretical height if full width
          var stackedImageHeight = width / MEDIA_ASPECT_RATIO;
          var remainingHeight = height - stackedImageHeight;
          // Stacked Preferred
          var MIN_TEXT_HEIGHT = 40;
          var isStacked = remainingHeight >= MIN_TEXT_HEIGHT;
          if (isStacked) {
            // Enforce Min Content Height (e.g. 35% of total height)
            var minContentH = height * 0.35;
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
            var imgH = height;
            var imgW = imgH * MEDIA_ASPECT_RATIO;
            // Micro Banner Optimization (Height < 70px)
            // User Request: "scale the image down and make space for title"
            if (height < 70) {
              // Force image to be smaller to give text room
              // Max 20% width or aspect ratio width, whichever is smaller
              var maxMicroImgWidth = width * 0.2;
              imgW = Math.min(imgW, maxMicroImgWidth);
            }
            var MIN_TEXT_WIDTH = 110;
            var maxImgW = width - MIN_TEXT_WIDTH;
            // Enforce Min Content Width (e.g. 45% of total width)
            var minContentW = width * 0.45;
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
        },
      },
      {
        key: "calculateLayoutDetails",
        value: function calculateLayoutDetails(layoutConfig) {
          var _this4 = this;
          var width = this.width;
          var height = this.height;
          var isStacked = layoutConfig.type === "stacked";
          var contentAreaHeight = isStacked
            ? height - layoutConfig.imageHeight
            : height;
          var contentAreaWidth = isStacked
            ? width
            : width - layoutConfig.imageWidth;
          // Dynamic Padding
          var PADDING_Y = height < 150 ? 16 : height < 350 ? 20 : 32;
          var GAP = 4;
          var PADDING_X = width < 200 ? 16 : 32;
          if (height < 60) {
            PADDING_Y = 8;
            GAP = 2;
          }
          var isSplitContent = !isStacked && contentAreaWidth > 480;
          var isHorizontalContent = !isSplitContent && height < 90;
          var availableTextWidth = Math.max(10, contentAreaWidth - PADDING_X);
          var hCTA = 40;
          var wCTA = 100;
          if (isHorizontalContent) {
            availableTextWidth -= wCTA;
          } else if (isSplitContent) {
            availableTextWidth = (contentAreaWidth - PADDING_X - 16) / 2;
          } else if (height < 90 && !isStacked) {
            availableTextWidth = (contentAreaWidth - PADDING_X - 32) / 2;
          }
          var baseTitleSize = 16;
          var baseBodySize = 14;
          var availableH = contentAreaHeight - PADDING_Y;
          // --- Helper to try a specific configuration ---
          var tryLayout = function tryLayout(showTitle, showBody, showCTA) {
            // 1. Determine Content Height at Base Scale (Scale = 1.0)
            var contentHeightBase = 0;
            var hTitleBase = 0;
            var hBodyBase = 0;
            if (showTitle) {
              hTitleBase = _this4.estimateTextHeight(
                _this4.title.length,
                baseTitleSize,
                true,
                availableTextWidth,
              );
            }
            if (showBody) {
              hBodyBase = _this4.estimateTextHeight(
                _this4.description.length,
                baseBodySize,
                false,
                availableTextWidth,
              );
            }
            if (isSplitContent) {
              // Split: Max of Col1 (Title) or Col2 (Desc)
              var hCol1 = showTitle ? hTitleBase + GAP : 0;
              var hCol2 = showBody ? hBodyBase : 0;
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
            var targetScale = 1.0;
            if (contentHeightBase > 0) {
              // If we have content, we want it to fill the space comfortably.
              // Let's aim for filling 90% of space to leave some breathing room?
              // Or 100%? Let's try to calculate the scale that makes it FIT.
              // We can't easily inverse `estimateTextHeight`.
              // So we use the iterative approach from before, but we start with a guess.
              var heightRatio = availableH / contentHeightBase;
              targetScale = Math.sqrt(heightRatio); // Heuristic
            }
            // Clamp Scale
            var maxScaleByWidth = availableTextWidth / 7 / baseTitleSize; // Prevent super wide chars
            var maxScale = Math.min(2.5, maxScaleByWidth); // Allow up to 2.5x if space permits
            targetScale = Math.max(0.1, Math.min(maxScale, targetScale));
            // 3. Verify Fit with Iterative Downscaling
            var finalScale = targetScale;
            var fits = false;
            var retries = 10;
            while (retries >= 0) {
              var titleSizePx = Math.max(14, baseTitleSize * finalScale);
              var bodySizePx = Math.max(12, baseBodySize * finalScale);
              var currentHTitle = 0;
              var currentHBody = 0;
              if (showTitle) {
                currentHTitle = _this4.estimateTextHeight(
                  _this4.title.length,
                  titleSizePx,
                  true,
                  availableTextWidth,
                );
              }
              if (showBody) {
                currentHBody = _this4.estimateTextHeight(
                  _this4.description.length,
                  bodySizePx,
                  false,
                  availableTextWidth,
                );
              }
              var neededH = 0;
              if (isSplitContent) {
                var _hCol = showTitle ? currentHTitle + GAP : 0;
                var _hCol2 = showBody ? currentHBody : 0;
                if (_hCol <= availableH && _hCol2 <= availableH) {
                  fits = true;
                }
              } else {
                if (showTitle) neededH += currentHTitle;
                if (showBody) neededH += currentHBody;
                if (showTitle && showBody) neededH += GAP;
                if (showCTA && !isHorizontalContent) {
                  var ctaFontSize = Math.max(12, 14 * finalScale);
                  var currentHCta = ctaFontSize * 1.2 + 12;
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
              fits: fits,
              scale: finalScale,
              showTitle: showTitle,
              showBody: showBody,
              showCTA: showCTA,
            };
          };
          // --- Priority Configurations ---
          // 1. Full Content: Title + Desc + CTA
          // 2. No Desc: Title + CTA (Preferred for performance)
          // 3. No CTA: Title + Desc (Fallback)
          // 4. Minimal: Title Only
          var configs = [
            {
              t: true,
              d: true,
              c: true,
            },
            // Full
            {
              t: true,
              d: true,
              c: false,
            },
            // No CTA
            {
              t: true,
              d: false,
              c: false,
            },
            // Title Only (Preferred over Title+CTA if space is tight)
            {
              t: true,
              d: false,
              c: true,
            }, // No Desc (Title + CTA)
          ];
          var bestLayout = null;
          for (var _i = 0, _configs = configs; _i < _configs.length; _i++) {
            var config = _configs[_i];
            // Skip CTA if horizontal content mode and height is too small for CTA
            if (config.c && isHorizontalContent && contentAreaHeight < hCTA)
              continue;
            // In Split Content, we rarely want to hide things unless necessary,
            // but the logic still holds: if full doesn't fit, try hiding.
            var result = tryLayout(config.t, config.d, config.c);
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
              var isNoCTA = config.d && !config.c;
              var threshold = isNoCTA ? 0.35 : 0.75;
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
          return _objectSpread2(
            _objectSpread2({}, layoutConfig),
            {},
            {
              fontSizeScale: bestLayout.scale,
              isHorizontalContent: isHorizontalContent,
              isSplitContent: isSplitContent,
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
            },
          );
        },
      },
      {
        key: "renderContentHtml",
        value: function renderContentHtml(details) {
          var fontSizes = details.fontSizes,
            visible = details.visible,
            type = details.type,
            isHorizontalContent = details.isHorizontalContent,
            isSplitContent = details.isSplitContent,
            paddingY = details.paddingY;
          var isStacked = type === "stacked";
          // Styles
          var titleStyle = visible.title
            ? "font-size:".concat(
                fontSizes.title,
                "px;line-height:1.2;margin-bottom:4px;font-weight:700;",
              )
            : "display:none;";
          var descStyle = visible.description
            ? "font-size:".concat(
                fontSizes.body,
                "px;line-height:1.35;margin-bottom:4px;opacity:0.8;",
              )
            : "display:none;";
          // const nameStyle = visible.name
          //   ? `font-size:${fontSizes.brand}px;line-height:1.2;opacity:0.6;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;`
          //   : 'display:none;'; // Removed
          var ctaStyle = visible.cta
            ? "font-size:".concat(
                Math.max(12, 14 * details.fontSizeScale),
                "px;",
              )
            : "display:none;";
          if (isSplitContent) {
            // Split Layout: Col 1 (Title/Name) | Col 2 (Desc) - No CTA, No Separator
            return '\n            <div class="adgeist-content-container" style="flex:1;display:flex;flex-direction:row;align-items:center;padding:'
              .concat(
                paddingY,
                'px 16px;overflow:visible;justify-content:center;">\n                <div style="display:flex;flex-direction:column;justify-content:center;flex:1;padding-right:16px;text-align:left;height:100%;overflow:visible;">\n                    <div class="adgeist-title-text" style="',
              )
              .concat(titleStyle, '">')
              .concat(
                this.title,
                '</div>\n                </div>\n                <div style="display:flex;flex-direction:column;justify-content:center;flex:2;text-align:left;height:100%;overflow:visible;">\n                    <div class="adgeist-description-text" style="',
              )
              .concat(descStyle, '">')
              .concat(
                this.description,
                "</div>\n                </div>\n            </div>\n        ",
              );
          }
          // Alignment
          var contentDir = isHorizontalContent ? "row" : "column";
          var alignStyle = isStacked
            ? "align-items:center;text-align:center;"
            : "align-items:flex-start;text-align:left;";
          // Horizontal: Space between Text and CTA. Stacked: Center.
          var containerAlign = isHorizontalContent
            ? "align-items:center;justify-content:space-between;text-align:left;"
            : isStacked
              ? "align-items:center;justify-content:space-around;"
              : "align-items:center;justify-content:center;";
          // CTA Margin: Horizontal -> Left margin. Stacked -> Top margin (gap).
          // Note: In Stacked, TextContainer will be flex:1, so it pushes CTA down.
          var ctaMargin = isHorizontalContent
            ? "margin-left:16px;"
            : "margin-top:16px;";
          // Text Container:
          // Horizontal: Width 100%, Center Vertically.
          // Stacked: Flex 1 (to fill space), Center Vertically (justify-content: center).
          var textContainerStyle = isHorizontalContent
            ? "width:100%;justify-content:center;"
            : isStacked
              ? "justify-content:center;width:100%;"
              : "width:100%;";
          return '\n        <div class="adgeist-content-container" style="flex:1;display:flex;flex-direction:'
            .concat(contentDir, ";")
            .concat(containerAlign, "padding:")
            .concat(
              paddingY,
              'px 16px;overflow:visible;">\n            <div style="display:flex;flex-direction:column;',
            )
            .concat(textContainerStyle)
            .concat(
              alignStyle,
              'overflow:visible;">\n                <div class="adgeist-title-text" style="',
            )
            .concat(titleStyle, '">')
            .concat(
              this.title,
              '</div>\n                <div class="adgeist-description-text" style="',
            )
            .concat(descStyle, '">')
            .concat(
              this.description,
              '</div>\n            </div>\n            <div class="cta-button" style="',
            )
            .concat(ctaStyle)
            .concat(
              ctaMargin,
              'flex-shrink:0;">Open</div>\n        </div>\n      ',
            );
        },
      },
      {
        key: "renderDisplayHtml",
        value: function renderDisplayHtml() {
          var _a, _b;
          var baseConfig = this.getLayoutConfig();
          var details = this.calculateLayoutDetails(baseConfig);
          // Use object-fit: contain to allow letterbox/pillarbox
          var media =
            this.mediaType === "video"
              ? '<video\n              id="adgeist-video"\n              poster="'
                  .concat(
                    ((_a = this.media[0]) === null || _a === void 0
                      ? void 0
                      : _a.thumbnailUrl) || "",
                    "\" \n              autoplay muted loop\n              playsinline\n              webkit-playsinline\n              style=\"width: 100%; height: 100%; object-fit: contain;\" \n              onloadeddata=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                            if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n              preload=\"auto\"\n            >\n              <source src=\"",
                  )
                  .concat(
                    this.media[0].src || this.placeholderSrc || "",
                    '" type="video/mp4">\n            </video>',
                  )
              : '<img \n              src="'
                  .concat(this.media[0].src, '"  \n              fallback="')
                  .concat(
                    ((_b = this.media[0]) === null || _b === void 0
                      ? void 0
                      : _b.thumbnailUrl) ||
                      this.placeholderSrc ||
                      "",
                    '"\n              alt="',
                  )
                  .concat(
                    this.altText,
                    "\" \n              style=\"width:100%;height:100%;object-fit:contain;\"\n              onload=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                      if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n            />",
                  );
          return '\n        <style id="'
            .concat(DISPLAY_STYLE_ID, '">')
            .concat(DISPLAY_CSS, '</style>\n        <a href="')
            .concat(
              ensureHttpProtocol(this.ctaUrl),
              '" \n        target="_blank" \n        style="text-decoration:none;color:inherit;"\n        >\n          <div class="card-container adgeist-ad"\n          style="width:',
            )
            .concat(this.width, "px;height:")
            .concat(this.height, "px;display:flex;flex-direction:")
            .concat(
              details.flexDirection,
              ';"\n          >\n            <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;">AD</span>\n            \n            <div class="image-container" style="width:',
            )
            .concat(details.imageWidth, "px;height:")
            .concat(
              details.imageHeight,
              'px;flex-shrink:0;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#d5d4d4ff;">\n              ',
            )
            .concat(media, "\n            </div>\n            \n            ")
            .concat(
              this.renderContentHtml(details),
              "\n          </div>\n        </a>\n      ",
            );
        },
      },
    ]);
  })(AdCard);
  var CompanionAdCard = /*#__PURE__*/ (function (_AdCard3) {
    function CompanionAdCard() {
      var options =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, CompanionAdCard);
      return _callSuper(this, CompanionAdCard, [options]);
    }
    _inherits(CompanionAdCard, _AdCard3);
    return _createClass(CompanionAdCard, [
      {
        key: "renderCompanionHtml",
        value: function renderCompanionHtml() {
          var videoMedia =
            this.media.find(function (m) {
              var _a;
              return (_a = m.mimeType) === null || _a === void 0
                ? void 0
                : _a.startsWith("video");
            }) || this.media[0];
          var imageMedia =
            this.media.find(function (m) {
              var _a;
              return (_a = m.mimeType) === null || _a === void 0
                ? void 0
                : _a.startsWith("image");
            }) || this.media[1];
          // Fallback if no specific video found, but we strictly need video slot?
          // User requirement: "16:9 video, 8.09:1 image and meta".
          // We will render the slots even if media is missing/duplicate to preserve layout.
          var videoSrc =
            (videoMedia === null || videoMedia === void 0
              ? void 0
              : videoMedia.src) ||
            this.placeholderSrc ||
            "";
          var posterSrc =
            (videoMedia === null || videoMedia === void 0
              ? void 0
              : videoMedia.thumbnailUrl) ||
            this.placeholderSrc ||
            "";
          var bannerSrc =
            (imageMedia === null || imageMedia === void 0
              ? void 0
              : imageMedia.src) ||
            this.placeholderSrc ||
            "";
          return '\n     <style id="'
            .concat(COMPANION_STYLES_ID, '">')
            .concat(COMPANION_CSS, '</style>\n    <a href="')
            .concat(
              ensureHttpProtocol(this.ctaUrl),
              '" target="_blank" class=\'companion-ad-container\'>\n      <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;">AD</span>\n      \n      <video\n        id="adgeist-video"\n        poster="',
            )
            .concat(
              posterSrc,
              '" \n        autoplay loop\n        muted\n        playsinline\n        webkit-playsinline\n        controls\n        style="width: 100%; aspect-ratio: 16/9; display: block;" \n        onloadeddata="if(window.Android) { window.Android.postMessage(JSON.stringify({type:\'RENDER_STATUS\',message:\'Success\'})) }\n                      if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:\'RENDER_STATUS\',message:\'Success\'})) }"\n        controlsList="nodownload"\n        disablePictureInPicture\n        preload="auto"\n      >\n        <source src="',
            )
            .concat(
              videoSrc,
              '" type="video/mp4">\n      </video>\n      \n      <img \n        src="',
            )
            .concat(bannerSrc, '"  \n        alt="')
            .concat(
              this.altText,
              "\" \n        style=\"width: 100%; aspect-ratio: 16/3; display: block; background-color: #d5d4d4ff;\"\n        onload=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n      />\n      \n      <div class='companion-meta' style='display:flex; flex-direction: row; height: max-content; padding:8px 12px; font-size:12px; color:#666; text-align:center; align-items:center; gap: 8px;'>\n          <div class='adgeist-name-text' style='display:flex;flex-direction:column;flex:1; text-align:start; justify-content:center;'> \n              <span class=\"adgeist-title-text\" style=\"font-size: 14px; margin-bottom: 2px; line-height: 1.2;\">",
            )
            .concat(
              this.title,
              '</span>\n              <span class="adgeist-description-text" style="font-size: 12px; line-height: 1.3;">',
            )
            .concat(
              this.description,
              '</span>\n          </div>\n          <div class="cta-button" style="flex-shrink:0;">Open</div>\n      </div>\n    </a>',
            );
        },
      },
    ]);
  })(AdCard);

  /**
   * AdLoader class for fetching and rendering ads.
   */
  var AdLoader = /*#__PURE__*/ (function (_SDKComponent) {
    function AdLoader(sdk) {
      var _this;
      _classCallCheck(this, AdLoader);
      _this = _callSuper(this, AdLoader, [sdk]);
      _this.adServeUrl = sdk.adServeUrl;
      _this.adTrackingUrl = sdk.adTrackingUrl;
      return _this;
    }
    _inherits(AdLoader, _SDKComponent);
    return _createClass(AdLoader, [
      {
        key: "loadAds",
        value: (function () {
          var _loadAds = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee() {
              var adSlots,
                slots,
                uniqueSlots,
                _iterator,
                _step,
                _slot,
                slotAttributes,
                _adSpaceId,
                _yield$Promise$all,
                _yield$Promise$all2,
                fingerprint,
                userIP,
                _i,
                _uniqueSlots,
                slot,
                publisherId,
                slotAttrs,
                adSpaceId,
                buyType,
                response,
                adData,
                errorMessage,
                _args = arguments,
                _t2,
                _t3;
              return _regenerator().w(
                function (_context) {
                  while (1)
                    switch ((_context.p = _context.n)) {
                      case 0:
                        adSlots =
                          _args.length > 0 && _args[0] !== undefined
                            ? _args[0]
                            : null;
                        slots =
                          adSlots || document.querySelectorAll(".adsbyadgeist"); // Filter out duplicated ad spaces and already loaded ones
                        uniqueSlots = [];
                        _iterator = _createForOfIteratorHelper(slots);
                        _context.p = 1;
                        _iterator.s();
                      case 2:
                        if ((_step = _iterator.n()).done) {
                          _context.n = 7;
                          break;
                        }
                        _slot = _step.value;
                        slotAttributes = this.getAdSlotAttributes(_slot);
                        if (slotAttributes) {
                          _context.n = 3;
                          break;
                        }
                        return _context.a(3, 6);
                      case 3:
                        _adSpaceId = slotAttributes.adSpaceId; // Skip if no adSpaceId
                        if (_adSpaceId) {
                          _context.n = 4;
                          break;
                        }
                        return _context.a(3, 6);
                      case 4:
                        if (!this.sdk.seenAdSpaces.has(_adSpaceId)) {
                          _context.n = 5;
                          break;
                        }
                        this.sdk.logger.error(
                          "Duplicate ad space detected (already seen), skipping: ".concat(
                            _adSpaceId,
                          ),
                        );
                        return _context.a(3, 6);
                      case 5:
                        uniqueSlots.push(_slot);
                        this.sdk.seenAdSpaces.add(_adSpaceId); // Mark as seen
                      case 6:
                        _context.n = 2;
                        break;
                      case 7:
                        _context.n = 9;
                        break;
                      case 8:
                        _context.p = 8;
                        _t2 = _context.v;
                        _iterator.e(_t2);
                      case 9:
                        _context.p = 9;
                        _iterator.f();
                        return _context.f(9);
                      case 10:
                        if (!(uniqueSlots.length === 0)) {
                          _context.n = 11;
                          break;
                        }
                        this.sdk.logger.log("No valid unique ad slots to load");
                        return _context.a(2);
                      case 11:
                        _context.n = 12;
                        return Promise.all([
                          this.sdk.cdpManager.collector.getDeviceFingerprint(),
                          this.sdk.cdpManager.collector.getUserIP(),
                        ]);
                      case 12:
                        _yield$Promise$all = _context.v;
                        _yield$Promise$all2 = _slicedToArray(
                          _yield$Promise$all,
                          2,
                        );
                        fingerprint = _yield$Promise$all2[0];
                        userIP = _yield$Promise$all2[1];
                        ((_i = 0), (_uniqueSlots = uniqueSlots));
                      case 13:
                        if (!(_i < _uniqueSlots.length)) {
                          _context.n = 25;
                          break;
                        }
                        slot = _uniqueSlots[_i];
                        _context.p = 14;
                        publisherId = this.sdk.publisherId;
                        slotAttrs = this.getAdSlotAttributes(slot);
                        if (slotAttrs) {
                          _context.n = 15;
                          break;
                        }
                        return _context.a(3, 24);
                      case 15:
                        ((adSpaceId = slotAttrs.adSpaceId),
                          (buyType = slotAttrs.buyType));
                        if (!(!adSpaceId || !publisherId || !buyType)) {
                          _context.n = 16;
                          break;
                        }
                        this.sdk.logger.error(
                          "Ad loading error for slot: ".concat(
                            adSpaceId,
                            " - Missing required attributes for ad slot",
                          ),
                        );
                        return _context.a(3, 24);
                      case 16:
                        response = void 0;
                        if (!(buyType === "FIXED")) {
                          _context.n = 18;
                          break;
                        }
                        _context.n = 17;
                        return fetch(
                          "".concat(this.adServeUrl, "/v2/dsp/ad/fixed"),
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              platform: "WEB",
                              isTest: this.sdk.isTest,
                              companyId: publisherId,
                              adSpaceId: adSpaceId,
                              userAgent: navigator.userAgent,
                              timeZone: getUserTimezone(),
                              requestedAt: new Date().toISOString(),
                              device: _objectSpread2({}, this.sdk.deviceInfo),
                            }),
                          },
                        );
                      case 17:
                        response = _context.v;
                        _context.n = 20;
                        break;
                      case 18:
                        _context.n = 19;
                        return fetch(
                          "".concat(this.adServeUrl, "/v1/app/ssp/bid?").concat(
                            new URLSearchParams({
                              adSpaceId: adSpaceId,
                              companyId: publisherId,
                              test: this.sdk.isTest ? "1" : "0",
                            }),
                          ),
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              "x-user-id": fingerprint,
                              "x-platform": "website",
                              "x-forwarded-for": userIP || "",
                            },
                            body: JSON.stringify({
                              siteDto: {
                                page: window.location.href,
                              },
                            }),
                          },
                        );
                      case 19:
                        response = _context.v;
                      case 20:
                        if (response.ok) {
                          _context.n = 21;
                          break;
                        }
                        throw new Error("HTTP error: ".concat(response.status));
                      case 21:
                        _context.n = 22;
                        return response.json();
                      case 22:
                        adData = _context.v;
                        if (adData) this.renderAd(slot, adData, fingerprint);
                        _context.n = 24;
                        break;
                      case 23:
                        _context.p = 23;
                        _t3 = _context.v;
                        errorMessage =
                          _t3 instanceof Error ? _t3.message : String(_t3);
                        this.sdk.logger.error(
                          "Ad loading error for slot: ".concat(errorMessage),
                        );
                      case 24:
                        _i++;
                        _context.n = 13;
                        break;
                      case 25:
                        return _context.a(2);
                    }
                },
                _callee,
                this,
                [
                  [14, 23],
                  [1, 8, 9, 10],
                ],
              );
            }),
          );
          function loadAds() {
            return _loadAds.apply(this, arguments);
          }
          return loadAds;
        })(),
        /**
         * Renders ad content into a slot.
         * @param slot - Ad slot element.
         * @param adData - Ad data from server.
         * @param fingerprint - User fingerprint.
         */
      },
      {
        key: "renderAd",
        value: function renderAd(slot, adData, fingerprint) {
          var _this2 = this;
          var _a,
            _b,
            _c,
            _d,
            _e,
            _f,
            _g,
            _h,
            _j,
            _k,
            _l,
            _m,
            _o,
            _p,
            _q,
            _r,
            _s,
            _t,
            _u,
            _v,
            _w,
            _x,
            _y,
            _z,
            _0,
            _1;
          var slotAttrs = this.getAdSlotAttributes(slot);
          if (!slotAttrs) {
            this.sdk.logger.log("Could not get ad slot attributes");
            return;
          }
          var adSpaceId = slotAttrs.adSpaceId,
            buyType = slotAttrs.buyType,
            isAdspaceResponsive = slotAttrs.isAdspaceResponsive,
            adType = slotAttrs.adType;
          var adspaceWidth = Number(
            ((_b =
              (_a =
                adData === null || adData === void 0
                  ? void 0
                  : adData.displayOptions) === null || _a === void 0
                ? void 0
                : _a.dimensions) === null || _b === void 0
              ? void 0
              : _b.width) || 0,
          );
          var adspaceHeight = Number(
            ((_d =
              (_c =
                adData === null || adData === void 0
                  ? void 0
                  : adData.displayOptions) === null || _c === void 0
                ? void 0
                : _c.dimensions) === null || _d === void 0
              ? void 0
              : _d.height) || 0,
          );
          var adDetail =
            buyType === "FIXED"
              ? adData
              : adData === null || adData === void 0
                ? void 0
                : adData.data;
          if (
            (buyType === "FIXED" &&
              !((_e =
                adData === null || adData === void 0
                  ? void 0
                  : adData.creatives) === null || _e === void 0
                ? void 0
                : _e[0])) ||
            (buyType !== "FIXED" &&
              !((_h =
                (_g =
                  (_f =
                    adDetail === null || adDetail === void 0
                      ? void 0
                      : adDetail.seatBid) === null || _f === void 0
                    ? void 0
                    : _f[0]) === null || _g === void 0
                  ? void 0
                  : _g.bid) === null || _h === void 0
                ? void 0
                : _h[0]))
          ) {
            this.sdk.logger.log("Invalid ad data");
            return;
          }
          var creativeData;
          if (buyType === "FIXED") {
            creativeData = adDetail;
          } else {
            creativeData =
              (_j = adDetail.seatBid[0].bid[0]) === null || _j === void 0
                ? void 0
                : _j.ext;
          }
          // Normalize ctaUrl
          var normalizeUrl = function normalizeUrl(url) {
            if (!url) return url;
            var normalizedUrl = url;
            if (url.startsWith("www.")) normalizedUrl = "https://".concat(url);
            else if (!url.match(/^[a-zA-Z]+:\/\//))
              normalizedUrl = "https://".concat(url);
            return normalizedUrl;
          };
          var ad;
          var bidResponseMetadata;
          if (buyType === "FIXED") {
            ad = {
              creativeUrl:
                (_k =
                  creativeData === null || creativeData === void 0
                    ? void 0
                    : creativeData.creatives) === null || _k === void 0
                  ? void 0
                  : _k[0].fileUrl,
              clickUrl: normalizeUrl(
                (_l =
                  creativeData === null || creativeData === void 0
                    ? void 0
                    : creativeData.creatives) === null || _l === void 0
                  ? void 0
                  : _l[0].ctaUrl,
              ),
              type: adType,
              fileUrl:
                (_m =
                  creativeData === null || creativeData === void 0
                    ? void 0
                    : creativeData.creatives) === null || _m === void 0
                  ? void 0
                  : _m[0].fileUrl,
              title:
                (_p =
                  (_o =
                    creativeData === null || creativeData === void 0
                      ? void 0
                      : creativeData.creatives) === null || _o === void 0
                    ? void 0
                    : _o[0]) === null || _p === void 0
                  ? void 0
                  : _p.title,
              description:
                (_r =
                  (_q =
                    creativeData === null || creativeData === void 0
                      ? void 0
                      : creativeData.creatives) === null || _q === void 0
                    ? void 0
                    : _q[0]) === null || _r === void 0
                  ? void 0
                  : _r.description,
              altText:
                ((_t =
                  (_s =
                    creativeData === null || creativeData === void 0
                      ? void 0
                      : creativeData.creatives) === null || _s === void 0
                    ? void 0
                    : _s[0]) === null || _t === void 0
                  ? void 0
                  : _t.altText) || "",
              scriptUrl:
                creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.scriptUrl,
              brandName:
                ((_u =
                  creativeData === null || creativeData === void 0
                    ? void 0
                    : creativeData.advertiser) === null || _u === void 0
                  ? void 0
                  : _u.name) || "",
              creativeType:
                ((_w =
                  (_v =
                    creativeData === null || creativeData === void 0
                      ? void 0
                      : creativeData.creatives) === null || _v === void 0
                    ? void 0
                    : _v[0]) === null || _w === void 0
                  ? void 0
                  : _w.type) || "image",
              thumbnailUrl:
                ((_y =
                  (_x =
                    creativeData === null || creativeData === void 0
                      ? void 0
                      : creativeData.creatives) === null || _x === void 0
                    ? void 0
                    : _x[0]) === null || _y === void 0
                  ? void 0
                  : _y.thumbnailUrl) || "",
            };
            bidResponseMetadata = {
              responseId: creativeData.id || "",
              trackId: creativeData.signature || "",
              campaignId: creativeData.campaignId || "",
              responseGeneratedAt: creativeData.generatedAt || "",
              expiresAt:
                (creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.expiresAt) || "",
              metaData: creativeData.metaData || "",
            };
          } else {
            ad = {
              creativeUrl:
                creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.creativeUrl,
              clickUrl: normalizeUrl(
                creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.ctaUrl,
              ),
              type: adType,
              fileUrl:
                (_z =
                  adDetail === null || adDetail === void 0
                    ? void 0
                    : adDetail.creative) === null || _z === void 0
                  ? void 0
                  : _z.fileUrl,
              title:
                (creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.creativeTitle) || "Ad Title",
              description:
                (creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.creativeDescription) || "Ad Description",
              altText:
                ((_1 =
                  (_0 =
                    creativeData === null || creativeData === void 0
                      ? void 0
                      : creativeData.creatives) === null || _0 === void 0
                    ? void 0
                    : _0[0]) === null || _1 === void 0
                  ? void 0
                  : _1.altText) || "",
              scriptUrl:
                creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.scriptUrl,
              brandName:
                (creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.brandName) || "",
              creativeType:
                (creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.type) || "image",
              thumbnailUrl:
                (creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.thumbnailUrl) || "",
            };
            bidResponseMetadata = {
              responseId: adDetail.id || "",
              trackId: adDetail.id || "",
              campaignId: adDetail.seatBid[0].bid[0].id,
              responseGeneratedAt: new Date().toISOString(),
              expiresAt:
                (creativeData === null || creativeData === void 0
                  ? void 0
                  : creativeData.expiresAt) || "",
            };
          }
          if (!ad.clickUrl) {
            this.sdk.logger.log("Missing or invalid ctaUrl");
            return;
          }
          var adSpaceSpec = ADSPACE_DIMENSION_CONFIG[adType];
          var adElementId = "adgeist_ads_iframe_".concat(adSpaceId);
          var startTime = performance.now();
          var generateAdCardHtml = function generateAdCardHtml(width, height) {
            if (adType === "banner" || adType === "display") {
              console.log(ad, "ad");
              this.sdk.logger.log("Ad data: ".concat(ad));
              var adCardRenderer = new AdCard({
                adElementId: adElementId,
                title: ad.title,
                description: ad.description,
                altText: ad.altText,
                name: "Brand Name",
                ctaUrl: ad.clickUrl,
                fileUrl: ad.creativeUrl,
                type: adType,
                isResponsive: isAdspaceResponsive,
                height: height,
                width: width,
                mediaType: ad.creativeType,
                adspaceType: adType,
                media: [
                  {
                    src: ad.creativeUrl,
                    thumbnailUrl: ad.thumbnailUrl,
                  },
                ],
              });
              return adCardRenderer.renderHtml();
            }
            return "";
          };
          var shouldCollapseAd = function shouldCollapseAd(width, height) {
            return (
              (adspaceWidth &&
                adspaceHeight &&
                (width < adspaceWidth || height < adspaceHeight)) ||
              width < adSpaceSpec.MIN_WIDTH ||
              height < adSpaceSpec.MIN_HEIGHT
            );
          };
          if (adType === "richmedia" && ad.scriptUrl) {
            this.injectScript(ad.scriptUrl, function () {
              return _this2.sdk.logger.log("Rich media ad loaded");
            });
            return;
          } else if (adType !== "banner" && adType !== "display") {
            this.sdk.logger.log(
              "Unsupported slot type or missing scriptUrl: ".concat(adType),
            );
            return;
          }
          var iframe = document.createElement("iframe");
          iframe.setAttribute("id", adElementId);
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("scrolling", "no");
          iframe.style.border = "none";
          slot.innerHTML = "";
          var slotElement = slot;
          slotElement.style.display = "block";
          slot.appendChild(iframe);
          var renderOrUpdateAd = function renderOrUpdateAd(width, height) {
            if (shouldCollapseAd(width, height)) {
              iframe.style.display = "none";
              _this2.sdk.logger.log(
                "Ad slot too small for "
                  .concat(adSpaceId, ": ")
                  .concat(Math.round(width), "x")
                  .concat(Math.round(height), " (min: ")
                  .concat(adSpaceSpec.MIN_WIDTH, "x")
                  .concat(adSpaceSpec.MIN_HEIGHT, "), collapsing ad"),
              );
              return;
            }
            if (iframe.style.display === "none") {
              iframe.style.display = "block";
              _this2.sdk.logger.log(
                "Ad slot size valid again for "
                  .concat(adSpaceId, ": ")
                  .concat(Math.round(width), "x")
                  .concat(Math.round(height), ", showing ad"),
              );
            }
            var _calculateValidDimens = calculateValidDimensions(
                width,
                height,
                adSpaceSpec,
              ),
              validWidth = _calculateValidDimens.width,
              validHeight = _calculateValidDimens.height;
            iframe.setAttribute("width", validWidth);
            iframe.setAttribute("height", validHeight);
            iframe.style.width = validWidth;
            iframe.style.height = validHeight;
            var adCardHtml = generateAdCardHtml(validWidth, validHeight);
            if (adCardHtml) {
              iframe.srcdoc = adCardHtml;
            }
          };
          var _slot$getBoundingClie = slot.getBoundingClientRect(),
            initialWidth = _slot$getBoundingClie.width,
            initialHeight = _slot$getBoundingClie.height;
          renderOrUpdateAd(initialWidth, initialHeight);
          var lastResizeTime = 0;
          var resizeThrottleMs = 100;
          var resizeObserver = new ResizeObserver(function (entries) {
            var now = performance.now();
            if (now - lastResizeTime < resizeThrottleMs) {
              return;
            }
            lastResizeTime = now;
            var _iterator2 = _createForOfIteratorHelper(entries),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var entry = _step2.value;
                var _entry$contentRect = entry.contentRect,
                  newWidth = _entry$contentRect.width,
                  newHeight = _entry$contentRect.height;
                var rect = slot.getBoundingClientRect();
                var actualWidth = rect.width || newWidth;
                var actualHeight = rect.height || newHeight;
                renderOrUpdateAd(actualWidth, actualHeight);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
          resizeObserver.observe(slot);
          iframe.addEventListener("load", function () {
            var adElement = document.querySelector("#".concat(adElementId));
            if (adElement) {
              var tracker = new AdTracker(
                _this2.sdk,
                adElementId,
                adSpaceId,
                adType,
                buyType,
                startTime,
                bidResponseMetadata,
                ad.creativeType,
              );
              tracker.resizeObserver = resizeObserver;
              _this2.sdk.adTrackers.set(adElementId, tracker);
            } else {
              _this2.sdk.logger.log("No ad element found for tracking");
              resizeObserver.disconnect();
            }
          });
        },
      },
      {
        key: "injectScript",
        value: function injectScript(url, callback) {
          var _this3 = this;
          var trustedDomains = [
            "trusted-domain.com",
            "another-trusted-domain.com",
          ];
          if (
            !url.match(
              new RegExp("^https://(".concat(trustedDomains.join("|"), ")")),
            )
          ) {
            this.sdk.logger.log("Invalid script URL: ".concat(url));
            return;
          }
          var script = document.createElement("script");
          script.src = url;
          script.async = true;
          script.onload = callback;
          script.onerror = function () {
            return _this3.sdk.logger.log("Script load failed: ".concat(url));
          };
          document.head.appendChild(script);
        },
      },
      {
        key: "getAdSlotAttributes",
        value: function getAdSlotAttributes(slotElement) {
          try {
            return {
              adSpaceId:
                (slotElement === null || slotElement === void 0
                  ? void 0
                  : slotElement.getAttribute("data-ad-slot")) || "",
              buyType:
                (slotElement === null || slotElement === void 0
                  ? void 0
                  : slotElement.getAttribute("data-buy-type")) || "",
              isAdspaceResponsive:
                (slotElement === null || slotElement === void 0
                  ? void 0
                  : slotElement.getAttribute("data-responsive")) !== "false",
              adType:
                (slotElement === null || slotElement === void 0
                  ? void 0
                  : slotElement.getAttribute("data-slot-type")) || "banner",
            };
          } catch (error) {
            return null;
          }
        },
      },
    ]);
  })(SDKComponent);

  var AdSlotObserver = /*#__PURE__*/ (function (_SDKComponent) {
    function AdSlotObserver(sdk) {
      var _this;
      _classCallCheck(this, AdSlotObserver);
      _this = _callSuper(this, AdSlotObserver, [sdk]);
      _this.observer = null;
      _this.observer = null;
      return _this;
    }
    _inherits(AdSlotObserver, _SDKComponent);
    return _createClass(AdSlotObserver, [
      {
        key: "observeAdSlots",
        value: function observeAdSlots() {
          var _this2 = this;
          var container =
            document.querySelector(".ad-container") || document.body;
          this.observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  var element = node;
                  if (element.classList.contains("adsbyadgeist")) {
                    window.sspAdsQueue.push(element);
                  }
                  element
                    .querySelectorAll(".adsbyadgeist")
                    .forEach(function (adSlot) {
                      return window.sspAdsQueue.push(adSlot);
                    });
                  _this2.processAdQueue();
                }
              });
            });
          });
          this.observer.observe(container, {
            childList: true,
            subtree: true,
          });
          container
            .querySelectorAll(".adsbyadgeist")
            .forEach(function (adSlot) {
              window.sspAdsQueue.push(adSlot);
              _this2.processAdQueue();
            });
        },
      },
      {
        key: "processAdQueue",
        value: function processAdQueue() {
          while (window.sspAdsQueue.length > 0) {
            var adSlot = window.sspAdsQueue.shift();
            if (adSlot) {
              this.sdk.adLoader.loadAds([adSlot]);
            }
          }
        },
      },
    ]);
  })(SDKComponent);

  var DeviceInfoCollector = /*#__PURE__*/ (function (_SDKComponent) {
    function DeviceInfoCollector(sdk) {
      _classCallCheck(this, DeviceInfoCollector);
      return _callSuper(this, DeviceInfoCollector, [sdk]);
    }
    _inherits(DeviceInfoCollector, _SDKComponent);
    return _createClass(DeviceInfoCollector, [
      {
        key: "getReportedPPI",
        value: function getReportedPPI() {
          var div = document.createElement("div");
          div.style.width = "1in"; // 1 physical inch
          document.body.appendChild(div);
          var cssPixelsPerInch = div.offsetWidth; // CSS pixels in 1 inch
          document.body.removeChild(div);
          // Calculate PPI: CSS pixels per inch * devicePixelRatio
          var ppi = Math.round(cssPixelsPerInch * window.devicePixelRatio);
          return ppi || 96;
        },
      },
      {
        key: "checkNFC",
        value: (function () {
          var _checkNFC = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee() {
              var _this = this;
              return _regenerator().w(function (_context) {
                while (1)
                  switch (_context.n) {
                    case 0:
                      return _context.a(
                        2,
                        new Promise(function (resolve) {
                          var NFCsupported = false;
                          var NFCenabled = false;
                          if ("NDEFReader" in window) {
                            var ndef = new window.NDEFReader();
                            ndef
                              .scan()
                              .then(function () {
                                NFCsupported = true;
                                NFCenabled = true;
                                resolve({
                                  NFCsupported: NFCsupported,
                                  NFCenabled: NFCenabled,
                                });
                              })
                              .catch(function (error) {
                                NFCsupported = true;
                                NFCenabled = false;
                                _this.sdk.logger.error(
                                  "NFC not enabled: " + error,
                                );
                                resolve({
                                  NFCsupported: NFCsupported,
                                  NFCenabled: NFCenabled,
                                });
                              });
                          } else {
                            NFCsupported = false;
                            NFCenabled = false;
                            _this.sdk.logger.error("NFC not supported");
                            resolve({
                              NFCsupported: NFCsupported,
                              NFCenabled: NFCenabled,
                            });
                          }
                        }),
                      );
                  }
              }, _callee);
            }),
          );
          function checkNFC() {
            return _checkNFC.apply(this, arguments);
          }
          return checkNFC;
        })(),
      },
      {
        key: "getDeviceInfo",
        value: (function () {
          var _getDeviceInfo = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee2() {
              var _this2 = this;
              var _a,
                _b,
                _c,
                _d,
                _e,
                _f,
                _g,
                _h,
                uaResult,
                NFCsupported,
                NFCenabled,
                ISP,
                _yield$Promise$allSet,
                _yield$Promise$allSet2,
                nfcResult,
                ispResult,
                nav;
              return _regenerator().w(
                function (_context2) {
                  while (1)
                    switch (_context2.n) {
                      case 0:
                        uaResult = {};
                        NFCsupported = false;
                        NFCenabled = false;
                        ISP = null;
                        _context2.n = 1;
                        return new Promise(function (resolve) {
                          var url =
                            "https://cdn.jsdelivr.net/npm/ua-parser-js@1.0.2/dist/ua-parser.min.js";
                          var script = document.createElement("script");
                          script.src = url;
                          script.async = true;
                          script.onload = function () {
                            var parser;
                            try {
                              parser = new window.UAParser();
                              uaResult = parser.getResult();
                            } catch (error) {
                              _this2.sdk.logger.error(
                                "UAParser.js not available: ".concat(
                                  error.message,
                                ),
                              );
                              uaResult = {
                                device: {
                                  type: null,
                                  vendor: null,
                                  model: null,
                                },
                                os: {
                                  name: null,
                                  version: null,
                                },
                                browser: {
                                  name: null,
                                  version: null,
                                },
                              };
                            }
                            resolve();
                          };
                          script.onerror = function () {
                            _this2.sdk.logger.error(
                              "Script load failed: ".concat(url),
                            );
                            resolve();
                          };
                          document.head.appendChild(script);
                        });
                      case 1:
                        _context2.n = 2;
                        return Promise.allSettled([
                          this.checkNFC(),
                          fetch("https://ipapi.co/json/")
                            .then(function (res) {
                              return res.ok ? res.json() : null;
                            })
                            .catch(function () {
                              return null;
                            }),
                        ]);
                      case 2:
                        _yield$Promise$allSet = _context2.v;
                        _yield$Promise$allSet2 = _slicedToArray(
                          _yield$Promise$allSet,
                          2,
                        );
                        nfcResult = _yield$Promise$allSet2[0];
                        ispResult = _yield$Promise$allSet2[1];
                        // Extract NFC values from the result
                        if (
                          nfcResult.status === "fulfilled" &&
                          nfcResult.value
                        ) {
                          NFCsupported = nfcResult.value.NFCsupported;
                          NFCenabled = nfcResult.value.NFCenabled;
                        }
                        ISP =
                          ispResult.status === "fulfilled" && ispResult.value
                            ? ispResult.value.org || "Unknown"
                            : "Unknown";
                        // Extend Navigator interface for userAgentData
                        nav = navigator;
                        return _context2.a(2, {
                          deviceType:
                            ((_a = uaResult.device) === null || _a === void 0
                              ? void 0
                              : _a.type) ||
                            (((_b = nav.userAgentData) === null || _b === void 0
                              ? void 0
                              : _b.mobile) !== undefined
                              ? nav.userAgentData.mobile
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
                            ((_c = uaResult.os) === null || _c === void 0
                              ? void 0
                              : _c.name) ||
                            ((_d = nav.userAgentData) === null || _d === void 0
                              ? void 0
                              : _d.platform) ||
                            navigator.platform ||
                            "Unavailable (browser privacy)",
                          osVersion:
                            ((_e = uaResult.os) === null || _e === void 0
                              ? void 0
                              : _e.version) || null,
                          noOfProcessors: navigator.hardwareConcurrency || null,
                          browserName:
                            ((_f = uaResult.browser) === null || _f === void 0
                              ? void 0
                              : _f.name) || null,
                          browserVersion:
                            ((_g = uaResult.browser) === null || _g === void 0
                              ? void 0
                              : _g.version) || null,
                          networkType:
                            ((_h = nav.connection) === null || _h === void 0
                              ? void 0
                              : _h.effectiveType) ||
                            "Unavailable (browser privacy)",
                          networkServiceProvider: ISP,
                          isTouchScreenCapable: navigator.maxTouchPoints > 0,
                          isNFCCapable: NFCsupported,
                          isNFCEnabled: NFCenabled,
                          isGPUCapable: !!nav.gpu,
                          webglRenderer: (function () {
                            try {
                              var canvas = document.createElement("canvas");
                              var gl = canvas.getContext("webgl");
                              return (
                                (gl === null || gl === void 0
                                  ? void 0
                                  : gl.getParameter(gl.RENDERER)) || null
                              );
                            } catch (_a) {
                              return null;
                            }
                          })(),
                        });
                    }
                },
                _callee2,
                this,
              );
            }),
          );
          function getDeviceInfo() {
            return _getDeviceInfo.apply(this, arguments);
          }
          return getDeviceInfo;
        })(),
      },
    ]);
  })(SDKComponent);

  var _a;
  var AdvertiserUTMTracker = /*#__PURE__*/ (function () {
    function AdvertiserUTMTracker() {
      _classCallCheck(this, AdvertiserUTMTracker);
    }
    return _createClass(AdvertiserUTMTracker, null, [
      {
        key: "generateSessionId",
        value:
          /**
           * Generates a unique session ID
           */
          function generateSessionId() {
            return ""
              .concat(Date.now(), "-")
              .concat(Math.random().toString(36).slice(2, 11));
          },
        /**
         * Extracts UTM parameters from the current URL
         */
      },
      {
        key: "extractUTMParams",
        value: function extractUTMParams() {
          try {
            var urlParams = new URLSearchParams(window.location.search);
            var utmParams = {
              utm_source: urlParams.get("utm_source") || "",
              utm_campaign: urlParams.get("utm_campaign") || "",
              utm_data: urlParams.get("utm_data") || "",
            };
            if (
              utmParams.utm_source ||
              utmParams.utm_campaign ||
              utmParams.utm_data
            ) {
              return utmParams;
            } else {
              return null;
            }
          } catch (error) {
            this.logger.error("Failed to extract UTM parameters", error);
            return null;
          }
        },
        /**
         * Stores UTM parameters in local storage with expiry
         */
      },
      {
        key: "storeUTMParams",
        value: function storeUTMParams(utmParams) {
          try {
            var utmParamsWithSessionId = _objectSpread2(
              _objectSpread2({}, utmParams),
              {},
              {
                sessionId: this.generateSessionId(),
              },
            );
            sessionStorage.setItem(
              this.UTM_STORAGE_KEY,
              JSON.stringify(utmParamsWithSessionId),
            );
            return utmParamsWithSessionId;
          } catch (error) {
            this.logger.error("Failed to store UTM parameters", error);
          }
        },
        /**
         * Clears stored UTM parameters
         */
      },
      {
        key: "clearStoredUTMParams",
        value: function clearStoredUTMParams() {
          try {
            sessionStorage.removeItem(this.UTM_STORAGE_KEY);
          } catch (error) {
            this.logger.error("Failed to clear UTM parameters", error);
          }
        },
        /**
         * Retrieves stored UTM parameters if they haven't expired
         */
      },
      {
        key: "getStoredUTMParams",
        value: function getStoredUTMParams() {
          try {
            var storedParams = sessionStorage.getItem(this.UTM_STORAGE_KEY);
            if (!storedParams) {
              return null;
            }
            return JSON.parse(storedParams);
          } catch (error) {
            this.logger.error(
              "Failed to retrieve stored UTM parameters",
              error,
            );
            this.clearStoredUTMParams();
            return null;
          }
        },
      },
      {
        key: "initialize",
        value: function initialize(adTrackingUrl) {
          this.adTrackingUrl = adTrackingUrl;
          var urlUTMParams = this.extractUTMParams();
          if (urlUTMParams) {
            var utmParams = this.storeUTMParams(urlUTMParams);
            if (utmParams) {
              //send visit event
              this.sendEvent("VISIT");
            }
          }
        },
      },
    ]);
  })();
  _a = AdvertiserUTMTracker;
  AdvertiserUTMTracker.UTM_STORAGE_KEY = "adgeist_utm_params";
  AdvertiserUTMTracker.adTrackingUrl = "";
  AdvertiserUTMTracker.logger = new Logger({
    enableConsoleLogging: false,
    enableRemoteLogging: true,
    logPrefix: "[AdvertiserUTMTracker]",
  });
  AdvertiserUTMTracker.sendEvent = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ _regenerator().m(function _callee(eventType) {
        var utmParams, deviceInfoCollector, deviceInfo, payload, _t;
        return _regenerator().w(
          function (_context) {
            while (1)
              switch ((_context.p = _context.n)) {
                case 0:
                  utmParams = _a.getStoredUTMParams();
                  if (!utmParams) {
                    _context.n = 5;
                    break;
                  }
                  _context.p = 1;
                  deviceInfoCollector = new DeviceInfoCollector({
                    logger: _a.logger,
                  });
                  _context.n = 2;
                  return deviceInfoCollector.getDeviceInfo();
                case 2:
                  deviceInfo = _context.v;
                  payload = {
                    metaData: utmParams.utm_data,
                    flowId: utmParams.sessionId,
                    type: eventType,
                    origin: utmParams.utm_source,
                    pageUrl: window.location.href,
                    userAgent: navigator.userAgent,
                    additionalData: {
                      device: deviceInfo,
                    },
                  };
                  _a.logger.log(
                    "Sending UTM event: " + JSON.stringify(payload),
                  );
                  _context.n = 3;
                  return fetch(
                    "".concat(_a.adTrackingUrl, "/v2/ssp/campaign-event"),
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(payload),
                    },
                  );
                case 3:
                  _context.n = 5;
                  break;
                case 4:
                  _context.p = 4;
                  _t = _context.v;
                  _a.logger.error("Failed to send UTM event", _t);
                case 5:
                  return _context.a(2);
              }
          },
          _callee,
          null,
          [[1, 4]],
        );
      }),
    );
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })();

  /**
   * ConsentManager class for handling user consent and banner display.
   */
  var ConsentManager = /*#__PURE__*/ (function (_SDKComponent) {
    function ConsentManager(sdk) {
      var _this;
      _classCallCheck(this, ConsentManager);
      _this = _callSuper(this, ConsentManager, [sdk]);
      _this.consentCookieName = DEFAULTS.CONSENT_COOKIE_NAME;
      return _this;
    }
    _inherits(ConsentManager, _SDKComponent);
    return _createClass(ConsentManager, [
      {
        key: "getUserConsent",
        value: function getUserConsent() {
          return document.cookie.includes(
            "".concat(this.consentCookieName, "=true"),
          );
        },
      },
      {
        key: "showConsentBanner",
        value: function showConsentBanner() {
          var _this2 = this;
          if (document.cookie.includes(this.consentCookieName)) return;
          var existingBanner = document.getElementById(
            "adgeist-consent-banner",
          );
          if (existingBanner && existingBanner.parentNode) {
            existingBanner.parentNode.removeChild(existingBanner);
          }
          var banner = document.createElement("div");
          banner.id = "adgeist-consent-banner";
          banner.style.cssText =
            "\n                position: fixed; bottom: 0; left: 0; width: 100%; background: #fff;\n                box-shadow: 0 -2px 8px rgba(0,0,0,0.1); z-index: 9999;\n                display: flex; justify-content: center; align-items: center; padding: 16px;\n            ";
          banner.innerHTML =
            '\n                <div style="max-width: 600px; width: 100%; display: flex; flex-direction: column; align-items: center;">\n                  <span style="font-size: 16px; color: #333; margin-bottom: 12px;">\n                    We use cookies and similar technologies to enhance your browsing experience, analyze site usage, and deliver personalized content.\n                    By clicking "Accept", you consent to our use of cookies for these purposes.\n                  </span>\n                  <div style="display: flex; gap: 12px;">\n                    <button id="adgeist-consent-accept" style="padding: 8px 20px; background: #63aa75; color: #fff; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">\n                      Accept\n                    </button>\n                    <button id="adgeist-consent-deny" style="padding: 8px 20px; background: #eee; color: #333; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">\n                      Deny\n                    </button>\n                  </div>\n                </div>\n            ';
          document.body.appendChild(banner);
          var removeBanner = function removeBanner() {
            var bannerToRemove = document.getElementById(
              "adgeist-consent-banner",
            );
            if (bannerToRemove && bannerToRemove.parentNode) {
              bannerToRemove.parentNode.removeChild(bannerToRemove);
            }
          };
          setTimeout(function () {
            var acceptBtn = document.getElementById("adgeist-consent-accept");
            var denyBtn = document.getElementById("adgeist-consent-deny");
            if (acceptBtn) {
              acceptBtn.addEventListener("click", function () {
                _this2.updateAdgeistUserConsent(true);
                removeBanner();
              });
            }
            if (denyBtn) {
              denyBtn.addEventListener("click", function () {
                _this2.updateAdgeistUserConsent(false);
                removeBanner();
              });
            }
          }, 0);
        },
      },
      {
        key: "updateAdgeistUserConsent",
        value: function updateAdgeistUserConsent(consentGiven) {
          document.cookie = ""
            .concat(this.consentCookieName, "=")
            .concat(consentGiven, "; expires=")
            .concat(
              new Date("9999-12-31T23:59:59Z").toUTCString(),
              "; path=/; SameSite=Lax",
            );
        },
      },
    ]);
  })(SDKComponent);

  var CDPEventCollector = /*#__PURE__*/ (function () {
    function CDPEventCollector(cdpManager) {
      _classCallCheck(this, CDPEventCollector);
      this.fingerprint = null;
      this.userIP = null;
      this.userDetails = {};
      this.cdpManager = cdpManager;
      this.fingerprint = null;
      this.userIP = null;
      this.userDetails = {};
    }
    /**
     * Generates a custom fingerprint based on browser attributes.
     * @returns Fingerprint.
     */
    return _createClass(CDPEventCollector, [
      {
        key: "generateCustomFingerprint",
        value: (function () {
          var _generateCustomFingerprint = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee() {
              var attributes, encoder, data, errorMessage, _t;
              return _regenerator().w(
                function (_context) {
                  while (1)
                    switch ((_context.p = _context.n)) {
                      case 0:
                        attributes = [
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
                        _context.p = 1;
                        encoder = new TextEncoder();
                        _context.n = 2;
                        return crypto.subtle.digest(
                          "SHA-256",
                          encoder.encode(attributes),
                        );
                      case 2:
                        data = _context.v;
                        return _context.a(
                          2,
                          Array.from(new Uint8Array(data))
                            .map(function (b) {
                              return b.toString(16).padStart(2, "0");
                            })
                            .join(""),
                        );
                      case 3:
                        _context.p = 3;
                        _t = _context.v;
                        errorMessage =
                          _t instanceof Error ? _t.message : String(_t);
                        this.cdpManager.logger.error(
                          "Crypto API unavailable, using fallback: ".concat(
                            errorMessage,
                          ),
                        );
                        return _context.a(2, hashString(attributes));
                    }
                },
                _callee,
                this,
                [[1, 3]],
              );
            }),
          );
          function generateCustomFingerprint() {
            return _generateCustomFingerprint.apply(this, arguments);
          }
          return generateCustomFingerprint;
        })(),
        /**
         * Retrieves or generates a device fingerprint.
         * @returns Fingerprint.
         */
      },
      {
        key: "getDeviceFingerprint",
        value: (function () {
          var _getDeviceFingerprint = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee2() {
              var module, fp, result, errorMessage, _t2;
              return _regenerator().w(
                function (_context2) {
                  while (1)
                    switch ((_context2.p = _context2.n)) {
                      case 0:
                        if (!this.fingerprint) {
                          _context2.n = 1;
                          break;
                        }
                        return _context2.a(2, this.fingerprint);
                      case 1:
                        _context2.p = 1;
                        _context2.n = 2;
                        return import("https://openfpcdn.io/fingerprintjs/v4");
                      case 2:
                        module = _context2.v;
                        _context2.n = 3;
                        return module.default.load();
                      case 3:
                        fp = _context2.v;
                        _context2.n = 4;
                        return fp.get();
                      case 4:
                        result = _context2.v;
                        this.fingerprint = result.visitorId;
                        _context2.n = 7;
                        break;
                      case 5:
                        _context2.p = 5;
                        _t2 = _context2.v;
                        errorMessage =
                          _t2 instanceof Error ? _t2.message : String(_t2);
                        this.cdpManager.logger.error(
                          "FingerprintJS failed, using custom fingerprint: ".concat(
                            errorMessage,
                          ),
                        );
                        _context2.n = 6;
                        return this.generateCustomFingerprint();
                      case 6:
                        this.fingerprint = _context2.v;
                      case 7:
                        return _context2.a(2, this.fingerprint || "");
                    }
                },
                _callee2,
                this,
                [[1, 5]],
              );
            }),
          );
          function getDeviceFingerprint() {
            return _getDeviceFingerprint.apply(this, arguments);
          }
          return getDeviceFingerprint;
        })(),
        /**
         * Retrieves the user's IP address.
         * @returns IP address or null.
         */
      },
      {
        key: "getUserIP",
        value: (function () {
          var _getUserIP = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee3() {
              var response, data, errorMessage, _t3;
              return _regenerator().w(
                function (_context3) {
                  while (1)
                    switch ((_context3.p = _context3.n)) {
                      case 0:
                        if (!this.userIP) {
                          _context3.n = 1;
                          break;
                        }
                        return _context3.a(2, this.userIP);
                      case 1:
                        _context3.p = 1;
                        _context3.n = 2;
                        return fetch("https://api.ipify.org?format=json");
                      case 2:
                        response = _context3.v;
                        if (response.ok) {
                          _context3.n = 3;
                          break;
                        }
                        throw new Error("HTTP error: ".concat(response.status));
                      case 3:
                        _context3.n = 4;
                        return response.json();
                      case 4:
                        data = _context3.v;
                        this.userIP = data.ip;
                        return _context3.a(2, data.ip);
                      case 5:
                        _context3.p = 5;
                        _t3 = _context3.v;
                        errorMessage =
                          _t3 instanceof Error ? _t3.message : String(_t3);
                        this.cdpManager.logger.error(
                          "Failed to retrieve user IP: ".concat(errorMessage),
                        );
                        return _context3.a(2, null);
                    }
                },
                _callee3,
                this,
                [[1, 5]],
              );
            }),
          );
          function getUserIP() {
            return _getUserIP.apply(this, arguments);
          }
          return getUserIP;
        })(),
        /**
         * Collects page metadata including title and meta tags.
         * @returns Metadata object.
         */
      },
      {
        key: "collectPageMetadata",
        value: function collectPageMetadata() {
          var metadata = {
            title: document.title || null,
            meta: {},
          };
          document.querySelectorAll("meta").forEach(function (meta) {
            var name =
              meta.getAttribute("name") || meta.getAttribute("property");
            var content = meta.getAttribute("content");
            if (name && content) metadata.meta[name] = content;
          });
          return metadata;
        },
        /**
         * Sets or updates user details.
         * @param details - User details (e.g., { userId: '123', email: 'user@example.com' }).
         * @returns Updated user details.
         */
      },
      {
        key: "setUserDetails",
        value: function setUserDetails(details) {
          if (_typeof(details) !== "object" || details === null) {
            this.cdpManager.logger.error("Invalid user details");
            return this.userDetails;
          }
          this.userDetails = _objectSpread2(
            _objectSpread2({}, this.userDetails),
            details,
          );
          return this.userDetails;
        },
      },
    ]);
  })();

  /**
   * CDPEventSender class to handle sending CDP-related events.
   */
  var CDPEventSender = /*#__PURE__*/ (function () {
    function CDPEventSender(cdpManager, collector) {
      _classCallCheck(this, CDPEventSender);
      this.cdpManager = cdpManager;
      this.collector = collector;
      this.cdpUrl = cdpManager.cdpUrl;
    }
    /**
     * Sends data to the CDP.
     * @param eventType - Event type.
     * @param eventProperties - Event properties.
     */
    return _createClass(CDPEventSender, [
      {
        key: "sendToCDP",
        value: (function () {
          var _sendToCDP = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(
              function _callee(eventType, eventProperties) {
                var _yield$Promise$all,
                  _yield$Promise$all2,
                  fingerprint,
                  userIP,
                  jwtToken,
                  response,
                  errorMessage,
                  _t;
                return _regenerator().w(
                  function (_context) {
                    while (1)
                      switch ((_context.p = _context.n)) {
                        case 0:
                          if (this.cdpManager.shouldIngestEventsToCDP) {
                            _context.n = 1;
                            break;
                          }
                          return _context.a(2);
                        case 1:
                          _context.p = 1;
                          _context.n = 2;
                          return Promise.all([
                            this.collector.getDeviceFingerprint(),
                            this.collector.getUserIP(),
                          ]);
                        case 2:
                          _yield$Promise$all = _context.v;
                          _yield$Promise$all2 = _slicedToArray(
                            _yield$Promise$all,
                            2,
                          );
                          fingerprint = _yield$Promise$all2[0];
                          userIP = _yield$Promise$all2[1];
                          // TODO: Retrieve JWT token from authentication service
                          jwtToken = "";
                          if (jwtToken) {
                            _context.n = 3;
                            break;
                          }
                          return _context.a(2);
                        case 3:
                          _context.n = 4;
                          return fetch("".concat(this.cdpUrl, "/ingest"), {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer ".concat(jwtToken),
                            },
                            body: JSON.stringify({
                              event_type: eventType,
                              traits: _objectSpread2(
                                {
                                  consent_given:
                                    this.cdpManager.consentManager.getUserConsent(),
                                  source: "website",
                                  timestamp: new Date().toISOString(),
                                  fingerprint_id: fingerprint,
                                },
                                this.collector.userDetails,
                              ),
                              context: {
                                page_url: window.location.href,
                                page_title: document.title,
                                ip: userIP,
                              },
                              event_properties: eventProperties,
                            }),
                          });
                        case 4:
                          response = _context.v;
                          if (response.ok) {
                            _context.n = 5;
                            break;
                          }
                          throw new Error(
                            "HTTP error: ".concat(response.status),
                          );
                        case 5:
                          this.cdpManager.logger.log(
                            "CDP event ".concat(
                              eventType,
                              " sent successfully",
                            ),
                          );
                          _context.n = 7;
                          break;
                        case 6:
                          _context.p = 6;
                          _t = _context.v;
                          errorMessage =
                            _t instanceof Error ? _t.message : String(_t);
                          this.cdpManager.logger.error(
                            "Failed to send CDP event "
                              .concat(eventType, ": ")
                              .concat(errorMessage),
                          );
                        case 7:
                          return _context.a(2);
                      }
                  },
                  _callee,
                  this,
                  [[1, 6]],
                );
              },
            ),
          );
          function sendToCDP(_x, _x2) {
            return _sendToCDP.apply(this, arguments);
          }
          return sendToCDP;
        })(),
      },
    ]);
  })();

  var CDPManager = /*#__PURE__*/ (function (_SDKComponent) {
    function CDPManager(sdk) {
      var _this;
      _classCallCheck(this, CDPManager);
      _this = _callSuper(this, CDPManager, [sdk]);
      _this.lastMetadataSent = null;
      _this.cdpUrl = sdk.cdpUrl;
      _this.logger = sdk.logger;
      _this.shouldIngestEventsToCDP = sdk.shouldIngestEventsToCDP;
      _this.consentManager = new ConsentManager(_this);
      _this.collector = new CDPEventCollector(_this);
      _this.sender = new CDPEventSender(_this, _this.collector);
      _this.lastMetadataSent = null;
      return _this;
    }
    /**
     * Sets or updates user details and resends metadata if userId changes.
     * @param details - User details (e.g., { userId: '123', email: 'user@example.com' }).
     */
    _inherits(CDPManager, _SDKComponent);
    return _createClass(CDPManager, [
      {
        key: "setUserDetails",
        value: (function () {
          var _setUserDetails = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee(details) {
              var previousUserId, originalLastMetadataSent, errorMessage, _t;
              return _regenerator().w(
                function (_context) {
                  while (1)
                    switch ((_context.p = _context.n)) {
                      case 0:
                        previousUserId = this.collector.userDetails.userId;
                        this.collector.setUserDetails(details);
                        if (
                          !(details.userId && details.userId !== previousUserId)
                        ) {
                          _context.n = 4;
                          break;
                        }
                        _context.p = 1;
                        originalLastMetadataSent = this.lastMetadataSent;
                        this.lastMetadataSent = null;
                        _context.n = 2;
                        return this.sendPageMetadata();
                      case 2:
                        this.lastMetadataSent = originalLastMetadataSent;
                        _context.n = 4;
                        break;
                      case 3:
                        _context.p = 3;
                        _t = _context.v;
                        errorMessage =
                          _t instanceof Error ? _t.message : String(_t);
                        this.sdk.logger.error(
                          "Failed to resend metadata: ".concat(errorMessage),
                        );
                      case 4:
                        return _context.a(2);
                    }
                },
                _callee,
                this,
                [[1, 3]],
              );
            }),
          );
          function setUserDetails(_x) {
            return _setUserDetails.apply(this, arguments);
          }
          return setUserDetails;
        })(),
        /**
         * Sends page metadata to CDP if not already sent for the current URL.
         */
      },
      {
        key: "sendPageMetadata",
        value: (function () {
          var _sendPageMetadata = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee2() {
              var currentUrl, metadata, errorMessage, _t2;
              return _regenerator().w(
                function (_context2) {
                  while (1)
                    switch ((_context2.p = _context2.n)) {
                      case 0:
                        currentUrl = window.location.href;
                        if (!(this.lastMetadataSent === currentUrl)) {
                          _context2.n = 1;
                          break;
                        }
                        return _context2.a(2);
                      case 1:
                        _context2.p = 1;
                        metadata = this.collector.collectPageMetadata();
                        _context2.n = 2;
                        return this.sender.sendToCDP("METADATA", {
                          pageUrl: currentUrl,
                          metadata: metadata,
                        });
                      case 2:
                        this.lastMetadataSent = currentUrl;
                        _context2.n = 4;
                        break;
                      case 3:
                        _context2.p = 3;
                        _t2 = _context2.v;
                        errorMessage =
                          _t2 instanceof Error ? _t2.message : String(_t2);
                        this.sdk.logger.error(
                          "Failed to send page metadata: ".concat(errorMessage),
                        );
                      case 4:
                        return _context2.a(2);
                    }
                },
                _callee2,
                this,
                [[1, 3]],
              );
            }),
          );
          function sendPageMetadata() {
            return _sendPageMetadata.apply(this, arguments);
          }
          return sendPageMetadata;
        })(),
        /**
         * Tracks a custom event.
         * @param eventType - Event type.
         * @param eventData - Event data.
         */
      },
      {
        key: "trackCustomEvent",
        value: (function () {
          var _trackCustomEvent = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(
              function _callee3(eventType, eventData) {
                return _regenerator().w(
                  function (_context3) {
                    while (1)
                      switch (_context3.n) {
                        case 0:
                          _context3.n = 1;
                          return this.sender.sendToCDP(
                            eventType,
                            _objectSpread2(
                              {
                                pageUrl: window.location.href,
                              },
                              eventData,
                            ),
                          );
                        case 1:
                          return _context3.a(2);
                      }
                  },
                  _callee3,
                  this,
                );
              },
            ),
          );
          function trackCustomEvent(_x2, _x3) {
            return _trackCustomEvent.apply(this, arguments);
          }
          return trackCustomEvent;
        })(),
      },
    ]);
  })(SDKComponent);

  var AdgeistSDK = /*#__PURE__*/ (function () {
    function AdgeistSDK() {
      var _this = this;
      _classCallCheck(this, AdgeistSDK);
      this.handleRouteChange = function () {
        setTimeout(function () {
          _this.cdpManager.sendPageMetadata();
          _this.adTrackers.forEach(function (tracker) {
            return tracker.destroy();
          });
          _this.adTrackers.clear();
          _this.adSlotObserver.observeAdSlots();
          _this.seenAdSpaces.clear();
        }, 200);
      };
      var script = document.currentScript;
      this.seenAdSpaces = new Set();
      this.adServeUrl =
        (script === null || script === void 0
          ? void 0
          : script.getAttribute("data-ad-serve-url")) ||
        "https://beta.v2.bg-services.adgeist.ai";
      this.adTrackingUrl =
        (script === null || script === void 0
          ? void 0
          : script.getAttribute("data-ad-tracking-url")) ||
        "https://beta.v2.bg-services.adgeist.ai";
      this.cdpUrl =
        (script === null || script === void 0
          ? void 0
          : script.getAttribute("data-cdp-url")) ||
        "https://rl2ptnqw5f.execute-api.ap-south-1.amazonaws.com";
      this.shouldIngestEventsToCDP =
        !(script === null || script === void 0
          ? void 0
          : script.getAttribute("data-should-ingest-events-to-cdp")) ||
        (script === null || script === void 0
          ? void 0
          : script.getAttribute("data-should-ingest-events-to-cdp")) === "true";
      this.isTest =
        (script === null || script === void 0
          ? void 0
          : script.getAttribute("data-test-mode")) === "true";
      this.publisherId =
        (script === null || script === void 0
          ? void 0
          : script.getAttribute("data-publisher-id")) || "";
      // Initialize independent logger with configuration based on test mode
      this.logger = new Logger({
        enableConsoleLogging: false,
        enableRemoteLogging: true,
        logPrefix: "[AdgeistSDK]",
      });
      this.cdpManager = new CDPManager(this);
      this.adLoader = new AdLoader(this);
      this.adSlotObserver = new AdSlotObserver(this);
      this.adAudioManager = new AdAudioManager$1(this);
      this.deviceInfoCollector = new DeviceInfoCollector(this);
      this.adTrackers = new Map();
      this.deviceInfo = null;
    }
    return _createClass(AdgeistSDK, [
      {
        key: "init",
        value: (function () {
          var _init = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee() {
              var errorMessage, _t;
              return _regenerator().w(
                function (_context) {
                  while (1)
                    switch ((_context.p = _context.n)) {
                      case 0:
                        _context.p = 0;
                        _context.n = 1;
                        return this.deviceInfoCollector.getDeviceInfo();
                      case 1:
                        this.deviceInfo = _context.v;
                        AdvertiserUTMTracker.initialize(this.adTrackingUrl);
                        _context.n = 2;
                        return this.cdpManager.sendPageMetadata();
                      case 2:
                        this.adSlotObserver.observeAdSlots();
                        this.logger.log("SDK initialized successfully");
                        _context.n = 4;
                        break;
                      case 3:
                        _context.p = 3;
                        _t = _context.v;
                        errorMessage =
                          _t instanceof Error ? _t.message : String(_t);
                        this.logger.error(
                          "Initialization failed: ".concat(errorMessage),
                        );
                      case 4:
                        return _context.a(2);
                    }
                },
                _callee,
                this,
                [[0, 3]],
              );
            }),
          );
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        })(),
      },
      {
        key: "destroy",
        value: (function () {
          var _destroy = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee2() {
              var observer;
              return _regenerator().w(
                function (_context2) {
                  while (1)
                    switch (_context2.n) {
                      case 0:
                        // Type assertion for the observer property
                        observer = this.adSlotObserver.observer;
                        if (observer) {
                          observer.disconnect();
                          this.adSlotObserver.observer = null;
                        }
                        this.adTrackers.forEach(function (tracker) {
                          return tracker.destroy();
                        });
                        this.adTrackers.clear();
                        this.seenAdSpaces.clear();
                        window.removeEventListener(
                          "popstate",
                          this.handleRouteChange,
                        );
                      case 1:
                        return _context2.a(2);
                    }
                },
                _callee2,
                this,
              );
            }),
          );
          function destroy() {
            return _destroy.apply(this, arguments);
          }
          return destroy;
        })(),
      },
    ]);
  })();

  (function () {
    // Initialize SDK
    var sdkInstance = new AdgeistSDK();
    // Setup global interface
    window.sspAdsQueue = window.sspAdsQueue || [];
    window.adsbyadgeist = window.adsbyadgeist || {
      push: function push() {
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }
        sdkInstance.adLoader.loadAds(args.length ? args : null);
      },
      trackCustomEvent: function trackCustomEvent(eventType, eventData) {
        return sdkInstance.cdpManager.trackCustomEvent(eventType, eventData);
      },
      trackConversionEvent: function trackConversionEvent(eventName) {
        if (eventName === "VISIT") {
          return Promise.reject("VISIT event are tracked automatically.");
        }
        return AdvertiserUTMTracker.sendEvent(eventName);
      },
      setUserDetails: function setUserDetails(details) {
        return sdkInstance.cdpManager.setUserDetails(details);
      },
      showConsentBanner: function showConsentBanner() {
        return sdkInstance.cdpManager.consentManager.showConsentBanner();
      },
      updateAdgeistUserConsent: function updateAdgeistUserConsent(
        consentGiven,
      ) {
        return sdkInstance.cdpManager.consentManager.updateAdgeistUserConsent(
          consentGiven,
        );
      },
      getUserConsent: function getUserConsent() {
        return sdkInstance.cdpManager.consentManager.getUserConsent();
      },
      destroy: function destroy() {
        return sdkInstance.destroy();
      },
      version: DEFAULTS.ADGEIST_VERSION,
    };
    // Handle SPA route changes
    var originalPushState = history.pushState;
    var originalReplaceState = history.replaceState;
    history.pushState = function () {
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }
      originalPushState.apply(this, args);
      sdkInstance.handleRouteChange();
    };
    history.replaceState = function () {
      for (
        var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3] = arguments[_key3];
      }
      originalReplaceState.apply(this, args);
      sdkInstance.handleRouteChange();
    };
    window.addEventListener("popstate", sdkInstance.handleRouteChange);
    // Initialize metadata sending on page load
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      setTimeout(function () {
        return sdkInstance.cdpManager.sendPageMetadata();
      }, 0);
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        return sdkInstance.cdpManager.sendPageMetadata();
      });
    }
    // Start SDK
    sdkInstance.init();
    // Return the SDK instance for module systems
    return window.adsbyadgeist;
  })();
  // Export for module systems
  var index = typeof window !== "undefined" ? window.adsbyadgeist : {};

  return index;
});
//# sourceMappingURL=adgeist-sdk.js.map
