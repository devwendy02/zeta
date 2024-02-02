(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1275], {
        16974: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function() {
                    return q
                },
                default: function() {
                    return U
                }
            });
            var i, a, l = r(31737),
                n = r(17241),
                o = r(25294),
                c = r(42949),
                d = r(95453),
                s = r(60045),
                g = r(32735),
                u = r(92839);
            r(85210).nw.NameAsc;
            var h = ((i = {}).Chain = "Chain", i.DAO = "DAO", i.DeFi = "DeFi", i.Gaming = "Gaming", i.Infrastructure = "Infrastructure", i.NFT = "NFT", i.Payments = "Payments", i.Security = "Security", i.Social = "Social", i.Validator = "Validator", i.Wallets = "Wallets", i.Other = "Other", i),
                p = Object.values(h),
                m = (a = {}, (0, l.Z)(a, h.Chain, "bg-green-200"), (0, l.Z)(a, h.DAO, "bg-[#FA5628]"), (0, l.Z)(a, h.DeFi, "bg-[#7A4B5C]"), (0, l.Z)(a, h.Gaming, "bg-green-700"), (0, l.Z)(a, h.Infrastructure, "bg-[#D4FF5C]"), (0, l.Z)(a, h.NFT, "bg-[#1D7789]"), (0, l.Z)(a, h.Payments, "bg-positive-500"), (0, l.Z)(a, h.Social, "bg-warning-500"), (0, l.Z)(a, h.Wallets, "bg-grey-300"), (0, l.Z)(a, h.Validator, "bg-[#4FA9BB]"), (0, l.Z)(a, h.Security, "bg-[#FFC093]"), (0, l.Z)(a, h.Other, "bg-info-200"), a);
            r(72975);
            var f = function(e) {
                    return m[e] || "bg-zeta-lime"
                },
                y = function(e) {
                    var t = e.projects,
                        r = e.searchQuery;
                    return t.filter(function(e) {
                        var t = r.trim().toLowerCase();
                        return (null != e && e.name ? e.name.toLowerCase() : "").includes(t)
                    })
                },
                x = function(e) {
                    var t = e.projects,
                        r = e.searchQuery,
                        i = e.tagsSelected,
                        a = r ? y({
                            projects: t,
                            searchQuery: r
                        }) : t;
                    return null != i && i.length ? a.filter(function(e) {
                        return i.some(function(t) {
                            var r;
                            return null == e || null === (r = e.tags) || void 0 === r ? void 0 : r.includes(t)
                        })
                    }) : a
                },
                b = function(e) {
                    var t = (0, g.useState)(""),
                        r = t[0],
                        i = t[1],
                        a = (0, g.useState)([]),
                        l = a[0],
                        n = a[1],
                        o = (0, g.useMemo)(function() {
                            return x({
                                projects: e,
                                searchQuery: r,
                                tagsSelected: l
                            })
                        }, [e, r, l]);
                    return {
                        searchInput: {
                            searchQuery: r,
                            setSearchQuery: i
                        },
                        tagsFilter: {
                            tagsSelected: l,
                            setTagsSelected: n
                        },
                        filteredEcosystemProjects: o
                    }
                },
                w = r(21515),
                v = r(46146),
                Z = r(94682),
                k = r(38839),
                N = function() {
                    return (0, k.tZ)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, k.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2.16699 3.99935C2.16699 2.98683 2.9878 2.16602 4.00033 2.16602H7.16699V7.16602H2.16699V3.99935ZM4.00033 3.16602C3.54009 3.16602 3.16699 3.53911 3.16699 3.99935V6.16602H6.16699V3.16602H4.00033ZM8.83366 2.16602H12.0003C13.0128 2.16602 13.8337 2.98683 13.8337 3.99935V7.16602H8.83366V2.16602ZM9.83366 3.16602V6.16602H12.8337V3.99935C12.8337 3.53911 12.4606 3.16602 12.0003 3.16602H9.83366ZM2.16699 8.83268H7.16699V13.8327H4.00033C2.9878 13.8327 2.16699 13.0119 2.16699 11.9993V8.83268ZM3.16699 9.83268V11.9993C3.16699 12.4596 3.54009 12.8327 4.00033 12.8327H6.16699V9.83268H3.16699ZM8.83366 8.83268H13.8337V11.9993C13.8337 13.0119 13.0128 13.8327 12.0003 13.8327H8.83366V8.83268ZM9.83366 9.83268V12.8327H12.0003C12.4606 12.8327 12.8337 12.4596 12.8337 11.9993V9.83268H9.83366Z",
                            className: "fill-black dark:fill-white"
                        })
                    })
                },
                C = (0, v.Z)("button", {
                    target: "e5a03wl0"
                })({
                    name: "iwg2qn",
                    styles: "display:flex;width:100%;min-width:150px;align-items:center;gap:0.5rem;border-radius:0.125rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.625rem;padding-bottom:0.625rem;font-size:0.75rem;line-height:130%;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;:hover{--tw-bg-opacity:1;background-color:rgb(239 241 244 / var(--tw-bg-opacity));}.dark &{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.dark &:hover{--tw-bg-opacity:1;background-color:rgb(45 50 55 / var(--tw-bg-opacity));}"
                }),
                E = function(e) {
                    var t = e.searchInput,
                        r = e.tagsFilter,
                        i = (0, c.AA)().copy,
                        a = r.tagsSelected,
                        l = r.setTagsSelected,
                        n = (0, g.useState)(null),
                        d = n[0],
                        u = n[1];
                    return (0, k.BX)("div", {
                        className: "flex gap-2.5 flex-wrap",
                        children: [(0, k.tZ)(o.i_r, {
                            searchInput: t,
                            placeholder: i.hub.appEcosystem.searchByName
                        }), (0, k.BX)("div", {
                            children: [(0, k.tZ)(o.kHo, {
                                color: "info",
                                className: "!w-auto min-w-0 !py-1.5 !px-3 !rounded-sm",
                                onClick: function(e) {
                                    return u(d ? null : e.currentTarget)
                                },
                                children: (0, k.BX)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0, k.tZ)(N, {}), i.hub.appEcosystem.filter]
                                })
                            }), (0, k.BX)(Z.Z, {
                                sx: {
                                    mt: "8px"
                                },
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                anchorEl: d,
                                open: !!d,
                                onClose: function() {
                                    return u(null)
                                },
                                children: [(0, k.BX)(C, {
                                    onClick: function() {
                                        l([])
                                    },
                                    children: [(0, k.tZ)("div", {
                                        className: "flex-grow text-left leading-none",
                                        children: i.hub.appEcosystem.all
                                    }), (0, k.tZ)("div", {
                                        className: (0, s.default)("w-3 h-3 rounded-sm border border-grey-500", {
                                            "bg-green-50 dark:bg-zeta-lime border-green-50 dark:border-zeta-lime": !a.length
                                        })
                                    })]
                                }), p.map(function(e) {
                                    return (0, k.BX)(C, {
                                        onClick: function() {
                                            l(function(t) {
                                                return t.includes(e) ? t.filter(function(t) {
                                                    return t !== e
                                                }) : [].concat((0, w.Z)(t), [e])
                                            })
                                        },
                                        children: [(0, k.tZ)("div", {
                                            className: (0, s.default)("w-3 h-3 rounded-full", f(e || ""))
                                        }), (0, k.tZ)("div", {
                                            className: "flex-grow text-left leading-none",
                                            children: e
                                        }), (0, k.tZ)("div", {
                                            className: (0, s.default)("w-3 h-3 rounded-sm border border-grey-500", {
                                                "bg-green-50 dark:bg-zeta-lime border-green-50 dark:border-zeta-lime": a.includes(e)
                                            })
                                        })]
                                    }, e)
                                })]
                            })]
                        })]
                    })
                },
                V = function(e) {
                    var t = e.ecosystemProjects,
                        r = e.pageNumber,
                        i = e.setPageNumber,
                        a = Math.ceil(t.length / 9);
                    return (0, k.BX)("div", {
                        className: "flex items-center justify-center sm:justify-end gap-2.5 flex-wrap",
                        children: [(0, k.tZ)(o.kHo, {
                            color: "info",
                            className: "!w-auto min-w-0 !p-2 !rounded-sm !font-normal !text-xs",
                            onClick: function() {
                                return i(1)
                            },
                            disabled: 1 === r,
                            children: "First"
                        }), (0, k.tZ)("button", {
                            type: "button",
                            onClick: function() {
                                return i(r - 1)
                            },
                            disabled: 1 === r,
                            children: (0, k.tZ)(o.ed9, {
                                className: (0, s.default)("w-4 h-4 transition-all", {
                                    "text-grey-200 dark:text-grey-500": 1 === r
                                })
                            })
                        }), (0, k.BX)(n.Z, {
                            variant: "caption",
                            className: (0, s.default)("transition-all", {
                                "text-grey-200 dark:text-grey-500": 1 === a
                            }),
                            children: ["Page ", r, " ", (0, k.BX)("span", {
                                className: (0, s.default)("transition-all", {
                                    "text-grey-300 dark:text-grey-400": a > 1
                                }),
                                children: ["of ", a]
                            })]
                        }), (0, k.tZ)("button", {
                            type: "button",
                            onClick: function() {
                                return i(r + 1)
                            },
                            disabled: r === a,
                            children: (0, k.tZ)(o.VG8, {
                                className: (0, s.default)("w-4 h-4 transition-all", {
                                    "text-grey-200 dark:text-grey-500": r === a
                                })
                            })
                        }), (0, k.tZ)(o.kHo, {
                            color: "info",
                            className: "!w-auto min-w-0 !p-2 !rounded-sm !font-normal !text-xs",
                            onClick: function() {
                                return i(a)
                            },
                            disabled: r === a,
                            children: "Last"
                        })]
                    })
                },
                j = r(41083),
                B = r(73582),
                H = r(95580),
                X = r(66551),
                _ = r(19601),
                L = r.n(_),
                O = (0, v.Z)(j.Z, {
                    target: "e8qzfw42"
                })({
                    name: "x7gufq",
                    styles: "margin:0px !important;border-style:none;background-color:transparent;background-image:none;padding:0px !important;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); box-shadow:none;:before,:after{background-color:transparent !important;background-image:none !important;;}.MuiCollapse-root,.MuiCollapse-wrapper,.MuiCollapse-wrapperInner,.MuiAccordion-region{display:flex;width:100%;flex-grow:1;flex-direction:column;align-items:center;;}"
                }),
                P = (0, v.Z)("div", {
                    target: "e8qzfw41"
                })({
                    name: "1hltett",
                    styles: "position:absolute;left:0px;top:0px;width:100%;border-top-left-radius:5px;border-top-right-radius:5px;--tw-bg-opacity:1;background-color:rgb(212 255 92 / var(--tw-bg-opacity));padding-top:0.125rem;padding-bottom:0.125rem;padding-left:1rem;padding-right:1rem;text-align:right;font-size:0.75rem;line-height:130%;font-weight:500;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));@media (min-width: 900px){text-align:center;}"
                }),
                M = (0, v.Z)("div", {
                    target: "e8qzfw40"
                })({
                    name: "m5m8fi",
                    styles: "position:absolute;right:0px;top:0px;display:flex;align-items:center;gap:0.375rem;border-top-right-radius:4px;border-bottom-left-radius:5px;--tw-bg-opacity:1;background-color:rgb(229 232 236 / var(--tw-bg-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:1rem;padding-right:1rem;font-size:0.75rem;line-height:130%;font-weight:500;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));.dark &{--tw-bg-opacity:1;background-color:rgb(60 65 70 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}"
                }),
                S = function(e) {
                    var t, r, i, a, n = e.project,
                        h = e.isSelected,
                        p = (0, c.AA)().copy,
                        m = (0, c.cK)(),
                        y = m.upMd,
                        x = m.upLg,
                        b = (0, g.useState)(y),
                        w = b[0],
                        v = b[1],
                        Z = null !== (t = null === (r = n.status) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : "";
                    return (0, g.useEffect)(function() {
                        v(y)
                    }, [y]), (0, k.BX)(O, {
                        expanded: w,
                        onChange: function() {
                            return !y && v(function(e) {
                                return !e
                            })
                        },
                        classes: {
                            root: "h-full p-0 !rounded-[5px] grid gap-4 transition-[background-color] relative ".concat(void 0 !== h && h && x ? "bg-grey-100 dark:bg-grey-600" : "bg-grey-50 dark:bg-grey-700")
                        },
                        children: [(0, k.BX)(B.Z, {
                            expandIcon: null,
                            classes: {
                                root: "w-full p-0",
                                content: "flex gap-3 items-center px-4 md:px-6 m-0 w-full ".concat((0, X.eks)(Z) ? "pt-4 md:pt-10" : "pt-8 md:pt-10")
                            },
                            children: [(0, X.VnR)(Z) && ((0, X.E_X)(n.featuredLink) ? (0, k.BX)(u.V, {
                                href: n.featuredLink.href,
                                className: "absolute left-0 top-0 flex items-center justify-end md:justify-center gap-1 w-full bg-green-100 hover:bg-green-200 transition-colors duration-300 text-grey-900 py-0.5 px-4 text-xs font-medium rounded-t-[5px] text-right md:text-center",
                                onRedirect: function() {
                                    (0, d.L9)(d._E.EcosystemProjectFeaturedLinkClicked, (0, l.Z)({}, d.gp.Url, n.featuredLink.href))
                                },
                                children: [n.featuredLink.title, " ", (0, k.tZ)(o.TqL, {
                                    className: "w-3 h-3"
                                })]
                            }) : (0, k.tZ)(P, {
                                children: p.hub.appEcosystem.featured
                            })), !(0, X.VnR)(Z) && !(0, X.eks)(Z) && (0, k.BX)(M, {
                                children: [(0, X.R0w)(Z) && (0, k.tZ)("div", {
                                    className: "bg-green-100 dark:bg-positive-500 w-2 h-2 rounded-full shrink-0"
                                }), Z]
                            }), (null === (i = n.image) || void 0 === i ? void 0 : i.url) && (0, k.tZ)("figure", {
                                className: "flex items-center justify-center h-12 w-12 shrink-0 rounded-[10px] shadow-light dark:shadow-none bg-white dark:bg-grey-600",
                                children: (0, k.tZ)(L(), {
                                    src: n.image.url,
                                    height: 48,
                                    width: 48,
                                    className: "rounded-[10px]"
                                })
                            }), (0, k.BX)("div", {
                                className: "grid gap-2 text-left",
                                children: [(0, k.tZ)("p", {
                                    className: "text-xl text-grey-900 dark:text-grey-50 overflow-hidden overflow-ellipsis",
                                    children: n.name
                                }), n.tags && (0, k.tZ)("div", {
                                    className: "flex items-start gap-1 flex-wrap",
                                    children: n.tags.map(function(e) {
                                        return (0, k.BX)("span", {
                                            className: "flex items-center gap-1 capitalize px-2 py-1 rounded-full text-xs text-black dark:text-white border border-grey-200 dark:border-grey-500",
                                            children: [(0, k.tZ)("div", {
                                                className: (0, s.default)("w-2 h-2 rounded-full", f(e || ""))
                                            }), e]
                                        }, e)
                                    })
                                })]
                            })]
                        }), (0, k.BX)(H.Z, {
                            classes: {
                                root: "px-4 md:px-6 pb-4 pt-0 m-0 w-full"
                            },
                            children: [(0, k.tZ)("p", {
                                className: "md:h-10 text-left text-sm text-grey-900 dark:text-grey-50 md:overflow-hidden mb-3",
                                style: y ? {
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical"
                                } : {},
                                children: n.description
                            }), (0, k.tZ)("div", {
                                className: "flex gap-1",
                                children: null === (a = n.links) || void 0 === a ? void 0 : a.map(function(e) {
                                    return (0, k.tZ)(u.V, {
                                        href: e,
                                        className: "block text-grey-300 dark:text-grey-400",
                                        onRedirect: function() {
                                            (0, d.L9)(d._E.EcosystemProjectLinkClicked, (0, l.Z)({}, d.gp.Url, e))
                                        },
                                        children: (0, g.createElement)((0, X.WIW)(e), {
                                            className: "h-6 w-6"
                                        })
                                    }, e)
                                })
                            })]
                        })]
                    }, n.name)
                },
                F = (0, k.BX)("svg", {
                    width: "45",
                    height: "28",
                    viewBox: "0 0 45 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, k.tZ)("rect", {
                        x: "0.5",
                        width: "12",
                        height: "12",
                        rx: "2",
                        className: "opacity-50 dark:opacity-100 fill-grey-300 dark:fill-grey-500"
                    }), (0, k.tZ)("rect", {
                        x: "16.5",
                        width: "12",
                        height: "12",
                        rx: "2",
                        className: "fill-grey-200 dark:fill-grey-400"
                    }), (0, k.tZ)("rect", {
                        x: "32.5",
                        width: "12",
                        height: "12",
                        rx: "2",
                        className: "fill-grey-300 dark:fill-grey-600"
                    }), (0, k.tZ)("rect", {
                        x: "0.5",
                        y: "16",
                        width: "12",
                        height: "12",
                        rx: "2",
                        className: "fill-grey-300 dark:fill-grey-600"
                    }), (0, k.tZ)("rect", {
                        x: "16.5",
                        y: "16",
                        width: "12",
                        height: "12",
                        rx: "2",
                        className: "opacity-50 dark:opacity-100 fill-grey-300 dark:fill-grey-500"
                    })]
                }),
                R = (0, v.Z)("div", {
                    target: "e15mmxpw1"
                })({
                    name: "152x4gd",
                    styles: "position:absolute;left:0px;top:0px;width:100%;border-top-left-radius:5px;border-top-right-radius:5px;--tw-bg-opacity:1;background-color:rgb(212 255 92 / var(--tw-bg-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:1rem;padding-right:1rem;text-align:right;font-size:0.875rem;line-height:130%;font-weight:500;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));@media (min-width: 900px){text-align:center;}"
                }),
                z = (0, v.Z)("div", {
                    target: "e15mmxpw0"
                })({
                    name: "1q6r8ld",
                    styles: "position:absolute;right:0px;top:0px;display:flex;align-items:center;gap:0.375rem;border-top-right-radius:5px;border-bottom-left-radius:5px;--tw-bg-opacity:1;background-color:rgb(229 232 236 / var(--tw-bg-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:1rem;padding-right:1rem;font-size:0.875rem;line-height:130%;font-weight:500;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));.dark &{--tw-bg-opacity:1;background-color:rgb(60 65 70 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}"
                }),
                D = function(e) {
                    var t, r, i, a, n = e.project,
                        h = (0, c.AA)().copy.hub.appEcosystem,
                        p = null !== (t = null == n || null === (r = n.status) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : "";
                    return ((0, g.useEffect)(function() {
                        n && (0, d.L9)(d._E.HubEcosystemProjectDetailsViewed, (0, l.Z)({}, d.gp.Title, n.name))
                    }, [n]), n) ? (0, k.BX)("div", {
                        className: "grid gap-8 pt-6",
                        children: [(0, X.VnR)(p) && ((0, X.E_X)(n.featuredLink) ? (0, k.BX)(u.V, {
                            href: n.featuredLink.href,
                            className: "absolute left-0 top-0 flex items-center justify-end md:justify-center gap-1 w-full bg-green-100 hover:bg-green-200 transition-colors duration-300 text-grey-900 py-1 px-4 text-sm font-medium rounded-t-[5px] text-right md:text-center",
                            onRedirect: function() {
                                (0, d.L9)(d._E.EcosystemProjectFeaturedLinkClicked, (0, l.Z)({}, d.gp.Url, n.featuredLink.href))
                            },
                            children: [n.featuredLink.title, " ", (0, k.tZ)(o.TqL, {
                                className: "w-4 h-4"
                            })]
                        }) : (0, k.tZ)(R, {
                            children: h.featured
                        })), !(0, X.VnR)(p) && !(0, X.eks)(p) && (0, k.BX)(z, {
                            children: [(0, X.R0w)(p) && (0, k.tZ)("div", {
                                className: "bg-green-100 dark:bg-positive-500 w-2 h-2 rounded-full shrink-0"
                            }), p]
                        }), (0, k.BX)("div", {
                            className: "flex items-center gap-3",
                            children: [(null == n || null === (i = n.image) || void 0 === i ? void 0 : i.url) && (0, k.tZ)("figure", {
                                className: "h-16 w-16 shrink-0 rounded-full shadow-light dark:shadow-none bg-white dark:bg-grey-600",
                                children: (0, k.tZ)(L(), {
                                    src: n.image.url,
                                    height: 64,
                                    width: 64,
                                    className: "rounded-full"
                                })
                            }), (0, k.BX)("div", {
                                className: "grid gap-2 text-left",
                                children: [(0, k.tZ)("p", {
                                    className: "text-2xl text-grey-900 dark:text-grey-50 font-medium",
                                    children: n.name
                                }), n.tags && (0, k.tZ)("div", {
                                    className: "flex items-start gap-1 flex-wrap",
                                    children: n.tags.map(function(e) {
                                        return (0, k.BX)("span", {
                                            className: "flex items-center gap-1 capitalize px-2 py-1 rounded-full text-xs text-black dark:text-white border border-grey-200 dark:border-grey-500",
                                            children: [(0, k.tZ)("div", {
                                                className: (0, s.default)("w-2 h-2 rounded-full", f(e || ""))
                                            }), e]
                                        }, e)
                                    })
                                })]
                            })]
                        }), (0, k.tZ)("div", {
                            className: "flex flex-wrap gap-2",
                            children: null === (a = n.links) || void 0 === a ? void 0 : a.map(function(e) {
                                return (0, k.tZ)(u.V, {
                                    href: e || "",
                                    className: "text-grey-400 dark:text-grey-300",
                                    onRedirect: function() {
                                        (0, d.L9)(d._E.EcosystemProjectLinkClicked, (0, l.Z)({}, d.gp.Url, e))
                                    },
                                    children: (0, g.createElement)((0, X.WIW)(e || ""), {
                                        className: "h-7 w-7"
                                    })
                                }, e)
                            })
                        }), (0, k.BX)("div", {
                            children: [(0, k.BX)("p", {
                                className: "text-sm text-grey-400 dark:text-grey-300 mb-2",
                                children: [h.about, " ", n.name]
                            }), (0, k.tZ)("p", {
                                className: "text-sm text-grey-900 dark:text-grey-50",
                                children: n.description
                            })]
                        })]
                    }) : (0, k.BX)("div", {
                        className: "h-full flex flex-col gap-4 items-center justify-center",
                        children: [(0, k.tZ)("figure", {
                            children: F
                        }), (0, k.tZ)("p", {
                            className: "text-sm text-center text-grey-400 dark:text-grey-300",
                            children: h.clickProjectForDetails
                        })]
                    })
                },
                A = function() {
                    return (0, k.BX)("svg", {
                        width: "70",
                        height: "70",
                        viewBox: "0 0 70 70",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, k.tZ)("rect", {
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            y: "25",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            y: "50",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "25",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "50",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "25",
                            y: "25",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "25",
                            y: "50",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "50",
                            y: "25",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "50",
                            y: "50",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        })]
                    })
                },
                T = function() {
                    return (0, k.BX)("svg", {
                        width: "70",
                        height: "70",
                        viewBox: "0 0 70 70",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, k.tZ)("rect", {
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            y: "25",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            y: "50",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "25",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "50",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "25",
                            y: "25",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "25",
                            y: "50",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "50",
                            y: "25",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("rect", {
                            x: "50",
                            y: "50",
                            width: "20",
                            height: "20",
                            rx: "4",
                            className: "fill-grey-200 dark:fill-grey-500"
                        }), (0, k.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M29.5602 12.7858C20.8483 12.7858 13.7858 19.8483 13.7858 28.5602C13.7858 37.2721 20.8483 44.3345 29.5602 44.3345C38.2721 44.3345 45.3345 37.2721 45.3345 28.5602C45.3345 19.8483 38.2721 12.7858 29.5602 12.7858ZM10 28.5602C10 17.7574 18.7574 9 29.5602 9C40.363 9 49.1204 17.7574 49.1204 28.5602C49.1204 33.2799 47.4487 37.6092 44.6653 40.9883L60 56.323L57.323 59L41.9883 43.6653C38.6092 46.4487 34.2799 48.1204 29.5602 48.1204C18.7574 48.1204 10 39.363 10 28.5602Z",
                            fill: "#8E8E8E"
                        }), (0, k.tZ)("mask", {
                            id: "mask0_1332_2720",
                            style: {
                                "mask-type": "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "13",
                            y: "12",
                            width: "33",
                            height: "33",
                            children: (0, k.tZ)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M29.5595 12.7852C20.8476 12.7852 13.7852 19.8476 13.7852 28.5595C13.7852 37.2714 20.8476 44.3338 29.5595 44.3338C38.2714 44.3338 45.3338 37.2714 45.3338 28.5595C45.3338 19.8476 38.2714 12.7852 29.5595 12.7852Z",
                                className: "fill-grey-200 dark:fill-grey-500"
                            })
                        }), (0, k.tZ)("g", {
                            mask: "url(#mask0_1332_2720)",
                            children: (0, k.tZ)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4ZM0 29C0 26.7909 1.79086 25 4 25H16C18.2091 25 20 26.7909 20 29V41C20 43.2091 18.2091 45 16 45H4C1.79086 45 0 43.2091 0 41V29ZM4 50C1.79086 50 0 51.7909 0 54V66C0 68.2091 1.79086 70 4 70H16C18.2091 70 20 68.2091 20 66V54C20 51.7909 18.2091 50 16 50H4ZM25 4C25 1.79086 26.7909 0 29 0H41C43.2091 0 45 1.79086 45 4V16C45 18.2091 43.2091 20 41 20H29C26.7909 20 25 18.2091 25 16V4ZM54 0C51.7909 0 50 1.79086 50 4V16C50 18.2091 51.7909 20 54 20H66C68.2091 20 70 18.2091 70 16V4C70 1.79086 68.2091 0 66 0H54ZM25 29C25 26.7909 26.7909 25 29 25H41C43.2091 25 45 26.7909 45 29V41C45 43.2091 43.2091 45 41 45H29C26.7909 45 25 43.2091 25 41V29ZM29 50C26.7909 50 25 51.7909 25 54V66C25 68.2091 26.7909 70 29 70H41C43.2091 70 45 68.2091 45 66V54C45 51.7909 43.2091 50 41 50H29ZM50 29C50 26.7909 51.7909 25 54 25H66C68.2091 25 70 26.7909 70 29V41C70 43.2091 68.2091 45 66 45H54C51.7909 45 50 43.2091 50 41V29ZM54 50C51.7909 50 50 51.7909 50 54V66C50 68.2091 51.7909 70 54 70H66C68.2091 70 70 68.2091 70 66V54C70 51.7909 68.2091 50 66 50H54Z",
                                className: "fill-grey-200 dark:fill-grey-500"
                            })
                        }), (0, k.tZ)("circle", {
                            cx: "46",
                            cy: "25",
                            r: "10",
                            fill: "#8E8E8E"
                        }), (0, k.tZ)("rect", {
                            x: "45",
                            y: "19",
                            width: "2",
                            height: "8",
                            fill: "#EDE9ED"
                        }), (0, k.tZ)("circle", {
                            cx: "46",
                            cy: "30",
                            r: "1",
                            fill: "#EDE9ED"
                        })]
                    })
                },
                I = function(e) {
                    var t = e.ecosystemProjects,
                        r = e.totalEcosystemProjects,
                        i = (0, c.AA)().copy,
                        a = (0, c.cK)().upLg,
                        h = (0, g.useState)(null),
                        p = h[0],
                        m = h[1],
                        f = (0, g.useState)(1),
                        y = f[0],
                        x = f[1];
                    (0, g.useEffect)(function() {
                        t.length && r && t.length < r && console.error("Ecosystem Projects are not being fetched correctly. Expected ".concat(r, " projects but only received ").concat(t.length, "."))
                    }, [t, r]);
                    var w = b(t),
                        v = w.searchInput,
                        Z = w.tagsFilter,
                        N = w.filteredEcosystemProjects,
                        C = N.length > 9,
                        j = (0, g.useMemo)(function() {
                            return C ? N.slice((y - 1) * 9, 9 * y) : N
                        }, [y, C, N]);
                    return (0, g.useEffect)(function() {
                        x(1)
                    }, [v.searchQuery, Z.tagsSelected.length]), (0, g.useEffect)(function() {
                        a && p && window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }, [a, p]), (0, k.BX)("div", {
                        className: "md:grid md:grid-cols-[minmax(0,_8fr)_minmax(0,_4fr)]",
                        style: {
                            minHeight: "calc(100vh - 4rem - 14rem)"
                        },
                        children: [(0, k.tZ)("div", {
                            className: "p-4 lg:p-8 md:border-r md:border-r-grey-100 dark:md:border-r-grey-700",
                            children: (0, k.BX)("div", {
                                className: "h-full flex flex-col gap-6 bg-grey-50 dark:bg-grey-800 rounded-[5px] p-4 md:p-6 shadow-light dark:shadow-none",
                                children: [(0, k.BX)("div", {
                                    className: "flex justify-between items-center gap-x-6 gap-y-3 flex-wrap",
                                    children: [(0, k.tZ)(n.Z, {
                                        variant: "headline2",
                                        children: i.hub.appEcosystem.title
                                    }), (0, k.tZ)(u.V, {
                                        displayUrl: o.Up,
                                        href: o.$s0,
                                        className: "text-sm font-medium text-green-100",
                                        onRedirect: function() {
                                            (0, d.L9)(d._E.HubEcosystemJoinLinkClicked)
                                        },
                                        children: i.hub.appEcosystem.join
                                    })]
                                }), (0, k.tZ)(E, {
                                    searchInput: v,
                                    tagsFilter: Z
                                }), (0, k.BX)("div", {
                                    className: "grid md:grid-cols-2 xl:grid-cols-3 gap-4",
                                    children: [!t.length && (0, k.BX)("div", {
                                        className: "flex flex-col items-center justify-center col-span-1 md:col-span-2 xl:col-span-3 py-28 md:py-40",
                                        children: [(0, k.tZ)("div", {
                                            className: "mb-6",
                                            children: (0, k.tZ)(A, {})
                                        }), (0, k.tZ)(n.Z, {
                                            variant: "body1",
                                            className: "text-center text-grey-400 dark:text-grey-300",
                                            children: i.hub.appEcosystem.noApps
                                        })]
                                    }), !!t.length && !j.length && (0, k.BX)("div", {
                                        className: "flex flex-col items-center justify-center col-span-1 md:col-span-2 xl:col-span-3 py-28 md:py-40",
                                        children: [(0, k.tZ)("div", {
                                            className: "mb-6",
                                            children: (0, k.tZ)(T, {})
                                        }), (0, k.tZ)(n.Z, {
                                            variant: "body1",
                                            className: "text-center text-grey-400 dark:text-grey-300",
                                            children: i.hub.appEcosystem.noResults
                                        })]
                                    }), !!j.length && j.map(function(e) {
                                        return (0, k.tZ)("button", {
                                            type: "button",
                                            onClick: function() {
                                                m(e), (0, d.L9)(d._E.HubEcosystemProjectCardClicked, (0, l.Z)({}, d.gp.Title, null == e ? void 0 : e.name))
                                            },
                                            className: (0, s.default)("transition-transform border border-grey-200 dark:border-[transparent] rounded-[5px]", {
                                                "active:scale-95": (null == e ? void 0 : e.name) !== (null == p ? void 0 : p.name)
                                            }),
                                            children: (0, k.tZ)(S, {
                                                project: e,
                                                isSelected: (null == e ? void 0 : e.name) === (null == p ? void 0 : p.name)
                                            })
                                        }, null == e ? void 0 : e.name)
                                    })]
                                }), !!j.length && (0, k.tZ)(V, {
                                    ecosystemProjects: N,
                                    pageNumber: y,
                                    setPageNumber: x
                                })]
                            })
                        }), (0, k.tZ)("aside", {
                            className: "hidden md:block m-4 lg:m-8 bg-grey-50 dark:bg-grey-800 rounded-[5px] p-4 lg:p-6 shadow-light dark:shadow-none relative",
                            children: (0, k.tZ)(D, {
                                project: p
                            })
                        })]
                    })
                };

            function W(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }
            var q = !0,
                U = function(e) {
                    return (0, k.tZ)(I, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? W(Object(r), !0).forEach(function(t) {
                                (0, l.Z)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({}, e))
                }
        },
        40682: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/ecosystem", function() {
                return r(16974)
            }])
        }
    },
    function(e) {
        e.O(0, [1849, 9774, 2888, 179], function() {
            return e(e.s = 40682)
        }), _N_E = e.O()
    }
]);