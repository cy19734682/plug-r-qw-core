import { getCurrentInstance as _t, defineComponent as z, resolveComponent as F, openBlock as j, createElementBlock as B, normalizeClass as ie, normalizeStyle as V, createBlock as Fe, createCommentVNode as xn, renderSlot as ae, ref as k, computed as O, withDirectives as Z, unref as b, createElementVNode as P, toDisplayString as W, createVNode as R, withCtx as _e, createTextVNode as xe, vShow as se, resolveDirective as $n, Fragment as At, renderList as Tt, onBeforeMount as xr, watch as Xe, nextTick as On, isRef as Ae, onMounted as Ye, withModifiers as $r, mergeProps as Or, onUnmounted as Ir, h as G } from "vue";
import Cr from "deepmerge";
import Ve from "sweetalert";
import { useRouter as Mr, useRoute as Pr } from "vue-router";
import { useI18n as jr } from "vue-i18n";
import ut from "axios";
import { TableColumnConfig as Lr, Input as Er, Modal as be, Button as ot } from "view-ui-plus";
const In = {
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
}, Br = /(%|){([0-9a-zA-Z_]+)}/g;
function kr() {
  function e(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function n(t, ...r) {
    let a;
    return r.length === 1 && typeof r[0] == "object" && (a = r[0]), (!a || !a.hasOwnProperty) && (a = {}), t === void 0 ? "" : t.replace(Br, (o, l, i, c) => {
      let s;
      return t[c - 1] === "{" && t[c + o.length] === "}" ? i : (s = e(a, i) ? a[i] : null, s ?? "");
    });
  }
  return n;
}
const Fr = kr();
let Ge = In;
const Rr = {
  zh: In
};
let zt, Dt = {}, U, Nr = function(e, n) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, n);
  if (U && U.global)
    return U.global.t(e, n);
  if (U && U.locale) {
    if (!Dt[U.locale] || zt != U.locale) {
      Dt[U.locale] = !0;
      let t = U.getLocaleMessage(U.locale) || {}, r = Cr(Rr[U.locale], t, { clone: !0 });
      Ge = r, U.setLocaleMessage(U.locale, r), zt = U.locale;
    }
    return U.hlang(e, n);
  }
};
const $e = function(e, n) {
  let t = Nr.apply(this, [e, n]);
  if (t != null)
    return t;
  const r = e.split(".");
  let a = Ge;
  for (let o = 0, l = r.length; o < l; o++) {
    const i = r[o];
    if (t = a[i], o === l - 1)
      return Fr(t, n);
    if (!t)
      return "";
    a = t;
  }
  return "";
}, Ur = function(e) {
  Ge = e || Ge;
}, Vr = function(e) {
  U = e;
}, We = {
  use: Ur,
  t: $e,
  i18n: Vr
};
function E(e, n) {
  var r;
  const t = (r = _t()) == null ? void 0 : r.appContext.config.globalProperties;
  return $e.apply(t, [e, n]);
}
const Cn = /* @__PURE__ */ z({
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
        class: ie({ headerBtCTM: !0, withIconCTM: t.icon || t.withIcon, disabled: t.disabled }),
        style: V({ color: t.color, borderLeftColor: t.borderColor }),
        onClick: r
      }, [
        t.icon ? (j(), Fe(l, {
          key: 0,
          size: t.iconSize,
          type: t.icon
        }, null, 8, ["size", "type"])) : xn("", !0),
        ae(a.$slots, "default")
      ], 6);
    };
  }
}), zr = { class: "headerTxtAM" }, Dr = { class: "contentAM" }, Hr = /* @__PURE__ */ z({
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
    let a = k(!1);
    const o = O(() => typeof r.headerFontSize == "number" ? r.headerFontSize + "px" : r.headerFontSize), l = O(() => ({ zIndex: r.zIndex }));
    function i() {
      a.value = !0, t("on-open");
    }
    function c(s) {
      a.value = !1, t("on-close", s === !0);
    }
    return n({
      open: i,
      close: c
    }), (s, f) => Z((j(), B("div", {
      class: "fullScreenPopBoxAM",
      style: V(b(l))
    }, [
      P("div", {
        class: "headerAM",
        style: V({ color: r.headerColor, backgroundColor: r.headerBg, fontSize: b(o) })
      }, [
        P("span", zr, W(s.title || b(E)("r.title")), 1),
        R(Cn, {
          icon: "md-return-left",
          onClick: c
        }, {
          default: _e(() => [
            xe(W(b(E)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", Dr, [
        ae(s.$slots, "default")
      ])
    ], 4)), [
      [se, b(a)]
    ]);
  }
}), Gr = { class: "msg" }, Wr = /* @__PURE__ */ z({
  __name: "Hello",
  setup(e) {
    let n = k("Greetings from Ricky.");
    return (t, r) => (j(), B("span", Gr, W(b(n)), 1));
  }
}), Jr = /* @__PURE__ */ z({
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
      const i = F("Icon"), c = $n("has");
      return Z((j(), B("div", {
        class: ie(["tabTopBtnsT", { disabled: t.disabled }]),
        onClick: a,
        style: V({ "font-size": b(r) })
      }, [
        R(i, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"]),
        xe(" " + W(t.name || b(E)("r.button")), 1)
      ], 6)), [
        [c, o.has]
      ]);
    };
  }
}), qr = { class: "c404K" }, Kr = /* @__PURE__ */ P("div", { class: "t404" }, "404", -1), Xr = { class: "ct404" }, Yr = { class: "p404" }, Zr = /* @__PURE__ */ z({
  __name: "Page404",
  setup(e) {
    const t = _t().appContext.config.globalProperties.$router;
    function r() {
      t.go(-1);
    }
    return (a, o) => {
      const l = F("Button");
      return j(), B("div", qr, [
        Kr,
        P("div", Xr, "UH OH! " + W(b(E)("r.pageNotFound")), 1),
        P("div", Yr, W(b(E)("r.notFoundMsg")), 1),
        R(l, {
          class: "bt404",
          onClick: r
        }, {
          default: _e(() => [
            xe(W(b(E)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var Qr = typeof global == "object" && global && global.Object === Object && global;
const Mn = Qr;
var eo = typeof self == "object" && self && self.Object === Object && self, to = Mn || eo || Function("return this")();
const X = to;
var no = X.Symbol;
const ue = no;
var Pn = Object.prototype, ro = Pn.hasOwnProperty, oo = Pn.toString, Ce = ue ? ue.toStringTag : void 0;
function ao(e) {
  var n = ro.call(e, Ce), t = e[Ce];
  try {
    e[Ce] = void 0;
    var r = !0;
  } catch {
  }
  var a = oo.call(e);
  return r && (n ? e[Ce] = t : delete e[Ce]), a;
}
var lo = Object.prototype, io = lo.toString;
function so(e) {
  return io.call(e);
}
var uo = "[object Null]", co = "[object Undefined]", Ht = ue ? ue.toStringTag : void 0;
function Q(e) {
  return e == null ? e === void 0 ? co : uo : Ht && Ht in Object(e) ? ao(e) : so(e);
}
function K(e) {
  return e != null && typeof e == "object";
}
var fo = "[object Symbol]";
function po(e) {
  return typeof e == "symbol" || K(e) && Q(e) == fo;
}
var go = Array.isArray;
const de = go;
var ho = /\s/;
function mo(e) {
  for (var n = e.length; n-- && ho.test(e.charAt(n)); )
    ;
  return n;
}
var bo = /^\s+/;
function yo(e) {
  return e && e.slice(0, mo(e) + 1).replace(bo, "");
}
function ne(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var Gt = 0 / 0, vo = /^[-+]0x[0-9a-f]+$/i, wo = /^0b[01]+$/i, _o = /^0o[0-7]+$/i, Ao = parseInt;
function Wt(e) {
  if (typeof e == "number")
    return e;
  if (po(e))
    return Gt;
  if (ne(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ne(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = yo(e);
  var t = wo.test(e);
  return t || _o.test(e) ? Ao(e.slice(2), t ? 2 : 8) : vo.test(e) ? Gt : +e;
}
var To = "[object AsyncFunction]", So = "[object Function]", xo = "[object GeneratorFunction]", $o = "[object Proxy]";
function St(e) {
  if (!ne(e))
    return !1;
  var n = Q(e);
  return n == So || n == xo || n == To || n == $o;
}
var Oo = X["__core-js_shared__"];
const at = Oo;
var Jt = function() {
  var e = /[^.]+$/.exec(at && at.keys && at.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Io(e) {
  return !!Jt && Jt in e;
}
var Co = Function.prototype, Mo = Co.toString;
function ge(e) {
  if (e != null) {
    try {
      return Mo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Po = /[\\^$.*+?()[\]{}|]/g, jo = /^\[object .+?Constructor\]$/, Lo = Function.prototype, Eo = Object.prototype, Bo = Lo.toString, ko = Eo.hasOwnProperty, Fo = RegExp(
  "^" + Bo.call(ko).replace(Po, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ro(e) {
  if (!ne(e) || Io(e))
    return !1;
  var n = St(e) ? Fo : jo;
  return n.test(ge(e));
}
function No(e, n) {
  return e == null ? void 0 : e[n];
}
function he(e, n) {
  var t = No(e, n);
  return Ro(t) ? t : void 0;
}
var Uo = he(X, "WeakMap");
const ct = Uo;
var qt = Object.create, Vo = function() {
  function e() {
  }
  return function(n) {
    if (!ne(n))
      return {};
    if (qt)
      return qt(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const zo = Vo;
function Do(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
var Ho = function() {
  try {
    var e = he(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Kt = Ho;
function Go(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var Wo = 9007199254740991, Jo = /^(?:0|[1-9]\d*)$/;
function qo(e, n) {
  var t = typeof e;
  return n = n ?? Wo, !!n && (t == "number" || t != "symbol" && Jo.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function jn(e, n, t) {
  n == "__proto__" && Kt ? Kt(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function xt(e, n) {
  return e === n || e !== e && n !== n;
}
var Ko = Object.prototype, Xo = Ko.hasOwnProperty;
function Ln(e, n, t) {
  var r = e[n];
  (!(Xo.call(e, n) && xt(r, t)) || t === void 0 && !(n in e)) && jn(e, n, t);
}
function Ze(e, n, t, r) {
  var a = !t;
  t || (t = {});
  for (var o = -1, l = n.length; ++o < l; ) {
    var i = n[o], c = r ? r(t[i], e[i], i, t, e) : void 0;
    c === void 0 && (c = e[i]), a ? jn(t, i, c) : Ln(t, i, c);
  }
  return t;
}
var Yo = 9007199254740991;
function En(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yo;
}
function $t(e) {
  return e != null && En(e.length) && !St(e);
}
var Zo = Object.prototype;
function Qe(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Zo;
  return e === t;
}
function Qo(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var ea = "[object Arguments]";
function Xt(e) {
  return K(e) && Q(e) == ea;
}
var Bn = Object.prototype, ta = Bn.hasOwnProperty, na = Bn.propertyIsEnumerable, ra = Xt(function() {
  return arguments;
}()) ? Xt : function(e) {
  return K(e) && ta.call(e, "callee") && !na.call(e, "callee");
};
const kn = ra;
function oa() {
  return !1;
}
var Fn = typeof exports == "object" && exports && !exports.nodeType && exports, Yt = Fn && typeof module == "object" && module && !module.nodeType && module, aa = Yt && Yt.exports === Fn, Zt = aa ? X.Buffer : void 0, la = Zt ? Zt.isBuffer : void 0, ia = la || oa;
const Le = ia;
var sa = "[object Arguments]", ua = "[object Array]", ca = "[object Boolean]", fa = "[object Date]", da = "[object Error]", pa = "[object Function]", ga = "[object Map]", ha = "[object Number]", ma = "[object Object]", ba = "[object RegExp]", ya = "[object Set]", va = "[object String]", wa = "[object WeakMap]", _a = "[object ArrayBuffer]", Aa = "[object DataView]", Ta = "[object Float32Array]", Sa = "[object Float64Array]", xa = "[object Int8Array]", $a = "[object Int16Array]", Oa = "[object Int32Array]", Ia = "[object Uint8Array]", Ca = "[object Uint8ClampedArray]", Ma = "[object Uint16Array]", Pa = "[object Uint32Array]", M = {};
M[Ta] = M[Sa] = M[xa] = M[$a] = M[Oa] = M[Ia] = M[Ca] = M[Ma] = M[Pa] = !0;
M[sa] = M[ua] = M[_a] = M[ca] = M[Aa] = M[fa] = M[da] = M[pa] = M[ga] = M[ha] = M[ma] = M[ba] = M[ya] = M[va] = M[wa] = !1;
function ja(e) {
  return K(e) && En(e.length) && !!M[Q(e)];
}
function Ot(e) {
  return function(n) {
    return e(n);
  };
}
var Rn = typeof exports == "object" && exports && !exports.nodeType && exports, Pe = Rn && typeof module == "object" && module && !module.nodeType && module, La = Pe && Pe.exports === Rn, lt = La && Mn.process, Ea = function() {
  try {
    var e = Pe && Pe.require && Pe.require("util").types;
    return e || lt && lt.binding && lt.binding("util");
  } catch {
  }
}();
const Te = Ea;
var Qt = Te && Te.isTypedArray, Ba = Qt ? Ot(Qt) : ja;
const It = Ba;
var ka = Object.prototype, Fa = ka.hasOwnProperty;
function Nn(e, n) {
  var t = de(e), r = !t && kn(e), a = !t && !r && Le(e), o = !t && !r && !a && It(e), l = t || r || a || o, i = l ? Qo(e.length, String) : [], c = i.length;
  for (var s in e)
    (n || Fa.call(e, s)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    qo(s, c))) && i.push(s);
  return i;
}
function Un(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var Ra = Un(Object.keys, Object);
const Na = Ra;
var Ua = Object.prototype, Va = Ua.hasOwnProperty;
function Vn(e) {
  if (!Qe(e))
    return Na(e);
  var n = [];
  for (var t in Object(e))
    Va.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function Ct(e) {
  return $t(e) ? Nn(e) : Vn(e);
}
function za(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var Da = Object.prototype, Ha = Da.hasOwnProperty;
function Ga(e) {
  if (!ne(e))
    return za(e);
  var n = Qe(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !Ha.call(e, r)) || t.push(r);
  return t;
}
function Mt(e) {
  return $t(e) ? Nn(e, !0) : Ga(e);
}
var Wa = he(Object, "create");
const Ee = Wa;
function Ja() {
  this.__data__ = Ee ? Ee(null) : {}, this.size = 0;
}
function qa(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Ka = "__lodash_hash_undefined__", Xa = Object.prototype, Ya = Xa.hasOwnProperty;
function Za(e) {
  var n = this.__data__;
  if (Ee) {
    var t = n[e];
    return t === Ka ? void 0 : t;
  }
  return Ya.call(n, e) ? n[e] : void 0;
}
var Qa = Object.prototype, el = Qa.hasOwnProperty;
function tl(e) {
  var n = this.__data__;
  return Ee ? n[e] !== void 0 : el.call(n, e);
}
var nl = "__lodash_hash_undefined__";
function rl(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ee && n === void 0 ? nl : n, this;
}
function pe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
pe.prototype.clear = Ja;
pe.prototype.delete = qa;
pe.prototype.get = Za;
pe.prototype.has = tl;
pe.prototype.set = rl;
function ol() {
  this.__data__ = [], this.size = 0;
}
function et(e, n) {
  for (var t = e.length; t--; )
    if (xt(e[t][0], n))
      return t;
  return -1;
}
var al = Array.prototype, ll = al.splice;
function il(e) {
  var n = this.__data__, t = et(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : ll.call(n, t, 1), --this.size, !0;
}
function sl(e) {
  var n = this.__data__, t = et(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function ul(e) {
  return et(this.__data__, e) > -1;
}
function cl(e, n) {
  var t = this.__data__, r = et(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function re(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
re.prototype.clear = ol;
re.prototype.delete = il;
re.prototype.get = sl;
re.prototype.has = ul;
re.prototype.set = cl;
var fl = he(X, "Map");
const Be = fl;
function dl() {
  this.size = 0, this.__data__ = {
    hash: new pe(),
    map: new (Be || re)(),
    string: new pe()
  };
}
function pl(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function tt(e, n) {
  var t = e.__data__;
  return pl(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function gl(e) {
  var n = tt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function hl(e) {
  return tt(this, e).get(e);
}
function ml(e) {
  return tt(this, e).has(e);
}
function bl(e, n) {
  var t = tt(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function me(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = dl;
me.prototype.delete = gl;
me.prototype.get = hl;
me.prototype.has = ml;
me.prototype.set = bl;
function zn(e, n) {
  for (var t = -1, r = n.length, a = e.length; ++t < r; )
    e[a + t] = n[t];
  return e;
}
var yl = Un(Object.getPrototypeOf, Object);
const Pt = yl;
var vl = "[object Object]", wl = Function.prototype, _l = Object.prototype, Dn = wl.toString, Al = _l.hasOwnProperty, Tl = Dn.call(Object);
function we(e) {
  if (!K(e) || Q(e) != vl)
    return !1;
  var n = Pt(e);
  if (n === null)
    return !0;
  var t = Al.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && Dn.call(t) == Tl;
}
function Sl() {
  this.__data__ = new re(), this.size = 0;
}
function xl(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function $l(e) {
  return this.__data__.get(e);
}
function Ol(e) {
  return this.__data__.has(e);
}
var Il = 200;
function Cl(e, n) {
  var t = this.__data__;
  if (t instanceof re) {
    var r = t.__data__;
    if (!Be || r.length < Il - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new me(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function te(e) {
  var n = this.__data__ = new re(e);
  this.size = n.size;
}
te.prototype.clear = Sl;
te.prototype.delete = xl;
te.prototype.get = $l;
te.prototype.has = Ol;
te.prototype.set = Cl;
function Ml(e, n) {
  return e && Ze(n, Ct(n), e);
}
function Pl(e, n) {
  return e && Ze(n, Mt(n), e);
}
var Hn = typeof exports == "object" && exports && !exports.nodeType && exports, en = Hn && typeof module == "object" && module && !module.nodeType && module, jl = en && en.exports === Hn, tn = jl ? X.Buffer : void 0, nn = tn ? tn.allocUnsafe : void 0;
function Ll(e, n) {
  if (n)
    return e.slice();
  var t = e.length, r = nn ? nn(t) : new e.constructor(t);
  return e.copy(r), r;
}
function El(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++t < r; ) {
    var l = e[t];
    n(l, t, e) && (o[a++] = l);
  }
  return o;
}
function Gn() {
  return [];
}
var Bl = Object.prototype, kl = Bl.propertyIsEnumerable, rn = Object.getOwnPropertySymbols, Fl = rn ? function(e) {
  return e == null ? [] : (e = Object(e), El(rn(e), function(n) {
    return kl.call(e, n);
  }));
} : Gn;
const jt = Fl;
function Rl(e, n) {
  return Ze(e, jt(e), n);
}
var Nl = Object.getOwnPropertySymbols, Ul = Nl ? function(e) {
  for (var n = []; e; )
    zn(n, jt(e)), e = Pt(e);
  return n;
} : Gn;
const Wn = Ul;
function Vl(e, n) {
  return Ze(e, Wn(e), n);
}
function Jn(e, n, t) {
  var r = n(e);
  return de(e) ? r : zn(r, t(e));
}
function ft(e) {
  return Jn(e, Ct, jt);
}
function zl(e) {
  return Jn(e, Mt, Wn);
}
var Dl = he(X, "DataView");
const dt = Dl;
var Hl = he(X, "Promise");
const pt = Hl;
var Gl = he(X, "Set");
const gt = Gl;
var on = "[object Map]", Wl = "[object Object]", an = "[object Promise]", ln = "[object Set]", sn = "[object WeakMap]", un = "[object DataView]", Jl = ge(dt), ql = ge(Be), Kl = ge(pt), Xl = ge(gt), Yl = ge(ct), ce = Q;
(dt && ce(new dt(new ArrayBuffer(1))) != un || Be && ce(new Be()) != on || pt && ce(pt.resolve()) != an || gt && ce(new gt()) != ln || ct && ce(new ct()) != sn) && (ce = function(e) {
  var n = Q(e), t = n == Wl ? e.constructor : void 0, r = t ? ge(t) : "";
  if (r)
    switch (r) {
      case Jl:
        return un;
      case ql:
        return on;
      case Kl:
        return an;
      case Xl:
        return ln;
      case Yl:
        return sn;
    }
  return n;
});
const Se = ce;
var Zl = Object.prototype, Ql = Zl.hasOwnProperty;
function ei(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && Ql.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var ti = X.Uint8Array;
const Je = ti;
function Lt(e) {
  var n = new e.constructor(e.byteLength);
  return new Je(n).set(new Je(e)), n;
}
function ni(e, n) {
  var t = n ? Lt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var ri = /\w*$/;
function oi(e) {
  var n = new e.constructor(e.source, ri.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var cn = ue ? ue.prototype : void 0, fn = cn ? cn.valueOf : void 0;
function ai(e) {
  return fn ? Object(fn.call(e)) : {};
}
function li(e, n) {
  var t = n ? Lt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var ii = "[object Boolean]", si = "[object Date]", ui = "[object Map]", ci = "[object Number]", fi = "[object RegExp]", di = "[object Set]", pi = "[object String]", gi = "[object Symbol]", hi = "[object ArrayBuffer]", mi = "[object DataView]", bi = "[object Float32Array]", yi = "[object Float64Array]", vi = "[object Int8Array]", wi = "[object Int16Array]", _i = "[object Int32Array]", Ai = "[object Uint8Array]", Ti = "[object Uint8ClampedArray]", Si = "[object Uint16Array]", xi = "[object Uint32Array]";
function $i(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case hi:
      return Lt(e);
    case ii:
    case si:
      return new r(+e);
    case mi:
      return ni(e, t);
    case bi:
    case yi:
    case vi:
    case wi:
    case _i:
    case Ai:
    case Ti:
    case Si:
    case xi:
      return li(e, t);
    case ui:
      return new r();
    case ci:
    case pi:
      return new r(e);
    case fi:
      return oi(e);
    case di:
      return new r();
    case gi:
      return ai(e);
  }
}
function Oi(e) {
  return typeof e.constructor == "function" && !Qe(e) ? zo(Pt(e)) : {};
}
var Ii = "[object Map]";
function Ci(e) {
  return K(e) && Se(e) == Ii;
}
var dn = Te && Te.isMap, Mi = dn ? Ot(dn) : Ci;
const Pi = Mi;
var ji = "[object Set]";
function Li(e) {
  return K(e) && Se(e) == ji;
}
var pn = Te && Te.isSet, Ei = pn ? Ot(pn) : Li;
const Bi = Ei;
var ki = 1, Fi = 2, Ri = 4, qn = "[object Arguments]", Ni = "[object Array]", Ui = "[object Boolean]", Vi = "[object Date]", zi = "[object Error]", Kn = "[object Function]", Di = "[object GeneratorFunction]", Hi = "[object Map]", Gi = "[object Number]", Xn = "[object Object]", Wi = "[object RegExp]", Ji = "[object Set]", qi = "[object String]", Ki = "[object Symbol]", Xi = "[object WeakMap]", Yi = "[object ArrayBuffer]", Zi = "[object DataView]", Qi = "[object Float32Array]", es = "[object Float64Array]", ts = "[object Int8Array]", ns = "[object Int16Array]", rs = "[object Int32Array]", os = "[object Uint8Array]", as = "[object Uint8ClampedArray]", ls = "[object Uint16Array]", is = "[object Uint32Array]", C = {};
C[qn] = C[Ni] = C[Yi] = C[Zi] = C[Ui] = C[Vi] = C[Qi] = C[es] = C[ts] = C[ns] = C[rs] = C[Hi] = C[Gi] = C[Xn] = C[Wi] = C[Ji] = C[qi] = C[Ki] = C[os] = C[as] = C[ls] = C[is] = !0;
C[zi] = C[Kn] = C[Xi] = !1;
function He(e, n, t, r, a, o) {
  var l, i = n & ki, c = n & Fi, s = n & Ri;
  if (t && (l = a ? t(e, r, a, o) : t(e)), l !== void 0)
    return l;
  if (!ne(e))
    return e;
  var f = de(e);
  if (f) {
    if (l = ei(e), !i)
      return Do(e, l);
  } else {
    var u = Se(e), d = u == Kn || u == Di;
    if (Le(e))
      return Ll(e, i);
    if (u == Xn || u == qn || d && !a) {
      if (l = c || d ? {} : Oi(e), !i)
        return c ? Vl(e, Pl(l, e)) : Rl(e, Ml(l, e));
    } else {
      if (!C[u])
        return a ? e : {};
      l = $i(e, u, i);
    }
  }
  o || (o = new te());
  var h = o.get(e);
  if (h)
    return h;
  o.set(e, l), Bi(e) ? e.forEach(function(y) {
    l.add(He(y, n, t, y, e, o));
  }) : Pi(e) && e.forEach(function(y, m) {
    l.set(m, He(y, n, t, m, e, o));
  });
  var g = s ? c ? zl : ft : c ? Mt : Ct, p = f ? void 0 : g(e);
  return Go(p || e, function(y, m) {
    p && (m = y, y = e[m]), Ln(l, m, He(y, n, t, m, e, o));
  }), l;
}
var ss = 1, us = 4;
function Y(e) {
  return He(e, ss | us);
}
var cs = "__lodash_hash_undefined__";
function fs(e) {
  return this.__data__.set(e, cs), this;
}
function ds(e) {
  return this.__data__.has(e);
}
function qe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new me(); ++n < t; )
    this.add(e[n]);
}
qe.prototype.add = qe.prototype.push = fs;
qe.prototype.has = ds;
function ps(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function gs(e, n) {
  return e.has(n);
}
var hs = 1, ms = 2;
function Yn(e, n, t, r, a, o) {
  var l = t & hs, i = e.length, c = n.length;
  if (i != c && !(l && c > i))
    return !1;
  var s = o.get(e), f = o.get(n);
  if (s && f)
    return s == n && f == e;
  var u = -1, d = !0, h = t & ms ? new qe() : void 0;
  for (o.set(e, n), o.set(n, e); ++u < i; ) {
    var g = e[u], p = n[u];
    if (r)
      var y = l ? r(p, g, u, n, e, o) : r(g, p, u, e, n, o);
    if (y !== void 0) {
      if (y)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!ps(n, function(m, A) {
        if (!gs(h, A) && (g === m || a(g, m, t, r, o)))
          return h.push(A);
      })) {
        d = !1;
        break;
      }
    } else if (!(g === p || a(g, p, t, r, o))) {
      d = !1;
      break;
    }
  }
  return o.delete(e), o.delete(n), d;
}
function bs(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r, a) {
    t[++n] = [a, r];
  }), t;
}
function ys(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r) {
    t[++n] = r;
  }), t;
}
var vs = 1, ws = 2, _s = "[object Boolean]", As = "[object Date]", Ts = "[object Error]", Ss = "[object Map]", xs = "[object Number]", $s = "[object RegExp]", Os = "[object Set]", Is = "[object String]", Cs = "[object Symbol]", Ms = "[object ArrayBuffer]", Ps = "[object DataView]", gn = ue ? ue.prototype : void 0, it = gn ? gn.valueOf : void 0;
function js(e, n, t, r, a, o, l) {
  switch (t) {
    case Ps:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case Ms:
      return !(e.byteLength != n.byteLength || !o(new Je(e), new Je(n)));
    case _s:
    case As:
    case xs:
      return xt(+e, +n);
    case Ts:
      return e.name == n.name && e.message == n.message;
    case $s:
    case Is:
      return e == n + "";
    case Ss:
      var i = bs;
    case Os:
      var c = r & vs;
      if (i || (i = ys), e.size != n.size && !c)
        return !1;
      var s = l.get(e);
      if (s)
        return s == n;
      r |= ws, l.set(e, n);
      var f = Yn(i(e), i(n), r, a, o, l);
      return l.delete(e), f;
    case Cs:
      if (it)
        return it.call(e) == it.call(n);
  }
  return !1;
}
var Ls = 1, Es = Object.prototype, Bs = Es.hasOwnProperty;
function ks(e, n, t, r, a, o) {
  var l = t & Ls, i = ft(e), c = i.length, s = ft(n), f = s.length;
  if (c != f && !l)
    return !1;
  for (var u = c; u--; ) {
    var d = i[u];
    if (!(l ? d in n : Bs.call(n, d)))
      return !1;
  }
  var h = o.get(e), g = o.get(n);
  if (h && g)
    return h == n && g == e;
  var p = !0;
  o.set(e, n), o.set(n, e);
  for (var y = l; ++u < c; ) {
    d = i[u];
    var m = e[d], A = n[d];
    if (r)
      var T = l ? r(A, m, d, n, e, o) : r(m, A, d, e, n, o);
    if (!(T === void 0 ? m === A || a(m, A, t, r, o) : T)) {
      p = !1;
      break;
    }
    y || (y = d == "constructor");
  }
  if (p && !y) {
    var S = e.constructor, L = n.constructor;
    S != L && "constructor" in e && "constructor" in n && !(typeof S == "function" && S instanceof S && typeof L == "function" && L instanceof L) && (p = !1);
  }
  return o.delete(e), o.delete(n), p;
}
var Fs = 1, hn = "[object Arguments]", mn = "[object Array]", ze = "[object Object]", Rs = Object.prototype, bn = Rs.hasOwnProperty;
function Ns(e, n, t, r, a, o) {
  var l = de(e), i = de(n), c = l ? mn : Se(e), s = i ? mn : Se(n);
  c = c == hn ? ze : c, s = s == hn ? ze : s;
  var f = c == ze, u = s == ze, d = c == s;
  if (d && Le(e)) {
    if (!Le(n))
      return !1;
    l = !0, f = !1;
  }
  if (d && !f)
    return o || (o = new te()), l || It(e) ? Yn(e, n, t, r, a, o) : js(e, n, c, t, r, a, o);
  if (!(t & Fs)) {
    var h = f && bn.call(e, "__wrapped__"), g = u && bn.call(n, "__wrapped__");
    if (h || g) {
      var p = h ? e.value() : e, y = g ? n.value() : n;
      return o || (o = new te()), a(p, y, t, r, o);
    }
  }
  return d ? (o || (o = new te()), ks(e, n, t, r, a, o)) : !1;
}
function Zn(e, n, t, r, a) {
  return e === n ? !0 : e == null || n == null || !K(e) && !K(n) ? e !== e && n !== n : Ns(e, n, t, r, Zn, a);
}
var Us = function() {
  return X.Date.now();
};
const st = Us;
var Vs = "Expected a function", zs = Math.max, Ds = Math.min;
function Hs(e, n, t) {
  var r, a, o, l, i, c, s = 0, f = !1, u = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Vs);
  n = Wt(n) || 0, ne(t) && (f = !!t.leading, u = "maxWait" in t, o = u ? zs(Wt(t.maxWait) || 0, n) : o, d = "trailing" in t ? !!t.trailing : d);
  function h(_) {
    var I = r, J = a;
    return r = a = void 0, s = _, l = e.apply(J, I), l;
  }
  function g(_) {
    return s = _, i = setTimeout(m, n), f ? h(_) : l;
  }
  function p(_) {
    var I = _ - c, J = _ - s, Ne = n - I;
    return u ? Ds(Ne, o - J) : Ne;
  }
  function y(_) {
    var I = _ - c, J = _ - s;
    return c === void 0 || I >= n || I < 0 || u && J >= o;
  }
  function m() {
    var _ = st();
    if (y(_))
      return A(_);
    i = setTimeout(m, p(_));
  }
  function A(_) {
    return i = void 0, d && r ? h(_) : (r = a = void 0, l);
  }
  function T() {
    i !== void 0 && clearTimeout(i), s = 0, r = c = a = i = void 0;
  }
  function S() {
    return i === void 0 ? l : A(st());
  }
  function L() {
    var _ = st(), I = y(_);
    if (r = arguments, a = this, c = _, I) {
      if (i === void 0)
        return g(c);
      if (u)
        return clearTimeout(i), i = setTimeout(m, n), h(c);
    }
    return i === void 0 && (i = setTimeout(m, n)), l;
  }
  return L.cancel = T, L.flush = S, L;
}
function yn(e) {
  var n = e == null ? 0 : e.length;
  return n ? e[n - 1] : void 0;
}
var Gs = "[object String]";
function Ws(e) {
  return typeof e == "string" || !de(e) && K(e) && Q(e) == Gs;
}
var Js = "[object Boolean]";
function qs(e) {
  return e === !0 || e === !1 || K(e) && Q(e) == Js;
}
var Ks = "[object Map]", Xs = "[object Set]", Ys = Object.prototype, Zs = Ys.hasOwnProperty;
function fe(e) {
  if (e == null)
    return !0;
  if ($t(e) && (de(e) || typeof e == "string" || typeof e.splice == "function" || Le(e) || It(e) || kn(e)))
    return !e.length;
  var n = Se(e);
  if (n == Ks || n == Xs)
    return !e.size;
  if (Qe(e))
    return !Vn(e).length;
  for (var t in e)
    if (Zs.call(e, t))
      return !1;
  return !0;
}
function Qs(e, n) {
  return Zn(e, n);
}
var eu = "[object Number]";
function je(e) {
  return typeof e == "number" || K(e) && Q(e) == eu;
}
function nt(e, n, t) {
  const r = (...a) => $e.apply(this, a);
  return new Promise((a, o) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let l = r("r.confirm"), i = r("r.cancel"), c = !1, s = "swalConfirmBt", f = "swalCancelBt";
      const u = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let d = "";
      e.text && u.test(x(e.text)) ? d = "content" : e.text && x(e.text) === "String" && (d = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (i = e.buttons.cancel.text) && (c = !0), e.buttons.cancel.className && (f = e.buttons.cancel.className), e.buttons.confirm.text && (l = e.buttons.confirm.text), e.buttons.confirm.className && (s = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (i = e.buttons[0], c = !0), e.buttons[1] && (l = e.buttons[1]))), Ve({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [d]: e.text,
        buttons: {
          confirm: {
            text: l,
            value: !0,
            visible: !0,
            className: s
          },
          cancel: {
            text: i,
            value: null,
            visible: c,
            className: f
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
      Ve({
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
      !e && Ve.close && Ve.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Qn(e) {
  return e.replace(/_(\w)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function tu(e) {
  let n = document.createElement("div");
  return n.textContent !== void 0 ? n.textContent = e : n.innerText = e, n.innerHTML;
}
function nu(e) {
  let n = document.createElement("div");
  return n.innerHTML = e, n.innerText || n.textContent;
}
function ru(e) {
  return new Promise((n) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      n(t.result);
    };
  });
}
function er(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function ou(e) {
  return x(e) === "String" && e.indexOf("image") > -1;
}
function au(e) {
  const n = er(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function lu(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, tr(t);
}
function tr(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
function Ke({
  group: e,
  condition: n,
  pathKey: t,
  childKey: r = "children",
  path: a = []
}) {
  if (e && ne(e)) {
    if (St(n)) {
      if (we(e)) {
        let o = e, l = Y(a);
        if (n(o))
          return t && o[t] && l.push(o[t]), l;
        if (o[r] && !fe(o[r])) {
          t && o[t] && l.push(o[t]);
          let i = Ke({
            group: o[r],
            condition: n,
            pathKey: t,
            childKey: r,
            path: l
          });
          if (!fe(i))
            return i;
        }
      } else if (Array.isArray(e))
        for (let o of e) {
          let l = Y(a);
          if (n(o))
            return t && o[t] ? l.push(o[t]) : l.push(String(e.indexOf(o))), l;
          if (o[r] && o[r].length > 0) {
            t && o[t] ? l.push(o[t]) : l.push(String(e.indexOf(o)));
            let i = Ke({
              group: o[r],
              condition: n,
              pathKey: t,
              childKey: r,
              path: l
            });
            if (!fe(i))
              return i;
          }
        }
    } else if (Array.isArray(e))
      for (let o of e) {
        let l = Y(a);
        if (o === n)
          return l.push(String(e.indexOf(o))), l;
      }
  }
  return [];
}
function nr(e, n = 12) {
  if (x(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const r = t.clientWidth;
    return document.body.removeChild(t), r;
  }
  return 0;
}
function iu(e) {
  return e === "" ? null : e;
}
function su(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
const uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: lu,
  emptyInput: iu,
  fakeALinkClick: tr,
  findPath: Ke,
  getFileSrc: ru,
  getFileTypeByName: er,
  getFileTypeIconByName: au,
  getStringWidth: nr,
  htmlDecode: nu,
  htmlEncode: tu,
  isImgByFile: ou,
  stopBubbling: su,
  toHump: Qn
}, Symbol.toStringTag, { value: "Module" }));
function x(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function rr(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function ht(e) {
  let n = x(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = x(e[t]);
        r === "String" ? e[t] = e[t].trim() : (r === "Object" || r === "Array") && ht(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, r = e.length; t < r; t++) {
      let a = x(e[t]);
      a === "String" ? e[t] = e[t].trim() : (a === "Array" || a === "Object") && ht(e[t]);
    }
  return e;
}
function mt(e, n = []) {
  if (x(e) === "Array")
    return e.forEach((t, r) => {
      switch (x(t)) {
        case "Array":
        case "Object":
          mt(t);
          break;
        default:
          e[r] = null;
      }
    }), e;
  if (x(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = !0;
        for (let a of n)
          if (a === t) {
            r = !1;
            break;
          }
        if (r)
          switch (x(e[t])) {
            case "Array":
            case "Object":
              mt(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
const cu = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function fu(e) {
  let n = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && n.append(t, e[t]);
  return n;
}
function du(e, n, t = !1) {
  if (!e || !n)
    return !1;
  let r, a = "notFoundC", o = function(l, i) {
    if (Array.isArray(l)) {
      if (x(i) === "Function" && i(l))
        return a = l, [];
      for (let c of l) {
        if (a !== "notFoundC")
          break;
        if (x(i) === "Function" && i(c) || c === i)
          return a = c, [l.indexOf(c)];
        if (x(c) === "Array" || x(c) === "Object") {
          let s = o(c, i);
          if (s !== void 0)
            return [l.indexOf(c), ...s];
        }
      }
    } else if (x(l) === "Object") {
      if (x(i) === "Function" && i(l))
        return a = l, [];
      for (let c in l) {
        if (a !== "notFoundC")
          break;
        if (l.hasOwnProperty(c)) {
          if (x(i) === "Function" && i(c) || l[c] === i)
            return a = l[c], [c];
          if (x(l[c]) === "Object" || x(l[c]) === "Array") {
            let s = o(l[c], i);
            if (s !== void 0)
              return [c, ...s];
          }
        }
      }
    }
  };
  return r = o(e, n), t ? r || !1 : a === "notFoundC" ? !1 : a;
}
function pu(e, n) {
  for (let t = 0, r = n.length; t < r; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function gu(e, n = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`), r = e && String(e) || "";
  return t.test(r) ? Number(r.replace(t, "$1")) : e;
}
function or(e, n = {}, t = "get") {
  let r = document.createElement("form"), a = document.getElementsByTagName("body")[0];
  a.appendChild(r), r.setAttribute("style", "display:none"), r.setAttribute("target", ""), r.setAttribute("method", t);
  let o = e;
  if (window && window.hasOwnProperty("g")) {
    let l = Object.keys(window.g).filter((i) => i.indexOf("URL") > -1).map((i) => i.replace("URL", ""));
    for (let i of l) {
      let c = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (c.test(e) && window.g[i + "URL"]) {
        o = window.g[i + "URL"] + e.replace(c, "");
        break;
      }
    }
  }
  if (r.setAttribute("action", o), we(n)) {
    for (let i in n)
      if (n.hasOwnProperty(i) && (n[i] || n[i] === 0 || n[i] === !1 || n[i] === "")) {
        let c = document.createElement("input");
        c.setAttribute("type", "hidden"), c.setAttribute("name", i), c.setAttribute("value", n[i]), r.appendChild(c);
      }
    r.submit();
    let l = setTimeout(() => {
      a.removeChild(r), clearTimeout(l), l = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function hu(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    nt.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  or(e, n, t);
}
function mu(e, n, t = !1) {
  let r;
  if (e && x(n) === "Array") {
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
function le(e) {
  return e != null && e !== "";
}
function bu(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function ar(e, n = !1, t = "") {
  return function(r, a) {
    let o;
    if (Array.isArray(e)) {
      let c = [];
      for (let s of e)
        le(a.row[s]) && c.push(a.row[s]);
      o = c.join(t);
    } else
      typeof e == "function" ? o = e(a) : o = a.row[e];
    let l = nr(o), i = a.column._width;
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
    ) : r("span", n && !le(o) ? "--" : o);
  };
}
function yu(e) {
  if (we(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && le(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (le(n))
        return !1;
    return !0;
  }
  return !le(e);
}
function vu(e) {
  return x(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : x(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function lr({
  group: e,
  condition: n,
  key: t,
  val: r,
  childKey: a = "children"
}) {
  if (x(e) !== "Array" || x(n) !== "Function" || x(t) !== "String" || x(a) !== "String")
    return !1;
  e.forEach((o) => {
    n(o) && (x(r) === "Function" ? o[t] = r(o[t]) : o[t] = r), x(o[a]) === "Array" && o[a].length > 0 && lr({
      group: o[a],
      condition: n,
      key: t,
      val: r,
      childKey: a
    });
  });
}
function wu(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function ir(e) {
  return x(e) === "Number" && String(e) === "NaN";
}
function _u(e, n = !1, t = !1) {
  if (x(e) !== "Object")
    return e;
  let r = Object.assign(e, {}), a = "";
  for (let o in r)
    if (r.hasOwnProperty(o)) {
      let l = r[o];
      l === void 0 || l === "" || x(l) === "String" && l.trim() === "" || l === null || ir(l) ? t ? n ? a += o + "=&" : r[o] = "" : delete r[o] : n && (a += o + "=" + l + "&");
    }
  return n ? a.length > 0 ? a.substr(0, a.length - 1) : "" : r;
}
function bt(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || we(t) ? n.push(bt(t)) : le(t) && n.push(t);
  } else if (we(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || we(e[t]) ? n[t] = bt(e[t]) : le(e[t]) && (n[t] = e[t]));
  return n;
}
function Au(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function sr(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
const ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: mt,
  dataFilterOrToUrl: _u,
  decimalDigitsLimit: gu,
  downloadFileByFormSubmit: or,
  fileExport: hu,
  findCollection: du,
  formDataHeadConfig: cu,
  getColumnsKeys: mu,
  hasPermission: wu,
  htmlPrint: Au,
  isEmptyValue: yu,
  isNaN: ir,
  isNumberValue: bu,
  isValidValue: le,
  myTypeof: x,
  oneOf: pu,
  removeEmptyValue: bt,
  setValByOption: lr,
  siblingElems: sr,
  stringLength: vu,
  toFormData: fu,
  toLine: rr,
  tooltipManual: ar,
  trimObj: ht
}, Symbol.toStringTag, { value: "Module" })), Tu = { class: "groupBoxRP" }, Su = ["onClick"], xu = /* @__PURE__ */ z({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const n = e, t = Mr();
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
      let c = i.parentNode, s = sr(c);
      for (let f of s) {
        f.classList.remove("open");
        const u = f.querySelectorAll(".open");
        for (let d of u)
          d.classList.remove("open");
      }
      c.classList.toggle("open");
    }
    return (o, l) => {
      const i = F("sideMenuGroup", !0);
      return j(), B("ul", Tu, [
        (j(!0), B(At, null, Tt(n.data, (c, s) => (j(), B("li", {
          class: ie({ dropItemRP: c.children }),
          key: c.path + s
        }, [
          P("div", {
            class: ie(["menuTxtR", r(c)]),
            onClick: (f) => a(f, c),
            style: V({ paddingLeft: c.level * 20 + "px" })
          }, W(c.name || "-- no name --"), 15, Su),
          c.children ? (j(), Fe(i, {
            key: 0,
            data: c.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : xn("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), $u = { class: "menuListR" }, Ou = /* @__PURE__ */ z({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: n }) {
    const t = e, r = Pr(), a = k(!0), o = k(), l = k(), i = O(() => a.value ? E("r.hideMenu") : E("r.showMenu")), c = O(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    xr(() => {
      let u = localStorage.getItem("menuDisplayR") || "";
      u !== "" ? a.value = JSON.parse(u) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Xe(
      () => r.path,
      (u) => {
        o.value = u, On(f);
      },
      { immediate: !0 }
    );
    function s() {
      a.value = !a.value, localStorage.setItem("menuDisplayR", JSON.stringify(a.value)), n("on-change", a.value);
    }
    function f() {
      let u = l.value.querySelectorAll(".dropItemRP");
      for (let d of u)
        d.querySelector(".active") && !d.classList.contains("open") && d.classList.add("open");
    }
    return (u, d) => {
      const h = F("Icon");
      return j(), B("div", {
        ref_key: "menuRef",
        ref: l,
        class: "menuBoxRP"
      }, [
        Z(P("div", $u, [
          R(xu, {
            data: t.data,
            pathName: b(o)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [se, b(a)]
        ]),
        R(h, {
          type: b(c),
          size: 25,
          class: ie([{ showIco: !b(a) }, "menuShowHideIco"]),
          title: b(i),
          onClick: s,
          color: b(a) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Iu = ["title"], Cu = /* @__PURE__ */ z({
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
      const l = F("Icon"), i = $n("has");
      return Z((j(), B("div", {
        class: ie(["tableBtnsG", { disabled: t.disabled }]),
        onClick: r,
        title: t.title || b(E)("r.button")
      }, [
        R(l, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"])
      ], 10, Iu)), [
        [i, t.has]
      ]);
    };
  }
}), Mu = { class: "contentX" }, Pu = { class: "arrowA" }, ju = /* @__PURE__ */ z({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const n = e, t = k(!0), r = O(() => t ? "background:" + n.bg || "transparent" : "");
    return (a, o) => {
      const l = F("Icon");
      return j(), B("div", {
        style: V(b(r))
      }, [
        Z(P("div", Mu, [
          ae(a.$slots, "default")
        ], 512), [
          [se, b(t)]
        ]),
        P("div", Pu, [
          P("div", {
            class: "btA",
            onClick: o[0] || (o[0] = (i) => t.value = !b(t))
          }, [
            R(l, {
              type: b(t) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Lu = { class: "contentZ" }, Eu = /* @__PURE__ */ z({
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
      style: V(b(a))
    }, [
      Z(P("div", Lu, [
        ae(o.$slots, "default")
      ], 512), [
        [se, b(r)]
      ])
    ], 4));
  }
});
let yt = [], vt = [];
const Bu = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    yt.map((n) => {
      window.clearTimeout(n);
    }), vt.map((n) => {
      window.clearInterval(n);
    }), yt.length = 0, vt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, ee = function(e, n) {
  let t = window.setTimeout(e, n);
  return yt.push(t), t;
}, cr = function(e, n) {
  let t = window.setInterval(e, n);
  return vt.push(t), t;
}, ku = /* @__PURE__ */ z({
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
      set(c) {
        n("update:modelValue", c);
      }
    }), o = O({
      get() {
        return t.open;
      },
      set(c) {
        n("on-toggle", c);
      }
    }), l = O(() => o.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      r || (r = !0, n("on-search", a.value), ee(() => {
        r = !1;
      }, 2e3));
    }
    return (c, s) => {
      const f = F("Input"), u = F("icon");
      return j(), B("div", {
        class: "tableSearchV",
        style: V({ position: t.fixed ? "fixed" : "absolute", right: t.right, top: t.top })
      }, [
        ae(c.$slots, "default", {}, () => [
          R(f, {
            modelValue: b(a),
            "onUpdate:modelValue": s[0] || (s[0] = (d) => Ae(a) ? a.value = d : null),
            style: V({ width: t.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: t.placeholder || b(E)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        Z(P("span", {
          class: "sbt",
          onClick: s[1] || (s[1] = (d) => o.value = !b(o)),
          style: V({ color: t.btnColor })
        }, [
          R(u, {
            type: b(l),
            color: t.btnColor
          }, null, 8, ["type", "color"]),
          xe(W(b(E)("r.adSearch")), 1)
        ], 4), [
          [se, t.showBtn]
        ])
      ], 4);
    };
  }
}), Fu = { class: "tabSetF" }, Ru = { class: "topCheck" }, Nu = /* @__PURE__ */ z({
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
    const t = e, r = k(!0), a = k(!1), o = k(!1), l = k([]), i = O(() => {
      let p = E("r.unknown");
      return t.modelValue.length > l.value.length && (l.value = Y(t.modelValue)), l.value.map((y) => {
        let m = { label: y && y.title || p };
        return y && y.disableShowSetting && (m.disabled = !0), m;
      });
    }), c = O(() => i.value.filter((p) => p.disabled)), s = O({
      get() {
        return t.modelValue.map((p) => p && p.title || E("r.unknown"));
      },
      set(p) {
        let y = l.value.filter((m) => {
          for (let A of p)
            if (A === m.title)
              return !0;
          return !1;
        });
        n("update:modelValue", y);
      }
    }), { locale: f } = jr();
    Ye(() => {
      let p = E("r.unknown"), y;
      f.value ? y = localStorage.getItem(t.sKey + "_" + f.value) : y = localStorage.getItem(t.sKey), y ? s.value = JSON.parse(decodeURI(y)) : t.defaultCheck && (s.value = t.modelValue.filter((m) => m.showSettingCheck).map((m) => m && m.title || p));
    });
    function u(p) {
      p.length === i.value.length ? (r.value = !1, a.value = !0) : p.length > c.value.length ? (r.value = !0, a.value = !1) : (r.value = !1, a.value = !1);
    }
    Xe(() => s.value, u, {
      immediate: !0,
      deep: !0
    });
    function d() {
      o.value || (o.value = !0);
    }
    function h() {
      f.value ? localStorage.setItem(t.sKey + "_" + f.value, encodeURI(JSON.stringify(s.value))) : localStorage.setItem(t.sKey, encodeURI(JSON.stringify(s.value))), o.value = !1;
    }
    function g() {
      r.value ? a.value = !1 : a.value = !a.value, r.value = !1, a.value ? s.value = i.value.map((p) => p.label) : s.value = c.value.map((p) => p.label);
    }
    return (p, y) => {
      const m = F("Icon"), A = F("Checkbox"), T = F("CheckboxGroup");
      return j(), B("div", Fu, [
        P("div", {
          class: "tabSetBt",
          onClick: d
        }, [
          R(m, {
            type: "md-settings",
            size: "17"
          }),
          P("span", null, W(b(E)("r.tabSetting")), 1)
        ]),
        Z(P("div", {
          class: "tabSetCard",
          style: V({ top: t.top, right: t.right, width: t.width, backgroundColor: t.bg })
        }, [
          P("div", Ru, [
            R(A, {
              indeterminate: b(r),
              modelValue: b(a),
              "onUpdate:modelValue": y[0] || (y[0] = (S) => Ae(a) ? a.value = S : null),
              onClick: $r(g, ["prevent"])
            }, {
              default: _e(() => [
                xe(W(b(E)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            P("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: h
            }, W(b(E)("r.confirm")), 1)
          ]),
          R(T, {
            modelValue: b(s),
            "onUpdate:modelValue": y[1] || (y[1] = (S) => Ae(s) ? s.value = S : null)
          }, {
            default: _e(() => [
              (j(!0), B(At, null, Tt(b(i), (S, L) => (j(), Fe(A, {
                class: "setItem",
                label: S && S.label,
                key: "tabSet_" + t.sKey + L,
                disabled: S && S.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [se, b(o)]
        ])
      ]);
    };
  }
});
let ye = 0, ke = document.createElement("div");
ke.setAttribute("class", "spinModal");
ke.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ke);
};
function vn(e) {
  e ? ke.classList.add("show") : ke.classList.remove("show");
}
function fr(e) {
  let n = ye;
  e ? ye++ : ye > 0 && ye--, n !== ye && (ye === 0 ? vn(!1) : n === 0 && vn(!0));
}
const Uu = window.location.origin;
let ve = null;
const wn = (...e) => $e.apply(ve, e);
let q = ut.create({
  baseURL: Uu,
  withCredentials: !0
  // 允许携带cookie
});
function Vu() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
q.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function _n() {
  if (q.store)
    if (typeof q.store == "function") {
      const e = q.store();
      e.logout && e.logout();
    } else
      q.store.dispatch("logout");
  else
    Vu();
}
q.interceptors.response.use(
  (e) => (ve && e && e.data && (e.data.code === 403 || e.data.code === 409) && ve.messageBox({
    content: wn("r.http." + e.data.code),
    onOk: _n
  }), e),
  (e) => (ve && e && e.response && (e.response.status === 403 || e.response.status === 409) && ve.messageBox({
    content: wn("r.http." + e.response.status),
    onOk: _n
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function oe(e, n, t, r) {
  r && r.spin && fr(!1);
  let a = !0, o = e && e.data;
  if (o) {
    t = t || [];
    for (let l of t)
      o = o[l], a = a && o;
    return a ? o : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function zu(e, n, t, r, a, o, l) {
  return new Promise((i, c) => {
    switch (e) {
      case "get":
        q.get(n, { params: t }).then((f) => {
          let u = oe(f, r, a, o);
          u ? i(u) : c(f);
        }).catch((f) => {
          oe({}, r, a, o), c(f);
        });
        break;
      case "delete":
        let s = l ? "params" : "data";
        q.delete(n, { [s]: t }).then((f) => {
          let u = oe(f, r, a, o);
          u ? i(u) : c(f);
        }).catch((f) => {
          oe({}, r, a, o), c(f);
        });
        break;
      case "post":
        q.post(n, t, o).then((f) => {
          let u = oe(f, r, a, o);
          u ? i(u) : c(f);
        }).catch((f) => {
          oe({}, r, a, o), c(f);
        });
        break;
      case "put":
        q.put(n, t, o).then((f) => {
          let u = oe(f, r, a, o);
          u ? i(u) : c(f);
        }).catch((f) => {
          oe({}, r, a, o), c(f);
        });
        break;
    }
  });
}
function De(e, n, t = {}, r, a, o, l) {
  return new Promise((i, c) => {
    if (n) {
      o && o.spin && fr(!0);
      let s = n;
      if (window && window.hasOwnProperty("g")) {
        const d = window.g;
        let h = Object.keys(d).filter((g) => g.indexOf("URL") > -1).map((g) => g.replace("URL", ""));
        for (let g of h) {
          let p = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (p.test(n) && d[g + "URL"]) {
            s = d[g + "URL"] + n.replace(p, "");
            break;
          }
        }
      }
      let f;
      if (o && o.headers && o.headers["Content-Type"] === "multipart/form-data")
        f = t;
      else if (t && !fe(t))
        if (Array.isArray(t)) {
          f = [];
          for (let d of t)
            (d || d === 0 || d === !1 || d === "" && o && !o.noEmptyStr) && f.push(d);
        } else {
          f = {};
          for (let d in t)
            t.hasOwnProperty(d) && (t[d] || t[d] === 0 || t[d] === !1 || t[d] === "" && o && !o.noEmptyStr) && (f[d] = t[d]);
        }
      let u = e.toLowerCase();
      zu(u, s, f, r, a, o, l).then((d) => {
        i(d);
      }).catch((d) => {
        c(d);
      });
    } else
      console.error("没有请求地址:url"), c("没有请求地址:url");
  });
}
const Re = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, n) {
    q.store = e, ve = n.config.globalProperties;
  },
  post(e, n, t, r, a) {
    return new Promise((o, l) => {
      De("post", e, n, t, r, a).then((i) => {
        o(i);
      }).catch((i) => {
        l(i);
      });
    });
  },
  put(e, n, t, r, a) {
    return new Promise((o, l) => {
      De("put", e, n, t, r, a).then((i) => {
        o(i);
      }).catch((i) => {
        l(i);
      });
    });
  },
  get(e, n, t, r, a) {
    return new Promise((o, l) => {
      De("get", e, n, t, r, a).then((i) => {
        o(i);
      }).catch((i) => {
        l(i);
      });
    });
  },
  delete(e, n, t, r, a, o = !0) {
    return new Promise((l, i) => {
      De("delete", e, n, t, r, a, o).then((c) => {
        l(c);
      }).catch((c) => {
        i(c);
      });
    });
  },
  all: ut.all,
  spread: ut.spread,
  config: q
}, Du = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, Hu = { class: "topBtn" }, Gu = { class: "fullHeight relativeBox" }, Wu = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, Ju = { class: "pageContainer" }, qu = 300, Ku = /* @__PURE__ */ z({
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
    const r = e, { globalProperties: a } = _t().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Lr });
    const l = a.pageSizes || [10, 20, 30, 40], i = k(r.data), c = k(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || r.pageSize
    ), s = k(1), f = k(0);
    let u = [], d, h, g = r.orderKey, p = r.orderDefault;
    const y = O(() => {
      for (let v of r.columns)
        if (v.fixed)
          return !0;
      return !1;
    }), m = O(() => r.selectionFixed || y.value), A = O(() => {
      let v = {
        ...r.searchData,
        current: s.value,
        size: c.value
      };
      return r.sortable === "custom" && (r.orderKeyFormat === "underline" ? v[p] = rr(g) : r.orderKeyFormat === "camelcase" && (v[p] = Qn(g))), v;
    }), T = O(() => {
      let v = r.columns.filter((w) => w.type !== "selection");
      if (r.selection || r.radio) {
        let w;
        r.radio ? w = {
          title: " ",
          width: 65,
          render: (H, N) => H("Radio", {
            props: {
              value: N.row.btChecked
            }
          })
        } : w = {
          type: "selection",
          width: 60
        }, r.selectionFixed && (w.fixed = r.selectionFixed), v.unshift(w);
      }
      return v.forEach((w) => {
        r.sortable === "custom" ? w.key && w.sortable !== !0 && w.sortable !== !1 && (w.sortable = "custom") : w.sortable = !1, w.align || (w.align = "center");
      }), r.tableEmptyTdHandle && v.forEach((w) => {
        w.key && w.render === void 0 && (w.tooltip ? w.render = ar(w.key, !0) : w.render = (H, N) => {
          let D = N.row[w.key];
          return H("span", D === "" || D === null || D === void 0 ? "--" : D);
        });
      }), v;
    }), S = O({
      get() {
        return i.value.map((v, w) => ({
          btKey: "bt-" + w,
          btChecked: !1,
          ...v
        }));
      },
      set(v) {
        i.value = v;
      }
    }), L = O(() => u.map((v) => v.id)), _ = O(() => u.map((v) => v.btKey)), I = k();
    Xe(() => r.searchData, J, { deep: !0 });
    function J() {
      s.value = 1, Ie();
    }
    function Ne() {
      r.initData && Ie();
    }
    function hr(v) {
      i.value.unshift(Y(v)), ee(() => {
        var w;
        (w = I.value) == null || w.clickCurrentRow(0);
      }, 100);
    }
    function mr(v, w, H) {
      let N = null;
      if (qs(w) && w ? N = h : je(w) && (N = w), N !== null) {
        let D = i.value[N];
        for (let $ in v)
          v.hasOwnProperty($) && (D[$] = v[$]);
        H && ee(() => {
          var $;
          ($ = I.value) == null || $.clickCurrentRow(N);
        }, 10);
      }
    }
    function br(v) {
      i.value.splice(v, 1), ee(() => {
        var w;
        (w = I.value) == null || w.clickCurrentRow(0);
      }, 100);
    }
    function yr(v, w) {
      var H;
      v.btChecked && r.radio || (r.selection || r.radio) && r.rowClickSelect && ((H = I.value) == null || H.toggleSelect(w));
    }
    function vr(v, w) {
      d = w.btKey, h = Number(w.btKey.split("-")[1]), r.radio && (i.value[h].btChecked = !0);
    }
    function wr(v) {
      if (r.radio)
        for (let w of S.value)
          w.btKey !== d && (i.value[Number(w.btKey.split("-")[1])].btChecked = !1);
      u = v;
    }
    function _r() {
      return Y(u);
    }
    function Ar(v) {
      s.value = v, Ie();
    }
    function Tr(v) {
      c.value = v, localStorage.setItem("btPageSize", String(v)), s.value === 1 && Ie();
    }
    function Sr({ key: v, order: w }) {
      p === "normal" ? (g = r.orderKey, p = r.orderDefault) : (g = v, p = w), s.value = 1, Oe();
    }
    function Ue() {
      var v;
      if (r.radio) {
        if (_.value.length > 0 && S.value.length > 0) {
          let w = _.value[0].split("-")[1];
          S.value[w].btChecked = !1;
        }
      } else
        (v = I.value) == null || v.selectAll(!1);
      u.length > 0 && (u = [], t("on-selection-change", [])), d = null, h = null;
    }
    function rt() {
      i.value = [], Ue(), s.value = 1, f.value = 0;
    }
    function Oe(v, w, H) {
      return new Promise((N) => {
        v && (p = v), w && (g = w), r.url ? Re.get(r.url, A.value, "", [], { spin: r.getDataLoading }).then((D) => {
          var Et, Bt, kt, Ft, Rt, Nt, Ut, Vt;
          let $;
          H || Ue(), typeof r.dataHandler == "function" ? $ = r.dataHandler(D) : $ = D, $.data ? ((Et = $.data) != null && Et.records || ((Bt = $.data) == null ? void 0 : Bt.records) === null ? i.value = ((kt = $.data) == null ? void 0 : kt.records) || [] : $.data.page ? ((Ft = $.data.page) != null && Ft.records || ((Rt = $.data.page) == null ? void 0 : Rt.records) === null) && (i.value = $.data.page.records || []) : $.data.data ? ((Nt = $.data.data) != null && Nt.records || ((Ut = $.data.data) == null ? void 0 : Ut.records) === null) && (i.value = ((Vt = $.data.data) == null ? void 0 : Vt.records) || []) : i.value = $.data, f.value = $.data.page && $.data.page.total || $.data.data && $.data.data.total || $.data.total || $.total || 0, f.value === 0 && s.value > 1 && i.value && i.value.length === 0 ? s.value = 1 : s.value > 1 && f.value <= (s.value - 1) * c.value && (s.value--, On(function() {
            Oe(v, w);
          })), t("on-data-change", $), N($)) : (console.warn("请求返回数据有误，无法使用"), rt(), t("on-data-change", $));
        }).catch((D) => {
          console.warn(D), Ue(), rt(), t("on-data-change", D);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ie(v, w, H) {
      r.radio && (v || r.rowClickNum !== -1) ? Oe(w, H, v).then(() => {
        i.value.length > 0 && ee(() => {
          var N, D;
          v ? (N = I.value) == null || N.clickCurrentRow(h || 0) : (D = I.value) == null || D.clickCurrentRow(r.rowClickNum);
        }, 10);
      }) : Oe();
    }
    return Ye(Ne), n({
      selectedIds: L,
      addRow: hr,
      setRowData: mr,
      deleteRow: br,
      getSelected: _r,
      clearSelect: Ue,
      clearTableData: rt,
      getTableData: Oe,
      getDataAndClickRow: Ie
    }), (v, w) => {
      const H = F("Table"), N = F("Page");
      return j(), B("div", Du, [
        Z(P("div", Hu, [
          ae(v.$slots, "tableSetting"),
          ae(v.$slots, "topMsg"),
          ae(v.$slots, "topBtnGroup")
        ], 512), [
          [se, r.showTopRow]
        ]),
        P("div", {
          class: ie(["tableContainer fullHeight", { noTop: !r.showTopRow, noPage: r.noPage }])
        }, [
          P("div", Gu, [
            P("div", Wu, [
              R(H, Or({
                ref_key: "tableRef",
                ref: I
              }, v.$attrs, {
                height: b(m) && qu || null,
                class: { noBorderTable: r.noBorderTable, fullHeightTable: !b(m), lightHeadO: r.lightHead },
                columns: b(T),
                data: b(S),
                "highlight-row": r.radio || r.highlightRow,
                onOnSelect: vr,
                onOnSelectionChange: wr,
                onOnSortChange: Sr,
                onOnRowClick: yr
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        Z(P("div", Ju, [
          R(N, {
            "page-size-opts": b(l),
            total: b(f),
            current: b(s),
            "page-size": b(c),
            "show-sizer": "",
            "show-total": "",
            showElevator: !r.noElevator,
            size: r.pageComponentSize,
            onOnChange: Ar,
            onOnPageSizeChange: Tr
          }, null, 8, ["page-size-opts", "total", "current", "page-size", "showElevator", "size"])
        ], 512), [
          [se, !r.noPage]
        ])
      ], 512);
    };
  }
}), Xu = /* @__PURE__ */ z({
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
      set(s) {
        let f = {
          key: s,
          val: null
        };
        r.value && r.value !== s && (f.beforeKey = r.value), n("update:modelValue", f), n("on-change", f);
      }
    }), a = O({
      get() {
        return t.modelValue && t.modelValue.val || null;
      },
      set(s) {
        n("update:modelValue", {
          key: r.value,
          val: s
        });
      }
    }), o = O(() => ({
      width: t.labelWidth + "px",
      textAlign: t.labelTextAlign
    })), l = O(() => ({ width: t.itemWidth + "px" }));
    function i(s) {
      s && s.target && s.target.value !== void 0 && c({
        key: r.value,
        val: s.target.value
      });
    }
    const c = Hs((s) => {
      n("on-change", s);
    }, 500);
    return (s, f) => {
      const u = F("Option"), d = F("Select"), h = F("Input");
      return j(), B("div", null, [
        R(d, {
          modelValue: b(r),
          "onUpdate:modelValue": f[0] || (f[0] = (g) => Ae(r) ? r.value = g : null),
          style: V(b(o)),
          disabled: !!t.disabled,
          transfer: ""
        }, {
          default: _e(() => [
            (j(!0), B(At, null, Tt(t.selectOption, (g, p) => (j(), Fe(u, {
              value: g.val,
              key: "selectInputOp" + g.value + p,
              style: V({ textAlign: t.labelTextAlign })
            }, {
              default: _e(() => [
                xe(W(g.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        R(h, {
          modelValue: b(a),
          "onUpdate:modelValue": f[1] || (f[1] = (g) => Ae(a) ? a.value = g : null),
          placeholder: t.placeholder || b(E)("r.pInput"),
          style: V(b(l)),
          clearable: t.clearable,
          disabled: !!t.disabled,
          onOnChange: i
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var Yu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dr = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(Yu, function() {
    function t(u) {
      var d = [];
      return u.AMapUI && d.push(r(u.AMapUI)), u.Loca && d.push(a(u.Loca)), Promise.all(d);
    }
    function r(u) {
      return new Promise(function(d, h) {
        var g = [];
        if (u.plugins)
          for (var p = 0; p < u.plugins.length; p += 1)
            l.AMapUI.plugins.indexOf(u.plugins[p]) == -1 && g.push(u.plugins[p]);
        if (i.AMapUI === o.failed)
          h("前次请求 AMapUI 失败");
        else if (i.AMapUI === o.notload) {
          i.AMapUI = o.loading, l.AMapUI.version = u.version || l.AMapUI.version, p = l.AMapUI.version;
          var y = document.body || document.head, m = document.createElement("script");
          m.type = "text/javascript", m.src = "https://webapi.amap.com/ui/" + p + "/main.js", m.onerror = function(A) {
            i.AMapUI = o.failed, h("请求 AMapUI 失败");
          }, m.onload = function() {
            if (i.AMapUI = o.loaded, g.length)
              window.AMapUI.loadUI(g, function() {
                for (var A = 0, T = g.length; A < T; A++) {
                  var S = g[A].split("/").slice(-1)[0];
                  window.AMapUI[S] = arguments[A];
                }
                for (d(); c.AMapUI.length; )
                  c.AMapUI.splice(0, 1)[0]();
              });
            else
              for (d(); c.AMapUI.length; )
                c.AMapUI.splice(0, 1)[0]();
          }, y.appendChild(m);
        } else
          i.AMapUI === o.loaded ? u.version && u.version !== l.AMapUI.version ? h("不允许多个版本 AMapUI 混用") : g.length ? window.AMapUI.loadUI(g, function() {
            for (var A = 0, T = g.length; A < T; A++) {
              var S = g[A].split("/").slice(-1)[0];
              window.AMapUI[S] = arguments[A];
            }
            d();
          }) : d() : u.version && u.version !== l.AMapUI.version ? h("不允许多个版本 AMapUI 混用") : c.AMapUI.push(function(A) {
            A ? h(A) : g.length ? window.AMapUI.loadUI(g, function() {
              for (var T = 0, S = g.length; T < S; T++) {
                var L = g[T].split("/").slice(-1)[0];
                window.AMapUI[L] = arguments[T];
              }
              d();
            }) : d();
          });
      });
    }
    function a(u) {
      return new Promise(function(d, h) {
        if (i.Loca === o.failed)
          h("前次请求 Loca 失败");
        else if (i.Loca === o.notload) {
          i.Loca = o.loading, l.Loca.version = u.version || l.Loca.version;
          var g = l.Loca.version, p = l.AMap.version.startsWith("2"), y = g.startsWith("2");
          if (p && !y || !p && y)
            h("JSAPI 与 Loca 版本不对应！！");
          else {
            p = l.key, y = document.body || document.head;
            var m = document.createElement("script");
            m.type = "text/javascript", m.src = "https://webapi.amap.com/loca?v=" + g + "&key=" + p, m.onerror = function(A) {
              i.Loca = o.failed, h("请求 AMapUI 失败");
            }, m.onload = function() {
              for (i.Loca = o.loaded, d(); c.Loca.length; )
                c.Loca.splice(0, 1)[0]();
            }, y.appendChild(m);
          }
        } else
          i.Loca === o.loaded ? u.version && u.version !== l.Loca.version ? h("不允许多个版本 Loca 混用") : d() : u.version && u.version !== l.Loca.version ? h("不允许多个版本 Loca 混用") : c.Loca.push(function(A) {
            A ? h(A) : h();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var o;
    (function(u) {
      u.notload = "notload", u.loading = "loading", u.loaded = "loaded", u.failed = "failed";
    })(o || (o = {}));
    var l = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = { AMap: o.notload, AMapUI: o.notload, Loca: o.notload }, c = { AMap: [], AMapUI: [], Loca: [] }, s = [], f = function(u) {
      typeof u == "function" && (i.AMap === o.loaded ? u(window.AMap) : s.push(u));
    };
    return { load: function(u) {
      return new Promise(function(d, h) {
        if (i.AMap == o.failed)
          h("");
        else if (i.AMap == o.notload) {
          var g = u.key, p = u.version, y = u.plugins;
          g ? (window.AMap && location.host !== "lbs.amap.com" && h("禁止多种API加载方式混用"), l.key = g, l.AMap.version = p || l.AMap.version, l.AMap.plugins = y || l.AMap.plugins, i.AMap = o.loading, p = document.body || document.head, window.___onAPILoaded = function(A) {
            if (delete window.___onAPILoaded, A)
              i.AMap = o.failed, h(A);
            else
              for (i.AMap = o.loaded, t(u).then(function() {
                d(window.AMap);
              }).catch(h); s.length; )
                s.splice(0, 1)[0]();
          }, y = document.createElement("script"), y.type = "text/javascript", y.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + l.AMap.version + "&key=" + g + "&plugin=" + l.AMap.plugins.join(","), y.onerror = function(A) {
            i.AMap = o.failed, h(A);
          }, p.appendChild(y)) : h("请填写key");
        } else if (i.AMap == o.loaded)
          if (u.key && u.key !== l.key)
            h("多个不一致的 key");
          else if (u.version && u.version !== l.AMap.version)
            h("不允许多个版本 JSAPI 混用");
          else {
            if (g = [], u.plugins)
              for (p = 0; p < u.plugins.length; p += 1)
                l.AMap.plugins.indexOf(u.plugins[p]) == -1 && g.push(u.plugins[p]);
            g.length ? window.AMap.plugin(g, function() {
              t(u).then(function() {
                d(window.AMap);
              }).catch(h);
            }) : t(u).then(function() {
              d(window.AMap);
            }).catch(h);
          }
        else if (u.key && u.key !== l.key)
          h("多个不一致的 key");
        else if (u.version && u.version !== l.AMap.version)
          h("不允许多个版本 JSAPI 混用");
        else {
          var m = [];
          if (u.plugins)
            for (p = 0; p < u.plugins.length; p += 1)
              l.AMap.plugins.indexOf(u.plugins[p]) == -1 && m.push(u.plugins[p]);
          f(function() {
            m.length ? window.AMap.plugin(m, function() {
              t(u).then(function() {
                d(window.AMap);
              }).catch(h);
            }) : t(u).then(function() {
              d(window.AMap);
            }).catch(h);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, l = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = {
        AMap: o.notload,
        AMapUI: o.notload,
        Loca: o.notload
      }, c = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(dr);
var Qu = dr.exports;
const ec = /* @__PURE__ */ Zu(Qu);
let wt = { securityJsCode: "", key: "" };
function tc({ securityJsCode: e, key: n }) {
  wt.securityJsCode = e, wt.key = n;
}
function nc(e) {
  return wt[e];
}
const rc = /* @__PURE__ */ z({
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
        let T;
        return t.modelValue ? t.modelValue.name ? T = Y(t.modelValue) : T = {
          ...t.modelValue,
          name: null
        } : T = {
          name: null
        }, T;
      },
      set(T) {
        n("update:modelValue", Y(T));
      }
    }), a = O(() => je(t.width) ? t.width + "px" : t.width), o = O(() => je(t.height) ? t.height + "px" : t.height ? t.height : je(t.width) ? t.width * 0.66 + "px" : "200px"), l = O(() => ({
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
    Xe(
      () => t.modelValue,
      (T) => {
        T && T.lng && T.lat && m({
          lng: T.lng,
          lat: T.lat,
          name: T.name
        });
      }
    );
    const c = "mapId" + Math.floor(Math.random() * 1e9), s = k(null), f = k(null);
    let u;
    function d() {
      f.value && f.value.clientHeight < 10 || !f.value ? ee(d, 100) : ee(y, 1e3);
    }
    let h, g, p;
    function y() {
      ec.load({
        key: nc("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((T) => {
        h = T, g = new h.Map(c).on("complete", () => {
          var S, L;
          p = new h.Geocoder(), t.modelValue && t.modelValue.lng && t.modelValue.lat && m({
            lng: t.modelValue.lng,
            lat: t.modelValue.lat,
            name: t.modelValue.name
          }), new h.AutoComplete({
            input: (L = (S = s.value) == null ? void 0 : S.$el) == null ? void 0 : L.children[1]
          }).on("select", (_) => {
            _ && _.poi && _.poi.name && (_.poi.location && _.poi.location.lng && _.poi.location.lat ? (m({
              name: _.poi.name,
              lng: _.poi.location.lng,
              lat: _.poi.location.lat
            }), r.value = {
              name: _.poi.name,
              lng: _.poi.location.lng,
              lat: _.poi.location.lat
            }) : g.setCity(_.poi.name, () => {
              let I = g.getCenter();
              m({
                name: _.poi.name,
                lng: I.lng,
                lat: I.lat
              }), r.value = {
                name: _.poi.name,
                lng: I.lng,
                lat: I.lat
              };
            })), n("on-change", r.value);
          }), g.on("hotspotclick", (_) => {
            m({
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
    function m({ lng: T, lat: S, name: L }) {
      g.clearMap();
      let _ = new h.LngLat(T, S), I = new h.Marker({
        map: g,
        position: _,
        draggable: !0
      });
      g.add(I), A(T, S), I.on("dragend", () => {
        let J = I.getPosition();
        r.value = {
          name: L || null,
          lng: J.lng,
          lat: J.lat
        }, A(T, S);
      }), I.on("click", (J) => {
        u && u.open(g, J.target.getPosition());
      }), g.setFitView();
    }
    function A(T, S) {
      p.getAddress([T, S], (L, _) => {
        L === "complete" && _.info === "OK" && _.regeocode && _.regeocode.formattedAddress ? u = new h.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + _.regeocode.formattedAddress + "</div>",
          offset: new h.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (u = null, console.warn("地图获取位置信息失败", _));
      });
    }
    return Ye(d), Ir(() => {
      g && (g.destroy(), g = null, p = null, u = null);
    }), (T, S) => (j(), B("div", {
      style: V(b(l)),
      class: "containerIKJ"
    }, [
      R(b(Er), {
        ref_key: "mapInputRef",
        ref: s,
        modelValue: b(r).name,
        "onUpdate:modelValue": S[0] || (S[0] = (L) => b(r).name = L),
        class: ie({ mapInputIKJ: t.showMap }),
        placeholder: t.placeholder || b(E)("r.search"),
        disabled: t.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      P("div", {
        style: V(b(i)),
        ref_key: "mapRef",
        ref: f,
        id: c
      }, null, 4)
    ], 4));
  }
});
var Sn;
const oc = /* @__PURE__ */ z({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Sn = window == null ? void 0 : window.g) != null && Sn.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const t = e, r = k([]), a = O({
      get() {
        let s = t.modelValue;
        return Array.isArray(s) ? Y(s) : je(s) ? Ke({
          group: r.value,
          condition: (f) => f.value === s,
          pathKey: "value"
        }) : Ws(s) ? s.split(t.separator) : [];
      },
      set(s) {
        if (t.onlyLastVal)
          fe(s) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", yn(s));
        else {
          if (Qs(t.modelValue, s))
            return;
          n("update:modelValue", Y(s));
        }
      }
    });
    function o() {
      if (!t.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Re.get(t.url).then((s) => {
        let f = null;
        s && s.data && s.data.records ? f = s.data.records : s && s.data ? f = s.data : s && (f = s), f ? (typeof t.optionFilter == "function" && x(t.optionFilter) === "Function" && (f = t.optionFilter(f)), r.value = l(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function l(s) {
      let f = [];
      for (let u of s) {
        let d = {
          value: u[t.optionVal],
          label: u[t.optionLabel]
        };
        u.children && !fe(u.children) && (d.children = l(u.children)), f.push(d);
      }
      return f;
    }
    function i(s, f) {
      return t.onlyLastLabel ? yn(s) : s.join(t.separator);
    }
    function c(s, f) {
      let u = "";
      fe(f) || (u = f.map((d) => d.label).join(t.separator)), n("on-label-change", u);
    }
    return Ye(o), (s, f) => {
      const u = F("Cascader");
      return j(), Fe(u, {
        data: b(r),
        modelValue: b(a),
        "onUpdate:modelValue": f[0] || (f[0] = (d) => Ae(a) ? a.value = d : null),
        onOnChange: c,
        "change-on-select": "",
        transfer: "",
        disabled: t.disabled,
        "render-format": i,
        placeholder: t.placeholder || b(E)("r.pSelect"),
        filterable: t.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), An = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncCascader: oc,
  BtTablePage: Ku,
  FullPop: Hr,
  HeaderBt: Cn,
  Hello: Wr,
  IconTxtBtn: Jr,
  InputMap: rc,
  Page404: Zr,
  SelectInput: Xu,
  ShowHidePanel: ju,
  ShowHidePanelB: Eu,
  SideMenu: Ou,
  TableIconBtn: Cu,
  TableSearch: ku,
  TableSetting: Nu
}, Symbol.toStringTag, { value: "Module" }));
let Me = !1;
function pr({
  height: e,
  width: n = 416,
  title: t,
  content: r,
  onOk: a,
  onCancel: o,
  okText: l,
  cancelText: i,
  noWarnIcon: c,
  footerAlign: s,
  cancelBt: f = !0
}) {
  const u = (...p) => $e.apply(this, p);
  let h = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", g = x(r) === "String";
  be.warning({
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
                  ot,
                  {
                    class: "fr closeN",
                    type: "text",
                    onclick() {
                      Me || be.remove();
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
                  class: g && !c ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
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
                  textAlign: s || "center"
                }
              },
              [
                G(
                  ot,
                  {
                    class: "okBtN",
                    onclick(p) {
                      var y;
                      if (a && typeof a == "function") {
                        const m = a();
                        if (m && x(m) === "Promise") {
                          Me = !0;
                          const A = p && (p.currentTarget || p.target);
                          A && (A.classList.add("ivu-btn-loading"), A.nextSibling.setAttribute("disabled", "disabled"), ((y = A.parentElement) == null ? void 0 : y.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(m).then(() => {
                            Me = !1, be.remove();
                          }).catch(() => {
                            Me = !1, be.remove();
                          });
                        } else
                          be.remove();
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
                  ot,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onclick() {
                      Me || (be.remove(), x(o) === "Function" && o && o());
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
function gr(e, n, t, r) {
  const a = (...o) => $e.apply(this, o);
  nt.call(this, {
    title: e || a("r.info.title"),
    text: n || a("r.info.text"),
    icon: t || "warning",
    onOk: r,
    buttons: [a("r.cancel")]
  });
}
const Tn = {
  $fetch: Re,
  $swal: nt,
  $swalConfirm: gr,
  messageBox: pr,
  setInterval: cr,
  setTimeout: ee,
  ...ur
}, ac = function(e, n = {}) {
  Re.init(n.useStore || n.store, e), n.locale && We.use(n.locale), n.i18n && We.i18n(n.i18n), n.router && Bu(n.router), n.amap && tc(n.amap), n.notRegistryGlobal || (Object.keys(An).forEach((t) => {
    e.component(t) || e.component(t, An[t]);
  }), Object.keys(Tn).forEach((t) => {
    e.config.globalProperties[t] = Tn[t];
  })), e.directive("has") || e.directive("has", (t, r) => {
    r.value && !e.config.globalProperties.hasPermission(r.value) && (t.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (t, r) => {
    let a;
    r.arg ? a = t.querySelector("." + r.arg) : a = t.querySelector(".ivu-select-dropdown") || t, a.addEventListener("scroll", function() {
      a.scrollTop > 0 && a.scrollHeight - a.scrollTop <= a.clientHeight && r.value();
    });
  });
}, lc = We.use, ic = We.i18n, hc = {
  locale: lc,
  i18n: ic,
  install: ac,
  ...ur,
  ...uu,
  $fetch: Re,
  $swal: nt,
  $swalConfirm: gr,
  messageBox: pr,
  setInterval: cr,
  setTimeout: ee
};
export {
  Re as $fetch,
  nt as $swal,
  gr as $swalConfirm,
  oc as AsyncCascader,
  Ku as BtTablePage,
  Hr as FullPop,
  Cn as HeaderBt,
  Wr as Hello,
  Jr as IconTxtBtn,
  rc as InputMap,
  Zr as Page404,
  Xu as SelectInput,
  ju as ShowHidePanel,
  Eu as ShowHidePanelB,
  Ou as SideMenu,
  Cu as TableIconBtn,
  ku as TableSearch,
  Nu as TableSetting,
  mt as clearObj,
  _u as dataFilterOrToUrl,
  gu as decimalDigitsLimit,
  hc as default,
  or as downloadFileByFormSubmit,
  lu as downloadFileReaderFile,
  iu as emptyInput,
  tr as fakeALinkClick,
  hu as fileExport,
  du as findCollection,
  Ke as findPath,
  cu as formDataHeadConfig,
  mu as getColumnsKeys,
  ru as getFileSrc,
  er as getFileTypeByName,
  au as getFileTypeIconByName,
  nr as getStringWidth,
  wu as hasPermission,
  nu as htmlDecode,
  tu as htmlEncode,
  Au as htmlPrint,
  yu as isEmptyValue,
  ou as isImgByFile,
  ir as isNaN,
  bu as isNumberValue,
  le as isValidValue,
  pr as messageBox,
  x as myTypeof,
  pu as oneOf,
  bt as removeEmptyValue,
  cr as setInterval,
  ee as setTimeout,
  lr as setValByOption,
  sr as siblingElems,
  su as stopBubbling,
  vu as stringLength,
  fu as toFormData,
  Qn as toHump,
  rr as toLine,
  ar as tooltipManual,
  ht as trimObj
};
//# sourceMappingURL=plugRQw.js.map
