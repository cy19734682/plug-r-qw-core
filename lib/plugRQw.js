import { getCurrentInstance as lt, defineComponent as L, resolveComponent as N, openBlock as x, createElementBlock as I, normalizeClass as ne, normalizeStyle as V, createBlock as st, createCommentVNode as nn, renderSlot as X, ref as k, computed as O, withDirectives as U, unref as h, createElementVNode as T, toDisplayString as D, createVNode as M, withCtx as Be, createTextVNode as Oe, vShow as Z, resolveDirective as rn, Fragment as on, renderList as an, onBeforeMount as sr, watch as it, nextTick as ln, isRef as Je, onMounted as sn, withModifiers as ir, mergeProps as cr, h as F } from "vue";
import ur from "deepmerge";
import Ae from "sweetalert";
import { useRouter as fr, useRoute as dr } from "vue-router";
import { useI18n as pr } from "vue-i18n";
import Xe from "axios";
import { TableColumnConfig as gr, Modal as le, Button as Ge } from "view-ui-plus";
const cn = {
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
}, hr = /(%|){([0-9a-zA-Z_]+)}/g;
function br() {
  function e(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }
  function n(t, ...r) {
    let o;
    return r.length === 1 && typeof r[0] == "object" && (o = r[0]), (!o || !o.hasOwnProperty) && (o = {}), t === void 0 ? "" : t.replace(hr, (a, l, s, i) => {
      let c;
      return t[i - 1] === "{" && t[i + a.length] === "}" ? s : (c = e(o, s) ? o[s] : null, c ?? "");
    });
  }
  return n;
}
const mr = br();
let ke = cn;
const yr = {
  zh: cn
};
let xt, At = {}, P, vr = function(e, n) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, n);
  if (P && P.global)
    return P.global.t(e, n);
  if (P && P.locale) {
    if (!At[P.locale] || xt != P.locale) {
      At[P.locale] = !0;
      let t = P.getLocaleMessage(P.locale) || {}, r = ur(yr[P.locale], t, { clone: !0 });
      ke = r, P.setLocaleMessage(P.locale, r), xt = P.locale;
    }
    return P.hlang(e, n);
  }
};
const pe = function(e, n) {
  let t = vr.apply(this, [e, n]);
  if (t != null)
    return t;
  const r = e.split(".");
  let o = ke;
  for (let a = 0, l = r.length; a < l; a++) {
    const s = r[a];
    if (t = o[s], a === l - 1)
      return mr(t, n);
    if (!t)
      return "";
    o = t;
  }
  return "";
}, wr = function(e) {
  ke = e || ke;
}, _r = function(e) {
  P = e;
}, Ee = {
  use: wr,
  t: pe,
  i18n: _r
};
function A(e, n) {
  var r;
  const t = (r = lt()) == null ? void 0 : r.appContext.config.globalProperties;
  return pe.apply(t, [e, n]);
}
const un = /* @__PURE__ */ L({
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
      const l = N("Icon");
      return x(), I("div", {
        class: ne({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: V({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: r
      }, [
        o.icon ? (x(), st(l, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : nn("", !0),
        X(o.$slots, "default")
      ], 6);
    };
  }
}), Sr = { class: "headerTxtAM" }, Tr = { class: "contentAM" }, $r = /* @__PURE__ */ L({
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
    let o = k(!1);
    const a = O(() => typeof r.headerFontSize == "number" ? r.headerFontSize + "px" : r.headerFontSize), l = O(() => ({ zIndex: r.zIndex }));
    function s() {
      o.value = !0, t("on-open");
    }
    function i(c) {
      o.value = !1, t("on-close", c === !0);
    }
    return n({
      open: s,
      close: i
    }), (c, f) => U((x(), I("div", {
      class: "fullScreenPopBoxAM",
      style: V(h(l))
    }, [
      T("div", {
        class: "headerAM",
        style: V({ color: c.headerColor, backgroundColor: c.headerBg, fontSize: h(a) })
      }, [
        T("span", Sr, D(c.title || h(A)("r.title")), 1),
        M(un, {
          icon: "md-return-left",
          onClick: i
        }, {
          default: Be(() => [
            Oe(D(h(A)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      T("div", Tr, [
        X(c.$slots, "default")
      ])
    ], 4)), [
      [Z, h(o)]
    ]);
  }
}), Or = { class: "msg" }, Cr = /* @__PURE__ */ L({
  __name: "Hello",
  setup(e) {
    let n = k("Greetings from Ricky.");
    return (t, r) => (x(), I("span", Or, D(h(n)), 1));
  }
}), xr = /* @__PURE__ */ L({
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
    return (a, l) => {
      const s = N("Icon"), i = rn("has");
      return U((x(), I("div", {
        class: ne(["tabTopBtnsT", { disabled: a.disabled }]),
        onClick: o,
        style: V({ "font-size": h(r) })
      }, [
        M(s, {
          type: a.icon,
          size: a.size
        }, null, 8, ["type", "size"]),
        Oe(" " + D(a.name || h(A)("r.button")), 1)
      ], 6)), [
        [i, a.has]
      ]);
    };
  }
}), Ar = { class: "c404K" }, jr = /* @__PURE__ */ T("div", { class: "t404" }, "404", -1), Pr = { class: "ct404" }, Ir = { class: "p404" }, Br = /* @__PURE__ */ L({
  __name: "Page404",
  setup(e) {
    const t = lt().appContext.config.globalProperties.$router;
    function r() {
      t.go(-1);
    }
    return (o, a) => {
      const l = N("Button");
      return x(), I("div", Ar, [
        jr,
        T("div", Pr, "UH OH! " + D(h(A)("r.pageNotFound")), 1),
        T("div", Ir, D(h(A)("r.notFoundMsg")), 1),
        M(l, {
          class: "bt404",
          onClick: r
        }, {
          default: Be(() => [
            Oe(D(h(A)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var kr = typeof global == "object" && global && global.Object === Object && global;
const fn = kr;
var Er = typeof self == "object" && self && self.Object === Object && self, Fr = fn || Er || Function("return this")();
const G = Fr;
var Nr = G.Symbol;
const fe = Nr;
var dn = Object.prototype, Mr = dn.hasOwnProperty, zr = dn.toString, ve = fe ? fe.toStringTag : void 0;
function Lr(e) {
  var n = Mr.call(e, ve), t = e[ve];
  try {
    e[ve] = void 0;
    var r = !0;
  } catch {
  }
  var o = zr.call(e);
  return r && (n ? e[ve] = t : delete e[ve]), o;
}
var Rr = Object.prototype, Dr = Rr.toString;
function Hr(e) {
  return Dr.call(e);
}
var Vr = "[object Null]", Ur = "[object Undefined]", jt = fe ? fe.toStringTag : void 0;
function K(e) {
  return e == null ? e === void 0 ? Ur : Vr : jt && jt in Object(e) ? Lr(e) : Hr(e);
}
function Q(e) {
  return e != null && typeof e == "object";
}
var Gr = Array.isArray;
const Fe = Gr;
function ge(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
var qr = "[object AsyncFunction]", Wr = "[object Function]", Jr = "[object GeneratorFunction]", Xr = "[object Proxy]";
function ct(e) {
  if (!ge(e))
    return !1;
  var n = K(e);
  return n == Wr || n == Jr || n == qr || n == Xr;
}
var Yr = G["__core-js_shared__"];
const qe = Yr;
var Pt = function() {
  var e = /[^.]+$/.exec(qe && qe.keys && qe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zr(e) {
  return !!Pt && Pt in e;
}
var Kr = Function.prototype, Qr = Kr.toString;
function oe(e) {
  if (e != null) {
    try {
      return Qr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var eo = /[\\^$.*+?()[\]{}|]/g, to = /^\[object .+?Constructor\]$/, no = Function.prototype, ro = Object.prototype, oo = no.toString, ao = ro.hasOwnProperty, lo = RegExp(
  "^" + oo.call(ao).replace(eo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function so(e) {
  if (!ge(e) || Zr(e))
    return !1;
  var n = ct(e) ? lo : to;
  return n.test(oe(e));
}
function io(e, n) {
  return e == null ? void 0 : e[n];
}
function ae(e, n) {
  var t = io(e, n);
  return so(t) ? t : void 0;
}
var co = ae(G, "WeakMap");
const Ye = co;
var It = Object.create, uo = function() {
  function e() {
  }
  return function(n) {
    if (!ge(n))
      return {};
    if (It)
      return It(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const fo = uo;
function po(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
var go = function() {
  try {
    var e = ae(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Bt = go;
function ho(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r && n(e[t], t, e) !== !1; )
    ;
  return e;
}
var bo = 9007199254740991, mo = /^(?:0|[1-9]\d*)$/;
function yo(e, n) {
  var t = typeof e;
  return n = n ?? bo, !!n && (t == "number" || t != "symbol" && mo.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function pn(e, n, t) {
  n == "__proto__" && Bt ? Bt(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function gn(e, n) {
  return e === n || e !== e && n !== n;
}
var vo = Object.prototype, wo = vo.hasOwnProperty;
function hn(e, n, t) {
  var r = e[n];
  (!(wo.call(e, n) && gn(r, t)) || t === void 0 && !(n in e)) && pn(e, n, t);
}
function Ne(e, n, t, r) {
  var o = !t;
  t || (t = {});
  for (var a = -1, l = n.length; ++a < l; ) {
    var s = n[a], i = r ? r(t[s], e[s], s, t, e) : void 0;
    i === void 0 && (i = e[s]), o ? pn(t, s, i) : hn(t, s, i);
  }
  return t;
}
var _o = 9007199254740991;
function bn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= _o;
}
function ut(e) {
  return e != null && bn(e.length) && !ct(e);
}
var So = Object.prototype;
function Me(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || So;
  return e === t;
}
function To(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var $o = "[object Arguments]";
function kt(e) {
  return Q(e) && K(e) == $o;
}
var mn = Object.prototype, Oo = mn.hasOwnProperty, Co = mn.propertyIsEnumerable, xo = kt(function() {
  return arguments;
}()) ? kt : function(e) {
  return Q(e) && Oo.call(e, "callee") && !Co.call(e, "callee");
};
const yn = xo;
function Ao() {
  return !1;
}
var vn = typeof exports == "object" && exports && !exports.nodeType && exports, Et = vn && typeof module == "object" && module && !module.nodeType && module, jo = Et && Et.exports === vn, Ft = jo ? G.Buffer : void 0, Po = Ft ? Ft.isBuffer : void 0, Io = Po || Ao;
const ft = Io;
var Bo = "[object Arguments]", ko = "[object Array]", Eo = "[object Boolean]", Fo = "[object Date]", No = "[object Error]", Mo = "[object Function]", zo = "[object Map]", Lo = "[object Number]", Ro = "[object Object]", Do = "[object RegExp]", Ho = "[object Set]", Vo = "[object String]", Uo = "[object WeakMap]", Go = "[object ArrayBuffer]", qo = "[object DataView]", Wo = "[object Float32Array]", Jo = "[object Float64Array]", Xo = "[object Int8Array]", Yo = "[object Int16Array]", Zo = "[object Int32Array]", Ko = "[object Uint8Array]", Qo = "[object Uint8ClampedArray]", ea = "[object Uint16Array]", ta = "[object Uint32Array]", S = {};
S[Wo] = S[Jo] = S[Xo] = S[Yo] = S[Zo] = S[Ko] = S[Qo] = S[ea] = S[ta] = !0;
S[Bo] = S[ko] = S[Go] = S[Eo] = S[qo] = S[Fo] = S[No] = S[Mo] = S[zo] = S[Lo] = S[Ro] = S[Do] = S[Ho] = S[Vo] = S[Uo] = !1;
function na(e) {
  return Q(e) && bn(e.length) && !!S[K(e)];
}
function dt(e) {
  return function(n) {
    return e(n);
  };
}
var wn = typeof exports == "object" && exports && !exports.nodeType && exports, _e = wn && typeof module == "object" && module && !module.nodeType && module, ra = _e && _e.exports === wn, We = ra && fn.process, oa = function() {
  try {
    var e = _e && _e.require && _e.require("util").types;
    return e || We && We.binding && We.binding("util");
  } catch {
  }
}();
const de = oa;
var Nt = de && de.isTypedArray, aa = Nt ? dt(Nt) : na;
const _n = aa;
var la = Object.prototype, sa = la.hasOwnProperty;
function Sn(e, n) {
  var t = Fe(e), r = !t && yn(e), o = !t && !r && ft(e), a = !t && !r && !o && _n(e), l = t || r || o || a, s = l ? To(e.length, String) : [], i = s.length;
  for (var c in e)
    (n || sa.call(e, c)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    yo(c, i))) && s.push(c);
  return s;
}
function Tn(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var ia = Tn(Object.keys, Object);
const ca = ia;
var ua = Object.prototype, fa = ua.hasOwnProperty;
function $n(e) {
  if (!Me(e))
    return ca(e);
  var n = [];
  for (var t in Object(e))
    fa.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function pt(e) {
  return ut(e) ? Sn(e) : $n(e);
}
function da(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var pa = Object.prototype, ga = pa.hasOwnProperty;
function ha(e) {
  if (!ge(e))
    return da(e);
  var n = Me(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !ga.call(e, r)) || t.push(r);
  return t;
}
function gt(e) {
  return ut(e) ? Sn(e, !0) : ha(e);
}
var ba = ae(Object, "create");
const Se = ba;
function ma() {
  this.__data__ = Se ? Se(null) : {}, this.size = 0;
}
function ya(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var va = "__lodash_hash_undefined__", wa = Object.prototype, _a = wa.hasOwnProperty;
function Sa(e) {
  var n = this.__data__;
  if (Se) {
    var t = n[e];
    return t === va ? void 0 : t;
  }
  return _a.call(n, e) ? n[e] : void 0;
}
var Ta = Object.prototype, $a = Ta.hasOwnProperty;
function Oa(e) {
  var n = this.__data__;
  return Se ? n[e] !== void 0 : $a.call(n, e);
}
var Ca = "__lodash_hash_undefined__";
function xa(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Se && n === void 0 ? Ca : n, this;
}
function re(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
re.prototype.clear = ma;
re.prototype.delete = ya;
re.prototype.get = Sa;
re.prototype.has = Oa;
re.prototype.set = xa;
function Aa() {
  this.__data__ = [], this.size = 0;
}
function ze(e, n) {
  for (var t = e.length; t--; )
    if (gn(e[t][0], n))
      return t;
  return -1;
}
var ja = Array.prototype, Pa = ja.splice;
function Ia(e) {
  var n = this.__data__, t = ze(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : Pa.call(n, t, 1), --this.size, !0;
}
function Ba(e) {
  var n = this.__data__, t = ze(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function ka(e) {
  return ze(this.__data__, e) > -1;
}
function Ea(e, n) {
  var t = this.__data__, r = ze(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function q(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
q.prototype.clear = Aa;
q.prototype.delete = Ia;
q.prototype.get = Ba;
q.prototype.has = ka;
q.prototype.set = Ea;
var Fa = ae(G, "Map");
const Te = Fa;
function Na() {
  this.size = 0, this.__data__ = {
    hash: new re(),
    map: new (Te || q)(),
    string: new re()
  };
}
function Ma(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Le(e, n) {
  var t = e.__data__;
  return Ma(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function za(e) {
  var n = Le(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function La(e) {
  return Le(this, e).get(e);
}
function Ra(e) {
  return Le(this, e).has(e);
}
function Da(e, n) {
  var t = Le(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function he(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
he.prototype.clear = Na;
he.prototype.delete = za;
he.prototype.get = La;
he.prototype.has = Ra;
he.prototype.set = Da;
function On(e, n) {
  for (var t = -1, r = n.length, o = e.length; ++t < r; )
    e[o + t] = n[t];
  return e;
}
var Ha = Tn(Object.getPrototypeOf, Object);
const ht = Ha;
var Va = "[object Object]", Ua = Function.prototype, Ga = Object.prototype, Cn = Ua.toString, qa = Ga.hasOwnProperty, Wa = Cn.call(Object);
function ce(e) {
  if (!Q(e) || K(e) != Va)
    return !1;
  var n = ht(e);
  if (n === null)
    return !0;
  var t = qa.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && Cn.call(t) == Wa;
}
function Ja() {
  this.__data__ = new q(), this.size = 0;
}
function Xa(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function Ya(e) {
  return this.__data__.get(e);
}
function Za(e) {
  return this.__data__.has(e);
}
var Ka = 200;
function Qa(e, n) {
  var t = this.__data__;
  if (t instanceof q) {
    var r = t.__data__;
    if (!Te || r.length < Ka - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new he(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function be(e) {
  var n = this.__data__ = new q(e);
  this.size = n.size;
}
be.prototype.clear = Ja;
be.prototype.delete = Xa;
be.prototype.get = Ya;
be.prototype.has = Za;
be.prototype.set = Qa;
function el(e, n) {
  return e && Ne(n, pt(n), e);
}
function tl(e, n) {
  return e && Ne(n, gt(n), e);
}
var xn = typeof exports == "object" && exports && !exports.nodeType && exports, Mt = xn && typeof module == "object" && module && !module.nodeType && module, nl = Mt && Mt.exports === xn, zt = nl ? G.Buffer : void 0, Lt = zt ? zt.allocUnsafe : void 0;
function rl(e, n) {
  if (n)
    return e.slice();
  var t = e.length, r = Lt ? Lt(t) : new e.constructor(t);
  return e.copy(r), r;
}
function ol(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++t < r; ) {
    var l = e[t];
    n(l, t, e) && (a[o++] = l);
  }
  return a;
}
function An() {
  return [];
}
var al = Object.prototype, ll = al.propertyIsEnumerable, Rt = Object.getOwnPropertySymbols, sl = Rt ? function(e) {
  return e == null ? [] : (e = Object(e), ol(Rt(e), function(n) {
    return ll.call(e, n);
  }));
} : An;
const bt = sl;
function il(e, n) {
  return Ne(e, bt(e), n);
}
var cl = Object.getOwnPropertySymbols, ul = cl ? function(e) {
  for (var n = []; e; )
    On(n, bt(e)), e = ht(e);
  return n;
} : An;
const jn = ul;
function fl(e, n) {
  return Ne(e, jn(e), n);
}
function Pn(e, n, t) {
  var r = n(e);
  return Fe(e) ? r : On(r, t(e));
}
function dl(e) {
  return Pn(e, pt, bt);
}
function pl(e) {
  return Pn(e, gt, jn);
}
var gl = ae(G, "DataView");
const Ze = gl;
var hl = ae(G, "Promise");
const Ke = hl;
var bl = ae(G, "Set");
const Qe = bl;
var Dt = "[object Map]", ml = "[object Object]", Ht = "[object Promise]", Vt = "[object Set]", Ut = "[object WeakMap]", Gt = "[object DataView]", yl = oe(Ze), vl = oe(Te), wl = oe(Ke), _l = oe(Qe), Sl = oe(Ye), ee = K;
(Ze && ee(new Ze(new ArrayBuffer(1))) != Gt || Te && ee(new Te()) != Dt || Ke && ee(Ke.resolve()) != Ht || Qe && ee(new Qe()) != Vt || Ye && ee(new Ye()) != Ut) && (ee = function(e) {
  var n = K(e), t = n == ml ? e.constructor : void 0, r = t ? oe(t) : "";
  if (r)
    switch (r) {
      case yl:
        return Gt;
      case vl:
        return Dt;
      case wl:
        return Ht;
      case _l:
        return Vt;
      case Sl:
        return Ut;
    }
  return n;
});
const Re = ee;
var Tl = Object.prototype, $l = Tl.hasOwnProperty;
function Ol(e) {
  var n = e.length, t = new e.constructor(n);
  return n && typeof e[0] == "string" && $l.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Cl = G.Uint8Array;
const qt = Cl;
function mt(e) {
  var n = new e.constructor(e.byteLength);
  return new qt(n).set(new qt(e)), n;
}
function xl(e, n) {
  var t = n ? mt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Al = /\w*$/;
function jl(e) {
  var n = new e.constructor(e.source, Al.exec(e));
  return n.lastIndex = e.lastIndex, n;
}
var Wt = fe ? fe.prototype : void 0, Jt = Wt ? Wt.valueOf : void 0;
function Pl(e) {
  return Jt ? Object(Jt.call(e)) : {};
}
function Il(e, n) {
  var t = n ? mt(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Bl = "[object Boolean]", kl = "[object Date]", El = "[object Map]", Fl = "[object Number]", Nl = "[object RegExp]", Ml = "[object Set]", zl = "[object String]", Ll = "[object Symbol]", Rl = "[object ArrayBuffer]", Dl = "[object DataView]", Hl = "[object Float32Array]", Vl = "[object Float64Array]", Ul = "[object Int8Array]", Gl = "[object Int16Array]", ql = "[object Int32Array]", Wl = "[object Uint8Array]", Jl = "[object Uint8ClampedArray]", Xl = "[object Uint16Array]", Yl = "[object Uint32Array]";
function Zl(e, n, t) {
  var r = e.constructor;
  switch (n) {
    case Rl:
      return mt(e);
    case Bl:
    case kl:
      return new r(+e);
    case Dl:
      return xl(e, t);
    case Hl:
    case Vl:
    case Ul:
    case Gl:
    case ql:
    case Wl:
    case Jl:
    case Xl:
    case Yl:
      return Il(e, t);
    case El:
      return new r();
    case Fl:
    case zl:
      return new r(e);
    case Nl:
      return jl(e);
    case Ml:
      return new r();
    case Ll:
      return Pl(e);
  }
}
function Kl(e) {
  return typeof e.constructor == "function" && !Me(e) ? fo(ht(e)) : {};
}
var Ql = "[object Map]";
function es(e) {
  return Q(e) && Re(e) == Ql;
}
var Xt = de && de.isMap, ts = Xt ? dt(Xt) : es;
const ns = ts;
var rs = "[object Set]";
function os(e) {
  return Q(e) && Re(e) == rs;
}
var Yt = de && de.isSet, as = Yt ? dt(Yt) : os;
const ls = as;
var ss = 1, is = 2, cs = 4, In = "[object Arguments]", us = "[object Array]", fs = "[object Boolean]", ds = "[object Date]", ps = "[object Error]", Bn = "[object Function]", gs = "[object GeneratorFunction]", hs = "[object Map]", bs = "[object Number]", kn = "[object Object]", ms = "[object RegExp]", ys = "[object Set]", vs = "[object String]", ws = "[object Symbol]", _s = "[object WeakMap]", Ss = "[object ArrayBuffer]", Ts = "[object DataView]", $s = "[object Float32Array]", Os = "[object Float64Array]", Cs = "[object Int8Array]", xs = "[object Int16Array]", As = "[object Int32Array]", js = "[object Uint8Array]", Ps = "[object Uint8ClampedArray]", Is = "[object Uint16Array]", Bs = "[object Uint32Array]", _ = {};
_[In] = _[us] = _[Ss] = _[Ts] = _[fs] = _[ds] = _[$s] = _[Os] = _[Cs] = _[xs] = _[As] = _[hs] = _[bs] = _[kn] = _[ms] = _[ys] = _[vs] = _[ws] = _[js] = _[Ps] = _[Is] = _[Bs] = !0;
_[ps] = _[Bn] = _[_s] = !1;
function Pe(e, n, t, r, o, a) {
  var l, s = n & ss, i = n & is, c = n & cs;
  if (t && (l = o ? t(e, r, o, a) : t(e)), l !== void 0)
    return l;
  if (!ge(e))
    return e;
  var f = Fe(e);
  if (f) {
    if (l = Ol(e), !s)
      return po(e, l);
  } else {
    var p = Re(e), g = p == Bn || p == gs;
    if (ft(e))
      return rl(e, s);
    if (p == kn || p == In || g && !o) {
      if (l = i || g ? {} : Kl(e), !s)
        return i ? fl(e, tl(l, e)) : il(e, el(l, e));
    } else {
      if (!_[p])
        return o ? e : {};
      l = Zl(e, p, s);
    }
  }
  a || (a = new be());
  var $ = a.get(e);
  if ($)
    return $;
  a.set(e, l), ls(e) ? e.forEach(function(v) {
    l.add(Pe(v, n, t, v, e, a));
  }) : ns(e) && e.forEach(function(v, w) {
    l.set(w, Pe(v, n, t, w, e, a));
  });
  var C = c ? i ? pl : dl : i ? gt : pt, b = f ? void 0 : C(e);
  return ho(b || e, function(v, w) {
    b && (w = v, v = e[w]), hn(l, w, Pe(v, n, t, w, e, a));
  }), l;
}
var ks = 1, Es = 4;
function ue(e) {
  return Pe(e, ks | Es);
}
var Fs = "[object Boolean]";
function Ns(e) {
  return e === !0 || e === !1 || Q(e) && K(e) == Fs;
}
var Ms = "[object Map]", zs = "[object Set]", Ls = Object.prototype, Rs = Ls.hasOwnProperty;
function Ie(e) {
  if (e == null)
    return !0;
  if (ut(e) && (Fe(e) || typeof e == "string" || typeof e.splice == "function" || ft(e) || _n(e) || yn(e)))
    return !e.length;
  var n = Re(e);
  if (n == Ms || n == zs)
    return !e.size;
  if (Me(e))
    return !$n(e).length;
  for (var t in e)
    if (Rs.call(e, t))
      return !1;
  return !0;
}
var Ds = "[object Number]";
function Hs(e) {
  return typeof e == "number" || Q(e) && K(e) == Ds;
}
function De(e, n, t) {
  const r = (...o) => pe.apply(this, o);
  return new Promise((o, a) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let l = r("r.confirm"), s = r("r.cancel"), i = !1, c = "swalConfirmBt", f = "swalCancelBt";
      const p = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let g = "";
      e.text && p.test(m(e.text)) ? g = "content" : e.text && m(e.text) === "String" && (g = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (s = e.buttons.cancel.text) && (i = !0), e.buttons.cancel.className && (f = e.buttons.cancel.className), e.buttons.confirm.text && (l = e.buttons.confirm.text), e.buttons.confirm.className && (c = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (s = e.buttons[0], i = !0), e.buttons[1] && (l = e.buttons[1]))), Ae({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [g]: e.text,
        buttons: {
          confirm: {
            text: l,
            value: !0,
            visible: !0,
            className: c
          },
          cancel: {
            text: s,
            value: null,
            visible: i,
            className: f
          }
        }
      }).then(($) => {
        $ && typeof e.onOk == "function" && e.onOk(), o($);
      }).catch(($) => {
        a($);
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
      Ae({
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
      }).then((s) => {
        o(s);
      }).catch((s) => {
        a(s);
      });
    } else if (typeof e == "boolean")
      !e && Ae.close && Ae.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function En(e) {
  return e.replace(/_(\w)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function Vs(e) {
  let n = document.createElement("div");
  return n.textContent !== void 0 ? n.textContent = e : n.innerText = e, n.innerHTML;
}
function Us(e) {
  let n = document.createElement("div");
  return n.innerHTML = e, n.innerText || n.textContent;
}
function Gs(e) {
  return new Promise((n) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      n(t.result);
    };
  });
}
function Fn(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function qs(e) {
  return m(e) === "String" && e.indexOf("image") > -1;
}
function Ws(e) {
  const n = Fn(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(n) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(n) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(n) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(n) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(n) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(n) > -1 && (t = "ios-videocam"), t;
}
function Js(e, n) {
  let t = document.createElement("a");
  t.href = n, t.download = e, Nn(t);
}
function Nn(e) {
  let n = document.createEvent("MouseEvents");
  n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
}
function et({
  group: e,
  condition: n,
  pathKey: t,
  childKey: r = "children",
  path: o = []
}) {
  if (e && ge(e)) {
    if (ct(n)) {
      if (ce(e)) {
        let a = e, l = ue(o);
        if (n(a))
          return t && a[t] && l.push(a[t]), l;
        if (a[r] && !Ie(a[r])) {
          t && a[t] && l.push(a[t]);
          let s = et({
            group: a[r],
            condition: n,
            pathKey: t,
            childKey: r,
            path: l
          });
          if (!Ie(s))
            return s;
        }
      } else if (Array.isArray(e))
        for (let a of e) {
          let l = ue(o);
          if (n(a))
            return t && a[t] ? l.push(a[t]) : l.push(String(e.indexOf(a))), l;
          if (a[r] && a[r].length > 0) {
            t && a[t] ? l.push(a[t]) : l.push(String(e.indexOf(a)));
            let s = et({
              group: a[r],
              condition: n,
              pathKey: t,
              childKey: r,
              path: l
            });
            if (!Ie(s))
              return s;
          }
        }
    } else if (Array.isArray(e))
      for (let a of e) {
        let l = ue(o);
        if (a === n)
          return l.push(String(e.indexOf(a))), l;
      }
  }
  return [];
}
function Mn(e, n = 12) {
  if (m(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = n + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const r = t.clientWidth;
    return document.body.removeChild(t), r;
  }
  return 0;
}
function Xs(e) {
  return e === "" ? null : e;
}
function Ys(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
const Zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: Js,
  emptyInput: Xs,
  fakeALinkClick: Nn,
  findPath: et,
  getFileSrc: Gs,
  getFileTypeByName: Fn,
  getFileTypeIconByName: Ws,
  getStringWidth: Mn,
  htmlDecode: Us,
  htmlEncode: Vs,
  isImgByFile: qs,
  stopBubbling: Ys,
  toHump: En
}, Symbol.toStringTag, { value: "Module" }));
function m(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function zn(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function tt(e) {
  let n = m(e);
  if (n === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = m(e[t]);
        r === "String" ? e[t] = e[t].trim() : (r === "Object" || r === "Array") && tt(e[t]);
      }
  } else if (n === "Array")
    for (let t = 0, r = e.length; t < r; t++) {
      let o = m(e[t]);
      o === "String" ? e[t] = e[t].trim() : (o === "Array" || o === "Object") && tt(e[t]);
    }
  return e;
}
function nt(e, n = []) {
  if (m(e) === "Array")
    return e.forEach((t, r) => {
      switch (m(t)) {
        case "Array":
        case "Object":
          nt(t);
          break;
        default:
          e[r] = null;
      }
    }), e;
  if (m(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let r = !0;
        for (let o of n)
          if (o === t) {
            r = !1;
            break;
          }
        if (r)
          switch (m(e[t])) {
            case "Array":
            case "Object":
              nt(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
const Ks = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Qs(e) {
  let n = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && n.append(t, e[t]);
  return n;
}
function ei(e, n, t = !1) {
  if (!e || !n)
    return !1;
  let r, o = "notFoundC", a = function(l, s) {
    if (Array.isArray(l)) {
      if (m(s) === "Function" && s(l))
        return o = l, [];
      for (let i of l) {
        if (o !== "notFoundC")
          break;
        if (m(s) === "Function" && s(i) || i === s)
          return o = i, [l.indexOf(i)];
        if (m(i) === "Array" || m(i) === "Object") {
          let c = a(i, s);
          if (c !== void 0)
            return [l.indexOf(i), ...c];
        }
      }
    } else if (m(l) === "Object") {
      if (m(s) === "Function" && s(l))
        return o = l, [];
      for (let i in l) {
        if (o !== "notFoundC")
          break;
        if (l.hasOwnProperty(i)) {
          if (m(s) === "Function" && s(i) || l[i] === s)
            return o = l[i], [i];
          if (m(l[i]) === "Object" || m(l[i]) === "Array") {
            let c = a(l[i], s);
            if (c !== void 0)
              return [i, ...c];
          }
        }
      }
    }
  };
  return r = a(e, n), t ? r || !1 : o === "notFoundC" ? !1 : o;
}
function ti(e, n) {
  for (let t = 0, r = n.length; t < r; t++)
    if (e === n[t])
      return !0;
  return !1;
}
function ni(e, n = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${n}})(\\d+$)`), r = e && String(e) || "";
  return t.test(r) ? Number(r.replace(t, "$1")) : e;
}
function Ln(e, n = {}, t = "get") {
  let r = document.createElement("form"), o = document.getElementsByTagName("body")[0];
  o.appendChild(r), r.setAttribute("style", "display:none"), r.setAttribute("target", ""), r.setAttribute("method", t);
  let a = e;
  if (window && window.hasOwnProperty("g")) {
    let l = Object.keys(window.g).filter((s) => s.indexOf("URL") > -1).map((s) => s.replace("URL", ""));
    for (let s of l) {
      let i = new RegExp("^/" + s + "(?=/.*$)", "i");
      if (i.test(e) && window.g[s + "URL"]) {
        a = window.g[s + "URL"] + e.replace(i, "");
        break;
      }
    }
  }
  if (r.setAttribute("action", a), ce(n)) {
    for (let s in n)
      if (n.hasOwnProperty(s) && (n[s] || n[s] === 0 || n[s] === !1 || n[s] === "")) {
        let i = document.createElement("input");
        i.setAttribute("type", "hidden"), i.setAttribute("name", s), i.setAttribute("value", n[s]), r.appendChild(i);
      }
    r.submit();
    let l = setTimeout(() => {
      o.removeChild(r), clearTimeout(l), l = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function ri(e, n = {}, t = "get") {
  if (n.hasOwnProperty("columns") && (n.columns === "" || n.columns === null || n.columns === void 0)) {
    De.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Ln(e, n, t);
}
function oi(e, n, t = !1) {
  let r;
  if (e && m(n) === "Array") {
    let o = localStorage.getItem(e);
    if (o) {
      let a = JSON.parse(decodeURI(o));
      r = n.filter((l) => l.key && a.indexOf(l.title) !== -1).map((l) => l.key);
    } else
      r = n.map((a) => a.key);
  } else
    r = [];
  return t || (r = String(r)), r;
}
function Y(e) {
  return e != null && e !== "";
}
function ai(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function Rn(e, n = !1, t = "") {
  return function(r, o) {
    let a;
    if (Array.isArray(e)) {
      let i = [];
      for (let c of e)
        Y(o.row[c]) && i.push(o.row[c]);
      a = i.join(t);
    } else
      typeof e == "function" ? a = e(o) : a = o.row[e];
    let l = Mn(a), s = o.column._width;
    return a && l > s ? r(
      "Tooltip",
      {
        style: {
          width: "100%"
        },
        props: {
          content: a,
          maxWidth: s * 2
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
    ) : r("span", n && !Y(a) ? "--" : a);
  };
}
function li(e) {
  if (ce(e)) {
    for (let n in e)
      if (e.hasOwnProperty(n) && Y(e[n]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let n of e)
      if (Y(n))
        return !1;
    return !0;
  }
  return !Y(e);
}
function si(e) {
  return m(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : m(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function Dn({
  group: e,
  condition: n,
  key: t,
  val: r,
  childKey: o = "children"
}) {
  if (m(e) !== "Array" || m(n) !== "Function" || m(t) !== "String" || m(o) !== "String")
    return !1;
  e.forEach((a) => {
    n(a) && (m(r) === "Function" ? a[t] = r(a[t]) : a[t] = r), m(a[o]) === "Array" && a[o].length > 0 && Dn({
      group: a[o],
      condition: n,
      key: t,
      val: r,
      childKey: o
    });
  });
}
function ii(e) {
  let n = sessionStorage.getItem("btnPermissions");
  return n ? n.split(",").indexOf(e) > -1 : !1;
}
function Hn(e) {
  return m(e) === "Number" && String(e) === "NaN";
}
function ci(e, n = !1, t = !1) {
  if (m(e) !== "Object")
    return e;
  let r = Object.assign(e, {}), o = "";
  for (let a in r)
    if (r.hasOwnProperty(a)) {
      let l = r[a];
      l === void 0 || l === "" || m(l) === "String" && l.trim() === "" || l === null || Hn(l) ? t ? n ? o += a + "=&" : r[a] = "" : delete r[a] : n && (o += a + "=" + l + "&");
    }
  return n ? o.length > 0 ? o.substr(0, o.length - 1) : "" : r;
}
function rt(e) {
  let n = {};
  if (Array.isArray(e)) {
    n = [];
    for (let t of e)
      Array.isArray(t) || ce(t) ? n.push(rt(t)) : Y(t) && n.push(t);
  } else if (ce(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || ce(e[t]) ? n[t] = rt(e[t]) : Y(e[t]) && (n[t] = e[t]));
  return n;
}
function ui(e) {
  const n = window.open();
  if (n) {
    n.document.write(e);
    let t = setTimeout(() => {
      n.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function Vn(e) {
  let n = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && n.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && n.push(t);
  return n;
}
const Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: nt,
  dataFilterOrToUrl: ci,
  decimalDigitsLimit: ni,
  downloadFileByFormSubmit: Ln,
  fileExport: ri,
  findCollection: ei,
  formDataHeadConfig: Ks,
  getColumnsKeys: oi,
  hasPermission: ii,
  htmlPrint: ui,
  isEmptyValue: li,
  isNaN: Hn,
  isNumberValue: ai,
  isValidValue: Y,
  myTypeof: m,
  oneOf: ti,
  removeEmptyValue: rt,
  setValByOption: Dn,
  siblingElems: Vn,
  stringLength: si,
  toFormData: Qs,
  toLine: zn,
  tooltipManual: Rn,
  trimObj: tt
}, Symbol.toStringTag, { value: "Module" })), fi = { class: "groupBoxRP" }, di = ["onClick"], pi = /* @__PURE__ */ L({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const n = e, t = fr();
    function r(a) {
      return a.path === n.pathName ? "active" : "";
    }
    function o(a, l) {
      a.preventDefault();
      let s = a.target;
      if (!l.children && !s.classList.contains("active")) {
        t.push(l.path);
        return;
      }
      let i = s.parentNode, c = Vn(i);
      for (let f of c) {
        f.classList.remove("open");
        const p = f.querySelectorAll(".open");
        for (let g of p)
          g.classList.remove("open");
      }
      i.classList.toggle("open");
    }
    return (a, l) => {
      const s = N("sideMenuGroup", !0);
      return x(), I("ul", fi, [
        (x(!0), I(on, null, an(n.data, (i, c) => (x(), I("li", {
          class: ne({ dropItemRP: i.children }),
          key: i.path + c
        }, [
          T("div", {
            class: ne(["menuTxtR", r(i)]),
            onClick: (f) => o(f, i),
            style: V({ paddingLeft: i.level * 20 + "px" })
          }, D(i.name || "-- no name --"), 15, di),
          i.children ? (x(), st(s, {
            key: 0,
            data: i.children,
            "path-name": n.pathName
          }, null, 8, ["data", "path-name"])) : nn("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), gi = { class: "menuListR" }, hi = /* @__PURE__ */ L({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: n }) {
    const t = e, r = dr(), o = k(!0), a = k(), l = k(), s = O(() => o.value ? A("r.hideMenu") : A("r.showMenu")), i = O(() => o.value ? "ios-arrow-back" : "ios-arrow-forward");
    sr(() => {
      let p = localStorage.getItem("menuDisplayR") || "";
      p !== "" ? o.value = JSON.parse(p) : (o.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), it(
      () => r.path,
      (p) => {
        a.value = p, ln(f);
      },
      { immediate: !0 }
    );
    function c() {
      o.value = !o.value, localStorage.setItem("menuDisplayR", JSON.stringify(o.value)), n("on-change", o.value);
    }
    function f() {
      let p = l.value.querySelectorAll(".dropItemRP");
      for (let g of p)
        g.querySelector(".active") && !g.classList.contains("open") && g.classList.add("open");
    }
    return (p, g) => {
      const $ = N("Icon");
      return x(), I("div", {
        ref_key: "menuRef",
        ref: l,
        class: "menuBoxRP"
      }, [
        U(T("div", gi, [
          M(pi, {
            data: t.data,
            pathName: h(a)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [Z, h(o)]
        ]),
        M($, {
          type: h(i),
          size: 25,
          class: ne([{ showIco: !h(o) }, "menuShowHideIco"]),
          title: h(s),
          onClick: c,
          color: h(o) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), bi = ["title"], mi = /* @__PURE__ */ L({
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
      const l = N("Icon"), s = rn("has");
      return U((x(), I("div", {
        class: ne(["tableBtnsG", { disabled: t.disabled }]),
        onClick: r,
        title: t.title || h(A)("r.button")
      }, [
        M(l, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"])
      ], 10, bi)), [
        [s, t.has]
      ]);
    };
  }
}), yi = { class: "contentX" }, vi = { class: "arrowA" }, wi = /* @__PURE__ */ L({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const n = e, t = k(!0), r = O(() => t ? "background:" + n.bg || "transparent" : "");
    return (o, a) => {
      const l = N("Icon");
      return x(), I("div", {
        style: V(h(r))
      }, [
        U(T("div", yi, [
          X(o.$slots, "default")
        ], 512), [
          [Z, h(t)]
        ]),
        T("div", vi, [
          T("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (s) => t.value = !h(t))
          }, [
            M(l, {
              type: h(t) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), _i = { class: "contentZ" }, Si = /* @__PURE__ */ L({
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
    return (a, l) => (x(), I("div", {
      style: V(h(o))
    }, [
      U(T("div", _i, [
        X(a.$slots, "default")
      ], 512), [
        [Z, h(r)]
      ])
    ], 4));
  }
});
let ot = [], at = [];
const Ti = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    ot.map((n) => {
      window.clearTimeout(n);
    }), at.map((n) => {
      window.clearInterval(n);
    }), ot.length = 0, at.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, te = function(e, n) {
  let t = window.setTimeout(e, n);
  return ot.push(t), t;
}, Gn = function(e, n) {
  let t = window.setInterval(e, n);
  return at.push(t), t;
}, $i = /* @__PURE__ */ L({
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
      set(i) {
        n("update:modelValue", i);
      }
    }), a = O({
      get() {
        return t.open;
      },
      set(i) {
        n("on-toggle", i);
      }
    }), l = O(() => a.value ? "ios-arrow-up" : "ios-arrow-down");
    function s() {
      r || (r = !0, n("on-search", o.value), te(() => {
        r = !1;
      }, 2e3));
    }
    return (i, c) => {
      const f = N("Input"), p = N("icon");
      return x(), I("div", {
        class: "tableSearchV",
        style: V({ position: t.fixed ? "fixed" : "absolute", right: t.right, top: t.top })
      }, [
        X(i.$slots, "default", {}, () => [
          M(f, {
            modelValue: h(o),
            "onUpdate:modelValue": c[0] || (c[0] = (g) => Je(o) ? o.value = g : null),
            style: V({ width: t.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: t.placeholder || h(A)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        U(T("span", {
          class: "sbt",
          onClick: c[1] || (c[1] = (g) => a.value = !h(a)),
          style: V({ color: t.btnColor })
        }, [
          M(p, {
            type: h(l),
            color: t.btnColor
          }, null, 8, ["type", "color"]),
          Oe(D(h(A)("r.adSearch")), 1)
        ], 4), [
          [Z, t.showBtn]
        ])
      ], 4);
    };
  }
}), Oi = { class: "tabSetF" }, Ci = { class: "topCheck" }, xi = /* @__PURE__ */ L({
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
    const t = e, r = k(!0), o = k(!1), a = k(!1), l = k([]), s = O(() => {
      let b = A("r.unknown");
      return t.modelValue.length > l.value.length && (l.value = ue(t.modelValue)), l.value.map((v) => {
        let w = { label: v && v.title || b };
        return v && v.disableShowSetting && (w.disabled = !0), w;
      });
    }), i = O(() => s.value.filter((b) => b.disabled)), c = O({
      get() {
        return t.modelValue.map((b) => b && b.title || A("r.unknown"));
      },
      set(b) {
        let v = l.value.filter((w) => {
          for (let H of b)
            if (H === w.title)
              return !0;
          return !1;
        });
        n("update:modelValue", v);
      }
    }), { locale: f } = pr();
    sn(() => {
      let b = A("r.unknown"), v;
      f.value ? v = localStorage.getItem(t.sKey + "_" + f.value) : v = localStorage.getItem(t.sKey), v ? c.value = JSON.parse(decodeURI(v)) : t.defaultCheck && (c.value = t.modelValue.filter((w) => w.showSettingCheck).map((w) => w && w.title || b));
    });
    function p(b) {
      b.length === s.value.length ? (r.value = !1, o.value = !0) : b.length > i.value.length ? (r.value = !0, o.value = !1) : (r.value = !1, o.value = !1);
    }
    it(() => c.value, p, {
      immediate: !0,
      deep: !0
    });
    function g() {
      a.value || (a.value = !0);
    }
    function $() {
      f.value ? localStorage.setItem(t.sKey + "_" + f.value, encodeURI(JSON.stringify(c.value))) : localStorage.setItem(t.sKey, encodeURI(JSON.stringify(c.value))), a.value = !1;
    }
    function C() {
      r.value ? o.value = !1 : o.value = !o.value, r.value = !1, o.value ? c.value = s.value.map((b) => b.label) : c.value = i.value.map((b) => b.label);
    }
    return (b, v) => {
      const w = N("Icon"), H = N("Checkbox"), Ce = N("CheckboxGroup");
      return x(), I("div", Oi, [
        T("div", {
          class: "tabSetBt",
          onClick: g
        }, [
          M(w, {
            type: "md-settings",
            size: "17"
          }),
          T("span", null, D(h(A)("r.tabSetting")), 1)
        ]),
        U(T("div", {
          class: "tabSetCard",
          style: V({ top: b.top, right: b.right, width: b.width, backgroundColor: b.bg })
        }, [
          T("div", Ci, [
            M(H, {
              indeterminate: h(r),
              modelValue: h(o),
              "onUpdate:modelValue": v[0] || (v[0] = (z) => Je(o) ? o.value = z : null),
              onClick: ir(C, ["prevent"])
            }, {
              default: Be(() => [
                Oe(D(h(A)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            T("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: $
            }, D(h(A)("r.confirm")), 1)
          ]),
          M(Ce, {
            modelValue: h(c),
            "onUpdate:modelValue": v[1] || (v[1] = (z) => Je(c) ? c.value = z : null)
          }, {
            default: Be(() => [
              (x(!0), I(on, null, an(h(s), (z, Ve) => (x(), st(H, {
                class: "setItem",
                label: z && z.label,
                key: "tabSet_" + b.sKey + Ve,
                disabled: z && z.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [Z, h(a)]
        ])
      ]);
    };
  }
});
let se = 0, $e = document.createElement("div");
$e.setAttribute("class", "spinModal");
$e.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append($e);
};
function Zt(e) {
  e ? $e.classList.add("show") : $e.classList.remove("show");
}
function qn(e) {
  let n = se;
  e ? se++ : se > 0 && se--, n !== se && (se === 0 ? Zt(!1) : n === 0 && Zt(!0));
}
const Ai = window.location.origin;
let ie = null;
const Kt = (...e) => pe.apply(ie, e);
let R = Xe.create({
  baseURL: Ai,
  withCredentials: !0
  // 允许携带cookie
});
function ji() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
R.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function Qt() {
  if (R.store)
    if (typeof R.store == "function") {
      const e = R.store();
      e.logout && e.logout();
    } else
      R.store.dispatch("logout");
  else
    ji();
}
R.interceptors.response.use(
  (e) => (ie && e && e.data && (e.data.code === 403 || e.data.code === 409) && ie.messageBox({
    content: Kt("r.http." + e.data.code),
    onOk: Qt
  }), e),
  (e) => (ie && e && e.response && (e.response.status === 403 || e.response.status === 409) && ie.messageBox({
    content: Kt("r.http." + e.response.status),
    onOk: Qt
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function J(e, n, t, r) {
  r && r.spin && qn(!1);
  let o = !0, a = e && e.data;
  if (a) {
    t = t || [];
    for (let l of t)
      a = a[l], o = o && a;
    return o ? a : (n && console.warn(n), !1);
  }
  return n && console.warn(n), !1;
}
function Pi(e, n, t, r, o, a, l) {
  return new Promise((s, i) => {
    switch (e) {
      case "get":
        R.get(n, { params: t }).then((f) => {
          let p = J(f, r, o, a);
          p ? s(p) : i(f);
        }).catch((f) => {
          J({}, r, o, a), i(f);
        });
        break;
      case "delete":
        let c = l ? "params" : "data";
        R.delete(n, { [c]: t }).then((f) => {
          let p = J(f, r, o, a);
          p ? s(p) : i(f);
        }).catch((f) => {
          J({}, r, o, a), i(f);
        });
        break;
      case "post":
        R.post(n, t, a).then((f) => {
          let p = J(f, r, o, a);
          p ? s(p) : i(f);
        }).catch((f) => {
          J({}, r, o, a), i(f);
        });
        break;
      case "put":
        R.put(n, t, a).then((f) => {
          let p = J(f, r, o, a);
          p ? s(p) : i(f);
        }).catch((f) => {
          J({}, r, o, a), i(f);
        });
        break;
    }
  });
}
function je(e, n, t = {}, r, o, a, l) {
  return new Promise((s, i) => {
    if (n) {
      a && a.spin && qn(!0);
      let c = n;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let $ = Object.keys(g).filter((C) => C.indexOf("URL") > -1).map((C) => C.replace("URL", ""));
        for (let C of $) {
          let b = new RegExp("^/" + C + "(?=/.*$)", "i");
          if (b.test(n) && g[C + "URL"]) {
            c = g[C + "URL"] + n.replace(b, "");
            break;
          }
        }
      }
      let f;
      if (a && a.headers && a.headers["Content-Type"] === "multipart/form-data")
        f = t;
      else if (t && !Ie(t))
        if (Array.isArray(t)) {
          f = [];
          for (let g of t)
            (g || g === 0 || g === !1 || g === "" && a && !a.noEmptyStr) && f.push(g);
        } else {
          f = {};
          for (let g in t)
            t.hasOwnProperty(g) && (t[g] || t[g] === 0 || t[g] === !1 || t[g] === "" && a && !a.noEmptyStr) && (f[g] = t[g]);
        }
      let p = e.toLowerCase();
      Pi(p, c, f, r, o, a, l).then((g) => {
        s(g);
      }).catch((g) => {
        i(g);
      });
    } else
      console.error("没有请求地址:url"), i("没有请求地址:url");
  });
}
const He = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, n) {
    R.store = e, ie = n.config.globalProperties;
  },
  post(e, n, t, r, o) {
    return new Promise((a, l) => {
      je("post", e, n, t, r, o).then((s) => {
        a(s);
      }).catch((s) => {
        l(s);
      });
    });
  },
  put(e, n, t, r, o) {
    return new Promise((a, l) => {
      je("put", e, n, t, r, o).then((s) => {
        a(s);
      }).catch((s) => {
        l(s);
      });
    });
  },
  get(e, n, t, r, o) {
    return new Promise((a, l) => {
      je("get", e, n, t, r, o).then((s) => {
        a(s);
      }).catch((s) => {
        l(s);
      });
    });
  },
  delete(e, n, t, r, o, a = !0) {
    return new Promise((l, s) => {
      je("delete", e, n, t, r, o, a).then((i) => {
        l(i);
      }).catch((i) => {
        s(i);
      });
    });
  },
  all: Xe.all,
  spread: Xe.spread,
  config: R
}, Ii = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, Bi = { class: "topBtn" }, ki = { class: "fullHeight relativeBox" }, Ei = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, Fi = { class: "pageContainer" }, Ni = 300, Mi = /* @__PURE__ */ L({
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
    const r = e, { globalProperties: o } = lt().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...gr });
    const l = o.pageSizes || [10, 20, 30, 40], s = k(r.data), i = k(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || r.pageSize
    ), c = k(1), f = k(0);
    let p = [], g, $, C = r.orderKey, b = r.orderDefault;
    const v = O(() => {
      for (let u of r.columns)
        if (u.fixed)
          return !0;
      return !1;
    }), w = O(() => r.selectionFixed || v.value), H = O(() => {
      let u = {
        ...r.searchData,
        current: c.value,
        size: i.value
      };
      return r.sortable === "custom" && (r.orderKeyFormat === "underline" ? u[b] = zn(C) : r.orderKeyFormat === "camelcase" && (u[b] = En(C))), u;
    }), Ce = O(() => {
      let u = r.columns.filter((d) => d.type !== "selection");
      if (r.selection || r.radio) {
        let d;
        r.radio ? d = {
          title: " ",
          width: 65,
          render: (E, j) => E("Radio", {
            props: {
              value: j.row.btChecked
            }
          })
        } : d = {
          type: "selection",
          width: 60
        }, r.selectionFixed && (d.fixed = r.selectionFixed), u.unshift(d);
      }
      return u.forEach((d) => {
        r.sortable === "custom" ? d.key && d.sortable !== !0 && d.sortable !== !1 && (d.sortable = "custom") : d.sortable = !1, d.align || (d.align = "center");
      }), r.tableEmptyTdHandle && u.forEach((d) => {
        d.key && d.render === void 0 && (d.tooltip ? d.render = Rn(d.key, !0) : d.render = (E, j) => {
          let B = j.row[d.key];
          return E("span", B === "" || B === null || B === void 0 ? "--" : B);
        });
      }), u;
    }), z = O({
      get() {
        return s.value.map((u, d) => ({
          btKey: "bt-" + d,
          btChecked: !1,
          ...u
        }));
      },
      set(u) {
        s.value = u;
      }
    }), Ve = O(() => p.map((u) => u.id)), yt = O(() => p.map((u) => u.btKey)), W = k();
    it(() => r.searchData, Xn, { deep: !0 });
    function Xn() {
      c.value = 1, ye();
    }
    function Yn() {
      r.initData && ye();
    }
    function Zn(u) {
      s.value.unshift(ue(u)), te(() => {
        var d;
        (d = W.value) == null || d.clickCurrentRow(0);
      }, 100);
    }
    function Kn(u, d, E) {
      let j = null;
      if (Ns(d) && d ? j = $ : Hs(d) && (j = d), j !== null) {
        let B = s.value[j];
        for (let y in u)
          u.hasOwnProperty(y) && (B[y] = u[y]);
        E && te(() => {
          var y;
          (y = W.value) == null || y.clickCurrentRow(j);
        }, 10);
      }
    }
    function Qn(u) {
      s.value.splice(u, 1), te(() => {
        var d;
        (d = W.value) == null || d.clickCurrentRow(0);
      }, 100);
    }
    function er(u, d) {
      var E;
      u.btChecked && r.radio || (r.selection || r.radio) && r.rowClickSelect && ((E = W.value) == null || E.toggleSelect(d));
    }
    function tr(u, d) {
      g = d.btKey, $ = Number(d.btKey.split("-")[1]), r.radio && (s.value[$].btChecked = !0);
    }
    function nr(u) {
      if (r.radio)
        for (let d of z.value)
          d.btKey !== g && (s.value[Number(d.btKey.split("-")[1])].btChecked = !1);
      p = u;
    }
    function rr() {
      return ue(p);
    }
    function or(u) {
      c.value = u, ye();
    }
    function ar(u) {
      i.value = u, localStorage.setItem("btPageSize", String(u)), c.value === 1 && ye();
    }
    function lr({ key: u, order: d }) {
      b === "normal" ? (C = r.orderKey, b = r.orderDefault) : (C = u, b = d), c.value = 1, me();
    }
    function xe() {
      var u;
      if (r.radio) {
        if (yt.value.length > 0 && z.value.length > 0) {
          let d = yt.value[0].split("-")[1];
          z.value[d].btChecked = !1;
        }
      } else
        (u = W.value) == null || u.selectAll(!1);
      p.length > 0 && (p = [], t("on-selection-change", [])), g = null, $ = null;
    }
    function Ue() {
      s.value = [], xe(), c.value = 1, f.value = 0;
    }
    function me(u, d, E) {
      return new Promise((j) => {
        u && (b = u), d && (C = d), r.url ? He.get(r.url, H.value, "", [], { spin: r.getDataLoading }).then((B) => {
          var vt, wt, _t, St, Tt, $t, Ot, Ct;
          let y;
          E || xe(), typeof r.dataHandler == "function" ? y = r.dataHandler(B) : y = B, y.data ? ((vt = y.data) != null && vt.records || ((wt = y.data) == null ? void 0 : wt.records) === null ? s.value = ((_t = y.data) == null ? void 0 : _t.records) || [] : y.data.page ? ((St = y.data.page) != null && St.records || ((Tt = y.data.page) == null ? void 0 : Tt.records) === null) && (s.value = y.data.page.records || []) : y.data.data ? (($t = y.data.data) != null && $t.records || ((Ot = y.data.data) == null ? void 0 : Ot.records) === null) && (s.value = ((Ct = y.data.data) == null ? void 0 : Ct.records) || []) : s.value = y.data, f.value = y.data.page && y.data.page.total || y.data.data && y.data.data.total || y.data.total || y.total || 0, f.value === 0 && c.value > 1 && s.value && s.value.length === 0 ? c.value = 1 : c.value > 1 && f.value <= (c.value - 1) * i.value && (c.value--, ln(function() {
            me(u, d);
          })), t("on-data-change", y), j(y)) : (console.warn("请求返回数据有误，无法使用"), Ue(), t("on-data-change", y));
        }).catch((B) => {
          console.warn(B), xe(), Ue(), t("on-data-change", B);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function ye(u, d, E) {
      r.radio && (u || r.rowClickNum !== -1) ? me(d, E, u).then(() => {
        s.value.length > 0 && te(() => {
          var j, B;
          u ? (j = W.value) == null || j.clickCurrentRow($ || 0) : (B = W.value) == null || B.clickCurrentRow(r.rowClickNum);
        }, 10);
      }) : me();
    }
    return sn(Yn), n({
      selectedIds: Ve,
      addRow: Zn,
      setRowData: Kn,
      deleteRow: Qn,
      getSelected: rr,
      clearSelect: xe,
      clearTableData: Ue,
      getTableData: me,
      getDataAndClickRow: ye
    }), (u, d) => {
      const E = N("Table"), j = N("Page");
      return x(), I("div", Ii, [
        U(T("div", Bi, [
          X(u.$slots, "tableSetting"),
          X(u.$slots, "topMsg"),
          X(u.$slots, "topBtnGroup")
        ], 512), [
          [Z, u.showTopRow]
        ]),
        T("div", {
          class: ne(["tableContainer fullHeight", { noTop: !u.showTopRow, noPage: u.noPage }])
        }, [
          T("div", ki, [
            T("div", Ei, [
              M(E, cr({
                ref_key: "tableRef",
                ref: W
              }, u.$attrs, {
                height: h(w) && Ni || null,
                class: { noBorderTable: u.noBorderTable, fullHeightTable: !h(w), lightHeadO: u.lightHead },
                columns: h(Ce),
                data: h(z),
                "highlight-row": u.radio || u.highlightRow,
                onOnSelect: tr,
                onOnSelectionChange: nr,
                onOnSortChange: lr,
                onOnRowClick: er
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        U(T("div", Fi, [
          M(j, {
            "page-size-opts": h(l),
            total: h(f),
            current: h(c),
            "page-size": h(i),
            "show-sizer": "",
            "show-total": "",
            showElevator: !u.noElevator,
            size: u.pageComponentSize,
            onOnChange: or,
            onOnPageSizeChange: ar
          }, null, 8, ["page-size-opts", "total", "current", "page-size", "showElevator", "size"])
        ], 512), [
          [Z, !u.noPage]
        ])
      ], 512);
    };
  }
}), en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtTablePage: Mi,
  FullPop: $r,
  HeaderBt: un,
  Hello: Cr,
  IconTxtBtn: xr,
  Page404: Br,
  ShowHidePanel: wi,
  ShowHidePanelB: Si,
  SideMenu: hi,
  TableIconBtn: mi,
  TableSearch: $i,
  TableSetting: xi
}, Symbol.toStringTag, { value: "Module" }));
let we = !1;
function Wn({
  height: e,
  width: n = 416,
  title: t,
  content: r,
  onOk: o,
  onCancel: a,
  okText: l,
  cancelText: s,
  noWarnIcon: i,
  footerAlign: c,
  cancelBt: f = !0
}) {
  const p = (...b) => pe.apply(this, b);
  let $ = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", C = m(r) === "String";
  le.warning({
    width: n,
    footerHide: !0,
    render: () => F(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: $
        }
      },
      [
        F(
          "div",
          {
            class: "containerN"
          },
          [
            F(
              "div",
              {
                class: "titleN"
              },
              [
                F("span", t || p("r.info.title")),
                F(
                  Ge,
                  {
                    class: "fr closeN",
                    type: "text",
                    onclick() {
                      we || le.remove();
                    }
                  },
                  [
                    F("i", {
                      class: "ivu-icon ivu-icon-ios-close",
                      style: {
                        fontSize: "30px"
                      }
                    })
                  ]
                )
              ]
            ),
            F(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: C ? "center" : "left"
                }
              },
              [
                F("i", {
                  class: C && !i ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                F("div", { class: "msgBoxConO" }, r || p("r.info.text"))
              ]
            ),
            F(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: c || "center"
                }
              },
              [
                F(
                  Ge,
                  {
                    class: "okBtN",
                    onclick(b) {
                      var v;
                      if (o && typeof o == "function") {
                        const w = o();
                        if (w && m(w) === "Promise") {
                          we = !0;
                          const H = b && (b.currentTarget || b.target);
                          H && (H.classList.add("ivu-btn-loading"), H.nextSibling.setAttribute("disabled", "disabled"), ((v = H.parentElement) == null ? void 0 : v.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(w).then(() => {
                            we = !1, le.remove();
                          }).catch(() => {
                            we = !1, le.remove();
                          });
                        } else
                          le.remove();
                      }
                    }
                  },
                  [
                    F("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    F("span", l || p("r.confirm"))
                  ]
                ),
                F(
                  Ge,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onclick() {
                      we || (le.remove(), m(a) === "Function" && a && a());
                    }
                  },
                  s || p("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function Jn(e, n, t, r) {
  const o = (...a) => pe.apply(this, a);
  De.call(this, {
    title: e || o("r.info.title"),
    text: n || o("r.info.text"),
    icon: t || "warning",
    onOk: r,
    buttons: [o("r.cancel")]
  });
}
const tn = {
  $fetch: He,
  $swal: De,
  $swalConfirm: Jn,
  messageBox: Wn,
  setInterval: Gn,
  setTimeout: te,
  ...Un
}, zi = function(e, n = {}) {
  He.init(n.useStore || n.store, e), n.locale && Ee.use(n.locale), n.i18n && Ee.i18n(n.i18n), n.router && Ti(n.router), n.notRegistryGlobal || (Object.keys(en).forEach((t) => {
    e.component(t) || e.component(t, en[t]);
  }), Object.keys(tn).forEach((t) => {
    e.config.globalProperties[t] = tn[t];
  })), e.directive("has") || e.directive("has", (t, r) => {
    r.value && !e.config.globalProperties.hasPermission(r.value) && (t.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (t, r) => {
    let o;
    r.arg ? o = t.querySelector("." + r.arg) : o = t.querySelector(".ivu-select-dropdown") || t, o.addEventListener("scroll", function() {
      o.scrollTop > 0 && o.scrollHeight - o.scrollTop <= o.clientHeight && r.value();
    });
  });
}, Li = Ee.use, Ri = Ee.i18n, Ji = {
  locale: Li,
  i18n: Ri,
  install: zi,
  ...Un,
  ...Zs,
  $fetch: He,
  $swal: De,
  $swalConfirm: Jn,
  messageBox: Wn,
  setInterval: Gn,
  setTimeout: te
};
export {
  He as $fetch,
  De as $swal,
  Jn as $swalConfirm,
  Mi as BtTablePage,
  $r as FullPop,
  un as HeaderBt,
  Cr as Hello,
  xr as IconTxtBtn,
  Br as Page404,
  wi as ShowHidePanel,
  Si as ShowHidePanelB,
  hi as SideMenu,
  mi as TableIconBtn,
  $i as TableSearch,
  xi as TableSetting,
  nt as clearObj,
  ci as dataFilterOrToUrl,
  ni as decimalDigitsLimit,
  Ji as default,
  Ln as downloadFileByFormSubmit,
  Js as downloadFileReaderFile,
  Xs as emptyInput,
  Nn as fakeALinkClick,
  ri as fileExport,
  ei as findCollection,
  et as findPath,
  Ks as formDataHeadConfig,
  oi as getColumnsKeys,
  Gs as getFileSrc,
  Fn as getFileTypeByName,
  Ws as getFileTypeIconByName,
  Mn as getStringWidth,
  ii as hasPermission,
  Us as htmlDecode,
  Vs as htmlEncode,
  ui as htmlPrint,
  li as isEmptyValue,
  qs as isImgByFile,
  Hn as isNaN,
  ai as isNumberValue,
  Y as isValidValue,
  Wn as messageBox,
  m as myTypeof,
  ti as oneOf,
  rt as removeEmptyValue,
  Gn as setInterval,
  te as setTimeout,
  Dn as setValByOption,
  Vn as siblingElems,
  Ys as stopBubbling,
  si as stringLength,
  Qs as toFormData,
  En as toHump,
  zn as toLine,
  Rn as tooltipManual,
  tt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
