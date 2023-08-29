var Rl = Object.defineProperty;
var Nl = (e, n, t) => n in e ? Rl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Je = (e, n, t) => (Nl(e, typeof n != "symbol" ? n + "" : n, t), t);
import { getCurrentInstance as zt, defineComponent as q, resolveComponent as D, openBlock as O, createElementBlock as B, normalizeClass as ce, normalizeStyle as K, createBlock as ve, createCommentVNode as he, renderSlot as Se, ref as H, computed as $, withDirectives as te, unref as g, createElementVNode as P, toDisplayString as Q, createVNode as V, withCtx as de, createTextVNode as Le, vShow as ae, resolveDirective as Wn, h as G, Fragment as ue, renderList as Pe, onBeforeMount as zl, watch as He, nextTick as qn, isRef as ge, onMounted as nt, withModifiers as Dl, mergeProps as Jn, onUnmounted as Hl, shallowRef as It, onBeforeUnmount as Gl } from "vue";
import Wl from "deepmerge";
import at from "sweetalert";
import { Tooltip as ql, TableColumnConfig as Jl, Radio as Xl, Input as Kl, Modal as Te, Icon as Yl, Button as _t } from "view-ui-plus";
import { useRouter as Zl, useRoute as Ql } from "vue-router";
import { useI18n as ea } from "vue-i18n";
import Ct from "axios";
import ta from "ar-cascader";
import { Toolbar as na, Editor as la } from "@wangeditor/editor-for-vue";
import { Boot as aa } from "@wangeditor/editor";
const Xn = {
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
}, ra = /(%|){([0-9a-zA-Z_]+)}/g;
function oa() {
  function e(t, l) {
    return Object.prototype.hasOwnProperty.call(t, l);
  }
  function n(t, ...l) {
    let r;
    return l.length === 1 && typeof l[0] == "object" && (r = l[0]), (!r || !r.hasOwnProperty) && (r = {}), t === void 0 ? "" : t.replace(ra, (a, o, i, u) => {
      let s;
      return t[u - 1] === "{" && t[u + a.length] === "}" ? i : (s = e(r, i) ? r[i] : null, s ?? "");
    });
  }
  return n;
}
const ia = oa();
let ct = Xn;
const sa = {
  zh: Xn
};
let un, cn = {}, Z, ua = function(e, n) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, n);
  if (Z && Z.global)
    return Z.global.t(e, n);
  if (Z && Z.locale) {
    if (!cn[Z.locale] || un != Z.locale) {
      cn[Z.locale] = !0;
      let t = Z.getLocaleMessage(Z.locale) || {}, l = Wl(sa[Z.locale], t, { clone: !0 });
      ct = l, Z.setLocaleMessage(Z.locale, l), un = Z.locale;
    }
    return Z.hlang(e, n);
  }
};
const we = function(e, n) {
  let t = ua.apply(this, [e, n]);
  if (t != null)
    return t;
  const l = e.split(".");
  let r = ct;
  for (let a = 0, o = l.length; a < o; a++) {
    const i = l[a];
    if (t = r[i], a === o - 1)
      return ia(t, n);
    if (!t)
      return "";
    r = t;
  }
  return "";
}, ca = function(e) {
  ct = e || ct;
}, da = function(e) {
  Z = e;
}, dt = {
  use: ca,
  t: we,
  i18n: da
};
function I(e, n) {
  var l;
  const t = (l = zt()) == null ? void 0 : l.appContext.config.globalProperties;
  return we.apply(t, [e, n]);
}
const Kn = /* @__PURE__ */ q({
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
    function l() {
      t.disabled || n("click");
    }
    return (r, a) => {
      const o = D("Icon");
      return O(), B("div", {
        class: ce({ headerBtCTM: !0, withIconCTM: t.icon || t.withIcon, disabled: t.disabled }),
        style: K({ color: t.color, borderLeftColor: t.borderColor }),
        onClick: l
      }, [
        t.icon ? (O(), ve(o, {
          key: 0,
          size: t.iconSize,
          type: t.icon
        }, null, 8, ["size", "type"])) : he("", !0),
        Se(r.$slots, "default")
      ], 6);
    };
  }
}), fa = { class: "headerTxtAM" }, pa = { class: "contentAM" }, ga = /* @__PURE__ */ q({
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
    const l = e;
    let r = H(!1);
    const a = $(() => typeof l.headerFontSize == "number" ? l.headerFontSize + "px" : l.headerFontSize), o = $(() => ({ zIndex: l.zIndex }));
    function i() {
      r.value = !0, t("on-open");
    }
    function u(s) {
      r.value = !1, t("on-close", s === !0);
    }
    return n({
      open: i,
      close: u
    }), (s, d) => te((O(), B("div", {
      class: "fullScreenPopBoxAM",
      style: K(g(o))
    }, [
      P("div", {
        class: "headerAM",
        style: K({ color: l.headerColor, backgroundColor: l.headerBg, fontSize: g(a) })
      }, [
        P("span", fa, Q(s.title || g(I)("r.title")), 1),
        V(Kn, {
          icon: "md-return-left",
          onClick: u
        }, {
          default: de(() => [
            Le(Q(g(I)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", pa, [
        Se(s.$slots, "default")
      ])
    ], 4)), [
      [ae, g(r)]
    ]);
  }
}), ma = { class: "msg" }, ha = /* @__PURE__ */ q({
  __name: "Hello",
  setup(e) {
    let n = H("Greetings from Ricky.");
    return (t, l) => (O(), B("span", ma, Q(g(n)), 1));
  }
}), va = /* @__PURE__ */ q({
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
    const t = e, l = $(() => Math.floor(t.size / 17 * 12) + "px");
    function r(a) {
      t.disabled || n("click", a);
    }
    return (a, o) => {
      const i = D("Icon"), u = Wn("has");
      return te((O(), B("div", {
        class: ce(["tabTopBtnsT", { disabled: t.disabled }]),
        onClick: r,
        style: K({ "font-size": g(l) })
      }, [
        V(i, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"]),
        Le(" " + Q(t.name || g(I)("r.button")), 1)
      ], 6)), [
        [u, a.has]
      ]);
    };
  }
}), ya = { class: "c404K" }, ba = /* @__PURE__ */ P("div", { class: "t404" }, "404", -1), wa = { class: "ct404" }, _a = { class: "p404" }, Aa = /* @__PURE__ */ q({
  __name: "Page404",
  setup(e) {
    const t = zt().appContext.config.globalProperties.$router;
    function l() {
      t.go(-1);
    }
    return (r, a) => {
      const o = D("Button");
      return O(), B("div", ya, [
        ba,
        P("div", wa, "UH OH! " + Q(g(I)("r.pageNotFound")), 1),
        P("div", _a, Q(g(I)("r.notFoundMsg")), 1),
        V(o, {
          class: "bt404",
          onClick: l
        }, {
          default: de(() => [
            Le(Q(g(I)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var Ta = typeof global == "object" && global && global.Object === Object && global;
const Yn = Ta;
var Sa = typeof self == "object" && self && self.Object === Object && self, xa = Yn || Sa || Function("return this")();
const fe = xa;
var Ia = fe.Symbol;
const Ce = Ia;
var Zn = Object.prototype, Ca = Zn.hasOwnProperty, $a = Zn.toString, Xe = Ce ? Ce.toStringTag : void 0;
function Oa(e) {
  var n = Ca.call(e, Xe), t = e[Xe];
  try {
    e[Xe] = void 0;
    var l = !0;
  } catch {
  }
  var r = $a.call(e);
  return l && (n ? e[Xe] = t : delete e[Xe]), r;
}
var Ma = Object.prototype, Pa = Ma.toString;
function Ea(e) {
  return Pa.call(e);
}
var Ba = "[object Null]", La = "[object Undefined]", dn = Ce ? Ce.toStringTag : void 0;
function me(e) {
  return e == null ? e === void 0 ? La : Ba : dn && dn in Object(e) ? Oa(e) : Ea(e);
}
function se(e) {
  return e != null && typeof e == "object";
}
var ka = "[object Symbol]";
function Va(e) {
  return typeof e == "symbol" || se(e) && me(e) == ka;
}
var ja = Array.isArray;
const Ee = ja;
var Ua = /\s/;
function Fa(e) {
  for (var n = e.length; n-- && Ua.test(e.charAt(n)); )
    ;
  return n;
}
var Ra = /^\s+/;
function Na(e) {
  return e && e.slice(0, Fa(e) + 1).replace(Ra, "");
}
function be(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var fn = 0 / 0, za = /^[-+]0x[0-9a-f]+$/i, Da = /^0b[01]+$/i, Ha = /^0o[0-7]+$/i, Ga = parseInt;
function $t(e) {
  if (typeof e == "number")
    return e;
  if (Va(e))
    return fn;
  if (be(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = be(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Na(e);
  var t = Da.test(e);
  return t || Ha.test(e) ? Ga(e.slice(2), t ? 2 : 8) : za.test(e) ? fn : +e;
}
var pn = 1 / 0, Wa = 17976931348623157e292;
function qa(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = $t(e), e === pn || e === -pn) {
    var n = e < 0 ? -1 : 1;
    return n * Wa;
  }
  return e === e ? e : 0;
}
function Ja(e) {
  var n = qa(e), t = n % 1;
  return n === n ? t ? n - t : n : 0;
}
var Xa = "[object AsyncFunction]", Ka = "[object Function]", Ya = "[object GeneratorFunction]", Za = "[object Proxy]";
function Dt(e) {
  if (!be(e))
    return !1;
  var n = me(e);
  return n == Ka || n == Ya || n == Xa || n == Za;
}
var Qa = fe["__core-js_shared__"];
const At = Qa;
var gn = function() {
  var e = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function er(e) {
  return !!gn && gn in e;
}
var tr = Function.prototype, nr = tr.toString;
function ke(e) {
  if (e != null) {
    try {
      return nr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var lr = /[\\^$.*+?()[\]{}|]/g, ar = /^\[object .+?Constructor\]$/, rr = Function.prototype, or = Object.prototype, ir = rr.toString, sr = or.hasOwnProperty, ur = RegExp(
  "^" + ir.call(sr).replace(lr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cr(e) {
  if (!be(e) || er(e))
    return !1;
  var n = Dt(e) ? ur : ar;
  return n.test(ke(e));
}
function dr(e, n) {
  return e == null ? void 0 : e[n];
}
function Ve(e, n) {
  var t = dr(e, n);
  return cr(t) ? t : void 0;
}
var fr = Ve(fe, "WeakMap");
const Ot = fr;
var mn = Object.create, pr = function() {
  function e() {
  }
  return function(n) {
    if (!be(n))
      return {};
    if (mn)
      return mn(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const gr = pr;
function mr(e, n) {
  var t = -1, l = e.length;
  for (n || (n = Array(l)); ++t < l; )
    n[t] = e[t];
  return n;
}
var hr = function() {
  try {
    var e = Ve(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const hn = hr;
function vr(e, n) {
  for (var t = -1, l = e == null ? 0 : e.length; ++t < l && n(e[t], t, e) !== !1; )
    ;
  return e;
}
function yr(e, n, t, l) {
  for (var r = e.length, a = t + (l ? 1 : -1); l ? a-- : ++a < r; )
    if (n(e[a], a, e))
      return a;
  return -1;
}
function br(e) {
  return e !== e;
}
function wr(e, n, t) {
  for (var l = t - 1, r = e.length; ++l < r; )
    if (e[l] === n)
      return l;
  return -1;
}
function _r(e, n, t) {
  return n === n ? wr(e, n, t) : yr(e, br, t);
}
var Ar = 9007199254740991, Tr = /^(?:0|[1-9]\d*)$/;
function Sr(e, n) {
  var t = typeof e;
  return n = n ?? Ar, !!n && (t == "number" || t != "symbol" && Tr.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Qn(e, n, t) {
  n == "__proto__" && hn ? hn(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function Ht(e, n) {
  return e === n || e !== e && n !== n;
}
var xr = Object.prototype, Ir = xr.hasOwnProperty;
function el(e, n, t) {
  var l = e[n];
  (!(Ir.call(e, n) && Ht(l, t)) || t === void 0 && !(n in e)) && Qn(e, n, t);
}
function ht(e, n, t, l) {
  var r = !t;
  t || (t = {});
  for (var a = -1, o = n.length; ++a < o; ) {
    var i = n[a], u = l ? l(t[i], e[i], i, t, e) : void 0;
    u === void 0 && (u = e[i]), r ? Qn(t, i, u) : el(t, i, u);
  }
  return t;
}
var Cr = 9007199254740991;
function tl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Cr;
}
function Gt(e) {
  return e != null && tl(e.length) && !Dt(e);
}
var $r = Object.prototype;
function vt(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || $r;
  return e === t;
}
function Or(e, n) {
  for (var t = -1, l = Array(e); ++t < e; )
    l[t] = n(t);
  return l;
}
var Mr = "[object Arguments]";
function vn(e) {
  return se(e) && me(e) == Mr;
}
var nl = Object.prototype, Pr = nl.hasOwnProperty, Er = nl.propertyIsEnumerable, Br = vn(function() {
  return arguments;
}()) ? vn : function(e) {
  return se(e) && Pr.call(e, "callee") && !Er.call(e, "callee");
};
const ll = Br;
function Lr() {
  return !1;
}
var al = typeof exports == "object" && exports && !exports.nodeType && exports, yn = al && typeof module == "object" && module && !module.nodeType && module, kr = yn && yn.exports === al, bn = kr ? fe.Buffer : void 0, Vr = bn ? bn.isBuffer : void 0, jr = Vr || Lr;
const Ze = jr;
var Ur = "[object Arguments]", Fr = "[object Array]", Rr = "[object Boolean]", Nr = "[object Date]", zr = "[object Error]", Dr = "[object Function]", Hr = "[object Map]", Gr = "[object Number]", Wr = "[object Object]", qr = "[object RegExp]", Jr = "[object Set]", Xr = "[object String]", Kr = "[object WeakMap]", Yr = "[object ArrayBuffer]", Zr = "[object DataView]", Qr = "[object Float32Array]", eo = "[object Float64Array]", to = "[object Int8Array]", no = "[object Int16Array]", lo = "[object Int32Array]", ao = "[object Uint8Array]", ro = "[object Uint8ClampedArray]", oo = "[object Uint16Array]", io = "[object Uint32Array]", N = {};
N[Qr] = N[eo] = N[to] = N[no] = N[lo] = N[ao] = N[ro] = N[oo] = N[io] = !0;
N[Ur] = N[Fr] = N[Yr] = N[Rr] = N[Zr] = N[Nr] = N[zr] = N[Dr] = N[Hr] = N[Gr] = N[Wr] = N[qr] = N[Jr] = N[Xr] = N[Kr] = !1;
function so(e) {
  return se(e) && tl(e.length) && !!N[me(e)];
}
function Wt(e) {
  return function(n) {
    return e(n);
  };
}
var rl = typeof exports == "object" && exports && !exports.nodeType && exports, Ye = rl && typeof module == "object" && module && !module.nodeType && module, uo = Ye && Ye.exports === rl, Tt = uo && Yn.process, co = function() {
  try {
    var e = Ye && Ye.require && Ye.require("util").types;
    return e || Tt && Tt.binding && Tt.binding("util");
  } catch {
  }
}();
const ze = co;
var wn = ze && ze.isTypedArray, fo = wn ? Wt(wn) : so;
const qt = fo;
var po = Object.prototype, go = po.hasOwnProperty;
function ol(e, n) {
  var t = Ee(e), l = !t && ll(e), r = !t && !l && Ze(e), a = !t && !l && !r && qt(e), o = t || l || r || a, i = o ? Or(e.length, String) : [], u = i.length;
  for (var s in e)
    (n || go.call(e, s)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    Sr(s, u))) && i.push(s);
  return i;
}
function il(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var mo = il(Object.keys, Object);
const ho = mo;
var vo = Object.prototype, yo = vo.hasOwnProperty;
function sl(e) {
  if (!vt(e))
    return ho(e);
  var n = [];
  for (var t in Object(e))
    yo.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function Jt(e) {
  return Gt(e) ? ol(e) : sl(e);
}
function bo(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var wo = Object.prototype, _o = wo.hasOwnProperty;
function Ao(e) {
  if (!be(e))
    return bo(e);
  var n = vt(e), t = [];
  for (var l in e)
    l == "constructor" && (n || !_o.call(e, l)) || t.push(l);
  return t;
}
function Xt(e) {
  return Gt(e) ? ol(e, !0) : Ao(e);
}
var To = Ve(Object, "create");
const Qe = To;
function So() {
  this.__data__ = Qe ? Qe(null) : {}, this.size = 0;
}
function xo(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Io = "__lodash_hash_undefined__", Co = Object.prototype, $o = Co.hasOwnProperty;
function Oo(e) {
  var n = this.__data__;
  if (Qe) {
    var t = n[e];
    return t === Io ? void 0 : t;
  }
  return $o.call(n, e) ? n[e] : void 0;
}
var Mo = Object.prototype, Po = Mo.hasOwnProperty;
function Eo(e) {
  var n = this.__data__;
  return Qe ? n[e] !== void 0 : Po.call(n, e);
}
var Bo = "__lodash_hash_undefined__";
function Lo(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Qe && n === void 0 ? Bo : n, this;
}
function Be(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var l = e[n];
    this.set(l[0], l[1]);
  }
}
Be.prototype.clear = So;
Be.prototype.delete = xo;
Be.prototype.get = Oo;
Be.prototype.has = Eo;
Be.prototype.set = Lo;
function ko() {
  this.__data__ = [], this.size = 0;
}
function yt(e, n) {
  for (var t = e.length; t--; )
    if (Ht(e[t][0], n))
      return t;
  return -1;
}
var Vo = Array.prototype, jo = Vo.splice;
function Uo(e) {
  var n = this.__data__, t = yt(n, e);
  if (t < 0)
    return !1;
  var l = n.length - 1;
  return t == l ? n.pop() : jo.call(n, t, 1), --this.size, !0;
}
function Fo(e) {
  var n = this.__data__, t = yt(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Ro(e) {
  return yt(this.__data__, e) > -1;
}
function No(e, n) {
  var t = this.__data__, l = yt(t, e);
  return l < 0 ? (++this.size, t.push([e, n])) : t[l][1] = n, this;
}
function _e(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var l = e[n];
    this.set(l[0], l[1]);
  }
}
_e.prototype.clear = ko;
_e.prototype.delete = Uo;
_e.prototype.get = Fo;
_e.prototype.has = Ro;
_e.prototype.set = No;
var zo = Ve(fe, "Map");
const et = zo;
function Do() {
  this.size = 0, this.__data__ = {
    hash: new Be(),
    map: new (et || _e)(),
    string: new Be()
  };
}
function Ho(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function bt(e, n) {
  var t = e.__data__;
  return Ho(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Go(e) {
  var n = bt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Wo(e) {
  return bt(this, e).get(e);
}
function qo(e) {
  return bt(this, e).has(e);
}
function Jo(e, n) {
  var t = bt(this, e), l = t.size;
  return t.set(e, n), this.size += t.size == l ? 0 : 1, this;
}
function je(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var l = e[n];
    this.set(l[0], l[1]);
  }
}
je.prototype.clear = Do;
je.prototype.delete = Go;
je.prototype.get = Wo;
je.prototype.has = qo;
je.prototype.set = Jo;
function ul(e, n) {
  for (var t = -1, l = n.length, r = e.length; ++t < l; )
    e[r + t] = n[t];
  return e;
}
var Xo = il(Object.getPrototypeOf, Object);
const Kt = Xo;
var Ko = "[object Object]", Yo = Function.prototype, Zo = Object.prototype, cl = Yo.toString, Qo = Zo.hasOwnProperty, ei = cl.call(Object);
function Re(e) {
  if (!se(e) || me(e) != Ko)
    return !1;
  var n = Kt(e);
  if (n === null)
    return !0;
  var t = Qo.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && cl.call(t) == ei;
}
function ti() {
  this.__data__ = new _e(), this.size = 0;
}
function ni(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function li(e) {
  return this.__data__.get(e);
}
function ai(e) {
  return this.__data__.has(e);
}
var ri = 200;
function oi(e, n) {
  var t = this.__data__;
  if (t instanceof _e) {
    var l = t.__data__;
    if (!et || l.length < ri - 1)
      return l.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new je(l);
  }
  return t.set(e, n), this.size = t.size, this;
}
function ye(e) {
  var n = this.__data__ = new _e(e);
  this.size = n.size;
}
ye.prototype.clear = ti;
ye.prototype.delete = ni;
ye.prototype.get = li;
ye.prototype.has = ai;
ye.prototype.set = oi;
function ii(e, n) {
  return e && ht(n, Jt(n), e);
}
function si(e, n) {
  return e && ht(n, Xt(n), e);
}
var dl = typeof exports == "object" && exports && !exports.nodeType && exports, _n = dl && typeof module == "object" && module && !module.nodeType && module, ui = _n && _n.exports === dl, An = ui ? fe.Buffer : void 0, Tn = An ? An.allocUnsafe : void 0;
function ci(e, n) {
  if (n)
    return e.slice();
  var t = e.length, l = Tn ? Tn(t) : new e.constructor(t);
  return e.copy(l), l;
}
function di(e, n) {
  for (var t = -1, l = e == null ? 0 : e.length, r = 0, a = []; ++t < l; ) {
    var o = e[t];
    n(o, t, e) && (a[r++] = o);
  }
  return a;
}
function fl() {
  return [];
}
var fi = Object.prototype, pi = fi.propertyIsEnumerable, Sn = Object.getOwnPropertySymbols, gi = Sn ? function(e) {
  return e == null ? [] : (e = Object(e), di(Sn(e), function(n) {
    return pi.call(e, n);
  }));
} : fl;
const Yt = gi;
function mi(e, n) {
  return ht(e, Yt(e), n);
}
var hi = Object.getOwnPropertySymbols, vi = hi ? function(e) {
  for (var n = []; e; )
    ul(n, Yt(e)), e = Kt(e);
  return n;
} : fl;
const pl = vi;
function yi(e, n) {
  return ht(e, pl(e), n);
}
function gl(e, n, t) {
  var l = n(e);
  return Ee(e) ? l : ul(l, t(e));
}
function Mt(e) {
  return gl(e, Jt, Yt);
}
function bi(e) {
  return gl(e, Xt, pl);
}
var wi = Ve(fe, "DataView");
const Pt = wi;
var _i = Ve(fe, "Promise");
const Et = _i;
var Ai = Ve(fe, "Set");
const Bt = Ai;
var xn = "[object Map]", Ti = "[object Object]", In = "[object Promise]", Cn = "[object Set]", $n = "[object WeakMap]", On = "[object DataView]", Si = ke(Pt), xi = ke(et), Ii = ke(Et), Ci = ke(Bt), $i = ke(Ot), Oe = me;
(Pt && Oe(new Pt(new ArrayBuffer(1))) != On || et && Oe(new et()) != xn || Et && Oe(Et.resolve()) != In || Bt && Oe(new Bt()) != Cn || Ot && Oe(new Ot()) != $n) && (Oe = function(e) {
  var n = me(e), t = n == Ti ? e.constructor : void 0, l = t ? ke(t) : "";
  if (l)
    switch (l) {
      case Si:
        return On;
      case xi:
        return xn;
      case Ii:
        return In;
      case Ci:
        return Cn;
      case $i:
        return $n;
    }
  return n;
});
const De = Oe;
var Oi = Object.prototype, Mi = Oi.hasOwnProperty;
function Pi(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && Mi.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Ei = fe.Uint8Array;
const ft = Ei;
function Zt(e) {
  var n = new e.constructor(e.byteLength);
  return new ft(n).set(new ft(e)), n;
}
function Bi(e, n) {
  var t = n ? Zt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Li = /\w*$/;
function ki(e) {
  var n = new e.constructor(e.source, Li.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var Mn = Ce ? Ce.prototype : void 0, Pn = Mn ? Mn.valueOf : void 0;
function Vi(e) {
  return Pn ? Object(Pn.call(e)) : {};
}
function ji(e, n) {
  var t = n ? Zt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Ui = "[object Boolean]", Fi = "[object Date]", Ri = "[object Map]", Ni = "[object Number]", zi = "[object RegExp]", Di = "[object Set]", Hi = "[object String]", Gi = "[object Symbol]", Wi = "[object ArrayBuffer]", qi = "[object DataView]", Ji = "[object Float32Array]", Xi = "[object Float64Array]", Ki = "[object Int8Array]", Yi = "[object Int16Array]", Zi = "[object Int32Array]", Qi = "[object Uint8Array]", es = "[object Uint8ClampedArray]", ts = "[object Uint16Array]", ns = "[object Uint32Array]";
function ls(e, n, t) {
  var l = e.constructor;
  switch (n) {
    case Wi:
      return Zt(e);
    case Ui:
    case Fi:
      return new l(+e);
    case qi:
      return Bi(e, t);
    case Ji:
    case Xi:
    case Ki:
    case Yi:
    case Zi:
    case Qi:
    case es:
    case ts:
    case ns:
      return ji(e, t);
    case Ri:
      return new l();
    case Ni:
    case Hi:
      return new l(e);
    case zi:
      return ki(e);
    case Di:
      return new l();
    case Gi:
      return Vi(e);
  }
}
function as(e) {
  return typeof e.constructor == "function" && !vt(e) ? gr(Kt(e)) : {};
}
var rs = "[object Map]";
function os(e) {
  return se(e) && De(e) == rs;
}
var En = ze && ze.isMap, is = En ? Wt(En) : os;
const ss = is;
var us = "[object Set]";
function cs(e) {
  return se(e) && De(e) == us;
}
var Bn = ze && ze.isSet, ds = Bn ? Wt(Bn) : cs;
const fs = ds;
var ps = 1, gs = 2, ms = 4, ml = "[object Arguments]", hs = "[object Array]", vs = "[object Boolean]", ys = "[object Date]", bs = "[object Error]", hl = "[object Function]", ws = "[object GeneratorFunction]", _s = "[object Map]", As = "[object Number]", vl = "[object Object]", Ts = "[object RegExp]", Ss = "[object Set]", xs = "[object String]", Is = "[object Symbol]", Cs = "[object WeakMap]", $s = "[object ArrayBuffer]", Os = "[object DataView]", Ms = "[object Float32Array]", Ps = "[object Float64Array]", Es = "[object Int8Array]", Bs = "[object Int16Array]", Ls = "[object Int32Array]", ks = "[object Uint8Array]", Vs = "[object Uint8ClampedArray]", js = "[object Uint16Array]", Us = "[object Uint32Array]", R = {};
R[ml] = R[hs] = R[$s] = R[Os] = R[vs] = R[ys] = R[Ms] = R[Ps] = R[Es] = R[Bs] = R[Ls] = R[_s] = R[As] = R[vl] = R[Ts] = R[Ss] = R[xs] = R[Is] = R[ks] = R[Vs] = R[js] = R[Us] = !0;
R[bs] = R[hl] = R[Cs] = !1;
function it(e, n, t, l, r, a) {
  var o, i = n & ps, u = n & gs, s = n & ms;
  if (t && (o = r ? t(e, l, r, a) : t(e)), o !== void 0)
    return o;
  if (!be(e))
    return e;
  var d = Ee(e);
  if (d) {
    if (o = Pi(e), !i)
      return mr(e, o);
  } else {
    var c = De(e), f = c == hl || c == ws;
    if (Ze(e))
      return ci(e, i);
    if (c == vl || c == ml || f && !r) {
      if (o = u || f ? {} : as(e), !i)
        return u ? yi(e, si(o, e)) : mi(e, ii(o, e));
    } else {
      if (!R[c])
        return r ? e : {};
      o = ls(e, c, i);
    }
  }
  a || (a = new ye());
  var v = a.get(e);
  if (v)
    return v;
  a.set(e, o), fs(e) ? e.forEach(function(y) {
    o.add(it(y, n, t, y, e, a));
  }) : ss(e) && e.forEach(function(y, b) {
    o.set(b, it(y, n, t, b, e, a));
  });
  var m = s ? u ? bi : Mt : u ? Xt : Jt, p = d ? void 0 : m(e);
  return vr(p || e, function(y, b) {
    p && (b = y, y = e[b]), el(o, b, it(y, n, t, b, e, a));
  }), o;
}
var Fs = 1, Rs = 4;
function ne(e) {
  return it(e, Fs | Rs);
}
var Ns = "__lodash_hash_undefined__";
function zs(e) {
  return this.__data__.set(e, Ns), this;
}
function Ds(e) {
  return this.__data__.has(e);
}
function pt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new je(); ++n < t; )
    this.add(e[n]);
}
pt.prototype.add = pt.prototype.push = zs;
pt.prototype.has = Ds;
function Hs(e, n) {
  for (var t = -1, l = e == null ? 0 : e.length; ++t < l; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function Gs(e, n) {
  return e.has(n);
}
var Ws = 1, qs = 2;
function yl(e, n, t, l, r, a) {
  var o = t & Ws, i = e.length, u = n.length;
  if (i != u && !(o && u > i))
    return !1;
  var s = a.get(e), d = a.get(n);
  if (s && d)
    return s == n && d == e;
  var c = -1, f = !0, v = t & qs ? new pt() : void 0;
  for (a.set(e, n), a.set(n, e); ++c < i; ) {
    var m = e[c], p = n[c];
    if (l)
      var y = o ? l(p, m, c, n, e, a) : l(m, p, c, e, n, a);
    if (y !== void 0) {
      if (y)
        continue;
      f = !1;
      break;
    }
    if (v) {
      if (!Hs(n, function(b, x) {
        if (!Gs(v, x) && (m === b || r(m, b, t, l, a)))
          return v.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(m === p || r(m, p, t, l, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(n), f;
}
function Js(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(l, r) {
    t[++n] = [r, l];
  }), t;
}
function Xs(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(l) {
    t[++n] = l;
  }), t;
}
var Ks = 1, Ys = 2, Zs = "[object Boolean]", Qs = "[object Date]", eu = "[object Error]", tu = "[object Map]", nu = "[object Number]", lu = "[object RegExp]", au = "[object Set]", ru = "[object String]", ou = "[object Symbol]", iu = "[object ArrayBuffer]", su = "[object DataView]", Ln = Ce ? Ce.prototype : void 0, St = Ln ? Ln.valueOf : void 0;
function uu(e, n, t, l, r, a, o) {
  switch (t) {
    case su:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case iu:
      return !(e.byteLength != n.byteLength || !a(new ft(e), new ft(n)));
    case Zs:
    case Qs:
    case nu:
      return Ht(+e, +n);
    case eu:
      return e.name == n.name && e.message == n.message;
    case lu:
    case ru:
      return e == n + "";
    case tu:
      var i = Js;
    case au:
      var u = l & Ks;
      if (i || (i = Xs), e.size != n.size && !u)
        return !1;
      var s = o.get(e);
      if (s)
        return s == n;
      l |= Ys, o.set(e, n);
      var d = yl(i(e), i(n), l, r, a, o);
      return o.delete(e), d;
    case ou:
      if (St)
        return St.call(e) == St.call(n);
  }
  return !1;
}
var cu = 1, du = Object.prototype, fu = du.hasOwnProperty;
function pu(e, n, t, l, r, a) {
  var o = t & cu, i = Mt(e), u = i.length, s = Mt(n), d = s.length;
  if (u != d && !o)
    return !1;
  for (var c = u; c--; ) {
    var f = i[c];
    if (!(o ? f in n : fu.call(n, f)))
      return !1;
  }
  var v = a.get(e), m = a.get(n);
  if (v && m)
    return v == n && m == e;
  var p = !0;
  a.set(e, n), a.set(n, e);
  for (var y = o; ++c < u; ) {
    f = i[c];
    var b = e[f], x = n[f];
    if (l)
      var w = o ? l(x, b, f, n, e, a) : l(b, x, f, e, n, a);
    if (!(w === void 0 ? b === x || r(b, x, t, l, a) : w)) {
      p = !1;
      break;
    }
    y || (y = f == "constructor");
  }
  if (p && !y) {
    var _ = e.constructor, L = n.constructor;
    _ != L && "constructor" in e && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof L == "function" && L instanceof L) && (p = !1);
  }
  return a.delete(e), a.delete(n), p;
}
var gu = 1, kn = "[object Arguments]", Vn = "[object Array]", rt = "[object Object]", mu = Object.prototype, jn = mu.hasOwnProperty;
function hu(e, n, t, l, r, a) {
  var o = Ee(e), i = Ee(n), u = o ? Vn : De(e), s = i ? Vn : De(n);
  u = u == kn ? rt : u, s = s == kn ? rt : s;
  var d = u == rt, c = s == rt, f = u == s;
  if (f && Ze(e)) {
    if (!Ze(n))
      return !1;
    o = !0, d = !1;
  }
  if (f && !d)
    return a || (a = new ye()), o || qt(e) ? yl(e, n, t, l, r, a) : uu(e, n, u, t, l, r, a);
  if (!(t & gu)) {
    var v = d && jn.call(e, "__wrapped__"), m = c && jn.call(n, "__wrapped__");
    if (v || m) {
      var p = v ? e.value() : e, y = m ? n.value() : n;
      return a || (a = new ye()), r(p, y, t, l, a);
    }
  }
  return f ? (a || (a = new ye()), pu(e, n, t, l, r, a)) : !1;
}
function bl(e, n, t, l, r) {
  return e === n ? !0 : e == null || n == null || !se(e) && !se(n) ? e !== e && n !== n : hu(e, n, t, l, bl, r);
}
var vu = function() {
  return fe.Date.now();
};
const xt = vu;
var yu = "Expected a function", bu = Math.max, wu = Math.min;
function _u(e, n, t) {
  var l, r, a, o, i, u, s = 0, d = !1, c = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(yu);
  n = $t(n) || 0, be(t) && (d = !!t.leading, c = "maxWait" in t, a = c ? bu($t(t.maxWait) || 0, n) : a, f = "trailing" in t ? !!t.trailing : f);
  function v(A) {
    var U = l, ee = r;
    return l = r = void 0, s = A, o = e.apply(ee, U), o;
  }
  function m(A) {
    return s = A, i = setTimeout(b, n), d ? v(A) : o;
  }
  function p(A) {
    var U = A - u, ee = A - s, h = n - U;
    return c ? wu(h, a - ee) : h;
  }
  function y(A) {
    var U = A - u, ee = A - s;
    return u === void 0 || U >= n || U < 0 || c && ee >= a;
  }
  function b() {
    var A = xt();
    if (y(A))
      return x(A);
    i = setTimeout(b, p(A));
  }
  function x(A) {
    return i = void 0, f && l ? v(A) : (l = r = void 0, o);
  }
  function w() {
    i !== void 0 && clearTimeout(i), s = 0, l = u = r = i = void 0;
  }
  function _() {
    return i === void 0 ? o : x(xt());
  }
  function L() {
    var A = xt(), U = y(A);
    if (l = arguments, r = this, u = A, U) {
      if (i === void 0)
        return m(u);
      if (c)
        return clearTimeout(i), i = setTimeout(b, n), v(u);
    }
    return i === void 0 && (i = setTimeout(b, n)), o;
  }
  return L.cancel = w, L.flush = _, L;
}
function gt(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
function Lt(e) {
  return e && e.length ? e[0] : void 0;
}
var Au = "[object String]";
function wl(e) {
  return typeof e == "string" || !Ee(e) && se(e) && me(e) == Au;
}
var Tu = Math.max;
function Un(e, n, t) {
  var l = e == null ? 0 : e.length;
  if (!l)
    return -1;
  var r = t == null ? 0 : Ja(t);
  return r < 0 && (r = Tu(l + r, 0)), _r(e, n, r);
}
var Su = "[object Boolean]";
function xu(e) {
  return e === !0 || e === !1 || se(e) && me(e) == Su;
}
var Iu = "[object Map]", Cu = "[object Set]", $u = Object.prototype, Ou = $u.hasOwnProperty;
function xe(e) {
  if (e == null)
    return !0;
  if (Gt(e) && (Ee(e) || typeof e == "string" || typeof e.splice == "function" || Ze(e) || qt(e) || ll(e)))
    return !e.length;
  var n = De(e);
  if (n == Iu || n == Cu)
    return !e.size;
  if (vt(e))
    return !sl(e).length;
  for (var t in e)
    if (Ou.call(e, t))
      return !1;
  return !0;
}
function Mu(e, n) {
  return bl(e, n);
}
var Pu = "[object Number]";
function Ne(e) {
  return typeof e == "number" || se(e) && me(e) == Pu;
}
function oe(e, n, t) {
  const l = (...r) => we.apply(this, r);
  return new Promise((r, a) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let o = l("r.confirm"), i = l("r.cancel"), u = !1, s = "swalConfirmBt", d = "swalCancelBt";
      const c = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let f = "";
      e.text && c.test(M(e.text)) ? f = "content" : e.text && M(e.text) === "String" && (f = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (i = e.buttons.cancel.text) && (u = !0), e.buttons.cancel.className && (d = e.buttons.cancel.className), e.buttons.confirm.text && (o = e.buttons.confirm.text), e.buttons.confirm.className && (s = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (i = e.buttons[0], u = !0), e.buttons[1] && (o = e.buttons[1]))), at({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [f]: e.text,
        buttons: {
          confirm: {
            text: o,
            value: !0,
            visible: !0,
            className: s
          },
          cancel: {
            text: i,
            value: null,
            visible: u,
            className: d
          }
        }
      }).then((v) => {
        v && typeof e.onOk == "function" && e.onOk(), r(v);
      }).catch((v) => {
        a(v);
      });
    } else if (typeof e == "string") {
      let o = "";
      if (n)
        switch (typeof n) {
          case "string":
            o = "text";
            break;
          case "object":
            o = "content";
            break;
        }
      at({
        title: e,
        [o]: n || "",
        icon: t || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: l("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((i) => {
        r(i);
      }).catch((i) => {
        a(i);
      });
    } else if (typeof e == "boolean")
      !e && at.close && at.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function _l(e) {
  return e.replace(/_(\w)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function Eu(e) {
  let n = document.createElement("div");
  return n.textContent !== void 0 ? n.textContent = e : n.innerText = e, n.innerHTML;
}
function Bu(e) {
  let n = document.createElement("div");
  return n.innerHTML = e, n.innerText || n.textContent;
}
function st(e) {
  return new Promise((n) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      n(t.result);
    };
  });
}
function Qt(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function ut(e) {
  return M(e) === "String" && e.indexOf("image") > -1;
}
function kt(e) {
  const n = Qt(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function Al(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, Tl(t);
}
function Tl(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
function mt({
  group: e,
  condition: n,
  pathKey: t,
  childKey: l = "children",
  path: r = []
}) {
  if (e && be(e)) {
    if (Dt(n)) {
      if (Re(e)) {
        let a = e, o = ne(r);
        if (n(a))
          return t && a[t] && o.push(a[t]), o;
        if (a[l] && !xe(a[l])) {
          t && a[t] && o.push(a[t]);
          let i = mt({
            group: a[l],
            condition: n,
            pathKey: t,
            childKey: l,
            path: o
          });
          if (!xe(i))
            return i;
        }
      } else if (Array.isArray(e))
        for (let a of e) {
          let o = ne(r);
          if (n(a))
            return t && a[t] ? o.push(a[t]) : o.push(String(e.indexOf(a))), o;
          if (a[l] && a[l].length > 0) {
            t && a[t] ? o.push(a[t]) : o.push(String(e.indexOf(a)));
            let i = mt({
              group: a[l],
              condition: n,
              pathKey: t,
              childKey: l,
              path: o
            });
            if (!xe(i))
              return i;
          }
        }
    } else if (Array.isArray(e))
      for (let a of e) {
        let o = ne(r);
        if (a === n)
          return o.push(String(e.indexOf(a))), o;
      }
  }
  return [];
}
function Sl(e, n = 12) {
  if (M(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const l = t.clientWidth;
    return document.body.removeChild(t), l;
  }
  return 0;
}
function Lu(e) {
  return e === "" ? null : e;
}
function ku(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
const Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: Al,
  emptyInput: Lu,
  fakeALinkClick: Tl,
  findPath: mt,
  getFileSrc: st,
  getFileTypeByName: Qt,
  getFileTypeIconByName: kt,
  getStringWidth: Sl,
  htmlDecode: Bu,
  htmlEncode: Eu,
  isImgByFile: ut,
  stopBubbling: ku,
  toHump: _l
}, Symbol.toStringTag, { value: "Module" }));
function M(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function xl(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Vt(e) {
  let n = M(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let l = M(e[t]);
        l === "String" ? e[t] = e[t].trim() : (l === "Object" || l === "Array") && Vt(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, l = e.length; t < l; t++) {
      let r = M(e[t]);
      r === "String" ? e[t] = e[t].trim() : (r === "Array" || r === "Object") && Vt(e[t]);
    }
  return e;
}
function jt(e, n = []) {
  if (M(e) === "Array")
    return e.forEach((t, l) => {
      switch (M(t)) {
        case "Array":
        case "Object":
          jt(t);
          break;
        default:
          e[l] = null;
      }
    }), e;
  if (M(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let l = !0;
        for (let r of n)
          if (r === t) {
            l = !1;
            break;
          }
        if (l)
          switch (M(e[t])) {
            case "Array":
            case "Object":
              jt(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
const ju = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Uu(e) {
  let n = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && n.append(t, e[t]);
  return n;
}
function Fu(e, n, t = !1) {
  if (!e || !n)
    return !1;
  let l, r = "notFoundC", a = function(o, i) {
    if (Array.isArray(o)) {
      if (M(i) === "Function" && i(o))
        return r = o, [];
      for (let u of o) {
        if (r !== "notFoundC")
          break;
        if (M(i) === "Function" && i(u) || u === i)
          return r = u, [o.indexOf(u)];
        if (M(u) === "Array" || M(u) === "Object") {
          let s = a(u, i);
          if (s !== void 0)
            return [o.indexOf(u), ...s];
        }
      }
    } else if (M(o) === "Object") {
      if (M(i) === "Function" && i(o))
        return r = o, [];
      for (let u in o) {
        if (r !== "notFoundC")
          break;
        if (o.hasOwnProperty(u)) {
          if (M(i) === "Function" && i(u) || o[u] === i)
            return r = o[u], [u];
          if (M(o[u]) === "Object" || M(o[u]) === "Array") {
            let s = a(o[u], i);
            if (s !== void 0)
              return [u, ...s];
          }
        }
      }
    }
  };
  return l = a(e, n), t ? l || !1 : r === "notFoundC" ? !1 : r;
}
function Ru(e, n) {
  for (let t = 0, l = n.length; t < l; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function Nu(e, n = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`), l = e && String(e) || "";
  return t.test(l) ? Number(l.replace(t, "$1")) : e;
}
function Il(e, n = {}, t = "get") {
  let l = document.createElement("form"), r = document.getElementsByTagName("body")[0];
  r.appendChild(l), l.setAttribute("style", "display:none"), l.setAttribute("target", ""), l.setAttribute("method", t);
  let a = e;
  if (window && window.hasOwnProperty("g")) {
    let o = Object.keys(window.g).filter((i) => i.indexOf("URL") > -1).map((i) => i.replace("URL", ""));
    for (let i of o) {
      let u = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (u.test(e) && window.g[i + "URL"]) {
        a = window.g[i + "URL"] + e.replace(u, "");
        break;
      }
    }
  }
  if (l.setAttribute("action", a), Re(n)) {
    for (let i in n)
      if (n.hasOwnProperty(i) && (n[i] || n[i] === 0 || n[i] === !1 || n[i] === "")) {
        let u = document.createElement("input");
        u.setAttribute("type", "hidden"), u.setAttribute("name", i), u.setAttribute("value", n[i]), l.appendChild(u);
      }
    l.submit();
    let o = setTimeout(() => {
      r.removeChild(l), clearTimeout(o), o = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function zu(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    oe.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Il(e, n, t);
}
function Du(e, n, t = !1) {
  let l;
  if (e && M(n) === "Array") {
    let r = localStorage.getItem(e);
    if (r) {
      let a = JSON.parse(decodeURI(r));
      l = n.filter((o) => o.key && a.indexOf(o.title) !== -1).map((o) => o.key);
    } else
      l = n.map((a) => a.key);
  } else
    l = [];
  return t || (l = String(l)), l;
}
function Ie(e) {
  return e != null && e !== "";
}
function Hu(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function Cl(e, n = !1, t = "") {
  return function(l, r) {
    let a;
    if (Array.isArray(e)) {
      let u = [];
      for (let s of e)
        Ie(r.row[s]) && u.push(r.row[s]);
      a = u.join(t);
    } else
      typeof e == "function" ? a = e(r) : a = r.row[e];
    let o = Sl(a), i = r.column._width;
    return a && o > i ? G(
      ql,
      {
        style: {
          width: "100%"
        },
        content: a,
        maxWidth: i * 2
      },
      () => G(
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
        a
      )
    ) : G("span", n && !Ie(a) ? "--" : a);
  };
}
function Gu(e) {
  if (Re(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && Ie(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (Ie(n))
        return !1;
    return !0;
  }
  return !Ie(e);
}
function Wu(e) {
  return M(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : M(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function $l({
  group: e,
  condition: n,
  key: t,
  val: l,
  childKey: r = "children"
}) {
  if (M(e) !== "Array" || M(n) !== "Function" || M(t) !== "String" || M(r) !== "String")
    return !1;
  e.forEach((a) => {
    n(a) && (M(l) === "Function" ? a[t] = l(a[t]) : a[t] = l), M(a[r]) === "Array" && a[r].length > 0 && $l({
      group: a[r],
      condition: n,
      key: t,
      val: l,
      childKey: r
    });
  });
}
function Ol(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function Ml(e) {
  return M(e) === "Number" && String(e) === "NaN";
}
function qu(e, n = !1, t = !1) {
  if (M(e) !== "Object")
    return e;
  let l = Object.assign(e, {}), r = "";
  for (let a in l)
    if (l.hasOwnProperty(a)) {
      let o = l[a];
      o === void 0 || o === "" || M(o) === "String" && o.trim() === "" || o === null || Ml(o) ? t ? n ? r += a + "=&" : l[a] = "" : delete l[a] : n && (r += a + "=" + o + "&");
    }
  return n ? r.length > 0 ? r.substring(0, r.length - 1) : "" : l;
}
function Ut(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || Re(t) ? n.push(Ut(t)) : Ie(t) && n.push(t);
  } else if (Re(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || Re(e[t]) ? n[t] = Ut(e[t]) : Ie(e[t]) && (n[t] = e[t]));
  return n;
}
function Ju(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function Pl(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
const El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: jt,
  dataFilterOrToUrl: qu,
  decimalDigitsLimit: Nu,
  downloadFileByFormSubmit: Il,
  fileExport: zu,
  findCollection: Fu,
  formDataHeadConfig: ju,
  getColumnsKeys: Du,
  hasPermission: Ol,
  htmlPrint: Ju,
  isEmptyValue: Gu,
  isNaN: Ml,
  isNumberValue: Hu,
  isValidValue: Ie,
  myTypeof: M,
  oneOf: Ru,
  removeEmptyValue: Ut,
  setValByOption: $l,
  siblingElems: Pl,
  stringLength: Wu,
  toFormData: Uu,
  toLine: xl,
  tooltipManual: Cl,
  trimObj: Vt
}, Symbol.toStringTag, { value: "Module" })), Xu = { class: "groupBoxRP" }, Ku = ["onClick"], Yu = /* @__PURE__ */ q({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const n = e, t = Zl();
    function l(a) {
      return a.path === n.pathName ? "active" : "";
    }
    function r(a, o) {
      a.preventDefault();
      let i = a.target;
      if (!o.children && !i.classList.contains("active")) {
        t.push(o.path);
        return;
      }
      let u = i.parentNode, s = Pl(u);
      for (let d of s) {
        d.classList.remove("open");
        const c = d.querySelectorAll(".open");
        for (let f of c)
          f.classList.remove("open");
      }
      u.classList.toggle("open");
    }
    return (a, o) => {
      const i = D("sideMenuGroup", !0);
      return O(), B("ul", Xu, [
        (O(!0), B(ue, null, Pe(n.data, (u, s) => (O(), B("li", {
          class: ce({ dropItemRP: u.children }),
          key: u.path + s
        }, [
          P("div", {
            class: ce(["menuTxtR", l(u)]),
            onClick: (d) => r(d, u),
            style: K({ paddingLeft: u.level * 20 + "px" })
          }, Q(u.name || "-- no name --"), 15, Ku),
          u.children ? (O(), ve(i, {
            key: 0,
            data: u.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : he("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Zu = { class: "menuListR" }, Qu = /* @__PURE__ */ q({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: n }) {
    const t = e, l = Ql(), r = H(!0), a = H(), o = H(), i = $(() => r.value ? I("r.hideMenu") : I("r.showMenu")), u = $(() => r.value ? "ios-arrow-back" : "ios-arrow-forward");
    zl(() => {
      let c = localStorage.getItem("menuDisplayR") || "";
      c !== "" ? r.value = JSON.parse(c) : (r.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), He(
      () => l.path,
      (c) => {
        a.value = c, qn(d);
      },
      { immediate: !0 }
    );
    function s() {
      r.value = !r.value, localStorage.setItem("menuDisplayR", JSON.stringify(r.value)), n("on-change", r.value);
    }
    function d() {
      let c = o.value.querySelectorAll(".dropItemRP");
      for (let f of c)
        f.querySelector(".active") && !f.classList.contains("open") && f.classList.add("open");
    }
    return (c, f) => {
      const v = D("Icon");
      return O(), B("div", {
        ref_key: "menuRef",
        ref: o,
        class: "menuBoxRP"
      }, [
        te(P("div", Zu, [
          V(Yu, {
            data: t.data,
            pathName: g(a)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ae, g(r)]
        ]),
        V(v, {
          type: g(u),
          size: 25,
          class: ce([{ showIco: !g(r) }, "menuShowHideIco"]),
          title: g(i),
          onClick: s,
          color: g(r) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), ec = ["title"], tc = /* @__PURE__ */ q({
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
    function l(r) {
      t.disabled || n("click", r);
    }
    return (r, a) => {
      const o = D("Icon"), i = Wn("has");
      return te((O(), B("div", {
        class: ce(["tableBtnsG", { disabled: t.disabled }]),
        onClick: l,
        title: t.title || g(I)("r.button")
      }, [
        V(o, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"])
      ], 10, ec)), [
        [i, t.has]
      ]);
    };
  }
}), nc = { class: "contentX" }, lc = { class: "arrowA" }, ac = /* @__PURE__ */ q({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const n = e, t = H(!0), l = $(() => t ? "background:" + n.bg || "transparent" : "");
    return (r, a) => {
      const o = D("Icon");
      return O(), B("div", {
        style: K(g(l))
      }, [
        te(P("div", nc, [
          Se(r.$slots, "default")
        ], 512), [
          [ae, g(t)]
        ]),
        P("div", lc, [
          P("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (i) => t.value = !g(t))
          }, [
            V(o, {
              type: g(t) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), rc = { class: "contentZ" }, oc = /* @__PURE__ */ q({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, l = $({
      get() {
        return t.modelValue;
      },
      set(a) {
        n("update:modelValue", a);
      }
    }), r = $(() => l.value ? "background:" + t.bg : "");
    return (a, o) => (O(), B("div", {
      style: K(g(r))
    }, [
      te(P("div", rc, [
        Se(a.$slots, "default")
      ], 512), [
        [ae, g(l)]
      ])
    ], 4));
  }
});
let Ft = [], Rt = [];
const ic = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    Ft.map((n) => {
      window.clearTimeout(n);
    }), Rt.map((n) => {
      window.clearInterval(n);
    }), Ft.length = 0, Rt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, pe = function(e, n) {
  let t = window.setTimeout(e, n);
  return Ft.push(t), t;
}, Bl = function(e, n) {
  let t = window.setInterval(e, n);
  return Rt.push(t), t;
}, sc = /* @__PURE__ */ q({
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
    let l = !1;
    const r = $({
      get() {
        return t.modelValue;
      },
      set(u) {
        n("update:modelValue", u);
      }
    }), a = $({
      get() {
        return t.open;
      },
      set(u) {
        n("on-toggle", u);
      }
    }), o = $(() => a.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      l || (l = !0, n("on-search", r.value), pe(() => {
        l = !1;
      }, 2e3));
    }
    return (u, s) => {
      const d = D("Input"), c = D("icon");
      return O(), B("div", {
        class: "tableSearchV",
        style: K({ position: t.fixed ? "fixed" : "absolute", right: t.right, top: t.top })
      }, [
        Se(u.$slots, "default", {}, () => [
          V(d, {
            modelValue: g(r),
            "onUpdate:modelValue": s[0] || (s[0] = (f) => ge(r) ? r.value = f : null),
            style: K({ width: t.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: t.placeholder || g(I)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        te(P("span", {
          class: "sbt",
          onClick: s[1] || (s[1] = (f) => a.value = !g(a)),
          style: K({ color: t.btnColor })
        }, [
          V(c, {
            type: g(o),
            color: t.btnColor
          }, null, 8, ["type", "color"]),
          Le(Q(g(I)("r.adSearch")), 1)
        ], 4), [
          [ae, t.showBtn]
        ])
      ], 4);
    };
  }
}), uc = { class: "tabSetF" }, cc = { class: "topCheck" }, dc = /* @__PURE__ */ q({
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
    const t = e, l = H(!0), r = H(!1), a = H(!1), o = H([]), i = $(() => {
      let p = I("r.unknown");
      return t.modelValue.length > o.value.length && (o.value = ne(t.modelValue)), o.value.map((y) => {
        let b = { label: y && y.title || p };
        return y && y.disableShowSetting && (b.disabled = !0), b;
      });
    }), u = $(() => i.value.filter((p) => p.disabled)), s = $({
      get() {
        return t.modelValue.map((p) => p && p.title || I("r.unknown"));
      },
      set(p) {
        let y = o.value.filter((b) => {
          for (let x of p)
            if (x === b.title)
              return !0;
          return !1;
        });
        n("update:modelValue", y);
      }
    }), { locale: d } = ea();
    nt(() => {
      let p = I("r.unknown"), y;
      d.value ? y = localStorage.getItem(t.sKey + "_" + d.value) : y = localStorage.getItem(t.sKey), y ? s.value = JSON.parse(decodeURI(y)) : t.defaultCheck && (s.value = t.modelValue.filter((b) => b.showSettingCheck).map((b) => b && b.title || p));
    });
    function c(p) {
      p.length === i.value.length ? (l.value = !1, r.value = !0) : p.length > u.value.length ? (l.value = !0, r.value = !1) : (l.value = !1, r.value = !1);
    }
    He(() => s.value, c, {
      immediate: !0,
      deep: !0
    });
    function f() {
      a.value || (a.value = !0);
    }
    function v() {
      d.value ? localStorage.setItem(t.sKey + "_" + d.value, encodeURI(JSON.stringify(s.value))) : localStorage.setItem(t.sKey, encodeURI(JSON.stringify(s.value))), a.value = !1;
    }
    function m() {
      l.value ? r.value = !1 : r.value = !r.value, l.value = !1, r.value ? s.value = i.value.map((p) => p.label) : s.value = u.value.map((p) => p.label);
    }
    return (p, y) => {
      const b = D("Icon"), x = D("Checkbox"), w = D("CheckboxGroup");
      return O(), B("div", uc, [
        P("div", {
          class: "tabSetBt",
          onClick: f
        }, [
          V(b, {
            type: "md-settings",
            size: "17"
          }),
          P("span", null, Q(g(I)("r.tabSetting")), 1)
        ]),
        te(P("div", {
          class: "tabSetCard",
          style: K({ top: t.top, right: t.right, width: t.width, backgroundColor: t.bg })
        }, [
          P("div", cc, [
            V(x, {
              indeterminate: g(l),
              modelValue: g(r),
              "onUpdate:modelValue": y[0] || (y[0] = (_) => ge(r) ? r.value = _ : null),
              onClick: Dl(m, ["prevent"])
            }, {
              default: de(() => [
                Le(Q(g(I)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            P("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: v
            }, Q(g(I)("r.confirm")), 1)
          ]),
          V(w, {
            modelValue: g(s),
            "onUpdate:modelValue": y[1] || (y[1] = (_) => ge(s) ? s.value = _ : null)
          }, {
            default: de(() => [
              (O(!0), B(ue, null, Pe(g(i), (_, L) => (O(), ve(x, {
                class: "setItem",
                label: _ && _.label,
                key: "tabSet_" + t.sKey + L,
                disabled: _ && _.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [ae, g(a)]
        ])
      ]);
    };
  }
});
let Ue = 0, tt = document.createElement("div");
tt.setAttribute("class", "spinModal");
tt.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(tt);
};
function Fn(e) {
  e ? tt.classList.add("show") : tt.classList.remove("show");
}
function Ll(e) {
  let n = Ue;
  e ? Ue++ : Ue > 0 && Ue--, n !== Ue && (Ue === 0 ? Fn(!1) : n === 0 && Fn(!0));
}
const fc = window.location.origin;
let Fe = null;
const Rn = (...e) => we.apply(Fe, e);
let ie = Ct.create({
  baseURL: fc,
  withCredentials: !0
  // 允许携带cookie
});
function pc() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
ie.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function Nn() {
  if (ie.store)
    if (typeof ie.store == "function") {
      const e = ie.store();
      e.logout && e.logout();
    } else
      ie.store.dispatch("logout");
  else
    pc();
}
ie.interceptors.response.use(
  (e) => (Fe && e && e.data && (e.data.code === 403 || e.data.code === 409) && Fe.messageBox({
    content: Rn("r.http." + e.data.code),
    onOk: Nn
  }), e),
  (e) => (Fe && e && e.response && (e.response.status === 403 || e.response.status === 409) && Fe.messageBox({
    content: Rn("r.http." + e.response.status),
    onOk: Nn
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function Ae(e, n, t, l) {
  l && l.spin && Ll(!1);
  let r = !0, a = e && e.data;
  if (a) {
    t = t || [];
    for (let o of t)
      a = a[o], r = r && a;
    return r ? a : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function gc(e, n, t, l, r, a, o) {
  return new Promise((i, u) => {
    switch (e) {
      case "get":
        ie.get(n, { params: t }).then((d) => {
          let c = Ae(d, l, r, a);
          c ? i(c) : u(d);
        }).catch((d) => {
          Ae({}, l, r, a), u(d);
        });
        break;
      case "delete":
        let s = o ? "params" : "data";
        ie.delete(n, { [s]: t }).then((d) => {
          let c = Ae(d, l, r, a);
          c ? i(c) : u(d);
        }).catch((d) => {
          Ae({}, l, r, a), u(d);
        });
        break;
      case "post":
        ie.post(n, t, a).then((d) => {
          let c = Ae(d, l, r, a);
          c ? i(c) : u(d);
        }).catch((d) => {
          Ae({}, l, r, a), u(d);
        });
        break;
      case "put":
        ie.put(n, t, a).then((d) => {
          let c = Ae(d, l, r, a);
          c ? i(c) : u(d);
        }).catch((d) => {
          Ae({}, l, r, a), u(d);
        });
        break;
    }
  });
}
function ot(e, n, t = {}, l, r, a, o) {
  return new Promise((i, u) => {
    if (n) {
      a && a.spin && Ll(!0);
      let s = n;
      if (window && window.hasOwnProperty("g")) {
        const f = window.g;
        let v = Object.keys(f).filter((m) => m.indexOf("URL") > -1).map((m) => m.replace("URL", ""));
        for (let m of v) {
          let p = new RegExp("^/" + m + "(?=/.*$)", "i");
          if (p.test(n) && f[m + "URL"]) {
            s = f[m + "URL"] + n.replace(p, "");
            break;
          }
        }
      }
      let d;
      if (a && a.headers && a.headers["Content-Type"] === "multipart/form-data")
        d = t;
      else if (t && !xe(t))
        if (Array.isArray(t)) {
          d = [];
          for (let f of t)
            (f || f === 0 || f === !1 || f === "" && a && !a.noEmptyStr) && d.push(f);
        } else {
          d = {};
          for (let f in t)
            t.hasOwnProperty(f) && (t[f] || t[f] === 0 || t[f] === !1 || t[f] === "" && a && !a.noEmptyStr) && (d[f] = t[f]);
        }
      let c = e.toLowerCase();
      gc(c, s, d, l, r, a, o).then((f) => {
        i(f);
      }).catch((f) => {
        u(f);
      });
    } else
      console.error("没有请求地址:url"), u("没有请求地址:url");
  });
}
const $e = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, n) {
    ie.store = e, Fe = n.config.globalProperties;
  },
  post(e, n, t, l, r) {
    return new Promise((a, o) => {
      ot("post", e, n, t, l, r).then((i) => {
        a(i);
      }).catch((i) => {
        o(i);
      });
    });
  },
  put(e, n, t, l, r) {
    return new Promise((a, o) => {
      ot("put", e, n, t, l, r).then((i) => {
        a(i);
      }).catch((i) => {
        o(i);
      });
    });
  },
  get(e, n, t, l, r) {
    return new Promise((a, o) => {
      ot("get", e, n, t, l, r).then((i) => {
        a(i);
      }).catch((i) => {
        o(i);
      });
    });
  },
  delete(e, n, t, l, r, a = !0) {
    return new Promise((o, i) => {
      ot("delete", e, n, t, l, r, a).then((u) => {
        o(u);
      }).catch((u) => {
        i(u);
      });
    });
  },
  all: Ct.all,
  spread: Ct.spread,
  config: ie
}, mc = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, hc = { class: "topBtn" }, vc = { class: "fullHeight relativeBox" }, yc = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, bc = { class: "pageContainer" }, wc = 300, _c = /* @__PURE__ */ q({
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
    const l = e, { globalProperties: r } = zt().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Jl });
    const o = r.pageSizes || [10, 20, 30, 40], i = H(l.data), u = H(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || l.pageSize
    ), s = H(1), d = H(0);
    let c = [], f, v, m = l.orderKey, p = l.orderDefault;
    const y = $(() => {
      for (let S of l.columns)
        if (S.fixed)
          return !0;
      return !1;
    }), b = $(() => l.selectionFixed || y.value), x = $(() => {
      let S = {
        ...l.searchData,
        current: s.value,
        size: u.value
      };
      return l.sortable === "custom" && (l.orderKeyFormat === "underline" ? S[p] = xl(m) : l.orderKeyFormat === "camelcase" && (S[p] = _l(m))), S;
    }), w = $(() => {
      let S = l.columns.filter((T) => T.type !== "selection");
      if (l.selection || l.radio) {
        let T;
        l.radio ? T = {
          title: " ",
          width: 65,
          render: (le, Y) => G(Xl, {
            value: Y.row.btChecked
          })
        } : T = {
          type: "selection",
          width: 60
        }, l.selectionFixed && (T.fixed = l.selectionFixed), S.unshift(T);
      }
      return S.forEach((T) => {
        l.sortable === "custom" ? T.key && T.sortable !== !0 && T.sortable !== !1 && (T.sortable = "custom") : T.sortable = !1, T.align || (T.align = "center");
      }), l.tableEmptyTdHandle && S.forEach((T) => {
        T.key && T.render === void 0 && (T.tooltip ? T.render = Cl(T.key, !0) : T.render = (le, Y) => {
          let X = Y.row[T.key];
          return le("span", X === "" || X === null || X === void 0 ? "--" : X);
        });
      }), S;
    }), _ = $({
      get() {
        return i.value.map((S, T) => ({
          btKey: "bt-" + T,
          btChecked: !1,
          ...S
        }));
      },
      set(S) {
        i.value = S;
      }
    }), L = $(() => c.map((S) => S.id)), A = $(() => c.map((S) => S.btKey)), U = H();
    He(() => l.searchData, ee, { deep: !0 });
    function ee() {
      s.value = 1, qe();
    }
    function h() {
      l.initData && qe();
    }
    function C(S) {
      i.value.unshift(ne(S)), pe(() => {
        var T;
        (T = U.value) == null || T.clickCurrentRow(0);
      }, 100);
    }
    function k(S, T, le) {
      let Y = null;
      if (xu(T) && T ? Y = v : Ne(T) && (Y = T), Y !== null) {
        let X = i.value[Y];
        for (let j in S)
          S.hasOwnProperty(j) && (X[j] = S[j]);
        le && pe(() => {
          var j;
          (j = U.value) == null || j.clickCurrentRow(Y);
        }, 10);
      }
    }
    function F(S) {
      i.value.splice(S, 1), pe(() => {
        var T;
        (T = U.value) == null || T.clickCurrentRow(0);
      }, 100);
    }
    function J(S, T) {
      var le;
      S.btChecked && l.radio || (l.selection || l.radio) && l.rowClickSelect && ((le = U.value) == null || le.toggleSelect(T));
    }
    function E(S, T) {
      f = T.btKey, v = Number(T.btKey.split("-")[1]), l.radio && (i.value[v].btChecked = !0);
    }
    function z(S) {
      if (l.radio)
        for (let T of _.value)
          T.btKey !== f && (i.value[Number(T.btKey.split("-")[1])].btChecked = !1);
      c = S, t("on-selection-change", S);
    }
    function W() {
      return ne(c);
    }
    function re(S) {
      s.value = S, qe();
    }
    function Ge(S) {
      u.value = S, localStorage.setItem("btPageSize", String(S)), s.value === 1 && qe();
    }
    function Fl({ key: S, order: T }) {
      p === "normal" ? (m = l.orderKey, p = l.orderDefault) : (m = S, p = T), s.value = 1, We();
    }
    function lt() {
      var S;
      if (l.radio) {
        if (A.value.length > 0 && _.value.length > 0) {
          let T = A.value[0].split("-")[1];
          _.value[T].btChecked = !1;
        }
      } else
        (S = U.value) == null || S.selectAll(!1);
      c.length > 0 && (c = [], t("on-selection-change", [])), f = null, v = null;
    }
    function wt() {
      i.value = [], lt(), s.value = 1, d.value = 0;
    }
    function We(S, T, le) {
      return new Promise((Y) => {
        S && (p = S), T && (m = T), l.url ? $e.get(l.url, x.value, "", [], { spin: l.getDataLoading }).then((X) => {
          var en, tn, nn, ln, an, rn, on, sn;
          let j;
          le || lt(), typeof l.dataHandler == "function" ? j = l.dataHandler(X) : j = X, j.data ? ((en = j.data) != null && en.records || ((tn = j.data) == null ? void 0 : tn.records) === null ? i.value = ((nn = j.data) == null ? void 0 : nn.records) || [] : j.data.page ? ((ln = j.data.page) != null && ln.records || ((an = j.data.page) == null ? void 0 : an.records) === null) && (i.value = j.data.page.records || []) : j.data.data ? ((rn = j.data.data) != null && rn.records || ((on = j.data.data) == null ? void 0 : on.records) === null) && (i.value = ((sn = j.data.data) == null ? void 0 : sn.records) || []) : i.value = j.data, d.value = j.data.page && j.data.page.total || j.data.data && j.data.data.total || j.data.total || j.total || 0, d.value === 0 && s.value > 1 && i.value && i.value.length === 0 ? s.value = 1 : s.value > 1 && d.value <= (s.value - 1) * u.value && (s.value--, qn(function() {
            We(S, T);
          })), t("on-data-change", j), Y(j)) : (console.warn("请求返回数据有误，无法使用"), wt(), t("on-data-change", j));
        }).catch((X) => {
          console.warn(X), lt(), wt(), t("on-data-change", X);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function qe(S, T, le) {
      l.radio && (S || l.rowClickNum !== -1) ? We(T, le, S).then(() => {
        i.value.length > 0 && pe(() => {
          var Y, X;
          S ? (Y = U.value) == null || Y.clickCurrentRow(v || 0) : (X = U.value) == null || X.clickCurrentRow(l.rowClickNum);
        }, 10);
      }) : We();
    }
    return nt(h), n({
      selectedIds: L,
      addRow: C,
      setRowData: k,
      deleteRow: F,
      getSelected: W,
      clearSelect: lt,
      clearTableData: wt,
      getTableData: We,
      getDataAndClickRow: qe
    }), (S, T) => {
      const le = D("Table"), Y = D("Page");
      return O(), B("div", mc, [
        te(P("div", hc, [
          Se(S.$slots, "tableSetting"),
          Se(S.$slots, "topMsg"),
          Se(S.$slots, "topBtnGroup")
        ], 512), [
          [ae, l.showTopRow]
        ]),
        P("div", {
          class: ce(["tableContainer fullHeight", { noTop: !l.showTopRow, noPage: l.noPage }])
        }, [
          P("div", vc, [
            P("div", yc, [
              V(le, Jn({
                ref_key: "tableRef",
                ref: U
              }, S.$attrs, {
                height: g(b) && wc || null,
                class: { noBorderTable: l.noBorderTable, fullHeightTable: !g(b), lightHeadO: l.lightHead },
                columns: g(w),
                data: g(_),
                "highlight-row": l.radio || l.highlightRow,
                onOnSelect: E,
                onOnSelectionChange: z,
                onOnSortChange: Fl,
                onOnRowClick: J
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        te(P("div", bc, [
          V(Y, {
            modelValue: g(s),
            "onUpdate:modelValue": T[0] || (T[0] = (X) => ge(s) ? s.value = X : null),
            "page-size-opts": g(o),
            total: g(d),
            "page-size": g(u),
            "show-sizer": "",
            "show-total": "",
            showElevator: !l.noElevator,
            size: l.pageComponentSize,
            onOnChange: re,
            onOnPageSizeChange: Ge
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [ae, !l.noPage]
        ])
      ], 512);
    };
  }
}), Ac = /* @__PURE__ */ q({
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
    const t = e, l = $({
      get() {
        return t.modelValue && t.modelValue.key || null;
      },
      set(s) {
        let d = {
          key: s,
          val: null
        };
        l.value && l.value !== s && (d.beforeKey = l.value), n("update:modelValue", d), n("on-change", d);
      }
    }), r = $({
      get() {
        return t.modelValue && t.modelValue.val || null;
      },
      set(s) {
        n("update:modelValue", {
          key: l.value,
          val: s
        });
      }
    }), a = $(() => ({
      width: t.labelWidth + "px",
      textAlign: t.labelTextAlign
    })), o = $(() => ({ width: t.itemWidth + "px" }));
    function i(s) {
      s && s.target && s.target.value !== void 0 && u({
        key: l.value,
        val: s.target.value
      });
    }
    const u = _u((s) => {
      n("on-change", s);
    }, 500);
    return (s, d) => {
      const c = D("Option"), f = D("Select"), v = D("Input");
      return O(), B("div", null, [
        V(f, {
          modelValue: g(l),
          "onUpdate:modelValue": d[0] || (d[0] = (m) => ge(l) ? l.value = m : null),
          style: K(g(a)),
          disabled: !!t.disabled,
          transfer: ""
        }, {
          default: de(() => [
            (O(!0), B(ue, null, Pe(t.selectOption, (m, p) => (O(), ve(c, {
              value: m.val,
              key: "selectInputOp" + m.value + p,
              style: K({ textAlign: t.labelTextAlign })
            }, {
              default: de(() => [
                Le(Q(m.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        V(v, {
          modelValue: g(r),
          "onUpdate:modelValue": d[1] || (d[1] = (m) => ge(r) ? r.value = m : null),
          placeholder: t.placeholder || g(I)("r.pInput"),
          style: K(g(o)),
          clearable: t.clearable,
          disabled: !!t.disabled,
          onOnChange: i
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var Tc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kl = { exports: {} };
(function(e, n) {
  (function(t, l) {
    e.exports = l();
  })(Tc, function() {
    function t(c) {
      var f = [];
      return c.AMapUI && f.push(l(c.AMapUI)), c.Loca && f.push(r(c.Loca)), Promise.all(f);
    }
    function l(c) {
      return new Promise(function(f, v) {
        var m = [];
        if (c.plugins)
          for (var p = 0; p < c.plugins.length; p += 1)
            o.AMapUI.plugins.indexOf(c.plugins[p]) == -1 && m.push(c.plugins[p]);
        if (i.AMapUI === a.failed)
          v("前次请求 AMapUI 失败");
        else if (i.AMapUI === a.notload) {
          i.AMapUI = a.loading, o.AMapUI.version = c.version || o.AMapUI.version, p = o.AMapUI.version;
          var y = document.body || document.head, b = document.createElement("script");
          b.type = "text/javascript", b.src = "https://webapi.amap.com/ui/" + p + "/main.js", b.onerror = function(x) {
            i.AMapUI = a.failed, v("请求 AMapUI 失败");
          }, b.onload = function() {
            if (i.AMapUI = a.loaded, m.length)
              window.AMapUI.loadUI(m, function() {
                for (var x = 0, w = m.length; x < w; x++) {
                  var _ = m[x].split("/").slice(-1)[0];
                  window.AMapUI[_] = arguments[x];
                }
                for (f(); u.AMapUI.length; )
                  u.AMapUI.splice(0, 1)[0]();
              });
            else
              for (f(); u.AMapUI.length; )
                u.AMapUI.splice(0, 1)[0]();
          }, y.appendChild(b);
        } else
          i.AMapUI === a.loaded ? c.version && c.version !== o.AMapUI.version ? v("不允许多个版本 AMapUI 混用") : m.length ? window.AMapUI.loadUI(m, function() {
            for (var x = 0, w = m.length; x < w; x++) {
              var _ = m[x].split("/").slice(-1)[0];
              window.AMapUI[_] = arguments[x];
            }
            f();
          }) : f() : c.version && c.version !== o.AMapUI.version ? v("不允许多个版本 AMapUI 混用") : u.AMapUI.push(function(x) {
            x ? v(x) : m.length ? window.AMapUI.loadUI(m, function() {
              for (var w = 0, _ = m.length; w < _; w++) {
                var L = m[w].split("/").slice(-1)[0];
                window.AMapUI[L] = arguments[w];
              }
              f();
            }) : f();
          });
      });
    }
    function r(c) {
      return new Promise(function(f, v) {
        if (i.Loca === a.failed)
          v("前次请求 Loca 失败");
        else if (i.Loca === a.notload) {
          i.Loca = a.loading, o.Loca.version = c.version || o.Loca.version;
          var m = o.Loca.version, p = o.AMap.version.startsWith("2"), y = m.startsWith("2");
          if (p && !y || !p && y)
            v("JSAPI 与 Loca 版本不对应！！");
          else {
            p = o.key, y = document.body || document.head;
            var b = document.createElement("script");
            b.type = "text/javascript", b.src = "https://webapi.amap.com/loca?v=" + m + "&key=" + p, b.onerror = function(x) {
              i.Loca = a.failed, v("请求 AMapUI 失败");
            }, b.onload = function() {
              for (i.Loca = a.loaded, f(); u.Loca.length; )
                u.Loca.splice(0, 1)[0]();
            }, y.appendChild(b);
          }
        } else
          i.Loca === a.loaded ? c.version && c.version !== o.Loca.version ? v("不允许多个版本 Loca 混用") : f() : c.version && c.version !== o.Loca.version ? v("不允许多个版本 Loca 混用") : u.Loca.push(function(x) {
            x ? v(x) : v();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var a;
    (function(c) {
      c.notload = "notload", c.loading = "loading", c.loaded = "loaded", c.failed = "failed";
    })(a || (a = {}));
    var o = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = { AMap: a.notload, AMapUI: a.notload, Loca: a.notload }, u = { AMap: [], AMapUI: [], Loca: [] }, s = [], d = function(c) {
      typeof c == "function" && (i.AMap === a.loaded ? c(window.AMap) : s.push(c));
    };
    return { load: function(c) {
      return new Promise(function(f, v) {
        if (i.AMap == a.failed)
          v("");
        else if (i.AMap == a.notload) {
          var m = c.key, p = c.version, y = c.plugins;
          m ? (window.AMap && location.host !== "lbs.amap.com" && v("禁止多种API加载方式混用"), o.key = m, o.AMap.version = p || o.AMap.version, o.AMap.plugins = y || o.AMap.plugins, i.AMap = a.loading, p = document.body || document.head, window.___onAPILoaded = function(x) {
            if (delete window.___onAPILoaded, x)
              i.AMap = a.failed, v(x);
            else
              for (i.AMap = a.loaded, t(c).then(function() {
                f(window.AMap);
              }).catch(v); s.length; )
                s.splice(0, 1)[0]();
          }, y = document.createElement("script"), y.type = "text/javascript", y.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + o.AMap.version + "&key=" + m + "&plugin=" + o.AMap.plugins.join(","), y.onerror = function(x) {
            i.AMap = a.failed, v(x);
          }, p.appendChild(y)) : v("请填写key");
        } else if (i.AMap == a.loaded)
          if (c.key && c.key !== o.key)
            v("多个不一致的 key");
          else if (c.version && c.version !== o.AMap.version)
            v("不允许多个版本 JSAPI 混用");
          else {
            if (m = [], c.plugins)
              for (p = 0; p < c.plugins.length; p += 1)
                o.AMap.plugins.indexOf(c.plugins[p]) == -1 && m.push(c.plugins[p]);
            m.length ? window.AMap.plugin(m, function() {
              t(c).then(function() {
                f(window.AMap);
              }).catch(v);
            }) : t(c).then(function() {
              f(window.AMap);
            }).catch(v);
          }
        else if (c.key && c.key !== o.key)
          v("多个不一致的 key");
        else if (c.version && c.version !== o.AMap.version)
          v("不允许多个版本 JSAPI 混用");
        else {
          var b = [];
          if (c.plugins)
            for (p = 0; p < c.plugins.length; p += 1)
              o.AMap.plugins.indexOf(c.plugins[p]) == -1 && b.push(c.plugins[p]);
          d(function() {
            b.length ? window.AMap.plugin(b, function() {
              t(c).then(function() {
                f(window.AMap);
              }).catch(v);
            }) : t(c).then(function() {
              f(window.AMap);
            }).catch(v);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, o = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = {
        AMap: a.notload,
        AMapUI: a.notload,
        Loca: a.notload
      }, u = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(kl);
var xc = kl.exports;
const Ic = /* @__PURE__ */ Sc(xc);
let Nt = { securityJsCode: "", key: "" };
function Cc({ securityJsCode: e, key: n }) {
  Nt.securityJsCode = e, Nt.key = n;
}
function $c(e) {
  return Nt[e];
}
const Oc = /* @__PURE__ */ q({
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
    const t = e, l = $({
      get() {
        let w;
        return t.modelValue ? t.modelValue.name ? w = ne(t.modelValue) : w = {
          ...t.modelValue,
          name: null
        } : w = {
          name: null
        }, w;
      },
      set(w) {
        n("update:modelValue", ne(w));
      }
    }), r = $(() => Ne(t.width) ? t.width + "px" : t.width), a = $(() => Ne(t.height) ? t.height + "px" : t.height ? t.height : Ne(t.width) ? t.width * 0.66 + "px" : "200px"), o = $(() => ({
      width: r.value,
      position: "relative"
    })), i = $(() => ({
      width: r.value,
      height: a.value,
      marginTop: "6px",
      opacity: t.showMap ? 1 : 0,
      position: t.showMap ? "relative" : "absolute",
      top: t.showMap ? 0 : "-10000px"
    }));
    He(
      () => t.modelValue,
      (w) => {
        if (w && w.lng && w.lat) {
          if (!m || !p)
            return;
          b({
            lng: w.lng,
            lat: w.lat,
            name: w.name
          });
        }
      }
    );
    const u = "mapId" + Math.floor(Math.random() * 1e9), s = H(null), d = H(null);
    let c;
    function f() {
      d.value && d.value.clientHeight < 10 || !d.value ? pe(f, 300) : pe(y, 100);
    }
    let v, m, p;
    function y() {
      Ic.load({
        key: $c("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((w) => {
        v = w, m = new v.Map(u).on("complete", () => {
          var _, L;
          p = new v.Geocoder(), t.modelValue && t.modelValue.lng && t.modelValue.lat && b({
            lng: t.modelValue.lng,
            lat: t.modelValue.lat,
            name: t.modelValue.name
          }), new v.AutoComplete({
            input: (L = (_ = s.value) == null ? void 0 : _.$el) == null ? void 0 : L.children[1]
          }).on("select", (A) => {
            A && A.poi && A.poi.name && (A.poi.location && A.poi.location.lng && A.poi.location.lat ? (b({
              name: A.poi.name,
              lng: A.poi.location.lng,
              lat: A.poi.location.lat
            }), l.value = {
              name: A.poi.name,
              lng: A.poi.location.lng,
              lat: A.poi.location.lat
            }) : m.setCity(A.poi.name, () => {
              let U = m.getCenter();
              b({
                name: A.poi.name,
                lng: U.lng,
                lat: U.lat
              }), l.value = {
                name: A.poi.name,
                lng: U.lng,
                lat: U.lat
              };
            })), n("on-change", l.value);
          }), m.on("hotspotclick", (A) => {
            b({
              name: A.name,
              lng: A.lnglat.lng,
              lat: A.lnglat.lat
            }), l.value = {
              name: A.name,
              lng: A.lnglat.lng,
              lat: A.lnglat.lat
            };
          });
        });
      });
    }
    function b({ lng: w, lat: _, name: L }) {
      m.clearMap();
      let A = new v.LngLat(w, _), U = new v.Marker({
        map: m,
        position: A,
        draggable: !0
      });
      m.add(U), x(w, _), U.on("dragend", () => {
        let ee = U.getPosition();
        l.value = {
          name: L || null,
          lng: ee.lng,
          lat: ee.lat
        }, x(w, _);
      }), U.on("click", (ee) => {
        c && c.open(m, ee.target.getPosition());
      }), m.setFitView();
    }
    function x(w, _) {
      p.getAddress([w, _], (L, A) => {
        L === "complete" && A.info === "OK" && A.regeocode && A.regeocode.formattedAddress ? c = new v.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + A.regeocode.formattedAddress + "</div>",
          offset: new v.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (c = null, console.warn("地图获取位置信息失败", A));
      });
    }
    return nt(f), Hl(() => {
      m && (m.destroy(), m = null, p = null, c = null);
    }), (w, _) => (O(), B("div", {
      style: K(g(o)),
      class: "containerIKJ"
    }, [
      V(g(Kl), {
        ref_key: "mapInputRef",
        ref: s,
        modelValue: g(l).name,
        "onUpdate:modelValue": _[0] || (_[0] = (L) => g(l).name = L),
        class: ce({ mapInputIKJ: t.showMap }),
        placeholder: t.placeholder || g(I)("r.search"),
        disabled: t.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      P("div", {
        style: K(g(i)),
        ref_key: "mapRef",
        ref: d,
        id: u
      }, null, 4)
    ], 4));
  }
});
var Hn;
const Mc = /* @__PURE__ */ q({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Hn = window == null ? void 0 : window.g) != null && Hn.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
    optionVal: { default: "id" },
    optionLabel: { default: "name" },
    optionFilter: {},
    separator: { default: "/" },
    onlyLastVal: { type: Boolean, default: !0 },
    onlyLastLabel: { type: Boolean, default: !0 },
    filterable: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-label-change"],
  setup(e, { emit: n }) {
    const t = e, l = H([]), r = $({
      get() {
        let s = t.modelValue;
        return Array.isArray(s) ? ne(s) : Ne(s) ? mt({
          group: l.value,
          condition: (d) => d.value === s,
          pathKey: "value"
        }) : wl(s) ? s.split(t.separator) : [];
      },
      set(s) {
        if (t.onlyLastVal)
          xe(s) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", gt(s));
        else {
          if (Mu(t.modelValue, s))
            return;
          n("update:modelValue", ne(s));
        }
      }
    });
    function a() {
      if (!t.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      $e.get(t.url).then((s) => {
        let d = null;
        s && s.data && s.data.records ? d = s.data.records : s && s.data ? d = s.data : s && (d = s), d ? (typeof t.optionFilter == "function" && M(t.optionFilter) === "Function" && (d = t.optionFilter(d)), l.value = o(d)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function o(s) {
      let d = [];
      for (let c of s) {
        let f = {
          value: c[t.optionVal],
          label: c[t.optionLabel]
        };
        c.children && !xe(c.children) && (f.children = o(c.children)), d.push(f);
      }
      return d;
    }
    function i(s, d) {
      return t.onlyLastLabel ? gt(s) : s.join(t.separator);
    }
    function u(s, d) {
      let c = "";
      xe(d) || (c = d.map((f) => f.label).join(t.separator)), n("on-label-change", c);
    }
    return nt(a), (s, d) => {
      const c = D("Cascader");
      return O(), ve(c, {
        data: g(l),
        modelValue: g(r),
        "onUpdate:modelValue": d[0] || (d[0] = (f) => ge(r) ? r.value = f : null),
        onOnChange: u,
        "change-on-select": "",
        transfer: "",
        disabled: t.disabled,
        "render-format": i,
        placeholder: t.placeholder || g(I)("r.pSelect"),
        filterable: t.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Pc = /* @__PURE__ */ q({
  __name: "AlCascaderMC",
  props: {
    modelValue: {},
    level: { default: 2 },
    disabled: { type: Boolean, default: !1 },
    transfer: { type: Boolean, default: !0 },
    filterable: { type: Boolean, default: !0 },
    separator: { default: "/" },
    placeholder: {}
  },
  emits: ["update:modelValue", "on-name-change"],
  setup(e, { emit: n }) {
    const t = e, l = H(), r = $({
      get() {
        if (t.modelValue && (Ne(t.modelValue) || wl(t.modelValue))) {
          let o = String(t.modelValue).trim();
          if (/^\d*$/.test(o)) {
            let u = o.substring(0, 2) + "0000", s, d = a(o);
            return d.length < 7 ? s = o.substring(0, 4) + "00" : s = o.substring(0, 6), /^8\d+$/.test(o) ? [u, d] : [u, s, d];
          }
          return o.indexOf(t.separator) !== -1 ? o.split(t.separator) : [o];
        } else
          return Array.isArray(t.modelValue) ? ne(t.modelValue) : (l.value && (l.value.select = []), []);
      },
      set(o) {
        if (xe(o))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let i = gt(o), u = "", s = "";
          if (i && (u = i.code), u && u.length < 12) {
            let d = [...u];
            for (; d.length < 12; )
              d.push(0);
            u = d.join("");
          }
          if (Array.isArray(o) && (s = o.map((d) => d.name).join(t.separator)), u) {
            if (u === t.modelValue)
              return;
            n("update:modelValue", u);
          }
          s && n("on-name-change", s);
        }
      }
    });
    function a(o) {
      let i = [...o];
      for (; i[i.length - 1] === "0"; )
        i.pop();
      return i.join("");
    }
    return (o, i) => (O(), ve(g(ta), Jn(o.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: l,
      modelValue: g(r),
      "onUpdate:modelValue": i[0] || (i[0] = (u) => ge(r) ? r.value = u : null),
      level: t.level,
      disabled: t.disabled,
      placeholder: t.placeholder || g(I)("r.pSelect"),
      transfer: t.transfer,
      searchable: t.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Me(e) {
  var o;
  const n = (...i) => we.apply(this, i), t = n("r.closePreview"), l = n("r.fullImg");
  let r = Lt(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${e}' alt='${l}' ><i class='ivu-icon ivu-icon-md-close' title='${t}' ></i></div>`, (o = a.querySelector(".ivu-icon-md-close")) == null || o.addEventListener("click", function() {
    let i = Lt(document.getElementsByTagName("body"));
    i && i.removeChild(a);
  }), r == null || r.appendChild(a);
}
const Ec = { class: "previewBoxM" }, Bc = {
  key: 0,
  class: "previewImg"
}, Lc = ["src", "alt"], kc = { class: "deleteModal" }, Vc = { class: "previewBoxM" }, jc = {
  key: 0,
  class: "previewImg"
}, Uc = ["src", "alt"], Fc = { class: "deleteModal" }, Rc = { class: "customFileListM" }, Nc = {
  key: 0,
  class: "customFileListItem"
}, zc = ["onClick", "title"], Dc = { class: "btBoxJ" }, Hc = { class: "customFileListM" }, Gc = {
  key: 0,
  class: "customFileListItem"
}, Wc = ["onClick", "title"], qc = { class: "btBoxJ" };
var Gn;
const Jc = /* @__PURE__ */ q({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Gn = window == null ? void 0 : window.g) != null && Gn.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
    data: { default: () => ({
      appId: 0,
      moduleId: 0,
      typeId: 0
    }) },
    manualUpload: { type: Boolean, default: !1 },
    maxSize: { default: 0 },
    length: { default: 0 },
    showUploadList: { type: Boolean, default: !0 },
    withCredentials: { type: Boolean, default: !0 },
    multiple: { type: Boolean, default: !1 },
    format: { default: () => [] },
    showImg: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: n }) {
    const t = e, l = It([]), r = It([]), a = $(() => !t.manualUpload && t.showImg && s.value ? "img" : t.manualUpload && t.showImg && s.value ? "localImg" : t.manualUpload && t.showUploadList && (!t.showImg || !s.value) ? "localList" : !t.manualUpload && t.showUploadList && (!t.showImg || !s.value) ? "list" : ""), o = $(() => t.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : t.url), i = $({
      get() {
        if (t.manualUpload)
          return u.value;
        {
          let h = [];
          for (let C of u.value)
            typeof C == "object" && M(C) === "File" ? h.push(C) : (typeof C == "number" || typeof C == "string") && h.push({
              response: {
                data: [
                  {
                    id: C
                  }
                ]
              }
            });
          return h;
        }
      },
      set(h) {
        var C;
        if (t.manualUpload)
          u.value = h;
        else {
          let k = [];
          for (let F of h)
            (C = F == null ? void 0 : F.response) != null && C.data && F.response.data[0] && F.response.data[0].id && k.push(F.response.data[0].id);
          u.value = k;
        }
      }
    }), u = $({
      get() {
        switch (typeof t.modelValue) {
          case "number":
            return [t.modelValue];
          case "string":
            return t.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(t.modelValue) ? [Number(t.modelValue)] : [t.modelValue];
          case "object":
            return Array.isArray(t.modelValue) ? t.modelValue.filter((h) => h !== "--") : M(t.modelValue) === "File" ? [t.modelValue] : [];
          default:
            return [];
        }
      },
      set(h) {
        if (t.length === 1) {
          let C = Lt(h);
          n("update:modelValue", C ?? null), n("on-change", C ?? null);
        } else
          n("update:modelValue", ne(h)), n("on-change", ne(h));
      }
    }), s = $(() => {
      let h;
      t.manualUpload ? h = i.value : h = r.value;
      for (let C of h) {
        let k;
        if (t.manualUpload ? k = C && C.type : k = C && C.mimeType, !k || k && !ut(k))
          return !1;
      }
      return !0;
    });
    He(
      () => i.value,
      async (h) => {
        var C, k, F, J, E;
        if (a.value === "localImg")
          h && h.length > 0 ? l.value = await c(h) : l.value = [];
        else if (h && h.length > 0 && a.value !== "localList") {
          let z = [];
          for (let W of h)
            if (W.name === void 0)
              if ((C = W == null ? void 0 : W.response) != null && C.data && W.response.data[0] && W.response.data[0].id) {
                let re = await $e.get(t.url + "/" + W.response.data[0].id).catch(() => {
                  z.push({ name: I("r.file") + Un(h, W) });
                }), Ge = ne(W);
                Ge.name = ((k = re == null ? void 0 : re.data) == null ? void 0 : k.returnValue) && re.data.returnValue[0] && ((F = re.data.returnValue[0]) == null ? void 0 : F.name) || I("r.file") + Un(h, W), Ge.mimeType = ((J = re == null ? void 0 : re.data) == null ? void 0 : J.returnValue) && re.data.returnValue[0] && ((E = re.data.returnValue[0]) == null ? void 0 : E.mimeType) || "unknown", z.push(Ge);
              } else
                z.push({ name: I("r.unknown") });
            else
              z.push(W);
          r.value = z;
        } else
          r.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function d(h) {
      return h.name || h.split && gt(h.split("/")) || h;
    }
    async function c(h) {
      let C = [];
      for (let k of h) {
        let F = await st(k);
        C.push(F);
      }
      return C;
    }
    function f(h) {
      if (!t.disabled) {
        let C = i.value;
        C.splice(h, 1), i.value = C;
      }
    }
    function v(h) {
      h && h.response && h.response.data && h.response.data[0] && h.response.data[0].id && window.open(t.url + "/" + h.response.data[0].id + "/download");
    }
    function m(h) {
      var C, k;
      return t.manualUpload ? h.type && ut(h.type) : ((C = h == null ? void 0 : h.response) == null ? void 0 : C.data) && ((k = h.response.data[0]) == null ? void 0 : k.id) && h.mimeType && ut(h.mimeType);
    }
    function p(h) {
      t.manualUpload ? st(h).then((C) => {
        Me(C);
      }) : Me(t.url + "/" + h.response.data[0].id + "/download?preview=true");
    }
    function y(h) {
      M(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : M(h) === "File" && st(h).then((C) => {
        Al(h.name, C);
      });
    }
    function b(h) {
      if (t.manualUpload) {
        if (h) {
          let C = Qt(h.name);
          if (t.format.length > 0 && t.format.indexOf(C) < 0)
            return oe(
              I("r.wrongFileType"),
              I("r.supportType") + (t.format.length > 0 && String(t.format) || I("r.none")),
              "warning"
            ), !1;
          if (t.maxSize && h.size > t.maxSize * 1024)
            return oe(I("r.fileIsBig"), I("r.supportSize") + t.maxSize + "kb", "warning"), !1;
          let k = i.value;
          k.push(h), i.value = k;
        }
        return !1;
      } else
        return !0;
    }
    function x(h) {
      console.warn(h), oe(I("r.uploadError"), "", "error");
    }
    function w(h, C, k) {
      if (h && h.code === 0) {
        let F = i.value;
        F.push(C), i.value = F;
      } else
        oe(I("r.uploadFail"), h && h.message || "", "error");
    }
    function _() {
      oe(I("r.fileIsBig"), I("r.supportSize") + t.maxSize + " kb", "warning");
    }
    function L() {
      oe(
        I("r.wrongFileType"),
        I("r.supportType") + (t.format.length > 0 && String(t.format) || I("r.none")),
        "warning"
      );
    }
    function A(h) {
      var F, J, E, z;
      let C = ((F = h == null ? void 0 : h.response) == null ? void 0 : F.data) && ((J = h.response.data[0]) == null ? void 0 : J.id), k = ((E = h == null ? void 0 : h.response) == null ? void 0 : E.data) && ((z = h.response.data[0]) == null ? void 0 : z.mimeType);
      C && (M(k) === "String" && k.indexOf("image") > -1 ? Me(t.url + "/" + C + "/download?preview=true") : window.open(t.url + "/" + C + "/download?preview=true"));
    }
    function U(h) {
      var k, F;
      let C = ((k = h == null ? void 0 : h.response) == null ? void 0 : k.data) && ((F = h.response.data[0]) == null ? void 0 : F.id);
      ee(null, C);
    }
    function ee(h, C) {
      if (!t.disabled && u.value.indexOf(C) !== -1) {
        const k = ne(u.value);
        let F = i.value;
        F.splice(k.indexOf(C), 1), i.value = F;
      }
    }
    return (h, C) => {
      const k = D("Button"), F = D("Upload"), J = D("Icon");
      return O(), B("div", null, [
        V(F, {
          name: "files",
          action: g(o),
          "before-upload": b,
          "on-error": x,
          "on-success": w,
          "on-exceeded-size": _,
          "on-preview": A,
          "on-remove": U,
          "on-format-error": L,
          data: t.data,
          "max-size": t.maxSize,
          "show-upload-list": !1,
          "with-credentials": t.withCredentials,
          format: t.format,
          multiple: t.multiple || !1,
          disabled: t.length > 0 && g(i).length >= t.length || !!t.disabled
        }, {
          default: de(() => [
            V(k, {
              icon: "ios-cloud-upload-outline",
              class: ce({ disabledR: t.length > 0 && g(i).length >= t.length || !!t.disabled })
            }, {
              default: de(() => [
                Le(Q(g(I)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        te(P("div", Ec, [
          (O(!0), B(ue, null, Pe(g(u), (E) => (O(), B(ue, { key: E }, [
            !t.manualUpload && E !== null ? (O(), B("div", Bc, [
              P("img", {
                src: h.url + "/" + E + "/download?preview=true",
                alt: E
              }, null, 8, Lc),
              P("div", kc, [
                V(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: g(I)("r.fView"),
                  onClick: (z) => g(Me)(t.url + "/" + E + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                V(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (z) => ee(z, E),
                  title: g(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [ae, g(a) === "img" && g(u).length > 0]
        ]),
        te(P("div", Vc, [
          (O(!0), B(ue, null, Pe(g(l), (E, z) => (O(), B(ue, {
            key: "manualImg" + z
          }, [
            t.manualUpload && E !== null ? (O(), B("div", jc, [
              P("img", {
                src: E,
                alt: "manualImg" + z
              }, null, 8, Uc),
              P("div", Fc, [
                V(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (W) => g(Me)(E),
                  title: g(I)("r.fView")
                }, null, 8, ["onClick", "title"]),
                V(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (W) => f(z),
                  title: g(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [ae, g(a) === "localImg" && g(l).length > 0]
        ]),
        te(P("div", Rc, [
          (O(!0), B(ue, null, Pe(g(i), (E, z) => (O(), B(ue, {
            key: "manualItem" + z
          }, [
            t.manualUpload && E !== null ? (O(), B("p", Nc, [
              E.name ? (O(), ve(J, {
                key: 0,
                type: g(kt)(E.name)
              }, null, 8, ["type"])) : he("", !0),
              P("span", {
                class: ce(["upNameT", { previewName: m(E) }]),
                onClick: (W) => y(E),
                title: g(I)("r.download")
              }, Q(d(E)), 11, zc),
              P("span", Dc, [
                m(E) ? (O(), ve(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (W) => p(E),
                  title: g(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : he("", !0),
                V(J, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (W) => f(z),
                  title: g(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [ae, g(a) === "localList" && g(i).length > 0]
        ]),
        te(P("div", Hc, [
          (O(!0), B(ue, null, Pe(g(r), (E, z) => (O(), B(ue, {
            key: "defaultItem" + z
          }, [
            !t.manualUpload && E !== null ? (O(), B("p", Gc, [
              V(J, {
                type: g(kt)(E.name)
              }, null, 8, ["type"]),
              P("span", {
                class: ce(["upNameT", { previewName: m(E) }]),
                onClick: (W) => v(E),
                title: g(I)("r.download")
              }, Q(E.name || g(I)("r.file") + (z + 1)), 11, Wc),
              P("span", qc, [
                m(E) ? (O(), ve(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (W) => p(E),
                  title: g(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : he("", !0),
                V(J, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (W) => f(z),
                  title: g(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [ae, g(a) === "list" && g(r).length > 0]
        ])
      ]);
    };
  }
}), Xc = /* @__PURE__ */ P("div", { class: "bRoot" }, null, -1), Kc = /* @__PURE__ */ q({
  __name: "MonthRange",
  props: {
    modelValue: { default: () => ["", ""] },
    placement: { default: "bottom-start" },
    placeholder: {},
    options1: {},
    options2: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: n }) {
    const t = e, l = H(!1), r = H(!1), a = H(!1), o = $({
      get() {
        return t.modelValue && t.modelValue[0] || null;
      },
      set(p) {
        n("update:modelValue", [p, i.value]), n("on-change", [p, i.value]);
      }
    }), i = $({
      get() {
        return t.modelValue && t.modelValue[1] || null;
      },
      set(p) {
        n("update:modelValue", [o.value, p]), n("on-change", [o.value, p]);
      }
    }), u = $(
      () => (o.value || "") + ((o.value || i.value) && " - " || "") + (i.value || "")
    ), s = H();
    nt(() => {
      s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        a.value = !0;
      }), s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        a.value = !1;
      }), s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (p) => {
        !t.disabled && (o.value || i.value) && (p.stopPropagation(), v());
      });
    });
    function d() {
      t.disabled || (l.value = !0);
    }
    function c(p) {
      o.value = p, l.value = !1, r.value = !0;
    }
    function f(p) {
      i.value = p, r.value = !1;
    }
    function v() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function m() {
      l.value = !1, r.value = !1, o.value && i.value === null && (o.value = null);
    }
    return (p, y) => {
      const b = D("DatePicker"), x = D("Icon"), w = D("Input");
      return O(), B("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: s
      }, [
        V(b, {
          open: g(r),
          modelValue: g(i),
          transfer: "",
          type: "month",
          placement: t.placement,
          options: t.options2,
          onOnChange: f,
          onOnClickoutside: m
        }, {
          default: de(() => [
            Xc
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        V(b, {
          open: g(l),
          modelValue: g(o),
          transfer: "",
          type: "month",
          placement: t.placement,
          options: t.options1,
          onOnChange: c,
          onOnClickoutside: m
        }, {
          default: de(() => [
            P("div", { onClick: d }, [
              V(w, {
                class: "aRoot",
                modelValue: g(u),
                "onUpdate:modelValue": y[0] || (y[0] = (_) => ge(u) ? u.value = _ : null),
                readonly: "",
                placeholder: t.placeholder || g(I)("r.selectDate"),
                disabled: t.disabled
              }, {
                suffix: de(() => [
                  V(x, {
                    type: g(a) && (g(o) || g(i)) && !t.disabled ? "ios-close-circle" : "ios-calendar-outline"
                  }, null, 8, ["type"])
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"])
      ], 512);
    };
  }
}), Yc = { class: "editor-pro-root" }, Zc = /* @__PURE__ */ q({
  __name: "EditorPro",
  props: {
    modelValue: { default: "<p></p>" },
    toolbarConfig: { default: () => ({}) },
    editorConfig: { default: () => ({}) },
    mode: { default: "default" },
    height: { default: 300 },
    imgUploadUrl: {},
    videoUploadUrl: {},
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(e, { emit: n }) {
    const t = e, l = It(), r = $({
      get() {
        return t.modelValue;
      },
      set(s) {
        n("update:modelValue", s), n("on-change", s);
      }
    }), a = $(
      () => Object.assign(
        {
          placeholder: t.placeholder || I("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        t.toolbarConfig
      )
    ), o = $(
      () => Object.assign(
        {
          readOnly: t.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(s, d) {
                let c = new FormData();
                c.append("files", s);
                const f = s.name, v = t.imgUploadUrl ?? "/node-serve/file";
                $e.post(v, c, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((m) => {
                  if (m && m.data)
                    if (Array.isArray(m.data))
                      for (let p of m.data) {
                        const y = v + "/" + p.id + "/download";
                        d(y, f, y);
                      }
                    else {
                      const p = v + "/" + m.data.id + "/download";
                      d(p, f, p);
                    }
                }).catch(() => {
                  oe(I("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(s, d) {
                let c = new FormData();
                c.append("files", s);
                const f = t.videoUploadUrl ?? "/node-serve/file";
                $e.post(f, c, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((v) => {
                  if (v && v.data)
                    if (Array.isArray(v.data))
                      for (let m of v.data) {
                        const p = f + "/" + m.id + "/download";
                        d(p);
                      }
                    else {
                      const m = f + "/" + v.data.id + "/download";
                      d(m);
                    }
                }).catch(() => {
                  oe(I("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        t.editorConfig
      )
    ), i = $(() => ({
      height: typeof t.height == "string" ? t.height : t.height + "px"
    }));
    function u(s) {
      l.value = s;
    }
    return He(
      () => t.disabled,
      (s) => {
        s ? l.value.disable() : l.value.enable();
      }
    ), Gl(() => {
      l.value && l.value.destroy();
    }), (s, d) => (O(), B("div", Yc, [
      te(V(g(na), {
        class: "editor-pro-toolbar",
        editor: g(l),
        defaultConfig: g(a),
        mode: s.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ae, !s.disabled]
      ]),
      V(g(la), {
        class: "editor-pro-editor",
        modelValue: g(r),
        "onUpdate:modelValue": d[0] || (d[0] = (c) => ge(r) ? r.value = c : null),
        defaultConfig: g(o),
        mode: s.mode,
        onOnCreated: u,
        style: K(g(i))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Pc,
  AsyncCascader: Mc,
  BtTablePage: _c,
  EditorPro: Zc,
  FullPop: ga,
  HeaderBt: Kn,
  Hello: ha,
  IconTxtBtn: va,
  InputMap: Oc,
  MonthRange: Kc,
  Page404: Aa,
  SelectInput: Ac,
  ShowHidePanel: ac,
  ShowHidePanelB: oc,
  SideMenu: Qu,
  TableIconBtn: tc,
  TableSearch: sc,
  TableSetting: dc,
  UploadGroup: Jc
}, Symbol.toStringTag, { value: "Module" }));
function Vl(e) {
  const n = (...a) => we.apply(this, a), t = n("r.closePreview"), l = n("r.fullImg");
  let r = "previewImg" + Math.floor(Math.random() * 1e7);
  Te.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (a) => G(
      "div",
      {
        class: "previewModal",
        id: r
      },
      [
        G(
          "div",
          {
            class: "previewModalInner"
          },
          [
            G("img", {
              src: e,
              alt: l
            }),
            G(Yl, {
              type: "md-close",
              size: 20,
              title: t,
              class: "previewModalDelete",
              onClick() {
                Te.remove();
              }
            })
          ]
        )
      ]
    )
  }), pe(() => {
    var i, u, s, d, c, f;
    const a = (d = (s = (u = (i = document.getElementById(r)) == null ? void 0 : i.parentElement) == null ? void 0 : u.parentElement) == null ? void 0 : s.parentElement) == null ? void 0 : d.parentElement, o = (f = (c = document.getElementById(r)) == null ? void 0 : c.parentElement) == null ? void 0 : f.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), o && (o.style.display = "none");
  }, 10);
}
let Ke = !1;
function jl({
  height: e,
  width: n = 416,
  title: t,
  content: l,
  onOk: r,
  onCancel: a,
  okText: o,
  cancelText: i,
  noWarnIcon: u,
  footerAlign: s,
  cancelBt: d = !0
}) {
  const c = (...p) => we.apply(this, p);
  let v = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", m = M(l) === "String";
  Te.warning({
    width: n,
    footerHide: !0,
    render: () => G(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: v
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
                G("span", t || c("r.info.title")),
                G(
                  _t,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      Ke || Te.remove();
                    }
                  },
                  () => G("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            G(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: m ? "center" : "left"
                }
              },
              [
                G("i", {
                  class: m && !u ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                G("div", { class: "msgBoxConO" }, l || c("r.info.text"))
              ]
            ),
            G(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: s || "center"
                }
              },
              [
                G(
                  _t,
                  {
                    class: "okBtN",
                    onClick(p) {
                      var y;
                      if (r && typeof r == "function") {
                        const b = r();
                        if (b && M(b) === "Promise") {
                          Ke = !0;
                          const x = p && (p.currentTarget || p.target);
                          x && (x.classList.add("ivu-btn-loading"), x.nextSibling.setAttribute("disabled", "disabled"), ((y = x.parentElement) == null ? void 0 : y.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(b).then(() => {
                            Ke = !1, Te.remove();
                          }).catch(() => {
                            Ke = !1, Te.remove();
                          });
                        } else
                          Te.remove();
                      }
                    }
                  },
                  () => [
                    G("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    G("span", o || c("r.confirm"))
                  ]
                ),
                G(
                  _t,
                  {
                    class: ["cancelBtN", !d && "hide"],
                    onClick() {
                      Ke || (Te.remove(), M(a) === "Function" && a && a());
                    }
                  },
                  () => i || c("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function Ul(e, n, t, l) {
  const r = (...a) => we.apply(this, a);
  oe.call(this, {
    title: e || r("r.info.title"),
    text: n || r("r.info.text"),
    icon: t || "warning",
    onOk: l,
    buttons: [r("r.cancel")]
  });
}
(() => {
  if (window.wangeditorMenuInit)
    return;
  class e {
    constructor() {
      Je(this, "title");
      Je(this, "iconSvg");
      Je(this, "tag");
      Je(this, "alwaysEnable");
      this.title = we("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
    }
    getValue() {
      return "";
    }
    isActive() {
      return !1;
    }
    isDisabled() {
      return !1;
    }
    exec(l) {
      const r = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, o = localStorage.getItem("editorPreviewH") || 500;
      const i = l.getHtml();
      if (r) {
        let u = r.children[0].children[1].children[0], s = r.children[0].children[1];
        u.innerHTML = i, u.style.width = a + "px", s.style.height = o + "px", r.style.display = "block";
      } else {
        const u = document.body, s = document.createElement("div");
        s.setAttribute("id", "editor-preview"), s.setAttribute("class", "editor-preview-mask"), s.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${o}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let d = s.children[0].children[1], c = s.children[0].children[1].children[0], f = s.children[0].children[0].children[0].children[1];
        const v = 40, m = 70, p = (w) => {
          if (w && w.type === "keyup") {
            let A = !1;
            if (w.key && (A = w.key !== "Enter"), A)
              return;
          }
          let _ = w.target.value;
          if (_ = Number(_), c.style && c.style.width === _ + "px")
            return;
          const L = u.clientWidth;
          _ < 250 ? (_ = 250, w.target.value = 250) : _ > L - v && (_ = L - v, w.target.value = L - v), c.style.width = _ + "px", localStorage.setItem("editorPreviewW", _);
        };
        f.addEventListener("blur", p), f.addEventListener("keyup", p);
        let y = s.children[0].children[0].children[0].children[3];
        const b = (w) => {
          if (w && w.type === "keyup") {
            let A = !1;
            if (w.key && (A = w.key !== "Enter"), A)
              return;
          }
          let _ = w.target.value;
          if (_ = Number(_), d.style && d.style.height === _ + "px")
            return;
          const L = u.clientHeight;
          _ < 300 ? (_ = 300, w.target.value = 300) : _ > L - m && (_ = L - m, w.target.value = L - m), d.style.height = _ + "px", localStorage.setItem("editorPreviewH", _);
        };
        y.addEventListener("blur", b), y.addEventListener("keyup", b), s.children[0].children[0].children[1].addEventListener("click", (w) => {
          s.style.display = "none";
        }), c.innerHTML = i, c.style.width = a + "px", d.style.height = o + "px", u.append(s);
      }
    }
  }
  const n = {
    key: "previewX",
    factory() {
      return new e();
    }
  };
  aa.registerMenu(n), window.wangeditorMenuInit = !0;
})();
const Dn = {
  $fetch: $e,
  fullScreenImgByDom: Me,
  fullScreenImgPreview: Vl,
  $swal: oe,
  $swalConfirm: Ul,
  messageBox: jl,
  setInterval: Bl,
  setTimeout: pe,
  ...El
}, Qc = function(e, n = {}) {
  $e.init(n.useStore || n.store, e), n.locale && dt.use(n.locale), n.i18n && dt.i18n(n.i18n), n.router && ic(n.router), n.amap && Cc(n.amap), n.notRegistryGlobal || (Object.keys(zn).forEach((t) => {
    e.component(t) || e.component(t, zn[t]);
  }), Object.keys(Dn).forEach((t) => {
    e.config.globalProperties[t] = Dn[t];
  })), e.directive("has") || e.directive("has", (t, l) => {
    l.value && !Ol(l.value) && (t.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (t, l) => {
    let r;
    l.arg ? r = t.querySelector("." + l.arg) : r = t.querySelector(".ivu-select-dropdown") || t, r.addEventListener("scroll", function() {
      r.scrollTop > 0 && r.scrollHeight - r.scrollTop <= r.clientHeight && l.value();
    });
  });
}, ed = dt.use, td = dt.i18n, pd = {
  locale: ed,
  i18n: td,
  install: Qc,
  ...El,
  ...Vu,
  $fetch: $e,
  fullScreenImgByDom: Me,
  fullScreenImgPreview: Vl,
  $swal: oe,
  $swalConfirm: Ul,
  messageBox: jl,
  setInterval: Bl,
  setTimeout: pe
};
export {
  $e as $fetch,
  oe as $swal,
  Ul as $swalConfirm,
  Pc as AlCascaderMC,
  Mc as AsyncCascader,
  _c as BtTablePage,
  Zc as EditorPro,
  ga as FullPop,
  Kn as HeaderBt,
  ha as Hello,
  va as IconTxtBtn,
  Oc as InputMap,
  Kc as MonthRange,
  Aa as Page404,
  Ac as SelectInput,
  ac as ShowHidePanel,
  oc as ShowHidePanelB,
  Qu as SideMenu,
  tc as TableIconBtn,
  sc as TableSearch,
  dc as TableSetting,
  Jc as UploadGroup,
  jt as clearObj,
  qu as dataFilterOrToUrl,
  Nu as decimalDigitsLimit,
  pd as default,
  Il as downloadFileByFormSubmit,
  Al as downloadFileReaderFile,
  Lu as emptyInput,
  Tl as fakeALinkClick,
  zu as fileExport,
  Fu as findCollection,
  mt as findPath,
  ju as formDataHeadConfig,
  Me as fullScreenImgByDom,
  Vl as fullScreenImgPreview,
  Du as getColumnsKeys,
  st as getFileSrc,
  Qt as getFileTypeByName,
  kt as getFileTypeIconByName,
  Sl as getStringWidth,
  Ol as hasPermission,
  Bu as htmlDecode,
  Eu as htmlEncode,
  Ju as htmlPrint,
  Gu as isEmptyValue,
  ut as isImgByFile,
  Ml as isNaN,
  Hu as isNumberValue,
  Ie as isValidValue,
  jl as messageBox,
  M as myTypeof,
  Ru as oneOf,
  Ut as removeEmptyValue,
  Bl as setInterval,
  pe as setTimeout,
  $l as setValByOption,
  Pl as siblingElems,
  ku as stopBubbling,
  Wu as stringLength,
  Uu as toFormData,
  _l as toHump,
  xl as toLine,
  Cl as tooltipManual,
  Vt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
