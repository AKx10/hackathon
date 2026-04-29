(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
      ? define(factory)
      : ((global =
          typeof globalThis !== "undefined" ? globalThis : global || self),
        (global.AdgeistAdvertiserSDK = factory()));
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
   * Independent Logger class for handling logging across the SDK.
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
            : "[AdgeistAdvertiserSDK]",
      };
    }
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
              data !== null && data !== void 0 ? data : "",
            );
          }
          if (this.config.enableRemoteLogging) {
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
        value: function sendToRemoteService(_message, _data) {},
      },
    ]);
  })();

  var BROWSER_RULES = [
    // Electron — before Chrome (Electron UA contains "Chrome/")
    {
      rx: /Electron\/([\d.]+)/i,
      name: "Electron",
    },
    // Chrome Headless
    {
      rx: /HeadlessChrome\/([\d.]+)/i,
      name: "Chrome Headless",
    },
    // Google Search App
    {
      rx: /GSA\/([\d.]+)/i,
      name: "GSA",
    },
    // Firefox family — before Safari (FxiOS UA contains "Safari/")
    {
      rx: /FxiOS\/([\d.]+)/i,
      name: "Firefox",
    },
    {
      rx: /Firefox\/([\d.]+)/i,
      name: "Firefox",
    },
    {
      rx: /\bfocus\/([\d.]+)/i,
      name: "Firefox Focus",
    },
    {
      rx: /Mobile VR.*Firefox\/([\d.]+)/i,
      name: "Firefox Reality",
    },
    // Edge family — before Chrome (Edge UA contains "Chrome/")
    {
      rx: /EdgiOS\/([\d.]+)/i,
      name: "Edge",
    },
    {
      rx: /EdgA\/([\d.]+)/i,
      name: "Edge",
    },
    {
      rx: /Edg\/([\d.]+)/i,
      name: "Edge",
    },
    {
      rx: /Edge\/([\d.]+)/i,
      name: "Edge",
    },
    // Vivaldi — before Chrome
    {
      rx: /Vivaldi\/([\d.]+)/i,
      name: "Vivaldi",
    },
    // Whale (Naver) — before Chrome
    {
      rx: /Whale\/([\d.]+)/i,
      name: "Whale",
    },
    // Samsung Browser — before Chrome
    {
      rx: /SamsungBrowser\/([\d.]+)/i,
      name: "Samsung Browser",
    },
    // MIUI Browser (Xiaomi/Redmi) — before Chrome
    {
      rx: /MiuiBrowser\/([\d.]+)/i,
      name: "MIUI Browser",
    },
    // Silk (Amazon Kindle/Fire) — before Chrome
    {
      rx: /Silk\/([\d.]+)/i,
      name: "Silk",
    },
    // Puffin
    {
      rx: /Puffin\/([\d.]+)/i,
      name: "Puffin",
    },
    // DuckDuckGo
    {
      rx: /DuckDuckGo\/([\d.]+)/i,
      name: "DuckDuckGo",
    },
    // Opera — OPR before Chrome; Touch and Mini before generic Opera
    {
      rx: /OPR\/([\d.]+)/i,
      name: "Opera",
    },
    {
      rx: /\bopt\/([\d.]+)/i,
      name: "Opera Touch",
    },
    {
      rx: /Opera Mini\/([\d.]+)/i,
      name: "Opera Mini",
    },
    {
      rx: /Opera\/([\d.]+)/i,
      name: "Opera",
    },
    // UC Browser (token and ucweb variants)
    {
      rx: /(?:UC?Browser|UCWEB)\/([\d.]+)/i,
      name: "UC Browser",
    },
    // WeChat
    {
      rx: /MicroMessenger\/([\d.]+)/i,
      name: "WeChat",
    },
    // Yandex
    {
      rx: /YaBrowser\/([\d.]+)/i,
      name: "Yandex",
    },
    // Konqueror
    {
      rx: /Konqueror\/([\d.]+)/i,
      name: "Konqueror",
    },
    // Internet Explorer
    {
      rx: /Trident\/.+rv[: ]([\d.]+)/i,
      name: "IE",
    },
    {
      rx: /MSIE ([\d.]+)/i,
      name: "IE",
    },
    // Oculus Browser
    {
      rx: /OculusBrowser\/([\d.]+)/i,
      name: "Oculus Browser",
    },
    // Android WebView — before Chrome ("; wv)" marker in UA)
    {
      rx: /; wv\).*Chrome\/([\d.]+)/i,
      name: "Chrome WebView",
    },
    // Chromium — before Chrome
    {
      rx: /Chromium\/([\d.]+)/i,
      name: "Chromium",
    },
    // Chrome on iOS
    {
      rx: /CriOS\/([\d.]+)/i,
      name: "Chrome",
    },
    // Android Browser (old AOSP — has Version/ but no Chrome/ token)
    {
      rx: /Android.+Version\/([\d.]+).*(?:Mobile\s+)?Safari/i,
      name: "Android Browser",
    },
    // Chrome on desktop / Android
    {
      rx: /Chrome\/([\d.]+)/i,
      name: "Chrome",
    },
    // Safari — last; most browsers include "Safari/" in their UA
    {
      rx: /Version\/([\d.]+).*Safari\//i,
      name: "Safari",
    },
  ];
  function detectBrowser(ua) {
    var _a;
    var _iterator = _createForOfIteratorHelper(BROWSER_RULES),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var rule = _step.value;
        var m = rule.rx.exec(ua);
        if (m) {
          return {
            name: rule.name,
            version: (_a = m[1]) !== null && _a !== void 0 ? _a : null,
          };
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return {
      name: null,
      version: null,
    };
  }
  // ---------------------------------------------------------------------------
  // OS detection
  // ---------------------------------------------------------------------------
  function detectOS(ua) {
    // iOS — must check before macOS (both contain "Mac OS X")
    var iosMatch =
      /(?:iPhone|iPad|iPod)[^;]*;\s*CPU\s+(?:iPhone\s+)?OS\s+([\d_]+)/i.exec(
        ua,
      );
    if (iosMatch) {
      return {
        name: "iOS",
        version: iosMatch[1].replace(/_/g, "."),
      };
    }
    // Android
    var androidMatch = /Android\s+([\d.]+)/i.exec(ua);
    if (androidMatch) {
      return {
        name: "Android",
        version: androidMatch[1],
      };
    }
    // Windows Phone / Mobile — before generic Windows
    var winPhoneMatch = /Windows (?:Phone(?:\s*OS)?|Mobile)\s*([\d.]*)/i.exec(
      ua,
    );
    if (winPhoneMatch) {
      return {
        name: "Windows Phone",
        version: winPhoneMatch[1] || null,
      };
    }
    // Windows — raw NT version
    var windowsMatch = /Windows NT\s*([\d.]+)/i.exec(ua);
    if (windowsMatch) {
      return {
        name: "Windows",
        version: windowsMatch[1],
      };
    }
    // macOS
    var macMatch = /Mac OS X\s*([\d_.]+)/i.exec(ua);
    if (macMatch) {
      return {
        name: "macOS",
        version: macMatch[1].replace(/_/g, "."),
      };
    }
    // Chrome OS
    var crosMatch = /CrOS\s+\w+\s+([\d.]+)/i.exec(ua);
    if (crosMatch) {
      return {
        name: "Chrome OS",
        version: crosMatch[1],
      };
    }
    // BlackBerry
    var bbMatch = /BlackBerry\w*\/([\d.]+)/i.exec(ua);
    if (bbMatch) {
      return {
        name: "BlackBerry",
        version: bbMatch[1],
      };
    }
    // Tizen
    var tizenMatch = /Tizen\/([\d.]+)/i.exec(ua);
    if (tizenMatch) {
      return {
        name: "Tizen",
        version: tizenMatch[1],
      };
    }
    // KaiOS
    var kaiMatch = /KAIOS\/([\d.]+)/i.exec(ua);
    if (kaiMatch) {
      return {
        name: "KaiOS",
        version: kaiMatch[1],
      };
    }
    // webOS
    var webosMatch = /(?:web|hpw)OS\/([\d.]+)/i.exec(ua);
    if (webosMatch) {
      return {
        name: "webOS",
        version: webosMatch[1],
      };
    }
    // Linux (after Android and Chrome OS)
    if (/Linux/i.test(ua)) {
      return {
        name: "Linux",
        version: null,
      };
    }
    return {
      name: null,
      version: null,
    };
  }
  // ---------------------------------------------------------------------------
  // Device type detection
  // ---------------------------------------------------------------------------
  function detectDeviceType(ua) {
    // Smart TV
    if (
      /Smart[\s-]?TV/i.test(ua) ||
      /\bHbbTV\b/i.test(ua) ||
      /Android TV/i.test(ua) ||
      /Apple TV/i.test(ua) ||
      /\bCrKey\b/i.test(ua) ||
      /Roku\b/i.test(ua) ||
      /AFT[A-Z]/i.test(ua) ||
      /\bNetcast\b/i.test(ua) ||
      /\b(?:SMART-TV|SmartTV)\b/i.test(ua) ||
      /TV; rv:/i.test(ua)
    ) {
      return "smarttv";
    }
    // Wearable
    if (
      /\bWear\s*OS\b/i.test(ua) ||
      /\bwatch\b/i.test(ua) ||
      /Glass \d/i.test(ua)
    ) {
      return "wearable";
    }
    // Console
    if (
      /PlayStation/i.test(ua) ||
      /\bXbox\b/i.test(ua) ||
      /\bNintendo\b/i.test(ua)
    ) {
      return "console";
    }
    // Tablet
    if (/iPad/i.test(ua)) return "tablet";
    if (/Android(?!.*Mobile)/i.test(ua)) return "tablet";
    if (/\b(?:tablet|tab)[;\/]/i.test(ua)) return "tablet";
    // Mobile
    if (/(?:iPhone|iPod)/i.test(ua)) return "mobile";
    if (/Android.*Mobile/i.test(ua)) return "mobile";
    if (/Mobile.*Firefox/i.test(ua)) return "mobile";
    if (/CriOS/i.test(ua)) return "mobile";
    if (/\bMobile\b/i.test(ua)) return "mobile";
    return null;
  }
  // ---------------------------------------------------------------------------
  // Main export
  // ---------------------------------------------------------------------------
  function parseUserAgent(ua) {
    return {
      browser: detectBrowser(ua),
      os: detectOS(ua),
      device: {
        type: detectDeviceType(ua),
      },
    };
  }

  function resolveBrandFromList(list) {
    var _a, _b;
    if (!(list === null || list === void 0 ? void 0 : list.length))
      return {
        name: null,
        version: null,
      };
    var filtered = list.filter(function (b) {
      return !b.brand.includes("Not.A/Brand") && b.brand !== "Chromium";
    });
    var entry =
      (_b =
        (_a = filtered[0]) !== null && _a !== void 0
          ? _a
          : list.find(function (b) {
              return b.brand === "Chromium";
            })) !== null && _b !== void 0
        ? _b
        : null;
    return entry
      ? {
          name: entry.brand,
          version: entry.version,
        }
      : {
          name: null,
          version: null,
        };
  }
  var DeviceInfoCollector = /*#__PURE__*/ (function () {
    function DeviceInfoCollector(_sdk) {
      _classCallCheck(this, DeviceInfoCollector);
      this.cachedDeviceInfo = null;
    }
    return _createClass(DeviceInfoCollector, [
      {
        key: "getReportedPPI",
        value: function getReportedPPI() {
          var div = document.createElement("div");
          div.style.width = "1in";
          document.body.appendChild(div);
          var cssPixelsPerInch = div.offsetWidth;
          document.body.removeChild(div);
          var ppi = Math.round(cssPixelsPerInch * window.devicePixelRatio);
          return ppi || 96;
        },
      },
      {
        key: "checkNFC",
        value: (function () {
          var _checkNFC = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee() {
              var NFCsupported, status;
              return _regenerator().w(
                function (_context) {
                  while (1)
                    switch ((_context.p = _context.n)) {
                      case 0:
                        NFCsupported = "NDEFReader" in window;
                        if (NFCsupported) {
                          _context.n = 1;
                          break;
                        }
                        return _context.a(2, {
                          NFCsupported: false,
                          NFCenabled: false,
                        });
                      case 1:
                        _context.p = 1;
                        _context.n = 2;
                        return navigator.permissions.query({
                          name: "nfc",
                        });
                      case 2:
                        status = _context.v;
                        return _context.a(2, {
                          NFCsupported: true,
                          NFCenabled: status.state === "granted",
                        });
                      case 3:
                        _context.p = 3;
                        _context.v;
                        return _context.a(2, {
                          NFCsupported: true,
                          NFCenabled: false,
                        });
                    }
                },
                _callee,
                null,
                [[1, 3]],
              );
            }),
          );
          function checkNFC() {
            return _checkNFC.apply(this, arguments);
          }
          return checkNFC;
        })(),
      },
      {
        key: "getHighEntropyData",
        value: (function () {
          var _getHighEntropyData = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee2() {
              var _a, nav;
              return _regenerator().w(
                function (_context2) {
                  while (1)
                    switch ((_context2.p = _context2.n)) {
                      case 0:
                        _context2.p = 0;
                        nav = navigator;
                        if (
                          (_a = nav.userAgentData) === null || _a === void 0
                            ? void 0
                            : _a.getHighEntropyValues
                        ) {
                          _context2.n = 1;
                          break;
                        }
                        return _context2.a(2, null);
                      case 1:
                        _context2.n = 2;
                        return nav.userAgentData.getHighEntropyValues([
                          "architecture",
                          "model",
                          "platform",
                          "platformVersion",
                          "fullVersionList",
                          "mobile",
                        ]);
                      case 2:
                        return _context2.a(2, _context2.v);
                      case 3:
                        _context2.p = 3;
                        _context2.v;
                        return _context2.a(2, null);
                    }
                },
                _callee2,
                null,
                [[0, 3]],
              );
            }),
          );
          function getHighEntropyData() {
            return _getHighEntropyData.apply(this, arguments);
          }
          return getHighEntropyData;
        })(),
      },
      {
        key: "getNetworkType",
        value: (function () {
          var _getNetworkType = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee3() {
              var _a, _b, nav, conn;
              return _regenerator().w(function (_context3) {
                while (1)
                  switch (_context3.n) {
                    case 0:
                      nav = navigator;
                      conn =
                        nav.connection ||
                        nav.mozConnection ||
                        nav.webkitConnection;
                      if (conn) {
                        _context3.n = 1;
                        break;
                      }
                      return _context3.a(2, {
                        type: "Unavailable (browser privacy)",
                        effectiveType: "Unavailable (browser privacy)",
                      });
                    case 1:
                      return _context3.a(2, {
                        type:
                          ((_a = conn.type) === null || _a === void 0
                            ? void 0
                            : _a.toUpperCase()) ||
                          "Unavailable (browser privacy)",
                        effectiveType:
                          ((_b = conn.effectiveType) === null || _b === void 0
                            ? void 0
                            : _b.toUpperCase()) ||
                          "Unavailable (browser privacy)",
                      });
                  }
              }, _callee3);
            }),
          );
          function getNetworkType() {
            return _getNetworkType.apply(this, arguments);
          }
          return getNetworkType;
        })(),
      },
      {
        key: "getDeviceInfo",
        value: (function () {
          var _getDeviceInfo = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee4() {
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
                uaResult,
                _yield$Promise$all,
                _yield$Promise$all2,
                heData,
                nfcResult,
                NFCsupported,
                NFCenabled,
                nav,
                resolvedBrowser,
                architecture,
                deviceModel,
                networkInfo,
                isMobile,
                result;
              return _regenerator().w(
                function (_context4) {
                  while (1)
                    switch (_context4.n) {
                      case 0:
                        if (!this.cachedDeviceInfo) {
                          _context4.n = 1;
                          break;
                        }
                        return _context4.a(2, this.cachedDeviceInfo);
                      case 1:
                        uaResult = parseUserAgent(navigator.userAgent);
                        _context4.n = 2;
                        return Promise.all([
                          this.getHighEntropyData(),
                          this.checkNFC().catch(function () {
                            return null;
                          }),
                        ]);
                      case 2:
                        _yield$Promise$all = _context4.v;
                        _yield$Promise$all2 = _slicedToArray(
                          _yield$Promise$all,
                          2,
                        );
                        heData = _yield$Promise$all2[0];
                        nfcResult = _yield$Promise$all2[1];
                        NFCsupported =
                          (_a =
                            nfcResult === null || nfcResult === void 0
                              ? void 0
                              : nfcResult.NFCsupported) !== null &&
                          _a !== void 0
                            ? _a
                            : false;
                        NFCenabled =
                          (_b =
                            nfcResult === null || nfcResult === void 0
                              ? void 0
                              : nfcResult.NFCenabled) !== null && _b !== void 0
                            ? _b
                            : false;
                        nav = navigator;
                        resolvedBrowser = resolveBrandFromList(
                          heData === null || heData === void 0
                            ? void 0
                            : heData.fullVersionList,
                        );
                        architecture =
                          (heData === null || heData === void 0
                            ? void 0
                            : heData.architecture) !== undefined
                            ? heData.architecture || null
                            : null;
                        deviceModel =
                          (heData === null || heData === void 0
                            ? void 0
                            : heData.model) !== undefined
                            ? heData.model || null
                            : null;
                        _context4.n = 3;
                        return this.getNetworkType();
                      case 3:
                        networkInfo = _context4.v;
                        isMobile =
                          (heData === null || heData === void 0
                            ? void 0
                            : heData.mobile) !== undefined
                            ? heData.mobile
                            : ((_c =
                                  nav === null || nav === void 0
                                    ? void 0
                                    : nav.userAgentData) === null ||
                                _c === void 0
                                  ? void 0
                                  : _c.mobile) !== undefined
                              ? nav.userAgentData.mobile
                              : /mobile/i.test(navigator.userAgent);
                        result = {
                          deviceType:
                            (_e =
                              ((_d = uaResult.device) === null || _d === void 0
                                ? void 0
                                : _d.type) ||
                              (isMobile ? "Mobile" : "Desktop")) === null ||
                            _e === void 0
                              ? void 0
                              : _e.toUpperCase(),
                          screenWidth: window.screen.width,
                          screenHeight: window.screen.height,
                          screenPixelRatio: window.devicePixelRatio,
                          screenDensity: this.getReportedPPI(),
                          osName:
                            (_g =
                              (heData === null || heData === void 0
                                ? void 0
                                : heData.platform) ||
                              ((_f = uaResult.os) === null || _f === void 0
                                ? void 0
                                : _f.name) ||
                              navigator.platform ||
                              "Unavailable (browser privacy)") === null ||
                            _g === void 0
                              ? void 0
                              : _g.toUpperCase(),
                          osVersion:
                            (heData === null || heData === void 0
                              ? void 0
                              : heData.platformVersion) ||
                            ((_h = uaResult.os) === null || _h === void 0
                              ? void 0
                              : _h.version) ||
                            null,
                          noOfProcessors: navigator.hardwareConcurrency || null,
                          browserName:
                            ((_k =
                              resolvedBrowser.name ||
                              ((_j = uaResult.browser) === null || _j === void 0
                                ? void 0
                                : _j.name)) === null || _k === void 0
                              ? void 0
                              : _k.toUpperCase()) || null,
                          browserVersion:
                            resolvedBrowser.version ||
                            ((_l = uaResult.browser) === null || _l === void 0
                              ? void 0
                              : _l.version) ||
                            null,
                          networkType:
                            networkInfo === null || networkInfo === void 0
                              ? void 0
                              : networkInfo.effectiveType,
                          networkConnectionType:
                            networkInfo === null || networkInfo === void 0
                              ? void 0
                              : networkInfo.type,
                          isTouchScreenCapable: navigator.maxTouchPoints > 0,
                          isNFCCapable: NFCsupported,
                          isNFCEnabled: NFCenabled,
                          isGPUCapable: !!nav.gpu,
                          isVRCapable: !!("xr" in navigator),
                          isScreenReaderEnabled:
                            (_o =
                              (_m = window.matchMedia) === null || _m === void 0
                                ? void 0
                                : _m.call(window, "(forced-colors: active)")
                                    .matches) !== null && _o !== void 0
                              ? _o
                              : false,
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
                          architecture:
                            (architecture === null || architecture === void 0
                              ? void 0
                              : architecture.toUpperCase()) || null,
                          deviceModel:
                            (deviceModel === null || deviceModel === void 0
                              ? void 0
                              : deviceModel.toUpperCase()) || null,
                        };
                        this.cachedDeviceInfo = result;
                        return _context4.a(2, result);
                    }
                },
                _callee4,
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
  })();

  var ADVERTISER_CONVERSION_EVENTS;
  (function (ADVERTISER_CONVERSION_EVENTS) {
    ADVERTISER_CONVERSION_EVENTS["VISIT"] = "VISIT";
    ADVERTISER_CONVERSION_EVENTS["SESSION_DURATION"] = "SESSION_DURATION";
    ADVERTISER_CONVERSION_EVENTS["ROUTE_CHANGE"] = "ROUTE_CHANGE";
  })(ADVERTISER_CONVERSION_EVENTS || (ADVERTISER_CONVERSION_EVENTS = {}));
  var ADVERTISER_SDK_DEFAULTS = {
    AD_TRACKING_URL: "https://beta.v2.bg-services.adgeist.ai",
    VERSION: "1.0.0",
  };

  // ---------------------------------------------------------------------------
  // Types
  // ---------------------------------------------------------------------------
  var FingerprintManager = /*#__PURE__*/ (function () {
    function FingerprintManager() {
      _classCallCheck(this, FingerprintManager);
      this.cachedAdgeistResult = null;
    }
    return _createClass(FingerprintManager, [
      {
        key: "getCustomFingerprint",
        value: (function () {
          var _getCustomFingerprint = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee() {
              var FP, agent, adgeistResult;
              return _regenerator().w(
                function (_context) {
                  while (1)
                    switch ((_context.p = _context.n)) {
                      case 0:
                        _context.p = 0;
                        if (!this.cachedAdgeistResult) {
                          _context.n = 1;
                          break;
                        }
                        return _context.a(2, this.cachedAdgeistResult);
                      case 1:
                        _context.n = 2;
                        return import("https://cdn.adgeist.ai/identifier/v0/visitorid.js");
                      case 2:
                        FP = _context.v;
                        _context.n = 3;
                        return FP.load();
                      case 3:
                        agent = _context.v;
                        _context.n = 4;
                        return agent.get();
                      case 4:
                        adgeistResult = _context.v;
                        this.cachedAdgeistResult = adgeistResult;
                        return _context.a(2, adgeistResult);
                      case 5:
                        _context.p = 5;
                        _context.v;
                      case 6:
                        return _context.a(2);
                    }
                },
                _callee,
                this,
                [[0, 5]],
              );
            }),
          );
          function getCustomFingerprint() {
            return _getCustomFingerprint.apply(this, arguments);
          }
          return getCustomFingerprint;
        })(),
      },
    ]);
  })();

  var _a;
  var AdvertiserUTMTracker = /*#__PURE__*/ (function () {
    function AdvertiserUTMTracker() {
      _classCallCheck(this, AdvertiserUTMTracker);
    }
    return _createClass(AdvertiserUTMTracker, null, [
      {
        key: "generateSessionId",
        value: function generateSessionId() {
          return ""
            .concat(Date.now(), "-")
            .concat(Math.random().toString(36).slice(2, 11));
        },
      },
      {
        key: "startSessionTracking",
        value: function startSessionTracking() {
          this.sessionStartTime = performance.now();
          this.totalActiveTime = 0;
          this.isPaused = false;
          this.logger.log("Session tracking started");
        },
      },
      {
        key: "pauseSessionTracking",
        value: function pauseSessionTracking() {
          if (!this.isPaused && this.sessionStartTime !== null) {
            this.totalActiveTime += performance.now() - this.sessionStartTime;
            this.sessionStartTime = null; // clear so getTotalSessionDuration doesn't double-count
            this.isPaused = true;
          }
        },
      },
      {
        key: "resumeSessionTracking",
        value: function resumeSessionTracking() {
          if (this.isPaused) {
            this.sessionStartTime = performance.now();
            this.isPaused = false;
          }
        },
      },
      {
        key: "getTotalSessionDuration",
        value: function getTotalSessionDuration() {
          var live =
            !this.isPaused && this.sessionStartTime !== null
              ? performance.now() - this.sessionStartTime
              : 0;
          return Math.round(this.totalActiveTime + live);
        },
        // Resolved once at init — non-blocking, cached for all subsequent events
      },
      {
        key: "resolveIdentity",
        value: function resolveIdentity() {
          var _this = this;
          Promise.all([
            this.fingerprintManager.getCustomFingerprint(),
            new DeviceInfoCollector({
              logger: this.logger,
            }).getDeviceInfo(),
          ])
            .then(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                fp = _ref2[0],
                di = _ref2[1];
              _this.cachedFingerprint = fp || null;
              _this.cachedDeviceInfo = di;
            })
            .catch(function (err) {
              return _this.logger.error("Failed to resolve identity", err);
            });
        },
        // PRIMARY: visibilitychange (most reliable cross-browser signal)
        // SECONDARY: pagehide with dedup guard
        // TERTIARY: heartbeat while active (safety net)
      },
      {
        key: "setupLifecycle",
        value: function setupLifecycle() {
          var _this2 = this;
          document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
              _this2.pauseSessionTracking();
              _this2.flushSessionEvent(true);
            } else {
              _this2.resumeSessionTracking();
            }
          });
          // Guard: skip if visibilitychange already flushed within threshold
          window.addEventListener("pagehide", function () {
            if (
              Date.now() - _this2.lastFlushTs <
              _this2.FLUSH_GUARD_THRESHOLD_MS
            )
              return;
            _this2.flushSessionEvent(true);
          });
          setInterval(function () {
            if (!document.hidden) _this2.flushSessionEvent(false);
          }, this.HEARTBEAT_INTERVAL_MS);
        },
      },
      {
        key: "setupNavigationObserver",
        value: function setupNavigationObserver() {
          var _this3 = this;
          var onRouteChange = function onRouteChange() {
            _this3.hasEngaged = true;
            _this3.flushSessionEvent(false);
          };
          // Intercept pushState / replaceState — only reliable SPA route change signal
          var originalPushState = history.pushState.bind(history);
          var originalReplaceState = history.replaceState.bind(history);
          history.pushState = function () {
            originalPushState.apply(void 0, arguments);
            onRouteChange();
          };
          history.replaceState = function () {
            originalReplaceState.apply(void 0, arguments);
            onRouteChange();
          };
          // popstate fires on browser back/forward — passive, no interception needed
          window.addEventListener("popstate", onRouteChange);
        },
      },
      {
        key: "flushSessionEvent",
        value: function flushSessionEvent(useBeacon) {
          var _this4 = this;
          var _b, _c;
          var duration = this.getTotalSessionDuration();
          if (duration <= 0 || duration === this.latestSessionTimeEventSent)
            return;
          var utmParams = this.getVisitSession();
          try {
            var payload = _objectSpread2(
              _objectSpread2(
                {
                  platform: "WEB",
                  metaData:
                    utmParams === null || utmParams === void 0
                      ? void 0
                      : utmParams.utm_data,
                  flowId:
                    utmParams === null || utmParams === void 0
                      ? void 0
                      : utmParams.sessionId,
                  type: ADVERTISER_CONVERSION_EVENTS.SESSION_DURATION,
                  origin: window.location.origin,
                  pageUrl: window.location.href,
                  userAgent: navigator.userAgent,
                  deviceFingerPrint:
                    ((_b = this.cachedFingerprint) === null || _b === void 0
                      ? void 0
                      : _b.visitorId) || undefined,
                  fingerPrintType: (
                    (_c = this.cachedFingerprint) === null || _c === void 0
                      ? void 0
                      : _c.version
                  )
                    ? "signalHash_" + this.cachedFingerprint.version
                    : undefined,
                },
                this.cachedDeviceInfo,
              ),
              {},
              {
                additionalData: {
                  sessionDuration: duration - this.latestSessionTimeEventSent,
                  totalSessionDuration: duration,
                  isEngaged: this.hasEngaged,
                },
              },
            );
            this.latestSessionTimeEventSent = duration;
            this.lastFlushTs = Date.now();
            var endpoint = this.adTrackingEndpoint;
            var data = JSON.stringify(payload);
            this.logger.log("Flushing SESSION_DURATION event: ".concat(data));
            if (useBeacon && navigator.sendBeacon) {
              var sent = navigator.sendBeacon(
                endpoint,
                new Blob([data], {
                  type: "application/json",
                }),
              );
              if (!sent) {
                // Beacon queue full — fall back to keepalive fetch
                fetch(endpoint, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: data,
                  keepalive: true,
                }).catch(function () {
                  return _this4.logger.error(
                    "SESSION_DURATION keepalive fetch failed",
                  );
                });
              }
            } else {
              fetch(endpoint, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: data,
              }).catch(function () {
                return _this4.logger.error("SESSION_DURATION fetch failed");
              });
            }
          } catch (error) {
            this.logger.error("Failed to flush session event", error);
          }
        },
      },
      {
        key: "resolveAttributionParams",
        value: function resolveAttributionParams() {
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
              localStorage.setItem(
                this.UTM_LOCAL_STORAGE_KEY,
                JSON.stringify(
                  _objectSpread2(
                    _objectSpread2({}, utmParams),
                    {},
                    {
                      timestamp: Date.now(),
                    },
                  ),
                ),
              );
              return utmParams;
            }
            var storedAttribution = localStorage.getItem(
              this.UTM_LOCAL_STORAGE_KEY,
            );
            if (storedAttribution) {
              var parsed = JSON.parse(storedAttribution);
              if (
                Date.now() - parsed.timestamp <
                this.UTM_ATTRIBUTION_EXPIRATION_MS
              ) {
                this.logger.log("Using stored UTM attribution data");
                return {
                  utm_source: parsed.utm_source,
                  utm_campaign: parsed.utm_campaign,
                  utm_data: parsed.utm_data,
                };
              }
              localStorage.removeItem(this.UTM_LOCAL_STORAGE_KEY);
            }
            return null;
          } catch (error) {
            this.logger.error("Failed to extract UTM parameters", error);
            return null;
          }
        },
      },
      {
        key: "storeVisitSession",
        value: function storeVisitSession(utmParams) {
          try {
            var session = _objectSpread2(
              _objectSpread2({}, utmParams || {}),
              {},
              {
                sessionId: this.generateSessionId(),
              },
            );
            sessionStorage.setItem(
              this.UTM_STORAGE_KEY,
              JSON.stringify(session),
            );
            return session;
          } catch (error) {
            this.logger.error("Failed to store visit session", error);
          }
        },
      },
      {
        key: "clearVisitSession",
        value: function clearVisitSession() {
          try {
            sessionStorage.removeItem(this.UTM_STORAGE_KEY);
          } catch (error) {
            this.logger.error("Failed to clear visit session", error);
          }
        },
      },
      {
        key: "getVisitSession",
        value: function getVisitSession() {
          try {
            var storedParams = sessionStorage.getItem(this.UTM_STORAGE_KEY);
            if (!storedParams) return null;
            return JSON.parse(storedParams);
          } catch (error) {
            this.logger.error("Failed to retrieve visit session", error);
            this.clearVisitSession();
            return null;
          }
        },
      },
      {
        key: "initialize",
        value: (function () {
          var _initialize = _asyncToGenerator(
            /*#__PURE__*/ _regenerator().m(function _callee(adTrackingUrl) {
              return _regenerator().w(
                function (_context) {
                  while (1)
                    switch (_context.n) {
                      case 0:
                        if (!this.isInitialized) {
                          _context.n = 1;
                          break;
                        }
                        this.logger.log(
                          "Already initialized, skipping duplicate initialization",
                        );
                        return _context.a(2);
                      case 1:
                        // Guard first — prevents re-entry if initialize() is called concurrently
                        this.isInitialized = true;
                        this.adTrackingEndpoint = "".concat(
                          adTrackingUrl,
                          "/v2/ssp/analytics-event",
                        );
                        // Start session and lifecycle immediately — don't gate on VISIT success
                        this.startSessionTracking();
                        this.resolveIdentity(); // non-blocking, caches for all future events
                        this.setupLifecycle();
                        this.setupNavigationObserver();
                        _context.n = 2;
                        return this.sendVisitEvent();
                      case 2:
                        return _context.a(2);
                    }
                },
                _callee,
                this,
              );
            }),
          );
          function initialize(_x) {
            return _initialize.apply(this, arguments);
          }
          return initialize;
        })(),
      },
    ]);
  })();
  _a = AdvertiserUTMTracker;
  AdvertiserUTMTracker.UTM_STORAGE_KEY = "adgeist_utm_params";
  AdvertiserUTMTracker.UTM_ATTRIBUTION_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
  AdvertiserUTMTracker.UTM_LOCAL_STORAGE_KEY = "adgeist_utm_attribution";
  AdvertiserUTMTracker.HEARTBEAT_INTERVAL_MS = 30000;
  AdvertiserUTMTracker.FLUSH_GUARD_THRESHOLD_MS = 200;
  AdvertiserUTMTracker.adTrackingEndpoint = "";
  AdvertiserUTMTracker.logger = new Logger({
    enableConsoleLogging: false,
    enableRemoteLogging: true,
    logPrefix: "[AdvertiserUTMTracker]",
  });
  AdvertiserUTMTracker.cachedFingerprint = null;
  AdvertiserUTMTracker.cachedDeviceInfo = null;
  AdvertiserUTMTracker.fingerprintManager = new FingerprintManager();
  // Session state
  AdvertiserUTMTracker.sessionStartTime = null;
  AdvertiserUTMTracker.totalActiveTime = 0;
  AdvertiserUTMTracker.isPaused = false;
  AdvertiserUTMTracker.isInitialized = false;
  AdvertiserUTMTracker.hasEngaged = false;
  AdvertiserUTMTracker.latestSessionTimeEventSent = 0;
  AdvertiserUTMTracker.lastFlushTs = 0;
  AdvertiserUTMTracker.sendEvent = /*#__PURE__*/ (function () {
    var _ref3 = _asyncToGenerator(
      /*#__PURE__*/ _regenerator().m(function _callee2(eventType) {
        var additionalData,
          _b,
          _c,
          utmParams,
          payload,
          response,
          _args2 = arguments,
          _t;
        return _regenerator().w(
          function (_context2) {
            while (1)
              switch ((_context2.p = _context2.n)) {
                case 0:
                  additionalData =
                    _args2.length > 1 && _args2[1] !== undefined
                      ? _args2[1]
                      : {};
                  utmParams = _a.getVisitSession();
                  _context2.p = 1;
                  payload = _objectSpread2(
                    _objectSpread2(
                      {
                        platform: "WEB",
                        metaData:
                          utmParams === null || utmParams === void 0
                            ? void 0
                            : utmParams.utm_data,
                        flowId:
                          utmParams === null || utmParams === void 0
                            ? void 0
                            : utmParams.sessionId,
                        type: eventType,
                        origin: window.location.origin,
                        pageUrl: window.location.href,
                        userAgent: navigator.userAgent,
                        deviceFingerPrint:
                          ((_b = _a.cachedFingerprint) === null || _b === void 0
                            ? void 0
                            : _b.visitorId) || undefined,
                        fingerPrintType: (
                          (_c = _a.cachedFingerprint) === null || _c === void 0
                            ? void 0
                            : _c.version
                        )
                          ? "signalHash" + _a.cachedFingerprint.version
                          : undefined,
                      },
                      _a.cachedDeviceInfo,
                    ),
                    {},
                    {
                      additionalData: Object.keys(additionalData).length
                        ? additionalData
                        : undefined,
                    },
                  );
                  _a.logger.log(
                    "Sending tracking event: " + JSON.stringify(payload),
                  );
                  _context2.n = 2;
                  return fetch(_a.adTrackingEndpoint, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  });
                case 2:
                  response = _context2.v;
                  if (response.ok) {
                    _context2.n = 3;
                    break;
                  }
                  throw new Error(
                    "HTTP error! status: ".concat(response.status),
                  );
                case 3:
                  return _context2.a(2, true);
                case 4:
                  _context2.p = 4;
                  _t = _context2.v;
                  _a.logger.error("Failed to send UTM event", _t);
                  return _context2.a(2, false);
              }
          },
          _callee2,
          null,
          [[1, 4]],
        );
      }),
    );
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  })();
  AdvertiserUTMTracker.sendVisitEvent = /*#__PURE__*/ _asyncToGenerator(
    /*#__PURE__*/ _regenerator().m(function _callee3() {
      var attributionParams, session;
      return _regenerator().w(function (_context3) {
        while (1)
          switch (_context3.n) {
            case 0:
              attributionParams = _a.resolveAttributionParams();
              session = _a.storeVisitSession(
                attributionParams !== null && attributionParams !== void 0
                  ? attributionParams
                  : undefined,
              );
              if (!session) {
                _context3.n = 1;
                break;
              }
              _context3.n = 1;
              return _a.sendEvent(ADVERTISER_CONVERSION_EVENTS.VISIT);
            case 1:
              return _context3.a(2);
          }
      }, _callee3);
    }),
  );

  (function () {
    var adTrackingUrl = ADVERTISER_SDK_DEFAULTS.AD_TRACKING_URL;
    window.adgeistAdvertiser = window.adgeistAdvertiser || {
      trackConversionEvent: function trackConversionEvent(eventType) {
        var payload =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        return AdvertiserUTMTracker.sendEvent(eventType, payload);
      },
      version: ADVERTISER_SDK_DEFAULTS.VERSION,
    };
    // Auto-initialize: detects UTM params, fires VISIT event, starts session tracking
    AdvertiserUTMTracker.initialize(adTrackingUrl);
  })();
  var index = typeof window !== "undefined" ? window.adgeistAdvertiser : {};

  return index;
});
//# sourceMappingURL=adgeist-advertiser-sdk.js.map
