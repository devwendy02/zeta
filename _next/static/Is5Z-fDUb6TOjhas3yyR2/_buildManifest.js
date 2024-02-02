self.__BUILD_MANIFEST = function(s, a, e, c, t, n, i, d, o, p) {
    return {
        __rewrites: {
            afterFiles: [{
                has: [{
                    type: d,
                    key: "o",
                    value: "(?<orgid>\\d*)"
                }, {
                    type: d,
                    key: "p",
                    value: "(?<projectid>\\d*)"
                }],
                source: "/:nextInternalLocale(en|es\\-MX|hi\\-IN|ja\\-JP|ko\\-KR|ru\\-RU|zh\\-CN|zh\\-TW|vi\\-VN|id\\-ID|tr\\-TR)/monitoring(/?)",
                destination: void 0
            }],
            beforeFiles: [],
            fallback: []
        },
        "/": ["static/chunks/pages/index-9dfd058de0453047.js"],
        "/404": ["static/chunks/pages/404-6af791d530d86e7c.js"],
        "/451": ["static/chunks/pages/451-be7fafa450b77b22.js"],
        "/500": ["static/chunks/pages/500-e74a07f766f13e4b.js"],
        "/_error": ["static/chunks/pages/_error-3ac163a95272eb19.js"],
        "/claim": ["static/chunks/2737-6e0d1210f370e8fa.js", "static/chunks/pages/claim-cc172ea675d5c80e.js"],
        "/claim/[genesisCardId]": ["static/chunks/pages/claim/[genesisCardId]-6540173f4b1a3b7d.js"],
        "/ecosystem": ["static/chunks/1849-51a74bd558652682.js", "static/chunks/pages/ecosystem-153cdebf0896784e.js"],
        "/governance": ["static/chunks/5098-37e25c874b700268.js", "static/chunks/pages/governance-03f0b3ff16873357.js"],
        "/governance/proposal/[proposalId]": [s, a, e, c, "static/chunks/1430-beedbc3b9e34c023.js", t, "static/chunks/pages/governance/proposal/[proposalId]-0d3b6fd8bacec96f.js"],
        "/pools": [o, "static/chunks/pages/pools-3a4b36b270de101a.js"],
        "/pools/[poolId]": ["static/chunks/4279-b3c9d5ec23a663ca.js", n, p, o, "static/chunks/pages/pools/[poolId]-0ac71264108dc4a9.js"],
        "/send": [n, p, "static/chunks/pages/send-bbe016d7367d10d2.js"],
        "/settings": ["static/chunks/pages/settings-31491afad8cf1fc6.js"],
        "/staking": [s, a, e, c, i, t, "static/chunks/pages/staking-75d1c9851a810e0d.js"],
        "/staking/[validatorId]": [s, a, e, c, i, "static/chunks/5820-167883e8c2ae7a71.js", t, "static/chunks/pages/staking/[validatorId]-8f8989f204162bdf.js"],
        "/support": ["static/chunks/pages/support-d148126b9366d82f.js"],
        "/transactions": ["static/chunks/pages/transactions-c4e8c696e2fe8808.js"],
        "/xp": [i, "static/chunks/5155-5d7284960cc0b449.js", n, "static/chunks/pages/xp-f39c652dc72ed258.js"],
        sortedPages: ["/", "/404", "/451", "/500", "/_app", "/_error", "/claim", "/claim/[genesisCardId]", "/ecosystem", "/governance", "/governance/proposal/[proposalId]", "/pools", "/pools/[poolId]", "/send", "/settings", "/staking", "/staking/[validatorId]", "/support", "/transactions", "/xp"]
    }
}("static/chunks/79d2cf1e-075e45eb2cf73c2f.js", "static/chunks/c597e42b-29aad9621a58de23.js", "static/chunks/5859-04212142b972e35f.js", "static/chunks/490-4e9295b394b716ae.js", "static/chunks/1362-e3cce91e9ab41c27.js", "static/chunks/4397-f0933b824884ec1b.js", "static/chunks/1910-d7540376aa7957c4.js", "query", "static/chunks/1800-825803dd35102f47.js", "static/chunks/7975-672cdf5292236a4d.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();