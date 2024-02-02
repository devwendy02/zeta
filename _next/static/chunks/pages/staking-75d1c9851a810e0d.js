(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8879], {
        16300: function(e, a, t) {
            "use strict";
            t.d(a, {
                Y: function() {
                    return v
                }
            });
            var i = t(31737),
                n = t(83690),
                r = t(17241),
                l = t(25294),
                s = t(42949),
                o = t(95453),
                d = t(75990),
                c = t(60045),
                u = t(1910),
                m = t(35837),
                g = t(32735),
                h = t(54794),
                p = function(e) {
                    var a = e.original.operator_address;
                    return "/staking/".concat(a)
                },
                f = t(38839),
                b = function(e) {
                    var a, t = e.operatorAddress,
                        i = (0, s.ys)().compactAmountFormatter,
                        r = Number(null === (a = (0, h.WG)({
                            validatorAddress: t,
                            delegatorAddress: (0, n.yy)((0, n.jK)(t))
                        }).data) || void 0 === a ? void 0 : a.delegation_response.delegation.shares) / 1e18 || 0;
                    return (0, f.tZ)("div", {
                        className: "capitalize whitespace-nowrap flex gap-2 items-center text-grey-900 dark:text-grey-50",
                        children: (0, f.tZ)("span", {
                            className: "after:content-['ZETA'] after:ml-1",
                            children: i.format(r)
                        })
                    })
                },
                v = function() {
                    var e, a, t, n, v = (0, s.AA)().copy,
                        k = (0, s.ys)().compactAmountFormatter,
                        y = (0, l.P$0)(),
                        w = y.pagination,
                        x = y.setPagination,
                        Z = (0, m.useRouter)(),
                        N = (0, h.Wt)({
                            limit: w.pageSize,
                            offset: w.offset
                        }).data,
                        C = Number((null == N || null === (e = N.pagination) || void 0 === e ? void 0 : e.total) || 0),
                        A = (0, h.yl)({}),
                        _ = (0, u.Z)(null == N ? void 0 : N.validators, "jailed") || [],
                        D = (0, h.yr)({}).data,
                        O = (0, h.hb)({}).data,
                        B = null == O || null === (a = O.block) || void 0 === a || null === (a = a.header) || void 0 === a ? void 0 : a.height,
                        R = (0, g.useMemo)(function() {
                            return [{
                                accessorKey: "operator_address",
                                id: "operator_address",
                                accessorFn: function(e) {
                                    return e.operator_address
                                }
                            }, {
                                accessorKey: "description.moniker",
                                id: "description.moniker"
                            }, {
                                header: v.hub.staking.table.stakingTable.columnTitles.validator,
                                accessorFn: function(e) {
                                    return {
                                        validatorName: e.description.moniker
                                    }
                                },
                                sortingFn: function(e, a) {
                                    var t = e.original.description.moniker,
                                        i = a.original.description.moniker;
                                    return t.localeCompare(i)
                                },
                                cell: function(e) {
                                    var a, t = e.getValue();
                                    return (0, f.BX)("div", {
                                        className: "flex items-center gap-2 py-3 text-grey-900 dark:text-grey-50",
                                        children: [(0, f.tZ)("div", {
                                            className: "w-8 h-8 bg-green-700 text-white rounded-full flex justify-center items-center",
                                            children: (0, f.tZ)("span", {
                                                className: "text-green-100 capitalize font-bold",
                                                children: null === (a = t.validatorName) || void 0 === a ? void 0 : a[0]
                                            })
                                        }), (0, f.tZ)(l.ZU, {
                                            title: t.validatorName,
                                            children: (0, f.tZ)("div", {
                                                className: "max-w-[90px] overflow-hidden overflow-ellipsis whitespace-nowrap",
                                                children: t.validatorName
                                            })
                                        })]
                                    })
                                }
                            }, {
                                accessorKey: "votingPower",
                                header: v.hub.staking.table.stakingTable.columnTitles.votingPower,
                                accessorFn: function(e) {
                                    return {
                                        tokens: e.tokens
                                    }
                                },
                                sortingFn: function(e, a) {
                                    return Number(e.original.tokens) - Number(a.original.tokens)
                                },
                                cell: function(e) {
                                    var a, t, i = Number(e.getValue().tokens),
                                        n = Number(null === (a = A.data) || void 0 === a || null === (a = a.pool) || void 0 === a ? void 0 : a.bonded_tokens) + Number(null === (t = A.data) || void 0 === t || null === (t = t.pool) || void 0 === t ? void 0 : t.not_bonded_tokens),
                                        r = (0, o.e9)(i, n);
                                    return (0, f.tZ)("div", {
                                        className: "capitalize whitespace-nowrap flex gap-1.5 items-center text-grey-900 dark:text-grey-50",
                                        children: (0, f.BX)("span", {
                                            children: [k.format(r / 100 * n / 1e18), " ZETA"]
                                        })
                                    })
                                },
                                size: 120
                            }, {
                                accessorKey: "votingPowerPercentage",
                                header: v.hub.staking.table.stakingTable.columnTitles.share,
                                accessorFn: function(e) {
                                    return {
                                        tokens: e.tokens
                                    }
                                },
                                sortingFn: function(e, a) {
                                    return Number(e.original.tokens) - Number(a.original.tokens)
                                },
                                cell: function(e) {
                                    var a, t, i = Number(e.getValue().tokens),
                                        n = Number(null === (a = A.data) || void 0 === a || null === (a = a.pool) || void 0 === a ? void 0 : a.bonded_tokens) + Number(null === (t = A.data) || void 0 === t || null === (t = t.pool) || void 0 === t ? void 0 : t.not_bonded_tokens),
                                        r = (0, o.e9)(i, n);
                                    return (0, f.tZ)("div", {
                                        className: "capitalize whitespace-nowrap flex gap-1.5 items-center text-grey-900 dark:text-grey-50",
                                        children: (0, f.BX)("span", {
                                            children: [(0, o.It)(r, 2), "%"]
                                        })
                                    })
                                },
                                size: 70
                            }, {
                                accessorKey: "selfBonded",
                                header: v.hub.staking.table.stakingTable.columnTitles.selfBonded,
                                accessorFn: function(e) {
                                    return {
                                        operatorAddress: e.operator_address
                                    }
                                },
                                cell: function(e) {
                                    var a = e.getValue().operatorAddress;
                                    return (0, f.tZ)(b, {
                                        operatorAddress: a
                                    })
                                }
                            }, {
                                accessorKey: "commission.commission_rates.rate",
                                id: "commissions",
                                sortingFn: function(e, a) {
                                    return Number(e.original.commission.commission_rates.rate) - Number(a.original.commission.commission_rates.rate)
                                },
                                header: function() {
                                    return (0, f.tZ)(l.ZU, {
                                        title: (0, f.tZ)("p", {
                                            className: "text-left",
                                            children: v.hub.staking.table.stakingTable.columnTooltips.commission
                                        }),
                                        children: (0, f.BX)("div", {
                                            className: "cursor-pointer flex items-center gap-1",
                                            children: [(0, f.tZ)("p", {
                                                children: v.hub.staking.table.stakingTable.columnTitles.commission
                                            }), (0, f.tZ)(l.VzH, {})]
                                        })
                                    })
                                },
                                cell: function(e) {
                                    return (0, f.tZ)("div", {
                                        className: "capitalize whitespace-nowrap flex gap-2 items-center text-grey-900 dark:text-grey-50",
                                        children: (0, f.BX)("span", {
                                            children: [100 * Number(e.getValue()), "% "]
                                        })
                                    })
                                },
                                size: 120
                            }, {
                                accessorKey: "tokens",
                                id: "uptime",
                                header: v.explorer.uptime,
                                accessorFn: function(e) {
                                    var a, t = (0, d.consensusKeyToConsensusAddress)(e.consensus_pubkey.key),
                                        i = null == D || null === (a = D.info) || void 0 === a ? void 0 : a.find(function(e) {
                                            return e.address === t
                                        });
                                    return i && B ? {
                                        uptime: (0, d.getDowntimeAndUptimeForValidator)(B, i.start_height, i.missed_blocks_counter).uptime,
                                        signingInfoForValidator: i
                                    } : null
                                },
                                sortingFn: function(e, a) {
                                    return Number(e.getValue("uptime").uptime) - Number(a.getValue("uptime").uptime)
                                },
                                cell: function(e) {
                                    var a = (e.getValue() || {
                                        uptime: 0,
                                        signingInfoForValidator: null
                                    }).uptime;
                                    return (0, f.tZ)(r.Z, {
                                        children: a
                                    })
                                }
                            }, {
                                accessorKey: "jailed",
                                header: v.hub.staking.table.stakingTable.columnTitles.status,
                                cell: function(e) {
                                    var a = e.getValue();
                                    return (0, f.BX)("div", {
                                        className: "capitalize whitespace-nowrap flex gap-2 items-center text-grey-900 dark:text-grey-50",
                                        children: [(0, f.tZ)("span", {
                                            className: (0, c.default)("w-3 h-3 rounded-full", {
                                                "bg-positive-500": !a,
                                                "bg-negative-400": a
                                            })
                                        }), (0, f.tZ)("span", {
                                            children: a ? "Jailed" : "Active"
                                        })]
                                    })
                                },
                                size: 80
                            }, {
                                id: "actionIcon",
                                accessorKey: "",
                                header: "",
                                cell: function() {
                                    return (0, f.tZ)("div", {
                                        className: "w-full flex items-center justify-end",
                                        children: (0, f.tZ)(l.VG8, {
                                            height: 16,
                                            width: 16
                                        })
                                    })
                                },
                                size: 20
                            }]
                        }, [v.hub.staking.table.stakingTable, v.explorer.uptime, null === (t = A.data) || void 0 === t || null === (t = t.pool) || void 0 === t ? void 0 : t.bonded_tokens, null === (n = A.data) || void 0 === n || null === (n = n.pool) || void 0 === n ? void 0 : n.not_bonded_tokens, k, null == D ? void 0 : D.info, B]),
                        S = (0, g.useState)(null),
                        T = S[0],
                        E = S[1],
                        j = (0, g.useState)(!1),
                        P = j[0],
                        X = j[1],
                        F = (0, g.useCallback)(function() {
                            E(null)
                        }, []);
                    return {
                        data: _,
                        columns: R,
                        onRowSelect: (0, g.useCallback)(function(e) {
                            E(e), E(e), (0, o.L9)(o._E.StakingValidatorRowClicked, (0, i.Z)({}, o.gp.Validator, e.original.operator_address));
                            var a = p(e);
                            Z.push(a)
                        }, [Z]),
                        selectedRow: T,
                        onSearchChange: F,
                        isDetailsDialogOpen: P,
                        setIsDetailsDialogOpen: X,
                        pagination: w,
                        setPagination: x,
                        totalAmount: C
                    }
                }
        },
        75477: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return G
                }
            });
            var i = t(31737),
                n = t(42949),
                r = t(95453),
                l = t(85243),
                s = t(44874),
                o = t(32735),
                d = t(52298),
                c = t(78756),
                u = t(17285),
                m = t(72975),
                g = t.n(m),
                h = t(83690),
                p = t(38806),
                f = t(25294),
                b = t(75990),
                v = t(19267),
                k = t(55634),
                y = t(55884),
                w = t(54794),
                x = t(16300),
                Z = t(38839),
                N = function() {
                    var e, a = (0, k.Os)(),
                        t = a.address,
                        i = a.signer,
                        r = a.connectorProvider,
                        l = (0, n.AA)().copy,
                        d = (0, x.Y)(),
                        m = (0, w.VN)({
                            delegatorAddress: t ? (0, h.yy)(t) : ""
                        }),
                        N = m.data,
                        C = m.isLoading,
                        A = (0, w.pL)({
                            delegatorAddress: t ? (0, h.yy)(t) : ""
                        }, {
                            skip: !t,
                            pollingInterval: 3 * v.rE
                        }).data,
                        _ = (0, s.Ds)(),
                        D = _.enqueueSnackbar,
                        O = _.closeSnackbar,
                        B = (0, o.useMemo)(function() {
                            return null != A && A.rewards ? A.rewards.map(function(e) {
                                return e.validator_address
                            }) : []
                        }, [A]),
                        R = (0, o.useMemo)(function() {
                            return null != A && A.rewards ? A.rewards.reduce(function(e, a) {
                                var t;
                                return null !== (t = a.reward[0]) && void 0 !== t && t.amount && (a.reward.length > 1 && console.error(a.reward), e[a.validator_address] = a.reward[0].amount), e
                            }, {}) : {}
                        }, [A]),
                        S = (0, o.useState)(!1),
                        T = S[0],
                        E = S[1],
                        j = (0, o.useState)(!1),
                        P = j[0],
                        X = j[1],
                        F = (0, o.useState)(!1),
                        L = F[0],
                        z = F[1],
                        V = (0, o.useState)(!1),
                        I = V[0],
                        M = V[1],
                        K = (0, o.useState)(!1),
                        H = K[0],
                        W = K[1],
                        U = (0, o.useState)([]),
                        Y = U[0],
                        q = U[1],
                        G = (0, w.qH)(),
                        J = (0, u.Z)(G, 1)[0],
                        $ = (0, o.useCallback)((e = (0, c.Z)(g().mark(function e(a) {
                            var n, s, o, d, c, u, m, h, v, k;
                            return g().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = a.validatorAddress, t) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return X(!0), q(o), d = {
                                            amount: b.FALLBACK_FEE_AMOUNT,
                                            denom: "azeta",
                                            gas: "1000000"
                                        }, e.next = 8, (0, y.S)({
                                            fee: d,
                                            signer: i,
                                            connectorProvider: r,
                                            address: t,
                                            createTxMsg: p.T6,
                                            params: {
                                                validatorAddresses: o
                                            },
                                            signMessageCopy: o.length > 1 ? l.broadcast.claimRewards : l.broadcast.claimReward
                                        }).catch(function() {
                                            X(!1), W(!1), z(!1), M(!0), D(l.hub.shared.anErrorOcurred, {
                                                variant: "error",
                                                autoHideDuration: f.yw8,
                                                preventDuplicate: !0,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right"
                                                },
                                                action: function(e) {
                                                    return (0, Z.tZ)(f.t5P, {
                                                        onRetry: function() {
                                                            $({
                                                                validatorAddress: o
                                                            }), O(e)
                                                        },
                                                        onDismiss: function() {
                                                            return O(e)
                                                        }
                                                    })
                                                }
                                            })
                                        });
                                    case 8:
                                        if (!(null != (c = e.sent) && null !== (n = c.data) && void 0 !== n && n.tx_response && (null == c || null === (s = c.data) || void 0 === s || null === (s = s.tx_response) || void 0 === s ? void 0 : s.code) === 0)) {
                                            e.next = 25;
                                            break
                                        }
                                        m = null, h = 0, (v = c.data.tx_response.txhash) && D(l.hub.shared.successfulBroadcast, {
                                            variant: "info",
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            }
                                        });
                                    case 14:
                                        if (!(!m && h < 1e5)) {
                                            e.next = 22;
                                            break
                                        }
                                        return e.next = 17, J({
                                            txHash: v
                                        });
                                    case 17:
                                        k = e.sent, h += 1, "rejected" !== k.status && (m = k), e.next = 14;
                                        break;
                                    case 22:
                                        m && (null === (u = m) || void 0 === u ? void 0 : u.status) !== "rejected" ? (z(!0), X(!1), M(!1), W(!1), D(l.hub.staking.successfulClaim, {
                                            variant: "success",
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            }
                                        })) : (D(l.hub.shared.anErrorOcurred, {
                                            variant: "error",
                                            autoHideDuration: f.yw8,
                                            preventDuplicate: !0,
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            },
                                            action: function(e) {
                                                return (0, Z.tZ)(f.t5P, {
                                                    onRetry: function() {
                                                        $({
                                                            validatorAddress: o
                                                        }), O(e)
                                                    },
                                                    onDismiss: function() {
                                                        return O(e)
                                                    }
                                                })
                                            }
                                        }), z(!1), X(!1), M(!0), W(!1)), e.next = 29;
                                        break;
                                    case 25:
                                        z(!1), X(!1), M(!0), W(!1);
                                    case 29:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(a) {
                            return e.apply(this, arguments)
                        }), [t, O, r, l.broadcast.claimReward, l.broadcast.claimRewards, l.hub.shared.anErrorOcurred, l.hub.shared.successfulBroadcast, l.hub.staking.successfulClaim, D, J, i]),
                        Q = (0, o.useCallback)((0, c.Z)(g().mark(function e() {
                            return g().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", $({
                                            validatorAddress: B
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [B, $]);
                    return {
                        stakingTable: d,
                        isDelegationsLoading: C,
                        allDelegationsData: N,
                        allRewardsData: A,
                        claimDialogOpen: T,
                        setClaimDialogOpen: E,
                        isClaimLoading: P,
                        isClaimSigned: H,
                        setIsClaimLoading: X,
                        isClaimSuccess: L,
                        setIsClaimSuccess: z,
                        isClaimFail: I,
                        setIsClaimFail: M,
                        handleClaimRewards: $,
                        rewardsByValidatorAddress: R,
                        handleClaimAllRewards: Q,
                        claimAddresses: Y
                    }
                },
                C = t(17241),
                A = function(e) {
                    var a = e.formattedClaimAmount,
                        t = e.copy;
                    return (0, Z.BX)("div", {
                        className: "border border-grey-200 dark:border-grey-600 mt-4 p-6 text-center flex flex-col gap-4 rounded",
                        children: [(0, Z.tZ)("p", {
                            className: "font-sm text-grey-400 dark:text-grey-300",
                            children: t.hub.staking.claimRewardsDialog.title
                        }), (0, Z.tZ)(f.ong, {
                            className: "w-8 h-8 mx-auto"
                        }), (0, Z.BX)("p", {
                            className: "font-sm text-black dark:text-white",
                            children: ["~", a, " ", (0, Z.tZ)("span", {
                                className: "text-grey-400 dark:text-grey-300",
                                children: "ZETA"
                            })]
                        })]
                    })
                },
                _ = function(e) {
                    var a = e.copy;
                    return (0, Z.BX)("div", {
                        className: "border border-grey-200 dark:border-grey-600 mt-4 p-6 text-center flex flex-col gap-4 rounded",
                        children: [(0, Z.tZ)("p", {
                            className: "font-sm text-grey-400 dark:text-grey-300",
                            children: a.hub.staking.claimRewardsDialog.title
                        }), (0, Z.tZ)(f.ong, {
                            className: "w-8 h-8 mx-auto"
                        }), (0, Z.tZ)("p", {
                            className: "font-sm text-black dark:text-white",
                            children: a.hub.staking.claimRewardsDialog.signCopy
                        })]
                    })
                },
                D = function(e) {
                    var a = e.open,
                        t = e.onClose,
                        l = e.title,
                        s = e.claimAmount,
                        c = void 0 === s ? "" : s,
                        u = e.handleClaim,
                        m = e.isLoading,
                        g = void 0 !== m && m,
                        h = e.isClaimSuccess,
                        p = e.isClaimFail,
                        v = e.setBackToDefault,
                        k = e.isClaimSigned,
                        y = (0, n.AA)().copy,
                        w = (0, b.customToFixed)(Number(c) / 1e18),
                        x = (0, o.useState)(""),
                        N = x[0],
                        D = x[1],
                        O = void 0 !== p && p ? "fail" : g ? "loading" : void 0 !== h && h && !g ? "success" : k ? "default" : "sign",
                        B = {
                            default: y.hub.staking.claimRewardsDialog.buttonCopy,
                            loading: y.hub.staking.claimRewardsDialog.buttonCopyLoading,
                            success: y.hub.staking.claimRewardsDialog.buttonCopySuccess,
                            fail: y.hub.staking.claimRewardsDialog.buttonCopyFail,
                            sign: y.hub.staking.claimRewardsDialog.buttonCopySign
                        }[O],
                        R = {
                            default: function() {
                                u(), (0, r.L9)(r._E.StakingClaimAllRewardsModalClaimClicked, (0, i.Z)({}, r.gp.Amount, w))
                            },
                            loading: function() {},
                            success: function() {
                                t(), setTimeout(function() {
                                    return null == v ? void 0 : v()
                                }, 1e3), (0, r.L9)(r._E.StakingClaimAllRewardsModalSuccessDoneClicked)
                            },
                            fail: function() {
                                null == v || v(), (0, r.L9)(r._E.StakingClaimAllRewardsModalErrorBackClicked)
                            },
                            sign: function() {
                                u(), (0, r.L9)(r._E.StakingClaimAllRewardsModalClaimClicked, (0, i.Z)({}, r.gp.Amount, w))
                            }
                        }[O],
                        S = {
                            loading: (0, Z.tZ)(A, {
                                formattedClaimAmount: w,
                                copy: y
                            }),
                            default: (0, Z.tZ)(A, {
                                formattedClaimAmount: w,
                                copy: y
                            }),
                            success: (0, Z.BX)(Z.HY, {
                                children: [(0, Z.tZ)("div", {
                                    className: "flex justify-center items-center h-[155px]",
                                    children: (0, Z.tZ)(d.R$, {
                                        size: 72,
                                        variant: "secondary"
                                    })
                                }), (0, Z.BX)(C.Z, {
                                    variant: "body1",
                                    children: [y.hub.staking.claimRewardsDialog.successParagraph, " ", N, " ZETA."]
                                })]
                            }),
                            fail: (0, Z.BX)(Z.HY, {
                                children: [(0, Z.tZ)("div", {
                                    className: "flex justify-center items-center h-[155px]",
                                    children: (0, Z.tZ)(d.Uc, {
                                        size: 72
                                    })
                                }), (0, Z.tZ)(C.Z, {
                                    variant: "body1",
                                    children: y.hub.staking.claimRewardsDialog.failParagraph
                                })]
                            }),
                            sign: (0, Z.tZ)(_, {
                                copy: y
                            })
                        }[O];
                    return (0, o.useEffect)(function() {
                        "success" === O ? D(w) : D("")
                    }, [O]), (0, Z.BX)(f.QAJ, {
                        open: a,
                        onClose: function() {
                            t(), setTimeout(function() {
                                return null == v ? void 0 : v()
                            }, 1e3)
                        },
                        title: l,
                        children: [S, (0, Z.tZ)(f.kHo, {
                            color: "fail" === O ? "error" : "primary",
                            onClick: R,
                            className: "mt-4",
                            isLoading: g,
                            disabled: !c && !N,
                            children: B
                        })]
                    })
                },
                O = t(11365),
                B = t(15728),
                R = t(64691),
                S = t(39194),
                T = t(64828),
                E = t(67543),
                j = t(88932),
                P = t(60045),
                X = t(54774),
                F = t(46776);

            function L(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    a && (i = i.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), t.push.apply(t, i)
                }
                return t
            }

            function z(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? L(Object(t), !0).forEach(function(a) {
                        (0, i.Z)(e, a, t[a])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                    })
                }
                return e
            }
            var V = function(e) {
                    var a, t, s, o = e.delegation,
                        d = e.claimAddresses,
                        c = e.isClaimLoading,
                        u = e.reward,
                        m = e.handleClaimRewards,
                        g = (0, n.AA)().copy,
                        h = u ? X.formatEther((0, b.toBigNumber)(u || 0)) : "0",
                        p = X.formatEther((0, b.toBigNumber)(o.delegation.shares || 0)),
                        v = (0, w.Mw)(o.delegation.validator_address, {
                            skip: !o.delegation.validator_address
                        }),
                        k = null === (a = v.data) || void 0 === a ? void 0 : a.validator.jailed,
                        y = !k && Number(h) > 0 && !c,
                        x = !k && c && (null == d ? void 0 : d.includes(o.delegation.validator_address));
                    return (0, Z.tZ)(j.gM, {
                        href: "/staking/".concat(o.delegation.validator_address),
                        onClick: function() {
                            return (0, r.L9)(r._E.StakingMyDelegationCardClicked, (0, i.Z)({}, r.gp.Validator, o.delegation.validator_address))
                        },
                        children: (0, Z.tZ)(f.ZRI, {
                            className: "w-full",
                            children: (0, Z.tZ)(O.ZP, z(z({
                                component: l.E.li
                            }, (0, E.zW)({
                                y: 10
                            })), {}, {
                                className: "m-0 p-0 cursor-pointer",
                                children: (0, Z.BX)("div", {
                                    className: "flex flex-col w-full px-6 py-6 rounded-sm border dark:border-grey-600 border-grey-200",
                                    children: [(0, Z.BX)("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [(0, Z.tZ)(C.Z, {
                                            variant: "body1",
                                            className: "max-w-[130px] overflow-hidden overflow-ellipsis",
                                            children: null === (t = v.data) || void 0 === t || null === (t = t.validator.description) || void 0 === t ? void 0 : t.moniker
                                        }), k && (0, Z.tZ)(T.Z, {
                                            title: "Jailed",
                                            children: (0, Z.tZ)("div", {
                                                className: "rounded-full w-2 h-2 bg-red-200 animate-pulse my-2"
                                            })
                                        }), y && (0, Z.tZ)("button", {
                                            type: "button",
                                            onClick: function(e) {
                                                e.stopPropagation(), e.preventDefault(), m({
                                                    validatorAddress: o.delegation.validator_address
                                                }), (0, r.L9)(r._E.StakingMyDelegationClaimRewardsClicked, (0, i.Z)({}, r.gp.Validator, o.delegation.validator_address))
                                            },
                                            children: (0, Z.tZ)(C.Z, {
                                                variant: "body1",
                                                className: (0, P.default)("text-green-100 font-medium py-0.5", {
                                                    "text-grey-500": c
                                                }),
                                                children: g.hub.staking.claimRewardsGranularCta
                                            })
                                        }), x && (0, Z.BX)("div", {
                                            className: "relative",
                                            children: [(0, Z.tZ)("div", {
                                                className: "absolute rounded-full w-2 h-2 bg-green-200 animate-pulse top-[0.4099rem] right-[0.2rem]"
                                            }), (0, Z.tZ)(B.Z, {
                                                size: 14
                                            })]
                                        })]
                                    }), (0, Z.BX)("div", {
                                        className: "flex flex-col gap-3",
                                        children: [(0, Z.BX)(C.Z, {
                                            variant: "body1",
                                            className: "flex gap-1 text-grey-400 justify-between",
                                            children: [(0, Z.BX)("span", {
                                                children: [g.hub.staking.stakingValidator.overview.commission, ":"]
                                            }), (0, Z.tZ)("span", {
                                                className: "dark:text-white",
                                                children: null !== (s = v.data) && void 0 !== s && s.validator.commission.commission_rates.rate ? (0, Z.BX)("span", {
                                                    children: [100 * Number(v.data.validator.commission.commission_rates.rate), "%"]
                                                }) : (0, Z.tZ)(R.Z, {
                                                    variant: "text",
                                                    width: 50,
                                                    height: 20
                                                })
                                            })]
                                        }), (0, Z.tZ)(C.Z, {
                                            variant: "body1",
                                            className: "text-grey-400",
                                            children: (0, Z.BX)("span", {
                                                className: "flex justify-between",
                                                children: [(0, Z.BX)("span", {
                                                    children: [g.hub.staking.myDelegations.myDelegation, ":"]
                                                }), " ", (0, Z.tZ)(T.Z, {
                                                    title: (0, b.customToFixed)(Number(p)),
                                                    children: (0, Z.BX)("span", {
                                                        className: "dark:text-white",
                                                        children: [(0, b.customToFixed)(Number(p), 6), " ZETA"]
                                                    })
                                                })]
                                            })
                                        }), (0, Z.tZ)(C.Z, {
                                            variant: "body1",
                                            className: "text-grey-400",
                                            children: (0, Z.BX)("span", {
                                                className: "flex justify-between",
                                                children: [(0, Z.BX)("span", {
                                                    children: [g.hub.staking.myDelegations.rewardsAvailable, ":"]
                                                }), (0, Z.tZ)(T.Z, {
                                                    title: (0, b.customToFixed)(Number(h)),
                                                    children: (0, Z.BX)("span", {
                                                        className: "dark:text-white",
                                                        children: [(0, b.customToFixed)(Number(h), 6), " ZETA"]
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), o.delegation.validator_address)
                        })
                    }, o.delegation.validator_address)
                },
                I = function(e) {
                    var a, t, i = e.isLoading,
                        s = e.userDelegations,
                        o = e.isClaimLoading,
                        c = e.handleClaimAllRewards,
                        u = e.handleClaimRewards,
                        m = e.claimTotalAmount,
                        g = e.claimAddresses,
                        h = e.rewardsByValidatorAddress,
                        p = (0, n.AA)().copy,
                        b = (0, k.Os)(),
                        v = b.chainId,
                        y = b.switchNetwork,
                        w = b.isConnected,
                        x = b.openConnectModal,
                        N = null !== (a = null == s || null === (t = s.delegation_responses) || void 0 === t ? void 0 : t.filter(function(e) {
                            return Number(null == e ? void 0 : e.balance.amount) / 1e18
                        })) && void 0 !== a ? a : [];
                    return w ? w && v !== Number(F.N2.chainId) ? (0, Z.BX)("div", {
                        className: "flex flex-col h-full",
                        children: [(0, Z.tZ)(C.Z, {
                            variant: "headline2",
                            className: "px-6 mb-10",
                            children: p.hub.staking.myDelegations.title
                        }), (0, Z.tZ)("div", {
                            className: "flex items-center justify-center flex-grow",
                            children: (0, Z.tZ)(d.Vw, {
                                title: p.hub.staking.validator.switchNetwork,
                                caption: p.hub.staking.validator.switchNetworkDescription,
                                buttonCopy: p.hub.staking.validator.switchNetwork,
                                onClick: function() {
                                    return null == y ? void 0 : y(Number(F.N2.chainId))
                                }
                            })
                        })]
                    }) : w && void 0 !== i && i ? (0, Z.BX)("div", {
                        className: "flex flex-col h-full",
                        children: [(0, Z.tZ)(C.Z, {
                            variant: "headline2",
                            className: "px-6 mb-10",
                            children: p.hub.staking.myDelegations.title
                        }), (0, Z.BX)("div", {
                            className: "px-6",
                            children: [(0, Z.tZ)(R.Z, {
                                height: "50px"
                            }), (0, Z.tZ)(R.Z, {
                                height: "50px"
                            }), (0, Z.tZ)(R.Z, {
                                height: "50px"
                            })]
                        })]
                    }) : w && 0 === N.length ? (0, Z.BX)("div", {
                        className: "flex flex-col h-full",
                        children: [(0, Z.tZ)(C.Z, {
                            variant: "headline2",
                            className: "px-6 mb-10",
                            children: p.hub.staking.myDelegations.title
                        }), (0, Z.tZ)("div", {
                            className: "flex items-center justify-center flex-grow",
                            children: (0, Z.tZ)(C.Z, {
                                variant: "body1",
                                className: "text-grey-400 dark:text-grey-300 text-center",
                                children: p.hub.staking.myDelegations.noDelegations
                            })
                        })]
                    }) : (0, Z.BX)("div", {
                        children: [(0, Z.tZ)(C.Z, {
                            variant: "headline2",
                            className: "px-6 mb-10",
                            children: p.hub.staking.myDelegations.title
                        }), (0, Z.BX)(S.Z, {
                            className: "px-6 flex flex-col gap-3",
                            children: [(0, Z.tZ)(O.ZP, z(z({
                                component: l.E.li
                            }, (0, E.zW)({
                                y: 10,
                                delay: 0
                            })), {}, {
                                className: "m-0 p-0",
                                children: (0, Z.BX)("div", {
                                    className: "py-3 w-full rounded p-6 flex flex-wrap gap-x-2 justify-between dark:bg-green-700/70 bg-green-600/90",
                                    children: [(0, Z.tZ)(C.Z, {
                                        variant: "body1",
                                        className: "font-semibold dark:text-green-100 text-white shrink-0",
                                        children: p.hub.staking.myDelegations.totalRewards
                                    }), (0, Z.tZ)(C.Z, {
                                        variant: "body1",
                                        className: "text-grey-50",
                                        children: m ? "~".concat((Number(m) / 1e18).toFixed(5), " ZETA") : "-"
                                    })]
                                })
                            })), (0, Z.tZ)(l.E.div, z(z({}, (0, E.zW)({
                                y: 0,
                                delay: .3
                            })), {}, {
                                className: "flex flex-col gap-3 max-h-[800px] overflow-y-auto",
                                children: null == N ? void 0 : N.map(function(e, a) {
                                    return (0, Z.tZ)(V, {
                                        delegation: e,
                                        handleClaimRewards: u,
                                        isClaimLoading: o,
                                        claimAddresses: g,
                                        index: a,
                                        reward: h[e.delegation.validator_address]
                                    })
                                })
                            })), (0, Z.tZ)(f.kHo, {
                                type: "button",
                                onClick: function() {
                                    c(), (0, r.L9)(r._E.StakingClaimAllRewardsClicked)
                                },
                                disabled: !m,
                                children: p.hub.staking.claimButtonCta
                            })]
                        })]
                    }) : (0, Z.BX)("div", {
                        className: "flex flex-col h-full",
                        children: [(0, Z.tZ)(C.Z, {
                            variant: "headline2",
                            className: "px-6 mb-10",
                            children: p.hub.staking.myDelegations.title
                        }), (0, Z.tZ)("div", {
                            className: "flex items-center justify-center flex-grow",
                            children: (0, Z.tZ)(d.Vw, {
                                caption: "Connect a wallet to view validators",
                                onClick: x
                            })
                        })]
                    })
                },
                M = t(66551),
                K = function(e) {
                    var a = e.stakingTable,
                        t = (0, n.AA)().copy;
                    return a ? (0, Z.BX)("div", {
                        children: [(0, Z.tZ)(C.Z, {
                            variant: "headline2",
                            className: "p-4 sm:p-6 !pt-0",
                            children: t.hub.staking.table.title
                        }), (0, Z.tZ)(C.Z, {
                            variant: "body1",
                            className: "px-4 sm:px-6 mb-4 sm:mb-6",
                            children: t.hub.staking.table.description
                        }), (0, Z.tZ)("div", {
                            className: "px-6",
                            children: (0, Z.tZ)(M.by0, {
                                columns: a.columns,
                                data: a.data,
                                withSearch: !0,
                                searchInputPlaceholder: t.hub.staking.table.searchInputPlaceholder,
                                pagination: a.pagination,
                                onPaginationChange: a.setPagination,
                                height: 675,
                                totalAmount: a.totalAmount,
                                selectRowHandlers: {
                                    withSelect: !0,
                                    onSelect: a.onRowSelect,
                                    selectedRow: a.selectedRow
                                },
                                columnVisibility: {
                                    "description.moniker": !1,
                                    operator_address: !1
                                }
                            })
                        })]
                    }) : null
                };

            function H(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    a && (i = i.filter(function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    })), t.push.apply(t, i)
                }
                return t
            }

            function W(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? H(Object(t), !0).forEach(function(a) {
                        (0, i.Z)(e, a, t[a])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
                    })
                }
                return e
            }
            var U = function() {
                    var e, a, t = (0, n.AA)().copy,
                        i = (0, s.Ds)().enqueueSnackbar,
                        c = N(),
                        u = c.stakingTable,
                        m = c.isDelegationsLoading,
                        g = c.allDelegationsData,
                        h = c.allRewardsData,
                        p = c.claimDialogOpen,
                        f = c.setClaimDialogOpen,
                        b = c.isClaimLoading,
                        v = c.setIsClaimLoading,
                        k = c.isClaimSuccess,
                        y = c.setIsClaimSuccess,
                        w = c.isClaimFail,
                        x = c.setIsClaimFail,
                        C = c.handleClaimRewards,
                        A = c.handleClaimAllRewards,
                        _ = c.rewardsByValidatorAddress,
                        O = c.claimAddresses,
                        B = c.isClaimSigned;
                    return (0, o.useEffect)(function() {
                        p && (0, r.L9)(r._E.StakingClaimAllRewardsModalOpened)
                    }, [p]), (0, Z.BX)(l.E.div, W(W({
                        className: "flex px-8 gap-8"
                    }, (0, r.zW)({
                        y: 0,
                        delay: .2
                    })), {}, {
                        children: [(0, Z.tZ)(D, {
                            open: p,
                            onClose: function() {
                                f(!1), (0, r.L9)(r._E.StakingClaimAllRewardsModalClosed)
                            },
                            title: t.hub.staking.claimRewards.title,
                            handleClaim: function() {
                                v(!0), A()
                            },
                            setBackToDefault: function() {
                                v(!1), y(!1), x(!1)
                            },
                            isClaimFail: w,
                            isClaimSigned: B,
                            isClaimSuccess: k,
                            isLoading: b,
                            claimAmount: null == h || null === (e = h.total) || void 0 === e || null === (e = e[0]) || void 0 === e ? void 0 : e.amount
                        }), (0, Z.tZ)("div", {
                            className: "flex flex-col gap-8 w-full lg:border-r border-grey-200 dark:border-grey-700 lg:pr-8 pt-8 pb-8 h-fit lg:max-w-[calc(100%-366px-32px)]",
                            children: (0, Z.tZ)(d.Zb, {
                                className: "h-fit min-h-[400px] px-0 pb-0",
                                style: {
                                    minHeight: "calc(100vh - 130px)"
                                },
                                children: (0, Z.tZ)(K, {
                                    stakingTable: u
                                })
                            })
                        }), (0, Z.tZ)(d.Zb, {
                            className: "hidden lg:block min-w-[366px] my-8 pb-8 px-0",
                            children: (0, Z.tZ)(I, {
                                isLoading: m,
                                userDelegations: g,
                                claimTotalAmount: null == h || null === (a = h.total) || void 0 === a || null === (a = a[0]) || void 0 === a ? void 0 : a.amount,
                                rewardsByValidatorAddress: _,
                                handleClaimAllRewards: function() {
                                    f(!0)
                                },
                                isClaimLoading: b,
                                claimAddresses: O,
                                handleClaimRewards: function(e) {
                                    var a = e.validatorAddress;
                                    v(!0), C({
                                        validatorAddress: [a]
                                    }).then(function() {
                                        i(t.hub.shared.successfulBroadcast, {
                                            variant: "info",
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            }
                                        }), setTimeout(function() {
                                            y(!0), v(!1), i(t.hub.staking.successfulClaim, {
                                                variant: "success",
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right"
                                                }
                                            })
                                        }, 4e3)
                                    }).catch(function() {
                                        x(!0), v(!1), i(t.hub.shared.anErrorOcurred, {
                                            variant: "error",
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            }
                                        })
                                    })
                                }
                            })
                        })]
                    }))
                },
                Y = t(22209),
                q = t(23575),
                G = function() {
                    return (0, q.N)().shouldDisableStakingPage ? (0, Z.tZ)(Y.f, {}) : (0, Z.tZ)(U, {})
                }
        },
        29782: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/staking", function() {
                return t(75477)
            }])
        }
    },
    function(e) {
        e.O(0, [9850, 7193, 5859, 490, 1910, 1362, 9774, 2888, 179], function() {
            return e(e.s = 29782)
        }), _N_E = e.O()
    }
]);