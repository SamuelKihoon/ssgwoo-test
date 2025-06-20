(function() {
    const l = document.createElement("link").relList;
    if (l && l.supports && l.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const f of o)
            if (f.type === "childList")
                for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(o) {
        const f = {};
        return o.integrity && (f.integrity = o.integrity), o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? f.credentials = "include" : o.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const f = s(o);
        fetch(o.href, f)
    }
})();

function hy(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var po = {
        exports: {}
    },
    ti = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xh;

function my() {
    if (Xh) return ti;
    Xh = 1;
    var i = Symbol.for("react.transitional.element"),
        l = Symbol.for("react.fragment");

    function s(r, o, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f), o.key !== void 0 && (d = "" + o.key), "key" in o) {
            f = {};
            for (var m in o) m !== "key" && (f[m] = o[m])
        } else f = o;
        return o = f.ref, {
            $$typeof: i,
            type: r,
            key: d,
            ref: o !== void 0 ? o : null,
            props: f
        }
    }
    return ti.Fragment = l, ti.jsx = s, ti.jsxs = s, ti
}
var $h;

function gy() {
    return $h || ($h = 1, po.exports = my()), po.exports
}
var p = gy(),
    yo = {
        exports: {}
    },
    he = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qh;

function py() {
    if (Qh) return he;
    Qh = 1;
    var i = Symbol.for("react.transitional.element"),
        l = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        m = Symbol.for("react.forward_ref"),
        y = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"),
        x = Symbol.for("react.lazy"),
        v = Symbol.iterator;

    function N(E) {
        return E === null || typeof E != "object" ? null : (E = v && E[v] || E["@@iterator"], typeof E == "function" ? E : null)
    }
    var O = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        S = Object.assign,
        _ = {};

    function M(E, H, Q) {
        this.props = E, this.context = H, this.refs = _, this.updater = Q || O
    }
    M.prototype.isReactComponent = {}, M.prototype.setState = function(E, H) {
        if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, H, "setState")
    }, M.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate")
    };

    function B() {}
    B.prototype = M.prototype;

    function k(E, H, Q) {
        this.props = E, this.context = H, this.refs = _, this.updater = Q || O
    }
    var G = k.prototype = new B;
    G.constructor = k, S(G, M.prototype), G.isPureReactComponent = !0;
    var K = Array.isArray,
        V = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        de = Object.prototype.hasOwnProperty;

    function te(E, H, Q, $, I, pe) {
        return Q = pe.ref, {
            $$typeof: i,
            type: E,
            key: H,
            ref: Q !== void 0 ? Q : null,
            props: pe
        }
    }

    function ne(E, H) {
        return te(E.type, H, void 0, void 0, void 0, E.props)
    }

    function F(E) {
        return typeof E == "object" && E !== null && E.$$typeof === i
    }

    function re(E) {
        var H = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + E.replace(/[=:]/g, function(Q) {
            return H[Q]
        })
    }
    var Ee = /\/+/g;

    function Ae(E, H) {
        return typeof E == "object" && E !== null && E.key != null ? re("" + E.key) : H.toString(36)
    }

    function He() {}

    function ce(E) {
        switch (E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason;
            default:
                switch (typeof E.status == "string" ? E.then(He, He) : (E.status = "pending", E.then(function(H) {
                        E.status === "pending" && (E.status = "fulfilled", E.value = H)
                    }, function(H) {
                        E.status === "pending" && (E.status = "rejected", E.reason = H)
                    })), E.status) {
                    case "fulfilled":
                        return E.value;
                    case "rejected":
                        throw E.reason
                }
        }
        throw E
    }

    function je(E, H, Q, $, I) {
        var pe = typeof E;
        (pe === "undefined" || pe === "boolean") && (E = null);
        var ue = !1;
        if (E === null) ue = !0;
        else switch (pe) {
            case "bigint":
            case "string":
            case "number":
                ue = !0;
                break;
            case "object":
                switch (E.$$typeof) {
                    case i:
                    case l:
                        ue = !0;
                        break;
                    case x:
                        return ue = E._init, je(ue(E._payload), H, Q, $, I)
                }
        }
        if (ue) return I = I(E), ue = $ === "" ? "." + Ae(E, 0) : $, K(I) ? (Q = "", ue != null && (Q = ue.replace(Ee, "$&/") + "/"), je(I, H, Q, "", function(Lt) {
            return Lt
        })) : I != null && (F(I) && (I = ne(I, Q + (I.key == null || E && E.key === I.key ? "" : ("" + I.key).replace(Ee, "$&/") + "/") + ue)), H.push(I)), 1;
        ue = 0;
        var st = $ === "" ? "." : $ + ":";
        if (K(E))
            for (var De = 0; De < E.length; De++) $ = E[De], pe = st + Ae($, De), ue += je($, H, Q, pe, I);
        else if (De = N(E), typeof De == "function")
            for (E = De.call(E), De = 0; !($ = E.next()).done;) $ = $.value, pe = st + Ae($, De++), ue += je($, H, Q, pe, I);
        else if (pe === "object") {
            if (typeof E.then == "function") return je(ce(E), H, Q, $, I);
            throw H = String(E), Error("Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ue
    }

    function U(E, H, Q) {
        if (E == null) return E;
        var $ = [],
            I = 0;
        return je(E, $, "", "", function(pe) {
            return H.call(Q, pe, I++)
        }), $
    }

    function X(E) {
        if (E._status === -1) {
            var H = E._result;
            H = H(), H.then(function(Q) {
                (E._status === 0 || E._status === -1) && (E._status = 1, E._result = Q)
            }, function(Q) {
                (E._status === 0 || E._status === -1) && (E._status = 2, E._result = Q)
            }), E._status === -1 && (E._status = 0, E._result = H)
        }
        if (E._status === 1) return E._result.default;
        throw E._result
    }
    var J = typeof reportError == "function" ? reportError : function(E) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var H = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                error: E
            });
            if (!window.dispatchEvent(H)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", E);
            return
        }
        console.error(E)
    };

    function ie() {}
    return he.Children = {
        map: U,
        forEach: function(E, H, Q) {
            U(E, function() {
                H.apply(this, arguments)
            }, Q)
        },
        count: function(E) {
            var H = 0;
            return U(E, function() {
                H++
            }), H
        },
        toArray: function(E) {
            return U(E, function(H) {
                return H
            }) || []
        },
        only: function(E) {
            if (!F(E)) throw Error("React.Children.only expected to receive a single React element child.");
            return E
        }
    }, he.Component = M, he.Fragment = s, he.Profiler = o, he.PureComponent = k, he.StrictMode = r, he.Suspense = y, he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, he.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(E) {
            return V.H.useMemoCache(E)
        }
    }, he.cache = function(E) {
        return function() {
            return E.apply(null, arguments)
        }
    }, he.cloneElement = function(E, H, Q) {
        if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
        var $ = S({}, E.props),
            I = E.key,
            pe = void 0;
        if (H != null)
            for (ue in H.ref !== void 0 && (pe = void 0), H.key !== void 0 && (I = "" + H.key), H) !de.call(H, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && H.ref === void 0 || ($[ue] = H[ue]);
        var ue = arguments.length - 2;
        if (ue === 1) $.children = Q;
        else if (1 < ue) {
            for (var st = Array(ue), De = 0; De < ue; De++) st[De] = arguments[De + 2];
            $.children = st
        }
        return te(E.type, I, void 0, void 0, pe, $)
    }, he.createContext = function(E) {
        return E = {
            $$typeof: d,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, E.Provider = E, E.Consumer = {
            $$typeof: f,
            _context: E
        }, E
    }, he.createElement = function(E, H, Q) {
        var $, I = {},
            pe = null;
        if (H != null)
            for ($ in H.key !== void 0 && (pe = "" + H.key), H) de.call(H, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (I[$] = H[$]);
        var ue = arguments.length - 2;
        if (ue === 1) I.children = Q;
        else if (1 < ue) {
            for (var st = Array(ue), De = 0; De < ue; De++) st[De] = arguments[De + 2];
            I.children = st
        }
        if (E && E.defaultProps)
            for ($ in ue = E.defaultProps, ue) I[$] === void 0 && (I[$] = ue[$]);
        return te(E, pe, void 0, void 0, null, I)
    }, he.createRef = function() {
        return {
            current: null
        }
    }, he.forwardRef = function(E) {
        return {
            $$typeof: m,
            render: E
        }
    }, he.isValidElement = F, he.lazy = function(E) {
        return {
            $$typeof: x,
            _payload: {
                _status: -1,
                _result: E
            },
            _init: X
        }
    }, he.memo = function(E, H) {
        return {
            $$typeof: h,
            type: E,
            compare: H === void 0 ? null : H
        }
    }, he.startTransition = function(E) {
        var H = V.T,
            Q = {};
        V.T = Q;
        try {
            var $ = E(),
                I = V.S;
            I !== null && I(Q, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ie, J)
        } catch (pe) {
            J(pe)
        } finally {
            V.T = H
        }
    }, he.unstable_useCacheRefresh = function() {
        return V.H.useCacheRefresh()
    }, he.use = function(E) {
        return V.H.use(E)
    }, he.useActionState = function(E, H, Q) {
        return V.H.useActionState(E, H, Q)
    }, he.useCallback = function(E, H) {
        return V.H.useCallback(E, H)
    }, he.useContext = function(E) {
        return V.H.useContext(E)
    }, he.useDebugValue = function() {}, he.useDeferredValue = function(E, H) {
        return V.H.useDeferredValue(E, H)
    }, he.useEffect = function(E, H, Q) {
        var $ = V.H;
        if (typeof Q == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return $.useEffect(E, H)
    }, he.useId = function() {
        return V.H.useId()
    }, he.useImperativeHandle = function(E, H, Q) {
        return V.H.useImperativeHandle(E, H, Q)
    }, he.useInsertionEffect = function(E, H) {
        return V.H.useInsertionEffect(E, H)
    }, he.useLayoutEffect = function(E, H) {
        return V.H.useLayoutEffect(E, H)
    }, he.useMemo = function(E, H) {
        return V.H.useMemo(E, H)
    }, he.useOptimistic = function(E, H) {
        return V.H.useOptimistic(E, H)
    }, he.useReducer = function(E, H, Q) {
        return V.H.useReducer(E, H, Q)
    }, he.useRef = function(E) {
        return V.H.useRef(E)
    }, he.useState = function(E) {
        return V.H.useState(E)
    }, he.useSyncExternalStore = function(E, H, Q) {
        return V.H.useSyncExternalStore(E, H, Q)
    }, he.useTransition = function() {
        return V.H.useTransition()
    }, he.version = "19.1.0", he
}
var Kh;

function Yo() {
    return Kh || (Kh = 1, yo.exports = py()), yo.exports
}
var T = Yo();
const Zh = hy(T);
var bo = {
        exports: {}
    },
    ni = {},
    xo = {
        exports: {}
    },
    vo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jh;

function yy() {
    return Jh || (Jh = 1, function(i) {
        function l(U, X) {
            var J = U.length;
            U.push(X);
            e: for (; 0 < J;) {
                var ie = J - 1 >>> 1,
                    E = U[ie];
                if (0 < o(E, X)) U[ie] = X, U[J] = E, J = ie;
                else break e
            }
        }

        function s(U) {
            return U.length === 0 ? null : U[0]
        }

        function r(U) {
            if (U.length === 0) return null;
            var X = U[0],
                J = U.pop();
            if (J !== X) {
                U[0] = J;
                e: for (var ie = 0, E = U.length, H = E >>> 1; ie < H;) {
                    var Q = 2 * (ie + 1) - 1,
                        $ = U[Q],
                        I = Q + 1,
                        pe = U[I];
                    if (0 > o($, J)) I < E && 0 > o(pe, $) ? (U[ie] = pe, U[I] = J, ie = I) : (U[ie] = $, U[Q] = J, ie = Q);
                    else if (I < E && 0 > o(pe, J)) U[ie] = pe, U[I] = J, ie = I;
                    else break e
                }
            }
            return X
        }

        function o(U, X) {
            var J = U.sortIndex - X.sortIndex;
            return J !== 0 ? J : U.id - X.id
        }
        if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            i.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date,
                m = d.now();
            i.unstable_now = function() {
                return d.now() - m
            }
        }
        var y = [],
            h = [],
            x = 1,
            v = null,
            N = 3,
            O = !1,
            S = !1,
            _ = !1,
            M = !1,
            B = typeof setTimeout == "function" ? setTimeout : null,
            k = typeof clearTimeout == "function" ? clearTimeout : null,
            G = typeof setImmediate < "u" ? setImmediate : null;

        function K(U) {
            for (var X = s(h); X !== null;) {
                if (X.callback === null) r(h);
                else if (X.startTime <= U) r(h), X.sortIndex = X.expirationTime, l(y, X);
                else break;
                X = s(h)
            }
        }

        function V(U) {
            if (_ = !1, K(U), !S)
                if (s(y) !== null) S = !0, de || (de = !0, Ae());
                else {
                    var X = s(h);
                    X !== null && je(V, X.startTime - U)
                }
        }
        var de = !1,
            te = -1,
            ne = 5,
            F = -1;

        function re() {
            return M ? !0 : !(i.unstable_now() - F < ne)
        }

        function Ee() {
            if (M = !1, de) {
                var U = i.unstable_now();
                F = U;
                var X = !0;
                try {
                    e: {
                        S = !1,
                        _ && (_ = !1, k(te), te = -1),
                        O = !0;
                        var J = N;
                        try {
                            t: {
                                for (K(U), v = s(y); v !== null && !(v.expirationTime > U && re());) {
                                    var ie = v.callback;
                                    if (typeof ie == "function") {
                                        v.callback = null, N = v.priorityLevel;
                                        var E = ie(v.expirationTime <= U);
                                        if (U = i.unstable_now(), typeof E == "function") {
                                            v.callback = E, K(U), X = !0;
                                            break t
                                        }
                                        v === s(y) && r(y), K(U)
                                    } else r(y);
                                    v = s(y)
                                }
                                if (v !== null) X = !0;
                                else {
                                    var H = s(h);
                                    H !== null && je(V, H.startTime - U), X = !1
                                }
                            }
                            break e
                        }
                        finally {
                            v = null, N = J, O = !1
                        }
                        X = void 0
                    }
                }
                finally {
                    X ? Ae() : de = !1
                }
            }
        }
        var Ae;
        if (typeof G == "function") Ae = function() {
            G(Ee)
        };
        else if (typeof MessageChannel < "u") {
            var He = new MessageChannel,
                ce = He.port2;
            He.port1.onmessage = Ee, Ae = function() {
                ce.postMessage(null)
            }
        } else Ae = function() {
            B(Ee, 0)
        };

        function je(U, X) {
            te = B(function() {
                U(i.unstable_now())
            }, X)
        }
        i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(U) {
            U.callback = null
        }, i.unstable_forceFrameRate = function(U) {
            0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < U ? Math.floor(1e3 / U) : 5
        }, i.unstable_getCurrentPriorityLevel = function() {
            return N
        }, i.unstable_next = function(U) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                    var X = 3;
                    break;
                default:
                    X = N
            }
            var J = N;
            N = X;
            try {
                return U()
            } finally {
                N = J
            }
        }, i.unstable_requestPaint = function() {
            M = !0
        }, i.unstable_runWithPriority = function(U, X) {
            switch (U) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    U = 3
            }
            var J = N;
            N = U;
            try {
                return X()
            } finally {
                N = J
            }
        }, i.unstable_scheduleCallback = function(U, X, J) {
            var ie = i.unstable_now();
            switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ie + J : ie) : J = ie, U) {
                case 1:
                    var E = -1;
                    break;
                case 2:
                    E = 250;
                    break;
                case 5:
                    E = 1073741823;
                    break;
                case 4:
                    E = 1e4;
                    break;
                default:
                    E = 5e3
            }
            return E = J + E, U = {
                id: x++,
                callback: X,
                priorityLevel: U,
                startTime: J,
                expirationTime: E,
                sortIndex: -1
            }, J > ie ? (U.sortIndex = J, l(h, U), s(y) === null && U === s(h) && (_ ? (k(te), te = -1) : _ = !0, je(V, J - ie))) : (U.sortIndex = E, l(y, U), S || O || (S = !0, de || (de = !0, Ae()))), U
        }, i.unstable_shouldYield = re, i.unstable_wrapCallback = function(U) {
            var X = N;
            return function() {
                var J = N;
                N = X;
                try {
                    return U.apply(this, arguments)
                } finally {
                    N = J
                }
            }
        }
    }(vo)), vo
}
var Fh;

function by() {
    return Fh || (Fh = 1, xo.exports = yy()), xo.exports
}
var So = {
        exports: {}
    },
    nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wh;

function xy() {
    if (Wh) return nt;
    Wh = 1;
    var i = Yo();

    function l(y) {
        var h = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            h += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var x = 2; x < arguments.length; x++) h += "&args[]=" + encodeURIComponent(arguments[x])
        }
        return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s() {}
    var r = {
            d: {
                f: s,
                r: function() {
                    throw Error(l(522))
                },
                D: s,
                C: s,
                L: s,
                m: s,
                X: s,
                S: s,
                M: s
            },
            p: 0,
            findDOMNode: null
        },
        o = Symbol.for("react.portal");

    function f(y, h, x) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: v == null ? null : "" + v,
            children: y,
            containerInfo: h,
            implementation: x
        }
    }
    var d = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function m(y, h) {
        if (y === "font") return "";
        if (typeof h == "string") return h === "use-credentials" ? h : ""
    }
    return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, nt.createPortal = function(y, h) {
        var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(l(299));
        return f(y, h, null, x)
    }, nt.flushSync = function(y) {
        var h = d.T,
            x = r.p;
        try {
            if (d.T = null, r.p = 2, y) return y()
        } finally {
            d.T = h, r.p = x, r.d.f()
        }
    }, nt.preconnect = function(y, h) {
        typeof y == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, r.d.C(y, h))
    }, nt.prefetchDNS = function(y) {
        typeof y == "string" && r.d.D(y)
    }, nt.preinit = function(y, h) {
        if (typeof y == "string" && h && typeof h.as == "string") {
            var x = h.as,
                v = m(x, h.crossOrigin),
                N = typeof h.integrity == "string" ? h.integrity : void 0,
                O = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
            x === "style" ? r.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, {
                crossOrigin: v,
                integrity: N,
                fetchPriority: O
            }) : x === "script" && r.d.X(y, {
                crossOrigin: v,
                integrity: N,
                fetchPriority: O,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0
            })
        }
    }, nt.preinitModule = function(y, h) {
        if (typeof y == "string")
            if (typeof h == "object" && h !== null) {
                if (h.as == null || h.as === "script") {
                    var x = m(h.as, h.crossOrigin);
                    r.d.M(y, {
                        crossOrigin: x,
                        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                        nonce: typeof h.nonce == "string" ? h.nonce : void 0
                    })
                }
            } else h == null && r.d.M(y)
    }, nt.preload = function(y, h) {
        if (typeof y == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
            var x = h.as,
                v = m(x, h.crossOrigin);
            r.d.L(y, x, {
                crossOrigin: v,
                integrity: typeof h.integrity == "string" ? h.integrity : void 0,
                nonce: typeof h.nonce == "string" ? h.nonce : void 0,
                type: typeof h.type == "string" ? h.type : void 0,
                fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
                referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
                imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
                imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
                media: typeof h.media == "string" ? h.media : void 0
            })
        }
    }, nt.preloadModule = function(y, h) {
        if (typeof y == "string")
            if (h) {
                var x = m(h.as, h.crossOrigin);
                r.d.m(y, {
                    as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
                    crossOrigin: x,
                    integrity: typeof h.integrity == "string" ? h.integrity : void 0
                })
            } else r.d.m(y)
    }, nt.requestFormReset = function(y) {
        r.d.r(y)
    }, nt.unstable_batchedUpdates = function(y, h) {
        return y(h)
    }, nt.useFormState = function(y, h, x) {
        return d.H.useFormState(y, h, x)
    }, nt.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }, nt.version = "19.1.0", nt
}
var Ih;

function vy() {
    if (Ih) return So.exports;
    Ih = 1;

    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
        } catch (l) {
            console.error(l)
        }
    }
    return i(), So.exports = xy(), So.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em;

function Sy() {
    if (em) return ni;
    em = 1;
    var i = by(),
        l = Yo(),
        s = vy();

    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function f(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function d(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function m(e) {
        if (f(e) !== e) throw Error(r(188))
    }

    function y(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e), t === null) throw Error(r(188));
            return t !== e ? null : e
        }
        for (var n = e, a = t;;) {
            var u = n.return;
            if (u === null) break;
            var c = u.alternate;
            if (c === null) {
                if (a = u.return, a !== null) {
                    n = a;
                    continue
                }
                break
            }
            if (u.child === c.child) {
                for (c = u.child; c;) {
                    if (c === n) return m(u), e;
                    if (c === a) return m(u), t;
                    c = c.sibling
                }
                throw Error(r(188))
            }
            if (n.return !== a.return) n = u, a = c;
            else {
                for (var g = !1, b = u.child; b;) {
                    if (b === n) {
                        g = !0, n = u, a = c;
                        break
                    }
                    if (b === a) {
                        g = !0, a = u, n = c;
                        break
                    }
                    b = b.sibling
                }
                if (!g) {
                    for (b = c.child; b;) {
                        if (b === n) {
                            g = !0, n = c, a = u;
                            break
                        }
                        if (b === a) {
                            g = !0, a = c, n = u;
                            break
                        }
                        b = b.sibling
                    }
                    if (!g) throw Error(r(189))
                }
            }
            if (n.alternate !== a) throw Error(r(190))
        }
        if (n.tag !== 3) throw Error(r(188));
        return n.stateNode.current === n ? e : t
    }

    function h(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = h(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var x = Object.assign,
        v = Symbol.for("react.element"),
        N = Symbol.for("react.transitional.element"),
        O = Symbol.for("react.portal"),
        S = Symbol.for("react.fragment"),
        _ = Symbol.for("react.strict_mode"),
        M = Symbol.for("react.profiler"),
        B = Symbol.for("react.provider"),
        k = Symbol.for("react.consumer"),
        G = Symbol.for("react.context"),
        K = Symbol.for("react.forward_ref"),
        V = Symbol.for("react.suspense"),
        de = Symbol.for("react.suspense_list"),
        te = Symbol.for("react.memo"),
        ne = Symbol.for("react.lazy"),
        F = Symbol.for("react.activity"),
        re = Symbol.for("react.memo_cache_sentinel"),
        Ee = Symbol.iterator;

    function Ae(e) {
        return e === null || typeof e != "object" ? null : (e = Ee && e[Ee] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var He = Symbol.for("react.client.reference");

    function ce(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === He ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case S:
                return "Fragment";
            case M:
                return "Profiler";
            case _:
                return "StrictMode";
            case V:
                return "Suspense";
            case de:
                return "SuspenseList";
            case F:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case O:
                return "Portal";
            case G:
                return (e.displayName || "Context") + ".Provider";
            case k:
                return (e._context.displayName || "Context") + ".Consumer";
            case K:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case te:
                return t = e.displayName || null, t !== null ? t : ce(e.type) || "Memo";
            case ne:
                t = e._payload, e = e._init;
                try {
                    return ce(e(t))
                } catch {}
        }
        return null
    }
    var je = Array.isArray,
        U = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        J = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        ie = [],
        E = -1;

    function H(e) {
        return {
            current: e
        }
    }

    function Q(e) {
        0 > E || (e.current = ie[E], ie[E] = null, E--)
    }

    function $(e, t) {
        E++, ie[E] = e.current, e.current = t
    }
    var I = H(null),
        pe = H(null),
        ue = H(null),
        st = H(null);

    function De(e, t) {
        switch ($(ue, t), $(pe, e), $(I, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? xh(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = xh(t), e = vh(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        Q(I), $(I, e)
    }

    function Lt() {
        Q(I), Q(pe), Q(ue)
    }

    function ee(e) {
        e.memoizedState !== null && $(st, e);
        var t = I.current,
            n = vh(t, e.type);
        t !== n && ($(pe, e), $(I, n))
    }

    function ze(e) {
        pe.current === e && (Q(I), Q(pe)), st.current === e && (Q(st), Jl._currentValue = J)
    }
    var Ut = Object.prototype.hasOwnProperty,
        nr = i.unstable_scheduleCallback,
        ar = i.unstable_cancelCallback,
        Xg = i.unstable_shouldYield,
        $g = i.unstable_requestPaint,
        Gt = i.unstable_now,
        Qg = i.unstable_getCurrentPriorityLevel,
        Wo = i.unstable_ImmediatePriority,
        Io = i.unstable_UserBlockingPriority,
        xi = i.unstable_NormalPriority,
        Kg = i.unstable_LowPriority,
        ec = i.unstable_IdlePriority,
        Zg = i.log,
        Jg = i.unstable_setDisableYieldValue,
        ll = null,
        pt = null;

    function bn(e) {
        if (typeof Zg == "function" && Jg(e), pt && typeof pt.setStrictMode == "function") try {
            pt.setStrictMode(ll, e)
        } catch {}
    }
    var yt = Math.clz32 ? Math.clz32 : Ig,
        Fg = Math.log,
        Wg = Math.LN2;

    function Ig(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Fg(e) / Wg | 0) | 0
    }
    var vi = 256,
        Si = 4194304;

    function Gn(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function wi(e, t, n) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var u = 0,
            c = e.suspendedLanes,
            g = e.pingedLanes;
        e = e.warmLanes;
        var b = a & 134217727;
        return b !== 0 ? (a = b & ~c, a !== 0 ? u = Gn(a) : (g &= b, g !== 0 ? u = Gn(g) : n || (n = b & ~e, n !== 0 && (u = Gn(n))))) : (b = a & ~c, b !== 0 ? u = Gn(b) : g !== 0 ? u = Gn(g) : n || (n = a & ~e, n !== 0 && (u = Gn(n)))), u === 0 ? 0 : t !== 0 && t !== u && (t & c) === 0 && (c = u & -u, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : u
    }

    function il(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function ep(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function tc() {
        var e = vi;
        return vi <<= 1, (vi & 4194048) === 0 && (vi = 256), e
    }

    function nc() {
        var e = Si;
        return Si <<= 1, (Si & 62914560) === 0 && (Si = 4194304), e
    }

    function lr(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function sl(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function tp(e, t, n, a, u, c) {
        var g = e.pendingLanes;
        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
        var b = e.entanglements,
            w = e.expirationTimes,
            A = e.hiddenUpdates;
        for (n = g & ~n; 0 < n;) {
            var q = 31 - yt(n),
                Y = 1 << q;
            b[q] = 0, w[q] = -1;
            var D = A[q];
            if (D !== null)
                for (A[q] = null, q = 0; q < D.length; q++) {
                    var z = D[q];
                    z !== null && (z.lane &= -536870913)
                }
            n &= ~Y
        }
        a !== 0 && ac(e, a, 0), c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(g & ~t))
    }

    function ac(e, t, n) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var a = 31 - yt(t);
        e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 4194090
    }

    function lc(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var a = 31 - yt(n),
                u = 1 << a;
            u & t | e[a] & t && (e[a] |= t), n &= ~u
        }
    }

    function ir(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function sr(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function ic() {
        var e = X.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Bh(e.type))
    }

    function np(e, t) {
        var n = X.p;
        try {
            return X.p = e, t()
        } finally {
            X.p = n
        }
    }
    var xn = Math.random().toString(36).slice(2),
        et = "__reactFiber$" + xn,
        ot = "__reactProps$" + xn,
        da = "__reactContainer$" + xn,
        rr = "__reactEvents$" + xn,
        ap = "__reactListeners$" + xn,
        lp = "__reactHandles$" + xn,
        sc = "__reactResources$" + xn,
        rl = "__reactMarker$" + xn;

    function ur(e) {
        delete e[et], delete e[ot], delete e[rr], delete e[ap], delete e[lp]
    }

    function ha(e) {
        var t = e[et];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[da] || n[et]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = Nh(e); e !== null;) {
                        if (n = e[et]) return n;
                        e = Nh(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function ma(e) {
        if (e = e[et] || e[da]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function ul(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(r(33))
    }

    function ga(e) {
        var t = e[sc];
        return t || (t = e[sc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function Qe(e) {
        e[rl] = !0
    }
    var rc = new Set,
        uc = {};

    function Vn(e, t) {
        pa(e, t), pa(e + "Capture", t)
    }

    function pa(e, t) {
        for (uc[e] = t, e = 0; e < t.length; e++) rc.add(t[e])
    }
    var ip = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        oc = {},
        cc = {};

    function sp(e) {
        return Ut.call(cc, e) ? !0 : Ut.call(oc, e) ? !1 : ip.test(e) ? cc[e] = !0 : (oc[e] = !0, !1)
    }

    function Ei(e, t, n) {
        if (sp(t))
            if (n === null) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + n)
            }
    }

    function Ni(e, t, n) {
        if (n === null) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + n)
        }
    }

    function en(e, t, n, a) {
        if (a === null) e.removeAttribute(n);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttributeNS(t, n, "" + a)
        }
    }
    var or, fc;

    function ya(e) {
        if (or === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            or = t && t[1] || "", fc = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + or + e + fc
    }
    var cr = !1;

    function fr(e, t) {
        if (!e || cr) return "";
        cr = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var Y = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(Y.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Y, [])
                                } catch (z) {
                                    var D = z
                                }
                                Reflect.construct(e, [], Y)
                            } else {
                                try {
                                    Y.call()
                                } catch (z) {
                                    D = z
                                }
                                e.call(Y.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (z) {
                                D = z
                            }(Y = e()) && typeof Y.catch == "function" && Y.catch(function() {})
                        }
                    } catch (z) {
                        if (z && D && typeof z.stack == "string") return [z.stack, D.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = a.DetermineComponentFrameRoot(),
                g = c[0],
                b = c[1];
            if (g && b) {
                var w = g.split(`
`),
                    A = b.split(`
`);
                for (u = a = 0; a < w.length && !w[a].includes("DetermineComponentFrameRoot");) a++;
                for (; u < A.length && !A[u].includes("DetermineComponentFrameRoot");) u++;
                if (a === w.length || u === A.length)
                    for (a = w.length - 1, u = A.length - 1; 1 <= a && 0 <= u && w[a] !== A[u];) u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (w[a] !== A[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--, u--, 0 > u || w[a] !== A[u]) {
                                    var q = `
` + w[a].replace(" at new ", " at ");
                                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q
                                } while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            cr = !1, Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? ya(n) : ""
    }

    function rp(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return ya(e.type);
            case 16:
                return ya("Lazy");
            case 13:
                return ya("Suspense");
            case 19:
                return ya("SuspenseList");
            case 0:
            case 15:
                return fr(e.type, !1);
            case 11:
                return fr(e.type.render, !1);
            case 1:
                return fr(e.type, !0);
            case 31:
                return ya("Activity");
            default:
                return ""
        }
    }

    function dc(e) {
        try {
            var t = "";
            do t += rp(e), e = e.return; while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }

    function jt(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function hc(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function up(e) {
        var t = hc(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var u = n.get,
                c = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(g) {
                    a = "" + g, c.call(this, g)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(g) {
                    a = "" + g
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Ri(e) {
        e._valueTracker || (e._valueTracker = up(e))
    }

    function mc(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            a = "";
        return e && (a = hc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1
    }

    function ji(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var op = /[\n"\\]/g;

    function Ot(e) {
        return e.replace(op, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function dr(e, t, n, a, u, c, g, b) {
        e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? hr(e, g, jt(t)) : n != null ? hr(e, g, jt(n)) : a != null && e.removeAttribute("value"), u == null && c != null && (e.defaultChecked = !!c), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + jt(b) : e.removeAttribute("name")
    }

    function gc(e, t, n, a, u, c, g, b) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
            if (!(c !== "submit" && c !== "reset" || t != null)) return;
            n = n != null ? "" + jt(n) : "", t = t != null ? "" + jt(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t
        }
        a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = b ? e.checked : !!a, e.defaultChecked = !!a, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g)
    }

    function hr(e, t, n) {
        t === "number" && ji(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }

    function ba(e, t, n, a) {
        if (e = e.options, t) {
            t = {};
            for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
            for (n = 0; n < e.length; n++) u = t.hasOwnProperty("$" + e[n].value), e[n].selected !== u && (e[n].selected = u), u && a && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + jt(n), t = null, u = 0; u < e.length; u++) {
                if (e[u].value === n) {
                    e[u].selected = !0, a && (e[u].defaultSelected = !0);
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }

    function pc(e, t, n) {
        if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + jt(n) : ""
    }

    function yc(e, t, n, a) {
        if (t == null) {
            if (a != null) {
                if (n != null) throw Error(r(92));
                if (je(a)) {
                    if (1 < a.length) throw Error(r(93));
                    a = a[0]
                }
                n = a
            }
            n == null && (n = ""), t = n
        }
        n = jt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a)
    }

    function xa(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var cp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function bc(e, t, n) {
        var a = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || cp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }

    function xc(e, t, n) {
        if (t != null && typeof t != "object") throw Error(r(62));
        if (e = e.style, n != null) {
            for (var a in n) !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var u in t) a = t[u], t.hasOwnProperty(u) && n[u] !== a && bc(e, u, a)
        } else
            for (var c in t) t.hasOwnProperty(c) && bc(e, c, t[c])
    }

    function mr(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var fp = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        dp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Oi(e) {
        return dp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var gr = null;

    function pr(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var va = null,
        Sa = null;

    function vc(e) {
        var t = ma(e);
        if (t && (e = t.stateNode)) {
            var n = e[ot] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (dr(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + Ot("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var a = n[t];
                            if (a !== e && a.form === e.form) {
                                var u = a[ot] || null;
                                if (!u) throw Error(r(90));
                                dr(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                            }
                        }
                        for (t = 0; t < n.length; t++) a = n[t], a.form === e.form && mc(a)
                    }
                    break e;
                case "textarea":
                    pc(e, n.value, n.defaultValue);
                    break e;
                case "select":
                    t = n.value, t != null && ba(e, !!n.multiple, t, !1)
            }
        }
    }
    var yr = !1;

    function Sc(e, t, n) {
        if (yr) return e(t, n);
        yr = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (yr = !1, (va !== null || Sa !== null) && (ds(), va && (t = va, e = Sa, Sa = va = null, vc(t), e)))
                for (t = 0; t < e.length; t++) vc(e[t])
        }
    }

    function ol(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var a = n[ot] || null;
        if (a === null) return null;
        n = a[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(r(231, t, typeof n));
        return n
    }
    var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        br = !1;
    if (tn) try {
        var cl = {};
        Object.defineProperty(cl, "passive", {
            get: function() {
                br = !0
            }
        }), window.addEventListener("test", cl, cl), window.removeEventListener("test", cl, cl)
    } catch {
        br = !1
    }
    var vn = null,
        xr = null,
        Ti = null;

    function wc() {
        if (Ti) return Ti;
        var e, t = xr,
            n = t.length,
            a, u = "value" in vn ? vn.value : vn.textContent,
            c = u.length;
        for (e = 0; e < n && t[e] === u[e]; e++);
        var g = n - e;
        for (a = 1; a <= g && t[n - a] === u[c - a]; a++);
        return Ti = u.slice(e, 1 < a ? 1 - a : void 0)
    }

    function Ci(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Ai() {
        return !0
    }

    function Ec() {
        return !1
    }

    function ct(e) {
        function t(n, a, u, c, g) {
            this._reactName = n, this._targetInst = u, this.type = a, this.nativeEvent = c, this.target = g, this.currentTarget = null;
            for (var b in e) e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(c) : c[b]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Ai : Ec, this.isPropagationStopped = Ec, this
        }
        return x(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ai)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ai)
            },
            persist: function() {},
            isPersistent: Ai
        }), t
    }
    var Xn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        _i = ct(Xn),
        fl = x({}, Xn, {
            view: 0,
            detail: 0
        }),
        hp = ct(fl),
        vr, Sr, dl, Di = x({}, fl, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Er,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== dl && (dl && e.type === "mousemove" ? (vr = e.screenX - dl.screenX, Sr = e.screenY - dl.screenY) : Sr = vr = 0, dl = e), vr)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Sr
            }
        }),
        Nc = ct(Di),
        mp = x({}, Di, {
            dataTransfer: 0
        }),
        gp = ct(mp),
        pp = x({}, fl, {
            relatedTarget: 0
        }),
        wr = ct(pp),
        yp = x({}, Xn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        bp = ct(yp),
        xp = x({}, Xn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        vp = ct(xp),
        Sp = x({}, Xn, {
            data: 0
        }),
        Rc = ct(Sp),
        wp = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Ep = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Np = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Rp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Np[e]) ? !!t[e] : !1
    }

    function Er() {
        return Rp
    }
    var jp = x({}, fl, {
            key: function(e) {
                if (e.key) {
                    var t = wp[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ep[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Er,
            charCode: function(e) {
                return e.type === "keypress" ? Ci(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Op = ct(jp),
        Tp = x({}, Di, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        jc = ct(Tp),
        Cp = x({}, fl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Er
        }),
        Ap = ct(Cp),
        _p = x({}, Xn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Dp = ct(_p),
        Mp = x({}, Di, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        zp = ct(Mp),
        Lp = x({}, Xn, {
            newState: 0,
            oldState: 0
        }),
        Up = ct(Lp),
        kp = [9, 13, 27, 32],
        Nr = tn && "CompositionEvent" in window,
        hl = null;
    tn && "documentMode" in document && (hl = document.documentMode);
    var Hp = tn && "TextEvent" in window && !hl,
        Oc = tn && (!Nr || hl && 8 < hl && 11 >= hl),
        Tc = " ",
        Cc = !1;

    function Ac(e, t) {
        switch (e) {
            case "keyup":
                return kp.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function _c(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var wa = !1;

    function Bp(e, t) {
        switch (e) {
            case "compositionend":
                return _c(t);
            case "keypress":
                return t.which !== 32 ? null : (Cc = !0, Tc);
            case "textInput":
                return e = t.data, e === Tc && Cc ? null : e;
            default:
                return null
        }
    }

    function qp(e, t) {
        if (wa) return e === "compositionend" || !Nr && Ac(e, t) ? (e = wc(), Ti = xr = vn = null, wa = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Oc && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Pp = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Dc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Pp[e.type] : t === "textarea"
    }

    function Mc(e, t, n, a) {
        va ? Sa ? Sa.push(a) : Sa = [a] : va = a, t = bs(t, "onChange"), 0 < t.length && (n = new _i("onChange", "change", null, n, a), e.push({
            event: n,
            listeners: t
        }))
    }
    var ml = null,
        gl = null;

    function Yp(e) {
        mh(e, 0)
    }

    function Mi(e) {
        var t = ul(e);
        if (mc(t)) return e
    }

    function zc(e, t) {
        if (e === "change") return t
    }
    var Lc = !1;
    if (tn) {
        var Rr;
        if (tn) {
            var jr = "oninput" in document;
            if (!jr) {
                var Uc = document.createElement("div");
                Uc.setAttribute("oninput", "return;"), jr = typeof Uc.oninput == "function"
            }
            Rr = jr
        } else Rr = !1;
        Lc = Rr && (!document.documentMode || 9 < document.documentMode)
    }

    function kc() {
        ml && (ml.detachEvent("onpropertychange", Hc), gl = ml = null)
    }

    function Hc(e) {
        if (e.propertyName === "value" && Mi(gl)) {
            var t = [];
            Mc(t, gl, e, pr(e)), Sc(Yp, t)
        }
    }

    function Gp(e, t, n) {
        e === "focusin" ? (kc(), ml = t, gl = n, ml.attachEvent("onpropertychange", Hc)) : e === "focusout" && kc()
    }

    function Vp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Mi(gl)
    }

    function Xp(e, t) {
        if (e === "click") return Mi(t)
    }

    function $p(e, t) {
        if (e === "input" || e === "change") return Mi(t)
    }

    function Qp(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var bt = typeof Object.is == "function" ? Object.is : Qp;

    function pl(e, t) {
        if (bt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            a = Object.keys(t);
        if (n.length !== a.length) return !1;
        for (a = 0; a < n.length; a++) {
            var u = n[a];
            if (!Ut.call(t, u) || !bt(e[u], t[u])) return !1
        }
        return !0
    }

    function Bc(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function qc(e, t) {
        var n = Bc(e);
        e = 0;
        for (var a; n;) {
            if (n.nodeType === 3) {
                if (a = e + n.textContent.length, e <= t && a >= t) return {
                    node: n,
                    offset: t - e
                };
                e = a
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Bc(n)
        }
    }

    function Pc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Yc(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ji(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = ji(e.document)
        }
        return t
    }

    function Or(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Kp = tn && "documentMode" in document && 11 >= document.documentMode,
        Ea = null,
        Tr = null,
        yl = null,
        Cr = !1;

    function Gc(e, t, n) {
        var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Cr || Ea == null || Ea !== ji(a) || (a = Ea, "selectionStart" in a && Or(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), yl && pl(yl, a) || (yl = a, a = bs(Tr, "onSelect"), 0 < a.length && (t = new _i("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: a
        }), t.target = Ea)))
    }

    function $n(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var Na = {
            animationend: $n("Animation", "AnimationEnd"),
            animationiteration: $n("Animation", "AnimationIteration"),
            animationstart: $n("Animation", "AnimationStart"),
            transitionrun: $n("Transition", "TransitionRun"),
            transitionstart: $n("Transition", "TransitionStart"),
            transitioncancel: $n("Transition", "TransitionCancel"),
            transitionend: $n("Transition", "TransitionEnd")
        },
        Ar = {},
        Vc = {};
    tn && (Vc = document.createElement("div").style, "AnimationEvent" in window || (delete Na.animationend.animation, delete Na.animationiteration.animation, delete Na.animationstart.animation), "TransitionEvent" in window || delete Na.transitionend.transition);

    function Qn(e) {
        if (Ar[e]) return Ar[e];
        if (!Na[e]) return e;
        var t = Na[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Vc) return Ar[e] = t[n];
        return e
    }
    var Xc = Qn("animationend"),
        $c = Qn("animationiteration"),
        Qc = Qn("animationstart"),
        Zp = Qn("transitionrun"),
        Jp = Qn("transitionstart"),
        Fp = Qn("transitioncancel"),
        Kc = Qn("transitionend"),
        Zc = new Map,
        _r = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    _r.push("scrollEnd");

    function kt(e, t) {
        Zc.set(e, t), Vn(t, [e])
    }
    var Jc = new WeakMap;

    function Tt(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = Jc.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: dc(t)
            }, Jc.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: dc(t)
        }
    }
    var Ct = [],
        Ra = 0,
        Dr = 0;

    function zi() {
        for (var e = Ra, t = Dr = Ra = 0; t < e;) {
            var n = Ct[t];
            Ct[t++] = null;
            var a = Ct[t];
            Ct[t++] = null;
            var u = Ct[t];
            Ct[t++] = null;
            var c = Ct[t];
            if (Ct[t++] = null, a !== null && u !== null) {
                var g = a.pending;
                g === null ? u.next = u : (u.next = g.next, g.next = u), a.pending = u
            }
            c !== 0 && Fc(n, u, c)
        }
    }

    function Li(e, t, n, a) {
        Ct[Ra++] = e, Ct[Ra++] = t, Ct[Ra++] = n, Ct[Ra++] = a, Dr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a)
    }

    function Mr(e, t, n, a) {
        return Li(e, t, n, a), Ui(e)
    }

    function ja(e, t) {
        return Li(e, null, null, t), Ui(e)
    }

    function Fc(e, t, n) {
        e.lanes |= n;
        var a = e.alternate;
        a !== null && (a.lanes |= n);
        for (var u = !1, c = e.return; c !== null;) c.childLanes |= n, a = c.alternate, a !== null && (a.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (u = !0)), e = c, c = c.return;
        return e.tag === 3 ? (c = e.stateNode, u && t !== null && (u = 31 - yt(n), e = c.hiddenUpdates, a = e[u], a === null ? e[u] = [t] : a.push(t), t.lane = n | 536870912), c) : null
    }

    function Ui(e) {
        if (50 < Yl) throw Yl = 0, Bu = null, Error(r(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Oa = {};

    function Wp(e, t, n, a) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function xt(e, t, n, a) {
        return new Wp(e, t, n, a)
    }

    function zr(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function nn(e, t) {
        var n = e.alternate;
        return n === null ? (n = xt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
    }

    function Wc(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function ki(e, t, n, a, u, c) {
        var g = 0;
        if (a = e, typeof e == "function") zr(e) && (g = 1);
        else if (typeof e == "string") g = ey(e, n, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case F:
                return e = xt(31, n, t, u), e.elementType = F, e.lanes = c, e;
            case S:
                return Kn(n.children, u, c, t);
            case _:
                g = 8, u |= 24;
                break;
            case M:
                return e = xt(12, n, t, u | 2), e.elementType = M, e.lanes = c, e;
            case V:
                return e = xt(13, n, t, u), e.elementType = V, e.lanes = c, e;
            case de:
                return e = xt(19, n, t, u), e.elementType = de, e.lanes = c, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case B:
                    case G:
                        g = 10;
                        break e;
                    case k:
                        g = 9;
                        break e;
                    case K:
                        g = 11;
                        break e;
                    case te:
                        g = 14;
                        break e;
                    case ne:
                        g = 16, a = null;
                        break e
                }
                g = 29, n = Error(r(130, e === null ? "null" : typeof e, "")), a = null
        }
        return t = xt(g, n, t, u), t.elementType = e, t.type = a, t.lanes = c, t
    }

    function Kn(e, t, n, a) {
        return e = xt(7, e, a, t), e.lanes = n, e
    }

    function Lr(e, t, n) {
        return e = xt(6, e, null, t), e.lanes = n, e
    }

    function Ur(e, t, n) {
        return t = xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var Ta = [],
        Ca = 0,
        Hi = null,
        Bi = 0,
        At = [],
        _t = 0,
        Zn = null,
        an = 1,
        ln = "";

    function Jn(e, t) {
        Ta[Ca++] = Bi, Ta[Ca++] = Hi, Hi = e, Bi = t
    }

    function Ic(e, t, n) {
        At[_t++] = an, At[_t++] = ln, At[_t++] = Zn, Zn = e;
        var a = an;
        e = ln;
        var u = 32 - yt(a) - 1;
        a &= ~(1 << u), n += 1;
        var c = 32 - yt(t) + u;
        if (30 < c) {
            var g = u - u % 5;
            c = (a & (1 << g) - 1).toString(32), a >>= g, u -= g, an = 1 << 32 - yt(t) + u | n << u | a, ln = c + e
        } else an = 1 << c | n << u | a, ln = e
    }

    function kr(e) {
        e.return !== null && (Jn(e, 1), Ic(e, 1, 0))
    }

    function Hr(e) {
        for (; e === Hi;) Hi = Ta[--Ca], Ta[Ca] = null, Bi = Ta[--Ca], Ta[Ca] = null;
        for (; e === Zn;) Zn = At[--_t], At[_t] = null, ln = At[--_t], At[_t] = null, an = At[--_t], At[_t] = null
    }
    var rt = null,
        Be = null,
        we = !1,
        Fn = null,
        Vt = !1,
        Br = Error(r(519));

    function Wn(e) {
        var t = Error(r(418, ""));
        throw vl(Tt(t, e)), Br
    }

    function ef(e) {
        var t = e.stateNode,
            n = e.type,
            a = e.memoizedProps;
        switch (t[et] = e, t[ot] = a, n) {
            case "dialog":
                be("cancel", t), be("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                be("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < Vl.length; n++) be(Vl[n], t);
                break;
            case "source":
                be("error", t);
                break;
            case "img":
            case "image":
            case "link":
                be("error", t), be("load", t);
                break;
            case "details":
                be("toggle", t);
                break;
            case "input":
                be("invalid", t), gc(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Ri(t);
                break;
            case "select":
                be("invalid", t);
                break;
            case "textarea":
                be("invalid", t), yc(t, a.value, a.defaultValue, a.children), Ri(t)
        }
        n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || bh(t.textContent, n) ? (a.popover != null && (be("beforetoggle", t), be("toggle", t)), a.onScroll != null && be("scroll", t), a.onScrollEnd != null && be("scrollend", t), a.onClick != null && (t.onclick = xs), t = !0) : t = !1, t || Wn(e)
    }

    function tf(e) {
        for (rt = e.return; rt;) switch (rt.tag) {
            case 5:
            case 13:
                Vt = !1;
                return;
            case 27:
            case 3:
                Vt = !0;
                return;
            default:
                rt = rt.return
        }
    }

    function bl(e) {
        if (e !== rt) return !1;
        if (!we) return tf(e), we = !0, !1;
        var t = e.tag,
            n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || to(e.type, e.memoizedProps)), n = !n), n && Be && Wn(e), tf(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8)
                        if (n = e.data, n === "/$") {
                            if (t === 0) {
                                Be = Bt(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    e = e.nextSibling
                }
                Be = null
            }
        } else t === 27 ? (t = Be, Un(e.type) ? (e = io, io = null, Be = e) : Be = t) : Be = rt ? Bt(e.stateNode.nextSibling) : null;
        return !0
    }

    function xl() {
        Be = rt = null, we = !1
    }

    function nf() {
        var e = Fn;
        return e !== null && (ht === null ? ht = e : ht.push.apply(ht, e), Fn = null), e
    }

    function vl(e) {
        Fn === null ? Fn = [e] : Fn.push(e)
    }
    var qr = H(null),
        In = null,
        sn = null;

    function Sn(e, t, n) {
        $(qr, t._currentValue), t._currentValue = n
    }

    function rn(e) {
        e._currentValue = qr.current, Q(qr)
    }

    function Pr(e, t, n) {
        for (; e !== null;) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function Yr(e, t, n, a) {
        var u = e.child;
        for (u !== null && (u.return = e); u !== null;) {
            var c = u.dependencies;
            if (c !== null) {
                var g = u.child;
                c = c.firstContext;
                e: for (; c !== null;) {
                    var b = c;
                    c = u;
                    for (var w = 0; w < t.length; w++)
                        if (b.context === t[w]) {
                            c.lanes |= n, b = c.alternate, b !== null && (b.lanes |= n), Pr(c.return, n, e), a || (g = null);
                            break e
                        } c = b.next
                }
            } else if (u.tag === 18) {
                if (g = u.return, g === null) throw Error(r(341));
                g.lanes |= n, c = g.alternate, c !== null && (c.lanes |= n), Pr(g, n, e), g = null
            } else g = u.child;
            if (g !== null) g.return = u;
            else
                for (g = u; g !== null;) {
                    if (g === e) {
                        g = null;
                        break
                    }
                    if (u = g.sibling, u !== null) {
                        u.return = g.return, g = u;
                        break
                    }
                    g = g.return
                }
            u = g
        }
    }

    function Sl(e, t, n, a) {
        e = null;
        for (var u = t, c = !1; u !== null;) {
            if (!c) {
                if ((u.flags & 524288) !== 0) c = !0;
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var g = u.alternate;
                if (g === null) throw Error(r(387));
                if (g = g.memoizedProps, g !== null) {
                    var b = u.type;
                    bt(u.pendingProps.value, g.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (u === st.current) {
                if (g = u.alternate, g === null) throw Error(r(387));
                g.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Jl) : e = [Jl])
            }
            u = u.return
        }
        e !== null && Yr(t, e, n, a), t.flags |= 262144
    }

    function qi(e) {
        for (e = e.firstContext; e !== null;) {
            if (!bt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function ea(e) {
        In = e, sn = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function tt(e) {
        return af(In, e)
    }

    function Pi(e, t) {
        return In === null && ea(e), af(e, t)
    }

    function af(e, t) {
        var n = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, sn === null) {
            if (e === null) throw Error(r(308));
            sn = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else sn = sn.next = t;
        return n
    }
    var Ip = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(n, a) {
                        e.push(a)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(n) {
                    return n()
                })
            }
        },
        e0 = i.unstable_scheduleCallback,
        t0 = i.unstable_NormalPriority,
        Xe = {
            $$typeof: G,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Gr() {
        return {
            controller: new Ip,
            data: new Map,
            refCount: 0
        }
    }

    function wl(e) {
        e.refCount--, e.refCount === 0 && e0(t0, function() {
            e.controller.abort()
        })
    }
    var El = null,
        Vr = 0,
        Aa = 0,
        _a = null;

    function n0(e, t) {
        if (El === null) {
            var n = El = [];
            Vr = 0, Aa = $u(), _a = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    n.push(a)
                }
            }
        }
        return Vr++, t.then(lf, lf), t
    }

    function lf() {
        if (--Vr === 0 && El !== null) {
            _a !== null && (_a.status = "fulfilled");
            var e = El;
            El = null, Aa = 0, _a = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function a0(e, t) {
        var n = [],
            a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    n.push(u)
                }
            };
        return e.then(function() {
            a.status = "fulfilled", a.value = t;
            for (var u = 0; u < n.length; u++)(0, n[u])(t)
        }, function(u) {
            for (a.status = "rejected", a.reason = u, u = 0; u < n.length; u++)(0, n[u])(void 0)
        }), a
    }
    var sf = U.S;
    U.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && n0(e, t), sf !== null && sf(e, t)
    };
    var ta = H(null);

    function Xr() {
        var e = ta.current;
        return e !== null ? e : Me.pooledCache
    }

    function Yi(e, t) {
        t === null ? $(ta, ta.current) : $(ta, t.pool)
    }

    function rf() {
        var e = Xr();
        return e === null ? null : {
            parent: Xe._currentValue,
            pool: e
        }
    }
    var Nl = Error(r(460)),
        uf = Error(r(474)),
        Gi = Error(r(542)),
        $r = {
            then: function() {}
        };

    function of(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function Vi() {}

    function cf(e, t, n) {
        switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Vi, Vi), t = n), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, df(e), e;
            default:
                if (typeof t.status == "string") t.then(Vi, Vi);
                else {
                    if (e = Me, e !== null && 100 < e.shellSuspendCounter) throw Error(r(482));
                    e = t, e.status = "pending", e.then(function(a) {
                        if (t.status === "pending") {
                            var u = t;
                            u.status = "fulfilled", u.value = a
                        }
                    }, function(a) {
                        if (t.status === "pending") {
                            var u = t;
                            u.status = "rejected", u.reason = a
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, df(e), e
                }
                throw Rl = t, Nl
        }
    }
    var Rl = null;

    function ff() {
        if (Rl === null) throw Error(r(459));
        var e = Rl;
        return Rl = null, e
    }

    function df(e) {
        if (e === Nl || e === Gi) throw Error(r(483))
    }
    var wn = !1;

    function Qr(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Kr(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function En(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Nn(e, t, n) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (Ne & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Ui(e), Fc(e, null, n), t
        }
        return Li(e, a, t, n), Ui(e)
    }

    function jl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, lc(e, n)
        }
    }

    function Zr(e, t) {
        var n = e.updateQueue,
            a = e.alternate;
        if (a !== null && (a = a.updateQueue, n === a)) {
            var u = null,
                c = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var g = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? u = c = g : c = c.next = g, n = n.next
                } while (n !== null);
                c === null ? u = c = t : c = c.next = t
            } else u = c = t;
            n = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: c,
                shared: a.shared,
                callbacks: a.callbacks
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }
    var Jr = !1;

    function Ol() {
        if (Jr) {
            var e = _a;
            if (e !== null) throw e
        }
    }

    function Tl(e, t, n, a) {
        Jr = !1;
        var u = e.updateQueue;
        wn = !1;
        var c = u.firstBaseUpdate,
            g = u.lastBaseUpdate,
            b = u.shared.pending;
        if (b !== null) {
            u.shared.pending = null;
            var w = b,
                A = w.next;
            w.next = null, g === null ? c = A : g.next = A, g = w;
            var q = e.alternate;
            q !== null && (q = q.updateQueue, b = q.lastBaseUpdate, b !== g && (b === null ? q.firstBaseUpdate = A : b.next = A, q.lastBaseUpdate = w))
        }
        if (c !== null) {
            var Y = u.baseState;
            g = 0, q = A = w = null, b = c;
            do {
                var D = b.lane & -536870913,
                    z = D !== b.lane;
                if (z ? (xe & D) === D : (a & D) === D) {
                    D !== 0 && D === Aa && (Jr = !0), q !== null && (q = q.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var se = e,
                            ae = b;D = t;
                        var Ce = n;
                        switch (ae.tag) {
                            case 1:
                                if (se = ae.payload, typeof se == "function") {
                                    Y = se.call(Ce, Y, D);
                                    break e
                                }
                                Y = se;
                                break e;
                            case 3:
                                se.flags = se.flags & -65537 | 128;
                            case 0:
                                if (se = ae.payload, D = typeof se == "function" ? se.call(Ce, Y, D) : se, D == null) break e;
                                Y = x({}, Y, D);
                                break e;
                            case 2:
                                wn = !0
                        }
                    }
                    D = b.callback, D !== null && (e.flags |= 64, z && (e.flags |= 8192), z = u.callbacks, z === null ? u.callbacks = [D] : z.push(D))
                } else z = {
                    lane: D,
                    tag: b.tag,
                    payload: b.payload,
                    callback: b.callback,
                    next: null
                }, q === null ? (A = q = z, w = Y) : q = q.next = z, g |= D;
                if (b = b.next, b === null) {
                    if (b = u.shared.pending, b === null) break;
                    z = b, b = z.next, z.next = null, u.lastBaseUpdate = z, u.shared.pending = null
                }
            } while (!0);
            q === null && (w = Y), u.baseState = w, u.firstBaseUpdate = A, u.lastBaseUpdate = q, c === null && (u.shared.lanes = 0), Dn |= g, e.lanes = g, e.memoizedState = Y
        }
    }

    function hf(e, t) {
        if (typeof e != "function") throw Error(r(191, e));
        e.call(t)
    }

    function mf(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null, e = 0; e < n.length; e++) hf(n[e], t)
    }
    var Da = H(null),
        Xi = H(0);

    function gf(e, t) {
        e = mn, $(Xi, e), $(Da, t), mn = e | t.baseLanes
    }

    function Fr() {
        $(Xi, mn), $(Da, Da.current)
    }

    function Wr() {
        mn = Xi.current, Q(Da), Q(Xi)
    }
    var Rn = 0,
        me = null,
        Oe = null,
        Ge = null,
        $i = !1,
        Ma = !1,
        na = !1,
        Qi = 0,
        Cl = 0,
        za = null,
        l0 = 0;

    function Pe() {
        throw Error(r(321))
    }

    function Ir(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!bt(e[n], t[n])) return !1;
        return !0
    }

    function eu(e, t, n, a, u, c) {
        return Rn = c, me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? Wf : If, na = !1, c = n(a, u), na = !1, Ma && (c = yf(t, n, a, u)), pf(e), c
    }

    function pf(e) {
        U.H = Ii;
        var t = Oe !== null && Oe.next !== null;
        if (Rn = 0, Ge = Oe = me = null, $i = !1, Cl = 0, za = null, t) throw Error(r(300));
        e === null || Ke || (e = e.dependencies, e !== null && qi(e) && (Ke = !0))
    }

    function yf(e, t, n, a) {
        me = e;
        var u = 0;
        do {
            if (Ma && (za = null), Cl = 0, Ma = !1, 25 <= u) throw Error(r(301));
            if (u += 1, Ge = Oe = null, e.updateQueue != null) {
                var c = e.updateQueue;
                c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0)
            }
            U.H = f0, c = t(n, a)
        } while (Ma);
        return c
    }

    function i0() {
        var e = U.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? Al(t) : t, e = e.useState()[0], (Oe !== null ? Oe.memoizedState : null) !== e && (me.flags |= 1024), t
    }

    function tu() {
        var e = Qi !== 0;
        return Qi = 0, e
    }

    function nu(e, t, n) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
    }

    function au(e) {
        if ($i) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            $i = !1
        }
        Rn = 0, Ge = Oe = me = null, Ma = !1, Cl = Qi = 0, za = null
    }

    function ft() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ge === null ? me.memoizedState = Ge = e : Ge = Ge.next = e, Ge
    }

    function Ve() {
        if (Oe === null) {
            var e = me.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Oe.next;
        var t = Ge === null ? me.memoizedState : Ge.next;
        if (t !== null) Ge = t, Oe = e;
        else {
            if (e === null) throw me.alternate === null ? Error(r(467)) : Error(r(310));
            Oe = e, e = {
                memoizedState: Oe.memoizedState,
                baseState: Oe.baseState,
                baseQueue: Oe.baseQueue,
                queue: Oe.queue,
                next: null
            }, Ge === null ? me.memoizedState = Ge = e : Ge = Ge.next = e
        }
        return Ge
    }

    function lu() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Al(e) {
        var t = Cl;
        return Cl += 1, za === null && (za = []), e = cf(za, e, t), t = me, (Ge === null ? t.memoizedState : Ge.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Wf : If), e
    }

    function Ki(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return Al(e);
            if (e.$$typeof === G) return tt(e)
        }
        throw Error(r(438, String(e)))
    }

    function iu(e) {
        var t = null,
            n = me.updateQueue;
        if (n !== null && (t = n.memoCache), t == null) {
            var a = me.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), n === null && (n = lu(), me.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
            for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = re;
        return t.index++, n
    }

    function un(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Zi(e) {
        var t = Ve();
        return su(t, Oe, e)
    }

    function su(e, t, n) {
        var a = e.queue;
        if (a === null) throw Error(r(311));
        a.lastRenderedReducer = n;
        var u = e.baseQueue,
            c = a.pending;
        if (c !== null) {
            if (u !== null) {
                var g = u.next;
                u.next = c.next, c.next = g
            }
            t.baseQueue = u = c, a.pending = null
        }
        if (c = e.baseState, u === null) e.memoizedState = c;
        else {
            t = u.next;
            var b = g = null,
                w = null,
                A = t,
                q = !1;
            do {
                var Y = A.lane & -536870913;
                if (Y !== A.lane ? (xe & Y) === Y : (Rn & Y) === Y) {
                    var D = A.revertLane;
                    if (D === 0) w !== null && (w = w.next = {
                        lane: 0,
                        revertLane: 0,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }), Y === Aa && (q = !0);
                    else if ((Rn & D) === D) {
                        A = A.next, D === Aa && (q = !0);
                        continue
                    } else Y = {
                        lane: 0,
                        revertLane: A.revertLane,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }, w === null ? (b = w = Y, g = c) : w = w.next = Y, me.lanes |= D, Dn |= D;
                    Y = A.action, na && n(c, Y), c = A.hasEagerState ? A.eagerState : n(c, Y)
                } else D = {
                    lane: Y,
                    revertLane: A.revertLane,
                    action: A.action,
                    hasEagerState: A.hasEagerState,
                    eagerState: A.eagerState,
                    next: null
                }, w === null ? (b = w = D, g = c) : w = w.next = D, me.lanes |= Y, Dn |= Y;
                A = A.next
            } while (A !== null && A !== t);
            if (w === null ? g = c : w.next = b, !bt(c, e.memoizedState) && (Ke = !0, q && (n = _a, n !== null))) throw n;
            e.memoizedState = c, e.baseState = g, e.baseQueue = w, a.lastRenderedState = c
        }
        return u === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
    }

    function ru(e) {
        var t = Ve(),
            n = t.queue;
        if (n === null) throw Error(r(311));
        n.lastRenderedReducer = e;
        var a = n.dispatch,
            u = n.pending,
            c = t.memoizedState;
        if (u !== null) {
            n.pending = null;
            var g = u = u.next;
            do c = e(c, g.action), g = g.next; while (g !== u);
            bt(c, t.memoizedState) || (Ke = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c
        }
        return [c, a]
    }

    function bf(e, t, n) {
        var a = me,
            u = Ve(),
            c = we;
        if (c) {
            if (n === void 0) throw Error(r(407));
            n = n()
        } else n = t();
        var g = !bt((Oe || u).memoizedState, n);
        g && (u.memoizedState = n, Ke = !0), u = u.queue;
        var b = Sf.bind(null, a, u, e);
        if (_l(2048, 8, b, [e]), u.getSnapshot !== t || g || Ge !== null && Ge.memoizedState.tag & 1) {
            if (a.flags |= 2048, La(9, Ji(), vf.bind(null, a, u, n, t), null), Me === null) throw Error(r(349));
            c || (Rn & 124) !== 0 || xf(a, t, n)
        }
        return n
    }

    function xf(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = me.updateQueue, t === null ? (t = lu(), me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function vf(e, t, n, a) {
        t.value = n, t.getSnapshot = a, wf(t) && Ef(e)
    }

    function Sf(e, t, n) {
        return n(function() {
            wf(t) && Ef(e)
        })
    }

    function wf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !bt(e, n)
        } catch {
            return !0
        }
    }

    function Ef(e) {
        var t = ja(e, 2);
        t !== null && Nt(t, e, 2)
    }

    function uu(e) {
        var t = ft();
        if (typeof e == "function") {
            var n = e;
            if (e = n(), na) {
                bn(!0);
                try {
                    n()
                } finally {
                    bn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: un,
            lastRenderedState: e
        }, t
    }

    function Nf(e, t, n, a) {
        return e.baseState = n, su(e, Oe, typeof a == "function" ? a : un)
    }

    function s0(e, t, n, a, u) {
        if (Wi(e)) throw Error(r(485));
        if (e = t.action, e !== null) {
            var c = {
                payload: u,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(g) {
                    c.listeners.push(g)
                }
            };
            U.T !== null ? n(!0) : c.isTransition = !1, a(c), n = t.pending, n === null ? (c.next = t.pending = c, Rf(t, c)) : (c.next = n.next, t.pending = n.next = c)
        }
    }

    function Rf(e, t) {
        var n = t.action,
            a = t.payload,
            u = e.state;
        if (t.isTransition) {
            var c = U.T,
                g = {};
            U.T = g;
            try {
                var b = n(u, a),
                    w = U.S;
                w !== null && w(g, b), jf(e, t, b)
            } catch (A) {
                ou(e, t, A)
            } finally {
                U.T = c
            }
        } else try {
            c = n(u, a), jf(e, t, c)
        } catch (A) {
            ou(e, t, A)
        }
    }

    function jf(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
            Of(e, t, a)
        }, function(a) {
            return ou(e, t, a)
        }) : Of(e, t, n)
    }

    function Of(e, t, n) {
        t.status = "fulfilled", t.value = n, Tf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Rf(e, n)))
    }

    function ou(e, t, n) {
        var a = e.pending;
        if (e.pending = null, a !== null) {
            a = a.next;
            do t.status = "rejected", t.reason = n, Tf(t), t = t.next; while (t !== a)
        }
        e.action = null
    }

    function Tf(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function Cf(e, t) {
        return t
    }

    function Af(e, t) {
        if (we) {
            var n = Me.formState;
            if (n !== null) {
                e: {
                    var a = me;
                    if (we) {
                        if (Be) {
                            t: {
                                for (var u = Be, c = Vt; u.nodeType !== 8;) {
                                    if (!c) {
                                        u = null;
                                        break t
                                    }
                                    if (u = Bt(u.nextSibling), u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                c = u.data,
                                u = c === "F!" || c === "F" ? u : null
                            }
                            if (u) {
                                Be = Bt(u.nextSibling), a = u.data === "F!";
                                break e
                            }
                        }
                        Wn(a)
                    }
                    a = !1
                }
                a && (t = n[0])
            }
        }
        return n = ft(), n.memoizedState = n.baseState = t, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Cf,
            lastRenderedState: t
        }, n.queue = a, n = Zf.bind(null, me, a), a.dispatch = n, a = uu(!1), c = mu.bind(null, me, !1, a.queue), a = ft(), u = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, a.queue = u, n = s0.bind(null, me, u, c, n), u.dispatch = n, a.memoizedState = e, [t, n, !1]
    }

    function _f(e) {
        var t = Ve();
        return Df(t, Oe, e)
    }

    function Df(e, t, n) {
        if (t = su(e, t, Cf)[0], e = Zi(un)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var a = Al(t)
        } catch (g) {
            throw g === Nl ? Gi : g
        } else a = t;
        t = Ve();
        var u = t.queue,
            c = u.dispatch;
        return n !== t.memoizedState && (me.flags |= 2048, La(9, Ji(), r0.bind(null, u, n), null)), [a, c, e]
    }

    function r0(e, t) {
        e.action = t
    }

    function Mf(e) {
        var t = Ve(),
            n = Oe;
        if (n !== null) return Df(t, n, e);
        Ve(), t = t.memoizedState, n = Ve();
        var a = n.queue.dispatch;
        return n.memoizedState = e, [t, a, !1]
    }

    function La(e, t, n, a) {
        return e = {
            tag: e,
            create: n,
            deps: a,
            inst: t,
            next: null
        }, t = me.updateQueue, t === null && (t = lu(), me.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e
    }

    function Ji() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function zf() {
        return Ve().memoizedState
    }

    function Fi(e, t, n, a) {
        var u = ft();
        a = a === void 0 ? null : a, me.flags |= e, u.memoizedState = La(1 | t, Ji(), n, a)
    }

    function _l(e, t, n, a) {
        var u = Ve();
        a = a === void 0 ? null : a;
        var c = u.memoizedState.inst;
        Oe !== null && a !== null && Ir(a, Oe.memoizedState.deps) ? u.memoizedState = La(t, c, n, a) : (me.flags |= e, u.memoizedState = La(1 | t, c, n, a))
    }

    function Lf(e, t) {
        Fi(8390656, 8, e, t)
    }

    function Uf(e, t) {
        _l(2048, 8, e, t)
    }

    function kf(e, t) {
        return _l(4, 2, e, t)
    }

    function Hf(e, t) {
        return _l(4, 4, e, t)
    }

    function Bf(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function qf(e, t, n) {
        n = n != null ? n.concat([e]) : null, _l(4, 4, Bf.bind(null, t, e), n)
    }

    function cu() {}

    function Pf(e, t) {
        var n = Ve();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        return t !== null && Ir(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e)
    }

    function Yf(e, t) {
        var n = Ve();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        if (t !== null && Ir(t, a[1])) return a[0];
        if (a = e(), na) {
            bn(!0);
            try {
                e()
            } finally {
                bn(!1)
            }
        }
        return n.memoizedState = [a, t], a
    }

    function fu(e, t, n) {
        return n === void 0 || (Rn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Xd(), me.lanes |= e, Dn |= e, n)
    }

    function Gf(e, t, n, a) {
        return bt(n, t) ? n : Da.current !== null ? (e = fu(e, n, a), bt(e, t) || (Ke = !0), e) : (Rn & 42) === 0 ? (Ke = !0, e.memoizedState = n) : (e = Xd(), me.lanes |= e, Dn |= e, t)
    }

    function Vf(e, t, n, a, u) {
        var c = X.p;
        X.p = c !== 0 && 8 > c ? c : 8;
        var g = U.T,
            b = {};
        U.T = b, mu(e, !1, t, n);
        try {
            var w = u(),
                A = U.S;
            if (A !== null && A(b, w), w !== null && typeof w == "object" && typeof w.then == "function") {
                var q = a0(w, a);
                Dl(e, t, q, Et(e))
            } else Dl(e, t, a, Et(e))
        } catch (Y) {
            Dl(e, t, {
                then: function() {},
                status: "rejected",
                reason: Y
            }, Et())
        } finally {
            X.p = c, U.T = g
        }
    }

    function u0() {}

    function du(e, t, n, a) {
        if (e.tag !== 5) throw Error(r(476));
        var u = Xf(e).queue;
        Vf(e, u, t, J, n === null ? u0 : function() {
            return $f(e), n(a)
        })
    }

    function Xf(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: J,
            baseState: J,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: un,
                lastRenderedState: J
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: un,
                lastRenderedState: n
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function $f(e) {
        var t = Xf(e).next.queue;
        Dl(e, t, {}, Et())
    }

    function hu() {
        return tt(Jl)
    }

    function Qf() {
        return Ve().memoizedState
    }

    function Kf() {
        return Ve().memoizedState
    }

    function o0(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Et();
                    e = En(n);
                    var a = Nn(t, e, n);
                    a !== null && (Nt(a, t, n), jl(a, t, n)), t = {
                        cache: Gr()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function c0(e, t, n) {
        var a = Et();
        n = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Wi(e) ? Jf(t, n) : (n = Mr(e, t, n, a), n !== null && (Nt(n, e, a), Ff(n, t, a)))
    }

    function Zf(e, t, n) {
        var a = Et();
        Dl(e, t, n, a)
    }

    function Dl(e, t, n, a) {
        var u = {
            lane: a,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Wi(e)) Jf(t, u);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
                var g = t.lastRenderedState,
                    b = c(g, n);
                if (u.hasEagerState = !0, u.eagerState = b, bt(b, g)) return Li(e, t, u, 0), Me === null && zi(), !1
            } catch {} finally {}
            if (n = Mr(e, t, u, a), n !== null) return Nt(n, e, a), Ff(n, t, a), !0
        }
        return !1
    }

    function mu(e, t, n, a) {
        if (a = {
                lane: 2,
                revertLane: $u(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Wi(e)) {
            if (t) throw Error(r(479))
        } else t = Mr(e, n, a, 2), t !== null && Nt(t, e, 2)
    }

    function Wi(e) {
        var t = e.alternate;
        return e === me || t !== null && t === me
    }

    function Jf(e, t) {
        Ma = $i = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Ff(e, t, n) {
        if ((n & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes, n |= a, t.lanes = n, lc(e, n)
        }
    }
    var Ii = {
            readContext: tt,
            use: Ki,
            useCallback: Pe,
            useContext: Pe,
            useEffect: Pe,
            useImperativeHandle: Pe,
            useLayoutEffect: Pe,
            useInsertionEffect: Pe,
            useMemo: Pe,
            useReducer: Pe,
            useRef: Pe,
            useState: Pe,
            useDebugValue: Pe,
            useDeferredValue: Pe,
            useTransition: Pe,
            useSyncExternalStore: Pe,
            useId: Pe,
            useHostTransitionStatus: Pe,
            useFormState: Pe,
            useActionState: Pe,
            useOptimistic: Pe,
            useMemoCache: Pe,
            useCacheRefresh: Pe
        },
        Wf = {
            readContext: tt,
            use: Ki,
            useCallback: function(e, t) {
                return ft().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: tt,
            useEffect: Lf,
            useImperativeHandle: function(e, t, n) {
                n = n != null ? n.concat([e]) : null, Fi(4194308, 4, Bf.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Fi(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                Fi(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = ft();
                t = t === void 0 ? null : t;
                var a = e();
                if (na) {
                    bn(!0);
                    try {
                        e()
                    } finally {
                        bn(!1)
                    }
                }
                return n.memoizedState = [a, t], a
            },
            useReducer: function(e, t, n) {
                var a = ft();
                if (n !== void 0) {
                    var u = n(t);
                    if (na) {
                        bn(!0);
                        try {
                            n(t)
                        } finally {
                            bn(!1)
                        }
                    }
                } else u = t;
                return a.memoizedState = a.baseState = u, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: u
                }, a.queue = e, e = e.dispatch = c0.bind(null, me, e), [a.memoizedState, e]
            },
            useRef: function(e) {
                var t = ft();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function(e) {
                e = uu(e);
                var t = e.queue,
                    n = Zf.bind(null, me, t);
                return t.dispatch = n, [e.memoizedState, n]
            },
            useDebugValue: cu,
            useDeferredValue: function(e, t) {
                var n = ft();
                return fu(n, e, t)
            },
            useTransition: function() {
                var e = uu(!1);
                return e = Vf.bind(null, me, e.queue, !0, !1), ft().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, n) {
                var a = me,
                    u = ft();
                if (we) {
                    if (n === void 0) throw Error(r(407));
                    n = n()
                } else {
                    if (n = t(), Me === null) throw Error(r(349));
                    (xe & 124) !== 0 || xf(a, t, n)
                }
                u.memoizedState = n;
                var c = {
                    value: n,
                    getSnapshot: t
                };
                return u.queue = c, Lf(Sf.bind(null, a, c, e), [e]), a.flags |= 2048, La(9, Ji(), vf.bind(null, a, c, n, t), null), n
            },
            useId: function() {
                var e = ft(),
                    t = Me.identifierPrefix;
                if (we) {
                    var n = ln,
                        a = an;
                    n = (a & ~(1 << 32 - yt(a) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Qi++, 0 < n && (t += "H" + n.toString(32)), t += "»"
                } else n = l0++, t = "«" + t + "r" + n.toString(32) + "»";
                return e.memoizedState = t
            },
            useHostTransitionStatus: hu,
            useFormState: Af,
            useActionState: Af,
            useOptimistic: function(e) {
                var t = ft();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = mu.bind(null, me, !0, n), n.dispatch = t, [e, t]
            },
            useMemoCache: iu,
            useCacheRefresh: function() {
                return ft().memoizedState = o0.bind(null, me)
            }
        },
        If = {
            readContext: tt,
            use: Ki,
            useCallback: Pf,
            useContext: tt,
            useEffect: Uf,
            useImperativeHandle: qf,
            useInsertionEffect: kf,
            useLayoutEffect: Hf,
            useMemo: Yf,
            useReducer: Zi,
            useRef: zf,
            useState: function() {
                return Zi(un)
            },
            useDebugValue: cu,
            useDeferredValue: function(e, t) {
                var n = Ve();
                return Gf(n, Oe.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Zi(un)[0],
                    t = Ve().memoizedState;
                return [typeof e == "boolean" ? e : Al(e), t]
            },
            useSyncExternalStore: bf,
            useId: Qf,
            useHostTransitionStatus: hu,
            useFormState: _f,
            useActionState: _f,
            useOptimistic: function(e, t) {
                var n = Ve();
                return Nf(n, Oe, e, t)
            },
            useMemoCache: iu,
            useCacheRefresh: Kf
        },
        f0 = {
            readContext: tt,
            use: Ki,
            useCallback: Pf,
            useContext: tt,
            useEffect: Uf,
            useImperativeHandle: qf,
            useInsertionEffect: kf,
            useLayoutEffect: Hf,
            useMemo: Yf,
            useReducer: ru,
            useRef: zf,
            useState: function() {
                return ru(un)
            },
            useDebugValue: cu,
            useDeferredValue: function(e, t) {
                var n = Ve();
                return Oe === null ? fu(n, e, t) : Gf(n, Oe.memoizedState, e, t)
            },
            useTransition: function() {
                var e = ru(un)[0],
                    t = Ve().memoizedState;
                return [typeof e == "boolean" ? e : Al(e), t]
            },
            useSyncExternalStore: bf,
            useId: Qf,
            useHostTransitionStatus: hu,
            useFormState: Mf,
            useActionState: Mf,
            useOptimistic: function(e, t) {
                var n = Ve();
                return Oe !== null ? Nf(n, Oe, e, t) : (n.baseState = e, [e, n.queue.dispatch])
            },
            useMemoCache: iu,
            useCacheRefresh: Kf
        },
        Ua = null,
        Ml = 0;

    function es(e) {
        var t = Ml;
        return Ml += 1, Ua === null && (Ua = []), cf(Ua, e, t)
    }

    function zl(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function ts(e, t) {
        throw t.$$typeof === v ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function ed(e) {
        var t = e._init;
        return t(e._payload)
    }

    function td(e) {
        function t(j, R) {
            if (e) {
                var C = j.deletions;
                C === null ? (j.deletions = [R], j.flags |= 16) : C.push(R)
            }
        }

        function n(j, R) {
            if (!e) return null;
            for (; R !== null;) t(j, R), R = R.sibling;
            return null
        }

        function a(j) {
            for (var R = new Map; j !== null;) j.key !== null ? R.set(j.key, j) : R.set(j.index, j), j = j.sibling;
            return R
        }

        function u(j, R) {
            return j = nn(j, R), j.index = 0, j.sibling = null, j
        }

        function c(j, R, C) {
            return j.index = C, e ? (C = j.alternate, C !== null ? (C = C.index, C < R ? (j.flags |= 67108866, R) : C) : (j.flags |= 67108866, R)) : (j.flags |= 1048576, R)
        }

        function g(j) {
            return e && j.alternate === null && (j.flags |= 67108866), j
        }

        function b(j, R, C, P) {
            return R === null || R.tag !== 6 ? (R = Lr(C, j.mode, P), R.return = j, R) : (R = u(R, C), R.return = j, R)
        }

        function w(j, R, C, P) {
            var Z = C.type;
            return Z === S ? q(j, R, C.props.children, P, C.key) : R !== null && (R.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === ne && ed(Z) === R.type) ? (R = u(R, C.props), zl(R, C), R.return = j, R) : (R = ki(C.type, C.key, C.props, null, j.mode, P), zl(R, C), R.return = j, R)
        }

        function A(j, R, C, P) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== C.containerInfo || R.stateNode.implementation !== C.implementation ? (R = Ur(C, j.mode, P), R.return = j, R) : (R = u(R, C.children || []), R.return = j, R)
        }

        function q(j, R, C, P, Z) {
            return R === null || R.tag !== 7 ? (R = Kn(C, j.mode, P, Z), R.return = j, R) : (R = u(R, C), R.return = j, R)
        }

        function Y(j, R, C) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return R = Lr("" + R, j.mode, C), R.return = j, R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case N:
                        return C = ki(R.type, R.key, R.props, null, j.mode, C), zl(C, R), C.return = j, C;
                    case O:
                        return R = Ur(R, j.mode, C), R.return = j, R;
                    case ne:
                        var P = R._init;
                        return R = P(R._payload), Y(j, R, C)
                }
                if (je(R) || Ae(R)) return R = Kn(R, j.mode, C, null), R.return = j, R;
                if (typeof R.then == "function") return Y(j, es(R), C);
                if (R.$$typeof === G) return Y(j, Pi(j, R), C);
                ts(j, R)
            }
            return null
        }

        function D(j, R, C, P) {
            var Z = R !== null ? R.key : null;
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return Z !== null ? null : b(j, R, "" + C, P);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case N:
                        return C.key === Z ? w(j, R, C, P) : null;
                    case O:
                        return C.key === Z ? A(j, R, C, P) : null;
                    case ne:
                        return Z = C._init, C = Z(C._payload), D(j, R, C, P)
                }
                if (je(C) || Ae(C)) return Z !== null ? null : q(j, R, C, P, null);
                if (typeof C.then == "function") return D(j, R, es(C), P);
                if (C.$$typeof === G) return D(j, R, Pi(j, C), P);
                ts(j, C)
            }
            return null
        }

        function z(j, R, C, P, Z) {
            if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return j = j.get(C) || null, b(R, j, "" + P, Z);
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                    case N:
                        return j = j.get(P.key === null ? C : P.key) || null, w(R, j, P, Z);
                    case O:
                        return j = j.get(P.key === null ? C : P.key) || null, A(R, j, P, Z);
                    case ne:
                        var ge = P._init;
                        return P = ge(P._payload), z(j, R, C, P, Z)
                }
                if (je(P) || Ae(P)) return j = j.get(C) || null, q(R, j, P, Z, null);
                if (typeof P.then == "function") return z(j, R, C, es(P), Z);
                if (P.$$typeof === G) return z(j, R, C, Pi(R, P), Z);
                ts(R, P)
            }
            return null
        }

        function se(j, R, C, P) {
            for (var Z = null, ge = null, W = R, le = R = 0, Je = null; W !== null && le < C.length; le++) {
                W.index > le ? (Je = W, W = null) : Je = W.sibling;
                var Se = D(j, W, C[le], P);
                if (Se === null) {
                    W === null && (W = Je);
                    break
                }
                e && W && Se.alternate === null && t(j, W), R = c(Se, R, le), ge === null ? Z = Se : ge.sibling = Se, ge = Se, W = Je
            }
            if (le === C.length) return n(j, W), we && Jn(j, le), Z;
            if (W === null) {
                for (; le < C.length; le++) W = Y(j, C[le], P), W !== null && (R = c(W, R, le), ge === null ? Z = W : ge.sibling = W, ge = W);
                return we && Jn(j, le), Z
            }
            for (W = a(W); le < C.length; le++) Je = z(W, j, le, C[le], P), Je !== null && (e && Je.alternate !== null && W.delete(Je.key === null ? le : Je.key), R = c(Je, R, le), ge === null ? Z = Je : ge.sibling = Je, ge = Je);
            return e && W.forEach(function(Pn) {
                return t(j, Pn)
            }), we && Jn(j, le), Z
        }

        function ae(j, R, C, P) {
            if (C == null) throw Error(r(151));
            for (var Z = null, ge = null, W = R, le = R = 0, Je = null, Se = C.next(); W !== null && !Se.done; le++, Se = C.next()) {
                W.index > le ? (Je = W, W = null) : Je = W.sibling;
                var Pn = D(j, W, Se.value, P);
                if (Pn === null) {
                    W === null && (W = Je);
                    break
                }
                e && W && Pn.alternate === null && t(j, W), R = c(Pn, R, le), ge === null ? Z = Pn : ge.sibling = Pn, ge = Pn, W = Je
            }
            if (Se.done) return n(j, W), we && Jn(j, le), Z;
            if (W === null) {
                for (; !Se.done; le++, Se = C.next()) Se = Y(j, Se.value, P), Se !== null && (R = c(Se, R, le), ge === null ? Z = Se : ge.sibling = Se, ge = Se);
                return we && Jn(j, le), Z
            }
            for (W = a(W); !Se.done; le++, Se = C.next()) Se = z(W, j, le, Se.value, P), Se !== null && (e && Se.alternate !== null && W.delete(Se.key === null ? le : Se.key), R = c(Se, R, le), ge === null ? Z = Se : ge.sibling = Se, ge = Se);
            return e && W.forEach(function(dy) {
                return t(j, dy)
            }), we && Jn(j, le), Z
        }

        function Ce(j, R, C, P) {
            if (typeof C == "object" && C !== null && C.type === S && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case N:
                        e: {
                            for (var Z = C.key; R !== null;) {
                                if (R.key === Z) {
                                    if (Z = C.type, Z === S) {
                                        if (R.tag === 7) {
                                            n(j, R.sibling), P = u(R, C.props.children), P.return = j, j = P;
                                            break e
                                        }
                                    } else if (R.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === ne && ed(Z) === R.type) {
                                        n(j, R.sibling), P = u(R, C.props), zl(P, C), P.return = j, j = P;
                                        break e
                                    }
                                    n(j, R);
                                    break
                                } else t(j, R);
                                R = R.sibling
                            }
                            C.type === S ? (P = Kn(C.props.children, j.mode, P, C.key), P.return = j, j = P) : (P = ki(C.type, C.key, C.props, null, j.mode, P), zl(P, C), P.return = j, j = P)
                        }
                        return g(j);
                    case O:
                        e: {
                            for (Z = C.key; R !== null;) {
                                if (R.key === Z)
                                    if (R.tag === 4 && R.stateNode.containerInfo === C.containerInfo && R.stateNode.implementation === C.implementation) {
                                        n(j, R.sibling), P = u(R, C.children || []), P.return = j, j = P;
                                        break e
                                    } else {
                                        n(j, R);
                                        break
                                    }
                                else t(j, R);
                                R = R.sibling
                            }
                            P = Ur(C, j.mode, P),
                            P.return = j,
                            j = P
                        }
                        return g(j);
                    case ne:
                        return Z = C._init, C = Z(C._payload), Ce(j, R, C, P)
                }
                if (je(C)) return se(j, R, C, P);
                if (Ae(C)) {
                    if (Z = Ae(C), typeof Z != "function") throw Error(r(150));
                    return C = Z.call(C), ae(j, R, C, P)
                }
                if (typeof C.then == "function") return Ce(j, R, es(C), P);
                if (C.$$typeof === G) return Ce(j, R, Pi(j, C), P);
                ts(j, C)
            }
            return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, R !== null && R.tag === 6 ? (n(j, R.sibling), P = u(R, C), P.return = j, j = P) : (n(j, R), P = Lr(C, j.mode, P), P.return = j, j = P), g(j)) : n(j, R)
        }
        return function(j, R, C, P) {
            try {
                Ml = 0;
                var Z = Ce(j, R, C, P);
                return Ua = null, Z
            } catch (W) {
                if (W === Nl || W === Gi) throw W;
                var ge = xt(29, W, null, j.mode);
                return ge.lanes = P, ge.return = j, ge
            } finally {}
        }
    }
    var ka = td(!0),
        nd = td(!1),
        Dt = H(null),
        Xt = null;

    function jn(e) {
        var t = e.alternate;
        $($e, $e.current & 1), $(Dt, e), Xt === null && (t === null || Da.current !== null || t.memoizedState !== null) && (Xt = e)
    }

    function ad(e) {
        if (e.tag === 22) {
            if ($($e, $e.current), $(Dt, e), Xt === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Xt = e)
            }
        } else On()
    }

    function On() {
        $($e, $e.current), $(Dt, Dt.current)
    }

    function on(e) {
        Q(Dt), Xt === e && (Xt = null), Q($e)
    }
    var $e = H(0);

    function ns(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || lo(n))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function gu(e, t, n, a) {
        t = e.memoizedState, n = n(a, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var pu = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var a = Et(),
                u = En(a);
            u.payload = t, n != null && (u.callback = n), t = Nn(e, u, a), t !== null && (Nt(t, e, a), jl(t, e, a))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var a = Et(),
                u = En(a);
            u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Nn(e, u, a), t !== null && (Nt(t, e, a), jl(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Et(),
                a = En(n);
            a.tag = 2, t != null && (a.callback = t), t = Nn(e, a, n), t !== null && (Nt(t, e, n), jl(t, e, n))
        }
    };

    function ld(e, t, n, a, u, c, g) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, c, g) : t.prototype && t.prototype.isPureReactComponent ? !pl(n, a) || !pl(u, c) : !0
    }

    function id(e, t, n, a) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && pu.enqueueReplaceState(t, t.state, null)
    }

    function aa(e, t) {
        var n = t;
        if ("ref" in t) {
            n = {};
            for (var a in t) a !== "ref" && (n[a] = t[a])
        }
        if (e = e.defaultProps) {
            n === t && (n = x({}, n));
            for (var u in e) n[u] === void 0 && (n[u] = e[u])
        }
        return n
    }
    var as = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function sd(e) {
        as(e)
    }

    function rd(e) {
        console.error(e)
    }

    function ud(e) {
        as(e)
    }

    function ls(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function od(e, t, n) {
        try {
            var a = e.onCaughtError;
            a(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function yu(e, t, n) {
        return n = En(n), n.tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            ls(e, t)
        }, n
    }

    function cd(e) {
        return e = En(e), e.tag = 3, e
    }

    function fd(e, t, n, a) {
        var u = n.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var c = a.value;
            e.payload = function() {
                return u(c)
            }, e.callback = function() {
                od(t, n, a)
            }
        }
        var g = n.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
            od(t, n, a), typeof u != "function" && (Mn === null ? Mn = new Set([this]) : Mn.add(this));
            var b = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: b !== null ? b : ""
            })
        })
    }

    function d0(e, t, n, a, u) {
        if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = n.alternate, t !== null && Sl(t, n, u, !0), n = Dt.current, n !== null) {
                switch (n.tag) {
                    case 13:
                        return Xt === null ? Pu() : n.alternate === null && qe === 0 && (qe = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, a === $r ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([a]) : t.add(a), Gu(e, a, u)), !1;
                    case 22:
                        return n.flags |= 65536, a === $r ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a])
                        }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([a]) : n.add(a)), Gu(e, a, u)), !1
                }
                throw Error(r(435, n.tag))
            }
            return Gu(e, a, u), Pu(), !1
        }
        if (we) return t = Dt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== Br && (e = Error(r(422), {
            cause: a
        }), vl(Tt(e, n)))) : (a !== Br && (t = Error(r(423), {
            cause: a
        }), vl(Tt(t, n))), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, a = Tt(a, n), u = yu(e.stateNode, a, u), Zr(e, u), qe !== 4 && (qe = 2)), !1;
        var c = Error(r(520), {
            cause: a
        });
        if (c = Tt(c, n), Pl === null ? Pl = [c] : Pl.push(c), qe !== 4 && (qe = 2), t === null) return !0;
        a = Tt(a, n), n = t;
        do {
            switch (n.tag) {
                case 3:
                    return n.flags |= 65536, e = u & -u, n.lanes |= e, e = yu(n.stateNode, a, e), Zr(n, e), !1;
                case 1:
                    if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Mn === null || !Mn.has(c)))) return n.flags |= 65536, u &= -u, n.lanes |= u, u = cd(u), fd(u, e, n, a), Zr(n, u), !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var dd = Error(r(461)),
        Ke = !1;

    function Fe(e, t, n, a) {
        t.child = e === null ? nd(t, null, n, a) : ka(t, e.child, n, a)
    }

    function hd(e, t, n, a, u) {
        n = n.render;
        var c = t.ref;
        if ("ref" in a) {
            var g = {};
            for (var b in a) b !== "ref" && (g[b] = a[b])
        } else g = a;
        return ea(t), a = eu(e, t, n, g, c, u), b = tu(), e !== null && !Ke ? (nu(e, t, u), cn(e, t, u)) : (we && b && kr(t), t.flags |= 1, Fe(e, t, a, u), t.child)
    }

    function md(e, t, n, a, u) {
        if (e === null) {
            var c = n.type;
            return typeof c == "function" && !zr(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, gd(e, t, c, a, u)) : (e = ki(n.type, null, a, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (c = e.child, !Ru(e, u)) {
            var g = c.memoizedProps;
            if (n = n.compare, n = n !== null ? n : pl, n(g, a) && e.ref === t.ref) return cn(e, t, u)
        }
        return t.flags |= 1, e = nn(c, a), e.ref = t.ref, e.return = t, t.child = e
    }

    function gd(e, t, n, a, u) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (pl(c, a) && e.ref === t.ref)
                if (Ke = !1, t.pendingProps = a = c, Ru(e, u))(e.flags & 131072) !== 0 && (Ke = !0);
                else return t.lanes = e.lanes, cn(e, t, u)
        }
        return bu(e, t, n, a, u)
    }

    function pd(e, t, n) {
        var a = t.pendingProps,
            u = a.children,
            c = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (a = c !== null ? c.baseLanes | n : n, e !== null) {
                    for (u = t.child = e.child, c = 0; u !== null;) c = c | u.lanes | u.childLanes, u = u.sibling;
                    t.childLanes = c & ~a
                } else t.childLanes = 0, t.child = null;
                return yd(e, t, a, n)
            }
            if ((n & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && Yi(t, c !== null ? c.cachePool : null), c !== null ? gf(t, c) : Fr(), ad(t);
            else return t.lanes = t.childLanes = 536870912, yd(e, t, c !== null ? c.baseLanes | n : n, n)
        } else c !== null ? (Yi(t, c.cachePool), gf(t, c), On(), t.memoizedState = null) : (e !== null && Yi(t, null), Fr(), On());
        return Fe(e, t, u, n), t.child
    }

    function yd(e, t, n, a) {
        var u = Xr();
        return u = u === null ? null : {
            parent: Xe._currentValue,
            pool: u
        }, t.memoizedState = {
            baseLanes: n,
            cachePool: u
        }, e !== null && Yi(t, null), Fr(), ad(t), e !== null && Sl(e, t, a, !0), null
    }

    function is(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object") throw Error(r(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }

    function bu(e, t, n, a, u) {
        return ea(t), n = eu(e, t, n, a, void 0, u), a = tu(), e !== null && !Ke ? (nu(e, t, u), cn(e, t, u)) : (we && a && kr(t), t.flags |= 1, Fe(e, t, n, u), t.child)
    }

    function bd(e, t, n, a, u, c) {
        return ea(t), t.updateQueue = null, n = yf(t, a, n, u), pf(e), a = tu(), e !== null && !Ke ? (nu(e, t, c), cn(e, t, c)) : (we && a && kr(t), t.flags |= 1, Fe(e, t, n, c), t.child)
    }

    function xd(e, t, n, a, u) {
        if (ea(t), t.stateNode === null) {
            var c = Oa,
                g = n.contextType;
            typeof g == "object" && g !== null && (c = tt(g)), c = new n(a, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = pu, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = a, c.state = t.memoizedState, c.refs = {}, Qr(t), g = n.contextType, c.context = typeof g == "object" && g !== null ? tt(g) : Oa, c.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (gu(t, n, g, a), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (g = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), g !== c.state && pu.enqueueReplaceState(c, c.state, null), Tl(t, a, c, u), Ol(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !0
        } else if (e === null) {
            c = t.stateNode;
            var b = t.memoizedProps,
                w = aa(n, b);
            c.props = w;
            var A = c.context,
                q = n.contextType;
            g = Oa, typeof q == "object" && q !== null && (g = tt(q));
            var Y = n.getDerivedStateFromProps;
            q = typeof Y == "function" || typeof c.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, q || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || A !== g) && id(t, c, a, g), wn = !1;
            var D = t.memoizedState;
            c.state = D, Tl(t, a, c, u), Ol(), A = t.memoizedState, b || D !== A || wn ? (typeof Y == "function" && (gu(t, n, Y, a), A = t.memoizedState), (w = wn || ld(t, n, w, a, D, A, g)) ? (q || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = A), c.props = a, c.state = A, c.context = g, a = w) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
        } else {
            c = t.stateNode, Kr(e, t), g = t.memoizedProps, q = aa(n, g), c.props = q, Y = t.pendingProps, D = c.context, A = n.contextType, w = Oa, typeof A == "object" && A !== null && (w = tt(A)), b = n.getDerivedStateFromProps, (A = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g !== Y || D !== w) && id(t, c, a, w), wn = !1, D = t.memoizedState, c.state = D, Tl(t, a, c, u), Ol();
            var z = t.memoizedState;
            g !== Y || D !== z || wn || e !== null && e.dependencies !== null && qi(e.dependencies) ? (typeof b == "function" && (gu(t, n, b, a), z = t.memoizedState), (q = wn || ld(t, n, q, a, D, z, w) || e !== null && e.dependencies !== null && qi(e.dependencies)) ? (A || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(a, z, w), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(a, z, w)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), c.props = a, c.state = z, c.context = w, a = q) : (typeof c.componentDidUpdate != "function" || g === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), a = !1)
        }
        return c = a, is(e, t), a = (t.flags & 128) !== 0, c || a ? (c = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && a ? (t.child = ka(t, e.child, null, u), t.child = ka(t, null, n, u)) : Fe(e, t, n, u), t.memoizedState = c.state, e = t.child) : e = cn(e, t, u), e
    }

    function vd(e, t, n, a) {
        return xl(), t.flags |= 256, Fe(e, t, n, a), t.child
    }
    var xu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function vu(e) {
        return {
            baseLanes: e,
            cachePool: rf()
        }
    }

    function Su(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Mt), e
    }

    function Sd(e, t, n) {
        var a = t.pendingProps,
            u = !1,
            c = (t.flags & 128) !== 0,
            g;
        if ((g = c) || (g = e !== null && e.memoizedState === null ? !1 : ($e.current & 2) !== 0), g && (u = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (we) {
                if (u ? jn(t) : On(), we) {
                    var b = Be,
                        w;
                    if (w = b) {
                        e: {
                            for (w = b, b = Vt; w.nodeType !== 8;) {
                                if (!b) {
                                    b = null;
                                    break e
                                }
                                if (w = Bt(w.nextSibling), w === null) {
                                    b = null;
                                    break e
                                }
                            }
                            b = w
                        }
                        b !== null ? (t.memoizedState = {
                            dehydrated: b,
                            treeContext: Zn !== null ? {
                                id: an,
                                overflow: ln
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, w = xt(18, null, null, 0), w.stateNode = b, w.return = t, t.child = w, rt = t, Be = null, w = !0) : w = !1
                    }
                    w || Wn(t)
                }
                if (b = t.memoizedState, b !== null && (b = b.dehydrated, b !== null)) return lo(b) ? t.lanes = 32 : t.lanes = 536870912, null;
                on(t)
            }
            return b = a.children, a = a.fallback, u ? (On(), u = t.mode, b = ss({
                mode: "hidden",
                children: b
            }, u), a = Kn(a, u, n, null), b.return = t, a.return = t, b.sibling = a, t.child = b, u = t.child, u.memoizedState = vu(n), u.childLanes = Su(e, g, n), t.memoizedState = xu, a) : (jn(t), wu(t, b))
        }
        if (w = e.memoizedState, w !== null && (b = w.dehydrated, b !== null)) {
            if (c) t.flags & 256 ? (jn(t), t.flags &= -257, t = Eu(e, t, n)) : t.memoizedState !== null ? (On(), t.child = e.child, t.flags |= 128, t = null) : (On(), u = a.fallback, b = t.mode, a = ss({
                mode: "visible",
                children: a.children
            }, b), u = Kn(u, b, n, null), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, ka(t, e.child, null, n), a = t.child, a.memoizedState = vu(n), a.childLanes = Su(e, g, n), t.memoizedState = xu, t = u);
            else if (jn(t), lo(b)) {
                if (g = b.nextSibling && b.nextSibling.dataset, g) var A = g.dgst;
                g = A, a = Error(r(419)), a.stack = "", a.digest = g, vl({
                    value: a,
                    source: null,
                    stack: null
                }), t = Eu(e, t, n)
            } else if (Ke || Sl(e, t, n, !1), g = (n & e.childLanes) !== 0, Ke || g) {
                if (g = Me, g !== null && (a = n & -n, a = (a & 42) !== 0 ? 1 : ir(a), a = (a & (g.suspendedLanes | n)) !== 0 ? 0 : a, a !== 0 && a !== w.retryLane)) throw w.retryLane = a, ja(e, a), Nt(g, e, a), dd;
                b.data === "$?" || Pu(), t = Eu(e, t, n)
            } else b.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, Be = Bt(b.nextSibling), rt = t, we = !0, Fn = null, Vt = !1, e !== null && (At[_t++] = an, At[_t++] = ln, At[_t++] = Zn, an = e.id, ln = e.overflow, Zn = t), t = wu(t, a.children), t.flags |= 4096);
            return t
        }
        return u ? (On(), u = a.fallback, b = t.mode, w = e.child, A = w.sibling, a = nn(w, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = w.subtreeFlags & 65011712, A !== null ? u = nn(A, u) : (u = Kn(u, b, n, null), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, a = u, u = t.child, b = e.child.memoizedState, b === null ? b = vu(n) : (w = b.cachePool, w !== null ? (A = Xe._currentValue, w = w.parent !== A ? {
            parent: A,
            pool: A
        } : w) : w = rf(), b = {
            baseLanes: b.baseLanes | n,
            cachePool: w
        }), u.memoizedState = b, u.childLanes = Su(e, g, n), t.memoizedState = xu, a) : (jn(t), n = e.child, e = n.sibling, n = nn(n, {
            mode: "visible",
            children: a.children
        }), n.return = t, n.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = n, t.memoizedState = null, n)
    }

    function wu(e, t) {
        return t = ss({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function ss(e, t) {
        return e = xt(22, e, null, t), e.lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function Eu(e, t, n) {
        return ka(t, e.child, null, n), e = wu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function wd(e, t, n) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t), Pr(e.return, t, n)
    }

    function Nu(e, t, n, a, u) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: n,
            tailMode: u
        } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = u)
    }

    function Ed(e, t, n) {
        var a = t.pendingProps,
            u = a.revealOrder,
            c = a.tail;
        if (Fe(e, t, a.children, n), a = $e.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && wd(e, n, t);
                else if (e.tag === 19) wd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            a &= 1
        }
        switch ($($e, a), u) {
            case "forwards":
                for (n = t.child, u = null; n !== null;) e = n.alternate, e !== null && ns(e) === null && (u = n), n = n.sibling;
                n = u, n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null), Nu(t, !1, u, n, c);
                break;
            case "backwards":
                for (n = null, u = t.child, t.child = null; u !== null;) {
                    if (e = u.alternate, e !== null && ns(e) === null) {
                        t.child = u;
                        break
                    }
                    e = u.sibling, u.sibling = n, n = u, u = e
                }
                Nu(t, !0, n, null, c);
                break;
            case "together":
                Nu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function cn(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Dn |= t.lanes, (n & t.childLanes) === 0)
            if (e !== null) {
                if (Sl(e, t, n, !1), (n & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Ru(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && qi(e)))
    }

    function h0(e, t, n) {
        switch (t.tag) {
            case 3:
                De(t, t.stateNode.containerInfo), Sn(t, Xe, e.memoizedState.cache), xl();
                break;
            case 27:
            case 5:
                ee(t);
                break;
            case 4:
                De(t, t.stateNode.containerInfo);
                break;
            case 10:
                Sn(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (jn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Sd(e, t, n) : (jn(t), e = cn(e, t, n), e !== null ? e.sibling : null);
                jn(t);
                break;
            case 19:
                var u = (e.flags & 128) !== 0;
                if (a = (n & t.childLanes) !== 0, a || (Sl(e, t, n, !1), a = (n & t.childLanes) !== 0), u) {
                    if (a) return Ed(e, t, n);
                    t.flags |= 128
                }
                if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), $($e, $e.current), a) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, pd(e, t, n);
            case 24:
                Sn(t, Xe, e.memoizedState.cache)
        }
        return cn(e, t, n)
    }

    function Nd(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) Ke = !0;
            else {
                if (!Ru(e, n) && (t.flags & 128) === 0) return Ke = !1, h0(e, t, n);
                Ke = (e.flags & 131072) !== 0
            }
        else Ke = !1, we && (t.flags & 1048576) !== 0 && Ic(t, Bi, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var a = t.elementType,
                        u = a._init;
                    if (a = u(a._payload), t.type = a, typeof a == "function") zr(a) ? (e = aa(a, e), t.tag = 1, t = xd(null, t, a, e, n)) : (t.tag = 0, t = bu(null, t, a, e, n));
                    else {
                        if (a != null) {
                            if (u = a.$$typeof, u === K) {
                                t.tag = 11, t = hd(null, t, a, e, n);
                                break e
                            } else if (u === te) {
                                t.tag = 14, t = md(null, t, a, e, n);
                                break e
                            }
                        }
                        throw t = ce(a) || a, Error(r(306, t, ""))
                    }
                }
                return t;
            case 0:
                return bu(e, t, t.type, t.pendingProps, n);
            case 1:
                return a = t.type, u = aa(a, t.pendingProps), xd(e, t, a, u, n);
            case 3:
                e: {
                    if (De(t, t.stateNode.containerInfo), e === null) throw Error(r(387));a = t.pendingProps;
                    var c = t.memoizedState;u = c.element,
                    Kr(e, t),
                    Tl(t, a, null, n);
                    var g = t.memoizedState;
                    if (a = g.cache, Sn(t, Xe, a), a !== c.cache && Yr(t, [Xe], n, !0), Ol(), a = g.element, c.isDehydrated)
                        if (c = {
                                element: a,
                                isDehydrated: !1,
                                cache: g.cache
                            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                            t = vd(e, t, a, n);
                            break e
                        } else if (a !== u) {
                        u = Tt(Error(r(424)), t), vl(u), t = vd(e, t, a, n);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Be = Bt(e.firstChild), rt = t, we = !0, Fn = null, Vt = !0, n = nd(t, null, a, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
                    } else {
                        if (xl(), a === u) {
                            t = cn(e, t, n);
                            break e
                        }
                        Fe(e, t, a, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return is(e, t), e === null ? (n = Th(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : we || (n = t.type, e = t.pendingProps, a = vs(ue.current).createElement(n), a[et] = t, a[ot] = e, Ie(a, n, e), Qe(a), t.stateNode = a) : t.memoizedState = Th(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return ee(t), e === null && we && (a = t.stateNode = Rh(t.type, t.pendingProps, ue.current), rt = t, Vt = !0, u = Be, Un(t.type) ? (io = u, Be = Bt(a.firstChild)) : Be = u), Fe(e, t, t.pendingProps.children, n), is(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && we && ((u = a = Be) && (a = P0(a, t.type, t.pendingProps, Vt), a !== null ? (t.stateNode = a, rt = t, Be = Bt(a.firstChild), Vt = !1, u = !0) : u = !1), u || Wn(t)), ee(t), u = t.type, c = t.pendingProps, g = e !== null ? e.memoizedProps : null, a = c.children, to(u, c) ? a = null : g !== null && to(u, g) && (t.flags |= 32), t.memoizedState !== null && (u = eu(e, t, i0, null, null, n), Jl._currentValue = u), is(e, t), Fe(e, t, a, n), t.child;
            case 6:
                return e === null && we && ((e = n = Be) && (n = Y0(n, t.pendingProps, Vt), n !== null ? (t.stateNode = n, rt = t, Be = null, e = !0) : e = !1), e || Wn(t)), null;
            case 13:
                return Sd(e, t, n);
            case 4:
                return De(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ka(t, null, a, n) : Fe(e, t, a, n), t.child;
            case 11:
                return hd(e, t, t.type, t.pendingProps, n);
            case 7:
                return Fe(e, t, t.pendingProps, n), t.child;
            case 8:
                return Fe(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Fe(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return a = t.pendingProps, Sn(t, t.type, a.value), Fe(e, t, a.children, n), t.child;
            case 9:
                return u = t.type._context, a = t.pendingProps.children, ea(t), u = tt(u), a = a(u), t.flags |= 1, Fe(e, t, a, n), t.child;
            case 14:
                return md(e, t, t.type, t.pendingProps, n);
            case 15:
                return gd(e, t, t.type, t.pendingProps, n);
            case 19:
                return Ed(e, t, n);
            case 31:
                return a = t.pendingProps, n = t.mode, a = {
                    mode: a.mode,
                    children: a.children
                }, e === null ? (n = ss(a, n), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = nn(e.child, a), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
            case 22:
                return pd(e, t, n);
            case 24:
                return ea(t), a = tt(Xe), e === null ? (u = Xr(), u === null && (u = Me, c = Gr(), u.pooledCache = c, c.refCount++, c !== null && (u.pooledCacheLanes |= n), u = c), t.memoizedState = {
                    parent: a,
                    cache: u
                }, Qr(t), Sn(t, Xe, u)) : ((e.lanes & n) !== 0 && (Kr(e, t), Tl(t, null, null, n), Ol()), u = e.memoizedState, c = t.memoizedState, u.parent !== a ? (u = {
                    parent: a,
                    cache: a
                }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Sn(t, Xe, a)) : (a = c.cache, Sn(t, Xe, a), a !== u.cache && Yr(t, [Xe], n, !0))), Fe(e, t, t.pendingProps.children, n), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }

    function fn(e) {
        e.flags |= 4
    }

    function Rd(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !Mh(t)) {
            if (t = Dt.current, t !== null && ((xe & 4194048) === xe ? Xt !== null : (xe & 62914560) !== xe && (xe & 536870912) === 0 || t !== Xt)) throw Rl = $r, uf;
            e.flags |= 8192
        }
    }

    function rs(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? nc() : 536870912, e.lanes |= t, Pa |= t)
    }

    function Ll(e, t) {
        if (!we) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var a = null; n !== null;) n.alternate !== null && (a = n), n = n.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
        }
    }

    function Ue(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            a = 0;
        if (t)
            for (var u = e.child; u !== null;) n |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = e, u = u.sibling;
        else
            for (u = e.child; u !== null;) n |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = e, u = u.sibling;
        return e.subtreeFlags |= a, e.childLanes = n, t
    }

    function m0(e, t, n) {
        var a = t.pendingProps;
        switch (Hr(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ue(t), null;
            case 1:
                return Ue(t), null;
            case 3:
                return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), rn(Xe), Lt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (bl(t) ? fn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, nf())), Ue(t), null;
            case 26:
                return n = t.memoizedState, e === null ? (fn(t), n !== null ? (Ue(t), Rd(t, n)) : (Ue(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (fn(t), Ue(t), Rd(t, n)) : (Ue(t), t.flags &= -16777217) : (e.memoizedProps !== a && fn(t), Ue(t), t.flags &= -16777217), null;
            case 27:
                ze(t), n = ue.current;
                var u = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== a && fn(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(r(166));
                        return Ue(t), null
                    }
                    e = I.current, bl(t) ? ef(t) : (e = Rh(u, a, n), t.stateNode = e, fn(t))
                }
                return Ue(t), null;
            case 5:
                if (ze(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && fn(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(r(166));
                        return Ue(t), null
                    }
                    if (e = I.current, bl(t)) ef(t);
                    else {
                        switch (u = vs(ue.current), e) {
                            case 1:
                                e = u.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case "svg":
                                        e = u.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        e = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof a.is == "string" ? u.createElement("select", {
                                            is: a.is
                                        }) : u.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                                        break;
                                    default:
                                        e = typeof a.is == "string" ? u.createElement(n, {
                                            is: a.is
                                        }) : u.createElement(n)
                                }
                        }
                        e[et] = t, e[ot] = a;
                        e: for (u = t.child; u !== null;) {
                            if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
                            else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                u.child.return = u, u = u.child;
                                continue
                            }
                            if (u === t) break e;
                            for (; u.sibling === null;) {
                                if (u.return === null || u.return === t) break e;
                                u = u.return
                            }
                            u.sibling.return = u.return, u = u.sibling
                        }
                        t.stateNode = e;
                        e: switch (Ie(e, n, a), n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!a.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && fn(t)
                    }
                }
                return Ue(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== a && fn(t);
                else {
                    if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
                    if (e = ue.current, bl(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, a = null, u = rt, u !== null) switch (u.tag) {
                            case 27:
                            case 5:
                                a = u.memoizedProps
                        }
                        e[et] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || bh(e.nodeValue, n)), e || Wn(t)
                    } else e = vs(e).createTextNode(a), e[et] = t, t.stateNode = e
                }
                return Ue(t), null;
            case 13:
                if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (u = bl(t), a !== null && a.dehydrated !== null) {
                        if (e === null) {
                            if (!u) throw Error(r(318));
                            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(r(317));
                            u[et] = t
                        } else xl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Ue(t), u = !1
                    } else u = nf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
                    if (!u) return t.flags & 256 ? (on(t), t) : (on(t), null)
                }
                if (on(t), (t.flags & 128) !== 0) return t.lanes = n, t;
                if (n = a !== null, e = e !== null && e.memoizedState !== null, n) {
                    a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                    var c = null;
                    a.memoizedState !== null && a.memoizedState.cachePool !== null && (c = a.memoizedState.cachePool.pool), c !== u && (a.flags |= 2048)
                }
                return n !== e && n && (t.child.flags |= 8192), rs(t, t.updateQueue), Ue(t), null;
            case 4:
                return Lt(), e === null && Ju(t.stateNode.containerInfo), Ue(t), null;
            case 10:
                return rn(t.type), Ue(t), null;
            case 19:
                if (Q($e), u = t.memoizedState, u === null) return Ue(t), null;
                if (a = (t.flags & 128) !== 0, c = u.rendering, c === null)
                    if (a) Ll(u, !1);
                    else {
                        if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (c = ns(e), c !== null) {
                                    for (t.flags |= 128, Ll(u, !1), e = c.updateQueue, t.updateQueue = e, rs(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Wc(n, e), n = n.sibling;
                                    return $($e, $e.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        u.tail !== null && Gt() > cs && (t.flags |= 128, a = !0, Ll(u, !1), t.lanes = 4194304)
                    }
                else {
                    if (!a)
                        if (e = ns(c), e !== null) {
                            if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, rs(t, e), Ll(u, !0), u.tail === null && u.tailMode === "hidden" && !c.alternate && !we) return Ue(t), null
                        } else 2 * Gt() - u.renderingStartTime > cs && n !== 536870912 && (t.flags |= 128, a = !0, Ll(u, !1), t.lanes = 4194304);
                    u.isBackwards ? (c.sibling = t.child, t.child = c) : (e = u.last, e !== null ? e.sibling = c : t.child = c, u.last = c)
                }
                return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Gt(), t.sibling = null, e = $e.current, $($e, a ? e & 1 | 2 : e & 1), t) : (Ue(t), null);
            case 22:
            case 23:
                return on(t), Wr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && rs(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && Q(ta), null;
            case 24:
                return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), rn(Xe), Ue(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(r(156, t.tag))
    }

    function g0(e, t) {
        switch (Hr(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return rn(Xe), Lt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return ze(t), null;
            case 13:
                if (on(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(r(340));
                    xl()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Q($e), null;
            case 4:
                return Lt(), null;
            case 10:
                return rn(t.type), null;
            case 22:
            case 23:
                return on(t), Wr(), e !== null && Q(ta), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return rn(Xe), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function jd(e, t) {
        switch (Hr(t), t.tag) {
            case 3:
                rn(Xe), Lt();
                break;
            case 26:
            case 27:
            case 5:
                ze(t);
                break;
            case 4:
                Lt();
                break;
            case 13:
                on(t);
                break;
            case 19:
                Q($e);
                break;
            case 10:
                rn(t.type);
                break;
            case 22:
            case 23:
                on(t), Wr(), e !== null && Q(ta);
                break;
            case 24:
                rn(Xe)
        }
    }

    function Ul(e, t) {
        try {
            var n = t.updateQueue,
                a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                n = u;
                do {
                    if ((n.tag & e) === e) {
                        a = void 0;
                        var c = n.create,
                            g = n.inst;
                        a = c(), g.destroy = a
                    }
                    n = n.next
                } while (n !== u)
            }
        } catch (b) {
            _e(t, t.return, b)
        }
    }

    function Tn(e, t, n) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var c = u.next;
                a = c;
                do {
                    if ((a.tag & e) === e) {
                        var g = a.inst,
                            b = g.destroy;
                        if (b !== void 0) {
                            g.destroy = void 0, u = t;
                            var w = n,
                                A = b;
                            try {
                                A()
                            } catch (q) {
                                _e(u, w, q)
                            }
                        }
                    }
                    a = a.next
                } while (a !== c)
            }
        } catch (q) {
            _e(t, t.return, q)
        }
    }

    function Od(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                mf(t, n)
            } catch (a) {
                _e(e, e.return, a)
            }
        }
    }

    function Td(e, t, n) {
        n.props = aa(e.type, e.memoizedProps), n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (a) {
            _e(e, t, a)
        }
    }

    function kl(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = e.stateNode;
                        break;
                    case 30:
                        a = e.stateNode;
                        break;
                    default:
                        a = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(a) : n.current = a
            }
        } catch (u) {
            _e(e, t, u)
        }
    }

    function $t(e, t) {
        var n = e.ref,
            a = e.refCleanup;
        if (n !== null)
            if (typeof a == "function") try {
                a()
            } catch (u) {
                _e(e, t, u)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof n == "function") try {
                n(null)
            } catch (u) {
                _e(e, t, u)
            } else n.current = null
    }

    function Cd(e) {
        var t = e.type,
            n = e.memoizedProps,
            a = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && a.focus();
                    break e;
                case "img":
                    n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
            }
        }
        catch (u) {
            _e(e, e.return, u)
        }
    }

    function ju(e, t, n) {
        try {
            var a = e.stateNode;
            U0(a, e.type, n, t), a[ot] = t
        } catch (u) {
            _e(e, e.return, u)
        }
    }

    function Ad(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Un(e.type) || e.tag === 4
    }

    function Ou(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Ad(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Un(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Tu(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xs));
        else if (a !== 4 && (a === 27 && Un(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (Tu(e, t, n), e = e.sibling; e !== null;) Tu(e, t, n), e = e.sibling
    }

    function us(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (a !== 4 && (a === 27 && Un(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (us(e, t, n), e = e.sibling; e !== null;) us(e, t, n), e = e.sibling
    }

    function _d(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var a = e.type, u = t.attributes; u.length;) t.removeAttributeNode(u[0]);
            Ie(t, a, n), t[et] = e, t[ot] = n
        } catch (c) {
            _e(e, e.return, c)
        }
    }
    var dn = !1,
        Ye = !1,
        Cu = !1,
        Dd = typeof WeakSet == "function" ? WeakSet : Set,
        Ze = null;

    function p0(e, t) {
        if (e = e.containerInfo, Iu = js, e = Yc(e), Or(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var a = n.getSelection && n.getSelection();
                if (a && a.rangeCount !== 0) {
                    n = a.anchorNode;
                    var u = a.anchorOffset,
                        c = a.focusNode;
                    a = a.focusOffset;
                    try {
                        n.nodeType, c.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var g = 0,
                        b = -1,
                        w = -1,
                        A = 0,
                        q = 0,
                        Y = e,
                        D = null;
                    t: for (;;) {
                        for (var z; Y !== n || u !== 0 && Y.nodeType !== 3 || (b = g + u), Y !== c || a !== 0 && Y.nodeType !== 3 || (w = g + a), Y.nodeType === 3 && (g += Y.nodeValue.length), (z = Y.firstChild) !== null;) D = Y, Y = z;
                        for (;;) {
                            if (Y === e) break t;
                            if (D === n && ++A === u && (b = g), D === c && ++q === a && (w = g), (z = Y.nextSibling) !== null) break;
                            Y = D, D = Y.parentNode
                        }
                        Y = z
                    }
                    n = b === -1 || w === -1 ? null : {
                        start: b,
                        end: w
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (eo = {
                focusedElem: e,
                selectionRange: n
            }, js = !1, Ze = t; Ze !== null;)
            if (t = Ze, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ze = e;
            else
                for (; Ze !== null;) {
                    switch (t = Ze, c = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && c !== null) {
                                e = void 0, n = t, u = c.memoizedProps, c = c.memoizedState, a = n.stateNode;
                                try {
                                    var se = aa(n.type, u, n.elementType === n.type);
                                    e = a.getSnapshotBeforeUpdate(se, c), a.__reactInternalSnapshotBeforeUpdate = e
                                } catch (ae) {
                                    _e(n, n.return, ae)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) ao(e);
                                else if (n === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        ao(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(r(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, Ze = e;
                        break
                    }
                    Ze = t.return
                }
    }

    function Md(e, t, n) {
        var a = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Cn(e, n), a & 4 && Ul(5, n);
                break;
            case 1:
                if (Cn(e, n), a & 4)
                    if (e = n.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (g) {
                        _e(n, n.return, g)
                    } else {
                        var u = aa(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (g) {
                            _e(n, n.return, g)
                        }
                    }
                a & 64 && Od(n), a & 512 && kl(n, n.return);
                break;
            case 3:
                if (Cn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
                    if (t = null, n.child !== null) switch (n.child.tag) {
                        case 27:
                        case 5:
                            t = n.child.stateNode;
                            break;
                        case 1:
                            t = n.child.stateNode
                    }
                    try {
                        mf(e, t)
                    } catch (g) {
                        _e(n, n.return, g)
                    }
                }
                break;
            case 27:
                t === null && a & 4 && _d(n);
            case 26:
            case 5:
                Cn(e, n), t === null && a & 4 && Cd(n), a & 512 && kl(n, n.return);
                break;
            case 12:
                Cn(e, n);
                break;
            case 13:
                Cn(e, n), a & 4 && Ud(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = R0.bind(null, n), G0(e, n))));
                break;
            case 22:
                if (a = n.memoizedState !== null || dn, !a) {
                    t = t !== null && t.memoizedState !== null || Ye, u = dn;
                    var c = Ye;
                    dn = a, (Ye = t) && !c ? An(e, n, (n.subtreeFlags & 8772) !== 0) : Cn(e, n), dn = u, Ye = c
                }
                break;
            case 30:
                break;
            default:
                Cn(e, n)
        }
    }

    function zd(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, zd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ur(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Le = null,
        dt = !1;

    function hn(e, t, n) {
        for (n = n.child; n !== null;) Ld(e, t, n), n = n.sibling
    }

    function Ld(e, t, n) {
        if (pt && typeof pt.onCommitFiberUnmount == "function") try {
            pt.onCommitFiberUnmount(ll, n)
        } catch {}
        switch (n.tag) {
            case 26:
                Ye || $t(n, t), hn(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                break;
            case 27:
                Ye || $t(n, t);
                var a = Le,
                    u = dt;
                Un(n.type) && (Le = n.stateNode, dt = !1), hn(e, t, n), $l(n.stateNode), Le = a, dt = u;
                break;
            case 5:
                Ye || $t(n, t);
            case 6:
                if (a = Le, u = dt, Le = null, hn(e, t, n), Le = a, dt = u, Le !== null)
                    if (dt) try {
                        (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(n.stateNode)
                    } catch (c) {
                        _e(n, t, c)
                    } else try {
                        Le.removeChild(n.stateNode)
                    } catch (c) {
                        _e(n, t, c)
                    }
                break;
            case 18:
                Le !== null && (dt ? (e = Le, Eh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), ei(e)) : Eh(Le, n.stateNode));
                break;
            case 4:
                a = Le, u = dt, Le = n.stateNode.containerInfo, dt = !0, hn(e, t, n), Le = a, dt = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Ye || Tn(2, n, t), Ye || Tn(4, n, t), hn(e, t, n);
                break;
            case 1:
                Ye || ($t(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Td(n, t, a)), hn(e, t, n);
                break;
            case 21:
                hn(e, t, n);
                break;
            case 22:
                Ye = (a = Ye) || n.memoizedState !== null, hn(e, t, n), Ye = a;
                break;
            default:
                hn(e, t, n)
        }
    }

    function Ud(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            ei(e)
        } catch (n) {
            _e(t, t.return, n)
        }
    }

    function y0(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Dd), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Dd), t;
            default:
                throw Error(r(435, e.tag))
        }
    }

    function Au(e, t) {
        var n = y0(e);
        t.forEach(function(a) {
            var u = j0.bind(null, e, a);
            n.has(a) || (n.add(a), a.then(u, u))
        })
    }

    function vt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var a = 0; a < n.length; a++) {
                var u = n[a],
                    c = e,
                    g = t,
                    b = g;
                e: for (; b !== null;) {
                    switch (b.tag) {
                        case 27:
                            if (Un(b.type)) {
                                Le = b.stateNode, dt = !1;
                                break e
                            }
                            break;
                        case 5:
                            Le = b.stateNode, dt = !1;
                            break e;
                        case 3:
                        case 4:
                            Le = b.stateNode.containerInfo, dt = !0;
                            break e
                    }
                    b = b.return
                }
                if (Le === null) throw Error(r(160));
                Ld(c, g, u), Le = null, dt = !1, c = u.alternate, c !== null && (c.return = null), u.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) kd(t, e), t = t.sibling
    }
    var Ht = null;

    function kd(e, t) {
        var n = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                vt(t, e), St(e), a & 4 && (Tn(3, e, e.return), Ul(3, e), Tn(5, e, e.return));
                break;
            case 1:
                vt(t, e), St(e), a & 512 && (Ye || n === null || $t(n, n.return)), a & 64 && dn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
                break;
            case 26:
                var u = Ht;
                if (vt(t, e), St(e), a & 512 && (Ye || n === null || $t(n, n.return)), a & 4) {
                    var c = n !== null ? n.memoizedState : null;
                    if (a = e.memoizedState, n === null)
                        if (a === null)
                            if (e.stateNode === null) {
                                e: {
                                    a = e.type,
                                    n = e.memoizedProps,
                                    u = u.ownerDocument || u;t: switch (a) {
                                        case "title":
                                            c = u.getElementsByTagName("title")[0], (!c || c[rl] || c[et] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = u.createElement(a), u.head.insertBefore(c, u.querySelector("head > title"))), Ie(c, a, n), c[et] = e, Qe(c), a = c;
                                            break e;
                                        case "link":
                                            var g = _h("link", "href", u).get(a + (n.href || ""));
                                            if (g) {
                                                for (var b = 0; b < g.length; b++)
                                                    if (c = g[b], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                        g.splice(b, 1);
                                                        break t
                                                    }
                                            }
                                            c = u.createElement(a), Ie(c, a, n), u.head.appendChild(c);
                                            break;
                                        case "meta":
                                            if (g = _h("meta", "content", u).get(a + (n.content || ""))) {
                                                for (b = 0; b < g.length; b++)
                                                    if (c = g[b], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                        g.splice(b, 1);
                                                        break t
                                                    }
                                            }
                                            c = u.createElement(a), Ie(c, a, n), u.head.appendChild(c);
                                            break;
                                        default:
                                            throw Error(r(468, a))
                                    }
                                    c[et] = e,
                                    Qe(c),
                                    a = c
                                }
                                e.stateNode = a
                            }
                    else Dh(u, e.type, e.stateNode);
                    else e.stateNode = Ah(u, a, e.memoizedProps);
                    else c !== a ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, a === null ? Dh(u, e.type, e.stateNode) : Ah(u, a, e.memoizedProps)) : a === null && e.stateNode !== null && ju(e, e.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                vt(t, e), St(e), a & 512 && (Ye || n === null || $t(n, n.return)), n !== null && a & 4 && ju(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (vt(t, e), St(e), a & 512 && (Ye || n === null || $t(n, n.return)), e.flags & 32) {
                    u = e.stateNode;
                    try {
                        xa(u, "")
                    } catch (z) {
                        _e(e, e.return, z)
                    }
                }
                a & 4 && e.stateNode != null && (u = e.memoizedProps, ju(e, u, n !== null ? n.memoizedProps : u)), a & 1024 && (Cu = !0);
                break;
            case 6:
                if (vt(t, e), St(e), a & 4) {
                    if (e.stateNode === null) throw Error(r(162));
                    a = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = a
                    } catch (z) {
                        _e(e, e.return, z)
                    }
                }
                break;
            case 3:
                if (Es = null, u = Ht, Ht = Ss(t.containerInfo), vt(t, e), Ht = u, St(e), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    ei(t.containerInfo)
                } catch (z) {
                    _e(e, e.return, z)
                }
                Cu && (Cu = !1, Hd(e));
                break;
            case 4:
                a = Ht, Ht = Ss(e.stateNode.containerInfo), vt(t, e), St(e), Ht = a;
                break;
            case 12:
                vt(t, e), St(e);
                break;
            case 13:
                vt(t, e), St(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Uu = Gt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Au(e, a)));
                break;
            case 22:
                u = e.memoizedState !== null;
                var w = n !== null && n.memoizedState !== null,
                    A = dn,
                    q = Ye;
                if (dn = A || u, Ye = q || w, vt(t, e), Ye = q, dn = A, St(e), a & 8192) e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (n === null || w || dn || Ye || la(e)), n = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            w = n = t;
                            try {
                                if (c = w.stateNode, u) g = c.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                                else {
                                    b = w.stateNode;
                                    var Y = w.memoizedProps.style,
                                        D = Y != null && Y.hasOwnProperty("display") ? Y.display : null;
                                    b.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim()
                                }
                            } catch (z) {
                                _e(w, w.return, z)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            w = t;
                            try {
                                w.stateNode.nodeValue = u ? "" : w.memoizedProps
                            } catch (z) {
                                _e(w, w.return, z)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        n === t && (n = null), t = t.return
                    }
                    n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                }
                a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Au(e, n))));
                break;
            case 19:
                vt(t, e), St(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Au(e, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                vt(t, e), St(e)
        }
    }

    function St(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, a = e.return; a !== null;) {
                    if (Ad(a)) {
                        n = a;
                        break
                    }
                    a = a.return
                }
                if (n == null) throw Error(r(160));
                switch (n.tag) {
                    case 27:
                        var u = n.stateNode,
                            c = Ou(e);
                        us(e, c, u);
                        break;
                    case 5:
                        var g = n.stateNode;
                        n.flags & 32 && (xa(g, ""), n.flags &= -33);
                        var b = Ou(e);
                        us(e, b, g);
                        break;
                    case 3:
                    case 4:
                        var w = n.stateNode.containerInfo,
                            A = Ou(e);
                        Tu(e, A, w);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (q) {
                _e(e, e.return, q)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Hd(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                Hd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function Cn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) Md(e, t.alternate, t), t = t.sibling
    }

    function la(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Tn(4, t, t.return), la(t);
                    break;
                case 1:
                    $t(t, t.return);
                    var n = t.stateNode;
                    typeof n.componentWillUnmount == "function" && Td(t, t.return, n), la(t);
                    break;
                case 27:
                    $l(t.stateNode);
                case 26:
                case 5:
                    $t(t, t.return), la(t);
                    break;
                case 22:
                    t.memoizedState === null && la(t);
                    break;
                case 30:
                    la(t);
                    break;
                default:
                    la(t)
            }
            e = e.sibling
        }
    }

    function An(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var a = t.alternate,
                u = e,
                c = t,
                g = c.flags;
            switch (c.tag) {
                case 0:
                case 11:
                case 15:
                    An(u, c, n), Ul(4, c);
                    break;
                case 1:
                    if (An(u, c, n), a = c, u = a.stateNode, typeof u.componentDidMount == "function") try {
                        u.componentDidMount()
                    } catch (A) {
                        _e(a, a.return, A)
                    }
                    if (a = c, u = a.updateQueue, u !== null) {
                        var b = a.stateNode;
                        try {
                            var w = u.shared.hiddenCallbacks;
                            if (w !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < w.length; u++) hf(w[u], b)
                        } catch (A) {
                            _e(a, a.return, A)
                        }
                    }
                    n && g & 64 && Od(c), kl(c, c.return);
                    break;
                case 27:
                    _d(c);
                case 26:
                case 5:
                    An(u, c, n), n && a === null && g & 4 && Cd(c), kl(c, c.return);
                    break;
                case 12:
                    An(u, c, n);
                    break;
                case 13:
                    An(u, c, n), n && g & 4 && Ud(u, c);
                    break;
                case 22:
                    c.memoizedState === null && An(u, c, n), kl(c, c.return);
                    break;
                case 30:
                    break;
                default:
                    An(u, c, n)
            }
            t = t.sibling
        }
    }

    function _u(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && wl(n))
    }

    function Du(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wl(e))
    }

    function Qt(e, t, n, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Bd(e, t, n, a), t = t.sibling
    }

    function Bd(e, t, n, a) {
        var u = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Qt(e, t, n, a), u & 2048 && Ul(9, t);
                break;
            case 1:
                Qt(e, t, n, a);
                break;
            case 3:
                Qt(e, t, n, a), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wl(e)));
                break;
            case 12:
                if (u & 2048) {
                    Qt(e, t, n, a), e = t.stateNode;
                    try {
                        var c = t.memoizedProps,
                            g = c.id,
                            b = c.onPostCommit;
                        typeof b == "function" && b(g, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (w) {
                        _e(t, t.return, w)
                    }
                } else Qt(e, t, n, a);
                break;
            case 13:
                Qt(e, t, n, a);
                break;
            case 23:
                break;
            case 22:
                c = t.stateNode, g = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? Qt(e, t, n, a) : Hl(e, t) : c._visibility & 2 ? Qt(e, t, n, a) : (c._visibility |= 2, Ha(e, t, n, a, (t.subtreeFlags & 10256) !== 0)), u & 2048 && _u(g, t);
                break;
            case 24:
                Qt(e, t, n, a), u & 2048 && Du(t.alternate, t);
                break;
            default:
                Qt(e, t, n, a)
        }
    }

    function Ha(e, t, n, a, u) {
        for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var c = e,
                g = t,
                b = n,
                w = a,
                A = g.flags;
            switch (g.tag) {
                case 0:
                case 11:
                case 15:
                    Ha(c, g, b, w, u), Ul(8, g);
                    break;
                case 23:
                    break;
                case 22:
                    var q = g.stateNode;
                    g.memoizedState !== null ? q._visibility & 2 ? Ha(c, g, b, w, u) : Hl(c, g) : (q._visibility |= 2, Ha(c, g, b, w, u)), u && A & 2048 && _u(g.alternate, g);
                    break;
                case 24:
                    Ha(c, g, b, w, u), u && A & 2048 && Du(g.alternate, g);
                    break;
                default:
                    Ha(c, g, b, w, u)
            }
            t = t.sibling
        }
    }

    function Hl(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var n = e,
                    a = t,
                    u = a.flags;
                switch (a.tag) {
                    case 22:
                        Hl(n, a), u & 2048 && _u(a.alternate, a);
                        break;
                    case 24:
                        Hl(n, a), u & 2048 && Du(a.alternate, a);
                        break;
                    default:
                        Hl(n, a)
                }
                t = t.sibling
            }
    }
    var Bl = 8192;

    function Ba(e) {
        if (e.subtreeFlags & Bl)
            for (e = e.child; e !== null;) qd(e), e = e.sibling
    }

    function qd(e) {
        switch (e.tag) {
            case 26:
                Ba(e), e.flags & Bl && e.memoizedState !== null && ny(Ht, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Ba(e);
                break;
            case 3:
            case 4:
                var t = Ht;
                Ht = Ss(e.stateNode.containerInfo), Ba(e), Ht = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Bl, Bl = 16777216, Ba(e), Bl = t) : Ba(e));
                break;
            default:
                Ba(e)
        }
    }

    function Pd(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function ql(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    Ze = a, Gd(a, e)
                }
            Pd(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) Yd(e), e = e.sibling
    }

    function Yd(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ql(e), e.flags & 2048 && Tn(9, e, e.return);
                break;
            case 3:
                ql(e);
                break;
            case 12:
                ql(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, os(e)) : ql(e);
                break;
            default:
                ql(e)
        }
    }

    function os(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    Ze = a, Gd(a, e)
                }
            Pd(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    Tn(8, t, t.return), os(t);
                    break;
                case 22:
                    n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, os(t));
                    break;
                default:
                    os(t)
            }
            e = e.sibling
        }
    }

    function Gd(e, t) {
        for (; Ze !== null;) {
            var n = Ze;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    Tn(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var a = n.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    wl(n.memoizedState.cache)
            }
            if (a = n.child, a !== null) a.return = n, Ze = a;
            else e: for (n = e; Ze !== null;) {
                a = Ze;
                var u = a.sibling,
                    c = a.return;
                if (zd(a), a === n) {
                    Ze = null;
                    break e
                }
                if (u !== null) {
                    u.return = c, Ze = u;
                    break e
                }
                Ze = c
            }
        }
    }
    var b0 = {
            getCacheForType: function(e) {
                var t = tt(Xe),
                    n = t.data.get(e);
                return n === void 0 && (n = e(), t.data.set(e, n)), n
            }
        },
        x0 = typeof WeakMap == "function" ? WeakMap : Map,
        Ne = 0,
        Me = null,
        ye = null,
        xe = 0,
        Re = 0,
        wt = null,
        _n = !1,
        qa = !1,
        Mu = !1,
        mn = 0,
        qe = 0,
        Dn = 0,
        ia = 0,
        zu = 0,
        Mt = 0,
        Pa = 0,
        Pl = null,
        ht = null,
        Lu = !1,
        Uu = 0,
        cs = 1 / 0,
        fs = null,
        Mn = null,
        We = 0,
        zn = null,
        Ya = null,
        Ga = 0,
        ku = 0,
        Hu = null,
        Vd = null,
        Yl = 0,
        Bu = null;

    function Et() {
        if ((Ne & 2) !== 0 && xe !== 0) return xe & -xe;
        if (U.T !== null) {
            var e = Aa;
            return e !== 0 ? e : $u()
        }
        return ic()
    }

    function Xd() {
        Mt === 0 && (Mt = (xe & 536870912) === 0 || we ? tc() : 536870912);
        var e = Dt.current;
        return e !== null && (e.flags |= 32), Mt
    }

    function Nt(e, t, n) {
        (e === Me && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) && (Va(e, 0), Ln(e, xe, Mt, !1)), sl(e, n), ((Ne & 2) === 0 || e !== Me) && (e === Me && ((Ne & 2) === 0 && (ia |= n), qe === 4 && Ln(e, xe, Mt, !1)), Kt(e))
    }

    function $d(e, t, n) {
        if ((Ne & 6) !== 0) throw Error(r(327));
        var a = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || il(e, t),
            u = a ? w0(e, t) : Yu(e, t, !0),
            c = a;
        do {
            if (u === 0) {
                qa && !a && Ln(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate, c && !v0(n)) {
                    u = Yu(e, t, !1), c = !1;
                    continue
                }
                if (u === 2) {
                    if (c = t, e.errorRecoveryDisabledLanes & c) var g = 0;
                    else g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                    if (g !== 0) {
                        t = g;
                        e: {
                            var b = e;u = Pl;
                            var w = b.current.memoizedState.isDehydrated;
                            if (w && (Va(b, g).flags |= 256), g = Yu(b, g, !1), g !== 2) {
                                if (Mu && !w) {
                                    b.errorRecoveryDisabledLanes |= c, ia |= c, u = 4;
                                    break e
                                }
                                c = ht, ht = u, c !== null && (ht === null ? ht = c : ht.push.apply(ht, c))
                            }
                            u = g
                        }
                        if (c = !1, u !== 2) continue
                    }
                }
                if (u === 1) {
                    Va(e, 0), Ln(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e, c = u, c) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            Ln(a, t, Mt, !_n);
                            break e;
                        case 2:
                            ht = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((t & 62914560) === t && (u = Uu + 300 - Gt(), 10 < u)) {
                        if (Ln(a, t, Mt, !_n), wi(a, 0, !0) !== 0) break e;
                        a.timeoutHandle = Sh(Qd.bind(null, a, n, ht, fs, Lu, t, Mt, ia, Pa, _n, c, 2, -0, 0), u);
                        break e
                    }
                    Qd(a, n, ht, fs, Lu, t, Mt, ia, Pa, _n, c, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Kt(e)
    }

    function Qd(e, t, n, a, u, c, g, b, w, A, q, Y, D, z) {
        if (e.timeoutHandle = -1, Y = t.subtreeFlags, (Y & 8192 || (Y & 16785408) === 16785408) && (Zl = {
                stylesheets: null,
                count: 0,
                unsuspend: ty
            }, qd(t), Y = ay(), Y !== null)) {
            e.cancelPendingCommit = Y(eh.bind(null, e, t, c, n, a, u, g, b, w, q, 1, D, z)), Ln(e, c, g, !A);
            return
        }
        eh(e, t, c, n, a, u, g, b, w)
    }

    function v0(e) {
        for (var t = e;;) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
                for (var a = 0; a < n.length; a++) {
                    var u = n[a],
                        c = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!bt(c(), u)) return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Ln(e, t, n, a) {
        t &= ~zu, t &= ~ia, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
        for (var u = t; 0 < u;) {
            var c = 31 - yt(u),
                g = 1 << c;
            a[c] = -1, u &= ~g
        }
        n !== 0 && ac(e, n, t)
    }

    function ds() {
        return (Ne & 6) === 0 ? (Gl(0), !1) : !0
    }

    function qu() {
        if (ye !== null) {
            if (Re === 0) var e = ye.return;
            else e = ye, sn = In = null, au(e), Ua = null, Ml = 0, e = ye;
            for (; e !== null;) jd(e.alternate, e), e = e.return;
            ye = null
        }
    }

    function Va(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1, H0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), qu(), Me = e, ye = n = nn(e.current, null), xe = t, Re = 0, wt = null, _n = !1, qa = il(e, t), Mu = !1, Pa = Mt = zu = ia = Dn = qe = 0, ht = Pl = null, Lu = !1, (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a;) {
                var u = 31 - yt(a),
                    c = 1 << u;
                t |= e[u], a &= ~c
            }
        return mn = t, zi(), n
    }

    function Kd(e, t) {
        me = null, U.H = Ii, t === Nl || t === Gi ? (t = ff(), Re = 3) : t === uf ? (t = ff(), Re = 4) : Re = t === dd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, wt = t, ye === null && (qe = 1, ls(e, Tt(t, e.current)))
    }

    function Zd() {
        var e = U.H;
        return U.H = Ii, e === null ? Ii : e
    }

    function Jd() {
        var e = U.A;
        return U.A = b0, e
    }

    function Pu() {
        qe = 4, _n || (xe & 4194048) !== xe && Dt.current !== null || (qa = !0), (Dn & 134217727) === 0 && (ia & 134217727) === 0 || Me === null || Ln(Me, xe, Mt, !1)
    }

    function Yu(e, t, n) {
        var a = Ne;
        Ne |= 2;
        var u = Zd(),
            c = Jd();
        (Me !== e || xe !== t) && (fs = null, Va(e, t)), t = !1;
        var g = qe;
        e: do try {
                if (Re !== 0 && ye !== null) {
                    var b = ye,
                        w = wt;
                    switch (Re) {
                        case 8:
                            qu(), g = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Dt.current === null && (t = !0);
                            var A = Re;
                            if (Re = 0, wt = null, Xa(e, b, w, A), n && qa) {
                                g = 0;
                                break e
                            }
                            break;
                        default:
                            A = Re, Re = 0, wt = null, Xa(e, b, w, A)
                    }
                }
                S0(), g = qe;
                break
            } catch (q) {
                Kd(e, q)
            }
            while (!0);
            return t && e.shellSuspendCounter++, sn = In = null, Ne = a, U.H = u, U.A = c, ye === null && (Me = null, xe = 0, zi()), g
    }

    function S0() {
        for (; ye !== null;) Fd(ye)
    }

    function w0(e, t) {
        var n = Ne;
        Ne |= 2;
        var a = Zd(),
            u = Jd();
        Me !== e || xe !== t ? (fs = null, cs = Gt() + 500, Va(e, t)) : qa = il(e, t);
        e: do try {
                if (Re !== 0 && ye !== null) {
                    t = ye;
                    var c = wt;
                    t: switch (Re) {
                        case 1:
                            Re = 0, wt = null, Xa(e, t, c, 1);
                            break;
                        case 2:
                        case 9:
                            if (of(c)) {
                                Re = 0, wt = null, Wd(t);
                                break
                            }
                            t = function() {
                                Re !== 2 && Re !== 9 || Me !== e || (Re = 7), Kt(e)
                            }, c.then(t, t);
                            break e;
                        case 3:
                            Re = 7;
                            break e;
                        case 4:
                            Re = 5;
                            break e;
                        case 7:
                            of(c) ? (Re = 0, wt = null, Wd(t)) : (Re = 0, wt = null, Xa(e, t, c, 7));
                            break;
                        case 5:
                            var g = null;
                            switch (ye.tag) {
                                case 26:
                                    g = ye.memoizedState;
                                case 5:
                                case 27:
                                    var b = ye;
                                    if (!g || Mh(g)) {
                                        Re = 0, wt = null;
                                        var w = b.sibling;
                                        if (w !== null) ye = w;
                                        else {
                                            var A = b.return;
                                            A !== null ? (ye = A, hs(A)) : ye = null
                                        }
                                        break t
                                    }
                            }
                            Re = 0, wt = null, Xa(e, t, c, 5);
                            break;
                        case 6:
                            Re = 0, wt = null, Xa(e, t, c, 6);
                            break;
                        case 8:
                            qu(), qe = 6;
                            break e;
                        default:
                            throw Error(r(462))
                    }
                }
                E0();
                break
            } catch (q) {
                Kd(e, q)
            }
            while (!0);
            return sn = In = null, U.H = a, U.A = u, Ne = n, ye !== null ? 0 : (Me = null, xe = 0, zi(), qe)
    }

    function E0() {
        for (; ye !== null && !Xg();) Fd(ye)
    }

    function Fd(e) {
        var t = Nd(e.alternate, e, mn);
        e.memoizedProps = e.pendingProps, t === null ? hs(e) : ye = t
    }

    function Wd(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = bd(n, t, t.pendingProps, t.type, void 0, xe);
                break;
            case 11:
                t = bd(n, t, t.pendingProps, t.type.render, t.ref, xe);
                break;
            case 5:
                au(t);
            default:
                jd(n, t), t = ye = Wc(t, mn), t = Nd(n, t, mn)
        }
        e.memoizedProps = e.pendingProps, t === null ? hs(e) : ye = t
    }

    function Xa(e, t, n, a) {
        sn = In = null, au(t), Ua = null, Ml = 0;
        var u = t.return;
        try {
            if (d0(e, u, t, n, xe)) {
                qe = 1, ls(e, Tt(n, e.current)), ye = null;
                return
            }
        } catch (c) {
            if (u !== null) throw ye = u, c;
            qe = 1, ls(e, Tt(n, e.current)), ye = null;
            return
        }
        t.flags & 32768 ? (we || a === 1 ? e = !0 : qa || (xe & 536870912) !== 0 ? e = !1 : (_n = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Dt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Id(t, e)) : hs(t)
    }

    function hs(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Id(t, _n);
                return
            }
            e = t.return;
            var n = m0(t.alternate, t, mn);
            if (n !== null) {
                ye = n;
                return
            }
            if (t = t.sibling, t !== null) {
                ye = t;
                return
            }
            ye = t = e
        } while (t !== null);
        qe === 0 && (qe = 5)
    }

    function Id(e, t) {
        do {
            var n = g0(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767, ye = n;
                return
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
                ye = e;
                return
            }
            ye = e = n
        } while (e !== null);
        qe = 6, ye = null
    }

    function eh(e, t, n, a, u, c, g, b, w) {
        e.cancelPendingCommit = null;
        do ms(); while (We !== 0);
        if ((Ne & 6) !== 0) throw Error(r(327));
        if (t !== null) {
            if (t === e.current) throw Error(r(177));
            if (c = t.lanes | t.childLanes, c |= Dr, tp(e, n, c, g, b, w), e === Me && (ye = Me = null, xe = 0), Ya = t, zn = e, Ga = n, ku = c, Hu = u, Vd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, O0(xi, function() {
                    return ih(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                a = U.T, U.T = null, u = X.p, X.p = 2, g = Ne, Ne |= 4;
                try {
                    p0(e, t, n)
                } finally {
                    Ne = g, X.p = u, U.T = a
                }
            }
            We = 1, th(), nh(), ah()
        }
    }

    function th() {
        if (We === 1) {
            We = 0;
            var e = zn,
                t = Ya,
                n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = U.T, U.T = null;
                var a = X.p;
                X.p = 2;
                var u = Ne;
                Ne |= 4;
                try {
                    kd(t, e);
                    var c = eo,
                        g = Yc(e.containerInfo),
                        b = c.focusedElem,
                        w = c.selectionRange;
                    if (g !== b && b && b.ownerDocument && Pc(b.ownerDocument.documentElement, b)) {
                        if (w !== null && Or(b)) {
                            var A = w.start,
                                q = w.end;
                            if (q === void 0 && (q = A), "selectionStart" in b) b.selectionStart = A, b.selectionEnd = Math.min(q, b.value.length);
                            else {
                                var Y = b.ownerDocument || document,
                                    D = Y && Y.defaultView || window;
                                if (D.getSelection) {
                                    var z = D.getSelection(),
                                        se = b.textContent.length,
                                        ae = Math.min(w.start, se),
                                        Ce = w.end === void 0 ? ae : Math.min(w.end, se);
                                    !z.extend && ae > Ce && (g = Ce, Ce = ae, ae = g);
                                    var j = qc(b, ae),
                                        R = qc(b, Ce);
                                    if (j && R && (z.rangeCount !== 1 || z.anchorNode !== j.node || z.anchorOffset !== j.offset || z.focusNode !== R.node || z.focusOffset !== R.offset)) {
                                        var C = Y.createRange();
                                        C.setStart(j.node, j.offset), z.removeAllRanges(), ae > Ce ? (z.addRange(C), z.extend(R.node, R.offset)) : (C.setEnd(R.node, R.offset), z.addRange(C))
                                    }
                                }
                            }
                        }
                        for (Y = [], z = b; z = z.parentNode;) z.nodeType === 1 && Y.push({
                            element: z,
                            left: z.scrollLeft,
                            top: z.scrollTop
                        });
                        for (typeof b.focus == "function" && b.focus(), b = 0; b < Y.length; b++) {
                            var P = Y[b];
                            P.element.scrollLeft = P.left, P.element.scrollTop = P.top
                        }
                    }
                    js = !!Iu, eo = Iu = null
                } finally {
                    Ne = u, X.p = a, U.T = n
                }
            }
            e.current = t, We = 2
        }
    }

    function nh() {
        if (We === 2) {
            We = 0;
            var e = zn,
                t = Ya,
                n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = U.T, U.T = null;
                var a = X.p;
                X.p = 2;
                var u = Ne;
                Ne |= 4;
                try {
                    Md(e, t.alternate, t)
                } finally {
                    Ne = u, X.p = a, U.T = n
                }
            }
            We = 3
        }
    }

    function ah() {
        if (We === 4 || We === 3) {
            We = 0, $g();
            var e = zn,
                t = Ya,
                n = Ga,
                a = Vd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, Ya = zn = null, lh(e, e.pendingLanes));
            var u = e.pendingLanes;
            if (u === 0 && (Mn = null), sr(n), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function") try {
                pt.onCommitFiberRoot(ll, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (a !== null) {
                t = U.T, u = X.p, X.p = 2, U.T = null;
                try {
                    for (var c = e.onRecoverableError, g = 0; g < a.length; g++) {
                        var b = a[g];
                        c(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    U.T = t, X.p = u
                }
            }(Ga & 3) !== 0 && ms(), Kt(e), u = e.pendingLanes, (n & 4194090) !== 0 && (u & 42) !== 0 ? e === Bu ? Yl++ : (Yl = 0, Bu = e) : Yl = 0, Gl(0)
        }
    }

    function lh(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, wl(t)))
    }

    function ms(e) {
        return th(), nh(), ah(), ih()
    }

    function ih() {
        if (We !== 5) return !1;
        var e = zn,
            t = ku;
        ku = 0;
        var n = sr(Ga),
            a = U.T,
            u = X.p;
        try {
            X.p = 32 > n ? 32 : n, U.T = null, n = Hu, Hu = null;
            var c = zn,
                g = Ga;
            if (We = 0, Ya = zn = null, Ga = 0, (Ne & 6) !== 0) throw Error(r(331));
            var b = Ne;
            if (Ne |= 4, Yd(c.current), Bd(c, c.current, g, n), Ne = b, Gl(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function") try {
                pt.onPostCommitFiberRoot(ll, c)
            } catch {}
            return !0
        } finally {
            X.p = u, U.T = a, lh(e, t)
        }
    }

    function sh(e, t, n) {
        t = Tt(n, t), t = yu(e.stateNode, t, 2), e = Nn(e, t, 2), e !== null && (sl(e, 2), Kt(e))
    }

    function _e(e, t, n) {
        if (e.tag === 3) sh(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    sh(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Mn === null || !Mn.has(a))) {
                        e = Tt(n, e), n = cd(2), a = Nn(t, n, 2), a !== null && (fd(n, a, t, e), sl(a, 2), Kt(a));
                        break
                    }
                }
                t = t.return
            }
    }

    function Gu(e, t, n) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new x0;
            var u = new Set;
            a.set(t, u)
        } else u = a.get(t), u === void 0 && (u = new Set, a.set(t, u));
        u.has(n) || (Mu = !0, u.add(n), e = N0.bind(null, e, t, n), t.then(e, e))
    }

    function N0(e, t, n) {
        var a = e.pingCache;
        a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Me === e && (xe & n) === n && (qe === 4 || qe === 3 && (xe & 62914560) === xe && 300 > Gt() - Uu ? (Ne & 2) === 0 && Va(e, 0) : zu |= n, Pa === xe && (Pa = 0)), Kt(e)
    }

    function rh(e, t) {
        t === 0 && (t = nc()), e = ja(e, t), e !== null && (sl(e, t), Kt(e))
    }

    function R0(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), rh(e, n)
    }

    function j0(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var a = e.stateNode,
                    u = e.memoizedState;
                u !== null && (n = u.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        a !== null && a.delete(t), rh(e, n)
    }

    function O0(e, t) {
        return nr(e, t)
    }
    var gs = null,
        $a = null,
        Vu = !1,
        ps = !1,
        Xu = !1,
        sa = 0;

    function Kt(e) {
        e !== $a && e.next === null && ($a === null ? gs = $a = e : $a = $a.next = e), ps = !0, Vu || (Vu = !0, C0())
    }

    function Gl(e, t) {
        if (!Xu && ps) {
            Xu = !0;
            do
                for (var n = !1, a = gs; a !== null;) {
                    if (e !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var c = 0;
                        else {
                            var g = a.suspendedLanes,
                                b = a.pingedLanes;
                            c = (1 << 31 - yt(42 | e) + 1) - 1, c &= u & ~(g & ~b), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (n = !0, fh(a, c))
                    } else c = xe, c = wi(a, a === Me ? c : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (c & 3) === 0 || il(a, c) || (n = !0, fh(a, c));
                    a = a.next
                }
            while (n);
            Xu = !1
        }
    }

    function T0() {
        uh()
    }

    function uh() {
        ps = Vu = !1;
        var e = 0;
        sa !== 0 && (k0() && (e = sa), sa = 0);
        for (var t = Gt(), n = null, a = gs; a !== null;) {
            var u = a.next,
                c = oh(a, t);
            c === 0 ? (a.next = null, n === null ? gs = u : n.next = u, u === null && ($a = n)) : (n = a, (e !== 0 || (c & 3) !== 0) && (ps = !0)), a = u
        }
        Gl(e)
    }

    function oh(e, t) {
        for (var n = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c;) {
            var g = 31 - yt(c),
                b = 1 << g,
                w = u[g];
            w === -1 ? ((b & n) === 0 || (b & a) !== 0) && (u[g] = ep(b, t)) : w <= t && (e.expiredLanes |= b), c &= ~b
        }
        if (t = Me, n = xe, n = wi(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, n === 0 || e === t && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && ar(a), e.callbackNode = null, e.callbackPriority = 0;
        if ((n & 3) === 0 || il(e, n)) {
            if (t = n & -n, t === e.callbackPriority) return t;
            switch (a !== null && ar(a), sr(n)) {
                case 2:
                case 8:
                    n = Io;
                    break;
                case 32:
                    n = xi;
                    break;
                case 268435456:
                    n = ec;
                    break;
                default:
                    n = xi
            }
            return a = ch.bind(null, e), n = nr(n, a), e.callbackPriority = t, e.callbackNode = n, t
        }
        return a !== null && a !== null && ar(a), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function ch(e, t) {
        if (We !== 0 && We !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var n = e.callbackNode;
        if (ms() && e.callbackNode !== n) return null;
        var a = xe;
        return a = wi(e, e === Me ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : ($d(e, a, t), oh(e, Gt()), e.callbackNode != null && e.callbackNode === n ? ch.bind(null, e) : null)
    }

    function fh(e, t) {
        if (ms()) return null;
        $d(e, t, !0)
    }

    function C0() {
        B0(function() {
            (Ne & 6) !== 0 ? nr(Wo, T0) : uh()
        })
    }

    function $u() {
        return sa === 0 && (sa = tc()), sa
    }

    function dh(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Oi("" + e)
    }

    function hh(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
    }

    function A0(e, t, n, a, u) {
        if (t === "submit" && n && n.stateNode === u) {
            var c = dh((u[ot] || null).action),
                g = a.submitter;
            g && (t = (t = g[ot] || null) ? dh(t.formAction) : g.getAttribute("formAction"), t !== null && (c = t, g = null));
            var b = new _i("action", "action", null, a, u);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (sa !== 0) {
                                var w = g ? hh(u, g) : new FormData(u);
                                du(n, {
                                    pending: !0,
                                    data: w,
                                    method: u.method,
                                    action: c
                                }, null, w)
                            }
                        } else typeof c == "function" && (b.preventDefault(), w = g ? hh(u, g) : new FormData(u), du(n, {
                            pending: !0,
                            data: w,
                            method: u.method,
                            action: c
                        }, c, w))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Qu = 0; Qu < _r.length; Qu++) {
        var Ku = _r[Qu],
            _0 = Ku.toLowerCase(),
            D0 = Ku[0].toUpperCase() + Ku.slice(1);
        kt(_0, "on" + D0)
    }
    kt(Xc, "onAnimationEnd"), kt($c, "onAnimationIteration"), kt(Qc, "onAnimationStart"), kt("dblclick", "onDoubleClick"), kt("focusin", "onFocus"), kt("focusout", "onBlur"), kt(Zp, "onTransitionRun"), kt(Jp, "onTransitionStart"), kt(Fp, "onTransitionCancel"), kt(Kc, "onTransitionEnd"), pa("onMouseEnter", ["mouseout", "mouseover"]), pa("onMouseLeave", ["mouseout", "mouseover"]), pa("onPointerEnter", ["pointerout", "pointerover"]), pa("onPointerLeave", ["pointerout", "pointerover"]), Vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Vl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        M0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));

    function mh(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var a = e[n],
                u = a.event;
            a = a.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var g = a.length - 1; 0 <= g; g--) {
                        var b = a[g],
                            w = b.instance,
                            A = b.currentTarget;
                        if (b = b.listener, w !== c && u.isPropagationStopped()) break e;
                        c = b, u.currentTarget = A;
                        try {
                            c(u)
                        } catch (q) {
                            as(q)
                        }
                        u.currentTarget = null, c = w
                    } else
                        for (g = 0; g < a.length; g++) {
                            if (b = a[g], w = b.instance, A = b.currentTarget, b = b.listener, w !== c && u.isPropagationStopped()) break e;
                            c = b, u.currentTarget = A;
                            try {
                                c(u)
                            } catch (q) {
                                as(q)
                            }
                            u.currentTarget = null, c = w
                        }
            }
        }
    }

    function be(e, t) {
        var n = t[rr];
        n === void 0 && (n = t[rr] = new Set);
        var a = e + "__bubble";
        n.has(a) || (gh(t, e, 2, !1), n.add(a))
    }

    function Zu(e, t, n) {
        var a = 0;
        t && (a |= 4), gh(n, e, a, t)
    }
    var ys = "_reactListening" + Math.random().toString(36).slice(2);

    function Ju(e) {
        if (!e[ys]) {
            e[ys] = !0, rc.forEach(function(n) {
                n !== "selectionchange" && (M0.has(n) || Zu(n, !1, e), Zu(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ys] || (t[ys] = !0, Zu("selectionchange", !1, t))
        }
    }

    function gh(e, t, n, a) {
        switch (Bh(t)) {
            case 2:
                var u = sy;
                break;
            case 8:
                u = ry;
                break;
            default:
                u = co
        }
        n = u.bind(null, t, n, e), u = void 0, !br || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: u
        }) : e.addEventListener(t, n, !0) : u !== void 0 ? e.addEventListener(t, n, {
            passive: u
        }) : e.addEventListener(t, n, !1)
    }

    function Fu(e, t, n, a, u) {
        var c = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (;;) {
            if (a === null) return;
            var g = a.tag;
            if (g === 3 || g === 4) {
                var b = a.stateNode.containerInfo;
                if (b === u) break;
                if (g === 4)
                    for (g = a.return; g !== null;) {
                        var w = g.tag;
                        if ((w === 3 || w === 4) && g.stateNode.containerInfo === u) return;
                        g = g.return
                    }
                for (; b !== null;) {
                    if (g = ha(b), g === null) return;
                    if (w = g.tag, w === 5 || w === 6 || w === 26 || w === 27) {
                        a = c = g;
                        continue e
                    }
                    b = b.parentNode
                }
            }
            a = a.return
        }
        Sc(function() {
            var A = c,
                q = pr(n),
                Y = [];
            e: {
                var D = Zc.get(e);
                if (D !== void 0) {
                    var z = _i,
                        se = e;
                    switch (e) {
                        case "keypress":
                            if (Ci(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            z = Op;
                            break;
                        case "focusin":
                            se = "focus", z = wr;
                            break;
                        case "focusout":
                            se = "blur", z = wr;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            z = wr;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            z = Nc;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            z = gp;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            z = Ap;
                            break;
                        case Xc:
                        case $c:
                        case Qc:
                            z = bp;
                            break;
                        case Kc:
                            z = Dp;
                            break;
                        case "scroll":
                        case "scrollend":
                            z = hp;
                            break;
                        case "wheel":
                            z = zp;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            z = vp;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            z = jc;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            z = Up
                    }
                    var ae = (t & 4) !== 0,
                        Ce = !ae && (e === "scroll" || e === "scrollend"),
                        j = ae ? D !== null ? D + "Capture" : null : D;
                    ae = [];
                    for (var R = A, C; R !== null;) {
                        var P = R;
                        if (C = P.stateNode, P = P.tag, P !== 5 && P !== 26 && P !== 27 || C === null || j === null || (P = ol(R, j), P != null && ae.push(Xl(R, P, C))), Ce) break;
                        R = R.return
                    }
                    0 < ae.length && (D = new z(D, se, null, n, q), Y.push({
                        event: D,
                        listeners: ae
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (D = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", D && n !== gr && (se = n.relatedTarget || n.fromElement) && (ha(se) || se[da])) break e;
                    if ((z || D) && (D = q.window === q ? q : (D = q.ownerDocument) ? D.defaultView || D.parentWindow : window, z ? (se = n.relatedTarget || n.toElement, z = A, se = se ? ha(se) : null, se !== null && (Ce = f(se), ae = se.tag, se !== Ce || ae !== 5 && ae !== 27 && ae !== 6) && (se = null)) : (z = null, se = A), z !== se)) {
                        if (ae = Nc, P = "onMouseLeave", j = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ae = jc, P = "onPointerLeave", j = "onPointerEnter", R = "pointer"), Ce = z == null ? D : ul(z), C = se == null ? D : ul(se), D = new ae(P, R + "leave", z, n, q), D.target = Ce, D.relatedTarget = C, P = null, ha(q) === A && (ae = new ae(j, R + "enter", se, n, q), ae.target = C, ae.relatedTarget = Ce, P = ae), Ce = P, z && se) t: {
                            for (ae = z, j = se, R = 0, C = ae; C; C = Qa(C)) R++;
                            for (C = 0, P = j; P; P = Qa(P)) C++;
                            for (; 0 < R - C;) ae = Qa(ae),
                            R--;
                            for (; 0 < C - R;) j = Qa(j),
                            C--;
                            for (; R--;) {
                                if (ae === j || j !== null && ae === j.alternate) break t;
                                ae = Qa(ae), j = Qa(j)
                            }
                            ae = null
                        }
                        else ae = null;
                        z !== null && ph(Y, D, z, ae, !1), se !== null && Ce !== null && ph(Y, Ce, se, ae, !0)
                    }
                }
                e: {
                    if (D = A ? ul(A) : window, z = D.nodeName && D.nodeName.toLowerCase(), z === "select" || z === "input" && D.type === "file") var Z = zc;
                    else if (Dc(D))
                        if (Lc) Z = $p;
                        else {
                            Z = Vp;
                            var ge = Gp
                        }
                    else z = D.nodeName,
                    !z || z.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? A && mr(A.elementType) && (Z = zc) : Z = Xp;
                    if (Z && (Z = Z(e, A))) {
                        Mc(Y, Z, n, q);
                        break e
                    }
                    ge && ge(e, D, A),
                    e === "focusout" && A && D.type === "number" && A.memoizedProps.value != null && hr(D, "number", D.value)
                }
                switch (ge = A ? ul(A) : window, e) {
                    case "focusin":
                        (Dc(ge) || ge.contentEditable === "true") && (Ea = ge, Tr = A, yl = null);
                        break;
                    case "focusout":
                        yl = Tr = Ea = null;
                        break;
                    case "mousedown":
                        Cr = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Cr = !1, Gc(Y, n, q);
                        break;
                    case "selectionchange":
                        if (Kp) break;
                    case "keydown":
                    case "keyup":
                        Gc(Y, n, q)
                }
                var W;
                if (Nr) e: {
                    switch (e) {
                        case "compositionstart":
                            var le = "onCompositionStart";
                            break e;
                        case "compositionend":
                            le = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            le = "onCompositionUpdate";
                            break e
                    }
                    le = void 0
                }
                else wa ? Ac(e, n) && (le = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (le = "onCompositionStart");le && (Oc && n.locale !== "ko" && (wa || le !== "onCompositionStart" ? le === "onCompositionEnd" && wa && (W = wc()) : (vn = q, xr = "value" in vn ? vn.value : vn.textContent, wa = !0)), ge = bs(A, le), 0 < ge.length && (le = new Rc(le, e, null, n, q), Y.push({
                    event: le,
                    listeners: ge
                }), W ? le.data = W : (W = _c(n), W !== null && (le.data = W)))),
                (W = Hp ? Bp(e, n) : qp(e, n)) && (le = bs(A, "onBeforeInput"), 0 < le.length && (ge = new Rc("onBeforeInput", "beforeinput", null, n, q), Y.push({
                    event: ge,
                    listeners: le
                }), ge.data = W)),
                A0(Y, e, A, n, q)
            }
            mh(Y, t)
        })
    }

    function Xl(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function bs(e, t) {
        for (var n = t + "Capture", a = []; e !== null;) {
            var u = e,
                c = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || c === null || (u = ol(e, n), u != null && a.unshift(Xl(e, u, c)), u = ol(e, t), u != null && a.push(Xl(e, u, c))), e.tag === 3) return a;
            e = e.return
        }
        return []
    }

    function Qa(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function ph(e, t, n, a, u) {
        for (var c = t._reactName, g = []; n !== null && n !== a;) {
            var b = n,
                w = b.alternate,
                A = b.stateNode;
            if (b = b.tag, w !== null && w === a) break;
            b !== 5 && b !== 26 && b !== 27 || A === null || (w = A, u ? (A = ol(n, c), A != null && g.unshift(Xl(n, A, w))) : u || (A = ol(n, c), A != null && g.push(Xl(n, A, w)))), n = n.return
        }
        g.length !== 0 && e.push({
            event: t,
            listeners: g
        })
    }
    var z0 = /\r\n?/g,
        L0 = /\u0000|\uFFFD/g;

    function yh(e) {
        return (typeof e == "string" ? e : "" + e).replace(z0, `
`).replace(L0, "")
    }

    function bh(e, t) {
        return t = yh(t), yh(e) === t
    }

    function xs() {}

    function Te(e, t, n, a, u, c) {
        switch (n) {
            case "children":
                typeof a == "string" ? t === "body" || t === "textarea" && a === "" || xa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && xa(e, "" + a);
                break;
            case "className":
                Ni(e, "class", a);
                break;
            case "tabIndex":
                Ni(e, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Ni(e, n, a);
                break;
            case "style":
                xc(e, a, c);
                break;
            case "data":
                if (t !== "object") {
                    Ni(e, "data", a);
                    break
                }
            case "src":
            case "href":
                if (a === "" && (t !== "a" || n !== "href")) {
                    e.removeAttribute(n);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                a = Oi("" + a), e.setAttribute(n, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof c == "function" && (n === "formAction" ? (t !== "input" && Te(e, t, "name", u.name, u, null), Te(e, t, "formEncType", u.formEncType, u, null), Te(e, t, "formMethod", u.formMethod, u, null), Te(e, t, "formTarget", u.formTarget, u, null)) : (Te(e, t, "encType", u.encType, u, null), Te(e, t, "method", u.method, u, null), Te(e, t, "target", u.target, u, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                a = Oi("" + a), e.setAttribute(n, a);
                break;
            case "onClick":
                a != null && (e.onclick = xs);
                break;
            case "onScroll":
                a != null && be("scroll", e);
                break;
            case "onScrollEnd":
                a != null && be("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
                    if (n = a.__html, n != null) {
                        if (u.children != null) throw Error(r(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "multiple":
                e.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "muted":
                e.muted = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = Oi("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
                break;
            case "popover":
                be("beforetoggle", e), be("toggle", e), Ei(e, "popover", a);
                break;
            case "xlinkActuate":
                en(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                en(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                en(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                en(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                en(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                en(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                en(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                en(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                en(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                Ei(e, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = fp.get(n) || n, Ei(e, n, a))
        }
    }

    function Wu(e, t, n, a, u, c) {
        switch (n) {
            case "style":
                xc(e, a, c);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
                    if (n = a.__html, n != null) {
                        if (u.children != null) throw Error(r(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "children":
                typeof a == "string" ? xa(e, a) : (typeof a == "number" || typeof a == "bigint") && xa(e, "" + a);
                break;
            case "onScroll":
                a != null && be("scroll", e);
                break;
            case "onScrollEnd":
                a != null && be("scrollend", e);
                break;
            case "onClick":
                a != null && (e.onclick = xs);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!uc.hasOwnProperty(n)) e: {
                    if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), t = n.slice(2, u ? n.length - 7 : void 0), c = e[ot] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, u), typeof a == "function")) {
                        typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, u);
                        break e
                    }
                    n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ei(e, n, a)
                }
        }
    }

    function Ie(e, t, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                be("error", e), be("load", e);
                var a = !1,
                    u = !1,
                    c;
                for (c in n)
                    if (n.hasOwnProperty(c)) {
                        var g = n[c];
                        if (g != null) switch (c) {
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, t));
                            default:
                                Te(e, t, c, g, n, null)
                        }
                    } u && Te(e, t, "srcSet", n.srcSet, n, null), a && Te(e, t, "src", n.src, n, null);
                return;
            case "input":
                be("invalid", e);
                var b = c = g = u = null,
                    w = null,
                    A = null;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var q = n[a];
                        if (q != null) switch (a) {
                            case "name":
                                u = q;
                                break;
                            case "type":
                                g = q;
                                break;
                            case "checked":
                                w = q;
                                break;
                            case "defaultChecked":
                                A = q;
                                break;
                            case "value":
                                c = q;
                                break;
                            case "defaultValue":
                                b = q;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (q != null) throw Error(r(137, t));
                                break;
                            default:
                                Te(e, t, a, q, n, null)
                        }
                    } gc(e, c, b, w, A, g, u, !1), Ri(e);
                return;
            case "select":
                be("invalid", e), a = g = c = null;
                for (u in n)
                    if (n.hasOwnProperty(u) && (b = n[u], b != null)) switch (u) {
                        case "value":
                            c = b;
                            break;
                        case "defaultValue":
                            g = b;
                            break;
                        case "multiple":
                            a = b;
                        default:
                            Te(e, t, u, b, n, null)
                    }
                t = c, n = g, e.multiple = !!a, t != null ? ba(e, !!a, t, !1) : n != null && ba(e, !!a, n, !0);
                return;
            case "textarea":
                be("invalid", e), c = u = a = null;
                for (g in n)
                    if (n.hasOwnProperty(g) && (b = n[g], b != null)) switch (g) {
                        case "value":
                            a = b;
                            break;
                        case "defaultValue":
                            u = b;
                            break;
                        case "children":
                            c = b;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (b != null) throw Error(r(91));
                            break;
                        default:
                            Te(e, t, g, b, n, null)
                    }
                yc(e, a, u, c), Ri(e);
                return;
            case "option":
                for (w in n)
                    if (n.hasOwnProperty(w) && (a = n[w], a != null)) switch (w) {
                        case "selected":
                            e.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            Te(e, t, w, a, n, null)
                    }
                return;
            case "dialog":
                be("beforetoggle", e), be("toggle", e), be("cancel", e), be("close", e);
                break;
            case "iframe":
            case "object":
                be("load", e);
                break;
            case "video":
            case "audio":
                for (a = 0; a < Vl.length; a++) be(Vl[a], e);
                break;
            case "image":
                be("error", e), be("load", e);
                break;
            case "details":
                be("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                be("error", e), be("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (A in n)
                    if (n.hasOwnProperty(A) && (a = n[A], a != null)) switch (A) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            Te(e, t, A, a, n, null)
                    }
                return;
            default:
                if (mr(t)) {
                    for (q in n) n.hasOwnProperty(q) && (a = n[q], a !== void 0 && Wu(e, t, q, a, n, void 0));
                    return
                }
        }
        for (b in n) n.hasOwnProperty(b) && (a = n[b], a != null && Te(e, t, b, a, n, null))
    }

    function U0(e, t, n, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var u = null,
                    c = null,
                    g = null,
                    b = null,
                    w = null,
                    A = null,
                    q = null;
                for (z in n) {
                    var Y = n[z];
                    if (n.hasOwnProperty(z) && Y != null) switch (z) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            w = Y;
                        default:
                            a.hasOwnProperty(z) || Te(e, t, z, null, a, Y)
                    }
                }
                for (var D in a) {
                    var z = a[D];
                    if (Y = n[D], a.hasOwnProperty(D) && (z != null || Y != null)) switch (D) {
                        case "type":
                            c = z;
                            break;
                        case "name":
                            u = z;
                            break;
                        case "checked":
                            A = z;
                            break;
                        case "defaultChecked":
                            q = z;
                            break;
                        case "value":
                            g = z;
                            break;
                        case "defaultValue":
                            b = z;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (z != null) throw Error(r(137, t));
                            break;
                        default:
                            z !== Y && Te(e, t, D, z, a, Y)
                    }
                }
                dr(e, g, b, w, A, q, c, u);
                return;
            case "select":
                z = g = b = D = null;
                for (c in n)
                    if (w = n[c], n.hasOwnProperty(c) && w != null) switch (c) {
                        case "value":
                            break;
                        case "multiple":
                            z = w;
                        default:
                            a.hasOwnProperty(c) || Te(e, t, c, null, a, w)
                    }
                for (u in a)
                    if (c = a[u], w = n[u], a.hasOwnProperty(u) && (c != null || w != null)) switch (u) {
                        case "value":
                            D = c;
                            break;
                        case "defaultValue":
                            b = c;
                            break;
                        case "multiple":
                            g = c;
                        default:
                            c !== w && Te(e, t, u, c, a, w)
                    }
                t = b, n = g, a = z, D != null ? ba(e, !!n, D, !1) : !!a != !!n && (t != null ? ba(e, !!n, t, !0) : ba(e, !!n, n ? [] : "", !1));
                return;
            case "textarea":
                z = D = null;
                for (b in n)
                    if (u = n[b], n.hasOwnProperty(b) && u != null && !a.hasOwnProperty(b)) switch (b) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Te(e, t, b, null, a, u)
                    }
                for (g in a)
                    if (u = a[g], c = n[g], a.hasOwnProperty(g) && (u != null || c != null)) switch (g) {
                        case "value":
                            D = u;
                            break;
                        case "defaultValue":
                            z = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(r(91));
                            break;
                        default:
                            u !== c && Te(e, t, g, u, a, c)
                    }
                pc(e, D, z);
                return;
            case "option":
                for (var se in n)
                    if (D = n[se], n.hasOwnProperty(se) && D != null && !a.hasOwnProperty(se)) switch (se) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Te(e, t, se, null, a, D)
                    }
                for (w in a)
                    if (D = a[w], z = n[w], a.hasOwnProperty(w) && D !== z && (D != null || z != null)) switch (w) {
                        case "selected":
                            e.selected = D && typeof D != "function" && typeof D != "symbol";
                            break;
                        default:
                            Te(e, t, w, D, a, z)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var ae in n) D = n[ae], n.hasOwnProperty(ae) && D != null && !a.hasOwnProperty(ae) && Te(e, t, ae, null, a, D);
                for (A in a)
                    if (D = a[A], z = n[A], a.hasOwnProperty(A) && D !== z && (D != null || z != null)) switch (A) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (D != null) throw Error(r(137, t));
                            break;
                        default:
                            Te(e, t, A, D, a, z)
                    }
                return;
            default:
                if (mr(t)) {
                    for (var Ce in n) D = n[Ce], n.hasOwnProperty(Ce) && D !== void 0 && !a.hasOwnProperty(Ce) && Wu(e, t, Ce, void 0, a, D);
                    for (q in a) D = a[q], z = n[q], !a.hasOwnProperty(q) || D === z || D === void 0 && z === void 0 || Wu(e, t, q, D, a, z);
                    return
                }
        }
        for (var j in n) D = n[j], n.hasOwnProperty(j) && D != null && !a.hasOwnProperty(j) && Te(e, t, j, null, a, D);
        for (Y in a) D = a[Y], z = n[Y], !a.hasOwnProperty(Y) || D === z || D == null && z == null || Te(e, t, Y, D, a, z)
    }
    var Iu = null,
        eo = null;

    function vs(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function xh(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function vh(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function to(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var no = null;

    function k0() {
        var e = window.event;
        return e && e.type === "popstate" ? e === no ? !1 : (no = e, !0) : (no = null, !1)
    }
    var Sh = typeof setTimeout == "function" ? setTimeout : void 0,
        H0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        wh = typeof Promise == "function" ? Promise : void 0,
        B0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof wh < "u" ? function(e) {
            return wh.resolve(null).then(e).catch(q0)
        } : Sh;

    function q0(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Un(e) {
        return e === "head"
    }

    function Eh(e, t) {
        var n = t,
            a = 0,
            u = 0;
        do {
            var c = n.nextSibling;
            if (e.removeChild(n), c && c.nodeType === 8)
                if (n = c.data, n === "/$") {
                    if (0 < a && 8 > a) {
                        n = a;
                        var g = e.ownerDocument;
                        if (n & 1 && $l(g.documentElement), n & 2 && $l(g.body), n & 4)
                            for (n = g.head, $l(n), g = n.firstChild; g;) {
                                var b = g.nextSibling,
                                    w = g.nodeName;
                                g[rl] || w === "SCRIPT" || w === "STYLE" || w === "LINK" && g.rel.toLowerCase() === "stylesheet" || n.removeChild(g), g = b
                            }
                    }
                    if (u === 0) {
                        e.removeChild(c), ei(t);
                        return
                    }
                    u--
                } else n === "$" || n === "$?" || n === "$!" ? u++ : a = n.charCodeAt(0) - 48;
            else a = 0;
            n = c
        } while (n);
        ei(t)
    }

    function ao(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    ao(n), ur(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (n.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(n)
        }
    }

    function P0(e, t, n, a) {
        for (; e.nodeType === 1;) {
            var u = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (a) {
                if (!e[rl]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (c !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (c = e.getAttribute("src"), (c !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var c = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && e.getAttribute("name") === c) return e
            } else return e;
            if (e = Bt(e.nextSibling), e === null) break
        }
        return null
    }

    function Y0(e, t, n) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Bt(e.nextSibling), e === null)) return null;
        return e
    }

    function lo(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }

    function G0(e, t) {
        var n = e.ownerDocument;
        if (e.data !== "$?" || n.readyState === "complete") t();
        else {
            var a = function() {
                t(), n.removeEventListener("DOMContentLoaded", a)
            };
            n.addEventListener("DOMContentLoaded", a), e._reactRetry = a
        }
    }

    function Bt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }
    var io = null;

    function Nh(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function Rh(e, t, n) {
        switch (t = vs(n), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(r(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(r(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(r(454));
                return e;
            default:
                throw Error(r(451))
        }
    }

    function $l(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        ur(e)
    }
    var zt = new Map,
        jh = new Set;

    function Ss(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var gn = X.d;
    X.d = {
        f: V0,
        r: X0,
        D: $0,
        C: Q0,
        L: K0,
        m: Z0,
        X: F0,
        S: J0,
        M: W0
    };

    function V0() {
        var e = gn.f(),
            t = ds();
        return e || t
    }

    function X0(e) {
        var t = ma(e);
        t !== null && t.tag === 5 && t.type === "form" ? $f(t) : gn.r(e)
    }
    var Ka = typeof document > "u" ? null : document;

    function Oh(e, t, n) {
        var a = Ka;
        if (a && typeof t == "string" && t) {
            var u = Ot(t);
            u = 'link[rel="' + e + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), jh.has(u) || (jh.add(u), e = {
                rel: e,
                crossOrigin: n,
                href: t
            }, a.querySelector(u) === null && (t = a.createElement("link"), Ie(t, "link", e), Qe(t), a.head.appendChild(t)))
        }
    }

    function $0(e) {
        gn.D(e), Oh("dns-prefetch", e, null)
    }

    function Q0(e, t) {
        gn.C(e, t), Oh("preconnect", e, t)
    }

    function K0(e, t, n) {
        gn.L(e, t, n);
        var a = Ka;
        if (a && e && t) {
            var u = 'link[rel="preload"][as="' + Ot(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Ot(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Ot(n.imageSizes) + '"]')) : u += '[href="' + Ot(e) + '"]';
            var c = u;
            switch (t) {
                case "style":
                    c = Za(e);
                    break;
                case "script":
                    c = Ja(e)
            }
            zt.has(c) || (e = x({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n), zt.set(c, e), a.querySelector(u) !== null || t === "style" && a.querySelector(Ql(c)) || t === "script" && a.querySelector(Kl(c)) || (t = a.createElement("link"), Ie(t, "link", e), Qe(t), a.head.appendChild(t)))
        }
    }

    function Z0(e, t) {
        gn.m(e, t);
        var n = Ka;
        if (n && e) {
            var a = t && typeof t.as == "string" ? t.as : "script",
                u = 'link[rel="modulepreload"][as="' + Ot(a) + '"][href="' + Ot(e) + '"]',
                c = u;
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    c = Ja(e)
            }
            if (!zt.has(c) && (e = x({
                    rel: "modulepreload",
                    href: e
                }, t), zt.set(c, e), n.querySelector(u) === null)) {
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (n.querySelector(Kl(c))) return
                }
                a = n.createElement("link"), Ie(a, "link", e), Qe(a), n.head.appendChild(a)
            }
        }
    }

    function J0(e, t, n) {
        gn.S(e, t, n);
        var a = Ka;
        if (a && e) {
            var u = ga(a).hoistableStyles,
                c = Za(e);
            t = t || "default";
            var g = u.get(c);
            if (!g) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (g = a.querySelector(Ql(c))) b.loading = 5;
                else {
                    e = x({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n), (n = zt.get(c)) && so(e, n);
                    var w = g = a.createElement("link");
                    Qe(w), Ie(w, "link", e), w._p = new Promise(function(A, q) {
                        w.onload = A, w.onerror = q
                    }), w.addEventListener("load", function() {
                        b.loading |= 1
                    }), w.addEventListener("error", function() {
                        b.loading |= 2
                    }), b.loading |= 4, ws(g, t, a)
                }
                g = {
                    type: "stylesheet",
                    instance: g,
                    count: 1,
                    state: b
                }, u.set(c, g)
            }
        }
    }

    function F0(e, t) {
        gn.X(e, t);
        var n = Ka;
        if (n && e) {
            var a = ga(n).hoistableScripts,
                u = Ja(e),
                c = a.get(u);
            c || (c = n.querySelector(Kl(u)), c || (e = x({
                src: e,
                async: !0
            }, t), (t = zt.get(u)) && ro(e, t), c = n.createElement("script"), Qe(c), Ie(c, "link", e), n.head.appendChild(c)), c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            }, a.set(u, c))
        }
    }

    function W0(e, t) {
        gn.M(e, t);
        var n = Ka;
        if (n && e) {
            var a = ga(n).hoistableScripts,
                u = Ja(e),
                c = a.get(u);
            c || (c = n.querySelector(Kl(u)), c || (e = x({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = zt.get(u)) && ro(e, t), c = n.createElement("script"), Qe(c), Ie(c, "link", e), n.head.appendChild(c)), c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            }, a.set(u, c))
        }
    }

    function Th(e, t, n, a) {
        var u = (u = ue.current) ? Ss(u) : null;
        if (!u) throw Error(r(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Za(n.href), n = ga(u).hoistableStyles, a = n.get(t), a || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                    e = Za(n.href);
                    var c = ga(u).hoistableStyles,
                        g = c.get(e);
                    if (g || (u = u.ownerDocument || u, g = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, c.set(e, g), (c = u.querySelector(Ql(e))) && !c._p && (g.instance = c, g.state.loading = 5), zt.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, zt.set(e, n), c || I0(u, e, n, g.state))), t && a === null) throw Error(r(528, ""));
                    return g
                }
                if (t && a !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ja(n), n = ga(u).hoistableScripts, a = n.get(t), a || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, e))
        }
    }

    function Za(e) {
        return 'href="' + Ot(e) + '"'
    }

    function Ql(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Ch(e) {
        return x({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function I0(e, t, n, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
            return a.loading |= 1
        }), t.addEventListener("error", function() {
            return a.loading |= 2
        }), Ie(t, "link", n), Qe(t), e.head.appendChild(t))
    }

    function Ja(e) {
        return '[src="' + Ot(e) + '"]'
    }

    function Kl(e) {
        return "script[async]" + e
    }

    function Ah(e, t, n) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + Ot(n.href) + '"]');
                if (a) return t.instance = a, Qe(a), a;
                var u = x({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return a = (e.ownerDocument || e).createElement("style"), Qe(a), Ie(a, "style", u), ws(a, n.precedence, e), t.instance = a;
            case "stylesheet":
                u = Za(n.href);
                var c = e.querySelector(Ql(u));
                if (c) return t.state.loading |= 4, t.instance = c, Qe(c), c;
                a = Ch(n), (u = zt.get(u)) && so(a, u), c = (e.ownerDocument || e).createElement("link"), Qe(c);
                var g = c;
                return g._p = new Promise(function(b, w) {
                    g.onload = b, g.onerror = w
                }), Ie(c, "link", a), t.state.loading |= 4, ws(c, n.precedence, e), t.instance = c;
            case "script":
                return c = Ja(n.src), (u = e.querySelector(Kl(c))) ? (t.instance = u, Qe(u), u) : (a = n, (u = zt.get(c)) && (a = x({}, n), ro(a, u)), e = e.ownerDocument || e, u = e.createElement("script"), Qe(u), Ie(u, "link", a), e.head.appendChild(u), t.instance = u);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, ws(a, n.precedence, e));
        return t.instance
    }

    function ws(e, t, n) {
        for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, c = u, g = 0; g < a.length; g++) {
            var b = a[g];
            if (b.dataset.precedence === t) c = b;
            else if (c !== u) break
        }
        c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild))
    }

    function so(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function ro(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var Es = null;

    function _h(e, t, n) {
        if (Es === null) {
            var a = new Map,
                u = Es = new Map;
            u.set(n, a)
        } else u = Es, a = u.get(n), a || (a = new Map, u.set(n, a));
        if (a.has(e)) return a;
        for (a.set(e, null), n = n.getElementsByTagName(e), u = 0; u < n.length; u++) {
            var c = n[u];
            if (!(c[rl] || c[et] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var g = c.getAttribute(t) || "";
                g = e + g;
                var b = a.get(g);
                b ? b.push(c) : a.set(g, [c])
            }
        }
        return a
    }

    function Dh(e, t, n) {
        e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }

    function ey(e, t, n) {
        if (n === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function Mh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Zl = null;

    function ty() {}

    function ny(e, t, n) {
        if (Zl === null) throw Error(r(475));
        var a = Zl;
        if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var u = Za(n.href),
                    c = e.querySelector(Ql(u));
                if (c) {
                    e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = Ns.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = c, Qe(c);
                    return
                }
                c = e.ownerDocument || e, n = Ch(n), (u = zt.get(u)) && so(n, u), c = c.createElement("link"), Qe(c);
                var g = c;
                g._p = new Promise(function(b, w) {
                    g.onload = b, g.onerror = w
                }), Ie(c, "link", n), t.instance = c
            }
            a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Ns.bind(a), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function ay() {
        if (Zl === null) throw Error(r(475));
        var e = Zl;
        return e.stylesheets && e.count === 0 && uo(e, e.stylesheets), 0 < e.count ? function(t) {
            var n = setTimeout(function() {
                if (e.stylesheets && uo(e, e.stylesheets), e.unsuspend) {
                    var a = e.unsuspend;
                    e.unsuspend = null, a()
                }
            }, 6e4);
            return e.unsuspend = t,
                function() {
                    e.unsuspend = null, clearTimeout(n)
                }
        } : null
    }

    function Ns() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) uo(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var Rs = null;

    function uo(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, Rs = new Map, t.forEach(ly, e), Rs = null, Ns.call(e))
    }

    function ly(e, t) {
        if (!(t.state.loading & 4)) {
            var n = Rs.get(e);
            if (n) var a = n.get(null);
            else {
                n = new Map, Rs.set(e, n);
                for (var u = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < u.length; c++) {
                    var g = u[c];
                    (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (n.set(g.dataset.precedence, g), a = g)
                }
                a && n.set(null, a)
            }
            u = t.instance, g = u.getAttribute("data-precedence"), c = n.get(g) || a, c === a && n.set(null, u), n.set(g, u), this.count++, a = Ns.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), c ? c.parentNode.insertBefore(u, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4
        }
    }
    var Jl = {
        $$typeof: G,
        Provider: null,
        Consumer: null,
        _currentValue: J,
        _currentValue2: J,
        _threadCount: 0
    };

    function iy(e, t, n, a, u, c, g, b) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = lr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lr(0), this.hiddenUpdates = lr(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = c, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = new Map
    }

    function zh(e, t, n, a, u, c, g, b, w, A, q, Y) {
        return e = new iy(e, t, n, g, b, w, A, Y), t = 1, c === !0 && (t |= 24), c = xt(3, null, null, t), e.current = c, c.stateNode = e, t = Gr(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
            element: a,
            isDehydrated: n,
            cache: t
        }, Qr(c), e
    }

    function Lh(e) {
        return e ? (e = Oa, e) : Oa
    }

    function Uh(e, t, n, a, u, c) {
        u = Lh(u), a.context === null ? a.context = u : a.pendingContext = u, a = En(t), a.payload = {
            element: n
        }, c = c === void 0 ? null : c, c !== null && (a.callback = c), n = Nn(e, a, t), n !== null && (Nt(n, e, t), jl(n, e, t))
    }

    function kh(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function oo(e, t) {
        kh(e, t), (e = e.alternate) && kh(e, t)
    }

    function Hh(e) {
        if (e.tag === 13) {
            var t = ja(e, 67108864);
            t !== null && Nt(t, e, 67108864), oo(e, 67108864)
        }
    }
    var js = !0;

    function sy(e, t, n, a) {
        var u = U.T;
        U.T = null;
        var c = X.p;
        try {
            X.p = 2, co(e, t, n, a)
        } finally {
            X.p = c, U.T = u
        }
    }

    function ry(e, t, n, a) {
        var u = U.T;
        U.T = null;
        var c = X.p;
        try {
            X.p = 8, co(e, t, n, a)
        } finally {
            X.p = c, U.T = u
        }
    }

    function co(e, t, n, a) {
        if (js) {
            var u = fo(a);
            if (u === null) Fu(e, t, a, Os, n), qh(e, a);
            else if (oy(u, e, t, n, a)) a.stopPropagation();
            else if (qh(e, a), t & 4 && -1 < uy.indexOf(e)) {
                for (; u !== null;) {
                    var c = ma(u);
                    if (c !== null) switch (c.tag) {
                        case 3:
                            if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
                                var g = Gn(c.pendingLanes);
                                if (g !== 0) {
                                    var b = c;
                                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; g;) {
                                        var w = 1 << 31 - yt(g);
                                        b.entanglements[1] |= w, g &= ~w
                                    }
                                    Kt(c), (Ne & 6) === 0 && (cs = Gt() + 500, Gl(0))
                                }
                            }
                            break;
                        case 13:
                            b = ja(c, 2), b !== null && Nt(b, c, 2), ds(), oo(c, 2)
                    }
                    if (c = fo(a), c === null && Fu(e, t, a, Os, n), c === u) break;
                    u = c
                }
                u !== null && a.stopPropagation()
            } else Fu(e, t, a, null, n)
        }
    }

    function fo(e) {
        return e = pr(e), ho(e)
    }
    var Os = null;

    function ho(e) {
        if (Os = null, e = ha(e), e !== null) {
            var t = f(e);
            if (t === null) e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = d(t), e !== null) return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return Os = e, null
    }

    function Bh(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Qg()) {
                    case Wo:
                        return 2;
                    case Io:
                        return 8;
                    case xi:
                    case Kg:
                        return 32;
                    case ec:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var mo = !1,
        kn = null,
        Hn = null,
        Bn = null,
        Fl = new Map,
        Wl = new Map,
        qn = [],
        uy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function qh(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                kn = null;
                break;
            case "dragenter":
            case "dragleave":
                Hn = null;
                break;
            case "mouseover":
            case "mouseout":
                Bn = null;
                break;
            case "pointerover":
            case "pointerout":
                Fl.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Wl.delete(t.pointerId)
        }
    }

    function Il(e, t, n, a, u, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: a,
            nativeEvent: c,
            targetContainers: [u]
        }, t !== null && (t = ma(t), t !== null && Hh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e)
    }

    function oy(e, t, n, a, u) {
        switch (t) {
            case "focusin":
                return kn = Il(kn, e, t, n, a, u), !0;
            case "dragenter":
                return Hn = Il(Hn, e, t, n, a, u), !0;
            case "mouseover":
                return Bn = Il(Bn, e, t, n, a, u), !0;
            case "pointerover":
                var c = u.pointerId;
                return Fl.set(c, Il(Fl.get(c) || null, e, t, n, a, u)), !0;
            case "gotpointercapture":
                return c = u.pointerId, Wl.set(c, Il(Wl.get(c) || null, e, t, n, a, u)), !0
        }
        return !1
    }

    function Ph(e) {
        var t = ha(e.target);
        if (t !== null) {
            var n = f(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = d(n), t !== null) {
                        e.blockedOn = t, np(e.priority, function() {
                            if (n.tag === 13) {
                                var a = Et();
                                a = ir(a);
                                var u = ja(n, a);
                                u !== null && Nt(u, n, a), oo(n, a)
                            }
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Ts(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = fo(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var a = new n.constructor(n.type, n);
                gr = a, n.target.dispatchEvent(a), gr = null
            } else return t = ma(n), t !== null && Hh(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function Yh(e, t, n) {
        Ts(e) && n.delete(t)
    }

    function cy() {
        mo = !1, kn !== null && Ts(kn) && (kn = null), Hn !== null && Ts(Hn) && (Hn = null), Bn !== null && Ts(Bn) && (Bn = null), Fl.forEach(Yh), Wl.forEach(Yh)
    }

    function Cs(e, t) {
        e.blockedOn === t && (e.blockedOn = null, mo || (mo = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, cy)))
    }
    var As = null;

    function Gh(e) {
        As !== e && (As = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            As === e && (As = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    a = e[t + 1],
                    u = e[t + 2];
                if (typeof a != "function") {
                    if (ho(a || n) === null) continue;
                    break
                }
                var c = ma(n);
                c !== null && (e.splice(t, 3), t -= 3, du(c, {
                    pending: !0,
                    data: u,
                    method: n.method,
                    action: a
                }, a, u))
            }
        }))
    }

    function ei(e) {
        function t(w) {
            return Cs(w, e)
        }
        kn !== null && Cs(kn, e), Hn !== null && Cs(Hn, e), Bn !== null && Cs(Bn, e), Fl.forEach(t), Wl.forEach(t);
        for (var n = 0; n < qn.length; n++) {
            var a = qn[n];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < qn.length && (n = qn[0], n.blockedOn === null);) Ph(n), n.blockedOn === null && qn.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (a = 0; a < n.length; a += 3) {
                var u = n[a],
                    c = n[a + 1],
                    g = u[ot] || null;
                if (typeof c == "function") g || Gh(n);
                else if (g) {
                    var b = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (u = c, g = c[ot] || null) b = g.formAction;
                        else if (ho(u) !== null) continue
                    } else b = g.action;
                    typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), Gh(n)
                }
            }
    }

    function go(e) {
        this._internalRoot = e
    }
    _s.prototype.render = go.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(r(409));
        var n = t.current,
            a = Et();
        Uh(n, a, e, t, null, null)
    }, _s.prototype.unmount = go.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Uh(e.current, 2, null, e, null, null), ds(), t[da] = null
        }
    };

    function _s(e) {
        this._internalRoot = e
    }
    _s.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ic();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < qn.length && t !== 0 && t < qn[n].priority; n++);
            qn.splice(n, 0, e), n === 0 && Ph(e)
        }
    };
    var Vh = l.version;
    if (Vh !== "19.1.0") throw Error(r(527, Vh, "19.1.0"));
    X.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
        return e = y(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e
    };
    var fy = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: U,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ds.isDisabled && Ds.supportsFiber) try {
            ll = Ds.inject(fy), pt = Ds
        } catch {}
    }
    return ni.createRoot = function(e, t) {
        if (!o(e)) throw Error(r(299));
        var n = !1,
            a = "",
            u = sd,
            c = rd,
            g = ud,
            b = null;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)), t = zh(e, 1, !1, null, null, n, a, u, c, g, b, null), e[da] = t.current, Ju(e), new go(t)
    }, ni.hydrateRoot = function(e, t, n) {
        if (!o(e)) throw Error(r(299));
        var a = !1,
            u = "",
            c = sd,
            g = rd,
            b = ud,
            w = null,
            A = null;
        return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (w = n.unstable_transitionCallbacks), n.formState !== void 0 && (A = n.formState)), t = zh(e, 1, !0, t, n ?? null, a, u, c, g, b, w, A), t.context = Lh(null), n = t.current, a = Et(), a = ir(a), u = En(a), u.callback = null, Nn(n, u, a), n = a, t.current.lanes = n, sl(t, n), Kt(t), e[da] = t.current, Ju(e), new _s(t)
    }, ni.version = "19.1.0", ni
}
var tm;

function wy() {
    if (tm) return bo.exports;
    tm = 1;

    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
        } catch (l) {
            console.error(l)
        }
    }
    return i(), bo.exports = Sy(), bo.exports
}
var Ey = wy(),
    ai = {},
    nm;

function Ny() {
    if (nm) return ai;
    nm = 1, Object.defineProperty(ai, "__esModule", {
        value: !0
    }), ai.parse = d, ai.serialize = h;
    const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
        l = /^[\u0021-\u003A\u003C-\u007E]*$/,
        s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        r = /^[\u0020-\u003A\u003D-\u007E]*$/,
        o = Object.prototype.toString,
        f = (() => {
            const N = function() {};
            return N.prototype = Object.create(null), N
        })();

    function d(N, O) {
        const S = new f,
            _ = N.length;
        if (_ < 2) return S;
        const M = (O == null ? void 0 : O.decode) || x;
        let B = 0;
        do {
            const k = N.indexOf("=", B);
            if (k === -1) break;
            const G = N.indexOf(";", B),
                K = G === -1 ? _ : G;
            if (k > K) {
                B = N.lastIndexOf(";", k - 1) + 1;
                continue
            }
            const V = m(N, B, k),
                de = y(N, k, V),
                te = N.slice(V, de);
            if (S[te] === void 0) {
                let ne = m(N, k + 1, K),
                    F = y(N, K, ne);
                const re = M(N.slice(ne, F));
                S[te] = re
            }
            B = K + 1
        } while (B < _);
        return S
    }

    function m(N, O, S) {
        do {
            const _ = N.charCodeAt(O);
            if (_ !== 32 && _ !== 9) return O
        } while (++O < S);
        return S
    }

    function y(N, O, S) {
        for (; O > S;) {
            const _ = N.charCodeAt(--O);
            if (_ !== 32 && _ !== 9) return O + 1
        }
        return S
    }

    function h(N, O, S) {
        const _ = (S == null ? void 0 : S.encode) || encodeURIComponent;
        if (!i.test(N)) throw new TypeError(`argument name is invalid: ${N}`);
        const M = _(O);
        if (!l.test(M)) throw new TypeError(`argument val is invalid: ${O}`);
        let B = N + "=" + M;
        if (!S) return B;
        if (S.maxAge !== void 0) {
            if (!Number.isInteger(S.maxAge)) throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);
            B += "; Max-Age=" + S.maxAge
        }
        if (S.domain) {
            if (!s.test(S.domain)) throw new TypeError(`option domain is invalid: ${S.domain}`);
            B += "; Domain=" + S.domain
        }
        if (S.path) {
            if (!r.test(S.path)) throw new TypeError(`option path is invalid: ${S.path}`);
            B += "; Path=" + S.path
        }
        if (S.expires) {
            if (!v(S.expires) || !Number.isFinite(S.expires.valueOf())) throw new TypeError(`option expires is invalid: ${S.expires}`);
            B += "; Expires=" + S.expires.toUTCString()
        }
        if (S.httpOnly && (B += "; HttpOnly"), S.secure && (B += "; Secure"), S.partitioned && (B += "; Partitioned"), S.priority) switch (typeof S.priority == "string" ? S.priority.toLowerCase() : void 0) {
            case "low":
                B += "; Priority=Low";
                break;
            case "medium":
                B += "; Priority=Medium";
                break;
            case "high":
                B += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${S.priority}`)
        }
        if (S.sameSite) switch (typeof S.sameSite == "string" ? S.sameSite.toLowerCase() : S.sameSite) {
            case !0:
            case "strict":
                B += "; SameSite=Strict";
                break;
            case "lax":
                B += "; SameSite=Lax";
                break;
            case "none":
                B += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)
        }
        return B
    }

    function x(N) {
        if (N.indexOf("%") === -1) return N;
        try {
            return decodeURIComponent(N)
        } catch {
            return N
        }
    }

    function v(N) {
        return o.call(N) === "[object Date]"
    }
    return ai
}
Ny();
var am = "popstate";

function Ry(i = {}) {
    function l(r, o) {
        let {
            pathname: f,
            search: d,
            hash: m
        } = r.location;
        return Ao("", {
            pathname: f,
            search: d,
            hash: m
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function s(r, o) {
        return typeof o == "string" ? o : oi(o)
    }
    return Oy(l, s, null, i)
}

function ke(i, l) {
    if (i === !1 || i === null || typeof i > "u") throw new Error(l)
}

function Ft(i, l) {
    if (!i) {
        typeof console < "u" && console.warn(l);
        try {
            throw new Error(l)
        } catch {}
    }
}

function jy() {
    return Math.random().toString(36).substring(2, 10)
}

function lm(i, l) {
    return {
        usr: i.state,
        key: i.key,
        idx: l
    }
}

function Ao(i, l, s = null, r) {
    return {
        pathname: typeof i == "string" ? i : i.pathname,
        search: "",
        hash: "",
        ...typeof l == "string" ? el(l) : l,
        state: s,
        key: l && l.key || r || jy()
    }
}

function oi({
    pathname: i = "/",
    search: l = "",
    hash: s = ""
}) {
    return l && l !== "?" && (i += l.charAt(0) === "?" ? l : "?" + l), s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s), i
}

function el(i) {
    let l = {};
    if (i) {
        let s = i.indexOf("#");
        s >= 0 && (l.hash = i.substring(s), i = i.substring(0, s));
        let r = i.indexOf("?");
        r >= 0 && (l.search = i.substring(r), i = i.substring(0, r)), i && (l.pathname = i)
    }
    return l
}

function Oy(i, l, s, r = {}) {
    let {
        window: o = document.defaultView,
        v5Compat: f = !1
    } = r, d = o.history, m = "POP", y = null, h = x();
    h == null && (h = 0, d.replaceState({
        ...d.state,
        idx: h
    }, ""));

    function x() {
        return (d.state || {
            idx: null
        }).idx
    }

    function v() {
        m = "POP";
        let M = x(),
            B = M == null ? null : M - h;
        h = M, y && y({
            action: m,
            location: _.location,
            delta: B
        })
    }

    function N(M, B) {
        m = "PUSH";
        let k = Ao(_.location, M, B);
        h = x() + 1;
        let G = lm(k, h),
            K = _.createHref(k);
        try {
            d.pushState(G, "", K)
        } catch (V) {
            if (V instanceof DOMException && V.name === "DataCloneError") throw V;
            o.location.assign(K)
        }
        f && y && y({
            action: m,
            location: _.location,
            delta: 1
        })
    }

    function O(M, B) {
        m = "REPLACE";
        let k = Ao(_.location, M, B);
        h = x();
        let G = lm(k, h),
            K = _.createHref(k);
        d.replaceState(G, "", K), f && y && y({
            action: m,
            location: _.location,
            delta: 0
        })
    }

    function S(M) {
        return Ty(M)
    }
    let _ = {
        get action() {
            return m
        },
        get location() {
            return i(o, d)
        },
        listen(M) {
            if (y) throw new Error("A history only accepts one active listener");
            return o.addEventListener(am, v), y = M, () => {
                o.removeEventListener(am, v), y = null
            }
        },
        createHref(M) {
            return l(o, M)
        },
        createURL: S,
        encodeLocation(M) {
            let B = S(M);
            return {
                pathname: B.pathname,
                search: B.search,
                hash: B.hash
            }
        },
        push: N,
        replace: O,
        go(M) {
            return d.go(M)
        }
    };
    return _
}

function Ty(i, l = !1) {
    let s = "http://localhost";
    typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), ke(s, "No window.location.(origin|href) available to create URL");
    let r = typeof i == "string" ? i : oi(i);
    return r = r.replace(/ $/, "%20"), !l && r.startsWith("//") && (r = s + r), new URL(r, s)
}

function Qm(i, l, s = "/") {
    return Cy(i, l, s, !1)
}

function Cy(i, l, s, r) {
    let o = typeof l == "string" ? el(l) : l,
        f = yn(o.pathname || "/", s);
    if (f == null) return null;
    let d = Km(i);
    Ay(d);
    let m = null;
    for (let y = 0; m == null && y < d.length; ++y) {
        let h = Py(f);
        m = By(d[y], h, r)
    }
    return m
}

function Km(i, l = [], s = [], r = "") {
    let o = (f, d, m) => {
        let y = {
            relativePath: m === void 0 ? f.path || "" : m,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: d,
            route: f
        };
        y.relativePath.startsWith("/") && (ke(y.relativePath.startsWith(r), `Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), y.relativePath = y.relativePath.slice(r.length));
        let h = pn([r, y.relativePath]),
            x = s.concat(y);
        f.children && f.children.length > 0 && (ke(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${h}".`), Km(f.children, l, x, h)), !(f.path == null && !f.index) && l.push({
            path: h,
            score: ky(h, f.index),
            routesMeta: x
        })
    };
    return i.forEach((f, d) => {
        var m;
        if (f.path === "" || !((m = f.path) != null && m.includes("?"))) o(f, d);
        else
            for (let y of Zm(f.path)) o(f, d, y)
    }), l
}

function Zm(i) {
    let l = i.split("/");
    if (l.length === 0) return [];
    let [s, ...r] = l, o = s.endsWith("?"), f = s.replace(/\?$/, "");
    if (r.length === 0) return o ? [f, ""] : [f];
    let d = Zm(r.join("/")),
        m = [];
    return m.push(...d.map(y => y === "" ? f : [f, y].join("/"))), o && m.push(...d), m.map(y => i.startsWith("/") && y === "" ? "/" : y)
}

function Ay(i) {
    i.sort((l, s) => l.score !== s.score ? s.score - l.score : Hy(l.routesMeta.map(r => r.childrenIndex), s.routesMeta.map(r => r.childrenIndex)))
}
var _y = /^:[\w-]+$/,
    Dy = 3,
    My = 2,
    zy = 1,
    Ly = 10,
    Uy = -2,
    im = i => i === "*";

function ky(i, l) {
    let s = i.split("/"),
        r = s.length;
    return s.some(im) && (r += Uy), l && (r += My), s.filter(o => !im(o)).reduce((o, f) => o + (_y.test(f) ? Dy : f === "" ? zy : Ly), r)
}

function Hy(i, l) {
    return i.length === l.length && i.slice(0, -1).every((r, o) => r === l[o]) ? i[i.length - 1] - l[l.length - 1] : 0
}

function By(i, l, s = !1) {
    let {
        routesMeta: r
    } = i, o = {}, f = "/", d = [];
    for (let m = 0; m < r.length; ++m) {
        let y = r[m],
            h = m === r.length - 1,
            x = f === "/" ? l : l.slice(f.length) || "/",
            v = qs({
                path: y.relativePath,
                caseSensitive: y.caseSensitive,
                end: h
            }, x),
            N = y.route;
        if (!v && h && s && !r[r.length - 1].route.index && (v = qs({
                path: y.relativePath,
                caseSensitive: y.caseSensitive,
                end: !1
            }, x)), !v) return null;
        Object.assign(o, v.params), d.push({
            params: o,
            pathname: pn([f, v.pathname]),
            pathnameBase: Xy(pn([f, v.pathnameBase])),
            route: N
        }), v.pathnameBase !== "/" && (f = pn([f, v.pathnameBase]))
    }
    return d
}

function qs(i, l) {
    typeof i == "string" && (i = {
        path: i,
        caseSensitive: !1,
        end: !0
    });
    let [s, r] = qy(i.path, i.caseSensitive, i.end), o = l.match(s);
    if (!o) return null;
    let f = o[0],
        d = f.replace(/(.)\/+$/, "$1"),
        m = o.slice(1);
    return {
        params: r.reduce((h, {
            paramName: x,
            isOptional: v
        }, N) => {
            if (x === "*") {
                let S = m[N] || "";
                d = f.slice(0, f.length - S.length).replace(/(.)\/+$/, "$1")
            }
            const O = m[N];
            return v && !O ? h[x] = void 0 : h[x] = (O || "").replace(/%2F/g, "/"), h
        }, {}),
        pathname: f,
        pathnameBase: d,
        pattern: i
    }
}

function qy(i, l = !1, s = !0) {
    Ft(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);
    let r = [],
        o = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, m, y) => (r.push({
            paramName: m,
            isOptional: y != null
        }), y ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return i.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : i !== "" && i !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, l ? void 0 : "i"), r]
}

function Py(i) {
    try {
        return i.split("/").map(l => decodeURIComponent(l).replace(/\//g, "%2F")).join("/")
    } catch (l) {
        return Ft(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`), i
    }
}

function yn(i, l) {
    if (l === "/") return i;
    if (!i.toLowerCase().startsWith(l.toLowerCase())) return null;
    let s = l.endsWith("/") ? l.length - 1 : l.length,
        r = i.charAt(s);
    return r && r !== "/" ? null : i.slice(s) || "/"
}

function Yy(i, l = "/") {
    let {
        pathname: s,
        search: r = "",
        hash: o = ""
    } = typeof i == "string" ? el(i) : i;
    return {
        pathname: s ? s.startsWith("/") ? s : Gy(s, l) : l,
        search: $y(r),
        hash: Qy(o)
    }
}

function Gy(i, l) {
    let s = l.replace(/\/+$/, "").split("/");
    return i.split("/").forEach(o => {
        o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o)
    }), s.length > 1 ? s.join("/") : "/"
}

function wo(i, l, s, r) {
    return `Cannot include a '${i}' character in a manually specified \`to.${l}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function Vy(i) {
    return i.filter((l, s) => s === 0 || l.route.path && l.route.path.length > 0)
}

function Jm(i) {
    let l = Vy(i);
    return l.map((s, r) => r === l.length - 1 ? s.pathname : s.pathnameBase)
}

function Fm(i, l, s, r = !1) {
    let o;
    typeof i == "string" ? o = el(i) : (o = {
        ...i
    }, ke(!o.pathname || !o.pathname.includes("?"), wo("?", "pathname", "search", o)), ke(!o.pathname || !o.pathname.includes("#"), wo("#", "pathname", "hash", o)), ke(!o.search || !o.search.includes("#"), wo("#", "search", "hash", o)));
    let f = i === "" || o.pathname === "",
        d = f ? "/" : o.pathname,
        m;
    if (d == null) m = s;
    else {
        let v = l.length - 1;
        if (!r && d.startsWith("..")) {
            let N = d.split("/");
            for (; N[0] === "..";) N.shift(), v -= 1;
            o.pathname = N.join("/")
        }
        m = v >= 0 ? l[v] : "/"
    }
    let y = Yy(o, m),
        h = d && d !== "/" && d.endsWith("/"),
        x = (f || d === ".") && s.endsWith("/");
    return !y.pathname.endsWith("/") && (h || x) && (y.pathname += "/"), y
}
var pn = i => i.join("/").replace(/\/\/+/g, "/"),
    Xy = i => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
    $y = i => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i,
    Qy = i => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;

function Ky(i) {
    return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i
}
var Wm = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Wm);
var Zy = ["GET", ...Wm];
new Set(Zy);
var tl = T.createContext(null);
tl.displayName = "DataRouter";
var $s = T.createContext(null);
$s.displayName = "DataRouterState";
var Im = T.createContext({
    isTransitioning: !1
});
Im.displayName = "ViewTransition";
var Jy = T.createContext(new Map);
Jy.displayName = "Fetchers";
var Fy = T.createContext(null);
Fy.displayName = "Await";
var Wt = T.createContext(null);
Wt.displayName = "Navigation";
var hi = T.createContext(null);
hi.displayName = "Location";
var It = T.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
It.displayName = "Route";
var Go = T.createContext(null);
Go.displayName = "RouteError";

function Wy(i, {
    relative: l
} = {}) {
    ke(mi(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: s,
        navigator: r
    } = T.useContext(Wt), {
        hash: o,
        pathname: f,
        search: d
    } = gi(i, {
        relative: l
    }), m = f;
    return s !== "/" && (m = f === "/" ? s : pn([s, f])), r.createHref({
        pathname: m,
        search: d,
        hash: o
    })
}

function mi() {
    return T.useContext(hi) != null
}

function Yn() {
    return ke(mi(), "useLocation() may be used only in the context of a <Router> component."), T.useContext(hi).location
}
var eg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function tg(i) {
    T.useContext(Wt).static || T.useLayoutEffect(i)
}

function Vo() {
    let {
        isDataRoute: i
    } = T.useContext(It);
    return i ? db() : Iy()
}

function Iy() {
    ke(mi(), "useNavigate() may be used only in the context of a <Router> component.");
    let i = T.useContext(tl),
        {
            basename: l,
            navigator: s
        } = T.useContext(Wt),
        {
            matches: r
        } = T.useContext(It),
        {
            pathname: o
        } = Yn(),
        f = JSON.stringify(Jm(r)),
        d = T.useRef(!1);
    return tg(() => {
        d.current = !0
    }), T.useCallback((y, h = {}) => {
        if (Ft(d.current, eg), !d.current) return;
        if (typeof y == "number") {
            s.go(y);
            return
        }
        let x = Fm(y, JSON.parse(f), o, h.relative === "path");
        i == null && l !== "/" && (x.pathname = x.pathname === "/" ? l : pn([l, x.pathname])), (h.replace ? s.replace : s.push)(x, h.state, h)
    }, [l, s, f, o, i])
}
T.createContext(null);

function eb() {
    let {
        matches: i
    } = T.useContext(It), l = i[i.length - 1];
    return l ? l.params : {}
}

function gi(i, {
    relative: l
} = {}) {
    let {
        matches: s
    } = T.useContext(It), {
        pathname: r
    } = Yn(), o = JSON.stringify(Jm(s));
    return T.useMemo(() => Fm(i, JSON.parse(o), r, l === "path"), [i, o, r, l])
}

function tb(i, l) {
    return ng(i, l)
}

function ng(i, l, s, r) {
    var B;
    ke(mi(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: o
    } = T.useContext(Wt), {
        matches: f
    } = T.useContext(It), d = f[f.length - 1], m = d ? d.params : {}, y = d ? d.pathname : "/", h = d ? d.pathnameBase : "/", x = d && d.route;
    {
        let k = x && x.path || "";
        ag(y, !x || k.endsWith("*") || k.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)
    }
    let v = Yn(),
        N;
    if (l) {
        let k = typeof l == "string" ? el(l) : l;
        ke(h === "/" || ((B = k.pathname) == null ? void 0 : B.startsWith(h)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${k.pathname}" was given in the \`location\` prop.`), N = k
    } else N = v;
    let O = N.pathname || "/",
        S = O;
    if (h !== "/") {
        let k = h.replace(/^\//, "").split("/");
        S = "/" + O.replace(/^\//, "").split("/").slice(k.length).join("/")
    }
    let _ = Qm(i, {
        pathname: S
    });
    Ft(x || _ != null, `No routes matched location "${N.pathname}${N.search}${N.hash}" `), Ft(_ == null || _[_.length - 1].route.element !== void 0 || _[_.length - 1].route.Component !== void 0 || _[_.length - 1].route.lazy !== void 0, `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let M = sb(_ && _.map(k => Object.assign({}, k, {
        params: Object.assign({}, m, k.params),
        pathname: pn([h, o.encodeLocation ? o.encodeLocation(k.pathname).pathname : k.pathname]),
        pathnameBase: k.pathnameBase === "/" ? h : pn([h, o.encodeLocation ? o.encodeLocation(k.pathnameBase).pathname : k.pathnameBase])
    })), f, s, r);
    return l && M ? T.createElement(hi.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...N
            },
            navigationType: "POP"
        }
    }, M) : M
}

function nb() {
    let i = fb(),
        l = Ky(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i),
        s = i instanceof Error ? i.stack : null,
        r = "rgba(200,200,200, 0.5)",
        o = {
            padding: "0.5rem",
            backgroundColor: r
        },
        f = {
            padding: "2px 4px",
            backgroundColor: r
        },
        d = null;
    return console.error("Error handled by React Router default ErrorBoundary:", i), d = T.createElement(T.Fragment, null, T.createElement("p", null, "💿 Hey developer 👋"), T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", T.createElement("code", {
        style: f
    }, "ErrorBoundary"), " or", " ", T.createElement("code", {
        style: f
    }, "errorElement"), " prop on your route.")), T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, l), s ? T.createElement("pre", {
        style: o
    }, s) : null, d)
}
var ab = T.createElement(nb, null),
    lb = class extends T.Component {
        constructor(i) {
            super(i), this.state = {
                location: i.location,
                revalidation: i.revalidation,
                error: i.error
            }
        }
        static getDerivedStateFromError(i) {
            return {
                error: i
            }
        }
        static getDerivedStateFromProps(i, l) {
            return l.location !== i.location || l.revalidation !== "idle" && i.revalidation === "idle" ? {
                error: i.error,
                location: i.location,
                revalidation: i.revalidation
            } : {
                error: i.error !== void 0 ? i.error : l.error,
                location: l.location,
                revalidation: i.revalidation || l.revalidation
            }
        }
        componentDidCatch(i, l) {
            console.error("React Router caught the following error during render", i, l)
        }
        render() {
            return this.state.error !== void 0 ? T.createElement(It.Provider, {
                value: this.props.routeContext
            }, T.createElement(Go.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function ib({
    routeContext: i,
    match: l,
    children: s
}) {
    let r = T.useContext(tl);
    return r && r.static && r.staticContext && (l.route.errorElement || l.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = l.route.id), T.createElement(It.Provider, {
        value: i
    }, s)
}

function sb(i, l = [], s = null, r = null) {
    if (i == null) {
        if (!s) return null;
        if (s.errors) i = s.matches;
        else if (l.length === 0 && !s.initialized && s.matches.length > 0) i = s.matches;
        else return null
    }
    let o = i,
        f = s == null ? void 0 : s.errors;
    if (f != null) {
        let y = o.findIndex(h => h.route.id && (f == null ? void 0 : f[h.route.id]) !== void 0);
        ke(y >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), o = o.slice(0, Math.min(o.length, y + 1))
    }
    let d = !1,
        m = -1;
    if (s)
        for (let y = 0; y < o.length; y++) {
            let h = o[y];
            if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (m = y), h.route.id) {
                let {
                    loaderData: x,
                    errors: v
                } = s, N = h.route.loader && !x.hasOwnProperty(h.route.id) && (!v || v[h.route.id] === void 0);
                if (h.route.lazy || N) {
                    d = !0, m >= 0 ? o = o.slice(0, m + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((y, h, x) => {
        let v, N = !1,
            O = null,
            S = null;
        s && (v = f && h.route.id ? f[h.route.id] : void 0, O = h.route.errorElement || ab, d && (m < 0 && x === 0 ? (ag("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), N = !0, S = null) : m === x && (N = !0, S = h.route.hydrateFallbackElement || null)));
        let _ = l.concat(o.slice(0, x + 1)),
            M = () => {
                let B;
                return v ? B = O : N ? B = S : h.route.Component ? B = T.createElement(h.route.Component, null) : h.route.element ? B = h.route.element : B = y, T.createElement(ib, {
                    match: h,
                    routeContext: {
                        outlet: y,
                        matches: _,
                        isDataRoute: s != null
                    },
                    children: B
                })
            };
        return s && (h.route.ErrorBoundary || h.route.errorElement || x === 0) ? T.createElement(lb, {
            location: s.location,
            revalidation: s.revalidation,
            component: O,
            error: v,
            children: M(),
            routeContext: {
                outlet: null,
                matches: _,
                isDataRoute: !0
            }
        }) : M()
    }, null)
}

function Xo(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function rb(i) {
    let l = T.useContext(tl);
    return ke(l, Xo(i)), l
}

function ub(i) {
    let l = T.useContext($s);
    return ke(l, Xo(i)), l
}

function ob(i) {
    let l = T.useContext(It);
    return ke(l, Xo(i)), l
}

function $o(i) {
    let l = ob(i),
        s = l.matches[l.matches.length - 1];
    return ke(s.route.id, `${i} can only be used on routes that contain a unique "id"`), s.route.id
}

function cb() {
    return $o("useRouteId")
}

function fb() {
    var r;
    let i = T.useContext(Go),
        l = ub("useRouteError"),
        s = $o("useRouteError");
    return i !== void 0 ? i : (r = l.errors) == null ? void 0 : r[s]
}

function db() {
    let {
        router: i
    } = rb("useNavigate"), l = $o("useNavigate"), s = T.useRef(!1);
    return tg(() => {
        s.current = !0
    }), T.useCallback(async (o, f = {}) => {
        Ft(s.current, eg), s.current && (typeof o == "number" ? i.navigate(o) : await i.navigate(o, {
            fromRouteId: l,
            ...f
        }))
    }, [i, l])
}
var sm = {};

function ag(i, l, s) {
    !l && !sm[i] && (sm[i] = !0, Ft(!1, s))
}
T.memo(hb);

function hb({
    routes: i,
    future: l,
    state: s
}) {
    return ng(i, void 0, s, l)
}

function qt(i) {
    ke(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function mb({
    basename: i = "/",
    children: l = null,
    location: s,
    navigationType: r = "POP",
    navigator: o,
    static: f = !1
}) {
    ke(!mi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let d = i.replace(/^\/*/, "/"),
        m = T.useMemo(() => ({
            basename: d,
            navigator: o,
            static: f,
            future: {}
        }), [d, o, f]);
    typeof s == "string" && (s = el(s));
    let {
        pathname: y = "/",
        search: h = "",
        hash: x = "",
        state: v = null,
        key: N = "default"
    } = s, O = T.useMemo(() => {
        let S = yn(y, d);
        return S == null ? null : {
            location: {
                pathname: S,
                search: h,
                hash: x,
                state: v,
                key: N
            },
            navigationType: r
        }
    }, [d, y, h, x, v, N, r]);
    return Ft(O != null, `<Router basename="${d}"> is not able to match the URL "${y}${h}${x}" because it does not start with the basename, so the <Router> won't render anything.`), O == null ? null : T.createElement(Wt.Provider, {
        value: m
    }, T.createElement(hi.Provider, {
        children: l,
        value: O
    }))
}

function gb({
    children: i,
    location: l
}) {
    return tb(_o(i), l)
}

function _o(i, l = []) {
    let s = [];
    return T.Children.forEach(i, (r, o) => {
        if (!T.isValidElement(r)) return;
        let f = [...l, o];
        if (r.type === T.Fragment) {
            s.push.apply(s, _o(r.props.children, f));
            return
        }
        ke(r.type === qt, `[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), ke(!r.props.index || !r.props.children, "An index route cannot have child routes.");
        let d = {
            id: r.props.id || f.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            hydrateFallbackElement: r.props.hydrateFallbackElement,
            HydrateFallback: r.props.HydrateFallback,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (d.children = _o(r.props.children, f)), s.push(d)
    }), s
}
var Ls = "get",
    Us = "application/x-www-form-urlencoded";

function Qs(i) {
    return i != null && typeof i.tagName == "string"
}

function pb(i) {
    return Qs(i) && i.tagName.toLowerCase() === "button"
}

function yb(i) {
    return Qs(i) && i.tagName.toLowerCase() === "form"
}

function bb(i) {
    return Qs(i) && i.tagName.toLowerCase() === "input"
}

function xb(i) {
    return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}

function vb(i, l) {
    return i.button === 0 && (!l || l === "_self") && !xb(i)
}
var Ms = null;

function Sb() {
    if (Ms === null) try {
        new FormData(document.createElement("form"), 0), Ms = !1
    } catch {
        Ms = !0
    }
    return Ms
}
var wb = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Eo(i) {
    return i != null && !wb.has(i) ? (Ft(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Us}"`), null) : i
}

function Eb(i, l) {
    let s, r, o, f, d;
    if (yb(i)) {
        let m = i.getAttribute("action");
        r = m ? yn(m, l) : null, s = i.getAttribute("method") || Ls, o = Eo(i.getAttribute("enctype")) || Us, f = new FormData(i)
    } else if (pb(i) || bb(i) && (i.type === "submit" || i.type === "image")) {
        let m = i.form;
        if (m == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let y = i.getAttribute("formaction") || m.getAttribute("action");
        if (r = y ? yn(y, l) : null, s = i.getAttribute("formmethod") || m.getAttribute("method") || Ls, o = Eo(i.getAttribute("formenctype")) || Eo(m.getAttribute("enctype")) || Us, f = new FormData(m, i), !Sb()) {
            let {
                name: h,
                type: x,
                value: v
            } = i;
            if (x === "image") {
                let N = h ? `${h}.` : "";
                f.append(`${N}x`, "0"), f.append(`${N}y`, "0")
            } else h && f.append(h, v)
        }
    } else {
        if (Qs(i)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = Ls, r = null, o = Us, d = i
    }
    return f && o === "text/plain" && (d = f, f = void 0), {
        action: r,
        method: s.toLowerCase(),
        encType: o,
        formData: f,
        body: d
    }
}

function Qo(i, l) {
    if (i === !1 || i === null || typeof i > "u") throw new Error(l)
}
async function Nb(i, l) {
    if (i.id in l) return l[i.id];
    try {
        let s = await import(i.module);
        return l[i.id] = s, s
    } catch (s) {
        return console.error(`Error loading route module \`${i.module}\`, reloading page...`), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function Rb(i) {
    return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string"
}
async function jb(i, l, s) {
    let r = await Promise.all(i.map(async o => {
        let f = l.routes[o.route.id];
        if (f) {
            let d = await Nb(f, s);
            return d.links ? d.links() : []
        }
        return []
    }));
    return Ab(r.flat(1).filter(Rb).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? {
        ...o,
        rel: "prefetch",
        as: "style"
    } : {
        ...o,
        rel: "prefetch"
    }))
}

function rm(i, l, s, r, o, f) {
    let d = (y, h) => s[h] ? y.route.id !== s[h].route.id : !0,
        m = (y, h) => {
            var x;
            return s[h].pathname !== y.pathname || ((x = s[h].route.path) == null ? void 0 : x.endsWith("*")) && s[h].params["*"] !== y.params["*"]
        };
    return f === "assets" ? l.filter((y, h) => d(y, h) || m(y, h)) : f === "data" ? l.filter((y, h) => {
        var v;
        let x = r.routes[y.route.id];
        if (!x || !x.hasLoader) return !1;
        if (d(y, h) || m(y, h)) return !0;
        if (y.route.shouldRevalidate) {
            let N = y.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                currentParams: ((v = s[0]) == null ? void 0 : v.params) || {},
                nextUrl: new URL(i, window.origin),
                nextParams: y.params,
                defaultShouldRevalidate: !0
            });
            if (typeof N == "boolean") return N
        }
        return !0
    }) : []
}

function Ob(i, l, {
    includeHydrateFallback: s
} = {}) {
    return Tb(i.map(r => {
        let o = l.routes[r.route.id];
        if (!o) return [];
        let f = [o.module];
        return o.clientActionModule && (f = f.concat(o.clientActionModule)), o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)), s && o.hydrateFallbackModule && (f = f.concat(o.hydrateFallbackModule)), o.imports && (f = f.concat(o.imports)), f
    }).flat(1))
}

function Tb(i) {
    return [...new Set(i)]
}

function Cb(i) {
    let l = {},
        s = Object.keys(i).sort();
    for (let r of s) l[r] = i[r];
    return l
}

function Ab(i, l) {
    let s = new Set;
    return new Set(l), i.reduce((r, o) => {
        let f = JSON.stringify(Cb(o));
        return s.has(f) || (s.add(f), r.push({
            key: f,
            link: o
        })), r
    }, [])
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var _b = new Set([100, 101, 204, 205]);

function Db(i, l) {
    let s = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
    return s.pathname === "/" ? s.pathname = "_root.data" : l && yn(s.pathname, l) === "/" ? s.pathname = `${l.replace(/\/$/,"")}/_root.data` : s.pathname = `${s.pathname.replace(/\/$/,"")}.data`, s
}

function lg() {
    let i = T.useContext(tl);
    return Qo(i, "You must render this element inside a <DataRouterContext.Provider> element"), i
}

function Mb() {
    let i = T.useContext($s);
    return Qo(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i
}
var Ko = T.createContext(void 0);
Ko.displayName = "FrameworkContext";

function ig() {
    let i = T.useContext(Ko);
    return Qo(i, "You must render this element inside a <HydratedRouter> element"), i
}

function zb(i, l) {
    let s = T.useContext(Ko),
        [r, o] = T.useState(!1),
        [f, d] = T.useState(!1),
        {
            onFocus: m,
            onBlur: y,
            onMouseEnter: h,
            onMouseLeave: x,
            onTouchStart: v
        } = l,
        N = T.useRef(null);
    T.useEffect(() => {
        if (i === "render" && d(!0), i === "viewport") {
            let _ = B => {
                    B.forEach(k => {
                        d(k.isIntersecting)
                    })
                },
                M = new IntersectionObserver(_, {
                    threshold: .5
                });
            return N.current && M.observe(N.current), () => {
                M.disconnect()
            }
        }
    }, [i]), T.useEffect(() => {
        if (r) {
            let _ = setTimeout(() => {
                d(!0)
            }, 100);
            return () => {
                clearTimeout(_)
            }
        }
    }, [r]);
    let O = () => {
            o(!0)
        },
        S = () => {
            o(!1), d(!1)
        };
    return s ? i !== "intent" ? [f, N, {}] : [f, N, {
        onFocus: li(m, O),
        onBlur: li(y, S),
        onMouseEnter: li(h, O),
        onMouseLeave: li(x, S),
        onTouchStart: li(v, O)
    }] : [!1, N, {}]
}

function li(i, l) {
    return s => {
        i && i(s), s.defaultPrevented || l(s)
    }
}

function Lb({
    page: i,
    ...l
}) {
    let {
        router: s
    } = lg(), r = T.useMemo(() => Qm(s.routes, i, s.basename), [s.routes, i, s.basename]);
    return r ? T.createElement(kb, {
        page: i,
        matches: r,
        ...l
    }) : null
}

function Ub(i) {
    let {
        manifest: l,
        routeModules: s
    } = ig(), [r, o] = T.useState([]);
    return T.useEffect(() => {
        let f = !1;
        return jb(i, l, s).then(d => {
            f || o(d)
        }), () => {
            f = !0
        }
    }, [i, l, s]), r
}

function kb({
    page: i,
    matches: l,
    ...s
}) {
    let r = Yn(),
        {
            manifest: o,
            routeModules: f
        } = ig(),
        {
            basename: d
        } = lg(),
        {
            loaderData: m,
            matches: y
        } = Mb(),
        h = T.useMemo(() => rm(i, l, y, o, r, "data"), [i, l, y, o, r]),
        x = T.useMemo(() => rm(i, l, y, o, r, "assets"), [i, l, y, o, r]),
        v = T.useMemo(() => {
            if (i === r.pathname + r.search + r.hash) return [];
            let S = new Set,
                _ = !1;
            if (l.forEach(B => {
                    var G;
                    let k = o.routes[B.route.id];
                    !k || !k.hasLoader || (!h.some(K => K.route.id === B.route.id) && B.route.id in m && ((G = f[B.route.id]) != null && G.shouldRevalidate) || k.hasClientLoader ? _ = !0 : S.add(B.route.id))
                }), S.size === 0) return [];
            let M = Db(i, d);
            return _ && S.size > 0 && M.searchParams.set("_routes", l.filter(B => S.has(B.route.id)).map(B => B.route.id).join(",")), [M.pathname + M.search]
        }, [d, m, r, o, h, l, i, f]),
        N = T.useMemo(() => Ob(x, o), [x, o]),
        O = Ub(x);
    return T.createElement(T.Fragment, null, v.map(S => T.createElement("link", {
        key: S,
        rel: "prefetch",
        as: "fetch",
        href: S,
        ...s
    })), N.map(S => T.createElement("link", {
        key: S,
        rel: "modulepreload",
        href: S,
        ...s
    })), O.map(({
        key: S,
        link: _
    }) => T.createElement("link", {
        key: S,
        ..._
    })))
}

function Hb(...i) {
    return l => {
        i.forEach(s => {
            typeof s == "function" ? s(l) : s != null && (s.current = l)
        })
    }
}
var sg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    sg && (window.__reactRouterVersion = "7.6.1")
} catch {}

function Bb({
    basename: i,
    children: l,
    window: s
}) {
    let r = T.useRef();
    r.current == null && (r.current = Ry({
        window: s,
        v5Compat: !0
    }));
    let o = r.current,
        [f, d] = T.useState({
            action: o.action,
            location: o.location
        }),
        m = T.useCallback(y => {
            T.startTransition(() => d(y))
        }, [d]);
    return T.useLayoutEffect(() => o.listen(m), [o, m]), T.createElement(mb, {
        basename: i,
        children: l,
        location: f.location,
        navigationType: f.action,
        navigator: o
    })
}
var rg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Rt = T.forwardRef(function({
        onClick: l,
        discover: s = "render",
        prefetch: r = "none",
        relative: o,
        reloadDocument: f,
        replace: d,
        state: m,
        target: y,
        to: h,
        preventScrollReset: x,
        viewTransition: v,
        ...N
    }, O) {
        let {
            basename: S
        } = T.useContext(Wt), _ = typeof h == "string" && rg.test(h), M, B = !1;
        if (typeof h == "string" && _ && (M = h, sg)) try {
            let F = new URL(window.location.href),
                re = h.startsWith("//") ? new URL(F.protocol + h) : new URL(h),
                Ee = yn(re.pathname, S);
            re.origin === F.origin && Ee != null ? h = Ee + re.search + re.hash : B = !0
        } catch {
            Ft(!1, `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let k = Wy(h, {
                relative: o
            }),
            [G, K, V] = zb(r, N),
            de = Gb(h, {
                replace: d,
                state: m,
                target: y,
                preventScrollReset: x,
                relative: o,
                viewTransition: v
            });

        function te(F) {
            l && l(F), F.defaultPrevented || de(F)
        }
        let ne = T.createElement("a", {
            ...N,
            ...V,
            href: M || k,
            onClick: B || f ? l : te,
            ref: Hb(O, K),
            target: y,
            "data-discover": !_ && s === "render" ? "true" : void 0
        });
        return G && !_ ? T.createElement(T.Fragment, null, ne, T.createElement(Lb, {
            page: k
        })) : ne
    });
Rt.displayName = "Link";
var qb = T.forwardRef(function({
    "aria-current": l = "page",
    caseSensitive: s = !1,
    className: r = "",
    end: o = !1,
    style: f,
    to: d,
    viewTransition: m,
    children: y,
    ...h
}, x) {
    let v = gi(d, {
            relative: h.relative
        }),
        N = Yn(),
        O = T.useContext($s),
        {
            navigator: S,
            basename: _
        } = T.useContext(Wt),
        M = O != null && Kb(v) && m === !0,
        B = S.encodeLocation ? S.encodeLocation(v).pathname : v.pathname,
        k = N.pathname,
        G = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
    s || (k = k.toLowerCase(), G = G ? G.toLowerCase() : null, B = B.toLowerCase()), G && _ && (G = yn(G, _) || G);
    const K = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
    let V = k === B || !o && k.startsWith(B) && k.charAt(K) === "/",
        de = G != null && (G === B || !o && G.startsWith(B) && G.charAt(B.length) === "/"),
        te = {
            isActive: V,
            isPending: de,
            isTransitioning: M
        },
        ne = V ? l : void 0,
        F;
    typeof r == "function" ? F = r(te) : F = [r, V ? "active" : null, de ? "pending" : null, M ? "transitioning" : null].filter(Boolean).join(" ");
    let re = typeof f == "function" ? f(te) : f;
    return T.createElement(Rt, {
        ...h,
        "aria-current": ne,
        className: F,
        ref: x,
        style: re,
        to: d,
        viewTransition: m
    }, typeof y == "function" ? y(te) : y)
});
qb.displayName = "NavLink";
var Pb = T.forwardRef(({
    discover: i = "render",
    fetcherKey: l,
    navigate: s,
    reloadDocument: r,
    replace: o,
    state: f,
    method: d = Ls,
    action: m,
    onSubmit: y,
    relative: h,
    preventScrollReset: x,
    viewTransition: v,
    ...N
}, O) => {
    let S = $b(),
        _ = Qb(m, {
            relative: h
        }),
        M = d.toLowerCase() === "get" ? "get" : "post",
        B = typeof m == "string" && rg.test(m),
        k = G => {
            if (y && y(G), G.defaultPrevented) return;
            G.preventDefault();
            let K = G.nativeEvent.submitter,
                V = (K == null ? void 0 : K.getAttribute("formmethod")) || d;
            S(K || G.currentTarget, {
                fetcherKey: l,
                method: V,
                navigate: s,
                replace: o,
                state: f,
                relative: h,
                preventScrollReset: x,
                viewTransition: v
            })
        };
    return T.createElement("form", {
        ref: O,
        method: M,
        action: _,
        onSubmit: r ? y : k,
        ...N,
        "data-discover": !B && i === "render" ? "true" : void 0
    })
});
Pb.displayName = "Form";

function Yb(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function ug(i) {
    let l = T.useContext(tl);
    return ke(l, Yb(i)), l
}

function Gb(i, {
    target: l,
    replace: s,
    state: r,
    preventScrollReset: o,
    relative: f,
    viewTransition: d
} = {}) {
    let m = Vo(),
        y = Yn(),
        h = gi(i, {
            relative: f
        });
    return T.useCallback(x => {
        if (vb(x, l)) {
            x.preventDefault();
            let v = s !== void 0 ? s : oi(y) === oi(h);
            m(i, {
                replace: v,
                state: r,
                preventScrollReset: o,
                relative: f,
                viewTransition: d
            })
        }
    }, [y, m, h, s, r, l, i, o, f, d])
}
var Vb = 0,
    Xb = () => `__${String(++Vb)}__`;

function $b() {
    let {
        router: i
    } = ug("useSubmit"), {
        basename: l
    } = T.useContext(Wt), s = cb();
    return T.useCallback(async (r, o = {}) => {
        let {
            action: f,
            method: d,
            encType: m,
            formData: y,
            body: h
        } = Eb(r, l);
        if (o.navigate === !1) {
            let x = o.fetcherKey || Xb();
            await i.fetch(x, s, o.action || f, {
                preventScrollReset: o.preventScrollReset,
                formData: y,
                body: h,
                formMethod: o.method || d,
                formEncType: o.encType || m,
                flushSync: o.flushSync
            })
        } else await i.navigate(o.action || f, {
            preventScrollReset: o.preventScrollReset,
            formData: y,
            body: h,
            formMethod: o.method || d,
            formEncType: o.encType || m,
            replace: o.replace,
            state: o.state,
            fromRouteId: s,
            flushSync: o.flushSync,
            viewTransition: o.viewTransition
        })
    }, [i, l, s])
}

function Qb(i, {
    relative: l
} = {}) {
    let {
        basename: s
    } = T.useContext(Wt), r = T.useContext(It);
    ke(r, "useFormAction must be used inside a RouteContext");
    let [o] = r.matches.slice(-1), f = {
        ...gi(i || ".", {
            relative: l
        })
    }, d = Yn();
    if (i == null) {
        f.search = d.search;
        let m = new URLSearchParams(f.search),
            y = m.getAll("index");
        if (y.some(x => x === "")) {
            m.delete("index"), y.filter(v => v).forEach(v => m.append("index", v));
            let x = m.toString();
            f.search = x ? `?${x}` : ""
        }
    }
    return (!i || i === ".") && o.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (f.pathname = f.pathname === "/" ? s : pn([s, f.pathname])), oi(f)
}

function Kb(i, l = {}) {
    let s = T.useContext(Im);
    ke(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: r
    } = ug("useViewTransitionState"), o = gi(i, {
        relative: l.relative
    });
    if (!s.isTransitioning) return !1;
    let f = yn(s.currentLocation.pathname, r) || s.currentLocation.pathname,
        d = yn(s.nextLocation.pathname, r) || s.nextLocation.pathname;
    return qs(o.pathname, d) != null || qs(o.pathname, f) != null
} [..._b];
const Zb = (i, l, s, r) => {
        var f, d, m, y;
        const o = [s, {
            code: l,
            ...r || {}
        }];
        if ((d = (f = i == null ? void 0 : i.services) == null ? void 0 : f.logger) != null && d.forward) return i.services.logger.forward(o, "warn", "react-i18next::", !0);
        ua(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), (y = (m = i == null ? void 0 : i.services) == null ? void 0 : m.logger) != null && y.warn ? i.services.logger.warn(...o) : console != null && console.warn && console.warn(...o)
    },
    um = {},
    Do = (i, l, s, r) => {
        ua(s) && um[s] || (ua(s) && (um[s] = new Date), Zb(i, l, s, r))
    },
    og = (i, l) => () => {
        if (i.isInitialized) l();
        else {
            const s = () => {
                setTimeout(() => {
                    i.off("initialized", s)
                }, 0), l()
            };
            i.on("initialized", s)
        }
    },
    Mo = (i, l, s) => {
        i.loadNamespaces(l, og(i, s))
    },
    om = (i, l, s, r) => {
        if (ua(s) && (s = [s]), i.options.preload && i.options.preload.indexOf(l) > -1) return Mo(i, s, r);
        s.forEach(o => {
            i.options.ns.indexOf(o) < 0 && i.options.ns.push(o)
        }), i.loadLanguages(l, og(i, r))
    },
    Jb = (i, l, s = {}) => !l.languages || !l.languages.length ? (Do(l, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
        languages: l.languages
    }), !0) : l.hasLoadedNamespace(i, {
        lng: s.lng,
        precheck: (r, o) => {
            var f;
            if (((f = s.bindI18n) == null ? void 0 : f.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !o(r.isLanguageChangingTo, i)) return !1
        }
    }),
    ua = i => typeof i == "string",
    Fb = i => typeof i == "object" && i !== null,
    Wb = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    Ib = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/"
    },
    ex = i => Ib[i],
    tx = i => i.replace(Wb, ex);
let zo = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: tx
};
const nx = (i = {}) => {
        zo = {
            ...zo,
            ...i
        }
    },
    ax = () => zo;
let cg;
const lx = i => {
        cg = i
    },
    ix = () => cg,
    sx = {
        type: "3rdParty",
        init(i) {
            nx(i.options.react), lx(i)
        }
    },
    rx = T.createContext();
class ux {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(l) {
        l.forEach(s => {
            this.usedNamespaces[s] || (this.usedNamespaces[s] = !0)
        })
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}
const ox = (i, l) => {
        const s = T.useRef();
        return T.useEffect(() => {
            s.current = i
        }, [i, l]), s.current
    },
    fg = (i, l, s, r) => i.getFixedT(l, s, r),
    cx = (i, l, s, r) => T.useCallback(fg(i, l, s, r), [i, l, s, r]),
    ut = (i, l = {}) => {
        var K, V, de, te;
        const {
            i18n: s
        } = l, {
            i18n: r,
            defaultNS: o
        } = T.useContext(rx) || {}, f = s || r || ix();
        if (f && !f.reportNamespaces && (f.reportNamespaces = new ux), !f) {
            Do(f, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
            const ne = (re, Ee) => ua(Ee) ? Ee : Fb(Ee) && ua(Ee.defaultValue) ? Ee.defaultValue : Array.isArray(re) ? re[re.length - 1] : re,
                F = [ne, {}, !1];
            return F.t = ne, F.i18n = {}, F.ready = !1, F
        }(K = f.options.react) != null && K.wait && Do(f, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
        const d = {
                ...ax(),
                ...f.options.react,
                ...l
            },
            {
                useSuspense: m,
                keyPrefix: y
            } = d;
        let h = o || ((V = f.options) == null ? void 0 : V.defaultNS);
        h = ua(h) ? [h] : h || ["translation"], (te = (de = f.reportNamespaces).addUsedNamespaces) == null || te.call(de, h);
        const x = (f.isInitialized || f.initializedStoreOnce) && h.every(ne => Jb(ne, f, d)),
            v = cx(f, l.lng || null, d.nsMode === "fallback" ? h : h[0], y),
            N = () => v,
            O = () => fg(f, l.lng || null, d.nsMode === "fallback" ? h : h[0], y),
            [S, _] = T.useState(N);
        let M = h.join();
        l.lng && (M = `${l.lng}${M}`);
        const B = ox(M),
            k = T.useRef(!0);
        T.useEffect(() => {
            const {
                bindI18n: ne,
                bindI18nStore: F
            } = d;
            k.current = !0, !x && !m && (l.lng ? om(f, l.lng, h, () => {
                k.current && _(O)
            }) : Mo(f, h, () => {
                k.current && _(O)
            })), x && B && B !== M && k.current && _(O);
            const re = () => {
                k.current && _(O)
            };
            return ne && (f == null || f.on(ne, re)), F && (f == null || f.store.on(F, re)), () => {
                k.current = !1, f && (ne == null || ne.split(" ").forEach(Ee => f.off(Ee, re))), F && f && F.split(" ").forEach(Ee => f.store.off(Ee, re))
            }
        }, [f, M]), T.useEffect(() => {
            k.current && x && _(N)
        }, [f, y, x]);
        const G = [S, f, x];
        if (G.t = S, G.i18n = f, G.ready = x, x || !x && !m) return G;
        throw new Promise(ne => {
            l.lng ? om(f, l.lng, h, () => ne()) : Mo(f, h, () => ne())
        })
    },
    cm = () => {
        const {
            i18n: i
        } = ut(), l = () => {
            i.changeLanguage(i.language === "ko" ? "en" : "ko")
        };
        return p.jsx("button", {
            onClick: l,
            className: "p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200",
            title: i.language === "ko" ? "Switch to English" : "한국어로 전환",
            children: p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: p.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                })
            })
        })
    },
    fm = [{
        to: "/event",
        label: "🎂",
        isSpecial: !0
    }, {
        to: "/about",
        label: "About"
    }, {
        to: "/game",
        label: "Game"
    }, {
        to: "/ai",
        label: "Ai Chat"
    }, {
        to: "/community",
        label: "Community"
    }];

function fx() {
    const i = Yn(),
        [l, s] = T.useState(!1);
    return p.jsx("nav", {
        className: "fixed top-0 left-0 w-full z-30 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm",
        children: p.jsxs("div", {
            className: "max-w-4xl mx-auto flex items-center justify-between px-4 md:px-6 py-3",
            children: [p.jsx(Rt, {
                to: "/",
                className: "flex items-center gap-2 text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight hover:scale-105 transition-transform",
                children: p.jsx("span", {
                    className: "bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent drop-shadow",
                    children: "sSGWoo"
                })
            }), p.jsxs("div", {
                className: "hidden sm:flex items-center gap-2 md:gap-4",
                children: [fm.map(r => p.jsxs(Rt, {
                    to: r.to,
                    className: `relative px-4 py-1 font-medium rounded transition text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50
                ${i.pathname.startsWith(r.to)?"text-blue-600 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30":""}
                ${r.isSpecial?"text-2xl":""}`,
                    title: r.isSpecial ? "🎂 생일빵 때리기 게임" : r.label,
                    children: [r.label, p.jsx("span", {
                        className: "absolute left-1/2 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"
                    })]
                }, r.to)), p.jsx("div", {
                    className: "ml-2 flex items-center gap-1",
                    children: p.jsx(cm, {})
                })]
            }), p.jsxs("div", {
                className: "sm:hidden flex items-center gap-2",
                children: [p.jsx(cm, {}), p.jsxs("button", {
                    className: "flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-blue-50 dark:hover:bg-blue-900/50 transition relative z-20",
                    onClick: () => s(r => !r),
                    "aria-label": "메뉴 열기",
                    children: [p.jsx("span", {
                        className: `block w-6 h-0.5 bg-blue-700 dark:bg-blue-400 mb-1 transition-transform ${l?"rotate-45 translate-y-1.5":""}`
                    }), p.jsx("span", {
                        className: `block w-6 h-0.5 bg-blue-700 dark:bg-blue-400 mb-1 transition-opacity ${l?"opacity-0":""}`
                    }), p.jsx("span", {
                        className: `block w-6 h-0.5 bg-blue-700 dark:bg-blue-400 transition-transform ${l?"-rotate-45 -translate-y-1.5":""}`
                    })]
                })]
            }), l && p.jsx("div", {
                className: "sm:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md animate-fadeIn z-10",
                children: p.jsx("div", {
                    className: "flex flex-col py-2",
                    children: fm.map(r => p.jsx(Rt, {
                        to: r.to,
                        className: `px-6 py-3 font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition
                    ${i.pathname.startsWith(r.to)?"text-blue-600 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30":""}
                    ${r.isSpecial?"text-2xl text-center backdrop-blur-xl bg-gradient-to-br from-white/25 via-white/15 to-white/5 border border-white/40 dark:border-white/20 mx-4 my-3 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_8px_32px_rgba(147,51,234,0.2)] animate-pulse bg-gradient-to-br from-white/30 via-purple-100/20 to-pink-100/20 dark:from-white/20 dark:via-purple-900/30 dark:to-pink-900/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-white/10 before:to-transparent before:animate-pulse":""}`,
                        onClick: () => s(!1),
                        children: r.label
                    }, r.to))
                })
            })]
        })
    })
}

function dx() {
    const {
        t: i
    } = ut(), [l, s] = T.useState({
        x: 0,
        y: 0
    }), [r, o] = T.useState(!1), [f, d] = T.useState(!1);
    return T.useEffect(() => {
        d(!0)
    }, []), T.useEffect(() => {
        const m = y => {
            const h = "touches" in y ? y.touches[0].clientX : y.clientX,
                x = "touches" in y ? y.touches[0].clientY : y.clientY;
            s({
                x: (h / window.innerWidth - .5) * 20,
                y: (x / window.innerHeight - .5) * 20
            })
        };
        return window.addEventListener("mousemove", m), window.addEventListener("touchmove", m), () => {
            window.removeEventListener("mousemove", m), window.removeEventListener("touchmove", m)
        }
    }, []), p.jsxs("div", {
        className: "relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700",
        children: [p.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",
            children: p.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-200/30 via-transparent to-pink-200/30 dark:from-blue-800/30 dark:to-pink-800/30"
            })
        }), p.jsxs("div", {
            className: "absolute inset-0 transition-transform duration-300 ease-out",
            style: {
                transform: `translate(${l.x}px, ${l.y}px)`
            },
            children: [p.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/30 rounded-full blur-3xl"
            }), p.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200/30 dark:pink-900/30 rounded-full blur-3xl"
            })]
        }), p.jsxs("div", {
            className: "relative z-10 flex flex-col items-center text-center px-6 py-16",
            children: [p.jsxs("h1", {
                className: `text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg tracking-tight transition-transform duration-300 hover:scale-105 ${f?"animate-fade-in":"opacity-0"}`,
                onMouseEnter: () => o(!0),
                onMouseLeave: () => o(!1),
                children: [i("Welcome to"), " ", p.jsx("span", {
                    className: `inline-block transition-all duration-300 ${r?"text-blue-600 dark:text-blue-400 scale-110":"text-blue-600 dark:text-blue-400"}`,
                    children: "sSGWoo"
                })]
            }), p.jsxs("p", {
                className: `text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-medium max-w-2xl ${f?"animate-fade-in [animation-delay:200ms]":"opacity-0"}`,
                children: [i("homePage.platform"), p.jsx("br", {}), i("homePage.platformDesc")]
            }), p.jsx("div", {
                className: `flex gap-4 ${f?"animate-fade-in [animation-delay:400ms]":"opacity-0"}`,
                children: p.jsxs(Rt, {
                    to: "/about",
                    className: "group relative px-8 py-3 rounded-full bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold text-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                    children: [p.jsx("span", {
                        className: "relative z-10",
                        children: "About me"
                    }), p.jsx("div", {
                        className: "absolute inset-0 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    })]
                })
            })]
        })]
    })
}

function hx() {
    const {
        t: i
    } = ut();
    return p.jsx("div", {
        className: "min-h-[60vh] flex flex-col items-center bg-white rounded-xl shadow-lg px-6 pt-8 pb-16",
        children: p.jsxs("div", {
            className: "flex flex-col items-center text-center w-full max-w-2xl",
            children: [p.jsx("h2", {
                className: "text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg tracking-tight",
                children: "About me"
            }), p.jsx("p", {
                className: "text-lg md:text-xl text-gray-700 mb-8 font-medium whitespace-pre-line",
                children: i("aboutPage.aboutContent")
            }), p.jsx("a", {
                href: "https://github.com/gitwub5",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-block mt-2 text-blue-600 hover:underline font-semibold text-lg",
                children: i("aboutPage.githubLink")
            }), p.jsx("div", {
                className: "mt-10 w-full max-w-md mx-auto",
                children: p.jsxs("div", {
                    className: "border-t border-gray-200 bg-white rounded-xl shadow p-6",
                    children: [p.jsx("h3", {
                        className: "text-xl font-bold mb-2 text-gray-800",
                        children: i("aboutPage.contact")
                    }), p.jsxs("ul", {
                        className: "space-y-2 text-gray-700",
                        children: [p.jsxs("li", {
                            children: ["📧 Email", ": ", p.jsx("a", {
                                href: "mailto:ssgwoo5@gmail.com",
                                className: "text-blue-600 hover:underline",
                                children: "ssgwoo5@gmail.com"
                            })]
                        }), p.jsxs("li", {
                            children: ["📸 Instagram", ": ", p.jsx("a", {
                                href: "https://instagram.com/gitwub5",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-600 hover:underline",
                                children: "@gitwub5"
                            })]
                        })]
                    })]
                })
            })]
        })
    })
}
const dm = i => {
        let l;
        const s = new Set,
            r = (h, x) => {
                const v = typeof h == "function" ? h(l) : h;
                if (!Object.is(v, l)) {
                    const N = l;
                    l = x ?? (typeof v != "object" || v === null) ? v : Object.assign({}, l, v), s.forEach(O => O(l, N))
                }
            },
            o = () => l,
            m = {
                setState: r,
                getState: o,
                getInitialState: () => y,
                subscribe: h => (s.add(h), () => s.delete(h))
            },
            y = l = i(r, o, m);
        return m
    },
    mx = i => i ? dm(i) : dm,
    gx = i => i;

function px(i, l = gx) {
    const s = Zh.useSyncExternalStore(i.subscribe, () => l(i.getState()), () => l(i.getInitialState()));
    return Zh.useDebugValue(s), s
}
const hm = i => {
        const l = mx(i),
            s = r => px(l, r);
        return Object.assign(s, l), s
    },
    pi = i => i ? hm(i) : hm;

function dg(i, l) {
    return function() {
        return i.apply(l, arguments)
    }
}
const {
    toString: yx
} = Object.prototype, {
    getPrototypeOf: Zo
} = Object, {
    iterator: Ks,
    toStringTag: hg
} = Symbol, Zs = (i => l => {
    const s = yx.call(l);
    return i[s] || (i[s] = s.slice(8, -1).toLowerCase())
})(Object.create(null)), Yt = i => (i = i.toLowerCase(), l => Zs(l) === i), Js = i => l => typeof l === i, {
    isArray: nl
} = Array, ci = Js("undefined");

function bx(i) {
    return i !== null && !ci(i) && i.constructor !== null && !ci(i.constructor) && mt(i.constructor.isBuffer) && i.constructor.isBuffer(i)
}
const mg = Yt("ArrayBuffer");

function xx(i) {
    let l;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? l = ArrayBuffer.isView(i) : l = i && i.buffer && mg(i.buffer), l
}
const vx = Js("string"),
    mt = Js("function"),
    gg = Js("number"),
    Fs = i => i !== null && typeof i == "object",
    Sx = i => i === !0 || i === !1,
    ks = i => {
        if (Zs(i) !== "object") return !1;
        const l = Zo(i);
        return (l === null || l === Object.prototype || Object.getPrototypeOf(l) === null) && !(hg in i) && !(Ks in i)
    },
    wx = Yt("Date"),
    Ex = Yt("File"),
    Nx = Yt("Blob"),
    Rx = Yt("FileList"),
    jx = i => Fs(i) && mt(i.pipe),
    Ox = i => {
        let l;
        return i && (typeof FormData == "function" && i instanceof FormData || mt(i.append) && ((l = Zs(i)) === "formdata" || l === "object" && mt(i.toString) && i.toString() === "[object FormData]"))
    },
    Tx = Yt("URLSearchParams"),
    [Cx, Ax, _x, Dx] = ["ReadableStream", "Request", "Response", "Headers"].map(Yt),
    Mx = i => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function yi(i, l, {
    allOwnKeys: s = !1
} = {}) {
    if (i === null || typeof i > "u") return;
    let r, o;
    if (typeof i != "object" && (i = [i]), nl(i))
        for (r = 0, o = i.length; r < o; r++) l.call(null, i[r], r, i);
    else {
        const f = s ? Object.getOwnPropertyNames(i) : Object.keys(i),
            d = f.length;
        let m;
        for (r = 0; r < d; r++) m = f[r], l.call(null, i[m], m, i)
    }
}

function pg(i, l) {
    l = l.toLowerCase();
    const s = Object.keys(i);
    let r = s.length,
        o;
    for (; r-- > 0;)
        if (o = s[r], l === o.toLowerCase()) return o;
    return null
}
const ra = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    yg = i => !ci(i) && i !== ra;

function Lo() {
    const {
        caseless: i
    } = yg(this) && this || {}, l = {}, s = (r, o) => {
        const f = i && pg(l, o) || o;
        ks(l[f]) && ks(r) ? l[f] = Lo(l[f], r) : ks(r) ? l[f] = Lo({}, r) : nl(r) ? l[f] = r.slice() : l[f] = r
    };
    for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && yi(arguments[r], s);
    return l
}
const zx = (i, l, s, {
        allOwnKeys: r
    } = {}) => (yi(l, (o, f) => {
        s && mt(o) ? i[f] = dg(o, s) : i[f] = o
    }, {
        allOwnKeys: r
    }), i),
    Lx = i => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i),
    Ux = (i, l, s, r) => {
        i.prototype = Object.create(l.prototype, r), i.prototype.constructor = i, Object.defineProperty(i, "super", {
            value: l.prototype
        }), s && Object.assign(i.prototype, s)
    },
    kx = (i, l, s, r) => {
        let o, f, d;
        const m = {};
        if (l = l || {}, i == null) return l;
        do {
            for (o = Object.getOwnPropertyNames(i), f = o.length; f-- > 0;) d = o[f], (!r || r(d, i, l)) && !m[d] && (l[d] = i[d], m[d] = !0);
            i = s !== !1 && Zo(i)
        } while (i && (!s || s(i, l)) && i !== Object.prototype);
        return l
    },
    Hx = (i, l, s) => {
        i = String(i), (s === void 0 || s > i.length) && (s = i.length), s -= l.length;
        const r = i.indexOf(l, s);
        return r !== -1 && r === s
    },
    Bx = i => {
        if (!i) return null;
        if (nl(i)) return i;
        let l = i.length;
        if (!gg(l)) return null;
        const s = new Array(l);
        for (; l-- > 0;) s[l] = i[l];
        return s
    },
    qx = (i => l => i && l instanceof i)(typeof Uint8Array < "u" && Zo(Uint8Array)),
    Px = (i, l) => {
        const r = (i && i[Ks]).call(i);
        let o;
        for (;
            (o = r.next()) && !o.done;) {
            const f = o.value;
            l.call(i, f[0], f[1])
        }
    },
    Yx = (i, l) => {
        let s;
        const r = [];
        for (;
            (s = i.exec(l)) !== null;) r.push(s);
        return r
    },
    Gx = Yt("HTMLFormElement"),
    Vx = i => i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, r, o) {
        return r.toUpperCase() + o
    }),
    mm = (({
        hasOwnProperty: i
    }) => (l, s) => i.call(l, s))(Object.prototype),
    Xx = Yt("RegExp"),
    bg = (i, l) => {
        const s = Object.getOwnPropertyDescriptors(i),
            r = {};
        yi(s, (o, f) => {
            let d;
            (d = l(o, f, i)) !== !1 && (r[f] = d || o)
        }), Object.defineProperties(i, r)
    },
    $x = i => {
        bg(i, (l, s) => {
            if (mt(i) && ["arguments", "caller", "callee"].indexOf(s) !== -1) return !1;
            const r = i[s];
            if (mt(r)) {
                if (l.enumerable = !1, "writable" in l) {
                    l.writable = !1;
                    return
                }
                l.set || (l.set = () => {
                    throw Error("Can not rewrite read-only method '" + s + "'")
                })
            }
        })
    },
    Qx = (i, l) => {
        const s = {},
            r = o => {
                o.forEach(f => {
                    s[f] = !0
                })
            };
        return nl(i) ? r(i) : r(String(i).split(l)), s
    },
    Kx = () => {},
    Zx = (i, l) => i != null && Number.isFinite(i = +i) ? i : l;

function Jx(i) {
    return !!(i && mt(i.append) && i[hg] === "FormData" && i[Ks])
}
const Fx = i => {
        const l = new Array(10),
            s = (r, o) => {
                if (Fs(r)) {
                    if (l.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        l[o] = r;
                        const f = nl(r) ? [] : {};
                        return yi(r, (d, m) => {
                            const y = s(d, o + 1);
                            !ci(y) && (f[m] = y)
                        }), l[o] = void 0, f
                    }
                }
                return r
            };
        return s(i, 0)
    },
    Wx = Yt("AsyncFunction"),
    Ix = i => i && (Fs(i) || mt(i)) && mt(i.then) && mt(i.catch),
    xg = ((i, l) => i ? setImmediate : l ? ((s, r) => (ra.addEventListener("message", ({
        source: o,
        data: f
    }) => {
        o === ra && f === s && r.length && r.shift()()
    }, !1), o => {
        r.push(o), ra.postMessage(s, "*")
    }))(`axios@${Math.random()}`, []) : s => setTimeout(s))(typeof setImmediate == "function", mt(ra.postMessage)),
    ev = typeof queueMicrotask < "u" ? queueMicrotask.bind(ra) : typeof process < "u" && process.nextTick || xg,
    tv = i => i != null && mt(i[Ks]),
    L = {
        isArray: nl,
        isArrayBuffer: mg,
        isBuffer: bx,
        isFormData: Ox,
        isArrayBufferView: xx,
        isString: vx,
        isNumber: gg,
        isBoolean: Sx,
        isObject: Fs,
        isPlainObject: ks,
        isReadableStream: Cx,
        isRequest: Ax,
        isResponse: _x,
        isHeaders: Dx,
        isUndefined: ci,
        isDate: wx,
        isFile: Ex,
        isBlob: Nx,
        isRegExp: Xx,
        isFunction: mt,
        isStream: jx,
        isURLSearchParams: Tx,
        isTypedArray: qx,
        isFileList: Rx,
        forEach: yi,
        merge: Lo,
        extend: zx,
        trim: Mx,
        stripBOM: Lx,
        inherits: Ux,
        toFlatObject: kx,
        kindOf: Zs,
        kindOfTest: Yt,
        endsWith: Hx,
        toArray: Bx,
        forEachEntry: Px,
        matchAll: Yx,
        isHTMLForm: Gx,
        hasOwnProperty: mm,
        hasOwnProp: mm,
        reduceDescriptors: bg,
        freezeMethods: $x,
        toObjectSet: Qx,
        toCamelCase: Vx,
        noop: Kx,
        toFiniteNumber: Zx,
        findKey: pg,
        global: ra,
        isContextDefined: yg,
        isSpecCompliantForm: Jx,
        toJSONObject: Fx,
        isAsyncFn: Wx,
        isThenable: Ix,
        setImmediate: xg,
        asap: ev,
        isIterable: tv
    };

function fe(i, l, s, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = i, this.name = "AxiosError", l && (this.code = l), s && (this.config = s), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null)
}
L.inherits(fe, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: L.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const vg = fe.prototype,
    Sg = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(i => {
    Sg[i] = {
        value: i
    }
});
Object.defineProperties(fe, Sg);
Object.defineProperty(vg, "isAxiosError", {
    value: !0
});
fe.from = (i, l, s, r, o, f) => {
    const d = Object.create(vg);
    return L.toFlatObject(i, d, function(y) {
        return y !== Error.prototype
    }, m => m !== "isAxiosError"), fe.call(d, i.message, l, s, r, o), d.cause = i, d.name = i.name, f && Object.assign(d, f), d
};
const nv = null;

function Uo(i) {
    return L.isPlainObject(i) || L.isArray(i)
}

function wg(i) {
    return L.endsWith(i, "[]") ? i.slice(0, -2) : i
}

function gm(i, l, s) {
    return i ? i.concat(l).map(function(o, f) {
        return o = wg(o), !s && f ? "[" + o + "]" : o
    }).join(s ? "." : "") : l
}

function av(i) {
    return L.isArray(i) && !i.some(Uo)
}
const lv = L.toFlatObject(L, {}, null, function(l) {
    return /^is[A-Z]/.test(l)
});

function Ws(i, l, s) {
    if (!L.isObject(i)) throw new TypeError("target must be an object");
    l = l || new FormData, s = L.toFlatObject(s, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(_, M) {
        return !L.isUndefined(M[_])
    });
    const r = s.metaTokens,
        o = s.visitor || x,
        f = s.dots,
        d = s.indexes,
        y = (s.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(l);
    if (!L.isFunction(o)) throw new TypeError("visitor must be a function");

    function h(S) {
        if (S === null) return "";
        if (L.isDate(S)) return S.toISOString();
        if (!y && L.isBlob(S)) throw new fe("Blob is not supported. Use a Buffer instead.");
        return L.isArrayBuffer(S) || L.isTypedArray(S) ? y && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S
    }

    function x(S, _, M) {
        let B = S;
        if (S && !M && typeof S == "object") {
            if (L.endsWith(_, "{}")) _ = r ? _ : _.slice(0, -2), S = JSON.stringify(S);
            else if (L.isArray(S) && av(S) || (L.isFileList(S) || L.endsWith(_, "[]")) && (B = L.toArray(S))) return _ = wg(_), B.forEach(function(G, K) {
                !(L.isUndefined(G) || G === null) && l.append(d === !0 ? gm([_], K, f) : d === null ? _ : _ + "[]", h(G))
            }), !1
        }
        return Uo(S) ? !0 : (l.append(gm(M, _, f), h(S)), !1)
    }
    const v = [],
        N = Object.assign(lv, {
            defaultVisitor: x,
            convertValue: h,
            isVisitable: Uo
        });

    function O(S, _) {
        if (!L.isUndefined(S)) {
            if (v.indexOf(S) !== -1) throw Error("Circular reference detected in " + _.join("."));
            v.push(S), L.forEach(S, function(B, k) {
                (!(L.isUndefined(B) || B === null) && o.call(l, B, L.isString(k) ? k.trim() : k, _, N)) === !0 && O(B, _ ? _.concat(k) : [k])
            }), v.pop()
        }
    }
    if (!L.isObject(i)) throw new TypeError("data must be an object");
    return O(i), l
}

function pm(i) {
    const l = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(r) {
        return l[r]
    })
}

function Jo(i, l) {
    this._pairs = [], i && Ws(i, this, l)
}
const Eg = Jo.prototype;
Eg.append = function(l, s) {
    this._pairs.push([l, s])
};
Eg.toString = function(l) {
    const s = l ? function(r) {
        return l.call(this, r, pm)
    } : pm;
    return this._pairs.map(function(o) {
        return s(o[0]) + "=" + s(o[1])
    }, "").join("&")
};

function iv(i) {
    return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Ng(i, l, s) {
    if (!l) return i;
    const r = s && s.encode || iv;
    L.isFunction(s) && (s = {
        serialize: s
    });
    const o = s && s.serialize;
    let f;
    if (o ? f = o(l, s) : f = L.isURLSearchParams(l) ? l.toString() : new Jo(l, s).toString(r), f) {
        const d = i.indexOf("#");
        d !== -1 && (i = i.slice(0, d)), i += (i.indexOf("?") === -1 ? "?" : "&") + f
    }
    return i
}
class ym {
    constructor() {
        this.handlers = []
    }
    use(l, s, r) {
        return this.handlers.push({
            fulfilled: l,
            rejected: s,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(l) {
        this.handlers[l] && (this.handlers[l] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(l) {
        L.forEach(this.handlers, function(r) {
            r !== null && l(r)
        })
    }
}
const Rg = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    sv = typeof URLSearchParams < "u" ? URLSearchParams : Jo,
    rv = typeof FormData < "u" ? FormData : null,
    uv = typeof Blob < "u" ? Blob : null,
    ov = {
        isBrowser: !0,
        classes: {
            URLSearchParams: sv,
            FormData: rv,
            Blob: uv
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    Fo = typeof window < "u" && typeof document < "u",
    ko = typeof navigator == "object" && navigator || void 0,
    cv = Fo && (!ko || ["ReactNative", "NativeScript", "NS"].indexOf(ko.product) < 0),
    fv = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    dv = Fo && window.location.href || "http://localhost",
    hv = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Fo,
        hasStandardBrowserEnv: cv,
        hasStandardBrowserWebWorkerEnv: fv,
        navigator: ko,
        origin: dv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    lt = {
        ...hv,
        ...ov
    };

function mv(i, l) {
    return Ws(i, new lt.classes.URLSearchParams, Object.assign({
        visitor: function(s, r, o, f) {
            return lt.isNode && L.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments)
        }
    }, l))
}

function gv(i) {
    return L.matchAll(/\w+|\[(\w*)]/g, i).map(l => l[0] === "[]" ? "" : l[1] || l[0])
}

function pv(i) {
    const l = {},
        s = Object.keys(i);
    let r;
    const o = s.length;
    let f;
    for (r = 0; r < o; r++) f = s[r], l[f] = i[f];
    return l
}

function jg(i) {
    function l(s, r, o, f) {
        let d = s[f++];
        if (d === "__proto__") return !0;
        const m = Number.isFinite(+d),
            y = f >= s.length;
        return d = !d && L.isArray(o) ? o.length : d, y ? (L.hasOwnProp(o, d) ? o[d] = [o[d], r] : o[d] = r, !m) : ((!o[d] || !L.isObject(o[d])) && (o[d] = []), l(s, r, o[d], f) && L.isArray(o[d]) && (o[d] = pv(o[d])), !m)
    }
    if (L.isFormData(i) && L.isFunction(i.entries)) {
        const s = {};
        return L.forEachEntry(i, (r, o) => {
            l(gv(r), o, s, 0)
        }), s
    }
    return null
}

function yv(i, l, s) {
    if (L.isString(i)) try {
        return (l || JSON.parse)(i), L.trim(i)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (s || JSON.stringify)(i)
}
const bi = {
    transitional: Rg,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(l, s) {
        const r = s.getContentType() || "",
            o = r.indexOf("application/json") > -1,
            f = L.isObject(l);
        if (f && L.isHTMLForm(l) && (l = new FormData(l)), L.isFormData(l)) return o ? JSON.stringify(jg(l)) : l;
        if (L.isArrayBuffer(l) || L.isBuffer(l) || L.isStream(l) || L.isFile(l) || L.isBlob(l) || L.isReadableStream(l)) return l;
        if (L.isArrayBufferView(l)) return l.buffer;
        if (L.isURLSearchParams(l)) return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), l.toString();
        let m;
        if (f) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return mv(l, this.formSerializer).toString();
            if ((m = L.isFileList(l)) || r.indexOf("multipart/form-data") > -1) {
                const y = this.env && this.env.FormData;
                return Ws(m ? {
                    "files[]": l
                } : l, y && new y, this.formSerializer)
            }
        }
        return f || o ? (s.setContentType("application/json", !1), yv(l)) : l
    }],
    transformResponse: [function(l) {
        const s = this.transitional || bi.transitional,
            r = s && s.forcedJSONParsing,
            o = this.responseType === "json";
        if (L.isResponse(l) || L.isReadableStream(l)) return l;
        if (l && L.isString(l) && (r && !this.responseType || o)) {
            const d = !(s && s.silentJSONParsing) && o;
            try {
                return JSON.parse(l)
            } catch (m) {
                if (d) throw m.name === "SyntaxError" ? fe.from(m, fe.ERR_BAD_RESPONSE, this, null, this.response) : m
            }
        }
        return l
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: lt.classes.FormData,
        Blob: lt.classes.Blob
    },
    validateStatus: function(l) {
        return l >= 200 && l < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], i => {
    bi.headers[i] = {}
});
const bv = L.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    xv = i => {
        const l = {};
        let s, r, o;
        return i && i.split(`
`).forEach(function(d) {
            o = d.indexOf(":"), s = d.substring(0, o).trim().toLowerCase(), r = d.substring(o + 1).trim(), !(!s || l[s] && bv[s]) && (s === "set-cookie" ? l[s] ? l[s].push(r) : l[s] = [r] : l[s] = l[s] ? l[s] + ", " + r : r)
        }), l
    },
    bm = Symbol("internals");

function ii(i) {
    return i && String(i).trim().toLowerCase()
}

function Hs(i) {
    return i === !1 || i == null ? i : L.isArray(i) ? i.map(Hs) : String(i)
}

function vv(i) {
    const l = Object.create(null),
        s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = s.exec(i);) l[r[1]] = r[2];
    return l
}
const Sv = i => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());

function No(i, l, s, r, o) {
    if (L.isFunction(r)) return r.call(this, l, s);
    if (o && (l = s), !!L.isString(l)) {
        if (L.isString(r)) return l.indexOf(r) !== -1;
        if (L.isRegExp(r)) return r.test(l)
    }
}

function wv(i) {
    return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (l, s, r) => s.toUpperCase() + r)
}

function Ev(i, l) {
    const s = L.toCamelCase(" " + l);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(i, r + s, {
            value: function(o, f, d) {
                return this[r].call(this, l, o, f, d)
            },
            configurable: !0
        })
    })
}
let gt = class {
    constructor(l) {
        l && this.set(l)
    }
    set(l, s, r) {
        const o = this;

        function f(m, y, h) {
            const x = ii(y);
            if (!x) throw new Error("header name must be a non-empty string");
            const v = L.findKey(o, x);
            (!v || o[v] === void 0 || h === !0 || h === void 0 && o[v] !== !1) && (o[v || y] = Hs(m))
        }
        const d = (m, y) => L.forEach(m, (h, x) => f(h, x, y));
        if (L.isPlainObject(l) || l instanceof this.constructor) d(l, s);
        else if (L.isString(l) && (l = l.trim()) && !Sv(l)) d(xv(l), s);
        else if (L.isObject(l) && L.isIterable(l)) {
            let m = {},
                y, h;
            for (const x of l) {
                if (!L.isArray(x)) throw TypeError("Object iterator must return a key-value pair");
                m[h = x[0]] = (y = m[h]) ? L.isArray(y) ? [...y, x[1]] : [y, x[1]] : x[1]
            }
            d(m, s)
        } else l != null && f(s, l, r);
        return this
    }
    get(l, s) {
        if (l = ii(l), l) {
            const r = L.findKey(this, l);
            if (r) {
                const o = this[r];
                if (!s) return o;
                if (s === !0) return vv(o);
                if (L.isFunction(s)) return s.call(this, o, r);
                if (L.isRegExp(s)) return s.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(l, s) {
        if (l = ii(l), l) {
            const r = L.findKey(this, l);
            return !!(r && this[r] !== void 0 && (!s || No(this, this[r], r, s)))
        }
        return !1
    }
    delete(l, s) {
        const r = this;
        let o = !1;

        function f(d) {
            if (d = ii(d), d) {
                const m = L.findKey(r, d);
                m && (!s || No(r, r[m], m, s)) && (delete r[m], o = !0)
            }
        }
        return L.isArray(l) ? l.forEach(f) : f(l), o
    }
    clear(l) {
        const s = Object.keys(this);
        let r = s.length,
            o = !1;
        for (; r--;) {
            const f = s[r];
            (!l || No(this, this[f], f, l, !0)) && (delete this[f], o = !0)
        }
        return o
    }
    normalize(l) {
        const s = this,
            r = {};
        return L.forEach(this, (o, f) => {
            const d = L.findKey(r, f);
            if (d) {
                s[d] = Hs(o), delete s[f];
                return
            }
            const m = l ? wv(f) : String(f).trim();
            m !== f && delete s[f], s[m] = Hs(o), r[m] = !0
        }), this
    }
    concat(...l) {
        return this.constructor.concat(this, ...l)
    }
    toJSON(l) {
        const s = Object.create(null);
        return L.forEach(this, (r, o) => {
            r != null && r !== !1 && (s[o] = l && L.isArray(r) ? r.join(", ") : r)
        }), s
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([l, s]) => l + ": " + s).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(l) {
        return l instanceof this ? l : new this(l)
    }
    static concat(l, ...s) {
        const r = new this(l);
        return s.forEach(o => r.set(o)), r
    }
    static accessor(l) {
        const r = (this[bm] = this[bm] = {
                accessors: {}
            }).accessors,
            o = this.prototype;

        function f(d) {
            const m = ii(d);
            r[m] || (Ev(o, d), r[m] = !0)
        }
        return L.isArray(l) ? l.forEach(f) : f(l), this
    }
};
gt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(gt.prototype, ({
    value: i
}, l) => {
    let s = l[0].toUpperCase() + l.slice(1);
    return {
        get: () => i,
        set(r) {
            this[s] = r
        }
    }
});
L.freezeMethods(gt);

function Ro(i, l) {
    const s = this || bi,
        r = l || s,
        o = gt.from(r.headers);
    let f = r.data;
    return L.forEach(i, function(m) {
        f = m.call(s, f, o.normalize(), l ? l.status : void 0)
    }), o.normalize(), f
}

function Og(i) {
    return !!(i && i.__CANCEL__)
}

function al(i, l, s) {
    fe.call(this, i ?? "canceled", fe.ERR_CANCELED, l, s), this.name = "CanceledError"
}
L.inherits(al, fe, {
    __CANCEL__: !0
});

function Tg(i, l, s) {
    const r = s.config.validateStatus;
    !s.status || !r || r(s.status) ? i(s) : l(new fe("Request failed with status code " + s.status, [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4], s.config, s.request, s))
}

function Nv(i) {
    const l = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return l && l[1] || ""
}

function Rv(i, l) {
    i = i || 10;
    const s = new Array(i),
        r = new Array(i);
    let o = 0,
        f = 0,
        d;
    return l = l !== void 0 ? l : 1e3,
        function(y) {
            const h = Date.now(),
                x = r[f];
            d || (d = h), s[o] = y, r[o] = h;
            let v = f,
                N = 0;
            for (; v !== o;) N += s[v++], v = v % i;
            if (o = (o + 1) % i, o === f && (f = (f + 1) % i), h - d < l) return;
            const O = x && h - x;
            return O ? Math.round(N * 1e3 / O) : void 0
        }
}

function jv(i, l) {
    let s = 0,
        r = 1e3 / l,
        o, f;
    const d = (h, x = Date.now()) => {
        s = x, o = null, f && (clearTimeout(f), f = null), i.apply(null, h)
    };
    return [(...h) => {
        const x = Date.now(),
            v = x - s;
        v >= r ? d(h, x) : (o = h, f || (f = setTimeout(() => {
            f = null, d(o)
        }, r - v)))
    }, () => o && d(o)]
}
const Ps = (i, l, s = 3) => {
        let r = 0;
        const o = Rv(50, 250);
        return jv(f => {
            const d = f.loaded,
                m = f.lengthComputable ? f.total : void 0,
                y = d - r,
                h = o(y),
                x = d <= m;
            r = d;
            const v = {
                loaded: d,
                total: m,
                progress: m ? d / m : void 0,
                bytes: y,
                rate: h || void 0,
                estimated: h && m && x ? (m - d) / h : void 0,
                event: f,
                lengthComputable: m != null,
                [l ? "download" : "upload"]: !0
            };
            i(v)
        }, s)
    },
    xm = (i, l) => {
        const s = i != null;
        return [r => l[0]({
            lengthComputable: s,
            total: i,
            loaded: r
        }), l[1]]
    },
    vm = i => (...l) => L.asap(() => i(...l)),
    Ov = lt.hasStandardBrowserEnv ? ((i, l) => s => (s = new URL(s, lt.origin), i.protocol === s.protocol && i.host === s.host && (l || i.port === s.port)))(new URL(lt.origin), lt.navigator && /(msie|trident)/i.test(lt.navigator.userAgent)) : () => !0,
    Tv = lt.hasStandardBrowserEnv ? {
        write(i, l, s, r, o, f) {
            const d = [i + "=" + encodeURIComponent(l)];
            L.isNumber(s) && d.push("expires=" + new Date(s).toGMTString()), L.isString(r) && d.push("path=" + r), L.isString(o) && d.push("domain=" + o), f === !0 && d.push("secure"), document.cookie = d.join("; ")
        },
        read(i) {
            const l = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
            return l ? decodeURIComponent(l[3]) : null
        },
        remove(i) {
            this.write(i, "", Date.now() - 864e5)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function Cv(i) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)
}

function Av(i, l) {
    return l ? i.replace(/\/?\/$/, "") + "/" + l.replace(/^\/+/, "") : i
}

function Cg(i, l, s) {
    let r = !Cv(l);
    return i && (r || s == !1) ? Av(i, l) : l
}
const Sm = i => i instanceof gt ? {
    ...i
} : i;

function ca(i, l) {
    l = l || {};
    const s = {};

    function r(h, x, v, N) {
        return L.isPlainObject(h) && L.isPlainObject(x) ? L.merge.call({
            caseless: N
        }, h, x) : L.isPlainObject(x) ? L.merge({}, x) : L.isArray(x) ? x.slice() : x
    }

    function o(h, x, v, N) {
        if (L.isUndefined(x)) {
            if (!L.isUndefined(h)) return r(void 0, h, v, N)
        } else return r(h, x, v, N)
    }

    function f(h, x) {
        if (!L.isUndefined(x)) return r(void 0, x)
    }

    function d(h, x) {
        if (L.isUndefined(x)) {
            if (!L.isUndefined(h)) return r(void 0, h)
        } else return r(void 0, x)
    }

    function m(h, x, v) {
        if (v in l) return r(h, x);
        if (v in i) return r(void 0, h)
    }
    const y = {
        url: f,
        method: f,
        data: f,
        baseURL: d,
        transformRequest: d,
        transformResponse: d,
        paramsSerializer: d,
        timeout: d,
        timeoutMessage: d,
        withCredentials: d,
        withXSRFToken: d,
        adapter: d,
        responseType: d,
        xsrfCookieName: d,
        xsrfHeaderName: d,
        onUploadProgress: d,
        onDownloadProgress: d,
        decompress: d,
        maxContentLength: d,
        maxBodyLength: d,
        beforeRedirect: d,
        transport: d,
        httpAgent: d,
        httpsAgent: d,
        cancelToken: d,
        socketPath: d,
        responseEncoding: d,
        validateStatus: m,
        headers: (h, x, v) => o(Sm(h), Sm(x), v, !0)
    };
    return L.forEach(Object.keys(Object.assign({}, i, l)), function(x) {
        const v = y[x] || o,
            N = v(i[x], l[x], x);
        L.isUndefined(N) && v !== m || (s[x] = N)
    }), s
}
const Ag = i => {
        const l = ca({}, i);
        let {
            data: s,
            withXSRFToken: r,
            xsrfHeaderName: o,
            xsrfCookieName: f,
            headers: d,
            auth: m
        } = l;
        l.headers = d = gt.from(d), l.url = Ng(Cg(l.baseURL, l.url, l.allowAbsoluteUrls), i.params, i.paramsSerializer), m && d.set("Authorization", "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : "")));
        let y;
        if (L.isFormData(s)) {
            if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv) d.setContentType(void 0);
            else if ((y = d.getContentType()) !== !1) {
                const [h, ...x] = y ? y.split(";").map(v => v.trim()).filter(Boolean) : [];
                d.setContentType([h || "multipart/form-data", ...x].join("; "))
            }
        }
        if (lt.hasStandardBrowserEnv && (r && L.isFunction(r) && (r = r(l)), r || r !== !1 && Ov(l.url))) {
            const h = o && f && Tv.read(f);
            h && d.set(o, h)
        }
        return l
    },
    _v = typeof XMLHttpRequest < "u",
    Dv = _v && function(i) {
        return new Promise(function(s, r) {
            const o = Ag(i);
            let f = o.data;
            const d = gt.from(o.headers).normalize();
            let {
                responseType: m,
                onUploadProgress: y,
                onDownloadProgress: h
            } = o, x, v, N, O, S;

            function _() {
                O && O(), S && S(), o.cancelToken && o.cancelToken.unsubscribe(x), o.signal && o.signal.removeEventListener("abort", x)
            }
            let M = new XMLHttpRequest;
            M.open(o.method.toUpperCase(), o.url, !0), M.timeout = o.timeout;

            function B() {
                if (!M) return;
                const G = gt.from("getAllResponseHeaders" in M && M.getAllResponseHeaders()),
                    V = {
                        data: !m || m === "text" || m === "json" ? M.responseText : M.response,
                        status: M.status,
                        statusText: M.statusText,
                        headers: G,
                        config: i,
                        request: M
                    };
                Tg(function(te) {
                    s(te), _()
                }, function(te) {
                    r(te), _()
                }, V), M = null
            }
            "onloadend" in M ? M.onloadend = B : M.onreadystatechange = function() {
                !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(B)
            }, M.onabort = function() {
                M && (r(new fe("Request aborted", fe.ECONNABORTED, i, M)), M = null)
            }, M.onerror = function() {
                r(new fe("Network Error", fe.ERR_NETWORK, i, M)), M = null
            }, M.ontimeout = function() {
                let K = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
                const V = o.transitional || Rg;
                o.timeoutErrorMessage && (K = o.timeoutErrorMessage), r(new fe(K, V.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED, i, M)), M = null
            }, f === void 0 && d.setContentType(null), "setRequestHeader" in M && L.forEach(d.toJSON(), function(K, V) {
                M.setRequestHeader(V, K)
            }), L.isUndefined(o.withCredentials) || (M.withCredentials = !!o.withCredentials), m && m !== "json" && (M.responseType = o.responseType), h && ([N, S] = Ps(h, !0), M.addEventListener("progress", N)), y && M.upload && ([v, O] = Ps(y), M.upload.addEventListener("progress", v), M.upload.addEventListener("loadend", O)), (o.cancelToken || o.signal) && (x = G => {
                M && (r(!G || G.type ? new al(null, i, M) : G), M.abort(), M = null)
            }, o.cancelToken && o.cancelToken.subscribe(x), o.signal && (o.signal.aborted ? x() : o.signal.addEventListener("abort", x)));
            const k = Nv(o.url);
            if (k && lt.protocols.indexOf(k) === -1) {
                r(new fe("Unsupported protocol " + k + ":", fe.ERR_BAD_REQUEST, i));
                return
            }
            M.send(f || null)
        })
    },
    Mv = (i, l) => {
        const {
            length: s
        } = i = i ? i.filter(Boolean) : [];
        if (l || s) {
            let r = new AbortController,
                o;
            const f = function(h) {
                if (!o) {
                    o = !0, m();
                    const x = h instanceof Error ? h : this.reason;
                    r.abort(x instanceof fe ? x : new al(x instanceof Error ? x.message : x))
                }
            };
            let d = l && setTimeout(() => {
                d = null, f(new fe(`timeout ${l} of ms exceeded`, fe.ETIMEDOUT))
            }, l);
            const m = () => {
                i && (d && clearTimeout(d), d = null, i.forEach(h => {
                    h.unsubscribe ? h.unsubscribe(f) : h.removeEventListener("abort", f)
                }), i = null)
            };
            i.forEach(h => h.addEventListener("abort", f));
            const {
                signal: y
            } = r;
            return y.unsubscribe = () => L.asap(m), y
        }
    },
    zv = function*(i, l) {
        let s = i.byteLength;
        if (s < l) {
            yield i;
            return
        }
        let r = 0,
            o;
        for (; r < s;) o = r + l, yield i.slice(r, o), r = o
    },
    Lv = async function*(i, l) {
        for await (const s of Uv(i)) yield* zv(s, l)
    }, Uv = async function*(i) {
        if (i[Symbol.asyncIterator]) {
            yield* i;
            return
        }
        const l = i.getReader();
        try {
            for (;;) {
                const {
                    done: s,
                    value: r
                } = await l.read();
                if (s) break;
                yield r
            }
        } finally {
            await l.cancel()
        }
    }, wm = (i, l, s, r) => {
        const o = Lv(i, l);
        let f = 0,
            d, m = y => {
                d || (d = !0, r && r(y))
            };
        return new ReadableStream({
            async pull(y) {
                try {
                    const {
                        done: h,
                        value: x
                    } = await o.next();
                    if (h) {
                        m(), y.close();
                        return
                    }
                    let v = x.byteLength;
                    if (s) {
                        let N = f += v;
                        s(N)
                    }
                    y.enqueue(new Uint8Array(x))
                } catch (h) {
                    throw m(h), h
                }
            },
            cancel(y) {
                return m(y), o.return()
            }
        }, {
            highWaterMark: 2
        })
    }, Is = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", _g = Is && typeof ReadableStream == "function", kv = Is && (typeof TextEncoder == "function" ? (i => l => i.encode(l))(new TextEncoder) : async i => new Uint8Array(await new Response(i).arrayBuffer())), Dg = (i, ...l) => {
        try {
            return !!i(...l)
        } catch {
            return !1
        }
    }, Hv = _g && Dg(() => {
        let i = !1;
        const l = new Request(lt.origin, {
            body: new ReadableStream,
            method: "POST",
            get duplex() {
                return i = !0, "half"
            }
        }).headers.has("Content-Type");
        return i && !l
    }), Em = 64 * 1024, Ho = _g && Dg(() => L.isReadableStream(new Response("").body)), Ys = {
        stream: Ho && (i => i.body)
    };
Is && (i => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(l => {
        !Ys[l] && (Ys[l] = L.isFunction(i[l]) ? s => s[l]() : (s, r) => {
            throw new fe(`Response type '${l}' is not supported`, fe.ERR_NOT_SUPPORT, r)
        })
    })
})(new Response);
const Bv = async i => {
    if (i == null) return 0;
    if (L.isBlob(i)) return i.size;
    if (L.isSpecCompliantForm(i)) return (await new Request(lt.origin, {
        method: "POST",
        body: i
    }).arrayBuffer()).byteLength;
    if (L.isArrayBufferView(i) || L.isArrayBuffer(i)) return i.byteLength;
    if (L.isURLSearchParams(i) && (i = i + ""), L.isString(i)) return (await kv(i)).byteLength
}, qv = async (i, l) => {
    const s = L.toFiniteNumber(i.getContentLength());
    return s ?? Bv(l)
}, Pv = Is && (async i => {
    let {
        url: l,
        method: s,
        data: r,
        signal: o,
        cancelToken: f,
        timeout: d,
        onDownloadProgress: m,
        onUploadProgress: y,
        responseType: h,
        headers: x,
        withCredentials: v = "same-origin",
        fetchOptions: N
    } = Ag(i);
    h = h ? (h + "").toLowerCase() : "text";
    let O = Mv([o, f && f.toAbortSignal()], d),
        S;
    const _ = O && O.unsubscribe && (() => {
        O.unsubscribe()
    });
    let M;
    try {
        if (y && Hv && s !== "get" && s !== "head" && (M = await qv(x, r)) !== 0) {
            let V = new Request(l, {
                    method: "POST",
                    body: r,
                    duplex: "half"
                }),
                de;
            if (L.isFormData(r) && (de = V.headers.get("content-type")) && x.setContentType(de), V.body) {
                const [te, ne] = xm(M, Ps(vm(y)));
                r = wm(V.body, Em, te, ne)
            }
        }
        L.isString(v) || (v = v ? "include" : "omit");
        const B = "credentials" in Request.prototype;
        S = new Request(l, {
            ...N,
            signal: O,
            method: s.toUpperCase(),
            headers: x.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: B ? v : void 0
        });
        let k = await fetch(S);
        const G = Ho && (h === "stream" || h === "response");
        if (Ho && (m || G && _)) {
            const V = {};
            ["status", "statusText", "headers"].forEach(F => {
                V[F] = k[F]
            });
            const de = L.toFiniteNumber(k.headers.get("content-length")),
                [te, ne] = m && xm(de, Ps(vm(m), !0)) || [];
            k = new Response(wm(k.body, Em, te, () => {
                ne && ne(), _ && _()
            }), V)
        }
        h = h || "text";
        let K = await Ys[L.findKey(Ys, h) || "text"](k, i);
        return !G && _ && _(), await new Promise((V, de) => {
            Tg(V, de, {
                data: K,
                headers: gt.from(k.headers),
                status: k.status,
                statusText: k.statusText,
                config: i,
                request: S
            })
        })
    } catch (B) {
        throw _ && _(), B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(new fe("Network Error", fe.ERR_NETWORK, i, S), {
            cause: B.cause || B
        }) : fe.from(B, B && B.code, i, S)
    }
}), Bo = {
    http: nv,
    xhr: Dv,
    fetch: Pv
};
L.forEach(Bo, (i, l) => {
    if (i) {
        try {
            Object.defineProperty(i, "name", {
                value: l
            })
        } catch {}
        Object.defineProperty(i, "adapterName", {
            value: l
        })
    }
});
const Nm = i => `- ${i}`,
    Yv = i => L.isFunction(i) || i === null || i === !1,
    Mg = {
        getAdapter: i => {
            i = L.isArray(i) ? i : [i];
            const {
                length: l
            } = i;
            let s, r;
            const o = {};
            for (let f = 0; f < l; f++) {
                s = i[f];
                let d;
                if (r = s, !Yv(s) && (r = Bo[(d = String(s)).toLowerCase()], r === void 0)) throw new fe(`Unknown adapter '${d}'`);
                if (r) break;
                o[d || "#" + f] = r
            }
            if (!r) {
                const f = Object.entries(o).map(([m, y]) => `adapter ${m} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build"));
                let d = l ? f.length > 1 ? `since :
` + f.map(Nm).join(`
`) : " " + Nm(f[0]) : "as no adapter specified";
                throw new fe("There is no suitable adapter to dispatch the request " + d, "ERR_NOT_SUPPORT")
            }
            return r
        },
        adapters: Bo
    };

function jo(i) {
    if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted) throw new al(null, i)
}

function Rm(i) {
    return jo(i), i.headers = gt.from(i.headers), i.data = Ro.call(i, i.transformRequest), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), Mg.getAdapter(i.adapter || bi.adapter)(i).then(function(r) {
        return jo(i), r.data = Ro.call(i, i.transformResponse, r), r.headers = gt.from(r.headers), r
    }, function(r) {
        return Og(r) || (jo(i), r && r.response && (r.response.data = Ro.call(i, i.transformResponse, r.response), r.response.headers = gt.from(r.response.headers))), Promise.reject(r)
    })
}
const zg = "1.9.0",
    er = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, l) => {
    er[i] = function(r) {
        return typeof r === i || "a" + (l < 1 ? "n " : " ") + i
    }
});
const jm = {};
er.transitional = function(l, s, r) {
    function o(f, d) {
        return "[Axios v" + zg + "] Transitional option '" + f + "'" + d + (r ? ". " + r : "")
    }
    return (f, d, m) => {
        if (l === !1) throw new fe(o(d, " has been removed" + (s ? " in " + s : "")), fe.ERR_DEPRECATED);
        return s && !jm[d] && (jm[d] = !0, console.warn(o(d, " has been deprecated since v" + s + " and will be removed in the near future"))), l ? l(f, d, m) : !0
    }
};
er.spelling = function(l) {
    return (s, r) => (console.warn(`${r} is likely a misspelling of ${l}`), !0)
};

function Gv(i, l, s) {
    if (typeof i != "object") throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(i);
    let o = r.length;
    for (; o-- > 0;) {
        const f = r[o],
            d = l[f];
        if (d) {
            const m = i[f],
                y = m === void 0 || d(m, f, i);
            if (y !== !0) throw new fe("option " + f + " must be " + y, fe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (s !== !0) throw new fe("Unknown option " + f, fe.ERR_BAD_OPTION)
    }
}
const Bs = {
        assertOptions: Gv,
        validators: er
    },
    Zt = Bs.validators;
let oa = class {
    constructor(l) {
        this.defaults = l || {}, this.interceptors = {
            request: new ym,
            response: new ym
        }
    }
    async request(l, s) {
        try {
            return await this._request(l, s)
        } catch (r) {
            if (r instanceof Error) {
                let o = {};
                Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error;
                const f = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? f && !String(r.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + f) : r.stack = f
                } catch {}
            }
            throw r
        }
    }
    _request(l, s) {
        typeof l == "string" ? (s = s || {}, s.url = l) : s = l || {}, s = ca(this.defaults, s);
        const {
            transitional: r,
            paramsSerializer: o,
            headers: f
        } = s;
        r !== void 0 && Bs.assertOptions(r, {
            silentJSONParsing: Zt.transitional(Zt.boolean),
            forcedJSONParsing: Zt.transitional(Zt.boolean),
            clarifyTimeoutError: Zt.transitional(Zt.boolean)
        }, !1), o != null && (L.isFunction(o) ? s.paramsSerializer = {
            serialize: o
        } : Bs.assertOptions(o, {
            encode: Zt.function,
            serialize: Zt.function
        }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Bs.assertOptions(s, {
            baseUrl: Zt.spelling("baseURL"),
            withXsrfToken: Zt.spelling("withXSRFToken")
        }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
        let d = f && L.merge(f.common, f[s.method]);
        f && L.forEach(["delete", "get", "head", "post", "put", "patch", "common"], S => {
            delete f[S]
        }), s.headers = gt.concat(d, f);
        const m = [];
        let y = !0;
        this.interceptors.request.forEach(function(_) {
            typeof _.runWhen == "function" && _.runWhen(s) === !1 || (y = y && _.synchronous, m.unshift(_.fulfilled, _.rejected))
        });
        const h = [];
        this.interceptors.response.forEach(function(_) {
            h.push(_.fulfilled, _.rejected)
        });
        let x, v = 0,
            N;
        if (!y) {
            const S = [Rm.bind(this), void 0];
            for (S.unshift.apply(S, m), S.push.apply(S, h), N = S.length, x = Promise.resolve(s); v < N;) x = x.then(S[v++], S[v++]);
            return x
        }
        N = m.length;
        let O = s;
        for (v = 0; v < N;) {
            const S = m[v++],
                _ = m[v++];
            try {
                O = S(O)
            } catch (M) {
                _.call(this, M);
                break
            }
        }
        try {
            x = Rm.call(this, O)
        } catch (S) {
            return Promise.reject(S)
        }
        for (v = 0, N = h.length; v < N;) x = x.then(h[v++], h[v++]);
        return x
    }
    getUri(l) {
        l = ca(this.defaults, l);
        const s = Cg(l.baseURL, l.url, l.allowAbsoluteUrls);
        return Ng(s, l.params, l.paramsSerializer)
    }
};
L.forEach(["delete", "get", "head", "options"], function(l) {
    oa.prototype[l] = function(s, r) {
        return this.request(ca(r || {}, {
            method: l,
            url: s,
            data: (r || {}).data
        }))
    }
});
L.forEach(["post", "put", "patch"], function(l) {
    function s(r) {
        return function(f, d, m) {
            return this.request(ca(m || {}, {
                method: l,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: f,
                data: d
            }))
        }
    }
    oa.prototype[l] = s(), oa.prototype[l + "Form"] = s(!0)
});
let Vv = class Lg {
    constructor(l) {
        if (typeof l != "function") throw new TypeError("executor must be a function.");
        let s;
        this.promise = new Promise(function(f) {
            s = f
        });
        const r = this;
        this.promise.then(o => {
            if (!r._listeners) return;
            let f = r._listeners.length;
            for (; f-- > 0;) r._listeners[f](o);
            r._listeners = null
        }), this.promise.then = o => {
            let f;
            const d = new Promise(m => {
                r.subscribe(m), f = m
            }).then(o);
            return d.cancel = function() {
                r.unsubscribe(f)
            }, d
        }, l(function(f, d, m) {
            r.reason || (r.reason = new al(f, d, m), s(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(l) {
        if (this.reason) {
            l(this.reason);
            return
        }
        this._listeners ? this._listeners.push(l) : this._listeners = [l]
    }
    unsubscribe(l) {
        if (!this._listeners) return;
        const s = this._listeners.indexOf(l);
        s !== -1 && this._listeners.splice(s, 1)
    }
    toAbortSignal() {
        const l = new AbortController,
            s = r => {
                l.abort(r)
            };
        return this.subscribe(s), l.signal.unsubscribe = () => this.unsubscribe(s), l.signal
    }
    static source() {
        let l;
        return {
            token: new Lg(function(o) {
                l = o
            }),
            cancel: l
        }
    }
};

function Xv(i) {
    return function(s) {
        return i.apply(null, s)
    }
}

function $v(i) {
    return L.isObject(i) && i.isAxiosError === !0
}
const qo = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(qo).forEach(([i, l]) => {
    qo[l] = i
});

function Ug(i) {
    const l = new oa(i),
        s = dg(oa.prototype.request, l);
    return L.extend(s, oa.prototype, l, {
        allOwnKeys: !0
    }), L.extend(s, l, null, {
        allOwnKeys: !0
    }), s.create = function(o) {
        return Ug(ca(i, o))
    }, s
}
const ve = Ug(bi);
ve.Axios = oa;
ve.CanceledError = al;
ve.CancelToken = Vv;
ve.isCancel = Og;
ve.VERSION = zg;
ve.toFormData = Ws;
ve.AxiosError = fe;
ve.Cancel = ve.CanceledError;
ve.all = function(l) {
    return Promise.all(l)
};
ve.spread = Xv;
ve.isAxiosError = $v;
ve.mergeConfig = ca;
ve.AxiosHeaders = gt;
ve.formToJSON = i => jg(L.isHTMLForm(i) ? new FormData(i) : i);
ve.getAdapter = Mg.getAdapter;
ve.HttpStatusCode = qo;
ve.default = ve;
const {
    Axios: t2,
    AxiosError: n2,
    CanceledError: a2,
    isCancel: l2,
    CancelToken: i2,
    VERSION: s2,
    all: r2,
    Cancel: u2,
    isAxiosError: o2,
    spread: c2,
    toFormData: f2,
    AxiosHeaders: d2,
    HttpStatusCode: h2,
    formToJSON: m2,
    getAdapter: g2,
    mergeConfig: p2
} = ve, kg = {
    api: {
        baseUrl: "https://api.ssgwoo.com"
    }
}, Pt = kg.api.baseUrl, at = pi(i => ({
    posts: [],
    loading: !1,
    error: null,
    addPost: async l => {
        try {
            i({
                loading: !0,
                error: null
            });
            const s = await ve.post(`${Pt}/api/v1/posts`, l);
            i(r => ({
                posts: r.posts ? [...r.posts, s.data] : [s.data],
                loading: !1
            }))
        } catch (s) {
            const r = s instanceof Error ? s.message : "게시글 작성에 실패했습니다.";
            throw i({
                error: r,
                loading: !1
            }), s
        }
    },
    getPostList: async (l, s) => {
        try {
            i({
                loading: !0,
                error: null
            });
            const r = await ve.get(`${Pt}/api/v1/posts`, {
                params: {
                    limit: l,
                    cursor: s
                }
            });
            return i({
                posts: r.data.data.posts,
                loading: !1
            }), r.data.data.posts
        } catch (r) {
            const o = r instanceof Error ? r.message : "게시글 목록을 불러오는데 실패했습니다.";
            throw i({
                error: o,
                loading: !1
            }), r
        }
    },
    getPostById: async l => {
        try {
            i({
                loading: !0,
                error: null
            });
            const s = await ve.get(`${Pt}/api/v1/posts/${l}`);
            return i({
                loading: !1
            }), s.data.data
        } catch (s) {
            const r = s instanceof Error ? s.message : "게시글을 불러오는데 실패했습니다.";
            throw i({
                error: r,
                loading: !1
            }), s
        }
    },
    addLike: async l => {
        try {
            i({
                loading: !0,
                error: null
            }), i(s => ({
                posts: s.posts.map(r => r.id === l ? {
                    ...r,
                    likesCount: r.likesCount + 1
                } : r),
                loading: !1
            })), await ve.post(`${Pt}/api/v1/posts/${l}/like`)
        } catch (s) {
            i(o => ({
                posts: o.posts.map(f => f.id === l ? {
                    ...f,
                    likesCount: f.likesCount - 1
                } : f),
                loading: !1
            }));
            const r = s instanceof Error ? s.message : "좋아요 처리에 실패했습니다.";
            throw i({
                error: r
            }), s
        }
    },
    deletePost: async l => {
        try {
            return i({
                loading: !0,
                error: null
            }), await ve.delete(`${Pt}/api/v1/posts/${l}`), i(s => ({
                posts: s.posts.filter(r => r.id !== l),
                loading: !1
            })), !0
        } catch (s) {
            const r = s instanceof Error ? s.message : "게시글 삭제에 실패했습니다.";
            return i({
                error: r,
                loading: !1
            }), !1
        }
    },
    editPost: async (l, s) => {
        try {
            return i({
                loading: !0,
                error: null
            }), await ve.patch(`${Pt}/api/v1/posts/${l}`, s), i(r => ({
                posts: r.posts.map(o => o.id === l ? {
                    ...o,
                    ...s
                } : o),
                loading: !1
            })), !0
        } catch (r) {
            const o = r instanceof Error ? r.message : "게시글 수정에 실패했습니다.";
            return i({
                error: o,
                loading: !1
            }), !1
        }
    },
    verifyPostPassword: async (l, s) => {
        try {
            return (await ve.post(`${Pt}/api/v1/posts/${l}/password`, {
                password: s
            })).data
        } catch (r) {
            return console.error("비밀번호 확인 실패:", r instanceof Error ? r.message : "알 수 없는 오류"), !1
        }
    }
})), ri = pi(() => ({
    addComment: async (i, l) => {
        try {
            const s = await ve.post(`${Pt}/api/v1/posts/${i}/comments`, l);
            if (s.status >= 200 && s.status < 300) {
                const r = at.getState().posts;
                return at.setState({
                    posts: r.map(o => o.id === i ? {
                        ...o,
                        comments: [...o.comments, s.data],
                        commentsCount: o.commentsCount + 1
                    } : o)
                }), !0
            }
            return !1
        } catch (s) {
            return console.error("댓글 작성 실패:", s instanceof Error ? s.message : "알 수 없는 오류"), !1
        }
    },
    deleteComment: async (i, l) => {
        try {
            const s = await ve.delete(`${Pt}/api/v1/posts/${i}/comments/${l}`);
            if (s.status >= 200 && s.status < 300) {
                const r = at.getState().posts;
                return at.setState({
                    posts: r.map(o => o.id === i ? {
                        ...o,
                        comments: o.comments.filter(f => f.id !== l),
                        commentsCount: o.commentsCount - 1
                    } : o)
                }), !0
            }
            return !1
        } catch (s) {
            return console.error("댓글 삭제 실패:", s instanceof Error ? s.message : "알 수 없는 오류"), !1
        }
    },
    editComment: async (i, l, s) => {
        try {
            const r = await ve.patch(`${Pt}/api/v1/posts/${i}/comments/${l}`, {
                content: s
            });
            if (r.status >= 200 && r.status < 300) {
                if (await at.getState().getPostById(i)) {
                    const f = at.getState().posts;
                    f && at.setState({
                        posts: f.map(d => d.id === i ? {
                            ...d,
                            comments: d.comments.map(m => m.id === l ? {
                                ...m,
                                content: s
                            } : m)
                        } : d)
                    })
                }
                return !0
            }
            return !1
        } catch (r) {
            return console.error("댓글 수정 실패:", r instanceof Error ? r.message : "알 수 없는 오류"), !1
        }
    },
    verifyCommentPassword: async (i, l, s) => {
        try {
            const r = await ve.post(`${Pt}/api/v1/posts/${i}/comments/${l}/password`, {
                password: s
            });
            return r.status >= 200 && r.status < 300 ? r.data : !1
        } catch (r) {
            return console.error("댓글 비밀번호 확인 실패:", r instanceof Error ? r.message : "알 수 없는 오류"), !1
        }
    }
}));

function Hg() {
    const i = ["from-blue-400 to-blue-600", "from-blue-500 to-indigo-600", "from-indigo-400 to-purple-500", "from-blue-400 to-purple-400", "from-indigo-500 to-purple-600"];
    return i[Math.floor(Math.random() * i.length)]
}

function Qv() {
    const {
        t: i
    } = ut(), l = at(O => O.getPostList), [s, r] = T.useState([]), [o, f] = T.useState(null), [d, m] = T.useState(!1), y = T.useRef(null), h = 5, x = T.useRef(!1), [v, N] = T.useState(!1);
    return T.useEffect(() => {
        x.current = d
    }, [d]), T.useEffect(() => {
        let O;
        return d ? N(!0) : O = setTimeout(() => N(!1), 400), () => clearTimeout(O)
    }, [d]), T.useEffect(() => {
        (async () => {
            m(!0);
            try {
                const S = await l(h, 0);
                r(S || []), S && S.length > 0 ? f(S[S.length - 1].id) : f(null)
            } catch (S) {
                console.error("초기 게시글 로딩 실패:", S), r([]), f(null)
            } finally {
                m(!1)
            }
        })()
    }, [l]), T.useEffect(() => {
        if (!y.current) return;
        const O = new IntersectionObserver(async S => {
            if (S[0].isIntersecting && o !== null && !x.current) {
                m(!0), x.current = !0;
                try {
                    const _ = await l(h, o);
                    _ && _.length > 0 ? (r(M => [...M, ..._]), f(_[_.length - 1].id)) : f(null)
                } catch (_) {
                    console.error("추가 게시글 로딩 실패:", _)
                } finally {
                    m(!1), x.current = !1
                }
            }
        }, {
            threshold: .5,
            rootMargin: "100px"
        });
        return O.observe(y.current), () => {
            O.disconnect()
        }
    }, [y.current, o, l, s]), p.jsxs("div", {
        className: "max-w-md mx-auto flex flex-col gap-4 relative",
        children: [p.jsxs("div", {
            className: "flex justify-between items-center mb-0",
            children: [p.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: i("communityPage.title")
            }), p.jsxs("div", {
                className: "flex gap-2",
                children: [p.jsx(Rt, {
                    to: "/community/rules",
                    className: "bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition text-sm shadow-md hover:shadow-lg active:shadow-sm active:translate-y-0.5",
                    children: i("communityPage.rules")
                }), p.jsx(Rt, {
                    to: "/community/write",
                    className: "bg-blue-500 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-blue-600 transition text-sm shadow-md hover:shadow-lg active:shadow-sm active:translate-y-0.5",
                    children: i("communityPage.write")
                })]
            })]
        }), s.length === 0 && !d && p.jsxs("div", {
            className: "text-center py-6 text-gray-500 bg-white rounded-2xl shadow-md",
            children: [p.jsx("p", {
                className: "text-lg mb-1",
                children: i("communityPage.noPosts.title")
            }), p.jsx("p", {
                className: "text-sm",
                children: i("communityPage.noPosts.subtitle")
            })]
        }), s.map((O, S) => p.jsxs(Rt, {
            to: `/community/${O.id}`,
            ref: S === s.length - 1 ? y : null,
            className: "block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 hover:border-pink-100",
            children: [p.jsxs("div", {
                className: "flex items-center gap-3 mb-2",
                children: [p.jsx("div", {
                    className: `w-8 h-8 rounded-full bg-gradient-to-br ${Hg()} flex items-center justify-center text-white font-bold text-base shadow-lg transform hover:scale-105 transition-transform duration-300`,
                    children: O.nickname[0]
                }), p.jsxs("div", {
                    className: "flex flex-col",
                    children: [p.jsx("span", {
                        className: "font-semibold text-gray-800",
                        children: O.nickname
                    }), p.jsx("span", {
                        className: "text-xs text-gray-400",
                        children: new Date(O.createdAt).toLocaleDateString("ko-KR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    })]
                })]
            }), p.jsx("div", {
                className: "text-lg font-bold text-gray-900 mb-1 hover:text-pink-600 transition-colors duration-300",
                children: O.title
            }), p.jsx("div", {
                className: "text-gray-600 mb-2 line-clamp-2 break-words overflow-hidden leading-relaxed text-sm",
                children: O.content
            }), p.jsx("div", {
                className: "flex justify-between items-center text-gray-400 text-xs mt-2 pt-2 border-t border-gray-100",
                children: p.jsxs("div", {
                    className: "flex gap-3",
                    children: [p.jsxs("span", {
                        className: "flex items-center gap-1 hover:text-pink-500 transition-colors duration-300",
                        children: [p.jsx("span", {
                            className: "text-sm",
                            children: "❤️"
                        }), p.jsx("span", {
                            children: O.likesCount
                        })]
                    }), p.jsxs("span", {
                        className: "flex items-center gap-1 hover:text-blue-500 transition-colors duration-300",
                        children: [p.jsx("span", {
                            className: "text-sm",
                            children: "💬"
                        }), p.jsx("span", {
                            children: O.commentsCount
                        })]
                    })]
                })
            })]
        }, O.id)), v && p.jsxs("div", {
            className: "flex justify-center py-4",
            children: [p.jsxs("svg", {
                className: "animate-spin h-5 w-5 text-blue-500",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [p.jsx("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }), p.jsx("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8v8z"
                })]
            }), p.jsx("span", {
                className: "ml-2 text-sm text-gray-500",
                children: i("communityPage.loading")
            })]
        })]
    })
}

function Kv({
    open: i,
    onClose: l,
    onSubmit: s,
    label: r
}) {
    const {
        t: o
    } = ut(), [f, d] = T.useState("");
    return i ? p.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
        children: p.jsxs("div", {
            className: "bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center",
            children: [p.jsx("h3", {
                className: "text-lg font-bold mb-4 text-gray-800",
                children: r
            }), p.jsx("input", {
                type: "password",
                value: f,
                onChange: m => d(m.target.value),
                className: "w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300",
                placeholder: o("communityPage.detailPage.passwordModal.placeholder"),
                maxLength: 4,
                autoFocus: !0
            }), p.jsxs("div", {
                className: "flex gap-2 w-full",
                children: [p.jsx("button", {
                    onClick: () => {
                        d(""), l()
                    },
                    className: "flex-1 py-2 rounded bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition",
                    children: o("communityPage.detailPage.cancel")
                }), p.jsx("button", {
                    onClick: () => {
                        s(f), d(""), l()
                    },
                    className: "flex-1 py-2 rounded bg-gradient-to-br from-pink-500 to-yellow-400 text-white font-bold hover:scale-105 transition",
                    children: o("communityPage.detailPage.submit")
                })]
            })]
        })
    }) : null
}

function Zv({
    post: i,
    onFinish: l,
    onCancel: s
}) {
    const {
        t: r
    } = ut(), o = () => {
        const f = document.querySelector("input").value,
            d = document.querySelector("textarea").value;
        if (!f.trim() || !d.trim()) {
            alert(r("community.detailPage.error.required"));
            return
        }
        l(f, d)
    };
    return p.jsxs("div", {
        className: "space-y-4",
        children: [p.jsx("input", {
            defaultValue: i.title,
            className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition",
            placeholder: r("communityPage.detailPage.form.titlePlaceholder"),
            required: !0
        }), p.jsx("textarea", {
            defaultValue: i.content,
            className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-lg min-h-[8rem] resize-y focus:outline-none focus:ring-2 focus:ring-blue-200 transition",
            placeholder: r("communityPage.detailPage.form.contentPlaceholder"),
            required: !0
        }), p.jsxs("div", {
            className: "flex gap-2",
            children: [p.jsx("button", {
                onClick: o,
                className: "flex-1 py-2 bg-gradient-to-br from-pink-500 to-yellow-400 text-white rounded-full font-bold shadow hover:scale-105 transition",
                children: r("communityPage.detailPage.edit")
            }), p.jsx("button", {
                onClick: s,
                className: "flex-1 py-2 bg-gray-200 text-gray-700 rounded-full font-bold shadow hover:bg-gray-300 transition",
                children: r("communityPage.detailPage.cancel")
            })]
        }), p.jsx("div", {
            className: "h-4"
        })]
    })
}

function Jv({
    comment: i,
    isEditing: l,
    editingContent: s,
    onContentChange: r,
    onEdit: o,
    onDelete: f,
    onFinishEdit: d,
    onCancelEdit: m
}) {
    var O;
    const {
        t: y
    } = ut(), [h, x] = T.useState(!1), v = ri(S => S.editComment), N = async () => {
        try {
            await v(i.postId, i.id, s) && (d(), alert(y("communityPage.detailPage.comment.editSuccess")))
        } catch (S) {
            console.error("댓글 수정 실패:", S), alert(y("communityPage.detailPage.comment.error.editFailed"))
        }
    };
    return p.jsxs("li", {
        className: "bg-gray-50 rounded-lg p-3 relative",
        children: [p.jsxs("div", {
            className: "flex items-center gap-2 mb-1",
            children: [p.jsx("span", {
                className: "font-semibold text-pink-500",
                children: i.nickname
            }), p.jsx("span", {
                className: "text-xs text-gray-400",
                children: (O = i.createdAt) == null ? void 0 : O.slice(0, 10)
            }), p.jsxs("div", {
                className: "ml-auto relative",
                children: [p.jsx("button", {
                    onClick: () => x(!h),
                    className: "px-2 py-1 text-gray-500 hover:text-gray-900 text-xl",
                    children: "⋮"
                }), h && p.jsxs("div", {
                    className: "absolute right-0 mt-2 w-24 bg-white border rounded shadow z-10",
                    children: [p.jsx("button", {
                        onClick: () => {
                            x(!1), o()
                        },
                        className: "block w-full px-4 py-2 text-left hover:bg-gray-100",
                        children: y("communityPage.detailPage.comment.edit")
                    }), p.jsx("button", {
                        onClick: () => {
                            x(!1), f()
                        },
                        className: "block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100",
                        children: y("communityPage.detailPage.comment.delete")
                    })]
                })]
            })]
        }), l ? p.jsxs("div", {
            className: "space-y-2",
            children: [p.jsx("textarea", {
                value: s,
                onChange: S => r(S.target.value),
                className: "w-full border border-gray-300 rounded-xl px-3 py-2 text-sm min-h-[3rem] resize-y focus:outline-none focus:ring-2 focus:ring-pink-200"
            }), p.jsxs("div", {
                className: "flex gap-2",
                children: [p.jsx("button", {
                    onClick: N,
                    className: "flex-1 py-1 bg-gradient-to-br from-pink-500 to-yellow-400 text-white rounded-full font-bold shadow hover:scale-105 transition",
                    children: y("communityPage.detailPage.comment.edit")
                }), p.jsx("button", {
                    onClick: m,
                    className: "flex-1 py-1 bg-gray-200 text-gray-700 rounded-full font-bold shadow hover:bg-gray-300 transition",
                    children: y("communityPage.detailPage.cancel")
                })]
            })]
        }) : p.jsx("div", {
            className: "text-gray-700 text-sm whitespace-pre-line",
            children: i.content
        })]
    })
}

function Fv({
    comments: i,
    editingCommentId: l,
    editingCommentContent: s,
    onContentChange: r,
    onEdit: o,
    onDelete: f,
    onFinishEdit: d,
    onCancelEdit: m
}) {
    const {
        t: y
    } = ut();
    return p.jsxs("div", {
        className: "mb-6",
        children: [p.jsx("h3", {
            className: "font-bold text-gray-800 mb-2",
            children: y("communityPage.detailPage.comment.title")
        }), i.length === 0 && p.jsx("div", {
            className: "text-gray-400 text-sm",
            children: y("communityPage.detailPage.comment.noComments")
        }), p.jsx("ul", {
            className: "space-y-3",
            children: i.map(h => p.jsx(Jv, {
                comment: h,
                isEditing: l === h.id,
                editingContent: s,
                onContentChange: r,
                onEdit: () => o(h.id),
                onDelete: () => f(h.id),
                onFinishEdit: () => d(h.id),
                onCancelEdit: m
            }, h.id))
        })]
    })
}

function Wv({
    nickname: i,
    password: l,
    content: s,
    onNicknameChange: r,
    onPasswordChange: o,
    onContentChange: f,
    onSubmit: d
}) {
    const {
        t: m
    } = ut();
    return p.jsxs("form", {
        onSubmit: d,
        className: "space-y-3 mb-4",
        children: [p.jsxs("div", {
            className: "w-full flex flex-col sm:flex-row gap-2",
            children: [p.jsx("input", {
                value: i,
                onChange: y => r(y.target.value),
                name: "comment-nickname",
                className: "flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-200",
                placeholder: m("communityPage.detailPage.comment.nickname"),
                required: !0
            }), p.jsx("input", {
                value: l,
                onChange: y => o(y.target.value),
                name: "comment-password",
                type: "password",
                maxLength: 4,
                pattern: "\\d{4}",
                className: "flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200",
                placeholder: m("communityPage.detailPage.comment.password"),
                required: !0
            })]
        }), p.jsx("textarea", {
            value: s,
            onChange: y => f(y.target.value),
            name: "comment-content",
            className: "w-full border border-gray-300 rounded-xl px-3 py-2 text-sm min-h-[3rem] resize-y focus:outline-none focus:ring-2 focus:ring-pink-200",
            placeholder: m("communityPage.detailPage.comment.placeholder"),
            required: !0
        }), p.jsx("button", {
            type: "submit",
            className: "w-full py-2 bg-gradient-to-br from-pink-500 to-yellow-400 text-white rounded-full font-bold shadow hover:scale-105 transition",
            children: m("communityPage.detailPage.comment.submit")
        })]
    })
}

function Iv() {
    var Lt;
    const {
        t: i
    } = ut(), {
        id: l
    } = eb(), s = Number(l), r = ri(ee => ee.addComment), o = at(ee => ee.deletePost), f = at(ee => ee.editPost), d = ri(ee => ee.deleteComment), m = ri(ee => ee.editComment), y = at(ee => ee.addLike), h = Vo(), [x, v] = T.useState(""), [N, O] = T.useState(""), [S, _] = T.useState(""), [M, B] = T.useState(!1), [k, G] = T.useState({
        open: !1,
        type: null
    }), [K, V] = T.useState(!1), [de, te] = T.useState(null), [ne, F] = T.useState(""), [re, Ee] = T.useState(!1), Ae = at(ee => ee.getPostById), He = at(ee => ee.posts), [ce, je] = T.useState(null), [U, X] = T.useState(!0), J = at(ee => ee.verifyPostPassword), ie = ri(ee => ee.verifyCommentPassword);
    T.useEffect(() => {
        Ae(s).then(ee => {
            je(ee ?? null)
        }).catch(() => je(null)).finally(() => X(!1))
    }, [s, He, Ae]), T.useEffect(() => {
        const ee = JSON.parse(sessionStorage.getItem("likedPosts") || "[]");
        Ee(ee.includes(s))
    }, [s]);
    const E = () => {
        const ee = JSON.parse(sessionStorage.getItem("likedPosts") || "[]");
        ee.includes(s) || (sessionStorage.setItem("likedPosts", JSON.stringify([...ee, s])), Ee(!0), ce && je({
            ...ce,
            likesCount: ce.likesCount + 1
        }), y(s))
    };
    if (U) return p.jsx("div", {
        children: i("communityPage.detailPage.loading")
    });
    if (!ce) return p.jsx("div", {
        children: i("communityPage.detailPage.notFound")
    });
    async function H(ee) {
        if (ee.preventDefault(), !x.trim() || !N.trim() || !S.trim()) {
            alert(i("communityPage.detailPage.comment.error.required"));
            return
        }
        try {
            await r(s, {
                nickname: x,
                password: N,
                content: S
            }), v(""), O(""), _("");
            try {
                const ze = await Ae(s);
                je(ze ?? null)
            } catch (ze) {
                console.error("게시글 새로고침 실패:", ze)
            }
        } catch (ze) {
            console.error("댓글 작성 실패:", ze), alert(i("communityPage.detailPage.comment.error.submitFailed"))
        }
    }
    async function Q() {
        try {
            await o(s), alert(i("communityPage.detailPage.deleteSuccess")), h("/community")
        } catch (ee) {
            console.error("게시글 삭제 실패:", ee), alert(i("communityPage.detailPage.error.deleteFailed"))
        }
        G({
            open: !1,
            type: null
        })
    }

    function $() {
        ce && (V(!0), G({
            open: !1,
            type: null
        }))
    }
    async function I(ee, ze) {
        if (ce) {
            if (!ee.trim() || !ze.trim()) {
                alert(i("communityPage.detailPage.error.required"));
                return
            }
            try {
                await f(s, {
                    title: ee,
                    content: ze
                });
                const Ut = await Ae(s);
                je(Ut), V(!1), alert(i("communityPage.detailPage.editSuccess"))
            } catch (Ut) {
                console.error("게시글 수정 실패:", Ut), alert(i("communityPage.detailPage.error.editFailed"))
            }
        }
    }

    function pe(ee, ze) {
        te(ee), F(ze)
    }
    async function ue(ee) {
        if (!ne.trim()) {
            alert(i("communityPage.detailPage.error.required"));
            return
        }
        await m(s, ee, ne) ? (te(null), F("")) : alert(i("communityPage.detailPage.comment.error.invalidPassword"))
    }
    const st = async ee => {
        if (await d(s, ee)) {
            const Ut = await Ae(s);
            je(Ut), alert(i("communityPage.detailPage.comment.deleteSuccess"))
        } else alert(i("communityPage.detailPage.comment.error.deleteFailed"));
        G({
            open: !1,
            type: null
        })
    }, De = async ee => {
        if (k.type === "post-edit") {
            if (!await J(s, ee)) {
                alert(i("communityPage.detailPage.error.invalidPassword")), G({
                    open: !1,
                    type: null
                });
                return
            }
            $()
        } else if (k.type === "post-delete") {
            if (!await J(s, ee)) {
                alert(i("communityPage.detailPage.error.invalidPassword")), G({
                    open: !1,
                    type: null
                });
                return
            }
            Q()
        } else if (k.type === "comment-edit" && k.targetId) {
            if (!await ie(s, k.targetId, ee)) {
                alert(i("communityPage.detailPage.comment.error.invalidPassword")), G({
                    open: !1,
                    type: null
                });
                return
            }
            pe(k.targetId, k.oldContent || "")
        } else if (k.type === "comment-delete" && k.targetId) {
            if (!await ie(s, k.targetId, ee)) {
                alert(i("communityPage.detailPage.comment.error.invalidPassword")), G({
                    open: !1,
                    type: null
                });
                return
            }
            st(k.targetId)
        }
        G({
            open: !1,
            type: null
        })
    };
    return p.jsxs("div", {
        className: "flex justify-center items-center",
        children: [p.jsx(Kv, {
            open: k.open,
            onClose: () => G({
                open: !1,
                type: null
            }),
            label: k.type === "post-edit" ? i("communityPage.detailPage.passwordModal.edit") : k.type === "post-delete" ? i("communityPage.detailPage.passwordModal.delete") : k.type === "comment-edit" ? i("communityPage.detailPage.comment.passwordModal.edit") : k.type === "comment-delete" ? i("communityPage.detailPage.comment.passwordModal.delete") : "",
            type: k.type === "post-edit" || k.type === "post-delete" ? "post" : "comment",
            onSubmit: De
        }), p.jsxs("div", {
            className: "bg-white rounded-2xl shadow-lg p-8 max-w-md w-full",
            children: [p.jsxs("div", {
                className: "flex items-center gap-3 mb-4 relative",
                children: [p.jsx("div", {
                    className: `w-10 h-10 rounded-full bg-gradient-to-br ${Hg()} flex items-center justify-center text-white font-bold text-lg shadow`,
                    children: ce.nickname[0]
                }), p.jsx("span", {
                    className: "font-semibold text-gray-800",
                    children: ce.nickname
                }), p.jsxs("div", {
                    className: "ml-auto relative",
                    children: [p.jsx("button", {
                        onClick: () => B(ee => !ee),
                        className: "px-2 py-1 text-gray-500 hover:text-gray-900 text-xl",
                        children: "⋮"
                    }), M && p.jsxs("div", {
                        className: "absolute right-0 mt-2 w-24 bg-white border rounded shadow z-10",
                        children: [p.jsx("button", {
                            onClick: () => {
                                B(!1), G({
                                    open: !0,
                                    type: "post-edit"
                                })
                            },
                            className: "block w-full px-4 py-2 text-left hover:bg-gray-100",
                            children: i("communityPage.detailPage.edit")
                        }), p.jsx("button", {
                            onClick: () => {
                                B(!1), G({
                                    open: !0,
                                    type: "post-delete"
                                })
                            },
                            className: "block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100",
                            children: i("communityPage.detailPage.delete")
                        })]
                    })]
                })]
            }), K ? p.jsx(Zv, {
                post: ce,
                onFinish: I,
                onCancel: () => {
                    V(!1)
                }
            }) : p.jsxs(p.Fragment, {
                children: [p.jsx("h2", {
                    className: "text-2xl font-extrabold text-gray-900 mb-2",
                    children: ce == null ? void 0 : ce.title
                }), p.jsx("div", {
                    className: "text-gray-500 mb-4",
                    children: new Date(ce == null ? void 0 : ce.createdAt).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                }), p.jsx("div", {
                    className: "text-gray-800 leading-relaxed whitespace-pre-line mb-8",
                    children: ce == null ? void 0 : ce.content
                })]
            }), p.jsxs("div", {
                className: "flex gap-4 text-gray-400 text-sm mb-4",
                children: [p.jsxs("button", {
                    onClick: E,
                    className: `flex items-center gap-1 transition ${re?"text-pink-500":"hover:text-pink-500"}`,
                    children: [p.jsx("span", {
                        className: "text-base",
                        children: "♥"
                    }), p.jsx("span", {
                        children: ce.likesCount
                    })]
                }), p.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [p.jsx("span", {
                        className: "text-base",
                        children: "💬"
                    }), p.jsx("span", {
                        children: ((Lt = ce.comments) == null ? void 0 : Lt.length) ?? 0
                    })]
                })]
            }), p.jsx(Fv, {
                comments: Array.isArray(ce.comments) ? ce.comments : [],
                editingCommentId: de,
                editingCommentContent: ne,
                onContentChange: F,
                onEdit: ee => {
                    const ze = ce.comments.find(Ut => Ut.id === ee);
                    ze && G({
                        open: !0,
                        type: "comment-edit",
                        targetId: ee,
                        oldContent: ze.content
                    })
                },
                onDelete: ee => {
                    G({
                        open: !0,
                        type: "comment-delete",
                        targetId: ee
                    })
                },
                onFinishEdit: ue,
                onCancelEdit: () => {
                    te(null), F("")
                }
            }), p.jsx(Wv, {
                nickname: x,
                password: N,
                content: S,
                onNicknameChange: v,
                onPasswordChange: O,
                onContentChange: _,
                onSubmit: H
            }), p.jsx(Rt, {
                to: "/community",
                className: "block text-center mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-bold shadow hover:bg-gray-200 transition",
                children: i("communityPage.detailPage.goToList")
            })]
        })]
    })
}

function e1() {
    const {
        t: i
    } = ut(), l = at(f => f.addPost), s = at(f => f.getPostList), r = Vo();
    async function o(f) {
        f.preventDefault();
        const d = f.currentTarget,
            m = d.elements.namedItem("title").value,
            y = d.elements.namedItem("nickname").value,
            h = d.elements.namedItem("password").value,
            x = d.elements.namedItem("content").value;
        if (!/^\d{4}$/.test(h)) {
            alert(i("communityPage.writePage.error.invalidPassword"));
            return
        }
        try {
            await l({
                title: m,
                nickname: y,
                password: h,
                content: x,
                createdAt: new Date().toISOString(),
                likesCount: 0,
                commentsCount: 0
            }), await s(5, 0), r("/community", {
                replace: !0
            })
        } catch (v) {
            console.error("게시글 작성 실패:", v)
        }
    }
    return p.jsx("div", {
        className: "flex justify-center items-start min-h-screen pt-1",
        children: p.jsxs("div", {
            className: "bg-white rounded-2xl shadow-xl p-6 max-w-2xl w-full mx-4 border border-gray-100",
            children: [p.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [p.jsx(Rt, {
                    to: "/community",
                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                    children: p.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: p.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                        })
                    })
                }), p.jsx("h2", {
                    className: "text-xl font-extrabold text-gray-900",
                    children: i("communityPage.writePage.title")
                })]
            }), p.jsxs("form", {
                className: "space-y-4",
                onSubmit: o,
                children: [p.jsxs("div", {
                    className: "space-y-1",
                    children: [p.jsx("label", {
                        htmlFor: "title",
                        className: "block text-sm font-medium text-gray-700",
                        children: i("communityPage.writePage.form.title")
                    }), p.jsx("input", {
                        id: "title",
                        name: "title",
                        className: "w-full border border-gray-200 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition shadow-sm hover:shadow-md",
                        placeholder: i("communityPage.writePage.form.titlePlaceholder"),
                        required: !0
                    })]
                }), p.jsxs("div", {
                    className: "space-y-1",
                    children: [p.jsx("label", {
                        htmlFor: "nickname",
                        className: "block text-sm font-medium text-gray-700",
                        children: i("communityPage.writePage.form.nickname")
                    }), p.jsx("input", {
                        id: "nickname",
                        name: "nickname",
                        className: "w-full border border-gray-200 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition shadow-sm hover:shadow-md",
                        placeholder: i("communityPage.writePage.form.nicknamePlaceholder"),
                        required: !0
                    })]
                }), p.jsxs("div", {
                    className: "space-y-1",
                    children: [p.jsx("label", {
                        htmlFor: "content",
                        className: "block text-sm font-medium text-gray-700",
                        children: i("communityPage.writePage.form.content")
                    }), p.jsx("textarea", {
                        id: "content",
                        name: "content",
                        className: "w-full border border-gray-200 rounded-lg px-4 py-2 text-lg min-h-[10rem] resize-y focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition shadow-sm hover:shadow-md",
                        placeholder: i("communityPage.writePage.form.contentPlaceholder"),
                        required: !0
                    })]
                }), p.jsxs("div", {
                    className: "space-y-1",
                    children: [p.jsx("label", {
                        htmlFor: "password",
                        className: "block text-sm font-medium text-gray-700",
                        children: i("communityPage.writePage.form.password")
                    }), p.jsxs("div", {
                        className: "relative",
                        children: [p.jsx("input", {
                            id: "password",
                            name: "password",
                            type: "password",
                            pattern: "\\d{4}",
                            maxLength: 4,
                            className: "w-full border border-gray-200 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent transition shadow-sm hover:shadow-md",
                            placeholder: i("communityPage.writePage.form.passwordPlaceholder"),
                            required: !0
                        }), p.jsx("span", {
                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm",
                            children: "🔒"
                        })]
                    }), p.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: i("communityPage.writePage.form.passwordHelp")
                    })]
                }), p.jsxs("div", {
                    className: "flex gap-2 justify-end pt-2",
                    children: [p.jsx(Rt, {
                        to: "/community",
                        className: "px-5 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 flex items-center gap-1",
                        children: p.jsx("span", {
                            children: i("communityPage.writePage.form.cancel")
                        })
                    }), p.jsxs("button", {
                        type: "submit",
                        className: "px-5 py-2 bg-gradient-to-br from-pink-500 to-yellow-400 text-white rounded-lg font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-1",
                        children: [p.jsx("span", {
                            children: i("communityPage.writePage.form.submit")
                        }), p.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-4 w-4",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: p.jsx("path", {
                                fillRule: "evenodd",
                                d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })]
                    })]
                })]
            })]
        })
    })
}

function t1() {
    const {
        t: i
    } = ut();
    return p.jsxs("div", {
        className: "max-w-2xl mx-auto p-6",
        children: [p.jsxs("div", {
            className: "flex items-center gap-4 mb-8",
            children: [p.jsx(Rt, {
                to: "/community",
                className: "text-gray-600 hover:text-gray-900 transition",
                children: i("communityPage.back")
            }), p.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: i("communityPage.rulesPage.title")
            })]
        }), p.jsxs("div", {
            className: "bg-white rounded-2xl shadow-md p-8 space-y-6",
            children: [p.jsxs("section", {
                children: [p.jsx("h2", {
                    className: "text-xl font-semibold text-gray-900 mb-4",
                    children: i("communityPage.rulesPage.basic.title")
                }), p.jsx("ul", {
                    className: "list-disc list-inside space-y-2 text-gray-700",
                    children: i("communityPage.rulesPage.basic.items", {
                        returnObjects: !0
                    }).map((l, s) => p.jsx("li", {
                        children: l
                    }, s))
                })]
            }), p.jsxs("section", {
                children: [p.jsx("h2", {
                    className: "text-xl font-semibold text-gray-900 mb-4",
                    children: i("communityPage.rulesPage.post.title")
                }), p.jsx("ul", {
                    className: "list-disc list-inside space-y-2 text-gray-700",
                    children: i("communityPage.rulesPage.post.items", {
                        returnObjects: !0
                    }).map((l, s) => p.jsx("li", {
                        children: l
                    }, s))
                })]
            }), p.jsxs("section", {
                children: [p.jsx("h2", {
                    className: "text-xl font-semibold text-gray-900 mb-4",
                    children: i("communityPage.rulesPage.comment.title")
                }), p.jsx("ul", {
                    className: "list-disc list-inside space-y-2 text-gray-700",
                    children: i("communityPage.rulesPage.comment.items", {
                        returnObjects: !0
                    }).map((l, s) => p.jsx("li", {
                        children: l
                    }, s))
                })]
            }), p.jsxs("section", {
                children: [p.jsx("h2", {
                    className: "text-xl font-semibold text-gray-900 mb-4",
                    children: i("communityPage.rulesPage.penalty.title")
                }), p.jsx("ul", {
                    className: "list-disc list-inside space-y-2 text-gray-700",
                    children: i("communityPage.rulesPage.penalty.items", {
                        returnObjects: !0
                    }).map((l, s) => p.jsx("li", {
                        children: l
                    }, s))
                })]
            }), p.jsx("div", {
                className: "mt-8 p-4 bg-blue-50 rounded-lg",
                children: p.jsx("p", {
                    className: "text-blue-800",
                    children: i("communityPage.rulesPage.notice")
                })
            })]
        })]
    })
}

function n1() {
    const {
        t: i
    } = ut(), [l] = T.useState(() => Math.floor(Math.random() * 100) + 1), [s, r] = T.useState(""), [o, f] = T.useState(""), [d, m] = T.useState(0), y = x => {
        r(x.target.value)
    }, h = x => {
        x.preventDefault();
        const v = Number(s);
        m(N => N + 1), v === l ? f(i("gamePage.numberGuess.correct", {
            count: d + 1
        })) : v < l ? f(i("gamePage.numberGuess.up")) : f(i("gamePage.numberGuess.down")), r("")
    };
    return p.jsxs("div", {
        className: "bg-white rounded shadow p-6 max-w-md mx-auto mt-0",
        children: [p.jsx("h1", {
            className: "text-2xl font-bold mb-4",
            children: i("gamePage.numberGuess.title")
        }), p.jsxs("form", {
            onSubmit: h,
            className: "flex gap-2 mb-4",
            children: [p.jsx("input", {
                type: "number",
                min: 1,
                max: 100,
                value: s,
                onChange: y,
                className: "border px-3 py-2 rounded w-32",
                placeholder: i("gamePage.numberGuess.inputPlaceholder"),
                required: !0
            }), p.jsx("button", {
                className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition",
                children: i("gamePage.numberGuess.submit")
            })]
        }), p.jsx("div", {
            className: "text-lg",
            children: o
        })]
    })
}

function a1() {
    const i = [];
    for (; i.length < 3;) {
        const l = Math.floor(Math.random() * 9) + 1;
        i.includes(l) || i.push(l)
    }
    return i
}

function l1(i, l) {
    let s = 0,
        r = 0;
    for (let o = 0; o < 3; o++) l[o] === i[o] ? s++ : i.includes(l[o]) && r++;
    return {
        strike: s,
        ball: r
    }
}

function Oo({
    label: i,
    count: l,
    color: s,
    max: r = 3
}) {
    return p.jsxs("div", {
        className: "flex items-center gap-2 mb-1",
        children: [p.jsx("span", {
            className: "font-mono text-lg font-extrabold text-white w-4 text-right drop-shadow",
            style: {
                letterSpacing: "0.1em"
            },
            children: i
        }), [...Array(r)].map((o, f) => p.jsx("span", {
            className: `inline-block w-6 h-6 rounded-full shadow ${f<l?s:"bg-white"}`,
            style: {
                border: "2px solid #222"
            }
        }, f))]
    })
}

function i1() {
    const {
        t: i
    } = ut(), [l] = T.useState(() => a1()), [s, r] = T.useState(""), [o, f] = T.useState([]), [d, m] = T.useState(""), [y, h] = T.useState(!1), [x, v] = T.useState({
        strike: 0,
        ball: 0
    }), N = M => {
        r(M.target.value)
    }, O = M => {
        if (M.preventDefault(), s.length !== 3 || new Set(s).size !== 3 || /[^1-9]/.test(s)) {
            m(i("numberBaseball.invalidInput"));
            return
        }
        const B = s.split("").map(Number),
            {
                strike: k,
                ball: G
            } = l1(l, B);
        v({
            strike: k,
            ball: G
        });
        const K = `${k}${i("gamePage.numberBaseball.strike")} ${G}${i("gamePage.numberBaseball.ball")}`;
        f(V => [...V, {
            guess: s,
            result: K,
            strike: k,
            ball: G
        }]), r(""), m(""), k === 3 && (m(i("gamePage.numberBaseball.correct", {
            answer: l.join("")
        })), h(!0))
    }, S = () => {
        window.location.reload()
    }, _ = 3 - (x.strike + x.ball);
    return p.jsxs("div", {
        className: "bg-white rounded shadow p-6 max-w-md mx-auto mt-10",
        children: [p.jsx("h1", {
            className: "text-2xl font-bold mb-6 text-gray-900 text-center",
            children: i("gamePage.numberBaseball.title")
        }), p.jsx("div", {
            className: "flex justify-center mb-8",
            children: p.jsxs("div", {
                className: "bg-black border-2 border-white rounded-xl px-8 py-4 flex flex-col gap-1 items-center",
                children: [p.jsx(Oo, {
                    label: i("gamePage.numberBaseball.strike"),
                    count: x.strike,
                    color: "bg-yellow-300"
                }), p.jsx(Oo, {
                    label: i("gamePage.numberBaseball.ball"),
                    count: x.ball,
                    color: "bg-green-500"
                }), p.jsx(Oo, {
                    label: i("gamePage.numberBaseball.out"),
                    count: _,
                    color: "bg-red-500"
                })]
            })
        }), p.jsxs("form", {
            onSubmit: O,
            className: "flex gap-2 mb-4",
            autoComplete: "off",
            children: [p.jsx("input", {
                type: "text",
                maxLength: 3,
                value: s,
                onChange: N,
                className: "border px-3 py-2 rounded w-32",
                placeholder: i("gamePage.numberBaseball.inputPlaceholder"),
                disabled: y,
                required: !0
            }), p.jsx("button", {
                className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition",
                disabled: y,
                children: i("gamePage.numberBaseball.submit")
            })]
        }), d && p.jsx("div", {
            className: "mb-2 text-lg font-semibold text-blue-400",
            children: d
        }), p.jsx("ul", {
            className: "mb-2",
            children: o.map((M, B) => p.jsxs("li", {
                className: "text-gray-800",
                children: [M.guess, " - ", M.result]
            }, B))
        }), y && p.jsx("button", {
            onClick: S,
            className: "mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition",
            children: i("gamePage.numberBaseball.restart")
        })]
    })
}

function s1() {
    return p.jsxs("div", {
        children: [p.jsx(n1, {}), p.jsx(i1, {})]
    })
}
const r1 = pi(i => ({
    messages: [],
    addMessage: l => i(s => ({
        messages: [...s.messages, {
            ...l,
            timestamp: new Date().toISOString()
        }]
    })),
    clearMessages: () => i({
        messages: []
    })
}));

function u1() {
    const {
        t: i
    } = ut(), {
        messages: l,
        addMessage: s
    } = r1(), [r, o] = T.useState(""), f = T.useRef(null), d = m => {
        m.preventDefault(), r.trim() && (s({
            sender: "user",
            text: r
        }), s({
            sender: "ai",
            text: i("aiChatPage.unavailable")
        }), o(""))
    };
    return T.useEffect(() => {
        var m;
        (m = f.current) == null || m.scrollIntoView({
            behavior: "smooth"
        })
    }, [l]), p.jsxs("div", {
        className: "flex flex-col h-[80vh] max-w-xl mx-auto bg-gray-100 rounded-2xl shadow p-0 mt-4 border border-gray-200",
        children: [p.jsx("div", {
            className: "px-6 py-4 border-b border-gray-200 bg-white rounded-t-2xl",
            children: p.jsx("h1", {
                className: "text-xl font-bold text-gray-800 text-center",
                children: i("aiChatPage.title")
            })
        }), p.jsxs("div", {
            className: "flex-1 overflow-y-auto px-4 py-6 bg-gray-100",
            children: [l.length === 0 && p.jsx("div", {
                className: "text-gray-400 text-center mt-10",
                children: i("aiChatPage.emptyMessage")
            }), l.map((m, y) => p.jsx("div", {
                className: `mb-3 flex ${m.sender==="user"?"justify-end":"justify-start"}`,
                children: p.jsxs("div", {
                    className: "relative max-w-[70%]",
                    children: [p.jsx("div", {
                        className: `px-4 py-2 rounded-2xl text-sm shadow-md break-words ${m.sender==="user"?"bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-br-md":"bg-white text-gray-900 rounded-bl-md border border-gray-200"}`,
                        style: {
                            wordBreak: "break-word"
                        },
                        children: m.text
                    }), m.sender === "user" ? p.jsx("span", {
                        className: "absolute right-[-10px] bottom-0 w-0 h-0 border-t-8 border-t-blue-600 border-l-8 border-l-transparent"
                    }) : p.jsx("span", {
                        className: "absolute left-[-10px] bottom-0 w-0 h-0 border-t-8 border-t-white border-r-8 border-r-transparent"
                    })]
                })
            }, y)), p.jsx("div", {
                ref: f
            })]
        }), p.jsxs("form", {
            onSubmit: d,
            className: "flex items-center gap-2 px-4 py-3 bg-white rounded-b-2xl border-t border-gray-200",
            children: [p.jsx("input", {
                className: "flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50",
                value: r,
                onChange: m => o(m.target.value),
                placeholder: i("aiChatPage.placeholder")
            }), p.jsx("button", {
                className: "bg-gradient-to-br from-blue-400 to-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:from-blue-500 hover:to-blue-700 transition",
                type: "submit",
                children: i("aiChatPage.send")
            })]
        })]
    })
}
const Om = kg.api.baseUrl,
    Tm = {
        getScores: async i => {
            try {
                const l = await ve.get(`${Om}/api/v1/events/${i}`),
                    {
                        scores: s,
                        totalScores: r,
                        totalPages: o
                    } = l.data.data;
                return {
                    scores: s,
                    totalScores: r,
                    totalPages: o
                }
            } catch (l) {
                const s = l instanceof Error ? l.message : "순위 데이터를 불러오는데 실패했습니다.";
                throw new Error(s)
            }
        },
        submitScore: async i => {
            var l;
            try {
                return (await ve.post(`${Om}/api/v1/events`, i)).data
            } catch (s) {
                throw ve.isAxiosError(s) && ((l = s.response) == null ? void 0 : l.status) === 409 ? new Error(s.response.data.message) : new Error("점수 등록에 실패했습니다.")
            }
        }
    },
    Bg = pi((i, l) => ({
        currentState: "start",
        score: 0,
        timeLeft: 1500,
        countdown: 3,
        nickname: "",
        scores: [],
        isLoading: !1,
        error: null,
        totalPages: 1,
        currentPage: 1,
        phoneNumber: "",
        fetchScores: async s => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                const r = await Tm.getScores(s);
                i({
                    scores: r.scores,
                    isLoading: !1,
                    totalPages: r.totalPages,
                    currentPage: s
                })
            } catch (r) {
                const o = r instanceof Error ? r.message : "순위 데이터를 불러오는데 실패했습니다.";
                i({
                    error: o,
                    isLoading: !1
                })
            }
        },
        submitScore: async (s, r) => {
            i({
                isLoading: !0,
                error: null
            });
            try {
                const {
                    phoneNumber: o
                } = l();
                await Tm.submitScore({
                    nickname: s,
                    score: r,
                    date: new Date,
                    phoneNumber: o
                }), await (async () => {
                    await Bg.getState().fetchScores(1)
                })(), i({
                    isLoading: !1
                })
            } catch (o) {
                const f = o instanceof Error ? o.message : "점수 등록에 실패했습니다.";
                throw i({
                    error: f,
                    isLoading: !1
                }), o
            }
        },
        setCurrentState: s => i({
            currentState: s
        }),
        setScore: s => i({
            score: s
        }),
        setTimeLeft: s => i(r => ({
            timeLeft: typeof s == "function" ? s(r.timeLeft) : s
        })),
        setCountdown: s => i(r => ({
            countdown: typeof s == "function" ? s(r.countdown) : s
        })),
        setNickname: s => i({
            nickname: s
        }),
        setPhoneNumber: s => i({
            phoneNumber: s
        }),
        resetGame: () => i({
            score: 0,
            timeLeft: 15,
            countdown: 3,
            nickname: "",
            error: null
        })
    })),
    fa = () => p.jsxs(p.Fragment, {
        children: [p.jsx("div", {
            className: "absolute inset-0 -z-10",
            style: {
                background: "linear-gradient(to bottom, #6fd3ff 0%, #b3e5fc 100%)"
            }
        }), p.jsx("div", {
            className: "absolute top-8 right-8 w-20 h-20 bg-yellow-300 rounded-full shadow-[0_0_20px_rgba(255,255,0,0.6)] animate-pulse z-10",
            children: p.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full"
            })
        }), p.jsxs("div", {
            className: "absolute top-16 left-8 w-40 h-20 bg-white rounded-full shadow-lg animate-bounce",
            style: {
                animationDelay: "0s",
                animationDuration: "4s"
            },
            children: [p.jsx("div", {
                className: "absolute -top-2 left-8 w-16 h-16 bg-white rounded-full"
            }), p.jsx("div", {
                className: "absolute -top-4 left-16 w-12 h-12 bg-white rounded-full"
            }), p.jsx("div", {
                className: "absolute top-2 left-24 w-14 h-14 bg-white rounded-full"
            })]
        }), p.jsxs("div", {
            className: "absolute top-12 left-60 w-36 h-18 bg-white rounded-full shadow-lg animate-bounce",
            style: {
                animationDelay: "2s",
                animationDuration: "4.5s"
            },
            children: [p.jsx("div", {
                className: "absolute -top-3 left-8 w-16 h-16 bg-white rounded-full"
            }), p.jsx("div", {
                className: "absolute -top-1 left-20 w-12 h-12 bg-white rounded-full"
            }), p.jsx("div", {
                className: "absolute top-2 left-28 w-10 h-10 bg-white rounded-full"
            })]
        }), p.jsxs("div", {
            className: "absolute top-28 right-20 w-24 h-12 bg-white rounded-full shadow-lg animate-bounce",
            style: {
                animationDelay: "1.5s",
                animationDuration: "4s"
            },
            children: [p.jsx("div", {
                className: "absolute -top-2 left-4 w-10 h-10 bg-white rounded-full"
            }), p.jsx("div", {
                className: "absolute -top-1 left-12 w-8 h-8 bg-white rounded-full"
            }), p.jsx("div", {
                className: "absolute top-1 left-18 w-6 h-6 bg-white rounded-full"
            })]
        })]
    }),
    o1 = ({
        onStart: i,
        onShowScoreboard: l
    }) => {
        const s = () => p.jsx("img", {
            src: "/assets/main.png",
            alt: "픽셀 캐릭터",
            className: "w-64 h-64 mx-auto drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]",
            draggable: !1
        });
        return p.jsxs("div", {
            className: "min-h-screen flex flex-col items-center justify-center p-4 pt-8 relative overflow-hidden",
            children: [p.jsx(fa, {}), p.jsx("div", {
                className: "flex-1 flex flex-col items-center justify-center w-full relative z-10",
                children: p.jsxs("div", {
                    className: "flex flex-col items-center w-full max-w-xl",
                    children: [p.jsx("h1", {
                        className: "text-4xl font-bold text-white mb-6 mt-0 text-center pixel-font tracking-wider drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] animate-pulse",
                        children: "생일빵 때리기"
                    }), p.jsx("div", {
                        className: "mb-4",
                        children: s()
                    }), p.jsxs("div", {
                        className: "space-y-3 w-full flex flex-col items-center mb-20",
                        children: [p.jsx("button", {
                            onClick: i,
                            className: "bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 border-4 border-red-700 rounded-none text-2xl transition-all transform hover:scale-105 shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[2px_2px_0px_rgba(0,0,0,0.3)]",
                            children: "START"
                        }), p.jsx("button", {
                            onClick: l,
                            className: "bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-bold py-3 px-8 border-4 border-yellow-500 rounded-none text-xl transition-all shadow-[3px_3px_0px_rgba(0,0,0,0.2)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[1px_1px_0px_rgba(0,0,0,0.2)]",
                            children: "🏆 랭킹보드"
                        })]
                    })]
                })
            }), p.jsxs("div", {
                className: "absolute bottom-0 left-0 w-full h-32 z-20 flex flex-col",
                children: [p.jsxs("div", {
                    className: "w-full h-20 bg-[#7bc043] border-t-4 border-[#388e3c] relative flex items-end",
                    children: [p.jsx("div", {
                        className: "absolute left-8 bottom-2 w-6 h-4 bg-[#388e3c] rounded-[2px]",
                        style: {
                            boxShadow: "2px 0 #7bc043"
                        }
                    }), p.jsx("div", {
                        className: "absolute left-32 bottom-4 w-8 h-5 bg-[#388e3c] rounded-[2px]",
                        style: {
                            boxShadow: "2px 0 #7bc043"
                        }
                    }), p.jsx("div", {
                        className: "absolute left-1/2 bottom-3 w-10 h-6 bg-[#388e3c] rounded-[2px]",
                        style: {
                            boxShadow: "2px 0 #7bc043"
                        }
                    }), p.jsx("div", {
                        className: "absolute right-24 bottom-2 w-7 h-4 bg-[#388e3c] rounded-[2px]",
                        style: {
                            boxShadow: "2px 0 #7bc043"
                        }
                    }), p.jsx("div", {
                        className: "absolute right-8 bottom-5 w-6 h-4 bg-[#388e3c] rounded-[2px]",
                        style: {
                            boxShadow: "2px 0 #7bc043"
                        }
                    })]
                }), p.jsxs("div", {
                    className: "w-full h-12 bg-[#a67c52] flex",
                    children: [p.jsx("div", {
                        className: "h-full w-8 bg-[#8d5c2b] inline-block"
                    }), p.jsx("div", {
                        className: "h-full w-12 bg-[#a67c52] inline-block"
                    }), p.jsx("div", {
                        className: "h-full w-10 bg-[#8d5c2b] inline-block"
                    }), p.jsx("div", {
                        className: "h-full w-16 bg-[#a67c52] inline-block"
                    }), p.jsx("div", {
                        className: "h-full w-8 bg-[#8d5c2b] inline-block"
                    }), p.jsx("div", {
                        className: "h-full w-20 bg-[#a67c52] inline-block"
                    }), p.jsx("div", {
                        className: "h-full w-12 bg-[#8d5c2b] inline-block"
                    }), p.jsx("div", {
                        className: "h-full w-10 bg-[#a67c52] inline-block"
                    }), p.jsx("div", {
                        className: "h-full w-8 bg-[#8d5c2b] inline-block"
                    })]
                })]
            })]
        })
    },
    c1 = ({
        onStartGame: i,
        onBackToMain: l
    }) => p.jsxs("div", {
        className: "min-h-screen flex flex-col items-center justify-start pt-6 p-4 relative overflow-hidden",
        children: [p.jsx(fa, {}), p.jsxs("div", {
            className: "bg-white border-4 border-blue-400 rounded-none p-6 max-w-md mx-auto shadow-[4px_4px_0px_rgba(0,0,0,0.2)] relative z-10",
            children: [p.jsx("h2", {
                className: "text-3xl font-bold text-center mb-4 pixel-font tracking-wider drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]",
                children: "게임 규칙"
            }), p.jsxs("div", {
                className: "space-y-3 text-lg",
                children: [p.jsxs("div", {
                    className: "border-b-2 border-blue-200 pb-2",
                    children: [p.jsx("h3", {
                        className: "font-bold text-lg",
                        children: "공격 방법:"
                    }), p.jsxs("p", {
                        children: ["✊ 머리 클릭 → ", p.jsx("span", {
                            className: "font-bold text-pink-600",
                            children: "죽빵"
                        }), " ", p.jsx("span", {
                            className: "text-sm",
                            children: "(100점)"
                        })]
                    }), p.jsxs("p", {
                        children: ["✋ 몸통 클릭 → ", p.jsx("span", {
                            className: "font-bold text-blue-600",
                            children: "등짝스매슁"
                        }), " ", p.jsx("span", {
                            className: "text-sm",
                            children: "(120점)"
                        })]
                    }), p.jsxs("p", {
                        children: ["🦶 다리 클릭 → ", p.jsx("span", {
                            className: "font-bold text-green-600",
                            children: "싸커킥"
                        }), " ", p.jsx("span", {
                            className: "text-sm",
                            children: "(150점)"
                        })]
                    })]
                }), p.jsxs("div", {
                    className: "border-b-2 border-blue-200 pb-2",
                    children: [p.jsx("h4", {
                        className: "font-bold text-lg",
                        children: "방어 시스템:"
                    }), p.jsx("p", {
                        className: "text-base",
                        children: "캐릭터가 랜덤하게 부위를 막습니다"
                    }), p.jsxs("p", {
                        className: "text-base",
                        children: ["막고 있는 부위 공격 시 ", p.jsx("span", {
                            className: "font-bold text-red-500",
                            children: "MISS!"
                        })]
                    })]
                }), p.jsxs("div", {
                    children: [p.jsx("h3", {
                        className: "font-bold text-lg",
                        children: "목표:"
                    }), p.jsx("p", {
                        className: "text-base",
                        children: "15초 동안 최대한 많은 점수를 획득하세요!"
                    }), p.jsx("p", {
                        className: "text-base text-pink-600 font-bold mt-2",
                        children: "점수를 가장 많이 획득하고 전화번호를 입력한 상위 3명에게 상품을 드립니다."
                    }), p.jsx("p", {
                        className: "text-xs text-gray-500 mt-1",
                        children: "입력한 전화번호는 공개되지 않습니다."
                    })]
                })]
            }), p.jsxs("div", {
                className: "flex flex-col gap-2 mt-6",
                children: [p.jsx("button", {
                    onClick: i,
                    className: "bg-green-400 hover:bg-green-500 text-white font-bold py-2.5 px-6 border-4 border-green-700 rounded-none text-lg transition-all shadow-[3px_3px_0px_rgba(0,0,0,0.2)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[1px_1px_0px_rgba(0,0,0,0.2)]",
                    children: "게임 시작!"
                }), p.jsx("button", {
                    onClick: l,
                    className: "bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-bold py-2 px-6 border-4 border-yellow-500 rounded-none text-lg transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.15)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[1px_1px_0px_rgba(0,0,0,0.15)]",
                    children: "← 뒤로가기"
                })]
            })]
        })]
    }),
    f1 = ({
        countdown: i
    }) => p.jsxs("div", {
        className: "min-h-screen flex flex-col items-center justify-center relative overflow-hidden",
        children: [p.jsx(fa, {}), p.jsx("div", {
            className: "text-[8rem] font-extrabold text-white pixel-font drop-shadow-[6px_6px_0px_rgba(0,0,0,0.4)] tracking-widest animate-pulse z-10",
            children: i
        }), p.jsx("p", {
            className: "text-3xl text-white mt-4 pixel-font drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] z-10",
            children: "준비하세요!"
        })]
    }),
    d1 = () => p.jsxs("div", {
        className: "min-h-screen flex flex-col items-center justify-center relative overflow-hidden",
        children: [p.jsx(fa, {}), p.jsx("div", {
            className: "text-5xl font-extrabold text-white pixel-font drop-shadow-[6px_6px_0px_rgba(0,0,0,0.4)] tracking-widest animate-pulse z-10 mb-4",
            children: "게임 종료!"
        })]
    }),
    To = {
        default: "/assets/character.png",
        protect: {
            head: "/assets/protect-head.png",
            body: "/assets/protect-body.png",
            butt: "/assets/protect-leg.png"
        },
        hit: {
            head: "/assets/count-head.png",
            body: "/assets/count-body.png",
            butt: "/assets/count-leg.png"
        }
    },
    h1 = ({
        character: i,
        onAttack: l
    }) => {
        let s = To.default;
        return i.hit ? s = To.hit[i.hit] : i.defending && (s = To.protect[i.defending]), p.jsxs("div", {
            className: "relative w-64 h-96 select-none",
            children: [p.jsx("img", {
                src: s,
                alt: "캐릭터",
                className: "absolute top-0 left-0 w-full h-full pointer-events-none",
                draggable: !1
            }), p.jsx("div", {
                onClick: () => l("punch"),
                className: "absolute left-1/2 -translate-x-1/2 top-[15%] w-[38%] h-[30%] cursor-pointer z-10 rounded-full",
                title: "머리 클릭 - 펀치 (100점)"
            }), p.jsx("div", {
                onClick: () => l("smash"),
                className: "absolute left-1/2 -translate-x-1/2 top-[45%] w-[45%] h-[20%] cursor-pointer z-10 rounded-lg",
                title: "몸통 클릭 - 등짝스매슁 (120점)"
            }), p.jsx("div", {
                onClick: () => l("kick"),
                className: "absolute left-1/2 -translate-x-1/2 top-[65%] w-[45%] h-[22%] cursor-pointer z-10 rounded-lg",
                title: "하체 클릭 - 싸커킥 (150점)"
            }), p.jsxs("div", {
                className: "text-white text-sm text-center absolute w-full left-0 bottom-0 mt-4 space-y-1 pointer-events-none",
                children: [p.jsx("p", {
                    children: "💡 캐릭터의 각 부위를 클릭하세요!"
                }), p.jsx("p", {
                    children: "머리: 죽빵 | 몸통: 등짝스매슁 | 하체: 싸커킥"
                })]
            })]
        })
    },
    m1 = ({
        timeLeft: i,
        score: l,
        character: s,
        lastResult: r,
        onAttack: o
    }) => p.jsxs("div", {
        className: "min-h-screen flex flex-col p-4 relative overflow-hidden",
        children: [p.jsx(fa, {}), p.jsxs("div", {
            className: "flex justify-between items-center mb-4 relative z-10",
            children: [p.jsx("div", {
                className: "bg-white border-4 border-blue-400 rounded-none px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,0.2)]",
                children: p.jsxs("div", {
                    className: "text-xl font-bold text-blue-600 pixel-font",
                    children: ["⏰ ", i, "초"]
                })
            }), p.jsx("div", {
                className: "bg-white border-4 border-green-400 rounded-none px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,0.2)]",
                children: p.jsxs("div", {
                    className: "text-xl font-bold text-green-600 pixel-font",
                    children: ["🎯 ", l, "점"]
                })
            })]
        }), p.jsx("div", {
            className: "flex-1 flex flex-col items-center justify-center relative z-10",
            children: p.jsxs("div", {
                className: "flex flex-col items-center gap-2 -mt-2",
                children: [p.jsxs("div", {
                    className: "bg-black border-4 border-lime-400 rounded-lg px-8 py-4 shadow-[0_4px_24px_rgba(0,255,0,0.15)] inline-block min-w-[260px] min-h-[80px] flex flex-col items-center justify-center gap-2",
                    children: [p.jsxs("div", {
                        className: "font-bold text-center pixel-font min-h-[24px] text-base drop-shadow-[0_0_6px_rgba(0,255,0,0.5)]",
                        style: {
                            color: s.defending ? "#7fff00" : "#00e0ff",
                            letterSpacing: "1px"
                        },
                        children: [s.defending === "head" && "🛡️ 머리 방어중!", s.defending === "body" && "🛡️ 몸통 방어중!", s.defending === "butt" && "🛡️ 하체 방어중!", !s.defending && ""]
                    }), p.jsx("div", {
                        className: "text-2xl font-bold pixel-font min-h-[32px] drop-shadow-[0_0_6px_rgba(255,255,0,0.7)]",
                        style: {
                            color: r ? r.type === "HIT" ? "#ffe066" : "#ff4d4f" : "#00e0ff",
                            letterSpacing: "2px"
                        },
                        children: r ? r.type === "HIT" ? `HIT! +${r.points}` : "MISS!" : ""
                    })]
                }), p.jsx("div", {
                    className: "mt-0 mb-0",
                    children: p.jsx(h1, {
                        character: s,
                        onAttack: o
                    })
                })]
            })
        })]
    }),
    g1 = ({
        score: i,
        nickname: l,
        phoneNumber: s,
        onNicknameChange: r,
        onPhoneNumberChange: o,
        onSubmitScore: f,
        onGoToMain: d,
        isNicknameValid: m,
        nicknameError: y,
        isLoading: h = !1,
        error: x,
        phoneError: v
    }) => p.jsxs("div", {
        className: "min-h-screen flex flex-col items-center justify-center p-4 pb-20 relative overflow-hidden",
        children: [p.jsx(fa, {}), p.jsxs("div", {
            className: "bg-white border-4 border-orange-400 rounded-none p-8 max-w-md mx-auto shadow-[4px_4px_0px_rgba(0,0,0,0.2)] relative z-10",
            children: [p.jsx("h2", {
                className: "text-3xl font-bold text-center mb-4 pixel-font tracking-wider drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]",
                children: "게임 끝!"
            }), p.jsxs("div", {
                className: "text-center mb-6",
                children: [p.jsxs("div", {
                    className: "text-5xl font-bold text-blue-600 mb-2 pixel-font drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]",
                    children: [i, "점"]
                }), p.jsx("p", {
                    className: "text-lg text-gray-600 pixel-font",
                    children: "최종 점수"
                })]
            }), p.jsxs("div", {
                className: "mb-6",
                children: [p.jsx("label", {
                    className: "block text-lg font-bold mb-2 pixel-font",
                    children: "닉네임:"
                }), p.jsx("input", {
                    type: "text",
                    value: l,
                    onChange: N => r(N.target.value),
                    className: "w-full p-3 border-4 border-gray-400 rounded-none text-lg pixel-font shadow-[2px_2px_0px_rgba(0,0,0,0.1)] focus:outline-none focus:border-blue-500",
                    placeholder: "닉네임을 입력하세요",
                    maxLength: 10,
                    disabled: h
                }), p.jsx("input", {
                    type: "text",
                    value: s,
                    onChange: N => o(N.target.value),
                    className: "w-full p-3 border-4 border-gray-400 rounded-none text-lg pixel-font shadow-[2px_2px_0px_rgba(0,0,0,0.1)] focus:outline-none focus:border-blue-500 mt-3",
                    placeholder: "01012345678(필수x)",
                    maxLength: 15,
                    disabled: h
                }), y && p.jsx("div", {
                    className: "text-red-500 text-sm mt-2 pixel-font",
                    children: y
                }), v && p.jsx("div", {
                    className: "text-red-500 text-sm mt-2 pixel-font",
                    children: v
                }), x && p.jsx("div", {
                    className: "text-red-500 text-sm mt-2 pixel-font",
                    children: x
                })]
            }), p.jsxs("div", {
                className: "flex flex-col gap-3",
                children: [p.jsx("button", {
                    onClick: f,
                    className: "bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-6 border-4 border-blue-700 rounded-none text-xl transition-all shadow-[3px_3px_0px_rgba(0,0,0,0.2)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[1px_1px_0px_rgba(0,0,0,0.2)] disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed",
                    disabled: !m || !!v || h,
                    children: h ? "등록 중..." : "등록하기"
                }), p.jsx("button", {
                    onClick: d,
                    className: "bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-bold py-2 px-6 border-4 border-yellow-500 rounded-none text-lg transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.15)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[1px_1px_0px_rgba(0,0,0,0.15)]",
                    disabled: h,
                    children: "메인으로"
                })]
            })]
        })]
    }),
    p1 = ({
        scores: i,
        onGoToMain: l,
        isLoading: s = !1,
        totalPages: r,
        currentPage: o,
        onPageChange: f
    }) => p.jsxs("div", {
        className: "min-h-screen flex flex-col items-center justify-center p-2 relative overflow-hidden",
        children: [p.jsx(fa, {}), p.jsxs("div", {
            className: "bg-white border-4 border-purple-400 rounded-none p-6 w-full max-w-5xl mx-auto shadow-[4px_4px_0px_rgba(0,0,0,0.2)] relative z-10",
            children: [p.jsx("h2", {
                className: "text-2xl font-bold text-center mb-4 pixel-font tracking-wider drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]",
                children: "🏆 스코어보드"
            }), p.jsx("div", {
                className: "mb-4",
                children: s ? p.jsx("div", {
                    className: "text-center py-8",
                    children: p.jsx("div", {
                        className: "text-lg text-gray-600 pixel-font",
                        children: "순위 데이터를 불러오는 중..."
                    })
                }) : i.length === 0 ? p.jsx("p", {
                    className: "text-center text-gray-500 text-base pixel-font",
                    children: "아직 기록이 없습니다!"
                }) : p.jsx("div", {
                    className: "space-y-2",
                    children: i.map((m, y) => {
                        const h = (o - 1) * 10 + y + 1;
                        return p.jsxs("div", {
                            className: "flex justify-between items-center border-b-2 border-purple-200 pb-2 px-3",
                            children: [p.jsxs("div", {
                                className: "flex items-center flex-1",
                                children: [p.jsxs("span", {
                                    className: "font-bold text-base mr-4 pixel-font min-w-[2.5rem]",
                                    children: ["#", h]
                                }), p.jsx("span", {
                                    className: "text-base pixel-font flex-1",
                                    children: m.nickname
                                })]
                            }), p.jsxs("span", {
                                className: "font-bold text-lg text-blue-600 pixel-font drop-shadow-[1px_1px_0px_rgba(0,0,0,0.2)] min-w-[5rem] text-right",
                                children: [m.score, "점"]
                            })]
                        }, y)
                    })
                })
            }), r > 1 && p.jsx("div", {
                className: "flex justify-center gap-2 mb-4",
                children: (() => {
                    const m = [],
                        h = r,
                        x = o - 1,
                        v = o + 1;
                    m.push(1), x > 1 && x < h && m.push(x), o !== 1 && o !== h && m.push(o), v < h && v > 1 && m.push(v), h !== 1 && m.push(h);
                    const N = Array.from(new Set(m)).sort((S, _) => S - _),
                        O = [];
                    for (let S = 0; S < N.length; S++) S > 0 && N[S] - N[S - 1] > 1 && O.push("ellipsis-" + S), O.push(N[S]);
                    return O.map((S, _) => typeof S == "string" && S.startsWith("ellipsis") ? p.jsx("span", {
                        className: "px-2 text-gray-400",
                        children: "..."
                    }, S + _) : p.jsx("button", {
                        onClick: () => f(Number(S)),
                        className: `px-3 py-1 border-2 rounded-none pixel-font font-bold ${S===o?"bg-purple-400 text-white border-purple-600":"bg-gray-100 border-purple-200 text-purple-700"} transition-all`,
                        disabled: s || S === o,
                        children: S
                    }, S))
                })()
            }), p.jsx("div", {
                className: "flex flex-col gap-2",
                children: p.jsx("button", {
                    onClick: l,
                    className: "bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-bold py-2 px-4 border-4 border-yellow-500 rounded-none text-lg transition-all shadow-[3px_3px_0px_rgba(0,0,0,0.2)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[1px_1px_0px_rgba(0,0,0,0.2)]",
                    disabled: s,
                    children: "← 메인으로"
                })
            })]
        })]
    }),
    y1 = () => {
        const {
            currentState: i,
            score: l,
            timeLeft: s,
            countdown: r,
            nickname: o,
            phoneNumber: f,
            scores: d,
            isLoading: m,
            error: y,
            totalPages: h,
            currentPage: x,
            setCurrentState: v,
            setScore: N,
            setTimeLeft: O,
            setCountdown: S,
            setNickname: _,
            setPhoneNumber: M,
            resetGame: B,
            fetchScores: k,
            submitScore: G
        } = Bg(), [K, V] = T.useState({
            defending: null,
            hit: null
        }), [de, te] = T.useState(null);
        T.useEffect(() => {
            k(1)
        }, [k]), T.useEffect(() => {
            if (i !== "game") return;
            O(15);
            const ie = setInterval(() => {
                O(E => E <= 1 ? (clearInterval(ie), v("gameend"), 0) : E - 1)
            }, 1e3);
            return () => clearInterval(ie)
        }, [i, O, v]), T.useEffect(() => {
            if (i !== "gameend") return;
            const ie = setTimeout(() => {
                v("result")
            }, 2e3);
            return () => clearTimeout(ie)
        }, [i, v]), T.useEffect(() => {
            if (i !== "game") return;
            V({
                defending: null,
                hit: null
            });
            const ie = setInterval(() => {
                const E = ["head", "butt", "body", null],
                    H = E[Math.floor(Math.random() * E.length)];
                V(Q => ({
                    ...Q,
                    defending: H
                }))
            }, 500);
            return () => clearInterval(ie)
        }, [i]);
        const ne = () => {
                v("countdown"), S(3);
                const ie = () => {
                        B(), V({
                            defending: null,
                            hit: null
                        }), te(null), v("game")
                    },
                    E = setInterval(() => {
                        S(H => H <= 1 ? (clearInterval(E), ie(), 0) : H - 1)
                    }, 1e3)
            },
            F = ie => {
                const H = {
                    punch: {
                        target: "head",
                        points: 100,
                        name: "죽빵"
                    },
                    smash: {
                        target: "body",
                        points: 120,
                        name: "등짝스매슁"
                    },
                    kick: {
                        target: "butt",
                        points: 150,
                        name: "싸커킥"
                    }
                } [ie];
                K.defending !== H.target ? (N(l + H.points), V($ => ({
                    ...$,
                    hit: H.target
                })), te({
                    type: "HIT",
                    points: H.points,
                    attack: H.name
                }), setTimeout(() => {
                    V($ => ({
                        ...$,
                        hit: null
                    }))
                }, 300)) : te({
                    type: "MISS",
                    attack: H.name
                }), setTimeout(() => te(null), 1e3)
            },
            re = o.trim().length > 0 && o.trim().length <= 10,
            Ee = o.trim().length === 0 ? "닉네임을 입력하세요." : o.trim().length > 10 ? "닉네임은 최대 10자까지 가능합니다." : "",
            Ae = /^010[0-9]{8}$/,
            He = f.trim() === "" || Ae.test(f.trim()),
            ce = f.trim() === "" || Ae.test(f.trim()) ? "" : "11자리 번호를 입력하세요.",
            je = ie => {
                M(ie)
            },
            U = async () => {
                if (!(!re || !He)) try {
                    await G(o, l), v("leaderboard")
                } catch {}
            }, X = () => {
                v("leaderboard")
            }, J = () => {
                v("start")
            };
        switch (T.useEffect(() => {
                i === "leaderboard" && k(1)
            }, [i, k]), i) {
            case "start":
                return p.jsx(o1, {
                    onStart: () => v("rules"),
                    onShowScoreboard: X
                });
            case "rules":
                return p.jsx(c1, {
                    onStartGame: ne,
                    onBackToMain: () => v("start")
                });
            case "countdown":
                return p.jsx(f1, {
                    countdown: r
                });
            case "game":
                return p.jsx(m1, {
                    timeLeft: s,
                    score: l,
                    character: K,
                    lastResult: de,
                    onAttack: F
                });
            case "result":
                return p.jsx(g1, {
                    score: l,
                    nickname: o,
                    onNicknameChange: _,
                    onSubmitScore: U,
                    onGoToMain: J,
                    isNicknameValid: re,
                    nicknameError: Ee,
                    isLoading: m,
                    error: y,
                    phoneNumber: f,
                    onPhoneNumberChange: je,
                    phoneError: ce
                });
            case "leaderboard":
                return p.jsx(p1, {
                    scores: d,
                    onGoToMain: J,
                    isLoading: m,
                    totalPages: h,
                    currentPage: x,
                    onPageChange: k
                });
            case "gameend":
                return p.jsx(d1, {});
            default:
                return null
        }
    },
    b1 = pi(i => ({
        user: null,
        login: l => i({
            user: l
        }),
        logout: () => i({
            user: null
        })
    })),
    x1 = () => {
        const {
            user: i,
            login: l,
            logout: s
        } = b1(), [r, o] = T.useState({
            id: "",
            password: ""
        }), [f, d] = T.useState(""), m = h => {
            const {
                name: x,
                value: v
            } = h.target;
            o(N => ({
                ...N,
                [x]: v
            }))
        }, y = async () => {
            try {
                if (!r.id || !r.password) {
                    d("아이디와 비밀번호를 모두 입력해주세요.");
                    return
                }
                await l({
                    id: r.id,
                    name: "",
                    email: "",
                    password: r.password
                }), d("")
            } catch {
                d("로그인에 실패했습니다.")
            }
        };
        return p.jsx("div", {
            className: "min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8",
            children: p.jsxs("div", {
                className: "max-w-md mx-auto bg-white rounded-lg shadow-md p-8",
                children: [p.jsx("h1", {
                    className: "text-2xl font-bold text-center text-gray-900 mb-8",
                    children: "관리자 페이지"
                }), i ? p.jsxs("div", {
                    className: "space-y-4",
                    children: [p.jsxs("p", {
                        className: "text-green-600 text-center",
                        children: ["로그인 상태: ", i.id]
                    }), p.jsx("button", {
                        onClick: s,
                        className: "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                        children: "로그아웃"
                    })]
                }) : p.jsxs("div", {
                    className: "space-y-4",
                    children: [p.jsxs("div", {
                        children: [p.jsx("label", {
                            htmlFor: "id",
                            className: "block text-sm font-medium text-gray-700",
                            children: "아이디"
                        }), p.jsx("input", {
                            id: "id",
                            name: "id",
                            type: "text",
                            value: r.id,
                            onChange: m,
                            className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
                            placeholder: "아이디를 입력하세요"
                        })]
                    }), p.jsxs("div", {
                        children: [p.jsx("label", {
                            htmlFor: "password",
                            className: "block text-sm font-medium text-gray-700",
                            children: "비밀번호"
                        }), p.jsx("input", {
                            id: "password",
                            name: "password",
                            type: "password",
                            value: r.password,
                            onChange: m,
                            className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
                            placeholder: "비밀번호를 입력하세요"
                        })]
                    }), f && p.jsx("p", {
                        className: "text-red-600 text-sm text-center",
                        children: f
                    }), p.jsx("button", {
                        onClick: y,
                        className: "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                        children: "로그인"
                    })]
                })]
            })
        })
    };

function v1() {
    return p.jsxs(Bb, {
        children: [p.jsx(fx, {}), p.jsxs(gb, {
            children: [p.jsx(qt, {
                path: "/event",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto pt-[60px]",
                    children: p.jsx(y1, {})
                })
            }), p.jsx(qt, {
                path: "/",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(dx, {})
                })
            }), p.jsx(qt, {
                path: "/admin",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(x1, {})
                })
            }), p.jsx(qt, {
                path: "/about",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(hx, {})
                })
            }), p.jsx(qt, {
                path: "/community",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(Qv, {})
                })
            }), p.jsx(qt, {
                path: "/community/write",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(e1, {})
                })
            }), p.jsx(qt, {
                path: "/community/rules",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(t1, {})
                })
            }), p.jsx(qt, {
                path: "/community/:id",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(Iv, {})
                })
            }), p.jsx(qt, {
                path: "/game",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(s1, {})
                })
            }), p.jsx(qt, {
                path: "/ai",
                element: p.jsx("div", {
                    className: "min-w-[360px] max-w-2xl mx-auto p-4 pt-20",
                    children: p.jsx(u1, {})
                })
            })]
        })]
    })
}
const oe = i => typeof i == "string",
    si = () => {
        let i, l;
        const s = new Promise((r, o) => {
            i = r, l = o
        });
        return s.resolve = i, s.reject = l, s
    },
    Cm = i => i == null ? "" : "" + i,
    S1 = (i, l, s) => {
        i.forEach(r => {
            l[r] && (s[r] = l[r])
        })
    },
    w1 = /###/g,
    Am = i => i && i.indexOf("###") > -1 ? i.replace(w1, ".") : i,
    _m = i => !i || oe(i),
    ui = (i, l, s) => {
        const r = oe(l) ? l.split(".") : l;
        let o = 0;
        for (; o < r.length - 1;) {
            if (_m(i)) return {};
            const f = Am(r[o]);
            !i[f] && s && (i[f] = new s), Object.prototype.hasOwnProperty.call(i, f) ? i = i[f] : i = {}, ++o
        }
        return _m(i) ? {} : {
            obj: i,
            k: Am(r[o])
        }
    },
    Dm = (i, l, s) => {
        const {
            obj: r,
            k: o
        } = ui(i, l, Object);
        if (r !== void 0 || l.length === 1) {
            r[o] = s;
            return
        }
        let f = l[l.length - 1],
            d = l.slice(0, l.length - 1),
            m = ui(i, d, Object);
        for (; m.obj === void 0 && d.length;) f = `${d[d.length-1]}.${f}`, d = d.slice(0, d.length - 1), m = ui(i, d, Object), m != null && m.obj && typeof m.obj[`${m.k}.${f}`] < "u" && (m.obj = void 0);
        m.obj[`${m.k}.${f}`] = s
    },
    E1 = (i, l, s, r) => {
        const {
            obj: o,
            k: f
        } = ui(i, l, Object);
        o[f] = o[f] || [], o[f].push(s)
    },
    Gs = (i, l) => {
        const {
            obj: s,
            k: r
        } = ui(i, l);
        if (s && Object.prototype.hasOwnProperty.call(s, r)) return s[r]
    },
    N1 = (i, l, s) => {
        const r = Gs(i, s);
        return r !== void 0 ? r : Gs(l, s)
    },
    qg = (i, l, s) => {
        for (const r in l) r !== "__proto__" && r !== "constructor" && (r in i ? oe(i[r]) || i[r] instanceof String || oe(l[r]) || l[r] instanceof String ? s && (i[r] = l[r]) : qg(i[r], l[r], s) : i[r] = l[r]);
        return i
    },
    Fa = i => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var R1 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const j1 = i => oe(i) ? i.replace(/[&<>"'\/]/g, l => R1[l]) : i;
class O1 {
    constructor(l) {
        this.capacity = l, this.regExpMap = new Map, this.regExpQueue = []
    }
    getRegExp(l) {
        const s = this.regExpMap.get(l);
        if (s !== void 0) return s;
        const r = new RegExp(l);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(l, r), this.regExpQueue.push(l), r
    }
}
const T1 = [" ", ",", "?", "!", ";"],
    C1 = new O1(20),
    A1 = (i, l, s) => {
        l = l || "", s = s || "";
        const r = T1.filter(d => l.indexOf(d) < 0 && s.indexOf(d) < 0);
        if (r.length === 0) return !0;
        const o = C1.getRegExp(`(${r.map(d=>d==="?"?"\\?":d).join("|")})`);
        let f = !o.test(i);
        if (!f) {
            const d = i.indexOf(s);
            d > 0 && !o.test(i.substring(0, d)) && (f = !0)
        }
        return f
    },
    Po = (i, l, s = ".") => {
        if (!i) return;
        if (i[l]) return Object.prototype.hasOwnProperty.call(i, l) ? i[l] : void 0;
        const r = l.split(s);
        let o = i;
        for (let f = 0; f < r.length;) {
            if (!o || typeof o != "object") return;
            let d, m = "";
            for (let y = f; y < r.length; ++y)
                if (y !== f && (m += s), m += r[y], d = o[m], d !== void 0) {
                    if (["string", "number", "boolean"].indexOf(typeof d) > -1 && y < r.length - 1) continue;
                    f += y - f + 1;
                    break
                } o = d
        }
        return o
    },
    fi = i => i == null ? void 0 : i.replace("_", "-"),
    _1 = {
        type: "logger",
        log(i) {
            this.output("log", i)
        },
        warn(i) {
            this.output("warn", i)
        },
        error(i) {
            this.output("error", i)
        },
        output(i, l) {
            var s, r;
            (r = (s = console == null ? void 0 : console[i]) == null ? void 0 : s.apply) == null || r.call(s, console, l)
        }
    };
class Vs {
    constructor(l, s = {}) {
        this.init(l, s)
    }
    init(l, s = {}) {
        this.prefix = s.prefix || "i18next:", this.logger = l || _1, this.options = s, this.debug = s.debug
    }
    log(...l) {
        return this.forward(l, "log", "", !0)
    }
    warn(...l) {
        return this.forward(l, "warn", "", !0)
    }
    error(...l) {
        return this.forward(l, "error", "")
    }
    deprecate(...l) {
        return this.forward(l, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(l, s, r, o) {
        return o && !this.debug ? null : (oe(l[0]) && (l[0] = `${r}${this.prefix} ${l[0]}`), this.logger[s](l))
    }
    create(l) {
        return new Vs(this.logger, {
            prefix: `${this.prefix}:${l}:`,
            ...this.options
        })
    }
    clone(l) {
        return l = l || this.options, l.prefix = l.prefix || this.prefix, new Vs(this.logger, l)
    }
}
var Jt = new Vs;
class tr {
    constructor() {
        this.observers = {}
    }
    on(l, s) {
        return l.split(" ").forEach(r => {
            this.observers[r] || (this.observers[r] = new Map);
            const o = this.observers[r].get(s) || 0;
            this.observers[r].set(s, o + 1)
        }), this
    }
    off(l, s) {
        if (this.observers[l]) {
            if (!s) {
                delete this.observers[l];
                return
            }
            this.observers[l].delete(s)
        }
    }
    emit(l, ...s) {
        this.observers[l] && Array.from(this.observers[l].entries()).forEach(([o, f]) => {
            for (let d = 0; d < f; d++) o(...s)
        }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([o, f]) => {
            for (let d = 0; d < f; d++) o.apply(o, [l, ...s])
        })
    }
}
class Mm extends tr {
    constructor(l, s = {
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(), this.data = l || {}, this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(l) {
        this.options.ns.indexOf(l) < 0 && this.options.ns.push(l)
    }
    removeNamespaces(l) {
        const s = this.options.ns.indexOf(l);
        s > -1 && this.options.ns.splice(s, 1)
    }
    getResource(l, s, r, o = {}) {
        var h, x;
        const f = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
            d = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let m;
        l.indexOf(".") > -1 ? m = l.split(".") : (m = [l, s], r && (Array.isArray(r) ? m.push(...r) : oe(r) && f ? m.push(...r.split(f)) : m.push(r)));
        const y = Gs(this.data, m);
        return !y && !s && !r && l.indexOf(".") > -1 && (l = m[0], s = m[1], r = m.slice(2).join(".")), y || !d || !oe(r) ? y : Po((x = (h = this.data) == null ? void 0 : h[l]) == null ? void 0 : x[s], r, f)
    }
    addResource(l, s, r, o, f = {
        silent: !1
    }) {
        const d = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
        let m = [l, s];
        r && (m = m.concat(d ? r.split(d) : r)), l.indexOf(".") > -1 && (m = l.split("."), o = s, s = m[1]), this.addNamespaces(s), Dm(this.data, m, o), f.silent || this.emit("added", l, s, r, o)
    }
    addResources(l, s, r, o = {
        silent: !1
    }) {
        for (const f in r)(oe(r[f]) || Array.isArray(r[f])) && this.addResource(l, s, f, r[f], {
            silent: !0
        });
        o.silent || this.emit("added", l, s, r)
    }
    addResourceBundle(l, s, r, o, f, d = {
        silent: !1,
        skipCopy: !1
    }) {
        let m = [l, s];
        l.indexOf(".") > -1 && (m = l.split("."), o = r, r = s, s = m[1]), this.addNamespaces(s);
        let y = Gs(this.data, m) || {};
        d.skipCopy || (r = JSON.parse(JSON.stringify(r))), o ? qg(y, r, f) : y = {
            ...y,
            ...r
        }, Dm(this.data, m, y), d.silent || this.emit("added", l, s, r)
    }
    removeResourceBundle(l, s) {
        this.hasResourceBundle(l, s) && delete this.data[l][s], this.removeNamespaces(s), this.emit("removed", l, s)
    }
    hasResourceBundle(l, s) {
        return this.getResource(l, s) !== void 0
    }
    getResourceBundle(l, s) {
        return s || (s = this.options.defaultNS), this.getResource(l, s)
    }
    getDataByLanguage(l) {
        return this.data[l]
    }
    hasLanguageSomeTranslations(l) {
        const s = this.getDataByLanguage(l);
        return !!(s && Object.keys(s) || []).find(o => s[o] && Object.keys(s[o]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var Pg = {
    processors: {},
    addPostProcessor(i) {
        this.processors[i.name] = i
    },
    handle(i, l, s, r, o) {
        return i.forEach(f => {
            var d;
            l = ((d = this.processors[f]) == null ? void 0 : d.process(l, s, r, o)) ?? l
        }), l
    }
};
const zm = {},
    Lm = i => !oe(i) && typeof i != "boolean" && typeof i != "number";
class Xs extends tr {
    constructor(l, s = {}) {
        super(), S1(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], l, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Jt.create("translator")
    }
    changeLanguage(l) {
        l && (this.language = l)
    }
    exists(l, s = {
        interpolation: {}
    }) {
        const r = {
            ...s
        };
        if (l == null) return !1;
        const o = this.resolve(l, r);
        return (o == null ? void 0 : o.res) !== void 0
    }
    extractFromKey(l, s) {
        let r = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
        r === void 0 && (r = ":");
        const o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
        let f = s.ns || this.options.defaultNS || [];
        const d = r && l.indexOf(r) > -1,
            m = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !A1(l, r, o);
        if (d && !m) {
            const y = l.match(this.interpolator.nestingRegexp);
            if (y && y.length > 0) return {
                key: l,
                namespaces: oe(f) ? [f] : f
            };
            const h = l.split(r);
            (r !== o || r === o && this.options.ns.indexOf(h[0]) > -1) && (f = h.shift()), l = h.join(o)
        }
        return {
            key: l,
            namespaces: oe(f) ? [f] : f
        }
    }
    translate(l, s, r) {
        let o = typeof s == "object" ? {
            ...s
        } : s;
        if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof options == "object" && (o = {
                ...o
            }), o || (o = {}), l == null) return "";
        Array.isArray(l) || (l = [String(l)]);
        const f = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails,
            d = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
            {
                key: m,
                namespaces: y
            } = this.extractFromKey(l[l.length - 1], o),
            h = y[y.length - 1];
        let x = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
        x === void 0 && (x = ":");
        const v = o.lng || this.language,
            N = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if ((v == null ? void 0 : v.toLowerCase()) === "cimode") return N ? f ? {
            res: `${h}${x}${m}`,
            usedKey: m,
            exactUsedKey: m,
            usedLng: v,
            usedNS: h,
            usedParams: this.getUsedParamsDetails(o)
        } : `${h}${x}${m}` : f ? {
            res: m,
            usedKey: m,
            exactUsedKey: m,
            usedLng: v,
            usedNS: h,
            usedParams: this.getUsedParamsDetails(o)
        } : m;
        const O = this.resolve(l, o);
        let S = O == null ? void 0 : O.res;
        const _ = (O == null ? void 0 : O.usedKey) || m,
            M = (O == null ? void 0 : O.exactUsedKey) || m,
            B = ["[object Number]", "[object Function]", "[object RegExp]"],
            k = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
            G = !this.i18nFormat || this.i18nFormat.handleAsObject,
            K = o.count !== void 0 && !oe(o.count),
            V = Xs.hasDefaultValue(o),
            de = K ? this.pluralResolver.getSuffix(v, o.count, o) : "",
            te = o.ordinal && K ? this.pluralResolver.getSuffix(v, o.count, {
                ordinal: !1
            }) : "",
            ne = K && !o.ordinal && o.count === 0,
            F = ne && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${de}`] || o[`defaultValue${te}`] || o.defaultValue;
        let re = S;
        G && !S && V && (re = F);
        const Ee = Lm(re),
            Ae = Object.prototype.toString.apply(re);
        if (G && re && Ee && B.indexOf(Ae) < 0 && !(oe(k) && Array.isArray(re))) {
            if (!o.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const He = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(_, re, {
                    ...o,
                    ns: y
                }) : `key '${m} (${this.language})' returned an object instead of string.`;
                return f ? (O.res = He, O.usedParams = this.getUsedParamsDetails(o), O) : He
            }
            if (d) {
                const He = Array.isArray(re),
                    ce = He ? [] : {},
                    je = He ? M : _;
                for (const U in re)
                    if (Object.prototype.hasOwnProperty.call(re, U)) {
                        const X = `${je}${d}${U}`;
                        V && !S ? ce[U] = this.translate(X, {
                            ...o,
                            defaultValue: Lm(F) ? F[U] : void 0,
                            joinArrays: !1,
                            ns: y
                        }) : ce[U] = this.translate(X, {
                            ...o,
                            joinArrays: !1,
                            ns: y
                        }), ce[U] === X && (ce[U] = re[U])
                    } S = ce
            }
        } else if (G && oe(k) && Array.isArray(S)) S = S.join(k), S && (S = this.extendTranslation(S, l, o, r));
        else {
            let He = !1,
                ce = !1;
            !this.isValidLookup(S) && V && (He = !0, S = F), this.isValidLookup(S) || (ce = !0, S = m);
            const U = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && ce ? void 0 : S,
                X = V && F !== S && this.options.updateMissing;
            if (ce || He || X) {
                if (this.logger.log(X ? "updateKey" : "missingKey", v, h, m, X ? F : S), d) {
                    const H = this.resolve(m, {
                        ...o,
                        keySeparator: !1
                    });
                    H && H.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let J = [];
                const ie = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && ie && ie[0])
                    for (let H = 0; H < ie.length; H++) J.push(ie[H]);
                else this.options.saveMissingTo === "all" ? J = this.languageUtils.toResolveHierarchy(o.lng || this.language) : J.push(o.lng || this.language);
                const E = (H, Q, $) => {
                    var pe;
                    const I = V && $ !== S ? $ : U;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(H, h, Q, I, X, o) : (pe = this.backendConnector) != null && pe.saveMissing && this.backendConnector.saveMissing(H, h, Q, I, X, o), this.emit("missingKey", H, h, Q, S)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && K ? J.forEach(H => {
                    const Q = this.pluralResolver.getSuffixes(H, o);
                    ne && o[`defaultValue${this.options.pluralSeparator}zero`] && Q.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Q.push(`${this.options.pluralSeparator}zero`), Q.forEach($ => {
                        E([H], m + $, o[`defaultValue${$}`] || F)
                    })
                }) : E(J, m, F))
            }
            S = this.extendTranslation(S, l, o, O, r), ce && S === m && this.options.appendNamespaceToMissingKey && (S = `${h}${x}${m}`), (ce || He) && this.options.parseMissingKeyHandler && (S = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${h}${x}${m}` : m, He ? S : void 0, o))
        }
        return f ? (O.res = S, O.usedParams = this.getUsedParamsDetails(o), O) : S
    }
    extendTranslation(l, s, r, o, f) {
        var y, h;
        if ((y = this.i18nFormat) != null && y.parse) l = this.i18nFormat.parse(l, {
            ...this.options.interpolation.defaultVariables,
            ...r
        }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
            resolved: o
        });
        else if (!r.skipInterpolation) {
            r.interpolation && this.interpolator.init({
                ...r,
                interpolation: {
                    ...this.options.interpolation,
                    ...r.interpolation
                }
            });
            const x = oe(l) && (((h = r == null ? void 0 : r.interpolation) == null ? void 0 : h.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let v;
            if (x) {
                const O = l.match(this.interpolator.nestingRegexp);
                v = O && O.length
            }
            let N = r.replace && !oe(r.replace) ? r.replace : r;
            if (this.options.interpolation.defaultVariables && (N = {
                    ...this.options.interpolation.defaultVariables,
                    ...N
                }), l = this.interpolator.interpolate(l, N, r.lng || this.language || o.usedLng, r), x) {
                const O = l.match(this.interpolator.nestingRegexp),
                    S = O && O.length;
                v < S && (r.nest = !1)
            }!r.lng && o && o.res && (r.lng = this.language || o.usedLng), r.nest !== !1 && (l = this.interpolator.nest(l, (...O) => (f == null ? void 0 : f[0]) === O[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${s[0]}`), null) : this.translate(...O, s), r)), r.interpolation && this.interpolator.reset()
        }
        const d = r.postProcess || this.options.postProcess,
            m = oe(d) ? [d] : d;
        return l != null && (m != null && m.length) && r.applyPostProcessor !== !1 && (l = Pg.handle(m, l, s, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...o,
                usedParams: this.getUsedParamsDetails(r)
            },
            ...r
        } : r, this)), l
    }
    resolve(l, s = {}) {
        let r, o, f, d, m;
        return oe(l) && (l = [l]), l.forEach(y => {
            if (this.isValidLookup(r)) return;
            const h = this.extractFromKey(y, s),
                x = h.key;
            o = x;
            let v = h.namespaces;
            this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
            const N = s.count !== void 0 && !oe(s.count),
                O = N && !s.ordinal && s.count === 0,
                S = s.context !== void 0 && (oe(s.context) || typeof s.context == "number") && s.context !== "",
                _ = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
            v.forEach(M => {
                var B, k;
                this.isValidLookup(r) || (m = M, !zm[`${_[0]}-${M}`] && ((B = this.utils) != null && B.hasLoadedNamespace) && !((k = this.utils) != null && k.hasLoadedNamespace(m)) && (zm[`${_[0]}-${M}`] = !0, this.logger.warn(`key "${o}" for languages "${_.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), _.forEach(G => {
                    var de;
                    if (this.isValidLookup(r)) return;
                    d = G;
                    const K = [x];
                    if ((de = this.i18nFormat) != null && de.addLookupKeys) this.i18nFormat.addLookupKeys(K, x, G, M, s);
                    else {
                        let te;
                        N && (te = this.pluralResolver.getSuffix(G, s.count, s));
                        const ne = `${this.options.pluralSeparator}zero`,
                            F = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (N && (K.push(x + te), s.ordinal && te.indexOf(F) === 0 && K.push(x + te.replace(F, this.options.pluralSeparator)), O && K.push(x + ne)), S) {
                            const re = `${x}${this.options.contextSeparator}${s.context}`;
                            K.push(re), N && (K.push(re + te), s.ordinal && te.indexOf(F) === 0 && K.push(re + te.replace(F, this.options.pluralSeparator)), O && K.push(re + ne))
                        }
                    }
                    let V;
                    for (; V = K.pop();) this.isValidLookup(r) || (f = V, r = this.getResource(G, M, V, s))
                }))
            })
        }), {
            res: r,
            usedKey: o,
            exactUsedKey: f,
            usedLng: d,
            usedNS: m
        }
    }
    isValidLookup(l) {
        return l !== void 0 && !(!this.options.returnNull && l === null) && !(!this.options.returnEmptyString && l === "")
    }
    getResource(l, s, r, o = {}) {
        var f;
        return (f = this.i18nFormat) != null && f.getResource ? this.i18nFormat.getResource(l, s, r, o) : this.resourceStore.getResource(l, s, r, o)
    }
    getUsedParamsDetails(l = {}) {
        const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            r = l.replace && !oe(l.replace);
        let o = r ? l.replace : l;
        if (r && typeof l.count < "u" && (o.count = l.count), this.options.interpolation.defaultVariables && (o = {
                ...this.options.interpolation.defaultVariables,
                ...o
            }), !r) {
            o = {
                ...o
            };
            for (const f of s) delete o[f]
        }
        return o
    }
    static hasDefaultValue(l) {
        const s = "defaultValue";
        for (const r in l)
            if (Object.prototype.hasOwnProperty.call(l, r) && s === r.substring(0, s.length) && l[r] !== void 0) return !0;
        return !1
    }
}
class Um {
    constructor(l) {
        this.options = l, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Jt.create("languageUtils")
    }
    getScriptPartFromCode(l) {
        if (l = fi(l), !l || l.indexOf("-") < 0) return null;
        const s = l.split("-");
        return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"))
    }
    getLanguagePartFromCode(l) {
        if (l = fi(l), !l || l.indexOf("-") < 0) return l;
        const s = l.split("-");
        return this.formatLanguageCode(s[0])
    }
    formatLanguageCode(l) {
        if (oe(l) && l.indexOf("-") > -1) {
            let s;
            try {
                s = Intl.getCanonicalLocales(l)[0]
            } catch {}
            return s && this.options.lowerCaseLng && (s = s.toLowerCase()), s || (this.options.lowerCaseLng ? l.toLowerCase() : l)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? l.toLowerCase() : l
    }
    isSupportedCode(l) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (l = this.getLanguagePartFromCode(l)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(l) > -1
    }
    getBestMatchFromCodes(l) {
        if (!l) return null;
        let s;
        return l.forEach(r => {
            if (s) return;
            const o = this.formatLanguageCode(r);
            (!this.options.supportedLngs || this.isSupportedCode(o)) && (s = o)
        }), !s && this.options.supportedLngs && l.forEach(r => {
            if (s) return;
            const o = this.getScriptPartFromCode(r);
            if (this.isSupportedCode(o)) return s = o;
            const f = this.getLanguagePartFromCode(r);
            if (this.isSupportedCode(f)) return s = f;
            s = this.options.supportedLngs.find(d => {
                if (d === f) return d;
                if (!(d.indexOf("-") < 0 && f.indexOf("-") < 0) && (d.indexOf("-") > 0 && f.indexOf("-") < 0 && d.substring(0, d.indexOf("-")) === f || d.indexOf(f) === 0 && f.length > 1)) return d
            })
        }), s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]), s
    }
    getFallbackCodes(l, s) {
        if (!l) return [];
        if (typeof l == "function" && (l = l(s)), oe(l) && (l = [l]), Array.isArray(l)) return l;
        if (!s) return l.default || [];
        let r = l[s];
        return r || (r = l[this.getScriptPartFromCode(s)]), r || (r = l[this.formatLanguageCode(s)]), r || (r = l[this.getLanguagePartFromCode(s)]), r || (r = l.default), r || []
    }
    toResolveHierarchy(l, s) {
        const r = this.getFallbackCodes((s === !1 ? [] : s) || this.options.fallbackLng || [], l),
            o = [],
            f = d => {
                d && (this.isSupportedCode(d) ? o.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))
            };
        return oe(l) && (l.indexOf("-") > -1 || l.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(l)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(l)), this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(l))) : oe(l) && f(this.formatLanguageCode(l)), r.forEach(d => {
            o.indexOf(d) < 0 && f(this.formatLanguageCode(d))
        }), o
    }
}
const km = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    },
    Hm = {
        select: i => i === 1 ? "one" : "other",
        resolvedOptions: () => ({
            pluralCategories: ["one", "other"]
        })
    };
class D1 {
    constructor(l, s = {}) {
        this.languageUtils = l, this.options = s, this.logger = Jt.create("pluralResolver"), this.pluralRulesCache = {}
    }
    addRule(l, s) {
        this.rules[l] = s
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(l, s = {}) {
        const r = fi(l === "dev" ? "en" : l),
            o = s.ordinal ? "ordinal" : "cardinal",
            f = JSON.stringify({
                cleanedCode: r,
                type: o
            });
        if (f in this.pluralRulesCache) return this.pluralRulesCache[f];
        let d;
        try {
            d = new Intl.PluralRules(r, {
                type: o
            })
        } catch {
            if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), Hm;
            if (!l.match(/-|_/)) return Hm;
            const y = this.languageUtils.getLanguagePartFromCode(l);
            d = this.getRule(y, s)
        }
        return this.pluralRulesCache[f] = d, d
    }
    needsPlural(l, s = {}) {
        let r = this.getRule(l, s);
        return r || (r = this.getRule("dev", s)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1
    }
    getPluralFormsOfKey(l, s, r = {}) {
        return this.getSuffixes(l, r).map(o => `${s}${o}`)
    }
    getSuffixes(l, s = {}) {
        let r = this.getRule(l, s);
        return r || (r = this.getRule("dev", s)), r ? r.resolvedOptions().pluralCategories.sort((o, f) => km[o] - km[f]).map(o => `${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${o}`) : []
    }
    getSuffix(l, s, r = {}) {
        const o = this.getRule(l, r);
        return o ? `${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(s)}` : (this.logger.warn(`no plural rule found for: ${l}`), this.getSuffix("dev", s, r))
    }
}
const Bm = (i, l, s, r = ".", o = !0) => {
        let f = N1(i, l, s);
        return !f && o && oe(s) && (f = Po(i, s, r), f === void 0 && (f = Po(l, s, r))), f
    },
    Co = i => i.replace(/\$/g, "$$$$");
class M1 {
    constructor(l = {}) {
        var s;
        this.logger = Jt.create("interpolator"), this.options = l, this.format = ((s = l == null ? void 0 : l.interpolation) == null ? void 0 : s.format) || (r => r), this.init(l)
    }
    init(l = {}) {
        l.interpolation || (l.interpolation = {
            escapeValue: !0
        });
        const {
            escape: s,
            escapeValue: r,
            useRawValueToEscape: o,
            prefix: f,
            prefixEscaped: d,
            suffix: m,
            suffixEscaped: y,
            formatSeparator: h,
            unescapeSuffix: x,
            unescapePrefix: v,
            nestingPrefix: N,
            nestingPrefixEscaped: O,
            nestingSuffix: S,
            nestingSuffixEscaped: _,
            nestingOptionsSeparator: M,
            maxReplaces: B,
            alwaysFormat: k
        } = l.interpolation;
        this.escape = s !== void 0 ? s : j1, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = f ? Fa(f) : d || "{{", this.suffix = m ? Fa(m) : y || "}}", this.formatSeparator = h || ",", this.unescapePrefix = x ? "" : v || "-", this.unescapeSuffix = this.unescapePrefix ? "" : x || "", this.nestingPrefix = N ? Fa(N) : O || Fa("$t("), this.nestingSuffix = S ? Fa(S) : _ || Fa(")"), this.nestingOptionsSeparator = M || ",", this.maxReplaces = B || 1e3, this.alwaysFormat = k !== void 0 ? k : !1, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const l = (s, r) => (s == null ? void 0 : s.source) === r ? (s.lastIndex = 0, s) : new RegExp(r, "g");
        this.regexp = l(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = l(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = l(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
    }
    interpolate(l, s, r, o) {
        var O;
        let f, d, m;
        const y = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
            h = S => {
                if (S.indexOf(this.formatSeparator) < 0) {
                    const k = Bm(s, y, S, this.options.keySeparator, this.options.ignoreJSONStructure);
                    return this.alwaysFormat ? this.format(k, void 0, r, {
                        ...o,
                        ...s,
                        interpolationkey: S
                    }) : k
                }
                const _ = S.split(this.formatSeparator),
                    M = _.shift().trim(),
                    B = _.join(this.formatSeparator).trim();
                return this.format(Bm(s, y, M, this.options.keySeparator, this.options.ignoreJSONStructure), B, r, {
                    ...o,
                    ...s,
                    interpolationkey: M
                })
            };
        this.resetRegExp();
        const x = (o == null ? void 0 : o.missingInterpolationHandler) || this.options.missingInterpolationHandler,
            v = ((O = o == null ? void 0 : o.interpolation) == null ? void 0 : O.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: S => Co(S)
        }, {
            regex: this.regexp,
            safeValue: S => this.escapeValue ? Co(this.escape(S)) : Co(S)
        }].forEach(S => {
            for (m = 0; f = S.regex.exec(l);) {
                const _ = f[1].trim();
                if (d = h(_), d === void 0)
                    if (typeof x == "function") {
                        const B = x(l, f, o);
                        d = oe(B) ? B : ""
                    } else if (o && Object.prototype.hasOwnProperty.call(o, _)) d = "";
                else if (v) {
                    d = f[0];
                    continue
                } else this.logger.warn(`missed to pass in variable ${_} for interpolating ${l}`), d = "";
                else !oe(d) && !this.useRawValueToEscape && (d = Cm(d));
                const M = S.safeValue(d);
                if (l = l.replace(f[0], M), v ? (S.regex.lastIndex += d.length, S.regex.lastIndex -= f[0].length) : S.regex.lastIndex = 0, m++, m >= this.maxReplaces) break
            }
        }), l
    }
    nest(l, s, r = {}) {
        let o, f, d;
        const m = (y, h) => {
            const x = this.nestingOptionsSeparator;
            if (y.indexOf(x) < 0) return y;
            const v = y.split(new RegExp(`${x}[ ]*{`));
            let N = `{${v[1]}`;
            y = v[0], N = this.interpolate(N, d);
            const O = N.match(/'/g),
                S = N.match(/"/g);
            (((O == null ? void 0 : O.length) ?? 0) % 2 === 0 && !S || S.length % 2 !== 0) && (N = N.replace(/'/g, '"'));
            try {
                d = JSON.parse(N), h && (d = {
                    ...h,
                    ...d
                })
            } catch (_) {
                return this.logger.warn(`failed parsing options string in nesting for key ${y}`, _), `${y}${x}${N}`
            }
            return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, y
        };
        for (; o = this.nestingRegexp.exec(l);) {
            let y = [];
            d = {
                ...r
            }, d = d.replace && !oe(d.replace) ? d.replace : d, d.applyPostProcessor = !1, delete d.defaultValue;
            let h = !1;
            if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
                const x = o[1].split(this.formatSeparator).map(v => v.trim());
                o[1] = x.shift(), y = x, h = !0
            }
            if (f = s(m.call(this, o[1].trim(), d), d), f && o[0] === l && !oe(f)) return f;
            oe(f) || (f = Cm(f)), f || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${l}`), f = ""), h && (f = y.reduce((x, v) => this.format(x, v, r.lng, {
                ...r,
                interpolationkey: o[1].trim()
            }), f.trim())), l = l.replace(o[0], f), this.regexp.lastIndex = 0
        }
        return l
    }
}
const z1 = i => {
        let l = i.toLowerCase().trim();
        const s = {};
        if (i.indexOf("(") > -1) {
            const r = i.split("(");
            l = r[0].toLowerCase().trim();
            const o = r[1].substring(0, r[1].length - 1);
            l === "currency" && o.indexOf(":") < 0 ? s.currency || (s.currency = o.trim()) : l === "relativetime" && o.indexOf(":") < 0 ? s.range || (s.range = o.trim()) : o.split(";").forEach(d => {
                if (d) {
                    const [m, ...y] = d.split(":"), h = y.join(":").trim().replace(/^'+|'+$/g, ""), x = m.trim();
                    s[x] || (s[x] = h), h === "false" && (s[x] = !1), h === "true" && (s[x] = !0), isNaN(h) || (s[x] = parseInt(h, 10))
                }
            })
        }
        return {
            formatName: l,
            formatOptions: s
        }
    },
    qm = i => {
        const l = {};
        return (s, r, o) => {
            let f = o;
            o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey] && (f = {
                ...f,
                [o.interpolationkey]: void 0
            });
            const d = r + JSON.stringify(f);
            let m = l[d];
            return m || (m = i(fi(r), o), l[d] = m), m(s)
        }
    },
    L1 = i => (l, s, r) => i(fi(s), r)(l);
class U1 {
    constructor(l = {}) {
        this.logger = Jt.create("formatter"), this.options = l, this.init(l)
    }
    init(l, s = {
        interpolation: {}
    }) {
        this.formatSeparator = s.interpolation.formatSeparator || ",";
        const r = s.cacheInBuiltFormats ? qm : L1;
        this.formats = {
            number: r((o, f) => {
                const d = new Intl.NumberFormat(o, {
                    ...f
                });
                return m => d.format(m)
            }),
            currency: r((o, f) => {
                const d = new Intl.NumberFormat(o, {
                    ...f,
                    style: "currency"
                });
                return m => d.format(m)
            }),
            datetime: r((o, f) => {
                const d = new Intl.DateTimeFormat(o, {
                    ...f
                });
                return m => d.format(m)
            }),
            relativetime: r((o, f) => {
                const d = new Intl.RelativeTimeFormat(o, {
                    ...f
                });
                return m => d.format(m, f.range || "day")
            }),
            list: r((o, f) => {
                const d = new Intl.ListFormat(o, {
                    ...f
                });
                return m => d.format(m)
            })
        }
    }
    add(l, s) {
        this.formats[l.toLowerCase().trim()] = s
    }
    addCached(l, s) {
        this.formats[l.toLowerCase().trim()] = qm(s)
    }
    format(l, s, r, o = {}) {
        const f = s.split(this.formatSeparator);
        if (f.length > 1 && f[0].indexOf("(") > 1 && f[0].indexOf(")") < 0 && f.find(m => m.indexOf(")") > -1)) {
            const m = f.findIndex(y => y.indexOf(")") > -1);
            f[0] = [f[0], ...f.splice(1, m)].join(this.formatSeparator)
        }
        return f.reduce((m, y) => {
            var v;
            const {
                formatName: h,
                formatOptions: x
            } = z1(y);
            if (this.formats[h]) {
                let N = m;
                try {
                    const O = ((v = o == null ? void 0 : o.formatParams) == null ? void 0 : v[o.interpolationkey]) || {},
                        S = O.locale || O.lng || o.locale || o.lng || r;
                    N = this.formats[h](m, S, {
                        ...x,
                        ...o,
                        ...O
                    })
                } catch (O) {
                    this.logger.warn(O)
                }
                return N
            } else this.logger.warn(`there was no format function for ${h}`);
            return m
        }, l)
    }
}
const k1 = (i, l) => {
    i.pending[l] !== void 0 && (delete i.pending[l], i.pendingCount--)
};
class H1 extends tr {
    constructor(l, s, r, o = {}) {
        var f, d;
        super(), this.backend = l, this.store = s, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = Jt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], (d = (f = this.backend) == null ? void 0 : f.init) == null || d.call(f, r, o.backend, o)
    }
    queueLoad(l, s, r, o) {
        const f = {},
            d = {},
            m = {},
            y = {};
        return l.forEach(h => {
            let x = !0;
            s.forEach(v => {
                const N = `${h}|${v}`;
                !r.reload && this.store.hasResourceBundle(h, v) ? this.state[N] = 2 : this.state[N] < 0 || (this.state[N] === 1 ? d[N] === void 0 && (d[N] = !0) : (this.state[N] = 1, x = !1, d[N] === void 0 && (d[N] = !0), f[N] === void 0 && (f[N] = !0), y[v] === void 0 && (y[v] = !0)))
            }), x || (m[h] = !0)
        }), (Object.keys(f).length || Object.keys(d).length) && this.queue.push({
            pending: d,
            pendingCount: Object.keys(d).length,
            loaded: {},
            errors: [],
            callback: o
        }), {
            toLoad: Object.keys(f),
            pending: Object.keys(d),
            toLoadLanguages: Object.keys(m),
            toLoadNamespaces: Object.keys(y)
        }
    }
    loaded(l, s, r) {
        const o = l.split("|"),
            f = o[0],
            d = o[1];
        s && this.emit("failedLoading", f, d, s), !s && r && this.store.addResourceBundle(f, d, r, void 0, void 0, {
            skipCopy: !0
        }), this.state[l] = s ? -1 : 2, s && r && (this.state[l] = 0);
        const m = {};
        this.queue.forEach(y => {
            E1(y.loaded, [f], d), k1(y, l), s && y.errors.push(s), y.pendingCount === 0 && !y.done && (Object.keys(y.loaded).forEach(h => {
                m[h] || (m[h] = {});
                const x = y.loaded[h];
                x.length && x.forEach(v => {
                    m[h][v] === void 0 && (m[h][v] = !0)
                })
            }), y.done = !0, y.errors.length ? y.callback(y.errors) : y.callback())
        }), this.emit("loaded", m), this.queue = this.queue.filter(y => !y.done)
    }
    read(l, s, r, o = 0, f = this.retryTimeout, d) {
        if (!l.length) return d(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: l,
                ns: s,
                fcName: r,
                tried: o,
                wait: f,
                callback: d
            });
            return
        }
        this.readingCalls++;
        const m = (h, x) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const v = this.waitingReads.shift();
                    this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback)
                }
                if (h && x && o < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, l, s, r, o + 1, f * 2, d)
                    }, f);
                    return
                }
                d(h, x)
            },
            y = this.backend[r].bind(this.backend);
        if (y.length === 2) {
            try {
                const h = y(l, s);
                h && typeof h.then == "function" ? h.then(x => m(null, x)).catch(m) : m(null, h)
            } catch (h) {
                m(h)
            }
            return
        }
        return y(l, s, m)
    }
    prepareLoading(l, s, r = {}, o) {
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
        oe(l) && (l = this.languageUtils.toResolveHierarchy(l)), oe(s) && (s = [s]);
        const f = this.queueLoad(l, s, r, o);
        if (!f.toLoad.length) return f.pending.length || o(), null;
        f.toLoad.forEach(d => {
            this.loadOne(d)
        })
    }
    load(l, s, r) {
        this.prepareLoading(l, s, {}, r)
    }
    reload(l, s, r) {
        this.prepareLoading(l, s, {
            reload: !0
        }, r)
    }
    loadOne(l, s = "") {
        const r = l.split("|"),
            o = r[0],
            f = r[1];
        this.read(o, f, "read", void 0, void 0, (d, m) => {
            d && this.logger.warn(`${s}loading namespace ${f} for language ${o} failed`, d), !d && m && this.logger.log(`${s}loaded namespace ${f} for language ${o}`, m), this.loaded(l, d, m)
        })
    }
    saveMissing(l, s, r, o, f, d = {}, m = () => {}) {
        var y, h, x, v, N;
        if ((h = (y = this.services) == null ? void 0 : y.utils) != null && h.hasLoadedNamespace && !((v = (x = this.services) == null ? void 0 : x.utils) != null && v.hasLoadedNamespace(s))) {
            this.logger.warn(`did not save key "${r}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(r == null || r === "")) {
            if ((N = this.backend) != null && N.create) {
                const O = {
                        ...d,
                        isUpdate: f
                    },
                    S = this.backend.create.bind(this.backend);
                if (S.length < 6) try {
                    let _;
                    S.length === 5 ? _ = S(l, s, r, o, O) : _ = S(l, s, r, o), _ && typeof _.then == "function" ? _.then(M => m(null, M)).catch(m) : m(null, _)
                } catch (_) {
                    m(_)
                } else S(l, s, r, o, m, O)
            }!l || !l[0] || this.store.addResource(l[0], s, r, o)
        }
    }
}
const Pm = () => ({
        debug: !1,
        initAsync: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: i => {
            let l = {};
            if (typeof i[1] == "object" && (l = i[1]), oe(i[1]) && (l.defaultValue = i[1]), oe(i[2]) && (l.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
                const s = i[3] || i[2];
                Object.keys(s).forEach(r => {
                    l[r] = s[r]
                })
            }
            return l
        },
        interpolation: {
            escapeValue: !0,
            format: i => i,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        },
        cacheInBuiltFormats: !0
    }),
    Ym = i => {
        var l, s;
        return oe(i.ns) && (i.ns = [i.ns]), oe(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]), oe(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]), ((s = (l = i.supportedLngs) == null ? void 0 : l.indexOf) == null ? void 0 : s.call(l, "cimode")) < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate), i
    },
    zs = () => {},
    B1 = i => {
        Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(s => {
            typeof i[s] == "function" && (i[s] = i[s].bind(i))
        })
    };
class di extends tr {
    constructor(l = {}, s) {
        if (super(), this.options = Ym(l), this.services = {}, this.logger = Jt, this.modules = {
                external: []
            }, B1(this), s && !this.isInitialized && !l.isClone) {
            if (!this.options.initAsync) return this.init(l, s), this;
            setTimeout(() => {
                this.init(l, s)
            }, 0)
        }
    }
    init(l = {}, s) {
        this.isInitializing = !0, typeof l == "function" && (s = l, l = {}), l.defaultNS == null && l.ns && (oe(l.ns) ? l.defaultNS = l.ns : l.ns.indexOf("translation") < 0 && (l.defaultNS = l.ns[0]));
        const r = Pm();
        this.options = {
            ...r,
            ...this.options,
            ...Ym(l)
        }, this.options.interpolation = {
            ...r.interpolation,
            ...this.options.interpolation
        }, l.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = l.keySeparator), l.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = l.nsSeparator);
        const o = h => h ? typeof h == "function" ? new h : h : null;
        if (!this.options.isClone) {
            this.modules.logger ? Jt.init(o(this.modules.logger), this.options) : Jt.init(null, this.options);
            let h;
            this.modules.formatter ? h = this.modules.formatter : h = U1;
            const x = new Um(this.options);
            this.store = new Mm(this.options.resources, this.options);
            const v = this.services;
            v.logger = Jt, v.resourceStore = this.store, v.languageUtils = x, v.pluralResolver = new D1(x, {
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), h && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (v.formatter = o(h), v.formatter.init(v, this.options), this.options.interpolation.format = v.formatter.format.bind(v.formatter)), v.interpolator = new M1(this.options), v.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, v.backendConnector = new H1(o(this.modules.backend), v.resourceStore, v, this.options), v.backendConnector.on("*", (N, ...O) => {
                this.emit(N, ...O)
            }), this.modules.languageDetector && (v.languageDetector = o(this.modules.languageDetector), v.languageDetector.init && v.languageDetector.init(v, this.options.detection, this.options)), this.modules.i18nFormat && (v.i18nFormat = o(this.modules.i18nFormat), v.i18nFormat.init && v.i18nFormat.init(this)), this.translator = new Xs(this.services, this.options), this.translator.on("*", (N, ...O) => {
                this.emit(N, ...O)
            }), this.modules.external.forEach(N => {
                N.init && N.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, s || (s = zs), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const h = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0])
        }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(h => {
            this[h] = (...x) => this.store[h](...x)
        }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(h => {
            this[h] = (...x) => (this.store[h](...x), this)
        });
        const m = si(),
            y = () => {
                const h = (x, v) => {
                    this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), m.resolve(v), s(x, v)
                };
                if (this.languages && !this.isInitialized) return h(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, h)
            };
        return this.options.resources || !this.options.initAsync ? y() : setTimeout(y, 0), m
    }
    loadResources(l, s = zs) {
        var f, d;
        let r = s;
        const o = oe(l) ? l : this.language;
        if (typeof l == "function" && (r = l), !this.options.resources || this.options.partialBundledLanguages) {
            if ((o == null ? void 0 : o.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
            const m = [],
                y = h => {
                    if (!h || h === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(h).forEach(v => {
                        v !== "cimode" && m.indexOf(v) < 0 && m.push(v)
                    })
                };
            o ? y(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(x => y(x)), (d = (f = this.options.preload) == null ? void 0 : f.forEach) == null || d.call(f, h => y(h)), this.services.backendConnector.load(m, this.options.ns, h => {
                !h && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(h)
            })
        } else r(null)
    }
    reloadResources(l, s, r) {
        const o = si();
        return typeof l == "function" && (r = l, l = void 0), typeof s == "function" && (r = s, s = void 0), l || (l = this.languages), s || (s = this.options.ns), r || (r = zs), this.services.backendConnector.reload(l, s, f => {
            o.resolve(), r(f)
        }), o
    }
    use(l) {
        if (!l) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!l.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return l.type === "backend" && (this.modules.backend = l), (l.type === "logger" || l.log && l.warn && l.error) && (this.modules.logger = l), l.type === "languageDetector" && (this.modules.languageDetector = l), l.type === "i18nFormat" && (this.modules.i18nFormat = l), l.type === "postProcessor" && Pg.addPostProcessor(l), l.type === "formatter" && (this.modules.formatter = l), l.type === "3rdParty" && this.modules.external.push(l), this
    }
    setResolvedLanguage(l) {
        if (!(!l || !this.languages) && !(["cimode", "dev"].indexOf(l) > -1)) {
            for (let s = 0; s < this.languages.length; s++) {
                const r = this.languages[s];
                if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
                    this.resolvedLanguage = r;
                    break
                }
            }!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l) && (this.resolvedLanguage = l, this.languages.unshift(l))
        }
    }
    changeLanguage(l, s) {
        this.isLanguageChangingTo = l;
        const r = si();
        this.emit("languageChanging", l);
        const o = m => {
                this.language = m, this.languages = this.services.languageUtils.toResolveHierarchy(m), this.resolvedLanguage = void 0, this.setResolvedLanguage(m)
            },
            f = (m, y) => {
                y ? this.isLanguageChangingTo === l && (o(y), this.translator.changeLanguage(y), this.isLanguageChangingTo = void 0, this.emit("languageChanged", y), this.logger.log("languageChanged", y)) : this.isLanguageChangingTo = void 0, r.resolve((...h) => this.t(...h)), s && s(m, (...h) => this.t(...h))
            },
            d = m => {
                var x, v;
                !l && !m && this.services.languageDetector && (m = []);
                const y = oe(m) ? m : m && m[0],
                    h = this.store.hasLanguageSomeTranslations(y) ? y : this.services.languageUtils.getBestMatchFromCodes(oe(m) ? [m] : m);
                h && (this.language || o(h), this.translator.language || this.translator.changeLanguage(h), (v = (x = this.services.languageDetector) == null ? void 0 : x.cacheUserLanguage) == null || v.call(x, h)), this.loadResources(h, N => {
                    f(N, h)
                })
            };
        return !l && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !l && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(l), r
    }
    getFixedT(l, s, r) {
        const o = (f, d, ...m) => {
            let y;
            typeof d != "object" ? y = this.options.overloadTranslationOptionHandler([f, d].concat(m)) : y = {
                ...d
            }, y.lng = y.lng || o.lng, y.lngs = y.lngs || o.lngs, y.ns = y.ns || o.ns, y.keyPrefix !== "" && (y.keyPrefix = y.keyPrefix || r || o.keyPrefix);
            const h = this.options.keySeparator || ".";
            let x;
            return y.keyPrefix && Array.isArray(f) ? x = f.map(v => `${y.keyPrefix}${h}${v}`) : x = y.keyPrefix ? `${y.keyPrefix}${h}${f}` : f, this.t(x, y)
        };
        return oe(l) ? o.lng = l : o.lngs = l, o.ns = s, o.keyPrefix = r, o
    }
    t(...l) {
        var s;
        return (s = this.translator) == null ? void 0 : s.translate(...l)
    }
    exists(...l) {
        var s;
        return (s = this.translator) == null ? void 0 : s.exists(...l)
    }
    setDefaultNamespace(l) {
        this.options.defaultNS = l
    }
    hasLoadedNamespace(l, s = {}) {
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const r = s.lng || this.resolvedLanguage || this.languages[0],
            o = this.options ? this.options.fallbackLng : !1,
            f = this.languages[this.languages.length - 1];
        if (r.toLowerCase() === "cimode") return !0;
        const d = (m, y) => {
            const h = this.services.backendConnector.state[`${m}|${y}`];
            return h === -1 || h === 0 || h === 2
        };
        if (s.precheck) {
            const m = s.precheck(this, d);
            if (m !== void 0) return m
        }
        return !!(this.hasResourceBundle(r, l) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(r, l) && (!o || d(f, l)))
    }
    loadNamespaces(l, s) {
        const r = si();
        return this.options.ns ? (oe(l) && (l = [l]), l.forEach(o => {
            this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
        }), this.loadResources(o => {
            r.resolve(), s && s(o)
        }), r) : (s && s(), Promise.resolve())
    }
    loadLanguages(l, s) {
        const r = si();
        oe(l) && (l = [l]);
        const o = this.options.preload || [],
            f = l.filter(d => o.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
        return f.length ? (this.options.preload = o.concat(f), this.loadResources(d => {
            r.resolve(), s && s(d)
        }), r) : (s && s(), Promise.resolve())
    }
    dir(l) {
        var o, f;
        if (l || (l = this.resolvedLanguage || (((o = this.languages) == null ? void 0 : o.length) > 0 ? this.languages[0] : this.language)), !l) return "rtl";
        const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            r = ((f = this.services) == null ? void 0 : f.languageUtils) || new Um(Pm());
        return s.indexOf(r.getLanguagePartFromCode(l)) > -1 || l.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(l = {}, s) {
        return new di(l, s)
    }
    cloneInstance(l = {}, s = zs) {
        const r = l.forkResourceStore;
        r && delete l.forkResourceStore;
        const o = {
                ...this.options,
                ...l,
                isClone: !0
            },
            f = new di(o);
        if ((l.debug !== void 0 || l.prefix !== void 0) && (f.logger = f.logger.clone(l)), ["store", "services", "language"].forEach(m => {
                f[m] = this[m]
            }), f.services = {
                ...this.services
            }, f.services.utils = {
                hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
            }, r) {
            const m = Object.keys(this.store.data).reduce((y, h) => (y[h] = {
                ...this.store.data[h]
            }, y[h] = Object.keys(y[h]).reduce((x, v) => (x[v] = {
                ...y[h][v]
            }, x), y[h]), y), {});
            f.store = new Mm(m, o), f.services.resourceStore = f.store
        }
        return f.translator = new Xs(f.services, o), f.translator.on("*", (m, ...y) => {
            f.emit(m, ...y)
        }), f.init(o, s), f.translator.options = o, f.translator.backendConnector.services.utils = {
            hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
        }, f
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const it = di.createInstance();
it.createInstance = di.createInstance;
it.createInstance;
it.dir;
it.init;
it.loadResources;
it.reloadResources;
it.use;
it.changeLanguage;
it.getFixedT;
it.t;
it.exists;
it.setDefaultNamespace;
it.hasLoadedNamespace;
it.loadNamespaces;
it.loadLanguages;
const {
    slice: q1,
    forEach: P1
} = [];

function Y1(i) {
    return P1.call(q1.call(arguments, 1), l => {
        if (l)
            for (const s in l) i[s] === void 0 && (i[s] = l[s])
    }), i
}

function G1(i) {
    return typeof i != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(s => s.test(i))
}
const Gm = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    V1 = function(i, l) {
        const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                path: "/"
            },
            o = encodeURIComponent(l);
        let f = `${i}=${o}`;
        if (r.maxAge > 0) {
            const d = r.maxAge - 0;
            if (Number.isNaN(d)) throw new Error("maxAge should be a Number");
            f += `; Max-Age=${Math.floor(d)}`
        }
        if (r.domain) {
            if (!Gm.test(r.domain)) throw new TypeError("option domain is invalid");
            f += `; Domain=${r.domain}`
        }
        if (r.path) {
            if (!Gm.test(r.path)) throw new TypeError("option path is invalid");
            f += `; Path=${r.path}`
        }
        if (r.expires) {
            if (typeof r.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
            f += `; Expires=${r.expires.toUTCString()}`
        }
        if (r.httpOnly && (f += "; HttpOnly"), r.secure && (f += "; Secure"), r.sameSite) switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
            case !0:
                f += "; SameSite=Strict";
                break;
            case "lax":
                f += "; SameSite=Lax";
                break;
            case "strict":
                f += "; SameSite=Strict";
                break;
            case "none":
                f += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
        }
        return r.partitioned && (f += "; Partitioned"), f
    },
    Vm = {
        create(i, l, s, r) {
            let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                path: "/",
                sameSite: "strict"
            };
            s && (o.expires = new Date, o.expires.setTime(o.expires.getTime() + s * 60 * 1e3)), r && (o.domain = r), document.cookie = V1(i, encodeURIComponent(l), o)
        },
        read(i) {
            const l = `${i}=`,
                s = document.cookie.split(";");
            for (let r = 0; r < s.length; r++) {
                let o = s[r];
                for (; o.charAt(0) === " ";) o = o.substring(1, o.length);
                if (o.indexOf(l) === 0) return o.substring(l.length, o.length)
            }
            return null
        },
        remove(i) {
            this.create(i, "", -1)
        }
    };
var X1 = {
        name: "cookie",
        lookup(i) {
            let {
                lookupCookie: l
            } = i;
            if (l && typeof document < "u") return Vm.read(l) || void 0
        },
        cacheUserLanguage(i, l) {
            let {
                lookupCookie: s,
                cookieMinutes: r,
                cookieDomain: o,
                cookieOptions: f
            } = l;
            s && typeof document < "u" && Vm.create(s, i, r, o, f)
        }
    },
    $1 = {
        name: "querystring",
        lookup(i) {
            var r;
            let {
                lookupQuerystring: l
            } = i, s;
            if (typeof window < "u") {
                let {
                    search: o
                } = window.location;
                !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (o = window.location.hash.substring(window.location.hash.indexOf("?")));
                const d = o.substring(1).split("&");
                for (let m = 0; m < d.length; m++) {
                    const y = d[m].indexOf("=");
                    y > 0 && d[m].substring(0, y) === l && (s = d[m].substring(y + 1))
                }
            }
            return s
        }
    };
let Wa = null;
const Xm = () => {
    if (Wa !== null) return Wa;
    try {
        if (Wa = typeof window < "u" && window.localStorage !== null, !Wa) return !1;
        const i = "i18next.translate.boo";
        window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i)
    } catch {
        Wa = !1
    }
    return Wa
};
var Q1 = {
    name: "localStorage",
    lookup(i) {
        let {
            lookupLocalStorage: l
        } = i;
        if (l && Xm()) return window.localStorage.getItem(l) || void 0
    },
    cacheUserLanguage(i, l) {
        let {
            lookupLocalStorage: s
        } = l;
        s && Xm() && window.localStorage.setItem(s, i)
    }
};
let Ia = null;
const $m = () => {
    if (Ia !== null) return Ia;
    try {
        if (Ia = typeof window < "u" && window.sessionStorage !== null, !Ia) return !1;
        const i = "i18next.translate.boo";
        window.sessionStorage.setItem(i, "foo"), window.sessionStorage.removeItem(i)
    } catch {
        Ia = !1
    }
    return Ia
};
var K1 = {
        name: "sessionStorage",
        lookup(i) {
            let {
                lookupSessionStorage: l
            } = i;
            if (l && $m()) return window.sessionStorage.getItem(l) || void 0
        },
        cacheUserLanguage(i, l) {
            let {
                lookupSessionStorage: s
            } = l;
            s && $m() && window.sessionStorage.setItem(s, i)
        }
    },
    Z1 = {
        name: "navigator",
        lookup(i) {
            const l = [];
            if (typeof navigator < "u") {
                const {
                    languages: s,
                    userLanguage: r,
                    language: o
                } = navigator;
                if (s)
                    for (let f = 0; f < s.length; f++) l.push(s[f]);
                r && l.push(r), o && l.push(o)
            }
            return l.length > 0 ? l : void 0
        }
    },
    J1 = {
        name: "htmlTag",
        lookup(i) {
            let {
                htmlTag: l
            } = i, s;
            const r = l || (typeof document < "u" ? document.documentElement : null);
            return r && typeof r.getAttribute == "function" && (s = r.getAttribute("lang")), s
        }
    },
    F1 = {
        name: "path",
        lookup(i) {
            var o;
            let {
                lookupFromPathIndex: l
            } = i;
            if (typeof window > "u") return;
            const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(s) ? (o = s[typeof l == "number" ? l : 0]) == null ? void 0 : o.replace("/", "") : void 0
        }
    },
    W1 = {
        name: "subdomain",
        lookup(i) {
            var o, f;
            let {
                lookupFromSubdomainIndex: l
            } = i;
            const s = typeof l == "number" ? l + 1 : 1,
                r = typeof window < "u" && ((f = (o = window.location) == null ? void 0 : o.hostname) == null ? void 0 : f.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
            if (r) return r[s]
        }
    };
let Yg = !1;
try {
    document.cookie, Yg = !0
} catch {}
const Gg = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Yg || Gg.splice(1, 1);
const I1 = () => ({
    order: Gg,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: i => i
});
class Vg {
    constructor(l) {
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.type = "languageDetector", this.detectors = {}, this.init(l, s)
    }
    init() {
        let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                languageUtils: {}
            },
            s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.services = l, this.options = Y1(s, this.options || {}, I1()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = o => o.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(X1), this.addDetector($1), this.addDetector(Q1), this.addDetector(K1), this.addDetector(Z1), this.addDetector(J1), this.addDetector(F1), this.addDetector(W1)
    }
    addDetector(l) {
        return this.detectors[l.name] = l, this
    }
    detect() {
        let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order,
            s = [];
        return l.forEach(r => {
            if (this.detectors[r]) {
                let o = this.detectors[r].lookup(this.options);
                o && typeof o == "string" && (o = [o]), o && (s = s.concat(o))
            }
        }), s = s.filter(r => r != null && !G1(r)).map(r => this.options.convertDetectedLanguage(r)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? s : s.length > 0 ? s[0] : null
    }
    cacheUserLanguage(l) {
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
        s && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(l) > -1 || s.forEach(r => {
            this.detectors[r] && this.detectors[r].cacheUserLanguage(l, this.options)
        }))
    }
}
Vg.type = "languageDetector";
const eS = "커뮤니티, Ai 채팅, 게임까지!",
    tS = "React & Tailwind CSS 기반의 플랫폼입니다.",
    nS = {
        platform: eS,
        platformDesc: tS
    },
    aS = "연락처",
    lS = `안녕하세요! 저는 신건우입니다.
제 전공은 컴퓨터공학이고,
개발자로 일하고 있습니다.

이 프로젝트는 오랜 저의 꿈이였습니다.
응원해주세요!`,
    iS = "👉 GitHub 바로가기",
    sS = {
        contact: aS,
        aboutContent: lS,
        githubLink: iS
    },
    rS = {
        title: "숫자야구 게임",
        inputPlaceholder: "예: 123",
        submit: "확인",
        restart: "다시 시작",
        correct: "정답! 축하합니다! (정답: {{answer}})",
        invalidInput: "1~9까지 서로 다른 숫자 3자리를 입력하세요.",
        strike: "S",
        ball: "B",
        out: "O"
    },
    uS = {
        title: "숫자 맞추기 게임",
        inputPlaceholder: "1~100",
        submit: "확인",
        correct: "정답입니다! 시도 횟수: {{count}}",
        up: "UP",
        down: "DOWN"
    },
    oS = {
        numberBaseball: rS,
        numberGuess: uS
    },
    cS = "AI 채팅",
    fS = "메시지를 입력하세요...",
    dS = "전송",
    hS = "메시지를 입력해보세요!",
    mS = "현재는 사용할 수 없는 기능입니다.",
    gS = {
        title: cS,
        placeholder: fS,
        send: dS,
        emptyMessage: hS,
        unavailable: mS
    },
    pS = "커뮤니티",
    yS = "커뮤니티 규칙",
    bS = "게시글 작성",
    xS = {
        title: "아직 게시글이 없습니다.",
        subtitle: "첫 번째 게시글을 작성해보세요!"
    },
    vS = "불러오는 중...",
    SS = "← 돌아가기",
    wS = {
        title: "커뮤니티 규칙",
        basic: {
            title: "1. 기본 규칙",
            items: ["서로를 존중하고 예의를 지켜주세요.", "타인의 권리를 침해하는 행위는 금지됩니다.", "욕설, 비방, 혐오 발언은 금지됩니다."]
        },
        post: {
            title: "2. 게시글 작성 규칙",
            items: ["제목은 내용을 잘 설명할 수 있도록 작성해주세요.", "스팸성 게시글은 금지됩니다.", "광고성 게시글은 사전 허가 없이 금지됩니다.", "저작권이 있는 콘텐츠는 출처를 명시해주세요."]
        },
        comment: {
            title: "3. 댓글 작성 규칙",
            items: ["댓글은 주제와 관련된 내용으로 작성해주세요.", "타인을 비방하거나 모욕하는 댓글은 금지됩니다.", "도배성 댓글은 제한될 수 있습니다."]
        },
        penalty: {
            title: "4. 제재 규정",
            items: ["규칙 위반 시 해당 게시글 또는 댓글은 즉각 삭제 조치가 이루어집니다.", "반복적인 위반 시 영구적인 이용 제한이 될 수 있습니다."]
        },
        notice: "커뮤니티 규칙은 모든 회원이 더 나은 환경에서 소통할 수 있도록 마련되었습니다. 규칙을 준수하여 즐거운 커뮤니티 활동이 되시길 바랍니다."
    },
    ES = {
        title: "새 글 작성",
        form: {
            title: "제목",
            titlePlaceholder: "제목을 입력해주세요",
            nickname: "닉네임",
            nicknamePlaceholder: "닉네임을 입력해주세요",
            content: "내용",
            contentPlaceholder: "내용을 입력해주세요",
            password: "비밀번호",
            passwordPlaceholder: "숫자 4자리",
            passwordHelp: "* 게시글 수정/삭제 시 필요합니다",
            cancel: "취소",
            submit: "작성하기"
        },
        error: {
            invalidPassword: "비밀번호는 숫자 4자리여야 합니다."
        }
    },
    NS = {
        goToList: "목록으로",
        edit: "수정",
        delete: "삭제",
        confirmDelete: "정말로 삭제하시겠습니까?",
        deleteSuccess: "게시글 삭제 완료",
        submit: "확인",
        cancel: "취소",
        error: {
            invalidPassword: "비밀번호가 일치하지 않습니다.",
            deleteFailed: "삭제에 실패했습니다.",
            editFailed: "수정에 실패했습니다."
        },
        comment: {
            title: "댓글",
            noComments: "아직 댓글이 없습니다.",
            nickname: "닉네임",
            placeholder: "댓글을 입력하세요...",
            submit: "작성",
            edit: "수정",
            delete: "삭제",
            password: "비밀번호",
            passwordPlaceholder: "숫자 4자리",
            passwordModal: {
                edit: "댓글 수정 비밀번호",
                delete: "댓글 삭제 비밀번호"
            },
            error: {
                invalidPassword: "비밀번호가 일치하지 않습니다.",
                deleteFailed: "댓글 삭제에 실패했습니다.",
                editFailed: "댓글 수정에 실패했습니다."
            }
        },
        passwordModal: {
            edit: "게시글 수정 비밀번호",
            delete: "게시글 삭제 비밀번호",
            placeholder: "비밀번호(숫자 4자리)"
        },
        like: {
            add: "좋아요",
            remove: "좋아요 취소"
        }
    },
    RS = {
        title: pS,
        rules: yS,
        write: bS,
        noPosts: xS,
        loading: vS,
        back: SS,
        rulesPage: wS,
        writePage: ES,
        detailPage: NS
    },
    jS = "Community, AI Chat, and Games!",
    OS = "A platform based on React & Tailwind CSS.",
    TS = {
        platform: jS,
        platformDesc: OS
    },
    CS = "Contact",
    AS = `Hello! I am Geonwoo Shin.
My major is Computer Science,
and I work as a developer.

This project has been my long-time dream.
Please support me!`,
    _S = "👉 Go to GitHub",
    DS = {
        contact: CS,
        aboutContent: AS,
        githubLink: _S
    },
    MS = {
        title: "Number Baseball Game",
        inputPlaceholder: "ex: 123",
        submit: "Submit",
        restart: "Restart",
        correct: "Correct! Congratulations! (Answer: {{answer}})",
        invalidInput: "Please enter 3 different digits from 1 to 9.",
        strike: "S",
        ball: "B",
        out: "O"
    },
    zS = {
        title: "Number Guessing Game",
        inputPlaceholder: "1~100",
        submit: "Submit",
        correct: "Correct! Number of attempts: {{count}}",
        up: "UP",
        down: "DOWN"
    },
    LS = {
        numberBaseball: MS,
        numberGuess: zS
    },
    US = "AI Chat",
    kS = "Type a message...",
    HS = "Send",
    BS = "Type a message to start!",
    qS = "This feature is currently unavailable.",
    PS = {
        title: US,
        placeholder: kS,
        send: HS,
        emptyMessage: BS,
        unavailable: qS
    },
    YS = "Community",
    GS = "Community Rules",
    VS = "Write Post",
    XS = {
        title: "No posts yet.",
        subtitle: "Be the first to write a post!"
    },
    $S = "Loading...",
    QS = "← Back",
    KS = {
        title: "Community Rules",
        basic: {
            title: "1. Basic Rules",
            items: ["Please respect others and maintain good manners.", "Actions that infringe on others' rights are prohibited.", "Profanity, slander, and hate speech are prohibited."]
        },
        post: {
            title: "2. Posting Rules",
            items: ["Please write titles that clearly describe the content.", "Spam posts are prohibited.", "Advertising posts are prohibited without prior permission.", "Please cite sources for copyrighted content."]
        },
        comment: {
            title: "3. Comment Rules",
            items: ["Please write comments related to the topic.", "Comments that slander or insult others are prohibited.", "Excessive commenting may be restricted."]
        },
        penalty: {
            title: "4. Penalty Regulations",
            items: ["Posts or comments that violate rules will be immediately deleted.", "Repeated violations may result in permanent restrictions."]
        },
        notice: "Community rules are established to help all members communicate in a better environment. Please follow the rules for an enjoyable community experience."
    },
    ZS = {
        title: "Write New Post",
        form: {
            title: "Title",
            titlePlaceholder: "Enter title",
            nickname: "Nickname",
            nicknamePlaceholder: "Enter nickname",
            content: "Content",
            contentPlaceholder: "Enter content",
            password: "Password",
            passwordPlaceholder: "4 digits",
            passwordHelp: "* Required for editing/deleting posts",
            cancel: "Cancel",
            submit: "Submit"
        },
        error: {
            invalidPassword: "Password must be 4 digits."
        }
    },
    JS = {
        goToList: "Back",
        edit: "Edit",
        delete: "Delete",
        confirmDelete: "Are you sure you want to delete this post?",
        deleteSuccess: "Post deleted successfully.",
        submit: "Submit",
        cancel: "Cancel",
        error: {
            invalidPassword: "Password does not match.",
            deleteFailed: "Failed to delete post.",
            editFailed: "Failed to edit post."
        },
        comment: {
            title: "Comments",
            noComments: "No comments yet.",
            nickname: "Nickname",
            placeholder: "Write a comment...",
            submit: "Submit",
            edit: "Edit",
            delete: "Delete",
            password: "Password",
            passwordPlaceholder: "4 digits",
            passwordModal: {
                edit: "Comment Edit Password",
                delete: "Comment Delete Password"
            },
            error: {
                invalidPassword: "Password does not match.",
                deleteFailed: "Failed to delete comment.",
                editFailed: "Failed to edit comment."
            }
        },
        passwordModal: {
            edit: "Post Edit Password",
            delete: "Post Delete Password",
            placeholder: "Password(4 digits)"
        },
        like: {
            add: "Like",
            remove: "Unlike"
        }
    },
    FS = {
        title: YS,
        rules: GS,
        write: VS,
        noPosts: XS,
        loading: $S,
        back: QS,
        rulesPage: KS,
        writePage: ZS,
        detailPage: JS
    };
it.use(Vg).use(sx).init({
    resources: {
        ko: {
            translation: {
                homePage: nS,
                aboutPage: sS,
                gamePage: oS,
                aiChatPage: gS,
                communityPage: RS
            }
        },
        en: {
            translation: {
                homePage: TS,
                aboutPage: DS,
                gamePage: LS,
                aiChatPage: PS,
                communityPage: FS
            }
        }
    },
    fallbackLng: "ko",
    interpolation: {
        escapeValue: !1
    }
});
const WS = async () => {
    try {
        Ey.createRoot(document.getElementById("root")).render(p.jsx(T.StrictMode, {
            children: p.jsx(v1, {})
        }))
    } catch (i) {
        console.error("앱 초기화 중 오류 발생:", i)
    }
};
WS();
