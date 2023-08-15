import { getCurrentInstance as Bt, defineComponent as B, resolveComponent as P, openBlock as w, createElementBlock as O, normalizeClass as Z, normalizeStyle as k, createBlock as Ge, createCommentVNode as kt, renderSlot as de, ref as M, computed as j, withDirectives as D, unref as d, createElementVNode as _, toDisplayString as I, createVNode as E, withCtx as _e, createTextVNode as he, vShow as ee, resolveDirective as Mt, Fragment as Ft, renderList as Nt, onBeforeMount as Sr, watch as Lt, nextTick as $r, isRef as Be, onMounted as Or, withModifiers as xr, h as A } from "vue";
import Ar from "deepmerge";
import ge from "sweetalert";
import { useRouter as jr, useRoute as Cr } from "vue-router";
import { useI18n as Pr } from "vue-i18n";
import ke from "axios";
import { Modal as W, Button as Pe } from "view-ui-plus";
const zt = {
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
}, Ir = /(%|){([0-9a-zA-Z_]+)}/g;
function Er() {
  function e(t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }
  function r(t, ...n) {
    let o;
    return n.length === 1 && typeof n[0] == "object" && (o = n[0]), (!o || !o.hasOwnProperty) && (o = {}), t === void 0 ? "" : t.replace(Ir, (a, s, i, l) => {
      let c;
      return t[l - 1] === "{" && t[l + a.length] === "}" ? i : (c = e(o, i) ? o[i] : null, c ?? "");
    });
  }
  return r;
}
const Br = Er();
let we = zt;
const kr = {
  zh: zt
};
let ot, at = {}, S, Mr = function(e, r) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(e, r);
  if (S && S.global)
    return S.global.t(e, r);
  if (S && S.locale) {
    if (!at[S.locale] || ot != S.locale) {
      at[S.locale] = !0;
      let t = S.getLocaleMessage(S.locale) || {}, n = Ar(kr[S.locale], t, { clone: !0 });
      we = n, S.setLocaleMessage(S.locale, n), ot = S.locale;
    }
    return S.hlang(e, r);
  }
};
const te = function(e, r) {
  let t = Mr.apply(this, [e, r]);
  if (t != null)
    return t;
  const n = e.split(".");
  let o = we;
  for (let a = 0, s = n.length; a < s; a++) {
    const i = n[a];
    if (t = o[i], a === s - 1)
      return Br(t, r);
    if (!t)
      return "";
    o = t;
  }
  return "";
}, Fr = function(e) {
  we = e || we;
}, Nr = function(e) {
  S = e;
}, Te = {
  use: Fr,
  t: te,
  i18n: Nr
};
function T(e, r) {
  var n;
  const t = (n = Bt()) == null ? void 0 : n.appContext.config.globalProperties;
  return te.apply(t, [e, r]);
}
const Rt = /* @__PURE__ */ B({
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
  setup(e, { emit: r }) {
    const t = e;
    function n() {
      t.disabled || r("click");
    }
    return (o, a) => {
      const s = P("Icon");
      return w(), O("div", {
        class: Z({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: k({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: n
      }, [
        o.icon ? (w(), Ge(s, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : kt("", !0),
        de(o.$slots, "default")
      ], 6);
    };
  }
}), Lr = { class: "headerTxtAM" }, zr = { class: "contentAM" }, Rr = /* @__PURE__ */ B({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(e, { expose: r, emit: t }) {
    const n = e;
    let o = M(!1);
    const a = j(() => typeof n.headerFontSize == "number" ? n.headerFontSize + "px" : n.headerFontSize), s = j(() => ({ zIndex: n.zIndex }));
    function i() {
      o.value = !0, t("on-open");
    }
    function l(c) {
      o.value = !1, t("on-close", c === !0);
    }
    return r({
      open: i,
      close: l
    }), (c, u) => D((w(), O("div", {
      class: "fullScreenPopBoxAM",
      style: k(d(s))
    }, [
      _("div", {
        class: "headerAM",
        style: k({ color: c.headerColor, backgroundColor: c.headerBg, fontSize: d(a) })
      }, [
        _("span", Lr, I(c.title || d(T)("r.title")), 1),
        E(Rt, {
          icon: "md-return-left",
          onClick: l
        }, {
          default: _e(() => [
            he(I(d(T)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      _("div", zr, [
        de(c.$slots, "default")
      ])
    ], 4)), [
      [ee, d(o)]
    ]);
  }
}), Vr = { class: "msg" }, Dr = /* @__PURE__ */ B({
  __name: "Hello",
  setup(e) {
    let r = M("Greetings from Ricky.");
    return (t, n) => (w(), O("span", Vr, I(d(r)), 1));
  }
}), Ur = /* @__PURE__ */ B({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: 17 },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = e, n = j(() => Math.floor(t.size / 17 * 12) + "px");
    function o(a) {
      t.disabled || r("click", a);
    }
    return (a, s) => {
      const i = P("Icon"), l = Mt("has");
      return D((w(), O("div", {
        class: Z(["tabTopBtnsT", { disabled: a.disabled }]),
        onClick: o,
        style: k({ "font-size": d(n) })
      }, [
        E(i, {
          type: a.icon,
          size: a.size
        }, null, 8, ["type", "size"]),
        he(" " + I(a.name || d(T)("r.button")), 1)
      ], 6)), [
        [l, a.has]
      ]);
    };
  }
}), Hr = { class: "c404K" }, Gr = /* @__PURE__ */ _("div", { class: "t404" }, "404", -1), qr = { class: "ct404" }, Wr = { class: "p404" }, Jr = /* @__PURE__ */ B({
  __name: "Page404",
  setup(e) {
    const t = Bt().appContext.config.globalProperties.$router;
    function n() {
      t.go(-1);
    }
    return (o, a) => {
      const s = P("Button");
      return w(), O("div", Hr, [
        Gr,
        _("div", qr, "UH OH! " + I(d(T)("r.pageNotFound")), 1),
        _("div", Wr, I(d(T)("r.notFoundMsg")), 1),
        E(s, {
          class: "bt404",
          onClick: n
        }, {
          default: _e(() => [
            he(I(d(T)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var Xr = typeof global == "object" && global && global.Object === Object && global;
const Vt = Xr;
var Yr = typeof self == "object" && self && self.Object === Object && self, Zr = Vt || Yr || Function("return this")();
const F = Zr;
var Qr = F.Symbol;
const Q = Qr;
var Dt = Object.prototype, Kr = Dt.hasOwnProperty, en = Dt.toString, ie = Q ? Q.toStringTag : void 0;
function tn(e) {
  var r = Kr.call(e, ie), t = e[ie];
  try {
    e[ie] = void 0;
    var n = !0;
  } catch {
  }
  var o = en.call(e);
  return n && (r ? e[ie] = t : delete e[ie]), o;
}
var rn = Object.prototype, nn = rn.toString;
function on(e) {
  return nn.call(e);
}
var an = "[object Null]", sn = "[object Undefined]", st = Q ? Q.toStringTag : void 0;
function re(e) {
  return e == null ? e === void 0 ? sn : an : st && st in Object(e) ? tn(e) : on(e);
}
function ne(e) {
  return e != null && typeof e == "object";
}
var ln = Array.isArray;
const Se = ln;
function oe(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var cn = "[object AsyncFunction]", un = "[object Function]", fn = "[object GeneratorFunction]", pn = "[object Proxy]";
function qe(e) {
  if (!oe(e))
    return !1;
  var r = re(e);
  return r == un || r == fn || r == cn || r == pn;
}
var dn = F["__core-js_shared__"];
const Ie = dn;
var it = function() {
  var e = /[^.]+$/.exec(Ie && Ie.keys && Ie.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hn(e) {
  return !!it && it in e;
}
var gn = Function.prototype, mn = gn.toString;
function G(e) {
  if (e != null) {
    try {
      return mn.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var bn = /[\\^$.*+?()[\]{}|]/g, yn = /^\[object .+?Constructor\]$/, vn = Function.prototype, _n = Object.prototype, wn = vn.toString, Tn = _n.hasOwnProperty, Sn = RegExp(
  "^" + wn.call(Tn).replace(bn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $n(e) {
  if (!oe(e) || hn(e))
    return !1;
  var r = qe(e) ? Sn : yn;
  return r.test(G(e));
}
function On(e, r) {
  return e == null ? void 0 : e[r];
}
function q(e, r) {
  var t = On(e, r);
  return $n(t) ? t : void 0;
}
var xn = q(F, "WeakMap");
const Me = xn;
var lt = Object.create, An = function() {
  function e() {
  }
  return function(r) {
    if (!oe(r))
      return {};
    if (lt)
      return lt(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
const jn = An;
function Cn(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var Pn = function() {
  try {
    var e = q(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ct = Pn;
function In(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var En = 9007199254740991, Bn = /^(?:0|[1-9]\d*)$/;
function kn(e, r) {
  var t = typeof e;
  return r = r ?? En, !!r && (t == "number" || t != "symbol" && Bn.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function Ut(e, r, t) {
  r == "__proto__" && ct ? ct(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
function Ht(e, r) {
  return e === r || e !== e && r !== r;
}
var Mn = Object.prototype, Fn = Mn.hasOwnProperty;
function Gt(e, r, t) {
  var n = e[r];
  (!(Fn.call(e, r) && Ht(n, t)) || t === void 0 && !(r in e)) && Ut(e, r, t);
}
function $e(e, r, t, n) {
  var o = !t;
  t || (t = {});
  for (var a = -1, s = r.length; ++a < s; ) {
    var i = r[a], l = n ? n(t[i], e[i], i, t, e) : void 0;
    l === void 0 && (l = e[i]), o ? Ut(t, i, l) : Gt(t, i, l);
  }
  return t;
}
var Nn = 9007199254740991;
function qt(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Nn;
}
function We(e) {
  return e != null && qt(e.length) && !qe(e);
}
var Ln = Object.prototype;
function Oe(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Ln;
  return e === t;
}
function zn(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Rn = "[object Arguments]";
function ut(e) {
  return ne(e) && re(e) == Rn;
}
var Wt = Object.prototype, Vn = Wt.hasOwnProperty, Dn = Wt.propertyIsEnumerable, Un = ut(function() {
  return arguments;
}()) ? ut : function(e) {
  return ne(e) && Vn.call(e, "callee") && !Dn.call(e, "callee");
};
const Jt = Un;
function Hn() {
  return !1;
}
var Xt = typeof exports == "object" && exports && !exports.nodeType && exports, ft = Xt && typeof module == "object" && module && !module.nodeType && module, Gn = ft && ft.exports === Xt, pt = Gn ? F.Buffer : void 0, qn = pt ? pt.isBuffer : void 0, Wn = qn || Hn;
const Je = Wn;
var Jn = "[object Arguments]", Xn = "[object Array]", Yn = "[object Boolean]", Zn = "[object Date]", Qn = "[object Error]", Kn = "[object Function]", eo = "[object Map]", to = "[object Number]", ro = "[object Object]", no = "[object RegExp]", oo = "[object Set]", ao = "[object String]", so = "[object WeakMap]", io = "[object ArrayBuffer]", lo = "[object DataView]", co = "[object Float32Array]", uo = "[object Float64Array]", fo = "[object Int8Array]", po = "[object Int16Array]", ho = "[object Int32Array]", go = "[object Uint8Array]", mo = "[object Uint8ClampedArray]", bo = "[object Uint16Array]", yo = "[object Uint32Array]", y = {};
y[co] = y[uo] = y[fo] = y[po] = y[ho] = y[go] = y[mo] = y[bo] = y[yo] = !0;
y[Jn] = y[Xn] = y[io] = y[Yn] = y[lo] = y[Zn] = y[Qn] = y[Kn] = y[eo] = y[to] = y[ro] = y[no] = y[oo] = y[ao] = y[so] = !1;
function vo(e) {
  return ne(e) && qt(e.length) && !!y[re(e)];
}
function Xe(e) {
  return function(r) {
    return e(r);
  };
}
var Yt = typeof exports == "object" && exports && !exports.nodeType && exports, ce = Yt && typeof module == "object" && module && !module.nodeType && module, _o = ce && ce.exports === Yt, Ee = _o && Vt.process, wo = function() {
  try {
    var e = ce && ce.require && ce.require("util").types;
    return e || Ee && Ee.binding && Ee.binding("util");
  } catch {
  }
}();
const K = wo;
var dt = K && K.isTypedArray, To = dt ? Xe(dt) : vo;
const Zt = To;
var So = Object.prototype, $o = So.hasOwnProperty;
function Qt(e, r) {
  var t = Se(e), n = !t && Jt(e), o = !t && !n && Je(e), a = !t && !n && !o && Zt(e), s = t || n || o || a, i = s ? zn(e.length, String) : [], l = i.length;
  for (var c in e)
    (r || $o.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    kn(c, l))) && i.push(c);
  return i;
}
function Kt(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var Oo = Kt(Object.keys, Object);
const xo = Oo;
var Ao = Object.prototype, jo = Ao.hasOwnProperty;
function er(e) {
  if (!Oe(e))
    return xo(e);
  var r = [];
  for (var t in Object(e))
    jo.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
function Ye(e) {
  return We(e) ? Qt(e) : er(e);
}
function Co(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var Po = Object.prototype, Io = Po.hasOwnProperty;
function Eo(e) {
  if (!oe(e))
    return Co(e);
  var r = Oe(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !Io.call(e, n)) || t.push(n);
  return t;
}
function Ze(e) {
  return We(e) ? Qt(e, !0) : Eo(e);
}
var Bo = q(Object, "create");
const ue = Bo;
function ko() {
  this.__data__ = ue ? ue(null) : {}, this.size = 0;
}
function Mo(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Fo = "__lodash_hash_undefined__", No = Object.prototype, Lo = No.hasOwnProperty;
function zo(e) {
  var r = this.__data__;
  if (ue) {
    var t = r[e];
    return t === Fo ? void 0 : t;
  }
  return Lo.call(r, e) ? r[e] : void 0;
}
var Ro = Object.prototype, Vo = Ro.hasOwnProperty;
function Do(e) {
  var r = this.__data__;
  return ue ? r[e] !== void 0 : Vo.call(r, e);
}
var Uo = "__lodash_hash_undefined__";
function Ho(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = ue && r === void 0 ? Uo : r, this;
}
function H(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
H.prototype.clear = ko;
H.prototype.delete = Mo;
H.prototype.get = zo;
H.prototype.has = Do;
H.prototype.set = Ho;
function Go() {
  this.__data__ = [], this.size = 0;
}
function xe(e, r) {
  for (var t = e.length; t--; )
    if (Ht(e[t][0], r))
      return t;
  return -1;
}
var qo = Array.prototype, Wo = qo.splice;
function Jo(e) {
  var r = this.__data__, t = xe(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Wo.call(r, t, 1), --this.size, !0;
}
function Xo(e) {
  var r = this.__data__, t = xe(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function Yo(e) {
  return xe(this.__data__, e) > -1;
}
function Zo(e, r) {
  var t = this.__data__, n = xe(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
function L(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
L.prototype.clear = Go;
L.prototype.delete = Jo;
L.prototype.get = Xo;
L.prototype.has = Yo;
L.prototype.set = Zo;
var Qo = q(F, "Map");
const fe = Qo;
function Ko() {
  this.size = 0, this.__data__ = {
    hash: new H(),
    map: new (fe || L)(),
    string: new H()
  };
}
function ea(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function Ae(e, r) {
  var t = e.__data__;
  return ea(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function ta(e) {
  var r = Ae(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function ra(e) {
  return Ae(this, e).get(e);
}
function na(e) {
  return Ae(this, e).has(e);
}
function oa(e, r) {
  var t = Ae(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
function ae(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
ae.prototype.clear = Ko;
ae.prototype.delete = ta;
ae.prototype.get = ra;
ae.prototype.has = na;
ae.prototype.set = oa;
function tr(e, r) {
  for (var t = -1, n = r.length, o = e.length; ++t < n; )
    e[o + t] = r[t];
  return e;
}
var aa = Kt(Object.getPrototypeOf, Object);
const Qe = aa;
var sa = "[object Object]", ia = Function.prototype, la = Object.prototype, rr = ia.toString, ca = la.hasOwnProperty, ua = rr.call(Object);
function Y(e) {
  if (!ne(e) || re(e) != sa)
    return !1;
  var r = Qe(e);
  if (r === null)
    return !0;
  var t = ca.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && rr.call(t) == ua;
}
function fa() {
  this.__data__ = new L(), this.size = 0;
}
function pa(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
function da(e) {
  return this.__data__.get(e);
}
function ha(e) {
  return this.__data__.has(e);
}
var ga = 200;
function ma(e, r) {
  var t = this.__data__;
  if (t instanceof L) {
    var n = t.__data__;
    if (!fe || n.length < ga - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new ae(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
function se(e) {
  var r = this.__data__ = new L(e);
  this.size = r.size;
}
se.prototype.clear = fa;
se.prototype.delete = pa;
se.prototype.get = da;
se.prototype.has = ha;
se.prototype.set = ma;
function ba(e, r) {
  return e && $e(r, Ye(r), e);
}
function ya(e, r) {
  return e && $e(r, Ze(r), e);
}
var nr = typeof exports == "object" && exports && !exports.nodeType && exports, ht = nr && typeof module == "object" && module && !module.nodeType && module, va = ht && ht.exports === nr, gt = va ? F.Buffer : void 0, mt = gt ? gt.allocUnsafe : void 0;
function _a(e, r) {
  if (r)
    return e.slice();
  var t = e.length, n = mt ? mt(t) : new e.constructor(t);
  return e.copy(n), n;
}
function wa(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++t < n; ) {
    var s = e[t];
    r(s, t, e) && (a[o++] = s);
  }
  return a;
}
function or() {
  return [];
}
var Ta = Object.prototype, Sa = Ta.propertyIsEnumerable, bt = Object.getOwnPropertySymbols, $a = bt ? function(e) {
  return e == null ? [] : (e = Object(e), wa(bt(e), function(r) {
    return Sa.call(e, r);
  }));
} : or;
const Ke = $a;
function Oa(e, r) {
  return $e(e, Ke(e), r);
}
var xa = Object.getOwnPropertySymbols, Aa = xa ? function(e) {
  for (var r = []; e; )
    tr(r, Ke(e)), e = Qe(e);
  return r;
} : or;
const ar = Aa;
function ja(e, r) {
  return $e(e, ar(e), r);
}
function sr(e, r, t) {
  var n = r(e);
  return Se(e) ? n : tr(n, t(e));
}
function Ca(e) {
  return sr(e, Ye, Ke);
}
function Pa(e) {
  return sr(e, Ze, ar);
}
var Ia = q(F, "DataView");
const Fe = Ia;
var Ea = q(F, "Promise");
const Ne = Ea;
var Ba = q(F, "Set");
const Le = Ba;
var yt = "[object Map]", ka = "[object Object]", vt = "[object Promise]", _t = "[object Set]", wt = "[object WeakMap]", Tt = "[object DataView]", Ma = G(Fe), Fa = G(fe), Na = G(Ne), La = G(Le), za = G(Me), U = re;
(Fe && U(new Fe(new ArrayBuffer(1))) != Tt || fe && U(new fe()) != yt || Ne && U(Ne.resolve()) != vt || Le && U(new Le()) != _t || Me && U(new Me()) != wt) && (U = function(e) {
  var r = re(e), t = r == ka ? e.constructor : void 0, n = t ? G(t) : "";
  if (n)
    switch (n) {
      case Ma:
        return Tt;
      case Fa:
        return yt;
      case Na:
        return vt;
      case La:
        return _t;
      case za:
        return wt;
    }
  return r;
});
const je = U;
var Ra = Object.prototype, Va = Ra.hasOwnProperty;
function Da(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && Va.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Ua = F.Uint8Array;
const St = Ua;
function et(e) {
  var r = new e.constructor(e.byteLength);
  return new St(r).set(new St(e)), r;
}
function Ha(e, r) {
  var t = r ? et(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Ga = /\w*$/;
function qa(e) {
  var r = new e.constructor(e.source, Ga.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var $t = Q ? Q.prototype : void 0, Ot = $t ? $t.valueOf : void 0;
function Wa(e) {
  return Ot ? Object(Ot.call(e)) : {};
}
function Ja(e, r) {
  var t = r ? et(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var Xa = "[object Boolean]", Ya = "[object Date]", Za = "[object Map]", Qa = "[object Number]", Ka = "[object RegExp]", es = "[object Set]", ts = "[object String]", rs = "[object Symbol]", ns = "[object ArrayBuffer]", os = "[object DataView]", as = "[object Float32Array]", ss = "[object Float64Array]", is = "[object Int8Array]", ls = "[object Int16Array]", cs = "[object Int32Array]", us = "[object Uint8Array]", fs = "[object Uint8ClampedArray]", ps = "[object Uint16Array]", ds = "[object Uint32Array]";
function hs(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case ns:
      return et(e);
    case Xa:
    case Ya:
      return new n(+e);
    case os:
      return Ha(e, t);
    case as:
    case ss:
    case is:
    case ls:
    case cs:
    case us:
    case fs:
    case ps:
    case ds:
      return Ja(e, t);
    case Za:
      return new n();
    case Qa:
    case ts:
      return new n(e);
    case Ka:
      return qa(e);
    case es:
      return new n();
    case rs:
      return Wa(e);
  }
}
function gs(e) {
  return typeof e.constructor == "function" && !Oe(e) ? jn(Qe(e)) : {};
}
var ms = "[object Map]";
function bs(e) {
  return ne(e) && je(e) == ms;
}
var xt = K && K.isMap, ys = xt ? Xe(xt) : bs;
const vs = ys;
var _s = "[object Set]";
function ws(e) {
  return ne(e) && je(e) == _s;
}
var At = K && K.isSet, Ts = At ? Xe(At) : ws;
const Ss = Ts;
var $s = 1, Os = 2, xs = 4, ir = "[object Arguments]", As = "[object Array]", js = "[object Boolean]", Cs = "[object Date]", Ps = "[object Error]", lr = "[object Function]", Is = "[object GeneratorFunction]", Es = "[object Map]", Bs = "[object Number]", cr = "[object Object]", ks = "[object RegExp]", Ms = "[object Set]", Fs = "[object String]", Ns = "[object Symbol]", Ls = "[object WeakMap]", zs = "[object ArrayBuffer]", Rs = "[object DataView]", Vs = "[object Float32Array]", Ds = "[object Float64Array]", Us = "[object Int8Array]", Hs = "[object Int16Array]", Gs = "[object Int32Array]", qs = "[object Uint8Array]", Ws = "[object Uint8ClampedArray]", Js = "[object Uint16Array]", Xs = "[object Uint32Array]", b = {};
b[ir] = b[As] = b[zs] = b[Rs] = b[js] = b[Cs] = b[Vs] = b[Ds] = b[Us] = b[Hs] = b[Gs] = b[Es] = b[Bs] = b[cr] = b[ks] = b[Ms] = b[Fs] = b[Ns] = b[qs] = b[Ws] = b[Js] = b[Xs] = !0;
b[Ps] = b[lr] = b[Ls] = !1;
function be(e, r, t, n, o, a) {
  var s, i = r & $s, l = r & Os, c = r & xs;
  if (t && (s = o ? t(e, n, o, a) : t(e)), s !== void 0)
    return s;
  if (!oe(e))
    return e;
  var u = Se(e);
  if (u) {
    if (s = Da(e), !i)
      return Cn(e, s);
  } else {
    var f = je(e), p = f == lr || f == Is;
    if (Je(e))
      return _a(e, i);
    if (f == cr || f == ir || p && !o) {
      if (s = l || p ? {} : gs(e), !i)
        return l ? ja(e, ya(s, e)) : Oa(e, ba(s, e));
    } else {
      if (!b[f])
        return o ? e : {};
      s = hs(e, f, i);
    }
  }
  a || (a = new se());
  var $ = a.get(e);
  if ($)
    return $;
  a.set(e, s), Ss(e) ? e.forEach(function(m) {
    s.add(be(m, r, t, m, e, a));
  }) : vs(e) && e.forEach(function(m, v) {
    s.set(v, be(m, r, t, v, e, a));
  });
  var x = c ? l ? Pa : Ca : l ? Ze : Ye, g = u ? void 0 : x(e);
  return In(g || e, function(m, v) {
    g && (v = m, m = e[v]), Gt(s, v, be(m, r, t, v, e, a));
  }), s;
}
var Ys = 1, Zs = 4;
function ye(e) {
  return be(e, Ys | Zs);
}
var Qs = "[object Map]", Ks = "[object Set]", ei = Object.prototype, ti = ei.hasOwnProperty;
function ve(e) {
  if (e == null)
    return !0;
  if (We(e) && (Se(e) || typeof e == "string" || typeof e.splice == "function" || Je(e) || Zt(e) || Jt(e)))
    return !e.length;
  var r = je(e);
  if (r == Qs || r == Ks)
    return !e.size;
  if (Oe(e))
    return !er(e).length;
  for (var t in e)
    if (ti.call(e, t))
      return !1;
  return !0;
}
function Ce(e, r, t) {
  const n = (...o) => te.apply(this, o);
  return new Promise((o, a) => {
    if (typeof e == "object" && !Array.isArray(e)) {
      let s = n("r.confirm"), i = n("r.cancel"), l = !1, c = "swalConfirmBt", u = "swalCancelBt";
      const f = /^HTML.*Element$/;
      e.type && (e.icon = e.type) && delete e.type, e.content && (e.text = e.content) && delete e.content, e.className = e.className || "swalBoxX";
      let p = "";
      e.text && f.test(h(e.text)) ? p = "content" : e.text && h(e.text) === "String" && (p = "text"), e.buttons && (typeof e.buttons == "object" && !Array.isArray(e.buttons) ? e.buttons.cancel && (e.buttons.cancel.text && (i = e.buttons.cancel.text) && (l = !0), e.buttons.cancel.className && (u = e.buttons.cancel.className), e.buttons.confirm.text && (s = e.buttons.confirm.text), e.buttons.confirm.className && (c = e.buttons.confirm.className)) : Array.isArray(e.buttons) && (e.buttons[0] && (i = e.buttons[0], l = !0), e.buttons[1] && (s = e.buttons[1]))), ge({
        title: e.title,
        icon: e.icon,
        className: e.className,
        [p]: e.text,
        buttons: {
          confirm: {
            text: s,
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
      }).then(($) => {
        $ && typeof e.onOk == "function" && e.onOk(), o($);
      }).catch(($) => {
        a($);
      });
    } else if (typeof e == "string") {
      let s = "";
      if (r)
        switch (typeof r) {
          case "string":
            s = "text";
            break;
          case "object":
            s = "content";
            break;
        }
      ge({
        title: e,
        [s]: r || "",
        icon: t || "",
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
        o(i);
      }).catch((i) => {
        a(i);
      });
    } else if (typeof e == "boolean")
      !e && ge.close && ge.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function ri(e) {
  return e.replace(/_(\w)/g, function(r, t) {
    return t.toUpperCase();
  });
}
function ni(e) {
  let r = document.createElement("div");
  return r.textContent !== void 0 ? r.textContent = e : r.innerText = e, r.innerHTML;
}
function oi(e) {
  let r = document.createElement("div");
  return r.innerHTML = e, r.innerText || r.textContent;
}
function ai(e) {
  return new Promise((r) => {
    let t = new FileReader();
    t.readAsDataURL(e), t.onloadend = () => {
      r(t.result);
    };
  });
}
function ur(e) {
  return e.split(".").pop().toLocaleLowerCase();
}
function si(e) {
  return h(e) === "String" && e.indexOf("image") > -1;
}
function ii(e) {
  const r = ur(e);
  let t = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(r) > -1 ? t = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(r) > -1 ? t = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(r) > -1 ? t = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(r) > -1 ? t = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(r) > -1 ? t = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(r) > -1 && (t = "ios-videocam"), t;
}
function li(e, r) {
  let t = document.createElement("a");
  t.href = r, t.download = e, fr(t);
}
function fr(e) {
  let r = document.createEvent("MouseEvents");
  r.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(r);
}
function ze({
  group: e,
  condition: r,
  pathKey: t,
  childKey: n = "children",
  path: o = []
}) {
  if (e && oe(e)) {
    if (qe(r)) {
      if (Y(e)) {
        let a = e, s = ye(o);
        if (r(a))
          return t && a[t] && s.push(a[t]), s;
        if (a[n] && !ve(a[n])) {
          t && a[t] && s.push(a[t]);
          let i = ze({
            group: a[n],
            condition: r,
            pathKey: t,
            childKey: n,
            path: s
          });
          if (!ve(i))
            return i;
        }
      } else if (Array.isArray(e))
        for (let a of e) {
          let s = ye(o);
          if (r(a))
            return t && a[t] ? s.push(a[t]) : s.push(String(e.indexOf(a))), s;
          if (a[n] && a[n].length > 0) {
            t && a[t] ? s.push(a[t]) : s.push(String(e.indexOf(a)));
            let i = ze({
              group: a[n],
              condition: r,
              pathKey: t,
              childKey: n,
              path: s
            });
            if (!ve(i))
              return i;
          }
        }
    } else if (Array.isArray(e))
      for (let a of e) {
        let s = ye(o);
        if (a === r)
          return s.push(String(e.indexOf(a))), s;
      }
  }
  return [];
}
function pr(e, r = 12) {
  if (h(e) === "String" && e.length > 0) {
    let t = document.createElement("span");
    t.style.fontSize = r + "px", t.style.fontFamily = "inherit", t.innerHTML = e, t.style.opacity = "0", t.style.position = "fixed", t.style.top = "3000px", document.body.append(t);
    const n = t.clientWidth;
    return document.body.removeChild(t), n;
  }
  return 0;
}
function ci(e) {
  return e === "" ? null : e;
}
function ui(e) {
  e = e || window.Event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
const fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: li,
  emptyInput: ci,
  fakeALinkClick: fr,
  findPath: ze,
  getFileSrc: ai,
  getFileTypeByName: ur,
  getFileTypeIconByName: ii,
  getStringWidth: pr,
  htmlDecode: oi,
  htmlEncode: ni,
  isImgByFile: si,
  stopBubbling: ui,
  toHump: ri
}, Symbol.toStringTag, { value: "Module" }));
function h(e) {
  return Object.prototype.toString.call(e).replace(/\[object |]/g, "");
}
function pi(e) {
  return e.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function Re(e) {
  let r = h(e);
  if (r === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let n = h(e[t]);
        n === "String" ? e[t] = e[t].trim() : (n === "Object" || n === "Array") && Re(e[t]);
      }
  } else if (r === "Array")
    for (let t = 0, n = e.length; t < n; t++) {
      let o = h(e[t]);
      o === "String" ? e[t] = e[t].trim() : (o === "Array" || o === "Object") && Re(e[t]);
    }
  return e;
}
function Ve(e, r = []) {
  if (h(e) === "Array")
    return e.forEach((t, n) => {
      switch (h(t)) {
        case "Array":
        case "Object":
          Ve(t);
          break;
        default:
          e[n] = null;
      }
    }), e;
  if (h(e) === "Object") {
    for (let t in e)
      if (e.hasOwnProperty(t)) {
        let n = !0;
        for (let o of r)
          if (o === t) {
            n = !1;
            break;
          }
        if (n)
          switch (h(e[t])) {
            case "Array":
            case "Object":
              Ve(e[t]);
              break;
            default:
              e[t] = null;
          }
      }
    return e;
  } else
    return e;
}
const di = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function hi(e) {
  let r = new FormData();
  for (let t in e)
    e.hasOwnProperty(t) && e[t] !== null && r.append(t, e[t]);
  return r;
}
function gi(e, r, t = !1) {
  if (!e || !r)
    return !1;
  let n, o = "notFoundC", a = function(s, i) {
    if (Array.isArray(s)) {
      if (h(i) === "Function" && i(s))
        return o = s, [];
      for (let l of s) {
        if (o !== "notFoundC")
          break;
        if (h(i) === "Function" && i(l) || l === i)
          return o = l, [s.indexOf(l)];
        if (h(l) === "Array" || h(l) === "Object") {
          let c = a(l, i);
          if (c !== void 0)
            return [s.indexOf(l), ...c];
        }
      }
    } else if (h(s) === "Object") {
      if (h(i) === "Function" && i(s))
        return o = s, [];
      for (let l in s) {
        if (o !== "notFoundC")
          break;
        if (s.hasOwnProperty(l)) {
          if (h(i) === "Function" && i(l) || s[l] === i)
            return o = s[l], [l];
          if (h(s[l]) === "Object" || h(s[l]) === "Array") {
            let c = a(s[l], i);
            if (c !== void 0)
              return [l, ...c];
          }
        }
      }
    }
  };
  return n = a(e, r), t ? n || !1 : o === "notFoundC" ? !1 : o;
}
function mi(e, r) {
  for (let t = 0, n = r.length; t < n; t++)
    if (e === r[t])
      return !0;
  return !1;
}
function bi(e, r = 2) {
  let t = new RegExp(`(^-?\\d+\\.\\d{${r}})(\\d+$)`), n = e && String(e) || "";
  return t.test(n) ? Number(n.replace(t, "$1")) : e;
}
function dr(e, r = {}, t = "get") {
  let n = document.createElement("form"), o = document.getElementsByTagName("body")[0];
  o.appendChild(n), n.setAttribute("style", "display:none"), n.setAttribute("target", ""), n.setAttribute("method", t);
  let a = e;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((i) => i.indexOf("URL") > -1).map((i) => i.replace("URL", ""));
    for (let i of s) {
      let l = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (l.test(e) && window.g[i + "URL"]) {
        a = window.g[i + "URL"] + e.replace(l, "");
        break;
      }
    }
  }
  if (n.setAttribute("action", a), Y(r)) {
    for (let i in r)
      if (r.hasOwnProperty(i) && (r[i] || r[i] === 0 || r[i] === !1 || r[i] === "")) {
        let l = document.createElement("input");
        l.setAttribute("type", "hidden"), l.setAttribute("name", i), l.setAttribute("value", r[i]), n.appendChild(l);
      }
    n.submit();
    let s = setTimeout(() => {
      o.removeChild(n), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function yi(e, r = {}, t = "get") {
  if (r.hasOwnProperty("columns") && (r.columns === "" || r.columns === null || r.columns === void 0)) {
    Ce.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  dr(e, r, t);
}
function vi(e, r, t = !1) {
  let n;
  if (e && h(r) === "Array") {
    let o = localStorage.getItem(e);
    if (o) {
      let a = JSON.parse(decodeURI(o));
      n = r.filter((s) => s.key && a.indexOf(s.title) !== -1).map((s) => s.key);
    } else
      n = r.map((a) => a.key);
  } else
    n = [];
  return t || (n = String(n)), n;
}
function V(e) {
  return e != null && e !== "";
}
function _i(e) {
  return /^-?\d+(.\d+)?$/.test(e);
}
function wi(e, r = !1, t = "") {
  return function(n, o) {
    let a;
    if (Array.isArray(e)) {
      let l = [];
      for (let c of e)
        V(o.row[c]) && l.push(o.row[c]);
      a = l.join(t);
    } else
      typeof e == "function" ? a = e(o) : a = o.row[e];
    let s = pr(a), i = o.column._width;
    return a && s > i ? n(
      "Tooltip",
      {
        style: {
          width: "100%"
        },
        props: {
          content: a,
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
          a
        )
      ]
    ) : n("span", r && !V(a) ? "--" : a);
  };
}
function Ti(e) {
  if (Y(e)) {
    for (let r in e)
      if (e.hasOwnProperty(r) && V(e[r]))
        return !1;
    return !0;
  } else if (Array.isArray(e)) {
    for (let r of e)
      if (V(r))
        return !1;
    return !0;
  }
  return !V(e);
}
function Si(e) {
  return h(e) === "String" ? e.replace(/[^\x00-\xff]/g, "01").length : h(e) === "Number" ? (e += "", e.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function hr({
  group: e,
  condition: r,
  key: t,
  val: n,
  childKey: o = "children"
}) {
  if (h(e) !== "Array" || h(r) !== "Function" || h(t) !== "String" || h(o) !== "String")
    return !1;
  e.forEach((a) => {
    r(a) && (h(n) === "Function" ? a[t] = n(a[t]) : a[t] = n), h(a[o]) === "Array" && a[o].length > 0 && hr({
      group: a[o],
      condition: r,
      key: t,
      val: n,
      childKey: o
    });
  });
}
function $i(e) {
  let r = sessionStorage.getItem("btnPermissions");
  return r ? r.split(",").indexOf(e) > -1 : !1;
}
function gr(e) {
  return h(e) === "Number" && String(e) === "NaN";
}
function Oi(e, r = !1, t = !1) {
  if (h(e) !== "Object")
    return e;
  let n = Object.assign(e, {}), o = "";
  for (let a in n)
    if (n.hasOwnProperty(a)) {
      let s = n[a];
      s === void 0 || s === "" || h(s) === "String" && s.trim() === "" || s === null || gr(s) ? t ? r ? o += a + "=&" : n[a] = "" : delete n[a] : r && (o += a + "=" + s + "&");
    }
  return r ? o.length > 0 ? o.substr(0, o.length - 1) : "" : n;
}
function De(e) {
  let r = {};
  if (Array.isArray(e)) {
    r = [];
    for (let t of e)
      Array.isArray(t) || Y(t) ? r.push(De(t)) : V(t) && r.push(t);
  } else if (Y(e))
    for (let t in e)
      e.hasOwnProperty(t) && (Array.isArray(e[t]) || Y(e[t]) ? r[t] = De(e[t]) : V(e[t]) && (r[t] = e[t]));
  return r;
}
function xi(e) {
  const r = window.open();
  if (r) {
    r.document.write(e);
    let t = setTimeout(() => {
      r.print(), window.clearTimeout(t), t = null;
    }, 10);
  }
}
function mr(e) {
  let r = [], t = e;
  for (; e.previousSibling && (e = e.previousSibling); )
    e.nodeType === 1 && r.push(e);
  for (; t.nextSibling && (t = t.nextSibling); )
    t.nodeType === 1 && r.push(t);
  return r;
}
const br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Ve,
  dataFilterOrToUrl: Oi,
  decimalDigitsLimit: bi,
  downloadFileByFormSubmit: dr,
  fileExport: yi,
  findCollection: gi,
  formDataHeadConfig: di,
  getColumnsKeys: vi,
  hasPermission: $i,
  htmlPrint: xi,
  isEmptyValue: Ti,
  isNaN: gr,
  isNumberValue: _i,
  isValidValue: V,
  myTypeof: h,
  oneOf: mi,
  removeEmptyValue: De,
  setValByOption: hr,
  siblingElems: mr,
  stringLength: Si,
  toFormData: hi,
  toLine: pi,
  tooltipManual: wi,
  trimObj: Re
}, Symbol.toStringTag, { value: "Module" })), Ai = { class: "groupBoxRP" }, ji = ["onClick"], Ci = /* @__PURE__ */ B({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(e) {
    const r = e, t = jr();
    function n(a) {
      return a.path === r.pathName ? "active" : "";
    }
    function o(a, s) {
      a.preventDefault();
      let i = a.target;
      if (!s.children && !i.classList.contains("active")) {
        t.push(s.path);
        return;
      }
      let l = i.parentNode, c = mr(l);
      for (let u of c) {
        u.classList.remove("open");
        const f = u.querySelectorAll(".open");
        for (let p of f)
          p.classList.remove("open");
      }
      l.classList.toggle("open");
    }
    return (a, s) => {
      const i = P("sideMenuGroup", !0);
      return w(), O("ul", Ai, [
        (w(!0), O(Ft, null, Nt(r.data, (l, c) => (w(), O("li", {
          class: Z({ dropItemRP: l.children }),
          key: l.path + c
        }, [
          _("div", {
            class: Z(["menuTxtR", n(l)]),
            onClick: (u) => o(u, l),
            style: k({ paddingLeft: l.level * 20 + "px" })
          }, I(l.name || "-- no name --"), 15, ji),
          l.children ? (w(), Ge(i, {
            key: 0,
            data: l.children,
            "path-name": r.pathName
          }, null, 8, ["data", "path-name"])) : kt("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Pi = { class: "menuListR" }, Ii = /* @__PURE__ */ B({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(e, { emit: r }) {
    const t = e, n = Cr(), o = M(!0), a = M(), s = M(), i = j(() => o.value ? T("r.hideMenu") : T("r.showMenu")), l = j(() => o.value ? "ios-arrow-back" : "ios-arrow-forward");
    Sr(() => {
      let f = localStorage.getItem("menuDisplayR") || "";
      f !== "" ? o.value = JSON.parse(f) : (o.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), Lt(
      () => n.path,
      (f) => {
        a.value = f, $r(u);
      },
      { immediate: !0 }
    );
    function c() {
      o.value = !o.value, localStorage.setItem("menuDisplayR", JSON.stringify(o.value)), r("on-change", o.value);
    }
    function u() {
      let f = s.value.querySelectorAll(".dropItemRP");
      for (let p of f)
        p.querySelector(".active") && !p.classList.contains("open") && p.classList.add("open");
    }
    return (f, p) => {
      const $ = P("Icon");
      return w(), O("div", {
        ref_key: "menuRef",
        ref: s,
        class: "menuBoxRP"
      }, [
        D(_("div", Pi, [
          E(Ci, {
            data: t.data,
            pathName: d(a)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ee, d(o)]
        ]),
        E($, {
          type: d(l),
          size: 25,
          class: Z([{ showIco: !d(o) }, "menuShowHideIco"]),
          title: d(i),
          onClick: c,
          color: d(o) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Ei = ["title"], Bi = /* @__PURE__ */ B({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = e;
    function n(o) {
      t.disabled || r("click", o);
    }
    return (o, a) => {
      const s = P("Icon"), i = Mt("has");
      return D((w(), O("div", {
        class: Z(["tableBtnsG", { disabled: t.disabled }]),
        onClick: n,
        title: t.title || d(T)("r.button")
      }, [
        E(s, {
          type: t.icon,
          size: t.size
        }, null, 8, ["type", "size"])
      ], 10, Ei)), [
        [i, t.has]
      ]);
    };
  }
}), ki = { class: "contentX" }, Mi = { class: "arrowA" }, Fi = /* @__PURE__ */ B({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(e) {
    const r = e, t = M(!0), n = j(() => t ? "background:" + r.bg || "transparent" : "");
    return (o, a) => {
      const s = P("Icon");
      return w(), O("div", {
        style: k(d(n))
      }, [
        D(_("div", ki, [
          de(o.$slots, "default")
        ], 512), [
          [ee, d(t)]
        ]),
        _("div", Mi, [
          _("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (i) => t.value = !d(t))
          }, [
            E(s, {
              type: d(t) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Ni = { class: "contentZ" }, Li = /* @__PURE__ */ B({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const t = e, n = j({
      get() {
        return t.modelValue;
      },
      set(a) {
        r("update:modelValue", a);
      }
    }), o = j(() => n.value ? "background:" + t.bg : "");
    return (a, s) => (w(), O("div", {
      style: k(d(o))
    }, [
      D(_("div", Ni, [
        de(a.$slots, "default")
      ], 512), [
        [ee, d(n)]
      ])
    ], 4));
  }
});
let Ue = [], He = [];
const zi = function(e) {
  e && e.beforeEach ? e.beforeEach(() => {
    Ue.map((r) => {
      window.clearTimeout(r);
    }), He.map((r) => {
      window.clearInterval(r);
    }), Ue.length = 0, He.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, tt = function(e, r) {
  let t = window.setTimeout(e, r);
  return Ue.push(t), t;
}, yr = function(e, r) {
  let t = window.setInterval(e, r);
  return He.push(t), t;
}, Ri = /* @__PURE__ */ B({
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
  setup(e, { emit: r }) {
    const t = e;
    let n = !1;
    const o = j({
      get() {
        return t.modelValue;
      },
      set(l) {
        r("update:modelValue", l);
      }
    }), a = j({
      get() {
        return t.open;
      },
      set(l) {
        r("on-toggle", l);
      }
    }), s = j(() => a.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      n || (n = !0, r("on-search", o.value), tt(() => {
        n = !1;
      }, 2e3));
    }
    return (l, c) => {
      const u = P("Input"), f = P("icon");
      return w(), O("div", {
        class: "tableSearchV",
        style: k({ position: t.fixed ? "fixed" : "absolute", right: t.right, top: t.top })
      }, [
        de(l.$slots, "default", {}, () => [
          E(u, {
            modelValue: d(o),
            "onUpdate:modelValue": c[0] || (c[0] = (p) => Be(o) ? o.value = p : null),
            style: k({ width: t.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: t.placeholder || d(T)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        D(_("span", {
          class: "sbt",
          onClick: c[1] || (c[1] = (p) => a.value = !d(a)),
          style: k({ color: t.btnColor })
        }, [
          E(f, {
            type: d(s),
            color: t.btnColor
          }, null, 8, ["type", "color"]),
          he(I(d(T)("r.adSearch")), 1)
        ], 4), [
          [ee, t.showBtn]
        ])
      ], 4);
    };
  }
}), Vi = { class: "tabSetF" }, Di = { class: "topCheck" }, Ui = /* @__PURE__ */ B({
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
  setup(e, { emit: r }) {
    const t = e, n = M(!0), o = M(!1), a = M(!1), s = M([]), i = j(() => {
      let g = T("r.unknown");
      return t.modelValue.length > s.value.length && (s.value = ye(t.modelValue)), s.value.map((m) => {
        let v = { label: m && m.title || g };
        return m && m.disableShowSetting && (v.disabled = !0), v;
      });
    }), l = j(() => i.value.filter((g) => g.disabled)), c = j({
      get() {
        return t.modelValue.map((g) => g && g.title || T("r.unknown"));
      },
      set(g) {
        let m = s.value.filter((v) => {
          for (let N of g)
            if (N === v.title)
              return !0;
          return !1;
        });
        r("update:modelValue", m);
      }
    }), { locale: u } = Pr();
    Or(() => {
      let g = T("r.unknown"), m;
      u.value ? m = localStorage.getItem(t.sKey + "_" + u.value) : m = localStorage.getItem(t.sKey), m ? c.value = JSON.parse(decodeURI(m)) : t.defaultCheck && (c.value = t.modelValue.filter((v) => v.showSettingCheck).map((v) => v && v.title || g));
    });
    function f(g) {
      g.length === i.value.length ? (n.value = !1, o.value = !0) : g.length > l.value.length ? (n.value = !0, o.value = !1) : (n.value = !1, o.value = !1);
    }
    Lt(() => c.value, f, {
      immediate: !0,
      deep: !0
    });
    function p() {
      a.value || (a.value = !0);
    }
    function $() {
      u.value ? localStorage.setItem(t.sKey + "_" + u.value, encodeURI(JSON.stringify(c.value))) : localStorage.setItem(t.sKey, encodeURI(JSON.stringify(c.value))), a.value = !1;
    }
    function x() {
      n.value ? o.value = !1 : o.value = !o.value, n.value = !1, o.value ? c.value = i.value.map((g) => g.label) : c.value = l.value.map((g) => g.label);
    }
    return (g, m) => {
      const v = P("Icon"), N = P("Checkbox"), nt = P("CheckboxGroup");
      return w(), O("div", Vi, [
        _("div", {
          class: "tabSetBt",
          onClick: p
        }, [
          E(v, {
            type: "md-settings",
            size: "17"
          }),
          _("span", null, I(d(T)("r.tabSetting")), 1)
        ]),
        D(_("div", {
          class: "tabSetCard",
          style: k({ top: g.top, right: g.right, width: g.width, backgroundColor: g.bg })
        }, [
          _("div", Di, [
            E(N, {
              indeterminate: d(n),
              modelValue: d(o),
              "onUpdate:modelValue": m[0] || (m[0] = (z) => Be(o) ? o.value = z : null),
              onClick: xr(x, ["prevent"])
            }, {
              default: _e(() => [
                he(I(d(T)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            _("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: $
            }, I(d(T)("r.confirm")), 1)
          ]),
          E(nt, {
            modelValue: d(c),
            "onUpdate:modelValue": m[1] || (m[1] = (z) => Be(c) ? c.value = z : null)
          }, {
            default: _e(() => [
              (w(!0), O(Ft, null, Nt(d(i), (z, Tr) => (w(), Ge(N, {
                class: "setItem",
                label: z && z.label,
                key: "tabSet_" + g.sKey + Tr,
                disabled: z && z.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [ee, d(a)]
        ])
      ]);
    };
  }
}), jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FullPop: Rr,
  HeaderBt: Rt,
  Hello: Dr,
  IconTxtBtn: Ur,
  Page404: Jr,
  ShowHidePanel: Fi,
  ShowHidePanelB: Li,
  SideMenu: Ii,
  TableIconBtn: Bi,
  TableSearch: Ri,
  TableSetting: Ui
}, Symbol.toStringTag, { value: "Module" }));
let J = 0, pe = document.createElement("div");
pe.setAttribute("class", "spinModal");
pe.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(pe);
};
function Ct(e) {
  e ? pe.classList.add("show") : pe.classList.remove("show");
}
function vr(e) {
  let r = J;
  e ? J++ : J > 0 && J--, r !== J && (J === 0 ? Ct(!1) : r === 0 && Ct(!0));
}
const Hi = window.location.origin;
let X = null;
const Pt = (...e) => te.apply(X, e);
let C = ke.create({
  baseURL: Hi,
  withCredentials: !0
  // 允许携带cookie
});
function Gi() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
C.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
);
function It() {
  if (C.store)
    if (typeof C.store == "function") {
      const e = C.store();
      e.logout && e.logout();
    } else
      C.store.dispatch("logout");
  else
    Gi();
}
C.interceptors.response.use(
  (e) => (X && e && e.data && (e.data.code === 403 || e.data.code === 409) && X.messageBox({
    content: Pt("r.http." + e.data.code),
    onOk: It
  }), e),
  (e) => (X && e && e.response && (e.response.status === 403 || e.response.status === 409) && X.messageBox({
    content: Pt("r.http." + e.response.status),
    onOk: It
  }), console.warn("请求出错：", e), Promise.reject(e))
);
function R(e, r, t, n) {
  n && n.spin && vr(!1);
  let o = !0, a = e && e.data;
  if (a) {
    t = t || [];
    for (let s of t)
      a = a[s], o = o && a;
    return o ? a : (r && console.warn(r), !1);
  }
  return r && console.warn(r), !1;
}
function qi(e, r, t, n, o, a, s) {
  return new Promise((i, l) => {
    switch (e) {
      case "get":
        C.get(r, { params: t }).then((u) => {
          let f = R(u, n, o, a);
          f ? i(f) : l(u);
        }).catch((u) => {
          R({}, n, o, a), l(u);
        });
        break;
      case "delete":
        let c = s ? "params" : "data";
        C.delete(r, { [c]: t }).then((u) => {
          let f = R(u, n, o, a);
          f ? i(f) : l(u);
        }).catch((u) => {
          R({}, n, o, a), l(u);
        });
        break;
      case "post":
        C.post(r, t, a).then((u) => {
          let f = R(u, n, o, a);
          f ? i(f) : l(u);
        }).catch((u) => {
          R({}, n, o, a), l(u);
        });
        break;
      case "put":
        C.put(r, t, a).then((u) => {
          let f = R(u, n, o, a);
          f ? i(f) : l(u);
        }).catch((u) => {
          R({}, n, o, a), l(u);
        });
        break;
    }
  });
}
function me(e, r, t = {}, n, o, a, s) {
  return new Promise((i, l) => {
    if (r) {
      a && a.spin && vr(!0);
      let c = r;
      if (window && window.hasOwnProperty("g")) {
        const p = window.g;
        let $ = Object.keys(p).filter((x) => x.indexOf("URL") > -1).map((x) => x.replace("URL", ""));
        for (let x of $) {
          let g = new RegExp("^/" + x + "(?=/.*$)", "i");
          if (g.test(r) && p[x + "URL"]) {
            c = p[x + "URL"] + r.replace(g, "");
            break;
          }
        }
      }
      let u;
      if (a && a.headers && a.headers["Content-Type"] === "multipart/form-data")
        u = t;
      else if (t && !ve(t))
        if (Array.isArray(t)) {
          u = [];
          for (let p of t)
            (p || p === 0 || p === !1 || p === "" && a && !a.noEmptyStr) && u.push(p);
        } else {
          u = {};
          for (let p in t)
            t.hasOwnProperty(p) && (t[p] || t[p] === 0 || t[p] === !1 || t[p] === "" && a && !a.noEmptyStr) && (u[p] = t[p]);
        }
      let f = e.toLowerCase();
      qi(f, c, u, n, o, a, s).then((p) => {
        i(p);
      }).catch((p) => {
        l(p);
      });
    } else
      console.error("没有请求地址:url"), l("没有请求地址:url");
  });
}
const rt = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(e, r) {
    C.store = e, X = r.config.globalProperties;
  },
  post(e, r, t, n, o) {
    return new Promise((a, s) => {
      me("post", e, r, t, n, o).then((i) => {
        a(i);
      }).catch((i) => {
        s(i);
      });
    });
  },
  put(e, r, t, n, o) {
    return new Promise((a, s) => {
      me("put", e, r, t, n, o).then((i) => {
        a(i);
      }).catch((i) => {
        s(i);
      });
    });
  },
  get(e, r, t, n, o) {
    return new Promise((a, s) => {
      me("get", e, r, t, n, o).then((i) => {
        a(i);
      }).catch((i) => {
        s(i);
      });
    });
  },
  delete(e, r, t, n, o, a = !0) {
    return new Promise((s, i) => {
      me("delete", e, r, t, n, o, a).then((l) => {
        s(l);
      }).catch((l) => {
        i(l);
      });
    });
  },
  all: ke.all,
  spread: ke.spread,
  config: C
};
let le = !1;
function _r({
  height: e,
  width: r = 416,
  title: t,
  content: n,
  onOk: o,
  onCancel: a,
  okText: s,
  cancelText: i,
  noWarnIcon: l,
  footerAlign: c,
  cancelBt: u = !0
}) {
  const f = (...g) => te.apply(this, g);
  let $ = (e && Number(e) - 90 > 100 ? Number(e) - 90 + "px" : 0) || "100px", x = h(n) === "String";
  W.warning({
    width: r,
    footerHide: !0,
    render: () => A(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: $
        }
      },
      [
        A(
          "div",
          {
            class: "containerN"
          },
          [
            A(
              "div",
              {
                class: "titleN"
              },
              [
                A("span", t || f("r.info.title")),
                A(
                  Pe,
                  {
                    class: "fr closeN",
                    type: "text",
                    onclick() {
                      le || W.remove();
                    }
                  },
                  [
                    A("i", {
                      class: "ivu-icon ivu-icon-ios-close",
                      style: {
                        fontSize: "30px"
                      }
                    })
                  ]
                )
              ]
            ),
            A(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: x ? "center" : "left"
                }
              },
              [
                A("i", {
                  class: x && !l ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                A("div", { class: "msgBoxConO" }, n || f("r.info.text"))
              ]
            ),
            A(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: c || "center"
                }
              },
              [
                A(
                  Pe,
                  {
                    class: "okBtN",
                    onclick(g) {
                      var m;
                      if (o && typeof o == "function") {
                        const v = o();
                        if (v && h(v) === "Promise") {
                          le = !0;
                          const N = g && (g.currentTarget || g.target);
                          N && (N.classList.add("ivu-btn-loading"), N.nextSibling.setAttribute("disabled", "disabled"), ((m = N.parentElement) == null ? void 0 : m.parentElement.querySelector(".titleN .closeN")).classList.add("disabled")), Promise.resolve(v).then(() => {
                            le = !1, W.remove();
                          }).catch(() => {
                            le = !1, W.remove();
                          });
                        } else
                          W.remove();
                      }
                    }
                  },
                  [
                    A("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    A("span", s || f("r.confirm"))
                  ]
                ),
                A(
                  Pe,
                  {
                    class: ["cancelBtN", !u && "hide"],
                    onclick() {
                      le || (W.remove(), h(a) === "Function" && a && a());
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
function wr(e, r, t, n) {
  const o = (...a) => te.apply(this, a);
  Ce.call(this, {
    title: e || o("r.info.title"),
    text: r || o("r.info.text"),
    icon: t || "warning",
    onOk: n,
    buttons: [o("r.cancel")]
  });
}
const Et = {
  $fetch: rt,
  $swal: Ce,
  $swalConfirm: wr,
  messageBox: _r,
  setInterval: yr,
  setTimeout: tt,
  ...br
}, Wi = function(e, r = {}) {
  rt.init(r.useStore || r.store, e), r.locale && Te.use(r.locale), r.i18n && Te.i18n(r.i18n), r.router && zi(r.router), r.notRegistryGlobal || (Object.keys(jt).forEach((t) => {
    e.component(t) || e.component(t, jt[t]);
  }), Object.keys(Et).forEach((t) => {
    e.config.globalProperties[t] = Et[t];
  })), e.directive("has") || e.directive("has", (t, n) => {
    n.value && !e.config.globalProperties.hasPermission(n.value) && (t.style.display = "none");
  }), e.directive("loadmore") || e.directive("loadmore", (t, n) => {
    let o;
    n.arg ? o = t.querySelector("." + n.arg) : o = t.querySelector(".ivu-select-dropdown") || t, o.addEventListener("scroll", function() {
      o.scrollTop > 0 && o.scrollHeight - o.scrollTop <= o.clientHeight && n.value();
    });
  });
}, Ji = Te.use, Xi = Te.i18n, nl = {
  locale: Ji,
  i18n: Xi,
  install: Wi,
  ...br,
  ...fi,
  $fetch: rt,
  $swal: Ce,
  $swalConfirm: wr,
  messageBox: _r,
  setInterval: yr,
  setTimeout: tt
};
export {
  rt as $fetch,
  Ce as $swal,
  wr as $swalConfirm,
  Rr as FullPop,
  Rt as HeaderBt,
  Dr as Hello,
  Ur as IconTxtBtn,
  Jr as Page404,
  Fi as ShowHidePanel,
  Li as ShowHidePanelB,
  Ii as SideMenu,
  Bi as TableIconBtn,
  Ri as TableSearch,
  Ui as TableSetting,
  Ve as clearObj,
  Oi as dataFilterOrToUrl,
  bi as decimalDigitsLimit,
  nl as default,
  dr as downloadFileByFormSubmit,
  li as downloadFileReaderFile,
  ci as emptyInput,
  fr as fakeALinkClick,
  yi as fileExport,
  gi as findCollection,
  ze as findPath,
  di as formDataHeadConfig,
  vi as getColumnsKeys,
  ai as getFileSrc,
  ur as getFileTypeByName,
  ii as getFileTypeIconByName,
  pr as getStringWidth,
  $i as hasPermission,
  oi as htmlDecode,
  ni as htmlEncode,
  xi as htmlPrint,
  Ti as isEmptyValue,
  si as isImgByFile,
  gr as isNaN,
  _i as isNumberValue,
  V as isValidValue,
  _r as messageBox,
  h as myTypeof,
  mi as oneOf,
  De as removeEmptyValue,
  yr as setInterval,
  tt as setTimeout,
  hr as setValByOption,
  mr as siblingElems,
  ui as stopBubbling,
  Si as stringLength,
  hi as toFormData,
  ri as toHump,
  pi as toLine,
  wi as tooltipManual,
  Re as trimObj
};
//# sourceMappingURL=plugRQw.js.map
