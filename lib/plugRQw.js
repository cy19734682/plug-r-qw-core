import { getCurrentInstance as gt, defineComponent as D, resolveComponent as F, openBlock as j, createElementBlock as B, normalizeClass as le, normalizeStyle as R, createBlock as Re, createCommentVNode as pn, renderSlot as re, ref as L, computed as O, withDirectives as K, unref as b, createElementVNode as P, toDisplayString as W, createVNode as N, withCtx as me, createTextVNode as ve, vShow as ie, resolveDirective as gn, Fragment as ht, renderList as mt, onBeforeMount as pr, watch as ze, nextTick as hn, isRef as xe, onMounted as bt, withModifiers as gr, mergeProps as hr, onUnmounted as mr, h as G } from "vue";
import br from "deepmerge";
import Be from "sweetalert";
import { useRouter as yr, useRoute as vr } from "vue-router";
import { useI18n as wr } from "vue-i18n";
import nt from "axios";
import { TableColumnConfig as _r, Input as Ar, Modal as de, Button as Ze } from "view-ui-plus";
const mn = {
  r: {
    locale: "zh-CN",
    testMsg: "测试国际化",
    confirm: "确定",
    cancel: "取消",
    clear: "清空",
    info: {
      title: "提示",
      text: "确定执行该操作？"
    },
    http: {
      403: "登录状态失效,请重新登录！",
      409: "该账号已在其他地方登录,点击确定退出。"
    },
    pSelect: "请选择",
    pInput: "请输入",
    selectDate: "选择日期",
    selectTime: "选择时间",
    search: "搜索",
    level: {
      1: "一级",
      2: "二级",
      3: "三级"
    },
    unknown: "未知",
    title: "标题",
    required: "该项为必填",
    back: "返回",
    button: "按钮",
    check: "查询",
    adSearch: "高级查询",
    all: "全选",
    tabSetting: " 列表显示设置",
    delete: "删除",
    fView: "全屏预览",
    download: "点击下载",
    file: "文件",
    selectFile: "选择文件",
    notImg: "文件不是图片，不可预览",
    wrongFileType: "文件类型不被允许",
    supportType: "支持类型：",
    none: "无",
    fileIsBig: "文件过大",
    supportSize: "支持最大：",
    uploadError: "上传出错",
    uploadFail: "上传失败",
    closePreview: "关闭预览",
    fullImg: "全屏图片",
    preview: "预览",
    searchFor: "当前搜索：",
    noMore: "没有更多数据了",
    optionLabel: "选项",
    getDataError: "拉取数据出错",
    add: "添加",
    remove: "移除",
    addAll: "全部添加",
    removeAll: "全部移除",
    added: "已添加",
    notAdded: "未添加",
    success: "成功",
    failed: "失败",
    error: "出错",
    pageNotFound: "页面没找到",
    notFoundMsg: "您访问的页面不存在，点击下面按钮返回上一个页面。",
    hideMenu: "隐藏菜单",
    showMenu: "显示菜单"
  }
}, Sr = /(%|){([0-9a-zA-Z_]+)}/g;
function Tr() {
  function e(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function n(t, ...r) {
    let a;
    return r.length === 1 && typeof r[0] == "object" && (a = r[0]), (!a || !a.hasOwnProperty) && (a = {}), t === void 0 ? "" : t.replace(Sr, (o, l, i, s) => {
      let c;
      return t[s - 1] === "{" && t[s + o.length] === "}" ? i : (c = e(a, i) ? a[i] : null, c ?? "");
    });
  }
  return n;
}
const $r = Tr();
let Ue = mn;
const Ir = {
  zh: mn
};
let Et, Lt = {}, V, Or = function(e, n) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, n);
  if (V && V.global)
    return V.global.t(e, n);
  if (V && V.locale) {
    if (!Lt[V.locale] || Et != V.locale) {
      Lt[V.locale] = !0;
      let t = V.getLocaleMessage(V.locale) || {}, r = br(Ir[V.locale], t, { clone: !0 });
      Ue = r, V.setLocaleMessage(V.locale, r), Et = V.locale;
    }
    return V.hlang(e, n);
  }
};
const we = function(e, n) {
  let t = Or.apply(this, [e, n]);
  if (t != null)
    return t;
  const r = e.split(".");
  let a = Ue;
  for (let o = 0, l = r.length; o < l; o++) {
    const i = r[o];
    if (t = a[i], o === l - 1)
      return $r(t, n);
    if (!t)
      return "";
    a = t;
  }
  return "";
}, xr = function(e) {
  Ue = e || Ue;
}, Cr = function(e) {
  V = e;
}, Ve = {
  use: xr,
  t: we,
  i18n: Cr
};
function k(e, n) {
  var r;
  const t = (r = gt()) == null ? void 0 : r.appContext.config.globalProperties;
  return we.apply(t, [e, n]);
}
const bn = /* @__PURE__ */ D({
  __name: "HeaderBt",
  props: {
    icon: {},
    withIcon: { type: Boolean, default: !1 },
    iconSize: { default: 18 },
    color: { default: "inherit" },
    borderColor: { default: "#fff" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e;
    function r() {
      t.disabled || n("click");
    }
    return (a, o) => {
      const l = F("Icon");
      return j(), B("div", {
        class: le({ headerBtCTM: !0, withIconCTM: a.icon || a.withIcon, disabled: a.disabled }),
        style: R({ color: a.color, borderLeftColor: a.borderColor }),
        onClick: r
      }, [
        a.icon ? (j(), Re(l, {
          key: 0,
          size: a.iconSize,
          type: a.icon
        }, null, 8, ["size", "type"])) : pn("", !0),
        re(a.$slots, "default")
      ], 6);
    };
  }
}), Mr = { class: "headerTxtAM" }, Pr = { class: "contentAM" }, jr = /* @__PURE__ */ D({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(e, { expose: n, emit: t }) {
    const r = e;
    let a = L(!1);
    const o = O(() => typeof r.headerFontSize == "number" ? r.headerFontSize + "px" : r.headerFontSize), l = O(() => ({ zIndex: r.zIndex }));
    function i() {
      a.value = !0, t("on-open");
    }
    function s(c) {
      a.value = !1, t("on-close", c === !0);
    }
    return n({
      open: i,
      close: s
    }), (c, d) => K((j(), B("div", {
      class: "fullScreenPopBoxAM",
      style: R(b(l))
    }, [
      P("div", {
        class: "headerAM",
        style: R({ color: c.headerColor, backgroundColor: c.headerBg, fontSize: b(o) })
      }, [
        P("span", Mr, W(c.title || b(k)("r.title")), 1),
        N(bn, {
          icon: "md-return-left",
          onClick: s
        }, {
          default: me(() => [
            ve(W(b(k)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", Pr, [
        re(c.$slots, "default")
      ])
    ], 4)), [
      [ie, b(a)]
    ]);
  }
}), kr = { class: "msg" }, Br = /* @__PURE__ */ D({
  __name: "Hello",
  setup(e) {
    let n = L("Greetings from Ricky.");
    return (t, r) => (j(), B("span", kr, W(b(n)), 1));
  }
}), Er = /* @__PURE__ */ D({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: 17 },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, r = O(() => Math.floor(t.size / 17 * 12) + "px");
    function a(o) {
      t.disabled || n("click", o);
    }
    return (o, l) => {
      const i = F("Icon"), s = gn("has");
      return K((j(), B("div", {
        class: le(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: a,
        style: R({ "font-size": b(r) })
      }, [
        N(i, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        ve(" " + W(o.name || b(k)("r.button")), 1)
      ], 6)), [
        [s, o.has]
      ]);
    };
  }
}), Lr = { class: "c404K" }, Fr = /* @__PURE__ */ P("div", { class: "t404" }, "404", -1), Nr = { class: "ct404" }, Ur = { class: "p404" }, Vr = /* @__PURE__ */ D({
  __name: "Page404",
  setup(e) {
    const t = gt().appContext.config.globalProperties.$router;
    function r() {
      t.go(-1);
    }
    return (a, o) => {
      const l = F("Button");
      return j(), B("div", Lr, [
        Fr,
        P("div", Nr, "UH OH! " + W(b(k)("r.pageNotFound")), 1),
        P("div", Ur, W(b(k)("r.notFoundMsg")), 1),
        N(l, {
          class: "bt404",
          onClick: r
        }, {
          default: me(() => [
            ve(W(b(k)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var Rr = typeof global == "object" && global && global.Object === Object && global;
const yn = Rr;
var zr = typeof self == "object" && self && self.Object === Object && self, Dr = yn || zr || Function("return this")();
const X = Dr;
var Hr = X.Symbol;
const be = Hr;
var vn = Object.prototype, Gr = vn.hasOwnProperty, Wr = vn.toString, $e = be ? be.toStringTag : void 0;
function Jr(e) {
  var n = Gr.call(e, $e), t = e[$e];
  try {
    e[$e] = void 0;
    var r = !0;
  } catch {
  }
  var a = Wr.call(e);
  return r && (n ? e[$e] = t : delete e[$e]), a;
}
var qr = Object.prototype, Xr = qr.toString;
function Kr(e) {
  return Xr.call(e);
}
var Yr = "[object Null]", Zr = "[object Undefined]", Ft = be ? be.toStringTag : void 0;
function Q(e) {
  return e == null ? e === void 0 ? Zr : Yr : Ft && Ft in Object(e) ? Jr(e) : Kr(e);
}
function ee(e) {
  return e != null && typeof e == "object";
}
var Qr = "[object Symbol]";
function eo(e) {
  return typeof e == "symbol" || ee(e) && Q(e) == Qr;
}
var to = Array.isArray;
const De = to;
var no = /\s/;
function ro(e) {
  for (var n = e.length; n-- && no.test(e.charAt(n)); )
    ;
  return n;
}
var oo = /^\s+/;
function ao(e) {
  return e && e.slice(0, ro(e) + 1).replace(oo, "");
}
function Z(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Nt = 0 / 0, lo = /^[-+]0x[0-9a-f]+$/i, io = /^0b[01]+$/i, so = /^0o[0-7]+$/i, uo = parseInt;
function Ut(e) {
  if (typeof e == "number")
    return e;
  if (eo(e))
    return Nt;
  if (Z(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Z(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ao(e);
  var t = io.test(e);
  return t || so.test(e) ? uo(e.slice(2), t ? 2 : 8) : lo.test(e) ? Nt : +e;
}
var co = "[object AsyncFunction]", fo = "[object Function]", po = "[object GeneratorFunction]", go = "[object Proxy]";
function yt(e) {
  if (!Z(e))
    return !1;
  var n = Q(e);
  return n == fo || n == po || n == co || n == go;
}
var ho = X["__core-js_shared__"];
const Qe = ho;
var Vt = function() {
  var e = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function mo(e) {
  return !!Vt && Vt in e;
}
var bo = Function.prototype, yo = bo.toString;
function ce(e) {
  if (e != null) {
    try {
      return yo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vo = /[\\^$.*+?()[\]{}|]/g, wo = /^\[object .+?Constructor\]$/, _o = Function.prototype, Ao = Object.prototype, So = _o.toString, To = Ao.hasOwnProperty, $o = RegExp(
  "^" + So.call(To).replace(vo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Io(e) {
  if (!Z(e) || mo(e))
    return !1;
  var n = yt(e) ? $o : wo;
  return n.test(ce(e));
}
function Oo(e, n) {
  return e == null ? void 0 : e[n];
}
function fe(e, n) {
  var t = Oo(e, n);
  return Io(t) ? t : void 0;
}
var xo = fe(X, "WeakMap");
const rt = xo;
var Rt = Object.create, Co = function() {
  function e() {
  }
  return function(n) {
    if (!Z(n))
      return {};
    if (Rt)
      return Rt(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const Mo = Co;
function Po(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
var jo = function() {
  try {
    var e = fe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const zt = jo;
function ko(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var Bo = 9007199254740991, Eo = /^(?:0|[1-9]\d*)$/;
function Lo(e, n) {
  var t = typeof e;
  return n = n ?? Bo, !!n && (t == "number" || t != "symbol" && Eo.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function wn(e, n, t) {
  n == "__proto__" && zt ? zt(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function _n(e, n) {
  return e === n || e !== e && n !== n;
}
var Fo = Object.prototype, No = Fo.hasOwnProperty;
function An(e, n, t) {
  var r = e[n];
  (!(No.call(e, n) && _n(r, t)) || t === void 0 && !(n in e)) && wn(e, n, t);
}
function He(e, n, t, r) {
  var a = !t;
  t || (t = {});
  for (var o = -1, l = n.length; ++o < l; ) {
    var i = n[o], s = r ? r(t[i], e[i], i, t, e) : void 0;
    s === void 0 && (s = e[i]), a ? wn(t, i, s) : An(t, i, s);
  }
  return t;
}
var Uo = 9007199254740991;
function Sn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Uo;
}
function vt(e) {
  return e != null && Sn(e.length) && !yt(e);
}
var Vo = Object.prototype;
function Ge(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Vo;
  return e === t;
}
function Ro(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var zo = "[object Arguments]";
function Dt(e) {
  return ee(e) && Q(e) == zo;
}
var Tn = Object.prototype, Do = Tn.hasOwnProperty, Ho = Tn.propertyIsEnumerable, Go = Dt(function() {
  return arguments;
}()) ? Dt : function(e) {
  return ee(e) && Do.call(e, "callee") && !Ho.call(e, "callee");
};
const $n = Go;
function Wo() {
  return !1;
}
var In = typeof exports == "object" && exports && !exports.nodeType && exports, Ht = In && typeof module == "object" && module && !module.nodeType && module, Jo = Ht && Ht.exports === In, Gt = Jo ? X.Buffer : void 0, qo = Gt ? Gt.isBuffer : void 0, Xo = qo || Wo;
const wt = Xo;
var Ko = "[object Arguments]", Yo = "[object Array]", Zo = "[object Boolean]", Qo = "[object Date]", ea = "[object Error]", ta = "[object Function]", na = "[object Map]", ra = "[object Number]", oa = "[object Object]", aa = "[object RegExp]", la = "[object Set]", ia = "[object String]", sa = "[object WeakMap]", ua = "[object ArrayBuffer]", ca = "[object DataView]", fa = "[object Float32Array]", da = "[object Float64Array]", pa = "[object Int8Array]", ga = "[object Int16Array]", ha = "[object Int32Array]", ma = "[object Uint8Array]", ba = "[object Uint8ClampedArray]", ya = "[object Uint16Array]", va = "[object Uint32Array]", M = {};
M[fa] = M[da] = M[pa] = M[ga] = M[ha] = M[ma] = M[ba] = M[ya] = M[va] = !0;
M[Ko] = M[Yo] = M[ua] = M[Zo] = M[ca] = M[Qo] = M[ea] = M[ta] = M[na] = M[ra] = M[oa] = M[aa] = M[la] = M[ia] = M[sa] = !1;
function wa(e) {
  return ee(e) && Sn(e.length) && !!M[Q(e)];
}
function _t(e) {
  return function(n) {
    return e(n);
  };
}
var On = typeof exports == "object" && exports && !exports.nodeType && exports, Oe = On && typeof module == "object" && module && !module.nodeType && module, _a = Oe && Oe.exports === On, et = _a && yn.process, Aa = function() {
  try {
    var e = Oe && Oe.require && Oe.require("util").types;
    return e || et && et.binding && et.binding("util");
  } catch {
  }
}();
const ye = Aa;
var Wt = ye && ye.isTypedArray, Sa = Wt ? _t(Wt) : wa;
const xn = Sa;
var Ta = Object.prototype, $a = Ta.hasOwnProperty;
function Cn(e, n) {
  var t = De(e), r = !t && $n(e), a = !t && !r && wt(e), o = !t && !r && !a && xn(e), l = t || r || a || o, i = l ? Ro(e.length, String) : [], s = i.length;
  for (var c in e)
    (n || $a.call(e, c)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Lo(c, s))) && i.push(c);
  return i;
}
function Mn(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var Ia = Mn(Object.keys, Object);
const Oa = Ia;
var xa = Object.prototype, Ca = xa.hasOwnProperty;
function Pn(e) {
  if (!Ge(e))
    return Oa(e);
  var n = [];
  for (var t in Object(e))
    Ca.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function At(e) {
  return vt(e) ? Cn(e) : Pn(e);
}
function Ma(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var Pa = Object.prototype, ja = Pa.hasOwnProperty;
function ka(e) {
  if (!Z(e))
    return Ma(e);
  var n = Ge(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !ja.call(e, r)) || t.push(r);
  return t;
}
function St(e) {
  return vt(e) ? Cn(e, !0) : ka(e);
}
var Ba = fe(Object, "create");
const Ce = Ba;
function Ea() {
  this.__data__ = Ce ? Ce(null) : {}, this.size = 0;
}
function La(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Fa = "__lodash_hash_undefined__", Na = Object.prototype, Ua = Na.hasOwnProperty;
function Va(e) {
  var n = this.__data__;
  if (Ce) {
    var t = n[e];
    return t === Fa ? void 0 : t;
  }
  return Ua.call(n, e) ? n[e] : void 0;
}
var Ra = Object.prototype, za = Ra.hasOwnProperty;
function Da(e) {
  var n = this.__data__;
  return Ce ? n[e] !== void 0 : za.call(n, e);
}
var Ha = "__lodash_hash_undefined__";
function Ga(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ce && n === void 0 ? Ha : n, this;
}
function ue(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
ue.prototype.clear = Ea;
ue.prototype.delete = La;
ue.prototype.get = Va;
ue.prototype.has = Da;
ue.prototype.set = Ga;
function Wa() {
  this.__data__ = [], this.size = 0;
}
function We(e, n) {
  for (var t = e.length; t--; )
    if (_n(e[t][0], n))
      return t;
  return -1;
}
var Ja = Array.prototype, qa = Ja.splice;
function Xa(e) {
  var n = this.__data__, t = We(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : qa.call(n, t, 1), --this.size, !0;
}
function Ka(e) {
  var n = this.__data__, t = We(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Ya(e) {
  return We(this.__data__, e) > -1;
}
function Za(e, n) {
  var t = this.__data__, r = We(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function te(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
te.prototype.clear = Wa;
te.prototype.delete = Xa;
te.prototype.get = Ka;
te.prototype.has = Ya;
te.prototype.set = Za;
var Qa = fe(X, "Map");
const Me = Qa;
function el() {
  this.size = 0, this.__data__ = {
    hash: new ue(),
    map: new (Me || te)(),
    string: new ue()
  };
}
function tl(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Je(e, n) {
  var t = e.__data__;
  return tl(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function nl(e) {
  var n = Je(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function rl(e) {
  return Je(this, e).get(e);
}
function ol(e) {
  return Je(this, e).has(e);
}
function al(e, n) {
  var t = Je(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function _e(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
_e.prototype.clear = el;
_e.prototype.delete = nl;
_e.prototype.get = rl;
_e.prototype.has = ol;
_e.prototype.set = al;
function jn(e, n) {
  for (var t = -1, r = n.length, a = e.length; ++t < r; )
    e[a + t] = n[t];
  return e;
}
var ll = Mn(Object.getPrototypeOf, Object);
const Tt = ll;
var il = "[object Object]", sl = Function.prototype, ul = Object.prototype, kn = sl.toString, cl = ul.hasOwnProperty, fl = kn.call(Object);
function he(e) {
  if (!ee(e) || Q(e) != il)
    return !1;
  var n = Tt(e);
  if (n === null)
    return !0;
  var t = cl.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && kn.call(t) == fl;
}
function dl() {
  this.__data__ = new te(), this.size = 0;
}
function pl(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function gl(e) {
  return this.__data__.get(e);
}
function hl(e) {
  return this.__data__.has(e);
}
var ml = 200;
function bl(e, n) {
  var t = this.__data__;
  if (t instanceof te) {
    var r = t.__data__;
    if (!Me || r.length < ml - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new _e(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Ae(e) {
  var n = this.__data__ = new te(e);
  this.size = n.size;
}
Ae.prototype.clear = dl;
Ae.prototype.delete = pl;
Ae.prototype.get = gl;
Ae.prototype.has = hl;
Ae.prototype.set = bl;
function yl(e, n) {
  return e && He(n, At(n), e);
}
function vl(e, n) {
  return e && He(n, St(n), e);
}
var Bn = typeof exports == "object" && exports && !exports.nodeType && exports, Jt = Bn && typeof module == "object" && module && !module.nodeType && module, wl = Jt && Jt.exports === Bn, qt = wl ? X.Buffer : void 0, Xt = qt ? qt.allocUnsafe : void 0;
function _l(e, n) {
  if (n)
    return e.slice();
  var t = e.length, r = Xt ? Xt(t) : new e.constructor(t);
  return e.copy(r), r;
}
function Al(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++t < r; ) {
    var l = e[t];
    n(l, t, e) && (o[a++] = l);
  }
  return o;
}
function En() {
  return [];
}
var Sl = Object.prototype, Tl = Sl.propertyIsEnumerable, Kt = Object.getOwnPropertySymbols, $l = Kt ? function(e) {
  return e == null ? [] : (e = Object(e), Al(Kt(e), function(n) {
    return Tl.call(e, n);
  }));
} : En;
const $t = $l;
function Il(e, n) {
  return He(e, $t(e), n);
}
var Ol = Object.getOwnPropertySymbols, xl = Ol ? function(e) {
  for (var n = []; e; )
    jn(n, $t(e)), e = Tt(e);
  return n;
} : En;
const Ln = xl;
function Cl(e, n) {
  return He(e, Ln(e), n);
}
function Fn(e, n, t) {
  var r = n(e);
  return De(e) ? r : jn(r, t(e));
}
function Ml(e) {
  return Fn(e, At, $t);
}
function Pl(e) {
  return Fn(e, St, Ln);
}
var jl = fe(X, "DataView");
const ot = jl;
var kl = fe(X, "Promise");
const at = kl;
var Bl = fe(X, "Set");
const lt = Bl;
var Yt = "[object Map]", El = "[object Object]", Zt = "[object Promise]", Qt = "[object Set]", en = "[object WeakMap]", tn = "[object DataView]", Ll = ce(ot), Fl = ce(Me), Nl = ce(at), Ul = ce(lt), Vl = ce(rt), se = Q;
(ot && se(new ot(new ArrayBuffer(1))) != tn || Me && se(new Me()) != Yt || at && se(at.resolve()) != Zt || lt && se(new lt()) != Qt || rt && se(new rt()) != en) && (se = function(e) {
  var n = Q(e), t = n == El ? e.constructor : void 0, r = t ? ce(t) : "";
  if (r)
    switch (r) {
      case Ll:
        return tn;
      case Fl:
        return Yt;
      case Nl:
        return Zt;
      case Ul:
        return Qt;
      case Vl:
        return en;
    }
  return n;
});
const qe = se;
var Rl = Object.prototype, zl = Rl.hasOwnProperty;
function Dl(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && zl.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Hl = X.Uint8Array;
const nn = Hl;
function It(e) {
  var n = new e.constructor(e.byteLength);
  return new nn(n).set(new nn(e)), n;
}
function Gl(e, n) {
  var t = n ? It(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Wl = /\w*$/;
function Jl(e) {
  var n = new e.constructor(e.source, Wl.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var rn = be ? be.prototype : void 0, on = rn ? rn.valueOf : void 0;
function ql(e) {
  return on ? Object(on.call(e)) : {};
}
function Xl(e, n) {
  var t = n ? It(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Kl = "[object Boolean]", Yl = "[object Date]", Zl = "[object Map]", Ql = "[object Number]", ei = "[object RegExp]", ti = "[object Set]", ni = "[object String]", ri = "[object Symbol]", oi = "[object ArrayBuffer]", ai = "[object DataView]", li = "[object Float32Array]", ii = "[object Float64Array]", si = "[object Int8Array]", ui = "[object Int16Array]", ci = "[object Int32Array]", fi = "[object Uint8Array]", di = "[object Uint8ClampedArray]", pi = "[object Uint16Array]", gi = "[object Uint32Array]";
function hi(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case oi:
      return It(e);
    case Kl:
    case Yl:
      return new r(+e);
    case ai:
      return Gl(e, t);
    case li:
    case ii:
    case si:
    case ui:
    case ci:
    case fi:
    case di:
    case pi:
    case gi:
      return Xl(e, t);
    case Zl:
      return new r();
    case Ql:
    case ni:
      return new r(e);
    case ei:
      return Jl(e);
    case ti:
      return new r();
    case ri:
      return ql(e);
  }
}
function mi(e) {
  return typeof e.constructor == "function" && !Ge(e) ? Mo(Tt(e)) : {};
}
var bi = "[object Map]";
function yi(e) {
  return ee(e) && qe(e) == bi;
}
var an = ye && ye.isMap, vi = an ? _t(an) : yi;
const wi = vi;
var _i = "[object Set]";
function Ai(e) {
  return ee(e) && qe(e) == _i;
}
var ln = ye && ye.isSet, Si = ln ? _t(ln) : Ai;
const Ti = Si;
var $i = 1, Ii = 2, Oi = 4, Nn = "[object Arguments]", xi = "[object Array]", Ci = "[object Boolean]", Mi = "[object Date]", Pi = "[object Error]", Un = "[object Function]", ji = "[object GeneratorFunction]", ki = "[object Map]", Bi = "[object Number]", Vn = "[object Object]", Ei = "[object RegExp]", Li = "[object Set]", Fi = "[object String]", Ni = "[object Symbol]", Ui = "[object WeakMap]", Vi = "[object ArrayBuffer]", Ri = "[object DataView]", zi = "[object Float32Array]", Di = "[object Float64Array]", Hi = "[object Int8Array]", Gi = "[object Int16Array]", Wi = "[object Int32Array]", Ji = "[object Uint8Array]", qi = "[object Uint8ClampedArray]", Xi = "[object Uint16Array]", Ki = "[object Uint32Array]", C = {};
C[Nn] = C[xi] = C[Vi] = C[Ri] = C[Ci] = C[Mi] = C[zi] = C[Di] = C[Hi] = C[Gi] = C[Wi] = C[ki] = C[Bi] = C[Vn] = C[Ei] = C[Li] = C[Fi] = C[Ni] = C[Ji] = C[qi] = C[Xi] = C[Ki] = !0;
C[Pi] = C[Un] = C[Ui] = !1;
function Le(e, n, t, r, a, o) {
  var l, i = n & $i, s = n & Ii, c = n & Oi;
  if (t && (l = a ? t(e, r, a, o) : t(e)), l !== void 0)
    return l;
  if (!Z(e))
    return e;
  var d = De(e);
  if (d) {
    if (l = Dl(e), !i)
      return Po(e, l);
  } else {
    var u = qe(e), p = u == Un || u == ji;
    if (wt(e))
      return _l(e, i);
    if (u == Vn || u == Nn || p && !a) {
      if (l = s || p ? {} : mi(e), !i)
        return s ? Cl(e, vl(l, e)) : Il(e, yl(l, e));
    } else {
      if (!C[u])
        return a ? e : {};
      l = hi(e, u, i);
    }
  }
  o || (o = new Ae());
  var h = o.get(e);
  if (h)
    return h;
  o.set(e, l), Ti(e) ? e.forEach(function(_) {
    l.add(Le(_, n, t, _, e, o));
  }) : wi(e) && e.forEach(function(_, v) {
    l.set(v, Le(_, n, t, v, e, o));
  });
  var g = c ? s ? Pl : Ml : s ? St : At, f = d ? void 0 : g(e);
  return ko(f || e, function(_, v) {
    f && (v = _, _ = e[v]), An(l, v, Le(_, n, t, v, e, o));
  }), l;
}
var Yi = 1, Zi = 4;
function oe(e) {
  return Le(e, Yi | Zi);
}
var Qi = function() {
  return X.Date.now();
};
const tt = Qi;
var es = "Expected a function", ts = Math.max, ns = Math.min;
function rs(e, n, t) {
  var r, a, o, l, i, s, c = 0, d = !1, u = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(es);
  n = Ut(n) || 0, Z(t) && (d = !!t.leading, u = "maxWait" in t, o = u ? ts(Ut(t.maxWait) || 0, n) : o, p = "trailing" in t ? !!t.trailing : p);
  function h(w) {
    var x = r, J = a;
    return r = a = void 0, c = w, l = e.apply(J, x), l;
  }
  function g(w) {
    return c = w, i = setTimeout(v, n), d ? h(w) : l;
  }
  function f(w) {
    var x = w - s, J = w - c, je = n - x;
    return u ? ns(je, o - J) : je;
  }
  function _(w) {
    var x = w - s, J = w - c;
    return s === void 0 || x >= n || x < 0 || u && J >= o;
  }
  function v() {
    var w = tt();
    if (_(w))
      return S(w);
    i = setTimeout(v, f(w));
  }
  function S(w) {
    return i = void 0, p && r ? h(w) : (r = a = void 0, l);
  }
  function A() {
    i !== void 0 && clearTimeout(i), c = 0, r = s = a = i = void 0;
  }
  function $() {
    return i === void 0 ? l : S(tt());
  }
  function E() {
    var w = tt(), x = _(w);
    if (r = arguments, a = this, s = w, x) {
      if (i === void 0)
        return g(s);
      if (u)
        return clearTimeout(i), i = setTimeout(v, n), h(s);
    }
    return i === void 0 && (i = setTimeout(v, n)), l;
  }
  return E.cancel = A, E.flush = $, E;
}
var os = "[object Boolean]";
function as(e) {
  return e === !0 || e === !1 || ee(e) && Q(e) == os;
}
var ls = "[object Map]", is = "[object Set]", ss = Object.prototype, us = ss.hasOwnProperty;
function Fe(e) {
  if (e == null)
    return !0;
  if (vt(e) && (De(e) || typeof e == "string" || typeof e.splice == "function" || wt(e) || xn(e) || $n(e)))
    return !e.length;
  var n = qe(e);
  if (n == ls || n == is)
    return !e.size;
  if (Ge(e))
    return !Pn(e).length;
  for (var t in e)
    if (us.call(e, t))
      return !1;
  return !0;
}
var cs = "[object Number]";
function Ne(e) {
  return typeof e == "number" || ee(e) && Q(e) == cs;
}
function Xe(e, n, t) {
  const r = (...a) => we.apply(this, a);
  return new Promise((a, o) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let l = r("r.confirm"), i = r("r.cancel"), s = !1, c = "swalConfirmBt", d = "swalCancelBt";
      const u = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let p = "";
      e.text && u.test(T(e.text)) ? p = "content" : e.text && T(e.text) === "String" && (p = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (i = e.buttons.cancel.text) && (s = !0), e.buttons.cancel.className && (d = e.buttons.cancel.className), e.buttons.confirm.text && (l = e.buttons.confirm.text), e.buttons.confirm.className && (c = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (i = e.buttons[0], s = !0), e.buttons[1] && (l = e.buttons[1]))), Be({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [p]: e.text,
        buttons: {
          confirm: {
            text: l,
            value: !0,
            visible: !0,
            className: c
          },
          cancel: {
            text: i,
            value: null,
            visible: s,
            className: d
          }
        }
      }).then((h) => {
        h && typeof e.onOk == "function" && e.onOk(), a(h);
      }).catch((h) => {
        o(h);
      });
    } else if (typeof e == "string") {
      let l = "";
      if (n)
        switch (typeof n) {
          case "string":
            l = "text";
            break;
          case "object":
            l = "content";
            break;
        }
      Be({
        title: e,
        [l]: n || "",
        icon: t || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: r("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((i) => {
        a(i);
      }).catch((i) => {
        o(i);
      });
    } else if (typeof e == "boolean")
      !e && Be.close && Be.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Rn(e) {
  return e.replace(/_(\w)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function fs(e) {
  let n = document.createElement("div");
  return n.textContent !== void 0 ? n.textContent = e : n.innerText = e, n.innerHTML;
}
function ds(e) {
  let n = document.createElement("div");
  return n.innerHTML = e, n.innerText || n.textContent;
}
function ps(e) {
  return new Promise((n) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      n(t.result);
    };
  });
}
function zn(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function gs(e) {
  return T(e) === "String" && e.indexOf("image") > -1;
}
function hs(e) {
  const n = zn(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function ms(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, Dn(t);
}
function Dn(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
function it({
  group: e,
  condition: n,
  pathKey: t,
  childKey: r = "children",
  path: a = []
}) {
  if (e && Z(e)) {
    if (yt(n)) {
      if (he(e)) {
        let o = e, l = oe(a);
        if (n(o))
          return t && o[t] && l.push(o[t]), l;
        if (o[r] && !Fe(o[r])) {
          t && o[t] && l.push(o[t]);
          let i = it({
            group: o[r],
            condition: n,
            pathKey: t,
            childKey: r,
            path: l
          });
          if (!Fe(i))
            return i;
        }
      } else if (Array.isArray(e))
        for (let o of e) {
          let l = oe(a);
          if (n(o))
            return t && o[t] ? l.push(o[t]) : l.push(String(e.indexOf(o))), l;
          if (o[r] && o[r].length > 0) {
            t && o[t] ? l.push(o[t]) : l.push(String(e.indexOf(o)));
            let i = it({
              group: o[r],
              condition: n,
              pathKey: t,
              childKey: r,
              path: l
            });
            if (!Fe(i))
              return i;
          }
        }
    } else if (Array.isArray(e))
      for (let o of e) {
        let l = oe(a);
        if (o === n)
          return l.push(String(e.indexOf(o))), l;
      }
  }
  return [];
}
function Hn(e, n = 12) {
  if (T(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const r = t.clientWidth;
    return document.body.removeChild(t), r;
  }
  return 0;
}
function bs(e) {
  return e === "" ? null : e;
}
function ys(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
const vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: ms,
  emptyInput: bs,
  fakeALinkClick: Dn,
  findPath: it,
  getFileSrc: ps,
  getFileTypeByName: zn,
  getFileTypeIconByName: hs,
  getStringWidth: Hn,
  htmlDecode: ds,
  htmlEncode: fs,
  isImgByFile: gs,
  stopBubbling: ys,
  toHump: Rn
}, Symbol.toStringTag, { value: "Module" }));
function T(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function Gn(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function st(e) {
  let n = T(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = T(e[t]);
        r === "String" ? e[t] = e[t].trim() : (r === "Object" || r === "Array") && st(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, r = e.length; t < r; t++) {
      let a = T(e[t]);
      a === "String" ? e[t] = e[t].trim() : (a === "Array" || a === "Object") && st(e[t]);
    }
  return e;
}
function ut(e, n = []) {
  if (T(e) === "Array")
    return e.forEach((t, r) => {
      switch (T(t)) {
        case "Array":
        case "Object":
          ut(t);
          break;
        default:
          e[r] = null;
      }
    }), e;
  if (T(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = !0;
        for (let a of n)
          if (a === t) {
            r = !1;
            break;
          }
        if (r)
          switch (T(e[t])) {
            case "Array":
            case "Object":
              ut(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
const ws = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function _s(e) {
  let n = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && n.append(t, e[t]);
  return n;
}
function As(e, n, t = !1) {
  if (!e || !n)
    return !1;
  let r, a = "notFoundC", o = function(l, i) {
    if (Array.isArray(l)) {
      if (T(i) === "Function" && i(l))
        return a = l, [];
      for (let s of l) {
        if (a !== "notFoundC")
          break;
        if (T(i) === "Function" && i(s) || s === i)
          return a = s, [l.indexOf(s)];
        if (T(s) === "Array" || T(s) === "Object") {
          let c = o(s, i);
          if (c !== void 0)
            return [l.indexOf(s), ...c];
        }
      }
    } else if (T(l) === "Object") {
      if (T(i) === "Function" && i(l))
        return a = l, [];
      for (let s in l) {
        if (a !== "notFoundC")
          break;
        if (l.hasOwnProperty(s)) {
          if (T(i) === "Function" && i(s) || l[s] === i)
            return a = l[s], [s];
          if (T(l[s]) === "Object" || T(l[s]) === "Array") {
            let c = o(l[s], i);
            if (c !== void 0)
              return [s, ...c];
          }
        }
      }
    }
  };
  return r = o(e, n), t ? r || !1 : a === "notFoundC" ? !1 : a;
}
function Ss(e, n) {
  for (let t = 0, r = n.length; t < r; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function Ts(e, n = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`), r = e && String(e) || "";
  return t.test(r) ? Number(r.replace(t, "$1")) : e;
}
function Wn(e, n = {}, t = "get") {
  let r = document.createElement("form"), a = document.getElementsByTagName("body")[0];
  a.appendChild(r), r.setAttribute("style", "display:none"), r.setAttribute("target", ""), r.setAttribute("method", t);
  let o = e;
  if (window && window.hasOwnProperty("g")) {
    let l = Object.keys(window.g).filter((i) => i.indexOf("URL") > -1).map((i) => i.replace("URL", ""));
    for (let i of l) {
      let s = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (s.test(e) && window.g[i + "URL"]) {
        o = window.g[i + "URL"] + e.replace(s, "");
        break;
      }
    }
  }
  if (r.setAttribute("action", o), he(n)) {
    for (let i in n)
      if (n.hasOwnProperty(i) && (n[i] || n[i] === 0 || n[i] === !1 || n[i] === "")) {
        let s = document.createElement("input");
        s.setAttribute("type", "hidden"), s.setAttribute("name", i), s.setAttribute("value", n[i]), r.appendChild(s);
      }
    r.submit();
    let l = setTimeout(() => {
      a.removeChild(r), clearTimeout(l), l = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function $s(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    Xe.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Wn(e, n, t);
}
function Is(e, n, t = !1) {
  let r;
  if (e && T(n) === "Array") {
    let a = localStorage.getItem(e);
    if (a) {
      let o = JSON.parse(decodeURI(a));
      r = n.filter((l) => l.key && o.indexOf(l.title) !== -1).map((l) => l.key);
    } else
      r = n.map((o) => o.key);
  } else
    r = [];
  return t || (r = String(r)), r;
}
function ae(e) {
  return e != null && e !== "";
}
function Os(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function Jn(e, n = !1, t = "") {
  return function(r, a) {
    let o;
    if (Array.isArray(e)) {
      let s = [];
      for (let c of e)
        ae(a.row[c]) && s.push(a.row[c]);
      o = s.join(t);
    } else
      typeof e == "function" ? o = e(a) : o = a.row[e];
    let l = Hn(o), i = a.column._width;
    return o && l > i ? r(
      "Tooltip",
      {
        style: {
          width: "100%"
        },
        props: {
          content: o,
          maxWidth: i * 2
        }
      },
      [
        r(
          "span",
          {
            style: {
              width: "100%",
              display: "inline-block",
              "text-overflow": "ellipsis",
              "white-space": "nowrap",
              overflow: "hidden",
              "vertical-align": "top"
            }
          },
          o
        )
      ]
    ) : r("span", n && !ae(o) ? "--" : o);
  };
}
function xs(e) {
  if (he(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && ae(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (ae(n))
        return !1;
    return !0;
  }
  return !ae(e);
}
function Cs(e) {
  return T(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : T(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function qn({
  group: e,
  condition: n,
  key: t,
  val: r,
  childKey: a = "children"
}) {
  if (T(e) !== "Array" || T(n) !== "Function" || T(t) !== "String" || T(a) !== "String")
    return !1;
  e.forEach((o) => {
    n(o) && (T(r) === "Function" ? o[t] = r(o[t]) : o[t] = r), T(o[a]) === "Array" && o[a].length > 0 && qn({
      group: o[a],
      condition: n,
      key: t,
      val: r,
      childKey: a
    });
  });
}
function Ms(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function Xn(e) {
  return T(e) === "Number" && String(e) === "NaN";
}
function Ps(e, n = !1, t = !1) {
  if (T(e) !== "Object")
    return e;
  let r = Object.assign(e, {}), a = "";
  for (let o in r)
    if (r.hasOwnProperty(o)) {
      let l = r[o];
      l === void 0 || l === "" || T(l) === "String" && l.trim() === "" || l === null || Xn(l) ? t ? n ? a += o + "=&" : r[o] = "" : delete r[o] : n && (a += o + "=" + l + "&");
    }
  return n ? a.length > 0 ? a.substr(0, a.length - 1) : "" : r;
}
function ct(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || he(t) ? n.push(ct(t)) : ae(t) && n.push(t);
  } else if (he(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || he(e[t]) ? n[t] = ct(e[t]) : ae(e[t]) && (n[t] = e[t]));
  return n;
}
function js(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function Kn(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
const Yn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: ut,
  dataFilterOrToUrl: Ps,
  decimalDigitsLimit: Ts,
  downloadFileByFormSubmit: Wn,
  fileExport: $s,
  findCollection: As,
  formDataHeadConfig: ws,
  getColumnsKeys: Is,
  hasPermission: Ms,
  htmlPrint: js,
  isEmptyValue: xs,
  isNaN: Xn,
  isNumberValue: Os,
  isValidValue: ae,
  myTypeof: T,
  oneOf: Ss,
  removeEmptyValue: ct,
  setValByOption: qn,
  siblingElems: Kn,
  stringLength: Cs,
  toFormData: _s,
  toLine: Gn,
  tooltipManual: Jn,
  trimObj: st
}, Symbol.toStringTag, { value: "Module" })), ks = { class: "groupBoxRP" }, Bs = ["onClick"], Es = /* @__PURE__ */ D({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const n = e, t = yr();
    function r(o) {
      return o.path === n.pathName ? "active" : "";
    }
    function a(o, l) {
      o.preventDefault();
      let i = o.target;
      if (!l.children && !i.classList.contains("active")) {
        t.push(l.path);
        return;
      }
      let s = i.parentNode, c = Kn(s);
      for (let d of c) {
        d.classList.remove("open");
        const u = d.querySelectorAll(".open");
        for (let p of u)
          p.classList.remove("open");
      }
      s.classList.toggle("open");
    }
    return (o, l) => {
      const i = F("sideMenuGroup", !0);
      return j(), B("ul", ks, [
        (j(!0), B(ht, null, mt(n.data, (s, c) => (j(), B("li", {
          class: le({ dropItemRP: s.children }),
          key: s.path + c
        }, [
          P("div", {
            class: le(["menuTxtR", r(s)]),
            onClick: (d) => a(d, s),
            style: R({ paddingLeft: s.level * 20 + "px" })
          }, W(s.name || "-- no name --"), 15, Bs),
          s.children ? (j(), Re(i, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : pn("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Ls = { class: "menuListR" }, Fs = /* @__PURE__ */ D({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: n }) {
    const t = e, r = vr(), a = L(!0), o = L(), l = L(), i = O(() => a.value ? k("r.hideMenu") : k("r.showMenu")), s = O(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    pr(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? a.value = JSON.parse(u) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ze(
      () => r.path,
      (u) => {
        o.value = u, hn(d);
      },
      { immediate: !0 }
    );
    function c() {
      a.value = !a.value, localStorage.setItem("menuDisplayR", JSON.stringify(a.value)), n("on-change", a.value);
    }
    function d() {
      let u = l.value.querySelectorAll(".dropItemRP");
      for (let p of u)
        p.querySelector(".active") && !p.classList.contains("open") && p.classList.add("open");
    }
    return (u, p) => {
      const h = F("Icon");
      return j(), B("div", {
        ref_key: "menuRef",
        ref: l,
        class: "menuBoxRP"
      }, [
        K(P("div", Ls, [
          N(Es, {
            data: t.data,
            pathName: b(o)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ie, b(a)]
        ]),
        N(h, {
          type: b(s),
          size: 25,
          class: le([{ showIco: !b(a) }, "menuShowHideIco"]),
          title: b(i),
          onClick: c,
          color: b(a) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Ns = ["title"], Us = /* @__PURE__ */ D({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e;
    function r(a) {
      t.disabled || n("click", a);
    }
    return (a, o) => {
      const l = F("Icon"), i = gn("has");
      return K((j(), B("div", {
        class: le(["tableBtnsG", { disabled: t.disabled }]),
        onClick: r,
        title: t.title || b(k)("r.button")
      }, [
        N(l, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"])
      ], 10, Ns)), [
        [i, t.has]
      ]);
    };
  }
}), Vs = { class: "contentX" }, Rs = { class: "arrowA" }, zs = /* @__PURE__ */ D({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const n = e, t = L(!0), r = O(() => t ? "background:" + n.bg || "transparent" : "");
    return (a, o) => {
      const l = F("Icon");
      return j(), B("div", {
        style: R(b(r))
      }, [
        K(P("div", Vs, [
          re(a.$slots, "default")
        ], 512), [
          [ie, b(t)]
        ]),
        P("div", Rs, [
          P("div", {
            class: "btA",
            onClick: o[0] || (o[0] = (i) => t.value = !b(t))
          }, [
            N(l, {
              type: b(t) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Ds = { class: "contentZ" }, Hs = /* @__PURE__ */ D({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, r = O({
      get() {
        return t.modelValue;
      },
      set(o) {
        n("update:modelValue", o);
      }
    }), a = O(() => r.value ? "background:" + t.bg : "");
    return (o, l) => (j(), B("div", {
      style: R(b(a))
    }, [
      K(P("div", Ds, [
        re(o.$slots, "default")
      ], 512), [
        [ie, b(r)]
      ])
    ], 4));
  }
});
let ft = [], dt = [];
const Gs = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    ft.map((n) => {
      window.clearTimeout(n);
    }), dt.map((n) => {
      window.clearInterval(n);
    }), ft.length = 0, dt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Y = function(e, n) {
  let t = window.setTimeout(e, n);
  return ft.push(t), t;
}, Zn = function(e, n) {
  let t = window.setInterval(e, n);
  return dt.push(t), t;
}, Ws = /* @__PURE__ */ D({
  __name: "TableSearch",
  props: {
    modelValue: {},
    open: { type: Boolean, default: !1 },
    placeholder: {},
    showBtn: { type: Boolean, default: !0 },
    fixed: { type: Boolean, default: !1 },
    width: { default: "210px" },
    right: { default: "0" },
    top: { default: "0" },
    btnColor: { default: "inherit" }
  },
  emits: ["update:modelValue", "on-toggle", "on-search"],
  setup(e, { emit: n }) {
    const t = e;
    let r = !1;
    const a = O({
      get() {
        return t.modelValue;
      },
      set(s) {
        n("update:modelValue", s);
      }
    }), o = O({
      get() {
        return t.open;
      },
      set(s) {
        n("on-toggle", s);
      }
    }), l = O(() => o.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      r || (r = !0, n("on-search", a.value), Y(() => {
        r = !1;
      }, 2e3));
    }
    return (s, c) => {
      const d = F("Input"), u = F("icon");
      return j(), B("div", {
        class: "tableSearchV",
        style: R({ position: t.fixed ? "fixed" : "absolute", right: t.right, top: t.top })
      }, [
        re(s.$slots, "default", {}, () => [
          N(d, {
            modelValue: b(a),
            "onUpdate:modelValue": c[0] || (c[0] = (p) => xe(a) ? a.value = p : null),
            style: R({ width: t.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: t.placeholder || b(k)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        K(P("span", {
          class: "sbt",
          onClick: c[1] || (c[1] = (p) => o.value = !b(o)),
          style: R({ color: t.btnColor })
        }, [
          N(u, {
            type: b(l),
            color: t.btnColor
          }, null, 8, ["type", "color"]),
          ve(W(b(k)("r.adSearch")), 1)
        ], 4), [
          [ie, t.showBtn]
        ])
      ], 4);
    };
  }
}), Js = { class: "tabSetF" }, qs = { class: "topCheck" }, Xs = /* @__PURE__ */ D({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    top: { default: "30px" },
    right: { default: "0" },
    width: { default: "150px" },
    bg: { default: "#ccc" },
    defaultCheck: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, r = L(!0), a = L(!1), o = L(!1), l = L([]), i = O(() => {
      let f = k("r.unknown");
      return t.modelValue.length > l.value.length && (l.value = oe(t.modelValue)), l.value.map((_) => {
        let v = { label: _ && _.title || f };
        return _ && _.disableShowSetting && (v.disabled = !0), v;
      });
    }), s = O(() => i.value.filter((f) => f.disabled)), c = O({
      get() {
        return t.modelValue.map((f) => f && f.title || k("r.unknown"));
      },
      set(f) {
        let _ = l.value.filter((v) => {
          for (let S of f)
            if (S === v.title)
              return !0;
          return !1;
        });
        n("update:modelValue", _);
      }
    }), { locale: d } = wr();
    bt(() => {
      let f = k("r.unknown"), _;
      d.value ? _ = localStorage.getItem(t.sKey + "_" + d.value) : _ = localStorage.getItem(t.sKey), _ ? c.value = JSON.parse(decodeURI(_)) : t.defaultCheck && (c.value = t.modelValue.filter((v) => v.showSettingCheck).map((v) => v && v.title || f));
    });
    function u(f) {
      f.length === i.value.length ? (r.value = !1, a.value = !0) : f.length > s.value.length ? (r.value = !0, a.value = !1) : (r.value = !1, a.value = !1);
    }
    ze(() => c.value, u, {
      immediate: !0,
      deep: !0
    });
    function p() {
      o.value || (o.value = !0);
    }
    function h() {
      d.value ? localStorage.setItem(t.sKey + "_" + d.value, encodeURI(JSON.stringify(c.value))) : localStorage.setItem(t.sKey, encodeURI(JSON.stringify(c.value))), o.value = !1;
    }
    function g() {
      r.value ? a.value = !1 : a.value = !a.value, r.value = !1, a.value ? c.value = i.value.map((f) => f.label) : c.value = s.value.map((f) => f.label);
    }
    return (f, _) => {
      const v = F("Icon"), S = F("Checkbox"), A = F("CheckboxGroup");
      return j(), B("div", Js, [
        P("div", {
          class: "tabSetBt",
          onClick: p
        }, [
          N(v, {
            type: "md-settings",
            size: "17"
          }),
          P("span", null, W(b(k)("r.tabSetting")), 1)
        ]),
        K(P("div", {
          class: "tabSetCard",
          style: R({ top: f.top, right: f.right, width: f.width, backgroundColor: f.bg })
        }, [
          P("div", qs, [
            N(S, {
              indeterminate: b(r),
              modelValue: b(a),
              "onUpdate:modelValue": _[0] || (_[0] = ($) => xe(a) ? a.value = $ : null),
              onClick: gr(g, ["prevent"])
            }, {
              default: me(() => [
                ve(W(b(k)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            P("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: h
            }, W(b(k)("r.confirm")), 1)
          ]),
          N(A, {
            modelValue: b(c),
            "onUpdate:modelValue": _[1] || (_[1] = ($) => xe(c) ? c.value = $ : null)
          }, {
            default: me(() => [
              (j(!0), B(ht, null, mt(b(i), ($, E) => (j(), Re(S, {
                class: "setItem",
                label: $ && $.label,
                key: "tabSet_" + f.sKey + E,
                disabled: $ && $.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [ie, b(o)]
        ])
      ]);
    };
  }
});
let pe = 0, Pe = document.createElement("div");
Pe.setAttribute("class", "spinModal");
Pe.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(Pe);
};
function sn(e) {
  e ? Pe.classList.add("show") : Pe.classList.remove("show");
}
function Qn(e) {
  let n = pe;
  e ? pe++ : pe > 0 && pe--, n !== pe && (pe === 0 ? sn(!1) : n === 0 && sn(!0));
}
const Ks = window.location.origin;
let ge = null;
const un = (...e) => we.apply(ge, e);
let q = nt.create({
  baseURL: Ks,
  withCredentials: !0
  // 允许携带cookie
});
function Ys() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
q.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function cn() {
  if (q.store)
    if (typeof q.store == "function") {
      const e = q.store();
      e.logout && e.logout();
    } else
      q.store.dispatch("logout");
  else
    Ys();
}
q.interceptors.response.use(
  (e) => (ge && e && e.data && (e.data.code === 403 || e.data.code === 409) && ge.messageBox({
    content: un("r.http." + e.data.code),
    onOk: cn
  }), e),
  (e) => (ge && e && e.response && (e.response.status === 403 || e.response.status === 409) && ge.messageBox({
    content: un("r.http." + e.response.status),
    onOk: cn
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function ne(e, n, t, r) {
  r && r.spin && Qn(!1);
  let a = !0, o = e && e.data;
  if (o) {
    t = t || [];
    for (let l of t)
      o = o[l], a = a && o;
    return a ? o : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function Zs(e, n, t, r, a, o, l) {
  return new Promise((i, s) => {
    switch (e) {
      case "get":
        q.get(n, { params: t }).then((d) => {
          let u = ne(d, r, a, o);
          u ? i(u) : s(d);
        }).catch((d) => {
          ne({}, r, a, o), s(d);
        });
        break;
      case "delete":
        let c = l ? "params" : "data";
        q.delete(n, { [c]: t }).then((d) => {
          let u = ne(d, r, a, o);
          u ? i(u) : s(d);
        }).catch((d) => {
          ne({}, r, a, o), s(d);
        });
        break;
      case "post":
        q.post(n, t, o).then((d) => {
          let u = ne(d, r, a, o);
          u ? i(u) : s(d);
        }).catch((d) => {
          ne({}, r, a, o), s(d);
        });
        break;
      case "put":
        q.put(n, t, o).then((d) => {
          let u = ne(d, r, a, o);
          u ? i(u) : s(d);
        }).catch((d) => {
          ne({}, r, a, o), s(d);
        });
        break;
    }
  });
}
function Ee(e, n, t = {}, r, a, o, l) {
  return new Promise((i, s) => {
    if (n) {
      o && o.spin && Qn(!0);
      let c = n;
      if (window && window.hasOwnProperty("g")) {
        const p = window.g;
        let h = Object.keys(p).filter((g) => g.indexOf("URL") > -1).map((g) => g.replace("URL", ""));
        for (let g of h) {
          let f = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (f.test(n) && p[g + "URL"]) {
            c = p[g + "URL"] + n.replace(f, "");
            break;
          }
        }
      }
      let d;
      if (o && o.headers && o.headers["Content-Type"] === "multipart/form-data")
        d = t;
      else if (t && !Fe(t))
        if (Array.isArray(t)) {
          d = [];
          for (let p of t)
            (p || p === 0 || p === !1 || p === "" && o && !o.noEmptyStr) && d.push(p);
        } else {
          d = {};
          for (let p in t)
            t.hasOwnProperty(p) && (t[p] || t[p] === 0 || t[p] === !1 || t[p] === "" && o && !o.noEmptyStr) && (d[p] = t[p]);
        }
      let u = e.toLowerCase();
      Zs(u, c, d, r, a, o, l).then((p) => {
        i(p);
      }).catch((p) => {
        s(p);
      });
    } else
      console.error("没有请求地址:url"), s("没有请求地址:url");
  });
}
const Ke = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, n) {
    q.store = e, ge = n.config.globalProperties;
  },
  post(e, n, t, r, a) {
    return new Promise((o, l) => {
      Ee("post", e, n, t, r, a).then((i) => {
        o(i);
      }).catch((i) => {
        l(i);
      });
    });
  },
  put(e, n, t, r, a) {
    return new Promise((o, l) => {
      Ee("put", e, n, t, r, a).then((i) => {
        o(i);
      }).catch((i) => {
        l(i);
      });
    });
  },
  get(e, n, t, r, a) {
    return new Promise((o, l) => {
      Ee("get", e, n, t, r, a).then((i) => {
        o(i);
      }).catch((i) => {
        l(i);
      });
    });
  },
  delete(e, n, t, r, a, o = !0) {
    return new Promise((l, i) => {
      Ee("delete", e, n, t, r, a, o).then((s) => {
        l(s);
      }).catch((s) => {
        i(s);
      });
    });
  },
  all: nt.all,
  spread: nt.spread,
  config: q
}, Qs = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, eu = { class: "topBtn" }, tu = { class: "fullHeight relativeBox" }, nu = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, ru = { class: "pageContainer" }, ou = 300, au = /* @__PURE__ */ D({
  __name: "BtTablePage",
  props: {
    url: { default: "" },
    searchData: { default: () => ({}) },
    columns: { default: () => [] },
    dataHandler: {},
    selection: { type: Boolean, default: !1 },
    radio: { type: Boolean, default: !1 },
    selectionFixed: { type: [String, Boolean], default: !1 },
    rowClickSelect: { type: Boolean, default: !0 },
    data: { default: () => [] },
    pageSize: { default: 10 },
    sortable: { default: "" },
    initData: { type: Boolean, default: !0 },
    highlightRow: { type: Boolean, default: !1 },
    rowClickNum: { default: -1 },
    tableEmptyTdHandle: { type: Boolean, default: !1 },
    noBorderTable: { type: Boolean, default: !1 },
    noPage: { type: Boolean, default: !1 },
    orderDefault: { default: "desc" },
    orderKey: { default: "id" },
    orderKeyFormat: { default: "underline" },
    getDataLoading: { type: Boolean, default: !1 },
    showTopRow: { type: Boolean, default: !1 },
    lightHead: { type: Boolean, default: !1 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(e, { expose: n, emit: t }) {
    const r = e, { globalProperties: a } = gt().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ..._r });
    const l = a.pageSizes || [10, 20, 30, 40], i = L(r.data), s = L(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || r.pageSize
    ), c = L(1), d = L(0);
    let u = [], p, h, g = r.orderKey, f = r.orderDefault;
    const _ = O(() => {
      for (let m of r.columns)
        if (m.fixed)
          return !0;
      return !1;
    }), v = O(() => r.selectionFixed || _.value), S = O(() => {
      let m = {
        ...r.searchData,
        current: c.value,
        size: s.value
      };
      return r.sortable === "custom" && (r.orderKeyFormat === "underline" ? m[f] = Gn(g) : r.orderKeyFormat === "camelcase" && (m[f] = Rn(g))), m;
    }), A = O(() => {
      let m = r.columns.filter((y) => y.type !== "selection");
      if (r.selection || r.radio) {
        let y;
        r.radio ? y = {
          title: " ",
          width: 65,
          render: (H, U) => H("Radio", {
            props: {
              value: U.row.btChecked
            }
          })
        } : y = {
          type: "selection",
          width: 60
        }, r.selectionFixed && (y.fixed = r.selectionFixed), m.unshift(y);
      }
      return m.forEach((y) => {
        r.sortable === "custom" ? y.key && y.sortable !== !0 && y.sortable !== !1 && (y.sortable = "custom") : y.sortable = !1, y.align || (y.align = "center");
      }), r.tableEmptyTdHandle && m.forEach((y) => {
        y.key && y.render === void 0 && (y.tooltip ? y.render = Jn(y.key, !0) : y.render = (H, U) => {
          let z = U.row[y.key];
          return H("span", z === "" || z === null || z === void 0 ? "--" : z);
        });
      }), m;
    }), $ = O({
      get() {
        return i.value.map((m, y) => ({
          btKey: "bt-" + y,
          btChecked: !1,
          ...m
        }));
      },
      set(m) {
        i.value = m;
      }
    }), E = O(() => u.map((m) => m.id)), w = O(() => u.map((m) => m.btKey)), x = L();
    ze(() => r.searchData, J, { deep: !0 });
    function J() {
      c.value = 1, Te();
    }
    function je() {
      r.initData && Te();
    }
    function rr(m) {
      i.value.unshift(oe(m)), Y(() => {
        var y;
        (y = x.value) == null || y.clickCurrentRow(0);
      }, 100);
    }
    function or(m, y, H) {
      let U = null;
      if (as(y) && y ? U = h : Ne(y) && (U = y), U !== null) {
        let z = i.value[U];
        for (let I in m)
          m.hasOwnProperty(I) && (z[I] = m[I]);
        H && Y(() => {
          var I;
          (I = x.value) == null || I.clickCurrentRow(U);
        }, 10);
      }
    }
    function ar(m) {
      i.value.splice(m, 1), Y(() => {
        var y;
        (y = x.value) == null || y.clickCurrentRow(0);
      }, 100);
    }
    function lr(m, y) {
      var H;
      m.btChecked && r.radio || (r.selection || r.radio) && r.rowClickSelect && ((H = x.value) == null || H.toggleSelect(y));
    }
    function ir(m, y) {
      p = y.btKey, h = Number(y.btKey.split("-")[1]), r.radio && (i.value[h].btChecked = !0);
    }
    function sr(m) {
      if (r.radio)
        for (let y of $.value)
          y.btKey !== p && (i.value[Number(y.btKey.split("-")[1])].btChecked = !1);
      u = m;
    }
    function ur() {
      return oe(u);
    }
    function cr(m) {
      c.value = m, Te();
    }
    function fr(m) {
      s.value = m, localStorage.setItem("btPageSize", String(m)), c.value === 1 && Te();
    }
    function dr({ key: m, order: y }) {
      f === "normal" ? (g = r.orderKey, f = r.orderDefault) : (g = m, f = y), c.value = 1, Se();
    }
    function ke() {
      var m;
      if (r.radio) {
        if (w.value.length > 0 && $.value.length > 0) {
          let y = w.value[0].split("-")[1];
          $.value[y].btChecked = !1;
        }
      } else
        (m = x.value) == null || m.selectAll(!1);
      u.length > 0 && (u = [], t("on-selection-change", [])), p = null, h = null;
    }
    function Ye() {
      i.value = [], ke(), c.value = 1, d.value = 0;
    }
    function Se(m, y, H) {
      return new Promise((U) => {
        m && (f = m), y && (g = y), r.url ? Ke.get(r.url, S.value, "", [], { spin: r.getDataLoading }).then((z) => {
          var Ot, xt, Ct, Mt, Pt, jt, kt, Bt;
          let I;
          H || ke(), typeof r.dataHandler == "function" ? I = r.dataHandler(z) : I = z, I.data ? ((Ot = I.data) != null && Ot.records || ((xt = I.data) == null ? void 0 : xt.records) === null ? i.value = ((Ct = I.data) == null ? void 0 : Ct.records) || [] : I.data.page ? ((Mt = I.data.page) != null && Mt.records || ((Pt = I.data.page) == null ? void 0 : Pt.records) === null) && (i.value = I.data.page.records || []) : I.data.data ? ((jt = I.data.data) != null && jt.records || ((kt = I.data.data) == null ? void 0 : kt.records) === null) && (i.value = ((Bt = I.data.data) == null ? void 0 : Bt.records) || []) : i.value = I.data, d.value = I.data.page && I.data.page.total || I.data.data && I.data.data.total || I.data.total || I.total || 0, d.value === 0 && c.value > 1 && i.value && i.value.length === 0 ? c.value = 1 : c.value > 1 && d.value <= (c.value - 1) * s.value && (c.value--, hn(function() {
            Se(m, y);
          })), t("on-data-change", I), U(I)) : (console.warn("请求返回数据有误，无法使用"), Ye(), t("on-data-change", I));
        }).catch((z) => {
          console.warn(z), ke(), Ye(), t("on-data-change", z);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Te(m, y, H) {
      r.radio && (m || r.rowClickNum !== -1) ? Se(y, H, m).then(() => {
        i.value.length > 0 && Y(() => {
          var U, z;
          m ? (U = x.value) == null || U.clickCurrentRow(h || 0) : (z = x.value) == null || z.clickCurrentRow(r.rowClickNum);
        }, 10);
      }) : Se();
    }
    return bt(je), n({
      selectedIds: E,
      addRow: rr,
      setRowData: or,
      deleteRow: ar,
      getSelected: ur,
      clearSelect: ke,
      clearTableData: Ye,
      getTableData: Se,
      getDataAndClickRow: Te
    }), (m, y) => {
      const H = F("Table"), U = F("Page");
      return j(), B("div", Qs, [
        K(P("div", eu, [
          re(m.$slots, "tableSetting"),
          re(m.$slots, "topMsg"),
          re(m.$slots, "topBtnGroup")
        ], 512), [
          [ie, m.showTopRow]
        ]),
        P("div", {
          class: le(["tableContainer fullHeight", { noTop: !m.showTopRow, noPage: m.noPage }])
        }, [
          P("div", tu, [
            P("div", nu, [
              N(H, hr({
                ref_key: "tableRef",
                ref: x
              }, m.$attrs, {
                height: b(v) && ou || null,
                class: { noBorderTable: m.noBorderTable, fullHeightTable: !b(v), lightHeadO: m.lightHead },
                columns: b(A),
                data: b($),
                "highlight-row": m.radio || m.highlightRow,
                onOnSelect: ir,
                onOnSelectionChange: sr,
                onOnSortChange: dr,
                onOnRowClick: lr
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        K(P("div", ru, [
          N(U, {
            "page-size-opts": b(l),
            total: b(d),
            current: b(c),
            "page-size": b(s),
            "show-sizer": "",
            "show-total": "",
            showElevator: !m.noElevator,
            size: m.pageComponentSize,
            onOnChange: cr,
            onOnPageSizeChange: fr
          }, null, 8, ["page-size-opts", "total", "current", "page-size", "showElevator", "size"])
        ], 512), [
          [ie, !m.noPage]
        ])
      ], 512);
    };
  }
}), lu = /* @__PURE__ */ D({
  __name: "SelectInput",
  props: {
    modelValue: { default: () => ({
      key: null,
      val: null
    }) },
    labelWidth: { default: 160 },
    labelTextAlign: { default: "right" },
    itemWidth: { default: 200 },
    selectOption: { default: () => [] },
    placeholder: {},
    clearable: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: n }) {
    const t = e, r = O({
      get() {
        return t.modelValue && t.modelValue.key || null;
      },
      set(c) {
        let d = {
          key: c,
          val: null
        };
        r.value && r.value !== c && (d.beforeKey = r.value), n("update:modelValue", d), n("on-change", d);
      }
    }), a = O({
      get() {
        return t.modelValue && t.modelValue.val || null;
      },
      set(c) {
        n("update:modelValue", {
          key: r.value,
          val: c
        });
      }
    }), o = O(() => ({
      width: t.labelWidth + "px",
      textAlign: t.labelTextAlign
    })), l = O(() => ({ width: t.itemWidth + "px" }));
    function i(c) {
      c && c.target && c.target.value !== void 0 && s({
        key: r.value,
        val: c.target.value
      });
    }
    const s = rs((c) => {
      n("on-change", c);
    }, 500);
    return (c, d) => {
      const u = F("Option"), p = F("Select"), h = F("Input");
      return j(), B("div", null, [
        N(p, {
          modelValue: b(r),
          "onUpdate:modelValue": d[0] || (d[0] = (g) => xe(r) ? r.value = g : null),
          style: R(b(o)),
          disabled: !!c.disabled,
          transfer: ""
        }, {
          default: me(() => [
            (j(!0), B(ht, null, mt(c.selectOption, (g, f) => (j(), Re(u, {
              value: g.val,
              key: "selectInputOp" + g.value + f,
              style: R({ textAlign: c.labelTextAlign })
            }, {
              default: me(() => [
                ve(W(g.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        N(h, {
          modelValue: b(a),
          "onUpdate:modelValue": d[1] || (d[1] = (g) => xe(a) ? a.value = g : null),
          placeholder: c.placeholder || b(k)("r.pInput"),
          style: R(b(l)),
          clearable: c.clearable,
          disabled: !!c.disabled,
          onOnChange: i
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var iu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function su(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var er = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(iu, function() {
    function t(u) {
      var p = [];
      return u.AMapUI && p.push(r(u.AMapUI)), u.Loca && p.push(a(u.Loca)), Promise.all(p);
    }
    function r(u) {
      return new Promise(function(p, h) {
        var g = [];
        if (u.plugins)
          for (var f = 0; f < u.plugins.length; f += 1)
            l.AMapUI.plugins.indexOf(u.plugins[f]) == -1 && g.push(u.plugins[f]);
        if (i.AMapUI === o.failed)
          h("前次请求 AMapUI 失败");
        else if (i.AMapUI === o.notload) {
          i.AMapUI = o.loading, l.AMapUI.version = u.version || l.AMapUI.version, f = l.AMapUI.version;
          var _ = document.body || document.head, v = document.createElement("script");
          v.type = "text/javascript", v.src = "https://webapi.amap.com/ui/" + f + "/main.js", v.onerror = function(S) {
            i.AMapUI = o.failed, h("请求 AMapUI 失败");
          }, v.onload = function() {
            if (i.AMapUI = o.loaded, g.length)
              window.AMapUI.loadUI(g, function() {
                for (var S = 0, A = g.length; S < A; S++) {
                  var $ = g[S].split("/").slice(-1)[0];
                  window.AMapUI[$] = arguments[S];
                }
                for (p(); s.AMapUI.length; )
                  s.AMapUI.splice(0, 1)[0]();
              });
            else
              for (p(); s.AMapUI.length; )
                s.AMapUI.splice(0, 1)[0]();
          }, _.appendChild(v);
        } else
          i.AMapUI === o.loaded ? u.version && u.version !== l.AMapUI.version ? h("不允许多个版本 AMapUI 混用") : g.length ? window.AMapUI.loadUI(g, function() {
            for (var S = 0, A = g.length; S < A; S++) {
              var $ = g[S].split("/").slice(-1)[0];
              window.AMapUI[$] = arguments[S];
            }
            p();
          }) : p() : u.version && u.version !== l.AMapUI.version ? h("不允许多个版本 AMapUI 混用") : s.AMapUI.push(function(S) {
            S ? h(S) : g.length ? window.AMapUI.loadUI(g, function() {
              for (var A = 0, $ = g.length; A < $; A++) {
                var E = g[A].split("/").slice(-1)[0];
                window.AMapUI[E] = arguments[A];
              }
              p();
            }) : p();
          });
      });
    }
    function a(u) {
      return new Promise(function(p, h) {
        if (i.Loca === o.failed)
          h("前次请求 Loca 失败");
        else if (i.Loca === o.notload) {
          i.Loca = o.loading, l.Loca.version = u.version || l.Loca.version;
          var g = l.Loca.version, f = l.AMap.version.startsWith("2"), _ = g.startsWith("2");
          if (f && !_ || !f && _)
            h("JSAPI 与 Loca 版本不对应！！");
          else {
            f = l.key, _ = document.body || document.head;
            var v = document.createElement("script");
            v.type = "text/javascript", v.src = "https://webapi.amap.com/loca?v=" + g + "&key=" + f, v.onerror = function(S) {
              i.Loca = o.failed, h("请求 AMapUI 失败");
            }, v.onload = function() {
              for (i.Loca = o.loaded, p(); s.Loca.length; )
                s.Loca.splice(0, 1)[0]();
            }, _.appendChild(v);
          }
        } else
          i.Loca === o.loaded ? u.version && u.version !== l.Loca.version ? h("不允许多个版本 Loca 混用") : p() : u.version && u.version !== l.Loca.version ? h("不允许多个版本 Loca 混用") : s.Loca.push(function(S) {
            S ? h(S) : h();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var o;
    (function(u) {
      u.notload = "notload", u.loading = "loading", u.loaded = "loaded", u.failed = "failed";
    })(o || (o = {}));
    var l = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = { AMap: o.notload, AMapUI: o.notload, Loca: o.notload }, s = { AMap: [], AMapUI: [], Loca: [] }, c = [], d = function(u) {
      typeof u == "function" && (i.AMap === o.loaded ? u(window.AMap) : c.push(u));
    };
    return { load: function(u) {
      return new Promise(function(p, h) {
        if (i.AMap == o.failed)
          h("");
        else if (i.AMap == o.notload) {
          var g = u.key, f = u.version, _ = u.plugins;
          g ? (window.AMap && location.host !== "lbs.amap.com" && h("禁止多种API加载方式混用"), l.key = g, l.AMap.version = f || l.AMap.version, l.AMap.plugins = _ || l.AMap.plugins, i.AMap = o.loading, f = document.body || document.head, window.___onAPILoaded = function(S) {
            if (delete window.___onAPILoaded, S)
              i.AMap = o.failed, h(S);
            else
              for (i.AMap = o.loaded, t(u).then(function() {
                p(window.AMap);
              }).catch(h); c.length; )
                c.splice(0, 1)[0]();
          }, _ = document.createElement("script"), _.type = "text/javascript", _.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + l.AMap.version + "&key=" + g + "&plugin=" + l.AMap.plugins.join(","), _.onerror = function(S) {
            i.AMap = o.failed, h(S);
          }, f.appendChild(_)) : h("请填写key");
        } else if (i.AMap == o.loaded)
          if (u.key && u.key !== l.key)
            h("多个不一致的 key");
          else if (u.version && u.version !== l.AMap.version)
            h("不允许多个版本 JSAPI 混用");
          else {
            if (g = [], u.plugins)
              for (f = 0; f < u.plugins.length; f += 1)
                l.AMap.plugins.indexOf(u.plugins[f]) == -1 && g.push(u.plugins[f]);
            g.length ? window.AMap.plugin(g, function() {
              t(u).then(function() {
                p(window.AMap);
              }).catch(h);
            }) : t(u).then(function() {
              p(window.AMap);
            }).catch(h);
          }
        else if (u.key && u.key !== l.key)
          h("多个不一致的 key");
        else if (u.version && u.version !== l.AMap.version)
          h("不允许多个版本 JSAPI 混用");
        else {
          var v = [];
          if (u.plugins)
            for (f = 0; f < u.plugins.length; f += 1)
              l.AMap.plugins.indexOf(u.plugins[f]) == -1 && v.push(u.plugins[f]);
          d(function() {
            v.length ? window.AMap.plugin(v, function() {
              t(u).then(function() {
                p(window.AMap);
              }).catch(h);
            }) : t(u).then(function() {
              p(window.AMap);
            }).catch(h);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, l = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = {
        AMap: o.notload,
        AMapUI: o.notload,
        Loca: o.notload
      }, s = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(er);
var uu = er.exports;
const cu = /* @__PURE__ */ su(uu);
let pt = { securityJsCode: "", key: "" };
function fu({ securityJsCode: e, key: n }) {
  pt.securityJsCode = e, pt.key = n;
}
function du(e) {
  return pt[e];
}
const pu = /* @__PURE__ */ D({
  __name: "InputMap",
  props: {
    modelValue: { default: () => ({}) },
    width: { default: "100%" },
    height: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    showMap: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: n }) {
    const t = e, r = O({
      get() {
        let A;
        return t.modelValue ? t.modelValue.name ? A = oe(t.modelValue) : A = {
          ...t.modelValue,
          name: null
        } : A = {
          name: null
        }, A;
      },
      set(A) {
        n("update:modelValue", oe(A));
      }
    }), a = O(() => Ne(t.width) ? t.width + "px" : t.width), o = O(() => Ne(t.height) ? t.height + "px" : t.height ? t.height : Ne(t.width) ? t.width * 0.66 + "px" : "200px"), l = O(() => ({
      width: a.value,
      position: "relative"
    })), i = O(() => ({
      width: a.value,
      height: o.value,
      marginTop: "6px",
      opacity: t.showMap ? 1 : 0,
      position: t.showMap ? "relative" : "absolute",
      top: t.showMap ? 0 : "-10000px"
    }));
    ze(
      () => t.modelValue,
      (A) => {
        A && A.lng && A.lat && v({
          lng: A.lng,
          lat: A.lat,
          name: A.name
        });
      }
    );
    const s = "mapId" + Math.floor(Math.random() * 1e9), c = L(null), d = L(null);
    let u;
    function p() {
      d.value && d.value.clientHeight < 10 || !d.value ? Y(p, 100) : Y(_, 1e3);
    }
    let h, g, f;
    function _() {
      cu.load({
        key: du("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((A) => {
        h = A, g = new h.Map(s).on("complete", () => {
          var $, E;
          f = new h.Geocoder(), t.modelValue && t.modelValue.lng && t.modelValue.lat && v({
            lng: t.modelValue.lng,
            lat: t.modelValue.lat,
            name: t.modelValue.name
          }), new h.AutoComplete({
            input: (E = ($ = c.value) == null ? void 0 : $.$el) == null ? void 0 : E.children[1]
          }).on("select", (w) => {
            w && w.poi && w.poi.name && (w.poi.location && w.poi.location.lng && w.poi.location.lat ? (v({
              name: w.poi.name,
              lng: w.poi.location.lng,
              lat: w.poi.location.lat
            }), r.value = {
              name: w.poi.name,
              lng: w.poi.location.lng,
              lat: w.poi.location.lat
            }) : g.setCity(w.poi.name, () => {
              let x = g.getCenter();
              v({
                name: w.poi.name,
                lng: x.lng,
                lat: x.lat
              }), r.value = {
                name: w.poi.name,
                lng: x.lng,
                lat: x.lat
              };
            })), n("on-change", r.value);
          }), g.on("hotspotclick", (w) => {
            v({
              name: w.name,
              lng: w.lnglat.lng,
              lat: w.lnglat.lat
            }), r.value = {
              name: w.name,
              lng: w.lnglat.lng,
              lat: w.lnglat.lat
            };
          });
        });
      });
    }
    function v({ lng: A, lat: $, name: E }) {
      g.clearMap();
      let w = new h.LngLat(A, $), x = new h.Marker({
        map: g,
        position: w,
        draggable: !0
      });
      g.add(x), S(A, $), x.on("dragend", () => {
        let J = x.getPosition();
        r.value = {
          name: E || null,
          lng: J.lng,
          lat: J.lat
        }, S(A, $);
      }), x.on("click", (J) => {
        u && u.open(g, J.target.getPosition());
      }), g.setFitView();
    }
    function S(A, $) {
      f.getAddress([A, $], (E, w) => {
        E === "complete" && w.info === "OK" && w.regeocode && w.regeocode.formattedAddress ? u = new h.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + w.regeocode.formattedAddress + "</div>",
          offset: new h.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (u = null, console.warn("地图获取位置信息失败", w));
      });
    }
    return bt(p), mr(() => {
      g && (g.destroy(), g = null, f = null, u = null);
    }), (A, $) => (j(), B("div", {
      style: R(b(l)),
      class: "containerIKJ"
    }, [
      N(b(Ar), {
        ref_key: "mapInputRef",
        ref: c,
        modelValue: b(r).name,
        "onUpdate:modelValue": $[0] || ($[0] = (E) => b(r).name = E),
        class: le({ mapInputIKJ: A.showMap }),
        placeholder: A.placeholder || b(k)("r.search"),
        disabled: A.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      P("div", {
        style: R(b(i)),
        ref_key: "mapRef",
        ref: d,
        id: s
      }, null, 4)
    ], 4));
  }
}), fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtTablePage: au,
  FullPop: jr,
  HeaderBt: bn,
  Hello: Br,
  IconTxtBtn: Er,
  InputMap: pu,
  Page404: Vr,
  SelectInput: lu,
  ShowHidePanel: zs,
  ShowHidePanelB: Hs,
  SideMenu: Fs,
  TableIconBtn: Us,
  TableSearch: Ws,
  TableSetting: Xs
}, Symbol.toStringTag, { value: "Module" }));
let Ie = !1;
function tr({
  height: e,
  width: n = 416,
  title: t,
  content: r,
  onOk: a,
  onCancel: o,
  okText: l,
  cancelText: i,
  noWarnIcon: s,
  footerAlign: c,
  cancelBt: d = !0
}) {
  const u = (...f) => we.apply(this, f);
  let h = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", g = T(r) === "String";
  de.warning({
    width: n,
    footerHide: !0,
    render: () => G(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: h
        }
      },
      [
        G(
          "div",
          {
            class: "containerN"
          },
          [
            G(
              "div",
              {
                class: "titleN"
              },
              [
                G("span", t || u("r.info.title")),
                G(
                  Ze,
                  {
                    class: "fr closeN",
                    type: "text",
                    onclick() {
                      Ie || de.remove();
                    }
                  },
                  [
                    G("i", {
                      class: "ivu-icon ivu-icon-ios-close",
                      style: {
                        fontSize: "30px"
                      }
                    })
                  ]
                )
              ]
            ),
            G(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                G("i", {
                  class: g && !s ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                G("div", { class: "msgBoxConO" }, r || u("r.info.text"))
              ]
            ),
            G(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: c || "center"
                }
              },
              [
                G(
                  Ze,
                  {
                    class: "okBtN",
                    onclick(f) {
                      var _;
                      if (a && typeof a == "function") {
                        const v = a();
                        if (v && T(v) === "Promise") {
                          Ie = !0;
                          const S = f && (f.currentTarget || f.target);
                          S && (S.classList.add("ivu-btn-loading"), S.nextSibling.setAttribute("disabled", "disabled"), ((_ = S.parentElement) == null ? void 0 : _.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(v).then(() => {
                            Ie = !1, de.remove();
                          }).catch(() => {
                            Ie = !1, de.remove();
                          });
                        } else
                          de.remove();
                      }
                    }
                  },
                  [
                    G("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    G("span", l || u("r.confirm"))
                  ]
                ),
                G(
                  Ze,
                  {
                    class: ["cancelBtN", !d && "hide"],
                    onclick() {
                      Ie || (de.remove(), T(o) === "Function" && o && o());
                    }
                  },
                  i || u("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function nr(e, n, t, r) {
  const a = (...o) => we.apply(this, o);
  Xe.call(this, {
    title: e || a("r.info.title"),
    text: n || a("r.info.text"),
    icon: t || "warning",
    onOk: r,
    buttons: [a("r.cancel")]
  });
}
const dn = {
  $fetch: Ke,
  $swal: Xe,
  $swalConfirm: nr,
  messageBox: tr,
  setInterval: Zn,
  setTimeout: Y,
  ...Yn
}, gu = function(e, n = {}) {
  Ke.init(n.useStore || n.store, e), n.locale && Ve.use(n.locale), n.i18n && Ve.i18n(n.i18n), n.router && Gs(n.router), n.amap && fu(n.amap), n.notRegistryGlobal || (Object.keys(fn).forEach((t) => {
    e.component(t) || e.component(t, fn[t]);
  }), Object.keys(dn).forEach((t) => {
    e.config.globalProperties[t] = dn[t];
  })), e.directive("has") || e.directive("has", (t, r) => {
    r.value && !e.config.globalProperties.hasPermission(r.value) && (t.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (t, r) => {
    let a;
    r.arg ? a = t.querySelector("." + r.arg) : a = t.querySelector(".ivu-select-dropdown") || t, a.addEventListener("scroll", function() {
      a.scrollTop > 0 && a.scrollHeight - a.scrollTop <= a.clientHeight && r.value();
    });
  });
}, hu = Ve.use, mu = Ve.i18n, Tu = {
  locale: hu,
  i18n: mu,
  install: gu,
  ...Yn,
  ...vs,
  $fetch: Ke,
  $swal: Xe,
  $swalConfirm: nr,
  messageBox: tr,
  setInterval: Zn,
  setTimeout: Y
};
export {
  Ke as $fetch,
  Xe as $swal,
  nr as $swalConfirm,
  au as BtTablePage,
  jr as FullPop,
  bn as HeaderBt,
  Br as Hello,
  Er as IconTxtBtn,
  pu as InputMap,
  Vr as Page404,
  lu as SelectInput,
  zs as ShowHidePanel,
  Hs as ShowHidePanelB,
  Fs as SideMenu,
  Us as TableIconBtn,
  Ws as TableSearch,
  Xs as TableSetting,
  ut as clearObj,
  Ps as dataFilterOrToUrl,
  Ts as decimalDigitsLimit,
  Tu as default,
  Wn as downloadFileByFormSubmit,
  ms as downloadFileReaderFile,
  bs as emptyInput,
  Dn as fakeALinkClick,
  $s as fileExport,
  As as findCollection,
  it as findPath,
  ws as formDataHeadConfig,
  Is as getColumnsKeys,
  ps as getFileSrc,
  zn as getFileTypeByName,
  hs as getFileTypeIconByName,
  Hn as getStringWidth,
  Ms as hasPermission,
  ds as htmlDecode,
  fs as htmlEncode,
  js as htmlPrint,
  xs as isEmptyValue,
  gs as isImgByFile,
  Xn as isNaN,
  Os as isNumberValue,
  ae as isValidValue,
  tr as messageBox,
  T as myTypeof,
  Ss as oneOf,
  ct as removeEmptyValue,
  Zn as setInterval,
  Y as setTimeout,
  qn as setValByOption,
  Kn as siblingElems,
  ys as stopBubbling,
  Cs as stringLength,
  _s as toFormData,
  Rn as toHump,
  Gn as toLine,
  Jn as tooltipManual,
  st as trimObj
};
//# sourceMappingURL=plugRQw.js.map
