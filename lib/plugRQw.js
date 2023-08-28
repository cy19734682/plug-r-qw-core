import { getCurrentInstance as Nt, defineComponent as J, resolveComponent as G, openBlock as C, createElementBlock as E, normalizeClass as ue, normalizeStyle as Z, createBlock as me, createCommentVNode as ge, renderSlot as _e, ref as W, computed as M, withDirectives as te, unref as g, createElementVNode as P, toDisplayString as Q, createVNode as F, withCtx as Se, createTextVNode as Le, vShow as le, resolveDirective as Gn, h as D, Fragment as se, renderList as Me, onBeforeMount as Fr, watch as et, nextTick as Wn, isRef as xe, onMounted as gt, withModifiers as Nr, mergeProps as qn, onUnmounted as Rr, shallowRef as on } from "vue";
import zr from "deepmerge";
import nt from "sweetalert";
import { Tooltip as Dr, TableColumnConfig as Hr, Radio as Gr, Input as Wr, Modal as we, Icon as qr, Button as wt } from "view-ui-plus";
import { useRouter as Jr, useRoute as Xr } from "vue-router";
import { useI18n as Kr } from "vue-i18n";
import xt from "axios";
import Yr from "ar-cascader";
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
}, Zr = /(%|){([0-9a-zA-Z_]+)}/g;
function Qr() {
  function e(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function n(t, ...r) {
    let l;
    return r.length === 1 && typeof r[0] == "object" && (l = r[0]), (!l || !l.hasOwnProperty) && (l = {}), t === void 0 ? "" : t.replace(Zr, (a, i, o, s) => {
      let u;
      return t[s - 1] === "{" && t[s + a.length] === "}" ? o : (u = e(l, o) ? l[o] : null, u ?? "");
    });
  }
  return n;
}
const ea = Qr();
let st = Jn;
const ta = {
  zh: Jn
};
let sn, un = {}, Y, na = function(e, n) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, n);
  if (Y && Y.global)
    return Y.global.t(e, n);
  if (Y && Y.locale) {
    if (!un[Y.locale] || sn != Y.locale) {
      un[Y.locale] = !0;
      let t = Y.getLocaleMessage(Y.locale) || {}, r = zr(ta[Y.locale], t, { clone: !0 });
      st = r, Y.setLocaleMessage(Y.locale, r), sn = Y.locale;
    }
    return Y.hlang(e, n);
  }
};
const $e = function(e, n) {
  let t = na.apply(this, [e, n]);
  if (t != null)
    return t;
  const r = e.split(".");
  let l = st;
  for (let a = 0, i = r.length; a < i; a++) {
    const o = r[a];
    if (t = l[o], a === i - 1)
      return ea(t, n);
    if (!t)
      return "";
    l = t;
  }
  return "";
}, ra = function(e) {
  st = e || st;
}, aa = function(e) {
  Y = e;
}, ut = {
  use: ra,
  t: $e,
  i18n: aa
};
function x(e, n) {
  var r;
  const t = (r = Nt()) == null ? void 0 : r.appContext.config.globalProperties;
  return $e.apply(t, [e, n]);
}
const Xn = /* @__PURE__ */ J({
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
    return (l, a) => {
      const i = G("Icon");
      return C(), E("div", {
        class: ue({ headerBtCTM: !0, withIconCTM: t.icon || t.withIcon, disabled: t.disabled }),
        style: Z({ color: t.color, borderLeftColor: t.borderColor }),
        onClick: r
      }, [
        t.icon ? (C(), me(i, {
          key: 0,
          size: t.iconSize,
          type: t.icon
        }, null, 8, ["size", "type"])) : ge("", !0),
        _e(l.$slots, "default")
      ], 6);
    };
  }
}), la = { class: "headerTxtAM" }, oa = { class: "contentAM" }, ia = /* @__PURE__ */ J({
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
    let l = W(!1);
    const a = M(() => typeof r.headerFontSize == "number" ? r.headerFontSize + "px" : r.headerFontSize), i = M(() => ({ zIndex: r.zIndex }));
    function o() {
      l.value = !0, t("on-open");
    }
    function s(u) {
      l.value = !1, t("on-close", u === !0);
    }
    return n({
      open: o,
      close: s
    }), (u, f) => te((C(), E("div", {
      class: "fullScreenPopBoxAM",
      style: Z(g(i))
    }, [
      P("div", {
        class: "headerAM",
        style: Z({ color: r.headerColor, backgroundColor: r.headerBg, fontSize: g(a) })
      }, [
        P("span", la, Q(u.title || g(x)("r.title")), 1),
        F(Xn, {
          icon: "md-return-left",
          onClick: s
        }, {
          default: Se(() => [
            Le(Q(g(x)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", oa, [
        _e(u.$slots, "default")
      ])
    ], 4)), [
      [le, g(l)]
    ]);
  }
}), sa = { class: "msg" }, ua = /* @__PURE__ */ J({
  __name: "Hello",
  setup(e) {
    let n = W("Greetings from Ricky.");
    return (t, r) => (C(), E("span", sa, Q(g(n)), 1));
  }
}), ca = /* @__PURE__ */ J({
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
    const t = e, r = M(() => Math.floor(t.size / 17 * 12) + "px");
    function l(a) {
      t.disabled || n("click", a);
    }
    return (a, i) => {
      const o = G("Icon"), s = Gn("has");
      return te((C(), E("div", {
        class: ue(["tabTopBtnsT", { disabled: t.disabled }]),
        onClick: l,
        style: Z({ "font-size": g(r) })
      }, [
        F(o, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"]),
        Le(" " + Q(t.name || g(x)("r.button")), 1)
      ], 6)), [
        [s, a.has]
      ]);
    };
  }
}), fa = { class: "c404K" }, da = /* @__PURE__ */ P("div", { class: "t404" }, "404", -1), pa = { class: "ct404" }, ga = { class: "p404" }, ma = /* @__PURE__ */ J({
  __name: "Page404",
  setup(e) {
    const t = Nt().appContext.config.globalProperties.$router;
    function r() {
      t.go(-1);
    }
    return (l, a) => {
      const i = G("Button");
      return C(), E("div", fa, [
        da,
        P("div", pa, "UH OH! " + Q(g(x)("r.pageNotFound")), 1),
        P("div", ga, Q(g(x)("r.notFoundMsg")), 1),
        F(i, {
          class: "bt404",
          onClick: r
        }, {
          default: Se(() => [
            Le(Q(g(x)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var ha = typeof global == "object" && global && global.Object === Object && global;
const Kn = ha;
var ba = typeof self == "object" && self && self.Object === Object && self, ya = Kn || ba || Function("return this")();
const ce = ya;
var va = ce.Symbol;
const Ie = va;
var Yn = Object.prototype, wa = Yn.hasOwnProperty, _a = Yn.toString, qe = Ie ? Ie.toStringTag : void 0;
function Aa(e) {
  var n = wa.call(e, qe), t = e[qe];
  try {
    e[qe] = void 0;
    var r = !0;
  } catch {
  }
  var l = _a.call(e);
  return r && (n ? e[qe] = t : delete e[qe]), l;
}
var Ta = Object.prototype, Sa = Ta.toString;
function xa(e) {
  return Sa.call(e);
}
var Ia = "[object Null]", $a = "[object Undefined]", cn = Ie ? Ie.toStringTag : void 0;
function pe(e) {
  return e == null ? e === void 0 ? $a : Ia : cn && cn in Object(e) ? Aa(e) : xa(e);
}
function ie(e) {
  return e != null && typeof e == "object";
}
var Ca = "[object Symbol]";
function Oa(e) {
  return typeof e == "symbol" || ie(e) && pe(e) == Ca;
}
var Ma = Array.isArray;
const Pe = Ma;
var Pa = /\s/;
function Ba(e) {
  for (var n = e.length; n-- && Pa.test(e.charAt(n)); )
    ;
  return n;
}
var La = /^\s+/;
function Ea(e) {
  return e && e.slice(0, Ba(e) + 1).replace(La, "");
}
function be(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var fn = 0 / 0, ja = /^[-+]0x[0-9a-f]+$/i, ka = /^0b[01]+$/i, Va = /^0o[0-7]+$/i, Ua = parseInt;
function It(e) {
  if (typeof e == "number")
    return e;
  if (Oa(e))
    return fn;
  if (be(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = be(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ea(e);
  var t = ka.test(e);
  return t || Va.test(e) ? Ua(e.slice(2), t ? 2 : 8) : ja.test(e) ? fn : +e;
}
var dn = 1 / 0, Fa = 17976931348623157e292;
function Na(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = It(e), e === dn || e === -dn) {
    var n = e < 0 ? -1 : 1;
    return n * Fa;
  }
  return e === e ? e : 0;
}
function Ra(e) {
  var n = Na(e), t = n % 1;
  return n === n ? t ? n - t : n : 0;
}
var za = "[object AsyncFunction]", Da = "[object Function]", Ha = "[object GeneratorFunction]", Ga = "[object Proxy]";
function Rt(e) {
  if (!be(e))
    return !1;
  var n = pe(e);
  return n == Da || n == Ha || n == za || n == Ga;
}
var Wa = ce["__core-js_shared__"];
const _t = Wa;
var pn = function() {
  var e = /[^.]+$/.exec(_t && _t.keys && _t.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qa(e) {
  return !!pn && pn in e;
}
var Ja = Function.prototype, Xa = Ja.toString;
function Ee(e) {
  if (e != null) {
    try {
      return Xa.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ka = /[\\^$.*+?()[\]{}|]/g, Ya = /^\[object .+?Constructor\]$/, Za = Function.prototype, Qa = Object.prototype, el = Za.toString, tl = Qa.hasOwnProperty, nl = RegExp(
  "^" + el.call(tl).replace(Ka, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rl(e) {
  if (!be(e) || qa(e))
    return !1;
  var n = Rt(e) ? nl : Ya;
  return n.test(Ee(e));
}
function al(e, n) {
  return e == null ? void 0 : e[n];
}
function je(e, n) {
  var t = al(e, n);
  return rl(t) ? t : void 0;
}
var ll = je(ce, "WeakMap");
const $t = ll;
var gn = Object.create, ol = function() {
  function e() {
  }
  return function(n) {
    if (!be(n))
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
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
var ul = function() {
  try {
    var e = je(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const mn = ul;
function cl(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r && n(e[t], t, e) !== !1; )
    ;
  return e;
}
function fl(e, n, t, r) {
  for (var l = e.length, a = t + (r ? 1 : -1); r ? a-- : ++a < l; )
    if (n(e[a], a, e))
      return a;
  return -1;
}
function dl(e) {
  return e !== e;
}
function pl(e, n, t) {
  for (var r = t - 1, l = e.length; ++r < l; )
    if (e[r] === n)
      return r;
  return -1;
}
function gl(e, n, t) {
  return n === n ? pl(e, n, t) : fl(e, dl, t);
}
var ml = 9007199254740991, hl = /^(?:0|[1-9]\d*)$/;
function bl(e, n) {
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
var yl = Object.prototype, vl = yl.hasOwnProperty;
function Qn(e, n, t) {
  var r = e[n];
  (!(vl.call(e, n) && zt(r, t)) || t === void 0 && !(n in e)) && Zn(e, n, t);
}
function mt(e, n, t, r) {
  var l = !t;
  t || (t = {});
  for (var a = -1, i = n.length; ++a < i; ) {
    var o = n[a], s = r ? r(t[o], e[o], o, t, e) : void 0;
    s === void 0 && (s = e[o]), l ? Zn(t, o, s) : Qn(t, o, s);
  }
  return t;
}
var wl = 9007199254740991;
function er(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wl;
}
function Dt(e) {
  return e != null && er(e.length) && !Rt(e);
}
var _l = Object.prototype;
function ht(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || _l;
  return e === t;
}
function Al(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var Tl = "[object Arguments]";
function hn(e) {
  return ie(e) && pe(e) == Tl;
}
var tr = Object.prototype, Sl = tr.hasOwnProperty, xl = tr.propertyIsEnumerable, Il = hn(function() {
  return arguments;
}()) ? hn : function(e) {
  return ie(e) && Sl.call(e, "callee") && !xl.call(e, "callee");
};
const nr = Il;
function $l() {
  return !1;
}
var rr = typeof exports == "object" && exports && !exports.nodeType && exports, bn = rr && typeof module == "object" && module && !module.nodeType && module, Cl = bn && bn.exports === rr, yn = Cl ? ce.Buffer : void 0, Ol = yn ? yn.isBuffer : void 0, Ml = Ol || $l;
const Ke = Ml;
var Pl = "[object Arguments]", Bl = "[object Array]", Ll = "[object Boolean]", El = "[object Date]", jl = "[object Error]", kl = "[object Function]", Vl = "[object Map]", Ul = "[object Number]", Fl = "[object Object]", Nl = "[object RegExp]", Rl = "[object Set]", zl = "[object String]", Dl = "[object WeakMap]", Hl = "[object ArrayBuffer]", Gl = "[object DataView]", Wl = "[object Float32Array]", ql = "[object Float64Array]", Jl = "[object Int8Array]", Xl = "[object Int16Array]", Kl = "[object Int32Array]", Yl = "[object Uint8Array]", Zl = "[object Uint8ClampedArray]", Ql = "[object Uint16Array]", eo = "[object Uint32Array]", R = {};
R[Wl] = R[ql] = R[Jl] = R[Xl] = R[Kl] = R[Yl] = R[Zl] = R[Ql] = R[eo] = !0;
R[Pl] = R[Bl] = R[Hl] = R[Ll] = R[Gl] = R[El] = R[jl] = R[kl] = R[Vl] = R[Ul] = R[Fl] = R[Nl] = R[Rl] = R[zl] = R[Dl] = !1;
function to(e) {
  return ie(e) && er(e.length) && !!R[pe(e)];
}
function Ht(e) {
  return function(n) {
    return e(n);
  };
}
var ar = typeof exports == "object" && exports && !exports.nodeType && exports, Xe = ar && typeof module == "object" && module && !module.nodeType && module, no = Xe && Xe.exports === ar, At = no && Kn.process, ro = function() {
  try {
    var e = Xe && Xe.require && Xe.require("util").types;
    return e || At && At.binding && At.binding("util");
  } catch {
  }
}();
const Re = ro;
var vn = Re && Re.isTypedArray, ao = vn ? Ht(vn) : to;
const Gt = ao;
var lo = Object.prototype, oo = lo.hasOwnProperty;
function lr(e, n) {
  var t = Pe(e), r = !t && nr(e), l = !t && !r && Ke(e), a = !t && !r && !l && Gt(e), i = t || r || l || a, o = i ? Al(e.length, String) : [], s = o.length;
  for (var u in e)
    (n || oo.call(e, u)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    l && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    bl(u, s))) && o.push(u);
  return o;
}
function or(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var io = or(Object.keys, Object);
const so = io;
var uo = Object.prototype, co = uo.hasOwnProperty;
function ir(e) {
  if (!ht(e))
    return so(e);
  var n = [];
  for (var t in Object(e))
    co.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function Wt(e) {
  return Dt(e) ? lr(e) : ir(e);
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
  if (!be(e))
    return fo(e);
  var n = ht(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !go.call(e, r)) || t.push(r);
  return t;
}
function qt(e) {
  return Dt(e) ? lr(e, !0) : mo(e);
}
var ho = je(Object, "create");
const Ye = ho;
function bo() {
  this.__data__ = Ye ? Ye(null) : {}, this.size = 0;
}
function yo(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var vo = "__lodash_hash_undefined__", wo = Object.prototype, _o = wo.hasOwnProperty;
function Ao(e) {
  var n = this.__data__;
  if (Ye) {
    var t = n[e];
    return t === vo ? void 0 : t;
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
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Be.prototype.clear = bo;
Be.prototype.delete = yo;
Be.prototype.get = Ao;
Be.prototype.has = xo;
Be.prototype.set = $o;
function Co() {
  this.__data__ = [], this.size = 0;
}
function bt(e, n) {
  for (var t = e.length; t--; )
    if (zt(e[t][0], n))
      return t;
  return -1;
}
var Oo = Array.prototype, Mo = Oo.splice;
function Po(e) {
  var n = this.__data__, t = bt(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : Mo.call(n, t, 1), --this.size, !0;
}
function Bo(e) {
  var n = this.__data__, t = bt(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Lo(e) {
  return bt(this.__data__, e) > -1;
}
function Eo(e, n) {
  var t = this.__data__, r = bt(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function ye(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
ye.prototype.clear = Co;
ye.prototype.delete = Po;
ye.prototype.get = Bo;
ye.prototype.has = Lo;
ye.prototype.set = Eo;
var jo = je(ce, "Map");
const Ze = jo;
function ko() {
  this.size = 0, this.__data__ = {
    hash: new Be(),
    map: new (Ze || ye)(),
    string: new Be()
  };
}
function Vo(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function yt(e, n) {
  var t = e.__data__;
  return Vo(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Uo(e) {
  var n = yt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Fo(e) {
  return yt(this, e).get(e);
}
function No(e) {
  return yt(this, e).has(e);
}
function Ro(e, n) {
  var t = yt(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function ke(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
ke.prototype.clear = ko;
ke.prototype.delete = Uo;
ke.prototype.get = Fo;
ke.prototype.has = No;
ke.prototype.set = Ro;
function sr(e, n) {
  for (var t = -1, r = n.length, l = e.length; ++t < r; )
    e[l + t] = n[t];
  return e;
}
var zo = or(Object.getPrototypeOf, Object);
const Jt = zo;
var Do = "[object Object]", Ho = Function.prototype, Go = Object.prototype, ur = Ho.toString, Wo = Go.hasOwnProperty, qo = ur.call(Object);
function Fe(e) {
  if (!ie(e) || pe(e) != Do)
    return !1;
  var n = Jt(e);
  if (n === null)
    return !0;
  var t = Wo.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && ur.call(t) == qo;
}
function Jo() {
  this.__data__ = new ye(), this.size = 0;
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
  if (t instanceof ye) {
    var r = t.__data__;
    if (!Ze || r.length < Zo - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new ke(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function he(e) {
  var n = this.__data__ = new ye(e);
  this.size = n.size;
}
he.prototype.clear = Jo;
he.prototype.delete = Xo;
he.prototype.get = Ko;
he.prototype.has = Yo;
he.prototype.set = Qo;
function ei(e, n) {
  return e && mt(n, Wt(n), e);
}
function ti(e, n) {
  return e && mt(n, qt(n), e);
}
var cr = typeof exports == "object" && exports && !exports.nodeType && exports, wn = cr && typeof module == "object" && module && !module.nodeType && module, ni = wn && wn.exports === cr, _n = ni ? ce.Buffer : void 0, An = _n ? _n.allocUnsafe : void 0;
function ri(e, n) {
  if (n)
    return e.slice();
  var t = e.length, r = An ? An(t) : new e.constructor(t);
  return e.copy(r), r;
}
function ai(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, l = 0, a = []; ++t < r; ) {
    var i = e[t];
    n(i, t, e) && (a[l++] = i);
  }
  return a;
}
function fr() {
  return [];
}
var li = Object.prototype, oi = li.propertyIsEnumerable, Tn = Object.getOwnPropertySymbols, ii = Tn ? function(e) {
  return e == null ? [] : (e = Object(e), ai(Tn(e), function(n) {
    return oi.call(e, n);
  }));
} : fr;
const Xt = ii;
function si(e, n) {
  return mt(e, Xt(e), n);
}
var ui = Object.getOwnPropertySymbols, ci = ui ? function(e) {
  for (var n = []; e; )
    sr(n, Xt(e)), e = Jt(e);
  return n;
} : fr;
const dr = ci;
function fi(e, n) {
  return mt(e, dr(e), n);
}
function pr(e, n, t) {
  var r = n(e);
  return Pe(e) ? r : sr(r, t(e));
}
function Ct(e) {
  return pr(e, Wt, Xt);
}
function di(e) {
  return pr(e, qt, dr);
}
var pi = je(ce, "DataView");
const Ot = pi;
var gi = je(ce, "Promise");
const Mt = gi;
var mi = je(ce, "Set");
const Pt = mi;
var Sn = "[object Map]", hi = "[object Object]", xn = "[object Promise]", In = "[object Set]", $n = "[object WeakMap]", Cn = "[object DataView]", bi = Ee(Ot), yi = Ee(Ze), vi = Ee(Mt), wi = Ee(Pt), _i = Ee($t), Ce = pe;
(Ot && Ce(new Ot(new ArrayBuffer(1))) != Cn || Ze && Ce(new Ze()) != Sn || Mt && Ce(Mt.resolve()) != xn || Pt && Ce(new Pt()) != In || $t && Ce(new $t()) != $n) && (Ce = function(e) {
  var n = pe(e), t = n == hi ? e.constructor : void 0, r = t ? Ee(t) : "";
  if (r)
    switch (r) {
      case bi:
        return Cn;
      case yi:
        return Sn;
      case vi:
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
var xi = ce.Uint8Array;
const ct = xi;
function Kt(e) {
  var n = new e.constructor(e.byteLength);
  return new ct(n).set(new ct(e)), n;
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
var Pi = "[object Boolean]", Bi = "[object Date]", Li = "[object Map]", Ei = "[object Number]", ji = "[object RegExp]", ki = "[object Set]", Vi = "[object String]", Ui = "[object Symbol]", Fi = "[object ArrayBuffer]", Ni = "[object DataView]", Ri = "[object Float32Array]", zi = "[object Float64Array]", Di = "[object Int8Array]", Hi = "[object Int16Array]", Gi = "[object Int32Array]", Wi = "[object Uint8Array]", qi = "[object Uint8ClampedArray]", Ji = "[object Uint16Array]", Xi = "[object Uint32Array]";
function Ki(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case Fi:
      return Kt(e);
    case Pi:
    case Bi:
      return new r(+e);
    case Ni:
      return Ii(e, t);
    case Ri:
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
      return new r();
    case Ei:
    case Vi:
      return new r(e);
    case ji:
      return Ci(e);
    case ki:
      return new r();
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
var Pn = Re && Re.isMap, es = Pn ? Ht(Pn) : Qi;
const ts = es;
var ns = "[object Set]";
function rs(e) {
  return ie(e) && ze(e) == ns;
}
var Bn = Re && Re.isSet, as = Bn ? Ht(Bn) : rs;
const ls = as;
var os = 1, is = 2, ss = 4, gr = "[object Arguments]", us = "[object Array]", cs = "[object Boolean]", fs = "[object Date]", ds = "[object Error]", mr = "[object Function]", ps = "[object GeneratorFunction]", gs = "[object Map]", ms = "[object Number]", hr = "[object Object]", hs = "[object RegExp]", bs = "[object Set]", ys = "[object String]", vs = "[object Symbol]", ws = "[object WeakMap]", _s = "[object ArrayBuffer]", As = "[object DataView]", Ts = "[object Float32Array]", Ss = "[object Float64Array]", xs = "[object Int8Array]", Is = "[object Int16Array]", $s = "[object Int32Array]", Cs = "[object Uint8Array]", Os = "[object Uint8ClampedArray]", Ms = "[object Uint16Array]", Ps = "[object Uint32Array]", U = {};
U[gr] = U[us] = U[_s] = U[As] = U[cs] = U[fs] = U[Ts] = U[Ss] = U[xs] = U[Is] = U[$s] = U[gs] = U[ms] = U[hr] = U[hs] = U[bs] = U[ys] = U[vs] = U[Cs] = U[Os] = U[Ms] = U[Ps] = !0;
U[ds] = U[mr] = U[ws] = !1;
function lt(e, n, t, r, l, a) {
  var i, o = n & os, s = n & is, u = n & ss;
  if (t && (i = l ? t(e, r, l, a) : t(e)), i !== void 0)
    return i;
  if (!be(e))
    return e;
  var f = Pe(e);
  if (f) {
    if (i = Si(e), !o)
      return sl(e, i);
  } else {
    var c = ze(e), d = c == mr || c == ps;
    if (Ke(e))
      return ri(e, o);
    if (c == hr || c == gr || d && !l) {
      if (i = s || d ? {} : Yi(e), !o)
        return s ? fi(e, ti(i, e)) : si(e, ei(i, e));
    } else {
      if (!U[c])
        return l ? e : {};
      i = Ki(e, c, o);
    }
  }
  a || (a = new he());
  var b = a.get(e);
  if (b)
    return b;
  a.set(e, i), ls(e) ? e.forEach(function(v) {
    i.add(lt(v, n, t, v, e, a));
  }) : ts(e) && e.forEach(function(v, y) {
    i.set(y, lt(v, n, t, y, e, a));
  });
  var m = u ? s ? di : Ct : s ? qt : Wt, h = f ? void 0 : m(e);
  return cl(h || e, function(v, y) {
    h && (y = v, v = e[y]), Qn(i, y, lt(v, n, t, y, e, a));
  }), i;
}
var Bs = 1, Ls = 4;
function ne(e) {
  return lt(e, Bs | Ls);
}
var Es = "__lodash_hash_undefined__";
function js(e) {
  return this.__data__.set(e, Es), this;
}
function ks(e) {
  return this.__data__.has(e);
}
function ft(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new ke(); ++n < t; )
    this.add(e[n]);
}
ft.prototype.add = ft.prototype.push = js;
ft.prototype.has = ks;
function Vs(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function Us(e, n) {
  return e.has(n);
}
var Fs = 1, Ns = 2;
function br(e, n, t, r, l, a) {
  var i = t & Fs, o = e.length, s = n.length;
  if (o != s && !(i && s > o))
    return !1;
  var u = a.get(e), f = a.get(n);
  if (u && f)
    return u == n && f == e;
  var c = -1, d = !0, b = t & Ns ? new ft() : void 0;
  for (a.set(e, n), a.set(n, e); ++c < o; ) {
    var m = e[c], h = n[c];
    if (r)
      var v = i ? r(h, m, c, n, e, a) : r(m, h, c, e, n, a);
    if (v !== void 0) {
      if (v)
        continue;
      d = !1;
      break;
    }
    if (b) {
      if (!Vs(n, function(y, T) {
        if (!Us(b, T) && (m === y || l(m, y, t, r, a)))
          return b.push(T);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === h || l(m, h, t, r, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(n), d;
}
function Rs(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r, l) {
    t[++n] = [l, r];
  }), t;
}
function zs(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r) {
    t[++n] = r;
  }), t;
}
var Ds = 1, Hs = 2, Gs = "[object Boolean]", Ws = "[object Date]", qs = "[object Error]", Js = "[object Map]", Xs = "[object Number]", Ks = "[object RegExp]", Ys = "[object Set]", Zs = "[object String]", Qs = "[object Symbol]", eu = "[object ArrayBuffer]", tu = "[object DataView]", Ln = Ie ? Ie.prototype : void 0, Tt = Ln ? Ln.valueOf : void 0;
function nu(e, n, t, r, l, a, i) {
  switch (t) {
    case tu:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case eu:
      return !(e.byteLength != n.byteLength || !a(new ct(e), new ct(n)));
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
      var o = Rs;
    case Ys:
      var s = r & Ds;
      if (o || (o = zs), e.size != n.size && !s)
        return !1;
      var u = i.get(e);
      if (u)
        return u == n;
      r |= Hs, i.set(e, n);
      var f = br(o(e), o(n), r, l, a, i);
      return i.delete(e), f;
    case Qs:
      if (Tt)
        return Tt.call(e) == Tt.call(n);
  }
  return !1;
}
var ru = 1, au = Object.prototype, lu = au.hasOwnProperty;
function ou(e, n, t, r, l, a) {
  var i = t & ru, o = Ct(e), s = o.length, u = Ct(n), f = u.length;
  if (s != f && !i)
    return !1;
  for (var c = s; c--; ) {
    var d = o[c];
    if (!(i ? d in n : lu.call(n, d)))
      return !1;
  }
  var b = a.get(e), m = a.get(n);
  if (b && m)
    return b == n && m == e;
  var h = !0;
  a.set(e, n), a.set(n, e);
  for (var v = i; ++c < s; ) {
    d = o[c];
    var y = e[d], T = n[d];
    if (r)
      var I = i ? r(T, y, d, n, e, a) : r(y, T, d, e, n, a);
    if (!(I === void 0 ? y === T || l(y, T, t, r, a) : I)) {
      h = !1;
      break;
    }
    v || (v = d == "constructor");
  }
  if (h && !v) {
    var O = e.constructor, N = n.constructor;
    O != N && "constructor" in e && "constructor" in n && !(typeof O == "function" && O instanceof O && typeof N == "function" && N instanceof N) && (h = !1);
  }
  return a.delete(e), a.delete(n), h;
}
var iu = 1, En = "[object Arguments]", jn = "[object Array]", rt = "[object Object]", su = Object.prototype, kn = su.hasOwnProperty;
function uu(e, n, t, r, l, a) {
  var i = Pe(e), o = Pe(n), s = i ? jn : ze(e), u = o ? jn : ze(n);
  s = s == En ? rt : s, u = u == En ? rt : u;
  var f = s == rt, c = u == rt, d = s == u;
  if (d && Ke(e)) {
    if (!Ke(n))
      return !1;
    i = !0, f = !1;
  }
  if (d && !f)
    return a || (a = new he()), i || Gt(e) ? br(e, n, t, r, l, a) : nu(e, n, s, t, r, l, a);
  if (!(t & iu)) {
    var b = f && kn.call(e, "__wrapped__"), m = c && kn.call(n, "__wrapped__");
    if (b || m) {
      var h = b ? e.value() : e, v = m ? n.value() : n;
      return a || (a = new he()), l(h, v, t, r, a);
    }
  }
  return d ? (a || (a = new he()), ou(e, n, t, r, l, a)) : !1;
}
function yr(e, n, t, r, l) {
  return e === n ? !0 : e == null || n == null || !ie(e) && !ie(n) ? e !== e && n !== n : uu(e, n, t, r, yr, l);
}
var cu = function() {
  return ce.Date.now();
};
const St = cu;
var fu = "Expected a function", du = Math.max, pu = Math.min;
function gu(e, n, t) {
  var r, l, a, i, o, s, u = 0, f = !1, c = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(fu);
  n = It(n) || 0, be(t) && (f = !!t.leading, c = "maxWait" in t, a = c ? du(It(t.maxWait) || 0, n) : a, d = "trailing" in t ? !!t.trailing : d);
  function b(_) {
    var k = r, ee = l;
    return r = l = void 0, u = _, i = e.apply(ee, k), i;
  }
  function m(_) {
    return u = _, o = setTimeout(y, n), f ? b(_) : i;
  }
  function h(_) {
    var k = _ - s, ee = _ - u, p = n - k;
    return c ? pu(p, a - ee) : p;
  }
  function v(_) {
    var k = _ - s, ee = _ - u;
    return s === void 0 || k >= n || k < 0 || c && ee >= a;
  }
  function y() {
    var _ = St();
    if (v(_))
      return T(_);
    o = setTimeout(y, h(_));
  }
  function T(_) {
    return o = void 0, d && r ? b(_) : (r = l = void 0, i);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, r = s = l = o = void 0;
  }
  function O() {
    return o === void 0 ? i : T(St());
  }
  function N() {
    var _ = St(), k = v(_);
    if (r = arguments, l = this, s = _, k) {
      if (o === void 0)
        return m(s);
      if (c)
        return clearTimeout(o), o = setTimeout(y, n), b(s);
    }
    return o === void 0 && (o = setTimeout(y, n)), i;
  }
  return N.cancel = I, N.flush = O, N;
}
function dt(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
function Bt(e) {
  return e && e.length ? e[0] : void 0;
}
var mu = "[object String]";
function vr(e) {
  return typeof e == "string" || !Pe(e) && ie(e) && pe(e) == mu;
}
var hu = Math.max;
function Vn(e, n, t) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var l = t == null ? 0 : Ra(t);
  return l < 0 && (l = hu(r + l, 0)), gl(e, n, l);
}
var bu = "[object Boolean]";
function yu(e) {
  return e === !0 || e === !1 || ie(e) && pe(e) == bu;
}
var vu = "[object Map]", wu = "[object Set]", _u = Object.prototype, Au = _u.hasOwnProperty;
function Ae(e) {
  if (e == null)
    return !0;
  if (Dt(e) && (Pe(e) || typeof e == "string" || typeof e.splice == "function" || Ke(e) || Gt(e) || nr(e)))
    return !e.length;
  var n = ze(e);
  if (n == vu || n == wu)
    return !e.size;
  if (ht(e))
    return !ir(e).length;
  for (var t in e)
    if (Au.call(e, t))
      return !1;
  return !0;
}
function Tu(e, n) {
  return yr(e, n);
}
var Su = "[object Number]";
function Ne(e) {
  return typeof e == "number" || ie(e) && pe(e) == Su;
}
function fe(e, n, t) {
  const r = (...l) => $e.apply(this, l);
  return new Promise((l, a) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let i = r("r.confirm"), o = r("r.cancel"), s = !1, u = "swalConfirmBt", f = "swalCancelBt";
      const c = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let d = "";
      e.text && c.test($(e.text)) ? d = "content" : e.text && $(e.text) === "String" && (d = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (o = e.buttons.cancel.text) && (s = !0), e.buttons.cancel.className && (f = e.buttons.cancel.className), e.buttons.confirm.text && (i = e.buttons.confirm.text), e.buttons.confirm.className && (u = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (o = e.buttons[0], s = !0), e.buttons[1] && (i = e.buttons[1]))), nt({
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
      }).then((b) => {
        b && typeof e.onOk == "function" && e.onOk(), l(b);
      }).catch((b) => {
        a(b);
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
      nt({
        title: e,
        [i]: n || "",
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
      }).then((o) => {
        l(o);
      }).catch((o) => {
        a(o);
      });
    } else if (typeof e == "boolean")
      !e && nt.close && nt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function wr(e) {
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
function ot(e) {
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
function it(e) {
  return $(e) === "String" && e.indexOf("image") > -1;
}
function Lt(e) {
  const n = Yt(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function _r(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, Ar(t);
}
function Ar(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
function pt({
  group: e,
  condition: n,
  pathKey: t,
  childKey: r = "children",
  path: l = []
}) {
  if (e && be(e)) {
    if (Rt(n)) {
      if (Fe(e)) {
        let a = e, i = ne(l);
        if (n(a))
          return t && a[t] && i.push(a[t]), i;
        if (a[r] && !Ae(a[r])) {
          t && a[t] && i.push(a[t]);
          let o = pt({
            group: a[r],
            condition: n,
            pathKey: t,
            childKey: r,
            path: i
          });
          if (!Ae(o))
            return o;
        }
      } else if (Array.isArray(e))
        for (let a of e) {
          let i = ne(l);
          if (n(a))
            return t && a[t] ? i.push(a[t]) : i.push(String(e.indexOf(a))), i;
          if (a[r] && a[r].length > 0) {
            t && a[t] ? i.push(a[t]) : i.push(String(e.indexOf(a)));
            let o = pt({
              group: a[r],
              condition: n,
              pathKey: t,
              childKey: r,
              path: i
            });
            if (!Ae(o))
              return o;
          }
        }
    } else if (Array.isArray(e))
      for (let a of e) {
        let i = ne(l);
        if (a === n)
          return i.push(String(e.indexOf(a))), i;
      }
  }
  return [];
}
function Tr(e, n = 12) {
  if ($(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const r = t.clientWidth;
    return document.body.removeChild(t), r;
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
  downloadFileReaderFile: _r,
  emptyInput: $u,
  fakeALinkClick: Ar,
  findPath: pt,
  getFileSrc: ot,
  getFileTypeByName: Yt,
  getFileTypeIconByName: Lt,
  getStringWidth: Tr,
  htmlDecode: Iu,
  htmlEncode: xu,
  isImgByFile: it,
  stopBubbling: Cu,
  toHump: wr
}, Symbol.toStringTag, { value: "Module" }));
function $(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function Sr(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Et(e) {
  let n = $(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = $(e[t]);
        r === "String" ? e[t] = e[t].trim() : (r === "Object" || r === "Array") && Et(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, r = e.length; t < r; t++) {
      let l = $(e[t]);
      l === "String" ? e[t] = e[t].trim() : (l === "Array" || l === "Object") && Et(e[t]);
    }
  return e;
}
function jt(e, n = []) {
  if ($(e) === "Array")
    return e.forEach((t, r) => {
      switch ($(t)) {
        case "Array":
        case "Object":
          jt(t);
          break;
        default:
          e[r] = null;
      }
    }), e;
  if ($(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = !0;
        for (let l of n)
          if (l === t) {
            r = !1;
            break;
          }
        if (r)
          switch ($(e[t])) {
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
  let r, l = "notFoundC", a = function(i, o) {
    if (Array.isArray(i)) {
      if ($(o) === "Function" && o(i))
        return l = i, [];
      for (let s of i) {
        if (l !== "notFoundC")
          break;
        if ($(o) === "Function" && o(s) || s === o)
          return l = s, [i.indexOf(s)];
        if ($(s) === "Array" || $(s) === "Object") {
          let u = a(s, o);
          if (u !== void 0)
            return [i.indexOf(s), ...u];
        }
      }
    } else if ($(i) === "Object") {
      if ($(o) === "Function" && o(i))
        return l = i, [];
      for (let s in i) {
        if (l !== "notFoundC")
          break;
        if (i.hasOwnProperty(s)) {
          if ($(o) === "Function" && o(s) || i[s] === o)
            return l = i[s], [s];
          if ($(i[s]) === "Object" || $(i[s]) === "Array") {
            let u = a(i[s], o);
            if (u !== void 0)
              return [s, ...u];
          }
        }
      }
    }
  };
  return r = a(e, n), t ? r || !1 : l === "notFoundC" ? !1 : l;
}
function Lu(e, n) {
  for (let t = 0, r = n.length; t < r; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function Eu(e, n = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`), r = e && String(e) || "";
  return t.test(r) ? Number(r.replace(t, "$1")) : e;
}
function xr(e, n = {}, t = "get") {
  let r = document.createElement("form"), l = document.getElementsByTagName("body")[0];
  l.appendChild(r), r.setAttribute("style", "display:none"), r.setAttribute("target", ""), r.setAttribute("method", t);
  let a = e;
  if (window && window.hasOwnProperty("g")) {
    let i = Object.keys(window.g).filter((o) => o.indexOf("URL") > -1).map((o) => o.replace("URL", ""));
    for (let o of i) {
      let s = new RegExp("^/" + o + "(?=/.*$)", "i");
      if (s.test(e) && window.g[o + "URL"]) {
        a = window.g[o + "URL"] + e.replace(s, "");
        break;
      }
    }
  }
  if (r.setAttribute("action", a), Fe(n)) {
    for (let o in n)
      if (n.hasOwnProperty(o) && (n[o] || n[o] === 0 || n[o] === !1 || n[o] === "")) {
        let s = document.createElement("input");
        s.setAttribute("type", "hidden"), s.setAttribute("name", o), s.setAttribute("value", n[o]), r.appendChild(s);
      }
    r.submit();
    let i = setTimeout(() => {
      l.removeChild(r), clearTimeout(i), i = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function ju(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    fe.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  xr(e, n, t);
}
function ku(e, n, t = !1) {
  let r;
  if (e && $(n) === "Array") {
    let l = localStorage.getItem(e);
    if (l) {
      let a = JSON.parse(decodeURI(l));
      r = n.filter((i) => i.key && a.indexOf(i.title) !== -1).map((i) => i.key);
    } else
      r = n.map((a) => a.key);
  } else
    r = [];
  return t || (r = String(r)), r;
}
function Te(e) {
  return e != null && e !== "";
}
function Vu(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function Ir(e, n = !1, t = "") {
  return function(r, l) {
    let a;
    if (Array.isArray(e)) {
      let s = [];
      for (let u of e)
        Te(l.row[u]) && s.push(l.row[u]);
      a = s.join(t);
    } else
      typeof e == "function" ? a = e(l) : a = l.row[e];
    let i = Tr(a), o = l.column._width;
    return a && i > o ? D(
      Dr,
      {
        style: {
          width: "100%"
        },
        content: a,
        maxWidth: o * 2
      },
      () => D(
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
    ) : D("span", n && !Te(a) ? "--" : a);
  };
}
function Uu(e) {
  if (Fe(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && Te(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (Te(n))
        return !1;
    return !0;
  }
  return !Te(e);
}
function Fu(e) {
  return $(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : $(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function $r({
  group: e,
  condition: n,
  key: t,
  val: r,
  childKey: l = "children"
}) {
  if ($(e) !== "Array" || $(n) !== "Function" || $(t) !== "String" || $(l) !== "String")
    return !1;
  e.forEach((a) => {
    n(a) && ($(r) === "Function" ? a[t] = r(a[t]) : a[t] = r), $(a[l]) === "Array" && a[l].length > 0 && $r({
      group: a[l],
      condition: n,
      key: t,
      val: r,
      childKey: l
    });
  });
}
function Cr(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function Or(e) {
  return $(e) === "Number" && String(e) === "NaN";
}
function Nu(e, n = !1, t = !1) {
  if ($(e) !== "Object")
    return e;
  let r = Object.assign(e, {}), l = "";
  for (let a in r)
    if (r.hasOwnProperty(a)) {
      let i = r[a];
      i === void 0 || i === "" || $(i) === "String" && i.trim() === "" || i === null || Or(i) ? t ? n ? l += a + "=&" : r[a] = "" : delete r[a] : n && (l += a + "=" + i + "&");
    }
  return n ? l.length > 0 ? l.substring(0, l.length - 1) : "" : r;
}
function kt(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || Fe(t) ? n.push(kt(t)) : Te(t) && n.push(t);
  } else if (Fe(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || Fe(e[t]) ? n[t] = kt(e[t]) : Te(e[t]) && (n[t] = e[t]));
  return n;
}
function Ru(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function Mr(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: jt,
  dataFilterOrToUrl: Nu,
  decimalDigitsLimit: Eu,
  downloadFileByFormSubmit: xr,
  fileExport: ju,
  findCollection: Bu,
  formDataHeadConfig: Mu,
  getColumnsKeys: ku,
  hasPermission: Cr,
  htmlPrint: Ru,
  isEmptyValue: Uu,
  isNaN: Or,
  isNumberValue: Vu,
  isValidValue: Te,
  myTypeof: $,
  oneOf: Lu,
  removeEmptyValue: kt,
  setValByOption: $r,
  siblingElems: Mr,
  stringLength: Fu,
  toFormData: Pu,
  toLine: Sr,
  tooltipManual: Ir,
  trimObj: Et
}, Symbol.toStringTag, { value: "Module" })), zu = { class: "groupBoxRP" }, Du = ["onClick"], Hu = /* @__PURE__ */ J({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const n = e, t = Jr();
    function r(a) {
      return a.path === n.pathName ? "active" : "";
    }
    function l(a, i) {
      a.preventDefault();
      let o = a.target;
      if (!i.children && !o.classList.contains("active")) {
        t.push(i.path);
        return;
      }
      let s = o.parentNode, u = Mr(s);
      for (let f of u) {
        f.classList.remove("open");
        const c = f.querySelectorAll(".open");
        for (let d of c)
          d.classList.remove("open");
      }
      s.classList.toggle("open");
    }
    return (a, i) => {
      const o = G("sideMenuGroup", !0);
      return C(), E("ul", zu, [
        (C(!0), E(se, null, Me(n.data, (s, u) => (C(), E("li", {
          class: ue({ dropItemRP: s.children }),
          key: s.path + u
        }, [
          P("div", {
            class: ue(["menuTxtR", r(s)]),
            onClick: (f) => l(f, s),
            style: Z({ paddingLeft: s.level * 20 + "px" })
          }, Q(s.name || "-- no name --"), 15, Du),
          s.children ? (C(), me(o, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : ge("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Gu = { class: "menuListR" }, Wu = /* @__PURE__ */ J({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: n }) {
    const t = e, r = Xr(), l = W(!0), a = W(), i = W(), o = M(() => l.value ? x("r.hideMenu") : x("r.showMenu")), s = M(() => l.value ? "ios-arrow-back" : "ios-arrow-forward");
    Fr(() => {
      let c = localStorage.getItem("menuDisplayR") || "";
      c !== "" ? l.value = JSON.parse(c) : (l.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), et(
      () => r.path,
      (c) => {
        a.value = c, Wn(f);
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
      const b = G("Icon");
      return C(), E("div", {
        ref_key: "menuRef",
        ref: i,
        class: "menuBoxRP"
      }, [
        te(P("div", Gu, [
          F(Hu, {
            data: t.data,
            pathName: g(a)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [le, g(l)]
        ]),
        F(b, {
          type: g(s),
          size: 25,
          class: ue([{ showIco: !g(l) }, "menuShowHideIco"]),
          title: g(o),
          onClick: u,
          color: g(l) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), qu = ["title"], Ju = /* @__PURE__ */ J({
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
    function r(l) {
      t.disabled || n("click", l);
    }
    return (l, a) => {
      const i = G("Icon"), o = Gn("has");
      return te((C(), E("div", {
        class: ue(["tableBtnsG", { disabled: t.disabled }]),
        onClick: r,
        title: t.title || g(x)("r.button")
      }, [
        F(i, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"])
      ], 10, qu)), [
        [o, t.has]
      ]);
    };
  }
}), Xu = { class: "contentX" }, Ku = { class: "arrowA" }, Yu = /* @__PURE__ */ J({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const n = e, t = W(!0), r = M(() => t ? "background:" + n.bg || "transparent" : "");
    return (l, a) => {
      const i = G("Icon");
      return C(), E("div", {
        style: Z(g(r))
      }, [
        te(P("div", Xu, [
          _e(l.$slots, "default")
        ], 512), [
          [le, g(t)]
        ]),
        P("div", Ku, [
          P("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (o) => t.value = !g(t))
          }, [
            F(i, {
              type: g(t) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Zu = { class: "contentZ" }, Qu = /* @__PURE__ */ J({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, r = M({
      get() {
        return t.modelValue;
      },
      set(a) {
        n("update:modelValue", a);
      }
    }), l = M(() => r.value ? "background:" + t.bg : "");
    return (a, i) => (C(), E("div", {
      style: Z(g(l))
    }, [
      te(P("div", Zu, [
        _e(a.$slots, "default")
      ], 512), [
        [le, g(r)]
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
}, de = function(e, n) {
  let t = window.setTimeout(e, n);
  return Vt.push(t), t;
}, Br = function(e, n) {
  let t = window.setInterval(e, n);
  return Ut.push(t), t;
}, tc = /* @__PURE__ */ J({
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
    const l = M({
      get() {
        return t.modelValue;
      },
      set(s) {
        n("update:modelValue", s);
      }
    }), a = M({
      get() {
        return t.open;
      },
      set(s) {
        n("on-toggle", s);
      }
    }), i = M(() => a.value ? "ios-arrow-up" : "ios-arrow-down");
    function o() {
      r || (r = !0, n("on-search", l.value), de(() => {
        r = !1;
      }, 2e3));
    }
    return (s, u) => {
      const f = G("Input"), c = G("icon");
      return C(), E("div", {
        class: "tableSearchV",
        style: Z({ position: t.fixed ? "fixed" : "absolute", right: t.right, top: t.top })
      }, [
        _e(s.$slots, "default", {}, () => [
          F(f, {
            modelValue: g(l),
            "onUpdate:modelValue": u[0] || (u[0] = (d) => xe(l) ? l.value = d : null),
            style: Z({ width: t.width }),
            search: "",
            onOnSearch: o,
            class: "searchInputC",
            placeholder: t.placeholder || g(x)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        te(P("span", {
          class: "sbt",
          onClick: u[1] || (u[1] = (d) => a.value = !g(a)),
          style: Z({ color: t.btnColor })
        }, [
          F(c, {
            type: g(i),
            color: t.btnColor
          }, null, 8, ["type", "color"]),
          Le(Q(g(x)("r.adSearch")), 1)
        ], 4), [
          [le, t.showBtn]
        ])
      ], 4);
    };
  }
}), nc = { class: "tabSetF" }, rc = { class: "topCheck" }, ac = /* @__PURE__ */ J({
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
    const t = e, r = W(!0), l = W(!1), a = W(!1), i = W([]), o = M(() => {
      let h = x("r.unknown");
      return t.modelValue.length > i.value.length && (i.value = ne(t.modelValue)), i.value.map((v) => {
        let y = { label: v && v.title || h };
        return v && v.disableShowSetting && (y.disabled = !0), y;
      });
    }), s = M(() => o.value.filter((h) => h.disabled)), u = M({
      get() {
        return t.modelValue.map((h) => h && h.title || x("r.unknown"));
      },
      set(h) {
        let v = i.value.filter((y) => {
          for (let T of h)
            if (T === y.title)
              return !0;
          return !1;
        });
        n("update:modelValue", v);
      }
    }), { locale: f } = Kr();
    gt(() => {
      let h = x("r.unknown"), v;
      f.value ? v = localStorage.getItem(t.sKey + "_" + f.value) : v = localStorage.getItem(t.sKey), v ? u.value = JSON.parse(decodeURI(v)) : t.defaultCheck && (u.value = t.modelValue.filter((y) => y.showSettingCheck).map((y) => y && y.title || h));
    });
    function c(h) {
      h.length === o.value.length ? (r.value = !1, l.value = !0) : h.length > s.value.length ? (r.value = !0, l.value = !1) : (r.value = !1, l.value = !1);
    }
    et(() => u.value, c, {
      immediate: !0,
      deep: !0
    });
    function d() {
      a.value || (a.value = !0);
    }
    function b() {
      f.value ? localStorage.setItem(t.sKey + "_" + f.value, encodeURI(JSON.stringify(u.value))) : localStorage.setItem(t.sKey, encodeURI(JSON.stringify(u.value))), a.value = !1;
    }
    function m() {
      r.value ? l.value = !1 : l.value = !l.value, r.value = !1, l.value ? u.value = o.value.map((h) => h.label) : u.value = s.value.map((h) => h.label);
    }
    return (h, v) => {
      const y = G("Icon"), T = G("Checkbox"), I = G("CheckboxGroup");
      return C(), E("div", nc, [
        P("div", {
          class: "tabSetBt",
          onClick: d
        }, [
          F(y, {
            type: "md-settings",
            size: "17"
          }),
          P("span", null, Q(g(x)("r.tabSetting")), 1)
        ]),
        te(P("div", {
          class: "tabSetCard",
          style: Z({ top: t.top, right: t.right, width: t.width, backgroundColor: t.bg })
        }, [
          P("div", rc, [
            F(T, {
              indeterminate: g(r),
              modelValue: g(l),
              "onUpdate:modelValue": v[0] || (v[0] = (O) => xe(l) ? l.value = O : null),
              onClick: Nr(m, ["prevent"])
            }, {
              default: Se(() => [
                Le(Q(g(x)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            P("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: b
            }, Q(g(x)("r.confirm")), 1)
          ]),
          F(I, {
            modelValue: g(u),
            "onUpdate:modelValue": v[1] || (v[1] = (O) => xe(u) ? u.value = O : null)
          }, {
            default: Se(() => [
              (C(!0), E(se, null, Me(g(o), (O, N) => (C(), me(T, {
                class: "setItem",
                label: O && O.label,
                key: "tabSet_" + t.sKey + N,
                disabled: O && O.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [le, g(a)]
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
function Lr(e) {
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
function Nn() {
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
    onOk: Nn
  }), e),
  (e) => (Ue && e && e.response && (e.response.status === 403 || e.response.status === 409) && Ue.messageBox({
    content: Fn("r.http." + e.response.status),
    onOk: Nn
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function ve(e, n, t, r) {
  r && r.spin && Lr(!1);
  let l = !0, a = e && e.data;
  if (a) {
    t = t || [];
    for (let i of t)
      a = a[i], l = l && a;
    return l ? a : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function ic(e, n, t, r, l, a, i) {
  return new Promise((o, s) => {
    switch (e) {
      case "get":
        oe.get(n, { params: t }).then((f) => {
          let c = ve(f, r, l, a);
          c ? o(c) : s(f);
        }).catch((f) => {
          ve({}, r, l, a), s(f);
        });
        break;
      case "delete":
        let u = i ? "params" : "data";
        oe.delete(n, { [u]: t }).then((f) => {
          let c = ve(f, r, l, a);
          c ? o(c) : s(f);
        }).catch((f) => {
          ve({}, r, l, a), s(f);
        });
        break;
      case "post":
        oe.post(n, t, a).then((f) => {
          let c = ve(f, r, l, a);
          c ? o(c) : s(f);
        }).catch((f) => {
          ve({}, r, l, a), s(f);
        });
        break;
      case "put":
        oe.put(n, t, a).then((f) => {
          let c = ve(f, r, l, a);
          c ? o(c) : s(f);
        }).catch((f) => {
          ve({}, r, l, a), s(f);
        });
        break;
    }
  });
}
function at(e, n, t = {}, r, l, a, i) {
  return new Promise((o, s) => {
    if (n) {
      a && a.spin && Lr(!0);
      let u = n;
      if (window && window.hasOwnProperty("g")) {
        const d = window.g;
        let b = Object.keys(d).filter((m) => m.indexOf("URL") > -1).map((m) => m.replace("URL", ""));
        for (let m of b) {
          let h = new RegExp("^/" + m + "(?=/.*$)", "i");
          if (h.test(n) && d[m + "URL"]) {
            u = d[m + "URL"] + n.replace(h, "");
            break;
          }
        }
      }
      let f;
      if (a && a.headers && a.headers["Content-Type"] === "multipart/form-data")
        f = t;
      else if (t && !Ae(t))
        if (Array.isArray(t)) {
          f = [];
          for (let d of t)
            (d || d === 0 || d === !1 || d === "" && a && !a.noEmptyStr) && f.push(d);
        } else {
          f = {};
          for (let d in t)
            t.hasOwnProperty(d) && (t[d] || t[d] === 0 || t[d] === !1 || t[d] === "" && a && !a.noEmptyStr) && (f[d] = t[d]);
        }
      let c = e.toLowerCase();
      ic(c, u, f, r, l, a, i).then((d) => {
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
  post(e, n, t, r, l) {
    return new Promise((a, i) => {
      at("post", e, n, t, r, l).then((o) => {
        a(o);
      }).catch((o) => {
        i(o);
      });
    });
  },
  put(e, n, t, r, l) {
    return new Promise((a, i) => {
      at("put", e, n, t, r, l).then((o) => {
        a(o);
      }).catch((o) => {
        i(o);
      });
    });
  },
  get(e, n, t, r, l) {
    return new Promise((a, i) => {
      at("get", e, n, t, r, l).then((o) => {
        a(o);
      }).catch((o) => {
        i(o);
      });
    });
  },
  delete(e, n, t, r, l, a = !0) {
    return new Promise((i, o) => {
      at("delete", e, n, t, r, l, a).then((s) => {
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
}, dc = { class: "pageContainer" }, pc = 300, gc = /* @__PURE__ */ J({
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
    const r = e, { globalProperties: l } = Nt().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Hr });
    const i = l.pageSizes || [10, 20, 30, 40], o = W(r.data), s = W(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || r.pageSize
    ), u = W(1), f = W(0);
    let c = [], d, b, m = r.orderKey, h = r.orderDefault;
    const v = M(() => {
      for (let A of r.columns)
        if (A.fixed)
          return !0;
      return !1;
    }), y = M(() => r.selectionFixed || v.value), T = M(() => {
      let A = {
        ...r.searchData,
        current: u.value,
        size: s.value
      };
      return r.sortable === "custom" && (r.orderKeyFormat === "underline" ? A[h] = Sr(m) : r.orderKeyFormat === "camelcase" && (A[h] = wr(m))), A;
    }), I = M(() => {
      let A = r.columns.filter((w) => w.type !== "selection");
      if (r.selection || r.radio) {
        let w;
        r.radio ? w = {
          title: " ",
          width: 65,
          render: (re, K) => D(Gr, {
            value: K.row.btChecked
          })
        } : w = {
          type: "selection",
          width: 60
        }, r.selectionFixed && (w.fixed = r.selectionFixed), A.unshift(w);
      }
      return A.forEach((w) => {
        r.sortable === "custom" ? w.key && w.sortable !== !0 && w.sortable !== !1 && (w.sortable = "custom") : w.sortable = !1, w.align || (w.align = "center");
      }), r.tableEmptyTdHandle && A.forEach((w) => {
        w.key && w.render === void 0 && (w.tooltip ? w.render = Ir(w.key, !0) : w.render = (re, K) => {
          let X = K.row[w.key];
          return re("span", X === "" || X === null || X === void 0 ? "--" : X);
        });
      }), A;
    }), O = M({
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
    }), N = M(() => c.map((A) => A.id)), _ = M(() => c.map((A) => A.btKey)), k = W();
    et(() => r.searchData, ee, { deep: !0 });
    function ee() {
      u.value = 1, We();
    }
    function p() {
      r.initData && We();
    }
    function S(A) {
      o.value.unshift(ne(A)), de(() => {
        var w;
        (w = k.value) == null || w.clickCurrentRow(0);
      }, 100);
    }
    function L(A, w, re) {
      let K = null;
      if (yu(w) && w ? K = b : Ne(w) && (K = w), K !== null) {
        let X = o.value[K];
        for (let j in A)
          A.hasOwnProperty(j) && (X[j] = A[j]);
        re && de(() => {
          var j;
          (j = k.value) == null || j.clickCurrentRow(K);
        }, 10);
      }
    }
    function V(A) {
      o.value.splice(A, 1), de(() => {
        var w;
        (w = k.value) == null || w.clickCurrentRow(0);
      }, 100);
    }
    function q(A, w) {
      var re;
      A.btChecked && r.radio || (r.selection || r.radio) && r.rowClickSelect && ((re = k.value) == null || re.toggleSelect(w));
    }
    function B(A, w) {
      d = w.btKey, b = Number(w.btKey.split("-")[1]), r.radio && (o.value[b].btChecked = !0);
    }
    function z(A) {
      if (r.radio)
        for (let w of O.value)
          w.btKey !== d && (o.value[Number(w.btKey.split("-")[1])].btChecked = !1);
      c = A, t("on-selection-change", A);
    }
    function H() {
      return ne(c);
    }
    function ae(A) {
      u.value = A, We();
    }
    function He(A) {
      s.value = A, localStorage.setItem("btPageSize", String(A)), u.value === 1 && We();
    }
    function Ur({ key: A, order: w }) {
      h === "normal" ? (m = r.orderKey, h = r.orderDefault) : (m = A, h = w), u.value = 1, Ge();
    }
    function tt() {
      var A;
      if (r.radio) {
        if (_.value.length > 0 && O.value.length > 0) {
          let w = _.value[0].split("-")[1];
          O.value[w].btChecked = !1;
        }
      } else
        (A = k.value) == null || A.selectAll(!1);
      c.length > 0 && (c = [], t("on-selection-change", [])), d = null, b = null;
    }
    function vt() {
      o.value = [], tt(), u.value = 1, f.value = 0;
    }
    function Ge(A, w, re) {
      return new Promise((K) => {
        A && (h = A), w && (m = w), r.url ? De.get(r.url, T.value, "", [], { spin: r.getDataLoading }).then((X) => {
          var Zt, Qt, en, tn, nn, rn, an, ln;
          let j;
          re || tt(), typeof r.dataHandler == "function" ? j = r.dataHandler(X) : j = X, j.data ? ((Zt = j.data) != null && Zt.records || ((Qt = j.data) == null ? void 0 : Qt.records) === null ? o.value = ((en = j.data) == null ? void 0 : en.records) || [] : j.data.page ? ((tn = j.data.page) != null && tn.records || ((nn = j.data.page) == null ? void 0 : nn.records) === null) && (o.value = j.data.page.records || []) : j.data.data ? ((rn = j.data.data) != null && rn.records || ((an = j.data.data) == null ? void 0 : an.records) === null) && (o.value = ((ln = j.data.data) == null ? void 0 : ln.records) || []) : o.value = j.data, f.value = j.data.page && j.data.page.total || j.data.data && j.data.data.total || j.data.total || j.total || 0, f.value === 0 && u.value > 1 && o.value && o.value.length === 0 ? u.value = 1 : u.value > 1 && f.value <= (u.value - 1) * s.value && (u.value--, Wn(function() {
            Ge(A, w);
          })), t("on-data-change", j), K(j)) : (console.warn("请求返回数据有误，无法使用"), vt(), t("on-data-change", j));
        }).catch((X) => {
          console.warn(X), tt(), vt(), t("on-data-change", X);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function We(A, w, re) {
      r.radio && (A || r.rowClickNum !== -1) ? Ge(w, re, A).then(() => {
        o.value.length > 0 && de(() => {
          var K, X;
          A ? (K = k.value) == null || K.clickCurrentRow(b || 0) : (X = k.value) == null || X.clickCurrentRow(r.rowClickNum);
        }, 10);
      }) : Ge();
    }
    return gt(p), n({
      selectedIds: N,
      addRow: S,
      setRowData: L,
      deleteRow: V,
      getSelected: H,
      clearSelect: tt,
      clearTableData: vt,
      getTableData: Ge,
      getDataAndClickRow: We
    }), (A, w) => {
      const re = G("Table"), K = G("Page");
      return C(), E("div", sc, [
        te(P("div", uc, [
          _e(A.$slots, "tableSetting"),
          _e(A.$slots, "topMsg"),
          _e(A.$slots, "topBtnGroup")
        ], 512), [
          [le, r.showTopRow]
        ]),
        P("div", {
          class: ue(["tableContainer fullHeight", { noTop: !r.showTopRow, noPage: r.noPage }])
        }, [
          P("div", cc, [
            P("div", fc, [
              F(re, qn({
                ref_key: "tableRef",
                ref: k
              }, A.$attrs, {
                height: g(y) && pc || null,
                class: { noBorderTable: r.noBorderTable, fullHeightTable: !g(y), lightHeadO: r.lightHead },
                columns: g(I),
                data: g(O),
                "highlight-row": r.radio || r.highlightRow,
                onOnSelect: B,
                onOnSelectionChange: z,
                onOnSortChange: Ur,
                onOnRowClick: q
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        te(P("div", dc, [
          F(K, {
            modelValue: g(u),
            "onUpdate:modelValue": w[0] || (w[0] = (X) => xe(u) ? u.value = X : null),
            "page-size-opts": g(i),
            total: g(f),
            "page-size": g(s),
            "show-sizer": "",
            "show-total": "",
            showElevator: !r.noElevator,
            size: r.pageComponentSize,
            onOnChange: ae,
            onOnPageSizeChange: He
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [le, !r.noPage]
        ])
      ], 512);
    };
  }
}), mc = /* @__PURE__ */ J({
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
    const t = e, r = M({
      get() {
        return t.modelValue && t.modelValue.key || null;
      },
      set(u) {
        let f = {
          key: u,
          val: null
        };
        r.value && r.value !== u && (f.beforeKey = r.value), n("update:modelValue", f), n("on-change", f);
      }
    }), l = M({
      get() {
        return t.modelValue && t.modelValue.val || null;
      },
      set(u) {
        n("update:modelValue", {
          key: r.value,
          val: u
        });
      }
    }), a = M(() => ({
      width: t.labelWidth + "px",
      textAlign: t.labelTextAlign
    })), i = M(() => ({ width: t.itemWidth + "px" }));
    function o(u) {
      u && u.target && u.target.value !== void 0 && s({
        key: r.value,
        val: u.target.value
      });
    }
    const s = gu((u) => {
      n("on-change", u);
    }, 500);
    return (u, f) => {
      const c = G("Option"), d = G("Select"), b = G("Input");
      return C(), E("div", null, [
        F(d, {
          modelValue: g(r),
          "onUpdate:modelValue": f[0] || (f[0] = (m) => xe(r) ? r.value = m : null),
          style: Z(g(a)),
          disabled: !!t.disabled,
          transfer: ""
        }, {
          default: Se(() => [
            (C(!0), E(se, null, Me(t.selectOption, (m, h) => (C(), me(c, {
              value: m.val,
              key: "selectInputOp" + m.value + h,
              style: Z({ textAlign: t.labelTextAlign })
            }, {
              default: Se(() => [
                Le(Q(m.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        F(b, {
          modelValue: g(l),
          "onUpdate:modelValue": f[1] || (f[1] = (m) => xe(l) ? l.value = m : null),
          placeholder: t.placeholder || g(x)("r.pInput"),
          style: Z(g(i)),
          clearable: t.clearable,
          disabled: !!t.disabled,
          onOnChange: o
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var hc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(hc, function() {
    function t(c) {
      var d = [];
      return c.AMapUI && d.push(r(c.AMapUI)), c.Loca && d.push(l(c.Loca)), Promise.all(d);
    }
    function r(c) {
      return new Promise(function(d, b) {
        var m = [];
        if (c.plugins)
          for (var h = 0; h < c.plugins.length; h += 1)
            i.AMapUI.plugins.indexOf(c.plugins[h]) == -1 && m.push(c.plugins[h]);
        if (o.AMapUI === a.failed)
          b("前次请求 AMapUI 失败");
        else if (o.AMapUI === a.notload) {
          o.AMapUI = a.loading, i.AMapUI.version = c.version || i.AMapUI.version, h = i.AMapUI.version;
          var v = document.body || document.head, y = document.createElement("script");
          y.type = "text/javascript", y.src = "https://webapi.amap.com/ui/" + h + "/main.js", y.onerror = function(T) {
            o.AMapUI = a.failed, b("请求 AMapUI 失败");
          }, y.onload = function() {
            if (o.AMapUI = a.loaded, m.length)
              window.AMapUI.loadUI(m, function() {
                for (var T = 0, I = m.length; T < I; T++) {
                  var O = m[T].split("/").slice(-1)[0];
                  window.AMapUI[O] = arguments[T];
                }
                for (d(); s.AMapUI.length; )
                  s.AMapUI.splice(0, 1)[0]();
              });
            else
              for (d(); s.AMapUI.length; )
                s.AMapUI.splice(0, 1)[0]();
          }, v.appendChild(y);
        } else
          o.AMapUI === a.loaded ? c.version && c.version !== i.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : m.length ? window.AMapUI.loadUI(m, function() {
            for (var T = 0, I = m.length; T < I; T++) {
              var O = m[T].split("/").slice(-1)[0];
              window.AMapUI[O] = arguments[T];
            }
            d();
          }) : d() : c.version && c.version !== i.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : s.AMapUI.push(function(T) {
            T ? b(T) : m.length ? window.AMapUI.loadUI(m, function() {
              for (var I = 0, O = m.length; I < O; I++) {
                var N = m[I].split("/").slice(-1)[0];
                window.AMapUI[N] = arguments[I];
              }
              d();
            }) : d();
          });
      });
    }
    function l(c) {
      return new Promise(function(d, b) {
        if (o.Loca === a.failed)
          b("前次请求 Loca 失败");
        else if (o.Loca === a.notload) {
          o.Loca = a.loading, i.Loca.version = c.version || i.Loca.version;
          var m = i.Loca.version, h = i.AMap.version.startsWith("2"), v = m.startsWith("2");
          if (h && !v || !h && v)
            b("JSAPI 与 Loca 版本不对应！！");
          else {
            h = i.key, v = document.body || document.head;
            var y = document.createElement("script");
            y.type = "text/javascript", y.src = "https://webapi.amap.com/loca?v=" + m + "&key=" + h, y.onerror = function(T) {
              o.Loca = a.failed, b("请求 AMapUI 失败");
            }, y.onload = function() {
              for (o.Loca = a.loaded, d(); s.Loca.length; )
                s.Loca.splice(0, 1)[0]();
            }, v.appendChild(y);
          }
        } else
          o.Loca === a.loaded ? c.version && c.version !== i.Loca.version ? b("不允许多个版本 Loca 混用") : d() : c.version && c.version !== i.Loca.version ? b("不允许多个版本 Loca 混用") : s.Loca.push(function(T) {
            T ? b(T) : b();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var a;
    (function(c) {
      c.notload = "notload", c.loading = "loading", c.loaded = "loaded", c.failed = "failed";
    })(a || (a = {}));
    var i = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, o = { AMap: a.notload, AMapUI: a.notload, Loca: a.notload }, s = { AMap: [], AMapUI: [], Loca: [] }, u = [], f = function(c) {
      typeof c == "function" && (o.AMap === a.loaded ? c(window.AMap) : u.push(c));
    };
    return { load: function(c) {
      return new Promise(function(d, b) {
        if (o.AMap == a.failed)
          b("");
        else if (o.AMap == a.notload) {
          var m = c.key, h = c.version, v = c.plugins;
          m ? (window.AMap && location.host !== "lbs.amap.com" && b("禁止多种API加载方式混用"), i.key = m, i.AMap.version = h || i.AMap.version, i.AMap.plugins = v || i.AMap.plugins, o.AMap = a.loading, h = document.body || document.head, window.___onAPILoaded = function(T) {
            if (delete window.___onAPILoaded, T)
              o.AMap = a.failed, b(T);
            else
              for (o.AMap = a.loaded, t(c).then(function() {
                d(window.AMap);
              }).catch(b); u.length; )
                u.splice(0, 1)[0]();
          }, v = document.createElement("script"), v.type = "text/javascript", v.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + i.AMap.version + "&key=" + m + "&plugin=" + i.AMap.plugins.join(","), v.onerror = function(T) {
            o.AMap = a.failed, b(T);
          }, h.appendChild(v)) : b("请填写key");
        } else if (o.AMap == a.loaded)
          if (c.key && c.key !== i.key)
            b("多个不一致的 key");
          else if (c.version && c.version !== i.AMap.version)
            b("不允许多个版本 JSAPI 混用");
          else {
            if (m = [], c.plugins)
              for (h = 0; h < c.plugins.length; h += 1)
                i.AMap.plugins.indexOf(c.plugins[h]) == -1 && m.push(c.plugins[h]);
            m.length ? window.AMap.plugin(m, function() {
              t(c).then(function() {
                d(window.AMap);
              }).catch(b);
            }) : t(c).then(function() {
              d(window.AMap);
            }).catch(b);
          }
        else if (c.key && c.key !== i.key)
          b("多个不一致的 key");
        else if (c.version && c.version !== i.AMap.version)
          b("不允许多个版本 JSAPI 混用");
        else {
          var y = [];
          if (c.plugins)
            for (h = 0; h < c.plugins.length; h += 1)
              i.AMap.plugins.indexOf(c.plugins[h]) == -1 && y.push(c.plugins[h]);
          f(function() {
            y.length ? window.AMap.plugin(y, function() {
              t(c).then(function() {
                d(window.AMap);
              }).catch(b);
            }) : t(c).then(function() {
              d(window.AMap);
            }).catch(b);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, i = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, o = {
        AMap: a.notload,
        AMapUI: a.notload,
        Loca: a.notload
      }, s = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(Er);
var yc = Er.exports;
const vc = /* @__PURE__ */ bc(yc);
let Ft = { securityJsCode: "", key: "" };
function wc({ securityJsCode: e, key: n }) {
  Ft.securityJsCode = e, Ft.key = n;
}
function _c(e) {
  return Ft[e];
}
const Ac = /* @__PURE__ */ J({
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
    const t = e, r = M({
      get() {
        let I;
        return t.modelValue ? t.modelValue.name ? I = ne(t.modelValue) : I = {
          ...t.modelValue,
          name: null
        } : I = {
          name: null
        }, I;
      },
      set(I) {
        n("update:modelValue", ne(I));
      }
    }), l = M(() => Ne(t.width) ? t.width + "px" : t.width), a = M(() => Ne(t.height) ? t.height + "px" : t.height ? t.height : Ne(t.width) ? t.width * 0.66 + "px" : "200px"), i = M(() => ({
      width: l.value,
      position: "relative"
    })), o = M(() => ({
      width: l.value,
      height: a.value,
      marginTop: "6px",
      opacity: t.showMap ? 1 : 0,
      position: t.showMap ? "relative" : "absolute",
      top: t.showMap ? 0 : "-10000px"
    }));
    et(
      () => t.modelValue,
      (I) => {
        if (I && I.lng && I.lat) {
          if (!m || !h)
            return;
          y({
            lng: I.lng,
            lat: I.lat,
            name: I.name
          });
        }
      }
    );
    const s = "mapId" + Math.floor(Math.random() * 1e9), u = W(null), f = W(null);
    let c;
    function d() {
      f.value && f.value.clientHeight < 10 || !f.value ? de(d, 300) : de(v, 100);
    }
    let b, m, h;
    function v() {
      vc.load({
        key: _c("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((I) => {
        b = I, m = new b.Map(s).on("complete", () => {
          var O, N;
          h = new b.Geocoder(), t.modelValue && t.modelValue.lng && t.modelValue.lat && y({
            lng: t.modelValue.lng,
            lat: t.modelValue.lat,
            name: t.modelValue.name
          }), new b.AutoComplete({
            input: (N = (O = u.value) == null ? void 0 : O.$el) == null ? void 0 : N.children[1]
          }).on("select", (_) => {
            _ && _.poi && _.poi.name && (_.poi.location && _.poi.location.lng && _.poi.location.lat ? (y({
              name: _.poi.name,
              lng: _.poi.location.lng,
              lat: _.poi.location.lat
            }), r.value = {
              name: _.poi.name,
              lng: _.poi.location.lng,
              lat: _.poi.location.lat
            }) : m.setCity(_.poi.name, () => {
              let k = m.getCenter();
              y({
                name: _.poi.name,
                lng: k.lng,
                lat: k.lat
              }), r.value = {
                name: _.poi.name,
                lng: k.lng,
                lat: k.lat
              };
            })), n("on-change", r.value);
          }), m.on("hotspotclick", (_) => {
            y({
              name: _.name,
              lng: _.lnglat.lng,
              lat: _.lnglat.lat
            }), r.value = {
              name: _.name,
              lng: _.lnglat.lng,
              lat: _.lnglat.lat
            };
          });
        });
      });
    }
    function y({ lng: I, lat: O, name: N }) {
      m.clearMap();
      let _ = new b.LngLat(I, O), k = new b.Marker({
        map: m,
        position: _,
        draggable: !0
      });
      m.add(k), T(I, O), k.on("dragend", () => {
        let ee = k.getPosition();
        r.value = {
          name: N || null,
          lng: ee.lng,
          lat: ee.lat
        }, T(I, O);
      }), k.on("click", (ee) => {
        c && c.open(m, ee.target.getPosition());
      }), m.setFitView();
    }
    function T(I, O) {
      h.getAddress([I, O], (N, _) => {
        N === "complete" && _.info === "OK" && _.regeocode && _.regeocode.formattedAddress ? c = new b.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + _.regeocode.formattedAddress + "</div>",
          offset: new b.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (c = null, console.warn("地图获取位置信息失败", _));
      });
    }
    return gt(d), Rr(() => {
      m && (m.destroy(), m = null, h = null, c = null);
    }), (I, O) => (C(), E("div", {
      style: Z(g(i)),
      class: "containerIKJ"
    }, [
      F(g(Wr), {
        ref_key: "mapInputRef",
        ref: u,
        modelValue: g(r).name,
        "onUpdate:modelValue": O[0] || (O[0] = (N) => g(r).name = N),
        class: ue({ mapInputIKJ: t.showMap }),
        placeholder: t.placeholder || g(x)("r.search"),
        disabled: t.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      P("div", {
        style: Z(g(o)),
        ref_key: "mapRef",
        ref: f,
        id: s
      }, null, 4)
    ], 4));
  }
});
var Dn;
const Tc = /* @__PURE__ */ J({
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
    const t = e, r = W([]), l = M({
      get() {
        let u = t.modelValue;
        return Array.isArray(u) ? ne(u) : Ne(u) ? pt({
          group: r.value,
          condition: (f) => f.value === u,
          pathKey: "value"
        }) : vr(u) ? u.split(t.separator) : [];
      },
      set(u) {
        if (t.onlyLastVal)
          Ae(u) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", dt(u));
        else {
          if (Tu(t.modelValue, u))
            return;
          n("update:modelValue", ne(u));
        }
      }
    });
    function a() {
      if (!t.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      De.get(t.url).then((u) => {
        let f = null;
        u && u.data && u.data.records ? f = u.data.records : u && u.data ? f = u.data : u && (f = u), f ? (typeof t.optionFilter == "function" && $(t.optionFilter) === "Function" && (f = t.optionFilter(f)), r.value = i(f)) : console.warn("级联数据错误，不能使用");
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
        c.children && !Ae(c.children) && (d.children = i(c.children)), f.push(d);
      }
      return f;
    }
    function o(u, f) {
      return t.onlyLastLabel ? dt(u) : u.join(t.separator);
    }
    function s(u, f) {
      let c = "";
      Ae(f) || (c = f.map((d) => d.label).join(t.separator)), n("on-label-change", c);
    }
    return gt(a), (u, f) => {
      const c = G("Cascader");
      return C(), me(c, {
        data: g(r),
        modelValue: g(l),
        "onUpdate:modelValue": f[0] || (f[0] = (d) => xe(l) ? l.value = d : null),
        onOnChange: s,
        "change-on-select": "",
        transfer: "",
        disabled: t.disabled,
        "render-format": o,
        placeholder: t.placeholder || g(x)("r.pSelect"),
        filterable: t.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Sc = /* @__PURE__ */ J({
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
    const t = e, r = W(), l = M({
      get() {
        if (t.modelValue && (Ne(t.modelValue) || vr(t.modelValue))) {
          let i = String(t.modelValue).trim();
          if (/^\d*$/.test(i)) {
            let s = i.substring(0, 2) + "0000", u, f = a(i);
            return f.length < 7 ? u = i.substring(0, 4) + "00" : u = i.substring(0, 6), /^8\d+$/.test(i) ? [s, f] : [s, u, f];
          }
          return i.indexOf(t.separator) !== -1 ? i.split(t.separator) : [i];
        } else
          return Array.isArray(t.modelValue) ? ne(t.modelValue) : (r.value && (r.value.select = []), []);
      },
      set(i) {
        if (Ae(i))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let o = dt(i), s = null, u = null;
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
    function a(i) {
      let o = [...i];
      for (; o[o.length - 1] === "0"; )
        o.pop();
      return o.join("");
    }
    return (i, o) => (C(), me(g(Yr), qn(i.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: r,
      modelValue: g(l),
      "onUpdate:modelValue": o[0] || (o[0] = (s) => xe(l) ? l.value = s : null),
      level: t.level,
      disabled: t.disabled,
      placeholder: t.placeholder || g(x)("r.pSelect"),
      transfer: t.transfer,
      searchable: t.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Oe(e) {
  var i;
  const n = (...o) => $e.apply(this, o), t = n("r.closePreview"), r = n("r.fullImg");
  let l = Bt(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${e}' alt='${r}' ><i class='ivu-icon ivu-icon-md-close' title='${t}' ></i></div>`, (i = a.querySelector(".ivu-icon-md-close")) == null || i.addEventListener("click", function() {
    let o = Bt(document.getElementsByTagName("body"));
    o && o.removeChild(a);
  }), l == null || l.appendChild(a);
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
}, jc = ["onClick", "title"], kc = { class: "btBoxJ" }, Vc = { class: "customFileListM" }, Uc = {
  key: 0,
  class: "customFileListItem"
}, Fc = ["onClick", "title"], Nc = { class: "btBoxJ" };
var Hn;
const Rc = /* @__PURE__ */ J({
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
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, r = on([]), l = on([]), a = M(() => !t.manualUpload && t.showImg && u.value ? "img" : t.manualUpload && t.showImg && u.value ? "localImg" : t.manualUpload && t.showUploadList && (!t.showImg || !u.value) ? "localList" : !t.manualUpload && t.showUploadList && (!t.showImg || !u.value) ? "list" : ""), i = M(() => t.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : t.url), o = M({
      get() {
        if (t.manualUpload)
          return s.value;
        {
          let p = [];
          for (let S of s.value)
            typeof S == "object" && $(S) === "File" ? p.push(S) : (typeof S == "number" || typeof S == "string") && p.push({
              response: {
                data: [
                  {
                    id: S
                  }
                ]
              }
            });
          return p;
        }
      },
      set(p) {
        var S;
        if (t.manualUpload)
          s.value = p;
        else {
          let L = [];
          for (let V of p)
            (S = V == null ? void 0 : V.response) != null && S.data && V.response.data[0] && V.response.data[0].id && L.push(V.response.data[0].id);
          s.value = L;
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
            return Array.isArray(t.modelValue) ? t.modelValue.filter((p) => p !== "--") : $(t.modelValue) === "File" ? [t.modelValue] : [];
          default:
            return [];
        }
      },
      set(p) {
        if (t.length === 1) {
          let S = Bt(p);
          n("update:modelValue", S || S === 0 ? S : null);
        } else
          n("update:modelValue", ne(p));
      }
    }), u = M(() => {
      let p;
      t.manualUpload ? p = o.value : p = l.value;
      for (let S of p) {
        let L;
        if (t.manualUpload ? L = S && S.type : L = S && S.mimeType, !L || L && !it(L))
          return !1;
      }
      return !0;
    });
    et(
      () => o.value,
      async (p) => {
        var S, L, V, q, B;
        if (a.value === "localImg")
          p && p.length > 0 ? r.value = await c(p) : r.value = [];
        else if (p && p.length > 0 && a.value !== "localList") {
          let z = [];
          for (let H of p)
            if (H.name === void 0)
              if ((S = H == null ? void 0 : H.response) != null && S.data && H.response.data[0] && H.response.data[0].id) {
                let ae = await De.get(t.url + "/" + H.response.data[0].id).catch(() => {
                  z.push({ name: x("r.file") + Vn(p, H) });
                }), He = ne(H);
                He.name = ((L = ae == null ? void 0 : ae.data) == null ? void 0 : L.returnValue) && ae.data.returnValue[0] && ((V = ae.data.returnValue[0]) == null ? void 0 : V.name) || x("r.file") + Vn(p, H), He.mimeType = ((q = ae == null ? void 0 : ae.data) == null ? void 0 : q.returnValue) && ae.data.returnValue[0] && ((B = ae.data.returnValue[0]) == null ? void 0 : B.mimeType) || "unknown", z.push(He);
              } else
                z.push({ name: x("r.unknown") });
            else
              z.push(H);
          l.value = z;
        } else
          l.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function f(p) {
      return p.name || p.split && dt(p.split("/")) || p;
    }
    async function c(p) {
      let S = [];
      for (let L of p) {
        let V = await ot(L);
        S.push(V);
      }
      return S;
    }
    function d(p) {
      if (!t.disabled) {
        let S = o.value;
        S.splice(p, 1), o.value = S;
      }
    }
    function b(p) {
      p && p.response && p.response.data && p.response.data[0] && p.response.data[0].id && window.open(t.url + "/" + p.response.data[0].id + "/download");
    }
    function m(p) {
      var S, L;
      return t.manualUpload ? p.type && it(p.type) : ((S = p == null ? void 0 : p.response) == null ? void 0 : S.data) && ((L = p.response.data[0]) == null ? void 0 : L.id) && p.mimeType && it(p.mimeType);
    }
    function h(p) {
      t.manualUpload ? ot(p).then((S) => {
        Oe(S);
      }) : Oe(t.url + "/" + p.response.data[0].id + "/download?preview=true");
    }
    function v(p) {
      $(p) === "String" && p.indexOf("http") > -1 ? window.open(p) : $(p) === "File" && ot(p).then((S) => {
        _r(p.name, S);
      });
    }
    function y(p) {
      if (t.manualUpload) {
        if (p) {
          let S = Yt(p.name);
          if (t.format.length > 0 && t.format.indexOf(S) < 0)
            return fe(
              x("r.wrongFileType"),
              x("r.supportType") + (t.format.length > 0 && String(t.format) || x("r.none")),
              "warning"
            ), !1;
          if (t.maxSize && p.size > t.maxSize * 1024)
            return fe(x("r.fileIsBig"), x("r.supportSize") + t.maxSize + "kb", "warning"), !1;
          let L = o.value;
          L.push(p), o.value = L;
        }
        return !1;
      } else
        return !0;
    }
    function T(p) {
      console.warn(p), fe(x("r.uploadError"), "", "error");
    }
    function I(p, S, L) {
      if (p && p.code === 0) {
        let V = o.value;
        V.push(S), o.value = V;
      } else
        fe(x("r.uploadFail"), p && p.message || "", "error");
    }
    function O() {
      fe(x("r.fileIsBig"), x("r.supportSize") + t.maxSize + " kb", "warning");
    }
    function N() {
      fe(
        x("r.wrongFileType"),
        x("r.supportType") + (t.format.length > 0 && String(t.format) || x("r.none")),
        "warning"
      );
    }
    function _(p) {
      var V, q, B, z;
      let S = ((V = p == null ? void 0 : p.response) == null ? void 0 : V.data) && ((q = p.response.data[0]) == null ? void 0 : q.id), L = ((B = p == null ? void 0 : p.response) == null ? void 0 : B.data) && ((z = p.response.data[0]) == null ? void 0 : z.mimeType);
      S && ($(L) === "String" && L.indexOf("image") > -1 ? Oe(t.url + "/" + S + "/download?preview=true") : window.open(t.url + "/" + S + "/download?preview=true"));
    }
    function k(p) {
      var L, V;
      let S = ((L = p == null ? void 0 : p.response) == null ? void 0 : L.data) && ((V = p.response.data[0]) == null ? void 0 : V.id);
      ee(null, S);
    }
    function ee(p, S) {
      if (!t.disabled && s.value.indexOf(S) !== -1) {
        const L = ne(s.value);
        let V = o.value;
        V.splice(L.indexOf(S), 1), o.value = V;
      }
    }
    return (p, S) => {
      const L = G("Button"), V = G("Upload"), q = G("Icon");
      return C(), E("div", null, [
        F(V, {
          name: "files",
          action: g(i),
          "before-upload": y,
          "on-error": T,
          "on-success": I,
          "on-exceeded-size": O,
          "on-preview": _,
          "on-remove": k,
          "on-format-error": N,
          data: t.data,
          "max-size": t.maxSize,
          "show-upload-list": !1,
          "with-credentials": t.withCredentials,
          format: t.format,
          multiple: t.multiple || !1,
          disabled: t.length > 0 && g(o).length >= t.length || !!t.disabled
        }, {
          default: Se(() => [
            F(L, {
              icon: "ios-cloud-upload-outline",
              class: ue({ disabledR: t.length > 0 && g(o).length >= t.length || !!t.disabled })
            }, {
              default: Se(() => [
                Le(Q(g(x)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        te(P("div", xc, [
          (C(!0), E(se, null, Me(g(s), (B) => (C(), E(se, { key: B }, [
            !t.manualUpload && B !== null ? (C(), E("div", Ic, [
              P("img", {
                src: p.url + "/" + B + "/download?preview=true",
                alt: B
              }, null, 8, $c),
              P("div", Cc, [
                F(q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: g(x)("r.fView"),
                  onClick: (z) => g(Oe)(t.url + "/" + B + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                F(q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (z) => ee(z, B),
                  title: g(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ge("", !0)
          ], 64))), 128))
        ], 512), [
          [le, g(a) === "img" && g(s).length > 0]
        ]),
        te(P("div", Oc, [
          (C(!0), E(se, null, Me(g(r), (B, z) => (C(), E(se, {
            key: "manualImg" + z
          }, [
            t.manualUpload && B !== null ? (C(), E("div", Mc, [
              P("img", {
                src: B,
                alt: "manualImg" + z
              }, null, 8, Pc),
              P("div", Bc, [
                F(q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (H) => g(Oe)(B),
                  title: g(x)("r.fView")
                }, null, 8, ["onClick", "title"]),
                F(q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (H) => d(z),
                  title: g(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ge("", !0)
          ], 64))), 128))
        ], 512), [
          [le, g(a) === "localImg" && g(r).length > 0]
        ]),
        te(P("div", Lc, [
          (C(!0), E(se, null, Me(g(o), (B, z) => (C(), E(se, {
            key: "manualItem" + z
          }, [
            t.manualUpload && B !== null ? (C(), E("p", Ec, [
              B.name ? (C(), me(q, {
                key: 0,
                type: g(Lt)(B.name)
              }, null, 8, ["type"])) : ge("", !0),
              P("span", {
                class: ue(["upNameT", { previewName: m(B) }]),
                onClick: (H) => v(B),
                title: g(x)("r.download")
              }, Q(f(B)), 11, jc),
              P("span", kc, [
                m(B) ? (C(), me(q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (H) => h(B),
                  title: g(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ge("", !0),
                F(q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (H) => d(z),
                  title: g(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ge("", !0)
          ], 64))), 128))
        ], 512), [
          [le, g(a) === "localList" && g(o).length > 0]
        ]),
        te(P("div", Vc, [
          (C(!0), E(se, null, Me(g(l), (B, z) => (C(), E(se, {
            key: "defaultItem" + z
          }, [
            !t.manualUpload && B !== null ? (C(), E("p", Uc, [
              F(q, {
                type: g(Lt)(B.name)
              }, null, 8, ["type"]),
              P("span", {
                class: ue(["upNameT", { previewName: m(B) }]),
                onClick: (H) => b(B),
                title: g(x)("r.download")
              }, Q(B.name || g(x)("r.file") + (z + 1)), 11, Fc),
              P("span", Nc, [
                m(B) ? (C(), me(q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (H) => h(B),
                  title: g(x)("r.fView")
                }, null, 8, ["onClick", "title"])) : ge("", !0),
                F(q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (H) => d(z),
                  title: g(x)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ge("", !0)
          ], 64))), 128))
        ], 512), [
          [le, g(a) === "list" && g(l).length > 0]
        ])
      ]);
    };
  }
}), Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Sc,
  AsyncCascader: Tc,
  BtTablePage: gc,
  FullPop: ia,
  HeaderBt: Xn,
  Hello: ua,
  IconTxtBtn: ca,
  InputMap: Ac,
  Page404: ma,
  SelectInput: mc,
  ShowHidePanel: Yu,
  ShowHidePanelB: Qu,
  SideMenu: Wu,
  TableIconBtn: Ju,
  TableSearch: tc,
  TableSetting: ac,
  UploadGroup: Rc
}, Symbol.toStringTag, { value: "Module" }));
function jr(e) {
  const n = (...a) => $e.apply(this, a), t = n("r.closePreview"), r = n("r.fullImg");
  let l = "previewImg" + Math.floor(Math.random() * 1e7);
  we.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (a) => D(
      "div",
      {
        class: "previewModal",
        id: l
      },
      [
        D(
          "div",
          {
            class: "previewModalInner"
          },
          [
            D("img", {
              src: e,
              alt: r
            }),
            D(qr, {
              type: "md-close",
              size: 20,
              title: t,
              class: "previewModalDelete",
              onClick() {
                we.remove();
              }
            })
          ]
        )
      ]
    )
  }), de(() => {
    var o, s, u, f, c, d;
    const a = (f = (u = (s = (o = document.getElementById(l)) == null ? void 0 : o.parentElement) == null ? void 0 : s.parentElement) == null ? void 0 : u.parentElement) == null ? void 0 : f.parentElement, i = (d = (c = document.getElementById(l)) == null ? void 0 : c.parentElement) == null ? void 0 : d.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), i && (i.style.display = "none");
  }, 10);
}
let Je = !1;
function kr({
  height: e,
  width: n = 416,
  title: t,
  content: r,
  onOk: l,
  onCancel: a,
  okText: i,
  cancelText: o,
  noWarnIcon: s,
  footerAlign: u,
  cancelBt: f = !0
}) {
  const c = (...h) => $e.apply(this, h);
  let b = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", m = $(r) === "String";
  we.warning({
    width: n,
    footerHide: !0,
    render: () => D(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: b
        }
      },
      [
        D(
          "div",
          {
            class: "containerN"
          },
          [
            D(
              "div",
              {
                class: "titleN"
              },
              [
                D("span", t || c("r.info.title")),
                D(
                  wt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      Je || we.remove();
                    }
                  },
                  () => D("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            D(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: m ? "center" : "left"
                }
              },
              [
                D("i", {
                  class: m && !s ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                D("div", { class: "msgBoxConO" }, r || c("r.info.text"))
              ]
            ),
            D(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: u || "center"
                }
              },
              [
                D(
                  wt,
                  {
                    class: "okBtN",
                    onClick(h) {
                      var v;
                      if (l && typeof l == "function") {
                        const y = l();
                        if (y && $(y) === "Promise") {
                          Je = !0;
                          const T = h && (h.currentTarget || h.target);
                          T && (T.classList.add("ivu-btn-loading"), T.nextSibling.setAttribute("disabled", "disabled"), ((v = T.parentElement) == null ? void 0 : v.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(y).then(() => {
                            Je = !1, we.remove();
                          }).catch(() => {
                            Je = !1, we.remove();
                          });
                        } else
                          we.remove();
                      }
                    }
                  },
                  () => [
                    D("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    D("span", i || c("r.confirm"))
                  ]
                ),
                D(
                  wt,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      Je || (we.remove(), $(a) === "Function" && a && a());
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
function Vr(e, n, t, r) {
  const l = (...a) => $e.apply(this, a);
  fe.call(this, {
    title: e || l("r.info.title"),
    text: n || l("r.info.text"),
    icon: t || "warning",
    onOk: r,
    buttons: [l("r.cancel")]
  });
}
const zn = {
  $fetch: De,
  fullScreenImgByDom: Oe,
  fullScreenImgPreview: jr,
  $swal: fe,
  $swalConfirm: Vr,
  messageBox: kr,
  setInterval: Br,
  setTimeout: de,
  ...Pr
}, zc = function(e, n = {}) {
  De.init(n.useStore || n.store, e), n.locale && ut.use(n.locale), n.i18n && ut.i18n(n.i18n), n.router && ec(n.router), n.amap && wc(n.amap), n.notRegistryGlobal || (Object.keys(Rn).forEach((t) => {
    e.component(t) || e.component(t, Rn[t]);
  }), Object.keys(zn).forEach((t) => {
    e.config.globalProperties[t] = zn[t];
  })), e.directive("has") || e.directive("has", (t, r) => {
    r.value && !Cr(r.value) && (t.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (t, r) => {
    let l;
    r.arg ? l = t.querySelector("." + r.arg) : l = t.querySelector(".ivu-select-dropdown") || t, l.addEventListener("scroll", function() {
      l.scrollTop > 0 && l.scrollHeight - l.scrollTop <= l.clientHeight && r.value();
    });
  });
}, Dc = ut.use, Hc = ut.i18n, Qc = {
  locale: Dc,
  i18n: Hc,
  install: zc,
  ...Pr,
  ...Ou,
  $fetch: De,
  fullScreenImgByDom: Oe,
  fullScreenImgPreview: jr,
  $swal: fe,
  $swalConfirm: Vr,
  messageBox: kr,
  setInterval: Br,
  setTimeout: de
};
export {
  De as $fetch,
  fe as $swal,
  Vr as $swalConfirm,
  Sc as AlCascaderMC,
  Tc as AsyncCascader,
  gc as BtTablePage,
  ia as FullPop,
  Xn as HeaderBt,
  ua as Hello,
  ca as IconTxtBtn,
  Ac as InputMap,
  ma as Page404,
  mc as SelectInput,
  Yu as ShowHidePanel,
  Qu as ShowHidePanelB,
  Wu as SideMenu,
  Ju as TableIconBtn,
  tc as TableSearch,
  ac as TableSetting,
  Rc as UploadGroup,
  jt as clearObj,
  Nu as dataFilterOrToUrl,
  Eu as decimalDigitsLimit,
  Qc as default,
  xr as downloadFileByFormSubmit,
  _r as downloadFileReaderFile,
  $u as emptyInput,
  Ar as fakeALinkClick,
  ju as fileExport,
  Bu as findCollection,
  pt as findPath,
  Mu as formDataHeadConfig,
  Oe as fullScreenImgByDom,
  jr as fullScreenImgPreview,
  ku as getColumnsKeys,
  ot as getFileSrc,
  Yt as getFileTypeByName,
  Lt as getFileTypeIconByName,
  Tr as getStringWidth,
  Cr as hasPermission,
  Iu as htmlDecode,
  xu as htmlEncode,
  Ru as htmlPrint,
  Uu as isEmptyValue,
  it as isImgByFile,
  Or as isNaN,
  Vu as isNumberValue,
  Te as isValidValue,
  kr as messageBox,
  $ as myTypeof,
  Lu as oneOf,
  kt as removeEmptyValue,
  Br as setInterval,
  de as setTimeout,
  $r as setValByOption,
  Mr as siblingElems,
  Cu as stopBubbling,
  Fu as stringLength,
  Pu as toFormData,
  wr as toHump,
  Sr as toLine,
  Ir as tooltipManual,
  Et as trimObj
};
//# sourceMappingURL=plugRQw.js.map
