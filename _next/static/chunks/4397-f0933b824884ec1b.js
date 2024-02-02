"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4397], {
        46932: function(e, n, t) {
            t.d(n, {
                O: function() {
                    return d
                }
            });
            var i = t(31737),
                r = t(79540),
                a = t(36397),
                o = t(42685),
                s = t(51551),
                c = t(97006);

            function l(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), t.push.apply(t, i)
                }
                return t
            }

            function u(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? l(Object(t), !0).forEach(function(n) {
                        (0, i.Z)(e, n, t[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return e
            }
            var d = function() {
                var e = (0, o.O)().address,
                    n = (0, a.v9)(r.LQ.selectXDEFIState).bitcoinAccount,
                    t = (0, c.S)(u(u({
                        coins: s.Dv
                    }, e ? {
                        evmAddress: e
                    } : {}), n ? {
                        bitcoinAddress: n
                    } : {}), {
                        skip: !e && !n,
                        refetchOnMountOrArgChange: !0
                    });
                return {
                    data: t.data,
                    isLoading: t.isLoading,
                    error: t.error
                }
            }
        },
        37457: function(e, n, t) {
            t.d(n, {
                O: function() {
                    return r.O
                }
            }), t(25294), t(42949), t(95453), t(32735), t(36397), t(52298), t(55634), t(56778), t(66551), t(67543);
            var i = t(75990);
            t(67767), t(19601), t(18124), t(19081), t(10461), t(59299), t(6280), t(85793), t(97006), t(89218), t(17398), t(9633), t(53315), i.TimeFrame["1D"], i.TimeFrame["1W"], i.TimeFrame["1M"], t(46146), t(18055), t(98650), t(10829), t(91133), t(45279), t(2848), t(51551), t(41853);
            var r = t(46932)
        },
        22209: function(e, n, t) {
            t.d(n, {
                f: function() {
                    return o
                }
            });
            var i = t(42949),
                r = t(7130),
                a = t(38839),
                o = function() {
                    var e = (0, i.AA)().copy;
                    return (0, a.tZ)("div", {
                        className: "flex px-8 gap-8 my-8 rounded-lg overflow-hidden",
                        children: (0, a.tZ)("div", {
                            className: "w-full h-[calc(100vh-200px)] min-h-[400px] dark:bg-grey-700 bg-white border border-grey-200 p-6 rounded-lg flex items-center justify-center",
                            children: (0, a.BX)("div", {
                                className: "flex flex-col justify-center items-center gap-4",
                                children: [(0, a.tZ)(r.$, {}), (0, a.tZ)("div", {
                                    className: "dark:text-grey-400 text-grey-700 text-sm",
                                    children: e.shared.pageTemporarilyUnavailable
                                })]
                            })
                        })
                    })
                }
        },
        7130: function(e, n, t) {
            t.d(n, {
                $: function() {
                    return r
                }
            });
            var i = t(38839),
                r = function() {
                    return (0, i.BX)("svg", {
                        width: "45",
                        height: "31",
                        viewBox: "0 0 45 31",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("path", {
                            d: "M0.550781 1C0.550781 0.447715 0.998497 0 1.55078 0H7.55078C8.10307 0 8.55078 0.447715 8.55078 1V4C8.55078 4.55228 8.10307 5 7.55078 5H1.55078C0.998497 5 0.550781 4.55228 0.550781 4V1Z",
                            className: "fill-[#A9ACB0] dark:fill-[#696E75]"
                        }), (0, i.tZ)("path", {
                            d: "M12.5508 1C12.5508 0.447715 12.9985 0 13.5508 0H43.5508C44.1031 0 44.5508 0.447715 44.5508 1V4C44.5508 4.55228 44.1031 5 43.5508 5H13.5508C12.9985 5 12.5508 4.55228 12.5508 4V1Z",
                            className: "fill-[#A9ACB0] dark:fill-[#696E75]"
                        }), (0, i.tZ)("path", {
                            d: "M12.5508 14C12.5508 13.4477 12.9985 13 13.5508 13H43.5508C44.1031 13 44.5508 13.4477 44.5508 14V17C44.5508 17.5523 44.1031 18 43.5508 18H13.5508C12.9985 18 12.5508 17.5523 12.5508 17V14Z",
                            className: "fill-[#A9ACB0] dark:fill-[#3C4146]"
                        }), (0, i.tZ)("path", {
                            d: "M0.449219 14C0.449219 13.4477 0.896934 13 1.44922 13H7.44922C8.0015 13 8.44922 13.4477 8.44922 14V17C8.44922 17.5523 8.0015 18 7.44922 18H1.44922C0.896934 18 0.449219 17.5523 0.449219 17V14Z",
                            className: "fill-[#A9ACB0] dark:fill-[#3C4146]"
                        }), (0, i.tZ)("path", {
                            d: "M0.449219 27C0.449219 26.4477 0.896934 26 1.44922 26H7.44922C8.0015 26 8.44922 26.4477 8.44922 27V30C8.44922 30.5523 8.0015 31 7.44922 31H1.44922C0.896934 31 0.449219 30.5523 0.449219 30V27Z",
                            className: "fill-[#E5E8EC] dark:fill-[#2D3237]"
                        }), (0, i.tZ)("path", {
                            d: "M12.5508 27C12.5508 26.4477 12.9985 26 13.5508 26H43.5508C44.1031 26 44.5508 26.4477 44.5508 27V30C44.5508 30.5523 44.1031 31 43.5508 31H13.5508C12.9985 31 12.5508 30.5523 12.5508 30V27Z",
                            className: "fill-[#E5E8EC] dark:fill-[#2D3237]"
                        })]
                    })
                }
        },
        6280: function(e, n, t) {
            t.d(n, {
                Pq: function() {
                    return s
                },
                RF: function() {
                    return o
                },
                Rg: function() {
                    return c
                },
                lL: function() {
                    return a
                }
            });
            var i = t(75990),
                r = t(36190),
                a = new Map([
                    ["ethereum", "Ethereum"],
                    ["goerli", "Goerli"],
                    ["ropsten", "Ropsten"],
                    ["rinkeby", "Rinkeby"],
                    ["kovan", "Kovan"],
                    ["bsc", "BSC"],
                    ["bsc_testnet", "BSC Testnet"],
                    ["polygon", "Polygon"],
                    ["polygon_mumbai", "Polygon Mumbai"],
                    ["klaytn", "Klaytn"],
                    ["klaytn_baobab", "Klaytn Baobab"],
                    ["bitcoin", "Bitcoin"],
                    ["btc_testnet", "Bitcoin Testnet"],
                    ["zetachain", "ZetaChain"],
                    ["zetachain_athens", "ZetaChain Athens"]
                ]),
                o = new Map([
                    ["ethereum", "Ethereum"],
                    ["goerli", "Goerli"],
                    ["ropsten", "Ropsten"],
                    ["rinkeby", "Rinkeby"],
                    ["kovan", "Kovan"],
                    ["bsc", "BSC"],
                    ["bsc_testnet", "BSC Test"],
                    ["polygon", "Polygon"],
                    ["polygon_mumbai", "Mumbai"],
                    ["klaytn", "Klaytn"],
                    ["klaytn_baobab", "Baobab"],
                    ["bitcoin", "BTC"],
                    ["btc_testnet", "BTC Test"],
                    ["zetachain", "ZetaChain"],
                    ["zetachain_athens", "Athens"]
                ]),
                s = new Map([
                    [i.ZetaCoreChainName.EthMainnet, "ethereum"],
                    [i.ZetaCoreChainName.GoerliTestnet, "goerli"],
                    [i.ZetaCoreChainName.BscMainnet, "bsc"],
                    [i.ZetaCoreChainName.BscTestnet, "bsc_testnet"],
                    [i.ZetaCoreChainName.PolygonMainnet, "polygon"],
                    [i.ZetaCoreChainName.BaobabTestnet, "klaytn_baobab"],
                    [i.ZetaCoreChainName.MumbaiTestnet, "polygon_mumbai"],
                    [i.ZetaCoreChainName.BtcTestnet, "btc_testnet"],
                    [i.ZetaCoreChainName.BtcMainnet, "bitcoin"],
                    [i.ZetaCoreChainName.ZetaTestnet, "zetachain_athens"],
                    [i.ZetaCoreChainName.ZetaMainnet, "zetachain"]
                ]),
                c = new Map([
                    [r.S5.CONTRACT_DEPLOY, "Deploy"],
                    [r.S5.CONTRACT_CALL, "Call"],
                    [r.S5.TRANSFER, "Transfer"],
                    [r.S5.SEND, "Send"],
                    [r.S5.RECEIVE, "Receive"],
                    [r.S5.CROSS_CHAIN_SWAP, "Swap"]
                ])
        },
        23575: function(e, n, t) {
            t.d(n, {
                N: function() {
                    return r
                }
            });
            var i = t(70294),
                r = function() {
                    var e = (0, i.Vb)();
                    return {
                        shouldDisableSendPage: e.shouldDisableSendPage,
                        shouldDisablePoolPage: e.shouldDisablePoolPage,
                        shouldDisableStakingPage: e.shouldDisableStakingPage,
                        shouldDisableXpPage: e.shouldDisableXpPage,
                        shouldDisableGovernancePage: e.shouldDisableGovernancePage
                    }
                }
        },
        2848: function(e, n, t) {
            t.d(n, {
                m: function() {
                    return l
                }
            });
            var i = t(79540),
                r = t(35837),
                a = t(36397),
                o = t(42685),
                s = t(51551),
                c = t(97006),
                l = function() {
                    var e = (0, o.O)().address,
                        n = (0, r.useRouter)(),
                        t = (0, a.v9)(i.LQ.selectXDEFIState).bitcoinAccount,
                        l = s.J5.map(function(e) {
                            return {
                                coins: s.Dv,
                                timeFrame: e
                            }
                        });
                    (0, c.nS)(l, {
                        skip: !e && !t || "/xp" === n.route,
                        refetchOnMountOrArgChange: !0
                    })
                }
        },
        56778: function(e, n, t) {
            t.d(n, {
                hD: function() {
                    return l
                }
            });
            var i = t(36107),
                r = t(41853),
                a = r.X7.getSelectors(function(e) {
                    return e.coins.coinsHistories
                }),
                o = a.selectById,
                s = a.selectEntities,
                c = r.xd.getSelectors(function(e) {
                    return e.coins.zetaBalanceHistories
                }).selectEntities,
                l = {
                    selectCoinsHistories: function() {
                        return (0, i.createSelector)(s, function(e) {
                            return e.coins.isLoadingCoinsHistories
                        }, function(e, n) {
                            return {
                                coinsHistories: e,
                                isLoadingCoinsHistories: n
                            }
                        })
                    },
                    selectCoinsHistoriesById: function(e) {
                        return (0, i.createSelector)(function(e) {
                            return e
                        }, function(n) {
                            return o(n, e)
                        })
                    },
                    selectCoinsHistoriesByIds: function(e) {
                        return (0, i.createSelector)(function(e) {
                            return e
                        }, function(n) {
                            return e.map(function(e) {
                                return o(n, e)
                            })
                        })
                    },
                    selectHoldings: function() {
                        return (0, i.createSelector)(function(e) {
                            return e.coins.holdings
                        }, function(e) {
                            return e.coins.isLoadingHoldings
                        }, function(e, n) {
                            return {
                                holdings: e,
                                isLoadingHoldings: n
                            }
                        })
                    },
                    selectZetaBalanceHistories: function() {
                        return (0, i.createSelector)(c, function(e) {
                            return e.coins.isLoadingZetaBalanceHistories
                        }, function(e, n) {
                            return {
                                zetaBalanceHistories: e,
                                isLoadingZetaBalanceHistories: n
                            }
                        })
                    },
                    selectHoldingsByChainId: function() {
                        return (0, i.createSelector)(function(e) {
                            return e.coins.holdingsByChainId
                        }, function(e) {
                            return e.coins.isLoadingHoldings
                        }, function(e, n) {
                            return {
                                holdingsByChainId: e,
                                isLoadingHoldings: n
                            }
                        })
                    },
                    selectMainnetCoinOverviewPrice: function() {
                        return (0, i.createSelector)(function(e) {
                            return e.coins.mainnetCoinOverviewPrice
                        }, function(e) {
                            return {
                                mainnetCoinOverviewPrice: e
                            }
                        })
                    }
                }
        }
    }
]);