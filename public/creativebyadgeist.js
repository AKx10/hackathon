/*! Adgeist Publisher SDK | Copyright (c) 2026 The Alter Office. All Rights Reserved. | Proprietary and confidential. */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
        (e.AdgeistSDK = t()));
})(this, function () {
  "use strict";
  function e(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function t(e) {
    if (Array.isArray(e)) return e;
  }
  function n(t) {
    if (Array.isArray(t)) return e(t);
  }
  function i(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function r(e, t, n, i, r, a, o) {
    try {
      var s = e[a](o),
        l = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(l) : Promise.resolve(l).then(i, r);
  }
  function a(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (i, a) {
        var o = e.apply(t, n);
        function s(e) {
          r(o, i, a, s, l, "next", e);
        }
        function l(e) {
          r(o, i, a, s, l, "throw", e);
        }
        s(void 0);
      });
    };
  }
  function o(e, t, n) {
    return (
      (t = v(t)),
      k(
        e,
        h() ? Reflect.construct(t, n || [], v(e).constructor) : t.apply(e, n),
      )
    );
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      ((i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, C(i.key), i));
    }
  }
  function c(e, t, n) {
    return (
      t && l(e.prototype, t),
      n && l(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function d(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (Array.isArray(e) || (n = P(e)) || t) {
        n && (e = n);
        var i = 0,
          r = function () {};
        return {
          s: r,
          n: function () {
            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
          },
          e: function (e) {
            throw e;
          },
          f: r,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    var a,
      o = !0,
      s = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return ((o = e.done), e);
      },
      e: function (e) {
        ((s = !0), (a = e));
      },
      f: function () {
        try {
          o || null == n.return || n.return();
        } finally {
          if (s) throw a;
        }
      },
    };
  }
  function u(e, t, n) {
    return (
      (t = C(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function v(e) {
    return (
      (v = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      v(e)
    );
  }
  function p(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    ((e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && E(e, t));
  }
  function h() {
    try {
      var e = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (e) {}
    return (h = function () {
      return !!e;
    })();
  }
  function g(e) {
    if (
      ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
      null != e["@@iterator"]
    )
      return Array.from(e);
  }
  function f(e, t) {
    var n =
      null == e
        ? null
        : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
    if (null != n) {
      var i,
        r,
        a,
        o,
        s = [],
        l = !0,
        c = !1;
      try {
        if (((a = (n = n.call(e)).next), 0 === t)) {
          if (Object(n) !== n) return;
          l = !1;
        } else
          for (
            ;
            !(l = (i = a.call(n)).done) && (s.push(i.value), s.length !== t);
            l = !0
          );
      } catch (e) {
        ((c = !0), (r = e));
      } finally {
        try {
          if (!l && null != n.return && ((o = n.return()), Object(o) !== o))
            return;
        } finally {
          if (c) throw r;
        }
      }
      return s;
    }
  }
  function m() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  function y() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      (t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, i));
    }
    return n;
  }
  function w(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? b(Object(n), !0).forEach(function (t) {
            u(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : b(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
    }
    return e;
  }
  function k(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return i(e);
  }
  function x() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      n = "function" == typeof Symbol ? Symbol : {},
      i = n.iterator || "@@iterator",
      r = n.toStringTag || "@@toStringTag";
    function a(n, i, r, a) {
      var l = i && i.prototype instanceof s ? i : s,
        c = Object.create(l.prototype);
      return (
        T(
          c,
          "_invoke",
          (function (n, i, r) {
            var a,
              s,
              l,
              c = 0,
              d = r || [],
              u = !1,
              v = {
                p: 0,
                n: 0,
                v: e,
                a: p,
                f: p.bind(e, 4),
                d: function (t, n) {
                  return ((a = t), (s = 0), (l = e), (v.n = n), o);
                },
              };
            function p(n, i) {
              for (s = n, l = i, t = 0; !u && c && !r && t < d.length; t++) {
                var r,
                  a = d[t],
                  p = v.p,
                  h = a[2];
                n > 3
                  ? (r = h === i) &&
                    ((l = a[(s = a[4]) ? 5 : ((s = 3), 3)]), (a[4] = a[5] = e))
                  : a[0] <= p &&
                    ((r = n < 2 && p < a[1])
                      ? ((s = 0), (v.v = i), (v.n = a[1]))
                      : p < h &&
                        (r = n < 3 || a[0] > i || i > h) &&
                        ((a[4] = n), (a[5] = i), (v.n = h), (s = 0)));
              }
              if (r || n > 1) return o;
              throw ((u = !0), i);
            }
            return function (r, d, h) {
              if (c > 1) throw TypeError("Generator is already running");
              for (
                u && 1 === d && p(d, h), s = d, l = h;
                (t = s < 2 ? e : l) || !u;
              ) {
                a ||
                  (s
                    ? s < 3
                      ? (s > 1 && (v.n = -1), p(s, l))
                      : (v.n = l)
                    : (v.v = l));
                try {
                  if (((c = 2), a)) {
                    if ((s || (r = "next"), (t = a[r]))) {
                      if (!(t = t.call(a, l)))
                        throw TypeError("iterator result is not an object");
                      if (!t.done) return t;
                      ((l = t.value), s < 2 && (s = 0));
                    } else
                      (1 === s && (t = a.return) && t.call(a),
                        s < 2 &&
                          ((l = TypeError(
                            "The iterator does not provide a '" +
                              r +
                              "' method",
                          )),
                          (s = 1)));
                    a = e;
                  } else if ((t = (u = v.n < 0) ? l : n.call(i, v)) !== o)
                    break;
                } catch (t) {
                  ((a = e), (s = 1), (l = t));
                } finally {
                  c = 1;
                }
              }
              return { value: t, done: u };
            };
          })(n, r, a),
          !0,
        ),
        c
      );
    }
    var o = {};
    function s() {}
    function l() {}
    function c() {}
    t = Object.getPrototypeOf;
    var d = [][i]
        ? t(t([][i]()))
        : (T((t = {}), i, function () {
            return this;
          }),
          t),
      u = (c.prototype = s.prototype = Object.create(d));
    function v(e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, c)
          : ((e.__proto__ = c), T(e, r, "GeneratorFunction")),
        (e.prototype = Object.create(u)),
        e
      );
    }
    return (
      (l.prototype = c),
      T(u, "constructor", c),
      T(c, "constructor", l),
      (l.displayName = "GeneratorFunction"),
      T(c, r, "GeneratorFunction"),
      T(u),
      T(u, r, "Generator"),
      T(u, i, function () {
        return this;
      }),
      T(u, "toString", function () {
        return "[object Generator]";
      }),
      (x = function () {
        return { w: a, m: v };
      })()
    );
  }
  function T(e, t, n, i) {
    var r = Object.defineProperty;
    try {
      r({}, "", {});
    } catch (e) {
      r = 0;
    }
    ((T = function (e, t, n, i) {
      function a(t, n) {
        T(e, t, function (e) {
          return this._invoke(t, n, e);
        });
      }
      t
        ? r
          ? r(e, t, {
              value: n,
              enumerable: !i,
              configurable: !i,
              writable: !i,
            })
          : (e[t] = n)
        : (a("next", 0), a("throw", 1), a("return", 2));
    }),
      T(e, t, n, i));
  }
  function E(e, t) {
    return (
      (E = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return ((e.__proto__ = t), e);
          }),
      E(e, t)
    );
  }
  function S(e, n) {
    return t(e) || f(e, n) || P(e, n) || m();
  }
  function I(e) {
    return n(e) || g(e) || P(e) || y();
  }
  function A(e, t) {
    if ("object" != typeof e || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var i = n.call(e, t);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function C(e) {
    var t = A(e, "string");
    return "symbol" == typeof t ? t : t + "";
  }
  function M(e) {
    return (
      (M =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      M(e)
    );
  }
  function P(t, n) {
    if (t) {
      if ("string" == typeof t) return e(t, n);
      var i = {}.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            ? e(t, n)
            : void 0
      );
    }
  }
  var O = c(function e(t) {
    (s(this, e), (this.sdk = t));
  });
  var D = (function (e) {
    function t(e) {
      var n;
      return (
        s(this, t),
        (n = o(this, t, [e])),
        (n.activeUnmutedAd = null),
        (n.sdk = e),
        (n.activeUnmutedAd = null),
        n.setupMuteEventListener(),
        n
      );
    }
    return (
      p(t, e),
      c(t, [
        {
          key: "setupMuteEventListener",
          value: function e() {
            var t = this;
            window.addEventListener("message", function (e) {
              if (e.data && "adgeist_mute_event" === e.data.type) {
                var n = e.data;
                var i = n.adElementId,
                  r = n.muted;
                r || t.activeUnmutedAd === i
                  ? r && t.activeUnmutedAd === i && (t.activeUnmutedAd = null)
                  : ((t.activeUnmutedAd = i), t.muteAllOtherAds(i));
              }
            });
          },
        },
        {
          key: "muteAllOtherAds",
          value: function e(t) {
            var n = this;
            var i = document.querySelectorAll(
              'iframe[id^="adgeist_ads_iframe_"]',
            );
            i.forEach(function (e) {
              if (e.id !== t)
                try {
                  var i;
                  var r = { type: "adgeist_mute", mute: !0 };
                  null === (i = e.contentWindow) ||
                    void 0 === i ||
                    i.postMessage(r, "*");
                } catch (o) {
                  var a = o instanceof Error ? o.message : String(o);
                  n.sdk.logger.log(
                    "Failed to send mute message to iframe "
                      .concat(e.id, ": ")
                      .concat(a),
                  );
                }
            });
          },
        },
      ])
    );
  })(O);
  function _() {
    if ("undefined" != typeof Intl && Intl.DateTimeFormat)
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (r) {}
    var e = -new Date().getTimezoneOffset() / 60;
    var t = e >= 0 ? "+" : "";
    var n = Math.floor(Math.abs(e));
    var i = 60 * (Math.abs(e) - n);
    return i
      ? "UTC".concat(t).concat(n, ":").concat(i.toString().padStart(2, "0"))
      : "UTC".concat(t).concat(n);
  }
  var V = function e(t, n, i) {
    var r = Math.min(i.MAX_WIDTH, Math.max(i.MIN_WIDTH, t));
    var a = Math.min(i.MAX_HEIGHT, Math.max(i.MIN_HEIGHT, n));
    return { width: "".concat(r, "px"), height: "".concat(a, "px") };
  };
  var R;
  !(function (e) {
    ((e["IMPRESSION"] = "IMPRESSION"),
      (e["VIEW"] = "VIEW"),
      (e["TOTAL_VIEW"] = "TOTAL_VIEW"),
      (e["HOVER"] = "HOVER"),
      (e["CLICK"] = "CLICK"),
      (e["VIDEO_PLAYBACK"] = "VIDEO_PLAYBACK"),
      (e["VIDEO_QUARTILE"] = "VIDEO_QUARTILE"));
  })(R || (R = {}));
  var N = {
    VISIBILITY_THRESHOLD: 0.5,
    MIN_VIEW_TIME: 1e3,
    VIDEO_MIN_VIEW_TIME: 2e3,
    CONSENT_COOKIE_NAME: "adgeist_consent",
    ADGEIST_VERSION: "1.0.0",
  };
  var H;
  !(function (e) {
    ((e["ACCEPTED_ALL"] = "accepted_all"),
      (e["ONLY_ESSENTIAL"] = "only_essential"),
      (e["PERFORMANCE"] = "essential+performance"),
      (e["ADVERTISING"] = "essential+advertising"),
      (e["PERSONALIZATION"] = "essential+personalization"),
      (e["PERFORMANCE_ADVERTISING"] = "essential+performance+advertising"),
      (e["PERFORMANCE_PERSONALIZATION"] =
        "essential+performance+personalization"),
      (e["ADVERTISING_PERSONALIZATION"] =
        "essential+advertising+personalization"));
  })(H || (H = {}));
  var L = {
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
    companion: {
      MIN_WIDTH: 320,
      MIN_HEIGHT: 305,
      MAX_WIDTH: 560,
      MAX_HEIGHT: 470,
    },
  };
  var U = (function () {
    function e(t, n, i, r, a, o) {
      (s(this, e),
        (this.viewEventsSent = !1),
        (this.clickEventsSent = !1),
        (this.sdk = t),
        (this.adElementId = n),
        (this.adSpaceId = i),
        (this.responseId = o.responseId),
        (this.trackId = o.trackId),
        (this.campaignId = o.campaignId),
        (this.metaData = o.metaData),
        (this.adType = r),
        (this.buyType = a),
        (this.adTrackingUrl = t.adTrackingUrl),
        (this.expiresAt = (null == o ? void 0 : o.expiresAt) || ""));
    }
    return c(e, [
      {
        key: "sendEvent",
        value: (function () {
          var e = a(
            x().m(function e(t, n) {
              var i, r, a, o, s, l, c, d;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        if (((e.p = 0), !this.expiresAt)) {
                          e.n = 1;
                          break;
                        }
                        if (
                          ((a = Date.now()),
                          (o = new Date(this.expiresAt).getTime()),
                          !(a > o))
                        ) {
                          e.n = 1;
                          break;
                        }
                        return (
                          this.sdk.logger.log(
                            "Ad event tracking expired for track: ".concat(
                              this.trackId,
                            ),
                          ),
                          e.a(2)
                        );
                      case 1:
                        if (t !== R.VIEW) {
                          e.n = 3;
                          break;
                        }
                        if (!this.viewEventsSent) {
                          e.n = 2;
                          break;
                        }
                        return (
                          this.sdk.logger.log(
                            "VIEW event already sent for track: ".concat(
                              this.trackId,
                            ),
                          ),
                          e.a(2)
                        );
                      case 2:
                        e.n = 4;
                        break;
                      case 3:
                        if (t !== R.CLICK) {
                          e.n = 4;
                          break;
                        }
                        if (!this.clickEventsSent) {
                          e.n = 4;
                          break;
                        }
                        return (
                          this.sdk.logger.log(
                            "CLICK event already sent for track: ".concat(
                              this.trackId,
                            ),
                          ),
                          e.a(2)
                        );
                      case 4:
                        if (((s = this.buildAnalyticsPayload(t, n)), s)) {
                          e.n = 5;
                          break;
                        }
                        return (
                          this.sdk.logger.log("Unknown event type: ".concat(t)),
                          e.a(2)
                        );
                      case 5:
                        if (t === R.CLICK || t === R.VIEW) {
                          e.n = 6;
                          break;
                        }
                        return e.a(2);
                      case 6:
                        return (
                          (e.n = 7),
                          fetch(
                            "".concat(this.adTrackingUrl, "/v2/ssp/impression"),
                            {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(
                                w(
                                  w(
                                    {
                                      type: t,
                                      metaData: this.metaData,
                                      isTest: this.sdk.isTest,
                                      deviceFingerPrint:
                                        (null === (i = this.sdk.fingerprint) ||
                                        void 0 === i
                                          ? void 0
                                          : i.visitorId) || void 0,
                                      fingerPrintType:
                                        null !== (r = this.sdk.fingerprint) &&
                                        void 0 !== r &&
                                        r.version
                                          ? "signalHash" +
                                            this.sdk.fingerprint.version
                                          : void 0,
                                    },
                                    this.sdk.deviceInfo,
                                  ),
                                  s,
                                ),
                              ),
                            },
                          )
                        );
                      case 7:
                        if (((l = e.v), l.ok)) {
                          e.n = 8;
                          break;
                        }
                        throw new Error("HTTP error: ".concat(l.status));
                      case 8:
                        (t === R.VIEW
                          ? (this.viewEventsSent = !0)
                          : t === R.CLICK && (this.clickEventsSent = !0),
                          this.sdk.logger.log(
                            ""
                              .concat(t, " tracked for track: ")
                              .concat(this.trackId),
                          ),
                          (e.n = 10));
                        break;
                      case 9:
                        ((e.p = 9),
                          (d = e.v),
                          (c = d instanceof Error ? d.message : String(d)),
                          this.sdk.logger.error(
                            "".concat(t, " tracking failed: ").concat(c),
                          ));
                      case 10:
                        return e.a(2);
                    }
                },
                e,
                this,
                [[0, 9]],
              );
            }),
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "buildAnalyticsPayload",
        value: function e(t, n) {
          var i = {};
          switch (t) {
            case R.IMPRESSION:
              return w(w({}, i), {}, { renderTime: n.renderTime });
            case R.VIEW:
              var r = n;
              return w(
                w({}, i),
                {},
                {
                  viewTime: r.viewTime,
                  visibilityRatio: r.visibilityRatio,
                  scrollDepth: r.scrollDepth,
                  timeToVisible: r.timeToVisible,
                },
              );
            case R.TOTAL_VIEW:
              var a = n;
              return w(
                w({}, i),
                {},
                {
                  totalViewTime: a.totalViewTime,
                  visibilityRatio: a.visibilityRatio,
                },
              );
            case R.HOVER:
              return w(w({}, i), {}, { hoverTime: n.hoverTime });
            case R.CLICK:
              return i;
            case R.VIDEO_PLAYBACK:
              return w(
                w({}, i),
                {},
                { totalPlaybackTime: n.totalPlaybackTime },
              );
            case R.VIDEO_QUARTILE:
              return w(w({}, i), {}, { quartile: n.quartile });
            default:
              return null;
          }
        },
      },
      {
        key: "getAdSlotElement",
        value: function e() {
          return document.getElementById(this.adElementId);
        },
      },
    ]);
  })();
  var j = (function () {
    function e(t, n, i, r, a, o, l, c) {
      var d =
        arguments.length > 8 && void 0 !== arguments[8]
          ? arguments[8]
          : N.VISIBILITY_THRESHOLD;
      if (
        (s(this, e),
        (this.isVisible = !1),
        (this.viewStartTime = null),
        (this.totalViewTime = 0),
        (this.hoverStartTime = null),
        (this.totalHoverTime = 0),
        (this.playbackStartTime = null),
        (this.totalPlaybackTime = 0),
        (this.lastPausedTime = 0),
        (this.hasEnded = !1),
        (this.hasSentPlaybackEvent = !1),
        (this.observer = null),
        (this.hasImpression = !1),
        (this.hasViewEvent = !1),
        (this.visibilityCheckInterval = null),
        (this.currentVisibilityRatio = 0),
        (this.sdk = t),
        (this.adElementId = n),
        (this.adType = r),
        (this.visibilityThreshold = d),
        (this.minViewTime =
          "video" === c ? N.VIDEO_MIN_VIEW_TIME : N.MIN_VIEW_TIME),
        (this.isVisible = !1),
        (this.viewStartTime = null),
        (this.totalViewTime = 0),
        (this.hoverStartTime = null),
        (this.totalHoverTime = 0),
        (this.playbackStartTime = null),
        (this.totalPlaybackTime = 0),
        (this.lastPausedTime = 0),
        (this.hasEnded = !1),
        (this.hasSentPlaybackEvent = !1),
        (this.observer = null),
        (this.renderStartTime = o || performance.now()),
        (this.hasImpression = !1),
        (this.hasViewEvent = !1),
        (this.visibilityCheckInterval = null),
        (this.currentVisibilityRatio = 0),
        (this.eventSender = new U(t, n, i, r, a, l)),
        (this.mediaType = c),
        (this.adElement = document.getElementById(n)),
        !this.adElement)
      )
        return (
          this.sdk.logger.log("Ad element not found: ".concat(n)),
          void 0
        );
      this.init();
    }
    return c(e, [
      {
        key: "init",
        value: function e() {
          (this.setupImpressionTracking(),
            this.setupClickTracking(),
            "IntersectionObserver" in window
              ? this.setupIntersectionObserver()
              : (this.sdk.logger.log(
                  "IntersectionObserver not supported. Using fallback.",
                ),
                this.fallbackTracking()),
            this.setupInteractionListeners(),
            this.setupVisibilityChangeListener());
        },
      },
      {
        key: "setupImpressionTracking",
        value: function e() {
          var t = this;
          var n = this.getAdCreative();
          if ("image" === this.mediaType || "gif" === this.mediaType) {
            var i = null == n ? void 0 : n.querySelector("img");
            i &&
              (i.complete
                ? this.recordImpression()
                : i.addEventListener("load", function () {
                    return t.recordImpression();
                  }));
          } else if ("video" === this.mediaType) {
            var r = null == n ? void 0 : n.querySelector("video");
            r &&
              (r.complete
                ? this.recordImpression()
                : r.addEventListener("canplay", function () {
                    return t.recordImpression();
                  }));
          }
        },
      },
      {
        key: "setupClickTracking",
        value: function e() {
          var t = this.getAdCreative();
          t
            ? (this.addClickListener(t),
              this.adElement &&
                "iframe" === this.adElement.tagName.toLowerCase() &&
                t !== this.adElement &&
                this.addClickListener(this.adElement))
            : (this.sdk.logger.log(
                "Ad link element not found for ".concat(this.adElementId),
              ),
              this.adElement && this.addClickListener(this.adElement));
        },
      },
      {
        key: "addClickListener",
        value: function e(t) {
          var n = this;
          t.addEventListener("click", function (e) {
            var t, i, r;
            var a = e.target;
            var o =
              a.closest(
                '[id*="mute"], [id*="play"], [id*="pause"], [class*="control"], [class*="button"]',
              ) ||
              (null === (t = a.id) || void 0 === t
                ? void 0
                : t.includes("mute")) ||
              (null === (i = a.id) || void 0 === i
                ? void 0
                : i.includes("play")) ||
              (null === (r = a.id) || void 0 === r
                ? void 0
                : r.includes("pause")) ||
              a.classList.contains("video-controls");
            o || n.sendClickData();
          });
        },
      },
      {
        key: "setupIntersectionObserver",
        value: function e() {
          var t = this;
          this.adElement &&
            ((this.observer = new IntersectionObserver(
              function (e) {
                return t.handleIntersection(e);
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
                  1,
                ],
              },
            )),
            this.observer.observe(this.adElement));
        },
      },
      {
        key: "setupInteractionListeners",
        value: function e() {
          var t = this;
          if (
            this.adElement &&
            ("ontouchstart" in window ||
              (this.adElement.addEventListener("mouseover", function () {
                t.hoverStartTime || (t.hoverStartTime = performance.now());
              }),
              this.adElement.addEventListener("mouseout", function () {
                return t.updateHoverTime();
              })),
            "video" === this.mediaType)
          ) {
            var n;
            var i =
              null === (n = this.getAdCreative()) || void 0 === n
                ? void 0
                : n.querySelector("video");
            i &&
              (i.addEventListener("play", function () {
                t.playbackStartTime ||
                  (t.playbackStartTime = performance.now());
              }),
              i.addEventListener("pause", function () {
                t.updatePlaybackTime();
              }),
              i.addEventListener("ended", function () {
                (t.hasEnded ||
                  ((t.hasEnded = !0),
                  t.updatePlaybackTime(),
                  t.sendVideoPlaybackData()),
                  i.play());
              }));
          }
        },
      },
      {
        key: "setupVisibilityChangeListener",
        value: function e() {
          var t = this;
          document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
              if (
                (t.updateViewTime(),
                t.updateHoverTime(),
                t.updatePlaybackTime(),
                "video" === t.mediaType && !t.hasEnded)
              ) {
                var e;
                var n =
                  null === (e = t.getAdCreative()) || void 0 === e
                    ? void 0
                    : e.querySelector("video");
                n &&
                  ((t.lastPausedTime = n.currentTime), t.updatePlaybackTime());
              }
              t.stopVisibilityCheck();
            } else if (
              "visible" === document.visibilityState &&
              (t.startVisibilityCheck(), "video" === t.mediaType)
            ) {
              var i;
              var r =
                null === (i = t.getAdCreative()) || void 0 === i
                  ? void 0
                  : i.querySelector("video");
              r && ((t.lastPausedTime = r.currentTime), t.updatePlaybackTime());
            }
          });
        },
      },
      {
        key: "recordImpression",
        value: function e() {
          if (!this.hasImpression) {
            var t = performance.now() - this.renderStartTime;
            (this.eventSender.sendEvent(R.IMPRESSION, { renderTime: t }),
              (this.hasImpression = !0));
          }
        },
      },
      {
        key: "startVisibilityCheck",
        value: function e() {
          var t = this;
          this.visibilityCheckInterval ||
            (this.visibilityCheckInterval = setInterval(function () {
              if (t.isVisible && t.viewStartTime && !t.hasViewEvent) {
                var e = performance.now() - t.viewStartTime;
                if (e >= t.minViewTime) {
                  t.hasViewEvent = !0;
                  var n = window.scrollY / document.body.scrollHeight;
                  var i = performance.now() - t.renderStartTime;
                  var r = t.getCurrentVisibilityRatio();
                  (t.eventSender.sendEvent(R.VIEW, {
                    viewTime: e,
                    visibilityRatio: r,
                    scrollDepth: n,
                    timeToVisible: i,
                  }),
                    t.stopVisibilityCheck());
                }
              }
            }, 100));
        },
      },
      {
        key: "stopVisibilityCheck",
        value: function e() {
          this.visibilityCheckInterval &&
            (clearInterval(this.visibilityCheckInterval),
            (this.visibilityCheckInterval = null));
        },
      },
      {
        key: "getCurrentVisibilityRatio",
        value: function e() {
          if (!("IntersectionObserver" in window) && this.adElement) {
            var t = this.adElement.getBoundingClientRect();
            var n = window.innerHeight || document.documentElement.clientHeight;
            return Math.min(t.bottom / n, (n - t.top) / n, 1);
          }
          return this.currentVisibilityRatio;
        },
      },
      {
        key: "handleIntersection",
        value: function e(t) {
          var n = this;
          t.forEach(function (e) {
            var t;
            var i = e.intersectionRatio;
            var r = n.isVisible;
            ((n.currentVisibilityRatio = i),
              (n.isVisible = i >= n.visibilityThreshold));
            var a =
              "video" === n.mediaType
                ? null === (t = n.getAdCreative()) || void 0 === t
                  ? void 0
                  : t.querySelector("video")
                : null;
            n.isVisible && !r
              ? (n.viewStartTime ||
                  ((n.viewStartTime = performance.now()),
                  n.startVisibilityCheck()),
                a &&
                  !n.hasEnded &&
                  ((a.currentTime = n.lastPausedTime),
                  a.play().catch(function (e) {
                    return n.sdk.logger.error(
                      "Video play failed for "
                        .concat(n.adElementId, ": ")
                        .concat(e.message),
                    );
                  }),
                  n.playbackStartTime ||
                    (n.playbackStartTime = performance.now())))
              : !n.isVisible &&
                r &&
                (n.updateViewTime(),
                n.stopVisibilityCheck(),
                a &&
                  !n.hasEnded &&
                  ((n.lastPausedTime = a.currentTime),
                  a.pause(),
                  n.updatePlaybackTime()));
          });
        },
      },
      {
        key: "updateViewTime",
        value: function e() {
          this.viewStartTime &&
            ((this.totalViewTime += performance.now() - this.viewStartTime),
            (this.viewStartTime = null),
            this.stopVisibilityCheck());
        },
      },
      {
        key: "updateHoverTime",
        value: function e() {
          this.hoverStartTime &&
            ((this.totalHoverTime += performance.now() - this.hoverStartTime),
            (this.hoverStartTime = null));
        },
      },
      {
        key: "updatePlaybackTime",
        value: function e() {
          this.playbackStartTime &&
            "video" === this.mediaType &&
            ((this.totalPlaybackTime +=
              performance.now() - this.playbackStartTime),
            (this.playbackStartTime = null));
        },
      },
      {
        key: "sendHoverData",
        value: function e() {
          this.totalHoverTime > 0 &&
            this.eventSender.sendEvent(R.HOVER, {
              hoverTime: this.totalHoverTime,
            });
        },
      },
      {
        key: "sendClickData",
        value: function e() {
          this.eventSender.sendEvent(R.CLICK, {});
        },
      },
      {
        key: "sendVideoPlaybackData",
        value: function e() {
          this.totalPlaybackTime > 0 &&
            !this.hasSentPlaybackEvent &&
            (this.eventSender.sendEvent(R.VIDEO_PLAYBACK, {
              totalPlaybackTime: this.totalPlaybackTime,
            }),
            (this.hasSentPlaybackEvent = !0));
        },
      },
      {
        key: "sendTotalTimeInView",
        value: function e() {
          (this.updateViewTime(),
            this.totalViewTime > 0 &&
              this.eventSender.sendEvent(R.TOTAL_VIEW, {
                totalViewTime: this.totalViewTime,
                visibilityRatio: this.hasViewEvent
                  ? this.visibilityThreshold
                  : N.VISIBILITY_THRESHOLD,
              }));
        },
      },
      {
        key: "fallbackTracking",
        value: function e() {
          var t = this;
          var n = function e() {
            var n;
            if (t.adElement) {
              var i = t.adElement.getBoundingClientRect();
              var r =
                window.innerHeight || document.documentElement.clientHeight;
              var a = Math.min(i.bottom / r, (r - i.top) / r, 1);
              var o = t.isVisible;
              ((t.currentVisibilityRatio = a),
                (t.isVisible = a >= t.visibilityThreshold));
              var s =
                "video" === t.mediaType
                  ? null === (n = t.getAdCreative()) || void 0 === n
                    ? void 0
                    : n.querySelector("video")
                  : null;
              t.isVisible && !o
                ? (t.viewStartTime ||
                    ((t.viewStartTime = performance.now()),
                    t.startVisibilityCheck()),
                  s &&
                    !t.hasEnded &&
                    ((s.currentTime = t.lastPausedTime),
                    s.play().catch(function (e) {
                      return t.sdk.logger.error(
                        "Video play failed for "
                          .concat(t.adElementId, ": ")
                          .concat(e.message),
                      );
                    }),
                    t.playbackStartTime ||
                      (t.playbackStartTime = performance.now())))
                : !t.isVisible &&
                  o &&
                  (t.updateViewTime(),
                  t.stopVisibilityCheck(),
                  s &&
                    !t.hasEnded &&
                    ((t.lastPausedTime = s.currentTime),
                    s.pause(),
                    t.updatePlaybackTime()));
            }
          };
          (window.addEventListener("scroll", n),
            window.addEventListener("resize", n));
        },
      },
      {
        key: "getAdCreative",
        value: function e() {
          if (!this.adElement) return null;
          if ("iframe" === this.adElement.tagName.toLowerCase()) {
            var t = this.adElement;
            try {
              if (t.contentDocument) {
                var n = t.contentDocument.querySelector(".adgeist-ad");
                return n || t.contentDocument.body || null;
              }
            } catch (r) {
              this.sdk.logger.log(
                "Cannot access iframe content (cross-origin): ".concat(
                  this.adElementId,
                ),
              );
            }
            return t;
          }
          var i = this.adElement.querySelector(".adgeist-ad");
          return i || this.adElement;
        },
      },
      {
        key: "destroy",
        value: function e() {
          (this.observer &&
            this.adElement &&
            (this.observer.unobserve(this.adElement), (this.observer = null)),
            this.resizeObserver &&
              (this.resizeObserver.disconnect(), (this.resizeObserver = null)),
            this.stopVisibilityCheck(),
            this.updateViewTime(),
            this.updateHoverTime(),
            this.sendTotalTimeInView(),
            this.sendHoverData(),
            "video" !== this.mediaType ||
              this.hasEnded ||
              this.sendVideoPlaybackData());
        },
      },
    ]);
  })();
  var F = "adcard-v2-styles";
  var B = "banner-card-styles";
  var z = "companion-card-styles";
  var W =
    "\n    html, body { margin: 0; padding: 0; width: 100%; height: 100%; font-family: system-ui, -apple-system, sans-serif; }\n";
  var q =
    "\n    .card-container {\n      position: relative;\n      container-type: size;\n      container-name: adgeist-card;\n      max-height: 900px;\n      max-width: 1200px;\n      overflow: hidden;\n      outline: 1px solid #E0E0E0;\n      background-color: #FFFFFF;\n      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);\n      box-sizing: border-box;\n    }\n    .adgeist-title-text {\n      margin: 0;\n      color: #000;\n      word-break: break-word;\n    }\n    .adgeist-description-text {\n      margin: 0;\n      color: #4B5563;\n      word-break: break-word;\n    }\n    .adgeist-name-text {\n      margin: 0;\n      color: #9CA3AF;\n    }\n    .cta-button {\n      background: #85C896;\n      color: rgba(29, 29, 29, 1);\n      border-radius: 9999px;\n      padding: 6px 16px;\n      font-weight: 500;\n      text-decoration: none;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      white-space: nowrap;\n      box-shadow:\n        inset 0 0 2px -2px #ACFFB1,\n        inset 8px 3px 15px 0 #6FC974,\n        inset -4px -4px 13px -5px rgba(51,51,51,0.74),\n        inset 4px 0 4px 0 rgba(38,100,42,0.68);\n      transition: transform .2s;\n    }\n    .cta-button:hover { transform: scale(1.01); }\n";
  var G =
    "\n      .banner-adgeist-card {\n        container-type: size;\n        container-name: banner-ad;\n        max-width: 1200px;\n        min-width: 240px;\n        min-height: 50px;\n        max-height: 900px;\n        overflow: hidden;\n        outline: 1px solid #e0e0e0;\n        background-color: #d5d4d4ff;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .adgeist-media {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      .adgeist-media img,\n      .adgeist-media video {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        display: block;\n      }\n\n      .mute-button { cursor: pointer; transition: opacity 0.2s; }\n      .mute-button:hover { opacity: 0.8; }\n  ";
  var K =
    "\n  .companion-ad-container {\n      display:flex;\n      position: relative;\n      flex-direction: column;\n      outline: 1px solid #E0E0E0;\n      background-color: #FFFFFF;\n      width:100%;\n      height:max-content;\n      max-width: 560px;\n      min-width: 320px;\n      min-height: 180px;\n      max-height: 470px;\n      overflow: hidden;\n      text-decoration: none;\n      color: inherit;\n  }\n  .cta-button {\n      background: #85C896;\n      color: rgba(29, 29, 29, 1);\n      border-radius: 9999px;\n      padding: 6px 16px;\n      font-weight: 500;\n      text-decoration: none;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      white-space: nowrap;\n      box-shadow:\n          inset 0 0 2px -2px #ACFFB1,\n          inset 8px 3px 15px 0 #6FC974,\n          inset -4px -4px 13px -5px rgba(51,51,51,0.74),\n          inset 4px 0 4px 0 rgba(38,100,42,0.68);\n      transition: transform .2s;\n  }\n  .cta-button:hover { transform: scale(1.01); }\n  .adgeist-title-text {\n    margin: 0;\n    color: #000;\n    word-break: break-word;\n  }\n  .adgeist-description-text {\n    margin: 0;\n    color: #4B5563;\n    word-break: break-word;\n  }\n";
  function Y(e) {
    return e ? (/^https?:\/\//i.test(e) ? e : "https://" + e) : "";
  }
  function J(e, t) {
    var n = e / t;
    return t > 450 && e > 450
      ? null
      : t > e
        ? "layout-4rows "
        : n <= 1.4
          ? "layout-3rows"
          : n <= 2
            ? "layout-2rows"
            : n <= 3.3
              ? "layout-2row-2col"
              : "layout-1row";
  }
  var Q = (function () {
    function e() {
      var t;
      var n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (s(this, e),
        (this.logger = { log: console.log }),
        (this.adElementId = n.adElementId || ""),
        (this.title = n.title || "Headline 25 characters"),
        (this.description =
          n.description ||
          "Body text with 50 characters of describing the advertisement."),
        (this.name = n.name || "-"),
        (this.ctaUrl = n.ctaUrl || "https://www.example.com"),
        (this.type = n.type || "image"),
        (this.isResponsive =
          null !== (t = n.isResponsive) && void 0 !== t && t),
        (this.responsiveType = n.responsiveType || "Square"),
        (this.width = parseInt(String(n.width || 300))),
        (this.height = parseInt(String(n.height || 300))),
        (this.appliedClass = J(this.width, this.height)),
        (this.adspaceType = n.adspaceType || "banner"),
        (this.media = n.media || []),
        (this.altText = n.altText || ""));
    }
    return c(e, [
      {
        key: "renderHtml",
        value: function e() {
          var t = {
            adElementId: this.adElementId,
            title: this.title,
            description: this.description,
            name: this.name,
            ctaUrl: this.ctaUrl,
            type: this.type,
            isResponsive: this.isResponsive,
            responsiveType: this.responsiveType,
            width: this.width,
            height: this.height,
            adspaceType: this.adspaceType,
            media: this.media,
            altText: this.altText,
          };
          if ("banner" === this.adspaceType) {
            var n = new X(t);
            return n.renderBannerHtml();
          }
          if ("display" === this.adspaceType) {
            var i = new Z(t);
            return i.renderDisplayHtml();
          }
          if ("companion" === this.adspaceType) {
            var r = new $(t);
            return r.renderCompanionHtml();
          }
          return "";
        },
      },
      {
        key: "mount",
        value: function e(t) {
          if (!t) throw new Error("AdCard: mount target element not found");
          t.innerHTML = this.renderHtml();
        },
      },
      {
        key: "getAudioScript",
        value: function e() {
          return "<script>\n      (function() {\n        var v = document.getElementById('adgeist-video');\n        if(!v) return;\n        window.addEventListener('message', function(e) {\n          if(e.data.type === 'adgeist_mute' && e.data.mute) v.muted = true;\n        });\n        function notify() {\n          if(!v.muted) {\n            window.parent.postMessage({\n              type: 'adgeist_mute_event',\n              adElementId: '".concat(
            this.adElementId,
            "',\n              muted: false\n            }, '*');\n          }\n        }\n        v.addEventListener('volumechange', notify);\n        v.addEventListener('play', notify);\n      })();\n    <\/script>",
          );
        },
      },
    ]);
  })();
  var X = (function (e) {
    function t() {
      var e;
      var n;
      var i =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (
        s(this, t),
        (n = o(this, t, [i])),
        (n.isResponsive = null === (e = i.isResponsive) || void 0 === e || e),
        (n.media = i.media || []),
        (n.ctaUrl = i.ctaUrl || "#"),
        (n.adElementId = i.adElementId || ""),
        (n.altText = i.altText || "Banner Image"),
        n
      );
    }
    return (
      p(t, e),
      c(t, [
        {
          key: "renderBannerHtml",
          value: function e() {
            var t = this.isResponsive ? "100%" : this.width + "px";
            var n = this.isResponsive ? "100%" : this.height + "px";
            var i = this.media[0];
            return '\n        <style id="'
              .concat(B, '">')
              .concat(W)
              .concat(G, '</style>\n        <a href="')
              .concat(
                Y(this.ctaUrl),
                '" target="_blank" id="adgeist-card" class="banner-adgeist-card" style="width:',
              )
              .concat(t, ";height:")
              .concat(
                n,
                ';">\n          <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;" role="img" aria-label="Advertisement">AD</span>\n\n          <div class="adgeist-media adgeist-ad">\n             ',
              )
              .concat(
                "video" === (null == i ? void 0 : i.type)
                  ? '\n                  <video\n                    id="adgeist-video"\n                    class="media"\n                    poster="'
                      .concat(
                        (null == i ? void 0 : i.thumbnailUrl) || "",
                        '" \n                    autoplay muted loop\n                    playsinline\n                    webkit-playsinline\n                    width="',
                      )
                      .concat(
                        (null == i ? void 0 : i.width) || "100%",
                        '"\n                    height="',
                      )
                      .concat(
                        (null == i ? void 0 : i.height) || "100%",
                        "\"\n                    style=\"object-fit: contain;\" \n                    onloadeddata=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                                  if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n                    preload=\"auto\"\n                    aria-label=\"",
                      )
                      .concat(
                        this.altText,
                        '"\n                  >\n                      <source src="',
                      )
                      .concat(
                        (null == i ? void 0 : i.src) || "",
                        '" type="video/mp4">\n                  </video>\n                  ',
                      )
                  : '\n                <img\n                  class="media"\n                  src="'
                      .concat(
                        (null == i ? void 0 : i.src) || "",
                        '"\n                  fallback="',
                      )
                      .concat(
                        (null == i ? void 0 : i.thumbnailUrl) || "",
                        '"\n                  alt="',
                      )
                      .concat(this.altText, '"\n                  aria-label="')
                      .concat(
                        this.altText,
                        '"\n                  loading="eager"\n                  width="',
                      )
                      .concat(
                        null == i ? void 0 : i.width,
                        '"\n                  height="',
                      )
                      .concat(
                        null == i ? void 0 : i.height,
                        '"\n                  type="',
                      )
                      .concat(
                        (null == i ? void 0 : i.mimeType) || "image/*",
                        "\"\n                  onload=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                          if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n                />\n              ",
                      ),
                "\n          </div>\n        </a>      ",
              );
          },
        },
      ])
    );
  })(Q);
  var Z = (function (e) {
    function t() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (s(this, t), o(this, t, [e]));
    }
    return (
      p(t, e),
      c(t, [
        {
          key: "estimateTextHeight",
          value: function e(t, n, i, r) {
            var a = n;
            var o = 0.6 * a * (i ? 1.1 : 1);
            var s = t * o;
            var l = Math.max(1, Math.ceil(s / r));
            var c = 1.4 * a;
            return l * c;
          },
        },
        {
          key: "getLayoutConfig",
          value: function e() {
            var t = this.width;
            var n = this.height;
            var i = 1.91;
            var r = t / i;
            var a = n - r;
            var o = 40;
            var s = a >= o;
            if (s) {
              var l = 0.35 * n;
              return (
                a < l && (r = n - l),
                {
                  type: "stacked",
                  imageHeight: r,
                  imageWidth: t,
                  contentHeight: a,
                  flexDirection: "column",
                }
              );
            }
            var c = n;
            var d = c * i;
            if (n < 70) {
              var u = 0.2 * t;
              d = Math.min(d, u);
            }
            var v = 110;
            var p = t - v;
            var h = 0.45 * t;
            return (
              t - d < h && (p = t - h),
              d > p && ((d = Math.max(0, p)), (c = n)),
              {
                type: "side",
                imageHeight: c,
                imageWidth: d,
                contentHeight: n,
                flexDirection: "row",
              }
            );
          },
        },
        {
          key: "calculateLayoutDetails",
          value: function e(t) {
            var n = this;
            var i = this.width;
            var r = this.height;
            var a = "stacked" === t.type;
            var o = a ? r - t.imageHeight : r;
            var s = a ? i : i - t.imageWidth;
            var l = r < 150 ? 16 : r < 350 ? 20 : 32;
            var c = 4;
            var d = i < 200 ? 16 : 32;
            r < 60 && ((l = 8), (c = 2));
            var u = !a && s > 480;
            var v = !u && r < 90;
            var p = Math.max(10, s - d);
            var h = 40;
            var g = 100;
            v
              ? (p -= g)
              : u
                ? (p = (s - d - 16) / 2)
                : r < 90 && !a && (p = (s - d - 32) / 2);
            var f = 16;
            var m = 14;
            var y = o - l;
            var b = function e(t, i, r) {
              var a = 0;
              var o = 0;
              var s = 0;
              if (
                (t && (o = n.estimateTextHeight(n.title.length, f, !0, p)),
                i && (s = n.estimateTextHeight(n.description.length, m, !1, p)),
                u)
              ) {
                var l = t ? o + c : 0;
                var d = i ? s : 0;
                a = Math.max(l, d);
              } else
                (t && (a += o),
                  i && (a += s),
                  t && i && (a += c),
                  r && !v && (a += 16 + h));
              var g = 1;
              if (a > 0) {
                var b = y / a;
                g = Math.sqrt(b);
              }
              var w = p / 7 / f;
              var k = Math.min(2.5, w);
              g = Math.max(0.1, Math.min(k, g));
              var x = g;
              var T = !1;
              var E = 10;
              for (; E >= 0; ) {
                var S = Math.max(14, f * x);
                var I = Math.max(12, m * x);
                var A = 0;
                var C = 0;
                (t && (A = n.estimateTextHeight(n.title.length, S, !0, p)),
                  i &&
                    (C = n.estimateTextHeight(n.description.length, I, !1, p)));
                var M = 0;
                if (u) {
                  var P = t ? A + c : 0;
                  var O = i ? C : 0;
                  P <= y && O <= y && (T = !0);
                } else {
                  if (
                    (t && (M += A), i && (M += C), t && i && (M += c), r && !v)
                  ) {
                    var D = Math.max(12, 14 * x);
                    var _ = 1.2 * D + 12;
                    M += 16 + _;
                  }
                  M <= y && (T = !0);
                }
                if (T) break;
                ((x *= 0.9), E--);
              }
              return {
                fits: T,
                scale: x,
                showTitle: t,
                showBody: i,
                showCTA: r,
              };
            };
            var k = [
              { t: !0, d: !0, c: !0 },
              { t: !0, d: !0, c: !1 },
              { t: !0, d: !1, c: !1 },
              { t: !0, d: !1, c: !0 },
            ];
            var x = null;
            for (var T = 0, E = k; T < E.length; T++) {
              var S = E[T];
              if (!(S.c && v && o < h)) {
                var I = b(S.t, S.d, S.c);
                if (I.fits) {
                  var A = S.d && !S.c;
                  var C = A ? 0.35 : 0.75;
                  if (I.scale >= C) {
                    x = I;
                    break;
                  }
                  (!x || I.scale > x.scale) && (x = I);
                }
              }
            }
            return (
              x || (x = b(!0, !1, !1)),
              w(
                w({}, t),
                {},
                {
                  fontSizeScale: x.scale,
                  isHorizontalContent: v,
                  isSplitContent: u,
                  paddingY: l / 2,
                  fontSizes: {
                    title: Math.max(14, f * x.scale),
                    body: Math.max(12, m * x.scale),
                  },
                  visible: {
                    title: x.showTitle,
                    description: x.showBody,
                    cta: x.showCTA,
                  },
                },
              )
            );
          },
        },
        {
          key: "renderContentHtml",
          value: function e(t) {
            var n = t.fontSizes,
              i = t.visible,
              r = t.type,
              a = t.isHorizontalContent,
              o = t.isSplitContent,
              s = t.paddingY;
            var l = "stacked" === r;
            var c = i.title
              ? "font-size:".concat(
                  n.title,
                  "px;line-height:1.2;margin-bottom:4px;font-weight:700;",
                )
              : "display:none;";
            var d = i.description
              ? "font-size:".concat(
                  n.body,
                  "px;line-height:1.35;margin-bottom:4px;opacity:0.8;",
                )
              : "display:none;";
            var u = i.cta
              ? "font-size:".concat(Math.max(12, 14 * t.fontSizeScale), "px;")
              : "display:none;";
            if (o)
              return '\n            <div class="adgeist-content-container" style="flex:1;display:flex;flex-direction:row;align-items:center;padding:'
                .concat(
                  s,
                  'px 16px;overflow:visible;justify-content:center;">\n                <div style="display:flex;flex-direction:column;justify-content:center;flex:1;padding-right:16px;text-align:left;height:100%;overflow:visible;">\n                    <div class="adgeist-title-text" style="',
                )
                .concat(c, '">')
                .concat(
                  this.title,
                  '</div>\n                </div>\n                <div style="display:flex;flex-direction:column;justify-content:center;flex:2;text-align:left;height:100%;overflow:visible;">\n                    <div class="adgeist-description-text" style="',
                )
                .concat(d, '">')
                .concat(
                  this.description,
                  "</div>\n                </div>\n            </div>\n        ",
                );
            var v = a ? "row" : "column";
            var p = l
              ? "align-items:center;text-align:center;"
              : "align-items:flex-start;text-align:left;";
            var h = a
              ? "align-items:center;justify-content:space-between;text-align:left;"
              : l
                ? "align-items:center;justify-content:space-around;"
                : "align-items:center;justify-content:center;";
            var g = a ? "margin-left:16px;" : "margin-top:16px;";
            var f = a
              ? "width:100%;justify-content:center;"
              : l
                ? "justify-content:center;width:100%;"
                : "width:100%;";
            return '\n        <div class="adgeist-content-container" style="flex:1;display:flex;flex-direction:'
              .concat(v, ";")
              .concat(h, "padding:")
              .concat(
                s,
                'px 16px;overflow:visible;">\n            <div style="display:flex;flex-direction:column;',
              )
              .concat(f)
              .concat(
                p,
                'overflow:visible;">\n                <div class="adgeist-title-text" style="',
              )
              .concat(c, '">')
              .concat(
                this.title,
                '</div>\n                <div class="adgeist-description-text" style="',
              )
              .concat(d, '">')
              .concat(
                this.description,
                '</div>\n            </div>\n            <div class="cta-button" style="',
              )
              .concat(u)
              .concat(g, 'flex-shrink:0;">Open</div>\n        </div>\n      ');
          },
        },
        {
          key: "renderDisplayHtml",
          value: function e() {
            var t, n, i;
            var r = this.getLayoutConfig();
            var a = this.calculateLayoutDetails(r);
            var o =
              "video" ===
              (null === (t = this.media[0]) || void 0 === t ? void 0 : t.type)
                ? '<video\n              id="adgeist-video"\n              poster="'
                    .concat(
                      (null === (n = this.media[0]) || void 0 === n
                        ? void 0
                        : n.thumbnailUrl) || "",
                      "\" \n              autoplay muted loop\n              playsinline\n              webkit-playsinline\n              style=\"width: 100%; height: 100%; object-fit: contain;\" \n              onloadeddata=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                            if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n              preload=\"auto\"\n              aria-label=\"",
                    )
                    .concat(
                      this.altText,
                      '"\n            >\n              <source src="',
                    )
                    .concat(
                      this.media[0].src || "",
                      '" type="video/mp4">\n            </video>',
                    )
                : '<img \n              src="'
                    .concat(this.media[0].src, '"  \n              fallback="')
                    .concat(
                      (null === (i = this.media[0]) || void 0 === i
                        ? void 0
                        : i.thumbnailUrl) || "",
                      '"\n              alt="',
                    )
                    .concat(this.altText, '" \n              aria-label="')
                    .concat(
                      this.altText,
                      "\"\n              style=\"width:100%;height:100%;object-fit:contain;\"\n              onload=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                      if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n            />",
                    );
            return '\n        <style id="'
              .concat(F, '">')
              .concat(W)
              .concat(q, '</style>\n        <a href="')
              .concat(
                Y(this.ctaUrl),
                '" \n        id="adgeist-card"\n        target="_blank" \n        style="text-decoration:none;color:inherit;"\n        >\n          <div class="card-container adgeist-ad"\n          style="width:',
              )
              .concat(this.width, "px;height:")
              .concat(this.height, "px;display:flex;flex-direction:")
              .concat(
                a.flexDirection,
                ';"\n          >\n            <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;" role="img" aria-label="Advertisement">AD</span>\n\n            <div class="image-container" style="width:',
              )
              .concat(a.imageWidth, "px;height:")
              .concat(
                a.imageHeight,
                'px;flex-shrink:0;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#d5d4d4ff;">\n              ',
              )
              .concat(o, "\n            </div>\n            \n            ")
              .concat(
                this.renderContentHtml(a),
                "\n          </div>\n        </a>\n      ",
              );
          },
        },
      ])
    );
  })(Q);
  var $ = (function (e) {
    function t() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (s(this, t), o(this, t, [e]));
    }
    return (
      p(t, e),
      c(
        t,
        [
          {
            key: "getAudioScript",
            value: function e() {
              return "<script>\n      (function() {\n        var v = document.getElementById('adgeist-video');\n        var muteBtn = document.getElementById('adgeist-mute-btn');\n        var iconMuted = document.getElementById('icon-muted');\n        var iconUnmuted = document.getElementById('icon-unmuted');\n\n        // Audio coordination: mute this ad when another ad plays\n        if (v) {\n          window.addEventListener('message', function(e) {\n            if(e.data.type === 'adgeist_mute' && e.data.mute) v.muted = true;\n          });\n          function notify() {\n            if(!v.muted) {\n              window.parent.postMessage({\n                type: 'adgeist_mute_event',\n                adElementId: '".concat(
                this.adElementId,
                "',\n                muted: false\n              }, '*');\n            }\n          }\n          v.addEventListener('volumechange', notify);\n          v.addEventListener('play', notify);\n        }\n\n        // Mute button init \u2014 works in both iframe (srcdoc) and direct DOM context\n        function initMute() {\n          if (!v || !muteBtn || !iconMuted || !iconUnmuted) {\n            setTimeout(initMute, 100);\n            return;\n          }\n          function updateIcon() {\n            if (v.muted) {\n              iconMuted.style.display = 'block';\n              iconUnmuted.style.display = 'none';\n            } else {\n              iconMuted.style.display = 'none';\n              iconUnmuted.style.display = 'block';\n            }\n          }\n          updateIcon();\n          muteBtn.addEventListener('click', function(e) {\n            e.preventDefault();\n            e.stopPropagation();\n            e.stopImmediatePropagation();\n            v.muted = !v.muted;\n            updateIcon();\n            if (!v.muted) {\n              v.play().catch(function() {});\n            }\n          });\n          v.addEventListener('volumechange', updateIcon);\n        }\n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', initMute);\n        } else {\n          initMute();\n        }\n      })();\n    <\/script>",
              );
            },
          },
          {
            key: "renderCompanionHtml",
            value: function e() {
              var t =
                this.media.find(function (e) {
                  var t;
                  return null === (t = e.mimeType) || void 0 === t
                    ? void 0
                    : t.startsWith("video");
                }) || this.media[0];
              var n =
                this.media.find(function (e) {
                  var t;
                  return null === (t = e.mimeType) || void 0 === t
                    ? void 0
                    : t.startsWith("image");
                }) || this.media[1];
              var i = (null == t ? void 0 : t.src) || "";
              var r = (null == t ? void 0 : t.thumbnailUrl) || "";
              var a = (null == n ? void 0 : n.src) || "";
              var o =
                '<img src="https://adserv-scripts.s3.ap-south-1.amazonaws.com/ad-icons/Muted.png" aria-label="Muted" alt="Muted" style="width:100%;height:100%;object-fit:contain;display:block;">';
              var s =
                '<img src="https://adserv-scripts.s3.ap-south-1.amazonaws.com/ad-icons/Unmuted.png" aria-label="Unmuted" alt="Unmuted" style="width:100%;height:100%;object-fit:contain;display:block;">';
              return '\n     <style id="'
                .concat(z, '">')
                .concat(W)
                .concat(K, '</style>\n    <a href="')
                .concat(
                  Y(this.ctaUrl),
                  '" target="_blank" id="adgeist-card" style="text-decoration:none;color:inherit;">\n       <div class="companion-ad-container adgeist-ad">\n          <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:99;place-content:center;display:grid;" role="img" aria-label="Advertisement">AD</span>\n          \n        <div style="position:relative; width:100%; aspect-ratio:16/9;">\n           <div \n           role="button"\n           id="adgeist-mute-btn" \n           style="position:absolute; top:0; left:0; z-index:20; width:30px; height:30px; display:flex; justify-content:center; align-items:center; cursor:pointer; scale:1.2;"\n                onclick="event.preventDefault(); event.stopPropagation();">\n              <div id="icon-muted" style="display:block; width:100%; height:100%;">',
                )
                .concat(
                  o,
                  '</div>\n              <div id="icon-unmuted" style="display:none; width:100%; height:100%;">',
                )
                .concat(
                  s,
                  '</div>\n           </div>\n\n          <video\n            id="adgeist-video"\n            poster="',
                )
                .concat(
                  r,
                  "\" \n            autoplay loop\n            muted\n            playsinline\n            webkit-playsinline\n            style=\"width: 100%; height: 100%; display: block; object-fit: cover;\" \n            onloadeddata=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                          if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                          if(window.CompanionAdCard) { window.CompanionAdCard.initMuteButton(this.closest('.companion-ad-container')); }\"\n            controlsList=\"nodownload\"\n            disablePictureInPicture\n            preload=\"auto\"\n            aria-label=\"",
                )
                .concat(
                  this.altText,
                  '"\n          >\n            <source src="',
                )
                .concat(
                  i,
                  '" type="video/mp4">\n          </video>\n        </div>\n        \n        <img \n          src="',
                )
                .concat(a, '"  \n          aria-label="')
                .concat(this.altText, '"\n          alt="')
                .concat(
                  this.altText,
                  "\" \n          style=\"width: 100%; aspect-ratio: 16/3; display: block; background-color: #d5d4d4ff;\"\n          onload=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                  if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n        />\n        \n        <div class='companion-meta' style='display:flex; flex-direction: row; height: max-content; padding:8px 12px; font-size:12px; color:#666; text-align:center; align-items:center; gap: 8px;'>\n            <div class='adgeist-name-text' style='display:flex;flex-direction:column;flex:1; text-align:start; justify-content:center;'> \n                <span class=\"adgeist-title-text\" style=\"font-size: 14px; margin-bottom: 2px; line-height: 1.2;\">",
                )
                .concat(
                  this.title,
                  '</span>\n                <span class="adgeist-description-text" style="font-size: 12px; line-height: 1.3;">',
                )
                .concat(
                  this.description,
                  '</span>\n            </div>\n            <div class="cta-button" style="flex-shrink:0;">Open</div>\n        </div>\n      </div>\n    </a>\n    ',
                )
                .concat(this.getAudioScript());
            },
          },
        ],
        [
          {
            key: "initMuteButton",
            value: function e(n) {
              var i = n || document;
              var r = i.querySelector("#adgeist-video");
              var a = i.querySelector("#adgeist-mute-btn");
              var o = i.querySelector("#icon-muted");
              var s = i.querySelector("#icon-unmuted");
              if (!(r && a && o && s))
                return (
                  void 0,
                  setTimeout(function () {
                    return t.initMuteButton(n);
                  }, 100),
                  void 0
                );
              function l() {
                r &&
                  o &&
                  s &&
                  (r.muted
                    ? ((o.style.display = "block"), (s.style.display = "none"))
                    : ((o.style.display = "none"),
                      (s.style.display = "block")));
              }
              (l(),
                a.addEventListener("click", function (e) {
                  (void 0,
                    r &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      e.stopImmediatePropagation(),
                      (r.muted = !r.muted),
                      l(),
                      r.muted ||
                        r
                          .play()
                          .then(function () {})
                          .catch(function (e) {
                            void 0;
                          })));
                }),
                r.addEventListener("volumechange", function () {
                  (void 0, r && l());
                }));
            },
          },
        ],
      )
    );
  })(Q);
  var ee = (function (e) {
    function t(e) {
      var n;
      return (
        s(this, t),
        (n = o(this, t, [e])),
        (n.adServeUrl = e.adServeUrl),
        (n.adTrackingUrl = e.adTrackingUrl),
        n
      );
    }
    return (
      p(t, e),
      c(t, [
        {
          key: "loadAds",
          value: (function () {
            var e = a(
              x().m(function e() {
                var t,
                  n,
                  i,
                  r,
                  a,
                  o,
                  s,
                  l,
                  c,
                  u,
                  v,
                  p,
                  h,
                  g,
                  f,
                  m,
                  y,
                  b,
                  k,
                  T,
                  E = arguments,
                  S,
                  I;
                return x().w(
                  function (e) {
                    for (; 1; )
                      switch ((e.p = e.n)) {
                        case 0:
                          ((t = E.length > 0 && void 0 !== E[0] ? E[0] : null),
                            (n =
                              t || document.querySelectorAll(".adsbyadgeist")),
                            (i = []),
                            (r = d(n)),
                            (e.p = 1),
                            r.s());
                        case 2:
                          if ((a = r.n()).done) {
                            e.n = 7;
                            break;
                          }
                          if (
                            ((o = a.value),
                            (s = this.getAdSlotAttributes(o)),
                            s)
                          ) {
                            e.n = 3;
                            break;
                          }
                          return e.a(3, 6);
                        case 3:
                          if (((l = s.adSpaceId), l)) {
                            e.n = 4;
                            break;
                          }
                          return e.a(3, 6);
                        case 4:
                          if (!this.sdk.seenAdSpaces.has(l)) {
                            e.n = 5;
                            break;
                          }
                          return (
                            this.sdk.logger.error(
                              "Duplicate ad space detected (already seen), skipping: ".concat(
                                l,
                              ),
                            ),
                            e.a(3, 6)
                          );
                        case 5:
                          (i.push(o), this.sdk.seenAdSpaces.add(l));
                        case 6:
                          e.n = 2;
                          break;
                        case 7:
                          e.n = 9;
                          break;
                        case 8:
                          ((e.p = 8), (S = e.v), r.e(S));
                        case 9:
                          return ((e.p = 9), r.f(), e.f(9));
                        case 10:
                          if (0 !== i.length) {
                            e.n = 11;
                            break;
                          }
                          return (
                            this.sdk.logger.log(
                              "No valid unique ad slots to load",
                            ),
                            e.a(2)
                          );
                        case 11:
                          ((c = 0), (u = i));
                        case 12:
                          if (!(c < u.length)) {
                            e.n = 21;
                            break;
                          }
                          if (
                            ((v = u[c]),
                            (e.p = 13),
                            (g = this.sdk.publisherId),
                            (f = this.getAdSlotAttributes(v)),
                            f)
                          ) {
                            e.n = 14;
                            break;
                          }
                          return e.a(3, 20);
                        case 14:
                          if (
                            ((m = f.adSpaceId), (y = f.buyType), m && g && y)
                          ) {
                            e.n = 15;
                            break;
                          }
                          return (
                            this.sdk.logger.error(
                              "Ad loading error for slot: ".concat(
                                m,
                                " - Missing required attributes for ad slot",
                              ),
                            ),
                            e.a(3, 20)
                          );
                        case 15:
                          return (
                            (e.n = 16),
                            fetch("".concat(this.adServeUrl, "/v2/dsp/ad"), {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                platform: "WEB",
                                isTest: this.sdk.isTest,
                                companyId: g,
                                adSpaceId: m,
                                userAgent: navigator.userAgent,
                                timeZone: _(),
                                requestedAt: new Date().toISOString(),
                                deviceFingerPrint:
                                  (null === (p = this.sdk.fingerprint) ||
                                  void 0 === p
                                    ? void 0
                                    : p.visitorId) || void 0,
                                fingerPrintType:
                                  null !== (h = this.sdk.fingerprint) &&
                                  void 0 !== h &&
                                  h.version
                                    ? "signalHash" +
                                      this.sdk.fingerprint.version
                                    : void 0,
                                device: w({}, this.sdk.deviceInfo),
                              }),
                            })
                          );
                        case 16:
                          if (((b = e.v), b.ok)) {
                            e.n = 17;
                            break;
                          }
                          throw new Error("HTTP error: ".concat(b.status));
                        case 17:
                          return ((e.n = 18), b.json());
                        case 18:
                          ((k = e.v), k && this.renderAd(v, k), (e.n = 20));
                          break;
                        case 19:
                          ((e.p = 19),
                            (I = e.v),
                            (T = I instanceof Error ? I.message : String(I)),
                            this.sdk.logger.error(
                              "Ad loading error for slot: ".concat(T),
                            ));
                        case 20:
                          (c++, (e.n = 12));
                          break;
                        case 21:
                          return e.a(2);
                      }
                  },
                  e,
                  this,
                  [
                    [13, 19],
                    [1, 8, 9, 10],
                  ],
                );
              }),
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: "renderAd",
          value: function e(t, n) {
            var i,
              r,
              a,
              o,
              s,
              l,
              c,
              u,
              v,
              p,
              h,
              g,
              f,
              m = this;
            var y = this.getAdSlotAttributes(t);
            if (!y)
              return (
                this.sdk.logger.log("Could not get ad slot attributes"),
                void 0
              );
            var b = y.adSpaceId,
              w = y.buyType,
              k = y.isAdspaceResponsive,
              x = y.adType;
            var T = Number(
              (null == n ||
              null === (i = n.displayOptions) ||
              void 0 === i ||
              null === (i = i.dimensions) ||
              void 0 === i
                ? void 0
                : i.width) || 0,
            );
            var E = Number(
              (null == n ||
              null === (r = n.displayOptions) ||
              void 0 === r ||
              null === (r = r.dimensions) ||
              void 0 === r
                ? void 0
                : r.height) || 0,
            );
            var S = n;
            if (
              null == n ||
              null === (a = n.creativesV1) ||
              void 0 === a ||
              !a[0]
            )
              return (this.sdk.logger.log("Invalid ad data"), void 0);
            var A = S;
            var C = function e(t) {
              if (!t) return t;
              var n = t;
              return (
                t.startsWith("www.")
                  ? (n = "https://".concat(t))
                  : t.match(/^[a-zA-Z]+:\/\//) || (n = "https://".concat(t)),
                n
              );
            };
            var M = {
              clickUrl: C(
                null == A || null === (o = A.creativesV1) || void 0 === o
                  ? void 0
                  : o[0].ctaUrl,
              ),
              title:
                null == A ||
                null === (s = A.creativesV1) ||
                void 0 === s ||
                null === (s = s[0]) ||
                void 0 === s
                  ? void 0
                  : s.title,
              description:
                null == A ||
                null === (l = A.creativesV1) ||
                void 0 === l ||
                null === (l = l[0]) ||
                void 0 === l
                  ? void 0
                  : l.description,
              altText:
                (null == A ||
                null === (c = A.creativesV1) ||
                void 0 === c ||
                null === (c = c[0]) ||
                void 0 === c
                  ? void 0
                  : c.altText) || "",
              scriptUrl: null == A ? void 0 : A.scriptUrl,
              brandName:
                (null == A || null === (u = A.advertiser) || void 0 === u
                  ? void 0
                  : u.name) || "",
              creativeType:
                (null == A ||
                null === (v = A.creativesV1) ||
                void 0 === v ||
                null === (v = v[0].primary) ||
                void 0 === v
                  ? void 0
                  : v.type) || "image",
              primaryCreative: {
                src:
                  null == A ||
                  null === (p = A.creativesV1) ||
                  void 0 === p ||
                  null === (p = p[0].primary) ||
                  void 0 === p
                    ? void 0
                    : p.fileUrl,
                thumbnailUrl:
                  null == A ||
                  null === (h = A.creativesV1) ||
                  void 0 === h ||
                  null === (h = h[0].primary) ||
                  void 0 === h
                    ? void 0
                    : h.thumbnailUrl,
                type:
                  null == A ||
                  null === (g = A.creativesV1) ||
                  void 0 === g ||
                  null === (g = g[0].primary) ||
                  void 0 === g
                    ? void 0
                    : g.type,
              },
              companionCreative:
                (null == A ||
                null === (f = A.creativesV1) ||
                void 0 === f ||
                null === (f = f[0]) ||
                void 0 === f ||
                null === (f = f.companions) ||
                void 0 === f
                  ? void 0
                  : f.map(function (e) {
                      return {
                        src: e.fileUrl,
                        thumbnailUrl: e.thumbnailUrl,
                        type: e.type,
                      };
                    })) || [],
            };
            var P = {
              responseId: A.id || "",
              trackId: A.signature || "",
              campaignId: A.campaignId || "",
              responseGeneratedAt: A.generatedAt || "",
              expiresAt: (null == A ? void 0 : A.expiresAt) || "",
              metaData: A.metaData || "",
            };
            if (!M.clickUrl)
              return (this.sdk.logger.log("Missing or invalid ctaUrl"), void 0);
            var O = L[x];
            var D = "adgeist_ads_iframe_".concat(b);
            var _ = performance.now();
            var R = function e(t, n) {
              if ("banner" === x || "display" === x || "companion" === x) {
                var i = new Q({
                  adElementId: D,
                  title: M.title,
                  description: M.description,
                  altText: M.altText,
                  name: "Brand Name",
                  ctaUrl: M.clickUrl,
                  type: x,
                  isResponsive: k,
                  height: n,
                  width: t,
                  adspaceType: x,
                  media: [M.primaryCreative].concat(I(M.companionCreative)),
                });
                return i.renderHtml();
              }
              return "";
            };
            var N = function e(t, n) {
              var i =
                (T && E && (t < T || n < E)) ||
                t < O.MIN_WIDTH ||
                n < O.MIN_HEIGHT;
              return i;
            };
            if ("richmedia" === x && M.scriptUrl)
              return (
                this.injectScript(M.scriptUrl, function () {
                  return m.sdk.logger.log("Rich media ad loaded");
                }),
                void 0
              );
            if ("banner" !== x && "display" !== x && "companion" !== x)
              return (
                this.sdk.logger.log(
                  "Unsupported slot type or missing scriptUrl: ".concat(x),
                ),
                void 0
              );
            var H = document.createElement("iframe");
            (H.setAttribute("id", D),
              H.setAttribute("frameborder", "0"),
              H.setAttribute("scrolling", "no"),
              (H.style.border = "none"),
              (H.style.minWidth = "".concat(O.MIN_WIDTH, "px")),
              (H.style.minHeight = "".concat(O.MIN_HEIGHT, "px")),
              (t.innerHTML = ""));
            var U = t;
            ((U.style.display = "block"), t.appendChild(H));
            var F = function e(t, n) {
              if (N(t, n))
                return (
                  (H.style.display = "none"),
                  m.sdk.logger.log(
                    "Ad slot too small for "
                      .concat(b, ": ")
                      .concat(Math.round(t), "x")
                      .concat(Math.round(n), " (min: ")
                      .concat(O.MIN_WIDTH, "x")
                      .concat(O.MIN_HEIGHT, "), collapsing ad"),
                  ),
                  void 0
                );
              "none" === H.style.display &&
                ((H.style.display = "block"),
                m.sdk.logger.log(
                  "Ad slot size valid again for "
                    .concat(b, ": ")
                    .concat(Math.round(t), "x")
                    .concat(Math.round(n), ", showing ad"),
                ));
              var i = V(t, n, O),
                r = i.width,
                a = i.height;
              (H.setAttribute("width", r),
                H.setAttribute("height", a),
                (H.style.width = r),
                (H.style.height = a));
              var o = R(r, a);
              o && (H.srcdoc = o);
            };
            var B = t.getBoundingClientRect(),
              z = B.width,
              W = B.height;
            F(z, W);
            var q = 0;
            var G = 100;
            var K = new ResizeObserver(function (e) {
              var n = performance.now();
              if (!(n - q < G)) {
                q = n;
                var i = d(e),
                  r;
                try {
                  for (i.s(); !(r = i.n()).done; ) {
                    var a = r.value;
                    var o = a.contentRect,
                      s = o.width,
                      l = o.height;
                    var c = t.getBoundingClientRect();
                    var u = c.width || s;
                    var v = c.height || l;
                    F(u, v);
                  }
                } catch (p) {
                  i.e(p);
                } finally {
                  i.f();
                }
              }
            });
            (K.observe(t),
              H.addEventListener("load", function () {
                if ("companion" === x)
                  try {
                    var e;
                    var t =
                      null === (e = H.contentWindow) || void 0 === e
                        ? void 0
                        : e.document;
                    var n =
                      null == t ? void 0 : t.getElementById("adgeist-card");
                    if (n) {
                      var i = H.clientHeight;
                      var r = n.scrollHeight;
                      if (i && r > i)
                        return (
                          (H.style.display = "none"),
                          m.sdk.logger.log(
                            "Companion ad overflowed (Content: "
                              .concat(r, " > Iframe: ")
                              .concat(i, "), collapsing."),
                          ),
                          void 0
                        );
                    }
                  } catch (s) {}
                var a = document.querySelector("#".concat(D));
                if (a) {
                  var o = new j(m.sdk, D, b, x, w, _, P, M.creativeType);
                  ((o.resizeObserver = K), m.sdk.adTrackers.set(D, o));
                } else
                  (m.sdk.logger.log("No ad element found for tracking"),
                    K.disconnect());
              }));
          },
        },
        {
          key: "injectScript",
          value: function e(t, n) {
            var i = this;
            var r = ["trusted-domain.com", "another-trusted-domain.com"];
            if (!t.match(new RegExp("^https://(".concat(r.join("|"), ")"))))
              return (
                this.sdk.logger.log("Invalid script URL: ".concat(t)),
                void 0
              );
            var a = document.createElement("script");
            ((a.src = t),
              (a.async = !0),
              (a.onload = n),
              (a.onerror = function () {
                return i.sdk.logger.log("Script load failed: ".concat(t));
              }),
              document.head.appendChild(a));
          },
        },
        {
          key: "getAdSlotAttributes",
          value: function e(t) {
            try {
              return {
                adSpaceId:
                  (null == t ? void 0 : t.getAttribute("data-ad-slot")) || "",
                buyType:
                  (null == t ? void 0 : t.getAttribute("data-buy-type")) || "",
                isAdspaceResponsive:
                  "false" !==
                  (null == t ? void 0 : t.getAttribute("data-responsive")),
                adType:
                  (null == t ? void 0 : t.getAttribute("data-slot-type")) ||
                  "banner",
              };
            } catch (n) {
              return null;
            }
          },
        },
      ])
    );
  })(O);
  var te = (function (e) {
    function t(e) {
      var n;
      return (
        s(this, t),
        (n = o(this, t, [e])),
        (n.observer = null),
        (n.observer = null),
        n
      );
    }
    return (
      p(t, e),
      c(t, [
        {
          key: "observeAdSlots",
          value: function e() {
            var t = this;
            var n = document.querySelector(".ad-container") || document.body;
            ((this.observer = new MutationObserver(function (e) {
              e.forEach(function (e) {
                e.addedNodes.forEach(function (e) {
                  if (e.nodeType === Node.ELEMENT_NODE) {
                    var n = e;
                    (n.classList.contains("adsbyadgeist") &&
                      window.sspAdsQueue.push(n),
                      n.querySelectorAll(".adsbyadgeist").forEach(function (e) {
                        return window.sspAdsQueue.push(e);
                      }),
                      t.processAdQueue());
                  }
                });
              });
            })),
              this.observer.observe(n, { childList: !0, subtree: !0 }),
              n.querySelectorAll(".adsbyadgeist").forEach(function (e) {
                (window.sspAdsQueue.push(e), t.processAdQueue());
              }));
          },
        },
        {
          key: "processAdQueue",
          value: function e() {
            for (; window.sspAdsQueue.length > 0; ) {
              var t = window.sspAdsQueue.shift();
              t && this.sdk.adLoader.loadAds([t]);
            }
          },
        },
      ])
    );
  })(O);
  var ne = (function (e) {
    function t(e) {
      var n;
      return (
        s(this, t),
        (n = o(this, t, [e])),
        (n.stylesInjected = !1),
        (n.consentCookieName = N.CONSENT_COOKIE_NAME),
        n.injectStyles(),
        n
      );
    }
    return (
      p(t, e),
      c(t, [
        {
          key: "injectStyles",
          value: function e() {
            if (
              !this.stylesInjected &&
              !document.getElementById("adgeist-consent-styles")
            ) {
              var t = document.createElement("style");
              ((t.id = "adgeist-consent-styles"),
                (t.textContent =
                  "\n      .adgeist-consent-modal {\n        position: fixed;\n        bottom: 20px;\n        left: 20px;\n        background: #fff;\n        border-radius: 16px;\n        box-shadow: 0 4px 20px rgba(0,0,0,0.15);\n        z-index: 9999;\n        max-width: 680px;\n        width: 90vw;\n        font-family: system-ui, -apple-system, sans-serif;\n      }\n\n      .consent-inner {\n        position: relative;\n        padding: 24px 60px 32px;\n      }\n      \n      .preferences-inner {\n        padding: 24px 20px 28px;\n      }\n\n      .close-btn {\n        position: absolute;\n        top: 2px;\n        right: 5px;\n        background: transparent;\n        border: none;\n        font-size: 32px;\n        font-weight: normal;\n        color: #666;\n        cursor: pointer;\n        padding: 0;\n        width: 36px;\n        height: 36px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .adgeist-consent-modal h2 {\n        font-size: 16px;\n        font-weight: 600;\n        color: #333;\n        margin: 12px 0;\n        text-align: center;\n      }\n\n      .adgeist-consent-modal p {\n        font-size: 13px;\n        color: #666;\n        line-height: 1.5;\n        margin: 0 0 28px;\n        text-align: center;\n      }\n\n      .adgeist-consent-modal p a {\n        color: #0960AD;\n        font-weight: bold;\n        text-decoration: underline;\n      }\n\n      .button-group, .save-row {\n        display: flex;\n        gap: 12px;\n        justify-content: center;\n        flex-wrap: wrap;\n      }\n\n      .btn {\n        padding: 10px 20px;\n        border: none;\n        border-radius: 4px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        min-width: 120px;\n        max-width: 200px;\n        flex: 1 1 auto;\n        white-space: nowrap;\n      }\n\n      .btn-customise {\n        background: #C5C6C8;\n        color: #000;\n        box-shadow:\n          inset 4px  0px  4px    rgba( 77,  77,  77, 0.355),\n          inset -4px -4px 13px   rgba( 51,  51,  51, 0.341), \n          inset 8px   3px 15px   rgba(164, 164, 164, 0.600),\n          inset 0px   0px  2px   rgba(236, 236, 236, 0.600);\n      }\n\n      .btn-essential, .btn-accept-all, .btn-save {\n        background: #63AA75;\n        color: #000;\n        box-shadow:\n          inset 4.26px  0px   4.26px  rgba( 38, 100,  42, 0.267),\n          inset -4.26px -4.26px 13.84px rgba( 51,  51,  51, 0.341),\n          inset 8.51px  3.19px 15.97px rgba(111, 201, 116, 0.400),\n          inset 0px     0px    2.13px  rgba(172, 255, 177, 0.400);\n      }\n\n      .toggles-container {\n        margin-top: 25px;\n      } \n\n      .toggle-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        gap: 20px;\n        margin-bottom: 15px;\n      }\n\n      .toggle-row.last {\n        margin-bottom: 28px;\n      }\n\n      .toggle-info {\n        flex: 1;\n        max-width: 80%;\n      }\n\n      .toggle-info label {\n        font-size: 16px;\n        font-weight: 800;\n        color: #111;\n        display: block;\n        margin-bottom: 6px;\n      }\n\n      .toggle-info p {\n        font-size: 12px;\n        color: #222;\n        margin: 0;\n        line-height: 1.45;\n        text-align: left;\n      }\n\n      .toggle-switch {\n        position: relative;\n        width: 59px;\n        height: 30px;\n        border-radius: 15px;\n        overflow: hidden;\n        border: none;\n        padding: 0;\n        cursor: pointer;\n        background: #e5e7eb;\n        transition: background-color 0.3s ease;\n      }\n\n      .toggle-switch.on {\n        background: #63aa75;\n      }\n\n      .toggle-switch.disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n\n      .toggle-bg {\n        position: absolute;\n        inset: 0;\n        border-radius: 15px;\n        background: inherit;\n        box-shadow: inset 2px 2px 2px rgba(0,0,0,0.25);\n        transition: background-color 300ms ease-in-out;\n      }\n\n      .toggle-knob {\n        position: absolute;\n        top: 3px;\n        left: 3px;\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        transform: translateX(0);\n        transition: transform 300ms cubic-bezier(0.2,0.8,0.2,1);\n        background: linear-gradient(180deg, #f2f2f2 0%, #e8e8e8 100%);\n        box-shadow: \n          0 0.82px 1.15px -0.63px rgba(0,0,0,0.26),\n          0 2.11px 2.95px -1.25px rgba(0,0,0,0.25),\n          0 4.23px 5.92px -1.88px rgba(0,0,0,0.24),\n          0 8.01px 11.21px -2.5px rgba(0,0,0,0.22),\n          0 15.92px 22.29px -3.13px rgba(0,0,0,0.18),\n          0 35px 49px -3.75px rgba(0,0,0,0.09);\n      }\n\n      .toggle-switch.on .toggle-knob {\n        transform: translateX(29px);\n      }\n    "),
                document.head.appendChild(t),
                (this.stylesInjected = !0));
            }
          },
        },
        {
          key: "getUserConsent",
          value: function e() {
            var t = document.cookie.match(
              new RegExp(
                "(^|;\\s*)".concat(this.consentCookieName, "=([^;]*)"),
              ),
            );
            if (!t) return [];
            var n = decodeURIComponent(t[2]);
            var i = n.split(/[+]/);
            return i.map(function (e) {
              return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
            });
          },
        },
        {
          key: "setConsent",
          value: function e(t) {
            var n = encodeURIComponent(t);
            var i = 100 * 365 * 24 * 60 * 60;
            var r = "https:" === location.protocol ? "; Secure" : "";
            document.cookie = ""
              .concat(this.consentCookieName, "=")
              .concat(n, "; Max-Age=")
              .concat(i, "; path=/; SameSite=Lax")
              .concat(r);
          },
        },
        {
          key: "removeElement",
          value: function e(t) {
            var n;
            null === (n = document.getElementById(t)) ||
              void 0 === n ||
              n.remove();
          },
        },
        {
          key: "createModal",
          value: function e(t, n, i) {
            this.removeElement(t);
            var r = document.createElement("div");
            return (
              (r.id = t),
              (r.className = n),
              (r.role = "dialog"),
              (r.ariaModal = "true"),
              (r.innerHTML = i),
              document.body.appendChild(r),
              r
            );
          },
        },
        {
          key: "showConsentBanner",
          value: function e() {
            var t,
              n = this,
              i,
              r,
              a;
            if (!(this.getUserConsent().length > 0)) {
              var o =
                '\n      <div class="consent-inner">\n        <button class="close-btn" aria-label="Close consent banner">\xd7</button>\n        <h2>We Value Your Privacy</h2>\n        <p>\n          adgeist.ai uses cookies and similar technologies to enhance your experience, analyze site traffic, and deliver personalized ads.\n          You can choose to accept all cookies, reject non-essential ones, or manage your preferences.\n          <a href="https://www.adgeist.ai/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>\n        </p>\n        <div class="button-group">\n          <button id="adgeist-consent-customise" class="btn btn-customise">Customise</button>\n          <button id="adgeist-consent-essential" class="btn btn-essential">Only essential</button>\n          <button id="adgeist-consent-accept-all" class="btn btn-accept-all">Accept all</button>\n        </div>\n      </div>\n    ';
              var s = this.createModal(
                "adgeist-consent-banner",
                "adgeist-consent-modal",
                o,
              );
              (null === (t = s.querySelector("#adgeist-consent-accept-all")) ||
                void 0 === t ||
                t.addEventListener("click", function () {
                  (n.setConsent(H.ACCEPTED_ALL),
                    n.removeElement("adgeist-consent-banner"));
                }),
                null === (i = s.querySelector("#adgeist-consent-essential")) ||
                  void 0 === i ||
                  i.addEventListener("click", function () {
                    (n.setConsent(H.ONLY_ESSENTIAL),
                      n.removeElement("adgeist-consent-banner"));
                  }),
                null === (r = s.querySelector("#adgeist-consent-customise")) ||
                  void 0 === r ||
                  r.addEventListener("click", function () {
                    (n.removeElement("adgeist-consent-banner"),
                      n.showManagePreferences());
                  }),
                null === (a = s.querySelector(".close-btn")) ||
                  void 0 === a ||
                  a.addEventListener("click", function () {
                    n.removeElement("adgeist-consent-banner");
                  }));
            }
          },
        },
        {
          key: "showManagePreferences",
          value: function e() {
            var t,
              n = this,
              i;
            var r = [
              {
                id: "essential",
                label: "Essential",
                desc: "These cookies are necessary for Adgeist to operate securely, enable core features like login, and remember your privacy choices.",
                disabled: !0,
                default: !0,
              },
              {
                id: "performance",
                label: "Performance",
                desc: "Used to understand how Adgeist is performing \u2014 helping us improve load times, stability, and overall experience.",
                disabled: !1,
                default: !1,
              },
              {
                id: "advertising",
                label: "Advertising",
                desc: "Allows us to deliver more relevant ads, limit repetition, and measure campaign effectiveness across platforms.",
                disabled: !1,
                default: !1,
              },
              {
                id: "personalization",
                label: "Personalization",
                desc: "Helps tailor your dashboard, suggestions, and content based on your preferences and usage patterns.",
                disabled: !1,
                default: !1,
              },
            ];
            var a = r
              .map(function (e, t) {
                return '\n        <div class="toggle-row'
                  .concat(
                    t === r.length - 1 ? " last" : "",
                    '">\n          <div class="toggle-info">\n            <label>',
                  )
                  .concat(e.label, "</label>\n            <p>")
                  .concat(
                    e.desc,
                    '</p>\n          </div>\n          <button\n            type="button"\n            id="toggle-',
                  )
                  .concat(e.id, '"\n            class="toggle-switch ')
                  .concat(e.default ? "on" : "", " ")
                  .concat(
                    e.disabled ? "disabled" : "",
                    '"\n            role="switch"\n            aria-checked="',
                  )
                  .concat(e.default, '"\n            ')
                  .concat(
                    e.disabled ? "disabled" : "",
                    '\n            aria-label="Toggle ',
                  )
                  .concat(
                    e.label.toLowerCase(),
                    ' cookies"\n          >\n            <span class="toggle-bg"></span>\n            <span class="toggle-knob"></span>\n          </button>\n        </div>\n      ',
                  );
              })
              .join("");
            var o =
              '\n      <div class="preferences-inner">\n        <button class="close-btn" aria-label="Close preferences">\xd7</button>\n        <h2>Manage Preferences</h2>\n        <div class="toggles-container">\n          '.concat(
                a,
                '\n        </div>\n        <div class="save-row">\n          <button id="adgeist-save-preferences" class="btn btn-save">Save preferences</button>\n        </div>\n      </div>\n    ',
              );
            var s = this.createModal(
              "adgeist-manage-preferences",
              "adgeist-consent-modal",
              o,
            );
            (r.forEach(function (e) {
              if (!e.disabled) {
                var t = s.querySelector("#toggle-".concat(e.id));
                null == t ||
                  t.addEventListener("click", function () {
                    var e = t.classList.toggle("on");
                    t.setAttribute("aria-checked", e ? "true" : "false");
                  });
              }
            }),
              null === (t = s.querySelector("#adgeist-save-preferences")) ||
                void 0 === t ||
                t.addEventListener("click", function () {
                  var e;
                  var t = 0;
                  (s.querySelector("#toggle-performance.on") && (t |= 4),
                    s.querySelector("#toggle-advertising.on") && (t |= 2),
                    s.querySelector("#toggle-personalization.on") && (t |= 1));
                  var i = {
                    0: H.ONLY_ESSENTIAL,
                    1: H.PERSONALIZATION,
                    2: H.ADVERTISING,
                    3: H.ADVERTISING_PERSONALIZATION,
                    4: H.PERFORMANCE,
                    5: H.PERFORMANCE_PERSONALIZATION,
                    6: H.PERFORMANCE_ADVERTISING,
                    7: H.ACCEPTED_ALL,
                  };
                  var r =
                    null !== (e = i[t]) && void 0 !== e ? e : H.ONLY_ESSENTIAL;
                  (n.setConsent(r),
                    n.removeElement("adgeist-manage-preferences"));
                }),
              null === (i = s.querySelector(".close-btn")) ||
                void 0 === i ||
                i.addEventListener("click", function () {
                  n.removeElement("adgeist-manage-preferences");
                }));
          },
        },
        {
          key: "updateAdgeistUserConsent",
          value: function e(t) {
            this.setConsent(t);
          },
        },
      ])
    );
  })(O);
  var ie = (function () {
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var n, i, r;
      (s(this, e),
        (this.config = {
          enableConsoleLogging:
            null === (n = t.enableConsoleLogging) || void 0 === n || n,
          enableRemoteLogging:
            null !== (i = t.enableRemoteLogging) && void 0 !== i && i,
          logPrefix:
            null !== (r = t.logPrefix) && void 0 !== r ? r : "[Adgeist]",
        }));
    }
    return c(e, [
      {
        key: "updateConfig",
        value: function e(t) {
          this.config = w(w({}, this.config), t);
        },
      },
      {
        key: "log",
        value: function e(t) {
          this.config.enableConsoleLogging && void 0;
        },
      },
      {
        key: "error",
        value: function e(t, n) {
          (this.config.enableConsoleLogging && void 0,
            this.config.enableRemoteLogging && this.sendToRemoteService(t, n));
        },
      },
      {
        key: "warn",
        value: function e(t) {
          this.config.enableConsoleLogging && void 0;
        },
      },
      { key: "sendToRemoteService", value: function e(t, n) {} },
    ]);
  })();
  var re = [
    { rx: /Electron\/([\d.]+)/i, name: "Electron" },
    { rx: /HeadlessChrome\/([\d.]+)/i, name: "Chrome Headless" },
    { rx: /GSA\/([\d.]+)/i, name: "GSA" },
    { rx: /FxiOS\/([\d.]+)/i, name: "Firefox" },
    { rx: /Firefox\/([\d.]+)/i, name: "Firefox" },
    { rx: /\bfocus\/([\d.]+)/i, name: "Firefox Focus" },
    { rx: /Mobile VR.*Firefox\/([\d.]+)/i, name: "Firefox Reality" },
    { rx: /EdgiOS\/([\d.]+)/i, name: "Edge" },
    { rx: /EdgA\/([\d.]+)/i, name: "Edge" },
    { rx: /Edg\/([\d.]+)/i, name: "Edge" },
    { rx: /Edge\/([\d.]+)/i, name: "Edge" },
    { rx: /Vivaldi\/([\d.]+)/i, name: "Vivaldi" },
    { rx: /Whale\/([\d.]+)/i, name: "Whale" },
    { rx: /SamsungBrowser\/([\d.]+)/i, name: "Samsung Browser" },
    { rx: /MiuiBrowser\/([\d.]+)/i, name: "MIUI Browser" },
    { rx: /Silk\/([\d.]+)/i, name: "Silk" },
    { rx: /Puffin\/([\d.]+)/i, name: "Puffin" },
    { rx: /DuckDuckGo\/([\d.]+)/i, name: "DuckDuckGo" },
    { rx: /OPR\/([\d.]+)/i, name: "Opera" },
    { rx: /\bopt\/([\d.]+)/i, name: "Opera Touch" },
    { rx: /Opera Mini\/([\d.]+)/i, name: "Opera Mini" },
    { rx: /Opera\/([\d.]+)/i, name: "Opera" },
    { rx: /(?:UC?Browser|UCWEB)\/([\d.]+)/i, name: "UC Browser" },
    { rx: /MicroMessenger\/([\d.]+)/i, name: "WeChat" },
    { rx: /YaBrowser\/([\d.]+)/i, name: "Yandex" },
    { rx: /Konqueror\/([\d.]+)/i, name: "Konqueror" },
    { rx: /Trident\/.+rv[: ]([\d.]+)/i, name: "IE" },
    { rx: /MSIE ([\d.]+)/i, name: "IE" },
    { rx: /OculusBrowser\/([\d.]+)/i, name: "Oculus Browser" },
    { rx: /; wv\).*Chrome\/([\d.]+)/i, name: "Chrome WebView" },
    { rx: /Chromium\/([\d.]+)/i, name: "Chromium" },
    { rx: /CriOS\/([\d.]+)/i, name: "Chrome" },
    {
      rx: /Android.+Version\/([\d.]+).*(?:Mobile\s+)?Safari/i,
      name: "Android Browser",
    },
    { rx: /Chrome\/([\d.]+)/i, name: "Chrome" },
    { rx: /Version\/([\d.]+).*Safari\//i, name: "Safari" },
  ];
  function ae(e) {
    var t;
    var n = d(re),
      i;
    try {
      for (n.s(); !(i = n.n()).done; ) {
        var r = i.value;
        var a = r.rx.exec(e);
        if (a)
          return {
            name: r.name,
            version: null !== (t = a[1]) && void 0 !== t ? t : null,
          };
      }
    } catch (o) {
      n.e(o);
    } finally {
      n.f();
    }
    return { name: null, version: null };
  }
  function oe(e) {
    var t =
      /(?:iPhone|iPad|iPod)[^;]*;\s*CPU\s+(?:iPhone\s+)?OS\s+([\d_]+)/i.exec(e);
    if (t) return { name: "iOS", version: t[1].replace(/_/g, ".") };
    var n = /Android\s+([\d.]+)/i.exec(e);
    if (n) return { name: "Android", version: n[1] };
    var i = /Windows (?:Phone(?:\s*OS)?|Mobile)\s*([\d.]*)/i.exec(e);
    if (i) return { name: "Windows Phone", version: i[1] || null };
    var r = /Windows NT\s*([\d.]+)/i.exec(e);
    if (r) return { name: "Windows", version: r[1] };
    var a = /Mac OS X\s*([\d_.]+)/i.exec(e);
    if (a) return { name: "macOS", version: a[1].replace(/_/g, ".") };
    var o = /CrOS\s+\w+\s+([\d.]+)/i.exec(e);
    if (o) return { name: "Chrome OS", version: o[1] };
    var s = /BlackBerry\w*\/([\d.]+)/i.exec(e);
    if (s) return { name: "BlackBerry", version: s[1] };
    var l = /Tizen\/([\d.]+)/i.exec(e);
    if (l) return { name: "Tizen", version: l[1] };
    var c = /KAIOS\/([\d.]+)/i.exec(e);
    if (c) return { name: "KaiOS", version: c[1] };
    var d = /(?:web|hpw)OS\/([\d.]+)/i.exec(e);
    return d
      ? { name: "webOS", version: d[1] }
      : /Linux/i.test(e)
        ? { name: "Linux", version: null }
        : { name: null, version: null };
  }
  function se(e) {
    return /Smart[\s-]?TV/i.test(e) ||
      /\bHbbTV\b/i.test(e) ||
      /Android TV/i.test(e) ||
      /Apple TV/i.test(e) ||
      /\bCrKey\b/i.test(e) ||
      /Roku\b/i.test(e) ||
      /AFT[A-Z]/i.test(e) ||
      /\bNetcast\b/i.test(e) ||
      /\b(?:SMART-TV|SmartTV)\b/i.test(e) ||
      /TV; rv:/i.test(e)
      ? "smarttv"
      : /\bWear\s*OS\b/i.test(e) || /\bwatch\b/i.test(e) || /Glass \d/i.test(e)
        ? "wearable"
        : /PlayStation/i.test(e) ||
            /\bXbox\b/i.test(e) ||
            /\bNintendo\b/i.test(e)
          ? "console"
          : /iPad/i.test(e) ||
              /Android(?!.*Mobile)/i.test(e) ||
              /\b(?:tablet|tab)[;\/]/i.test(e)
            ? "tablet"
            : /(?:iPhone|iPod)/i.test(e) ||
                /Android.*Mobile/i.test(e) ||
                /Mobile.*Firefox/i.test(e) ||
                /CriOS/i.test(e) ||
                /\bMobile\b/i.test(e)
              ? "mobile"
              : null;
  }
  function le(e) {
    return { browser: ae(e), os: oe(e), device: { type: se(e) } };
  }
  function ce(e) {
    var t, n;
    if (!(null == e ? void 0 : e.length)) return { name: null, version: null };
    var i = e.filter(function (e) {
      return !e.brand.includes("Not.A/Brand") && "Chromium" !== e.brand;
    });
    var r =
      null !==
        (n =
          null !== (t = i[0]) && void 0 !== t
            ? t
            : e.find(function (e) {
                return "Chromium" === e.brand;
              })) && void 0 !== n
        ? n
        : null;
    return r
      ? { name: r.brand, version: r.version }
      : { name: null, version: null };
  }
  var de = (function () {
    function e(t) {
      (s(this, e), (this.cachedDeviceInfo = null));
    }
    return c(e, [
      {
        key: "getReportedPPI",
        value: function e() {
          var t = document.createElement("div");
          ((t.style.width = "1in"), document.body.appendChild(t));
          var n = t.offsetWidth;
          document.body.removeChild(t);
          var i = Math.round(n * window.devicePixelRatio);
          return i || 96;
        },
      },
      {
        key: "checkNFC",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        if (((t = "NDEFReader" in window), t)) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2, { NFCsupported: !1, NFCenabled: !1 });
                      case 1:
                        return (
                          (e.p = 1),
                          (e.n = 2),
                          navigator.permissions.query({ name: "nfc" })
                        );
                      case 2:
                        return (
                          (n = e.v),
                          e.a(2, {
                            NFCsupported: !0,
                            NFCenabled: "granted" === n.state,
                          })
                        );
                      case 3:
                        return (
                          (e.p = 3),
                          e.v,
                          e.a(2, { NFCsupported: !0, NFCenabled: !1 })
                        );
                    }
                },
                e,
                null,
                [[1, 3]],
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getHighEntropyData",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        if (
                          ((e.p = 0),
                          (n = navigator),
                          null === (t = n.userAgentData) || void 0 === t
                            ? void 0
                            : t.getHighEntropyValues)
                        ) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2, null);
                      case 1:
                        return (
                          (e.n = 2),
                          n.userAgentData.getHighEntropyValues([
                            "architecture",
                            "model",
                            "platform",
                            "platformVersion",
                            "fullVersionList",
                            "mobile",
                          ])
                        );
                      case 2:
                        return e.a(2, e.v);
                      case 3:
                        return ((e.p = 3), e.v, e.a(2, null));
                    }
                },
                e,
                null,
                [[0, 3]],
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getNetworkType",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n, i, r;
              return x().w(function (e) {
                for (; 1; )
                  switch (e.n) {
                    case 0:
                      if (
                        ((i = navigator),
                        (r =
                          i.connection ||
                          i.mozConnection ||
                          i.webkitConnection),
                        r)
                      ) {
                        e.n = 1;
                        break;
                      }
                      return e.a(2, {
                        type: "Unavailable (browser privacy)",
                        effectiveType: "Unavailable (browser privacy)",
                      });
                    case 1:
                      return e.a(2, {
                        type:
                          (null === (t = r.type) || void 0 === t
                            ? void 0
                            : t.toUpperCase()) ||
                          "Unavailable (browser privacy)",
                        effectiveType:
                          (null === (n = r.effectiveType) || void 0 === n
                            ? void 0
                            : n.toUpperCase()) ||
                          "Unavailable (browser privacy)",
                      });
                  }
              }, e);
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getDeviceInfo",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t,
                n,
                i,
                r,
                a,
                o,
                s,
                l,
                c,
                d,
                u,
                v,
                p,
                h,
                g,
                f,
                m,
                y,
                b,
                w,
                k,
                T,
                E,
                I,
                A,
                C,
                M;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch (e.n) {
                      case 0:
                        if (!this.cachedDeviceInfo) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2, this.cachedDeviceInfo);
                      case 1:
                        return (
                          (h = le(navigator.userAgent)),
                          (e.n = 2),
                          Promise.all([
                            this.getHighEntropyData(),
                            this.checkNFC().catch(function () {
                              return null;
                            }),
                          ])
                        );
                      case 2:
                        return (
                          (g = e.v),
                          (f = S(g, 2)),
                          (m = f[0]),
                          (y = f[1]),
                          (b =
                            null !==
                              (t = null == y ? void 0 : y.NFCsupported) &&
                            void 0 !== t &&
                            t),
                          (w =
                            null !== (n = null == y ? void 0 : y.NFCenabled) &&
                            void 0 !== n &&
                            n),
                          (k = navigator),
                          (T = ce(null == m ? void 0 : m.fullVersionList)),
                          (E =
                            (void 0 !== (null == m ? void 0 : m.architecture) &&
                              m.architecture) ||
                            null),
                          (I =
                            (void 0 !== (null == m ? void 0 : m.model) &&
                              m.model) ||
                            null),
                          (e.n = 3),
                          this.getNetworkType()
                        );
                      case 3:
                        return (
                          (A = e.v),
                          (C =
                            void 0 !== (null == m ? void 0 : m.mobile)
                              ? m.mobile
                              : void 0 !==
                                  (null ===
                                    (i =
                                      null == k ? void 0 : k.userAgentData) ||
                                  void 0 === i
                                    ? void 0
                                    : i.mobile)
                                ? k.userAgentData.mobile
                                : /mobile/i.test(navigator.userAgent)),
                          (M = {
                            deviceType:
                              null ===
                                (a =
                                  (null === (r = h.device) || void 0 === r
                                    ? void 0
                                    : r.type) || (C ? "Mobile" : "Desktop")) ||
                              void 0 === a
                                ? void 0
                                : a.toUpperCase(),
                            screenWidth: window.screen.width,
                            screenHeight: window.screen.height,
                            screenPixelRatio: window.devicePixelRatio,
                            screenDensity: this.getReportedPPI(),
                            osName:
                              null ===
                                (s =
                                  (null == m ? void 0 : m.platform) ||
                                  (null === (o = h.os) || void 0 === o
                                    ? void 0
                                    : o.name) ||
                                  navigator.platform ||
                                  "Unavailable (browser privacy)") ||
                              void 0 === s
                                ? void 0
                                : s.toUpperCase(),
                            osVersion:
                              (null == m ? void 0 : m.platformVersion) ||
                              (null === (l = h.os) || void 0 === l
                                ? void 0
                                : l.version) ||
                              null,
                            noOfProcessors:
                              navigator.hardwareConcurrency || null,
                            browserName:
                              (null ===
                                (d =
                                  T.name ||
                                  (null === (c = h.browser) || void 0 === c
                                    ? void 0
                                    : c.name)) || void 0 === d
                                ? void 0
                                : d.toUpperCase()) || null,
                            browserVersion:
                              T.version ||
                              (null === (u = h.browser) || void 0 === u
                                ? void 0
                                : u.version) ||
                              null,
                            networkType: null == A ? void 0 : A.effectiveType,
                            networkConnectionType: null == A ? void 0 : A.type,
                            isTouchScreenCapable: navigator.maxTouchPoints > 0,
                            isNFCCapable: b,
                            isNFCEnabled: w,
                            isGPUCapable: !!k.gpu,
                            isVRCapable: !!("xr" in navigator),
                            isScreenReaderEnabled:
                              null !==
                                (p =
                                  null === (v = window.matchMedia) ||
                                  void 0 === v
                                    ? void 0
                                    : v.call(window, "(forced-colors: active)")
                                        .matches) &&
                              void 0 !== p &&
                              p,
                            webglRenderer: (function () {
                              try {
                                var e = document.createElement("canvas");
                                var n = e.getContext("webgl");
                                return (
                                  (null == n
                                    ? void 0
                                    : n.getParameter(n.RENDERER)) || null
                                );
                              } catch (t) {
                                return null;
                              }
                            })(),
                            coreArchitecture:
                              (null == E ? void 0 : E.toUpperCase()) || null,
                            deviceModel:
                              (null == I ? void 0 : I.toUpperCase()) || null,
                          }),
                          (this.cachedDeviceInfo = M),
                          e.a(2, M)
                        );
                    }
                },
                e,
                this,
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
    ]);
  })();
  var ue = "UxYprR2jUKf3otes80Bi";
  var ve = "https://fpjscdn.net/v4/".concat(ue);
  var pe = "https://cdn.adgeist.ai/identifier/v1.0.3/visitorid.js";
  var he = (function () {
    function e() {
      (s(this, e),
        (this.fpProAgent = null),
        (this.adgeistAgent = null),
        (this.fpProPromise = null),
        (this.adgeistPromise = null),
        (this.cachedAdgeistResult = null));
    }
    return c(e, [
      {
        key: "load",
        value: function e() {
          (this.fpProPromise || (this.fpProPromise = this.loadFpPro()),
            this.adgeistPromise || (this.adgeistPromise = this.loadAdgeist()));
        },
      },
      {
        key: "loadFpPro",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n, i;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        return ((t = "ap"), (e.p = 1), (e.n = 2), import(ve));
                      case 2:
                        return ((n = e.v), (e.n = 3), n.start({ region: t }));
                      case 3:
                        return ((i = e.v), (this.fpProAgent = i), e.a(2, i));
                      case 4:
                        return ((e.p = 4), e.v, e.a(2, null));
                    }
                },
                e,
                this,
                [[1, 4]],
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "loadAdgeist",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n, i, r, a, o;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        return ((e.p = 0), (e.n = 1), import(pe));
                      case 1:
                        return ((t = e.v), (e.n = 2), t.load());
                      case 2:
                        return (
                          (n = e.v),
                          (i = n.get),
                          (r = n.getComponents),
                          (a = n.version),
                          (o = n.env),
                          (this.adgeistAgent = {
                            get: i,
                            getComponents: r,
                            version: a,
                            env: o,
                          }),
                          e.a(2, this.adgeistAgent)
                        );
                      case 3:
                        return ((e.p = 3), e.v, e.a(2, null));
                    }
                },
                e,
                this,
                [[0, 3]],
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getVisitorId",
        value: (function () {
          var e = a(
            x().m(function e(t, n) {
              var i, r, a;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch (e.n) {
                      case 0:
                        ((a = t), (e.n = "fp-pro" === a ? 1 : 3));
                        break;
                      case 1:
                        return ((e.n = 2), this.getFpProIdentifier());
                      case 2:
                        return (
                          (i = e.v),
                          e.a(2, (null == i ? void 0 : i.visitor_id) || "")
                        );
                      case 3:
                        return ((e.n = 4), this.getAdgeistIdentifier(n));
                      case 4:
                        return (
                          (r = e.v),
                          e.a(2, (null == r ? void 0 : r.visitorId) || "")
                        );
                      case 5:
                        return e.a(2);
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getIdentifier",
        value: (function () {
          var e = a(
            x().m(function e(t, n) {
              var i;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch (e.n) {
                      case 0:
                        ((i = t),
                          (e.n = "fp-pro" === i ? 1 : "adgeist" === i ? 2 : 3));
                        break;
                      case 1:
                        return e.a(2, this.getFpProIdentifier());
                      case 2:
                        return e.a(2, this.getAdgeistIdentifier(n));
                      case 3:
                        return e.a(2, null);
                      case 4:
                        return e.a(2);
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getFpProIdentifier",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.p = 0),
                          this.fpProPromise ||
                            (this.fpProPromise = this.loadFpPro()),
                          (e.n = 1),
                          this.fpProPromise
                        );
                      case 1:
                        if (((t = e.v), t)) {
                          e.n = 2;
                          break;
                        }
                        return e.a(2, null);
                      case 2:
                        return ((e.n = 3), t.get());
                      case 3:
                        return e.a(2, e.v);
                      case 4:
                        return ((e.p = 4), e.v, e.a(2, null));
                    }
                },
                e,
                this,
                [[0, 4]],
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getAdgeistIdentifier",
        value: (function () {
          var e = a(
            x().m(function e(t) {
              var n;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.p = 0),
                          this.adgeistPromise ||
                            (this.adgeistPromise = this.loadAdgeist()),
                          (e.n = 1),
                          this.adgeistPromise
                        );
                      case 1:
                        if (((n = e.v), n)) {
                          e.n = 2;
                          break;
                        }
                        return e.a(2, null);
                      case 2:
                        return ((e.n = 3), n.get(t));
                      case 3:
                        return e.a(2, e.v);
                      case 4:
                        return ((e.p = 4), e.v, e.a(2, null));
                    }
                },
                e,
                this,
                [[0, 4]],
              );
            }),
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getAdgeistFingerprintingComponents",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.p = 0),
                          this.adgeistPromise ||
                            (this.adgeistPromise = this.loadAdgeist()),
                          (e.n = 1),
                          this.adgeistPromise
                        );
                      case 1:
                        if (((t = e.v), t)) {
                          e.n = 2;
                          break;
                        }
                        return e.a(2, null);
                      case 2:
                        return ((e.n = 3), t.getComponents());
                      case 3:
                        return e.a(2, e.v);
                      case 4:
                        return ((e.p = 4), e.v, e.a(2, null));
                    }
                },
                e,
                this,
                [[0, 4]],
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getAdgeistFingerprintingVersion",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch (e.n) {
                      case 0:
                        return (
                          this.adgeistPromise ||
                            (this.adgeistPromise = this.loadAdgeist()),
                          (e.n = 1),
                          this.adgeistPromise
                        );
                      case 1:
                        return (
                          (n = e.v),
                          e.a(
                            2,
                            null !== (t = null == n ? void 0 : n.version) &&
                              void 0 !== t
                              ? t
                              : null,
                          )
                        );
                    }
                },
                e,
                this,
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getAdgeistFingerprintingEnv",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch (e.n) {
                      case 0:
                        return (
                          this.adgeistPromise ||
                            (this.adgeistPromise = this.loadAdgeist()),
                          (e.n = 1),
                          this.adgeistPromise
                        );
                      case 1:
                        return (
                          (n = e.v),
                          e.a(
                            2,
                            null !== (t = null == n ? void 0 : n.env) &&
                              void 0 !== t
                              ? t
                              : null,
                          )
                        );
                    }
                },
                e,
                this,
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "getCustomFingerprint",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n, i;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        if (((e.p = 0), !this.cachedAdgeistResult)) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2, this.cachedAdgeistResult);
                      case 1:
                        return (
                          this.adgeistPromise ||
                            (this.adgeistPromise = this.loadAdgeist()),
                          (e.n = 2),
                          this.adgeistPromise
                        );
                      case 2:
                        if (((t = e.v), t)) {
                          e.n = 3;
                          break;
                        }
                        return e.a(2, void 0);
                      case 3:
                        return ((e.n = 4), t.get());
                      case 4:
                        return (
                          (n = e.v),
                          (i = w(
                            w({ visits: 0, signals: {} }, n),
                            {},
                            { version: t.version },
                          )),
                          (this.cachedAdgeistResult = i),
                          e.a(2, i)
                        );
                      case 5:
                        return ((e.p = 5), e.v, e.a(2, void 0));
                    }
                },
                e,
                this,
                [[0, 5]],
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
    ]);
  })();
  var ge = (function () {
    function e(t) {
      (s(this, e),
        (this.userDetails = {}),
        (this.cdpManager = t),
        (this.userDetails = {}),
        (this.fingerprintManager = new he()),
        this.fingerprintManager.load());
    }
    return c(e, [
      {
        key: "getDeviceFingerprint",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t,
                n = arguments;
              return x().w(
                function (e) {
                  for (; 1; )
                    if (0 === e.n)
                      return (
                        (t =
                          n.length > 0 && void 0 !== n[0] ? n[0] : "adgeist"),
                        e.a(2, this.fingerprintManager.getVisitorId(t))
                      );
                },
                e,
                this,
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "collectPageMetadata",
        value: function e() {
          var t = { title: document.title || null, meta: {} };
          return (
            document.querySelectorAll("meta").forEach(function (e) {
              var n = e.getAttribute("name") || e.getAttribute("property");
              var i = e.getAttribute("content");
              n && i && (t.meta[n] = i);
            }),
            t
          );
        },
      },
      {
        key: "setUserDetails",
        value: function e(t) {
          return "object" !== M(t) || null === t
            ? (this.cdpManager.logger.error("Invalid user details"),
              this.userDetails)
            : ((this.userDetails = w(w({}, this.userDetails), t)),
              this.userDetails);
        },
      },
    ]);
  })();
  var fe = (function () {
    function e(t, n) {
      (s(this, e),
        (this.cdpManager = t),
        (this.collector = n),
        (this.cdpUrl = t.cdpUrl));
    }
    return c(e, [
      {
        key: "sendToCDP",
        value: (function () {
          var e = a(
            x().m(function e(t, n) {
              var i, r, a, o;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        if (this.cdpManager.shouldIngestEventsToCDP) {
                          e.n = 1;
                          break;
                        }
                        return e.a(2);
                      case 1:
                        if (((e.p = 1), (i = ""), i)) {
                          e.n = 2;
                          break;
                        }
                        return e.a(2);
                      case 2:
                        return (
                          (e.n = 3),
                          fetch("".concat(this.cdpUrl, "/ingest"), {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: "Bearer ".concat(i),
                            },
                            body: JSON.stringify({
                              event_type: t,
                              traits: w(
                                {
                                  consent_given:
                                    this.cdpManager.consentManager.getUserConsent()
                                      .length > 0,
                                  source: "website",
                                  timestamp: new Date().toISOString(),
                                },
                                this.collector.userDetails,
                              ),
                              context: {
                                page_url: window.location.href,
                                page_title: document.title,
                              },
                              event_properties: n,
                            }),
                          })
                        );
                      case 3:
                        if (((r = e.v), r.ok)) {
                          e.n = 4;
                          break;
                        }
                        throw new Error("HTTP error: ".concat(r.status));
                      case 4:
                        (this.cdpManager.logger.log(
                          "CDP event ".concat(t, " sent successfully"),
                        ),
                          (e.n = 6));
                        break;
                      case 5:
                        ((e.p = 5),
                          (o = e.v),
                          (a = o instanceof Error ? o.message : String(o)),
                          this.cdpManager.logger.error(
                            "Failed to send CDP event "
                              .concat(t, ": ")
                              .concat(a),
                          ));
                      case 6:
                        return e.a(2);
                    }
                },
                e,
                this,
                [[1, 5]],
              );
            }),
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "addFingerprintInCDP",
        value: (function () {
          var e = a(
            x().m(function e(t) {
              var n, i;
              var r, a, o, s, l, c, d, u, v, p, h;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch (e.n) {
                      case 0:
                        return (
                          (r = this.collector.fingerprintManager),
                          (e.n = 1),
                          Promise.allSettled([
                            r.getIdentifier("fp-pro"),
                            r.getIdentifier(
                              "adgeist",
                              w(
                                w(
                                  { id: t.userId },
                                  t.publisherName
                                    ? { companyName: t.publisherName }
                                    : { companyName: window.location.origin },
                                ),
                                t.email ? { email: t.email } : {},
                              ),
                            ),
                          ])
                        );
                      case 1:
                        return (
                          (a = e.v),
                          (e.n = 2),
                          Promise.allSettled([
                            r.getAdgeistFingerprintingComponents(),
                            r.getAdgeistFingerprintingVersion(),
                            r.getAdgeistFingerprintingEnv(),
                          ])
                        );
                      case 2:
                        return (
                          (o = e.v),
                          (s = S(o, 3)),
                          (l = s[0]),
                          (c = s[1]),
                          (d = s[2]),
                          (u = "fulfilled" === a[0].status ? a[0].value : null),
                          (v = "fulfilled" === a[1].status ? a[1].value : null),
                          (p = w(
                            w(
                              w(
                                w(
                                  { user_id: t.userId },
                                  t.publisherName
                                    ? { publisher_name: t.publisherName }
                                    : {
                                        publisher_name: window.location.origin,
                                      },
                                ),
                                t.name ? { name: t.name } : {},
                              ),
                              t.email ? { email: t.email } : {},
                            ),
                            {},
                            {
                              fp_pro_visitor_id:
                                null !==
                                  (n = null == u ? void 0 : u.visitor_id) &&
                                void 0 !== n
                                  ? n
                                  : null,
                              adgeist_visitor_id:
                                null !==
                                  (i = null == v ? void 0 : v.visitorId) &&
                                void 0 !== i
                                  ? i
                                  : null,
                              adgeist_fingerprinting_components:
                                "fulfilled" === l.status ? l.value : null,
                              adgeist_fingerprinting_version:
                                "fulfilled" === c.status ? c.value : null,
                              adgeist_fingerprinting_env:
                                "fulfilled" === d.status ? d.value : null,
                            },
                          )),
                          (h =
                            (null == v ? void 0 : v.visitorId) ||
                            (null == u ? void 0 : u.visitor_id) ||
                            t.userId),
                          (e.n = 3),
                          this.cdpManager.postHogManager.capture(
                            "fingerprinting",
                            h,
                            p,
                          )
                        );
                      case 3:
                        return e.a(2);
                    }
                },
                e,
                this,
              );
            }),
          );
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
    ]);
  })();
  var me = (function (e) {
    function t(e) {
      var n;
      return (
        s(this, t),
        (n = o(this, t, [e])),
        (n.lastMetadataSent = null),
        (n.cdpUrl = e.cdpUrl),
        (n.logger = e.logger),
        (n.shouldIngestEventsToCDP = e.shouldIngestEventsToCDP),
        (n.postHogManager = e.postHogManager),
        (n.consentManager = new ne(n)),
        (n.collector = new ge(n)),
        (n.sender = new fe(n, n.collector)),
        (n.lastMetadataSent = null),
        n
      );
    }
    return (
      p(t, e),
      c(t, [
        {
          key: "setUserDetails",
          value: (function () {
            var e = a(
              x().m(function e(t) {
                var n, i;
                return x().w(
                  function (e) {
                    for (; 1; )
                      switch (e.n) {
                        case 0:
                          if (
                            ((n = this.collector.userDetails.userId),
                            this.collector.setUserDetails(t),
                            t.userId && t.userId !== n)
                          )
                            try {
                              this.sender.addFingerprintInCDP(t);
                            } catch (r) {
                              ((i = r instanceof Error ? r.message : String(r)),
                                this.sdk.logger.error(
                                  "Failed to resend metadata: ".concat(i),
                                ));
                            }
                        case 1:
                          return e.a(2);
                      }
                  },
                  e,
                  this,
                );
              }),
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: "sendPageMetadata",
          value: (function () {
            var e = a(
              x().m(function e() {
                var t, n, i, r;
                return x().w(
                  function (e) {
                    for (; 1; )
                      switch ((e.p = e.n)) {
                        case 0:
                          if (
                            ((t = window.location.href),
                            this.lastMetadataSent !== t)
                          ) {
                            e.n = 1;
                            break;
                          }
                          return e.a(2);
                        case 1:
                          return (
                            (e.p = 1),
                            (n = this.collector.collectPageMetadata()),
                            (e.n = 2),
                            this.sender.sendToCDP("METADATA", {
                              pageUrl: t,
                              metadata: n,
                            })
                          );
                        case 2:
                          ((this.lastMetadataSent = t), (e.n = 4));
                          break;
                        case 3:
                          ((e.p = 3),
                            (r = e.v),
                            (i = r instanceof Error ? r.message : String(r)),
                            this.sdk.logger.error(
                              "Failed to send page metadata: ".concat(i),
                            ));
                        case 4:
                          return e.a(2);
                      }
                  },
                  e,
                  this,
                  [[1, 3]],
                );
              }),
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        {
          key: "trackCustomEvent",
          value: (function () {
            var e = a(
              x().m(function e(t, n) {
                return x().w(
                  function (e) {
                    for (; 1; )
                      switch (e.n) {
                        case 0:
                          return (
                            (e.n = 1),
                            this.sender.sendToCDP(
                              t,
                              w({ pageUrl: window.location.href }, n),
                            )
                          );
                        case 1:
                          return e.a(2);
                      }
                  },
                  e,
                  this,
                );
              }),
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
      ])
    );
  })(O);
  var ye = "phc_kqTQTisRrHXss5HknH3g7XbPdyrEAw49oa3ssRUaxaSK";
  var be = "https://us.i.posthog.com/i/v0/e/";
  var we = (function () {
    function e() {
      s(this, e);
    }
    return c(e, [
      {
        key: "capture",
        value: (function () {
          var e = a(
            x().m(function e(t, n, i) {
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.p = 0),
                          (e.n = 1),
                          fetch(be, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              api_key: ye,
                              event: t,
                              distinct_id: n,
                              properties: w({}, i),
                            }),
                          })
                        );
                      case 1:
                        e.n = 3;
                        break;
                      case 2:
                        ((e.p = 2), e.v);
                      case 3:
                        return e.a(2);
                    }
                },
                e,
                null,
                [[0, 2]],
              );
            }),
          );
          function t(t, n, i) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
    ]);
  })();
  var ke = (function () {
    function e() {
      var t = this;
      (s(this, e),
        (this.handleRouteChange = function () {
          setTimeout(function () {
            (t.cdpManager.sendPageMetadata(),
              t.adTrackers.forEach(function (e) {
                return e.destroy();
              }),
              t.adTrackers.clear(),
              t.adSlotObserver.observeAdSlots(),
              t.seenAdSpaces.clear());
          }, 200);
        }));
      var n = document.currentScript;
      this.seenAdSpaces = new Set();
      var i = "https://beta.v2.bg-services.adgeist.ai";
      ((this.adServeUrl =
        (null == n ? void 0 : n.getAttribute("data-ad-serve-url")) || i),
        (this.adTrackingUrl =
          (null == n ? void 0 : n.getAttribute("data-ad-tracking-url")) || i),
        (this.cdpUrl =
          (null == n ? void 0 : n.getAttribute("data-cdp-url")) ||
          "https://rl2ptnqw5f.execute-api.ap-south-1.amazonaws.com"),
        (this.shouldIngestEventsToCDP =
          !(null != n && n.getAttribute("data-should-ingest-events-to-cdp")) ||
          "true" ===
            (null == n
              ? void 0
              : n.getAttribute("data-should-ingest-events-to-cdp"))),
        (this.isTest =
          "true" === (null == n ? void 0 : n.getAttribute("data-test-mode"))),
        (this.publisherId =
          (null == n ? void 0 : n.getAttribute("data-publisher-id")) || ""),
        (this.logger = new ie({
          enableConsoleLogging: !0,
          enableRemoteLogging: !0,
          logPrefix: "[AdgeistSDK]",
        })),
        (this.postHogManager = new we()),
        (this.cdpManager = new me(this)),
        (this.adLoader = new ee(this)),
        (this.adSlotObserver = new te(this)),
        (this.adAudioManager = new D(this)),
        (this.deviceInfoCollector = new de(this)),
        (this.adTrackers = new Map()),
        (this.deviceInfo = null),
        (this.fingerprint = null));
    }
    return c(e, [
      {
        key: "init",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t, n, i, r, a, o, s;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch ((e.p = e.n)) {
                      case 0:
                        return (
                          (e.p = 0),
                          (t = this.cdpManager.collector.fingerprintManager),
                          (e.n = 1),
                          Promise.all([
                            t.getVisitorId("adgeist"),
                            t.getAdgeistFingerprintingVersion(),
                          ])
                        );
                      case 1:
                        return (
                          (n = e.v),
                          (i = S(n, 2)),
                          (r = i[0]),
                          (a = i[1]),
                          r &&
                            (this.fingerprint = { visitorId: r, version: a }),
                          (e.n = 2),
                          this.deviceInfoCollector.getDeviceInfo()
                        );
                      case 2:
                        return (
                          (this.deviceInfo = e.v),
                          (e.n = 3),
                          this.cdpManager.sendPageMetadata()
                        );
                      case 3:
                        (this.adSlotObserver.observeAdSlots(),
                          this.logger.log("SDK initialized successfully"),
                          (e.n = 5));
                        break;
                      case 4:
                        ((e.p = 4),
                          (s = e.v),
                          (o = s instanceof Error ? s.message : String(s)),
                          this.logger.error(
                            "Initialization failed: ".concat(o),
                          ));
                      case 5:
                        return e.a(2);
                    }
                },
                e,
                this,
                [[0, 4]],
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      {
        key: "destroy",
        value: (function () {
          var e = a(
            x().m(function e() {
              var t;
              return x().w(
                function (e) {
                  for (; 1; )
                    switch (e.n) {
                      case 0:
                        ((t = this.adSlotObserver.observer),
                          t &&
                            (t.disconnect(),
                            (this.adSlotObserver.observer = null)),
                          this.adTrackers.forEach(function (e) {
                            return e.destroy();
                          }),
                          this.adTrackers.clear(),
                          this.seenAdSpaces.clear(),
                          window.removeEventListener(
                            "popstate",
                            this.handleRouteChange,
                          ));
                      case 1:
                        return e.a(2);
                    }
                },
                e,
                this,
              );
            }),
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
    ]);
  })();
  !(function () {
    var e = new ke();
    ((window.sspAdsQueue = window.sspAdsQueue || []),
      (window.adsbyadgeist = window.adsbyadgeist || {
        push: function t() {
          for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
          e.adLoader.loadAds(i.length ? i : null);
        },
        trackCustomEvent: function t(n, i) {
          return e.cdpManager.trackCustomEvent(n, i);
        },
        setUserDetails: function t(n) {
          return e.cdpManager.setUserDetails(n);
        },
        showConsentBanner: function t() {
          return e.cdpManager.consentManager.showConsentBanner();
        },
        updateAdgeistUserConsent: function t(n) {
          return e.cdpManager.consentManager.updateAdgeistUserConsent(n);
        },
        getUserConsent: function t() {
          return e.cdpManager.consentManager.getUserConsent();
        },
        destroy: function t() {
          return e.destroy();
        },
        version: N.ADGEIST_VERSION,
        CONSENT_TYPE: H,
      }));
    var t = history.pushState;
    var n = history.replaceState;
    return (
      (history.pushState = function () {
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
          i[r] = arguments[r];
        (t.apply(this, i), e.handleRouteChange());
      }),
      (history.replaceState = function () {
        for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
          i[r] = arguments[r];
        (n.apply(this, i), e.handleRouteChange());
      }),
      window.addEventListener("popstate", e.handleRouteChange),
      "complete" === document.readyState ||
      "interactive" === document.readyState
        ? setTimeout(function () {
            return e.cdpManager.sendPageMetadata();
          }, 0)
        : document.addEventListener("DOMContentLoaded", function () {
            return e.cdpManager.sendPageMetadata();
          }),
      e.init(),
      window.adsbyadgeist
    );
  })();
  var xe = "undefined" != typeof window ? window.adsbyadgeist : {};
  return xe;
});
