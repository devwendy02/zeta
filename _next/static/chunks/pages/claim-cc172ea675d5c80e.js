(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5835], {
        39171: function(e, t, r) {
            "use strict";
            r.d(t, {
                E6: function() {
                    return o
                },
                El: function() {
                    return d
                },
                G8: function() {
                    return h
                },
                Rs: function() {
                    return s
                },
                VJ: function() {
                    return m
                },
                Zt: function() {
                    return u
                },
                d0: function() {
                    return p
                }
            });
            var i, a = r(31737),
                l = r(75990);

            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var o = ["transactions", "invites", "discoveredIssues"],
                s = 500,
                d = 2e3,
                m = 2e3 * o.length - 500,
                p = c(c({}, (i = {}, (0, a.Z)(i, l.ClaimUserTier.ZetaGlobetrotter, {
                    tierImageUrl: "/img/claim/zeta-globetrotter.svg",
                    classes: {
                        leftSide: "text-grey-50 bg-grey-900",
                        leftSideShareButton: "text-grey-900 bg-grey-50 hover:bg-grey-100",
                        leftSideLowerTitle: "text-grey-50",
                        leftSideLowerSubtitle: "text-grey-50",
                        rightSideTop: "text-grey-50 bg-green-800",
                        rightSideList: "text-grey-50 bg-grey-700",
                        rightSideDots: "bg-green-800",
                        rightSideShareButton: "bg-grey-50",
                        rightSideShareIcon: "text-green-700"
                    }
                }), (0, a.Z)(i, l.ClaimUserTier.ZetaJetsetter, {
                    tierImageUrl: "/img/claim/zeta-jetsetter.svg",
                    classes: {
                        leftSide: "text-grey-50 bg-grey-900",
                        leftSideShareButton: "text-grey-900 bg-grey-50 hover:bg-grey-100",
                        leftSideLowerTitle: "text-grey-50",
                        leftSideLowerSubtitle: "text-grey-50",
                        rightSideTop: "text-grey-50 bg-zeta-teal",
                        rightSideList: "text-grey-50 bg-grey-700",
                        rightSideDots: "bg-zeta-teal",
                        rightSideShareButton: "bg-grey-50",
                        rightSideShareIcon: "text-green-700"
                    }
                }), (0, a.Z)(i, l.ClaimUserTier.ZetaPilot, {
                    tierImageUrl: "/img/claim/zeta-pilot.svg",
                    classes: {
                        leftSide: "text-grey-50 bg-grey-700",
                        leftSideShareButton: "text-grey-900 bg-grey-50 hover:bg-grey-100",
                        leftSideLowerTitle: "text-grey-50",
                        leftSideLowerSubtitle: "text-grey-50",
                        rightSideTop: "text-grey-900 bg-zeta-warm-grey",
                        rightSideList: "text-grey-50 bg-grey-900",
                        rightSideDots: "bg-zeta-warm-grey",
                        rightSideShareButton: "bg-grey-900",
                        rightSideShareIcon: "text-grey-50"
                    }
                }), (0, a.Z)(i, l.ClaimUserTier.ZetaCosmopolitan, {
                    tierImageUrl: "/img/claim/zeta-cosmopolitan.svg",
                    classes: {
                        leftSide: "text-grey-900 bg-zeta-sand",
                        leftSideShareButton: "text-grey-50 bg-grey-900 hover:bg-grey-700",
                        leftSideLowerTitle: "text-green-700",
                        leftSideLowerSubtitle: "text-grey-900",
                        rightSideTop: "text-grey-900 bg-zeta-orange",
                        rightSideList: "text-grey-50 bg-grey-900",
                        rightSideDots: "bg-zeta-orange",
                        rightSideShareButton: "bg-grey-900",
                        rightSideShareIcon: "text-grey-50"
                    }
                }), (0, a.Z)(i, l.ClaimUserTier.ZetaTrailblazer, {
                    tierImageUrl: "/img/claim/zeta-trailblazer.svg",
                    classes: {
                        leftSide: "text-grey-900 bg-zeta-sand",
                        leftSideShareButton: "text-grey-50 bg-grey-900 hover:bg-grey-700",
                        leftSideLowerTitle: "text-green-700",
                        leftSideLowerSubtitle: "text-grey-900",
                        rightSideTop: "text-grey-900 bg-zeta-orange",
                        rightSideList: "text-grey-50 bg-grey-900",
                        rightSideDots: "bg-zeta-orange",
                        rightSideShareButton: "bg-grey-900",
                        rightSideShareIcon: "text-grey-50"
                    }
                }), (0, a.Z)(i, l.ClaimUserTier.ZetaRacer, {
                    tierImageUrl: "/img/claim/zeta-racer.svg",
                    classes: {
                        leftSide: "text-grey-50 bg-grey-900",
                        leftSideShareButton: "text-grey-900 bg-grey-50 hover:bg-grey-100",
                        leftSideLowerTitle: "text-grey-50",
                        leftSideLowerSubtitle: "text-grey-50",
                        rightSideTop: "text-grey-50 bg-green-600",
                        rightSideList: "text-grey-50 bg-grey-700",
                        rightSideDots: "bg-green-600",
                        rightSideShareButton: "bg-grey-50",
                        rightSideShareIcon: "text-green-700"
                    }
                }), (0, a.Z)(i, l.ClaimUserTier.ZetaExplorer, {
                    tierImageUrl: "/img/claim/zeta-explorer.svg",
                    classes: {
                        leftSide: "text-grey-50 bg-green-900",
                        leftSideShareButton: "text-grey-900 bg-grey-50 hover:bg-grey-100",
                        leftSideLowerTitle: "text-grey-50",
                        leftSideLowerSubtitle: "text-green-50",
                        rightSideTop: "text-grey-50 bg-green-700",
                        rightSideList: "text-grey-50 bg-grey-900",
                        rightSideDots: "bg-green-700",
                        rightSideShareButton: "bg-grey-50",
                        rightSideShareIcon: "text-green-700"
                    }
                }), (0, a.Z)(i, l.ClaimUserTier.ZetaBoss, {
                    tierImageUrl: "/img/claim/zeta-boss.svg",
                    classes: {
                        leftSide: "text-grey-50 bg-green-900",
                        leftSideShareButton: "text-grey-900 bg-grey-50 hover:bg-grey-100",
                        leftSideLowerTitle: "text-grey-50",
                        leftSideLowerSubtitle: "text-green-50",
                        rightSideTop: "text-grey-50 bg-green-700",
                        rightSideList: "text-grey-50 bg-grey-900",
                        rightSideDots: "bg-green-700",
                        rightSideShareButton: "bg-grey-50",
                        rightSideShareIcon: "text-green-700"
                    }
                }), i)), {}, {
                    "Zeta Access Pack": {
                        tierImageUrl: "/img/claim/access-pack.svg",
                        classes: {
                            leftSide: "text-grey-900 bg-zeta-sand",
                            leftSideShareButton: "text-grey-50 bg-grey-900 hover:bg-grey-700",
                            leftSideLowerTitle: "text-green-700",
                            leftSideLowerSubtitle: "text-grey-900",
                            rightSideTop: "text-grey-50 bg-green-700",
                            rightSideList: "text-grey-50 bg-grey-900",
                            rightSideDots: "bg-green-700",
                            rightSideShareButton: "bg-grey-50",
                            rightSideShareIcon: "text-green-700"
                        }
                    }
                }),
                u = "https://blog.zetachain.com/",
                h = "".concat(u, "the-zetachain-airdrop-pre-claim-494d09a6523b")
        },
        78001: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return e8
                }
            });
            var i = r(25294),
                a = r(32735),
                l = r(75990),
                n = r(70294),
                c = r(36397),
                o = r(55634),
                s = r(36107),
                d = ((0, s.createSelector)(function(e) {
                    return e
                }, function(e) {
                    return e.claim.preClaimStatus
                }), (0, s.createSelector)(function(e) {
                    return e
                }, function(e) {
                    return e.claim.claimEligibleStatus
                })),
                m = (0, s.createSelector)(function(e) {
                    return e
                }, function(e) {
                    return e.claim.claimError
                }),
                p = (0, s.createSelector)(function(e) {
                    return e
                }, function(e) {
                    return e.claim.isClaiming
                }),
                u = (0, s.createSelector)(function(e) {
                    return e
                }, function(e) {
                    return e.claim.isSigned
                }),
                h = (0, s.createSelector)(function(e) {
                    return e
                }, function(e) {
                    return e.claim.hasSuccessfullyClaimed
                }),
                g = (0, s.createSelector)(function(e) {
                    return e
                }, function(e) {
                    return e.claim.isLoadingStatus
                }),
                b = ((0, s.createSelector)(function(e) {
                    return e
                }, function(e) {
                    return e.claim.isPhaseZ1
                }), {
                    selectClaimEligibleStatus: d,
                    selectClaimError: m,
                    selectHasSuccessfullyClaimed: h,
                    selectIsClaiming: p,
                    selectIsSigned: u,
                    selectIsLoadingClaimStatus: g,
                    selectIsGenesisCardDialogOpen: (0, s.createSelector)(function(e) {
                        return e
                    }, function(e) {
                        return e.claim.isGenesisCardDialogOpen
                    })
                }),
                f = r(31737),
                x = r(78756),
                y = r(17285),
                v = r(46146),
                Z = r(72975),
                w = r.n(Z),
                C = r(67543),
                L = r(42949),
                S = r(95453),
                O = r(60045),
                E = r(85243),
                N = r(93283),
                j = r(62431),
                V = r(65660),
                k = r(46582),
                M = r.n(k),
                P = r(43875),
                B = r.n(P),
                X = r(3314),
                D = r(89631),
                z = r(62482),
                A = r.n(z),
                T = r(9633),
                I = r(27644),
                R = r(26921),
                H = r(39171),
                W = r(38839),
                F = function(e) {
                    var t = e.className,
                        r = e.top,
                        i = e.left,
                        l = (0, a.useMemo)(function() {
                            return Math.random()
                        }, []),
                        n = (0, a.useMemo)(function() {
                            return .5 * Math.random() + .35
                        }, []);
                    return (0, W.tZ)(E.E.div, {
                        style: {
                            top: r,
                            left: i,
                            transform: "scale(".concat(l, ")"),
                            opacity: l < 1.3 ? n : 1
                        },
                        animate: {
                            top: r
                        },
                        exit: {
                            top: r + 100 * (Math.random() > .5 ? -1 : 1)
                        },
                        initial: {
                            top: r + 100 * (Math.random() > .5 ? -1 : 1)
                        },
                        transition: {
                            duration: 15,
                            repeat: 1 / 0,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: 2 * Math.random()
                        },
                        className: (0, O.default)("rounded-md cursor-pointer z-10 h-screen w-screen grayscale mix-blend-luminosity absolute"),
                        children: (0, W.BX)("svg", {
                            className: (0, O.default)("grayscale mix-blend-luminosity", t),
                            width: "80",
                            height: "80",
                            viewBox: "0 0 80 80",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, W.tZ)("circle", {
                                cx: "40",
                                cy: "40",
                                r: "40",
                                fill: "#003D2D"
                            }), (0, W.tZ)("path", {
                                d: "M50.386 48.8415V54.2437H28.0999C28.4073 50.6882 29.5546 48.1865 33.5222 44.669L50.386 30.2824V42.9068H56.4565V19.6807H21.9381V31.2581H28.0086V25.7512H46.3471L29.5658 40.0732L29.5256 40.111C22.4927 46.3375 21.9336 51.3632 21.9336 57.2845V60.3187H56.4587V48.8459H50.3882L50.386 48.8415Z",
                                fill: "#00946E"
                            })]
                        })
                    })
                };

            function U(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var G = (0, v.Z)("div", {
                    target: "eij5dxm2"
                })("font-size:calc(16px + 1vw);line-height:calc(100%);overflow:hidden;.customScrollbar{scrollbar-width:none;-ms-overflow-style:none;::-webkit-scrollbar{width:0px;background:transparent;}::-webkit-scrollbar-thumb{position:absolute;background-color:", function(e) {
                    return e.thumbColor
                }, ";}}"),
                Y = (0, v.Z)(E.E.div, {
                    target: "eij5dxm1"
                })({
                    name: "q2uv17",
                    styles: "position:absolute;z-index:99 !important;height:100vh;width:100vw;mix-blend-mode:hard-light; background:rgb(0, 0, 0);background:linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 36%, rgba(255, 255, 255, 0) 100%)"
                }),
                K = (0, v.Z)(E.E.div, {
                    target: "eij5dxm0"
                })({
                    name: "by6kxh",
                    styles: "position:absolute;z-index:99 !important;height:100vh;width:100vw;mix-blend-mode:darken;--tw-backdrop-blur:blur(4px);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia); background:#fff;background:radial-gradient(circle, #ffffff 0%, #0000007a 44%, #00000099 100%)"
                }),
                J = a.memo(function() {
                    var e = (0, L.AA)().copy,
                        t = (0, o.Os)().address,
                        r = (0, T.TL)(),
                        l = (0, c.v9)(b.selectIsClaiming),
                        n = (0, c.v9)(b.selectIsSigned),
                        s = (0, c.v9)(b.selectClaimEligibleStatus);
                    (0, X.Z)(l);
                    var d = e.hub.airdrop.tiers[0],
                        m = (0, D.Z)(),
                        p = (0, a.useMemo)(function() {
                            for (var e = [], t = 0; t < 50; t += 1) {
                                var r = (0, V.Z)(0, m.height),
                                    i = (0, V.Z)(0, m.width);
                                e.push({
                                    top: r,
                                    left: i
                                })
                            }
                            return e
                        }, [m.height, m.width]),
                        u = (0, a.useState)(),
                        h = u[0],
                        g = u[1],
                        f = (0, a.useMemo)(function() {
                            return d.items.map(function(e) {
                                return e.replace("You", "")
                            })
                        }, [d.items]);
                    (0, a.useEffect)(function() {
                        var e = 0,
                            t = setInterval(function() {
                                g(f[e % f.length]), e += 1
                            }, 2e3);
                        return function() {
                            return clearInterval(t)
                        }
                    }, [f]);
                    var v = (0, a.useState)("Claiming"),
                        Z = v[0],
                        k = v[1],
                        P = (0, a.useMemo)(function() {
                            return ["", ".", "..", "..."]
                        }, []);
                    (0, a.useEffect)(function() {
                        var e = 0,
                            t = setInterval(function() {
                                k("ZetaChain | Claiming".concat(P[e % P.length])), e += 1
                            }, 500);
                        return function() {
                            return clearInterval(t)
                        }
                    }, [P]);
                    var z = (0, R.dW)(),
                        U = (0, y.Z)(z, 1)[0];
                    if ((0, L.zP)((0, x.Z)(w().mark(function e() {
                            var i;
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, U({
                                            address: t
                                        });
                                    case 5:
                                        "string" == typeof(i = e.sent.data) ? r((0, I.n4)(i || "Could not get status")): i && "hasSuccessfullyClaimed" in i && i.hasSuccessfullyClaimed && ((0, S.L9)(S._E.HubClaimSuccessfullyClaimed), r((0, I.ne)(!0)), r((0, I.vX)(!1)), r((0, I.gS)(!1))), e.next = 15;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(2), r((0, I.vX)(!1)), r((0, I.gS)(!1)), r((0, I.n4)((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) || "Could not get status"));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 10]
                            ])
                        })), 1e4), !s) return null;
                    var J = H.d0[s.userTier];
                    return (0, W.BX)(G, {
                        className: "dark",
                        thumbColor: "#FA5628",
                        children: [(0, W.BX)(M(), {
                            children: [l ? (0, W.tZ)("title", {
                                children: Z
                            }) : (0, W.tZ)("title", {
                                children: "ZetaChain | Claim"
                            }), (0, W.tZ)("meta", {
                                name: "description",
                                content: "ZetaChain Airdrop Claim"
                            })]
                        }), (0, W.tZ)(i.ZRI, {
                            className: "md:col-span-7",
                            children: (0, W.BX)("div", {
                                className: "grid md:grid-cols-12 md:h-[calc(100vh-60px)] !h-screen top-0",
                                children: [(0, W.tZ)("div", {
                                    className: "md:col-span-5 text-black bg-[#F7F3EC] overflow-hidden grid grid-flow-row grid-rows-4 md:h-full h-screen",
                                    children: (0, W.tZ)(N.s, {
                                        children: (0, W.BX)(W.HY, {
                                            children: [(0, W.tZ)("div", {
                                                className: "fixed w-screen h-screen top-0 left-0 z-[999999999]",
                                                children: n && (0, W.BX)(E.E.div, _(_({}, (0, C.zW)({
                                                    delay: .4,
                                                    y: 0,
                                                    x: 0,
                                                    scale: .95
                                                })), {}, {
                                                    className: "text-white absolute bottom-[50%] left-[30%] md:left-[35%] lg:left-[38%] scale-[150%] -translate-x-1/2 text-sm sm:text-[1.6vw] lg:text-2xl flex z-50",
                                                    children: [(0, W.tZ)("div", {
                                                        className: "-ml-[50%] text-grey-300 md:mt-[0.1em]",
                                                        children: "You have"
                                                    }), (0, W.tZ)("div", {
                                                        children: (0, W.tZ)(j.M, {
                                                            children: (0, W.tZ)(E.E.div, {
                                                                layout: !0,
                                                                initial: {
                                                                    opacity: 0,
                                                                    y: -25
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    y: 0
                                                                },
                                                                exit: {
                                                                    opacity: 0,
                                                                    y: 25
                                                                },
                                                                className: "text-grey-200 absolute whitespace-nowrap ml-2 font-semibold text-md sm:text-[2vw] lg:text-3xl capitalize",
                                                                children: h
                                                            }, h)
                                                        })
                                                    })]
                                                }))
                                            }), n && (0, W.tZ)(E.E.div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                exit: {
                                                    opacity: 0
                                                },
                                                transition: {
                                                    duration: 4,
                                                    delay: 2
                                                },
                                                className: "fixed w-screen h-screen top-0 left-0 z-[99999999] bg-green-900 mix-blend-color"
                                            }), (0, W.BX)(E.E.div, {
                                                layout: !0,
                                                layoutId: "expandable-card",
                                                className: "fixed bg-[#FA5628] rounded-[4px] w-screen h-screen left-0 top-0 pointer-events-none mix-blend-multiply backdrop-blur-sm",
                                                style: {
                                                    height: "100vh",
                                                    width: "100vw"
                                                },
                                                animate: l ? "open" : "closed",
                                                variants: {
                                                    open: {
                                                        x: 0,
                                                        y: 0,
                                                        borderRadius: 0,
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 300,
                                                            damping: 100,
                                                            duration: 4
                                                        },
                                                        zIndex: 99999
                                                    },
                                                    closed: {
                                                        x: 0,
                                                        y: 0,
                                                        borderRadius: 4,
                                                        transition: {
                                                            transition: {
                                                                type: "spring",
                                                                stiffness: 300,
                                                                damping: 100,
                                                                duration: 4
                                                            }
                                                        },
                                                        zIndex: 99999
                                                    }
                                                },
                                                children: [!n && (0, W.BX)(E.E.div, {
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1
                                                    },
                                                    exit: {
                                                        opacity: 0
                                                    },
                                                    transition: {
                                                        duration: .5,
                                                        delay: 2
                                                    },
                                                    className: "absolute text-center top-[50%] left-[50%] text-md -translate-x-1/2 -translate-y-1/2 text-white font-bold z-[99999999] opacity-90",
                                                    children: [s.claimAmount && (0, W.BX)("span", {
                                                        children: [(0, W.tZ)("span", {
                                                            className: "font-semibold",
                                                            children: e.hub.claim.signToClaim
                                                        }), e.hub.claim.claimTitleAmt.replace("[X]", String(s.claimAmount))]
                                                    }), (0, W.tZ)(E.E.div, {
                                                        initial: {
                                                            x: -3
                                                        },
                                                        animate: {
                                                            x: 3
                                                        },
                                                        transition: {
                                                            duration: 1,
                                                            repeat: 1 / 0,
                                                            repeatType: "reverse"
                                                        },
                                                        exit: {
                                                            x: 3
                                                        },
                                                        className: "text-xl font-extrabold",
                                                        children: "→"
                                                    })]
                                                }), (0, W.tZ)(E.E.div, _(_({}, (0, C.zW)({
                                                    delay: .2,
                                                    y: 0,
                                                    x: 0,
                                                    scale: .75,
                                                    duration: 3
                                                })), {}, {
                                                    className: (0, O.default)("h-full w-full mix-blend-luminosity", {
                                                        "!mix-blend-screen grayscale opacity-100": n
                                                    }),
                                                    children: (0, W.tZ)("div", {
                                                        className: (0, O.default)("h-full w-full contrast-200 opacity-70 transition duration-300", {
                                                            "scale-75 !opacity-100 !contrast-100": n
                                                        }),
                                                        children: (0, W.tZ)(B(), {
                                                            src: J.tierImageUrl,
                                                            width: 160,
                                                            height: 160,
                                                            alt: e.hub.preClaim.genesisCard,
                                                            className: "select-none w-full h-full scale-50"
                                                        })
                                                    })
                                                }))]
                                            }), (0, W.BX)(E.E.div, {
                                                className: (0, O.default)("opacity-0 transition-all duration-300 pointer-events-none w-screen h-screen absolute left-0 top-0 z-50", {
                                                    "opacity-100": n
                                                }),
                                                children: [(0, W.tZ)(K, {}), (0, W.tZ)(Y, {}), (0, W.tZ)("div", {
                                                    ref: function(e) {
                                                        e && A().init(e, {
                                                            max: 1,
                                                            speed: 700,
                                                            easing: "cubic-bezier(.03,.98,.52,.99)",
                                                            glare: !0,
                                                            "max-glare": 2,
                                                            gyroscope: !0,
                                                            reverse: !0,
                                                            perspective: 1e3,
                                                            "full-page-listening": !0
                                                        })
                                                    },
                                                    children: p.map(function(e) {
                                                        return (0, W.tZ)(F, {
                                                            top: e.top,
                                                            left: e.left
                                                        }, "".concat(e.top, "-").concat(e.left))
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, W.tZ)("div", {
                                    className: "customScrollbar grid grid-cols-1 md:col-span-7 h-full bg-[#F7F3EC] overflow-y-scroll overflow-x-hidden scroll-smooth z-0"
                                })]
                            })
                        })]
                    })
                }),
                q = r(43277),
                Q = r(35837),
                $ = r(75246);

            function ee(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ee(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var er = [31, 32, 33, 34, 35, 43, 44, 45, 46, 47, 48, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 68, 69, 70, 74, 75, 76, 87, 88, 89, 99, 100, 101, 110, 111, 112, 113, 123, 124, 125, 136, 137, 138, 175, 176, 177, 188, 189, 190].reduce(function(e, t) {
                    return et(et({}, e), {}, (0, f.Z)({}, t, !0))
                }, {}),
                ei = [111, 112, 113, 114, 115, 155, 156, 157, 158, 159, 160, 161, 199, 200, 201, 202, 203, 204, 205, 206, 207, 244, 245, 246, 250, 251, 252, 295, 296, 297, 339, 340, 341, 382, 383, 384, 385, 427, 428, 429, 472, 473, 474, 607, 608, 609, 652, 653, 654].reduce(function(e, t) {
                    return et(et({}, e), {}, (0, f.Z)({}, t, !0))
                }, {}),
                ea = (0, v.Z)("div", {
                    target: "eldp7ve1"
                })({
                    name: "16ucwk6",
                    styles: "grid-column:span 5 / span 5;display:none;max-height:75vw;align-content:space-between;justify-content:space-between;--tw-bg-opacity:1;background-color:rgb(0 61 45 / var(--tw-bg-opacity));padding-left:60px;padding-right:60px;padding-top:calc(64px + 80px);padding-bottom:5rem;@media (min-width: 900px){display:grid;} grid-template-columns:repeat(13, minmax(0, 1fr));grid-template-rows:repeat(17, minmax(0, 1fr));gap:calc((100% - (17 * 8px)) / 16) calc((100% - (13 * 8px)) / 12)"
                }),
                el = (0, v.Z)(E.E.div, {
                    target: "eldp7ve0"
                })({
                    name: "1aphyii",
                    styles: "grid-column:span 12 / span 12;display:grid;align-content:space-between;justify-content:space-between;--tw-bg-opacity:1;background-color:rgb(0 61 45 / var(--tw-bg-opacity));padding-left:1.5rem;padding-right:1.5rem;padding-top:calc(52px + 24px);padding-bottom:1.5rem;@media (min-width: 900px){display:none;} grid-template-columns:repeat(45, minmax(0, 1fr));grid-template-rows:repeat(17, minmax(0, 1fr));gap:calc((100% - (17 * 2px)) / 16) calc((100% - (45 * 2px)) / 44)"
                }),
                en = function() {
                    var e = (0, L.AA)().copy,
                        t = (0, Q.useRouter)();
                    return (0, W.BX)("div", {
                        className: "grid grid-cols-12 min-h-screen [grid-template-rows:200px] sm:[grid-template-rows:300px] md:[grid-template-rows:auto] bg-green-900",
                        children: [(0, W.tZ)(ea, {
                            children: (0, q.Z)(221).map(function(e) {
                                return (0, $.az)(E.E.div, et(et({}, (0, C.zW)({
                                    delay: .003 * e,
                                    y: 0,
                                    x: 0,
                                    scale: 0
                                })), {}, {
                                    key: e,
                                    className: (0, O.default)("h-2 w-2", {
                                        "bg-green-600": !er[e + 1],
                                        "bg-positive-500": er[e + 1]
                                    })
                                }))
                            })
                        }), (0, W.tZ)(el, {
                            children: (0, q.Z)(765).map(function(e) {
                                return (0, W.tZ)("div", {
                                    className: (0, O.default)("h-0.5 w-0.5", {
                                        "bg-green-600": !ei[e + 1],
                                        "bg-positive-500": ei[e + 1]
                                    })
                                }, e)
                            })
                        }), (0, W.BX)("div", {
                            className: "col-span-12 md:col-span-7 pt-10 md:pt-[calc(64px+80px)] pb-10 md:pb-20 px-6 md:px-10 bg-green-700",
                            children: [(0, W.tZ)(E.E.div, et(et({}, (0, C.zW)({
                                delay: 0,
                                y: 0,
                                x: 0
                            })), {}, {
                                className: "hidden md:block mb-[120px]",
                                children: (0, W.tZ)(i.aHf, {
                                    className: "text-grey-50 w-[173px] h-[32px]"
                                })
                            })), (0, W.tZ)(E.E.h2, et(et({}, (0, C.zW)({
                                delay: .05,
                                y: 0,
                                x: 0
                            })), {}, {
                                className: "text-grey-50 text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-6 md:mb-10",
                                children: e.hub.preClaim.somethingWentWrong
                            })), (0, W.tZ)(E.E.p, et(et({}, (0, C.zW)({
                                delay: .1,
                                y: 0,
                                x: 0
                            })), {}, {
                                className: "text-grey-50 text-sm md:text-xl mb-6 md:mb-10",
                                children: e.hub.preClaim.pleaseMakeSure
                            })), (0, W.tZ)(E.E.button, et(et({}, (0, C.zW)({
                                delay: .15,
                                y: 0,
                                x: 0
                            })), {}, {
                                type: "button",
                                className: "w-full md:w-auto font-medium text-xs md:text-xl py-1.5 md:py-[18px] px-4 md:px-[30px] rounded bg-grey-900 hover:bg-grey-700 text-white transition-colors",
                                onClick: function() {
                                    t.reload()
                                },
                                children: e.hub.preClaim.refresh
                            }))]
                        })]
                    })
                },
                ec = r(56976),
                eo = function(e, t) {
                    return Intl.NumberFormat(t, {
                        notation: e >= 1e5 ? "compact" : "standard",
                        maximumSignificantDigits: e >= 1e5 ? 3 : 6
                    }).format(e)
                },
                es = r(89218),
                ed = r.n(es),
                em = r(92839),
                ep = function(e) {
                    var t = e.children;
                    return (0, W.BX)("li", {
                        className: "flex gap-4 md:gap-5",
                        children: [(0, W.tZ)("div", {
                            className: "w-1.5 md:w-2 h-1.5 md:h-2 flex-shrink-0 mt-[5px] rounded-full bg-grey-50"
                        }), (0, W.tZ)("span", {
                            className: "text-xs md:text-sm",
                            children: t
                        })]
                    })
                };

            function eu(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eh(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eu(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eu(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eg = function(e) {
                    var t = e.revealDelay,
                        r = (0, L.AA)().copy;
                    return (0, W.BX)(E.E.div, eh(eh({}, (0, C.zW)({
                        delay: null != t ? t : .2,
                        y: 0,
                        x: 100
                    })), {}, {
                        className: "flex-grow py-10 px-6 md:p-10 md:pb-20 bg-grey-800",
                        children: [(0, W.tZ)("h4", {
                            className: "text-[inherit] text-sm md:text-xl font-medium mb-5",
                            children: r.hub.claim.airdropInformation
                        }), (0, W.BX)("ul", {
                            className: "flex flex-col gap-5",
                            children: [(0, W.tZ)(ep, {
                                children: r.hub.claim.thisWillBeClaimable
                            }), (0, W.tZ)(ep, {
                                children: (0, S.uz)(r.hub.claim.theSnapshotForData, "[X]", (0, W.tZ)(em.V, {
                                    href: "https://w3w.ai/",
                                    className: "underline",
                                    children: "W3W.ai"
                                }, 0))
                            }), (0, W.tZ)(ep, {
                                children: (0, S.uz)(r.hub.claim.airdropPackages, "[X]", (0, W.tZ)(em.V, {
                                    href: H.G8,
                                    displayUrl: H.Zt,
                                    className: "underline",
                                    children: r.hub.claim.here
                                }, 0))
                            }), (0, W.tZ)(ep, {
                                children: (0, S.uz)(r.hub.claim.airdropScams, "[X]", (0, W.tZ)(ed(), {
                                    href: "".concat(C.SZ.hubUrl).concat(C.XM.Claim),
                                    className: "underline",
                                    children: "https://hub.zetachain.com/claim"
                                }, 0))
                            }), (0, W.tZ)(ep, {
                                children: r.hub.claim.thisDropWillBe
                            })]
                        })]
                    }))
                },
                eb = r(17241),
                ef = r(31358),
                ex = r(46776),
                ey = function(e) {
                    var t, r = e.btnClass,
                        a = e.variant,
                        n = (0, L.AA)().copy,
                        s = (0, o.Os)().address,
                        d = (0, T.TL)(),
                        m = (0, c.v9)(b.selectClaimEligibleStatus),
                        p = (0, ef.yw)().signTypedDataAsync,
                        u = (0, R.at)(),
                        h = (0, y.Z)(u, 1)[0],
                        g = (t = (0, x.Z)(w().mark(function e() {
                            var t, r;
                            return w().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (s) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return d((0, I.gS)(!0)), (0, S.L9)(S._E.HubClaimButtonClicked), e.prev = 4, t = (0, l.getClaimWalletVerifyData)(Number(ex.N2.chainId)), e.next = 8, p(t);
                                    case 8:
                                        r = e.sent, d((0, I.vX)(!0)), h({
                                            address: s,
                                            signedMessage: r
                                        }), e.next = 18;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(4), console.error("[ClaimUserLeftSideContentCta]: Error signing claim tx"), d((0, I.vX)(!1)), d((0, I.gS)(!1));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [4, 13]
                            ])
                        })), function() {
                            return t.apply(this, arguments)
                        });
                    if (!m) return null;
                    var f = m.userTier,
                        v = H.d0[f];
                    return a === ec.VS.Success ? (0, W.tZ)(ed(), {
                        href: C.XM.Points,
                        className: (0, O.default)("w-full text-center font-medium text-xs md:text-xl py-1.5 md:py-[18px] px-4 md:px-[30px] rounded transition-colors", r),
                        children: n.hub.claim.enrollInZetaXp
                    }) : a === ec.VS.External ? (0, W.BX)("div", {
                        className: "flex flex-col items-center",
                        children: [(0, W.tZ)(eb.Z, {
                            variant: "headline1",
                            className: (0, O.default)("text-center mb-4", v.classes.leftSideLowerTitle),
                            children: n.hub.claim.goToClaimsPortal
                        }), (0, W.tZ)(eb.Z, {
                            variant: "body1",
                            className: (0, O.default)("text-center mb-10", v.classes.leftSideLowerSubtitle),
                            children: n.hub.claim.completeKycQuestions
                        }), (0, W.BX)(em.V, {
                            href: "https://claims.zetachain.com",
                            onRedirect: function() {
                                (0, S.L9)(S._E.HubClaimExternalKycSiteButtonClicked)
                            },
                            className: (0, O.default)("flex justify-center items-center gap-2 w-full text-center font-medium text-xs md:text-xl py-1.5 md:py-[18px] px-4 md:px-[30px] rounded transition-colors", r),
                            children: [n.hub.claim.claimsPortal, (0, W.tZ)(i.Q7S, {
                                className: (0, O.default)(r)
                            })]
                        })]
                    }) : a === ec.VS.Disabled ? (0, W.BX)("div", {
                        className: "flex flex-col items-center",
                        children: [(0, W.tZ)(eb.Z, {
                            variant: "headline1",
                            className: (0, O.default)("text-center mb-4", v.classes.leftSideLowerTitle),
                            children: n.hub.claim.claimUnavailableTitle
                        }), (0, W.tZ)(eb.Z, {
                            variant: "body1",
                            className: (0, O.default)("text-center mb-10", v.classes.leftSideLowerSubtitle),
                            children: n.hub.claim.claimUnavailableDescription
                        }), (0, W.tZ)("button", {
                            type: "button",
                            className: (0, O.default)("w-full text-xl font-medium py-4 px-8 rounded pointer-events-none select-none opacity-20", r),
                            disabled: !0,
                            children: n.hub.claim.claimUnavailableCta
                        })]
                    }) : a === ec.VS.Locked ? (0, W.BX)("div", {
                        className: "flex flex-col items-center",
                        children: [(0, W.tZ)(eb.Z, {
                            variant: "headline1",
                            className: (0, O.default)("text-center mb-4", v.classes.leftSideLowerTitle),
                            children: n.hub.claim.requestInProgress
                        }), (0, W.tZ)(eb.Z, {
                            variant: "body1",
                            className: (0, O.default)("text-center mb-10", v.classes.leftSideLowerSubtitle),
                            children: n.hub.claim.aRequestIsInProgress
                        }), (0, W.tZ)("button", {
                            type: "button",
                            className: (0, O.default)("w-full text-xl font-medium py-4 px-8 rounded pointer-events-none select-none opacity-20", r),
                            disabled: !0,
                            children: n.hub.claim.claimInProgressCta
                        })]
                    }) : a === ec.VS.NonEligible ? (0, W.tZ)(ed(), {
                        href: C.XM.Home,
                        type: "button",
                        className: "w-full text-center font-medium text-xs md:text-xl py-1.5 md:py-[18px] px-4 md:px-[30px] rounded transition-colors text-grey-50 bg-grey-900 hover:bg-grey-700",
                        children: n.hub.claim.returnToZetahub
                    }) : a === ec.VS.Eligible ? (0, W.tZ)("button", {
                        type: "button",
                        className: (0, O.default)("w-full text-xl font-medium py-4 px-8 rounded", r),
                        onClick: g,
                        children: n.hub.claim.claimTitleCta
                    }) : null
                };

            function ev(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eZ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ev(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ev(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ew = function(e) {
                var t = e.title,
                    r = e.titleAmt,
                    i = e.subtitle,
                    a = e.image,
                    l = e.classes,
                    n = e.ctaVariant;
                return (0, W.BX)("div", {
                    className: (0, O.default)("col-span-12 md:col-span-5 pt-[calc(52px+40px)] md:pt-[calc(64px+80px)] pb-10 md:pb-20 px-6 md:px-[60px] flex flex-col justify-between items-center gap-3 md:gap-4", l.container),
                    children: [(0, W.BX)("div", {
                        children: [(0, W.BX)(E.E.h2, eZ(eZ({}, (0, C.zW)({
                            delay: .1,
                            y: 0,
                            x: 0
                        })), {}, {
                            className: "text-[inherit] text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-3.5 md:mb-5",
                            children: [(0, W.tZ)("span", {
                                className: "block text-center",
                                children: t
                            }), r && (0, W.tZ)("span", {
                                className: "block text-center",
                                children: r
                            })]
                        })), i && (0, W.tZ)(E.E.p, eZ(eZ({}, (0, C.zW)({
                            delay: .15,
                            y: 0,
                            x: 0
                        })), {}, {
                            className: "text-[inherit] text-sm md:text-xl mb-6 md:mb-10",
                            children: i
                        }))]
                    }), (0, W.tZ)(E.E.div, eZ(eZ({}, (0, C.zW)({
                        delay: .2,
                        y: 0,
                        x: 0
                    })), {}, {
                        className: (0, O.default)("relative max-w-full", l.image),
                        children: a
                    })), (0, W.tZ)(E.E.div, eZ(eZ({}, (0, C.zW)({
                        delay: .3,
                        y: 0,
                        x: 0
                    })), {}, {
                        className: "w-full flex flex-col gap-3 md:gap-4 mt-6 md:mt-10",
                        children: (0, W.tZ)(ey, {
                            btnClass: l.cta,
                            variant: n
                        })
                    }))]
                })
            };

            function eC(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eL(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eC(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eC(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eS = function() {
                    var e = (0, L.AA)(),
                        t = e.copy,
                        r = e.locale,
                        a = (0, L.cK)().isMobile,
                        l = (0, T.TL)(),
                        n = (0, c.v9)(b.selectClaimEligibleStatus);
                    if (!n) return null;
                    var o = n.userTier,
                        s = n.claimAmount,
                        d = H.d0[o];
                    return (0, W.BX)("div", {
                        className: "grid grid-cols-12 min-h-screen overflow-hidden",
                        children: [(0, W.tZ)(ew, {
                            title: t.hub.claim.claimTitle,
                            titleAmt: t.hub.claim.claimTitleAmt.replace("[X]", eo(s, r)),
                            image: (0, W.tZ)(B(), {
                                src: d.tierImageUrl,
                                alt: o,
                                width: 214,
                                height: 240
                            }),
                            classes: {
                                container: d.classes.leftSide,
                                image: "w-[170px] h-[190px] md:w-[214px] md:h-[240px]",
                                cta: d.classes.leftSideShareButton
                            },
                            ctaVariant: ec.VS.External
                        }), (0, W.BX)("div", {
                            className: "col-span-12 md:col-span-7 flex flex-col overflow-hidden",
                            children: [(0, W.BX)(E.E.div, eL(eL({}, (0, C.zW)({
                                delay: 0,
                                y: 0,
                                x: 100
                            })), {}, {
                                className: (0, O.default)("flex-grow p-6 md:p-10 py-10 md:pt-[calc(64px+80px)]", d.classes.rightSideTop),
                                children: [(0, W.BX)("div", {
                                    className: "flex justify-between",
                                    children: [(0, W.tZ)("h2", {
                                        className: "text-[inherit] text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-6 md:mb-10",
                                        children: "Zeta Access Pack" === o ? t.hub.claim.readyForLaunch : o
                                    }), (0, W.tZ)("button", {
                                        type: "button",
                                        className: (0, O.default)("flex items-center h-8 md:h-auto max-h-14 rounded-[500px] p-2 sm:p-4 md:px-6 md:py-3 text-green-200", d.classes.rightSideShareButton),
                                        onClick: function() {
                                            (0, S.L9)(S._E.HubClaimShareGenesisCardClicked), l((0, I.XW)(!0))
                                        },
                                        children: (0, W.tZ)(i.FOM, {
                                            size: a ? 16 : 30,
                                            className: (0, O.default)(d.classes.rightSideShareIcon)
                                        })
                                    })]
                                }), (0, W.tZ)("p", {
                                    className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                    children: t.hub.claim.congratulationsYouCanClaim.replace("[X]", eo(s, r))
                                }), (0, W.tZ)("p", {
                                    className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                    children: t.hub.claim.zetaChainAimsTo
                                }), (0, W.tZ)("p", {
                                    className: "text-[inherit] text-sm md:text-xl",
                                    children: t.hub.claim.shareCardAndProceed
                                })]
                            })), (0, W.tZ)(eg, {
                                revealDelay: .4
                            })]
                        })]
                    })
                },
                eO = function() {
                    var e, t = (0, L.AA)().copy,
                        r = (0, T.TL)(),
                        l = (0, c.v9)(b.selectIsGenesisCardDialogOpen),
                        n = (0, c.v9)(b.selectClaimEligibleStatus),
                        o = (0, a.useMemo)(function() {
                            return (0, ec.jk)(n)
                        }, [n]);
                    if (!o) return null;
                    var s = o.imageUrl,
                        d = o.genesisCardId,
                        m = encodeURIComponent(t.hub.claim.tweetText.replace("[X]", null !== (e = String(null == n ? void 0 : n.claimAmount)) && void 0 !== e ? e : "")),
                        p = encodeURIComponent("".concat(C.SZ.hubUrl).concat(C.XM.Claim, "/").concat(d)),
                        u = "https://twitter.com/",
                        h = "".concat(u, "intent/tweet?text=").concat(m, "&url=").concat(p);
                    return (0, W.BX)(i.QAJ, {
                        className: "overflow-hidden",
                        title: t.hub.preClaim.shareGenesisCard,
                        open: l,
                        onClose: function() {
                            return r((0, I.XW)(!1))
                        },
                        children: [(0, W.tZ)("div", {
                            ref: function(e) {
                                e && A().init(e, {
                                    max: 10,
                                    speed: 400,
                                    glare: !0,
                                    "max-glare": .5,
                                    gyroscope: !0,
                                    "full-page-listening": !0
                                })
                            },
                            className: "mx-2 mt-4 mb-8 hidden md:block",
                            children: (0, W.tZ)(B(), {
                                src: s,
                                width: 560,
                                height: 320,
                                alt: t.hub.preClaim.genesisCard,
                                className: "select-none"
                            })
                        }), (0, W.tZ)("div", {
                            className: "block md:hidden mb-4",
                            children: (0, W.tZ)(B(), {
                                src: s,
                                width: 560,
                                height: 320,
                                alt: t.hub.preClaim.genesisCard
                            })
                        }), (0, W.BX)("div", {
                            className: "flex flex-col gap-2 md:gap-4",
                            children: [(0, W.tZ)(em.V, {
                                className: "text-center w-full !font-medium !text-xs md:!text-xl py-1.5 md:py-[18px] px-4 md:px-[30px] rounded !transition-colors !text-black !bg-grey-50 hover:!bg-grey-100",
                                displayUrl: u,
                                href: h,
                                onRedirect: function() {
                                    (0, S.L9)(S._E.HubClaimShareOnTwitterClicked)
                                },
                                children: t.hub.preClaim.shareOnTwitter
                            }), (0, W.tZ)("button", {
                                type: "button",
                                className: "w-full font-medium text-xs md:text-xl py-1.5 md:py-[18px] px-4 md:px-[30px] rounded transition-colors text-white bg-green-500 hover:bg-green-600",
                                onClick: function() {
                                    (0, S.L9)(S._E.HubClaimSaveImageClicked), (0, S.NG)(s)
                                },
                                children: t.hub.preClaim.saveImage
                            })]
                        })]
                    })
                },
                eE = r(72578),
                eN = (0, v.Z)("button", {
                    target: "e1exa1yc0"
                })({
                    name: "1iffk8l",
                    styles: "position:fixed;bottom:0px;left:0px;display:flex;width:100vw;min-width:320px;align-items:center;justify-content:space-between;gap:0.5rem;--tw-bg-opacity:1;background-color:rgb(31 35 40 / var(--tw-bg-opacity));padding-top:1rem;padding-bottom:1rem;padding-left:2rem;padding-right:2rem;font-size:0.875rem;line-height:130%;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 -1px 10px 1px rgba(0,0,0,0.3);--tw-shadow-colored:0 -1px 10px 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;:hover{--tw-bg-opacity:1;background-color:rgb(45 50 55 / var(--tw-bg-opacity));}@media (min-width: 900px){position:static;width:auto;min-width:0px;border-radius:0.125rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}"
                }),
                ej = function() {
                    var e = (0, o.Os)(),
                        t = e.isConnected,
                        r = e.address;
                    return (0, W.BX)("div", {
                        className: "fixed z-[100] bg-grey-900 border-b border-grey-700 w-full flex items-center justify-between h-[52px] md:h-[64px] px-6 md:px-8",
                        children: [(0, W.tZ)(i.NpN, {
                            className: "text-grey-50"
                        }), t && (0, W.tZ)(eE.NL.Custom, {
                            children: function(e) {
                                var t = e.account,
                                    a = e.chain,
                                    l = e.openAccountModal,
                                    n = e.mounted,
                                    c = e.openChainModal;
                                return (0, W.tZ)("div", {
                                    "aria-hidden": !n,
                                    className: (0, O.default)({
                                        "opacity-0 pointer-events-none select-none": !n
                                    }),
                                    children: n && t && a ? (0, W.BX)(eN, {
                                        onClick: function() {
                                            if (a.unsupported) {
                                                c();
                                                return
                                            }
                                            l()
                                        },
                                        children: [(0, W.BX)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, S.Xn)(r, 6, 4), (0, W.tZ)(i.YkO, {})]
                                        }), (0, W.tZ)(i.C26, {
                                            className: "text-grey-50 h-4 w-4 flex-shrink-0"
                                        })]
                                    }) : null
                                })
                            }
                        })]
                    })
                },
                eV = (0, v.Z)("div", {
                    target: "e4t39nf1"
                })({
                    name: "9wzkh8",
                    styles: "scrollbar-width:none;-ms-overflow-style:none;::-webkit-scrollbar{width:0px;background:transparent;}::-webkit-scrollbar-thumb{position:absolute;}"
                }),
                ek = (0, v.Z)(i.uWw, {
                    target: "e4t39nf0"
                })({
                    name: "1475vg",
                    styles: "&&,& select{min-width:142px;max-width:300px;--tw-bg-opacity:1;background-color:rgb(31 35 40 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));:hover{--tw-bg-opacity:1;background-color:rgb(45 50 55 / var(--tw-bg-opacity));}@media (min-width: 600px){max-width:none;};}"
                }),
                eM = function(e) {
                    var t = e.children;
                    return (0, W.BX)(W.HY, {
                        children: [(0, W.BX)(eV, {
                            children: [(0, W.tZ)(ej, {}), t]
                        }), (0, W.tZ)("div", {
                            className: "bg-black pb-[52px] md:pb-0",
                            children: (0, W.tZ)(i.J8k, {
                                app: C.th.Hub,
                                languagePicker: (0, W.tZ)(ek, {
                                    app: C.th.Hub
                                })
                            })
                        })]
                    })
                };

            function eP(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eB(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eP(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eP(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eX = (0, v.Z)("div", {
                    target: "e6stj0h1"
                })({
                    name: "1gtl36s",
                    styles: "grid-column:span 5 / span 5;display:none;grid-template-columns:repeat(4, minmax(0, 1fr));grid-template-rows:repeat(5, minmax(0, 1fr));align-content:space-between;justify-content:space-between;--tw-bg-opacity:1;background-color:rgb(0 61 45 / var(--tw-bg-opacity));padding-left:60px;padding-right:60px;padding-top:calc(64px + 80px);padding-bottom:5rem;@media (min-width: 900px){display:grid;}gap:calc((100% - (5 * 8px)) / 4) calc((100% - (5 * 8px)) / 4)"
                }),
                eD = (0, v.Z)(E.E.div, {
                    target: "e6stj0h0"
                })({
                    name: "1cyw0x6",
                    styles: "grid-column:span 12 / span 12;display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));grid-template-rows:repeat(2, minmax(0, 1fr));align-content:space-between;justify-content:space-between;--tw-bg-opacity:1;background-color:rgb(0 61 45 / var(--tw-bg-opacity));padding-left:1.5rem;padding-right:1.5rem;padding-top:calc(52px + 24px);padding-bottom:1.5rem;@media (min-width: 900px){display:none;}gap:calc((100% - (2 * 8px)) / 1) calc((100% - (4 * 8px)) / 3)"
                }),
                ez = function() {
                    var e = (0, L.AA)().copy,
                        t = (0, o.Os)().openConnectModal;
                    return (0, W.BX)("div", {
                        className: "grid grid-cols-12 min-h-screen [grid-template-rows:172px] md:[grid-template-rows:auto] bg-green-900",
                        children: [(0, W.tZ)(eX, {
                            children: (0, q.Z)(20).map(function(e) {
                                return (0, $.az)(E.E.div, eB(eB({}, (0, C.zW)({
                                    delay: .03 * e,
                                    y: 0,
                                    x: 0,
                                    scale: 0
                                })), {}, {
                                    key: e,
                                    className: (0, O.default)("bg-positive-500 h-2 w-2", {
                                        "h-[2vw] w-[2vw] min-h-[8px] min-w-[8px] max-h-[32px] max-w-[32px]": 0 === e
                                    })
                                }))
                            })
                        }), (0, W.tZ)(eD, eB(eB({}, (0, C.zW)({
                            delay: .05,
                            y: 0,
                            x: 0
                        })), {}, {
                            children: (0, q.Z)(8).map(function(e) {
                                return (0, W.tZ)("div", {
                                    className: "bg-positive-500 h-2 w-2"
                                }, e)
                            })
                        })), (0, W.BX)("div", {
                            className: "col-span-12 md:col-span-7 pt-10 md:pt-[calc(64px+80px)] pb-10 md:pb-20 px-6 md:px-10 bg-green-700",
                            children: [(0, W.tZ)(E.E.div, eB(eB({}, (0, C.zW)({
                                delay: 0,
                                y: 0,
                                x: 0
                            })), {}, {
                                className: "hidden md:block mb-[120px]",
                                children: (0, W.tZ)(i.aHf, {
                                    className: "text-grey-50 w-[173px] h-[32px]"
                                })
                            })), (0, W.tZ)(E.E.h2, eB(eB({}, (0, C.zW)({
                                delay: .05,
                                y: 0,
                                x: 0
                            })), {}, {
                                className: "text-grey-50 text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-6 md:mb-10",
                                children: e.hub.preClaim.checkYourEligibility
                            })), (0, W.tZ)(E.E.p, eB(eB({}, (0, C.zW)({
                                delay: .1,
                                y: 0,
                                x: 0
                            })), {}, {
                                className: "text-grey-50 text-sm md:text-xl mb-6 md:mb-10",
                                children: e.hub.preClaim.asZetaChainPrepares
                            })), (0, W.tZ)(E.E.p, eB(eB({}, (0, C.zW)({
                                delay: .15,
                                y: 0,
                                x: 0
                            })), {}, {
                                className: "text-grey-50 text-sm md:text-xl mb-6 md:mb-10",
                                children: e.hub.preClaim.checkYourEligibilityByConnecting
                            })), (0, W.tZ)(E.E.button, eB(eB({}, (0, C.zW)({
                                delay: .2,
                                y: 0,
                                x: 0
                            })), {}, {
                                type: "button",
                                className: "w-full md:w-auto font-medium text-xs md:text-xl py-1.5 md:py-[18px] px-4 md:px-[30px] rounded bg-grey-900 hover:bg-grey-700 text-white transition-colors",
                                onClick: function() {
                                    (0, S.L9)(S._E.HubClaimConnectWalletClicked), null == t || t()
                                },
                                children: e.hub.preClaim.connectAndCheck
                            }))]
                        })]
                    })
                };

            function eA(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eT(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eA(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eA(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eI = function() {
                var e = (0, L.AA)(),
                    t = e.copy,
                    r = e.locale,
                    a = (0, L.cK)().isMobile,
                    l = (0, T.TL)(),
                    n = (0, c.v9)(b.selectClaimEligibleStatus);
                if (!n) return null;
                var o = n.userTier,
                    s = n.claimAmount,
                    d = H.d0[o];
                return (0, W.BX)("div", {
                    className: "grid grid-cols-12 min-h-screen overflow-hidden",
                    children: [(0, W.tZ)(ew, {
                        title: t.hub.claim.claimTitle,
                        titleAmt: t.hub.claim.claimTitleAmt.replace("[X]", eo(s, r)),
                        image: (0, W.tZ)(B(), {
                            src: d.tierImageUrl,
                            alt: o,
                            width: 214,
                            height: 240
                        }),
                        classes: {
                            container: d.classes.leftSide,
                            image: "w-[170px] h-[190px] md:w-[214px] md:h-[240px]",
                            cta: d.classes.leftSideShareButton
                        },
                        ctaVariant: ec.VS.Disabled
                    }), (0, W.BX)("div", {
                        className: "col-span-12 md:col-span-7 flex flex-col overflow-hidden",
                        children: [(0, W.BX)(E.E.div, eT(eT({}, (0, C.zW)({
                            delay: 0,
                            y: 0,
                            x: 100
                        })), {}, {
                            className: (0, O.default)("flex-grow p-6 md:p-10 py-10 md:pt-[calc(64px+80px)]", d.classes.rightSideTop),
                            children: [(0, W.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, W.tZ)("h2", {
                                    className: "text-[inherit] text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-6 md:mb-10",
                                    children: "Zeta Access Pack" === o ? t.hub.claim.readyForLaunch : o
                                }), (0, W.tZ)("button", {
                                    type: "button",
                                    className: (0, O.default)("flex items-center h-8 md:h-auto max-h-14 rounded-[500px] p-2 sm:p-4 md:px-6 md:py-3 text-green-200", d.classes.rightSideShareButton),
                                    onClick: function() {
                                        (0, S.L9)(S._E.HubClaimShareGenesisCardClicked), l((0, I.XW)(!0))
                                    },
                                    children: (0, W.tZ)(i.FOM, {
                                        size: a ? 16 : 30,
                                        className: (0, O.default)(d.classes.rightSideShareIcon)
                                    })
                                })]
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                children: t.hub.claim.congratulationsYouCanClaim.replace("[X]", eo(s, r))
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                children: t.hub.claim.zetaChainAimsTo
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl",
                                children: t.hub.claim.shareCardAndProceed
                            })]
                        })), (0, W.tZ)(eg, {
                            revealDelay: .4
                        })]
                    })]
                })
            };

            function eR(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eH(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eR(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eR(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eW = function() {
                var e = (0, L.AA)(),
                    t = e.copy,
                    r = e.locale,
                    a = (0, L.cK)().isMobile,
                    n = (0, T.TL)(),
                    o = (0, c.v9)(b.selectClaimEligibleStatus);
                if (!(o && "userCondition" in o && o.userCondition === l.ClaimUserCondition.Eligible)) return null;
                var s = o.userTier,
                    d = o.claimAmount,
                    m = H.d0[s];
                return (0, W.BX)("div", {
                    className: "grid grid-cols-12 min-h-screen overflow-hidden",
                    children: [(0, W.tZ)(ew, {
                        title: t.hub.claim.claimTitle,
                        titleAmt: t.hub.claim.claimTitleAmt.replace("[X]", eo(d, r)),
                        image: (0, W.tZ)(B(), {
                            src: m.tierImageUrl,
                            alt: s,
                            width: 214,
                            height: 240
                        }),
                        classes: {
                            container: m.classes.leftSide,
                            image: "w-[170px] h-[190px] md:w-[214px] md:h-[240px]",
                            cta: m.classes.leftSideShareButton
                        },
                        ctaVariant: ec.VS.Eligible
                    }), (0, W.BX)("div", {
                        className: "col-span-12 md:col-span-7 flex flex-col overflow-hidden",
                        children: [(0, W.BX)(E.E.div, eH(eH({}, (0, C.zW)({
                            delay: 0,
                            y: 0,
                            x: 100
                        })), {}, {
                            className: (0, O.default)("flex-grow p-6 md:p-10 py-10 md:pt-[calc(64px+80px)]", m.classes.rightSideTop),
                            children: [(0, W.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, W.tZ)("h2", {
                                    className: "text-[inherit] text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-6 md:mb-10",
                                    children: "Zeta Access Pack" === s ? t.hub.claim.readyForLaunch : s
                                }), (0, W.tZ)("button", {
                                    type: "button",
                                    className: (0, O.default)("flex items-center h-8 md:h-auto max-h-14 rounded-[500px] p-2 sm:p-4 md:px-6 md:py-3 text-green-200", m.classes.rightSideShareButton),
                                    onClick: function() {
                                        (0, S.L9)(S._E.HubClaimShareGenesisCardClicked), n((0, I.XW)(!0))
                                    },
                                    children: (0, W.tZ)(i.FOM, {
                                        size: a ? 16 : 30,
                                        className: (0, O.default)(m.classes.rightSideShareIcon)
                                    })
                                })]
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                children: t.hub.claim.congratulationsYouCanClaim.replace("[X]", eo(d, r))
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                children: t.hub.claim.zetaChainAimsTo
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl",
                                children: t.hub.claim.shareCardAndProceed
                            })]
                        })), (0, W.tZ)(eg, {
                            revealDelay: .4
                        })]
                    })]
                })
            };

            function eF(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eU(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eF(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eF(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var e_ = function() {
                var e = (0, L.AA)(),
                    t = e.copy,
                    r = e.locale,
                    a = (0, L.cK)().isMobile,
                    l = (0, T.TL)(),
                    n = (0, c.v9)(b.selectClaimEligibleStatus);
                if (!n) return null;
                var o = n.userTier,
                    s = n.claimAmount,
                    d = H.d0[o];
                return (0, W.BX)("div", {
                    className: "grid grid-cols-12 min-h-screen overflow-hidden",
                    children: [(0, W.tZ)(ew, {
                        title: t.hub.claim.youClaimed,
                        titleAmt: t.hub.claim.claimTitleAmt.replace("[X]", eo(s, r)),
                        image: (0, W.tZ)(B(), {
                            src: "/img/claim/has-successfully-claimed.svg",
                            alt: t.hub.claim.youHaveSuccessfullyClaimed,
                            width: 365,
                            height: 200
                        }),
                        classes: {
                            container: d.classes.leftSide,
                            image: "w-[218px] h-[120px] md:w-[365px] md:h-[200px]",
                            cta: d.classes.leftSideShareButton
                        },
                        ctaVariant: ec.VS.Success
                    }), (0, W.BX)("div", {
                        className: "col-span-12 md:col-span-7 flex flex-col overflow-hidden",
                        children: [(0, W.BX)(E.E.div, eU(eU({}, (0, C.zW)({
                            delay: 0,
                            y: 0,
                            x: 100
                        })), {}, {
                            className: (0, O.default)("flex-grow p-6 md:p-10 py-10 md:pt-[calc(64px+80px)]", d.classes.rightSideTop),
                            children: [(0, W.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, W.tZ)("h2", {
                                    className: "text-[inherit] text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-6 md:mb-10",
                                    children: "Zeta Access Pack" === o ? t.hub.claim.readyForLaunch : o
                                }), (0, W.tZ)("button", {
                                    type: "button",
                                    className: (0, O.default)("flex items-center h-8 md:h-auto max-h-14 rounded-[500px] p-2 sm:p-4 md:px-6 md:py-3 text-green-200", d.classes.rightSideShareButton),
                                    onClick: function() {
                                        (0, S.L9)(S._E.HubClaimShareGenesisCardClicked), l((0, I.XW)(!0))
                                    },
                                    children: (0, W.tZ)(i.FOM, {
                                        size: a ? 16 : 30,
                                        className: (0, O.default)(d.classes.rightSideShareIcon)
                                    })
                                })]
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                children: t.hub.claim.congratulationsYouCanClaim.replace("[X]", eo(s, r))
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                children: t.hub.claim.zetaChainAimsTo
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl",
                                children: t.hub.claim.shareCardAndProceed
                            })]
                        })), (0, W.tZ)(eg, {
                            revealDelay: .4
                        })]
                    })]
                })
            };

            function eG(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eY(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eG(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eG(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eK = function() {
                var e = (0, L.AA)(),
                    t = e.copy,
                    r = e.locale,
                    a = (0, L.cK)().isMobile,
                    l = (0, T.TL)(),
                    n = (0, c.v9)(b.selectClaimEligibleStatus);
                if (!n) return null;
                var o = n.userTier,
                    s = n.claimAmount,
                    d = H.d0[o];
                return (0, W.BX)("div", {
                    className: "grid grid-cols-12 min-h-screen overflow-hidden",
                    children: [(0, W.tZ)(ew, {
                        title: t.hub.claim.claimTitle,
                        titleAmt: t.hub.claim.claimTitleAmt.replace("[X]", eo(s, r)),
                        image: (0, W.tZ)(B(), {
                            src: d.tierImageUrl,
                            alt: o,
                            width: 214,
                            height: 240
                        }),
                        classes: {
                            container: d.classes.leftSide,
                            image: "w-[170px] h-[190px] md:w-[214px] md:h-[240px]",
                            cta: d.classes.leftSideShareButton
                        },
                        ctaVariant: ec.VS.Locked
                    }), (0, W.BX)("div", {
                        className: "col-span-12 md:col-span-7 flex flex-col overflow-hidden",
                        children: [(0, W.BX)(E.E.div, eY(eY({}, (0, C.zW)({
                            delay: 0,
                            y: 0,
                            x: 100
                        })), {}, {
                            className: (0, O.default)("flex-grow p-6 md:p-10 py-10 md:pt-[calc(64px+80px)]", d.classes.rightSideTop),
                            children: [(0, W.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, W.tZ)("h2", {
                                    className: "text-[inherit] text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-6 md:mb-10",
                                    children: "Zeta Access Pack" === o ? t.hub.claim.readyForLaunch : o
                                }), (0, W.tZ)("button", {
                                    type: "button",
                                    className: (0, O.default)("flex items-center h-8 md:h-auto max-h-14 rounded-[500px] p-2 sm:p-4 md:px-6 md:py-3 text-green-200", d.classes.rightSideShareButton),
                                    onClick: function() {
                                        (0, S.L9)(S._E.HubClaimShareGenesisCardClicked), l((0, I.XW)(!0))
                                    },
                                    children: (0, W.tZ)(i.FOM, {
                                        size: a ? 16 : 30,
                                        className: (0, O.default)(d.classes.rightSideShareIcon)
                                    })
                                })]
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                children: t.hub.claim.congratulationsYouCanClaim.replace("[X]", eo(s, r))
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                children: t.hub.claim.zetaChainAimsTo
                            }), (0, W.tZ)("p", {
                                className: "text-[inherit] text-sm md:text-xl",
                                children: t.hub.claim.shareCardAndProceed
                            })]
                        })), (0, W.tZ)(eg, {
                            revealDelay: .4
                        })]
                    })]
                })
            };

            function eJ(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function eq(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eJ(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eJ(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eQ = function() {
                    var e = (0, L.AA)().copy;
                    return (0, W.BX)("div", {
                        className: "grid grid-cols-12 min-h-screen overflow-hidden",
                        children: [(0, W.tZ)(ew, {
                            title: e.hub.claim.youAreNotEligible,
                            image: (0, W.tZ)(B(), {
                                src: "/img/claim/not-eligible.svg",
                                alt: e.hub.claim.notEligible,
                                width: 365,
                                height: 200
                            }),
                            classes: {
                                container: "text-grey-900 bg-zeta-sand",
                                image: "w-[218px] h-[120px] md:w-[365px] md:h-[200px]",
                                cta: "text-grey-50 bg-grey-900 hover:bg-grey-700"
                            },
                            ctaVariant: ec.VS.NonEligible
                        }), (0, W.BX)("div", {
                            className: "col-span-12 md:col-span-7 flex flex-col overflow-hidden",
                            children: [(0, W.BX)(E.E.div, eq(eq({}, (0, C.zW)({
                                delay: 0,
                                y: 0,
                                x: 100
                            })), {}, {
                                className: "flex-grow p-6 md:p-10 py-10 md:pt-[calc(64px+80px)] text-grey-50 bg-green-700",
                                children: [(0, W.tZ)("h2", {
                                    className: "text-[inherit] text-2xl md:text-[52px] md:leading-[130%] md:tracking-[-0.02em] font-medium mb-6 md:mb-10",
                                    children: e.hub.claim.notEligibleForAirdrop
                                }), (0, W.tZ)("p", {
                                    className: "text-[inherit] text-sm md:text-xl mb-3.5 md:mb-5",
                                    children: e.hub.claim.dropIsAimedAtRewarding
                                }), (0, W.tZ)("p", {
                                    className: "text-[inherit] text-sm md:text-xl",
                                    children: (0, S.uz)(e.hub.claim.readMoreAboutTiers, "[X]", (0, W.tZ)(em.V, {
                                        displayUrl: H.Zt,
                                        href: H.G8,
                                        className: "font-semibold hover:text-grey-200 transition-all",
                                        children: e.hub.claim.here
                                    }, 0))
                                })]
                            })), (0, W.tZ)(eg, {})]
                        })]
                    })
                },
                e$ = function() {
                    var e = (0, o.Os)().isConnected,
                        t = (0, n.Vb)().shouldDisableHubClaimUi,
                        r = (0, c.v9)(b.selectClaimEligibleStatus),
                        i = (0, c.v9)(b.selectIsClaiming),
                        a = (0, c.v9)(b.selectHasSuccessfullyClaimed),
                        s = (0, c.v9)(b.selectClaimError),
                        d = !!r && "userCondition" in r,
                        m = d && r.userCondition === l.ClaimUserCondition.Eligible,
                        p = d && r.isExternallyClaimed;
                    return e ? s ? (0, W.tZ)(eM, {
                        children: (0, W.tZ)(en, {})
                    }) : a ? (0, W.BX)(eM, {
                        children: [(0, W.tZ)(e_, {}), (0, W.tZ)(eO, {})]
                    }) : p ? (0, W.BX)(eM, {
                        children: [(0, W.tZ)(eS, {}), (0, W.tZ)(eO, {})]
                    }) : i ? (0, W.tZ)(J, {}) : t && m && null != r && r.canClaim ? (0, W.BX)(eM, {
                        children: [(0, W.tZ)(eI, {}), (0, W.tZ)(eO, {})]
                    }) : m && null != r && r.canClaim ? (0, W.BX)(eM, {
                        children: [(0, W.tZ)(eW, {}), (0, W.tZ)(eO, {})]
                    }) : m && null != r && r.isLocked ? (0, W.BX)(eM, {
                        children: [(0, W.tZ)(eK, {}), (0, W.tZ)(eO, {})]
                    }) : (0, W.BX)(eM, {
                        children: [(0, W.tZ)(eQ, {}), (0, W.tZ)(eO, {})]
                    }) : (0, W.tZ)(eM, {
                        children: (0, W.tZ)(ez, {})
                    })
                },
                e0 = r(24250),
                e3 = {
                    hidden: {
                        opacity: 0,
                        pathLength: 0
                    },
                    visible: {
                        opacity: 1,
                        pathLength: 1,
                        transition: {
                            duration: 3,
                            ease: "easeInOut"
                        }
                    }
                },
                e1 = {
                    hidden: {
                        opacity: 0,
                        pathLength: 0
                    },
                    visible: {
                        opacity: 1,
                        pathLength: 1,
                        transition: {
                            duration: 2,
                            ease: "easeInOut"
                        }
                    }
                },
                e2 = (0, v.Z)(E.E.svg, {
                    target: "e1b24ztl0"
                })(""),
                e6 = (0, W.BX)(e2, {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 500 500",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, W.tZ)(E.E.path, {
                        variants: e3,
                        d: "M122 367.5C122 355.074 132.074 345 144.5 345H279.5C291.926 345 302 355.074 302 367.5C302 379.926 291.926 390 279.5 390H144.5C132.074 390 122 379.926 122 367.5Z",
                        fill: "#FA5628"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M147.333 366.503C147.333 367.975 148.527 369.169 150 369.169C151.302 369.169 152.386 368.236 152.62 367.003L162 367.003V366.003L152.62 366.003C152.386 364.769 151.302 363.836 150 363.836C148.527 363.836 147.333 365.03 147.333 366.503ZM166 366.003V367.003L170 367.003V366.003L166 366.003ZM174 366.003V367.003L178 367.003V366.003L174 366.003ZM182 366.003V367.003L186 367.003V366.003L182 366.003ZM190 366.003V367.003L194 367.003V366.003L190 366.003ZM198 366.003V367.003L202 367.003V366.003L198 366.003ZM206 366.003V367.003L210 367.003V366.003L206 366.003ZM214 366.003V367.003L218 367.003V366.003L214 366.003ZM222 366.003V367.003L226 367.003V366.003L222 366.003ZM230 366.003V367.003L234 367.003V366.003L230 366.003ZM238 366.003V367.003L242 367.003V366.003L238 366.003ZM246 366.003V367.003L250 367.003V366.003L246 366.003ZM254 366.003V367.003L258 367.003V366.003L254 366.003ZM262 366.003V367.003L271.38 367.003C271.614 368.236 272.698 369.169 274 369.169C275.472 369.169 276.666 367.975 276.666 366.503C276.666 365.03 275.472 363.836 274 363.836C272.698 363.836 271.614 364.769 271.38 366.003L262 366.003Z",
                        fill: "black"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        d: "M377 100H197V145H377V100Z",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M222.333 121.503C222.333 122.975 223.527 124.169 225 124.169C226.302 124.169 227.386 123.236 227.62 122.003L237 122.003V121.003L227.62 121.003C227.386 119.769 226.302 118.836 225 118.836C223.527 118.836 222.333 120.03 222.333 121.503ZM241 121.003V122.003L245 122.003V121.003L241 121.003ZM249 121.003V122.003L253 122.003V121.003L249 121.003ZM257 121.003V122.003L261 122.003V121.003L257 121.003ZM265 121.003V122.003L269 122.003V121.003L265 121.003ZM273 121.003V122.003L277 122.003V121.003L273 121.003ZM281 121.003V122.003L285 122.003V121.003L281 121.003ZM289 121.003V122.003L293 122.003V121.003L289 121.003ZM297 121.003V122.003L301 122.003V121.003L297 121.003ZM305 121.003V122.003L309 122.003V121.003L305 121.003ZM313 121.003V122.003L317 122.003V121.003L313 121.003ZM321 121.003V122.003L325 122.003V121.003L321 121.003ZM329 121.003V122.003L333 122.003V121.003L329 121.003ZM337 121.003V122.003L346.38 122.003C346.614 123.236 347.698 124.169 349 124.169C350.472 124.169 351.666 122.975 351.666 121.503C351.666 120.03 350.472 118.836 349 118.836C347.698 118.836 346.614 119.769 346.38 121.003L337 121.003Z",
                        fill: "#F7F3EC"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M141 358.938L340 113.938L358.629 129.069L159.629 374.069L141 358.938Z",
                        fill: "#EDE9ED11"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M152.318 345L141 358.934L159.629 374.066L183.238 345H152.318Z",
                        fill: "#DC380A"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        d: "M278.5 399.5V388.5L266 387L278.5 399.5Z",
                        fill: "#FA5628"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "150",
                        cy: "367",
                        r: "12",
                        fill: "#F7F3EC"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "274",
                        cy: "367",
                        r: "12",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M262 367.003C262 367.003 262 367.003 262 367.003C262 366.666 262.014 366.332 262.041 366.003L271.38 366.003C271.614 364.769 272.698 363.836 274 363.836C275.472 363.836 276.666 365.03 276.666 366.503C276.666 367.975 275.472 369.169 274 369.169C272.698 369.169 271.614 368.236 271.38 367.003L262 367.003Z",
                        fill: "#00BC8D"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M162 367.003C162 367.003 162 367.003 162 367.003C162 366.666 161.986 366.332 161.959 366.003L152.62 366.003C152.386 364.769 151.302 363.836 150 363.836C148.527 363.836 147.333 365.03 147.333 366.503C147.333 367.975 148.527 369.169 150 369.169C151.302 369.169 152.386 368.236 152.62 367.003L162 367.003Z",
                        fill: "#FA5628"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M345.686 145.003L358.629 129.069L340 113.938L314.767 145.003H345.686Z",
                        fill: "#007457"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        d: "M220.5 154.5V143.5L233 142L220.5 154.5Z",
                        fill: "#005741"
                    }), (0, W.tZ)("rect", {
                        x: "332",
                        y: "163",
                        width: "45",
                        height: "40",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        d: "M321.5 184L335.5 178.5V188L321.5 184Z",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        d: "M389 400C389 390.717 385.313 381.815 378.749 375.251C372.185 368.687 363.283 365 354 365C344.717 365 335.815 368.687 329.251 375.251C322.687 381.815 319 390.717 319 400L354 400H389Z",
                        fill: "#FA5628"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "354.5",
                        cy: "332.5",
                        r: "22.5",
                        fill: "#FA5628"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        d: "M192 190C192 180.717 188.313 171.815 181.749 165.251C175.185 158.687 166.283 155 157 155C147.717 155 138.815 158.687 132.251 165.251C125.687 171.815 122 180.717 122 190L157 190H192Z",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "157.5",
                        cy: "122.5",
                        r: "22.5",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "225",
                        cy: "122",
                        r: "12",
                        fill: "#00BC8D"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "349",
                        cy: "122",
                        r: "12",
                        fill: "#FA5628"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M337 122.003C337 122.003 337 122.003 337 122.003C337 121.666 337.014 121.332 337.041 121.003L346.38 121.003C346.614 119.769 347.698 118.836 349 118.836C350.472 118.836 351.666 120.03 351.666 121.503C351.666 122.975 350.472 124.169 349 124.169C347.698 124.169 346.614 123.236 346.38 122.003L337 122.003Z",
                        fill: "black"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M237 122.003C237 122.003 237 122.003 237 122.003C237 121.666 236.986 121.332 236.959 121.003L227.62 121.003C227.386 119.769 226.302 118.836 225 118.836C223.527 118.836 222.333 120.03 222.333 121.503C222.333 122.975 223.527 124.169 225 124.169C226.302 124.169 227.386 123.236 227.62 122.003L237 122.003Z",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        d: "M349 121.5L150 366.5",
                        stroke: "#00BC8D"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M330.557 145.003L349.389 121.818L348.612 121.188L329.269 145.003H330.557Z",
                        fill: "black"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M166.82 345L149.612 366.185L150.389 366.815L168.108 345H166.82Z",
                        fill: "black"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M341.579 131.433C341.317 131.227 341.063 131.009 340.819 130.782L348.612 121.188L349.389 121.818L341.579 131.433Z",
                        fill: "black"
                    }), (0, W.tZ)(E.E.path, {
                        variants: e3,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M156.916 357.195L149.612 366.188L150.389 366.818L157.709 357.806C157.453 357.592 157.189 357.388 156.916 357.195Z",
                        fill: "#FA5628"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "247.53",
                        cy: "246.173",
                        r: "3",
                        transform: "rotate(39 247.53 246.173)",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "270.187",
                        cy: "218.196",
                        r: "3",
                        transform: "rotate(39 270.187 218.196)",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "292.842",
                        cy: "190.219",
                        r: "3",
                        transform: "rotate(39 292.842 190.219)",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "224.875",
                        cy: "274.149",
                        r: "3",
                        transform: "rotate(39 224.875 274.149)",
                        fill: "#005741"
                    }), (0, W.tZ)(E.E.circle, {
                        variants: e1,
                        cx: "202.22",
                        cy: "302.126",
                        r: "3",
                        transform: "rotate(39 202.22 302.126)",
                        fill: "#005741"
                    })]
                });

            function e5(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function e7(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e5(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e5(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }(0, W.BX)(e2, {
                width: "100%",
                height: "100%",
                viewBox: "0 0 500 500",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, W.tZ)(E.E.path, {
                    d: "M122 367.5C122 355.074 132.074 345 144.5 345H279.5C291.926 345 302 355.074 302 367.5C302 379.926 291.926 390 279.5 390H144.5C132.074 390 122 379.926 122 367.5Z",
                    fill: "#FA5628"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M147.333 366.503C147.333 367.975 148.527 369.169 150 369.169C151.302 369.169 152.386 368.236 152.62 367.003L162 367.003V366.003L152.62 366.003C152.386 364.769 151.302 363.836 150 363.836C148.527 363.836 147.333 365.03 147.333 366.503ZM166 366.003V367.003L170 367.003V366.003L166 366.003ZM174 366.003V367.003L178 367.003V366.003L174 366.003ZM182 366.003V367.003L186 367.003V366.003L182 366.003ZM190 366.003V367.003L194 367.003V366.003L190 366.003ZM198 366.003V367.003L202 367.003V366.003L198 366.003ZM206 366.003V367.003L210 367.003V366.003L206 366.003ZM214 366.003V367.003L218 367.003V366.003L214 366.003ZM222 366.003V367.003L226 367.003V366.003L222 366.003ZM230 366.003V367.003L234 367.003V366.003L230 366.003ZM238 366.003V367.003L242 367.003V366.003L238 366.003ZM246 366.003V367.003L250 367.003V366.003L246 366.003ZM254 366.003V367.003L258 367.003V366.003L254 366.003ZM262 366.003V367.003L271.38 367.003C271.614 368.236 272.698 369.169 274 369.169C275.472 369.169 276.666 367.975 276.666 366.503C276.666 365.03 275.472 363.836 274 363.836C272.698 363.836 271.614 364.769 271.38 366.003L262 366.003Z",
                    fill: "black"
                }), (0, W.tZ)(E.E.path, {
                    d: "M377 100H197V145H377V100Z",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M222.333 121.503C222.333 122.975 223.527 124.169 225 124.169C226.302 124.169 227.386 123.236 227.62 122.003L237 122.003V121.003L227.62 121.003C227.386 119.769 226.302 118.836 225 118.836C223.527 118.836 222.333 120.03 222.333 121.503ZM241 121.003V122.003L245 122.003V121.003L241 121.003ZM249 121.003V122.003L253 122.003V121.003L249 121.003ZM257 121.003V122.003L261 122.003V121.003L257 121.003ZM265 121.003V122.003L269 122.003V121.003L265 121.003ZM273 121.003V122.003L277 122.003V121.003L273 121.003ZM281 121.003V122.003L285 122.003V121.003L281 121.003ZM289 121.003V122.003L293 122.003V121.003L289 121.003ZM297 121.003V122.003L301 122.003V121.003L297 121.003ZM305 121.003V122.003L309 122.003V121.003L305 121.003ZM313 121.003V122.003L317 122.003V121.003L313 121.003ZM321 121.003V122.003L325 122.003V121.003L321 121.003ZM329 121.003V122.003L333 122.003V121.003L329 121.003ZM337 121.003V122.003L346.38 122.003C346.614 123.236 347.698 124.169 349 124.169C350.472 124.169 351.666 122.975 351.666 121.503C351.666 120.03 350.472 118.836 349 118.836C347.698 118.836 346.614 119.769 346.38 121.003L337 121.003Z",
                    fill: "#F7F3EC"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M141 358.938L340 113.938L358.629 129.069L159.629 374.069L141 358.938Z",
                    fill: "#EDE9ED11"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M152.318 345L141 358.934L159.629 374.066L183.238 345H152.318Z",
                    fill: "#DC380A"
                }), (0, W.tZ)(E.E.path, {
                    d: "M278.5 399.5V388.5L266 387L278.5 399.5Z",
                    fill: "#FA5628"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "150",
                    cy: "367",
                    r: "12",
                    fill: "#F7F3EC"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "274",
                    cy: "367",
                    r: "12",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M262 367.003C262 367.003 262 367.003 262 367.003C262 366.666 262.014 366.332 262.041 366.003L271.38 366.003C271.614 364.769 272.698 363.836 274 363.836C275.472 363.836 276.666 365.03 276.666 366.503C276.666 367.975 275.472 369.169 274 369.169C272.698 369.169 271.614 368.236 271.38 367.003L262 367.003Z",
                    fill: "#00BC8D"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M162 367.003C162 367.003 162 367.003 162 367.003C162 366.666 161.986 366.332 161.959 366.003L152.62 366.003C152.386 364.769 151.302 363.836 150 363.836C148.527 363.836 147.333 365.03 147.333 366.503C147.333 367.975 148.527 369.169 150 369.169C151.302 369.169 152.386 368.236 152.62 367.003L162 367.003Z",
                    fill: "#FA5628"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M345.686 145.003L358.629 129.069L340 113.938L314.767 145.003H345.686Z",
                    fill: "#007457"
                }), (0, W.tZ)(E.E.path, {
                    d: "M220.5 154.5V143.5L233 142L220.5 154.5Z",
                    fill: "#005741"
                }), (0, W.tZ)("rect", {
                    x: "332",
                    y: "163",
                    width: "45",
                    height: "40",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.path, {
                    d: "M321.5 184L335.5 178.5V188L321.5 184Z",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.path, {
                    d: "M389 400C389 390.717 385.313 381.815 378.749 375.251C372.185 368.687 363.283 365 354 365C344.717 365 335.815 368.687 329.251 375.251C322.687 381.815 319 390.717 319 400L354 400H389Z",
                    fill: "#FA5628"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "354.5",
                    cy: "332.5",
                    r: "22.5",
                    fill: "#FA5628"
                }), (0, W.tZ)(E.E.path, {
                    d: "M192 190C192 180.717 188.313 171.815 181.749 165.251C175.185 158.687 166.283 155 157 155C147.717 155 138.815 158.687 132.251 165.251C125.687 171.815 122 180.717 122 190L157 190H192Z",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "157.5",
                    cy: "122.5",
                    r: "22.5",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "225",
                    cy: "122",
                    r: "12",
                    fill: "#00BC8D"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "349",
                    cy: "122",
                    r: "12",
                    fill: "#FA5628"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M337 122.003C337 122.003 337 122.003 337 122.003C337 121.666 337.014 121.332 337.041 121.003L346.38 121.003C346.614 119.769 347.698 118.836 349 118.836C350.472 118.836 351.666 120.03 351.666 121.503C351.666 122.975 350.472 124.169 349 124.169C347.698 124.169 346.614 123.236 346.38 122.003L337 122.003Z",
                    fill: "black"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M237 122.003C237 122.003 237 122.003 237 122.003C237 121.666 236.986 121.332 236.959 121.003L227.62 121.003C227.386 119.769 226.302 118.836 225 118.836C223.527 118.836 222.333 120.03 222.333 121.503C222.333 122.975 223.527 124.169 225 124.169C226.302 124.169 227.386 123.236 227.62 122.003L237 122.003Z",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.path, {
                    d: "M349 121.5L150 366.5",
                    stroke: "#00BC8D"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M330.557 145.003L349.389 121.818L348.612 121.188L329.269 145.003H330.557Z",
                    fill: "black"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M166.82 345L149.612 366.185L150.389 366.815L168.108 345H166.82Z",
                    fill: "black"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M341.579 131.433C341.317 131.227 341.063 131.009 340.819 130.782L348.612 121.188L349.389 121.818L341.579 131.433Z",
                    fill: "black"
                }), (0, W.tZ)(E.E.path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M156.916 357.195L149.612 366.188L150.389 366.818L157.709 357.806C157.453 357.592 157.189 357.388 156.916 357.195Z",
                    fill: "#FA5628"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "247.53",
                    cy: "246.173",
                    r: "3",
                    transform: "rotate(39 247.53 246.173)",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "270.187",
                    cy: "218.196",
                    r: "3",
                    transform: "rotate(39 270.187 218.196)",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "292.842",
                    cy: "190.219",
                    r: "3",
                    transform: "rotate(39 292.842 190.219)",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "224.875",
                    cy: "274.149",
                    r: "3",
                    transform: "rotate(39 224.875 274.149)",
                    fill: "#005741"
                }), (0, W.tZ)(E.E.circle, {
                    cx: "202.22",
                    cy: "302.126",
                    r: "3",
                    transform: "rotate(39 202.22 302.126)",
                    fill: "#005741"
                })]
            });
            var e9 = function(e) {
                    var t = e.isLoading,
                        r = (0, L.AA)().copy,
                        i = (0, a.useState)(0),
                        l = i[0],
                        n = i[1];
                    (0, e0.Z)(function() {
                        n(function(e) {
                            return e + 1
                        })
                    }, H.El);
                    var c = H.E6[l % H.E6.length];
                    return (0, W.tZ)(j.M, {
                        children: t && (0, W.BX)(E.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: H.Rs / 1e3
                            },
                            className: "absolute h-screen w-screen overflow-hidden pointer-events-none z-[9999] bg-black",
                            children: [(0, W.tZ)("div", {
                                className: "bg-green-900/5 h-screen w-screen absolute"
                            }), (0, W.tZ)("div", {
                                className: "h-screen w-screen grayscale scale-[110%] -translate-y-[2%] opacity-20 contrast-125",
                                children: (0, W.tZ)("div", {
                                    ref: function(e) {
                                        e && A().init(e, {
                                            max: 3,
                                            speed: 400,
                                            glare: !0,
                                            "max-glare": .15,
                                            gyroscope: !0,
                                            "full-page-listening": !0
                                        })
                                    },
                                    className: "rounded-md cursor-pointer z-10 h-screen w-screen",
                                    children: (0, W.tZ)(E.E.div, e7(e7({}, (0, C.zW)({
                                        delay: 0,
                                        y: 0,
                                        x: 0,
                                        scale: .95
                                    })), {}, {
                                        className: "h-screen w-screen",
                                        children: e6
                                    }))
                                })
                            }), (0, W.BX)(E.E.div, e7(e7({}, (0, C.zW)({
                                delay: .4,
                                y: 0,
                                x: 0,
                                scale: .95
                            })), {}, {
                                className: "text-white absolute bottom-1/2 left-[45%] -translate-x-1/2 text-sm md:text-2xl flex",
                                children: [(0, W.tZ)("div", {
                                    className: "-ml-[80%] md:-ml-[65%] lg:-ml-[60%] xl:-ml-[50%] -mt-1 md:mt-0 text-grey-300",
                                    children: r.hub.preClaim.loadingYour
                                }), (0, W.tZ)("div", {
                                    children: (0, W.tZ)(j.M, {
                                        children: (0, W.tZ)(E.E.div, {
                                            layout: !0,
                                            initial: {
                                                opacity: 0,
                                                y: -25
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 25
                                            },
                                            className: "text-grey-200 absolute whitespace-nowrap ml-1 md:ml-2 top-[-4px] font-semibold text-md md:text-3xl capitalize",
                                            children: r.hub.preClaim.loadingMessages[c]
                                        }, l)
                                    })
                                })]
                            }))]
                        })
                    })
                },
                e4 = function() {
                    var e = (0, c.v9)(b.selectIsLoadingClaimStatus),
                        t = (0, c.v9)(b.selectIsClaiming);
                    return (0, L.W7)({
                        isLoading: e,
                        minLoadingDurationInMs: H.VJ
                    }) && !t
                },
                e8 = function() {
                    var e = (0, o.Os)(),
                        t = e.isConnected,
                        r = e.address,
                        l = (0, T.TL)();
                    (0, R.EO)({
                        address: r
                    }, {
                        skip: !t || !r,
                        refetchOnMountOrArgChange: !0
                    });
                    var n = e4(),
                        c = (0, a.useState)(!0),
                        s = c[0],
                        d = c[1];
                    return (0, a.useEffect)(function() {
                        s && (l((0, i.C8Y)()), d(!1))
                    }, [l, s]), (0, W.BX)("div", {
                        className: "min-h-screen",
                        children: [s && (0, W.tZ)("div", {
                            className: "absolute h-screen w-screen overflow-hidden pointer-events-none z-[99999] bg-black"
                        }), (0, W.tZ)(e9, {
                            isLoading: n
                        }), !n && (0, W.tZ)(e$, {})]
                    })
                }
        },
        43215: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/claim", function() {
                return r(78001)
            }])
        }
    },
    function(e) {
        e.O(0, [2737, 9774, 2888, 179], function() {
            return e(e.s = 43215)
        }), _N_E = e.O()
    }
]);