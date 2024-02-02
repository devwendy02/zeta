(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5563], {
        39171: function(e, t, i) {
            "use strict";
            i.d(t, {
                E6: function() {
                    return c
                },
                El: function() {
                    return d
                },
                G8: function() {
                    return w
                },
                Rs: function() {
                    return l
                },
                VJ: function() {
                    return h
                },
                Zt: function() {
                    return p
                },
                d0: function() {
                    return g
                }
            });
            var n, o = i(31737),
                r = i(75990);

            function s(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(i), !0).forEach(function(t) {
                        (0, o.Z)(e, t, i[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    })
                }
                return e
            }
            var c = ["transactions", "invites", "discoveredIssues"],
                l = 500,
                d = 2e3,
                h = 2e3 * c.length - 500,
                g = a(a({}, (n = {}, (0, o.Z)(n, r.ClaimUserTier.ZetaGlobetrotter, {
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
                }), (0, o.Z)(n, r.ClaimUserTier.ZetaJetsetter, {
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
                }), (0, o.Z)(n, r.ClaimUserTier.ZetaPilot, {
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
                }), (0, o.Z)(n, r.ClaimUserTier.ZetaCosmopolitan, {
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
                }), (0, o.Z)(n, r.ClaimUserTier.ZetaTrailblazer, {
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
                }), (0, o.Z)(n, r.ClaimUserTier.ZetaRacer, {
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
                }), (0, o.Z)(n, r.ClaimUserTier.ZetaExplorer, {
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
                }), (0, o.Z)(n, r.ClaimUserTier.ZetaBoss, {
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
                }), n)), {}, {
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
                p = "https://blog.zetachain.com/",
                w = "".concat(p, "the-zetachain-airdrop-pre-claim-494d09a6523b")
        },
        99830: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return N
                }
            });
            var n = i(46146),
                o = i(42949),
                r = i(32735),
                s = i(39171),
                a = i(92839),
                c = i(38839),
                l = function(e) {
                    var t = e.copy;
                    return [{
                        id: "overview",
                        title: t.sections.overview.title,
                        items: [{
                            id: "what-is-zetachain",
                            title: t.sections.overview.whatIsZetaChain.title,
                            content: (0, c.BX)(c.HY, {
                                children: [(0, c.tZ)("p", {
                                    children: t.sections.overview.whatIsZetaChain.description1
                                }), (0, c.BX)("p", {
                                    children: [t.sections.overview.whatIsZetaChain.description2, (0, c.tZ)(a.V, {
                                        displayUrl: s.Zt,
                                        href: s.G8,
                                        className: "text-green-200",
                                        children: t.sections.overview.whatIsZetaChain.linkContent
                                    }), "."]
                                })]
                            })
                        }, {
                            id: "what-is-zetahub",
                            title: t.sections.overview.whatIsZetaHub.title,
                            content: (0, c.tZ)("p", {
                                children: t.sections.overview.whatIsZetaHub.description
                            })
                        }]
                    }, {
                        id: "wallet-connection",
                        title: t.sections.walletConnection.title,
                        items: [{
                            title: t.sections.walletConnection.whatCanIUseToConnect.title,
                            id: "what-can-i-use-to-connect-to-zetahub",
                            content: (0, c.tZ)("p", {
                                children: t.sections.walletConnection.whatCanIUseToConnect.description
                            })
                        }, {
                            title: t.sections.walletConnection.howCanIChangeConnectedWallet.title,
                            id: "how-can-i-change-my-connected-wallet",
                            content: (0, c.tZ)("p", {
                                children: t.sections.walletConnection.howCanIChangeConnectedWallet.description
                            })
                        }]
                    }, {
                        title: t.sections.gettingZeta.title,
                        id: "buying-zeta-and-other-assets",
                        items: [{
                            title: t.sections.gettingZeta.doINeedZetaToUseHub.title,
                            id: "do-i-need-zeta-to-use-hub",
                            content: (0, c.tZ)("p", {
                                children: t.sections.gettingZeta.doINeedZetaToUseHub.description
                            })
                        }, {
                            title: t.sections.gettingZeta.whereCanIBuyMore.title,
                            id: "where-can-i-buy-more-assets",
                            content: (0, c.tZ)("p", {
                                children: t.sections.gettingZeta.whereCanIBuyMore.description
                            })
                        }, {
                            title: t.sections.gettingZeta.howDoIGetZetaIntoZetachain.title,
                            id: "how-do-i-get-zeta-into-zetachain",
                            content: (0, c.BX)(c.HY, {
                                children: [(0, c.tZ)("p", {
                                    children: t.sections.gettingZeta.howDoIGetZetaIntoZetachain.description1
                                }), (0, c.tZ)("p", {
                                    children: t.sections.gettingZeta.howDoIGetZetaIntoZetachain.description2
                                })]
                            })
                        }]
                    }, {
                        title: t.sections.holdings.title,
                        id: "holdings",
                        items: [{
                            title: t.sections.holdings.whatAssets.title,
                            id: "what-select-assets-are-viewable-on-my-holdings-page",
                            content: (0, c.tZ)("p", {
                                children: t.sections.holdings.whatAssets.description
                            })
                        }, {
                            title: t.sections.holdings.howIsNetWorthCalculated.title,
                            id: "how-is-my-net-worth-calculated",
                            content: (0, c.tZ)("p", {
                                children: t.sections.holdings.howIsNetWorthCalculated.description
                            })
                        }]
                    }, {
                        title: t.sections.pool.title,
                        id: "pool",
                        items: [{
                            title: t.sections.pool.whatIsAPool.title,
                            id: "where-are-my-positions",
                            content: (0, c.tZ)("p", {
                                children: t.sections.pool.whatIsAPool.description
                            })
                        }, {
                            title: t.sections.pool.howDoIPool.title,
                            id: "how-do-i-pool-assets",
                            content: (0, c.BX)(c.HY, {
                                children: [(0, c.tZ)("p", {
                                    children: t.sections.pool.howDoIPool.description1
                                }), (0, c.tZ)("p", {
                                    children: t.sections.pool.howDoIPool.description2
                                }), (0, c.tZ)("p", {
                                    children: t.sections.pool.howDoIPool.description3
                                })]
                            })
                        }, {
                            title: t.sections.pool.whatIfIHaveInsufficientBalance.title,
                            id: "what-if-i-have-insufficient-balance",
                            content: (0, c.tZ)("p", {
                                children: t.sections.pool.whatIfIHaveInsufficientBalance.description
                            })
                        }, {
                            title: t.sections.pool.whereAreMyPositions.title,
                            id: "where-are-my-positions",
                            content: (0, c.tZ)("p", {
                                children: t.sections.pool.whereAreMyPositions.description
                            })
                        }, {
                            title: t.sections.pool.howDoIWithdraw.title,
                            id: "how-do-i-withdraw-a-position",
                            content: (0, c.tZ)("p", {
                                children: t.sections.pool.howDoIWithdraw.description
                            })
                        }, {
                            title: t.sections.pool.canIStakeLPTokens.title,
                            id: "can-i-stake-lp-tokens",
                            content: (0, c.tZ)("p", {
                                children: t.sections.pool.canIStakeLPTokens.description
                            })
                        }]
                    }, {
                        title: t.sections.staking.title,
                        id: "staking",
                        items: [{
                            title: t.sections.staking.whatIsStaking.title,
                            id: "where-are-my-delegations",
                            content: (0, c.tZ)("p", {
                                children: t.sections.staking.whatIsStaking.description
                            })
                        }, {
                            title: t.sections.staking.howStake.title,
                            id: "how-do-i-stake",
                            content: (0, c.BX)(c.HY, {
                                children: [(0, c.tZ)("p", {
                                    children: t.sections.staking.howStake.description1
                                }), (0, c.tZ)("p", {
                                    children: t.sections.staking.howStake.description2
                                })]
                            })
                        }, {
                            title: t.sections.staking.whereAreMyDelegations.title,
                            id: "where-are-my-delegations",
                            content: (0, c.tZ)("p", {
                                children: t.sections.staking.whereAreMyDelegations.description
                            })
                        }, {
                            title: t.sections.staking.howDoIClaim.title,
                            id: "how-do-i-claim-my-rewards",
                            content: (0, c.tZ)("p", {
                                children: t.sections.staking.howDoIClaim.description
                            })
                        }, {
                            title: t.sections.staking.howDoIUndelegate.title,
                            id: "how-do-i-undelegate-my-stake",
                            content: (0, c.tZ)("p", {
                                children: t.sections.staking.howDoIUndelegate.description
                            })
                        }, {
                            title: t.sections.staking.howDoIRedelegate.title,
                            id: "how-do-i-redelegate-stake-to-a-different-validator",
                            content: (0, c.tZ)("p", {
                                children: t.sections.staking.howDoIRedelegate.description
                            })
                        }]
                    }, {
                        title: t.sections.send.title,
                        id: "send",
                        items: [{
                            title: t.sections.send.whatCanIDoOnSendZetaPage.title,
                            id: "what-can-i-do-on-the-send-zeta-page",
                            content: (0, c.tZ)("p", {
                                children: t.sections.send.whatCanIDoOnSendZetaPage.description
                            })
                        }, {
                            title: t.sections.send.whereCanISendAssets.title,
                            id: "where-can-i-send-assets",
                            content: (0, c.tZ)("p", {
                                children: t.sections.send.whereCanISendAssets.description
                            })
                        }]
                    }, {
                        title: t.sections.governance.title,
                        id: "governance",
                        items: [{
                            title: t.sections.governance.whoCanParticipate.title,
                            id: "who-can-participate",
                            content: (0, c.tZ)("p", {
                                children: t.sections.governance.whoCanParticipate.description
                            })
                        }, {
                            title: t.sections.governance.doesCastingAVoteCostFees.title,
                            id: "does-casting-a-vote-cost-fees",
                            content: (0, c.tZ)("p", {
                                children: t.sections.governance.doesCastingAVoteCostFees.description
                            })
                        }, {
                            title: t.sections.governance.whatAreMyOptionsToVote.title,
                            id: "what-are-my-options-to-vote",
                            content: (0, c.tZ)("p", {
                                children: t.sections.governance.whatAreMyOptionsToVote.description
                            })
                        }, {
                            title: t.sections.governance.whatIsAPassCase.title,
                            id: "what-is-a-pass-case",
                            content: (0, c.BX)(c.HY, {
                                children: [(0, c.tZ)("p", {
                                    children: t.sections.governance.whatIsAPassCase.description1
                                }), (0, c.BX)("ul", {
                                    children: [(0, c.tZ)("li", {
                                        children: t.sections.governance.whatIsAPassCase.list1
                                    }), (0, c.tZ)("li", {
                                        children: t.sections.governance.whatIsAPassCase.list2
                                    })]
                                }), (0, c.tZ)("p", {
                                    children: t.sections.governance.whatIsAPassCase.description2
                                })]
                            })
                        }, {
                            title: t.sections.governance.whatAboutVotingPower.title,
                            id: "what-about-voting-power",
                            content: (0, c.tZ)("p", {
                                children: t.sections.governance.whatAboutVotingPower.description
                            })
                        }, {
                            title: t.sections.governance.areInactiveValidators.title,
                            id: "are-inactive-validators",
                            content: (0, c.tZ)("p", {
                                children: t.sections.governance.areInactiveValidators.description
                            })
                        }, {
                            title: t.sections.governance.whatAboutInheriting.title,
                            id: "what-about-inheriting",
                            content: (0, c.BX)("ul", {
                                children: [(0, c.tZ)("li", {
                                    children: t.sections.governance.whatAboutInheriting.list1
                                }), (0, c.tZ)("li", {
                                    children: t.sections.governance.whatAboutInheriting.list2
                                }), (0, c.tZ)("li", {
                                    children: t.sections.governance.whatAboutInheriting.list3
                                })]
                            })
                        }]
                    }, {
                        id: "claim",
                        title: t.sections.claim.title,
                        items: [{
                            title: t.sections.claim.whatIsAirdrop.title,
                            id: "what-is-airdrop",
                            content: (0, c.tZ)("p", {
                                children: t.sections.claim.whatIsAirdrop.description
                            })
                        }, {
                            title: t.sections.claim.whoIsEligible.title,
                            id: "who-is-eligible",
                            content: (0, c.BX)("p", {
                                children: [t.sections.claim.whoIsEligible.description1, (0, c.tZ)("a", {
                                    href: "https://hub.zetachain.com/claim",
                                    children: t.sections.claim.whoIsEligible.linkContent
                                }), t.sections.claim.whoIsEligible.description2]
                            })
                        }, {
                            title: t.sections.claim.whatWasSnapshotDate.title,
                            id: "what-was-snapshot-date",
                            content: (0, c.BX)("p", {
                                children: [t.sections.claim.whatWasSnapshotDate.description1, (0, c.tZ)(a.V, {
                                    href: "http://w3w.ai/",
                                    className: "text-green-200",
                                    children: t.sections.claim.whatWasSnapshotDate.linkContent1
                                }), t.sections.claim.whatWasSnapshotDate.description2, (0, c.tZ)(a.V, {
                                    displayUrl: s.Zt,
                                    href: s.G8,
                                    className: "text-green-200",
                                    children: t.sections.claim.whatWasSnapshotDate.linkContent2
                                }), t.sections.claim.whatWasSnapshotDate.description3]
                            })
                        }, {
                            title: t.sections.claim.whatFactors.title,
                            id: "what-factors",
                            content: (0, c.BX)("p", {
                                children: [t.sections.claim.whatFactors.description, (0, c.tZ)(a.V, {
                                    displayUrl: s.Zt,
                                    href: s.G8,
                                    className: "text-green-200",
                                    children: t.sections.claim.whatFactors.linkContent
                                }), "."]
                            })
                        }, {
                            title: t.sections.claim.howDoIClaim.title,
                            id: "how-do-i-claim",
                            content: (0, c.BX)("p", {
                                children: [t.sections.claim.howDoIClaim.description1, (0, c.tZ)("a", {
                                    href: "https://hub.zetachain.com/claim",
                                    children: t.sections.claim.howDoIClaim.linkContent
                                }), t.sections.claim.howDoIClaim.description2]
                            })
                        }, {
                            title: t.sections.claim.whatIfNotEligible.title,
                            id: "what-if-not-eligible",
                            content: (0, c.tZ)("p", {
                                children: t.sections.claim.whatIfNotEligible.description
                            })
                        }, {
                            title: t.sections.claim.whatIsZetaAccessPack.title,
                            id: "what-is-zeta-access-pack",
                            content: (0, c.tZ)("p", {
                                children: t.sections.claim.whatIsZetaAccessPack.description
                            })
                        }, {
                            title: t.sections.claim.isThereADeadline.title,
                            id: "is-there-a-deadline",
                            content: (0, c.tZ)("p", {
                                children: t.sections.claim.isThereADeadline.description
                            })
                        }, {
                            title: t.sections.claim.doesItCostGas.title,
                            id: "does-it-cost-gas",
                            content: (0, c.tZ)("p", {
                                children: t.sections.claim.doesItCostGas.description
                            })
                        }, {
                            title: t.sections.claim.whatNetwork.title,
                            id: "what-network",
                            content: (0, c.tZ)("p", {
                                children: t.sections.claim.whatNetwork.description
                            })
                        }, {
                            title: t.sections.claim.howCanIVerifyRealSite.title,
                            id: "how-do-i-verify",
                            content: (0, c.BX)("p", {
                                children: [t.sections.claim.howCanIVerifyRealSite.description1, (0, c.tZ)("a", {
                                    href: "https://hub.zetachain.com/claim",
                                    children: t.sections.claim.howCanIVerifyRealSite.linkContent
                                }), t.sections.claim.howCanIVerifyRealSite.description2]
                            })
                        }, {
                            title: t.sections.claim.ifINeedFurtherHelp.title,
                            id: "if-i-need-further-help",
                            content: (0, c.BX)("p", {
                                children: [t.sections.claim.ifINeedFurtherHelp.description1, (0, c.tZ)("a", {
                                    href: "mailto:support@zetachain.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t.sections.claim.ifINeedFurtherHelp.linkContent
                                }), t.sections.claim.ifINeedFurtherHelp.description2]
                            })
                        }]
                    }, {
                        title: t.sections.earnXp.title,
                        id: "xp",
                        items: [{
                            title: t.sections.earnXp.whatAreXp.title,
                            id: "what-are-xp",
                            content: (0, c.tZ)("p", {
                                children: t.sections.earnXp.whatAreXp.description
                            })
                        }, {
                            title: t.sections.earnXp.howDoIEarn.title,
                            id: "how-do-i-earn",
                            content: (0, c.tZ)("p", {
                                children: t.sections.earnXp.howDoIEarn.description
                            })
                        }, {
                            title: t.sections.earnXp.whyFeaturedAppsWorth.title,
                            id: "why-featured-apps-worth",
                            content: (0, c.tZ)("p", {
                                children: t.sections.earnXp.whyFeaturedAppsWorth.description
                            })
                        }, {
                            title: t.sections.earnXp.iCompletedAllTasks.title,
                            id: "i-completed-all-tasks",
                            content: (0, c.tZ)("p", {
                                children: t.sections.earnXp.iCompletedAllTasks.description
                            })
                        }, {
                            title: t.sections.earnXp.whatAreLevels.title,
                            id: "what-are-levels",
                            content: (0, c.tZ)("p", {
                                children: t.sections.earnXp.whatAreLevels.description
                            })
                        }, {
                            title: t.sections.earnXp.howLongWillXpExist.title,
                            id: "how-long-will-xp-exist",
                            content: (0, c.tZ)("p", {
                                children: t.sections.earnXp.howLongWillXpExist.description
                            })
                        }]
                    }, {
                        title: t.sections.other.title,
                        id: "other",
                        items: [{
                            title: t.sections.other.imADev.title,
                            id: "im-a-dev-who-wants-to-build-on-zetachain-now-what",
                            content: (0, c.BX)("p", {
                                children: [t.sections.other.imADev.description1, (0, c.tZ)("a", {
                                    href: "https://www.zetachain.com/docs/developers/overview",
                                    children: t.sections.other.imADev.linkContent
                                }), t.sections.other.imADev.description2]
                            })
                        }, {
                            title: t.sections.other.iNeedMoreSupport.title,
                            id: "i-need-more-support",
                            content: (0, c.BX)("p", {
                                children: [t.sections.other.iNeedMoreSupport.description1, (0, c.tZ)("a", {
                                    href: "mailto:support@zetachain.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t.sections.other.iNeedMoreSupport.linkContent1
                                }), t.sections.other.iNeedMoreSupport.description2, (0, c.tZ)(a.V, {
                                    href: "https://discord.gg/zetachain",
                                    className: "text-green-200",
                                    children: t.sections.other.iNeedMoreSupport.linkContent2
                                }), "."]
                            })
                        }, {
                            title: t.sections.other.howToStayUpdated.title,
                            id: "how-to-stay-updated",
                            content: (0, c.BX)("p", {
                                children: [t.sections.other.howToStayUpdated.description1, (0, c.tZ)(a.V, {
                                    href: "https://twitter.com/zetablockchain",
                                    className: "text-green-200",
                                    children: t.sections.other.howToStayUpdated.linkContent1
                                }), t.sections.other.howToStayUpdated.description2, (0, c.tZ)(a.V, {
                                    href: "https://discord.gg/zetachain",
                                    className: "text-green-200",
                                    children: t.sections.other.howToStayUpdated.linkContent2
                                }), t.sections.other.howToStayUpdated.description3]
                            })
                        }]
                    }]
                },
                d = i(31737),
                h = i(95453),
                g = i(60045),
                p = i(89218),
                w = i.n(p),
                u = function(e) {
                    var t = e.supportSections,
                        i = e.highlightedSectionId;
                    return (0, c.tZ)("aside", {
                        className: "text-sm text-grey-400 dark:text-grey-400 flex flex-col gap-8",
                        children: t.map(function(e) {
                            return (0, c.tZ)("div", {
                                className: "grid gap-2",
                                children: (0, c.tZ)(w(), {
                                    href: "#".concat(e.id),
                                    className: (0, g.default)("capitalize hover:underline", {
                                        "text-green-100": i === e.id
                                    }),
                                    onClick: function() {
                                        return (0, h.L9)(h._E.HubSupportSectionLinkClicked, (0, d.Z)({}, h.gp.Title, e.title))
                                    },
                                    children: e.title
                                })
                            }, e.id)
                        })
                    })
                },
                m = Math.max,
                f = Math.min,
                y = i(9295),
                S = i(29203),
                b = function(e, t, i) {
                    var n, o, r;
                    return t = (0, y.Z)(t), void 0 === i ? (i = t, t = 0) : i = (0, y.Z)(i), (n = e = (0, S.Z)(e)) >= f(o = t, r = i) && n < m(o, r)
                },
                Z = i(35837),
                v = i(70580),
                I = i(38746),
                x = function() {
                    var e = (0, I.Z)(function() {
                            return {
                                x: v.jU ? window.pageXOffset : 0,
                                y: v.jU ? window.pageYOffset : 0
                            }
                        }),
                        t = e[0],
                        i = e[1];
                    return (0, r.useEffect)(function() {
                        var e = function() {
                            i(function(e) {
                                var t = window.pageXOffset,
                                    i = window.pageYOffset;
                                return e.x !== t || e.y !== i ? {
                                    x: t,
                                    y: i
                                } : e
                            })
                        };
                        return e(), (0, v.on)(window, "scroll", e, {
                                capture: !1,
                                passive: !0
                            }),
                            function() {
                                (0, v.S1)(window, "scroll", e)
                            }
                    }, []), t
                },
                C = i(25294),
                k = i(62431),
                T = i(85243),
                D = function(e) {
                    var t = e.item,
                        i = (0, r.useState)(!1),
                        n = i[0],
                        o = i[1];
                    return (0, c.tZ)("article", {
                        className: "scroll-mt-20",
                        id: t.id,
                        children: (0, c.BX)("div", {
                            className: "grid gap-2 overflow-hidden",
                            children: [(0, c.BX)("button", {
                                type: "button",
                                onClick: function() {
                                    o(function(e) {
                                        return !e
                                    }), (0, h.L9)(h._E.HubSupportQuestionToggled, (0, d.Z)({}, h.gp.Title, t.title))
                                },
                                className: "text-left flex gap-2.5 items-center",
                                children: [(0, c.tZ)("p", {
                                    className: "text-xl",
                                    children: t.title
                                }), (0, c.tZ)(C.Bw0, {
                                    className: (0, g.default)("transition-transform", {
                                        "transform rotate-180": n
                                    })
                                })]
                            }), (0, c.tZ)(k.M, {
                                children: n && (0, c.tZ)(T.E.div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: "auto",
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    className: "text-sm grid gap-2",
                                    children: t.content
                                })
                            })]
                        })
                    })
                },
                A = function(e) {
                    var t = e.section,
                        i = e.setScrolledSectionId,
                        n = (0, r.useRef)(null),
                        s = x().y,
                        a = (0, o.cK)().upMd,
                        l = (0, Z.useRouter)();
                    return (0, r.useEffect)(function() {
                        l.asPath.includes("#".concat(t.id)) && i(t.id)
                    }, [i, t.id, l.asPath]), (0, r.useEffect)(function() {
                        if (n.current && a) {
                            var e = n.current,
                                o = e.offsetTop;
                            b(s, o - 100, o + e.scrollHeight - 100) && i(t.id)
                        }
                    }, [i, a, s, t.id]), (0, c.BX)("section", {
                        id: t.id,
                        className: "scroll-mt-24 grid gap-8",
                        ref: n,
                        children: [(0, c.tZ)("p", {
                            className: " uppercase font-medium text-sm text-green-100",
                            children: t.title
                        }), t.items.map(function(e) {
                            return (0, c.tZ)(D, {
                                item: e
                            }, e.id)
                        })]
                    })
                },
                B = (0, n.Z)("div", {
                    target: "e1wi9t3z0"
                })({
                    name: "1e0l5nu",
                    styles: "display:grid;gap:2rem; a{--tw-text-opacity:1;color:rgb(0 188 141 / var(--tw-text-opacity));:hover{text-decoration-line:underline;};}ul{list-style-position:inside;list-style-type:disc;;}"
                }),
                N = function() {
                    var e = (0, r.useState)(null),
                        t = e[0],
                        i = e[1],
                        n = (0, o.AA)().copy,
                        s = l({
                            copy: n.hub.supportPage
                        });
                    return (0, c.BX)("div", {
                        className: "min-h-screen text-grey-900 dark:text-grey-50 md:grid grid-cols-[2fr_1fr]",
                        children: [(0, c.BX)("div", {
                            className: "pt-8 pb-32 border-r border-r-grey-200 dark:border-r-grey-700",
                            children: [(0, c.tZ)("p", {
                                className: "px-8 mb-16 font-medium text-4xl",
                                children: n.hub.supportPage.title
                            }), (0, c.tZ)(B, {
                                children: s.map(function(e, t) {
                                    return (0, c.BX)(r.Fragment, {
                                        children: [(0, c.tZ)("div", {
                                            className: "px-8",
                                            children: (0, c.tZ)(A, {
                                                section: e,
                                                setScrolledSectionId: i
                                            }, e.id)
                                        }), t < s.length - 1 && (0, c.tZ)("hr", {
                                            className: "text-grey-200 dark:text-grey-700"
                                        })]
                                    }, e.id)
                                })
                            })]
                        }), (0, c.tZ)("div", {
                            className: "hidden md:block sticky self-start top-16 p-8",
                            children: (0, c.tZ)(u, {
                                supportSections: s,
                                highlightedSectionId: t
                            })
                        })]
                    })
                }
        },
        90017: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/support", function() {
                return i(99830)
            }])
        },
        9295: function(e, t, i) {
            "use strict";
            var n = i(29203),
                o = 1 / 0;
            t.Z = function(e) {
                return e ? (e = (0, n.Z)(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
            }
        },
        29203: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return p
                }
            });
            var n = /\s/,
                o = function(e) {
                    for (var t = e.length; t-- && n.test(e.charAt(t)););
                    return t
                },
                r = /^\s+/,
                s = i(37275),
                a = i(70054),
                c = 0 / 0,
                l = /^[-+]0x[0-9a-f]+$/i,
                d = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                g = parseInt,
                p = function(e) {
                    if ("number" == typeof e) return e;
                    if ((0, a.Z)(e)) return c;
                    if ((0, s.Z)(e)) {
                        var t, i = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = (0, s.Z)(i) ? i + "" : i
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = (t = e) ? t.slice(0, o(t) + 1).replace(r, "") : t;
                    var n = d.test(e);
                    return n || h.test(e) ? g(e.slice(2), n ? 2 : 8) : l.test(e) ? c : +e
                }
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], function() {
            return e(e.s = 90017)
        }), _N_E = e.O()
    }
]);