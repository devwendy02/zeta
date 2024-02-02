(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4345], {
        36471: function(e, t, n) {
            "use strict";
            n.d(t, {
                H1: function() {
                    return u
                },
                Sr: function() {
                    return s
                },
                Yz: function() {
                    return o
                },
                cL: function() {
                    return d
                },
                lV: function() {
                    return c
                },
                z2: function() {
                    return a
                }
            });
            var r = n(95453),
                l = n(75990),
                i = n(45048);

            function a(e) {
                switch (e) {
                    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
                    default:
                        return "bg-info-200";
                    case "PROPOSAL_STATUS_PASSED":
                        return "bg-positive-500";
                    case "PROPOSAL_STATUS_REJECTED":
                        return "bg-negative-400"
                }
            }

            function o(e) {
                if (!e) return null;
                var t, n = e.split(".");
                return null === (t = e.split(".")) || void 0 === t ? void 0 : t[n.length - 1].replace("Proposal", "").replace(/([A-Z])/g, " $1")
            }

            function s(e) {
                if (!(null != e && e.final_tally_result)) return null;
                var t = e.final_tally_result,
                    n = t.abstain_count,
                    r = t.no_count,
                    a = t.no_with_veto_count,
                    o = t.yes_count,
                    s = parseFloat((0, i.formatUnits)((0, l.toBigNumber)(o), 18)) || 0,
                    c = parseFloat((0, i.formatUnits)((0, l.toBigNumber)(n), 18)) || 0,
                    u = parseFloat((0, i.formatUnits)((0, l.toBigNumber)(r), 18)) || 0,
                    d = parseFloat((0, i.formatUnits)((0, l.toBigNumber)(a), 18)) || 0,
                    p = s + c + u + d || 1;
                return {
                    yes: s / p * 100,
                    abstain: c / p * 100,
                    no: u / p * 100,
                    noWithVeto: d / p * 100
                }
            }

            function c(e) {
                if (!(null != e && e.final_tally_result)) return null;
                var t = e.final_tally_result,
                    n = t.abstain_count,
                    r = t.no_count,
                    l = t.no_with_veto_count,
                    i = parseFloat(t.yes_count) || 0,
                    a = parseFloat(n) || 0,
                    o = parseFloat(r) || 0,
                    s = parseFloat(l) || 0,
                    c = i + a + o + s || 1;
                return {
                    yes: i / c * 100,
                    abstain: a / c * 100,
                    no: o / c * 100,
                    noWithVeto: s / c * 100
                }
            }

            function u(e) {
                try {
                    var t, n, r, l, i, a, o, s, c = null == e ? void 0 : e.reduce(function(e, t) {
                        return null == t || t.options.forEach(function(t) {
                            e[t.option] || (e[t.option] = 0), e[t.option] += parseFloat(t.weight)
                        }), e
                    }, {});
                    return {
                        yes_count: null !== (t = null == c || null === (n = c.VOTE_OPTION_YES) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : "0",
                        no_count: null !== (r = null == c || null === (l = c.VOTE_OPTION_NO) || void 0 === l ? void 0 : l.toString()) && void 0 !== r ? r : "0",
                        abstain_count: null !== (i = null == c || null === (a = c.VOTE_OPTION_ABSTAIN) || void 0 === a ? void 0 : a.toString()) && void 0 !== i ? i : "0",
                        no_with_veto_count: null !== (o = null == c || null === (s = c.VOTE_OPTION_NO_WITH_VETO) || void 0 === s ? void 0 : s.toString()) && void 0 !== o ? o : "0"
                    }
                } catch (e) {
                    return console.error("An error occurred: ".concat(e)), {
                        yes_count: "0",
                        no_count: "0",
                        abstain_count: "0",
                        no_with_veto_count: "0"
                    }
                }
            }
            var d = function() {
                (0, r.L9)(r._E.HubGovernanceOpenProposalLinkClicked)
            }
        },
        48912: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return a
                }
            });
            var r = n(25294),
                l = n(60045),
                i = n(38839),
                a = function(e) {
                    var t = e.percentages,
                        n = e.withLabels;
                    if (!t) return null;
                    var a = t.quorum ? "".concat(t.yes, "% ").concat(t.abstain, "% ").concat(t.no, "% ").concat(t.noWithVeto, "% ").concat(t.quorum, "%") : "".concat(t.yes, "% ").concat(t.abstain, "% ").concat(t.no, "% ").concat(t.noWithVeto, "%");
                    return (0, i.BX)("div", {
                        style: {
                            gridTemplateColumns: a
                        },
                        className: (0, l.default)("grid grid-flow-col h-2 w-full rounded-full overflow-hidden dark:bg-grey-600 bg-grey-200", {
                            "cursor-pointer": n,
                            "cursor-default": !n
                        }),
                        children: [(0, i.tZ)(r.ZU, {
                            title: "Yes: ".concat(t.yes, "%"),
                            hide: !n,
                            children: (0, i.tZ)("div", {
                                className: "h-full w-full bg-positive-500"
                            })
                        }), (0, i.tZ)(r.ZU, {
                            title: "Abstain: ".concat(t.abstain, "%"),
                            hide: !n,
                            children: (0, i.tZ)("div", {
                                className: "h-full w-full bg-[#1D7789]"
                            })
                        }), (0, i.tZ)(r.ZU, {
                            title: "No: ".concat(t.no, "%"),
                            hide: !n,
                            children: (0, i.tZ)("div", {
                                className: "h-full w-full bg-negative-400"
                            })
                        }), (0, i.tZ)(r.ZU, {
                            title: "No with veto: ".concat(t.noWithVeto, "%"),
                            hide: !n,
                            children: (0, i.tZ)("div", {
                                className: "h-full w-full bg-[#7A4B5C]"
                            })
                        }), !!t.quorum && (0, i.tZ)(r.ZU, {
                            title: "Quorum: ".concat(t.quorum, "%"),
                            hide: !n,
                            children: (0, i.tZ)("div", {
                                className: "h-full w-full bg-info-200"
                            })
                        })]
                    })
                }
        },
        40394: function(e, t, n) {
            "use strict";
            n.d(t, {
                Hs: function() {
                    return c
                },
                IM: function() {
                    return o
                },
                XY: function() {
                    return a
                },
                ab: function() {
                    return i
                },
                im: function() {
                    return s
                },
                l9: function() {
                    return l
                }
            });
            var r = n(95453),
                l = function(e) {
                    switch (e) {
                        case 1:
                            return "Yes";
                        case 2:
                            return "Abstain";
                        case 3:
                            return "No";
                        case 4:
                            return "No With Veto";
                        default:
                            return "Unknown"
                    }
                },
                i = function(e) {
                    return e ? (null == e ? void 0 : e.yes_count) === "1" ? "Yes" : (null == e ? void 0 : e.no_count) === "1" ? "No" : (null == e ? void 0 : e.no_with_veto_count) === "1" ? "No With Veto" : (null == e ? void 0 : e.abstain_count) === "1" ? "Abstain" : "" : ""
                },
                a = function(e) {
                    return {
                        messages: [{
                            "@type": "/cosmos.gov.v1beta1.MsgSubmitProposal",
                            content: {
                                "@type": e.type,
                                title: e.title,
                                description: e.description
                            }
                        }]
                    }
                },
                o = function() {
                    (0, r.L9)(r._E.HubGovernanceVoteButtonClicked)
                },
                s = function() {
                    (0, r.L9)(r._E.HubGovernanceVoteOptionClicked)
                },
                c = function() {
                    (0, r.L9)(r._E.HubGovernanceVoteConfirmationClicked)
                }
        },
        8298: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return u
                }
            });
            var r = n(17285),
                l = n(25294),
                i = n(32735),
                a = n(45667),
                o = n(38839),
                s = function(e) {
                    var t = e.item,
                        n = i.useState(!1),
                        s = (0, r.Z)(n, 2),
                        c = s[0],
                        u = s[1],
                        d = i.useState(null),
                        p = (0, r.Z)(d, 2),
                        f = p[0],
                        v = p[1],
                        h = t.title,
                        m = t.status,
                        g = t.myVote;
                    (0, i.useEffect)(function() {
                        f && u(f.scrollWidth > f.clientWidth)
                    }, [f]);
                    var b = (0, o.tZ)("div", {
                        ref: function(e) {
                            return v(e)
                        },
                        className: "text-xl font-bold mb-6 overflow-auto text-ellipsis",
                        children: h
                    });
                    return (0, o.BX)("div", {
                        className: "p-6 rounded-lg border border-grey-600 text-white select-none",
                        children: [c ? (0, o.tZ)(l.ZU, {
                            title: h,
                            placement: "top",
                            children: b
                        }) : b, (0, o.BX)("div", {
                            className: "flex flex-col gap-3 text-grey-300",
                            children: [(0, o.BX)("div", {
                                className: "flex justify-between items-center",
                                children: [(0, o.tZ)("span", {
                                    children: "Status:"
                                }), (0, o.tZ)(a.M, {
                                    status: m
                                })]
                            }), (0, o.BX)("div", {
                                className: "flex justify-between items-center capitalize",
                                children: [(0, o.tZ)("span", {
                                    children: "My Vote:"
                                }), " ", (0, o.tZ)("span", {
                                    children: g
                                })]
                            })]
                        })]
                    })
                },
                c = function(e) {
                    var t = e.items;
                    return (0, o.tZ)("div", {
                        className: "space-y-4",
                        children: null == t ? void 0 : t.map(function(e) {
                            return (0, o.tZ)(s, {
                                item: e
                            }, e.title + e.myVote)
                        })
                    })
                },
                u = function(e) {
                    var t = e.items;
                    return (0, o.tZ)(c, {
                        items: t
                    })
                }
        },
        8021: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return c
                }
            });
            var r = n(17241),
                l = n(87530),
                i = n.n(l);

            function a(e) {
                var t = e.getHours() % 12,
                    n = e.getMinutes();
                return {
                    hours: 30 * t + .5 * n,
                    minutes: 6 * n
                }
            }
            var o = n(38839),
                s = function(e) {
                    var t = e.date,
                        n = void 0 === t ? new Date : t;
                    return (0, o.tZ)("div", {
                        className: "flex justify-center items-center border-[1.67px] border-black dark:border-white w-[19px] h-[19px] rounded-full",
                        children: (0, o.BX)("div", {
                            className: "relative",
                            children: [(0, o.tZ)("div", {
                                className: "w-[1.37px] h-[5px] bg-black dark:bg-white absolute transform origin-bottom translate-x-1/2 bottom-1/3",
                                style: {
                                    transform: "rotate(".concat(a(n).hours, "deg)")
                                }
                            }), (0, o.tZ)("div", {
                                className: "w-[1.37px] h-[5px] bg-black dark:bg-white absolute transform origin-bottom translate-x-1/2 bottom-1/3",
                                style: {
                                    transform: "rotate(".concat(a(n).minutes, "deg)")
                                }
                            })]
                        })
                    })
                },
                c = function(e) {
                    var t = e.votingStartDate,
                        n = e.votingEndDate;
                    return (0, o.BX)("div", {
                        className: "flex gap-2 items-center",
                        children: [(0, o.tZ)(s, {
                            date: n
                        }), (0, o.BX)("div", {
                            className: "flex ml-2 lg:ml-0 lg:gap-2 flex-col lg:flex-row",
                            children: [(0, o.BX)(r.Z, {
                                variant: "body1",
                                children: [i()(t).format("MMM D, YYYY h:mm A"), " UTC", (0, o.tZ)("span", {
                                    className: "ml-2",
                                    children: "-"
                                })]
                            }), (0, o.BX)(r.Z, {
                                variant: "body1",
                                children: [i()(n).format("MMM D, YYYY h:mm A"), " UTC"]
                            })]
                        })]
                    })
                }
        },
        45667: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return a
                }
            });
            var r = n(60045),
                l = n(36471),
                i = n(38839),
                a = function(e) {
                    var t = e.status;
                    return (0, i.BX)("span", {
                        className: "flex items-center gap-2 capitalize dark:text-white text-black text-sm whitespace-nowrap",
                        children: [(0, i.tZ)("div", {
                            className: (0, r.default)("h-[10px] w-[10px] rounded-full", (0, l.z2)(t))
                        }), {
                            PROPOSAL_STATUS_UNSPECIFIED: "Unspecified",
                            PROPOSAL_STATUS_DEPOSIT_PERIOD: "Deposit Period",
                            PROPOSAL_STATUS_VOTING_PERIOD: "Voting Period",
                            PROPOSAL_STATUS_PASSED: "Passed",
                            PROPOSAL_STATUS_REJECTED: "Rejected",
                            PROPOSAL_STATUS_FAILED: "Failed"
                        }[t] || "Unspecified"]
                    })
                }
        },
        22209: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return a
                }
            });
            var r = n(42949),
                l = n(7130),
                i = n(38839),
                a = function() {
                    var e = (0, r.AA)().copy;
                    return (0, i.tZ)("div", {
                        className: "flex px-8 gap-8 my-8 rounded-lg overflow-hidden",
                        children: (0, i.tZ)("div", {
                            className: "w-full h-[calc(100vh-200px)] min-h-[400px] dark:bg-grey-700 bg-white border border-grey-200 p-6 rounded-lg flex items-center justify-center",
                            children: (0, i.BX)("div", {
                                className: "flex flex-col justify-center items-center gap-4",
                                children: [(0, i.tZ)(l.$, {}), (0, i.tZ)("div", {
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
                    return l
                }
            });
            var r = n(38839),
                l = function() {
                    return (0, r.BX)("svg", {
                        width: "45",
                        height: "31",
                        viewBox: "0 0 45 31",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.tZ)("path", {
                            d: "M0.550781 1C0.550781 0.447715 0.998497 0 1.55078 0H7.55078C8.10307 0 8.55078 0.447715 8.55078 1V4C8.55078 4.55228 8.10307 5 7.55078 5H1.55078C0.998497 5 0.550781 4.55228 0.550781 4V1Z",
                            className: "fill-[#A9ACB0] dark:fill-[#696E75]"
                        }), (0, r.tZ)("path", {
                            d: "M12.5508 1C12.5508 0.447715 12.9985 0 13.5508 0H43.5508C44.1031 0 44.5508 0.447715 44.5508 1V4C44.5508 4.55228 44.1031 5 43.5508 5H13.5508C12.9985 5 12.5508 4.55228 12.5508 4V1Z",
                            className: "fill-[#A9ACB0] dark:fill-[#696E75]"
                        }), (0, r.tZ)("path", {
                            d: "M12.5508 14C12.5508 13.4477 12.9985 13 13.5508 13H43.5508C44.1031 13 44.5508 13.4477 44.5508 14V17C44.5508 17.5523 44.1031 18 43.5508 18H13.5508C12.9985 18 12.5508 17.5523 12.5508 17V14Z",
                            className: "fill-[#A9ACB0] dark:fill-[#3C4146]"
                        }), (0, r.tZ)("path", {
                            d: "M0.449219 14C0.449219 13.4477 0.896934 13 1.44922 13H7.44922C8.0015 13 8.44922 13.4477 8.44922 14V17C8.44922 17.5523 8.0015 18 7.44922 18H1.44922C0.896934 18 0.449219 17.5523 0.449219 17V14Z",
                            className: "fill-[#A9ACB0] dark:fill-[#3C4146]"
                        }), (0, r.tZ)("path", {
                            d: "M0.449219 27C0.449219 26.4477 0.896934 26 1.44922 26H7.44922C8.0015 26 8.44922 26.4477 8.44922 27V30C8.44922 30.5523 8.0015 31 7.44922 31H1.44922C0.896934 31 0.449219 30.5523 0.449219 30V27Z",
                            className: "fill-[#E5E8EC] dark:fill-[#2D3237]"
                        }), (0, r.tZ)("path", {
                            d: "M12.5508 27C12.5508 26.4477 12.9985 26 13.5508 26H43.5508C44.1031 26 44.5508 26.4477 44.5508 27V30C44.5508 30.5523 44.1031 31 43.5508 31H13.5508C12.9985 31 12.5508 30.5523 12.5508 30V27Z",
                            className: "fill-[#E5E8EC] dark:fill-[#2D3237]"
                        })]
                    })
                }
        },
        23575: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return l
                }
            });
            var r = n(70294),
                l = function() {
                    var e = (0, r.Vb)();
                    return {
                        shouldDisableSendPage: e.shouldDisableSendPage,
                        shouldDisablePoolPage: e.shouldDisablePoolPage,
                        shouldDisableStakingPage: e.shouldDisableStakingPage,
                        shouldDisableXpPage: e.shouldDisableXpPage,
                        shouldDisableGovernancePage: e.shouldDisableGovernancePage
                    }
                }
        },
        14374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var r = n(31737),
                l = n(78756),
                i = n(17285),
                a = n(72975),
                o = n.n(a),
                s = n(17241),
                c = n(52914),
                u = n(41083),
                d = n(73582),
                p = n(95580),
                f = n(64691),
                v = n(25294),
                h = n(67543),
                m = n(42949),
                g = n(75990),
                b = n(87530),
                Z = n.n(b),
                x = n(85243),
                w = n(43277),
                y = n(89218),
                _ = n.n(y),
                N = n(32735),
                P = n(30589),
                S = n(52298),
                O = n(55634),
                A = n(46776),
                C = n(48442),
                T = n(7130),
                E = n(36471),
                V = n(60045),
                D = n(35837),
                k = n(38839),
                B = function() {
                    var e, t, n = (0, m.cK)().isMobile,
                        r = (0, D.useRouter)(),
                        l = (0, v.P$0)({
                            withQueryParam: !1
                        }),
                        i = l.pagination,
                        a = l.setPagination,
                        o = (0, C.K2)({
                            offset: (((null == i ? void 0 : i.pageIndex) || 0) * ((null == i ? void 0 : i.pageSize) || v.L8A)).toString(),
                            limit: 10
                        }),
                        s = o.data,
                        c = o.isLoading,
                        u = n ? 500 : 702,
                        d = n ? 8 : 12,
                        p = (0, N.useMemo)(function() {
                            return [{
                                accessorFn: function(e) {
                                    return null == e ? void 0 : e.id
                                },
                                id: "proposal_id"
                            }, {
                                accessorFn: function(e) {
                                    return null == e ? void 0 : e.title
                                },
                                id: "title"
                            }, {
                                header: "#ID",
                                cell: function(e) {
                                    var t;
                                    return (0, k.BX)("div", {
                                        children: [(0, k.tZ)("span", {
                                            className: "text-grey-300 mr-1",
                                            children: "#"
                                        }), (0, k.tZ)("span", {
                                            children: null === (t = e.row.original) || void 0 === t ? void 0 : t.id
                                        })]
                                    })
                                },
                                size: 50
                            }, {
                                header: "Title",
                                cell: function(e) {
                                    var t;
                                    return (0, k.tZ)("div", {
                                        className: "py-7 overflow-ellipsis whitespace-nowrap max-w-fit overflow-hidden pr-4",
                                        children: null === (t = e.row.original) || void 0 === t ? void 0 : t.title
                                    })
                                },
                                size: 200
                            }, {
                                header: "Type",
                                cell: function(e) {
                                    var t;
                                    return (0, k.tZ)("div", {
                                        children: (0, E.Yz)(null === (t = e.row.original) || void 0 === t ? void 0 : t["@type"])
                                    })
                                }
                            }, {
                                header: "Status",
                                cell: function(e) {
                                    var t, n = "PROPOSAL_STATUS_PASSED" === (null === (t = e.row.original) || void 0 === t ? void 0 : t.status);
                                    return (0, k.BX)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, k.tZ)("div", {
                                            className: (0, V.default)("rounded-full w-[10px] h-[10px]", {
                                                "bg-positive-500": n,
                                                "bg-red-500": !n
                                            })
                                        }), (0, k.tZ)("div", {
                                            children: n ? "Passed" : "Rejected"
                                        })]
                                    })
                                },
                                size: 80
                            }, {
                                header: "Voting end",
                                cell: function(e) {
                                    var t;
                                    return (0, k.tZ)("div", {
                                        className: "capitalize",
                                        children: Z()((null === (t = e.row.original) || void 0 === t ? void 0 : t.voting_end_time) || "").format("MMM DD, YYYY HH:mm UTC")
                                    })
                                }
                            }]
                        }, []),
                        f = (0, N.useMemo)(function() {
                            return {
                                hash: !n,
                                token: !n,
                                proposal_id: !1,
                                title: !1
                            }
                        }, [n]),
                        h = (0, N.useState)(null),
                        g = h[0],
                        b = h[1],
                        x = (0, N.useCallback)(function(e) {
                            b(e), (0, E.cL)();
                            var t = "/governance/proposal/".concat(e.original.id);
                            r.push(t)
                        }, [r]),
                        w = (0, N.useMemo)(function() {
                            return {
                                withSelect: !0,
                                onSelect: x,
                                selectedRow: g
                            }
                        }, [x, g]);
                    return {
                        columns: p,
                        tableHeight: u,
                        pageSize: d,
                        columnVisibility: f,
                        isGetAllProposalsLoading: c,
                        data: (null == s || null === (e = s.proposals) || void 0 === e ? void 0 : e.filter(function(e) {
                            return "PROPOSAL_STATUS_VOTING_PERIOD" !== e.status
                        })) || [],
                        proposalsTotal: (null == s || null === (t = s.pagination) || void 0 === t ? void 0 : t.total) || 0,
                        selectRowHandlers: w,
                        pagination: i,
                        setPagination: a
                    }
                },
                X = n(48912),
                U = n(40394),
                H = n(8298),
                L = n(8021),
                I = n(45667),
                M = n(75246);

            function R(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var j = function(e) {
                    var t = e.proposal,
                        n = (0, m.AA)().locale,
                        r = (0, C.K$)({
                            proposalId: t.id
                        }).data,
                        l = (0, N.useMemo)(function() {
                            var e = (0, E.H1)(null == r ? void 0 : r.votes);
                            return (0, E.lV)({
                                final_tally_result: e
                            })
                        }, [null == r ? void 0 : r.votes]),
                        i = Intl.NumberFormat(n).format(Number(t.id)),
                        a = t.title || "",
                        o = t["@type"],
                        u = Z()(t.voting_start_time).toDate(),
                        d = Z()(t.voting_end_time).toDate();
                    return (0, k.BX)("div", {
                        className: "rounded-md flex flex-col bg-white dark:bg-grey-700",
                        children: [(0, k.BX)("div", {
                            className: "py-4 px-6 flex flex-col items-start xl:flex-row xl:items-center xl:justify-between gap-2",
                            children: [(0, k.BX)("div", {
                                className: "flex flex-col xl:flex-row items-start xl:items-center gap-2",
                                children: [(0, k.tZ)(I.M, {
                                    status: t.status
                                }), (0, k.tZ)(s.Z, {
                                    variant: "body1",
                                    className: "before:content-['#'] text-grey-300 mr-2",
                                    children: i
                                }), (0, k.tZ)(v.ZU, {
                                    title: a,
                                    children: (0, k.tZ)(s.Z, {
                                        variant: "body1",
                                        className: "cursor-pointer overflow-hidden whitespace-nowrap max-w-[140px] text-ellipsis",
                                        children: a
                                    })
                                }), (0, k.tZ)(s.Z, {
                                    variant: "body1",
                                    className: "bg-grey-600 rounded-full px-2 py-1 xl:mx-2 text-[10px] text-grey-300 max-w-[150px] text-ellipsis leading-3 text-center whitespace-nowrap",
                                    children: (0, E.Yz)(o)
                                })]
                            }), (0, k.tZ)(L.g, {
                                votingStartDate: u,
                                votingEndDate: d
                            })]
                        }), (0, k.tZ)(c.Z, {}), (0, k.tZ)("div", {
                            className: "flex items-center gap-2 py-4 px-6",
                            children: (0, k.tZ)(X._, {
                                percentages: l,
                                withLabels: !0
                            })
                        })]
                    })
                },
                z = function() {
                    var e, t, n, r = B(),
                        a = r.columns,
                        c = r.tableHeight,
                        b = r.columnVisibility,
                        Z = r.data,
                        y = r.isGetAllProposalsLoading,
                        V = r.selectRowHandlers,
                        D = r.pagination,
                        X = r.setPagination,
                        L = r.proposalsTotal,
                        I = (0, C.K2)({}).data,
                        R = (0, m.cK)().isSmallDevice,
                        z = (0, N.useMemo)(function() {
                            var e;
                            return (null == I || null === (e = I.proposals) || void 0 === e ? void 0 : e.filter(function(e) {
                                return "PROPOSAL_STATUS_VOTING_PERIOD" === e.status
                            })) || []
                        }, [null == I ? void 0 : I.proposals]),
                        F = (0, O.Os)(),
                        W = F.address,
                        G = F.isConnected,
                        $ = F.switchNetwork,
                        K = (0, C.Db)(),
                        q = (0, i.Z)(K, 1)[0],
                        J = (0, m.AA)().copy,
                        Q = (0, N.useMemo)((0, l.Z)(o().mark(function e() {
                            var t, n;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = z.map(function(e) {
                                            return q({
                                                proposalId: e.id,
                                                voter: (0, g.ethToZeta)(W || "")
                                            })
                                        }), e.next = 3, Promise.all(t);
                                    case 3:
                                        return n = e.sent.filter(function(e) {
                                            return e.isSuccess
                                        }).map(function(e) {
                                            var t, n, r = (0, E.H1)([null === (t = e.data) || void 0 === t ? void 0 : t.vote]),
                                                l = (0, U.ab)(r),
                                                i = z.find(function(t) {
                                                    var n;
                                                    return t.id === (null === (n = e.data) || void 0 === n ? void 0 : n.vote.proposal_id)
                                                });
                                            return {
                                                proposalId: null === (n = e.data) || void 0 === n ? void 0 : n.vote.proposal_id,
                                                voteLabel: l,
                                                proposalStatus: null == i ? void 0 : i.status,
                                                title: null == i ? void 0 : i.title
                                            }
                                        }), e.abrupt("return", n);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [W, q, z]),
                        ee = (0, P.Z)((0, l.Z)(o().mark(function e() {
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Q);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [Q]);
                    return (0, k.BX)(x.E.div, Y(Y({
                        className: "flex ml-2 lg:mr-8 gap-8"
                    }, (0, h.zW)({
                        y: 0,
                        delay: .4
                    })), {}, {
                        children: [(0, k.BX)("div", {
                            className: "col-span-10 overflow-hidden lg:col-span-7 flex flex-col gap-8 w-full lg:border-r border-grey-200 dark:border-grey-700 pl-6 pr-8 pt-8 pb-8 min-h-[calc(100vh-300px)]",
                            children: [(0, k.BX)(S.Zb, {
                                className: "p-6 gap-6 flex flex-col",
                                children: [(0, k.tZ)(s.Z, {
                                    variant: "body1",
                                    className: "text-2xl",
                                    children: J.hub.governance.proposals.title
                                }), (0, k.tZ)(s.Z, {
                                    variant: "body1",
                                    className: "",
                                    children: J.hub.governance.proposals.description
                                })]
                            }), z.length > 0 && (0, k.tZ)(S.Zb, {
                                className: "dark:bg-grey-800 bg-white",
                                children: (0, k.BX)(u.Z, {
                                    className: "shadow-none bg-none",
                                    defaultExpanded: !0,
                                    children: [(0, k.tZ)(d.Z, {
                                        className: "p-0 m-0 min-h-0",
                                        expandIcon: (0, k.tZ)(v.C26, {
                                            className: "text-grey-900 dark:text-grey-50 w-5 h-5"
                                        }),
                                        classes: {
                                            content: "p-0 m-0"
                                        },
                                        children: (0, k.tZ)(s.Z, {
                                            variant: "headline2",
                                            children: "Voting proposals"
                                        })
                                    }), (0, k.tZ)(p.Z, {
                                        className: "p-0 pt-6",
                                        children: (0, k.BX)("div", {
                                            className: "flex flex-col gap-4",
                                            children: [!(null != I && I.proposals) && (0, w.Z)(0, 2).map(function(e) {
                                                return (0, k.tZ)(f.Z, {
                                                    className: "h-24 cursor-pointer w-full rounded-md overflow-hidden"
                                                }, e)
                                            }), z.map(function(e) {
                                                return (0, k.tZ)(_(), {
                                                    href: "/governance/proposal/".concat(e.id),
                                                    onClick: E.cL,
                                                    children: (0, k.tZ)(j, {
                                                        proposal: e
                                                    }, e.id)
                                                }, e.id)
                                            })]
                                        })
                                    })]
                                })
                            }), (0, k.tZ)(S.Zb, {
                                className: "dark:bg-grey-800 bg-white px-0",
                                children: (0, k.BX)(u.Z, {
                                    className: "shadow-none bg-none",
                                    defaultExpanded: !0,
                                    children: [(0, k.tZ)(d.Z, {
                                        className: "p-0 m-0 min-h-0 mx-6",
                                        expandIcon: (0, k.tZ)(v.C26, {
                                            className: "text-grey-900 dark:text-grey-50 w-5 h-5"
                                        }),
                                        classes: {
                                            content: "p-0 m-0"
                                        },
                                        children: (0, k.tZ)(s.Z, {
                                            variant: "headline2",
                                            children: "Past proposals"
                                        })
                                    }), (0, k.tZ)(p.Z, {
                                        className: "pt-6 px-6",
                                        children: y ? Array.from({
                                            length: R ? 6 : 9
                                        }).map(function(e, t) {
                                            return (0, M.az)(x.E.div, Y(Y({}, (0, h.zW)({
                                                y: 4,
                                                delay: .2 + .05 * t
                                            })), {}, {
                                                key: t
                                            }), (0, k.tZ)(f.Z, {
                                                variant: "rectangular",
                                                height: 64,
                                                className: "mx-0 my-4 rounded"
                                            }))
                                        }) : (0, k.tZ)(v.by0, {
                                            columns: a,
                                            data: Z,
                                            height: c,
                                            showFooter: !0,
                                            pagination: D,
                                            withSearch: !0,
                                            columnVisibility: b,
                                            onPaginationChange: X,
                                            selectRowHandlers: V,
                                            totalAmount: Number(L || 0),
                                            noDataContent: (0, k.BX)("div", {
                                                className: "flex flex-col items-center justify-center col-span-1 md:col-span-2 xl:col-span-3 py-28 md:py-40 gap-4",
                                                children: [(0, k.tZ)(T.$, {}), (0, k.tZ)("p", {
                                                    className: "text-center text-grey-400 dark:text-grey-300",
                                                    children: J.shared.noResults
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })]
                        }), (0, k.tZ)(S.Zb, {
                            className: "hidden lg:block min-w-[366px] my-8 pb-8 px-6",
                            children: (0, k.BX)("div", {
                                className: "h-full",
                                children: [(0, k.tZ)(s.Z, {
                                    variant: "body1",
                                    className: "text-2xl mb-6",
                                    children: J.hub.governance.myLiveVotes
                                }), ee.value && (null === (e = ee.value) || void 0 === e ? void 0 : e.length) > 0 && (0, k.tZ)(H.Y, {
                                    items: (null === (t = ee.value) || void 0 === t ? void 0 : t.map(function(e) {
                                        return {
                                            title: e.title,
                                            status: e.proposalStatus,
                                            myVote: e.voteLabel,
                                            time: ""
                                        }
                                    })) || []
                                }), (0, k.BX)("div", {
                                    className: "text-grey-400 relative top-[50%] -translate-y-1/2 text-center",
                                    children: [!G && !ee.loading && (0, k.tZ)(S.Vw, {
                                        caption: J.hub.governance.connectWalletToViewYourVotes,
                                        onClick: function() {
                                            return null == $ ? void 0 : $(Number(A.N2.chainId))
                                        }
                                    }), G && !ee.loading && ee.value && (null === (n = ee.value) || void 0 === n ? void 0 : n.length) <= 0 && J.hub.governance.youCurrentlyHaveNoVotesToView]
                                })]
                            })
                        })]
                    }))
                },
                F = n(22209),
                W = n(23575),
                G = function() {
                    return (0, W.N)().shouldDisableGovernancePage ? (0, k.tZ)(F.f, {}) : (0, k.tZ)(z, {})
                }
        },
        59893: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/governance", function() {
                return n(14374)
            }])
        }
    },
    function(e) {
        e.O(0, [5098, 9774, 2888, 179], function() {
            return e(e.s = 59893)
        }), _N_E = e.O()
    }
]);