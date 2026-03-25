!(function () {
  var e,
    t = {
      7294: function (e, t, r) {
        "use strict";
        r(9872);
        var n = r(6358),
          o = r(7082);
        (n.p8.registerPlugin(o.i),
          document.addEventListener("DOMContentLoaded", function () {
            (n.p8.utils.toArray("[data-anim=fade-up]").forEach(function (e) {
              n.p8.fromTo(
                e,
                { opacity: 0, y: 50 },
                {
                  scrollTrigger: {
                    trigger: e,
                    scrub: !1,
                    toggleActions: "play pause resume reverse",
                    start: "30px 97.5%",
                  },
                  duration: 1,
                  opacity: 1,
                  y: 0,
                },
              );
            }),
              n.p8.utils
                .toArray("[data-anim=fade-up-delay]")
                .forEach(function (e) {
                  var t,
                    r = e.getAttribute("data-anim-delay");
                  ((r = null !== (t = parseFloat(r)) && void 0 !== t && t),
                    n.p8.fromTo(
                      e,
                      { opacity: 0, y: 50 },
                      {
                        scrollTrigger: {
                          trigger: e,
                          scrub: !1,
                          toggleActions: "play pause resume reverse",
                          start: "30px 97.5%",
                        },
                        duration: 1,
                        opacity: 1,
                        y: 0,
                        delay: r,
                      },
                    ));
                }),
              n.p8.utils
                .toArray("[data-anim=fade-up-long]")
                .forEach(function (e) {
                  n.p8.fromTo(
                    e,
                    { opacity: 0, y: 100 },
                    {
                      scrollTrigger: {
                        trigger: e,
                        scrub: !1,
                        toggleActions: "play pause resume reverse",
                        start: "30px 97.5%",
                      },
                      duration: 1,
                      opacity: 1,
                      y: 0,
                    },
                  );
                }),
              n.p8.utils.toArray("[data-anim=fade-in]").forEach(function (e) {
                n.p8.fromTo(
                  e,
                  { opacity: 0 },
                  {
                    scrollTrigger: {
                      trigger: e,
                      scrub: !1,
                      toggleActions: "play pause resume reverse",
                      start: "30px 97.5%",
                    },
                    duration: ".5",
                    opacity: 1,
                  },
                );
              }),
              new ResizeObserver(function () {
                setTimeout(function () {
                  o.i.refresh(!0);
                }, 500);
              }).observe(document.body));
          }));
        var a = r(7727),
          i = r.n(a);
        i()({ touchNavigation: !0 });
        (r(7090), r(82), r(5933), r(8662), r(7404), r(3561), r(2945));
        var c = r(6797);
        r.n(c)()();
        r(2667);
        (window.NodeList &&
          !NodeList.prototype.forEach &&
          (NodeList.prototype.forEach = function (e, t) {
            t = t || window;
            for (var r = 0; r < this.length; r++) e.call(t, this[r], r, this);
          }),
          [
            Element.prototype,
            Document.prototype,
            DocumentFragment.prototype,
          ].forEach(function (e) {
            e.hasOwnProperty("prepend") ||
              Object.defineProperty(e, "prepend", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  var e = Array.prototype.slice.call(arguments),
                    t = document.createDocumentFragment();
                  (e.forEach(function (e) {
                    var r = e instanceof Node;
                    t.appendChild(r ? e : document.createTextNode(String(e)));
                  }),
                    this.insertBefore(t, this.firstChild));
                },
              });
          }),
          [
            Element.prototype,
            Document.prototype,
            DocumentFragment.prototype,
          ].forEach(function (e) {
            e.hasOwnProperty("append") ||
              Object.defineProperty(e, "append", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  var e = Array.prototype.slice.call(arguments),
                    t = document.createDocumentFragment();
                  (e.forEach(function (e) {
                    var r = e instanceof Node;
                    t.appendChild(r ? e : document.createTextNode(String(e)));
                  }),
                    this.appendChild(t));
                },
              });
          }),
          [
            Element.prototype,
            CharacterData.prototype,
            DocumentType.prototype,
          ].forEach(function (e) {
            e.hasOwnProperty("before") ||
              Object.defineProperty(e, "before", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  var e = Array.prototype.slice.call(arguments),
                    t = document.createDocumentFragment();
                  (e.forEach(function (e) {
                    var r = e instanceof Node;
                    t.appendChild(r ? e : document.createTextNode(String(e)));
                  }),
                    this.parentNode.insertBefore(t, this));
                },
              });
          }),
          [
            Element.prototype,
            CharacterData.prototype,
            DocumentType.prototype,
          ].forEach(function (e) {
            e.hasOwnProperty("remove") ||
              Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  null !== this.parentNode && this.parentNode.removeChild(this);
                },
              });
          }),
          Element.prototype.matches ||
            (Element.prototype.matches = Element.prototype.msMatchesSelector),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          Element.prototype.closest ||
            (Element.prototype.closest = function (e) {
              var t = this;
              do {
                if (t.matches(e)) return t;
                t = t.parentElement || t.parentNode;
              } while (null !== t && 1 === t.nodeType);
              return null;
            }));
        r(8415);
        var u = function (e, t, r) {
            window.pageYOffset >= t
              ? e.classList.add(r)
              : e.classList.remove(r);
          },
          l = function (e, t) {
            var r;
            return function () {
              for (
                var n = arguments.length, o = new Array(n), a = 0;
                a < n;
                a++
              )
                o[a] = arguments[a];
              var i = function () {
                ((r = null), e.apply(void 0, o));
              };
              (clearTimeout(r), (r = setTimeout(i, t)));
            };
          };
        function s(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return f(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return f(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === r && e.constructor && (r = e.constructor.name);
              if ("Map" === r || "Set" === r) return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return f(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function f(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        (window.addEventListener("DOMContentLoaded", function () {
          var e = document.querySelector(".js-main-header"),
            t = l(function () {
              u(e, e.offsetHeight, "main-header--is-window-scrolled");
            }, 20),
            r = function (t, r, n) {
              return 2 === r && t > e.offsetHeight
                ? (e.classList.add("main-header--hide"), r)
                : 1 === r
                  ? (e.classList.remove("main-header--hide"), r)
                  : n;
            },
            n = window.scrollY || document.documentElement.scrollTop,
            o = l(function () {
              var e = window.scrollY || document.documentElement.scrollTop,
                t = 0,
                o = 0;
              (e > n ? (t = 2) : e < n && (t = 1),
                t !== (o = r(e, t, o)) && r(t, e),
                (n = e));
            }, 15);
          (document
            .querySelector(".js-navbar-brand")
            .addEventListener("focus", function () {
              e.classList.remove("main-header--hide");
            }),
            window.addEventListener("scroll", function () {
              (t(), o());
            }));
        }),
          window.addEventListener("scroll", function () {
            var e = document.querySelector(".js-return-to-top");
            u(e, 100, "return-to-top--is-visible");
          }),
          document.addEventListener("DOMContentLoaded", function () {
            (s(document.querySelectorAll(".entry-content table")).forEach(
              function (e) {
                var t = document.createElement("div");
                (t.classList.add("table-responsive"),
                  (t.innerHTML = e.outerHTML),
                  e.parentNode.insertBefore(t, e),
                  e.remove());
              },
            ),
              s(
                document.querySelectorAll(
                  ".entry-content p > img, .entry-content p > .wp-caption",
                ),
              ).forEach(function (e) {
                null !== e.parentNode.parentNode.nextSibling &&
                  e.classList.add("add-margin-bottom");
              }),
              s(
                document.querySelectorAll(
                  "\n    .entry-content a[href*='.jpg'],\n    .entry-content a[href*='.jpeg'],\n    .entry-content a[href*='.png']",
                ),
              ).forEach(function (e) {
                e.classList.add("glightbox");
              }),
              i()({ touchNavigation: !0 }));
          }));
      },
      8415: function () {
        function e(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return t(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, r) {
              if (!e) return;
              if ("string" == typeof e) return t(e, r);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return t(e, r);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function t(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        document.addEventListener("DOMContentLoaded", function () {
          document
            .querySelector(".js-main-header")
            .classList.add("mmenu-fixed");
          var t = document.querySelector("#wpadminbar");
          (null != t && t.classList.add("mmenu-fixed"),
            e(
              document.querySelectorAll(
                ".js-mobile-navigation .menu-item-has-children > a",
              ),
            ).forEach(function (e) {
              var t = e.parentNode,
                r = document.createElement("span");
              (r.prepend(e), t.prepend(r));
            }));
          var r = new window.Mmenu(
              ".js-mobile-navigation",
              {
                extensions: [
                  "pagedim-black",
                  "position-right",
                  "fx-menu-slide",
                  "shadow-page",
                  "shadow-panels",
                ],
              },
              { classNames: { fixedElements: { fixed: "mmenu-fixed" } } },
            ),
            n = document.querySelector(".js-mburger"),
            o = r.API;
          n.addEventListener("click", function () {
            n.classList.contains("is-active")
              ? (o.close(), n.classList.remove("is-active"))
              : (o.open(), n.classList.add("is-active"));
          });
        });
      },
      7404: function () {
        function e(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return t(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, r) {
              if (!e) return;
              if ("string" == typeof e) return t(e, r);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return t(e, r);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function t(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        document.addEventListener("DOMContentLoaded", function () {
          e(
            document.querySelectorAll("a[target='_blank']:not(.follow)"),
          ).forEach(function (e) {
            e.hasAttribute("rel") || e.setAttribute("rel", "nofollow");
          });
        });
      },
      2945: function () {
        function e(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return t(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, r) {
              if (!e) return;
              if ("string" == typeof e) return t(e, r);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return t(e, r);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function t(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        document.addEventListener("DOMContentLoaded", function () {
          var t = document.querySelectorAll("a[target='_blank']:not(.follow)");
          t &&
            e(t).forEach(function (e) {
              var t = document.createElement("span");
              (t.classList.add("visually-hidden"),
                (t.textContent = "Link opens in a new tab"),
                e.insertAdjacentElement("afterbegin", t));
            });
        });
      },
      3561: function () {
        function e(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return t(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, r) {
              if (!e) return;
              if ("string" == typeof e) return t(e, r);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return t(e, r);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function t(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        window.addEventListener("load", function () {
          e(document.querySelectorAll("p")).forEach(function (e) {
            0 === e.innerHTML.replace(/\s|&nbsp;/g, "").length &&
              e.parentNode.removeChild(e);
          });
        });
      },
    },
    r = {};
  function n(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var a = (r[e] = { exports: {} });
    return (t[e].call(a.exports, a, a.exports, n), a.exports);
  }
  ((n.m = t),
    (e = []),
    (n.O = function (t, r, o, a) {
      if (!r) {
        var i = 1 / 0;
        for (s = 0; s < e.length; s++) {
          ((r = e[s][0]), (o = e[s][1]), (a = e[s][2]));
          for (var c = !0, u = 0; u < r.length; u++)
            (!1 & a || i >= a) &&
            Object.keys(n.O).every(function (e) {
              return n.O[e](r[u]);
            })
              ? r.splice(u--, 1)
              : ((c = !1), a < i && (i = a));
          if (c) {
            e.splice(s--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      a = a || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
      e[s] = [r, o, a];
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (n.d(t, { a: t }), t);
    }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (n.j = 549),
    (function () {
      var e = { 549: 0 };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, r) {
          var o,
            a,
            i = r[0],
            c = r[1],
            u = r[2],
            l = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in c) n.o(c, o) && (n.m[o] = c[o]);
            if (u) var s = u(n);
          }
          for (t && t(r); l < i.length; l++)
            ((a = i[l]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
          return n.O(s);
        },
        r = (self.webpackChunkcrunch = self.webpackChunkcrunch || []);
      (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
    })());
  var o = n.O(void 0, [736], function () {
    return n(7294);
  });
  o = n.O(o);
})();
