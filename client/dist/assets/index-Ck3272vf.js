var bS = Object.defineProperty;
var NS = (e, t, n) =>
  t in e
    ? bS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Xl = (e, t, n) => NS(e, typeof t != "symbol" ? t + "" : t, n);
function jS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function Gm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var qm = { exports: {} },
  Qa = {},
  Qm = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $s = Symbol.for("react.element"),
  RS = Symbol.for("react.portal"),
  PS = Symbol.for("react.fragment"),
  kS = Symbol.for("react.strict_mode"),
  TS = Symbol.for("react.profiler"),
  _S = Symbol.for("react.provider"),
  OS = Symbol.for("react.context"),
  AS = Symbol.for("react.forward_ref"),
  MS = Symbol.for("react.suspense"),
  LS = Symbol.for("react.memo"),
  FS = Symbol.for("react.lazy"),
  Cp = Symbol.iterator;
function DS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cp && e[Cp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ym = Object.assign,
  Jm = {};
function vo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Jm),
    (this.updater = n || Xm);
}
vo.prototype.isReactComponent = {};
vo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
vo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zm() {}
Zm.prototype = vo.prototype;
function Cd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Jm),
    (this.updater = n || Xm);
}
var Ed = (Cd.prototype = new Zm());
Ed.constructor = Cd;
Ym(Ed, vo.prototype);
Ed.isPureReactComponent = !0;
var Ep = Array.isArray,
  eg = Object.prototype.hasOwnProperty,
  bd = { current: null },
  tg = { key: !0, ref: !0, __self: !0, __source: !0 };
function ng(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      eg.call(t, r) && !tg.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: $s,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: bd.current,
  };
}
function IS(e, t) {
  return {
    $$typeof: $s,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Nd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $s;
}
function $S(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bp = /\/+/g;
function Yl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? $S("" + e.key)
    : t.toString(36);
}
function Oi(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $s:
          case RS:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Yl(i, 0) : r),
      Ep(o)
        ? ((n = ""),
          e != null && (n = e.replace(bp, "$&/") + "/"),
          Oi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Nd(o) &&
            (o = IS(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(bp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ep(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Yl(s, a);
      i += Oi(s, t, n, l, o);
    }
  else if (((l = DS(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + Yl(s, a++)), (i += Oi(s, t, n, l, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function oi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Oi(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function zS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var We = { current: null },
  Ai = { transition: null },
  US = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: Ai,
    ReactCurrentOwner: bd,
  };
function rg() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: oi,
  forEach: function (e, t, n) {
    oi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Nd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = vo;
Y.Fragment = PS;
Y.Profiler = TS;
Y.PureComponent = Cd;
Y.StrictMode = kS;
Y.Suspense = MS;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = US;
Y.act = rg;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ym({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = bd.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      eg.call(t, l) &&
        !tg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: $s, type: e.type, key: o, ref: s, props: r, _owner: i };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: OS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _S, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = ng;
Y.createFactory = function (e) {
  var t = ng.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: AS, render: e };
};
Y.isValidElement = Nd;
Y.lazy = function (e) {
  return { $$typeof: FS, _payload: { _status: -1, _result: e }, _init: zS };
};
Y.memo = function (e, t) {
  return { $$typeof: LS, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Ai.transition;
  Ai.transition = {};
  try {
    e();
  } finally {
    Ai.transition = t;
  }
};
Y.unstable_act = rg;
Y.useCallback = function (e, t) {
  return We.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return We.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return We.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return We.current.useEffect(e, t);
};
Y.useId = function () {
  return We.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return We.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return We.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return We.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return We.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return We.current.useRef(e);
};
Y.useState = function (e) {
  return We.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return We.current.useTransition();
};
Y.version = "18.3.1";
Qm.exports = Y;
var p = Qm.exports;
const Zt = Gm(p),
  aa = jS({ __proto__: null, default: Zt }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var BS = p,
  VS = Symbol.for("react.element"),
  WS = Symbol.for("react.fragment"),
  HS = Object.prototype.hasOwnProperty,
  KS = BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  GS = { key: !0, ref: !0, __self: !0, __source: !0 };
function og(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) HS.call(t, r) && !GS.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: VS,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: KS.current,
  };
}
Qa.Fragment = WS;
Qa.jsx = og;
Qa.jsxs = og;
qm.exports = Qa;
var c = qm.exports,
  sg = { exports: {} },
  ft = {},
  ig = { exports: {} },
  ag = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, P) {
    var D = k.length;
    k.push(P);
    e: for (; 0 < D; ) {
      var V = (D - 1) >>> 1,
        X = k[V];
      if (0 < o(X, P)) (k[V] = P), (k[D] = X), (D = V);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var P = k[0],
      D = k.pop();
    if (D !== P) {
      k[0] = D;
      e: for (var V = 0, X = k.length, je = X >>> 1; V < je; ) {
        var ge = 2 * (V + 1) - 1,
          et = k[ge],
          Se = ge + 1,
          z = k[Se];
        if (0 > o(et, D))
          Se < X && 0 > o(z, et)
            ? ((k[V] = z), (k[Se] = D), (V = Se))
            : ((k[V] = et), (k[ge] = D), (V = ge));
        else if (Se < X && 0 > o(z, D)) (k[V] = z), (k[Se] = D), (V = Se);
        else break e;
      }
    }
    return P;
  }
  function o(k, P) {
    var D = k.sortIndex - P.sortIndex;
    return D !== 0 ? D : k.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    f = null,
    m = 3,
    S = !1,
    h = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(k) {
    for (var P = n(u); P !== null; ) {
      if (P.callback === null) r(u);
      else if (P.startTime <= k)
        r(u), (P.sortIndex = P.expirationTime), t(l, P);
      else break;
      P = n(u);
    }
  }
  function C(k) {
    if (((y = !1), x(k), !h))
      if (n(l) !== null) (h = !0), W(E);
      else {
        var P = n(u);
        P !== null && $(C, P.startTime - k);
      }
  }
  function E(k, P) {
    (h = !1), y && ((y = !1), v(j), (j = -1)), (S = !0);
    var D = m;
    try {
      for (
        x(P), f = n(l);
        f !== null && (!(f.expirationTime > P) || (k && !B()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var X = V(f.expirationTime <= P);
          (P = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(l) && r(l),
            x(P);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var je = !0;
      else {
        var ge = n(u);
        ge !== null && $(C, ge.startTime - P), (je = !1);
      }
      return je;
    } finally {
      (f = null), (m = D), (S = !1);
    }
  }
  var N = !1,
    b = null,
    j = -1,
    O = 5,
    _ = -1;
  function B() {
    return !(e.unstable_now() - _ < O);
  }
  function M() {
    if (b !== null) {
      var k = e.unstable_now();
      _ = k;
      var P = !0;
      try {
        P = b(!0, k);
      } finally {
        P ? G() : ((N = !1), (b = null));
      }
    } else N = !1;
  }
  var G;
  if (typeof g == "function")
    G = function () {
      g(M);
    };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(),
      U = A.port2;
    (A.port1.onmessage = M),
      (G = function () {
        U.postMessage(null);
      });
  } else
    G = function () {
      w(M, 0);
    };
  function W(k) {
    (b = k), N || ((N = !0), G());
  }
  function $(k, P) {
    j = w(function () {
      k(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || S || ((h = !0), W(E));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (k) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var D = m;
      m = P;
      try {
        return k();
      } finally {
        m = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, P) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var D = m;
      m = k;
      try {
        return P();
      } finally {
        m = D;
      }
    }),
    (e.unstable_scheduleCallback = function (k, P, D) {
      var V = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? V + D : V))
          : (D = V),
        k)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = D + X),
        (k = {
          id: d++,
          callback: P,
          priorityLevel: k,
          startTime: D,
          expirationTime: X,
          sortIndex: -1,
        }),
        D > V
          ? ((k.sortIndex = D),
            t(u, k),
            n(l) === null &&
              k === n(u) &&
              (y ? (v(j), (j = -1)) : (y = !0), $(C, D - V)))
          : ((k.sortIndex = X), t(l, k), h || S || ((h = !0), W(E))),
        k
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (k) {
      var P = m;
      return function () {
        var D = m;
        m = P;
        try {
          return k.apply(this, arguments);
        } finally {
          m = D;
        }
      };
    });
})(ag);
ig.exports = ag;
var qS = ig.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var QS = p,
  ct = qS;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var lg = new Set(),
  fs = {};
function kr(e, t) {
  io(e, t), io(e + "Capture", t);
}
function io(e, t) {
  for (fs[e] = t, e = 0; e < t.length; e++) lg.add(t[e]);
}
var an = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kc = Object.prototype.hasOwnProperty,
  XS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Np = {},
  jp = {};
function YS(e) {
  return Kc.call(jp, e)
    ? !0
    : Kc.call(Np, e)
    ? !1
    : XS.test(e)
    ? (jp[e] = !0)
    : ((Np[e] = !0), !1);
}
function JS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ZS(e, t, n, r) {
  if (t === null || typeof t > "u" || JS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function He(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Fe[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Fe[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Fe[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Fe[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Fe[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Fe[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Fe[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Fe[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jd = /[\-:]([a-z])/g;
function Rd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jd, Rd);
    Fe[t] = new He(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jd, Rd);
    Fe[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(jd, Rd);
  Fe[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Fe[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Fe.xlinkHref = new He(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Fe[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pd(e, t, n, r) {
  var o = Fe.hasOwnProperty(t) ? Fe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ZS(t, n, o, r) && (n = null),
    r || o === null
      ? YS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hn = QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  si = Symbol.for("react.element"),
  Dr = Symbol.for("react.portal"),
  Ir = Symbol.for("react.fragment"),
  kd = Symbol.for("react.strict_mode"),
  Gc = Symbol.for("react.profiler"),
  cg = Symbol.for("react.provider"),
  ug = Symbol.for("react.context"),
  Td = Symbol.for("react.forward_ref"),
  qc = Symbol.for("react.suspense"),
  Qc = Symbol.for("react.suspense_list"),
  _d = Symbol.for("react.memo"),
  bn = Symbol.for("react.lazy"),
  dg = Symbol.for("react.offscreen"),
  Rp = Symbol.iterator;
function Ao(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rp && e[Rp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  Jl;
function Wo(e) {
  if (Jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Jl = (t && t[1]) || "";
    }
  return (
    `
` +
    Jl +
    e
  );
}
var Zl = !1;
function ec(e, t) {
  if (!e || Zl) return "";
  Zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && o[i] !== s[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== s[a])) {
                var l =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wo(e) : "";
}
function eC(e) {
  switch (e.tag) {
    case 5:
      return Wo(e.type);
    case 16:
      return Wo("Lazy");
    case 13:
      return Wo("Suspense");
    case 19:
      return Wo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ec(e.type, !1)), e;
    case 11:
      return (e = ec(e.type.render, !1)), e;
    case 1:
      return (e = ec(e.type, !0)), e;
    default:
      return "";
  }
}
function Xc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ir:
      return "Fragment";
    case Dr:
      return "Portal";
    case Gc:
      return "Profiler";
    case kd:
      return "StrictMode";
    case qc:
      return "Suspense";
    case Qc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ug:
        return (e.displayName || "Context") + ".Consumer";
      case cg:
        return (e._context.displayName || "Context") + ".Provider";
      case Td:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _d:
        return (
          (t = e.displayName || null), t !== null ? t : Xc(e.type) || "Memo"
        );
      case bn:
        (t = e._payload), (e = e._init);
        try {
          return Xc(e(t));
        } catch {}
    }
  return null;
}
function tC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xc(t);
    case 8:
      return t === kd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function fg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function nC(e) {
  var t = fg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ii(e) {
  e._valueTracker || (e._valueTracker = nC(e));
}
function pg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = fg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function la(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yc(e, t) {
  var n = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function hg(e, t) {
  (t = t.checked), t != null && Pd(e, "checked", t, !1);
}
function Jc(e, t) {
  hg(e, t);
  var n = Un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zc(e, t.type, Un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function kp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zc(e, t, n) {
  (t !== "number" || la(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ho = Array.isArray;
function Qr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function eu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Ho(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Un(n) };
}
function mg(e, t) {
  var n = Un(t.value),
    r = Un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _p(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function tu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ai,
  vg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ai = ai || document.createElement("div"),
          ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ai.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ps(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  rC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yo).forEach(function (e) {
  rC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yo[t] = Yo[e]);
  });
});
function yg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yo.hasOwnProperty(e) && Yo[e])
    ? ("" + t).trim()
    : t + "px";
}
function xg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = yg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var oC = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function nu(e, t) {
  if (t) {
    if (oC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function ru(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var ou = null;
function Od(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var su = null,
  Xr = null,
  Yr = null;
function Op(e) {
  if ((e = Bs(e))) {
    if (typeof su != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = el(t)), su(e.stateNode, e.type, t));
  }
}
function wg(e) {
  Xr ? (Yr ? Yr.push(e) : (Yr = [e])) : (Xr = e);
}
function Sg() {
  if (Xr) {
    var e = Xr,
      t = Yr;
    if (((Yr = Xr = null), Op(e), t)) for (e = 0; e < t.length; e++) Op(t[e]);
  }
}
function Cg(e, t) {
  return e(t);
}
function Eg() {}
var tc = !1;
function bg(e, t, n) {
  if (tc) return e(t, n);
  tc = !0;
  try {
    return Cg(e, t, n);
  } finally {
    (tc = !1), (Xr !== null || Yr !== null) && (Eg(), Sg());
  }
}
function hs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = el(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var iu = !1;
if (an)
  try {
    var Mo = {};
    Object.defineProperty(Mo, "passive", {
      get: function () {
        iu = !0;
      },
    }),
      window.addEventListener("test", Mo, Mo),
      window.removeEventListener("test", Mo, Mo);
  } catch {
    iu = !1;
  }
function sC(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Jo = !1,
  ca = null,
  ua = !1,
  au = null,
  iC = {
    onError: function (e) {
      (Jo = !0), (ca = e);
    },
  };
function aC(e, t, n, r, o, s, i, a, l) {
  (Jo = !1), (ca = null), sC.apply(iC, arguments);
}
function lC(e, t, n, r, o, s, i, a, l) {
  if ((aC.apply(this, arguments), Jo)) {
    if (Jo) {
      var u = ca;
      (Jo = !1), (ca = null);
    } else throw Error(T(198));
    ua || ((ua = !0), (au = u));
  }
}
function Tr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ng(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ap(e) {
  if (Tr(e) !== e) throw Error(T(188));
}
function cC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tr(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Ap(o), e;
        if (s === r) return Ap(o), t;
        s = s.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function jg(e) {
  return (e = cC(e)), e !== null ? Rg(e) : null;
}
function Rg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pg = ct.unstable_scheduleCallback,
  Mp = ct.unstable_cancelCallback,
  uC = ct.unstable_shouldYield,
  dC = ct.unstable_requestPaint,
  Ce = ct.unstable_now,
  fC = ct.unstable_getCurrentPriorityLevel,
  Ad = ct.unstable_ImmediatePriority,
  kg = ct.unstable_UserBlockingPriority,
  da = ct.unstable_NormalPriority,
  pC = ct.unstable_LowPriority,
  Tg = ct.unstable_IdlePriority,
  Xa = null,
  Kt = null;
function hC(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function")
    try {
      Kt.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : vC,
  mC = Math.log,
  gC = Math.LN2;
function vC(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mC(e) / gC) | 0)) | 0;
}
var li = 64,
  ci = 4194304;
function Ko(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = Ko(a)) : ((s &= i), s !== 0 && (r = Ko(s)));
  } else (i = n & ~o), i !== 0 ? (r = Ko(i)) : s !== 0 && (r = Ko(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function yC(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xC(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - kt(s),
      a = 1 << i,
      l = o[i];
    l === -1
      ? (!(a & n) || a & r) && (o[i] = yC(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function lu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _g() {
  var e = li;
  return (li <<= 1), !(li & 4194240) && (li = 64), e;
}
function nc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function wC(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - kt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function Md(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var re = 0;
function Og(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ag,
  Ld,
  Mg,
  Lg,
  Fg,
  cu = !1,
  ui = [],
  _n = null,
  On = null,
  An = null,
  ms = new Map(),
  gs = new Map(),
  jn = [],
  SC =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _n = null;
      break;
    case "dragenter":
    case "dragleave":
      On = null;
      break;
    case "mouseover":
    case "mouseout":
      An = null;
      break;
    case "pointerover":
    case "pointerout":
      ms.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gs.delete(t.pointerId);
  }
}
function Lo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = Bs(t)), t !== null && Ld(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function CC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (_n = Lo(_n, e, t, n, r, o)), !0;
    case "dragenter":
      return (On = Lo(On, e, t, n, r, o)), !0;
    case "mouseover":
      return (An = Lo(An, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return ms.set(s, Lo(ms.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), gs.set(s, Lo(gs.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Dg(e) {
  var t = ir(e.target);
  if (t !== null) {
    var n = Tr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ng(n)), t !== null)) {
          (e.blockedOn = t),
            Fg(e.priority, function () {
              Mg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ou = r), n.target.dispatchEvent(r), (ou = null);
    } else return (t = Bs(n)), t !== null && Ld(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Fp(e, t, n) {
  Mi(e) && n.delete(t);
}
function EC() {
  (cu = !1),
    _n !== null && Mi(_n) && (_n = null),
    On !== null && Mi(On) && (On = null),
    An !== null && Mi(An) && (An = null),
    ms.forEach(Fp),
    gs.forEach(Fp);
}
function Fo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cu ||
      ((cu = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, EC)));
}
function vs(e) {
  function t(o) {
    return Fo(o, e);
  }
  if (0 < ui.length) {
    Fo(ui[0], e);
    for (var n = 1; n < ui.length; n++) {
      var r = ui[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _n !== null && Fo(_n, e),
      On !== null && Fo(On, e),
      An !== null && Fo(An, e),
      ms.forEach(t),
      gs.forEach(t),
      n = 0;
    n < jn.length;
    n++
  )
    (r = jn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
    Dg(n), n.blockedOn === null && jn.shift();
}
var Jr = hn.ReactCurrentBatchConfig,
  pa = !0;
function bC(e, t, n, r) {
  var o = re,
    s = Jr.transition;
  Jr.transition = null;
  try {
    (re = 1), Fd(e, t, n, r);
  } finally {
    (re = o), (Jr.transition = s);
  }
}
function NC(e, t, n, r) {
  var o = re,
    s = Jr.transition;
  Jr.transition = null;
  try {
    (re = 4), Fd(e, t, n, r);
  } finally {
    (re = o), (Jr.transition = s);
  }
}
function Fd(e, t, n, r) {
  if (pa) {
    var o = uu(e, t, n, r);
    if (o === null) fc(e, t, r, ha, n), Lp(e, r);
    else if (CC(o, e, t, n, r)) r.stopPropagation();
    else if ((Lp(e, r), t & 4 && -1 < SC.indexOf(e))) {
      for (; o !== null; ) {
        var s = Bs(o);
        if (
          (s !== null && Ag(s),
          (s = uu(e, t, n, r)),
          s === null && fc(e, t, r, ha, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else fc(e, t, r, null, n);
  }
}
var ha = null;
function uu(e, t, n, r) {
  if (((ha = null), (e = Od(r)), (e = ir(e)), e !== null))
    if (((t = Tr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ng(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ha = e), null;
}
function Ig(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (fC()) {
        case Ad:
          return 1;
        case kg:
          return 4;
        case da:
        case pC:
          return 16;
        case Tg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pn = null,
  Dd = null,
  Li = null;
function $g() {
  if (Li) return Li;
  var e,
    t = Dd,
    n = t.length,
    r,
    o = "value" in Pn ? Pn.value : Pn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Li = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Fi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function di() {
  return !0;
}
function Dp() {
  return !1;
}
function pt(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? di
        : Dp),
      (this.isPropagationStopped = Dp),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = di));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = di));
      },
      persist: function () {},
      isPersistent: di,
    }),
    t
  );
}
var yo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Id = pt(yo),
  Us = xe({}, yo, { view: 0, detail: 0 }),
  jC = pt(Us),
  rc,
  oc,
  Do,
  Ya = xe({}, Us, {
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
    getModifierState: $d,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Do &&
            (Do && e.type === "mousemove"
              ? ((rc = e.screenX - Do.screenX), (oc = e.screenY - Do.screenY))
              : (oc = rc = 0),
            (Do = e)),
          rc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : oc;
    },
  }),
  Ip = pt(Ya),
  RC = xe({}, Ya, { dataTransfer: 0 }),
  PC = pt(RC),
  kC = xe({}, Us, { relatedTarget: 0 }),
  sc = pt(kC),
  TC = xe({}, yo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _C = pt(TC),
  OC = xe({}, yo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  AC = pt(OC),
  MC = xe({}, yo, { data: 0 }),
  $p = pt(MC),
  LC = {
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
    MozPrintableKey: "Unidentified",
  },
  FC = {
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
    224: "Meta",
  },
  DC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function IC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = DC[e]) ? !!t[e] : !1;
}
function $d() {
  return IC;
}
var $C = xe({}, Us, {
    key: function (e) {
      if (e.key) {
        var t = LC[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? FC[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $d,
    charCode: function (e) {
      return e.type === "keypress" ? Fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  zC = pt($C),
  UC = xe({}, Ya, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zp = pt(UC),
  BC = xe({}, Us, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $d,
  }),
  VC = pt(BC),
  WC = xe({}, yo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  HC = pt(WC),
  KC = xe({}, Ya, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  GC = pt(KC),
  qC = [9, 13, 27, 32],
  zd = an && "CompositionEvent" in window,
  Zo = null;
an && "documentMode" in document && (Zo = document.documentMode);
var QC = an && "TextEvent" in window && !Zo,
  zg = an && (!zd || (Zo && 8 < Zo && 11 >= Zo)),
  Up = " ",
  Bp = !1;
function Ug(e, t) {
  switch (e) {
    case "keyup":
      return qC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $r = !1;
function XC(e, t) {
  switch (e) {
    case "compositionend":
      return Bg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Bp = !0), Up);
    case "textInput":
      return (e = t.data), e === Up && Bp ? null : e;
    default:
      return null;
  }
}
function YC(e, t) {
  if ($r)
    return e === "compositionend" || (!zd && Ug(e, t))
      ? ((e = $g()), (Li = Dd = Pn = null), ($r = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return zg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var JC = {
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
  week: !0,
};
function Vp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!JC[e.type] : t === "textarea";
}
function Vg(e, t, n, r) {
  wg(r),
    (t = ma(t, "onChange")),
    0 < t.length &&
      ((n = new Id("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var es = null,
  ys = null;
function ZC(e) {
  ev(e, 0);
}
function Ja(e) {
  var t = Br(e);
  if (pg(t)) return e;
}
function eE(e, t) {
  if (e === "change") return t;
}
var Wg = !1;
if (an) {
  var ic;
  if (an) {
    var ac = "oninput" in document;
    if (!ac) {
      var Wp = document.createElement("div");
      Wp.setAttribute("oninput", "return;"),
        (ac = typeof Wp.oninput == "function");
    }
    ic = ac;
  } else ic = !1;
  Wg = ic && (!document.documentMode || 9 < document.documentMode);
}
function Hp() {
  es && (es.detachEvent("onpropertychange", Hg), (ys = es = null));
}
function Hg(e) {
  if (e.propertyName === "value" && Ja(ys)) {
    var t = [];
    Vg(t, ys, e, Od(e)), bg(ZC, t);
  }
}
function tE(e, t, n) {
  e === "focusin"
    ? (Hp(), (es = t), (ys = n), es.attachEvent("onpropertychange", Hg))
    : e === "focusout" && Hp();
}
function nE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ja(ys);
}
function rE(e, t) {
  if (e === "click") return Ja(t);
}
function oE(e, t) {
  if (e === "input" || e === "change") return Ja(t);
}
function sE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == "function" ? Object.is : sE;
function xs(e, t) {
  if (Ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Kc.call(t, o) || !Ot(e[o], t[o])) return !1;
  }
  return !0;
}
function Kp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gp(e, t) {
  var n = Kp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kp(n);
  }
}
function Kg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Kg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gg() {
  for (var e = window, t = la(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = la(e.document);
  }
  return t;
}
function Ud(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function iE(e) {
  var t = Gg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Kg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ud(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Gp(n, s));
        var i = Gp(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var aE = an && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  du = null,
  ts = null,
  fu = !1;
function qp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fu ||
    zr == null ||
    zr !== la(r) ||
    ((r = zr),
    "selectionStart" in r && Ud(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ts && xs(ts, r)) ||
      ((ts = r),
      (r = ma(du, "onSelect")),
      0 < r.length &&
        ((t = new Id("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zr))));
}
function fi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ur = {
    animationend: fi("Animation", "AnimationEnd"),
    animationiteration: fi("Animation", "AnimationIteration"),
    animationstart: fi("Animation", "AnimationStart"),
    transitionend: fi("Transition", "TransitionEnd"),
  },
  lc = {},
  qg = {};
an &&
  ((qg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ur.animationend.animation,
    delete Ur.animationiteration.animation,
    delete Ur.animationstart.animation),
  "TransitionEvent" in window || delete Ur.transitionend.transition);
function Za(e) {
  if (lc[e]) return lc[e];
  if (!Ur[e]) return e;
  var t = Ur[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qg) return (lc[e] = t[n]);
  return e;
}
var Qg = Za("animationend"),
  Xg = Za("animationiteration"),
  Yg = Za("animationstart"),
  Jg = Za("transitionend"),
  Zg = new Map(),
  Qp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qn(e, t) {
  Zg.set(e, t), kr(t, [e]);
}
for (var cc = 0; cc < Qp.length; cc++) {
  var uc = Qp[cc],
    lE = uc.toLowerCase(),
    cE = uc[0].toUpperCase() + uc.slice(1);
  Qn(lE, "on" + cE);
}
Qn(Qg, "onAnimationEnd");
Qn(Xg, "onAnimationIteration");
Qn(Yg, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(Jg, "onTransitionEnd");
io("onMouseEnter", ["mouseout", "mouseover"]);
io("onMouseLeave", ["mouseout", "mouseover"]);
io("onPointerEnter", ["pointerout", "pointerover"]);
io("onPointerLeave", ["pointerout", "pointerover"]);
kr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
kr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
kr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
kr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Go =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  uE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));
function Xp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), lC(r, t, void 0, e), (e.currentTarget = null);
}
function ev(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && o.isPropagationStopped())) break e;
          Xp(o, a, u), (s = l);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && o.isPropagationStopped())
          )
            break e;
          Xp(o, a, u), (s = l);
        }
    }
  }
  if (ua) throw ((e = au), (ua = !1), (au = null), e);
}
function fe(e, t) {
  var n = t[vu];
  n === void 0 && (n = t[vu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (tv(t, e, 2, !1), n.add(r));
}
function dc(e, t, n) {
  var r = 0;
  t && (r |= 4), tv(n, e, r, t);
}
var pi = "_reactListening" + Math.random().toString(36).slice(2);
function ws(e) {
  if (!e[pi]) {
    (e[pi] = !0),
      lg.forEach(function (n) {
        n !== "selectionchange" && (uE.has(n) || dc(n, !1, e), dc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pi] || ((t[pi] = !0), dc("selectionchange", !1, t));
  }
}
function tv(e, t, n, r) {
  switch (Ig(t)) {
    case 1:
      var o = bC;
      break;
    case 4:
      o = NC;
      break;
    default:
      o = Fd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !iu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function fc(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var l = i.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = i.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = ir(a)), i === null)) return;
          if (((l = i.tag), l === 5 || l === 6)) {
            r = s = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  bg(function () {
    var u = s,
      d = Od(n),
      f = [];
    e: {
      var m = Zg.get(e);
      if (m !== void 0) {
        var S = Id,
          h = e;
        switch (e) {
          case "keypress":
            if (Fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = zC;
            break;
          case "focusin":
            (h = "focus"), (S = sc);
            break;
          case "focusout":
            (h = "blur"), (S = sc);
            break;
          case "beforeblur":
          case "afterblur":
            S = sc;
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
            S = Ip;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = PC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = VC;
            break;
          case Qg:
          case Xg:
          case Yg:
            S = _C;
            break;
          case Jg:
            S = HC;
            break;
          case "scroll":
            S = jC;
            break;
          case "wheel":
            S = GC;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = AC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = zp;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          v = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var g = u, x; g !== null; ) {
          x = g;
          var C = x.stateNode;
          if (
            (x.tag === 5 &&
              C !== null &&
              ((x = C),
              v !== null && ((C = hs(g, v)), C != null && y.push(Ss(g, C, x)))),
            w)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((m = new S(m, h, null, n, d)), f.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== ou &&
            (h = n.relatedTarget || n.fromElement) &&
            (ir(h) || h[ln]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((h = n.relatedTarget || n.toElement),
              (S = u),
              (h = h ? ir(h) : null),
              h !== null &&
                ((w = Tr(h)), h !== w || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((S = null), (h = u)),
          S !== h)
        ) {
          if (
            ((y = Ip),
            (C = "onMouseLeave"),
            (v = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = zp),
              (C = "onPointerLeave"),
              (v = "onPointerEnter"),
              (g = "pointer")),
            (w = S == null ? m : Br(S)),
            (x = h == null ? m : Br(h)),
            (m = new y(C, g + "leave", S, n, d)),
            (m.target = w),
            (m.relatedTarget = x),
            (C = null),
            ir(d) === u &&
              ((y = new y(v, g + "enter", h, n, d)),
              (y.target = x),
              (y.relatedTarget = w),
              (C = y)),
            (w = C),
            S && h)
          )
            t: {
              for (y = S, v = h, g = 0, x = y; x; x = Ar(x)) g++;
              for (x = 0, C = v; C; C = Ar(C)) x++;
              for (; 0 < g - x; ) (y = Ar(y)), g--;
              for (; 0 < x - g; ) (v = Ar(v)), x--;
              for (; g--; ) {
                if (y === v || (v !== null && y === v.alternate)) break t;
                (y = Ar(y)), (v = Ar(v));
              }
              y = null;
            }
          else y = null;
          S !== null && Yp(f, m, S, y, !1),
            h !== null && w !== null && Yp(f, w, h, y, !0);
        }
      }
      e: {
        if (
          ((m = u ? Br(u) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var E = eE;
        else if (Vp(m))
          if (Wg) E = oE;
          else {
            E = nE;
            var N = tE;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = rE);
        if (E && (E = E(e, u))) {
          Vg(f, E, n, d);
          break e;
        }
        N && N(e, m, u),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            Zc(m, "number", m.value);
      }
      switch (((N = u ? Br(u) : window), e)) {
        case "focusin":
          (Vp(N) || N.contentEditable === "true") &&
            ((zr = N), (du = u), (ts = null));
          break;
        case "focusout":
          ts = du = zr = null;
          break;
        case "mousedown":
          fu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fu = !1), qp(f, n, d);
          break;
        case "selectionchange":
          if (aE) break;
        case "keydown":
        case "keyup":
          qp(f, n, d);
      }
      var b;
      if (zd)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        $r
          ? Ug(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (zg &&
          n.locale !== "ko" &&
          ($r || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && $r && (b = $g())
            : ((Pn = d),
              (Dd = "value" in Pn ? Pn.value : Pn.textContent),
              ($r = !0))),
        (N = ma(u, j)),
        0 < N.length &&
          ((j = new $p(j, e, null, n, d)),
          f.push({ event: j, listeners: N }),
          b ? (j.data = b) : ((b = Bg(n)), b !== null && (j.data = b)))),
        (b = QC ? XC(e, n) : YC(e, n)) &&
          ((u = ma(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new $p("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = b)));
    }
    ev(f, t);
  });
}
function Ss(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ma(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = hs(e, n)),
      s != null && r.unshift(Ss(e, s, o)),
      (s = hs(e, t)),
      s != null && r.push(Ss(e, s, o))),
      (e = e.return);
  }
  return r;
}
function Ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yp(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = hs(n, s)), l != null && i.unshift(Ss(n, l, a)))
        : o || ((l = hs(n, s)), l != null && i.push(Ss(n, l, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var dE = /\r\n?/g,
  fE = /\u0000|\uFFFD/g;
function Jp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      dE,
      `
`
    )
    .replace(fE, "");
}
function hi(e, t, n) {
  if (((t = Jp(t)), Jp(e) !== t && n)) throw Error(T(425));
}
function ga() {}
var pu = null,
  hu = null;
function mu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gu = typeof setTimeout == "function" ? setTimeout : void 0,
  pE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zp = typeof Promise == "function" ? Promise : void 0,
  hE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zp < "u"
      ? function (e) {
          return Zp.resolve(null).then(e).catch(mE);
        }
      : gu;
function mE(e) {
  setTimeout(function () {
    throw e;
  });
}
function pc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), vs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  vs(t);
}
function Mn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function eh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xo = Math.random().toString(36).slice(2),
  Vt = "__reactFiber$" + xo,
  Cs = "__reactProps$" + xo,
  ln = "__reactContainer$" + xo,
  vu = "__reactEvents$" + xo,
  gE = "__reactListeners$" + xo,
  vE = "__reactHandles$" + xo;
function ir(e) {
  var t = e[Vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ln] || n[Vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = eh(e); e !== null; ) {
          if ((n = e[Vt])) return n;
          e = eh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Bs(e) {
  return (
    (e = e[Vt] || e[ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function el(e) {
  return e[Cs] || null;
}
var yu = [],
  Vr = -1;
function Xn(e) {
  return { current: e };
}
function pe(e) {
  0 > Vr || ((e.current = yu[Vr]), (yu[Vr] = null), Vr--);
}
function ue(e, t) {
  Vr++, (yu[Vr] = e.current), (e.current = t);
}
var Bn = {},
  Ue = Xn(Bn),
  Qe = Xn(!1),
  yr = Bn;
function ao(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Xe(e) {
  return (e = e.childContextTypes), e != null;
}
function va() {
  pe(Qe), pe(Ue);
}
function th(e, t, n) {
  if (Ue.current !== Bn) throw Error(T(168));
  ue(Ue, t), ue(Qe, n);
}
function nv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, tC(e) || "Unknown", o));
  return xe({}, n, r);
}
function ya(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bn),
    (yr = Ue.current),
    ue(Ue, e),
    ue(Qe, Qe.current),
    !0
  );
}
function nh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = nv(e, t, yr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(Qe),
      pe(Ue),
      ue(Ue, e))
    : pe(Qe),
    ue(Qe, n);
}
var nn = null,
  tl = !1,
  hc = !1;
function rv(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function yE(e) {
  (tl = !0), rv(e);
}
function Yn() {
  if (!hc && nn !== null) {
    hc = !0;
    var e = 0,
      t = re;
    try {
      var n = nn;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (nn = null), (tl = !1);
    } catch (o) {
      throw (nn !== null && (nn = nn.slice(e + 1)), Pg(Ad, Yn), o);
    } finally {
      (re = t), (hc = !1);
    }
  }
  return null;
}
var Wr = [],
  Hr = 0,
  xa = null,
  wa = 0,
  ht = [],
  mt = 0,
  xr = null,
  rn = 1,
  on = "";
function rr(e, t) {
  (Wr[Hr++] = wa), (Wr[Hr++] = xa), (xa = e), (wa = t);
}
function ov(e, t, n) {
  (ht[mt++] = rn), (ht[mt++] = on), (ht[mt++] = xr), (xr = e);
  var r = rn;
  e = on;
  var o = 32 - kt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - kt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (rn = (1 << (32 - kt(t) + o)) | (n << o) | r),
      (on = s + e);
  } else (rn = (1 << s) | (n << o) | r), (on = e);
}
function Bd(e) {
  e.return !== null && (rr(e, 1), ov(e, 1, 0));
}
function Vd(e) {
  for (; e === xa; )
    (xa = Wr[--Hr]), (Wr[Hr] = null), (wa = Wr[--Hr]), (Wr[Hr] = null);
  for (; e === xr; )
    (xr = ht[--mt]),
      (ht[mt] = null),
      (on = ht[--mt]),
      (ht[mt] = null),
      (rn = ht[--mt]),
      (ht[mt] = null);
}
var it = null,
  ot = null,
  he = !1,
  Nt = null;
function sv(e, t) {
  var n = gt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (ot = Mn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = xr !== null ? { id: rn, overflow: on } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wu(e) {
  if (he) {
    var t = ot;
    if (t) {
      var n = t;
      if (!rh(e, t)) {
        if (xu(e)) throw Error(T(418));
        t = Mn(n.nextSibling);
        var r = it;
        t && rh(e, t)
          ? sv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (it = e));
      }
    } else {
      if (xu(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (it = e);
    }
  }
}
function oh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function mi(e) {
  if (e !== it) return !1;
  if (!he) return oh(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !mu(e.type, e.memoizedProps))),
    t && (t = ot))
  ) {
    if (xu(e)) throw (iv(), Error(T(418)));
    for (; t; ) sv(e, t), (t = Mn(t.nextSibling));
  }
  if ((oh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ot = Mn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = it ? Mn(e.stateNode.nextSibling) : null;
  return !0;
}
function iv() {
  for (var e = ot; e; ) e = Mn(e.nextSibling);
}
function lo() {
  (ot = it = null), (he = !1);
}
function Wd(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
var xE = hn.ReactCurrentBatchConfig;
function Io(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            i === null ? delete a[s] : (a[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function gi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sh(e) {
  var t = e._init;
  return t(e._payload);
}
function av(e) {
  function t(v, g) {
    if (e) {
      var x = v.deletions;
      x === null ? ((v.deletions = [g]), (v.flags |= 16)) : x.push(g);
    }
  }
  function n(v, g) {
    if (!e) return null;
    for (; g !== null; ) t(v, g), (g = g.sibling);
    return null;
  }
  function r(v, g) {
    for (v = new Map(); g !== null; )
      g.key !== null ? v.set(g.key, g) : v.set(g.index, g), (g = g.sibling);
    return v;
  }
  function o(v, g) {
    return (v = In(v, g)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, g, x) {
    return (
      (v.index = x),
      e
        ? ((x = v.alternate),
          x !== null
            ? ((x = x.index), x < g ? ((v.flags |= 2), g) : x)
            : ((v.flags |= 2), g))
        : ((v.flags |= 1048576), g)
    );
  }
  function i(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, g, x, C) {
    return g === null || g.tag !== 6
      ? ((g = Sc(x, v.mode, C)), (g.return = v), g)
      : ((g = o(g, x)), (g.return = v), g);
  }
  function l(v, g, x, C) {
    var E = x.type;
    return E === Ir
      ? d(v, g, x.props.children, C, x.key)
      : g !== null &&
        (g.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === bn &&
            sh(E) === g.type))
      ? ((C = o(g, x.props)), (C.ref = Io(v, g, x)), (C.return = v), C)
      : ((C = Vi(x.type, x.key, x.props, null, v.mode, C)),
        (C.ref = Io(v, g, x)),
        (C.return = v),
        C);
  }
  function u(v, g, x, C) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== x.containerInfo ||
      g.stateNode.implementation !== x.implementation
      ? ((g = Cc(x, v.mode, C)), (g.return = v), g)
      : ((g = o(g, x.children || [])), (g.return = v), g);
  }
  function d(v, g, x, C, E) {
    return g === null || g.tag !== 7
      ? ((g = pr(x, v.mode, C, E)), (g.return = v), g)
      : ((g = o(g, x)), (g.return = v), g);
  }
  function f(v, g, x) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Sc("" + g, v.mode, x)), (g.return = v), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case si:
          return (
            (x = Vi(g.type, g.key, g.props, null, v.mode, x)),
            (x.ref = Io(v, null, g)),
            (x.return = v),
            x
          );
        case Dr:
          return (g = Cc(g, v.mode, x)), (g.return = v), g;
        case bn:
          var C = g._init;
          return f(v, C(g._payload), x);
      }
      if (Ho(g) || Ao(g))
        return (g = pr(g, v.mode, x, null)), (g.return = v), g;
      gi(v, g);
    }
    return null;
  }
  function m(v, g, x, C) {
    var E = g !== null ? g.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return E !== null ? null : a(v, g, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case si:
          return x.key === E ? l(v, g, x, C) : null;
        case Dr:
          return x.key === E ? u(v, g, x, C) : null;
        case bn:
          return (E = x._init), m(v, g, E(x._payload), C);
      }
      if (Ho(x) || Ao(x)) return E !== null ? null : d(v, g, x, C, null);
      gi(v, x);
    }
    return null;
  }
  function S(v, g, x, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (v = v.get(x) || null), a(g, v, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case si:
          return (v = v.get(C.key === null ? x : C.key) || null), l(g, v, C, E);
        case Dr:
          return (v = v.get(C.key === null ? x : C.key) || null), u(g, v, C, E);
        case bn:
          var N = C._init;
          return S(v, g, x, N(C._payload), E);
      }
      if (Ho(C) || Ao(C)) return (v = v.get(x) || null), d(g, v, C, E, null);
      gi(g, C);
    }
    return null;
  }
  function h(v, g, x, C) {
    for (
      var E = null, N = null, b = g, j = (g = 0), O = null;
      b !== null && j < x.length;
      j++
    ) {
      b.index > j ? ((O = b), (b = null)) : (O = b.sibling);
      var _ = m(v, b, x[j], C);
      if (_ === null) {
        b === null && (b = O);
        break;
      }
      e && b && _.alternate === null && t(v, b),
        (g = s(_, g, j)),
        N === null ? (E = _) : (N.sibling = _),
        (N = _),
        (b = O);
    }
    if (j === x.length) return n(v, b), he && rr(v, j), E;
    if (b === null) {
      for (; j < x.length; j++)
        (b = f(v, x[j], C)),
          b !== null &&
            ((g = s(b, g, j)), N === null ? (E = b) : (N.sibling = b), (N = b));
      return he && rr(v, j), E;
    }
    for (b = r(v, b); j < x.length; j++)
      (O = S(b, v, j, x[j], C)),
        O !== null &&
          (e && O.alternate !== null && b.delete(O.key === null ? j : O.key),
          (g = s(O, g, j)),
          N === null ? (E = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        b.forEach(function (B) {
          return t(v, B);
        }),
      he && rr(v, j),
      E
    );
  }
  function y(v, g, x, C) {
    var E = Ao(x);
    if (typeof E != "function") throw Error(T(150));
    if (((x = E.call(x)), x == null)) throw Error(T(151));
    for (
      var N = (E = null), b = g, j = (g = 0), O = null, _ = x.next();
      b !== null && !_.done;
      j++, _ = x.next()
    ) {
      b.index > j ? ((O = b), (b = null)) : (O = b.sibling);
      var B = m(v, b, _.value, C);
      if (B === null) {
        b === null && (b = O);
        break;
      }
      e && b && B.alternate === null && t(v, b),
        (g = s(B, g, j)),
        N === null ? (E = B) : (N.sibling = B),
        (N = B),
        (b = O);
    }
    if (_.done) return n(v, b), he && rr(v, j), E;
    if (b === null) {
      for (; !_.done; j++, _ = x.next())
        (_ = f(v, _.value, C)),
          _ !== null &&
            ((g = s(_, g, j)), N === null ? (E = _) : (N.sibling = _), (N = _));
      return he && rr(v, j), E;
    }
    for (b = r(v, b); !_.done; j++, _ = x.next())
      (_ = S(b, v, j, _.value, C)),
        _ !== null &&
          (e && _.alternate !== null && b.delete(_.key === null ? j : _.key),
          (g = s(_, g, j)),
          N === null ? (E = _) : (N.sibling = _),
          (N = _));
    return (
      e &&
        b.forEach(function (M) {
          return t(v, M);
        }),
      he && rr(v, j),
      E
    );
  }
  function w(v, g, x, C) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Ir &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case si:
          e: {
            for (var E = x.key, N = g; N !== null; ) {
              if (N.key === E) {
                if (((E = x.type), E === Ir)) {
                  if (N.tag === 7) {
                    n(v, N.sibling),
                      (g = o(N, x.props.children)),
                      (g.return = v),
                      (v = g);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === bn &&
                    sh(E) === N.type)
                ) {
                  n(v, N.sibling),
                    (g = o(N, x.props)),
                    (g.ref = Io(v, N, x)),
                    (g.return = v),
                    (v = g);
                  break e;
                }
                n(v, N);
                break;
              } else t(v, N);
              N = N.sibling;
            }
            x.type === Ir
              ? ((g = pr(x.props.children, v.mode, C, x.key)),
                (g.return = v),
                (v = g))
              : ((C = Vi(x.type, x.key, x.props, null, v.mode, C)),
                (C.ref = Io(v, g, x)),
                (C.return = v),
                (v = C));
          }
          return i(v);
        case Dr:
          e: {
            for (N = x.key; g !== null; ) {
              if (g.key === N)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === x.containerInfo &&
                  g.stateNode.implementation === x.implementation
                ) {
                  n(v, g.sibling),
                    (g = o(g, x.children || [])),
                    (g.return = v),
                    (v = g);
                  break e;
                } else {
                  n(v, g);
                  break;
                }
              else t(v, g);
              g = g.sibling;
            }
            (g = Cc(x, v.mode, C)), (g.return = v), (v = g);
          }
          return i(v);
        case bn:
          return (N = x._init), w(v, g, N(x._payload), C);
      }
      if (Ho(x)) return h(v, g, x, C);
      if (Ao(x)) return y(v, g, x, C);
      gi(v, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        g !== null && g.tag === 6
          ? (n(v, g.sibling), (g = o(g, x)), (g.return = v), (v = g))
          : (n(v, g), (g = Sc(x, v.mode, C)), (g.return = v), (v = g)),
        i(v))
      : n(v, g);
  }
  return w;
}
var co = av(!0),
  lv = av(!1),
  Sa = Xn(null),
  Ca = null,
  Kr = null,
  Hd = null;
function Kd() {
  Hd = Kr = Ca = null;
}
function Gd(e) {
  var t = Sa.current;
  pe(Sa), (e._currentValue = t);
}
function Su(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zr(e, t) {
  (Ca = e),
    (Hd = Kr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (qe = !0), (e.firstContext = null));
}
function xt(e) {
  var t = e._currentValue;
  if (Hd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
      if (Ca === null) throw Error(T(308));
      (Kr = e), (Ca.dependencies = { lanes: 0, firstContext: e });
    } else Kr = Kr.next = e;
  return t;
}
var ar = null;
function qd(e) {
  ar === null ? (ar = [e]) : ar.push(e);
}
function cv(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), qd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    cn(e, r)
  );
}
function cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Nn = !1;
function Qd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function uv(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function sn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      cn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), qd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    cn(e, n)
  );
}
function Di(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Md(e, n);
  }
}
function ih(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ea(e, t, n, r) {
  var o = e.updateQueue;
  Nn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), i === null ? (s = u) : (i.next = u), (i = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = o.baseState;
    (i = 0), (d = u = l = null), (a = s);
    do {
      var m = a.lane,
        S = a.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var h = e,
            y = a;
          switch (((m = t), (S = n), y.tag)) {
            case 1:
              if (((h = y.payload), typeof h == "function")) {
                f = h.call(S, f, m);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = y.payload),
                (m = typeof h == "function" ? h.call(S, f, m) : h),
                m == null)
              )
                break e;
              f = xe({}, f, m);
              break e;
            case 2:
              Nn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [a]) : m.push(a));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = S), (l = f)) : (d = d.next = S),
          (i |= m);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (Sr |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function ah(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var Vs = {},
  Gt = Xn(Vs),
  Es = Xn(Vs),
  bs = Xn(Vs);
function lr(e) {
  if (e === Vs) throw Error(T(174));
  return e;
}
function Xd(e, t) {
  switch ((ue(bs, t), ue(Es, e), ue(Gt, Vs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : tu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = tu(t, e));
  }
  pe(Gt), ue(Gt, t);
}
function uo() {
  pe(Gt), pe(Es), pe(bs);
}
function dv(e) {
  lr(bs.current);
  var t = lr(Gt.current),
    n = tu(t, e.type);
  t !== n && (ue(Es, e), ue(Gt, n));
}
function Yd(e) {
  Es.current === e && (pe(Gt), pe(Es));
}
var ve = Xn(0);
function ba(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var mc = [];
function Jd() {
  for (var e = 0; e < mc.length; e++)
    mc[e]._workInProgressVersionPrimary = null;
  mc.length = 0;
}
var Ii = hn.ReactCurrentDispatcher,
  gc = hn.ReactCurrentBatchConfig,
  wr = 0,
  ye = null,
  Re = null,
  ke = null,
  Na = !1,
  ns = !1,
  Ns = 0,
  wE = 0;
function Ie() {
  throw Error(T(321));
}
function Zd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ot(e[n], t[n])) return !1;
  return !0;
}
function ef(e, t, n, r, o, s) {
  if (
    ((wr = s),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ii.current = e === null || e.memoizedState === null ? bE : NE),
    (e = n(r, o)),
    ns)
  ) {
    s = 0;
    do {
      if (((ns = !1), (Ns = 0), 25 <= s)) throw Error(T(301));
      (s += 1),
        (ke = Re = null),
        (t.updateQueue = null),
        (Ii.current = jE),
        (e = n(r, o));
    } while (ns);
  }
  if (
    ((Ii.current = ja),
    (t = Re !== null && Re.next !== null),
    (wr = 0),
    (ke = Re = ye = null),
    (Na = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function tf() {
  var e = Ns !== 0;
  return (Ns = 0), e;
}
function Bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ye.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function wt() {
  if (Re === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = ke === null ? ye.memoizedState : ke.next;
  if (t !== null) (ke = t), (Re = e);
  else {
    if (e === null) throw Error(T(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      ke === null ? (ye.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function js(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vc(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = Re,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var a = (i = null),
      l = null,
      u = s;
    do {
      var d = u.lane;
      if ((wr & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (i = r)) : (l = l.next = f),
          (ye.lanes |= d),
          (Sr |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (i = r) : (l.next = a),
      Ot(r, t.memoizedState) || (qe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (ye.lanes |= s), (Sr |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yc(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    Ot(s, t.memoizedState) || (qe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function fv() {}
function pv(e, t) {
  var n = ye,
    r = wt(),
    o = t(),
    s = !Ot(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (qe = !0)),
    (r = r.queue),
    nf(gv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Rs(9, mv.bind(null, n, r, o, t), void 0, null),
      Te === null)
    )
      throw Error(T(349));
    wr & 30 || hv(n, t, o);
  }
  return o;
}
function hv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vv(t) && yv(e);
}
function gv(e, t, n) {
  return n(function () {
    vv(t) && yv(e);
  });
}
function vv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch {
    return !0;
  }
}
function yv(e) {
  var t = cn(e, 1);
  t !== null && Tt(t, e, 1, -1);
}
function lh(e) {
  var t = Bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: js,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = EE.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function Rs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xv() {
  return wt().memoizedState;
}
function $i(e, t, n, r) {
  var o = Bt();
  (ye.flags |= e),
    (o.memoizedState = Rs(1 | t, n, void 0, r === void 0 ? null : r));
}
function nl(e, t, n, r) {
  var o = wt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Re !== null) {
    var i = Re.memoizedState;
    if (((s = i.destroy), r !== null && Zd(r, i.deps))) {
      o.memoizedState = Rs(t, n, s, r);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = Rs(1 | t, n, s, r));
}
function ch(e, t) {
  return $i(8390656, 8, e, t);
}
function nf(e, t) {
  return nl(2048, 8, e, t);
}
function wv(e, t) {
  return nl(4, 2, e, t);
}
function Sv(e, t) {
  return nl(4, 4, e, t);
}
function Cv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ev(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nl(4, 4, Cv.bind(null, t, e), n)
  );
}
function rf() {}
function bv(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Nv(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jv(e, t, n) {
  return wr & 21
    ? (Ot(n, t) || ((n = _g()), (ye.lanes |= n), (Sr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
}
function SE(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = gc.transition;
  gc.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (gc.transition = r);
  }
}
function Rv() {
  return wt().memoizedState;
}
function CE(e, t, n) {
  var r = Dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pv(e))
  )
    kv(t, n);
  else if (((n = cv(e, t, n, r)), n !== null)) {
    var o = Ve();
    Tt(n, e, r, o), Tv(n, t, r);
  }
}
function EE(e, t, n) {
  var r = Dn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pv(e)) kv(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Ot(a, i))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), qd(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = cv(e, t, o, r)),
      n !== null && ((o = Ve()), Tt(n, e, r, o), Tv(n, t, r));
  }
}
function Pv(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function kv(e, t) {
  ns = Na = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Tv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Md(e, n);
  }
}
var ja = {
    readContext: xt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1,
  },
  bE = {
    readContext: xt,
    useCallback: function (e, t) {
      return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: xt,
    useEffect: ch,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $i(4194308, 4, Cv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = CE.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: lh,
    useDebugValue: rf,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = lh(!1),
        t = e[0];
      return (e = SE.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = Bt();
      if (he) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), Te === null)) throw Error(T(349));
        wr & 30 || hv(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        ch(gv.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Rs(9, mv.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Bt(),
        t = Te.identifierPrefix;
      if (he) {
        var n = on,
          r = rn;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ns++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = wE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  NE = {
    readContext: xt,
    useCallback: bv,
    useContext: xt,
    useEffect: nf,
    useImperativeHandle: Ev,
    useInsertionEffect: wv,
    useLayoutEffect: Sv,
    useMemo: Nv,
    useReducer: vc,
    useRef: xv,
    useState: function () {
      return vc(js);
    },
    useDebugValue: rf,
    useDeferredValue: function (e) {
      var t = wt();
      return jv(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = vc(js)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: fv,
    useSyncExternalStore: pv,
    useId: Rv,
    unstable_isNewReconciler: !1,
  },
  jE = {
    readContext: xt,
    useCallback: bv,
    useContext: xt,
    useEffect: nf,
    useImperativeHandle: Ev,
    useInsertionEffect: wv,
    useLayoutEffect: Sv,
    useMemo: Nv,
    useReducer: yc,
    useRef: xv,
    useState: function () {
      return yc(js);
    },
    useDebugValue: rf,
    useDeferredValue: function (e) {
      var t = wt();
      return Re === null ? (t.memoizedState = e) : jv(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = yc(js)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: fv,
    useSyncExternalStore: pv,
    useId: Rv,
    unstable_isNewReconciler: !1,
  };
function Et(e, t) {
  if (e && e.defaultProps) {
    (t = xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Cu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = Dn(e),
      s = sn(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Ln(e, s, o)),
      t !== null && (Tt(t, e, o, r), Di(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = Dn(e),
      s = sn(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ln(e, s, o)),
      t !== null && (Tt(t, e, o, r), Di(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      r = Dn(e),
      o = sn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ln(e, o, r)),
      t !== null && (Tt(t, e, r, n), Di(t, e, r));
  },
};
function uh(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xs(n, r) || !xs(o, s)
      : !0
  );
}
function _v(e, t, n) {
  var r = !1,
    o = Bn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = xt(s))
      : ((o = Xe(t) ? yr : Ue.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ao(e, o) : Bn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function dh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rl.enqueueReplaceState(t, t.state, null);
}
function Eu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Qd(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = xt(s))
    : ((s = Xe(t) ? yr : Ue.current), (o.context = ao(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Cu(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && rl.enqueueReplaceState(o, o.state, null),
      Ea(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function fo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += eC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function xc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var RE = typeof WeakMap == "function" ? WeakMap : Map;
function Ov(e, t, n) {
  (n = sn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pa || ((Pa = !0), (Mu = r)), bu(e, t);
    }),
    n
  );
}
function Av(e, t, n) {
  (n = sn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        bu(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        bu(e, t),
          typeof r != "function" &&
            (Fn === null ? (Fn = new Set([this])) : Fn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function fh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new RE();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = UE.bind(null, e, t, n)), t.then(e, e));
}
function ph(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hh(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = sn(-1, 1)), (t.tag = 2), Ln(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var PE = hn.ReactCurrentOwner,
  qe = !1;
function Be(e, t, n, r) {
  t.child = e === null ? lv(t, null, n, r) : co(t, e.child, n, r);
}
function mh(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Zr(t, o),
    (r = ef(e, t, n, r, s, o)),
    (n = tf()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        un(e, t, o))
      : (he && n && Bd(t), (t.flags |= 1), Be(e, t, r, o), t.child)
  );
}
function gh(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ff(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Mv(e, t, s, r, o))
      : ((e = Vi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xs), n(i, r) && e.ref === t.ref)
    )
      return un(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = In(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Mv(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (xs(s, r) && e.ref === t.ref)
      if (((qe = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (qe = !0);
      else return (t.lanes = e.lanes), un(e, t, o);
  }
  return Nu(e, t, n, r, o);
}
function Lv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(qr, nt),
        (nt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(qr, nt),
          (nt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ue(qr, nt),
        (nt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(qr, nt),
      (nt |= r);
  return Be(e, t, o, n), t.child;
}
function Fv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Nu(e, t, n, r, o) {
  var s = Xe(n) ? yr : Ue.current;
  return (
    (s = ao(t, s)),
    Zr(t, o),
    (n = ef(e, t, n, r, s, o)),
    (r = tf()),
    e !== null && !qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        un(e, t, o))
      : (he && r && Bd(t), (t.flags |= 1), Be(e, t, n, o), t.child)
  );
}
function vh(e, t, n, r, o) {
  if (Xe(n)) {
    var s = !0;
    ya(t);
  } else s = !1;
  if ((Zr(t, o), t.stateNode === null))
    zi(e, t), _v(t, n, r), Eu(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var l = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = xt(u))
      : ((u = Xe(n) ? yr : Ue.current), (u = ao(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && dh(t, i, r, u)),
      (Nn = !1);
    var m = t.memoizedState;
    (i.state = m),
      Ea(t, r, i, o),
      (l = t.memoizedState),
      a !== r || m !== l || Qe.current || Nn
        ? (typeof d == "function" && (Cu(t, n, d, r), (l = t.memoizedState)),
          (a = Nn || uh(t, n, a, r, m, l, u))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (i.props = r),
          (i.state = l),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      uv(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Et(t.type, a)),
      (i.props = u),
      (f = t.pendingProps),
      (m = i.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = xt(l))
        : ((l = Xe(n) ? yr : Ue.current), (l = ao(t, l)));
    var S = n.getDerivedStateFromProps;
    (d =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || m !== l) && dh(t, i, r, l)),
      (Nn = !1),
      (m = t.memoizedState),
      (i.state = m),
      Ea(t, r, i, o);
    var h = t.memoizedState;
    a !== f || m !== h || Qe.current || Nn
      ? (typeof S == "function" && (Cu(t, n, S, r), (h = t.memoizedState)),
        (u = Nn || uh(t, n, u, r, m, h, l) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, h, l),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, h, l)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (i.props = r),
        (i.state = h),
        (i.context = l),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ju(e, t, n, r, s, o);
}
function ju(e, t, n, r, o, s) {
  Fv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && nh(t, n, !1), un(e, t, s);
  (r = t.stateNode), (PE.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = co(t, e.child, null, s)), (t.child = co(t, null, a, s)))
      : Be(e, t, a, s),
    (t.memoizedState = r.state),
    o && nh(t, n, !0),
    t.child
  );
}
function Dv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? th(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && th(e, t.context, !1),
    Xd(e, t.containerInfo);
}
function yh(e, t, n, r, o) {
  return lo(), Wd(o), (t.flags |= 256), Be(e, t, n, r), t.child;
}
var Ru = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Iv(e, t, n) {
  var r = t.pendingProps,
    o = ve.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(ve, o & 1),
    e === null)
  )
    return (
      wu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = il(i, r, 0, null)),
              (e = pr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Pu(n)),
              (t.memoizedState = Ru),
              e)
            : of(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return kE(e, t, i, r, a, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = In(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (s = In(a, s)) : ((s = pr(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Pu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ru),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = In(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function of(e, t) {
  return (
    (t = il({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vi(e, t, n, r) {
  return (
    r !== null && Wd(r),
    co(t, e.child, null, n),
    (e = of(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function kE(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xc(Error(T(422)))), vi(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = il({ mode: "visible", children: r.children }, o, 0, null)),
        (s = pr(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && co(t, e.child, null, i),
        (t.child.memoizedState = Pu(i)),
        (t.memoizedState = Ru),
        s);
  if (!(t.mode & 1)) return vi(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(T(419))), (r = xc(s, r, void 0)), vi(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), qe || a)) {
    if (((r = Te), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), cn(e, o), Tt(r, e, o, -1));
    }
    return df(), (r = xc(Error(T(421)))), vi(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = BE.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (ot = Mn(o.nextSibling)),
      (it = t),
      (he = !0),
      (Nt = null),
      e !== null &&
        ((ht[mt++] = rn),
        (ht[mt++] = on),
        (ht[mt++] = xr),
        (rn = e.id),
        (on = e.overflow),
        (xr = t)),
      (t = of(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Su(e.return, t, n);
}
function wc(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function $v(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Be(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xh(e, n, t);
        else if (e.tag === 19) xh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ue(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ba(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          wc(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ba(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        wc(t, !0, n, null, s);
        break;
      case "together":
        wc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function un(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Sr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function TE(e, t, n) {
  switch (t.tag) {
    case 3:
      Dv(t), lo();
      break;
    case 5:
      dv(t);
      break;
    case 1:
      Xe(t.type) && ya(t);
      break;
    case 4:
      Xd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ue(Sa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Iv(e, t, n)
          : (ue(ve, ve.current & 1),
            (e = un(e, t, n)),
            e !== null ? e.sibling : null);
      ue(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $v(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ue(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lv(e, t, n);
  }
  return un(e, t, n);
}
var zv, ku, Uv, Bv;
zv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ku = function () {};
Uv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), lr(Gt.current);
    var s = null;
    switch (n) {
      case "input":
        (o = Yc(e, o)), (r = Yc(e, r)), (s = []);
        break;
      case "select":
        (o = xe({}, o, { value: void 0 })),
          (r = xe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = eu(e, o)), (r = eu(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ga);
    }
    nu(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (fs.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (l && l.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in l)
              l.hasOwnProperty(i) &&
                a[i] !== l[i] &&
                (n || (n = {}), (n[i] = l[i]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (fs.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && fe("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Bv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $o(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function $e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _E(e, t, n) {
  var r = t.pendingProps;
  switch ((Vd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $e(t), null;
    case 1:
      return Xe(t.type) && va(), $e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        uo(),
        pe(Qe),
        pe(Ue),
        Jd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nt !== null && (Du(Nt), (Nt = null)))),
        ku(e, t),
        $e(t),
        null
      );
    case 5:
      Yd(t);
      var o = lr(bs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Uv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return $e(t), null;
        }
        if (((e = lr(Gt.current)), mi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Vt] = t), (r[Cs] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Go.length; o++) fe(Go[o], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              Pp(r, s), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              Tp(r, s), fe("invalid", r);
          }
          nu(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : fs.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              ii(r), kp(r, s, !0);
              break;
            case "textarea":
              ii(r), _p(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ga);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Vt] = t),
            (e[Cs] = r),
            zv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ru(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Go.length; o++) fe(Go[o], e);
                o = r;
                break;
              case "source":
                fe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (o = r);
                break;
              case "details":
                fe("toggle", e), (o = r);
                break;
              case "input":
                Pp(e, r), (o = Yc(e, r)), fe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = xe({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                Tp(e, r), (o = eu(e, r)), fe("invalid", e);
                break;
              default:
                o = r;
            }
            nu(n, o), (a = o);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? xg(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && vg(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ps(e, l)
                    : typeof l == "number" && ps(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (fs.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && fe("scroll", e)
                      : l != null && Pd(e, s, l, i));
              }
            switch (n) {
              case "input":
                ii(e), kp(e, r, !1);
                break;
              case "textarea":
                ii(e), _p(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Qr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Qr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ga);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $e(t), null;
    case 6:
      if (e && t.stateNode != null) Bv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = lr(bs.current)), lr(Gt.current), mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Vt] = t),
            (s = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Vt] = t),
            (t.stateNode = r);
      }
      return $e(t), null;
    case 13:
      if (
        (pe(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && ot !== null && t.mode & 1 && !(t.flags & 128))
          iv(), lo(), (t.flags |= 98560), (s = !1);
        else if (((s = mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317));
            s[Vt] = t;
          } else
            lo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $e(t), (s = !1);
        } else Nt !== null && (Du(Nt), (Nt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Pe === 0 && (Pe = 3) : df())),
          t.updateQueue !== null && (t.flags |= 4),
          $e(t),
          null);
    case 4:
      return (
        uo(), ku(e, t), e === null && ws(t.stateNode.containerInfo), $e(t), null
      );
    case 10:
      return Gd(t.type._context), $e(t), null;
    case 17:
      return Xe(t.type) && va(), $e(t), null;
    case 19:
      if ((pe(ve), (s = t.memoizedState), s === null)) return $e(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) $o(s, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ba(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    $o(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ue(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ce() > po &&
            ((t.flags |= 128), (r = !0), $o(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ba(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              $o(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !he)
            )
              return $e(t), null;
          } else
            2 * Ce() - s.renderingStartTime > po &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), $o(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ve.current),
          ue(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : ($e(t), null);
    case 22:
    case 23:
      return (
        uf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? nt & 1073741824 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function OE(e, t) {
  switch ((Vd(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && va(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        uo(),
        pe(Qe),
        pe(Ue),
        Jd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Yd(t), null;
    case 13:
      if (
        (pe(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        lo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(ve), null;
    case 4:
      return uo(), null;
    case 10:
      return Gd(t.type._context), null;
    case 22:
    case 23:
      return uf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yi = !1,
  ze = !1,
  AE = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function Tu(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var wh = !1;
function ME(e, t) {
  if (((pu = pa), (e = Gg()), Ud(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = i + o),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (S = f.firstChild) !== null;

            )
              (m = f), (f = S);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === o && (a = i),
                m === s && ++d === r && (l = i),
                (S = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = S;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (hu = { focusedElem: e, selectionRange: n }, pa = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var y = h.memoizedProps,
                    w = h.memoizedState,
                    v = t.stateNode,
                    g = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Et(t.type, y),
                      w
                    );
                  v.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (C) {
          we(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (h = wh), (wh = !1), h;
}
function rs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Tu(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ol(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _u(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Vt], delete t[Cs], delete t[vu], delete t[gE], delete t[vE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ga));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ou(e, t, n), e = e.sibling; e !== null; ) Ou(e, t, n), (e = e.sibling);
}
function Au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Au(e, t, n), e = e.sibling; e !== null; ) Au(e, t, n), (e = e.sibling);
}
var Me = null,
  bt = !1;
function yn(e, t, n) {
  for (n = n.child; n !== null; ) Hv(e, t, n), (n = n.sibling);
}
function Hv(e, t, n) {
  if (Kt && typeof Kt.onCommitFiberUnmount == "function")
    try {
      Kt.onCommitFiberUnmount(Xa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || Gr(n, t);
    case 6:
      var r = Me,
        o = bt;
      (Me = null),
        yn(e, t, n),
        (Me = r),
        (bt = o),
        Me !== null &&
          (bt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null &&
        (bt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? pc(e.parentNode, n)
              : e.nodeType === 1 && pc(e, n),
            vs(e))
          : pc(Me, n.stateNode));
      break;
    case 4:
      (r = Me),
        (o = bt),
        (Me = n.stateNode.containerInfo),
        (bt = !0),
        yn(e, t, n),
        (Me = r),
        (bt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Tu(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      yn(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (Gr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          we(n, t, a);
        }
      yn(e, t, n);
      break;
    case 21:
      yn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), yn(e, t, n), (ze = r))
        : yn(e, t, n);
      break;
    default:
      yn(e, t, n);
  }
}
function Ch(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new AE()),
      t.forEach(function (r) {
        var o = VE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Me = a.stateNode), (bt = !1);
              break e;
            case 3:
              (Me = a.stateNode.containerInfo), (bt = !0);
              break e;
            case 4:
              (Me = a.stateNode.containerInfo), (bt = !0);
              break e;
          }
          a = a.return;
        }
        if (Me === null) throw Error(T(160));
        Hv(s, i, o), (Me = null), (bt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        we(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Kv(t, e), (t = t.sibling);
}
function Kv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ct(t, e), Ut(e), r & 4)) {
        try {
          rs(3, e, e.return), ol(3, e);
        } catch (y) {
          we(e, e.return, y);
        }
        try {
          rs(5, e, e.return);
        } catch (y) {
          we(e, e.return, y);
        }
      }
      break;
    case 1:
      Ct(t, e), Ut(e), r & 512 && n !== null && Gr(n, n.return);
      break;
    case 5:
      if (
        (Ct(t, e),
        Ut(e),
        r & 512 && n !== null && Gr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ps(o, "");
        } catch (y) {
          we(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && hg(o, s),
              ru(a, i);
            var u = ru(a, s);
            for (i = 0; i < l.length; i += 2) {
              var d = l[i],
                f = l[i + 1];
              d === "style"
                ? xg(o, f)
                : d === "dangerouslySetInnerHTML"
                ? vg(o, f)
                : d === "children"
                ? ps(o, f)
                : Pd(o, d, f, u);
            }
            switch (a) {
              case "input":
                Jc(o, s);
                break;
              case "textarea":
                mg(o, s);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var S = s.value;
                S != null
                  ? Qr(o, !!s.multiple, S, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Qr(o, !!s.multiple, s.defaultValue, !0)
                      : Qr(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Cs] = s;
          } catch (y) {
            we(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ct(t, e), Ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (y) {
          we(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ct(t, e), Ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vs(t.containerInfo);
        } catch (y) {
          we(e, e.return, y);
        }
      break;
    case 4:
      Ct(t, e), Ut(e);
      break;
    case 13:
      Ct(t, e),
        Ut(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (lf = Ce())),
        r & 4 && Ch(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (u = ze) || d), Ct(t, e), (ze = u)) : Ct(t, e),
        Ut(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (f = F = d; F !== null; ) {
              switch (((m = F), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rs(4, m, m.return);
                  break;
                case 1:
                  Gr(m, m.return);
                  var h = m.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (y) {
                      we(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Gr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    bh(f);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (F = S)) : bh(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (i =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = yg("display", i)));
              } catch (y) {
                we(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                we(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ct(t, e), Ut(e), r & 4 && Ch(e);
      break;
    case 21:
      break;
    default:
      Ct(t, e), Ut(e);
  }
}
function Ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ps(o, ""), (r.flags &= -33));
          var s = Sh(e);
          Au(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Sh(e);
          Ou(e, a, i);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      we(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function LE(e, t, n) {
  (F = e), Gv(e);
}
function Gv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || yi;
      if (!i) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || ze;
        a = yi;
        var u = ze;
        if (((yi = i), (ze = l) && !u))
          for (F = o; F !== null; )
            (i = F),
              (l = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Nh(o)
                : l !== null
                ? ((l.return = i), (F = l))
                : Nh(o);
        for (; s !== null; ) (F = s), Gv(s), (s = s.sibling);
        (F = o), (yi = a), (ze = u);
      }
      Eh(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (F = s)) : Eh(e);
  }
}
function Eh(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && ah(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ah(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && vs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        ze || (t.flags & 512 && _u(t));
      } catch (m) {
        we(t, t.return, m);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function bh(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Nh(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ol(4, t);
          } catch (l) {
            we(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              we(t, o, l);
            }
          }
          var s = t.return;
          try {
            _u(t);
          } catch (l) {
            we(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            _u(t);
          } catch (l) {
            we(t, i, l);
          }
      }
    } catch (l) {
      we(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var FE = Math.ceil,
  Ra = hn.ReactCurrentDispatcher,
  sf = hn.ReactCurrentOwner,
  vt = hn.ReactCurrentBatchConfig,
  J = 0,
  Te = null,
  Ne = null,
  Le = 0,
  nt = 0,
  qr = Xn(0),
  Pe = 0,
  Ps = null,
  Sr = 0,
  sl = 0,
  af = 0,
  os = null,
  Ge = null,
  lf = 0,
  po = 1 / 0,
  en = null,
  Pa = !1,
  Mu = null,
  Fn = null,
  xi = !1,
  kn = null,
  ka = 0,
  ss = 0,
  Lu = null,
  Ui = -1,
  Bi = 0;
function Ve() {
  return J & 6 ? Ce() : Ui !== -1 ? Ui : (Ui = Ce());
}
function Dn(e) {
  return e.mode & 1
    ? J & 2 && Le !== 0
      ? Le & -Le
      : xE.transition !== null
      ? (Bi === 0 && (Bi = _g()), Bi)
      : ((e = re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ig(e.type))),
        e)
    : 1;
}
function Tt(e, t, n, r) {
  if (50 < ss) throw ((ss = 0), (Lu = null), Error(T(185)));
  zs(e, n, r),
    (!(J & 2) || e !== Te) &&
      (e === Te && (!(J & 2) && (sl |= n), Pe === 4 && Rn(e, Le)),
      Ye(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((po = Ce() + 500), tl && Yn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  xC(e, t);
  var r = fa(e, e === Te ? Le : 0);
  if (r === 0)
    n !== null && Mp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mp(n), t === 1))
      e.tag === 0 ? yE(jh.bind(null, e)) : rv(jh.bind(null, e)),
        hE(function () {
          !(J & 6) && Yn();
        }),
        (n = null);
    else {
      switch (Og(r)) {
        case 1:
          n = Ad;
          break;
        case 4:
          n = kg;
          break;
        case 16:
          n = da;
          break;
        case 536870912:
          n = Tg;
          break;
        default:
          n = da;
      }
      n = ty(n, qv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qv(e, t) {
  if (((Ui = -1), (Bi = 0), J & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (eo() && e.callbackNode !== n) return null;
  var r = fa(e, e === Te ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ta(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var s = Xv();
    (Te !== e || Le !== t) && ((en = null), (po = Ce() + 500), fr(e, t));
    do
      try {
        $E();
        break;
      } catch (a) {
        Qv(e, a);
      }
    while (!0);
    Kd(),
      (Ra.current = s),
      (J = o),
      Ne !== null ? (t = 0) : ((Te = null), (Le = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = lu(e)), o !== 0 && ((r = o), (t = Fu(e, o)))), t === 1)
    )
      throw ((n = Ps), fr(e, 0), Rn(e, r), Ye(e, Ce()), n);
    if (t === 6) Rn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !DE(o) &&
          ((t = Ta(e, r)),
          t === 2 && ((s = lu(e)), s !== 0 && ((r = s), (t = Fu(e, s)))),
          t === 1))
      )
        throw ((n = Ps), fr(e, 0), Rn(e, r), Ye(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          or(e, Ge, en);
          break;
        case 3:
          if (
            (Rn(e, r), (r & 130023424) === r && ((t = lf + 500 - Ce()), 10 < t))
          ) {
            if (fa(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = gu(or.bind(null, e, Ge, en), t);
            break;
          }
          or(e, Ge, en);
          break;
        case 4:
          if ((Rn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - kt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * FE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gu(or.bind(null, e, Ge, en), r);
            break;
          }
          or(e, Ge, en);
          break;
        case 5:
          or(e, Ge, en);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ye(e, Ce()), e.callbackNode === n ? qv.bind(null, e) : null;
}
function Fu(e, t) {
  var n = os;
  return (
    e.current.memoizedState.isDehydrated && (fr(e, t).flags |= 256),
    (e = Ta(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && Du(t)),
    e
  );
}
function Du(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function DE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Ot(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rn(e, t) {
  for (
    t &= ~af,
      t &= ~sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function jh(e) {
  if (J & 6) throw Error(T(327));
  eo();
  var t = fa(e, 0);
  if (!(t & 1)) return Ye(e, Ce()), null;
  var n = Ta(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lu(e);
    r !== 0 && ((t = r), (n = Fu(e, r)));
  }
  if (n === 1) throw ((n = Ps), fr(e, 0), Rn(e, t), Ye(e, Ce()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    or(e, Ge, en),
    Ye(e, Ce()),
    null
  );
}
function cf(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((po = Ce() + 500), tl && Yn());
  }
}
function Cr(e) {
  kn !== null && kn.tag === 0 && !(J & 6) && eo();
  var t = J;
  J |= 1;
  var n = vt.transition,
    r = re;
  try {
    if (((vt.transition = null), (re = 1), e)) return e();
  } finally {
    (re = r), (vt.transition = n), (J = t), !(J & 6) && Yn();
  }
}
function uf() {
  (nt = qr.current), pe(qr);
}
function fr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pE(n)), Ne !== null))
    for (n = Ne.return; n !== null; ) {
      var r = n;
      switch ((Vd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && va();
          break;
        case 3:
          uo(), pe(Qe), pe(Ue), Jd();
          break;
        case 5:
          Yd(r);
          break;
        case 4:
          uo();
          break;
        case 13:
          pe(ve);
          break;
        case 19:
          pe(ve);
          break;
        case 10:
          Gd(r.type._context);
          break;
        case 22:
        case 23:
          uf();
      }
      n = n.return;
    }
  if (
    ((Te = e),
    (Ne = e = In(e.current, null)),
    (Le = nt = t),
    (Pe = 0),
    (Ps = null),
    (af = sl = Sr = 0),
    (Ge = os = null),
    ar !== null)
  ) {
    for (t = 0; t < ar.length; t++)
      if (((n = ar[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    ar = null;
  }
  return e;
}
function Qv(e, t) {
  do {
    var n = Ne;
    try {
      if ((Kd(), (Ii.current = ja), Na)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Na = !1;
      }
      if (
        ((wr = 0),
        (ke = Re = ye = null),
        (ns = !1),
        (Ns = 0),
        (sf.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (Ps = t), (Ne = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          l = t;
        if (
          ((t = Le),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var S = ph(i);
          if (S !== null) {
            (S.flags &= -257),
              hh(S, i, a, s, t),
              S.mode & 1 && fh(s, u, t),
              (t = S),
              (l = u);
            var h = t.updateQueue;
            if (h === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              fh(s, u, t), df();
              break e;
            }
            l = Error(T(426));
          }
        } else if (he && a.mode & 1) {
          var w = ph(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              hh(w, i, a, s, t),
              Wd(fo(l, a));
            break e;
          }
        }
        (s = l = fo(l, a)),
          Pe !== 4 && (Pe = 2),
          os === null ? (os = [s]) : os.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var v = Ov(s, l, t);
              ih(s, v);
              break e;
            case 1:
              a = l;
              var g = s.type,
                x = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Fn === null || !Fn.has(x))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var C = Av(s, a, t);
                ih(s, C);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Jv(n);
    } catch (E) {
      (t = E), Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xv() {
  var e = Ra.current;
  return (Ra.current = ja), e === null ? ja : e;
}
function df() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Te === null || (!(Sr & 268435455) && !(sl & 268435455)) || Rn(Te, Le);
}
function Ta(e, t) {
  var n = J;
  J |= 2;
  var r = Xv();
  (Te !== e || Le !== t) && ((en = null), fr(e, t));
  do
    try {
      IE();
      break;
    } catch (o) {
      Qv(e, o);
    }
  while (!0);
  if ((Kd(), (J = n), (Ra.current = r), Ne !== null)) throw Error(T(261));
  return (Te = null), (Le = 0), Pe;
}
function IE() {
  for (; Ne !== null; ) Yv(Ne);
}
function $E() {
  for (; Ne !== null && !uC(); ) Yv(Ne);
}
function Yv(e) {
  var t = ey(e.alternate, e, nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jv(e) : (Ne = t),
    (sf.current = null);
}
function Jv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = OE(n, t)), n !== null)) {
        (n.flags &= 32767), (Ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (Ne = null);
        return;
      }
    } else if (((n = _E(n, t, nt)), n !== null)) {
      Ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function or(e, t, n) {
  var r = re,
    o = vt.transition;
  try {
    (vt.transition = null), (re = 1), zE(e, t, n, r);
  } finally {
    (vt.transition = o), (re = r);
  }
  return null;
}
function zE(e, t, n, r) {
  do eo();
  while (kn !== null);
  if (J & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (wC(e, s),
    e === Te && ((Ne = Te = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xi ||
      ((xi = !0),
      ty(da, function () {
        return eo(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = vt.transition), (vt.transition = null);
    var i = re;
    re = 1;
    var a = J;
    (J |= 4),
      (sf.current = null),
      ME(e, n),
      Kv(n, e),
      iE(hu),
      (pa = !!pu),
      (hu = pu = null),
      (e.current = n),
      LE(n),
      dC(),
      (J = a),
      (re = i),
      (vt.transition = s);
  } else e.current = n;
  if (
    (xi && ((xi = !1), (kn = e), (ka = o)),
    (s = e.pendingLanes),
    s === 0 && (Fn = null),
    hC(n.stateNode),
    Ye(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pa) throw ((Pa = !1), (e = Mu), (Mu = null), e);
  return (
    ka & 1 && e.tag !== 0 && eo(),
    (s = e.pendingLanes),
    s & 1 ? (e === Lu ? ss++ : ((ss = 0), (Lu = e))) : (ss = 0),
    Yn(),
    null
  );
}
function eo() {
  if (kn !== null) {
    var e = Og(ka),
      t = vt.transition,
      n = re;
    try {
      if (((vt.transition = null), (re = 16 > e ? 16 : e), kn === null))
        var r = !1;
      else {
        if (((e = kn), (kn = null), (ka = 0), J & 6)) throw Error(T(331));
        var o = J;
        for (J |= 4, F = e.current; F !== null; ) {
          var s = F,
            i = s.child;
          if (F.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (F = u; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (F = f);
                  else
                    for (; F !== null; ) {
                      d = F;
                      var m = d.sibling,
                        S = d.return;
                      if ((Vv(d), d === u)) {
                        F = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (F = m);
                        break;
                      }
                      F = S;
                    }
                }
              }
              var h = s.alternate;
              if (h !== null) {
                var y = h.child;
                if (y !== null) {
                  h.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              F = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (F = i);
          else
            e: for (; F !== null; ) {
              if (((s = F), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rs(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (F = v);
                break e;
              }
              F = s.return;
            }
        }
        var g = e.current;
        for (F = g; F !== null; ) {
          i = F;
          var x = i.child;
          if (i.subtreeFlags & 2064 && x !== null) (x.return = i), (F = x);
          else
            e: for (i = g; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ol(9, a);
                  }
                } catch (E) {
                  we(a, a.return, E);
                }
              if (a === i) {
                F = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (F = C);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((J = o), Yn(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        )
          try {
            Kt.onPostCommitFiberRoot(Xa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (re = n), (vt.transition = t);
    }
  }
  return !1;
}
function Rh(e, t, n) {
  (t = fo(n, t)),
    (t = Ov(e, t, 1)),
    (e = Ln(e, t, 1)),
    (t = Ve()),
    e !== null && (zs(e, 1, t), Ye(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) Rh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Fn === null || !Fn.has(r)))
        ) {
          (e = fo(n, e)),
            (e = Av(t, e, 1)),
            (t = Ln(t, e, 1)),
            (e = Ve()),
            t !== null && (zs(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function UE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      (Le & n) === n &&
      (Pe === 4 || (Pe === 3 && (Le & 130023424) === Le && 500 > Ce() - lf)
        ? fr(e, 0)
        : (af |= n)),
    Ye(e, t);
}
function Zv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ci), (ci <<= 1), !(ci & 130023424) && (ci = 4194304))
      : (t = 1));
  var n = Ve();
  (e = cn(e, t)), e !== null && (zs(e, t, n), Ye(e, n));
}
function BE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zv(e, n);
}
function VE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Zv(e, n);
}
var ey;
ey = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), TE(e, t, n);
      qe = !!(e.flags & 131072);
    }
  else (qe = !1), he && t.flags & 1048576 && ov(t, wa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zi(e, t), (e = t.pendingProps);
      var o = ao(t, Ue.current);
      Zr(t, n), (o = ef(null, t, r, e, o, n));
      var s = tf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((s = !0), ya(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Qd(t),
            (o.updater = rl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Eu(t, r, e, n),
            (t = ju(null, t, r, !0, s, n)))
          : ((t.tag = 0), he && s && Bd(t), Be(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = HE(r)),
          (e = Et(r, e)),
          o)
        ) {
          case 0:
            t = Nu(null, t, r, e, n);
            break e;
          case 1:
            t = vh(null, t, r, e, n);
            break e;
          case 11:
            t = mh(null, t, r, e, n);
            break e;
          case 14:
            t = gh(null, t, r, Et(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Et(r, o)),
        Nu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Et(r, o)),
        vh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Dv(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          uv(e, t),
          Ea(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = fo(Error(T(423)), t)), (t = yh(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = fo(Error(T(424)), t)), (t = yh(e, t, r, n, o));
            break e;
          } else
            for (
              ot = Mn(t.stateNode.containerInfo.firstChild),
                it = t,
                he = !0,
                Nt = null,
                n = lv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lo(), r === o)) {
            t = un(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dv(t),
        e === null && wu(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        mu(r, o) ? (i = null) : s !== null && mu(r, s) && (t.flags |= 32),
        Fv(e, t),
        Be(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && wu(t), null;
    case 13:
      return Iv(e, t, n);
    case 4:
      return (
        Xd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = co(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Et(r, o)),
        mh(e, t, r, o, n)
      );
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          ue(Sa, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Ot(s.value, i)) {
            if (s.children === o.children && !Qe.current) {
              t = un(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                i = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = sn(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Su(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(T(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Su(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        Be(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zr(t, n),
        (o = xt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Et(r, t.pendingProps)),
        (o = Et(r.type, o)),
        gh(e, t, r, o, n)
      );
    case 15:
      return Mv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Et(r, o)),
        zi(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), ya(t)) : (e = !1),
        Zr(t, n),
        _v(t, r, o),
        Eu(t, r, o, n),
        ju(null, t, r, !0, e, n)
      );
    case 19:
      return $v(e, t, n);
    case 22:
      return Lv(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function ty(e, t) {
  return Pg(e, t);
}
function WE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function gt(e, t, n, r) {
  return new WE(e, t, n, r);
}
function ff(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function HE(e) {
  if (typeof e == "function") return ff(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Td)) return 11;
    if (e === _d) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vi(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) ff(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ir:
        return pr(n.children, o, s, t);
      case kd:
        (i = 8), (o |= 8);
        break;
      case Gc:
        return (
          (e = gt(12, n, t, o | 2)), (e.elementType = Gc), (e.lanes = s), e
        );
      case qc:
        return (e = gt(13, n, t, o)), (e.elementType = qc), (e.lanes = s), e;
      case Qc:
        return (e = gt(19, n, t, o)), (e.elementType = Qc), (e.lanes = s), e;
      case dg:
        return il(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cg:
              i = 10;
              break e;
            case ug:
              i = 9;
              break e;
            case Td:
              i = 11;
              break e;
            case _d:
              i = 14;
              break e;
            case bn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = gt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function pr(e, t, n, r) {
  return (e = gt(7, e, r, t)), (e.lanes = n), e;
}
function il(e, t, n, r) {
  return (
    (e = gt(22, e, r, t)),
    (e.elementType = dg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sc(e, t, n) {
  return (e = gt(6, e, null, t)), (e.lanes = n), e;
}
function Cc(e, t, n) {
  return (
    (t = gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function KE(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = nc(0)),
    (this.expirationTimes = nc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = nc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function pf(e, t, n, r, o, s, i, a, l) {
  return (
    (e = new KE(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = gt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qd(s),
    e
  );
}
function GE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ny(e) {
  if (!e) return Bn;
  e = e._reactInternals;
  e: {
    if (Tr(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return nv(e, n, t);
  }
  return t;
}
function ry(e, t, n, r, o, s, i, a, l) {
  return (
    (e = pf(n, r, !0, e, o, s, i, a, l)),
    (e.context = ny(null)),
    (n = e.current),
    (r = Ve()),
    (o = Dn(n)),
    (s = sn(r, o)),
    (s.callback = t ?? null),
    Ln(n, s, o),
    (e.current.lanes = o),
    zs(e, o, r),
    Ye(e, r),
    e
  );
}
function al(e, t, n, r) {
  var o = t.current,
    s = Ve(),
    i = Dn(o);
  return (
    (n = ny(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = sn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ln(o, t, i)),
    e !== null && (Tt(e, o, i, s), Di(e, o, i)),
    i
  );
}
function _a(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ph(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hf(e, t) {
  Ph(e, t), (e = e.alternate) && Ph(e, t);
}
function qE() {
  return null;
}
var oy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function mf(e) {
  this._internalRoot = e;
}
ll.prototype.render = mf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  al(e, t, null, null);
};
ll.prototype.unmount = mf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cr(function () {
      al(null, e, null, null);
    }),
      (t[ln] = null);
  }
};
function ll(e) {
  this._internalRoot = e;
}
ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++);
    jn.splice(n, 0, e), n === 0 && Dg(e);
  }
};
function gf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function kh() {}
function QE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = _a(i);
        s.call(u);
      };
    }
    var i = ry(t, r, e, 0, null, !1, !1, "", kh);
    return (
      (e._reactRootContainer = i),
      (e[ln] = i.current),
      ws(e.nodeType === 8 ? e.parentNode : e),
      Cr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = _a(l);
      a.call(u);
    };
  }
  var l = pf(e, 0, !1, null, null, !1, !1, "", kh);
  return (
    (e._reactRootContainer = l),
    (e[ln] = l.current),
    ws(e.nodeType === 8 ? e.parentNode : e),
    Cr(function () {
      al(t, l, n, r);
    }),
    l
  );
}
function ul(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = _a(i);
        a.call(l);
      };
    }
    al(t, i, e, o);
  } else i = QE(n, t, e, o, r);
  return _a(i);
}
Ag = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ko(t.pendingLanes);
        n !== 0 &&
          (Md(t, n | 1), Ye(t, Ce()), !(J & 6) && ((po = Ce() + 500), Yn()));
      }
      break;
    case 13:
      Cr(function () {
        var r = cn(e, 1);
        if (r !== null) {
          var o = Ve();
          Tt(r, e, 1, o);
        }
      }),
        hf(e, 1);
  }
};
Ld = function (e) {
  if (e.tag === 13) {
    var t = cn(e, 134217728);
    if (t !== null) {
      var n = Ve();
      Tt(t, e, 134217728, n);
    }
    hf(e, 134217728);
  }
};
Mg = function (e) {
  if (e.tag === 13) {
    var t = Dn(e),
      n = cn(e, t);
    if (n !== null) {
      var r = Ve();
      Tt(n, e, t, r);
    }
    hf(e, t);
  }
};
Lg = function () {
  return re;
};
Fg = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
su = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = el(r);
            if (!o) throw Error(T(90));
            pg(r), Jc(r, o);
          }
        }
      }
      break;
    case "textarea":
      mg(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qr(e, !!n.multiple, t, !1);
  }
};
Cg = cf;
Eg = Cr;
var XE = { usingClientEntryPoint: !1, Events: [Bs, Br, el, wg, Sg, cf] },
  zo = {
    findFiberByHostInstance: ir,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  YE = {
    bundleType: zo.bundleType,
    version: zo.version,
    rendererPackageName: zo.rendererPackageName,
    rendererConfig: zo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = jg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zo.findFiberByHostInstance || qE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wi.isDisabled && wi.supportsFiber)
    try {
      (Xa = wi.inject(YE)), (Kt = wi);
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = XE;
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gf(t)) throw Error(T(200));
  return GE(e, t, null, n);
};
ft.createRoot = function (e, t) {
  if (!gf(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = oy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = pf(e, 1, !1, null, null, n, !1, r, o)),
    (e[ln] = t.current),
    ws(e.nodeType === 8 ? e.parentNode : e),
    new mf(t)
  );
};
ft.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = jg(t)), (e = e === null ? null : e.stateNode), e;
};
ft.flushSync = function (e) {
  return Cr(e);
};
ft.hydrate = function (e, t, n) {
  if (!cl(t)) throw Error(T(200));
  return ul(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
  if (!gf(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = oy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ry(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[ln] = t.current),
    ws(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ll(t);
};
ft.render = function (e, t, n) {
  if (!cl(t)) throw Error(T(200));
  return ul(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
  if (!cl(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Cr(function () {
        ul(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ln] = null);
        });
      }),
      !0)
    : !1;
};
ft.unstable_batchedUpdates = cf;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cl(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return ul(e, t, n, !1, r);
};
ft.version = "18.3.1-next-f1338f8080-20240426";
function sy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sy);
    } catch (e) {
      console.error(e);
    }
}
sy(), (sg.exports = ft);
var Jn = sg.exports;
const JE = Gm(Jn);
var iy,
  Th = Jn;
(iy = Th.createRoot), Th.hydrateRoot;
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ks() {
  return (
    (ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ks.apply(this, arguments)
  );
}
var Tn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Tn || (Tn = {}));
const _h = "popstate";
function ZE(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: a } = r.location;
    return Iu(
      "",
      { pathname: s, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Oa(o);
  }
  return tb(t, n, null, e);
}
function Ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ay(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function eb() {
  return Math.random().toString(36).substr(2, 8);
}
function Oh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Iu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ks(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? wo(t) : t,
      { state: n, key: (t && t.key) || r || eb() }
    )
  );
}
function Oa(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function wo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function tb(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    a = Tn.Pop,
    l = null,
    u = d();
  u == null && ((u = 0), i.replaceState(ks({}, i.state, { idx: u }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    a = Tn.Pop;
    let w = d(),
      v = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: y.location, delta: v });
  }
  function m(w, v) {
    a = Tn.Push;
    let g = Iu(y.location, w, v);
    u = d() + 1;
    let x = Oh(g, u),
      C = y.createHref(g);
    try {
      i.pushState(x, "", C);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(C);
    }
    s && l && l({ action: a, location: y.location, delta: 1 });
  }
  function S(w, v) {
    a = Tn.Replace;
    let g = Iu(y.location, w, v);
    u = d();
    let x = Oh(g, u),
      C = y.createHref(g);
    i.replaceState(x, "", C),
      s && l && l({ action: a, location: y.location, delta: 0 });
  }
  function h(w) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      g = typeof w == "string" ? w : Oa(w);
    return (
      (g = g.replace(/ $/, "%20")),
      Ee(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, v)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(o, i);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(_h, f),
        (l = w),
        () => {
          o.removeEventListener(_h, f), (l = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: h,
    encodeLocation(w) {
      let v = h(w);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: m,
    replace: S,
    go(w) {
      return i.go(w);
    },
  };
  return y;
}
var Ah;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ah || (Ah = {}));
function nb(e, t, n) {
  return n === void 0 && (n = "/"), rb(e, t, n, !1);
}
function rb(e, t, n, r) {
  let o = typeof t == "string" ? wo(t) : t,
    s = vf(o.pathname || "/", n);
  if (s == null) return null;
  let i = ly(e);
  ob(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) {
    let u = mb(s);
    a = pb(i[l], u, r);
  }
  return a;
}
function ly(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (Ee(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = $n([r, l.relativePath]),
      d = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (Ee(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      ly(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: db(u, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, i) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) o(s, i);
      else for (let l of cy(s.path)) o(s, i, l);
    }),
    t
  );
}
function cy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = cy(r.join("/")),
    a = [];
  return (
    a.push(...i.map((l) => (l === "" ? s : [s, l].join("/")))),
    o && a.push(...i),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function ob(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : fb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const sb = /^:[\w-]+$/,
  ib = 3,
  ab = 2,
  lb = 1,
  cb = 10,
  ub = -2,
  Mh = (e) => e === "*";
function db(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Mh) && (r += ub),
    t && (r += ab),
    n
      .filter((o) => !Mh(o))
      .reduce((o, s) => o + (sb.test(s) ? ib : s === "" ? lb : cb), r)
  );
}
function fb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function pb(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    s = "/",
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      f = Lh(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        d
      ),
      m = l.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Lh(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      i.push({
        params: o,
        pathname: $n([s, f.pathname]),
        pathnameBase: xb($n([s, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== "/" && (s = $n([s, f.pathnameBase]));
  }
  return i;
}
function Lh(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = hb(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: m, isOptional: S } = d;
      if (m === "*") {
        let y = a[f] || "";
        i = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const h = a[f];
      return (
        S && !h ? (u[m] = void 0) : (u[m] = (h || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function hb(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ay(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function mb(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ay(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function vf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function gb(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? wo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : vb(n, t)) : t,
    search: wb(r),
    hash: Sb(o),
  };
}
function vb(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ec(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function yb(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function yf(e, t) {
  let n = yb(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function xf(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = wo(e))
    : ((o = ks({}, e)),
      Ee(
        !o.pathname || !o.pathname.includes("?"),
        Ec("?", "pathname", "search", o)
      ),
      Ee(
        !o.pathname || !o.pathname.includes("#"),
        Ec("#", "pathname", "hash", o)
      ),
      Ee(!o.search || !o.search.includes("#"), Ec("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    i = s ? "/" : o.pathname,
    a;
  if (i == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      o.pathname = m.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = gb(o, a),
    u = i && i !== "/" && i.endsWith("/"),
    d = (s || i === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const $n = (e) => e.join("/").replace(/\/\/+/g, "/"),
  xb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  wb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Sb = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Cb(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const uy = ["post", "put", "patch", "delete"];
new Set(uy);
const Eb = ["get", ...uy];
new Set(Eb);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ts() {
  return (
    (Ts = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ts.apply(this, arguments)
  );
}
const wf = p.createContext(null),
  bb = p.createContext(null),
  Zn = p.createContext(null),
  dl = p.createContext(null),
  mn = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  dy = p.createContext(null);
function Nb(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  So() || Ee(!1);
  let { basename: r, navigator: o } = p.useContext(Zn),
    { hash: s, pathname: i, search: a } = py(e, { relative: n }),
    l = i;
  return (
    r !== "/" && (l = i === "/" ? r : $n([r, i])),
    o.createHref({ pathname: l, search: a, hash: s })
  );
}
function So() {
  return p.useContext(dl) != null;
}
function gn() {
  return So() || Ee(!1), p.useContext(dl).location;
}
function fy(e) {
  p.useContext(Zn).static || p.useLayoutEffect(e);
}
function Lt() {
  let { isDataRoute: e } = p.useContext(mn);
  return e ? zb() : jb();
}
function jb() {
  So() || Ee(!1);
  let e = p.useContext(wf),
    { basename: t, future: n, navigator: r } = p.useContext(Zn),
    { matches: o } = p.useContext(mn),
    { pathname: s } = gn(),
    i = JSON.stringify(yf(o, n.v7_relativeSplatPath)),
    a = p.useRef(!1);
  return (
    fy(() => {
      a.current = !0;
    }),
    p.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = xf(u, JSON.parse(i), s, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : $n([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, i, s, e]
    )
  );
}
const Rb = p.createContext(null);
function Pb(e) {
  let t = p.useContext(mn).outlet;
  return t && p.createElement(Rb.Provider, { value: e }, t);
}
function py(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = p.useContext(Zn),
    { matches: o } = p.useContext(mn),
    { pathname: s } = gn(),
    i = JSON.stringify(yf(o, r.v7_relativeSplatPath));
  return p.useMemo(() => xf(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function kb(e, t) {
  return Tb(e, t);
}
function Tb(e, t, n, r) {
  So() || Ee(!1);
  let { navigator: o } = p.useContext(Zn),
    { matches: s } = p.useContext(mn),
    i = s[s.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let u = gn(),
    d;
  if (t) {
    var f;
    let w = typeof t == "string" ? wo(t) : t;
    l === "/" || ((f = w.pathname) != null && f.startsWith(l)) || Ee(!1),
      (d = w);
  } else d = u;
  let m = d.pathname || "/",
    S = m;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    S = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let h = nb(e, { pathname: S }),
    y = Lb(
      h &&
        h.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: $n([
              l,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : $n([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && y
    ? p.createElement(
        dl.Provider,
        {
          value: {
            location: Ts(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Tn.Pop,
          },
        },
        y
      )
    : y;
}
function _b() {
  let e = $b(),
    t = Cb(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return p.createElement(
    p.Fragment,
    null,
    p.createElement("h2", null, "Unexpected Application Error!"),
    p.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? p.createElement("pre", { style: o }, n) : null,
    null
  );
}
const Ob = p.createElement(_b, null);
class Ab extends p.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? p.createElement(
          mn.Provider,
          { value: this.props.routeContext },
          p.createElement(dy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Mb(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = p.useContext(wf);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(mn.Provider, { value: t }, r)
  );
}
function Lb(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let d = i.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || Ee(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: m, errors: S } = n,
          h =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!S || S[f.route.id] === void 0);
        if (f.route.lazy || h) {
          (l = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, f, m) => {
    let S,
      h = !1,
      y = null,
      w = null;
    n &&
      ((S = a && f.route.id ? a[f.route.id] : void 0),
      (y = f.route.errorElement || Ob),
      l &&
        (u < 0 && m === 0
          ? ((h = !0), (w = null))
          : u === m &&
            ((h = !0), (w = f.route.hydrateFallbackElement || null))));
    let v = t.concat(i.slice(0, m + 1)),
      g = () => {
        let x;
        return (
          S
            ? (x = y)
            : h
            ? (x = w)
            : f.route.Component
            ? (x = p.createElement(f.route.Component, null))
            : f.route.element
            ? (x = f.route.element)
            : (x = d),
          p.createElement(Mb, {
            match: f,
            routeContext: { outlet: d, matches: v, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? p.createElement(Ab, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: S,
          children: g(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var hy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(hy || {}),
  Aa = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Aa || {});
function Fb(e) {
  let t = p.useContext(wf);
  return t || Ee(!1), t;
}
function Db(e) {
  let t = p.useContext(bb);
  return t || Ee(!1), t;
}
function Ib(e) {
  let t = p.useContext(mn);
  return t || Ee(!1), t;
}
function my(e) {
  let t = Ib(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ee(!1), n.route.id;
}
function $b() {
  var e;
  let t = p.useContext(dy),
    n = Db(Aa.UseRouteError),
    r = my(Aa.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function zb() {
  let { router: e } = Fb(hy.UseNavigateStable),
    t = my(Aa.UseNavigateStable),
    n = p.useRef(!1);
  return (
    fy(() => {
      n.current = !0;
    }),
    p.useCallback(
      function (o, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Ts({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function xn(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  So() || Ee(!1);
  let { future: s, static: i } = p.useContext(Zn),
    { matches: a } = p.useContext(mn),
    { pathname: l } = gn(),
    u = Lt(),
    d = xf(t, yf(a, s.v7_relativeSplatPath), l, o === "path"),
    f = JSON.stringify(d);
  return (
    p.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: o }),
      [u, f, o, n, r]
    ),
    null
  );
}
function Sf(e) {
  return Pb(e.context);
}
function be(e) {
  Ee(!1);
}
function Ub(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Tn.Pop,
    navigator: s,
    static: i = !1,
    future: a,
  } = e;
  So() && Ee(!1);
  let l = t.replace(/^\/*/, "/"),
    u = p.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: i,
        future: Ts({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, i]
    );
  typeof r == "string" && (r = wo(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: m = "",
      state: S = null,
      key: h = "default",
    } = r,
    y = p.useMemo(() => {
      let w = vf(d, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: m, state: S, key: h },
            navigationType: o,
          };
    }, [l, d, f, m, S, h, o]);
  return y == null
    ? null
    : p.createElement(
        Zn.Provider,
        { value: u },
        p.createElement(dl.Provider, { children: n, value: y })
      );
}
function Bb(e) {
  let { children: t, location: n } = e;
  return kb($u(t), n);
}
new Promise(() => {});
function $u(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    p.Children.forEach(e, (r, o) => {
      if (!p.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === p.Fragment) {
        n.push.apply(n, $u(r.props.children, s));
        return;
      }
      r.type !== be && Ee(!1), !r.props.index || !r.props.children || Ee(!1);
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = $u(r.props.children, s)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zu() {
  return (
    (zu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zu.apply(this, arguments)
  );
}
function Vb(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    (o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Wb(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Hb(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Wb(e);
}
function Uu(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]);
          }, [])
    )
  );
}
function Kb(e, t) {
  let n = Uu(e);
  return (
    t &&
      t.forEach((r, o) => {
        n.has(o) ||
          t.getAll(o).forEach((s) => {
            n.append(o, s);
          });
      }),
    n
  );
}
const Gb = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  qb = "6";
try {
  window.__reactRouterVersion = qb;
} catch {}
const Qb = "startTransition",
  Fh = aa[Qb];
function Xb(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = p.useRef();
  s.current == null && (s.current = ZE({ window: o, v5Compat: !0 }));
  let i = s.current,
    [a, l] = p.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    d = p.useCallback(
      (f) => {
        u && Fh ? Fh(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    p.useLayoutEffect(() => i.listen(d), [i, d]),
    p.createElement(Ub, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
      future: r,
    })
  );
}
const Yb =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cf = p.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: a,
        target: l,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      m = Vb(t, Gb),
      { basename: S } = p.useContext(Zn),
      h,
      y = !1;
    if (typeof u == "string" && Jb.test(u) && ((h = u), Yb))
      try {
        let x = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
          E = vf(C.pathname, S);
        C.origin === x.origin && E != null
          ? (u = E + C.search + C.hash)
          : (y = !0);
      } catch {}
    let w = Nb(u, { relative: o }),
      v = Zb(u, {
        replace: i,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: o,
        unstable_viewTransition: f,
      });
    function g(x) {
      r && r(x), x.defaultPrevented || v(x);
    }
    return p.createElement(
      "a",
      zu({}, m, { href: h || w, onClick: y || s ? r : g, ref: n, target: l })
    );
  });
var Dh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Dh || (Dh = {}));
var Ih;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ih || (Ih = {}));
function Zb(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Lt(),
    u = gn(),
    d = py(e, { relative: i });
  return p.useCallback(
    (f) => {
      if (Hb(f, n)) {
        f.preventDefault();
        let m = r !== void 0 ? r : Oa(u) === Oa(d);
        l(e, {
          replace: m,
          state: o,
          preventScrollReset: s,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, d, r, o, n, e, s, i, a]
  );
}
function Ef(e) {
  let t = p.useRef(Uu(e)),
    n = p.useRef(!1),
    r = gn(),
    o = p.useMemo(() => Kb(r.search, n.current ? null : t.current), [r.search]),
    s = Lt(),
    i = p.useCallback(
      (a, l) => {
        const u = Uu(typeof a == "function" ? a(o) : a);
        (n.current = !0), s("?" + u, l);
      },
      [s, o]
    );
  return [o, i];
}
function eN() {
  return c.jsxs("div", {
    className: "flex min-h-screen w-full",
    children: [
      c.jsx("div", {
        className:
          "hidden lg:flex items-center justify-center bg-black w-1/2 px-12",
        children: c.jsx("div", {
          className: "max-w-md space-y-6 text-center text-primary-foreground",
          children: c.jsx("h1", {
            className: "text-4xl font-extrabold tracking-tight",
            children: "Welcome to Agro Service Grocery Store",
          }),
        }),
      }),
      c.jsx("div", {
        className:
          "flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8",
        children: c.jsx(Sf, {}),
      }),
    ],
  });
}
function gy(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = gy(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function tN() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = gy(e)) && (r && (r += " "), (r += t));
  return r;
}
const bf = "-",
  nN = (e) => {
    const t = oN(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const a = i.split(bf);
        return a[0] === "" && a.length !== 1 && a.shift(), vy(a, t) || rN(i);
      },
      getConflictingClassGroupIds: (i, a) => {
        const l = n[i] || [];
        return a && r[i] ? [...l, ...r[i]] : l;
      },
    };
  },
  vy = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? vy(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(bf);
    return (i = t.validators.find(({ validator: a }) => a(s))) == null
      ? void 0
      : i.classGroupId;
  },
  $h = /^\[(.+)\]$/,
  rN = (e) => {
    if ($h.test(e)) {
      const t = $h.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  oN = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      iN(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        Bu(i, r, s, t);
      }),
      r
    );
  },
  Bu = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : zh(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (sN(o)) {
          Bu(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        Bu(i, zh(t, s), n, r);
      });
    });
  },
  zh = (e, t) => {
    let n = e;
    return (
      t.split(bf).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  sN = (e) => e.isThemeGetter,
  iN = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(([i, a]) => [t + i, a])
                )
              : s
          );
          return [n, o];
        })
      : e,
  aN = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return o(s, i), i;
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  yy = "!",
  lN = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (a) => {
        const l = [];
        let u = 0,
          d = 0,
          f;
        for (let w = 0; w < a.length; w++) {
          let v = a[w];
          if (u === 0) {
            if (v === o && (r || a.slice(w, w + s) === t)) {
              l.push(a.slice(d, w)), (d = w + s);
              continue;
            }
            if (v === "/") {
              f = w;
              continue;
            }
          }
          v === "[" ? u++ : v === "]" && u--;
        }
        const m = l.length === 0 ? a : a.substring(d),
          S = m.startsWith(yy),
          h = S ? m.substring(1) : m,
          y = f && f > d ? f - d : void 0;
        return {
          modifiers: l,
          hasImportantModifier: S,
          baseClassName: h,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: i }) : i;
  },
  cN = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  uN = (e) => ({ cache: aN(e.cacheSize), parseClassName: lN(e), ...nN(e) }),
  dN = /\s+/,
  fN = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(dN);
    let a = "";
    for (let l = i.length - 1; l >= 0; l -= 1) {
      const u = i[l],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: m,
          maybePostfixModifierPosition: S,
        } = n(u);
      let h = !!S,
        y = r(h ? m.substring(0, S) : m);
      if (!y) {
        if (!h) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((y = r(m)), !y)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        h = !1;
      }
      const w = cN(d).join(":"),
        v = f ? w + yy : w,
        g = v + y;
      if (s.includes(g)) continue;
      s.push(g);
      const x = o(y, h);
      for (let C = 0; C < x.length; ++C) {
        const E = x[C];
        s.push(v + E);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function pN() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = xy(t)) && (r && (r += " "), (r += n));
  return r;
}
const xy = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xy(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function hN(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(l) {
    const u = t.reduce((d, f) => f(d), e());
    return (n = uN(u)), (r = n.cache.get), (o = n.cache.set), (s = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const d = fN(l, n);
    return o(l, d), d;
  }
  return function () {
    return s(pN.apply(null, arguments));
  };
}
const de = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  wy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  mN = /^\d+\/\d+$/,
  gN = new Set(["px", "full", "screen"]),
  vN = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  yN =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  xN = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  wN = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  SN =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Jt = (e) => to(e) || gN.has(e) || mN.test(e),
  wn = (e) => Co(e, "length", kN),
  to = (e) => !!e && !Number.isNaN(Number(e)),
  bc = (e) => Co(e, "number", to),
  Uo = (e) => !!e && Number.isInteger(Number(e)),
  CN = (e) => e.endsWith("%") && to(e.slice(0, -1)),
  Q = (e) => wy.test(e),
  Sn = (e) => vN.test(e),
  EN = new Set(["length", "size", "percentage"]),
  bN = (e) => Co(e, EN, Sy),
  NN = (e) => Co(e, "position", Sy),
  jN = new Set(["image", "url"]),
  RN = (e) => Co(e, jN, _N),
  PN = (e) => Co(e, "", TN),
  Bo = () => !0,
  Co = (e, t, n) => {
    const r = wy.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  kN = (e) => yN.test(e) && !xN.test(e),
  Sy = () => !1,
  TN = (e) => wN.test(e),
  _N = (e) => SN.test(e),
  ON = () => {
    const e = de("colors"),
      t = de("spacing"),
      n = de("blur"),
      r = de("brightness"),
      o = de("borderColor"),
      s = de("borderRadius"),
      i = de("borderSpacing"),
      a = de("borderWidth"),
      l = de("contrast"),
      u = de("grayscale"),
      d = de("hueRotate"),
      f = de("invert"),
      m = de("gap"),
      S = de("gradientColorStops"),
      h = de("gradientColorStopPositions"),
      y = de("inset"),
      w = de("margin"),
      v = de("opacity"),
      g = de("padding"),
      x = de("saturate"),
      C = de("scale"),
      E = de("sepia"),
      N = de("skew"),
      b = de("space"),
      j = de("translate"),
      O = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", Q, t],
      M = () => [Q, t],
      G = () => ["", Jt, wn],
      A = () => ["auto", to, Q],
      U = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      W = () => ["solid", "dashed", "dotted", "double", "none"],
      $ = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      P = () => ["", "0", Q],
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [to, Q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Bo],
        spacing: [Jt, wn],
        blur: ["none", "", Sn, Q],
        brightness: V(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Sn, Q],
        borderSpacing: M(),
        borderWidth: G(),
        contrast: V(),
        grayscale: P(),
        hueRotate: V(),
        invert: P(),
        gap: M(),
        gradientColorStops: [e],
        gradientColorStopPositions: [CN, wn],
        inset: B(),
        margin: B(),
        opacity: V(),
        padding: M(),
        saturate: V(),
        scale: V(),
        sepia: P(),
        skew: V(),
        space: M(),
        translate: M(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Q] }],
        container: ["container"],
        columns: [{ columns: [Sn] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...U(), Q] }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: O() }],
        "overscroll-x": [{ "overscroll-x": O() }],
        "overscroll-y": [{ "overscroll-y": O() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Uo, Q] }],
        basis: [{ basis: B() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
        grow: [{ grow: P() }],
        shrink: [{ shrink: P() }],
        order: [{ order: ["first", "last", "none", Uo, Q] }],
        "grid-cols": [{ "grid-cols": [Bo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Uo, Q] }, Q] }],
        "col-start": [{ "col-start": A() }],
        "col-end": [{ "col-end": A() }],
        "grid-rows": [{ "grid-rows": [Bo] }],
        "row-start-end": [{ row: ["auto", { span: [Uo, Q] }, Q] }],
        "row-start": [{ "row-start": A() }],
        "row-end": [{ "row-end": A() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [g] }],
        px: [{ px: [g] }],
        py: [{ py: [g] }],
        ps: [{ ps: [g] }],
        pe: [{ pe: [g] }],
        pt: [{ pt: [g] }],
        pr: [{ pr: [g] }],
        pb: [{ pb: [g] }],
        pl: [{ pl: [g] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [b] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [b] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
        "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Sn] },
              Sn,
            ],
          },
        ],
        h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Sn, wn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              bc,
            ],
          },
        ],
        "font-family": [{ font: [Bo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", to, bc] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Jt,
              Q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [v] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [v] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...W(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Jt, wn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Jt, Q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: M() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [v] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...U(), NN] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", bN] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              RN,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [h] }],
        "gradient-via-pos": [{ via: [h] }],
        "gradient-to-pos": [{ to: [h] }],
        "gradient-from": [{ from: [S] }],
        "gradient-via": [{ via: [S] }],
        "gradient-to": [{ to: [S] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [v] }],
        "border-style": [{ border: [...W(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [v] }],
        "divide-style": [{ divide: W() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...W()] }],
        "outline-offset": [{ "outline-offset": [Jt, Q] }],
        "outline-w": [{ outline: [Jt, wn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: G() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [v] }],
        "ring-offset-w": [{ "ring-offset": [Jt, wn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Sn, PN] }],
        "shadow-color": [{ shadow: [Bo] }],
        opacity: [{ opacity: [v] }],
        "mix-blend": [{ "mix-blend": [...$(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": $() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Sn, Q] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [v] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Q,
            ],
          },
        ],
        duration: [{ duration: V() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
        delay: [{ delay: V() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [C] }],
        "scale-x": [{ "scale-x": [C] }],
        "scale-y": [{ "scale-y": [C] }],
        rotate: [{ rotate: [Uo, Q] }],
        "translate-x": [{ "translate-x": [j] }],
        "translate-y": [{ "translate-y": [j] }],
        "skew-x": [{ "skew-x": [N] }],
        "skew-y": [{ "skew-y": [N] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": M() }],
        "scroll-mx": [{ "scroll-mx": M() }],
        "scroll-my": [{ "scroll-my": M() }],
        "scroll-ms": [{ "scroll-ms": M() }],
        "scroll-me": [{ "scroll-me": M() }],
        "scroll-mt": [{ "scroll-mt": M() }],
        "scroll-mr": [{ "scroll-mr": M() }],
        "scroll-mb": [{ "scroll-mb": M() }],
        "scroll-ml": [{ "scroll-ml": M() }],
        "scroll-p": [{ "scroll-p": M() }],
        "scroll-px": [{ "scroll-px": M() }],
        "scroll-py": [{ "scroll-py": M() }],
        "scroll-ps": [{ "scroll-ps": M() }],
        "scroll-pe": [{ "scroll-pe": M() }],
        "scroll-pt": [{ "scroll-pt": M() }],
        "scroll-pr": [{ "scroll-pr": M() }],
        "scroll-pb": [{ "scroll-pb": M() }],
        "scroll-pl": [{ "scroll-pl": M() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Jt, wn, bc] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  AN = hN(ON);
function I(...e) {
  return AN(tN(e));
}
const ho = p.forwardRef(({ className: e, type: t, ...n }, r) =>
  c.jsx("input", {
    type: t,
    className: I(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: r,
    ...n,
  })
);
ho.displayName = "Input";
function MN(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function fl(...e) {
  return (t) => e.forEach((n) => MN(n, t));
}
function ee(...e) {
  return p.useCallback(fl(...e), e);
}
var Vn = p.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = p.Children.toArray(n),
    s = o.find(FN);
  if (s) {
    const i = s.props.children,
      a = o.map((l) =>
        l === s
          ? p.Children.count(i) > 1
            ? p.Children.only(null)
            : p.isValidElement(i)
            ? i.props.children
            : null
          : l
      );
    return c.jsx(Vu, {
      ...r,
      ref: t,
      children: p.isValidElement(i) ? p.cloneElement(i, void 0, a) : null,
    });
  }
  return c.jsx(Vu, { ...r, ref: t, children: n });
});
Vn.displayName = "Slot";
var Vu = p.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (p.isValidElement(n)) {
    const o = IN(n);
    return p.cloneElement(n, { ...DN(r, n.props), ref: t ? fl(t, o) : o });
  }
  return p.Children.count(n) > 1 ? p.Children.only(null) : null;
});
Vu.displayName = "SlotClone";
var LN = ({ children: e }) => c.jsx(c.Fragment, { children: e });
function FN(e) {
  return p.isValidElement(e) && e.type === LN;
}
function DN(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            s(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function IN(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var $N = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  K = $N.reduce((e, t) => {
    const n = p.forwardRef((r, o) => {
      const { asChild: s, ...i } = r,
        a = s ? Vn : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(a, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Nf(e, t) {
  e && Jn.flushSync(() => e.dispatchEvent(t));
}
var zN = "Label",
  Cy = p.forwardRef((e, t) =>
    c.jsx(K.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
Cy.displayName = zN;
var Ey = Cy;
function by(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = by(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function UN() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = by(e)) && (r && (r += " "), (r += t));
  return r;
}
const Uh = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Bh = UN,
  Ws = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Bh(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          f = s == null ? void 0 : s[u];
        if (d === null) return null;
        const m = Uh(d) || Uh(f);
        return o[u][m];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [f, m] = d;
          return m === void 0 || (u[f] = m), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: f, className: m, ...S } = d;
              return Object.entries(S).every((h) => {
                let [y, w] = h;
                return Array.isArray(w)
                  ? w.includes({ ...s, ...a }[y])
                  : { ...s, ...a }[y] === w;
              })
                ? [...u, f, m]
                : u;
            }, []);
    return Bh(
      e,
      i,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  BN = Ws(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  me = p.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Ey, { ref: n, className: I(BN(), e), ...t })
  );
me.displayName = Ey.displayName;
function Vh(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function L(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function VN(e, t) {
  const n = p.createContext(t);
  function r(s) {
    const { children: i, ...a } = s,
      l = p.useMemo(() => a, Object.values(a));
    return c.jsx(n.Provider, { value: l, children: i });
  }
  function o(s) {
    const i = p.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function Ft(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = p.createContext(i),
      l = n.length;
    n = [...n, i];
    function u(f) {
      const { scope: m, children: S, ...h } = f,
        y = (m == null ? void 0 : m[e][l]) || a,
        w = p.useMemo(() => h, Object.values(h));
      return c.jsx(y.Provider, { value: w, children: S });
    }
    function d(f, m) {
      const S = (m == null ? void 0 : m[e][l]) || a,
        h = p.useContext(S);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + "Provider"), [u, d];
  }
  const o = () => {
    const s = n.map((i) => p.createContext(i));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, WN(o, ...t)];
}
function WN(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const f = l(s)[`__scope${u}`];
        return { ...a, ...f };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function pl(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ft(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (S) => {
      const { scope: h, children: y } = S,
        w = Zt.useRef(null),
        v = Zt.useRef(new Map()).current;
      return c.jsx(o, { scope: h, itemMap: v, collectionRef: w, children: y });
    };
  i.displayName = t;
  const a = e + "CollectionSlot",
    l = Zt.forwardRef((S, h) => {
      const { scope: y, children: w } = S,
        v = s(a, y),
        g = ee(h, v.collectionRef);
      return c.jsx(Vn, { ref: g, children: w });
    });
  l.displayName = a;
  const u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = Zt.forwardRef((S, h) => {
      const { scope: y, children: w, ...v } = S,
        g = Zt.useRef(null),
        x = ee(h, g),
        C = s(u, y);
      return (
        Zt.useEffect(
          () => (
            C.itemMap.set(g, { ref: g, ...v }), () => void C.itemMap.delete(g)
          )
        ),
        c.jsx(Vn, { [d]: "", ref: x, children: w })
      );
    });
  f.displayName = u;
  function m(S) {
    const h = s(e + "CollectionConsumer", S);
    return Zt.useCallback(() => {
      const w = h.collectionRef.current;
      if (!w) return [];
      const v = Array.from(w.querySelectorAll(`[${d}]`));
      return Array.from(h.itemMap.values()).sort(
        (C, E) => v.indexOf(C.ref.current) - v.indexOf(E.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [{ Provider: i, Slot: l, ItemSlot: f }, m, r];
}
var HN = p.createContext(void 0);
function hl(e) {
  const t = p.useContext(HN);
  return e || t || "ltr";
}
function De(e) {
  const t = p.useRef(e);
  return (
    p.useEffect(() => {
      t.current = e;
    }),
    p.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function KN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = De(e);
  p.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var GN = "DismissableLayer",
  Wu = "dismissableLayer.update",
  qN = "dismissableLayer.pointerDownOutside",
  QN = "dismissableLayer.focusOutside",
  Wh,
  Ny = p.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Hs = p.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: a,
        ...l
      } = e,
      u = p.useContext(Ny),
      [d, f] = p.useState(null),
      m =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, S] = p.useState({}),
      h = ee(t, (b) => f(b)),
      y = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      v = y.indexOf(w),
      g = d ? y.indexOf(d) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = g >= v,
      E = YN((b) => {
        const j = b.target,
          O = [...u.branches].some((_) => _.contains(j));
        !C ||
          O ||
          (o == null || o(b),
          i == null || i(b),
          b.defaultPrevented || a == null || a());
      }, m),
      N = JN((b) => {
        const j = b.target;
        [...u.branches].some((_) => _.contains(j)) ||
          (s == null || s(b),
          i == null || i(b),
          b.defaultPrevented || a == null || a());
      }, m);
    return (
      KN((b) => {
        g === u.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && a && (b.preventDefault(), a()));
      }, m),
      p.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Wh = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Hh(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Wh);
            }
          );
      }, [d, m, n, u]),
      p.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            Hh());
        },
        [d, u]
      ),
      p.useEffect(() => {
        const b = () => S({});
        return (
          document.addEventListener(Wu, b),
          () => document.removeEventListener(Wu, b)
        );
      }, []),
      c.jsx(K.div, {
        ...l,
        ref: h,
        style: {
          pointerEvents: x ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: L(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: L(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: L(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    );
  });
Hs.displayName = GN;
var XN = "DismissableLayerBranch",
  jy = p.forwardRef((e, t) => {
    const n = p.useContext(Ny),
      r = p.useRef(null),
      o = ee(t, r);
    return (
      p.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      c.jsx(K.div, { ...e, ref: o })
    );
  });
jy.displayName = XN;
function YN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = De(e),
    r = p.useRef(!1),
    o = p.useRef(() => {});
  return (
    p.useEffect(() => {
      const s = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Ry(qN, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function JN(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = De(e),
    r = p.useRef(!1);
  return (
    p.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          Ry(QN, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Hh() {
  const e = new CustomEvent(Wu);
  document.dispatchEvent(e);
}
function Ry(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Nf(o, s) : o.dispatchEvent(s);
}
var ZN = Hs,
  ej = jy,
  Nc = 0;
function jf() {
  p.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Kh()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Kh()),
      Nc++,
      () => {
        Nc === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Nc--;
      }
    );
  }, []);
}
function Kh() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var jc = "focusScope.autoFocusOnMount",
  Rc = "focusScope.autoFocusOnUnmount",
  Gh = { bubbles: !1, cancelable: !0 },
  tj = "FocusScope",
  ml = p.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [a, l] = p.useState(null),
      u = De(o),
      d = De(s),
      f = p.useRef(null),
      m = ee(t, (y) => l(y)),
      S = p.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    p.useEffect(() => {
      if (r) {
        let y = function (x) {
            if (S.paused || !a) return;
            const C = x.target;
            a.contains(C) ? (f.current = C) : En(f.current, { select: !0 });
          },
          w = function (x) {
            if (S.paused || !a) return;
            const C = x.relatedTarget;
            C !== null && (a.contains(C) || En(f.current, { select: !0 }));
          },
          v = function (x) {
            if (document.activeElement === document.body)
              for (const E of x) E.removedNodes.length > 0 && En(a);
          };
        document.addEventListener("focusin", y),
          document.addEventListener("focusout", w);
        const g = new MutationObserver(v);
        return (
          a && g.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", y),
              document.removeEventListener("focusout", w),
              g.disconnect();
          }
        );
      }
    }, [r, a, S.paused]),
      p.useEffect(() => {
        if (a) {
          Qh.add(S);
          const y = document.activeElement;
          if (!a.contains(y)) {
            const v = new CustomEvent(jc, Gh);
            a.addEventListener(jc, u),
              a.dispatchEvent(v),
              v.defaultPrevented ||
                (nj(aj(Py(a)), { select: !0 }),
                document.activeElement === y && En(a));
          }
          return () => {
            a.removeEventListener(jc, u),
              setTimeout(() => {
                const v = new CustomEvent(Rc, Gh);
                a.addEventListener(Rc, d),
                  a.dispatchEvent(v),
                  v.defaultPrevented || En(y ?? document.body, { select: !0 }),
                  a.removeEventListener(Rc, d),
                  Qh.remove(S);
              }, 0);
          };
        }
      }, [a, u, d, S]);
    const h = p.useCallback(
      (y) => {
        if ((!n && !r) || S.paused) return;
        const w = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey,
          v = document.activeElement;
        if (w && v) {
          const g = y.currentTarget,
            [x, C] = rj(g);
          x && C
            ? !y.shiftKey && v === C
              ? (y.preventDefault(), n && En(x, { select: !0 }))
              : y.shiftKey &&
                v === x &&
                (y.preventDefault(), n && En(C, { select: !0 }))
            : v === g && y.preventDefault();
        }
      },
      [n, r, S.paused]
    );
    return c.jsx(K.div, { tabIndex: -1, ...i, ref: m, onKeyDown: h });
  });
ml.displayName = tj;
function nj(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((En(r, { select: t }), document.activeElement !== n)) return;
}
function rj(e) {
  const t = Py(e),
    n = qh(t, e),
    r = qh(t.reverse(), e);
  return [n, r];
}
function Py(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function qh(e, t) {
  for (const n of e) if (!oj(n, { upTo: t })) return n;
}
function oj(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function sj(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function En(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && sj(e) && t && e.select();
  }
}
var Qh = ij();
function ij() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Xh(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Xh(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Xh(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function aj(e) {
  return e.filter((t) => t.tagName !== "A");
}
var _e =
    globalThis != null && globalThis.document ? p.useLayoutEffect : () => {},
  lj = aa.useId || (() => {}),
  cj = 0;
function qt(e) {
  const [t, n] = p.useState(lj());
  return (
    _e(() => {
      n((r) => r ?? String(cj++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const uj = ["top", "right", "bottom", "left"],
  Ht = Math.min,
  rt = Math.max,
  Ma = Math.round,
  Si = Math.floor,
  Wn = (e) => ({ x: e, y: e }),
  dj = { left: "right", right: "left", bottom: "top", top: "bottom" },
  fj = { start: "end", end: "start" };
function Hu(e, t, n) {
  return rt(e, Ht(t, n));
}
function dn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fn(e) {
  return e.split("-")[0];
}
function Eo(e) {
  return e.split("-")[1];
}
function Rf(e) {
  return e === "x" ? "y" : "x";
}
function Pf(e) {
  return e === "y" ? "height" : "width";
}
function Hn(e) {
  return ["top", "bottom"].includes(fn(e)) ? "y" : "x";
}
function kf(e) {
  return Rf(Hn(e));
}
function pj(e, t, n) {
  n === void 0 && (n = !1);
  const r = Eo(e),
    o = kf(e),
    s = Pf(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = La(i)), [i, La(i)];
}
function hj(e) {
  const t = La(e);
  return [Ku(e), t, Ku(t)];
}
function Ku(e) {
  return e.replace(/start|end/g, (t) => fj[t]);
}
function mj(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function gj(e, t, n, r) {
  const o = Eo(e);
  let s = mj(fn(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Ku)))), s
  );
}
function La(e) {
  return e.replace(/left|right|bottom|top/g, (t) => dj[t]);
}
function vj(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function ky(e) {
  return typeof e != "number"
    ? vj(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Fa(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Yh(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = Hn(t),
    i = kf(t),
    a = Pf(i),
    l = fn(t),
    u = s === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    m = r[a] / 2 - o[a] / 2;
  let S;
  switch (l) {
    case "top":
      S = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      S = { x: d, y: r.y + r.height };
      break;
    case "right":
      S = { x: r.x + r.width, y: f };
      break;
    case "left":
      S = { x: r.x - o.width, y: f };
      break;
    default:
      S = { x: r.x, y: r.y };
  }
  switch (Eo(t)) {
    case "start":
      S[i] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      S[i] += m * (n && u ? -1 : 1);
      break;
  }
  return S;
}
const yj = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    a = s.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = Yh(u, r, l),
    m = r,
    S = {},
    h = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: v } = a[y],
      {
        x: g,
        y: x,
        data: C,
        reset: E,
      } = await v({
        x: d,
        y: f,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: S,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (d = g ?? d),
      (f = x ?? f),
      (S = { ...S, [w]: { ...S[w], ...C } }),
      E &&
        h <= 50 &&
        (h++,
        typeof E == "object" &&
          (E.placement && (m = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: d, y: f } = Yh(u, m, l))),
        (y = -1));
  }
  return { x: d, y: f, placement: m, strategy: o, middlewareData: S };
};
async function _s(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: m = !1,
      padding: S = 0,
    } = dn(t, e),
    h = ky(S),
    w = a[m ? (f === "floating" ? "reference" : "floating") : f],
    v = Fa(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: l,
      })
    ),
    g =
      f === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    x = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    C = (await (s.isElement == null ? void 0 : s.isElement(x)))
      ? (await (s.getScale == null ? void 0 : s.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Fa(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: g,
            offsetParent: x,
            strategy: l,
          })
        : g
    );
  return {
    top: (v.top - E.top + h.top) / C.y,
    bottom: (E.bottom - v.bottom + h.bottom) / C.y,
    left: (v.left - E.left + h.left) / C.x,
    right: (E.right - v.right + h.right) / C.x,
  };
}
const xj = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: d = 0 } = dn(e, t) || {};
      if (u == null) return {};
      const f = ky(d),
        m = { x: n, y: r },
        S = kf(o),
        h = Pf(S),
        y = await i.getDimensions(u),
        w = S === "y",
        v = w ? "top" : "left",
        g = w ? "bottom" : "right",
        x = w ? "clientHeight" : "clientWidth",
        C = s.reference[h] + s.reference[S] - m[S] - s.floating[h],
        E = m[S] - s.reference[S],
        N = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let b = N ? N[x] : 0;
      (!b || !(await (i.isElement == null ? void 0 : i.isElement(N)))) &&
        (b = a.floating[x] || s.floating[h]);
      const j = C / 2 - E / 2,
        O = b / 2 - y[h] / 2 - 1,
        _ = Ht(f[v], O),
        B = Ht(f[g], O),
        M = _,
        G = b - y[h] - B,
        A = b / 2 - y[h] / 2 + j,
        U = Hu(M, A, G),
        W =
          !l.arrow &&
          Eo(o) != null &&
          A !== U &&
          s.reference[h] / 2 - (A < M ? _ : B) - y[h] / 2 < 0,
        $ = W ? (A < M ? A - M : A - G) : 0;
      return {
        [S]: m[S] + $,
        data: {
          [S]: U,
          centerOffset: A - U - $,
          ...(W && { alignmentOffset: $ }),
        },
        reset: W,
      };
    },
  }),
  wj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: m,
              fallbackStrategy: S = "bestFit",
              fallbackAxisSideDirection: h = "none",
              flipAlignment: y = !0,
              ...w
            } = dn(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const v = fn(o),
            g = Hn(a),
            x = fn(a) === a,
            C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            E = m || (x || !y ? [La(a)] : hj(a)),
            N = h !== "none";
          !m && N && E.push(...gj(a, y, h, C));
          const b = [a, ...E],
            j = await _s(t, w),
            O = [];
          let _ = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((d && O.push(j[v]), f)) {
            const A = pj(o, i, C);
            O.push(j[A[0]], j[A[1]]);
          }
          if (
            ((_ = [..._, { placement: o, overflows: O }]),
            !O.every((A) => A <= 0))
          ) {
            var B, M;
            const A = (((B = s.flip) == null ? void 0 : B.index) || 0) + 1,
              U = b[A];
            if (U)
              return {
                data: { index: A, overflows: _ },
                reset: { placement: U },
              };
            let W =
              (M = _.filter(($) => $.overflows[0] <= 0).sort(
                ($, k) => $.overflows[1] - k.overflows[1]
              )[0]) == null
                ? void 0
                : M.placement;
            if (!W)
              switch (S) {
                case "bestFit": {
                  var G;
                  const $ =
                    (G = _.filter((k) => {
                      if (N) {
                        const P = Hn(k.placement);
                        return P === g || P === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((P) => P > 0)
                          .reduce((P, D) => P + D, 0),
                      ])
                      .sort((k, P) => k[1] - P[1])[0]) == null
                      ? void 0
                      : G[0];
                  $ && (W = $);
                  break;
                }
                case "initialPlacement":
                  W = a;
                  break;
              }
            if (o !== W) return { reset: { placement: W } };
          }
          return {};
        },
      }
    );
  };
function Jh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Zh(e) {
  return uj.some((t) => e[t] >= 0);
}
const Sj = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = dn(e, t);
        switch (r) {
          case "referenceHidden": {
            const s = await _s(t, { ...o, elementContext: "reference" }),
              i = Jh(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: Zh(i) },
            };
          }
          case "escaped": {
            const s = await _s(t, { ...o, altBoundary: !0 }),
              i = Jh(s, n.floating);
            return { data: { escapedOffsets: i, escaped: Zh(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Cj(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = fn(n),
    a = Eo(n),
    l = Hn(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    d = s && l ? -1 : 1,
    f = dn(t, e);
  let {
    mainAxis: m,
    crossAxis: S,
    alignmentAxis: h,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    a && typeof h == "number" && (S = a === "end" ? h * -1 : h),
    l ? { x: S * d, y: m * u } : { x: m * u, y: S * d }
  );
}
const Ej = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: a } = t,
            l = await Cj(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: s + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  bj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (w) => {
                  let { x: v, y: g } = w;
                  return { x: v, y: g };
                },
              },
              ...l
            } = dn(e, t),
            u = { x: n, y: r },
            d = await _s(t, l),
            f = Hn(fn(o)),
            m = Rf(f);
          let S = u[m],
            h = u[f];
          if (s) {
            const w = m === "y" ? "top" : "left",
              v = m === "y" ? "bottom" : "right",
              g = S + d[w],
              x = S - d[v];
            S = Hu(g, S, x);
          }
          if (i) {
            const w = f === "y" ? "top" : "left",
              v = f === "y" ? "bottom" : "right",
              g = h + d[w],
              x = h - d[v];
            h = Hu(g, h, x);
          }
          const y = a.fn({ ...t, [m]: S, [f]: h });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  },
  Nj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = dn(e, t),
            d = { x: n, y: r },
            f = Hn(o),
            m = Rf(f);
          let S = d[m],
            h = d[f];
          const y = dn(a, t),
            w =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (l) {
            const x = m === "y" ? "height" : "width",
              C = s.reference[m] - s.floating[x] + w.mainAxis,
              E = s.reference[m] + s.reference[x] - w.mainAxis;
            S < C ? (S = C) : S > E && (S = E);
          }
          if (u) {
            var v, g;
            const x = m === "y" ? "width" : "height",
              C = ["top", "left"].includes(fn(o)),
              E =
                s.reference[f] -
                s.floating[x] +
                ((C && ((v = i.offset) == null ? void 0 : v[f])) || 0) +
                (C ? 0 : w.crossAxis),
              N =
                s.reference[f] +
                s.reference[x] +
                (C ? 0 : ((g = i.offset) == null ? void 0 : g[f]) || 0) -
                (C ? w.crossAxis : 0);
            h < E ? (h = E) : h > N && (h = N);
          }
          return { [m]: S, [f]: h };
        },
      }
    );
  },
  jj = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...a } = dn(e, t),
            l = await _s(t, a),
            u = fn(n),
            d = Eo(n),
            f = Hn(n) === "y",
            { width: m, height: S } = r.floating;
          let h, y;
          u === "top" || u === "bottom"
            ? ((h = u),
              (y =
                d ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = u), (h = d === "end" ? "top" : "bottom"));
          const w = S - l.top - l.bottom,
            v = m - l.left - l.right,
            g = Ht(S - l[h], w),
            x = Ht(m - l[y], v),
            C = !t.middlewareData.shift;
          let E = g,
            N = x;
          if (
            (f ? (N = d || C ? Ht(x, v) : v) : (E = d || C ? Ht(g, w) : w),
            C && !d)
          ) {
            const j = rt(l.left, 0),
              O = rt(l.right, 0),
              _ = rt(l.top, 0),
              B = rt(l.bottom, 0);
            f
              ? (N = m - 2 * (j !== 0 || O !== 0 ? j + O : rt(l.left, l.right)))
              : (E =
                  S - 2 * (_ !== 0 || B !== 0 ? _ + B : rt(l.top, l.bottom)));
          }
          await i({ ...t, availableWidth: N, availableHeight: E });
          const b = await o.getDimensions(s.floating);
          return m !== b.width || S !== b.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function bo(e) {
  return Ty(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function vn(e) {
  var t;
  return (t = (Ty(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Ty(e) {
  return e instanceof Node || e instanceof at(e).Node;
}
function At(e) {
  return e instanceof Element || e instanceof at(e).Element;
}
function Qt(e) {
  return e instanceof HTMLElement || e instanceof at(e).HTMLElement;
}
function em(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
function Ks(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Mt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function Rj(e) {
  return ["table", "td", "th"].includes(bo(e));
}
function gl(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Tf(e) {
  const t = _f(),
    n = At(e) ? Mt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function Pj(e) {
  let t = Kn(e);
  for (; Qt(t) && !mo(t); ) {
    if (Tf(t)) return t;
    if (gl(t)) return null;
    t = Kn(t);
  }
  return null;
}
function _f() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function mo(e) {
  return ["html", "body", "#document"].includes(bo(e));
}
function Mt(e) {
  return at(e).getComputedStyle(e);
}
function vl(e) {
  return At(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Kn(e) {
  if (bo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (em(e) && e.host) || vn(e);
  return em(t) ? t.host : t;
}
function _y(e) {
  const t = Kn(e);
  return mo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Qt(t) && Ks(t)
    ? t
    : _y(t);
}
function Os(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = _y(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = at(o);
  if (s) {
    const a = Gu(i);
    return t.concat(
      i,
      i.visualViewport || [],
      Ks(o) ? o : [],
      a && n ? Os(a) : []
    );
  }
  return t.concat(o, Os(o, [], n));
}
function Gu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Oy(e) {
  const t = Mt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Qt(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = Ma(n) !== s || Ma(r) !== i;
  return a && ((n = s), (r = i)), { width: n, height: r, $: a };
}
function Of(e) {
  return At(e) ? e : e.contextElement;
}
function no(e) {
  const t = Of(e);
  if (!Qt(t)) return Wn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Oy(t);
  let i = (s ? Ma(n.width) : n.width) / r,
    a = (s ? Ma(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const kj = Wn(0);
function Ay(e) {
  const t = at(e);
  return !_f() || !t.visualViewport
    ? kj
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Tj(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== at(e)) ? !1 : t;
}
function Er(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = Of(e);
  let i = Wn(1);
  t && (r ? At(r) && (i = no(r)) : (i = no(e)));
  const a = Tj(s, n, r) ? Ay(s) : Wn(0);
  let l = (o.left + a.x) / i.x,
    u = (o.top + a.y) / i.y,
    d = o.width / i.x,
    f = o.height / i.y;
  if (s) {
    const m = at(s),
      S = r && At(r) ? at(r) : r;
    let h = m,
      y = Gu(h);
    for (; y && r && S !== h; ) {
      const w = no(y),
        v = y.getBoundingClientRect(),
        g = Mt(y),
        x = v.left + (y.clientLeft + parseFloat(g.paddingLeft)) * w.x,
        C = v.top + (y.clientTop + parseFloat(g.paddingTop)) * w.y;
      (l *= w.x),
        (u *= w.y),
        (d *= w.x),
        (f *= w.y),
        (l += x),
        (u += C),
        (h = at(y)),
        (y = Gu(h));
    }
  }
  return Fa({ width: d, height: f, x: l, y: u });
}
function _j(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = vn(r),
    a = t ? gl(t.floating) : !1;
  if (r === i || (a && s)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Wn(1);
  const d = Wn(0),
    f = Qt(r);
  if (
    (f || (!f && !s)) &&
    ((bo(r) !== "body" || Ks(i)) && (l = vl(r)), Qt(r))
  ) {
    const m = Er(r);
    (u = no(r)), (d.x = m.x + r.clientLeft), (d.y = m.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + d.x,
    y: n.y * u.y - l.scrollTop * u.y + d.y,
  };
}
function Oj(e) {
  return Array.from(e.getClientRects());
}
function My(e) {
  return Er(vn(e)).left + vl(e).scrollLeft;
}
function Aj(e) {
  const t = vn(e),
    n = vl(e),
    r = e.ownerDocument.body,
    o = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + My(e);
  const a = -n.scrollTop;
  return (
    Mt(r).direction === "rtl" && (i += rt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: a }
  );
}
function Mj(e, t) {
  const n = at(e),
    r = vn(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const u = _f();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: s, height: i, x: a, y: l };
}
function Lj(e, t) {
  const n = Er(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = Qt(e) ? no(e) : Wn(1),
    i = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    l = o * s.x,
    u = r * s.y;
  return { width: i, height: a, x: l, y: u };
}
function tm(e, t, n) {
  let r;
  if (t === "viewport") r = Mj(e, n);
  else if (t === "document") r = Aj(vn(e));
  else if (At(t)) r = Lj(t, n);
  else {
    const o = Ay(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Fa(r);
}
function Ly(e, t) {
  const n = Kn(e);
  return n === t || !At(n) || mo(n)
    ? !1
    : Mt(n).position === "fixed" || Ly(n, t);
}
function Fj(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Os(e, [], !1).filter((a) => At(a) && bo(a) !== "body"),
    o = null;
  const s = Mt(e).position === "fixed";
  let i = s ? Kn(e) : e;
  for (; At(i) && !mo(i); ) {
    const a = Mt(i),
      l = Tf(i);
    !l && a.position === "fixed" && (o = null),
      (
        s
          ? !l && !o
          : (!l &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Ks(i) && !l && Ly(e, i))
      )
        ? (r = r.filter((d) => d !== i))
        : (o = a),
      (i = Kn(i));
  }
  return t.set(e, r), r;
}
function Dj(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? gl(t)
          ? []
          : Fj(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = i[0],
    l = i.reduce((u, d) => {
      const f = tm(t, d, o);
      return (
        (u.top = rt(f.top, u.top)),
        (u.right = Ht(f.right, u.right)),
        (u.bottom = Ht(f.bottom, u.bottom)),
        (u.left = rt(f.left, u.left)),
        u
      );
    }, tm(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Ij(e) {
  const { width: t, height: n } = Oy(e);
  return { width: t, height: n };
}
function $j(e, t, n) {
  const r = Qt(t),
    o = vn(t),
    s = n === "fixed",
    i = Er(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Wn(0);
  if (r || (!r && !s))
    if (((bo(t) !== "body" || Ks(o)) && (a = vl(t)), r)) {
      const f = Er(t, !0, s, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else o && (l.x = My(o));
  const u = i.left + a.scrollLeft - l.x,
    d = i.top + a.scrollTop - l.y;
  return { x: u, y: d, width: i.width, height: i.height };
}
function Pc(e) {
  return Mt(e).position === "static";
}
function nm(e, t) {
  return !Qt(e) || Mt(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function Fy(e, t) {
  const n = at(e);
  if (gl(e)) return n;
  if (!Qt(e)) {
    let o = Kn(e);
    for (; o && !mo(o); ) {
      if (At(o) && !Pc(o)) return o;
      o = Kn(o);
    }
    return n;
  }
  let r = nm(e, t);
  for (; r && Rj(r) && Pc(r); ) r = nm(r, t);
  return r && mo(r) && Pc(r) && !Tf(r) ? n : r || Pj(e) || n;
}
const zj = async function (e) {
  const t = this.getOffsetParent || Fy,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: $j(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Uj(e) {
  return Mt(e).direction === "rtl";
}
const Bj = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _j,
  getDocumentElement: vn,
  getClippingRect: Dj,
  getOffsetParent: Fy,
  getElementRects: zj,
  getClientRects: Oj,
  getDimensions: Ij,
  getScale: no,
  isElement: At,
  isRTL: Uj,
};
function Vj(e, t) {
  let n = null,
    r;
  const o = vn(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const { left: u, top: d, width: f, height: m } = e.getBoundingClientRect();
    if ((a || t(), !f || !m)) return;
    const S = Si(d),
      h = Si(o.clientWidth - (u + f)),
      y = Si(o.clientHeight - (d + m)),
      w = Si(u),
      g = {
        rootMargin: -S + "px " + -h + "px " + -y + "px " + -w + "px",
        threshold: rt(0, Ht(1, l)) || 1,
      };
    let x = !0;
    function C(E) {
      const N = E[0].intersectionRatio;
      if (N !== l) {
        if (!x) return i();
        N
          ? i(!1, N)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...g, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, g);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Wj(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = Of(e),
    d = o || s ? [...(u ? Os(u) : []), ...Os(t)] : [];
  d.forEach((v) => {
    o && v.addEventListener("scroll", n, { passive: !0 }),
      s && v.addEventListener("resize", n);
  });
  const f = u && a ? Vj(u, n) : null;
  let m = -1,
    S = null;
  i &&
    ((S = new ResizeObserver((v) => {
      let [g] = v;
      g &&
        g.target === u &&
        S &&
        (S.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var x;
          (x = S) == null || x.observe(t);
        }))),
        n();
    })),
    u && !l && S.observe(u),
    S.observe(t));
  let h,
    y = l ? Er(e) : null;
  l && w();
  function w() {
    const v = Er(e);
    y &&
      (v.x !== y.x ||
        v.y !== y.y ||
        v.width !== y.width ||
        v.height !== y.height) &&
      n(),
      (y = v),
      (h = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var v;
      d.forEach((g) => {
        o && g.removeEventListener("scroll", n),
          s && g.removeEventListener("resize", n);
      }),
        f == null || f(),
        (v = S) == null || v.disconnect(),
        (S = null),
        l && cancelAnimationFrame(h);
    }
  );
}
const Hj = Ej,
  Kj = bj,
  Gj = wj,
  qj = jj,
  Qj = Sj,
  rm = xj,
  Xj = Nj,
  Yj = (e, t, n) => {
    const r = new Map(),
      o = { platform: Bj, ...n },
      s = { ...o.platform, _c: r };
    return yj(e, t, { ...o, platform: s });
  };
var Wi = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function Da(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Da(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Da(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Dy(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function om(e, t) {
  const n = Dy(e);
  return Math.round(t * n) / n;
}
function sm(e) {
  const t = p.useRef(e);
  return (
    Wi(() => {
      t.current = e;
    }),
    t
  );
}
function Jj(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [d, f] = p.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, S] = p.useState(r);
  Da(m, r) || S(r);
  const [h, y] = p.useState(null),
    [w, v] = p.useState(null),
    g = p.useCallback(($) => {
      $ !== N.current && ((N.current = $), y($));
    }, []),
    x = p.useCallback(($) => {
      $ !== b.current && ((b.current = $), v($));
    }, []),
    C = s || h,
    E = i || w,
    N = p.useRef(null),
    b = p.useRef(null),
    j = p.useRef(d),
    O = l != null,
    _ = sm(l),
    B = sm(o),
    M = p.useCallback(() => {
      if (!N.current || !b.current) return;
      const $ = { placement: t, strategy: n, middleware: m };
      B.current && ($.platform = B.current),
        Yj(N.current, b.current, $).then((k) => {
          const P = { ...k, isPositioned: !0 };
          G.current &&
            !Da(j.current, P) &&
            ((j.current = P),
            Jn.flushSync(() => {
              f(P);
            }));
        });
    }, [m, t, n, B]);
  Wi(() => {
    u === !1 &&
      j.current.isPositioned &&
      ((j.current.isPositioned = !1), f(($) => ({ ...$, isPositioned: !1 })));
  }, [u]);
  const G = p.useRef(!1);
  Wi(
    () => (
      (G.current = !0),
      () => {
        G.current = !1;
      }
    ),
    []
  ),
    Wi(() => {
      if ((C && (N.current = C), E && (b.current = E), C && E)) {
        if (_.current) return _.current(C, E, M);
        M();
      }
    }, [C, E, M, _, O]);
  const A = p.useMemo(
      () => ({ reference: N, floating: b, setReference: g, setFloating: x }),
      [g, x]
    ),
    U = p.useMemo(() => ({ reference: C, floating: E }), [C, E]),
    W = p.useMemo(() => {
      const $ = { position: n, left: 0, top: 0 };
      if (!U.floating) return $;
      const k = om(U.floating, d.x),
        P = om(U.floating, d.y);
      return a
        ? {
            ...$,
            transform: "translate(" + k + "px, " + P + "px)",
            ...(Dy(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: k, top: P };
    }, [n, a, U.floating, d.x, d.y]);
  return p.useMemo(
    () => ({ ...d, update: M, refs: A, elements: U, floatingStyles: W }),
    [d, M, A, U, W]
  );
}
const Zj = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? rm({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? rm({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  eR = (e, t) => ({ ...Hj(e), options: [e, t] }),
  tR = (e, t) => ({ ...Kj(e), options: [e, t] }),
  nR = (e, t) => ({ ...Xj(e), options: [e, t] }),
  rR = (e, t) => ({ ...Gj(e), options: [e, t] }),
  oR = (e, t) => ({ ...qj(e), options: [e, t] }),
  sR = (e, t) => ({ ...Qj(e), options: [e, t] }),
  iR = (e, t) => ({ ...Zj(e), options: [e, t] });
var aR = "Arrow",
  Iy = p.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return c.jsx(K.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Iy.displayName = aR;
var lR = Iy;
function $y(e) {
  const [t, n] = p.useState(void 0);
  return (
    _e(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, a;
          if ("borderBoxSize" in s) {
            const l = s.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (i = u.inlineSize), (a = u.blockSize);
          } else (i = e.offsetWidth), (a = e.offsetHeight);
          n({ width: i, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Af = "Popper",
  [zy, yl] = Ft(Af),
  [cR, Uy] = zy(Af),
  By = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = p.useState(null);
    return c.jsx(cR, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
By.displayName = Af;
var Vy = "PopperAnchor",
  Wy = p.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Uy(Vy, n),
      i = p.useRef(null),
      a = ee(t, i);
    return (
      p.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : c.jsx(K.div, { ...o, ref: a })
    );
  });
Wy.displayName = Vy;
var Mf = "PopperContent",
  [uR, dR] = zy(Mf),
  Hy = p.forwardRef((e, t) => {
    var z, se, ce, ne, ie, ae;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: S = "optimized",
        onPlaced: h,
        ...y
      } = e,
      w = Uy(Mf, n),
      [v, g] = p.useState(null),
      x = ee(t, (tt) => g(tt)),
      [C, E] = p.useState(null),
      N = $y(C),
      b = (N == null ? void 0 : N.width) ?? 0,
      j = (N == null ? void 0 : N.height) ?? 0,
      O = r + (s !== "center" ? "-" + s : ""),
      _ =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      B = Array.isArray(u) ? u : [u],
      M = B.length > 0,
      G = { padding: _, boundary: B.filter(pR), altBoundary: M },
      {
        refs: A,
        floatingStyles: U,
        placement: W,
        isPositioned: $,
        middlewareData: k,
      } = Jj({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...tt) =>
          Wj(...tt, { animationFrame: S === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          eR({ mainAxis: o + j, alignmentAxis: i }),
          l &&
            tR({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? nR() : void 0,
              ...G,
            }),
          l && rR({ ...G }),
          oR({
            ...G,
            apply: ({
              elements: tt,
              rects: zt,
              availableWidth: To,
              availableHeight: _o,
            }) => {
              const { width: Oo, height: ES } = zt.reference,
                ri = tt.floating.style;
              ri.setProperty("--radix-popper-available-width", `${To}px`),
                ri.setProperty("--radix-popper-available-height", `${_o}px`),
                ri.setProperty("--radix-popper-anchor-width", `${Oo}px`),
                ri.setProperty("--radix-popper-anchor-height", `${ES}px`);
            },
          }),
          C && iR({ element: C, padding: a }),
          hR({ arrowWidth: b, arrowHeight: j }),
          m && sR({ strategy: "referenceHidden", ...G }),
        ],
      }),
      [P, D] = qy(W),
      V = De(h);
    _e(() => {
      $ && (V == null || V());
    }, [$, V]);
    const X = (z = k.arrow) == null ? void 0 : z.x,
      je = (se = k.arrow) == null ? void 0 : se.y,
      ge = ((ce = k.arrow) == null ? void 0 : ce.centerOffset) !== 0,
      [et, Se] = p.useState();
    return (
      _e(() => {
        v && Se(window.getComputedStyle(v).zIndex);
      }, [v]),
      c.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: $ ? U.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: et,
          "--radix-popper-transform-origin": [
            (ne = k.transformOrigin) == null ? void 0 : ne.x,
            (ie = k.transformOrigin) == null ? void 0 : ie.y,
          ].join(" "),
          ...(((ae = k.hide) == null ? void 0 : ae.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(uR, {
          scope: n,
          placedSide: P,
          onArrowChange: E,
          arrowX: X,
          arrowY: je,
          shouldHideArrow: ge,
          children: c.jsx(K.div, {
            "data-side": P,
            "data-align": D,
            ...y,
            ref: x,
            style: { ...y.style, animation: $ ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Hy.displayName = Mf;
var Ky = "PopperArrow",
  fR = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Gy = p.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = dR(Ky, r),
      i = fR[s.placedSide];
    return c.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(lR, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Gy.displayName = Ky;
function pR(e) {
  return e !== null;
}
var hR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, v, g;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      a = i ? 0 : e.arrowWidth,
      l = i ? 0 : e.arrowHeight,
      [u, d] = qy(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      m = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2,
      S = (((g = o.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
    let h = "",
      y = "";
    return (
      u === "bottom"
        ? ((h = i ? f : `${m}px`), (y = `${-l}px`))
        : u === "top"
        ? ((h = i ? f : `${m}px`), (y = `${r.floating.height + l}px`))
        : u === "right"
        ? ((h = `${-l}px`), (y = i ? f : `${S}px`))
        : u === "left" &&
          ((h = `${r.floating.width + l}px`), (y = i ? f : `${S}px`)),
      { data: { x: h, y } }
    );
  },
});
function qy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Qy = By,
  Xy = Wy,
  Yy = Hy,
  Jy = Gy,
  mR = "Portal",
  Gs = p.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, s] = p.useState(!1);
    _e(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return i ? JE.createPortal(c.jsx(K.div, { ...r, ref: t }), i) : null;
  });
Gs.displayName = mR;
function Gn({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = gR({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    i = s ? e : r,
    a = De(n),
    l = p.useCallback(
      (u) => {
        if (s) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && a(f);
        } else o(u);
      },
      [s, e, o, a]
    );
  return [i, l];
}
function gR({ defaultProp: e, onChange: t }) {
  const n = p.useState(e),
    [r] = n,
    o = p.useRef(r),
    s = De(t);
  return (
    p.useEffect(() => {
      o.current !== r && (s(r), (o.current = r));
    }, [r, o, s]),
    n
  );
}
function Zy(e) {
  const t = p.useRef({ value: e, previous: e });
  return p.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var vR = "VisuallyHidden",
  xl = p.forwardRef((e, t) =>
    c.jsx(K.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
xl.displayName = vR;
var yR = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Mr = new WeakMap(),
  Ci = new WeakMap(),
  Ei = {},
  kc = 0,
  ex = function (e) {
    return e && (e.host || ex(e.parentNode));
  },
  xR = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = ex(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  wR = function (e, t, n, r) {
    var o = xR(t, Array.isArray(e) ? e : [e]);
    Ei[n] || (Ei[n] = new WeakMap());
    var s = Ei[n],
      i = [],
      a = new Set(),
      l = new Set(o),
      u = function (f) {
        !f || a.has(f) || (a.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var d = function (f) {
      !f ||
        l.has(f) ||
        Array.prototype.forEach.call(f.children, function (m) {
          if (a.has(m)) d(m);
          else
            try {
              var S = m.getAttribute(r),
                h = S !== null && S !== "false",
                y = (Mr.get(m) || 0) + 1,
                w = (s.get(m) || 0) + 1;
              Mr.set(m, y),
                s.set(m, w),
                i.push(m),
                y === 1 && h && Ci.set(m, !0),
                w === 1 && m.setAttribute(n, "true"),
                h || m.setAttribute(r, "true");
            } catch (v) {
              console.error("aria-hidden: cannot operate on ", m, v);
            }
        });
    };
    return (
      d(t),
      a.clear(),
      kc++,
      function () {
        i.forEach(function (f) {
          var m = Mr.get(f) - 1,
            S = s.get(f) - 1;
          Mr.set(f, m),
            s.set(f, S),
            m || (Ci.has(f) || f.removeAttribute(r), Ci.delete(f)),
            S || f.removeAttribute(n);
        }),
          kc--,
          kc ||
            ((Mr = new WeakMap()),
            (Mr = new WeakMap()),
            (Ci = new WeakMap()),
            (Ei = {}));
      }
    );
  },
  Lf = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = yR(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        wR(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Wt = function () {
    return (
      (Wt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      Wt.apply(this, arguments)
    );
  };
function tx(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function SR(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var Hi = "right-scroll-bar-position",
  Ki = "width-before-scroll-bar",
  CR = "with-scroll-bars-hidden",
  ER = "--removed-body-scroll-bar-size";
function Tc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function bR(e, t) {
  var n = p.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var NR = typeof window < "u" ? p.useLayoutEffect : p.useEffect,
  im = new WeakMap();
function jR(e, t) {
  var n = bR(null, function (r) {
    return e.forEach(function (o) {
      return Tc(o, r);
    });
  });
  return (
    NR(
      function () {
        var r = im.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (a) {
            s.has(a) || Tc(a, null);
          }),
            s.forEach(function (a) {
              o.has(a) || Tc(a, i);
            });
        }
        im.set(n, e);
      },
      [e]
    ),
    n
  );
}
function RR(e) {
  return e;
}
function PR(e, t) {
  t === void 0 && (t = RR);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (a) {
              return a !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (a) {
            return s(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(s), (i = n);
        }
        var l = function () {
            var d = i;
            (i = []), d.forEach(s);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (d) {
              i.push(d), u();
            },
            filter: function (d) {
              return (i = i.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function kR(e) {
  e === void 0 && (e = {});
  var t = PR(null);
  return (t.options = Wt({ async: !0, ssr: !1 }, e)), t;
}
var nx = function (e) {
  var t = e.sideCar,
    n = tx(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return p.createElement(r, Wt({}, n));
};
nx.isSideCarExport = !0;
function TR(e, t) {
  return e.useMedium(t), nx;
}
var rx = kR(),
  _c = function () {},
  wl = p.forwardRef(function (e, t) {
    var n = p.useRef(null),
      r = p.useState({
        onScrollCapture: _c,
        onWheelCapture: _c,
        onTouchMoveCapture: _c,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      m = e.sideCar,
      S = e.noIsolation,
      h = e.inert,
      y = e.allowPinchZoom,
      w = e.as,
      v = w === void 0 ? "div" : w,
      g = e.gapMode,
      x = tx(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = m,
      E = jR([n, t]),
      N = Wt(Wt({}, x), o);
    return p.createElement(
      p.Fragment,
      null,
      d &&
        p.createElement(C, {
          sideCar: rx,
          removeScrollBar: u,
          shards: f,
          noIsolation: S,
          inert: h,
          setCallbacks: s,
          allowPinchZoom: !!y,
          lockRef: n,
          gapMode: g,
        }),
      i
        ? p.cloneElement(p.Children.only(a), Wt(Wt({}, N), { ref: E }))
        : p.createElement(v, Wt({}, N, { className: l, ref: E }), a)
    );
  });
wl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
wl.classNames = { fullWidth: Ki, zeroRight: Hi };
var _R = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function OR() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _R();
  return t && e.setAttribute("nonce", t), e;
}
function AR(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function MR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var LR = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = OR()) && (AR(t, n), MR(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  FR = function () {
    var e = LR();
    return function (t, n) {
      p.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  ox = function () {
    var e = FR(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  DR = { left: 0, top: 0, right: 0, gap: 0 },
  Oc = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  IR = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Oc(n), Oc(r), Oc(o)];
  },
  $R = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return DR;
    var t = IR(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  zR = ox(),
  ro = "data-scroll-locked",
  UR = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          CR,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          ro,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Hi,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Ki,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Hi, " .")
        .concat(
          Hi,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ki, " .")
        .concat(
          Ki,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          ro,
          `] {
    `
        )
        .concat(ER, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  am = function () {
    var e = parseInt(document.body.getAttribute(ro) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  BR = function () {
    p.useEffect(function () {
      return (
        document.body.setAttribute(ro, (am() + 1).toString()),
        function () {
          var e = am() - 1;
          e <= 0
            ? document.body.removeAttribute(ro)
            : document.body.setAttribute(ro, e.toString());
        }
      );
    }, []);
  },
  VR = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    BR();
    var s = p.useMemo(
      function () {
        return $R(o);
      },
      [o]
    );
    return p.createElement(zR, { styles: UR(s, !t, o, n ? "" : "!important") });
  },
  qu = !1;
if (typeof window < "u")
  try {
    var bi = Object.defineProperty({}, "passive", {
      get: function () {
        return (qu = !0), !0;
      },
    });
    window.addEventListener("test", bi, bi),
      window.removeEventListener("test", bi, bi);
  } catch {
    qu = !1;
  }
var Lr = qu ? { passive: !1 } : !1,
  WR = function (e) {
    return e.tagName === "TEXTAREA";
  },
  sx = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !WR(e) && n[t] === "visible")
    );
  },
  HR = function (e) {
    return sx(e, "overflowY");
  },
  KR = function (e) {
    return sx(e, "overflowX");
  },
  lm = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = ix(e, r);
      if (o) {
        var s = ax(e, r),
          i = s[1],
          a = s[2];
        if (i > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  GR = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  qR = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  ix = function (e, t) {
    return e === "v" ? HR(t) : KR(t);
  },
  ax = function (e, t) {
    return e === "v" ? GR(t) : qR(t);
  },
  QR = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  XR = function (e, t, n, r, o) {
    var s = QR(e, window.getComputedStyle(t).direction),
      i = s * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      d = i > 0,
      f = 0,
      m = 0;
    do {
      var S = ax(e, a),
        h = S[0],
        y = S[1],
        w = S[2],
        v = y - w - s * h;
      (h || v) && ix(e, a) && ((f += v), (m += h)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((d && (Math.abs(f) < 1 || !o)) || (!d && (Math.abs(m) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  Ni = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  cm = function (e) {
    return [e.deltaX, e.deltaY];
  },
  um = function (e) {
    return e && "current" in e ? e.current : e;
  },
  YR = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  JR = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  ZR = 0,
  Fr = [];
function eP(e) {
  var t = p.useRef([]),
    n = p.useRef([0, 0]),
    r = p.useRef(),
    o = p.useState(ZR++)[0],
    s = p.useState(ox)[0],
    i = p.useRef(e);
  p.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    p.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var y = SR([e.lockRef.current], (e.shards || []).map(um), !0).filter(
            Boolean
          );
          return (
            y.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                y.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = p.useCallback(function (y, w) {
      if ("touches" in y && y.touches.length === 2)
        return !i.current.allowPinchZoom;
      var v = Ni(y),
        g = n.current,
        x = "deltaX" in y ? y.deltaX : g[0] - v[0],
        C = "deltaY" in y ? y.deltaY : g[1] - v[1],
        E,
        N = y.target,
        b = Math.abs(x) > Math.abs(C) ? "h" : "v";
      if ("touches" in y && b === "h" && N.type === "range") return !1;
      var j = lm(b, N);
      if (!j) return !0;
      if ((j ? (E = b) : ((E = b === "v" ? "h" : "v"), (j = lm(b, N))), !j))
        return !1;
      if (
        (!r.current && "changedTouches" in y && (x || C) && (r.current = E), !E)
      )
        return !0;
      var O = r.current || E;
      return XR(O, w, y, O === "h" ? x : C, !0);
    }, []),
    l = p.useCallback(function (y) {
      var w = y;
      if (!(!Fr.length || Fr[Fr.length - 1] !== s)) {
        var v = "deltaY" in w ? cm(w) : Ni(w),
          g = t.current.filter(function (E) {
            return (
              E.name === w.type &&
              (E.target === w.target || w.target === E.shadowParent) &&
              YR(E.delta, v)
            );
          })[0];
        if (g && g.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!g) {
          var x = (i.current.shards || [])
              .map(um)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(w.target);
              }),
            C = x.length > 0 ? a(w, x[0]) : !i.current.noIsolation;
          C && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = p.useCallback(function (y, w, v, g) {
      var x = { name: y, delta: w, target: v, should: g, shadowParent: tP(v) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== x;
          });
        }, 1);
    }, []),
    d = p.useCallback(function (y) {
      (n.current = Ni(y)), (r.current = void 0);
    }, []),
    f = p.useCallback(function (y) {
      u(y.type, cm(y), y.target, a(y, e.lockRef.current));
    }, []),
    m = p.useCallback(function (y) {
      u(y.type, Ni(y), y.target, a(y, e.lockRef.current));
    }, []);
  p.useEffect(function () {
    return (
      Fr.push(s),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", l, Lr),
      document.addEventListener("touchmove", l, Lr),
      document.addEventListener("touchstart", d, Lr),
      function () {
        (Fr = Fr.filter(function (y) {
          return y !== s;
        })),
          document.removeEventListener("wheel", l, Lr),
          document.removeEventListener("touchmove", l, Lr),
          document.removeEventListener("touchstart", d, Lr);
      }
    );
  }, []);
  var S = e.removeScrollBar,
    h = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    h ? p.createElement(s, { styles: JR(o) }) : null,
    S ? p.createElement(VR, { gapMode: e.gapMode }) : null
  );
}
function tP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const nP = TR(rx, eP);
var Sl = p.forwardRef(function (e, t) {
  return p.createElement(wl, Wt({}, e, { ref: t, sideCar: nP }));
});
Sl.classNames = wl.classNames;
var rP = [" ", "Enter", "ArrowUp", "ArrowDown"],
  oP = [" ", "Enter"],
  qs = "Select",
  [Cl, El, sP] = pl(qs),
  [No, rL] = Ft(qs, [sP, yl]),
  bl = yl(),
  [iP, er] = No(qs),
  [aP, lP] = No(qs),
  lx = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        value: i,
        defaultValue: a,
        onValueChange: l,
        dir: u,
        name: d,
        autoComplete: f,
        disabled: m,
        required: S,
      } = e,
      h = bl(t),
      [y, w] = p.useState(null),
      [v, g] = p.useState(null),
      [x, C] = p.useState(!1),
      E = hl(u),
      [N = !1, b] = Gn({ prop: r, defaultProp: o, onChange: s }),
      [j, O] = Gn({ prop: i, defaultProp: a, onChange: l }),
      _ = p.useRef(null),
      B = y ? !!y.closest("form") : !0,
      [M, G] = p.useState(new Set()),
      A = Array.from(M)
        .map((U) => U.props.value)
        .join(";");
    return c.jsx(Qy, {
      ...h,
      children: c.jsxs(iP, {
        required: S,
        scope: t,
        trigger: y,
        onTriggerChange: w,
        valueNode: v,
        onValueNodeChange: g,
        valueNodeHasChildren: x,
        onValueNodeHasChildrenChange: C,
        contentId: qt(),
        value: j,
        onValueChange: O,
        open: N,
        onOpenChange: b,
        dir: E,
        triggerPointerDownPosRef: _,
        disabled: m,
        children: [
          c.jsx(Cl.Provider, {
            scope: t,
            children: c.jsx(aP, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: p.useCallback((U) => {
                G((W) => new Set(W).add(U));
              }, []),
              onNativeOptionRemove: p.useCallback((U) => {
                G((W) => {
                  const $ = new Set(W);
                  return $.delete(U), $;
                });
              }, []),
              children: n,
            }),
          }),
          B
            ? c.jsxs(
                Ax,
                {
                  "aria-hidden": !0,
                  required: S,
                  tabIndex: -1,
                  name: d,
                  autoComplete: f,
                  value: j,
                  onChange: (U) => O(U.target.value),
                  disabled: m,
                  children: [
                    j === void 0 ? c.jsx("option", { value: "" }) : null,
                    Array.from(M),
                  ],
                },
                A
              )
            : null,
        ],
      }),
    });
  };
lx.displayName = qs;
var cx = "SelectTrigger",
  ux = p.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      s = bl(n),
      i = er(cx, n),
      a = i.disabled || r,
      l = ee(t, i.onTriggerChange),
      u = El(n),
      [d, f, m] = Mx((h) => {
        const y = u().filter((g) => !g.disabled),
          w = y.find((g) => g.value === i.value),
          v = Lx(y, h, w);
        v !== void 0 && i.onValueChange(v.value);
      }),
      S = () => {
        a || (i.onOpenChange(!0), m());
      };
    return c.jsx(Xy, {
      asChild: !0,
      ...s,
      children: c.jsx(K.button, {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": Ox(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: L(o.onClick, (h) => {
          h.currentTarget.focus();
        }),
        onPointerDown: L(o.onPointerDown, (h) => {
          const y = h.target;
          y.hasPointerCapture(h.pointerId) &&
            y.releasePointerCapture(h.pointerId),
            h.button === 0 &&
              h.ctrlKey === !1 &&
              (S(),
              (i.triggerPointerDownPosRef.current = {
                x: Math.round(h.pageX),
                y: Math.round(h.pageY),
              }),
              h.preventDefault());
        }),
        onKeyDown: L(o.onKeyDown, (h) => {
          const y = d.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) &&
            h.key.length === 1 &&
            f(h.key),
            !(y && h.key === " ") &&
              rP.includes(h.key) &&
              (S(), h.preventDefault());
        }),
      }),
    });
  });
ux.displayName = cx;
var dx = "SelectValue",
  fx = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: s,
        placeholder: i = "",
        ...a
      } = e,
      l = er(dx, n),
      { onValueNodeHasChildrenChange: u } = l,
      d = s !== void 0,
      f = ee(t, l.onValueNodeChange);
    return (
      _e(() => {
        u(d);
      }, [u, d]),
      c.jsx(K.span, {
        ...a,
        ref: f,
        style: { pointerEvents: "none" },
        children: Ox(l.value) ? c.jsx(c.Fragment, { children: i }) : s,
      })
    );
  });
fx.displayName = dx;
var cP = "SelectIcon",
  px = p.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return c.jsx(K.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
px.displayName = cP;
var uP = "SelectPortal",
  hx = (e) => c.jsx(Gs, { asChild: !0, ...e });
hx.displayName = uP;
var br = "SelectContent",
  mx = p.forwardRef((e, t) => {
    const n = er(br, e.__scopeSelect),
      [r, o] = p.useState();
    if (
      (_e(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const s = r;
      return s
        ? Jn.createPortal(
            c.jsx(gx, {
              scope: e.__scopeSelect,
              children: c.jsx(Cl.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", { children: e.children }),
              }),
            }),
            s
          )
        : null;
    }
    return c.jsx(vx, { ...e, ref: t });
  });
mx.displayName = br;
var tn = 10,
  [gx, tr] = No(br),
  dP = "SelectContentImpl",
  vx = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        side: a,
        sideOffset: l,
        align: u,
        alignOffset: d,
        arrowPadding: f,
        collisionBoundary: m,
        collisionPadding: S,
        sticky: h,
        hideWhenDetached: y,
        avoidCollisions: w,
        ...v
      } = e,
      g = er(br, n),
      [x, C] = p.useState(null),
      [E, N] = p.useState(null),
      b = ee(t, (z) => C(z)),
      [j, O] = p.useState(null),
      [_, B] = p.useState(null),
      M = El(n),
      [G, A] = p.useState(!1),
      U = p.useRef(!1);
    p.useEffect(() => {
      if (x) return Lf(x);
    }, [x]),
      jf();
    const W = p.useCallback(
        (z) => {
          const [se, ...ce] = M().map((ae) => ae.ref.current),
            [ne] = ce.slice(-1),
            ie = document.activeElement;
          for (const ae of z)
            if (
              ae === ie ||
              (ae == null || ae.scrollIntoView({ block: "nearest" }),
              ae === se && E && (E.scrollTop = 0),
              ae === ne && E && (E.scrollTop = E.scrollHeight),
              ae == null || ae.focus(),
              document.activeElement !== ie)
            )
              return;
        },
        [M, E]
      ),
      $ = p.useCallback(() => W([j, x]), [W, j, x]);
    p.useEffect(() => {
      G && $();
    }, [G, $]);
    const { onOpenChange: k, triggerPointerDownPosRef: P } = g;
    p.useEffect(() => {
      if (x) {
        let z = { x: 0, y: 0 };
        const se = (ne) => {
            var ie, ae;
            z = {
              x: Math.abs(
                Math.round(ne.pageX) -
                  (((ie = P.current) == null ? void 0 : ie.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(ne.pageY) -
                  (((ae = P.current) == null ? void 0 : ae.y) ?? 0)
              ),
            };
          },
          ce = (ne) => {
            z.x <= 10 && z.y <= 10
              ? ne.preventDefault()
              : x.contains(ne.target) || k(!1),
              document.removeEventListener("pointermove", se),
              (P.current = null);
          };
        return (
          P.current !== null &&
            (document.addEventListener("pointermove", se),
            document.addEventListener("pointerup", ce, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", se),
              document.removeEventListener("pointerup", ce, { capture: !0 });
          }
        );
      }
    }, [x, k, P]),
      p.useEffect(() => {
        const z = () => k(!1);
        return (
          window.addEventListener("blur", z),
          window.addEventListener("resize", z),
          () => {
            window.removeEventListener("blur", z),
              window.removeEventListener("resize", z);
          }
        );
      }, [k]);
    const [D, V] = Mx((z) => {
        const se = M().filter((ie) => !ie.disabled),
          ce = se.find((ie) => ie.ref.current === document.activeElement),
          ne = Lx(se, z, ce);
        ne && setTimeout(() => ne.ref.current.focus());
      }),
      X = p.useCallback(
        (z, se, ce) => {
          const ne = !U.current && !ce;
          ((g.value !== void 0 && g.value === se) || ne) &&
            (O(z), ne && (U.current = !0));
        },
        [g.value]
      ),
      je = p.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      ge = p.useCallback(
        (z, se, ce) => {
          const ne = !U.current && !ce;
          ((g.value !== void 0 && g.value === se) || ne) && B(z);
        },
        [g.value]
      ),
      et = r === "popper" ? Qu : yx,
      Se =
        et === Qu
          ? {
              side: a,
              sideOffset: l,
              align: u,
              alignOffset: d,
              arrowPadding: f,
              collisionBoundary: m,
              collisionPadding: S,
              sticky: h,
              hideWhenDetached: y,
              avoidCollisions: w,
            }
          : {};
    return c.jsx(gx, {
      scope: n,
      content: x,
      viewport: E,
      onViewportChange: N,
      itemRefCallback: X,
      selectedItem: j,
      onItemLeave: je,
      itemTextRefCallback: ge,
      focusSelectedItem: $,
      selectedItemText: _,
      position: r,
      isPositioned: G,
      searchRef: D,
      children: c.jsx(Sl, {
        as: Vn,
        allowPinchZoom: !0,
        children: c.jsx(ml, {
          asChild: !0,
          trapped: g.open,
          onMountAutoFocus: (z) => {
            z.preventDefault();
          },
          onUnmountAutoFocus: L(o, (z) => {
            var se;
            (se = g.trigger) == null || se.focus({ preventScroll: !0 }),
              z.preventDefault();
          }),
          children: c.jsx(Hs, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: (z) => z.preventDefault(),
            onDismiss: () => g.onOpenChange(!1),
            children: c.jsx(et, {
              role: "listbox",
              id: g.contentId,
              "data-state": g.open ? "open" : "closed",
              dir: g.dir,
              onContextMenu: (z) => z.preventDefault(),
              ...v,
              ...Se,
              onPlaced: () => A(!0),
              ref: b,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...v.style,
              },
              onKeyDown: L(v.onKeyDown, (z) => {
                const se = z.ctrlKey || z.altKey || z.metaKey;
                if (
                  (z.key === "Tab" && z.preventDefault(),
                  !se && z.key.length === 1 && V(z.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key))
                ) {
                  let ne = M()
                    .filter((ie) => !ie.disabled)
                    .map((ie) => ie.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(z.key) &&
                      (ne = ne.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(z.key))
                  ) {
                    const ie = z.target,
                      ae = ne.indexOf(ie);
                    ne = ne.slice(ae + 1);
                  }
                  setTimeout(() => W(ne)), z.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
vx.displayName = dP;
var fP = "SelectItemAlignedPosition",
  yx = p.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      s = er(br, n),
      i = tr(br, n),
      [a, l] = p.useState(null),
      [u, d] = p.useState(null),
      f = ee(t, (b) => d(b)),
      m = El(n),
      S = p.useRef(!1),
      h = p.useRef(!0),
      {
        viewport: y,
        selectedItem: w,
        selectedItemText: v,
        focusSelectedItem: g,
      } = i,
      x = p.useCallback(() => {
        if (s.trigger && s.valueNode && a && u && y && w && v) {
          const b = s.trigger.getBoundingClientRect(),
            j = u.getBoundingClientRect(),
            O = s.valueNode.getBoundingClientRect(),
            _ = v.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const ie = _.left - j.left,
              ae = O.left - ie,
              tt = b.left - ae,
              zt = b.width + tt,
              To = Math.max(zt, j.width),
              _o = window.innerWidth - tn,
              Oo = Vh(ae, [tn, _o - To]);
            (a.style.minWidth = zt + "px"), (a.style.left = Oo + "px");
          } else {
            const ie = j.right - _.right,
              ae = window.innerWidth - O.right - ie,
              tt = window.innerWidth - b.right - ae,
              zt = b.width + tt,
              To = Math.max(zt, j.width),
              _o = window.innerWidth - tn,
              Oo = Vh(ae, [tn, _o - To]);
            (a.style.minWidth = zt + "px"), (a.style.right = Oo + "px");
          }
          const B = m(),
            M = window.innerHeight - tn * 2,
            G = y.scrollHeight,
            A = window.getComputedStyle(u),
            U = parseInt(A.borderTopWidth, 10),
            W = parseInt(A.paddingTop, 10),
            $ = parseInt(A.borderBottomWidth, 10),
            k = parseInt(A.paddingBottom, 10),
            P = U + W + G + k + $,
            D = Math.min(w.offsetHeight * 5, P),
            V = window.getComputedStyle(y),
            X = parseInt(V.paddingTop, 10),
            je = parseInt(V.paddingBottom, 10),
            ge = b.top + b.height / 2 - tn,
            et = M - ge,
            Se = w.offsetHeight / 2,
            z = w.offsetTop + Se,
            se = U + W + z,
            ce = P - se;
          if (se <= ge) {
            const ie = w === B[B.length - 1].ref.current;
            a.style.bottom = "0px";
            const ae = u.clientHeight - y.offsetTop - y.offsetHeight,
              tt = Math.max(et, Se + (ie ? je : 0) + ae + $),
              zt = se + tt;
            a.style.height = zt + "px";
          } else {
            const ie = w === B[0].ref.current;
            a.style.top = "0px";
            const tt = Math.max(ge, U + y.offsetTop + (ie ? X : 0) + Se) + ce;
            (a.style.height = tt + "px"), (y.scrollTop = se - ge + y.offsetTop);
          }
          (a.style.margin = `${tn}px 0`),
            (a.style.minHeight = D + "px"),
            (a.style.maxHeight = M + "px"),
            r == null || r(),
            requestAnimationFrame(() => (S.current = !0));
        }
      }, [m, s.trigger, s.valueNode, a, u, y, w, v, s.dir, r]);
    _e(() => x(), [x]);
    const [C, E] = p.useState();
    _e(() => {
      u && E(window.getComputedStyle(u).zIndex);
    }, [u]);
    const N = p.useCallback(
      (b) => {
        b && h.current === !0 && (x(), g == null || g(), (h.current = !1));
      },
      [x, g]
    );
    return c.jsx(hP, {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: S,
      onScrollButtonChange: N,
      children: c.jsx("div", {
        ref: l,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: C,
        },
        children: c.jsx(K.div, {
          ...o,
          ref: f,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
yx.displayName = fP;
var pP = "SelectPopperPosition",
  Qu = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = tn,
        ...s
      } = e,
      i = bl(n);
    return c.jsx(Yy, {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Qu.displayName = pP;
var [hP, Ff] = No(br, {}),
  Xu = "SelectViewport",
  xx = p.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      s = tr(Xu, n),
      i = Ff(Xu, n),
      a = ee(t, s.onViewportChange),
      l = p.useRef(0);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        c.jsx(Cl.Slot, {
          scope: n,
          children: c.jsx(K.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: a,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...o.style,
            },
            onScroll: L(o.onScroll, (u) => {
              const d = u.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: m } = i;
              if (m != null && m.current && f) {
                const S = Math.abs(l.current - d.scrollTop);
                if (S > 0) {
                  const h = window.innerHeight - tn * 2,
                    y = parseFloat(f.style.minHeight),
                    w = parseFloat(f.style.height),
                    v = Math.max(y, w);
                  if (v < h) {
                    const g = v + S,
                      x = Math.min(h, g),
                      C = g - x;
                    (f.style.height = x + "px"),
                      f.style.bottom === "0px" &&
                        ((d.scrollTop = C > 0 ? C : 0),
                        (f.style.justifyContent = "flex-end"));
                  }
                }
              }
              l.current = d.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
xx.displayName = Xu;
var wx = "SelectGroup",
  [mP, gP] = No(wx),
  vP = p.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = qt();
    return c.jsx(mP, {
      scope: n,
      id: o,
      children: c.jsx(K.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
vP.displayName = wx;
var Sx = "SelectLabel",
  Cx = p.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = gP(Sx, n);
    return c.jsx(K.div, { id: o.id, ...r, ref: t });
  });
Cx.displayName = Sx;
var Ia = "SelectItem",
  [yP, Ex] = No(Ia),
  bx = p.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: s,
        ...i
      } = e,
      a = er(Ia, n),
      l = tr(Ia, n),
      u = a.value === r,
      [d, f] = p.useState(s ?? ""),
      [m, S] = p.useState(!1),
      h = ee(t, (v) => {
        var g;
        return (g = l.itemRefCallback) == null ? void 0 : g.call(l, v, r, o);
      }),
      y = qt(),
      w = () => {
        o || (a.onValueChange(r), a.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return c.jsx(yP, {
      scope: n,
      value: r,
      disabled: o,
      textId: y,
      isSelected: u,
      onItemTextChange: p.useCallback((v) => {
        f((g) => g || ((v == null ? void 0 : v.textContent) ?? "").trim());
      }, []),
      children: c.jsx(Cl.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: d,
        children: c.jsx(K.div, {
          role: "option",
          "aria-labelledby": y,
          "data-highlighted": m ? "" : void 0,
          "aria-selected": u && m,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...i,
          ref: h,
          onFocus: L(i.onFocus, () => S(!0)),
          onBlur: L(i.onBlur, () => S(!1)),
          onPointerUp: L(i.onPointerUp, w),
          onPointerMove: L(i.onPointerMove, (v) => {
            var g;
            o
              ? (g = l.onItemLeave) == null || g.call(l)
              : v.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: L(i.onPointerLeave, (v) => {
            var g;
            v.currentTarget === document.activeElement &&
              ((g = l.onItemLeave) == null || g.call(l));
          }),
          onKeyDown: L(i.onKeyDown, (v) => {
            var x;
            (((x = l.searchRef) == null ? void 0 : x.current) !== "" &&
              v.key === " ") ||
              (oP.includes(v.key) && w(), v.key === " " && v.preventDefault());
          }),
        }),
      }),
    });
  });
bx.displayName = Ia;
var qo = "SelectItemText",
  Nx = p.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e,
      i = er(qo, n),
      a = tr(qo, n),
      l = Ex(qo, n),
      u = lP(qo, n),
      [d, f] = p.useState(null),
      m = ee(
        t,
        (v) => f(v),
        l.onItemTextChange,
        (v) => {
          var g;
          return (g = a.itemTextRefCallback) == null
            ? void 0
            : g.call(a, v, l.value, l.disabled);
        }
      ),
      S = d == null ? void 0 : d.textContent,
      h = p.useMemo(
        () =>
          c.jsx(
            "option",
            { value: l.value, disabled: l.disabled, children: S },
            l.value
          ),
        [l.disabled, l.value, S]
      ),
      { onNativeOptionAdd: y, onNativeOptionRemove: w } = u;
    return (
      _e(() => (y(h), () => w(h)), [y, w, h]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(K.span, { id: l.textId, ...s, ref: m }),
          l.isSelected && i.valueNode && !i.valueNodeHasChildren
            ? Jn.createPortal(s.children, i.valueNode)
            : null,
        ],
      })
    );
  });
Nx.displayName = qo;
var jx = "SelectItemIndicator",
  Rx = p.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Ex(jx, n).isSelected
      ? c.jsx(K.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
Rx.displayName = jx;
var Yu = "SelectScrollUpButton",
  Px = p.forwardRef((e, t) => {
    const n = tr(Yu, e.__scopeSelect),
      r = Ff(Yu, e.__scopeSelect),
      [o, s] = p.useState(!1),
      i = ee(t, r.onScrollButtonChange);
    return (
      _e(() => {
        if (n.viewport && n.isPositioned) {
          let a = function () {
            const u = l.scrollTop > 0;
            s(u);
          };
          const l = n.viewport;
          return (
            a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(Tx, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: a, selectedItem: l } = n;
              a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
            },
          })
        : null
    );
  });
Px.displayName = Yu;
var Ju = "SelectScrollDownButton",
  kx = p.forwardRef((e, t) => {
    const n = tr(Ju, e.__scopeSelect),
      r = Ff(Ju, e.__scopeSelect),
      [o, s] = p.useState(!1),
      i = ee(t, r.onScrollButtonChange);
    return (
      _e(() => {
        if (n.viewport && n.isPositioned) {
          let a = function () {
            const u = l.scrollHeight - l.clientHeight,
              d = Math.ceil(l.scrollTop) < u;
            s(d);
          };
          const l = n.viewport;
          return (
            a(),
            l.addEventListener("scroll", a),
            () => l.removeEventListener("scroll", a)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(Tx, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: a, selectedItem: l } = n;
              a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
            },
          })
        : null
    );
  });
kx.displayName = Ju;
var Tx = p.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      s = tr("SelectScrollButton", n),
      i = p.useRef(null),
      a = El(n),
      l = p.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      p.useEffect(() => () => l(), [l]),
      _e(() => {
        var d;
        const u = a().find((f) => f.ref.current === document.activeElement);
        (d = u == null ? void 0 : u.ref.current) == null ||
          d.scrollIntoView({ block: "nearest" });
      }, [a]),
      c.jsx(K.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: L(o.onPointerDown, () => {
          i.current === null && (i.current = window.setInterval(r, 50));
        }),
        onPointerMove: L(o.onPointerMove, () => {
          var u;
          (u = s.onItemLeave) == null || u.call(s),
            i.current === null && (i.current = window.setInterval(r, 50));
        }),
        onPointerLeave: L(o.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  xP = "SelectSeparator",
  _x = p.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return c.jsx(K.div, { "aria-hidden": !0, ...r, ref: t });
  });
_x.displayName = xP;
var Zu = "SelectArrow",
  wP = p.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = bl(n),
      s = er(Zu, n),
      i = tr(Zu, n);
    return s.open && i.position === "popper"
      ? c.jsx(Jy, { ...o, ...r, ref: t })
      : null;
  });
wP.displayName = Zu;
function Ox(e) {
  return e === "" || e === void 0;
}
var Ax = p.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = p.useRef(null),
    s = ee(t, o),
    i = Zy(n);
  return (
    p.useEffect(() => {
      const a = o.current,
        l = window.HTMLSelectElement.prototype,
        d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (i !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(a, n), a.dispatchEvent(f);
      }
    }, [i, n]),
    c.jsx(xl, {
      asChild: !0,
      children: c.jsx("select", { ...r, ref: s, defaultValue: n }),
    })
  );
});
Ax.displayName = "BubbleSelect";
function Mx(e) {
  const t = De(e),
    n = p.useRef(""),
    r = p.useRef(0),
    o = p.useCallback(
      (i) => {
        const a = n.current + i;
        t(a),
          (function l(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
          })(a);
      },
      [t]
    ),
    s = p.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return p.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Lx(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = SP(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function SP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var CP = lx,
  Fx = ux,
  EP = fx,
  bP = px,
  NP = hx,
  Dx = mx,
  jP = xx,
  Ix = Cx,
  $x = bx,
  RP = Nx,
  PP = Rx,
  zx = Px,
  Ux = kx,
  Bx = _x;
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Vx = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var TP = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _P = p.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...a
    },
    l
  ) =>
    p.createElement(
      "svg",
      {
        ref: l,
        ...TP,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Vx("lucide", o),
        ...a,
      },
      [
        ...i.map(([u, d]) => p.createElement(u, d)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const le = (e, t) => {
  const n = p.forwardRef(({ className: r, ...o }, s) =>
    p.createElement(_P, {
      ref: s,
      iconNode: t,
      className: Vx(`lucide-${kP(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OP = le("AlignJustify", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AP = le("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MP = le("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LP = le("Carrot", [
  [
    "path",
    {
      d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
      key: "rfqxbe",
    },
  ],
  [
    "path",
    {
      d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",
      key: "6b25w4",
    },
  ],
  [
    "path",
    {
      d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",
      key: "fn65lo",
    },
  ],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = le("ChartNoAxesCombined", [
  ["path", { d: "M12 16v5", key: "zza2cw" }],
  ["path", { d: "M16 14v7", key: "1g90b9" }],
  ["path", { d: "M20 10v11", key: "1iqoj0" }],
  [
    "path",
    {
      d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",
      key: "1fw8x9",
    },
  ],
  ["path", { d: "M4 18v3", key: "1yp0dc" }],
  ["path", { d: "M8 14v7", key: "n3cwzv" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Df = le("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wx = le("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FP = le("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hx = le("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DP = le("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IP = le("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $P = le("Citrus", [
  [
    "path",
    {
      d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
      key: "4ite01",
    },
  ],
  ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34", key: "1gxipu" }],
  ["path", { d: "m14 10-5.5 5.5", key: "92pfem" }],
  ["path", { d: "M14 17.85V10H6.15", key: "xqmtsk" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zP = le("CloudUpload", [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  [
    "path",
    {
      d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
      key: "1pljnt",
    },
  ],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UP = le("Disc2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BP = le("File", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VP = le("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  [
    "rect",
    { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
  ],
  [
    "rect",
    { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
  ],
  [
    "rect",
    { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
  ],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kx = le("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WP = le("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HP = le("Milk", [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
      key: "qtp12x",
    },
  ],
  [
    "path",
    { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "ygeh44" },
  ],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KP = le("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GP = le("Nut", [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
      key: "1tgyif",
    },
  ],
  [
    "path",
    {
      d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
      key: "tnsqj",
    },
  ],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qP = le("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QP = le("ShoppingBasket", [
  ["path", { d: "m15 11-1 9", key: "5wnq3a" }],
  ["path", { d: "m19 11-4-7", key: "cnml18" }],
  ["path", { d: "M2 11h20", key: "3eubbj" }],
  [
    "path",
    {
      d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
      key: "yiazzp",
    },
  ],
  ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
  ["path", { d: "m5 11 4-7", key: "116ra9" }],
  ["path", { d: "m9 11 1 9", key: "1ojof7" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XP = le("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506",
    },
  ],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YP = le("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JP = le("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZP = le("UserCog", [
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
  ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
  ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
  ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
  ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
  ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
  ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
  ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }],
]);
/**
 * @license lucide-react v0.438.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nl = le("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ek = CP,
  tk = EP,
  Gx = p.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(Fx, {
      ref: r,
      className: I(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        c.jsx(bP, {
          asChild: !0,
          children: c.jsx(Wx, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
Gx.displayName = Fx.displayName;
const qx = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(zx, {
    ref: n,
    className: I("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(DP, { className: "h-4 w-4" }),
  })
);
qx.displayName = zx.displayName;
const Qx = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Ux, {
    ref: n,
    className: I("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Wx, { className: "h-4 w-4" }),
  })
);
Qx.displayName = Ux.displayName;
const Xx = p.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    c.jsx(NP, {
      children: c.jsxs(Dx, {
        ref: o,
        className: I(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          c.jsx(qx, {}),
          c.jsx(jP, {
            className: I(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          c.jsx(Qx, {}),
        ],
      }),
    })
);
Xx.displayName = Dx.displayName;
const nk = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Ix, {
    ref: n,
    className: I("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  })
);
nk.displayName = Ix.displayName;
const Yx = p.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs($x, {
    ref: r,
    className: I(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      c.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(PP, { children: c.jsx(Df, { className: "h-4 w-4" }) }),
      }),
      c.jsx(RP, { children: t }),
    ],
  })
);
Yx.displayName = $x.displayName;
const rk = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Bx, { ref: n, className: I("-mx-1 my-1 h-px bg-muted", e), ...t })
);
rk.displayName = Bx.displayName;
const Jx = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("textarea", {
    className: I(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
Jx.displayName = "Textarea";
const ok = Ws(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  oe = p.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? Vn : "button";
      return c.jsx(i, {
        className: I(ok({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    }
  );
oe.displayName = "Button";
function Qs({
  formControls: e,
  formData: t,
  setFormData: n,
  onSubmit: r,
  buttonText: o,
  isBtnDisabled: s,
}) {
  function i(a) {
    let l = null;
    const u = t[a.name] || "";
    switch (a.componentType) {
      case "input":
        l = c.jsx(ho, {
          name: a.name,
          placeholder: a.placeholder,
          id: a.name,
          type: a.type,
          value: u,
          onChange: (d) => n({ ...t, [a.name]: d.target.value }),
        });
        break;
      case "select":
        l = c.jsxs(ek, {
          onValueChange: (d) => n({ ...t, [a.name]: d }),
          value: u,
          children: [
            c.jsx(Gx, {
              className: "w-full",
              children: c.jsx(tk, { placeholder: a.label }),
            }),
            c.jsx(Xx, {
              children:
                a.options && a.options.length > 0
                  ? a.options.map((d) =>
                      c.jsx(Yx, { value: d.id, children: d.label }, d.id)
                    )
                  : null,
            }),
          ],
        });
        break;
      case "textarea":
        l = c.jsx(Jx, {
          name: a.name,
          placeholder: a.placeholder,
          id: a.id,
          value: u,
          onChange: (d) => n({ ...t, [a.name]: d.target.value }),
        });
        break;
      default:
        l = c.jsx(ho, {
          name: a.name,
          placeholder: a.placeholder,
          id: a.name,
          type: a.type,
          value: u,
          onChange: (d) => n({ ...t, [a.name]: d.target.value }),
        });
        break;
    }
    return l;
  }
  return c.jsxs("form", {
    onSubmit: r,
    children: [
      c.jsx("div", {
        className: "flex flex-col gap-3",
        children: e.map((a) =>
          c.jsxs(
            "div",
            {
              className: "grid w-full gap-1.5",
              children: [
                c.jsx(me, { className: "mb-1", children: a.label }),
                i(a),
              ],
            },
            a.name
          )
        ),
      }),
      c.jsx(oe, {
        disabled: s,
        type: "submit",
        className: "mt-2 w-full",
        children: o || "Submit",
      }),
    ],
  });
}
const sk = 1,
  ik = 1e6;
let Ac = 0;
function ak() {
  return (Ac = (Ac + 1) % Number.MAX_SAFE_INTEGER), Ac.toString();
}
const Mc = new Map(),
  fm = (e) => {
    if (Mc.has(e)) return;
    const t = setTimeout(() => {
      Mc.delete(e), is({ type: "REMOVE_TOAST", toastId: e });
    }, ik);
    Mc.set(e, t);
  },
  lk = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, sk) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? fm(n)
            : e.toasts.forEach((r) => {
                fm(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Gi = [];
let qi = { toasts: [] };
function is(e) {
  (qi = lk(qi, e)),
    Gi.forEach((t) => {
      t(qi);
    });
}
function ck({ ...e }) {
  const t = ak(),
    n = (o) => is({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => is({ type: "DISMISS_TOAST", toastId: t });
  return (
    is({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function St() {
  const [e, t] = p.useState(qi);
  return (
    p.useEffect(
      () => (
        Gi.push(t),
        () => {
          const n = Gi.indexOf(t);
          n > -1 && Gi.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: ck,
      dismiss: (n) => is({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
const uk = [
    {
      name: "userName",
      label: "User Name",
      placeholder: "Enter your user name",
      componentType: "input",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ],
  dk = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ],
  fk = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "fruits", label: "Fruits" },
        { id: "vegetable", label: "Vegetable" },
        { id: "nuts", label: "Nuts" },
        { id: "spices", label: "Spices" },
        { id: "dairy", label: "Dairy" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ],
  pk = [
    { id: "home", label: "Home", path: "/shop/home" },
    { id: "products", label: "Products", path: "/shop/listing" },
    { id: "fruits", label: "Fruits", path: "/shop/listing" },
    { id: "vegetables", label: "Vegetables", path: "/shop/listing" },
    { id: "nuts", label: "Nuts", path: "/shop/listing" },
    { id: "spices", label: "Spices", path: "/shop/listing" },
    { id: "dairy", label: "Dairy", path: "/shop/listing" },
    { id: "search", label: "Search", path: "/shop/search" },
  ],
  hk = {
    fruits: "Fruits",
    vegetables: "Vegetables",
    nuts: "Nuts",
    spices: "Spices",
    dairy: "Dairy",
  },
  pm = {
    category: [
      { id: "fruits", label: "Fruits" },
      { id: "vegetables", label: "Vegetables" },
      { id: "nuts", label: "Nuts" },
      { id: "spices", label: "Spices" },
      { id: "dairy", label: "Dairy" },
    ],
  },
  mk = [
    { id: "price-lowtohigh", label: "Price: Low to High" },
    { id: "price-hightolow", label: "Price: High to Low" },
    { id: "title-atoz", label: "Title: A to Z" },
    { id: "title-ztoa", label: "Title: Z to A" },
  ],
  gk = [
    {
      label: "Address",
      name: "address",
      componentType: "input",
      type: "text",
      placeholder: "Enter your address",
    },
    {
      label: "City",
      name: "city",
      componentType: "input",
      type: "text",
      placeholder: "Enter your city",
    },
    {
      label: "Pincode",
      name: "pincode",
      componentType: "input",
      type: "text",
      placeholder: "Enter your pincode",
    },
    {
      label: "Phone",
      name: "phone",
      componentType: "input",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      label: "Notes",
      name: "notes",
      componentType: "textarea",
      placeholder: "Enter any additional notes",
    },
  ];
function Ae(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var vk = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  hm = vk,
  Lc = () => Math.random().toString(36).substring(7).split("").join("."),
  yk = {
    INIT: `@@redux/INIT${Lc()}`,
    REPLACE: `@@redux/REPLACE${Lc()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Lc()}`,
  },
  $a = yk;
function If(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Zx(e, t, n) {
  if (typeof e != "function") throw new Error(Ae(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ae(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Ae(1));
    return n(Zx)(e, t);
  }
  let r = e,
    o = t,
    s = new Map(),
    i = s,
    a = 0,
    l = !1;
  function u() {
    i === s &&
      ((i = new Map()),
      s.forEach((w, v) => {
        i.set(v, w);
      }));
  }
  function d() {
    if (l) throw new Error(Ae(3));
    return o;
  }
  function f(w) {
    if (typeof w != "function") throw new Error(Ae(4));
    if (l) throw new Error(Ae(5));
    let v = !0;
    u();
    const g = a++;
    return (
      i.set(g, w),
      function () {
        if (v) {
          if (l) throw new Error(Ae(6));
          (v = !1), u(), i.delete(g), (s = null);
        }
      }
    );
  }
  function m(w) {
    if (!If(w)) throw new Error(Ae(7));
    if (typeof w.type > "u") throw new Error(Ae(8));
    if (typeof w.type != "string") throw new Error(Ae(17));
    if (l) throw new Error(Ae(9));
    try {
      (l = !0), (o = r(o, w));
    } finally {
      l = !1;
    }
    return (
      (s = i).forEach((g) => {
        g();
      }),
      w
    );
  }
  function S(w) {
    if (typeof w != "function") throw new Error(Ae(10));
    (r = w), m({ type: $a.REPLACE });
  }
  function h() {
    const w = f;
    return {
      subscribe(v) {
        if (typeof v != "object" || v === null) throw new Error(Ae(11));
        function g() {
          const C = v;
          C.next && C.next(d());
        }
        return g(), { unsubscribe: w(g) };
      },
      [hm]() {
        return this;
      },
    };
  }
  return (
    m({ type: $a.INIT }),
    { dispatch: m, subscribe: f, getState: d, replaceReducer: S, [hm]: h }
  );
}
function xk(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: $a.INIT }) > "u") throw new Error(Ae(12));
    if (typeof n(void 0, { type: $a.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ae(13));
  });
}
function wk(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  const r = Object.keys(n);
  let o;
  try {
    xk(n);
  } catch (s) {
    o = s;
  }
  return function (i = {}, a) {
    if (o) throw o;
    let l = !1;
    const u = {};
    for (let d = 0; d < r.length; d++) {
      const f = r[d],
        m = n[f],
        S = i[f],
        h = m(S, a);
      if (typeof h > "u") throw (a && a.type, new Error(Ae(14)));
      (u[f] = h), (l = l || h !== S);
    }
    return (l = l || r.length !== Object.keys(i).length), l ? u : i;
  };
}
function za(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function Sk(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let s = () => {
      throw new Error(Ae(15));
    };
    const i = { getState: o.getState, dispatch: (l, ...u) => s(l, ...u) },
      a = e.map((l) => l(i));
    return (s = za(...a)(o.dispatch)), { ...o, dispatch: s };
  };
}
function Ck(e) {
  return If(e) && "type" in e && typeof e.type == "string";
}
var ew = Symbol.for("immer-nothing"),
  mm = Symbol.for("immer-draftable"),
  ut = Symbol.for("immer-state");
function jt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var go = Object.getPrototypeOf;
function Nr(e) {
  return !!e && !!e[ut];
}
function pn(e) {
  var t;
  return e
    ? tw(e) ||
        Array.isArray(e) ||
        !!e[mm] ||
        !!((t = e.constructor) != null && t[mm]) ||
        Rl(e) ||
        Pl(e)
    : !1;
}
var Ek = Object.prototype.constructor.toString();
function tw(e) {
  if (!e || typeof e != "object") return !1;
  const t = go(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Ek;
}
function Ua(e, t) {
  jl(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function jl(e) {
  const t = e[ut];
  return t ? t.type_ : Array.isArray(e) ? 1 : Rl(e) ? 2 : Pl(e) ? 3 : 0;
}
function ed(e, t) {
  return jl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function nw(e, t, n) {
  const r = jl(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function bk(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Rl(e) {
  return e instanceof Map;
}
function Pl(e) {
  return e instanceof Set;
}
function sr(e) {
  return e.copy_ || e.base_;
}
function td(e, t) {
  if (Rl(e)) return new Map(e);
  if (Pl(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = tw(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[ut];
    let o = Reflect.ownKeys(r);
    for (let s = 0; s < o.length; s++) {
      const i = o[s],
        a = r[i];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[i],
          });
    }
    return Object.create(go(e), r);
  } else {
    const r = go(e);
    if (r !== null && n) return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function $f(e, t = !1) {
  return (
    kl(e) ||
      Nr(e) ||
      !pn(e) ||
      (jl(e) > 1 && (e.set = e.add = e.clear = e.delete = Nk),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => $f(r, !0))),
    e
  );
}
function Nk() {
  jt(2);
}
function kl(e) {
  return Object.isFrozen(e);
}
var jk = {};
function jr(e) {
  const t = jk[e];
  return t || jt(0, e), t;
}
var As;
function rw() {
  return As;
}
function Rk(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function gm(e, t) {
  t &&
    (jr("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function nd(e) {
  rd(e), e.drafts_.forEach(Pk), (e.drafts_ = null);
}
function rd(e) {
  e === As && (As = e.parent_);
}
function vm(e) {
  return (As = Rk(As, e));
}
function Pk(e) {
  const t = e[ut];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ym(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[ut].modified_ && (nd(t), jt(4)),
        pn(e) && ((e = Ba(t, e)), t.parent_ || Va(t, e)),
        t.patches_ &&
          jr("Patches").generateReplacementPatches_(
            n[ut].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Ba(t, n, [])),
    nd(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== ew ? e : void 0
  );
}
function Ba(e, t, n) {
  if (kl(t)) return t;
  const r = t[ut];
  if (!r) return Ua(t, (o, s) => xm(e, r, t, o, s, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Va(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let s = o,
      i = !1;
    r.type_ === 3 && ((s = new Set(o)), o.clear(), (i = !0)),
      Ua(s, (a, l) => xm(e, r, o, a, l, n, i)),
      Va(e, o, !1),
      n &&
        e.patches_ &&
        jr("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function xm(e, t, n, r, o, s, i) {
  if (Nr(o)) {
    const a =
        s && t && t.type_ !== 3 && !ed(t.assigned_, r) ? s.concat(r) : void 0,
      l = Ba(e, o, a);
    if ((nw(n, r, l), Nr(l))) e.canAutoFreeze_ = !1;
    else return;
  } else i && n.add(o);
  if (pn(o) && !kl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ba(e, o),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Va(e, o);
  }
}
function Va(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && $f(t, n);
}
function kk(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : rw(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = r,
    s = zf;
  n && ((o = [r]), (s = Ms));
  const { revoke: i, proxy: a } = Proxy.revocable(o, s);
  return (r.draft_ = a), (r.revoke_ = i), a;
}
var zf = {
    get(e, t) {
      if (t === ut) return e;
      const n = sr(e);
      if (!ed(n, t)) return Tk(e, n, t);
      const r = n[t];
      return e.finalized_ || !pn(r)
        ? r
        : r === Fc(e.base_, t)
        ? (Dc(e), (e.copy_[t] = sd(r, e)))
        : r;
    },
    has(e, t) {
      return t in sr(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(sr(e));
    },
    set(e, t, n) {
      const r = ow(sr(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = Fc(sr(e), t),
          s = o == null ? void 0 : o[ut];
        if (s && s.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (bk(n, o) && (n !== void 0 || ed(e.base_, t))) return !0;
        Dc(e), od(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Fc(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Dc(e), od(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = sr(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      jt(11);
    },
    getPrototypeOf(e) {
      return go(e.base_);
    },
    setPrototypeOf() {
      jt(12);
    },
  },
  Ms = {};
Ua(zf, (e, t) => {
  Ms[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Ms.deleteProperty = function (e, t) {
  return Ms.set.call(this, e, t, void 0);
};
Ms.set = function (e, t, n) {
  return zf.set.call(this, e[0], t, n, e[0]);
};
function Fc(e, t) {
  const n = e[ut];
  return (n ? sr(n) : e)[t];
}
function Tk(e, t, n) {
  var o;
  const r = ow(t, n);
  return r
    ? "value" in r
      ? r.value
      : (o = r.get) == null
      ? void 0
      : o.call(e.draft_)
    : void 0;
}
function ow(e, t) {
  if (!(t in e)) return;
  let n = go(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = go(n);
  }
}
function od(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && od(e.parent_));
}
function Dc(e) {
  e.copy_ || (e.copy_ = td(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var _k = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const i = this;
          return function (l = s, ...u) {
            return i.produce(l, (d) => n.call(this, d, ...u));
          };
        }
        typeof n != "function" && jt(6),
          r !== void 0 && typeof r != "function" && jt(7);
        let o;
        if (pn(t)) {
          const s = vm(this),
            i = sd(t, void 0);
          let a = !0;
          try {
            (o = n(i)), (a = !1);
          } finally {
            a ? nd(s) : rd(s);
          }
          return gm(s, r), ym(o, s);
        } else if (!t || typeof t != "object") {
          if (
            ((o = n(t)),
            o === void 0 && (o = t),
            o === ew && (o = void 0),
            this.autoFreeze_ && $f(o, !0),
            r)
          ) {
            const s = [],
              i = [];
            jr("Patches").generateReplacementPatches_(t, o, s, i), r(s, i);
          }
          return o;
        } else jt(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (i, ...a) => this.produceWithPatches(i, (l) => t(l, ...a));
        let r, o;
        return [
          this.produce(t, n, (i, a) => {
            (r = i), (o = a);
          }),
          r,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    pn(e) || jt(8), Nr(e) && (e = Ok(e));
    const t = vm(this),
      n = sd(e, void 0);
    return (n[ut].isManual_ = !0), rd(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[ut];
    (!n || !n.isManual_) && jt(9);
    const { scope_: r } = n;
    return gm(r, t), ym(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = jr("Patches").applyPatches_;
    return Nr(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
  }
};
function sd(e, t) {
  const n = Rl(e)
    ? jr("MapSet").proxyMap_(e, t)
    : Pl(e)
    ? jr("MapSet").proxySet_(e, t)
    : kk(e, t);
  return (t ? t.scope_ : rw()).drafts_.push(n), n;
}
function Ok(e) {
  return Nr(e) || jt(10, e), sw(e);
}
function sw(e) {
  if (!pn(e) || kl(e)) return e;
  const t = e[ut];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = td(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = td(e, !0);
  return (
    Ua(n, (r, o) => {
      nw(n, r, sw(o));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var dt = new _k(),
  iw = dt.produce;
dt.produceWithPatches.bind(dt);
dt.setAutoFreeze.bind(dt);
dt.setUseStrictShallowCopy.bind(dt);
dt.applyPatches.bind(dt);
dt.createDraft.bind(dt);
dt.finishDraft.bind(dt);
function aw(e) {
  return ({ dispatch: n, getState: r }) =>
    (o) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : o(s);
}
var Ak = aw(),
  Mk = aw,
  Lk =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? za
              : za.apply(null, arguments);
        },
  Fk = (e) => e && typeof e.match == "function";
function as(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o) throw new Error(_t(0));
      return {
        type: e,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Ck(r) && r.type === e),
    n
  );
}
var lw = class Qo extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Qo.prototype);
  }
  static get [Symbol.species]() {
    return Qo;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Qo(...t[0].concat(this))
      : new Qo(...t.concat(this));
  }
};
function wm(e) {
  return pn(e) ? iw(e, () => {}) : e;
}
function Sm(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(_t(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Dk(e) {
  return typeof e == "boolean";
}
var Ik = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let i = new lw();
      return n && (Dk(n) ? i.push(Ak) : i.push(Mk(n.extraArgument))), i;
    },
  $k = "RTK_autoBatch",
  cw = (e) => (t) => {
    setTimeout(t, e);
  },
  zk =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : cw(10),
  Uk =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let o = !0,
        s = !1,
        i = !1;
      const a = new Set(),
        l =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? zk
            : e.type === "callback"
            ? e.queueNotification
            : cw(e.timeout),
        u = () => {
          (i = !1), s && ((s = !1), a.forEach((d) => d()));
        };
      return Object.assign({}, r, {
        subscribe(d) {
          const f = () => o && d(),
            m = r.subscribe(f);
          return (
            a.add(d),
            () => {
              m(), a.delete(d);
            }
          );
        },
        dispatch(d) {
          var f;
          try {
            return (
              (o = !((f = d == null ? void 0 : d.meta) != null && f[$k])),
              (s = !o),
              s && (i || ((i = !0), l(u))),
              r.dispatch(d)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  Bk = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let o = new lw(e);
      return r && o.push(Uk(typeof r == "object" ? r : void 0)), o;
    };
function Vk(e) {
  const t = Ik(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: o = !0,
      preloadedState: s = void 0,
      enhancers: i = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (If(n)) a = wk(n);
  else throw new Error(_t(1));
  let l;
  typeof r == "function" ? (l = r(t)) : (l = t());
  let u = za;
  o && (u = Lk({ trace: !1, ...(typeof o == "object" && o) }));
  const d = Sk(...l),
    f = Bk(d);
  let m = typeof i == "function" ? i(f) : f();
  const S = u(...m);
  return Zx(a, s, S);
}
function uw(e) {
  const t = {},
    n = [];
  let r;
  const o = {
    addCase(s, i) {
      const a = typeof s == "string" ? s : s.type;
      if (!a) throw new Error(_t(28));
      if (a in t) throw new Error(_t(29));
      return (t[a] = i), o;
    },
    addMatcher(s, i) {
      return n.push({ matcher: s, reducer: i }), o;
    },
    addDefaultCase(s) {
      return (r = s), o;
    },
  };
  return e(o), [t, n, r];
}
function Wk(e) {
  return typeof e == "function";
}
function Hk(e, t) {
  let [n, r, o] = uw(t),
    s;
  if (Wk(e)) s = () => wm(e());
  else {
    const a = wm(e);
    s = () => a;
  }
  function i(a = s(), l) {
    let u = [
      n[l.type],
      ...r.filter(({ matcher: d }) => d(l)).map(({ reducer: d }) => d),
    ];
    return (
      u.filter((d) => !!d).length === 0 && (u = [o]),
      u.reduce((d, f) => {
        if (f)
          if (Nr(d)) {
            const S = f(d, l);
            return S === void 0 ? d : S;
          } else {
            if (pn(d)) return iw(d, (m) => f(m, l));
            {
              const m = f(d, l);
              if (m === void 0) {
                if (d === null) return d;
                throw new Error(_t(9));
              }
              return m;
            }
          }
        return d;
      }, a)
    );
  }
  return (i.getInitialState = s), i;
}
var Kk = (e, t) => (Fk(e) ? e.match(t) : e(t));
function Gk(...e) {
  return (t) => e.some((n) => Kk(n, t));
}
var qk = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Qk = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += qk[(Math.random() * 64) | 0];
    return t;
  },
  Xk = ["name", "message", "stack", "code"],
  Ic = class {
    constructor(e, t) {
      Xl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Cm = class {
    constructor(e, t) {
      Xl(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Yk = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of Xk) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  te = (() => {
    function e(t, n, r) {
      const o = as(t + "/fulfilled", (l, u, d, f) => ({
          payload: l,
          meta: {
            ...(f || {}),
            arg: d,
            requestId: u,
            requestStatus: "fulfilled",
          },
        })),
        s = as(t + "/pending", (l, u, d) => ({
          payload: void 0,
          meta: {
            ...(d || {}),
            arg: u,
            requestId: l,
            requestStatus: "pending",
          },
        })),
        i = as(t + "/rejected", (l, u, d, f, m) => ({
          payload: f,
          error: ((r && r.serializeError) || Yk)(l || "Rejected"),
          meta: {
            ...(m || {}),
            arg: d,
            requestId: u,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (l == null ? void 0 : l.name) === "AbortError",
            condition: (l == null ? void 0 : l.name) === "ConditionError",
          },
        }));
      function a(l) {
        return (u, d, f) => {
          const m = r != null && r.idGenerator ? r.idGenerator(l) : Qk(),
            S = new AbortController();
          let h, y;
          function w(g) {
            (y = g), S.abort();
          }
          const v = (async function () {
            var C, E;
            let g;
            try {
              let N =
                (C = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : C.call(r, l, { getState: d, extra: f });
              if ((Zk(N) && (N = await N), N === !1 || S.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const b = new Promise((j, O) => {
                (h = () => {
                  O({ name: "AbortError", message: y || "Aborted" });
                }),
                  S.signal.addEventListener("abort", h);
              });
              u(
                s(
                  m,
                  l,
                  (E = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : E.call(
                        r,
                        { requestId: m, arg: l },
                        { getState: d, extra: f }
                      )
                )
              ),
                (g = await Promise.race([
                  b,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: d,
                      extra: f,
                      requestId: m,
                      signal: S.signal,
                      abort: w,
                      rejectWithValue: (j, O) => new Ic(j, O),
                      fulfillWithValue: (j, O) => new Cm(j, O),
                    })
                  ).then((j) => {
                    if (j instanceof Ic) throw j;
                    return j instanceof Cm
                      ? o(j.payload, m, l, j.meta)
                      : o(j, m, l);
                  }),
                ]));
            } catch (N) {
              g =
                N instanceof Ic ? i(null, m, l, N.payload, N.meta) : i(N, m, l);
            } finally {
              h && S.signal.removeEventListener("abort", h);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                i.match(g) &&
                g.meta.condition) ||
                u(g),
              g
            );
          })();
          return Object.assign(v, {
            abort: w,
            requestId: m,
            arg: l,
            unwrap() {
              return v.then(Jk);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: s,
        rejected: i,
        fulfilled: o,
        settled: Gk(i, o),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function Jk(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Zk(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var eT = Symbol.for("rtk-slice-createasyncthunk");
function tT(e, t) {
  return `${e}/${t}`;
}
function nT({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[eT];
  return function (o) {
    const { name: s, reducerPath: i = s } = o;
    if (!s) throw new Error(_t(11));
    typeof process < "u";
    const a =
        (typeof o.reducers == "function" ? o.reducers(oT()) : o.reducers) || {},
      l = Object.keys(a),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      d = {
        addCase(x, C) {
          const E = typeof x == "string" ? x : x.type;
          if (!E) throw new Error(_t(12));
          if (E in u.sliceCaseReducersByType) throw new Error(_t(13));
          return (u.sliceCaseReducersByType[E] = C), d;
        },
        addMatcher(x, C) {
          return u.sliceMatchers.push({ matcher: x, reducer: C }), d;
        },
        exposeAction(x, C) {
          return (u.actionCreators[x] = C), d;
        },
        exposeCaseReducer(x, C) {
          return (u.sliceCaseReducersByName[x] = C), d;
        },
      };
    l.forEach((x) => {
      const C = a[x],
        E = {
          reducerName: x,
          type: tT(s, x),
          createNotation: typeof o.reducers == "function",
        };
      iT(C) ? lT(E, C, d, t) : sT(E, C, d);
    });
    function f() {
      const [x = {}, C = [], E = void 0] =
          typeof o.extraReducers == "function"
            ? uw(o.extraReducers)
            : [o.extraReducers],
        N = { ...x, ...u.sliceCaseReducersByType };
      return Hk(o.initialState, (b) => {
        for (let j in N) b.addCase(j, N[j]);
        for (let j of u.sliceMatchers) b.addMatcher(j.matcher, j.reducer);
        for (let j of C) b.addMatcher(j.matcher, j.reducer);
        E && b.addDefaultCase(E);
      });
    }
    const m = (x) => x,
      S = new Map();
    let h;
    function y(x, C) {
      return h || (h = f()), h(x, C);
    }
    function w() {
      return h || (h = f()), h.getInitialState();
    }
    function v(x, C = !1) {
      function E(b) {
        let j = b[x];
        return typeof j > "u" && C && (j = w()), j;
      }
      function N(b = m) {
        const j = Sm(S, C, { insert: () => new WeakMap() });
        return Sm(j, b, {
          insert: () => {
            const O = {};
            for (const [_, B] of Object.entries(o.selectors ?? {}))
              O[_] = rT(B, b, w, C);
            return O;
          },
        });
      }
      return {
        reducerPath: x,
        getSelectors: N,
        get selectors() {
          return N(E);
        },
        selectSlice: E,
      };
    }
    const g = {
      name: s,
      reducer: y,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: w,
      ...v(i),
      injectInto(x, { reducerPath: C, ...E } = {}) {
        const N = C ?? i;
        return (
          x.inject({ reducerPath: N, reducer: y }, E), { ...g, ...v(N, !0) }
        );
      },
    };
    return g;
  };
}
function rT(e, t, n, r) {
  function o(s, ...i) {
    let a = t(s);
    return typeof a > "u" && r && (a = n()), e(a, ...i);
  }
  return (o.unwrapped = e), o;
}
var Xt = nT();
function oT() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function sT({ type: e, reducerName: t, createNotation: n }, r, o) {
  let s, i;
  if ("reducer" in r) {
    if (n && !aT(r)) throw new Error(_t(17));
    (s = r.reducer), (i = r.prepare);
  } else s = r;
  o.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, i ? as(e, i) : as(e));
}
function iT(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function aT(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function lT({ type: e, reducerName: t }, n, r, o) {
  if (!o) throw new Error(_t(18));
  const {
      payloadCreator: s,
      fulfilled: i,
      pending: a,
      rejected: l,
      settled: u,
      options: d,
    } = n,
    f = o(e, s, d);
  r.exposeAction(t, f),
    i && r.addCase(f.fulfilled, i),
    a && r.addCase(f.pending, a),
    l && r.addCase(f.rejected, l),
    u && r.addMatcher(f.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: i || ji,
      pending: a || ji,
      rejected: l || ji,
      settled: u || ji,
    });
}
function ji() {}
function _t(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
function dw(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: cT } = Object.prototype,
  { getPrototypeOf: Uf } = Object,
  Tl = ((e) => (t) => {
    const n = cT.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Dt = (e) => ((e = e.toLowerCase()), (t) => Tl(t) === e),
  _l = (e) => (t) => typeof t === e,
  { isArray: jo } = Array,
  Ls = _l("undefined");
function uT(e) {
  return (
    e !== null &&
    !Ls(e) &&
    e.constructor !== null &&
    !Ls(e.constructor) &&
    lt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const fw = Dt("ArrayBuffer");
function dT(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && fw(e.buffer)),
    t
  );
}
const fT = _l("string"),
  lt = _l("function"),
  pw = _l("number"),
  Ol = (e) => e !== null && typeof e == "object",
  pT = (e) => e === !0 || e === !1,
  Qi = (e) => {
    if (Tl(e) !== "object") return !1;
    const t = Uf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  hT = Dt("Date"),
  mT = Dt("File"),
  gT = Dt("Blob"),
  vT = Dt("FileList"),
  yT = (e) => Ol(e) && lt(e.pipe),
  xT = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (lt(e.append) &&
          ((t = Tl(e)) === "formdata" ||
            (t === "object" &&
              lt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  wT = Dt("URLSearchParams"),
  [ST, CT, ET, bT] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Dt
  ),
  NT = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), jo(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = s.length;
    let a;
    for (r = 0; r < i; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function hw(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const cr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  mw = (e) => !Ls(e) && e !== cr;
function id() {
  const { caseless: e } = (mw(this) && this) || {},
    t = {},
    n = (r, o) => {
      const s = (e && hw(t, o)) || o;
      Qi(t[s]) && Qi(r)
        ? (t[s] = id(t[s], r))
        : Qi(r)
        ? (t[s] = id({}, r))
        : jo(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Xs(arguments[r], n);
  return t;
}
const jT = (e, t, n, { allOwnKeys: r } = {}) => (
    Xs(
      t,
      (o, s) => {
        n && lt(o) ? (e[s] = dw(o, n)) : (e[s] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  RT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  PT = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  kT = (e, t, n, r) => {
    let o, s, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
        (i = o[s]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0));
      e = n !== !1 && Uf(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  TT = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  _T = (e) => {
    if (!e) return null;
    if (jo(e)) return e;
    let t = e.length;
    if (!pw(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  OT = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Uf(Uint8Array)),
  AT = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const s = o.value;
      t.call(e, s[0], s[1]);
    }
  },
  MT = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  LT = Dt("HTMLFormElement"),
  FT = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Em = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  DT = Dt("RegExp"),
  gw = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Xs(n, (o, s) => {
      let i;
      (i = t(o, s, e)) !== !1 && (r[s] = i || o);
    }),
      Object.defineProperties(e, r);
  },
  IT = (e) => {
    gw(e, (t, n) => {
      if (lt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (lt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  $T = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((s) => {
          n[s] = !0;
        });
      };
    return jo(e) ? r(e) : r(String(e).split(t)), n;
  },
  zT = () => {},
  UT = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  $c = "abcdefghijklmnopqrstuvwxyz",
  bm = "0123456789",
  vw = { DIGIT: bm, ALPHA: $c, ALPHA_DIGIT: $c + $c.toUpperCase() + bm },
  BT = (e = 16, t = vw.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function VT(e) {
  return !!(
    e &&
    lt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const WT = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Ol(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const s = jo(r) ? [] : {};
            return (
              Xs(r, (i, a) => {
                const l = n(i, o + 1);
                !Ls(l) && (s[a] = l);
              }),
              (t[o] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  HT = Dt("AsyncFunction"),
  KT = (e) => e && (Ol(e) || lt(e)) && lt(e.then) && lt(e.catch),
  yw = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          cr.addEventListener(
            "message",
            ({ source: o, data: s }) => {
              o === cr && s === n && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), cr.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    lt(cr.postMessage)
  ),
  GT =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(cr)
      : (typeof process < "u" && process.nextTick) || yw,
  R = {
    isArray: jo,
    isArrayBuffer: fw,
    isBuffer: uT,
    isFormData: xT,
    isArrayBufferView: dT,
    isString: fT,
    isNumber: pw,
    isBoolean: pT,
    isObject: Ol,
    isPlainObject: Qi,
    isReadableStream: ST,
    isRequest: CT,
    isResponse: ET,
    isHeaders: bT,
    isUndefined: Ls,
    isDate: hT,
    isFile: mT,
    isBlob: gT,
    isRegExp: DT,
    isFunction: lt,
    isStream: yT,
    isURLSearchParams: wT,
    isTypedArray: OT,
    isFileList: vT,
    forEach: Xs,
    merge: id,
    extend: jT,
    trim: NT,
    stripBOM: RT,
    inherits: PT,
    toFlatObject: kT,
    kindOf: Tl,
    kindOfTest: Dt,
    endsWith: TT,
    toArray: _T,
    forEachEntry: AT,
    matchAll: MT,
    isHTMLForm: LT,
    hasOwnProperty: Em,
    hasOwnProp: Em,
    reduceDescriptors: gw,
    freezeMethods: IT,
    toObjectSet: $T,
    toCamelCase: FT,
    noop: zT,
    toFiniteNumber: UT,
    findKey: hw,
    global: cr,
    isContextDefined: mw,
    ALPHABET: vw,
    generateString: BT,
    isSpecCompliantForm: VT,
    toJSONObject: WT,
    isAsyncFn: HT,
    isThenable: KT,
    setImmediate: yw,
    asap: GT,
  };
function q(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
R.inherits(q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const xw = q.prototype,
  ww = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ww[e] = { value: e };
});
Object.defineProperties(q, ww);
Object.defineProperty(xw, "isAxiosError", { value: !0 });
q.from = (e, t, n, r, o, s) => {
  const i = Object.create(xw);
  return (
    R.toFlatObject(
      e,
      i,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    q.call(i, e.message, t, n, r, o),
    (i.cause = e),
    (i.name = e.name),
    s && Object.assign(i, s),
    i
  );
};
const qT = null;
function ad(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function Sw(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Nm(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, s) {
          return (o = Sw(o)), !n && s ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function QT(e) {
  return R.isArray(e) && !e.some(ad);
}
const XT = R.toFlatObject(R, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Al(e, t, n) {
  if (!R.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = R.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, w) {
        return !R.isUndefined(w[y]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    s = n.dots,
    i = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && R.isSpecCompliantForm(t);
  if (!R.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (R.isDate(h)) return h.toISOString();
    if (!l && R.isBlob(h))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(h) || R.isTypedArray(h)
      ? l && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function d(h, y, w) {
    let v = h;
    if (h && !w && typeof h == "object") {
      if (R.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (R.isArray(h) && QT(h)) ||
        ((R.isFileList(h) || R.endsWith(y, "[]")) && (v = R.toArray(h)))
      )
        return (
          (y = Sw(y)),
          v.forEach(function (x, C) {
            !(R.isUndefined(x) || x === null) &&
              t.append(
                i === !0 ? Nm([y], C, s) : i === null ? y : y + "[]",
                u(x)
              );
          }),
          !1
        );
    }
    return ad(h) ? !0 : (t.append(Nm(w, y, s), u(h)), !1);
  }
  const f = [],
    m = Object.assign(XT, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: ad,
    });
  function S(h, y) {
    if (!R.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(h),
        R.forEach(h, function (v, g) {
          (!(R.isUndefined(v) || v === null) &&
            o.call(t, v, R.isString(g) ? g.trim() : g, y, m)) === !0 &&
            S(v, y ? y.concat(g) : [g]);
        }),
        f.pop();
    }
  }
  if (!R.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function jm(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Bf(e, t) {
  (this._pairs = []), e && Al(e, this, t);
}
const Cw = Bf.prototype;
Cw.append = function (t, n) {
  this._pairs.push([t, n]);
};
Cw.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, jm);
      }
    : jm;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function YT(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ew(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || YT,
    o = n && n.serialize;
  let s;
  if (
    (o
      ? (s = o(t, n))
      : (s = R.isURLSearchParams(t) ? t.toString() : new Bf(t, n).toString(r)),
    s)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class Rm {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    R.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const bw = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  JT = typeof URLSearchParams < "u" ? URLSearchParams : Bf,
  ZT = typeof FormData < "u" ? FormData : null,
  e_ = typeof Blob < "u" ? Blob : null,
  t_ = {
    isBrowser: !0,
    classes: { URLSearchParams: JT, FormData: ZT, Blob: e_ },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Vf = typeof window < "u" && typeof document < "u",
  ld = (typeof navigator == "object" && navigator) || void 0,
  n_ =
    Vf &&
    (!ld || ["ReactNative", "NativeScript", "NS"].indexOf(ld.product) < 0),
  r_ =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  o_ = (Vf && window.location.href) || "http://localhost",
  s_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Vf,
        hasStandardBrowserEnv: n_,
        hasStandardBrowserWebWorkerEnv: r_,
        navigator: ld,
        origin: o_,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Je = { ...s_, ...t_ };
function i_(e, t) {
  return Al(
    e,
    new Je.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, s) {
          return Je.isNode && R.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function a_(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function l_(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function Nw(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      l = s >= n.length;
    return (
      (i = !i && R.isArray(o) ? o.length : i),
      l
        ? (R.hasOwnProp(o, i) ? (o[i] = [o[i], r]) : (o[i] = r), !a)
        : ((!o[i] || !R.isObject(o[i])) && (o[i] = []),
          t(n, r, o[i], s) && R.isArray(o[i]) && (o[i] = l_(o[i])),
          !a)
    );
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const n = {};
    return (
      R.forEachEntry(e, (r, o) => {
        t(a_(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function c_(e, t, n) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ys = {
  transitional: bw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        s = R.isObject(t);
      if ((s && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t)))
        return o ? JSON.stringify(Nw(t)) : t;
      if (
        R.isArrayBuffer(t) ||
        R.isBuffer(t) ||
        R.isStream(t) ||
        R.isFile(t) ||
        R.isBlob(t) ||
        R.isReadableStream(t)
      )
        return t;
      if (R.isArrayBufferView(t)) return t.buffer;
      if (R.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return i_(t, this.formSerializer).toString();
        if ((a = R.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Al(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return s || o ? (n.setContentType("application/json", !1), c_(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ys.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (R.isResponse(t) || R.isReadableStream(t)) return t;
      if (t && R.isString(t) && ((r && !this.responseType) || o)) {
        const i = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? q.from(a, q.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Je.classes.FormData, Blob: Je.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ys.headers[e] = {};
});
const u_ = R.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  d_ = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (o = i.indexOf(":")),
              (n = i.substring(0, o).trim().toLowerCase()),
              (r = i.substring(o + 1).trim()),
              !(!n || (t[n] && u_[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Pm = Symbol("internals");
function Vo(e) {
  return e && String(e).trim().toLowerCase();
}
function Xi(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(Xi) : String(e);
}
function f_(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const p_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function zc(e, t, n, r, o) {
  if (R.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!R.isString(t))) {
    if (R.isString(r)) return t.indexOf(r) !== -1;
    if (R.isRegExp(r)) return r.test(t);
  }
}
function h_(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function m_(e, t) {
  const n = R.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0,
    });
  });
}
class Ze {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, l, u) {
      const d = Vo(l);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = R.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || l] = Xi(a));
    }
    const i = (a, l) => R.forEach(a, (u, d) => s(u, d, l));
    if (R.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (R.isString(t) && (t = t.trim()) && !p_(t)) i(d_(t), n);
    else if (R.isHeaders(t)) for (const [a, l] of t.entries()) s(l, a, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Vo(t)), t)) {
      const r = R.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return f_(o);
        if (R.isFunction(n)) return n.call(this, o, r);
        if (R.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Vo(t)), t)) {
      const r = R.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || zc(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (((i = Vo(i)), i)) {
        const a = R.findKey(r, i);
        a && (!n || zc(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return R.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || zc(this, this[s], s, t, !0)) && (delete this[s], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      R.forEach(this, (o, s) => {
        const i = R.findKey(r, s);
        if (i) {
          (n[i] = Xi(o)), delete n[s];
          return;
        }
        const a = t ? h_(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = Xi(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      R.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && R.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Pm] = this[Pm] = { accessors: {} }).accessors,
      o = this.prototype;
    function s(i) {
      const a = Vo(i);
      r[a] || (m_(o, i), (r[a] = !0));
    }
    return R.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Ze.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
R.reduceDescriptors(Ze.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
R.freezeMethods(Ze);
function Uc(e, t) {
  const n = this || Ys,
    r = t || n,
    o = Ze.from(r.headers);
  let s = r.data;
  return (
    R.forEach(e, function (a) {
      s = a.call(n, s, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    s
  );
}
function jw(e) {
  return !!(e && e.__CANCEL__);
}
function Ro(e, t, n) {
  q.call(this, e ?? "canceled", q.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
R.inherits(Ro, q, { __CANCEL__: !0 });
function Rw(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new q(
          "Request failed with status code " + n.status,
          [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function g_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function v_(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    s = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        d = r[s];
      i || (i = u), (n[o] = l), (r[o] = u);
      let f = s,
        m = 0;
      for (; f !== o; ) (m += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === s && (s = (s + 1) % e), u - i < t)) return;
      const S = d && u - d;
      return S ? Math.round((m * 1e3) / S) : void 0;
    }
  );
}
function y_(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    s;
  const i = (u, d = Date.now()) => {
    (n = d), (o = null), s && (clearTimeout(s), (s = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? i(u, d)
        : ((o = u),
          s ||
            (s = setTimeout(() => {
              (s = null), i(o);
            }, r - f)));
    },
    () => o && i(o),
  ];
}
const Wa = (e, t, n = 3) => {
    let r = 0;
    const o = v_(50, 250);
    return y_((s) => {
      const i = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = i - r,
        u = o(l),
        d = i <= a;
      r = i;
      const f = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && d ? (a - i) / u : void 0,
        event: s,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  km = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Tm =
    (e) =>
    (...t) =>
      R.asap(() => e(...t)),
  x_ = Je.hasStandardBrowserEnv
    ? (function () {
        const t =
            Je.navigator && /(msie|trident)/i.test(Je.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(s) {
          let i = s;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (i) {
            const a = R.isString(i) ? o(i) : i;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  w_ = Je.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, s) {
          const i = [e + "=" + encodeURIComponent(t)];
          R.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            R.isString(r) && i.push("path=" + r),
            R.isString(o) && i.push("domain=" + o),
            s === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function S_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function C_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pw(e, t) {
  return e && !S_(t) ? C_(e, t) : t;
}
const _m = (e) => (e instanceof Ze ? { ...e } : e);
function Rr(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return R.isPlainObject(u) && R.isPlainObject(d)
      ? R.merge.call({ caseless: f }, u, d)
      : R.isPlainObject(d)
      ? R.merge({}, d)
      : R.isArray(d)
      ? d.slice()
      : d;
  }
  function o(u, d, f) {
    if (R.isUndefined(d)) {
      if (!R.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, d, f);
  }
  function s(u, d) {
    if (!R.isUndefined(d)) return r(void 0, d);
  }
  function i(u, d) {
    if (R.isUndefined(d)) {
      if (!R.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, f) {
    if (f in t) return r(u, d);
    if (f in e) return r(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, d) => o(_m(u), _m(d), !0),
  };
  return (
    R.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = l[d] || o,
        m = f(e[d], t[d], d);
      (R.isUndefined(m) && f !== a) || (n[d] = m);
    }),
    n
  );
}
const kw = (e) => {
    const t = Rr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: s,
      headers: i,
      auth: a,
    } = t;
    (t.headers = i = Ze.from(i)),
      (t.url = Ew(Pw(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (R.isFormData(n)) {
      if (Je.hasStandardBrowserEnv || Je.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((l = i.getContentType()) !== !1) {
        const [u, ...d] = l
          ? l
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        i.setContentType([u || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      Je.hasStandardBrowserEnv &&
      (r && R.isFunction(r) && (r = r(t)), r || (r !== !1 && x_(t.url)))
    ) {
      const u = o && s && w_.read(s);
      u && i.set(o, u);
    }
    return t;
  },
  E_ = typeof XMLHttpRequest < "u",
  b_ =
    E_ &&
    function (e) {
      return new Promise(function (n, r) {
        const o = kw(e);
        let s = o.data;
        const i = Ze.from(o.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o,
          d,
          f,
          m,
          S,
          h;
        function y() {
          S && S(),
            h && h(),
            o.cancelToken && o.cancelToken.unsubscribe(d),
            o.signal && o.signal.removeEventListener("abort", d);
        }
        let w = new XMLHttpRequest();
        w.open(o.method.toUpperCase(), o.url, !0), (w.timeout = o.timeout);
        function v() {
          if (!w) return;
          const x = Ze.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            E = {
              data:
                !a || a === "text" || a === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: x,
              config: e,
              request: w,
            };
          Rw(
            function (b) {
              n(b), y();
            },
            function (b) {
              r(b), y();
            },
            E
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = v)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(v);
            }),
          (w.onabort = function () {
            w &&
              (r(new q("Request aborted", q.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new q("Network Error", q.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let C = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = o.transitional || bw;
            o.timeoutErrorMessage && (C = o.timeoutErrorMessage),
              r(
                new q(
                  C,
                  E.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          s === void 0 && i.setContentType(null),
          "setRequestHeader" in w &&
            R.forEach(i.toJSON(), function (C, E) {
              w.setRequestHeader(E, C);
            }),
          R.isUndefined(o.withCredentials) ||
            (w.withCredentials = !!o.withCredentials),
          a && a !== "json" && (w.responseType = o.responseType),
          u && (([m, h] = Wa(u, !0)), w.addEventListener("progress", m)),
          l &&
            w.upload &&
            (([f, S] = Wa(l)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", S)),
          (o.cancelToken || o.signal) &&
            ((d = (x) => {
              w &&
                (r(!x || x.type ? new Ro(null, e, w) : x),
                w.abort(),
                (w = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(d),
            o.signal &&
              (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
        const g = g_(o.url);
        if (g && Je.protocols.indexOf(g) === -1) {
          r(new q("Unsupported protocol " + g + ":", q.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(s || null);
      });
    },
  N_ = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const s = function (u) {
        if (!o) {
          (o = !0), a();
          const d = u instanceof Error ? u : this.reason;
          r.abort(
            d instanceof q ? d : new Ro(d instanceof Error ? d.message : d)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), s(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(s)
              : u.removeEventListener("abort", s);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", s));
      const { signal: l } = r;
      return (l.unsubscribe = () => R.asap(a)), l;
    }
  },
  j_ = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  R_ = async function* (e, t) {
    for await (const n of P_(e)) yield* j_(n, t);
  },
  P_ = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Om = (e, t, n, r) => {
    const o = R_(e, t);
    let s = 0,
      i,
      a = (l) => {
        i || ((i = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: d } = await o.next();
            if (u) {
              a(), l.close();
              return;
            }
            let f = d.byteLength;
            if (n) {
              let m = (s += f);
              n(m);
            }
            l.enqueue(new Uint8Array(d));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return a(l), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ml =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Tw = Ml && typeof ReadableStream == "function",
  k_ =
    Ml &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  _w = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  T_ =
    Tw &&
    _w(() => {
      let e = !1;
      const t = new Request(Je.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Am = 64 * 1024,
  cd = Tw && _w(() => R.isReadableStream(new Response("").body)),
  Ha = { stream: cd && ((e) => e.body) };
Ml &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ha[t] &&
        (Ha[t] = R.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new q(
                `Response type '${t}' is not supported`,
                q.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const __ = async (e) => {
    if (e == null) return 0;
    if (R.isBlob(e)) return e.size;
    if (R.isSpecCompliantForm(e))
      return (
        await new Request(Je.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (R.isArrayBufferView(e) || R.isArrayBuffer(e)) return e.byteLength;
    if ((R.isURLSearchParams(e) && (e = e + ""), R.isString(e)))
      return (await k_(e)).byteLength;
  },
  O_ = async (e, t) => {
    const n = R.toFiniteNumber(e.getContentLength());
    return n ?? __(t);
  },
  A_ =
    Ml &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: s,
        timeout: i,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: d,
        withCredentials: f = "same-origin",
        fetchOptions: m,
      } = kw(e);
      u = u ? (u + "").toLowerCase() : "text";
      let S = N_([o, s && s.toAbortSignal()], i),
        h;
      const y =
        S &&
        S.unsubscribe &&
        (() => {
          S.unsubscribe();
        });
      let w;
      try {
        if (
          l &&
          T_ &&
          n !== "get" &&
          n !== "head" &&
          (w = await O_(d, r)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
            N;
          if (
            (R.isFormData(r) &&
              (N = E.headers.get("content-type")) &&
              d.setContentType(N),
            E.body)
          ) {
            const [b, j] = km(w, Wa(Tm(l)));
            r = Om(E.body, Am, b, j);
          }
        }
        R.isString(f) || (f = f ? "include" : "omit");
        const v = "credentials" in Request.prototype;
        h = new Request(t, {
          ...m,
          signal: S,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: v ? f : void 0,
        });
        let g = await fetch(h);
        const x = cd && (u === "stream" || u === "response");
        if (cd && (a || (x && y))) {
          const E = {};
          ["status", "statusText", "headers"].forEach((O) => {
            E[O] = g[O];
          });
          const N = R.toFiniteNumber(g.headers.get("content-length")),
            [b, j] = (a && km(N, Wa(Tm(a), !0))) || [];
          g = new Response(
            Om(g.body, Am, b, () => {
              j && j(), y && y();
            }),
            E
          );
        }
        u = u || "text";
        let C = await Ha[R.findKey(Ha, u) || "text"](g, e);
        return (
          !x && y && y(),
          await new Promise((E, N) => {
            Rw(E, N, {
              data: C,
              headers: Ze.from(g.headers),
              status: g.status,
              statusText: g.statusText,
              config: e,
              request: h,
            });
          })
        );
      } catch (v) {
        throw (
          (y && y(),
          v && v.name === "TypeError" && /fetch/i.test(v.message)
            ? Object.assign(new q("Network Error", q.ERR_NETWORK, e, h), {
                cause: v.cause || v,
              })
            : q.from(v, v && v.code, e, h))
        );
      }
    }),
  ud = { http: qT, xhr: b_, fetch: A_ };
R.forEach(ud, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Mm = (e) => `- ${e}`,
  M_ = (e) => R.isFunction(e) || e === null || e === !1,
  Ow = {
    getAdapter: (e) => {
      e = R.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let i;
        if (
          ((r = n),
          !M_(n) && ((r = ud[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new q(`Unknown adapter '${i}'`);
        if (r) break;
        o[i || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? s.length > 1
            ? `since :
` +
              s.map(Mm).join(`
`)
            : " " + Mm(s[0])
          : "as no adapter specified";
        throw new q(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ud,
  };
function Bc(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ro(null, e);
}
function Lm(e) {
  return (
    Bc(e),
    (e.headers = Ze.from(e.headers)),
    (e.data = Uc.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ow.getAdapter(e.adapter || Ys.adapter)(e).then(
      function (r) {
        return (
          Bc(e),
          (r.data = Uc.call(e, e.transformResponse, r)),
          (r.headers = Ze.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          jw(r) ||
            (Bc(e),
            r &&
              r.response &&
              ((r.response.data = Uc.call(e, e.transformResponse, r.response)),
              (r.response.headers = Ze.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Aw = "1.7.7",
  Wf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Wf[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Fm = {};
Wf.transitional = function (t, n, r) {
  function o(s, i) {
    return (
      "[Axios v" +
      Aw +
      "] Transitional option '" +
      s +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (s, i, a) => {
    if (t === !1)
      throw new q(
        o(i, " has been removed" + (n ? " in " + n : "")),
        q.ERR_DEPRECATED
      );
    return (
      n &&
        !Fm[i] &&
        ((Fm[i] = !0),
        console.warn(
          o(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, i, a) : !0
    );
  };
};
function L_(e, t, n) {
  if (typeof e != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o],
      i = t[s];
    if (i) {
      const a = e[s],
        l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new q("option " + s + " must be " + l, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new q("Unknown option " + s, q.ERR_BAD_OPTION);
  }
}
const dd = { assertOptions: L_, validators: Wf },
  Cn = dd.validators;
class hr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Rm(), response: new Rm() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Rr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 &&
      dd.assertOptions(
        r,
        {
          silentJSONParsing: Cn.transitional(Cn.boolean),
          forcedJSONParsing: Cn.transitional(Cn.boolean),
          clarifyTimeoutError: Cn.transitional(Cn.boolean),
        },
        !1
      ),
      o != null &&
        (R.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : dd.assertOptions(
              o,
              { encode: Cn.function, serialize: Cn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = s && R.merge(s.common, s[n.method]);
    s &&
      R.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete s[h];
        }
      ),
      (n.headers = Ze.concat(i, s));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let d,
      f = 0,
      m;
    if (!l) {
      const h = [Lm.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, u),
          m = h.length,
          d = Promise.resolve(n);
        f < m;

      )
        d = d.then(h[f++], h[f++]);
      return d;
    }
    m = a.length;
    let S = n;
    for (f = 0; f < m; ) {
      const h = a[f++],
        y = a[f++];
      try {
        S = h(S);
      } catch (w) {
        y.call(this, w);
        break;
      }
    }
    try {
      d = Lm.call(this, S);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, m = u.length; f < m; ) d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = Rr(this.defaults, t);
    const n = Pw(t.baseURL, t.url);
    return Ew(n, t.params, t.paramsSerializer);
  }
}
R.forEach(["delete", "get", "head", "options"], function (t) {
  hr.prototype[t] = function (n, r) {
    return this.request(
      Rr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
R.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, i, a) {
      return this.request(
        Rr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: i,
        })
      );
    };
  }
  (hr.prototype[t] = n()), (hr.prototype[t + "Form"] = n(!0));
});
class Hf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let s;
        const i = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(o);
        return (
          (i.cancel = function () {
            r.unsubscribe(s);
          }),
          i
        );
      }),
      t(function (s, i, a) {
        r.reason || ((r.reason = new Ro(s, i, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Hf(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function F_(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function D_(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const fd = {
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
  NetworkAuthenticationRequired: 511,
};
Object.entries(fd).forEach(([e, t]) => {
  fd[t] = e;
});
function Mw(e) {
  const t = new hr(e),
    n = dw(hr.prototype.request, t);
  return (
    R.extend(n, hr.prototype, t, { allOwnKeys: !0 }),
    R.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Mw(Rr(e, o));
    }),
    n
  );
}
const H = Mw(Ys);
H.Axios = hr;
H.CanceledError = Ro;
H.CancelToken = Hf;
H.isCancel = jw;
H.VERSION = Aw;
H.toFormData = Al;
H.AxiosError = q;
H.Cancel = H.CanceledError;
H.all = function (t) {
  return Promise.all(t);
};
H.spread = F_;
H.isAxiosError = D_;
H.mergeConfig = Rr;
H.AxiosHeaders = Ze;
H.formToJSON = (e) => Nw(R.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = Ow.getAdapter;
H.HttpStatusCode = fd;
H.default = H;
const I_ = { isAuthenticated: !1, isLoading: !0, user: null },
  Yi = te(
    "/auth/register",
    async (e) =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/auth/register",
          e,
          { withCredentials: !0 }
        )
      ).data
  ),
  Ji = te(
    "/auth/login",
    async (e) =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/auth/login",
          e,
          { withCredentials: !0 }
        )
      ).data
  ),
  Kf = te(
    "/auth/logout",
    async () =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/auth/logout",
          {},
          { withCredentials: !0 }
        )
      ).data
  ),
  Zi = te(
    "/auth/checkauth",
    async () =>
      (
        await H.get(
          "https://agro-server-2gho.onrender.com/api/auth/check-auth",
          {
            withCredentials: !0,
            headers: {
              "Cache-Control":
                "no-store, no-cache, must-revalidate, proxy-revalidate",
            },
          }
        )
      ).data
  ),
  Lw = Xt({
    name: "auth",
    initialState: I_,
    reducers: { setUser: (e, t) => {} },
    extraReducers: (e) => {
      e.addCase(Yi.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(Yi.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.user = null), (t.isAuthenticated = !1);
        })
        .addCase(Yi.rejected, (t, n) => {
          (t.isLoading = !1), (t.user = null), (t.isAuthenticated = !1);
        })
        .addCase(Ji.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(Ji.fulfilled, (t, n) => {
          (t.isLoading = !1),
            (t.user = n.payload.success ? n.payload.user : null),
            (t.isAuthenticated = n.payload.success);
        })
        .addCase(Ji.rejected, (t, n) => {
          (t.isLoading = !1), (t.user = null), (t.isAuthenticated = !1);
        })
        .addCase(Zi.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(Zi.fulfilled, (t, n) => {
          (t.isLoading = !1),
            (t.user = n.payload.success ? n.payload.user : null),
            (t.isAuthenticated = n.payload.success);
        })
        .addCase(Zi.rejected, (t, n) => {
          (t.isLoading = !1), (t.user = null), (t.isAuthenticated = !1);
        })
        .addCase(Kf.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.user = null), (t.isAuthenticated = !1);
        });
    },
  });
Lw.actions;
const $_ = Lw.reducer;
var Fw = { exports: {} },
  Dw = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Js = p;
function z_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var U_ = typeof Object.is == "function" ? Object.is : z_,
  B_ = Js.useSyncExternalStore,
  V_ = Js.useRef,
  W_ = Js.useEffect,
  H_ = Js.useMemo,
  K_ = Js.useDebugValue;
Dw.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var s = V_(null);
  if (s.current === null) {
    var i = { hasValue: !1, value: null };
    s.current = i;
  } else i = s.current;
  s = H_(
    function () {
      function l(S) {
        if (!u) {
          if (((u = !0), (d = S), (S = r(S)), o !== void 0 && i.hasValue)) {
            var h = i.value;
            if (o(h, S)) return (f = h);
          }
          return (f = S);
        }
        if (((h = f), U_(d, S))) return h;
        var y = r(S);
        return o !== void 0 && o(h, y) ? h : ((d = S), (f = y));
      }
      var u = !1,
        d,
        f,
        m = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        m === null
          ? void 0
          : function () {
              return l(m());
            },
      ];
    },
    [t, n, r, o]
  );
  var a = B_(e, s[0], s[1]);
  return (
    W_(
      function () {
        (i.hasValue = !0), (i.value = a);
      },
      [a]
    ),
    K_(a),
    a
  );
};
Fw.exports = Dw;
var G_ = Fw.exports,
  st = "default" in aa ? Zt : aa,
  Dm = Symbol.for("react-redux-context"),
  Im = typeof globalThis < "u" ? globalThis : {};
function q_() {
  if (!st.createContext) return {};
  const e = Im[Dm] ?? (Im[Dm] = new Map());
  let t = e.get(st.createContext);
  return t || ((t = st.createContext(null)), e.set(st.createContext, t)), t;
}
var qn = q_(),
  Q_ = () => {
    throw new Error("uSES not initialized!");
  };
function Gf(e = qn) {
  return function () {
    return st.useContext(e);
  };
}
var Iw = Gf(),
  $w = Q_,
  X_ = (e) => {
    $w = e;
  },
  Y_ = (e, t) => e === t;
function J_(e = qn) {
  const t = e === qn ? Iw : Gf(e),
    n = (r, o = {}) => {
      const { equalityFn: s = Y_, devModeChecks: i = {} } =
          typeof o == "function" ? { equalityFn: o } : o,
        {
          store: a,
          subscription: l,
          getServerState: u,
          stabilityCheck: d,
          identityFunctionCheck: f,
        } = t();
      st.useRef(!0);
      const m = st.useCallback(
          {
            [r.name](h) {
              return r(h);
            },
          }[r.name],
          [r, d, i.stabilityCheck]
        ),
        S = $w(l.addNestedSub, a.getState, u || a.getState, m, s);
      return st.useDebugValue(S), S;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Z = J_();
function Z_(e) {
  e();
}
function e2() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Z_(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = (t = { callback: n, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var $m = { notify() {}, get: () => [] };
function t2(e, t) {
  let n,
    r = $m,
    o = 0,
    s = !1;
  function i(y) {
    d();
    const w = r.subscribe(y);
    let v = !1;
    return () => {
      v || ((v = !0), w(), f());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function u() {
    return s;
  }
  function d() {
    o++, n || ((n = e.subscribe(l)), (r = e2()));
  }
  function f() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = $m));
  }
  function m() {
    s || ((s = !0), d());
  }
  function S() {
    s && ((s = !1), f());
  }
  const h = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: m,
    tryUnsubscribe: S,
    getListeners: () => r,
  };
  return h;
}
var n2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  r2 = typeof navigator < "u" && navigator.product === "ReactNative",
  o2 = n2 || r2 ? st.useLayoutEffect : st.useEffect;
function s2({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: s = "once",
}) {
  const i = st.useMemo(() => {
      const u = t2(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        identityFunctionCheck: s,
      };
    }, [e, r, o, s]),
    a = st.useMemo(() => e.getState(), [e]);
  o2(() => {
    const { subscription: u } = i;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [i, a]);
  const l = t || qn;
  return st.createElement(l.Provider, { value: i }, n);
}
var i2 = s2;
function zw(e = qn) {
  const t = e === qn ? Iw : Gf(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var a2 = zw();
function l2(e = qn) {
  const t = e === qn ? a2 : zw(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Oe = l2();
X_(G_.useSyncExternalStoreWithSelector);
const c2 = { email: "", password: "" };
function u2() {
  const [e, t] = p.useState(c2),
    n = Oe(),
    { toast: r } = St();
  function o(s) {
    s.preventDefault(),
      n(Ji(e)).then((i) => {
        var a, l, u;
        (a = i == null ? void 0 : i.payload) != null && a.success
          ? r({
              title:
                (l = i == null ? void 0 : i.payload) == null
                  ? void 0
                  : l.message,
            })
          : r({
              title:
                (u = i == null ? void 0 : i.payload) == null
                  ? void 0
                  : u.message,
              variant: "destructive",
            });
      });
  }
  return c.jsxs("div", {
    className: "mx-auto w-full max-w-md space-y-6",
    children: [
      c.jsxs("div", {
        className: "text-center",
        children: [
          c.jsx("h1", {
            className: "text-3xl font-bold tracking-tight text-foreground",
            children: "Sign in to your account",
          }),
          c.jsxs("p", {
            className: "mt-2",
            children: [
              "Don't have an account",
              c.jsx(Cf, {
                className:
                  "font-medium ml-2 text-primary hover:underline text-indigo-600",
                to: "/auth/register",
                children: "Register",
              }),
            ],
          }),
        ],
      }),
      c.jsx(Qs, {
        formControls: dk,
        buttonText: "Sign In",
        formData: e,
        setFormData: t,
        onSubmit: o,
      }),
    ],
  });
}
const d2 = { userName: "", email: "", password: "" };
function f2() {
  const [e, t] = p.useState(d2),
    n = Oe(),
    r = Lt(),
    { toast: o } = St();
  function s(i) {
    i.preventDefault(),
      n(Yi(e)).then((a) => {
        var l, u, d;
        (l = a == null ? void 0 : a.payload) != null && l.success
          ? (o({
              title:
                (u = a == null ? void 0 : a.payload) == null
                  ? void 0
                  : u.message,
            }),
            r("/auth/login"))
          : o({
              title:
                (d = a == null ? void 0 : a.payload) == null
                  ? void 0
                  : d.message,
              variant: "destructive",
            });
      });
  }
  return c.jsxs("div", {
    className: "mx-auto w-full max-w-md space-y-6",
    children: [
      c.jsxs("div", {
        className: "text-center",
        children: [
          c.jsx("h1", {
            className: "text-3xl font-bold tracking-tight text-foreground",
            children: "Create new account",
          }),
          c.jsxs("p", {
            className: "mt-2",
            children: [
              "Already have an account",
              c.jsx(Cf, {
                className:
                  "font-medium ml-2 text-primary hover:underline text-indigo-600",
                to: "/auth/login",
                children: "Login",
              }),
            ],
          }),
        ],
      }),
      c.jsx(Qs, {
        formControls: uk,
        buttonText: "Sign Up",
        formData: e,
        setFormData: t,
        onSubmit: s,
      }),
    ],
  });
}
function p2(e, t) {
  return p.useReducer((n, r) => t[n][r] ?? n, e);
}
var It = (e) => {
  const { present: t, children: n } = e,
    r = h2(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : p.Children.only(n),
    s = ee(r.ref, m2(o));
  return typeof n == "function" || r.isPresent
    ? p.cloneElement(o, { ref: s })
    : null;
};
It.displayName = "Presence";
function h2(e) {
  const [t, n] = p.useState(),
    r = p.useRef({}),
    o = p.useRef(e),
    s = p.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [a, l] = p2(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    p.useEffect(() => {
      const u = Ri(r.current);
      s.current = a === "mounted" ? u : "none";
    }, [a]),
    _e(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const m = s.current,
          S = Ri(u);
        e
          ? l("MOUNT")
          : S === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(d && m !== S ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    _e(() => {
      if (t) {
        const u = (f) => {
            const S = Ri(r.current).includes(f.animationName);
            f.target === t && S && Jn.flushSync(() => l("ANIMATION_END"));
          },
          d = (f) => {
            f.target === t && (s.current = Ri(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: p.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Ri(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function m2(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var qf = "Dialog",
  [Uw, oL] = Ft(qf),
  [g2, $t] = Uw(qf),
  Bw = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      a = p.useRef(null),
      l = p.useRef(null),
      [u = !1, d] = Gn({ prop: r, defaultProp: o, onChange: s });
    return c.jsx(g2, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: qt(),
      titleId: qt(),
      descriptionId: qt(),
      open: u,
      onOpenChange: d,
      onOpenToggle: p.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n,
    });
  };
Bw.displayName = qf;
var Vw = "DialogTrigger",
  Ww = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = $t(Vw, n),
      s = ee(t, o.triggerRef);
    return c.jsx(K.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Yf(o.open),
      ...r,
      ref: s,
      onClick: L(e.onClick, o.onOpenToggle),
    });
  });
Ww.displayName = Vw;
var Qf = "DialogPortal",
  [v2, Hw] = Uw(Qf, { forceMount: void 0 }),
  Kw = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      s = $t(Qf, t);
    return c.jsx(v2, {
      scope: t,
      forceMount: n,
      children: p.Children.map(r, (i) =>
        c.jsx(It, {
          present: n || s.open,
          children: c.jsx(Gs, { asChild: !0, container: o, children: i }),
        })
      ),
    });
  };
Kw.displayName = Qf;
var Ka = "DialogOverlay",
  Gw = p.forwardRef((e, t) => {
    const n = Hw(Ka, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = $t(Ka, e.__scopeDialog);
    return s.modal
      ? c.jsx(It, {
          present: r || s.open,
          children: c.jsx(y2, { ...o, ref: t }),
        })
      : null;
  });
Gw.displayName = Ka;
var y2 = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = $t(Ka, n);
    return c.jsx(Sl, {
      as: Vn,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: c.jsx(K.div, {
        "data-state": Yf(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Pr = "DialogContent",
  qw = p.forwardRef((e, t) => {
    const n = Hw(Pr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = $t(Pr, e.__scopeDialog);
    return c.jsx(It, {
      present: r || s.open,
      children: s.modal
        ? c.jsx(x2, { ...o, ref: t })
        : c.jsx(w2, { ...o, ref: t }),
    });
  });
qw.displayName = Pr;
var x2 = p.forwardRef((e, t) => {
    const n = $t(Pr, e.__scopeDialog),
      r = p.useRef(null),
      o = ee(t, n.contentRef, r);
    return (
      p.useEffect(() => {
        const s = r.current;
        if (s) return Lf(s);
      }, []),
      c.jsx(Qw, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: L(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: L(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent,
            a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: L(e.onFocusOutside, (s) => s.preventDefault()),
      })
    );
  }),
  w2 = p.forwardRef((e, t) => {
    const n = $t(Pr, e.__scopeDialog),
      r = p.useRef(!1),
      o = p.useRef(!1);
    return c.jsx(Qw, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        var i, a;
        (i = e.onCloseAutoFocus) == null || i.call(e, s),
          s.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            s.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (s) => {
        var l, u;
        (l = e.onInteractOutside) == null || l.call(e, s),
          s.defaultPrevented ||
            ((r.current = !0),
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const i = s.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) &&
          s.preventDefault(),
          s.detail.originalEvent.type === "focusin" &&
            o.current &&
            s.preventDefault();
      },
    });
  }),
  Qw = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: s,
        ...i
      } = e,
      a = $t(Pr, n),
      l = p.useRef(null),
      u = ee(t, l);
    return (
      jf(),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(ml, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: c.jsx(Hs, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Yf(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          c.jsxs(c.Fragment, {
            children: [
              c.jsx(S2, { titleId: a.titleId }),
              c.jsx(E2, { contentRef: l, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Xf = "DialogTitle",
  Xw = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = $t(Xf, n);
    return c.jsx(K.h2, { id: o.titleId, ...r, ref: t });
  });
Xw.displayName = Xf;
var Yw = "DialogDescription",
  Jw = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = $t(Yw, n);
    return c.jsx(K.p, { id: o.descriptionId, ...r, ref: t });
  });
Jw.displayName = Yw;
var Zw = "DialogClose",
  e0 = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = $t(Zw, n);
    return c.jsx(K.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: L(e.onClick, () => o.onOpenChange(!1)),
    });
  });
e0.displayName = Zw;
function Yf(e) {
  return e ? "open" : "closed";
}
var t0 = "DialogTitleWarning",
  [sL, n0] = VN(t0, { contentName: Pr, titleName: Xf, docsSlug: "dialog" }),
  S2 = ({ titleId: e }) => {
    const t = n0(t0),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      p.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  C2 = "DialogDescriptionWarning",
  E2 = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      n0(C2).contentName
    }}.`;
    return (
      p.useEffect(() => {
        var s;
        const o =
          (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  r0 = Bw,
  b2 = Ww,
  o0 = Kw,
  Ll = Gw,
  Fl = qw,
  Dl = Xw,
  Il = Jw,
  s0 = e0;
const $l = r0,
  N2 = b2,
  j2 = o0,
  i0 = p.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Ll, {
      className: I(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
i0.displayName = Ll.displayName;
const R2 = Ws(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  Zs = p.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, o) =>
      c.jsxs(j2, {
        children: [
          c.jsx(i0, {}),
          c.jsxs(Fl, {
            ref: o,
            className: I(R2({ side: e }), t),
            ...r,
            children: [
              n,
              c.jsxs(s0, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  c.jsx(Nl, { className: "h-4 w-4" }),
                  c.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
            ],
          }),
        ],
      })
  );
Zs.displayName = Fl.displayName;
const zl = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: I("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
zl.displayName = "SheetHeader";
const Ul = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Dl, {
    ref: n,
    className: I("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
Ul.displayName = Dl.displayName;
const P2 = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Il, { ref: n, className: I("text-sm text-muted-foreground", e), ...t })
);
P2.displayName = Il.displayName;
const k2 = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: c.jsx(VP, {}),
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: c.jsx(QP, {}),
  },
  { id: "orders", label: "Orders", path: "/admin/orders", icon: c.jsx(MP, {}) },
];
function zm({ setOpen: e }) {
  const t = Lt();
  return c.jsx("nav", {
    className: "mt-8 flex-col flex gap-2",
    children: k2.map((n) =>
      c.jsxs(
        "div",
        {
          onClick: () => {
            t(n.path), e && e(!1);
          },
          className:
            "flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground",
          children: [n.icon, c.jsx("span", { children: n.label })],
        },
        n.id
      )
    ),
  });
}
function T2({ open: e, setOpen: t }) {
  const n = Lt();
  return c.jsxs(p.Fragment, {
    children: [
      c.jsx($l, {
        open: e,
        onOpenChange: t,
        children: c.jsx(Zs, {
          side: "left",
          className: "w-64",
          children: c.jsxs("div", {
            className: "flex flex-col h-full",
            children: [
              c.jsx(zl, {
                className: "border-b",
                children: c.jsxs(Ul, {
                  className: "flex gap-2 mt-5 mb-5",
                  children: [
                    c.jsx(dm, { size: 30 }),
                    c.jsx("h1", {
                      className: "text-2xl font-extrabold",
                      children: "Admin Panel",
                    }),
                  ],
                }),
              }),
              c.jsx(zm, { setOpen: t }),
            ],
          }),
        }),
      }),
      c.jsxs("aside", {
        className: "hidden w-64 flex-col border-r bg-background p-6 lg:flex",
        children: [
          c.jsxs("div", {
            onClick: () => n("/admin/dashboard"),
            className: "flex cursor-pointer items-center gap-2",
            children: [
              c.jsx(dm, { size: 30 }),
              c.jsx("h1", {
                className: "text-2xl font-extrabold",
                children: "Admin Panel",
              }),
            ],
          }),
          c.jsx(zm, {}),
        ],
      }),
    ],
  });
}
function _2({ setOpen: e }) {
  const t = Oe();
  function n() {
    t(Kf());
  }
  return c.jsxs("header", {
    className:
      "flex items-center justify-between px-4 py-3 bg-background border-b ",
    children: [
      c.jsxs(oe, {
        onClick: () => e(!0),
        className: "lg:hidden sm:block",
        children: [
          c.jsx(OP, {}),
          c.jsx("span", { className: "sr-only", children: "Toggle Menu" }),
        ],
      }),
      c.jsx("div", {
        className: "flex flex-1 justify-end",
        children: c.jsxs(oe, {
          onClick: n,
          className:
            "inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow",
          children: [c.jsx(Kx, {}), "Logout"],
        }),
      }),
    ],
  });
}
function O2() {
  const [e, t] = p.useState(!1);
  return c.jsxs("div", {
    className: "flex min-h-screen w-full",
    children: [
      c.jsx(T2, { open: e, setOpen: t }),
      c.jsxs("div", {
        className: "flex flex-1 flex-col",
        children: [
          c.jsx(_2, { setOpen: t }),
          c.jsx("main", {
            className: "flex-1 flex-col flex bg-muted/40 p-4 md:p-6",
            children: c.jsx(Sf, {}),
          }),
        ],
      }),
    ],
  });
}
function a0({ className: e, ...t }) {
  return c.jsx("div", {
    className: I("animate-pulse rounded-md bg-muted", e),
    ...t,
  });
}
function l0({
  imageFile: e,
  setImageFile: t,
  imageLoadingState: n,
  uploadedImageUrl: r,
  setUploadedImageUrl: o,
  setImageLoadingState: s,
  isEditMode: i,
  isCustomStyling: a = !1,
}) {
  const l = p.useRef(null);
  function u(h) {
    var w;
    const y = (w = h.target.files) == null ? void 0 : w[0];
    y && t(y);
  }
  function d(h) {
    h.preventDefault();
  }
  function f(h) {
    var w;
    h.preventDefault();
    const y = (w = h.dataTransfer.files) == null ? void 0 : w[0];
    y && t(y);
  }
  function m() {
    t(null), l.current && (l.current.value = "");
  }
  async function S() {
    var w;
    s(!0);
    const h = new FormData();
    h.append("my_file", e);
    const y = await H.post(
      "https://agro-server-2gho.onrender.com/api/admin/products/upload-image",
      h
    );
    (w = y == null ? void 0 : y.data) != null &&
      w.success &&
      (o(y.data.result.url), s(!1));
  }
  return (
    p.useEffect(() => {
      e !== null && S();
    }, [e]),
    c.jsxs("div", {
      className: `w-full  mt-4 ${a ? "" : "max-w-md mx-auto"}`,
      children: [
        c.jsx(me, {
          className: "text-lg font-semibold mb-2 block",
          children: "Upload Image",
        }),
        c.jsxs("div", {
          onDragOver: d,
          onDrop: f,
          className: `${
            i ? "opacity-60" : ""
          } border-2 border-dashed rounded-lg p-4`,
          children: [
            c.jsx(ho, {
              id: "image-upload",
              type: "file",
              className: "hidden",
              ref: l,
              onChange: u,
              disabled: i,
            }),
            e
              ? n
                ? c.jsx(a0, { className: "h-10 bg-gray-100" })
                : c.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      c.jsx("div", {
                        className: "flex items-center",
                        children: c.jsx(BP, {
                          className: "w-8 text-primary mr-2 h-8",
                        }),
                      }),
                      c.jsx("p", {
                        className: "text-sm font-medium",
                        children: e.name,
                      }),
                      c.jsxs(oe, {
                        variant: "ghost",
                        size: "icon",
                        className:
                          "text-muted-foreground hover:text-foreground",
                        onClick: m,
                        children: [
                          c.jsx(Nl, { className: "w-4 h-4" }),
                          c.jsx("span", {
                            className: "sr-only",
                            children: "Remove File",
                          }),
                        ],
                      }),
                    ],
                  })
              : c.jsxs(me, {
                  htmlFor: "image-upload",
                  className: `${
                    i ? "cursor-not-allowed" : ""
                  } flex flex-col items-center justify-center h-32 cursor-pointer`,
                  children: [
                    c.jsx(zP, {
                      className: "w-10 h-10 text-muted-foreground mb-2",
                    }),
                    c.jsx("span", {
                      children: "Drag & drop or click to upload image",
                    }),
                  ],
                }),
          ],
        }),
      ],
    })
  );
}
const A2 = { isLoading: !1, featureImageList: [] },
  oo = te(
    "/order/getFeatureImages",
    async () =>
      (
        await H.get(
          "https://agro-server-2gho.onrender.com/api/common/feature/get"
        )
      ).data
  ),
  M2 = te(
    "/order/addFeatureImage",
    async (e) =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/common/feature/add",
          { image: e }
        )
      ).data
  ),
  L2 = Xt({
    name: "commonSlice",
    initialState: A2,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(oo.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(oo.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.featureImageList = n.payload.data);
        })
        .addCase(oo.rejected, (t) => {
          (t.isLoading = !1), (t.featureImageList = []);
        });
    },
  }),
  F2 = L2.reducer;
function D2() {
  const [e, t] = p.useState(null),
    [n, r] = p.useState(""),
    [o, s] = p.useState(!1),
    i = Oe(),
    { featureImageList: a } = Z((u) => u.commonFeature);
  function l() {
    i(M2(n)).then((u) => {
      var d;
      (d = u == null ? void 0 : u.payload) != null &&
        d.success &&
        (i(oo()), t(null), r(""));
    });
  }
  return (
    p.useEffect(() => {
      i(oo());
    }, [i]),
    c.jsxs("div", {
      children: [
        c.jsx(l0, {
          imageFile: e,
          setImageFile: t,
          uploadedImageUrl: n,
          setUploadedImageUrl: r,
          setImageLoadingState: s,
          imageLoadingState: o,
          isCustomStyling: !0,
        }),
        c.jsx(oe, { onClick: l, className: "mt-5 w-full", children: "Upload" }),
        c.jsx("div", {
          className: "flex flex-col gap-4 mt-5",
          children:
            a && a.length > 0
              ? a.map((u) =>
                  c.jsx("div", {
                    className: "relative",
                    children: c.jsx("img", {
                      src: u.image,
                      className: "w-full h-[300px] object-cover rounded-t-lg",
                    }),
                  })
                )
              : null,
        }),
      ],
    })
  );
}
const Yt = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: I("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t,
  })
);
Yt.displayName = "Card";
const Po = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: I("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
Po.displayName = "CardHeader";
const ko = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("h3", {
    ref: n,
    className: I("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
ko.displayName = "CardTitle";
const I2 = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("p", { ref: n, className: I("text-sm text-muted-foreground", e), ...t })
);
I2.displayName = "CardDescription";
const nr = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: I("p-6 pt-0", e), ...t })
);
nr.displayName = "CardContent";
const Bl = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: I("flex items-center p-6 pt-0", e), ...t })
);
Bl.displayName = "CardFooter";
function $2({
  product: e,
  setFormData: t,
  setOpenCreateProductsDialog: n,
  setCurrentEditedId: r,
  handleDelete: o,
}) {
  return c.jsx(Yt, {
    className: "w-full max-w-sm mx-auto",
    children: c.jsxs("div", {
      children: [
        c.jsx("div", {
          className: "relative",
          children: c.jsx("img", {
            src: e == null ? void 0 : e.image,
            alt: e == null ? void 0 : e.title,
            className: "w-full h-[300px] object-cover rounded-t-lg",
          }),
        }),
        c.jsxs(nr, {
          children: [
            c.jsx("h2", {
              className: "text-xl font-bold mb-2 mt-2",
              children: e == null ? void 0 : e.title,
            }),
            c.jsxs("div", {
              className: "flex justify-between items-center mb-2",
              children: [
                c.jsxs("span", {
                  className: `${
                    (e == null ? void 0 : e.salePrice) > 0 ? "line-through" : ""
                  } text-lg font-semibold text-primary`,
                  children: ["₹", e == null ? void 0 : e.price],
                }),
                (e == null ? void 0 : e.salePrice) > 0
                  ? c.jsxs("span", {
                      className: "text-lg font-bold",
                      children: ["₹", e == null ? void 0 : e.salePrice],
                    })
                  : null,
              ],
            }),
          ],
        }),
        c.jsxs(Bl, {
          className: "flex justify-between items-center",
          children: [
            c.jsx(oe, {
              onClick: () => {
                n(!0), r(e == null ? void 0 : e._id), t(e);
              },
              children: "Edit",
            }),
            c.jsx(oe, {
              onClick: () => o(e == null ? void 0 : e._id),
              children: "Delete",
            }),
          ],
        }),
      ],
    }),
  });
}
const z2 = { isLoading: !1, productList: [] },
  U2 = te("/products/addnewproduct", async (e) => {
    const t = await H.post(
      "https://agro-server-2gho.onrender.com/api/admin/products/add",
      e,
      { headers: { "Content-Type": "application/json" } }
    );
    return t == null ? void 0 : t.data;
  }),
  ur = te("/products/fetchAllProducts", async () => {
    const e = await H.get(
      "https://agro-server-2gho.onrender.com/api/admin/products/get"
    );
    return e == null ? void 0 : e.data;
  }),
  B2 = te("/products/editProduct", async ({ id: e, formData: t }) => {
    const n = await H.put(
      `https://agro-server-2gho.onrender.com/api/admin/products/edit/${e}`,
      t,
      { headers: { "Content-Type": "application/json" } }
    );
    return n == null ? void 0 : n.data;
  }),
  V2 = te("/products/deleteProduct", async (e) => {
    const t = await H.delete(
      `https://agro-server-2gho.onrender.com/api/admin/products/delete/${e}`
    );
    return t == null ? void 0 : t.data;
  }),
  W2 = Xt({
    name: "adminProducts",
    initialState: z2,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(ur.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(ur.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.productList = n.payload.data);
        })
        .addCase(ur.rejected, (t, n) => {
          (t.isLoading = !1), (t.productList = []);
        });
    },
  }),
  H2 = W2.reducer,
  Pi = {
    image: null,
    title: "",
    description: "",
    category: "",
    price: "",
    salePrice: "",
    totalStock: "",
    averageReview: 0,
  };
function K2() {
  const [e, t] = p.useState(!1),
    [n, r] = p.useState(Pi),
    [o, s] = p.useState(null),
    [i, a] = p.useState(""),
    [l, u] = p.useState(!1),
    [d, f] = p.useState(null),
    { productList: m } = Z((g) => g.adminProducts),
    S = Oe(),
    { toast: h } = St();
  function y(g) {
    g.preventDefault(),
      d !== null
        ? S(B2({ id: d, formData: n })).then((x) => {
            var C;
            (C = x == null ? void 0 : x.payload) != null &&
              C.success &&
              (S(ur()), r(Pi), t(!1), f(null));
          })
        : S(U2({ ...n, image: i })).then((x) => {
            var C;
            (C = x == null ? void 0 : x.payload) != null &&
              C.success &&
              (S(ur()),
              t(!1),
              s(null),
              r(Pi),
              h({ title: "Product add successfully" }));
          });
  }
  function w(g) {
    S(V2(g)).then((x) => {
      var C;
      (C = x == null ? void 0 : x.payload) != null && C.success && S(ur());
    });
  }
  function v() {
    return Object.keys(n)
      .filter((g) => g !== "averageReview")
      .map((g) => n[g] !== "")
      .every((g) => g);
  }
  return (
    p.useEffect(() => {
      S(ur());
    }, [S]),
    c.jsxs(p.Fragment, {
      children: [
        c.jsx("div", {
          className: "mb-5 w-full flex justify-end",
          children: c.jsx(oe, {
            onClick: () => t(!0),
            children: "Add New Product",
          }),
        }),
        c.jsx("div", {
          className: "grid gap-4 md:grid-cols-3 lg:grid-cols-4",
          children:
            m && m.length > 0
              ? m.map((g) =>
                  c.jsx($2, {
                    setFormData: r,
                    setOpenCreateProductsDialog: t,
                    setCurrentEditedId: f,
                    product: g,
                    handleDelete: w,
                  })
                )
              : null,
        }),
        c.jsx($l, {
          open: e,
          onOpenChange: () => {
            t(!1), f(null), r(Pi);
          },
          children: c.jsxs(Zs, {
            side: "right",
            className: "overflow-auto",
            children: [
              c.jsx(zl, {
                children: c.jsx(Ul, {
                  children: d !== null ? "Edit Product" : "Add New Product",
                }),
              }),
              c.jsx(l0, {
                imageFile: o,
                setImageFile: s,
                uploadedImageUrl: i,
                setUploadedImageUrl: a,
                setImageLoadingState: u,
                imageLoadingState: l,
                isEditMode: d !== null,
              }),
              c.jsx("div", {
                className: "py-6",
                children: c.jsx(Qs, {
                  onSubmit: y,
                  formData: n,
                  setFormData: r,
                  buttonText: d !== null ? "Edit" : "Add",
                  formControls: fk,
                  isBtnDisabled: !v(),
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Jf = r0,
  G2 = o0,
  c0 = p.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Ll, {
      ref: n,
      className: I(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
c0.displayName = Ll.displayName;
const Vl = p.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(G2, {
    children: [
      c.jsx(c0, {}),
      c.jsxs(Fl, {
        ref: r,
        className: I(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...n,
        children: [
          t,
          c.jsxs(s0, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              c.jsx(Nl, { className: "h-4 w-4" }),
              c.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
Vl.displayName = Fl.displayName;
const q2 = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Dl, {
    ref: n,
    className: I("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
q2.displayName = Dl.displayName;
const Q2 = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Il, { ref: n, className: I("text-sm text-muted-foreground", e), ...t })
);
Q2.displayName = Il.displayName;
const Zf = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    className: "relative w-full overflow-auto",
    children: c.jsx("table", {
      ref: n,
      className: I("w-full caption-bottom text-sm", e),
      ...t,
    }),
  })
);
Zf.displayName = "Table";
const ep = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("thead", { ref: n, className: I("[&_tr]:border-b", e), ...t })
);
ep.displayName = "TableHeader";
const tp = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("tbody", {
    ref: n,
    className: I("[&_tr:last-child]:border-0", e),
    ...t,
  })
);
tp.displayName = "TableBody";
const X2 = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("tfoot", {
    ref: n,
    className: I("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
    ...t,
  })
);
X2.displayName = "TableFooter";
const Fs = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("tr", {
    ref: n,
    className: I(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t,
  })
);
Fs.displayName = "TableRow";
const Rt = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("th", {
    ref: n,
    className: I(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t,
  })
);
Rt.displayName = "TableHead";
const Pt = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("td", {
    ref: n,
    className: I("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t,
  })
);
Pt.displayName = "TableCell";
const Y2 = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("caption", {
    ref: n,
    className: I("mt-4 text-sm text-muted-foreground", e),
    ...t,
  })
);
Y2.displayName = "TableCaption";
var J2 = "Separator",
  Um = "horizontal",
  Z2 = ["horizontal", "vertical"],
  u0 = p.forwardRef((e, t) => {
    const { decorative: n, orientation: r = Um, ...o } = e,
      s = eO(r) ? r : Um,
      a = n
        ? { role: "none" }
        : {
            "aria-orientation": s === "vertical" ? s : void 0,
            role: "separator",
          };
    return c.jsx(K.div, { "data-orientation": s, ...a, ...o, ref: t });
  });
u0.displayName = J2;
function eO(e) {
  return Z2.includes(e);
}
var d0 = u0;
const ei = p.forwardRef(
  (
    { className: e, orientation: t = "horizontal", decorative: n = !0, ...r },
    o
  ) =>
    c.jsx(d0, {
      ref: o,
      decorative: n,
      orientation: t,
      className: I(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r,
    })
);
ei.displayName = d0.displayName;
const tO = Ws(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function mr({ className: e, variant: t, ...n }) {
  return c.jsx("div", { className: I(tO({ variant: t }), e), ...n });
}
const nO = { orderList: [], orderDetails: null },
  ls = te(
    "/order/getAllOrdersForAdmin",
    async () =>
      (
        await H.get(
          "https://agro-server-2gho.onrender.com/api/admin/orders/get"
        )
      ).data
  ),
  cs = te(
    "/order/getOrderDetailsForAdmin",
    async (e) =>
      (
        await H.get(
          `https://agro-server-2gho.onrender.com/api/admin/orders/details/${e}`
        )
      ).data
  ),
  rO = te(
    "/order/updateOrderStatus",
    async ({ id: e, orderStatus: t }) =>
      (
        await H.put(
          `https://agro-server-2gho.onrender.com/api/admin/orders/update/${e}`,
          { orderStatus: t }
        )
      ).data
  ),
  f0 = Xt({
    name: "adminOrderSlice",
    initialState: nO,
    reducers: {
      resetOrderDetails: (e) => {
        e.orderDetails = null;
      },
    },
    extraReducers: (e) => {
      e.addCase(ls.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(ls.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.orderList = n.payload.data);
        })
        .addCase(ls.rejected, (t) => {
          (t.isLoading = !1), (t.orderList = []);
        })
        .addCase(cs.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(cs.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.orderDetails = n.payload.data);
        })
        .addCase(cs.rejected, (t) => {
          (t.isLoading = !1), (t.orderDetails = null);
        });
    },
  }),
  { resetOrderDetails: oO } = f0.actions,
  sO = f0.reducer,
  Bm = { status: "" };
function iO({ orderDetails: e }) {
  var a, l, u, d, f;
  const [t, n] = p.useState(Bm),
    { user: r } = Z((m) => m.auth),
    o = Oe(),
    { toast: s } = St();
  function i(m) {
    m.preventDefault();
    const { status: S } = t;
    o(rO({ id: e == null ? void 0 : e._id, orderStatus: S })).then((h) => {
      var y, w;
      (y = h == null ? void 0 : h.payload) != null &&
        y.success &&
        (o(cs(e == null ? void 0 : e._id)),
        o(ls()),
        n(Bm),
        s({
          title:
            (w = h == null ? void 0 : h.payload) == null ? void 0 : w.message,
        }));
    });
  }
  return c.jsx(Vl, {
    className: "sm:max-w-[600px]",
    children: c.jsxs("div", {
      className: "grid gap-6",
      children: [
        c.jsxs("div", {
          className: "grid gap-2",
          children: [
            c.jsxs("div", {
              className: "flex mt-6 items-center justify-between",
              children: [
                c.jsx("p", { className: "font-medium", children: "Order ID" }),
                c.jsx(me, { children: e == null ? void 0 : e._id }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Order Date",
                }),
                c.jsx(me, {
                  children: e == null ? void 0 : e.orderDate.split("T")[0],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Order Price",
                }),
                c.jsxs(me, {
                  children: ["₹", e == null ? void 0 : e.totalAmount],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Payment method",
                }),
                c.jsx(me, { children: e == null ? void 0 : e.paymentMethod }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Payment Status",
                }),
                c.jsx(me, { children: e == null ? void 0 : e.paymentStatus }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Order Status",
                }),
                c.jsx(me, {
                  children: c.jsx(mr, {
                    className: `py-1 px-3 ${
                      (e == null ? void 0 : e.orderStatus) === "confirmed"
                        ? "bg-green-500"
                        : (e == null ? void 0 : e.orderStatus) === "rejected"
                        ? "bg-red-600"
                        : "bg-black"
                    }`,
                    children: e == null ? void 0 : e.orderStatus,
                  }),
                }),
              ],
            }),
          ],
        }),
        c.jsx(ei, {}),
        c.jsx("div", {
          className: "grid gap-4",
          children: c.jsxs("div", {
            className: "grid gap-2",
            children: [
              c.jsx("div", {
                className: "font-medium",
                children: "Order Details",
              }),
              c.jsx("ul", {
                className: "grid gap-3",
                children:
                  e != null &&
                  e.cartItems &&
                  (e == null ? void 0 : e.cartItems.length) > 0
                    ? e == null
                      ? void 0
                      : e.cartItems.map((m) =>
                          c.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [
                              c.jsxs("span", {
                                children: ["Title: ", m.title],
                              }),
                              c.jsxs("span", {
                                children: ["Quantity: ", m.quantity],
                              }),
                              c.jsxs("span", {
                                children: ["Price: ₹", m.price],
                              }),
                            ],
                          })
                        )
                    : null,
              }),
            ],
          }),
        }),
        c.jsx("div", {
          className: "grid gap-4",
          children: c.jsxs("div", {
            className: "grid gap-2",
            children: [
              c.jsx("div", {
                className: "font-medium",
                children: "Shipping Info",
              }),
              c.jsxs("div", {
                className: "grid gap-0.5 text-muted-foreground",
                children: [
                  c.jsx("span", { children: r.userName }),
                  c.jsx("span", {
                    children:
                      (a = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : a.address,
                  }),
                  c.jsx("span", {
                    children:
                      (l = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : l.city,
                  }),
                  c.jsx("span", {
                    children:
                      (u = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : u.pincode,
                  }),
                  c.jsx("span", {
                    children:
                      (d = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : d.phone,
                  }),
                  c.jsx("span", {
                    children:
                      (f = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : f.notes,
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsx("div", {
          children: c.jsx(Qs, {
            formControls: [
              {
                label: "Order Status",
                name: "status",
                componentType: "select",
                options: [
                  { id: "pending", label: "Pending" },
                  { id: "inProcess", label: "In Process" },
                  { id: "inShipping", label: "In Shipping" },
                  { id: "delivered", label: "Delivered" },
                  { id: "rejected", label: "Rejected" },
                ],
              },
            ],
            formData: t,
            setFormData: n,
            buttonText: "Update Order Status",
            onSubmit: i,
          }),
        }),
      ],
    }),
  });
}
function aO() {
  const [e, t] = p.useState(!1),
    { orderList: n, orderDetails: r } = Z((i) => i.adminOrder),
    o = Oe();
  function s(i) {
    o(cs(i));
  }
  return (
    p.useEffect(() => {
      o(ls());
    }, [o]),
    p.useEffect(() => {
      r !== null && t(!0);
    }, [r]),
    c.jsxs(Yt, {
      children: [
        c.jsx(Po, { children: c.jsx(ko, { children: "All Orders" }) }),
        c.jsx(nr, {
          children: c.jsxs(Zf, {
            children: [
              c.jsx(ep, {
                children: c.jsxs(Fs, {
                  children: [
                    c.jsx(Rt, { children: "Order ID" }),
                    c.jsx(Rt, { children: "Order Date" }),
                    c.jsx(Rt, { children: "Order Status" }),
                    c.jsx(Rt, { children: "Order Price" }),
                    c.jsx(Rt, {
                      children: c.jsx("span", {
                        className: "sr-only",
                        children: "Details",
                      }),
                    }),
                  ],
                }),
              }),
              c.jsx(tp, {
                children:
                  n && n.length > 0
                    ? n.map((i) =>
                        c.jsxs(Fs, {
                          children: [
                            c.jsx(Pt, { children: i == null ? void 0 : i._id }),
                            c.jsx(Pt, {
                              children:
                                i == null ? void 0 : i.orderDate.split("T")[0],
                            }),
                            c.jsx(Pt, {
                              children: c.jsx(mr, {
                                className: `py-1 px-3 ${
                                  (i == null ? void 0 : i.orderStatus) ===
                                  "confirmed"
                                    ? "bg-green-500"
                                    : (i == null ? void 0 : i.orderStatus) ===
                                      "rejected"
                                    ? "bg-red-600"
                                    : "bg-black"
                                }`,
                                children: i == null ? void 0 : i.orderStatus,
                              }),
                            }),
                            c.jsxs(Pt, {
                              children: [
                                "₹",
                                i == null ? void 0 : i.totalAmount,
                              ],
                            }),
                            c.jsx(Pt, {
                              children: c.jsxs(Jf, {
                                open: e,
                                onOpenChange: () => {
                                  t(!1), o(oO());
                                },
                                children: [
                                  c.jsx(oe, {
                                    onClick: () =>
                                      s(i == null ? void 0 : i._id),
                                    children: "View Details",
                                  }),
                                  c.jsx(iO, { orderDetails: r }),
                                ],
                              }),
                            }),
                          ],
                        })
                      )
                    : null,
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function lO() {
  return c.jsx("div", { children: c.jsx(aO, {}) });
}
function cO() {
  return c.jsx("div", { children: "admin features" });
}
var Vc = "rovingFocusGroup.onEntryFocus",
  uO = { bubbles: !1, cancelable: !0 },
  Wl = "RovingFocusGroup",
  [pd, p0, dO] = pl(Wl),
  [fO, Hl] = Ft(Wl, [dO]),
  [pO, hO] = fO(Wl),
  h0 = p.forwardRef((e, t) =>
    c.jsx(pd.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: c.jsx(pd.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: c.jsx(mO, { ...e, ref: t }),
      }),
    })
  );
h0.displayName = Wl;
var mO = p.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: s,
        currentTabStopId: i,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        preventScrollOnEntryFocus: d = !1,
        ...f
      } = e,
      m = p.useRef(null),
      S = ee(t, m),
      h = hl(s),
      [y = null, w] = Gn({ prop: i, defaultProp: a, onChange: l }),
      [v, g] = p.useState(!1),
      x = De(u),
      C = p0(n),
      E = p.useRef(!1),
      [N, b] = p.useState(0);
    return (
      p.useEffect(() => {
        const j = m.current;
        if (j)
          return j.addEventListener(Vc, x), () => j.removeEventListener(Vc, x);
      }, [x]),
      c.jsx(pO, {
        scope: n,
        orientation: r,
        dir: h,
        loop: o,
        currentTabStopId: y,
        onItemFocus: p.useCallback((j) => w(j), [w]),
        onItemShiftTab: p.useCallback(() => g(!0), []),
        onFocusableItemAdd: p.useCallback(() => b((j) => j + 1), []),
        onFocusableItemRemove: p.useCallback(() => b((j) => j - 1), []),
        children: c.jsx(K.div, {
          tabIndex: v || N === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: S,
          style: { outline: "none", ...e.style },
          onMouseDown: L(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: L(e.onFocus, (j) => {
            const O = !E.current;
            if (j.target === j.currentTarget && O && !v) {
              const _ = new CustomEvent(Vc, uO);
              if ((j.currentTarget.dispatchEvent(_), !_.defaultPrevented)) {
                const B = C().filter((W) => W.focusable),
                  M = B.find((W) => W.active),
                  G = B.find((W) => W.id === y),
                  U = [M, G, ...B].filter(Boolean).map((W) => W.ref.current);
                v0(U, d);
              }
            }
            E.current = !1;
          }),
          onBlur: L(e.onBlur, () => g(!1)),
        }),
      })
    );
  }),
  m0 = "RovingFocusGroupItem",
  g0 = p.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: s,
        ...i
      } = e,
      a = qt(),
      l = s || a,
      u = hO(m0, n),
      d = u.currentTabStopId === l,
      f = p0(n),
      { onFocusableItemAdd: m, onFocusableItemRemove: S } = u;
    return (
      p.useEffect(() => {
        if (r) return m(), () => S();
      }, [r, m, S]),
      c.jsx(pd.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: c.jsx(K.span, {
          tabIndex: d ? 0 : -1,
          "data-orientation": u.orientation,
          ...i,
          ref: t,
          onMouseDown: L(e.onMouseDown, (h) => {
            r ? u.onItemFocus(l) : h.preventDefault();
          }),
          onFocus: L(e.onFocus, () => u.onItemFocus(l)),
          onKeyDown: L(e.onKeyDown, (h) => {
            if (h.key === "Tab" && h.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (h.target !== h.currentTarget) return;
            const y = yO(h, u.orientation, u.dir);
            if (y !== void 0) {
              if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
              h.preventDefault();
              let v = f()
                .filter((g) => g.focusable)
                .map((g) => g.ref.current);
              if (y === "last") v.reverse();
              else if (y === "prev" || y === "next") {
                y === "prev" && v.reverse();
                const g = v.indexOf(h.currentTarget);
                v = u.loop ? xO(v, g + 1) : v.slice(g + 1);
              }
              setTimeout(() => v0(v));
            }
          }),
        }),
      })
    );
  });
g0.displayName = m0;
var gO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function vO(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function yO(e, t, n) {
  const r = vO(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return gO[r];
}
function v0(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function xO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var y0 = h0,
  x0 = g0,
  hd = ["Enter", " "],
  wO = ["ArrowDown", "PageUp", "Home"],
  w0 = ["ArrowUp", "PageDown", "End"],
  SO = [...wO, ...w0],
  CO = { ltr: [...hd, "ArrowRight"], rtl: [...hd, "ArrowLeft"] },
  EO = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
  ti = "Menu",
  [Ds, bO, NO] = pl(ti),
  [_r, S0] = Ft(ti, [NO, yl, Hl]),
  Kl = yl(),
  C0 = Hl(),
  [jO, Or] = _r(ti),
  [RO, ni] = _r(ti),
  E0 = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      a = Kl(t),
      [l, u] = p.useState(null),
      d = p.useRef(!1),
      f = De(s),
      m = hl(o);
    return (
      p.useEffect(() => {
        const S = () => {
            (d.current = !0),
              document.addEventListener("pointerdown", h, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener("pointermove", h, {
                capture: !0,
                once: !0,
              });
          },
          h = () => (d.current = !1);
        return (
          document.addEventListener("keydown", S, { capture: !0 }),
          () => {
            document.removeEventListener("keydown", S, { capture: !0 }),
              document.removeEventListener("pointerdown", h, { capture: !0 }),
              document.removeEventListener("pointermove", h, { capture: !0 });
          }
        );
      }, []),
      c.jsx(Qy, {
        ...a,
        children: c.jsx(jO, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: l,
          onContentChange: u,
          children: c.jsx(RO, {
            scope: t,
            onClose: p.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: d,
            dir: m,
            modal: i,
            children: r,
          }),
        }),
      })
    );
  };
E0.displayName = ti;
var PO = "MenuAnchor",
  np = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = Kl(n);
    return c.jsx(Xy, { ...o, ...r, ref: t });
  });
np.displayName = PO;
var rp = "MenuPortal",
  [kO, b0] = _r(rp, { forceMount: void 0 }),
  N0 = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      s = Or(rp, t);
    return c.jsx(kO, {
      scope: t,
      forceMount: n,
      children: c.jsx(It, {
        present: n || s.open,
        children: c.jsx(Gs, { asChild: !0, container: o, children: r }),
      }),
    });
  };
N0.displayName = rp;
var yt = "MenuContent",
  [TO, op] = _r(yt),
  j0 = p.forwardRef((e, t) => {
    const n = b0(yt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Or(yt, e.__scopeMenu),
      i = ni(yt, e.__scopeMenu);
    return c.jsx(Ds.Provider, {
      scope: e.__scopeMenu,
      children: c.jsx(It, {
        present: r || s.open,
        children: c.jsx(Ds.Slot, {
          scope: e.__scopeMenu,
          children: i.modal
            ? c.jsx(_O, { ...o, ref: t })
            : c.jsx(OO, { ...o, ref: t }),
        }),
      }),
    });
  }),
  _O = p.forwardRef((e, t) => {
    const n = Or(yt, e.__scopeMenu),
      r = p.useRef(null),
      o = ee(t, r);
    return (
      p.useEffect(() => {
        const s = r.current;
        if (s) return Lf(s);
      }, []),
      c.jsx(sp, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: L(e.onFocusOutside, (s) => s.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => n.onOpenChange(!1),
      })
    );
  }),
  OO = p.forwardRef((e, t) => {
    const n = Or(yt, e.__scopeMenu);
    return c.jsx(sp, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1),
    });
  }),
  sp = p.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: a,
        onEntryFocus: l,
        onEscapeKeyDown: u,
        onPointerDownOutside: d,
        onFocusOutside: f,
        onInteractOutside: m,
        onDismiss: S,
        disableOutsideScroll: h,
        ...y
      } = e,
      w = Or(yt, n),
      v = ni(yt, n),
      g = Kl(n),
      x = C0(n),
      C = bO(n),
      [E, N] = p.useState(null),
      b = p.useRef(null),
      j = ee(t, b, w.onContentChange),
      O = p.useRef(0),
      _ = p.useRef(""),
      B = p.useRef(0),
      M = p.useRef(null),
      G = p.useRef("right"),
      A = p.useRef(0),
      U = h ? Sl : p.Fragment,
      W = h ? { as: Vn, allowPinchZoom: !0 } : void 0,
      $ = (P) => {
        var z, se;
        const D = _.current + P,
          V = C().filter((ce) => !ce.disabled),
          X = document.activeElement,
          je =
            (z = V.find((ce) => ce.ref.current === X)) == null
              ? void 0
              : z.textValue,
          ge = V.map((ce) => ce.textValue),
          et = WO(ge, D, je),
          Se =
            (se = V.find((ce) => ce.textValue === et)) == null
              ? void 0
              : se.ref.current;
        (function ce(ne) {
          (_.current = ne),
            window.clearTimeout(O.current),
            ne !== "" && (O.current = window.setTimeout(() => ce(""), 1e3));
        })(D),
          Se && setTimeout(() => Se.focus());
      };
    p.useEffect(() => () => window.clearTimeout(O.current), []), jf();
    const k = p.useCallback((P) => {
      var V, X;
      return (
        G.current === ((V = M.current) == null ? void 0 : V.side) &&
        KO(P, (X = M.current) == null ? void 0 : X.area)
      );
    }, []);
    return c.jsx(TO, {
      scope: n,
      searchRef: _,
      onItemEnter: p.useCallback(
        (P) => {
          k(P) && P.preventDefault();
        },
        [k]
      ),
      onItemLeave: p.useCallback(
        (P) => {
          var D;
          k(P) || ((D = b.current) == null || D.focus(), N(null));
        },
        [k]
      ),
      onTriggerLeave: p.useCallback(
        (P) => {
          k(P) && P.preventDefault();
        },
        [k]
      ),
      pointerGraceTimerRef: B,
      onPointerGraceIntentChange: p.useCallback((P) => {
        M.current = P;
      }, []),
      children: c.jsx(U, {
        ...W,
        children: c.jsx(ml, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: L(s, (P) => {
            var D;
            P.preventDefault(),
              (D = b.current) == null || D.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: i,
          children: c.jsx(Hs, {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onEscapeKeyDown: u,
            onPointerDownOutside: d,
            onFocusOutside: f,
            onInteractOutside: m,
            onDismiss: S,
            children: c.jsx(y0, {
              asChild: !0,
              ...x,
              dir: v.dir,
              orientation: "vertical",
              loop: r,
              currentTabStopId: E,
              onCurrentTabStopIdChange: N,
              onEntryFocus: L(l, (P) => {
                v.isUsingKeyboardRef.current || P.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: c.jsx(Yy, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": B0(w.open),
                "data-radix-menu-content": "",
                dir: v.dir,
                ...g,
                ...y,
                ref: j,
                style: { outline: "none", ...y.style },
                onKeyDown: L(y.onKeyDown, (P) => {
                  const V =
                      P.target.closest("[data-radix-menu-content]") ===
                      P.currentTarget,
                    X = P.ctrlKey || P.altKey || P.metaKey,
                    je = P.key.length === 1;
                  V &&
                    (P.key === "Tab" && P.preventDefault(),
                    !X && je && $(P.key));
                  const ge = b.current;
                  if (P.target !== ge || !SO.includes(P.key)) return;
                  P.preventDefault();
                  const Se = C()
                    .filter((z) => !z.disabled)
                    .map((z) => z.ref.current);
                  w0.includes(P.key) && Se.reverse(), BO(Se);
                }),
                onBlur: L(e.onBlur, (P) => {
                  P.currentTarget.contains(P.target) ||
                    (window.clearTimeout(O.current), (_.current = ""));
                }),
                onPointerMove: L(
                  e.onPointerMove,
                  Is((P) => {
                    const D = P.target,
                      V = A.current !== P.clientX;
                    if (P.currentTarget.contains(D) && V) {
                      const X = P.clientX > A.current ? "right" : "left";
                      (G.current = X), (A.current = P.clientX);
                    }
                  })
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
j0.displayName = yt;
var AO = "MenuGroup",
  ip = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return c.jsx(K.div, { role: "group", ...r, ref: t });
  });
ip.displayName = AO;
var MO = "MenuLabel",
  R0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return c.jsx(K.div, { ...r, ref: t });
  });
R0.displayName = MO;
var Ga = "MenuItem",
  Vm = "menu.itemSelect",
  Gl = p.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      s = p.useRef(null),
      i = ni(Ga, e.__scopeMenu),
      a = op(Ga, e.__scopeMenu),
      l = ee(t, s),
      u = p.useRef(!1),
      d = () => {
        const f = s.current;
        if (!n && f) {
          const m = new CustomEvent(Vm, { bubbles: !0, cancelable: !0 });
          f.addEventListener(Vm, (S) => (r == null ? void 0 : r(S)), {
            once: !0,
          }),
            Nf(f, m),
            m.defaultPrevented ? (u.current = !1) : i.onClose();
        }
      };
    return c.jsx(P0, {
      ...o,
      ref: l,
      disabled: n,
      onClick: L(e.onClick, d),
      onPointerDown: (f) => {
        var m;
        (m = e.onPointerDown) == null || m.call(e, f), (u.current = !0);
      },
      onPointerUp: L(e.onPointerUp, (f) => {
        var m;
        u.current || (m = f.currentTarget) == null || m.click();
      }),
      onKeyDown: L(e.onKeyDown, (f) => {
        const m = a.searchRef.current !== "";
        n ||
          (m && f.key === " ") ||
          (hd.includes(f.key) && (f.currentTarget.click(), f.preventDefault()));
      }),
    });
  });
Gl.displayName = Ga;
var P0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e,
      i = op(Ga, n),
      a = C0(n),
      l = p.useRef(null),
      u = ee(t, l),
      [d, f] = p.useState(!1),
      [m, S] = p.useState("");
    return (
      p.useEffect(() => {
        const h = l.current;
        h && S((h.textContent ?? "").trim());
      }, [s.children]),
      c.jsx(Ds.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: c.jsx(x0, {
          asChild: !0,
          ...a,
          focusable: !r,
          children: c.jsx(K.div, {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: u,
            onPointerMove: L(
              e.onPointerMove,
              Is((h) => {
                r
                  ? i.onItemLeave(h)
                  : (i.onItemEnter(h),
                    h.defaultPrevented ||
                      h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: L(
              e.onPointerLeave,
              Is((h) => i.onItemLeave(h))
            ),
            onFocus: L(e.onFocus, () => f(!0)),
            onBlur: L(e.onBlur, () => f(!1)),
          }),
        }),
      })
    );
  }),
  LO = "MenuCheckboxItem",
  k0 = p.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return c.jsx(M0, {
      scope: e.__scopeMenu,
      checked: n,
      children: c.jsx(Gl, {
        role: "menuitemcheckbox",
        "aria-checked": qa(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": lp(n),
        onSelect: L(
          o.onSelect,
          () => (r == null ? void 0 : r(qa(n) ? !0 : !n)),
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
k0.displayName = LO;
var T0 = "MenuRadioGroup",
  [FO, DO] = _r(T0, { value: void 0, onValueChange: () => {} }),
  _0 = p.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      s = De(r);
    return c.jsx(FO, {
      scope: e.__scopeMenu,
      value: n,
      onValueChange: s,
      children: c.jsx(ip, { ...o, ref: t }),
    });
  });
_0.displayName = T0;
var O0 = "MenuRadioItem",
  A0 = p.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = DO(O0, e.__scopeMenu),
      s = n === o.value;
    return c.jsx(M0, {
      scope: e.__scopeMenu,
      checked: s,
      children: c.jsx(Gl, {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": lp(s),
        onSelect: L(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        ),
      }),
    });
  });
A0.displayName = O0;
var ap = "MenuItemIndicator",
  [M0, IO] = _r(ap, { checked: !1 }),
  L0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      s = IO(ap, n);
    return c.jsx(It, {
      present: r || qa(s.checked) || s.checked === !0,
      children: c.jsx(K.span, { ...o, ref: t, "data-state": lp(s.checked) }),
    });
  });
L0.displayName = ap;
var $O = "MenuSeparator",
  F0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return c.jsx(K.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...r,
      ref: t,
    });
  });
F0.displayName = $O;
var zO = "MenuArrow",
  D0 = p.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = Kl(n);
    return c.jsx(Jy, { ...o, ...r, ref: t });
  });
D0.displayName = zO;
var UO = "MenuSub",
  [iL, I0] = _r(UO),
  Xo = "MenuSubTrigger",
  $0 = p.forwardRef((e, t) => {
    const n = Or(Xo, e.__scopeMenu),
      r = ni(Xo, e.__scopeMenu),
      o = I0(Xo, e.__scopeMenu),
      s = op(Xo, e.__scopeMenu),
      i = p.useRef(null),
      { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = s,
      u = { __scopeMenu: e.__scopeMenu },
      d = p.useCallback(() => {
        i.current && window.clearTimeout(i.current), (i.current = null);
      }, []);
    return (
      p.useEffect(() => d, [d]),
      p.useEffect(() => {
        const f = a.current;
        return () => {
          window.clearTimeout(f), l(null);
        };
      }, [a, l]),
      c.jsx(np, {
        asChild: !0,
        ...u,
        children: c.jsx(P0, {
          id: o.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": n.open,
          "aria-controls": o.contentId,
          "data-state": B0(n.open),
          ...e,
          ref: fl(t, o.onTriggerChange),
          onClick: (f) => {
            var m;
            (m = e.onClick) == null || m.call(e, f),
              !(e.disabled || f.defaultPrevented) &&
                (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
          },
          onPointerMove: L(
            e.onPointerMove,
            Is((f) => {
              s.onItemEnter(f),
                !f.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !i.current &&
                  (s.onPointerGraceIntentChange(null),
                  (i.current = window.setTimeout(() => {
                    n.onOpenChange(!0), d();
                  }, 100)));
            })
          ),
          onPointerLeave: L(
            e.onPointerLeave,
            Is((f) => {
              var S, h;
              d();
              const m =
                (S = n.content) == null ? void 0 : S.getBoundingClientRect();
              if (m) {
                const y = (h = n.content) == null ? void 0 : h.dataset.side,
                  w = y === "right",
                  v = w ? -5 : 5,
                  g = m[w ? "left" : "right"],
                  x = m[w ? "right" : "left"];
                s.onPointerGraceIntentChange({
                  area: [
                    { x: f.clientX + v, y: f.clientY },
                    { x: g, y: m.top },
                    { x, y: m.top },
                    { x, y: m.bottom },
                    { x: g, y: m.bottom },
                  ],
                  side: y,
                }),
                  window.clearTimeout(a.current),
                  (a.current = window.setTimeout(
                    () => s.onPointerGraceIntentChange(null),
                    300
                  ));
              } else {
                if ((s.onTriggerLeave(f), f.defaultPrevented)) return;
                s.onPointerGraceIntentChange(null);
              }
            })
          ),
          onKeyDown: L(e.onKeyDown, (f) => {
            var S;
            const m = s.searchRef.current !== "";
            e.disabled ||
              (m && f.key === " ") ||
              (CO[r.dir].includes(f.key) &&
                (n.onOpenChange(!0),
                (S = n.content) == null || S.focus(),
                f.preventDefault()));
          }),
        }),
      })
    );
  });
$0.displayName = Xo;
var z0 = "MenuSubContent",
  U0 = p.forwardRef((e, t) => {
    const n = b0(yt, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Or(yt, e.__scopeMenu),
      i = ni(yt, e.__scopeMenu),
      a = I0(z0, e.__scopeMenu),
      l = p.useRef(null),
      u = ee(t, l);
    return c.jsx(Ds.Provider, {
      scope: e.__scopeMenu,
      children: c.jsx(It, {
        present: r || s.open,
        children: c.jsx(Ds.Slot, {
          scope: e.__scopeMenu,
          children: c.jsx(sp, {
            id: a.contentId,
            "aria-labelledby": a.triggerId,
            ...o,
            ref: u,
            align: "start",
            side: i.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (d) => {
              var f;
              i.isUsingKeyboardRef.current &&
                ((f = l.current) == null || f.focus()),
                d.preventDefault();
            },
            onCloseAutoFocus: (d) => d.preventDefault(),
            onFocusOutside: L(e.onFocusOutside, (d) => {
              d.target !== a.trigger && s.onOpenChange(!1);
            }),
            onEscapeKeyDown: L(e.onEscapeKeyDown, (d) => {
              i.onClose(), d.preventDefault();
            }),
            onKeyDown: L(e.onKeyDown, (d) => {
              var S;
              const f = d.currentTarget.contains(d.target),
                m = EO[i.dir].includes(d.key);
              f &&
                m &&
                (s.onOpenChange(!1),
                (S = a.trigger) == null || S.focus(),
                d.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
U0.displayName = z0;
function B0(e) {
  return e ? "open" : "closed";
}
function qa(e) {
  return e === "indeterminate";
}
function lp(e) {
  return qa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function BO(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function VO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function WO(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = VO(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function HO(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x,
      l = t[s].y,
      u = t[i].x,
      d = t[i].y;
    l > r != d > r && n < ((u - a) * (r - l)) / (d - l) + a && (o = !o);
  }
  return o;
}
function KO(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return HO(n, t);
}
function Is(e) {
  return (t) => (t.pointerType === "mouse" ? e(t) : void 0);
}
var GO = E0,
  qO = np,
  QO = N0,
  XO = j0,
  YO = ip,
  JO = R0,
  ZO = Gl,
  eA = k0,
  tA = _0,
  nA = A0,
  rA = L0,
  oA = F0,
  sA = D0,
  iA = $0,
  aA = U0,
  cp = "DropdownMenu",
  [lA, aL] = Ft(cp, [S0]),
  Ke = S0(),
  [cA, V0] = lA(cp),
  W0 = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: s,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      l = Ke(t),
      u = p.useRef(null),
      [d = !1, f] = Gn({ prop: o, defaultProp: s, onChange: i });
    return c.jsx(cA, {
      scope: t,
      triggerId: qt(),
      triggerRef: u,
      contentId: qt(),
      open: d,
      onOpenChange: f,
      onOpenToggle: p.useCallback(() => f((m) => !m), [f]),
      modal: a,
      children: c.jsx(GO, {
        ...l,
        open: d,
        onOpenChange: f,
        dir: r,
        modal: a,
        children: n,
      }),
    });
  };
W0.displayName = cp;
var H0 = "DropdownMenuTrigger",
  K0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      s = V0(H0, n),
      i = Ke(n);
    return c.jsx(qO, {
      asChild: !0,
      ...i,
      children: c.jsx(K.button, {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: fl(t, s.triggerRef),
        onPointerDown: L(e.onPointerDown, (a) => {
          !r &&
            a.button === 0 &&
            a.ctrlKey === !1 &&
            (s.onOpenToggle(), s.open || a.preventDefault());
        }),
        onKeyDown: L(e.onKeyDown, (a) => {
          r ||
            (["Enter", " "].includes(a.key) && s.onOpenToggle(),
            a.key === "ArrowDown" && s.onOpenChange(!0),
            ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        }),
      }),
    });
  });
K0.displayName = H0;
var uA = "DropdownMenuPortal",
  G0 = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = Ke(t);
    return c.jsx(QO, { ...r, ...n });
  };
G0.displayName = uA;
var q0 = "DropdownMenuContent",
  Q0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = V0(q0, n),
      s = Ke(n),
      i = p.useRef(!1);
    return c.jsx(XO, {
      id: o.contentId,
      "aria-labelledby": o.triggerId,
      ...s,
      ...r,
      ref: t,
      onCloseAutoFocus: L(e.onCloseAutoFocus, (a) => {
        var l;
        i.current || (l = o.triggerRef.current) == null || l.focus(),
          (i.current = !1),
          a.preventDefault();
      }),
      onInteractOutside: L(e.onInteractOutside, (a) => {
        const l = a.detail.originalEvent,
          u = l.button === 0 && l.ctrlKey === !0,
          d = l.button === 2 || u;
        (!o.modal || d) && (i.current = !0);
      }),
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
Q0.displayName = q0;
var dA = "DropdownMenuGroup",
  fA = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(YO, { ...o, ...r, ref: t });
  });
fA.displayName = dA;
var pA = "DropdownMenuLabel",
  X0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(JO, { ...o, ...r, ref: t });
  });
X0.displayName = pA;
var hA = "DropdownMenuItem",
  Y0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(ZO, { ...o, ...r, ref: t });
  });
Y0.displayName = hA;
var mA = "DropdownMenuCheckboxItem",
  J0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(eA, { ...o, ...r, ref: t });
  });
J0.displayName = mA;
var gA = "DropdownMenuRadioGroup",
  Z0 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(tA, { ...o, ...r, ref: t });
  });
Z0.displayName = gA;
var vA = "DropdownMenuRadioItem",
  e1 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(nA, { ...o, ...r, ref: t });
  });
e1.displayName = vA;
var yA = "DropdownMenuItemIndicator",
  t1 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(rA, { ...o, ...r, ref: t });
  });
t1.displayName = yA;
var xA = "DropdownMenuSeparator",
  n1 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(oA, { ...o, ...r, ref: t });
  });
n1.displayName = xA;
var wA = "DropdownMenuArrow",
  SA = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(sA, { ...o, ...r, ref: t });
  });
SA.displayName = wA;
var CA = "DropdownMenuSubTrigger",
  r1 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(iA, { ...o, ...r, ref: t });
  });
r1.displayName = CA;
var EA = "DropdownMenuSubContent",
  o1 = p.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Ke(n);
    return c.jsx(aA, {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width":
          "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height":
          "var(--radix-popper-anchor-height)",
      },
    });
  });
o1.displayName = EA;
var bA = W0,
  NA = K0,
  jA = G0,
  s1 = Q0,
  i1 = X0,
  a1 = Y0,
  l1 = J0,
  RA = Z0,
  c1 = e1,
  u1 = t1,
  d1 = n1,
  f1 = r1,
  p1 = o1;
const h1 = bA,
  m1 = NA,
  PA = RA,
  kA = p.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    c.jsxs(f1, {
      ref: o,
      className: I(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        t && "pl-8",
        e
      ),
      ...r,
      children: [n, c.jsx(Hx, { className: "ml-auto h-4 w-4" })],
    })
  );
kA.displayName = f1.displayName;
const TA = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(p1, {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t,
  })
);
TA.displayName = p1.displayName;
const up = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  c.jsx(jA, {
    children: c.jsx(s1, {
      ref: r,
      sideOffset: t,
      className: I(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    }),
  })
);
up.displayName = s1.displayName;
const md = p.forwardRef(({ className: e, inset: t, ...n }, r) =>
  c.jsx(a1, {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n,
  })
);
md.displayName = a1.displayName;
const _A = p.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  c.jsxs(l1, {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      c.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(u1, { children: c.jsx(Df, { className: "h-4 w-4" }) }),
      }),
      t,
    ],
  })
);
_A.displayName = l1.displayName;
const g1 = p.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(c1, {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      c.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(u1, {
          children: c.jsx(IP, { className: "h-2 w-2 fill-current" }),
        }),
      }),
      t,
    ],
  })
);
g1.displayName = c1.displayName;
const v1 = p.forwardRef(({ className: e, inset: t, ...n }, r) =>
  c.jsx(i1, {
    ref: r,
    className: I("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n,
  })
);
v1.displayName = i1.displayName;
const gd = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(d1, { ref: n, className: I("-mx-1 my-1 h-px bg-muted", e), ...t })
);
gd.displayName = d1.displayName;
var dp = "Avatar",
  [OA, lL] = Ft(dp),
  [AA, y1] = OA(dp),
  x1 = p.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [o, s] = p.useState("idle");
    return c.jsx(AA, {
      scope: n,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: s,
      children: c.jsx(K.span, { ...r, ref: t }),
    });
  });
x1.displayName = dp;
var w1 = "AvatarImage",
  S1 = p.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: o = () => {},
        ...s
      } = e,
      i = y1(w1, n),
      a = MA(r),
      l = De((u) => {
        o(u), i.onImageLoadingStatusChange(u);
      });
    return (
      _e(() => {
        a !== "idle" && l(a);
      }, [a, l]),
      a === "loaded" ? c.jsx(K.img, { ...s, ref: t, src: r }) : null
    );
  });
S1.displayName = w1;
var C1 = "AvatarFallback",
  E1 = p.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e,
      s = y1(C1, n),
      [i, a] = p.useState(r === void 0);
    return (
      p.useEffect(() => {
        if (r !== void 0) {
          const l = window.setTimeout(() => a(!0), r);
          return () => window.clearTimeout(l);
        }
      }, [r]),
      i && s.imageLoadingStatus !== "loaded"
        ? c.jsx(K.span, { ...o, ref: t })
        : null
    );
  });
E1.displayName = C1;
function MA(e) {
  const [t, n] = p.useState("idle");
  return (
    _e(() => {
      if (!e) {
        n("error");
        return;
      }
      let r = !0;
      const o = new window.Image(),
        s = (i) => () => {
          r && n(i);
        };
      return (
        n("loading"),
        (o.onload = s("loaded")),
        (o.onerror = s("error")),
        (o.src = e),
        () => {
          r = !1;
        }
      );
    }, [e]),
    t
  );
}
var b1 = x1,
  N1 = S1,
  j1 = E1;
const fp = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(b1, {
    ref: n,
    className: I(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t,
  })
);
fp.displayName = b1.displayName;
const LA = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(N1, { ref: n, className: I("aspect-square h-full w-full", e), ...t })
);
LA.displayName = N1.displayName;
const pp = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(j1, {
    ref: n,
    className: I(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t,
  })
);
pp.displayName = j1.displayName;
const FA = { cartItems: [], isLoading: !1 },
  gr = te(
    "cart/addToCart",
    async ({ userId: e, productId: t, quantity: n }) =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/shop/cart/add",
          { userId: e, productId: t, quantity: n }
        )
      ).data
  ),
  zn = te(
    "cart/fetchCartItems",
    async (e) =>
      (
        await H.get(
          `https://agro-server-2gho.onrender.com/api/shop/cart/get/${e}`
        )
      ).data
  ),
  ea = te(
    "cart/deleteCartItem",
    async ({ userId: e, productId: t }) =>
      (
        await H.delete(
          `https://agro-server-2gho.onrender.com/api/shop/cart/${e}/${t}`
        )
      ).data
  ),
  ta = te(
    "cart/updateCartQuantity",
    async ({ userId: e, productId: t, quantity: n }) =>
      (
        await H.put(
          "https://agro-server-2gho.onrender.com/api/shop/cart/update-cart",
          { userId: e, productId: t, quantity: n }
        )
      ).data
  ),
  DA = Xt({
    name: "shoppingCart",
    initialState: FA,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(gr.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(gr.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.cartItems = n.payload.data);
        })
        .addCase(gr.rejected, (t) => {
          (t.isLoading = !1), (t.cartItems = []);
        })
        .addCase(zn.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(zn.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.cartItems = n.payload.data);
        })
        .addCase(zn.rejected, (t) => {
          (t.isLoading = !1), (t.cartItems = []);
        })
        .addCase(ta.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(ta.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.cartItems = n.payload.data);
        })
        .addCase(ta.rejected, (t) => {
          (t.isLoading = !1), (t.cartItems = []);
        })
        .addCase(ea.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(ea.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.cartItems = n.payload.data);
        })
        .addCase(ea.rejected, (t) => {
          (t.isLoading = !1), (t.cartItems = []);
        });
    },
  }),
  IA = DA.reducer;
function R1({ cartItem: e }) {
  const { user: t } = Z((l) => l.auth),
    { cartItems: n } = Z((l) => l.shopCart),
    { productList: r } = Z((l) => l.shopProducts),
    o = Oe(),
    { toast: s } = St();
  function i(l, u) {
    if (u == "plus") {
      let d = n.items || [];
      if (d.length) {
        const f = d.findIndex(
            (h) => h.productId === (l == null ? void 0 : l.productId)
          ),
          m = r.findIndex((h) => h._id === (l == null ? void 0 : l.productId)),
          S = r[m].totalStock;
        if (f > -1) {
          const h = d[f].quantity;
          if (h + 1 > S) {
            s({
              title: `Only ${h} quantity can be added for this item`,
              variant: "destructive",
            });
            return;
          }
        }
      }
    }
    o(
      ta({
        userId: t == null ? void 0 : t.id,
        productId: l == null ? void 0 : l.productId,
        quantity:
          u === "plus"
            ? (l == null ? void 0 : l.quantity) + 1
            : (l == null ? void 0 : l.quantity) - 1,
      })
    ).then((d) => {
      var f;
      (f = d == null ? void 0 : d.payload) != null &&
        f.success &&
        s({ title: "Cart item is updated successfully" });
    });
  }
  function a(l) {
    o(
      ea({
        userId: t == null ? void 0 : t.id,
        productId: l == null ? void 0 : l.productId,
      })
    ).then((u) => {
      var d;
      (d = u == null ? void 0 : u.payload) != null &&
        d.success &&
        s({ title: "Cart item is deleted successfully" });
    });
  }
  return c.jsxs("div", {
    className: "flex items-center space-x-4",
    children: [
      c.jsx("img", {
        src: e == null ? void 0 : e.image,
        alt: e == null ? void 0 : e.title,
        className: "w-20 h-20 rounded object-cover",
      }),
      c.jsxs("div", {
        className: "flex-1",
        children: [
          c.jsx("h3", {
            className: "font-extrabold",
            children: e == null ? void 0 : e.title,
          }),
          c.jsxs("div", {
            className: "flex items-center gap-2 mt-1",
            children: [
              c.jsxs(oe, {
                variant: "outline",
                className: "h-8 w-8 rounded-full",
                size: "icon",
                disabled: (e == null ? void 0 : e.quantity) === 1,
                onClick: () => i(e, "minus"),
                children: [
                  c.jsx(KP, { className: "w-4 h-4" }),
                  c.jsx("span", { className: "sr-only", children: "Decrease" }),
                ],
              }),
              c.jsx("span", {
                className: "font-semibold",
                children: e == null ? void 0 : e.quantity,
              }),
              c.jsxs(oe, {
                variant: "outline",
                className: "h-8 w-8 rounded-full",
                size: "icon",
                onClick: () => i(e, "plus"),
                children: [
                  c.jsx(qP, { className: "w-4 h-4" }),
                  c.jsx("span", { className: "sr-only", children: "Decrease" }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "flex flex-col items-end",
        children: [
          c.jsxs("p", {
            className: "font-semibold",
            children: [
              "₹",
              (
                ((e == null ? void 0 : e.salePrice) > 0
                  ? e == null
                    ? void 0
                    : e.salePrice
                  : e == null
                  ? void 0
                  : e.price) * (e == null ? void 0 : e.quantity)
              ).toFixed(2),
            ],
          }),
          c.jsx(JP, {
            onClick: () => a(e),
            className: "cursor-pointer mt-1",
            size: 20,
          }),
        ],
      }),
    ],
  });
}
function $A({ cartItems: e, setOpenCartSheet: t }) {
  const n = Lt(),
    r =
      e && e.length > 0
        ? e.reduce(
            (o, s) =>
              o +
              ((s == null ? void 0 : s.salePrice) > 0
                ? s == null
                  ? void 0
                  : s.salePrice
                : s == null
                ? void 0
                : s.price) *
                (s == null ? void 0 : s.quantity),
            0
          )
        : 0;
  return c.jsxs(Zs, {
    className: "sm:max-w-md",
    children: [
      c.jsx(zl, { children: c.jsx(Ul, { children: "Your Cart" }) }),
      c.jsx("div", {
        className: "mt-8 space-y-4",
        children:
          e && e.length > 0 ? e.map((o) => c.jsx(R1, { cartItem: o })) : null,
      }),
      c.jsx("div", {
        className: "mt-8 space-y-4",
        children: c.jsxs("div", {
          className: "flex justify-between",
          children: [
            c.jsx("span", { className: "font-bold", children: "Total" }),
            c.jsxs("span", { className: "font-bold", children: ["₹", r] }),
          ],
        }),
      }),
      c.jsx(oe, {
        onClick: () => {
          n("/shop/checkout"), t(!1);
        },
        className: "w-full mt-6",
        children: "Checkout",
      }),
    ],
  });
}
const zA = "/assets/logo-C4Qw35w2.svg";
function Wm() {
  const e = Lt(),
    t = gn(),
    [n, r] = Ef();
  function o(s) {
    sessionStorage.removeItem("filters");
    const i =
      s.id !== "home" && s.id !== "products" && s.id !== "search"
        ? { category: [s.id] }
        : null;
    sessionStorage.setItem("filters", JSON.stringify(i)),
      t.pathname.includes("listing") && i !== null
        ? r(new URLSearchParams(`?category=${s.id}`))
        : e(s.path);
  }
  return c.jsx("nav", {
    className: "flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row ",
    children: pk.map((s) =>
      c.jsx(
        me,
        {
          onClick: () => o(s),
          className: "text-sm font-medium cursor-pointer",
          children: s.label,
        },
        s.id
      )
    ),
  });
}
function Hm() {
  var a;
  const { user: e } = Z((l) => l.auth),
    { cartItems: t } = Z((l) => l.shopCart),
    [n, r] = p.useState(!1),
    o = Lt(),
    s = Oe();
  function i() {
    s(Kf());
  }
  return (
    p.useEffect(() => {
      s(zn(e == null ? void 0 : e.id));
    }, [s]),
    c.jsxs("div", {
      className: "flex lg:items-center lg:flex-row flex-col gap-4 ",
      children: [
        c.jsxs($l, {
          open: n,
          onOpenChange: () => r(!1),
          children: [
            c.jsxs(oe, {
              onClick: () => r(!0),
              variant: "outline",
              size: "icon",
              className: "relative",
              children: [
                c.jsx(XP, { className: "w-6 h-6" }),
                c.jsx("span", {
                  className:
                    "absolute top-[-5px] right-[2px] font-bold text-sm",
                  children:
                    ((a = t == null ? void 0 : t.items) == null
                      ? void 0
                      : a.length) || 0,
                }),
                c.jsx("span", { className: "sr-only", children: "User cart" }),
              ],
            }),
            c.jsx($A, {
              setOpenCartSheet: r,
              cartItems: t && t.items && t.items.length > 0 ? t.items : [],
            }),
          ],
        }),
        c.jsxs(h1, {
          children: [
            c.jsx(m1, {
              asChild: !0,
              children: c.jsx(fp, {
                className: "bg-black",
                children: c.jsx(pp, {
                  className: "bg-black text-white font-extrabold",
                  children: e == null ? void 0 : e.userName[0].toUpperCase(),
                }),
              }),
            }),
            c.jsxs(up, {
              side: "right",
              className: "w-56",
              children: [
                c.jsxs(v1, {
                  children: ["Logged in as ", e == null ? void 0 : e.userName],
                }),
                c.jsx(gd, {}),
                c.jsxs(md, {
                  onClick: () => o("/shop/account"),
                  children: [
                    c.jsx(ZP, { className: "mr-2 h-4 w-4" }),
                    "Account",
                  ],
                }),
                c.jsx(gd, {}),
                c.jsxs(md, {
                  onClick: i,
                  children: [
                    c.jsx(Kx, { className: "mr-2 h-4 w-4" }),
                    "Logout",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function UA() {
  return (
    Z((e) => e.auth),
    c.jsx("header", {
      className: "fixed top-0 z-40 w-full border-b bg-background",
      children: c.jsxs("div", {
        className: "flex h-16 items-center justify-between px-4 md:px-6",
        children: [
          c.jsxs(Cf, {
            to: "/shop/home",
            className: "flex items-center gap-2",
            children: [
              c.jsx("img", { src: zA, alt: "img", width: 50 }),
              c.jsx("span", {
                className: "font-bold",
                children: "Agro Services",
              }),
            ],
          }),
          c.jsxs($l, {
            children: [
              c.jsx(N2, {
                asChild: !0,
                children: c.jsxs(oe, {
                  variant: "outline",
                  size: "icon",
                  className: "lg:hidden",
                  children: [
                    c.jsx(WP, { className: "h-6 w-6" }),
                    c.jsx("span", {
                      className: "sr-only",
                      children: "Toggle header menu",
                    }),
                  ],
                }),
              }),
              c.jsxs(Zs, {
                side: "left",
                className: "w-full max-w-xs",
                children: [c.jsx(Wm, {}), c.jsx(Hm, {})],
              }),
            ],
          }),
          c.jsx("div", {
            className: "hidden lg:block",
            children: c.jsx(Wm, {}),
          }),
          c.jsx("div", {
            className: "hidden lg:block",
            children: c.jsx(Hm, {}),
          }),
        ],
      }),
    })
  );
}
function BA() {
  return c.jsxs("div", {
    className: "flex flex-col bg-white overflow-hidden",
    children: [
      c.jsx(UA, {}),
      c.jsx("main", {
        className: "flex flex-col w-full",
        children: c.jsx(Sf, {}),
      }),
    ],
  });
}
function VA() {
  return c.jsx("div", { children: "page doesn't exists" });
}
const WA = { isLoading: !1, productList: [], productDetails: null },
  us = te(
    "/products/fetchAllProducts",
    async ({ filterParams: e, sortParams: t }) => {
      const n = new URLSearchParams({ ...e, sortBy: t }),
        r = await H.get(
          `https://agro-server-2gho.onrender.com/api/shop/products/get?${n}`
        );
      return r == null ? void 0 : r.data;
    }
  ),
  so = te("/products/fetchProductDetails", async (e) => {
    const t = await H.get(
      `https://agro-server-2gho.onrender.com/api/shop/products/get/${e}`
    );
    return t == null ? void 0 : t.data;
  }),
  P1 = Xt({
    name: "shoppingProducts",
    initialState: WA,
    reducers: {
      setProductDetails: (e) => {
        e.productDetails = null;
      },
    },
    extraReducers: (e) => {
      e.addCase(us.pending, (t, n) => {
        t.isLoading = !0;
      })
        .addCase(us.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.productList = n.payload.data);
        })
        .addCase(us.rejected, (t, n) => {
          (t.isLoading = !1), (t.productList = []);
        })
        .addCase(so.pending, (t, n) => {
          t.isLoading = !0;
        })
        .addCase(so.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.productDetails = n.payload.data);
        })
        .addCase(so.rejected, (t, n) => {
          (t.isLoading = !1), (t.productDetails = null);
        });
    },
  }),
  { setProductDetails: HA } = P1.actions,
  KA = P1.reducer;
function hp({ product: e, handleGetProductDetails: t, handleAddtoCart: n }) {
  return c.jsxs(Yt, {
    className: "w-full max-w-sm mx-auto",
    children: [
      c.jsxs("div", {
        onClick: () => t(e == null ? void 0 : e._id),
        children: [
          c.jsxs("div", {
            className: "relative",
            children: [
              c.jsx("img", {
                src: e == null ? void 0 : e.image,
                alt: e == null ? void 0 : e.title,
                className: "w-full h-[300px] object-cover rounded-t-lg",
              }),
              (e == null ? void 0 : e.totalStock) === 0
                ? c.jsx(mr, {
                    className:
                      "absolute top-2 left-2 bg-red-500 hover:bg-red-600",
                    children: "Out Of Stock",
                  })
                : (e == null ? void 0 : e.totalStock) < 10
                ? c.jsx(mr, {
                    className:
                      "absolute top-2 left-2 bg-red-500 hover:bg-red-600",
                    children: `Only ${
                      e == null ? void 0 : e.totalStock
                    } items left`,
                  })
                : (e == null ? void 0 : e.salePrice) > 0
                ? c.jsx(mr, {
                    className:
                      "absolute top-2 left-2 bg-red-500 hover:bg-red-600",
                    children: "Sale",
                  })
                : null,
            ],
          }),
          c.jsxs(nr, {
            className: "p-4",
            children: [
              c.jsx("h2", {
                className: "text-xl font-bold mb-2",
                children: e == null ? void 0 : e.title,
              }),
              c.jsx("div", {
                className: "flex justify-between items-center mb-2",
                children: c.jsx("span", {
                  className: "text-[16px] text-muted-foreground",
                  children: hk[e == null ? void 0 : e.category],
                }),
              }),
              c.jsxs("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                  c.jsxs("span", {
                    className: `${
                      (e == null ? void 0 : e.salePrice) > 0
                        ? "line-through"
                        : ""
                    } text-lg font-semibold text-primary`,
                    children: ["₹", e == null ? void 0 : e.price],
                  }),
                  (e == null ? void 0 : e.salePrice) > 0
                    ? c.jsxs("span", {
                        className: "text-lg font-semibold text-primary",
                        children: ["₹", e == null ? void 0 : e.salePrice],
                      })
                    : null,
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsx(Bl, {
        children:
          (e == null ? void 0 : e.totalStock) === 0
            ? c.jsx(oe, {
                className: "w-full opacity-60 cursor-not-allowed",
                children: "Out Of Stock",
              })
            : c.jsx(oe, {
                onClick: () =>
                  n(
                    e == null ? void 0 : e._id,
                    e == null ? void 0 : e.totalStock
                  ),
                className: "w-full",
                children: "Add to cart",
              }),
      }),
    ],
  });
}
function Wc({ rating: e, handleRatingChange: t }) {
  return [1, 2, 3, 4, 5].map((n) =>
    c.jsx(oe, {
      className: `p-2 rounded-full transition-colors ${
        n <= e
          ? "text-yellow-500 hover:bg-black"
          : "text-black hover:bg-primary hover:text-primary-foreground"
      }`,
      variant: "outline",
      size: "icon",
      onClick: t ? () => t(n) : null,
      children: c.jsx(YP, {
        className: `w-6 h-6 ${n <= e ? "fill-yellow-500" : "fill-black"}`,
      }),
    })
  );
}
const GA = { isLoading: !1, reviews: [] },
  qA = te(
    "/order/addReview",
    async (e) =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/shop/review/add",
          e
        )
      ).data
  ),
  ds = te(
    "/order/getReviews",
    async (e) =>
      (
        await H.get(
          `https://agro-server-2gho.onrender.com/api/shop/review/${e}`
        )
      ).data
  ),
  QA = Xt({
    name: "reviewSlice",
    initialState: GA,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(ds.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(ds.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.reviews = n.payload.data);
        })
        .addCase(ds.rejected, (t) => {
          (t.isLoading = !1), (t.reviews = []);
        });
    },
  }),
  XA = QA.reducer;
function mp({ open: e, setOpen: t, productDetails: n }) {
  const [r, o] = p.useState(""),
    [s, i] = p.useState(0),
    a = Oe(),
    { user: l } = Z((v) => v.auth),
    { cartItems: u } = Z((v) => v.shopCart),
    { reviews: d } = Z((v) => v.shopReview),
    { toast: f } = St();
  function m(v) {
    i(v);
  }
  function S(v, g) {
    let x = u.items || [];
    if (x.length) {
      const C = x.findIndex((E) => E.productId === v);
      if (C > -1) {
        const E = x[C].quantity;
        if (E + 1 > g) {
          f({
            title: `Only ${E} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }
    a(
      gr({ userId: l == null ? void 0 : l.id, productId: v, quantity: 1 })
    ).then((C) => {
      var E;
      (E = C == null ? void 0 : C.payload) != null &&
        E.success &&
        (a(zn(l == null ? void 0 : l.id)),
        f({ title: "Product is added to cart" }));
    });
  }
  function h() {
    t(!1), a(HA()), i(0), o("");
  }
  function y() {
    a(
      qA({
        productId: n == null ? void 0 : n._id,
        userId: l == null ? void 0 : l.id,
        userName: l == null ? void 0 : l.userName,
        reviewMessage: r,
        reviewValue: s,
      })
    ).then((v) => {
      v.payload.success &&
        (i(0),
        o(""),
        a(ds(n == null ? void 0 : n._id)),
        f({ title: "Review added successfully!" }));
    });
  }
  p.useEffect(() => {
    n !== null && a(ds(n == null ? void 0 : n._id));
  }, [n]);
  const w =
    d && d.length > 0 ? d.reduce((v, g) => v + g.reviewValue, 0) / d.length : 0;
  return c.jsx(Jf, {
    open: e,
    onOpenChange: h,
    children: c.jsxs(Vl, {
      className:
        "grid grid-cols-2 gap-8 sm:grid-rows-2 sm:p-12 max-w-[90vw] sm:max-w-[80vw] mt-10 lg:max-w-[70vw] h-screen overflow-y-scroll",
      children: [
        c.jsx("div", {
          className: "relative overflow-hidden rounded-lg ",
          children: c.jsx("img", {
            src: n == null ? void 0 : n.image,
            alt: n == null ? void 0 : n.title,
            width: 600,
            height: 600,
            className: "aspect-square w-full object-cover",
          }),
        }),
        c.jsxs("div", {
          className: "",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("h1", {
                  className: "text-3xl font-extrabold",
                  children: n == null ? void 0 : n.title,
                }),
                c.jsx("p", {
                  className: "text-muted-foreground text-2xl mb-5 mt-4",
                  children: n == null ? void 0 : n.description,
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                c.jsxs("p", {
                  className: `text-3xl font-bold text-primary ${
                    (n == null ? void 0 : n.salePrice) > 0 ? "line-through" : ""
                  }`,
                  children: ["₹", n == null ? void 0 : n.price],
                }),
                (n == null ? void 0 : n.salePrice) > 0
                  ? c.jsxs("p", {
                      className: "text-2xl font-bold text-muted-foreground",
                      children: ["₹", n == null ? void 0 : n.salePrice],
                    })
                  : null,
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center gap-2 mt-2",
              children: [
                c.jsx("div", {
                  className: "flex items-center gap-0.5",
                  children: c.jsx(Wc, { rating: w }),
                }),
                c.jsxs("span", {
                  className: "text-muted-foreground",
                  children: ["(", w.toFixed(2), ")"],
                }),
              ],
            }),
            c.jsx("div", {
              className: "mt-5 mb-5",
              children:
                (n == null ? void 0 : n.totalStock) === 0
                  ? c.jsx(oe, {
                      className: "w-full opacity-60 cursor-not-allowed",
                      children: "Out of Stock",
                    })
                  : c.jsx(oe, {
                      className: "w-full",
                      onClick: () =>
                        S(
                          n == null ? void 0 : n._id,
                          n == null ? void 0 : n.totalStock
                        ),
                      children: "Add to Cart",
                    }),
            }),
            c.jsx(ei, {}),
            c.jsxs("div", {
              className: "max-h-[300px] overflow-auto",
              children: [
                c.jsx("h2", {
                  className: "text-xl font-bold mb-4",
                  children: "Reviews",
                }),
                c.jsx("div", {
                  className: "grid gap-6",
                  children:
                    d && d.length > 0
                      ? d.map((v) =>
                          c.jsxs("div", {
                            className: "flex gap-4",
                            children: [
                              c.jsx(fp, {
                                className: "w-10 h-10 border",
                                children: c.jsx(pp, {
                                  children:
                                    v == null
                                      ? void 0
                                      : v.userName[0].toUpperCase(),
                                }),
                              }),
                              c.jsxs("div", {
                                className: "grid gap-1",
                                children: [
                                  c.jsx("div", {
                                    className: "flex items-center gap-2",
                                    children: c.jsx("h3", {
                                      className: "font-bold",
                                      children: v == null ? void 0 : v.userName,
                                    }),
                                  }),
                                  c.jsx("div", {
                                    className: "flex items-center gap-0.5",
                                    children: c.jsx(Wc, {
                                      rating:
                                        v == null ? void 0 : v.reviewValue,
                                    }),
                                  }),
                                  c.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: v.reviewMessage,
                                  }),
                                ],
                              }),
                            ],
                          })
                        )
                      : c.jsx("h1", { children: "No Reviews" }),
                }),
                c.jsxs("div", {
                  className: "mt-10 flex-col flex gap-2",
                  children: [
                    c.jsx(me, { children: "Write a review" }),
                    c.jsx("div", {
                      className: "flex gap-1",
                      children: c.jsx(Wc, { rating: s, handleRatingChange: m }),
                    }),
                    c.jsx(ho, {
                      name: "reviewMsg",
                      value: r,
                      onChange: (v) => o(v.target.value),
                      placeholder: "Write a review...",
                    }),
                    c.jsx(oe, {
                      onClick: y,
                      disabled: r.trim() === "",
                      children: "Submit",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const YA = [
  { id: "fruits", label: "Fruits", icon: $P },
  { id: "vegetable", label: "Vegetable", icon: LP },
  { id: "nuts", label: "Nuts", icon: GP },
  { id: "spices", label: "Spices", icon: UP },
  { id: "dairy", label: "Dairy", icon: HP },
];
function JA() {
  const [e, t] = p.useState(0),
    { productList: n, productDetails: r } = Z((h) => h.shopProducts),
    { featureImageList: o } = Z((h) => h.commonFeature),
    [s, i] = p.useState(!1),
    { user: a } = Z((h) => h.auth),
    l = Oe(),
    u = Lt(),
    { toast: d } = St();
  function f(h, y) {
    sessionStorage.removeItem("filters");
    const w = { [y]: [h.id] };
    sessionStorage.setItem("filters", JSON.stringify(w)), u("/shop/listing");
  }
  function m(h) {
    l(so(h));
  }
  function S(h) {
    l(
      gr({ userId: a == null ? void 0 : a.id, productId: h, quantity: 1 })
    ).then((y) => {
      var w;
      (w = y == null ? void 0 : y.payload) != null &&
        w.success &&
        (l(zn(a == null ? void 0 : a.id)),
        d({ title: "Product is added to cart" }));
    });
  }
  return (
    p.useEffect(() => {
      r !== null && i(!0);
    }, [r]),
    p.useEffect(() => {
      const h = setInterval(() => {
        t((y) => (y + 1) % o.length);
      }, 15e3);
      return () => clearInterval(h);
    }, [o]),
    p.useEffect(() => {
      l(us({ filterParams: {}, sortParams: "price-lowtohigh" }));
    }, [l]),
    p.useEffect(() => {
      l(oo());
    }, [l]),
    c.jsxs("div", {
      className: "flex flex-col min-h-screen",
      children: [
        c.jsxs("div", {
          className: "relative w-full h-[400px] overflow-hidden ",
          children: [
            o && o.length > 0
              ? o.map((h, y) =>
                  c.jsx(
                    "img",
                    {
                      src: h == null ? void 0 : h.image,
                      className: `${
                        y === e ? "opacity-100" : "opacity-0"
                      } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`,
                    },
                    y
                  )
                )
              : null,
            c.jsx(oe, {
              variant: "outline",
              size: "icon",
              onClick: () => t((h) => (h - 1 + o.length) % o.length),
              className:
                "absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80",
              children: c.jsx(FP, { className: "w-4 h-4" }),
            }),
            c.jsx(oe, {
              variant: "outline",
              size: "icon",
              onClick: () => t((h) => (h + 1) % o.length),
              className:
                "absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80",
              children: c.jsx(Hx, { className: "w-4 h-4" }),
            }),
          ],
        }),
        c.jsx("section", {
          className: "py-12 bg-gray-50",
          children: c.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              c.jsx("h2", {
                className: "text-3xl font-bold text-center mb-8",
                children: "Shop by category",
              }),
              c.jsx("div", {
                className:
                  "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",
                children: YA.map((h) =>
                  c.jsx(Yt, {
                    onClick: () => f(h, "category"),
                    className:
                      "cursor-pointer hover:shadow-lg transition-shadow",
                    children: c.jsxs(nr, {
                      className:
                        "flex flex-col items-center justify-center p-6",
                      children: [
                        c.jsx(h.icon, {
                          className: "w-12 h-12 mb-4 text-primary",
                        }),
                        c.jsx("span", {
                          className: "font-bold",
                          children: h.label,
                        }),
                      ],
                    }),
                  })
                ),
              }),
            ],
          }),
        }),
        c.jsx("section", {
          className: "py-12",
          children: c.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              c.jsx("h2", {
                className: "text-3xl font-bold text-center mb-8",
                children: "Feature Products",
              }),
              c.jsx("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                children:
                  n && n.length > 0
                    ? n.map((h) =>
                        c.jsx(hp, {
                          handleGetProductDetails: m,
                          product: h,
                          handleAddtoCart: S,
                        })
                      )
                    : null,
              }),
            ],
          }),
        }),
        c.jsx(mp, { open: s, setOpen: i, productDetails: r }),
      ],
    })
  );
}
var gp = "Checkbox",
  [ZA, cL] = Ft(gp),
  [eM, tM] = ZA(gp),
  k1 = p.forwardRef((e, t) => {
    const {
        __scopeCheckbox: n,
        name: r,
        checked: o,
        defaultChecked: s,
        required: i,
        disabled: a,
        value: l = "on",
        onCheckedChange: u,
        ...d
      } = e,
      [f, m] = p.useState(null),
      S = ee(t, (x) => m(x)),
      h = p.useRef(!1),
      y = f ? !!f.closest("form") : !0,
      [w = !1, v] = Gn({ prop: o, defaultProp: s, onChange: u }),
      g = p.useRef(w);
    return (
      p.useEffect(() => {
        const x = f == null ? void 0 : f.form;
        if (x) {
          const C = () => v(g.current);
          return (
            x.addEventListener("reset", C),
            () => x.removeEventListener("reset", C)
          );
        }
      }, [f, v]),
      c.jsxs(eM, {
        scope: n,
        state: w,
        disabled: a,
        children: [
          c.jsx(K.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": vr(w) ? "mixed" : w,
            "aria-required": i,
            "data-state": O1(w),
            "data-disabled": a ? "" : void 0,
            disabled: a,
            value: l,
            ...d,
            ref: S,
            onKeyDown: L(e.onKeyDown, (x) => {
              x.key === "Enter" && x.preventDefault();
            }),
            onClick: L(e.onClick, (x) => {
              v((C) => (vr(C) ? !0 : !C)),
                y &&
                  ((h.current = x.isPropagationStopped()),
                  h.current || x.stopPropagation());
            }),
          }),
          y &&
            c.jsx(nM, {
              control: f,
              bubbles: !h.current,
              name: r,
              value: l,
              checked: w,
              required: i,
              disabled: a,
              style: { transform: "translateX(-100%)" },
            }),
        ],
      })
    );
  });
k1.displayName = gp;
var T1 = "CheckboxIndicator",
  _1 = p.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e,
      s = tM(T1, n);
    return c.jsx(It, {
      present: r || vr(s.state) || s.state === !0,
      children: c.jsx(K.span, {
        "data-state": O1(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
_1.displayName = T1;
var nM = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e,
    s = p.useRef(null),
    i = Zy(n),
    a = $y(t);
  return (
    p.useEffect(() => {
      const l = s.current,
        u = window.HTMLInputElement.prototype,
        f = Object.getOwnPropertyDescriptor(u, "checked").set;
      if (i !== n && f) {
        const m = new Event("click", { bubbles: r });
        (l.indeterminate = vr(n)),
          f.call(l, vr(n) ? !1 : n),
          l.dispatchEvent(m);
      }
    }, [i, n, r]),
    c.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: vr(n) ? !1 : n,
      ...o,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function vr(e) {
  return e === "indeterminate";
}
function O1(e) {
  return vr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var A1 = k1,
  rM = _1;
const M1 = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(A1, {
    ref: n,
    className: I(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: c.jsx(rM, {
      className: I("flex items-center justify-center text-current"),
      children: c.jsx(Df, { className: "h-4 w-4" }),
    }),
  })
);
M1.displayName = A1.displayName;
function oM({ filters: e, handleFilter: t }) {
  return c.jsxs("div", {
    className: "bg-background rounded-lg shadow-sm",
    children: [
      c.jsx("div", {
        className: "p-4 border-b",
        children: c.jsx("h2", {
          className: "text-lg font-extrabold",
          children: "Filters",
        }),
      }),
      c.jsx("div", {
        className: "p-4 space-y-4",
        children: Object.keys(pm).map((n) =>
          c.jsxs(p.Fragment, {
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("h3", {
                    className: "text-base font-bold",
                    children: n,
                  }),
                  c.jsx("div", {
                    className: "grid gap-2 mt-2",
                    children: pm[n].map((r) =>
                      c.jsxs(me, {
                        className: "flex font-medium items-center gap-2 ",
                        children: [
                          c.jsx(M1, {
                            checked:
                              e &&
                              Object.keys(e).length > 0 &&
                              e[n] &&
                              e[n].indexOf(r.id) > -1,
                            onCheckedChange: () => t(n, r.id),
                          }),
                          r.label,
                        ],
                      })
                    ),
                  }),
                ],
              }),
              c.jsx(ei, {}),
            ],
          })
        ),
      }),
    ],
  });
}
function sM(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    if (Array.isArray(r) && r.length > 0) {
      const o = r.join(",");
      t.push(`${n}=${encodeURIComponent(o)}`);
    }
  return t.join("&");
}
function iM() {
  const e = Oe(),
    { productList: t, productDetails: n } = Z((x) => x.shopProducts),
    { cartItems: r } = Z((x) => x.shopCart),
    { user: o } = Z((x) => x.auth),
    [s, i] = p.useState({}),
    [a, l] = p.useState(null),
    [u, d] = Ef(),
    [f, m] = p.useState(!1),
    { toast: S } = St(),
    h = u.get("category");
  function y(x) {
    l(x);
  }
  function w(x, C) {
    let E = { ...s };
    if (Object.keys(E).indexOf(x) === -1) E = { ...E, [x]: [C] };
    else {
      const b = E[x].indexOf(C);
      b === -1 ? E[x].push(C) : E[x].splice(b, 1);
    }
    i(E), sessionStorage.setItem("filters", JSON.stringify(E));
  }
  function v(x) {
    e(so(x));
  }
  function g(x, C) {
    let E = r.items || [];
    if (E.length) {
      const N = E.findIndex((b) => b.productId === x);
      if (N > -1) {
        const b = E[N].quantity;
        if (b + 1 > C) {
          S({
            title: `Only ${b} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }
    e(
      gr({ userId: o == null ? void 0 : o.id, productId: x, quantity: 1 })
    ).then((N) => {
      var b;
      (b = N == null ? void 0 : N.payload) != null &&
        b.success &&
        (e(zn(o == null ? void 0 : o.id)),
        S({ title: "Product is added to cart" }));
    });
  }
  return (
    p.useEffect(() => {
      l("price-lowtohigh"),
        i(JSON.parse(sessionStorage.getItem("filters")) || {});
    }, [h]),
    p.useEffect(() => {
      if (s && Object.keys(s).length > 0) {
        const x = sM(s);
        d(new URLSearchParams(x));
      }
    }, [s]),
    p.useEffect(() => {
      s !== null && a !== null && e(us({ filterParams: s, sortParams: a }));
    }, [e, a, s]),
    p.useEffect(() => {
      n !== null && m(!0);
    }, [n]),
    c.jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-4 md:p-6",
      children: [
        c.jsx(oM, { filters: s, handleFilter: w }),
        c.jsxs("div", {
          className: "bg-background w-full rounded-lg shadow-sm",
          children: [
            c.jsxs("div", {
              className: "p-4 border-b flex items-center justify-between",
              children: [
                c.jsx("h2", {
                  className: "text-lg font-extrabold",
                  children: "All Products",
                }),
                c.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    c.jsxs("span", {
                      className: "text-muted-foreground",
                      children: [t == null ? void 0 : t.length, " Products"],
                    }),
                    c.jsxs(h1, {
                      children: [
                        c.jsx(m1, {
                          asChild: !0,
                          children: c.jsxs(oe, {
                            variant: "outline",
                            size: "sm",
                            className: "flex items-center gap-1",
                            children: [
                              c.jsx(AP, { className: "h-4 w-4" }),
                              c.jsx("span", { children: "Sort by" }),
                            ],
                          }),
                        }),
                        c.jsx(up, {
                          align: "end",
                          className: "w-[200px]",
                          children: c.jsx(PA, {
                            value: a,
                            onValueChange: y,
                            children: mk.map((x) =>
                              c.jsx(
                                g1,
                                { value: x.id, children: x.label },
                                x.id
                              )
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4",
              children:
                t && t.length > 0
                  ? t.map((x) =>
                      c.jsx(hp, {
                        handleGetProductDetails: v,
                        product: x,
                        handleAddtoCart: g,
                      })
                    )
                  : null,
            }),
          ],
        }),
        c.jsx(mp, { open: f, setOpen: m, productDetails: n }),
      ],
    })
  );
}
const aM = { isLoading: !1, addressList: [] },
  na = te(
    "/addresses/addNewAddress",
    async (e) =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/shop/address/add",
          e
        )
      ).data
  ),
  dr = te(
    "/addresses/fetchAllAddresses",
    async (e) =>
      (
        await H.get(
          `https://agro-server-2gho.onrender.com/api/shop/address/get/${e}`
        )
      ).data
  ),
  lM = te(
    "/addresses/editaAddress",
    async ({ userId: e, addressId: t, formData: n }) =>
      (
        await H.put(
          `https://agro-server-2gho.onrender.com/api/shop/address/update/${e}/${t}`,
          n
        )
      ).data
  ),
  cM = te(
    "/addresses/deleteAddress",
    async ({ userId: e, addressId: t }) =>
      (
        await H.delete(
          `https://agro-server-2gho.onrender.com/api/shop/address/delete/${e}/${t}`
        )
      ).data
  ),
  uM = Xt({
    name: "address",
    initialState: aM,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(na.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(na.fulfilled, (t, n) => {
          t.isLoading = !1;
        })
        .addCase(na.rejected, (t) => {
          t.isLoading = !1;
        })
        .addCase(dr.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(dr.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.addressList = n.payload.data);
        })
        .addCase(dr.rejected, (t) => {
          (t.isLoading = !1), (t.addressList = []);
        });
    },
  }),
  dM = uM.reducer;
function fM({
  addressInfo: e,
  handleDeleteAddress: t,
  handleEditAddress: n,
  setCurrentSelectedAddress: r,
  selectedId: o,
}) {
  return c.jsxs(Yt, {
    onClick: r ? () => r(e) : null,
    className: `cursor-pointer border-red-700 ${
      (o == null ? void 0 : o._id) === (e == null ? void 0 : e._id)
        ? "border-red-900 border-[4px]"
        : "border-black"
    }`,
    children: [
      c.jsxs(nr, {
        className: "grid p-4 gap-4",
        children: [
          c.jsxs(me, {
            children: ["Address: ", e == null ? void 0 : e.address],
          }),
          c.jsxs(me, { children: ["City: ", e == null ? void 0 : e.city] }),
          c.jsxs(me, {
            children: ["pincode: ", e == null ? void 0 : e.pincode],
          }),
          c.jsxs(me, { children: ["Phone: ", e == null ? void 0 : e.phone] }),
          c.jsxs(me, { children: ["Notes: ", e == null ? void 0 : e.notes] }),
        ],
      }),
      c.jsxs(Bl, {
        className: "p-3 flex justify-between",
        children: [
          c.jsx(oe, { onClick: () => n(e), children: "Edit" }),
          c.jsx(oe, { onClick: () => t(e), children: "Delete" }),
        ],
      }),
    ],
  });
}
const ki = { address: "", city: "", phone: "", pincode: "", notes: "" };
function L1({ setCurrentSelectedAddress: e, selectedId: t }) {
  const [n, r] = p.useState(ki),
    [o, s] = p.useState(null),
    i = Oe(),
    { user: a } = Z((h) => h.auth),
    { addressList: l } = Z((h) => h.shopAddress),
    { toast: u } = St();
  function d(h) {
    if ((h.preventDefault(), l.length >= 3 && o === null)) {
      r(ki),
        u({ title: "You can add max 3 addresses", variant: "destructive" });
      return;
    }
    o !== null
      ? i(
          lM({ userId: a == null ? void 0 : a.id, addressId: o, formData: n })
        ).then((y) => {
          var w;
          (w = y == null ? void 0 : y.payload) != null &&
            w.success &&
            (i(dr(a == null ? void 0 : a.id)),
            s(null),
            r(ki),
            u({ title: "Address updated successfully" }));
        })
      : i(na({ ...n, userId: a == null ? void 0 : a.id })).then((y) => {
          var w;
          (w = y == null ? void 0 : y.payload) != null &&
            w.success &&
            (i(dr(a == null ? void 0 : a.id)),
            r(ki),
            u({ title: "Address added successfully" }));
        });
  }
  function f(h) {
    i(cM({ userId: a == null ? void 0 : a.id, addressId: h._id })).then((y) => {
      var w;
      (w = y == null ? void 0 : y.payload) != null &&
        w.success &&
        (i(dr(a == null ? void 0 : a.id)),
        u({ title: "Address deleted successfully" }));
    });
  }
  function m(h) {
    s(h == null ? void 0 : h._id),
      r({
        ...n,
        address: h == null ? void 0 : h.address,
        city: h == null ? void 0 : h.city,
        phone: h == null ? void 0 : h.phone,
        pincode: h == null ? void 0 : h.pincode,
        notes: h == null ? void 0 : h.notes,
      });
  }
  function S() {
    return Object.keys(n)
      .map((h) => n[h].trim() !== "")
      .every((h) => h);
  }
  return (
    p.useEffect(() => {
      i(dr(a == null ? void 0 : a.id));
    }, [i]),
    c.jsxs(Yt, {
      children: [
        c.jsx("div", {
          className: "mb-5 p-3 grid grid-cols-1 sm:grid-cols-2  gap-2",
          children:
            l && l.length > 0
              ? l.map((h) =>
                  c.jsx(fM, {
                    selectedId: t,
                    handleDeleteAddress: f,
                    addressInfo: h,
                    handleEditAddress: m,
                    setCurrentSelectedAddress: e,
                  })
                )
              : null,
        }),
        c.jsx(Po, {
          children: c.jsx(ko, {
            children: o !== null ? "Edit Address" : "Add New Address",
          }),
        }),
        c.jsx(nr, {
          className: "space-y-3",
          children: c.jsx(Qs, {
            formControls: gk,
            formData: n,
            setFormData: r,
            buttonText: o !== null ? "Edit" : "Add",
            onSubmit: d,
            isBtnDisabled: !S(),
          }),
        }),
      ],
    })
  );
}
const F1 = "/assets/account-Cjl9lar0.jpg",
  pM = {
    approvalURL: null,
    isLoading: !1,
    orderId: null,
    orderList: [],
    orderDetails: null,
  },
  ra = te(
    "/order/createNewOrder",
    async (e) =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/shop/order/create",
          e
        )
      ).data
  ),
  hM = te(
    "/order/capturePayment",
    async ({ paymentId: e, payerId: t, orderId: n }) =>
      (
        await H.post(
          "https://agro-server-2gho.onrender.com/api/shop/order/capture",
          { paymentId: e, payerId: t, orderId: n }
        )
      ).data
  ),
  oa = te(
    "/order/getAllOrdersByUserId",
    async (e) =>
      (
        await H.get(
          `https://agro-server-2gho.onrender.com/api/shop/order/list/${e}`
        )
      ).data
  ),
  sa = te(
    "/order/getOrderDetails",
    async (e) =>
      (
        await H.get(
          `https://agro-server-2gho.onrender.com/api/shop/order/details/${e}`
        )
      ).data
  ),
  D1 = Xt({
    name: "shoppingOrderSlice",
    initialState: pM,
    reducers: {
      resetOrderDetails: (e) => {
        e.orderDetails = null;
      },
    },
    extraReducers: (e) => {
      e.addCase(ra.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(ra.fulfilled, (t, n) => {
          (t.isLoading = !1),
            (t.approvalURL = n.payload.approvalURL),
            (t.orderId = n.payload.orderId),
            sessionStorage.setItem(
              "currentOrderId",
              JSON.stringify(n.payload.orderId)
            );
        })
        .addCase(ra.rejected, (t) => {
          (t.isLoading = !1), (t.approvalURL = null), (t.orderId = null);
        })
        .addCase(oa.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(oa.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.orderList = n.payload.data);
        })
        .addCase(oa.rejected, (t) => {
          (t.isLoading = !1), (t.orderList = []);
        })
        .addCase(sa.pending, (t) => {
          t.isLoading = !0;
        })
        .addCase(sa.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.orderDetails = n.payload.data);
        })
        .addCase(sa.rejected, (t) => {
          (t.isLoading = !1), (t.orderDetails = null);
        });
    },
  }),
  { resetOrderDetails: mM } = D1.actions,
  gM = D1.reducer;
function vM() {
  const { cartItems: e } = Z((f) => f.shopCart),
    { user: t } = Z((f) => f.auth),
    { approvalURL: n } = Z((f) => f.shopOrder),
    [r, o] = p.useState(null),
    [s, i] = p.useState(!1),
    a = Oe(),
    { toast: l } = St(),
    u =
      e && e.items && e.items.length > 0
        ? e.items.reduce(
            (f, m) =>
              f +
              ((m == null ? void 0 : m.salePrice) > 0
                ? m == null
                  ? void 0
                  : m.salePrice
                : m == null
                ? void 0
                : m.price) *
                (m == null ? void 0 : m.quantity),
            0
          )
        : 0;
  function d() {
    if (e.length === 0) {
      l({
        title: "Your cart is empty. Please add items to proceed",
        variant: "destructive",
      });
      return;
    }
    if (r === null) {
      l({
        title: "Please select one address to proceed.",
        variant: "destructive",
      });
      return;
    }
    const f = {
      userId: t == null ? void 0 : t.id,
      cartId: e == null ? void 0 : e._id,
      cartItems: e.items.map((m) => ({
        productId: m == null ? void 0 : m.productId,
        title: m == null ? void 0 : m.title,
        image: m == null ? void 0 : m.image,
        price:
          (m == null ? void 0 : m.salePrice) > 0
            ? m == null
              ? void 0
              : m.salePrice
            : m == null
            ? void 0
            : m.price,
        quantity: m == null ? void 0 : m.quantity,
      })),
      addressInfo: {
        addressId: r == null ? void 0 : r._id,
        address: r == null ? void 0 : r.address,
        city: r == null ? void 0 : r.city,
        pincode: r == null ? void 0 : r.pincode,
        phone: r == null ? void 0 : r.phone,
        notes: r == null ? void 0 : r.notes,
      },
      orderStatus: "pending",
      paymentMethod: "paypal",
      paymentStatus: "pending",
      totalAmount: u,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      paymentId: "",
      payerId: "",
    };
    a(ra(f)).then((m) => {
      var S;
      (S = m == null ? void 0 : m.payload) != null && S.success ? i(!0) : i(!1);
    });
  }
  return (
    n && (window.location.href = n),
    c.jsxs("div", {
      className: "flex flex-col",
      children: [
        c.jsx("div", {
          className: "relative h-[300px] w-full overflow-hidden",
          children: c.jsx("img", {
            src: F1,
            className: "h-full w-full object-cover object-center",
          }),
        }),
        c.jsxs("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5",
          children: [
            c.jsx(L1, { selectedId: r, setCurrentSelectedAddress: o }),
            c.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                e && e.items && e.items.length > 0
                  ? e.items.map((f) => c.jsx(R1, { cartItem: f }))
                  : null,
                c.jsx("div", {
                  className: "mt-8 space-y-4",
                  children: c.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      c.jsx("span", {
                        className: "font-bold",
                        children: "Total",
                      }),
                      c.jsxs("span", {
                        className: "font-bold",
                        children: ["₹", u],
                      }),
                    ],
                  }),
                }),
                c.jsx("div", {
                  className: "mt-4 w-full",
                  children: c.jsx(oe, {
                    onClick: d,
                    className: "w-full",
                    children: s
                      ? "Processing Paypal Payment..."
                      : "Checkout with Paypal",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
var vp = "Tabs",
  [yM, uL] = Ft(vp, [Hl]),
  I1 = Hl(),
  [xM, yp] = yM(vp),
  $1 = p.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        onValueChange: o,
        defaultValue: s,
        orientation: i = "horizontal",
        dir: a,
        activationMode: l = "automatic",
        ...u
      } = e,
      d = hl(a),
      [f, m] = Gn({ prop: r, onChange: o, defaultProp: s });
    return c.jsx(xM, {
      scope: n,
      baseId: qt(),
      value: f,
      onValueChange: m,
      orientation: i,
      dir: d,
      activationMode: l,
      children: c.jsx(K.div, { dir: d, "data-orientation": i, ...u, ref: t }),
    });
  });
$1.displayName = vp;
var z1 = "TabsList",
  U1 = p.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e,
      s = yp(z1, n),
      i = I1(n);
    return c.jsx(y0, {
      asChild: !0,
      ...i,
      orientation: s.orientation,
      dir: s.dir,
      loop: r,
      children: c.jsx(K.div, {
        role: "tablist",
        "aria-orientation": s.orientation,
        ...o,
        ref: t,
      }),
    });
  });
U1.displayName = z1;
var B1 = "TabsTrigger",
  V1 = p.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e,
      i = yp(B1, n),
      a = I1(n),
      l = K1(i.baseId, r),
      u = G1(i.baseId, r),
      d = r === i.value;
    return c.jsx(x0, {
      asChild: !0,
      ...a,
      focusable: !o,
      active: d,
      children: c.jsx(K.button, {
        type: "button",
        role: "tab",
        "aria-selected": d,
        "aria-controls": u,
        "data-state": d ? "active" : "inactive",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        id: l,
        ...s,
        ref: t,
        onMouseDown: L(e.onMouseDown, (f) => {
          !o && f.button === 0 && f.ctrlKey === !1
            ? i.onValueChange(r)
            : f.preventDefault();
        }),
        onKeyDown: L(e.onKeyDown, (f) => {
          [" ", "Enter"].includes(f.key) && i.onValueChange(r);
        }),
        onFocus: L(e.onFocus, () => {
          const f = i.activationMode !== "manual";
          !d && !o && f && i.onValueChange(r);
        }),
      }),
    });
  });
V1.displayName = B1;
var W1 = "TabsContent",
  H1 = p.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e,
      a = yp(W1, n),
      l = K1(a.baseId, r),
      u = G1(a.baseId, r),
      d = r === a.value,
      f = p.useRef(d);
    return (
      p.useEffect(() => {
        const m = requestAnimationFrame(() => (f.current = !1));
        return () => cancelAnimationFrame(m);
      }, []),
      c.jsx(It, {
        present: o || d,
        children: ({ present: m }) =>
          c.jsx(K.div, {
            "data-state": d ? "active" : "inactive",
            "data-orientation": a.orientation,
            role: "tabpanel",
            "aria-labelledby": l,
            hidden: !m,
            id: u,
            tabIndex: 0,
            ...i,
            ref: t,
            style: { ...e.style, animationDuration: f.current ? "0s" : void 0 },
            children: m && s,
          }),
      })
    );
  });
H1.displayName = W1;
function K1(e, t) {
  return `${e}-trigger-${t}`;
}
function G1(e, t) {
  return `${e}-content-${t}`;
}
var wM = $1,
  q1 = U1,
  Q1 = V1,
  X1 = H1;
const SM = wM,
  Y1 = p.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(q1, {
      ref: n,
      className: I(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        e
      ),
      ...t,
    })
  );
Y1.displayName = q1.displayName;
const vd = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Q1, {
    ref: n,
    className: I(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t,
  })
);
vd.displayName = Q1.displayName;
const yd = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(X1, {
    ref: n,
    className: I(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t,
  })
);
yd.displayName = X1.displayName;
function CM({ orderDetails: e }) {
  var n, r, o, s, i;
  const { user: t } = Z((a) => a.auth);
  return c.jsx(Vl, {
    className: "sm:max-w-[600px]",
    children: c.jsxs("div", {
      className: "grid gap-6",
      children: [
        c.jsxs("div", {
          className: "grid gap-2",
          children: [
            c.jsxs("div", {
              className: "flex mt-6 items-center justify-between",
              children: [
                c.jsx("p", { className: "font-medium", children: "Order ID" }),
                c.jsx(me, { children: e == null ? void 0 : e._id }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Order Date",
                }),
                c.jsx(me, {
                  children: e == null ? void 0 : e.orderDate.split("T")[0],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Order Price",
                }),
                c.jsxs(me, {
                  children: ["₹", e == null ? void 0 : e.totalAmount],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Payment method",
                }),
                c.jsx(me, { children: e == null ? void 0 : e.paymentMethod }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Payment Status",
                }),
                c.jsx(me, { children: e == null ? void 0 : e.paymentStatus }),
              ],
            }),
            c.jsxs("div", {
              className: "flex mt-2 items-center justify-between",
              children: [
                c.jsx("p", {
                  className: "font-medium",
                  children: "Order Status",
                }),
                c.jsx(me, {
                  children: c.jsx(mr, {
                    className: `py-1 px-3 ${
                      (e == null ? void 0 : e.orderStatus) === "confirmed"
                        ? "bg-green-500"
                        : (e == null ? void 0 : e.orderStatus) === "rejected"
                        ? "bg-red-600"
                        : "bg-black"
                    }`,
                    children: e == null ? void 0 : e.orderStatus,
                  }),
                }),
              ],
            }),
          ],
        }),
        c.jsx(ei, {}),
        c.jsx("div", {
          className: "grid gap-4",
          children: c.jsxs("div", {
            className: "grid gap-2",
            children: [
              c.jsx("div", {
                className: "font-medium",
                children: "Order Details",
              }),
              c.jsx("ul", {
                className: "grid gap-3",
                children:
                  e != null &&
                  e.cartItems &&
                  (e == null ? void 0 : e.cartItems.length) > 0
                    ? e == null
                      ? void 0
                      : e.cartItems.map((a) =>
                          c.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [
                              c.jsxs("span", {
                                children: ["Title: ", a.title],
                              }),
                              c.jsxs("span", {
                                children: ["Quantity: ", a.quantity],
                              }),
                              c.jsxs("span", {
                                children: ["Price: ₹", a.price],
                              }),
                            ],
                          })
                        )
                    : null,
              }),
            ],
          }),
        }),
        c.jsx("div", {
          className: "grid gap-4",
          children: c.jsxs("div", {
            className: "grid gap-2",
            children: [
              c.jsx("div", {
                className: "font-medium",
                children: "Shipping Info",
              }),
              c.jsxs("div", {
                className: "grid gap-0.5 text-muted-foreground",
                children: [
                  c.jsx("span", { children: t.userName }),
                  c.jsx("span", {
                    children:
                      (n = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : n.address,
                  }),
                  c.jsx("span", {
                    children:
                      (r = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : r.city,
                  }),
                  c.jsx("span", {
                    children:
                      (o = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : o.pincode,
                  }),
                  c.jsx("span", {
                    children:
                      (s = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : s.phone,
                  }),
                  c.jsx("span", {
                    children:
                      (i = e == null ? void 0 : e.addressInfo) == null
                        ? void 0
                        : i.notes,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function EM() {
  const [e, t] = p.useState(!1),
    n = Oe(),
    { user: r } = Z((a) => a.auth),
    { orderList: o, orderDetails: s } = Z((a) => a.shopOrder);
  function i(a) {
    n(sa(a));
  }
  return (
    p.useEffect(() => {
      n(oa(r == null ? void 0 : r.id));
    }, [n]),
    p.useEffect(() => {
      s !== null && t(!0);
    }, [s]),
    c.jsxs(Yt, {
      children: [
        c.jsx(Po, { children: c.jsx(ko, { children: "Order History" }) }),
        c.jsx(nr, {
          children: c.jsxs(Zf, {
            children: [
              c.jsx(ep, {
                children: c.jsxs(Fs, {
                  children: [
                    c.jsx(Rt, { children: "Order ID" }),
                    c.jsx(Rt, { children: "Order Date" }),
                    c.jsx(Rt, { children: "Order Status" }),
                    c.jsx(Rt, { children: "Order Price" }),
                    c.jsx(Rt, {
                      children: c.jsx("span", {
                        className: "sr-only",
                        children: "Details",
                      }),
                    }),
                  ],
                }),
              }),
              c.jsx(tp, {
                children:
                  o && o.length > 0
                    ? o.map((a) =>
                        c.jsxs(Fs, {
                          children: [
                            c.jsx(Pt, { children: a == null ? void 0 : a._id }),
                            c.jsx(Pt, {
                              children:
                                a == null ? void 0 : a.orderDate.split("T")[0],
                            }),
                            c.jsx(Pt, {
                              children: c.jsx(mr, {
                                className: `py-1 px-3 ${
                                  (a == null ? void 0 : a.orderStatus) ===
                                  "confirmed"
                                    ? "bg-green-500"
                                    : (a == null ? void 0 : a.orderStatus) ===
                                      "rejected"
                                    ? "bg-red-600"
                                    : "bg-black"
                                }`,
                                children: a == null ? void 0 : a.orderStatus,
                              }),
                            }),
                            c.jsxs(Pt, {
                              children: [
                                "₹",
                                a == null ? void 0 : a.totalAmount,
                              ],
                            }),
                            c.jsx(Pt, {
                              children: c.jsxs(Jf, {
                                open: e,
                                onOpenChange: () => {
                                  t(!1), n(mM());
                                },
                                children: [
                                  c.jsx(oe, {
                                    onClick: () =>
                                      i(a == null ? void 0 : a._id),
                                    children: "View Details",
                                  }),
                                  c.jsx(CM, { orderDetails: s }),
                                ],
                              }),
                            }),
                          ],
                        })
                      )
                    : null,
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function bM() {
  return c.jsxs("div", {
    className: "flex flex-col",
    children: [
      c.jsx("div", {
        className: "relative h-[300px] w-full overflow-hidden",
        children: c.jsx("img", {
          src: F1,
          className: "h-full w-full object-cover object-center",
        }),
      }),
      c.jsx("div", {
        className: "container mx-auto grid grid-cols-1 gap-8 py-8",
        children: c.jsx("div", {
          className:
            "flex flex-col rounded-lg border bg-background p-6 shadow-sm",
          children: c.jsxs(SM, {
            defaultValue: "orders",
            children: [
              c.jsxs(Y1, {
                children: [
                  c.jsx(vd, { value: "orders", children: "Orders" }),
                  c.jsx(vd, { value: "address", children: "Address" }),
                ],
              }),
              c.jsx(yd, { value: "orders", children: c.jsx(EM, {}) }),
              c.jsx(yd, { value: "address", children: c.jsx(L1, {}) }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Ti({ isAuthenticated: e, user: t, children: n }) {
  const r = gn();
  return r.pathname === "/"
    ? e
      ? (t == null ? void 0 : t.role) === "admin"
        ? c.jsx(xn, { to: "/admin/dashboard" })
        : c.jsx(xn, { to: "/shop/home" })
      : c.jsx(xn, { to: "/auth/login" })
    : !e && !(r.pathname.includes("/login") || r.pathname.includes("/register"))
    ? c.jsx(xn, { to: "/auth/login" })
    : e && (r.pathname.includes("/login") || r.pathname.includes("/register"))
    ? (t == null ? void 0 : t.role) === "admin"
      ? c.jsx(xn, { to: "/admin/dashboard" })
      : c.jsx(xn, { to: "/shop/home" })
    : e &&
      (t == null ? void 0 : t.role) !== "admin" &&
      r.pathname.includes("admin")
    ? c.jsx(xn, { to: "/unauth-page" })
    : e &&
      (t == null ? void 0 : t.role) === "admin" &&
      r.pathname.includes("shop")
    ? c.jsx(xn, { to: "/admin/dashboard" })
    : c.jsx(c.Fragment, { children: n });
}
function NM() {
  return c.jsx("h1", { children: "You don't have access to view this page" });
}
function jM() {
  const e = Oe(),
    t = gn(),
    n = new URLSearchParams(t.search),
    r = n.get("paymentId"),
    o = n.get("PayerID");
  return (
    p.useEffect(() => {
      if (r && o) {
        const s = JSON.parse(sessionStorage.getItem("currentOrderId"));
        e(hM({ paymentId: r, payerId: o, orderId: s })).then((i) => {
          var a;
          (a = i == null ? void 0 : i.payload) != null &&
            a.success &&
            (sessionStorage.removeItem("currentOrderId"),
            (window.location.href = "/shop/payment-success"));
        });
      }
    }, [r, o, e]),
    c.jsx(Yt, {
      children: c.jsx(Po, {
        children: c.jsx(ko, { children: "Processing Payment...Please wait!" }),
      }),
    })
  );
}
function RM() {
  const e = Lt();
  return c.jsxs(Yt, {
    className: "p-10",
    children: [
      c.jsx(Po, {
        className: "p-0",
        children: c.jsx(ko, {
          className: "text-4xl",
          children: "Payment is successfull!",
        }),
      }),
      c.jsx(oe, {
        className: "mt-5",
        onClick: () => e("/shop/account"),
        children: "View Orders",
      }),
    ],
  });
}
const PM = { isLoading: !1, searchResults: [] },
  ia = te(
    "/order/getSearchResults",
    async (e) =>
      (
        await H.get(
          `https://agro-server-2gho.onrender.com/api/shop/search/${e}`
        )
      ).data
  ),
  J1 = Xt({
    name: "searchSlice",
    initialState: PM,
    reducers: {
      resetSearchResults: (e) => {
        e.searchResults = [];
      },
    },
    extraReducers: (e) => {
      e.addCase(ia.pending, (t) => {
        t.isLoading = !0;
      })
        .addCase(ia.fulfilled, (t, n) => {
          (t.isLoading = !1), (t.searchResults = n.payload.data);
        })
        .addCase(ia.rejected, (t) => {
          (t.isLoading = !1), (t.searchResults = []);
        });
    },
  }),
  { resetSearchResults: kM } = J1.actions,
  TM = J1.reducer;
function _M() {
  const [e, t] = p.useState(""),
    [n, r] = p.useState(!1),
    [o, s] = Ef(),
    i = Oe(),
    { searchResults: a } = Z((h) => h.shopSearch),
    { productDetails: l } = Z((h) => h.shopProducts),
    { user: u } = Z((h) => h.auth),
    { cartItems: d } = Z((h) => h.shopCart),
    { toast: f } = St();
  p.useEffect(() => {
    e && e.trim() !== "" && e.trim().length > 3
      ? setTimeout(() => {
          s(new URLSearchParams(`?keyword=${e}`)), i(ia(e));
        }, 1e3)
      : (s(new URLSearchParams(`?keyword=${e}`)), i(kM()));
  }, [e]);
  function m(h, y) {
    let w = d.items || [];
    if (w.length) {
      const v = w.findIndex((g) => g.productId === h);
      if (v > -1) {
        const g = w[v].quantity;
        if (g + 1 > y) {
          f({
            title: `Only ${g} quantity can be added for this item`,
            variant: "destructive",
          });
          return;
        }
      }
    }
    i(
      gr({ userId: u == null ? void 0 : u.id, productId: h, quantity: 1 })
    ).then((v) => {
      var g;
      (g = v == null ? void 0 : v.payload) != null &&
        g.success &&
        (i(zn(u == null ? void 0 : u.id)),
        f({ title: "Product is added to cart" }));
    });
  }
  function S(h) {
    i(so(h));
  }
  return (
    p.useEffect(() => {
      l !== null && r(!0);
    }, [l]),
    c.jsxs("div", {
      className: "container mx-auto md:px-6 px-4 py-8",
      children: [
        c.jsx("div", {
          className: "flex justify-center mb-8",
          children: c.jsx("div", {
            className: "w-full flex items-center",
            children: c.jsx(ho, {
              value: e,
              name: "keyword",
              onChange: (h) => t(h.target.value),
              className: "py-6",
              placeholder: "Search Products...",
            }),
          }),
        }),
        a.length
          ? null
          : c.jsx("h1", {
              className: "text-5xl font-extrabold",
              children: "No result found!",
            }),
        c.jsx("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
          children: a.map((h) =>
            c.jsx(hp, {
              handleAddtoCart: m,
              product: h,
              handleGetProductDetails: S,
            })
          ),
        }),
        c.jsx(mp, { open: n, setOpen: r, productDetails: l }),
      ],
    })
  );
}
function OM() {
  const { user: e, isAuthenticated: t, isLoading: n } = Z((o) => o.auth),
    r = Oe();
  return (
    p.useEffect(() => {
      r(Zi());
    }, [r]),
    n
      ? c.jsx(a0, { className: "w-[800] bg-black h-[600px]" })
      : c.jsx("div", {
          className: "flex flex-col overflow-hidden bg-white",
          children: c.jsxs(Bb, {
            children: [
              c.jsx(be, {
                path: "/",
                element: c.jsx(Ti, { isAuthenticated: t, user: e }),
              }),
              c.jsxs(be, {
                path: "/auth",
                element: c.jsx(Ti, {
                  isAuthenticated: t,
                  user: e,
                  children: c.jsx(eN, {}),
                }),
                children: [
                  c.jsx(be, { path: "login", element: c.jsx(u2, {}) }),
                  c.jsx(be, { path: "register", element: c.jsx(f2, {}) }),
                ],
              }),
              c.jsxs(be, {
                path: "/admin",
                element: c.jsx(Ti, {
                  isAuthenticated: t,
                  user: e,
                  children: c.jsx(O2, {}),
                }),
                children: [
                  c.jsx(be, { path: "dashboard", element: c.jsx(D2, {}) }),
                  c.jsx(be, { path: "products", element: c.jsx(K2, {}) }),
                  c.jsx(be, { path: "orders", element: c.jsx(lO, {}) }),
                  c.jsx(be, { path: "features", element: c.jsx(cO, {}) }),
                ],
              }),
              c.jsxs(be, {
                path: "/shop",
                element: c.jsx(Ti, {
                  isAuthenticated: t,
                  user: e,
                  children: c.jsx(BA, {}),
                }),
                children: [
                  c.jsx(be, { path: "home", element: c.jsx(JA, {}) }),
                  c.jsx(be, { path: "listing", element: c.jsx(iM, {}) }),
                  c.jsx(be, { path: "checkout", element: c.jsx(vM, {}) }),
                  c.jsx(be, { path: "account", element: c.jsx(bM, {}) }),
                  c.jsx(be, { path: "paypal-return", element: c.jsx(jM, {}) }),
                  c.jsx(be, {
                    path: "payment-success",
                    element: c.jsx(RM, {}),
                  }),
                  c.jsx(be, { path: "search", element: c.jsx(_M, {}) }),
                ],
              }),
              c.jsx(be, { path: "/unauth-page", element: c.jsx(NM, {}) }),
              c.jsx(be, { path: "*", element: c.jsx(VA, {}) }),
            ],
          }),
        })
  );
}
const AM = Vk({
  reducer: {
    auth: $_,
    adminProducts: H2,
    adminOrder: sO,
    shopProducts: KA,
    shopCart: IA,
    shopAddress: dM,
    shopOrder: gM,
    shopSearch: TM,
    shopReview: XA,
    commonFeature: F2,
  },
});
var xp = "ToastProvider",
  [wp, MM, LM] = pl("Toast"),
  [Z1, dL] = Ft("Toast", [LM]),
  [FM, ql] = Z1(xp),
  eS = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [a, l] = p.useState(null),
      [u, d] = p.useState(0),
      f = p.useRef(!1),
      m = p.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${xp}\`. Expected non-empty \`string\`.`
        ),
      c.jsx(wp.Provider, {
        scope: t,
        children: c.jsx(FM, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: p.useCallback(() => d((S) => S + 1), []),
          onToastRemove: p.useCallback(() => d((S) => S - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: m,
          children: i,
        }),
      })
    );
  };
eS.displayName = xp;
var tS = "ToastViewport",
  DM = ["F8"],
  xd = "toast.viewportPause",
  wd = "toast.viewportResume",
  nS = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = DM,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      i = ql(tS, n),
      a = MM(n),
      l = p.useRef(null),
      u = p.useRef(null),
      d = p.useRef(null),
      f = p.useRef(null),
      m = ee(t, f, i.onViewportChange),
      S = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      h = i.toastCount > 0;
    p.useEffect(() => {
      const w = (v) => {
        var x;
        r.every((C) => v[C] || v.code === C) &&
          ((x = f.current) == null || x.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      p.useEffect(() => {
        const w = l.current,
          v = f.current;
        if (h && w && v) {
          const g = () => {
              if (!i.isClosePausedRef.current) {
                const N = new CustomEvent(xd);
                v.dispatchEvent(N), (i.isClosePausedRef.current = !0);
              }
            },
            x = () => {
              if (i.isClosePausedRef.current) {
                const N = new CustomEvent(wd);
                v.dispatchEvent(N), (i.isClosePausedRef.current = !1);
              }
            },
            C = (N) => {
              !w.contains(N.relatedTarget) && x();
            },
            E = () => {
              w.contains(document.activeElement) || x();
            };
          return (
            w.addEventListener("focusin", g),
            w.addEventListener("focusout", C),
            w.addEventListener("pointermove", g),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", g),
            window.addEventListener("focus", x),
            () => {
              w.removeEventListener("focusin", g),
                w.removeEventListener("focusout", C),
                w.removeEventListener("pointermove", g),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", g),
                window.removeEventListener("focus", x);
            }
          );
        }
      }, [h, i.isClosePausedRef]);
    const y = p.useCallback(
      ({ tabbingDirection: w }) => {
        const g = a().map((x) => {
          const C = x.ref.current,
            E = [C, ...XM(C)];
          return w === "forwards" ? E : E.reverse();
        });
        return (w === "forwards" ? g.reverse() : g).flat();
      },
      [a]
    );
    return (
      p.useEffect(() => {
        const w = f.current;
        if (w) {
          const v = (g) => {
            var E, N, b;
            const x = g.altKey || g.ctrlKey || g.metaKey;
            if (g.key === "Tab" && !x) {
              const j = document.activeElement,
                O = g.shiftKey;
              if (g.target === w && O) {
                (E = u.current) == null || E.focus();
                return;
              }
              const M = y({ tabbingDirection: O ? "backwards" : "forwards" }),
                G = M.findIndex((A) => A === j);
              Hc(M.slice(G + 1))
                ? g.preventDefault()
                : O
                ? (N = u.current) == null || N.focus()
                : (b = d.current) == null || b.focus();
            }
          };
          return (
            w.addEventListener("keydown", v),
            () => w.removeEventListener("keydown", v)
          );
        }
      }, [a, y]),
      c.jsxs(ej, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", S),
        tabIndex: -1,
        style: { pointerEvents: h ? void 0 : "none" },
        children: [
          h &&
            c.jsx(Sd, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "forwards" });
                Hc(w);
              },
            }),
          c.jsx(wp.Slot, {
            scope: n,
            children: c.jsx(K.ol, { tabIndex: -1, ...s, ref: m }),
          }),
          h &&
            c.jsx(Sd, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "backwards" });
                Hc(w);
              },
            }),
        ],
      })
    );
  });
nS.displayName = tS;
var rS = "ToastFocusProxy",
  Sd = p.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = ql(rS, n);
    return c.jsx(xl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var u;
        const a = i.relatedTarget;
        !((u = s.viewport) != null && u.contains(a)) && r();
      },
    });
  });
Sd.displayName = rS;
var Ql = "Toast",
  IM = "toast.swipeStart",
  $M = "toast.swipeMove",
  zM = "toast.swipeCancel",
  UM = "toast.swipeEnd",
  oS = p.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [a = !0, l] = Gn({ prop: r, defaultProp: o, onChange: s });
    return c.jsx(It, {
      present: n || a,
      children: c.jsx(WM, {
        open: a,
        ...i,
        ref: t,
        onClose: () => l(!1),
        onPause: De(e.onPause),
        onResume: De(e.onResume),
        onSwipeStart: L(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: L(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: L(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: L(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            l(!1);
        }),
      }),
    });
  });
oS.displayName = Ql;
var [BM, VM] = Z1(Ql, { onClose() {} }),
  WM = p.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: m,
        onSwipeEnd: S,
        ...h
      } = e,
      y = ql(Ql, n),
      [w, v] = p.useState(null),
      g = ee(t, (A) => v(A)),
      x = p.useRef(null),
      C = p.useRef(null),
      E = o || y.duration,
      N = p.useRef(0),
      b = p.useRef(E),
      j = p.useRef(0),
      { onToastAdd: O, onToastRemove: _ } = y,
      B = De(() => {
        var U;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((U = y.viewport) == null || U.focus()),
          i();
      }),
      M = p.useCallback(
        (A) => {
          !A ||
            A === 1 / 0 ||
            (window.clearTimeout(j.current),
            (N.current = new Date().getTime()),
            (j.current = window.setTimeout(B, A)));
        },
        [B]
      );
    p.useEffect(() => {
      const A = y.viewport;
      if (A) {
        const U = () => {
            M(b.current), u == null || u();
          },
          W = () => {
            const $ = new Date().getTime() - N.current;
            (b.current = b.current - $),
              window.clearTimeout(j.current),
              l == null || l();
          };
        return (
          A.addEventListener(xd, W),
          A.addEventListener(wd, U),
          () => {
            A.removeEventListener(xd, W), A.removeEventListener(wd, U);
          }
        );
      }
    }, [y.viewport, E, l, u, M]),
      p.useEffect(() => {
        s && !y.isClosePausedRef.current && M(E);
      }, [s, E, y.isClosePausedRef, M]),
      p.useEffect(() => (O(), () => _()), [O, _]);
    const G = p.useMemo(() => (w ? dS(w) : null), [w]);
    return y.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            G &&
              c.jsx(HM, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: G,
              }),
            c.jsx(BM, {
              scope: n,
              onClose: B,
              children: Jn.createPortal(
                c.jsx(wp.ItemSlot, {
                  scope: n,
                  children: c.jsx(ZN, {
                    asChild: !0,
                    onEscapeKeyDown: L(a, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || B(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(K.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...h,
                      ref: g,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: L(e.onKeyDown, (A) => {
                        A.key === "Escape" &&
                          (a == null || a(A.nativeEvent),
                          A.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            B()));
                      }),
                      onPointerDown: L(e.onPointerDown, (A) => {
                        A.button === 0 &&
                          (x.current = { x: A.clientX, y: A.clientY });
                      }),
                      onPointerMove: L(e.onPointerMove, (A) => {
                        if (!x.current) return;
                        const U = A.clientX - x.current.x,
                          W = A.clientY - x.current.y,
                          $ = !!C.current,
                          k = ["left", "right"].includes(y.swipeDirection),
                          P = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          D = k ? P(0, U) : 0,
                          V = k ? 0 : P(0, W),
                          X = A.pointerType === "touch" ? 10 : 2,
                          je = { x: D, y: V },
                          ge = { originalEvent: A, delta: je };
                        $
                          ? ((C.current = je), _i($M, f, ge, { discrete: !1 }))
                          : Km(je, y.swipeDirection, X)
                          ? ((C.current = je),
                            _i(IM, d, ge, { discrete: !1 }),
                            A.target.setPointerCapture(A.pointerId))
                          : (Math.abs(U) > X || Math.abs(W) > X) &&
                            (x.current = null);
                      }),
                      onPointerUp: L(e.onPointerUp, (A) => {
                        const U = C.current,
                          W = A.target;
                        if (
                          (W.hasPointerCapture(A.pointerId) &&
                            W.releasePointerCapture(A.pointerId),
                          (C.current = null),
                          (x.current = null),
                          U)
                        ) {
                          const $ = A.currentTarget,
                            k = { originalEvent: A, delta: U };
                          Km(U, y.swipeDirection, y.swipeThreshold)
                            ? _i(UM, S, k, { discrete: !0 })
                            : _i(zM, m, k, { discrete: !0 }),
                            $.addEventListener(
                              "click",
                              (P) => P.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  HM = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = ql(Ql, t),
      [s, i] = p.useState(!1),
      [a, l] = p.useState(!1);
    return (
      qM(() => i(!0)),
      p.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : c.jsx(Gs, {
            asChild: !0,
            children: c.jsx(xl, {
              ...r,
              children:
                s && c.jsxs(c.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  KM = "ToastTitle",
  sS = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(K.div, { ...r, ref: t });
  });
sS.displayName = KM;
var GM = "ToastDescription",
  iS = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(K.div, { ...r, ref: t });
  });
iS.displayName = GM;
var aS = "ToastAction",
  lS = p.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(uS, {
          altText: n,
          asChild: !0,
          children: c.jsx(Sp, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${aS}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
lS.displayName = aS;
var cS = "ToastClose",
  Sp = p.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = VM(cS, n);
    return c.jsx(uS, {
      asChild: !0,
      children: c.jsx(K.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: L(e.onClick, o.onClose),
      }),
    });
  });
Sp.displayName = cS;
var uS = p.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return c.jsx(K.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function dS(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        QM(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...dS(r));
      }
    }),
    t
  );
}
function _i(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Nf(o, s) : o.dispatchEvent(s);
}
var Km = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function qM(e = () => {}) {
  const t = De(e);
  _e(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function QM(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function XM(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Hc(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var YM = eS,
  fS = nS,
  pS = oS,
  hS = sS,
  mS = iS,
  gS = lS,
  vS = Sp;
const JM = YM,
  yS = p.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(fS, {
      ref: n,
      className: I(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
yS.displayName = fS.displayName;
const ZM = Ws(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  xS = p.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(pS, { ref: r, className: I(ZM({ variant: t }), e), ...n })
  );
xS.displayName = pS.displayName;
const eL = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(gS, {
    ref: n,
    className: I(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
eL.displayName = gS.displayName;
const wS = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(vS, {
    ref: n,
    className: I(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(Nl, { className: "h-4 w-4" }),
  })
);
wS.displayName = vS.displayName;
const SS = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(hS, { ref: n, className: I("text-sm font-semibold", e), ...t })
);
SS.displayName = hS.displayName;
const CS = p.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(mS, { ref: n, className: I("text-sm opacity-90", e), ...t })
);
CS.displayName = mS.displayName;
function tL() {
  const { toasts: e } = St();
  return c.jsxs(JM, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return c.jsxs(
          xS,
          {
            ...s,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx(SS, { children: n }),
                  r && c.jsx(CS, { children: r }),
                ],
              }),
              o,
              c.jsx(wS, {}),
            ],
          },
          t
        );
      }),
      c.jsx(yS, {}),
    ],
  });
}
iy(document.getElementById("root")).render(
  c.jsx(Xb, {
    children: c.jsxs(i2, {
      store: AM,
      children: [c.jsx(OM, {}), c.jsx(tL, {})],
    }),
  })
);
