(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [877], {
        47389: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function() {
                    return tX
                },
                default: function() {
                    return tL
                }
            });
            var n = r(31737),
                i = r(51609),
                a = r(28405),
                l = r(21548),
                o = r(67543),
                s = r(42949),
                c = r(95453),
                d = r(32735),
                u = r(63693),
                h = r(55634),
                p = r(46776),
                f = r(4215),
                m = r(78756),
                v = r(72975),
                b = r.n(v),
                x = r(25294),
                g = r(53894),
                y = r(79895),
                Z = r(35837),
                k = r(44874),
                w = r(12093),
                C = r(75990);

            function A(e) {
                return (0, d.useMemo)(function() {
                    if (!e) return null;
                    var t = p.N2.contractAddresses.InvitationManager;
                    return C.InvitationManager__factory.connect(t, e)
                }, [e])
            }
            var N = r(42685),
                O = w.z.object({
                    address: w.z.string(),
                    expiration: w.z.string(),
                    r: w.z.string(),
                    s: w.z.string(),
                    v: w.z.string()
                }),
                B = r(17285),
                D = r(87530),
                X = r.n(D),
                L = r(77903),
                E = r(97262),
                H = r(11583),
                M = r(17573),
                P = r(7264),
                j = r(17241),
                S = r(52298),
                V = r(28309),
                R = r(38839),
                I = d.forwardRef(function(e, t) {
                    var r = e.userLevel,
                        n = e.userPointsXp,
                        i = e.taskName,
                        a = e.snackbarKey,
                        l = e.handleActionClick,
                        o = (0, k.Ds)().closeSnackbar,
                        s = (0, d.useMemo)(function() {
                            return (0, V.mq)(null != r ? r : 0)
                        }, [r]).icon;
                    return (0, R.tZ)(P.Z, {
                        onClickAway: function() {
                            return o(a)
                        },
                        children: (0, R.BX)("div", {
                            className: "flex justify-between items-center gap-4 min-w-[300px] bg-grey-50 dark:bg-grey-700 border border-solid border-grey-200 dark:border-grey-500 p-6 rounded-md shadow-md",
                            ref: t,
                            children: [(0, R.BX)("div", {
                                className: "flex items-center gap-4",
                                children: [(0, R.tZ)(S.R$, {
                                    variant: "secondary",
                                    size: 26
                                }), (0, R.BX)("div", {
                                    className: "flex flex-col gap-1 mr-0 md:mr-8",
                                    children: [(0, R.tZ)(j.Z, {
                                        variant: "button",
                                        children: V.hE[i]
                                    }), (0, R.BX)("div", {
                                        className: "flex gap-1",
                                        children: [(0, R.tZ)(j.Z, {
                                            variant: "body2",
                                            className: "text-grey-400 dark:text-grey-300",
                                            children: "+ ".concat(n, " XP")
                                        }), r && (0, R.tZ)(s, {
                                            size: 16
                                        })]
                                    })]
                                })]
                            }), l && (0, R.tZ)("button", {
                                type: "button",
                                onClick: l,
                                children: (0, R.tZ)(x.VG8, {
                                    size: 20
                                })
                            })]
                        })
                    })
                });

            function F(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var z = function(e) {
                    var t = e.data,
                        r = e.error,
                        n = e.address,
                        i = (0, k.Ds)().enqueueSnackbar,
                        a = (0, d.useRef)(T(T({}, t), {}, {
                            address: n
                        }));
                    (0, d.useEffect)(function() {
                        if (!r) {
                            var e = a.current.address !== n,
                                l = void 0 === a.current.xpRefreshTrackingByTask;
                            if (!e && !l && t) {
                                var o = Object.entries((null == t ? void 0 : t.xpRefreshTrackingByTask) || {}).filter(function(e) {
                                    var t, r = (0, B.Z)(e, 2),
                                        n = r[0];
                                    return r[1].hasXpToRefresh && (null === (t = a.current.xpRefreshTrackingByTask) || void 0 === t || null === (t = t[n]) || void 0 === t ? void 0 : t.hasXpToRefresh) === !1
                                }).map(function(e) {
                                    var t = (0, B.Z)(e, 2);
                                    return {
                                        taskName: t[0],
                                        xp: t[1].xp
                                    }
                                });
                                o.length > 0 && o.forEach(function(e) {
                                    i(e.taskName, {
                                        anchorOrigin: {
                                            horizontal: "right",
                                            vertical: "top"
                                        },
                                        autoHideDuration: x.yw8,
                                        preventDuplicate: !0,
                                        content: function(t, r) {
                                            return (0, R.tZ)(I, {
                                                snackbarKey: t,
                                                taskName: r,
                                                userPointsXp: e.xp
                                            })
                                        }
                                    })
                                })
                            }
                            a.current = T(T({}, t), {}, {
                                address: n
                            }), e && (a.current = {
                                address: n
                            })
                        }
                    }, [t, n, i, r])
                },
                U = r(9633),
                W = r(53315),
                Y = r(45048),
                _ = r(36397),
                G = r(37457),
                q = r(2848),
                $ = r(56778),
                J = function() {
                    (0, G.O)(), (0, q.m)();
                    var e = (0, _.v9)($.hD.selectHoldings()),
                        t = e.holdings,
                        r = e.isLoadingHoldings,
                        n = (0, d.useMemo)(function() {
                            var e = (null == t ? void 0 : t.reduce(function(e, t) {
                                    var r = t.balance,
                                        n = t.price;
                                    return e + Number(Number((0, Y.formatEther)((0, C.toBigNumber)(r || "0"))).toFixed(2)) * (n || 0)
                                }, 0)) || 0,
                                r = null == t ? void 0 : t.filter(function(e) {
                                    return "ZETA" === e.symbol
                                }).reduce(function(e, t) {
                                    return e + (Number(t.balance) || 0)
                                }, 0);
                            return {
                                netWorth: e,
                                zetaBalance: Number(Number((0, Y.formatEther)((0, C.toBigNumber)(r || "0"))).toFixed(2))
                            }
                        }, [t]),
                        i = n.netWorth,
                        a = n.zetaBalance;
                    return {
                        isLoading: r,
                        hasZetaHoldings: a > 0,
                        netWorth: i,
                        hasNetWorth: i > 0,
                        zetaBalance: a
                    }
                },
                Q = function(e) {
                    var t = e.isConsumeInviteModalOpen,
                        r = e.closeConsumeInviteModal,
                        n = e.consumeInviteLink,
                        i = (0, U.TL)(),
                        a = (0, s.AA)().copy,
                        l = J().hasZetaHoldings;
                    return (0, R.tZ)(x.QAJ, {
                        onClose: r,
                        open: t,
                        title: a.hub.points.consumeInviteLinkDialog.title,
                        children: (0, R.BX)("div", {
                            className: "flex flex-col items-center gap-4 w-full",
                            children: [(0, R.tZ)("div", {
                                className: "py-9",
                                children: (0, R.tZ)(x.qAN, {})
                            }), l ? (0, R.BX)(R.HY, {
                                children: [(0, R.tZ)(j.Z, {
                                    variant: "body1",
                                    children: a.hub.points.consumeInviteLinkDialog.description
                                }), (0, R.tZ)(x.kHo, {
                                    onClick: n,
                                    children: a.hub.points.consumeInviteLinkDialog.confirmAcceptance
                                })]
                            }) : (0, R.BX)(R.HY, {
                                children: [(0, R.tZ)(j.Z, {
                                    variant: "body1",
                                    children: a.hub.points.consumeInviteLinkDialog.descriptionNoBalance
                                }), (0, R.tZ)(x.kHo, {
                                    onClick: function() {
                                        r(), i((0, W.cV)(!0))
                                    },
                                    children: a.hub.points.consumeInviteLinkDialog.getZeta
                                })]
                            })]
                        })
                    })
                },
                K = r(17774),
                ee = r(60045),
                et = function(e) {
                    var t = e.percentage,
                        r = e.color;
                    if (t < 0 || t > 100) return (0, R.tZ)("div", {
                        children: "Invalid percentage"
                    });
                    var n = 2 * Math.PI * 40,
                        i = (100 - t) * n / 100;
                    return (0, R.BX)("svg", {
                        width: "100",
                        height: "100",
                        className: "transform -rotate-25",
                        viewBox: "0 0 100 100",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, R.tZ)("circle", {
                            stroke: "#27272A",
                            fill: "transparent",
                            strokeWidth: "10",
                            strokeDasharray: n,
                            strokeDashoffset: 0,
                            r: 40,
                            cx: "50",
                            cy: "50"
                        }), (0, R.tZ)("circle", {
                            stroke: void 0 === r ? "white" : r,
                            fill: "transparent",
                            strokeWidth: "10",
                            strokeDasharray: n,
                            strokeDashoffset: i,
                            r: 40,
                            cx: "50",
                            cy: "50"
                        })]
                    })
                },
                er = function(e) {
                    var t = e.targetDate,
                        r = function() {
                            var e = X()(),
                                r = t.diff(e);
                            if (r <= 0) return "Time is up!";
                            var n = X().duration(r),
                                i = n.days(),
                                a = n.hours(),
                                l = n.minutes(),
                                o = n.seconds();
                            return "".concat(i, "d ").concat(a, "h ").concat(l, "m ").concat(o, "s")
                        },
                        n = (0, d.useState)(r()),
                        i = n[0],
                        a = n[1];
                    return (0, d.useEffect)(function() {
                        var e = setInterval(function() {
                            a(r())
                        }, 1e3);
                        return function() {
                            return clearInterval(e)
                        }
                    }, [t]), (0, R.tZ)("div", {
                        children: i
                    })
                },
                en = r(46146),
                ei = (0, en.Z)("pre", {
                    target: "e1so9p770"
                })({
                    name: "1hxkrsj",
                    styles: ".string{color:#91cb75;}.number{color:#73c0de;}.boolean{color:#fac858;}.null{color:#9a60b4;}.key{color:#ee6565;}"
                }),
                ea = function(e) {
                    var t = e.epochSSR,
                        r = t ? X()(null == t ? void 0 : t.currentEpochStartingDate).utcOffset(0).format("DD MMM") : "",
                        n = t ? X()(null == t ? void 0 : t.currentEpochEndingDate).utcOffset(0).format("DD MMM") : "";
                    return (0, R.BX)("div", {
                        children: [(0, R.BX)("div", {
                            className: "flex gap-4 mb-10",
                            children: [(0, R.BX)("div", {
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Countdown"
                                }), (0, R.BX)("div", {
                                    className: "border border-[#27272A] h-full rounded-md flex flex-col w-[160px] justify-center items-center text-[#A1A1AA]",
                                    children: [(0, R.tZ)(et, {
                                        percentage: t.epochPercentageComplete > 1 ? Math.ceil((t.epochPercentageComplete - 1) * 100) : Math.ceil(100 * t.epochPercentageComplete),
                                        color: t.epochPercentageComplete > 1 ? "#FF0000" : "#fff"
                                    }), (0, R.BX)("div", {
                                        className: "text-xs mt-2 mb-2",
                                        children: [r, " - ", n]
                                    }), (0, R.tZ)(er, {
                                        targetDate: X()(t.currentEpochEndingDate)
                                    })]
                                })]
                            }), (0, R.BX)("div", {
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Schema"
                                }), (0, R.tZ)("div", {
                                    className: "border h-full border-[#27272A] px-4 rounded-md flex flex-col w-fit justify-center items-center text-[#A1A1AA]",
                                    children: (0, R.tZ)(ei, {
                                        className: "text-xs text-[#A1A1AA] leading-[16px] select-text",
                                        dangerouslySetInnerHTML: {
                                            __html: JSON.stringify(t, null, 3).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\\-]?\d+)?)/g, function(e) {
                                                var t = "number";
                                                return /^"/.test(e) ? t = /:$/.test(e) ? "key" : "string" : /true|false/.test(e) ? t = "boolean" : /null/.test(e) && (t = "null"), '<span class="'.concat(t, '">').concat(e, "</span>")
                                            })
                                        }
                                    })
                                })]
                            }), (0, R.BX)("div", {
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Docs"
                                }), (0, R.BX)("div", {
                                    className: "border h-full text-sm border-[#27272A] px-4 rounded-md flex flex-col w-fit justify-center items-center text-[#A1A1AA]",
                                    children: ["Epochs are a way to measure time in the XP system. Each epoch lasts 7 days. At the end of each epoch, the tasks are reset and users can earn XP again. During the epoch tasks already claimed by users are locked.", " ", (0, R.tZ)("br", {}), "A chron job runs every couple of minutes and checks if the epoch has ended. If it has, it will generate a new epoch starting from the end of the previous one."]
                                })]
                            })]
                        }), (0, R.BX)("div", {
                            className: "flex gap-4",
                            children: [(0, R.BX)("div", {
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Info"
                                }), (0, R.BX)("div", {
                                    className: "w-[500px] border h-fit py-4 text-sm border-[#27272A] px-4 rounded-md flex justify-center items-center text-[#A1A1AA]",
                                    children: ["Now UTC: ", X()().utc().format("MM/DD/YYYY HH:mm:ss")]
                                }), (0, R.BX)("div", {
                                    className: "w-[500px] border h-fit py-4 text-sm border-[#27272A] px-4 mt-2 rounded-md flex justify-center items-center text-[#A1A1AA]",
                                    children: ["Current epoch starting date:", " ", X()(t.currentEpochStartingDate).utcOffset(0).format("MM/DD/YYYY HH:mm:ss")]
                                }), (0, R.BX)("div", {
                                    className: "w-[500px] border h-fit py-4 text-sm border-[#27272A] px-4 mt-2 rounded-md flex justify-center items-center text-[#A1A1AA]",
                                    children: ["My time VS UTC difference: ", X()().utcOffset() / 60, " hours"]
                                })]
                            }), (0, R.BX)("div", {
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Helpers"
                                }), (0, R.BX)("div", {
                                    className: "flex gap-2",
                                    children: [(0, R.tZ)("button", {
                                        className: "text-xs flex gap-2 border py-2 bg-[#27272A]/40 border-[#27272A] px-4 rounded-md w-fit justify-center items-center text-[#A1A1AA] hover:bg-[#27272A] hover:text-white transition-all",
                                        type: "button",
                                        onClick: function() {},
                                        children: "Run epoch check"
                                    }), (0, R.tZ)("button", {
                                        className: "text-xs border py-2 border-[#27272A] bg-[#27272A]/40 px-4 rounded-md flex flex-col w-fit justify-center items-center text-[#A1A1AA] hover:bg-[#27272A] hover:text-white transition-all",
                                        type: "button",
                                        onClick: function() {},
                                        children: "Generate epoch"
                                    }), (0, R.tZ)("button", {
                                        className: "text-xs border py-2 border-[#27272A] bg-[#27272A]/40 px-4 rounded-md flex flex-col w-fit justify-center items-center text-[#A1A1AA] hover:bg-[#27272A] hover:text-white transition-all",
                                        type: "button",
                                        onClick: function() {},
                                        children: "Reset epoch"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                el = r(5859),
                eo = function() {
                    var e, t = (0, f.Z4)({
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateIfStale: !1,
                                revalidateOnReconnect: !1
                            }
                        }),
                        r = t.data,
                        n = t.mutate;
                    return (0, R.tZ)("div", {
                        children: (0, R.tZ)("div", {
                            className: "flex gap-4 mb-6",
                            children: (0, R.BX)("div", {
                                className: "",
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Featured tasks"
                                }), (0, R.tZ)("div", {
                                    className: "border border-[#27272A] h-fit rounded-md flex pt-2 flex-col justify-center items-center text-[#A1A1AA]",
                                    children: (0, R.BX)("table", {
                                        className: "",
                                        children: [(0, R.BX)("tr", {
                                            className: "text-left",
                                            children: [(0, R.tZ)("th", {
                                                className: "font-normal text-xs text-[#A1A1AA] px-2 pl-4 pb-2",
                                                children: "task"
                                            }), (0, R.tZ)("th", {
                                                className: "font-normal text-xs text-[#A1A1AA] text-center px-2 pb-2",
                                                children: "featured"
                                            })]
                                        }), null == r || null === (e = r.tasks) || void 0 === e ? void 0 : e.map(function(e) {
                                            var t, i, a = null === (i = r.featuredTaskNames) || void 0 === i ? void 0 : i.includes(e);
                                            return (0, R.BX)("tr", {
                                                className: "text-left border-t border-grey-600",
                                                children: [(0, R.tZ)("td", {
                                                    className: "font-normal text-xs text-[#A1A1AA] px-2 pl-4",
                                                    children: e
                                                }), (0, R.tZ)("td", {
                                                    className: "font-normal text-xs text-[#A1A1AA] px-2 pl-4",
                                                    children: (0, R.tZ)(el.Z, {
                                                        color: "primary",
                                                        size: "small",
                                                        checked: a,
                                                        onChange: (t = (0, m.Z)(b().mark(function t(r, i) {
                                                            return b().wrap(function(t) {
                                                                for (;;) switch (t.prev = t.next) {
                                                                    case 0:
                                                                        return t.next = 2, f.Wp.featureTask({
                                                                            taskName: e,
                                                                            isFeatured: i
                                                                        });
                                                                    case 2:
                                                                        return t.next = 4, n();
                                                                    case 4:
                                                                    case "end":
                                                                        return t.stop()
                                                                }
                                                            }, t)
                                                        })), function(e, r) {
                                                            return t.apply(this, arguments)
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                es = r(81218),
                ec = r(19384),
                ed = function(e) {
                    var t = e.deleteTaskBoost,
                        r = e.boostId,
                        n = e.multiplier,
                        i = e.from,
                        a = e.isActive,
                        l = e.fallbackTask,
                        o = e.upcomingTask,
                        s = e.isLastBoost,
                        c = e.nextBoost,
                        d = X()(i).utcOffset(0).format("DD"),
                        u = X()(i).utcOffset(0).format("MMM"),
                        h = c ? X()(c.from).utcOffset(0).subtract(1, "day").format("DD") : null,
                        p = c ? X()(c.from).utcOffset(0).subtract(1, "day").format("MMM") : null,
                        f = (null == l ? void 0 : l.boostId) === r,
                        m = (null == o ? void 0 : o.boostId) === r,
                        v = m ? "upcoming ".concat(f ? " fallback" : "") : f ? "".concat(a ? "active " : m ? "upcoming " : "", "fallback") : a ? "active" : "";
                    return (0, R.BX)("div", {
                        className: (0, ee.default)("border relative h-fit border-[#27272A] py-1.5 rounded-md flex flex-col w-fit justify-center items-center text-[#A1A1AA]", {
                            "border-[#91cb75]/30": n > 1,
                            "border-[#ee6565]/30": 0 === n,
                            "bg-[#91cb75]/10": n > 1,
                            "bg-[#ee6565]/10": 0 === n,
                            "bg-[#27272A]/60": f
                        }),
                        children: [s && !a && (0, R.tZ)("div", {
                            className: "absolute top-0 right-0 translate-x-[8px] -translate-y-[10px]",
                            children: (0, R.tZ)("button", {
                                type: "button",
                                onClick: function() {
                                    return t({
                                        boostId: r
                                    })
                                },
                                className: "rounded-full bg-[#27272A] p-0.5 border border-white/30 text-white/50 hover:scale-125 transition-all",
                                children: (0, R.tZ)(x.oc, {
                                    className: "w-3 h-3"
                                })
                            })
                        }), (0, R.BX)("div", {
                            className: (0, ee.default)("flex gap-2 items-center px-2.5", {
                                "text-[#91cb75]/80": n > 1,
                                "text-[#ee6565]/80": 0 === n
                            }),
                            children: [(0, R.BX)("div", {
                                className: "text-center",
                                children: [(0, R.tZ)("div", {
                                    className: "",
                                    children: d
                                }), (0, R.tZ)("div", {
                                    className: "text-xs font-light",
                                    children: u
                                })]
                            }), h && (0, R.tZ)("div", {
                                children: "-"
                            }), h && (0, R.BX)("div", {
                                className: "text-center",
                                children: [(0, R.tZ)("div", {
                                    children: h
                                }), (0, R.tZ)("div", {
                                    className: "text-xs font-light",
                                    children: p
                                })]
                            })]
                        }), (0, R.tZ)("div", {
                            className: (0, ee.default)("mt-2 pt-1.5 border-t border-[#27272A] w-full", {
                                "border-[#91cb75]/30": n > 1,
                                "border-[#ee6565]/30": 0 === n
                            }),
                            children: (0, R.BX)("div", {
                                className: (0, ee.default)("text-xs text-center", {
                                    "text-[#91cb75]": n > 1,
                                    "text-[#ee6565]": 0 === n
                                }),
                                children: ["x", n]
                            })
                        }), (a || f || m) && (0, R.tZ)("div", {
                            className: (0, ee.default)("mt-1.5 pt-1 border-t border-[#27272A] w-full min-w-fit px-2 flex items-center justify-center", {
                                "border-[#91cb75]/30": n > 1,
                                "border-[#ee6565]/30": 0 === n
                            }),
                            children: (0, R.tZ)("div", {
                                className: (0, ee.default)("text-xs text-center", {
                                    "text-[#91cb75]/80": n > 1,
                                    "text-[#ee6565]/80": 0 === n
                                }),
                                children: v
                            })
                        })]
                    })
                };

            function eu(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eh(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eu(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eu(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ep = function(e) {
                    var t, r, n = e.epochSSR,
                        i = (0, f.Z4)({
                            showDisabledTasks: !0,
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateIfStale: !1,
                                revalidateOnReconnect: !1
                            }
                        }).data,
                        a = (0, d.useState)(null),
                        l = a[0],
                        o = a[1],
                        s = (0, f.W_)({}),
                        c = s.data,
                        u = s.mutate,
                        h = null == c || null === (t = c.boostsByReason) || void 0 === t ? void 0 : t[l],
                        p = null == h ? void 0 : h.reduce(function(e, t, r) {
                            return X()(t.from).isBefore(X()(null == n ? void 0 : n.currentEpochStartingDate).utcOffset(0)) && r !== h.length - 1 && !t.isActive || e.push(t), e
                        }, []),
                        v = null == p ? void 0 : p[p.length - 1],
                        g = null == p ? void 0 : p.findIndex(function(e) {
                            return e.isActive
                        }),
                        y = (0, es.Z)(g) ? null : null == p ? void 0 : p[g + 1],
                        Z = X()(null == n ? void 0 : n.currentEpochStartingDate).utcOffset(0),
                        k = null == n ? void 0 : n.currentEpochRange,
                        w = null == n ? void 0 : n.currentEpochRangeUnit,
                        C = (0, d.useState)(),
                        A = C[0],
                        N = C[1],
                        O = (0, d.useState)(0),
                        B = O[0],
                        D = O[1],
                        L = (0, d.useState)("1"),
                        E = L[0],
                        H = L[1];
                    (0, ec.Z)(function() {
                        if (l && p) {
                            var e = p.pop(),
                                t = X()().utcOffset(0),
                                r = X()(e.from).isBefore(t) ? t : e.from;
                            N(X()(r).add(k, w).utcOffset(0))
                        }
                    }, [k, w, p, l]);
                    var M = (0, d.useCallback)(function() {
                            D(function(e) {
                                return e + k
                            })
                        }, [k]),
                        P = (0, d.useCallback)(function() {
                            0 !== B && D(function(e) {
                                return e - k
                            })
                        }, [k, B]),
                        j = (0, d.useMemo)(function() {
                            if (!l || !Z) return null;
                            var e = null == A ? void 0 : A.add(B, w);
                            return null != e && e.isBefore(A) ? null : e
                        }, [w, Z, A, B, l]),
                        S = (0, d.useCallback)((0, m.Z)(b().mark(function e() {
                            return b().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, !(!l || !j || !E)) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.next = 5, f.Wp.addTaskBoost({
                                            taskName: l,
                                            fromDate: j.utc().startOf("day").toDate(),
                                            multiplier: Number(E)
                                        });
                                    case 5:
                                        return e.next = 7, u();
                                    case 7:
                                        e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(0), console.error(e.t0);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 9]
                            ])
                        })), [u, j, E, l]);
                    return (0, R.BX)("div", {
                        children: [(0, R.BX)("div", {
                            className: "flex gap-4 mb-6",
                            children: [(0, R.BX)("div", {
                                className: "",
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Active boosts"
                                }), (0, R.tZ)("div", {
                                    className: "border border-[#27272A] rounded-md  max-h-[200px] overflow-y-scroll flex pt-[150px] flex-col justify-center items-center text-[#A1A1AA]",
                                    children: (0, R.BX)("table", {
                                        className: "",
                                        children: [(0, R.BX)("tr", {
                                            className: "text-left",
                                            children: [(0, R.tZ)("th", {
                                                className: "font-normal text-xs text-[#A1A1AA] px-2 pl-4 pb-2",
                                                children: "task"
                                            }), (0, R.tZ)("th", {
                                                className: "font-normal text-xs text-[#A1A1AA] text-center px-2 pb-2",
                                                children: "multiplier"
                                            }), (0, R.tZ)("th", {
                                                className: "font-normal text-xs text-[#A1A1AA] text-center px-2 pb-2",
                                                children: "from"
                                            }), (0, R.tZ)("th", {
                                                className: "font-normal text-xs text-[#A1A1AA] text-center px-2 pr-4 pb-2",
                                                children: "until"
                                            })]
                                        }), null == i || null === (r = i.tasks) || void 0 === r ? void 0 : r.map(function(e) {
                                            var t, r, n, a, s = null !== (t = null == i || null === (r = i.boosts) || void 0 === r ? void 0 : r[e]) && void 0 !== t ? t : {},
                                                d = s.multiplier,
                                                u = s.from,
                                                h = null == c || null === (n = c.boostsByReason) || void 0 === n || null === (n = n[e]) || void 0 === n ? void 0 : n.findIndex(function(e) {
                                                    return e.isActive
                                                }),
                                                p = -1 === h ? null : null == c || null === (a = c.boostsByReason) || void 0 === a || null === (a = a[e]) || void 0 === a ? void 0 : a[h + 1];
                                            return (0, R.BX)("tr", {
                                                className: (0, ee.default)("hover:bg-[#27272A]/30 cursor-pointer", {
                                                    "text-[#91cb75]": d > 1,
                                                    "text-[#ee6565]": d < 1,
                                                    "text-[#A1A1AA]": 1 === d,
                                                    "bg-[#27272A]/60 hover:bg-[#27272A]/60": l === e
                                                }),
                                                onClick: function() {
                                                    o(e)
                                                },
                                                children: [(0, R.tZ)("td", {
                                                    className: "px-2 pl-4 text-sm",
                                                    children: e
                                                }), (0, R.BX)("td", {
                                                    className: "px-2 text-center",
                                                    children: ["x", d]
                                                }), (0, R.tZ)("td", {
                                                    className: "text-sm text-center",
                                                    children: u ? X()(u).utcOffset(0).format("DD MMM") : "-"
                                                }), (0, R.tZ)("td", {
                                                    className: (0, ee.default)("text-sm text-center px-4", {
                                                        "text-[#ee6565]": p && p.multiplier < 1,
                                                        "text-[#91cb75]": p && p.multiplier > 1
                                                    }),
                                                    children: null != p && p.from ? X()(null == p ? void 0 : p.from).utcOffset(0).format("DD MMM") : "∞"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0, R.BX)("div", {
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Boost calendar"
                                }), (0, R.tZ)("div", {
                                    className: "flex gap-2 flex-wrap",
                                    children: null == p ? void 0 : p.map(function(e, t) {
                                        var r, n = null == p ? void 0 : p[t + 1];
                                        return (0, R.tZ)(ed, eh(eh({}, e), {}, {
                                            index: t,
                                            fallbackTask: v,
                                            upcomingTask: y,
                                            nextBoost: n,
                                            isLastBoost: t === p.length - 1,
                                            deleteTaskBoost: (r = (0, m.Z)(b().mark(function e(t) {
                                                var r;
                                                return b().wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return r = t.boostId, e.next = 3, f.Wp.deleteTaskBoost({
                                                                boostId: r
                                                            });
                                                        case 3:
                                                            return e.next = 5, u();
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            })), function(e) {
                                                return r.apply(this, arguments)
                                            })
                                        }))
                                    })
                                })]
                            })]
                        }), (0, R.BX)("div", {
                            className: "flex gap-4",
                            children: [(0, R.BX)("div", {
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Add boost"
                                }), (0, R.tZ)("div", {
                                    className: "border h-full text-sm border-[#27272A] px-4 rounded-md flex flex-col w-fit justify-center items-center text-[#A1A1AA]",
                                    children: (0, R.BX)("div", {
                                        className: "flex gap-2",
                                        children: [(0, R.BX)("div", {
                                            className: "",
                                            children: [(0, R.tZ)("div", {
                                                className: "text-[11px] mb-1",
                                                children: "From"
                                            }), (0, R.tZ)("input", {
                                                className: "border border-[#27272A] bg-[#27272A] px-2 py-1 rounded-md outline-none min-w-[200px] text-center disabled:opacity-50",
                                                type: "text",
                                                disabled: !l,
                                                value: j ? X()(j).utcOffset(0).format("DD MMM") : ""
                                            }), (0, R.tZ)("div", {
                                                className: "flex items-center w-full mt-1",
                                                children: (0, R.BX)("div", {
                                                    className: "w-fit flex gap-1",
                                                    children: [(0, R.tZ)("button", {
                                                        type: "button",
                                                        disabled: !l || 0 === B,
                                                        onClick: P,
                                                        className: "bg-[#27272A]/70 rounded-md disabled:opacity-50",
                                                        children: (0, R.tZ)(x.ed9, {
                                                            className: "scale-[60%]"
                                                        })
                                                    }), (0, R.tZ)("button", {
                                                        type: "button",
                                                        disabled: !l,
                                                        onClick: M,
                                                        className: "bg-[#27272A]/70 rounded-md disabled:opacity-50",
                                                        children: (0, R.tZ)(x.VG8, {
                                                            className: "scale-[60%]"
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), (0, R.BX)("div", {
                                            children: [(0, R.tZ)("div", {
                                                className: (0, ee.default)("text-[11px] mb-1", {}),
                                                children: "Multiplier"
                                            }), (0, R.tZ)("input", {
                                                className: "border border-[#27272A] bg-[#27272A] px-2 py-1 rounded-md outline-none w-[150px] text-center disabled:opacity-50",
                                                type: "string",
                                                disabled: !l,
                                                onChange: function(e) {
                                                    H(e.target.value)
                                                },
                                                value: E
                                            }), (0, R.tZ)("div", {
                                                className: "flex justify-end w-full mt-1",
                                                children: (0, R.tZ)("div", {
                                                    className: "w-fit flex gap-1",
                                                    children: (0, R.tZ)("button", {
                                                        type: "button",
                                                        disabled: !l,
                                                        onClick: S,
                                                        className: "bg-[#27272A]/70 rounded-md disabled:opacity-50",
                                                        children: (0, R.tZ)(x.lpz, {
                                                            className: "scale-[50%]"
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, R.BX)("div", {
                                className: "w-full",
                                children: [(0, R.tZ)("div", {
                                    className: "text-xs mb-1 text-[#A1A1AA]",
                                    children: "Epoch calendar"
                                }), (0, R.tZ)("div", {
                                    className: "flex justify-center w-full items-center border border-[#27272A] h-full rounded-md",
                                    children: (0, R.tZ)("div", {
                                        className: "text-xs flex-wrap gap-1.5 flex text-[#A1A1AA] mx-auto px-4",
                                        children: Z && (null == n ? void 0 : n.currentEpochEndingDate) && Array.from({
                                            length: 34
                                        }, function(e, t) {
                                            var r = Z.utcOffset(0).add(t * k, w).utcOffset(0),
                                                i = X()(null == n ? void 0 : n.currentEpochEndingDate).utcOffset(0).add(t * k - 1, w),
                                                a = (null == j ? void 0 : j.isBefore(r)) || (null == j ? void 0 : j.isSame(r));
                                            return (0, R.BX)("div", {
                                                className: (0, ee.default)("text-[10px] border border-[#27272A] h-fit rounded-md px-1 py-0.5 text-[#A1A1AA]", {
                                                    "border-none": 0 === t,
                                                    "bg-[#171719]": a,
                                                    "opacity-70": !a
                                                }),
                                                children: [r.format("DD MMM"), " - ", i.format("DD MMM")]
                                            })
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                ef = ["epochSSR"];

            function em(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ev(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? em(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eb = ["General", "Boosts", "Featured"],
                ex = function(e) {
                    var t = e.epochSSR,
                        r = (0, K.Z)(e, ef),
                        n = (0, d.useState)(!1),
                        i = n[0],
                        a = n[1],
                        l = (0, d.useState)(eb[1]),
                        o = l[0],
                        s = l[1];
                    return (0, R.BX)("div", {
                        className: "bg-black dark text-white border-t border-x shadow-2xl border-[#27272A] fixed z-[999999] bottom-0 w-[calc(100%-265px)] rounded-t-md",
                        style: {
                            boxShadow: "0px 0px 80px 30px rgba(0,0,0,0.7)"
                        },
                        children: [(0, R.BX)("button", {
                            type: "button",
                            onClick: function() {
                                a(function(e) {
                                    return !e
                                })
                            },
                            className: "bg-[#27272A] w-[200px] h-3.5 absolute top left-1/2 -translate-x-1/2 -translate-y-3.5 rounded-t-sm flex justify-center items-center",
                            children: [(0, R.tZ)(x.CzJ, {
                                className: (0, ee.default)("w-2 h-2 text-[#A1A1AA", {
                                    "transform rotate-180": i
                                })
                            }), (0, R.tZ)("div", {
                                className: "text-[10px] text-[#A1A1AA] ml-2",
                                children: "XP devtools"
                            })]
                        }), (0, R.tZ)("div", {
                            className: "",
                            children: i && (0, R.BX)("div", {
                                className: (0, ee.default)("p-4 overflow-y-scroll h-[500px] overflow-x-hidden will-change-scroll no-scrolbar", {
                                    hidden: !i
                                }),
                                children: [(0, R.tZ)("div", {
                                    className: "border border-[#27272A] w-fit rounded-full fixed z-50",
                                    style: {
                                        boxShadow: "0px 0px 20px 10px rgba(0,0,0,0.6)"
                                    },
                                    children: (0, R.tZ)(x.mQc, {
                                        items: eb,
                                        initialSelection: eb[1],
                                        onSelect: function(e) {
                                            s(e)
                                        }
                                    })
                                }), (0, R.BX)("div", {
                                    className: "w-full py-6 mt-6 min-h-[400px]",
                                    children: [o === eb[0] && (0, R.tZ)(ea, ev({
                                        epochSSR: t
                                    }, r)), o === eb[1] && (0, R.tZ)(ep, ev({
                                        epochSSR: t
                                    }, r)), o === eb[2] && (0, R.tZ)(eo, ev({
                                        epochSSR: t
                                    }, r))]
                                })]
                            })
                        })]
                    })
                },
                eg = function(e) {
                    var t = e.isGenerateLinkModalOpen,
                        r = e.closeInviteLinkModal,
                        n = e.inviteLink,
                        i = e.copyInviteLinkToClipboard,
                        a = (0, s.AA)().copy;
                    return (0, R.tZ)(x.QAJ, {
                        onClose: r,
                        open: t,
                        title: a.hub.points.generateInviteLinkDialog.title,
                        children: (0, R.BX)("div", {
                            className: "flex flex-col items-center gap-4 w-full",
                            children: [(0, R.tZ)(j.Z, {
                                variant: "body1",
                                children: a.hub.points.generateInviteLinkDialog.description
                            }), (0, R.tZ)("div", {
                                className: "w-full text-center bg-grey-100 dark:bg-grey-700 p-6 border border-solid border-grey-200 dark:border-grey-600 rounded",
                                children: (0, R.tZ)(j.Z, {
                                    className: "text-grey-400 dark:text-grey-300 break-all truncate",
                                    variant: "body1",
                                    children: n
                                })
                            }), (0, R.BX)(x.kHo, {
                                onClick: i,
                                children: [(0, R.tZ)(x.vUr, {}), a.hub.points.generateInviteLinkDialog.copyLink]
                            })]
                        })
                    })
                },
                ey = r(85243),
                eZ = r(12205),
                ek = r(78417),
                ew = r(14902),
                eC = r.n(ew),
                eA = r(34809),
                eN = function(e) {
                    var t = e.currentUserColorByRank,
                        r = e.leaderboardUser,
                        n = e.index,
                        i = r.userAddress,
                        a = r.totalXP,
                        l = (0, h.Os)().address,
                        o = (0, eA.x)().formattingFn,
                        s = (0, ek.Z)(a),
                        d = i.toLowerCase() === (null == l ? void 0 : l.toLowerCase()),
                        u = V.tM[n + 1] || "";
                    return (0, R.BX)(ey.E.div, {
                        layout: !0,
                        className: (0, ee.default)("flex justify-between h-fit gap-4 flex-wrap bg-grey-50 dark:bg-grey-800 border border-grey-200 dark:border-grey-600 rounded p-4 select-none", {
                            "dark:!bg-grey-700 !bg-grey-200/50": d
                        }),
                        style: {
                            border: d && t ? "1px solid ".concat(eC()(t).alpha(.5).hex()) : ""
                        },
                        children: [(0, R.BX)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, R.tZ)("div", {
                                className: "flex justify-center items-center w-6 rounded-sm px-1 py-0.5",
                                style: u ? {
                                    backgroundColor: u
                                } : void 0,
                                children: (0, R.tZ)(j.Z, {
                                    style: u ? {
                                        color: "#000000"
                                    } : void 0,
                                    children: (0, C.padNumberLeft)(n + 1)
                                })
                            }), (0, R.tZ)(j.Z, {
                                children: (0, c.Xn)(i, 5, 5)
                            })]
                        }), (0, R.BX)("div", {
                            children: [(0, R.tZ)(eZ.ZP, {
                                end: null != a ? a : 0,
                                duration: 1,
                                start: s,
                                startVal: s,
                                formattingFn: o
                            }), " ", "XP"]
                        })]
                    }, i)
                };

            function eO(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eB(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eO(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eO(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eD = function(e) {
                    var t, r, n = e.userAddress,
                        i = e.userPointsXp,
                        a = e.userRanking,
                        l = e.leaderboard,
                        o = e.isSectionGreyedOut,
                        u = e.isWalletEnrolledBe,
                        h = (0, s.AA)().copy,
                        p = (0, eA.x)().formattingFn,
                        f = (0, ek.Z)(i),
                        m = (0, ek.Z)(a),
                        v = (0, _.v9)(x.xVq.selectIsDarkMode),
                        b = (0, d.useMemo)(function() {
                            return a && 0 !== a ? (0, C.padNumberLeft)(a) : "--"
                        }, [a]),
                        g = V.tM[null !== (t = Number(b)) && void 0 !== t ? t : 0] || "";
                    return (0, R.BX)(S.Zb, {
                        className: (0, ee.default)("md:sticky md:top-[90px] p-0 w-full lg:min-w-[366px] lg:w-[366px] h col-span-2 flex flex-col justify-between !h-fit max-h-[400px] md:!h-[calc(100vh-120px)] md:min-h-[400px] md:max-h-[calc(100vh-125px)] pt-6 !bg-grey-50 dark:!bg-grey-800 opacity-100", {
                            "opacity-50": o
                        }),
                        style: {
                            gridArea: "leaderboard",
                            height: "90vh"
                        },
                        children: [(0, R.tZ)(j.Z, {
                            variant: "body1",
                            className: "text-2xl mb-6 px-6",
                            children: h.hub.points.leaderboard
                        }), !!(null == l ? void 0 : l.length) && (0, R.tZ)(ey.E.div, eB(eB({}, (0, c.zW)({
                            delay: .5,
                            y: 0
                        })), {}, {
                            className: (0, ee.default)("flex flex-col flex-grow gap-3 h-fit overflow-y-scroll pl-6 pb-10 pr-2 mr-2 will-change-scroll", {
                                "opacity-50 !overflow-hidden pr-4": o
                            }),
                            children: null == l ? void 0 : l.map(function(e, t) {
                                return (0, R.tZ)(eN, {
                                    currentUserColorByRank: g,
                                    leaderboardUser: e,
                                    index: t
                                }, e.userAddress)
                            })
                        })), !(null != l && l.length) && (0, R.BX)(ey.E.div, eB(eB({}, (0, c.zW)({
                            delay: .5,
                            y: 0
                        })), {}, {
                            className: "flex flex-col items-center justify-center w-full flex-grow gap-4 mt-[-80px] min-h-[400px]",
                            children: [(0, R.tZ)(x.JR0, {}), (0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-center text-grey-400 dark:text-grey-300",
                                children: h.hub.points.emptyState.noLeaderboard
                            })]
                        })), !!(null == l ? void 0 : l.length) && u && (0, R.BX)(ey.E.div, eB(eB({}, (0, c.zW)({
                            delay: .5,
                            y: 30
                        })), {}, {
                            className: "relative h-fit",
                            children: [(0, R.BX)("div", {
                                className: "relative flex justify-between bg-grey-50 dark:bg-grey-800 rounded h-13 px-10 py-6 z-20",
                                style: {
                                    boxShadow: v ? "0px 2px 6px 2px rgba(0, 0, 0, 0.30), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)" : ""
                                },
                                children: [(0, R.BX)("div", {
                                    className: "flex gap-2 items-center",
                                    children: [(0, R.tZ)("div", {
                                        className: "flex justify-center items-center w-6 rounded-sm px-1 py-0.5",
                                        style: g ? {
                                            backgroundColor: g,
                                            color: "#000000"
                                        } : void 0,
                                        children: "--" === b ? "--" : (0, R.tZ)(eZ.ZP, {
                                            end: null !== (r = Number(b)) && void 0 !== r ? r : 0,
                                            duration: 1,
                                            formattingFn: p,
                                            start: m,
                                            startVal: m,
                                            className: "text-sm"
                                        })
                                    }), (0, R.tZ)(j.Z, {
                                        children: (0, c.Xn)(null == n ? void 0 : n.toLowerCase(), 5, 5)
                                    })]
                                }), (0, R.BX)("div", {
                                    children: [(0, R.tZ)(eZ.ZP, {
                                        end: null != i ? i : 0,
                                        duration: 1,
                                        formattingFn: p,
                                        start: f,
                                        startVal: f
                                    }), " ", "XP"]
                                })]
                            }), (0, R.tZ)("div", {
                                className: "w-full h-[64px] absolute left-0 -top-full pointer-events-none translate-y-3 z-0",
                                style: {
                                    background: v ? "linear-gradient(180deg, rgba(21, 25, 30, 0.00) 0%, #111419 110%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)"
                                }
                            })]
                        }))]
                    })
                },
                eX = r(68073),
                eL = function(e) {
                    var t = e.isWalletEnrolled,
                        r = e.openInviteLinkModal,
                        n = (0, s.AA)().copy;
                    return t ? (0, R.BX)(x.kHo, {
                        onClick: r,
                        fullWidth: !1,
                        className: "!py-3 !px-2",
                        children: [(0, R.tZ)(x.JHz, {
                            size: 18,
                            className: "text-grey-50"
                        }), n.hub.points.inviteFriends]
                    }) : null
                },
                eE = function(e) {
                    var t = e.userLevel,
                        r = (0, s.AA)().copy,
                        n = (0, s.cK)().isSmallDevice,
                        i = (0, V.DR)(t),
                        a = i[0].id > 0,
                        l = i[i.length - 1].id < V.bC[V.bC.length - 1].id,
                        o = i.map(function(e) {
                            return e.id
                        }).indexOf(t);
                    return (0, R.BX)("div", {
                        className: "flex justify-between items-center",
                        children: [a && (0, R.BX)("div", {
                            className: "relative w-0.5 h-0.5 bg-grey-400 dark:bg-grey-300 rounded pl-0.5 mr-4",
                            children: [(0, R.tZ)("div", {
                                className: "absolute w-0.5 h-0.5 bg-grey-400 dark:bg-grey-300 rounded -right-1"
                            }), (0, R.tZ)("div", {
                                className: "absolute w-1.5 h-0.5 bg-grey-400 dark:bg-grey-300 rounded -right-3"
                            })]
                        }), i.map(function(e, a) {
                            var l = e.icon,
                                s = e.id,
                                c = e.card.bgColor,
                                d = a === i.length - 1,
                                u = l || x.BFW,
                                h = (0, V.xF)(s);
                            return (0, R.BX)("div", {
                                className: (0, ee.default)("flex items-center", {
                                    "w-full": !d,
                                    "opacity-10 hover:opacity-30 transition-all duration-300 ease-in-out": !(a <= o)
                                }),
                                children: [(0, R.tZ)(eX.Z, {
                                    title: (0, R.BX)("div", {
                                        className: "flex flex-col items-center",
                                        children: [(0, R.tZ)(j.Z, {
                                            variant: "body1",
                                            className: "text-grey-900 font-medium",
                                            children: "".concat(h, " XP")
                                        }), (0, R.tZ)(j.Z, {
                                            className: "text-xs text-grey-500",
                                            children: "".concat(r.hub.points.level.toUpperCase(), " ").concat(s)
                                        })]
                                    }),
                                    placement: "top",
                                    arrow: !0,
                                    classes: {
                                        tooltip: "bg-grey-200 text-grey-400",
                                        arrow: "text-grey-200"
                                    },
                                    children: (0, R.tZ)("div", {
                                        className: "flex-shrink-0 leading-none cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out",
                                        children: (0, R.tZ)(u, {
                                            size: 24
                                        })
                                    })
                                }), !d && (0, R.tZ)("div", {
                                    className: (0, ee.default)("flex-grow h-0.5 min-w-[12px] mx-1 rounded-lg", {
                                        "bg-grey-400 dark:bg-grey-300": s !== t || n,
                                        "bg-grey-200 dark:bg-grey-600": t === s && !n
                                    }),
                                    children: t === s && (0, R.tZ)("div", {
                                        className: "w-2/5 h-0.5 rounded-lg bg-grey-400 dark:bg-grey-300"
                                    })
                                })]
                            }, "".concat(s, "-").concat(c))
                        }), l && (0, R.BX)("div", {
                            className: "relative w-0.5 h-0.5 bg-grey-200 dark:bg-grey-600 rounded pr-0.5 ml-4",
                            children: [(0, R.tZ)("div", {
                                className: "absolute w-0.5 h-0.5 bg-grey-200 dark:bg-grey-600 rounded -left-1"
                            }), (0, R.tZ)("div", {
                                className: "absolute w-1.5 h-0.5 bg-grey-200 dark:bg-grey-600 rounded -left-3"
                            })]
                        })]
                    })
                },
                eH = function() {
                    return (0, _.v9)(x.xVq.selectIsDarkMode) ? (0, R.BX)("svg", {
                        width: "400",
                        height: "252",
                        viewBox: "0 0 400 252",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, R.tZ)("rect", {
                            x: "108.138",
                            y: "134.724",
                            width: "96.2765",
                            height: "96.2765",
                            fill: "#2D3237"
                        }), (0, R.tZ)("path", {
                            d: "M88.8831 126.208C88.8831 123.998 90.674 122.208 92.8831 122.208H143.898V160.718H92.8831C90.674 160.718 88.8831 158.927 88.8831 156.718V126.208Z",
                            fill: "#FA5628"
                        }), (0, R.tZ)("rect", {
                            x: "143.898",
                            y: "134.861",
                            width: "3.30091",
                            height: "13.2036",
                            fill: "#A9ACB0"
                        }), (0, R.tZ)("path", {
                            d: "M143.898 134.861V148.065H123.691C121.482 148.065 119.691 146.274 119.691 144.065V138.861C119.691 136.652 121.482 134.861 123.691 134.861H143.898Z",
                            fill: "white"
                        }), (0, R.tZ)("ellipse", {
                            cx: "126.293",
                            cy: "141.462",
                            rx: "2.75076",
                            ry: "2.75076",
                            fill: "#FA5628"
                        }), (0, R.tZ)("ellipse", {
                            cx: "185.159",
                            cy: "134.724",
                            rx: "9.62765",
                            ry: "9.62765",
                            fill: "#D4FF5C"
                        }), (0, R.tZ)("path", {
                            d: "M194.787 134.724C194.787 133.46 194.538 132.208 194.054 131.039C193.57 129.871 192.861 128.81 191.967 127.916C191.073 127.022 190.012 126.313 188.844 125.829C187.676 125.345 186.424 125.096 185.159 125.096C183.895 125.096 182.643 125.345 181.475 125.829C180.307 126.313 179.246 127.022 178.352 127.916C177.458 128.81 176.748 129.871 176.265 131.039C175.781 132.208 175.532 133.46 175.532 134.724L185.159 134.724H194.787Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("rect", {
                            x: "60",
                            y: "184.787",
                            width: "28.8829",
                            height: "28.8829",
                            fill: "#003D2D"
                        }), (0, R.tZ)("rect", {
                            x: "65.7766",
                            y: "190.563",
                            width: "28.8829",
                            height: "28.8829",
                            fill: "#005741"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M88.8829 190.563V213.67H65.7766V190.563H88.8829Z",
                            fill: "#007457"
                        }), (0, R.tZ)("ellipse", {
                            cx: "77.3297",
                            cy: "202.116",
                            rx: "5.77659",
                            ry: "5.77659",
                            fill: "#D4FF5C"
                        }), (0, R.tZ)("rect", {
                            x: "60",
                            y: "50",
                            width: "173.298",
                            height: "57.7659",
                            fill: "#1F2328"
                        }), (0, R.tZ)("rect", {
                            x: "92.734",
                            y: "77.9199",
                            width: "107.83",
                            height: "1.92553",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "92.734",
                            y: "77.9199",
                            width: "90.4999",
                            height: "1.92553",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M88.883 69.2554L98.5106 78.883L88.883 88.5107L79.2553 78.883L88.883 69.2554Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M117.766 69.2554L127.393 78.883L117.766 88.5107L108.138 78.883L117.766 69.2554Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M146.649 69.2554L156.276 78.883L146.649 88.5107L137.021 78.883L146.649 69.2554Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M175.532 69.2554L185.159 78.883L175.532 88.5107L165.904 78.883L175.532 69.2554Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M204.415 69.2554L214.043 78.883L204.415 88.5107L194.787 78.883L204.415 69.2554Z",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "223.67",
                            y: "87.5481",
                            width: "115.532",
                            height: "28.8829",
                            rx: "2",
                            fill: "#2D3237"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M318.984 116.431L318.984 87.5481L319.947 87.5481L319.947 116.431L318.984 116.431Z",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "233.298",
                            y: "96.2124",
                            width: "77.0212",
                            height: "3.85106",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "233.298",
                            y: "103.915",
                            width: "48.1382",
                            height: "3.85106",
                            fill: "#3C4146"
                        }), (0, R.tZ)("ellipse", {
                            cx: "329.574",
                            cy: "101.99",
                            rx: "3.85106",
                            ry: "3.85106",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("rect", {
                            x: "223.67",
                            y: "122.208",
                            width: "115.532",
                            height: "28.8829",
                            rx: "2",
                            fill: "#1F2328"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M318.984 151.09L318.984 122.208L319.947 122.208L319.947 151.09L318.984 151.09Z",
                            fill: "#2D3237"
                        }), (0, R.tZ)("rect", {
                            x: "233.298",
                            y: "130.872",
                            width: "77.0212",
                            height: "3.85106",
                            fill: "#2D3237"
                        }), (0, R.tZ)("rect", {
                            x: "233.298",
                            y: "138.575",
                            width: "48.1382",
                            height: "3.85106",
                            fill: "#2D3237"
                        }), (0, R.tZ)("ellipse", {
                            cx: "329.574",
                            cy: "136.648",
                            rx: "3.85106",
                            ry: "3.85106",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "266.032",
                            y: "196.34",
                            width: "67.3935",
                            height: "23.1064",
                            rx: "2",
                            fill: "#1D7789"
                        }), (0, R.tZ)("rect", {
                            x: "314.17",
                            y: "204.042",
                            width: "13.4787",
                            height: "7.70212",
                            rx: "3.85106",
                            fill: "#D4FF5C"
                        }), (0, R.tZ)("rect", {
                            x: "119.691",
                            y: "168.42",
                            width: "73.1701",
                            height: "5.77659",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "119.691",
                            y: "179.974",
                            width: "73.1701",
                            height: "5.77659",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "119.691",
                            y: "191.526",
                            width: "53.9148",
                            height: "5.77659",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "223.67",
                            y: "162.644",
                            width: "28.8829",
                            height: "28.8829",
                            fill: "#F7F3EC"
                        }), (0, R.tZ)("ellipse", {
                            cx: "238.111",
                            cy: "172.271",
                            rx: "5.77659",
                            ry: "5.77659",
                            fill: "#FA5628"
                        }), (0, R.tZ)("path", {
                            d: "M252.553 191.526H223.67C225.216 185.455 231.095 180.936 238.111 180.936C245.128 180.936 251.007 185.455 252.553 191.526Z",
                            fill: "#FA5628"
                        }), (0, R.tZ)("ellipse", {
                            cx: "266.032",
                            cy: "177.085",
                            rx: "9.62765",
                            ry: "9.62765",
                            fill: "#007457"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M266.757 176.568V172.013L265.514 172.013V176.568H260.959V177.81H265.514V182.365H266.757V177.81H271.312V176.568H266.757Z",
                            fill: "#F7F3EC"
                        }), (0, R.tZ)("rect", {
                            x: "136",
                            y: "22",
                            width: "128",
                            height: "40",
                            rx: "20",
                            fill: "#003D2D"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M157.515 42.9962H152V41.0317H157.515V35.5H159.485V41.0317H165V42.9962H159.485V48.5H157.515V42.9962Z",
                            fill: "#D4FF5C"
                        }), (0, R.tZ)("path", {
                            d: "M176.232 35V49H174.152V38.24C173.912 38.56 173.292 38.74 172.732 38.74H171.492V36.9H172.572C173.532 36.9 174.092 36.5 174.212 35H176.232ZM178.13 50.22C178.71 50.22 179.09 49.78 179.09 49.12V46.86H181.07V49.26C181.07 50.82 180.07 51.88 178.59 51.88H177.79V50.22H178.13ZM187.619 49.16C184.179 49.16 182.719 46.82 182.719 42.54V41.46C182.719 37.18 184.179 34.84 187.619 34.84H188.339C191.799 34.84 193.239 37.2 193.239 41.46V42.54C193.239 46.8 191.799 49.16 188.339 49.16H187.619ZM184.819 42.94C184.819 45.86 185.759 47.32 187.699 47.32H188.279C190.219 47.32 191.159 45.86 191.159 42.94V41.06C191.159 38.14 190.219 36.68 188.279 36.68H187.699C185.759 36.68 184.819 38.14 184.819 41.06V42.94ZM200.354 49.16C196.914 49.16 195.454 46.82 195.454 42.54V41.46C195.454 37.18 196.914 34.84 200.354 34.84H201.074C204.534 34.84 205.974 37.2 205.974 41.46V42.54C205.974 46.8 204.534 49.16 201.074 49.16H200.354ZM197.554 42.94C197.554 45.86 198.494 47.32 200.434 47.32H201.014C202.954 47.32 203.894 45.86 203.894 42.94V41.06C203.894 38.14 202.954 36.68 201.014 36.68H200.434C198.494 36.68 197.554 38.14 197.554 41.06V42.94ZM213.088 49.16C209.648 49.16 208.188 46.82 208.188 42.54V41.46C208.188 37.18 209.648 34.84 213.088 34.84H213.808C217.268 34.84 218.708 37.2 218.708 41.46V42.54C218.708 46.8 217.268 49.16 213.808 49.16H213.088ZM210.288 42.94C210.288 45.86 211.228 47.32 213.168 47.32H213.748C215.688 47.32 216.628 45.86 216.628 42.94V41.06C216.628 38.14 215.688 36.68 213.748 36.68H213.168C211.228 36.68 210.288 38.14 210.288 41.06V42.94ZM224.671 49L229.111 41.92L224.771 35H226.931L230.191 40.2L233.451 35H235.631L231.291 41.94L235.711 49H233.531L230.191 43.66L226.851 49H224.671ZM237.536 49V35H242.956C245.776 35 247.476 36.74 247.476 39.22C247.476 41.7 245.776 43.44 242.956 43.44H239.616V49H237.536ZM239.616 41.64H242.896C244.696 41.64 245.396 40.5 245.396 39.22C245.396 37.94 244.696 36.8 242.896 36.8H239.616V41.64Z",
                            fill: "#D4FF5C"
                        })]
                    }) : (0, R.BX)("svg", {
                        width: "400",
                        height: "252",
                        viewBox: "0 0 400 252",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, R.tZ)("rect", {
                            opacity: "0.5",
                            x: "108.138",
                            y: "134.724",
                            width: "96.2766",
                            height: "96.2766",
                            fill: "#A9ACB0"
                        }), (0, R.tZ)("path", {
                            d: "M88.883 126.208C88.883 123.998 90.6739 122.208 92.883 122.208H143.898V160.718H92.883C90.6739 160.718 88.883 158.927 88.883 156.718V126.208Z",
                            fill: "#FA5628"
                        }), (0, R.tZ)("rect", {
                            x: "143.898",
                            y: "134.861",
                            width: "3.30091",
                            height: "13.2036",
                            fill: "#A9ACB0"
                        }), (0, R.tZ)("path", {
                            d: "M143.898 134.861V148.064H123.692C121.482 148.064 119.692 146.274 119.692 144.064V138.861C119.692 136.652 121.482 134.861 123.692 134.861H143.898Z",
                            fill: "white"
                        }), (0, R.tZ)("circle", {
                            cx: "126.293",
                            cy: "141.463",
                            r: "2.75076",
                            fill: "#FA5628"
                        }), (0, R.tZ)("ellipse", {
                            cx: "185.16",
                            cy: "134.723",
                            rx: "9.62766",
                            ry: "9.62766",
                            fill: "#1D7789"
                        }), (0, R.tZ)("path", {
                            d: "M194.787 134.723C194.787 133.459 194.538 132.207 194.054 131.039C193.57 129.871 192.861 128.81 191.967 127.916C191.073 127.022 190.012 126.312 188.844 125.829C187.676 125.345 186.424 125.096 185.16 125.096C183.895 125.096 182.643 125.345 181.475 125.829C180.307 126.312 179.246 127.022 178.352 127.916C177.458 128.81 176.749 129.871 176.265 131.039C175.781 132.207 175.532 133.459 175.532 134.723L185.16 134.723H194.787Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("rect", {
                            x: "60",
                            y: "184.787",
                            width: "28.883",
                            height: "28.883",
                            fill: "#003D2D"
                        }), (0, R.tZ)("rect", {
                            x: "65.7766",
                            y: "190.564",
                            width: "28.883",
                            height: "28.883",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M88.883 190.564V213.67H65.7766V190.564H88.883Z",
                            fill: "#008462"
                        }), (0, R.tZ)("circle", {
                            cx: "77.3298",
                            cy: "202.117",
                            r: "5.7766",
                            fill: "#D4FF5C"
                        }), (0, R.tZ)("rect", {
                            x: "60",
                            y: "50",
                            width: "173.298",
                            height: "57.766",
                            fill: "#E5E8EC"
                        }), (0, R.tZ)("rect", {
                            x: "92.7341",
                            y: "77.9204",
                            width: "107.83",
                            height: "1.92553",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "92.7341",
                            y: "77.9204",
                            width: "90.5",
                            height: "1.92553",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M88.883 69.2554L98.5106 78.883L88.883 88.5107L79.2553 78.883L88.883 69.2554Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M117.766 69.2554L127.394 78.883L117.766 88.5107L108.138 78.883L117.766 69.2554Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M146.649 69.2554L156.277 78.883L146.649 88.5107L137.021 78.883L146.649 69.2554Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M175.532 69.2554L185.16 78.883L175.532 88.5107L165.904 78.883L175.532 69.2554Z",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            d: "M204.415 69.2554L214.043 78.883L204.415 88.5107L194.787 78.883L204.415 69.2554Z",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "223.67",
                            y: "87.5479",
                            width: "115.532",
                            height: "28.883",
                            rx: "2",
                            fill: "#D4D5D7"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M318.984 116.431L318.984 87.5479L319.947 87.5479L319.947 116.431L318.984 116.431Z",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "233.298",
                            y: "96.2129",
                            width: "77.0213",
                            height: "3.85106",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "233.298",
                            y: "103.915",
                            width: "48.1383",
                            height: "3.85106",
                            fill: "white"
                        }), (0, R.tZ)("circle", {
                            cx: "329.574",
                            cy: "101.989",
                            r: "3.85106",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("rect", {
                            x: "223.67",
                            y: "122.208",
                            width: "115.532",
                            height: "28.883",
                            rx: "2",
                            fill: "#E5E8EC"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M318.984 151.09L318.984 122.208L319.947 122.208L319.947 151.09L318.984 151.09Z",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "233.298",
                            y: "130.873",
                            width: "77.0213",
                            height: "3.85106",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "233.298",
                            y: "138.575",
                            width: "48.1383",
                            height: "3.85106",
                            fill: "white"
                        }), (0, R.tZ)("circle", {
                            cx: "329.574",
                            cy: "136.649",
                            r: "3.85106",
                            fill: "#A9ACB0"
                        }), (0, R.tZ)("rect", {
                            x: "266.032",
                            y: "196.34",
                            width: "67.3936",
                            height: "23.1064",
                            rx: "2",
                            fill: "#1D7789"
                        }), (0, R.tZ)("rect", {
                            x: "314.17",
                            y: "204.042",
                            width: "13.4787",
                            height: "7.70213",
                            rx: "3.85106",
                            fill: "#D4FF5C"
                        }), (0, R.tZ)("rect", {
                            x: "119.692",
                            y: "168.42",
                            width: "73.1702",
                            height: "5.7766",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "119.692",
                            y: "179.974",
                            width: "73.1702",
                            height: "5.7766",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "119.692",
                            y: "191.527",
                            width: "53.9149",
                            height: "5.7766",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "223.67",
                            y: "162.644",
                            width: "28.883",
                            height: "28.883",
                            fill: "#003D2D"
                        }), (0, R.tZ)("circle", {
                            cx: "238.112",
                            cy: "172.271",
                            r: "5.7766",
                            fill: "#FA5628"
                        }), (0, R.tZ)("path", {
                            d: "M252.553 191.526H223.67C225.216 185.455 231.095 180.936 238.112 180.936C245.128 180.936 251.007 185.455 252.553 191.526Z",
                            fill: "#FA5628"
                        }), (0, R.tZ)("ellipse", {
                            cx: "266.032",
                            cy: "177.085",
                            rx: "9.62766",
                            ry: "9.62766",
                            fill: "#00BC8D"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M266.757 176.568V172.013L265.514 172.013V176.568H260.959V177.81H265.514V182.365H266.757V177.81H271.312V176.568H266.757Z",
                            fill: "#F7F3EC"
                        }), (0, R.tZ)("rect", {
                            x: "136",
                            y: "22",
                            width: "128",
                            height: "40",
                            rx: "20",
                            fill: "#005741"
                        }), (0, R.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M157.515 42.9962H152V41.0317H157.515V35.5H159.485V41.0317H165V42.9962H159.485V48.5H157.515V42.9962Z",
                            fill: "#D4FF5C"
                        }), (0, R.tZ)("path", {
                            d: "M176.232 35V49H174.152V38.24C173.912 38.56 173.292 38.74 172.732 38.74H171.492V36.9H172.572C173.532 36.9 174.092 36.5 174.212 35H176.232ZM178.13 50.22C178.71 50.22 179.09 49.78 179.09 49.12V46.86H181.07V49.26C181.07 50.82 180.07 51.88 178.59 51.88H177.79V50.22H178.13ZM187.619 49.16C184.179 49.16 182.719 46.82 182.719 42.54V41.46C182.719 37.18 184.179 34.84 187.619 34.84H188.339C191.799 34.84 193.239 37.2 193.239 41.46V42.54C193.239 46.8 191.799 49.16 188.339 49.16H187.619ZM184.819 42.94C184.819 45.86 185.759 47.32 187.699 47.32H188.279C190.219 47.32 191.159 45.86 191.159 42.94V41.06C191.159 38.14 190.219 36.68 188.279 36.68H187.699C185.759 36.68 184.819 38.14 184.819 41.06V42.94ZM200.354 49.16C196.914 49.16 195.454 46.82 195.454 42.54V41.46C195.454 37.18 196.914 34.84 200.354 34.84H201.074C204.534 34.84 205.974 37.2 205.974 41.46V42.54C205.974 46.8 204.534 49.16 201.074 49.16H200.354ZM197.554 42.94C197.554 45.86 198.494 47.32 200.434 47.32H201.014C202.954 47.32 203.894 45.86 203.894 42.94V41.06C203.894 38.14 202.954 36.68 201.014 36.68H200.434C198.494 36.68 197.554 38.14 197.554 41.06V42.94ZM213.088 49.16C209.648 49.16 208.188 46.82 208.188 42.54V41.46C208.188 37.18 209.648 34.84 213.088 34.84H213.808C217.268 34.84 218.708 37.2 218.708 41.46V42.54C218.708 46.8 217.268 49.16 213.808 49.16H213.088ZM210.288 42.94C210.288 45.86 211.228 47.32 213.168 47.32H213.748C215.688 47.32 216.628 45.86 216.628 42.94V41.06C216.628 38.14 215.688 36.68 213.748 36.68H213.168C211.228 36.68 210.288 38.14 210.288 41.06V42.94ZM224.671 49L229.111 41.92L224.771 35H226.931L230.191 40.2L233.451 35H235.631L231.291 41.94L235.711 49H233.531L230.191 43.66L226.851 49H224.671ZM237.536 49V35H242.956C245.776 35 247.476 36.74 247.476 39.22C247.476 41.7 245.776 43.44 242.956 43.44H239.616V49H237.536ZM239.616 41.64H242.896C244.696 41.64 245.396 40.5 245.396 39.22C245.396 37.94 244.696 36.8 242.896 36.8H239.616V41.64Z",
                            fill: "#D4FF5C"
                        })]
                    })
                },
                eM = r(15728),
                eP = r(72578);

            function ej(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eS(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ej(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ej(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eV = function(e) {
                    var t = e.enrollWallet,
                        r = e.isWalletEnrolled,
                        n = e.isWalletEnrolledBe,
                        i = e.isLoadingAcceptInvite,
                        a = e.isOnDifferentChain,
                        l = (0, s.AA)().copy,
                        u = (0, h.Os)(),
                        v = u.address,
                        g = u.isConnected,
                        Z = u.switchNetwork,
                        k = (0, eP.We)().openConnectModal,
                        w = (0, d.useState)(!1),
                        C = w[0],
                        A = w[1],
                        N = (0, f.RP)({
                            address: null != v ? v : "",
                            shouldFetch: !!v,
                            options: {
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1,
                                shouldRetryOnError: !1
                            }
                        }).mutate;
                    return g ? a ? (0, R.tZ)(ey.E.div, eS(eS({}, (0, o.zW)({
                        delay: 1,
                        y: 10
                    })), {}, {
                        className: "mx-auto mt-6",
                        children: (0, R.tZ)(x.Ovp, {
                            onClick: function() {
                                return null == Z ? void 0 : Z(Number(p.N2.chainId))
                            },
                            className: "!w-auto",
                            children: l.hub.points.switchToZetachainNetwork
                        })
                    })) : (0, y.Z)(r) ? null : !1 == !!n && r ? (0, R.tZ)(ey.E.div, eS(eS({}, (0, o.zW)({
                        delay: .5,
                        y: 0
                    })), {}, {
                        className: "mx-auto mt-6 w-full",
                        style: {
                            gridArea: "overviewcta"
                        },
                        children: (0, R.BX)(x.kHo, {
                            disabled: C || !v,
                            onClick: (0, m.Z)(b().mark(function e() {
                                return b().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (v) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return A(!0), (0, c.L9)(c._E.HubXpRefreshEnrollmentButtonClicked), e.prev = 4, e.next = 7, f.Wp.enrollInZetaXp(v);
                                        case 7:
                                            return e.next = 9, N();
                                        case 9:
                                            e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(4), console.error(e.t0);
                                        case 14:
                                            A(!1);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [4, 11]
                                ])
                            })),
                            fullWidth: !0,
                            className: "flex items-center",
                            children: [C && (0, R.tZ)(eM.Z, {
                                size: 16,
                                className: "mr-2"
                            }), (0, R.tZ)("div", {
                                children: l.hub.points.refreshWalletEnrollment
                            })]
                        })
                    })) : !1 === n ? (0, R.tZ)(ey.E.div, eS(eS({}, (0, o.zW)({
                        delay: 1,
                        y: 10
                    })), {}, {
                        className: "mx-auto mt-6 w-full",
                        children: (0, R.BX)(x.kHo, {
                            disabled: C || !v || i,
                            onClick: (0, m.Z)(b().mark(function e() {
                                return b().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return A(!0), (0, c.L9)(c._E.HubXpManualEnrollmentButtonClicked), e.prev = 2, e.next = 5, t();
                                        case 5:
                                            if (!e.sent) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 9, N();
                                        case 9:
                                            e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(2), console.error(e.t0);
                                        case 14:
                                            A(!1);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 11]
                                ])
                            })),
                            fullWidth: !0,
                            className: "flex items-center",
                            children: [(C || i) && (0, R.tZ)(eM.Z, {
                                size: 16,
                                className: "mr-2"
                            }), (0, R.BX)("div", {
                                className: "flex gap-2",
                                children: [(0, R.tZ)(x.MIg, {
                                    className: "text-white",
                                    size: 18
                                }), l.hub.points.walletEnrollment.replace("[X]", "1,000")]
                            })]
                        })
                    })) : (0, R.tZ)(ey.E.div, eS(eS({}, (0, o.zW)({
                        delay: 1,
                        y: 10
                    })), {}, {
                        className: "mx-auto mt-6 w-full",
                        children: (0, R.tZ)(x.kHo, {
                            disabled: !0,
                            fullWidth: !0,
                            className: "flex items-center",
                            color: "error",
                            children: l.hub.points.overviewCtaError
                        })
                    })) : (0, R.tZ)(ey.E.div, eS(eS({}, (0, o.zW)({
                        delay: 1,
                        y: 10
                    })), {}, {
                        className: "mx-auto mt-6",
                        children: (0, R.tZ)(x.Ovp, {
                            onClick: function() {
                                null == k || k()
                            },
                            className: "!w-auto",
                            children: l.hub.shared.connectWallet
                        })
                    }))
                },
                eR = r(41083),
                eI = r(73582),
                eF = r(95580),
                eT = function() {
                    var e = (0, s.AA)().copy;
                    return {
                        columns: (0, d.useMemo)(function() {
                            return [{
                                id: e.hub.points.task,
                                header: e.hub.points.task,
                                accessorFn: function(e) {
                                    return {
                                        task: e.task
                                    }
                                },
                                cell: function(e) {
                                    return (0, R.tZ)(j.Z, {
                                        className: "py-3",
                                        children: V.hE[e.row.original.task]
                                    })
                                },
                                sortingFn: function(e, t) {
                                    var r = e.original.task || "",
                                        n = t.original.task || "";
                                    return r.localeCompare(n)
                                }
                            }, {
                                id: e.hub.points.amount,
                                header: e.hub.points.amount,
                                accessorFn: function(e) {
                                    return {
                                        xpPoints: e.xpPoints
                                    }
                                },
                                cell: function(e) {
                                    return (0, R.BX)("div", {
                                        children: ["+".concat(e.row.original.xpPoints), " ", (0, R.tZ)("span", {
                                            className: "dark:text-grey-300 text-grey-400",
                                            children: "XP"
                                        })]
                                    })
                                },
                                sortingFn: function(e, t) {
                                    return (e.original.xpPoints || 0) - (t.original.xpPoints || 0)
                                }
                            }, {
                                id: e.hub.points.date,
                                header: e.hub.points.date,
                                cell: function(e) {
                                    var t = X()(e.row.original.timestamp);
                                    return (0, R.tZ)(j.Z, {
                                        children: t.format("DD MMM, YYYY HH:mm UTC")
                                    })
                                },
                                sortingFn: function(e, t) {
                                    var r = e.original.timestamp || "",
                                        n = t.original.timestamp || "";
                                    return r.localeCompare(n)
                                }
                            }]
                        }, [e.hub.points.task, e.hub.points.amount, e.hub.points.date])
                    }
                },
                ez = function() {
                    var e, t, r, n = (0, s.AA)().copy,
                        i = (0, h.Os)().address,
                        a = (0, x.P$0)({
                            withQueryParam: !1
                        }),
                        l = a.pagination,
                        o = a.setPagination,
                        c = eT().columns,
                        u = (0, f.QS)({
                            address: null != i ? i : "",
                            page: l.pageIndex ? (l.pageIndex + 1).toString() : "1",
                            shouldFetch: !!i && void 0 !== l.pageIndex,
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateIfStale: !1,
                                revalidateOnReconnect: !1
                            }
                        }),
                        p = u.data,
                        m = u.isLoading,
                        v = (0, d.useMemo)(function() {
                            var e, t;
                            return null !== (e = null == p || null === (t = p.userPointHistory) || void 0 === t ? void 0 : t.map(function(e) {
                                return {
                                    task: e.xpReason,
                                    boost: e.boostMultiplier,
                                    xpPoints: e.xp,
                                    timestamp: e.date
                                }
                            })) && void 0 !== e ? e : []
                        }, [null == p ? void 0 : p.userPointHistory]);
                    return (0, R.tZ)("div", {
                        children: (0, R.tZ)("div", {
                            className: "flex flex-col gap-6",
                            children: null != p && null !== (e = p.userPointHistory) && void 0 !== e && e.length || m ? (0, R.tZ)("div", {
                                className: "border border-grey-100 dark:border-grey-700 rounded-md relative",
                                children: (0, R.tZ)(x.by0, {
                                    columns: c,
                                    data: v,
                                    footerClassName: "border-t border-grey-100 dark:border-grey-700",
                                    withGoToPage: !1,
                                    withItemsPerPage: !1,
                                    pagination: l,
                                    onPaginationChange: o,
                                    totalAmount: null !== (t = null == p || null === (r = p.pagination) || void 0 === r ? void 0 : r.total) && void 0 !== t ? t : 0
                                })
                            }) : (0, R.BX)("div", {
                                className: "flex flex-col items-center justify-center gap-1 h-48",
                                children: [(0, R.tZ)(x.Zpk, {}), (0, R.tZ)(j.Z, {
                                    variant: "body1",
                                    className: "text-center text-grey-400 dark:text-grey-300",
                                    children: n.hub.points.emptyState.noXpHistory
                                })]
                            })
                        })
                    })
                },
                eU = r(27742),
                eW = r(1910);

            function eY(e) {
                var t, r, n, i, a, l, o;
                return null != e && e.heatmap && (null === (o = Object.values((null == e ? void 0 : e.heatmap) || {})) || void 0 === o ? void 0 : o.length) > 0 ? (i = (0, eW.Z)(null === (t = Object.entries((null == e ? void 0 : e.heatmap) || {})) || void 0 === t ? void 0 : t.map(function(t) {
                    var r = (0, B.Z)(t, 2),
                        n = r[0],
                        i = r[1],
                        a = (0, c.e9)(i.completedTasks, e.totalNumberOfTasks);
                    return {
                        date: n,
                        count: i.completedTasks,
                        level: a < 25 ? 1 : a < 50 ? 2 : a < 75 ? 3 : 4
                    }
                }, []), "date") || [], a = X()().subtract(365, "days").format("YYYY-MM-DD"), null !== (r = Object.keys(e.heatmap || {})) && void 0 !== r && r.length && !i.find(function(e) {
                    return X()(e.date).isSame(a)
                }) && i.unshift({
                    date: a,
                    count: 0,
                    level: 0
                }), l = X()().format("YYYY-MM-DD"), X()(null === (n = i[i.length - 1]) || void 0 === n ? void 0 : n.date).isSame(l) || i.push({
                    date: l,
                    count: 0,
                    level: 0
                }), i) : [{
                    date: X()().subtract(1, "year").format("YYYY-MM-DD"),
                    count: 0,
                    level: 0
                }, {
                    date: X()().format("YYYY-MM-DD"),
                    count: 0,
                    level: 0
                }]
            }
            var e_ = function(e) {
                var t, r, n, i, a = e.isUserVerified,
                    l = e.userLevel,
                    o = e.xpUserHeatmapData,
                    s = (0, _.v9)(x.xVq.selectIsDarkMode),
                    c = (0, V.mq)(l),
                    d = eY(o);
                return (0, R.tZ)("div", {
                    className: (0, ee.default)("text-grey-900 dark:text-grey-50 py-3", {
                        "opacity-30 pointer-events-none select-none": !a
                    }),
                    children: (0, R.tZ)(eU.ZP, {
                        data: d,
                        labels: {
                            legend: {
                                less: "Less",
                                more: "More"
                            },
                            totalCount: "Completed tasks: ".concat(null !== (t = null === (r = Object.values((null == o ? void 0 : o.heatmap) || {})) || void 0 === r ? void 0 : r.reduce(function(e, t) {
                                return e + t.completedTasks
                            }, 0)) && void 0 !== t ? t : 0)
                        },
                        colorScheme: s ? "dark" : "light",
                        blockSize: 15,
                        blockMargin: 6,
                        blockRadius: 2,
                        theme: {
                            dark: [eC()("#1F2328").mix(c.card.bgColor || "#A9ACB0", .02).hex(), eC()(c.card.bgColor || "#A9ACB0").darken(2).hex(), eC()(c.card.bgColor || "#A9ACB0").darken(1.5).hex(), eC()(c.card.bgColor || "#A9ACB0").darken(.5).hex(), eC()(c.card.bgColor || "#A9ACB0").brighten(.5).hex()],
                            light: [eC()("#A9ACB0").mix(c.card.bgColor || "#A9ACB0", .02).brighten(1).hex(), eC()(c.card.bgColor || "#A9ACB0").darken(2).hex(), eC()(c.card.bgColor || "#A9ACB0").darken(1.5).hex(), eC()(c.card.bgColor || "#A9ACB0").darken(.5).hex(), eC()(c.card.bgColor || "#A9ACB0").brighten(.5).hex()]
                        },
                        totalCount: null !== (n = null === (i = Object.values((null == o ? void 0 : o.heatmap) || {})) || void 0 === i ? void 0 : i.reduce(function(e, t) {
                            return e + t.completedTasks
                        }, 0)) && void 0 !== n ? n : 0,
                        renderBlock: function(e, t) {
                            return (0, R.tZ)(eX.Z, {
                                title: "".concat(t.count, " Tasks completed on ").concat(X()(t.date).format("DD MMM")),
                                children: e
                            })
                        }
                    })
                })
            };

            function eG(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eq(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eG(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eG(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var e$ = (0, en.Z)(eR.Z, {
                    target: "e60q0r10"
                })({
                    name: "nitz5y",
                    styles: "border-style:none;background-color:transparent;background-image:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); :before,:after{border-style:none !important;background-color:transparent !important;background-image:none !important;;}.MuiAccordionSummary-content{margin-bottom:0px;;}.MuiAccordionDetails-root{margin-top:1.5rem;margin-bottom:1.5rem;padding:0px;;}"
                }),
                eJ = function(e) {
                    var t = e.userLevel,
                        r = e.handleOpenShareDialog,
                        n = e.xpUserHeatmapData,
                        i = e.isUserVerified,
                        a = e.isWalletEnrolled,
                        l = (0, s.AA)().copy,
                        u = (0, d.useState)(!1),
                        h = u[0],
                        p = u[1];
                    return (0, R.BX)(e$, {
                        children: [(0, R.tZ)(eI.Z, {
                            children: (0, R.BX)(ey.E.button, eq(eq({}, (0, o.zW)({
                                delay: .5,
                                y: 0
                            })), {}, {
                                type: "button",
                                className: "flex items-center gap-0.5 text-sm font-medium text-green-100 mx-auto mt-6",
                                onClick: function() {
                                    h || (0, c.L9)(c._E.HubXpHistorySectionExpanded), p(function(e) {
                                        return !e
                                    })
                                },
                                style: {
                                    gridArea: "overviewcta"
                                },
                                children: [l.hub.points.viewXpEarningHistory, (0, R.tZ)(x.C26, {
                                    height: 16,
                                    width: 16,
                                    className: (0, ee.default)("text-green-200 transition-transform delay-100", {
                                        "rotate-0": !h,
                                        "rotate-180": h
                                    })
                                })]
                            }))
                        }), (0, R.tZ)(eF.Z, {
                            children: (0, R.BX)("div", {
                                className: "flex flex-col gap-6",
                                children: [(0, R.BX)("div", {
                                    className: "flex justify-between w-full",
                                    children: [(0, R.tZ)(j.Z, {
                                        variant: "body1",
                                        className: "text-2xl",
                                        children: l.hub.points.xpEarningHistory
                                    }), (0, R.BX)(x.kHo, {
                                        fullWidth: !1,
                                        onClick: r,
                                        children: [(0, R.tZ)(x.kcj, {
                                            size: 16,
                                            className: "text-white"
                                        }), l.hub.points.download]
                                    })]
                                }), a && (0, R.tZ)(e_, {
                                    userLevel: void 0 === t ? 0 : t,
                                    isUserVerified: i,
                                    xpUserHeatmapData: n
                                }), a && (0, R.tZ)(ez, {})]
                            })
                        })]
                    })
                },
                eQ = function(e) {
                    var t, r, n, i, a, l, o, c, u, p, m = e.numberOfAppsUsed,
                        v = (0, s.AA)().copy,
                        b = (r = (t = (0, h.Os)()).signer, n = t.address, i = A(r), l = (a = (0, d.useState)("-"))[0], o = a[1], u = (c = (0, d.useState)(null))[0], p = c[1], (0, d.useEffect)(function() {
                            n && i && i.getInviteeCount(n).then(function(e) {
                                o(e.toString())
                            })
                        }, [n, i]), (0, f.Uc)({
                            address: n || "",
                            options: {
                                onSuccess: function(e) {
                                    p(X()(e.data.firstTransactionDate).format("MMMM D, YYYY"))
                                },
                                revalidateIfStale: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1,
                                shouldRetryOnError: !1
                            },
                            shouldFetch: !!n
                        }), {
                            inviteeCount: l,
                            firstTransactionDate: u
                        }),
                        x = b.inviteeCount,
                        g = b.firstTransactionDate;
                    return (0, R.BX)("div", {
                        className: "flex flex-col justify-between lg:w-[220px] border border-grey-200 dark:border-grey-600 rounded p-6",
                        children: [(0, R.BX)("div", {
                            children: [(0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-xl font-medium",
                                children: void 0 === m ? "-" : m
                            }), (0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-grey-400",
                                children: v.hub.points.numberOfAppsUsed
                            })]
                        }), (0, R.BX)("div", {
                            children: [(0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-xl font-medium",
                                children: x
                            }), (0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-grey-400",
                                children: v.hub.points.totalInvites
                            })]
                        }), (0, R.BX)("div", {
                            children: [(0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-xl font-medium",
                                children: g || "-"
                            }), (0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-grey-400",
                                children: v.hub.points.firstTransactionDate
                            })]
                        })]
                    })
                };

            function eK(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function e0(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eK(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eK(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var e1 = function(e) {
                    var t = e.userPointsXp,
                        r = e.userLevel,
                        n = void 0 === r ? 0 : r,
                        i = e.isWalletEnrolledBe,
                        a = e.isLoadingAcceptInvite,
                        l = e.handleOpenShareDialog,
                        c = e.xpUserHeatmapData,
                        u = e.isUserVerified,
                        p = e.isOnDifferentChain,
                        f = e.isUserVerifiedError,
                        m = e.isWalletEnrolled,
                        v = e.enrollWallet,
                        b = e.openInviteLinkModal,
                        g = (0, s.AA)().copy,
                        y = (0, s.cK)().isSmallDevice,
                        Z = (0, h.Os)().isConnected,
                        k = (0, d.useMemo)(function() {
                            return (0, V.mq)(n)
                        }, [n]),
                        w = k.icon,
                        C = (0, eA.x)().formattingFn,
                        A = (0, ek.Z)(t);
                    return !Z || p || !1 === i || f ? (0, R.tZ)(S.Zb, {
                        className: "w-full p-0 min-h-[410px] pb-6",
                        style: {
                            gridArea: "overview"
                        },
                        children: (0, R.BX)(ey.E.div, e0(e0({}, (0, o.zW)({
                            delay: .5,
                            y: 0
                        })), {}, {
                            className: "flex flex-col h-full",
                            children: [(0, R.tZ)("div", {
                                className: "flex flex-col px-6 py-6",
                                children: (0, R.tZ)(j.Z, {
                                    variant: "body1",
                                    className: "text-2xl p-0 m-0",
                                    children: g.hub.points.title
                                })
                            }), (0, R.BX)("div", {
                                className: "grid grid-cols-1 md:grid-cols-12 h-full mx-6 rounded-md border dark:border-grey-500 border-grey-200 p-6 gap-4",
                                children: [(0, R.tZ)("div", {
                                    className: "cols-span-1 md:col-span-7 flex justify-center items-center",
                                    children: (0, R.tZ)(eH, {})
                                }), (0, R.BX)(ey.E.div, e0(e0({}, (0, o.zW)({
                                    delay: .5,
                                    y: 0
                                })), {}, {
                                    className: "cols-span-1 md:col-span-5 flex flex-col justify-between",
                                    children: [(0, R.tZ)(j.Z, {
                                        variant: "body1",
                                        className: "text-[14px] p-0 m-0 md:mb-0 mb-4",
                                        children: g.hub.points.enrollDescription1
                                    }), (0, R.tZ)(j.Z, {
                                        variant: "body1",
                                        className: "text-[14px] p-0 m-0 md:mb-0 mb-4",
                                        children: g.hub.points.enrollDescription2
                                    }), (0, R.tZ)(j.Z, {
                                        variant: "body1",
                                        className: "text-[14px] p-0 m-0 md:mb-0 mb-4",
                                        children: g.hub.points.enrollDescription3
                                    }), (0, R.tZ)(eV, {
                                        enrollWallet: v,
                                        isWalletEnrolled: m,
                                        isWalletEnrolledBe: i,
                                        isLoadingAcceptInvite: a,
                                        isOnDifferentChain: p
                                    })]
                                }))]
                            })]
                        }))
                    }) : (0, R.tZ)(S.Zb, {
                        className: "w-full p-8 min-h-[400px] h-fit",
                        style: {
                            gridArea: "overview"
                        },
                        children: (0, R.BX)(R.HY, {
                            children: [(0, R.tZ)(ey.E.div, e0(e0({}, (0, o.zW)({
                                delay: .5,
                                y: 0
                            })), {}, {
                                className: "min-h-[64px]",
                                children: (0, R.BX)("div", {
                                    className: "gap-6 relative flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center mb-4",
                                    children: [(0, R.BX)("div", {
                                        className: "flex items-center gap-2",
                                        children: [(0, R.tZ)(j.Z, {
                                            variant: "body1",
                                            className: "text-2xl",
                                            children: g.hub.points.title
                                        }), !y && (0, R.tZ)(eX.Z, {
                                            title: g.hub.points.titleTooltip,
                                            placement: "top",
                                            children: (0, R.tZ)("span", {
                                                className: "flex-shrink-0 leading-none",
                                                children: (0, R.tZ)(x.VzH, {})
                                            })
                                        })]
                                    }), (0, R.tZ)(eL, {
                                        isWalletEnrolled: m,
                                        openInviteLinkModal: b
                                    })]
                                })
                            })), (0, R.BX)(ey.E.div, e0(e0({}, (0, o.zW)({
                                delay: .5,
                                y: 0
                            })), {}, {
                                className: (0, ee.default)("flex flex-col gap-4", {
                                    "opacity-30 pointer-events-none select-none": !i
                                }),
                                children: [(0, R.BX)("div", {
                                    className: "flex flex-col lg:flex-row justify-between gap-4",
                                    children: [(0, R.BX)("div", {
                                        className: "flex flex-col grow gap-4",
                                        children: [(0, R.BX)("div", {
                                            className: "flex flex-col gap-16 justify-between border border-grey-200 dark:border-grey-600 rounded p-6",
                                            style: {
                                                backgroundColor: k.card.bgColor
                                            },
                                            children: [(0, R.tZ)("div", {
                                                className: "flex justify-between items-end flex-wrap-reverse gap-4",
                                                children: (0, R.BX)("div", {
                                                    className: "flex gap-4 items-start justify-between flex-wrap w-full",
                                                    children: [(0, R.tZ)("div", {
                                                        className: "flex-shrink-0 leading-none",
                                                        children: (0, R.tZ)(w, {
                                                            size: y ? 40 : void 0
                                                        })
                                                    }), (0, R.tZ)("div", {
                                                        children: (0, R.BX)("button", {
                                                            type: "button",
                                                            onClick: l,
                                                            className: "flex gap-1 items-center bg-grey-50 border py-2 px-3 rounded-[100px]",
                                                            style: {
                                                                borderColor: k.shareBtn.borderColor,
                                                                color: k.shareBtn.fontColor
                                                            },
                                                            children: [(0, R.tZ)(x.kcj, {
                                                                size: 16,
                                                                style: {
                                                                    color: k.shareBtn.fontColor
                                                                }
                                                            }), (0, R.tZ)(j.Z, {
                                                                variant: "body2",
                                                                children: g.hub.points.download
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }), (0, R.BX)("div", {
                                                className: "flex flex-col justify-between flex-wrap gap-2",
                                                children: [(0, R.tZ)("div", {
                                                    className: "flex gap-2",
                                                    children: (0, R.tZ)(j.Z, {
                                                        variant: "headline2",
                                                        style: {
                                                            color: k.card.fontColor
                                                        },
                                                        children: (0, R.BX)("div", {
                                                            className: (0, ee.default)("transition-opacity duration-300", {
                                                                "opacity-50": 0 === t
                                                            }),
                                                            children: [(0, R.tZ)(eZ.ZP, {
                                                                end: null != t ? t : 0,
                                                                duration: 1,
                                                                formattingFn: C,
                                                                start: A,
                                                                startVal: A
                                                            }), " ", "XP"]
                                                        })
                                                    })
                                                }), (0, R.tZ)("div", {
                                                    className: "flex gap-1.5 h-fit",
                                                    children: (0, R.tZ)(j.Z, {
                                                        variant: "body1",
                                                        style: {
                                                            color: k.card.fontColor
                                                        },
                                                        children: 0 !== n ? "".concat(g.hub.points.level, " ").concat(n).toUpperCase() : g.hub.points.welcomeToZetaHub
                                                    })
                                                })]
                                            })]
                                        }), (0, R.tZ)(eE, {
                                            userLevel: n
                                        })]
                                    }), !!i && (0, R.tZ)(eQ, {})]
                                }), (0, R.tZ)(eJ, {
                                    handleOpenShareDialog: l,
                                    isUserVerified: u,
                                    xpUserHeatmapData: c,
                                    userLevel: n,
                                    isWalletEnrolled: m
                                })]
                            }))]
                        })
                    })
                },
                e2 = r(88783),
                e4 = r(76946),
                e5 = r.n(e4),
                e8 = r(31358),
                e3 = r(70294),
                e9 = r(78977),
                e7 = r(32496),
                e6 = r(89218),
                te = r.n(e6),
                tt = r(92839),
                tr = function(e) {
                    var t = e.isCompletedTask,
                        r = e.isRefreshPointsLoading,
                        n = e.isUserVerified,
                        i = e.isClientClaimLoading,
                        a = e.featuredTask,
                        l = e.handleClaimRowXpPoints,
                        o = a.canRefreshPoints,
                        c = a.task,
                        d = a.url,
                        u = (0, s.AA)().copy,
                        h = V.xX[c];
                    return o ? (0, R.BX)("button", {
                        type: "button",
                        disabled: !o || r || t || !n,
                        onClick: function() {
                            return l(c)
                        },
                        className: "flex items-center justify-center gap-1 border-t border-grey-200 dark:border-grey-600 w-full p-4",
                        children: [(i === c || r && o && !0 === i) && (0, R.tZ)(eM.Z, {
                            size: 14,
                            className: "text-zeta-orange dark:text-lime-300 mr-1"
                        }), (0, R.tZ)(j.Z, {
                            className: "font-medium text-zeta-orange dark:text-lime-300",
                            children: u.hub.points.claimXp
                        }), (0, R.tZ)(x.pqL, {
                            size: 18,
                            className: "text-zeta-orange dark:text-lime-300"
                        })]
                    }) : t ? (0, R.BX)("div", {
                        className: "flex items-center justify-center gap-1 border-t border-grey-200 dark:border-grey-600 w-full p-4",
                        children: [(0, R.tZ)(j.Z, {
                            className: "font-medium text-grey-300 dark:text-grey-400",
                            children: u.hub.points.xpClaimed
                        }), (0, R.tZ)(x.R$2, {
                            className: "text-grey-300 dark:text-grey-400",
                            size: 20
                        })]
                    }) : d ? (0, R.BX)(tt.V, {
                        className: "flex items-center justify-center gap-2 border-t border-grey-200 dark:border-grey-600 w-full p-4",
                        href: d,
                        children: [(0, R.tZ)(j.Z, {
                            children: u.hub.points.tasks.try
                        }), (0, R.tZ)(x.Q7S, {
                            size: 14,
                            className: "text-grey-600 dark:text-white"
                        })]
                    }) : (0, g.Z)(h) ? (0, R.BX)(te(), {
                        href: h,
                        className: "flex items-center justify-center gap-2 border-t border-grey-200 dark:border-grey-600 w-full p-4",
                        children: [(0, R.tZ)(j.Z, {
                            children: u.hub.points.tasks.try
                        }), (0, R.tZ)(x.VG8, {
                            size: 20,
                            className: "text-grey-600 dark:text-white"
                        })]
                    }) : null
                },
                tn = function(e) {
                    var t, r, n = e.featuredTask,
                        i = e.handleClaimRowXpPoints,
                        a = e.isClientClaimLoading,
                        l = e.isRefreshPointsLoading,
                        o = e.isUserVerified,
                        s = n.status,
                        c = n.xpPoints,
                        d = n.task,
                        u = (0, _.v9)(x.xVq.selectIsDarkMode),
                        h = "Completed" === s,
                        p = null !== (t = V.wi[d]) && void 0 !== t ? t : x.MIg,
                        f = null !== (r = V.hE[d]) && void 0 !== r ? r : "Unknown";
                    return (0, R.BX)("div", {
                        className: "flex flex-col items-center gap-6 w-60 min-w-[240px] border border-grey-200 dark:border-grey-600 rounded-md",
                        children: [(0, R.BX)("div", {
                            className: "flex flex-col items-center gap-6 pt-10 pb-6 px-4",
                            children: [(0, R.BX)("div", {
                                className: "flex flex-col items-center gap-4",
                                children: [(0, R.tZ)(p, {
                                    className: "h-10 w-10 text-grey-600 dark:text-white"
                                }), (0, R.tZ)(j.Z, {
                                    className: "text-center",
                                    children: f
                                })]
                            }), (0, R.tZ)("div", {
                                className: "flex justify-center",
                                children: (0, R.tZ)(e7.Z, {
                                    label: (0, R.BX)(j.Z, {
                                        variant: "caption",
                                        className: (0, ee.default)("flex items-center gap-0.5 dark:text-green-100 font-semibold", {
                                            "text-grey-50": !h,
                                            "text-grey-400 dark:text-grey-300": h
                                        }),
                                        children: [c, " XP", " ", h && (0, R.tZ)(x.NOm, {
                                            className: "text-green-100 dark:text-positive-500",
                                            height: 12,
                                            width: 12
                                        })]
                                    }),
                                    size: "small",
                                    className: (0, ee.default)("bg-green-100 dark:bg-grey-700 dark:border-green-100", {
                                        "bg-grey-50 border-grey-300 dark:border-grey-500": h
                                    }),
                                    variant: u || h ? "outlined" : void 0
                                })
                            })]
                        }), (0, R.tZ)(tr, {
                            isCompletedTask: h,
                            featuredTask: n,
                            handleClaimRowXpPoints: i,
                            isClientClaimLoading: a,
                            isRefreshPointsLoading: l,
                            isUserVerified: o
                        })]
                    })
                },
                ti = function(e) {
                    var t = e.featuredTasks,
                        r = e.handleClaimRowXpPoints,
                        n = e.isClientClaimLoading,
                        i = e.isRefreshPointsLoading,
                        a = e.isUserVerified,
                        l = (0, s.AA)().copy,
                        o = (0, e9.Z)({
                            skipSnaps: !0,
                            align: "center",
                            containScroll: "trimSnaps"
                        }),
                        c = (0, B.Z)(o, 2),
                        u = c[0],
                        h = c[1],
                        p = (0, d.useState)(!1),
                        f = p[0],
                        m = p[1],
                        v = (0, d.useState)(!0),
                        b = v[0],
                        g = v[1],
                        y = (0, d.useCallback)(function() {
                            h && h.scrollPrev()
                        }, [h]),
                        Z = (0, d.useCallback)(function() {
                            h && h.scrollNext()
                        }, [h]);
                    return (0, d.useEffect)(function() {
                        h && h.on("select", function() {
                            m(h.canScrollPrev()), g(h.canScrollNext())
                        })
                    }, [h]), (0, R.BX)("div", {
                        className: "flex flex-col gap-6 px-6 pt-4",
                        children: [(0, R.tZ)(j.Z, {
                            variant: "body1",
                            className: "text-2xl",
                            children: l.hub.points.tasks.featured
                        }), (0, R.tZ)("div", {
                            className: "text-grey-900 overflow-hidden w-full flex-shrink-0 scrollbar-hidden",
                            ref: u,
                            children: (0, R.tZ)("div", {
                                className: "flex gap-4",
                                children: null == t ? void 0 : t.map(function(e) {
                                    return (0, R.tZ)(tn, {
                                        featuredTask: e,
                                        handleClaimRowXpPoints: r,
                                        isClientClaimLoading: n,
                                        isRefreshPointsLoading: i,
                                        isUserVerified: a
                                    }, e.task)
                                })
                            })
                        }), (0, R.BX)("div", {
                            className: "flex justify-center gap-6",
                            children: [(0, R.tZ)("button", {
                                className: "disabled:opacity-20",
                                onClick: y,
                                type: "button",
                                disabled: !f,
                                children: (0, R.tZ)(x.ed9, {
                                    className: "text-black dark:text-white"
                                })
                            }), (0, R.tZ)("button", {
                                className: "disabled:opacity-20",
                                onClick: Z,
                                type: "button",
                                disabled: !b,
                                children: (0, R.tZ)(x.VG8, {
                                    className: "text-black dark:text-white"
                                })
                            })]
                        })]
                    })
                },
                ta = function(e) {
                    var t = e.percentage,
                        r = e.color,
                        n = e.opacity;
                    if (t < 0) return (0, R.tZ)("div", {
                        children: "Invalid percentage"
                    });
                    var i = 2 * Math.PI * 10,
                        a = (100 - t) * i / 100;
                    return (0, R.BX)("svg", {
                        width: "30",
                        height: "30",
                        className: "transform -rotate-25",
                        viewBox: "0 0 30 30",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, R.tZ)("circle", {
                            stroke: "#27272A",
                            fill: "transparent",
                            strokeWidth: "4",
                            strokeDasharray: i,
                            strokeDashoffset: 0,
                            r: 10,
                            cx: "15",
                            cy: "15"
                        }), (0, R.tZ)("circle", {
                            stroke: void 0 === r ? "white" : r,
                            opacity: n,
                            fill: "transparent",
                            strokeWidth: "4",
                            strokeDasharray: i,
                            strokeDashoffset: a,
                            r: 10,
                            cx: "15",
                            cy: "15"
                        })]
                    })
                },
                tl = function(e) {
                    var t, r = e.isUserVerified,
                        n = (0, h.Os)().address,
                        i = (0, d.useState)((t = localStorage.getItem(to)) ? JSON.parse(t) : 0),
                        a = i[0],
                        l = i[1],
                        o = (0, f.uk)({
                            address: null != n ? n : "",
                            shouldFetch: !!n && !!r,
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnMount: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1,
                                dedupingInterval: X().duration(5, "second").asMilliseconds()
                            }
                        }).mutate;
                    return (0, d.useEffect)(function() {
                        var e;
                        return e = setInterval(function() {
                                l(function(e) {
                                    return e >= 100 ? e : e + 3.6
                                })
                            }, X().duration(1, "second").asMilliseconds()),
                            function() {
                                return clearInterval(e)
                            }
                    }, []), (0, d.useEffect)(function() {
                        a >= 100 && (o(), l(0))
                    }, [a, o]), (0, d.useEffect)(function() {
                        localStorage.setItem(to, JSON.stringify(a))
                    }, [a]), (0, R.tZ)(x.ZU, {
                        title: "Updating claims list in: ".concat(a && (null == a ? void 0 : a.toFixed(0)), "%"),
                        children: (0, R.tZ)("div", {
                            className: "cursor-pointer",
                            children: (0, R.tZ)(ta, {
                                percentage: a,
                                color: "#bcbec0",
                                opacity: 100 === a ? .5 : 1
                            })
                        })
                    })
                },
                to = "progressToFetchUserHasXpToRefresh",
                ts = function(e) {
                    var t = e.displayTask,
                        r = e.handleClaimRowXpPoints,
                        n = e.isRefreshPointsLoading,
                        i = e.isClientClaimLoading,
                        a = e.isCompletedTask,
                        l = e.isUserVerified,
                        o = e.isClaimDisabled,
                        c = t.canRefreshPoints,
                        d = t.task,
                        u = t.url,
                        h = (0, s.AA)().copy,
                        p = V.xX[d];
                    return c ? (0, R.BX)("button", {
                        type: "button",
                        disabled: !c || n || a || !l || o,
                        onClick: function() {
                            return r(d)
                        },
                        className: "text-zeta-orange dark:text-lime-300 text-sm disabled:!text-zeta-orange/40 dark:disabled:!text-lime-300/30 disabled:cursor-default flex items-center hover:brightness-110",
                        children: [(i === d || n && c && !0 === i) && (0, R.tZ)(eM.Z, {
                            size: 16,
                            className: ""
                        }), (0, R.BX)("div", {
                            className: "flex items-center gap-2 px-4",
                            children: [(0, R.tZ)("div", {
                                className: "hidden sm:block font-medium",
                                children: c ? h.hub.points.claimXp : h.hub.points.xpClaimed
                            }), (0, R.tZ)(x.pqL, {
                                size: 18,
                                className: ""
                            })]
                        })]
                    }) : a ? (0, R.BX)("div", {
                        className: "flex items-center gap-2 px-4",
                        children: [(0, R.tZ)(j.Z, {
                            className: "hidden sm:block font-medium text-grey-300 dark:text-grey-400",
                            children: h.hub.points.xpClaimed
                        }), (0, R.tZ)(x.R$2, {
                            className: "text-grey-300 dark:text-grey-400",
                            size: 20
                        })]
                    }) : u ? (0, R.BX)(tt.V, {
                        className: "flex items-center gap-2 px-4",
                        href: u,
                        children: [(0, R.tZ)(j.Z, {
                            className: "hidden sm:block",
                            children: h.hub.points.tasks.try
                        }), (0, R.tZ)(x.Q7S, {
                            size: 14,
                            className: "text-grey-600 dark:text-white"
                        })]
                    }) : (0, g.Z)(p) ? (0, R.BX)(te(), {
                        href: p,
                        className: "flex items-center gap-2 px-4",
                        children: [(0, R.tZ)(j.Z, {
                            className: "hidden sm:block ",
                            children: h.hub.points.tasks.try
                        }), (0, R.tZ)(x.VG8, {
                            size: 20,
                            className: "text-grey-600 dark:text-white"
                        })]
                    }) : null
                },
                tc = function(e) {
                    var t, r, n = e.displayTask,
                        i = e.isRefreshPointsLoading,
                        a = e.isClientClaimLoading,
                        l = e.isUserVerified,
                        o = e.handleClaimRowXpPoints,
                        c = e.isClaimDisabled,
                        d = n.canRefreshPoints,
                        u = n.isFeatured,
                        h = n.status,
                        p = n.task,
                        f = n.finalXpPoints,
                        m = n.boostMultiplier,
                        v = (0, s.AA)().copy,
                        b = (0, _.v9)(x.xVq.selectIsDarkMode),
                        g = "Completed" === h,
                        y = null !== (t = V.wi[p]) && void 0 !== t ? t : x.MIg;
                    return (0, R.BX)(ey.E.div, {
                        layout: !0,
                        className: (0, ee.default)("flex justify-between bg-grey-50 dark:bg-grey-700 border border-grey-200 dark:border-grey-500 rounded", {
                            "opacity-50 pointer-events-none": g,
                            "opacity-100 pointer-events-auto": !g,
                            "dark:!border-green-100/20 dark:!bg-green-100/5": d,
                            "!opacity-50": i && d
                        }),
                        children: [(0, R.BX)("div", {
                            className: "flex items-center gap-4 px-6",
                            children: [(0, R.tZ)(y, {
                                className: "h-6 w-6 min-w-[24px] text-grey-600 dark:text-white"
                            }), (0, R.BX)("div", {
                                className: "flex flex-col sm:flex-row gap-2 sm:gap-4 py-6",
                                children: [(0, R.tZ)("div", {
                                    className: "flex items-center gap-4",
                                    children: (0, R.tZ)(j.Z, {
                                        children: null !== (r = null === V.hE || void 0 === V.hE ? void 0 : V.hE[p]) && void 0 !== r ? r : "Unknown"
                                    })
                                }), (0, R.BX)("div", {
                                    className: "flex items-start gap-2 sm:gap-4 w-full sm:w-auto",
                                    children: [u && (0, R.tZ)(e7.Z, {
                                        label: (0, R.tZ)(j.Z, {
                                            variant: "caption",
                                            className: "text-grey-700 dark:text-lime-300 font-semibold",
                                            children: v.hub.points.featured
                                        }),
                                        size: "small",
                                        className: "bg-lime-300 dark:bg-grey-700 dark:border-lime-300",
                                        variant: b ? "outlined" : void 0
                                    }), (0, R.tZ)(e7.Z, {
                                        label: (0, R.BX)(j.Z, {
                                            variant: "caption",
                                            className: (0, ee.default)("flex items-center gap-0.5 dark:text-green-100 font-semibold", {
                                                "text-grey-50": !g,
                                                "text-grey-400 dark:text-grey-300": g
                                            }),
                                            children: [f, " XP", " ", g && (0, R.tZ)(x.NOm, {
                                                className: "text-green-100 dark:text-positive-500",
                                                height: 12,
                                                width: 12
                                            })]
                                        }),
                                        size: "small",
                                        className: (0, ee.default)("bg-green-100 dark:bg-grey-700 dark:border-green-100", {
                                            "bg-grey-50 border-grey-300 dark:border-grey-500": g
                                        }),
                                        variant: b || g ? "outlined" : void 0
                                    }), m && 1 !== m && (0, R.tZ)(e7.Z, {
                                        label: (0, R.BX)(j.Z, {
                                            variant: "caption",
                                            className: (0, ee.default)("flex items-center font-semibold", {
                                                "text-zeta-orange": !0
                                            }),
                                            children: [(0, R.tZ)(x.kLi, {
                                                className: "w-2 h-2 mr-0.5"
                                            }), " ", m]
                                        }),
                                        size: "small",
                                        className: (0, ee.default)("bg-green-100 dark:bg-grey-700 dark:border-zeta-orange border-zeta-orange", {
                                            "bg-grey-50": g
                                        }),
                                        variant: b || g ? "outlined" : void 0
                                    })]
                                })]
                            })]
                        }), (0, R.tZ)(ts, {
                            displayTask: n,
                            handleClaimRowXpPoints: o,
                            isClientClaimLoading: a,
                            isCompletedTask: g,
                            isRefreshPointsLoading: i,
                            isUserVerified: l,
                            isClaimDisabled: c
                        })]
                    })
                },
                td = function(e) {
                    var t = e.currentEpochEndingDate,
                        r = (0, s.AA)().copy,
                        n = (0, d.useState)(X()(t).diff(X()(), "seconds")),
                        i = n[0],
                        a = n[1];
                    (0, d.useEffect)(function() {
                        var e = setInterval(function() {
                            a(X()(t).diff(X()(), "seconds"))
                        }, 1e3);
                        return function() {
                            return clearInterval(e)
                        }
                    }, [t]);
                    var l = (0, d.useMemo)(function() {
                            return X()(t).fromNow()
                        }, [i]).match(/in (a few|\d+|a|an) (\w+)/),
                        o = (0, B.Z)(l || [], 3),
                        c = o[1],
                        u = o[2];
                    return i <= 0 ? (0, R.tZ)("div", {
                        className: "bg-grey-100 dark:bg-grey-700 px-2 sm:px-4 py-2 rounded-full text-nowrap",
                        children: (0, R.BX)(j.Z, {
                            variant: "body1",
                            className: "flex items-center text-xs sm:text-sm",
                            children: [(0, R.tZ)(eM.Z, {
                                size: 16,
                                className: "mr-2"
                            }), r.hub.points.tasks.refreshing]
                        })
                    }) : (0, R.tZ)("div", {
                        className: "bg-grey-100 dark:bg-grey-700 px-2 sm:px-4 py-2 rounded-full text-nowrap",
                        children: (0, R.BX)(j.Z, {
                            variant: "body1",
                            className: "text-xs sm:text-sm",
                            children: [r.hub.points.tasks.refreshIn, (0, R.tZ)("span", {
                                className: "mx-1 text-xs sm:text-sm text-green-300",
                                children: String("a" === c || "an" === c ? 1 : c).padStart(2, "0")
                            }), u]
                        })
                    })
                },
                tu = function() {
                    return (0, _.v9)(x.xVq.selectIsDarkMode) ? (0, R.BX)("svg", {
                        width: "33",
                        height: "25",
                        viewBox: "0 0 33 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, R.tZ)("path", {
                            d: "M0 1.5C0 0.947715 0.447715 0.5 1 0.5H32C32.5523 0.5 33 0.947715 33 1.5V5.5C33 6.05228 32.5523 6.5 32 6.5H0.999999C0.447714 6.5 0 6.05228 0 5.5V1.5Z",
                            fill: "#3C4146"
                        }), (0, R.tZ)("path", {
                            d: "M0 10.5C0 9.94772 0.447715 9.5 1 9.5H32C32.5523 9.5 33 9.94772 33 10.5V14.5C33 15.0523 32.5523 15.5 32 15.5H0.999999C0.447714 15.5 0 15.0523 0 14.5V10.5Z",
                            fill: "#3C4146"
                        }), (0, R.tZ)("path", {
                            d: "M0 19.5C0 18.9477 0.447715 18.5 1 18.5H32C32.5523 18.5 33 18.9477 33 19.5V23.5C33 24.0523 32.5523 24.5 32 24.5H0.999999C0.447714 24.5 0 24.0523 0 23.5V19.5Z",
                            fill: "#3C4146"
                        }), (0, R.tZ)("rect", {
                            x: "28",
                            y: "11.5",
                            width: "4",
                            height: "2",
                            rx: "1",
                            fill: "#15191E"
                        }), (0, R.tZ)("rect", {
                            x: "28",
                            y: "2.5",
                            width: "4",
                            height: "2",
                            rx: "1",
                            fill: "#15191E"
                        }), (0, R.tZ)("rect", {
                            x: "28",
                            y: "20.5",
                            width: "4",
                            height: "2",
                            rx: "1",
                            fill: "#15191E"
                        })]
                    }) : (0, R.BX)("svg", {
                        width: "33",
                        height: "25",
                        viewBox: "0 0 33 25",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, R.tZ)("path", {
                            d: "M0 1.5C0 0.947715 0.447715 0.5 1 0.5H32C32.5523 0.5 33 0.947715 33 1.5V5.5C33 6.05228 32.5523 6.5 32 6.5H0.999999C0.447714 6.5 0 6.05228 0 5.5V1.5Z",
                            fill: "#A9ACB0",
                            fillOpacity: "0.6"
                        }), (0, R.tZ)("path", {
                            d: "M0 10.5C0 9.94772 0.447715 9.5 1 9.5H32C32.5523 9.5 33 9.94772 33 10.5V14.5C33 15.0523 32.5523 15.5 32 15.5H0.999999C0.447714 15.5 0 15.0523 0 14.5V10.5Z",
                            fill: "#A9ACB0",
                            fillOpacity: "0.6"
                        }), (0, R.tZ)("path", {
                            d: "M0 19.5C0 18.9477 0.447715 18.5 1 18.5H32C32.5523 18.5 33 18.9477 33 19.5V23.5C33 24.0523 32.5523 24.5 32 24.5H0.999999C0.447714 24.5 0 24.0523 0 23.5V19.5Z",
                            fill: "#A9ACB0",
                            fillOpacity: "0.6"
                        }), (0, R.tZ)("rect", {
                            x: "28",
                            y: "11.5",
                            width: "4",
                            height: "2",
                            rx: "1",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "28",
                            y: "2.5",
                            width: "4",
                            height: "2",
                            rx: "1",
                            fill: "white"
                        }), (0, R.tZ)("rect", {
                            x: "28",
                            y: "20.5",
                            width: "4",
                            height: "2",
                            rx: "1",
                            fill: "white"
                        })]
                    })
                };

            function th(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tp(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? th(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : th(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tf = function(e) {
                    var t = e.text,
                        r = e.isSectionGreyedOut,
                        n = (0, s.AA)().copy;
                    return (0, R.tZ)(S.Zb, {
                        className: (0, ee.default)("dark:bg-grey-800 bg-white px-0 py-0 pb-0 overflow-hidden", {
                            "opacity-50": r
                        }),
                        style: {
                            gridArea: "tasks"
                        },
                        children: (0, R.BX)(ey.E.div, tp(tp({}, (0, o.zW)({
                            delay: .5,
                            y: 0
                        })), {}, {
                            className: (0, ee.default)("relative flex flex-col", {}),
                            children: [(0, R.tZ)("div", {
                                className: "flex justify-between w-full flex-wrap py-6 px-6 border-b dark:border-grey-600 border-grey-200",
                                children: (0, R.tZ)(j.Z, {
                                    variant: "body1",
                                    className: "text-2xl",
                                    children: n.hub.points.tasks.title
                                })
                            }), (0, R.tZ)("div", {
                                className: "flex items-center justify-center h-[350px]",
                                children: (0, R.BX)("div", {
                                    className: "flex items-center flex-col",
                                    children: [(0, R.tZ)(tu, {}), (0, R.tZ)(j.Z, {
                                        variant: "body1",
                                        className: "text-center mt-6 text-grey-300",
                                        children: t
                                    })]
                                })
                            })]
                        }))
                    })
                },
                tm = r(64691),
                tv = function(e) {
                    var t = e.appliedFilter,
                        r = e.isLoading,
                        n = (0, s.AA)().copy;
                    return r ? (0, R.BX)("div", {
                        className: "space-y-4",
                        children: [(0, R.tZ)(tm.Z, {
                            variant: "rectangular",
                            className: "w-full h-20 rounded-[3px]"
                        }), (0, R.tZ)(tm.Z, {
                            variant: "rectangular",
                            className: "w-full h-20 rounded-[3px]"
                        }), (0, R.tZ)(tm.Z, {
                            variant: "rectangular",
                            className: "w-full h-20 rounded-[3px]"
                        }), (0, R.tZ)(tm.Z, {
                            variant: "rectangular",
                            className: "w-full h-20 rounded-[3px]"
                        }), (0, R.tZ)(tm.Z, {
                            variant: "rectangular",
                            className: "w-full h-20 rounded-[3px]"
                        }), (0, R.tZ)(tm.Z, {
                            variant: "rectangular",
                            className: "w-full h-20 rounded-[3px]"
                        })]
                    }) : "Completed" === t ? (0, R.tZ)("div", {
                        children: (0, R.BX)("div", {
                            className: "flex flex-col items-center justify-center gap-1 h-60",
                            children: [(0, R.tZ)(x.Iyw, {}), (0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-center text-grey-400 dark:text-grey-300",
                                children: n.hub.points.emptyState.noCompletedTasks
                            })]
                        })
                    }) : "To do" === t ? (0, R.tZ)("div", {
                        children: (0, R.BX)("div", {
                            className: "flex flex-col items-center justify-center gap-1 h-60",
                            children: [(0, R.tZ)(x.Iyw, {}), (0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-center text-grey-400 dark:text-grey-300",
                                children: n.hub.points.emptyState.noPendingTasks
                            })]
                        })
                    }) : (0, R.tZ)("div", {
                        children: (0, R.BX)("div", {
                            className: "flex flex-col items-center justify-center gap-1 h-60",
                            children: [(0, R.tZ)(x.Iyw, {}), (0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "text-center text-grey-400 dark:text-grey-300",
                                children: n.hub.points.emptyState.noActivities
                            })]
                        })
                    })
                };

            function tb(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tx(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tb(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tb(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            X().extend(e5());
            var tg = ["All", "Completed", "To do"],
                ty = {
                    value: {
                        content: "Claim XP"
                    },
                    types: {
                        Message: [{
                            name: "content",
                            type: "string"
                        }]
                    },
                    domain: {
                        name: "Hub/XP",
                        version: "1",
                        chainId: p.N2.chainId
                    }
                },
                tZ = (0, en.Z)(S.Zb, {
                    target: "e18bx50m0"
                })("gap:1.5rem;overflow:hidden;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:1.5rem;padding-bottom:0px;padding-left:0px;padding-right:0px;.dark &{--tw-bg-opacity:1;background-color:rgb(21 25 30 / var(--tw-bg-opacity));} ", function(e) {
                    return e.$isSectionGreyedOut && {
                        pointerEvents: "none",
                        opacity: "0.5"
                    }
                }, " button{", function(e) {
                    return e.$isSectionGreyedOut && {
                        cursor: "default"
                    }
                }, ";}"),
                tk = function(e) {
                    var t, r = e.tasks,
                        i = e.userPoints,
                        a = e.userHasXpToRefreshStatus,
                        l = e.isLoadingUserHasXpToRefresh,
                        u = e.isUserVerified,
                        p = e.epochSSR,
                        v = e.isSectionGreyedOut,
                        g = (0, s.AA)().copy,
                        y = (0, k.Ds)(),
                        Z = y.enqueueSnackbar,
                        w = y.closeSnackbar,
                        C = (0, h.Os)().address,
                        A = {
                            shouldDisableHubClientClaimXp: (0, e3.Vb)().shouldDisableHubClientClaimXp
                        }.shouldDisableHubClientClaimXp,
                        N = (0, _.v9)(x.xVq.selectIsDarkMode),
                        O = (0, d.useState)("All"),
                        B = O[0],
                        D = O[1],
                        L = (0, d.useState)(!1),
                        E = L[0],
                        H = L[1],
                        M = !!E,
                        P = (0, f.uh)({
                            address: null != C ? C : "",
                            shouldFetch: !!C && !!u,
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }).mutate,
                        S = (0, f.xe)({
                            shouldFetch: !0,
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }).mutate,
                        I = (0, f.R9)({
                            address: null != C ? C : "",
                            shouldFetch: !!C && !!u,
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }).mutate,
                        F = (0, f.uk)({
                            address: null != C ? C : "",
                            shouldFetch: !!C && !!u,
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1,
                                revalidateOnMount: !1
                            }
                        }).mutate,
                        T = (0, f.QS)({
                            address: null != C ? C : "",
                            page: "1",
                            shouldFetch: !!C && !!u,
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }).mutate,
                        z = (0, f.kq)({
                            shouldFetch: !!C && !!u,
                            options: {
                                fallbackData: {
                                    epoch: p
                                },
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }).data;
                    (0, d.useEffect)(function() {
                        z && a && a.epochId !== z.epochId && F()
                    }, [z, F, a]);
                    var U = (null == z ? void 0 : z.currentEpochEndingDate) || (null == p ? void 0 : p.currentEpochEndingDate),
                        W = (0, d.useState)([]),
                        Y = W[0],
                        G = W[1],
                        q = null == Y ? void 0 : Y.filter(function(e) {
                            return e.isFeatured
                        });
                    (0, ec.Z)(function() {
                        var e = Object.keys(r.xpByTask || []).reduce(function(e, t) {
                            var n, l, o, s, c, d, h, p, f = r.xpByTask[t],
                                m = r.boosts[t],
                                v = null !== (n = null == m ? void 0 : m.multiplier) && void 0 !== n ? n : 1,
                                b = f.xp * v,
                                x = null !== (l = null == a || null === (o = a.xpRefreshTrackingByTask) || void 0 === o || null === (o = o[t]) || void 0 === o ? void 0 : o.hasXpToRefresh) && void 0 !== l && l,
                                g = null == i || !i.pointsInEpoch || null !== (s = i.pointsInEpoch[t]) && void 0 !== s && s.canEarnPointsInEpoch || x ? "To do" : "Completed",
                                y = null !== (c = null === (d = r.featuredTaskNames) || void 0 === d ? void 0 : d.includes(t)) && void 0 !== c && c,
                                Z = tx(tx({}, f), {}, {
                                    address: C,
                                    task: t,
                                    xpPoints: f.xp,
                                    finalXpPoints: b,
                                    isFeatured: y,
                                    isUserVerified: u,
                                    canRefreshPoints: x,
                                    status: g,
                                    boostMultiplier: v,
                                    url: ""
                                });
                            return ((null == a || null === (h = a.xpRefreshTrackingByTask) || void 0 === h || null === (h = h.WALLET_VERIFY_BY_INVITE) || void 0 === h ? void 0 : h.hasXpToRefresh) || (null == a || null === (p = a.xpRefreshTrackingByTask) || void 0 === p || null === (p = p.WALLET_VERIFY_BY_INVITE) || void 0 === p ? void 0 : p.hasAlreadyEarned) || !1 === u || "WALLET_VERIFY_BY_INVITE" !== t) && e.push(Z), e
                        }, []).filter(function(e) {
                            if ("All" === B) {
                                var t = "Completed" === e.status;
                                return !("WALLET_VERIFY" === e.task && t)
                            }
                            return e.status === B
                        });
                        G((0, eW.Z)((0, eW.Z)(e, function(e) {
                            return "To do" === e.status ? 0 : 1
                        }, "isFeatured"), function(e) {
                            return !(null != e && e.canRefreshPoints)
                        }))
                    }, [C, B, u, r, a, i]);
                    var $ = (0, d.useMemo)(function() {
                            return !C || !1 === u || M || "number" == typeof(null == a ? void 0 : a.totalAmountToRefresh) && (null == a ? void 0 : a.totalAmountToRefresh) <= 0 || !(null != a && a.totalAmountToRefresh) || A
                        }, [C, u, M, null == a ? void 0 : a.totalAmountToRefresh, A]),
                        J = (0, e8.yw)().signTypedDataAsync,
                        Q = (0, d.useCallback)((t = (0, m.Z)(b().mark(function e(t) {
                            var r, i, a, l;
                            return b().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return H(t), i = null !== (r = V.hE[t]) && void 0 !== r ? r : "Unknown", (0, c.L9)(c._E.HubXpClaimSingleTaskPointsButtonClicked, (0, n.Z)({}, c.gp.TaskName, i)), e.prev = 3, e.prev = 4, e.next = 7, J(ty);
                                    case 7:
                                        a = e.sent, e.next = 13;
                                        break;
                                    case 10:
                                        throw e.prev = 10, e.t0 = e.catch(4), Error("User rejected the claim XP request");
                                    case 13:
                                        return e.next = 15, f.Wp.claimXpForTask(null != C ? C : "", t, a);
                                    case 15:
                                        return e.next = 17, Promise.all([I(), F(), S(), P(), T()]);
                                    case 17:
                                        H(!1), e.next = 25;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t1 = e.catch(3), console.error(e.t1), Z((null === e.t1 || void 0 === e.t1 || null === (l = e.t1.response) || void 0 === l || null === (l = l.data) || void 0 === l ? void 0 : l.message) || (null === e.t1 || void 0 === e.t1 ? void 0 : e.t1.message) || "Something went wrong, please try again", {
                                            variant: "info",
                                            action: function(e) {
                                                return (0, R.tZ)(e2.Z, {
                                                    className: "border border-grey-300 text-white px-4 py-2 rounded-md font-semibold",
                                                    onClick: function() {
                                                        w(e)
                                                    },
                                                    children: g.hub.snackBar.dismiss
                                                })
                                            }
                                        }), H(!1);
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 20],
                                [4, 10]
                            ])
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [C, w, g.hub.snackBar.dismiss, Z, S, I, T, P, F, J]);
                    return !u || A ? (0, R.tZ)(tf, {
                        text: A ? g.hub.points.claimXpDisabled : g.hub.points.enrollCTA,
                        isSectionGreyedOut: v
                    }) : (0, R.tZ)(tZ, {
                        style: {
                            gridArea: "tasks"
                        },
                        className: "p-0 pt-6",
                        $isSectionGreyedOut: v,
                        children: (0, R.BX)(ey.E.div, tx(tx({}, (0, o.zW)({
                            delay: .5,
                            y: 0
                        })), {}, {
                            className: (0, ee.default)("relative flex flex-col gap-6", {
                                "!opacity-30 !pointer-events-none !select-none": !u || X()().isAfter(U)
                            }),
                            children: [(0, R.BX)("div", {
                                className: "flex flex-col sm:flex-row justify-between w-full gap-4 px-6",
                                children: [(0, R.BX)("div", {
                                    className: "flex items-center gap-4 flex-wrap",
                                    children: [(0, R.tZ)(j.Z, {
                                        variant: "body1",
                                        className: "text-xl sm:text-2xl",
                                        children: g.hub.points.tasks.title
                                    }), U && (0, R.tZ)(td, {
                                        currentEpochEndingDate: U
                                    })]
                                }), (0, R.BX)("div", {
                                    className: "flex flex-wrap gap-4 sm:justify-end items-center",
                                    children: [(0, R.tZ)(tl, {
                                        isUserVerified: u
                                    }), (0, R.tZ)(x.m6y, {
                                        openBtnCopy: "".concat(g.hub.points.viewing, " ").concat(B, " "),
                                        popoverId: "xp-tasks-filter",
                                        children: (0, R.tZ)("div", {
                                            className: "flex flex-col items-start",
                                            children: tg.map(function(e) {
                                                var t = B === e;
                                                return (0, R.BX)("button", {
                                                    type: "button",
                                                    className: "flex items-center gap-2 px-4 py-2 w-full bg-grey-50 dark:bg-grey-500",
                                                    onClick: function() {
                                                        D(e)
                                                    },
                                                    children: [(0, R.tZ)("div", {
                                                        className: "min-w-[14px]",
                                                        children: t && (0, R.tZ)(x.NOm, {
                                                            size: 14,
                                                            className: "text-grey-900 dark:text-grey-50"
                                                        })
                                                    }), (0, R.tZ)(j.Z, {
                                                        className: "text-xs",
                                                        children: e
                                                    })]
                                                }, e)
                                            })
                                        })
                                    })]
                                })]
                            }), (0, R.tZ)(j.Z, {
                                variant: "body1",
                                className: "px-6",
                                children: g.hub.points.tasks.description
                            }), !!(null == q ? void 0 : q.length) && (0, R.tZ)(ti, {
                                featuredTasks: q,
                                handleClaimRowXpPoints: Q,
                                isClientClaimLoading: E,
                                isRefreshPointsLoading: M,
                                isUserVerified: u
                            }), (0, R.BX)("div", {
                                className: (0, ee.default)("flex flex-col gap-4 max-h-[35vh] min-h-[400px] overflow-y-scroll will-change-scroll pl-6 pr-2 mr-2 relative pb-14", {
                                    "!overflow-hidden mr-4": !u || v
                                }),
                                children: [null == Y ? void 0 : Y.map(function(e) {
                                    return (0, R.tZ)(tc, {
                                        displayTask: e,
                                        handleClaimRowXpPoints: Q,
                                        isClientClaimLoading: E,
                                        isRefreshPointsLoading: M,
                                        isUserVerified: u,
                                        isClaimDisabled: $
                                    }, e.task)
                                }), (null == Y ? void 0 : Y.length) === 0 && (0, R.tZ)(tv, {
                                    isLoading: l,
                                    appliedFilter: B
                                })]
                            }), (0, R.tZ)("div", {
                                className: "w-full h-[64px] absolute left-0 bottom-0 pointer-events-none translate-y-2 z-0",
                                style: {
                                    background: N ? "linear-gradient(180deg, rgba(21, 25, 30, 0.00) 0%, #111419 110%)" : "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)"
                                }
                            })]
                        }))
                    })
                },
                tw = r(87749),
                tC = r(95645),
                tA = function(e) {
                    var t, r, n, i, a, l, o = e.isShareDialogOpen,
                        u = e.setIsShareDialogOpen,
                        h = e.userPoints,
                        p = e.userLevel,
                        f = e.xpUserHeatmapData,
                        m = (0, s.AA)().copy,
                        v = (0, _.v9)(x.xVq.selectIsDarkMode),
                        b = (0, d.useState)(null)[1],
                        g = function() {
                            var e = document.getElementById("my-node");
                            (0, c.L9)(c._E.HubXpActivityDownloadImageButtonClicked), tw.YM(e).then(function(e) {
                                new Image().src = e;
                                var t = document.createElement("a");
                                t.download = "activity.png", t.href = e, document.body.appendChild(t), t.click(), document.body.removeChild(t), b(encodeURIComponent(e))
                            })
                        },
                        y = (0, V.mq)(p),
                        Z = y.icon,
                        k = eY(f);
                    return (0, R.BX)(x.QAJ, {
                        open: o,
                        onClose: function() {
                            u(!1)
                        },
                        withCloseButton: !1,
                        children: [(0, R.BX)("div", {
                            className: "mb-10 flex items-center justify-between",
                            children: [(0, R.tZ)("h1", {
                                className: "text-2xl",
                                children: m.hub.points.downloadYourAchievement
                            }), (0, R.tZ)("div", {
                                children: (0, R.tZ)("button", {
                                    type: "button",
                                    className: "dark:text-white outline-none",
                                    onClick: function() {
                                        g()
                                    },
                                    children: (0, R.tZ)(x.kcj, {
                                        className: "w-6 h-6"
                                    })
                                })
                            })]
                        }), (0, R.BX)("div", {
                            id: "my-node",
                            className: (0, ee.default)("w-fit dark:bg-grey-700 bg-grey-200/50 border border-grey-700 h-fit pt-4 px-6 pb-10 rounded-lg relative pointer-events-none", {
                                "!border-grey-300/50": !v
                            }),
                            children: [(0, R.BX)("div", {
                                className: (0, ee.default)("flex items-center justify-between mb-5 border-b border-grey-700 pb-4", {
                                    "!border-grey-300": !v
                                }),
                                children: [(0, R.BX)("div", {
                                    className: "flex items-center",
                                    children: [(0, R.tZ)(Z, {}), (0, R.BX)("div", {
                                        className: "flex flex-col ml-4 pt-2.5",
                                        children: [(0, tC.Z)(null == h ? void 0 : h.level) && (0, R.BX)("div", {
                                            style: {
                                                color: y.card.bgColor
                                            },
                                            children: [(0, R.BX)("span", {
                                                className: "text-left",
                                                style: {
                                                    color: y.card.bgColor,
                                                    filter: "brightness(0.6)"
                                                },
                                                children: [m.hub.points.level.toUpperCase(), " ", null == h ? void 0 : h.level, " "]
                                            }), (0, R.BX)("span", {
                                                className: "text-left",
                                                style: {
                                                    color: y.card.bgColor,
                                                    filter: "brightness(0.6)"
                                                },
                                                children: ["#", null !== (t = null == h ? void 0 : h.rank) && void 0 !== t ? t : 0]
                                            })]
                                        }), (0, R.BX)("div", {
                                            children: [null !== (r = null == h ? void 0 : h.totalXp) && void 0 !== r ? r : 0, " XP"]
                                        }), (0, R.tZ)("div", {
                                            className: "text-[9px] text-grey-400",
                                            children: X()().format("DD/MM - YYYY")
                                        })]
                                    })]
                                }), (0, R.tZ)(x.NpN, {
                                    className: "mt-2.5",
                                    style: {
                                        color: y.card.bgColor
                                    }
                                })]
                            }), (0, R.tZ)(eU.ZP, {
                                data: k,
                                labels: {
                                    legend: {
                                        less: "Less",
                                        more: "More"
                                    },
                                    totalCount: "Completed tasks: ".concat(null !== (n = null === (i = Object.values((null == f ? void 0 : f.heatmap) || {})) || void 0 === i ? void 0 : i.reduce(function(e, t) {
                                        return e + t.completedTasks
                                    }, 0)) && void 0 !== n ? n : 0)
                                },
                                colorScheme: v ? "dark" : "light",
                                theme: {
                                    dark: [eC()("#1F2328").mix(y.card.bgColor || "#A9ACB0", .02).hex(), eC()(y.card.bgColor || "#A9ACB0").darken(2).hex(), eC()(y.card.bgColor || "#A9ACB0").darken(1.5).hex(), eC()(y.card.bgColor || "#A9ACB0").darken(.5).hex(), eC()(y.card.bgColor || "#A9ACB0").brighten(.5).hex()],
                                    light: [eC()("#A9ACB0").mix(y.card.bgColor || "#A9ACB0", .02).brighten(.7).hex(), eC()(y.card.bgColor || "#A9ACB0").darken(2).hex(), eC()(y.card.bgColor || "#A9ACB0").darken(1.5).hex(), eC()(y.card.bgColor || "#A9ACB0").darken(.5).hex(), eC()(y.card.bgColor || "#A9ACB0").brighten(.5).hex()]
                                },
                                totalCount: null !== (a = null === (l = Object.values((null == f ? void 0 : f.heatmap) || {})) || void 0 === l ? void 0 : l.reduce(function(e, t) {
                                    return e + t.completedTasks
                                }, 0)) && void 0 !== a ? a : 0,
                                renderBlock: function(e, t) {
                                    return (0, R.tZ)(eX.Z, {
                                        title: "".concat(t.count, " tasks completed in epoch"),
                                        children: e
                                    })
                                }
                            }), (0, R.tZ)("div", {
                                className: "text-xs text-grey-500 absolute right-4 -bottom-0 flex items-center",
                                children: (0, R.tZ)(x.aHf, {
                                    className: "w-20 h-10 text-grey-500"
                                })
                            })]
                        })]
                    })
                };

            function tN(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var tO = function(e) {
                    var t, r, v, w, C, D, P, j, S, V, I, F, T, U, W, Y, _, G, q, $, J, K, ee, et, er, en, ei, ea, el, eo, es, ec, ed, eu, eh, ep, ef, em, ev, eb, ey, eZ, ek, ew, eC, eA, eN, eO, eB, eX, eL, eE, eH, eM, eP, ej, eS, eV, eR, eI, eF, eT = e.epochSSR,
                        ez = e.leaderboardSSR,
                        eU = e.tasksSRR,
                        eW = (0, h.Os)(),
                        eY = eW.address,
                        e_ = eW.chainId,
                        eG = eW.isConnected,
                        eq = (0, s.AA)().copy,
                        e$ = (0, s.cK)().isMobile,
                        eJ = e_ === Number(p.N2.chainId),
                        eQ = eG && !eJ,
                        eK = (0, f.RP)({
                            address: null != eY ? eY : "",
                            shouldFetch: !!eY,
                            options: {
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1,
                                shouldRetryOnError: !1
                            }
                        }),
                        e0 = eK.data,
                        e2 = eK.mutate,
                        e4 = eK.error,
                        e5 = (0, f.Z4)({
                            shouldFetch: !!eY && !!(null != e0 && e0.isUserVerified),
                            options: {
                                fallbackData: {
                                    tasks: eU
                                },
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }),
                        e8 = e5.data,
                        e3 = e5.mutate,
                        e9 = (0, f.xe)({
                            options: {
                                fallbackData: ez,
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }),
                        e7 = e9.data,
                        e6 = e9.mutate,
                        te = (0, f.j)({
                            address: null != eY ? eY : "",
                            shouldFetch: !!eY && !!(null != e0 && e0.isUserVerified),
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }),
                        tt = te.data,
                        tr = te.mutate,
                        tn = (0, f.uh)({
                            address: null != eY ? eY : "",
                            shouldFetch: !!eY && !!(null != e0 && e0.isUserVerified),
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }).data,
                        ti = (0, f.uk)({
                            address: null != eY ? eY : "",
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnMount: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            },
                            shouldFetch: !!eY && !!(null != e0 && e0.isUserVerified)
                        }),
                        ta = ti.data,
                        tl = ti.isLoading;
                    z({
                        address: null != eY ? eY : "",
                        data: ta,
                        error: ti.error
                    });
                    var to = (0, f.R9)({
                            address: null != eY ? eY : "",
                            shouldFetch: !!eY && !!(null != e0 && e0.isUserVerified),
                            options: {
                                shouldRetryOnError: !1,
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1
                            }
                        }),
                        ts = to.data,
                        tc = to.mutate,
                        td = to.error;
                    (0, u.Z)(function() {
                        window.location.reload()
                    }, [eY, e6, e3, tc, tr, e2]);
                    var tu = (t = ({
                            isWalletDBEnrolled: !!(null == e0 ? void 0 : e0.isUserVerified)
                        }).isWalletDBEnrolled, v = (r = (0, h.Os)()).signer, w = r.address, C = A(v), D = (0, s.AA)().copy, P = (0, k.Ds)().enqueueSnackbar, j = (0, Z.useRouter)(), V = (S = (0, d.useState)(t))[0], I = S[1], (0, d.useEffect)(function() {
                            if (w) {
                                if (t) {
                                    I(!0);
                                    return
                                }
                                C && C.hasBeenVerified(w).then(function(e) {
                                    I(e)
                                })
                            }
                        }, [w, C, t, j.asPath]), {
                            enrollWallet: (0, d.useCallback)((0, m.Z)(b().mark(function e() {
                                var t, r;
                                return b().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(!w || !v || !C)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 2:
                                            return e.prev = 2, e.next = 5, C.markAsVerified();
                                        case 5:
                                            return t = e.sent, P(D.hub.points.walletEnrollmentLoading, {
                                                variant: "info",
                                                autoHideDuration: x.k$9,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right"
                                                }
                                            }), e.next = 9, t.wait();
                                        case 9:
                                            return e.next = 11, C.hasBeenVerified(w);
                                        case 11:
                                            if (r = e.sent) {
                                                e.next = 14;
                                                break
                                            }
                                            throw Error("[useVerifyAccount]: Something went wrong verifying your account");
                                        case 14:
                                            return e.prev = 14, e.next = 17, f.Wp.enrollInZetaXp(w);
                                        case 17:
                                            if (e.sent.data.isUserVerified) {
                                                e.next = 21;
                                                break
                                            }
                                            throw Error("Something went wrong verifying your account");
                                        case 21:
                                            return I(r), P(D.hub.points.walletEnrollmentConfirmation, {
                                                variant: "success",
                                                autoHideDuration: x.k$9,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right"
                                                }
                                            }), e.abrupt("return", !0);
                                        case 26:
                                            e.prev = 26, e.t0 = e.catch(14), console.error(e.t0), P(D.hub.points.walletEnrollmentError, {
                                                variant: "error",
                                                autoHideDuration: x.k$9,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right"
                                                }
                                            });
                                        case 30:
                                            e.next = 36;
                                            break;
                                        case 32:
                                            e.prev = 32, e.t1 = e.catch(2), console.error(e.t1), P(D.hub.points.walletEnrollmentError, {
                                                variant: "error",
                                                autoHideDuration: x.k$9,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right"
                                                }
                                            });
                                        case 36:
                                            return e.abrupt("return", !1);
                                        case 37:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [2, 32],
                                    [14, 26]
                                ])
                            })), [w, v, C, P, D.hub.points]),
                            isWalletEnrolled: V
                        }),
                        th = tu.isWalletEnrolled,
                        tp = tu.enrollWallet,
                        tm = null == e0 ? void 0 : e0.isUserVerified,
                        tv = !th || !tm || !eG || eQ,
                        tb = (T = (F = (0, N.O)()).address, W = A(U = F.signer), Y = (0, s.AA)().copy, _ = (0, k.Ds)().enqueueSnackbar, G = (0, Z.useRouter)(), $ = (q = (0, d.useState)(!1))[0], J = q[1], K = G.query.code, et = (ee = (0, d.useState)(!1))[0], er = ee[1], ei = (en = (0, d.useState)(!1))[0], ea = en[1], el = (0, d.useMemo)(function() {
                            try {
                                if ((0, g.Z)(K)) return (0, c._N)(K);
                                return ""
                            } catch (e) {
                                return ea(!0), ""
                            }
                        }, [K]), eo = (0, c._x)(el), ec = null != (es = O.safeParse(eo)) && !!es.success && null != es && !!es.data && !!T && es.data.address === T, ed = (0, f.RP)({
                            address: null != T ? T : "",
                            shouldFetch: !!T,
                            options: {
                                revalidateOnFocus: !1,
                                revalidateOnReconnect: !1,
                                shouldRetryOnError: !1
                            }
                        }).mutate, eu = (null == es ? void 0 : es.success) && th, eh = !es.success || !T || !U || !W || ec || (0, y.Z)(th) || th, (0, d.useEffect)(function() {
                            ei && (ea(!1), _(Y.hub.points.consumeInviteLinkError, {
                                variant: "error",
                                autoHideDuration: x.k$9,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "right"
                                }
                            }))
                        }, [Y.hub.points.consumeInviteLinkError, _, ei]), (0, d.useEffect)(function() {
                            if (eh) {
                                eu && G.replace(o.XM.Points, void 0, {
                                    shallow: !0
                                });
                                return
                            }
                            J(!0), (0, c.L9)(c._E.HubXpInviteConsumptionModalOpened)
                        }, [ec, eh, th, null == es ? void 0 : es.success, G, eu]), {
                            consumeInviteLink: (0, d.useCallback)(function() {
                                if (!eh) {
                                    J(!1), er(!0);
                                    var e, t = es.data,
                                        r = t.address,
                                        n = t.expiration,
                                        i = t.r,
                                        a = t.s,
                                        l = t.v;
                                    W.confirmAndAcceptInvitation(r, n, {
                                        r: i,
                                        s: a,
                                        v: l
                                    }, {
                                        gasLimit: 4e5
                                    }).then((e = (0, m.Z)(b().mark(function e(t) {
                                        return b().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return _(Y.hub.points.consumeInviteLinkLoading, {
                                                        variant: "info",
                                                        autoHideDuration: x.k$9,
                                                        anchorOrigin: {
                                                            vertical: "bottom",
                                                            horizontal: "right"
                                                        }
                                                    }), e.prev = 1, e.next = 4, t.wait();
                                                case 4:
                                                    return e.prev = 4, e.next = 7, f.Wp.enrollInZetaXp(T);
                                                case 7:
                                                    return e.next = 9, ed();
                                                case 9:
                                                    er(!1), (0, c.L9)(c._E.HubXpInviteAccepted), _(Y.hub.points.consumeInviteLinkConfirmation, {
                                                        variant: "success",
                                                        autoHideDuration: x.k$9,
                                                        anchorOrigin: {
                                                            vertical: "bottom",
                                                            horizontal: "right"
                                                        }
                                                    }), e.next = 18;
                                                    break;
                                                case 14:
                                                    e.prev = 14, e.t0 = e.catch(4), er(!1), _(Y.hub.points.consumeInviteLinkError, {
                                                        variant: "error",
                                                        autoHideDuration: x.k$9,
                                                        anchorOrigin: {
                                                            vertical: "bottom",
                                                            horizontal: "right"
                                                        }
                                                    });
                                                case 18:
                                                    e.next = 24;
                                                    break;
                                                case 20:
                                                    e.prev = 20, e.t1 = e.catch(1), er(!1), _(Y.hub.points.consumeInviteLinkError, {
                                                        variant: "error",
                                                        autoHideDuration: x.k$9,
                                                        anchorOrigin: {
                                                            vertical: "bottom",
                                                            horizontal: "right"
                                                        }
                                                    });
                                                case 24:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e, null, [
                                            [1, 20],
                                            [4, 14]
                                        ])
                                    })), function(t) {
                                        return e.apply(this, arguments)
                                    })).catch(function(e) {
                                        er(!1), console.error(e), _(Y.hub.points.consumeInviteLinkError, {
                                            variant: "error",
                                            autoHideDuration: x.k$9,
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            }
                                        })
                                    }).finally(function() {
                                        G.replace(o.XM.Points, void 0, {
                                            shallow: !0
                                        })
                                    })
                                }
                            }, [Y.hub.points.consumeInviteLinkConfirmation, Y.hub.points.consumeInviteLinkError, Y.hub.points.consumeInviteLinkLoading, _, W, T, eh, ed, es, G]),
                            isConsumeInviteModalOpen: $,
                            isLoadingAcceptInvite: et,
                            closeConsumeInviteModal: function() {
                                J(!1)
                            }
                        }),
                        tx = (0, a.Z)({}, ((0, i.Z)(tb), tb)),
                        tg = (ef = (ep = (0, h.Os)()).signer, em = ep.address, ev = (0, s.AA)().copy, eb = (0, k.Ds)().enqueueSnackbar, ey = (0, M.Z)(), ek = (eZ = (0, B.Z)(ey, 2))[0], ew = eZ[1], eA = (eC = (0, d.useState)(!1))[0], eN = eC[1], eB = (eO = (0, d.useState)(""))[0], eX = eO[1], eE = (0, d.useCallback)((eL = (0, m.Z)(b().mark(function e(t) {
                            var r, n, i, a;
                            return b().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = X()().add(2, "days").unix(), n = L.$.encode(["address", "uint256"], [em, r]), i = E.keccak256(n), e.next = 5, t.signMessage(H.arrayify(i));
                                    case 5:
                                        return a = e.sent, e.abrupt("return", [H.splitSignature(a), r]);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return eL.apply(this, arguments)
                        }), [em]), eH = (0, d.useCallback)((0, m.Z)(b().mark(function e() {
                            var t, r, n, i, a, l, o, s, d;
                            return b().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(!em || !ef || !window)) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, eE(ef);
                                    case 5:
                                        t = e.sent, i = (n = (r = (0, B.Z)(t, 2))[0]).r, a = n.s, l = n.v, o = r[1], s = "address=".concat(em, "&expiration=").concat(o, "&r=").concat(i, "&s=").concat(a, "&v=").concat(l), d = (0, c.pK)(s), eX("".concat(window.location.href, "?code=").concat(d)), eN(!0), (0, c.L9)(c._E.HubXpInviteGenerationModalOpened), e.next = 23;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(2), console.error(e.t0), eb(ev.hub.points.generatedInviteLinkError, {
                                            variant: "error",
                                            autoHideDuration: x.k$9,
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            }
                                        });
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 19]
                            ])
                        })), [ev.hub.points.generatedInviteLinkError, eb, eE, em, ef]), eM = (0, d.useCallback)(function() {
                            eN(!1)
                        }, []), eP = (0, d.useCallback)(function() {
                            try {
                                if (!eB) throw Error("[useGenerateInviteLink]: Invite link unavailable");
                                if (ew(eB), ek.error) throw Error("[useGenerateInviteLink]: Couldn't copy invite link to clipboard");
                                (0, c.L9)(c._E.HubXpCopyInviteLinkToClipboard), eb(ev.hub.points.inviteLinkClipboardCopyConfirmation, {
                                    variant: "success",
                                    autoHideDuration: x.k$9,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    }
                                })
                            } catch (e) {
                                console.error(e), eb(ev.hub.points.inviteLinkClipboardCopyError, {
                                    variant: "error",
                                    autoHideDuration: x.k$9,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    }
                                })
                            } finally {
                                eM()
                            }
                        }, [eM, ev.hub.points.inviteLinkClipboardCopyConfirmation, ev.hub.points.inviteLinkClipboardCopyError, ew, eb, eB, ek.error]), {
                            inviteLink: eB,
                            openInviteLinkModal: eH,
                            closeInviteLinkModal: eM,
                            isGenerateLinkModalOpen: eA && !!eB,
                            copyInviteLinkToClipboard: eP
                        }),
                        ty = tg.isGenerateLinkModalOpen,
                        tZ = tg.closeInviteLinkModal,
                        tw = tg.inviteLink,
                        tC = tg.copyInviteLinkToClipboard,
                        tO = tg.openInviteLinkModal,
                        tB = (0, d.useState)(!1),
                        tD = tB[0],
                        tX = tB[1],
                        tL = (0, d.useCallback)(function() {
                            (0, c.L9)(c._E.HubXpActivityDownloadModalOpen), tX(!0)
                        }, []);
                    return (0, R.BX)("div", {
                        className: "grid grid-cols-1 m-4 sm:m-8 gap-8 select-none",
                        style: e$ ? {
                            gridTemplateAreas: '"overview" "leaderboard" "tasks"'
                        } : {
                            gridTemplateAreas: '"overview leaderboard" "tasks leaderboard"'
                        },
                        children: [o.aD && (0, R.tZ)(ex, {
                            epochSSR: eT,
                            tasks: e8 || eU || [],
                            userPoints: td ? void 0 : ts,
                            userHasXpToRefreshStatus: ta,
                            isLoadingUserHasXpToRefresh: tl,
                            isRefreshPointsLoading: !!(null != tt && tt.isRefreshingUserPoints),
                            isUserVerified: null == e0 ? void 0 : e0.isUserVerified
                        }), (0, R.tZ)(e1, {
                            userLevel: td ? void 0 : null == ts ? void 0 : ts.level,
                            handleOpenShareDialog: tL,
                            userPointsXp: td ? 0 : null !== (ej = null == ts ? void 0 : ts.totalXp) && void 0 !== ej ? ej : 0,
                            isWalletEnrolledBe: null == e0 ? void 0 : e0.isUserVerified,
                            isLoadingAcceptInvite: tx.isLoadingAcceptInvite,
                            isUserVerified: !!(null == e0 ? void 0 : e0.isUserVerified),
                            isOnDifferentChain: eQ,
                            isUserVerifiedError: !!(null == e4 ? void 0 : e4.message),
                            xpUserHeatmapData: tn,
                            isWalletEnrolled: th,
                            enrollWallet: tp,
                            openInviteLinkModal: tO
                        }), (0, R.tZ)(l.SV, {
                            fallback: (0, R.tZ)(tf, {
                                isSectionGreyedOut: tv,
                                text: eq.hub.points.claimXpDisabled
                            }),
                            children: (0, R.tZ)(tk, {
                                epochSSR: eT,
                                tasks: e8 || eU || [],
                                userPoints: td ? void 0 : ts,
                                userHasXpToRefreshStatus: ta,
                                isLoadingUserHasXpToRefresh: tl,
                                isUserVerified: null == e0 ? void 0 : e0.isUserVerified,
                                isSectionGreyedOut: tv
                            })
                        }), (0, R.tZ)(eD, {
                            userAddress: null != eY ? eY : "",
                            userPointsXp: td ? 0 : null !== (eS = null == ts ? void 0 : ts.totalXp) && void 0 !== eS ? eS : 0,
                            userRanking: td ? 0 : null !== (eV = null == ts ? void 0 : ts.rank) && void 0 !== eV ? eV : 0,
                            leaderboard: null !== (eR = null !== (eI = null == e7 ? void 0 : e7.leaderboard) && void 0 !== eI ? eI : ez) && void 0 !== eR ? eR : [],
                            isSectionGreyedOut: tv,
                            isWalletEnrolledBe: null == e0 ? void 0 : e0.isUserVerified
                        }), (0, R.tZ)(eg, {
                            isGenerateLinkModalOpen: ty,
                            closeInviteLinkModal: tZ,
                            inviteLink: tw,
                            copyInviteLinkToClipboard: tC
                        }), (0, R.tZ)(Q, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? tN(Object(r), !0).forEach(function(t) {
                                    (0, n.Z)(e, t, r[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tN(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({}, tx)), (0, R.tZ)(tA, {
                            isShareDialogOpen: tD,
                            setIsShareDialogOpen: tX,
                            userLevel: null !== (eF = null == ts ? void 0 : ts.level) && void 0 !== eF ? eF : 0,
                            xpUserHeatmapData: tn,
                            userPoints: ts
                        })]
                    })
                },
                tB = r(22209),
                tD = r(23575),
                tX = !0,
                tL = function(e) {
                    var t = e.leaderboard,
                        r = e.epoch,
                        n = e.tasks;
                    return (0, tD.N)().shouldDisableXpPage ? (0, R.tZ)(tB.f, {}) : (0, R.tZ)(tO, {
                        leaderboardSSR: t,
                        epochSSR: r,
                        tasksSRR: n
                    })
                }
        },
        4084: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/xp", function() {
                return r(47389)
            }])
        }
    },
    function(e) {
        e.O(0, [1910, 5155, 4397, 9774, 2888, 179], function() {
            return e(e.s = 4084)
        }), _N_E = e.O()
    }
]);