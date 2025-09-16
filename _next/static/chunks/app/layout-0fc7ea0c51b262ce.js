(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        11730: (e, t, s) => {
            Promise.resolve().then(s.t.bind(s, 30347, 23)), Promise.resolve().then(s.bind(s, 19345)), Promise.resolve().then(s.bind(s, 83488)), Promise.resolve().then(s.bind(s, 89522))
        },
        19345: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => c
            });
            var r = s(95155),
                i = s(48173),
                a = s.n(i),
                n = s(5565),
                l = s(18554);
            let c = () => (0, r.jsx)("div", {
                className: "w-full flex justify-center px-4 py-3 bg-[#0D0D0D]",
                children: (0, r.jsxs)("div", {
                    className: "xl:max-w-6xl gap-3 w-full flex justify-between items-center",
                    children: [(0, r.jsxs)(a(), {
                        href: "https://www.gigacat.site/",
                        className: "flex items-center gap-1 relative sm:gap-2",
                        children: [(0, r.jsx)("div", {
                            className: "logohead flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 relative",
                            children: (0, r.jsx)(n.default, {
                                alt: "logo",
                                layout: "fill",
                                objectFit: "contain",
                                objectPosition: "center",
                                 srcSet: "logo.jpg"
                            })
                        }), (0, r.jsx)("div", {
                            className: "sm:text-2xl text-lg font-semibold text-white",
                            children: "GIGACAT"
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex gap-3 sm:gap-4 font-extrabold justify-between items-center text-white w-fit dark h-14 sm:h-20",
                        children: [(0, r.jsxs)(a(), {
                            href: "https://x.com/GigaCatBep20",
                            className: "flex items-center gradient-gray dark",
                            children: [(0, r.jsx)("span", {
                                className: "hidden sm:inline-block",
                                children: " X (Twitter)"
                            }), (0, r.jsx)("span", {
                                className: "relative h-7 w-7 sm:hidden flex justify-center items-center",
                                children: (0, r.jsx)(n.default, {
                                    alt: " ",
                                    src: "/X.png",
                                    objectFit: "contain",
                                    layout: "fill",
                                    objectPosition: "center",
                                    quality: 100
                                })
                            })]
                        }), (0, r.jsxs)(a(), {
                            href: "https://t.me/GigaCat_BSC",
                            className: "flex flex-row items-center gradient-blue  dark",
                            children: [(0, r.jsx)("span", {
                                className: "hidden sm:inline-block",
                                children: "Telegram"
                            }), (0, r.jsx)("span", {
                                className: "relative h-7 w-7 sm:hidden flex justify-center items-center",
                                children: (0, r.jsx)(n.default, {
                                    alt: " ",
                                    src: "/Telegram.png",
                                    objectFit: "contain",
                                    layout: "fill",
                                    objectPosition: "center",
                                    quality: 100
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex justify-center items-center font-normal border-2 rounded-full h-9 sm:h-10 font-ClashDisplay bg-[#FF2727] relative overflow-hidden connect",
                            children: (0, r.jsx)("div", {
                                className: "w-auto bg-[#FF2727]",
                                children: (0, r.jsx)(l.A, {})
                            })
                        })]
                    })]
                })
            })
        },
        83488: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => j
            });
            var r = s(95155),
                i = s(82825),
                a = s(63933),
                n = s(82602),
                l = s(79372);
            let c = "182e4ea4b15ddfe7e252571c2a21ad09";
            if (!c) throw Error("Project ID is not defined");
            let o = [l.NBY],
                d = new n.D({
                    storage: (0, i.wE)({
                        storage: a.iM
                    }),
                    ssr: !0,
                    projectId: c,
                    networks: o
                });
            d.wagmiConfig;
            var f = s(16977),
                u = s(35906),
                h = s(3178);
            s(12115);
            var m = s(88395);
            let x = new f.E;
            if (!c) throw Error("Project ID is not defined");
            (0, h.sX)({
                adapters: [d],
                projectId: c,
                networks: [l.NBY],
                defaultNetwork: l.NBY,
                metadata: {
                    name: "gigacat-staking",
                    description: "GIGACAT Staking",
                    url: "https://dao.ocicat.club",
                    icons: ["https://dao.ocicat.club/logo.svg"]
                },
                features: {
                    analytics: !0
                }
            });
            let j = function (e) {
                let {
                    children: t,
                    cookies: s
                } = e, i = (0, a.T2)(d.wagmiConfig, s);
                return (0, r.jsx)(m.x, {
                    config: d.wagmiConfig,
                    initialState: i,
                    children: (0, r.jsx)(u.Ht, {
                        client: x,
                        children: t
                    })
                })
            }
        },
        18554: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var r = s(95155);

            function i() {
                return (0, r.jsx)("appkit-button", {})
            }
        },
        89522: (e, t, s) => {
            "use strict";
            s.d(t, {
                ProposalsProvider: () => c,
                h: () => o
            });
            var r = s(95155),
                i = s(12115),
                a = s(75828);
            let n = (0, a.createServerReference)("00de4fc8abfc0837fe6c59d4e41dd2c45378d8e5fb", a.callServer, void 0, a.findSourceMapURL, "GetProposals"),
                l = (0, i.createContext)(void 0);

            function c(e) {
                let {
                    children: t
                } = e, [s, a] = (0, i.useState)([]), c = (0, i.useRef)(0), o = async () => {
                    try {
                        let e = await n();
                        if (!e || 0 === e.length) throw Error("Proposals undefined or empty");
                        a(e), c.current = 0
                    } catch (e) {
                        console.error("Error fetching proposals:", e), c.current < 3 && (c.current += 1, setTimeout(o, 3e3))
                    }
                };
                return (0, i.useEffect)(() => {
                    o()
                }, []), (0, r.jsx)(l.Provider, {
                    value: {
                        proposals: s,
                        fetchProposals: o
                    },
                    children: t
                })
            }

            function o() {
                let e = (0, i.useContext)(l);
                if (!e) throw Error("useProposals must be used within a ProposalsProvider");
                return e
            }
        },
        30347: () => {}
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [7690, 7970, 6673, 808, 7554, 8441, 1517, 7358], () => t(11730)), _N_E = e.O()
    }
]);