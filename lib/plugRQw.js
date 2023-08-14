import { getCurrentInstance as jt, defineComponent as C, resolveComponent as M, openBlock as y, createElementBlock as v, normalizeClass as X, normalizeStyle as I, createBlock as Pt, createCommentVNode as Ct, renderSlot as ue, ref as W, computed as j, withDirectives as D, unref as h, createElementVNode as T, toDisplayString as B, createVNode as F, withCtx as It, createTextVNode as _e, vShow as fe, resolveDirective as Et, Fragment as br, renderList as mr, onBeforeMount as yr, watch as _r, nextTick as wr, isRef as vr, h as _ } from "vue";
import Tr from "deepmerge";
import de from "sweetalert";
import { useRouter as $r, useRoute as Sr } from "vue-router";
import Ie from "axios";
import { Modal as V, Button as Ae } from "view-ui-plus";
const Bt = {
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
}, Or = /(%|){([0-9a-zA-Z_]+)}/g;
function xr() {
  function e(r, n) {
    return Object.prototype.hasOwnProperty.call(r, n);
  }
  function t(r, ...n) {
    let s;
    return n.length === 1 && typeof n[0] == "object" && (s = n[0]), (!s || !s.hasOwnProperty) && (s = {}), r === void 0 ? "" : r.replace(Or, (o, a, i, l) => {
      let c;
      return r[l - 1] === "{" && r[l + o.length] === "}" ? i : (c = e(s, i) ? s[i] : null, c ?? "");
    });
  }
  return t;
}
const Ar = xr();
let me = Bt;
const jr = {
  zh: Bt
};
let Ke, et = {}, m, Pr = function(e, t) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, t);
  if (m && m.global)
    return m.global.t(e, t);
  if (m && m.locale) {
    if (!et[m.locale] || Ke != m.locale) {
      et[m.locale] = !0;
      let r = m.getLocaleMessage(m.locale) || {}, n = Tr(jr[m.locale], r, { clone: !0 });
      me = n, m.setLocaleMessage(m.locale, n), Ke = m.locale;
    }
    return m.hlang(e, t);
  }
};
const Q = function(e, t) {
  let r = Pr.apply(this, [e, t]);
  if (r != null)
    return r;
  const n = e.split(".");
  let s = me;
  for (let o = 0, a = n.length; o < a; o++) {
    const i = n[o];
    if (r = s[i], o === a - 1)
      return Ar(r, t);
    if (!r)
      return "";
    s = r;
  }
  return "";
}, Cr = function(e) {
  me = e || me;
}, Ir = function(e) {
  m = e;
}, ye = {
  use: Cr,
  t: Q,
  i18n: Ir
};
function P(e, t) {
  var n;
  const r = (n = jt()) == null ? void 0 : n.appContext.config.globalProperties;
  return Q.apply(r, [e, t]);
}
const Mt = /* @__PURE__ */ C({
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
  setup(e, { emit: t }) {
    const r = e;
    function n() {
      r.disabled || t("click");
    }
    return (s, o) => {
      const a = M("Icon");
      return y(), v("div", {
        class: X({ headerBtCTM: !0, withIconCTM: s.icon || s.withIcon, disabled: s.disabled }),
        style: I({ color: s.color, borderLeftColor: s.borderColor }),
        onClick: n
      }, [
        s.icon ? (y(), Pt(a, {
          key: 0,
          size: s.iconSize,
          type: s.icon
        }, null, 8, ["size", "type"])) : Ct("", !0),
        ue(s.$slots, "default")
      ], 6);
    };
  }
}), Er = { class: "headerTxtAM" }, Br = { class: "contentAM" }, Mr = /* @__PURE__ */ C({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(e, { expose: t, emit: r }) {
    const n = e;
    let s = W(!1);
    const o = j(() => typeof n.headerFontSize == "number" ? n.headerFontSize + "px" : n.headerFontSize), a = j(() => ({ zIndex: n.zIndex }));
    function i() {
      s.value = !0, r("on-open");
    }
    function l(c) {
      s.value = !1, r("on-close", c === !0);
    }
    return t({
      open: i,
      close: l
    }), (c, u) => D((y(), v("div", {
      class: "fullScreenPopBoxAM",
      style: I(h(a))
    }, [
      T("div", {
        class: "headerAM",
        style: I({ color: c.headerColor, backgroundColor: c.headerBg, fontSize: h(o) })
      }, [
        T("span", Er, B(c.title || h(P)("r.title")), 1),
        F(Mt, {
          icon: "md-return-left",
          onClick: l
        }, {
          default: It(() => [
            _e(B(h(P)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      T("div", Br, [
        ue(c.$slots, "default")
      ])
    ], 4)), [
      [fe, h(s)]
    ]);
  }
}), Fr = { class: "msg" }, Nr = /* @__PURE__ */ C({
  __name: "Hello",
  setup(e) {
    let t = W("Greetings from Ricky.");
    return (r, n) => (y(), v("span", Fr, B(h(t)), 1));
  }
}), Lr = /* @__PURE__ */ C({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: 17 },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e, n = j(() => Math.floor(r.size / 17 * 12) + "px");
    function s(o) {
      r.disabled || t("click", o);
    }
    return (o, a) => {
      const i = M("Icon"), l = Et("has");
      return D((y(), v("div", {
        class: X(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: s,
        style: I({ "font-size": h(n) })
      }, [
        F(i, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        _e(" " + B(o.name || h(P)("r.button")), 1)
      ], 6)), [
        [l, o.has]
      ]);
    };
  }
}), kr = { class: "c404K" }, zr = /* @__PURE__ */ T("div", { class: "t404" }, "404", -1), Rr = { class: "ct404" }, Dr = { class: "p404" }, Hr = /* @__PURE__ */ C({
  __name: "Page404",
  setup(e) {
    const r = jt().appContext.config.globalProperties.$router;
    function n() {
      r.go(-1);
    }
    return (s, o) => {
      const a = M("Button");
      return y(), v("div", kr, [
        zr,
        T("div", Rr, "UH OH! " + B(h(P)("r.pageNotFound")), 1),
        T("div", Dr, B(h(P)("r.notFoundMsg")), 1),
        F(a, {
          class: "bt404",
          onClick: n
        }, {
          default: It(() => [
            _e(B(h(P)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var Ur = typeof global == "object" && global && global.Object === Object && global;
const Ft = Ur;
var Vr = typeof self == "object" && self && self.Object === Object && self, Gr = Ft || Vr || Function("return this")();
const E = Gr;
var qr = E.Symbol;
const Y = qr;
var Nt = Object.prototype, Wr = Nt.hasOwnProperty, Jr = Nt.toString, oe = Y ? Y.toStringTag : void 0;
function Xr(e) {
  var t = Wr.call(e, oe), r = e[oe];
  try {
    e[oe] = void 0;
    var n = !0;
  } catch {
  }
  var s = Jr.call(e);
  return n && (t ? e[oe] = r : delete e[oe]), s;
}
var Yr = Object.prototype, Zr = Yr.toString;
function Qr(e) {
  return Zr.call(e);
}
var Kr = "[object Null]", en = "[object Undefined]", tt = Y ? Y.toStringTag : void 0;
function K(e) {
  return e == null ? e === void 0 ? en : Kr : tt && tt in Object(e) ? Xr(e) : Qr(e);
}
function ee(e) {
  return e != null && typeof e == "object";
}
var tn = Array.isArray;
const we = tn;
function te(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var rn = "[object AsyncFunction]", nn = "[object Function]", on = "[object GeneratorFunction]", sn = "[object Proxy]";
function He(e) {
  if (!te(e))
    return !1;
  var t = K(e);
  return t == nn || t == on || t == rn || t == sn;
}
var an = E["__core-js_shared__"];
const je = an;
var rt = function() {
  var e = /[^.]+$/.exec(je && je.keys && je.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ln(e) {
  return !!rt && rt in e;
}
var cn = Function.prototype, un = cn.toString;
function H(e) {
  if (e != null) {
    try {
      return un.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var fn = /[\\^$.*+?()[\]{}|]/g, pn = /^\[object .+?Constructor\]$/, dn = Function.prototype, hn = Object.prototype, gn = dn.toString, bn = hn.hasOwnProperty, mn = RegExp(
  "^" + gn.call(bn).replace(fn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yn(e) {
  if (!te(e) || ln(e))
    return !1;
  var t = He(e) ? mn : pn;
  return t.test(H(e));
}
function _n(e, t) {
  return e == null ? void 0 : e[t];
}
function U(e, t) {
  var r = _n(e, t);
  return yn(r) ? r : void 0;
}
var wn = U(E, "WeakMap");
const Ee = wn;
var nt = Object.create, vn = function() {
  function e() {
  }
  return function(t) {
    if (!te(t))
      return {};
    if (nt)
      return nt(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
const Tn = vn;
function $n(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Sn = function() {
  try {
    var e = U(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ot = Sn;
function On(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var xn = 9007199254740991, An = /^(?:0|[1-9]\d*)$/;
function jn(e, t) {
  var r = typeof e;
  return t = t ?? xn, !!t && (r == "number" || r != "symbol" && An.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Lt(e, t, r) {
  t == "__proto__" && ot ? ot(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function kt(e, t) {
  return e === t || e !== e && t !== t;
}
var Pn = Object.prototype, Cn = Pn.hasOwnProperty;
function zt(e, t, r) {
  var n = e[t];
  (!(Cn.call(e, t) && kt(n, r)) || r === void 0 && !(t in e)) && Lt(e, t, r);
}
function ve(e, t, r, n) {
  var s = !r;
  r || (r = {});
  for (var o = -1, a = t.length; ++o < a; ) {
    var i = t[o], l = n ? n(r[i], e[i], i, r, e) : void 0;
    l === void 0 && (l = e[i]), s ? Lt(r, i, l) : zt(r, i, l);
  }
  return r;
}
var In = 9007199254740991;
function Rt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= In;
}
function Ue(e) {
  return e != null && Rt(e.length) && !He(e);
}
var En = Object.prototype;
function Te(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || En;
  return e === r;
}
function Bn(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Mn = "[object Arguments]";
function st(e) {
  return ee(e) && K(e) == Mn;
}
var Dt = Object.prototype, Fn = Dt.hasOwnProperty, Nn = Dt.propertyIsEnumerable, Ln = st(function() {
  return arguments;
}()) ? st : function(e) {
  return ee(e) && Fn.call(e, "callee") && !Nn.call(e, "callee");
};
const Ht = Ln;
function kn() {
  return !1;
}
var Ut = typeof exports == "object" && exports && !exports.nodeType && exports, at = Ut && typeof module == "object" && module && !module.nodeType && module, zn = at && at.exports === Ut, it = zn ? E.Buffer : void 0, Rn = it ? it.isBuffer : void 0, Dn = Rn || kn;
const Ve = Dn;
var Hn = "[object Arguments]", Un = "[object Array]", Vn = "[object Boolean]", Gn = "[object Date]", qn = "[object Error]", Wn = "[object Function]", Jn = "[object Map]", Xn = "[object Number]", Yn = "[object Object]", Zn = "[object RegExp]", Qn = "[object Set]", Kn = "[object String]", eo = "[object WeakMap]", to = "[object ArrayBuffer]", ro = "[object DataView]", no = "[object Float32Array]", oo = "[object Float64Array]", so = "[object Int8Array]", ao = "[object Int16Array]", io = "[object Int32Array]", lo = "[object Uint8Array]", co = "[object Uint8ClampedArray]", uo = "[object Uint16Array]", fo = "[object Uint32Array]", b = {};
b[no] = b[oo] = b[so] = b[ao] = b[io] = b[lo] = b[co] = b[uo] = b[fo] = !0;
b[Hn] = b[Un] = b[to] = b[Vn] = b[ro] = b[Gn] = b[qn] = b[Wn] = b[Jn] = b[Xn] = b[Yn] = b[Zn] = b[Qn] = b[Kn] = b[eo] = !1;
function po(e) {
  return ee(e) && Rt(e.length) && !!b[K(e)];
}
function Ge(e) {
  return function(t) {
    return e(t);
  };
}
var Vt = typeof exports == "object" && exports && !exports.nodeType && exports, ae = Vt && typeof module == "object" && module && !module.nodeType && module, ho = ae && ae.exports === Vt, Pe = ho && Ft.process, go = function() {
  try {
    var e = ae && ae.require && ae.require("util").types;
    return e || Pe && Pe.binding && Pe.binding("util");
  } catch {
  }
}();
const Z = go;
var lt = Z && Z.isTypedArray, bo = lt ? Ge(lt) : po;
const Gt = bo;
var mo = Object.prototype, yo = mo.hasOwnProperty;
function qt(e, t) {
  var r = we(e), n = !r && Ht(e), s = !r && !n && Ve(e), o = !r && !n && !s && Gt(e), a = r || n || s || o, i = a ? Bn(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || yo.call(e, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    jn(c, l))) && i.push(c);
  return i;
}
function Wt(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var _o = Wt(Object.keys, Object);
const wo = _o;
var vo = Object.prototype, To = vo.hasOwnProperty;
function Jt(e) {
  if (!Te(e))
    return wo(e);
  var t = [];
  for (var r in Object(e))
    To.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function qe(e) {
  return Ue(e) ? qt(e) : Jt(e);
}
function $o(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var So = Object.prototype, Oo = So.hasOwnProperty;
function xo(e) {
  if (!te(e))
    return $o(e);
  var t = Te(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Oo.call(e, n)) || r.push(n);
  return r;
}
function We(e) {
  return Ue(e) ? qt(e, !0) : xo(e);
}
var Ao = U(Object, "create");
const ie = Ao;
function jo() {
  this.__data__ = ie ? ie(null) : {}, this.size = 0;
}
function Po(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Co = "__lodash_hash_undefined__", Io = Object.prototype, Eo = Io.hasOwnProperty;
function Bo(e) {
  var t = this.__data__;
  if (ie) {
    var r = t[e];
    return r === Co ? void 0 : r;
  }
  return Eo.call(t, e) ? t[e] : void 0;
}
var Mo = Object.prototype, Fo = Mo.hasOwnProperty;
function No(e) {
  var t = this.__data__;
  return ie ? t[e] !== void 0 : Fo.call(t, e);
}
var Lo = "__lodash_hash_undefined__";
function ko(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ie && t === void 0 ? Lo : t, this;
}
function R(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
R.prototype.clear = jo;
R.prototype.delete = Po;
R.prototype.get = Bo;
R.prototype.has = No;
R.prototype.set = ko;
function zo() {
  this.__data__ = [], this.size = 0;
}
function $e(e, t) {
  for (var r = e.length; r--; )
    if (kt(e[r][0], t))
      return r;
  return -1;
}
var Ro = Array.prototype, Do = Ro.splice;
function Ho(e) {
  var t = this.__data__, r = $e(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Do.call(t, r, 1), --this.size, !0;
}
function Uo(e) {
  var t = this.__data__, r = $e(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Vo(e) {
  return $e(this.__data__, e) > -1;
}
function Go(e, t) {
  var r = this.__data__, n = $e(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function N(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
N.prototype.clear = zo;
N.prototype.delete = Ho;
N.prototype.get = Uo;
N.prototype.has = Vo;
N.prototype.set = Go;
var qo = U(E, "Map");
const le = qo;
function Wo() {
  this.size = 0, this.__data__ = {
    hash: new R(),
    map: new (le || N)(),
    string: new R()
  };
}
function Jo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Se(e, t) {
  var r = e.__data__;
  return Jo(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Xo(e) {
  var t = Se(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Yo(e) {
  return Se(this, e).get(e);
}
function Zo(e) {
  return Se(this, e).has(e);
}
function Qo(e, t) {
  var r = Se(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function re(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
re.prototype.clear = Wo;
re.prototype.delete = Xo;
re.prototype.get = Yo;
re.prototype.has = Zo;
re.prototype.set = Qo;
function Xt(e, t) {
  for (var r = -1, n = t.length, s = e.length; ++r < n; )
    e[s + r] = t[r];
  return e;
}
var Ko = Wt(Object.getPrototypeOf, Object);
const Je = Ko;
var es = "[object Object]", ts = Function.prototype, rs = Object.prototype, Yt = ts.toString, ns = rs.hasOwnProperty, os = Yt.call(Object);
function J(e) {
  if (!ee(e) || K(e) != es)
    return !1;
  var t = Je(e);
  if (t === null)
    return !0;
  var r = ns.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Yt.call(r) == os;
}
function ss() {
  this.__data__ = new N(), this.size = 0;
}
function as(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function is(e) {
  return this.__data__.get(e);
}
function ls(e) {
  return this.__data__.has(e);
}
var cs = 200;
function us(e, t) {
  var r = this.__data__;
  if (r instanceof N) {
    var n = r.__data__;
    if (!le || n.length < cs - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new re(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function ne(e) {
  var t = this.__data__ = new N(e);
  this.size = t.size;
}
ne.prototype.clear = ss;
ne.prototype.delete = as;
ne.prototype.get = is;
ne.prototype.has = ls;
ne.prototype.set = us;
function fs(e, t) {
  return e && ve(t, qe(t), e);
}
function ps(e, t) {
  return e && ve(t, We(t), e);
}
var Zt = typeof exports == "object" && exports && !exports.nodeType && exports, ct = Zt && typeof module == "object" && module && !module.nodeType && module, ds = ct && ct.exports === Zt, ut = ds ? E.Buffer : void 0, ft = ut ? ut.allocUnsafe : void 0;
function hs(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = ft ? ft(r) : new e.constructor(r);
  return e.copy(n), n;
}
function gs(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, s = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[s++] = a);
  }
  return o;
}
function Qt() {
  return [];
}
var bs = Object.prototype, ms = bs.propertyIsEnumerable, pt = Object.getOwnPropertySymbols, ys = pt ? function(e) {
  return e == null ? [] : (e = Object(e), gs(pt(e), function(t) {
    return ms.call(e, t);
  }));
} : Qt;
const Xe = ys;
function _s(e, t) {
  return ve(e, Xe(e), t);
}
var ws = Object.getOwnPropertySymbols, vs = ws ? function(e) {
  for (var t = []; e; )
    Xt(t, Xe(e)), e = Je(e);
  return t;
} : Qt;
const Kt = vs;
function Ts(e, t) {
  return ve(e, Kt(e), t);
}
function er(e, t, r) {
  var n = t(e);
  return we(e) ? n : Xt(n, r(e));
}
function $s(e) {
  return er(e, qe, Xe);
}
function Ss(e) {
  return er(e, We, Kt);
}
var Os = U(E, "DataView");
const Be = Os;
var xs = U(E, "Promise");
const Me = xs;
var As = U(E, "Set");
const Fe = As;
var dt = "[object Map]", js = "[object Object]", ht = "[object Promise]", gt = "[object Set]", bt = "[object WeakMap]", mt = "[object DataView]", Ps = H(Be), Cs = H(le), Is = H(Me), Es = H(Fe), Bs = H(Ee), z = K;
(Be && z(new Be(new ArrayBuffer(1))) != mt || le && z(new le()) != dt || Me && z(Me.resolve()) != ht || Fe && z(new Fe()) != gt || Ee && z(new Ee()) != bt) && (z = function(e) {
  var t = K(e), r = t == js ? e.constructor : void 0, n = r ? H(r) : "";
  if (n)
    switch (n) {
      case Ps:
        return mt;
      case Cs:
        return dt;
      case Is:
        return ht;
      case Es:
        return gt;
      case Bs:
        return bt;
    }
  return t;
});
const Oe = z;
var Ms = Object.prototype, Fs = Ms.hasOwnProperty;
function Ns(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Fs.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Ls = E.Uint8Array;
const yt = Ls;
function Ye(e) {
  var t = new e.constructor(e.byteLength);
  return new yt(t).set(new yt(e)), t;
}
function ks(e, t) {
  var r = t ? Ye(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var zs = /\w*$/;
function Rs(e) {
  var t = new e.constructor(e.source, zs.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var _t = Y ? Y.prototype : void 0, wt = _t ? _t.valueOf : void 0;
function Ds(e) {
  return wt ? Object(wt.call(e)) : {};
}
function Hs(e, t) {
  var r = t ? Ye(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Us = "[object Boolean]", Vs = "[object Date]", Gs = "[object Map]", qs = "[object Number]", Ws = "[object RegExp]", Js = "[object Set]", Xs = "[object String]", Ys = "[object Symbol]", Zs = "[object ArrayBuffer]", Qs = "[object DataView]", Ks = "[object Float32Array]", ea = "[object Float64Array]", ta = "[object Int8Array]", ra = "[object Int16Array]", na = "[object Int32Array]", oa = "[object Uint8Array]", sa = "[object Uint8ClampedArray]", aa = "[object Uint16Array]", ia = "[object Uint32Array]";
function la(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Zs:
      return Ye(e);
    case Us:
    case Vs:
      return new n(+e);
    case Qs:
      return ks(e, r);
    case Ks:
    case ea:
    case ta:
    case ra:
    case na:
    case oa:
    case sa:
    case aa:
    case ia:
      return Hs(e, r);
    case Gs:
      return new n();
    case qs:
    case Xs:
      return new n(e);
    case Ws:
      return Rs(e);
    case Js:
      return new n();
    case Ys:
      return Ds(e);
  }
}
function ca(e) {
  return typeof e.constructor == "function" && !Te(e) ? Tn(Je(e)) : {};
}
var ua = "[object Map]";
function fa(e) {
  return ee(e) && Oe(e) == ua;
}
var vt = Z && Z.isMap, pa = vt ? Ge(vt) : fa;
const da = pa;
var ha = "[object Set]";
function ga(e) {
  return ee(e) && Oe(e) == ha;
}
var Tt = Z && Z.isSet, ba = Tt ? Ge(Tt) : ga;
const ma = ba;
var ya = 1, _a = 2, wa = 4, tr = "[object Arguments]", va = "[object Array]", Ta = "[object Boolean]", $a = "[object Date]", Sa = "[object Error]", rr = "[object Function]", Oa = "[object GeneratorFunction]", xa = "[object Map]", Aa = "[object Number]", nr = "[object Object]", ja = "[object RegExp]", Pa = "[object Set]", Ca = "[object String]", Ia = "[object Symbol]", Ea = "[object WeakMap]", Ba = "[object ArrayBuffer]", Ma = "[object DataView]", Fa = "[object Float32Array]", Na = "[object Float64Array]", La = "[object Int8Array]", ka = "[object Int16Array]", za = "[object Int32Array]", Ra = "[object Uint8Array]", Da = "[object Uint8ClampedArray]", Ha = "[object Uint16Array]", Ua = "[object Uint32Array]", g = {};
g[tr] = g[va] = g[Ba] = g[Ma] = g[Ta] = g[$a] = g[Fa] = g[Na] = g[La] = g[ka] = g[za] = g[xa] = g[Aa] = g[nr] = g[ja] = g[Pa] = g[Ca] = g[Ia] = g[Ra] = g[Da] = g[Ha] = g[Ua] = !0;
g[Sa] = g[rr] = g[Ea] = !1;
function ge(e, t, r, n, s, o) {
  var a, i = t & ya, l = t & _a, c = t & wa;
  if (r && (a = s ? r(e, n, s, o) : r(e)), a !== void 0)
    return a;
  if (!te(e))
    return e;
  var u = we(e);
  if (u) {
    if (a = Ns(e), !i)
      return $n(e, a);
  } else {
    var f = Oe(e), p = f == rr || f == Oa;
    if (Ve(e))
      return hs(e, i);
    if (f == nr || f == tr || p && !s) {
      if (a = l || p ? {} : ca(e), !i)
        return l ? Ts(e, ps(a, e)) : _s(e, fs(a, e));
    } else {
      if (!g[f])
        return s ? e : {};
      a = la(e, f, i);
    }
  }
  o || (o = new ne());
  var w = o.get(e);
  if (w)
    return w;
  o.set(e, a), ma(e) ? e.forEach(function(x) {
    a.add(ge(x, t, r, x, e, o));
  }) : da(e) && e.forEach(function(x, A) {
    a.set(A, ge(x, t, r, A, e, o));
  });
  var $ = c ? l ? Ss : $s : l ? We : qe, O = u ? void 0 : $(e);
  return On(O || e, function(x, A) {
    O && (A = x, x = e[A]), zt(a, A, ge(x, t, r, A, e, o));
  }), a;
}
var Va = 1, Ga = 4;
function Ce(e) {
  return ge(e, Va | Ga);
}
var qa = "[object Map]", Wa = "[object Set]", Ja = Object.prototype, Xa = Ja.hasOwnProperty;
function be(e) {
  if (e == null)
    return !0;
  if (Ue(e) && (we(e) || typeof e == "string" || typeof e.splice == "function" || Ve(e) || Gt(e) || Ht(e)))
    return !e.length;
  var t = Oe(e);
  if (t == qa || t == Wa)
    return !e.size;
  if (Te(e))
    return !Jt(e).length;
  for (var r in e)
    if (Xa.call(e, r))
      return !1;
  return !0;
}
function xe(e, t, r) {
  const n = (...s) => Q.apply(this, s);
  return new Promise((s, o) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let a = n("r.confirm"), i = n("r.cancel"), l = !1, c = "swalConfirmBt", u = "swalCancelBt";
      const f = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let p = "";
      e.text && f.test(d(e.text)) ? p = "content" : e.text && d(e.text) === "String" && (p = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (i = e.buttons.cancel.text) && (l = !0), e.buttons.cancel.className && (u = e.buttons.cancel.className), e.buttons.confirm.text && (a = e.buttons.confirm.text), e.buttons.confirm.className && (c = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (i = e.buttons[0], l = !0), e.buttons[1] && (a = e.buttons[1]))), de({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [p]: e.text,
        buttons: {
          confirm: {
            text: a,
            value: !0,
            visible: !0,
            className: c
          },
          cancel: {
            text: i,
            value: null,
            visible: l,
            className: u
          }
        }
      }).then((w) => {
        w && typeof e.onOk == "function" && e.onOk(), s(w);
      }).catch((w) => {
        o(w);
      });
    } else if (typeof e == "string") {
      let a = "";
      if (t)
        switch (typeof t) {
          case "string":
            a = "text";
            break;
          case "object":
            a = "content";
            break;
        }
      de({
        title: e,
        [a]: t || "",
        icon: r || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: n("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((i) => {
        s(i);
      }).catch((i) => {
        o(i);
      });
    } else if (typeof e == "boolean")
      !e && de.close && de.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Ya(e) {
  return e.replace(/_(\w)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Za(e) {
  let t = document.createElement("div");
  return t.textContent !== void 0 ? t.textContent = e : t.innerText = e, t.innerHTML;
}
function Qa(e) {
  let t = document.createElement("div");
  return t.innerHTML = e, t.innerText || t.textContent;
}
function Ka(e) {
  return new Promise((t) => {
    let r = new FileReader();
    r.readAsDataURL(e), r.onloadend = () => {
      t(r.result);
    };
  });
}
function or(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function ei(e) {
  return d(e) === "String" && e.indexOf("image") > -1;
}
function ti(e) {
  const t = or(e);
  let r = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(t) > -1 ? r = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(t) > -1 ? r = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(t) > -1 ? r = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(t) > -1 ? r = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(t) > -1 ? r = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(t) > -1 && (r = "ios-videocam"), r;
}
function ri(e, t) {
  let r = document.createElement("a");
  r.href = t, r.download = e, sr(r);
}
function sr(e) {
  let t = document.createEvent("MouseEvents");
  t.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(t);
}
function Ne({
  group: e,
  condition: t,
  pathKey: r,
  childKey: n = "children",
  path: s = []
}) {
  if (e && te(e)) {
    if (He(t)) {
      if (J(e)) {
        let o = e, a = Ce(s);
        if (t(o))
          return r && o[r] && a.push(o[r]), a;
        if (o[n] && !be(o[n])) {
          r && o[r] && a.push(o[r]);
          let i = Ne({
            group: o[n],
            condition: t,
            pathKey: r,
            childKey: n,
            path: a
          });
          if (!be(i))
            return i;
        }
      } else if (Array.isArray(e))
        for (let o of e) {
          let a = Ce(s);
          if (t(o))
            return r && o[r] ? a.push(o[r]) : a.push(String(e.indexOf(o))), a;
          if (o[n] && o[n].length > 0) {
            r && o[r] ? a.push(o[r]) : a.push(String(e.indexOf(o)));
            let i = Ne({
              group: o[n],
              condition: t,
              pathKey: r,
              childKey: n,
              path: a
            });
            if (!be(i))
              return i;
          }
        }
    } else if (Array.isArray(e))
      for (let o of e) {
        let a = Ce(s);
        if (o === t)
          return a.push(String(e.indexOf(o))), a;
      }
  }
  return [];
}
function ar(e, t = 12) {
  if (d(e) === "String" && e.length > 0) {
    let r = document.createElement("span");
    r.style.fontSize = t + "px", r.style.fontFamily = "inherit", r.innerHTML = e, r.style.opacity = "0", r.style.position = "fixed", r.style.top = "3000px", document.body.append(r);
    const n = r.clientWidth;
    return document.body.removeChild(r), n;
  }
  return 0;
}
function ni(e) {
  return e === "" ? null : e;
}
function oi(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
const si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: ri,
  emptyInput: ni,
  fakeALinkClick: sr,
  findPath: Ne,
  getFileSrc: Ka,
  getFileTypeByName: or,
  getFileTypeIconByName: ti,
  getStringWidth: ar,
  htmlDecode: Qa,
  htmlEncode: Za,
  isImgByFile: ei,
  stopBubbling: oi,
  toHump: Ya
}, Symbol.toStringTag, { value: "Module" }));
function d(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function ai(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Le(e) {
  let t = d(e);
  if (t === "Object") {
    for (let r in e)
      if (e.hasOwnProperty(r)) {
        let n = d(e[r]);
        n === "String" ? e[r] = e[r].trim() : (n === "Object" || n === "Array") && Le(e[r]);
      }
  } else if (t === "Array")
    for (let r = 0, n = e.length; r < n; r++) {
      let s = d(e[r]);
      s === "String" ? e[r] = e[r].trim() : (s === "Array" || s === "Object") && Le(e[r]);
    }
  return e;
}
function ke(e, t = []) {
  if (d(e) === "Array")
    return e.forEach((r, n) => {
      switch (d(r)) {
        case "Array":
        case "Object":
          ke(r);
          break;
        default:
          e[n] = null;
      }
    }), e;
  if (d(e) === "Object") {
    for (let r in e)
      if (e.hasOwnProperty(r)) {
        let n = !0;
        for (let s of t)
          if (s === r) {
            n = !1;
            break;
          }
        if (n)
          switch (d(e[r])) {
            case "Array":
            case "Object":
              ke(e[r]);
              break;
            default:
              e[r] = null;
          }
      }
    return e;
  } else
    return e;
}
const ii = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function li(e) {
  let t = new FormData();
  for (let r in e)
    e.hasOwnProperty(r) && e[r] !== null && t.append(r, e[r]);
  return t;
}
function ci(e, t, r = !1) {
  if (!e || !t)
    return !1;
  let n, s = "notFoundC", o = function(a, i) {
    if (Array.isArray(a)) {
      if (d(i) === "Function" && i(a))
        return s = a, [];
      for (let l of a) {
        if (s !== "notFoundC")
          break;
        if (d(i) === "Function" && i(l) || l === i)
          return s = l, [a.indexOf(l)];
        if (d(l) === "Array" || d(l) === "Object") {
          let c = o(l, i);
          if (c !== void 0)
            return [a.indexOf(l), ...c];
        }
      }
    } else if (d(a) === "Object") {
      if (d(i) === "Function" && i(a))
        return s = a, [];
      for (let l in a) {
        if (s !== "notFoundC")
          break;
        if (a.hasOwnProperty(l)) {
          if (d(i) === "Function" && i(l) || a[l] === i)
            return s = a[l], [l];
          if (d(a[l]) === "Object" || d(a[l]) === "Array") {
            let c = o(a[l], i);
            if (c !== void 0)
              return [l, ...c];
          }
        }
      }
    }
  };
  return n = o(e, t), r ? n || !1 : s === "notFoundC" ? !1 : s;
}
function ui(e, t) {
  for (let r = 0, n = t.length; r < n; r++)
    if (e === t[r])
      return !0;
  return !1;
}
function fi(e, t = 2) {
  let r = new RegExp(`(^-?\\d+\\.\\d{${t}})(\\d+$)`), n = e && String(e) || "";
  return r.test(n) ? Number(n.replace(r, "$1")) : e;
}
function ir(e, t = {}, r = "get") {
  let n = document.createElement("form"), s = document.getElementsByTagName("body")[0];
  s.appendChild(n), n.setAttribute("style", "display:none"), n.setAttribute("target", ""), n.setAttribute("method", r);
  let o = e;
  if (window && window.hasOwnProperty("g")) {
    let a = Object.keys(window.g).filter((i) => i.indexOf("URL") > -1).map((i) => i.replace("URL", ""));
    for (let i of a) {
      let l = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (l.test(e) && window.g[i + "URL"]) {
        o = window.g[i + "URL"] + e.replace(l, "");
        break;
      }
    }
  }
  if (n.setAttribute("action", o), J(t)) {
    for (let i in t)
      if (t.hasOwnProperty(i) && (t[i] || t[i] === 0 || t[i] === !1 || t[i] === "")) {
        let l = document.createElement("input");
        l.setAttribute("type", "hidden"), l.setAttribute("name", i), l.setAttribute("value", t[i]), n.appendChild(l);
      }
    n.submit();
    let a = setTimeout(() => {
      s.removeChild(n), clearTimeout(a), a = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function pi(e, t = {}, r = "get") {
  if (t.hasOwnProperty("columns") && (t.columns === "" || t.columns === null || t.columns === void 0)) {
    xe.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  ir(e, t, r);
}
function di(e, t, r = !1) {
  let n;
  if (e && d(t) === "Array") {
    let s = localStorage.getItem(e);
    if (s) {
      let o = JSON.parse(decodeURI(s));
      n = t.filter((a) => a.key && o.indexOf(a.title) !== -1).map((a) => a.key);
    } else
      n = t.map((o) => o.key);
  } else
    n = [];
  return r || (n = String(n)), n;
}
function k(e) {
  return e != null && e !== "";
}
function hi(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function gi(e, t = !1, r = "") {
  return function(n, s) {
    let o;
    if (Array.isArray(e)) {
      let l = [];
      for (let c of e)
        k(s.row[c]) && l.push(s.row[c]);
      o = l.join(r);
    } else
      typeof e == "function" ? o = e(s) : o = s.row[e];
    let a = ar(o), i = s.column._width;
    return o && a > i ? n(
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
        n(
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
    ) : n("span", t && !k(o) ? "--" : o);
  };
}
function bi(e) {
  if (J(e)) {
    for (let t in e)
      if (e.hasOwnProperty(t) && k(e[t]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let t of e)
      if (k(t))
        return !1;
    return !0;
  }
  return !k(e);
}
function mi(e) {
  return d(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : d(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function lr({
  group: e,
  condition: t,
  key: r,
  val: n,
  childKey: s = "children"
}) {
  if (d(e) !== "Array" || d(t) !== "Function" || d(r) !== "String" || d(s) !== "String")
    return !1;
  e.forEach((o) => {
    t(o) && (d(n) === "Function" ? o[r] = n(o[r]) : o[r] = n), d(o[s]) === "Array" && o[s].length > 0 && lr({
      group: o[s],
      condition: t,
      key: r,
      val: n,
      childKey: s
    });
  });
}
function yi(e) {
  let t = sessionStorage.getItem("btnPermissions");
  return t ? t.split(",").indexOf(e) > -1 : !1;
}
function cr(e) {
  return d(e) === "Number" && String(e) === "NaN";
}
function _i(e, t = !1, r = !1) {
  if (d(e) !== "Object")
    return e;
  let n = Object.assign(e, {}), s = "";
  for (let o in n)
    if (n.hasOwnProperty(o)) {
      let a = n[o];
      a === void 0 || a === "" || d(a) === "String" && a.trim() === "" || a === null || cr(a) ? r ? t ? s += o + "=&" : n[o] = "" : delete n[o] : t && (s += o + "=" + a + "&");
    }
  return t ? s.length > 0 ? s.substr(0, s.length - 1) : "" : n;
}
function ze(e) {
  let t = {};
  if (Array.isArray(e)) {
    t = [];
    for (let r of e)
      Array.isArray(r) || J(r) ? t.push(ze(r)) : k(r) && t.push(r);
  } else if (J(e))
    for (let r in e)
      e.hasOwnProperty(r) && (Array.isArray(e[r]) || J(e[r]) ? t[r] = ze(e[r]) : k(e[r]) && (t[r] = e[r]));
  return t;
}
function wi(e) {
  const t = window.open();
  if (t) {
    t.document.write(e);
    let r = setTimeout(() => {
      t.print(), window.clearTimeout(r), r = null;
    }, 10);
  }
}
function ur(e) {
  let t = [], r = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && t.push(e);
  for (; r.nextSibling && (r = r.nextSibling); )
    r.nodeType === 1 && t.push(r);
  return t;
}
const fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: ke,
  dataFilterOrToUrl: _i,
  decimalDigitsLimit: fi,
  downloadFileByFormSubmit: ir,
  fileExport: pi,
  findCollection: ci,
  formDataHeadConfig: ii,
  getColumnsKeys: di,
  hasPermission: yi,
  htmlPrint: wi,
  isEmptyValue: bi,
  isNaN: cr,
  isNumberValue: hi,
  isValidValue: k,
  myTypeof: d,
  oneOf: ui,
  removeEmptyValue: ze,
  setValByOption: lr,
  siblingElems: ur,
  stringLength: mi,
  toFormData: li,
  toLine: ai,
  tooltipManual: gi,
  trimObj: Le
}, Symbol.toStringTag, { value: "Module" })), vi = { class: "groupBoxRP" }, Ti = ["onClick"], $i = /* @__PURE__ */ C({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const t = e, r = $r();
    function n(o) {
      return o.path === t.pathName ? "active" : "";
    }
    function s(o, a) {
      o.preventDefault();
      let i = o.target;
      if (!a.children && !i.classList.contains("active")) {
        r.push(a.path);
        return;
      }
      let l = i.parentNode, c = ur(l);
      for (let u of c) {
        u.classList.remove("open");
        const f = u.querySelectorAll(".open");
        for (let p of f)
          p.classList.remove("open");
      }
      l.classList.toggle("open");
    }
    return (o, a) => {
      const i = M("sideMenuGroup", !0);
      return y(), v("ul", vi, [
        (y(!0), v(br, null, mr(t.data, (l, c) => (y(), v("li", {
          class: X({ dropItemRP: l.children }),
          key: l.path + c
        }, [
          T("div", {
            class: X(["menuTxtR", n(l)]),
            onClick: (u) => s(u, l),
            style: I({ paddingLeft: l.level * 20 + "px" })
          }, B(l.name || "-- no name --"), 15, Ti),
          l.children ? (y(), Pt(i, {
            key: 0,
            data: l.children,
            "path-name": t.pathName
          }, null, 8, ["data", "path-name"])) : Ct("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Si = { class: "menuListR" }, Oi = /* @__PURE__ */ C({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: t }) {
    const r = e, n = Sr(), s = W(!0), o = W(), a = W(), i = j(() => s.value ? P("r.hideMenu") : P("r.showMenu")), l = j(() => s.value ? "ios-arrow-back" : "ios-arrow-forward");
    yr(() => {
      let f = localStorage.getItem("menuDisplayR") || "";
      f !== "" ? s.value = JSON.parse(f) : (s.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), _r(
      () => n.path,
      (f) => {
        o.value = f, wr(u);
      },
      { immediate: !0 }
    );
    function c() {
      s.value = !s.value, localStorage.setItem("menuDisplayR", JSON.stringify(s.value)), t("on-change", s.value);
    }
    function u() {
      let f = a.value.querySelectorAll(".dropItemRP");
      for (let p of f)
        p.querySelector(".active") && !p.classList.contains("open") && p.classList.add("open");
    }
    return (f, p) => {
      const w = M("Icon");
      return y(), v("div", {
        ref_key: "menuRef",
        ref: a,
        class: "menuBoxRP"
      }, [
        D(T("div", Si, [
          F($i, {
            data: r.data,
            pathName: h(o)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [fe, h(s)]
        ]),
        F(w, {
          type: h(l),
          size: 25,
          class: X([{ showIco: !h(s) }, "menuShowHideIco"]),
          title: h(i),
          onClick: c,
          color: h(s) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), xi = ["title"], Ai = /* @__PURE__ */ C({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e;
    function n(s) {
      r.disabled || t("click", s);
    }
    return (s, o) => {
      const a = M("Icon"), i = Et("has");
      return D((y(), v("div", {
        class: X(["tableBtnsG", { disabled: r.disabled }]),
        onClick: n,
        title: r.title || h(P)("r.button")
      }, [
        F(a, {
          type: r.icon,
          size: r.size
        }, null, 8, ["type", "size"])
      ], 10, xi)), [
        [i, r.has]
      ]);
    };
  }
}), ji = { class: "contentX" }, Pi = { class: "arrowA" }, Ci = /* @__PURE__ */ C({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const t = e, r = W(!0), n = j(() => r ? "background:" + t.bg || "transparent" : "");
    return (s, o) => {
      const a = M("Icon");
      return y(), v("div", {
        style: I(h(n))
      }, [
        D(T("div", ji, [
          ue(s.$slots, "default")
        ], 512), [
          [fe, h(r)]
        ]),
        T("div", Pi, [
          T("div", {
            class: "btA",
            onClick: o[0] || (o[0] = (i) => r.value = !h(r))
          }, [
            F(a, {
              type: h(r) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Ii = { class: "contentZ" }, Ei = /* @__PURE__ */ C({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = j({
      get() {
        return r.modelValue;
      },
      set(o) {
        t("update:modelValue", o);
      }
    }), s = j(() => n.value ? "background:" + r.bg : "");
    return (o, a) => (y(), v("div", {
      style: I(h(s))
    }, [
      D(T("div", Ii, [
        ue(o.$slots, "default")
      ], 512), [
        [fe, h(n)]
      ])
    ], 4));
  }
});
let Re = [], De = [];
const Bi = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    Re.map((t) => {
      window.clearTimeout(t);
    }), De.map((t) => {
      window.clearInterval(t);
    }), Re.length = 0, De.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Ze = function(e, t) {
  let r = window.setTimeout(e, t);
  return Re.push(r), r;
}, pr = function(e, t) {
  let r = window.setInterval(e, t);
  return De.push(r), r;
}, Mi = /* @__PURE__ */ C({
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
  setup(e, { emit: t }) {
    const r = e;
    let n = !1;
    const s = j({
      get() {
        return r.modelValue;
      },
      set(l) {
        t("update:modelValue", l);
      }
    }), o = j({
      get() {
        return r.open;
      },
      set(l) {
        t("on-toggle", l);
      }
    }), a = j(() => o.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      n || (n = !0, t("on-search", s.value), Ze(() => {
        n = !1;
      }, 2e3));
    }
    return (l, c) => {
      const u = M("Input"), f = M("icon");
      return y(), v("div", {
        class: "tableSearchV",
        style: I({ position: r.fixed ? "fixed" : "absolute", right: r.right, top: r.top })
      }, [
        ue(l.$slots, "default", {}, () => [
          F(u, {
            modelValue: h(s),
            "onUpdate:modelValue": c[0] || (c[0] = (p) => vr(s) ? s.value = p : null),
            style: I({ width: r.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: r.placeholder || h(P)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        D(T("span", {
          class: "sbt",
          onClick: c[1] || (c[1] = (p) => o.value = !h(o)),
          style: I({ color: r.btnColor })
        }, [
          F(f, {
            type: h(a),
            color: r.btnColor
          }, null, 8, ["type", "color"]),
          _e(B(h(P)("r.adSearch")), 1)
        ], 4), [
          [fe, r.showBtn]
        ])
      ], 4);
    };
  }
}), $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FullPop: Mr,
  HeaderBt: Mt,
  Hello: Nr,
  IconTxtBtn: Lr,
  Page404: Hr,
  ShowHidePanel: Ci,
  ShowHidePanelB: Ei,
  SideMenu: Oi,
  TableIconBtn: Ai,
  TableSearch: Mi
}, Symbol.toStringTag, { value: "Module" }));
let G = 0, ce = document.createElement("div");
ce.setAttribute("class", "spinModal");
ce.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ce);
};
function St(e) {
  e ? ce.classList.add("show") : ce.classList.remove("show");
}
function dr(e) {
  let t = G;
  e ? G++ : G > 0 && G--, t !== G && (G === 0 ? St(!1) : t === 0 && St(!0));
}
const Fi = window.location.origin;
let q = null;
const Ot = (...e) => Q.apply(q, e);
let S = Ie.create({
  baseURL: Fi,
  withCredentials: !0
  // 允许携带cookie
});
function Ni() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
S.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function xt() {
  if (S.store)
    if (typeof S.store == "function") {
      const e = S.store();
      e.logout && e.logout();
    } else
      S.store.dispatch("logout");
  else
    Ni();
}
S.interceptors.response.use(
  (e) => (q && e && e.data && (e.data.code === 403 || e.data.code === 409) && q.messageBox({
    content: Ot("r.http." + e.data.code),
    onOk: xt
  }), e),
  (e) => (q && e && e.response && (e.response.status === 403 || e.response.status === 409) && q.messageBox({
    content: Ot("r.http." + e.response.status),
    onOk: xt
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function L(e, t, r, n) {
  n && n.spin && dr(!1);
  let s = !0, o = e && e.data;
  if (o) {
    r = r || [];
    for (let a of r)
      o = o[a], s = s && o;
    return s ? o : (t && console.warn(t), !1);
  }
  return t && console.warn(t), !1;
}
function Li(e, t, r, n, s, o, a) {
  return new Promise((i, l) => {
    switch (e) {
      case "get":
        S.get(t, { params: r }).then((u) => {
          let f = L(u, n, s, o);
          f ? i(f) : l(u);
        }).catch((u) => {
          L({}, n, s, o), l(u);
        });
        break;
      case "delete":
        let c = a ? "params" : "data";
        S.delete(t, { [c]: r }).then((u) => {
          let f = L(u, n, s, o);
          f ? i(f) : l(u);
        }).catch((u) => {
          L({}, n, s, o), l(u);
        });
        break;
      case "post":
        S.post(t, r, o).then((u) => {
          let f = L(u, n, s, o);
          f ? i(f) : l(u);
        }).catch((u) => {
          L({}, n, s, o), l(u);
        });
        break;
      case "put":
        S.put(t, r, o).then((u) => {
          let f = L(u, n, s, o);
          f ? i(f) : l(u);
        }).catch((u) => {
          L({}, n, s, o), l(u);
        });
        break;
    }
  });
}
function he(e, t, r = {}, n, s, o, a) {
  return new Promise((i, l) => {
    if (t) {
      o && o.spin && dr(!0);
      let c = t;
      if (window && window.hasOwnProperty("g")) {
        const p = window.g;
        let w = Object.keys(p).filter(($) => $.indexOf("URL") > -1).map(($) => $.replace("URL", ""));
        for (let $ of w) {
          let O = new RegExp("^/" + $ + "(?=/.*$)", "i");
          if (O.test(t) && p[$ + "URL"]) {
            c = p[$ + "URL"] + t.replace(O, "");
            break;
          }
        }
      }
      let u;
      if (o && o.headers && o.headers["Content-Type"] === "multipart/form-data")
        u = r;
      else if (r && !be(r))
        if (Array.isArray(r)) {
          u = [];
          for (let p of r)
            (p || p === 0 || p === !1 || p === "" && o && !o.noEmptyStr) && u.push(p);
        } else {
          u = {};
          for (let p in r)
            r.hasOwnProperty(p) && (r[p] || r[p] === 0 || r[p] === !1 || r[p] === "" && o && !o.noEmptyStr) && (u[p] = r[p]);
        }
      let f = e.toLowerCase();
      Li(f, c, u, n, s, o, a).then((p) => {
        i(p);
      }).catch((p) => {
        l(p);
      });
    } else
      console.error("没有请求地址:url"), l("没有请求地址:url");
  });
}
const Qe = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, t) {
    S.store = e, q = t.config.globalProperties;
  },
  post(e, t, r, n, s) {
    return new Promise((o, a) => {
      he("post", e, t, r, n, s).then((i) => {
        o(i);
      }).catch((i) => {
        a(i);
      });
    });
  },
  put(e, t, r, n, s) {
    return new Promise((o, a) => {
      he("put", e, t, r, n, s).then((i) => {
        o(i);
      }).catch((i) => {
        a(i);
      });
    });
  },
  get(e, t, r, n, s) {
    return new Promise((o, a) => {
      he("get", e, t, r, n, s).then((i) => {
        o(i);
      }).catch((i) => {
        a(i);
      });
    });
  },
  delete(e, t, r, n, s, o = !0) {
    return new Promise((a, i) => {
      he("delete", e, t, r, n, s, o).then((l) => {
        a(l);
      }).catch((l) => {
        i(l);
      });
    });
  },
  all: Ie.all,
  spread: Ie.spread,
  config: S
};
let se = !1;
function hr({
  height: e,
  width: t = 416,
  title: r,
  content: n,
  onOk: s,
  onCancel: o,
  okText: a,
  cancelText: i,
  noWarnIcon: l,
  footerAlign: c,
  cancelBt: u = !0
}) {
  const f = (...O) => Q.apply(this, O);
  let w = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", $ = d(n) === "String";
  V.warning({
    width: t,
    footerHide: !0,
    render: () => _(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: w
        }
      },
      [
        _(
          "div",
          {
            class: "containerN"
          },
          [
            _(
              "div",
              {
                class: "titleN"
              },
              [
                _("span", r || f("r.info.title")),
                _(
                  Ae,
                  {
                    class: "fr closeN",
                    type: "text",
                    onclick() {
                      se || V.remove();
                    }
                  },
                  [
                    _("i", {
                      class: "ivu-icon ivu-icon-ios-close",
                      style: {
                        fontSize: "30px"
                      }
                    })
                  ]
                )
              ]
            ),
            _(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: $ ? "center" : "left"
                }
              },
              [
                _("i", {
                  class: $ && !l ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                _("div", { class: "msgBoxConO" }, n || f("r.info.text"))
              ]
            ),
            _(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: c || "center"
                }
              },
              [
                _(
                  Ae,
                  {
                    class: "okBtN",
                    onclick(O) {
                      var x;
                      if (s && typeof s == "function") {
                        const A = s();
                        if (A && d(A) === "Promise") {
                          se = !0;
                          const pe = O && (O.currentTarget || O.target);
                          pe && (pe.classList.add("ivu-btn-loading"), pe.nextSibling.setAttribute("disabled", "disabled"), ((x = pe.parentElement) == null ? void 0 : x.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(A).then(() => {
                            se = !1, V.remove();
                          }).catch(() => {
                            se = !1, V.remove();
                          });
                        } else
                          V.remove();
                      }
                    }
                  },
                  [
                    _("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    _("span", a || f("r.confirm"))
                  ]
                ),
                _(
                  Ae,
                  {
                    class: ["cancelBtN", !u && "hide"],
                    onclick() {
                      se || (V.remove(), d(o) === "Function" && o && o());
                    }
                  },
                  i || f("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function gr(e, t, r, n) {
  const s = (...o) => Q.apply(this, o);
  xe.call(this, {
    title: e || s("r.info.title"),
    text: t || s("r.info.text"),
    icon: r || "warning",
    onOk: n,
    buttons: [s("r.cancel")]
  });
}
const At = {
  $fetch: Qe,
  $swal: xe,
  $swalConfirm: gr,
  messageBox: hr,
  setInterval: pr,
  setTimeout: Ze,
  ...fr
}, ki = function(e, t = {}) {
  Qe.init(t.useStore || t.store, e), t.locale && ye.use(t.locale), t.i18n && ye.i18n(t.i18n), t.router && Bi(t.router), t.notRegistryGlobal || (Object.keys($t).forEach((r) => {
    e.component(r) || e.component(r, $t[r]);
  }), Object.keys(At).forEach((r) => {
    e.config.globalProperties[r] = At[r];
  })), e.directive("has") || e.directive("has", (r, n) => {
    n.value && !e.config.globalProperties.hasPermission(n.value) && (r.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (r, n) => {
    let s;
    n.arg ? s = r.querySelector("." + n.arg) : s = r.querySelector(".ivu-select-dropdown") || r, s.addEventListener("scroll", function() {
      s.scrollTop > 0 && s.scrollHeight - s.scrollTop <= s.clientHeight && n.value();
    });
  });
}, zi = ye.use, Ri = ye.i18n, Ji = {
  locale: zi,
  i18n: Ri,
  install: ki,
  ...fr,
  ...si,
  $fetch: Qe,
  $swal: xe,
  $swalConfirm: gr,
  messageBox: hr,
  setInterval: pr,
  setTimeout: Ze
};
export {
  Qe as $fetch,
  xe as $swal,
  gr as $swalConfirm,
  Mr as FullPop,
  Mt as HeaderBt,
  Nr as Hello,
  Lr as IconTxtBtn,
  Hr as Page404,
  Ci as ShowHidePanel,
  Ei as ShowHidePanelB,
  Oi as SideMenu,
  Ai as TableIconBtn,
  Mi as TableSearch,
  ke as clearObj,
  _i as dataFilterOrToUrl,
  fi as decimalDigitsLimit,
  Ji as default,
  ir as downloadFileByFormSubmit,
  ri as downloadFileReaderFile,
  ni as emptyInput,
  sr as fakeALinkClick,
  pi as fileExport,
  ci as findCollection,
  Ne as findPath,
  ii as formDataHeadConfig,
  di as getColumnsKeys,
  Ka as getFileSrc,
  or as getFileTypeByName,
  ti as getFileTypeIconByName,
  ar as getStringWidth,
  yi as hasPermission,
  Qa as htmlDecode,
  Za as htmlEncode,
  wi as htmlPrint,
  bi as isEmptyValue,
  ei as isImgByFile,
  cr as isNaN,
  hi as isNumberValue,
  k as isValidValue,
  hr as messageBox,
  d as myTypeof,
  ui as oneOf,
  ze as removeEmptyValue,
  pr as setInterval,
  Ze as setTimeout,
  lr as setValByOption,
  ur as siblingElems,
  oi as stopBubbling,
  mi as stringLength,
  li as toFormData,
  Ya as toHump,
  ai as toLine,
  gi as tooltipManual,
  Le as trimObj
};
//# sourceMappingURL=plugRQw.js.map
