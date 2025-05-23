/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
  })(this, function (t, g, u) {
    "use strict";
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function s(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function e(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function l(o) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? e(Object(r), !0).forEach(function (t) {
              var e, n, i;
              (e = o),
                (i = r[(n = t)]),
                n in e
                  ? Object.defineProperty(e, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[n] = i);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
          : e(Object(r)).forEach(function (t) {
              Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return o;
    }
    (g = g && g.hasOwnProperty("default") ? g.default : g),
      (u = u && u.hasOwnProperty("default") ? u.default : u);
    var n = "transitionend";
    function o(t) {
      var e = this,
        n = !1;
      return (
        g(this).one(_.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || _.triggerTransitionEnd(e);
        }, t),
        this
      );
    }
    var _ = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t;
      },
      getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");
        if (!e || "#" === e) {
          var n = t.getAttribute("href");
          e = n && "#" !== n ? n.trim() : "";
        }
        try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (t) {
        if (!t) return 0;
        var e = g(t).css("transition-duration"),
          n = g(t).css("transition-delay"),
          i = parseFloat(e),
          o = parseFloat(n);
        return i || o
          ? ((e = e.split(",")[0]),
            (n = n.split(",")[0]),
            1e3 * (parseFloat(e) + parseFloat(n)))
          : 0;
      },
      reflow: function (t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function (t) {
        g(t).trigger(n);
      },
      supportsTransitionEnd: function () {
        return Boolean(n);
      },
      isElement: function (t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function (t, e, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var o = n[i],
              r = e[i],
              s =
                r && _.isElement(r)
                  ? "element"
                  : ((a = r),
                    {}.toString
                      .call(a)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase());
            if (!new RegExp(o).test(s))
              throw new Error(
                t.toUpperCase() +
                  ': Option "' +
                  i +
                  '" provided type "' +
                  s +
                  '" but expected type "' +
                  o +
                  '".'
              );
          }
        var a;
      },
      findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" != typeof t.getRootNode)
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
            ? _.findShadowRoot(t.parentNode)
            : null;
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      },
      jQueryDetection: function () {
        if ("undefined" == typeof g)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var t = g.fn.jquery.split(" ")[0].split(".");
        if (
          (t[0] < 2 && t[1] < 9) ||
          (1 === t[0] && 9 === t[1] && t[2] < 1) ||
          4 <= t[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    _.jQueryDetection(),
      (g.fn.emulateTransitionEnd = o),
      (g.event.special[_.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function (t) {
          if (g(t.target).is(this))
            return t.handleObj.handler.apply(this, arguments);
        },
      });
    var r = "alert",
      a = "bs.alert",
      c = "." + a,
      h = g.fn[r],
      f = {
        CLOSE: "close" + c,
        CLOSED: "closed" + c,
        CLICK_DATA_API: "click" + c + ".data-api",
      },
      d = "alert",
      m = "fade",
      p = "show",
      v = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (t.dispose = function () {
            g.removeData(this._element, a), (this._element = null);
          }),
          (t._getRootElement = function (t) {
            var e = _.getSelectorFromElement(t),
              n = !1;
            return (
              e && (n = document.querySelector(e)),
              (n = n || g(t).closest("." + d)[0])
            );
          }),
          (t._triggerCloseEvent = function (t) {
            var e = g.Event(f.CLOSE);
            return g(t).trigger(e), e;
          }),
          (t._removeElement = function (e) {
            var n = this;
            if ((g(e).removeClass(p), g(e).hasClass(m))) {
              var t = _.getTransitionDurationFromElement(e);
              g(e)
                .one(_.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(t);
            } else this._destroyElement(e);
          }),
          (t._destroyElement = function (t) {
            g(t).detach().trigger(f.CLOSED).remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this),
                e = t.data(a);
              e || ((e = new i(this)), t.data(a, e)), "close" === n && e[n](this);
            });
          }),
          (i._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          i
        );
      })();
    g(document).on(
      f.CLICK_DATA_API,
      '[data-dismiss="alert"]',
      v._handleDismiss(new v())
    ),
      (g.fn[r] = v._jQueryInterface),
      (g.fn[r].Constructor = v),
      (g.fn[r].noConflict = function () {
        return (g.fn[r] = h), v._jQueryInterface;
      });
    var y = "button",
      E = "bs.button",
      C = "." + E,
      T = ".data-api",
      b = g.fn[y],
      S = "active",
      D = "btn",
      I = "focus",
      w = '[data-toggle^="button"]',
      A = '[data-toggle="buttons"]',
      N = '[data-toggle="button"]',
      O = '[data-toggle="buttons"] .btn',
      k = 'input:not([type="hidden"])',
      P = ".active",
      L = ".btn",
      j = {
        CLICK_DATA_API: "click" + C + T,
        FOCUS_BLUR_DATA_API: "focus" + C + T + " blur" + C + T,
        LOAD_DATA_API: "load" + C + T,
      },
      H = (function () {
        function n(t) {
          this._element = t;
        }
        var t = n.prototype;
        return (
          (t.toggle = function () {
            var t = !0,
              e = !0,
              n = g(this._element).closest(A)[0];
            if (n) {
              var i = this._element.querySelector(k);
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && this._element.classList.contains(S)) t = !1;
                  else {
                    var o = n.querySelector(P);
                    o && g(o).removeClass(S);
                  }
                else
                  "checkbox" === i.type
                    ? "LABEL" === this._element.tagName &&
                      i.checked === this._element.classList.contains(S) &&
                      (t = !1)
                    : (t = !1);
                t &&
                  ((i.checked = !this._element.classList.contains(S)),
                  g(i).trigger("change")),
                  i.focus(),
                  (e = !1);
              }
            }
            this._element.hasAttribute("disabled") ||
              this._element.classList.contains("disabled") ||
              (e &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains(S)
                ),
              t && g(this._element).toggleClass(S));
          }),
          (t.dispose = function () {
            g.removeData(this._element, E), (this._element = null);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = g(this).data(E);
              t || ((t = new n(this)), g(this).data(E, t)),
                "toggle" === e && t[e]();
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          n
        );
      })();
    g(document)
      .on(j.CLICK_DATA_API, w, function (t) {
        var e = t.target;
        if (
          (g(e).hasClass(D) || (e = g(e).closest(L)[0]),
          !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
        )
          t.preventDefault();
        else {
          var n = e.querySelector(k);
          if (
            n &&
            (n.hasAttribute("disabled") || n.classList.contains("disabled"))
          )
            return void t.preventDefault();
          H._jQueryInterface.call(g(e), "toggle");
        }
      })
      .on(j.FOCUS_BLUR_DATA_API, w, function (t) {
        var e = g(t.target).closest(L)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
      }),
      g(window).on(j.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(O)),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = t[e],
            o = i.querySelector(k);
          o.checked || o.hasAttribute("checked")
            ? i.classList.add(S)
            : i.classList.remove(S);
        }
        for (
          var r = 0, s = (t = [].slice.call(document.querySelectorAll(N))).length;
          r < s;
          r++
        ) {
          var a = t[r];
          "true" === a.getAttribute("aria-pressed")
            ? a.classList.add(S)
            : a.classList.remove(S);
        }
      }),
      (g.fn[y] = H._jQueryInterface),
      (g.fn[y].Constructor = H),
      (g.fn[y].noConflict = function () {
        return (g.fn[y] = b), H._jQueryInterface;
      });
    var R = "carousel",
      x = "bs.carousel",
      F = "." + x,
      U = ".data-api",
      W = g.fn[R],
      q = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      M = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      K = "next",
      Q = "prev",
      B = "left",
      V = "right",
      Y = {
        SLIDE: "slide" + F,
        SLID: "slid" + F,
        KEYDOWN: "keydown" + F,
        MOUSEENTER: "mouseenter" + F,
        MOUSELEAVE: "mouseleave" + F,
        TOUCHSTART: "touchstart" + F,
        TOUCHMOVE: "touchmove" + F,
        TOUCHEND: "touchend" + F,
        POINTERDOWN: "pointerdown" + F,
        POINTERUP: "pointerup" + F,
        DRAG_START: "dragstart" + F,
        LOAD_DATA_API: "load" + F + U,
        CLICK_DATA_API: "click" + F + U,
      },
      z = "carousel",
      X = "active",
      $ = "slide",
      G = "carousel-item-right",
      J = "carousel-item-left",
      Z = "carousel-item-next",
      tt = "carousel-item-prev",
      et = "pointer-event",
      nt = ".active",
      it = ".active.carousel-item",
      ot = ".carousel-item",
      rt = ".carousel-item img",
      st = ".carousel-item-next, .carousel-item-prev",
      at = ".carousel-indicators",
      lt = "[data-slide], [data-slide-to]",
      ct = '[data-ride="carousel"]',
      ht = { TOUCH: "touch", PEN: "pen" },
      ut = (function () {
        function r(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(e)),
            (this._element = t),
            (this._indicatorsElement = this._element.querySelector(at)),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var t = r.prototype;
        return (
          (t.next = function () {
            this._isSliding || this._slide(K);
          }),
          (t.nextWhenVisible = function () {
            !document.hidden &&
              g(this._element).is(":visible") &&
              "hidden" !== g(this._element).css("visibility") &&
              this.next();
          }),
          (t.prev = function () {
            this._isSliding || this._slide(Q);
          }),
          (t.pause = function (t) {
            t || (this._isPaused = !0),
              this._element.querySelector(st) &&
                (_.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (t.to = function (t) {
            var e = this;
            this._activeElement = this._element.querySelector(it);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                g(this._element).one(Y.SLID, function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? K : Q;
                this._slide(i, this._items[t]);
              }
          }),
          (t.dispose = function () {
            g(this._element).off(F),
              g.removeData(this._element, x),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function (t) {
            return (t = l({}, q, {}, t)), _.typeCheckConfig(R, t, M), t;
          }),
          (t._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX;
              (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next();
            }
          }),
          (t._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              g(this._element).on(Y.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                g(this._element)
                  .on(Y.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(Y.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (t._addTouchEventListeners = function () {
            var e = this;
            if (this._touchSupported) {
              var n = function (t) {
                  e._pointerEvent && ht[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent ||
                      (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                i = function (t) {
                  e._pointerEvent &&
                    ht[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              g(this._element.querySelectorAll(rt)).on(
                Y.DRAG_START,
                function (t) {
                  return t.preventDefault();
                }
              ),
                this._pointerEvent
                  ? (g(this._element).on(Y.POINTERDOWN, function (t) {
                      return n(t);
                    }),
                    g(this._element).on(Y.POINTERUP, function (t) {
                      return i(t);
                    }),
                    this._element.classList.add(et))
                  : (g(this._element).on(Y.TOUCHSTART, function (t) {
                      return n(t);
                    }),
                    g(this._element).on(Y.TOUCHMOVE, function (t) {
                      return (function (t) {
                        t.originalEvent.touches &&
                        1 < t.originalEvent.touches.length
                          ? (e.touchDeltaX = 0)
                          : (e.touchDeltaX =
                              t.originalEvent.touches[0].clientX - e.touchStartX);
                      })(t);
                    }),
                    g(this._element).on(Y.TOUCHEND, function (t) {
                      return i(t);
                    }));
            }
          }),
          (t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode
                  ? [].slice.call(t.parentNode.querySelectorAll(ot))
                  : []),
              this._items.indexOf(t)
            );
          }),
          (t._getItemByDirection = function (t, e) {
            var n = t === K,
              i = t === Q,
              o = this._getItemIndex(e),
              r = this._items.length - 1;
            if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
              return e;
            var s = (o + (t === Q ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s];
          }),
          (t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(this._element.querySelector(it)),
              o = g.Event(Y.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n,
              });
            return g(this._element).trigger(o), o;
          }),
          (t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var e = [].slice.call(this._indicatorsElement.querySelectorAll(nt));
              g(e).removeClass(X);
              var n = this._indicatorsElement.children[this._getItemIndex(t)];
              n && g(n).addClass(X);
            }
          }),
          (t._slide = function (t, e) {
            var n,
              i,
              o,
              r = this,
              s = this._element.querySelector(it),
              a = this._getItemIndex(s),
              l = e || (s && this._getItemByDirection(t, s)),
              c = this._getItemIndex(l),
              h = Boolean(this._interval);
            if (
              ((o = t === K ? ((n = J), (i = Z), B) : ((n = G), (i = tt), V)),
              l && g(l).hasClass(X))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
              s &&
              l
            ) {
              (this._isSliding = !0),
                h && this.pause(),
                this._setActiveIndicatorElement(l);
              var u = g.Event(Y.SLID, {
                relatedTarget: l,
                direction: o,
                from: a,
                to: c,
              });
              if (g(this._element).hasClass($)) {
                g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                var f = parseInt(l.getAttribute("data-interval"), 10);
                f
                  ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                    (this._config.interval = f))
                  : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
                var d = _.getTransitionDurationFromElement(s);
                g(s)
                  .one(_.TRANSITION_END, function () {
                    g(l)
                      .removeClass(n + " " + i)
                      .addClass(X),
                      g(s).removeClass(X + " " + i + " " + n),
                      (r._isSliding = !1),
                      setTimeout(function () {
                        return g(r._element).trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(d);
              } else
                g(s).removeClass(X),
                  g(l).addClass(X),
                  (this._isSliding = !1),
                  g(this._element).trigger(u);
              h && this.cycle();
            }
          }),
          (r._jQueryInterface = function (i) {
            return this.each(function () {
              var t = g(this).data(x),
                e = l({}, q, {}, g(this).data());
              "object" == typeof i && (e = l({}, e, {}, i));
              var n = "string" == typeof i ? i : e.slide;
              if (
                (t || ((t = new r(this, e)), g(this).data(x, t)),
                "number" == typeof i)
              )
                t.to(i);
              else if ("string" == typeof n) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              } else e.interval && e.ride && (t.pause(), t.cycle());
            });
          }),
          (r._dataApiClickHandler = function (t) {
            var e = _.getSelectorFromElement(this);
            if (e) {
              var n = g(e)[0];
              if (n && g(n).hasClass(z)) {
                var i = l({}, g(n).data(), {}, g(this).data()),
                  o = this.getAttribute("data-slide-to");
                o && (i.interval = !1),
                  r._jQueryInterface.call(g(n), i),
                  o && g(n).data(x).to(o),
                  t.preventDefault();
              }
            }
          }),
          s(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return q;
              },
            },
          ]),
          r
        );
      })();
    g(document).on(Y.CLICK_DATA_API, lt, ut._dataApiClickHandler),
      g(window).on(Y.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(ct)),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = g(t[e]);
          ut._jQueryInterface.call(i, i.data());
        }
      }),
      (g.fn[R] = ut._jQueryInterface),
      (g.fn[R].Constructor = ut),
      (g.fn[R].noConflict = function () {
        return (g.fn[R] = W), ut._jQueryInterface;
      });
    var ft = "collapse",
      dt = "bs.collapse",
      gt = "." + dt,
      _t = g.fn[ft],
      mt = { toggle: !0, parent: "" },
      pt = { toggle: "boolean", parent: "(string|element)" },
      vt = {
        SHOW: "show" + gt,
        SHOWN: "shown" + gt,
        HIDE: "hide" + gt,
        HIDDEN: "hidden" + gt,
        CLICK_DATA_API: "click" + gt + ".data-api",
      },
      yt = "show",
      Et = "collapse",
      Ct = "collapsing",
      Tt = "collapsed",
      bt = "width",
      St = "height",
      Dt = ".show, .collapsing",
      It = '[data-toggle="collapse"]',
      wt = (function () {
        function a(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(It)),
              i = 0,
              o = n.length;
            i < o;
            i++
          ) {
            var r = n[i],
              s = _.getSelectorFromElement(r),
              a = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (t) {
                  return t === e;
                });
            null !== s &&
              0 < a.length &&
              ((this._selector = s), this._triggerArray.push(r));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return (
          (t.toggle = function () {
            g(this._element).hasClass(yt) ? this.hide() : this.show();
          }),
          (t.show = function () {
            var t,
              e,
              n = this;
            if (
              !this._isTransitioning &&
              !g(this._element).hasClass(yt) &&
              (this._parent &&
                0 ===
                  (t = [].slice
                    .call(this._parent.querySelectorAll(Dt))
                    .filter(function (t) {
                      return "string" == typeof n._config.parent
                        ? t.getAttribute("data-parent") === n._config.parent
                        : t.classList.contains(Et);
                    })).length &&
                (t = null),
              !(
                t &&
                (e = g(t).not(this._selector).data(dt)) &&
                e._isTransitioning
              ))
            ) {
              var i = g.Event(vt.SHOW);
              if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
                t &&
                  (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                  e || g(t).data(dt, null));
                var o = this._getDimension();
                g(this._element).removeClass(Et).addClass(Ct),
                  (this._element.style[o] = 0),
                  this._triggerArray.length &&
                    g(this._triggerArray)
                      .removeClass(Tt)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                  s = _.getTransitionDurationFromElement(this._element);
                g(this._element)
                  .one(_.TRANSITION_END, function () {
                    g(n._element).removeClass(Ct).addClass(Et).addClass(yt),
                      (n._element.style[o] = ""),
                      n.setTransitioning(!1),
                      g(n._element).trigger(vt.SHOWN);
                  })
                  .emulateTransitionEnd(s),
                  (this._element.style[o] = this._element[r] + "px");
              }
            }
          }),
          (t.hide = function () {
            var t = this;
            if (!this._isTransitioning && g(this._element).hasClass(yt)) {
              var e = g.Event(vt.HIDE);
              if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + "px"),
                  _.reflow(this._element),
                  g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);
                var i = this._triggerArray.length;
                if (0 < i)
                  for (var o = 0; o < i; o++) {
                    var r = this._triggerArray[o],
                      s = _.getSelectorFromElement(r);
                    if (null !== s)
                      g([].slice.call(document.querySelectorAll(s))).hasClass(
                        yt
                      ) || g(r).addClass(Tt).attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = "";
                var a = _.getTransitionDurationFromElement(this._element);
                g(this._element)
                  .one(_.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      g(t._element)
                        .removeClass(Ct)
                        .addClass(Et)
                        .trigger(vt.HIDDEN);
                  })
                  .emulateTransitionEnd(a);
              }
            }
          }),
          (t.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (t.dispose = function () {
            g.removeData(this._element, dt),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function (t) {
            return (
              ((t = l({}, mt, {}, t)).toggle = Boolean(t.toggle)),
              _.typeCheckConfig(ft, t, pt),
              t
            );
          }),
          (t._getDimension = function () {
            return g(this._element).hasClass(bt) ? bt : St;
          }),
          (t._getParent = function () {
            var t,
              n = this;
            _.isElement(this._config.parent)
              ? ((t = this._config.parent),
                "undefined" != typeof this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = document.querySelector(this._config.parent));
            var e =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              i = [].slice.call(t.querySelectorAll(e));
            return (
              g(i).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
              }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function (t, e) {
            var n = g(t).hasClass(yt);
            e.length && g(e).toggleClass(Tt, !n).attr("aria-expanded", n);
          }),
          (a._getTargetFromElement = function (t) {
            var e = _.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var t = g(this),
                e = t.data(dt),
                n = l(
                  {},
                  mt,
                  {},
                  t.data(),
                  {},
                  "object" == typeof i && i ? i : {}
                );
              if (
                (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || ((e = new a(this, n)), t.data(dt, e)),
                "string" == typeof i)
              ) {
                if ("undefined" == typeof e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          s(a, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return mt;
              },
            },
          ]),
          a
        );
      })();
    g(document).on(vt.CLICK_DATA_API, It, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = g(this),
        e = _.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(e));
      g(i).each(function () {
        var t = g(this),
          e = t.data(dt) ? "toggle" : n.data();
        wt._jQueryInterface.call(t, e);
      });
    }),
      (g.fn[ft] = wt._jQueryInterface),
      (g.fn[ft].Constructor = wt),
      (g.fn[ft].noConflict = function () {
        return (g.fn[ft] = _t), wt._jQueryInterface;
      });
    var At = "dropdown",
      Nt = "bs.dropdown",
      Ot = "." + Nt,
      kt = ".data-api",
      Pt = g.fn[At],
      Lt = new RegExp("38|40|27"),
      jt = {
        HIDE: "hide" + Ot,
        HIDDEN: "hidden" + Ot,
        SHOW: "show" + Ot,
        SHOWN: "shown" + Ot,
        CLICK: "click" + Ot,
        CLICK_DATA_API: "click" + Ot + kt,
        KEYDOWN_DATA_API: "keydown" + Ot + kt,
        KEYUP_DATA_API: "keyup" + Ot + kt,
      },
      Ht = "disabled",
      Rt = "show",
      xt = "dropup",
      Ft = "dropright",
      Ut = "dropleft",
      Wt = "dropdown-menu-right",
      qt = "position-static",
      Mt = '[data-toggle="dropdown"]',
      Kt = ".dropdown form",
      Qt = ".dropdown-menu",
      Bt = ".navbar-nav",
      Vt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Yt = "top-start",
      zt = "top-end",
      Xt = "bottom-start",
      $t = "bottom-end",
      Gt = "right-start",
      Jt = "left-start",
      Zt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      te = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      ee = (function () {
        function c(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = c.prototype;
        return (
          (t.toggle = function () {
            if (!this._element.disabled && !g(this._element).hasClass(Ht)) {
              var t = g(this._menu).hasClass(Rt);
              c._clearMenus(), t || this.show(!0);
            }
          }),
          (t.show = function (t) {
            if (
              (void 0 === t && (t = !1),
              !(
                this._element.disabled ||
                g(this._element).hasClass(Ht) ||
                g(this._menu).hasClass(Rt)
              ))
            ) {
              var e = { relatedTarget: this._element },
                n = g.Event(jt.SHOW, e),
                i = c._getParentFromElement(this._element);
              if ((g(i).trigger(n), !n.isDefaultPrevented())) {
                if (!this._inNavbar && t) {
                  if ("undefined" == typeof u)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var o = this._element;
                  "parent" === this._config.reference
                    ? (o = i)
                    : _.isElement(this._config.reference) &&
                      ((o = this._config.reference),
                      "undefined" != typeof this._config.reference.jquery &&
                        (o = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary && g(i).addClass(qt),
                    (this._popper = new u(
                      o,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === g(i).closest(Bt).length &&
                  g(document.body).children().on("mouseover", null, g.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  g(this._menu).toggleClass(Rt),
                  g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN, e));
              }
            }
          }),
          (t.hide = function () {
            if (
              !this._element.disabled &&
              !g(this._element).hasClass(Ht) &&
              g(this._menu).hasClass(Rt)
            ) {
              var t = { relatedTarget: this._element },
                e = g.Event(jt.HIDE, t),
                n = c._getParentFromElement(this._element);
              g(n).trigger(e),
                e.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  g(this._menu).toggleClass(Rt),
                  g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN, t)));
            }
          }),
          (t.dispose = function () {
            g.removeData(this._element, Nt),
              g(this._element).off(Ot),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            g(this._element).on(jt.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (t) {
            return (
              (t = l(
                {},
                this.constructor.Default,
                {},
                g(this._element).data(),
                {},
                t
              )),
              _.typeCheckConfig(At, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function () {
            if (!this._menu) {
              var t = c._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(Qt));
            }
            return this._menu;
          }),
          (t._getPlacement = function () {
            var t = g(this._element.parentNode),
              e = Xt;
            return (
              t.hasClass(xt)
                ? ((e = Yt), g(this._menu).hasClass(Wt) && (e = zt))
                : t.hasClass(Ft)
                ? (e = Gt)
                : t.hasClass(Ut)
                ? (e = Jt)
                : g(this._menu).hasClass(Wt) && (e = $t),
              e
            );
          }),
          (t._detectNavbar = function () {
            return 0 < g(this._element).closest(".navbar").length;
          }),
          (t._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this._config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = l(
                        {},
                        t.offsets,
                        {},
                        e._config.offset(t.offsets, e._element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this._config.offset),
              t
            );
          }),
          (t._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (t.modifiers.applyStyle = { enabled: !1 }),
              l({}, t, {}, this._config.popperConfig)
            );
          }),
          (c._jQueryInterface = function (e) {
            return this.each(function () {
              var t = g(this).data(Nt);
              if (
                (t ||
                  ((t = new c(this, "object" == typeof e ? e : null)),
                  g(this).data(Nt, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          (c._clearMenus = function (t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (
                var e = [].slice.call(document.querySelectorAll(Mt)),
                  n = 0,
                  i = e.length;
                n < i;
                n++
              ) {
                var o = c._getParentFromElement(e[n]),
                  r = g(e[n]).data(Nt),
                  s = { relatedTarget: e[n] };
                if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                  var a = r._menu;
                  if (
                    g(o).hasClass(Rt) &&
                    !(
                      t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      g.contains(o, t.target)
                    )
                  ) {
                    var l = g.Event(jt.HIDE, s);
                    g(o).trigger(l),
                      l.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          g(document.body)
                            .children()
                            .off("mouseover", null, g.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        r._popper && r._popper.destroy(),
                        g(a).removeClass(Rt),
                        g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN, s)));
                  }
                }
              }
          }),
          (c._getParentFromElement = function (t) {
            var e,
              n = _.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
          }),
          (c._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        g(t.target).closest(Qt).length))
                  )
                : Lt.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !g(this).hasClass(Ht))
            ) {
              var e = c._getParentFromElement(this),
                n = g(e).hasClass(Rt);
              if (n || 27 !== t.which)
                if (n && (!n || (27 !== t.which && 32 !== t.which))) {
                  var i = [].slice
                    .call(e.querySelectorAll(Vt))
                    .filter(function (t) {
                      return g(t).is(":visible");
                    });
                  if (0 !== i.length) {
                    var o = i.indexOf(t.target);
                    38 === t.which && 0 < o && o--,
                      40 === t.which && o < i.length - 1 && o++,
                      o < 0 && (o = 0),
                      i[o].focus();
                  }
                } else {
                  if (27 === t.which) {
                    var r = e.querySelector(Mt);
                    g(r).trigger("focus");
                  }
                  g(this).trigger("click");
                }
            }
          }),
          s(c, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Zt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return te;
              },
            },
          ]),
          c
        );
      })();
    g(document)
      .on(jt.KEYDOWN_DATA_API, Mt, ee._dataApiKeydownHandler)
      .on(jt.KEYDOWN_DATA_API, Qt, ee._dataApiKeydownHandler)
      .on(jt.CLICK_DATA_API + " " + jt.KEYUP_DATA_API, ee._clearMenus)
      .on(jt.CLICK_DATA_API, Mt, function (t) {
        t.preventDefault(),
          t.stopPropagation(),
          ee._jQueryInterface.call(g(this), "toggle");
      })
      .on(jt.CLICK_DATA_API, Kt, function (t) {
        t.stopPropagation();
      }),
      (g.fn[At] = ee._jQueryInterface),
      (g.fn[At].Constructor = ee),
      (g.fn[At].noConflict = function () {
        return (g.fn[At] = Pt), ee._jQueryInterface;
      });
    var ne = "modal",
      ie = "bs.modal",
      oe = "." + ie,
      re = g.fn[ne],
      se = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      ae = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      le = {
        HIDE: "hide" + oe,
        HIDE_PREVENTED: "hidePrevented" + oe,
        HIDDEN: "hidden" + oe,
        SHOW: "show" + oe,
        SHOWN: "shown" + oe,
        FOCUSIN: "focusin" + oe,
        RESIZE: "resize" + oe,
        CLICK_DISMISS: "click.dismiss" + oe,
        KEYDOWN_DISMISS: "keydown.dismiss" + oe,
        MOUSEUP_DISMISS: "mouseup.dismiss" + oe,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + oe,
        CLICK_DATA_API: "click" + oe + ".data-api",
      },
      ce = "modal-dialog-scrollable",
      he = "modal-scrollbar-measure",
      ue = "modal-backdrop",
      fe = "modal-open",
      de = "fade",
      ge = "show",
      _e = "modal-static",
      me = ".modal-dialog",
      pe = ".modal-body",
      ve = '[data-toggle="modal"]',
      ye = '[data-dismiss="modal"]',
      Ee = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ce = ".sticky-top",
      Te = (function () {
        function o(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector(me)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var t = o.prototype;
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function (t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
              g(this._element).hasClass(de) && (this._isTransitioning = !0);
              var n = g.Event(le.SHOW, { relatedTarget: t });
              g(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  g(this._element).on(le.CLICK_DISMISS, ye, function (t) {
                    return e.hide(t);
                  }),
                  g(this._dialog).on(le.MOUSEDOWN_DISMISS, function () {
                    g(e._element).one(le.MOUSEUP_DISMISS, function (t) {
                      g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t);
                  }));
            }
          }),
          (t.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              var n = g.Event(le.HIDE);
              if (
                (g(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = g(this._element).hasClass(de);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  g(document).off(le.FOCUSIN),
                  g(this._element).removeClass(ge),
                  g(this._element).off(le.CLICK_DISMISS),
                  g(this._dialog).off(le.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var o = _.getTransitionDurationFromElement(this._element);
                  g(this._element)
                    .one(_.TRANSITION_END, function (t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(o);
                } else this._hideModal();
              }
            }
          }),
          (t.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
              return g(t).off(oe);
            }),
              g(document).off(le.FOCUSIN),
              g.removeData(this._element, ie),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (t) {
            return (t = l({}, se, {}, t)), _.typeCheckConfig(ne, t, ae), t;
          }),
          (t._triggerBackdropTransition = function () {
            var t = this;
            if ("static" === this._config.backdrop) {
              var e = g.Event(le.HIDE_PREVENTED);
              if ((g(this._element).trigger(e), e.defaultPrevented)) return;
              this._element.classList.add(_e);
              var n = _.getTransitionDurationFromElement(this._element);
              g(this._element)
                .one(_.TRANSITION_END, function () {
                  t._element.classList.remove(_e);
                })
                .emulateTransitionEnd(n),
                this._element.focus();
            } else this.hide();
          }),
          (t._showElement = function (t) {
            var e = this,
              n = g(this._element).hasClass(de),
              i = this._dialog ? this._dialog.querySelector(pe) : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              g(this._dialog).hasClass(ce) && i
                ? (i.scrollTop = 0)
                : (this._element.scrollTop = 0),
              n && _.reflow(this._element),
              g(this._element).addClass(ge),
              this._config.focus && this._enforceFocus();
            function o() {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                g(e._element).trigger(r);
            }
            var r = g.Event(le.SHOWN, { relatedTarget: t });
            if (n) {
              var s = _.getTransitionDurationFromElement(this._dialog);
              g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(s);
            } else o();
          }),
          (t._enforceFocus = function () {
            var e = this;
            g(document)
              .off(le.FOCUSIN)
              .on(le.FOCUSIN, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === g(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? g(this._element).on(le.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && e._triggerBackdropTransition();
                })
              : this._isShown || g(this._element).off(le.KEYDOWN_DISMISS);
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? g(window).on(le.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : g(window).off(le.RESIZE);
          }),
          (t._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                g(document.body).removeClass(fe),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  g(t._element).trigger(le.HIDDEN);
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              (g(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (t) {
            var e = this,
              n = g(this._element).hasClass(de) ? de : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = ue),
                n && this._backdrop.classList.add(n),
                g(this._backdrop).appendTo(document.body),
                g(this._element).on(le.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      e._triggerBackdropTransition();
                }),
                n && _.reflow(this._backdrop),
                g(this._backdrop).addClass(ge),
                !t)
              )
                return;
              if (!n) return void t();
              var i = _.getTransitionDurationFromElement(this._backdrop);
              g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              g(this._backdrop).removeClass(ge);
              var o = function () {
                e._removeBackdrop(), t && t();
              };
              if (g(this._element).hasClass(de)) {
                var r = _.getTransitionDurationFromElement(this._backdrop);
                g(this._backdrop)
                  .one(_.TRANSITION_END, o)
                  .emulateTransitionEnd(r);
              } else o();
            } else t && t();
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight = this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var o = this;
            if (this._isBodyOverflowing) {
              var t = [].slice.call(document.querySelectorAll(Ee)),
                e = [].slice.call(document.querySelectorAll(Ce));
              g(t).each(function (t, e) {
                var n = e.style.paddingRight,
                  i = g(e).css("padding-right");
                g(e)
                  .data("padding-right", n)
                  .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
              }),
                g(e).each(function (t, e) {
                  var n = e.style.marginRight,
                    i = g(e).css("margin-right");
                  g(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) - o._scrollbarWidth + "px"
                    );
                });
              var n = document.body.style.paddingRight,
                i = g(document.body).css("padding-right");
              g(document.body)
                .data("padding-right", n)
                .css(
                  "padding-right",
                  parseFloat(i) + this._scrollbarWidth + "px"
                );
            }
            g(document.body).addClass(fe);
          }),
          (t._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(Ee));
            g(t).each(function (t, e) {
              var n = g(e).data("padding-right");
              g(e).removeData("padding-right"), (e.style.paddingRight = n || "");
            });
            var e = [].slice.call(document.querySelectorAll("" + Ce));
            g(e).each(function (t, e) {
              var n = g(e).data("margin-right");
              "undefined" != typeof n &&
                g(e).css("margin-right", n).removeData("margin-right");
            });
            var n = g(document.body).data("padding-right");
            g(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = he), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (o._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = g(this).data(ie),
                e = l(
                  {},
                  se,
                  {},
                  g(this).data(),
                  {},
                  "object" == typeof n && n ? n : {}
                );
              if (
                (t || ((t = new o(this, e)), g(this).data(ie, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return se;
              },
            },
          ]),
          o
        );
      })();
    g(document).on(le.CLICK_DATA_API, ve, function (t) {
      var e,
        n = this,
        i = _.getSelectorFromElement(this);
      i && (e = document.querySelector(i));
      var o = g(e).data(ie) ? "toggle" : l({}, g(e).data(), {}, g(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var r = g(e).one(le.SHOW, function (t) {
        t.isDefaultPrevented() ||
          r.one(le.HIDDEN, function () {
            g(n).is(":visible") && n.focus();
          });
      });
      Te._jQueryInterface.call(g(e), o, this);
    }),
      (g.fn[ne] = Te._jQueryInterface),
      (g.fn[ne].Constructor = Te),
      (g.fn[ne].noConflict = function () {
        return (g.fn[ne] = re), Te._jQueryInterface;
      });
    var be = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      Se = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Ie =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function we(t, r, e) {
      if (0 === t.length) return t;
      if (e && "function" == typeof e) return e(t);
      for (
        var n = new window.DOMParser().parseFromString(t, "text/html"),
          s = Object.keys(r),
          a = [].slice.call(n.body.querySelectorAll("*")),
          i = function (t) {
            var e = a[t],
              n = e.nodeName.toLowerCase();
            if (-1 === s.indexOf(e.nodeName.toLowerCase()))
              return e.parentNode.removeChild(e), "continue";
            var i = [].slice.call(e.attributes),
              o = [].concat(r["*"] || [], r[n] || []);
            i.forEach(function (t) {
              !(function (t, e) {
                var n = t.nodeName.toLowerCase();
                if (-1 !== e.indexOf(n))
                  return (
                    -1 === be.indexOf(n) ||
                    Boolean(t.nodeValue.match(De) || t.nodeValue.match(Ie))
                  );
                for (
                  var i = e.filter(function (t) {
                      return t instanceof RegExp;
                    }),
                    o = 0,
                    r = i.length;
                  o < r;
                  o++
                )
                  if (n.match(i[o])) return !0;
                return !1;
              })(t, o) && e.removeAttribute(t.nodeName);
            });
          },
          o = 0,
          l = a.length;
        o < l;
        o++
      )
        i(o);
      return n.body.innerHTML;
    }
    var Ae = "tooltip",
      Ne = "bs.tooltip",
      Oe = "." + Ne,
      ke = g.fn[Ae],
      Pe = "bs-tooltip",
      Le = new RegExp("(^|\\s)" + Pe + "\\S+", "g"),
      je = ["sanitize", "whiteList", "sanitizeFn"],
      He = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      Re = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      xe = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Se,
        popperConfig: null,
      },
      Fe = "show",
      Ue = "out",
      We = {
        HIDE: "hide" + Oe,
        HIDDEN: "hidden" + Oe,
        SHOW: "show" + Oe,
        SHOWN: "shown" + Oe,
        INSERTED: "inserted" + Oe,
        CLICK: "click" + Oe,
        FOCUSIN: "focusin" + Oe,
        FOCUSOUT: "focusout" + Oe,
        MOUSEENTER: "mouseenter" + Oe,
        MOUSELEAVE: "mouseleave" + Oe,
      },
      qe = "fade",
      Me = "show",
      Ke = ".tooltip-inner",
      Qe = ".arrow",
      Be = "hover",
      Ve = "focus",
      Ye = "click",
      ze = "manual",
      Xe = (function () {
        function i(t, e) {
          if ("undefined" == typeof u)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = g(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  g(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (g(this.getTipElement()).hasClass(Me))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              g.removeData(this.element, this.constructor.DATA_KEY),
              g(this.element).off(this.constructor.EVENT_KEY),
              g(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && g(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ("none" === g(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t = g.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              g(this.element).trigger(t);
              var n = _.findShadowRoot(this.element),
                i = g.contains(
                  null !== n ? n : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (t.isDefaultPrevented() || !i) return;
              var o = this.getTipElement(),
                r = _.getUID(this.constructor.NAME);
              o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && g(o).addClass(qe);
              var s =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, o, this.element)
                    : this.config.placement,
                a = this._getAttachment(s);
              this.addAttachmentClass(a);
              var l = this._getContainer();
              g(o).data(this.constructor.DATA_KEY, this),
                g.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || g(o).appendTo(l),
                g(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new u(this.element, o, this._getPopperConfig(a))),
                g(o).addClass(Me),
                "ontouchstart" in document.documentElement &&
                  g(document.body).children().on("mouseover", null, g.noop);
              var c = function () {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  g(e.element).trigger(e.constructor.Event.SHOWN),
                  t === Ue && e._leave(null, e);
              };
              if (g(this.tip).hasClass(qe)) {
                var h = _.getTransitionDurationFromElement(this.tip);
                g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
              } else c();
            }
          }),
          (t.hide = function (t) {
            function e() {
              n._hoverState !== Fe && i.parentNode && i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                g(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            }
            var n = this,
              i = this.getTipElement(),
              o = g.Event(this.constructor.Event.HIDE);
            if ((g(this.element).trigger(o), !o.isDefaultPrevented())) {
              if (
                (g(i).removeClass(Me),
                "ontouchstart" in document.documentElement &&
                  g(document.body).children().off("mouseover", null, g.noop),
                (this._activeTrigger[Ye] = !1),
                (this._activeTrigger[Ve] = !1),
                (this._activeTrigger[Be] = !1),
                g(this.tip).hasClass(qe))
              ) {
                var r = _.getTransitionDurationFromElement(i);
                g(i).one(_.TRANSITION_END, e).emulateTransitionEnd(r);
              } else e();
              this._hoverState = "";
            }
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (t) {
            g(this.getTipElement()).addClass(Pe + "-" + t);
          }),
          (t.getTipElement = function () {
            return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
          }),
          (t.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(g(t.querySelectorAll(Ke)), this.getTitle()),
              g(t).removeClass(qe + " " + Me);
          }),
          (t.setElementContent = function (t, e) {
            "object" != typeof e || (!e.nodeType && !e.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (e = we(e, this.config.whiteList, this.config.sanitizeFn)),
                  t.html(e))
                : t.text(e)
              : this.config.html
              ? g(e).parent().is(t) || t.empty().append(e)
              : t.text(g(e).text());
          }),
          (t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (t =
              t ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title));
          }),
          (t._getPopperConfig = function (t) {
            var e = this;
            return l(
              {},
              {
                placement: t,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: Qe },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              },
              {},
              this.config.popperConfig
            );
          }),
          (t._getOffset = function () {
            var e = this,
              t = {};
            return (
              "function" == typeof this.config.offset
                ? (t.fn = function (t) {
                    return (
                      (t.offsets = l(
                        {},
                        t.offsets,
                        {},
                        e.config.offset(t.offsets, e.element) || {}
                      )),
                      t
                    );
                  })
                : (t.offset = this.config.offset),
              t
            );
          }),
          (t._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : _.isElement(this.config.container)
              ? g(this.config.container)
              : g(document).find(this.config.container);
          }),
          (t._getAttachment = function (t) {
            return Re[t.toUpperCase()];
          }),
          (t._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (t) {
              if ("click" === t)
                g(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (t) {
                    return i.toggle(t);
                  }
                );
              else if (t !== ze) {
                var e =
                    t === Be
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    t === Be
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                g(i.element)
                  .on(e, i.config.selector, function (t) {
                    return i._enter(t);
                  })
                  .on(n, i.config.selector, function (t) {
                    return i._leave(t);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                i.element && i.hide();
              }),
              g(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (!this.element.getAttribute("title") && "string" == t) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              g(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Ve : Be] = !0),
              g(e.getTipElement()).hasClass(Me) || e._hoverState === Fe
                ? (e._hoverState = Fe)
                : (clearTimeout(e._timeout),
                  (e._hoverState = Fe),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === Fe && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              g(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Ve : Be] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = Ue),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Ue && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function (t) {
            var e = g(this.element).data();
            return (
              Object.keys(e).forEach(function (t) {
                -1 !== je.indexOf(t) && delete e[t];
              }),
              "number" ==
                typeof (t = l(
                  {},
                  this.constructor.Default,
                  {},
                  e,
                  {},
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content && (t.content = t.content.toString()),
              _.typeCheckConfig(Ae, t, this.constructor.DefaultType),
              t.sanitize &&
                (t.template = we(t.template, t.whiteList, t.sanitizeFn)),
              t
            );
          }),
          (t._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function () {
            var t = g(this.getTipElement()),
              e = t.attr("class").match(Le);
            null !== e && e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function (t) {
            var e = t.instance;
            (this.tip = e.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (g(t).removeClass(qe),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this).data(Ne),
                e = "object" == typeof n && n;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), g(this).data(Ne, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return xe;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Ae;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ne;
              },
            },
            {
              key: "Event",
              get: function () {
                return We;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Oe;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return He;
              },
            },
          ]),
          i
        );
      })();
    (g.fn[Ae] = Xe._jQueryInterface),
      (g.fn[Ae].Constructor = Xe),
      (g.fn[Ae].noConflict = function () {
        return (g.fn[Ae] = ke), Xe._jQueryInterface;
      });
    var $e = "popover",
      Ge = "bs.popover",
      Je = "." + Ge,
      Ze = g.fn[$e],
      tn = "bs-popover",
      en = new RegExp("(^|\\s)" + tn + "\\S+", "g"),
      nn = l({}, Xe.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      on = l({}, Xe.DefaultType, { content: "(string|element|function)" }),
      rn = "fade",
      sn = "show",
      an = ".popover-header",
      ln = ".popover-body",
      cn = {
        HIDE: "hide" + Je,
        HIDDEN: "hidden" + Je,
        SHOW: "show" + Je,
        SHOWN: "shown" + Je,
        INSERTED: "inserted" + Je,
        CLICK: "click" + Je,
        FOCUSIN: "focusin" + Je,
        FOCUSOUT: "focusout" + Je,
        MOUSEENTER: "mouseenter" + Je,
        MOUSELEAVE: "mouseleave" + Je,
      },
      hn = (function (t) {
        function i() {
          return t.apply(this, arguments) || this;
        }
        !(function (t, e) {
          (t.prototype = Object.create(e.prototype)),
            ((t.prototype.constructor = t).__proto__ = e);
        })(i, t);
        var e = i.prototype;
        return (
          (e.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (e.addAttachmentClass = function (t) {
            g(this.getTipElement()).addClass(tn + "-" + t);
          }),
          (e.getTipElement = function () {
            return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
          }),
          (e.setContent = function () {
            var t = g(this.getTipElement());
            this.setElementContent(t.find(an), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(ln), e),
              t.removeClass(rn + " " + sn);
          }),
          (e._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (e._cleanTipClass = function () {
            var t = g(this.getTipElement()),
              e = t.attr("class").match(en);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this).data(Ge),
                e = "object" == typeof n ? n : null;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), g(this).data(Ge, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return nn;
              },
            },
            {
              key: "NAME",
              get: function () {
                return $e;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ge;
              },
            },
            {
              key: "Event",
              get: function () {
                return cn;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Je;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return on;
              },
            },
          ]),
          i
        );
      })(Xe);
    (g.fn[$e] = hn._jQueryInterface),
      (g.fn[$e].Constructor = hn),
      (g.fn[$e].noConflict = function () {
        return (g.fn[$e] = Ze), hn._jQueryInterface;
      });
    var un = "scrollspy",
      fn = "bs.scrollspy",
      dn = "." + fn,
      gn = g.fn[un],
      _n = { offset: 10, method: "auto", target: "" },
      mn = { offset: "number", method: "string", target: "(string|element)" },
      pn = {
        ACTIVATE: "activate" + dn,
        SCROLL: "scroll" + dn,
        LOAD_DATA_API: "load" + dn + ".data-api",
      },
      vn = "dropdown-item",
      yn = "active",
      En = '[data-spy="scroll"]',
      Cn = ".nav, .list-group",
      Tn = ".nav-link",
      bn = ".nav-item",
      Sn = ".list-group-item",
      Dn = ".dropdown",
      In = ".dropdown-item",
      wn = ".dropdown-toggle",
      An = "offset",
      Nn = "position",
      On = (function () {
        function n(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              Tn +
              "," +
              this._config.target +
              " " +
              Sn +
              "," +
              this._config.target +
              " " +
              In),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            g(this._scrollElement).on(pn.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var t = n.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? An : Nn,
              o = "auto" === this._config.method ? t : this._config.method,
              r = o === Nn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var e,
                    n = _.getSelectorFromElement(t);
                  if ((n && (e = document.querySelector(n)), e)) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [g(e)[o]().top + r, n];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            g.removeData(this._element, fn),
              g(this._scrollElement).off(dn),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = l({}, _n, {}, "object" == typeof t && t ? t : {}))
                .target
            ) {
              var e = g(t.target).attr("id");
              e || ((e = _.getUID(un)), g(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return _.typeCheckConfig(un, t, mn), t;
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; ) {
                this._activeTarget !== this._targets[o] &&
                  t >= this._offsets[o] &&
                  ("undefined" == typeof this._offsets[o + 1] ||
                    t < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
              }
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(",").map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              }),
              n = g([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(vn)
              ? (n.closest(Dn).find(wn).addClass(yn), n.addClass(yn))
              : (n.addClass(yn),
                n
                  .parents(Cn)
                  .prev(Tn + ", " + Sn)
                  .addClass(yn),
                n.parents(Cn).prev(bn).children(Tn).addClass(yn)),
              g(this._scrollElement).trigger(pn.ACTIVATE, { relatedTarget: e });
          }),
          (t._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (t) {
                return t.classList.contains(yn);
              })
              .forEach(function (t) {
                return t.classList.remove(yn);
              });
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = g(this).data(fn);
              if (
                (t ||
                  ((t = new n(this, "object" == typeof e && e)),
                  g(this).data(fn, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return _n;
              },
            },
          ]),
          n
        );
      })();
    g(window).on(pn.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(En)), e = t.length;
        e--;
  
      ) {
        var n = g(t[e]);
        On._jQueryInterface.call(n, n.data());
      }
    }),
      (g.fn[un] = On._jQueryInterface),
      (g.fn[un].Constructor = On),
      (g.fn[un].noConflict = function () {
        return (g.fn[un] = gn), On._jQueryInterface;
      });
    var kn = "bs.tab",
      Pn = "." + kn,
      Ln = g.fn.tab,
      jn = {
        HIDE: "hide" + Pn,
        HIDDEN: "hidden" + Pn,
        SHOW: "show" + Pn,
        SHOWN: "shown" + Pn,
        CLICK_DATA_API: "click" + Pn + ".data-api",
      },
      Hn = "dropdown-menu",
      Rn = "active",
      xn = "disabled",
      Fn = "fade",
      Un = "show",
      Wn = ".dropdown",
      qn = ".nav, .list-group",
      Mn = ".active",
      Kn = "> li > .active",
      Qn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Bn = ".dropdown-toggle",
      Vn = "> .dropdown-menu .active",
      Yn = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  g(this._element).hasClass(Rn)) ||
                g(this._element).hasClass(xn)
              )
            ) {
              var t,
                i,
                e = g(this._element).closest(qn)[0],
                o = _.getSelectorFromElement(this._element);
              if (e) {
                var r = "UL" === e.nodeName || "OL" === e.nodeName ? Kn : Mn;
                i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
              }
              var s = g.Event(jn.HIDE, { relatedTarget: this._element }),
                a = g.Event(jn.SHOW, { relatedTarget: i });
              if (
                (i && g(i).trigger(s),
                g(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                o && (t = document.querySelector(o)),
                  this._activate(this._element, e);
                var l = function () {
                  var t = g.Event(jn.HIDDEN, { relatedTarget: n._element }),
                    e = g.Event(jn.SHOWN, { relatedTarget: i });
                  g(i).trigger(t), g(n._element).trigger(e);
                };
                t ? this._activate(t, t.parentNode, l) : l();
              }
            }
          }),
          (t.dispose = function () {
            g.removeData(this._element, kn), (this._element = null);
          }),
          (t._activate = function (t, e, n) {
            function i() {
              return o._transitionComplete(t, r, n);
            }
            var o = this,
              r = (
                !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                  ? g(e).children(Mn)
                  : g(e).find(Kn)
              )[0],
              s = n && r && g(r).hasClass(Fn);
            if (r && s) {
              var a = _.getTransitionDurationFromElement(r);
              g(r)
                .removeClass(Un)
                .one(_.TRANSITION_END, i)
                .emulateTransitionEnd(a);
            } else i();
          }),
          (t._transitionComplete = function (t, e, n) {
            if (e) {
              g(e).removeClass(Rn);
              var i = g(e.parentNode).find(Vn)[0];
              i && g(i).removeClass(Rn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (g(t).addClass(Rn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              _.reflow(t),
              t.classList.contains(Fn) && t.classList.add(Un),
              t.parentNode && g(t.parentNode).hasClass(Hn))
            ) {
              var o = g(t).closest(Wn)[0];
              if (o) {
                var r = [].slice.call(o.querySelectorAll(Bn));
                g(r).addClass(Rn);
              }
              t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this),
                e = t.data(kn);
              if (
                (e || ((e = new i(this)), t.data(kn, e)), "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          i
        );
      })();
    g(document).on(jn.CLICK_DATA_API, Qn, function (t) {
      t.preventDefault(), Yn._jQueryInterface.call(g(this), "show");
    }),
      (g.fn.tab = Yn._jQueryInterface),
      (g.fn.tab.Constructor = Yn),
      (g.fn.tab.noConflict = function () {
        return (g.fn.tab = Ln), Yn._jQueryInterface;
      });
    var zn = "toast",
      Xn = "bs.toast",
      $n = "." + Xn,
      Gn = g.fn[zn],
      Jn = {
        CLICK_DISMISS: "click.dismiss" + $n,
        HIDE: "hide" + $n,
        HIDDEN: "hidden" + $n,
        SHOW: "show" + $n,
        SHOWN: "shown" + $n,
      },
      Zn = "fade",
      ti = "hide",
      ei = "show",
      ni = "showing",
      ii = { animation: "boolean", autohide: "boolean", delay: "number" },
      oi = { animation: !0, autohide: !0, delay: 500 },
      ri = '[data-dismiss="toast"]',
      si = (function () {
        function i(t, e) {
          (this._element = t),
            (this._config = this._getConfig(e)),
            (this._timeout = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var t = this,
              e = g.Event(Jn.SHOW);
            if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
              this._config.animation && this._element.classList.add(Zn);
              var n = function () {
                t._element.classList.remove(ni),
                  t._element.classList.add(ei),
                  g(t._element).trigger(Jn.SHOWN),
                  t._config.autohide &&
                    (t._timeout = setTimeout(function () {
                      t.hide();
                    }, t._config.delay));
              };
              if (
                (this._element.classList.remove(ti),
                _.reflow(this._element),
                this._element.classList.add(ni),
                this._config.animation)
              ) {
                var i = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, n).emulateTransitionEnd(i);
              } else n();
            }
          }),
          (t.hide = function () {
            if (this._element.classList.contains(ei)) {
              var t = g.Event(Jn.HIDE);
              g(this._element).trigger(t),
                t.isDefaultPrevented() || this._close();
            }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(ei) &&
                this._element.classList.remove(ei),
              g(this._element).off(Jn.CLICK_DISMISS),
              g.removeData(this._element, Xn),
              (this._element = null),
              (this._config = null);
          }),
          (t._getConfig = function (t) {
            return (
              (t = l(
                {},
                oi,
                {},
                g(this._element).data(),
                {},
                "object" == typeof t && t ? t : {}
              )),
              _.typeCheckConfig(zn, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._setListeners = function () {
            var t = this;
            g(this._element).on(Jn.CLICK_DISMISS, ri, function () {
              return t.hide();
            });
          }),
          (t._close = function () {
            function t() {
              e._element.classList.add(ti), g(e._element).trigger(Jn.HIDDEN);
            }
            var e = this;
            if ((this._element.classList.remove(ei), this._config.animation)) {
              var n = _.getTransitionDurationFromElement(this._element);
              g(this._element).one(_.TRANSITION_END, t).emulateTransitionEnd(n);
            } else t();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = g(this),
                e = t.data(Xn);
              if (
                (e ||
                  ((e = new i(this, "object" == typeof n && n)), t.data(Xn, e)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n](this);
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ii;
              },
            },
            {
              key: "Default",
              get: function () {
                return oi;
              },
            },
          ]),
          i
        );
      })();
    (g.fn[zn] = si._jQueryInterface),
      (g.fn[zn].Constructor = si),
      (g.fn[zn].noConflict = function () {
        return (g.fn[zn] = Gn), si._jQueryInterface;
      }),
      (t.Alert = v),
      (t.Button = H),
      (t.Carousel = ut),
      (t.Collapse = wt),
      (t.Dropdown = ee),
      (t.Modal = Te),
      (t.Popover = hn),
      (t.Scrollspy = On),
      (t.Tab = Yn),
      (t.Toast = si),
      (t.Tooltip = Xe),
      (t.Util = _),
      Object.defineProperty(t, "__esModule", { value: !0 });
  });
  //# sourceMappingURL=bootstrap.min.js.map
  