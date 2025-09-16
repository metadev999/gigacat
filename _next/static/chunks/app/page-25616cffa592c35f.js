(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974], {
        68956: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 54027)), Promise.resolve().then(a.bind(a, 73850)), Promise.resolve().then(a.bind(a, 75482)), Promise.resolve().then(a.bind(a, 28629))
        },
        54027: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => x
            });
            var n = a(95155),
                s = a(12115),
                r = a(89984),
                i = a(35965),
                l = a(52842),
                o = a(81979),
                d = a(9094),
                u = a(14046);
            a(85716);
            var c = a(22417),
                p = a(21567);
            let m = l.a.OCICAT_TOKEN_ADDRESS,
                y = l.a.OCICAT_STAKING_CONTRACT_ADDRESS,
                f = l.a.OCICAT_DAO_ADDRESS,
                x = function () {
                    let {
                        data: e
                    } = (0, r.Q)({
                        address: y,
                        abi: c,
                        functionName: "totalStaked"
                    }), {
                        data: t
                    } = (0, r.Q)({
                        address: m,
                        abi: o,
                        functionName: "totalSupply"
                    }), {
                        data: a
                    } = (0, r.Q)({
                        address: f,
                        abi: d,
                        functionName: "totalRewardsPaid"
                    }), {
                        address: l
                    } = (0, i.F)(), [x, b] = (0, s.useState)(!1), [h, g] = (0, s.useState)(0), [N, w] = (0, s.useState)(""), [v, j] = (0, s.useState)(0), [T, C] = (0, s.useState)("24 hr"), S = "number" == typeof e ? e / 1e6 : e ? Number(e) / 1e6 : 0, I = new Date("2025-05-02"), A = Math.floor((new Date().getTime() - I.getTime()) / 864e5), O = 1440 * Math.min(1 + .0015 * A, 2) * S * A + Number(a || 0), k = {
                        "24 hr": 1440,
                        Week: 10080,
                        Month: 43200,
                        Year: 525600
                    };
                    return (0, s.useEffect)(() => {
                        l && (j(h * k["24 hr"]), C("24 hr"))
                    }, [l]), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.N9, {
                            position: "top-right",
                            autoClose: 4e3,
                            hideProgressBar: !1,
                            newestOnTop: !1,
                            closeOnClick: !0,
                            rtl: !1,
                            pauseOnFocusLoss: !0,
                            draggable: !0,
                            pauseOnHover: !0,
                            theme: "dark",
                            toastClassName: "!bg-[#222] !text-white rounded-lg"
                        }), (0, n.jsxs)("div", {
                            className: "bg-[#0c0c0c] bg-cover bg-no-repeat w-full overflow-hidden transition-all relative",
                            children: [(0, n.jsx)("div", {
                                className: "backmain absolute inset-0 bg-gradient-to-b from-[#ffffff]/10 via-[#0c0c0c]/30 to-[#000000]/80 opacity-80 z-0"
                            }), (0, n.jsxs)("div", {
                                className: "container mx-auto px-3 relative z-10",
                                children: [(0, n.jsx)("div", {
                                    className: "absolute md:-bottom-[55%] -bottom-36 left-1/2 transform -translate-x-1/2 w-[840px] md:w-[950px] h-full",
                                    children: (0, n.jsx)("div", {
                                        className: "bg-[url('../../public/cat_bg.jpg')] md:bg-center bg-top bg-auto md:bg-cover bg-no-repeat w-full h-screen md:h-full opacity-[0.2]"
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "relative text-center mt-9 md:mt-[50px]",
                                    children: [(0, n.jsx)("h1", {
                                        className: "sm:text-5xl text-3xl md:text-6xl font-extrabold mx-auto text-white tracking-wide",
                                        children: "GIGACAT DAO Staking"
                                    }), (0, n.jsx)("p", {
                                        className: "mt-5 sm:max-w-[547px] mx-auto text-sm sm:text-base md:text-xl text-gray-300",
                                        children: "Contract Address: 0x317a4e30bc828b69b0beac8da894d335a80f1110"
                                        
                                    }), (0, n.jsxs)("div", {
                                        className: "mt-[30px] mx-auto lg:flex-nowrap flex-wrap flex w-[90%] overflow-x-hidden sm:w-fit items-center gap-3 md:gap-4 justify-center border rounded-3xl border-[#FF3F3F] py-6 md:px-10 px-0 sm:px-6 bg-[#220808]",
                                        children: [(0, n.jsx)("div", {
                                            className: " w-fit",
                                            children: (0, n.jsxs)("div", {
                                                className: "flex items-center flex-col gap-3 justify-center",
                                                children: [(0, n.jsx)("p", {
                                                    className: "sm:text-[15px] text-xs text-[#FF6666] px-5",
                                                    children: "Total Staked"
                                                }), (0, n.jsx)("span", {
                                                    className: "sm:text-base text-sm font-semibold text-white flex items-center justify-center gap-2 px-5",
                                                    children: e ? (0, n.jsxs)(n.Fragment, {
                                                        children: [(0, n.jsx)("span", {
                                                            children: (0, p.GM)(String("number" == typeof e ? e / 1e6 : e ? Number(e) / 1e6 : 0)) || (0, n.jsx)("span", {
                                                                className: "inline-block h-4 w-40 animate-pulse rounded bg-gray-700"
                                                            })
                                                        }), (0, n.jsx)("span", {
                                                            children: "(".concat(isNaN(Number(e)) || isNaN(Number(t)) || !t ? "0.00" : (Number(e) / Number(t) * 100).toFixed(2), "%)")
                                                        })]
                                                    }) : (0, n.jsx)("span", {
                                                        className: "inline-block h-4 w-40 animate-pulse rounded bg-gray-700"
                                                    })
                                                })]
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: " w-fit",
                                            children: (0, n.jsxs)("div", {
                                                className: "flex items-center flex-col gap-3 justify-center",
                                                children: [(0, n.jsx)("p", {
                                                    className: "sm:text-[15px] text-xs text-[#FF6666] px-5",
                                                    children: "Circulating Supply"
                                                }), (0, n.jsx)("span", {
                                                    className: "sm:text-base text-sm font-semibold text-white px-5",
                                                    children: t ? (0, p.GM)(String(Number("1000000000"))) : (0, n.jsx)("span", {
                                                        className: "inline-block h-4 w-40 animate-pulse rounded bg-gray-700"
                                                    })
                                                })]
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: " w-fit",
                                            children: (0, n.jsxs)("div", {
                                                className: "flex items-center flex-col gap-3 justify-center",
                                                children: [(0, n.jsx)("p", {
                                                    className: "sm:text-[15px] text-xs text-[#FF6666] px-5",
                                                    children: "Total Supply"
                                                }), (0, n.jsx)("span", {
                                                    className: "sm:text-base text-sm font-semibold text-white px-5",
                                                      children: (0, p.GM)(String((0, p.h_)(Number(t), 6))) || (0, n.jsx)("span", {
                                                        className: "inline-block h-4 w-40 animate-pulse rounded bg-gray-700"
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "mt-9 md:mt-[50px] flex justify-center gap-5",
                                        children: (0, n.jsxs)("div", {
                                            className: "bg-[#222222] rounded-[10px] p-2 flex justify-between items-center text-xs sm:text-sm gap-2",
                                            children: [(0, n.jsx)("span", {
                                                className: "",
                                                children: "Total Rewards emitted"
                                            }), (0, n.jsx)("span", {
                                                children: "|"
                                            }), (0, n.jsxs)("span", {
                                               children: [(0, p.GM)(String((O / 1e6).toFixed(2))) || (0, n.jsx)("span", {
                                                    className: "inline-block h-4 w-40 animate-pulse rounded bg-gray-700"
                                                }), " "]
                                            })]
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "flex items-center justify-center mt-4 mb-9 md:mb-[100px]",
                                        children: (0, n.jsx)("button", {
                                            className: "bg-[#FF2727] opacity-80 text-[#fffff] rounded-[9px] px-5 py-2",
                                            onClick: function () {
                                                g(Number(N)), j(h * k[T]), b(!0)
                                            },
                                            children: "Calculator"
                                        })
                                    })]
                                })]
                            })]
                        }), x && (0, n.jsx)("div", {
                            className: "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm",
                            onClick: () => b(!1),
                            children: (0, n.jsxs)("div", {
                                className: "bg-[#202020] p-6 rounded-lg shadow-lg w-[90%] text-[#4B4B4B] max-w-md",
                                onClick: e => e.stopPropagation(),
                                children: [(0, n.jsx)("h2", {
                                    className: "text-xl font-bold mb-4 mt-2 text-[#FFFFFF]",
                                    children: "GIGACAT Calculator"
                                }), (0, n.jsxs)("div", {
                                    className: "flex justify-between focus:border focus:border-[#FF2727] rounded-[5px] items-center gap-3 px-3 mb-4 h-14 bg-white relative",
                                    children: [(0, n.jsx)("input", {
                                        className: "flex font-semibold transparent h-full w-full pt-3",
                                        type: "number",
                                        value: N,
                                        placeholder: "Enter GIGACAT amount",
                                        onChange: e => {
                                            let t = e.target.value;
                                            w(t);
                                            let a = Number(t) / 1e6;
                                            g(a), j(a * k[T])
                                        }
                                    }), (0, n.jsx)("span", {
                                        className: "font-medium",
                                        children: "GIGACAT"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex justify-between focus:border focus:border-[#FF2727] rounded-[5px] items-center gap-3 px-3 mb-4 h-14 bg-white relative",
                                    children: [(0, n.jsx)("input", {
                                        className: "flex font-semibold transparent h-full w-full pt-3",
                                        value: v.toFixed(2),
                                        type: "text",
                                        readOnly: !0,
                                        title: "Calculated reward in Ocicat"
                                    }), (0, n.jsx)("span", {
                                        className: "font-medium",
                                        children: "USD"
                                    }), (0, n.jsxs)("select", {
                                        className: "absolute right-3 bg-white rounded px-2 py-1",
                                        "aria-label": "Select time period",
                                        onChange: e => {
                                            let t = e.target.value;
                                            C(t), j(h * k[t])
                                        },
                                        value: T,
                                        children: [(0, n.jsx)("option", {
                                            value: "24 hr",
                                            children: "24 hr"
                                        }), (0, n.jsx)("option", {
                                            value: "Week",
                                            children: "Week"
                                        }), (0, n.jsx)("option", {
                                            value: "Month",
                                            children: "Month"
                                        }), (0, n.jsx)("option", {
                                            value: "Year",
                                            children: "Year"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        73850: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => i
            });
            var n = a(95155),
                s = a(12115),
                r = a(11536);
            let i = () => {
                let [e, t] = (0, s.useState)(null), [a, i] = (0, s.useState)(!1), l = a => {
                    t(e === a ? null : a)
                };
                return (0, n.jsx)("section", {
                    className: "py-16 bg-black px-4 lg:px-20",
                    children: (0, n.jsxs)("div", {
                        className: "max-w-4xl px-2 sm:px-4 mx-auto border border-gray-600 rounded-2xl overflow-hidden transition-class ".concat(a ? "max-h-[2000px] py-6" : "max-h-16 py-4"),
                        children: [(0, n.jsxs)("div", {
                            className: "flex justify-center gap-2 items-center px-4 cursor-pointer",
                            onClick: () => {
                                i(!a)
                            },
                            children: [(0, n.jsx)("h2", {
                                className: "sm:text-3xl text-2xl md:text-4xl font-bold text-white",
                                children: "FAQs"
                            }), (0, n.jsx)("span", {
                                className: " transition-transform duration-300 ".concat(a ? "rotate-180" : "rotate-0"),
                                children: (0, n.jsx)(r.Vr3, {
                                    className: "w-6 h-6"
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: "space-y-4 mt-8 px-2 ".concat(!a && "hidden"),
                            children: [{
                                question: "What is Dao Staking?",
                                answer: "Dao Staking is a program that rewards GIGACAT stakers with DAO POWER. Your strength in the ecosystem is dependent on your DAO POWER"
                            }, {
                                question: "How does the DAO reward voters?",
                                answer: "The DAO rewards voters who are on the winning side of the proposal. The weight of winning lies on each total DAO POWER."
                            }, {
                                question: "How do I claim my rewards?",
                                answer: "To claim your rewards, connect your wallet to app and navigate to the reward section. Follow the prompt to claim your tokens. Your reward is based on your stake."
                            }, {
                                question: "What benefit is included in my stake?",
                                answer: "You receive reward from daily emissions and reward for DAO participation. The more points the more advantage. Your points qualify you for future airdrops from partner projects and the ecosystem."
                            }, {
                                question: "Can I stake multiple tokens?",
                                answer: "Yes, you can stake multiple times. However, the rewards must be claimed before you stake again to avoid reward reset to zero. Secondly, staking more increases your DAO POWER."
                            }, {
                                question: "What happens if I unstake my tokens?",
                                answer: "If you unstake your tokens, you will stop earning rewards and lose your points collected. Your voting power will reset to zero."
                            }, {
                                question: "Is there a penalty for UNSTAKING and EMERGENCY WITHDRAW?",
                                answer: "UNSTAKING has a cool-down period of 14 days. After the period you can withdraw without penalty, but all your points are lost. EMERGENCY WITHDRAW has a 30% penalty and is instant. Note: There is a reflection on the token."
                            }].map((t, a) => (0, n.jsxs)("div", {
                                className: "bg-[#0c0c0c] border border-gray-800 rounded-lg hover:border-red-600 transition-all duration-300",
                                children: [(0, n.jsxs)("button", {
                                    onClick: () => l(a),
                                    className: "w-full flex justify-between items-center p-6 text-left focus:outline-none",
                                    children: [(0, n.jsx)("p", {
                                        className: "sm:text-lg text-base font-semibold text-white",
                                        children: t.question
                                    }), (0, n.jsx)("span", {
                                        className: "text-red-600",
                                        children: e === a ? (0, n.jsx)(r.iu5, {
                                            className: "w-6 h-6"
                                        }) : (0, n.jsx)(r.OiG, {
                                            className: "w-6 h-6"
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "overflow-hidden transition-all duration-300 ".concat(e === a ? "max-h-44" : "max-h-0"),
                                    children: (0, n.jsx)("p", {
                                        className: "px-6 pb-6 text-white/70",
                                        children: t.answer
                                    })
                                })]
                            }, a))
                        })]
                    })
                })
            }
        },
        75482: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => C
            });
            var n = a(95155),
                s = a(14046);
            a(85716);
            var r = a(72891),
                i = a(12115),
                l = a(5565),
                o = a(37295),
                d = a(54700),
                u = a(75828);
            let c = (0, u.createServerReference)("40c2dcbe4851b83f9e0e4e2989284bb59ac56fa44c", u.callServer, void 0, u.findSourceMapURL, "CreateProposal");
            var p = a(9094),
                m = a(52842),
                y = a(35965),
                f = a(84603),
                x = a(41047),
                b = a(57342),
                h = a(76046),
                g = a(89522),
                N = a(21567);

            function w(e) {
                let {
                    proposalId: t
                } = e, a = (0, b.U)(), s = m.a.OCICAT_DAO_ADDRESS, [r, l] = (0, i.useState)(null);
                return (0, i.useEffect)(() => {
                    async function e() {
                        try {
                            let [, , , , , , , , e] = await (0, x.J)(a, {
                                address: s,
                                abi: p,
                                functionName: "getProposal",
                                args: [t]
                            });
                            l(e)
                        } catch (e) {
                            console.error("Error fetching total votes:", e)
                        }
                    }
                    t && e()
                }, [t]), (0, n.jsx)("span", {
                    className: "flex text-center justify-start items-center min-w-40",
                    children: null !== r ? r.toString() : (0, n.jsx)("span", {
                        className: "inline-block h-4 w-24 animate-pulse rounded bg-gray-700"
                    })
                })
            }
            var v = a(53883);

            function j(e) {
                let {
                    proposalId: t
                } = e, a = (0, b.U)(), s = m.a.OCICAT_DAO_ADDRESS, [r, l] = (0, i.useState)(BigInt(0)), [o, d] = (0, i.useState)(BigInt(0));
                (0, i.useEffect)(() => {
                    async function e() {
                        try {
                            let [, , , , e, n] = await (0, x.J)(a, {
                                address: s,
                                abi: p,
                                functionName: "getProposal",
                                args: [t]
                            });
                            l(e), d(n)
                        } catch (e) {
                            console.error("Error fetching vote data:", e)
                        }
                    }
                    t && e()
                }, [t]);
                let u = Number(r) + Number(o),
                    c = 0 === u ? 0 : Number(r) / u * 100;
                return (0, n.jsx)("span", {
                    className: "relative transition-class bg-[#FF2727] h-2 rounded-full overflow-hidden w-32",
                    children: (0, n.jsx)("span", {
                        className: "absolute transition-class rounded-full left-0 top-0 bg-[#00B756] h-full",
                        style: {
                            width: "".concat(c, "%")
                        }
                    })
                })
            }

            function T(e) {
                let {
                    proposalId: t
                } = e, a = (0, b.U)(), s = m.a.OCICAT_DAO_ADDRESS, [r, l] = (0, i.useState)(null), [o, d] = (0, i.useState)(null);
                if ((0, i.useEffect)(() => {
                        async function e() {
                            try {
                                let [, , e, n] = await (0, x.J)(a, {
                                    address: s,
                                    abi: p,
                                    functionName: "getProposal",
                                    args: [t]
                                });
                                l(e), d(n)
                            } catch (e) {
                                console.error("Error fetching proposal timing:", e)
                            }
                        }
                        t && e()
                    }, [t]), !r || !o) return (0, n.jsxs)("div", {
                    className: "flex h-10 py-3 flex-col justify-start w-full items-start min-w-40",
                    children: [(0, n.jsx)("div", {
                        className: "font-extrabold text-sm",
                        children: (0, n.jsx)("span", {
                            className: "inline-block h-4 w-24 animate-pulse rounded bg-gray-700"
                        })
                    }), (0, n.jsx)("div", {
                        className: "text-[#414141] font-extrabold text-xs",
                        children: (0, n.jsx)("span", {
                            className: "inline-block h-4 w-16 animate-pulse rounded bg-gray-700"
                        })
                    })]
                });
                let u = new Date((Number(r) + Number(o)) * 1e3);
                return (0, n.jsxs)("div", {
                    className: "flex h-10 py-3 flex-col justify-start w-full items-start min-w-40",
                    children: [(0, n.jsxs)("div", {
                        className: "font-extrabold text-sm",
                        children: [u.toLocaleString("en-US", {
                            month: "long"
                        }), " ", u.getDate(), ", ", u.getFullYear()]
                    }), (0, n.jsx)("div", {
                        className: "text-[#414141] font-extrabold text-xs",
                        children: u.toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: !0
                        })
                    })]
                })
            }
            let C = function () {
                let e = (0, h.useRouter)(),
                    t = (0, b.U)(),
                    a = m.a.OCICAT_DAO_ADDRESS,
                    u = m.a.OCICAT_DAO_ADMIN_ADDRESS,
                    {
                        isConnected: C,
                        address: S
                    } = (0, y.F)(),
                    {
                        writeContract: I
                    } = (0, f.x)(),
                    [A, O] = (0, i.useState)(!1),
                    [k, D] = (0, i.useState)(""),
                    [_, M] = (0, i.useState)(!1),
                    [F, R] = (0, i.useState)(""),
                    [E, P] = (0, i.useState)(""),
                    [U, B] = (0, i.useState)(""),
                    [Q, Y] = (0, i.useState)(""),
                    [L, W] = (0, i.useState)(!1),
                    z = (0, i.useRef)(null),
                    [q, K] = (0, i.useState)(null),
                    J = q ? URL.createObjectURL(q) : "/cat_bg.jpg",
                    {
                        proposals: G,
                        fetchProposals: H
                    } = (0, g.h)(),
                    [V, X] = (0, i.useState)("");
                async function Z(e) {
                    try {
                        let n = await (0, x.J)(t, {
                            address: a,
                            abi: p,
                            functionName: "isCoAdmin",
                            args: [e]
                        });
                        return n && W(!0), !!n
                    } catch (e) {
                        return console.error("Error reading isCoAdmin:", e), !1
                    }
                }
                async function $() {
                    if (O(!0), !C && !S) return s.oR.error("Please connect your wallet first."), O(!1), null;
                    try {
                        return new Promise((e, t) => {
                            I({
                                address: a,
                                abi: p,
                                functionName: "createProposal",
                                args: [F, k, BigInt(1e6 * Number(U)), BigInt(1e18 * Number(Q))]
                            }, {
                                onSuccess: t => {
                                    e(t)
                                },
                                onError: e => {
                                    console.error("Error creating proposal:", e), s.oR.error("Failed to create proposal: ".concat(e)), O(!1), t(e)
                                }
                            })
                        })
                    } catch (e) {
                        return console.error("Unexpected error creating proposal:", e), s.oR.error("Unexpected error: ".concat(e)), O(!1), null
                    }
                }
                async function ee() {
                    var e, a;
                    let n;
                    let s = await $();
                    if (!s) {
                        console.error("Failed to retrieve transaction hash.");
                        return
                    }
                    await new Promise(e => setTimeout(e, 3e3));
                    for (let e = 0; e < 10 && !(n = await (0, r.h)(t, {
                            hash: s
                        })); e++) await new Promise(e => setTimeout(e, 2e3));
                    if (!n) return;
                    let i = (0, o.S)((0, d.YW)("ProposalCreated(uint256,string,address)")),
                        l = null === (e = n.logs) || void 0 === e ? void 0 : e.find(e => e.topics && e.topics[0] === i);
                    if (l && (null === (a = l.topics) || void 0 === a ? void 0 : a[1])) return BigInt(l.topics[1]).toString();
                    console.error("Proposal ID not found in transaction logs.")
                }
                async function et(e) {
                    if (O(!0), !S) {
                        s.oR.error("Please connect wallet to create proposal"), O(!1);
                        return
                    }
                    try {
                        let t = async () => {
                            var t;
                            if (!e) return "/cat_bg.jpg";
                            let a = new FormData;
                            a.append("file", e);
                            let n = await fetch("/api/upload", {
                                    method: "POST",
                                    body: a
                                }),
                                s = await n.json();
                            return null !== (t = s.ipfsUrl) && void 0 !== t ? t : "/cat_bg.jpg"
                        }, a = await t(), n = await ee();
                        if (!n) {
                            s.oR.error("Failed to retrieve proposal ID from transaction receipt."), O(!1);
                            return
                        }
                        let r = {
                                title: F,
                                image: a,
                                distributionAmount: Number(U),
                                description: k,
                                creator: null != S ? S : "",
                                proposalId: n,
                                createdDate: new Date().toISOString()
                            },
                            i = await c(r);
                        (null == i ? void 0 : i.success) ? (O(!1), M(!1), s.oR.success("Proposal successfully recorded!"), H()) : (s.oR.error("Proposal creation failed. Please try again."), console.log("Proposal creation failed."))
                    } catch (e) {
                        s.oR.error("API request error: ".concat(e instanceof Error ? e.message : String(e))), console.error("API request error:", e)
                    } finally {
                        O(!1)
                    }
                }(0, i.useEffect)(() => {
                    S && Z(S)
                }, [S, C]);
                let ea = ["Proposals (".concat(G.length, ")")];
                (0, i.useEffect)(() => {
                    G && P(ea[0])
                }, [G]);
                let en = G.filter(e => {
                    let t = e.title.toLowerCase().includes(V.toLowerCase());
                    return "Failed" !== E && t
                });
                return (0, n.jsxs)("div", {
                    className: "flex w-full 2xl:w-[80%] mx-auto pb-3 flex-col justify-start items-start bg-[#121212] rounded-xl show max-h-screen overflow-y-auto relative",
                    children: [(0, n.jsx)(s.N9, {
                        position: "top-right",
                        autoClose: 4e3,
                        hideProgressBar: !1,
                        newestOnTop: !1,
                        closeOnClick: !0,
                        rtl: !1,
                        pauseOnFocusLoss: !0,
                        draggable: !0,
                        pauseOnHover: !0,
                        theme: "dark",
                        toastClassName: "!bg-[#222] !text-white rounded-lg"
                    }), (0, n.jsx)("div", {
                        className: "fixed scroll-gradient md:hidden w-6 h-full right-0 top-0"
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col pb-3 pt-6 sm:py-0 sm:flex-row w-full justify-between items-start sm:items-center sm:gap-16 gap-2 text-white px-4 sm:px-8 sticky top-0 left-0 bg-[#121212] z-[1000]",
                        children: [(0, n.jsx)("h2", {
                            className: "font-extrabold flex items-center justify-start text-xl sm:text-3xl py-3 sm:py-5 min-w-40 sm:min-w-56",
                            children: "DAO Proposals"
                        }), (0, n.jsx)("div", {
                            className: "lg:flex w-[70%] items-center justify-center font-extrabold text-sm hidden gap-8",
                            children: ea.map((e, t) => (0, n.jsx)("button", {
                                onClick: () => {
                                    P(ea[t])
                                },
                                className: "relative py-1 flex w-fit flex-nowrap ".concat(E === ea[t] ? " text-[#FF2727]" : ""),
                                children: e
                            }, t))
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-row-reverse sm:flex-row w-full justify-center items-center gap-3",
                            children: [(0, n.jsxs)("div", {
                                className: "flex justify-center items-center gap-2 h-12 min-w-32 bg-[#222222] rounded-[7px] py-3 px-5 text-xs w-full",
                                children: [(0, n.jsx)("input", {
                                    className: "flex h-full w-full bg-transparent text-[#787878]",
                                    type: "text",
                                    placeholder: "Search proposals",
                                    value: V,
                                    onChange: e => X(e.target.value)
                                }), (0, n.jsx)("span", {
                                    className: "relative flex justify-center items-center h-3 w-3 cursor-pointer",
                                    children: (0, n.jsx)(l.default, {
                                        alt: "Search Icon",
                                        src: "/Search_Icons_UIA.png",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                        layout: "fill"
                                    })
                                })]
                            }), (0, n.jsx)("button", {
                                className: "text-white flex justify-center items-center bg-[#FF2727] py-3 px-5 font-extrabold text-sm w-fit text-nowrap rounded-[7px]",
                                onClick: () => {
                                    if (!S) {
                                        s.oR.error("Please connect your wallet before creating a proposal.");
                                        return
                                    }
                                    if (!L && S !== u) {
                                        s.oR.info("Only admins can create proposals");
                                        return
                                    }
                                    M(!0)
                                },
                                children: "Create Proposal"
                            })]
                        })]
                    }), (0, n.jsxs)("table", {
                        className: "w-full border-transparent",
                        children: [(0, n.jsx)("thead", {
                            className: "w-full sticky z-[1000] top-[8.5rem] sm:top-[4.5rem] left-0",
                            children: (0, n.jsx)("tr", {
                                children: ["Title", "Voted", "Status", "Result", "Start", "End"].map((e, t) => (0, n.jsx)("th", {
                                    className: "first:px-4 pr-4 sm:first:px-8 sm:pr-8 py-4 text-left font-normal text-base",
                                    children: e
                                }, t))
                            })
                        }), (0, n.jsx)("tbody", {
                            className: "",
                            children: en.reverse().map((t, a) => (0, n.jsxs)("tr", {
                                className: "border-b border-b-[#222222] cursor-pointer hover:bg-[#222222] transition-class w-full",
                                onClick: () => {
                                    e.push("/proposals/".concat(t._id))
                                },
                                children: [(0, n.jsx)("td", {
                                    className: "px-4 sm:px-8 border-1 border-transparent max-w-80",
                                    children: (0, n.jsxs)("div", {
                                        className: "flex h-10 flex-col justify-start items-start min-w-52",
                                        children: [(0, n.jsxs)("div", {
                                            className: "font-extrabold text-sm",
                                            children: [" ", t.title]
                                        }), (0, n.jsx)("div", {
                                            className: "text-[#414141] font-extrabold text-xs truncate max-w-full",
                                            children: t.description
                                        })]
                                    })
                                }), (0, n.jsx)("td", {
                                    className: "pl-4 text-center py-2 font-semibold text-sm",
                                    children: (0, n.jsx)(w, {
                                        proposalId: t.proposalId
                                    })
                                }), (0, n.jsx)("td", {
                                    className: "text-center pr-4 sm:pr-8 py-2 font-semibold text-sm",
                                    children: (0, n.jsx)("div", {
                                        className: "flex justify-start items-center w-32",
                                        children: (0, n.jsx)(v.A, {
                                            proposalId: t.proposalId
                                        })
                                    })
                                }), (0, n.jsx)("td", {
                                    className: "text-center pr-4 sm:pr-8 py-2 flex justify-start items-center font-semibold text-sm",
                                    children: (0, n.jsx)(j, {
                                        proposalId: t.proposalId
                                    })
                                }), (0, n.jsx)("td", {
                                    className: "text-center pr-4 sm:pr-8 py-2 font-semibold text-sm",
                                    children: (0, n.jsxs)("div", {
                                        className: "flex h-10 py-3 flex-col justify-start items-start w-full min-w-40",
                                        children: [(0, n.jsx)("div", {
                                            className: "font-extrabold text-sm",
                                            children: (0, N.y9)(t.createdDate).date
                                        }), (0, n.jsx)("div", {
                                            className: "text-[#414141] font-extrabold text-xs",
                                            children: (0, N.y9)(t.createdDate).time
                                        })]
                                    })
                                }), (0, n.jsx)("td", {
                                    className: "text-center py-2 font-semibold text-sm",
                                    children: (0, n.jsx)(T, {
                                        proposalId: t.proposalId
                                    })
                                })]
                            }, a))
                        })]
                    }), _ && (0, n.jsx)("div", {
                        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center z-[1000] justify-center backdrop-blur-md",
                        onClick: () => M(!1),
                        children: (0, n.jsxs)("div", {
                            className: "bg-[#111111] rounded-[20px] p-6 w-[90%] sm:w-1/2",
                            onClick: e => e.stopPropagation(),
                            children: [(0, n.jsx)("div", {
                                className: "flex justify-end items-center",
                                children: (0, n.jsx)("span", {
                                    className: "text-[#FF2727] cursor-pointer font-medium text-base underline",
                                    onClick: () => M(!1),
                                    children: "Back"
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex w-fit cursor-pointer px-4 mx-auto flex-col justify-center items-center relative",
                                onClick: () => {
                                    var e;
                                    null === (e = z.current) || void 0 === e || e.click()
                                },
                                children: [(0, n.jsx)("input", {
                                    type: "file",
                                    accept: "image/*",
                                    "aria-label": "Upload image",
                                    onChange: e => {
                                        var t;
                                        let a = null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
                                        a && K(a)
                                    },
                                    ref: z,
                                    className: "hidden"
                                }), (0, n.jsx)("span", {
                                    className: "relative flex justify-center items-center w-20 h-20",
                                    children: (0, n.jsx)(l.default, {
                                        alt: " ",
                                        src: J,
                                        objectFit: "contain",
                                        layout: "fill",
                                        objectPosition: "center"
                                    })
                                }), (0, n.jsx)("h2", {
                                    className: "text-white font-semibold text-3xl",
                                    children: "GIGACAT"
                                }), (0, n.jsx)("span", {
                                    className: "bg-gray-700 rounded-full py-1 px-3 absolute -top-4 -right-8 cursor-pointer text-sm",
                                    children: "Upload Icon"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "py-3 font-medium text-sm",
                                children: [(0, n.jsx)("h2", {
                                    className: "text-center text-[#FF2727] text-xl font-extrabold mb-4",
                                    children: "Create new Proposal"
                                }), (0, n.jsxs)("div", {
                                    className: "flex flex-col gap-2 py-3",
                                    children: [(0, n.jsx)("label", {
                                        className: "text-white font-bold text-xs",
                                        htmlFor: "title",
                                        children: "Proposal Title"
                                    }), (0, n.jsx)("input", {
                                        id: "title",
                                        type: "text",
                                        placeholder: "e.g proposal title",
                                        required: !0,
                                        className: "w-full p-2 border border-[#222222] bg-[#111111] text-white rounded",
                                        onChange: e => R(e.target.value)
                                    }), (0, n.jsx)("label", {
                                        className: "text-white font-bold text-xs",
                                        htmlFor: "description",
                                        children: "Description"
                                    }), (0, n.jsx)("textarea", {
                                        id: "description",
                                        name: "description",
                                        required: !0,
                                        placeholder: "e.g proposal description",
                                        className: "w-full h-20 p-2 border border-[#222222] bg-[#111111] text-white rounded",
                                        onChange: e => D(e.target.value)
                                    }), (0, n.jsx)("label", {
                                        className: "text-white font-bold text-xs",
                                        htmlFor: "distributionAmount",
                                        children: "Voting reward"
                                    }), (0, n.jsxs)("div", {
                                        id: "distributionAmount",
                                        className: "w-full h-fit flex flex-col items-center justify-start gap-4 sm:gap-8 p-2 border border-[#222222] bg-[#111111] text-white rounded",
                                        children: [(0, n.jsxs)("label", {
                                            className: "flex items-center gap-2 w-full",
                                            children: [(0, n.jsx)("span", {
                                                children: "OCICAT:"
                                            }), (0, n.jsx)("input", {
                                                type: "number",
                                                inputMode: "decimal",
                                                pattern: "[0-9]*",
                                                value: U,
                                                onChange: e => {
                                                    let t = e.target.value;
                                                    B("" === t ? "" : Number(t))
                                                },
                                                placeholder: "e.g 100000 OCICAT",
                                                className: "w-full bg-transparent text-white border-none focus:outline-none"
                                            })]
                                        }), (0, n.jsxs)("label", {
                                            className: "flex items-center gap-2 w-full",
                                            children: [(0, n.jsx)("span", {
                                                children: "BNB:"
                                            }), (0, n.jsx)("input", {
                                                type: "number",
                                                inputMode: "decimal",
                                                pattern: "[0-9]*",
                                                value: Q,
                                                onChange: e => {
                                                    let t = e.target.value;
                                                    Y("" === t ? "" : Number(t))
                                                },
                                                placeholder: " e.g 0.02 BNB",
                                                className: "w-full bg-transparent text-white border-none focus:outline-none"
                                            }), (0, n.jsx)("span", {
                                                className: "relative flex items-center justify-center h-5 w-5 ml-1",
                                                children: (0, n.jsx)(l.default, {
                                                    alt: "BNB",
                                                    src: "/bnb-bnb-logo.png",
                                                    layout: "fill",
                                                    objectFit: "contain",
                                                    objectPosition: "center"
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsx)("button", {
                                    className: "bg-[#FF2727] text-white py-2 px-4 rounded mt-2 w-full flex justify-center items-center",
                                    onClick: () => {
                                        O(!0), F && k ? S && et(null != q ? q : void 0) : (s.oR.error("Please fill in all fields before submitting."), O(!1))
                                    },
                                    disabled: A,
                                    children: A ? (0, n.jsx)("span", {
                                        className: "loader w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
                                    }) : "Submit Proposal"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        28629: (e, t, a) => {
            "use strict";
            a.d(t, {
                default: () => G
            });
            var n = a(95155),
                s = a(12115),
                r = a(12317),
                i = a(31027),
                l = a(21567);
            let o = (0, i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                d = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: s,
                        size: i,
                        asChild: d = !1,
                        ...u
                    } = e, c = d ? r.DX : "button";
                    return (0, n.jsx)(c, {
                        className: (0, l.cn)(o({
                            variant: s,
                            size: i,
                            className: a
                        })),
                        ref: t,
                        ...u
                    })
                });
            d.displayName = "Button";
            let u = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", a),
                    ...s
                })
            });
            u.displayName = "Card";
            let c = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, l.cn)("flex flex-col sm:space-y-1.5 p-2 sm:p-6", a),
                    ...s
                })
            });
            c.displayName = "CardHeader", s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, l.cn)("text-2xl font-semibold leading-none tracking-tight", a),
                    ...s
                })
            }).displayName = "CardTitle", s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, l.cn)("text-sm text-muted-foreground", a),
                    ...s
                })
            }).displayName = "CardDescription", s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, l.cn)("p-6 pt-0", a),
                    ...s
                })
            }).displayName = "CardContent", s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsx)("div", {
                    ref: t,
                    className: (0, l.cn)("flex items-center p-6 pt-0", a),
                    ...s
                })
            }).displayName = "CardFooter";
            var p = a(68914);
            let m = p.bL,
                y = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...s
                    } = e;
                    return (0, n.jsx)(p.B8, {
                        ref: t,
                        className: (0, l.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", a),
                        ...s
                    })
                });
            y.displayName = p.B8.displayName;
            let f = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsx)(p.l9, {
                    ref: t,
                    className: (0, l.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", a),
                    ...s
                })
            });
            f.displayName = p.l9.displayName;
            let x = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, n.jsx)(p.UC, {
                    ref: t,
                    className: (0, l.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", a),
                    ...s
                })
            });
            x.displayName = p.UC.displayName;
            var b = a(35965),
                h = a(84603),
                g = a(89984),
                N = a(57342),
                w = a(18554),
                v = a(52842),
                j = a(89888),
                T = a(22417),
                C = a(81979);
            let S = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
            var I = a(57246);
            let A = v.a.OCICAT_STAKING_CONTRACT_ADDRESS,
                O = v.a.LIQUIDITY_ADDRESS,
                k = v.a.OCICAT_TOKEN_ADDRESS,
                D = v.a.LIQUIDITY_TOKEN;
            var _ = a(41047),
                M = a(66530),
                F = a(34122);
            let R = v.a.OCICAT_TOKEN_ADDRESS,
                E = (e, t) => {
                    let {
                        data: a
                    } = (0, g.Q)({
                        address: R,
                        abi: C,
                        functionName: "totalSupply"
                    }), {
                        data: n,
                        refetch: s
                    } = (0, g.Q)({
                        address: R,
                        abi: C,
                        functionName: "allowance",
                        args: [e, t]
                    }), {
                        data: r
                    } = (0, M._)({
                        address: R,
                        abi: C,
                        functionName: "approve",
                        args: [e, a]
                    }), {
                        data: i,
                        writeContractAsync: l,
                        error: o
                    } = (0, h.x)(), {
                        data: d,
                        isLoading: u
                    } = (0, F.g)({
                        hash: i
                    });
                    return {
                        allowance: Number(n),
                        refetch: s,
                        simulateApproval: r,
                        isApproving: u,
                        approvalReceiptData: d,
                        writeApprovalContract: l,
                        approvalError: o,
                        max_allowance: a
                    }
                },
                P = v.a.LIQUIDITY_TOKEN,
                U = (e, t) => {
                    let {
                        data: a
                    } = (0, g.Q)({
                        address: P,
                        abi: S,
                        functionName: "totalSupply"
                    }), {
                        data: n,
                        refetch: s
                    } = (0, g.Q)({
                        address: P,
                        abi: S,
                        functionName: "allowance",
                        args: [e, t]
                    }), {
                        data: r
                    } = (0, M._)({
                        address: P,
                        abi: S,
                        functionName: "approve",
                        args: [e, a]
                    }), {
                        data: i,
                        writeContractAsync: l,
                        error: o
                    } = (0, h.x)(), {
                        data: d,
                        isLoading: u
                    } = (0, F.g)({
                        hash: i
                    });
                    return {
                        allowance: Number(n),
                        refetch: s,
                        simulateApproval: r,
                        isApproving: u,
                        approvalReceiptData: d,
                        writeApprovalContract: l,
                        approvalError: o,
                        max_allowance: a
                    }
                };
            var B = a(26149);
            let Q = v.a.OCICAT_TOKEN_ADDRESS,
                Y = v.a.OCICAT_STAKING_CONTRACT_ADDRESS,
                L = v.a.LIQUIDITY_ADDRESS,
                W = v.a.LIQUIDITY_TOKEN,
                z = e => {
                    let t = () => Math.max(0, e - Math.floor(Date.now() / 1e3)),
                        [a, n] = (0, s.useState)(t);
                    return (0, s.useEffect)(() => {
                        let e = () => {
                            n(t())
                        };
                        e();
                        let a = setInterval(e, 1e3);
                        return () => clearInterval(a)
                    }, [e]), (e => {
                        let t = Math.floor(e / 86400),
                            a = Math.floor(e % 86400 / 3600),
                            n = Math.floor(e % 3600 / 60);
                        return "".concat(t, "d ").concat(a, "h ").concat(n, "m ").concat((e % 60).toFixed(0), "s")
                    })(a)
                },
                q = e => {
                    let {
                        targetTimestamp: t
                    } = e, a = z(t / 1e3);
                    return (0, n.jsx)("div", {
                        children: a
                    })
                },
                K = e => {
                    let {
                        options: t,
                        active: a,
                        onChange: s
                    } = e;
                    return (0, n.jsx)("div", {
                        className: "flex space-x-4 mb-4",
                        children: t.map(e => (0, n.jsx)("button", {
                            className: "text-sm font-medium ".concat(a === e ? "text-red-500 border-b-2 border-red-500" : "text-gray-400 hover:text-gray-300"),
                            onClick: () => s(e),
                            children: e
                        }, e))
                    })
                },
                J = e => {
                    let {
                        coinType: t
                    } = e, [a, r] = (0, s.useState)("Stake"), [i, o] = (0, s.useState)(null);
                    (0, s.useEffect)(() => {
                        let e = localStorage.getItem("unstakeTime");
                        if (e) {
                            let t = new Date(e);
                            console.log(t), o(t)
                        }
                    }, []);
                    let {
                        isConnected: u,
                        address: c
                    } = (0, b.F)(), p = function (e) {
                        let {
                            data: t,
                            isSuccess: a,
                            isError: n
                        } = (0, g.Q)({
                            address: k,
                            abi: C,
                            functionName: "balanceOf",
                            args: [e]
                        }), {
                            data: s
                        } = (0, g.Q)({
                            address: k,
                            abi: C,
                            functionName: "decimals"
                        });
                        return a ? t && s ? (0, j.J)(BigInt(t), s) : "0" : n ? (console.log("errored"), 0) : void 0
                    }(c), m = function (e) {
                        let {
                            data: t
                        } = (0, g.Q)({
                            address: D,
                            abi: S,
                            functionName: "balanceOf",
                            args: [e]
                        }), {
                            data: a
                        } = (0, g.Q)({
                            address: D,
                            abi: S,
                            functionName: "decimals"
                        });
                        return t && a ? (0, j.J)(BigInt(t), a) : "0"
                    }(c), y = function (e) {
                        let {
                            data: t
                        } = (0, g.Q)({
                            address: A,
                            abi: T,
                            functionName: "getPendingRewards",
                            args: [e]
                        }), {
                            data: a
                        } = (0, g.Q)({
                            address: k,
                            abi: C,
                            functionName: "decimals"
                        });
                        return t && a ? (0, j.J)(BigInt(t), a) : "0"
                    }(c), f = function (e) {
                        let {
                            data: t
                        } = (0, g.Q)({
                            address: O,
                            abi: I,
                            functionName: "getPendingRewards",
                            args: [e]
                        }), {
                            data: a
                        } = (0, g.Q)({
                            address: k,
                            abi: C,
                            functionName: "decimals"
                        });
                        return t && a ? (0, j.J)(BigInt(t), a) : "0"
                    }(c), [x, M] = (0, s.useState)(""), {
                        writeContract: F
                    } = (0, h.x)(), {
                        data: R
                    } = (0, g.Q)({
                        address: Y,
                        abi: T,
                        functionName: "totalUserStaked",
                        args: [c],
                        query: {
                            enabled: !0
                        }
                    }), [P, z] = (0, s.useState)(""), J = (0, N.U)(), G = v.a.NFT_ADDRESS;
                    async function H(e) {
                        if (e) try {
                            let t = await (0, _.J)(J, {
                                    address: Y,
                                    abi: T,
                                    functionName: "daoPower",
                                    args: [e]
                                }),
                                a = await (0, _.J)(J, {
                                    address: G,
                                    abi: B,
                                    functionName: "daoPower",
                                    args: [e]
                                }),
                                n = await (0, _.J)(J, {
                                    address: L,
                                    abi: I,
                                    functionName: "daoPower",
                                    args: [e]
                                }),
                                s = Number(t),
                                r = Number(a),
                                i = Number(n),
                                l = s + r + i;
                            return z(l.toString()), l
                        } catch (e) {
                            console.error("Error fetching total DAO power:", e)
                        }
                    }(0, s.useEffect)(() => {
                        c && H(c)
                    }, [c]);
                    let {
                        data: V
                    } = (0, g.Q)({
                        address: L,
                        abi: I,
                        functionName: "totalUserStaked",
                        args: [c],
                        query: {
                            enabled: !!c
                        }
                    }), [X, Z] = (0, s.useState)(!1), {
                        allowance: $
                    } = E(c, Y), {
                        allowance: ee,
                        max_allowance: et,
                        writeApprovalContract: ea
                    } = U(c, "GIGACAT" === t ? Y : L);
                    return (0, n.jsxs)("div", {
                        className: "",
                        children: [(0, n.jsxs)("div", {
                            className: "flex justify-between gap-3 items-center",
                            children: [(0, n.jsxs)("div", {
                                className: "flex justify-start items-center gap-3 mb-3 sm:gap-4",
                                children: [(0, n.jsx)("span", {
                                    className: "text-base sm:text-lg",
                                    children: "Your DAO Power:"
                                }), (0, n.jsx)("span", {
                                    className: "text-xl sm:text-2xl font-bold",
                                    children: P || "0"
                                })]
                            }), (0, n.jsx)(w.A, {})]
                        }), (0, n.jsx)(K, {
                            options: ["Stake", "Unstake", "Claim", "Emergency"],
                            active: a,
                            onChange: r
                        }), "Claim" === a && (0, n.jsxs)("div", {
                            className: "flex flex-col items-center space-y-4",
                            children: [(0, n.jsx)("span", {
                                className: "text-lg",
                                children: "Your Rewards:"
                            }), (0, n.jsxs)("span", {
                                className: "text-2xl font-bold",
                                children: ["GIGACAT" === t ? y ? y.toString() : "0" : f ? f.toString() : "0", " ", t]
                            }), (0, n.jsx)(d, {
                                className: "w-full bg-red-700 hover:bg-red-800",
                                size: "lg",
                                disabled: 0 >= Number("GIGACAT" === t ? y : f),
                                onClick: async () => {
                                    Z(!0);
                                    let e = "GIGACAT" === t ? Y : L,
                                        a = "GIGACAT" === t ? T : I;
                                    if (0 >= Number("GIGACAT" === t ? y : f)) {
                                        alert("You don't have any rewards to claim"), Z(!1);
                                        return
                                    }
                                    F({
                                        address: e,
                                        abi: a,
                                        functionName: "claimRewards"
                                    }, {
                                        onSuccess(e) {
                                            console.log(e), Z(!1)
                                        },
                                        onError(e) {
                                            console.error(e), Z(!1)
                                        }
                                    })
                                },
                                children: X ? "Claiming..." : "Claim Rewards"
                            })]
                        }), (0, n.jsxs)(n.Fragment, {
                            children: ["Claim" !== a && (0, n.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, n.jsx)("span", {
                                    children: "Stake" === a ? "Available to stake:" : "Staked balance:"
                                }), (0, n.jsx)("div", {
                                    className: "flex items-center gap-2",
                                    children: (0, n.jsx)("span", {
                                        children: "Stake" === a ? "GIGACAT" === t ? p ? Number(p).toFixed(2).toString() : 0 : m ? Number(m).toFixed(4).toString() : 0 : "GIGACAT" === t ? Number(.95 * parseInt((0, l.h_)(Number(R || 0), 6).toString(), 10)).toString() || 0 : (0, l.h_)(Number(V), 18) || 0
                                    })
                                })]
                            }), "Stake" === a && (0, n.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, n.jsx)("input", {
                                    type: "number",
                                    placeholder: "0.00",
                                    value: x,
                                    className: "bg-white text-black text-xl h-10 overflow-hidden w-full rounded-md px-2 my-2",
                                    onChange: e => {
                                        M(e.target.value)
                                    }
                                }), (0, n.jsx)(d, {
                                    onClick: () => {
                                        "GIGACAT" === t ? p ? M(p.toString()) : M("0") : M(m.toString() || "0")
                                    },
                                    disabled: !u,
                                    variant: "destructive",
                                    size: "sm",
                                    children: "Max"
                                })]
                            })]
                        }), u ? (0, n.jsxs)(n.Fragment, {
                            children: [("GIGACAT" !== t || isNaN($) || 0 === $) && ("GIGACAT" === t || isNaN(ee) || 0 === ee) ? "Stake" === a && (0, n.jsx)(d, {
                                className: "w-full bg-red-700 ".concat(" hover:bg-red-700"),
                                size: "lg",
                                onClick: async () => {
                                    "GIGACAT" === t ? F({
                                        abi: C,
                                        address: Q,
                                        functionName: "approve",
                                        args: [Y, (0, l.Kd)((0, l.h_)(Number(R || 0), 6) || 1e13, 6)]
                                    }) : await ea({
                                        abi: S,
                                        address: W,
                                        functionName: "approve",
                                        args: [L, 1e30]
                                    })
                                },
                                children: "Approve"
                            }) : "Claim" !== a && "Emergency" !== a && "Unstake" !== a && (0, n.jsx)(d, {
                                className: "w-full bg-red-700 ".concat(" hover:bg-red-700"),
                                size: "lg",
                                onClick: async () => {
                                    0 >= Number(x) || (Z(!0), "Stake" === a ? F({
                                        address: "GIGACAT" === t ? Y : L,
                                        abi: "GIGACAT" === t ? T : I,
                                        functionName: "stake",
                                        args: ["GIGACAT" === t ? (0, l.Kd)(Number(parseFloat(x).toFixed(0)), 6) : (0, l.Kd)(Number(parseFloat(x)), 18)]
                                    }, {
                                        onSuccess(e) {
                                            console.log(e), Z(!1)
                                        },
                                        onError() {
                                            Z(!1)
                                        }
                                    }) : F({
                                        address: "GIGACAT" === t ? Y : L,
                                        abi: "GIGACAT" === t ? T : I,
                                        functionName: "unstake"
                                    }, {
                                        onSuccess(e) {
                                            console.log(e);
                                            let t = new Date;
                                            t.setSeconds(t.getSeconds() + 1296e3), localStorage.setItem("unstakeTime", t.toISOString()), o(new Date(t.toISOString())), Z(!1)
                                        },
                                        onError() {
                                            Z(!1)
                                        }
                                    }))
                                },
                                children: X ? "Stake" === a ? "Staking...." : "Unstaking...." : a
                            }), "Unstake" === a && (0, n.jsxs)(n.Fragment, {
                                children: [Number((0, l.h_)(parseInt((0, l.h_)(Number("GIGACAT" === t ? R || 0 : V || 0), "GIGACAT" === t ? 6 : 18).toString(), 10), "GIGACAT" === t ? 6 : 18)) > 0 ? new Date >= new Date(Number(i)) && i ? null : Number((0, l.h_)(parseInt((0, l.h_)(Number("GIGACAT" === t ? R || 0 : V || 0), "GIGACAT" === t ? 6 : 18).toString(), 10), "GIGACAT" === t ? 6 : 18)) > 0 && (0, n.jsx)(d, {
                                    className: "w-full bg-red-600 hover:bg-red-700 mt-2",
                                    disabled: !!(Number((0, l.h_)(parseInt((0, l.h_)(Number("GIGACAT" === t ? R || 0 : V || 0), "GIGACAT" === t ? 6 : 18).toString(), 10), "GIGACAT" === t ? 6 : 18)) > 0 && i),
                                    onClick: () => {
                                        F({
                                            address: "GIGACAT" === t ? Y : L,
                                            abi: "GIGACAT" === t ? T : I,
                                            functionName: "unstake"
                                        }, {
                                            onSuccess(e) {
                                                console.log(e);
                                                let t = new Date;
                                                t.setSeconds(t.getSeconds() + 1296e3), localStorage.setItem("unstakeTime", t.toISOString()), o(new Date(t.toISOString())), Z(!1)
                                            },
                                            onError() {
                                                Z(!1)
                                            }
                                        })
                                    },
                                    children: "Unstake"
                                }) : !i && (0, n.jsx)(d, {
                                    className: "w-full bg-gray-400 mt-2",
                                    disabled: !0,
                                    children: "Unstake (You have no tokens to unstake)"
                                }), Number((0, l.h_)(parseInt((0, l.h_)(Number("GIGACAT" === t ? R || 0 : V || 0), "GIGACAT" === t ? 6 : 18).toString(), 10), "GIGACAT" === t ? 6 : 18)) > 0 && i ? new Date >= new Date(i) ? (0, n.jsx)(d, {
                                    className: "w-full bg-green-600 hover:bg-green-700 mt-2",
                                    onClick: () => {
                                        F({
                                            address: "GIGACAT" === t ? Y : L,
                                            abi: "GIGACAT" === t ? T : I,
                                            functionName: "withdrawAfterCooldown"
                                        }, {
                                            onSuccess(e) {
                                                console.log(e), localStorage.removeItem("unstakeTime"), o(null), Z(!1)
                                            },
                                            onError() {
                                                Z(!1)
                                            }
                                        })
                                    },
                                    children: "Withdraw"
                                }) : (0, n.jsxs)("div", {
                                    className: "text-center text-sm text-gray-400",
                                    children: ["Unstaking in progress", " ", (0, n.jsx)(q, {
                                        targetTimestamp: Number(i)
                                    })]
                                }) : null]
                            }), "Claim" === a && (0 >= Number(y) ? (0, n.jsx)("div", {
                                className: "text-center text-sm text-gray-400",
                                children: "No rewards to claim"
                            }) : (0, n.jsx)("div", {
                                className: "text-center text-sm text-gray-400",
                                children: "Claim your rewards"
                            }))]
                        }) : "", "Emergency" === a && (0, n.jsx)(d, {
                            className: "w-full bg-red-700 hover:bg-red-700",
                            size: "lg",
                            disabled: isNaN(Number((0, l.h_)(parseInt((0, l.h_)(Number(R || 0), 6).toString(), 10), 6))) || 0 >= Number((0, l.h_)(parseInt((0, l.h_)(Number(R || 0), 6).toString(), 10), 6)),
                            onClick: async () => {
                                0 >= Number((0, l.h_)(parseInt((0, l.h_)(Number(R || 0), 6).toString(), 10), 6)) || isNaN(Number((0, l.h_)(parseInt((0, l.h_)(Number(R || 0), 6).toString(), 10), 6))) || (Z(!0), F({
                                    address: "GIGACAT" === t ? Y : L,
                                    abi: "GIGACAT" === t ? T : I,
                                    functionName: "emergencyUnstake"
                                }, {
                                    onSuccess(e) {
                                        console.log(e), Z(!1)
                                    },
                                    onError() {
                                        Z(!1)
                                    }
                                }))
                            },
                            children: X ? "Unstaking...." : "Emergency Unstake"
                        })]
                    })
                },
                G = () => {
                    let [e, t] = (0, s.useState)("coinA");
                    return (0, n.jsx)(u, {
                        className: "w-full max-w-3xl sm:px-4 mx-auto bg-[#0a0b14] text-white",
                        children: (0, n.jsx)(c, {
                            children: (0, n.jsxs)(m, {
                                defaultValue: "coinA",
                                className: "w-full ",
                                onValueChange: t,
                                children: [(0, n.jsxs)(y, {
                                    className: "grid w-full grid-cols-2",
                                    children: [(0, n.jsx)(f, {
                                        className: "data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-md transition",
                                        value: "coinA",
                                        children: "Stake Gigacat."
                                    }), (0, n.jsx)(f, {
                                        className: "data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-md transition",
                                        value: "coinB",
                                        children: "Stake GCAT/BNB"
                                    })]
                                }), (0, n.jsx)(x, {
                                    value: "coinA",
                                    className: "mt-4",
                                    children: (0, n.jsx)(J, {
                                        coinType: "GIGACAT"
                                    })
                                }), (0, n.jsx)(x, {
                                    value: "coinB",
                                    className: "mt-4",
                                    children: (0, n.jsx)(J, {
                                        coinType: "GIGACAT/BNB"
                                    })
                                })]
                            })
                        })
                    })
                }
        },
        18554: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var n = a(95155);

            function s() {
                return (0, n.jsx)("appkit-button", {})
            }
        },
        81979: e => {
            "use strict";
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeReceiver","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"burner","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"FeePaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousReceiver","type":"address"},{"indexed":true,"internalType":"address","name":"newReceiver","type":"address"}],"name":"FeeReceiverUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RecoveredERC20","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"WhitelistUpdated","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newReceiver","type":"address"}],"name":"setFeeReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"updateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [4797, 6711, 7970, 6673, 7930, 808, 8702, 2467, 8441, 1517, 7358], () => t(68956)), _N_E = e.O()
    }
]);