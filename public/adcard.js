!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
        t((e.AdgeistAdCardSDK = {})));
})(this, function (e) {
  "use strict";
  function t(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  function n(e, t, n) {
    return (
      (t = s(t)),
      h(
        e,
        c() ? Reflect.construct(t, n || [], s(e).constructor) : t.apply(e, n),
      )
    );
  }
  function i(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      ((i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, f(i.key), i));
    }
  }
  function o(e, t, n) {
    return (
      t && a(e.prototype, t),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function r(e, t, n) {
    return (
      (t = f(t)) in e
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
  function s(e) {
    return (
      (s = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      s(e)
    );
  }
  function d(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    ((e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && u(e, t));
  }
  function c() {
    try {
      var e = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch (e) {}
    return (c = function () {
      return !!e;
    })();
  }
  function l(e, t) {
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
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? l(Object(n), !0).forEach(function (t) {
            r(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
    }
    return e;
  }
  function h(e, n) {
    if (n && ("object" == typeof n || "function" == typeof n)) return n;
    if (void 0 !== n)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return t(e);
  }
  function u(e, t) {
    return (
      (u = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return ((e.__proto__ = t), e);
          }),
      u(e, t)
    );
  }
  function g(e, t) {
    if ("object" != typeof e || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var i = n.call(e, t);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function f(e) {
    var t = g(e, "string");
    return "symbol" == typeof t ? t : t + "";
  }
  var v = "adcard-v2-styles";
  var m = "banner-card-styles";
  var w = "companion-card-styles";
  var y =
    "\n    html, body { margin: 0; padding: 0; width: 100%; height: 100%; }\n    .card-container {\n      position: relative;\n      container-type: size;\n      container-name: adgeist-card;\n      max-height: 900px;\n      max-width: 1200px;\n      overflow: hidden;\n      outline: 1px solid #E0E0E0;\n      background-color: #FFFFFF;\n      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);\n      box-sizing: border-box;\n      font-family: system-ui, -apple-system, sans-serif;\n    }\n    .adgeist-title-text {\n      margin: 0;\n      color: #000;\n      word-break: break-word;\n    }\n    .adgeist-description-text {\n      margin: 0;\n      color: #4B5563;\n      word-break: break-word;\n    }\n    .adgeist-name-text {\n      margin: 0;\n      color: #9CA3AF;\n    }\n    .cta-button {\n      background: #85C896;\n      color: rgba(29, 29, 29, 1);\n      border-radius: 9999px;\n      padding: 6px 16px;\n      font-weight: 500;\n      text-decoration: none;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      white-space: nowrap;\n      box-shadow:\n        inset 0 0 2px -2px #ACFFB1,\n        inset 8px 3px 15px 0 #6FC974,\n        inset -4px -4px 13px -5px rgba(51,51,51,0.74),\n        inset 4px 0 4px 0 rgba(38,100,42,0.68);\n      transition: transform .2s;\n    }\n    .cta-button:hover { transform: scale(1.01); }\n";
  var x =
    "\n    html, body { margin: 0; padding: 0; width: 100%; height: 100%; }\n      .banner-adgeist-card {\n        container-type: size;\n        container-name: banner-ad;\n        max-width: 1200px;\n        min-width: 240px;\n        min-height: 50px;\n        max-height: 900px;\n        overflow: hidden;\n        outline: 1px solid #e0e0e0;\n        background-color: #d5d4d4ff;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n        position: relative;\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .adgeist-media {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      .adgeist-media img,\n      .adgeist-media video {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n        display: block;\n      }\n\n      .mute-button { cursor: pointer; transition: opacity 0.2s; }\n      .mute-button:hover { opacity: 0.8; }\n  ";
  var b =
    "\n    html, body { margin: 0; padding: 0; width: 100%; height: 100%; }\n\n  .companion-ad-container {\n            display:flex;\n            position: relative;\n            flex-direction: column;\n            outline: 1px solid #E0E0E0;\n            background-color: #FFFFFF;\n            width:100%;\n            height:max-content;\n            max-width: 560px;\n            min-width: 320px;\n            min-height: 180px;\n            max-height: 470px;\n            overflow: hidden;\n            text-decoration: none;\n            color: inherit;\n        }\n        .cta-button {\n            background: #85C896;\n            color: rgba(29, 29, 29, 1);\n            border-radius: 9999px;\n            padding: 6px 16px;\n            font-weight: 500;\n            text-decoration: none;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            white-space: nowrap;\n            box-shadow:\n                inset 0 0 2px -2px #ACFFB1,\n                inset 8px 3px 15px 0 #6FC974,\n                inset -4px -4px 13px -5px rgba(51,51,51,0.74),\n                inset 4px 0 4px 0 rgba(38,100,42,0.68);\n            transition: transform .2s;\n        }\n        .cta-button:hover { transform: scale(1.01); }\n        .adgeist-title-text {\n          margin: 0;\n          color: #000;\n          word-break: break-word;\n        }\n        .adgeist-description-text {\n          margin: 0;\n          color: #4B5563;\n          word-break: break-word;\n        }\n";
  function S(e) {
    return e ? (/^https?:\/\//i.test(e) ? e : "https://" + e) : "";
  }
  function k(e, t) {
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
  var A = (function () {
    function e(t) {
      (i(this, e),
        (this.activeUnmutedAd = null),
        (this.sdk = t),
        this.setupMuteEventListener());
    }
    return o(e, [
      {
        key: "setupMuteEventListener",
        value: function e() {
          var t = this;
          window.addEventListener("message", function (e) {
            if ("adgeist_mute_event" === e.data.type) {
              var n = e.data,
                i = n.adElementId,
                a = n.muted;
              a || t.activeUnmutedAd === i
                ? a && t.activeUnmutedAd === i && (t.activeUnmutedAd = null)
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
            var i;
            if (e.id !== t)
              try {
                null === (i = e.contentWindow) || void 0 === i
                  ? void 0
                  : i.postMessage({ type: "adgeist_mute", mute: !0 }, "*");
              } catch (a) {
                n.sdk.logger.log(
                  "Failed to send mute message to iframe "
                    .concat(e.id, ": ")
                    .concat(a instanceof Error ? a.message : String(a)),
                );
              }
          });
        },
      },
    ]);
  })();
  var T = (function () {
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var n;
      (i(this, e),
        (this.logger = { log: console.log }),
        (this.adAudioManager = new A(this)),
        (this.adElementId = t.adElementId || ""),
        (this.title = t.title || "Headline 25 characters"),
        (this.description =
          t.description ||
          "Body text with 50 characters of describing the advertisement."),
        (this.name = t.name || "-"),
        (this.ctaUrl = t.ctaUrl || "https://www.example.com"),
        (this.fileUrl = t.fileUrl || "/assets/png/dummy-preview-bg.png"),
        (this.type = t.type || "image"),
        (this.isResponsive =
          null !== (n = t.isResponsive) && void 0 !== n && n),
        (this.responsiveType = t.responsiveType || "Square"),
        (this.width = parseInt(String(t.width || 300))),
        (this.height = parseInt(String(t.height || 300))),
        (this.appliedClass = k(this.width, this.height)),
        (this.adspaceType = t.adspaceType || "banner"),
        (this.media = t.media || []),
        (this.altText = t.altText || ""),
        (this.placeholderSrc = t.placeholderSrc || ""));
    }
    return o(e, [
      {
        key: "renderHtml",
        value: function e() {
          var t = {
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
            altText: this.altText,
            placeholderSrc: this.placeholderSrc,
          };
          if ("banner" === this.adspaceType) {
            var n = new E(t);
            return n.renderBannerHtml();
          }
          if ("display" === this.adspaceType) {
            var i = new O(t);
            return i.renderDisplayHtml();
          }
          if ("companion" === this.adspaceType) {
            var a = new M(t);
            return a.renderCompanionHtml();
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
    ]);
  })();
  var E = (function (e) {
    function t() {
      var e;
      var a =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var o;
      return (
        i(this, t),
        (e = n(this, t, [a])),
        (e.isResponsive = null === (o = a.isResponsive) || void 0 === o || o),
        (e.media = a.media || []),
        (e.ctaUrl = a.ctaUrl || "#"),
        (e.adElementId = a.adElementId || ""),
        (e.altText = a.altText || "Banner Image"),
        e
      );
    }
    return (
      d(t, e),
      o(t, [
        {
          key: "renderBannerHtml",
          value: function e() {
            var t = this.isResponsive ? "100%" : this.width + "px";
            var n = this.isResponsive ? "100%" : this.height + "px";
            var i = this.media[0];
            return '\n        <style id="'
              .concat(m, '">')
              .concat(x, '</style>\n        <a href="')
              .concat(
                S(this.ctaUrl),
                '" target="_blank" id="banner-container" class="banner-adgeist-card" style="width:',
              )
              .concat(t, ";height:")
              .concat(
                n,
                ';">\n          <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;">AD</span>\n\n          <div class="adgeist-media adgeist-ad">\n             ',
              )
              .concat(
                "video" === i.type
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
                        "\"\n                    style=\"object-fit: contain;\" \n                    onloadeddata=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                                  if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n                    preload=\"auto\"\n                  >\n                      <source src=\"",
                      )
                      .concat(
                        (null == i ? void 0 : i.src) ||
                          this.placeholderSrc ||
                          "",
                        '" type="video/mp4">\n                  </video>\n                  ',
                      )
                  : '\n                <img\n                  class="media"\n                  src="'
                      .concat(
                        (null == i ? void 0 : i.src) ||
                          this.placeholderSrc ||
                          "",
                        '"\n                  fallback="',
                      )
                      .concat(
                        (null == i ? void 0 : i.thumbnailUrl) ||
                          this.placeholderSrc ||
                          "",
                        '"\n                  alt="',
                      )
                      .concat(
                        this.altText,
                        '"\n                  loading="eager"s\n                  width="',
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
                "\n          </div>\n        </a>\n      ",
              );
          },
        },
      ])
    );
  })(T);
  var O = (function (e) {
    function t() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (i(this, t), n(this, t, [e]));
    }
    return (
      d(t, e),
      o(t, [
        {
          key: "estimateTextHeight",
          value: function e(t, n, i, a) {
            var o = n;
            var r = 0.6 * o * (i ? 1.1 : 1);
            var s = t * r;
            var d = Math.max(1, Math.ceil(s / a));
            var c = 1.4 * o;
            return d * c;
          },
        },
        {
          key: "getLayoutConfig",
          value: function e() {
            var t = this.width;
            var n = this.height;
            var i = 1.91;
            var a = t / i;
            var o = n - a;
            var r = 40;
            var s = o >= r;
            if (s) {
              var d = 0.35 * n;
              return (
                o < d && (a = n - d),
                {
                  type: "stacked",
                  imageHeight: a,
                  imageWidth: t,
                  contentHeight: o,
                  flexDirection: "column",
                }
              );
            }
            var c = n;
            var l = c * i;
            if (n < 70) {
              var p = 0.2 * t;
              l = Math.min(l, p);
            }
            var h = 110;
            var u = t - h;
            var g = 0.45 * t;
            return (
              t - l < g && (u = t - g),
              l > u && ((l = Math.max(0, u)), (c = n)),
              {
                type: "side",
                imageHeight: c,
                imageWidth: l,
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
            var a = this.height;
            var o = "stacked" === t.type;
            var r = o ? a - t.imageHeight : a;
            var s = o ? i : i - t.imageWidth;
            var d = a < 150 ? 16 : a < 350 ? 20 : 32;
            var c = 4;
            var l = i < 200 ? 16 : 32;
            a < 60 && ((d = 8), (c = 2));
            var h = !o && s > 480;
            var u = !h && a < 90;
            var g = Math.max(10, s - l);
            var f = 40;
            var v = 100;
            u
              ? (g -= v)
              : h
                ? (g = (s - l - 16) / 2)
                : a < 90 && !o && (g = (s - l - 32) / 2);
            var m = 16;
            var w = 14;
            var y = r - d;
            var x = function e(t, i, a) {
              var o = 0;
              var r = 0;
              var s = 0;
              if (
                (t && (r = n.estimateTextHeight(n.title.length, m, !0, g)),
                i && (s = n.estimateTextHeight(n.description.length, w, !1, g)),
                h)
              ) {
                var d = t ? r + c : 0;
                var l = i ? s : 0;
                o = Math.max(d, l);
              } else
                (t && (o += r),
                  i && (o += s),
                  t && i && (o += c),
                  a && !u && (o += 16 + f));
              var p = 1;
              if (o > 0) {
                var v = y / o;
                p = Math.sqrt(v);
              }
              var x = g / 7 / m;
              var b = Math.min(2.5, x);
              p = Math.max(0.1, Math.min(b, p));
              var S = p;
              var k = !1;
              var A = 10;
              for (; A >= 0; ) {
                var T = Math.max(14, m * S);
                var E = Math.max(12, w * S);
                var O = 0;
                var M = 0;
                (t && (O = n.estimateTextHeight(n.title.length, T, !0, g)),
                  i &&
                    (M = n.estimateTextHeight(n.description.length, E, !1, g)));
                var H = 0;
                if (h) {
                  var j = t ? O + c : 0;
                  var R = i ? M : 0;
                  j <= y && R <= y && (k = !0);
                } else {
                  if (
                    (t && (H += O), i && (H += M), t && i && (H += c), a && !u)
                  ) {
                    var _ = Math.max(12, 14 * S);
                    var D = 1.2 * _ + 12;
                    H += 16 + D;
                  }
                  H <= y && (k = !0);
                }
                if (k) break;
                ((S *= 0.9), A--);
              }
              return {
                fits: k,
                scale: S,
                showTitle: t,
                showBody: i,
                showCTA: a,
              };
            };
            var b = [
              { t: !0, d: !0, c: !0 },
              { t: !0, d: !0, c: !1 },
              { t: !0, d: !1, c: !1 },
              { t: !0, d: !1, c: !0 },
            ];
            var S = null;
            for (var k = 0, A = b; k < A.length; k++) {
              var T = A[k];
              if (!(T.c && u && r < f)) {
                var E = x(T.t, T.d, T.c);
                if (E.fits) {
                  var O = T.d && !T.c;
                  var M = O ? 0.35 : 0.75;
                  if (E.scale >= M) {
                    S = E;
                    break;
                  }
                  (!S || E.scale > S.scale) && (S = E);
                }
              }
            }
            return (
              S || (S = x(!0, !1, !1)),
              p(
                p({}, t),
                {},
                {
                  fontSizeScale: S.scale,
                  isHorizontalContent: u,
                  isSplitContent: h,
                  paddingY: d / 2,
                  fontSizes: {
                    title: Math.max(14, m * S.scale),
                    body: Math.max(12, w * S.scale),
                  },
                  visible: {
                    title: S.showTitle,
                    description: S.showBody,
                    cta: S.showCTA,
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
              a = t.type,
              o = t.isHorizontalContent,
              r = t.isSplitContent,
              s = t.paddingY;
            var d = "stacked" === a;
            var c = i.title
              ? "font-size:".concat(
                  n.title,
                  "px;line-height:1.2;margin-bottom:4px;font-weight:700;",
                )
              : "display:none;";
            var l = i.description
              ? "font-size:".concat(
                  n.body,
                  "px;line-height:1.35;margin-bottom:4px;opacity:0.8;",
                )
              : "display:none;";
            var p = i.cta
              ? "font-size:".concat(Math.max(12, 14 * t.fontSizeScale), "px;")
              : "display:none;";
            if (r)
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
                .concat(l, '">')
                .concat(
                  this.description,
                  "</div>\n                </div>\n            </div>\n        ",
                );
            var h = o ? "row" : "column";
            var u = d
              ? "align-items:center;text-align:center;"
              : "align-items:flex-start;text-align:left;";
            var g = o
              ? "align-items:center;justify-content:space-between;text-align:left;"
              : d
                ? "align-items:center;justify-content:space-around;"
                : "align-items:center;justify-content:center;";
            var f = o ? "margin-left:16px;" : "margin-top:16px;";
            var v = o
              ? "width:100%;justify-content:center;"
              : d
                ? "justify-content:center;width:100%;"
                : "width:100%;";
            return '\n        <div class="adgeist-content-container" style="flex:1;display:flex;flex-direction:'
              .concat(h, ";")
              .concat(g, "padding:")
              .concat(
                s,
                'px 16px;overflow:visible;">\n            <div style="display:flex;flex-direction:column;',
              )
              .concat(v)
              .concat(
                u,
                'overflow:visible;">\n                <div class="adgeist-title-text" style="',
              )
              .concat(c, '">')
              .concat(
                this.title,
                '</div>\n                <div class="adgeist-description-text" style="',
              )
              .concat(l, '">')
              .concat(
                this.description,
                '</div>\n            </div>\n            <div class="cta-button" style="',
              )
              .concat(p)
              .concat(f, 'flex-shrink:0;">Open</div>\n        </div>\n      ');
          },
        },
        {
          key: "renderDisplayHtml",
          value: function e() {
            var t, n, i;
            var a = this.getLayoutConfig();
            var o = this.calculateLayoutDetails(a);
            var r =
              "video" ===
              (null === (t = this.media[0]) || void 0 === t ? void 0 : t.type)
                ? '<video\n              id="adgeist-video"\n              poster="'
                    .concat(
                      (null === (n = this.media[0]) || void 0 === n
                        ? void 0
                        : n.thumbnailUrl) || "",
                      "\" \n              autoplay muted loop\n              playsinline\n              webkit-playsinline\n              style=\"width: 100%; height: 100%; object-fit: contain;\" \n              onloadeddata=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                            if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n              preload=\"auto\"\n            >\n              <source src=\"",
                    )
                    .concat(
                      this.media[0].src || this.placeholderSrc || "",
                      '" type="video/mp4">\n            </video>',
                    )
                : '<img \n              src="'
                    .concat(
                      this.media[0].src || this.placeholderSrc,
                      '"  \n              fallback="',
                    )
                    .concat(
                      (null === (i = this.media[0]) || void 0 === i
                        ? void 0
                        : i.thumbnailUrl) || "",
                      '"\n              alt="',
                    )
                    .concat(
                      this.altText,
                      "\" \n              style=\"width:100%;height:100%;object-fit:contain;\"\n              onload=\"if(window.Android) { window.Android.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\n                      if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:'RENDER_STATUS',message:'Success'})) }\"\n            />",
                    );
            return '\n        <style id="'
              .concat(v, '">')
              .concat(y, '</style>\n        <a href="')
              .concat(
                S(this.ctaUrl),
                '" \n        target="_blank" \n        style="text-decoration:none;color:inherit;"\n        >\n          <div class="card-container adgeist-ad"\n          style="width:',
              )
              .concat(this.width, "px;height:")
              .concat(this.height, "px;display:flex;flex-direction:")
              .concat(
                o.flexDirection,
                ';"\n          >\n            <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;">AD</span>\n            \n            <div class="image-container" style="width:',
              )
              .concat(o.imageWidth, "px;height:")
              .concat(
                o.imageHeight,
                'px;flex-shrink:0;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#d5d4d4ff;">\n              ',
              )
              .concat(r, "\n            </div>\n            \n            ")
              .concat(
                this.renderContentHtml(o),
                "\n          </div>\n        </a>\n      ",
              );
          },
        },
      ])
    );
  })(T);
  var M = (function (e) {
    function t() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (i(this, t), n(this, t, [e]));
    }
    return (
      d(t, e),
      o(t, [
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
            var i = (null == t ? void 0 : t.src) || this.placeholderSrc || "";
            var a =
              (null == t ? void 0 : t.thumbnailUrl) ||
              this.placeholderSrc ||
              "";
            var o = (null == n ? void 0 : n.src) || this.placeholderSrc || "";
            return '\n     <style id="'
              .concat(w, '">')
              .concat(b, '</style>\n    <a href="')
              .concat(
                S(this.ctaUrl),
                '" target="_blank" class=\'companion-ad-container\'>\n      <span style="height:20px;width:20px;position:absolute;top:1px;right:1px;background:#000;color:#fff;font-size:12px;border-radius:2px;z-index:10;place-content:center;display:grid;">AD</span>\n      \n      <video\n        id="adgeist-video"\n        poster="',
              )
              .concat(
                a,
                '" \n        autoplay loop\n        muted\n        playsinline\n        webkit-playsinline\n        controls\n        style="width: 100%; aspect-ratio: 16/9; display: block;" \n        onloadeddata="if(window.Android) { window.Android.postMessage(JSON.stringify({type:\'RENDER_STATUS\',message:\'Success\'})) }\n                      if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.postMessage) { window.webkit.messageHandlers.postMessage.postMessage(JSON.stringify({type:\'RENDER_STATUS\',message:\'Success\'})) }"\n        controlsList="nodownload"\n        disablePictureInPicture\n        preload="auto"\n      >\n        <source src="',
              )
              .concat(
                i,
                '" type="video/mp4">\n      </video>\n      \n      <img \n        src="',
              )
              .concat(o, '"  \n        alt="')
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
      ])
    );
  })(T);
  (!(function () {
    "undefined" != typeof window &&
      ((window.AdCard = T),
      (window.BannerAdCard = E),
      (window.DisplayAdCard = O),
      (window.AdAudioManager = A),
      (window.ensureHttpProtocol = S),
      (window.getAdLayout = k),
      (window.DISPLAY_CSS = y),
      (window.BANNER_CSS = x));
  })(),
    (e.AdAudioManager = A),
    (e.AdCard = T),
    (e.BANNER_CSS = x),
    (e.BANNER_STYLES_ID = m),
    (e.BannerAdCard = E),
    (e.DISPLAY_CSS = y),
    (e.DISPLAY_STYLE_ID = v),
    (e.DisplayAdCard = O),
    (e.ensureHttpProtocol = S),
    (e.getAdLayout = k));
});
