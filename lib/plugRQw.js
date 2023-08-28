import { getCurrentInstance as Rt, defineComponent as q, resolveComponent as D, openBlock as C, createElementBlock as L, normalizeClass as ue, normalizeStyle as Z, createBlock as he, createCommentVNode as me, renderSlot as Te, ref as H, computed as M, withDirectives as ne, unref as p, createElementVNode as P, toDisplayString as Q, createVNode as j, withCtx as ce, createTextVNode as Le, vShow as le, resolveDirective as Gn, h as G, Fragment as se, renderList as Me, onBeforeMount as Fa, watch as et, nextTick as Wn, isRef as be, onMounted as tt, withModifiers as Ra, mergeProps as qn, onUnmounted as Na, shallowRef as on } from "vue";
import za from "deepmerge";
import at from "sweetalert";
import { Tooltip as Da, TableColumnConfig as Ha, Radio as Ga, Input as Wa, Modal as Ae, Icon as qa, Button as wt } from "view-ui-plus";
import { useRouter as Ja, useRoute as Xa } from "vue-router";
import { useI18n as Ka } from "vue-i18n";
import xt from "axios";
import Ya from "ar-cascader";
const Jn = {
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
}, Za = /(%|){([0-9a-zA-Z_]+)}/g;
function Qa() {
  function e(t, a) {
    return Object.prototype.hasOwnProperty.call(t, a);
  }
  function n(t, ...a) {
    let l;
    return a.length === 1 && typeof a[0] == "object" && (l = a[0]), (!l || !l.hasOwnProperty) && (l = {}), t === void 0 ? "" : t.replace(Za, (r, i, o, s) => {
      let u;
      return t[s - 1] === "{" && t[s + r.length] === "}" ? o : (u = e(l, o) ? l[o] : null, u ?? "");
    });
  }
  return n;
}
const er = Qa();
let ut = Jn;
const tr = {
  zh: Jn
};
let sn, un = {}, Y, nr = function(e, n) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, n);
  if (Y && Y.global)
    return Y.global.t(e, n);
  if (Y && Y.locale) {
    if (!un[Y.locale] || sn != Y.locale) {
      un[Y.locale] = !0;
      let t = Y.getLocaleMessage(Y.locale) || {}, a = za(tr[Y.locale], t, { clone: !0 });
      ut = a, Y.setLocaleMessage(Y.locale, a), sn = Y.locale;
    }
    return Y.hlang(e, n);
  }
};
const $e = function(e, n) {
  let t = nr.apply(this, [e, n]);
  if (t != null)
    return t;
  const a = e.split(".");
  let l = ut;
  for (let r = 0, i = a.length; r < i; r++) {
    const o = a[r];
    if (t = l[o], r === i - 1)
      return er(t, n);
    if (!t)
      return "";
    l = t;
  }
  return "";
}, ar = function(e) {
  ut = e || ut;
}, rr = function(e) {
  Y = e;
}, ct = {
  use: ar,
  t: $e,
  i18n: rr
};
function x(e, n) {
  var a;
  const t = (a = Rt()) == null ? void 0 : a.appContext.config.globalProperties;
  return $e.apply(t, [e, n]);
}
const Xn = /* @__PURE__ */ q({
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
    function a() {
      t.disabled || n("click");
    }
    return (l, r) => {
      const i = D("Icon");
      return C(), L("div", {
        class: ue({ headerBtCTM: !0, withIconCTM: t.icon || t.withIcon, disabled: t.disabled }),
        style: Z({ color: t.color, borderLeftColor: t.borderColor }),
        onClick: a
      }, [
        t.icon ? (C(), he(i, {
          key: 0,
          size: t.iconSize,
          type: t.icon
        }, null, 8, ["size", "type"])) : me("", !0),
        Te(l.$slots, "default")
      ], 6);
    };
  }
}), lr = { class: "headerTxtAM" }, or = { class: "contentAM" }, ir = /* @__PURE__ */ q({
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
    const a = e;
    let l = H(!1);
    const r = M(() => typeof a.headerFontSize == "number" ? a.headerFontSize + "px" : a.headerFontSize), i = M(() => ({ zIndex: a.zIndex }));
    function o() {
      l.value = !0, t("on-open");
    }
    function s(u) {
      l.value = !1, t("on-close", u === !0);
    }
    return n({
      open: o,
      close: s
    }), (u, f) => ne((C(), L("div", {
      class: "fullScreenPopBoxAM",
      style: Z(p(i))
    }, [
      P("div", {
        class: "headerAM",
        style: Z({ color: a.headerColor, backgroundColor: a.headerBg, fontSize: p(r) })
      }, [
        P("span", lr, Q(u.title || p(x)("r.title")), 1),
        j(Xn, {
          icon: "md-return-left",
          onClick: s
        }, {
          default: ce(() => [
            Le(Q(p(x)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", or, [
        Te(u.$slots, "default")
      ])
    ], 4)), [
      [le, p(l)]
    ]);
  }
}), sr = { class: "msg" }, ur = /* @__PURE__ */ q({
  __name: "Hello",
  setup(e) {
    let n = H("Greetings from Ricky.");
    return (t, a) => (C(), L("span", sr, Q(p(n)), 1));
  }
}), cr = /* @__PURE__ */ q({
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
    const t = e, a = M(() => Math.floor(t.size / 17 * 12) + "px");
    function l(r) {
      t.disabled || n("click", r);
    }
    return (r, i) => {
      const o = D("Icon"), s = Gn("has");
      return ne((C(), L("div", {
        class: ue(["tabTopBtnsT", { disabled: t.disabled }]),
        onClick: l,
        style: Z({ "font-size": p(a) })
      }, [
        j(o, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"]),
        Le(" " + Q(t.name || p(x)("r.button")), 1)
      ], 6)), [
        [s, r.has]
      ]);
    };
  }
}), fr = { class: "c404K" }, dr = /* @__PURE__ */ P("div", { class: "t404" }, "404", -1), pr = { class: "ct404" }, gr = { class: "p404" }, mr = /* @__PURE__ */ q({
  __name: "Page404",
  setup(e) {
    const t = Rt().appContext.config.globalProperties.$router;
    function a() {
      t.go(-1);
    }
    return (l, r) => {
      const i = D("Button");
      return C(), L("div", fr, [
        dr,
        P("div", pr, "UH OH! " + Q(p(x)("r.pageNotFound")), 1),
        P("div", gr, Q(p(x)("r.notFoundMsg")), 1),
        j(i, {
          class: "bt404",
          onClick: a
        }, {
          default: ce(() => [
            Le(Q(p(x)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var hr = typeof global == "object" && global && global.Object === Object && global;
const Kn = hr;
var vr = typeof self == "object" && self && self.Object === Object && self, br = Kn || vr || Function("return this")();
const fe = br;
var yr = fe.Symbol;
const Ie = yr;
var Yn = Object.prototype, wr = Yn.hasOwnProperty, _r = Yn.toString, qe = Ie ? Ie.toStringTag : void 0;
function Ar(e) {
  var n = wr.call(e, qe), t = e[qe];
  try {
    e[qe] = void 0;
    var a = !0;
  } catch {
  }
  var l = _r.call(e);
  return a && (n ? e[qe] = t : delete e[qe]), l;
}
var Tr = Object.prototype, Sr = Tr.toString;
function xr(e) {
  return Sr.call(e);
}
var Ir = "[object Null]", $r = "[object Undefined]", cn = Ie ? Ie.toStringTag : void 0;
function ge(e) {
  return e == null ? e === void 0 ? $r : Ir : cn && cn in Object(e) ? Ar(e) : xr(e);
}
function ie(e) {
  return e != null && typeof e == "object";
}
var Cr = "[object Symbol]";
function Or(e) {
  return typeof e == "symbol" || ie(e) && ge(e) == Cr;
}
var Mr = Array.isArray;
const Pe = Mr;
var Pr = /\s/;
function Br(e) {
  for (var n = e.length; n-- && Pr.test(e.charAt(n)); )
    ;
  return n;
}
var Lr = /^\s+/;
function Er(e) {
  return e && e.slice(0, Br(e) + 1).replace(Lr, "");
}
function ye(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var fn = 0 / 0, kr = /^[-+]0x[0-9a-f]+$/i, jr = /^0b[01]+$/i, Vr = /^0o[0-7]+$/i, Ur = parseInt;
function It(e) {
  if (typeof e == "number")
    return e;
  if (Or(e))
    return fn;
  if (ye(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ye(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Er(e);
  var t = jr.test(e);
  return t || Vr.test(e) ? Ur(e.slice(2), t ? 2 : 8) : kr.test(e) ? fn : +e;
}
var dn = 1 / 0, Fr = 17976931348623157e292;
function Rr(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = It(e), e === dn || e === -dn) {
    var n = e < 0 ? -1 : 1;
    return n * Fr;
  }
  return e === e ? e : 0;
}
function Nr(e) {
  var n = Rr(e), t = n % 1;
  return n === n ? t ? n - t : n : 0;
}
var zr = "[object AsyncFunction]", Dr = "[object Function]", Hr = "[object GeneratorFunction]", Gr = "[object Proxy]";
function Nt(e) {
  if (!ye(e))
    return !1;
  var n = ge(e);
  return n == Dr || n == Hr || n == zr || n == Gr;
}
var Wr = fe["__core-js_shared__"];
const _t = Wr;
var pn = function() {
  var e = /[^.]+$/.exec(_t && _t.keys && _t.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qr(e) {
  return !!pn && pn in e;
}
var Jr = Function.prototype, Xr = Jr.toString;
function Ee(e) {
  if (e != null) {
    try {
      return Xr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Kr = /[\\^$.*+?()[\]{}|]/g, Yr = /^\[object .+?Constructor\]$/, Zr = Function.prototype, Qr = Object.prototype, el = Zr.toString, tl = Qr.hasOwnProperty, nl = RegExp(
  "^" + el.call(tl).replace(Kr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function al(e) {
  if (!ye(e) || qr(e))
    return !1;
  var n = Nt(e) ? nl : Yr;
  return n.test(Ee(e));
}
function rl(e, n) {
  return e == null ? void 0 : e[n];
}
function ke(e, n) {
  var t = rl(e, n);
  return al(t) ? t : void 0;
}
var ll = ke(fe, "WeakMap");
const $t = ll;
var gn = Object.create, ol = function() {
  function e() {
  }
  return function(n) {
    if (!ye(n))
      return {};
    if (gn)
      return gn(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const il = ol;
function sl(e, n) {
  var t = -1, a = e.length;
  for (n || (n = Array(a)); ++t < a; )
    n[t] = e[t];
  return n;
}
var ul = function() {
  try {
    var e = ke(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const mn = ul;
function cl(e, n) {
  for (var t = -1, a = e == null ? 0 : e.length; ++t < a && n(e[t], t, e) !== !1; )
    ;
  return e;
}
function fl(e, n, t, a) {
  for (var l = e.length, r = t + (a ? 1 : -1); a ? r-- : ++r < l; )
    if (n(e[r], r, e))
      return r;
  return -1;
}
function dl(e) {
  return e !== e;
}
function pl(e, n, t) {
  for (var a = t - 1, l = e.length; ++a < l; )
    if (e[a] === n)
      return a;
  return -1;
}
function gl(e, n, t) {
  return n === n ? pl(e, n, t) : fl(e, dl, t);
}
var ml = 9007199254740991, hl = /^(?:0|[1-9]\d*)$/;
function vl(e, n) {
  var t = typeof e;
  return n = n ?? ml, !!n && (t == "number" || t != "symbol" && hl.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Zn(e, n, t) {
  n == "__proto__" && mn ? mn(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function zt(e, n) {
  return e === n || e !== e && n !== n;
}
var bl = Object.prototype, yl = bl.hasOwnProperty;
function Qn(e, n, t) {
  var a = e[n];
  (!(yl.call(e, n) && zt(a, t)) || t === void 0 && !(n in e)) && Zn(e, n, t);
}
function mt(e, n, t, a) {
  var l = !t;
  t || (t = {});
  for (var r = -1, i = n.length; ++r < i; ) {
    var o = n[r], s = a ? a(t[o], e[o], o, t, e) : void 0;
    s === void 0 && (s = e[o]), l ? Zn(t, o, s) : Qn(t, o, s);
  }
  return t;
}
var wl = 9007199254740991;
function ea(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wl;
}
function Dt(e) {
  return e != null && ea(e.length) && !Nt(e);
}
var _l = Object.prototype;
function ht(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || _l;
  return e === t;
}
function Al(e, n) {
  for (var t = -1, a = Array(e); ++t < e; )
    a[t] = n(t);
  return a;
}
var Tl = "[object Arguments]";
function hn(e) {
  return ie(e) && ge(e) == Tl;
}
var ta = Object.prototype, Sl = ta.hasOwnProperty, xl = ta.propertyIsEnumerable, Il = hn(function() {
  return arguments;
}()) ? hn : function(e) {
  return ie(e) && Sl.call(e, "callee") && !xl.call(e, "callee");
};
const na = Il;
function $l() {
  return !1;
}
var aa = typeof exports == "object" && exports && !exports.nodeType && exports, vn = aa && typeof module == "object" && module && !module.nodeType && module, Cl = vn && vn.exports === aa, bn = Cl ? fe.Buffer : void 0, Ol = bn ? bn.isBuffer : void 0, Ml = Ol || $l;
const Ke = Ml;
var Pl = "[object Arguments]", Bl = "[object Array]", Ll = "[object Boolean]", El = "[object Date]", kl = "[object Error]", jl = "[object Function]", Vl = "[object Map]", Ul = "[object Number]", Fl = "[object Object]", Rl = "[object RegExp]", Nl = "[object Set]", zl = "[object String]", Dl = "[object WeakMap]", Hl = "[object ArrayBuffer]", Gl = "[object DataView]", Wl = "[object Float32Array]", ql = "[object Float64Array]", Jl = "[object Int8Array]", Xl = "[object Int16Array]", Kl = "[object Int32Array]", Yl = "[object Uint8Array]", Zl = "[object Uint8ClampedArray]", Ql = "[object Uint16Array]", eo = "[object Uint32Array]", N = {};
N[Wl] = N[ql] = N[Jl] = N[Xl] = N[Kl] = N[Yl] = N[Zl] = N[Ql] = N[eo] = !0;
N[Pl] = N[Bl] = N[Hl] = N[Ll] = N[Gl] = N[El] = N[kl] = N[jl] = N[Vl] = N[Ul] = N[Fl] = N[Rl] = N[Nl] = N[zl] = N[Dl] = !1;
function to(e) {
  return ie(e) && ea(e.length) && !!N[ge(e)];
}
function Ht(e) {
  return function(n) {
    return e(n);
  };
}
var ra = typeof exports == "object" && exports && !exports.nodeType && exports, Xe = ra && typeof module == "object" && module && !module.nodeType && module, no = Xe && Xe.exports === ra, At = no && Kn.process, ao = function() {
  try {
    var e = Xe && Xe.require && Xe.require("util").types;
    return e || At && At.binding && At.binding("util");
  } catch {
  }
}();
const Ne = ao;
var yn = Ne && Ne.isTypedArray, ro = yn ? Ht(yn) : to;
const Gt = ro;
var lo = Object.prototype, oo = lo.hasOwnProperty;
function la(e, n) {
  var t = Pe(e), a = !t && na(e), l = !t && !a && Ke(e), r = !t && !a && !l && Gt(e), i = t || a || l || r, o = i ? Al(e.length, String) : [], s = o.length;
  for (var u in e)
    (n || oo.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    l && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    vl(u, s))) && o.push(u);
  return o;
}
function oa(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var io = oa(Object.keys, Object);
const so = io;
var uo = Object.prototype, co = uo.hasOwnProperty;
function ia(e) {
  if (!ht(e))
    return so(e);
  var n = [];
  for (var t in Object(e))
    co.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function Wt(e) {
  return Dt(e) ? la(e) : ia(e);
}
function fo(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var po = Object.prototype, go = po.hasOwnProperty;
function mo(e) {
  if (!ye(e))
    return fo(e);
  var n = ht(e), t = [];
  for (var a in e)
    a == "constructor" && (n || !go.call(e, a)) || t.push(a);
  return t;
}
function qt(e) {
  return Dt(e) ? la(e, !0) : mo(e);
}
var ho = ke(Object, "create");
const Ye = ho;
function vo() {
  this.__data__ = Ye ? Ye(null) : {}, this.size = 0;
}
function bo(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var yo = "__lodash_hash_undefined__", wo = Object.prototype, _o = wo.hasOwnProperty;
function Ao(e) {
  var n = this.__data__;
  if (Ye) {
    var t = n[e];
    return t === yo ? void 0 : t;
  }
  return _o.call(n, e) ? n[e] : void 0;
}
var To = Object.prototype, So = To.hasOwnProperty;
function xo(e) {
  var n = this.__data__;
  return Ye ? n[e] !== void 0 : So.call(n, e);
}
var Io = "__lodash_hash_undefined__";
function $o(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ye && n === void 0 ? Io : n, this;
}
function Be(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
Be.prototype.clear = vo;
Be.prototype.delete = bo;
Be.prototype.get = Ao;
Be.prototype.has = xo;
Be.prototype.set = $o;
function Co() {
  this.__data__ = [], this.size = 0;
}
function vt(e, n) {
  for (var t = e.length; t--; )
    if (zt(e[t][0], n))
      return t;
  return -1;
}
var Oo = Array.prototype, Mo = Oo.splice;
function Po(e) {
  var n = this.__data__, t = vt(n, e);
  if (t < 0)
    return !1;
  var a = n.length - 1;
  return t == a ? n.pop() : Mo.call(n, t, 1), --this.size, !0;
}
function Bo(e) {
  var n = this.__data__, t = vt(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Lo(e) {
  return vt(this.__data__, e) > -1;
}
function Eo(e, n) {
  var t = this.__data__, a = vt(t, e);
  return a < 0 ? (++this.size, t.push([e, n])) : t[a][1] = n, this;
}
function we(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
we.prototype.clear = Co;
we.prototype.delete = Po;
we.prototype.get = Bo;
we.prototype.has = Lo;
we.prototype.set = Eo;
var ko = ke(fe, "Map");
const Ze = ko;
function jo() {
  this.size = 0, this.__data__ = {
    hash: new Be(),
    map: new (Ze || we)(),
    string: new Be()
  };
}
function Vo(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function bt(e, n) {
  var t = e.__data__;
  return Vo(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Uo(e) {
  var n = bt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Fo(e) {
  return bt(this, e).get(e);
}
function Ro(e) {
  return bt(this, e).has(e);
}
function No(e, n) {
  var t = bt(this, e), a = t.size;
  return t.set(e, n), this.size += t.size == a ? 0 : 1, this;
}
function je(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var a = e[n];
    this.set(a[0], a[1]);
  }
}
je.prototype.clear = jo;
je.prototype.delete = Uo;
je.prototype.get = Fo;
je.prototype.has = Ro;
je.prototype.set = No;
function sa(e, n) {
  for (var t = -1, a = n.length, l = e.length; ++t < a; )
    e[l + t] = n[t];
  return e;
}
var zo = oa(Object.getPrototypeOf, Object);
const Jt = zo;
var Do = "[object Object]", Ho = Function.prototype, Go = Object.prototype, ua = Ho.toString, Wo = Go.hasOwnProperty, qo = ua.call(Object);
function Fe(e) {
  if (!ie(e) || ge(e) != Do)
    return !1;
  var n = Jt(e);
  if (n === null)
    return !0;
  var t = Wo.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && ua.call(t) == qo;
}
function Jo() {
  this.__data__ = new we(), this.size = 0;
}
function Xo(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function Ko(e) {
  return this.__data__.get(e);
}
function Yo(e) {
  return this.__data__.has(e);
}
var Zo = 200;
function Qo(e, n) {
  var t = this.__data__;
  if (t instanceof we) {
    var a = t.__data__;
    if (!Ze || a.length < Zo - 1)
      return a.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new je(a);
  }
  return t.set(e, n), this.size = t.size, this;
}
function ve(e) {
  var n = this.__data__ = new we(e);
  this.size = n.size;
}
ve.prototype.clear = Jo;
ve.prototype.delete = Xo;
ve.prototype.get = Ko;
ve.prototype.has = Yo;
ve.prototype.set = Qo;
function ei(e, n) {
  return e && mt(n, Wt(n), e);
}
function ti(e, n) {
  return e && mt(n, qt(n), e);
}
var ca = typeof exports == "object" && exports && !exports.nodeType && exports, wn = ca && typeof module == "object" && module && !module.nodeType && module, ni = wn && wn.exports === ca, _n = ni ? fe.Buffer : void 0, An = _n ? _n.allocUnsafe : void 0;
function ai(e, n) {
  if (n)
    return e.slice();
  var t = e.length, a = An ? An(t) : new e.constructor(t);
  return e.copy(a), a;
}
function ri(e, n) {
  for (var t = -1, a = e == null ? 0 : e.length, l = 0, r = []; ++t < a; ) {
    var i = e[t];
    n(i, t, e) && (r[l++] = i);
  }
  return r;
}
function fa() {
  return [];
}
var li = Object.prototype, oi = li.propertyIsEnumerable, Tn = Object.getOwnPropertySymbols, ii = Tn ? function(e) {
  return e == null ? [] : (e = Object(e), ri(Tn(e), function(n) {
    return oi.call(e, n);
  }));
} : fa;
const Xt = ii;
function si(e, n) {
  return mt(e, Xt(e), n);
}
var ui = Object.getOwnPropertySymbols, ci = ui ? function(e) {
  for (var n = []; e; )
    sa(n, Xt(e)), e = Jt(e);
  return n;
} : fa;
const da = ci;
function fi(e, n) {
  return mt(e, da(e), n);
}
function pa(e, n, t) {
  var a = n(e);
  return Pe(e) ? a : sa(a, t(e));
}
function Ct(e) {
  return pa(e, Wt, Xt);
}
function di(e) {
  return pa(e, qt, da);
}
var pi = ke(fe, "DataView");
const Ot = pi;
var gi = ke(fe, "Promise");
const Mt = gi;
var mi = ke(fe, "Set");
const Pt = mi;
var Sn = "[object Map]", hi = "[object Object]", xn = "[object Promise]", In = "[object Set]", $n = "[object WeakMap]", Cn = "[object DataView]", vi = Ee(Ot), bi = Ee(Ze), yi = Ee(Mt), wi = Ee(Pt), _i = Ee($t), Ce = ge;
(Ot && Ce(new Ot(new ArrayBuffer(1))) != Cn || Ze && Ce(new Ze()) != Sn || Mt && Ce(Mt.resolve()) != xn || Pt && Ce(new Pt()) != In || $t && Ce(new $t()) != $n) && (Ce = function(e) {
  var n = ge(e), t = n == hi ? e.constructor : void 0, a = t ? Ee(t) : "";
  if (a)
    switch (a) {
      case vi:
        return Cn;
      case bi:
        return Sn;
      case yi:
        return xn;
      case wi:
        return In;
      case _i:
        return $n;
    }
  return n;
});
const ze = Ce;
var Ai = Object.prototype, Ti = Ai.hasOwnProperty;
function Si(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && Ti.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var xi = fe.Uint8Array;
const ft = xi;
function Kt(e) {
  var n = new e.constructor(e.byteLength);
  return new ft(n).set(new ft(e)), n;
}
function Ii(e, n) {
  var t = n ? Kt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var $i = /\w*$/;
function Ci(e) {
  var n = new e.constructor(e.source, $i.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var On = Ie ? Ie.prototype : void 0, Mn = On ? On.valueOf : void 0;
function Oi(e) {
  return Mn ? Object(Mn.call(e)) : {};
}
function Mi(e, n) {
  var t = n ? Kt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Pi = "[object Boolean]", Bi = "[object Date]", Li = "[object Map]", Ei = "[object Number]", ki = "[object RegExp]", ji = "[object Set]", Vi = "[object String]", Ui = "[object Symbol]", Fi = "[object ArrayBuffer]", Ri = "[object DataView]", Ni = "[object Float32Array]", zi = "[object Float64Array]", Di = "[object Int8Array]", Hi = "[object Int16Array]", Gi = "[object Int32Array]", Wi = "[object Uint8Array]", qi = "[object Uint8ClampedArray]", Ji = "[object Uint16Array]", Xi = "[object Uint32Array]";
function Ki(e, n, t) {
  var a = e.constructor;
  switch (n) {
    case Fi:
      return Kt(e);
    case Pi:
    case Bi:
      return new a(+e);
    case Ri:
      return Ii(e, t);
    case Ni:
    case zi:
    case Di:
    case Hi:
    case Gi:
    case Wi:
    case qi:
    case Ji:
    case Xi:
      return Mi(e, t);
    case Li:
      return new a();
    case Ei:
    case Vi:
      return new a(e);
    case ki:
      return Ci(e);
    case ji:
      return new a();
    case Ui:
      return Oi(e);
  }
}
function Yi(e) {
  return typeof e.constructor == "function" && !ht(e) ? il(Jt(e)) : {};
}
var Zi = "[object Map]";
function Qi(e) {
  return ie(e) && ze(e) == Zi;
}
var Pn = Ne && Ne.isMap, es = Pn ? Ht(Pn) : Qi;
const ts = es;
var ns = "[object Set]";
function as(e) {
  return ie(e) && ze(e) == ns;
}
var Bn = Ne && Ne.isSet, rs = Bn ? Ht(Bn) : as;
const ls = rs;
var os = 1, is = 2, ss = 4, ga = "[object Arguments]", us = "[object Array]", cs = "[object Boolean]", fs = "[object Date]", ds = "[object Error]", ma = "[object Function]", ps = "[object GeneratorFunction]", gs = "[object Map]", ms = "[object Number]", ha = "[object Object]", hs = "[object RegExp]", vs = "[object Set]", bs = "[object String]", ys = "[object Symbol]", ws = "[object WeakMap]", _s = "[object ArrayBuffer]", As = "[object DataView]", Ts = "[object Float32Array]", Ss = "[object Float64Array]", xs = "[object Int8Array]", Is = "[object Int16Array]", $s = "[object Int32Array]", Cs = "[object Uint8Array]", Os = "[object Uint8ClampedArray]", Ms = "[object Uint16Array]", Ps = "[object Uint32Array]", F = {};
F[ga] = F[us] = F[_s] = F[As] = F[cs] = F[fs] = F[Ts] = F[Ss] = F[xs] = F[Is] = F[$s] = F[gs] = F[ms] = F[ha] = F[hs] = F[vs] = F[bs] = F[ys] = F[Cs] = F[Os] = F[Ms] = F[Ps] = !0;
F[ds] = F[ma] = F[ws] = !1;
function ot(e, n, t, a, l, r) {
  var i, o = n & os, s = n & is, u = n & ss;
  if (t && (i = l ? t(e, a, l, r) : t(e)), i !== void 0)
    return i;
  if (!ye(e))
    return e;
  var f = Pe(e);
  if (f) {
    if (i = Si(e), !o)
      return sl(e, i);
  } else {
    var c = ze(e), d = c == ma || c == ps;
    if (Ke(e))
      return ai(e, o);
    if (c == ha || c == ga || d && !l) {
      if (i = s || d ? {} : Yi(e), !o)
        return s ? fi(e, ti(i, e)) : si(e, ei(i, e));
    } else {
      if (!F[c])
        return l ? e : {};
      i = Ki(e, c, o);
    }
  }
  r || (r = new ve());
  var v = r.get(e);
  if (v)
    return v;
  r.set(e, i), ls(e) ? e.forEach(function(y) {
    i.add(ot(y, n, t, y, e, r));
  }) : ts(e) && e.forEach(function(y, b) {
    i.set(b, ot(y, n, t, b, e, r));
  });
  var h = u ? s ? di : Ct : s ? qt : Wt, g = f ? void 0 : h(e);
  return cl(g || e, function(y, b) {
    g && (b = y, y = e[b]), Qn(i, b, ot(y, n, t, b, e, r));
  }), i;
}
var Bs = 1, Ls = 4;
function te(e) {
  return ot(e, Bs | Ls);
}
var Es = "__lodash_hash_undefined__";
function ks(e) {
  return this.__data__.set(e, Es), this;
}
function js(e) {
  return this.__data__.has(e);
}
function dt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new je(); ++n < t; )
    this.add(e[n]);
}
dt.prototype.add = dt.prototype.push = ks;
dt.prototype.has = js;
function Vs(e, n) {
  for (var t = -1, a = e == null ? 0 : e.length; ++t < a; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function Us(e, n) {
  return e.has(n);
}
var Fs = 1, Rs = 2;
function va(e, n, t, a, l, r) {
  var i = t & Fs, o = e.length, s = n.length;
  if (o != s && !(i && s > o))
    return !1;
  var u = r.get(e), f = r.get(n);
  if (u && f)
    return u == n && f == e;
  var c = -1, d = !0, v = t & Rs ? new dt() : void 0;
  for (r.set(e, n), r.set(n, e); ++c < o; ) {
    var h = e[c], g = n[c];
    if (a)
      var y = i ? a(g, h, c, n, e, r) : a(h, g, c, e, n, r);
    if (y !== void 0) {
      if (y)
        continue;
      d = !1;
      break;
    }
    if (v) {
      if (!Vs(n, function(b, T) {
        if (!Us(v, T) && (h === b || l(h, b, t, a, r)))
          return v.push(T);
      })) {
        d = !1;
        break;
      }
    } else if (!(h === g || l(h, g, t, a, r))) {
      d = !1;
      break;
    }
  }
  return r.delete(e), r.delete(n), d;
}
function Ns(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(a, l) {
    t[++n] = [l, a];
  }), t;
}
function zs(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(a) {
    t[++n] = a;
  }), t;
}
var Ds = 1, Hs = 2, Gs = "[object Boolean]", Ws = "[object Date]", qs = "[object Error]", Js = "[object Map]", Xs = "[object Number]", Ks = "[object RegExp]", Ys = "[object Set]", Zs = "[object String]", Qs = "[object Symbol]", eu = "[object ArrayBuffer]", tu = "[object DataView]", Ln = Ie ? Ie.prototype : void 0, Tt = Ln ? Ln.valueOf : void 0;
function nu(e, n, t, a, l, r, i) {
  switch (t) {
    case tu:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case eu:
      return !(e.byteLength != n.byteLength || !r(new ft(e), new ft(n)));
    case Gs:
    case Ws:
    case Xs:
      return zt(+e, +n);
    case qs:
      return e.name == n.name && e.message == n.message;
    case Ks:
    case Zs:
      return e == n + "";
    case Js:
      var o = Ns;
    case Ys:
      var s = a & Ds;
      if (o || (o = zs), e.size != n.size && !s)
        return !1;
      var u = i.get(e);
      if (u)
        return u == n;
      a |= Hs, i.set(e, n);
      var f = va(o(e), o(n), a, l, r, i);
      return i.delete(e), f;
    case Qs:
      if (Tt)
        return Tt.call(e) == Tt.call(n);
  }
  return !1;
}
var au = 1, ru = Object.prototype, lu = ru.hasOwnProperty;
function ou(e, n, t, a, l, r) {
  var i = t & au, o = Ct(e), s = o.length, u = Ct(n), f = u.length;
  if (s != f && !i)
    return !1;
  for (var c = s; c--; ) {
    var d = o[c];
    if (!(i ? d in n : lu.call(n, d)))
      return !1;
  }
  var v = r.get(e), h = r.get(n);
  if (v && h)
    return v == n && h == e;
  var g = !0;
  r.set(e, n), r.set(n, e);
  for (var y = i; ++c < s; ) {
    d = o[c];
    var b = e[d], T = n[d];
    if (a)
      var I = i ? a(T, b, d, n, e, r) : a(b, T, d, e, n, r);
    if (!(I === void 0 ? b === T || l(b, T, t, a, r) : I)) {
      g = !1;
      break;
    }
    y || (y = d == "constructor");
  }
  if (g && !y) {
    var $ = e.constructor, R = n.constructor;
    $ != R && "constructor" in e && "constructor" in n && !(typeof $ == "function" && $ instanceof $ && typeof R == "function" && R instanceof R) && (g = !1);
  }
  return r.delete(e), r.delete(n), g;
}
var iu = 1, En = "[object Arguments]", kn = "[object Array]", rt = "[object Object]", su = Object.prototype, jn = su.hasOwnProperty;
function uu(e, n, t, a, l, r) {
  var i = Pe(e), o = Pe(n), s = i ? kn : ze(e), u = o ? kn : ze(n);
  s = s == En ? rt : s, u = u == En ? rt : u;
  var f = s == rt, c = u == rt, d = s == u;
  if (d && Ke(e)) {
    if (!Ke(n))
      return !1;
    i = !0, f = !1;
  }
  if (d && !f)
    return r || (r = new ve()), i || Gt(e) ? va(e, n, t, a, l, r) : nu(e, n, s, t, a, l, r);
  if (!(t & iu)) {
    var v = f && jn.call(e, "__wrapped__"), h = c && jn.call(n, "__wrapped__");
    if (v || h) {
      var g = v ? e.value() : e, y = h ? n.value() : n;
      return r || (r = new ve()), l(g, y, t, a, r);
    }
  }
  return d ? (r || (r = new ve()), ou(e, n, t, a, l, r)) : !1;
}
function ba(e, n, t, a, l) {
  return e === n ? !0 : e == null || n == null || !ie(e) && !ie(n) ? e !== e && n !== n : uu(e, n, t, a, ba, l);
}
var cu = function() {
  return fe.Date.now();
};
const St = cu;
var fu = "Expected a function", du = Math.max, pu = Math.min;
function gu(e, n, t) {
  var a, l, r, i, o, s, u = 0, f = !1, c = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(fu);
  n = It(n) || 0, ye(t) && (f = !!t.leading, c = "maxWait" in t, r = c ? du(It(t.maxWait) || 0, n) : r, d = "trailing" in t ? !!t.trailing : d);
  function v(_) {
    var V = a, ee = l;
    return a = l = void 0, u = _, i = e.apply(ee, V), i;
  }
  function h(_) {
    return u = _, o = setTimeout(b, n), f ? v(_) : i;
  }
  function g(_) {
    var V = _ - s, ee = _ - u, m = n - V;
    return c ? pu(m, r - ee) : m;
  }
  function y(_) {
    var V = _ - s, ee = _ - u;
    return s === void 0 || V >= n || V < 0 || c && ee >= r;
  }
  function b() {
    var _ = St();
    if (y(_))
      return T(_);
    o = setTimeout(b, g(_));
  }
  function T(_) {
    return o = void 0, d && a ? v(_) : (a = l = void 0, i);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, a = s = l = o = void 0;
  }
  function $() {
    return o === void 0 ? i : T(St());
  }
  function R() {
    var _ = St(), V = y(_);
    if (a = arguments, l = this, s = _, V) {
      if (o === void 0)
        return h(s);
      if (c)
        return clearTimeout(o), o = setTimeout(b, n), v(s);
    }
    return o === void 0 && (o = setTimeout(b, n)), i;
  }
  return R.cancel = I, R.flush = $, R;
}
function pt(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
function Bt(e) {
  return e && e.length ? e[0] : void 0;
}
var mu = "[object String]";
function ya(e) {
  return typeof e == "string" || !Pe(e) && ie(e) && ge(e) == mu;
}
var hu = Math.max;
function Vn(e, n, t) {
  var a = e == null ? 0 : e.length;
  if (!a)
    return -1;
  var l = t == null ? 0 : Nr(t);
  return l < 0 && (l = hu(a + l, 0)), gl(e, n, l);
}
var vu = "[object Boolean]";
function bu(e) {
  return e === !0 || e === !1 || ie(e) && ge(e) == vu;
}
var yu = "[object Map]", wu = "[object Set]", _u = Object.prototype, Au = _u.hasOwnProperty;
function Se(e) {
  if (e == null)
    return !0;
  if (Dt(e) && (Pe(e) || typeof e == "string" || typeof e.splice == "function" || Ke(e) || Gt(e) || na(e)))
    return !e.length;
  var n = ze(e);
  if (n == yu || n == wu)
    return !e.size;
  if (ht(e))
    return !ia(e).length;
  for (var t in e)
    if (Au.call(e, t))
      return !1;
  return !0;
}
function Tu(e, n) {
  return ba(e, n);
}
var Su = "[object Number]";
function Re(e) {
  return typeof e == "number" || ie(e) && ge(e) == Su;
}
function de(e, n, t) {
  const a = (...l) => $e.apply(this, l);
  return new Promise((l, r) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let i = a("r.confirm"), o = a("r.cancel"), s = !1, u = "swalConfirmBt", f = "swalCancelBt";
      const c = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let d = "";
      e.text && c.test(O(e.text)) ? d = "content" : e.text && O(e.text) === "String" && (d = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (o = e.buttons.cancel.text) && (s = !0), e.buttons.cancel.className && (f = e.buttons.cancel.className), e.buttons.confirm.text && (i = e.buttons.confirm.text), e.buttons.confirm.className && (u = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (o = e.buttons[0], s = !0), e.buttons[1] && (i = e.buttons[1]))), at({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [d]: e.text,
        buttons: {
          confirm: {
            text: i,
            value: !0,
            visible: !0,
            className: u
          },
          cancel: {
            text: o,
            value: null,
            visible: s,
            className: f
          }
        }
      }).then((v) => {
        v && typeof e.onOk == "function" && e.onOk(), l(v);
      }).catch((v) => {
        r(v);
      });
    } else if (typeof e == "string") {
      let i = "";
      if (n)
        switch (typeof n) {
          case "string":
            i = "text";
            break;
          case "object":
            i = "content";
            break;
        }
      at({
        title: e,
        [i]: n || "",
        icon: t || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: a("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((o) => {
        l(o);
      }).catch((o) => {
        r(o);
      });
    } else if (typeof e == "boolean")
      !e && at.close && at.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function wa(e) {
  return e.replace(/_(\w)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function xu(e) {
  let n = document.createElement("div");
  return n.textContent !== void 0 ? n.textContent = e : n.innerText = e, n.innerHTML;
}
function Iu(e) {
  let n = document.createElement("div");
  return n.innerHTML = e, n.innerText || n.textContent;
}
function it(e) {
  return new Promise((n) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      n(t.result);
    };
  });
}
function Yt(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function st(e) {
  return O(e) === "String" && e.indexOf("image") > -1;
}
function Lt(e) {
  const n = Yt(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function _a(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, Aa(t);
}
function Aa(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
function gt({
  group: e,
  condition: n,
  pathKey: t,
  childKey: a = "children",
  path: l = []
}) {
  if (e && ye(e)) {
    if (Nt(n)) {
      if (Fe(e)) {
        let r = e, i = te(l);
        if (n(r))
          return t && r[t] && i.push(r[t]), i;
        if (r[a] && !Se(r[a])) {
          t && r[t] && i.push(r[t]);
          let o = gt({
            group: r[a],
            condition: n,
            pathKey: t,
            childKey: a,
            path: i
          });
          if (!Se(o))
            return o;
        }
      } else if (Array.isArray(e))
        for (let r of e) {
          let i = te(l);
          if (n(r))
            return t && r[t] ? i.push(r[t]) : i.push(String(e.indexOf(r))), i;
          if (r[a] && r[a].length > 0) {
            t && r[t] ? i.push(r[t]) : i.push(String(e.indexOf(r)));
            let o = gt({
              group: r[a],
              condition: n,
              pathKey: t,
              childKey: a,
              path: i
            });
            if (!Se(o))
              return o;
          }
        }
    } else if (Array.isArray(e))
      for (let r of e) {
        let i = te(l);
        if (r === n)
          return i.push(String(e.indexOf(r))), i;
      }
  }
  return [];
}
function Ta(e, n = 12) {
  if (O(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const a = t.clientWidth;
    return document.body.removeChild(t), a;
  }
  return 0;
}
function $u(e) {
  return e === "" ? null : e;
}
function Cu(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
const Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: _a,
  emptyInput: $u,
  fakeALinkClick: Aa,
  findPath: gt,
  getFileSrc: it,
  getFileTypeByName: Yt,
  getFileTypeIconByName: Lt,
  getStringWidth: Ta,
  htmlDecode: Iu,
  htmlEncode: xu,
  isImgByFile: st,
  stopBubbling: Cu,
  toHump: wa
}, Symbol.toStringTag, { value: "Module" }));
function O(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function Sa(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Et(e) {
  let n = O(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let a = O(e[t]);
        a === "String" ? e[t] = e[t].trim() : (a === "Object" || a === "Array") && Et(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, a = e.length; t < a; t++) {
      let l = O(e[t]);
      l === "String" ? e[t] = e[t].trim() : (l === "Array" || l === "Object") && Et(e[t]);
    }
  return e;
}
function kt(e, n = []) {
  if (O(e) === "Array")
    return e.forEach((t, a) => {
      switch (O(t)) {
        case "Array":
        case "Object":
          kt(t);
          break;
        default:
          e[a] = null;
      }
    }), e;
  if (O(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let a = !0;
        for (let l of n)
          if (l === t) {
            a = !1;
            break;
          }
        if (a)
          switch (O(e[t])) {
            case "Array":
            case "Object":
              kt(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
const Mu = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Pu(e) {
  let n = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && n.append(t, e[t]);
  return n;
}
function Bu(e, n, t = !1) {
  if (!e || !n)
    return !1;
  let a, l = "notFoundC", r = function(i, o) {
    if (Array.isArray(i)) {
      if (O(o) === "Function" && o(i))
        return l = i, [];
      for (let s of i) {
        if (l !== "notFoundC")
          break;
        if (O(o) === "Function" && o(s) || s === o)
          return l = s, [i.indexOf(s)];
        if (O(s) === "Array" || O(s) === "Object") {
          let u = r(s, o);
          if (u !== void 0)
            return [i.indexOf(s), ...u];
        }
      }
    } else if (O(i) === "Object") {
      if (O(o) === "Function" && o(i))
        return l = i, [];
      for (let s in i) {
        if (l !== "notFoundC")
          break;
        if (i.hasOwnProperty(s)) {
          if (O(o) === "Function" && o(s) || i[s] === o)
            return l = i[s], [s];
          if (O(i[s]) === "Object" || O(i[s]) === "Array") {
            let u = r(i[s], o);
            if (u !== void 0)
              return [s, ...u];
          }
        }
      }
    }
  };
  return a = r(e, n), t ? a || !1 : l === "notFoundC" ? !1 : l;
}
function Lu(e, n) {
  for (let t = 0, a = n.length; t < a; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function Eu(e, n = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`), a = e && String(e) || "";
  return t.test(a) ? Number(a.replace(t, "$1")) : e;
}
function xa(e, n = {}, t = "get") {
  let a = document.createElement("form"), l = document.getElementsByTagName("body")[0];
  l.appendChild(a), a.setAttribute("style", "display:none"), a.setAttribute("target", ""), a.setAttribute("method", t);
  let r = e;
  if (window && window.hasOwnProperty("g")) {
    let i = Object.keys(window.g).filter((o) => o.indexOf("URL") > -1).map((o) => o.replace("URL", ""));
    for (let o of i) {
      let s = new RegExp("^/" + o + "(?=/.*$)", "i");
      if (s.test(e) && window.g[o + "URL"]) {
        r = window.g[o + "URL"] + e.replace(s, "");
        break;
      }
    }
  }
  if (a.setAttribute("action", r), Fe(n)) {
    for (let o in n)
      if (n.hasOwnProperty(o) && (n[o] || n[o] === 0 || n[o] === !1 || n[o] === "")) {
        let s = document.createElement("input");
        s.setAttribute("type", "hidden"), s.setAttribute("name", o), s.setAttribute("value", n[o]), a.appendChild(s);
      }
    a.submit();
    let i = setTimeout(() => {
      l.removeChild(a), clearTimeout(i), i = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function ku(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    de.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  xa(e, n, t);
}
function ju(e, n, t = !1) {
  let a;
  if (e && O(n) === "Array") {
    let l = localStorage.getItem(e);
    if (l) {
      let r = JSON.parse(decodeURI(l));
      a = n.filter((i) => i.key && r.indexOf(i.title) !== -1).map((i) => i.key);
    } else
      a = n.map((r) => r.key);
  } else
    a = [];
  return t || (a = String(a)), a;
}
function xe(e) {
  return e != null && e !== "";
}
function Vu(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function Ia(e, n = !1, t = "") {
  return function(a, l) {
    let r;
    if (Array.isArray(e)) {
      let s = [];
      for (let u of e)
        xe(l.row[u]) && s.push(l.row[u]);
      r = s.join(t);
    } else
      typeof e == "function" ? r = e(l) : r = l.row[e];
    let i = Ta(r), o = l.column._width;
    return r && i > o ? G(
      Da,
      {
        style: {
          width: "100%"
        },
        content: r,
        maxWidth: o * 2
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
        r
      )
    ) : G("span", n && !xe(r) ? "--" : r);
  };
}
function Uu(e) {
  if (Fe(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && xe(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (xe(n))
        return !1;
    return !0;
  }
  return !xe(e);
}
function Fu(e) {
  return O(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : O(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function $a({
  group: e,
  condition: n,
  key: t,
  val: a,
  childKey: l = "children"
}) {
  if (O(e) !== "Array" || O(n) !== "Function" || O(t) !== "String" || O(l) !== "String")
    return !1;
  e.forEach((r) => {
    n(r) && (O(a) === "Function" ? r[t] = a(r[t]) : r[t] = a), O(r[l]) === "Array" && r[l].length > 0 && $a({
      group: r[l],
      condition: n,
      key: t,
      val: a,
      childKey: l
    });
  });
}
function Ca(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function Oa(e) {
  return O(e) === "Number" && String(e) === "NaN";
}
function Ru(e, n = !1, t = !1) {
  if (O(e) !== "Object")
    return e;
  let a = Object.assign(e, {}), l = "";
  for (let r in a)
    if (a.hasOwnProperty(r)) {
      let i = a[r];
      i === void 0 || i === "" || O(i) === "String" && i.trim() === "" || i === null || Oa(i) ? t ? n ? l += r + "=&" : a[r] = "" : delete a[r] : n && (l += r + "=" + i + "&");
    }
  return n ? l.length > 0 ? l.substring(0, l.length - 1) : "" : a;
}
function jt(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || Fe(t) ? n.push(jt(t)) : xe(t) && n.push(t);
  } else if (Fe(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || Fe(e[t]) ? n[t] = jt(e[t]) : xe(e[t]) && (n[t] = e[t]));
  return n;
}
function Nu(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function Ma(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
const Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: kt,
  dataFilterOrToUrl: Ru,
  decimalDigitsLimit: Eu,
  downloadFileByFormSubmit: xa,
  fileExport: ku,
  findCollection: Bu,
  formDataHeadConfig: Mu,
  getColumnsKeys: ju,
  hasPermission: Ca,
  htmlPrint: Nu,
  isEmptyValue: Uu,
  isNaN: Oa,
  isNumberValue: Vu,
  isValidValue: xe,
  myTypeof: O,
  oneOf: Lu,
  removeEmptyValue: jt,
  setValByOption: $a,
  siblingElems: Ma,
  stringLength: Fu,
  toFormData: Pu,
  toLine: Sa,
  tooltipManual: Ia,
  trimObj: Et
}, Symbol.toStringTag, { value: "Module" })), zu = { class: "groupBoxRP" }, Du = ["onClick"], Hu = /* @__PURE__ */ q({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const n = e, t = Ja();
    function a(r) {
      return r.path === n.pathName ? "active" : "";
    }
    function l(r, i) {
      r.preventDefault();
      let o = r.target;
      if (!i.children && !o.classList.contains("active")) {
        t.push(i.path);
        return;
      }
      let s = o.parentNode, u = Ma(s);
      for (let f of u) {
        f.classList.remove("open");
        const c = f.querySelectorAll(".open");
        for (let d of c)
          d.classList.remove("open");
      }
      s.classList.toggle("open");
    }
    return (r, i) => {
      const o = D("sideMenuGroup", !0);
      return C(), L("ul", zu, [
        (C(!0), L(se, null, Me(n.data, (s, u) => (C(), L("li", {
          class: ue({ dropItemRP: s.children }),
          key: s.path + u
        }, [
          P("div", {
            class: ue(["menuTxtR", a(s)]),
            onClick: (f) => l(f, s),
            style: Z({ paddingLeft: s.level * 20 + "px" })
          }, Q(s.name || "-- no name --"), 15, Du),
          s.children ? (C(), he(o, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : me("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Gu = { class: "menuListR" }, Wu = /* @__PURE__ */ q({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: n }) {
    const t = e, a = Xa(), l = H(!0), r = H(), i = H(), o = M(() => l.value ? x("r.hideMenu") : x("r.showMenu")), s = M(() => l.value ? "ios-arrow-back" : "ios-arrow-forward");
    Fa(() => {
      let c = localStorage.getItem("menuDisplayR") || "";
      c !== "" ? l.value = JSON.parse(c) : (l.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), et(
      () => a.path,
      (c) => {
        r.value = c, Wn(f);
      },
      { immediate: !0 }
    );
    function u() {
      l.value = !l.value, localStorage.setItem("menuDisplayR", JSON.stringify(l.value)), n("on-change", l.value);
    }
    function f() {
      let c = i.value.querySelectorAll(".dropItemRP");
      for (let d of c)
        d.querySelector(".active") && !d.classList.contains("open") && d.classList.add("open");
    }
    return (c, d) => {
      const v = D("Icon");
      return C(), L("div", {
        ref_key: "menuRef",
        ref: i,
        class: "menuBoxRP"
      }, [
        ne(P("div", Gu, [
          j(Hu, {
            data: t.data,
            pathName: p(r)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [le, p(l)]
        ]),
        j(v, {
          type: p(s),
          size: 25,
          class: ue([{ showIco: !p(l) }, "menuShowHideIco"]),
          title: p(o),
          onClick: u,
          color: p(l) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), qu = ["title"], Ju = /* @__PURE__ */ q({
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
    function a(l) {
      t.disabled || n("click", l);
    }
    return (l, r) => {
      const i = D("Icon"), o = Gn("has");
      return ne((C(), L("div", {
        class: ue(["tableBtnsG", { disabled: t.disabled }]),
        onClick: a,
        title: t.title || p(x)("r.button")
      }, [
        j(i, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"])
      ], 10, qu)), [
        [o, t.has]
      ]);
    };
  }
}), Xu = { class: "contentX" }, Ku = { class: "arrowA" }, Yu = /* @__PURE__ */ q({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const n = e, t = H(!0), a = M(() => t ? "background:" + n.bg || "transparent" : "");
    return (l, r) => {
      const i = D("Icon");
      return C(), L("div", {
        style: Z(p(a))
      }, [
        ne(P("div", Xu, [
          Te(l.$slots, "default")
        ], 512), [
          [le, p(t)]
        ]),
        P("div", Ku, [
          P("div", {
            class: "btA",
            onClick: r[0] || (r[0] = (o) => t.value = !p(t))
          }, [
            j(i, {
              type: p(t) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Zu = { class: "contentZ" }, Qu = /* @__PURE__ */ q({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, a = M({
      get() {
        return t.modelValue;
      },
      set(r) {
        n("update:modelValue", r);
      }
    }), l = M(() => a.value ? "background:" + t.bg : "");
    return (r, i) => (C(), L("div", {
      style: Z(p(l))
    }, [
      ne(P("div", Zu, [
        Te(r.$slots, "default")
      ], 512), [
        [le, p(a)]
      ])
    ], 4));
  }
});
let Vt = [], Ut = [];
const ec = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    Vt.map((n) => {
      window.clearTimeout(n);
    }), Ut.map((n) => {
      window.clearInterval(n);
    }), Vt.length = 0, Ut.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, pe = function(e, n) {
  let t = window.setTimeout(e, n);
  return Vt.push(t), t;
}, Ba = function(e, n) {
  let t = window.setInterval(e, n);
  return Ut.push(t), t;
}, tc = /* @__PURE__ */ q({
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
    let a = !1;
    const l = M({
      get() {
        return t.modelValue;
      },
      set(s) {
        n("update:modelValue", s);
      }
    }), r = M({
      get() {
        return t.open;
      },
      set(s) {
        n("on-toggle", s);
      }
    }), i = M(() => r.value ? "ios-arrow-up" : "ios-arrow-down");
    function o() {
      a || (a = !0, n("on-search", l.value), pe(() => {
        a = !1;
      }, 2e3));
    }
    return (s, u) => {
      const f = D("Input"), c = D("icon");
      return C(), L("div", {
        class: "tableSearchV",
        style: Z({ position: t.fixed ? "fixed" : "absolute", right: t.right, top: t.top })
      }, [
        Te(s.$slots, "default", {}, () => [
          j(f, {
            modelValue: p(l),
            "onUpdate:modelValue": u[0] || (u[0] = (d) => be(l) ? l.value = d : null),
            style: Z({ width: t.width }),
            search: "",
            onOnSearch: o,
            class: "searchInputC",
            placeholder: t.placeholder || p(x)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        ne(P("span", {
          class: "sbt",
          onClick: u[1] || (u[1] = (d) => r.value = !p(r)),
          style: Z({ color: t.btnColor })
        }, [
          j(c, {
            type: p(i),
            color: t.btnColor
          }, null, 8, ["type", "color"]),
          Le(Q(p(x)("r.adSearch")), 1)
        ], 4), [
          [le, t.showBtn]
        ])
      ], 4);
    };
  }
}), nc = { class: "tabSetF" }, ac = { class: "topCheck" }, rc = /* @__PURE__ */ q({
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
    const t = e, a = H(!0), l = H(!1), r = H(!1), i = H([]), o = M(() => {
      let g = x("r.unknown");
      return t.modelValue.length > i.value.length && (i.value = te(t.modelValue)), i.value.map((y) => {
        let b = { label: y && y.title || g };
        return y && y.disableShowSetting && (b.disabled = !0), b;
      });
    }), s = M(() => o.value.filter((g) => g.disabled)), u = M({
      get() {
        return t.modelValue.map((g) => g && g.title || x("r.unknown"));
      },
      set(g) {
        let y = i.value.filter((b) => {
          for (let T of g)
            if (T === b.title)
              return !0;
          return !1;
        });
        n("update:modelValue", y);
      }
    }), { locale: f } = Ka();
    tt(() => {
      let g = x("r.unknown"), y;
      f.value ? y = localStorage.getItem(t.sKey + "_" + f.value) : y = localStorage.getItem(t.sKey), y ? u.value = JSON.parse(decodeURI(y)) : t.defaultCheck && (u.value = t.modelValue.filter((b) => b.showSettingCheck).map((b) => b && b.title || g));
    });
    function c(g) {
      g.length === o.value.length ? (a.value = !1, l.value = !0) : g.length > s.value.length ? (a.value = !0, l.value = !1) : (a.value = !1, l.value = !1);
    }
    et(() => u.value, c, {
      immediate: !0,
      deep: !0
    });
    function d() {
      r.value || (r.value = !0);
    }
    function v() {
      f.value ? localStorage.setItem(t.sKey + "_" + f.value, encodeURI(JSON.stringify(u.value))) : localStorage.setItem(t.sKey, encodeURI(JSON.stringify(u.value))), r.value = !1;
    }
    function h() {
      a.value ? l.value = !1 : l.value = !l.value, a.value = !1, l.value ? u.value = o.value.map((g) => g.label) : u.value = s.value.map((g) => g.label);
    }
    return (g, y) => {
      const b = D("Icon"), T = D("Checkbox"), I = D("CheckboxGroup");
      return C(), L("div", nc, [
        P("div", {
          class: "tabSetBt",
          onClick: d
        }, [
          j(b, {
            type: "md-settings",
            size: "17"
          }),
          P("span", null, Q(p(x)("r.tabSetting")), 1)
        ]),
        ne(P("div", {
          class: "tabSetCard",
          style: Z({ top: t.top, right: t.right, width: t.width, backgroundColor: t.bg })
        }, [
          P("div", ac, [
            j(T, {
              indeterminate: p(a),
              modelValue: p(l),
              "onUpdate:modelValue": y[0] || (y[0] = ($) => be(l) ? l.value = $ : null),
              onClick: Ra(h, ["prevent"])
            }, {
              default: ce(() => [
                Le(Q(p(x)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            P("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: v
            }, Q(p(x)("r.confirm")), 1)
          ]),
          j(I, {
            modelValue: p(u),
            "onUpdate:modelValue": y[1] || (y[1] = ($) => be(u) ? u.value = $ : null)
          }, {
            default: ce(() => [
              (C(!0), L(se, null, Me(p(o), ($, R) => (C(), he(T, {
                class: "setItem",
                label: $ && $.label,
                key: "tabSet_" + t.sKey + R,
                disabled: $ && $.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [le, p(r)]
        ])
      ]);
    };
  }
});
let Ve = 0, Qe = document.createElement("div");
Qe.setAttribute("class", "spinModal");
Qe.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(Qe);
};
function Un(e) {
  e ? Qe.classList.add("show") : Qe.classList.remove("show");
}
function La(e) {
  let n = Ve;
  e ? Ve++ : Ve > 0 && Ve--, n !== Ve && (Ve === 0 ? Un(!1) : n === 0 && Un(!0));
}
const lc = window.location.origin;
let Ue = null;
const Fn = (...e) => $e.apply(Ue, e);
let oe = xt.create({
  baseURL: lc,
  withCredentials: !0
  // 允许携带cookie
});
function oc() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
oe.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function Rn() {
  if (oe.store)
    if (typeof oe.store == "function") {
      const e = oe.store();
      e.logout && e.logout();
    } else
      oe.store.dispatch("logout");
  else
    oc();
}
oe.interceptors.response.use(
  (e) => (Ue && e && e.data && (e.data.code === 403 || e.data.code === 409) && Ue.messageBox({
    content: Fn("r.http." + e.data.code),
    onOk: Rn
  }), e),
  (e) => (Ue && e && e.response && (e.response.status === 403 || e.response.status === 409) && Ue.messageBox({
    content: Fn("r.http." + e.response.status),
    onOk: Rn
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function _e(e, n, t, a) {
  a && a.spin && La(!1);
  let l = !0, r = e && e.data;
  if (r) {
    t = t || [];
    for (let i of t)
      r = r[i], l = l && r;
    return l ? r : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function ic(e, n, t, a, l, r, i) {
  return new Promise((o, s) => {
    switch (e) {
      case "get":
        oe.get(n, { params: t }).then((f) => {
          let c = _e(f, a, l, r);
          c ? o(c) : s(f);
        }).catch((f) => {
          _e({}, a, l, r), s(f);
        });
        break;
      case "delete":
        let u = i ? "params" : "data";
        oe.delete(n, { [u]: t }).then((f) => {
          let c = _e(f, a, l, r);
          c ? o(c) : s(f);
        }).catch((f) => {
          _e({}, a, l, r), s(f);
        });
        break;
      case "post":
        oe.post(n, t, r).then((f) => {
          let c = _e(f, a, l, r);
          c ? o(c) : s(f);
        }).catch((f) => {
          _e({}, a, l, r), s(f);
        });
        break;
      case "put":
        oe.put(n, t, r).then((f) => {
          let c = _e(f, a, l, r);
          c ? o(c) : s(f);
        }).catch((f) => {
          _e({}, a, l, r), s(f);
        });
        break;
    }
  });
}
function lt(e, n, t = {}, a, l, r, i) {
  return new Promise((o, s) => {
    if (n) {
      r && r.spin && La(!0);
      let u = n;
      if (window && window.hasOwnProperty("g")) {
        const d = window.g;
        let v = Object.keys(d).filter((h) => h.indexOf("URL") > -1).map((h) => h.replace("URL", ""));
        for (let h of v) {
          let g = new RegExp("^/" + h + "(?=/.*$)", "i");
          if (g.test(n) && d[h + "URL"]) {
            u = d[h + "URL"] + n.replace(g, "");
            break;
          }
        }
      }
      let f;
      if (r && r.headers && r.headers["Content-Type"] === "multipart/form-data")
        f = t;
      else if (t && !Se(t))
        if (Array.isArray(t)) {
          f = [];
          for (let d of t)
            (d || d === 0 || d === !1 || d === "" && r && !r.noEmptyStr) && f.push(d);
        } else {
          f = {};
          for (let d in t)
            t.hasOwnProperty(d) && (t[d] || t[d] === 0 || t[d] === !1 || t[d] === "" && r && !r.noEmptyStr) && (f[d] = t[d]);
        }
      let c = e.toLowerCase();
      ic(c, u, f, a, l, r, i).then((d) => {
        o(d);
      }).catch((d) => {
        s(d);
      });
    } else
      console.error("没有请求地址:url"), s("没有请求地址:url");
  });
}
const De = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, n) {
    oe.store = e, Ue = n.config.globalProperties;
  },
  post(e, n, t, a, l) {
    return new Promise((r, i) => {
      lt("post", e, n, t, a, l).then((o) => {
        r(o);
      }).catch((o) => {
        i(o);
      });
    });
  },
  put(e, n, t, a, l) {
    return new Promise((r, i) => {
      lt("put", e, n, t, a, l).then((o) => {
        r(o);
      }).catch((o) => {
        i(o);
      });
    });
  },
  get(e, n, t, a, l) {
    return new Promise((r, i) => {
      lt("get", e, n, t, a, l).then((o) => {
        r(o);
      }).catch((o) => {
        i(o);
      });
    });
  },
  delete(e, n, t, a, l, r = !0) {
    return new Promise((i, o) => {
      lt("delete", e, n, t, a, l, r).then((s) => {
        i(s);
      }).catch((s) => {
        o(s);
      });
    });
  },
  all: xt.all,
  spread: xt.spread,
  config: oe
}, sc = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, uc = { class: "topBtn" }, cc = { class: "fullHeight relativeBox" }, fc = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, dc = { class: "pageContainer" }, pc = 300, gc = /* @__PURE__ */ q({
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
    const a = e, { globalProperties: l } = Rt().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Ha });
    const i = l.pageSizes || [10, 20, 30, 40], o = H(a.data), s = H(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), u = H(1), f = H(0);
    let c = [], d, v, h = a.orderKey, g = a.orderDefault;
    const y = M(() => {
      for (let A of a.columns)
        if (A.fixed)
          return !0;
      return !1;
    }), b = M(() => a.selectionFixed || y.value), T = M(() => {
      let A = {
        ...a.searchData,
        current: u.value,
        size: s.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? A[g] = Sa(h) : a.orderKeyFormat === "camelcase" && (A[g] = wa(h))), A;
    }), I = M(() => {
      let A = a.columns.filter((w) => w.type !== "selection");
      if (a.selection || a.radio) {
        let w;
        a.radio ? w = {
          title: " ",
          width: 65,
          render: (ae, K) => G(Ga, {
            value: K.row.btChecked
          })
        } : w = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (w.fixed = a.selectionFixed), A.unshift(w);
      }
      return A.forEach((w) => {
        a.sortable === "custom" ? w.key && w.sortable !== !0 && w.sortable !== !1 && (w.sortable = "custom") : w.sortable = !1, w.align || (w.align = "center");
      }), a.tableEmptyTdHandle && A.forEach((w) => {
        w.key && w.render === void 0 && (w.tooltip ? w.render = Ia(w.key, !0) : w.render = (ae, K) => {
          let X = K.row[w.key];
          return ae("span", X === "" || X === null || X === void 0 ? "--" : X);
        });
      }), A;
    }), $ = M({
      get() {
        return o.value.map((A, w) => ({
          btKey: "bt-" + w,
          btChecked: !1,
          ...A
        }));
      },
      set(A) {
        o.value = A;
      }
    }), R = M(() => c.map((A) => A.id)), _ = M(() => c.map((A) => A.btKey)), V = H();
    et(() => a.searchData, ee, { deep: !0 });
    function ee() {
      u.value = 1, We();
    }
    function m() {
      a.initData && We();
    }
    function S(A) {
      o.value.unshift(te(A)), pe(() => {
        var w;
        (w = V.value) == null || w.clickCurrentRow(0);
      }, 100);
    }
    function E(A, w, ae) {
      let K = null;
      if (bu(w) && w ? K = v : Re(w) && (K = w), K !== null) {
        let X = o.value[K];
        for (let k in A)
          A.hasOwnProperty(k) && (X[k] = A[k]);
        ae && pe(() => {
          var k;
          (k = V.value) == null || k.clickCurrentRow(K);
        }, 10);
      }
    }
    function U(A) {
      o.value.splice(A, 1), pe(() => {
        var w;
        (w = V.value) == null || w.clickCurrentRow(0);
      }, 100);
    }
    function J(A, w) {
      var ae;
      A.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((ae = V.value) == null || ae.toggleSelect(w));
    }
    function B(A, w) {
      d = w.btKey, v = Number(w.btKey.split("-")[1]), a.radio && (o.value[v].btChecked = !0);
    }
    function z(A) {
      if (a.radio)
        for (let w of $.value)
          w.btKey !== d && (o.value[Number(w.btKey.split("-")[1])].btChecked = !1);
      c = A, t("on-selection-change", A);
    }
    function W() {
      return te(c);
    }
    function re(A) {
      u.value = A, We();
    }
    function He(A) {
      s.value = A, localStorage.setItem("btPageSize", String(A)), u.value === 1 && We();
    }
    function Ua({ key: A, order: w }) {
      g === "normal" ? (h = a.orderKey, g = a.orderDefault) : (h = A, g = w), u.value = 1, Ge();
    }
    function nt() {
      var A;
      if (a.radio) {
        if (_.value.length > 0 && $.value.length > 0) {
          let w = _.value[0].split("-")[1];
          $.value[w].btChecked = !1;
        }
      } else
        (A = V.value) == null || A.selectAll(!1);
      c.length > 0 && (c = [], t("on-selection-change", [])), d = null, v = null;
    }
    function yt() {
      o.value = [], nt(), u.value = 1, f.value = 0;
    }
    function Ge(A, w, ae) {
      return new Promise((K) => {
        A && (g = A), w && (h = w), a.url ? De.get(a.url, T.value, "", [], { spin: a.getDataLoading }).then((X) => {
          var Zt, Qt, en, tn, nn, an, rn, ln;
          let k;
          ae || nt(), typeof a.dataHandler == "function" ? k = a.dataHandler(X) : k = X, k.data ? ((Zt = k.data) != null && Zt.records || ((Qt = k.data) == null ? void 0 : Qt.records) === null ? o.value = ((en = k.data) == null ? void 0 : en.records) || [] : k.data.page ? ((tn = k.data.page) != null && tn.records || ((nn = k.data.page) == null ? void 0 : nn.records) === null) && (o.value = k.data.page.records || []) : k.data.data ? ((an = k.data.data) != null && an.records || ((rn = k.data.data) == null ? void 0 : rn.records) === null) && (o.value = ((ln = k.data.data) == null ? void 0 : ln.records) || []) : o.value = k.data, f.value = k.data.page && k.data.page.total || k.data.data && k.data.data.total || k.data.total || k.total || 0, f.value === 0 && u.value > 1 && o.value && o.value.length === 0 ? u.value = 1 : u.value > 1 && f.value <= (u.value - 1) * s.value && (u.value--, Wn(function() {
            Ge(A, w);
          })), t("on-data-change", k), K(k)) : (console.warn("请求返回数据有误，无法使用"), yt(), t("on-data-change", k));
        }).catch((X) => {
          console.warn(X), nt(), yt(), t("on-data-change", X);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function We(A, w, ae) {
      a.radio && (A || a.rowClickNum !== -1) ? Ge(w, ae, A).then(() => {
        o.value.length > 0 && pe(() => {
          var K, X;
          A ? (K = V.value) == null || K.clickCurrentRow(v || 0) : (X = V.value) == null || X.clickCurrentRow(a.rowClickNum);
        }, 10);
      }) : Ge();
    }
    return tt(m), n({
      selectedIds: R,
      addRow: S,
      setRowData: E,
      deleteRow: U,
      getSelected: W,
      clearSelect: nt,
      clearTableData: yt,
      getTableData: Ge,
      getDataAndClickRow: We
    }), (A, w) => {
      const ae = D("Table"), K = D("Page");
      return C(), L("div", sc, [
        ne(P("div", uc, [
          Te(A.$slots, "tableSetting"),
          Te(A.$slots, "topMsg"),
          Te(A.$slots, "topBtnGroup")
        ], 512), [
          [le, a.showTopRow]
        ]),
        P("div", {
          class: ue(["tableContainer fullHeight", { noTop: !a.showTopRow, noPage: a.noPage }])
        }, [
          P("div", cc, [
            P("div", fc, [
              j(ae, qn({
                ref_key: "tableRef",
                ref: V
              }, A.$attrs, {
                height: p(b) && pc || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !p(b), lightHeadO: a.lightHead },
                columns: p(I),
                data: p($),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: B,
                onOnSelectionChange: z,
                onOnSortChange: Ua,
                onOnRowClick: J
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        ne(P("div", dc, [
          j(K, {
            modelValue: p(u),
            "onUpdate:modelValue": w[0] || (w[0] = (X) => be(u) ? u.value = X : null),
            "page-size-opts": p(i),
            total: p(f),
            "page-size": p(s),
            "show-sizer": "",
            "show-total": "",
            showElevator: !a.noElevator,
            size: a.pageComponentSize,
            onOnChange: re,
            onOnPageSizeChange: He
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [le, !a.noPage]
        ])
      ], 512);
    };
  }
}), mc = /* @__PURE__ */ q({
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
    const t = e, a = M({
      get() {
        return t.modelValue && t.modelValue.key || null;
      },
      set(u) {
        let f = {
          key: u,
          val: null
        };
        a.value && a.value !== u && (f.beforeKey = a.value), n("update:modelValue", f), n("on-change", f);
      }
    }), l = M({
      get() {
        return t.modelValue && t.modelValue.val || null;
      },
      set(u) {
        n("update:modelValue", {
          key: a.value,
          val: u
        });
      }
    }), r = M(() => ({
      width: t.labelWidth + "px",
      textAlign: t.labelTextAlign
    })), i = M(() => ({ width: t.itemWidth + "px" }));
    function o(u) {
      u && u.target && u.target.value !== void 0 && s({
        key: a.value,
        val: u.target.value
      });
    }
    const s = gu((u) => {
      n("on-change", u);
    }, 500);
    return (u, f) => {
      const c = D("Option"), d = D("Select"), v = D("Input");
      return C(), L("div", null, [
        j(d, {
          modelValue: p(a),
          "onUpdate:modelValue": f[0] || (f[0] = (h) => be(a) ? a.value = h : null),
          style: Z(p(r)),
          disabled: !!t.disabled,
          transfer: ""
        }, {
          default: ce(() => [
            (C(!0), L(se, null, Me(t.selectOption, (h, g) => (C(), he(c, {
              value: h.val,
              key: "selectInputOp" + h.value + g,
              style: Z({ textAlign: t.labelTextAlign })
            }, {
              default: ce(() => [
                Le(Q(h.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        j(v, {
          modelValue: p(l),
          "onUpdate:modelValue": f[1] || (f[1] = (h) => be(l) ? l.value = h : null),
          placeholder: t.placeholder || p(x)("r.pInput"),
          style: Z(p(i)),
          clearable: t.clearable,
          disabled: !!t.disabled,
          onOnChange: o
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var hc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ea = { exports: {} };
(function(e, n) {
  (function(t, a) {
    e.exports = a();
  })(hc, function() {
    function t(c) {
      var d = [];
      return c.AMapUI && d.push(a(c.AMapUI)), c.Loca && d.push(l(c.Loca)), Promise.all(d);
    }
    function a(c) {
      return new Promise(function(d, v) {
        var h = [];
        if (c.plugins)
          for (var g = 0; g < c.plugins.length; g += 1)
            i.AMapUI.plugins.indexOf(c.plugins[g]) == -1 && h.push(c.plugins[g]);
        if (o.AMapUI === r.failed)
          v("前次请求 AMapUI 失败");
        else if (o.AMapUI === r.notload) {
          o.AMapUI = r.loading, i.AMapUI.version = c.version || i.AMapUI.version, g = i.AMapUI.version;
          var y = document.body || document.head, b = document.createElement("script");
          b.type = "text/javascript", b.src = "https://webapi.amap.com/ui/" + g + "/main.js", b.onerror = function(T) {
            o.AMapUI = r.failed, v("请求 AMapUI 失败");
          }, b.onload = function() {
            if (o.AMapUI = r.loaded, h.length)
              window.AMapUI.loadUI(h, function() {
                for (var T = 0, I = h.length; T < I; T++) {
                  var $ = h[T].split("/").slice(-1)[0];
                  window.AMapUI[$] = arguments[T];
                }
                for (d(); s.AMapUI.length; )
                  s.AMapUI.splice(0, 1)[0]();
              });
            else
              for (d(); s.AMapUI.length; )
                s.AMapUI.splice(0, 1)[0]();
          }, y.appendChild(b);
        } else
          o.AMapUI === r.loaded ? c.version && c.version !== i.AMapUI.version ? v("不允许多个版本 AMapUI 混用") : h.length ? window.AMapUI.loadUI(h, function() {
            for (var T = 0, I = h.length; T < I; T++) {
              var $ = h[T].split("/").slice(-1)[0];
              window.AMapUI[$] = arguments[T];
            }
            d();
          }) : d() : c.version && c.version !== i.AMapUI.version ? v("不允许多个版本 AMapUI 混用") : s.AMapUI.push(function(T) {
            T ? v(T) : h.length ? window.AMapUI.loadUI(h, function() {
              for (var I = 0, $ = h.length; I < $; I++) {
                var R = h[I].split("/").slice(-1)[0];
                window.AMapUI[R] = arguments[I];
              }
              d();
            }) : d();
          });
      });
    }
    function l(c) {
      return new Promise(function(d, v) {
        if (o.Loca === r.failed)
          v("前次请求 Loca 失败");
        else if (o.Loca === r.notload) {
          o.Loca = r.loading, i.Loca.version = c.version || i.Loca.version;
          var h = i.Loca.version, g = i.AMap.version.startsWith("2"), y = h.startsWith("2");
          if (g && !y || !g && y)
            v("JSAPI 与 Loca 版本不对应！！");
          else {
            g = i.key, y = document.body || document.head;
            var b = document.createElement("script");
            b.type = "text/javascript", b.src = "https://webapi.amap.com/loca?v=" + h + "&key=" + g, b.onerror = function(T) {
              o.Loca = r.failed, v("请求 AMapUI 失败");
            }, b.onload = function() {
              for (o.Loca = r.loaded, d(); s.Loca.length; )
                s.Loca.splice(0, 1)[0]();
            }, y.appendChild(b);
          }
        } else
          o.Loca === r.loaded ? c.version && c.version !== i.Loca.version ? v("不允许多个版本 Loca 混用") : d() : c.version && c.version !== i.Loca.version ? v("不允许多个版本 Loca 混用") : s.Loca.push(function(T) {
            T ? v(T) : v();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var r;
    (function(c) {
      c.notload = "notload", c.loading = "loading", c.loaded = "loaded", c.failed = "failed";
    })(r || (r = {}));
    var i = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, o = { AMap: r.notload, AMapUI: r.notload, Loca: r.notload }, s = { AMap: [], AMapUI: [], Loca: [] }, u = [], f = function(c) {
      typeof c == "function" && (o.AMap === r.loaded ? c(window.AMap) : u.push(c));
    };
    return { load: function(c) {
      return new Promise(function(d, v) {
        if (o.AMap == r.failed)
          v("");
        else if (o.AMap == r.notload) {
          var h = c.key, g = c.version, y = c.plugins;
          h ? (window.AMap && location.host !== "lbs.amap.com" && v("禁止多种API加载方式混用"), i.key = h, i.AMap.version = g || i.AMap.version, i.AMap.plugins = y || i.AMap.plugins, o.AMap = r.loading, g = document.body || document.head, window.___onAPILoaded = function(T) {
            if (delete window.___onAPILoaded, T)
              o.AMap = r.failed, v(T);
            else
              for (o.AMap = r.loaded, t(c).then(function() {
                d(window.AMap);
              }).catch(v); u.length; )
                u.splice(0, 1)[0]();
          }, y = document.createElement("script"), y.type = "text/javascript", y.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + i.AMap.version + "&key=" + h + "&plugin=" + i.AMap.plugins.join(","), y.onerror = function(T) {
            o.AMap = r.failed, v(T);
          }, g.appendChild(y)) : v("请填写key");
        } else if (o.AMap == r.loaded)
          if (c.key && c.key !== i.key)
            v("多个不一致的 key");
          else if (c.version && c.version !== i.AMap.version)
            v("不允许多个版本 JSAPI 混用");
          else {
            if (h = [], c.plugins)
              for (g = 0; g < c.plugins.length; g += 1)
                i.AMap.plugins.indexOf(c.plugins[g]) == -1 && h.push(c.plugins[g]);
            h.length ? window.AMap.plugin(h, function() {
              t(c).then(function() {
                d(window.AMap);
              }).catch(v);
            }) : t(c).then(function() {
              d(window.AMap);
            }).catch(v);
          }
        else if (c.key && c.key !== i.key)
          v("多个不一致的 key");
        else if (c.version && c.version !== i.AMap.version)
          v("不允许多个版本 JSAPI 混用");
        else {
          var b = [];
          if (c.plugins)
            for (g = 0; g < c.plugins.length; g += 1)
              i.AMap.plugins.indexOf(c.plugins[g]) == -1 && b.push(c.plugins[g]);
          f(function() {
            b.length ? window.AMap.plugin(b, function() {
              t(c).then(function() {
                d(window.AMap);
              }).catch(v);
            }) : t(c).then(function() {
              d(window.AMap);
            }).catch(v);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, i = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, o = {
        AMap: r.notload,
        AMapUI: r.notload,
        Loca: r.notload
      }, s = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(Ea);
var bc = Ea.exports;
const yc = /* @__PURE__ */ vc(bc);
let Ft = { securityJsCode: "", key: "" };
function wc({ securityJsCode: e, key: n }) {
  Ft.securityJsCode = e, Ft.key = n;
}
function _c(e) {
  return Ft[e];
}
const Ac = /* @__PURE__ */ q({
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
    const t = e, a = M({
      get() {
        let I;
        return t.modelValue ? t.modelValue.name ? I = te(t.modelValue) : I = {
          ...t.modelValue,
          name: null
        } : I = {
          name: null
        }, I;
      },
      set(I) {
        n("update:modelValue", te(I));
      }
    }), l = M(() => Re(t.width) ? t.width + "px" : t.width), r = M(() => Re(t.height) ? t.height + "px" : t.height ? t.height : Re(t.width) ? t.width * 0.66 + "px" : "200px"), i = M(() => ({
      width: l.value,
      position: "relative"
    })), o = M(() => ({
      width: l.value,
      height: r.value,
      marginTop: "6px",
      opacity: t.showMap ? 1 : 0,
      position: t.showMap ? "relative" : "absolute",
      top: t.showMap ? 0 : "-10000px"
    }));
    et(
      () => t.modelValue,
      (I) => {
        if (I && I.lng && I.lat) {
          if (!h || !g)
            return;
          b({
            lng: I.lng,
            lat: I.lat,
            name: I.name
          });
        }
      }
    );
    const s = "mapId" + Math.floor(Math.random() * 1e9), u = H(null), f = H(null);
    let c;
    function d() {
      f.value && f.value.clientHeight < 10 || !f.value ? pe(d, 300) : pe(y, 100);
    }
    let v, h, g;
    function y() {
      yc.load({
        key: _c("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((I) => {
        v = I, h = new v.Map(s).on("complete", () => {
          var $, R;
          g = new v.Geocoder(), t.modelValue && t.modelValue.lng && t.modelValue.lat && b({
            lng: t.modelValue.lng,
            lat: t.modelValue.lat,
            name: t.modelValue.name
          }), new v.AutoComplete({
            input: (R = ($ = u.value) == null ? void 0 : $.$el) == null ? void 0 : R.children[1]
          }).on("select", (_) => {
            _ && _.poi && _.poi.name && (_.poi.location && _.poi.location.lng && _.poi.location.lat ? (b({
              name: _.poi.name,
              lng: _.poi.location.lng,
              lat: _.poi.location.lat
            }), a.value = {
              name: _.poi.name,
              lng: _.poi.location.lng,
              lat: _.poi.location.lat
            }) : h.setCity(_.poi.name, () => {
              let V = h.getCenter();
              b({
                name: _.poi.name,
                lng: V.lng,
                lat: V.lat
              }), a.value = {
                name: _.poi.name,
                lng: V.lng,
                lat: V.lat
              };
            })), n("on-change", a.value);
          }), h.on("hotspotclick", (_) => {
            b({
              name: _.name,
              lng: _.lnglat.lng,
              lat: _.lnglat.lat
            }), a.value = {
              name: _.name,
              lng: _.lnglat.lng,
              lat: _.lnglat.lat
            };
          });
        });
      });
    }
    function b({ lng: I, lat: $, name: R }) {
      h.clearMap();
      let _ = new v.LngLat(I, $), V = new v.Marker({
        map: h,
        position: _,
        draggable: !0
      });
      h.add(V), T(I, $), V.on("dragend", () => {
        let ee = V.getPosition();
        a.value = {
          name: R || null,
          lng: ee.lng,
          lat: ee.lat
        }, T(I, $);
      }), V.on("click", (ee) => {
        c && c.open(h, ee.target.getPosition());
      }), h.setFitView();
    }
    function T(I, $) {
      g.getAddress([I, $], (R, _) => {
        R === "complete" && _.info === "OK" && _.regeocode && _.regeocode.formattedAddress ? c = new v.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + _.regeocode.formattedAddress + "</div>",
          offset: new v.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (c = null, console.warn("地图获取位置信息失败", _));
      });
    }
    return tt(d), Na(() => {
      h && (h.destroy(), h = null, g = null, c = null);
    }), (I, $) => (C(), L("div", {
      style: Z(p(i)),
      class: "containerIKJ"
    }, [
      j(p(Wa), {
        ref_key: "mapInputRef",
        ref: u,
        modelValue: p(a).name,
        "onUpdate:modelValue": $[0] || ($[0] = (R) => p(a).name = R),
        class: ue({ mapInputIKJ: t.showMap }),
        placeholder: t.placeholder || p(x)("r.search"),
        disabled: t.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      P("div", {
        style: Z(p(o)),
        ref_key: "mapRef",
        ref: f,
        id: s
      }, null, 4)
    ], 4));
  }
});
var Dn;
const Tc = /* @__PURE__ */ q({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Dn = window == null ? void 0 : window.g) != null && Dn.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const t = e, a = H([]), l = M({
      get() {
        let u = t.modelValue;
        return Array.isArray(u) ? te(u) : Re(u) ? gt({
          group: a.value,
          condition: (f) => f.value === u,
          pathKey: "value"
        }) : ya(u) ? u.split(t.separator) : [];
      },
      set(u) {
        if (t.onlyLastVal)
          Se(u) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", pt(u));
        else {
          if (Tu(t.modelValue, u))
            return;
          n("update:modelValue", te(u));
        }
      }
    });
    function r() {
      if (!t.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      De.get(t.url).then((u) => {
        let f = null;
        u && u.data && u.data.records ? f = u.data.records : u && u.data ? f = u.data : u && (f = u), f ? (typeof t.optionFilter == "function" && O(t.optionFilter) === "Function" && (f = t.optionFilter(f)), a.value = i(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function i(u) {
      let f = [];
      for (let c of u) {
        let d = {
          value: c[t.optionVal],
          label: c[t.optionLabel]
        };
        c.children && !Se(c.children) && (d.children = i(c.children)), f.push(d);
      }
      return f;
    }
    function o(u, f) {
      return t.onlyLastLabel ? pt(u) : u.join(t.separator);
    }
    function s(u, f) {
      let c = "";
      Se(f) || (c = f.map((d) => d.label).join(t.separator)), n("on-label-change", c);
    }
    return tt(r), (u, f) => {
      const c = D("Cascader");
      return C(), he(c, {
        data: p(a),
        modelValue: p(l),
        "onUpdate:modelValue": f[0] || (f[0] = (d) => be(l) ? l.value = d : null),
        onOnChange: s,
        "change-on-select": "",
        transfer: "",
        disabled: t.disabled,
        "render-format": o,
        placeholder: t.placeholder || p(x)("r.pSelect"),
        filterable: t.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Sc = /* @__PURE__ */ q({
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
    const t = e, a = H(), l = M({
      get() {
        if (t.modelValue && (Re(t.modelValue) || ya(t.modelValue))) {
          let i = String(t.modelValue).trim();
          if (/^\d*$/.test(i)) {
            let s = i.substring(0, 2) + "0000", u, f = r(i);
            return f.length < 7 ? u = i.substring(0, 4) + "00" : u = i.substring(0, 6), /^8\d+$/.test(i) ? [s, f] : [s, u, f];
          }
          return i.indexOf(t.separator) !== -1 ? i.split(t.separator) : [i];
        } else
          return Array.isArray(t.modelValue) ? te(t.modelValue) : (a.value && (a.value.select = []), []);
      },
      set(i) {
        if (Se(i))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let o = pt(i), s = "", u = "";
          if (o && (s = o.code), s && s.length < 12) {
            let f = [...s];
            for (; f.length < 12; )
              f.push(0);
            s = f.join("");
          }
          if (Array.isArray(i) && (u = i.map((f) => f.name).join(t.separator)), s) {
            if (s === t.modelValue)
              return;
            n("update:modelValue", s);
          }
          u && n("on-name-change", u);
        }
      }
    });
    function r(i) {
      let o = [...i];
      for (; o[o.length - 1] === "0"; )
        o.pop();
      return o.join("");
    }
    return (i, o) => (C(), he(p(Ya), qn(i.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: a,
      modelValue: p(l),
      "onUpdate:modelValue": o[0] || (o[0] = (s) => be(l) ? l.value = s : null),
      level: t.level,
      disabled: t.disabled,
      placeholder: t.placeholder || p(x)("r.pSelect"),
      transfer: t.transfer,
      searchable: t.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Oe(e) {
  var i;
  const n = (...o) => $e.apply(this, o), t = n("r.closePreview"), a = n("r.fullImg");
  let l = Bt(document.getElementsByTagName("body")), r = document.createElement("div");
  r.setAttribute("class", "fullScreenImgByDom"), r.innerHTML = `<div class='previewInner'><img src='${e}' alt='${a}' ><i class='ivu-icon ivu-icon-md-close' title='${t}' ></i></div>`, (i = r.querySelector(".ivu-icon-md-close")) == null || i.addEventListener("click", function() {
    let o = Bt(document.getElementsByTagName("body"));
    o && o.removeChild(r);
  }), l == null || l.appendChild(r);
}
const xc = { class: "previewBoxM" }, Ic = {
  key: 0,
  class: "previewImg"
}, $c = ["src", "alt"], Cc = { class: "deleteModal" }, Oc = { class: "previewBoxM" }, Mc = {
  key: 0,
  class: "previewImg"
}, Pc = ["src", "alt"], Bc = { class: "deleteModal" }, Lc = { class: "customFileListM" }, Ec = {
  key: 0,
  class: "customFileListItem"
}, kc = ["onClick", "title"], jc = { class: "btBoxJ" }, Vc = { class: "customFileListM" }, Uc = {
  key: 0,
  class: "customFileListItem"
}, Fc = ["onClick", "title"], Rc = { class: "btBoxJ" };
var Hn;
const Nc = /* @__PURE__ */ q({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Hn = window == null ? void 0 : window.g) != null && Hn.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const t = e, a = on([]), l = on([]), r = M(() => !t.manualUpload && t.showImg && u.value ? "img" : t.manualUpload && t.showImg && u.value ? "localImg" : t.manualUpload && t.showUploadList && (!t.showImg || !u.value) ? "localList" : !t.manualUpload && t.showUploadList && (!t.showImg || !u.value) ? "list" : ""), i = M(() => t.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : t.url), o = M({
      get() {
        if (t.manualUpload)
          return s.value;
        {
          let m = [];
          for (let S of s.value)
            typeof S == "object" && O(S) === "File" ? m.push(S) : (typeof S == "number" || typeof S == "string") && m.push({
              response: {
                data: [
                  {
                    id: S
                  }
                ]
              }
            });
          return m;
        }
      },
      set(m) {
        var S;
        if (t.manualUpload)
          s.value = m;
        else {
          let E = [];
          for (let U of m)
            (S = U == null ? void 0 : U.response) != null && S.data && U.response.data[0] && U.response.data[0].id && E.push(U.response.data[0].id);
          s.value = E;
        }
      }
    }), s = M({
      get() {
        switch (typeof t.modelValue) {
          case "number":
            return [t.modelValue];
          case "string":
            return t.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(t.modelValue) ? [Number(t.modelValue)] : [t.modelValue];
          case "object":
            return Array.isArray(t.modelValue) ? t.modelValue.filter((m) => m !== "--") : O(t.modelValue) === "File" ? [t.modelValue] : [];
          default:
            return [];
        }
      },
      set(m) {
        if (t.length === 1) {
          let S = Bt(m);
          n("update:modelValue", S ?? null), n("on-change", S ?? null);
        } else
          n("update:modelValue", te(m)), n("on-change", te(m));
      }
    }), u = M(() => {
      let m;
      t.manualUpload ? m = o.value : m = l.value;
      for (let S of m) {
        let E;
        if (t.manualUpload ? E = S && S.type : E = S && S.mimeType, !E || E && !st(E))
          return !1;
      }
      return !0;
    });
    et(
      () => o.value,
      async (m) => {
        var S, E, U, J, B;
        if (r.value === "localImg")
          m && m.length > 0 ? a.value = await c(m) : a.value = [];
        else if (m && m.length > 0 && r.value !== "localList") {
          let z = [];
          for (let W of m)
            if (W.name === void 0)
              if ((S = W == null ? void 0 : W.response) != null && S.data && W.response.data[0] && W.response.data[0].id) {
                let re = await De.get(t.url + "/" + W.response.data[0].id).catch(() => {
                  z.push({ name: x("r.file") + Vn(m, W) });
                }), He = te(W);
                He.name = ((E = re == null ? void 0 : re.data) == null ? void 0 : E.returnValue) && re.data.returnValue[0] && ((U = re.data.returnValue[0]) == null ? void 0 : U.name) || x("r.file") + Vn(m, W), He.mimeType = ((J = re == null ? void 0 : re.data) == null ? void 0 : J.returnValue) && re.data.returnValue[0] && ((B = re.data.returnValue[0]) == null ? void 0 : B.mimeType) || "unknown", z.push(He);
              } else
                z.push({ name: x("r.unknown") });
            else
              z.push(W);
          l.value = z;
        } else
          l.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function f(m) {
      return m.name || m.split && pt(m.split("/")) || m;
    }
    async function c(m) {
      let S = [];
      for (let E of m) {
        let U = await it(E);
        S.push(U);
      }
      return S;
    }
    function d(m) {
      if (!t.disabled) {
        let S = o.value;
        S.splice(m, 1), o.value = S;
      }
    }
    function v(m) {
      m && m.response && m.response.data && m.response.data[0] && m.response.data[0].id && window.open(t.url + "/" + m.response.data[0].id + "/download");
    }
    function h(m) {
      var S, E;
      return t.manualUpload ? m.type && st(m.type) : ((S = m == null ? void 0 : m.response) == null ? void 0 : S.data) && ((E = m.response.data[0]) == null ? void 0 : E.id) && m.mimeType && st(m.mimeType);
    }
    function g(m) {
      t.manualUpload ? it(m).then((S) => {
        Oe(S);
      }) : Oe(t.url + "/" + m.response.data[0].id + "/download?preview=true");
    }
    function y(m) {
      O(m) === "String" && m.indexOf("http") > -1 ? window.open(m) : O(m) === "File" && it(m).then((S) => {
        _a(m.name, S);
      });
    }
    function b(m) {
      if (t.manualUpload) {
        if (m) {
          let S = Yt(m.name);
          if (t.format.length > 0 && t.format.indexOf(S) < 0)
            return de(
              x("r.wrongFileType"),
              x("r.supportType") + (t.format.length > 0 && String(t.format) || x("r.none")),
              "warning"
            ), !1;
          if (t.maxSize && m.size > t.maxSize * 1024)
            return de(x("r.fileIsBig"), x("r.supportSize") + t.maxSize + "kb", "warning"), !1;
          let E = o.value;
          E.push(m), o.value = E;
        }
        return !1;
      } else
        return !0;
    }
    function T(m) {
      console.warn(m), de(x("r.uploadError"), "", "error");
    }
    function I(m, S, E) {
      if (m && m.code === 0) {
        let U = o.value;
        U.push(S), o.value = U;
      } else
        de(x("r.uploadFail"), m && m.message || "", "error");
    }
    function $() {
      de(x("r.fileIsBig"), x("r.supportSize") + t.maxSize + " kb", "warning");
    }
    function R() {
      de(
        x("r.wrongFileType"),
        x("r.supportType") + (t.format.length > 0 && String(t.format) || x("r.none")),
        "warning"
      );
    }
    function _(m) {
      var U, J, B, z;
      let S = ((U = m == null ? void 0 : m.response) == null ? void 0 : U.data) && ((J = m.response.data[0]) == null ? void 0 : J.id), E = ((B = m == null ? void 0 : m.response) == null ? void 0 : B.data) && ((z = m.response.data[0]) == null ? void 0 : z.mimeType);
      S && (O(E) === "String" && E.indexOf("image") > -1 ? Oe(t.url + "/" + S + "/download?preview=true") : window.open(t.url + "/" + S + "/download?preview=true"));
    }
    function V(m) {
      var E, U;
      let S = ((E = m == null ? void 0 : m.response) == null ? void 0 : E.data) && ((U = m.response.data[0]) == null ? void 0 : U.id);
      ee(null, S);
    }
    function ee(m, S) {
      if (!t.disabled && s.value.indexOf(S) !== -1) {
        const E = te(s.value);
        let U = o.value;
        U.splice(E.indexOf(S), 1), o.value = U;
      }
    }
    return (m, S) => {
      const E = D("Button"), U = D("Upload"), J = D("Icon");
      return C(), L("div", null, [
        j(U, {
          name: "files",
          action: p(i),
          "before-upload": b,
          "on-error": T,
          "on-success": I,
          "on-exceeded-size": $,
          "on-preview": _,
          "on-remove": V,
          "on-format-error": R,
          data: t.data,
          "max-size": t.maxSize,
          "show-upload-list": !1,
          "with-credentials": t.withCredentials,
          format: t.format,
          multiple: t.multiple || !1,
          disabled: t.length > 0 && p(o).length >= t.length || !!t.disabled
        }, {
          default: ce(() => [
            j(E, {
              icon: "ios-cloud-upload-outline",
              class: ue({ disabledR: t.length > 0 && p(o).length >= t.length || !!t.disabled })
            }, {
              default: ce(() => [
                Le(Q(p(x)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        ne(P("div", xc, [
          (C(!0), L(se, null, Me(p(s), (B) => (C(), L(se, { key: B }, [
            !t.manualUpload && B !== null ? (C(), L("div", Ic, [
              P("img", {
                src: m.url + "/" + B + "/download?preview=true",
                alt: B
              }, null, 8, $c),
              P("div", Cc, [
                j(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(x)("r.fView"),
                  onClick: (z) => p(Oe)(t.url + "/" + B + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                j(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (z) => ee(z, B),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : me("", !0)
          ], 64))), 128))
        ], 512), [
          [le, p(r) === "img" && p(s).length > 0]
        ]),
        ne(P("div", Oc, [
          (C(!0), L(se, null, Me(p(a), (B, z) => (C(), L(se, {
            key: "manualImg" + z
          }, [
            t.manualUpload && B !== null ? (C(), L("div", Mc, [
              P("img", {
                src: B,
                alt: "manualImg" + z
              }, null, 8, Pc),
              P("div", Bc, [
                j(J, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (W) => p(Oe)(B),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"]),
                j(J, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (W) => d(z),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : me("", !0)
          ], 64))), 128))
        ], 512), [
          [le, p(r) === "localImg" && p(a).length > 0]
        ]),
        ne(P("div", Lc, [
          (C(!0), L(se, null, Me(p(o), (B, z) => (C(), L(se, {
            key: "manualItem" + z
          }, [
            t.manualUpload && B !== null ? (C(), L("p", Ec, [
              B.name ? (C(), he(J, {
                key: 0,
                type: p(Lt)(B.name)
              }, null, 8, ["type"])) : me("", !0),
              P("span", {
                class: ue(["upNameT", { previewName: h(B) }]),
                onClick: (W) => y(B),
                title: p(x)("r.download")
              }, Q(f(B)), 11, kc),
              P("span", jc, [
                h(B) ? (C(), he(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (W) => g(B),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : me("", !0),
                j(J, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (W) => d(z),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : me("", !0)
          ], 64))), 128))
        ], 512), [
          [le, p(r) === "localList" && p(o).length > 0]
        ]),
        ne(P("div", Vc, [
          (C(!0), L(se, null, Me(p(l), (B, z) => (C(), L(se, {
            key: "defaultItem" + z
          }, [
            !t.manualUpload && B !== null ? (C(), L("p", Uc, [
              j(J, {
                type: p(Lt)(B.name)
              }, null, 8, ["type"]),
              P("span", {
                class: ue(["upNameT", { previewName: h(B) }]),
                onClick: (W) => v(B),
                title: p(x)("r.download")
              }, Q(B.name || p(x)("r.file") + (z + 1)), 11, Fc),
              P("span", Rc, [
                h(B) ? (C(), he(J, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (W) => g(B),
                  title: p(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : me("", !0),
                j(J, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (W) => d(z),
                  title: p(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : me("", !0)
          ], 64))), 128))
        ], 512), [
          [le, p(r) === "list" && p(l).length > 0]
        ])
      ]);
    };
  }
}), zc = /* @__PURE__ */ P("div", { class: "bRoot" }, null, -1), Dc = /* @__PURE__ */ q({
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
    const t = e, a = H(!1), l = H(!1), r = H(!1), i = M({
      get() {
        return t.modelValue && t.modelValue[0] || null;
      },
      set(g) {
        n("update:modelValue", [g, o.value]), n("on-change", [g, o.value]);
      }
    }), o = M({
      get() {
        return t.modelValue && t.modelValue[1] || null;
      },
      set(g) {
        n("update:modelValue", [i.value, g]), n("on-change", [i.value, g]);
      }
    }), s = M(
      () => (i.value || "") + ((i.value || o.value) && " - " || "") + (o.value || "")
    ), u = H();
    tt(() => {
      u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        r.value = !0;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        r.value = !1;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (g) => {
        !t.disabled && (i.value || o.value) && (g.stopPropagation(), v());
      });
    });
    function f() {
      t.disabled || (a.value = !0);
    }
    function c(g) {
      i.value = g, a.value = !1, l.value = !0;
    }
    function d(g) {
      o.value = g, l.value = !1;
    }
    function v() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function h() {
      a.value = !1, l.value = !1, i.value && o.value === null && (i.value = null);
    }
    return (g, y) => {
      const b = D("DatePicker"), T = D("Icon"), I = D("Input");
      return C(), L("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: u
      }, [
        j(b, {
          open: p(l),
          modelValue: p(o),
          transfer: "",
          type: "month",
          placement: t.placement,
          options: t.options2,
          onOnChange: d,
          onOnClickoutside: h
        }, {
          default: ce(() => [
            zc
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        j(b, {
          open: p(a),
          modelValue: p(i),
          transfer: "",
          type: "month",
          placement: t.placement,
          options: t.options1,
          onOnChange: c,
          onOnClickoutside: h
        }, {
          default: ce(() => [
            P("div", { onClick: f }, [
              j(I, {
                class: "aRoot",
                modelValue: p(s),
                "onUpdate:modelValue": y[0] || (y[0] = ($) => be(s) ? s.value = $ : null),
                readonly: "",
                placeholder: t.placeholder || p(x)("r.selectDate"),
                disabled: t.disabled
              }, {
                suffix: ce(() => [
                  j(T, {
                    type: p(r) && (p(i) || p(o)) && !t.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Sc,
  AsyncCascader: Tc,
  BtTablePage: gc,
  FullPop: ir,
  HeaderBt: Xn,
  Hello: ur,
  IconTxtBtn: cr,
  InputMap: Ac,
  MonthRange: Dc,
  Page404: mr,
  SelectInput: mc,
  ShowHidePanel: Yu,
  ShowHidePanelB: Qu,
  SideMenu: Wu,
  TableIconBtn: Ju,
  TableSearch: tc,
  TableSetting: rc,
  UploadGroup: Nc
}, Symbol.toStringTag, { value: "Module" }));
function ka(e) {
  const n = (...r) => $e.apply(this, r), t = n("r.closePreview"), a = n("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  Ae.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (r) => G(
      "div",
      {
        class: "previewModal",
        id: l
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
              alt: a
            }),
            G(qa, {
              type: "md-close",
              size: 20,
              title: t,
              class: "previewModalDelete",
              onClick() {
                Ae.remove();
              }
            })
          ]
        )
      ]
    )
  }), pe(() => {
    var o, s, u, f, c, d;
    const r = (f = (u = (s = (o = document.getElementById(l)) == null ? void 0 : o.parentElement) == null ? void 0 : s.parentElement) == null ? void 0 : u.parentElement) == null ? void 0 : f.parentElement, i = (d = (c = document.getElementById(l)) == null ? void 0 : c.parentElement) == null ? void 0 : d.nextSibling;
    r && (r.style.height = "0"), r && (r.style.padding = "0"), i && (i.style.display = "none");
  }, 10);
}
let Je = !1;
function ja({
  height: e,
  width: n = 416,
  title: t,
  content: a,
  onOk: l,
  onCancel: r,
  okText: i,
  cancelText: o,
  noWarnIcon: s,
  footerAlign: u,
  cancelBt: f = !0
}) {
  const c = (...g) => $e.apply(this, g);
  let v = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", h = O(a) === "String";
  Ae.warning({
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
                  wt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      Je || Ae.remove();
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
                  textAlign: h ? "center" : "left"
                }
              },
              [
                G("i", {
                  class: h && !s ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                G("div", { class: "msgBoxConO" }, a || c("r.info.text"))
              ]
            ),
            G(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: u || "center"
                }
              },
              [
                G(
                  wt,
                  {
                    class: "okBtN",
                    onClick(g) {
                      var y;
                      if (l && typeof l == "function") {
                        const b = l();
                        if (b && O(b) === "Promise") {
                          Je = !0;
                          const T = g && (g.currentTarget || g.target);
                          T && (T.classList.add("ivu-btn-loading"), T.nextSibling.setAttribute("disabled", "disabled"), ((y = T.parentElement) == null ? void 0 : y.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(b).then(() => {
                            Je = !1, Ae.remove();
                          }).catch(() => {
                            Je = !1, Ae.remove();
                          });
                        } else
                          Ae.remove();
                      }
                    }
                  },
                  () => [
                    G("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    G("span", i || c("r.confirm"))
                  ]
                ),
                G(
                  wt,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      Je || (Ae.remove(), O(r) === "Function" && r && r());
                    }
                  },
                  () => o || c("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function Va(e, n, t, a) {
  const l = (...r) => $e.apply(this, r);
  de.call(this, {
    title: e || l("r.info.title"),
    text: n || l("r.info.text"),
    icon: t || "warning",
    onOk: a,
    buttons: [l("r.cancel")]
  });
}
const zn = {
  $fetch: De,
  fullScreenImgByDom: Oe,
  fullScreenImgPreview: ka,
  $swal: de,
  $swalConfirm: Va,
  messageBox: ja,
  setInterval: Ba,
  setTimeout: pe,
  ...Pa
}, Hc = function(e, n = {}) {
  De.init(n.useStore || n.store, e), n.locale && ct.use(n.locale), n.i18n && ct.i18n(n.i18n), n.router && ec(n.router), n.amap && wc(n.amap), n.notRegistryGlobal || (Object.keys(Nn).forEach((t) => {
    e.component(t) || e.component(t, Nn[t]);
  }), Object.keys(zn).forEach((t) => {
    e.config.globalProperties[t] = zn[t];
  })), e.directive("has") || e.directive("has", (t, a) => {
    a.value && !Ca(a.value) && (t.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (t, a) => {
    let l;
    a.arg ? l = t.querySelector("." + a.arg) : l = t.querySelector(".ivu-select-dropdown") || t, l.addEventListener("scroll", function() {
      l.scrollTop > 0 && l.scrollHeight - l.scrollTop <= l.clientHeight && a.value();
    });
  });
}, Gc = ct.use, Wc = ct.i18n, tf = {
  locale: Gc,
  i18n: Wc,
  install: Hc,
  ...Pa,
  ...Ou,
  $fetch: De,
  fullScreenImgByDom: Oe,
  fullScreenImgPreview: ka,
  $swal: de,
  $swalConfirm: Va,
  messageBox: ja,
  setInterval: Ba,
  setTimeout: pe
};
export {
  De as $fetch,
  de as $swal,
  Va as $swalConfirm,
  Sc as AlCascaderMC,
  Tc as AsyncCascader,
  gc as BtTablePage,
  ir as FullPop,
  Xn as HeaderBt,
  ur as Hello,
  cr as IconTxtBtn,
  Ac as InputMap,
  Dc as MonthRange,
  mr as Page404,
  mc as SelectInput,
  Yu as ShowHidePanel,
  Qu as ShowHidePanelB,
  Wu as SideMenu,
  Ju as TableIconBtn,
  tc as TableSearch,
  rc as TableSetting,
  Nc as UploadGroup,
  kt as clearObj,
  Ru as dataFilterOrToUrl,
  Eu as decimalDigitsLimit,
  tf as default,
  xa as downloadFileByFormSubmit,
  _a as downloadFileReaderFile,
  $u as emptyInput,
  Aa as fakeALinkClick,
  ku as fileExport,
  Bu as findCollection,
  gt as findPath,
  Mu as formDataHeadConfig,
  Oe as fullScreenImgByDom,
  ka as fullScreenImgPreview,
  ju as getColumnsKeys,
  it as getFileSrc,
  Yt as getFileTypeByName,
  Lt as getFileTypeIconByName,
  Ta as getStringWidth,
  Ca as hasPermission,
  Iu as htmlDecode,
  xu as htmlEncode,
  Nu as htmlPrint,
  Uu as isEmptyValue,
  st as isImgByFile,
  Oa as isNaN,
  Vu as isNumberValue,
  xe as isValidValue,
  ja as messageBox,
  O as myTypeof,
  Lu as oneOf,
  jt as removeEmptyValue,
  Ba as setInterval,
  pe as setTimeout,
  $a as setValByOption,
  Ma as siblingElems,
  Cu as stopBubbling,
  Fu as stringLength,
  Pu as toFormData,
  wa as toHump,
  Sa as toLine,
  Ia as tooltipManual,
  Et as trimObj
};
//# sourceMappingURL=plugRQw.js.map
