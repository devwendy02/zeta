"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7975], {
        27975: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return tm
                }
            });
            var r, a, i, o, s, d, c = n(78756),
                l = n(17285),
                u = n(72975),
                p = n.n(u),
                m = n(17241),
                h = n(68073),
                b = n(25294),
                f = n(79540),
                g = n(42949),
                v = n(95453),
                y = n(75990),
                x = n(45048),
                k = n(44874),
                w = n(32735),
                Z = n(36397),
                T = n(37457),
                S = n(46146),
                N = n(19601),
                C = n.n(N),
                A = n(19165),
                I = n(59299),
                E = n(6280),
                O = n(38839),
                B = (0, S.Z)("div", {
                    target: "e8jmcg41"
                })({
                    name: "gj7b5f",
                    styles: "display:flex;flex-direction:column;gap:0.5rem;padding-top:1.5rem;"
                }),
                P = (0, S.Z)("button", {
                    target: "e8jmcg40"
                })({
                    name: "12zmb1t",
                    styles: "display:flex;align-items:center;gap:0.5rem;border-radius:0.25rem;--tw-bg-opacity:1;background-color:rgb(229 232 236 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;:hover{background-color:rgb(169 172 176 / 0.5);}.dark &{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));}.dark &:hover{--tw-bg-opacity:1;background-color:rgb(31 35 40 / var(--tw-bg-opacity));}"
                }),
                F = function(e) {
                    var t = e.title,
                        n = e.isOpen,
                        r = e.closeDialog,
                        a = e.selectNetwork,
                        i = e.chains,
                        o = (0, g.AA)().copy,
                        s = function(e) {
                            r(), setTimeout(function() {
                                return a(e)
                            }, 150)
                        };
                    return i ? (0, O.BX)(b.QAJ, {
                        open: n,
                        onClose: r,
                        title: o.hub.sendZeta.selectNetwork,
                        children: [(0, O.tZ)(m.Z, {
                            variant: "body1",
                            children: t
                        }), (0, O.tZ)(B, {
                            children: i.map(function(e) {
                                var t = A.Kn.safeParse(String(e.id));
                                if (!t.success) return null;
                                var n = t.data,
                                    r = E.lL.get(A.Gl[n]),
                                    a = I.ap.get(A.Gl[n]);
                                return (0, O.BX)(P, {
                                    onClick: function() {
                                        return s(n)
                                    },
                                    children: [(0, O.tZ)("div", {
                                        className: "flex items-center justify-center flex-shrink-0",
                                        children: a && (0, O.tZ)(C(), {
                                            src: a,
                                            alt: r,
                                            width: 20,
                                            height: 20
                                        })
                                    }), (0, O.tZ)(m.Z, {
                                        variant: "body1",
                                        children: r
                                    })]
                                }, n)
                            })
                        })]
                    }) : (0, O.BX)(b.QAJ, {
                        open: n,
                        onClose: r,
                        title: o.hub.sendZeta.selectNetwork,
                        children: [(0, O.tZ)(m.Z, {
                            variant: "body1",
                            children: t
                        }), (0, O.tZ)("div", {
                            className: "mt-6",
                            children: (0, O.tZ)(m.Z, {
                                variant: "body1",
                                children: o.hub.send.noAssetsOnChains
                            })
                        })]
                    })
                },
                D = n(42685),
                X = n(35432),
                H = n(72763),
                R = n(53487),
                L = n(21521),
                _ = n(93868),
                j = n(31737),
                M = n(52298),
                z = n(55634),
                G = n(46776),
                Q = n(56778),
                U = n(66551),
                V = n(13905),
                q = function(e) {
                    var t, n, r, a = e.children,
                        i = (0, g.AA)().copy,
                        o = (0, Z.I0)(),
                        s = (0, Z.v9)(L.A.sendTokenState),
                        d = s.ethSendAmount,
                        c = s.sendTokenSelected,
                        l = s.fromChainId,
                        u = s.errors,
                        p = s.zetaNetworkFees,
                        m = s.destinationNetworkFees,
                        h = (0, z.z7)().estimatedGasFee,
                        b = (0, Z.v9)(Q.hD.selectHoldingsByChainId()),
                        f = b.holdingsByChainId,
                        v = b.isLoadingHoldings,
                        y = null !== (t = null == c ? void 0 : c.decimals) && void 0 !== t ? t : 18,
                        k = l && c ? null === (n = f[l]) || void 0 === n || null === (n = n[c.symbol]) || void 0 === n ? void 0 : n.balance : void 0,
                        T = l && A.Tk[l] ? null === (r = f[l]) || void 0 === r || null === (r = r[A.Tk[l]]) || void 0 === r ? void 0 : r.balance : void 0;
                    return ((0, w.useEffect)(function() {
                        o(R.P.removeSendError(H.HT.InsufficientTokenBalance));
                        var e = (0, x.parseUnits)(d || "0", y);
                        "string" == typeof k && Number(d) && e.gt(k) && o(R.P.addSendError(H.HT.InsufficientTokenBalance))
                    }, [o, k, v, y, d]), (0, w.useEffect)(function() {
                        o(R.P.removeSendError(H.HT.InputAmountTooSmall)), Number(d) && (0, x.parseUnits)(d || "0", y).sub(p || "0").sub(m || "0").lt(0) && o(R.P.addSendError(H.HT.InputAmountTooSmall))
                    }, [o, d, p, m, y]), (0, w.useEffect)(function() {
                        o(R.P.removeSendError(H.HT.InsufficientGasBalance)), Number(d) && l && h[l] && T && !V.O$.from(T).gte(V.O$.from(h[l].toString())) && o(R.P.addSendError(H.HT.InsufficientGasBalance))
                    }, [T, h, l, d, o]), u.includes(H.HT.InsufficientTokenBalance)) ? (0, O.tZ)(U.kHo, {
                        color: "error",
                        disabled: !0,
                        children: i.hub.send.insufficientBalanceToSend.replace("[X]", (null == c ? void 0 : c.symbol) || "Token")
                    }) : l && u.includes(H.HT.InsufficientGasBalance) ? (0, O.tZ)(U.kHo, {
                        color: "error",
                        disabled: !0,
                        children: i.hub.send.insufficientGasBalance.replace("[X]", A.kt[l].nativeCurrency.symbol)
                    }) : u.includes(H.HT.UnableToCalculateFees) ? (0, O.tZ)(U.kHo, {
                        color: "error",
                        disabled: !0,
                        children: i.hub.send.unableToCalculateFees
                    }) : u.includes(H.HT.InputAmountTooSmall) ? (0, O.tZ)(U.kHo, {
                        color: "error",
                        disabled: !0,
                        children: i.hub.send.inputTooSmall
                    }) : (0, O.tZ)(O.HY, {
                        children: a
                    })
                },
                W = G.N2.isTestnet,
                Y = function(e) {
                    var t = e.handleSubmit,
                        n = (0, g.AA)().copy,
                        r = (0, M.kc)().hasCompletedOnboarding,
                        a = (0, z.Os)(),
                        i = a.address,
                        o = a.chainId,
                        s = a.isConnected,
                        d = a.switchNetwork,
                        c = (0, k.Ds)().closeSnackbar,
                        l = (0, g.zv)(),
                        u = l.connectXDEFI,
                        p = l.switchBitcoinNetwork,
                        m = (0, Z.v9)(Q.hD.selectHoldingsByChainId()).isLoadingHoldings,
                        h = (0, Z.v9)(L.A.sendTokenState),
                        y = h.fromChainId,
                        x = h.toChainId,
                        w = h.status,
                        T = h.sendTokenSelected,
                        S = h.customRecipientAddress,
                        N = h.isCustomRecipientAddressInputValid,
                        C = h.ethSendAmount,
                        I = h.isLoadingFees,
                        B = (0, Z.v9)(f.LQ.selectXDEFIState),
                        P = B.isXFIOnWindow,
                        F = B.bitcoinAccount,
                        D = B.isXDEFIOnTestnet,
                        X = (0, A.TP)(y) && r,
                        R = (0, A.TP)(y) && !r,
                        _ = !(0, A.TP)(y) && (!s || !r),
                        U = !!(y && o && y !== o.toString() && !(0, A.TP)(y)),
                        V = W && D || !W && !D,
                        Y = !!(s && i && y && o && y === o.toString() && !(0, A.TP)(y)),
                        K = !!(P && F && V && y && (0, A.TP)(y)),
                        J = (0, A.TP)(y) || (0, A.TP)(x),
                        $ = !!(r && (Y || K) && x && T && Number(C) && w !== H.fq.SigningInWallet && !m && !I && (J && N && S || !J));
                    if (X) {
                        if (!P || !F) return (0, O.tZ)(b.kHo, {
                            onClick: function() {
                                return u({
                                    network: G.ll
                                })
                            },
                            children: n.hub.shared.connectXDEFIWallet
                        });
                        if (!V) return (0, O.tZ)(b.kHo, {
                            onClick: function() {
                                return p({
                                    network: G.ll
                                })
                            },
                            children: n.hub.shared.switchXDEFITo.replace("[X]", n.hub.shared[G.ll])
                        })
                    }
                    return _ || R ? (0, O.tZ)(M.pB, {
                        onGetStartedClick: function() {
                            return (0, v.L9)(v._E.HubSendGetStartedClicked)
                        },
                        onConnectWalletClick: function() {
                            return (0, v.L9)(v._E.HubSendConnectWalletClicked)
                        }
                    }) : U ? (0, O.tZ)(b.kHo, {
                        onClick: function() {
                            null == d || d(Number(y)), (0, v.L9)(v._E.HubSendSwitchNetworkClicked)
                        },
                        children: n.hub.shared.switchToNetwork.replace("[X]", E.lL.get(A.Gl[y]))
                    }) : (0, O.tZ)(q, {
                        children: (0, O.BX)(b.kHo, {
                            onClick: function() {
                                var e, n;
                                c(), t(), (0, v.L9)(v._E.HubSendConfirmSendClicked, (n = {}, (0, j.Z)(n, v.gp.Amount, C), (0, j.Z)(n, v.gp.Token, null !== (e = null == T ? void 0 : T.symbol) && void 0 !== e ? e : ""), (0, j.Z)(n, v.gp.FromNetwork, y ? A.kt[y].label : ""), (0, j.Z)(n, v.gp.ToNetwork, x ? A.kt[x].label : ""), n))
                            },
                            disabled: !$,
                            isLoading: w === H.fq.SigningInWallet,
                            children: [n.hub.send.send, " ", null == T ? void 0 : T.symbol]
                        })
                    })
                },
                K = n(64691),
                J = n(60045),
                $ = function() {
                    var e, t = (0, g.AA)().copy,
                        n = (0, Z.I0)(),
                        r = (0, Z.v9)(L.A.sendTokenState),
                        a = r.status,
                        i = r.sendTokenSelected,
                        o = r.fromChainId,
                        s = (0, Z.v9)(Q.hD.selectHoldingsByChainId()),
                        d = s.holdingsByChainId,
                        c = s.isLoadingHoldings,
                        l = o && null != i && i.symbol ? null === (e = d[o]) || void 0 === e ? void 0 : e[i.symbol] : null,
                        u = null != l && l.balance ? (0, v.bM)((null == l ? void 0 : l.balance) || "0", (null == i ? void 0 : i.decimals) || 18) : null,
                        p = !!(Number(u) && !c && a !== H.fq.SigningInWallet);
                    return (0, O.BX)("div", {
                        className: "flex items-center justify-end flex-wrap gap-1",
                        children: [(0, O.BX)(m.Z, {
                            variant: "caption",
                            className: "text-right overflow-auto",
                            children: [c && (0, O.tZ)(K.Z, {
                                variant: "text",
                                width: 100,
                                height: 15
                            }), !!l && !c && (0, O.BX)("span", {
                                className: "text-grey-400 dark:text-grey-300",
                                children: [t.hub.send.balance, ": ", l.formattedBalance, " ", null == i ? void 0 : i.symbol]
                            })]
                        }), !!l && !c && (0, O.tZ)("button", {
                            type: "button",
                            className: (0, J.default)("text-[10px] font-medium text-green-100 dark:text-green-50 bg-positive-200 dark:bg-[#0A2A26] flex justify-center items-center px-2 py-0.5 rounded-full uppercase", {
                                "opacity-50 cursor-default": !p
                            }),
                            onClick: function() {
                                u && n(R.P.setEthSendAmount(u))
                            },
                            disabled: !p,
                            children: t.hub.shared.max
                        })]
                    })
                },
                ee = n(40559),
                et = n(83039),
                en = (0, S.Z)("input", {
                    target: "eui7r3p0"
                })({
                    name: "1xxfwbs",
                    styles: "width:100%;border-radius:0.125rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(239 241 244 / var(--tw-bg-opacity));padding:0.5rem;font-size:0.875rem;line-height:130%;outline:2px solid transparent;outline-offset:2px;::placeholder{--tw-text-opacity:1;color:rgb(105 110 117 / var(--tw-text-opacity));}.dark &{--tw-bg-opacity:1;background-color:rgb(31 35 40 / var(--tw-bg-opacity));}.dark &::placeholder{--tw-text-opacity:1;color:rgb(169 172 176 / var(--tw-text-opacity));}"
                }),
                er = function(e) {
                    var t = e.disabled,
                        n = void 0 !== t && t,
                        r = (0, g.AA)().copy,
                        a = (0, z.Os)(),
                        i = a.address,
                        o = a.isConnected,
                        s = (0, Z.I0)(),
                        d = (0, Z.v9)(L.A.sendTokenState),
                        c = d.customRecipientAddress,
                        l = d.isCustomRecipientAddressInputOpen,
                        u = d.isCustomRecipientAddressInputValid,
                        p = d.fromChainId,
                        f = d.toChainId,
                        v = (0, w.useState)(null != c ? c : ""),
                        y = v[0],
                        k = v[1],
                        T = (0, A.TP)(p),
                        S = (0, A.TP)(f),
                        N = T || S,
                        C = (0, w.useCallback)(function(e) {
                            var t = e.target.value,
                                n = S ? (0, et.Gu)(t, G.ll) : (0, x.isAddress)(t);
                            if (t && !n) {
                                s(R.P.setIsCustomRecipientAddressInputValid(!1)), s(R.P.setCustomRecipientAddress(null));
                                return
                            }
                            s(R.P.setIsCustomRecipientAddressInputValid(!0)), s(R.P.setCustomRecipientAddress(t))
                        }, [s, S]);
                    return (0, w.useEffect)(function() {
                        o && i && !c && !S && (s(R.P.setCustomRecipientAddress(i)), k(i), s(R.P.setIsCustomRecipientAddressInputValid(!0)), s(R.P.setIsCustomRecipientAddressInputOpen(!1)))
                    }, [s, i, o]), (0, w.useEffect)(function() {
                        if (c || y) {
                            var e = c || y;
                            if (!(S ? (0, et.Gu)(e, G.ll) : (0, x.isAddress)(e))) {
                                s(R.P.setIsCustomRecipientAddressInputValid(!1)), s(R.P.setCustomRecipientAddress(null));
                                return
                            }
                            s(R.P.setIsCustomRecipientAddressInputValid(!0)), s(R.P.setCustomRecipientAddress(e))
                        }
                    }, [s, S]), (0, O.tZ)(ee.Z, { in: l || N,
                        children: (0, O.BX)("div", {
                            className: "p-4 sm:px-6 pt-0",
                            children: [(0, O.BX)("div", {
                                className: "flex items-center gap-1 mb-3",
                                children: [(0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    children: r.hub.send.recipientAddress
                                }), (0, O.tZ)(h.Z, {
                                    title: r.hub.send.recipientAddressInfo,
                                    placement: "top",
                                    children: (0, O.tZ)("span", {
                                        className: "flex-shrink-0 leading-none",
                                        children: (0, O.tZ)(b.VzH, {})
                                    })
                                })]
                            }), (0, O.tZ)(en, {
                                className: (0, J.default)({
                                    "border-negative-500 dark:border-red-500": !u,
                                    "border-grey-200 dark:border-grey-500": u,
                                    "opacity-60": n
                                }),
                                value: y,
                                placeholder: r.hub.send[N ? "enterRecipientAddress" : "enterOptionalAddress"],
                                onChange: function(e) {
                                    k(e.target.value), u || s(R.P.setIsCustomRecipientAddressInputValid(!0))
                                },
                                onBlur: C,
                                onKeyDown: function(e) {
                                    "Enter" === e.key && C(e)
                                },
                                disabled: n
                            }), !u && (0, O.tZ)(m.Z, {
                                variant: "caption",
                                className: "text-negative-500 dark:text-red-500 mt-1",
                                children: (0, A.TP)(f) ? r.hub.send[G.N2.isTestnet ? "enterValidBitcoinTestnetAddress" : "enterValidBitcoinAddress"] : r.hub.send.enterValidEVMAddress
                            })]
                        })
                    })
                },
                ea = n(85243),
                ei = n(91064),
                eo = function() {
                    var e, t = (0, g.AA)().locale,
                        n = (0, Z.v9)(L.A.sendTokenState),
                        r = n.sendTokenSelected,
                        a = n.ethSendAmount,
                        i = n.zetaNetworkFees,
                        o = n.destinationNetworkFees,
                        s = null !== (e = null == r ? void 0 : r.decimals) && void 0 !== e ? e : 18,
                        d = (0, v.bM)((0, x.parseUnits)(a || "0", s).sub(i || "0").sub(o || "0").toString(), s);
                    return {
                        totalToReceiveCopy: "".concat((0, ei.dN)(d, t), " ").concat(null == r ? void 0 : r.symbol)
                    }
                },
                es = n(67543),
                ed = {
                    normal: "body1",
                    accordion: "caption"
                },
                ec = "".concat(es.SZ.zetaDocsLink, "developers/cross-chain-messaging/gas-fees/"),
                el = {
                    initial: {
                        opacity: 0,
                        y: -15
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: 15
                    }
                },
                eu = n(88932),
                ep = function(e) {
                    var t = e.label,
                        n = e.amount,
                        r = e.tokenSymbol,
                        a = e.isLoading,
                        i = e.variant,
                        o = void 0 === i ? "normal" : i,
                        s = e.href,
                        d = (0, g.AA)().locale,
                        c = "".concat((0, ei.dN)(n || "0", d), " ").concat(r);
                    return (0, O.BX)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, O.tZ)(eu.gM, {
                            href: s,
                            target: "_blank",
                            className: "font-medium text-green-100 hover:text-green-50 transition-all",
                            children: (0, O.BX)(m.Z, {
                                variant: ed[o],
                                className: (0, J.default)({
                                    "text-grey-400 dark:text-grey-300": !s,
                                    "text-inherit flex items-center gap-1": s
                                }),
                                children: [t, s && (0, O.tZ)(b.Q7S, {
                                    className: "text-inherit"
                                })]
                            })
                        }), (0, O.tZ)(m.Z, {
                            variant: ed[o],
                            className: "font-mono text-grey-400 dark:text-grey-300 text-right",
                            children: a ? (0, O.tZ)(K.Z, {
                                width: 80
                            }) : c
                        })]
                    })
                },
                em = function(e) {
                    var t = e.variant,
                        n = void 0 === t ? "normal" : t,
                        r = (0, g.AA)().copy,
                        a = (0, Z.v9)(L.A.sendTokenState),
                        i = a.ethSendAmount,
                        o = a.zetaNetworkFees,
                        s = a.destinationNetworkFees,
                        d = a.isLoadingFees,
                        c = a.sendTokenSelected;
                    return Number(i) && c ? (0, O.BX)(ea.E.div, {
                        initial: {
                            opacity: 0,
                            y: -15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 15
                        },
                        className: "flex flex-col gap-1 sm:gap-2 my-3",
                        children: [(0, O.tZ)(ep, {
                            label: r.hub.send.sendAmount,
                            amount: i,
                            tokenSymbol: c.symbol,
                            variant: n
                        }), (0, y.isZetaToken)(c.symbol) && (0, O.tZ)(ep, {
                            label: r.hub.send.zetaNetworkFees,
                            amount: o && (0, v.bM)("-".concat(o), c.decimals),
                            tokenSymbol: c.symbol,
                            isLoading: d,
                            variant: n,
                            href: ec
                        }), (0, O.tZ)(ep, {
                            label: r.hub.send.destinationFees,
                            amount: s && (0, v.bM)("-".concat(s), c.decimals),
                            tokenSymbol: c.symbol,
                            isLoading: d,
                            variant: n
                        })]
                    }) : null
                },
                eh = n(89218),
                eb = n.n(eh);

            function ef(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eg(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ef(Object(n), !0).forEach(function(t) {
                        (0, j.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ev = function(e) {
                var t = e.withMotion,
                    n = (0, g.AA)().copy,
                    r = (0, Z.v9)(L.A.sendTokenState).isLoadingFees,
                    a = eo().totalToReceiveCopy;
                return (0, O.tZ)(ea.E.div, eg(eg({}, void 0 === t || t ? el : {}), {}, {
                    children: (0, O.tZ)(m.Z, {
                        variant: "caption",
                        className: "text-grey-400 dark:text-grey-300",
                        children: r ? (0, O.BX)(O.HY, {
                            children: [(0, O.tZ)(K.Z, {
                                variant: "text"
                            }), (0, O.tZ)(K.Z, {
                                variant: "text"
                            })]
                        }) : (0, O.BX)(O.HY, {
                            children: [n.hub.send.receiveAtLeast.replace("[X]", a), " ", n.hub.shared.learnMore, " ", (0, O.tZ)(eb(), {
                                href: "".concat(es.SZ.glossaryLink, "#revert"),
                                target: "_blank",
                                children: (0, O.tZ)("b", {
                                    children: n.hub.shared.here
                                })
                            }), "."]
                        })
                    })
                }))
            };

            function ey(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ex(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ey(Object(n), !0).forEach(function(t) {
                        (0, j.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ey(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ek = function() {
                    var e = (0, g.AA)().copy,
                        t = (0, Z.v9)(L.A.sendTokenState),
                        n = t.sendTokenSelected,
                        r = t.ethSendAmount,
                        a = t.isLoadingFees,
                        i = t.toChainId,
                        o = t.errors,
                        s = eo().totalToReceiveCopy;
                    if (!n || !Number(r) || !i) return null;
                    var d = !o.includes(H.HT.InputAmountTooSmall);
                    return (0, O.BX)(O.HY, {
                        children: [d && (0, O.tZ)(ev, {}), (0, O.tZ)(em, {}), d && (0, O.BX)(ea.E.div, ex(ex({}, el), {}, {
                            children: [(0, O.tZ)("hr", {
                                className: "text-grey-200 dark:text-grey-600"
                            }), (0, O.BX)("div", {
                                className: "flex items-center justify-between my-3",
                                children: [(0, O.tZ)(m.Z, {
                                    variant: "body1",
                                    children: e.hub.send.totalYouWillReceive
                                }), (0, O.tZ)(m.Z, {
                                    variant: "body1",
                                    className: "font-mono font-medium text-right",
                                    children: a ? (0, O.tZ)(K.Z, {
                                        width: 80
                                    }) : s
                                })]
                            })]
                        }))]
                    })
                },
                ew = {
                    name: "nqxo1b",
                    styles: "cursor:pointer;.send-img{display:block;}.switch-img{display:none;}&:hover{--tw-bg-opacity:1;background-color:rgb(229 232 236 / var(--tw-bg-opacity));.dark &{--tw-bg-opacity:1;background-color:rgb(21 25 30 / var(--tw-bg-opacity));} .send-img{display:none;}.switch-img{display:block;}}"
                },
                eZ = (0, S.Z)("button", {
                    target: "e1qvu4tb0"
                })("position:absolute;top:-13px;left:50%;z-index:1;display:flex;height:25px;width:25px;--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-rotate:-90deg;cursor:default;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-border-opacity:1;border-color:rgb(229 232 236 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;.dark &{--tw-border-opacity:1;border-color:rgb(21 25 30 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));} ", function(e) {
                    return e.isSwitchEnabled && ew
                }, ";"),
                eT = function(e) {
                    var t = e.fromChainId,
                        n = e.toChainId,
                        r = e.onClick,
                        a = !!(t && n);
                    return (0, O.BX)(eZ, {
                        onClick: function() {
                            return a && r()
                        },
                        isSwitchEnabled: a,
                        children: [(0, O.tZ)("div", {
                            className: "send-img relative w-[9px] h-[9px]",
                            children: (0, O.tZ)(C(), {
                                src: es.RI,
                                layout: "fill",
                                alt: "send"
                            })
                        }), a && (0, O.tZ)("div", {
                            className: "switch-img relative w-[13px] h-[13px]",
                            children: (0, O.tZ)(C(), {
                                src: es.UK,
                                layout: "fill",
                                alt: "switch"
                            })
                        })]
                    })
                },
                eS = function(e) {
                    var t = e.chainId,
                        n = (0, g.AA)().copy,
                        r = E.lL.get(A.Gl[t]),
                        a = I.ap.get(A.Gl[t]);
                    return (0, O.BX)("div", {
                        className: "flex items-center gap-2",
                        children: [a && (0, O.tZ)("div", {
                            className: "flex items-center flex-shrink-0",
                            children: (0, O.tZ)(C(), {
                                src: a,
                                alt: r,
                                width: 24,
                                height: 24
                            })
                        }), (0, O.BX)("div", {
                            children: [(0, O.tZ)(m.Z, {
                                variant: "caption",
                                className: "font-medium text-left",
                                children: r
                            }), (0, O.tZ)(m.Z, {
                                variant: "caption",
                                className: "text-grey-400 dark:text-grey-300 text-left",
                                children: n.hub.sendZeta.network
                            })]
                        })]
                    })
                },
                eN = (0, S.Z)(b.kHo, {
                    target: "edlg8kt0"
                })({
                    name: "6h3kwo",
                    styles: "&&{margin-top:0.5rem;margin-bottom:0.5rem;height:3rem;justify-content:space-between;padding:0.5rem;:disabled{opacity:0.6;};}>div{margin-left:0px;margin-right:0px;display:flex;width:100%;justify-content:space-between;;}"
                }),
                eC = function(e) {
                    var t = e.isActive,
                        n = e.placeholderText,
                        r = e.chainId,
                        a = e.onClick,
                        i = e.isDisabled,
                        o = A.Kn.safeParse(String(r)),
                        s = o.success;
                    return (0, O.BX)(eN, {
                        className: (0, J.default)({
                            "dark:!bg-grey-800 !bg-grey-200 dark:hover:!bg-grey-700 hover:!bg-grey-300/60": t
                        }),
                        onClick: a,
                        disabled: i,
                        children: [s ? (0, O.tZ)(eS, {
                            chainId: o.data
                        }) : (0, O.tZ)(m.Z, {
                            variant: "caption",
                            className: (0, J.default)("font-medium", {
                                "text-white": !t
                            }),
                            children: n
                        }), (0, O.tZ)(b.C26, {
                            className: (0, J.default)("h-5 w-5", {
                                "text-grey-500 dark:text-grey-200": s,
                                "text-white": !t
                            })
                        })]
                    })
                },
                eA = (0, S.Z)("div", {
                    target: "ezkxr3n1"
                })({
                    name: "13fbi6s",
                    styles: "position:relative;display:flex;flex-direction:column;gap:1rem;border-bottom-right-radius:0.25rem;border-bottom-left-radius:0.25rem;padding:1rem;.dark &{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));}@media (min-width: 600px){flex-direction:row;padding-left:1.5rem;padding-right:1.5rem;}"
                }),
                eI = (0, S.Z)("div", {
                    target: "ezkxr3n0"
                })({
                    name: "1nxpo4p",
                    styles: "display:flex;flex-direction:column;gap:0.375rem;flex-basis:100%;@media (min-width: 600px){flex-basis:50%;}"
                }),
                eE = function(e) {
                    var t = e.from,
                        n = e.to,
                        r = e.disabled,
                        a = void 0 !== r && r,
                        i = (0, g.AA)().copy,
                        o = (0, Z.I0)(),
                        s = (0, Z.v9)(L.A.sendTokenState),
                        d = s.isCustomRecipientAddressInputOpen,
                        c = s.customRecipientAddress,
                        l = (0, A.TP)(t.chainId),
                        u = (0, A.TP)(n.chainId);
                    return (0, O.BX)(eA, {
                        children: [(0, O.tZ)(eT, {
                            fromChainId: t.chainId,
                            toChainId: n.chainId,
                            onClick: function() {
                                o(R.P.switchFromAndToChainIds({
                                    fromChainId: t.chainId,
                                    toChainId: n.chainId
                                })), (0, v.L9)(v._E.HubSendSwitchFromAndToNetworksClicked)
                            }
                        }), (0, O.BX)(eI, {
                            children: [(0, O.tZ)(m.Z, {
                                variant: "caption",
                                children: i.hub.sendZeta.from
                            }), (0, O.tZ)(eC, {
                                placeholderText: i.hub.sendZeta.fromNetwork,
                                chainId: t.chainId,
                                onClick: function() {
                                    t.openDialog(), (0, v.L9)(v._E.HubSendFromNetworkSelectorClicked)
                                },
                                isActive: !!t.chainId,
                                isDisabled: t.isButtonDisabled || a
                            })]
                        }), (0, O.BX)(eI, {
                            children: [(0, O.BX)("div", {
                                className: "flex justify-between",
                                children: [(0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    children: i.hub.sendZeta.to
                                }), !(l || u) && (0, O.tZ)("button", {
                                    type: "button",
                                    onClick: function() {
                                        return o(R.P.setIsCustomRecipientAddressInputOpen(!d))
                                    },
                                    disabled: a,
                                    children: (0, O.tZ)(m.Z, {
                                        variant: "caption",
                                        className: (0, J.default)("flex items-center gap-0.5 font-medium text-green-100", {
                                            "hover:text-green-50 transition-all": !a,
                                            "opacity-75": a
                                        }),
                                        children: c ? (0, O.BX)(O.HY, {
                                            children: [(0, O.tZ)(b.yl5, {
                                                className: "h-3 w-3"
                                            }), (0, v.Xn)(c, 6, 4)]
                                        }) : (0, O.BX)(O.HY, {
                                            children: [d ? (0, O.tZ)(b.UrD, {
                                                className: "h-3 w-3"
                                            }) : (0, O.tZ)(b.SC9, {
                                                className: "h-3 w-3"
                                            }), i.hub.send.customRecipient]
                                        })
                                    })
                                })]
                            }), (0, O.tZ)(eC, {
                                placeholderText: i.hub.sendZeta.toNetwork,
                                chainId: n.chainId,
                                onClick: function() {
                                    n.openDialog(), (0, v.L9)(v._E.HubSendToNetworkSelectorClicked)
                                },
                                isActive: !t.chainId || !!n.chainId,
                                isDisabled: n.isButtonDisabled || !t.chainId || a
                            })]
                        })]
                    })
                },
                eO = n(9185),
                eB = function(e) {
                    var t = e.to,
                        n = e.from,
                        r = (0, Z.v9)(L.A.sendTokenState),
                        a = r.fromChainId,
                        i = r.toChainId,
                        o = r.isSelectFromNetworkDialogOpen,
                        s = r.isSelectToNetworkDialogOpen,
                        d = (0, Z.I0)(),
                        c = (0, w.useCallback)(function(e) {
                            d(R.P.setFromChainId(e)), (0, v.L9)(v._E.HubSendFromNetworkSelected, (0, j.Z)({}, v.gp.Network, eO.kt[e].label))
                        }, [d]),
                        l = (0, w.useCallback)(function(e) {
                            d(R.P.setToChainId(e)), (0, v.L9)(v._E.HubSendToNetworkSelected, (0, j.Z)({}, v.gp.Network, eO.kt[e].label))
                        }, [d]);
                    (0, w.useEffect)(function() {
                        if (null != n && n.defaultChainId) {
                            var e = n.defaultChainId.toString(),
                                t = eO.Kn.safeParse(e);
                            (0, H.hC)(e) && t.success && c(t.data)
                        }
                    }, [null == n ? void 0 : n.defaultChainId, c]), (0, w.useEffect)(function() {
                        if (null != t && t.defaultChainId) {
                            var e = t.defaultChainId.toString(),
                                n = eO.Kn.safeParse(e);
                            (0, H.hC)(e) && n.success && l(n.data)
                        }
                    }, [l, null == t ? void 0 : t.defaultChainId]);
                    var u = H._C.filter(function(e) {
                            return e.id !== Number(a)
                        }),
                        p = (0, eO.TP)(a),
                        m = (0, eO.eh)(a),
                        h = H._C.filter(function(e) {
                            return e.id !== Number(a) && (!(0, eO.TP)(String(e.id)) || m)
                        });
                    return {
                        from: {
                            chainId: a,
                            isDialogOpen: o,
                            isButtonDisabled: null == n ? void 0 : n.isSelectionDisabled,
                            openDialog: function() {
                                return d(R.P.setIsSelectFromNetworkDialogOpen(!0))
                            },
                            closeDialog: function() {
                                return d(R.P.setIsSelectFromNetworkDialogOpen(!1))
                            },
                            selectFromNetwork: c,
                            chains: u
                        },
                        to: {
                            chainId: i,
                            isDialogOpen: s,
                            isButtonDisabled: null == t ? void 0 : t.isSelectionDisabled,
                            openDialog: function() {
                                return d(R.P.setIsSelectToNetworkDialogOpen(!0))
                            },
                            closeDialog: function() {
                                return d(R.P.setIsSelectToNetworkDialogOpen(!1))
                            },
                            selectToNetwork: l,
                            chains: p ? [G.N2.defaultChain] : h
                        }
                    }
                },
                eP = ((r = {}).SendGasTokenFromSupportedNetworkToZetaChain = "SendGasTokenFromSupportedNetworkToZetaChain", r.SendGasTokensFromZetaChainToNativeNetwork = "SendGasTokensFromZetaChainToNativeNetwork", r.SendGasTokensFromSupportedNetworkToSupportedNetwork = "SendGasTokensFromSupportedNetworkToSupportedNetwork", r.SendZetaFromSupportedNetworkToSupportedNetwork = "SendZetaFromSupportedNetworkToSupportedNetwork", r.SendZetaFromSupportedNetworkToZetaChain = "SendZetaFromSupportedNetworkToZetaChain", r.SendZetaFromZetaChainToSupportedNetwork = "SendZetaFromZetaChainToSupportedNetwork", r.SendBtcFromBitcoinToZetaChain = "SendBtcFromBitcoinToZetaChain", r.SendBtcFromZetaChainToBitcoin = "SendBtcFromZetaChainToBitcoin", r),
                eF = (a = (0, c.Z)(p().mark(function e(t) {
                    var n, r, a, i, o;
                    return p().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.senderAddress, r = t.receiverAddress, a = t.amount, e.prev = 1, i = (0, f.w4)({
                                    destinationAddress: r
                                }), e.next = 5, (0, f.Fi)({
                                    from: n,
                                    recipient: (0, y.getAddressesByChain)(G.N2.isTestnet ? "btc-testnet" : "btc").tss,
                                    amount: {
                                        amount: a.toString(),
                                        decimals: "8"
                                    },
                                    memo: i
                                });
                            case 5:
                                return o = e.sent, e.next = 8, (0, v._v)(2e4);
                            case 8:
                                return e.abrupt("return", {
                                    txHash: o
                                });
                            case 11:
                                throw e.prev = 11, e.t0 = e.catch(1), console.error("Error [sendBtcFromBitcoinToZetaChain]", e.t0), Error(e.t0);
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [1, 11]
                    ])
                })), function(e) {
                    return a.apply(this, arguments)
                }),
                eD = (i = (0, c.Z)(p().mark(function e(t) {
                    var n, r, a, i, o;
                    return p().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.signer, r = t.chainName, a = t.amount, e.prev = 1, n) {
                                    e.next = 4;
                                    break
                                }
                                throw Error("Signer not found");
                            case 4:
                                return i = (0, y.getAddressesByChain)(r).tss, e.next = 7, n.sendTransaction({
                                    to: i,
                                    value: a
                                });
                            case 7:
                                return o = e.sent, e.next = 10, o.wait();
                            case 10:
                                return e.abrupt("return", {
                                    txHash: o.hash
                                });
                            case 13:
                                throw e.prev = 13, e.t0 = e.catch(1), console.error("[Send Gas Token ERROR]", e.t0), Error(e.t0.message);
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [1, 13]
                    ])
                })), function(e) {
                    return i.apply(this, arguments)
                }),
                eX = n(53851),
                eH = n(15680),
                eR = n(84544);

            function eL() {
                return (eL = (0, c.Z)(p().mark(function e(t, n, r, a) {
                    var i, o, s, d, c, l;
                    return p().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, o = new eH.CH(n, ["function approve(address spender, uint256 amount) external returns (bool)"], a), e.next = 4, o.approve(r, t, {
                                    gasLimit: 4e5
                                });
                            case 4:
                                return s = e.sent, e.next = 7, s.wait();
                            case 7:
                                d = e.sent, c = new eR.vU(["event Approval(address indexed owner, address indexed spender, uint256 value)"]), (null == (l = null === (i = d.events) || void 0 === i ? void 0 : i.filter(function(e) {
                                    var t;
                                    return (null === (t = e.topics) || void 0 === t ? void 0 : t.length) > 0
                                })) ? void 0 : l.find(function(e) {
                                    return e.topics[0] === c.getEventTopic("Approval")
                                })) || console.error("Approval failed: ".concat(d), d), e.next = 18;
                                break;
                            case 14:
                                throw e.prev = 14, e.t0 = e.catch(0), console.error("[Approve Token Allowance ERROR]", e.t0), Error(JSON.stringify(e.t0));
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [0, 14]
                    ])
                }))).apply(this, arguments)
            }
            var e_ = (o = (0, c.Z)(p().mark(function e(t) {
                    var n, r, a, i, o, s, d, c, l, u, m;
                    return p().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.chainName, r = t.signer, a = t.amount, i = t.userAddress, o = t.toChainId, e.prev = 1, !(!n || !r)) {
                                    e.next = 4;
                                    break
                                }
                                throw Error("Missing chain name or signer");
                            case 4:
                                return d = (s = (0, y.getAddressesByChain)(n)).zetaToken, c = s.multiChainValue, l = y.ZETAABI__factory.connect(c, r), e.next = 8, (0, eX.mN)({
                                    routerAddress: c,
                                    signerOrProvider: r
                                });
                            case 8:
                                if (u = e.sent) {
                                    e.next = 12;
                                    break
                                }
                                throw console.error("[Send Zeta ERROR] Unabled to get router"), Error("Unabled to get router");
                            case 12:
                                return e.next = 14, (0, eX.ri)({
                                    tokenAddress: d,
                                    signerOrProvider: r,
                                    account: i,
                                    routerContract: u
                                });
                            case 14:
                                if (!e.sent.lt(a)) {
                                    e.next = 18;
                                    break
                                }
                                return e.next = 18,
                                    function(e, t, n, r) {
                                        return eL.apply(this, arguments)
                                    }(a, d, c, r);
                            case 18:
                                return e.next = 20, l.send(o, i, a.toString(), {
                                    gasLimit: 4e5
                                });
                            case 20:
                                return m = e.sent, e.next = 23, m.wait();
                            case 23:
                                return e.abrupt("return", {
                                    txHash: m.hash
                                });
                            case 26:
                                throw e.prev = 26, e.t0 = e.catch(1), console.error("Error [sendZetaFromSupportedNetwork]", e.t0), e.t0;
                            case 30:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [1, 26]
                    ])
                })), function(e) {
                    return o.apply(this, arguments)
                }),
                ej = (s = (0, c.Z)(p().mark(function e(t) {
                    var n, r, a, i, o, s, d, c;
                    return p().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.chainName, r = t.signer, a = t.amount, i = t.userAddress, o = t.toChainId, e.prev = 1, !(!n || !r)) {
                                    e.next = 4;
                                    break
                                }
                                throw Error("Missing chain name or signer");
                            case 4:
                                return s = (0, y.getAddressesByChain)(n).multiChainValue, d = y.ZETAABI__factory.connect(s, r), e.next = 8, d.sendZeta(o, i, {
                                    value: a.toString(),
                                    gasLimit: 4e5
                                });
                            case 8:
                                return c = e.sent, e.next = 11, c.wait();
                            case 11:
                                return e.abrupt("return", {
                                    txHash: c.hash
                                });
                            case 14:
                                throw e.prev = 14, e.t0 = e.catch(1), console.error("Error [sendZetaFromZetachainToSupportedNetwork]", e.t0), Error(e.t0.message);
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [1, 14]
                    ])
                })), function(e) {
                    return s.apply(this, arguments)
                }),
                eM = n(77875),
                ez = n(87997),
                eG = n(77903);

            function eQ() {
                return (eQ = (0, c.Z)(p().mark(function e(t) {
                    var n, r, a, i, o, s, d, c, l, u;
                    return p().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.sendTokenSymbol, r = t.amount, a = t.signer, i = t.senderAddress, o = t.receiverAddress, e.prev = 1, s = G.N2.zrc20TokenAddresses[n]) {
                                    e.next = 5;
                                    break
                                }
                                throw Error("ZRC-20 ".concat(n, " address not found."));
                            case 5:
                                return d = new eH.CH(s, eM.M, a), e.next = 8, d.balanceOf(i);
                            case 8:
                                if (!e.sent.lt(r)) {
                                    e.next = 11;
                                    break
                                }
                                throw Error("Insufficient balance");
                            case 11:
                                return e.next = 13, d.allowance(i, s);
                            case 13:
                                if (!e.sent.lt(r)) {
                                    e.next = 20;
                                    break
                                }
                                return e.next = 17, d.approve(s, r, {
                                    gasLimit: 4e5
                                });
                            case 17:
                                return c = e.sent, e.next = 20, c.wait();
                            case 20:
                                return l = (0, y.isBtcToken)(n) ? ez.Y0(o) : new eG.R().encode(["address"], [o]), e.next = 23, d.withdraw(l, r, {
                                    gasLimit: 1e6
                                });
                            case 23:
                                return u = e.sent, e.next = 26, u.wait();
                            case 26:
                                return e.abrupt("return", {
                                    txHash: u.hash
                                });
                            case 29:
                                throw e.prev = 29, e.t0 = e.catch(1), console.error("[Withdraw Gas tokens from Zetachain ERROR]", e.t0), Error(e.t0.message);
                            case 33:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [1, 29]
                    ])
                }))).apply(this, arguments)
            }

            function eU() {
                return (eU = (0, c.Z)(p().mark(function e(t) {
                    var n, r, a, i, o, s;
                    return p().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.fromChainId, r = t.toChainId, a = t.sendTokenSymbol, i = t.senderAddress, o = t.receiverAddress, s = t.amount, !(!n || !(0, H.hC)(n))) {
                                    e.next = 4;
                                    break
                                }
                                throw console.error("[FAILED TO SEND] Invalid fromChainId"), Error("Invalid fromChainId");
                            case 4:
                                if (!(!r || !(0, H.hC)(r))) {
                                    e.next = 7;
                                    break
                                }
                                throw console.error("[FAILED TO SEND] Invalid toChainId"), Error("Invalid toChainId");
                            case 7:
                                if (a) {
                                    e.next = 10;
                                    break
                                }
                                throw console.error("[FAILED TO SEND] No sendTokenSymbol"), Error("Missing sendTokenSymbol");
                            case 10:
                                if (i) {
                                    e.next = 13;
                                    break
                                }
                                throw console.error("[FAILED TO SEND] No senderAddress"), Error("Missing address");
                            case 13:
                                if (o) {
                                    e.next = 16;
                                    break
                                }
                                throw console.error("[FAILED TO SEND] No receiverAddress"), Error("Missing address");
                            case 16:
                                if (!(!s || s.eq(0))) {
                                    e.next = 19;
                                    break
                                }
                                throw console.error("[FAILED TO SEND] No amount"), Error("Missing amount");
                            case 19:
                                if (!(!(0, A.TP)(n) && "signer" in t && !t.signer)) {
                                    e.next = 22;
                                    break
                                }
                                throw console.error("[FAILED TO SEND] No EVM signer"), Error("No EVM signer");
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var eV = (d = (0, c.Z)(p().mark(function e(t) {
                    var n, r, a, i, o, s, d, c, l, u, m, h, b, f;
                    return p().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.fromChainId, r = t.toChainId, a = t.sendTokenSymbol, i = t.senderAddress, o = t.receiverAddress, s = t.amount, d = "signer" in t ? t.signer : null, e.next = 4,
                                    function(e) {
                                        return eU.apply(this, arguments)
                                    }(t);
                            case 4:
                                c = A.ZF[n], l = function(e) {
                                    var t = e.sendTokenSymbol,
                                        n = e.fromChainId,
                                        r = e.toChainId,
                                        a = (0, y.isBtcToken)(t),
                                        i = (0, A.eh)(n),
                                        o = (0, A.eh)(r),
                                        s = (0, y.isZetaToken)(t);
                                    if (a) return o ? eP.SendBtcFromBitcoinToZetaChain : eP.SendBtcFromZetaChainToBitcoin;
                                    if (i && !o) return s ? eP.SendZetaFromZetaChainToSupportedNetwork : eP.SendGasTokensFromZetaChainToNativeNetwork;
                                    if (!i) return o ? s ? eP.SendZetaFromSupportedNetworkToZetaChain : eP.SendGasTokenFromSupportedNetworkToZetaChain : s ? eP.SendZetaFromSupportedNetworkToSupportedNetwork : eP.SendGasTokensFromSupportedNetworkToSupportedNetwork;
                                    throw Error("Send type not supported")
                                }({
                                    sendTokenSymbol: a,
                                    fromChainId: n,
                                    toChainId: r
                                }), e.t0 = l, e.next = e.t0 === eP.SendGasTokensFromSupportedNetworkToSupportedNetwork ? 9 : e.t0 === eP.SendGasTokenFromSupportedNetworkToZetaChain ? 9 : e.t0 === eP.SendZetaFromSupportedNetworkToZetaChain ? 13 : e.t0 === eP.SendZetaFromSupportedNetworkToSupportedNetwork ? 13 : e.t0 === eP.SendZetaFromZetaChainToSupportedNetwork ? 17 : e.t0 === eP.SendGasTokensFromZetaChainToNativeNetwork ? 21 : e.t0 === eP.SendBtcFromZetaChainToBitcoin ? 21 : e.t0 === eP.SendBtcFromBitcoinToZetaChain ? 25 : 29;
                                break;
                            case 9:
                                return e.next = 11, eD({
                                    amount: s,
                                    signer: d,
                                    chainName: c
                                });
                            case 11:
                                return u = e.sent, e.abrupt("return", u);
                            case 13:
                                return e.next = 15, e_({
                                    amount: s,
                                    signer: d,
                                    chainName: c,
                                    userAddress: o,
                                    toChainId: r
                                });
                            case 15:
                                return m = e.sent, e.abrupt("return", m);
                            case 17:
                                return e.next = 19, ej({
                                    amount: s,
                                    signer: d,
                                    chainName: c,
                                    userAddress: o,
                                    toChainId: r
                                });
                            case 19:
                                return h = e.sent, e.abrupt("return", h);
                            case 21:
                                return e.next = 23,
                                    function(e) {
                                        return eQ.apply(this, arguments)
                                    }({
                                        sendTokenSymbol: a,
                                        amount: s,
                                        signer: d,
                                        senderAddress: i,
                                        receiverAddress: o
                                    });
                            case 23:
                                return b = e.sent, e.abrupt("return", b);
                            case 25:
                                return e.next = 27, eF({
                                    amount: s,
                                    receiverAddress: o,
                                    senderAddress: i
                                });
                            case 27:
                                return f = e.sent, e.abrupt("return", f);
                            case 29:
                                throw console.error("[FAILED TO SEND] Send type not supported"), Error("Send not supported");
                            case 31:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return d.apply(this, arguments)
                }),
                eq = n(15728),
                eW = function(e, t) {
                    var n = setInterval(function() {
                        return e(R.P.incrementTimer(t))
                    }, y.ONE_SECOND_IN_MS);
                    e(R.P.registerTimer({
                        timerName: t,
                        timerId: n
                    }))
                },
                eY = function(e) {
                    var t = 0,
                        n = e;
                    return e >= 60 && (t = Math.floor(e / 60), n = e - 60 * t), "".concat(t, ":").concat(String(n).padStart(2, "0"))
                },
                eK = (0, S.Z)("div", {
                    target: "e5d90d16"
                })({
                    name: "k53wqv",
                    styles: "position:relative;margin-top:1.25rem;margin-bottom:1.25rem;display:flex;height:100%;min-height:140px;justify-content:space-between;--tw-text-opacity:1;color:rgb(105 110 117 / var(--tw-text-opacity));.dark &{--tw-text-opacity:1;color:rgb(169 172 176 / var(--tw-text-opacity));}"
                }),
                eJ = (0, S.Z)("div", {
                    target: "e5d90d15"
                })("display:flex;flex-basis:33.333333%;flex-direction:column;gap:0.5rem;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms; p{", function(e) {
                    return e.isActive ? {
                        "--tw-text-opacity": "1",
                        color: "rgb(0 0 0 / var(--tw-text-opacity))",
                        ".dark &": {
                            "--tw-text-opacity": "1",
                            color: "rgb(255 255 255 / var(--tw-text-opacity))"
                        }
                    } : {
                        "--tw-text-opacity": "1",
                        color: "rgb(105 110 117 / var(--tw-text-opacity))",
                        ".dark &": {
                            "--tw-text-opacity": "1",
                            color: "rgb(169 172 176 / var(--tw-text-opacity))"
                        }
                    }
                }, ";transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;;}"),
                e$ = (0, S.Z)("div", {
                    target: "e5d90d14"
                })("z-index:1;height:25px;width:25px;border-radius:9999px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms; ", function(e) {
                    var t = e.isSuccess;
                    return e.isError ? {
                        "--tw-bg-opacity": "1",
                        backgroundColor: "rgb(188 60 60 / var(--tw-bg-opacity))",
                        ".dark &": {
                            "--tw-bg-opacity": "1",
                            backgroundColor: "rgb(21 25 30 / var(--tw-bg-opacity))"
                        }
                    } : t ? {
                        "--tw-bg-opacity": "1",
                        backgroundColor: "rgb(0 116 87 / var(--tw-bg-opacity))",
                        ".dark &": {
                            "--tw-bg-opacity": "1",
                            backgroundColor: "rgb(21 25 30 / var(--tw-bg-opacity))"
                        }
                    } : {
                        "--tw-bg-opacity": "1",
                        backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))",
                        ".dark &": {
                            "--tw-bg-opacity": "1",
                            backgroundColor: "rgb(21 25 30 / var(--tw-bg-opacity))"
                        }
                    }
                }, ";", function(e) {
                    var t = e.isSuccess;
                    return e.isError ? {
                        borderWidth: "1px",
                        "--tw-border-opacity": "1",
                        borderColor: "rgb(188 60 60 / var(--tw-border-opacity))"
                    } : t ? {
                        borderWidth: "1px",
                        "--tw-border-opacity": "1",
                        borderColor: "rgb(0 116 87 / var(--tw-border-opacity))",
                        ".dark &": {
                            "--tw-border-opacity": "1",
                            borderColor: "rgb(0 168 125 / var(--tw-border-opacity))"
                        }
                    } : {
                        borderWidth: "1px",
                        "--tw-border-opacity": "1",
                        borderColor: "rgb(229 232 236 / var(--tw-border-opacity))",
                        ".dark &": {
                            "--tw-border-opacity": "1",
                            borderColor: "rgb(60 65 70 / var(--tw-border-opacity))"
                        }
                    }
                }, ";"),
                e0 = (0, S.Z)("div", {
                    target: "e5d90d13"
                })({
                    name: "tx3f2",
                    styles: "position:absolute;top:36px;left:0px;height:1px;"
                }),
                e1 = (0, S.Z)(e0, {
                    target: "e5d90d12"
                })({
                    name: "2jys3h",
                    styles: "width:100%;--tw-bg-opacity:1;background-color:rgb(229 232 236 / var(--tw-bg-opacity));transition-property:color, background-color, border-color, outline-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms;.dark &{--tw-bg-opacity:1;background-color:rgb(60 65 70 / var(--tw-bg-opacity));}"
                }),
                e5 = (0, S.Z)(e0, {
                    target: "e5d90d11"
                })(function(e) {
                    return e.isError ? {
                        "--tw-bg-opacity": "1",
                        backgroundColor: "rgb(188 60 60 / var(--tw-bg-opacity))"
                    } : {
                        "--tw-bg-opacity": "1",
                        backgroundColor: "rgb(0 116 87 / var(--tw-bg-opacity))",
                        ".dark &": {
                            "--tw-bg-opacity": "1",
                            backgroundColor: "rgb(0 168 125 / var(--tw-bg-opacity))"
                        }
                    }
                }, ";", function(e) {
                    var t = e.widthPercentage;
                    return "width: ".concat(t || 0, "%")
                }, ";transition:width 1.5s ease-in-out,background-color 300ms;"),
                e2 = (0, S.Z)("a", {
                    target: "e5d90d10"
                })("&&{display:inline-flex;width:min-content;cursor:pointer;align-items:center; ", function(e) {
                    return e.isActive && {
                        "--tw-text-opacity": "1",
                        color: "rgb(0 0 0 / var(--tw-text-opacity))",
                        ".dark &": {
                            "--tw-text-opacity": "1",
                            color: "rgb(255 255 255 / var(--tw-text-opacity))"
                        }
                    }
                }, ";}"),
                e3 = function(e) {
                    var t = e.txStatus,
                        n = e.isFromZetaChain,
                        r = e.isToZetaChain;
                    return n || r || t !== es.te.ZetaChainPending && !(t >= es.te.OutboundReverting) ? t >= es.te.OutboundPending || r && t >= es.te.ZetaChainPending ? 99 : 0 : 50
                },
                e4 = function(e) {
                    var t = e.inboundConfirmations,
                        n = e.txStatus,
                        r = e.txStatusData,
                        a = e.senderChainId,
                        i = e.receiverChainId,
                        o = e.sourceTxHash,
                        s = e.timers,
                        d = (0, g.AA)().copy,
                        c = (0, A.eh)(a),
                        l = (0, A.eh)(i),
                        u = (0, w.useState)(e3({
                            txStatus: n,
                            isFromZetaChain: c,
                            isToZetaChain: l
                        })),
                        p = u[0],
                        h = u[1],
                        f = s.inboundTimer,
                        y = s.zetaChainTimer,
                        x = s.outboundTimer,
                        k = s.revertTimer;
                    (0, w.useEffect)(function() {
                        h(e3({
                            txStatus: n,
                            isFromZetaChain: c,
                            isToZetaChain: l
                        }))
                    }, [c, l, n]);
                    var Z = "".concat(c ? "".concat(A.kt[G.N2.chainId].explorer, "evm/tx") : "".concat(A.kt[a].explorer, "tx"), "/").concat(o),
                        T = "".concat(A.kt[G.N2.chainId].explorer, "cc/tx/").concat(null == r ? void 0 : r.zetaChainHash),
                        S = l ? T : "".concat(A.kt[i].explorer, "tx/").concat(null == r ? void 0 : r.destinationChainHash),
                        N = a && o && n <= es.te.OutboundSuccess,
                        C = i && (!l && (null == r ? void 0 : r.destinationChainHash) || l && (null == r ? void 0 : r.zetaChainHash)),
                        I = n <= es.te.InboundSuccess || n === es.te.OutboundReverting,
                        B = n >= es.te.ZetaChainPending && n <= es.te.OutboundSuccess,
                        P = n === es.te.InboundReverted || n >= es.te.OutboundReverted,
                        F = n === es.te.ZetaChainPending,
                        D = n > es.te.ZetaChainPending && n <= es.te.OutboundSuccess,
                        X = (!l && n > es.te.ZetaChainPending || l && n >= es.te.ZetaChainPending) && n <= es.te.OutboundSuccess,
                        R = n === es.te.OutboundPending || l && F,
                        L = n === es.te.OutboundSuccess,
                        _ = n === es.te.InboundReverted || n >= es.te.OutboundReverting;
                    return (0, O.BX)(eK, {
                        children: [(0, O.BX)(eJ, {
                            isActive: I,
                            children: [(0, O.tZ)(m.Z, {
                                variant: "caption",
                                children: a ? E.lL.get(A.Gl[a]) : d.hub.send.inboundChain
                            }), (0, O.tZ)("div", {
                                className: "relative z-[1]",
                                children: c ? (0, O.tZ)(b.R3e, {
                                    isSuccess: D
                                }) : (0, O.BX)(O.HY, {
                                    children: [(0, O.tZ)(e$, {
                                        isSuccess: B,
                                        isError: P
                                    }), I && (0, O.tZ)(eq.Z, {
                                        className: (0, J.default)("absolute top-0 left-0", {
                                            "text-green-500 dark:text-green-50": n <= es.te.InboundSuccess,
                                            "text-red-500": n === es.te.OutboundReverting
                                        }),
                                        size: 25,
                                        thickness: 2
                                    }), B && (0, O.tZ)(b.NOm, {
                                        className: "absolute top-[9px] left-[7px] text-white dark:text-green-50"
                                    }), P && (0, O.tZ)(b.kLi, {
                                        className: "absolute top-[5px] left-[5px] w-[15px] h-[15px] text-white dark:text-red-500"
                                    })]
                                })
                            }), (0, O.tZ)(m.Z, {
                                variant: "caption",
                                children: function() {
                                    switch (n) {
                                        case es.te.InboundReverted:
                                            return d.hub.send.sourceTxFailed;
                                        case es.te.OutboundReverting:
                                            return d.hub.send.reverting;
                                        case es.te.OutboundReverted:
                                            return d.hub.send.reverted;
                                        case es.te.OutboundRevertFailed:
                                            return d.hub.send.revertFailed;
                                        case es.te.InboundPending:
                                        case es.te.InboundSuccess:
                                            return d.hub.send.waitingTx;
                                        default:
                                            return d.hub.send.sent
                                    }
                                }()
                            }), n !== es.te.InboundReverted && n <= es.te.OutboundSuccess && (0, O.BX)(m.Z, {
                                variant: "caption",
                                children: [t, "/", (0, A.TP)(a) ? H.YL : H.Uq, " ", d.hub.send.confirmations]
                            }), (0, O.tZ)(m.Z, {
                                variant: "caption",
                                children: eY(n >= es.te.OutboundReverting ? k.seconds : f.seconds)
                            }), N && (0, O.BX)(e2, {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: Z,
                                isActive: n <= es.te.InboundSuccess,
                                onClick: function() {
                                    return (0, v.L9)(v._E.HubSendFromNetworkTxLinkClicked, (0, j.Z)({}, v.gp.Url, Z))
                                },
                                children: [(0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    children: d.hub.send.link
                                }), (0, O.tZ)(b.Q7S, {
                                    className: (0, J.default)("ml-1 w-2.5 h-2.5 text-grey-400 dark:text-grey-300 transition-all duration-300", {
                                        "!text-black dark:!text-white": n <= es.te.InboundSuccess
                                    })
                                })]
                            })]
                        }), !c && !l && (0, O.BX)(eJ, {
                            className: "items-center",
                            isActive: F,
                            children: [(0, O.tZ)(m.Z, {
                                variant: "caption",
                                children: E.lL.get(A.Gl[G.N2.chainId])
                            }), (0, O.tZ)(b.R3e, {
                                className: "relative z-[1]",
                                isSuccess: D
                            }), n >= es.te.ZetaChainPending && (0, O.BX)(O.HY, {
                                children: [(0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    className: "text-center",
                                    children: n >= es.te.OutboundReverting ? d.hub.send.destinationFailed : n > es.te.ZetaChainPending ? d.hub.send.processed : d.hub.send.processingTx
                                }), (0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    children: eY(y.seconds)
                                })]
                            }), n >= es.te.ZetaChainPending && (null == r ? void 0 : r.zetaChainHash) && (0, O.BX)(e2, {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: T,
                                isActive: F,
                                onClick: function() {
                                    return (0, v.L9)(v._E.HubSendZetaChainTxLinkClicked, (0, j.Z)({}, v.gp.Url, T))
                                },
                                children: [(0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    children: d.hub.send.link
                                }), (0, O.tZ)(b.Q7S, {
                                    className: (0, J.default)("ml-1 w-2.5 h-2.5 text-grey-400 dark:text-grey-300 transition-all duration-300", {
                                        "!text-black dark:!text-white": F
                                    })
                                })]
                            })]
                        }), (0, O.BX)(eJ, {
                            className: "items-end",
                            isActive: R,
                            children: [(0, O.tZ)(m.Z, {
                                variant: "caption",
                                className: "text-right",
                                children: i ? E.lL.get(A.Gl[i]) : d.hub.send.outboundChain
                            }), (0, O.tZ)("div", {
                                className: "relative z-[1]",
                                children: l ? (0, O.tZ)(b.R3e, {
                                    isSuccess: L
                                }) : (0, O.BX)(O.HY, {
                                    children: [(0, O.tZ)(e$, {
                                        isSuccess: L
                                    }), R && (0, O.tZ)(eq.Z, {
                                        className: "absolute top-0 left-0 text-green-500 dark:text-green-50",
                                        size: 25,
                                        thickness: 2
                                    }), L && (0, O.tZ)(b.NOm, {
                                        className: "absolute top-[9px] left-[7px] text-white dark:text-green-50"
                                    })]
                                })
                            }), X && (0, O.BX)(O.HY, {
                                children: [(0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    children: n === es.te.OutboundSuccess ? d.hub.send.received : d.hub.send.waitingTx
                                }), n > es.te.OutboundPending && (0, O.BX)(m.Z, {
                                    variant: "caption",
                                    children: ["1/1 ", d.hub.send.confirmations]
                                }), (0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    children: eY(l ? y.seconds : x.seconds)
                                })]
                            }), C && (0, O.BX)(e2, {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: S,
                                isActive: R,
                                onClick: function() {
                                    return (0, v.L9)(v._E.HubSendToNetworkTxLinkClicked, (0, j.Z)({}, v.gp.Url, S))
                                },
                                children: [(0, O.tZ)(m.Z, {
                                    variant: "caption",
                                    children: d.hub.send.link
                                }), (0, O.tZ)(b.Q7S, {
                                    className: (0, J.default)("ml-1 w-2.5 h-2.5 text-grey-400 dark:text-grey-300 transition-all duration-300", {
                                        "!text-black dark:!text-white": R
                                    })
                                })]
                            })]
                        }), (0, O.tZ)(e1, {}), (0, O.tZ)(e5, {
                            widthPercentage: p,
                            isError: _
                        })]
                    })
                },
                e6 = n(17774),
                e9 = n(97556),
                e7 = function(e) {
                    var t = e.title,
                        n = e.chainId,
                        r = e.displayAddress,
                        a = E.lL.get(A.Gl[n]);
                    return (0, O.BX)("div", {
                        className: "flex justify-between items-center gap-1.5",
                        children: [(0, O.tZ)(m.Z, {
                            variant: "body1",
                            children: t
                        }), (0, O.BX)("div", {
                            className: "flex items-center gap-1.5",
                            children: [(0, O.BX)("div", {
                                className: "flex sm:items-center flex-col-reverse sm:flex-row sm:gap-1.5",
                                children: [r && (0, O.tZ)(m.Z, {
                                    variant: "body1",
                                    className: "text-grey-400 dark:text-grey-300 text-right",
                                    children: (0, v.Xn)(r, 6, 4)
                                }), (0, O.tZ)(m.Z, {
                                    variant: "body1",
                                    className: "text-right",
                                    children: a
                                })]
                            }), (0, O.tZ)("div", {
                                className: "flex items-center justify-center flex-shrink-0 w-5 h-5 relative",
                                children: (0, O.tZ)(C(), {
                                    src: A.kt[n].logoUrl,
                                    alt: a,
                                    layout: "fill"
                                })
                            })]
                        })]
                    })
                },
                e8 = (0, S.Z)("div", {
                    target: "e1rqsqmp0"
                })({
                    name: "5mzpcp",
                    styles: "display:flex;flex-direction:column;gap:1.5rem;border-radius:0.25rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(229 232 236 / var(--tw-border-opacity));padding:1rem;.dark &{--tw-border-opacity:1;border-color:rgb(45 50 55 / var(--tw-border-opacity));}@media (min-width: 600px){gap:2rem;padding:1.5rem;}"
                }),
                te = function() {
                    var e = (0, g.AA)().copy,
                        t = (0, z.Os)().address,
                        n = (0, Z.v9)(f.LQ.selectXDEFIState).bitcoinAccount,
                        r = (0, Z.v9)(L.A.sendTokenState),
                        a = r.fromChainId,
                        i = r.toChainId,
                        o = r.customRecipientAddress;
                    if (!a || !i) return null;
                    var s = (0, A.TP)(a) ? n : t,
                        d = (0, A.TP)(i) ? o : o || t;
                    return (0, O.BX)(e8, {
                        children: [(0, O.tZ)(e7, {
                            title: e.hub.send.from,
                            chainId: a,
                            displayAddress: s
                        }), (0, O.tZ)(e7, {
                            title: e.hub.send.to,
                            chainId: i,
                            displayAddress: d
                        })]
                    })
                },
                tt = n(41083),
                tn = n(73582),
                tr = n(95580),
                ta = (0, S.Z)(tt.Z, {
                    target: "eyq273n1"
                })({
                    name: "1iv26p4",
                    styles: "border-style:none;background-color:transparent;background-image:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); :before{background-color:transparent;;}"
                }),
                ti = (0, S.Z)("div", {
                    target: "eyq273n0"
                })({
                    name: "5mzpcp",
                    styles: "display:flex;flex-direction:column;gap:1.5rem;border-radius:0.25rem;border-width:1px;--tw-border-opacity:1;border-color:rgb(229 232 236 / var(--tw-border-opacity));padding:1rem;.dark &{--tw-border-opacity:1;border-color:rgb(45 50 55 / var(--tw-border-opacity));}@media (min-width: 600px){gap:2rem;padding:1.5rem;}"
                }),
                to = function() {
                    var e = (0, g.AA)().copy,
                        t = (0, Z.v9)(L.A.sendTokenState).sendTokenSelected,
                        n = eo().totalToReceiveCopy,
                        r = null == t ? void 0 : t.symbol;
                    return (0, O.tZ)(ti, {
                        children: (0, O.BX)(ta, {
                            children: [(0, O.BX)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, O.tZ)(tn.Z, {
                                    classes: {
                                        root: "p-0 min-h-0 inline-flex items-center gap-2.5",
                                        content: "m-0"
                                    },
                                    expandIcon: (0, O.tZ)(b.C26, {
                                        className: "w-4 h-4 text-black dark:text-white"
                                    }),
                                    onClick: function() {
                                        return (0, v.L9)(v._E.HubSendTotalSentToggled)
                                    },
                                    children: (0, O.tZ)(m.Z, {
                                        variant: "body1",
                                        children: e.hub.send.totalSent
                                    })
                                }), (0, O.BX)("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [(0, O.tZ)(m.Z, {
                                        variant: "body1",
                                        className: "text-right",
                                        children: n
                                    }), r && I.tX.get(r) && (0, O.tZ)("div", {
                                        className: "flex items-center justify-center flex-shrink-0 w-5 h-5 relative",
                                        children: (0, O.tZ)(C(), {
                                            src: I.tX.get(r),
                                            alt: r,
                                            layout: "fill"
                                        })
                                    })]
                                })]
                            }), (0, O.tZ)(tr.Z, {
                                className: "p-0 mt-2",
                                children: (0, O.tZ)(em, {
                                    variant: "accordion"
                                })
                            })]
                        })
                    })
                },
                ts = ["txStatus", "txStatusData", "confirmations", "isSendTxError", "isSendTxSuccess"],
                td = function(e) {
                    var t, n, r, a, i, o, s, d, c, l, u, p, h, b, y, x, k = e.onSendFinished,
                        T = (0, g.AA)().copy,
                        S = (0, z.Os)(),
                        N = S.isConnected,
                        C = S.address,
                        I = (0, Z.v9)(f.LQ.selectXDEFIState).bitcoinAccount,
                        E = (0, Z.I0)(),
                        B = (0, Z.v9)(L.A.sendTokenState),
                        P = B.sourceTxHash,
                        F = B.sendTokenSelected,
                        D = B.ethSendAmount,
                        j = B.fromChainId,
                        M = B.toChainId,
                        G = (t = (0, Z.I0)(), r = (n = (0, Z.v9)(L.A.sendTokenState)).fromChainId, a = n.sourceTxHash, o = (i = n.txTracker).confirmations, s = i.txStatus, c = (d = i.timers).inboundTimer, l = d.zetaChainTimer, u = d.outboundTimer, p = d.revertTimer, h = (0, w.useMemo)(function() {
                            return [es.te.InboundReverted, es.te.OutboundSuccess, es.te.OutboundReverted, es.te.OutboundRevertFailed]
                        }, []), b = !r || !a || h.includes(i.txStatus), y = (0, _.yI)({
                            sourceChain: A.ZF[r],
                            sourceTxHash: a
                        }, {
                            pollingInterval: 8e3,
                            skip: b
                        }).data, x = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            t.forEach(function(e) {
                                i.timers[e].id && clearInterval(i.timers[e].id)
                            })
                        }, (0, w.useEffect)(function() {
                            switch ("number" == typeof(null == y ? void 0 : y.inboundConfirmations) && t((0, X.U)(Math.min(y.inboundConfirmations, H.Uq))), b && (c.id || eW(t, "inboundTimer"), t(R.P.updateTxStatus(es.te[es._Q.InboundPending]))), null == y ? void 0 : y.ccTxStatus) {
                                case es._Q.InboundPending:
                                    c.id || eW(t, "inboundTimer"), t(R.P.updateTxStatus(es.te[es._Q.InboundPending]));
                                    break;
                                case es._Q.InboundReverted:
                                    x("inboundTimer"), t(R.P.updateTxStatus(es.te[es._Q.InboundReverted]));
                                    break;
                                case es._Q.InboundSuccess:
                                    c.id || eW(t, "inboundTimer"), t(R.P.updateTxStatus(es.te[es._Q.InboundSuccess]));
                                    break;
                                case es._Q.ZetaChainPending:
                                    x("inboundTimer"), l.id || eW(t, "zetaChainTimer"), t(R.P.updateTxStatus(es.te[es._Q.ZetaChainPending]));
                                    break;
                                case es._Q.OutboundPending:
                                    x("inboundTimer", "zetaChainTimer"), u.id || eW(t, "outboundTimer"), t(R.P.updateTxStatus(es.te[es._Q.OutboundPending]));
                                    break;
                                case es._Q.OutboundReverting:
                                    x("inboundTimer", "zetaChainTimer", "outboundTimer"), p.id || eW(t, "revertTimer"), t(R.P.updateTxStatus(es.te[es._Q.OutboundReverting]));
                                    break;
                                case es._Q.OutboundSuccess:
                                case es._Q.OutboundReverted:
                                case es._Q.OutboundRevertFailed:
                                    x("inboundTimer", "zetaChainTimer", "outboundTimer", "revertTimer"), t(R.P.updateTxStatus(es.te[null == y ? void 0 : y.ccTxStatus]))
                            }
                        }, [null == y ? void 0 : y.ccTxStatus, null == y ? void 0 : y.inboundConfirmations]), {
                            isSendTxSuccess: s === es.te[es._Q.OutboundSuccess],
                            isSendTxError: s === es.te[es._Q.InboundReverted] || s >= es.te[es._Q.OutboundReverted],
                            confirmations: o,
                            txStatus: s,
                            txStatusData: y,
                            inboundTimer: c,
                            zetaChainTimer: l,
                            outboundTimer: u,
                            revertTimer: p
                        }),
                        Q = G.txStatus,
                        V = G.txStatusData,
                        q = G.confirmations,
                        W = G.isSendTxError,
                        Y = G.isSendTxSuccess,
                        K = (0, e6.Z)(G, ts),
                        J = (0, w.useState)(!1),
                        $ = J[0],
                        ee = J[1];
                    (0, _.h7)({
                        evmAddress: C,
                        btcAddress: I
                    }, {
                        skip: !N || !Y,
                        refetchOnMountOrArgChange: !0
                    });
                    var et = (0, w.useCallback)(function() {
                            E((0, X.r)({
                                status: H.fq.Initial
                            }))
                        }, [E]),
                        en = !!(j && M && Number(D) && F);
                    (0, w.useEffect)(function() {
                        en || et()
                    }, [en, et]);
                    var er = (null == V ? void 0 : V.ccTxStatusMessage) && /foreign coin cap reached/i.test(V.ccTxStatusMessage);
                    return en ? $ ? (0, O.tZ)(e9.w, {
                        back: function() {
                            ee(!1)
                        }
                    }) : (0, O.BX)("div", {
                        className: "flex flex-col gap-3",
                        children: [er && (0, O.BX)("div", {
                            className: "mb-4 px-6 py-3 rounded bg-negative-50 dark:bg-negative-900 border-l-[3px] border-negative-500 dark:border-negative-400",
                            children: [(0, O.BX)("div", {
                                className: "mb-2 flex items-center gap-1",
                                children: [(0, O.tZ)(U.Sld, {
                                    className: "w-4 h-4"
                                }), (0, O.tZ)("span", {
                                    className: "text-[10px] font-medium",
                                    children: T.hub.shared.error
                                })]
                            }), (0, O.BX)("p", {
                                className: "text-xs",
                                children: [T.hub.pools.liquidity.capReachedReverted, " ", (0, O.tZ)(U.h0n, {
                                    className: "w-3 h-3 inline text-inherit",
                                    href: "".concat(es.SZ.explorerUrl, "/liquidity")
                                })]
                            })]
                        }), (0, O.tZ)(m.Z, {
                            variant: "headline2",
                            className: "flex justify-between items-center mb-1",
                            children: W ? null != F && F.symbol ? T.hub.send.sendTokenFailed.replace("[X]", F.symbol) : T.hub.send.sendFailed : Y ? null != F && F.symbol ? T.hub.send.sendTokenSuccessful.replace("[X]", F.symbol) : T.hub.send.sendSuccessful : null != F && F.symbol ? T.hub.send.trackingTokenSend.replace("[X]", F.symbol) : T.hub.send.trackingSend
                        }), (0, O.BX)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0, O.tZ)(to, {}), (0, O.tZ)(te, {})]
                        }), (0, O.tZ)(ev, {
                            withMotion: !1
                        }), j && M && (0, O.tZ)(e4, {
                            inboundConfirmations: q.inbound,
                            txStatus: Q,
                            txStatusData: V,
                            senderChainId: j,
                            receiverChainId: M,
                            sourceTxHash: P,
                            timers: K
                        }), Y ? (0, O.tZ)(U.kHo, {
                            onClick: function() {
                                et(), null == k || k(), (0, v.L9)(v._E.HubSendSuccessDoneClicked)
                            },
                            children: T.hub.send.done
                        }) : W && (0, O.tZ)(U.kHo, {
                            color: "info",
                            onClick: function() {
                                et(), (0, v.L9)(v._E.HubSendErrorTryAgainClicked)
                            },
                            children: null != F && F.symbol ? T.hub.send.tryTokenAgain.replace("[X]", F.symbol) : T.hub.send.tryAgain
                        })]
                    }) : null
                },
                tc = n(32359);

            function tl(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tu(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tl(Object(n), !0).forEach(function(t) {
                        (0, j.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tl(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tp = function(e) {
                    var t, n = e.tokenName,
                        r = e.fromChainId,
                        a = e.disabled,
                        i = void 0 !== a && a,
                        o = (0, g.AA)().copy,
                        s = (0, Z.I0)(),
                        d = (0, Z.v9)(L.A.sendTokenState).availableTokens,
                        c = (0, Z.v9)(Q.hD.selectHoldingsByChainId()).holdingsByChainId,
                        l = (null == d ? void 0 : d.map(function(e) {
                            var t, n = null === (t = c[null == r ? void 0 : r.toString()]) || void 0 === t || null === (t = t[e.symbol]) || void 0 === t ? void 0 : t.formattedBalance,
                                a = n ? "".concat(e.symbol, " (").concat(n, ")") : e.symbol,
                                i = I.tX.get(e.symbol);
                            return {
                                label: a,
                                value: e.symbol,
                                icon: i
                            }
                        })) || [],
                        u = null !== (t = l.find(function(e) {
                            return e.value === n
                        })) && void 0 !== t ? t : null;
                    return (0, O.tZ)("div", {
                        className: "flex items-center justify-end w-full sm:w-auto px-4 sm:pr-6 sm:pl-0",
                        children: (0, O.tZ)(tc.L, {
                            items: l,
                            selectedItem: u && tu(tu({}, u), {}, {
                                label: u.value
                            }),
                            title: o.hub.send.asset,
                            className: (0, J.default)("h-12", {
                                "dark:!bg-grey-800 dark:hover:!bg-grey-700": u && !i,
                                "!bg-grey-200 hover:!bg-grey-200 dark:!bg-grey-700 dark:hover:!bg-grey-700 !opacity-60": !u || i
                            }),
                            onSelect: function(e) {
                                var t = d.find(function(t) {
                                    return t.symbol === e.value
                                });
                                t && s(R.P.setSendToken(t)), (0, v.L9)(v._E.HubSendTokenSelected, (0, j.Z)({}, v.gp.Token, n))
                            },
                            isDisabled: i
                        })
                    })
                },
                tm = function(e) {
                    var t, n, r = e.defaultFromChainId,
                        a = e.defaultToChainId,
                        i = e.isFromDisabled,
                        o = e.isToDisabled,
                        s = e.defaultSendToken,
                        d = e.showBackButton,
                        u = e.onSendFinished,
                        S = (0, g.AA)().copy,
                        N = (0, k.Ds)(),
                        C = N.enqueueSnackbar,
                        I = N.closeSnackbar,
                        E = (0, D.O)(),
                        B = E.address,
                        P = E.signer,
                        j = (0, Z.I0)(),
                        M = (0, Z.v9)(L.A.sendTokenState),
                        z = M.sendTokenSelected,
                        G = M.customRecipientAddress,
                        Q = M.status,
                        U = M.ethSendAmount,
                        V = M.toChainId,
                        q = (0, Z.v9)(f.LQ.selectXDEFIState).bitcoinAccount;
                    (0, T.O)();
                    var W = eB({
                            from: {
                                isSelectionDisabled: i,
                                defaultChainId: r
                            },
                            to: {
                                isSelectionDisabled: o,
                                defaultChainId: a
                            }
                        }),
                        K = W.from,
                        J = W.to,
                        ee = Q === H.fq.TrackingSend,
                        et = Q === H.fq.SigningInWallet;
                    (0, _.NQ)({
                        toChainId: V,
                        sendTokenSymbol: null == z ? void 0 : z.symbol
                    }, {
                        skip: et || ee,
                        refetchOnMountOrArgChange: !0,
                        pollingInterval: 30 * y.ONE_SECOND_IN_MS
                    }), (0, w.useEffect)(function() {
                        s && K.chainId && (0, H.Y8)({
                            chainId: K.chainId,
                            symbol: s.symbol
                        }) && j(R.P.setSendToken(s))
                    }, [s, j, K.chainId]);
                    var en = null !== (t = null == z ? void 0 : z.decimals) && void 0 !== t ? t : 18,
                        ea = (0, w.useCallback)(function(e) {
                            var t = e.target.value,
                                n = !t || (0, v.qN)(en).test(t);
                            "." === t && j(R.P.setEthSendAmount("0.")), !Number.isNaN(Number(t)) && n && j(R.P.setEthSendAmount(t))
                        }, [j, en]),
                        ei = (0, w.useCallback)(function(e) {
                            var t = e.message.match(/^[^(]+/),
                                n = (0, l.Z)(t, 1)[0];
                            C("".concat((0, v.fm)(n) || e.message || S.hub.send.anErrorOccurred, " - ").concat(S.hub.send.pleaseTryAgain), {
                                variant: "error",
                                autoHideDuration: b.yw8,
                                preventDuplicate: !0,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "right"
                                },
                                action: function(e) {
                                    return (0, O.tZ)(b.t5P, {
                                        onDismiss: function() {
                                            return I(e)
                                        }
                                    })
                                }
                            })
                        }, [I, C, S.hub.send.pleaseTryAgain, S.hub.send.anErrorOccurred]),
                        eo = (0, w.useCallback)((0, c.Z)(p().mark(function e() {
                            var t, n, r, a;
                            return p().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (I(), t = (0, A.TP)(K.chainId) ? q : B, n = (0, A.TP)(J.chainId) ? G : G || B, e.prev = 3, !(!t || !n || !K.chainId || !J.chainId || !z || !Number(U))) {
                                            e.next = 6;
                                            break
                                        }
                                        throw Error(S.hub.send.invalidSend);
                                    case 6:
                                        return j((0, X.r)({
                                            status: H.fq.SigningInWallet
                                        })), r = (0, x.parseUnits)(U, z.decimals), e.next = 10, eV({
                                            sendTokenSymbol: z.symbol,
                                            senderAddress: t,
                                            receiverAddress: n,
                                            signer: P,
                                            amount: r,
                                            fromChainId: K.chainId,
                                            toChainId: J.chainId
                                        });
                                    case 10:
                                        null != (a = e.sent) && a.txHash && (j((0, X.r)({
                                            status: H.fq.TrackingSend
                                        })), j(R.P.setSourceTxHash(a.txHash))), e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(3), ei(e.t0), j((0, X.r)({
                                            status: H.fq.Selecting
                                        }));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 14]
                            ])
                        })), [I, K.chainId, q, B, G, J.chainId, z, U, j, P, S.hub.send.invalidSend, ei]);
                    return ((0, w.useEffect)(function() {
                        K.isDialogOpen && (0, v.L9)(v._E.HubSendFromNetworkModalOpened)
                    }, [K.isDialogOpen]), (0, w.useEffect)(function() {
                        J.isDialogOpen && (0, v.L9)(v._E.HubSendToNetworkModalOpened)
                    }, [J.isDialogOpen]), ee) ? (0, O.tZ)(td, {
                        onSendFinished: u
                    }) : (0, O.BX)(O.HY, {
                        children: [(0, O.tZ)(F, {
                            title: S.hub.send.networkToSendFrom,
                            isOpen: K.isDialogOpen,
                            closeDialog: function() {
                                K.closeDialog(), (0, v.L9)(v._E.HubSendFromNetworkModalClosed)
                            },
                            selectNetwork: K.selectFromNetwork,
                            chains: K.chains
                        }), (0, O.tZ)(F, {
                            title: S.hub.send.networkToSendTo,
                            isOpen: J.isDialogOpen,
                            closeDialog: function() {
                                J.closeDialog(), (0, v.L9)(v._E.HubSendToNetworkModalClosed)
                            },
                            selectNetwork: J.selectToNetwork,
                            chains: J.chains
                        }), (0, O.BX)("div", {
                            className: "w-full",
                            children: [(0, O.BX)("div", {
                                className: "flex flex-col gap-2 mb-4",
                                children: [(0, O.BX)("div", {
                                    className: "flex items-center mb-1 gap-2",
                                    children: [(0, O.tZ)(m.Z, {
                                        variant: "headline2",
                                        children: S.hub.send.send
                                    }), (0, O.tZ)(h.Z, {
                                        title: S.hub.send.sendAssetsInfo,
                                        placement: "top",
                                        children: (0, O.tZ)("span", {
                                            className: "flex-shrink-0 leading-none",
                                            children: (0, O.tZ)(b.VzH, {})
                                        })
                                    })]
                                }), (0, O.BX)("div", {
                                    className: "relative rounded-md dark:bg-grey-900 bg-grey-50 border dark:border-none border-grey-200 flex flex-col",
                                    children: [(0, O.BX)("div", {
                                        className: "flex items-center justify-between p-4 sm:p-6 pb-0 sm:pb-0 gap-2",
                                        children: [(0, O.tZ)(m.Z, {
                                            variant: "caption",
                                            children: S.hub.send.amount
                                        }), (0, O.tZ)($, {})]
                                    }), (0, O.BX)("div", {
                                        className: "flex flex-col sm:flex-row items-end sm:items-center justify-evenly sm:justify-between min-h-[160px] sm:min-h-[120px] border-b dark:border-grey-800 border-grey-200",
                                        children: [(0, O.tZ)("input", {
                                            className: "text-grey-500 dark:text-grey-50 dark:bg-grey-900 bg-grey-50 outline-none text-xl sm:text-4xl px-4 sm:px-6 font-mono placeholder:text-grey-300 dark:placeholder:text-grey-400 w-full text-ellipsis",
                                            value: U,
                                            onChange: ea,
                                            placeholder: "0.00",
                                            disabled: et
                                        }), (0, O.tZ)(tp, {
                                            tokenName: null !== (n = null == z ? void 0 : z.symbol) && void 0 !== n ? n : S.hub.send.token,
                                            fromChainId: Number(K.chainId),
                                            disabled: et || !K.chainId
                                        })]
                                    }), (0, O.BX)("div", {
                                        className: "h-fit",
                                        children: [(0, O.tZ)(eE, {
                                            from: K,
                                            to: J,
                                            disabled: et
                                        }), (0, O.tZ)(er, {
                                            disabled: et
                                        })]
                                    })]
                                })]
                            }), (0, O.tZ)(ek, {}), (0, O.tZ)(Y, {
                                handleSubmit: eo
                            }), (void 0 === d || d) && (0, O.tZ)(b.kHo, {
                                color: "info",
                                className: "mt-3",
                                disabled: et,
                                onClick: function() {
                                    I(), null == u || u(), (0, v.L9)(v._E.HubSendBackFromSelectorClicked)
                                },
                                children: S.hub.send.back
                            })]
                        })]
                    })
                }
        },
        97556: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return S
                }
            });
            var r = n(78756),
                a = n(72975),
                i = n.n(a),
                o = n(64691),
                s = n(17241),
                d = n(77438),
                c = n(25294),
                l = n(42949),
                u = n(60045),
                p = n(54774),
                m = n(62431),
                h = n(85243),
                b = n(81218),
                f = n(32735),
                g = n(27559),
                v = n(55634),
                y = n(46776),
                x = n(97006),
                k = n(26355),
                w = n(63921),
                Z = n(38839),
                T = function(e) {
                    var t = e.tokenName,
                        n = e.balance,
                        r = e.className,
                        a = e.isLoadingUserBalance,
                        i = void 0 !== a && a,
                        s = (0, l.AA)().copy,
                        d = (0, l.ys)().compactAmountFormatter,
                        p = n > 0 && !i;
                    return (0, Z.BX)("div", {
                        className: (0, u.default)("flex flex-col justify-end", r),
                        children: [(0, Z.BX)("div", {
                            className: "flex items-center justify-end mb-[9px]",
                            children: [(0, Z.tZ)(c.ong, {
                                className: "w-4 h-4 rounded-full",
                                width: 16,
                                height: 16
                            }), (0, Z.tZ)("div", {
                                className: "ml-1",
                                children: (0, Z.tZ)("div", {
                                    className: "dark:text-grey-100 text-grey-700 text-xs sm:text-sm",
                                    children: t
                                })
                            })]
                        }), i ? (0, Z.tZ)(o.Z, {
                            variant: "text",
                            width: 100,
                            height: 15
                        }) : (0, Z.tZ)("div", {
                            className: "flex items-center",
                            children: (0, Z.BX)("div", {
                                className: "ml-auto text-xs font-medium text-right whitespace-nowrap max-w-[200px] overflow-auto text-grey-300 flex",
                                children: [(0, Z.BX)("span", {
                                    className: "hidden sm:mr-1 sm:block",
                                    children: [s.hub.shared.balance, ": "]
                                }), p ? "".concat(d.format(n), " ").concat(t) : "-- ".concat(t)]
                            })
                        })]
                    })
                },
                S = function(e) {
                    var t, n, a, o = e.back,
                        S = (0, v.Os)(),
                        N = S.isConnected,
                        C = S.chainId,
                        A = S.switchNetwork,
                        I = (0, l.cK)().upSm,
                        E = (0, f.useRef)(null),
                        O = (0, f.useState)(!1),
                        B = O[0],
                        P = O[1],
                        F = (0, f.useState)(""),
                        D = F[0],
                        X = F[1],
                        H = (0, f.useState)(!1),
                        R = H[0],
                        L = H[1],
                        _ = (0, f.useState)(0),
                        j = _[0],
                        M = _[1];
                    (0, f.useEffect)(function() {
                        if (R && j < 100) {
                            var e = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 62, 65, 70, 80, 82, 83, 84, 88, 90, 94, 95, 96],
                                t = 0,
                                n = setInterval(function() {
                                    t < e.length ? (M(e[t]), t++) : clearInterval(n)
                                }, 1e3);
                            return function() {
                                return clearInterval(n)
                            }
                        }
                        return function() {}
                    }, [R]);
                    var z = (0, k.j)(),
                        G = z.amount,
                        Q = z.setAmount,
                        U = z.isLoadingZetaBalances,
                        V = z.zetaBalances,
                        q = z.setZetaBalances,
                        W = z.zetaTokenManager,
                        Y = z.unwrap,
                        K = Y.unwrapResultingWrappedZetaBalance,
                        J = Y.unwrapResultingZetaNativeBalance,
                        $ = Y.isUnwrapDisabled,
                        ee = Number(null == G ? void 0 : G.toString()) / 1e18,
                        et = (0, x.vf)({
                            coins: ["ETH"]
                        }, {
                            refetchOnMountOrArgChange: !0,
                            refetchOnReconnect: !0
                        }).data,
                        en = (0, f.useCallback)(function(e) {
                            var t = e.value;
                            D && X(""), j > 0 && !B && M(0);
                            var n = (0, b.Z)(Number(t)) ? "0" : Number(t).toString();
                            Q(p.parseUnits(n || "0"))
                        }, [D, j, Q, B]),
                        er = (0, f.useCallback)((0, r.Z)(i().mark(function e() {
                            var t;
                            return i().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, P(!0), e.next = 4, null == W ? void 0 : W.unwrapZeta(G, function() {
                                            L(!0)
                                        });
                                    case 4:
                                        return e.next = 6, null == W ? void 0 : W.getNativeAndWrappedZetaBalances();
                                    case 6:
                                        if (t = e.sent) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        q(t), Q(0), M(100), L(!1), P(!1), e.next = 24;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(0), X("An error occurred while wrapping ZETA"), setTimeout(function() {
                                            X("")
                                        }, 5e3), P(!1), L(!1), M(0), Q(0);
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 16]
                            ])
                        })), [G, Q, q, W]);
                    return N ? C !== Number(y.N2.chainId) ? (0, Z.BX)("div", {
                        className: "mx-4 sm:mx-6 mt-4 flex flex-col gap-3",
                        children: [(0, Z.tZ)(s.Z, {
                            variant: "headline2",
                            className: "mb-4 sm:mb-6",
                            children: "Switch to ZetaChain"
                        }), (0, Z.tZ)("div", {
                            className: "flex-grow flex flex-col justify-between min-h-[300px]",
                            children: (0, Z.tZ)(w.V, {
                                caption: "Switch to ZetaChain to wrap ZETA to WZETA",
                                buttonCopy: "Switch to ZetaChain",
                                onClick: function() {
                                    null == A || A(Number(y.N2.chainId))
                                }
                            })
                        })]
                    }) : (0, Z.BX)("div", {
                        className: "mx-4 sm:mx-6 mt-4 flex flex-col gap-3",
                        children: [(0, Z.tZ)("h1", {
                            className: "text-xl sm:text-2xl font-normal text-grey-700 dark:text-grey-100",
                            children: "Unwrap WZETA to ZETA"
                        }), (0, Z.tZ)("div", {
                            className: "relative rounded-md py-[37.5px] px-6 dark:bg-grey-900 bg-grey-50 border dark:border-none border-grey-200",
                            children: (0, Z.BX)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, Z.BX)("div", {
                                    className: "flex flex-col",
                                    children: [(0, Z.tZ)(g.h3, {
                                        getInputRef: E,
                                        disabled: B || R || U,
                                        className: "text-grey-500 dark:text-grey-50 dark:bg-grey-900 bg-grey-50 outline-none text-lg sm:text-4xl font-mono placeholder:text-grey-300 dark:placeholder:text-grey-400 max-w-[100px] sm:max-w-[250px] md:max-w-[300px] text-ellipsis",
                                        value: ee || "",
                                        onValueChange: en,
                                        placeholder: "0.00",
                                        allowLeadingZeros: !0,
                                        allowNegative: !1,
                                        thousandSeparator: ",",
                                        decimalSeparator: "."
                                    }), !!((null == et || null === (t = et.prices) || void 0 === t ? void 0 : t.ETH) && "0" !== G.toString()) && (0, Z.BX)("span", {
                                        className: "text-grey-400 text-sm absolute bottom-5",
                                        children: ["~$", (et.prices.ETH * ee).toLocaleString("fullwide", {
                                            useGrouping: !1,
                                            maximumFractionDigits: I ? 5 : 1
                                        })]
                                    })]
                                }), (0, Z.tZ)(T, {
                                    className: (0, u.default)("mr-6", {
                                        "opacity-50 pointer-events-none": B || R
                                    }),
                                    tokenName: "ZETA",
                                    balance: Number(V.zetaNativeBalance.formattedAmount),
                                    setMaxAmountToDelegate: function() {
                                        B || R || !V.zetaNativeBalance.amount || Q(V.zetaNativeBalance.amount)
                                    },
                                    isLoadingUserBalance: U
                                })]
                            })
                        }), (0, Z.BX)("div", {
                            className: "flex justify-between items-center relative overflow-hidden h-6 mt-4",
                            children: [(0, Z.tZ)("div", {
                                className: "w-6 h-6 bg-green-400 rounded-sm border-2 border-green-800 z-10 absolute"
                            }), (0, Z.tZ)("div", {
                                className: (0, u.default)("w-6 h-6 bg-grey-700 rounded-sm border-2 border-green-800 z-10 absolute right-0 transition-all duration-500", {
                                    "bg-green-400": 100 === j
                                })
                            }), (0, Z.tZ)(d.Z, {
                                variant: "buffer",
                                value: j,
                                valueBuffer: 0 === j ? 0 : j + 10,
                                className: "w-full",
                                sx: {
                                    "& .MuiLinearProgress-dashed": {
                                        animation: "none"
                                    }
                                }
                            })]
                        }), (0, Z.BX)("div", {
                            className: "flex justify-between items-center relative overflow-hidden pb-4",
                            children: [(0, Z.BX)("div", {
                                children: [(0, Z.tZ)("div", {
                                    className: "text-sm text-green-400 font-semibold mb-1",
                                    children: "Current balances"
                                }), (0, Z.BX)("div", {
                                    className: "text-xs text-grey-300",
                                    children: ["ZETA: ", null === (n = V.zetaNativeBalance) || void 0 === n ? void 0 : n.formattedAmount]
                                }), (0, Z.BX)("div", {
                                    className: "text-xs text-grey-300",
                                    children: ["WZETA: ", null === (a = V.wrappedZetaBalance) || void 0 === a ? void 0 : a.formattedAmount]
                                })]
                            }), (0, Z.BX)("div", {
                                className: (0, u.default)("text-right transition-all duration-300", {
                                    "opacity-30": $ || R || U
                                }),
                                children: [(0, Z.tZ)("div", {
                                    className: "text-sm text-green-400 font-semibold mb-1",
                                    children: "Resulting balances"
                                }), (0, Z.BX)("div", {
                                    className: "text-xs text-grey-300",
                                    children: ["ZETA: ", $ ? "---" : "~".concat(J)]
                                }), (0, Z.BX)("div", {
                                    className: "text-xs text-grey-300",
                                    children: ["WZETA: ", $ ? "---" : "~".concat(K)]
                                })]
                            })]
                        }), (0, Z.tZ)(m.M, {
                            exitBeforeEnter: !0,
                            children: D && (0, Z.tZ)(h.E.div, {
                                layout: !0,
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "text-negative-400 text-sm flex items-center px-4 py-2 bg-red-500/20 rounded select-none overflow-scroll",
                                children: D
                            })
                        }), (0, Z.tZ)(c.kHo, {
                            disabled: $ || U,
                            isLoading: B,
                            onClick: er,
                            children: 0 === ee || U || $ ? "Select amount to unwrap" : (0, Z.BX)(Z.HY, {
                                children: ["Unwrap ", (0, Z.BX)("strong", {
                                    className: "text-grey-200",
                                    children: [ee, " WZETA"]
                                })]
                            })
                        }), (0, Z.tZ)(c.kHo, {
                            color: "info",
                            disabled: B || R,
                            onClick: function() {
                                Q(0), o()
                            },
                            children: "Back"
                        })]
                    }) : (0, Z.BX)("div", {
                        className: "mx-4 sm:mx-6 mt-4 flex flex-col gap-3",
                        children: [(0, Z.tZ)(s.Z, {
                            variant: "headline2",
                            className: "mb-4 sm:mb-6",
                            children: "Unwrap WZETA to ZETA"
                        }), (0, Z.tZ)("div", {
                            className: "flex-grow flex flex-col justify-between min-h-[300px]",
                            children: (0, Z.tZ)(w.V, {
                                caption: "Connect to wrap ZETA to WZETA"
                            })
                        })]
                    })
                }
        },
        53851: function(e, t, n) {
            n.d(t, {
                d2: function() {
                    return g
                },
                ri: function() {
                    return b
                },
                mN: function() {
                    return m
                },
                yX: function() {
                    return y
                }
            });
            var r, a, i = n(78756),
                o = n(72975),
                s = n.n(o),
                d = JSON.parse('{"Mt":[{"inputs":[{"internalType":"uint256","name":"_totalSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}');
            n(65449);
            var c = n(87214),
                l = n(15680),
                u = {
                    GOERLI: 5,
                    MAINNET: 1,
                    ROPSTEN: 3,
                    RINKEBY: 4,
                    KOVAN: 42,
                    DEVNET: 6511e4,
                    AUTONITY: 6501e4,
                    PARASTATE: 123,
                    GANCHE: 1337
                },
                p = new Map;

            function m(e) {
                var t = e.routerAddress,
                    n = e.signerOrProvider;
                return new l.CH(t, c, n)
            }

            function h(e) {
                var t = e.address,
                    n = e.signerOrProvider;
                return new l.CH(t, d.Mt, n)
            }

            function b(e) {
                var t = e.tokenAddress,
                    n = e.routerContract,
                    r = e.account;
                return h({
                    address: t,
                    signerOrProvider: e.signerOrProvider
                }).allowance(r, n.address)
            }
            p.set(u.GOERLI, "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a"), p.set(u.MAINNET, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"), p.set(u.ROPSTEN, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"), p.set(u.RINKEBY, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"), p.set(u.KOVAN, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"), p.set(u.DEVNET, "0x04e555283D37aE85F6eB311fe2578F3B3f3dFc52"), p.set(u.AUTONITY, "0x04e555283D37aE85F6eB311fe2578F3B3f3dFc52"), p.set(u.PARASTATE, "0x07a1905D44feeA439ceFAabd11a63bEf684abE11"), p.set(u.GANCHE, "0x0F44AC51198D8F99847db6C431448dBC673428f1");
            var f = (r = (0, i.Z)(s().mark(function e(t) {
                var n, r, a, i, o;
                return s().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.address, r = t.amount, a = t.routerContract, i = t.signerOrProvider, o = new l.CH(n, d.Mt, i), e.abrupt("return", o.approve(a.address, r, {
                                gasLimit: 1e6
                            }));
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return r.apply(this, arguments)
            });

            function g(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = (0, i.Z)(s().mark(function e(t) {
                    var n, r, a, i;
                    return s().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.tokens, r = t.routerContract, a = t.signerOrProvider, i = n.map(function(e) {
                                    return f({
                                        address: e.address,
                                        amount: e.amount,
                                        routerContract: r,
                                        signerOrProvider: a
                                    })
                                }), e.abrupt("return", Promise.all(i));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            var y = (a = (0, i.Z)(s().mark(function e(t) {
                var n, r, a, i, o, d, c;
                return s().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.provider, r = t.signer, a = t.userAddress, i = t.tokenAddress, o = t.isNativeAsset, e.prev = 1, !o) {
                                e.next = 8;
                                break
                            }
                            return e.next = 5, n.getBalance(a);
                        case 5:
                            d = e.sent, e.next = 12;
                            break;
                        case 8:
                            return c = h({
                                address: i,
                                signerOrProvider: r
                            }), e.next = 11, c.balanceOf(a);
                        case 11:
                            d = e.sent;
                        case 12:
                            return e.abrupt("return", d.toString());
                        case 15:
                            return e.prev = 15, e.t0 = e.catch(1), e.abrupt("return", null);
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [1, 15]
                ])
            })), function(e) {
                return a.apply(this, arguments)
            })
        }
    }
]);