(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7193], {
        52911: function(__unused_webpack_module, exports, __webpack_require__) {
            var $jscomp = $jscomp || {};
            $jscomp.scope = {}, $jscomp.findInternal = function(t, r, n) {
                t instanceof String && (t = String(t));
                for (var i = t.length, s = 0; s < i; s++) {
                    var o = t[s];
                    if (r.call(n, o, s, t)) return {
                        i: s,
                        v: o
                    }
                }
                return {
                    i: -1,
                    v: void 0
                }
            }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, r, n) {
                t != Array.prototype && t != Object.prototype && (t[r] = n.value)
            }, $jscomp.getGlobal = function(t) {
                return "undefined" != typeof window && window === t ? t : void 0 !== __webpack_require__.g && null != __webpack_require__.g ? __webpack_require__.g : t
            }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.polyfill = function(t, r, n, i) {
                if (r) {
                    for (i = 0, n = $jscomp.global, t = t.split("."); i < t.length - 1; i++) {
                        var s = t[i];
                        s in n || (n[s] = {}), n = n[s]
                    }(r = r(i = n[t = t[t.length - 1]])) != i && null != r && $jscomp.defineProperty(n, t, {
                        configurable: !0,
                        writable: !0,
                        value: r
                    })
                }
            }, $jscomp.polyfill("Array.prototype.findIndex", function(t) {
                return t || function(t, r) {
                    return $jscomp.findInternal(this, t, r).i
                }
            }, "es6", "es3"), $jscomp.checkStringArgs = function(t, r, n) {
                if (null == t) throw TypeError("The 'this' value for String.prototype." + n + " must not be null or undefined");
                if (r instanceof RegExp) throw TypeError("First argument to String.prototype." + n + " must not be a regular expression");
                return t + ""
            }, $jscomp.polyfill("String.prototype.endsWith", function(t) {
                return t || function(t, r) {
                    var n = $jscomp.checkStringArgs(this, t, "endsWith");
                    t += "", void 0 === r && (r = n.length), r = Math.max(0, Math.min(0 | r, n.length));
                    for (var i = t.length; 0 < i && 0 < r;)
                        if (n[--r] != t[--i]) return !1;
                    return 0 >= i
                }
            }, "es6", "es3"), $jscomp.polyfill("Array.prototype.find", function(t) {
                return t || function(t, r) {
                    return $jscomp.findInternal(this, t, r).v
                }
            }, "es6", "es3"), $jscomp.polyfill("String.prototype.startsWith", function(t) {
                return t || function(t, r) {
                    var n = $jscomp.checkStringArgs(this, t, "startsWith");
                    t += "";
                    var i = n.length,
                        s = t.length;
                    r = Math.max(0, Math.min(0 | r, n.length));
                    for (var o = 0; o < s && r < i;)
                        if (n[r++] != t[o++]) return !1;
                    return o >= s
                }
            }, "es6", "es3"), $jscomp.polyfill("String.prototype.repeat", function(t) {
                return t || function(t) {
                    var r = $jscomp.checkStringArgs(this, null, "repeat");
                    if (0 > t || 1342177279 < t) throw RangeError("Invalid count value");
                    t |= 0;
                    for (var n = ""; t;) 1 & t && (n += r), (t >>>= 1) && (r += r);
                    return n
                }
            }, "es6", "es3");
            var COMPILED = !0,
                goog = goog || {};
            goog.global = this || self, goog.exportPath_ = function(t, r, n) {
                t = t.split("."), n = n || goog.global, t[0] in n || void 0 === n.execScript || n.execScript("var " + t[0]);
                for (var i; t.length && (i = t.shift());) t.length || void 0 === r ? n = n[i] && n[i] !== Object.prototype[i] ? n[i] : n[i] = {} : n[i] = r
            }, goog.define = function(t, r) {
                if (!COMPILED) {
                    var n = goog.global.CLOSURE_UNCOMPILED_DEFINES,
                        i = goog.global.CLOSURE_DEFINES;
                    n && void 0 === n.nodeType && Object.prototype.hasOwnProperty.call(n, t) ? r = n[t] : i && void 0 === i.nodeType && Object.prototype.hasOwnProperty.call(i, t) && (r = i[t])
                }
                return r
            }, goog.FEATURESET_YEAR = 2012, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1, goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1, goog.provide = function(t) {
                if (goog.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
                if (!COMPILED && goog.isProvided_(t)) throw Error('Namespace "' + t + '" already declared.');
                goog.constructNamespace_(t)
            }, goog.constructNamespace_ = function(t, r) {
                if (!COMPILED) {
                    delete goog.implicitNamespaces_[t];
                    for (var n = t;
                        (n = n.substring(0, n.lastIndexOf("."))) && !goog.getObjectByName(n);) goog.implicitNamespaces_[n] = !0
                }
                goog.exportPath_(t, r)
            }, goog.getScriptNonce = function(t) {
                return t && t != goog.global ? goog.getScriptNonce_(t.document) : (null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)), goog.cspNonce_)
            }, goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/, goog.cspNonce_ = null, goog.getScriptNonce_ = function(t) {
                return (t = t.querySelector && t.querySelector("script[nonce]")) && (t = t.nonce || t.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(t) ? t : ""
            }, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function(t) {
                if ("string" != typeof t || !t || -1 == t.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
                if (!goog.isInGoogModuleLoader_()) throw Error("Module " + t + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
                if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
                if (goog.moduleLoaderState_.moduleName = t, !COMPILED) {
                    if (goog.isProvided_(t)) throw Error('Namespace "' + t + '" already declared.');
                    delete goog.implicitNamespaces_[t]
                }
            }, goog.module.get = function(t) {
                return goog.module.getInternal_(t)
            }, goog.module.getInternal_ = function(t) {
                if (!COMPILED) {
                    if (t in goog.loadedModules_) return goog.loadedModules_[t].exports;
                    if (!goog.implicitNamespaces_[t]) return null != (t = goog.getObjectByName(t)) ? t : null
                }
                return null
            }, goog.ModuleType = {
                ES6: "es6",
                GOOG: "goog"
            }, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function() {
                return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_()
            }, goog.isInGoogModuleLoader_ = function() {
                return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG
            }, goog.isInEs6ModuleLoader_ = function() {
                if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) return !0;
                var t = goog.global.$jscomp;
                return !!t && "function" == typeof t.getCurrentModulePath && !!t.getCurrentModulePath()
            }, goog.module.declareLegacyNamespace = function() {
                if (!COMPILED && !goog.isInGoogModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
                if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
                goog.moduleLoaderState_.declareLegacyNamespace = !0
            }, goog.declareModuleId = function(t) {
                if (!COMPILED) {
                    if (!goog.isInEs6ModuleLoader_()) throw Error("goog.declareModuleId may only be called from within an ES6 module");
                    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) throw Error("goog.declareModuleId may only be called once per module.");
                    if (t in goog.loadedModules_) throw Error('Module with namespace "' + t + '" already exists.')
                }
                if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = t;
                else {
                    var r = goog.global.$jscomp;
                    if (!r || "function" != typeof r.getCurrentModulePath) throw Error('Module with namespace "' + t + '" has been loaded incorrectly.');
                    r = r.require(r.getCurrentModulePath()), goog.loadedModules_[t] = {
                        exports: r,
                        type: goog.ModuleType.ES6,
                        moduleId: t
                    }
                }
            }, goog.setTestOnly = function(t) {
                if (goog.DISALLOW_TEST_ONLY_CODE) throw Error("Importing test-only code into non-debug environment" + ((t = t || "") ? ": " + t : "."))
            }, goog.forwardDeclare = function(t) {}, COMPILED || (goog.isProvided_ = function(t) {
                return t in goog.loadedModules_ || !goog.implicitNamespaces_[t] && null != goog.getObjectByName(t)
            }, goog.implicitNamespaces_ = {
                "goog.module": !0
            }), goog.getObjectByName = function(t, r) {
                t = t.split("."), r = r || goog.global;
                for (var n = 0; n < t.length; n++)
                    if (null == (r = r[t[n]])) return null;
                return r
            }, goog.globalize = function(t, r) {
                for (var n in r = r || goog.global, t) r[n] = t[n]
            }, goog.addDependency = function(t, r, n, i) {
                !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(t, r, n, i)
            }, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function(t) {
                goog.global.console && goog.global.console.error(t)
            }, goog.require = function(t) {
                if (!COMPILED) {
                    if (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(t), goog.isProvided_(t)) {
                        if (goog.isInModuleLoader_()) return goog.module.getInternal_(t)
                    } else if (goog.ENABLE_DEBUG_LOADER) {
                        var r = goog.moduleLoaderState_;
                        goog.moduleLoaderState_ = null;
                        try {
                            goog.debugLoader_.load_(t)
                        } finally {
                            goog.moduleLoaderState_ = r
                        }
                    }
                    return null
                }
            }, goog.requireType = function(t) {
                return {}
            }, goog.basePath = "", goog.nullFunction = function() {}, goog.abstractMethod = function() {
                throw Error("unimplemented abstract method")
            }, goog.addSingletonGetter = function(t) {
                t.instance_ = void 0, t.getInstance = function() {
                    return t.instance_ ? t.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = t), t.instance_ = new t)
                }
            }, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG, goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.TRANSPILE = "detect", goog.ASSUME_ES_MODULES_TRANSPILED = !1, goog.TRANSPILE_TO_LANGUAGE = "", goog.TRANSPILER = "transpile.js", goog.hasBadLetScoping = null, goog.useSafari10Workaround = function() {
                if (null == goog.hasBadLetScoping) {
                    try {
                        var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
                    } catch (b) {
                        a = !1
                    }
                    goog.hasBadLetScoping = a
                }
                return goog.hasBadLetScoping
            }, goog.workaroundSafari10EvalBug = function(t) {
                return "(function(){" + t + "\n;})();\n"
            }, goog.loadModule = function(t) {
                var r = goog.moduleLoaderState_;
                try {
                    if (goog.moduleLoaderState_ = {
                            moduleName: "",
                            declareLegacyNamespace: !1,
                            type: goog.ModuleType.GOOG
                        }, goog.isFunction(t)) var n = t.call(void 0, {});
                    else if ("string" == typeof t) goog.useSafari10Workaround() && (t = goog.workaroundSafari10EvalBug(t)), n = goog.loadModuleFromSource_.call(void 0, t);
                    else throw Error("Invalid module definition");
                    var i = goog.moduleLoaderState_.moduleName;
                    if ("string" == typeof i && i) goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(i, n) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof n && null != n && Object.seal(n), goog.loadedModules_[i] = {
                        exports: n,
                        type: goog.ModuleType.GOOG,
                        moduleId: goog.moduleLoaderState_.moduleName
                    };
                    else throw Error('Invalid module name "' + i + '"')
                } finally {
                    goog.moduleLoaderState_ = r
                }
            }, goog.loadModuleFromSource_ = function(a) {
                return eval(a), {}
            }, goog.normalizePath_ = function(t) {
                t = t.split("/");
                for (var r = 0; r < t.length;) "." == t[r] ? t.splice(r, 1) : r && ".." == t[r] && t[r - 1] && ".." != t[r - 1] ? t.splice(--r, 2) : r++;
                return t.join("/")
            }, goog.loadFileSync_ = function(t) {
                if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(t);
                try {
                    var r = new goog.global.XMLHttpRequest;
                    return r.open("get", t, !1), r.send(), 0 == r.status || 200 == r.status ? r.responseText : null
                } catch (t) {
                    return null
                }
            }, goog.transpile_ = function(t, r, n) {
                var i = goog.global.$jscomp;
                i || (goog.global.$jscomp = i = {});
                var s = i.transpile;
                if (!s) {
                    var o = goog.basePath + goog.TRANSPILER,
                        u = goog.loadFileSync_(o);
                    if (u) {
                        if ((function() {
                                (0, eval)(u + "\n//# sourceURL=" + o)
                            }).call(goog.global), goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
                        goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile, s = (i = goog.global.$jscomp).transpile
                    }
                }
                return s || (s = i.transpile = function(t, r) {
                    return goog.logToConsole_(r + " requires transpilation but no transpiler was found."), t
                }), s(t, r, n)
            }, goog.typeOf = function(t) {
                var r = typeof t;
                if ("object" == r) {
                    if (!t) return "null";
                    if (t instanceof Array) return "array";
                    if (t instanceof Object) return r;
                    var n = Object.prototype.toString.call(t);
                    if ("[object Window]" == n) return "object";
                    if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
                } else if ("function" == r && void 0 === t.call) return "object";
                return r
            }, goog.isArray = function(t) {
                return "array" == goog.typeOf(t)
            }, goog.isArrayLike = function(t) {
                var r = goog.typeOf(t);
                return "array" == r || "object" == r && "number" == typeof t.length
            }, goog.isDateLike = function(t) {
                return goog.isObject(t) && "function" == typeof t.getFullYear
            }, goog.isFunction = function(t) {
                return "function" == goog.typeOf(t)
            }, goog.isObject = function(t) {
                var r = typeof t;
                return "object" == r && null != t || "function" == r
            }, goog.getUid = function(t) {
                return Object.prototype.hasOwnProperty.call(t, goog.UID_PROPERTY_) && t[goog.UID_PROPERTY_] || (t[goog.UID_PROPERTY_] = ++goog.uidCounter_)
            }, goog.hasUid = function(t) {
                return !!t[goog.UID_PROPERTY_]
            }, goog.removeUid = function(t) {
                null !== t && "removeAttribute" in t && t.removeAttribute(goog.UID_PROPERTY_);
                try {
                    delete t[goog.UID_PROPERTY_]
                } catch (t) {}
            }, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(t) {
                var r = goog.typeOf(t);
                if ("object" == r || "array" == r) {
                    if ("function" == typeof t.clone) return t.clone();
                    for (var n in r = "array" == r ? [] : {}, t) r[n] = goog.cloneObject(t[n]);
                    return r
                }
                return t
            }, goog.bindNative_ = function(t, r, n) {
                return t.call.apply(t.bind, arguments)
            }, goog.bindJs_ = function(t, r, n) {
                if (!t) throw Error();
                if (2 < arguments.length) {
                    var i = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var n = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(n, i), t.apply(r, n)
                    }
                }
                return function() {
                    return t.apply(r, arguments)
                }
            }, goog.bind = function(t, r, n) {
                return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_, goog.bind.apply(null, arguments)
            }, goog.partial = function(t, r) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var r = n.slice();
                    return r.push.apply(r, arguments), t.apply(this, r)
                }
            }, goog.mixin = function(t, r) {
                for (var n in r) t[n] = r[n]
            }, goog.now = goog.TRUSTED_SITE && Date.now || function() {
                return +new Date
            }, goog.globalEval = function(t) {
                if (goog.global.execScript) goog.global.execScript(t, "JavaScript");
                else if (goog.global.eval) {
                    if (null == goog.evalWorksForGlobals_) {
                        try {
                            goog.global.eval("var _evalTest_ = 1;")
                        } catch (t) {}
                        if (void 0 !== goog.global._evalTest_) {
                            try {
                                delete goog.global._evalTest_
                            } catch (t) {}
                            goog.evalWorksForGlobals_ = !0
                        } else goog.evalWorksForGlobals_ = !1
                    }
                    if (goog.evalWorksForGlobals_) goog.global.eval(t);
                    else {
                        var r = goog.global.document,
                            n = r.createElement("script");
                        n.type = "text/javascript", n.defer = !1, n.appendChild(r.createTextNode(t)), r.head.appendChild(n), r.head.removeChild(n)
                    }
                } else throw Error("goog.globalEval not available")
            }, goog.evalWorksForGlobals_ = null, goog.getCssName = function(t, r) {
                if ("." == String(t).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + t);
                var n = function(t) {
                        return goog.cssNameMapping_[t] || t
                    },
                    i = function(t) {
                        t = t.split("-");
                        for (var r = [], i = 0; i < t.length; i++) r.push(n(t[i]));
                        return r.join("-")
                    };
                return i = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? n : i : function(t) {
                    return t
                }, t = r ? t + "-" + i(r) : i(t), goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(t) : t
            }, goog.setCssNameMapping = function(t, r) {
                goog.cssNameMapping_ = t, goog.cssNameMappingStyle_ = r
            }, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function(t, r, n) {
                return n && n.html && (t = t.replace(/</g, "&lt;")), r && (t = t.replace(/\{\$([^}]+)}/g, function(t, n) {
                    return null != r && n in r ? r[n] : t
                })), t
            }, goog.getMsgWithFallback = function(t, r) {
                return t
            }, goog.exportSymbol = function(t, r, n) {
                goog.exportPath_(t, r, n)
            }, goog.exportProperty = function(t, r, n) {
                t[r] = n
            }, goog.inherits = function(t, r) {
                function n() {}
                n.prototype = r.prototype, t.superClass_ = r.prototype, t.prototype = new n, t.prototype.constructor = t, t.base = function(t, n, i) {
                    for (var s = Array(arguments.length - 2), o = 2; o < arguments.length; o++) s[o - 2] = arguments[o];
                    return r.prototype[n].apply(t, s)
                }
            }, goog.scope = function(t) {
                if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
                t.call(goog.global)
            }, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function(t, r) {
                var n = r.constructor,
                    i = r.statics;
                return n && n != Object.prototype.constructor || (n = function() {
                    throw Error("cannot instantiate an interface (no constructor defined).")
                }), n = goog.defineClass.createSealingConstructor_(n, t), t && goog.inherits(n, t), delete r.constructor, delete r.statics, goog.defineClass.applyProperties_(n.prototype, r), null != i && (i instanceof Function ? i(n) : goog.defineClass.applyProperties_(n, i)), n
            }, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function(t, r) {
                if (!goog.defineClass.SEAL_CLASS_INSTANCES) return t;
                var n = !goog.defineClass.isUnsealable_(r),
                    i = function() {
                        var r = t.apply(this, arguments) || this;
                        return r[goog.UID_PROPERTY_] = r[goog.UID_PROPERTY_], this.constructor === i && n && Object.seal instanceof Function && Object.seal(r), r
                    };
                return i
            }, goog.defineClass.isUnsealable_ = function(t) {
                return t && t.prototype && t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
            }, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.defineClass.applyProperties_ = function(t, r) {
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                for (var i = 0; i < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; i++) n = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }, goog.tagUnsealableClass = function(t) {
                !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
            }, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
                var t = goog.global.document;
                return null != t && "write" in t
            }, goog.isDocumentLoading_ = function() {
                var t = goog.global.document;
                return t.attachEvent ? "complete" != t.readyState : "loading" == t.readyState
            }, goog.findBasePath_ = function() {
                if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" == typeof goog.global.CLOSURE_BASE_PATH) goog.basePath = goog.global.CLOSURE_BASE_PATH;
                else if (goog.inHtmlDocument_()) {
                    var t = goog.global.document,
                        r = t.currentScript;
                    for (r = (t = r ? [r] : t.getElementsByTagName("SCRIPT")).length - 1; 0 <= r; --r) {
                        var n = t[r].src,
                            i = n.lastIndexOf("?");
                        if (i = -1 == i ? n.length : i, "base.js" == n.substr(i - 7, 7)) {
                            goog.basePath = n.substr(0, i - 7);
                            break
                        }
                    }
                }
            }, goog.findBasePath_(), goog.Transpiler = function() {
                this.requiresTranspilation_ = null, this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE
            }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
                function a(t, r) {
                    e ? d[t] = !0 : r() ? (c = t, d[t] = !1) : e = d[t] = !0
                }

                function b(a) {
                    try {
                        return !!eval(a)
                    } catch (h) {
                        return !1
                    }
                }
                var c = "es3",
                    d = {
                        es3: !1
                    },
                    e = !1,
                    f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
                return a("es5", function() {
                    return b("[1,].length==1")
                }), a("es6", function() {
                    return !f.match(/Edge\/(\d+)(\.\d)*/i) && b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')
                }), a("es7", function() {
                    return b("2 ** 2 == 4")
                }), a("es8", function() {
                    return b("async () => 1, true")
                }), a("es9", function() {
                    return b("({...rest} = {}), true")
                }), a("es_next", function() {
                    return !1
                }), {
                    target: c,
                    map: d
                }
            }, goog.Transpiler.prototype.needsTranspile = function(t, r) {
                if ("always" == goog.TRANSPILE) return !0;
                if ("never" == goog.TRANSPILE) return !1;
                if (!this.requiresTranspilation_) {
                    var n = this.createRequiresTranspilation_();
                    this.requiresTranspilation_ = n.map, this.transpilationTarget_ = this.transpilationTarget_ || n.target
                }
                if (t in this.requiresTranspilation_) return !!this.requiresTranspilation_[t] || !(!goog.inHtmlDocument_() || "es6" != r || "noModule" in goog.global.document.createElement("script"));
                throw Error("Unknown language mode: " + t)
            }, goog.Transpiler.prototype.transpile = function(t, r) {
                return goog.transpile_(t, r, this.transpilationTarget_)
            }, goog.transpiler_ = new goog.Transpiler, goog.protectScriptTag_ = function(t) {
                return t.replace(/<\/(SCRIPT)/ig, "\\x3c/$1")
            }, goog.DebugLoader_ = function() {
                this.dependencies_ = {}, this.idToPath_ = {}, this.written_ = {}, this.loadingDeps_ = [], this.depsToLoad_ = [], this.paused_ = !1, this.factory_ = new goog.DependencyFactory(goog.transpiler_), this.deferredCallbacks_ = {}, this.deferredQueue_ = []
            }, goog.DebugLoader_.prototype.bootstrap = function(t, r) {
                function n() {
                    i && (goog.global.setTimeout(i, 0), i = null)
                }
                var i = r;
                if (t.length) {
                    r = [];
                    for (var s = 0; s < t.length; s++) {
                        var o = this.getPathFromDeps_(t[s]);
                        if (!o) throw Error("Unregonized namespace: " + t[s]);
                        r.push(this.dependencies_[o])
                    }
                    o = goog.require;
                    var u = 0;
                    for (s = 0; s < t.length; s++) o(t[s]), r[s].onLoad(function() {
                        ++u == t.length && n()
                    })
                } else n()
            }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
                this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, !1)), this.loadDeps_()
            }, goog.DebugLoader_.prototype.requested = function(t, r) {
                (t = this.getPathFromDeps_(t)) && (r || this.areDepsLoaded_(this.dependencies_[t].requires)) && (r = this.deferredCallbacks_[t]) && (delete this.deferredCallbacks_[t], r())
            }, goog.DebugLoader_.prototype.setDependencyFactory = function(t) {
                this.factory_ = t
            }, goog.DebugLoader_.prototype.load_ = function(t) {
                if (this.getPathFromDeps_(t)) {
                    var r = this,
                        n = [],
                        i = function(t) {
                            var s = r.getPathFromDeps_(t);
                            if (!s) throw Error("Bad dependency path or symbol: " + t);
                            if (!r.written_[s]) {
                                for (r.written_[s] = !0, t = r.dependencies_[s], s = 0; s < t.requires.length; s++) goog.isProvided_(t.requires[s]) || i(t.requires[s]);
                                n.push(t)
                            }
                        };
                    i(t), t = !!this.depsToLoad_.length, this.depsToLoad_ = this.depsToLoad_.concat(n), this.paused_ || t || this.loadDeps_()
                } else throw t = "goog.require could not find: " + t, goog.logToConsole_(t), Error(t)
            }, goog.DebugLoader_.prototype.loadDeps_ = function() {
                for (var t = this, r = this.paused_; this.depsToLoad_.length && !r;)(function() {
                    var n = !1,
                        i = t.depsToLoad_.shift(),
                        s = !1;
                    t.loading_(i);
                    var o = {
                        pause: function() {
                            if (n) throw Error("Cannot call pause after the call to load.");
                            r = !0
                        },
                        resume: function() {
                            n ? t.resume_() : r = !1
                        },
                        loaded: function() {
                            if (s) throw Error("Double call to loaded.");
                            s = !0, t.loaded_(i)
                        },
                        pending: function() {
                            for (var r = [], n = 0; n < t.loadingDeps_.length; n++) r.push(t.loadingDeps_[n]);
                            return r
                        },
                        setModuleState: function(t) {
                            goog.moduleLoaderState_ = {
                                type: t,
                                moduleName: "",
                                declareLegacyNamespace: !1
                            }
                        },
                        registerEs6ModuleExports: function(t, r, n) {
                            n && (goog.loadedModules_[n] = {
                                exports: r,
                                type: goog.ModuleType.ES6,
                                moduleId: n || ""
                            })
                        },
                        registerGoogModuleExports: function(t, r) {
                            goog.loadedModules_[t] = {
                                exports: r,
                                type: goog.ModuleType.GOOG,
                                moduleId: t
                            }
                        },
                        clearModuleState: function() {
                            goog.moduleLoaderState_ = null
                        },
                        defer: function(r) {
                            if (n) throw Error("Cannot register with defer after the call to load.");
                            t.defer_(i, r)
                        },
                        areDepsLoaded: function() {
                            return t.areDepsLoaded_(i.requires)
                        }
                    };
                    try {
                        i.load(o)
                    } finally {
                        n = !0
                    }
                })();
                r && this.pause_()
            }, goog.DebugLoader_.prototype.pause_ = function() {
                this.paused_ = !0
            }, goog.DebugLoader_.prototype.resume_ = function() {
                this.paused_ && (this.paused_ = !1, this.loadDeps_())
            }, goog.DebugLoader_.prototype.loading_ = function(t) {
                this.loadingDeps_.push(t)
            }, goog.DebugLoader_.prototype.loaded_ = function(t) {
                for (var r = 0; r < this.loadingDeps_.length; r++)
                    if (this.loadingDeps_[r] == t) {
                        this.loadingDeps_.splice(r, 1);
                        break
                    }
                for (r = 0; r < this.deferredQueue_.length; r++)
                    if (this.deferredQueue_[r] == t.path) {
                        this.deferredQueue_.splice(r, 1);
                        break
                    }
                if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
                    for (; this.deferredQueue_.length;) this.requested(this.deferredQueue_.shift(), !0);
                t.loaded()
            }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(t) {
                for (var r = 0; r < t.length; r++) {
                    var n = this.getPathFromDeps_(t[r]);
                    if (!n || !(n in this.deferredCallbacks_ || goog.isProvided_(t[r]))) return !1
                }
                return !0
            }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(t) {
                return t in this.idToPath_ ? this.idToPath_[t] : t in this.dependencies_ ? t : null
            }, goog.DebugLoader_.prototype.defer_ = function(t, r) {
                this.deferredCallbacks_[t.path] = r, this.deferredQueue_.push(t.path)
            }, goog.LoadController = function() {}, goog.LoadController.prototype.pause = function() {}, goog.LoadController.prototype.resume = function() {}, goog.LoadController.prototype.loaded = function() {}, goog.LoadController.prototype.pending = function() {}, goog.LoadController.prototype.registerEs6ModuleExports = function(t, r, n) {}, goog.LoadController.prototype.setModuleState = function(t) {}, goog.LoadController.prototype.clearModuleState = function() {}, goog.LoadController.prototype.defer = function(t) {}, goog.LoadController.prototype.areDepsLoaded = function() {}, goog.Dependency = function(t, r, n, i, s) {
                this.path = t, this.relativePath = r, this.provides = n, this.requires = i, this.loadFlags = s, this.loaded_ = !1, this.loadCallbacks_ = []
            }, goog.Dependency.prototype.getPathName = function() {
                var t = this.path,
                    r = t.indexOf("://");
                return 0 <= r && 0 <= (r = (t = t.substring(r + 3)).indexOf("/")) && (t = t.substring(r + 1)), t
            }, goog.Dependency.prototype.onLoad = function(t) {
                this.loaded_ ? t() : this.loadCallbacks_.push(t)
            }, goog.Dependency.prototype.loaded = function() {
                this.loaded_ = !0;
                var t = this.loadCallbacks_;
                this.loadCallbacks_ = [];
                for (var r = 0; r < t.length; r++) t[r]()
            }, goog.Dependency.defer_ = !1, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(t) {
                var r = Math.random().toString(32);
                return goog.Dependency.callbackMap_[r] = t, r
            }, goog.Dependency.unregisterCallback_ = function(t) {
                delete goog.Dependency.callbackMap_[t]
            }, goog.Dependency.callback_ = function(t, r) {
                if (t in goog.Dependency.callbackMap_) {
                    for (var n = goog.Dependency.callbackMap_[t], i = [], s = 1; s < arguments.length; s++) i.push(arguments[s]);
                    n.apply(void 0, i)
                } else throw Error("Callback key " + t + " does not exist (was base.js loaded more than once?).")
            }, goog.Dependency.prototype.load = function(t) {
                if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? t.loaded() : t.pause();
                else if (goog.inHtmlDocument_()) {
                    var r = goog.global.document;
                    if ("complete" == r.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
                        if (/\bdeps.js$/.test(this.path)) {
                            t.loaded();
                            return
                        }
                        throw Error('Cannot write "' + this.path + '" after document load')
                    }
                    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
                        var n = goog.Dependency.registerCallback_(function(r) {
                                goog.DebugLoader_.IS_OLD_IE_ && "complete" != r.readyState || (goog.Dependency.unregisterCallback_(n), t.loaded())
                            }),
                            i = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
                        i = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + "=\"goog.Dependency.callback_('" + n + '\', this)" type="text/javascript" ' + (goog.Dependency.defer_ ? "defer" : "") + i + "></script>", r.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(i) : i)
                    } else {
                        var s = r.createElement("script");
                        s.defer = goog.Dependency.defer_, s.async = !1, s.type = "text/javascript", (i = goog.getScriptNonce()) && s.setAttribute("nonce", i), goog.DebugLoader_.IS_OLD_IE_ ? (t.pause(), s.onreadystatechange = function() {
                            ("loaded" == s.readyState || "complete" == s.readyState) && (t.loaded(), t.resume())
                        }) : s.onload = function() {
                            s.onload = null, t.loaded()
                        }, s.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path, r.head.appendChild(s)
                    }
                } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), t.loaded()) : t.pause()
            }, goog.Es6ModuleDependency = function(t, r, n, i, s) {
                goog.Dependency.call(this, t, r, n, i, s)
            }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(t) {
                function r(t, r) {
                    t = r ? '<script type="module" crossorigin>' + r + "</script>" : '<script type="module" crossorigin src="' + t + '"></script>', i.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(t) : t)
                }

                function n(t, r) {
                    var n = i.createElement("script");
                    n.defer = !0, n.async = !1, n.type = "module", n.setAttribute("crossorigin", !0);
                    var s = goog.getScriptNonce();
                    s && n.setAttribute("nonce", s), r ? n.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(r) : r : n.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(t) : t, i.head.appendChild(n)
                }
                if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? t.loaded() : t.pause();
                else if (goog.inHtmlDocument_()) {
                    var i = goog.global.document,
                        s = this;
                    if (goog.isDocumentLoading_()) {
                        var o = r;
                        goog.Dependency.defer_ = !0
                    } else o = n;
                    var u = goog.Dependency.registerCallback_(function() {
                        goog.Dependency.unregisterCallback_(u), t.setModuleState(goog.ModuleType.ES6)
                    });
                    o(void 0, 'goog.Dependency.callback_("' + u + '")'), o(this.path, void 0);
                    var p = goog.Dependency.registerCallback_(function(r) {
                        goog.Dependency.unregisterCallback_(p), t.registerEs6ModuleExports(s.path, r, goog.moduleLoaderState_.moduleName)
                    });
                    o(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + p + '", m)');
                    var y = goog.Dependency.registerCallback_(function() {
                        goog.Dependency.unregisterCallback_(y), t.clearModuleState(), t.loaded()
                    });
                    o(void 0, 'goog.Dependency.callback_("' + y + '")')
                } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), t.pause()
            }, goog.TransformedDependency = function(t, r, n, i, s) {
                goog.Dependency.call(this, t, r, n, i, s), this.contents_ = null, this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"))
            }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(t) {
                function r() {
                    s.contents_ = goog.loadFileSync_(s.path), s.contents_ && (s.contents_ = s.transform(s.contents_), s.contents_ && (s.contents_ += "\n//# sourceURL=" + s.path))
                }

                function n() {
                    if (s.lazyFetch_ && r(), s.contents_) {
                        o && t.setModuleState(goog.ModuleType.ES6);
                        try {
                            var n = s.contents_;
                            if (s.contents_ = null, goog.globalEval(n), o) var i = goog.moduleLoaderState_.moduleName
                        } finally {
                            o && t.clearModuleState()
                        }
                        o && goog.global.$jscomp.require.ensure([s.getPathName()], function() {
                            t.registerEs6ModuleExports(s.path, goog.global.$jscomp.require(s.getPathName()), i)
                        }), t.loaded()
                    }
                }

                function i() {
                    var t = goog.global.document,
                        r = goog.Dependency.registerCallback_(function() {
                            goog.Dependency.unregisterCallback_(r), n()
                        }),
                        i = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + r + '");') + "</script>";
                    t.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(i) : i)
                }
                var s = this;
                if (goog.global.CLOSURE_IMPORT_SCRIPT) r(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, t.loaded()) : t.pause();
                else {
                    var o = this.loadFlags.module == goog.ModuleType.ES6;
                    this.lazyFetch_ || r();
                    var u = 1 < t.pending().length,
                        p = u && goog.DebugLoader_.IS_OLD_IE_;
                    if (u = goog.Dependency.defer_ && (u || goog.isDocumentLoading_()), p || u) t.defer(function() {
                        n()
                    });
                    else {
                        var y = goog.global.document;
                        if (p = goog.inHtmlDocument_() && "ActiveXObject" in goog.global, o && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !p) {
                            goog.Dependency.defer_ = !0, t.pause();
                            var _ = y.onreadystatechange;
                            y.onreadystatechange = function() {
                                "interactive" == y.readyState && (y.onreadystatechange = _, n(), t.resume()), goog.isFunction(_) && _.apply(void 0, arguments)
                            }
                        } else !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? i() : n()
                    }
                }
            }, goog.TransformedDependency.prototype.transform = function(t) {}, goog.TranspiledDependency = function(t, r, n, i, s, o) {
                goog.TransformedDependency.call(this, t, r, n, i, s), this.transpiler = o
            }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(t) {
                return this.transpiler.transpile(t, this.getPathName())
            }, goog.PreTranspiledEs6ModuleDependency = function(t, r, n, i, s) {
                goog.TransformedDependency.call(this, t, r, n, i, s)
            }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(t) {
                return t
            }, goog.GoogModuleDependency = function(t, r, n, i, s, o, u) {
                goog.TransformedDependency.call(this, t, r, n, i, s), this.needsTranspile_ = o, this.transpiler_ = u
            }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(t) {
                return this.needsTranspile_ && (t = this.transpiler_.transpile(t, this.getPathName())), goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(t + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + t + "\n;return exports});\n//# sourceURL=" + this.path + "\n"
            }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(t, r, n, i) {
                r = r || [], t = t.replace(/\\/g, "/");
                var s = goog.normalizePath_(goog.basePath + t);
                for (i && "boolean" != typeof i || (i = i ? {
                        module: goog.ModuleType.GOOG
                    } : {}), n = this.factory_.createDependency(s, t, r, n, i, goog.transpiler_.needsTranspile(i.lang || "es3", i.module)), this.dependencies_[s] = n, n = 0; n < r.length; n++) this.idToPath_[r[n]] = s;
                this.idToPath_[t] = s
            }, goog.DependencyFactory = function(t) {
                this.transpiler = t
            }, goog.DependencyFactory.prototype.createDependency = function(t, r, n, i, s, o) {
                return s.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(t, r, n, i, s, o, this.transpiler) : o ? new goog.TranspiledDependency(t, r, n, i, s, this.transpiler) : s.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(t, r, n, i, s) : new goog.Es6ModuleDependency(t, r, n, i, s) : new goog.Dependency(t, r, n, i, s)
            }, goog.debugLoader_ = new goog.DebugLoader_, goog.loadClosureDeps = function() {
                goog.debugLoader_.loadClosureDeps()
            }, goog.setDependencyFactory = function(t) {
                goog.debugLoader_.setDependencyFactory(t)
            }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(t, r) {
                goog.debugLoader_.bootstrap(t, r)
            }), goog.TRUSTED_TYPES_POLICY_NAME = "", goog.identity_ = function(t) {
                return t
            }, goog.createTrustedTypesPolicy = function(t) {
                var r = null,
                    n = goog.global.trustedTypes || goog.global.TrustedTypes;
                if (!n || !n.createPolicy) return r;
                try {
                    r = n.createPolicy(t, {
                        createHTML: goog.identity_,
                        createScript: goog.identity_,
                        createScriptURL: goog.identity_,
                        createURL: goog.identity_
                    })
                } catch (t) {
                    goog.logToConsole_(t.message)
                }
                return r
            }, goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null, goog.object = {}, goog.object.is = function(t, r) {
                return t === r ? 0 !== t || 1 / t == 1 / r : t != t && r != r
            }, goog.object.forEach = function(t, r, n) {
                for (var i in t) r.call(n, t[i], i, t)
            }, goog.object.filter = function(t, r, n) {
                var i, s = {};
                for (i in t) r.call(n, t[i], i, t) && (s[i] = t[i]);
                return s
            }, goog.object.map = function(t, r, n) {
                var i, s = {};
                for (i in t) s[i] = r.call(n, t[i], i, t);
                return s
            }, goog.object.some = function(t, r, n) {
                for (var i in t)
                    if (r.call(n, t[i], i, t)) return !0;
                return !1
            }, goog.object.every = function(t, r, n) {
                for (var i in t)
                    if (!r.call(n, t[i], i, t)) return !1;
                return !0
            }, goog.object.getCount = function(t) {
                var r, n = 0;
                for (r in t) n++;
                return n
            }, goog.object.getAnyKey = function(t) {
                for (var r in t) return r
            }, goog.object.getAnyValue = function(t) {
                for (var r in t) return t[r]
            }, goog.object.contains = function(t, r) {
                return goog.object.containsValue(t, r)
            }, goog.object.getValues = function(t) {
                var r, n = [],
                    i = 0;
                for (r in t) n[i++] = t[r];
                return n
            }, goog.object.getKeys = function(t) {
                var r, n = [],
                    i = 0;
                for (r in t) n[i++] = r;
                return n
            }, goog.object.getValueByKeys = function(t, r) {
                var n = goog.isArrayLike(r),
                    i = n ? r : arguments;
                for (n = n ? 0 : 1; n < i.length; n++) {
                    if (null == t) return;
                    t = t[i[n]]
                }
                return t
            }, goog.object.containsKey = function(t, r) {
                return null !== t && r in t
            }, goog.object.containsValue = function(t, r) {
                for (var n in t)
                    if (t[n] == r) return !0;
                return !1
            }, goog.object.findKey = function(t, r, n) {
                for (var i in t)
                    if (r.call(n, t[i], i, t)) return i
            }, goog.object.findValue = function(t, r, n) {
                return (r = goog.object.findKey(t, r, n)) && t[r]
            }, goog.object.isEmpty = function(t) {
                for (var r in t) return !1;
                return !0
            }, goog.object.clear = function(t) {
                for (var r in t) delete t[r]
            }, goog.object.remove = function(t, r) {
                var n;
                return (n = r in t) && delete t[r], n
            }, goog.object.add = function(t, r, n) {
                if (null !== t && r in t) throw Error('The object already contains the key "' + r + '"');
                goog.object.set(t, r, n)
            }, goog.object.get = function(t, r, n) {
                return null !== t && r in t ? t[r] : n
            }, goog.object.set = function(t, r, n) {
                t[r] = n
            }, goog.object.setIfUndefined = function(t, r, n) {
                return r in t ? t[r] : t[r] = n
            }, goog.object.setWithReturnValueIfNotSet = function(t, r, n) {
                return r in t ? t[r] : (n = n(), t[r] = n)
            }, goog.object.equals = function(t, r) {
                for (var n in t)
                    if (!(n in r) || t[n] !== r[n]) return !1;
                for (var i in r)
                    if (!(i in t)) return !1;
                return !0
            }, goog.object.clone = function(t) {
                var r, n = {};
                for (r in t) n[r] = t[r];
                return n
            }, goog.object.unsafeClone = function(t) {
                var r = goog.typeOf(t);
                if ("object" == r || "array" == r) {
                    if (goog.isFunction(t.clone)) return t.clone();
                    for (var n in r = "array" == r ? [] : {}, t) r[n] = goog.object.unsafeClone(t[n]);
                    return r
                }
                return t
            }, goog.object.transpose = function(t) {
                var r, n = {};
                for (r in t) n[t[r]] = r;
                return n
            }, goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.object.extend = function(t, r) {
                for (var n, i, s = 1; s < arguments.length; s++) {
                    for (n in i = arguments[s]) t[n] = i[n];
                    for (var o = 0; o < goog.object.PROTOTYPE_FIELDS_.length; o++) n = goog.object.PROTOTYPE_FIELDS_[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
            }, goog.object.create = function(t) {
                var r = arguments.length;
                if (1 == r && Array.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
                if (r % 2) throw Error("Uneven number of arguments");
                for (var n = {}, i = 0; i < r; i += 2) n[arguments[i]] = arguments[i + 1];
                return n
            }, goog.object.createSet = function(t) {
                var r = arguments.length;
                if (1 == r && Array.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
                for (var n = {}, i = 0; i < r; i++) n[arguments[i]] = !0;
                return n
            }, goog.object.createImmutableView = function(t) {
                var r = t;
                return Object.isFrozen && !Object.isFrozen(t) && Object.freeze(r = Object.create(t)), r
            }, goog.object.isImmutableView = function(t) {
                return !!Object.isFrozen && Object.isFrozen(t)
            }, goog.object.getAllPropertyNames = function(t, r, n) {
                if (!t) return [];
                if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return goog.object.getKeys(t);
                for (var i = {}; t && (t !== Object.prototype || r) && (t !== Function.prototype || n);) {
                    for (var s = Object.getOwnPropertyNames(t), o = 0; o < s.length; o++) i[s[o]] = !0;
                    t = Object.getPrototypeOf(t)
                }
                return goog.object.getKeys(i)
            }, goog.object.getSuperClass = function(t) {
                return (t = Object.getPrototypeOf(t.prototype)) && t.constructor
            };
            var jspb = {
                asserts: {}
            };
            jspb.asserts.doAssertFailure = function(t, r, n, i) {
                var s = "Assertion failed";
                if (n) {
                    s += ": " + n;
                    var o = i
                } else t && (s += ": " + t, o = r);
                throw Error("" + s, o || [])
            }, jspb.asserts.assert = function(t, r, n) {
                for (var i = [], s = 2; s < arguments.length; ++s) i[s - 2] = arguments[s];
                return t || jspb.asserts.doAssertFailure("", null, r, i), t
            }, jspb.asserts.assertString = function(t, r, n) {
                for (var i = [], s = 2; s < arguments.length; ++s) i[s - 2] = arguments[s];
                return "string" != typeof t && jspb.asserts.doAssertFailure("Expected string but got %s: %s.", [goog.typeOf(t), t], r, i), t
            }, jspb.asserts.assertArray = function(t, r, n) {
                for (var i = [], s = 2; s < arguments.length; ++s) i[s - 2] = arguments[s];
                return Array.isArray(t) || jspb.asserts.doAssertFailure("Expected array but got %s: %s.", [goog.typeOf(t), t], r, i), t
            }, jspb.asserts.fail = function(t, r) {
                for (var n = [], i = 1; i < arguments.length; ++i) n[i - 1] = arguments[i];
                throw Error("Failure" + (t ? ": " + t : ""), n)
            }, jspb.asserts.assertInstanceof = function(t, r, n, i) {
                for (var s = [], o = 3; o < arguments.length; ++o) s[o - 3] = arguments[o];
                return t instanceof r || jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.", [jspb.asserts.getType(r), jspb.asserts.getType(t)], n, s), t
            }, jspb.asserts.getType = function(t) {
                return t instanceof Function ? t.displayName || t.name || "unknown type name" : t instanceof Object ? t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t) : null === t ? "null" : typeof t
            }, jspb.BinaryConstants = {}, jspb.ConstBinaryMessage = function() {}, jspb.BinaryMessage = function() {}, jspb.BinaryConstants.FieldType = {
                INVALID: -1,
                DOUBLE: 1,
                FLOAT: 2,
                INT64: 3,
                UINT64: 4,
                INT32: 5,
                FIXED64: 6,
                FIXED32: 7,
                BOOL: 8,
                STRING: 9,
                GROUP: 10,
                MESSAGE: 11,
                BYTES: 12,
                UINT32: 13,
                ENUM: 14,
                SFIXED32: 15,
                SFIXED64: 16,
                SINT32: 17,
                SINT64: 18,
                FHASH64: 30,
                VHASH64: 31
            }, jspb.BinaryConstants.WireType = {
                INVALID: -1,
                VARINT: 0,
                FIXED64: 1,
                DELIMITED: 2,
                START_GROUP: 3,
                END_GROUP: 4,
                FIXED32: 5
            }, jspb.BinaryConstants.FieldTypeToWireType = function(t) {
                var r = jspb.BinaryConstants.FieldType,
                    n = jspb.BinaryConstants.WireType;
                switch (t) {
                    case r.INT32:
                    case r.INT64:
                    case r.UINT32:
                    case r.UINT64:
                    case r.SINT32:
                    case r.SINT64:
                    case r.BOOL:
                    case r.ENUM:
                    case r.VHASH64:
                        return n.VARINT;
                    case r.DOUBLE:
                    case r.FIXED64:
                    case r.SFIXED64:
                    case r.FHASH64:
                        return n.FIXED64;
                    case r.STRING:
                    case r.MESSAGE:
                    case r.BYTES:
                        return n.DELIMITED;
                    case r.FLOAT:
                    case r.FIXED32:
                    case r.SFIXED32:
                        return n.FIXED32;
                    default:
                        return n.INVALID
                }
            }, jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1, jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60, jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54, jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22, jspb.BinaryConstants.FLOAT64_EPS = 5e-324, jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324, jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292, jspb.BinaryConstants.TWO_TO_20 = 1048576, jspb.BinaryConstants.TWO_TO_23 = 8388608, jspb.BinaryConstants.TWO_TO_31 = 2147483648, jspb.BinaryConstants.TWO_TO_32 = 4294967296, jspb.BinaryConstants.TWO_TO_52 = 4503599627370496, jspb.BinaryConstants.TWO_TO_63 = 0x7fffffffffffffff, jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3, jspb.BinaryConstants.ZERO_HASH = "\x00\x00\x00\x00\x00\x00\x00\x00", goog.debug = {}, goog.debug.Error = function(t) {
                if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error);
                else {
                    var r = Error().stack;
                    r && (this.stack = r)
                }
                t && (this.message = String(t)), this.reportErrorToServer = !0
            }, goog.inherits(goog.debug.Error, Error), goog.debug.Error.prototype.name = "CustomError", goog.dom = {}, goog.dom.NodeType = {
                ELEMENT: 1,
                ATTRIBUTE: 2,
                TEXT: 3,
                CDATA_SECTION: 4,
                ENTITY_REFERENCE: 5,
                ENTITY: 6,
                PROCESSING_INSTRUCTION: 7,
                COMMENT: 8,
                DOCUMENT: 9,
                DOCUMENT_TYPE: 10,
                DOCUMENT_FRAGMENT: 11,
                NOTATION: 12
            }, goog.asserts = {}, goog.asserts.ENABLE_ASSERTS = goog.DEBUG, goog.asserts.AssertionError = function(t, r) {
                goog.debug.Error.call(this, goog.asserts.subs_(t, r)), this.messagePattern = t
            }, goog.inherits(goog.asserts.AssertionError, goog.debug.Error), goog.asserts.AssertionError.prototype.name = "AssertionError", goog.asserts.DEFAULT_ERROR_HANDLER = function(t) {
                throw t
            }, goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER, goog.asserts.subs_ = function(t, r) {
                t = t.split("%s");
                for (var n = "", i = t.length - 1, s = 0; s < i; s++) n += t[s] + (s < r.length ? r[s] : "%s");
                return n + t[i]
            }, goog.asserts.doAssertFailure_ = function(t, r, n, i) {
                var s = "Assertion failed";
                if (n) {
                    s += ": " + n;
                    var o = i
                } else t && (s += ": " + t, o = r);
                t = new goog.asserts.AssertionError("" + s, o || []), goog.asserts.errorHandler_(t)
            }, goog.asserts.setErrorHandler = function(t) {
                goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = t)
            }, goog.asserts.assert = function(t, r, n) {
                return goog.asserts.ENABLE_ASSERTS && !t && goog.asserts.doAssertFailure_("", null, r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertExists = function(t, r, n) {
                return goog.asserts.ENABLE_ASSERTS && null == t && goog.asserts.doAssertFailure_("Expected to exist: %s.", [t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.fail = function(t, r) {
                goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1)))
            }, goog.asserts.assertNumber = function(t, r, n) {
                return goog.asserts.ENABLE_ASSERTS && "number" != typeof t && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(t), t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertString = function(t, r, n) {
                return goog.asserts.ENABLE_ASSERTS && "string" != typeof t && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(t), t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertFunction = function(t, r, n) {
                return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(t) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(t), t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertObject = function(t, r, n) {
                return goog.asserts.ENABLE_ASSERTS && !goog.isObject(t) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(t), t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertArray = function(t, r, n) {
                return goog.asserts.ENABLE_ASSERTS && !Array.isArray(t) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(t), t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertBoolean = function(t, r, n) {
                return goog.asserts.ENABLE_ASSERTS && "boolean" != typeof t && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(t), t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertElement = function(t, r, n) {
                return !goog.asserts.ENABLE_ASSERTS || goog.isObject(t) && t.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(t), t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertInstanceof = function(t, r, n, i) {
                return !goog.asserts.ENABLE_ASSERTS || t instanceof r || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(r), goog.asserts.getType_(t)], n, Array.prototype.slice.call(arguments, 3)), t
            }, goog.asserts.assertFinite = function(t, r, n) {
                return !goog.asserts.ENABLE_ASSERTS || "number" == typeof t && isFinite(t) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [t], r, Array.prototype.slice.call(arguments, 2)), t
            }, goog.asserts.assertObjectPrototypeIsIntact = function() {
                for (var t in Object.prototype) goog.asserts.fail(t + " should not be enumerable in Object.prototype.")
            }, goog.asserts.getType_ = function(t) {
                return t instanceof Function ? t.displayName || t.name || "unknown type name" : t instanceof Object ? t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t) : null === t ? "null" : typeof t
            }, goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR, goog.array.peek = function(t) {
                return t[t.length - 1]
            }, goog.array.last = goog.array.peek, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(t, r, n) {
                return goog.asserts.assert(null != t.length), Array.prototype.indexOf.call(t, r, n)
            } : function(t, r, n) {
                if (n = null == n ? 0 : 0 > n ? Math.max(0, t.length + n) : n, "string" == typeof t) return "string" != typeof r || 1 != r.length ? -1 : t.indexOf(r, n);
                for (; n < t.length; n++)
                    if (n in t && t[n] === r) return n;
                return -1
            }, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(t, r, n) {
                return goog.asserts.assert(null != t.length), Array.prototype.lastIndexOf.call(t, r, null == n ? t.length - 1 : n)
            } : function(t, r, n) {
                if (0 > (n = null == n ? t.length - 1 : n) && (n = Math.max(0, t.length + n)), "string" == typeof t) return "string" != typeof r || 1 != r.length ? -1 : t.lastIndexOf(r, n);
                for (; 0 <= n; n--)
                    if (n in t && t[n] === r) return n;
                return -1
            }, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(t, r, n) {
                goog.asserts.assert(null != t.length), Array.prototype.forEach.call(t, r, n)
            } : function(t, r, n) {
                for (var i = t.length, s = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++) o in s && r.call(n, s[o], o, t)
            }, goog.array.forEachRight = function(t, r, n) {
                var i = t.length,
                    s = "string" == typeof t ? t.split("") : t;
                for (--i; 0 <= i; --i) i in s && r.call(n, s[i], i, t)
            }, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(t, r, n) {
                return goog.asserts.assert(null != t.length), Array.prototype.filter.call(t, r, n)
            } : function(t, r, n) {
                for (var i = t.length, s = [], o = 0, u = "string" == typeof t ? t.split("") : t, p = 0; p < i; p++)
                    if (p in u) {
                        var y = u[p];
                        r.call(n, y, p, t) && (s[o++] = y)
                    }
                return s
            }, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(t, r, n) {
                return goog.asserts.assert(null != t.length), Array.prototype.map.call(t, r, n)
            } : function(t, r, n) {
                for (var i = t.length, s = Array(i), o = "string" == typeof t ? t.split("") : t, u = 0; u < i; u++) u in o && (s[u] = r.call(n, o[u], u, t));
                return s
            }, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(t, r, n, i) {
                return goog.asserts.assert(null != t.length), i && (r = goog.bind(r, i)), Array.prototype.reduce.call(t, r, n)
            } : function(t, r, n, i) {
                var s = n;
                return goog.array.forEach(t, function(n, o) {
                    s = r.call(i, s, n, o, t)
                }), s
            }, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(t, r, n, i) {
                return goog.asserts.assert(null != t.length), goog.asserts.assert(null != r), i && (r = goog.bind(r, i)), Array.prototype.reduceRight.call(t, r, n)
            } : function(t, r, n, i) {
                var s = n;
                return goog.array.forEachRight(t, function(n, o) {
                    s = r.call(i, s, n, o, t)
                }), s
            }, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(t, r, n) {
                return goog.asserts.assert(null != t.length), Array.prototype.some.call(t, r, n)
            } : function(t, r, n) {
                for (var i = t.length, s = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++)
                    if (o in s && r.call(n, s[o], o, t)) return !0;
                return !1
            }, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(t, r, n) {
                return goog.asserts.assert(null != t.length), Array.prototype.every.call(t, r, n)
            } : function(t, r, n) {
                for (var i = t.length, s = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++)
                    if (o in s && !r.call(n, s[o], o, t)) return !1;
                return !0
            }, goog.array.count = function(t, r, n) {
                var i = 0;
                return goog.array.forEach(t, function(t, s, o) {
                    r.call(n, t, s, o) && ++i
                }, n), i
            }, goog.array.find = function(t, r, n) {
                return 0 > (r = goog.array.findIndex(t, r, n)) ? null : "string" == typeof t ? t.charAt(r) : t[r]
            }, goog.array.findIndex = function(t, r, n) {
                for (var i = t.length, s = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++)
                    if (o in s && r.call(n, s[o], o, t)) return o;
                return -1
            }, goog.array.findRight = function(t, r, n) {
                return 0 > (r = goog.array.findIndexRight(t, r, n)) ? null : "string" == typeof t ? t.charAt(r) : t[r]
            }, goog.array.findIndexRight = function(t, r, n) {
                var i = t.length,
                    s = "string" == typeof t ? t.split("") : t;
                for (--i; 0 <= i; i--)
                    if (i in s && r.call(n, s[i], i, t)) return i;
                return -1
            }, goog.array.contains = function(t, r) {
                return 0 <= goog.array.indexOf(t, r)
            }, goog.array.isEmpty = function(t) {
                return 0 == t.length
            }, goog.array.clear = function(t) {
                if (!Array.isArray(t))
                    for (var r = t.length - 1; 0 <= r; r--) delete t[r];
                t.length = 0
            }, goog.array.insert = function(t, r) {
                goog.array.contains(t, r) || t.push(r)
            }, goog.array.insertAt = function(t, r, n) {
                goog.array.splice(t, n, 0, r)
            }, goog.array.insertArrayAt = function(t, r, n) {
                goog.partial(goog.array.splice, t, n, 0).apply(null, r)
            }, goog.array.insertBefore = function(t, r, n) {
                var i;
                2 == arguments.length || 0 > (i = goog.array.indexOf(t, n)) ? t.push(r) : goog.array.insertAt(t, r, i)
            }, goog.array.remove = function(t, r) {
                var n;
                return (n = 0 <= (r = goog.array.indexOf(t, r))) && goog.array.removeAt(t, r), n
            }, goog.array.removeLast = function(t, r) {
                return 0 <= (r = goog.array.lastIndexOf(t, r)) && (goog.array.removeAt(t, r), !0)
            }, goog.array.removeAt = function(t, r) {
                return goog.asserts.assert(null != t.length), 1 == Array.prototype.splice.call(t, r, 1).length
            }, goog.array.removeIf = function(t, r, n) {
                return 0 <= (r = goog.array.findIndex(t, r, n)) && (goog.array.removeAt(t, r), !0)
            }, goog.array.removeAllIf = function(t, r, n) {
                var i = 0;
                return goog.array.forEachRight(t, function(s, o) {
                    r.call(n, s, o, t) && goog.array.removeAt(t, o) && i++
                }), i
            }, goog.array.concat = function(t) {
                return Array.prototype.concat.apply([], arguments)
            }, goog.array.join = function(t) {
                return Array.prototype.concat.apply([], arguments)
            }, goog.array.toArray = function(t) {
                var r = t.length;
                if (0 < r) {
                    for (var n = Array(r), i = 0; i < r; i++) n[i] = t[i];
                    return n
                }
                return []
            }, goog.array.clone = goog.array.toArray, goog.array.extend = function(t, r) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (goog.isArrayLike(i)) {
                        var s = t.length || 0,
                            o = i.length || 0;
                        t.length = s + o;
                        for (var u = 0; u < o; u++) t[s + u] = i[u]
                    } else t.push(i)
                }
            }, goog.array.splice = function(t, r, n, i) {
                return goog.asserts.assert(null != t.length), Array.prototype.splice.apply(t, goog.array.slice(arguments, 1))
            }, goog.array.slice = function(t, r, n) {
                return goog.asserts.assert(null != t.length), 2 >= arguments.length ? Array.prototype.slice.call(t, r) : Array.prototype.slice.call(t, r, n)
            }, goog.array.removeDuplicates = function(t, r, n) {
                r = r || t;
                var i = function(t) {
                    return goog.isObject(t) ? "o" + goog.getUid(t) : (typeof t).charAt(0) + t
                };
                n = n || i, i = {};
                for (var s = 0, o = 0; o < t.length;) {
                    var u = t[o++],
                        p = n(u);
                    Object.prototype.hasOwnProperty.call(i, p) || (i[p] = !0, r[s++] = u)
                }
                r.length = s
            }, goog.array.binarySearch = function(t, r, n) {
                return goog.array.binarySearch_(t, n || goog.array.defaultCompare, !1, r)
            }, goog.array.binarySelect = function(t, r, n) {
                return goog.array.binarySearch_(t, r, !0, void 0, n)
            }, goog.array.binarySearch_ = function(t, r, n, i, s) {
                for (var o, u = 0, p = t.length; u < p;) {
                    var y = u + (p - u >>> 1),
                        _ = n ? r.call(s, t[y], y, t) : r(i, t[y]);
                    0 < _ ? u = y + 1 : (p = y, o = !_)
                }
                return o ? u : -u - 1
            }, goog.array.sort = function(t, r) {
                t.sort(r || goog.array.defaultCompare)
            }, goog.array.stableSort = function(t, r) {
                for (var n = Array(t.length), i = 0; i < t.length; i++) n[i] = {
                    index: i,
                    value: t[i]
                };
                var s = r || goog.array.defaultCompare;
                for (goog.array.sort(n, function(t, r) {
                        return s(t.value, r.value) || t.index - r.index
                    }), i = 0; i < t.length; i++) t[i] = n[i].value
            }, goog.array.sortByKey = function(t, r, n) {
                var i = n || goog.array.defaultCompare;
                goog.array.sort(t, function(t, n) {
                    return i(r(t), r(n))
                })
            }, goog.array.sortObjectsByKey = function(t, r, n) {
                goog.array.sortByKey(t, function(t) {
                    return t[r]
                }, n)
            }, goog.array.isSorted = function(t, r, n) {
                r = r || goog.array.defaultCompare;
                for (var i = 1; i < t.length; i++) {
                    var s = r(t[i - 1], t[i]);
                    if (0 < s || 0 == s && n) return !1
                }
                return !0
            }, goog.array.equals = function(t, r, n) {
                if (!goog.isArrayLike(t) || !goog.isArrayLike(r) || t.length != r.length) return !1;
                var i = t.length;
                n = n || goog.array.defaultCompareEquality;
                for (var s = 0; s < i; s++)
                    if (!n(t[s], r[s])) return !1;
                return !0
            }, goog.array.compare3 = function(t, r, n) {
                n = n || goog.array.defaultCompare;
                for (var i = Math.min(t.length, r.length), s = 0; s < i; s++) {
                    var o = n(t[s], r[s]);
                    if (0 != o) return o
                }
                return goog.array.defaultCompare(t.length, r.length)
            }, goog.array.defaultCompare = function(t, r) {
                return t > r ? 1 : t < r ? -1 : 0
            }, goog.array.inverseDefaultCompare = function(t, r) {
                return -goog.array.defaultCompare(t, r)
            }, goog.array.defaultCompareEquality = function(t, r) {
                return t === r
            }, goog.array.binaryInsert = function(t, r, n) {
                return 0 > (n = goog.array.binarySearch(t, r, n)) && (goog.array.insertAt(t, r, -(n + 1)), !0)
            }, goog.array.binaryRemove = function(t, r, n) {
                return 0 <= (r = goog.array.binarySearch(t, r, n)) && goog.array.removeAt(t, r)
            }, goog.array.bucket = function(t, r, n) {
                for (var i = {}, s = 0; s < t.length; s++) {
                    var o = t[s],
                        u = r.call(n, o, s, t);
                    void 0 !== u && (i[u] || (i[u] = [])).push(o)
                }
                return i
            }, goog.array.toObject = function(t, r, n) {
                var i = {};
                return goog.array.forEach(t, function(s, o) {
                    i[r.call(n, s, o, t)] = s
                }), i
            }, goog.array.range = function(t, r, n) {
                var i = [],
                    s = 0,
                    o = t;
                if (n = n || 1, void 0 !== r && (s = t, o = r), 0 > n * (o - s)) return [];
                if (0 < n)
                    for (t = s; t < o; t += n) i.push(t);
                else
                    for (t = s; t > o; t += n) i.push(t);
                return i
            }, goog.array.repeat = function(t, r) {
                for (var n = [], i = 0; i < r; i++) n[i] = t;
                return n
            }, goog.array.flatten = function(t) {
                for (var r = [], n = 0; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (Array.isArray(i))
                        for (var s = 0; s < i.length; s += 8192) {
                            var o = goog.array.slice(i, s, s + 8192);
                            o = goog.array.flatten.apply(null, o);
                            for (var u = 0; u < o.length; u++) r.push(o[u])
                        } else r.push(i)
                }
                return r
            }, goog.array.rotate = function(t, r) {
                return goog.asserts.assert(null != t.length), t.length && (0 < (r %= t.length) ? Array.prototype.unshift.apply(t, t.splice(-r, r)) : 0 > r && Array.prototype.push.apply(t, t.splice(0, -r))), t
            }, goog.array.moveItem = function(t, r, n) {
                goog.asserts.assert(0 <= r && r < t.length), goog.asserts.assert(0 <= n && n < t.length), r = Array.prototype.splice.call(t, r, 1), Array.prototype.splice.call(t, n, 0, r[0])
            }, goog.array.zip = function(t) {
                if (!arguments.length) return [];
                for (var r = [], n = arguments[0].length, i = 1; i < arguments.length; i++) arguments[i].length < n && (n = arguments[i].length);
                for (i = 0; i < n; i++) {
                    for (var s = [], o = 0; o < arguments.length; o++) s.push(arguments[o][i]);
                    r.push(s)
                }
                return r
            }, goog.array.shuffle = function(t, r) {
                r = r || Math.random;
                for (var n = t.length - 1; 0 < n; n--) {
                    var i = Math.floor(r() * (n + 1)),
                        s = t[n];
                    t[n] = t[i], t[i] = s
                }
            }, goog.array.copyByIndex = function(t, r) {
                var n = [];
                return goog.array.forEach(r, function(r) {
                    n.push(t[r])
                }), n
            }, goog.array.concatMap = function(t, r, n) {
                return goog.array.concat.apply([], goog.array.map(t, r, n))
            }, goog.crypt = {}, goog.crypt.stringToByteArray = function(t) {
                for (var r = [], n = 0, i = 0; i < t.length; i++) {
                    var s = t.charCodeAt(i);
                    255 < s && (r[n++] = 255 & s, s >>= 8), r[n++] = s
                }
                return r
            }, goog.crypt.byteArrayToString = function(t) {
                if (8192 >= t.length) return String.fromCharCode.apply(null, t);
                for (var r = "", n = 0; n < t.length; n += 8192) {
                    var i = goog.array.slice(t, n, n + 8192);
                    r += String.fromCharCode.apply(null, i)
                }
                return r
            }, goog.crypt.byteArrayToHex = function(t, r) {
                return goog.array.map(t, function(t) {
                    return 1 < (t = t.toString(16)).length ? t : "0" + t
                }).join(r || "")
            }, goog.crypt.hexToByteArray = function(t) {
                goog.asserts.assert(0 == t.length % 2, "Key string length must be multiple of 2");
                for (var r = [], n = 0; n < t.length; n += 2) r.push(parseInt(t.substring(n, n + 2), 16));
                return r
            }, goog.crypt.stringToUtf8ByteArray = function(t) {
                for (var r = [], n = 0, i = 0; i < t.length; i++) {
                    var s = t.charCodeAt(i);
                    128 > s ? r[n++] = s : (2048 > s ? r[n++] = s >> 6 | 192 : (55296 == (64512 & s) && i + 1 < t.length && 56320 == (64512 & t.charCodeAt(i + 1)) ? (s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i)), r[n++] = s >> 18 | 240, r[n++] = s >> 12 & 63 | 128) : r[n++] = s >> 12 | 224, r[n++] = s >> 6 & 63 | 128), r[n++] = 63 & s | 128)
                }
                return r
            }, goog.crypt.utf8ByteArrayToString = function(t) {
                for (var r = [], n = 0, i = 0; n < t.length;) {
                    var s = t[n++];
                    if (128 > s) r[i++] = String.fromCharCode(s);
                    else if (191 < s && 224 > s) {
                        var o = t[n++];
                        r[i++] = String.fromCharCode((31 & s) << 6 | 63 & o)
                    } else if (239 < s && 365 > s) {
                        o = t[n++];
                        var u = t[n++];
                        s = ((7 & s) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & t[n++]) - 65536, r[i++] = String.fromCharCode(55296 + (s >> 10)), r[i++] = String.fromCharCode(56320 + (1023 & s))
                    } else o = t[n++], u = t[n++], r[i++] = String.fromCharCode((15 & s) << 12 | (63 & o) << 6 | 63 & u)
                }
                return r.join("")
            }, goog.crypt.xorByteArray = function(t, r) {
                goog.asserts.assert(t.length == r.length, "XOR array lengths must match");
                for (var n = [], i = 0; i < t.length; i++) n.push(t[i] ^ r[i]);
                return n
            }, goog.dom.asserts = {}, goog.dom.asserts.assertIsLocation = function(t) {
                if (goog.asserts.ENABLE_ASSERTS) {
                    var r = goog.dom.asserts.getWindow_(t);
                    r && (!t || !(t instanceof r.Location) && t instanceof r.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(t))
                }
                return t
            }, goog.dom.asserts.assertIsElementType_ = function(t, r) {
                if (goog.asserts.ENABLE_ASSERTS) {
                    var n = goog.dom.asserts.getWindow_(t);
                    n && void 0 !== n[r] && (t && (t instanceof n[r] || !(t instanceof n.Location || t instanceof n.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", r, goog.dom.asserts.debugStringForType_(t)))
                }
                return t
            }, goog.dom.asserts.assertIsHTMLAnchorElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLAnchorElement")
            }, goog.dom.asserts.assertIsHTMLButtonElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLButtonElement")
            }, goog.dom.asserts.assertIsHTMLLinkElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLLinkElement")
            }, goog.dom.asserts.assertIsHTMLImageElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLImageElement")
            }, goog.dom.asserts.assertIsHTMLAudioElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLAudioElement")
            }, goog.dom.asserts.assertIsHTMLVideoElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLVideoElement")
            }, goog.dom.asserts.assertIsHTMLInputElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLInputElement")
            }, goog.dom.asserts.assertIsHTMLTextAreaElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLTextAreaElement")
            }, goog.dom.asserts.assertIsHTMLCanvasElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLCanvasElement")
            }, goog.dom.asserts.assertIsHTMLEmbedElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLEmbedElement")
            }, goog.dom.asserts.assertIsHTMLFormElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLFormElement")
            }, goog.dom.asserts.assertIsHTMLFrameElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLFrameElement")
            }, goog.dom.asserts.assertIsHTMLIFrameElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLIFrameElement")
            }, goog.dom.asserts.assertIsHTMLObjectElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLObjectElement")
            }, goog.dom.asserts.assertIsHTMLScriptElement = function(t) {
                return goog.dom.asserts.assertIsElementType_(t, "HTMLScriptElement")
            }, goog.dom.asserts.debugStringForType_ = function(t) {
                if (!goog.isObject(t)) return void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                try {
                    return t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
                } catch (t) {
                    return "<object could not be stringified>"
                }
            }, goog.dom.asserts.getWindow_ = function(t) {
                try {
                    var r = t && t.ownerDocument,
                        n = r && (r.defaultView || r.parentWindow);
                    if ((n = n || goog.global).Element && n.Location) return n
                } catch (t) {}
                return null
            }, goog.functions = {}, goog.functions.constant = function(t) {
                return function() {
                    return t
                }
            }, goog.functions.FALSE = function() {
                return !1
            }, goog.functions.TRUE = function() {
                return !0
            }, goog.functions.NULL = function() {
                return null
            }, goog.functions.identity = function(t, r) {
                return t
            }, goog.functions.error = function(t) {
                return function() {
                    throw Error(t)
                }
            }, goog.functions.fail = function(t) {
                return function() {
                    throw t
                }
            }, goog.functions.lock = function(t, r) {
                return r = r || 0,
                    function() {
                        return t.apply(this, Array.prototype.slice.call(arguments, 0, r))
                    }
            }, goog.functions.nth = function(t) {
                return function() {
                    return arguments[t]
                }
            }, goog.functions.partialRight = function(t, r) {
                var n = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var r = Array.prototype.slice.call(arguments);
                    return r.push.apply(r, n), t.apply(this, r)
                }
            }, goog.functions.withReturnValue = function(t, r) {
                return goog.functions.sequence(t, goog.functions.constant(r))
            }, goog.functions.equalTo = function(t, r) {
                return function(n) {
                    return r ? t == n : t === n
                }
            }, goog.functions.compose = function(t, r) {
                var n = arguments,
                    i = n.length;
                return function() {
                    var t;
                    i && (t = n[i - 1].apply(this, arguments));
                    for (var r = i - 2; 0 <= r; r--) t = n[r].call(this, t);
                    return t
                }
            }, goog.functions.sequence = function(t) {
                var r = arguments,
                    n = r.length;
                return function() {
                    for (var t, i = 0; i < n; i++) t = r[i].apply(this, arguments);
                    return t
                }
            }, goog.functions.and = function(t) {
                var r = arguments,
                    n = r.length;
                return function() {
                    for (var t = 0; t < n; t++)
                        if (!r[t].apply(this, arguments)) return !1;
                    return !0
                }
            }, goog.functions.or = function(t) {
                var r = arguments,
                    n = r.length;
                return function() {
                    for (var t = 0; t < n; t++)
                        if (r[t].apply(this, arguments)) return !0;
                    return !1
                }
            }, goog.functions.not = function(t) {
                return function() {
                    return !t.apply(this, arguments)
                }
            }, goog.functions.create = function(t, r) {
                var n = function() {};
                return n.prototype = t.prototype, n = new n, t.apply(n, Array.prototype.slice.call(arguments, 1)), n
            }, goog.functions.CACHE_RETURN_VALUE = !0, goog.functions.cacheReturnValue = function(t) {
                var r, n = !1;
                return function() {
                    return goog.functions.CACHE_RETURN_VALUE ? (n || (r = t(), n = !0), r) : t()
                }
            }, goog.functions.once = function(t) {
                var r = t;
                return function() {
                    if (r) {
                        var t = r;
                        r = null, t()
                    }
                }
            }, goog.functions.debounce = function(t, r, n) {
                var i = 0;
                return function(s) {
                    goog.global.clearTimeout(i);
                    var o = arguments;
                    i = goog.global.setTimeout(function() {
                        t.apply(n, o)
                    }, r)
                }
            }, goog.functions.throttle = function(t, r, n) {
                var i = 0,
                    s = !1,
                    o = [],
                    u = function() {
                        i = 0, s && (s = !1, p())
                    },
                    p = function() {
                        i = goog.global.setTimeout(u, r), t.apply(n, o)
                    };
                return function(t) {
                    o = arguments, i ? s = !0 : p()
                }
            }, goog.functions.rateLimit = function(t, r, n) {
                var i = 0,
                    s = function() {
                        i = 0
                    };
                return function(o) {
                    i || (i = goog.global.setTimeout(s, r), t.apply(n, arguments))
                }
            }, goog.dom.HtmlElement = function() {}, goog.dom.TagName = function(t) {
                this.tagName_ = t
            }, goog.dom.TagName.prototype.toString = function() {
                return this.tagName_
            }, goog.dom.TagName.A = new goog.dom.TagName("A"), goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR"), goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM"), goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS"), goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET"), goog.dom.TagName.AREA = new goog.dom.TagName("AREA"), goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE"), goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE"), goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO"), goog.dom.TagName.B = new goog.dom.TagName("B"), goog.dom.TagName.BASE = new goog.dom.TagName("BASE"), goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT"), goog.dom.TagName.BDI = new goog.dom.TagName("BDI"), goog.dom.TagName.BDO = new goog.dom.TagName("BDO"), goog.dom.TagName.BIG = new goog.dom.TagName("BIG"), goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE"), goog.dom.TagName.BODY = new goog.dom.TagName("BODY"), goog.dom.TagName.BR = new goog.dom.TagName("BR"), goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON"), goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS"), goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION"), goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER"), goog.dom.TagName.CITE = new goog.dom.TagName("CITE"), goog.dom.TagName.CODE = new goog.dom.TagName("CODE"), goog.dom.TagName.COL = new goog.dom.TagName("COL"), goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP"), goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND"), goog.dom.TagName.DATA = new goog.dom.TagName("DATA"), goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST"), goog.dom.TagName.DD = new goog.dom.TagName("DD"), goog.dom.TagName.DEL = new goog.dom.TagName("DEL"), goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS"), goog.dom.TagName.DFN = new goog.dom.TagName("DFN"), goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG"), goog.dom.TagName.DIR = new goog.dom.TagName("DIR"), goog.dom.TagName.DIV = new goog.dom.TagName("DIV"), goog.dom.TagName.DL = new goog.dom.TagName("DL"), goog.dom.TagName.DT = new goog.dom.TagName("DT"), goog.dom.TagName.EM = new goog.dom.TagName("EM"), goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED"), goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET"), goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION"), goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE"), goog.dom.TagName.FONT = new goog.dom.TagName("FONT"), goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER"), goog.dom.TagName.FORM = new goog.dom.TagName("FORM"), goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME"), goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET"), goog.dom.TagName.H1 = new goog.dom.TagName("H1"), goog.dom.TagName.H2 = new goog.dom.TagName("H2"), goog.dom.TagName.H3 = new goog.dom.TagName("H3"), goog.dom.TagName.H4 = new goog.dom.TagName("H4"), goog.dom.TagName.H5 = new goog.dom.TagName("H5"), goog.dom.TagName.H6 = new goog.dom.TagName("H6"), goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD"), goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER"), goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP"), goog.dom.TagName.HR = new goog.dom.TagName("HR"), goog.dom.TagName.HTML = new goog.dom.TagName("HTML"), goog.dom.TagName.I = new goog.dom.TagName("I"), goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME"), goog.dom.TagName.IMG = new goog.dom.TagName("IMG"), goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT"), goog.dom.TagName.INS = new goog.dom.TagName("INS"), goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX"), goog.dom.TagName.KBD = new goog.dom.TagName("KBD"), goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN"), goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL"), goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND"), goog.dom.TagName.LI = new goog.dom.TagName("LI"), goog.dom.TagName.LINK = new goog.dom.TagName("LINK"), goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN"), goog.dom.TagName.MAP = new goog.dom.TagName("MAP"), goog.dom.TagName.MARK = new goog.dom.TagName("MARK"), goog.dom.TagName.MATH = new goog.dom.TagName("MATH"), goog.dom.TagName.MENU = new goog.dom.TagName("MENU"), goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM"), goog.dom.TagName.META = new goog.dom.TagName("META"), goog.dom.TagName.METER = new goog.dom.TagName("METER"), goog.dom.TagName.NAV = new goog.dom.TagName("NAV"), goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES"), goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT"), goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT"), goog.dom.TagName.OL = new goog.dom.TagName("OL"), goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP"), goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION"), goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT"), goog.dom.TagName.P = new goog.dom.TagName("P"), goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM"), goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE"), goog.dom.TagName.PRE = new goog.dom.TagName("PRE"), goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS"), goog.dom.TagName.Q = new goog.dom.TagName("Q"), goog.dom.TagName.RP = new goog.dom.TagName("RP"), goog.dom.TagName.RT = new goog.dom.TagName("RT"), goog.dom.TagName.RTC = new goog.dom.TagName("RTC"), goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY"), goog.dom.TagName.S = new goog.dom.TagName("S"), goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP"), goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT"), goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION"), goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT"), goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL"), goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE"), goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN"), goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE"), goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG"), goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE"), goog.dom.TagName.SUB = new goog.dom.TagName("SUB"), goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY"), goog.dom.TagName.SUP = new goog.dom.TagName("SUP"), goog.dom.TagName.SVG = new goog.dom.TagName("SVG"), goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE"), goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY"), goog.dom.TagName.TD = new goog.dom.TagName("TD"), goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE"), goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA"), goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT"), goog.dom.TagName.TH = new goog.dom.TagName("TH"), goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD"), goog.dom.TagName.TIME = new goog.dom.TagName("TIME"), goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE"), goog.dom.TagName.TR = new goog.dom.TagName("TR"), goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK"), goog.dom.TagName.TT = new goog.dom.TagName("TT"), goog.dom.TagName.U = new goog.dom.TagName("U"), goog.dom.TagName.UL = new goog.dom.TagName("UL"), goog.dom.TagName.VAR = new goog.dom.TagName("VAR"), goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO"), goog.dom.TagName.WBR = new goog.dom.TagName("WBR"), goog.dom.tags = {}, goog.dom.tags.VOID_TAGS_ = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }, goog.dom.tags.isVoidTag = function(t) {
                return !0 === goog.dom.tags.VOID_TAGS_[t]
            }, goog.html = {}, goog.html.trustedtypes = {}, goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null, goog.string = {}, goog.string.TypedString = function() {}, goog.string.Const = function(t, r) {
                this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = t === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && r || "", this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_
            }, goog.string.Const.prototype.implementsGoogStringTypedString = !0, goog.string.Const.prototype.getTypedStringValue = function() {
                return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_
            }, goog.DEBUG && (goog.string.Const.prototype.toString = function() {
                return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}"
            }), goog.string.Const.unwrap = function(t) {
                return t instanceof goog.string.Const && t.constructor === goog.string.Const && t.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_ ? t.stringConstValueWithSecurityContract__googStringSecurityPrivate_ : (goog.asserts.fail("expected object of type Const, got '" + t + "'"), "type_error:Const")
            }, goog.string.Const.from = function(t) {
                return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, t)
            }, goog.string.Const.TYPE_MARKER_ = {}, goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {}, goog.string.Const.EMPTY = goog.string.Const.from(""), goog.html.SafeScript = function() {
                this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "", this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            }, goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0, goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeScript.fromConstant = function(t) {
                return 0 === (t = goog.string.Const.unwrap(t)).length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SafeScript.fromConstantAndArgs = function(t, r) {
                for (var n = [], i = 1; i < arguments.length; i++) n.push(goog.html.SafeScript.stringify_(arguments[i]));
                return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(t) + ")(" + n.join(", ") + ");")
            }, goog.html.SafeScript.fromJson = function(t) {
                return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(t))
            }, goog.html.SafeScript.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()
            }, goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
                return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}"
            }), goog.html.SafeScript.unwrap = function(t) {
                return goog.html.SafeScript.unwrapTrustedScript(t).toString()
            }, goog.html.SafeScript.unwrapTrustedScript = function(t) {
                return t instanceof goog.html.SafeScript && t.constructor === goog.html.SafeScript && t.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeScriptWrappedValue_ : (goog.asserts.fail("expected object of type SafeScript, got '" + t + "' of type " + goog.typeOf(t)), "type_error:SafeScript")
            }, goog.html.SafeScript.stringify_ = function(t) {
                return JSON.stringify(t).replace(/</g, "\\x3c")
            }, goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(t) {
                return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(t)
            }, goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(t) {
                return this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(t) : t, this
            }, goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""), goog.fs = {}, goog.fs.url = {}, goog.fs.url.createObjectUrl = function(t) {
                return goog.fs.url.getUrlObject_().createObjectURL(t)
            }, goog.fs.url.revokeObjectUrl = function(t) {
                goog.fs.url.getUrlObject_().revokeObjectURL(t)
            }, goog.fs.url.UrlObject_ = function() {}, goog.fs.url.UrlObject_.prototype.createObjectURL = function(t) {}, goog.fs.url.UrlObject_.prototype.revokeObjectURL = function(t) {}, goog.fs.url.getUrlObject_ = function() {
                var t = goog.fs.url.findUrlObject_();
                if (null != t) return t;
                throw Error("This browser doesn't seem to support blob URLs")
            }, goog.fs.url.findUrlObject_ = function() {
                return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.webkitURL && void 0 !== goog.global.webkitURL.createObjectURL ? goog.global.webkitURL : void 0 !== goog.global.createObjectURL ? goog.global : null
            }, goog.fs.url.browserSupportsObjectUrls = function() {
                return null != goog.fs.url.findUrlObject_()
            }, goog.fs.blob = {}, goog.fs.blob.getBlob = function(t) {
                var r = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
                if (void 0 !== r) {
                    r = new r;
                    for (var n = 0; n < arguments.length; n++) r.append(arguments[n]);
                    return r.getBlob()
                }
                return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments))
            }, goog.fs.blob.getBlobWithProperties = function(t, r, n) {
                var i = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
                if (void 0 !== i) {
                    i = new i;
                    for (var s = 0; s < t.length; s++) i.append(t[s], n);
                    return i.getBlob(r)
                }
                if (void 0 !== goog.global.Blob) return i = {}, r && (i.type = r), n && (i.endings = n), new Blob(t, i);
                throw Error("This browser doesn't seem to support creating Blobs")
            }, goog.i18n = {}, goog.i18n.bidi = {}, goog.i18n.bidi.FORCE_RTL = !1, goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase()), goog.i18n.bidi.Format = {
                LRE: "‪",
                RLE: "‫",
                PDF: "‬",
                LRM: "‎",
                RLM: "‏"
            }, goog.i18n.bidi.Dir = {
                LTR: 1,
                RTL: -1,
                NEUTRAL: 0
            }, goog.i18n.bidi.RIGHT = "right", goog.i18n.bidi.LEFT = "left", goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT, goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, goog.i18n.bidi.toDir = function(t, r) {
                return "number" == typeof t ? 0 < t ? goog.i18n.bidi.Dir.LTR : 0 > t ? goog.i18n.bidi.Dir.RTL : r ? null : goog.i18n.bidi.Dir.NEUTRAL : null == t ? null : t ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
            }, goog.i18n.bidi.ltrChars_ = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿", goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ", goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g, goog.i18n.bidi.stripHtmlIfNeeded_ = function(t, r) {
                return r ? t.replace(goog.i18n.bidi.htmlSkipReg_, "") : t
            }, goog.i18n.bidi.rtlCharReg_ = RegExp("[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.ltrCharReg_ = RegExp("[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.hasAnyRtl = function(t, r) {
                return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t, r))
            }, goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl, goog.i18n.bidi.hasAnyLtr = function(t, r) {
                return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t, r))
            }, goog.i18n.bidi.ltrRe_ = RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.rtlRe_ = RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.isRtlChar = function(t) {
                return goog.i18n.bidi.rtlRe_.test(t)
            }, goog.i18n.bidi.isLtrChar = function(t) {
                return goog.i18n.bidi.ltrRe_.test(t)
            }, goog.i18n.bidi.isNeutralChar = function(t) {
                return !goog.i18n.bidi.isLtrChar(t) && !goog.i18n.bidi.isRtlChar(t)
            }, goog.i18n.bidi.ltrDirCheckRe_ = RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]"), goog.i18n.bidi.rtlDirCheckRe_ = RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]"), goog.i18n.bidi.startsWithRtl = function(t, r) {
                return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t, r))
            }, goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl, goog.i18n.bidi.startsWithLtr = function(t, r) {
                return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t, r))
            }, goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr, goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/, goog.i18n.bidi.isNeutralText = function(t, r) {
                return t = goog.i18n.bidi.stripHtmlIfNeeded_(t, r), goog.i18n.bidi.isRequiredLtrRe_.test(t) || !goog.i18n.bidi.hasAnyLtr(t) && !goog.i18n.bidi.hasAnyRtl(t)
            }, goog.i18n.bidi.ltrExitDirCheckRe_ = RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$"), goog.i18n.bidi.rtlExitDirCheckRe_ = RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$"), goog.i18n.bidi.endsWithLtr = function(t, r) {
                return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t, r))
            }, goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr, goog.i18n.bidi.endsWithRtl = function(t, r) {
                return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(t, r))
            }, goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl, goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i, goog.i18n.bidi.isRtlLanguage = function(t) {
                return goog.i18n.bidi.rtlLocalesRe_.test(t)
            }, goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g, goog.i18n.bidi.guardBracketInText = function(t, r) {
                return r = (void 0 === r ? goog.i18n.bidi.hasAnyRtl(t) : r) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM, t.replace(goog.i18n.bidi.bracketGuardTextRe_, r + "$&" + r)
            }, goog.i18n.bidi.enforceRtlInHtml = function(t) {
                return "<" == t.charAt(0) ? t.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + t + "</span>"
            }, goog.i18n.bidi.enforceRtlInText = function(t) {
                return goog.i18n.bidi.Format.RLE + t + goog.i18n.bidi.Format.PDF
            }, goog.i18n.bidi.enforceLtrInHtml = function(t) {
                return "<" == t.charAt(0) ? t.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + t + "</span>"
            }, goog.i18n.bidi.enforceLtrInText = function(t) {
                return goog.i18n.bidi.Format.LRE + t + goog.i18n.bidi.Format.PDF
            }, goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g, goog.i18n.bidi.leftRe_ = /left/gi, goog.i18n.bidi.rightRe_ = /right/gi, goog.i18n.bidi.tempRe_ = /%%%%/g, goog.i18n.bidi.mirrorCSS = function(t) {
                return t.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT)
            }, goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g, goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g, goog.i18n.bidi.normalizeHebrewQuote = function(t) {
                return t.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳")
            }, goog.i18n.bidi.wordSeparatorRe_ = /\s+/, goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/, goog.i18n.bidi.rtlDetectionThreshold_ = .4, goog.i18n.bidi.estimateDirection = function(t, r) {
                var n = 0,
                    i = 0,
                    s = !1;
                for (t = goog.i18n.bidi.stripHtmlIfNeeded_(t, r).split(goog.i18n.bidi.wordSeparatorRe_), r = 0; r < t.length; r++) {
                    var o = t[r];
                    goog.i18n.bidi.startsWithRtl(o) ? (n++, i++) : goog.i18n.bidi.isRequiredLtrRe_.test(o) ? s = !0 : goog.i18n.bidi.hasAnyLtr(o) ? i++ : goog.i18n.bidi.hasNumeralsRe_.test(o) && (s = !0)
                }
                return 0 == i ? s ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : n / i > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
            }, goog.i18n.bidi.detectRtlDirectionality = function(t, r) {
                return goog.i18n.bidi.estimateDirection(t, r) == goog.i18n.bidi.Dir.RTL
            }, goog.i18n.bidi.setElementDirAndAlign = function(t, r) {
                t && (r = goog.i18n.bidi.toDir(r)) && (t.style.textAlign = r == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, t.dir = r == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr")
            }, goog.i18n.bidi.setElementDirByTextDirectionality = function(t, r) {
                switch (goog.i18n.bidi.estimateDirection(r)) {
                    case goog.i18n.bidi.Dir.LTR:
                        t.dir = "ltr";
                        break;
                    case goog.i18n.bidi.Dir.RTL:
                        t.dir = "rtl";
                        break;
                    default:
                        t.removeAttribute("dir")
                }
            }, goog.i18n.bidi.DirectionalString = function() {}, goog.html.TrustedResourceUrl = function(t, r) {
                this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = t === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && r || "", this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            }, goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = !0, goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()
            }, goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.TrustedResourceUrl.prototype.getDirection = function() {
                return goog.i18n.bidi.Dir.LTR
            }, goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(t, r) {
                var n = goog.html.TrustedResourceUrl.unwrap(this),
                    i = (n = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(n))[3] || "";
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(n[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", n[2] || "", t) + goog.html.TrustedResourceUrl.stringifyParams_("#", i, r))
            }, goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
                return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}"
            }), goog.html.TrustedResourceUrl.unwrap = function(t) {
                return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(t).toString()
            }, goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(t) {
                return t instanceof goog.html.TrustedResourceUrl && t.constructor === goog.html.TrustedResourceUrl && t.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ : (goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + t + "' of type " + goog.typeOf(t)), "type_error:TrustedResourceUrl")
            }, goog.html.TrustedResourceUrl.format = function(t, r) {
                var n = goog.string.Const.unwrap(t);
                if (!goog.html.TrustedResourceUrl.BASE_URL_.test(n)) throw Error("Invalid TrustedResourceUrl format: " + n);
                return t = n.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(t, i) {
                    if (!Object.prototype.hasOwnProperty.call(r, i)) throw Error('Found marker, "' + i + '", in format string, "' + n + '", but no valid label mapping found in args: ' + JSON.stringify(r));
                    return (t = r[i]) instanceof goog.string.Const ? goog.string.Const.unwrap(t) : encodeURIComponent(String(t))
                }), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g, goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, goog.html.TrustedResourceUrl.formatWithParams = function(t, r, n, i) {
                return goog.html.TrustedResourceUrl.format(t, r).cloneWithParams(n, i)
            }, goog.html.TrustedResourceUrl.fromConstant = function(t) {
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(t))
            }, goog.html.TrustedResourceUrl.fromConstants = function(t) {
                for (var r = "", n = 0; n < t.length; n++) r += goog.string.Const.unwrap(t[n]);
                return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(r)
            }, goog.html.TrustedResourceUrl.fromSafeScript = function(t) {
                return t = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(t)], "text/javascript"), t = goog.fs.url.createObjectUrl(t), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(t) {
                return t = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(t) : t, new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_, t)
            }, goog.html.TrustedResourceUrl.stringifyParams_ = function(t, r, n) {
                if (null == n) return r;
                if ("string" == typeof n) return n ? t + encodeURIComponent(n) : "";
                for (var i in n) {
                    var s = n[i];
                    s = Array.isArray(s) ? s : [s];
                    for (var o = 0; o < s.length; o++) {
                        var u = s[o];
                        null != u && (r || (r = t), r += (r.length > t.length ? "&" : "") + encodeURIComponent(i) + "=" + encodeURIComponent(String(u)))
                    }
                }
                return r
            }, goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}, goog.string.internal = {}, goog.string.internal.startsWith = function(t, r) {
                return 0 == t.lastIndexOf(r, 0)
            }, goog.string.internal.endsWith = function(t, r) {
                var n = t.length - r.length;
                return 0 <= n && t.indexOf(r, n) == n
            }, goog.string.internal.caseInsensitiveStartsWith = function(t, r) {
                return 0 == goog.string.internal.caseInsensitiveCompare(r, t.substr(0, r.length))
            }, goog.string.internal.caseInsensitiveEndsWith = function(t, r) {
                return 0 == goog.string.internal.caseInsensitiveCompare(r, t.substr(t.length - r.length, r.length))
            }, goog.string.internal.caseInsensitiveEquals = function(t, r) {
                return t.toLowerCase() == r.toLowerCase()
            }, goog.string.internal.isEmptyOrWhitespace = function(t) {
                return /^[\s\xa0]*$/.test(t)
            }, goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
            }, goog.string.internal.caseInsensitiveCompare = function(t, r) {
                return (t = String(t).toLowerCase()) < (r = String(r).toLowerCase()) ? -1 : t == r ? 0 : 1
            }, goog.string.internal.newLineToBr = function(t, r) {
                return t.replace(/(\r\n|\r|\n)/g, r ? "<br />" : "<br>")
            }, goog.string.internal.htmlEscape = function(t, r) {
                if (r) t = t.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
                else {
                    if (!goog.string.internal.ALL_RE_.test(t)) return t; - 1 != t.indexOf("&") && (t = t.replace(goog.string.internal.AMP_RE_, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(goog.string.internal.LT_RE_, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(goog.string.internal.GT_RE_, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(goog.string.internal.QUOT_RE_, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;")), -1 != t.indexOf("\x00") && (t = t.replace(goog.string.internal.NULL_RE_, "&#0;"))
                }
                return t
            }, goog.string.internal.AMP_RE_ = /&/g, goog.string.internal.LT_RE_ = /</g, goog.string.internal.GT_RE_ = />/g, goog.string.internal.QUOT_RE_ = /"/g, goog.string.internal.SINGLE_QUOTE_RE_ = /'/g, goog.string.internal.NULL_RE_ = /\x00/g, goog.string.internal.ALL_RE_ = /[\x00&<>"']/, goog.string.internal.whitespaceEscape = function(t, r) {
                return goog.string.internal.newLineToBr(t.replace(/  /g, " &#160;"), r)
            }, goog.string.internal.contains = function(t, r) {
                return -1 != t.indexOf(r)
            }, goog.string.internal.caseInsensitiveContains = function(t, r) {
                return goog.string.internal.contains(t.toLowerCase(), r.toLowerCase())
            }, goog.string.internal.compareVersions = function(t, r) {
                var n = 0;
                t = goog.string.internal.trim(String(t)).split("."), r = goog.string.internal.trim(String(r)).split(".");
                for (var i = Math.max(t.length, r.length), s = 0; 0 == n && s < i; s++) {
                    var o = t[s] || "",
                        u = r[s] || "";
                    do {
                        if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""], 0 == o[0].length && 0 == u[0].length) break;
                        n = 0 == o[1].length ? 0 : parseInt(o[1], 10);
                        var p = 0 == u[1].length ? 0 : parseInt(u[1], 10);
                        n = goog.string.internal.compareElements_(n, p) || goog.string.internal.compareElements_(0 == o[2].length, 0 == u[2].length) || goog.string.internal.compareElements_(o[2], u[2]), o = o[3], u = u[3]
                    } while (0 == n)
                }
                return n
            }, goog.string.internal.compareElements_ = function(t, r) {
                return t < r ? -1 : t > r ? 1 : 0
            }, goog.html.SafeUrl = function(t, r) {
                this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = t === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && r || "", this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            }, goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez", goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0, goog.html.SafeUrl.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()
            }, goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.SafeUrl.prototype.getDirection = function() {
                return goog.i18n.bidi.Dir.LTR
            }, goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
                return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}"
            }), goog.html.SafeUrl.unwrap = function(t) {
                return t instanceof goog.html.SafeUrl && t.constructor === goog.html.SafeUrl && t.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeUrlWrappedValue_ : (goog.asserts.fail("expected object of type SafeUrl, got '" + t + "' of type " + goog.typeOf(t)), "type_error:SafeUrl")
            }, goog.html.SafeUrl.fromConstant = function(t) {
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(t))
            }, goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i, goog.html.SafeUrl.isSafeMimeType = function(t) {
                return goog.html.SAFE_MIME_TYPE_PATTERN_.test(t)
            }, goog.html.SafeUrl.fromBlob = function(t) {
                return t = goog.html.SafeUrl.isSafeMimeType(t.type) ? goog.fs.url.createObjectUrl(t) : goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SafeUrl.fromMediaSource = function(t) {
                return goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource"), t = t instanceof MediaSource ? goog.fs.url.createObjectUrl(t) : goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i, goog.html.SafeUrl.fromDataUrl = function(t) {
                var r = (t = t.replace(/(%0A|%0D)/g, "")).match(goog.html.DATA_URL_PATTERN_);
                return r = r && goog.html.SafeUrl.isSafeMimeType(r[1]), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(r ? t : goog.html.SafeUrl.INNOCUOUS_STRING)
            }, goog.html.SafeUrl.fromTelUrl = function(t) {
                return goog.string.internal.caseInsensitiveStartsWith(t, "tel:") || (t = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i, goog.html.SafeUrl.fromSipUrl = function(t) {
                return goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(t)) || (t = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SafeUrl.fromFacebookMessengerUrl = function(t) {
                return goog.string.internal.caseInsensitiveStartsWith(t, "fb-messenger://share") || (t = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SafeUrl.fromWhatsAppUrl = function(t) {
                return goog.string.internal.caseInsensitiveStartsWith(t, "whatsapp://send") || (t = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SafeUrl.fromSmsUrl = function(t) {
                return goog.string.internal.caseInsensitiveStartsWith(t, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(t) || (t = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SafeUrl.isSmsUrlBodyValid_ = function(t) {
                var r = t.indexOf("#");
                if (0 < r && (t = t.substring(0, r)), !(r = t.match(/[?&]body=/gi))) return !0;
                if (1 < r.length) return !1;
                if (!(t = t.match(/[?&]body=([^&]*)/)[1])) return !0;
                try {
                    decodeURIComponent(t)
                } catch (t) {
                    return !1
                }
                return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(t)
            }, goog.html.SafeUrl.fromSshUrl = function(t) {
                return goog.string.internal.caseInsensitiveStartsWith(t, "ssh://") || (t = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(t, r) {
                return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, t, r)
            }, goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(t, r) {
                return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, t, r)
            }, goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(t, r) {
                return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, t, r)
            }, goog.html.SafeUrl.sanitizeExtensionUrl_ = function(t, r, n) {
                return (t = t.exec(r)) ? (t = t[1], -1 == (n instanceof goog.string.Const ? [goog.string.Const.unwrap(n)] : n.map(function(t) {
                    return goog.string.Const.unwrap(t)
                })).indexOf(t) && (r = goog.html.SafeUrl.INNOCUOUS_STRING)) : r = goog.html.SafeUrl.INNOCUOUS_STRING, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(r)
            }, goog.html.SafeUrl.fromTrustedResourceUrl = function(t) {
                return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(t))
            }, goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i, goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_, goog.html.SafeUrl.sanitize = function(t) {
                return t instanceof goog.html.SafeUrl ? t : (t = "object" == typeof t && t.implementsGoogStringTypedString ? t.getTypedStringValue() : String(t), goog.html.SAFE_URL_PATTERN_.test(t) || (t = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t))
            }, goog.html.SafeUrl.sanitizeAssertUnchanged = function(t, r) {
                return t instanceof goog.html.SafeUrl ? t : (t = "object" == typeof t && t.implementsGoogStringTypedString ? t.getTypedStringValue() : String(t), r && /^data:/i.test(t) && (r = goog.html.SafeUrl.fromDataUrl(t)).getTypedStringValue() == t) ? r : (goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(t), "%s does not match the safe URL pattern", t) || (t = goog.html.SafeUrl.INNOCUOUS_STRING), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t))
            }, goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(t) {
                return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_, t)
            }, goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"), goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}, goog.html.SafeStyle = function() {
                this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "", this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            }, goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0, goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeStyle.fromConstant = function(t) {
                return 0 === (t = goog.string.Const.unwrap(t)).length ? goog.html.SafeStyle.EMPTY : (goog.asserts.assert(goog.string.internal.endsWith(t, ";"), "Last character of style string is not ';': " + t), goog.asserts.assert(goog.string.internal.contains(t, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + t), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t))
            }, goog.html.SafeStyle.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeStyleWrappedValue_
            }, goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
                return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}"
            }), goog.html.SafeStyle.unwrap = function(t) {
                return t instanceof goog.html.SafeStyle && t.constructor === goog.html.SafeStyle && t.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeStyleWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyle, got '" + t + "' of type " + goog.typeOf(t)), "type_error:SafeStyle")
            }, goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(t) {
                return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(t)
            }, goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(t) {
                return this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = t, this
            }, goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""), goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez", goog.html.SafeStyle.create = function(t) {
                var r, n = "";
                for (r in t) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(r)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + r);
                    var i = t[r];
                    null != i && (n += r + ":" + (i = Array.isArray(i) ? goog.array.map(i, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(i)) + ";")
                }
                return n ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(n) : goog.html.SafeStyle.EMPTY
            }, goog.html.SafeStyle.sanitizePropertyValue_ = function(t) {
                if (t instanceof goog.html.SafeUrl) return 'url("' + goog.html.SafeUrl.unwrap(t).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
                if (t = t instanceof goog.string.Const ? goog.string.Const.unwrap(t) : goog.html.SafeStyle.sanitizePropertyValueString_(String(t)), /[{;}]/.test(t)) throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [t]);
                return t
            }, goog.html.SafeStyle.sanitizePropertyValueString_ = function(t) {
                var r = t.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
                return goog.html.SafeStyle.VALUE_RE_.test(r) ? goog.html.SafeStyle.COMMENT_RE_.test(t) ? (goog.asserts.fail("String value disallows comments, got: " + t), goog.html.SafeStyle.INNOCUOUS_STRING) : goog.html.SafeStyle.hasBalancedQuotes_(t) ? goog.html.SafeStyle.hasBalancedSquareBrackets_(t) ? goog.html.SafeStyle.sanitizeUrl_(t) : (goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + t), goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value requires balanced quotes, got: " + t), goog.html.SafeStyle.INNOCUOUS_STRING) : (goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + t), goog.html.SafeStyle.INNOCUOUS_STRING)
            }, goog.html.SafeStyle.hasBalancedQuotes_ = function(t) {
                for (var r = !0, n = !0, i = 0; i < t.length; i++) {
                    var s = t.charAt(i);
                    "'" == s && n ? r = !r : '"' == s && r && (n = !n)
                }
                return r && n
            }, goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(t) {
                for (var r = !0, n = /^[-_a-zA-Z0-9]$/, i = 0; i < t.length; i++) {
                    var s = t.charAt(i);
                    if ("]" == s) {
                        if (r) return !1;
                        r = !0
                    } else if ("[" == s) {
                        if (!r) return !1;
                        r = !1
                    } else if (!r && !n.test(s)) return !1
                }
                return r
            }, goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]", goog.html.SafeStyle.VALUE_RE_ = RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$"), goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g, goog.html.SafeStyle.ALLOWED_FUNCTIONS_ = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" "), goog.html.SafeStyle.FUNCTIONS_RE_ = RegExp("\\b(" + goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g"), goog.html.SafeStyle.COMMENT_RE_ = /\/\*/, goog.html.SafeStyle.sanitizeUrl_ = function(t) {
                return t.replace(goog.html.SafeStyle.URL_RE_, function(t, r, n, i) {
                    var s = "";
                    return n = n.replace(/^(['"])(.*)\1$/, function(t, r, n) {
                        return s = r, n
                    }), t = goog.html.SafeUrl.sanitize(n).getTypedStringValue(), r + s + t + s + i
                })
            }, goog.html.SafeStyle.concat = function(t) {
                var r = "",
                    n = function(t) {
                        Array.isArray(t) ? goog.array.forEach(t, n) : r += goog.html.SafeStyle.unwrap(t)
                    };
                return goog.array.forEach(arguments, n), r ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(r) : goog.html.SafeStyle.EMPTY
            }, goog.html.SafeStyleSheet = function() {
                this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "", this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
            }, goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0, goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeStyleSheet.createRule = function(t, r) {
                if (goog.string.internal.contains(t, "<")) throw Error("Selector does not allow '<', got: " + t);
                var n = t.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
                if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(n)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + t);
                if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(n)) throw Error("() and [] in selector must be balanced, got: " + t);
                return r instanceof goog.html.SafeStyle || (r = goog.html.SafeStyle.create(r)), t = t + "{" + goog.html.SafeStyle.unwrap(r).replace(/</g, "\\3C ") + "}", goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t)
            }, goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(t) {
                for (var r = {
                        "(": ")",
                        "[": "]"
                    }, n = [], i = 0; i < t.length; i++) {
                    var s = t[i];
                    if (r[s]) n.push(r[s]);
                    else if (goog.object.contains(r, s) && n.pop() != s) return !1
                }
                return 0 == n.length
            }, goog.html.SafeStyleSheet.concat = function(t) {
                var r = "",
                    n = function(t) {
                        Array.isArray(t) ? goog.array.forEach(t, n) : r += goog.html.SafeStyleSheet.unwrap(t)
                    };
                return goog.array.forEach(arguments, n), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(r)
            }, goog.html.SafeStyleSheet.fromConstant = function(t) {
                return 0 === (t = goog.string.Const.unwrap(t)).length ? goog.html.SafeStyleSheet.EMPTY : (goog.asserts.assert(!goog.string.internal.contains(t, "<"), "Forbidden '<' character in style sheet string: " + t), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(t))
            }, goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
            }, goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
                return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}"
            }), goog.html.SafeStyleSheet.unwrap = function(t) {
                return t instanceof goog.html.SafeStyleSheet && t.constructor === goog.html.SafeStyleSheet && t.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ : (goog.asserts.fail("expected object of type SafeStyleSheet, got '" + t + "' of type " + goog.typeOf(t)), "type_error:SafeStyleSheet")
            }, goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(t) {
                return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(t)
            }, goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(t) {
                return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = t, this
            }, goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""), goog.labs = {}, goog.labs.userAgent = {}, goog.labs.userAgent.util = {}, goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
                var t = goog.labs.userAgent.util.getNavigator_();
                return t && (t = t.userAgent) ? t : ""
            }, goog.labs.userAgent.util.getNavigator_ = function() {
                return goog.global.navigator
            }, goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(), goog.labs.userAgent.util.setUserAgent = function(t) {
                goog.labs.userAgent.util.userAgent_ = t || goog.labs.userAgent.util.getNativeUserAgentString_()
            }, goog.labs.userAgent.util.getUserAgent = function() {
                return goog.labs.userAgent.util.userAgent_
            }, goog.labs.userAgent.util.matchUserAgent = function(t) {
                var r = goog.labs.userAgent.util.getUserAgent();
                return goog.string.internal.contains(r, t)
            }, goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(t) {
                var r = goog.labs.userAgent.util.getUserAgent();
                return goog.string.internal.caseInsensitiveContains(r, t)
            }, goog.labs.userAgent.util.extractVersionTuples = function(t) {
                for (var r, n = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, i = []; r = n.exec(t);) i.push([r[1], r[2], r[3] || void 0]);
                return i
            }, goog.labs.userAgent.browser = {}, goog.labs.userAgent.browser.matchOpera_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Opera")
            }, goog.labs.userAgent.browser.matchIE_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
            }, goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Edge")
            }, goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Edg/")
            }, goog.labs.userAgent.browser.matchOperaChromium_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("OPR")
            }, goog.labs.userAgent.browser.matchFirefox_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS")
            }, goog.labs.userAgent.browser.matchSafari_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
            }, goog.labs.userAgent.browser.matchCoast_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Coast")
            }, goog.labs.userAgent.browser.matchIosWebview_ = function() {
                return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
            }, goog.labs.userAgent.browser.matchChrome_ = function() {
                return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_()
            }, goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
                return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
            }, goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_, goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_, goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_, goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_, goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_, goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_, goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_, goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_, goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_, goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_, goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_, goog.labs.userAgent.browser.isSilk = function() {
                return goog.labs.userAgent.util.matchUserAgent("Silk")
            }, goog.labs.userAgent.browser.getVersion = function() {
                function t(t) {
                    return n[t = goog.array.find(t, i)] || ""
                }
                var r = goog.labs.userAgent.util.getUserAgent();
                if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(r);
                r = goog.labs.userAgent.util.extractVersionTuples(r);
                var n = {};
                goog.array.forEach(r, function(t) {
                    n[t[0]] = t[1]
                });
                var i = goog.partial(goog.object.containsKey, n);
                return goog.labs.userAgent.browser.isOpera() ? t(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? t(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? t(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? t(["Chrome", "CriOS", "HeadlessChrome"]) : (r = r[2]) && r[1] || ""
            }, goog.labs.userAgent.browser.isVersionOrHigher = function(t) {
                return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), t)
            }, goog.labs.userAgent.browser.getIEVersion_ = function(t) {
                var r = /rv: *([\d\.]*)/.exec(t);
                if (r && r[1]) return r[1];
                r = "";
                var n = /MSIE +([\d\.]+)/.exec(t);
                if (n && n[1]) {
                    if (t = /Trident\/(\d.\d)/.exec(t), "7.0" == n[1]) {
                        if (t && t[1]) switch (t[1]) {
                            case "4.0":
                                r = "8.0";
                                break;
                            case "5.0":
                                r = "9.0";
                                break;
                            case "6.0":
                                r = "10.0";
                                break;
                            case "7.0":
                                r = "11.0"
                        } else r = "7.0"
                    } else r = n[1]
                }
                return r
            }, goog.html.SafeHtml = function() {
                this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "", this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_, this.dir_ = null
            }, goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG, goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0, goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = !0, goog.html.SafeHtml.prototype.getDirection = function() {
                return this.dir_
            }, goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0, goog.html.SafeHtml.prototype.getTypedStringValue = function() {
                return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()
            }, goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
                return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}"
            }), goog.html.SafeHtml.unwrap = function(t) {
                return goog.html.SafeHtml.unwrapTrustedHTML(t).toString()
            }, goog.html.SafeHtml.unwrapTrustedHTML = function(t) {
                return t instanceof goog.html.SafeHtml && t.constructor === goog.html.SafeHtml && t.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ? t.privateDoNotAccessOrElseSafeHtmlWrappedValue_ : (goog.asserts.fail("expected object of type SafeHtml, got '" + t + "' of type " + goog.typeOf(t)), "type_error:SafeHtml")
            }, goog.html.SafeHtml.htmlEscape = function(t) {
                if (t instanceof goog.html.SafeHtml) return t;
                var r = "object" == typeof t,
                    n = null;
                return r && t.implementsGoogI18nBidiDirectionalString && (n = t.getDirection()), t = r && t.implementsGoogStringTypedString ? t.getTypedStringValue() : String(t), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(t), n)
            }, goog.html.SafeHtml.htmlEscapePreservingNewlines = function(t) {
                return t instanceof goog.html.SafeHtml ? t : (t = goog.html.SafeHtml.htmlEscape(t), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(t)), t.getDirection()))
            }, goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(t) {
                return t instanceof goog.html.SafeHtml ? t : (t = goog.html.SafeHtml.htmlEscape(t), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(t)), t.getDirection()))
            }, goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape, goog.html.SafeHtml.comment = function(t) {
                return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!--" + goog.string.internal.htmlEscape(t) + "-->", null)
            }, goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/, goog.html.SafeHtml.URL_ATTRIBUTES_ = {
                action: !0,
                cite: !0,
                data: !0,
                formaction: !0,
                href: !0,
                manifest: !0,
                poster: !0,
                src: !0
            }, goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
                APPLET: !0,
                BASE: !0,
                EMBED: !0,
                IFRAME: !0,
                LINK: !0,
                MATH: !0,
                META: !0,
                OBJECT: !0,
                SCRIPT: !0,
                STYLE: !0,
                SVG: !0,
                TEMPLATE: !0
            }, goog.html.SafeHtml.create = function(t, r, n) {
                return goog.html.SafeHtml.verifyTagName(String(t)), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(t), r, n)
            }, goog.html.SafeHtml.verifyTagName = function(t) {
                if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(t)) throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + t + ">." : "");
                if (t.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + t + "> is not allowed for SafeHtml." : "")
            }, goog.html.SafeHtml.createIframe = function(t, r, n, i) {
                t && goog.html.TrustedResourceUrl.unwrap(t);
                var s = {};
                return s.src = t || null, s.srcdoc = r && goog.html.SafeHtml.unwrap(r), t = goog.html.SafeHtml.combineAttributes(s, {
                    sandbox: ""
                }, n), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", t, i)
            }, goog.html.SafeHtml.createSandboxIframe = function(t, r, n, i) {
                if (!goog.html.SafeHtml.canUseSandboxIframe()) throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
                var s = {};
                return s.src = t ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(t)) : null, s.srcdoc = r || null, s.sandbox = "", t = goog.html.SafeHtml.combineAttributes(s, {}, n), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", t, i)
            }, goog.html.SafeHtml.canUseSandboxIframe = function() {
                return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype
            }, goog.html.SafeHtml.createScriptSrc = function(t, r) {
                return goog.html.TrustedResourceUrl.unwrap(t), t = goog.html.SafeHtml.combineAttributes({
                    src: t
                }, {}, r), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", t)
            }, goog.html.SafeHtml.createScript = function(t, r) {
                for (var n in r) {
                    var i = n.toLowerCase();
                    if ("language" == i || "src" == i || "text" == i || "type" == i) throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + i + '" attribute' : "")
                }
                for (i = 0, n = "", t = goog.array.concat(t); i < t.length; i++) n += goog.html.SafeScript.unwrap(t[i]);
                return t = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(n, goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", r, t)
            }, goog.html.SafeHtml.createStyle = function(t, r) {
                r = goog.html.SafeHtml.combineAttributes({
                    type: "text/css"
                }, {}, r);
                var n = "";
                t = goog.array.concat(t);
                for (var i = 0; i < t.length; i++) n += goog.html.SafeStyleSheet.unwrap(t[i]);
                return t = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(n, goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", r, t)
            }, goog.html.SafeHtml.createMetaRefresh = function(t, r) {
                return t = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(t)), (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
                    "http-equiv": "refresh",
                    content: (r || 0) + "; url=" + t
                })
            }, goog.html.SafeHtml.getAttrNameAndValue_ = function(t, r, n) {
                if (n instanceof goog.string.Const) n = goog.string.Const.unwrap(n);
                else if ("style" == r.toLowerCase()) {
                    if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE) n = goog.html.SafeHtml.getStyleValue_(n);
                    else throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "")
                } else {
                    if (/^on/i.test(r)) throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + r + '" requires goog.string.Const value, "' + n + '" given.' : "");
                    if (r.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_) {
                        if (n instanceof goog.html.TrustedResourceUrl) n = goog.html.TrustedResourceUrl.unwrap(n);
                        else if (n instanceof goog.html.SafeUrl) n = goog.html.SafeUrl.unwrap(n);
                        else if ("string" == typeof n) n = goog.html.SafeUrl.sanitize(n).getTypedStringValue();
                        else throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + r + '" on tag "' + t + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + n + '" given.' : "")
                    }
                }
                return n.implementsGoogStringTypedString && (n = n.getTypedStringValue()), goog.asserts.assert("string" == typeof n || "number" == typeof n, "String or number value expected, got " + typeof n + " with value: " + n), r + '="' + goog.string.internal.htmlEscape(String(n)) + '"'
            }, goog.html.SafeHtml.getStyleValue_ = function(t) {
                if (!goog.isObject(t)) throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof t + " given: " + t : "");
                return t instanceof goog.html.SafeStyle || (t = goog.html.SafeStyle.create(t)), goog.html.SafeStyle.unwrap(t)
            }, goog.html.SafeHtml.createWithDir = function(t, r, n, i) {
                return (r = goog.html.SafeHtml.create(r, n, i)).dir_ = t, r
            }, goog.html.SafeHtml.join = function(t, r) {
                var n = (t = goog.html.SafeHtml.htmlEscape(t)).getDirection(),
                    i = [],
                    s = function(t) {
                        Array.isArray(t) ? goog.array.forEach(t, s) : (t = goog.html.SafeHtml.htmlEscape(t), i.push(goog.html.SafeHtml.unwrap(t)), t = t.getDirection(), n == goog.i18n.bidi.Dir.NEUTRAL ? n = t : t != goog.i18n.bidi.Dir.NEUTRAL && n != t && (n = null))
                    };
                return goog.array.forEach(r, s), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(i.join(goog.html.SafeHtml.unwrap(t)), n)
            }, goog.html.SafeHtml.concat = function(t) {
                return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments))
            }, goog.html.SafeHtml.concatWithDir = function(t, r) {
                var n = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
                return n.dir_ = t, n
            }, goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}, goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(t, r) {
                return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(t, r)
            }, goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(t, r) {
                return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(t) : t, this.dir_ = r, this
            }, goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(t, r, n) {
                var i = null,
                    s = "<" + t + goog.html.SafeHtml.stringifyAttributes(t, r);
                return null == n ? n = [] : Array.isArray(n) || (n = [n]), goog.dom.tags.isVoidTag(t.toLowerCase()) ? (goog.asserts.assert(!n.length, "Void tag <" + t + "> does not allow content."), s += ">") : (i = goog.html.SafeHtml.concat(n), s += ">" + goog.html.SafeHtml.unwrap(i) + "</" + t + ">", i = i.getDirection()), (t = r && r.dir) && (i = /^(ltr|rtl|auto)$/i.test(t) ? goog.i18n.bidi.Dir.NEUTRAL : null), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(s, i)
            }, goog.html.SafeHtml.stringifyAttributes = function(t, r) {
                var n = "";
                if (r)
                    for (var i in r) {
                        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(i)) throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + i + '".' : "");
                        var s = r[i];
                        null != s && (n += " " + goog.html.SafeHtml.getAttrNameAndValue_(t, i, s))
                    }
                return n
            }, goog.html.SafeHtml.combineAttributes = function(t, r, n) {
                var i, s = {};
                for (i in t) goog.asserts.assert(i.toLowerCase() == i, "Must be lower case"), s[i] = t[i];
                for (i in r) goog.asserts.assert(i.toLowerCase() == i, "Must be lower case"), s[i] = r[i];
                if (n)
                    for (i in n) {
                        var o = i.toLowerCase();
                        if (o in t) throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + o + '" attribute, got "' + i + '" with value "' + n[i] + '"' : "");
                        o in r && delete s[o], s[i] = n[i]
                    }
                return s
            }, goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL), goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL), goog.html.uncheckedconversions = {}, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(t, r, n) {
                return goog.asserts.assertString(goog.string.Const.unwrap(t), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)), "must provide non-empty justification"), goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(r, n || null)
            }, goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(t, r) {
                return goog.asserts.assertString(goog.string.Const.unwrap(t), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)), "must provide non-empty justification"), goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(r)
            }, goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(t, r) {
                return goog.asserts.assertString(goog.string.Const.unwrap(t), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)), "must provide non-empty justification"), goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(r)
            }, goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(t, r) {
                return goog.asserts.assertString(goog.string.Const.unwrap(t), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)), "must provide non-empty justification"), goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(r)
            }, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(t, r) {
                return goog.asserts.assertString(goog.string.Const.unwrap(t), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)), "must provide non-empty justification"), goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(r)
            }, goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(t, r) {
                return goog.asserts.assertString(goog.string.Const.unwrap(t), "must provide justification"), goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(t)), "must provide non-empty justification"), goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(r)
            }, goog.dom.safe = {}, goog.dom.safe.InsertAdjacentHtmlPosition = {
                AFTERBEGIN: "afterbegin",
                AFTEREND: "afterend",
                BEFOREBEGIN: "beforebegin",
                BEFOREEND: "beforeend"
            }, goog.dom.safe.insertAdjacentHtml = function(t, r, n) {
                t.insertAdjacentHTML(r, goog.html.SafeHtml.unwrapTrustedHTML(n))
            }, goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
                MATH: !0,
                SCRIPT: !0,
                STYLE: !0,
                SVG: !0,
                TEMPLATE: !0
            }, goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
                if (goog.DEBUG && "undefined" == typeof document) return !1;
                var t = document.createElement("div"),
                    r = document.createElement("div");
                return r.appendChild(document.createElement("div")), t.appendChild(r), (!goog.DEBUG || !!t.firstChild) && (r = t.firstChild.firstChild, t.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY), !r.parentElement)
            }), goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(t, r) {
                if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
                    for (; t.lastChild;) t.removeChild(t.lastChild);
                t.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(r)
            }, goog.dom.safe.setInnerHtml = function(t, r) {
                if (goog.asserts.ENABLE_ASSERTS) {
                    var n = t.tagName.toUpperCase();
                    if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[n]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + t.tagName + ".")
                }
                goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(t, r)
            }, goog.dom.safe.setOuterHtml = function(t, r) {
                t.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(r)
            }, goog.dom.safe.setFormElementAction = function(t, r) {
                r = r instanceof goog.html.SafeUrl ? r : goog.html.SafeUrl.sanitizeAssertUnchanged(r), goog.dom.asserts.assertIsHTMLFormElement(t).action = goog.html.SafeUrl.unwrap(r)
            }, goog.dom.safe.setButtonFormAction = function(t, r) {
                r = r instanceof goog.html.SafeUrl ? r : goog.html.SafeUrl.sanitizeAssertUnchanged(r), goog.dom.asserts.assertIsHTMLButtonElement(t).formAction = goog.html.SafeUrl.unwrap(r)
            }, goog.dom.safe.setInputFormAction = function(t, r) {
                r = r instanceof goog.html.SafeUrl ? r : goog.html.SafeUrl.sanitizeAssertUnchanged(r), goog.dom.asserts.assertIsHTMLInputElement(t).formAction = goog.html.SafeUrl.unwrap(r)
            }, goog.dom.safe.setStyle = function(t, r) {
                t.style.cssText = goog.html.SafeStyle.unwrap(r)
            }, goog.dom.safe.documentWrite = function(t, r) {
                t.write(goog.html.SafeHtml.unwrapTrustedHTML(r))
            }, goog.dom.safe.setAnchorHref = function(t, r) {
                goog.dom.asserts.assertIsHTMLAnchorElement(t), r = r instanceof goog.html.SafeUrl ? r : goog.html.SafeUrl.sanitizeAssertUnchanged(r), t.href = goog.html.SafeUrl.unwrap(r)
            }, goog.dom.safe.setImageSrc = function(t, r) {
                if (goog.dom.asserts.assertIsHTMLImageElement(t), !(r instanceof goog.html.SafeUrl)) {
                    var n = /^data:image\//i.test(r);
                    r = goog.html.SafeUrl.sanitizeAssertUnchanged(r, n)
                }
                t.src = goog.html.SafeUrl.unwrap(r)
            }, goog.dom.safe.setAudioSrc = function(t, r) {
                if (goog.dom.asserts.assertIsHTMLAudioElement(t), !(r instanceof goog.html.SafeUrl)) {
                    var n = /^data:audio\//i.test(r);
                    r = goog.html.SafeUrl.sanitizeAssertUnchanged(r, n)
                }
                t.src = goog.html.SafeUrl.unwrap(r)
            }, goog.dom.safe.setVideoSrc = function(t, r) {
                if (goog.dom.asserts.assertIsHTMLVideoElement(t), !(r instanceof goog.html.SafeUrl)) {
                    var n = /^data:video\//i.test(r);
                    r = goog.html.SafeUrl.sanitizeAssertUnchanged(r, n)
                }
                t.src = goog.html.SafeUrl.unwrap(r)
            }, goog.dom.safe.setEmbedSrc = function(t, r) {
                goog.dom.asserts.assertIsHTMLEmbedElement(t), t.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(r)
            }, goog.dom.safe.setFrameSrc = function(t, r) {
                goog.dom.asserts.assertIsHTMLFrameElement(t), t.src = goog.html.TrustedResourceUrl.unwrap(r)
            }, goog.dom.safe.setIframeSrc = function(t, r) {
                goog.dom.asserts.assertIsHTMLIFrameElement(t), t.src = goog.html.TrustedResourceUrl.unwrap(r)
            }, goog.dom.safe.setIframeSrcdoc = function(t, r) {
                goog.dom.asserts.assertIsHTMLIFrameElement(t), t.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(r)
            }, goog.dom.safe.setLinkHrefAndRel = function(t, r, n) {
                goog.dom.asserts.assertIsHTMLLinkElement(t), t.rel = n, goog.string.internal.caseInsensitiveContains(n, "stylesheet") ? (goog.asserts.assert(r instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), t.href = goog.html.TrustedResourceUrl.unwrap(r)) : t.href = r instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap(r) : r instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap(r) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(r))
            }, goog.dom.safe.setObjectData = function(t, r) {
                goog.dom.asserts.assertIsHTMLObjectElement(t), t.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(r)
            }, goog.dom.safe.setScriptSrc = function(t, r) {
                goog.dom.asserts.assertIsHTMLScriptElement(t), t.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(r), (r = goog.getScriptNonce()) && t.setAttribute("nonce", r)
            }, goog.dom.safe.setScriptContent = function(t, r) {
                goog.dom.asserts.assertIsHTMLScriptElement(t), t.text = goog.html.SafeScript.unwrapTrustedScript(r), (r = goog.getScriptNonce()) && t.setAttribute("nonce", r)
            }, goog.dom.safe.setLocationHref = function(t, r) {
                goog.dom.asserts.assertIsLocation(t), r = r instanceof goog.html.SafeUrl ? r : goog.html.SafeUrl.sanitizeAssertUnchanged(r), t.href = goog.html.SafeUrl.unwrap(r)
            }, goog.dom.safe.assignLocation = function(t, r) {
                goog.dom.asserts.assertIsLocation(t), r = r instanceof goog.html.SafeUrl ? r : goog.html.SafeUrl.sanitizeAssertUnchanged(r), t.assign(goog.html.SafeUrl.unwrap(r))
            }, goog.dom.safe.replaceLocation = function(t, r) {
                r = r instanceof goog.html.SafeUrl ? r : goog.html.SafeUrl.sanitizeAssertUnchanged(r), t.replace(goog.html.SafeUrl.unwrap(r))
            }, goog.dom.safe.openInWindow = function(t, r, n, i, s) {
                return t = t instanceof goog.html.SafeUrl ? t : goog.html.SafeUrl.sanitizeAssertUnchanged(t), r = r || goog.global, n = n instanceof goog.string.Const ? goog.string.Const.unwrap(n) : n || "", r.open(goog.html.SafeUrl.unwrap(t), n, i, s)
            }, goog.dom.safe.parseFromStringHtml = function(t, r) {
                return goog.dom.safe.parseFromString(t, r, "text/html")
            }, goog.dom.safe.parseFromString = function(t, r, n) {
                return t.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(r), n)
            }, goog.dom.safe.createImageFromBlob = function(t) {
                if (!/^image\/.*/g.test(t.type)) throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
                var r = goog.global.URL.createObjectURL(t);
                return (t = new goog.global.Image).onload = function() {
                    goog.global.URL.revokeObjectURL(r)
                }, goog.dom.safe.setImageSrc(t, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), r)), t
            }, goog.string.DETECT_DOUBLE_ESCAPING = !1, goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1, goog.string.Unicode = {
                NBSP: "\xa0"
            }, goog.string.startsWith = goog.string.internal.startsWith, goog.string.endsWith = goog.string.internal.endsWith, goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith, goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith, goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals, goog.string.subs = function(t, r) {
                for (var n = t.split("%s"), i = "", s = Array.prototype.slice.call(arguments, 1); s.length && 1 < n.length;) i += n.shift() + s.shift();
                return i + n.join("%s")
            }, goog.string.collapseWhitespace = function(t) {
                return t.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
            }, goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace, goog.string.isEmptyString = function(t) {
                return 0 == t.length
            }, goog.string.isEmpty = goog.string.isEmptyOrWhitespace, goog.string.isEmptyOrWhitespaceSafe = function(t) {
                return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(t))
            }, goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe, goog.string.isBreakingWhitespace = function(t) {
                return !/[^\t\n\r ]/.test(t)
            }, goog.string.isAlpha = function(t) {
                return !/[^a-zA-Z]/.test(t)
            }, goog.string.isNumeric = function(t) {
                return !/[^0-9]/.test(t)
            }, goog.string.isAlphaNumeric = function(t) {
                return !/[^a-zA-Z0-9]/.test(t)
            }, goog.string.isSpace = function(t) {
                return " " == t
            }, goog.string.isUnicodeChar = function(t) {
                return 1 == t.length && " " <= t && "~" >= t || "\x80" <= t && "�" >= t
            }, goog.string.stripNewlines = function(t) {
                return t.replace(/(\r\n|\r|\n)+/g, " ")
            }, goog.string.canonicalizeNewlines = function(t) {
                return t.replace(/(\r\n|\r|\n)/g, "\n")
            }, goog.string.normalizeWhitespace = function(t) {
                return t.replace(/\xa0|\s/g, " ")
            }, goog.string.normalizeSpaces = function(t) {
                return t.replace(/\xa0|[ \t]+/g, " ")
            }, goog.string.collapseBreakingSpaces = function(t) {
                return t.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
            }, goog.string.trim = goog.string.internal.trim, goog.string.trimLeft = function(t) {
                return t.replace(/^[\s\xa0]+/, "")
            }, goog.string.trimRight = function(t) {
                return t.replace(/[\s\xa0]+$/, "")
            }, goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare, goog.string.numberAwareCompare_ = function(t, r, n) {
                if (t == r) return 0;
                if (!t) return -1;
                if (!r) return 1;
                for (var i = t.toLowerCase().match(n), s = r.toLowerCase().match(n), o = Math.min(i.length, s.length), u = 0; u < o; u++) {
                    n = i[u];
                    var p = s[u];
                    if (n != p) return isNaN(t = parseInt(n, 10)) || isNaN(r = parseInt(p, 10)) || !(t - r) ? n < p ? -1 : 1 : t - r
                }
                return i.length != s.length ? i.length - s.length : t < r ? -1 : 1
            }, goog.string.intAwareCompare = function(t, r) {
                return goog.string.numberAwareCompare_(t, r, /\d+|\D+/g)
            }, goog.string.floatAwareCompare = function(t, r) {
                return goog.string.numberAwareCompare_(t, r, /\d+|\.\d+|\D+/g)
            }, goog.string.numerateCompare = goog.string.floatAwareCompare, goog.string.urlEncode = function(t) {
                return encodeURIComponent(String(t))
            }, goog.string.urlDecode = function(t) {
                return decodeURIComponent(t.replace(/\+/g, " "))
            }, goog.string.newLineToBr = goog.string.internal.newLineToBr, goog.string.htmlEscape = function(t, r) {
                return t = goog.string.internal.htmlEscape(t, r), goog.string.DETECT_DOUBLE_ESCAPING && (t = t.replace(goog.string.E_RE_, "&#101;")), t
            }, goog.string.E_RE_ = /e/g, goog.string.unescapeEntities = function(t) {
                return goog.string.contains(t, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(t) : goog.string.unescapePureXmlEntities_(t) : t
            }, goog.string.unescapeEntitiesWithDocument = function(t, r) {
                return goog.string.contains(t, "&") ? goog.string.unescapeEntitiesUsingDom_(t, r) : t
            }, goog.string.unescapeEntitiesUsingDom_ = function(t, r) {
                var n = {
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"'
                    },
                    i = r ? r.createElement("div") : goog.global.document.createElement("div");
                return t.replace(goog.string.HTML_ENTITY_PATTERN_, function(t, r) {
                    var s = n[t];
                    return s || ("#" == r.charAt(0) && (isNaN(r = Number("0" + r.substr(1))) || (s = String.fromCharCode(r))), s || (goog.dom.safe.setInnerHtml(i, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), t + " ")), s = i.firstChild.nodeValue.slice(0, -1)), n[t] = s)
                })
            }, goog.string.unescapePureXmlEntities_ = function(t) {
                return t.replace(/&([^;]+);/g, function(t, r) {
                    switch (r) {
                        case "amp":
                            return "&";
                        case "lt":
                            return "<";
                        case "gt":
                            return ">";
                        case "quot":
                            return '"';
                        default:
                            return "#" != r.charAt(0) || isNaN(r = Number("0" + r.substr(1))) ? t : String.fromCharCode(r)
                    }
                })
            }, goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g, goog.string.whitespaceEscape = function(t, r) {
                return goog.string.newLineToBr(t.replace(/  /g, " &#160;"), r)
            }, goog.string.preserveSpaces = function(t) {
                return t.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
            }, goog.string.stripQuotes = function(t, r) {
                for (var n = r.length, i = 0; i < n; i++) {
                    var s = 1 == n ? r : r.charAt(i);
                    if (t.charAt(0) == s && t.charAt(t.length - 1) == s) return t.substring(1, t.length - 1)
                }
                return t
            }, goog.string.truncate = function(t, r, n) {
                return n && (t = goog.string.unescapeEntities(t)), t.length > r && (t = t.substring(0, r - 3) + "..."), n && (t = goog.string.htmlEscape(t)), t
            }, goog.string.truncateMiddle = function(t, r, n, i) {
                if (n && (t = goog.string.unescapeEntities(t)), i && t.length > r) {
                    i > r && (i = r);
                    var s = t.length - i;
                    t = t.substring(0, r - i) + "..." + t.substring(s)
                } else t.length > r && (i = Math.floor(r / 2), s = t.length - i, t = t.substring(0, i + r % 2) + "..." + t.substring(s));
                return n && (t = goog.string.htmlEscape(t)), t
            }, goog.string.specialEscapeChars_ = {
                "\x00": "\\0",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "	": "\\t",
                "\v": "\\x0B",
                '"': '\\"',
                "\\": "\\\\",
                "<": "\\u003C"
            }, goog.string.jsEscapeCache_ = {
                "'": "\\'"
            }, goog.string.quote = function(t) {
                t = String(t);
                for (var r = ['"'], n = 0; n < t.length; n++) {
                    var i = t.charAt(n),
                        s = i.charCodeAt(0);
                    r[n + 1] = goog.string.specialEscapeChars_[i] || (31 < s && 127 > s ? i : goog.string.escapeChar(i))
                }
                return r.push('"'), r.join("")
            }, goog.string.escapeString = function(t) {
                for (var r = [], n = 0; n < t.length; n++) r[n] = goog.string.escapeChar(t.charAt(n));
                return r.join("")
            }, goog.string.escapeChar = function(t) {
                if (t in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[t];
                if (t in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[t] = goog.string.specialEscapeChars_[t];
                var r = t.charCodeAt(0);
                if (31 < r && 127 > r) var n = t;
                else 256 > r ? (n = "\\x", (16 > r || 256 < r) && (n += "0")) : (n = "\\u", 4096 > r && (n += "0")), n += r.toString(16).toUpperCase();
                return goog.string.jsEscapeCache_[t] = n
            }, goog.string.contains = goog.string.internal.contains, goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains, goog.string.countOf = function(t, r) {
                return t && r ? t.split(r).length - 1 : 0
            }, goog.string.removeAt = function(t, r, n) {
                var i = t;
                return 0 <= r && r < t.length && 0 < n && (i = t.substr(0, r) + t.substr(r + n, t.length - r - n)), i
            }, goog.string.remove = function(t, r) {
                return t.replace(r, "")
            }, goog.string.removeAll = function(t, r) {
                return r = RegExp(goog.string.regExpEscape(r), "g"), t.replace(r, "")
            }, goog.string.replaceAll = function(t, r, n) {
                return r = RegExp(goog.string.regExpEscape(r), "g"), t.replace(r, n.replace(/\$/g, "$$$$"))
            }, goog.string.regExpEscape = function(t) {
                return String(t).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            }, goog.string.repeat = String.prototype.repeat ? function(t, r) {
                return t.repeat(r)
            } : function(t, r) {
                return Array(r + 1).join(t)
            }, goog.string.padNumber = function(t, r, n) {
                return -1 == (n = (t = void 0 !== n ? t.toFixed(n) : String(t)).indexOf(".")) && (n = t.length), goog.string.repeat("0", Math.max(0, r - n)) + t
            }, goog.string.makeSafe = function(t) {
                return null == t ? "" : String(t)
            }, goog.string.buildString = function(t) {
                return Array.prototype.join.call(arguments, "")
            }, goog.string.getRandomString = function() {
                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
            }, goog.string.compareVersions = goog.string.internal.compareVersions, goog.string.hashCode = function(t) {
                for (var r = 0, n = 0; n < t.length; ++n) r = 31 * r + t.charCodeAt(n) >>> 0;
                return r
            }, goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0, goog.string.createUniqueString = function() {
                return "goog_" + goog.string.uniqueStringCounter_++
            }, goog.string.toNumber = function(t) {
                var r = Number(t);
                return 0 == r && goog.string.isEmptyOrWhitespace(t) ? NaN : r
            }, goog.string.isLowerCamelCase = function(t) {
                return /^[a-z]+([A-Z][a-z]*)*$/.test(t)
            }, goog.string.isUpperCamelCase = function(t) {
                return /^([A-Z][a-z]*)+$/.test(t)
            }, goog.string.toCamelCase = function(t) {
                return String(t).replace(/\-([a-z])/g, function(t, r) {
                    return r.toUpperCase()
                })
            }, goog.string.toSelectorCase = function(t) {
                return String(t).replace(/([A-Z])/g, "-$1").toLowerCase()
            }, goog.string.toTitleCase = function(t, r) {
                return r = "string" == typeof r ? goog.string.regExpEscape(r) : "\\s", t.replace(RegExp("(^" + (r ? "|[" + r + "]+" : "") + ")([a-z])", "g"), function(t, r, n) {
                    return r + n.toUpperCase()
                })
            }, goog.string.capitalize = function(t) {
                return String(t.charAt(0)).toUpperCase() + String(t.substr(1)).toLowerCase()
            }, goog.string.parseInt = function(t) {
                return isFinite(t) && (t = String(t)), "string" == typeof t ? /^\s*-?0x/i.test(t) ? parseInt(t, 16) : parseInt(t, 10) : NaN
            }, goog.string.splitLimit = function(t, r, n) {
                t = t.split(r);
                for (var i = []; 0 < n && t.length;) i.push(t.shift()), n--;
                return t.length && i.push(t.join(r)), i
            }, goog.string.lastComponent = function(t, r) {
                if (!r) return t;
                "string" == typeof r && (r = [r]);
                for (var n = -1, i = 0; i < r.length; i++)
                    if ("" != r[i]) {
                        var s = t.lastIndexOf(r[i]);
                        s > n && (n = s)
                    }
                return -1 == n ? t : t.slice(n + 1)
            }, goog.string.editDistance = function(t, r) {
                var n = [],
                    i = [];
                if (t == r) return 0;
                if (!t.length || !r.length) return Math.max(t.length, r.length);
                for (var s = 0; s < r.length + 1; s++) n[s] = s;
                for (s = 0; s < t.length; s++) {
                    i[0] = s + 1;
                    for (var o = 0; o < r.length; o++) i[o + 1] = Math.min(i[o] + 1, n[o + 1] + 1, n[o] + Number(t[s] != r[o]));
                    for (o = 0; o < n.length; o++) n[o] = i[o]
                }
                return i[r.length]
            }, goog.labs.userAgent.engine = {}, goog.labs.userAgent.engine.isPresto = function() {
                return goog.labs.userAgent.util.matchUserAgent("Presto")
            }, goog.labs.userAgent.engine.isTrident = function() {
                return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
            }, goog.labs.userAgent.engine.isEdge = function() {
                return goog.labs.userAgent.util.matchUserAgent("Edge")
            }, goog.labs.userAgent.engine.isWebKit = function() {
                return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
            }, goog.labs.userAgent.engine.isGecko = function() {
                return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
            }, goog.labs.userAgent.engine.getVersion = function() {
                var t = goog.labs.userAgent.util.getUserAgent();
                if (t) {
                    t = goog.labs.userAgent.util.extractVersionTuples(t);
                    var r, n = goog.labs.userAgent.engine.getEngineTuple_(t);
                    if (n) return "Gecko" == n[0] ? goog.labs.userAgent.engine.getVersionForKey_(t, "Firefox") : n[1];
                    if ((t = t[0]) && (r = t[2]) && (r = /Trident\/([^\s;]+)/.exec(r))) return r[1]
                }
                return ""
            }, goog.labs.userAgent.engine.getEngineTuple_ = function(t) {
                if (!goog.labs.userAgent.engine.isEdge()) return t[1];
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    if ("Edge" == n[0]) return n
                }
            }, goog.labs.userAgent.engine.isVersionOrHigher = function(t) {
                return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), t)
            }, goog.labs.userAgent.engine.getVersionForKey_ = function(t, r) {
                return (t = goog.array.find(t, function(t) {
                    return r == t[0]
                })) && t[1] || ""
            }, goog.labs.userAgent.platform = {}, goog.labs.userAgent.platform.isAndroid = function() {
                return goog.labs.userAgent.util.matchUserAgent("Android")
            }, goog.labs.userAgent.platform.isIpod = function() {
                return goog.labs.userAgent.util.matchUserAgent("iPod")
            }, goog.labs.userAgent.platform.isIphone = function() {
                return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
            }, goog.labs.userAgent.platform.isIpad = function() {
                return goog.labs.userAgent.util.matchUserAgent("iPad")
            }, goog.labs.userAgent.platform.isIos = function() {
                return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
            }, goog.labs.userAgent.platform.isMacintosh = function() {
                return goog.labs.userAgent.util.matchUserAgent("Macintosh")
            }, goog.labs.userAgent.platform.isLinux = function() {
                return goog.labs.userAgent.util.matchUserAgent("Linux")
            }, goog.labs.userAgent.platform.isWindows = function() {
                return goog.labs.userAgent.util.matchUserAgent("Windows")
            }, goog.labs.userAgent.platform.isChromeOS = function() {
                return goog.labs.userAgent.util.matchUserAgent("CrOS")
            }, goog.labs.userAgent.platform.isChromecast = function() {
                return goog.labs.userAgent.util.matchUserAgent("CrKey")
            }, goog.labs.userAgent.platform.isKaiOS = function() {
                return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS")
            }, goog.labs.userAgent.platform.getVersion = function() {
                var t = goog.labs.userAgent.util.getUserAgent(),
                    r = "";
                return goog.labs.userAgent.platform.isWindows() ? r = (t = (r = /Windows (?:NT|Phone) ([0-9.]+)/).exec(t)) ? t[1] : "0.0" : goog.labs.userAgent.platform.isIos() ? r = (t = (r = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(t)) && t[1].replace(/_/g, ".") : goog.labs.userAgent.platform.isMacintosh() ? r = (t = (r = /Mac OS X ([0-9_.]+)/).exec(t)) ? t[1].replace(/_/g, ".") : "10" : goog.labs.userAgent.platform.isKaiOS() ? r = (t = (r = /(?:KaiOS)\/(\S+)/i).exec(t)) && t[1] : goog.labs.userAgent.platform.isAndroid() ? r = (t = (r = /Android\s+([^\);]+)(\)|;)/).exec(t)) && t[1] : goog.labs.userAgent.platform.isChromeOS() && (r = (t = (r = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(t)) && t[1]), r || ""
            }, goog.labs.userAgent.platform.isVersionOrHigher = function(t) {
                return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), t)
            }, goog.reflect = {}, goog.reflect.object = function(t, r) {
                return r
            }, goog.reflect.objectProperty = function(t, r) {
                return t
            }, goog.reflect.sinkValue = function(t) {
                return goog.reflect.sinkValue[" "](t), t
            }, goog.reflect.sinkValue[" "] = goog.nullFunction, goog.reflect.canAccessProperty = function(t, r) {
                try {
                    return goog.reflect.sinkValue(t[r]), !0
                } catch (t) {}
                return !1
            }, goog.reflect.cache = function(t, r, n, i) {
                return i = i ? i(r) : r, Object.prototype.hasOwnProperty.call(t, i) ? t[i] : t[i] = n(r)
            }, goog.userAgent = {}, goog.userAgent.ASSUME_IE = !1, goog.userAgent.ASSUME_EDGE = !1, goog.userAgent.ASSUME_GECKO = !1, goog.userAgent.ASSUME_WEBKIT = !1, goog.userAgent.ASSUME_MOBILE_WEBKIT = !1, goog.userAgent.ASSUME_OPERA = !1, goog.userAgent.ASSUME_ANY_VERSION = !1, goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA, goog.userAgent.getUserAgentString = function() {
                return goog.labs.userAgent.util.getUserAgent()
            }, goog.userAgent.getNavigatorTyped = function() {
                return goog.global.navigator || null
            }, goog.userAgent.getNavigator = function() {
                return goog.userAgent.getNavigatorTyped()
            }, goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(), goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(), goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge(), goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE, goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko(), goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(), goog.userAgent.isMobile_ = function() {
                return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
            }, goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(), goog.userAgent.SAFARI = goog.userAgent.WEBKIT, goog.userAgent.determinePlatform_ = function() {
                var t = goog.userAgent.getNavigatorTyped();
                return t && t.platform || ""
            }, goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(), goog.userAgent.ASSUME_MAC = !1, goog.userAgent.ASSUME_WINDOWS = !1, goog.userAgent.ASSUME_LINUX = !1, goog.userAgent.ASSUME_X11 = !1, goog.userAgent.ASSUME_ANDROID = !1, goog.userAgent.ASSUME_IPHONE = !1, goog.userAgent.ASSUME_IPAD = !1, goog.userAgent.ASSUME_IPOD = !1, goog.userAgent.ASSUME_KAIOS = !1, goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD, goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh(), goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(), goog.userAgent.isLegacyLinux_ = function() {
                return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
            }, goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(), goog.userAgent.isX11_ = function() {
                var t = goog.userAgent.getNavigatorTyped();
                return !!t && goog.string.contains(t.appVersion || "", "X11")
            }, goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(), goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(), goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(), goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod(), goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos(), goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS(), goog.userAgent.determineVersion_ = function() {
                var t = "",
                    r = goog.userAgent.getVersionRegexResult_();
                return r && (t = r ? r[1] : ""), goog.userAgent.IE && null != (r = goog.userAgent.getDocumentMode_()) && r > parseFloat(t) ? String(r) : t
            }, goog.userAgent.getVersionRegexResult_ = function() {
                var t = goog.userAgent.getUserAgentString();
                return goog.userAgent.GECKO ? /rv:([^\);]+)(\)|;)/.exec(t) : goog.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(t) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(t) : goog.userAgent.OPERA ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
            }, goog.userAgent.getDocumentMode_ = function() {
                var t = goog.global.document;
                return t ? t.documentMode : void 0
            }, goog.userAgent.VERSION = goog.userAgent.determineVersion_(), goog.userAgent.compare = function(t, r) {
                return goog.string.compareVersions(t, r)
            }, goog.userAgent.isVersionOrHigherCache_ = {}, goog.userAgent.isVersionOrHigher = function(t) {
                return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, t, function() {
                    return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, t)
                })
            }, goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher, goog.userAgent.isDocumentModeOrHigher = function(t) {
                return Number(goog.userAgent.DOCUMENT_MODE) >= t
            }, goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher, goog.userAgent.DOCUMENT_MODE = function() {
                if (goog.global.document && goog.userAgent.IE) return goog.userAgent.getDocumentMode_() || parseInt(goog.userAgent.VERSION, 10) || void 0
            }(), goog.userAgent.product = {}, goog.userAgent.product.ASSUME_FIREFOX = !1, goog.userAgent.product.ASSUME_IPHONE = !1, goog.userAgent.product.ASSUME_IPAD = !1, goog.userAgent.product.ASSUME_ANDROID = !1, goog.userAgent.product.ASSUME_CHROME = !1, goog.userAgent.product.ASSUME_SAFARI = !1, goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI, goog.userAgent.product.OPERA = goog.userAgent.OPERA, goog.userAgent.product.IE = goog.userAgent.IE, goog.userAgent.product.EDGE = goog.userAgent.EDGE, goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox(), goog.userAgent.product.isIphoneOrIpod_ = function() {
                return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
            }, goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_(), goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(), goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser(), goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome(), goog.userAgent.product.isSafariDesktop_ = function() {
                return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
            }, goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_(), goog.crypt.base64 = {}, goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=", goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.", goog.crypt.base64.Alphabet = {
                DEFAULT: 0,
                NO_PADDING: 1,
                WEBSAFE: 2,
                WEBSAFE_DOT_PADDING: 3,
                WEBSAFE_NO_PADDING: 4
            }, goog.crypt.base64.paddingChars_ = "=.", goog.crypt.base64.isPadding_ = function(t) {
                return goog.string.contains(goog.crypt.base64.paddingChars_, t)
            }, goog.crypt.base64.byteToCharMaps_ = {}, goog.crypt.base64.charToByteMap_ = null, goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA, goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa, goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob, goog.crypt.base64.encodeByteArray = function(t, r) {
                goog.asserts.assert(goog.isArrayLike(t), "encodeByteArray takes an array as a parameter"), void 0 === r && (r = goog.crypt.base64.Alphabet.DEFAULT), goog.crypt.base64.init_(), r = goog.crypt.base64.byteToCharMaps_[r];
                for (var n = [], i = 0; i < t.length; i += 3) {
                    var s = t[i],
                        o = i + 1 < t.length,
                        u = o ? t[i + 1] : 0,
                        p = i + 2 < t.length,
                        y = p ? t[i + 2] : 0,
                        _ = s >> 2;
                    s = (3 & s) << 4 | u >> 4, u = (15 & u) << 2 | y >> 6, y &= 63, p || (y = 64, o || (u = 64)), n.push(r[_], r[s], r[u] || "", r[y] || "")
                }
                return n.join("")
            }, goog.crypt.base64.encodeString = function(t, r) {
                return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !r ? goog.global.btoa(t) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(t), r)
            }, goog.crypt.base64.decodeString = function(t, r) {
                if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !r) return goog.global.atob(t);
                var n = "";
                return goog.crypt.base64.decodeStringInternal_(t, function(t) {
                    n += String.fromCharCode(t)
                }), n
            }, goog.crypt.base64.decodeStringToByteArray = function(t, r) {
                var n = [];
                return goog.crypt.base64.decodeStringInternal_(t, function(t) {
                    n.push(t)
                }), n
            }, goog.crypt.base64.decodeStringToUint8Array = function(t) {
                goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
                var r = t.length,
                    n = 3 * r / 4;
                n % 3 ? n = Math.floor(n) : goog.crypt.base64.isPadding_(t[r - 1]) && (n = goog.crypt.base64.isPadding_(t[r - 2]) ? n - 2 : n - 1);
                var i = new Uint8Array(n),
                    s = 0;
                return goog.crypt.base64.decodeStringInternal_(t, function(t) {
                    i[s++] = t
                }), i.subarray(0, s)
            }, goog.crypt.base64.decodeStringInternal_ = function(t, r) {
                function n(r) {
                    for (; i < t.length;) {
                        var n = t.charAt(i++),
                            s = goog.crypt.base64.charToByteMap_[n];
                        if (null != s) return s;
                        if (!goog.string.isEmptyOrWhitespace(n)) throw Error("Unknown base64 encoding at char: " + n)
                    }
                    return r
                }
                goog.crypt.base64.init_();
                for (var i = 0;;) {
                    var s = n(-1),
                        o = n(0),
                        u = n(64),
                        p = n(64);
                    if (64 === p && -1 === s) break;
                    r(s << 2 | o >> 4), 64 != u && (r(o << 4 & 240 | u >> 2), 64 != p && r(u << 6 & 192 | p))
                }
            }, goog.crypt.base64.init_ = function() {
                if (!goog.crypt.base64.charToByteMap_) {
                    goog.crypt.base64.charToByteMap_ = {};
                    for (var t = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), r = ["+/=", "+/", "-_=", "-_.", "-_"], n = 0; 5 > n; n++) {
                        var i = t.concat(r[n].split(""));
                        goog.crypt.base64.byteToCharMaps_[n] = i;
                        for (var s = 0; s < i.length; s++) {
                            var o = i[s],
                                u = goog.crypt.base64.charToByteMap_[o];
                            void 0 === u ? goog.crypt.base64.charToByteMap_[o] = s : goog.asserts.assert(u === s)
                        }
                    }
                }
            }, jspb.utils = {}, jspb.utils.split64Low = 0, jspb.utils.split64High = 0, jspb.utils.splitUint64 = function(t) {
                var r = t >>> 0;
                t = Math.floor((t - r) / jspb.BinaryConstants.TWO_TO_32) >>> 0, jspb.utils.split64Low = r, jspb.utils.split64High = t
            }, jspb.utils.splitInt64 = function(t) {
                var r = 0 > t,
                    n = (t = Math.abs(t)) >>> 0;
                t = Math.floor((t - n) / jspb.BinaryConstants.TWO_TO_32) >>> 0, r && (t = ~t >>> 0, 4294967295 < (n = (~n >>> 0) + 1) && (n = 0, 4294967295 < ++t && (t = 0))), jspb.utils.split64Low = n, jspb.utils.split64High = t
            }, jspb.utils.splitZigzag64 = function(t) {
                var r = 0 > t;
                t = 2 * Math.abs(t), jspb.utils.splitUint64(t), t = jspb.utils.split64Low;
                var n = jspb.utils.split64High;
                r && (0 == t ? 0 == n ? n = t = 4294967295 : (n--, t = 4294967295) : t--), jspb.utils.split64Low = t, jspb.utils.split64High = n
            }, jspb.utils.splitFloat32 = function(t) {
                var r = 0 > t ? 1 : 0;
                if (0 === (t = r ? -t : t)) 0 < 1 / t ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
                else if (isNaN(t)) jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
                else if (t > jspb.BinaryConstants.FLOAT32_MAX) jspb.utils.split64High = 0, jspb.utils.split64Low = (r << 31 | 2139095040) >>> 0;
                else if (t < jspb.BinaryConstants.FLOAT32_MIN) t = Math.round(t / 1401298464324817e-60), jspb.utils.split64High = 0, jspb.utils.split64Low = (r << 31 | t) >>> 0;
                else {
                    var n = Math.floor(Math.log(t) / Math.LN2);
                    t *= Math.pow(2, -n), 16777216 <= (t = Math.round(t * jspb.BinaryConstants.TWO_TO_23)) && ++n, jspb.utils.split64High = 0, jspb.utils.split64Low = (r << 31 | n + 127 << 23 | 8388607 & t) >>> 0
                }
            }, jspb.utils.splitFloat64 = function(t) {
                var r = 0 > t ? 1 : 0;
                if (0 === (t = r ? -t : t)) jspb.utils.split64High = 0 < 1 / t ? 0 : 2147483648, jspb.utils.split64Low = 0;
                else if (isNaN(t)) jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
                else if (t > jspb.BinaryConstants.FLOAT64_MAX) jspb.utils.split64High = (r << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
                else if (t < jspb.BinaryConstants.FLOAT64_MIN) {
                    var n = t / 5e-324;
                    t = n / jspb.BinaryConstants.TWO_TO_32, jspb.utils.split64High = (r << 31 | t) >>> 0, jspb.utils.split64Low = n >>> 0
                } else {
                    var i = 0;
                    if (2 <= (n = t))
                        for (; 2 <= n && 1023 > i;) i++, n /= 2;
                    else
                        for (; 1 > n && -1022 < i;) n *= 2, i--;
                    t = (n = t * Math.pow(2, -i)) * jspb.BinaryConstants.TWO_TO_20 & 1048575, n = n * jspb.BinaryConstants.TWO_TO_52 >>> 0, jspb.utils.split64High = (r << 31 | i + 1023 << 20 | t) >>> 0, jspb.utils.split64Low = n
                }
            }, jspb.utils.splitHash64 = function(t) {
                var r = t.charCodeAt(0),
                    n = t.charCodeAt(1),
                    i = t.charCodeAt(2),
                    s = t.charCodeAt(3),
                    o = t.charCodeAt(4),
                    u = t.charCodeAt(5),
                    p = t.charCodeAt(6);
                t = t.charCodeAt(7), jspb.utils.split64Low = r + (n << 8) + (i << 16) + (s << 24) >>> 0, jspb.utils.split64High = o + (u << 8) + (p << 16) + (t << 24) >>> 0
            }, jspb.utils.joinUint64 = function(t, r) {
                return r * jspb.BinaryConstants.TWO_TO_32 + (t >>> 0)
            }, jspb.utils.joinInt64 = function(t, r) {
                var n = 2147483648 & r;
                return n && (r = ~r >>> 0, 0 == (t = ~t + 1 >>> 0) && (r = r + 1 >>> 0)), t = jspb.utils.joinUint64(t, r), n ? -t : t
            }, jspb.utils.toZigzag64 = function(t, r, n) {
                var i = r >> 31;
                return n(t << 1 ^ i, (r << 1 | t >>> 31) ^ i)
            }, jspb.utils.joinZigzag64 = function(t, r) {
                return jspb.utils.fromZigzag64(t, r, jspb.utils.joinInt64)
            }, jspb.utils.fromZigzag64 = function(t, r, n) {
                var i = -(1 & t);
                return n((t >>> 1 | r << 31) ^ i, r >>> 1 ^ i)
            }, jspb.utils.joinFloat32 = function(t, r) {
                r = 2 * (t >> 31) + 1;
                var n = t >>> 23 & 255;
                return t &= 8388607, 255 == n ? t ? NaN : 1 / 0 * r : 0 == n ? 1401298464324817e-60 * r * t : r * Math.pow(2, n - 150) * (t + 8388608)
            }, jspb.utils.joinFloat64 = function(t, r) {
                var n = 2 * (r >> 31) + 1,
                    i = r >>> 20 & 2047;
                return t = jspb.BinaryConstants.TWO_TO_32 * (1048575 & r) + t, 2047 == i ? t ? NaN : 1 / 0 * n : 0 == i ? 5e-324 * n * t : n * Math.pow(2, i - 1075) * (t + jspb.BinaryConstants.TWO_TO_52)
            }, jspb.utils.joinHash64 = function(t, r) {
                return String.fromCharCode(t >>> 0 & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, r >>> 0 & 255, r >>> 8 & 255, r >>> 16 & 255, r >>> 24 & 255)
            }, jspb.utils.DIGITS = "0123456789abcdef".split(""), jspb.utils.ZERO_CHAR_CODE_ = 48, jspb.utils.A_CHAR_CODE_ = 97, jspb.utils.joinUnsignedDecimalString = function(t, r) {
                function n(t, r) {
                    return t = t ? String(t) : "", r ? "0000000".slice(t.length) + t : t
                }
                if (2097151 >= r) return "" + jspb.utils.joinUint64(t, r);
                var i = (t >>> 24 | r << 8) >>> 0 & 16777215;
                return t = (16777215 & t) + 6777216 * i + 6710656 * (r = r >> 16 & 65535), i += 8147497 * r, r *= 2, 1e7 <= t && (i += Math.floor(t / 1e7), t %= 1e7), 1e7 <= i && (r += Math.floor(i / 1e7), i %= 1e7), n(r, 0) + n(i, r) + n(t, 1)
            }, jspb.utils.joinSignedDecimalString = function(t, r) {
                var n = 2147483648 & r;
                return n && (r = ~r + (0 == (t = ~t + 1 >>> 0) ? 1 : 0) >>> 0), t = jspb.utils.joinUnsignedDecimalString(t, r), n ? "-" + t : t
            }, jspb.utils.hash64ToDecimalString = function(t, r) {
                jspb.utils.splitHash64(t), t = jspb.utils.split64Low;
                var n = jspb.utils.split64High;
                return r ? jspb.utils.joinSignedDecimalString(t, n) : jspb.utils.joinUnsignedDecimalString(t, n)
            }, jspb.utils.hash64ArrayToDecimalStrings = function(t, r) {
                for (var n = Array(t.length), i = 0; i < t.length; i++) n[i] = jspb.utils.hash64ToDecimalString(t[i], r);
                return n
            }, jspb.utils.decimalStringToHash64 = function(t) {
                function r(t, r) {
                    for (var n = 0; 8 > n && (1 !== t || 0 < r); n++) r = t * s[n] + r, s[n] = 255 & r, r >>>= 8
                }

                function n() {
                    for (var t = 0; 8 > t; t++) s[t] = 255 & ~s[t]
                }
                jspb.asserts.assert(0 < t.length);
                var i = !1;
                "-" === t[0] && (i = !0, t = t.slice(1));
                for (var s = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < t.length; o++) r(10, t.charCodeAt(o) - jspb.utils.ZERO_CHAR_CODE_);
                return i && (n(), r(1, 1)), goog.crypt.byteArrayToString(s)
            }, jspb.utils.splitDecimalString = function(t) {
                jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(t))
            }, jspb.utils.toHexDigit_ = function(t) {
                return String.fromCharCode(10 > t ? jspb.utils.ZERO_CHAR_CODE_ + t : jspb.utils.A_CHAR_CODE_ - 10 + t)
            }, jspb.utils.fromHexCharCode_ = function(t) {
                return t >= jspb.utils.A_CHAR_CODE_ ? t - jspb.utils.A_CHAR_CODE_ + 10 : t - jspb.utils.ZERO_CHAR_CODE_
            }, jspb.utils.hash64ToHexString = function(t) {
                var r = Array(18);
                r[0] = "0", r[1] = "x";
                for (var n = 0; 8 > n; n++) {
                    var i = t.charCodeAt(7 - n);
                    r[2 * n + 2] = jspb.utils.toHexDigit_(i >> 4), r[2 * n + 3] = jspb.utils.toHexDigit_(15 & i)
                }
                return r.join("")
            }, jspb.utils.hexStringToHash64 = function(t) {
                t = t.toLowerCase(), jspb.asserts.assert(18 == t.length), jspb.asserts.assert("0" == t[0]), jspb.asserts.assert("x" == t[1]);
                for (var r = "", n = 0; 8 > n; n++) r = String.fromCharCode(16 * jspb.utils.fromHexCharCode_(t.charCodeAt(2 * n + 2)) + jspb.utils.fromHexCharCode_(t.charCodeAt(2 * n + 3))) + r;
                return r
            }, jspb.utils.hash64ToNumber = function(t, r) {
                jspb.utils.splitHash64(t), t = jspb.utils.split64Low;
                var n = jspb.utils.split64High;
                return r ? jspb.utils.joinInt64(t, n) : jspb.utils.joinUint64(t, n)
            }, jspb.utils.numberToHash64 = function(t) {
                return jspb.utils.splitInt64(t), jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
            }, jspb.utils.countVarints = function(t, r, n) {
                for (var i = 0, s = r; s < n; s++) i += t[s] >> 7;
                return n - r - i
            }, jspb.utils.countVarintFields = function(t, r, n, i) {
                var s = 0;
                if (128 > (i = 8 * i + jspb.BinaryConstants.WireType.VARINT))
                    for (; r < n && t[r++] == i;)
                        for (s++;;) {
                            var o = t[r++];
                            if (0 == (128 & o)) break
                        } else
                            for (; r < n;) {
                                for (o = i; 128 < o;) {
                                    if (t[r] != (127 & o | 128)) return s;
                                    r++, o >>= 7
                                }
                                if (t[r++] != o) break;
                                for (s++; 0 != (128 & (o = t[r++])););
                            }
                return s
            }, jspb.utils.countFixedFields_ = function(t, r, n, i, s) {
                var o = 0;
                if (128 > i)
                    for (; r < n && t[r++] == i;) o++, r += s;
                else
                    for (; r < n;) {
                        for (var u = i; 128 < u;) {
                            if (t[r++] != (127 & u | 128)) return o;
                            u >>= 7
                        }
                        if (t[r++] != u) break;
                        o++, r += s
                    }
                return o
            }, jspb.utils.countFixed32Fields = function(t, r, n, i) {
                return jspb.utils.countFixedFields_(t, r, n, 8 * i + jspb.BinaryConstants.WireType.FIXED32, 4)
            }, jspb.utils.countFixed64Fields = function(t, r, n, i) {
                return jspb.utils.countFixedFields_(t, r, n, 8 * i + jspb.BinaryConstants.WireType.FIXED64, 8)
            }, jspb.utils.countDelimitedFields = function(t, r, n, i) {
                var s = 0;
                for (i = 8 * i + jspb.BinaryConstants.WireType.DELIMITED; r < n;) {
                    for (var o = i; 128 < o;) {
                        if (t[r++] != (127 & o | 128)) return s;
                        o >>= 7
                    }
                    if (t[r++] != o) break;
                    s++;
                    for (var u = 0, p = 1; u += (127 & (o = t[r++])) * p, p *= 128, 0 != (128 & o););
                    r += u
                }
                return s
            }, jspb.utils.debugBytesToTextFormat = function(t) {
                var r = '"';
                if (t) {
                    t = jspb.utils.byteSourceToUint8Array(t);
                    for (var n = 0; n < t.length; n++) r += "\\x", 16 > t[n] && (r += "0"), r += t[n].toString(16)
                }
                return r + '"'
            }, jspb.utils.debugScalarToTextFormat = function(t) {
                return "string" == typeof t ? goog.string.quote(t) : t.toString()
            }, jspb.utils.stringToByteArray = function(t) {
                for (var r = new Uint8Array(t.length), n = 0; n < t.length; n++) {
                    var i = t.charCodeAt(n);
                    if (255 < i) throw Error("Conversion error: string contains codepoint outside of byte range");
                    r[n] = i
                }
                return r
            }, jspb.utils.byteSourceToUint8Array = function(t) {
                return t.constructor === Uint8Array ? t : t.constructor === ArrayBuffer || t.constructor === Array ? new Uint8Array(t) : t.constructor === String ? goog.crypt.base64.decodeStringToUint8Array(t) : t instanceof Uint8Array ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : (jspb.asserts.fail("Type not convertible to Uint8Array."), new Uint8Array(0))
            }, jspb.BinaryDecoder = function(t, r, n) {
                this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1, t && this.setBlock(t, r, n)
            }, jspb.BinaryDecoder.instanceCache_ = [], jspb.BinaryDecoder.alloc = function(t, r, n) {
                if (jspb.BinaryDecoder.instanceCache_.length) {
                    var i = jspb.BinaryDecoder.instanceCache_.pop();
                    return t && i.setBlock(t, r, n), i
                }
                return new jspb.BinaryDecoder(t, r, n)
            }, jspb.BinaryDecoder.prototype.free = function() {
                this.clear(), 100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this)
            }, jspb.BinaryDecoder.prototype.clone = function() {
                return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_)
            }, jspb.BinaryDecoder.prototype.clear = function() {
                this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1
            }, jspb.BinaryDecoder.prototype.getBuffer = function() {
                return this.bytes_
            }, jspb.BinaryDecoder.prototype.setBlock = function(t, r, n) {
                this.bytes_ = jspb.utils.byteSourceToUint8Array(t), this.start_ = void 0 !== r ? r : 0, this.end_ = void 0 !== n ? this.start_ + n : this.bytes_.length, this.cursor_ = this.start_
            }, jspb.BinaryDecoder.prototype.getEnd = function() {
                return this.end_
            }, jspb.BinaryDecoder.prototype.setEnd = function(t) {
                this.end_ = t
            }, jspb.BinaryDecoder.prototype.reset = function() {
                this.cursor_ = this.start_
            }, jspb.BinaryDecoder.prototype.getCursor = function() {
                return this.cursor_
            }, jspb.BinaryDecoder.prototype.setCursor = function(t) {
                this.cursor_ = t
            }, jspb.BinaryDecoder.prototype.advance = function(t) {
                this.cursor_ += t, jspb.asserts.assert(this.cursor_ <= this.end_)
            }, jspb.BinaryDecoder.prototype.atEnd = function() {
                return this.cursor_ == this.end_
            }, jspb.BinaryDecoder.prototype.pastEnd = function() {
                return this.cursor_ > this.end_
            }, jspb.BinaryDecoder.prototype.getError = function() {
                return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_
            }, jspb.BinaryDecoder.prototype.readSplitVarint64 = function(t) {
                for (var r = 128, n = 0, i = 0, s = 0; 4 > s && 128 <= r; s++) n |= (127 & (r = this.bytes_[this.cursor_++])) << 7 * s;
                if (128 <= r && (n |= (127 & (r = this.bytes_[this.cursor_++])) << 28, i |= (127 & r) >> 4), 128 <= r)
                    for (s = 0; 5 > s && 128 <= r; s++) i |= (127 & (r = this.bytes_[this.cursor_++])) << 7 * s + 3;
                if (128 > r) return t(n >>> 0, i >>> 0);
                jspb.asserts.fail("Failed to read varint, encoding is invalid."), this.error_ = !0
            }, jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(t) {
                return this.readSplitVarint64(function(r, n) {
                    return jspb.utils.fromZigzag64(r, n, t)
                })
            }, jspb.BinaryDecoder.prototype.readSplitFixed64 = function(t) {
                var r = this.bytes_,
                    n = this.cursor_;
                this.cursor_ += 8;
                for (var i = 0, s = 0, o = n + 7; o >= n; o--) i = i << 8 | r[o], s = s << 8 | r[o + 4];
                return t(i, s)
            }, jspb.BinaryDecoder.prototype.skipVarint = function() {
                for (; 128 & this.bytes_[this.cursor_];) this.cursor_++;
                this.cursor_++
            }, jspb.BinaryDecoder.prototype.unskipVarint = function(t) {
                for (; 128 < t;) this.cursor_--, t >>>= 7;
                this.cursor_--
            }, jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
                var t = this.bytes_,
                    r = t[this.cursor_ + 0],
                    n = 127 & r;
                return 128 > r ? (this.cursor_ += 1, jspb.asserts.assert(this.cursor_ <= this.end_), n) : (n |= (127 & (r = t[this.cursor_ + 1])) << 7, 128 > r) ? (this.cursor_ += 2, jspb.asserts.assert(this.cursor_ <= this.end_), n) : (n |= (127 & (r = t[this.cursor_ + 2])) << 14, 128 > r) ? (this.cursor_ += 3, jspb.asserts.assert(this.cursor_ <= this.end_), n) : (n |= (127 & (r = t[this.cursor_ + 3])) << 21, 128 > r) ? (this.cursor_ += 4, jspb.asserts.assert(this.cursor_ <= this.end_), n) : (n |= (15 & (r = t[this.cursor_ + 4])) << 28, 128 > r) ? (this.cursor_ += 5, jspb.asserts.assert(this.cursor_ <= this.end_), n >>> 0) : (this.cursor_ += 5, 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && jspb.asserts.assert(!1), jspb.asserts.assert(this.cursor_ <= this.end_), n)
            }, jspb.BinaryDecoder.prototype.readSignedVarint32 = function() {
                return ~~this.readUnsignedVarint32()
            }, jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
                return this.readUnsignedVarint32().toString()
            }, jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
                return this.readSignedVarint32().toString()
            }, jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
                var t = this.readUnsignedVarint32();
                return t >>> 1 ^ -(1 & t)
            }, jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
                return this.readSplitVarint64(jspb.utils.joinUint64)
            }, jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
                return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString)
            }, jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
                return this.readSplitVarint64(jspb.utils.joinInt64)
            }, jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
                return this.readSplitVarint64(jspb.utils.joinSignedDecimalString)
            }, jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
                return this.readSplitVarint64(jspb.utils.joinZigzag64)
            }, jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
                return this.readSplitZigzagVarint64(jspb.utils.joinHash64)
            }, jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
                return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString)
            }, jspb.BinaryDecoder.prototype.readUint8 = function() {
                var t = this.bytes_[this.cursor_ + 0];
                return this.cursor_ += 1, jspb.asserts.assert(this.cursor_ <= this.end_), t
            }, jspb.BinaryDecoder.prototype.readUint16 = function() {
                var t = this.bytes_[this.cursor_ + 0],
                    r = this.bytes_[this.cursor_ + 1];
                return this.cursor_ += 2, jspb.asserts.assert(this.cursor_ <= this.end_), t << 0 | r << 8
            }, jspb.BinaryDecoder.prototype.readUint32 = function() {
                var t = this.bytes_[this.cursor_ + 0],
                    r = this.bytes_[this.cursor_ + 1],
                    n = this.bytes_[this.cursor_ + 2],
                    i = this.bytes_[this.cursor_ + 3];
                return this.cursor_ += 4, jspb.asserts.assert(this.cursor_ <= this.end_), (t << 0 | r << 8 | n << 16 | i << 24) >>> 0
            }, jspb.BinaryDecoder.prototype.readUint64 = function() {
                var t = this.readUint32(),
                    r = this.readUint32();
                return jspb.utils.joinUint64(t, r)
            }, jspb.BinaryDecoder.prototype.readUint64String = function() {
                var t = this.readUint32(),
                    r = this.readUint32();
                return jspb.utils.joinUnsignedDecimalString(t, r)
            }, jspb.BinaryDecoder.prototype.readInt8 = function() {
                var t = this.bytes_[this.cursor_ + 0];
                return this.cursor_ += 1, jspb.asserts.assert(this.cursor_ <= this.end_), t << 24 >> 24
            }, jspb.BinaryDecoder.prototype.readInt16 = function() {
                var t = this.bytes_[this.cursor_ + 0],
                    r = this.bytes_[this.cursor_ + 1];
                return this.cursor_ += 2, jspb.asserts.assert(this.cursor_ <= this.end_), (t << 0 | r << 8) << 16 >> 16
            }, jspb.BinaryDecoder.prototype.readInt32 = function() {
                var t = this.bytes_[this.cursor_ + 0],
                    r = this.bytes_[this.cursor_ + 1],
                    n = this.bytes_[this.cursor_ + 2],
                    i = this.bytes_[this.cursor_ + 3];
                return this.cursor_ += 4, jspb.asserts.assert(this.cursor_ <= this.end_), t << 0 | r << 8 | n << 16 | i << 24
            }, jspb.BinaryDecoder.prototype.readInt64 = function() {
                var t = this.readUint32(),
                    r = this.readUint32();
                return jspb.utils.joinInt64(t, r)
            }, jspb.BinaryDecoder.prototype.readInt64String = function() {
                var t = this.readUint32(),
                    r = this.readUint32();
                return jspb.utils.joinSignedDecimalString(t, r)
            }, jspb.BinaryDecoder.prototype.readFloat = function() {
                var t = this.readUint32();
                return jspb.utils.joinFloat32(t, 0)
            }, jspb.BinaryDecoder.prototype.readDouble = function() {
                var t = this.readUint32(),
                    r = this.readUint32();
                return jspb.utils.joinFloat64(t, r)
            }, jspb.BinaryDecoder.prototype.readBool = function() {
                return !!this.bytes_[this.cursor_++]
            }, jspb.BinaryDecoder.prototype.readEnum = function() {
                return this.readSignedVarint32()
            }, jspb.BinaryDecoder.prototype.readString = function(t) {
                var r = this.bytes_,
                    n = this.cursor_;
                t = n + t;
                for (var i = [], s = ""; n < t;) {
                    var o = r[n++];
                    if (128 > o) i.push(o);
                    else if (192 > o) continue;
                    else if (224 > o) {
                        var u = r[n++];
                        i.push((31 & o) << 6 | 63 & u)
                    } else if (240 > o) {
                        u = r[n++];
                        var p = r[n++];
                        i.push((15 & o) << 12 | (63 & u) << 6 | 63 & p)
                    } else 248 > o && (o = ((7 & o) << 18 | (63 & (u = r[n++])) << 12 | (63 & (p = r[n++])) << 6 | 63 & r[n++]) - 65536, i.push((o >> 10 & 1023) + 55296, (1023 & o) + 56320));
                    8192 <= i.length && (s += String.fromCharCode.apply(null, i), i.length = 0)
                }
                return s += goog.crypt.byteArrayToString(i), this.cursor_ = n, s
            }, jspb.BinaryDecoder.prototype.readStringWithLength = function() {
                var t = this.readUnsignedVarint32();
                return this.readString(t)
            }, jspb.BinaryDecoder.prototype.readBytes = function(t) {
                if (0 > t || this.cursor_ + t > this.bytes_.length) return this.error_ = !0, jspb.asserts.fail("Invalid byte length!"), new Uint8Array(0);
                var r = this.bytes_.subarray(this.cursor_, this.cursor_ + t);
                return this.cursor_ += t, jspb.asserts.assert(this.cursor_ <= this.end_), r
            }, jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
                return this.readSplitVarint64(jspb.utils.joinHash64)
            }, jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
                var t = this.bytes_,
                    r = this.cursor_,
                    n = t[r + 0],
                    i = t[r + 1],
                    s = t[r + 2],
                    o = t[r + 3],
                    u = t[r + 4],
                    p = t[r + 5],
                    y = t[r + 6];
                return t = t[r + 7], this.cursor_ += 8, String.fromCharCode(n, i, s, o, u, p, y, t)
            }, jspb.BinaryReader = function(t, r, n) {
                this.decoder_ = jspb.BinaryDecoder.alloc(t, r, n), this.fieldCursor_ = this.decoder_.getCursor(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null
            }, jspb.BinaryReader.instanceCache_ = [], jspb.BinaryReader.alloc = function(t, r, n) {
                if (jspb.BinaryReader.instanceCache_.length) {
                    var i = jspb.BinaryReader.instanceCache_.pop();
                    return t && i.decoder_.setBlock(t, r, n), i
                }
                return new jspb.BinaryReader(t, r, n)
            }, jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc, jspb.BinaryReader.prototype.free = function() {
                this.decoder_.clear(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null, 100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this)
            }, jspb.BinaryReader.prototype.getFieldCursor = function() {
                return this.fieldCursor_
            }, jspb.BinaryReader.prototype.getCursor = function() {
                return this.decoder_.getCursor()
            }, jspb.BinaryReader.prototype.getBuffer = function() {
                return this.decoder_.getBuffer()
            }, jspb.BinaryReader.prototype.getFieldNumber = function() {
                return this.nextField_
            }, goog.exportProperty(jspb.BinaryReader.prototype, "getFieldNumber", jspb.BinaryReader.prototype.getFieldNumber), jspb.BinaryReader.prototype.getWireType = function() {
                return this.nextWireType_
            }, jspb.BinaryReader.prototype.isDelimited = function() {
                return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
            }, goog.exportProperty(jspb.BinaryReader.prototype, "isDelimited", jspb.BinaryReader.prototype.isDelimited), jspb.BinaryReader.prototype.isEndGroup = function() {
                return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
            }, goog.exportProperty(jspb.BinaryReader.prototype, "isEndGroup", jspb.BinaryReader.prototype.isEndGroup), jspb.BinaryReader.prototype.getError = function() {
                return this.error_ || this.decoder_.getError()
            }, jspb.BinaryReader.prototype.setBlock = function(t, r, n) {
                this.decoder_.setBlock(t, r, n), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
            }, jspb.BinaryReader.prototype.reset = function() {
                this.decoder_.reset(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
            }, jspb.BinaryReader.prototype.advance = function(t) {
                this.decoder_.advance(t)
            }, jspb.BinaryReader.prototype.nextField = function() {
                if (this.decoder_.atEnd()) return !1;
                if (this.getError()) return jspb.asserts.fail("Decoder hit an error"), !1;
                this.fieldCursor_ = this.decoder_.getCursor();
                var t = this.decoder_.readUnsignedVarint32(),
                    r = t >>> 3;
                return (t &= 7) != jspb.BinaryConstants.WireType.VARINT && t != jspb.BinaryConstants.WireType.FIXED32 && t != jspb.BinaryConstants.WireType.FIXED64 && t != jspb.BinaryConstants.WireType.DELIMITED && t != jspb.BinaryConstants.WireType.START_GROUP && t != jspb.BinaryConstants.WireType.END_GROUP ? (jspb.asserts.fail("Invalid wire type: %s (at position %s)", t, this.fieldCursor_), this.error_ = !0, !1) : (this.nextField_ = r, this.nextWireType_ = t, !0)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "nextField", jspb.BinaryReader.prototype.nextField), jspb.BinaryReader.prototype.unskipHeader = function() {
                this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_)
            }, jspb.BinaryReader.prototype.skipMatchingFields = function() {
                var t = this.nextField_;
                for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == t;) this.skipField();
                this.decoder_.atEnd() || this.unskipHeader()
            }, jspb.BinaryReader.prototype.skipVarintField = function() {
                this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (jspb.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint()
            }, jspb.BinaryReader.prototype.skipDelimitedField = function() {
                if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED) jspb.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
                else {
                    var t = this.decoder_.readUnsignedVarint32();
                    this.decoder_.advance(t)
                }
            }, jspb.BinaryReader.prototype.skipFixed32Field = function() {
                this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4)
            }, jspb.BinaryReader.prototype.skipFixed64Field = function() {
                this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8)
            }, jspb.BinaryReader.prototype.skipGroup = function() {
                for (var t = this.nextField_;;) {
                    if (!this.nextField()) {
                        jspb.asserts.fail("Unmatched start-group tag: stream EOF"), this.error_ = !0;
                        break
                    }
                    if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
                        this.nextField_ != t && (jspb.asserts.fail("Unmatched end-group tag"), this.error_ = !0);
                        break
                    }
                    this.skipField()
                }
            }, jspb.BinaryReader.prototype.skipField = function() {
                switch (this.nextWireType_) {
                    case jspb.BinaryConstants.WireType.VARINT:
                        this.skipVarintField();
                        break;
                    case jspb.BinaryConstants.WireType.FIXED64:
                        this.skipFixed64Field();
                        break;
                    case jspb.BinaryConstants.WireType.DELIMITED:
                        this.skipDelimitedField();
                        break;
                    case jspb.BinaryConstants.WireType.FIXED32:
                        this.skipFixed32Field();
                        break;
                    case jspb.BinaryConstants.WireType.START_GROUP:
                        this.skipGroup();
                        break;
                    default:
                        jspb.asserts.fail("Invalid wire encoding for field.")
                }
            }, jspb.BinaryReader.prototype.registerReadCallback = function(t, r) {
                null === this.readCallbacks_ && (this.readCallbacks_ = {}), jspb.asserts.assert(!this.readCallbacks_[t]), this.readCallbacks_[t] = r
            }, jspb.BinaryReader.prototype.runReadCallback = function(t) {
                return jspb.asserts.assert(null !== this.readCallbacks_), t = this.readCallbacks_[t], jspb.asserts.assert(t), t(this)
            }, jspb.BinaryReader.prototype.readAny = function(t) {
                this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(t);
                var r = jspb.BinaryConstants.FieldType;
                switch (t) {
                    case r.DOUBLE:
                        return this.readDouble();
                    case r.FLOAT:
                        return this.readFloat();
                    case r.INT64:
                        return this.readInt64();
                    case r.UINT64:
                        return this.readUint64();
                    case r.INT32:
                        return this.readInt32();
                    case r.FIXED64:
                        return this.readFixed64();
                    case r.FIXED32:
                        return this.readFixed32();
                    case r.BOOL:
                        return this.readBool();
                    case r.STRING:
                        return this.readString();
                    case r.GROUP:
                        jspb.asserts.fail("Group field type not supported in readAny()");
                    case r.MESSAGE:
                        jspb.asserts.fail("Message field type not supported in readAny()");
                    case r.BYTES:
                        return this.readBytes();
                    case r.UINT32:
                        return this.readUint32();
                    case r.ENUM:
                        return this.readEnum();
                    case r.SFIXED32:
                        return this.readSfixed32();
                    case r.SFIXED64:
                        return this.readSfixed64();
                    case r.SINT32:
                        return this.readSint32();
                    case r.SINT64:
                        return this.readSint64();
                    case r.FHASH64:
                        return this.readFixedHash64();
                    case r.VHASH64:
                        return this.readVarintHash64();
                    default:
                        jspb.asserts.fail("Invalid field type in readAny()")
                }
                return 0
            }, jspb.BinaryReader.prototype.readMessage = function(t, r) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var n = this.decoder_.getEnd(),
                    i = this.decoder_.readUnsignedVarint32();
                i = this.decoder_.getCursor() + i, this.decoder_.setEnd(i), r(t, this), this.decoder_.setCursor(i), this.decoder_.setEnd(n)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readMessage", jspb.BinaryReader.prototype.readMessage), jspb.BinaryReader.prototype.readGroup = function(t, r, n) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP), jspb.asserts.assert(this.nextField_ == t), n(r, this), this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (jspb.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = !0)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readGroup", jspb.BinaryReader.prototype.readGroup), jspb.BinaryReader.prototype.getFieldDecoder = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var t = this.decoder_.readUnsignedVarint32(),
                    r = this.decoder_.getCursor(),
                    n = r + t;
                return t = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), r, t), this.decoder_.setCursor(n), t
            }, jspb.BinaryReader.prototype.readInt32 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readInt32", jspb.BinaryReader.prototype.readInt32), jspb.BinaryReader.prototype.readInt32String = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32String()
            }, jspb.BinaryReader.prototype.readInt64 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readInt64", jspb.BinaryReader.prototype.readInt64), jspb.BinaryReader.prototype.readInt64String = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64String()
            }, jspb.BinaryReader.prototype.readUint32 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readUint32", jspb.BinaryReader.prototype.readUint32), jspb.BinaryReader.prototype.readUint32String = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32String()
            }, jspb.BinaryReader.prototype.readUint64 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readUint64", jspb.BinaryReader.prototype.readUint64), jspb.BinaryReader.prototype.readUint64String = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64String()
            }, jspb.BinaryReader.prototype.readSint32 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint32()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readSint32", jspb.BinaryReader.prototype.readSint32), jspb.BinaryReader.prototype.readSint64 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readSint64", jspb.BinaryReader.prototype.readSint64), jspb.BinaryReader.prototype.readSint64String = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64String()
            }, jspb.BinaryReader.prototype.readFixed32 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readUint32()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readFixed32", jspb.BinaryReader.prototype.readFixed32), jspb.BinaryReader.prototype.readFixed64 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readFixed64", jspb.BinaryReader.prototype.readFixed64), jspb.BinaryReader.prototype.readFixed64String = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64String()
            }, jspb.BinaryReader.prototype.readSfixed32 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed32", jspb.BinaryReader.prototype.readSfixed32), jspb.BinaryReader.prototype.readSfixed32String = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32().toString()
            }, jspb.BinaryReader.prototype.readSfixed64 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed64", jspb.BinaryReader.prototype.readSfixed64), jspb.BinaryReader.prototype.readSfixed64String = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64String()
            }, jspb.BinaryReader.prototype.readFloat = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readFloat()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readFloat", jspb.BinaryReader.prototype.readFloat), jspb.BinaryReader.prototype.readDouble = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readDouble()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readDouble", jspb.BinaryReader.prototype.readDouble), jspb.BinaryReader.prototype.readBool = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), !!this.decoder_.readUnsignedVarint32()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readBool", jspb.BinaryReader.prototype.readBool), jspb.BinaryReader.prototype.readEnum = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readEnum", jspb.BinaryReader.prototype.readEnum), jspb.BinaryReader.prototype.readString = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var t = this.decoder_.readUnsignedVarint32();
                return this.decoder_.readString(t)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readString", jspb.BinaryReader.prototype.readString), jspb.BinaryReader.prototype.readBytes = function() {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var t = this.decoder_.readUnsignedVarint32();
                return this.decoder_.readBytes(t)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readBytes", jspb.BinaryReader.prototype.readBytes), jspb.BinaryReader.prototype.readVarintHash64 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readVarintHash64()
            }, jspb.BinaryReader.prototype.readSintHash64 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarintHash64()
            }, jspb.BinaryReader.prototype.readSplitVarint64 = function(t) {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSplitVarint64(t)
            }, jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(t) {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSplitVarint64(function(r, n) {
                    return jspb.utils.fromZigzag64(r, n, t)
                })
            }, jspb.BinaryReader.prototype.readFixedHash64 = function() {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readFixedHash64()
            }, jspb.BinaryReader.prototype.readSplitFixed64 = function(t) {
                return jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readSplitFixed64(t)
            }, jspb.BinaryReader.prototype.readPackedField_ = function(t) {
                jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var r = this.decoder_.readUnsignedVarint32();
                r = this.decoder_.getCursor() + r;
                for (var n = []; this.decoder_.getCursor() < r;) n.push(t.call(this.decoder_));
                return n
            }, jspb.BinaryReader.prototype.readPackedInt32 = function() {
                return this.readPackedField_(this.decoder_.readSignedVarint32)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt32", jspb.BinaryReader.prototype.readPackedInt32), jspb.BinaryReader.prototype.readPackedInt32String = function() {
                return this.readPackedField_(this.decoder_.readSignedVarint32String)
            }, jspb.BinaryReader.prototype.readPackedInt64 = function() {
                return this.readPackedField_(this.decoder_.readSignedVarint64)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt64", jspb.BinaryReader.prototype.readPackedInt64), jspb.BinaryReader.prototype.readPackedInt64String = function() {
                return this.readPackedField_(this.decoder_.readSignedVarint64String)
            }, jspb.BinaryReader.prototype.readPackedUint32 = function() {
                return this.readPackedField_(this.decoder_.readUnsignedVarint32)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint32", jspb.BinaryReader.prototype.readPackedUint32), jspb.BinaryReader.prototype.readPackedUint32String = function() {
                return this.readPackedField_(this.decoder_.readUnsignedVarint32String)
            }, jspb.BinaryReader.prototype.readPackedUint64 = function() {
                return this.readPackedField_(this.decoder_.readUnsignedVarint64)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint64", jspb.BinaryReader.prototype.readPackedUint64), jspb.BinaryReader.prototype.readPackedUint64String = function() {
                return this.readPackedField_(this.decoder_.readUnsignedVarint64String)
            }, jspb.BinaryReader.prototype.readPackedSint32 = function() {
                return this.readPackedField_(this.decoder_.readZigzagVarint32)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint32", jspb.BinaryReader.prototype.readPackedSint32), jspb.BinaryReader.prototype.readPackedSint64 = function() {
                return this.readPackedField_(this.decoder_.readZigzagVarint64)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint64", jspb.BinaryReader.prototype.readPackedSint64), jspb.BinaryReader.prototype.readPackedSint64String = function() {
                return this.readPackedField_(this.decoder_.readZigzagVarint64String)
            }, jspb.BinaryReader.prototype.readPackedFixed32 = function() {
                return this.readPackedField_(this.decoder_.readUint32)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed32", jspb.BinaryReader.prototype.readPackedFixed32), jspb.BinaryReader.prototype.readPackedFixed64 = function() {
                return this.readPackedField_(this.decoder_.readUint64)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed64", jspb.BinaryReader.prototype.readPackedFixed64), jspb.BinaryReader.prototype.readPackedFixed64String = function() {
                return this.readPackedField_(this.decoder_.readUint64String)
            }, jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
                return this.readPackedField_(this.decoder_.readInt32)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed32", jspb.BinaryReader.prototype.readPackedSfixed32), jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
                return this.readPackedField_(this.decoder_.readInt64)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed64", jspb.BinaryReader.prototype.readPackedSfixed64), jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
                return this.readPackedField_(this.decoder_.readInt64String)
            }, jspb.BinaryReader.prototype.readPackedFloat = function() {
                return this.readPackedField_(this.decoder_.readFloat)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFloat", jspb.BinaryReader.prototype.readPackedFloat), jspb.BinaryReader.prototype.readPackedDouble = function() {
                return this.readPackedField_(this.decoder_.readDouble)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedDouble", jspb.BinaryReader.prototype.readPackedDouble), jspb.BinaryReader.prototype.readPackedBool = function() {
                return this.readPackedField_(this.decoder_.readBool)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedBool", jspb.BinaryReader.prototype.readPackedBool), jspb.BinaryReader.prototype.readPackedEnum = function() {
                return this.readPackedField_(this.decoder_.readEnum)
            }, goog.exportProperty(jspb.BinaryReader.prototype, "readPackedEnum", jspb.BinaryReader.prototype.readPackedEnum), jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
                return this.readPackedField_(this.decoder_.readVarintHash64)
            }, jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
                return this.readPackedField_(this.decoder_.readFixedHash64)
            }, jspb.BinaryEncoder = function() {
                this.buffer_ = []
            }, jspb.BinaryEncoder.prototype.length = function() {
                return this.buffer_.length
            }, jspb.BinaryEncoder.prototype.end = function() {
                var t = this.buffer_;
                return this.buffer_ = [], t
            }, jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(t, r) {
                for (jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(r == Math.floor(r)), jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32); 0 < r || 127 < t;) this.buffer_.push(127 & t | 128), t = (t >>> 7 | r << 25) >>> 0, r >>>= 7;
                this.buffer_.push(t)
            }, jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(t, r) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(r == Math.floor(r)), jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32), this.writeUint32(t), this.writeUint32(r)
            }, jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(t) {
                for (jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32); 127 < t;) this.buffer_.push(127 & t | 128), t >>>= 7;
                this.buffer_.push(t)
            }, jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(t) {
                if (jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), 0 <= t) this.writeUnsignedVarint32(t);
                else {
                    for (var r = 0; 9 > r; r++) this.buffer_.push(127 & t | 128), t >>= 7;
                    this.buffer_.push(1)
                }
            }, jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitInt64(t), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(t), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeUnsignedVarint32((t << 1 ^ t >> 31) >>> 0)
            }, jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitZigzag64(t), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(t) {
                this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t))
            }, jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(t) {
                var r = this;
                jspb.utils.splitHash64(t), jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(t, n) {
                    r.writeSplitVarint64(t >>> 0, n >>> 0)
                })
            }, jspb.BinaryEncoder.prototype.writeUint8 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(0 <= t && 256 > t), this.buffer_.push(t >>> 0 & 255)
            }, jspb.BinaryEncoder.prototype.writeUint16 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(0 <= t && 65536 > t), this.buffer_.push(t >>> 0 & 255), this.buffer_.push(t >>> 8 & 255)
            }, jspb.BinaryEncoder.prototype.writeUint32 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.buffer_.push(t >>> 0 & 255), this.buffer_.push(t >>> 8 & 255), this.buffer_.push(t >>> 16 & 255), this.buffer_.push(t >>> 24 & 255)
            }, jspb.BinaryEncoder.prototype.writeUint64 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitUint64(t), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeInt8 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(-128 <= t && 128 > t), this.buffer_.push(t >>> 0 & 255)
            }, jspb.BinaryEncoder.prototype.writeInt16 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(-32768 <= t && 32768 > t), this.buffer_.push(t >>> 0 & 255), this.buffer_.push(t >>> 8 & 255)
            }, jspb.BinaryEncoder.prototype.writeInt32 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.buffer_.push(t >>> 0 & 255), this.buffer_.push(t >>> 8 & 255), this.buffer_.push(t >>> 16 & 255), this.buffer_.push(t >>> 24 & 255)
            }, jspb.BinaryEncoder.prototype.writeInt64 = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(t), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeInt64String = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(+t >= -jspb.BinaryConstants.TWO_TO_63 && +t < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(t)), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeFloat = function(t) {
                jspb.asserts.assert(1 / 0 === t || -1 / 0 === t || isNaN(t) || t >= -jspb.BinaryConstants.FLOAT32_MAX && t <= jspb.BinaryConstants.FLOAT32_MAX), jspb.utils.splitFloat32(t), this.writeUint32(jspb.utils.split64Low)
            }, jspb.BinaryEncoder.prototype.writeDouble = function(t) {
                jspb.asserts.assert(1 / 0 === t || -1 / 0 === t || isNaN(t) || t >= -jspb.BinaryConstants.FLOAT64_MAX && t <= jspb.BinaryConstants.FLOAT64_MAX), jspb.utils.splitFloat64(t), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeBool = function(t) {
                jspb.asserts.assert("boolean" == typeof t || "number" == typeof t), this.buffer_.push(t ? 1 : 0)
            }, jspb.BinaryEncoder.prototype.writeEnum = function(t) {
                jspb.asserts.assert(t == Math.floor(t)), jspb.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32(t)
            }, jspb.BinaryEncoder.prototype.writeBytes = function(t) {
                this.buffer_.push.apply(this.buffer_, t)
            }, jspb.BinaryEncoder.prototype.writeVarintHash64 = function(t) {
                jspb.utils.splitHash64(t), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeFixedHash64 = function(t) {
                jspb.utils.splitHash64(t), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
            }, jspb.BinaryEncoder.prototype.writeString = function(t) {
                var r = this.buffer_.length;
                jspb.asserts.assertString(t);
                for (var n = 0; n < t.length; n++) {
                    var i = t.charCodeAt(n);
                    if (128 > i) this.buffer_.push(i);
                    else if (2048 > i) this.buffer_.push(i >> 6 | 192), this.buffer_.push(63 & i | 128);
                    else if (65536 > i) {
                        if (55296 <= i && 56319 >= i && n + 1 < t.length) {
                            var s = t.charCodeAt(n + 1);
                            56320 <= s && 57343 >= s && (i = 1024 * (i - 55296) + s - 56320 + 65536, this.buffer_.push(i >> 18 | 240), this.buffer_.push(i >> 12 & 63 | 128), this.buffer_.push(i >> 6 & 63 | 128), this.buffer_.push(63 & i | 128), n++)
                        } else this.buffer_.push(i >> 12 | 224), this.buffer_.push(i >> 6 & 63 | 128), this.buffer_.push(63 & i | 128)
                    }
                }
                return this.buffer_.length - r
            }, jspb.arith = {}, jspb.arith.UInt64 = function(t, r) {
                this.lo = t, this.hi = r
            }, jspb.arith.UInt64.prototype.cmp = function(t) {
                return this.hi < t.hi || this.hi == t.hi && this.lo < t.lo ? -1 : this.hi == t.hi && this.lo == t.lo ? 0 : 1
            }, jspb.arith.UInt64.prototype.rightShift = function() {
                return new jspb.arith.UInt64((this.lo >>> 1 | (1 & this.hi) << 31) >>> 0, this.hi >>> 1 >>> 0)
            }, jspb.arith.UInt64.prototype.leftShift = function() {
                return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0)
            }, jspb.arith.UInt64.prototype.msb = function() {
                return !!(2147483648 & this.hi)
            }, jspb.arith.UInt64.prototype.lsb = function() {
                return !!(1 & this.lo)
            }, jspb.arith.UInt64.prototype.zero = function() {
                return 0 == this.lo && 0 == this.hi
            }, jspb.arith.UInt64.prototype.add = function(t) {
                return new jspb.arith.UInt64((this.lo + t.lo & 4294967295) >>> 0 >>> 0, ((this.hi + t.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + t.lo ? 1 : 0) >>> 0)
            }, jspb.arith.UInt64.prototype.sub = function(t) {
                return new jspb.arith.UInt64((this.lo - t.lo & 4294967295) >>> 0 >>> 0, ((this.hi - t.hi & 4294967295) >>> 0) - (0 > this.lo - t.lo ? 1 : 0) >>> 0)
            }, jspb.arith.UInt64.mul32x32 = function(t, r) {
                var n = 65535 & t;
                t >>>= 16;
                var i = 65535 & r,
                    s = r >>> 16;
                for (r = n * i + 65536 * (n * s & 65535) + 65536 * (t * i & 65535), n = t * s + (n * s >>> 16) + (t * i >>> 16); 4294967296 <= r;) r -= 4294967296, n += 1;
                return new jspb.arith.UInt64(r >>> 0, n >>> 0)
            }, jspb.arith.UInt64.prototype.mul = function(t) {
                var r = jspb.arith.UInt64.mul32x32(this.lo, t);
                return (t = jspb.arith.UInt64.mul32x32(this.hi, t)).hi = t.lo, t.lo = 0, r.add(t)
            }, jspb.arith.UInt64.prototype.div = function(t) {
                if (0 == t) return [];
                var r = new jspb.arith.UInt64(0, 0),
                    n = new jspb.arith.UInt64(this.lo, this.hi);
                t = new jspb.arith.UInt64(t, 0);
                for (var i = new jspb.arith.UInt64(1, 0); !t.msb();) t = t.leftShift(), i = i.leftShift();
                for (; !i.zero();) 0 >= t.cmp(n) && (r = r.add(i), n = n.sub(t)), t = t.rightShift(), i = i.rightShift();
                return [r, n]
            }, jspb.arith.UInt64.prototype.toString = function() {
                for (var t = "", r = this; !r.zero();) {
                    var n = (r = r.div(10))[0];
                    t = r[1].lo + t, r = n
                }
                return "" == t && (t = "0"), t
            }, jspb.arith.UInt64.fromString = function(t) {
                for (var r = new jspb.arith.UInt64(0, 0), n = new jspb.arith.UInt64(0, 0), i = 0; i < t.length; i++) {
                    if ("0" > t[i] || "9" < t[i]) return null;
                    var s = parseInt(t[i], 10);
                    n.lo = s, r = r.mul(10).add(n)
                }
                return r
            }, jspb.arith.UInt64.prototype.clone = function() {
                return new jspb.arith.UInt64(this.lo, this.hi)
            }, jspb.arith.Int64 = function(t, r) {
                this.lo = t, this.hi = r
            }, jspb.arith.Int64.prototype.add = function(t) {
                return new jspb.arith.Int64((this.lo + t.lo & 4294967295) >>> 0 >>> 0, ((this.hi + t.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + t.lo ? 1 : 0) >>> 0)
            }, jspb.arith.Int64.prototype.sub = function(t) {
                return new jspb.arith.Int64((this.lo - t.lo & 4294967295) >>> 0 >>> 0, ((this.hi - t.hi & 4294967295) >>> 0) - (0 > this.lo - t.lo ? 1 : 0) >>> 0)
            }, jspb.arith.Int64.prototype.clone = function() {
                return new jspb.arith.Int64(this.lo, this.hi)
            }, jspb.arith.Int64.prototype.toString = function() {
                var t = 0 != (2147483648 & this.hi),
                    r = new jspb.arith.UInt64(this.lo, this.hi);
                return t && (r = new jspb.arith.UInt64(0, 0).sub(r)), (t ? "-" : "") + r.toString()
            }, jspb.arith.Int64.fromString = function(t) {
                var r = 0 < t.length && "-" == t[0];
                return (r && (t = t.substring(1)), null === (t = jspb.arith.UInt64.fromString(t))) ? null : (r && (t = new jspb.arith.UInt64(0, 0).sub(t)), new jspb.arith.Int64(t.lo, t.hi))
            }, jspb.BinaryWriter = function() {
                this.blocks_ = [], this.totalLength_ = 0, this.encoder_ = new jspb.BinaryEncoder, this.bookmarks_ = []
            }, jspb.BinaryWriter.prototype.appendUint8Array_ = function(t) {
                var r = this.encoder_.end();
                this.blocks_.push(r), this.blocks_.push(t), this.totalLength_ += r.length + t.length
            }, jspb.BinaryWriter.prototype.beginDelimited_ = function(t) {
                return this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), t = this.encoder_.end(), this.blocks_.push(t), this.totalLength_ += t.length, t.push(this.totalLength_), t
            }, jspb.BinaryWriter.prototype.endDelimited_ = function(t) {
                var r = t.pop();
                for (r = this.totalLength_ + this.encoder_.length() - r, jspb.asserts.assert(0 <= r); 127 < r;) t.push(127 & r | 128), r >>>= 7, this.totalLength_++;
                t.push(r), this.totalLength_++
            }, jspb.BinaryWriter.prototype.writeSerializedMessage = function(t, r, n) {
                this.appendUint8Array_(t.subarray(r, n))
            }, jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(t, r, n) {
                null != t && null != r && null != n && this.writeSerializedMessage(t, r, n)
            }, jspb.BinaryWriter.prototype.reset = function() {
                this.blocks_ = [], this.encoder_.end(), this.totalLength_ = 0, this.bookmarks_ = []
            }, jspb.BinaryWriter.prototype.getResultBuffer = function() {
                jspb.asserts.assert(0 == this.bookmarks_.length);
                for (var t = new Uint8Array(this.totalLength_ + this.encoder_.length()), r = this.blocks_, n = r.length, i = 0, s = 0; s < n; s++) {
                    var o = r[s];
                    t.set(o, i), i += o.length
                }
                return r = this.encoder_.end(), t.set(r, i), i += r.length, jspb.asserts.assert(i == t.length), this.blocks_ = [t], t
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "getResultBuffer", jspb.BinaryWriter.prototype.getResultBuffer), jspb.BinaryWriter.prototype.getResultBase64String = function(t) {
                return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), t)
            }, jspb.BinaryWriter.prototype.beginSubMessage = function(t) {
                this.bookmarks_.push(this.beginDelimited_(t))
            }, jspb.BinaryWriter.prototype.endSubMessage = function() {
                jspb.asserts.assert(0 <= this.bookmarks_.length), this.endDelimited_(this.bookmarks_.pop())
            }, jspb.BinaryWriter.prototype.writeFieldHeader_ = function(t, r) {
                jspb.asserts.assert(1 <= t && t == Math.floor(t)), this.encoder_.writeUnsignedVarint32(8 * t + r)
            }, jspb.BinaryWriter.prototype.writeAny = function(t, r, n) {
                var i = jspb.BinaryConstants.FieldType;
                switch (t) {
                    case i.DOUBLE:
                        this.writeDouble(r, n);
                        break;
                    case i.FLOAT:
                        this.writeFloat(r, n);
                        break;
                    case i.INT64:
                        this.writeInt64(r, n);
                        break;
                    case i.UINT64:
                        this.writeUint64(r, n);
                        break;
                    case i.INT32:
                        this.writeInt32(r, n);
                        break;
                    case i.FIXED64:
                        this.writeFixed64(r, n);
                        break;
                    case i.FIXED32:
                        this.writeFixed32(r, n);
                        break;
                    case i.BOOL:
                        this.writeBool(r, n);
                        break;
                    case i.STRING:
                        this.writeString(r, n);
                        break;
                    case i.GROUP:
                        jspb.asserts.fail("Group field type not supported in writeAny()");
                        break;
                    case i.MESSAGE:
                        jspb.asserts.fail("Message field type not supported in writeAny()");
                        break;
                    case i.BYTES:
                        this.writeBytes(r, n);
                        break;
                    case i.UINT32:
                        this.writeUint32(r, n);
                        break;
                    case i.ENUM:
                        this.writeEnum(r, n);
                        break;
                    case i.SFIXED32:
                        this.writeSfixed32(r, n);
                        break;
                    case i.SFIXED64:
                        this.writeSfixed64(r, n);
                        break;
                    case i.SINT32:
                        this.writeSint32(r, n);
                        break;
                    case i.SINT64:
                        this.writeSint64(r, n);
                        break;
                    case i.FHASH64:
                        this.writeFixedHash64(r, n);
                        break;
                    case i.VHASH64:
                        this.writeVarintHash64(r, n);
                        break;
                    default:
                        jspb.asserts.fail("Invalid field type in writeAny()")
                }
            }, jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(r))
            }, jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(r))
            }, jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(r))
            }, jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(r))
            }, jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(r))
            }, jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(r))
            }, jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(r))
            }, jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(r))
            }, jspb.BinaryWriter.prototype.writeInt32 = function(t, r) {
                null != r && (jspb.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_31 && r < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(t, r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt32", jspb.BinaryWriter.prototype.writeInt32), jspb.BinaryWriter.prototype.writeInt32String = function(t, r) {
                null != r && (r = parseInt(r, 10), jspb.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_31 && r < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(t, r))
            }, jspb.BinaryWriter.prototype.writeInt64 = function(t, r) {
                null != r && (jspb.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_63 && r < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(t, r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt64", jspb.BinaryWriter.prototype.writeInt64), jspb.BinaryWriter.prototype.writeInt64String = function(t, r) {
                null != r && (r = jspb.arith.Int64.fromString(r), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(r.lo, r.hi))
            }, jspb.BinaryWriter.prototype.writeUint32 = function(t, r) {
                null != r && (jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(t, r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint32", jspb.BinaryWriter.prototype.writeUint32), jspb.BinaryWriter.prototype.writeUint32String = function(t, r) {
                null != r && (r = parseInt(r, 10), jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(t, r))
            }, jspb.BinaryWriter.prototype.writeUint64 = function(t, r) {
                null != r && (jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(t, r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint64", jspb.BinaryWriter.prototype.writeUint64), jspb.BinaryWriter.prototype.writeUint64String = function(t, r) {
                null != r && (r = jspb.arith.UInt64.fromString(r), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(r.lo, r.hi))
            }, jspb.BinaryWriter.prototype.writeSint32 = function(t, r) {
                null != r && (jspb.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_31 && r < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(t, r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint32", jspb.BinaryWriter.prototype.writeSint32), jspb.BinaryWriter.prototype.writeSint64 = function(t, r) {
                null != r && (jspb.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_63 && r < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(t, r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint64", jspb.BinaryWriter.prototype.writeSint64), jspb.BinaryWriter.prototype.writeSintHash64 = function(t, r) {
                null != r && this.writeZigzagVarintHash64_(t, r)
            }, jspb.BinaryWriter.prototype.writeSint64String = function(t, r) {
                null != r && this.writeZigzagVarint64String_(t, r)
            }, jspb.BinaryWriter.prototype.writeFixed32 = function(t, r) {
                null != r && (jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed32", jspb.BinaryWriter.prototype.writeFixed32), jspb.BinaryWriter.prototype.writeFixed64 = function(t, r) {
                null != r && (jspb.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed64", jspb.BinaryWriter.prototype.writeFixed64), jspb.BinaryWriter.prototype.writeFixed64String = function(t, r) {
                null != r && (r = jspb.arith.UInt64.fromString(r), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(r.lo, r.hi))
            }, jspb.BinaryWriter.prototype.writeSfixed32 = function(t, r) {
                null != r && (jspb.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_31 && r < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed32", jspb.BinaryWriter.prototype.writeSfixed32), jspb.BinaryWriter.prototype.writeSfixed64 = function(t, r) {
                null != r && (jspb.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_63 && r < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed64", jspb.BinaryWriter.prototype.writeSfixed64), jspb.BinaryWriter.prototype.writeSfixed64String = function(t, r) {
                null != r && (r = jspb.arith.Int64.fromString(r), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(r.lo, r.hi))
            }, jspb.BinaryWriter.prototype.writeFloat = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeFloat", jspb.BinaryWriter.prototype.writeFloat), jspb.BinaryWriter.prototype.writeDouble = function(t, r) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeDouble", jspb.BinaryWriter.prototype.writeDouble), jspb.BinaryWriter.prototype.writeBool = function(t, r) {
                null != r && (jspb.asserts.assert("boolean" == typeof r || "number" == typeof r), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeBool", jspb.BinaryWriter.prototype.writeBool), jspb.BinaryWriter.prototype.writeEnum = function(t, r) {
                null != r && (jspb.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_31 && r < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeEnum", jspb.BinaryWriter.prototype.writeEnum), jspb.BinaryWriter.prototype.writeString = function(t, r) {
                null != r && (t = this.beginDelimited_(t), this.encoder_.writeString(r), this.endDelimited_(t))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeString", jspb.BinaryWriter.prototype.writeString), jspb.BinaryWriter.prototype.writeBytes = function(t, r) {
                null != r && (r = jspb.utils.byteSourceToUint8Array(r), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(r.length), this.appendUint8Array_(r))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeBytes", jspb.BinaryWriter.prototype.writeBytes), jspb.BinaryWriter.prototype.writeMessage = function(t, r, n) {
                null != r && (t = this.beginDelimited_(t), n(r, this), this.endDelimited_(t))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeMessage", jspb.BinaryWriter.prototype.writeMessage), jspb.BinaryWriter.prototype.writeMessageSet = function(t, r, n) {
                null != r && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t), t = this.beginDelimited_(3), n(r, this), this.endDelimited_(t), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP))
            }, jspb.BinaryWriter.prototype.writeGroup = function(t, r, n) {
                null != r && (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.START_GROUP), n(r, this), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.END_GROUP))
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeGroup", jspb.BinaryWriter.prototype.writeGroup), jspb.BinaryWriter.prototype.writeFixedHash64 = function(t, r) {
                null != r && (jspb.asserts.assert(8 == r.length), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(r))
            }, jspb.BinaryWriter.prototype.writeVarintHash64 = function(t, r) {
                null != r && (jspb.asserts.assert(8 == r.length), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(r))
            }, jspb.BinaryWriter.prototype.writeSplitFixed64 = function(t, r, n) {
                this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(r, n)
            }, jspb.BinaryWriter.prototype.writeSplitVarint64 = function(t, r, n) {
                this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(r, n)
            }, jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(t, r, n) {
                this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT);
                var i = this.encoder_;
                jspb.utils.toZigzag64(r, n, function(t, r) {
                    i.writeSplitVarint64(t >>> 0, r >>> 0)
                })
            }, jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeSignedVarint32_(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt32", jspb.BinaryWriter.prototype.writeRepeatedInt32), jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeInt32String(t, r[n])
            }, jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeSignedVarint64_(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt64", jspb.BinaryWriter.prototype.writeRepeatedInt64), jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(t, r, n, i) {
                if (null != r)
                    for (var s = 0; s < r.length; s++) this.writeSplitFixed64(t, n(r[s]), i(r[s]))
            }, jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(t, r, n, i) {
                if (null != r)
                    for (var s = 0; s < r.length; s++) this.writeSplitVarint64(t, n(r[s]), i(r[s]))
            }, jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(t, r, n, i) {
                if (null != r)
                    for (var s = 0; s < r.length; s++) this.writeSplitZigzagVarint64(t, n(r[s]), i(r[s]))
            }, jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeInt64String(t, r[n])
            }, jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeUnsignedVarint32_(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint32", jspb.BinaryWriter.prototype.writeRepeatedUint32), jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeUint32String(t, r[n])
            }, jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeUnsignedVarint64_(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint64", jspb.BinaryWriter.prototype.writeRepeatedUint64), jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeUint64String(t, r[n])
            }, jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeZigzagVarint32_(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint32", jspb.BinaryWriter.prototype.writeRepeatedSint32), jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeZigzagVarint64_(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint64", jspb.BinaryWriter.prototype.writeRepeatedSint64), jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeZigzagVarint64String_(t, r[n])
            }, jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeZigzagVarintHash64_(t, r[n])
            }, jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeFixed32(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed32", jspb.BinaryWriter.prototype.writeRepeatedFixed32), jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeFixed64(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64", jspb.BinaryWriter.prototype.writeRepeatedFixed64), jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeFixed64String(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64String", jspb.BinaryWriter.prototype.writeRepeatedFixed64String), jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeSfixed32(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed32", jspb.BinaryWriter.prototype.writeRepeatedSfixed32), jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeSfixed64(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed64", jspb.BinaryWriter.prototype.writeRepeatedSfixed64), jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeSfixed64String(t, r[n])
            }, jspb.BinaryWriter.prototype.writeRepeatedFloat = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeFloat(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFloat", jspb.BinaryWriter.prototype.writeRepeatedFloat), jspb.BinaryWriter.prototype.writeRepeatedDouble = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeDouble(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedDouble", jspb.BinaryWriter.prototype.writeRepeatedDouble), jspb.BinaryWriter.prototype.writeRepeatedBool = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeBool(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBool", jspb.BinaryWriter.prototype.writeRepeatedBool), jspb.BinaryWriter.prototype.writeRepeatedEnum = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeEnum(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedEnum", jspb.BinaryWriter.prototype.writeRepeatedEnum), jspb.BinaryWriter.prototype.writeRepeatedString = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeString(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedString", jspb.BinaryWriter.prototype.writeRepeatedString), jspb.BinaryWriter.prototype.writeRepeatedBytes = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeBytes(t, r[n])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBytes", jspb.BinaryWriter.prototype.writeRepeatedBytes), jspb.BinaryWriter.prototype.writeRepeatedMessage = function(t, r, n) {
                if (null != r)
                    for (var i = 0; i < r.length; i++) {
                        var s = this.beginDelimited_(t);
                        n(r[i], this), this.endDelimited_(s)
                    }
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedMessage", jspb.BinaryWriter.prototype.writeRepeatedMessage), jspb.BinaryWriter.prototype.writeRepeatedGroup = function(t, r, n) {
                if (null != r)
                    for (var i = 0; i < r.length; i++) this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.START_GROUP), n(r[i], this), this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.END_GROUP)
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedGroup", jspb.BinaryWriter.prototype.writeRepeatedGroup), jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeFixedHash64(t, r[n])
            }, jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(t, r) {
                if (null != r)
                    for (var n = 0; n < r.length; n++) this.writeVarintHash64(t, r[n])
            }, jspb.BinaryWriter.prototype.writePackedInt32 = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeSignedVarint32(r[n]);
                    this.endDelimited_(t)
                }
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt32", jspb.BinaryWriter.prototype.writePackedInt32), jspb.BinaryWriter.prototype.writePackedInt32String = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeSignedVarint32(parseInt(r[n], 10));
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedInt64 = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeSignedVarint64(r[n]);
                    this.endDelimited_(t)
                }
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt64", jspb.BinaryWriter.prototype.writePackedInt64), jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(t, r, n, i) {
                if (null != r) {
                    t = this.beginDelimited_(t);
                    for (var s = 0; s < r.length; s++) this.encoder_.writeSplitFixed64(n(r[s]), i(r[s]));
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(t, r, n, i) {
                if (null != r) {
                    t = this.beginDelimited_(t);
                    for (var s = 0; s < r.length; s++) this.encoder_.writeSplitVarint64(n(r[s]), i(r[s]));
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(t, r, n, i) {
                if (null != r) {
                    t = this.beginDelimited_(t);
                    for (var s = this.encoder_, o = 0; o < r.length; o++) jspb.utils.toZigzag64(n(r[o]), i(r[o]), function(t, r) {
                        s.writeSplitVarint64(t >>> 0, r >>> 0)
                    });
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedInt64String = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) {
                        var i = jspb.arith.Int64.fromString(r[n]);
                        this.encoder_.writeSplitVarint64(i.lo, i.hi)
                    }
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedUint32 = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeUnsignedVarint32(r[n]);
                    this.endDelimited_(t)
                }
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint32", jspb.BinaryWriter.prototype.writePackedUint32), jspb.BinaryWriter.prototype.writePackedUint32String = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeUnsignedVarint32(parseInt(r[n], 10));
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedUint64 = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeUnsignedVarint64(r[n]);
                    this.endDelimited_(t)
                }
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint64", jspb.BinaryWriter.prototype.writePackedUint64), jspb.BinaryWriter.prototype.writePackedUint64String = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) {
                        var i = jspb.arith.UInt64.fromString(r[n]);
                        this.encoder_.writeSplitVarint64(i.lo, i.hi)
                    }
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedSint32 = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeZigzagVarint32(r[n]);
                    this.endDelimited_(t)
                }
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint32", jspb.BinaryWriter.prototype.writePackedSint32), jspb.BinaryWriter.prototype.writePackedSint64 = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeZigzagVarint64(r[n]);
                    this.endDelimited_(t)
                }
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint64", jspb.BinaryWriter.prototype.writePackedSint64), jspb.BinaryWriter.prototype.writePackedSint64String = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(r[n]));
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedSintHash64 = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeZigzagVarintHash64(r[n]);
                    this.endDelimited_(t)
                }
            }, jspb.BinaryWriter.prototype.writePackedFixed32 = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * r.length), t = 0; t < r.length; t++) this.encoder_.writeUint32(r[t])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed32", jspb.BinaryWriter.prototype.writePackedFixed32), jspb.BinaryWriter.prototype.writePackedFixed64 = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * r.length), t = 0; t < r.length; t++) this.encoder_.writeUint64(r[t])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed64", jspb.BinaryWriter.prototype.writePackedFixed64), jspb.BinaryWriter.prototype.writePackedFixed64String = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * r.length), t = 0; t < r.length; t++) {
                        var n = jspb.arith.UInt64.fromString(r[t]);
                        this.encoder_.writeSplitFixed64(n.lo, n.hi)
                    }
            }, jspb.BinaryWriter.prototype.writePackedSfixed32 = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * r.length), t = 0; t < r.length; t++) this.encoder_.writeInt32(r[t])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed32", jspb.BinaryWriter.prototype.writePackedSfixed32), jspb.BinaryWriter.prototype.writePackedSfixed64 = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * r.length), t = 0; t < r.length; t++) this.encoder_.writeInt64(r[t])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed64", jspb.BinaryWriter.prototype.writePackedSfixed64), jspb.BinaryWriter.prototype.writePackedSfixed64String = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * r.length), t = 0; t < r.length; t++) this.encoder_.writeInt64String(r[t])
            }, jspb.BinaryWriter.prototype.writePackedFloat = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * r.length), t = 0; t < r.length; t++) this.encoder_.writeFloat(r[t])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFloat", jspb.BinaryWriter.prototype.writePackedFloat), jspb.BinaryWriter.prototype.writePackedDouble = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * r.length), t = 0; t < r.length; t++) this.encoder_.writeDouble(r[t])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedDouble", jspb.BinaryWriter.prototype.writePackedDouble), jspb.BinaryWriter.prototype.writePackedBool = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(r.length), t = 0; t < r.length; t++) this.encoder_.writeBool(r[t])
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedBool", jspb.BinaryWriter.prototype.writePackedBool), jspb.BinaryWriter.prototype.writePackedEnum = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeEnum(r[n]);
                    this.endDelimited_(t)
                }
            }, goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedEnum", jspb.BinaryWriter.prototype.writePackedEnum), jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(t, r) {
                if (null != r && r.length)
                    for (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * r.length), t = 0; t < r.length; t++) this.encoder_.writeFixedHash64(r[t])
            }, jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(t, r) {
                if (null != r && r.length) {
                    t = this.beginDelimited_(t);
                    for (var n = 0; n < r.length; n++) this.encoder_.writeVarintHash64(r[n]);
                    this.endDelimited_(t)
                }
            }, jspb.Map = function(t, r) {
                this.arr_ = t, this.valueCtor_ = r, this.map_ = {}, this.arrClean = !0, 0 < this.arr_.length && this.loadFromArray_()
            }, goog.exportSymbol("jspb.Map", jspb.Map), jspb.Map.prototype.loadFromArray_ = function() {
                for (var t = 0; t < this.arr_.length; t++) {
                    var r = this.arr_[t],
                        n = r[0];
                    this.map_[n.toString()] = new jspb.Map.Entry_(n, r[1])
                }
                this.arrClean = !0
            }, jspb.Map.prototype.toArray = function() {
                if (this.arrClean) {
                    if (this.valueCtor_) {
                        var t, r = this.map_;
                        for (t in r)
                            if (Object.prototype.hasOwnProperty.call(r, t)) {
                                var n = r[t].valueWrapper;
                                n && n.toArray()
                            }
                    }
                } else {
                    for (this.arr_.length = 0, (r = this.stringKeys_()).sort(), t = 0; t < r.length; t++) {
                        var i = this.map_[r[t]];
                        (n = i.valueWrapper) && n.toArray(), this.arr_.push([i.key, i.value])
                    }
                    this.arrClean = !0
                }
                return this.arr_
            }, goog.exportProperty(jspb.Map.prototype, "toArray", jspb.Map.prototype.toArray), jspb.Map.prototype.toObject = function(t, r) {
                for (var n = this.toArray(), i = [], s = 0; s < n.length; s++) {
                    var o = this.map_[n[s][0].toString()];
                    this.wrapEntry_(o);
                    var u = o.valueWrapper;
                    u ? (jspb.asserts.assert(r), i.push([o.key, r(t, u)])) : i.push([o.key, o.value])
                }
                return i
            }, goog.exportProperty(jspb.Map.prototype, "toObject", jspb.Map.prototype.toObject), jspb.Map.fromObject = function(t, r, n) {
                r = new jspb.Map([], r);
                for (var i = 0; i < t.length; i++) {
                    var s = t[i][0],
                        o = n(t[i][1]);
                    r.set(s, o)
                }
                return r
            }, goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject), jspb.Map.ArrayIteratorIterable_ = function(t) {
                this.idx_ = 0, this.arr_ = t
            }, jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
                return this.idx_ < this.arr_.length ? {
                    done: !1,
                    value: this.arr_[this.idx_++]
                } : {
                    done: !0,
                    value: void 0
                }
            }, "undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
                return this
            }), jspb.Map.prototype.getLength = function() {
                return this.stringKeys_().length
            }, goog.exportProperty(jspb.Map.prototype, "getLength", jspb.Map.prototype.getLength), jspb.Map.prototype.clear = function() {
                this.map_ = {}, this.arrClean = !1
            }, goog.exportProperty(jspb.Map.prototype, "clear", jspb.Map.prototype.clear), jspb.Map.prototype.del = function(t) {
                t = t.toString();
                var r = this.map_.hasOwnProperty(t);
                return delete this.map_[t], this.arrClean = !1, r
            }, goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del), jspb.Map.prototype.getEntryList = function() {
                var t = [],
                    r = this.stringKeys_();
                r.sort();
                for (var n = 0; n < r.length; n++) {
                    var i = this.map_[r[n]];
                    t.push([i.key, i.value])
                }
                return t
            }, goog.exportProperty(jspb.Map.prototype, "getEntryList", jspb.Map.prototype.getEntryList), jspb.Map.prototype.entries = function() {
                var t = [],
                    r = this.stringKeys_();
                r.sort();
                for (var n = 0; n < r.length; n++) {
                    var i = this.map_[r[n]];
                    t.push([i.key, this.wrapEntry_(i)])
                }
                return new jspb.Map.ArrayIteratorIterable_(t)
            }, goog.exportProperty(jspb.Map.prototype, "entries", jspb.Map.prototype.entries), jspb.Map.prototype.keys = function() {
                var t = [],
                    r = this.stringKeys_();
                r.sort();
                for (var n = 0; n < r.length; n++) t.push(this.map_[r[n]].key);
                return new jspb.Map.ArrayIteratorIterable_(t)
            }, goog.exportProperty(jspb.Map.prototype, "keys", jspb.Map.prototype.keys), jspb.Map.prototype.values = function() {
                var t = [],
                    r = this.stringKeys_();
                r.sort();
                for (var n = 0; n < r.length; n++) t.push(this.wrapEntry_(this.map_[r[n]]));
                return new jspb.Map.ArrayIteratorIterable_(t)
            }, goog.exportProperty(jspb.Map.prototype, "values", jspb.Map.prototype.values), jspb.Map.prototype.forEach = function(t, r) {
                var n = this.stringKeys_();
                n.sort();
                for (var i = 0; i < n.length; i++) {
                    var s = this.map_[n[i]];
                    t.call(r, this.wrapEntry_(s), s.key, this)
                }
            }, goog.exportProperty(jspb.Map.prototype, "forEach", jspb.Map.prototype.forEach), jspb.Map.prototype.set = function(t, r) {
                var n = new jspb.Map.Entry_(t);
                return this.valueCtor_ ? (n.valueWrapper = r, n.value = r.toArray()) : n.value = r, this.map_[t.toString()] = n, this.arrClean = !1, this
            }, goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set), jspb.Map.prototype.wrapEntry_ = function(t) {
                return this.valueCtor_ ? (t.valueWrapper || (t.valueWrapper = new this.valueCtor_(t.value)), t.valueWrapper) : t.value
            }, jspb.Map.prototype.get = function(t) {
                if (t = this.map_[t.toString()]) return this.wrapEntry_(t)
            }, goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get), jspb.Map.prototype.has = function(t) {
                return t.toString() in this.map_
            }, goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has), jspb.Map.prototype.serializeBinary = function(t, r, n, i, s) {
                var o = this.stringKeys_();
                o.sort();
                for (var u = 0; u < o.length; u++) {
                    var p = this.map_[o[u]];
                    r.beginSubMessage(t), n.call(r, 1, p.key), this.valueCtor_ ? i.call(r, 2, this.wrapEntry_(p), s) : i.call(r, 2, p.value), r.endSubMessage()
                }
            }, goog.exportProperty(jspb.Map.prototype, "serializeBinary", jspb.Map.prototype.serializeBinary), jspb.Map.deserializeBinary = function(t, r, n, i, s, o, u) {
                for (; r.nextField() && !r.isEndGroup();) {
                    var p = r.getFieldNumber();
                    1 == p ? o = n.call(r) : 2 == p && (t.valueCtor_ ? (jspb.asserts.assert(s), u || (u = new t.valueCtor_), i.call(r, u, s)) : u = i.call(r))
                }
                jspb.asserts.assert(void 0 != o), jspb.asserts.assert(void 0 != u), t.set(o, u)
            }, goog.exportProperty(jspb.Map, "deserializeBinary", jspb.Map.deserializeBinary), jspb.Map.prototype.stringKeys_ = function() {
                var t, r = this.map_,
                    n = [];
                for (t in r) Object.prototype.hasOwnProperty.call(r, t) && n.push(t);
                return n
            }, jspb.Map.Entry_ = function(t, r) {
                this.key = t, this.value = r, this.valueWrapper = void 0
            }, jspb.ExtensionFieldInfo = function(t, r, n, i, s) {
                this.fieldIndex = t, this.fieldName = r, this.ctor = n, this.toObjectFn = i, this.isRepeated = s
            }, goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo), jspb.ExtensionFieldBinaryInfo = function(t, r, n, i, s, o) {
                this.fieldInfo = t, this.binaryReaderFn = r, this.binaryWriterFn = n, this.binaryMessageSerializeFn = i, this.binaryMessageDeserializeFn = s, this.isPacked = o
            }, goog.exportSymbol("jspb.ExtensionFieldBinaryInfo", jspb.ExtensionFieldBinaryInfo), jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
                return !!this.ctor
            }, goog.exportProperty(jspb.ExtensionFieldInfo.prototype, "isMessageType", jspb.ExtensionFieldInfo.prototype.isMessageType), jspb.Message = function() {}, goog.exportSymbol("jspb.Message", jspb.Message), jspb.Message.GENERATE_TO_OBJECT = !0, goog.exportProperty(jspb.Message, "GENERATE_TO_OBJECT", jspb.Message.GENERATE_TO_OBJECT), jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE, goog.exportProperty(jspb.Message, "GENERATE_FROM_OBJECT", jspb.Message.GENERATE_FROM_OBJECT), jspb.Message.GENERATE_TO_STRING = !0, jspb.Message.ASSUME_LOCAL_ARRAYS = !1, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0, jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array, jspb.Message.prototype.getJsPbMessageId = function() {
                return this.messageId_
            }, goog.exportProperty(jspb.Message.prototype, "getJsPbMessageId", jspb.Message.prototype.getJsPbMessageId), jspb.Message.getIndex_ = function(t, r) {
                return r + t.arrayIndexOffset_
            }, jspb.Message.hiddenES6Property_ = function() {}, jspb.Message.getFieldNumber_ = function(t, r) {
                return r - t.arrayIndexOffset_
            }, jspb.Message.initialize = function(t, r, n, i, s, o) {
                if (t.wrappers_ = null, r || (r = n ? [n] : []), t.messageId_ = n ? String(n) : void 0, t.arrayIndexOffset_ = 0 === n ? -1 : 0, t.array = r, jspb.Message.initPivotAndExtensionObject_(t, i), t.convertedPrimitiveFields_ = {}, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (t.repeatedFields = s), s)
                    for (r = 0; r < s.length; r++)(n = s[r]) < t.pivot_ ? (n = jspb.Message.getIndex_(t, n), t.array[n] = t.array[n] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(t), t.extensionObject_[n] = t.extensionObject_[n] || jspb.Message.EMPTY_LIST_SENTINEL_);
                if (o && o.length)
                    for (r = 0; r < o.length; r++) jspb.Message.computeOneofCase(t, o[r])
            }, goog.exportProperty(jspb.Message, "initialize", jspb.Message.initialize), jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [], jspb.Message.isArray_ = function(t) {
                return jspb.Message.ASSUME_LOCAL_ARRAYS ? t instanceof Array : Array.isArray(t)
            }, jspb.Message.isExtensionObject_ = function(t) {
                return null !== t && "object" == typeof t && !jspb.Message.isArray_(t) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array)
            }, jspb.Message.initPivotAndExtensionObject_ = function(t, r) {
                var n = t.array.length,
                    i = -1;
                if (n && (i = n - 1, n = t.array[i], jspb.Message.isExtensionObject_(n))) {
                    t.pivot_ = jspb.Message.getFieldNumber_(t, i), t.extensionObject_ = n;
                    return
                } - 1 < r ? (t.pivot_ = Math.max(r, jspb.Message.getFieldNumber_(t, i + 1)), t.extensionObject_ = null) : t.pivot_ = Number.MAX_VALUE
            }, jspb.Message.maybeInitEmptyExtensionObject_ = function(t) {
                var r = jspb.Message.getIndex_(t, t.pivot_);
                t.array[r] || (t.extensionObject_ = t.array[r] = {})
            }, jspb.Message.toObjectList = function(t, r, n) {
                for (var i = [], s = 0; s < t.length; s++) i[s] = r.call(t[s], n, t[s]);
                return i
            }, goog.exportProperty(jspb.Message, "toObjectList", jspb.Message.toObjectList), jspb.Message.toObjectExtension = function(t, r, n, i, s) {
                for (var o in n) {
                    var u = n[o],
                        p = i.call(t, u);
                    if (null != p) {
                        for (var y in u.fieldName)
                            if (u.fieldName.hasOwnProperty(y)) break;
                        r[y] = u.toObjectFn ? u.isRepeated ? jspb.Message.toObjectList(p, u.toObjectFn, s) : u.toObjectFn(s, p) : p
                    }
                }
            }, goog.exportProperty(jspb.Message, "toObjectExtension", jspb.Message.toObjectExtension), jspb.Message.serializeBinaryExtensions = function(t, r, n, i) {
                for (var s in n) {
                    var o = n[s],
                        u = o.fieldInfo;
                    if (!o.binaryWriterFn) throw Error("Message extension present that was generated without binary serialization support");
                    var p = i.call(t, u);
                    if (null != p) {
                        if (u.isMessageType()) {
                            if (o.binaryMessageSerializeFn) o.binaryWriterFn.call(r, u.fieldIndex, p, o.binaryMessageSerializeFn);
                            else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format")
                        } else o.binaryWriterFn.call(r, u.fieldIndex, p)
                    }
                }
            }, goog.exportProperty(jspb.Message, "serializeBinaryExtensions", jspb.Message.serializeBinaryExtensions), jspb.Message.readBinaryExtension = function(t, r, n, i, s) {
                var o = n[r.getFieldNumber()];
                if (o) {
                    if (n = o.fieldInfo, !o.binaryReaderFn) throw Error("Deserializing extension whose generated code does not support binary format");
                    if (n.isMessageType()) {
                        var u = new n.ctor;
                        o.binaryReaderFn.call(r, u, o.binaryMessageDeserializeFn)
                    } else u = o.binaryReaderFn.call(r);
                    n.isRepeated && !o.isPacked ? (r = i.call(t, n)) ? r.push(u) : s.call(t, n, [u]) : s.call(t, n, u)
                } else r.skipField()
            }, goog.exportProperty(jspb.Message, "readBinaryExtension", jspb.Message.readBinaryExtension), jspb.Message.getField = function(t, r) {
                if (r < t.pivot_) {
                    r = jspb.Message.getIndex_(t, r);
                    var n = t.array[r];
                    return n === jspb.Message.EMPTY_LIST_SENTINEL_ ? t.array[r] = [] : n
                }
                if (t.extensionObject_) return (n = t.extensionObject_[r]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? t.extensionObject_[r] = [] : n
            }, goog.exportProperty(jspb.Message, "getField", jspb.Message.getField), jspb.Message.getRepeatedField = function(t, r) {
                return jspb.Message.getField(t, r)
            }, goog.exportProperty(jspb.Message, "getRepeatedField", jspb.Message.getRepeatedField), jspb.Message.getOptionalFloatingPointField = function(t, r) {
                return null == (t = jspb.Message.getField(t, r)) ? t : +t
            }, goog.exportProperty(jspb.Message, "getOptionalFloatingPointField", jspb.Message.getOptionalFloatingPointField), jspb.Message.getBooleanField = function(t, r) {
                return null == (t = jspb.Message.getField(t, r)) ? t : !!t
            }, goog.exportProperty(jspb.Message, "getBooleanField", jspb.Message.getBooleanField), jspb.Message.getRepeatedFloatingPointField = function(t, r) {
                var n = jspb.Message.getRepeatedField(t, r);
                if (t.convertedPrimitiveFields_ || (t.convertedPrimitiveFields_ = {}), !t.convertedPrimitiveFields_[r]) {
                    for (var i = 0; i < n.length; i++) n[i] = +n[i];
                    t.convertedPrimitiveFields_[r] = !0
                }
                return n
            }, goog.exportProperty(jspb.Message, "getRepeatedFloatingPointField", jspb.Message.getRepeatedFloatingPointField), jspb.Message.getRepeatedBooleanField = function(t, r) {
                var n = jspb.Message.getRepeatedField(t, r);
                if (t.convertedPrimitiveFields_ || (t.convertedPrimitiveFields_ = {}), !t.convertedPrimitiveFields_[r]) {
                    for (var i = 0; i < n.length; i++) n[i] = !!n[i];
                    t.convertedPrimitiveFields_[r] = !0
                }
                return n
            }, goog.exportProperty(jspb.Message, "getRepeatedBooleanField", jspb.Message.getRepeatedBooleanField), jspb.Message.bytesAsB64 = function(t) {
                return null == t || "string" == typeof t ? t : jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array ? goog.crypt.base64.encodeByteArray(t) : (jspb.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(t)), null)
            }, goog.exportProperty(jspb.Message, "bytesAsB64", jspb.Message.bytesAsB64), jspb.Message.bytesAsU8 = function(t) {
                return null == t || t instanceof Uint8Array ? t : "string" == typeof t ? goog.crypt.base64.decodeStringToUint8Array(t) : (jspb.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(t)), null)
            }, goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8), jspb.Message.bytesListAsB64 = function(t) {
                return jspb.Message.assertConsistentTypes_(t), t.length && "string" != typeof t[0] ? goog.array.map(t, jspb.Message.bytesAsB64) : t
            }, goog.exportProperty(jspb.Message, "bytesListAsB64", jspb.Message.bytesListAsB64), jspb.Message.bytesListAsU8 = function(t) {
                return jspb.Message.assertConsistentTypes_(t), !t.length || t[0] instanceof Uint8Array ? t : goog.array.map(t, jspb.Message.bytesAsU8)
            }, goog.exportProperty(jspb.Message, "bytesListAsU8", jspb.Message.bytesListAsU8), jspb.Message.assertConsistentTypes_ = function(t) {
                if (goog.DEBUG && t && 1 < t.length) {
                    var r = goog.typeOf(t[0]);
                    goog.array.forEach(t, function(t) {
                        goog.typeOf(t) != r && jspb.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(t) + " expected " + r)
                    })
                }
            }, jspb.Message.getFieldWithDefault = function(t, r, n) {
                return null == (t = jspb.Message.getField(t, r)) ? n : t
            }, goog.exportProperty(jspb.Message, "getFieldWithDefault", jspb.Message.getFieldWithDefault), jspb.Message.getBooleanFieldWithDefault = function(t, r, n) {
                return null == (t = jspb.Message.getBooleanField(t, r)) ? n : t
            }, goog.exportProperty(jspb.Message, "getBooleanFieldWithDefault", jspb.Message.getBooleanFieldWithDefault), jspb.Message.getFloatingPointFieldWithDefault = function(t, r, n) {
                return null == (t = jspb.Message.getOptionalFloatingPointField(t, r)) ? n : t
            }, goog.exportProperty(jspb.Message, "getFloatingPointFieldWithDefault", jspb.Message.getFloatingPointFieldWithDefault), jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault, goog.exportProperty(jspb.Message, "getFieldProto3", jspb.Message.getFieldProto3), jspb.Message.getMapField = function(t, r, n, i) {
                if (t.wrappers_ || (t.wrappers_ = {}), r in t.wrappers_) return t.wrappers_[r];
                var s = jspb.Message.getField(t, r);
                if (!s) {
                    if (n) return;
                    s = [], jspb.Message.setField(t, r, s)
                }
                return t.wrappers_[r] = new jspb.Map(s, i)
            }, goog.exportProperty(jspb.Message, "getMapField", jspb.Message.getMapField), jspb.Message.setField = function(t, r, n) {
                return jspb.asserts.assertInstanceof(t, jspb.Message), r < t.pivot_ ? t.array[jspb.Message.getIndex_(t, r)] = n : (jspb.Message.maybeInitEmptyExtensionObject_(t), t.extensionObject_[r] = n), t
            }, goog.exportProperty(jspb.Message, "setField", jspb.Message.setField), jspb.Message.setProto3IntField = function(t, r, n) {
                return jspb.Message.setFieldIgnoringDefault_(t, r, n, 0)
            }, goog.exportProperty(jspb.Message, "setProto3IntField", jspb.Message.setProto3IntField), jspb.Message.setProto3FloatField = function(t, r, n) {
                return jspb.Message.setFieldIgnoringDefault_(t, r, n, 0)
            }, goog.exportProperty(jspb.Message, "setProto3FloatField", jspb.Message.setProto3FloatField), jspb.Message.setProto3BooleanField = function(t, r, n) {
                return jspb.Message.setFieldIgnoringDefault_(t, r, n, !1)
            }, goog.exportProperty(jspb.Message, "setProto3BooleanField", jspb.Message.setProto3BooleanField), jspb.Message.setProto3StringField = function(t, r, n) {
                return jspb.Message.setFieldIgnoringDefault_(t, r, n, "")
            }, goog.exportProperty(jspb.Message, "setProto3StringField", jspb.Message.setProto3StringField), jspb.Message.setProto3BytesField = function(t, r, n) {
                return jspb.Message.setFieldIgnoringDefault_(t, r, n, "")
            }, goog.exportProperty(jspb.Message, "setProto3BytesField", jspb.Message.setProto3BytesField), jspb.Message.setProto3EnumField = function(t, r, n) {
                return jspb.Message.setFieldIgnoringDefault_(t, r, n, 0)
            }, goog.exportProperty(jspb.Message, "setProto3EnumField", jspb.Message.setProto3EnumField), jspb.Message.setProto3StringIntField = function(t, r, n) {
                return jspb.Message.setFieldIgnoringDefault_(t, r, n, "0")
            }, goog.exportProperty(jspb.Message, "setProto3StringIntField", jspb.Message.setProto3StringIntField), jspb.Message.setFieldIgnoringDefault_ = function(t, r, n, i) {
                return jspb.asserts.assertInstanceof(t, jspb.Message), n !== i ? jspb.Message.setField(t, r, n) : r < t.pivot_ ? t.array[jspb.Message.getIndex_(t, r)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(t), delete t.extensionObject_[r]), t
            }, jspb.Message.addToRepeatedField = function(t, r, n, i) {
                return jspb.asserts.assertInstanceof(t, jspb.Message), r = jspb.Message.getRepeatedField(t, r), void 0 != i ? r.splice(i, 0, n) : r.push(n), t
            }, goog.exportProperty(jspb.Message, "addToRepeatedField", jspb.Message.addToRepeatedField), jspb.Message.setOneofField = function(t, r, n, i) {
                return jspb.asserts.assertInstanceof(t, jspb.Message), (n = jspb.Message.computeOneofCase(t, n)) && n !== r && void 0 !== i && (t.wrappers_ && n in t.wrappers_ && (t.wrappers_[n] = void 0), jspb.Message.setField(t, n, void 0)), jspb.Message.setField(t, r, i)
            }, goog.exportProperty(jspb.Message, "setOneofField", jspb.Message.setOneofField), jspb.Message.computeOneofCase = function(t, r) {
                for (var n, i, s = 0; s < r.length; s++) {
                    var o = r[s],
                        u = jspb.Message.getField(t, o);
                    null != u && (n = o, i = u, jspb.Message.setField(t, o, void 0))
                }
                return n ? (jspb.Message.setField(t, n, i), n) : 0
            }, goog.exportProperty(jspb.Message, "computeOneofCase", jspb.Message.computeOneofCase), jspb.Message.getWrapperField = function(t, r, n, i) {
                if (t.wrappers_ || (t.wrappers_ = {}), !t.wrappers_[n]) {
                    var s = jspb.Message.getField(t, n);
                    (i || s) && (t.wrappers_[n] = new r(s))
                }
                return t.wrappers_[n]
            }, goog.exportProperty(jspb.Message, "getWrapperField", jspb.Message.getWrapperField), jspb.Message.getRepeatedWrapperField = function(t, r, n) {
                return jspb.Message.wrapRepeatedField_(t, r, n), (r = t.wrappers_[n]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (r = t.wrappers_[n] = []), r
            }, goog.exportProperty(jspb.Message, "getRepeatedWrapperField", jspb.Message.getRepeatedWrapperField), jspb.Message.wrapRepeatedField_ = function(t, r, n) {
                if (t.wrappers_ || (t.wrappers_ = {}), !t.wrappers_[n]) {
                    for (var i = jspb.Message.getRepeatedField(t, n), s = [], o = 0; o < i.length; o++) s[o] = new r(i[o]);
                    t.wrappers_[n] = s
                }
            }, jspb.Message.setWrapperField = function(t, r, n) {
                jspb.asserts.assertInstanceof(t, jspb.Message), t.wrappers_ || (t.wrappers_ = {});
                var i = n ? n.toArray() : n;
                return t.wrappers_[r] = n, jspb.Message.setField(t, r, i)
            }, goog.exportProperty(jspb.Message, "setWrapperField", jspb.Message.setWrapperField), jspb.Message.setOneofWrapperField = function(t, r, n, i) {
                jspb.asserts.assertInstanceof(t, jspb.Message), t.wrappers_ || (t.wrappers_ = {});
                var s = i ? i.toArray() : i;
                return t.wrappers_[r] = i, jspb.Message.setOneofField(t, r, n, s)
            }, goog.exportProperty(jspb.Message, "setOneofWrapperField", jspb.Message.setOneofWrapperField), jspb.Message.setRepeatedWrapperField = function(t, r, n) {
                jspb.asserts.assertInstanceof(t, jspb.Message), t.wrappers_ || (t.wrappers_ = {}), n = n || [];
                for (var i = [], s = 0; s < n.length; s++) i[s] = n[s].toArray();
                return t.wrappers_[r] = n, jspb.Message.setField(t, r, i)
            }, goog.exportProperty(jspb.Message, "setRepeatedWrapperField", jspb.Message.setRepeatedWrapperField), jspb.Message.addToRepeatedWrapperField = function(t, r, n, i, s) {
                jspb.Message.wrapRepeatedField_(t, i, r);
                var o = t.wrappers_[r];
                return o || (o = t.wrappers_[r] = []), n = n || new i, t = jspb.Message.getRepeatedField(t, r), void 0 != s ? (o.splice(s, 0, n), t.splice(s, 0, n.toArray())) : (o.push(n), t.push(n.toArray())), n
            }, goog.exportProperty(jspb.Message, "addToRepeatedWrapperField", jspb.Message.addToRepeatedWrapperField), jspb.Message.toMap = function(t, r, n, i) {
                for (var s = {}, o = 0; o < t.length; o++) s[r.call(t[o])] = n ? n.call(t[o], i, t[o]) : t[o];
                return s
            }, goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap), jspb.Message.prototype.syncMapFields_ = function() {
                if (this.wrappers_)
                    for (var t in this.wrappers_) {
                        var r = this.wrappers_[t];
                        if (Array.isArray(r))
                            for (var n = 0; n < r.length; n++) r[n] && r[n].toArray();
                        else r && r.toArray()
                    }
            }, jspb.Message.prototype.toArray = function() {
                return this.syncMapFields_(), this.array
            }, goog.exportProperty(jspb.Message.prototype, "toArray", jspb.Message.prototype.toArray), jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
                return this.syncMapFields_(), this.array.toString()
            }), jspb.Message.prototype.getExtension = function(t) {
                if (this.extensionObject_) {
                    this.wrappers_ || (this.wrappers_ = {});
                    var r = t.fieldIndex;
                    if (t.isRepeated) {
                        if (t.isMessageType()) return this.wrappers_[r] || (this.wrappers_[r] = goog.array.map(this.extensionObject_[r] || [], function(r) {
                            return new t.ctor(r)
                        })), this.wrappers_[r]
                    } else if (t.isMessageType()) return !this.wrappers_[r] && this.extensionObject_[r] && (this.wrappers_[r] = new t.ctor(this.extensionObject_[r])), this.wrappers_[r];
                    return this.extensionObject_[r]
                }
            }, goog.exportProperty(jspb.Message.prototype, "getExtension", jspb.Message.prototype.getExtension), jspb.Message.prototype.setExtension = function(t, r) {
                this.wrappers_ || (this.wrappers_ = {}), jspb.Message.maybeInitEmptyExtensionObject_(this);
                var n = t.fieldIndex;
                return t.isRepeated ? (r = r || [], t.isMessageType() ? (this.wrappers_[n] = r, this.extensionObject_[n] = goog.array.map(r, function(t) {
                    return t.toArray()
                })) : this.extensionObject_[n] = r) : t.isMessageType() ? (this.wrappers_[n] = r, this.extensionObject_[n] = r ? r.toArray() : r) : this.extensionObject_[n] = r, this
            }, goog.exportProperty(jspb.Message.prototype, "setExtension", jspb.Message.prototype.setExtension), jspb.Message.difference = function(t, r) {
                if (!(t instanceof r.constructor)) throw Error("Messages have different types.");
                var n = t.toArray();
                r = r.toArray();
                var i = [],
                    s = 0,
                    o = n.length > r.length ? n.length : r.length;
                for (t.getJsPbMessageId() && (i[0] = t.getJsPbMessageId(), s = 1); s < o; s++) jspb.Message.compareFields(n[s], r[s]) || (i[s] = r[s]);
                return new t.constructor(i)
            }, goog.exportProperty(jspb.Message, "difference", jspb.Message.difference), jspb.Message.equals = function(t, r) {
                return t == r || !(!t || !r) && t instanceof r.constructor && jspb.Message.compareFields(t.toArray(), r.toArray())
            }, goog.exportProperty(jspb.Message, "equals", jspb.Message.equals), jspb.Message.compareExtensions = function(t, r) {
                r = r || {};
                var n, i = {};
                for (n in t = t || {}) i[n] = 0;
                for (n in r) i[n] = 0;
                for (n in i)
                    if (!jspb.Message.compareFields(t[n], r[n])) return !1;
                return !0
            }, goog.exportProperty(jspb.Message, "compareExtensions", jspb.Message.compareExtensions), jspb.Message.compareFields = function(t, r) {
                if (t == r) return !0;
                if (!goog.isObject(t) || !goog.isObject(r)) return !!("number" == typeof t && isNaN(t) || "number" == typeof r && isNaN(r)) && String(t) == String(r);
                if (t.constructor != r.constructor) return !1;
                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && t.constructor === Uint8Array) {
                    if (t.length != r.length) return !1;
                    for (var n = 0; n < t.length; n++)
                        if (t[n] != r[n]) return !1;
                    return !0
                }
                if (t.constructor === Array) {
                    var i = void 0,
                        s = void 0,
                        o = Math.max(t.length, r.length);
                    for (n = 0; n < o; n++) {
                        var u = t[n],
                            p = r[n];
                        if (u && u.constructor == Object && (jspb.asserts.assert(void 0 === i), jspb.asserts.assert(n === t.length - 1), i = u, u = void 0), p && p.constructor == Object && (jspb.asserts.assert(void 0 === s), jspb.asserts.assert(n === r.length - 1), s = p, p = void 0), !jspb.Message.compareFields(u, p)) return !1
                    }
                    return !i && !s || (i = i || {}, s = s || {}, jspb.Message.compareExtensions(i, s))
                }
                if (t.constructor === Object) return jspb.Message.compareExtensions(t, r);
                throw Error("Invalid type in JSPB array")
            }, goog.exportProperty(jspb.Message, "compareFields", jspb.Message.compareFields), jspb.Message.prototype.cloneMessage = function() {
                return jspb.Message.cloneMessage(this)
            }, goog.exportProperty(jspb.Message.prototype, "cloneMessage", jspb.Message.prototype.cloneMessage), jspb.Message.prototype.clone = function() {
                return jspb.Message.cloneMessage(this)
            }, goog.exportProperty(jspb.Message.prototype, "clone", jspb.Message.prototype.clone), jspb.Message.clone = function(t) {
                return jspb.Message.cloneMessage(t)
            }, goog.exportProperty(jspb.Message, "clone", jspb.Message.clone), jspb.Message.cloneMessage = function(t) {
                return new t.constructor(jspb.Message.clone_(t.toArray()))
            }, jspb.Message.copyInto = function(t, r) {
                jspb.asserts.assertInstanceof(t, jspb.Message), jspb.asserts.assertInstanceof(r, jspb.Message), jspb.asserts.assert(t.constructor == r.constructor, "Copy source and target message should have the same type."), t = jspb.Message.clone(t);
                for (var n = r.toArray(), i = t.toArray(), s = n.length = 0; s < i.length; s++) n[s] = i[s];
                r.wrappers_ = t.wrappers_, r.extensionObject_ = t.extensionObject_
            }, goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto), jspb.Message.clone_ = function(t) {
                if (Array.isArray(t)) {
                    for (var r = Array(t.length), n = 0; n < t.length; n++) {
                        var i = t[n];
                        null != i && (r[n] = "object" == typeof i ? jspb.Message.clone_(jspb.asserts.assert(i)) : i)
                    }
                    return r
                }
                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array) return new Uint8Array(t);
                for (n in r = {}, t) null != (i = t[n]) && (r[n] = "object" == typeof i ? jspb.Message.clone_(jspb.asserts.assert(i)) : i);
                return r
            }, jspb.Message.registerMessageType = function(t, r) {
                r.messageId = t
            }, goog.exportProperty(jspb.Message, "registerMessageType", jspb.Message.registerMessageType), jspb.Message.messageSetExtensions = {}, jspb.Message.messageSetExtensionsBinary = {}, jspb.Export = {}, exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, exports.inherits = goog.inherits, exports.object = {
                extend: goog.object.extend
            }, exports.typeOf = goog.typeOf
        }
    }
]);