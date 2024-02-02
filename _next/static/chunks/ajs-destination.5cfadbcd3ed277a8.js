"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9464], {
        2693: function(t, n, e) {
            e.d(n, {
                n: function() {
                    return i
                }
            });

            function i(t, n) {
                var e, i;
                return "boolean" == typeof(null == n ? void 0 : n.enabled) ? n.enabled : null === (i = null === (e = null == t ? void 0 : t.__default) || void 0 === e ? void 0 : e.enabled) || void 0 === i || i
            }
        },
        11900: function(t, n, e) {
            e.r(n), e.d(n, {
                LegacyDestination: function() {
                    return S
                },
                ajsDestinations: function() {
                    return I
                }
            });
            var i = e(31191),
                r = e(22372),
                o = e(57897),
                a = e(47130),
                s = e(58074),
                u = e(31278),
                c = e(94270),
                l = e(2693),
                d = e(90412),
                h = e(49457),
                f = e(82635),
                v = e(14296),
                g = e(55779),
                p = e(35008),
                _ = e(49729);

            function y(t) {
                return t.toLowerCase().replace(".", "").replace(/\s+/g, "-")
            }

            function w(t, n) {
                return void 0 === n && (n = !1), n ? btoa(t).replace(/=/g, "") : void 0
            }
            var m = e(58459),
                b = function(t, n) {
                    var e, i = n.type,
                        r = n.bundlingStatus,
                        o = n.versionSettings,
                        a = "unbundled" !== r && ("browser" === i || (null === (e = null == o ? void 0 : o.componentTypes) || void 0 === e ? void 0 : e.includes("browser")));
                    return !t.startsWith("Segment") && "Iterable" !== t && a
                },
                z = function(t, n) {
                    var e = !1 === n.All && void 0 === n[t];
                    return !1 === n[t] || e
                },
                k = e(1242),
                S = function() {
                    function t(t, n, e, r, o, a) {
                        void 0 === r && (r = {}), this.options = {}, this.type = "destination", this.middleware = [], this._ready = !1, this._initialized = !1, this.flushing = !1, this.name = t, this.version = n, this.settings = (0, i.__assign)({}, r), this.disableAutoISOConversion = o.disableAutoISOConversion || !1, this.integrationSource = a, this.settings.type && "browser" === this.settings.type && delete this.settings.type, this.options = o, this.buffer = o.disableClientPersistence ? new f.Z(4, []) : new v.$(4, "".concat(e, ":dest-").concat(t)), this.scheduleFlush()
                    }
                    return t.prototype.isLoaded = function() {
                        return this._ready
                    }, t.prototype.ready = function() {
                        var t;
                        return null !== (t = this.onReady) && void 0 !== t ? t : Promise.resolve()
                    }, t.prototype.load = function(t, n) {
                        var e;
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            var r, o, a = this;
                            return (0, i.__generator)(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this._ready || void 0 !== this.onReady) return [2];
                                        if (!(null !== (e = this.integrationSource) && void 0 !== e)) return [3, 1];
                                        return o = e, [3, 3];
                                    case 1:
                                        return [4, function(t, n, e, r) {
                                            return (0, i.__awaiter)(this, void 0, void 0, function() {
                                                var o, a, s, u, c;
                                                return (0, i.__generator)(this, function(l) {
                                                    switch (l.label) {
                                                        case 0:
                                                            a = w(o = y(n), r), s = (0, p.Kg)(), u = "".concat(s, "/integrations/").concat(null != a ? a : o, "/").concat(e, "/").concat(null != a ? a : o, ".dynamic.js.gz"), l.label = 1;
                                                        case 1:
                                                            return l.trys.push([1, 3, , 4]), [4, (0, _.v)(u)];
                                                        case 2:
                                                            return l.sent(),
                                                                function(t, n, e) {
                                                                    var r, o;
                                                                    try {
                                                                        var a = (null !== (o = null === (r = null == window ? void 0 : window.performance) || void 0 === r ? void 0 : r.getEntriesByName(t, "resource")) && void 0 !== o ? o : [])[0];
                                                                        a && n.stats.gauge("legacy_destination_time", Math.round(a.duration), (0, i.__spreadArray)([e], a.duration < 100 ? ["cached"] : [], !0))
                                                                    } catch (t) {}
                                                                }(u, t, n), [3, 4];
                                                        case 3:
                                                            throw c = l.sent(), t.stats.gauge("legacy_destination_time", -1, ["plugin:".concat(n), "failed"]), c;
                                                        case 4:
                                                            return [4, Promise.all(window["".concat(o, "Deps")].map(function(t) {
                                                                return (0, _.v)(s + t + ".gz")
                                                            }))];
                                                        case 5:
                                                            return l.sent(), window["".concat(o, "Loader")](), [2, window["".concat(o, "Integration")]]
                                                    }
                                                })
                                            })
                                        }(t, this.name, this.version, this.options.obfuscate)];
                                    case 2:
                                        o = s.sent(), s.label = 3;
                                    case 3:
                                        r = o, this.integration = function(t, n, e) {
                                            if ("Integration" in t) {
                                                var i;
                                                t({
                                                    user: function() {
                                                        return e.user()
                                                    },
                                                    addIntegration: function() {}
                                                }), i = t.Integration
                                            } else i = t;
                                            var r = new i(n);
                                            return r.analytics = e, r
                                        }(r, this.settings, n), this.onReady = new Promise(function(t) {
                                            a.integration.once("ready", function() {
                                                a._ready = !0, t(!0)
                                            })
                                        }), this.onInitialize = new Promise(function(t) {
                                            a.integration.on("initialize", function() {
                                                a._initialized = !0, t(!0)
                                            })
                                        });
                                        try {
                                            (0, k.z)(t, {
                                                integrationName: this.name,
                                                methodName: "initialize",
                                                type: "classic"
                                            }), this.integration.initialize()
                                        } catch (n) {
                                            throw (0, k.z)(t, {
                                                integrationName: this.name,
                                                methodName: "initialize",
                                                type: "classic",
                                                didError: !0
                                            }), n
                                        }
                                        return [2]
                                }
                            })
                        })
                    }, t.prototype.unload = function(t, n) {
                        return function(t, n, e) {
                            return (0, i.__awaiter)(this, void 0, void 0, function() {
                                var r, o, a, s;
                                return (0, i.__generator)(this, function(i) {
                                    return r = (0, p.Kg)(), o = y(t), a = w(t, e), s = "".concat(r, "/integrations/").concat(null != a ? a : o, "/").concat(n, "/").concat(null != a ? a : o, ".dynamic.js.gz"), [2, (0, _.t)(s)]
                                })
                            })
                        }(this.name, this.version, this.options.obfuscate)
                    }, t.prototype.addMiddleware = function() {
                        for (var t, n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                        this.middleware = (t = this.middleware).concat.apply(t, n)
                    }, t.prototype.shouldBuffer = function(t) {
                        return "page" !== t.event.type && ((0, o.s)() || !1 === this._ready || !1 === this._initialized)
                    }, t.prototype.send = function(t, n, e) {
                        var r, o;
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            var a, u, c, d, h, f;
                            return (0, i.__generator)(this, function(v) {
                                switch (v.label) {
                                    case 0:
                                        if (this.shouldBuffer(t)) return this.buffer.push(t), this.scheduleFlush(), [2, t];
                                        if (a = null === (o = null === (r = this.options) || void 0 === r ? void 0 : r.plan) || void 0 === o ? void 0 : o.track, u = t.event.event, a && u && "Segment.io" !== this.name) {
                                            if (c = a[u], !(0, l.n)(a, c)) return t.updateEvent("integrations", (0, i.__assign)((0, i.__assign)({}, t.event.integrations), {
                                                All: !1,
                                                "Segment.io": !0
                                            })), t.cancel(new s.Y({
                                                retry: !1,
                                                reason: "Event ".concat(u, " disabled for integration ").concat(this.name, " in tracking plan"),
                                                type: "Dropped by plan"
                                            })), [2, t];
                                            if (t.updateEvent("integrations", (0, i.__assign)((0, i.__assign)({}, t.event.integrations), null == c ? void 0 : c.integrations)), (null == c ? void 0 : c.enabled) && (null == c ? void 0 : c.integrations[this.name]) === !1) return t.cancel(new s.Y({
                                                retry: !1,
                                                reason: "Event ".concat(u, " disabled for integration ").concat(this.name, " in tracking plan"),
                                                type: "Dropped by plan"
                                            })), [2, t]
                                        }
                                        return [4, (0, g.applyDestinationMiddleware)(this.name, t.event, this.middleware)];
                                    case 1:
                                        if (null === (d = v.sent())) return [2, t];
                                        h = new n(d, {
                                            traverse: !this.disableAutoISOConversion
                                        }), (0, k.z)(t, {
                                            integrationName: this.name,
                                            methodName: e,
                                            type: "classic"
                                        }), v.label = 2;
                                    case 2:
                                        if (v.trys.push([2, 5, , 6]), !this.integration) return [3, 4];
                                        return [4, this.integration.invoke.call(this.integration, e, h)];
                                    case 3:
                                        v.sent(), v.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        throw f = v.sent(), (0, k.z)(t, {
                                            integrationName: this.name,
                                            methodName: e,
                                            type: "classic",
                                            didError: !0
                                        }), f;
                                    case 6:
                                        return [2, t]
                                }
                            })
                        })
                    }, t.prototype.track = function(t) {
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            return (0, i.__generator)(this, function(n) {
                                return [2, this.send(t, r.Track, "track")]
                            })
                        })
                    }, t.prototype.page = function(t) {
                        var n;
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            var e = this;
                            return (0, i.__generator)(this, function(i) {
                                return (null === (n = this.integration) || void 0 === n ? void 0 : n._assumesPageview) && !this._initialized && this.integration.initialize(), [2, this.onInitialize.then(function() {
                                    return e.send(t, r.Page, "page")
                                })]
                            })
                        })
                    }, t.prototype.identify = function(t) {
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            return (0, i.__generator)(this, function(n) {
                                return [2, this.send(t, r.Identify, "identify")]
                            })
                        })
                    }, t.prototype.alias = function(t) {
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            return (0, i.__generator)(this, function(n) {
                                return [2, this.send(t, r.Alias, "alias")]
                            })
                        })
                    }, t.prototype.group = function(t) {
                        return (0, i.__awaiter)(this, void 0, void 0, function() {
                            return (0, i.__generator)(this, function(n) {
                                return [2, this.send(t, r.Group, "group")]
                            })
                        })
                    }, t.prototype.scheduleFlush = function() {
                        var t = this;
                        this.flushing || setTimeout(function() {
                            return (0, i.__awaiter)(t, void 0, void 0, function() {
                                var t;
                                return (0, i.__generator)(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.flushing = !0, t = this, [4, function(t, n) {
                                                return (0, i.__awaiter)(this, void 0, void 0, function() {
                                                    var e, r = this;
                                                    return (0, i.__generator)(this, function(s) {
                                                        switch (s.label) {
                                                            case 0:
                                                                if (e = [], (0, o.s)()) return [2, n];
                                                                return [4, (0, h.x)(function() {
                                                                    return n.length > 0 && (0, o.G)()
                                                                }, function() {
                                                                    return (0, i.__awaiter)(r, void 0, void 0, function() {
                                                                        var r;
                                                                        return (0, i.__generator)(this, function(i) {
                                                                            switch (i.label) {
                                                                                case 0:
                                                                                    if (!(r = n.pop())) return [2];
                                                                                    return [4, (0, c.a)(r, t)];
                                                                                case 1:
                                                                                    return i.sent() instanceof a._ || e.push(r), [2]
                                                                            }
                                                                        })
                                                                    })
                                                                })];
                                                            case 1:
                                                                return s.sent(), e.map(function(t) {
                                                                    return n.pushWithBackoff(t)
                                                                }), [2, n]
                                                        }
                                                    })
                                                })
                                            }(this, this.buffer)];
                                        case 1:
                                            return t.buffer = n.sent(), this.flushing = !1, this.buffer.todo > 0 && this.scheduleFlush(), [2]
                                    }
                                })
                            })
                        }, 5e3 * Math.random())
                    }, t
                }();

            function I(t, n, e, r, o, a) {
                if (void 0 === e && (e = {}), void 0 === r && (r = {}), (0, u.s)()) return [];
                n.plan && ((r = null != r ? r : {}).plan = n.plan);
                var s, c, l = null !== (c = null === (s = n.middlewareSettings) || void 0 === s ? void 0 : s.routingRules) && void 0 !== c ? c : [],
                    h = n.integrations,
                    f = r.integrations,
                    v = (0, d.o)(n, null != r ? r : {}),
                    g = null == a ? void 0 : a.reduce(function(t, n) {
                        var e;
                        return (0, i.__assign)((0, i.__assign)({}, t), ((e = {})[("Integration" in n ? n.Integration : n).prototype.name] = n, e))
                    }, {});
                return Array.from(new Set((0, i.__spreadArray)((0, i.__spreadArray)([], Object.keys(h).filter(function(t) {
                    return b(t, h[t])
                }), !0), Object.keys(g || {}).filter(function(t) {
                    return (0, m.PO)(h[t]) || (0, m.PO)(null == f ? void 0 : f[t])
                }), !0))).filter(function(t) {
                    return !z(t, e)
                }).map(function(n) {
                    var e, i, a, s, u, c = null !== (u = null !== (a = null === (i = null == (e = h[n]) ? void 0 : e.versionSettings) || void 0 === i ? void 0 : i.override) && void 0 !== a ? a : null === (s = null == e ? void 0 : e.versionSettings) || void 0 === s ? void 0 : s.version) && void 0 !== u ? u : "latest",
                        d = new S(n, c, t, v[n], r, null == g ? void 0 : g[n]);
                    return l.filter(function(t) {
                        return t.destinationName === n
                    }).length > 0 && o && d.addMiddleware(o), d
                })
            }
        }
    }
]);