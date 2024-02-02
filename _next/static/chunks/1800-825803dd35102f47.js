"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1800], {
        39104: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return i
                }
            });
            var r = n(62431),
                a = n(85243),
                o = n(38839),
                i = function(e) {
                    var t = e.keyName,
                        n = e.className,
                        i = e.children;
                    return (0, o.tZ)(r.M, {
                        exitBeforeEnter: !0,
                        children: (0, o.tZ)(a.E.div, {
                            initial: {
                                y: 10,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: -10,
                                opacity: 0
                            },
                            transition: {
                                duration: .2
                            },
                            className: n,
                            children: i
                        }, t)
                    })
                }
        },
        43854: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return i
                }
            });
            var r = n(60045),
                a = n(52298),
                o = n(38839),
                i = function(e) {
                    var t = e.children,
                        n = e.className;
                    return (0, o.tZ)(a.Zb, {
                        className: (0, r.default)("p-4 sm:p-6 overflow-y-auto flex md:min-w-[366px] min-h-[320px] mb-4 sm:mb-8 md:my-8", n),
                        children: t
                    })
                }
        },
        91184: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return y
                }
            });
            var r = n(31737),
                a = n(64691),
                o = n(17241),
                i = n(42949),
                s = n(95453),
                l = n(88932),
                d = n(13905),
                c = n(45048),
                u = n(19601),
                v = n.n(u),
                m = n(78164),
                p = n(59299),
                f = n(6280),
                b = n(64828),
                h = n(38839),
                k = function(e) {
                    var t = e.amount;
                    return e.isLoading ? (0, h.tZ)(a.Z, {
                        variant: "text",
                        width: 60,
                        height: 20
                    }) : (0, h.tZ)(b.Z, {
                        title: t,
                        hide: !Number(t),
                        children: (0, h.tZ)(o.Z, {
                            variant: "body1",
                            className: "text-grey-400 dark:text-grey-300",
                            children: (0, h.tZ)(m.R, {
                                amount: t
                            })
                        })
                    })
                },
                y = function(e) {
                    var t = e.poolEntity,
                        n = e.href,
                        u = (0, i.AA)().copy,
                        b = t.tokenA,
                        y = t.tokenB,
                        g = t.poolPairReserves,
                        x = t.isLoadingPoolPairReserves,
                        P = t.stakedLpTokens,
                        w = t.isLoadingStakedLpTokens,
                        Z = t.availableRewards,
                        N = t.isLoadingAvailableRewards,
                        L = t.network,
                        R = !(null != g && g.lpTokenBalance) || !Number(null == g ? void 0 : g.lpTokenBalance),
                        T = !P || !Number(P),
                        A = !Z || !Number(Z);
                    if (R && T && A && (x || w || N)) return (0, h.tZ)(a.Z, {
                        variant: "text",
                        width: "100%",
                        height: 70,
                        className: "-mb-3"
                    });
                    if (R && !x && T && !w && A && !N) return null;
                    var B = (null == g ? void 0 : g.userPoolSharePercentage) || 0,
                        E = (0, c.formatUnits)((null == g ? void 0 : g.tokenADepositedByUserInPool) || 0, b.decimals),
                        I = (0, c.formatUnits)((null == g ? void 0 : g.tokenBDepositedByUserInPool) || 0, y.decimals),
                        C = (0, c.formatEther)(d.O$.from((null == g ? void 0 : g.lpTokenBalance) || 0).add(P || 0)),
                        X = (0, c.formatEther)(P || 0),
                        S = (0, c.formatEther)(Z || 0);
                    return (0, h.tZ)(l.gM, {
                        href: n,
                        onClick: function() {
                            return (0, s.L9)(s._E.HubPoolMyPositionsPoolCardClicked, (0, r.Z)({}, s.gp.PoolId, t.id))
                        },
                        className: "block mb-3 last-of-type:mb-0",
                        children: (0, h.BX)("div", {
                            className: "border border-grey-200 dark:border-grey-600 rounded py-4 px-6",
                            children: [(0, h.BX)(o.Z, {
                                variant: "body1",
                                className: "flex items-center gap-1 flex-wrap",
                                children: [(0, h.tZ)(v(), {
                                    src: p.tX.get(b.symbol),
                                    width: 20,
                                    height: 20,
                                    alt: b.symbol,
                                    className: "flex-shrink-0"
                                }), b.symbol, (0, h.tZ)("span", {
                                    children: "/"
                                }), (0, h.tZ)(v(), {
                                    src: p.tX.get(y.symbol),
                                    width: 20,
                                    height: 20,
                                    alt: y.symbol,
                                    className: "flex-shrink-0"
                                }), y.symbol, (0, h.BX)("span", {
                                    className: "text-grey-400 dark:text-grey-300",
                                    children: ["(", f.lL.get(L), ")"]
                                })]
                            }), (0, h.BX)("ul", {
                                className: "flex flex-col gap-3 mt-5",
                                children: [(0, h.BX)("li", {
                                    className: "flex justify-between",
                                    children: [(0, h.tZ)(o.Z, {
                                        variant: "body1",
                                        className: "text-grey-400 dark:text-grey-300",
                                        children: u.hub.pools.myPositions.yourPoolShare
                                    }), !Number(B) && x ? (0, h.tZ)(a.Z, {
                                        variant: "text",
                                        width: 60,
                                        height: 20
                                    }) : (0, h.BX)(o.Z, {
                                        variant: "body1",
                                        className: "text-grey-400 dark:text-grey-300",
                                        children: [(0, h.tZ)(m.R, {
                                            amount: B,
                                            withEstimationMark: !0
                                        }), "%"]
                                    })]
                                }), (0, h.BX)("li", {
                                    className: "flex justify-between",
                                    children: [(0, h.tZ)(o.Z, {
                                        variant: "body1",
                                        className: "text-grey-400 dark:text-grey-300",
                                        children: u.hub.pools.myPositions.tokenPooled.replace("[X]", b.symbol)
                                    }), (0, h.tZ)(k, {
                                        amount: E,
                                        isLoading: !Number(E) && x
                                    })]
                                }), (0, h.BX)("li", {
                                    className: "flex justify-between",
                                    children: [(0, h.tZ)(o.Z, {
                                        variant: "body1",
                                        className: "text-grey-400 dark:text-grey-300",
                                        children: u.hub.pools.myPositions.tokenPooled.replace("[X]", y.symbol)
                                    }), (0, h.tZ)(k, {
                                        amount: I,
                                        isLoading: !Number(I) && x
                                    })]
                                }), (0, h.BX)("li", {
                                    className: "flex justify-between",
                                    children: [(0, h.tZ)(o.Z, {
                                        variant: "body1",
                                        className: "text-grey-400 dark:text-grey-300",
                                        children: u.hub.pools.myPositions.totalPoolTokens
                                    }), (0, h.tZ)(k, {
                                        amount: C,
                                        isLoading: !Number(C) && (x || w)
                                    })]
                                }), (0, h.BX)("li", {
                                    className: "flex justify-between",
                                    children: [(0, h.tZ)(o.Z, {
                                        variant: "body1",
                                        className: "text-grey-400 dark:text-grey-300",
                                        children: u.hub.pools.myPositions.stakedPoolTokens
                                    }), (0, h.tZ)(k, {
                                        amount: X,
                                        isLoading: T && w
                                    })]
                                }), (0, h.BX)("li", {
                                    className: "flex justify-between",
                                    children: [(0, h.tZ)(o.Z, {
                                        variant: "body1",
                                        className: "text-grey-400 dark:text-grey-300",
                                        children: u.hub.pools.myPositions.stakingZetaRewards
                                    }), (0, h.tZ)(k, {
                                        amount: S,
                                        isLoading: A && N
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        41800: function(e, t, n) {
            n.d(t, {
                aM: function() {
                    return A
                },
                YS: function() {
                    return Z
                },
                JG: function() {
                    return B
                }
            });
            var r, a = n(17241),
                o = n(25294),
                i = n(67543),
                s = n(42949),
                l = n(95453),
                d = n(36397),
                c = n(52298),
                u = n(55634),
                v = n(58549),
                m = n(39104),
                p = n(78756),
                f = n(72975),
                b = n.n(f),
                h = n(32735),
                k = n(56181),
                y = n(96652),
                g = n(75990),
                x = n(46220),
                P = n(51545),
                w = n(42075),
                Z = (r = (0, p.Z)(b().mark(function e(t) {
                    var n, r, a, o, i, s, l, d, c, u, v, m;
                    return b().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.poolEntity, r = t.isConnected, a = t.address, o = t.dispatch, !(!n || !r || !a || !n.contractAddresses.poolPair || n.dex !== g.DEXVersion.UniswapV2)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 3:
                                if (i = n.id, s = (0, w.V)(n.network), e.prev = 5, o(P.Yi.setIsLoadingPoolPairReserves({
                                        poolId: i,
                                        isLoadingPoolPairReserves: !0
                                    })), l = (0, x.Yv)({
                                        factoryAddress: n.contractAddresses.factory,
                                        signerOrProvider: s,
                                        dex: n.dex
                                    }), d = (0, x.A_)({
                                        pairAddress: n.contractAddresses.poolPair,
                                        signerOrProvider: s
                                    }), !(!l || !d)) {
                                    e.next = 11;
                                    break
                                }
                                throw Error("Could not get Contracts");
                            case 11:
                                return e.next = 13, (0, x.gB)({
                                    address1: n.tokenA.address,
                                    factoryContract: l,
                                    pairContract: d,
                                    accountAddress: a
                                });
                            case 13:
                                c = e.sent, o(P.Yi.setPoolPairReserves({
                                    poolId: i,
                                    poolPairReserves: c
                                })), e.next = 20;
                                break;
                            case 17:
                                e.prev = 17, e.t0 = e.catch(5), console.error(e.t0);
                            case 20:
                                if (o(P.Yi.setIsLoadingPoolPairReserves({
                                        poolId: i,
                                        isLoadingPoolPairReserves: !1
                                    })), n.contractAddresses.rewardDistributor) {
                                    e.next = 23;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 23:
                                return u = (0, x.xN)({
                                    rewardDistributorAddress: n.contractAddresses.rewardDistributor,
                                    signerOrProvider: s
                                }), e.prev = 24, o(P.Yi.setIsLoadingStakedLpTokens({
                                    poolId: i,
                                    isLoadingStakedLpTokens: !0
                                })), e.next = 28, (0, x.TB)({
                                    rewardDistributorContract: u,
                                    userAddress: a
                                });
                            case 28:
                                v = e.sent, o(P.Yi.setStakedLpTokens({
                                    poolId: i,
                                    stakedLpTokens: v
                                })), e.next = 35;
                                break;
                            case 32:
                                e.prev = 32, e.t1 = e.catch(24), console.error(e.t1);
                            case 35:
                                return o(P.Yi.setIsLoadingStakedLpTokens({
                                    poolId: i,
                                    isLoadingStakedLpTokens: !1
                                })), e.prev = 36, o(P.Yi.setIsLoadingAvailableRewards({
                                    poolId: i,
                                    isLoadingAvailableRewards: !0
                                })), e.next = 40, (0, x.wu)({
                                    rewardDistributorContract: u,
                                    userAddress: a
                                });
                            case 40:
                                m = e.sent, o(P.Yi.setAvailableRewards({
                                    poolId: i,
                                    availableRewards: m
                                })), e.next = 47;
                                break;
                            case 44:
                                e.prev = 44, e.t2 = e.catch(36), console.error(e.t2);
                            case 47:
                                return o(P.Yi.setIsLoadingAvailableRewards({
                                    poolId: i,
                                    isLoadingAvailableRewards: !1
                                })), e.abrupt("return", null);
                            case 49:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [5, 17],
                        [24, 32],
                        [36, 44]
                    ])
                })), function(e) {
                    return r.apply(this, arguments)
                }),
                N = function() {
                    var e = (0, d.I0)(),
                        t = (0, d.v9)(k.UU.selectAllPools),
                        n = (0, u.Os)(),
                        r = n.address,
                        a = n.isConnected,
                        o = (0, h.useCallback)((0, p.Z)(b().mark(function n() {
                            return b().wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.abrupt("return", Promise.allSettled(Object.values(t).map(function() {
                                            var t = (0, p.Z)(b().mark(function t(n) {
                                                return b().wrap(function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.abrupt("return", n ? Z({
                                                                poolEntity: n,
                                                                isConnected: a,
                                                                address: r,
                                                                dispatch: e
                                                            }) : null);
                                                        case 1:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }, t)
                                            }));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }())));
                                    case 1:
                                    case "end":
                                        return n.stop()
                                }
                            }, n)
                        })), [r, e, a]);
                    (0, h.useEffect)(function() {
                        var e = setTimeout(o, y.qN);
                        return function() {
                            return clearTimeout(e)
                        }
                    }, [o]), (0, h.useEffect)(function() {
                        var e = setInterval(o, y.pv);
                        return function() {
                            return clearInterval(e)
                        }
                    }, [o])
                },
                L = n(43854),
                R = n(91184),
                T = n(38839),
                A = function() {
                    var e = (0, s.AA)().copy,
                        t = (0, u.Os)().isConnected;
                    N();
                    var n = (0, d.v9)(v.UU.selectAllPools);
                    if (!t) return (0, T.BX)(L.b, {
                        children: [(0, T.tZ)(a.Z, {
                            variant: "headline2",
                            className: "mb-4 sm:mb-6",
                            children: e.hub.pools.myPositions.title
                        }), (0, T.tZ)("div", {
                            className: "flex-grow flex flex-col justify-between min-h-[300px]",
                            children: (0, T.tZ)(c.Vw, {
                                caption: e.hub.pools.myPositions.connectToViewPositions,
                                onClick: function() {
                                    return (0, l.L9)(l._E.HubPoolMyPositionsConnectWalletClicked)
                                }
                            })
                        })]
                    });
                    var r = Object.values(n).sort(function(e, t) {
                            var n, r, a, o, i = !(null != e && null !== (n = e.poolPairReserves) && void 0 !== n && n.lpTokenBalance) || !Number(null == e || null === (r = e.poolPairReserves) || void 0 === r ? void 0 : r.lpTokenBalance),
                                s = !(null != e && e.stakedLpTokens) || !Number(null == e ? void 0 : e.stakedLpTokens),
                                l = !(null != e && e.availableRewards) || !Number(null == e ? void 0 : e.availableRewards),
                                d = !(null != t && null !== (a = t.poolPairReserves) && void 0 !== a && a.lpTokenBalance) || !Number(null == t || null === (o = t.poolPairReserves) || void 0 === o ? void 0 : o.lpTokenBalance),
                                c = !(null != t && t.stakedLpTokens) || !Number(null == t ? void 0 : t.stakedLpTokens),
                                u = !(null != t && t.availableRewards) || !Number(null == t ? void 0 : t.availableRewards),
                                v = i && s && l && ((null == e ? void 0 : e.isLoadingPoolPairReserves) || (null == e ? void 0 : e.isLoadingStakedLpTokens) || (null == e ? void 0 : e.isLoadingAvailableRewards)),
                                m = d && c && u && ((null == t ? void 0 : t.isLoadingPoolPairReserves) || (null == t ? void 0 : t.isLoadingStakedLpTokens) || (null == t ? void 0 : t.isLoadingAvailableRewards));
                            return v && !m ? 1 : m && !v ? -1 : 0
                        }),
                        p = r.every(function(e) {
                            var t, n;
                            return !(null != e && e.isLoadingPoolPairReserves) && !(null != e && e.isLoadingStakedLpTokens) && !(null != e && e.isLoadingAvailableRewards) && (!(null != e && null !== (t = e.poolPairReserves) && void 0 !== t && t.lpTokenBalance) || !Number(null == e || null === (n = e.poolPairReserves) || void 0 === n ? void 0 : n.lpTokenBalance)) && (!(null != e && e.stakedLpTokens) || !Number(null == e ? void 0 : e.stakedLpTokens)) && (!(null != e && e.availableRewards) || !Number(null == e ? void 0 : e.availableRewards))
                        });
                    return (0, T.BX)(L.b, {
                        children: [(0, T.tZ)(a.Z, {
                            variant: "headline2",
                            className: "mb-4 sm:mb-6",
                            children: e.hub.pools.myPositions.title
                        }), (0, T.tZ)(m.i, {
                            keyName: "zetachain-pools-my-positions",
                            className: "flex-grow",
                            children: p ? (0, T.BX)("div", {
                                className: "h-full flex-grow flex flex-col items-center justify-center gap-1",
                                children: [(0, T.tZ)(o.C7Q, {}), (0, T.tZ)(a.Z, {
                                    variant: "body1",
                                    className: "text-grey-500 dark:text-grey-300 mt-3 text-center",
                                    children: e.hub.pools.myPositions.noPositions
                                }), (0, T.tZ)(a.Z, {
                                    variant: "caption",
                                    className: "text-grey-400 text-center",
                                    children: e.hub.pools.myPositions.youDontHavePositions
                                })]
                            }) : r.map(function(e) {
                                return (0, T.tZ)(R.U, {
                                    poolEntity: e,
                                    href: "".concat(i.XM.Pools, "/").concat(e.id)
                                }, e.id)
                            })
                        })]
                    })
                },
                B = function(e) {
                    var t = e.poolEntity,
                        n = (0, d.I0)(),
                        r = (0, u.Os)(),
                        a = r.isConnected,
                        o = r.address;
                    (0, h.useEffect)(function() {
                        var e = setTimeout(function() {
                            return Z({
                                poolEntity: t,
                                isConnected: a,
                                address: o,
                                dispatch: n
                            })
                        }, y.qN);
                        return function() {
                            return clearTimeout(e)
                        }
                    }, [o, n, a]), (0, h.useEffect)(function() {
                        var e = setInterval(function() {
                            return Z({
                                poolEntity: t,
                                isConnected: a,
                                address: o,
                                dispatch: n
                            })
                        }, y.pv);
                        return function() {
                            return clearInterval(e)
                        }
                    }, [o, n, a])
                }
        },
        96652: function(e, t, n) {
            n.d(t, {
                pv: function() {
                    return o
                },
                qN: function() {
                    return a
                },
                uV: function() {
                    return i
                }
            });
            var r, a = 100,
                o = 3e4,
                i = ((r = {}).Idle = "Idle", r.Loading = "Loading", r.SuccessTokenA = "SuccessTokenA", r)
        },
        78164: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return s
                }
            });
            var r = n(25294),
                a = n(91064),
                o = n(38839),
                i = function(e) {
                    var t = e.amount,
                        n = e.withEstimationMark;
                    return (0, o.BX)(o.HY, {
                        children: [n || (0, a.Fu)(String(t)) ? "~" : "", (0, a.dN)(t)]
                    })
                },
                s = function(e) {
                    var t = e.amount,
                        n = e.withEstimationMark;
                    return e.withTooltip ? (0, o.tZ)(r.ZU, {
                        title: t,
                        hide: !Number(t),
                        children: (0, o.tZ)("span", {
                            children: (0, o.tZ)(i, {
                                amount: t,
                                withEstimationMark: n
                            })
                        })
                    }) : (0, o.tZ)(i, {
                        amount: t,
                        withEstimationMark: n
                    })
                }
        }
    }
]);