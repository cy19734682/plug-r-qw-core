import { getCurrentInstance as ft, defineComponent as H, resolveComponent as k, openBlock as A, createElementBlock as P, normalizeClass as le, normalizeStyle as D, createBlock as Re, createCommentVNode as un, renderSlot as Q, ref as z, computed as O, withDirectives as q, unref as h, createElementVNode as x, toDisplayString as U, createVNode as F, withCtx as me, createTextVNode as ve, vShow as te, resolveDirective as fn, Fragment as dt, renderList as pt, onBeforeMount as ur, watch as gt, nextTick as dn, isRef as Ae, onMounted as pn, withModifiers as fr, mergeProps as dr, h as V } from "vue";
import pr from "deepmerge";
import Ee from "sweetalert";
import { useRouter as gr, useRoute as hr } from "vue-router";
import { useI18n as mr } from "vue-i18n";
import et from "axios";
import { TableColumnConfig as br, Modal as fe, Button as Ye } from "view-ui-plus";
const gn = {
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
}, yr = /(%|){([0-9a-zA-Z_]+)}/g;
function vr() {
  function e(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function n(t, ...r) {
    let o;
    return r.length === 1 && typeof r[0] == "object" && (o = r[0]), (!o || !o.hasOwnProperty) && (o = {}), t === void 0 ? "" : t.replace(yr, (a, i, l, s) => {
      let c;
      return t[s - 1] === "{" && t[s + a.length] === "}" ? l : (c = e(o, l) ? o[l] : null, c ?? "");
    });
  }
  return n;
}
const wr = vr();
let ze = gn;
const _r = {
  zh: gn
};
let kt, Bt = {}, E, Sr = function(e, n) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, n);
  if (E && E.global)
    return E.global.t(e, n);
  if (E && E.locale) {
    if (!Bt[E.locale] || kt != E.locale) {
      Bt[E.locale] = !0;
      let t = E.getLocaleMessage(E.locale) || {}, r = pr(_r[E.locale], t, { clone: !0 });
      ze = r, E.setLocaleMessage(E.locale, r), kt = E.locale;
    }
    return E.hlang(e, n);
  }
};
const we = function(e, n) {
  let t = Sr.apply(this, [e, n]);
  if (t != null)
    return t;
  const r = e.split(".");
  let o = ze;
  for (let a = 0, i = r.length; a < i; a++) {
    const l = r[a];
    if (t = o[l], a === i - 1)
      return wr(t, n);
    if (!t)
      return "";
    o = t;
  }
  return "";
}, Tr = function(e) {
  ze = e || ze;
}, $r = function(e) {
  E = e;
}, Le = {
  use: Tr,
  t: we,
  i18n: $r
};
function j(e, n) {
  var r;
  const t = (r = ft()) == null ? void 0 : r.appContext.config.globalProperties;
  return we.apply(t, [e, n]);
}
const hn = /* @__PURE__ */ H({
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
    return (o, a) => {
      const i = k("Icon");
      return A(), P("div", {
        class: le({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: D({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: r
      }, [
        o.icon ? (A(), Re(i, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : un("", !0),
        Q(o.$slots, "default")
      ], 6);
    };
  }
}), Or = { class: "headerTxtAM" }, xr = { class: "contentAM" }, Cr = /* @__PURE__ */ H({
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
    let o = z(!1);
    const a = O(() => typeof r.headerFontSize == "number" ? r.headerFontSize + "px" : r.headerFontSize), i = O(() => ({ zIndex: r.zIndex }));
    function l() {
      o.value = !0, t("on-open");
    }
    function s(c) {
      o.value = !1, t("on-close", c === !0);
    }
    return n({
      open: l,
      close: s
    }), (c, u) => q((A(), P("div", {
      class: "fullScreenPopBoxAM",
      style: D(h(i))
    }, [
      x("div", {
        class: "headerAM",
        style: D({ color: c.headerColor, backgroundColor: c.headerBg, fontSize: h(a) })
      }, [
        x("span", Or, U(c.title || h(j)("r.title")), 1),
        F(hn, {
          icon: "md-return-left",
          onClick: s
        }, {
          default: me(() => [
            ve(U(h(j)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      x("div", xr, [
        Q(c.$slots, "default")
      ])
    ], 4)), [
      [te, h(o)]
    ]);
  }
}), Ar = { class: "msg" }, jr = /* @__PURE__ */ H({
  __name: "Hello",
  setup(e) {
    let n = z("Greetings from Ricky.");
    return (t, r) => (A(), P("span", Ar, U(h(n)), 1));
  }
}), Pr = /* @__PURE__ */ H({
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
    function o(a) {
      t.disabled || n("click", a);
    }
    return (a, i) => {
      const l = k("Icon"), s = fn("has");
      return q((A(), P("div", {
        class: le(["tabTopBtnsT", { disabled: a.disabled }]),
        onClick: o,
        style: D({ "font-size": h(r) })
      }, [
        F(l, {
          type: a.icon,
          size: a.size
        }, null, 8, ["type", "size"]),
        ve(" " + U(a.name || h(j)("r.button")), 1)
      ], 6)), [
        [s, a.has]
      ]);
    };
  }
}), Ir = { class: "c404K" }, kr = /* @__PURE__ */ x("div", { class: "t404" }, "404", -1), Br = { class: "ct404" }, Er = { class: "p404" }, Fr = /* @__PURE__ */ H({
  __name: "Page404",
  setup(e) {
    const t = ft().appContext.config.globalProperties.$router;
    function r() {
      t.go(-1);
    }
    return (o, a) => {
      const i = k("Button");
      return A(), P("div", Ir, [
        kr,
        x("div", Br, "UH OH! " + U(h(j)("r.pageNotFound")), 1),
        x("div", Er, U(h(j)("r.notFoundMsg")), 1),
        F(i, {
          class: "bt404",
          onClick: r
        }, {
          default: me(() => [
            ve(U(h(j)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var Nr = typeof global == "object" && global && global.Object === Object && global;
const mn = Nr;
var Mr = typeof self == "object" && self && self.Object === Object && self, zr = mn || Mr || Function("return this")();
const W = zr;
var Lr = W.Symbol;
const be = Lr;
var bn = Object.prototype, Rr = bn.hasOwnProperty, Vr = bn.toString, Oe = be ? be.toStringTag : void 0;
function Dr(e) {
  var n = Rr.call(e, Oe), t = e[Oe];
  try {
    e[Oe] = void 0;
    var r = !0;
  } catch {
  }
  var o = Vr.call(e);
  return r && (n ? e[Oe] = t : delete e[Oe]), o;
}
var Hr = Object.prototype, Ur = Hr.toString;
function Gr(e) {
  return Ur.call(e);
}
var Wr = "[object Null]", qr = "[object Undefined]", Et = be ? be.toStringTag : void 0;
function X(e) {
  return e == null ? e === void 0 ? qr : Wr : Et && Et in Object(e) ? Dr(e) : Gr(e);
}
function Y(e) {
  return e != null && typeof e == "object";
}
var Jr = "[object Symbol]";
function Xr(e) {
  return typeof e == "symbol" || Y(e) && X(e) == Jr;
}
var Yr = Array.isArray;
const Ve = Yr;
var Zr = /\s/;
function Kr(e) {
  for (var n = e.length; n-- && Zr.test(e.charAt(n)); )
    ;
  return n;
}
var Qr = /^\s+/;
function eo(e) {
  return e && e.slice(0, Kr(e) + 1).replace(Qr, "");
}
function J(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Ft = 0 / 0, to = /^[-+]0x[0-9a-f]+$/i, no = /^0b[01]+$/i, ro = /^0o[0-7]+$/i, oo = parseInt;
function Nt(e) {
  if (typeof e == "number")
    return e;
  if (Xr(e))
    return Ft;
  if (J(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = J(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = eo(e);
  var t = no.test(e);
  return t || ro.test(e) ? oo(e.slice(2), t ? 2 : 8) : to.test(e) ? Ft : +e;
}
var ao = "[object AsyncFunction]", lo = "[object Function]", io = "[object GeneratorFunction]", so = "[object Proxy]";
function ht(e) {
  if (!J(e))
    return !1;
  var n = X(e);
  return n == lo || n == io || n == ao || n == so;
}
var co = W["__core-js_shared__"];
const Ze = co;
var Mt = function() {
  var e = /[^.]+$/.exec(Ze && Ze.keys && Ze.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function uo(e) {
  return !!Mt && Mt in e;
}
var fo = Function.prototype, po = fo.toString;
function se(e) {
  if (e != null) {
    try {
      return po.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var go = /[\\^$.*+?()[\]{}|]/g, ho = /^\[object .+?Constructor\]$/, mo = Function.prototype, bo = Object.prototype, yo = mo.toString, vo = bo.hasOwnProperty, wo = RegExp(
  "^" + yo.call(vo).replace(go, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _o(e) {
  if (!J(e) || uo(e))
    return !1;
  var n = ht(e) ? wo : ho;
  return n.test(se(e));
}
function So(e, n) {
  return e == null ? void 0 : e[n];
}
function ce(e, n) {
  var t = So(e, n);
  return _o(t) ? t : void 0;
}
var To = ce(W, "WeakMap");
const tt = To;
var zt = Object.create, $o = function() {
  function e() {
  }
  return function(n) {
    if (!J(n))
      return {};
    if (zt)
      return zt(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const Oo = $o;
function xo(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
var Co = function() {
  try {
    var e = ce(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Lt = Co;
function Ao(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var jo = 9007199254740991, Po = /^(?:0|[1-9]\d*)$/;
function Io(e, n) {
  var t = typeof e;
  return n = n ?? jo, !!n && (t == "number" || t != "symbol" && Po.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function yn(e, n, t) {
  n == "__proto__" && Lt ? Lt(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function vn(e, n) {
  return e === n || e !== e && n !== n;
}
var ko = Object.prototype, Bo = ko.hasOwnProperty;
function wn(e, n, t) {
  var r = e[n];
  (!(Bo.call(e, n) && vn(r, t)) || t === void 0 && !(n in e)) && yn(e, n, t);
}
function De(e, n, t, r) {
  var o = !t;
  t || (t = {});
  for (var a = -1, i = n.length; ++a < i; ) {
    var l = n[a], s = r ? r(t[l], e[l], l, t, e) : void 0;
    s === void 0 && (s = e[l]), o ? yn(t, l, s) : wn(t, l, s);
  }
  return t;
}
var Eo = 9007199254740991;
function _n(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Eo;
}
function mt(e) {
  return e != null && _n(e.length) && !ht(e);
}
var Fo = Object.prototype;
function He(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Fo;
  return e === t;
}
function No(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var Mo = "[object Arguments]";
function Rt(e) {
  return Y(e) && X(e) == Mo;
}
var Sn = Object.prototype, zo = Sn.hasOwnProperty, Lo = Sn.propertyIsEnumerable, Ro = Rt(function() {
  return arguments;
}()) ? Rt : function(e) {
  return Y(e) && zo.call(e, "callee") && !Lo.call(e, "callee");
};
const Tn = Ro;
function Vo() {
  return !1;
}
var $n = typeof exports == "object" && exports && !exports.nodeType && exports, Vt = $n && typeof module == "object" && module && !module.nodeType && module, Do = Vt && Vt.exports === $n, Dt = Do ? W.Buffer : void 0, Ho = Dt ? Dt.isBuffer : void 0, Uo = Ho || Vo;
const bt = Uo;
var Go = "[object Arguments]", Wo = "[object Array]", qo = "[object Boolean]", Jo = "[object Date]", Xo = "[object Error]", Yo = "[object Function]", Zo = "[object Map]", Ko = "[object Number]", Qo = "[object Object]", ea = "[object RegExp]", ta = "[object Set]", na = "[object String]", ra = "[object WeakMap]", oa = "[object ArrayBuffer]", aa = "[object DataView]", la = "[object Float32Array]", ia = "[object Float64Array]", sa = "[object Int8Array]", ca = "[object Int16Array]", ua = "[object Int32Array]", fa = "[object Uint8Array]", da = "[object Uint8ClampedArray]", pa = "[object Uint16Array]", ga = "[object Uint32Array]", $ = {};
$[la] = $[ia] = $[sa] = $[ca] = $[ua] = $[fa] = $[da] = $[pa] = $[ga] = !0;
$[Go] = $[Wo] = $[oa] = $[qo] = $[aa] = $[Jo] = $[Xo] = $[Yo] = $[Zo] = $[Ko] = $[Qo] = $[ea] = $[ta] = $[na] = $[ra] = !1;
function ha(e) {
  return Y(e) && _n(e.length) && !!$[X(e)];
}
function yt(e) {
  return function(n) {
    return e(n);
  };
}
var On = typeof exports == "object" && exports && !exports.nodeType && exports, Ce = On && typeof module == "object" && module && !module.nodeType && module, ma = Ce && Ce.exports === On, Ke = ma && mn.process, ba = function() {
  try {
    var e = Ce && Ce.require && Ce.require("util").types;
    return e || Ke && Ke.binding && Ke.binding("util");
  } catch {
  }
}();
const ye = ba;
var Ht = ye && ye.isTypedArray, ya = Ht ? yt(Ht) : ha;
const xn = ya;
var va = Object.prototype, wa = va.hasOwnProperty;
function Cn(e, n) {
  var t = Ve(e), r = !t && Tn(e), o = !t && !r && bt(e), a = !t && !r && !o && xn(e), i = t || r || o || a, l = i ? No(e.length, String) : [], s = l.length;
  for (var c in e)
    (n || wa.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Io(c, s))) && l.push(c);
  return l;
}
function An(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var _a = An(Object.keys, Object);
const Sa = _a;
var Ta = Object.prototype, $a = Ta.hasOwnProperty;
function jn(e) {
  if (!He(e))
    return Sa(e);
  var n = [];
  for (var t in Object(e))
    $a.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function vt(e) {
  return mt(e) ? Cn(e) : jn(e);
}
function Oa(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var xa = Object.prototype, Ca = xa.hasOwnProperty;
function Aa(e) {
  if (!J(e))
    return Oa(e);
  var n = He(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !Ca.call(e, r)) || t.push(r);
  return t;
}
function wt(e) {
  return mt(e) ? Cn(e, !0) : Aa(e);
}
var ja = ce(Object, "create");
const je = ja;
function Pa() {
  this.__data__ = je ? je(null) : {}, this.size = 0;
}
function Ia(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var ka = "__lodash_hash_undefined__", Ba = Object.prototype, Ea = Ba.hasOwnProperty;
function Fa(e) {
  var n = this.__data__;
  if (je) {
    var t = n[e];
    return t === ka ? void 0 : t;
  }
  return Ea.call(n, e) ? n[e] : void 0;
}
var Na = Object.prototype, Ma = Na.hasOwnProperty;
function za(e) {
  var n = this.__data__;
  return je ? n[e] !== void 0 : Ma.call(n, e);
}
var La = "__lodash_hash_undefined__";
function Ra(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = je && n === void 0 ? La : n, this;
}
function ie(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
ie.prototype.clear = Pa;
ie.prototype.delete = Ia;
ie.prototype.get = Fa;
ie.prototype.has = za;
ie.prototype.set = Ra;
function Va() {
  this.__data__ = [], this.size = 0;
}
function Ue(e, n) {
  for (var t = e.length; t--; )
    if (vn(e[t][0], n))
      return t;
  return -1;
}
var Da = Array.prototype, Ha = Da.splice;
function Ua(e) {
  var n = this.__data__, t = Ue(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : Ha.call(n, t, 1), --this.size, !0;
}
function Ga(e) {
  var n = this.__data__, t = Ue(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Wa(e) {
  return Ue(this.__data__, e) > -1;
}
function qa(e, n) {
  var t = this.__data__, r = Ue(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function Z(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Z.prototype.clear = Va;
Z.prototype.delete = Ua;
Z.prototype.get = Ga;
Z.prototype.has = Wa;
Z.prototype.set = qa;
var Ja = ce(W, "Map");
const Pe = Ja;
function Xa() {
  this.size = 0, this.__data__ = {
    hash: new ie(),
    map: new (Pe || Z)(),
    string: new ie()
  };
}
function Ya(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Ge(e, n) {
  var t = e.__data__;
  return Ya(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Za(e) {
  var n = Ge(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Ka(e) {
  return Ge(this, e).get(e);
}
function Qa(e) {
  return Ge(this, e).has(e);
}
function el(e, n) {
  var t = Ge(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function _e(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
_e.prototype.clear = Xa;
_e.prototype.delete = Za;
_e.prototype.get = Ka;
_e.prototype.has = Qa;
_e.prototype.set = el;
function Pn(e, n) {
  for (var t = -1, r = n.length, o = e.length; ++t < r; )
    e[o + t] = n[t];
  return e;
}
var tl = An(Object.getPrototypeOf, Object);
const _t = tl;
var nl = "[object Object]", rl = Function.prototype, ol = Object.prototype, In = rl.toString, al = ol.hasOwnProperty, ll = In.call(Object);
function ge(e) {
  if (!Y(e) || X(e) != nl)
    return !1;
  var n = _t(e);
  if (n === null)
    return !0;
  var t = al.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && In.call(t) == ll;
}
function il() {
  this.__data__ = new Z(), this.size = 0;
}
function sl(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function cl(e) {
  return this.__data__.get(e);
}
function ul(e) {
  return this.__data__.has(e);
}
var fl = 200;
function dl(e, n) {
  var t = this.__data__;
  if (t instanceof Z) {
    var r = t.__data__;
    if (!Pe || r.length < fl - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new _e(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Se(e) {
  var n = this.__data__ = new Z(e);
  this.size = n.size;
}
Se.prototype.clear = il;
Se.prototype.delete = sl;
Se.prototype.get = cl;
Se.prototype.has = ul;
Se.prototype.set = dl;
function pl(e, n) {
  return e && De(n, vt(n), e);
}
function gl(e, n) {
  return e && De(n, wt(n), e);
}
var kn = typeof exports == "object" && exports && !exports.nodeType && exports, Ut = kn && typeof module == "object" && module && !module.nodeType && module, hl = Ut && Ut.exports === kn, Gt = hl ? W.Buffer : void 0, Wt = Gt ? Gt.allocUnsafe : void 0;
function ml(e, n) {
  if (n)
    return e.slice();
  var t = e.length, r = Wt ? Wt(t) : new e.constructor(t);
  return e.copy(r), r;
}
function bl(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++t < r; ) {
    var i = e[t];
    n(i, t, e) && (a[o++] = i);
  }
  return a;
}
function Bn() {
  return [];
}
var yl = Object.prototype, vl = yl.propertyIsEnumerable, qt = Object.getOwnPropertySymbols, wl = qt ? function(e) {
  return e == null ? [] : (e = Object(e), bl(qt(e), function(n) {
    return vl.call(e, n);
  }));
} : Bn;
const St = wl;
function _l(e, n) {
  return De(e, St(e), n);
}
var Sl = Object.getOwnPropertySymbols, Tl = Sl ? function(e) {
  for (var n = []; e; )
    Pn(n, St(e)), e = _t(e);
  return n;
} : Bn;
const En = Tl;
function $l(e, n) {
  return De(e, En(e), n);
}
function Fn(e, n, t) {
  var r = n(e);
  return Ve(e) ? r : Pn(r, t(e));
}
function Ol(e) {
  return Fn(e, vt, St);
}
function xl(e) {
  return Fn(e, wt, En);
}
var Cl = ce(W, "DataView");
const nt = Cl;
var Al = ce(W, "Promise");
const rt = Al;
var jl = ce(W, "Set");
const ot = jl;
var Jt = "[object Map]", Pl = "[object Object]", Xt = "[object Promise]", Yt = "[object Set]", Zt = "[object WeakMap]", Kt = "[object DataView]", Il = se(nt), kl = se(Pe), Bl = se(rt), El = se(ot), Fl = se(tt), oe = X;
(nt && oe(new nt(new ArrayBuffer(1))) != Kt || Pe && oe(new Pe()) != Jt || rt && oe(rt.resolve()) != Xt || ot && oe(new ot()) != Yt || tt && oe(new tt()) != Zt) && (oe = function(e) {
  var n = X(e), t = n == Pl ? e.constructor : void 0, r = t ? se(t) : "";
  if (r)
    switch (r) {
      case Il:
        return Kt;
      case kl:
        return Jt;
      case Bl:
        return Xt;
      case El:
        return Yt;
      case Fl:
        return Zt;
    }
  return n;
});
const We = oe;
var Nl = Object.prototype, Ml = Nl.hasOwnProperty;
function zl(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && Ml.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Ll = W.Uint8Array;
const Qt = Ll;
function Tt(e) {
  var n = new e.constructor(e.byteLength);
  return new Qt(n).set(new Qt(e)), n;
}
function Rl(e, n) {
  var t = n ? Tt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Vl = /\w*$/;
function Dl(e) {
  var n = new e.constructor(e.source, Vl.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var en = be ? be.prototype : void 0, tn = en ? en.valueOf : void 0;
function Hl(e) {
  return tn ? Object(tn.call(e)) : {};
}
function Ul(e, n) {
  var t = n ? Tt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Gl = "[object Boolean]", Wl = "[object Date]", ql = "[object Map]", Jl = "[object Number]", Xl = "[object RegExp]", Yl = "[object Set]", Zl = "[object String]", Kl = "[object Symbol]", Ql = "[object ArrayBuffer]", ei = "[object DataView]", ti = "[object Float32Array]", ni = "[object Float64Array]", ri = "[object Int8Array]", oi = "[object Int16Array]", ai = "[object Int32Array]", li = "[object Uint8Array]", ii = "[object Uint8ClampedArray]", si = "[object Uint16Array]", ci = "[object Uint32Array]";
function ui(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case Ql:
      return Tt(e);
    case Gl:
    case Wl:
      return new r(+e);
    case ei:
      return Rl(e, t);
    case ti:
    case ni:
    case ri:
    case oi:
    case ai:
    case li:
    case ii:
    case si:
    case ci:
      return Ul(e, t);
    case ql:
      return new r();
    case Jl:
    case Zl:
      return new r(e);
    case Xl:
      return Dl(e);
    case Yl:
      return new r();
    case Kl:
      return Hl(e);
  }
}
function fi(e) {
  return typeof e.constructor == "function" && !He(e) ? Oo(_t(e)) : {};
}
var di = "[object Map]";
function pi(e) {
  return Y(e) && We(e) == di;
}
var nn = ye && ye.isMap, gi = nn ? yt(nn) : pi;
const hi = gi;
var mi = "[object Set]";
function bi(e) {
  return Y(e) && We(e) == mi;
}
var rn = ye && ye.isSet, yi = rn ? yt(rn) : bi;
const vi = yi;
var wi = 1, _i = 2, Si = 4, Nn = "[object Arguments]", Ti = "[object Array]", $i = "[object Boolean]", Oi = "[object Date]", xi = "[object Error]", Mn = "[object Function]", Ci = "[object GeneratorFunction]", Ai = "[object Map]", ji = "[object Number]", zn = "[object Object]", Pi = "[object RegExp]", Ii = "[object Set]", ki = "[object String]", Bi = "[object Symbol]", Ei = "[object WeakMap]", Fi = "[object ArrayBuffer]", Ni = "[object DataView]", Mi = "[object Float32Array]", zi = "[object Float64Array]", Li = "[object Int8Array]", Ri = "[object Int16Array]", Vi = "[object Int32Array]", Di = "[object Uint8Array]", Hi = "[object Uint8ClampedArray]", Ui = "[object Uint16Array]", Gi = "[object Uint32Array]", T = {};
T[Nn] = T[Ti] = T[Fi] = T[Ni] = T[$i] = T[Oi] = T[Mi] = T[zi] = T[Li] = T[Ri] = T[Vi] = T[Ai] = T[ji] = T[zn] = T[Pi] = T[Ii] = T[ki] = T[Bi] = T[Di] = T[Hi] = T[Ui] = T[Gi] = !0;
T[xi] = T[Mn] = T[Ei] = !1;
function Ne(e, n, t, r, o, a) {
  var i, l = n & wi, s = n & _i, c = n & Si;
  if (t && (i = o ? t(e, r, o, a) : t(e)), i !== void 0)
    return i;
  if (!J(e))
    return e;
  var u = Ve(e);
  if (u) {
    if (i = zl(e), !l)
      return xo(e, i);
  } else {
    var d = We(e), g = d == Mn || d == Ci;
    if (bt(e))
      return ml(e, l);
    if (d == zn || d == Nn || g && !o) {
      if (i = s || g ? {} : fi(e), !l)
        return s ? $l(e, gl(i, e)) : _l(e, pl(i, e));
    } else {
      if (!T[d])
        return o ? e : {};
      i = ui(e, d, l);
    }
  }
  a || (a = new Se());
  var S = a.get(e);
  if (S)
    return S;
  a.set(e, i), vi(e) ? e.forEach(function(y) {
    i.add(Ne(y, n, t, y, e, a));
  }) : hi(e) && e.forEach(function(y, v) {
    i.set(v, Ne(y, n, t, v, e, a));
  });
  var _ = c ? s ? xl : Ol : s ? wt : vt, m = u ? void 0 : _(e);
  return Ao(m || e, function(y, v) {
    m && (v = y, y = e[v]), wn(i, v, Ne(y, n, t, v, e, a));
  }), i;
}
var Wi = 1, qi = 4;
function he(e) {
  return Ne(e, Wi | qi);
}
var Ji = function() {
  return W.Date.now();
};
const Qe = Ji;
var Xi = "Expected a function", Yi = Math.max, Zi = Math.min;
function Ki(e, n, t) {
  var r, o, a, i, l, s, c = 0, u = !1, d = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(Xi);
  n = Nt(n) || 0, J(t) && (u = !!t.leading, d = "maxWait" in t, a = d ? Yi(Nt(t.maxWait) || 0, n) : a, g = "trailing" in t ? !!t.trailing : g);
  function S(C) {
    var I = r, re = o;
    return r = o = void 0, c = C, i = e.apply(re, I), i;
  }
  function _(C) {
    return c = C, l = setTimeout(v, n), u ? S(C) : i;
  }
  function m(C) {
    var I = C - s, re = C - c, ke = n - I;
    return d ? Zi(ke, a - re) : ke;
  }
  function y(C) {
    var I = C - s, re = C - c;
    return s === void 0 || I >= n || I < 0 || d && re >= a;
  }
  function v() {
    var C = Qe();
    if (y(C))
      return L(C);
    l = setTimeout(v, m(C));
  }
  function L(C) {
    return l = void 0, g && r ? S(C) : (r = o = void 0, i);
  }
  function ue() {
    l !== void 0 && clearTimeout(l), c = 0, r = s = o = l = void 0;
  }
  function N() {
    return l === void 0 ? i : L(Qe());
  }
  function ne() {
    var C = Qe(), I = y(C);
    if (r = arguments, o = this, s = C, I) {
      if (l === void 0)
        return _(s);
      if (d)
        return clearTimeout(l), l = setTimeout(v, n), S(s);
    }
    return l === void 0 && (l = setTimeout(v, n)), i;
  }
  return ne.cancel = ue, ne.flush = N, ne;
}
var Qi = "[object Boolean]";
function es(e) {
  return e === !0 || e === !1 || Y(e) && X(e) == Qi;
}
var ts = "[object Map]", ns = "[object Set]", rs = Object.prototype, os = rs.hasOwnProperty;
function Me(e) {
  if (e == null)
    return !0;
  if (mt(e) && (Ve(e) || typeof e == "string" || typeof e.splice == "function" || bt(e) || xn(e) || Tn(e)))
    return !e.length;
  var n = We(e);
  if (n == ts || n == ns)
    return !e.size;
  if (He(e))
    return !jn(e).length;
  for (var t in e)
    if (os.call(e, t))
      return !1;
  return !0;
}
var as = "[object Number]";
function ls(e) {
  return typeof e == "number" || Y(e) && X(e) == as;
}
function qe(e, n, t) {
  const r = (...o) => we.apply(this, o);
  return new Promise((o, a) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let i = r("r.confirm"), l = r("r.cancel"), s = !1, c = "swalConfirmBt", u = "swalCancelBt";
      const d = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let g = "";
      e.text && d.test(b(e.text)) ? g = "content" : e.text && b(e.text) === "String" && (g = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (l = e.buttons.cancel.text) && (s = !0), e.buttons.cancel.className && (u = e.buttons.cancel.className), e.buttons.confirm.text && (i = e.buttons.confirm.text), e.buttons.confirm.className && (c = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (l = e.buttons[0], s = !0), e.buttons[1] && (i = e.buttons[1]))), Ee({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [g]: e.text,
        buttons: {
          confirm: {
            text: i,
            value: !0,
            visible: !0,
            className: c
          },
          cancel: {
            text: l,
            value: null,
            visible: s,
            className: u
          }
        }
      }).then((S) => {
        S && typeof e.onOk == "function" && e.onOk(), o(S);
      }).catch((S) => {
        a(S);
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
      Ee({
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
      }).then((l) => {
        o(l);
      }).catch((l) => {
        a(l);
      });
    } else if (typeof e == "boolean")
      !e && Ee.close && Ee.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Ln(e) {
  return e.replace(/_(\w)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function is(e) {
  let n = document.createElement("div");
  return n.textContent !== void 0 ? n.textContent = e : n.innerText = e, n.innerHTML;
}
function ss(e) {
  let n = document.createElement("div");
  return n.innerHTML = e, n.innerText || n.textContent;
}
function cs(e) {
  return new Promise((n) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      n(t.result);
    };
  });
}
function Rn(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function us(e) {
  return b(e) === "String" && e.indexOf("image") > -1;
}
function fs(e) {
  const n = Rn(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function ds(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, Vn(t);
}
function Vn(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
function at({
  group: e,
  condition: n,
  pathKey: t,
  childKey: r = "children",
  path: o = []
}) {
  if (e && J(e)) {
    if (ht(n)) {
      if (ge(e)) {
        let a = e, i = he(o);
        if (n(a))
          return t && a[t] && i.push(a[t]), i;
        if (a[r] && !Me(a[r])) {
          t && a[t] && i.push(a[t]);
          let l = at({
            group: a[r],
            condition: n,
            pathKey: t,
            childKey: r,
            path: i
          });
          if (!Me(l))
            return l;
        }
      } else if (Array.isArray(e))
        for (let a of e) {
          let i = he(o);
          if (n(a))
            return t && a[t] ? i.push(a[t]) : i.push(String(e.indexOf(a))), i;
          if (a[r] && a[r].length > 0) {
            t && a[t] ? i.push(a[t]) : i.push(String(e.indexOf(a)));
            let l = at({
              group: a[r],
              condition: n,
              pathKey: t,
              childKey: r,
              path: i
            });
            if (!Me(l))
              return l;
          }
        }
    } else if (Array.isArray(e))
      for (let a of e) {
        let i = he(o);
        if (a === n)
          return i.push(String(e.indexOf(a))), i;
      }
  }
  return [];
}
function Dn(e, n = 12) {
  if (b(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const r = t.clientWidth;
    return document.body.removeChild(t), r;
  }
  return 0;
}
function ps(e) {
  return e === "" ? null : e;
}
function gs(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
const hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: ds,
  emptyInput: ps,
  fakeALinkClick: Vn,
  findPath: at,
  getFileSrc: cs,
  getFileTypeByName: Rn,
  getFileTypeIconByName: fs,
  getStringWidth: Dn,
  htmlDecode: ss,
  htmlEncode: is,
  isImgByFile: us,
  stopBubbling: gs,
  toHump: Ln
}, Symbol.toStringTag, { value: "Module" }));
function b(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function Hn(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function lt(e) {
  let n = b(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = b(e[t]);
        r === "String" ? e[t] = e[t].trim() : (r === "Object" || r === "Array") && lt(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, r = e.length; t < r; t++) {
      let o = b(e[t]);
      o === "String" ? e[t] = e[t].trim() : (o === "Array" || o === "Object") && lt(e[t]);
    }
  return e;
}
function it(e, n = []) {
  if (b(e) === "Array")
    return e.forEach((t, r) => {
      switch (b(t)) {
        case "Array":
        case "Object":
          it(t);
          break;
        default:
          e[r] = null;
      }
    }), e;
  if (b(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = !0;
        for (let o of n)
          if (o === t) {
            r = !1;
            break;
          }
        if (r)
          switch (b(e[t])) {
            case "Array":
            case "Object":
              it(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
const ms = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function bs(e) {
  let n = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && n.append(t, e[t]);
  return n;
}
function ys(e, n, t = !1) {
  if (!e || !n)
    return !1;
  let r, o = "notFoundC", a = function(i, l) {
    if (Array.isArray(i)) {
      if (b(l) === "Function" && l(i))
        return o = i, [];
      for (let s of i) {
        if (o !== "notFoundC")
          break;
        if (b(l) === "Function" && l(s) || s === l)
          return o = s, [i.indexOf(s)];
        if (b(s) === "Array" || b(s) === "Object") {
          let c = a(s, l);
          if (c !== void 0)
            return [i.indexOf(s), ...c];
        }
      }
    } else if (b(i) === "Object") {
      if (b(l) === "Function" && l(i))
        return o = i, [];
      for (let s in i) {
        if (o !== "notFoundC")
          break;
        if (i.hasOwnProperty(s)) {
          if (b(l) === "Function" && l(s) || i[s] === l)
            return o = i[s], [s];
          if (b(i[s]) === "Object" || b(i[s]) === "Array") {
            let c = a(i[s], l);
            if (c !== void 0)
              return [s, ...c];
          }
        }
      }
    }
  };
  return r = a(e, n), t ? r || !1 : o === "notFoundC" ? !1 : o;
}
function vs(e, n) {
  for (let t = 0, r = n.length; t < r; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function ws(e, n = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`), r = e && String(e) || "";
  return t.test(r) ? Number(r.replace(t, "$1")) : e;
}
function Un(e, n = {}, t = "get") {
  let r = document.createElement("form"), o = document.getElementsByTagName("body")[0];
  o.appendChild(r), r.setAttribute("style", "display:none"), r.setAttribute("target", ""), r.setAttribute("method", t);
  let a = e;
  if (window && window.hasOwnProperty("g")) {
    let i = Object.keys(window.g).filter((l) => l.indexOf("URL") > -1).map((l) => l.replace("URL", ""));
    for (let l of i) {
      let s = new RegExp("^/" + l + "(?=/.*$)", "i");
      if (s.test(e) && window.g[l + "URL"]) {
        a = window.g[l + "URL"] + e.replace(s, "");
        break;
      }
    }
  }
  if (r.setAttribute("action", a), ge(n)) {
    for (let l in n)
      if (n.hasOwnProperty(l) && (n[l] || n[l] === 0 || n[l] === !1 || n[l] === "")) {
        let s = document.createElement("input");
        s.setAttribute("type", "hidden"), s.setAttribute("name", l), s.setAttribute("value", n[l]), r.appendChild(s);
      }
    r.submit();
    let i = setTimeout(() => {
      o.removeChild(r), clearTimeout(i), i = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function _s(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    qe.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Un(e, n, t);
}
function Ss(e, n, t = !1) {
  let r;
  if (e && b(n) === "Array") {
    let o = localStorage.getItem(e);
    if (o) {
      let a = JSON.parse(decodeURI(o));
      r = n.filter((i) => i.key && a.indexOf(i.title) !== -1).map((i) => i.key);
    } else
      r = n.map((a) => a.key);
  } else
    r = [];
  return t || (r = String(r)), r;
}
function ee(e) {
  return e != null && e !== "";
}
function Ts(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function Gn(e, n = !1, t = "") {
  return function(r, o) {
    let a;
    if (Array.isArray(e)) {
      let s = [];
      for (let c of e)
        ee(o.row[c]) && s.push(o.row[c]);
      a = s.join(t);
    } else
      typeof e == "function" ? a = e(o) : a = o.row[e];
    let i = Dn(a), l = o.column._width;
    return a && i > l ? r(
      "Tooltip",
      {
        style: {
          width: "100%"
        },
        props: {
          content: a,
          maxWidth: l * 2
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
          a
        )
      ]
    ) : r("span", n && !ee(a) ? "--" : a);
  };
}
function $s(e) {
  if (ge(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && ee(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (ee(n))
        return !1;
    return !0;
  }
  return !ee(e);
}
function Os(e) {
  return b(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : b(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function Wn({
  group: e,
  condition: n,
  key: t,
  val: r,
  childKey: o = "children"
}) {
  if (b(e) !== "Array" || b(n) !== "Function" || b(t) !== "String" || b(o) !== "String")
    return !1;
  e.forEach((a) => {
    n(a) && (b(r) === "Function" ? a[t] = r(a[t]) : a[t] = r), b(a[o]) === "Array" && a[o].length > 0 && Wn({
      group: a[o],
      condition: n,
      key: t,
      val: r,
      childKey: o
    });
  });
}
function xs(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function qn(e) {
  return b(e) === "Number" && String(e) === "NaN";
}
function Cs(e, n = !1, t = !1) {
  if (b(e) !== "Object")
    return e;
  let r = Object.assign(e, {}), o = "";
  for (let a in r)
    if (r.hasOwnProperty(a)) {
      let i = r[a];
      i === void 0 || i === "" || b(i) === "String" && i.trim() === "" || i === null || qn(i) ? t ? n ? o += a + "=&" : r[a] = "" : delete r[a] : n && (o += a + "=" + i + "&");
    }
  return n ? o.length > 0 ? o.substr(0, o.length - 1) : "" : r;
}
function st(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || ge(t) ? n.push(st(t)) : ee(t) && n.push(t);
  } else if (ge(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || ge(e[t]) ? n[t] = st(e[t]) : ee(e[t]) && (n[t] = e[t]));
  return n;
}
function As(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function Jn(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
const Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: it,
  dataFilterOrToUrl: Cs,
  decimalDigitsLimit: ws,
  downloadFileByFormSubmit: Un,
  fileExport: _s,
  findCollection: ys,
  formDataHeadConfig: ms,
  getColumnsKeys: Ss,
  hasPermission: xs,
  htmlPrint: As,
  isEmptyValue: $s,
  isNaN: qn,
  isNumberValue: Ts,
  isValidValue: ee,
  myTypeof: b,
  oneOf: vs,
  removeEmptyValue: st,
  setValByOption: Wn,
  siblingElems: Jn,
  stringLength: Os,
  toFormData: bs,
  toLine: Hn,
  tooltipManual: Gn,
  trimObj: lt
}, Symbol.toStringTag, { value: "Module" })), js = { class: "groupBoxRP" }, Ps = ["onClick"], Is = /* @__PURE__ */ H({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const n = e, t = gr();
    function r(a) {
      return a.path === n.pathName ? "active" : "";
    }
    function o(a, i) {
      a.preventDefault();
      let l = a.target;
      if (!i.children && !l.classList.contains("active")) {
        t.push(i.path);
        return;
      }
      let s = l.parentNode, c = Jn(s);
      for (let u of c) {
        u.classList.remove("open");
        const d = u.querySelectorAll(".open");
        for (let g of d)
          g.classList.remove("open");
      }
      s.classList.toggle("open");
    }
    return (a, i) => {
      const l = k("sideMenuGroup", !0);
      return A(), P("ul", js, [
        (A(!0), P(dt, null, pt(n.data, (s, c) => (A(), P("li", {
          class: le({ dropItemRP: s.children }),
          key: s.path + c
        }, [
          x("div", {
            class: le(["menuTxtR", r(s)]),
            onClick: (u) => o(u, s),
            style: D({ paddingLeft: s.level * 20 + "px" })
          }, U(s.name || "-- no name --"), 15, Ps),
          s.children ? (A(), Re(l, {
            key: 0,
            data: s.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : un("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), ks = { class: "menuListR" }, Bs = /* @__PURE__ */ H({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: n }) {
    const t = e, r = hr(), o = z(!0), a = z(), i = z(), l = O(() => o.value ? j("r.hideMenu") : j("r.showMenu")), s = O(() => o.value ? "ios-arrow-back" : "ios-arrow-forward");
    ur(() => {
      let d = localStorage.getItem("menuDisplayR") || "";
      d !== "" ? o.value = JSON.parse(d) : (o.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), gt(
      () => r.path,
      (d) => {
        a.value = d, dn(u);
      },
      { immediate: !0 }
    );
    function c() {
      o.value = !o.value, localStorage.setItem("menuDisplayR", JSON.stringify(o.value)), n("on-change", o.value);
    }
    function u() {
      let d = i.value.querySelectorAll(".dropItemRP");
      for (let g of d)
        g.querySelector(".active") && !g.classList.contains("open") && g.classList.add("open");
    }
    return (d, g) => {
      const S = k("Icon");
      return A(), P("div", {
        ref_key: "menuRef",
        ref: i,
        class: "menuBoxRP"
      }, [
        q(x("div", ks, [
          F(Is, {
            data: t.data,
            pathName: h(a)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [te, h(o)]
        ]),
        F(S, {
          type: h(s),
          size: 25,
          class: le([{ showIco: !h(o) }, "menuShowHideIco"]),
          title: h(l),
          onClick: c,
          color: h(o) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Es = ["title"], Fs = /* @__PURE__ */ H({
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
    function r(o) {
      t.disabled || n("click", o);
    }
    return (o, a) => {
      const i = k("Icon"), l = fn("has");
      return q((A(), P("div", {
        class: le(["tableBtnsG", { disabled: t.disabled }]),
        onClick: r,
        title: t.title || h(j)("r.button")
      }, [
        F(i, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"])
      ], 10, Es)), [
        [l, t.has]
      ]);
    };
  }
}), Ns = { class: "contentX" }, Ms = { class: "arrowA" }, zs = /* @__PURE__ */ H({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const n = e, t = z(!0), r = O(() => t ? "background:" + n.bg || "transparent" : "");
    return (o, a) => {
      const i = k("Icon");
      return A(), P("div", {
        style: D(h(r))
      }, [
        q(x("div", Ns, [
          Q(o.$slots, "default")
        ], 512), [
          [te, h(t)]
        ]),
        x("div", Ms, [
          x("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (l) => t.value = !h(t))
          }, [
            F(i, {
              type: h(t) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Ls = { class: "contentZ" }, Rs = /* @__PURE__ */ H({
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
      set(a) {
        n("update:modelValue", a);
      }
    }), o = O(() => r.value ? "background:" + t.bg : "");
    return (a, i) => (A(), P("div", {
      style: D(h(o))
    }, [
      q(x("div", Ls, [
        Q(a.$slots, "default")
      ], 512), [
        [te, h(r)]
      ])
    ], 4));
  }
});
let ct = [], ut = [];
const Vs = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    ct.map((n) => {
      window.clearTimeout(n);
    }), ut.map((n) => {
      window.clearInterval(n);
    }), ct.length = 0, ut.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, ae = function(e, n) {
  let t = window.setTimeout(e, n);
  return ct.push(t), t;
}, Yn = function(e, n) {
  let t = window.setInterval(e, n);
  return ut.push(t), t;
}, Ds = /* @__PURE__ */ H({
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
    const o = O({
      get() {
        return t.modelValue;
      },
      set(s) {
        n("update:modelValue", s);
      }
    }), a = O({
      get() {
        return t.open;
      },
      set(s) {
        n("on-toggle", s);
      }
    }), i = O(() => a.value ? "ios-arrow-up" : "ios-arrow-down");
    function l() {
      r || (r = !0, n("on-search", o.value), ae(() => {
        r = !1;
      }, 2e3));
    }
    return (s, c) => {
      const u = k("Input"), d = k("icon");
      return A(), P("div", {
        class: "tableSearchV",
        style: D({ position: t.fixed ? "fixed" : "absolute", right: t.right, top: t.top })
      }, [
        Q(s.$slots, "default", {}, () => [
          F(u, {
            modelValue: h(o),
            "onUpdate:modelValue": c[0] || (c[0] = (g) => Ae(o) ? o.value = g : null),
            style: D({ width: t.width }),
            search: "",
            onOnSearch: l,
            class: "searchInputC",
            placeholder: t.placeholder || h(j)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        q(x("span", {
          class: "sbt",
          onClick: c[1] || (c[1] = (g) => a.value = !h(a)),
          style: D({ color: t.btnColor })
        }, [
          F(d, {
            type: h(i),
            color: t.btnColor
          }, null, 8, ["type", "color"]),
          ve(U(h(j)("r.adSearch")), 1)
        ], 4), [
          [te, t.showBtn]
        ])
      ], 4);
    };
  }
}), Hs = { class: "tabSetF" }, Us = { class: "topCheck" }, Gs = /* @__PURE__ */ H({
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
    const t = e, r = z(!0), o = z(!1), a = z(!1), i = z([]), l = O(() => {
      let m = j("r.unknown");
      return t.modelValue.length > i.value.length && (i.value = he(t.modelValue)), i.value.map((y) => {
        let v = { label: y && y.title || m };
        return y && y.disableShowSetting && (v.disabled = !0), v;
      });
    }), s = O(() => l.value.filter((m) => m.disabled)), c = O({
      get() {
        return t.modelValue.map((m) => m && m.title || j("r.unknown"));
      },
      set(m) {
        let y = i.value.filter((v) => {
          for (let L of m)
            if (L === v.title)
              return !0;
          return !1;
        });
        n("update:modelValue", y);
      }
    }), { locale: u } = mr();
    pn(() => {
      let m = j("r.unknown"), y;
      u.value ? y = localStorage.getItem(t.sKey + "_" + u.value) : y = localStorage.getItem(t.sKey), y ? c.value = JSON.parse(decodeURI(y)) : t.defaultCheck && (c.value = t.modelValue.filter((v) => v.showSettingCheck).map((v) => v && v.title || m));
    });
    function d(m) {
      m.length === l.value.length ? (r.value = !1, o.value = !0) : m.length > s.value.length ? (r.value = !0, o.value = !1) : (r.value = !1, o.value = !1);
    }
    gt(() => c.value, d, {
      immediate: !0,
      deep: !0
    });
    function g() {
      a.value || (a.value = !0);
    }
    function S() {
      u.value ? localStorage.setItem(t.sKey + "_" + u.value, encodeURI(JSON.stringify(c.value))) : localStorage.setItem(t.sKey, encodeURI(JSON.stringify(c.value))), a.value = !1;
    }
    function _() {
      r.value ? o.value = !1 : o.value = !o.value, r.value = !1, o.value ? c.value = l.value.map((m) => m.label) : c.value = s.value.map((m) => m.label);
    }
    return (m, y) => {
      const v = k("Icon"), L = k("Checkbox"), ue = k("CheckboxGroup");
      return A(), P("div", Hs, [
        x("div", {
          class: "tabSetBt",
          onClick: g
        }, [
          F(v, {
            type: "md-settings",
            size: "17"
          }),
          x("span", null, U(h(j)("r.tabSetting")), 1)
        ]),
        q(x("div", {
          class: "tabSetCard",
          style: D({ top: m.top, right: m.right, width: m.width, backgroundColor: m.bg })
        }, [
          x("div", Us, [
            F(L, {
              indeterminate: h(r),
              modelValue: h(o),
              "onUpdate:modelValue": y[0] || (y[0] = (N) => Ae(o) ? o.value = N : null),
              onClick: fr(_, ["prevent"])
            }, {
              default: me(() => [
                ve(U(h(j)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            x("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: S
            }, U(h(j)("r.confirm")), 1)
          ]),
          F(ue, {
            modelValue: h(c),
            "onUpdate:modelValue": y[1] || (y[1] = (N) => Ae(c) ? c.value = N : null)
          }, {
            default: me(() => [
              (A(!0), P(dt, null, pt(h(l), (N, ne) => (A(), Re(L, {
                class: "setItem",
                label: N && N.label,
                key: "tabSet_" + m.sKey + ne,
                disabled: N && N.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [te, h(a)]
        ])
      ]);
    };
  }
});
let de = 0, Ie = document.createElement("div");
Ie.setAttribute("class", "spinModal");
Ie.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(Ie);
};
function on(e) {
  e ? Ie.classList.add("show") : Ie.classList.remove("show");
}
function Zn(e) {
  let n = de;
  e ? de++ : de > 0 && de--, n !== de && (de === 0 ? on(!1) : n === 0 && on(!0));
}
const Ws = window.location.origin;
let pe = null;
const an = (...e) => we.apply(pe, e);
let G = et.create({
  baseURL: Ws,
  withCredentials: !0
  // 允许携带cookie
});
function qs() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
G.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function ln() {
  if (G.store)
    if (typeof G.store == "function") {
      const e = G.store();
      e.logout && e.logout();
    } else
      G.store.dispatch("logout");
  else
    qs();
}
G.interceptors.response.use(
  (e) => (pe && e && e.data && (e.data.code === 403 || e.data.code === 409) && pe.messageBox({
    content: an("r.http." + e.data.code),
    onOk: ln
  }), e),
  (e) => (pe && e && e.response && (e.response.status === 403 || e.response.status === 409) && pe.messageBox({
    content: an("r.http." + e.response.status),
    onOk: ln
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function K(e, n, t, r) {
  r && r.spin && Zn(!1);
  let o = !0, a = e && e.data;
  if (a) {
    t = t || [];
    for (let i of t)
      a = a[i], o = o && a;
    return o ? a : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function Js(e, n, t, r, o, a, i) {
  return new Promise((l, s) => {
    switch (e) {
      case "get":
        G.get(n, { params: t }).then((u) => {
          let d = K(u, r, o, a);
          d ? l(d) : s(u);
        }).catch((u) => {
          K({}, r, o, a), s(u);
        });
        break;
      case "delete":
        let c = i ? "params" : "data";
        G.delete(n, { [c]: t }).then((u) => {
          let d = K(u, r, o, a);
          d ? l(d) : s(u);
        }).catch((u) => {
          K({}, r, o, a), s(u);
        });
        break;
      case "post":
        G.post(n, t, a).then((u) => {
          let d = K(u, r, o, a);
          d ? l(d) : s(u);
        }).catch((u) => {
          K({}, r, o, a), s(u);
        });
        break;
      case "put":
        G.put(n, t, a).then((u) => {
          let d = K(u, r, o, a);
          d ? l(d) : s(u);
        }).catch((u) => {
          K({}, r, o, a), s(u);
        });
        break;
    }
  });
}
function Fe(e, n, t = {}, r, o, a, i) {
  return new Promise((l, s) => {
    if (n) {
      a && a.spin && Zn(!0);
      let c = n;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let S = Object.keys(g).filter((_) => _.indexOf("URL") > -1).map((_) => _.replace("URL", ""));
        for (let _ of S) {
          let m = new RegExp("^/" + _ + "(?=/.*$)", "i");
          if (m.test(n) && g[_ + "URL"]) {
            c = g[_ + "URL"] + n.replace(m, "");
            break;
          }
        }
      }
      let u;
      if (a && a.headers && a.headers["Content-Type"] === "multipart/form-data")
        u = t;
      else if (t && !Me(t))
        if (Array.isArray(t)) {
          u = [];
          for (let g of t)
            (g || g === 0 || g === !1 || g === "" && a && !a.noEmptyStr) && u.push(g);
        } else {
          u = {};
          for (let g in t)
            t.hasOwnProperty(g) && (t[g] || t[g] === 0 || t[g] === !1 || t[g] === "" && a && !a.noEmptyStr) && (u[g] = t[g]);
        }
      let d = e.toLowerCase();
      Js(d, c, u, r, o, a, i).then((g) => {
        l(g);
      }).catch((g) => {
        s(g);
      });
    } else
      console.error("没有请求地址:url"), s("没有请求地址:url");
  });
}
const Je = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, n) {
    G.store = e, pe = n.config.globalProperties;
  },
  post(e, n, t, r, o) {
    return new Promise((a, i) => {
      Fe("post", e, n, t, r, o).then((l) => {
        a(l);
      }).catch((l) => {
        i(l);
      });
    });
  },
  put(e, n, t, r, o) {
    return new Promise((a, i) => {
      Fe("put", e, n, t, r, o).then((l) => {
        a(l);
      }).catch((l) => {
        i(l);
      });
    });
  },
  get(e, n, t, r, o) {
    return new Promise((a, i) => {
      Fe("get", e, n, t, r, o).then((l) => {
        a(l);
      }).catch((l) => {
        i(l);
      });
    });
  },
  delete(e, n, t, r, o, a = !0) {
    return new Promise((i, l) => {
      Fe("delete", e, n, t, r, o, a).then((s) => {
        i(s);
      }).catch((s) => {
        l(s);
      });
    });
  },
  all: et.all,
  spread: et.spread,
  config: G
}, Xs = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, Ys = { class: "topBtn" }, Zs = { class: "fullHeight relativeBox" }, Ks = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, Qs = { class: "pageContainer" }, ec = 300, tc = /* @__PURE__ */ H({
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
    const r = e, { globalProperties: o } = ft().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...br });
    const i = o.pageSizes || [10, 20, 30, 40], l = z(r.data), s = z(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || r.pageSize
    ), c = z(1), u = z(0);
    let d = [], g, S, _ = r.orderKey, m = r.orderDefault;
    const y = O(() => {
      for (let f of r.columns)
        if (f.fixed)
          return !0;
      return !1;
    }), v = O(() => r.selectionFixed || y.value), L = O(() => {
      let f = {
        ...r.searchData,
        current: c.value,
        size: s.value
      };
      return r.sortable === "custom" && (r.orderKeyFormat === "underline" ? f[m] = Hn(_) : r.orderKeyFormat === "camelcase" && (f[m] = Ln(_))), f;
    }), ue = O(() => {
      let f = r.columns.filter((p) => p.type !== "selection");
      if (r.selection || r.radio) {
        let p;
        r.radio ? p = {
          title: " ",
          width: 65,
          render: (R, B) => R("Radio", {
            props: {
              value: B.row.btChecked
            }
          })
        } : p = {
          type: "selection",
          width: 60
        }, r.selectionFixed && (p.fixed = r.selectionFixed), f.unshift(p);
      }
      return f.forEach((p) => {
        r.sortable === "custom" ? p.key && p.sortable !== !0 && p.sortable !== !1 && (p.sortable = "custom") : p.sortable = !1, p.align || (p.align = "center");
      }), r.tableEmptyTdHandle && f.forEach((p) => {
        p.key && p.render === void 0 && (p.tooltip ? p.render = Gn(p.key, !0) : p.render = (R, B) => {
          let M = B.row[p.key];
          return R("span", M === "" || M === null || M === void 0 ? "--" : M);
        });
      }), f;
    }), N = O({
      get() {
        return l.value.map((f, p) => ({
          btKey: "bt-" + p,
          btChecked: !1,
          ...f
        }));
      },
      set(f) {
        l.value = f;
      }
    }), ne = O(() => d.map((f) => f.id)), C = O(() => d.map((f) => f.btKey)), I = z();
    gt(() => r.searchData, re, { deep: !0 });
    function re() {
      c.value = 1, $e();
    }
    function ke() {
      r.initData && $e();
    }
    function er(f) {
      l.value.unshift(he(f)), ae(() => {
        var p;
        (p = I.value) == null || p.clickCurrentRow(0);
      }, 100);
    }
    function tr(f, p, R) {
      let B = null;
      if (es(p) && p ? B = S : ls(p) && (B = p), B !== null) {
        let M = l.value[B];
        for (let w in f)
          f.hasOwnProperty(w) && (M[w] = f[w]);
        R && ae(() => {
          var w;
          (w = I.value) == null || w.clickCurrentRow(B);
        }, 10);
      }
    }
    function nr(f) {
      l.value.splice(f, 1), ae(() => {
        var p;
        (p = I.value) == null || p.clickCurrentRow(0);
      }, 100);
    }
    function rr(f, p) {
      var R;
      f.btChecked && r.radio || (r.selection || r.radio) && r.rowClickSelect && ((R = I.value) == null || R.toggleSelect(p));
    }
    function or(f, p) {
      g = p.btKey, S = Number(p.btKey.split("-")[1]), r.radio && (l.value[S].btChecked = !0);
    }
    function ar(f) {
      if (r.radio)
        for (let p of N.value)
          p.btKey !== g && (l.value[Number(p.btKey.split("-")[1])].btChecked = !1);
      d = f;
    }
    function lr() {
      return he(d);
    }
    function ir(f) {
      c.value = f, $e();
    }
    function sr(f) {
      s.value = f, localStorage.setItem("btPageSize", String(f)), c.value === 1 && $e();
    }
    function cr({ key: f, order: p }) {
      m === "normal" ? (_ = r.orderKey, m = r.orderDefault) : (_ = f, m = p), c.value = 1, Te();
    }
    function Be() {
      var f;
      if (r.radio) {
        if (C.value.length > 0 && N.value.length > 0) {
          let p = C.value[0].split("-")[1];
          N.value[p].btChecked = !1;
        }
      } else
        (f = I.value) == null || f.selectAll(!1);
      d.length > 0 && (d = [], t("on-selection-change", [])), g = null, S = null;
    }
    function Xe() {
      l.value = [], Be(), c.value = 1, u.value = 0;
    }
    function Te(f, p, R) {
      return new Promise((B) => {
        f && (m = f), p && (_ = p), r.url ? Je.get(r.url, L.value, "", [], { spin: r.getDataLoading }).then((M) => {
          var $t, Ot, xt, Ct, At, jt, Pt, It;
          let w;
          R || Be(), typeof r.dataHandler == "function" ? w = r.dataHandler(M) : w = M, w.data ? (($t = w.data) != null && $t.records || ((Ot = w.data) == null ? void 0 : Ot.records) === null ? l.value = ((xt = w.data) == null ? void 0 : xt.records) || [] : w.data.page ? ((Ct = w.data.page) != null && Ct.records || ((At = w.data.page) == null ? void 0 : At.records) === null) && (l.value = w.data.page.records || []) : w.data.data ? ((jt = w.data.data) != null && jt.records || ((Pt = w.data.data) == null ? void 0 : Pt.records) === null) && (l.value = ((It = w.data.data) == null ? void 0 : It.records) || []) : l.value = w.data, u.value = w.data.page && w.data.page.total || w.data.data && w.data.data.total || w.data.total || w.total || 0, u.value === 0 && c.value > 1 && l.value && l.value.length === 0 ? c.value = 1 : c.value > 1 && u.value <= (c.value - 1) * s.value && (c.value--, dn(function() {
            Te(f, p);
          })), t("on-data-change", w), B(w)) : (console.warn("请求返回数据有误，无法使用"), Xe(), t("on-data-change", w));
        }).catch((M) => {
          console.warn(M), Be(), Xe(), t("on-data-change", M);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function $e(f, p, R) {
      r.radio && (f || r.rowClickNum !== -1) ? Te(p, R, f).then(() => {
        l.value.length > 0 && ae(() => {
          var B, M;
          f ? (B = I.value) == null || B.clickCurrentRow(S || 0) : (M = I.value) == null || M.clickCurrentRow(r.rowClickNum);
        }, 10);
      }) : Te();
    }
    return pn(ke), n({
      selectedIds: ne,
      addRow: er,
      setRowData: tr,
      deleteRow: nr,
      getSelected: lr,
      clearSelect: Be,
      clearTableData: Xe,
      getTableData: Te,
      getDataAndClickRow: $e
    }), (f, p) => {
      const R = k("Table"), B = k("Page");
      return A(), P("div", Xs, [
        q(x("div", Ys, [
          Q(f.$slots, "tableSetting"),
          Q(f.$slots, "topMsg"),
          Q(f.$slots, "topBtnGroup")
        ], 512), [
          [te, f.showTopRow]
        ]),
        x("div", {
          class: le(["tableContainer fullHeight", { noTop: !f.showTopRow, noPage: f.noPage }])
        }, [
          x("div", Zs, [
            x("div", Ks, [
              F(R, dr({
                ref_key: "tableRef",
                ref: I
              }, f.$attrs, {
                height: h(v) && ec || null,
                class: { noBorderTable: f.noBorderTable, fullHeightTable: !h(v), lightHeadO: f.lightHead },
                columns: h(ue),
                data: h(N),
                "highlight-row": f.radio || f.highlightRow,
                onOnSelect: or,
                onOnSelectionChange: ar,
                onOnSortChange: cr,
                onOnRowClick: rr
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        q(x("div", Qs, [
          F(B, {
            "page-size-opts": h(i),
            total: h(u),
            current: h(c),
            "page-size": h(s),
            "show-sizer": "",
            "show-total": "",
            showElevator: !f.noElevator,
            size: f.pageComponentSize,
            onOnChange: ir,
            onOnPageSizeChange: sr
          }, null, 8, ["page-size-opts", "total", "current", "page-size", "showElevator", "size"])
        ], 512), [
          [te, !f.noPage]
        ])
      ], 512);
    };
  }
}), nc = /* @__PURE__ */ H({
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
        let u = {
          key: c,
          val: null
        };
        r.value && r.value !== c && (u.beforeKey = r.value), n("update:modelValue", u), n("on-change", u);
      }
    }), o = O({
      get() {
        return t.modelValue && t.modelValue.val || null;
      },
      set(c) {
        n("update:modelValue", {
          key: r.value,
          val: c
        });
      }
    }), a = O(() => ({
      width: t.labelWidth + "px",
      textAlign: t.labelTextAlign
    })), i = O(() => ({ width: t.itemWidth + "px" }));
    function l(c) {
      c && c.target && c.target.value !== void 0 && s({
        key: r.value,
        val: c.target.value
      });
    }
    const s = Ki((c) => {
      n("on-change", c);
    }, 500);
    return (c, u) => {
      const d = k("Option"), g = k("Select"), S = k("Input");
      return A(), P("div", null, [
        F(g, {
          modelValue: h(r),
          "onUpdate:modelValue": u[0] || (u[0] = (_) => Ae(r) ? r.value = _ : null),
          style: D(h(a)),
          disabled: !!c.disabled,
          transfer: ""
        }, {
          default: me(() => [
            (A(!0), P(dt, null, pt(c.selectOption, (_, m) => (A(), Re(d, {
              value: _.val,
              key: "selectInputOp" + _.value + m,
              style: D({ textAlign: c.labelTextAlign })
            }, {
              default: me(() => [
                ve(U(_.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        F(S, {
          modelValue: h(o),
          "onUpdate:modelValue": u[1] || (u[1] = (_) => Ae(o) ? o.value = _ : null),
          placeholder: c.placeholder || h(j)("r.pInput"),
          style: D(h(i)),
          clearable: c.clearable,
          disabled: !!c.disabled,
          onOnChange: l
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
}), sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtTablePage: tc,
  FullPop: Cr,
  HeaderBt: hn,
  Hello: jr,
  IconTxtBtn: Pr,
  Page404: Fr,
  SelectInput: nc,
  ShowHidePanel: zs,
  ShowHidePanelB: Rs,
  SideMenu: Bs,
  TableIconBtn: Fs,
  TableSearch: Ds,
  TableSetting: Gs
}, Symbol.toStringTag, { value: "Module" }));
let xe = !1;
function Kn({
  height: e,
  width: n = 416,
  title: t,
  content: r,
  onOk: o,
  onCancel: a,
  okText: i,
  cancelText: l,
  noWarnIcon: s,
  footerAlign: c,
  cancelBt: u = !0
}) {
  const d = (...m) => we.apply(this, m);
  let S = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", _ = b(r) === "String";
  fe.warning({
    width: n,
    footerHide: !0,
    render: () => V(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: S
        }
      },
      [
        V(
          "div",
          {
            class: "containerN"
          },
          [
            V(
              "div",
              {
                class: "titleN"
              },
              [
                V("span", t || d("r.info.title")),
                V(
                  Ye,
                  {
                    class: "fr closeN",
                    type: "text",
                    onclick() {
                      xe || fe.remove();
                    }
                  },
                  [
                    V("i", {
                      class: "ivu-icon ivu-icon-ios-close",
                      style: {
                        fontSize: "30px"
                      }
                    })
                  ]
                )
              ]
            ),
            V(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: _ ? "center" : "left"
                }
              },
              [
                V("i", {
                  class: _ && !s ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                V("div", { class: "msgBoxConO" }, r || d("r.info.text"))
              ]
            ),
            V(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: c || "center"
                }
              },
              [
                V(
                  Ye,
                  {
                    class: "okBtN",
                    onclick(m) {
                      var y;
                      if (o && typeof o == "function") {
                        const v = o();
                        if (v && b(v) === "Promise") {
                          xe = !0;
                          const L = m && (m.currentTarget || m.target);
                          L && (L.classList.add("ivu-btn-loading"), L.nextSibling.setAttribute("disabled", "disabled"), ((y = L.parentElement) == null ? void 0 : y.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(v).then(() => {
                            xe = !1, fe.remove();
                          }).catch(() => {
                            xe = !1, fe.remove();
                          });
                        } else
                          fe.remove();
                      }
                    }
                  },
                  [
                    V("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    V("span", i || d("r.confirm"))
                  ]
                ),
                V(
                  Ye,
                  {
                    class: ["cancelBtN", !u && "hide"],
                    onclick() {
                      xe || (fe.remove(), b(a) === "Function" && a && a());
                    }
                  },
                  l || d("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function Qn(e, n, t, r) {
  const o = (...a) => we.apply(this, a);
  qe.call(this, {
    title: e || o("r.info.title"),
    text: n || o("r.info.text"),
    icon: t || "warning",
    onOk: r,
    buttons: [o("r.cancel")]
  });
}
const cn = {
  $fetch: Je,
  $swal: qe,
  $swalConfirm: Qn,
  messageBox: Kn,
  setInterval: Yn,
  setTimeout: ae,
  ...Xn
}, rc = function(e, n = {}) {
  Je.init(n.useStore || n.store, e), n.locale && Le.use(n.locale), n.i18n && Le.i18n(n.i18n), n.router && Vs(n.router), n.notRegistryGlobal || (Object.keys(sn).forEach((t) => {
    e.component(t) || e.component(t, sn[t]);
  }), Object.keys(cn).forEach((t) => {
    e.config.globalProperties[t] = cn[t];
  })), e.directive("has") || e.directive("has", (t, r) => {
    r.value && !e.config.globalProperties.hasPermission(r.value) && (t.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (t, r) => {
    let o;
    r.arg ? o = t.querySelector("." + r.arg) : o = t.querySelector(".ivu-select-dropdown") || t, o.addEventListener("scroll", function() {
      o.scrollTop > 0 && o.scrollHeight - o.scrollTop <= o.clientHeight && r.value();
    });
  });
}, oc = Le.use, ac = Le.i18n, pc = {
  locale: oc,
  i18n: ac,
  install: rc,
  ...Xn,
  ...hs,
  $fetch: Je,
  $swal: qe,
  $swalConfirm: Qn,
  messageBox: Kn,
  setInterval: Yn,
  setTimeout: ae
};
export {
  Je as $fetch,
  qe as $swal,
  Qn as $swalConfirm,
  tc as BtTablePage,
  Cr as FullPop,
  hn as HeaderBt,
  jr as Hello,
  Pr as IconTxtBtn,
  Fr as Page404,
  nc as SelectInput,
  zs as ShowHidePanel,
  Rs as ShowHidePanelB,
  Bs as SideMenu,
  Fs as TableIconBtn,
  Ds as TableSearch,
  Gs as TableSetting,
  it as clearObj,
  Cs as dataFilterOrToUrl,
  ws as decimalDigitsLimit,
  pc as default,
  Un as downloadFileByFormSubmit,
  ds as downloadFileReaderFile,
  ps as emptyInput,
  Vn as fakeALinkClick,
  _s as fileExport,
  ys as findCollection,
  at as findPath,
  ms as formDataHeadConfig,
  Ss as getColumnsKeys,
  cs as getFileSrc,
  Rn as getFileTypeByName,
  fs as getFileTypeIconByName,
  Dn as getStringWidth,
  xs as hasPermission,
  ss as htmlDecode,
  is as htmlEncode,
  As as htmlPrint,
  $s as isEmptyValue,
  us as isImgByFile,
  qn as isNaN,
  Ts as isNumberValue,
  ee as isValidValue,
  Kn as messageBox,
  b as myTypeof,
  vs as oneOf,
  st as removeEmptyValue,
  Yn as setInterval,
  ae as setTimeout,
  Wn as setValByOption,
  Jn as siblingElems,
  gs as stopBubbling,
  Os as stringLength,
  bs as toFormData,
  Ln as toHump,
  Hn as toLine,
  Gn as tooltipManual,
  lt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
