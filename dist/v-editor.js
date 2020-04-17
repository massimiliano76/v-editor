(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@editorjs/editorjs/dist/editor.js":
/*!********************************************************!*\
  !*** ./node_modules/@editorjs/editorjs/dist/editor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! For license information please see editor.js.LICENSE */
!function (t, e) {
   true ? module.exports = e() : undefined;
}(window, function () {
  return function (t) {
    var e = {};

    function n(o) {
      if (e[o]) return e[o].exports;
      var i = e[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) {
        return t[e];
      }.bind(null, i));
      return o;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 171);
  }([function (t, e, n) {
    var o = n(8),
        i = n(17),
        r = n(24),
        a = n(21),
        s = n(29),
        l = function (t, e, n) {
      var c,
          u,
          f,
          d,
          p = t & l.F,
          h = t & l.G,
          v = t & l.S,
          g = t & l.P,
          y = t & l.B,
          b = h ? o : v ? o[e] || (o[e] = {}) : (o[e] || {}).prototype,
          m = h ? i : i[e] || (i[e] = {}),
          k = m.prototype || (m.prototype = {});

      for (c in h && (n = e), n) f = ((u = !p && b && void 0 !== b[c]) ? b : n)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, b && a(b, c, f, t & l.U), m[c] != f && r(m, c, d), g && k[c] != f && (k[c] = f);
    };

    o.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l;
  }, function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    t.exports = function (t, e, o) {
      return e && n(t.prototype, e), o && n(t, o), t;
    };
  }, function (t, e, n) {
    var o = n(51),
        i = n(357);

    t.exports = function (t, e) {
      return !e || "object" !== o(e) && "function" != typeof e ? i(t) : e;
    };
  }, function (t, e) {
    function n(e) {
      return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, n(e);
    }

    t.exports = n;
  }, function (t, e, n) {
    var o = n(358);

    t.exports = function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && o(t, e);
    };
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3)], void 0 === (r = "function" == typeof (o = function (o, i, r) {
      "use strict";

      var a = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = a(i), r = a(r);

      var s = function () {
        function t(e) {
          var n = e.config;
          if ((0, i.default)(this, t), (this instanceof t ? this.constructor : void 0) === t) throw new TypeError("Constructors for abstract class Module are not allowed.");
          this.config = n;
        }

        return (0, r.default)(t, [{
          key: "state",
          set: function (t) {
            this.Editor = t;
          }
        }]), t;
      }();

      o.default = s, s.displayName = "Module", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, n) {
    var o = n(11);

    t.exports = function (t) {
      if (!o(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  }, function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function (t, e, n) {
    var o = n(64)("wks"),
        i = n(41),
        r = n(8).Symbol,
        a = "function" == typeof r;
    (t.exports = function (t) {
      return o[t] || (o[t] = a && r[t] || (a ? r : i)("Symbol." + t));
    }).store = o;
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(51), n(103), n(2), n(3)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s) {
      "use strict";

      var l = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = l(i), r = l(r), a = l(a), s = l(s);

      var c = function () {
        function t() {
          (0, a.default)(this, t);
        }

        return (0, s.default)(t, null, [{
          key: "isSingleTag",
          value: function (t) {
            return t.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(t.tagName);
          }
        }, {
          key: "isLineBreakTag",
          value: function (t) {
            return t && t.tagName && ["BR", "WBR"].includes(t.tagName);
          }
        }, {
          key: "make",
          value: function (t) {
            var e,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = document.createElement(t);

            for (var a in Array.isArray(n) ? (e = i.classList).add.apply(e, (0, r.default)(n)) : n && i.classList.add(n), o) o.hasOwnProperty(a) && (i[a] = o[a]);

            return i;
          }
        }, {
          key: "text",
          value: function (t) {
            return document.createTextNode(t);
          }
        }, {
          key: "svg",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14,
                o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return o.classList.add("icon", "icon--" + t), o.setAttribute("width", e + "px"), o.setAttribute("height", n + "px"), o.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t, '"></use>'), o;
          }
        }, {
          key: "append",
          value: function (t, e) {
            Array.isArray(e) ? e.forEach(function (e) {
              return t.appendChild(e);
            }) : t.appendChild(e);
          }
        }, {
          key: "prepend",
          value: function (t, e) {
            Array.isArray(e) ? (e = e.reverse()).forEach(function (e) {
              return t.prepend(e);
            }) : t.prepend(e);
          }
        }, {
          key: "swap",
          value: function (t, e) {
            var n = document.createElement("div"),
                o = t.parentNode;
            o.insertBefore(n, t), o.insertBefore(t, e), o.insertBefore(e, n), o.removeChild(n);
          }
        }, {
          key: "find",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                e = arguments.length > 1 ? arguments[1] : void 0;
            return t.querySelector(e);
          }
        }, {
          key: "get",
          value: function (t) {
            return document.getElementById(t);
          }
        }, {
          key: "findAll",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                e = arguments.length > 1 ? arguments[1] : void 0;
            return t.querySelectorAll(e);
          }
        }, {
          key: "getDeepestNode",
          value: function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = n ? "lastChild" : "firstChild",
                i = n ? "previousSibling" : "nextSibling";

            if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
              var r = e[o];
              if (t.isSingleTag(r) && !t.isNativeInput(r) && !t.isLineBreakTag(r)) if (r[i]) r = r[i];else {
                if (!r.parentNode[i]) return r.parentNode;
                r = r.parentNode[i];
              }
              return this.getDeepestNode(r, n);
            }

            return e;
          }
        }, {
          key: "isElement",
          value: function (t) {
            return t && "object" === (0, i.default)(t) && t.nodeType && t.nodeType === Node.ELEMENT_NODE;
          }
        }, {
          key: "isFragment",
          value: function (t) {
            return t && "object" === (0, i.default)(t) && t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
          }
        }, {
          key: "isContentEditable",
          value: function (t) {
            return "true" === t.contentEditable;
          }
        }, {
          key: "isNativeInput",
          value: function (t) {
            return !(!t || !t.tagName) && ["INPUT", "TEXTAREA"].includes(t.tagName);
          }
        }, {
          key: "canSetCaret",
          value: function (e) {
            var n = !0;
            if (t.isNativeInput(e)) switch (e.type) {
              case "file":
              case "checkbox":
              case "radio":
              case "hidden":
              case "submit":
              case "button":
              case "image":
              case "reset":
                n = !1;
            } else n = t.isContentEditable(e);
            return n;
          }
        }, {
          key: "isNodeEmpty",
          value: function (t) {
            return !(this.isSingleTag(t) && !this.isLineBreakTag(t)) && 0 === (this.isElement(t) && this.isNativeInput(t) ? t.value : t.textContent.replace("​", "")).trim().length;
          }
        }, {
          key: "isLeaf",
          value: function (t) {
            return !!t && 0 === t.childNodes.length;
          }
        }, {
          key: "isEmpty",
          value: function (t) {
            var e = this,
                n = [],
                o = [];
            if (!t) return !0;
            if (!t.childNodes.length) return this.isNodeEmpty(t);

            for (t.normalize(), n.push(t.firstChild); n.length > 0;) if (t = n.shift()) {
              for (this.isLeaf(t) ? o.push(t) : n.push(t.firstChild); t && t.nextSibling;) (t = t.nextSibling) && n.push(t);

              if (t && !this.isNodeEmpty(t)) return !1;
            }

            return o.every(function (t) {
              return e.isNodeEmpty(t);
            });
          }
        }, {
          key: "isHTMLString",
          value: function (e) {
            var n = t.make("div");
            return n.innerHTML = e, n.childElementCount > 0;
          }
        }, {
          key: "getContentLength",
          value: function (e) {
            return t.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
          }
        }, {
          key: "containsOnlyInlineElements",
          value: function (e) {
            var n;
            return "string" == typeof e ? (n = document.createElement("div")).innerHTML = e : n = e, Array.from(n.children).every(function e(n) {
              return !t.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(e);
            });
          }
        }, {
          key: "getDeepestBlockElements",
          value: function (e) {
            return t.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce(function (e, n) {
              return [].concat((0, r.default)(e), (0, r.default)(t.getDeepestBlockElements(n)));
            }, []);
          }
        }, {
          key: "getHolder",
          value: function (t) {
            return "string" == typeof t ? document.getElementById(t) : t;
          }
        }, {
          key: "isExtensionNode",
          value: function (t) {
            return t && ["GRAMMARLY-EXTENSION"].includes(t.nodeName);
          }
        }, {
          key: "isAnchor",
          value: function (t) {
            return "a" === t.tagName.toLowerCase();
          }
        }, {
          key: "blockElements",
          get: function () {
            return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tr", "tfoot", "ul", "video"];
          }
        }]), t;
      }();

      o.default = c, c.displayName = "Dom", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(355), n(26), n(13)], void 0 === (r = "function" == typeof (o = function (t, e, o, i) {
      "use strict";

      var r,
          a = n(1);

      function s(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log",
            o = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";

        if ("console" in window && window.console[n]) {
          var a = ["info", "log", "warn", "error"].includes(n),
              l = [];

          switch (s.logLevel) {
            case r.ERROR:
              if ("error" !== n) return;
              break;

            case r.WARN:
              if (!["error", "warn"].includes(n)) return;
              break;

            case r.INFO:
              if (!a || t) return;
          }

          o && l.push(o);
          var c = "Editor.js ".concat("2.17.0");
          t && (a ? (l.unshift("line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;", i), e = "%c".concat(c, "%c ").concat(e)) : e = "( ".concat(c, " )").concat(e));

          try {
            if (a) {
              if (o) {
                var u;
                (u = console)[n].apply(u, ["".concat(e, " %o")].concat(l));
              } else {
                var f;
                (f = console)[n].apply(f, [e].concat(l));
              }
            } else console[n](e);
          } catch (t) {}
        }
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setLogLevel = function (t) {
        s.logLevel = t;
      }, t.isPrintableKey = function (t) {
        return t > 47 && t < 58 || 32 === t || 13 === t || t > 64 && t < 91 || t > 95 && t < 112 || t > 185 && t < 193 || t > 218 && t < 223;
      }, t.sequence = function (t) {
        var e,
            n,
            i,
            r = arguments;
        return o.default.async(function (a) {
          for (;;) switch (a.prev = a.next) {
            case 0:
              return i = function (t, e, n) {
                return o.default.async(function (i) {
                  for (;;) switch (i.prev = i.next) {
                    case 0:
                      return i.prev = 0, i.next = 3, o.default.awrap(t.function(t.data));

                    case 3:
                      return i.next = 5, o.default.awrap(e(void 0 !== t.data ? t.data : {}));

                    case 5:
                      i.next = 10;
                      break;

                    case 7:
                      i.prev = 7, i.t0 = i.catch(0), n(void 0 !== t.data ? t.data : {});

                    case 10:
                    case "end":
                      return i.stop();
                  }
                }, null, null, [[0, 7]]);
              }, e = r.length > 1 && void 0 !== r[1] ? r[1] : function () {}, n = r.length > 2 && void 0 !== r[2] ? r[2] : function () {}, a.next = 5, o.default.awrap(t.reduce(function (t, r) {
                return o.default.async(function (a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      return a.next = 2, o.default.awrap(t);

                    case 2:
                      return a.abrupt("return", i(r, e, n));

                    case 3:
                    case "end":
                      return a.stop();
                  }
                });
              }, Promise.resolve()));

            case 5:
              return a.abrupt("return", a.sent);

            case 6:
            case "end":
              return a.stop();
          }
        });
      }, t.array = function (t) {
        return Array.prototype.slice.call(t);
      }, t.isFunction = function (t) {
        return "function" == typeof t;
      }, t.isClass = function (t) {
        return "function" == typeof t && /^\s*class\s+/.test(t.toString());
      }, t.isEmpty = function (t) {
        return !t || 0 === Object.keys(t).length && t.constructor === Object;
      }, t.isPromise = function (t) {
        return Promise.resolve(t) === t;
      }, t.delay = function (t, e) {
        return function () {
          var n = this,
              o = arguments;
          window.setTimeout(function () {
            return t.apply(n, o);
          }, e);
        };
      }, t.getFileExtension = function (t) {
        return t.name.split(".").pop();
      }, t.isValidMimeType = function (t) {
        return /^[-\w]+\/([-+\w]+|\*)$/.test(t);
      }, t.debounce = function (t, e, n) {
        var o,
            i = arguments,
            r = this;
        return function () {
          var a = r,
              s = i,
              l = n && !o;
          window.clearTimeout(o), o = window.setTimeout(function () {
            o = null, n || t.apply(a, s);
          }, e), l && t.apply(a, s);
        };
      }, t.copyTextToClipboard = function (t) {
        var e = i.default.make("div", "codex-editor-clipboard", {
          innerHTML: t
        });
        document.body.appendChild(e);
        var n = window.getSelection(),
            o = document.createRange();
        o.selectNode(e), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
      }, t.getUserOS = u, t.capitalize = function (t) {
        return t[0].toUpperCase() + t.slice(1);
      }, t.deepMerge = function t(n) {
        for (var o = function (t) {
          return t && "object" === d(t);
        }, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];

        if (!r.length) return n;
        var s = r.shift();
        if (o(n) && o(s)) for (var l in s) o(s[l]) ? (n[l] || Object.assign(n, (0, e.default)({}, l, {})), t(n[l], s[l])) : Object.assign(n, (0, e.default)({}, l, s[l]));
        return t.apply(void 0, [n].concat(r));
      }, t.typeOf = d, t.beautifyShortcut = function (t) {
        var e = u();
        return t = t.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), t = e.mac ? t.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : t.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
      }, t.getValidUrl = function (t) {
        try {
          return new URL(t).href;
        } catch (t) {}

        return "//" === t.substring(0, 2) ? window.location.protocol + t : window.location.origin + t;
      }, t.openTab = function (t) {
        window.open(t, "_blank");
      }, t.isTouchSupported = t.logLabeled = t.log = t.mouseButtons = t.keyCodes = t.LogLevels = void 0, e = a(e), o = a(o), i = a(i), t.LogLevels = r, function (t) {
        t.VERBOSE = "VERBOSE", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR";
      }(r || (t.LogLevels = r = {})), t.keyCodes = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        DOWN: 40,
        RIGHT: 39,
        DELETE: 46,
        META: 91
      }, t.mouseButtons = {
        LEFT: 0,
        WHEEL: 1,
        RIGHT: 2,
        BACKWARD: 3,
        FORWARD: 4
      }, s.logLevel = r.VERBOSE;
      var l = s.bind(window, !1);
      t.log = l;
      var c = s.bind(window, !0);

      function u() {
        var t = {
          win: !1,
          mac: !1,
          x11: !1,
          linux: !1
        },
            e = Object.keys(t).find(function (t) {
          return -1 !== navigator.appVersion.toLowerCase().indexOf(t);
        });
        return e ? (t[e] = !0, t) : t;
      }

      t.logLabeled = c;
      var f = "ontouchstart" in document.documentElement;

      function d(t) {
        return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }

      t.isTouchSupported = f;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o = n(51);

    function i() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return i = function () {
        return t;
      }, t;
    }

    t.exports = function (t) {
      if (t && t.__esModule) return t;
      if (null === t || "object" !== o(t) && "function" != typeof t) return {
        default: t
      };
      var e = i();
      if (e && e.has(t)) return e.get(t);
      var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
        var s = r ? Object.getOwnPropertyDescriptor(t, a) : null;
        s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
      }

      return n.default = t, e && e.set(t, n), n;
    };
  }, function (t, e, n) {
    var o = n(31),
        i = Math.min;

    t.exports = function (t) {
      return t > 0 ? i(o(t), 9007199254740991) : 0;
    };
  }, function (t, e) {
    var n = t.exports = {
      version: "2.6.10"
    };
    "number" == typeof __e && (__e = n);
  }, function (t, e, n) {
    t.exports = !n(9)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var o = n(10),
        i = n(104),
        r = n(38),
        a = Object.defineProperty;
    e.f = n(18) ? Object.defineProperty : function (t, e, n) {
      if (o(t), e = r(e, !0), o(n), i) try {
        return a(t, e, n);
      } catch (t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (t[e] = n.value), t;
    };
  }, function (t, e, n) {
    var o = n(36);

    t.exports = function (t) {
      return Object(o(t));
    };
  }, function (t, e, n) {
    var o = n(8),
        i = n(24),
        r = n(23),
        a = n(41)("src"),
        s = n(176),
        l = ("" + s).split("toString");
    n(17).inspectSource = function (t) {
      return s.call(t);
    }, (t.exports = function (t, e, n, s) {
      var c = "function" == typeof n;
      c && (r(n, "name") || i(n, "name", e)), t[e] !== n && (c && (r(n, a) || i(n, a, t[e] ? "" + t[e] : l.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[a] || s.call(this);
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(9),
        r = n(36),
        a = /"/g,
        s = function (t, e, n, o) {
      var i = String(r(t)),
          s = "<" + e;
      return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">";
    };

    t.exports = function (t, e) {
      var n = {};
      n[t] = e(s), o(o.P + o.F * i(function () {
        var e = ""[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      }), "String", n);
    };
  }, function (t, e) {
    var n = {}.hasOwnProperty;

    t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, n) {
    var o = n(19),
        i = n(40);
    t.exports = n(18) ? function (t, e, n) {
      return o.f(t, e, i(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    };
  }, function (t, e, n) {
    var o = n(60),
        i = n(36);

    t.exports = function (t) {
      return o(i(t));
    };
  }, function (t, e, n) {
    t.exports = n(135);
  }, function (t, e, n) {
    "use strict";

    var o = n(9);

    t.exports = function (t, e) {
      return !!t && o(function () {
        e ? t.call(null, function () {}, 1) : t.call(null);
      });
    };
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(14), n(13)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s) {
      "use strict";

      var l = n(15),
          c = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = c(i), r = c(r), a = l(a), s = c(s);

      var u = function () {
        function t() {
          (0, i.default)(this, t), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
        }

        return (0, r.default)(t, [{
          key: "removeFakeBackground",
          value: function () {
            this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
          }
        }, {
          key: "setFakeBackground",
          value: function () {
            document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
          }
        }, {
          key: "save",
          value: function () {
            this.savedSelectionRange = t.range;
          }
        }, {
          key: "restore",
          value: function () {
            if (this.savedSelectionRange) {
              var t = window.getSelection();
              t.removeAllRanges(), t.addRange(this.savedSelectionRange);
            }
          }
        }, {
          key: "clearSaved",
          value: function () {
            this.savedSelectionRange = null;
          }
        }, {
          key: "collapseToEnd",
          value: function () {
            var t = window.getSelection(),
                e = document.createRange();
            e.selectNodeContents(t.focusNode), e.collapse(!1), t.removeAllRanges(), t.addRange(e);
          }
        }, {
          key: "findParentTag",
          value: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                o = window.getSelection(),
                i = null;
            if (!o || !o.anchorNode || !o.focusNode) return null;
            var r = [o.anchorNode, o.focusNode];
            return r.forEach(function (o) {
              for (var r = n; r > 0 && o.parentNode && (o.tagName !== t || (i = o, e && o.classList && !o.classList.contains(e) && (i = null), !i));) o = o.parentNode, r--;
            }), i;
          }
        }, {
          key: "expandToTag",
          value: function (t) {
            var e = window.getSelection();
            e.removeAllRanges();
            var n = document.createRange();
            n.selectNodeContents(t), e.addRange(n);
          }
        }], [{
          key: "get",
          value: function () {
            return window.getSelection();
          }
        }, {
          key: "CSS",
          get: function () {
            return {
              editorWrapper: "codex-editor",
              editorZone: "codex-editor__redactor"
            };
          }
        }, {
          key: "anchorNode",
          get: function () {
            var t = window.getSelection();
            return t ? t.anchorNode : null;
          }
        }, {
          key: "anchorElement",
          get: function () {
            var t = window.getSelection();
            if (!t) return null;
            var e = t.anchorNode;
            return e ? s.default.isElement(e) ? e : e.parentElement : null;
          }
        }, {
          key: "anchorOffset",
          get: function () {
            var t = window.getSelection();
            return t ? t.anchorOffset : null;
          }
        }, {
          key: "isCollapsed",
          get: function () {
            var t = window.getSelection();
            return t ? t.isCollapsed : null;
          }
        }, {
          key: "isAtEditor",
          get: function () {
            var e = t.get(),
                n = e.anchorNode || e.focusNode;
            n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
            var o = null;
            return n && (o = n.closest(".".concat(t.CSS.editorZone))), o && o.nodeType === Node.ELEMENT_NODE;
          }
        }, {
          key: "range",
          get: function () {
            var t = window.getSelection();
            return t && t.rangeCount ? t.getRangeAt(0) : null;
          }
        }, {
          key: "rect",
          get: function () {
            var t,
                e = document.selection,
                n = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            if (e && "Control" !== e.type) return t = (e = e).createRange(), n.x = t.boundingLeft, n.y = t.boundingTop, n.width = t.boundingWidth, n.height = t.boundingHeight, n;
            if (!window.getSelection) return a.log("Method window.getSelection is not supported", "warn"), n;
            if (null === (e = window.getSelection()).rangeCount || isNaN(e.rangeCount)) return a.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;
            if (0 === e.rangeCount) return n;

            if ((t = e.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = t.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
              var o = document.createElement("span");

              if (o.getBoundingClientRect) {
                o.appendChild(document.createTextNode("​")), t.insertNode(o), n = o.getBoundingClientRect();
                var i = o.parentNode;
                i.removeChild(o), i.normalize();
              }
            }

            return n;
          }
        }, {
          key: "text",
          get: function () {
            return window.getSelection ? window.getSelection().toString() : "";
          }
        }]), t;
      }();

      o.default = u, u.displayName = "SelectionUtils", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o = n(30);

    t.exports = function (t, e, n) {
      if (o(t), void 0 === e) return t;

      switch (n) {
        case 1:
          return function (n) {
            return t.call(e, n);
          };

        case 2:
          return function (n, o) {
            return t.call(e, n, o);
          };

        case 3:
          return function (n, o, i) {
            return t.call(e, n, o, i);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  }, function (t, e) {
    var n = Math.ceil,
        o = Math.floor;

    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
    };
  }, function (t, e, n) {
    var o = n(61),
        i = n(40),
        r = n(25),
        a = n(38),
        s = n(23),
        l = n(104),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(18) ? c : function (t, e) {
      if (t = r(t), e = a(e, !0), l) try {
        return c(t, e);
      } catch (t) {}
      if (s(t, e)) return i(!o.f.call(t, e), t[e]);
    };
  }, function (t, e, n) {
    var o = n(0),
        i = n(17),
        r = n(9);

    t.exports = function (t, e) {
      var n = (i.Object || {})[t] || Object[t],
          a = {};
      a[t] = e(n), o(o.S + o.F * r(function () {
        n(1);
      }), "Object", a);
    };
  }, function (t, e, n) {
    var o = n(29),
        i = n(60),
        r = n(20),
        a = n(16),
        s = n(120);

    t.exports = function (t, e) {
      var n = 1 == t,
          l = 2 == t,
          c = 3 == t,
          u = 4 == t,
          f = 6 == t,
          d = 5 == t || f,
          p = e || s;
      return function (e, s, h) {
        for (var v, g, y = r(e), b = i(y), m = o(s, h, 3), k = a(b.length), x = 0, w = n ? p(e, k) : l ? p(e, 0) : void 0; k > x; x++) if ((d || x in b) && (g = m(v = b[x], x, y), t)) if (n) w[x] = g;else if (g) switch (t) {
          case 3:
            return !0;

          case 5:
            return v;

          case 6:
            return x;

          case 2:
            w.push(v);
        } else if (u) return !1;

        return f ? -1 : c || u ? u : w;
      };
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  }, function (t, e, n) {
    "use strict";

    if (n(18)) {
      var o = n(42),
          i = n(8),
          r = n(9),
          a = n(0),
          s = n(75),
          l = n(102),
          c = n(29),
          u = n(56),
          f = n(40),
          d = n(24),
          p = n(57),
          h = n(31),
          v = n(16),
          g = n(131),
          y = n(44),
          b = n(38),
          m = n(23),
          k = n(62),
          x = n(11),
          w = n(20),
          S = n(94),
          E = n(45),
          T = n(47),
          C = n(46).f,
          B = n(96),
          _ = n(41),
          I = n(12),
          O = n(34),
          N = n(65),
          L = n(63),
          M = n(98),
          A = n(54),
          P = n(68),
          R = n(55),
          j = n(97),
          F = n(122),
          D = n(19),
          U = n(32),
          H = D.f,
          z = U.f,
          G = i.RangeError,
          W = i.TypeError,
          V = i.Uint8Array,
          X = Array.prototype,
          Y = l.ArrayBuffer,
          K = l.DataView,
          Z = O(0),
          q = O(2),
          J = O(3),
          $ = O(4),
          Q = O(5),
          tt = O(6),
          et = N(!0),
          nt = N(!1),
          ot = M.values,
          it = M.keys,
          rt = M.entries,
          at = X.lastIndexOf,
          st = X.reduce,
          lt = X.reduceRight,
          ct = X.join,
          ut = X.sort,
          ft = X.slice,
          dt = X.toString,
          pt = X.toLocaleString,
          ht = I("iterator"),
          vt = I("toStringTag"),
          gt = _("typed_constructor"),
          yt = _("def_constructor"),
          bt = s.CONSTR,
          mt = s.TYPED,
          kt = s.VIEW,
          xt = O(1, function (t, e) {
        return Ct(L(t, t[yt]), e);
      }),
          wt = r(function () {
        return 1 === new V(new Uint16Array([1]).buffer)[0];
      }),
          St = !!V && !!V.prototype.set && r(function () {
        new V(1).set({});
      }),
          Et = function (t, e) {
        var n = h(t);
        if (n < 0 || n % e) throw G("Wrong offset!");
        return n;
      },
          Tt = function (t) {
        if (x(t) && mt in t) return t;
        throw W(t + " is not a typed array!");
      },
          Ct = function (t, e) {
        if (!(x(t) && gt in t)) throw W("It is not a typed array constructor!");
        return new t(e);
      },
          Bt = function (t, e) {
        return _t(L(t, t[yt]), e);
      },
          _t = function (t, e) {
        for (var n = 0, o = e.length, i = Ct(t, o); o > n;) i[n] = e[n++];

        return i;
      },
          It = function (t, e, n) {
        H(t, e, {
          get: function () {
            return this._d[n];
          }
        });
      },
          Ot = function (t) {
        var e,
            n,
            o,
            i,
            r,
            a,
            s = w(t),
            l = arguments.length,
            u = l > 1 ? arguments[1] : void 0,
            f = void 0 !== u,
            d = B(s);

        if (null != d && !S(d)) {
          for (a = d.call(s), o = [], e = 0; !(r = a.next()).done; e++) o.push(r.value);

          s = o;
        }

        for (f && l > 2 && (u = c(u, arguments[2], 2)), e = 0, n = v(s.length), i = Ct(this, n); n > e; e++) i[e] = f ? u(s[e], e) : s[e];

        return i;
      },
          Nt = function () {
        for (var t = 0, e = arguments.length, n = Ct(this, e); e > t;) n[t] = arguments[t++];

        return n;
      },
          Lt = !!V && r(function () {
        pt.call(new V(1));
      }),
          Mt = function () {
        return pt.apply(Lt ? ft.call(Tt(this)) : Tt(this), arguments);
      },
          At = {
        copyWithin: function (t, e) {
          return F.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
        },
        every: function (t) {
          return $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        fill: function (t) {
          return j.apply(Tt(this), arguments);
        },
        filter: function (t) {
          return Bt(this, q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0));
        },
        find: function (t) {
          return Q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        findIndex: function (t) {
          return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        forEach: function (t) {
          Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        indexOf: function (t) {
          return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        includes: function (t) {
          return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        join: function (t) {
          return ct.apply(Tt(this), arguments);
        },
        lastIndexOf: function (t) {
          return at.apply(Tt(this), arguments);
        },
        map: function (t) {
          return xt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        reduce: function (t) {
          return st.apply(Tt(this), arguments);
        },
        reduceRight: function (t) {
          return lt.apply(Tt(this), arguments);
        },
        reverse: function () {
          for (var t, e = Tt(this).length, n = Math.floor(e / 2), o = 0; o < n;) t = this[o], this[o++] = this[--e], this[e] = t;

          return this;
        },
        some: function (t) {
          return J(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0);
        },
        sort: function (t) {
          return ut.call(Tt(this), t);
        },
        subarray: function (t, e) {
          var n = Tt(this),
              o = n.length,
              i = y(t, o);
          return new (L(n, n[yt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, v((void 0 === e ? o : y(e, o)) - i));
        }
      },
          Pt = function (t, e) {
        return Bt(this, ft.call(Tt(this), t, e));
      },
          Rt = function (t) {
        Tt(this);
        var e = Et(arguments[1], 1),
            n = this.length,
            o = w(t),
            i = v(o.length),
            r = 0;
        if (i + e > n) throw G("Wrong length!");

        for (; r < i;) this[e + r] = o[r++];
      },
          jt = {
        entries: function () {
          return rt.call(Tt(this));
        },
        keys: function () {
          return it.call(Tt(this));
        },
        values: function () {
          return ot.call(Tt(this));
        }
      },
          Ft = function (t, e) {
        return x(t) && t[mt] && "symbol" != typeof e && e in t && String(+e) == String(e);
      },
          Dt = function (t, e) {
        return Ft(t, e = b(e, !0)) ? f(2, t[e]) : z(t, e);
      },
          Ut = function (t, e, n) {
        return !(Ft(t, e = b(e, !0)) && x(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? H(t, e, n) : (t[e] = n.value, t);
      };

      bt || (U.f = Dt, D.f = Ut), a(a.S + a.F * !bt, "Object", {
        getOwnPropertyDescriptor: Dt,
        defineProperty: Ut
      }), r(function () {
        dt.call({});
      }) && (dt = pt = function () {
        return ct.call(this);
      });
      var Ht = p({}, At);
      p(Ht, jt), d(Ht, ht, jt.values), p(Ht, {
        slice: Pt,
        set: Rt,
        constructor: function () {},
        toString: dt,
        toLocaleString: Mt
      }), It(Ht, "buffer", "b"), It(Ht, "byteOffset", "o"), It(Ht, "byteLength", "l"), It(Ht, "length", "e"), H(Ht, vt, {
        get: function () {
          return this[mt];
        }
      }), t.exports = function (t, e, n, l) {
        var c = t + ((l = !!l) ? "Clamped" : "") + "Array",
            f = "get" + t,
            p = "set" + t,
            h = i[c],
            y = h || {},
            b = h && T(h),
            m = !h || !s.ABV,
            w = {},
            S = h && h.prototype,
            B = function (t, n) {
          H(t, n, {
            get: function () {
              return function (t, n) {
                var o = t._d;
                return o.v[f](n * e + o.o, wt);
              }(this, n);
            },
            set: function (t) {
              return function (t, n, o) {
                var i = t._d;
                l && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), i.v[p](n * e + i.o, o, wt);
              }(this, n, t);
            },
            enumerable: !0
          });
        };

        m ? (h = n(function (t, n, o, i) {
          u(t, h, c, "_d");
          var r,
              a,
              s,
              l,
              f = 0,
              p = 0;

          if (x(n)) {
            if (!(n instanceof Y || "ArrayBuffer" == (l = k(n)) || "SharedArrayBuffer" == l)) return mt in n ? _t(h, n) : Ot.call(h, n);
            r = n, p = Et(o, e);
            var y = n.byteLength;

            if (void 0 === i) {
              if (y % e) throw G("Wrong length!");
              if ((a = y - p) < 0) throw G("Wrong length!");
            } else if ((a = v(i) * e) + p > y) throw G("Wrong length!");

            s = a / e;
          } else s = g(n), r = new Y(a = s * e);

          for (d(t, "_d", {
            b: r,
            o: p,
            l: a,
            e: s,
            v: new K(r)
          }); f < s;) B(t, f++);
        }), S = h.prototype = E(Ht), d(S, "constructor", h)) : r(function () {
          h(1);
        }) && r(function () {
          new h(-1);
        }) && P(function (t) {
          new h(), new h(null), new h(1.5), new h(t);
        }, !0) || (h = n(function (t, n, o, i) {
          var r;
          return u(t, h, c), x(n) ? n instanceof Y || "ArrayBuffer" == (r = k(n)) || "SharedArrayBuffer" == r ? void 0 !== i ? new y(n, Et(o, e), i) : void 0 !== o ? new y(n, Et(o, e)) : new y(n) : mt in n ? _t(h, n) : Ot.call(h, n) : new y(g(n));
        }), Z(b !== Function.prototype ? C(y).concat(C(b)) : C(y), function (t) {
          t in h || d(h, t, y[t]);
        }), h.prototype = S, o || (S.constructor = h));
        var _ = S[ht],
            I = !!_ && ("values" == _.name || null == _.name),
            O = jt.values;
        d(h, gt, !0), d(S, mt, c), d(S, kt, !0), d(S, yt, h), (l ? new h(1)[vt] == c : vt in S) || H(S, vt, {
          get: function () {
            return c;
          }
        }), w[c] = h, a(a.G + a.W + a.F * (h != y), w), a(a.S, c, {
          BYTES_PER_ELEMENT: e
        }), a(a.S + a.F * r(function () {
          y.of.call(h, 1);
        }), c, {
          from: Ot,
          of: Nt
        }), "BYTES_PER_ELEMENT" in S || d(S, "BYTES_PER_ELEMENT", e), a(a.P, c, At), R(c), a(a.P + a.F * St, c, {
          set: Rt
        }), a(a.P + a.F * !I, c, jt), o || S.toString == dt || (S.toString = dt), a(a.P + a.F * r(function () {
          new h(1).slice();
        }), c, {
          slice: Pt
        }), a(a.P + a.F * (r(function () {
          return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString();
        }) || !r(function () {
          S.toLocaleString.call([1, 2]);
        })), c, {
          toLocaleString: Mt
        }), A[c] = I ? _ : O, o || I || d(S, ht, O);
      };
    } else t.exports = function () {};
  }, function (t, e, n) {
    var o = n(11);

    t.exports = function (t, e) {
      if (!o(t)) return t;
      var n, i;
      if (e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
      if ("function" == typeof (n = t.valueOf) && !o(i = n.call(t))) return i;
      if (!e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, n) {
    var o = n(41)("meta"),
        i = n(11),
        r = n(23),
        a = n(19).f,
        s = 0,
        l = Object.isExtensible || function () {
      return !0;
    },
        c = !n(9)(function () {
      return l(Object.preventExtensions({}));
    }),
        u = function (t) {
      a(t, o, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      });
    },
        f = t.exports = {
      KEY: o,
      NEED: !1,
      fastKey: function (t, e) {
        if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;

        if (!r(t, o)) {
          if (!l(t)) return "F";
          if (!e) return "E";
          u(t);
        }

        return t[o].i;
      },
      getWeak: function (t, e) {
        if (!r(t, o)) {
          if (!l(t)) return !0;
          if (!e) return !1;
          u(t);
        }

        return t[o].w;
      },
      onFreeze: function (t) {
        return c && f.NEED && l(t) && !r(t, o) && u(t), t;
      }
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  }, function (t, e) {
    var n = 0,
        o = Math.random();

    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36));
    };
  }, function (t, e) {
    t.exports = !1;
  }, function (t, e, n) {
    var o = n(106),
        i = n(81);

    t.exports = Object.keys || function (t) {
      return o(t, i);
    };
  }, function (t, e, n) {
    var o = n(31),
        i = Math.max,
        r = Math.min;

    t.exports = function (t, e) {
      return (t = o(t)) < 0 ? i(t + e, 0) : r(t, e);
    };
  }, function (t, e, n) {
    var o = n(10),
        i = n(107),
        r = n(81),
        a = n(80)("IE_PROTO"),
        s = function () {},
        l = function () {
      var t,
          e = n(78)("iframe"),
          o = r.length;

      for (e.style.display = "none", n(82).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; o--;) delete l.prototype[r[o]];

      return l();
    };

    t.exports = Object.create || function (t, e) {
      var n;
      return null !== t ? (s.prototype = o(t), n = new s(), s.prototype = null, n[a] = t) : n = l(), void 0 === e ? n : i(n, e);
    };
  }, function (t, e, n) {
    var o = n(106),
        i = n(81).concat("length", "prototype");

    e.f = Object.getOwnPropertyNames || function (t) {
      return o(t, i);
    };
  }, function (t, e, n) {
    var o = n(23),
        i = n(20),
        r = n(80)("IE_PROTO"),
        a = Object.prototype;

    t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), o(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
    };
  }, function (t, e, n) {
    var o = n(12)("unscopables"),
        i = Array.prototype;
    null == i[o] && n(24)(i, o, {}), t.exports = function (t) {
      i[o][t] = !0;
    };
  }, function (t, e, n) {
    var o = n(11);

    t.exports = function (t, e) {
      if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
      return t;
    };
  }, function (t, e, n) {
    var o = n(345),
        i = n(346),
        r = n(347);

    t.exports = function (t, e) {
      return o(t) || i(t, e) || r();
    };
  }, function (t, e) {
    function n(e) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function (t) {
        return typeof t;
      } : t.exports = n = function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, n(e);
    }

    t.exports = n;
  }, function (t, e, n) {
    var o = n(19).f,
        i = n(23),
        r = n(12)("toStringTag");

    t.exports = function (t, e, n) {
      t && !i(t = n ? t : t.prototype, r) && o(t, r, {
        configurable: !0,
        value: e
      });
    };
  }, function (t, e, n) {
    var o = n(0),
        i = n(36),
        r = n(9),
        a = n(84),
        s = "[" + a + "]",
        l = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"),
        u = function (t, e, n) {
      var i = {},
          s = r(function () {
        return !!a[t]() || "​" != "​"[t]();
      }),
          l = i[t] = s ? e(f) : a[t];
      n && (i[n] = l), o(o.P + o.F * s, "String", i);
    },
        f = u.trim = function (t, e) {
      return t = String(i(t)), 1 & e && (t = t.replace(l, "")), 2 & e && (t = t.replace(c, "")), t;
    };

    t.exports = u;
  }, function (t, e) {
    t.exports = {};
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(19),
        r = n(18),
        a = n(12)("species");

    t.exports = function (t) {
      var e = o[t];
      r && e && !e[a] && i.f(e, a, {
        configurable: !0,
        get: function () {
          return this;
        }
      });
    };
  }, function (t, e) {
    t.exports = function (t, e, n, o) {
      if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
      return t;
    };
  }, function (t, e, n) {
    var o = n(21);

    t.exports = function (t, e, n) {
      for (var i in e) o(t, i, e[i], n);

      return t;
    };
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(359), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s) {
      "use strict";

      var l = n(15),
          c = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = c(i), r = c(r), a = c(a), s = l(s);

      var u = function () {
        function t(e) {
          var n = this;
          (0, i.default)(this, t), this.iterator = null, this.activated = !1, this.allowArrows = !0, this.allowArrows = "boolean" != typeof e.allowArrows || e.allowArrows, this.iterator = new a.default(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, document.addEventListener("keydown", function (e) {
            if (n.isEventReadyForHandling(e)) switch (t.usedKeys.includes(e.keyCode) && e.preventDefault(), e.keyCode) {
              case s.keyCodes.TAB:
                n.handleTabPress(e);
                break;

              case s.keyCodes.LEFT:
              case s.keyCodes.UP:
                n.flipLeft();
                break;

              case s.keyCodes.RIGHT:
              case s.keyCodes.DOWN:
                n.flipRight();
                break;

              case s.keyCodes.ENTER:
                n.handleEnterPress(e);
            }
          }, !1);
        }

        return (0, r.default)(t, [{
          key: "activate",
          value: function (t) {
            this.activated = !0, t && this.iterator.setItems(t);
          }
        }, {
          key: "deactivate",
          value: function () {
            this.activated = !1, this.dropCursor();
          }
        }, {
          key: "focusFirst",
          value: function () {
            this.dropCursor(), this.flipRight();
          }
        }, {
          key: "dropCursor",
          value: function () {
            this.iterator.dropCursor();
          }
        }, {
          key: "isEventReadyForHandling",
          value: function (t) {
            var e = [s.keyCodes.TAB, s.keyCodes.ENTER];
            return this.allowArrows && e.push(s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.UP, s.keyCodes.DOWN), !(!this.activated || -1 === e.indexOf(t.keyCode));
          }
        }, {
          key: "handleTabPress",
          value: function (t) {
            switch (t.shiftKey ? a.default.directions.LEFT : a.default.directions.RIGHT) {
              case a.default.directions.RIGHT:
                this.flipRight();
                break;

              case a.default.directions.LEFT:
                this.flipLeft();
            }
          }
        }, {
          key: "flipLeft",
          value: function () {
            this.iterator.previous();
          }
        }, {
          key: "flipRight",
          value: function () {
            this.iterator.next();
          }
        }, {
          key: "handleEnterPress",
          value: function (t) {
            this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), "function" == typeof this.activateCallback && this.activateCallback(), t.preventDefault(), t.stopPropagation());
          }
        }, {
          key: "currentItem",
          get: function () {
            return this.iterator.currentItem;
          }
        }], [{
          key: "usedKeys",
          get: function () {
            return [s.keyCodes.TAB, s.keyCodes.LEFT, s.keyCodes.RIGHT, s.keyCodes.ENTER, s.keyCodes.UP, s.keyCodes.DOWN];
          }
        }]), t;
      }();

      o.default = u, u.displayName = "Flipper", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(103), n(26), n(2), n(3), n(13), n(14), n(360), n(361), n(362), n(28)], void 0 === (r = "function" == typeof (o = function (t, e, o, i, r, a, s, l, c, u, f) {
      "use strict";

      var d,
          p = n(15),
          h = n(1);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = t.BlockToolAPI = void 0, e = h(e), o = h(o), i = h(i), r = h(r), a = h(a), s = p(s), l = h(l), c = h(c), u = h(u), f = h(f), t.BlockToolAPI = d, function (t) {
        t.APPEND_CALLBACK = "appendCallback", t.RENDERED = "rendered", t.MOVED = "moved", t.UPDATED = "updated", t.REMOVED = "removed", t.ON_PASTE = "onPaste";
      }(d || (t.BlockToolAPI = d = {}));

      var v = function () {
        function t(e, n, o, r, a) {
          var l = this;
          (0, i.default)(this, t), this.cachedInputs = [], this.inputIndex = 0, this.modificationDebounceTimer = 450, this.didMutated = s.debounce(function () {
            l.cachedInputs = [], l.updateCurrentInput(), l.call(d.UPDATED);
          }, this.modificationDebounceTimer), this.name = e, this.tool = n, this.class = o, this.settings = r, this.api = a, this.holder = this.compose(), this.mutationObserver = new MutationObserver(this.didMutated), this.tunes = this.makeTunes();
        }

        return (0, r.default)(t, [{
          key: "call",
          value: function (t, e) {
            if (this.tool[t] && this.tool[t] instanceof Function) try {
              this.tool[t].call(this.tool, e);
            } catch (e) {
              s.log("Error during '".concat(t, "' call: ").concat(e.message), "error");
            }
          }
        }, {
          key: "mergeWith",
          value: function (t) {
            return o.default.async(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, o.default.awrap(this.tool.merge(t));

                case 2:
                case "end":
                  return e.stop();
              }
            }, null, this);
          }
        }, {
          key: "save",
          value: function () {
            var t,
                e,
                n,
                i = this;
            return o.default.async(function (r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  return r.next = 2, o.default.awrap(this.tool.save(this.pluginsContent));

                case 2:
                  return t = r.sent, e = window.performance.now(), r.abrupt("return", Promise.resolve(t).then(function (t) {
                    return n = window.performance.now(), {
                      tool: i.name,
                      data: t,
                      time: n - e
                    };
                  }).catch(function (t) {
                    s.log("Saving proccess for ".concat(i.name, " tool failed due to the ").concat(t), "log", "red");
                  }));

                case 5:
                case "end":
                  return r.stop();
              }
            }, null, this);
          }
        }, {
          key: "validate",
          value: function (t) {
            var e;
            return o.default.async(function (n) {
              for (;;) switch (n.prev = n.next) {
                case 0:
                  if (e = !0, !(this.tool.validate instanceof Function)) {
                    n.next = 5;
                    break;
                  }

                  return n.next = 4, o.default.awrap(this.tool.validate(t));

                case 4:
                  e = n.sent;

                case 5:
                  return n.abrupt("return", e);

                case 6:
                case "end":
                  return n.stop();
              }
            }, null, this);
          }
        }, {
          key: "makeTunes",
          value: function () {
            var t = this;
            return [l.default, c.default, u.default].map(function (e) {
              return new e({
                api: t.api,
                settings: t.settings
              });
            });
          }
        }, {
          key: "renderTunes",
          value: function () {
            var t = document.createDocumentFragment();
            return this.tunes.forEach(function (e) {
              a.default.append(t, e.render());
            }), t;
          }
        }, {
          key: "updateCurrentInput",
          value: function () {
            this.currentInput = f.default.anchorNode;
          }
        }, {
          key: "willSelect",
          value: function () {
            this.mutationObserver.observe(this.holder.firstElementChild, {
              childList: !0,
              subtree: !0,
              characterData: !0,
              attributes: !0
            });
          }
        }, {
          key: "willUnselect",
          value: function () {
            this.mutationObserver.disconnect();
          }
        }, {
          key: "compose",
          value: function () {
            var e = a.default.make("div", t.CSS.wrapper),
                n = a.default.make("div", t.CSS.content),
                o = this.tool.render();
            return n.appendChild(o), e.appendChild(n), e;
          }
        }, {
          key: "inputs",
          get: function () {
            if (0 !== this.cachedInputs.length) return this.cachedInputs;
            var t = this.holder,
                n = "[contenteditable], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map(function (t) {
              return 'input[type="'.concat(t, '"]');
            }).join(", "),
                o = s.array(t.querySelectorAll(n));
            return o = o.reduce(function (t, n) {
              return a.default.isNativeInput(n) || a.default.containsOnlyInlineElements(n) ? [].concat((0, e.default)(t), [n]) : [].concat((0, e.default)(t), (0, e.default)(a.default.getDeepestBlockElements(n)));
            }, []), this.inputIndex > o.length - 1 && (this.inputIndex = o.length - 1), this.cachedInputs = o, o;
          }
        }, {
          key: "currentInput",
          get: function () {
            return this.inputs[this.inputIndex];
          },
          set: function (t) {
            var e = this.inputs.findIndex(function (e) {
              return e === t || e.contains(t);
            });
            -1 !== e && (this.inputIndex = e);
          }
        }, {
          key: "firstInput",
          get: function () {
            return this.inputs[0];
          }
        }, {
          key: "lastInput",
          get: function () {
            var t = this.inputs;
            return t[t.length - 1];
          }
        }, {
          key: "nextInput",
          get: function () {
            return this.inputs[this.inputIndex + 1];
          }
        }, {
          key: "previousInput",
          get: function () {
            return this.inputs[this.inputIndex - 1];
          }
        }, {
          key: "pluginsContent",
          get: function () {
            var e = this.holder.querySelector(".".concat(t.CSS.content));
            if (e && e.childNodes.length) for (var n = e.childNodes.length - 1; n >= 0; n--) {
              var o = e.childNodes[n];
              if (!a.default.isExtensionNode(o)) return o;
            }
            return null;
          }
        }, {
          key: "data",
          get: function () {
            return this.save().then(function (t) {
              return t && !s.isEmpty(t.data) ? t.data : {};
            });
          }
        }, {
          key: "sanitize",
          get: function () {
            return this.tool.sanitize;
          }
        }, {
          key: "mergeable",
          get: function () {
            return "function" == typeof this.tool.merge;
          }
        }, {
          key: "isEmpty",
          get: function () {
            var t = a.default.isEmpty(this.pluginsContent),
                e = !this.hasMedia;
            return t && e;
          }
        }, {
          key: "hasMedia",
          get: function () {
            return !!this.holder.querySelector(["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"].join(","));
          }
        }, {
          key: "focused",
          set: function (e) {
            this.holder.classList.toggle(t.CSS.focused, e);
          }
        }, {
          key: "selected",
          set: function (e) {
            e ? this.holder.classList.add(t.CSS.selected) : this.holder.classList.remove(t.CSS.selected);
          },
          get: function () {
            return this.holder.classList.contains(t.CSS.selected);
          }
        }, {
          key: "stretched",
          set: function (e) {
            this.holder.classList.toggle(t.CSS.wrapperStretched, e);
          }
        }, {
          key: "dropTarget",
          set: function (e) {
            this.holder.classList.toggle(t.CSS.dropTarget, e);
          }
        }], [{
          key: "CSS",
          get: function () {
            return {
              wrapper: "ce-block",
              wrapperStretched: "ce-block--stretched",
              content: "ce-block__content",
              focused: "ce-block--focused",
              selected: "ce-block--selected",
              dropTarget: "ce-block--drop-target"
            };
          }
        }]), t;
      }();

      t.default = v, v.displayName = "Block";
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o = n(35);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == o(t) ? t.split("") : Object(t);
    };
  }, function (t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function (t, e, n) {
    var o = n(35),
        i = n(12)("toStringTag"),
        r = "Arguments" == o(function () {
      return arguments;
    }());

    t.exports = function (t) {
      var e, n, a;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? n : r ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a;
    };
  }, function (t, e, n) {
    var o = n(10),
        i = n(30),
        r = n(12)("species");

    t.exports = function (t, e) {
      var n,
          a = o(t).constructor;
      return void 0 === a || null == (n = o(a)[r]) ? e : i(n);
    };
  }, function (t, e, n) {
    var o = n(17),
        i = n(8),
        r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return r[t] || (r[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: o.version,
      mode: n(42) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }, function (t, e, n) {
    var o = n(25),
        i = n(16),
        r = n(44);

    t.exports = function (t) {
      return function (e, n, a) {
        var s,
            l = o(e),
            c = i(l.length),
            u = r(a, c);

        if (t && n != n) {
          for (; c > u;) if ((s = l[u++]) != s) return !0;
        } else for (; c > u; u++) if ((t || u in l) && l[u] === n) return t || u || 0;

        return !t && -1;
      };
    };
  }, function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function (t, e, n) {
    var o = n(35);

    t.exports = Array.isArray || function (t) {
      return "Array" == o(t);
    };
  }, function (t, e, n) {
    var o = n(12)("iterator"),
        i = !1;

    try {
      var r = [7][o]();
      r.return = function () {
        i = !0;
      }, Array.from(r, function () {
        throw 2;
      });
    } catch (t) {}

    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var n = !1;

      try {
        var r = [7],
            a = r[o]();
        a.next = function () {
          return {
            done: n = !0
          };
        }, r[o] = function () {
          return a;
        }, t(r);
      } catch (t) {}

      return n;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(10);

    t.exports = function () {
      var t = o(this),
          e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(62),
        i = RegExp.prototype.exec;

    t.exports = function (t, e) {
      var n = t.exec;

      if ("function" == typeof n) {
        var r = n.call(t, e);
        if ("object" != typeof r) throw new TypeError("RegExp exec method returned something other than an Object or null");
        return r;
      }

      if ("RegExp" !== o(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
      return i.call(t, e);
    };
  }, function (t, e, n) {
    "use strict";

    n(124);

    var o = n(21),
        i = n(24),
        r = n(9),
        a = n(36),
        s = n(12),
        l = n(99),
        c = s("species"),
        u = !r(function () {
      var t = /./;
      return t.exec = function () {
        var t = [];
        return t.groups = {
          a: "7"
        }, t;
      }, "7" !== "".replace(t, "$<a>");
    }),
        f = function () {
      var t = /(?:)/,
          e = t.exec;

      t.exec = function () {
        return e.apply(this, arguments);
      };

      var n = "ab".split(t);
      return 2 === n.length && "a" === n[0] && "b" === n[1];
    }();

    t.exports = function (t, e, n) {
      var d = s(t),
          p = !r(function () {
        var e = {};
        return e[d] = function () {
          return 7;
        }, 7 != ""[t](e);
      }),
          h = p ? !r(function () {
        var e = !1,
            n = /a/;
        return n.exec = function () {
          return e = !0, null;
        }, "split" === t && (n.constructor = {}, n.constructor[c] = function () {
          return n;
        }), n[d](""), !e;
      }) : void 0;

      if (!p || !h || "replace" === t && !u || "split" === t && !f) {
        var v = /./[d],
            g = n(a, d, ""[t], function (t, e, n, o, i) {
          return e.exec === l ? p && !i ? {
            done: !0,
            value: v.call(e, n, o)
          } : {
            done: !0,
            value: t.call(n, e, o)
          } : {
            done: !1
          };
        }),
            y = g[0],
            b = g[1];
        o(String.prototype, t, y), i(RegExp.prototype, d, 2 == e ? function (t, e) {
          return b.call(t, this, e);
        } : function (t) {
          return b.call(t, this);
        });
      }
    };
  }, function (t, e, n) {
    var o = n(29),
        i = n(119),
        r = n(94),
        a = n(10),
        s = n(16),
        l = n(96),
        c = {},
        u = {};
    (e = t.exports = function (t, e, n, f, d) {
      var p,
          h,
          v,
          g,
          y = d ? function () {
        return t;
      } : l(t),
          b = o(n, f, e ? 2 : 1),
          m = 0;
      if ("function" != typeof y) throw TypeError(t + " is not iterable!");

      if (r(y)) {
        for (p = s(t.length); p > m; m++) if ((g = e ? b(a(h = t[m])[0], h[1]) : b(t[m])) === c || g === u) return g;
      } else for (v = y.call(t); !(h = v.next()).done;) if ((g = i(v, b, h.value, e)) === c || g === u) return g;
    }).BREAK = c, e.RETURN = u;
  }, function (t, e, n) {
    var o = n(8).navigator;
    t.exports = o && o.userAgent || "";
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(0),
        r = n(21),
        a = n(57),
        s = n(39),
        l = n(72),
        c = n(56),
        u = n(11),
        f = n(9),
        d = n(68),
        p = n(52),
        h = n(85);

    t.exports = function (t, e, n, v, g, y) {
      var b = o[t],
          m = b,
          k = g ? "set" : "add",
          x = m && m.prototype,
          w = {},
          S = function (t) {
        var e = x[t];
        r(x, t, "delete" == t ? function (t) {
          return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t);
        } : "has" == t ? function (t) {
          return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t);
        } : "get" == t ? function (t) {
          return y && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
        } : "add" == t ? function (t) {
          return e.call(this, 0 === t ? 0 : t), this;
        } : function (t, n) {
          return e.call(this, 0 === t ? 0 : t, n), this;
        });
      };

      if ("function" == typeof m && (y || x.forEach && !f(function () {
        new m().entries().next();
      }))) {
        var E = new m(),
            T = E[k](y ? {} : -0, 1) != E,
            C = f(function () {
          E.has(1);
        }),
            B = d(function (t) {
          new m(t);
        }),
            _ = !y && f(function () {
          for (var t = new m(), e = 5; e--;) t[k](e, e);

          return !t.has(-0);
        });

        B || ((m = e(function (e, n) {
          c(e, m, t);
          var o = h(new b(), e, m);
          return null != n && l(n, g, o[k], o), o;
        })).prototype = x, x.constructor = m), (C || _) && (S("delete"), S("has"), g && S("get")), (_ || T) && S(k), y && x.clear && delete x.clear;
      } else m = v.getConstructor(e, t, g, k), a(m.prototype, n), s.NEED = !0;

      return p(m, t), w[t] = m, i(i.G + i.W + i.F * (m != b), w), y || v.setStrong(m, t, g), m;
    };
  }, function (t, e, n) {
    for (var o, i = n(8), r = n(24), a = n(41), s = a("typed_array"), l = a("view"), c = !(!i.ArrayBuffer || !i.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;) (o = i[d[f++]]) ? (r(o.prototype, s, !0), r(o.prototype, l, !0)) : u = !1;

    t.exports = {
      ABV: c,
      CONSTR: u,
      TYPED: s,
      VIEW: l
    };
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "methods",
          get: function () {
            return {
              blocks: this.Editor.BlocksAPI.methods,
              caret: this.Editor.CaretAPI.methods,
              events: this.Editor.EventsAPI.methods,
              listeners: this.Editor.ListenersAPI.methods,
              notifier: this.Editor.NotifierAPI.methods,
              sanitizer: this.Editor.SanitizerAPI.methods,
              saver: this.Editor.SaverAPI.methods,
              selection: this.Editor.SelectionAPI.methods,
              styles: this.Editor.StylesAPI.classes,
              toolbar: this.Editor.ToolbarAPI.methods,
              inlineToolbar: this.Editor.InlineToolbarAPI.methods,
              tooltip: this.Editor.TooltipAPI.methods
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "API", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(15),
          p = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = d(f);

      var h = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).nodes = {
            wrapper: null,
            content: null,
            actions: null,
            plusButton: null,
            blockActionsButtons: null,
            settingsToggler: null
          }, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "make",
          value: function () {
            var t = this;
            this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), ["content", "actions"].forEach(function (e) {
              t.nodes[e] = u.default.make("div", t.CSS[e]);
            }), u.default.append(this.nodes.wrapper, this.nodes.content), u.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), u.default.append(this.nodes.plusButton, u.default.svg("plus", 14, 14)), u.default.append(this.nodes.content, this.nodes.plusButton), this.Editor.Listeners.on(this.nodes.plusButton, "click", function () {
              return t.plusButtonClicked();
            }, !1);
            var e = u.default.make("div");
            e.appendChild(document.createTextNode("Add")), e.appendChild(u.default.make("div", this.CSS.plusButtonShortcut, {
              textContent: "⇥ Tab"
            })), this.Editor.Tooltip.onHover(this.nodes.plusButton, e), this.Editor.Toolbox.make(), this.nodes.blockActionsButtons = u.default.make("div", this.CSS.blockActionsButtons), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
            var n = u.default.svg("dots", 8, 8);
            u.default.append(this.nodes.settingsToggler, n), u.default.append(this.nodes.blockActionsButtons, this.nodes.settingsToggler), u.default.append(this.nodes.actions, this.nodes.blockActionsButtons), this.Editor.Tooltip.onHover(this.nodes.settingsToggler, "Click to tune", {
              placement: "top"
            }), this.Editor.BlockSettings.make(), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.bindEvents();
          }
        }, {
          key: "move",
          value: function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            t && (this.Editor.Toolbox.close(), this.Editor.BlockSettings.close());
            var e = this.Editor.BlockManager.currentBlock.holder;

            if (e) {
              var n = this.Editor.UI.isMobile,
                  o = e.offsetHeight,
                  i = e.offsetTop;
              if (n) i += o;else {
                var r = Math.floor(o / 2);
                this.nodes.plusButton.style.transform = "translate3d(0, calc(".concat(r, "px - 50%), 0)"), this.Editor.Toolbox.nodes.toolbox.style.transform = "translate3d(0, calc(".concat(r, "px - 50%), 0)");
              }
              this.nodes.wrapper.style.transform = "translate3D(0, ".concat(Math.floor(i), "px, 0)");
            }
          }
        }, {
          key: "open",
          value: function () {
            var t = this,
                e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            f.delay(function () {
              t.move(n), t.nodes.wrapper.classList.add(t.CSS.toolbarOpened), e ? t.blockActions.show() : t.blockActions.hide();
            }, 50)();
          }
        }, {
          key: "close",
          value: function () {
            this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.Editor.Toolbox.close(), this.Editor.BlockSettings.close();
          }
        }, {
          key: "plusButtonClicked",
          value: function () {
            this.Editor.Toolbox.toggle();
          }
        }, {
          key: "bindEvents",
          value: function () {
            var t = this;
            this.Editor.Listeners.on(this.nodes.settingsToggler, "click", function () {
              return t.settingsTogglerClicked();
            });
          }
        }, {
          key: "settingsTogglerClicked",
          value: function () {
            this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open();
          }
        }, {
          key: "CSS",
          get: function () {
            return {
              toolbar: "ce-toolbar",
              content: "ce-toolbar__content",
              actions: "ce-toolbar__actions",
              actionsOpened: "ce-toolbar__actions--opened",
              toolbarOpened: "ce-toolbar--opened",
              plusButton: "ce-toolbar__plus",
              plusButtonShortcut: "ce-toolbar__plus-shortcut",
              plusButtonHidden: "ce-toolbar__plus--hidden",
              blockActionsButtons: "ce-toolbar__actions-buttons",
              settingsToggler: "ce-toolbar__settings-btn"
            };
          }
        }, {
          key: "opened",
          get: function () {
            return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
          }
        }, {
          key: "plusButton",
          get: function () {
            var t = this;
            return {
              hide: function () {
                return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden);
              },
              show: function () {
                t.Editor.Toolbox.isEmpty || t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden);
              }
            };
          }
        }, {
          key: "blockActions",
          get: function () {
            var t = this;
            return {
              hide: function () {
                t.nodes.actions.classList.remove(t.CSS.actionsOpened);
              },
              show: function () {
                t.nodes.actions.classList.add(t.CSS.actionsOpened);
              }
            };
          }
        }]), e;
      }(c.default);

      o.default = h, h.displayName = "Toolbar", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o = n(11),
        i = n(8).document,
        r = o(i) && o(i.createElement);

    t.exports = function (t) {
      return r ? i.createElement(t) : {};
    };
  }, function (t, e, n) {
    e.f = n(12);
  }, function (t, e, n) {
    var o = n(64)("keys"),
        i = n(41);

    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  }, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e, n) {
    var o = n(8).document;
    t.exports = o && o.documentElement;
  }, function (t, e, n) {
    var o = n(11),
        i = n(10),
        r = function (t, e) {
      if (i(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
    };

    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, o) {
        try {
          (o = n(29)(Function.call, n(32).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array);
        } catch (t) {
          e = !0;
        }

        return function (t, n) {
          return r(t, n), e ? t.__proto__ = n : o(t, n), t;
        };
      }({}, !1) : void 0),
      check: r
    };
  }, function (t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  }, function (t, e, n) {
    var o = n(11),
        i = n(83).set;

    t.exports = function (t, e, n) {
      var r,
          a = e.constructor;
      return a !== n && "function" == typeof a && (r = a.prototype) !== n.prototype && o(r) && i && i(t, r), t;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(31),
        i = n(36);

    t.exports = function (t) {
      var e = String(i(this)),
          n = "",
          r = o(t);
      if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");

      for (; r > 0; (r >>>= 1) && (e += e)) 1 & r && (n += e);

      return n;
    };
  }, function (t, e) {
    t.exports = Math.sign || function (t) {
      return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
    };
  }, function (t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (t) {
      return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1;
    } : n;
  }, function (t, e, n) {
    var o = n(31),
        i = n(36);

    t.exports = function (t) {
      return function (e, n) {
        var r,
            a,
            s = String(i(e)),
            l = o(n),
            c = s.length;
        return l < 0 || l >= c ? t ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : r : t ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536;
      };
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(42),
        i = n(0),
        r = n(21),
        a = n(24),
        s = n(54),
        l = n(118),
        c = n(52),
        u = n(47),
        f = n(12)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function () {
      return this;
    };

    t.exports = function (t, e, n, h, v, g, y) {
      l(n, e, h);

      var b,
          m,
          k,
          x = function (t) {
        if (!d && t in T) return T[t];

        switch (t) {
          case "keys":
          case "values":
            return function () {
              return new n(this, t);
            };
        }

        return function () {
          return new n(this, t);
        };
      },
          w = e + " Iterator",
          S = "values" == v,
          E = !1,
          T = t.prototype,
          C = T[f] || T["@@iterator"] || v && T[v],
          B = C || x(v),
          _ = v ? S ? x("entries") : B : void 0,
          I = "Array" == e && T.entries || C;

      if (I && (k = u(I.call(new t()))) !== Object.prototype && k.next && (c(k, w, !0), o || "function" == typeof k[f] || a(k, f, p)), S && C && "values" !== C.name && (E = !0, B = function () {
        return C.call(this);
      }), o && !y || !d && !E && T[f] || a(T, f, B), s[e] = B, s[w] = p, v) if (b = {
        values: S ? B : x("values"),
        keys: g ? B : x("keys"),
        entries: _
      }, y) for (m in b) m in T || r(T, m, b[m]);else i(i.P + i.F * (d || E), e, b);
      return b;
    };
  }, function (t, e, n) {
    var o = n(92),
        i = n(36);

    t.exports = function (t, e, n) {
      if (o(e)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(i(t));
    };
  }, function (t, e, n) {
    var o = n(11),
        i = n(35),
        r = n(12)("match");

    t.exports = function (t) {
      var e;
      return o(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == i(t));
    };
  }, function (t, e, n) {
    var o = n(12)("match");

    t.exports = function (t) {
      var e = /./;

      try {
        "/./"[t](e);
      } catch (n) {
        try {
          return e[o] = !1, !"/./"[t](e);
        } catch (t) {}
      }

      return !0;
    };
  }, function (t, e, n) {
    var o = n(54),
        i = n(12)("iterator"),
        r = Array.prototype;

    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || r[i] === t);
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(19),
        i = n(40);

    t.exports = function (t, e, n) {
      e in t ? o.f(t, e, i(0, n)) : t[e] = n;
    };
  }, function (t, e, n) {
    var o = n(62),
        i = n(12)("iterator"),
        r = n(54);

    t.exports = n(17).getIteratorMethod = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || r[o(t)];
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(20),
        i = n(44),
        r = n(16);

    t.exports = function (t) {
      for (var e = o(this), n = r(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : i(l, n); c > s;) e[s++] = t;

      return e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(48),
        i = n(123),
        r = n(54),
        a = n(25);
    t.exports = n(90)(Array, "Array", function (t, e) {
      this._t = a(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
    }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries");
  }, function (t, e, n) {
    "use strict";

    var o,
        i,
        r = n(69),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        l = a,
        c = (o = /a/, i = /b*/g, a.call(o, "a"), a.call(i, "a"), 0 !== o.lastIndex || 0 !== i.lastIndex),
        u = void 0 !== /()??/.exec("")[1];
    (c || u) && (l = function (t) {
      var e,
          n,
          o,
          i,
          l = this;
      return u && (n = new RegExp("^" + l.source + "$(?!\\s)", r.call(l))), c && (e = l.lastIndex), o = a.call(l, t), c && o && (l.lastIndex = l.global ? o.index + o[0].length : e), u && o && o.length > 1 && s.call(o[0], n, function () {
        for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0);
      }), o;
    }), t.exports = l;
  }, function (t, e, n) {
    "use strict";

    var o = n(89)(!0);

    t.exports = function (t, e, n) {
      return e + (n ? o(t, e).length : 1);
    };
  }, function (t, e, n) {
    var o,
        i,
        r,
        a = n(29),
        s = n(112),
        l = n(82),
        c = n(78),
        u = n(8),
        f = u.process,
        d = u.setImmediate,
        p = u.clearImmediate,
        h = u.MessageChannel,
        v = u.Dispatch,
        g = 0,
        y = {},
        b = function () {
      var t = +this;

      if (y.hasOwnProperty(t)) {
        var e = y[t];
        delete y[t], e();
      }
    },
        m = function (t) {
      b.call(t.data);
    };

    d && p || (d = function (t) {
      for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);

      return y[++g] = function () {
        s("function" == typeof t ? t : Function(t), e);
      }, o(g), g;
    }, p = function (t) {
      delete y[t];
    }, "process" == n(35)(f) ? o = function (t) {
      f.nextTick(a(b, t, 1));
    } : v && v.now ? o = function (t) {
      v.now(a(b, t, 1));
    } : h ? (r = (i = new h()).port2, i.port1.onmessage = m, o = a(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function (t) {
      u.postMessage(t + "", "*");
    }, u.addEventListener("message", m, !1)) : o = "onreadystatechange" in c("script") ? function (t) {
      l.appendChild(c("script")).onreadystatechange = function () {
        l.removeChild(this), b.call(t);
      };
    } : function (t) {
      setTimeout(a(b, t, 1), 0);
    }), t.exports = {
      set: d,
      clear: p
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(18),
        r = n(42),
        a = n(75),
        s = n(24),
        l = n(57),
        c = n(9),
        u = n(56),
        f = n(31),
        d = n(16),
        p = n(131),
        h = n(46).f,
        v = n(19).f,
        g = n(97),
        y = n(52),
        b = "prototype",
        m = "Wrong index!",
        k = o.ArrayBuffer,
        x = o.DataView,
        w = o.Math,
        S = o.RangeError,
        E = o.Infinity,
        T = k,
        C = w.abs,
        B = w.pow,
        _ = w.floor,
        I = w.log,
        O = w.LN2,
        N = i ? "_b" : "buffer",
        L = i ? "_l" : "byteLength",
        M = i ? "_o" : "byteOffset";

    function A(t, e, n) {
      var o,
          i,
          r,
          a = new Array(n),
          s = 8 * n - e - 1,
          l = (1 << s) - 1,
          c = l >> 1,
          u = 23 === e ? B(2, -24) - B(2, -77) : 0,
          f = 0,
          d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

      for ((t = C(t)) != t || t === E ? (i = t != t ? 1 : 0, o = l) : (o = _(I(t) / O), t * (r = B(2, -o)) < 1 && (o--, r *= 2), (t += o + c >= 1 ? u / r : u * B(2, 1 - c)) * r >= 2 && (o++, r /= 2), o + c >= l ? (i = 0, o = l) : o + c >= 1 ? (i = (t * r - 1) * B(2, e), o += c) : (i = t * B(2, c - 1) * B(2, e), o = 0)); e >= 8; a[f++] = 255 & i, i /= 256, e -= 8);

      for (o = o << e | i, s += e; s > 0; a[f++] = 255 & o, o /= 256, s -= 8);

      return a[--f] |= 128 * d, a;
    }

    function P(t, e, n) {
      var o,
          i = 8 * n - e - 1,
          r = (1 << i) - 1,
          a = r >> 1,
          s = i - 7,
          l = n - 1,
          c = t[l--],
          u = 127 & c;

      for (c >>= 7; s > 0; u = 256 * u + t[l], l--, s -= 8);

      for (o = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; o = 256 * o + t[l], l--, s -= 8);

      if (0 === u) u = 1 - a;else {
        if (u === r) return o ? NaN : c ? -E : E;
        o += B(2, e), u -= a;
      }
      return (c ? -1 : 1) * o * B(2, u - e);
    }

    function R(t) {
      return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
    }

    function j(t) {
      return [255 & t];
    }

    function F(t) {
      return [255 & t, t >> 8 & 255];
    }

    function D(t) {
      return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
    }

    function U(t) {
      return A(t, 52, 8);
    }

    function H(t) {
      return A(t, 23, 4);
    }

    function z(t, e, n) {
      v(t[b], e, {
        get: function () {
          return this[n];
        }
      });
    }

    function G(t, e, n, o) {
      var i = p(+n);
      if (i + e > t[L]) throw S(m);
      var r = t[N]._b,
          a = i + t[M],
          s = r.slice(a, a + e);
      return o ? s : s.reverse();
    }

    function W(t, e, n, o, i, r) {
      var a = p(+n);
      if (a + e > t[L]) throw S(m);

      for (var s = t[N]._b, l = a + t[M], c = o(+i), u = 0; u < e; u++) s[l + u] = c[r ? u : e - u - 1];
    }

    if (a.ABV) {
      if (!c(function () {
        k(1);
      }) || !c(function () {
        new k(-1);
      }) || c(function () {
        return new k(), new k(1.5), new k(NaN), "ArrayBuffer" != k.name;
      })) {
        for (var V, X = (k = function (t) {
          return u(this, k), new T(p(t));
        })[b] = T[b], Y = h(T), K = 0; Y.length > K;) (V = Y[K++]) in k || s(k, V, T[V]);

        r || (X.constructor = k);
      }

      var Z = new x(new k(2)),
          q = x[b].setInt8;
      Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || l(x[b], {
        setInt8: function (t, e) {
          q.call(this, t, e << 24 >> 24);
        },
        setUint8: function (t, e) {
          q.call(this, t, e << 24 >> 24);
        }
      }, !0);
    } else k = function (t) {
      u(this, k, "ArrayBuffer");
      var e = p(t);
      this._b = g.call(new Array(e), 0), this[L] = e;
    }, x = function (t, e, n) {
      u(this, x, "DataView"), u(t, k, "DataView");
      var o = t[L],
          i = f(e);
      if (i < 0 || i > o) throw S("Wrong offset!");
      if (i + (n = void 0 === n ? o - i : d(n)) > o) throw S("Wrong length!");
      this[N] = t, this[M] = i, this[L] = n;
    }, i && (z(k, "byteLength", "_l"), z(x, "buffer", "_b"), z(x, "byteLength", "_l"), z(x, "byteOffset", "_o")), l(x[b], {
      getInt8: function (t) {
        return G(this, 1, t)[0] << 24 >> 24;
      },
      getUint8: function (t) {
        return G(this, 1, t)[0];
      },
      getInt16: function (t) {
        var e = G(this, 2, t, arguments[1]);
        return (e[1] << 8 | e[0]) << 16 >> 16;
      },
      getUint16: function (t) {
        var e = G(this, 2, t, arguments[1]);
        return e[1] << 8 | e[0];
      },
      getInt32: function (t) {
        return R(G(this, 4, t, arguments[1]));
      },
      getUint32: function (t) {
        return R(G(this, 4, t, arguments[1])) >>> 0;
      },
      getFloat32: function (t) {
        return P(G(this, 4, t, arguments[1]), 23, 4);
      },
      getFloat64: function (t) {
        return P(G(this, 8, t, arguments[1]), 52, 8);
      },
      setInt8: function (t, e) {
        W(this, 1, t, j, e);
      },
      setUint8: function (t, e) {
        W(this, 1, t, j, e);
      },
      setInt16: function (t, e) {
        W(this, 2, t, F, e, arguments[2]);
      },
      setUint16: function (t, e) {
        W(this, 2, t, F, e, arguments[2]);
      },
      setInt32: function (t, e) {
        W(this, 4, t, D, e, arguments[2]);
      },
      setUint32: function (t, e) {
        W(this, 4, t, D, e, arguments[2]);
      },
      setFloat32: function (t, e) {
        W(this, 4, t, H, e, arguments[2]);
      },
      setFloat64: function (t, e) {
        W(this, 8, t, U, e, arguments[2]);
      }
    });

    y(k, "ArrayBuffer"), y(x, "DataView"), s(x[b], a.VIEW, !0), e.ArrayBuffer = k, e.DataView = x;
  }, function (t, e, n) {
    var o = n(352),
        i = n(353),
        r = n(354);

    t.exports = function (t) {
      return o(t) || i(t) || r();
    };
  }, function (t, e, n) {
    t.exports = !n(18) && !n(9)(function () {
      return 7 != Object.defineProperty(n(78)("div"), "a", {
        get: function () {
          return 7;
        }
      }).a;
    });
  }, function (t, e, n) {
    var o = n(8),
        i = n(17),
        r = n(42),
        a = n(79),
        s = n(19).f;

    t.exports = function (t) {
      var e = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
      "_" == t.charAt(0) || t in e || s(e, t, {
        value: a.f(t)
      });
    };
  }, function (t, e, n) {
    var o = n(23),
        i = n(25),
        r = n(65)(!1),
        a = n(80)("IE_PROTO");

    t.exports = function (t, e) {
      var n,
          s = i(t),
          l = 0,
          c = [];

      for (n in s) n != a && o(s, n) && c.push(n);

      for (; e.length > l;) o(s, n = e[l++]) && (~r(c, n) || c.push(n));

      return c;
    };
  }, function (t, e, n) {
    var o = n(19),
        i = n(10),
        r = n(43);
    t.exports = n(18) ? Object.defineProperties : function (t, e) {
      i(t);

      for (var n, a = r(e), s = a.length, l = 0; s > l;) o.f(t, n = a[l++], e[n]);

      return t;
    };
  }, function (t, e, n) {
    var o = n(25),
        i = n(46).f,
        r = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    t.exports.f = function (t) {
      return a && "[object Window]" == r.call(t) ? function (t) {
        try {
          return i(t);
        } catch (t) {
          return a.slice();
        }
      }(t) : i(o(t));
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(18),
        i = n(43),
        r = n(66),
        a = n(61),
        s = n(20),
        l = n(60),
        c = Object.assign;
    t.exports = !c || n(9)(function () {
      var t = {},
          e = {},
          n = Symbol(),
          o = "abcdefghijklmnopqrst";
      return t[n] = 7, o.split("").forEach(function (t) {
        e[t] = t;
      }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != o;
    }) ? function (t, e) {
      for (var n = s(t), c = arguments.length, u = 1, f = r.f, d = a.f; c > u;) for (var p, h = l(arguments[u++]), v = f ? i(h).concat(f(h)) : i(h), g = v.length, y = 0; g > y;) p = v[y++], o && !d.call(h, p) || (n[p] = h[p]);

      return n;
    } : c;
  }, function (t, e) {
    t.exports = Object.is || function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(30),
        i = n(11),
        r = n(112),
        a = [].slice,
        s = {},
        l = function (t, e, n) {
      if (!(e in s)) {
        for (var o = [], i = 0; i < e; i++) o[i] = "a[" + i + "]";

        s[e] = Function("F,a", "return new F(" + o.join(",") + ")");
      }

      return s[e](t, n);
    };

    t.exports = Function.bind || function (t) {
      var e = o(this),
          n = a.call(arguments, 1),
          s = function () {
        var o = n.concat(a.call(arguments));
        return this instanceof s ? l(e, o.length, o) : r(e, o, t);
      };

      return i(e.prototype) && (s.prototype = e.prototype), s;
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      var o = void 0 === n;

      switch (e.length) {
        case 0:
          return o ? t() : t.call(n);

        case 1:
          return o ? t(e[0]) : t.call(n, e[0]);

        case 2:
          return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

        case 3:
          return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

        case 4:
          return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
      }

      return t.apply(n, e);
    };
  }, function (t, e, n) {
    var o = n(8).parseInt,
        i = n(53).trim,
        r = n(84),
        a = /^[-+]?0[xX]/;
    t.exports = 8 !== o(r + "08") || 22 !== o(r + "0x16") ? function (t, e) {
      var n = i(String(t), 3);
      return o(n, e >>> 0 || (a.test(n) ? 16 : 10));
    } : o;
  }, function (t, e, n) {
    var o = n(8).parseFloat,
        i = n(53).trim;
    t.exports = 1 / o(n(84) + "-0") != -1 / 0 ? function (t) {
      var e = i(String(t), 3),
          n = o(e);
      return 0 === n && "-" == e.charAt(0) ? -0 : n;
    } : o;
  }, function (t, e, n) {
    var o = n(35);

    t.exports = function (t, e) {
      if ("number" != typeof t && "Number" != o(t)) throw TypeError(e);
      return +t;
    };
  }, function (t, e, n) {
    var o = n(11),
        i = Math.floor;

    t.exports = function (t) {
      return !o(t) && isFinite(t) && i(t) === t;
    };
  }, function (t, e) {
    t.exports = Math.log1p || function (t) {
      return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t);
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(45),
        i = n(40),
        r = n(52),
        a = {};
    n(24)(a, n(12)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, n) {
      t.prototype = o(a, {
        next: i(1, n)
      }), r(t, e + " Iterator");
    };
  }, function (t, e, n) {
    var o = n(10);

    t.exports = function (t, e, n, i) {
      try {
        return i ? e(o(n)[0], n[1]) : e(n);
      } catch (e) {
        var r = t.return;
        throw void 0 !== r && o(r.call(t)), e;
      }
    };
  }, function (t, e, n) {
    var o = n(266);

    t.exports = function (t, e) {
      return new (o(t))(e);
    };
  }, function (t, e, n) {
    var o = n(30),
        i = n(20),
        r = n(60),
        a = n(16);

    t.exports = function (t, e, n, s, l) {
      o(e);
      var c = i(t),
          u = r(c),
          f = a(c.length),
          d = l ? f - 1 : 0,
          p = l ? -1 : 1;
      if (n < 2) for (;;) {
        if (d in u) {
          s = u[d], d += p;
          break;
        }

        if (d += p, l ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value");
      }

      for (; l ? d >= 0 : f > d; d += p) d in u && (s = e(s, u[d], d, c));

      return s;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(20),
        i = n(44),
        r = n(16);

    t.exports = [].copyWithin || function (t, e) {
      var n = o(this),
          a = r(n.length),
          s = i(t, a),
          l = i(e, a),
          c = arguments.length > 2 ? arguments[2] : void 0,
          u = Math.min((void 0 === c ? a : i(c, a)) - l, a - s),
          f = 1;

      for (l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0;) l in n ? n[s] = n[l] : delete n[s], s += f, l += f;

      return n;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      return {
        value: e,
        done: !!t
      };
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(99);
    n(0)({
      target: "RegExp",
      proto: !0,
      forced: o !== /./.exec
    }, {
      exec: o
    });
  }, function (t, e, n) {
    n(18) && "g" != /./g.flags && n(19).f(RegExp.prototype, "flags", {
      configurable: !0,
      get: n(69)
    });
  }, function (t, e, n) {
    "use strict";

    var o,
        i,
        r,
        a,
        s = n(42),
        l = n(8),
        c = n(29),
        u = n(62),
        f = n(0),
        d = n(11),
        p = n(30),
        h = n(56),
        v = n(72),
        g = n(63),
        y = n(101).set,
        b = n(286)(),
        m = n(127),
        k = n(287),
        x = n(73),
        w = n(128),
        S = l.TypeError,
        E = l.process,
        T = E && E.versions,
        C = T && T.v8 || "",
        B = l.Promise,
        _ = "process" == u(E),
        I = function () {},
        O = i = m.f,
        N = !!function () {
      try {
        var t = B.resolve(1),
            e = (t.constructor = {})[n(12)("species")] = function (t) {
          t(I, I);
        };

        return (_ || "function" == typeof PromiseRejectionEvent) && t.then(I) instanceof e && 0 !== C.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
      } catch (t) {}
    }(),
        L = function (t) {
      var e;
      return !(!d(t) || "function" != typeof (e = t.then)) && e;
    },
        M = function (t, e) {
      if (!t._n) {
        t._n = !0;
        var n = t._c;
        b(function () {
          for (var o = t._v, i = 1 == t._s, r = 0, a = function (e) {
            var n,
                r,
                a,
                s = i ? e.ok : e.fail,
                l = e.resolve,
                c = e.reject,
                u = e.domain;

            try {
              s ? (i || (2 == t._h && R(t), t._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === e.promise ? c(S("Promise-chain cycle")) : (r = L(n)) ? r.call(n, l, c) : l(n)) : c(o);
            } catch (t) {
              u && !a && u.exit(), c(t);
            }
          }; n.length > r;) a(n[r++]);

          t._c = [], t._n = !1, e && !t._h && A(t);
        });
      }
    },
        A = function (t) {
      y.call(l, function () {
        var e,
            n,
            o,
            i = t._v,
            r = P(t);
        if (r && (e = k(function () {
          _ ? E.emit("unhandledRejection", i, t) : (n = l.onunhandledrejection) ? n({
            promise: t,
            reason: i
          }) : (o = l.console) && o.error && o.error("Unhandled promise rejection", i);
        }), t._h = _ || P(t) ? 2 : 1), t._a = void 0, r && e.e) throw e.v;
      });
    },
        P = function (t) {
      return 1 !== t._h && 0 === (t._a || t._c).length;
    },
        R = function (t) {
      y.call(l, function () {
        var e;
        _ ? E.emit("rejectionHandled", t) : (e = l.onrejectionhandled) && e({
          promise: t,
          reason: t._v
        });
      });
    },
        j = function (t) {
      var e = this;
      e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), M(e, !0));
    },
        F = function (t) {
      var e,
          n = this;

      if (!n._d) {
        n._d = !0, n = n._w || n;

        try {
          if (n === t) throw S("Promise can't be resolved itself");
          (e = L(t)) ? b(function () {
            var o = {
              _w: n,
              _d: !1
            };

            try {
              e.call(t, c(F, o, 1), c(j, o, 1));
            } catch (t) {
              j.call(o, t);
            }
          }) : (n._v = t, n._s = 1, M(n, !1));
        } catch (t) {
          j.call({
            _w: n,
            _d: !1
          }, t);
        }
      }
    };

    N || (B = function (t) {
      h(this, B, "Promise", "_h"), p(t), o.call(this);

      try {
        t(c(F, this, 1), c(j, this, 1));
      } catch (t) {
        j.call(this, t);
      }
    }, (o = function (t) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
    }).prototype = n(57)(B.prototype, {
      then: function (t, e) {
        var n = O(g(this, B));
        return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _ ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && M(this, !1), n.promise;
      },
      catch: function (t) {
        return this.then(void 0, t);
      }
    }), r = function () {
      var t = new o();
      this.promise = t, this.resolve = c(F, t, 1), this.reject = c(j, t, 1);
    }, m.f = O = function (t) {
      return t === B || t === a ? new r(t) : i(t);
    }), f(f.G + f.W + f.F * !N, {
      Promise: B
    }), n(52)(B, "Promise"), n(55)("Promise"), a = n(17).Promise, f(f.S + f.F * !N, "Promise", {
      reject: function (t) {
        var e = O(this);
        return (0, e.reject)(t), e.promise;
      }
    }), f(f.S + f.F * (s || !N), "Promise", {
      resolve: function (t) {
        return w(s && this === a ? B : this, t);
      }
    }), f(f.S + f.F * !(N && n(68)(function (t) {
      B.all(t).catch(I);
    })), "Promise", {
      all: function (t) {
        var e = this,
            n = O(e),
            o = n.resolve,
            i = n.reject,
            r = k(function () {
          var n = [],
              r = 0,
              a = 1;
          v(t, !1, function (t) {
            var s = r++,
                l = !1;
            n.push(void 0), a++, e.resolve(t).then(function (t) {
              l || (l = !0, n[s] = t, --a || o(n));
            }, i);
          }), --a || o(n);
        });
        return r.e && i(r.v), n.promise;
      },
      race: function (t) {
        var e = this,
            n = O(e),
            o = n.reject,
            i = k(function () {
          v(t, !1, function (t) {
            e.resolve(t).then(n.resolve, o);
          });
        });
        return i.e && o(i.v), n.promise;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(30);

    function i(t) {
      var e, n;
      this.promise = new t(function (t, o) {
        if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
        e = t, n = o;
      }), this.resolve = o(e), this.reject = o(n);
    }

    t.exports.f = function (t) {
      return new i(t);
    };
  }, function (t, e, n) {
    var o = n(10),
        i = n(11),
        r = n(127);

    t.exports = function (t, e) {
      if (o(t), i(e) && e.constructor === t) return e;
      var n = r.f(t);
      return (0, n.resolve)(e), n.promise;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(19).f,
        i = n(45),
        r = n(57),
        a = n(29),
        s = n(56),
        l = n(72),
        c = n(90),
        u = n(123),
        f = n(55),
        d = n(18),
        p = n(39).fastKey,
        h = n(49),
        v = d ? "_s" : "size",
        g = function (t, e) {
      var n,
          o = p(e);
      if ("F" !== o) return t._i[o];

      for (n = t._f; n; n = n.n) if (n.k == e) return n;
    };

    t.exports = {
      getConstructor: function (t, e, n, c) {
        var u = t(function (t, o) {
          s(t, u, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[v] = 0, null != o && l(o, n, t[c], t);
        });
        return r(u.prototype, {
          clear: function () {
            for (var t = h(this, e), n = t._i, o = t._f; o; o = o.n) o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];

            t._f = t._l = void 0, t[v] = 0;
          },
          delete: function (t) {
            var n = h(this, e),
                o = g(n, t);

            if (o) {
              var i = o.n,
                  r = o.p;
              delete n._i[o.i], o.r = !0, r && (r.n = i), i && (i.p = r), n._f == o && (n._f = i), n._l == o && (n._l = r), n[v]--;
            }

            return !!o;
          },
          forEach: function (t) {
            h(this, e);

            for (var n, o = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (o(n.v, n.k, this); n && n.r;) n = n.p;
          },
          has: function (t) {
            return !!g(h(this, e), t);
          }
        }), d && o(u.prototype, "size", {
          get: function () {
            return h(this, e)[v];
          }
        }), u;
      },
      def: function (t, e, n) {
        var o,
            i,
            r = g(t, e);
        return r ? r.v = n : (t._l = r = {
          i: i = p(e, !0),
          k: e,
          v: n,
          p: o = t._l,
          n: void 0,
          r: !1
        }, t._f || (t._f = r), o && (o.n = r), t[v]++, "F" !== i && (t._i[i] = r)), t;
      },
      getEntry: g,
      setStrong: function (t, e, n) {
        c(t, e, function (t, n) {
          this._t = h(t, e), this._k = n, this._l = void 0;
        }, function () {
          for (var t = this._k, e = this._l; e && e.r;) e = e.p;

          return this._t && (this._l = e = e ? e.n : this._t._f) ? u(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, u(1));
        }, n ? "entries" : "values", !n, !0), f(e);
      }
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(57),
        i = n(39).getWeak,
        r = n(10),
        a = n(11),
        s = n(56),
        l = n(72),
        c = n(34),
        u = n(23),
        f = n(49),
        d = c(5),
        p = c(6),
        h = 0,
        v = function (t) {
      return t._l || (t._l = new g());
    },
        g = function () {
      this.a = [];
    },
        y = function (t, e) {
      return d(t.a, function (t) {
        return t[0] === e;
      });
    };

    g.prototype = {
      get: function (t) {
        var e = y(this, t);
        if (e) return e[1];
      },
      has: function (t) {
        return !!y(this, t);
      },
      set: function (t, e) {
        var n = y(this, t);
        n ? n[1] = e : this.a.push([t, e]);
      },
      delete: function (t) {
        var e = p(this.a, function (e) {
          return e[0] === t;
        });
        return ~e && this.a.splice(e, 1), !!~e;
      }
    }, t.exports = {
      getConstructor: function (t, e, n, r) {
        var c = t(function (t, o) {
          s(t, c, e, "_i"), t._t = e, t._i = h++, t._l = void 0, null != o && l(o, n, t[r], t);
        });
        return o(c.prototype, {
          delete: function (t) {
            if (!a(t)) return !1;
            var n = i(t);
            return !0 === n ? v(f(this, e)).delete(t) : n && u(n, this._i) && delete n[this._i];
          },
          has: function (t) {
            if (!a(t)) return !1;
            var n = i(t);
            return !0 === n ? v(f(this, e)).has(t) : n && u(n, this._i);
          }
        }), c;
      },
      def: function (t, e, n) {
        var o = i(r(e), !0);
        return !0 === o ? v(t).set(e, n) : o[t._i] = n, t;
      },
      ufstore: v
    };
  }, function (t, e, n) {
    var o = n(31),
        i = n(16);

    t.exports = function (t) {
      if (void 0 === t) return 0;
      var e = o(t),
          n = i(e);
      if (e !== n) throw RangeError("Wrong length!");
      return n;
    };
  }, function (t, e, n) {
    var o = n(46),
        i = n(66),
        r = n(10),
        a = n(8).Reflect;

    t.exports = a && a.ownKeys || function (t) {
      var e = o.f(r(t)),
          n = i.f;
      return n ? e.concat(n(t)) : e;
    };
  }, function (t, e, n) {
    var o = n(16),
        i = n(86),
        r = n(36);

    t.exports = function (t, e, n, a) {
      var s = String(r(t)),
          l = s.length,
          c = void 0 === n ? " " : String(n),
          u = o(e);
      if (u <= l || "" == c) return s;
      var f = u - l,
          d = i.call(c, Math.ceil(f / c.length));
      return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
    };
  }, function (t, e, n) {
    var o = n(18),
        i = n(43),
        r = n(25),
        a = n(61).f;

    t.exports = function (t) {
      return function (e) {
        for (var n, s = r(e), l = i(s), c = l.length, u = 0, f = []; c > u;) n = l[u++], o && !a.call(s, n) || f.push(t ? [n, s[n]] : s[n]);

        return f;
      };
    };
  }, function (t, e, n) {
    var o = function (t) {
      "use strict";

      var e,
          n = Object.prototype,
          o = n.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          r = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";

      function l(t, e, n, o) {
        var i = e && e.prototype instanceof v ? e : v,
            r = Object.create(i.prototype),
            a = new B(o || []);
        return r._invoke = function (t, e, n) {
          var o = u;
          return function (i, r) {
            if (o === d) throw new Error("Generator is already running");

            if (o === p) {
              if ("throw" === i) throw r;
              return I();
            }

            for (n.method = i, n.arg = r;;) {
              var a = n.delegate;

              if (a) {
                var s = E(a, n);

                if (s) {
                  if (s === h) continue;
                  return s;
                }
              }

              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === u) throw o = p, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = d;
              var l = c(t, e, n);

              if ("normal" === l.type) {
                if (o = n.done ? p : f, l.arg === h) continue;
                return {
                  value: l.arg,
                  done: n.done
                };
              }

              "throw" === l.type && (o = p, n.method = "throw", n.arg = l.arg);
            }
          };
        }(t, n, a), r;
      }

      function c(t, e, n) {
        try {
          return {
            type: "normal",
            arg: t.call(e, n)
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t
          };
        }
      }

      t.wrap = l;
      var u = "suspendedStart",
          f = "suspendedYield",
          d = "executing",
          p = "completed",
          h = {};

      function v() {}

      function g() {}

      function y() {}

      var b = {};

      b[r] = function () {
        return this;
      };

      var m = Object.getPrototypeOf,
          k = m && m(m(_([])));
      k && k !== n && o.call(k, r) && (b = k);
      var x = y.prototype = v.prototype = Object.create(b);

      function w(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }

      function S(t) {
        var e;

        this._invoke = function (n, i) {
          function r() {
            return new Promise(function (e, r) {
              !function e(n, i, r, a) {
                var s = c(t[n], t, i);

                if ("throw" !== s.type) {
                  var l = s.arg,
                      u = l.value;
                  return u && "object" == typeof u && o.call(u, "__await") ? Promise.resolve(u.__await).then(function (t) {
                    e("next", t, r, a);
                  }, function (t) {
                    e("throw", t, r, a);
                  }) : Promise.resolve(u).then(function (t) {
                    l.value = t, r(l);
                  }, function (t) {
                    return e("throw", t, r, a);
                  });
                }

                a(s.arg);
              }(n, i, e, r);
            });
          }

          return e = e ? e.then(r, r) : r();
        };
      }

      function E(t, n) {
        var o = t.iterator[n.method];

        if (o === e) {
          if (n.delegate = null, "throw" === n.method) {
            if (t.iterator.return && (n.method = "return", n.arg = e, E(t, n), "throw" === n.method)) return h;
            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return h;
        }

        var i = c(o, t.iterator, n.arg);
        if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, h;
        var r = i.arg;
        return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, h) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, h);
      }

      function T(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }

      function C(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }

      function B(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(T, this), this.reset(!0);
      }

      function _(t) {
        if (t) {
          var n = t[r];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;

          if (!isNaN(t.length)) {
            var i = -1,
                a = function n() {
              for (; ++i < t.length;) if (o.call(t, i)) return n.value = t[i], n.done = !1, n;

              return n.value = e, n.done = !0, n;
            };

            return a.next = a;
          }
        }

        return {
          next: I
        };
      }

      function I() {
        return {
          value: e,
          done: !0
        };
      }

      return g.prototype = x.constructor = y, y.constructor = g, y[s] = g.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name));
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(x), t;
      }, t.awrap = function (t) {
        return {
          __await: t
        };
      }, w(S.prototype), S.prototype[a] = function () {
        return this;
      }, t.AsyncIterator = S, t.async = function (e, n, o, i) {
        var r = new S(l(e, n, o, i));
        return t.isGeneratorFunction(n) ? r : r.next().then(function (t) {
          return t.done ? t.value : r.next();
        });
      }, w(x), x[s] = "Generator", x[r] = function () {
        return this;
      }, x.toString = function () {
        return "[object Generator]";
      }, t.keys = function (t) {
        var e = [];

        for (var n in t) e.push(n);

        return e.reverse(), function n() {
          for (; e.length;) {
            var o = e.pop();
            if (o in t) return n.value = o, n.done = !1, n;
          }

          return n.done = !0, n;
        };
      }, t.values = _, B.prototype = {
        constructor: B,
        reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(C), !t) for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var n = this;

          function i(o, i) {
            return s.type = "throw", s.arg = t, n.next = o, i && (n.method = "next", n.arg = e), !!i;
          }

          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var a = this.tryEntries[r],
                s = a.completion;
            if ("root" === a.tryLoc) return i("end");

            if (a.tryLoc <= this.prev) {
              var l = o.call(a, "catchLoc"),
                  c = o.call(a, "finallyLoc");

              if (l && c) {
                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
              } else if (l) {
                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return i(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];

            if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
              var r = i;
              break;
            }
          }

          r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
          var a = r ? r.completion : {};
          return a.type = t, a.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, h) : this.complete(a);
        },
        complete: function (t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), h;
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), h;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];

            if (n.tryLoc === t) {
              var o = n.completion;

              if ("throw" === o.type) {
                var i = o.arg;
                C(n);
              }

              return i;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function (t, n, o) {
          return this.delegate = {
            iterator: _(t),
            resultName: n,
            nextLoc: o
          }, "next" === this.method && (this.arg = e), h;
        }
      }, t;
    }(t.exports);

    try {
      regeneratorRuntime = o;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(o);
    }
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(15),
          d = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = d(i), r = d(r), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);

      var p = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).insert = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.config.initialBlock,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 4 ? arguments[4] : void 0;
            t.Editor.BlockManager.insert(e, n, o, i, r);
          }, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "getBlocksCount",
          value: function () {
            return this.Editor.BlockManager.blocks.length;
          }
        }, {
          key: "getCurrentBlockIndex",
          value: function () {
            return this.Editor.BlockManager.currentBlockIndex;
          }
        }, {
          key: "getBlockByIndex",
          value: function (t) {
            return this.Editor.BlockManager.getBlockByIndex(t).holder;
          }
        }, {
          key: "swap",
          value: function (t, e) {
            this.Editor.BlockManager.swap(t, e), this.Editor.Toolbar.move(!1);
          }
        }, {
          key: "move",
          value: function (t, e) {
            this.Editor.BlockManager.move(t, e), this.Editor.Toolbar.move(!1);
          }
        }, {
          key: "delete",
          value: function (t) {
            this.Editor.BlockManager.removeBlock(t), 0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
          }
        }, {
          key: "clear",
          value: function () {
            this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
          }
        }, {
          key: "render",
          value: function (t) {
            return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t.blocks);
          }
        }, {
          key: "renderFromHTML",
          value: function (t) {
            return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t, !0);
          }
        }, {
          key: "stretchBlock",
          value: function (t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = this.Editor.BlockManager.getBlockByIndex(t);
            n && (n.stretched = e);
          }
        }, {
          key: "insertNewBlock",
          value: function () {
            u.log("Method blocks.insertNewBlock() is deprecated and it will be removed in next major release. Use blocks.insert() instead.", "warn"), this.insert();
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              clear: function () {
                return t.clear();
              },
              render: function (e) {
                return t.render(e);
              },
              renderFromHTML: function (e) {
                return t.renderFromHTML(e);
              },
              delete: function () {
                return t.delete();
              },
              swap: function (e, n) {
                return t.swap(e, n);
              },
              move: function (e, n) {
                return t.move(e, n);
              },
              getBlockByIndex: function (e) {
                return t.getBlockByIndex(e);
              },
              getCurrentBlockIndex: function () {
                return t.getCurrentBlockIndex();
              },
              getBlocksCount: function () {
                return t.getBlocksCount();
              },
              stretchBlock: function (e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return t.stretchBlock(e, n);
              },
              insertNewBlock: function () {
                return t.insertNewBlock();
              },
              insert: this.insert
            };
          }
        }]), e;
      }(c.default);

      o.default = p, p.displayName = "BlocksAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).setToFirstBlock = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !!t.Editor.BlockManager.firstBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock, e, n), !0);
          }, t.setToLastBlock = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !!t.Editor.BlockManager.lastBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock, e, n), !0);
          }, t.setToPreviousBlock = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !!t.Editor.BlockManager.previousBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock, e, n), !0);
          }, t.setToNextBlock = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return !!t.Editor.BlockManager.nextBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock, e, n), !0);
          }, t.setToBlock = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Editor.Caret.positions.DEFAULT,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return !!t.Editor.BlockManager.blocks[e] && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e], n, o), !0);
          }, t.focus = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return e ? t.setToLastBlock(t.Editor.Caret.positions.END) : t.setToFirstBlock(t.Editor.Caret.positions.START);
          }, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "methods",
          get: function () {
            return {
              setToFirstBlock: this.setToFirstBlock,
              setToLastBlock: this.setToLastBlock,
              setToPreviousBlock: this.setToPreviousBlock,
              setToNextBlock: this.setToNextBlock,
              setToBlock: this.setToBlock,
              focus: this.focus
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "CaretAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "on",
          value: function (t, e) {
            this.Editor.Events.on(t, e);
          }
        }, {
          key: "emit",
          value: function (t, e) {
            this.Editor.Events.emit(t, e);
          }
        }, {
          key: "off",
          value: function (t, e) {
            this.Editor.Events.off(t, e);
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              emit: function (e, n) {
                return t.emit(e, n);
              },
              off: function (e, n) {
                return t.off(e, n);
              },
              on: function (e, n) {
                return t.on(e, n);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "EventsAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "open",
          value: function () {
            this.Editor.InlineToolbar.tryToShow();
          }
        }, {
          key: "close",
          value: function () {
            this.Editor.InlineToolbar.close();
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              close: function () {
                return t.close();
              },
              open: function () {
                return t.open();
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "InlineToolbarAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "on",
          value: function (t, e, n, o) {
            this.Editor.Listeners.on(t, e, n, o);
          }
        }, {
          key: "off",
          value: function (t, e, n) {
            this.Editor.Listeners.off(t, e, n);
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              on: function (e, n, o, i) {
                return t.on(e, n, o, i);
              },
              off: function (e, n, o) {
                return t.off(e, n, o);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "ListenersAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "show",
          value: function (t) {
            return this.Editor.Notifier.show(t);
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              show: function (e) {
                return t.show(e);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "NotifierAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "clean",
          value: function (t, e) {
            return this.Editor.Sanitizer.clean(t, e);
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              clean: function (e, n) {
                return t.clean(e, n);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "SanitizerAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "save",
          value: function () {
            return this.Editor.Saver.save();
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              save: function () {
                return t.save();
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "SaverAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(28)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);

      var d = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "findParentTag",
          value: function (t, e) {
            return new u.default().findParentTag(t, e);
          }
        }, {
          key: "expandToTag",
          value: function (t) {
            new u.default().expandToTag(t);
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              findParentTag: function (e, n) {
                return t.findParentTag(e, n);
              },
              expandToTag: function (e) {
                return t.expandToTag(e);
              }
            };
          }
        }]), e;
      }(c.default);

      o.default = d, d.displayName = "SelectionAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "classes",
          get: function () {
            return {
              block: "cdx-block",
              inlineToolButton: "ce-inline-tool",
              inlineToolButtonActive: "ce-inline-tool--active",
              input: "cdx-input",
              loader: "cdx-loader",
              button: "cdx-button",
              settingsButton: "cdx-settings-button",
              settingsButtonActive: "cdx-settings-button--active"
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "StylesAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "open",
          value: function () {
            this.Editor.Toolbar.open();
          }
        }, {
          key: "close",
          value: function () {
            this.Editor.Toolbar.close();
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              close: function () {
                return t.close();
              },
              open: function () {
                return t.open();
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "ToolbarAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "show",
          value: function (t, e, n) {
            this.Editor.Tooltip.show(t, e, n);
          }
        }, {
          key: "hide",
          value: function () {
            this.Editor.Tooltip.hide();
          }
        }, {
          key: "onHover",
          value: function (t, e, n) {
            this.Editor.Tooltip.onHover(t, e, n);
          }
        }, {
          key: "methods",
          get: function () {
            var t = this;
            return {
              show: function (e, n, o) {
                return t.show(e, n, o);
              },
              hide: function () {
                return t.hide();
              },
              onHover: function (e, n, o) {
                return t.onHover(e, n, o);
              }
            };
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "TooltipAPI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(14), n(28), n(58)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = p(u), f = h(f), d = h(d);

      var v = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "keydown",
          value: function (t) {
            switch (this.beforeKeydownProcessing(t), t.keyCode) {
              case u.keyCodes.BACKSPACE:
                this.backspace(t);
                break;

              case u.keyCodes.ENTER:
                this.enter(t);
                break;

              case u.keyCodes.DOWN:
              case u.keyCodes.RIGHT:
                this.arrowRightAndDown(t);
                break;

              case u.keyCodes.UP:
              case u.keyCodes.LEFT:
                this.arrowLeftAndUp(t);
                break;

              case u.keyCodes.TAB:
                this.tabPressed(t);
                break;

              case u.keyCodes.ESC:
                this.escapePressed(t);
                break;

              default:
                this.defaultHandler();
            }
          }
        }, {
          key: "beforeKeydownProcessing",
          value: function (t) {
            this.needToolbarClosing(t) && u.isPrintableKey(t.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t)));
          }
        }, {
          key: "keyup",
          value: function (t) {
            t.shiftKey || this.Editor.UI.checkEmptiness();
          }
        }, {
          key: "mouseUp",
          value: function () {}
        }, {
          key: "mouseDown",
          value: function (t) {
            f.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t), this.Editor.CrossBlockSelection.watchSelection(t);
          }
        }, {
          key: "tabPressed",
          value: function (t) {
            this.Editor.BlockSelection.clearSelection(t);
            var e = this.Editor,
                n = e.BlockManager,
                o = e.Tools,
                i = e.InlineToolbar,
                r = e.ConversionToolbar,
                a = n.currentBlock;

            if (a) {
              var s = o.isInitial(a.tool) && a.isEmpty,
                  l = !a.isEmpty && r.opened,
                  c = !a.isEmpty && !f.default.isCollapsed && i.opened;
              s ? this.activateToolbox() : l || c || this.activateBlockSettings();
            }
          }
        }, {
          key: "escapePressed",
          value: function (t) {
            this.Editor.BlockSelection.clearSelection(t), this.Editor.Toolbox.opened ? this.Editor.Toolbox.close() : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
          }
        }, {
          key: "dragOver",
          value: function (t) {
            this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !0;
          }
        }, {
          key: "dragLeave",
          value: function (t) {
            this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !1;
          }
        }, {
          key: "handleCommandC",
          value: function (t) {
            var e = this.Editor.BlockSelection;
            e.anyBlockSelected && e.copySelectedBlocks(t);
          }
        }, {
          key: "handleCommandX",
          value: function (t) {
            var e = this.Editor,
                n = e.BlockSelection,
                o = e.BlockManager,
                i = e.Caret;

            if (n.anyBlockSelected) {
              n.copySelectedBlocks(t);
              var r = o.removeSelectedBlocks();
              i.setToBlock(o.insertInitialBlockAtIndex(r, !0), i.positions.START), n.clearSelection(t);
            }
          }
        }, {
          key: "enter",
          value: function (t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.Tools,
                i = e.UI,
                r = n.currentBlock,
                a = o.available[r.name];

            if (!(a && a[o.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS] || i.someToolbarOpened && i.someFlipperButtonFocused || t.shiftKey)) {
              var s = this.Editor.BlockManager.currentBlock;
              this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertInitialBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : s = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s), this.Editor.Tools.isInitial(s.tool) && s.isEmpty && (this.Editor.Toolbar.open(!1), this.Editor.Toolbar.plusButton.show()), t.preventDefault();
            }
          }
        }, {
          key: "backspace",
          value: function (t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.BlockSelection,
                i = e.Caret,
                r = n.currentBlock,
                a = this.Editor.Tools.available[r.name];

            if (r.selected || r.isEmpty && r.currentInput === r.firstInput) {
              t.preventDefault();
              var s = n.currentBlockIndex;
              return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), i.setToBlock(n.currentBlock, s ? i.positions.END : i.positions.START), this.Editor.Toolbar.close(), void o.clearSelection(t);
            }

            if (!a || !a[this.Editor.Tools.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS] || i.isAtStart) {
              var l = 0 === n.currentBlockIndex;
              i.isAtStart && f.default.isCollapsed && r.currentInput === r.firstInput && !l && (t.preventDefault(), this.mergeBlocks());
            }
          }
        }, {
          key: "mergeBlocks",
          value: function () {
            var t = this.Editor,
                e = t.BlockManager,
                n = t.Caret,
                o = t.Toolbar,
                i = e.previousBlock,
                r = e.currentBlock;
            if (r.name !== i.name || !i.mergeable) return 0 === i.inputs.length || i.isEmpty ? (e.removeBlock(e.currentBlockIndex - 1), n.setToBlock(e.currentBlock), void o.close()) : void (n.navigatePrevious() && o.close());
            n.createShadow(i.pluginsContent), e.mergeBlocks(i, r).then(function () {
              n.restoreCaret(i.pluginsContent), i.pluginsContent.normalize(), o.close();
            });
          }
        }, {
          key: "arrowRightAndDown",
          value: function (t) {
            var e = this,
                n = d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB);

            if (!this.Editor.UI.someToolbarOpened || !n) {
              this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
              var o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
              t.shiftKey && t.keyCode === u.keyCodes.DOWN && o ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : (this.Editor.Caret.navigateNext() ? t.preventDefault() : u.delay(function () {
                e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
              }, 20)(), this.Editor.BlockSelection.clearSelection(t));
            }
          }
        }, {
          key: "arrowLeftAndUp",
          value: function (t) {
            var e = this;

            if (this.Editor.UI.someToolbarOpened) {
              if (d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB)) return;
              this.Editor.UI.closeAllToolbars();
            }

            this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
            var n = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
            t.shiftKey && t.keyCode === u.keyCodes.UP && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1) : (this.Editor.Caret.navigatePrevious() ? t.preventDefault() : u.delay(function () {
              e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
            }, 20)(), this.Editor.BlockSelection.clearSelection(t));
          }
        }, {
          key: "defaultHandler",
          value: function () {}
        }, {
          key: "needToolbarClosing",
          value: function (t) {
            var e = t.keyCode === u.keyCodes.ENTER && this.Editor.Toolbox.opened,
                n = t.keyCode === u.keyCodes.ENTER && this.Editor.BlockSettings.opened,
                o = t.keyCode === u.keyCodes.ENTER && this.Editor.InlineToolbar.opened,
                i = t.keyCode === u.keyCodes.ENTER && this.Editor.ConversionToolbar.opened,
                r = t.keyCode === u.keyCodes.TAB;
            return !(t.shiftKey || r || e || n || o || i);
          }
        }, {
          key: "activateToolbox",
          value: function () {
            this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(!1, !1), this.Editor.Toolbar.plusButton.show()), this.Editor.Toolbox.open();
          }
        }, {
          key: "activateBlockSettings",
          value: function () {
            this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.open(!0, !1), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
          }
        }]), e;
      }(c.default);

      o.default = v, v.displayName = "BlockEvents", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(26), n(2), n(3), n(4), n(5), n(6), n(59), n(7), n(13), n(14), n(363)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p, h) {
      "use strict";

      var v = n(15),
          g = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = g(i), r = g(r), a = g(a), s = g(s), l = g(l), c = g(c), u = v(u), f = g(f), d = g(d), p = v(p), h = g(h);

      var y = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments)))._currentBlockIndex = -1, t._blocks = null, t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "prepare",
          value: function () {
            var t, e, n, o;
            return i.default.async(function (i) {
              for (;;) switch (i.prev = i.next) {
                case 0:
                  t = new h.default(this.Editor.UI.nodes.redactor), e = this.Editor, n = e.BlockEvents, o = e.Listeners, this._blocks = new Proxy(t, {
                    set: h.default.set,
                    get: h.default.get
                  }), o.on(document, "copy", function (t) {
                    return n.handleCommandC(t);
                  }), o.on(document, "cut", function (t) {
                    return n.handleCommandX(t);
                  });

                case 5:
                case "end":
                  return i.stop();
              }
            }, null, this);
          }
        }, {
          key: "composeBlock",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = this.Editor.Tools.construct(t, e),
                i = this.Editor.Tools.available[t],
                r = new u.default(t, o, i, n, this.Editor.API.methods);
            return this.bindEvents(r), r;
          }
        }, {
          key: "insert",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.initialBlock,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.currentBlockIndex + 1,
                i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                r = this.composeBlock(t, e, n);
            return this._blocks[o] = r, i && (this.currentBlockIndex = o), r;
          }
        }, {
          key: "paste",
          value: function (t, e) {
            var n,
                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            n = o ? this.replace(t) : this.insert(t);

            try {
              n.call(u.BlockToolAPI.ON_PASTE, e);
            } catch (e) {
              p.log("".concat(t, ": onPaste callback call is failed"), "error", e);
            }

            return n;
          }
        }, {
          key: "insertInitialBlockAtIndex",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.composeBlock(this.config.initialBlock, {}, {});
            return this._blocks[t] = n, e ? this.currentBlockIndex = t : t <= this.currentBlockIndex && this.currentBlockIndex++, n;
          }
        }, {
          key: "insertAtEnd",
          value: function () {
            return this.currentBlockIndex = this.blocks.length - 1, this.insert();
          }
        }, {
          key: "mergeBlocks",
          value: function (t, e) {
            var n, o;
            return i.default.async(function (r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  if (n = this._blocks.indexOf(e), !e.isEmpty) {
                    r.next = 3;
                    break;
                  }

                  return r.abrupt("return");

                case 3:
                  return r.next = 5, i.default.awrap(e.data);

                case 5:
                  if (o = r.sent, p.isEmpty(o)) {
                    r.next = 9;
                    break;
                  }

                  return r.next = 9, i.default.awrap(t.mergeWith(o));

                case 9:
                  this.removeBlock(n), this.currentBlockIndex = this._blocks.indexOf(t);

                case 11:
                case "end":
                  return r.stop();
              }
            }, null, this);
          }
        }, {
          key: "removeBlock",
          value: function (t) {
            if (void 0 === t && (t = this.currentBlockIndex), this._blocks.remove(t), this.currentBlockIndex >= t && this.currentBlockIndex--, !this.blocks.length) return this.currentBlockIndex = -1, void this.insert();
            0 === t && (this.currentBlockIndex = 0);
          }
        }, {
          key: "removeSelectedBlocks",
          value: function () {
            for (var t, e = this.blocks.length - 1; e >= 0; e--) this.blocks[e].selected && (this.removeBlock(e), t = e);

            return t;
          }
        }, {
          key: "removeAllBlocks",
          value: function () {
            for (var t = this.blocks.length - 1; t >= 0; t--) this._blocks.remove(t);

            this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
          }
        }, {
          key: "split",
          value: function () {
            var t = this.Editor.Caret.extractFragmentFromCaretPosition(),
                e = d.default.make("div");
            e.appendChild(t);
            var n = {
              text: d.default.isEmpty(e) ? "" : e.innerHTML
            };
            return this.insert(this.config.initialBlock, n);
          }
        }, {
          key: "replace",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.initialBlock,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = this.composeBlock(t, e, n);
            return this._blocks.insert(this.currentBlockIndex, o, !0), o;
          }
        }, {
          key: "getBlockByIndex",
          value: function (t) {
            return this._blocks[t];
          }
        }, {
          key: "getBlock",
          value: function (t) {
            d.default.isElement(t) || (t = t.parentNode);
            var e = this._blocks.nodes,
                n = t.closest(".".concat(u.default.CSS.wrapper)),
                o = e.indexOf(n);
            if (o >= 0) return this._blocks[o];
          }
        }, {
          key: "highlightCurrentNode",
          value: function () {
            this.clearFocused(), this.currentBlock.focused = !0;
          }
        }, {
          key: "clearFocused",
          value: function () {
            this.blocks.forEach(function (t) {
              return t.focused = !1;
            });
          }
        }, {
          key: "setCurrentBlockByChildNode",
          value: function (t) {
            d.default.isElement(t) || (t = t.parentNode);
            var e = t.closest(".".concat(u.default.CSS.wrapper));
            if (e) return this.currentBlockIndex = this._blocks.nodes.indexOf(e), this.currentBlock;
            throw new Error("Can not find a Block from this child Node");
          }
        }, {
          key: "getBlockByChildNode",
          value: function (t) {
            d.default.isElement(t) || (t = t.parentNode);
            var e = t.closest(".".concat(u.default.CSS.wrapper));
            return this.blocks.find(function (t) {
              return t.holder === e;
            });
          }
        }, {
          key: "swap",
          value: function (t, e) {
            this._blocks.swap(t, e), this.currentBlockIndex = e;
          }
        }, {
          key: "move",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentBlockIndex;
            isNaN(t) || isNaN(e) ? p.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(t) && this.validateIndex(e) ? (this._blocks.move(t, e), this.currentBlockIndex = t) : p.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
          }
        }, {
          key: "dropPointer",
          value: function () {
            this.currentBlockIndex = -1, this.clearFocused();
          }
        }, {
          key: "clear",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._blocks.removeAll(), this.dropPointer(), t && this.insert(this.config.initialBlock), this.Editor.UI.checkEmptiness();
          }
        }, {
          key: "bindEvents",
          value: function (t) {
            var e = this.Editor,
                n = e.BlockEvents,
                o = e.Listeners;
            o.on(t.holder, "keydown", function (t) {
              return n.keydown(t);
            }, !0), o.on(t.holder, "mouseup", function (t) {
              return n.mouseUp();
            }), o.on(t.holder, "mousedown", function (t) {
              return n.mouseDown(t);
            }), o.on(t.holder, "keyup", function (t) {
              return n.keyup(t);
            }), o.on(t.holder, "dragover", function (t) {
              return n.dragOver(t);
            }), o.on(t.holder, "dragleave", function (t) {
              return n.dragLeave(t);
            });
          }
        }, {
          key: "validateIndex",
          value: function (t) {
            return !(t < 0 || t >= this._blocks.length);
          }
        }, {
          key: "currentBlockIndex",
          get: function () {
            return this._currentBlockIndex;
          },
          set: function (t) {
            this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t] && this._blocks[t].willSelect(), this._currentBlockIndex = t;
          }
        }, {
          key: "firstBlock",
          get: function () {
            return this._blocks[0];
          }
        }, {
          key: "lastBlock",
          get: function () {
            return this._blocks[this._blocks.length - 1];
          }
        }, {
          key: "currentBlock",
          get: function () {
            return this._blocks[this.currentBlockIndex];
          }
        }, {
          key: "nextBlock",
          get: function () {
            return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
          }
        }, {
          key: "nextContentfulBlock",
          get: function () {
            return this.blocks.slice(this.currentBlockIndex + 1).find(function (t) {
              return !!t.inputs.length;
            });
          }
        }, {
          key: "previousContentfulBlock",
          get: function () {
            return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function (t) {
              return !!t.inputs.length;
            });
          }
        }, {
          key: "previousBlock",
          get: function () {
            return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1];
          }
        }, {
          key: "blocks",
          get: function () {
            return this._blocks.array;
          }
        }, {
          key: "isEditorEmpty",
          get: function () {
            return this.blocks.every(function (t) {
              return t.isEmpty;
            });
          }
        }]), e;
      }(f.default);

      o.default = y, y.displayName = "BlockManager", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(26), n(2), n(3), n(4), n(5), n(6), n(7), n(14), n(13), n(28)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p) {
      "use strict";

      var h = n(15),
          v = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = v(i), r = v(r), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = h(f), d = v(d), p = v(p);

      var g = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments))).needToSelectAll = !1, t.nativeInputSelected = !1, t.readyToBlockSelection = !1, t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "prepare",
          value: function () {
            var t = this;
            this.Editor.Shortcuts.add({
              name: "CMD+A",
              handler: function (e) {
                t.Editor.BlockManager.currentBlock && t.handleCommandA(e);
              }
            }), this.selection = new p.default();
          }
        }, {
          key: "unSelectBlockByIndex",
          value: function (t) {
            var e = this.Editor.BlockManager;
            (isNaN(t) ? e.currentBlock : e.getBlockByIndex(t)).selected = !1;
          }
        }, {
          key: "clearSelection",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.Editor,
                o = n.BlockManager,
                i = n.Caret,
                r = n.RectangleSelection;

            if (this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1, this.anyBlockSelected && t && t instanceof KeyboardEvent && f.isPrintableKey(t.keyCode)) {
              var a = o.removeSelectedBlocks();
              o.insertInitialBlockAtIndex(a, !0), i.setToBlock(o.currentBlock), f.delay(function () {
                i.insertContentAtCaretPosition(t.key);
              }, 20)();
            }

            this.Editor.CrossBlockSelection.clear(t), this.anyBlockSelected && !r.isRectActivated() ? (e && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection();
          }
        }, {
          key: "copySelectedBlocks",
          value: function (t) {
            var e,
                n,
                o,
                r,
                a = this;
            return i.default.async(function (s) {
              for (;;) switch (s.prev = s.next) {
                case 0:
                  return t.preventDefault(), e = d.default.make("div"), this.selectedBlocks.forEach(function (t) {
                    var n = a.Editor.Sanitizer.clean(t.holder.innerHTML, a.sanitizerConfig),
                        o = d.default.make("p");
                    o.innerHTML = n, e.appendChild(o);
                  }), s.next = 5, i.default.awrap(Promise.all(this.selectedBlocks.map(function (t) {
                    return t.save();
                  })));

                case 5:
                  n = s.sent, o = Array.from(e.childNodes).map(function (t) {
                    return t.textContent;
                  }).join("\n\n"), r = e.innerHTML, t.clipboardData.setData("text/plain", o), t.clipboardData.setData("text/html", r), t.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(n));

                case 11:
                case "end":
                  return s.stop();
              }
            }, null, this);
          }
        }, {
          key: "selectBlockByIndex",
          value: function (t) {
            var e,
                n = this.Editor.BlockManager;
            n.clearFocused(), e = isNaN(t) ? n.currentBlock : n.getBlockByIndex(t), this.selection.save(), p.default.get().removeAllRanges(), e.selected = !0, this.Editor.InlineToolbar.close();
          }
        }, {
          key: "handleCommandA",
          value: function (t) {
            if (this.Editor.RectangleSelection.clearSelection(), !d.default.isNativeInput(t.target) || this.readyToBlockSelection) {
              var e = this.Editor.BlockManager.getBlock(t.target).inputs;
              e.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = !0 : 1 !== e.length || this.needToSelectAll ? this.needToSelectAll ? (t.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (t.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0) : this.needToSelectAll = !0;
            } else this.readyToBlockSelection = !0;
          }
        }, {
          key: "selectAllBlocks",
          value: function () {
            this.selection.save(), p.default.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
          }
        }, {
          key: "sanitizerConfig",
          get: function () {
            return {
              p: {},
              h1: {},
              h2: {},
              h3: {},
              h4: {},
              h5: {},
              h6: {},
              ol: {},
              ul: {},
              li: {},
              br: !0,
              img: {
                src: !0,
                width: !0,
                height: !0
              },
              a: {
                href: !0
              },
              b: {},
              i: {},
              u: {}
            };
          }
        }, {
          key: "allBlocksSelected",
          get: function () {
            return this.Editor.BlockManager.blocks.every(function (t) {
              return !0 === t.selected;
            });
          },
          set: function (t) {
            this.Editor.BlockManager.blocks.forEach(function (e) {
              return e.selected = t;
            });
          }
        }, {
          key: "anyBlockSelected",
          get: function () {
            return this.Editor.BlockManager.blocks.some(function (t) {
              return !0 === t.selected;
            });
          }
        }, {
          key: "selectedBlocks",
          get: function () {
            return this.Editor.BlockManager.blocks.filter(function (t) {
              return t.selected;
            });
          }
        }]), e;
      }(u.default);

      o.default = g, g.displayName = "BlockSelection", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(28), n(7), n(13), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);

      var v = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "setToBlock",
          value: function (t) {
            var e,
                n = this,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = this.Editor.BlockManager;

            switch (o) {
              case this.positions.START:
                e = t.firstInput;
                break;

              case this.positions.END:
                e = t.lastInput;
                break;

              default:
                e = t.currentInput;
            }

            if (e) {
              var a = f.default.getDeepestNode(e, o === this.positions.END),
                  s = f.default.getContentLength(a);

              switch (!0) {
                case o === this.positions.START:
                  i = 0;
                  break;

                case o === this.positions.END:
                case i > s:
                  i = s;
              }

              d.delay(function () {
                n.set(a, i);
              }, 20)(), r.setCurrentBlockByChildNode(t.holder), r.currentBlock.currentInput = e;
            }
          }
        }, {
          key: "setToInput",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = this.Editor.BlockManager.currentBlock,
                i = f.default.getDeepestNode(t);

            switch (e) {
              case this.positions.START:
                this.set(i, 0);
                break;

              case this.positions.END:
                var r = f.default.getContentLength(i);
                this.set(i, r);
                break;

              default:
                n && this.set(i, n);
            }

            o.currentInput = t;
          }
        }, {
          key: "set",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = document.createRange(),
                o = c.default.get();

            if (f.default.isNativeInput(t)) {
              if (!f.default.canSetCaret(t)) return;
              return t.focus(), void (t.selectionStart = t.selectionEnd = e);
            }

            n.setStart(t, e), n.setEnd(t, e), o.removeAllRanges(), o.addRange(n);
            var i = t.nodeType === Node.ELEMENT_NODE ? t.getBoundingClientRect() : n.getBoundingClientRect(),
                r = i.top,
                a = i.bottom,
                s = window,
                l = s.innerHeight;
            r < 0 && window.scrollBy(0, r), a > l && window.scrollBy(0, a - l);
          }
        }, {
          key: "setToTheLastBlock",
          value: function () {
            var t = this.Editor.BlockManager.lastBlock;
            if (t) if (this.Editor.Tools.isInitial(t.tool) && t.isEmpty) this.setToBlock(t);else {
              var e = this.Editor.BlockManager.insertAtEnd();
              this.setToBlock(e);
            }
          }
        }, {
          key: "extractFragmentFromCaretPosition",
          value: function () {
            var t = c.default.get();

            if (t.rangeCount) {
              var e = t.getRangeAt(0),
                  n = this.Editor.BlockManager.currentBlock.currentInput;

              if (e.deleteContents(), n) {
                var o = e.cloneRange();
                return o.selectNodeContents(n), o.setStart(e.endContainer, e.endOffset), o.extractContents();
              }
            }
          }
        }, {
          key: "navigateNext",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.Editor.BlockManager,
                n = e.currentBlock,
                o = e.nextContentfulBlock,
                i = n.nextInput;
            return !(!o && !i || !t && !this.isAtEnd || (i ? this.setToInput(i, this.positions.START) : this.setToBlock(o, this.positions.START), 0));
          }
        }, {
          key: "navigatePrevious",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.Editor.BlockManager,
                n = e.currentBlock,
                o = e.previousContentfulBlock;
            if (!n) return !1;
            var i = n.previousInput;
            return !(!o && !i || !t && !this.isAtStart || (i ? this.setToInput(i, this.positions.END) : this.setToBlock(o, this.positions.END), 0));
          }
        }, {
          key: "createShadow",
          value: function (t) {
            var n = document.createElement("span");
            n.classList.add(e.CSS.shadowCaret), t.insertAdjacentElement("beforeEnd", n);
          }
        }, {
          key: "restoreCaret",
          value: function (t) {
            var n = t.querySelector(".".concat(e.CSS.shadowCaret));
            n && (new c.default().expandToTag(n), setTimeout(function () {
              var t = document.createRange();
              t.selectNode(n), t.extractContents();
            }, 50));
          }
        }, {
          key: "insertContentAtCaretPosition",
          value: function (t) {
            var e = document.createDocumentFragment(),
                n = document.createElement("div"),
                o = c.default.get(),
                i = c.default.range;
            n.innerHTML = t, Array.from(n.childNodes).forEach(function (t) {
              return e.appendChild(t);
            });
            var r = e.lastChild;
            i.deleteContents(), i.insertNode(e);
            var a = document.createRange();
            a.setStart(r, r.textContent.length), o.removeAllRanges(), o.addRange(a);
          }
        }, {
          key: "getHigherLevelSiblings",
          value: function (t, e) {
            for (var n = t, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;) n = n.parentNode;

            for (var i = "left" === e ? "previousSibling" : "nextSibling"; n[i];) n = n[i], o.push(n);

            return o;
          }
        }, {
          key: "positions",
          get: function () {
            return {
              START: "start",
              END: "end",
              DEFAULT: "default"
            };
          }
        }, {
          key: "isAtStart",
          get: function () {
            var t = c.default.get(),
                e = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),
                n = t.focusNode;
            if (f.default.isNativeInput(e)) return 0 === e.selectionEnd;
            if (!t.anchorNode) return !1;
            var o = n.textContent.search(/\S/);
            -1 === o && (o = 0);
            var i = t.focusOffset;
            return n.nodeType !== Node.TEXT_NODE && n.childNodes.length && (n.childNodes[i] ? (n = n.childNodes[i], i = 0) : i = (n = n.childNodes[i - 1]).textContent.length), !(!f.default.isLineBreakTag(e) && !f.default.isEmpty(e) || !this.getHigherLevelSiblings(n, "left").every(function (t) {
              var e = f.default.isLineBreakTag(t),
                  n = 1 === t.children.length && f.default.isLineBreakTag(t.children[0]),
                  o = e || n;
              return f.default.isEmpty(t) && !o;
            }) || i !== o) || null === e || n === e && i <= o;
          }
        }, {
          key: "isAtEnd",
          get: function () {
            var t = c.default.get(),
                e = t.focusNode,
                n = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
            if (f.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
            if (!t.focusNode) return !1;
            var o = t.focusOffset;

            if (e.nodeType !== Node.TEXT_NODE && e.childNodes.length && (e.childNodes[o - 1] ? o = (e = e.childNodes[o - 1]).textContent.length : (e = e.childNodes[0], o = 0)), f.default.isLineBreakTag(n) || f.default.isEmpty(n)) {
              var i = this.getHigherLevelSiblings(e, "right");
              if (i.every(function (t, e) {
                return e === i.length - 1 && f.default.isLineBreakTag(t) || f.default.isEmpty(t) && !f.default.isLineBreakTag(t);
              }) && o === e.textContent.length) return !0;
            }

            var r = n.textContent.replace(/\s+$/, "");
            return e === n && o >= r.length;
          }
        }], [{
          key: "CSS",
          get: function () {
            return {
              shadowCaret: "cdx-shadow-caret"
            };
          }
        }]), e;
      }(u.default);

      o.default = v, v.displayName = "Caret", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(28), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(15),
          p = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = d(f);

      var h = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).onMouseUp = function () {
            var e = t.Editor.Listeners;
            e.off(document, "mouseover", t.onMouseOver), e.off(document, "mouseup", t.onMouseUp);
          }, t.onMouseOver = function (e) {
            var n = t.Editor.BlockManager,
                o = n.getBlockByChildNode(e.relatedTarget) || t.lastSelectedBlock,
                i = n.getBlockByChildNode(e.target);

            if (o && i && i !== o) {
              if (o === t.firstSelectedBlock) return u.default.get().removeAllRanges(), o.selected = !0, void (i.selected = !0);
              if (i === t.firstSelectedBlock) return o.selected = !1, void (i.selected = !1);
              t.Editor.InlineToolbar.close(), t.toggleBlocksSelectedState(o, i), t.lastSelectedBlock = i;
            }
          }, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "watchSelection",
          value: function (t) {
            if (t.button === f.mouseButtons.LEFT) {
              var e = this.Editor,
                  n = e.BlockManager,
                  o = (e.UI, e.Listeners);
              this.firstSelectedBlock = n.getBlock(t.target), this.lastSelectedBlock = this.firstSelectedBlock, o.on(document, "mouseover", this.onMouseOver), o.on(document, "mouseup", this.onMouseUp);
            }
          }
        }, {
          key: "toggleBlockSelectedState",
          value: function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                e = this.Editor.BlockManager;
            this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = e.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, u.default.get().removeAllRanges());
            var n = e.blocks.indexOf(this.lastSelectedBlock) + (t ? 1 : -1),
                o = e.blocks[n];
            o && (this.lastSelectedBlock.selected !== o.selected ? o.selected = !0 : this.lastSelectedBlock.selected = !1, this.lastSelectedBlock = o, this.Editor.InlineToolbar.close());
          }
        }, {
          key: "clear",
          value: function (t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.BlockSelection,
                i = e.Caret,
                r = n.blocks.indexOf(this.firstSelectedBlock),
                a = n.blocks.indexOf(this.lastSelectedBlock);
            if (o.anyBlockSelected && r > -1 && a > -1) if (t && t instanceof KeyboardEvent) switch (t.keyCode) {
              case f.keyCodes.DOWN:
              case f.keyCodes.RIGHT:
                i.setToBlock(n.blocks[Math.max(r, a)], i.positions.END);
                break;

              case f.keyCodes.UP:
              case f.keyCodes.LEFT:
                i.setToBlock(n.blocks[Math.min(r, a)], i.positions.START);
                break;

              default:
                i.setToBlock(n.blocks[Math.max(r, a)], i.positions.END);
            } else i.setToBlock(n.blocks[Math.max(r, a)], i.positions.END);
            this.firstSelectedBlock = this.lastSelectedBlock = null;
          }
        }, {
          key: "toggleBlocksSelectedState",
          value: function (t, e) {
            for (var n = this.Editor.BlockManager, o = n.blocks.indexOf(t), i = n.blocks.indexOf(e), r = t.selected !== e.selected, a = Math.min(o, i); a <= Math.max(o, i); a++) {
              var s = n.blocks[a];
              s !== this.firstSelectedBlock && s !== (r ? t : e) && (n.blocks[a].selected = !n.blocks[a].selected);
            }
          }
        }, {
          key: "isCrossBlockSelectionStarted",
          get: function () {
            return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
          }
        }]), e;
      }(c.default);

      o.default = h, h.displayName = "CrossBlockSelection", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(26), n(2), n(3), n(4), n(5), n(6), n(28), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = d(i), r = d(r), a = d(a), s = d(s), l = d(l), c = d(c), u = d(u);

      var p = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments))).isStartedAtEditor = !1, t.processDrop = function (e) {
            var n, o, r, a, s, l;
            return i.default.async(function (i) {
              for (;;) switch (i.prev = i.next) {
                case 0:
                  n = t.Editor, o = n.BlockManager, r = n.Caret, a = n.Paste, e.preventDefault(), o.blocks.forEach(function (t) {
                    return t.dropTarget = !1;
                  }), u.default.isAtEditor && !u.default.isCollapsed && t.isStartedAtEditor && document.execCommand("delete"), t.isStartedAtEditor = !1;

                  try {
                    s = o.setCurrentBlockByChildNode(e.target), t.Editor.Caret.setToBlock(s, r.positions.END);
                  } catch (e) {
                    l = o.setCurrentBlockByChildNode(o.lastBlock.holder), t.Editor.Caret.setToBlock(l, r.positions.END);
                  }

                  a.processDataTransfer(e.dataTransfer, !0);

                case 7:
                case "end":
                  return i.stop();
              }
            });
          }, t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "prepare",
          value: function () {
            this.bindEvents();
          }
        }, {
          key: "bindEvents",
          value: function () {
            var t = this;
            this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "drop", this.processDrop, !0), this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "dragstart", function (e) {
              u.default.isAtEditor && !u.default.isCollapsed && (t.isStartedAtEditor = !0), t.Editor.InlineToolbar.close();
            }), this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "dragover", function (t) {
              return t.preventDefault();
            }, !0);
          }
        }]), e;
      }((f = d(f)).default);

      o.default = p, p.displayName = "DragNDrop", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).subscribers = {}, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "on",
          value: function (t, e) {
            t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(e);
          }
        }, {
          key: "once",
          value: function (t, e) {
            var n = this;
            t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(function o(i) {
              var r = e(i),
                  a = n.subscribers[t].indexOf(o);
              return -1 !== a && n.subscribers[t].splice(a, 1), r;
            });
          }
        }, {
          key: "emit",
          value: function (t, e) {
            this.subscribers[t] && this.subscribers[t].reduce(function (t, e) {
              var n = e(t);
              return n || t;
            }, e);
          }
        }, {
          key: "off",
          value: function (t, e) {
            for (var n = 0; n < this.subscribers[t].length; n++) if (this.subscribers[t][n] === e) {
              delete this.subscribers[t][n];
              break;
            }
          }
        }, {
          key: "destroy",
          value: function () {
            this.subscribers = null;
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "Events", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = u(l);

      var f = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).allListeners = [], t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "on",
          value: function (t, e, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = {
              element: t,
              eventType: e,
              handler: n,
              options: o
            },
                r = this.findOne(t, e, n);
            r || (this.allListeners.push(i), t.addEventListener(e, n, o));
          }
        }, {
          key: "off",
          value: function (t, e, n, o) {
            var i = this,
                r = this.findAll(t, e, n);
            r.forEach(function (t, e) {
              var n = i.allListeners.indexOf(r[e]);
              n > 0 && (i.allListeners.splice(n, 1), t.element.removeEventListener(t.eventType, t.handler, t.options));
            });
          }
        }, {
          key: "findOne",
          value: function (t, e, n) {
            var o = this.findAll(t, e, n);
            return o.length > 0 ? o[0] : null;
          }
        }, {
          key: "findAll",
          value: function (t, e, n) {
            var o = t ? this.findByEventTarget(t) : [];
            return t && e && n ? o.filter(function (t) {
              return t.eventType === e && t.handler === n;
            }) : t && e ? o.filter(function (t) {
              return t.eventType === e;
            }) : o;
          }
        }, {
          key: "removeAll",
          value: function () {
            this.allListeners.map(function (t) {
              t.element.removeEventListener(t.eventType, t.handler, t.options);
            }), this.allListeners = [];
          }
        }, {
          key: "findByEventTarget",
          value: function (t) {
            return this.allListeners.filter(function (e) {
              if (e.element === t) return e;
            });
          }
        }, {
          key: "findByType",
          value: function (t) {
            return this.allListeners.filter(function (e) {
              if (e.eventType === t) return e;
            });
          }
        }, {
          key: "findByHandler",
          value: function (t) {
            return this.allListeners.filter(function (e) {
              if (e.handler === t) return e;
            });
          }
        }]), e;
      }((c = u(c)).default);

      o.default = f, f.displayName = "Listeners", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(26), n(2), n(3), n(4), n(5), n(6), n(7), n(14), n(59)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = p(f), d = h(d);

      var v = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments))).mutationDebouncer = f.debounce(function () {
            t.updateNativeInputs(), t.config.onChange(t.Editor.API.methods);
          }, e.DebounceTimer), t.nativeInputs = [], t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "destroy",
          value: function () {
            var t = this;
            this.mutationDebouncer = null, this.observer && this.observer.disconnect(), this.observer = null, this.nativeInputs.forEach(function (e) {
              return t.Editor.Listeners.off(e, "input", t.mutationDebouncer);
            });
          }
        }, {
          key: "prepare",
          value: function () {
            var t = this;
            return i.default.async(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  window.setTimeout(function () {
                    t.setObserver();
                  }, 1e3);

                case 1:
                case "end":
                  return e.stop();
              }
            });
          }
        }, {
          key: "disable",
          value: function () {
            this.disabled = !0;
          }
        }, {
          key: "enable",
          value: function () {
            this.disabled = !1;
          }
        }, {
          key: "setObserver",
          value: function () {
            var t = this,
                e = this.Editor.UI;
            this.observer = new MutationObserver(function (e, n) {
              t.mutationHandler(e, n);
            }), this.observer.observe(e.nodes.redactor, {
              childList: !0,
              attributes: !0,
              subtree: !0,
              characterData: !0,
              characterDataOldValue: !0
            });
          }
        }, {
          key: "mutationHandler",
          value: function (t, e) {
            if (!this.disabled) {
              var n = !1;
              t.forEach(function (t) {
                switch (t.type) {
                  case "childList":
                  case "subtree":
                  case "characterData":
                  case "characterDataOldValue":
                    n = !0;
                    break;

                  case "attributes":
                    if (!t.target.classList.contains(d.default.CSS.wrapper)) return void (n = !0);
                }
              }), n && this.mutationDebouncer();
            }
          }
        }, {
          key: "updateNativeInputs",
          value: function () {
            var t = this;
            this.nativeInputs && this.nativeInputs.forEach(function (e) {
              t.Editor.Listeners.off(e, "input");
            }), this.nativeInputs = Array.from(this.Editor.UI.nodes.redactor.querySelectorAll("textarea, input, select")), this.nativeInputs.forEach(function (e) {
              return t.Editor.Listeners.on(e, "input", t.mutationDebouncer);
            });
          }
        }]), e;
      }(u.default);

      o.default = v, v.displayName = "ModificationsObserver", v.DebounceTimer = 450, t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(364)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);

      var d = function (t) {
        function e() {
          return (0, i.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments));
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "show",
          value: function (t) {
            u.default.show(t);
          }
        }]), e;
      }(c.default);

      o.default = d, d.displayName = "Notifier", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(103), n(26), n(50), n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p, h) {
      "use strict";

      var v = n(15),
          g = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = g(i), r = g(r), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = g(p), h = v(h);

      var y = function (t) {
        function e() {
          var t;
          return (0, s.default)(this, e), (t = (0, c.default)(this, (0, u.default)(e).apply(this, arguments))).MIME_TYPE = "application/x-editor-js", t.toolsTags = {}, t.tagsByTool = {}, t.toolsPatterns = [], t.toolsFiles = {}, t.exceptionList = [], t.processTool = function (e) {
            var n = (0, a.default)(e, 2),
                o = n[0],
                i = n[1];

            try {
              var r = new t.Editor.Tools.blockTools[o]({
                api: t.Editor.API.methods,
                config: {},
                data: {}
              });
              if (!1 === i.pasteConfig) return void t.exceptionList.push(o);
              if ("function" != typeof r.onPaste) return;
              var s = i.pasteConfig || {};
              t.getTagsConfig(o, s), t.getFilesConfig(o, s), t.getPatternsConfig(o, s);
            } catch (t) {
              h.log("Paste handling for «".concat(o, "» Tool hasn't been set up because of the error"), "warn", t);
            }
          }, t.handlePasteEvent = function (e) {
            var n, o, i;
            return r.default.async(function (r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  if (n = t.Editor, o = n.BlockManager, i = n.Toolbar, o.currentBlock && (!t.isNativeBehaviour(e.target) || e.clipboardData.types.includes("Files"))) {
                    r.next = 3;
                    break;
                  }

                  return r.abrupt("return");

                case 3:
                  if (!o.currentBlock || !t.exceptionList.includes(o.currentBlock.name)) {
                    r.next = 5;
                    break;
                  }

                  return r.abrupt("return");

                case 5:
                  e.preventDefault(), t.processDataTransfer(e.clipboardData), o.clearFocused(), i.close();

                case 9:
                case "end":
                  return r.stop();
              }
            });
          }, t;
        }

        return (0, f.default)(e, t), (0, l.default)(e, [{
          key: "prepare",
          value: function () {
            return r.default.async(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  this.setCallback(), this.processTools();

                case 2:
                case "end":
                  return t.stop();
              }
            }, null, this);
          }
        }, {
          key: "processDataTransfer",
          value: function (t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l,
                c,
                u,
                f = arguments;
            return r.default.async(function (d) {
              for (;;) switch (d.prev = d.next) {
                case 0:
                  if (e = f.length > 1 && void 0 !== f[1] && f[1], n = this.Editor.Sanitizer, !((o = t.types).includes ? o.includes("Files") : o.contains("Files"))) {
                    d.next = 8;
                    break;
                  }

                  return d.next = 7, r.default.awrap(this.processFiles(t.files));

                case 7:
                  return d.abrupt("return");

                case 8:
                  if (i = t.getData(this.MIME_TYPE), a = t.getData("text/plain"), s = t.getData("text/html"), !i) {
                    d.next = 19;
                    break;
                  }

                  return d.prev = 12, this.insertEditorJSData(JSON.parse(i)), d.abrupt("return");

                case 17:
                  d.prev = 17, d.t0 = d.catch(12);

                case 19:
                  if (e && a.trim() && s.trim() && (s = "<p>" + (s.trim() ? s : a) + "</p>"), l = Object.keys(this.toolsTags).reduce(function (t, e) {
                    return t[e.toLowerCase()] = !0, t;
                  }, {}), c = Object.assign({}, l, n.getAllInlineToolsConfig(), {
                    br: {}
                  }), (u = n.clean(s, c)).trim() && u.trim() !== a && p.default.isHTMLString(u)) {
                    d.next = 28;
                    break;
                  }

                  return d.next = 26, r.default.awrap(this.processText(a));

                case 26:
                  d.next = 30;
                  break;

                case 28:
                  return d.next = 30, r.default.awrap(this.processText(u, !0));

                case 30:
                case "end":
                  return d.stop();
              }
            }, null, this, [[12, 17]]);
          }
        }, {
          key: "processText",
          value: function (t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l,
                c,
                u = this,
                f = arguments;
            return r.default.async(function (d) {
              for (;;) switch (d.prev = d.next) {
                case 0:
                  if (e = f.length > 1 && void 0 !== f[1] && f[1], n = this.Editor, o = n.Caret, i = n.BlockManager, a = n.Tools, (s = e ? this.processHTML(t) : this.processPlain(t)).length) {
                    d.next = 5;
                    break;
                  }

                  return d.abrupt("return");

                case 5:
                  if (1 !== s.length) {
                    d.next = 8;
                    break;
                  }

                  return s[0].isBlock ? this.processSingleBlock(s.pop()) : this.processInlinePaste(s.pop()), d.abrupt("return");

                case 8:
                  l = i.currentBlock && a.isInitial(i.currentBlock.tool), c = l && i.currentBlock.isEmpty, s.map(function (t, e) {
                    return r.default.async(function (n) {
                      for (;;) switch (n.prev = n.next) {
                        case 0:
                          return n.abrupt("return", u.insertBlock(t, 0 === e && c));

                        case 1:
                        case "end":
                          return n.stop();
                      }
                    });
                  }), i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);

                case 12:
                case "end":
                  return d.stop();
              }
            }, null, this);
          }
        }, {
          key: "setCallback",
          value: function () {
            this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
          }
        }, {
          key: "processTools",
          value: function () {
            var t = this.Editor.Tools.blockTools;
            Object.entries(t).forEach(this.processTool);
          }
        }, {
          key: "getTagsConfig",
          value: function (t, e) {
            var n = this,
                o = e.tags || [];
            o.forEach(function (e) {
              n.toolsTags.hasOwnProperty(e) ? h.log("Paste handler for «".concat(t, "» Tool on «").concat(e, "» tag is skipped ") + "because it is already used by «".concat(n.toolsTags[e].tool, "» Tool."), "warn") : n.toolsTags[e.toUpperCase()] = {
                tool: t
              };
            }), this.tagsByTool[t] = o.map(function (t) {
              return t.toUpperCase();
            });
          }
        }, {
          key: "getFilesConfig",
          value: function (t, e) {
            var n = e.files,
                o = void 0 === n ? {} : n,
                i = o.extensions,
                r = o.mimeTypes;
            (i || r) && (i && !Array.isArray(i) && (h.log("«extensions» property of the onDrop config for «".concat(t, "» Tool should be an array")), i = []), r && !Array.isArray(r) && (h.log("«mimeTypes» property of the onDrop config for «".concat(t, "» Tool should be an array")), r = []), r && (r = r.filter(function (e) {
              return !!h.isValidMimeType(e) || (h.log("MIME type value «".concat(e, "» for the «").concat(t, "» Tool is not a valid MIME type"), "warn"), !1);
            })), this.toolsFiles[t] = {
              extensions: i || [],
              mimeTypes: r || []
            });
          }
        }, {
          key: "getPatternsConfig",
          value: function (t, e) {
            var n = this;
            e.patterns && !h.isEmpty(e.patterns) && Object.entries(e.patterns).forEach(function (e) {
              var o = (0, a.default)(e, 2),
                  i = o[0],
                  r = o[1];
              r instanceof RegExp || h.log("Pattern ".concat(r, " for «").concat(t, "» Tool is skipped because it should be a Regexp instance."), "warn"), n.toolsPatterns.push({
                key: i,
                pattern: r,
                tool: t
              });
            });
          }
        }, {
          key: "isNativeBehaviour",
          value: function (t) {
            return p.default.isNativeInput(t);
          }
        }, {
          key: "processFiles",
          value: function (t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l = this;
            return r.default.async(function (c) {
              for (;;) switch (c.prev = c.next) {
                case 0:
                  return e = this.Editor, n = e.BlockManager, o = e.Tools, c.next = 3, r.default.awrap(Promise.all(Array.from(t).map(function (t) {
                    return l.processFile(t);
                  })));

                case 3:
                  i = (i = c.sent).filter(function (t) {
                    return !!t;
                  }), a = o.isInitial(n.currentBlock.tool), s = a && n.currentBlock.isEmpty, i.forEach(function (t, e) {
                    n.paste(t.type, t.event, 0 === e && s);
                  });

                case 8:
                case "end":
                  return c.stop();
              }
            }, null, this);
          }
        }, {
          key: "processFile",
          value: function (t) {
            var e, n, o, i, s;
            return r.default.async(function (r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  if (e = h.getFileExtension(t), n = Object.entries(this.toolsFiles).find(function (n) {
                    var o = (0, a.default)(n, 2),
                        i = (o[0], o[1]),
                        r = i.mimeTypes,
                        s = i.extensions,
                        l = t.type.split("/"),
                        c = (0, a.default)(l, 2),
                        u = c[0],
                        f = c[1],
                        d = s.find(function (t) {
                      return t.toLowerCase() === e.toLowerCase();
                    }),
                        p = r.find(function (t) {
                      var e = t.split("/"),
                          n = (0, a.default)(e, 2),
                          o = n[0],
                          i = n[1];
                      return o === u && (i === f || "*" === i);
                    });
                    return !!d || !!p;
                  })) {
                    r.next = 4;
                    break;
                  }

                  return r.abrupt("return");

                case 4:
                  return o = (0, a.default)(n, 1), i = o[0], s = this.composePasteEvent("file", {
                    file: t
                  }), r.abrupt("return", {
                    event: s,
                    type: i
                  });

                case 7:
                case "end":
                  return r.stop();
              }
            }, null, this);
          }
        }, {
          key: "processHTML",
          value: function (t) {
            var e = this,
                n = this.Editor,
                o = n.Tools,
                i = n.Sanitizer,
                r = this.config.initialBlock,
                a = p.default.make("DIV");
            return a.innerHTML = t, this.getNodes(a).map(function (t) {
              var n,
                  a = r,
                  s = !1;

              switch (t.nodeType) {
                case Node.DOCUMENT_FRAGMENT_NODE:
                  (n = p.default.make("div")).appendChild(t);
                  break;

                case Node.ELEMENT_NODE:
                  n = t, s = !0, e.toolsTags[n.tagName] && (a = e.toolsTags[n.tagName].tool);
              }

              var l = o.blockTools[a].pasteConfig.tags.reduce(function (t, e) {
                return t[e.toLowerCase()] = {}, t;
              }, {}),
                  c = Object.assign({}, l, i.getInlineToolsConfig(a));
              return n.innerHTML = i.clean(n.innerHTML, c), {
                content: n,
                isBlock: s,
                tool: a,
                event: e.composePasteEvent("tag", {
                  data: n
                })
              };
            }).filter(function (t) {
              return !p.default.isNodeEmpty(t.content) || p.default.isSingleTag(t.content);
            });
          }
        }, {
          key: "processPlain",
          value: function (t) {
            var e = this,
                n = this.config.initialBlock;
            if (this.Editor.Tools, !t) return [];
            var o = n;
            return t.split(/\r?\n/).filter(function (t) {
              return t.trim();
            }).map(function (t) {
              var n = p.default.make("div");
              n.textContent = t;
              var i = e.composePasteEvent("tag", {
                data: n
              });
              return {
                content: n,
                tool: o,
                isBlock: !1,
                event: i
              };
            });
          }
        }, {
          key: "processSingleBlock",
          value: function (t) {
            var e, n, o, i, a;
            return r.default.async(function (r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  if (e = this.Editor, n = e.Caret, o = e.BlockManager, i = e.Tools, (a = o.currentBlock) && t.tool === a.name && p.default.containsOnlyInlineElements(t.content.innerHTML)) {
                    r.next = 5;
                    break;
                  }

                  return this.insertBlock(t, a && i.isInitial(a.tool) && a.isEmpty), r.abrupt("return");

                case 5:
                  n.insertContentAtCaretPosition(t.content.innerHTML);

                case 6:
                case "end":
                  return r.stop();
              }
            }, null, this);
          }
        }, {
          key: "processInlinePaste",
          value: function (t) {
            var n, o, i, a, s, l, c, u, f, d;
            return r.default.async(function (p) {
              for (;;) switch (p.prev = p.next) {
                case 0:
                  if (n = this.Editor, o = n.BlockManager, i = n.Caret, a = n.Sanitizer, s = n.Tools, l = t.content, t.tool, !(o.currentBlock && s.isInitial(o.currentBlock.tool) && l.textContent.length < e.PATTERN_PROCESSING_MAX_LENGTH)) {
                    p.next = 12;
                    break;
                  }

                  return p.next = 6, r.default.awrap(this.processPattern(l.textContent));

                case 6:
                  if (!(c = p.sent)) {
                    p.next = 12;
                    break;
                  }

                  return f = o.currentBlock && s.isInitial(o.currentBlock.tool) && o.currentBlock.isEmpty, u = o.paste(c.tool, c.event, f), i.setToBlock(u, i.positions.END), p.abrupt("return");

                case 12:
                  o.currentBlock && o.currentBlock.currentInput ? (d = a.getInlineToolsConfig(o.currentBlock.name), document.execCommand("insertHTML", !1, a.clean(l.innerHTML, d))) : this.insertBlock(t);

                case 13:
                case "end":
                  return p.stop();
              }
            }, null, this);
          }
        }, {
          key: "processPattern",
          value: function (t) {
            var e, n;
            return r.default.async(function (o) {
              for (;;) switch (o.prev = o.next) {
                case 0:
                  if (e = this.toolsPatterns.find(function (e) {
                    var n = e.pattern.exec(t);
                    return !!n && t === n.shift();
                  })) {
                    o.next = 3;
                    break;
                  }

                  return o.abrupt("return");

                case 3:
                  return n = this.composePasteEvent("pattern", {
                    key: e.key,
                    data: t
                  }), o.abrupt("return", {
                    event: n,
                    tool: e.tool
                  });

                case 5:
                case "end":
                  return o.stop();
              }
            }, null, this);
          }
        }, {
          key: "insertBlock",
          value: function (t) {
            var e,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = this.Editor,
                i = o.BlockManager,
                r = o.Caret,
                a = i.currentBlock;
            if (n && a && a.isEmpty) return e = i.paste(t.tool, t.event, !0), void r.setToBlock(e, r.positions.END);
            e = i.paste(t.tool, t.event), r.setToBlock(e, r.positions.END);
          }
        }, {
          key: "insertEditorJSData",
          value: function (t) {
            var e = this,
                n = this.Editor,
                o = n.BlockManager,
                i = n.Tools;
            t.forEach(function (t, n) {
              var r = t.tool,
                  a = t.data,
                  s = e.Editor.Tools.getToolSettings(r),
                  l = !1;
              0 === n && (l = o.currentBlock && i.isInitial(o.currentBlock.tool) && o.currentBlock.isEmpty), l ? o.replace(r, a, s) : o.insert(r, a, s);
            });
          }
        }, {
          key: "getNodes",
          value: function (t) {
            var e = this,
                n = Array.from(t.childNodes),
                o = Object.keys(this.toolsTags);
            return n.reduce(function t(n, r) {
              if (p.default.isEmpty(r) && !p.default.isSingleTag(r)) return n;
              var a = n[n.length - 1],
                  s = new DocumentFragment();

              switch (a && p.default.isFragment(a) && (s = n.pop()), r.nodeType) {
                case Node.ELEMENT_NODE:
                  var l = r,
                      c = (e.toolsTags[l.tagName] || {}).tool,
                      u = void 0 === c ? "" : c,
                      f = e.tagsByTool[u] || [],
                      d = o.includes(l.tagName),
                      h = p.default.blockElements.includes(l.tagName.toLowerCase()),
                      v = Array.from(l.children).some(function (t) {
                    var e = t.tagName;
                    return o.includes(e) && !f.includes(e);
                  }),
                      g = Array.from(l.children).some(function (t) {
                    var e = t.tagName;
                    return p.default.blockElements.includes(e.toLowerCase());
                  });
                  if (!h && !d && !v) return s.appendChild(l), [].concat((0, i.default)(n), [s]);
                  if (d && !v || h && !g && !v) return [].concat((0, i.default)(n), [s, l]);
                  break;

                case Node.TEXT_NODE:
                  return s.appendChild(r), [].concat((0, i.default)(n), [s]);

                default:
                  return [].concat((0, i.default)(n), [s]);
              }

              return [].concat((0, i.default)(n), (0, i.default)(Array.from(r.childNodes).reduce(t, [])));
            }, []);
          }
        }, {
          key: "composePasteEvent",
          value: function (t, e) {
            return new CustomEvent(t, {
              detail: e
            });
          }
        }]), e;
      }(d.default);

      o.default = y, y.displayName = "Paste", y.PATTERN_PROCESSING_MAX_LENGTH = 450, t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(28), n(59)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = p(f), d = p(d);

      var h = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).isRectSelectionActivated = !1, t.SCROLL_SPEED = 3, t.HEIGHT_OF_SCROLL_ZONE = 40, t.BOTTOM_SCROLL_ZONE = 1, t.TOP_SCROLL_ZONE = 2, t.MAIN_MOUSE_BUTTON = 0, t.mousedown = !1, t.isScrolling = !1, t.inScrollZone = null, t.startX = 0, t.startY = 0, t.mouseX = 0, t.mouseY = 0, t.stackOfSelected = [], t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "prepare",
          value: function () {
            var t = this,
                e = this.Editor.Listeners,
                n = this.genHTML().container;
            e.on(n, "mousedown", function (e) {
              e.button === t.MAIN_MOUSE_BUTTON && t.startSelection(e.pageX, e.pageY);
            }, !1), e.on(document.body, "mousemove", function (e) {
              t.changingRectangle(e), t.scrollByZones(e.clientY);
            }, !1), e.on(document.body, "mouseleave", function () {
              t.clearSelection(), t.endSelection();
            }), e.on(window, "scroll", function (e) {
              t.changingRectangle(e);
            }, !1), e.on(document.body, "mouseup", function () {
              t.endSelection();
            }, !1);
          }
        }, {
          key: "startSelection",
          value: function (t, e) {
            var n = document.elementFromPoint(t - window.pageXOffset, e - window.pageYOffset);
            n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
            var o = [".".concat(d.default.CSS.content), ".".concat(this.Editor.Toolbar.CSS.toolbar), ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],
                i = n.closest("." + this.Editor.UI.CSS.editorWrapper),
                r = o.some(function (t) {
              return !!n.closest(t);
            });
            i && !r && (this.mousedown = !0, this.startX = t, this.startY = e);
          }
        }, {
          key: "endSelection",
          value: function () {
            this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
          }
        }, {
          key: "isRectActivated",
          value: function () {
            return this.isRectSelectionActivated;
          }
        }, {
          key: "clearSelection",
          value: function () {
            this.isRectSelectionActivated = !1;
          }
        }, {
          key: "scrollByZones",
          value: function (t) {
            this.inScrollZone = null, t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1;
          }
        }, {
          key: "genHTML",
          value: function () {
            var t = this.Editor.UI,
                n = t.nodes.holder.querySelector("." + t.CSS.editorWrapper),
                o = u.default.make("div", e.CSS.overlay, {}),
                i = u.default.make("div", e.CSS.overlayContainer, {}),
                r = u.default.make("div", e.CSS.rect, {});
            return i.appendChild(r), o.appendChild(i), n.appendChild(o), this.overlayRectangle = r, {
              container: n,
              overlay: o
            };
          }
        }, {
          key: "scrollVertical",
          value: function (t) {
            var e = this;

            if (this.inScrollZone && this.mousedown) {
              var n = window.pageYOffset;
              window.scrollBy(0, t), this.mouseY += window.pageYOffset - n, setTimeout(function () {
                e.scrollVertical(t);
              }, 0);
            }
          }
        }, {
          key: "changingRectangle",
          value: function (t) {
            if (this.mousedown) {
              void 0 !== t.pageY && (this.mouseX = t.pageX, this.mouseY = t.pageY);
              var e = this.genInfoForMouseSelection(),
                  n = e.rightPos,
                  o = e.leftPos,
                  i = e.index,
                  r = this.startX > n && this.mouseX > n,
                  a = this.startX < o && this.mouseX < o;
              this.rectCrossesBlocks = !(r || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), void 0 !== i && (this.trySelectNextBlock(i), this.inverseSelection(), f.default.get().removeAllRanges(), t.preventDefault());
            }
          }
        }, {
          key: "shrinkRectangleToPoint",
          value: function () {
            this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
          }
        }, {
          key: "inverseSelection",
          value: function () {
            var t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;

            if (this.rectCrossesBlocks && !t) {
              var e = !0,
                  n = !1,
                  o = void 0;

              try {
                for (var i, r = this.stackOfSelected[Symbol.iterator](); !(e = (i = r.next()).done); e = !0) {
                  var a = i.value;
                  this.Editor.BlockSelection.selectBlockByIndex(a);
                }
              } catch (t) {
                n = !0, o = t;
              } finally {
                try {
                  e || null == r.return || r.return();
                } finally {
                  if (n) throw o;
                }
              }
            }

            if (!this.rectCrossesBlocks && t) {
              var s = !0,
                  l = !1,
                  c = void 0;

              try {
                for (var u, f = this.stackOfSelected[Symbol.iterator](); !(s = (u = f.next()).done); s = !0) {
                  var d = u.value;
                  this.Editor.BlockSelection.unSelectBlockByIndex(d);
                }
              } catch (t) {
                l = !0, c = t;
              } finally {
                try {
                  s || null == f.return || f.return();
                } finally {
                  if (l) throw c;
                }
              }
            }
          }
        }, {
          key: "updateRectangleSize",
          value: function () {
            this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
          }
        }, {
          key: "genInfoForMouseSelection",
          value: function () {
            var t,
                e = document.body.offsetWidth / 2,
                n = this.mouseY - window.pageYOffset,
                o = document.elementFromPoint(e, n),
                i = this.Editor.BlockManager.getBlockByChildNode(o);
            void 0 !== i && (t = this.Editor.BlockManager.blocks.findIndex(function (t) {
              return t.holder === i.holder;
            }));
            var r = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d.default.CSS.content),
                a = Number.parseInt(window.getComputedStyle(r).width, 10) / 2;
            return {
              index: t,
              leftPos: e - a,
              rightPos: e + a
            };
          }
        }, {
          key: "addBlockInSelection",
          value: function (t) {
            this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t), this.stackOfSelected.push(t);
          }
        }, {
          key: "trySelectNextBlock",
          value: function (t) {
            var e = this,
                n = this.stackOfSelected[this.stackOfSelected.length - 1] === t,
                o = this.stackOfSelected.length;

            if (!n) {
              var i = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0,
                  r = o <= 1 ? 0 : i ? 1 : -1,
                  a = t > this.stackOfSelected[o - 1] && 1 === r,
                  s = t < this.stackOfSelected[o - 1] && -1 === r,
                  l = !(a || s || 0 === r);

              if (l || !(t > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                if (!l && t < this.stackOfSelected[o - 1]) for (var c = this.stackOfSelected[o - 1] - 1; c >= t; c--) this.addBlockInSelection(c);else if (l) {
                  var u,
                      f = o - 1;

                  for (u = t > this.stackOfSelected[o - 1] ? function () {
                    return t > e.stackOfSelected[f];
                  } : function () {
                    return t < e.stackOfSelected[f];
                  }; u();) this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]), this.stackOfSelected.pop(), f--;
                }
              } else for (var d = this.stackOfSelected[o - 1] + 1 || t; d <= t; d++) this.addBlockInSelection(d);
            }
          }
        }], [{
          key: "CSS",
          get: function () {
            return {
              overlay: "codex-editor-overlay",
              overlayContainer: "codex-editor-overlay__container",
              rect: "codex-editor-overlay__rectangle",
              topScrollZone: "codex-editor-overlay__scroll-zone--top",
              bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
            };
          }
        }]), e;
      }(c.default);

      o.default = h, h.displayName = "RectangleSelection", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(26), n(2), n(3), n(4), n(5), n(6), n(7), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(15),
          p = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = d(f);

      var h = function (t) {
        function e() {
          return (0, r.default)(this, e), (0, s.default)(this, (0, l.default)(e).apply(this, arguments));
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "render",
          value: function (t) {
            var e,
                n,
                o = this;
            return i.default.async(function (r) {
              for (;;) switch (r.prev = r.next) {
                case 0:
                  return e = t.map(function (t) {
                    return {
                      function: function () {
                        return o.insertBlock(t);
                      }
                    };
                  }), r.next = 3, i.default.awrap(f.sequence(e));

                case 3:
                  return n = r.sent, this.Editor.UI.checkEmptiness(), r.abrupt("return", n);

                case 6:
                case "end":
                  return r.stop();
              }
            }, null, this);
          }
        }, {
          key: "insertBlock",
          value: function (t) {
            var e, n, o, r, a, s, l, c, u;
            return i.default.async(function (i) {
              for (;;) switch (i.prev = i.next) {
                case 0:
                  if (e = this.Editor, n = e.Tools, o = e.BlockManager, r = t.type, a = t.data, s = t.settings, !(r in n.available)) {
                    i.next = 15;
                    break;
                  }

                  i.prev = 5, o.insert(r, a, s), i.next = 13;
                  break;

                case 9:
                  throw i.prev = 9, i.t0 = i.catch(5), f.log("Block «".concat(r, "» skipped because of plugins error"), "warn", a), Error(i.t0);

                case 13:
                  i.next = 20;
                  break;

                case 15:
                  l = {
                    savedData: {
                      type: r,
                      data: a
                    },
                    title: r
                  }, r in n.unavailable && (c = n.unavailable[r].toolbox, u = n.getToolSettings(r).toolbox, l.title = c.title || u.title || l.title), o.insert(n.stubTool, l, s).stretched = !0, f.log("Tool «".concat(r, "» is not found. Check 'tools' property at your initial Editor.js config."), "warn");

                case 20:
                case "end":
                  return i.stop();
              }
            }, null, this, [[5, 9]]);
          }
        }]), e;
      }(u.default);

      o.default = h, h.displayName = "Renderer", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(51), n(2), n(3), n(4), n(5), n(6), n(7), n(14), n(365)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p) {
      "use strict";

      var h = n(15),
          v = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = v(i), r = v(r), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = h(d), p = v(p);

      var g = function (t) {
        function e() {
          var t;
          return (0, a.default)(this, e), (t = (0, l.default)(this, (0, c.default)(e).apply(this, arguments))).configCache = {}, t.inlineToolsConfigCache = null, t;
        }

        return (0, u.default)(e, t), (0, s.default)(e, [{
          key: "sanitizeBlocks",
          value: function (t) {
            var e = this;
            return t.map(function (t) {
              var n = e.composeToolConfig(t.tool);
              return d.isEmpty(n) ? t : (t.data = e.deepSanitize(t.data, n), t);
            });
          }
        }, {
          key: "deepSanitize",
          value: function (t, e) {
            return Array.isArray(t) ? this.cleanArray(t, e) : "object" === (0, r.default)(t) ? this.cleanObject(t, e) : "string" == typeof t ? this.cleanOneItem(t, e) : t;
          }
        }, {
          key: "clean",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {
              tags: e
            },
                o = this.createHTMLJanitorInstance(n);
            return o.clean(t);
          }
        }, {
          key: "composeToolConfig",
          value: function (t) {
            if (this.configCache[t]) return this.configCache[t];
            var e = this.Editor.Tools.INTERNAL_SETTINGS.SANITIZE_CONFIG,
                n = this.Editor.Tools.available[t],
                o = this.getInlineToolsConfig(t);
            if (!n.sanitize || n[e] && d.isEmpty(n[e])) return o;
            var i = n.sanitize,
                a = {};

            for (var s in i) if (i.hasOwnProperty(s)) {
              var l = i[s];
              "object" === (0, r.default)(l) ? a[s] = Object.assign({}, o, l) : a[s] = l;
            }

            return this.configCache[t] = a, a;
          }
        }, {
          key: "getInlineToolsConfig",
          value: function (t) {
            var e = this.Editor.Tools,
                n = e.getToolSettings(t).inlineToolbar || [],
                o = {};
            return "boolean" == typeof n && n ? o = this.getAllInlineToolsConfig() : n.map(function (t) {
              o = Object.assign(o, e.inline[t][e.INTERNAL_SETTINGS.SANITIZE_CONFIG]);
            }), o.br = !0, o.wbr = !0, o;
          }
        }, {
          key: "getAllInlineToolsConfig",
          value: function () {
            var t = this.Editor.Tools;
            if (this.inlineToolsConfigCache) return this.inlineToolsConfigCache;
            var e = {};
            return Object.entries(t.inline).forEach(function (n) {
              var o = (0, i.default)(n, 2),
                  r = (o[0], o[1]);
              Object.assign(e, r[t.INTERNAL_SETTINGS.SANITIZE_CONFIG]);
            }), this.inlineToolsConfigCache = e, this.inlineToolsConfigCache;
          }
        }, {
          key: "cleanArray",
          value: function (t, e) {
            var n = this;
            return t.map(function (t) {
              return n.deepSanitize(t, e);
            });
          }
        }, {
          key: "cleanObject",
          value: function (t, e) {
            var n = {};

            for (var o in t) if (t.hasOwnProperty(o)) {
              var i = t[o],
                  r = this.isRule(e[o]) ? e[o] : e;
              n[o] = this.deepSanitize(i, r);
            }

            return n;
          }
        }, {
          key: "cleanOneItem",
          value: function (t, e) {
            return "object" === (0, r.default)(e) ? this.clean(t, e) : !1 === e ? this.clean(t, {}) : t;
          }
        }, {
          key: "isRule",
          value: function (t) {
            return "object" === (0, r.default)(t) || "boolean" == typeof t || "function" == typeof t;
          }
        }, {
          key: "createHTMLJanitorInstance",
          value: function (t) {
            return t ? new p.default(t) : null;
          }
        }]), e;
      }(f.default);

      o.default = g, g.displayName = "Sanitizer", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(26), n(2), n(3), n(4), n(5), n(6), n(7), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f) {
      "use strict";

      var d = n(15),
          p = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = p(i), r = p(r), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = d(f);

      var h = function (t) {
        function e() {
          return (0, r.default)(this, e), (0, s.default)(this, (0, l.default)(e).apply(this, arguments));
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "save",
          value: function () {
            var t,
                e,
                n,
                o,
                r,
                a,
                s,
                l,
                c = this;
            return i.default.async(function (u) {
              for (;;) switch (u.prev = u.next) {
                case 0:
                  return t = this.Editor, e = t.BlockManager, n = t.Sanitizer, o = t.ModificationsObserver, r = e.blocks, a = [], o.disable(), r.forEach(function (t) {
                    a.push(c.getSavedData(t));
                  }), u.next = 6, i.default.awrap(Promise.all(a));

                case 6:
                  return s = u.sent, u.next = 9, i.default.awrap(n.sanitizeBlocks(s));

                case 9:
                  return l = u.sent, o.enable(), u.abrupt("return", this.makeOutput(l));

                case 12:
                case "end":
                  return u.stop();
              }
            }, null, this);
          }
        }, {
          key: "getSavedData",
          value: function (t) {
            var e, n;
            return i.default.async(function (o) {
              for (;;) switch (o.prev = o.next) {
                case 0:
                  return o.next = 2, i.default.awrap(t.save());

                case 2:
                  if (e = o.sent, o.t0 = e, !o.t0) {
                    o.next = 8;
                    break;
                  }

                  return o.next = 7, i.default.awrap(t.validate(e.data));

                case 7:
                  o.t0 = o.sent;

                case 8:
                  return n = o.t0, o.abrupt("return", Object.assign(Object.assign({}, e), {
                    isValid: n
                  }));

                case 10:
                case "end":
                  return o.stop();
              }
            });
          }
        }, {
          key: "makeOutput",
          value: function (t) {
            var e = this,
                n = 0,
                o = [];
            return f.log("[Editor.js saving]:", "groupCollapsed"), t.forEach(function (t) {
              var i = t.tool,
                  r = t.data,
                  a = t.time,
                  s = t.isValid;
              if (n += a, f.log("".concat(i.charAt(0).toUpperCase() + i.slice(1)), "group"), !s) return f.log("Block «".concat(i, "» skipped because saved data is invalid")), void f.log(void 0, "groupEnd");
              f.log(r), f.log(void 0, "groupEnd"), i !== e.Editor.Tools.stubTool ? o.push({
                type: i,
                data: r
              }) : o.push(r);
            }), f.log("Total", "log", n), f.log(void 0, "groupEnd"), {
              time: +new Date(),
              blocks: o,
              version: "2.17.0"
            };
          }
        }]), e;
      }(u.default);

      o.default = h, h.displayName = "Saver", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(366), n(7)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = f(c);

      var d = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).registeredShortcuts = [], t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "add",
          value: function (t) {
            var e = new c.default({
              name: t.name,
              on: document,
              callback: t.handler
            });
            this.registeredShortcuts.push(e);
          }
        }, {
          key: "remove",
          value: function (t) {
            var e = this.registeredShortcuts.findIndex(function (e) {
              return e.name === t;
            });
            this.registeredShortcuts[e].remove(), this.registeredShortcuts.splice(e, 1);
          }
        }]), e;
      }((u = f(u)).default);

      o.default = d, d.displayName = "Shortcuts", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(58), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d) {
      "use strict";

      var p = n(15),
          h = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = h(i), r = h(r), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);

      var v = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).nodes = {
            wrapper: null,
            toolSettings: null,
            defaultSettings: null
          }, t.buttons = [], t.flipper = null, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "make",
          value: function () {
            this.nodes.wrapper = u.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = u.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = u.default.make("div", this.CSS.defaultSettings), u.default.append(this.nodes.wrapper, [this.nodes.toolSettings, this.nodes.defaultSettings]), this.enableFlipper();
          }
        }, {
          key: "open",
          value: function () {
            this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.Editor.BlockManager.currentBlock.selected = !0, this.addToolSettings(), this.addDefaultSettings(), this.Editor.Events.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons);
          }
        }, {
          key: "close",
          value: function () {
            this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.Editor.Events.emit(this.events.closed), this.buttons = [], this.flipper.deactivate();
          }
        }, {
          key: "addToolSettings",
          value: function () {
            "function" == typeof this.Editor.BlockManager.currentBlock.tool.renderSettings && u.default.append(this.nodes.toolSettings, this.Editor.BlockManager.currentBlock.tool.renderSettings());
          }
        }, {
          key: "addDefaultSettings",
          value: function () {
            u.default.append(this.nodes.defaultSettings, this.Editor.BlockManager.currentBlock.renderTunes());
          }
        }, {
          key: "enableFlipper",
          value: function () {
            var t = this;
            this.flipper = new f.default({
              focusedItemClass: this.CSS.focusedButton,
              activateCallback: function () {
                d.delay(function () {
                  t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock);
                }, 10)();
              }
            });
          }
        }, {
          key: "events",
          get: function () {
            return {
              opened: "block-settings-opened",
              closed: "block-settings-closed"
            };
          }
        }, {
          key: "CSS",
          get: function () {
            return {
              wrapper: "ce-settings",
              wrapperOpened: "ce-settings--opened",
              toolSettings: "ce-settings__plugin-zone",
              defaultSettings: "ce-settings__default-zone",
              button: "ce-settings__button",
              focusedButton: "ce-settings__button--focused",
              focusedButtonAnimated: "ce-settings__button--focused-animated"
            };
          }
        }, {
          key: "opened",
          get: function () {
            return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened);
          }
        }, {
          key: "blockTunesButtons",
          get: function () {
            var t = this;
            if (0 !== this.buttons.length) return this.buttons;
            var e = this.nodes.toolSettings.querySelectorAll(".".concat(this.Editor.StylesAPI.classes.settingsButton)),
                n = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
            return e.forEach(function (e) {
              t.buttons.push(e);
            }), n.forEach(function (e) {
              t.buttons.push(e);
            }), this.buttons;
          }
        }]), e;
      }(c.default);

      o.default = v, v.displayName = "BlockSettings", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(26), n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(14), n(58)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p, h) {
      "use strict";

      var v = n(15),
          g = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = g(i), r = g(r), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);

      var y = function (t) {
        function e() {
          var t;
          return (0, a.default)(this, e), (t = (0, l.default)(this, (0, c.default)(e).apply(this, arguments))).nodes = {
            wrapper: null,
            tools: null
          }, t.opened = !1, t.tools = {}, t.flipper = null, t.togglingCallback = null, t;
        }

        return (0, u.default)(e, t), (0, s.default)(e, [{
          key: "make",
          value: function () {
            this.nodes.wrapper = d.default.make("div", e.CSS.conversionToolbarWrapper), this.nodes.tools = d.default.make("div", e.CSS.conversionToolbarTools);
            var t = d.default.make("div", e.CSS.conversionToolbarLabel, {
              textContent: "Convert to"
            });
            return this.addTools(), this.enableFlipper(), d.default.append(this.nodes.wrapper, t), d.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
          }
        }, {
          key: "toggle",
          value: function (t) {
            this.opened ? this.close() : this.open(), "function" == typeof t && (this.togglingCallback = t);
          }
        }, {
          key: "open",
          value: function () {
            var t = this;
            this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(e.CSS.conversionToolbarShowed), setTimeout(function () {
              t.flipper.activate(Object.values(t.tools).filter(function (t) {
                return !t.classList.contains(e.CSS.conversionToolHidden);
              })), t.flipper.focusFirst(), "function" == typeof t.togglingCallback && t.togglingCallback(!0);
            }, 50);
          }
        }, {
          key: "close",
          value: function () {
            this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(e.CSS.conversionToolbarShowed), "function" == typeof this.togglingCallback && this.togglingCallback(!1);
          }
        }, {
          key: "hasTools",
          value: function () {
            var t = Object.keys(this.tools);
            return !(1 === t.length && t.shift() === this.config.initialBlock);
          }
        }, {
          key: "replaceWithBlock",
          value: function (t) {
            var e,
                n,
                o,
                i,
                a,
                s,
                l,
                c,
                u,
                f,
                d,
                h = this;
            return r.default.async(function (v) {
              for (;;) switch (v.prev = v.next) {
                case 0:
                  return e = this.Editor.BlockManager.currentBlock.class, n = this.Editor.BlockManager.currentBlock.name, v.next = 4, r.default.awrap(this.Editor.BlockManager.currentBlock.save());

                case 4:
                  if (o = v.sent, i = this.Editor.Tools.INTERNAL_SETTINGS, a = o.data, n === t && (t = this.config.initialBlock), s = this.Editor.Tools.toolsClasses[t], l = "", "function" != typeof (c = e[i.CONVERSION_CONFIG].export)) {
                    v.next = 15;
                    break;
                  }

                  l = c(a), v.next = 21;
                  break;

                case 15:
                  if ("string" != typeof c) {
                    v.next = 19;
                    break;
                  }

                  l = a[c], v.next = 21;
                  break;

                case 19:
                  return p.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), v.abrupt("return");

                case 21:
                  if (u = this.Editor.Sanitizer.clean(l, s.sanitize), f = {}, "function" != typeof (d = s[i.CONVERSION_CONFIG].import)) {
                    v.next = 28;
                    break;
                  }

                  f = d(u), v.next = 34;
                  break;

                case 28:
                  if ("string" != typeof d) {
                    v.next = 32;
                    break;
                  }

                  f[d] = u, v.next = 34;
                  break;

                case 32:
                  return p.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), v.abrupt("return");

                case 34:
                  this.Editor.BlockManager.replace(t, f), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), p.delay(function () {
                    h.Editor.Caret.setToBlock(h.Editor.BlockManager.currentBlock);
                  }, 10)();

                case 39:
                case "end":
                  return v.stop();
              }
            }, null, this);
          }
        }, {
          key: "addTools",
          value: function () {
            var t = this.Editor.Tools.blockTools;

            for (var e in t) if (t.hasOwnProperty(e)) {
              var n = this.Editor.Tools.INTERNAL_SETTINGS,
                  o = t[e],
                  i = o[n.TOOLBOX],
                  r = o[n.CONVERSION_CONFIG];
              !p.isEmpty(i) && i.icon && r && r.import && this.addTool(e, i.icon, i.title);
            }
          }
        }, {
          key: "addTool",
          value: function (t, n, o) {
            var i = this,
                a = d.default.make("div", [e.CSS.conversionTool]),
                s = d.default.make("div", [e.CSS.conversionToolIcon]);
            a.dataset.tool = t, s.innerHTML = n, d.default.append(a, s), d.default.append(a, d.default.text(o || p.capitalize(t))), d.default.append(this.nodes.tools, a), this.tools[t] = a, this.Editor.Listeners.on(a, "click", function () {
              return r.default.async(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, r.default.awrap(i.replaceWithBlock(t));

                  case 2:
                  case "end":
                    return e.stop();
                }
              });
            });
          }
        }, {
          key: "filterTools",
          value: function () {
            var t = this.Editor.BlockManager.currentBlock;
            Object.entries(this.tools).forEach(function (n) {
              var o = (0, i.default)(n, 2),
                  r = o[0],
                  a = o[1];
              a.hidden = !1, a.classList.toggle(e.CSS.conversionToolHidden, r === t.name);
            });
          }
        }, {
          key: "enableFlipper",
          value: function () {
            this.flipper = new h.default({
              focusedItemClass: e.CSS.conversionToolFocused
            });
          }
        }], [{
          key: "CSS",
          get: function () {
            return {
              conversionToolbarWrapper: "ce-conversion-toolbar",
              conversionToolbarShowed: "ce-conversion-toolbar--showed",
              conversionToolbarTools: "ce-conversion-toolbar__tools",
              conversionToolbarLabel: "ce-conversion-toolbar__label",
              conversionTool: "ce-conversion-tool",
              conversionToolHidden: "ce-conversion-tool--hidden",
              conversionToolIcon: "ce-conversion-tool__icon",
              conversionToolFocused: "ce-conversion-tool--focused",
              conversionToolActive: "ce-conversion-tool--active"
            };
          }
        }]), e;
      }(f.default);

      o.default = y, y.displayName = "ConversionToolbar", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(28), n(14), n(58)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p, h) {
      "use strict";

      var v = n(15),
          g = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = g(i), r = g(r), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);

      var y = function (t) {
        function e() {
          var t;
          return (0, r.default)(this, e), (t = (0, s.default)(this, (0, l.default)(e).apply(this, arguments))).CSS = {
            inlineToolbar: "ce-inline-toolbar",
            inlineToolbarShowed: "ce-inline-toolbar--showed",
            inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
            inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
            inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
            buttonsWrapper: "ce-inline-toolbar__buttons",
            actionsWrapper: "ce-inline-toolbar__actions",
            inlineToolButton: "ce-inline-tool",
            inlineToolButtonLast: "ce-inline-tool--last",
            inputField: "cdx-input",
            focusedButton: "ce-inline-tool--focused",
            conversionToggler: "ce-inline-toolbar__dropdown",
            conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
            conversionTogglerContent: "ce-inline-toolbar__dropdown-content"
          }, t.opened = !1, t.nodes = {
            wrapper: null,
            buttons: null,
            conversionToggler: null,
            conversionTogglerContent: null,
            actions: null
          }, t.toolbarVerticalMargin = 5, t.buttonsList = null, t.width = 0, t.flipper = null, t;
        }

        return (0, c.default)(e, t), (0, a.default)(e, [{
          key: "make",
          value: function () {
            var t = this;
            this.nodes.wrapper = f.default.make("div", this.CSS.inlineToolbar), this.nodes.buttons = f.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = f.default.make("div", this.CSS.actionsWrapper), this.Editor.Listeners.on(this.nodes.wrapper, "mousedown", function (e) {
              e.target.closest(".".concat(t.CSS.actionsWrapper)) || e.preventDefault();
            }), f.default.append(this.nodes.wrapper, [this.nodes.buttons, this.nodes.actions]), f.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), this.addTools(), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
          }
        }, {
          key: "tryToShow",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.allowedToShow() ? (this.move(), this.open(), this.Editor.Toolbar.close(), this.checkToolsState()) : t && this.close();
          }
        }, {
          key: "move",
          value: function () {
            var t = d.default.rect,
                e = this.Editor.UI.nodes.wrapper.getBoundingClientRect(),
                n = {
              x: t.x - e.left,
              y: t.y + t.height - e.top + this.toolbarVerticalMargin
            };
            t.width && (n.x += Math.floor(t.width / 2));
            var o = n.x - this.width / 2,
                i = n.x + this.width / 2;
            this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, i > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px";
          }
        }, {
          key: "close",
          value: function () {
            this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), this.tools.forEach(function (t) {
              "function" == typeof t.clear && t.clear();
            }), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close();
          }
        }, {
          key: "open",
          value: function () {
            this.filterTools(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.tools.forEach(function (t) {
              "function" == typeof t.clear && t.clear();
            }), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = !0, this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
            var t = Array.from(this.buttonsList);
            t.unshift(this.nodes.conversionToggler), t = t.filter(function (t) {
              return !t.hidden;
            }), this.flipper.activate(t);
          }
        }, {
          key: "containsNode",
          value: function (t) {
            return this.nodes.wrapper.contains(t);
          }
        }, {
          key: "allowedToShow",
          value: function () {
            var t = d.default.get(),
                e = d.default.text;
            if (!t || !t.anchorNode) return !1;
            if (t.isCollapsed || e.length < 1) return !1;
            var n = f.default.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
            if (t && ["IMG", "INPUT"].includes(n.tagName)) return !1;
            if (null === n.closest('[contenteditable="true"]')) return !1;
            var o = this.Editor.BlockManager.getBlock(t.anchorNode);
            if (!o) return !1;
            var i = this.Editor.Tools.getToolSettings(o.name);
            return i && i[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS];
          }
        }, {
          key: "filterTools",
          value: function () {
            var t = this,
                e = d.default.get(),
                n = this.Editor.BlockManager.getBlock(e.anchorNode),
                o = this.Editor.Tools.getToolSettings(n.name),
                i = o && o[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS],
                r = Array.from(this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)));
            r.forEach(function (e) {
              e.hidden = !1, e.classList.remove(t.CSS.inlineToolButtonLast);
            }), Array.isArray(i) && r.forEach(function (t) {
              t.hidden = !i.includes(t.dataset.tool);
            });
            var a = r.filter(function (t) {
              return !t.hidden;
            }).pop();
            a && a.classList.add(this.CSS.inlineToolButtonLast), this.recalculateWidth();
          }
        }, {
          key: "recalculateWidth",
          value: function () {
            this.width = this.nodes.wrapper.offsetWidth;
          }
        }, {
          key: "addConversionToggler",
          value: function () {
            var t = this;
            this.nodes.conversionToggler = f.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = f.default.make("div", this.CSS.conversionTogglerContent);
            var e = f.default.svg("toggler-down", 13, 13);
            this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.buttons.appendChild(this.nodes.conversionToggler), this.Editor.Listeners.on(this.nodes.conversionToggler, "click", function () {
              t.Editor.ConversionToolbar.toggle(function (e) {
                !e && t.opened ? t.flipper.activate() : t.opened && t.flipper.deactivate();
              });
            }), this.Editor.Tooltip.onHover(this.nodes.conversionToggler, "Convert to", {
              placement: "top",
              hidingDelay: 100
            });
          }
        }, {
          key: "setConversionTogglerContent",
          value: function () {
            var t = this.Editor,
                e = t.BlockManager,
                n = t.Tools,
                o = e.currentBlock.name,
                i = n.available[o][n.INTERNAL_SETTINGS.CONVERSION_CONFIG] || {},
                r = i && i.export;
            this.nodes.conversionToggler.hidden = !r, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !r);
            var a = n.getToolSettings(o),
                s = n.available[o][n.INTERNAL_SETTINGS.TOOLBOX] || {},
                l = a.toolbox || {};
            this.nodes.conversionTogglerContent.innerHTML = l.icon || s.icon || l.title || s.title || p.capitalize(o);
          }
        }, {
          key: "prepareConversionToolbar",
          value: function () {
            var t = this.Editor.ConversionToolbar.make();
            f.default.append(this.nodes.wrapper, t);
          }
        }, {
          key: "addTools",
          value: function () {
            var t = this;
            this.tools.forEach(function (e, n) {
              t.addTool(n, e);
            });
          }
        }, {
          key: "addTool",
          value: function (t, e) {
            var n = this,
                o = this.Editor,
                r = o.Listeners,
                a = o.Tools,
                s = o.Tooltip,
                l = e.render();

            if (l) {
              if (l.dataset.tool = t, this.nodes.buttons.appendChild(l), "function" == typeof e.renderActions) {
                var c = e.renderActions();
                this.nodes.actions.appendChild(c);
              }

              r.on(l, "click", function (t) {
                n.toolClicked(e), t.preventDefault();
              });
              var u = a.getToolSettings(t),
                  d = null;
              Object.entries(a.internalTools).filter(function (t) {
                var e = (0, i.default)(t, 2),
                    n = (e[0], e[1]);
                return p.isFunction(n) ? n[a.INTERNAL_SETTINGS.IS_INLINE] : n.class[a.INTERNAL_SETTINGS.IS_INLINE];
              }).map(function (t) {
                return (0, i.default)(t, 1)[0];
              }).includes(t) ? d = this.inlineTools[t][a.INTERNAL_SETTINGS.SHORTCUT] : u && u[a.USER_SETTINGS.SHORTCUT] && (d = u[a.USER_SETTINGS.SHORTCUT]), d && this.enableShortcuts(e, d);
              var h = f.default.make("div"),
                  v = a.toolsClasses[t][a.INTERNAL_SETTINGS.TITLE] || p.capitalize(t);
              h.appendChild(f.default.text(v)), d && h.appendChild(f.default.make("div", this.CSS.inlineToolbarShortcut, {
                textContent: p.beautifyShortcut(d)
              })), s.onHover(l, h, {
                placement: "top",
                hidingDelay: 100
              });
            } else p.log("Render method must return an instance of Node", "warn", t);
          }
        }, {
          key: "enableShortcuts",
          value: function (t, e) {
            var n = this;
            this.Editor.Shortcuts.add({
              name: e,
              handler: function (e) {
                var o = n.Editor.BlockManager.currentBlock;

                if (o) {
                  var i = n.Editor.Tools.getToolSettings(o.name);
                  i && i[n.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS] && (e.preventDefault(), n.toolClicked(t));
                }
              }
            });
          }
        }, {
          key: "toolClicked",
          value: function (t) {
            var e = d.default.range;
            t.surround(e), this.checkToolsState();
          }
        }, {
          key: "checkToolsState",
          value: function () {
            this.tools.forEach(function (t) {
              t.checkState(d.default.get());
            });
          }
        }, {
          key: "enableFlipper",
          value: function () {
            this.flipper = new h.default({
              focusedItemClass: this.CSS.focusedButton,
              allowArrows: !1
            });
          }
        }, {
          key: "tools",
          get: function () {
            if (!this.toolsInstances || 0 === this.toolsInstances.size) {
              var t = this.inlineTools;

              for (var e in this.toolsInstances = new Map(), t) t.hasOwnProperty(e) && this.toolsInstances.set(e, t[e]);
            }

            return this.toolsInstances;
          }
        }, {
          key: "inlineTools",
          get: function () {
            var t = {};

            for (var e in this.Editor.Tools.inline) if (this.Editor.Tools.inline.hasOwnProperty(e)) {
              var n = this.Editor.Tools.getToolSettings(e);
              t[e] = this.Editor.Tools.constructInline(this.Editor.Tools.inline[e], n);
            }

            return t;
          }
        }]), e;
      }(u.default);

      o.default = y, y.displayName = "InlineToolbar", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(13), n(14), n(58), n(59)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p) {
      "use strict";

      var h = n(15),
          v = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = v(i), r = v(r), a = v(a), s = v(s), l = v(l), c = v(c), u = v(u), f = h(f), d = v(d);

      var g = function (t) {
        function e() {
          var t;
          return (0, i.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).opened = !1, t.nodes = {
            toolbox: null,
            buttons: []
          }, t.displayedToolsCount = 0, t.flipper = null, t;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "make",
          value: function () {
            this.nodes.toolbox = u.default.make("div", this.CSS.toolbox), u.default.append(this.Editor.Toolbar.nodes.content, this.nodes.toolbox), this.addTools(), this.enableFlipper();
          }
        }, {
          key: "toolButtonActivate",
          value: function (t, e) {
            var n = this.Editor.Tools.toolsClasses[e];
            this.insertNewBlock(n, e);
          }
        }, {
          key: "open",
          value: function () {
            this.isEmpty || (this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier), this.nodes.toolbox.classList.add(this.CSS.toolboxOpened), this.opened = !0, this.flipper.activate());
          }
        }, {
          key: "close",
          value: function () {
            this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened), this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier), this.opened = !1, this.flipper.deactivate();
          }
        }, {
          key: "toggle",
          value: function () {
            this.opened ? this.close() : this.open();
          }
        }, {
          key: "addTools",
          value: function () {
            var t = this.Editor.Tools.available;

            for (var e in t) t.hasOwnProperty(e) && this.addTool(e, t[e]);
          }
        }, {
          key: "addTool",
          value: function (t, e) {
            var n = this,
                o = this.Editor.Tools.INTERNAL_SETTINGS,
                i = this.Editor.Tools.USER_SETTINGS,
                r = e[o.TOOLBOX];
            if (!f.isEmpty(r)) if (!r || r.icon) {
              var a = this.Editor.Tools.getToolSettings(t)[i.TOOLBOX] || {},
                  s = u.default.make("li", [this.CSS.toolboxButton]);
              s.dataset.tool = t, s.innerHTML = a.icon || r.icon, u.default.append(this.nodes.toolbox, s), this.nodes.toolbox.appendChild(s), this.nodes.buttons.push(s), this.Editor.Listeners.on(s, "click", function (e) {
                n.toolButtonActivate(e, t);
              });
              var l = this.drawTooltip(t);
              this.Editor.Tooltip.onHover(s, l, {
                placement: "bottom",
                hidingDelay: 200
              });
              var c = this.Editor.Tools.getToolSettings(t);
              c && c[this.Editor.Tools.USER_SETTINGS.SHORTCUT] && this.enableShortcut(e, t, c[this.Editor.Tools.USER_SETTINGS.SHORTCUT]), this.displayedToolsCount++;
            } else f.log("Toolbar icon is missed. Tool %o skipped", "warn", t);
          }
        }, {
          key: "drawTooltip",
          value: function (t) {
            var e = this.Editor.Tools.getToolSettings(t),
                n = this.Editor.Tools.available[t][this.Editor.Tools.INTERNAL_SETTINGS.TOOLBOX] || {},
                o = (e.toolbox || {}).title || n.title || t,
                i = e[this.Editor.Tools.USER_SETTINGS.SHORTCUT],
                r = u.default.make("div", this.CSS.buttonTooltip),
                a = document.createTextNode(f.capitalize(o));
            return r.appendChild(a), i && (i = f.beautifyShortcut(i), r.appendChild(u.default.make("div", this.CSS.buttonShortcut, {
              textContent: i
            }))), r;
          }
        }, {
          key: "enableShortcut",
          value: function (t, e, n) {
            var o = this;
            this.Editor.Shortcuts.add({
              name: n,
              handler: function (n) {
                n.preventDefault(), o.insertNewBlock(t, e);
              }
            });
          }
        }, {
          key: "enableFlipper",
          value: function () {
            var t = Array.from(this.nodes.toolbox.childNodes);
            this.flipper = new d.default({
              items: t,
              focusedItemClass: this.CSS.toolboxButtonActive
            });
          }
        }, {
          key: "insertNewBlock",
          value: function (t, e) {
            var n,
                o = this.Editor,
                i = o.BlockManager,
                r = o.Caret;
            (n = i.currentBlock.isEmpty ? i.replace(e) : i.insert(e)).call(p.BlockToolAPI.APPEND_CALLBACK), this.Editor.Caret.setToBlock(n), 0 === n.inputs.length && (n === i.lastBlock ? (i.insertAtEnd(), r.setToBlock(i.lastBlock)) : r.setToBlock(i.nextBlock)), this.Editor.Toolbar.close();
          }
        }, {
          key: "CSS",
          get: function () {
            return {
              toolbox: "ce-toolbox",
              toolboxButton: "ce-toolbox__button",
              toolboxButtonActive: "ce-toolbox__button--active",
              toolboxOpened: "ce-toolbox--opened",
              openedToolbarHolderModifier: "codex-editor--toolbox-opened",
              buttonTooltip: "ce-toolbox-button-tooltip",
              buttonShortcut: "ce-toolbox-button-tooltip__shortcut"
            };
          }
        }, {
          key: "isEmpty",
          get: function () {
            return 0 === this.displayedToolsCount;
          }
        }]), e;
      }(c.default);

      o.default = g, g.displayName = "Toolbox", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(51), n(2), n(3), n(4), n(5), n(6), n(367), n(7), n(14), n(368), n(369), n(370), n(371)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p, h, v, g, y) {
      "use strict";

      var b = n(15),
          m = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = m(i), r = m(r), a = m(a), s = m(s), l = m(l), c = m(c), u = m(u), f = m(f), d = m(d), p = b(p), h = m(h), v = m(v), g = m(g), y = m(y);

      var k = function (t) {
        function e(t) {
          var n,
              o = t.config;
          return (0, a.default)(this, e), (n = (0, l.default)(this, (0, c.default)(e).call(this, {
            config: o
          }))).stubTool = "stub", n.toolsClasses = {}, n.toolsAvailable = {}, n.toolsUnavailable = {}, n.toolsSettings = {}, n._inlineTools = {}, n.toolsClasses = {}, n.toolsSettings = {}, n.toolsAvailable = {}, n.toolsUnavailable = {}, n._inlineTools = null, n;
        }

        return (0, u.default)(e, t), (0, s.default)(e, [{
          key: "prepare",
          value: function () {
            var t = this;
            if (this.validateTools(), this.config.tools = p.deepMerge({}, this.internalTools, this.config.tools), !this.config.hasOwnProperty("tools") || 0 === Object.keys(this.config.tools).length) throw Error("Can't start without tools");

            for (var e in this.config.tools) "object" === (0, r.default)(this.config.tools[e]) ? (this.toolsClasses[e] = this.config.tools[e].class, this.toolsSettings[e] = this.config.tools[e], delete this.toolsSettings[e].class) : (this.toolsClasses[e] = this.config.tools[e], this.toolsSettings[e] = {
              class: this.config.tools[e]
            });

            var n = this.getListOfPrepareFunctions();
            return 0 === n.length ? Promise.resolve() : p.sequence(n, function (e) {
              t.success(e);
            }, function (e) {
              t.fallback(e);
            });
          }
        }, {
          key: "success",
          value: function (t) {
            this.toolsAvailable[t.toolName] = this.toolsClasses[t.toolName];
          }
        }, {
          key: "fallback",
          value: function (t) {
            this.toolsUnavailable[t.toolName] = this.toolsClasses[t.toolName];
          }
        }, {
          key: "construct",
          value: function (t, e) {
            var n = this.toolsClasses[t],
                o = this.toolsSettings[t][this.USER_SETTINGS.CONFIG] || {};
            return t !== this.config.initialBlock || o.placeholder || (o.placeholder = this.config.placeholder), new n({
              api: this.Editor.API.methods,
              config: o,
              data: e
            });
          }
        }, {
          key: "constructInline",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {
              api: this.Editor.API.methods,
              config: e[this.USER_SETTINGS.CONFIG] || {}
            };
            return new t(n);
          }
        }, {
          key: "isInitial",
          value: function (t) {
            return t instanceof this.available[this.config.initialBlock];
          }
        }, {
          key: "getToolSettings",
          value: function (t) {
            return this.toolsSettings[t];
          }
        }, {
          key: "getListOfPrepareFunctions",
          value: function () {
            var t = [];

            for (var e in this.toolsClasses) if (this.toolsClasses.hasOwnProperty(e)) {
              var n = this.toolsClasses[e];
              "function" == typeof n.prepare ? t.push({
                function: n.prepare,
                data: {
                  toolName: e,
                  config: this.toolsSettings[e][this.USER_SETTINGS.CONFIG]
                }
              }) : this.toolsAvailable[e] = n;
            }

            return t;
          }
        }, {
          key: "validateTools",
          value: function () {
            for (var t in this.config.tools) if (this.config.tools.hasOwnProperty(t)) {
              if (t in this.internalTools) return;
              var e = this.config.tools[t];
              if (!p.isFunction(e) && !p.isFunction(e.class)) throw Error("Tool «".concat(t, "» must be a constructor function or an object with function in the «class» property"));
            }
          }
        }, {
          key: "available",
          get: function () {
            return this.toolsAvailable;
          }
        }, {
          key: "unavailable",
          get: function () {
            return this.toolsUnavailable;
          }
        }, {
          key: "inline",
          get: function () {
            var t = this;
            if (this._inlineTools) return this._inlineTools;
            var e = Object.entries(this.available).filter(function (e) {
              var n = (0, i.default)(e, 2),
                  o = (n[0], n[1]);
              if (!o[t.INTERNAL_SETTINGS.IS_INLINE]) return !1;
              var r = ["render", "surround", "checkState"].filter(function (e) {
                return !t.constructInline(o)[e];
              });
              return !r.length || (p.log("Incorrect Inline Tool: ".concat(o.name, ". Some of required methods is not implemented %o"), "warn", r), !1);
            }),
                n = {};
            return e.forEach(function (t) {
              var e = (0, i.default)(t, 2),
                  o = e[0],
                  r = e[1];
              return n[o] = r;
            }), this._inlineTools = n, this._inlineTools;
          }
        }, {
          key: "blockTools",
          get: function () {
            var t = this,
                e = Object.entries(this.available).filter(function (e) {
              var n = (0, i.default)(e, 2);
              return n[0], !n[1][t.INTERNAL_SETTINGS.IS_INLINE];
            }),
                n = {};
            return e.forEach(function (t) {
              var e = (0, i.default)(t, 2),
                  o = e[0],
                  r = e[1];
              return n[o] = r;
            }), n;
          }
        }, {
          key: "INTERNAL_SETTINGS",
          get: function () {
            return {
              IS_ENABLED_LINE_BREAKS: "enableLineBreaks",
              IS_INLINE: "isInline",
              TITLE: "title",
              SHORTCUT: "shortcut",
              TOOLBOX: "toolbox",
              SANITIZE_CONFIG: "sanitize",
              CONVERSION_CONFIG: "conversionConfig"
            };
          }
        }, {
          key: "USER_SETTINGS",
          get: function () {
            return {
              SHORTCUT: "shortcut",
              TOOLBOX: "toolbox",
              ENABLED_INLINE_TOOLS: "inlineToolbar",
              CONFIG: "config"
            };
          }
        }, {
          key: "internalTools",
          get: function () {
            return {
              bold: {
                class: h.default
              },
              italic: {
                class: v.default
              },
              link: {
                class: g.default
              },
              paragraph: {
                class: f.default,
                inlineToolbar: !0
              },
              stub: {
                class: y.default
              }
            };
          }
        }]), e;
      }(d.default);

      o.default = k, k.displayName = "Tools", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(4), n(5), n(6), n(7), n(372)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);

      var d = function (t) {
        function e(t) {
          var n,
              o = t.config;
          return (0, i.default)(this, e), (n = (0, a.default)(this, (0, s.default)(e).call(this, {
            config: o
          }))).lib = new u.default(), n;
        }

        return (0, l.default)(e, t), (0, r.default)(e, [{
          key: "show",
          value: function (t, e, n) {
            this.lib.show(t, e, n);
          }
        }, {
          key: "hide",
          value: function () {
            this.lib.hide();
          }
        }, {
          key: "onHover",
          value: function (t, e, n) {
            this.lib.onHover(t, e, n);
          }
        }]), e;
      }(c.default);

      o.default = d, d.displayName = "Tooltip", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(26), n(2), n(3), n(4), n(5), n(6), n(373), n(7), n(13), n(14), n(28), n(59), n(58)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u, f, d, p, h, v, g, y) {
      "use strict";

      var b = n(15),
          m = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = m(i), r = m(r), a = m(a), s = m(s), l = m(l), c = m(c), u = m(u), f = m(f), d = m(d), p = m(p), h = b(h), v = m(v), g = m(g), y = m(y);

      var k = function (t) {
        function e() {
          var t;
          return (0, a.default)(this, e), (t = (0, l.default)(this, (0, c.default)(e).apply(this, arguments))).isMobile = !1, t.nodes = {
            holder: null,
            wrapper: null,
            redactor: null
          }, t.contentRectCache = void 0, t.resizeDebouncer = h.debounce(function () {
            t.windowResize();
          }, 200), t;
        }

        return (0, u.default)(e, t), (0, s.default)(e, [{
          key: "addLoader",
          value: function () {
            this.nodes.loader = p.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
          }
        }, {
          key: "removeLoader",
          value: function () {
            this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
          }
        }, {
          key: "prepare",
          value: function () {
            return r.default.async(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return this.checkIsMobile(), t.next = 3, r.default.awrap(this.make());

                case 3:
                  return this.addLoader(), t.next = 6, r.default.awrap(this.appendSVGSprite());

                case 6:
                  return t.next = 8, r.default.awrap(this.Editor.Toolbar.make());

                case 8:
                  return t.next = 10, r.default.awrap(this.Editor.InlineToolbar.make());

                case 10:
                  return t.next = 12, r.default.awrap(this.loadStyles());

                case 12:
                  return t.next = 14, r.default.awrap(this.bindEvents());

                case 14:
                case "end":
                  return t.stop();
              }
            }, null, this);
          }
        }, {
          key: "checkEmptiness",
          value: function () {
            var t = this.Editor.BlockManager;
            this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t.isEditorEmpty);
          }
        }, {
          key: "destroy",
          value: function () {
            this.nodes.holder.innerHTML = "";
          }
        }, {
          key: "closeAllToolbars",
          value: function () {
            var t = this.Editor,
                e = t.Toolbox,
                n = t.BlockSettings,
                o = t.InlineToolbar,
                i = t.ConversionToolbar;
            n.close(), o.close(), i.close(), e.close();
          }
        }, {
          key: "checkIsMobile",
          value: function () {
            this.isMobile = window.innerWidth < 650;
          }
        }, {
          key: "make",
          value: function () {
            return r.default.async(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  this.nodes.holder = p.default.getHolder(this.config.holder), this.nodes.wrapper = p.default.make("div", this.CSS.editorWrapper), this.nodes.redactor = p.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);

                case 7:
                case "end":
                  return t.stop();
              }
            }, null, this);
          }
        }, {
          key: "loadStyles",
          value: function () {
            var t = n(374),
                e = p.default.make("style", null, {
              textContent: t.toString()
            });
            p.default.prepend(document.head, e);
          }
        }, {
          key: "bindEvents",
          value: function () {
            var t = this;
            this.Editor.Listeners.on(this.nodes.redactor, "click", function (e) {
              return t.redactorClicked(e);
            }, !1), this.Editor.Listeners.on(this.nodes.redactor, "mousedown", function (e) {
              return t.documentTouched(e);
            }, !0), this.Editor.Listeners.on(this.nodes.redactor, "touchstart", function (e) {
              return t.documentTouched(e);
            }, !0), this.Editor.Listeners.on(document, "keydown", function (e) {
              return t.documentKeydown(e);
            }, !0), this.Editor.Listeners.on(document, "click", function (e) {
              return t.documentClicked(e);
            }, !0), this.Editor.Listeners.on(document, "selectionchange", function (e) {
              t.selectionChanged(e);
            }, !0), this.Editor.Listeners.on(window, "resize", function () {
              t.resizeDebouncer();
            }, {
              passive: !0
            });
          }
        }, {
          key: "windowResize",
          value: function () {
            this.contentRectCache = null, this.checkIsMobile();
          }
        }, {
          key: "documentKeydown",
          value: function (t) {
            switch (t.keyCode) {
              case h.keyCodes.ENTER:
                this.enterPressed(t);
                break;

              case h.keyCodes.BACKSPACE:
                this.backspacePressed(t);
                break;

              default:
                this.defaultBehaviour(t);
            }
          }
        }, {
          key: "defaultBehaviour",
          value: function (t) {
            var e = t.target.closest(".".concat(this.CSS.editorWrapper)),
                n = this.Editor.BlockManager.currentBlock,
                o = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
            e || n && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
          }
        }, {
          key: "backspacePressed",
          value: function (t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.BlockSelection,
                i = e.Caret;

            if (o.anyBlockSelected) {
              var r = n.removeSelectedBlocks();
              i.setToBlock(n.insertInitialBlockAtIndex(r, !0), i.positions.START), o.clearSelection(t), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
            }
          }
        }, {
          key: "enterPressed",
          value: function (t) {
            var e = this.Editor,
                n = e.BlockManager,
                o = e.BlockSelection,
                i = e.Caret,
                r = n.currentBlockIndex >= 0;

            if (o.anyBlockSelected) {
              var a = n.removeSelectedBlocks();
              return i.setToBlock(n.insertInitialBlockAtIndex(a, !0), i.positions.START), o.clearSelection(t), t.preventDefault(), t.stopImmediatePropagation(), void t.stopPropagation();
            }

            if (!this.someToolbarOpened && r && "BODY" === t.target.tagName) {
              var s = this.Editor.BlockManager.insert();
              this.Editor.Caret.setToBlock(s), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.move(), this.Editor.Toolbar.plusButton.show();
            }

            this.Editor.BlockSelection.clearSelection(t);
          }
        }, {
          key: "documentClicked",
          value: function (t) {
            if (t.isTrusted) {
              var e = t.target;
              this.nodes.holder.contains(e) || v.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.InlineToolbar.close(), this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close()), this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted || this.Editor.BlockSelection.clearSelection(t), this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted || this.Editor.BlockSelection.clearSelection(t);
            }
          }
        }, {
          key: "documentTouched",
          value: function (t) {
            var e = t.target;

            if (e === this.nodes.redactor) {
              var n = t instanceof MouseEvent ? t.clientX : t.touches[0].clientX,
                  o = t instanceof MouseEvent ? t.clientY : t.touches[0].clientY;
              e = document.elementFromPoint(n, o);
            }

            try {
              this.Editor.BlockManager.setCurrentBlockByChildNode(e), this.Editor.BlockManager.highlightCurrentNode();
            } catch (t) {
              this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
            }

            this.Editor.Toolbar.open(), this.Editor.Toolbar.plusButton.hide();
          }
        }, {
          key: "redactorClicked",
          value: function (t) {
            if (v.default.isCollapsed) {
              t.stopImmediatePropagation(), t.stopPropagation();
              var e = t.target,
                  n = t.metaKey || t.ctrlKey;

              if (p.default.isAnchor(e) && n) {
                var o = e.getAttribute("href"),
                    i = h.getValidUrl(o);
                h.openTab(i);
              } else this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.insert(), this.Editor.Tools.isInitial(this.Editor.BlockManager.currentBlock.tool) && this.Editor.BlockManager.currentBlock.isEmpty && this.Editor.Toolbar.plusButton.show();
            }
          }
        }, {
          key: "selectionChanged",
          value: function (t) {
            var e = v.default.anchorElement;
            e && e.closest(".".concat(g.default.CSS.content)) ? this.Editor.InlineToolbar.tryToShow(!0) : this.Editor.InlineToolbar.containsNode(e) || this.Editor.InlineToolbar.close();
          }
        }, {
          key: "appendSVGSprite",
          value: function () {
            var t = p.default.make("div");
            t.hidden = !0, t.style.display = "none", t.innerHTML = f.default, p.default.append(this.nodes.wrapper, t);
          }
        }, {
          key: "CSS",
          get: function () {
            return {
              editorWrapper: "codex-editor",
              editorWrapperNarrow: "codex-editor--narrow",
              editorZone: "codex-editor__redactor",
              editorZoneHidden: "codex-editor__redactor--hidden",
              editorLoader: "codex-editor__loader",
              editorEmpty: "codex-editor--empty"
            };
          }
        }, {
          key: "contentRect",
          get: function () {
            if (this.contentRectCache) return this.contentRectCache;
            var t = this.nodes.wrapper.querySelector(".".concat(g.default.CSS.content));
            return t ? (this.contentRectCache = t.getBoundingClientRect(), this.contentRectCache) : {
              width: 650,
              left: 0,
              right: 0
            };
          }
        }, {
          key: "someToolbarOpened",
          get: function () {
            var t = this.Editor,
                e = t.Toolbox,
                n = t.BlockSettings,
                o = t.InlineToolbar,
                i = t.ConversionToolbar;
            return n.opened || o.opened || i.opened || e.opened;
          }
        }, {
          key: "someFlipperButtonFocused",
          get: function () {
            return Object.entries(this.Editor).filter(function (t) {
              var e = (0, i.default)(t, 2);
              return e[0], e[1].flipper instanceof y.default;
            }).some(function (t) {
              var e = (0, i.default)(t, 2);
              return e[0], e[1].flipper.currentItem;
            });
          }
        }]), e;
      }(d.default);

      o.default = k, k.displayName = "UI", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    n(172), t.exports = n(344);
  }, function (t, e, n) {
    n(173);
  }, function (t, e, n) {
    "use strict";

    n(174), n(317), n(319), n(322), n(324), n(326), n(328), n(330), n(332), n(334), n(336), n(338), n(340), n(135);
  }, function (t, e, n) {
    n(175), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(256), n(257), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(98), n(280), n(124), n(281), n(125), n(282), n(283), n(284), n(285), n(126), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), t.exports = n(17);
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(23),
        r = n(18),
        a = n(0),
        s = n(21),
        l = n(39).KEY,
        c = n(9),
        u = n(64),
        f = n(52),
        d = n(41),
        p = n(12),
        h = n(79),
        v = n(105),
        g = n(177),
        y = n(67),
        b = n(10),
        m = n(11),
        k = n(20),
        x = n(25),
        w = n(38),
        S = n(40),
        E = n(45),
        T = n(108),
        C = n(32),
        B = n(66),
        _ = n(19),
        I = n(43),
        O = C.f,
        N = _.f,
        L = T.f,
        M = o.Symbol,
        A = o.JSON,
        P = A && A.stringify,
        R = p("_hidden"),
        j = p("toPrimitive"),
        F = {}.propertyIsEnumerable,
        D = u("symbol-registry"),
        U = u("symbols"),
        H = u("op-symbols"),
        z = Object.prototype,
        G = "function" == typeof M && !!B.f,
        W = o.QObject,
        V = !W || !W.prototype || !W.prototype.findChild,
        X = r && c(function () {
      return 7 != E(N({}, "a", {
        get: function () {
          return N(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, n) {
      var o = O(z, e);
      o && delete z[e], N(t, e, n), o && t !== z && N(z, e, o);
    } : N,
        Y = function (t) {
      var e = U[t] = E(M.prototype);
      return e._k = t, e;
    },
        K = G && "symbol" == typeof M.iterator ? function (t) {
      return "symbol" == typeof t;
    } : function (t) {
      return t instanceof M;
    },
        Z = function (t, e, n) {
      return t === z && Z(H, e, n), b(t), e = w(e, !0), b(n), i(U, e) ? (n.enumerable ? (i(t, R) && t[R][e] && (t[R][e] = !1), n = E(n, {
        enumerable: S(0, !1)
      })) : (i(t, R) || N(t, R, S(1, {})), t[R][e] = !0), X(t, e, n)) : N(t, e, n);
    },
        q = function (t, e) {
      b(t);

      for (var n, o = g(e = x(e)), i = 0, r = o.length; r > i;) Z(t, n = o[i++], e[n]);

      return t;
    },
        J = function (t) {
      var e = F.call(this, t = w(t, !0));
      return !(this === z && i(U, t) && !i(H, t)) && (!(e || !i(this, t) || !i(U, t) || i(this, R) && this[R][t]) || e);
    },
        $ = function (t, e) {
      if (t = x(t), e = w(e, !0), t !== z || !i(U, e) || i(H, e)) {
        var n = O(t, e);
        return !n || !i(U, e) || i(t, R) && t[R][e] || (n.enumerable = !0), n;
      }
    },
        Q = function (t) {
      for (var e, n = L(x(t)), o = [], r = 0; n.length > r;) i(U, e = n[r++]) || e == R || e == l || o.push(e);

      return o;
    },
        tt = function (t) {
      for (var e, n = t === z, o = L(n ? H : x(t)), r = [], a = 0; o.length > a;) !i(U, e = o[a++]) || n && !i(z, e) || r.push(U[e]);

      return r;
    };

    G || (s((M = function () {
      if (this instanceof M) throw TypeError("Symbol is not a constructor!");

      var t = d(arguments.length > 0 ? arguments[0] : void 0),
          e = function (n) {
        this === z && e.call(H, n), i(this, R) && i(this[R], t) && (this[R][t] = !1), X(this, t, S(1, n));
      };

      return r && V && X(z, t, {
        configurable: !0,
        set: e
      }), Y(t);
    }).prototype, "toString", function () {
      return this._k;
    }), C.f = $, _.f = Z, n(46).f = T.f = Q, n(61).f = J, B.f = tt, r && !n(42) && s(z, "propertyIsEnumerable", J, !0), h.f = function (t) {
      return Y(p(t));
    }), a(a.G + a.W + a.F * !G, {
      Symbol: M
    });

    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);

    for (var ot = I(p.store), it = 0; ot.length > it;) v(ot[it++]);

    a(a.S + a.F * !G, "Symbol", {
      for: function (t) {
        return i(D, t += "") ? D[t] : D[t] = M(t);
      },
      keyFor: function (t) {
        if (!K(t)) throw TypeError(t + " is not a symbol!");

        for (var e in D) if (D[e] === t) return e;
      },
      useSetter: function () {
        V = !0;
      },
      useSimple: function () {
        V = !1;
      }
    }), a(a.S + a.F * !G, "Object", {
      create: function (t, e) {
        return void 0 === e ? E(t) : q(E(t), e);
      },
      defineProperty: Z,
      defineProperties: q,
      getOwnPropertyDescriptor: $,
      getOwnPropertyNames: Q,
      getOwnPropertySymbols: tt
    });
    var rt = c(function () {
      B.f(1);
    });
    a(a.S + a.F * rt, "Object", {
      getOwnPropertySymbols: function (t) {
        return B.f(k(t));
      }
    }), A && a(a.S + a.F * (!G || c(function () {
      var t = M();
      return "[null]" != P([t]) || "{}" != P({
        a: t
      }) || "{}" != P(Object(t));
    })), "JSON", {
      stringify: function (t) {
        for (var e, n, o = [t], i = 1; arguments.length > i;) o.push(arguments[i++]);

        if (n = e = o[1], (m(e) || void 0 !== t) && !K(t)) return y(e) || (e = function (t, e) {
          if ("function" == typeof n && (e = n.call(this, t, e)), !K(e)) return e;
        }), o[1] = e, P.apply(A, o);
      }
    }), M.prototype[j] || n(24)(M.prototype, j, M.prototype.valueOf), f(M, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0);
  }, function (t, e, n) {
    t.exports = n(64)("native-function-to-string", Function.toString);
  }, function (t, e, n) {
    var o = n(43),
        i = n(66),
        r = n(61);

    t.exports = function (t) {
      var e = o(t),
          n = i.f;
      if (n) for (var a, s = n(t), l = r.f, c = 0; s.length > c;) l.call(t, a = s[c++]) && e.push(a);
      return e;
    };
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Object", {
      create: n(45)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S + o.F * !n(18), "Object", {
      defineProperty: n(19).f
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S + o.F * !n(18), "Object", {
      defineProperties: n(107)
    });
  }, function (t, e, n) {
    var o = n(25),
        i = n(32).f;
    n(33)("getOwnPropertyDescriptor", function () {
      return function (t, e) {
        return i(o(t), e);
      };
    });
  }, function (t, e, n) {
    var o = n(20),
        i = n(47);
    n(33)("getPrototypeOf", function () {
      return function (t) {
        return i(o(t));
      };
    });
  }, function (t, e, n) {
    var o = n(20),
        i = n(43);
    n(33)("keys", function () {
      return function (t) {
        return i(o(t));
      };
    });
  }, function (t, e, n) {
    n(33)("getOwnPropertyNames", function () {
      return n(108).f;
    });
  }, function (t, e, n) {
    var o = n(11),
        i = n(39).onFreeze;
    n(33)("freeze", function (t) {
      return function (e) {
        return t && o(e) ? t(i(e)) : e;
      };
    });
  }, function (t, e, n) {
    var o = n(11),
        i = n(39).onFreeze;
    n(33)("seal", function (t) {
      return function (e) {
        return t && o(e) ? t(i(e)) : e;
      };
    });
  }, function (t, e, n) {
    var o = n(11),
        i = n(39).onFreeze;
    n(33)("preventExtensions", function (t) {
      return function (e) {
        return t && o(e) ? t(i(e)) : e;
      };
    });
  }, function (t, e, n) {
    var o = n(11);
    n(33)("isFrozen", function (t) {
      return function (e) {
        return !o(e) || !!t && t(e);
      };
    });
  }, function (t, e, n) {
    var o = n(11);
    n(33)("isSealed", function (t) {
      return function (e) {
        return !o(e) || !!t && t(e);
      };
    });
  }, function (t, e, n) {
    var o = n(11);
    n(33)("isExtensible", function (t) {
      return function (e) {
        return !!o(e) && (!t || t(e));
      };
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S + o.F, "Object", {
      assign: n(109)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Object", {
      is: n(110)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Object", {
      setPrototypeOf: n(83).set
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(62),
        i = {};
    i[n(12)("toStringTag")] = "z", i + "" != "[object z]" && n(21)(Object.prototype, "toString", function () {
      return "[object " + o(this) + "]";
    }, !0);
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "Function", {
      bind: n(111)
    });
  }, function (t, e, n) {
    var o = n(19).f,
        i = Function.prototype,
        r = /^\s*function ([^ (]*)/;
    "name" in i || n(18) && o(i, "name", {
      configurable: !0,
      get: function () {
        try {
          return ("" + this).match(r)[1];
        } catch (t) {
          return "";
        }
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(11),
        i = n(47),
        r = n(12)("hasInstance"),
        a = Function.prototype;
    r in a || n(19).f(a, r, {
      value: function (t) {
        if ("function" != typeof this || !o(t)) return !1;
        if (!o(this.prototype)) return t instanceof this;

        for (; t = i(t);) if (this.prototype === t) return !0;

        return !1;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(113);
    o(o.G + o.F * (parseInt != i), {
      parseInt: i
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(114);
    o(o.G + o.F * (parseFloat != i), {
      parseFloat: i
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(8),
        i = n(23),
        r = n(35),
        a = n(85),
        s = n(38),
        l = n(9),
        c = n(46).f,
        u = n(32).f,
        f = n(19).f,
        d = n(53).trim,
        p = o.Number,
        h = p,
        v = p.prototype,
        g = "Number" == r(n(45)(v)),
        y = "trim" in String.prototype,
        b = function (t) {
      var e = s(t, !1);

      if ("string" == typeof e && e.length > 2) {
        var n,
            o,
            i,
            r = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);

        if (43 === r || 45 === r) {
          if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === r) {
          switch (e.charCodeAt(1)) {
            case 66:
            case 98:
              o = 2, i = 49;
              break;

            case 79:
            case 111:
              o = 8, i = 55;
              break;

            default:
              return +e;
          }

          for (var a, l = e.slice(2), c = 0, u = l.length; c < u; c++) if ((a = l.charCodeAt(c)) < 48 || a > i) return NaN;

          return parseInt(l, o);
        }
      }

      return +e;
    };

    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
      p = function (t) {
        var e = arguments.length < 1 ? 0 : t,
            n = this;
        return n instanceof p && (g ? l(function () {
          v.valueOf.call(n);
        }) : "Number" != r(n)) ? a(new h(b(e)), n, p) : b(e);
      };

      for (var m, k = n(18) ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++) i(h, m = k[x]) && !i(p, m) && f(p, m, u(h, m));

      p.prototype = v, v.constructor = p, n(21)(o, "Number", p);
    }
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(31),
        r = n(115),
        a = n(86),
        s = 1..toFixed,
        l = Math.floor,
        c = [0, 0, 0, 0, 0, 0],
        u = "Number.toFixed: incorrect invocation!",
        f = function (t, e) {
      for (var n = -1, o = e; ++n < 6;) o += t * c[n], c[n] = o % 1e7, o = l(o / 1e7);
    },
        d = function (t) {
      for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = l(n / t), n = n % t * 1e7;
    },
        p = function () {
      for (var t = 6, e = ""; --t >= 0;) if ("" !== e || 0 === t || 0 !== c[t]) {
        var n = String(c[t]);
        e = "" === e ? n : e + a.call("0", 7 - n.length) + n;
      }

      return e;
    },
        h = function (t, e, n) {
      return 0 === e ? n : e % 2 == 1 ? h(t, e - 1, n * t) : h(t * t, e / 2, n);
    };

    o(o.P + o.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !n(9)(function () {
      s.call({});
    })), "Number", {
      toFixed: function (t) {
        var e,
            n,
            o,
            s,
            l = r(this, u),
            c = i(t),
            v = "",
            g = "0";
        if (c < 0 || c > 20) throw RangeError(u);
        if (l != l) return "NaN";
        if (l <= -1e21 || l >= 1e21) return String(l);
        if (l < 0 && (v = "-", l = -l), l > 1e-21) if (n = (e = function (t) {
          for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;

          for (; n >= 2;) e += 1, n /= 2;

          return e;
        }(l * h(2, 69, 1)) - 69) < 0 ? l * h(2, -e, 1) : l / h(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
          for (f(0, n), o = c; o >= 7;) f(1e7, 0), o -= 7;

          for (f(h(10, o, 1), 0), o = e - 1; o >= 23;) d(1 << 23), o -= 23;

          d(1 << o), f(1, 1), d(2), g = p();
        } else f(0, n), f(1 << -e, 0), g = p() + a.call("0", c);
        return g = c > 0 ? v + ((s = g.length) <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : v + g;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(9),
        r = n(115),
        a = 1..toPrecision;
    o(o.P + o.F * (i(function () {
      return "1" !== a.call(1, void 0);
    }) || !i(function () {
      a.call({});
    })), "Number", {
      toPrecision: function (t) {
        var e = r(this, "Number#toPrecision: incorrect invocation!");
        return void 0 === t ? a.call(e) : a.call(e, t);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      EPSILON: Math.pow(2, -52)
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(8).isFinite;
    o(o.S, "Number", {
      isFinite: function (t) {
        return "number" == typeof t && i(t);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      isInteger: n(116)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      isNaN: function (t) {
        return t != t;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(116),
        r = Math.abs;
    o(o.S, "Number", {
      isSafeInteger: function (t) {
        return i(t) && r(t) <= 9007199254740991;
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Number", {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(114);
    o(o.S + o.F * (Number.parseFloat != i), "Number", {
      parseFloat: i
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(113);
    o(o.S + o.F * (Number.parseInt != i), "Number", {
      parseInt: i
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(117),
        r = Math.sqrt,
        a = Math.acosh;
    o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
      acosh: function (t) {
        return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + r(t - 1) * r(t + 1));
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = Math.asinh;
    o(o.S + o.F * !(i && 1 / i(0) > 0), "Math", {
      asinh: function t(e) {
        return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = Math.atanh;
    o(o.S + o.F * !(i && 1 / i(-0) < 0), "Math", {
      atanh: function (t) {
        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(87);
    o(o.S, "Math", {
      cbrt: function (t) {
        return i(t = +t) * Math.pow(Math.abs(t), 1 / 3);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      clz32: function (t) {
        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = Math.exp;
    o(o.S, "Math", {
      cosh: function (t) {
        return (i(t = +t) + i(-t)) / 2;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(88);
    o(o.S + o.F * (i != Math.expm1), "Math", {
      expm1: i
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      fround: n(220)
    });
  }, function (t, e, n) {
    var o = n(87),
        i = Math.pow,
        r = i(2, -52),
        a = i(2, -23),
        s = i(2, 127) * (2 - a),
        l = i(2, -126);

    t.exports = Math.fround || function (t) {
      var e,
          n,
          i = Math.abs(t),
          c = o(t);
      return i < l ? c * (i / l / a + 1 / r - 1 / r) * l * a : (n = (e = (1 + a / r) * i) - (e - i)) > s || n != n ? c * (1 / 0) : c * n;
    };
  }, function (t, e, n) {
    var o = n(0),
        i = Math.abs;
    o(o.S, "Math", {
      hypot: function (t, e) {
        for (var n, o, r = 0, a = 0, s = arguments.length, l = 0; a < s;) l < (n = i(arguments[a++])) ? (r = r * (o = l / n) * o + 1, l = n) : r += n > 0 ? (o = n / l) * o : n;

        return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(r);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = Math.imul;
    o(o.S + o.F * n(9)(function () {
      return -5 != i(4294967295, 5) || 2 != i.length;
    }), "Math", {
      imul: function (t, e) {
        var n = +t,
            o = +e,
            i = 65535 & n,
            r = 65535 & o;
        return 0 | i * r + ((65535 & n >>> 16) * r + i * (65535 & o >>> 16) << 16 >>> 0);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      log10: function (t) {
        return Math.log(t) * Math.LOG10E;
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      log1p: n(117)
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      log2: function (t) {
        return Math.log(t) / Math.LN2;
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      sign: n(87)
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(88),
        r = Math.exp;
    o(o.S + o.F * n(9)(function () {
      return -2e-17 != !Math.sinh(-2e-17);
    }), "Math", {
      sinh: function (t) {
        return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (r(t - 1) - r(-t - 1)) * (Math.E / 2);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(88),
        r = Math.exp;
    o(o.S, "Math", {
      tanh: function (t) {
        var e = i(t = +t),
            n = i(-t);
        return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (r(t) + r(-t));
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Math", {
      trunc: function (t) {
        return (t > 0 ? Math.floor : Math.ceil)(t);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(44),
        r = String.fromCharCode,
        a = String.fromCodePoint;
    o(o.S + o.F * (!!a && 1 != a.length), "String", {
      fromCodePoint: function (t) {
        for (var e, n = [], o = arguments.length, a = 0; o > a;) {
          if (e = +arguments[a++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
          n.push(e < 65536 ? r(e) : r(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
        }

        return n.join("");
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(25),
        r = n(16);
    o(o.S, "String", {
      raw: function (t) {
        for (var e = i(t.raw), n = r(e.length), o = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < o && a.push(String(arguments[s]));

        return a.join("");
      }
    });
  }, function (t, e, n) {
    "use strict";

    n(53)("trim", function (t) {
      return function () {
        return t(this, 3);
      };
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(89)(!0);
    n(90)(String, "String", function (t) {
      this._t = String(t), this._i = 0;
    }, function () {
      var t,
          e = this._t,
          n = this._i;
      return n >= e.length ? {
        value: void 0,
        done: !0
      } : (t = o(e, n), this._i += t.length, {
        value: t,
        done: !1
      });
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(89)(!1);
    o(o.P, "String", {
      codePointAt: function (t) {
        return i(this, t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(16),
        r = n(91),
        a = "".endsWith;
    o(o.P + o.F * n(93)("endsWith"), "String", {
      endsWith: function (t) {
        var e = r(this, t, "endsWith"),
            n = arguments.length > 1 ? arguments[1] : void 0,
            o = i(e.length),
            s = void 0 === n ? o : Math.min(i(n), o),
            l = String(t);
        return a ? a.call(e, l, s) : e.slice(s - l.length, s) === l;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(91);
    o(o.P + o.F * n(93)("includes"), "String", {
      includes: function (t) {
        return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "String", {
      repeat: n(86)
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(16),
        r = n(91),
        a = "".startsWith;
    o(o.P + o.F * n(93)("startsWith"), "String", {
      startsWith: function (t) {
        var e = r(this, t, "startsWith"),
            n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
            o = String(t);
        return a ? a.call(e, o, n) : e.slice(n, n + o.length) === o;
      }
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("anchor", function (t) {
      return function (e) {
        return t(this, "a", "name", e);
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("big", function (t) {
      return function () {
        return t(this, "big", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("blink", function (t) {
      return function () {
        return t(this, "blink", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("bold", function (t) {
      return function () {
        return t(this, "b", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("fixed", function (t) {
      return function () {
        return t(this, "tt", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("fontcolor", function (t) {
      return function (e) {
        return t(this, "font", "color", e);
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("fontsize", function (t) {
      return function (e) {
        return t(this, "font", "size", e);
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("italics", function (t) {
      return function () {
        return t(this, "i", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("link", function (t) {
      return function (e) {
        return t(this, "a", "href", e);
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("small", function (t) {
      return function () {
        return t(this, "small", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("strike", function (t) {
      return function () {
        return t(this, "strike", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("sub", function (t) {
      return function () {
        return t(this, "sub", "", "");
      };
    });
  }, function (t, e, n) {
    "use strict";

    n(22)("sup", function (t) {
      return function () {
        return t(this, "sup", "", "");
      };
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Date", {
      now: function () {
        return new Date().getTime();
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(20),
        r = n(38);
    o(o.P + o.F * n(9)(function () {
      return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
        toISOString: function () {
          return 1;
        }
      });
    }), "Date", {
      toJSON: function (t) {
        var e = i(this),
            n = r(e);
        return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(255);
    o(o.P + o.F * (Date.prototype.toISOString !== i), "Date", {
      toISOString: i
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(9),
        i = Date.prototype.getTime,
        r = Date.prototype.toISOString,
        a = function (t) {
      return t > 9 ? t : "0" + t;
    };

    t.exports = o(function () {
      return "0385-07-25T07:06:39.999Z" != r.call(new Date(-5e13 - 1));
    }) || !o(function () {
      r.call(new Date(NaN));
    }) ? function () {
      if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
      var t = this,
          e = t.getUTCFullYear(),
          n = t.getUTCMilliseconds(),
          o = e < 0 ? "-" : e > 9999 ? "+" : "";
      return o + ("00000" + Math.abs(e)).slice(o ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
    } : r;
  }, function (t, e, n) {
    var o = Date.prototype,
        i = o.toString,
        r = o.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(21)(o, "toString", function () {
      var t = r.call(this);
      return t == t ? i.call(this) : "Invalid Date";
    });
  }, function (t, e, n) {
    var o = n(12)("toPrimitive"),
        i = Date.prototype;
    o in i || n(24)(i, o, n(258));
  }, function (t, e, n) {
    "use strict";

    var o = n(10),
        i = n(38);

    t.exports = function (t) {
      if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
      return i(o(this), "number" != t);
    };
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Array", {
      isArray: n(67)
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(29),
        i = n(0),
        r = n(20),
        a = n(119),
        s = n(94),
        l = n(16),
        c = n(95),
        u = n(96);
    i(i.S + i.F * !n(68)(function (t) {
      Array.from(t);
    }), "Array", {
      from: function (t) {
        var e,
            n,
            i,
            f,
            d = r(t),
            p = "function" == typeof this ? this : Array,
            h = arguments.length,
            v = h > 1 ? arguments[1] : void 0,
            g = void 0 !== v,
            y = 0,
            b = u(d);
        if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b)) for (n = new p(e = l(d.length)); e > y; y++) c(n, y, g ? v(d[y], y) : d[y]);else for (f = b.call(d), n = new p(); !(i = f.next()).done; y++) c(n, y, g ? a(f, v, [i.value, y], !0) : i.value);
        return n.length = y, n;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(95);
    o(o.S + o.F * n(9)(function () {
      function t() {}

      return !(Array.of.call(t) instanceof t);
    }), "Array", {
      of: function () {
        for (var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;) i(n, t, arguments[t++]);

        return n.length = e, n;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(25),
        r = [].join;
    o(o.P + o.F * (n(60) != Object || !n(27)(r)), "Array", {
      join: function (t) {
        return r.call(i(this), void 0 === t ? "," : t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(82),
        r = n(35),
        a = n(44),
        s = n(16),
        l = [].slice;
    o(o.P + o.F * n(9)(function () {
      i && l.call(i);
    }), "Array", {
      slice: function (t, e) {
        var n = s(this.length),
            o = r(this);
        if (e = void 0 === e ? n : e, "Array" == o) return l.call(this, t, e);

        for (var i = a(t, n), c = a(e, n), u = s(c - i), f = new Array(u), d = 0; d < u; d++) f[d] = "String" == o ? this.charAt(i + d) : this[i + d];

        return f;
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(30),
        r = n(20),
        a = n(9),
        s = [].sort,
        l = [1, 2, 3];
    o(o.P + o.F * (a(function () {
      l.sort(void 0);
    }) || !a(function () {
      l.sort(null);
    }) || !n(27)(s)), "Array", {
      sort: function (t) {
        return void 0 === t ? s.call(r(this)) : s.call(r(this), i(t));
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(0),
        r = n(27)([].forEach, !0);
    o(o.P + o.F * !r, "Array", {
      forEach: function (t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    var o = n(11),
        i = n(67),
        r = n(12)("species");

    t.exports = function (t) {
      var e;
      return i(t) && ("function" != typeof (e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), o(e) && null === (e = e[r]) && (e = void 0)), void 0 === e ? Array : e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(1);
    o(o.P + o.F * !n(27)([].map, !0), "Array", {
      map: function (t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(2);
    o(o.P + o.F * !n(27)([].filter, !0), "Array", {
      filter: function (t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(3);
    o(o.P + o.F * !n(27)([].some, !0), "Array", {
      some: function (t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(4);
    o(o.P + o.F * !n(27)([].every, !0), "Array", {
      every: function (t) {
        return i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(121);
    o(o.P + o.F * !n(27)([].reduce, !0), "Array", {
      reduce: function (t) {
        return i(this, t, arguments.length, arguments[1], !1);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(121);
    o(o.P + o.F * !n(27)([].reduceRight, !0), "Array", {
      reduceRight: function (t) {
        return i(this, t, arguments.length, arguments[1], !0);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(65)(!1),
        r = [].indexOf,
        a = !!r && 1 / [1].indexOf(1, -0) < 0;
    o(o.P + o.F * (a || !n(27)(r)), "Array", {
      indexOf: function (t) {
        return a ? r.apply(this, arguments) || 0 : i(this, t, arguments[1]);
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(25),
        r = n(31),
        a = n(16),
        s = [].lastIndexOf,
        l = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    o(o.P + o.F * (l || !n(27)(s)), "Array", {
      lastIndexOf: function (t) {
        if (l) return s.apply(this, arguments) || 0;
        var e = i(this),
            n = a(e.length),
            o = n - 1;

        for (arguments.length > 1 && (o = Math.min(o, r(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--) if (o in e && e[o] === t) return o || 0;

        return -1;
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "Array", {
      copyWithin: n(122)
    }), n(48)("copyWithin");
  }, function (t, e, n) {
    var o = n(0);
    o(o.P, "Array", {
      fill: n(97)
    }), n(48)("fill");
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(5),
        r = !0;
    "find" in [] && Array(1).find(function () {
      r = !1;
    }), o(o.P + o.F * r, "Array", {
      find: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), n(48)("find");
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(34)(6),
        r = "findIndex",
        a = !0;
    r in [] && Array(1)[r](function () {
      a = !1;
    }), o(o.P + o.F * a, "Array", {
      findIndex: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), n(48)(r);
  }, function (t, e, n) {
    n(55)("Array");
  }, function (t, e, n) {
    var o = n(8),
        i = n(85),
        r = n(19).f,
        a = n(46).f,
        s = n(92),
        l = n(69),
        c = o.RegExp,
        u = c,
        f = c.prototype,
        d = /a/g,
        p = /a/g,
        h = new c(d) !== d;

    if (n(18) && (!h || n(9)(function () {
      return p[n(12)("match")] = !1, c(d) != d || c(p) == p || "/a/i" != c(d, "i");
    }))) {
      c = function (t, e) {
        var n = this instanceof c,
            o = s(t),
            r = void 0 === e;
        return !n && o && t.constructor === c && r ? t : i(h ? new u(o && !r ? t.source : t, e) : u((o = t instanceof c) ? t.source : t, o && r ? l.call(t) : e), n ? this : f, c);
      };

      for (var v = function (t) {
        (t in c) || r(c, t, {
          configurable: !0,
          get: function () {
            return u[t];
          },
          set: function (e) {
            u[t] = e;
          }
        });
      }, g = a(u), y = 0; g.length > y;) v(g[y++]);

      f.constructor = c, c.prototype = f, n(21)(o, "RegExp", c);
    }

    n(55)("RegExp");
  }, function (t, e, n) {
    "use strict";

    n(125);

    var o = n(10),
        i = n(69),
        r = n(18),
        a = /./.toString,
        s = function (t) {
      n(21)(RegExp.prototype, "toString", t, !0);
    };

    n(9)(function () {
      return "/a/b" != a.call({
        source: "a",
        flags: "b"
      });
    }) ? s(function () {
      var t = o(this);
      return "/".concat(t.source, "/", "flags" in t ? t.flags : !r && t instanceof RegExp ? i.call(t) : void 0);
    }) : "toString" != a.name && s(function () {
      return a.call(this);
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(10),
        i = n(16),
        r = n(100),
        a = n(70);
    n(71)("match", 1, function (t, e, n, s) {
      return [function (n) {
        var o = t(this),
            i = null == n ? void 0 : n[e];
        return void 0 !== i ? i.call(n, o) : new RegExp(n)[e](String(o));
      }, function (t) {
        var e = s(n, t, this);
        if (e.done) return e.value;
        var l = o(t),
            c = String(this);
        if (!l.global) return a(l, c);
        var u = l.unicode;
        l.lastIndex = 0;

        for (var f, d = [], p = 0; null !== (f = a(l, c));) {
          var h = String(f[0]);
          d[p] = h, "" === h && (l.lastIndex = r(c, i(l.lastIndex), u)), p++;
        }

        return 0 === p ? null : d;
      }];
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(10),
        i = n(20),
        r = n(16),
        a = n(31),
        s = n(100),
        l = n(70),
        c = Math.max,
        u = Math.min,
        f = Math.floor,
        d = /\$([$&`']|\d\d?|<[^>]*>)/g,
        p = /\$([$&`']|\d\d?)/g;
    n(71)("replace", 2, function (t, e, n, h) {
      return [function (o, i) {
        var r = t(this),
            a = null == o ? void 0 : o[e];
        return void 0 !== a ? a.call(o, r, i) : n.call(String(r), o, i);
      }, function (t, e) {
        var i = h(n, t, this, e);
        if (i.done) return i.value;
        var f = o(t),
            d = String(this),
            p = "function" == typeof e;
        p || (e = String(e));
        var g = f.global;

        if (g) {
          var y = f.unicode;
          f.lastIndex = 0;
        }

        for (var b = [];;) {
          var m = l(f, d);
          if (null === m) break;
          if (b.push(m), !g) break;
          "" === String(m[0]) && (f.lastIndex = s(d, r(f.lastIndex), y));
        }

        for (var k, x = "", w = 0, S = 0; S < b.length; S++) {
          m = b[S];

          for (var E = String(m[0]), T = c(u(a(m.index), d.length), 0), C = [], B = 1; B < m.length; B++) C.push(void 0 === (k = m[B]) ? k : String(k));

          var _ = m.groups;

          if (p) {
            var I = [E].concat(C, T, d);
            void 0 !== _ && I.push(_);
            var O = String(e.apply(void 0, I));
          } else O = v(E, d, T, C, _, e);

          T >= w && (x += d.slice(w, T) + O, w = T + E.length);
        }

        return x + d.slice(w);
      }];

      function v(t, e, o, r, a, s) {
        var l = o + t.length,
            c = r.length,
            u = p;
        return void 0 !== a && (a = i(a), u = d), n.call(s, u, function (n, i) {
          var s;

          switch (i.charAt(0)) {
            case "$":
              return "$";

            case "&":
              return t;

            case "`":
              return e.slice(0, o);

            case "'":
              return e.slice(l);

            case "<":
              s = a[i.slice(1, -1)];
              break;

            default:
              var u = +i;
              if (0 === u) return n;

              if (u > c) {
                var d = f(u / 10);
                return 0 === d ? n : d <= c ? void 0 === r[d - 1] ? i.charAt(1) : r[d - 1] + i.charAt(1) : n;
              }

              s = r[u - 1];
          }

          return void 0 === s ? "" : s;
        });
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(10),
        i = n(110),
        r = n(70);
    n(71)("search", 1, function (t, e, n, a) {
      return [function (n) {
        var o = t(this),
            i = null == n ? void 0 : n[e];
        return void 0 !== i ? i.call(n, o) : new RegExp(n)[e](String(o));
      }, function (t) {
        var e = a(n, t, this);
        if (e.done) return e.value;
        var s = o(t),
            l = String(this),
            c = s.lastIndex;
        i(c, 0) || (s.lastIndex = 0);
        var u = r(s, l);
        return i(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index;
      }];
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(92),
        i = n(10),
        r = n(63),
        a = n(100),
        s = n(16),
        l = n(70),
        c = n(99),
        u = n(9),
        f = Math.min,
        d = [].push,
        p = !u(function () {
      RegExp(4294967295, "y");
    });
    n(71)("split", 2, function (t, e, n, u) {
      var h;
      return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
        var i = String(this);
        if (void 0 === t && 0 === e) return [];
        if (!o(t)) return n.call(i, t, e);

        for (var r, a, s, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, h = new RegExp(t.source, u + "g"); (r = c.call(h, i)) && !((a = h.lastIndex) > f && (l.push(i.slice(f, r.index)), r.length > 1 && r.index < i.length && d.apply(l, r.slice(1)), s = r[0].length, f = a, l.length >= p));) h.lastIndex === r.index && h.lastIndex++;

        return f === i.length ? !s && h.test("") || l.push("") : l.push(i.slice(f)), l.length > p ? l.slice(0, p) : l;
      } : "0".split(void 0, 0).length ? function (t, e) {
        return void 0 === t && 0 === e ? [] : n.call(this, t, e);
      } : n, [function (n, o) {
        var i = t(this),
            r = null == n ? void 0 : n[e];
        return void 0 !== r ? r.call(n, i, o) : h.call(String(i), n, o);
      }, function (t, e) {
        var o = u(h, t, this, e, h !== n);
        if (o.done) return o.value;
        var c = i(t),
            d = String(this),
            v = r(c, RegExp),
            g = c.unicode,
            y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
            b = new v(p ? c : "^(?:" + c.source + ")", y),
            m = void 0 === e ? 4294967295 : e >>> 0;
        if (0 === m) return [];
        if (0 === d.length) return null === l(b, d) ? [d] : [];

        for (var k = 0, x = 0, w = []; x < d.length;) {
          b.lastIndex = p ? x : 0;
          var S,
              E = l(b, p ? d : d.slice(x));
          if (null === E || (S = f(s(b.lastIndex + (p ? 0 : x)), d.length)) === k) x = a(d, x, g);else {
            if (w.push(d.slice(k, x)), w.length === m) return w;

            for (var T = 1; T <= E.length - 1; T++) if (w.push(E[T]), w.length === m) return w;

            x = k = S;
          }
        }

        return w.push(d.slice(k)), w;
      }];
    });
  }, function (t, e, n) {
    var o = n(8),
        i = n(101).set,
        r = o.MutationObserver || o.WebKitMutationObserver,
        a = o.process,
        s = o.Promise,
        l = "process" == n(35)(a);

    t.exports = function () {
      var t,
          e,
          n,
          c = function () {
        var o, i;

        for (l && (o = a.domain) && o.exit(); t;) {
          i = t.fn, t = t.next;

          try {
            i();
          } catch (o) {
            throw t ? n() : e = void 0, o;
          }
        }

        e = void 0, o && o.enter();
      };

      if (l) n = function () {
        a.nextTick(c);
      };else if (!r || o.navigator && o.navigator.standalone) {
        if (s && s.resolve) {
          var u = s.resolve(void 0);

          n = function () {
            u.then(c);
          };
        } else n = function () {
          i.call(o, c);
        };
      } else {
        var f = !0,
            d = document.createTextNode("");
        new r(c).observe(d, {
          characterData: !0
        }), n = function () {
          d.data = f = !f;
        };
      }
      return function (o) {
        var i = {
          fn: o,
          next: void 0
        };
        e && (e.next = i), t || (t = i, n()), e = i;
      };
    };
  }, function (t, e) {
    t.exports = function (t) {
      try {
        return {
          e: !1,
          v: t()
        };
      } catch (t) {
        return {
          e: !0,
          v: t
        };
      }
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(129),
        i = n(49);
    t.exports = n(74)("Map", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      get: function (t) {
        var e = o.getEntry(i(this, "Map"), t);
        return e && e.v;
      },
      set: function (t, e) {
        return o.def(i(this, "Map"), 0 === t ? 0 : t, e);
      }
    }, o, !0);
  }, function (t, e, n) {
    "use strict";

    var o = n(129),
        i = n(49);
    t.exports = n(74)("Set", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      add: function (t) {
        return o.def(i(this, "Set"), t = 0 === t ? 0 : t, t);
      }
    }, o);
  }, function (t, e, n) {
    "use strict";

    var o,
        i = n(8),
        r = n(34)(0),
        a = n(21),
        s = n(39),
        l = n(109),
        c = n(130),
        u = n(11),
        f = n(49),
        d = n(49),
        p = !i.ActiveXObject && "ActiveXObject" in i,
        h = s.getWeak,
        v = Object.isExtensible,
        g = c.ufstore,
        y = function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    },
        b = {
      get: function (t) {
        if (u(t)) {
          var e = h(t);
          return !0 === e ? g(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0;
        }
      },
      set: function (t, e) {
        return c.def(f(this, "WeakMap"), t, e);
      }
    },
        m = t.exports = n(74)("WeakMap", y, b, c, !0, !0);

    d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, b), s.NEED = !0, r(["delete", "has", "get", "set"], function (t) {
      var e = m.prototype,
          n = e[t];
      a(e, t, function (e, i) {
        if (u(e) && !v(e)) {
          this._f || (this._f = new o());

          var r = this._f[t](e, i);

          return "set" == t ? this : r;
        }

        return n.call(this, e, i);
      });
    }));
  }, function (t, e, n) {
    "use strict";

    var o = n(130),
        i = n(49);
    n(74)("WeakSet", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    }, {
      add: function (t) {
        return o.def(i(this, "WeakSet"), t, !0);
      }
    }, o, !1, !0);
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(75),
        r = n(102),
        a = n(10),
        s = n(44),
        l = n(16),
        c = n(11),
        u = n(8).ArrayBuffer,
        f = n(63),
        d = r.ArrayBuffer,
        p = r.DataView,
        h = i.ABV && u.isView,
        v = d.prototype.slice,
        g = i.VIEW;
    o(o.G + o.W + o.F * (u !== d), {
      ArrayBuffer: d
    }), o(o.S + o.F * !i.CONSTR, "ArrayBuffer", {
      isView: function (t) {
        return h && h(t) || c(t) && g in t;
      }
    }), o(o.P + o.U + o.F * n(9)(function () {
      return !new d(2).slice(1, void 0).byteLength;
    }), "ArrayBuffer", {
      slice: function (t, e) {
        if (void 0 !== v && void 0 === e) return v.call(a(this), t);

        for (var n = a(this).byteLength, o = s(t, n), i = s(void 0 === e ? n : e, n), r = new (f(this, d))(l(i - o)), c = new p(this), u = new p(r), h = 0; o < i;) u.setUint8(h++, c.getUint8(o++));

        return r;
      }
    }), n(55)("ArrayBuffer");
  }, function (t, e, n) {
    var o = n(0);
    o(o.G + o.W + o.F * !n(75).ABV, {
      DataView: n(102).DataView
    });
  }, function (t, e, n) {
    n(37)("Int8", 1, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Uint8", 1, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Uint8", 1, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    }, !0);
  }, function (t, e, n) {
    n(37)("Int16", 2, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Uint16", 2, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Int32", 4, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Uint32", 4, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Float32", 4, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    n(37)("Float64", 8, function (t) {
      return function (e, n, o) {
        return t(this, e, n, o);
      };
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(30),
        r = n(10),
        a = (n(8).Reflect || {}).apply,
        s = Function.apply;
    o(o.S + o.F * !n(9)(function () {
      a(function () {});
    }), "Reflect", {
      apply: function (t, e, n) {
        var o = i(t),
            l = r(n);
        return a ? a(o, e, l) : s.call(o, e, l);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(45),
        r = n(30),
        a = n(10),
        s = n(11),
        l = n(9),
        c = n(111),
        u = (n(8).Reflect || {}).construct,
        f = l(function () {
      function t() {}

      return !(u(function () {}, [], t) instanceof t);
    }),
        d = !l(function () {
      u(function () {});
    });
    o(o.S + o.F * (f || d), "Reflect", {
      construct: function (t, e) {
        r(t), a(e);
        var n = arguments.length < 3 ? t : r(arguments[2]);
        if (d && !f) return u(t, e, n);

        if (t == n) {
          switch (e.length) {
            case 0:
              return new t();

            case 1:
              return new t(e[0]);

            case 2:
              return new t(e[0], e[1]);

            case 3:
              return new t(e[0], e[1], e[2]);

            case 4:
              return new t(e[0], e[1], e[2], e[3]);
          }

          var o = [null];
          return o.push.apply(o, e), new (c.apply(t, o))();
        }

        var l = n.prototype,
            p = i(s(l) ? l : Object.prototype),
            h = Function.apply.call(t, p, e);
        return s(h) ? h : p;
      }
    });
  }, function (t, e, n) {
    var o = n(19),
        i = n(0),
        r = n(10),
        a = n(38);
    i(i.S + i.F * n(9)(function () {
      Reflect.defineProperty(o.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }), "Reflect", {
      defineProperty: function (t, e, n) {
        r(t), e = a(e, !0), r(n);

        try {
          return o.f(t, e, n), !0;
        } catch (t) {
          return !1;
        }
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(32).f,
        r = n(10);
    o(o.S, "Reflect", {
      deleteProperty: function (t, e) {
        var n = i(r(t), e);
        return !(n && !n.configurable) && delete t[e];
      }
    });
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(10),
        r = function (t) {
      this._t = i(t), this._i = 0;
      var e,
          n = this._k = [];

      for (e in t) n.push(e);
    };

    n(118)(r, "Object", function () {
      var t,
          e = this._k;

      do {
        if (this._i >= e.length) return {
          value: void 0,
          done: !0
        };
      } while (!((t = e[this._i++]) in this._t));

      return {
        value: t,
        done: !1
      };
    }), o(o.S, "Reflect", {
      enumerate: function (t) {
        return new r(t);
      }
    });
  }, function (t, e, n) {
    var o = n(32),
        i = n(47),
        r = n(23),
        a = n(0),
        s = n(11),
        l = n(10);
    a(a.S, "Reflect", {
      get: function t(e, n) {
        var a,
            c,
            u = arguments.length < 3 ? e : arguments[2];
        return l(e) === u ? e[n] : (a = o.f(e, n)) ? r(a, "value") ? a.value : void 0 !== a.get ? a.get.call(u) : void 0 : s(c = i(e)) ? t(c, n, u) : void 0;
      }
    });
  }, function (t, e, n) {
    var o = n(32),
        i = n(0),
        r = n(10);
    i(i.S, "Reflect", {
      getOwnPropertyDescriptor: function (t, e) {
        return o.f(r(t), e);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(47),
        r = n(10);
    o(o.S, "Reflect", {
      getPrototypeOf: function (t) {
        return i(r(t));
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Reflect", {
      has: function (t, e) {
        return e in t;
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(10),
        r = Object.isExtensible;
    o(o.S, "Reflect", {
      isExtensible: function (t) {
        return i(t), !r || r(t);
      }
    });
  }, function (t, e, n) {
    var o = n(0);
    o(o.S, "Reflect", {
      ownKeys: n(132)
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(10),
        r = Object.preventExtensions;
    o(o.S, "Reflect", {
      preventExtensions: function (t) {
        i(t);

        try {
          return r && r(t), !0;
        } catch (t) {
          return !1;
        }
      }
    });
  }, function (t, e, n) {
    var o = n(19),
        i = n(32),
        r = n(47),
        a = n(23),
        s = n(0),
        l = n(40),
        c = n(10),
        u = n(11);
    s(s.S, "Reflect", {
      set: function t(e, n, s) {
        var f,
            d,
            p = arguments.length < 4 ? e : arguments[3],
            h = i.f(c(e), n);

        if (!h) {
          if (u(d = r(e))) return t(d, n, s, p);
          h = l(0);
        }

        if (a(h, "value")) {
          if (!1 === h.writable || !u(p)) return !1;

          if (f = i.f(p, n)) {
            if (f.get || f.set || !1 === f.writable) return !1;
            f.value = s, o.f(p, n, f);
          } else o.f(p, n, l(0, s));

          return !0;
        }

        return void 0 !== h.set && (h.set.call(p, s), !0);
      }
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(83);
    i && o(o.S, "Reflect", {
      setPrototypeOf: function (t, e) {
        i.check(t, e);

        try {
          return i.set(t, e), !0;
        } catch (t) {
          return !1;
        }
      }
    });
  }, function (t, e, n) {
    n(318), t.exports = n(17).Array.includes;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(65)(!0);
    o(o.P, "Array", {
      includes: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), n(48)("includes");
  }, function (t, e, n) {
    n(320), t.exports = n(17).Array.flatMap;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(321),
        r = n(20),
        a = n(16),
        s = n(30),
        l = n(120);
    o(o.P, "Array", {
      flatMap: function (t) {
        var e,
            n,
            o = r(this);
        return s(t), e = a(o.length), n = l(o, 0), i(n, o, o, e, 0, 1, t, arguments[1]), n;
      }
    }), n(48)("flatMap");
  }, function (t, e, n) {
    "use strict";

    var o = n(67),
        i = n(11),
        r = n(16),
        a = n(29),
        s = n(12)("isConcatSpreadable");

    t.exports = function t(e, n, l, c, u, f, d, p) {
      for (var h, v, g = u, y = 0, b = !!d && a(d, p, 3); y < c;) {
        if (y in l) {
          if (h = b ? b(l[y], y, n) : l[y], v = !1, i(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0) g = t(e, n, h, r(h.length), g, f - 1) - 1;else {
            if (g >= 9007199254740991) throw TypeError();
            e[g] = h;
          }
          g++;
        }

        y++;
      }

      return g;
    };
  }, function (t, e, n) {
    n(323), t.exports = n(17).String.padStart;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(133),
        r = n(73),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
    o(o.P + o.F * a, "String", {
      padStart: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
      }
    });
  }, function (t, e, n) {
    n(325), t.exports = n(17).String.padEnd;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(133),
        r = n(73),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
    o(o.P + o.F * a, "String", {
      padEnd: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
      }
    });
  }, function (t, e, n) {
    n(327), t.exports = n(17).String.trimLeft;
  }, function (t, e, n) {
    "use strict";

    n(53)("trimLeft", function (t) {
      return function () {
        return t(this, 1);
      };
    }, "trimStart");
  }, function (t, e, n) {
    n(329), t.exports = n(17).String.trimRight;
  }, function (t, e, n) {
    "use strict";

    n(53)("trimRight", function (t) {
      return function () {
        return t(this, 2);
      };
    }, "trimEnd");
  }, function (t, e, n) {
    n(331), t.exports = n(79).f("asyncIterator");
  }, function (t, e, n) {
    n(105)("asyncIterator");
  }, function (t, e, n) {
    n(333), t.exports = n(17).Object.getOwnPropertyDescriptors;
  }, function (t, e, n) {
    var o = n(0),
        i = n(132),
        r = n(25),
        a = n(32),
        s = n(95);
    o(o.S, "Object", {
      getOwnPropertyDescriptors: function (t) {
        for (var e, n, o = r(t), l = a.f, c = i(o), u = {}, f = 0; c.length > f;) void 0 !== (n = l(o, e = c[f++])) && s(u, e, n);

        return u;
      }
    });
  }, function (t, e, n) {
    n(335), t.exports = n(17).Object.values;
  }, function (t, e, n) {
    var o = n(0),
        i = n(134)(!1);
    o(o.S, "Object", {
      values: function (t) {
        return i(t);
      }
    });
  }, function (t, e, n) {
    n(337), t.exports = n(17).Object.entries;
  }, function (t, e, n) {
    var o = n(0),
        i = n(134)(!0);
    o(o.S, "Object", {
      entries: function (t) {
        return i(t);
      }
    });
  }, function (t, e, n) {
    "use strict";

    n(126), n(339), t.exports = n(17).Promise.finally;
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        i = n(17),
        r = n(8),
        a = n(63),
        s = n(128);
    o(o.P + o.R, "Promise", {
      finally: function (t) {
        var e = a(this, i.Promise || r.Promise),
            n = "function" == typeof t;
        return this.then(n ? function (n) {
          return s(e, t()).then(function () {
            return n;
          });
        } : t, n ? function (n) {
          return s(e, t()).then(function () {
            throw n;
          });
        } : t);
      }
    });
  }, function (t, e, n) {
    n(341), n(342), n(343), t.exports = n(17);
  }, function (t, e, n) {
    var o = n(8),
        i = n(0),
        r = n(73),
        a = [].slice,
        s = /MSIE .\./.test(r),
        l = function (t) {
      return function (e, n) {
        var o = arguments.length > 2,
            i = !!o && a.call(arguments, 2);
        return t(o ? function () {
          ("function" == typeof e ? e : Function(e)).apply(this, i);
        } : e, n);
      };
    };

    i(i.G + i.B + i.F * s, {
      setTimeout: l(o.setTimeout),
      setInterval: l(o.setInterval)
    });
  }, function (t, e, n) {
    var o = n(0),
        i = n(101);
    o(o.G + o.B, {
      setImmediate: i.set,
      clearImmediate: i.clear
    });
  }, function (t, e, n) {
    for (var o = n(98), i = n(43), r = n(21), a = n(8), s = n(24), l = n(54), c = n(12), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, h = i(p), v = 0; v < h.length; v++) {
      var g,
          y = h[v],
          b = p[y],
          m = a[y],
          k = m && m.prototype;
      if (k && (k[u] || s(k, u, d), k[f] || s(k, f, y), l[y] = d, b)) for (g in o) k[g] || r(k, g, o[g], !0);
    }
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(50), n(51), n(2), n(3), n(348), n(350), n(351)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c, u) {
      "use strict";

      var f = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), u = f(u);

      var d = function () {
        function t(e) {
          var n = this;
          (0, a.default)(this, t);

          var o = function () {};

          "object" === (0, r.default)(e) && "function" == typeof e.onReady && (o = e.onReady);
          var i = new u.default(e);
          this.isReady = i.isReady.then(function () {
            n.exportAPI(i), o();
          });
        }

        return (0, s.default)(t, [{
          key: "exportAPI",
          value: function (t) {
            var e = this;
            ["configuration"].forEach(function (n) {
              e[n] = t[n];
            }), this.destroy = function () {
              for (var n in t.moduleInstances.Listeners.removeAll(), t.moduleInstances.UI.destroy(), t.moduleInstances.ModificationsObserver.destroy(), t = null, e) e.hasOwnProperty(n) && delete e[n];

              Object.setPrototypeOf(e, null);
            }, Object.setPrototypeOf(this, t.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
              blocks: {
                clear: "clear",
                render: "render"
              },
              caret: {
                focus: "focus"
              },
              events: {
                on: "on",
                off: "off",
                emit: "emit"
              },
              saver: {
                save: "save"
              }
            }).forEach(function (n) {
              var o = (0, i.default)(n, 2),
                  r = o[0],
                  a = o[1];
              Object.entries(a).forEach(function (n) {
                var o = (0, i.default)(n, 2),
                    a = o[0],
                    s = o[1];
                e[s] = t.moduleInstances.API.methods[r][a];
              });
            });
          }
        }], [{
          key: "version",
          get: function () {
            return "2.17.0";
          }
        }]), t;
      }();

      o.default = d, d.displayName = "EditorJS", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
        var n = [],
            o = !0,
            i = !1,
            r = void 0;

        try {
          for (var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0);
        } catch (t) {
          i = !0, r = t;
        } finally {
          try {
            o || null == s.return || s.return();
          } finally {
            if (i) throw r;
          }
        }

        return n;
      }
    };
  }, function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }, function (t, e, n) {
    (e = t.exports = function (...t) {
      return i(...t);
    }).__esModule = !0;
    const o = n(349),
          i = o.default;
    Object.assign(e, o);
  }, function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function () {}, e.revert = function () {};
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [], void 0 === (r = "function" == typeof (o = function () {
      "use strict";

      Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (t) {
        for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);

        return n > -1;
      }), Element.prototype.closest || (Element.prototype.closest = function (t) {
        var e = this;
        if (!document.documentElement.contains(e)) return null;

        do {
          if (e.matches(t)) return e;
          e = e.parentElement || e.parentNode;
        } while (null !== e);

        return null;
      }), Element.prototype.prepend || (Element.prototype.prepend = function (t) {
        var e = document.createDocumentFragment();
        Array.isArray(t) || (t = [t]), t.forEach(function (t) {
          var n = t instanceof Node;
          e.appendChild(n ? t : document.createTextNode(String(t)));
        }), this.insertBefore(e, this.firstChild);
      });
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(51), n(26), n(2), n(3), n(13), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l, c) {
      "use strict";

      var u = n(15),
          f = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = f(i), r = f(r), a = f(a), s = f(s), l = f(l), c = u(c);
      var d = n(356),
          p = [];
      d.keys().forEach(function (t) {
        t.match(/^\.\/[^_][\w/]*\.([tj])s$/) && p.push(d(t));
      });

      var h = function () {
        function t(e) {
          var n,
              o,
              i = this;
          (0, a.default)(this, t), this.moduleInstances = {}, this.isReady = new Promise(function (t, e) {
            n = t, o = e;
          }), Promise.resolve().then(function () {
            return r.default.async(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return i.configuration = e, t.next = 3, r.default.awrap(i.validate());

                case 3:
                  return t.next = 5, r.default.awrap(i.init());

                case 5:
                  return t.next = 7, r.default.awrap(i.start());

                case 7:
                  c.logLabeled("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout(function () {
                    var t, e, o;
                    return r.default.async(function (a) {
                      for (;;) switch (a.prev = a.next) {
                        case 0:
                          return a.next = 2, r.default.awrap(i.render());

                        case 2:
                          i.configuration.autofocus && (t = i.moduleInstances, e = t.BlockManager, (o = t.Caret).setToBlock(e.blocks[0], o.positions.START)), i.moduleInstances.UI.removeLoader(), n();

                        case 5:
                        case "end":
                          return a.stop();
                      }
                    });
                  }, 500);

                case 9:
                case "end":
                  return t.stop();
              }
            });
          }).catch(function (t) {
            c.log("Editor.js is not ready because of ".concat(t), "error"), o(t);
          });
        }

        return (0, s.default)(t, [{
          key: "validate",
          value: function () {
            var t, e, n;
            return r.default.async(function (o) {
              for (;;) switch (o.prev = o.next) {
                case 0:
                  if (t = this.config, e = t.holderId, n = t.holder, !e || !n) {
                    o.next = 3;
                    break;
                  }

                  throw Error("«holderId» and «holder» param can't assign at the same time.");

                case 3:
                  if ("string" != typeof n || l.default.get(n)) {
                    o.next = 5;
                    break;
                  }

                  throw Error("element with ID «".concat(n, "» is missing. Pass correct holder's ID."));

                case 5:
                  if (!n || "object" !== (0, i.default)(n) || l.default.isElement(n)) {
                    o.next = 7;
                    break;
                  }

                  throw Error("holder as HTMLElement if provided must be inherit from Element class.");

                case 7:
                case "end":
                  return o.stop();
              }
            }, null, this);
          }
        }, {
          key: "init",
          value: function () {
            this.constructModules(), this.configureModules();
          }
        }, {
          key: "start",
          value: function () {
            var t,
                e = this;
            return r.default.async(function (n) {
              for (;;) switch (n.prev = n.next) {
                case 0:
                  return t = ["Tools", "UI", "BlockManager", "Paste", "DragNDrop", "ModificationsObserver", "BlockSelection", "RectangleSelection"], n.next = 3, r.default.awrap(t.reduce(function (t, n) {
                    return t.then(function () {
                      return r.default.async(function (t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, t.next = 3, r.default.awrap(e.moduleInstances[n].prepare());

                          case 3:
                            t.next = 8;
                            break;

                          case 5:
                            t.prev = 5, t.t0 = t.catch(0), c.log("Module ".concat(n, " was skipped because of %o"), "warn", t.t0);

                          case 8:
                          case "end":
                            return t.stop();
                        }
                      }, null, null, [[0, 5]]);
                    });
                  }, Promise.resolve()));

                case 3:
                case "end":
                  return n.stop();
              }
            });
          }
        }, {
          key: "render",
          value: function () {
            return this.moduleInstances.Renderer.render(this.config.data.blocks);
          }
        }, {
          key: "constructModules",
          value: function () {
            var t = this;
            p.forEach(function (e) {
              var n = "function" == typeof e ? e : e.default;

              try {
                t.moduleInstances[n.displayName] = new n({
                  config: t.configuration
                });
              } catch (t) {
                c.log("Module ".concat(n.displayName, " skipped because"), "warn", t);
              }
            });
          }
        }, {
          key: "configureModules",
          value: function () {
            for (var t in this.moduleInstances) this.moduleInstances.hasOwnProperty(t) && (this.moduleInstances[t].state = this.getModulesDiff(t));
          }
        }, {
          key: "getModulesDiff",
          value: function (t) {
            var e = {};

            for (var n in this.moduleInstances) n !== t && (e[n] = this.moduleInstances[n]);

            return e;
          }
        }, {
          key: "configuration",
          set: function (t) {
            "object" !== (0, i.default)(t) && (t = {
              holder: t
            }), t.holderId && !t.holder && (t.holder = t.holderId, t.holderId = null, c.log("holderId property will deprecated in next major release, use holder property instead.", "warn")), this.config = t, null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = c.LogLevels.VERBOSE), c.setLogLevel(this.config.logLevel), this.config.initialBlock = this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
            var e = {
              type: this.config.initialBlock,
              data: {}
            };
            this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
              p: !0,
              b: !0,
              a: !0
            }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.data = this.config.data || {}, this.config.onReady = this.config.onReady || function () {}, this.config.onChange = this.config.onChange || function () {}, c.isEmpty(this.config.data) ? (this.config.data = {}, this.config.data.blocks = [e]) : this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data.blocks = [e]);
          },
          get: function () {
            return this.config;
          }
        }]), t;
      }();

      o.default = h, h.displayName = "Core", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];

        return n;
      }
    };
  }, function (t, e) {
    t.exports = function (t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    };
  }, function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  }, function (t, e) {
    t.exports = function (t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    };
  }, function (t, e, n) {
    var o = {
      "./api": 76,
      "./api/": 76,
      "./api/blocks": 136,
      "./api/blocks.ts": 136,
      "./api/caret": 137,
      "./api/caret.ts": 137,
      "./api/events": 138,
      "./api/events.ts": 138,
      "./api/index": 76,
      "./api/index.ts": 76,
      "./api/inlineToolbar": 139,
      "./api/inlineToolbar.ts": 139,
      "./api/listeners": 140,
      "./api/listeners.ts": 140,
      "./api/notifier": 141,
      "./api/notifier.ts": 141,
      "./api/sanitizer": 142,
      "./api/sanitizer.ts": 142,
      "./api/saver": 143,
      "./api/saver.ts": 143,
      "./api/selection": 144,
      "./api/selection.ts": 144,
      "./api/styles": 145,
      "./api/styles.ts": 145,
      "./api/toolbar": 146,
      "./api/toolbar.ts": 146,
      "./api/tooltip": 147,
      "./api/tooltip.ts": 147,
      "./blockEvents": 148,
      "./blockEvents.ts": 148,
      "./blockManager": 149,
      "./blockManager.ts": 149,
      "./blockSelection": 150,
      "./blockSelection.ts": 150,
      "./caret": 151,
      "./caret.ts": 151,
      "./crossBlockSelection": 152,
      "./crossBlockSelection.ts": 152,
      "./dragNDrop": 153,
      "./dragNDrop.ts": 153,
      "./events": 154,
      "./events.ts": 154,
      "./listeners": 155,
      "./listeners.ts": 155,
      "./modificationsObserver": 156,
      "./modificationsObserver.ts": 156,
      "./notifier": 157,
      "./notifier.ts": 157,
      "./paste": 158,
      "./paste.ts": 158,
      "./rectangleSelection": 159,
      "./rectangleSelection.ts": 159,
      "./renderer": 160,
      "./renderer.ts": 160,
      "./sanitizer": 161,
      "./sanitizer.ts": 161,
      "./saver": 162,
      "./saver.ts": 162,
      "./shortcuts": 163,
      "./shortcuts.ts": 163,
      "./toolbar": 77,
      "./toolbar/": 77,
      "./toolbar/blockSettings": 164,
      "./toolbar/blockSettings.ts": 164,
      "./toolbar/conversion": 165,
      "./toolbar/conversion.ts": 165,
      "./toolbar/index": 77,
      "./toolbar/index.ts": 77,
      "./toolbar/inline": 166,
      "./toolbar/inline.ts": 166,
      "./toolbar/toolbox": 167,
      "./toolbar/toolbox.ts": 167,
      "./tools": 168,
      "./tools.ts": 168,
      "./tooltip": 169,
      "./tooltip.ts": 169,
      "./ui": 170,
      "./ui.ts": 170
    };

    function i(t) {
      var e = r(t);
      return n(e);
    }

    function r(t) {
      if (!n.o(o, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw e.code = "MODULE_NOT_FOUND", e;
      }

      return o[t];
    }

    i.keys = function () {
      return Object.keys(o);
    }, i.resolve = r, t.exports = i, i.id = 356;
  }, function (t, e) {
    t.exports = function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    };
  }, function (t, e) {
    function n(e, o) {
      return t.exports = n = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, n(e, o);
    }

    t.exports = n;
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function (o, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e, n) {
          (0, i.default)(this, t), this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = n;
        }

        return (0, r.default)(t, [{
          key: "setItems",
          value: function (t) {
            this.items = t;
          }
        }, {
          key: "next",
          value: function () {
            this.cursor = this.leafNodesAndReturnIndex(t.directions.RIGHT);
          }
        }, {
          key: "previous",
          value: function () {
            this.cursor = this.leafNodesAndReturnIndex(t.directions.LEFT);
          }
        }, {
          key: "dropCursor",
          value: function () {
            -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
          }
        }, {
          key: "leafNodesAndReturnIndex",
          value: function (e) {
            if (0 === this.items.length) return this.cursor;
            var n = this.cursor;
            return -1 === n ? n = e === t.directions.RIGHT ? -1 : 0 : this.items[n].classList.remove(this.focusedCssClass), n = e === t.directions.RIGHT ? (n + 1) % this.items.length : (this.items.length + n - 1) % this.items.length, a.default.isNativeInput(this.items[n]) && this.items[n].focus(), this.items[n].classList.add(this.focusedCssClass), n;
          }
        }, {
          key: "currentItem",
          get: function () {
            return -1 === this.cursor ? null : this.items[this.cursor];
          }
        }]), t;
      }();

      o.default = l, l.displayName = "DomIterator", l.directions = {
        RIGHT: "right",
        LEFT: "left"
      }, t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function (o, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e) {
          var n = e.api;
          (0, i.default)(this, t), this.CSS = {
            button: "ce-settings__button",
            wrapper: "ce-tune-move-up",
            animation: "wobble"
          }, this.api = n;
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function () {
            var t = this,
                e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
            return e.appendChild(a.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e, "click", function (n) {
              return t.handleClick(n, e);
            }, !1), this.api.tooltip.onHover(e, "Move up"), e;
          }
        }, {
          key: "handleClick",
          value: function (t, e) {
            var n = this,
                o = this.api.blocks.getCurrentBlockIndex();
            if (0 === o) return e.classList.add(this.CSS.animation), void window.setTimeout(function () {
              e.classList.remove(n.CSS.animation);
            }, 500);
            var i,
                r = this.api.blocks.getBlockByIndex(o),
                a = this.api.blocks.getBlockByIndex(o - 1),
                s = r.getBoundingClientRect(),
                l = a.getBoundingClientRect();
            i = l.top > 0 ? Math.abs(s.top) - Math.abs(l.top) : window.innerHeight - Math.abs(s.top) + Math.abs(l.top), window.scrollBy(0, -1 * i), this.api.blocks.move(o - 1), this.api.tooltip.hide();
          }
        }]), t;
      }();

      o.default = l, l.displayName = "MoveUpTune", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function (o, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e) {
          var n = this,
              o = e.api;
          (0, i.default)(this, t), this.CSS = {
            button: "ce-settings__button",
            buttonDelete: "ce-settings__button--delete",
            buttonConfirm: "ce-settings__button--confirm"
          }, this.nodes = {
            button: null
          }, this.api = o, this.resetConfirmation = function () {
            n.setConfirmation(!1);
          };
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function () {
            var t = this;
            return this.nodes.button = a.default.make("div", [this.CSS.button, this.CSS.buttonDelete], {}), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function (e) {
              return t.handleClick(e);
            }, !1), this.api.tooltip.onHover(this.nodes.button, "Delete"), this.nodes.button;
          }
        }, {
          key: "handleClick",
          value: function (t) {
            this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), this.api.tooltip.hide(), t.stopPropagation()) : (this.setConfirmation(!0), this.api.events.on("block-settings-closed", this.resetConfirmation));
          }
        }, {
          key: "setConfirmation",
          value: function (t) {
            this.needConfirmation = t, this.nodes.button.classList.add(this.CSS.buttonConfirm);
          }
        }]), t;
      }();

      o.default = l, l.displayName = "DeleteTune", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function (o, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e) {
          var n = e.api;
          (0, i.default)(this, t), this.CSS = {
            button: "ce-settings__button",
            wrapper: "ce-tune-move-down",
            animation: "wobble"
          }, this.api = n;
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function () {
            var t = this,
                e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
            return e.appendChild(a.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e, "click", function (n) {
              return t.handleClick(n, e);
            }, !1), this.api.tooltip.onHover(e, "Move down"), e;
          }
        }, {
          key: "handleClick",
          value: function (t, e) {
            var n = this,
                o = this.api.blocks.getCurrentBlockIndex();
            if (o === this.api.blocks.getBlocksCount() - 1) return e.classList.add(this.CSS.animation), void window.setTimeout(function () {
              e.classList.remove(n.CSS.animation);
            }, 500);
            var i = this.api.blocks.getBlockByIndex(o + 1),
                r = i.getBoundingClientRect(),
                a = Math.abs(window.innerHeight - i.offsetHeight);
            r.top < window.innerHeight && (a = window.scrollY + i.offsetHeight), window.scrollTo(0, a), this.api.blocks.move(o + 1), this.api.tooltip.hide();
          }
        }]), t;
      }();

      o.default = l, l.displayName = "MoveDownTune", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(14), n(13), n(59)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l) {
      "use strict";

      var c = n(15),
          u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = c(a), s = u(s);

      var f = function () {
        function t(e) {
          (0, i.default)(this, t), this.blocks = [], this.workingArea = e;
        }

        return (0, r.default)(t, [{
          key: "push",
          value: function (t) {
            this.blocks.push(t), this.insertToDOM(t);
          }
        }, {
          key: "swap",
          value: function (t, e) {
            var n = this.blocks[e];
            s.default.swap(this.blocks[t].holder, n.holder), this.blocks[e] = this.blocks[t], this.blocks[t] = n;
          }
        }, {
          key: "move",
          value: function (t, e) {
            var n = this.blocks.splice(e, 1)[0],
                o = t - 1,
                i = Math.max(0, o),
                r = this.blocks[i];
            t > 0 ? this.insertToDOM(n, "afterend", r) : this.insertToDOM(n, "beforebegin", r), this.blocks.splice(t, 0, n);
            var a = this.composeBlockEvent("move", {
              fromIndex: e,
              toIndex: t
            });
            n.call(l.BlockToolAPI.MOVED, a);
          }
        }, {
          key: "insert",
          value: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

            if (this.length) {
              t > this.length && (t = this.length), n && (this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED));
              var o = n ? 1 : 0;

              if (this.blocks.splice(t, o, e), t > 0) {
                var i = this.blocks[t - 1];
                this.insertToDOM(e, "afterend", i);
              } else {
                var r = this.blocks[t + 1];
                r ? this.insertToDOM(e, "beforebegin", r) : this.insertToDOM(e);
              }
            } else this.push(e);
          }
        }, {
          key: "remove",
          value: function (t) {
            isNaN(t) && (t = this.length - 1), this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED), this.blocks.splice(t, 1);
          }
        }, {
          key: "removeAll",
          value: function () {
            this.workingArea.innerHTML = "", this.blocks.forEach(function (t) {
              return t.call(l.BlockToolAPI.REMOVED);
            }), this.blocks.length = 0;
          }
        }, {
          key: "insertAfter",
          value: function (t, e) {
            var n = this.blocks.indexOf(t);
            this.insert(n + 1, e);
          }
        }, {
          key: "get",
          value: function (t) {
            return this.blocks[t];
          }
        }, {
          key: "indexOf",
          value: function (t) {
            return this.blocks.indexOf(t);
          }
        }, {
          key: "insertToDOM",
          value: function (t, e, n) {
            e ? n.holder.insertAdjacentElement(e, t.holder) : this.workingArea.appendChild(t.holder), t.call(l.BlockToolAPI.RENDERED);
          }
        }, {
          key: "composeBlockEvent",
          value: function (t, e) {
            return new CustomEvent(t, {
              detail: e
            });
          }
        }, {
          key: "length",
          get: function () {
            return this.blocks.length;
          }
        }, {
          key: "array",
          get: function () {
            return this.blocks;
          }
        }, {
          key: "nodes",
          get: function () {
            return a.array(this.workingArea.children);
          }
        }], [{
          key: "set",
          value: function (t, e, n) {
            return isNaN(Number(e)) ? (Reflect.set(t, e, n), !0) : (t.insert(+e, n), !0);
          }
        }, {
          key: "get",
          value: function (t, e) {
            return isNaN(Number(e)) ? Reflect.get(t, e) : t.get(+e);
          }
        }]), t;
      }();

      o.default = f, f.displayName = "Blocks", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) {
          return t[e];
        }.bind(null, i));
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "/", n(n.s = 0);
    }([function (t, e, n) {
      "use strict";

      n(1), t.exports = function () {
        var t = n(6),
            e = null;
        return {
          show: function (n) {
            if (n.message) {
              !function () {
                if (e) return !0;
                e = t.getWrapper(), document.body.appendChild(e);
              }();
              var o = null,
                  i = n.time || 8e3;

              switch (n.type) {
                case "confirm":
                  o = t.confirm(n);
                  break;

                case "prompt":
                  o = t.prompt(n);
                  break;

                default:
                  o = t.alert(n), window.setTimeout(function () {
                    o.remove();
                  }, i);
              }

              e.appendChild(o), o.classList.add("cdx-notify--bounce-in");
            }
          }
        };
      }();
    }, function (t, e, n) {
      var o = n(2);
      "string" == typeof o && (o = [[t.i, o, ""]]), n(4)(o, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      }), o.locals && (t.exports = o.locals);
    }, function (t, e, n) {
      (t.exports = n(3)(!1)).push([t.i, '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}', ""]);
    }, function (t, e) {
      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var n = function (t, e) {
              var n,
                  o = t[1] || "",
                  i = t[3];
              if (!i) return o;

              if (e && "function" == typeof btoa) {
                var r = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                    a = i.sources.map(function (t) {
                  return "/*# sourceURL=" + i.sourceRoot + t + " */";
                });
                return [o].concat(a).concat([r]).join("\n");
              }

              return [o].join("\n");
            }(e, t);

            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }, e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);

          for (var o = {}, i = 0; i < this.length; i++) {
            var r = this[i][0];
            "number" == typeof r && (o[r] = !0);
          }

          for (i = 0; i < t.length; i++) {
            var a = t[i];
            "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
          }
        }, e;
      };
    }, function (t, e, n) {
      var o,
          i,
          r = {},
          a = (o = function () {
        return window && document && document.all && !window.atob;
      }, function () {
        return void 0 === i && (i = o.apply(this, arguments)), i;
      }),
          s = function (t) {
        var e = {};
        return function (t) {
          if ("function" == typeof t) return t();

          if (void 0 === e[t]) {
            var n = function (t) {
              return document.querySelector(t);
            }.call(this, t);

            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head;
            } catch (t) {
              n = null;
            }
            e[t] = n;
          }

          return e[t];
        };
      }(),
          l = null,
          c = 0,
          u = [],
          f = n(5);

      function d(t, e) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n],
              i = r[o.id];

          if (i) {
            i.refs++;

            for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);

            for (; a < o.parts.length; a++) i.parts.push(b(o.parts[a], e));
          } else {
            var s = [];

            for (a = 0; a < o.parts.length; a++) s.push(b(o.parts[a], e));

            r[o.id] = {
              id: o.id,
              refs: 1,
              parts: s
            };
          }
        }
      }

      function p(t, e) {
        for (var n = [], o = {}, i = 0; i < t.length; i++) {
          var r = t[i],
              a = e.base ? r[0] + e.base : r[0],
              s = {
            css: r[1],
            media: r[2],
            sourceMap: r[3]
          };
          o[a] ? o[a].parts.push(s) : n.push(o[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      function h(t, e) {
        var n = s(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = u[u.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
          if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          var i = s(t.insertInto + " " + t.insertAt.before);
          n.insertBefore(e, i);
        }
      }

      function v(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
      }

      function g(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
      }

      function y(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }

      function b(t, e) {
        var n, o, i, r;

        if (e.transform && t.css) {
          if (!(r = e.transform(t.css))) return function () {};
          t.css = r;
        }

        if (e.singleton) {
          var a = c++;
          n = l || (l = g(e)), o = x.bind(null, n, a, !1), i = x.bind(null, n, a, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
          var e = document.createElement("link");
          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
        }(e), o = function (t, e, n) {
          var o = n.css,
              i = n.sourceMap,
              r = void 0 === e.convertToAbsoluteUrls && i;
          (e.convertToAbsoluteUrls || r) && (o = f(o)), i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
          var a = new Blob([o], {
            type: "text/css"
          }),
              s = t.href;
          t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }.bind(null, n, e), i = function () {
          v(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = g(e), o = function (t, e) {
          var n = e.css,
              o = e.media;
          if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
            for (; t.firstChild;) t.removeChild(t.firstChild);

            t.appendChild(document.createTextNode(n));
          }
        }.bind(null, n), i = function () {
          v(n);
        });

        return o(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            o(t = e);
          } else i();
        };
      }

      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = p(t, e);
        return d(n, e), function (t) {
          for (var o = [], i = 0; i < n.length; i++) {
            var a = n[i];
            (s = r[a.id]).refs--, o.push(s);
          }

          for (t && d(p(t, e), e), i = 0; i < o.length; i++) {
            var s;

            if (0 === (s = o[i]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();

              delete r[s.id];
            }
          }
        };
      };

      var m,
          k = (m = [], function (t, e) {
        return m[t] = e, m.filter(Boolean).join("\n");
      });

      function x(t, e, n, o) {
        var i = n ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = k(e, i);else {
          var r = document.createTextNode(i),
              a = t.childNodes;
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
        }
      }
    }, function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            o = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var i,
              r = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e;
          }).replace(/^'(.*)'$/, function (t, e) {
            return e;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
        });
      };
    }, function (t, e, n) {
      "use strict";

      var o, i, r, a, s, l;
      t.exports = (o = "cdx-notify", i = "cdx-notify__cross", r = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
        alert: l = function (t) {
          var e = document.createElement("DIV"),
              n = document.createElement("DIV"),
              r = t.message,
              a = t.style;
          return e.classList.add(o), a && e.classList.add(o + "--" + a), e.innerHTML = r, n.classList.add(i), n.addEventListener("click", e.remove.bind(e)), e.appendChild(n), e;
        },
        confirm: function (t) {
          var e = l(t),
              n = document.createElement("div"),
              o = document.createElement("button"),
              c = document.createElement("button"),
              u = e.querySelector("." + i),
              f = t.cancelHandler,
              d = t.okHandler;
          return n.classList.add(s), o.innerHTML = t.okText || "Confirm", c.innerHTML = t.cancelText || "Cancel", o.classList.add(a), c.classList.add(a), o.classList.add(r), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", e.remove.bind(e)), c.addEventListener("click", e.remove.bind(e)), n.appendChild(o), n.appendChild(c), e.appendChild(n), e;
        },
        prompt: function (t) {
          var e = l(t),
              n = document.createElement("div"),
              o = document.createElement("button"),
              c = document.createElement("input"),
              u = e.querySelector("." + i),
              f = t.cancelHandler,
              d = t.okHandler;
          return n.classList.add(s), o.innerHTML = t.okText || "Ok", o.classList.add(a), o.classList.add(r), c.classList.add("cdx-notify__input"), t.placeholder && c.setAttribute("placeholder", t.placeholder), t.default && (c.value = t.default), t.inputType && (c.type = t.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", function () {
            d(c.value);
          }), o.addEventListener("click", e.remove.bind(e)), n.appendChild(c), n.appendChild(o), e.appendChild(n), e;
        },
        getWrapper: function () {
          var t = document.createElement("DIV");
          return t.classList.add("cdx-notifies"), t;
        }
      });
    }]);
  }, function (t, e, n) {
    var o, i;
    void 0 === (i = "function" == typeof (o = function () {
      function t(t) {
        var e = t.tags;
        if (!Object.keys(e).map(function (t) {
          return typeof e[t];
        }).every(function (t) {
          return "object" === t || "boolean" === t || "function" === t;
        })) throw new Error("The configuration was invalid");
        this.config = t;
      }

      var e = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];

      function n(t) {
        return -1 !== e.indexOf(t.nodeName);
      }

      var o = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];

      function i(t) {
        return -1 !== o.indexOf(t.nodeName);
      }

      function r(t, e, n) {
        return "function" == typeof t.tags[e] ? t.tags[e](n) : t.tags[e];
      }

      function a(t, e) {
        return void 0 === e || "boolean" == typeof e && !e;
      }

      function s(t, e, n) {
        var o = t.name.toLowerCase();
        return !0 !== e && ("function" == typeof e[o] ? !e[o](t.value, n) : void 0 === e[o] || !1 === e[o] || "string" == typeof e[o] && e[o] !== t.value);
      }

      return t.prototype.clean = function (t) {
        const e = document.implementation.createHTMLDocument(),
              n = e.createElement("div");
        return n.innerHTML = t, this._sanitize(e, n), n.innerHTML;
      }, t.prototype._sanitize = function (t, e) {
        var o = function (t, e) {
          return t.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
        }(t, e),
            l = o.firstChild();

        if (l) do {
          if (l.nodeType !== Node.TEXT_NODE) {
            if (l.nodeType === Node.COMMENT_NODE) {
              e.removeChild(l), this._sanitize(t, e);
              break;
            }

            var c,
                u = i(l);
            u && (c = Array.prototype.some.call(l.childNodes, n));
            var f = !!e.parentNode,
                d = n(e) && n(l) && f,
                p = l.nodeName.toLowerCase(),
                h = r(this.config, p, l);

            if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
              if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName) for (; l.childNodes.length > 0;) e.insertBefore(l.childNodes[0], l);
              e.removeChild(l), this._sanitize(t, e);
              break;
            }

            for (var v = 0; v < l.attributes.length; v += 1) {
              var g = l.attributes[v];
              s(g, h, l) && (l.removeAttribute(g.name), v -= 1);
            }

            this._sanitize(t, l);
          } else if ("" === l.data.trim() && (l.previousElementSibling && n(l.previousElementSibling) || l.nextElementSibling && n(l.nextElementSibling))) {
            e.removeChild(l), this._sanitize(t, e);
            break;
          }
        } while (l = o.nextSibling());
      }, t;
    }) ? o.call(e, n, e, t) : o) || (t.exports = i);
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) {
          return t[e];
        }.bind(null, i));
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 0);
    }([function (t, e, n) {
      "use strict";

      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function i(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      }

      n.r(e);

      var r = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.commands = {}, this.keys = {}, this.name = e.name, this.parseShortcutName(e.name), this.element = e.on, this.callback = e.callback, this.executeShortcut = function (t) {
            n.execute(t);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }

        return i(t, null, [{
          key: "supportedCommands",
          get: function () {
            return {
              SHIFT: ["SHIFT"],
              CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"],
              ALT: ["ALT", "OPTION"]
            };
          }
        }, {
          key: "keyCodes",
          get: function () {
            return {
              0: 48,
              1: 49,
              2: 50,
              3: 51,
              4: 52,
              5: 53,
              6: 54,
              7: 55,
              8: 56,
              9: 57,
              A: 65,
              B: 66,
              C: 67,
              D: 68,
              E: 69,
              F: 70,
              G: 71,
              H: 72,
              I: 73,
              J: 74,
              K: 75,
              L: 76,
              M: 77,
              N: 78,
              O: 79,
              P: 80,
              Q: 81,
              R: 82,
              S: 83,
              T: 84,
              U: 85,
              V: 86,
              W: 87,
              X: 88,
              Y: 89,
              Z: 90,
              BACKSPACE: 8,
              ENTER: 13,
              ESCAPE: 27,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              INSERT: 45,
              DELETE: 46
            };
          }
        }]), i(t, [{
          key: "parseShortcutName",
          value: function (e) {
            e = e.split("+");

            for (var n = 0; n < e.length; n++) {
              e[n] = e[n].toUpperCase();
              var o = !1;

              for (var i in t.supportedCommands) if (t.supportedCommands[i].includes(e[n])) {
                o = this.commands[i] = !0;
                break;
              }

              o || (this.keys[e[n]] = !0);
            }

            for (var r in t.supportedCommands) this.commands[r] || (this.commands[r] = !1);
          }
        }, {
          key: "execute",
          value: function (e) {
            var n,
                o = {
              CMD: e.ctrlKey || e.metaKey,
              SHIFT: e.shiftKey,
              ALT: e.altKey
            },
                i = !0;

            for (n in this.commands) this.commands[n] !== o[n] && (i = !1);

            var r,
                a = !0;

            for (r in this.keys) a = a && e.keyCode === t.keyCodes[r];

            i && a && this.callback(e);
          }
        }, {
          key: "remove",
          value: function () {
            this.element.removeEventListener("keydown", this.executeShortcut);
          }
        }]), t;
      }();

      e.default = r;
    }]).default;
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) {
          return t[e];
        }.bind(null, i));
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "/", n(n.s = 0);
    }([function (t, e, n) {
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function i(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      }

      n(1).toString();

      var r = function () {
        function t(e) {
          var n = e.data,
              o = e.config,
              i = e.api;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.api = i, this._CSS = {
            block: this.api.styles.block,
            wrapper: "ce-paragraph"
          }, this.onKeyUp = this.onKeyUp.bind(this), this._placeholder = o.placeholder ? o.placeholder : t.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this.data = n;
        }

        return i(t, null, [{
          key: "DEFAULT_PLACEHOLDER",
          get: function () {
            return "";
          }
        }]), i(t, [{
          key: "onKeyUp",
          value: function (t) {
            "Backspace" !== t.code && "Delete" !== t.code || "" === this._element.textContent && (this._element.innerHTML = "");
          }
        }, {
          key: "drawView",
          value: function () {
            var t = document.createElement("DIV");
            return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = !0, t.dataset.placeholder = this._placeholder, t.addEventListener("keyup", this.onKeyUp), t;
          }
        }, {
          key: "render",
          value: function () {
            return this._element;
          }
        }, {
          key: "merge",
          value: function (t) {
            var e = {
              text: this.data.text + t.text
            };
            this.data = e;
          }
        }, {
          key: "validate",
          value: function (t) {
            return "" !== t.text.trim();
          }
        }, {
          key: "save",
          value: function (t) {
            return {
              text: t.innerHTML
            };
          }
        }, {
          key: "onPaste",
          value: function (t) {
            var e = {
              text: t.detail.data.innerHTML
            };
            this.data = e;
          }
        }, {
          key: "data",
          get: function () {
            var t = this._element.innerHTML;
            return this._data.text = t, this._data;
          },
          set: function (t) {
            this._data = t || {}, this._element.innerHTML = this._data.text || "";
          }
        }], [{
          key: "conversionConfig",
          get: function () {
            return {
              export: "text",
              import: "text"
            };
          }
        }, {
          key: "sanitize",
          get: function () {
            return {
              text: {
                br: !0
              }
            };
          }
        }, {
          key: "pasteConfig",
          get: function () {
            return {
              tags: ["P"]
            };
          }
        }, {
          key: "toolbox",
          get: function () {
            return {
              icon: n(6).default,
              title: "Text"
            };
          }
        }]), t;
      }();

      t.exports = r;
    }, function (t, e, n) {
      var o = n(2);
      "string" == typeof o && (o = [[t.i, o, ""]]), n(4)(o, {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      }), o.locals && (t.exports = o.locals);
    }, function (t, e, n) {
      (t.exports = n(3)(!1)).push([t.i, ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n", ""]);
    }, function (t, e) {
      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var n = function (t, e) {
              var n,
                  o = t[1] || "",
                  i = t[3];
              if (!i) return o;

              if (e && "function" == typeof btoa) {
                var r = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                    a = i.sources.map(function (t) {
                  return "/*# sourceURL=" + i.sourceRoot + t + " */";
                });
                return [o].concat(a).concat([r]).join("\n");
              }

              return [o].join("\n");
            }(e, t);

            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
          }).join("");
        }, e.i = function (t, n) {
          "string" == typeof t && (t = [[null, t, ""]]);

          for (var o = {}, i = 0; i < this.length; i++) {
            var r = this[i][0];
            "number" == typeof r && (o[r] = !0);
          }

          for (i = 0; i < t.length; i++) {
            var a = t[i];
            "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
          }
        }, e;
      };
    }, function (t, e, n) {
      var o,
          i,
          r = {},
          a = (o = function () {
        return window && document && document.all && !window.atob;
      }, function () {
        return void 0 === i && (i = o.apply(this, arguments)), i;
      }),
          s = function (t) {
        var e = {};
        return function (t) {
          if ("function" == typeof t) return t();

          if (void 0 === e[t]) {
            var n = function (t) {
              return document.querySelector(t);
            }.call(this, t);

            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head;
            } catch (t) {
              n = null;
            }
            e[t] = n;
          }

          return e[t];
        };
      }(),
          l = null,
          c = 0,
          u = [],
          f = n(5);

      function d(t, e) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n],
              i = r[o.id];

          if (i) {
            i.refs++;

            for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);

            for (; a < o.parts.length; a++) i.parts.push(b(o.parts[a], e));
          } else {
            var s = [];

            for (a = 0; a < o.parts.length; a++) s.push(b(o.parts[a], e));

            r[o.id] = {
              id: o.id,
              refs: 1,
              parts: s
            };
          }
        }
      }

      function p(t, e) {
        for (var n = [], o = {}, i = 0; i < t.length; i++) {
          var r = t[i],
              a = e.base ? r[0] + e.base : r[0],
              s = {
            css: r[1],
            media: r[2],
            sourceMap: r[3]
          };
          o[a] ? o[a].parts.push(s) : n.push(o[a] = {
            id: a,
            parts: [s]
          });
        }

        return n;
      }

      function h(t, e) {
        var n = s(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = u[u.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
          if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          var i = s(t.insertInto + " " + t.insertAt.before);
          n.insertBefore(e, i);
        }
      }

      function v(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
      }

      function g(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
      }

      function y(t, e) {
        Object.keys(e).forEach(function (n) {
          t.setAttribute(n, e[n]);
        });
      }

      function b(t, e) {
        var n, o, i, r;

        if (e.transform && t.css) {
          if (!(r = e.transform(t.css))) return function () {};
          t.css = r;
        }

        if (e.singleton) {
          var a = c++;
          n = l || (l = g(e)), o = x.bind(null, n, a, !1), i = x.bind(null, n, a, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
          var e = document.createElement("link");
          return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
        }(e), o = function (t, e, n) {
          var o = n.css,
              i = n.sourceMap,
              r = void 0 === e.convertToAbsoluteUrls && i;
          (e.convertToAbsoluteUrls || r) && (o = f(o)), i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
          var a = new Blob([o], {
            type: "text/css"
          }),
              s = t.href;
          t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }.bind(null, n, e), i = function () {
          v(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = g(e), o = function (t, e) {
          var n = e.css,
              o = e.media;
          if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
            for (; t.firstChild;) t.removeChild(t.firstChild);

            t.appendChild(document.createTextNode(n));
          }
        }.bind(null, n), i = function () {
          v(n);
        });

        return o(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
            o(t = e);
          } else i();
        };
      }

      t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = p(t, e);
        return d(n, e), function (t) {
          for (var o = [], i = 0; i < n.length; i++) {
            var a = n[i];
            (s = r[a.id]).refs--, o.push(s);
          }

          for (t && d(p(t, e), e), i = 0; i < o.length; i++) {
            var s;

            if (0 === (s = o[i]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();

              delete r[s.id];
            }
          }
        };
      };

      var m,
          k = (m = [], function (t, e) {
        return m[t] = e, m.filter(Boolean).join("\n");
      });

      function x(t, e, n, o) {
        var i = n ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = k(e, i);else {
          var r = document.createTextNode(i),
              a = t.childNodes;
          a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
        }
      }
    }, function (t, e) {
      t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            o = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
          var i,
              r = e.trim().replace(/^"(.*)"$/, function (t, e) {
            return e;
          }).replace(/^'(.*)'$/, function (t, e) {
            return e;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
        });
      };
    }, function (t, e, n) {
      "use strict";

      n.r(e), e.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n';
    }]);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function (o, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t() {
          (0, i.default)(this, t), this.commandName = "bold", this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--bold"
          }, this.nodes = {
            button: void 0
          };
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function () {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button;
          }
        }, {
          key: "surround",
          value: function (t) {
            document.execCommand(this.commandName);
          }
        }, {
          key: "checkState",
          value: function (t) {
            var e = document.queryCommandState(this.commandName);
            return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
          }
        }, {
          key: "shortcut",
          get: function () {
            return "CMD+B";
          }
        }], [{
          key: "sanitize",
          get: function () {
            return {
              b: {}
            };
          }
        }]), t;
      }();

      o.default = l, l.displayName = "BoldInlineTool", l.isInline = !0, l.title = "Bold", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function (o, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t() {
          (0, i.default)(this, t), this.commandName = "italic", this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--italic"
          }, this.nodes = {
            button: null
          };
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function () {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 4, 11)), this.nodes.button;
          }
        }, {
          key: "surround",
          value: function (t) {
            document.execCommand(this.commandName);
          }
        }, {
          key: "checkState",
          value: function (t) {
            var e = document.queryCommandState(this.commandName);
            return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
          }
        }, {
          key: "shortcut",
          get: function () {
            return "CMD+I";
          }
        }], [{
          key: "sanitize",
          get: function () {
            return {
              i: {}
            };
          }
        }]), t;
      }();

      o.default = l, l.displayName = "ItalicInlineTool", l.isInline = !0, l.title = "Italic", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(28), n(13), n(14)], void 0 === (r = "function" == typeof (o = function (o, i, r, a, s, l) {
      "use strict";

      var c = n(15),
          u = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = u(i), r = u(r), a = u(a), s = u(s), l = c(l);

      var f = function () {
        function t(e) {
          var n = e.api;
          (0, i.default)(this, t), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--link",
            buttonUnlink: "ce-inline-tool--unlink",
            input: "ce-inline-tool-input",
            inputShowed: "ce-inline-tool-input--showed"
          }, this.nodes = {
            button: null,
            input: null
          }, this.inputOpened = !1, this.toolbar = n.toolbar, this.inlineToolbar = n.inlineToolbar, this.notifier = n.notifier, this.selection = new a.default();
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function () {
            return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 14, 10)), this.nodes.button.appendChild(s.default.svg("unlink", 15, 11)), this.nodes.button;
          }
        }, {
          key: "renderActions",
          value: function () {
            var t = this;
            return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = "Add a link", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function (e) {
              e.keyCode === t.ENTER_KEY && t.enterPressed(e);
            }), this.nodes.input;
          }
        }, {
          key: "surround",
          value: function (t) {
            if (t) {
              this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
              var e = this.selection.findParentTag("A");
              if (e) return this.selection.expandToTag(e), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
            }

            this.toggleActions();
          }
        }, {
          key: "checkState",
          value: function (t) {
            var e = this.selection.findParentTag("A");

            if (e) {
              this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
              var n = e.getAttribute("href");
              this.nodes.input.value = "null" !== n ? n : "", this.selection.save();
            } else this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);

            return !!e;
          }
        }, {
          key: "clear",
          value: function () {
            this.closeActions();
          }
        }, {
          key: "toggleActions",
          value: function () {
            this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
          }
        }, {
          key: "openActions",
          value: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.nodes.input.classList.add(this.CSS.inputShowed), t && this.nodes.input.focus(), this.inputOpened = !0;
          }
        }, {
          key: "closeActions",
          value: function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];

            if (this.selection.isFakeBackgroundEnabled) {
              var e = new a.default();
              e.save(), this.selection.restore(), this.selection.removeFakeBackground(), e.restore();
            }

            this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t && this.selection.clearSaved(), this.inputOpened = !1;
          }
        }, {
          key: "enterPressed",
          value: function (t) {
            var e = this.nodes.input.value || "";
            if (e.trim() || (this.selection.restore(), this.unlink(), t.preventDefault(), this.closeActions()), !this.validateURL(e)) return this.notifier.show({
              message: "Pasted link is not valid.",
              style: "error"
            }), void l.log("Incorrect Link pasted", "warn", e);
            e = this.prepareLink(e), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
          }
        }, {
          key: "validateURL",
          value: function (t) {
            return !/\s/.test(t);
          }
        }, {
          key: "prepareLink",
          value: function (t) {
            return t = t.trim(), t = this.addProtocol(t);
          }
        }, {
          key: "addProtocol",
          value: function (t) {
            if (/^(\w+):(\/\/)?/.test(t)) return t;
            var e = /^\/[^\/\s]/.test(t),
                n = "#" === t.substring(0, 1),
                o = /^\/\/[^\/\s]/.test(t);
            return e || n || o || (t = "http://" + t), t;
          }
        }, {
          key: "insertLink",
          value: function (t) {
            var e = this.selection.findParentTag("A");
            e && this.selection.expandToTag(e), document.execCommand(this.commandLink, !1, t);
          }
        }, {
          key: "unlink",
          value: function () {
            document.execCommand(this.commandUnlink);
          }
        }, {
          key: "shortcut",
          get: function () {
            return "CMD+K";
          }
        }], [{
          key: "sanitize",
          get: function () {
            return {
              a: {
                href: !0,
                target: "_blank",
                rel: "nofollow"
              }
            };
          }
        }]), t;
      }();

      o.default = f, f.displayName = "LinkInlineTool", f.isInline = !0, f.title = "Link", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    var o, i, r;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, i = [e, n(2), n(3), n(13)], void 0 === (r = "function" == typeof (o = function (o, i, r, a) {
      "use strict";

      var s = n(1);
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0, i = s(i), r = s(r), a = s(a);

      var l = function () {
        function t(e) {
          var n = e.data;
          e.config, e.api, (0, i.default)(this, t), this.CSS = {
            wrapper: "ce-stub",
            info: "ce-stub__info",
            title: "ce-stub__title",
            subtitle: "ce-stub__subtitle"
          }, this.title = n.title || "Error", this.subtitle = "The block can not be displayed correctly.", this.savedData = n.savedData, this.wrapper = this.make();
        }

        return (0, r.default)(t, [{
          key: "render",
          value: function () {
            return this.wrapper;
          }
        }, {
          key: "save",
          value: function () {
            return this.savedData;
          }
        }, {
          key: "make",
          value: function () {
            var t = a.default.make("div", this.CSS.wrapper),
                e = a.default.svg("sad-face", 52, 52),
                n = a.default.make("div", this.CSS.info),
                o = a.default.make("div", this.CSS.title, {
              textContent: this.title
            }),
                i = a.default.make("div", this.CSS.subtitle, {
              textContent: this.subtitle
            });
            return t.appendChild(e), n.appendChild(o), n.appendChild(i), t.appendChild(n), t;
          }
        }]), t;
      }();

      o.default = l, l.displayName = "Stub", t.exports = e.default;
    }) ? o.apply(e, i) : o) || (t.exports = r);
  }, function (t, e, n) {
    window, t.exports = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) {
          return t[e];
        }.bind(null, i));
        return o;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default;
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 0);
    }([function (t, e, n) {
      t.exports = n(1);
    }, function (t, e, n) {
      "use strict";

      n.r(e), n.d(e, "default", function () {
        return o;
      });

      class o {
        constructor() {
          this.nodes = {
            wrapper: null,
            content: null
          }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.loadStyles(), this.prepare(), window.addEventListener("scroll", () => {
            this.showed && this.hide(!0);
          }, {
            passive: !0
          });
        }

        get CSS() {
          return {
            tooltip: "ct",
            tooltipContent: "ct__content",
            tooltipShown: "ct--shown",
            placement: {
              left: "ct--left",
              bottom: "ct--bottom",
              right: "ct--right",
              top: "ct--top"
            }
          };
        }

        show(t, e, n) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const o = Object.assign({
            placement: "bottom",
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            delay: 70,
            hidingDelay: 0
          }, n);
          if (o.hidingDelay && (this.hidingDelay = o.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof e) this.nodes.content.appendChild(document.createTextNode(e));else {
            if (!(e instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof e + " given.");
            this.nodes.content.appendChild(e);
          }

          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o.placement) {
            case "top":
              this.placeTop(t, o);
              break;

            case "left":
              this.placeLeft(t, o);
              break;

            case "right":
              this.placeRight(t, o);
              break;

            case "bottom":
            default:
              this.placeBottom(t, o);
          }

          o && o.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, o.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }

        hide(t = !1) {
          if (this.hidingDelay && !t) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
            this.hide(!0);
          }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }

        onHover(t, e, n) {
          t.addEventListener("mouseenter", () => {
            this.show(t, e, n);
          }), t.addEventListener("mouseleave", () => {
            this.hide();
          });
        }

        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }

        loadStyles() {
          const t = "codex-tooltips-style";
          if (document.getElementById(t)) return;
          const e = n(2),
                o = this.make("style", null, {
            textContent: e.toString(),
            id: t
          });
          this.prepend(document.head, o);
        }

        placeBottom(t, e) {
          const n = t.getBoundingClientRect(),
                o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
                i = n.bottom + window.pageYOffset + this.offsetTop + e.marginTop;
          this.applyPlacement("bottom", o, i);
        }

        placeTop(t, e) {
          const n = t.getBoundingClientRect(),
                o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
                i = n.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", o, i);
        }

        placeLeft(t, e) {
          const n = t.getBoundingClientRect(),
                o = n.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e.marginLeft,
                i = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", o, i);
        }

        placeRight(t, e) {
          const n = t.getBoundingClientRect(),
                o = n.right + this.offsetRight + e.marginRight,
                i = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", o, i);
        }

        applyPlacement(t, e, n) {
          this.nodes.wrapper.classList.add(this.CSS.placement[t]), this.nodes.wrapper.style.left = `${e}px`, this.nodes.wrapper.style.top = `${n}px`;
        }

        make(t, e = null, n = {}) {
          const o = document.createElement(t);
          Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);

          for (const t in n) n.hasOwnProperty(t) && (o[t] = n[t]);

          return o;
        }

        append(t, e) {
          Array.isArray(e) ? e.forEach(e => t.appendChild(e)) : t.appendChild(e);
        }

        prepend(t, e) {
          Array.isArray(e) ? (e = e.reverse()).forEach(e => t.prepend(e)) : t.prepend(e);
        }

      }
    }, function (t, e) {
      t.exports = '.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%;z-index:-1}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}';
    }]).default;
  }, function (t, e, n) {
    "use strict";

    n.r(e), e.default = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 8 8">\n  <circle cx="6.5" cy="1.5" r="1.5"/>\n  <circle cx="6.5" cy="6.5" r="1.5"/>\n  <circle cx="1.5" cy="1.5" r="1.5"/>\n  <circle cx="1.5" cy="6.5" r="1.5"/>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>';
  }, function (t, e) {
    t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}@media (max-width:650px){.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:calc(100% - 35px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:-30px;top:5px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:absolute;right:-28px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:18px;height:18px;color:#707684;cursor:pointer;background:#eff2f5}.ce-toolbar__settings-btn:hover{color:#1d202b}@media (max-width:650px){.ce-toolbar__settings-btn{background:transparent}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;transform:none!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox-button-tooltip__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 6px}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool .icon,.ce-inline-tool>svg{margin:auto}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--last{margin-right:0!important}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #eaeaea;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);box-shadow:0 13px 7px -5px rgba(26,38,49,.09),6px 15px 34px -6px rgba(33,48,73,.29);border-bottom-color:#d5d7db}}.ce-settings{right:-1px;top:30px;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:-11px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button .icon,.ce-settings__button>svg{margin:auto}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button .icon,.cdx-settings-button>svg{margin:auto}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}';
  }]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/editor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/editor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      "default": function _default() {
        return 'v-editor-' + Math.random().toString(16).substr(2, 9);
      }
    },
    placeholder: {
      type: String,
      "default": function _default() {
        return 'What\'s on your mind?';
      }
    },
    autofocus: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    value: {
      type: Object,
      "default": function _default() {},
      required: false
    },
    tools: {
      type: Object,
      "default": function _default() {},
      required: false
    }
  },
  data: function data() {
    return {
      editor: null
    };
  },
  watch: {
    value: function value(_new, _old) {
      // if (_new && _old && JSON.stringify(_new.blocks) != JSON.stringify(_old.blocks) && this.editor) {
      // this.editor.render(_new);
      //}                
      if (!this.__stated && this.editor) {
        this.editor.render(_new);
      }

      this.__stated = false;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.__rendered) return;
    this.editor = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default.a({
      holder: this.id,
      autofocus: this.autofocus,
      placeholder: this.placeholder,
      data: this.value,
      tools: this.tools,
      onReady: function onReady() {
        _this.$emit('ready');
      },
      onChange: function onChange(e) {
        _this.__stated = true;

        _this.editor.save().then(function (val) {
          _this.$emit('input', val);
        });
      }
    });
    this.__rendered = true;
  },
  beforeDestroy: function beforeDestroy() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/editor.vue?vue&type=template&id=7c83f806&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/editor.vue?vue&type=template&id=7c83f806& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: _vm.id } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/editor.vue":
/*!************************!*\
  !*** ./src/editor.vue ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.vue?vue&type=template&id=7c83f806& */ "./src/editor.vue?vue&type=template&id=7c83f806&");
/* harmony import */ var _editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.vue?vue&type=script&lang=js& */ "./src/editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/editor.vue?vue&type=script&lang=js&":
/*!*************************************************!*\
  !*** ./src/editor.vue?vue&type=script&lang=js& ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/editor.vue?vue&type=template&id=7c83f806&":
/*!*******************************************************!*\
  !*** ./src/editor.vue?vue&type=template&id=7c83f806& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./editor.vue?vue&type=template&id=7c83f806& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/editor.vue?vue&type=template&id=7c83f806&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editor_vue_vue_type_template_id_7c83f806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.vue */ "./src/editor.vue");

var __EditorPlugin = {
  install: function install(Vue) {
    if (Vue.__editor_installed) {
      return;
    }

    Vue.__editor_installed = true;
    Vue.component('v-editor', _editor_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(__EditorPlugin);
}

/* harmony default export */ __webpack_exports__["default"] = (__EditorPlugin);

/***/ })

/******/ });
});
//# sourceMappingURL=v-editor.js.map