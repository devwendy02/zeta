(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4434], {
        41083: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return b
                }
            });
            var n = r(32735);
            r(72594);
            var i = r(60045),
                a = r(53589),
                o = r(98330),
                s = r(90938),
                l = r(40559),
                d = r(86738),
                c = r(77823),
                u = r(57665),
                p = r(8310),
                f = r(92354);

            function h(e) {
                return (0, f.Z)("MuiAccordion", e)
            }
            let m = (0, p.Z)("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]);
            var g = r(74512);
            let x = e => {
                    let {
                        classes: t,
                        square: r,
                        expanded: n,
                        disabled: i,
                        disableGutters: o
                    } = e;
                    return (0, a.Z)({
                        root: ["root", !r && "rounded", n && "expanded", i && "disabled", !o && "gutters"],
                        region: ["region"]
                    }, h, t)
                },
                v = (0, o.ZP)(d.Z, {
                    name: "MuiAccordion",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [{
                            [`& .${m.region}`]: t.region
                        }, t.root, !r.square && t.rounded, !r.disableGutters && t.gutters]
                    }
                })(({
                    theme: e
                }) => {
                    let t = {
                        duration: e.transitions.duration.shortest
                    };
                    return {
                        position: "relative",
                        transition: e.transitions.create(["margin"], t),
                        overflowAnchor: "none",
                        "&:before": {
                            position: "absolute",
                            left: 0,
                            top: -1,
                            right: 0,
                            height: 1,
                            content: '""',
                            opacity: 1,
                            backgroundColor: (e.vars || e).palette.divider,
                            transition: e.transitions.create(["opacity", "background-color"], t)
                        },
                        "&:first-of-type": {
                            "&:before": {
                                display: "none"
                            }
                        },
                        [`&.${m.expanded}`]: {
                            "&:before": {
                                opacity: 0
                            },
                            "&:first-of-type": {
                                marginTop: 0
                            },
                            "&:last-of-type": {
                                marginBottom: 0
                            },
                            "& + &": {
                                "&:before": {
                                    display: "none"
                                }
                            }
                        },
                        [`&.${m.disabled}`]: {
                            backgroundColor: (e.vars || e).palette.action.disabledBackground
                        }
                    }
                }, ({
                    theme: e,
                    ownerState: t
                }) => ({ ...!t.square && {
                        borderRadius: 0,
                        "&:first-of-type": {
                            borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                            borderTopRightRadius: (e.vars || e).shape.borderRadius
                        },
                        "&:last-of-type": {
                            borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
                            borderBottomRightRadius: (e.vars || e).shape.borderRadius,
                            "@supports (-ms-ime-align: auto)": {
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0
                            }
                        }
                    },
                    ...!t.disableGutters && {
                        [`&.${m.expanded}`]: {
                            margin: "16px 0"
                        }
                    }
                }));
            var b = n.forwardRef(function(e, t) {
                let r = (0, s.Z)({
                        props: e,
                        name: "MuiAccordion"
                    }),
                    {
                        children: a,
                        className: o,
                        defaultExpanded: d = !1,
                        disabled: p = !1,
                        disableGutters: f = !1,
                        expanded: h,
                        onChange: m,
                        square: b = !1,
                        TransitionComponent: Z = l.Z,
                        TransitionProps: y,
                        ...w
                    } = r,
                    [N, A] = (0, u.Z)({
                        controlled: h,
                        default: d,
                        name: "Accordion",
                        state: "expanded"
                    }),
                    C = n.useCallback(e => {
                        A(!N), m && m(e, !N)
                    }, [N, m, A]),
                    [k, ...R] = n.Children.toArray(a),
                    B = n.useMemo(() => ({
                        expanded: N,
                        disabled: p,
                        disableGutters: f,
                        toggle: C
                    }), [N, p, f, C]),
                    O = { ...r,
                        square: b,
                        disabled: p,
                        disableGutters: f,
                        expanded: N
                    },
                    S = x(O);
                return (0, g.jsxs)(v, {
                    className: (0, i.default)(S.root, o),
                    ref: t,
                    ownerState: O,
                    square: b,
                    ...w,
                    children: [(0, g.jsx)(c.Z.Provider, {
                        value: B,
                        children: k
                    }), (0, g.jsx)(Z, { in: N,
                        timeout: "auto",
                        ...y,
                        children: (0, g.jsx)("div", {
                            "aria-labelledby": k.props.id,
                            id: k.props["aria-controls"],
                            role: "region",
                            className: S.region,
                            children: R
                        })
                    })]
                })
            })
        },
        77823: function(e, t, r) {
            "use strict";
            let n = r(32735).createContext({});
            t.Z = n
        },
        95580: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return h
                }
            });
            var n = r(32735),
                i = r(60045),
                a = r(53589),
                o = r(98330),
                s = r(90938),
                l = r(8310),
                d = r(92354);

            function c(e) {
                return (0, d.Z)("MuiAccordionDetails", e)
            }(0, l.Z)("MuiAccordionDetails", ["root"]);
            var u = r(74512);
            let p = e => {
                    let {
                        classes: t
                    } = e;
                    return (0, a.Z)({
                        root: ["root"]
                    }, c, t)
                },
                f = (0, o.ZP)("div", {
                    name: "MuiAccordionDetails",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })(({
                    theme: e
                }) => ({
                    padding: e.spacing(1, 2, 2)
                }));
            var h = n.forwardRef(function(e, t) {
                let r = (0, s.Z)({
                        props: e,
                        name: "MuiAccordionDetails"
                    }),
                    {
                        className: n,
                        ...a
                    } = r,
                    o = p(r);
                return (0, u.jsx)(f, {
                    className: (0, i.default)(o.root, n),
                    ref: t,
                    ownerState: r,
                    ...a
                })
            })
        },
        73582: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return b
                }
            });
            var n = r(32735),
                i = r(60045),
                a = r(53589),
                o = r(98330),
                s = r(90938),
                l = r(56537),
                d = r(77823),
                c = r(8310),
                u = r(92354);

            function p(e) {
                return (0, u.Z)("MuiAccordionSummary", e)
            }
            let f = (0, c.Z)("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]);
            var h = r(74512);
            let m = e => {
                    let {
                        classes: t,
                        expanded: r,
                        disabled: n,
                        disableGutters: i
                    } = e;
                    return (0, a.Z)({
                        root: ["root", r && "expanded", n && "disabled", !i && "gutters"],
                        focusVisible: ["focusVisible"],
                        content: ["content", r && "expanded", !i && "contentGutters"],
                        expandIconWrapper: ["expandIconWrapper", r && "expanded"]
                    }, p, t)
                },
                g = (0, o.ZP)(l.Z, {
                    name: "MuiAccordionSummary",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })(({
                    theme: e,
                    ownerState: t
                }) => {
                    let r = {
                        duration: e.transitions.duration.shortest
                    };
                    return {
                        display: "flex",
                        minHeight: 48,
                        padding: e.spacing(0, 2),
                        transition: e.transitions.create(["min-height", "background-color"], r),
                        [`&.${f.focusVisible}`]: {
                            backgroundColor: (e.vars || e).palette.action.focus
                        },
                        [`&.${f.disabled}`]: {
                            opacity: (e.vars || e).palette.action.disabledOpacity
                        },
                        [`&:hover:not(.${f.disabled})`]: {
                            cursor: "pointer"
                        },
                        ...!t.disableGutters && {
                            [`&.${f.expanded}`]: {
                                minHeight: 64
                            }
                        }
                    }
                }),
                x = (0, o.ZP)("div", {
                    name: "MuiAccordionSummary",
                    slot: "Content",
                    overridesResolver: (e, t) => t.content
                })(({
                    theme: e,
                    ownerState: t
                }) => ({
                    display: "flex",
                    flexGrow: 1,
                    margin: "12px 0",
                    ...!t.disableGutters && {
                        transition: e.transitions.create(["margin"], {
                            duration: e.transitions.duration.shortest
                        }),
                        [`&.${f.expanded}`]: {
                            margin: "20px 0"
                        }
                    }
                })),
                v = (0, o.ZP)("div", {
                    name: "MuiAccordionSummary",
                    slot: "ExpandIconWrapper",
                    overridesResolver: (e, t) => t.expandIconWrapper
                })(({
                    theme: e
                }) => ({
                    display: "flex",
                    color: (e.vars || e).palette.action.active,
                    transform: "rotate(0deg)",
                    transition: e.transitions.create("transform", {
                        duration: e.transitions.duration.shortest
                    }),
                    [`&.${f.expanded}`]: {
                        transform: "rotate(180deg)"
                    }
                }));
            var b = n.forwardRef(function(e, t) {
                let r = (0, s.Z)({
                        props: e,
                        name: "MuiAccordionSummary"
                    }),
                    {
                        children: a,
                        className: o,
                        expandIcon: l,
                        focusVisibleClassName: c,
                        onClick: u,
                        ...p
                    } = r,
                    {
                        disabled: f = !1,
                        disableGutters: b,
                        expanded: Z,
                        toggle: y
                    } = n.useContext(d.Z),
                    w = { ...r,
                        expanded: Z,
                        disabled: f,
                        disableGutters: b
                    },
                    N = m(w);
                return (0, h.jsxs)(g, {
                    focusRipple: !1,
                    disableRipple: !0,
                    disabled: f,
                    component: "div",
                    "aria-expanded": Z,
                    className: (0, i.default)(N.root, o),
                    focusVisibleClassName: (0, i.default)(N.focusVisible, c),
                    onClick: e => {
                        y && y(e), u && u(e)
                    },
                    ref: t,
                    ownerState: w,
                    ...p,
                    children: [(0, h.jsx)(x, {
                        className: N.content,
                        ownerState: w,
                        children: a
                    }), l && (0, h.jsx)(v, {
                        className: N.expandIconWrapper,
                        ownerState: w,
                        children: l
                    })]
                })
            })
        },
        97013: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return G
                }
            });
            var n = r(46146),
                i = r(32735),
                a = r(36397),
                o = r(27975),
                s = r(52298),
                l = r(19165),
                d = r(55634),
                c = r(46776),
                u = r(72763),
                p = r(21521),
                f = r(31737),
                h = r(17241),
                m = r(64691),
                g = r(67543),
                x = r(79540),
                v = r(42949),
                b = r(75990),
                Z = r(85243),
                y = r(93868),
                w = r(38839),
                N = function() {
                    return (0, w.tZ)("svg", {
                        width: "119",
                        height: "78",
                        viewBox: "0 0 119 78",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.BX)("g", {
                            opacity: "0.7",
                            children: [(0, w.BX)("g", {
                                opacity: "0.4",
                                children: [(0, w.tZ)("rect", {
                                    x: "2.7334",
                                    y: "17",
                                    width: "61.414",
                                    height: "21.1317",
                                    rx: "4",
                                    className: "fill-[#E5E8EC] dark:fill-[#696E75]"
                                }), (0, w.tZ)("circle", {
                                    cx: "13.9599",
                                    cy: "27.5663",
                                    r: "5.94329",
                                    className: "fill-white dark:fill-[#A9ACB0]"
                                }), (0, w.tZ)("rect", {
                                    x: "25.1855",
                                    y: "22.2832",
                                    width: "33.0183",
                                    height: "3.9622",
                                    rx: "1",
                                    className: "fill-white dark:fill-[#A9ACB0]"
                                }), (0, w.tZ)("rect", {
                                    x: "25.1855",
                                    y: "28.8848",
                                    width: "15.8488",
                                    height: "3.9622",
                                    rx: "1",
                                    className: "fill-white dark:fill-[#A9ACB0]"
                                })]
                            }), (0, w.BX)("g", {
                                filter: "url(#filter0_d_2804_113711)",
                                children: [(0, w.tZ)("rect", {
                                    x: "32.8525",
                                    y: "30.8691",
                                    width: "61.414",
                                    height: "21.1317",
                                    rx: "4",
                                    className: "fill-[#E5E8EC] dark:fill-[#696E75]"
                                }), (0, w.tZ)("circle", {
                                    cx: "44.079",
                                    cy: "41.4335",
                                    r: "5.94329",
                                    className: "fill-white dark:fill-[#A9ACB0]"
                                }), (0, w.tZ)("rect", {
                                    x: "55.3057",
                                    y: "36.1504",
                                    width: "33.0183",
                                    height: "3.9622",
                                    rx: "1",
                                    className: "fill-white dark:fill-[#A9ACB0]"
                                }), (0, w.tZ)("rect", {
                                    x: "55.3057",
                                    y: "42.7539",
                                    width: "15.8488",
                                    height: "3.9622",
                                    rx: "1",
                                    className: "fill-white dark:fill-[#A9ACB0]"
                                })]
                            })]
                        })
                    })
                },
                A = r(87530),
                C = r.n(A),
                k = r(45048),
                R = r(19601),
                B = r.n(R),
                O = r(91064),
                S = r(59299),
                j = r(6280),
                E = function(e) {
                    var t = e.amount,
                        r = e.date,
                        n = e.fromChain,
                        i = e.toChain,
                        a = e.asset,
                        o = (0, v.AA)(),
                        s = o.copy,
                        l = o.locale,
                        d = (0, k.formatUnits)(t, b.zrc20TokenDecimals[a]),
                        c = (0, O.dN)(d, l),
                        u = S.tX.get(a);
                    return (0, w.BX)("div", {
                        className: "flex items-center gap-2.5",
                        children: [(0, w.tZ)("div", {
                            className: "relative w-7 h-7 flex-shrink-0 self-start mt-[3px]",
                            children: (0, w.tZ)(B(), {
                                src: g.RU,
                                layout: "fill"
                            })
                        }), (0, w.BX)("div", {
                            className: "flex gap-2 w-full",
                            children: [(0, w.BX)("div", {
                                className: "basis-1/2",
                                children: [(0, w.tZ)(h.Z, {
                                    variant: "caption",
                                    className: "font-medium mb-1",
                                    children: s.hub.send.crossChainSend
                                }), (0, w.tZ)(h.Z, {
                                    variant: "caption",
                                    className: "text-grey-400 dark:text-grey-300",
                                    children: C()(r).fromNow()
                                })]
                            }), (0, w.BX)("div", {
                                className: "basis-1/2",
                                children: [(0, w.BX)(h.Z, {
                                    variant: "caption",
                                    className: "flex justify-end items-center font-medium mb-1 gap-1 text-right",
                                    children: [c, " ", a, u && (0, w.tZ)("span", {
                                        className: "inline-block w-4 h-4 flex-shrink-0 relative",
                                        children: (0, w.tZ)(B(), {
                                            src: u,
                                            layout: "fill"
                                        })
                                    })]
                                }), (0, w.BX)(h.Z, {
                                    variant: "caption",
                                    className: "text-grey-400 dark:text-grey-300 text-right",
                                    children: [j.RF.get(j.Pq.get(n)), " ", s.hub.shared.to, " ", j.RF.get(j.Pq.get(i))]
                                })]
                            })]
                        })]
                    })
                },
                M = r(75246);

            function P(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(r), !0).forEach(function(t) {
                        (0, f.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var _ = function() {
                    var e = (0, v.AA)().copy,
                        t = (0, d.Os)(),
                        r = t.address,
                        n = t.isConnected,
                        i = t.openConnectModal,
                        o = (0, a.v9)(x.LQ.selectXDEFIState).bitcoinAccount,
                        l = (0, y.h7)({
                            evmAddress: r,
                            btcAddress: o
                        }, {
                            skip: !n,
                            refetchOnMountOrArgChange: !0,
                            pollingInterval: 30 * b.ONE_SECOND_IN_MS
                        }),
                        c = l.data,
                        u = l.isLoading,
                        p = !u && !(null != c && c.length),
                        f = !u && !!(null != c && c.length);
                    return (0, w.BX)(s.Zb, {
                        className: "h-full px-0",
                        children: [(0, w.tZ)(h.Z, {
                            variant: "headline2",
                            className: "mb-8 md:mb-10 px-4 md:px-6",
                            children: e.hub.send.recentSends
                        }), n ? (0, w.BX)("div", {
                            className: "h-full w-full flex flex-col gap-9 px-4 md:px-6 overflow-auto",
                            children: [u && Array.from({
                                length: 10
                            }).map(function(e, t) {
                                return (0, M.az)(Z.E.div, X(X({}, (0, g.zW)({
                                    y: 4,
                                    delay: .2 + .05 * t
                                })), {}, {
                                    key: t
                                }), (0, w.tZ)(m.Z, {
                                    variant: "rectangular",
                                    height: 36,
                                    sx: {
                                        borderRadius: "4px"
                                    }
                                }))
                            }), p && (0, w.BX)("div", {
                                className: "flex flex-col items-center justify-center flex-1 py-10 px-4 md:px-6",
                                children: [(0, w.tZ)(N, {}), (0, w.tZ)(h.Z, {
                                    variant: "caption",
                                    className: "text-center text-grey-400 dark:text-grey-300",
                                    children: e.hub.send.noRecentSendsToShow
                                })]
                            }), f && c.map(function(e) {
                                return (0, w.tZ)(E, X({}, e), e.hash)
                            })]
                        }) : (0, w.tZ)(s.Vw, {
                            caption: e.hub.send.noWalletConnectedCaption,
                            onClick: i
                        })]
                    })
                },
                V = function() {
                    return (0, w.tZ)("svg", {
                        width: "12",
                        height: "14",
                        viewBox: "0 0 12 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, w.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2.83268 3.66667C2.83268 1.91777 4.25045 0.5 5.99935 0.5C7.74825 0.5 9.16602 1.91777 9.16602 3.66667V5.83333H11.8327V11.6667C11.8327 12.6792 11.0119 13.5 9.99935 13.5H1.99935C0.986827 13.5 0.166016 12.6792 0.166016 11.6667V5.83333H2.83268V3.66667ZM3.83268 5.83333H8.16602V3.66667C8.16602 2.47005 7.19597 1.5 5.99935 1.5C4.80273 1.5 3.83268 2.47005 3.83268 3.66667V5.83333ZM1.16602 6.83333V11.6667C1.16602 12.1269 1.53911 12.5 1.99935 12.5H9.99935C10.4596 12.5 10.8327 12.1269 10.8327 11.6667V6.83333H1.16602ZM6.49935 8.5V10.8333H5.49935V8.5H6.49935Z",
                            className: "fill-[#A9ACB0] dark:fill-[#696E75]"
                        })
                    })
                },
                I = (0, n.Z)("div", {
                    target: "ei0nw9e0"
                })({
                    name: "1tpvyg6",
                    styles: "display:flex;align-items:center;justify-content:center;gap:0.375rem;text-align:center;"
                }),
                D = function() {
                    var e = (0, v.AA)().copy;
                    return (0, w.BX)(I, {
                        children: [(0, w.tZ)(V, {}), (0, w.tZ)(h.Z, {
                            variant: "caption",
                            className: "text-grey-300 dark:text-grey-400",
                            children: e.hub.send.sendPoweredBy
                        })]
                    })
                },
                H = (0, n.Z)("div", {
                    target: "e104o7b30"
                })({
                    name: "bl7f6j",
                    styles: "height:100%;width:100%;padding:1.5rem;@media (min-width: 900px){height:calc(100vh - 64px);padding:2rem;flex-basis:600px;}"
                }),
                $ = function() {
                    var e = (0, d.Os)().chainId,
                        t = (0, a.v9)(p.A.sendTokenState).fromChainId,
                        r = (0, i.useState)(),
                        n = r[0],
                        f = r[1];
                    return (0, i.useEffect)(function() {
                        if (!t) {
                            var r = l.Kn.safeParse(String(e));
                            if (r.success && (0, u.hC)(r.data)) {
                                f(r.data);
                                return
                            }
                            f(c.N2.chainId)
                        }
                    }, [t, e]), (0, w.BX)("div", {
                        className: "md:flex pb-16 sm:pb-0",
                        children: [(0, w.tZ)("div", {
                            className: "h-full w-full md:flex-basis[600px] md:h-[calc(100vh - 64px)] p-6 md:p-8",
                            children: (0, w.BX)(s.Zb, {
                                className: "w-full md:max-w-[560px] mx-auto gap-3",
                                children: [(0, w.tZ)(o.v, {
                                    defaultFromChainId: n,
                                    showBackButton: !1
                                }), (0, w.tZ)(D, {})]
                            })
                        }), (0, w.tZ)(H, {
                            children: (0, w.tZ)(_, {})
                        })]
                    })
                },
                T = r(22209),
                W = r(23575),
                G = function() {
                    return (0, W.N)().shouldDisableSendPage ? (0, w.tZ)(T.f, {}) : (0, w.tZ)($, {})
                }
        },
        86472: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/send", function() {
                return r(97013)
            }])
        }
    },
    function(e) {
        e.O(0, [4397, 7975, 9774, 2888, 179], function() {
            return e(e.s = 86472)
        }), _N_E = e.O()
    }
]);