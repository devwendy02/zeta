(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6551], {
        22209: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return l
                }
            });
            var a = n(42949),
                r = n(7130),
                o = n(38839),
                l = function() {
                    var e = (0, a.AA)().copy;
                    return (0, o.tZ)("div", {
                        className: "flex px-8 gap-8 my-8 rounded-lg overflow-hidden",
                        children: (0, o.tZ)("div", {
                            className: "w-full h-[calc(100vh-200px)] min-h-[400px] dark:bg-grey-700 bg-white border border-grey-200 p-6 rounded-lg flex items-center justify-center",
                            children: (0, o.BX)("div", {
                                className: "flex flex-col justify-center items-center gap-4",
                                children: [(0, o.tZ)(r.$, {}), (0, o.tZ)("div", {
                                    className: "dark:text-grey-400 text-grey-700 text-sm",
                                    children: e.shared.pageTemporarilyUnavailable
                                })]
                            })
                        })
                    })
                }
        },
        7130: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return r
                }
            });
            var a = n(38839),
                r = function() {
                    return (0, a.BX)("svg", {
                        width: "45",
                        height: "31",
                        viewBox: "0 0 45 31",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.tZ)("path", {
                            d: "M0.550781 1C0.550781 0.447715 0.998497 0 1.55078 0H7.55078C8.10307 0 8.55078 0.447715 8.55078 1V4C8.55078 4.55228 8.10307 5 7.55078 5H1.55078C0.998497 5 0.550781 4.55228 0.550781 4V1Z",
                            className: "fill-[#A9ACB0] dark:fill-[#696E75]"
                        }), (0, a.tZ)("path", {
                            d: "M12.5508 1C12.5508 0.447715 12.9985 0 13.5508 0H43.5508C44.1031 0 44.5508 0.447715 44.5508 1V4C44.5508 4.55228 44.1031 5 43.5508 5H13.5508C12.9985 5 12.5508 4.55228 12.5508 4V1Z",
                            className: "fill-[#A9ACB0] dark:fill-[#696E75]"
                        }), (0, a.tZ)("path", {
                            d: "M12.5508 14C12.5508 13.4477 12.9985 13 13.5508 13H43.5508C44.1031 13 44.5508 13.4477 44.5508 14V17C44.5508 17.5523 44.1031 18 43.5508 18H13.5508C12.9985 18 12.5508 17.5523 12.5508 17V14Z",
                            className: "fill-[#A9ACB0] dark:fill-[#3C4146]"
                        }), (0, a.tZ)("path", {
                            d: "M0.449219 14C0.449219 13.4477 0.896934 13 1.44922 13H7.44922C8.0015 13 8.44922 13.4477 8.44922 14V17C8.44922 17.5523 8.0015 18 7.44922 18H1.44922C0.896934 18 0.449219 17.5523 0.449219 17V14Z",
                            className: "fill-[#A9ACB0] dark:fill-[#3C4146]"
                        }), (0, a.tZ)("path", {
                            d: "M0.449219 27C0.449219 26.4477 0.896934 26 1.44922 26H7.44922C8.0015 26 8.44922 26.4477 8.44922 27V30C8.44922 30.5523 8.0015 31 7.44922 31H1.44922C0.896934 31 0.449219 30.5523 0.449219 30V27Z",
                            className: "fill-[#E5E8EC] dark:fill-[#2D3237]"
                        }), (0, a.tZ)("path", {
                            d: "M12.5508 27C12.5508 26.4477 12.9985 26 13.5508 26H43.5508C44.1031 26 44.5508 26.4477 44.5508 27V30C44.5508 30.5523 44.1031 31 43.5508 31H13.5508C12.9985 31 12.5508 30.5523 12.5508 30V27Z",
                            className: "fill-[#E5E8EC] dark:fill-[#2D3237]"
                        })]
                    })
                }
        },
        6280: function(e, t, n) {
            "use strict";
            n.d(t, {
                Pq: function() {
                    return s
                },
                RF: function() {
                    return l
                },
                Rg: function() {
                    return i
                },
                lL: function() {
                    return o
                }
            });
            var a = n(75990),
                r = n(36190),
                o = new Map([
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
                l = new Map([
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
                    [a.ZetaCoreChainName.EthMainnet, "ethereum"],
                    [a.ZetaCoreChainName.GoerliTestnet, "goerli"],
                    [a.ZetaCoreChainName.BscMainnet, "bsc"],
                    [a.ZetaCoreChainName.BscTestnet, "bsc_testnet"],
                    [a.ZetaCoreChainName.PolygonMainnet, "polygon"],
                    [a.ZetaCoreChainName.BaobabTestnet, "klaytn_baobab"],
                    [a.ZetaCoreChainName.MumbaiTestnet, "polygon_mumbai"],
                    [a.ZetaCoreChainName.BtcTestnet, "btc_testnet"],
                    [a.ZetaCoreChainName.BtcMainnet, "bitcoin"],
                    [a.ZetaCoreChainName.ZetaTestnet, "zetachain_athens"],
                    [a.ZetaCoreChainName.ZetaMainnet, "zetachain"]
                ]),
                i = new Map([
                    [r.S5.CONTRACT_DEPLOY, "Deploy"],
                    [r.S5.CONTRACT_CALL, "Call"],
                    [r.S5.TRANSFER, "Transfer"],
                    [r.S5.SEND, "Send"],
                    [r.S5.RECEIVE, "Receive"],
                    [r.S5.CROSS_CHAIN_SWAP, "Swap"]
                ])
        },
        23575: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return r
                }
            });
            var a = n(70294),
                r = function() {
                    var e = (0, a.Vb)();
                    return {
                        shouldDisableSendPage: e.shouldDisableSendPage,
                        shouldDisablePoolPage: e.shouldDisablePoolPage,
                        shouldDisableStakingPage: e.shouldDisableStakingPage,
                        shouldDisableXpPage: e.shouldDisableXpPage,
                        shouldDisableGovernancePage: e.shouldDisableGovernancePage
                    }
                }
        },
        98454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return q
                }
            });
            var a = n(52298),
                r = n(41800),
                o = n(46146),
                l = n(17241),
                s = n(66551),
                i = n(42949),
                c = n(18124),
                u = n(39104),
                d = n(38839),
                h = (0, o.Z)("div", {
                    target: "e747m3x0"
                })("@media (max-width: ", c.theme.screens.md, "){th{padding:0px;;}}"),
                m = function(e) {
                    var t = e.zetaChainPools,
                        n = (0, i.AA)().copy,
                        a = (0, i.cK)().isMobile,
                        r = n.hub.pools.table,
                        o = r.title,
                        c = r.description,
                        m = r.zetaSearchInputPlaceholder;
                    return t ? (0, d.BX)(h, {
                        children: [(0, d.tZ)(l.Z, {
                            variant: "headline2",
                            className: "p-4 sm:p-6",
                            children: o
                        }), (0, d.tZ)(l.Z, {
                            variant: "body1",
                            className: "px-4 sm:px-6 mb-4 sm:mb-6",
                            children: c
                        }), (0, d.tZ)(u.i, {
                            keyName: "zetachain-pools-table",
                            children: (0, d.tZ)(s.j2$, {
                                columns: t.columns,
                                data: t.data,
                                withSearch: !0,
                                searchInputPlaceholder: m,
                                height: a ? 200 : 615,
                                selectRowHandlers: {
                                    withSelect: !0,
                                    onSelect: t.onRowSelect,
                                    selectedRow: t.selectedRow
                                },
                                columnVisibility: {
                                    tokenA: !1,
                                    networkA: !1,
                                    tokenB: !1,
                                    networkB: !1,
                                    network: !1,
                                    dex: !1
                                }
                            })
                        })]
                    }) : null
                },
                f = n(58549),
                b = n(97006),
                p = function() {
                    var e = [];
                    return Object.values(f.KP).forEach(function(t) {
                        var n = t.tokenA,
                            a = t.tokenB;
                        e.includes(n.symbol) || e.push(n.symbol), e.includes(a.symbol) || e.push(a.symbol)
                    }), e
                },
                g = function() {
                    var e = p();
                    (0, b.vf)({
                        coins: e
                    }, {
                        skip: !e.length
                    })
                },
                y = n(78756),
                k = n(72975),
                v = n.n(k),
                x = n(36397),
                Z = n(30589),
                w = n(67166),
                C = n(56181),
                N = function() {
                    var e, t = (0, x.v9)(C.UU.selectAllPools),
                        n = (0, Z.Z)((0, y.Z)(v().mark(function e() {
                            var n;
                            return v().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = [], e.next = 3, Promise.all(Object.values(t).map(function() {
                                            var e = (0, y.Z)(v().mark(function e(t) {
                                                var a;
                                                return v().wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!(!t || !t.contractAddresses.poolPair)) {
                                                                e.next = 2;
                                                                break
                                                            }
                                                            return e.abrupt("return");
                                                        case 2:
                                                            a = {
                                                                dex: t.dex,
                                                                network: t.network,
                                                                pairAddress: t.contractAddresses.poolPair,
                                                                timeFrame: w.p
                                                            }, n.push(a);
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 3:
                                        return e.abrupt("return", n);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), []);
                    (0, b.Q0)(null == n ? void 0 : n.value, {
                        skip: !(null !== (e = n.value) && void 0 !== e && e.length)
                    })
                },
                B = n(31737),
                A = n(25294),
                P = n(95453),
                _ = n(35837),
                E = n(32735);
            n(72013);
            var R = n(38354),
                T = function(e) {
                    var t = e.original,
                        n = t.tokenA,
                        a = t.tokenB;
                    return "/pools/".concat(n.symbol, "-").concat(n.network, "-").concat(a.symbol, "-").concat(a.network)
                },
                S = n(75990),
                X = function(e) {
                    return e !== S.DEXVersion.UniswapV2
                },
                K = n(19601),
                M = n.n(K),
                D = n(59299),
                V = n(6280),
                z = function(e) {
                    var t = e.tokenA,
                        n = e.tokenB,
                        a = e.network,
                        r = e.isExternalDex,
                        o = (0, i.AA)().copy,
                        s = (0, i.cK)().isMobile;
                    return s ? (0, d.BX)("div", {
                        className: "flex flex-col gap-1",
                        children: [(0, d.BX)(l.Z, {
                            variant: "body1",
                            className: "flex items-center gap-1",
                            children: [(0, d.tZ)(M(), {
                                src: D.tX.get(t.symbol),
                                width: 12,
                                height: 12,
                                alt: t.symbol,
                                className: "flex-shrink-0"
                            }), t.symbol, (0, d.tZ)("span", {
                                children: "/"
                            }), (0, d.tZ)(M(), {
                                src: D.tX.get(n.symbol),
                                width: 12,
                                height: 12,
                                alt: n.symbol,
                                className: "flex-shrink-0"
                            }), n.symbol]
                        }), (0, d.BX)(l.Z, {
                            variant: "body1",
                            className: "text-grey-400 dark:text-grey-300 flex gap-1 items-center",
                            children: [(0, d.BX)("span", {
                                children: ["on ", s ? V.RF.get(a) : V.lL.get(a)]
                            }), r && (0, d.tZ)(A.ZU, {
                                title: o.hub.pools.table.externalDexTooltip,
                                children: (0, d.tZ)("span", {
                                    children: (0, d.tZ)(A.VzH, {})
                                })
                            })]
                        })]
                    }) : (0, d.BX)("div", {
                        className: "flex items-center",
                        children: [(0, d.BX)("div", {
                            className: "flex items-center gap-1.5 border-r border-grey-200 dark:border-grey-500 pr-3",
                            children: [(0, d.BX)("div", {
                                className: "flex-shrink-0 w-8 h-6 relative",
                                children: [(0, d.tZ)(M(), {
                                    src: D.tX.get(t.symbol),
                                    width: 24,
                                    height: 24,
                                    alt: t.symbol
                                }), (0, d.tZ)("div", {
                                    className: "absolute right-0 bottom-0 h-3 w-3",
                                    children: (0, d.tZ)(M(), {
                                        src: D.ap.get(t.network),
                                        layout: "fill",
                                        alt: t.network
                                    })
                                })]
                            }), (0, d.BX)("div", {
                                className: "flex flex-col flex-shrink-0 w-[60px]",
                                children: [(0, d.tZ)(l.Z, {
                                    variant: "body1",
                                    className: "leading-6",
                                    children: t.symbol
                                }), (0, d.tZ)(l.Z, {
                                    variant: "caption",
                                    className: "text-grey-400 dark:text-grey-300 leading-3",
                                    children: V.lL.get(t.network)
                                })]
                            })]
                        }), (0, d.BX)("div", {
                            className: "flex items-center gap-1.5 pl-3",
                            children: [(0, d.BX)("div", {
                                className: "flex-shrink-0 w-8 h-6 relative",
                                children: [(0, d.tZ)(M(), {
                                    src: D.tX.get(n.symbol),
                                    width: 24,
                                    height: 24,
                                    alt: n.symbol
                                }), (0, d.tZ)("div", {
                                    className: "absolute right-0 bottom-0 h-3 w-3",
                                    children: (0, d.tZ)(M(), {
                                        src: D.ap.get(n.network),
                                        layout: "fill",
                                        alt: n.network
                                    })
                                })]
                            }), (0, d.BX)("div", {
                                className: "flex flex-col flex-shrink-0 w-[60px]",
                                children: [(0, d.tZ)(l.Z, {
                                    variant: "body1",
                                    className: "leading-6",
                                    children: n.symbol
                                }), (0, d.tZ)(l.Z, {
                                    variant: "caption",
                                    className: "text-grey-400 dark:text-grey-300 leading-3",
                                    children: V.lL.get(n.network)
                                })]
                            })]
                        }), r && (0, d.tZ)(A.ZU, {
                            title: o.hub.pools.table.externalDexTooltip,
                            children: (0, d.tZ)("span", {
                                children: (0, d.tZ)(A.VzH, {})
                            })
                        })]
                    })
                },
                H = function(e) {
                    e.poolId;
                    var t = (0, i.AA)().copy,
                        n = (0, i.cK)().isMobile;
                    return (0, d.BX)(l.Z, {
                        variant: "body1",
                        className: "text-xs sm:text-sm text-right sm:text-left",
                        children: [n && (0, d.BX)("span", {
                            className: "text-grey-400 dark:text-grey-300",
                            children: [t.hub.pools.table.columnTitles.feeRewards, ": "]
                        }), "-"]
                    })
                },
                I = n(64691),
                U = n(45048),
                F = n(91064),
                L = function(e) {
                    var t, n, a = e.poolId,
                        r = (0, i.AA)(),
                        o = r.copy,
                        s = r.locale,
                        c = (0, i.cK)().isMobile,
                        u = (0, x.v9)(f.UU.selectPoolById(a));
                    if (!u) return (0, d.tZ)(l.Z, {
                        variant: "body1",
                        children: "-"
                    });
                    var h = u.poolPairReserves,
                        m = u.isLoadingPoolPairReserves,
                        b = u.tokenA,
                        p = u.tokenB;
                    if (m) return (0, d.tZ)(I.Z, {
                        variant: "text",
                        width: 80
                    });
                    var g = (0, U.formatUnits)(null !== (t = null == h ? void 0 : h.tokenAReserves) && void 0 !== t ? t : "0", b.decimals),
                        y = (0, U.formatUnits)(null !== (n = null == h ? void 0 : h.tokenBReserves) && void 0 !== n ? n : "0", p.decimals);
                    return (0, d.BX)(l.Z, {
                        variant: "body1",
                        className: "text-xs sm:text-sm text-right sm:text-left",
                        children: [c && (0, d.BX)("span", {
                            className: "text-grey-400 dark:text-grey-300",
                            children: [o.hub.pools.table.columnTitles.tvl, ": "]
                        }), Number(g) && Number(y) ? "".concat((0, F.dN)(g, s), " ").concat(b.symbol, " / ").concat((0, F.dN)(y, s), " ").concat(p.symbol) : "-"]
                    })
                },
                O = function() {
                    var e = (0, i.AA)().copy,
                        t = (0, i.cK)(),
                        n = t.downXl,
                        a = t.isMobile,
                        r = (0, _.useRouter)(),
                        o = (0, x.v9)(C.UU.selectPoolsByIds(R.xb)),
                        l = (0, E.useMemo)(function() {
                            return [{
                                accessorKey: "tokenA"
                            }, {
                                accessorKey: "tokenB"
                            }, {
                                accessorKey: "networkA"
                            }, {
                                accessorKey: "networkB"
                            }, {
                                accessorKey: "assets",
                                accessorFn: function(e) {
                                    return {
                                        tokenA: e.tokenA,
                                        tokenB: e.tokenB,
                                        network: e.network,
                                        isExternalDex: X(e.dex)
                                    }
                                },
                                header: e.hub.pools.table.columnTitles.assets,
                                cell: function(e) {
                                    var t = e.getValue(),
                                        n = t.tokenA,
                                        a = t.tokenB,
                                        r = t.network,
                                        o = t.isExternalDex;
                                    return (0, d.tZ)(z, {
                                        tokenA: n,
                                        tokenB: a,
                                        network: r,
                                        isExternalDex: o
                                    })
                                },
                                size: n ? 300 : 500
                            }, {
                                accessorKey: "network"
                            }, {
                                accessorKey: "dex"
                            }, {
                                accessorKey: "tvl",
                                accessorFn: function(e) {
                                    return e.id
                                },
                                header: e.hub.pools.table.columnTitles.tvl,
                                cell: function(e) {
                                    return (0, d.tZ)(L, {
                                        poolId: e.getValue()
                                    })
                                },
                                size: 120
                            }, {
                                accessorKey: "feeRewards",
                                accessorFn: function(e) {
                                    return e.id
                                },
                                header: e.hub.pools.table.columnTitles.feeRewards,
                                cell: function(e) {
                                    return (0, d.tZ)(H, {
                                        poolId: e.getValue()
                                    })
                                },
                                size: 150
                            }, {
                                id: "actionIcon",
                                accessorKey: "",
                                header: "",
                                cell: function(e) {
                                    return (0, d.tZ)("div", {
                                        className: "w-full flex items-center justify-end",
                                        children: X(e.row.original.dex) ? (0, d.tZ)(A.TqL, {
                                            height: 16,
                                            width: 16
                                        }) : (0, d.tZ)(A.VG8, {
                                            height: 16,
                                            width: 16
                                        })
                                    })
                                },
                                size: 20
                            }]
                        }, [n, e.hub.pools.table.columnTitles]),
                        s = (0, E.useMemo)(function() {
                            return [{
                                accessorKey: "tokenA"
                            }, {
                                accessorKey: "tokenB"
                            }, {
                                accessorKey: "networkA"
                            }, {
                                accessorKey: "networkB"
                            }, {
                                accessorKey: "assets",
                                accessorFn: function(e) {
                                    return {
                                        tokenA: e.tokenA,
                                        tokenB: e.tokenB,
                                        network: e.network,
                                        isExternalDex: X(e.dex)
                                    }
                                },
                                header: "",
                                cell: function(e) {
                                    var t = e.getValue(),
                                        n = t.tokenA,
                                        a = t.tokenB,
                                        r = t.network,
                                        o = t.isExternalDex;
                                    return (0, d.tZ)(z, {
                                        tokenA: n,
                                        tokenB: a,
                                        network: r,
                                        isExternalDex: o
                                    })
                                },
                                size: 100
                            }, {
                                accessorKey: "network"
                            }, {
                                accessorKey: "dex"
                            }, {
                                accessorKey: "tvlAndFeeRewards",
                                accessorFn: function(e) {
                                    return e.id
                                },
                                header: "",
                                cell: function(e) {
                                    return (0, d.BX)("div", {
                                        className: "flex flex-col items-end justify-center w-full gap-1",
                                        children: [(0, d.tZ)(L, {
                                            poolId: e.getValue()
                                        }), (0, d.tZ)(H, {
                                            poolId: e.getValue()
                                        })]
                                    })
                                },
                                size: 100
                            }]
                        }, []),
                        c = (0, E.useMemo)(function() {
                            return a ? s : l
                        }, [a, s, l]),
                        u = (0, E.useState)(null),
                        h = u[0],
                        m = u[1],
                        f = (0, E.useCallback)(function() {
                            m(null)
                        }, []);
                    return {
                        data: o,
                        columns: c,
                        onRowSelect: (0, E.useCallback)(function(e) {
                            m(e), (0, P.L9)(P._E.HubPoolTableRowClicked, (0, B.Z)({}, P.gp.PoolId, e.original.id));
                            var t = T(e);
                            r.push(t)
                        }, [r]),
                        selectedRow: h,
                        onSearchChange: f
                    }
                },
                j = function() {
                    var e = O();
                    return g(), N(), (0, d.BX)("div", {
                        className: "flex flex-col md:flex-row px-4 sm:px-8 md:gap-8",
                        children: [(0, d.tZ)("div", {
                            className: "flex flex-col gap-8 w-full md:border-r border-grey-200 dark:border-grey-700 md:pr-8 py-4 sm:py-8",
                            children: (0, d.tZ)(a.Zb, {
                                className: "min-h-[400px] p-0",
                                style: {
                                    minHeight: "calc(100vh - 130px)"
                                },
                                children: (0, d.tZ)(m, {
                                    zetaChainPools: e
                                })
                            })
                        }), (0, d.tZ)(r.aM, {})]
                    })
                },
                G = n(22209),
                $ = n(23575),
                q = function() {
                    return (0, $.N)().shouldDisablePoolPage ? (0, d.tZ)(G.f, {}) : (0, d.tZ)(j, {})
                }
        },
        32807: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/pools", function() {
                return n(98454)
            }])
        },
        30589: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = n(32735),
                r = n(31191),
                o = n(87902);

            function l(e, t) {
                void 0 === t && (t = []);
                var n, l, s, i, c, u, d, h, m = (l = {
                        loading: !0
                    }, void 0 === (n = t) && (n = []), void 0 === l && (l = {
                        loading: !1
                    }), s = (0, a.useRef)(0), i = (0, o.Z)(), u = (c = (0, a.useState)(l))[0], d = c[1], h = (0, a.useCallback)(function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var a = ++s.current;
                        return u.loading || d(function(e) {
                            return (0, r.__assign)((0, r.__assign)({}, e), {
                                loading: !0
                            })
                        }), e.apply(void 0, t).then(function(e) {
                            return i() && a === s.current && d({
                                value: e,
                                loading: !1
                            }), e
                        }, function(e) {
                            return i() && a === s.current && d({
                                error: e,
                                loading: !1
                            }), e
                        })
                    }, n), [u, h]),
                    f = m[0],
                    b = m[1];
                return (0, a.useEffect)(function() {
                    b()
                }, [b]), f
            }
        },
        87902: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(32735);

            function r() {
                var e = (0, a.useRef)(!1),
                    t = (0, a.useCallback)(function() {
                        return e.current
                    }, []);
                return (0, a.useEffect)(function() {
                    return e.current = !0,
                        function() {
                            e.current = !1
                        }
                }, []), t
            }
        }
    },
    function(e) {
        e.O(0, [1800, 9774, 2888, 179], function() {
            return e(e.s = 32807)
        }), _N_E = e.O()
    }
]);