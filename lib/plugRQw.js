var ea = Object.defineProperty;
var ta = (t, i, n) => i in t ? ea(t, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[i] = n;
var st = (t, i, n) => (ta(t, typeof i != "symbol" ? i + "" : i, n), n);
import { getCurrentInstance as _t, defineComponent as fe, resolveComponent as Z, openBlock as x, createElementBlock as D, normalizeClass as xe, normalizeStyle as oe, createBlock as Q, createCommentVNode as ce, renderSlot as Ae, ref as N, computed as G, withDirectives as me, unref as f, createElementVNode as F, toDisplayString as E, createVNode as Y, withCtx as ee, createTextVNode as ge, vShow as ve, resolveDirective as Wt, onMounted as Me, nextTick as Le, onUpdated as la, onUnmounted as _l, isRef as Pe, h as Te, Fragment as be, renderList as Ce, onBeforeMount as aa, watch as _e, onBeforeUnmount as Vl, Teleport as na, withModifiers as Ot, mergeProps as ot, shallowRef as yt, triggerRef as oa, createSlots as nt, toRef as ia, toValue as Tt } from "vue";
import sa from "deepmerge";
import { debounce as jt, isPlainObject as at, cloneDeep as ue, isObject as ra, isFunction as ua, isEmpty as Oe, isNumber as dt, isString as qt, last as vt, isEqual as ct, first as At, find as Pt, indexOf as ol, findIndex as Cl, remove as da } from "lodash-es";
import mt from "sweetalert";
import { Tooltip as ca, Modal as je, Button as Bt, TableColumnConfig as fa, Radio as pa, Input as ma, Message as il, Icon as ha } from "view-ui-plus";
import { useRouter as ya, useRoute as Sl } from "vue-router";
import va from "popper.js";
import It from "axios";
import sl from "@amap/amap-jsapi-loader";
import ga from "ar-cascader";
import { Toolbar as ba, Editor as ka } from "@wangeditor/editor-for-vue";
import rt from "moment";
import { Boot as wa } from "@wangeditor/editor";
import _a from "vue-json-viewer";
const Tl = {
  r: {
    locale: "zh-CN",
    testMsg: "测试国际化",
    confirm: "确定",
    save: "保存",
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
    fullImg: "该文件不支持图片形式预览",
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
    showMenu: "显示菜单",
    print: "打印",
    close: "关闭",
    help: "帮助",
    printGuide: {
      1: "鼠标停留在表头列右边框，出现拖动图标，按下鼠标拖动可设置列宽。",
      2: "点击“列表显示设置”，可选择需要打印的列，选择完需点击“确定”按钮。",
      3: "页面有A4灰色参考线，将打印内容右边缘调至参考线区间，打印机默认设置时可将表格内容铺满A4纸，表格越宽字体将越小。",
      4: "将此页面地址复制到浏览器地址栏，打开的页面将不可用。",
      5: "未到此线内容将无法铺满纸张",
      6: "超过此线打印内容将不完整",
      7: "A4 纵向参考线",
      8: "A4 横向参考线",
      9: "复制的页面无法使用该打印功能。",
      10: "鼠标停留在打印内容顶部矩形条右边框，出现拖动图标，按下鼠标拖动可设置打印内容宽度。"
    },
    page: "条/页",
    total: "共",
    items: "条",
    notSave: "您未保存，是否保存？",
    last: "上一张",
    next: "下一张"
  }
}, Va = /(%|){([0-9a-zA-Z_]+)}/g;
function Ca() {
  function t(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }
  function i(n, ...e) {
    let a;
    return e.length === 1 && typeof e[0] == "object" && (a = e[0]), (!a || !a.hasOwnProperty) && (a = {}), n === void 0 ? "" : n.replace(Va, (o, s, d, r) => {
      let b;
      return n[r - 1] === "{" && n[r + o.length] === "}" ? d : (b = t(a, d) ? a[d] : null, b ?? "");
    });
  }
  return i;
}
const Sa = Ca();
let gt = Tl;
const Ta = {
  zh: Tl
};
let rl, ul = {}, Ie, Ba = function(t, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, i);
  if (Ie && Ie.global)
    return Ie.global.t(t, i);
  if (Ie && Ie.locale) {
    if (!ul[Ie.locale] || rl != Ie.locale) {
      ul[Ie.locale] = !0;
      let n = Ie.getLocaleMessage(Ie.locale) || {}, e = sa(Ta[Ie.locale], n, { clone: !0 });
      gt = e, Ie.setLocaleMessage(Ie.locale, e), rl = Ie.locale;
    }
    return Ie.hlang(t, i);
  }
};
const Ge = function(t, i) {
  let n = Ba.apply(this, [t, i]);
  if (n != null)
    return n;
  const e = t.split(".");
  let a = gt;
  for (let o = 0, s = e.length; o < s; o++) {
    const d = e[o];
    if (n = a[d], o === s - 1)
      return Sa(n, i);
    if (!n)
      return "";
    a = n;
  }
  return "";
}, xa = function(t) {
  gt = t || gt;
}, La = function(t) {
  Ie = t;
}, bt = {
  use: xa,
  t: Ge,
  i18n: La
};
function O(t, i) {
  var e, a, o;
  const n = (o = (a = (e = _t()) == null ? void 0 : e.appContext) == null ? void 0 : a.config) == null ? void 0 : o.globalProperties;
  return Ge.apply(n, [t, i]);
}
const Bl = /* @__PURE__ */ fe({
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
  setup(t, { emit: i }) {
    const n = t, e = i;
    function a() {
      n.disabled || e("click");
    }
    return (o, s) => {
      const d = Z("Icon");
      return x(), D("div", {
        class: xe({ headerBtCTM: !0, withIconCTM: n.icon || n.withIcon, disabled: n.disabled }),
        style: oe({ color: n.color, borderLeftColor: n.borderColor }),
        onClick: a
      }, [
        n.icon ? (x(), Q(d, {
          key: 0,
          size: n.iconSize,
          type: n.icon
        }, null, 8, ["size", "type"])) : ce("", !0),
        Ae(o.$slots, "default")
      ], 6);
    };
  }
});
function Ve() {
  const { appContext: t } = _t();
  return t.config.globalProperties;
}
const Oa = { class: "headerTxtAM" }, Aa = { class: "contentAM" }, Pa = /* @__PURE__ */ fe({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.fontSizeBase;
    } },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: i, emit: n }) {
    const e = t, a = n;
    let o = N(!1);
    const s = G(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), d = G(() => ({ zIndex: e.zIndex }));
    function r() {
      o.value = !0, a("on-open");
    }
    function b(m) {
      o.value = !1, a("on-close", m === !0);
    }
    return i({
      open: r,
      close: b
    }), (m, p) => me((x(), D("div", {
      class: "fullScreenPopBoxAM",
      style: oe(f(d))
    }, [
      F("div", {
        class: "headerAM",
        style: oe({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: f(s) })
      }, [
        F("span", Oa, E(m.title || f(O)("r.title")), 1),
        Y(Bl, {
          icon: "md-return-left",
          onClick: b
        }, {
          default: ee(() => [
            ge(E(f(O)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      F("div", Aa, [
        Ae(m.$slots, "default")
      ])
    ], 4)), [
      [ve, f(o)]
    ]);
  }
}), Ia = { class: "msg" }, $a = /* @__PURE__ */ fe({
  __name: "Hello",
  setup(t) {
    let i = N("Greetings from Ricky.");
    return (n, e) => (x(), D("span", Ia, E(f(i)), 1));
  }
}), $t = /* @__PURE__ */ fe({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Ve().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const n = t, e = i, a = G(() => {
      var s;
      return Math.floor(n.size / 17 * ((s = Ve()) == null ? void 0 : s.fontSizeBase)) + "px";
    });
    function o(s) {
      n.disabled || e("click", s);
    }
    return (s, d) => {
      const r = Z("Icon"), b = Wt("has");
      return me((x(), D("div", {
        class: xe(["tabTopBtnsT", { disabled: n.disabled }]),
        onClick: o,
        style: oe({ "font-size": f(a) })
      }, [
        Y(r, {
          type: n.icon,
          size: n.size
        }, null, 8, ["type", "size"]),
        ge(" " + E(n.name || f(O)("r.button")), 1)
      ], 6)), [
        [b, s.has]
      ]);
    };
  }
}), Fa = { class: "c404K" }, Ra = /* @__PURE__ */ F("div", { class: "t404" }, "404", -1), Ka = { class: "ct404" }, Ma = { class: "p404" }, za = /* @__PURE__ */ fe({
  __name: "Page404",
  setup(t) {
    const n = _t().appContext.config.globalProperties.$router;
    function e() {
      n.go(-1);
    }
    return (a, o) => {
      const s = Z("Button");
      return x(), D("div", Fa, [
        Ra,
        F("div", Ka, "UH OH! " + E(f(O)("r.pageNotFound")), 1),
        F("div", Ma, E(f(O)("r.notFoundMsg")), 1),
        Y(s, {
          class: "bt404",
          onClick: e
        }, {
          default: ee(() => [
            ge(E(f(O)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Re(t, i, n, e = !0) {
  const a = (...o) => Ge.apply(this, o);
  return new Promise((o, s) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let d = a("r.confirm"), r = a("r.cancel"), b = !1, m = "swalConfirmBt", p = "swalCancelBt";
      const c = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let g = "";
      t.text && c.test(J(t.text)) ? g = "content" : t.text && J(t.text) === "String" && (g = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (r = t.buttons.cancel.text) && (b = !0), t.buttons.cancel.className && (p = t.buttons.cancel.className), t.buttons.confirm.text && (d = t.buttons.confirm.text), t.buttons.confirm.className && (m = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (r = t.buttons[0], b = !0), t.buttons[1] && (d = t.buttons[1]))), mt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [g]: t.text,
        buttons: {
          confirm: {
            text: d,
            value: !0,
            visible: !0,
            className: m
          },
          cancel: {
            text: r,
            value: null,
            visible: b,
            className: p
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((k) => {
        k && typeof t.onOk == "function" && t.onOk(), o(k);
      }).catch((k) => {
        s(k);
      });
    } else if (typeof t == "string") {
      let d = "";
      if (i)
        switch (typeof i) {
          case "string":
            d = "text";
            break;
          case "object":
            d = "content";
            break;
        }
      mt({
        title: t,
        [d]: i || "",
        icon: n || "",
        className: "swalBoxX",
        closeOnClickOutside: e,
        buttons: {
          confirm: {
            text: a("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((r) => {
        o(r);
      }).catch((r) => {
        s(r);
      });
    } else if (typeof t == "boolean")
      !t && mt.close && mt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
const Da = { class: "tableTooltip" }, Ua = /* @__PURE__ */ fe({
  __name: "TableTooltip",
  props: {
    content: { type: [String, Number, Boolean, null] }
  },
  setup(t) {
    const i = t, n = N(), e = N(), a = N(!0);
    let o = null;
    const s = N(200);
    function d() {
      const r = a.value ? n.value : e.value;
      if (!r)
        return;
      let b = document.createRange();
      b.setStart(r, 0), b.setEnd(r, r.childNodes.length);
      const m = b.getBoundingClientRect().width;
      s.value = r.offsetWidth * 2, a.value = m < r.offsetWidth, b = null;
    }
    return Me(() => {
      d(), o = jt(() => {
        Le(function() {
          d();
        });
      }, 200), window.addEventListener("resize", o);
    }), la(d), _l(() => {
      window.removeEventListener("resize", o);
    }), (r, b) => (x(), D("div", Da, [
      f(a) ? (x(), D("span", {
        key: 0,
        ref_key: "spanRef",
        ref: n,
        class: "contentText"
      }, E(i.content), 513)) : (x(), Q(f(ca), {
        key: 1,
        content: typeof i.content == "boolean" ? String(i.content) : i.content ?? "",
        "max-width": f(s),
        transfer: ""
      }, {
        default: ee(() => [
          F("span", {
            ref_key: "contentRef",
            ref: e,
            class: "contentText"
          }, E(i.content), 513)
        ]),
        _: 1
      }, 8, ["content", "max-width"]))
    ]));
  }
}), Ft = typeof window < "u";
function Ne(t, i) {
  Pe(t) ? t.value = i : t = i;
}
function J(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function xl(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function kt(t) {
  let i = J(t);
  if (i === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = J(t[n]);
        e === "String" ? t[n] = t[n].trim() : (e === "Object" || e === "Array") && kt(t[n]);
      }
  } else if (i === "Array")
    for (let n = 0, e = t.length; n < e; n++) {
      let a = J(t[n]);
      a === "String" ? t[n] = t[n].trim() : (a === "Array" || a === "Object") && kt(t[n]);
    }
  return t;
}
function Rt(t, i = []) {
  if (J(t) === "Array")
    return t.forEach((n, e) => {
      switch (J(n)) {
        case "Array":
        case "Object":
          Rt(n);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (J(t) === "Object") {
    for (let n in t)
      if (t.hasOwnProperty(n)) {
        let e = !0;
        for (let a of i)
          if (a === n) {
            e = !1;
            break;
          }
        if (e)
          switch (J(t[n])) {
            case "Array":
            case "Object":
              Rt(t[n]);
              break;
            default:
              t[n] = null;
          }
      }
    return t;
  } else
    return t;
}
const Na = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Ea(t) {
  let i = new FormData();
  for (let n in t)
    t.hasOwnProperty(n) && t[n] !== null && i.append(n, t[n]);
  return i;
}
function et(t, i, n = !1) {
  if (!t || !i)
    return !1;
  let e, a = "notFoundC", o = function(s, d) {
    if (Array.isArray(s)) {
      if (J(d) === "Function" && d(s))
        return a = s, [];
      for (let r of s) {
        if (a !== "notFoundC")
          break;
        if (J(d) === "Function" && d(r) || r === d)
          return a = r, [s.indexOf(r)];
        if (J(r) === "Array" || J(r) === "Object") {
          let b = o(r, d);
          if (b !== void 0)
            return [s.indexOf(r), ...b];
        }
      }
    } else if (J(s) === "Object") {
      if (J(d) === "Function" && d(s))
        return a = s, [];
      for (let r in s) {
        if (a !== "notFoundC")
          break;
        if (s.hasOwnProperty(r)) {
          if (J(d) === "Function" && d(r) || s[r] === d)
            return a = s[r], [r];
          if (J(s[r]) === "Object" || J(s[r]) === "Array") {
            let b = o(s[r], d);
            if (b !== void 0)
              return [r, ...b];
          }
        }
      }
    }
  };
  return e = o(t, i), n ? e || !1 : a === "notFoundC" ? !1 : a;
}
function Ga(t, i) {
  for (let n = 0, e = i.length; n < e; n++)
    if (t === i[n])
      return !0;
  return !1;
}
function Ha(t, i = 2) {
  let n = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), e = t && String(t) || "";
  return n.test(e) ? Number(e.replace(n, "$1")) : t;
}
function Ll(t, i = {}, n = "get") {
  let e = document.createElement("form"), a = document.getElementsByTagName("body")[0];
  a.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", n);
  let o = t;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((d) => {
      var r;
      return ((r = d == null ? void 0 : d.indexOf) == null ? void 0 : r.call(d, "URL")) > -1;
    }).map((d) => {
      var r;
      return (r = d.replace) == null ? void 0 : r.call(d, "URL", "");
    });
    for (let d of s) {
      let r = new RegExp("^/" + d + "(?=/.*$)", "i");
      if (r.test(t) && window.g[d + "URL"]) {
        o = window.g[d + "URL"] + t.replace(r, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", o), at(i)) {
    for (let d in i)
      if (i.hasOwnProperty(d) && (i[d] || i[d] === 0 || i[d] === !1 || i[d] === "")) {
        let r = document.createElement("input");
        r.setAttribute("type", "hidden"), r.setAttribute("name", d), r.setAttribute("value", i[d]), e.appendChild(r);
      }
    e.submit();
    let s = setTimeout(() => {
      a.removeChild(e), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Wa(t, i = {}, n = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    Re.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Ll(t, i, n);
}
function ja(t, i, n = !1) {
  let e;
  if (t && J(i) === "Array") {
    let a = localStorage.getItem(t);
    if (a) {
      let o = JSON.parse(decodeURI(a));
      e = i.filter((s) => {
        var d;
        return (s == null ? void 0 : s.key) && ((d = o == null ? void 0 : o.indexOf) == null ? void 0 : d.call(o, s.title)) !== -1;
      }).map((s) => s.key);
    } else
      e = i.map((o) => o == null ? void 0 : o.key);
  } else
    e = [];
  return n || (e = String(e)), e;
}
function Be(t) {
  return t != null && t !== "";
}
function qa(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Ol(t, i = !1, n = "") {
  return function(e, a) {
    var s, d;
    let o;
    if (Array.isArray(t)) {
      let r = [];
      for (let b of t)
        Be((s = a.row) == null ? void 0 : s[b]) && r.push(a.row[b]);
      o = r.join(n);
    } else
      typeof t == "function" ? o = t(a) : o = (d = a.row) == null ? void 0 : d[t];
    return Te(Ua, { content: i ? o === "" ? "--" : o ?? "--" : o });
  };
}
function Ja(t) {
  if (at(t)) {
    for (let i in t)
      if (t.hasOwnProperty(i) && Be(t[i]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let i of t)
      if (Be(i))
        return !1;
    return !0;
  }
  return !Be(t);
}
function Ya(t) {
  return J(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : J(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function lt({
  group: t,
  condition: i,
  key: n,
  val: e,
  childKey: a = "children"
}) {
  if (J(t) !== "Array" || J(i) !== "Function" || J(n) !== "String" || J(a) !== "String")
    return !1;
  t.forEach((o) => {
    i(o) && (J(e) === "Function" ? o[n] = e(o[n]) : o[n] = e), J(o[a]) === "Array" && o[a].length > 0 && lt({
      group: o[a],
      condition: i,
      key: n,
      val: e,
      childKey: a
    });
  });
}
function Al(t) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(t) > -1 : !1;
}
function Pl(t) {
  return J(t) === "Number" && String(t) === "NaN";
}
function Xa(t, i = !1, n = !1) {
  if (J(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), a = "";
  for (let o in e)
    if (e.hasOwnProperty(o)) {
      let s = e[o];
      s === void 0 || s === "" || J(s) === "String" && s.trim() === "" || s === null || Pl(s) ? n ? i ? a += o + "=&" : e[o] = "" : delete e[o] : i && (a += o + "=" + s + "&");
    }
  return i ? a.length > 0 ? a.substring(0, a.length - 1) : "" : e;
}
function Kt(t) {
  let i = {};
  if (Array.isArray(t)) {
    i = [];
    for (let n of t)
      Array.isArray(n) || at(n) ? i.push(Kt(n)) : Be(n) && i.push(n);
  } else if (at(t))
    for (let n in t)
      t.hasOwnProperty(n) && (Array.isArray(t[n]) || at(t[n]) ? i[n] = Kt(t[n]) : Be(t[n]) && (i[n] = t[n]));
  return i;
}
function Qa(t) {
  const i = window.open();
  if (i) {
    i.document.write(t);
    let n = setTimeout(() => {
      i.print(), window.clearTimeout(n), n = null;
    }, 10);
  }
}
function Il(t) {
  let i = [], n = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && i.push(t);
  for (; n.nextSibling && (n = n.nextSibling); )
    n.nodeType === 1 && i.push(n);
  return i;
}
const Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Rt,
  dataFilterOrToUrl: Xa,
  decimalDigitsLimit: Ha,
  downloadFileByFormSubmit: Ll,
  fileExport: Wa,
  findCollection: et,
  formDataHeadConfig: Na,
  getColumnsKeys: ja,
  hasPermission: Al,
  htmlPrint: Qa,
  isClient: Ft,
  isEmptyValue: Ja,
  isNaN: Pl,
  isNumberValue: qa,
  isValidValue: Be,
  myTypeof: J,
  oneOf: Ga,
  removeEmptyValue: Kt,
  setValByOption: lt,
  setValue: Ne,
  siblingElems: Il,
  stringLength: Ya,
  toFormData: Ea,
  toLine: xl,
  tooltipManual: Ol,
  trimObj: kt
}, Symbol.toStringTag, { value: "Module" })), en = { class: "groupBoxRP" }, tn = ["onClick"], ln = /* @__PURE__ */ fe({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const i = ya(), n = t;
    function e(o) {
      return (o == null ? void 0 : o.path) === n.pathName ? "active" : "";
    }
    function a(o, s) {
      var m, p, c, g, k, v, C, w;
      (m = o == null ? void 0 : o.preventDefault) == null || m.call(o);
      let d = o == null ? void 0 : o.target;
      if (s && !s.children && !d.classList.contains("active")) {
        i.push(s.path);
        return;
      }
      let r = d.parentNode, b = Il(r);
      for (let T of b) {
        (c = (p = T == null ? void 0 : T.classList) == null ? void 0 : p.remove) == null || c.call(p, "open");
        const B = (g = T == null ? void 0 : T.querySelectorAll) == null ? void 0 : g.call(T, ".open");
        if (B && Array.isArray(B))
          for (let S of B)
            (v = (k = S == null ? void 0 : S.classList) == null ? void 0 : k.remove) == null || v.call(k, "open");
      }
      (w = (C = r == null ? void 0 : r.classList) == null ? void 0 : C.toggle) == null || w.call(C, "open");
    }
    return (o, s) => {
      const d = Z("sideMenuGroup", !0);
      return x(), D("ul", en, [
        (x(!0), D(be, null, Ce(n.data, (r, b) => (x(), D(be, {
          key: (r == null ? void 0 : r.path) + b
        }, [
          r ? (x(), D("li", {
            key: 0,
            class: xe({ dropItemRP: r.children })
          }, [
            F("div", {
              class: xe(["menuTxtR", e(r)]),
              onClick: (m) => a(m, r),
              style: oe({ paddingLeft: r.level * 20 + "px" })
            }, E(r.name || "-- no name --"), 15, tn),
            r.children ? (x(), Q(d, {
              key: 0,
              data: r.children,
              "path-name": n.pathName
            }, null, 8, ["data", "path-name"])) : ce("", !0)
          ], 2)) : ce("", !0)
        ], 64))), 128))
      ]);
    };
  }
}), an = { class: "menuListR" }, nn = /* @__PURE__ */ fe({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: i }) {
    const n = t, e = i, a = Sl(), o = N(!0), s = N(), d = N(), r = G(() => o.value ? O("r.hideMenu") : O("r.showMenu")), b = G(() => o.value ? "ios-arrow-back" : "ios-arrow-forward");
    aa(() => {
      let c = localStorage.getItem("menuDisplayR") || "";
      c !== "" ? o.value = JSON.parse(c) : (o.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), _e(
      () => a.path,
      (c) => {
        s.value = c, Le(p);
      },
      { immediate: !0 }
    );
    function m() {
      o.value = !o.value, localStorage.setItem("menuDisplayR", JSON.stringify(o.value)), e("on-change", o.value);
    }
    function p() {
      var g, k, v, C, w;
      let c = d.value.querySelectorAll(".dropItemRP");
      for (let T of c)
        (g = T == null ? void 0 : T.querySelector) != null && g.call(T, ".active") && !((v = (k = T.classList) == null ? void 0 : k.contains) != null && v.call(k, "open")) && ((w = (C = T.classList) == null ? void 0 : C.add) == null || w.call(C, "open"));
    }
    return (c, g) => {
      const k = Z("Icon");
      return x(), D("div", {
        ref_key: "menuRef",
        ref: d,
        class: "menuBoxRP"
      }, [
        me(F("div", an, [
          Y(ln, {
            data: n.data,
            pathName: f(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ve, f(o)]
        ]),
        Y(k, {
          type: f(b),
          size: 25,
          class: xe([{ showIco: !f(o) }, "menuShowHideIco"]),
          title: f(r),
          onClick: m,
          color: f(o) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), on = ["title"], $l = /* @__PURE__ */ fe({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const n = i, e = t;
    function a(o) {
      e.disabled || n("click", o);
    }
    return (o, s) => {
      const d = Z("Icon"), r = Wt("has");
      return me((x(), D("div", {
        class: xe(["tableBtnsG", { disabled: e.disabled }]),
        onClick: a,
        title: e.title || f(O)("r.button")
      }, [
        Y(d, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, on)), [
        [r, e.has]
      ]);
    };
  }
}), sn = { class: "contentX" }, rn = { class: "arrowA" }, Mt = /* @__PURE__ */ fe({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(t) {
    const i = t, n = N(!0), e = G(() => n ? "background:" + i.bg || "transparent" : "");
    return (a, o) => {
      const s = Z("Icon");
      return x(), D("div", {
        style: oe(f(e))
      }, [
        me(F("div", sn, [
          Ae(a.$slots, "default")
        ], 512), [
          [ve, f(n)]
        ]),
        F("div", rn, [
          F("div", {
            class: "btA",
            onClick: o[0] || (o[0] = (d) => n.value = !f(n))
          }, [
            Y(s, {
              type: f(n) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), un = { class: "contentZ" }, dn = /* @__PURE__ */ fe({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    const n = t, e = i, a = G({
      get() {
        return n.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), o = G(() => a.value ? "background:" + n.bg : "");
    return (s, d) => (x(), D("div", {
      style: oe(f(o))
    }, [
      me(F("div", un, [
        Ae(s.$slots, "default")
      ], 512), [
        [ve, f(a)]
      ])
    ], 4));
  }
});
let zt = [], Dt = [];
const cn = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    zt.map((i) => {
      window.clearTimeout(i);
    }), Dt.map((i) => {
      window.clearInterval(i);
    }), zt.length = 0, Dt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, $e = function(t, i) {
  let n = window.setTimeout(t, i);
  return zt.push(n), n;
}, fn = function(t, i) {
  let n = window.setInterval(t, i);
  return Dt.push(n), n;
}, pn = /* @__PURE__ */ fe({
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
  setup(t, { emit: i }) {
    const n = i, e = t;
    let a = !1;
    const o = G({
      get() {
        return e.modelValue;
      },
      set(b) {
        n("update:modelValue", b);
      }
    }), s = G({
      get() {
        return e.open;
      },
      set(b) {
        n("on-toggle", b);
      }
    }), d = G(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function r() {
      a || (a = !0, n("on-search", o.value), $e(() => {
        a = !1;
      }, 2e3));
    }
    return (b, m) => {
      const p = Z("Input"), c = Z("icon");
      return x(), D("div", {
        class: "tableSearchV",
        style: oe({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ae(b.$slots, "default", {}, () => [
          Y(p, {
            modelValue: f(o),
            "onUpdate:modelValue": m[0] || (m[0] = (g) => Pe(o) ? o.value = g : null),
            style: oe({ width: e.width }),
            search: "",
            onOnSearch: r,
            class: "searchInputC",
            placeholder: e.placeholder || f(O)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        me(F("span", {
          class: "sbt",
          onClick: m[1] || (m[1] = (g) => s.value = !f(s)),
          style: oe({ color: e.btnColor })
        }, [
          Y(c, {
            type: f(d),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ge(E(f(O)("r.adSearch")), 1)
        ], 4), [
          [ve, e.showBtn]
        ])
      ], 4);
    };
  }
}), mn = {
  beforeMount(t, i) {
    function n(e) {
      var a;
      if (t.contains(e.target))
        return !1;
      (a = i == null ? void 0 : i.value) == null || a.call(i, e);
    }
    t.__vueClickOutside__ = n, Ft && document.addEventListener("click", n);
  },
  unmounted(t) {
    Ft && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Fl(t, i, n, e, a = !1) {
  const o = (...s) => Ge.apply(this, s);
  Re.call(this, {
    title: t || o("r.info.title"),
    text: i || o("r.info.text"),
    icon: n || "warning",
    onOk: e,
    buttons: [o("r.cancel")],
    closeOnClickOutside: a
  });
}
const hn = { class: "tabSetF" }, yn = { class: "cannotSelect" }, vn = { class: "topCheck" }, gn = /* @__PURE__ */ F("span", { class: "iconfont icon-r-save" }, null, -1), Rl = /* @__PURE__ */ fe({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    width: { default: "240px" },
    bg: { default: () => Ve().tableSettingBg },
    placement: { default: "bottom-end" },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" },
    transfer: { type: Boolean, default: () => Ve().tableSettingTransfer },
    eventsEnabled: { type: Boolean, default: () => Ve().tableSettingEventsEnabled }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    var _, y, h, R, $;
    const n = i, e = t, a = N(), o = N(), s = N(!0), d = N(!1), r = N(!1), b = N([]), m = G(() => {
      var U;
      let L = O("r.unknown");
      return ((U = e.modelValue) == null ? void 0 : U.length) > b.value.length && (b.value = ue(e.modelValue)), b.value.map((z) => {
        let le = { label: (z == null ? void 0 : z.title) || L };
        return z != null && z.disableShowSetting && (le.disabled = !0), le;
      });
    }), p = G(() => m.value.filter((L) => L == null ? void 0 : L.disabled)), c = G({
      get() {
        var L, U;
        return (U = (L = e.modelValue) == null ? void 0 : L.map) == null ? void 0 : U.call(L, (z) => (z == null ? void 0 : z.title) || O("r.unknown"));
      },
      set(L) {
        let U = b.value.filter((z) => {
          for (let le of L)
            if (le === (z == null ? void 0 : z.title))
              return !0;
          return !1;
        });
        n("update:modelValue", U);
      }
    }), g = ($ = (R = (h = (y = (_ = _t()) == null ? void 0 : _.appContext) == null ? void 0 : y.config) == null ? void 0 : h.globalProperties) == null ? void 0 : R.$i18n) == null ? void 0 : $.locale;
    let k = null;
    Me(() => {
      let L = O("r.unknown"), U = P();
      U ? c.value = JSON.parse(decodeURI(U)) : e.defaultCheck && (c.value = e.modelValue.filter((z) => z == null ? void 0 : z.showSettingCheck).map((z) => (z == null ? void 0 : z.title) || L)), Le(function() {
        !a.value || !o.value || (k = new va(a.value, o.value, {
          placement: e.placement,
          eventsEnabled: e.eventsEnabled,
          modifiers: {
            computeStyle: {
              gpuAcceleration: !1
            },
            preventOverflow: {
              boundariesElement: "window"
            }
          },
          onUpdate: (z) => {
            var le;
            if (z != null && z.popper && ((le = z.instance) != null && le.popper)) {
              const ye = v(z), { needChange: j } = ye;
              if (j) {
                const { height: se } = ye, ie = z.instance.popper;
                ie.style && (ie.style.height = `${se}px`);
              }
            }
          }
        }));
      }), $e(() => {
        var z;
        r.value = !0, (z = k == null ? void 0 : k.update) == null || z.call(k), Le(function() {
          r.value = !1;
        });
      }, 0);
    }), Vl(function() {
      var L;
      (L = k == null ? void 0 : k.destroy) == null || L.call(k);
    });
    function v(L) {
      var j, se;
      const { height: U } = L.popper, z = L.instance.popper, le = window.innerHeight;
      let ye = 0;
      if ((j = z.childNodes) != null && j.length)
        for (let ie = 0; ie < z.childNodes.length; ie++)
          ye += (se = z.childNodes[ie]) == null ? void 0 : se.offsetHeight;
      return le < U - 10 || U < ye ? {
        needChange: !0,
        height: le - 10 < ye ? le - 10 : ye
      } : { needChange: !1 };
    }
    function C(L) {
      L.length === m.value.length ? (s.value = !1, d.value = !0) : L.length > p.value.length ? (s.value = !0, d.value = !1) : (s.value = !1, d.value = !1);
    }
    _e(() => c.value, C, {
      immediate: !0,
      deep: !0
    });
    function w() {
      r.value && (I() && Fl(O("r.notSave"), "", "warning", B), r.value = !1);
    }
    function T() {
      r.value ? w() : (r.value = !0, Le(function() {
        var L;
        (L = k == null ? void 0 : k.update) == null || L.call(k);
      }));
    }
    function B() {
      g ? window[e.storage].setItem(e.sKey + "_" + g, encodeURI(JSON.stringify(c.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(c.value))), w();
    }
    function S(L) {
      var U, z;
      if (r.value) {
        if (e.transfer) {
          const le = o.value;
          if (le === (L == null ? void 0 : L.target) || (U = le == null ? void 0 : le.contains) != null && U.call(le, L == null ? void 0 : L.target))
            return;
        }
        (z = L == null ? void 0 : L.preventDefault) == null || z.call(L), w();
      }
    }
    function K() {
      s.value ? d.value = !1 : d.value = !d.value, s.value = !1, d.value ? c.value = m.value.map((L) => L == null ? void 0 : L.label) : c.value = p.value.map((L) => L == null ? void 0 : L.label);
    }
    function P() {
      let L;
      return g ? L = window[e.storage].getItem(e.sKey + "_" + g) : L = window[e.storage].getItem(e.sKey), L;
    }
    function I() {
      var U;
      let L = P();
      if (L) {
        if (L = JSON.parse(decodeURI(L)), (L == null ? void 0 : L.length) !== ((U = c.value) == null ? void 0 : U.length))
          return !0;
        for (let z of L)
          if (c.value.indexOf(z) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (L, U) => {
      const z = Z("Icon"), le = Z("Checkbox"), ye = Z("CheckboxGroup");
      return me((x(), D("div", hn, [
        F("div", {
          ref_key: "buttonRef",
          ref: a,
          class: "tabSetBt",
          onClick: T
        }, [
          Y(z, {
            type: "md-settings",
            size: "17"
          }),
          F("span", yn, E(f(O)("r.tabSetting")), 1)
        ], 512),
        (x(), Q(na, {
          to: "body",
          disabled: !e.transfer
        }, [
          me(F("div", {
            ref_key: "popperRef",
            ref: o,
            class: "tabSetCard",
            style: oe({ width: e.width, backgroundColor: e.bg })
          }, [
            F("div", vn, [
              Y(le, {
                indeterminate: f(s),
                modelValue: f(d),
                "onUpdate:modelValue": U[0] || (U[0] = (j) => Pe(d) ? d.value = j : null),
                onClick: Ot(K, ["prevent"])
              }, {
                default: ee(() => [
                  ge(E(f(O)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              F("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: B
              }, [
                gn,
                F("span", null, E(f(O)("r.save")), 1)
              ])
            ]),
            Y(ye, {
              modelValue: f(c),
              "onUpdate:modelValue": U[1] || (U[1] = (j) => Pe(c) ? c.value = j : null)
            }, {
              default: ee(() => [
                (x(!0), D(be, null, Ce(f(m), (j, se) => (x(), Q(le, {
                  class: "setItem",
                  label: j && j.label,
                  key: "tabSet_" + e.sKey + se,
                  disabled: j && j.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ve, f(r)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [f(mn), S]
      ]);
    };
  }
});
function bn(t) {
  return t.replace(/_(\w)/g, function(i, n) {
    return n.toUpperCase();
  });
}
function $i(t) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = t : i.innerText = t, i.innerHTML;
}
function Fi(t) {
  let i = document.createElement("div");
  return i.innerHTML = t, i.innerText || i.textContent;
}
function xt(t) {
  return new Promise((i) => {
    let n = new FileReader();
    n.readAsDataURL(t), n.onloadend = () => {
      i(n.result);
    };
  });
}
function Kl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function Lt(t) {
  return J(t) === "String" && t.indexOf("image") > -1;
}
function dl(t) {
  const i = Kl(t);
  let n = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 ? n = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 ? n = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 ? n = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(i) > -1 ? n = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(i) > -1 ? n = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(i) > -1 && (n = "ios-videocam"), n;
}
function kn(t, i) {
  let n = document.createElement("a");
  n.href = i, n.download = t, wn(n);
}
function wn(t) {
  let i = document.createEvent("MouseEvents");
  i.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
}
function Ut({
  group: t,
  condition: i,
  pathKey: n,
  childKey: e = "children",
  path: a = []
}) {
  if (t && ra(t)) {
    if (ua(i)) {
      if (at(t)) {
        let o = t, s = ue(a);
        if (i(o))
          return n && o[n] && s.push(o[n]), s;
        if (o[e] && !Oe(o[e])) {
          n && o[n] && s.push(o[n]);
          let d = Ut({
            group: o[e],
            condition: i,
            pathKey: n,
            childKey: e,
            path: s
          });
          if (!Oe(d))
            return d;
        }
      } else if (Array.isArray(t))
        for (let o of t) {
          let s = ue(a);
          if (i(o))
            return n && o[n] ? s.push(o[n]) : s.push(String(t.indexOf(o))), s;
          if (o[e] && o[e].length > 0) {
            n && o[n] ? s.push(o[n]) : s.push(String(t.indexOf(o)));
            let d = Ut({
              group: o[e],
              condition: i,
              pathKey: n,
              childKey: e,
              path: s
            });
            if (!Oe(d))
              return d;
          }
        }
    } else if (Array.isArray(t))
      for (let o of t) {
        let s = ue(a);
        if (o === i)
          return s.push(String(t.indexOf(o))), s;
      }
  }
  return [];
}
function _n(t, i = 12) {
  if (J(t) === "String" && t.length > 0) {
    let n = document.createElement("span");
    n.style.fontSize = i + "px", n.style.fontFamily = "inherit", n.innerHTML = t, n.style.opacity = "0", n.style.position = "fixed", n.style.top = "3000px", document.body.append(n);
    const e = n.clientWidth;
    return document.body.removeChild(n), e;
  }
  return 0;
}
function Ri(t) {
  return t === "" ? null : t;
}
function Ki(t) {
  var i;
  t = t || window.Event, t != null && t.stopPropagation ? (i = t.stopPropagation) == null || i.call(t) : t && (t.cancelBubble = !0);
}
let ut = !1;
function Nt({
  height: t,
  width: i = 416,
  title: n,
  content: e,
  onOk: a,
  onCancel: o,
  onClose: s,
  okText: d,
  cancelText: r,
  noWarnIcon: b,
  footerAlign: m,
  cancelBt: p = !0
}) {
  const c = (...w) => Ge.apply(this, w);
  let k = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", v = J(e) === "String";
  const C = typeof e == "function";
  je.warning({
    width: i,
    footerHide: !0,
    render: () => Te(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: k
        }
      },
      [
        Te(
          "div",
          {
            class: "containerN"
          },
          [
            Te(
              "div",
              {
                class: "titleN"
              },
              [
                Te("span", n || c("r.info.title")),
                Te(
                  Bt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      ut || (je.remove(), s && J(s) === "Function" && s());
                    }
                  },
                  () => Te("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Te(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: v ? "center" : "left"
                }
              },
              [
                Te("i", {
                  class: v && !b ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Te("div", { class: "msgBoxConO" }, C ? [e(Te)] : e || c("r.info.text"))
              ]
            ),
            Te(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: m || "center"
                }
              },
              [
                Te(
                  Bt,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var T, B, S, K, P, I, _, y, h;
                      if (a && typeof a == "function") {
                        const R = a();
                        if (R && J(R) === "Promise") {
                          ut = !0;
                          const $ = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          $ && ((B = (T = $.classList) == null ? void 0 : T.add) == null || B.call(T, "ivu-btn-loading"), (K = (S = $.nextSibling) == null ? void 0 : S.setAttribute) == null || K.call(S, "disabled", "disabled"), (h = (y = ((_ = (I = (P = $.parentElement) == null ? void 0 : P.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : _.call(I, ".titleN .closeN")).classList) == null ? void 0 : y.add) == null || h.call(y, "disabled")), Promise.resolve(R).then(() => {
                            ut = !1, je.remove();
                          }).catch(() => {
                            ut = !1, je.remove();
                          });
                        } else
                          je.remove();
                      }
                    }
                  },
                  () => [
                    Te("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Te("span", d || c("r.confirm"))
                  ]
                ),
                Te(
                  Bt,
                  {
                    class: ["cancelBtN", !p && "hide"],
                    onClick() {
                      ut || (je.remove(), J(o) === "Function" && o && o());
                    }
                  },
                  () => r || c("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let Ze = 0, ft = document.createElement("div");
ft.setAttribute("class", "spinModal");
ft.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ft);
};
function cl(t) {
  t ? ft.classList.add("show") : ft.classList.remove("show");
}
function Ml(t) {
  let i = Ze;
  t ? Ze++ : Ze > 0 && Ze--, i !== Ze && (Ze === 0 ? cl(!1) : i === 0 && cl(!0));
}
const Vn = window.location.origin;
let wt = null;
const fl = (...t) => Ge.apply(wt, t);
let Ke = It.create({
  baseURL: Vn,
  withCredentials: !0
  // 允许携带cookie
});
function Cn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ke.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function pl() {
  var t, i;
  if (Ke.store)
    if (typeof Ke.store == "function") {
      const n = Ke.store();
      n.logout && n.logout();
    } else
      (i = (t = Ke.store) == null ? void 0 : t.dispatch) == null || i.call(t, "logout");
  else
    Cn();
}
Ke.interceptors.response.use(
  (t) => {
    var i, n;
    return wt && (((i = t == null ? void 0 : t.data) == null ? void 0 : i.code) === 403 || ((n = t == null ? void 0 : t.data) == null ? void 0 : n.code) === 409) && Nt({
      content: fl("r.http." + t.data.code),
      onOk: pl
    }), t;
  },
  (t) => {
    var i, n;
    return wt && (((i = t == null ? void 0 : t.response) == null ? void 0 : i.status) === 403 || ((n = t == null ? void 0 : t.response) == null ? void 0 : n.status) === 409) && Nt({
      content: fl("r.http." + t.response.status),
      onOk: pl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function We(t, i, n, e) {
  e && e.spin && Ml(!1);
  let a = !0, o = t && t.data;
  if (o) {
    n = n || [];
    for (let s of n)
      o = o[s], a = a && o;
    return a ? o : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function Sn(t, i, n, e, a, o, s) {
  return new Promise((d, r) => {
    switch (t) {
      case "get":
        Ke.get(i, { params: n }).then((m) => {
          let p = We(m, e, a, o);
          p ? d(p) : r(m);
        }).catch((m) => {
          We({}, e, a, o), r(m);
        });
        break;
      case "delete":
        let b = s ? "params" : "data";
        Ke.delete(i, { [b]: n }).then((m) => {
          let p = We(m, e, a, o);
          p ? d(p) : r(m);
        }).catch((m) => {
          We({}, e, a, o), r(m);
        });
        break;
      case "post":
        Ke.post(i, n, o).then((m) => {
          let p = We(m, e, a, o);
          p ? d(p) : r(m);
        }).catch((m) => {
          We({}, e, a, o), r(m);
        });
        break;
      case "put":
        Ke.put(i, n, o).then((m) => {
          let p = We(m, e, a, o);
          p ? d(p) : r(m);
        }).catch((m) => {
          We({}, e, a, o), r(m);
        });
        break;
    }
  });
}
function ht(t, i, n = {}, e, a, o, s) {
  return new Promise((d, r) => {
    var b;
    if (i) {
      o && o.spin && Ml(!0);
      let m = i;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let k = Object.keys(g).filter((v) => {
          var C;
          return ((C = v == null ? void 0 : v.indexOf) == null ? void 0 : C.call(v, "URL")) > -1;
        }).map((v) => {
          var C;
          return (C = v.replace) == null ? void 0 : C.call(v, "URL", "");
        });
        for (let v of k) {
          let C = new RegExp("^/" + v + "(?=/.*$)", "i");
          if (C.test(i) && g[v + "URL"]) {
            m = g[v + "URL"] + i.replace(C, "");
            break;
          }
        }
      }
      let p;
      if (((b = o == null ? void 0 : o.headers) == null ? void 0 : b["Content-Type"]) === "multipart/form-data")
        p = n;
      else if (n && !Oe(n))
        if (Array.isArray(n)) {
          p = [];
          for (let g of n)
            (g || g === 0 || g === !1 || g === "" && o && !o.noEmptyStr) && p.push(g);
        } else {
          p = {};
          for (let g in n)
            n.hasOwnProperty(g) && (n[g] || n[g] === 0 || n[g] === !1 || n[g] === "" && o && !o.noEmptyStr) && (p[g] = n[g]);
        }
      let c = t.toLowerCase();
      Sn(c, m, p, e, a, o, s).then((g) => {
        d(g);
      }).catch((g) => {
        r(g);
      });
    } else
      console.error("没有请求地址:url"), r("没有请求地址:url");
  });
}
const Ue = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, i) {
    Ke.store = t, wt = i.config.globalProperties;
  },
  post(t, i, n, e, a) {
    return new Promise((o, s) => {
      ht("post", t, i, n, e, a).then((d) => {
        o(d);
      }).catch((d) => {
        s(d);
      });
    });
  },
  put(t, i, n, e, a) {
    return new Promise((o, s) => {
      ht("put", t, i, n, e, a).then((d) => {
        o(d);
      }).catch((d) => {
        s(d);
      });
    });
  },
  get(t, i, n, e, a) {
    return new Promise((o, s) => {
      ht("get", t, i, n, e, a).then((d) => {
        o(d);
      }).catch((d) => {
        s(d);
      });
    });
  },
  delete(t, i, n, e, a, o = !0) {
    return new Promise((s, d) => {
      ht("delete", t, i, n, e, a, o).then((r) => {
        s(r);
      }).catch((r) => {
        d(r);
      });
    });
  },
  all: It.all,
  spread: It.spread,
  config: Ke
}, Tn = {
  key: 0,
  class: "pageTotal"
}, Bn = {
  key: 1,
  class: "pageProSize"
}, zl = /* @__PURE__ */ fe({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = Ve()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.pageShowSizer;
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(t, { emit: i }) {
    var c;
    const n = i, e = N(), a = t, o = ((c = Ve == null ? void 0 : Ve()) == null ? void 0 : c.fontSizeBase) || 14, s = N(16), d = G({
      get() {
        return a.modelValue;
      },
      set(g) {
        n("update:modelValue", g), n("on-change", g);
      }
    }), r = G({
      get() {
        return a.pageSize;
      },
      set(g) {
        n("on-page-size-change", g), d.value !== 1 && (d.value = 1);
      }
    }), b = G(() => {
      const g = _n(String(a.total || 0), o) + s.value + 2;
      return g < 32 ? 32 : g;
    });
    _e(
      b,
      (g) => {
        Le(function() {
          p(g);
        });
      },
      { immediate: !0 }
    );
    function m() {
      var w, T, B;
      const g = (B = (T = (w = e.value) == null ? void 0 : w.$el) == null ? void 0 : T.querySelector) == null ? void 0 : B.call(T, "input");
      if (!g)
        return 16;
      const k = window.getComputedStyle(g), v = k == null ? void 0 : k.paddingLeft, C = k == null ? void 0 : k.paddingRight;
      return !v || !C ? 16 : Number(v.replace("px", "")) + Number(C.replace("px", ""));
    }
    function p(g) {
      var v, C, w;
      const k = (w = (C = (v = e.value) == null ? void 0 : v.$el) == null ? void 0 : C.querySelector) == null ? void 0 : w.call(C, "input");
      k != null && k.style && (k.style.width = `${g}px`);
    }
    return Me(() => {
      s.value = m();
    }), (g, k) => {
      const v = Z("Page"), C = Z("Option"), w = Z("Select");
      return x(), D("div", {
        class: xe(["pagePro", { pageProDefault: a.size === "default" }])
      }, [
        a.showTotal ? (x(), D("span", Tn, E(f(O)("r.total") + " ") + E(a.total) + E(" " + f(O)("r.items")), 1)) : ce("", !0),
        Y(v, {
          ref_key: "pageRef",
          ref: e,
          modelValue: f(d),
          "onUpdate:modelValue": k[0] || (k[0] = (T) => Pe(d) ? d.value = T : null),
          "page-size": f(r),
          total: a.total,
          size: a.size,
          "page-size-opts": a.pageSizeOpts,
          disabled: a.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        a.showSizer ? (x(), D("div", Bn, [
          Y(w, {
            modelValue: f(r),
            "onUpdate:modelValue": k[1] || (k[1] = (T) => Pe(r) ? r.value = T : null),
            size: a.size,
            transfer: a.transfer,
            disabled: a.disabled
          }, {
            default: ee(() => [
              (x(!0), D(be, null, Ce(a.pageSizeOpts, (T) => (x(), Q(C, {
                value: T,
                key: T
              }, {
                default: ee(() => [
                  ge(E(T) + " " + E(f(O)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : ce("", !0)
      ], 2);
    };
  }
}), xn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, Ln = { class: "topBtn" }, On = { class: "tableContainer growFlexItem" }, An = { class: "fullHeight relativeBox" }, Pn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, In = { class: "pageContainer" }, $n = 300, Et = /* @__PURE__ */ fe({
  __name: "BtTablePage",
  props: {
    url: { default: "" },
    method: { default: "get" },
    searchData: { default: () => ({}) },
    columns: { default: () => [] },
    dataHandler: {},
    selection: { type: Boolean, default: !1 },
    radio: { type: Boolean, default: !1 },
    selectionFixed: { type: [String, Boolean], default: !1 },
    rowClickSelect: { type: Boolean, default: !0 },
    data: { default: () => [] },
    sortable: { default: "" },
    initData: { type: Boolean, default: !0 },
    highlightRow: { type: Boolean, default: !1 },
    rowClickNum: { default: -1 },
    tableEmptyTdHandle: { type: Boolean, default: !1 },
    noBorderTable: { type: Boolean, default: !1 },
    orderDefault: { default: "desc" },
    orderKey: { default: "id" },
    orderKeyFormat: { default: "underline" },
    getDataLoading: { type: Boolean, default: !1 },
    showTopRow: { type: Boolean, default: !1 },
    lightHead: { type: Boolean, default: !1 },
    noPage: { type: Boolean, default: !1 },
    usePagePro: { type: Boolean, default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.pageShowSizer;
    } },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: i, emit: n }) {
    var Je;
    const e = n;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...fa });
    const o = t, s = ((Je = Ve()) == null ? void 0 : Je.pageSizes) || [10, 20, 50, 100], d = N(o.data), r = N(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || o.pageSize
    ), b = N(1), m = N(0);
    let p = [], c, g, k = o.orderKey, v = o.orderDefault;
    const C = G(() => {
      for (let W of o.columns)
        if (W != null && W.fixed)
          return !0;
      return !1;
    }), w = G(() => o.selectionFixed || C.value), T = G(() => {
      let W = {
        ...o.searchData,
        current: b.value,
        size: r.value
      };
      return o.sortable === "custom" && (o.orderKeyFormat === "underline" ? W[v] = xl(k) : o.orderKeyFormat === "camelcase" && (W[v] = bn(k))), W;
    }), B = G(() => {
      let W = o.columns.filter((M) => M && M.type !== "selection");
      if (o.selection || o.radio) {
        let M;
        o.radio ? M = {
          title: " ",
          width: 65,
          render: (de, ke) => Te(pa, {
            modelValue: ke.row.btChecked
          })
        } : M = {
          type: "selection",
          width: 60
        }, o.selectionFixed && (M.fixed = o.selectionFixed), W.unshift(M);
      }
      return W.forEach((M) => {
        var de;
        M && (o.sortable === "custom" ? M.key && M.sortable !== !0 && M.sortable !== !1 && (M.sortable = "custom") : M.sortable = !1, M.align || (M.align = ((de = Ve()) == null ? void 0 : de.btTablePageAlign) || "center"));
      }), W.forEach((M) => {
        M != null && M.key && M.render === void 0 && (M.tooltip ? M.render = Ol(M.key, o.tableEmptyTdHandle) : M.render = (de, ke) => {
          let we = "";
          return M != null && M.key && (we = ke.row[M.key]), o.tableEmptyTdHandle ? Te("span", we === "" ? "--" : we ?? "--") : Te("span", we);
        });
      }), W;
    }), S = G({
      get() {
        return d.value.map((W, M) => ({
          btKey: "bt-" + M,
          btChecked: !1,
          ...W
        }));
      },
      set(W) {
        d.value = W;
      }
    }), K = G(() => p.map((W) => W == null ? void 0 : W.id)), P = G(() => p.map((W) => W == null ? void 0 : W.btKey)), I = N();
    _e(() => o.searchData, _, { deep: !0 }), _e(
      () => o.orderDefault,
      (W) => {
        v = W;
      }
    ), _e(
      () => o.orderKey,
      (W) => {
        k = W;
      }
    );
    function _() {
      b.value = 1, ze();
    }
    function y() {
      o.initData && ze();
    }
    function h(W) {
      d.value.unshift(ue(W)), $e(() => {
        var M, de;
        (de = (M = I.value) == null ? void 0 : M.clickCurrentRow) == null || de.call(M, 0);
      }, 100);
    }
    function R(W, M, de) {
      let ke = null;
      if (M ? ke = g : typeof M == "number" && (ke = M), ke !== null) {
        let we = d.value[ke];
        for (let ne in W)
          W.hasOwnProperty(ne) && (we[ne] = W[ne]);
        de && $e(() => {
          var ne, Fe;
          (Fe = (ne = I.value) == null ? void 0 : ne.clickCurrentRow) == null || Fe.call(ne, ke);
        }, 10);
      }
    }
    function $(W) {
      d.value.splice(W, 1), $e(() => {
        var M, de;
        (de = (M = I.value) == null ? void 0 : M.clickCurrentRow) == null || de.call(M, 0);
      }, 100);
    }
    function L(W, M) {
      var de, ke;
      W.btChecked && o.radio || (o.selection || o.radio) && o.rowClickSelect && ((ke = (de = I.value) == null ? void 0 : de.toggleSelect) == null || ke.call(de, M));
    }
    function U(W, M) {
      c = M.btKey, g = Number(M.btKey.split("-")[1]), o.radio && (d.value[g].btChecked = !0);
    }
    function z(W) {
      if (o.radio)
        for (let M of S.value)
          M != null && M.btKey && M.btKey !== c && (d.value[Number(M.btKey.split("-")[1])].btChecked = !1);
      p = W, e("on-selection-change", W);
    }
    function le() {
      return ue(p);
    }
    function ye() {
      ze();
    }
    function j(W) {
      r.value = W, localStorage.setItem("btPageSize", String(W)), b.value === 1 && ze();
    }
    function se({ key: W, order: M }) {
      v === "normal" ? (k = o.orderKey, v = o.orderDefault) : (k = W, v = M), b.value = 1, he();
    }
    function ie(W) {
      var de, ke, we, ne, Fe, Ye, Xe, it;
      const M = W;
      if (typeof M == "number")
        H(), g = M, c = (ke = (de = S.value) == null ? void 0 : de[M]) == null ? void 0 : ke.btKey, (ne = (we = I.value) == null ? void 0 : we.clickCurrentRow) == null || ne.call(we, M);
      else if (Array.isArray(M)) {
        if (o.radio || !o.selection)
          return;
        H();
        for (let He of M)
          (Ye = (Fe = I.value) == null ? void 0 : Fe.clickCurrentRow) == null || Ye.call(Fe, He);
      } else if (typeof M == "function")
        for (let He = 0; He < S.value.length; He++) {
          const pt = S.value[He];
          M(pt) && ((it = (Xe = I.value) == null ? void 0 : Xe.clickCurrentRow) == null || it.call(Xe, He));
        }
    }
    function H() {
      var W, M;
      if (o.radio) {
        if (P.value.length > 0 && S.value.length > 0) {
          let de = P.value[0].split("-")[1];
          S.value[de].btChecked = !1;
        }
      } else
        (M = (W = I.value) == null ? void 0 : W.selectAll) == null || M.call(W, !1);
      p.length > 0 && (p = [], e("on-selection-change", [])), c = null, g = null;
    }
    function re() {
      d.value = [], H(), b.value = 1, m.value = 0;
    }
    function he(W, M, de) {
      return new Promise((ke) => {
        W && (v = W), M && (k = M), o.url ? Ue[o.method](o.url, T.value, "", [], { spin: o.getDataLoading }).then((we) => {
          var Fe, Ye;
          let ne;
          de || H(), typeof o.dataHandler == "function" ? ne = o.dataHandler(we) : ne = we, ne.data ? (ne.data.records || ne.data.records === null ? d.value = ne.data.records || [] : ne.data.page ? (ne.data.page.records || ne.data.page.records === null) && (d.value = ne.data.page.records || []) : ne.data.data ? (ne.data.data.records || ne.data.data.records === null) && (d.value = ne.data.data.records || []) : d.value = ne.data, m.value = ((Fe = ne.data.page) == null ? void 0 : Fe.total) || ((Ye = ne.data.data) == null ? void 0 : Ye.total) || ne.data.total || ne.total || 0, m.value === 0 && b.value > 1 && d.value && d.value.length === 0 ? b.value = 1 : b.value > 1 && m.value <= (b.value - 1) * r.value && (b.value--, Le(function() {
            he(W, M);
          })), e("on-data-change", ne), ke(ne)) : (console.warn("请求返回数据有误，无法使用"), re(), e("on-data-change", ne));
        }).catch((we) => {
          H(), re(), e("on-data-change", we);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function ze(W, M, de) {
      o.radio && (W || o.rowClickNum !== -1) ? he(M, de, W).then(() => {
        d.value.length > 0 && $e(() => {
          var ke, we, ne, Fe;
          W ? (we = (ke = I.value) == null ? void 0 : ke.clickCurrentRow) == null || we.call(ke, g || 0) : (Fe = (ne = I.value) == null ? void 0 : ne.clickCurrentRow) == null || Fe.call(ne, o.rowClickNum);
        }, 10);
      }) : he();
    }
    return Me(y), i({
      dataS: S,
      selectedIds: K,
      addRow: h,
      setRowData: R,
      deleteRow: $,
      getSelected: le,
      selectRow: ie,
      clearSelect: H,
      clearTableData: re,
      getTableData: he,
      getDataAndClickRow: ze
    }), (W, M) => {
      const de = Z("Table"), ke = Z("Page");
      return x(), D("div", xn, [
        me(F("div", Ln, [
          Ae(W.$slots, "tableSetting"),
          Ae(W.$slots, "topMsg"),
          Ae(W.$slots, "topBtnGroup")
        ], 512), [
          [ve, o.showTopRow]
        ]),
        F("div", On, [
          F("div", An, [
            F("div", Pn, [
              Y(de, ot({
                ref_key: "tableRef",
                ref: I
              }, W.$attrs, {
                height: f(w) && $n || null,
                class: { noBorderTable: o.noBorderTable, fullHeightTable: !f(w), lightHeadO: o.lightHead },
                columns: f(B),
                data: f(S),
                "highlight-row": o.radio || o.highlightRow,
                onOnSelect: U,
                onOnSelectionChange: z,
                onOnSortChange: se,
                onOnRowClick: L
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        me(F("div", In, [
          o.usePagePro ? (x(), Q(zl, {
            key: 0,
            modelValue: f(b),
            "onUpdate:modelValue": M[0] || (M[0] = (we) => Pe(b) ? b.value = we : null),
            total: f(m),
            showTotal: o.showTotal,
            pageSize: f(r),
            showSizer: o.showSizer,
            pageSizeOpts: f(s),
            size: o.pageComponentSize,
            onOnChange: ye,
            onOnPageSizeChange: j
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (x(), Q(ke, {
            key: 1,
            modelValue: f(b),
            "onUpdate:modelValue": M[1] || (M[1] = (we) => Pe(b) ? b.value = we : null),
            total: f(m),
            pageSize: f(r),
            pageSizeOpts: f(s),
            showSizer: o.showSizer,
            showTotal: o.showTotal,
            size: o.pageComponentSize,
            showElevator: !o.noElevator,
            onOnChange: ye,
            onOnPageSizeChange: j
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ve, !o.noPage]
        ])
      ], 512);
    };
  }
}), Dl = /* @__PURE__ */ fe({
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
  setup(t, { emit: i }) {
    const n = i, e = t, a = G({
      get() {
        var m;
        return (m = e.modelValue) == null ? void 0 : m.key;
      },
      set(m) {
        let p = {
          key: m,
          val: null
        };
        console.log(a.value, m), a.value && a.value !== m && (p.beforeKey = a.value), n("update:modelValue", p), n("on-change", p);
      }
    }), o = G({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(m) {
        n("update:modelValue", {
          key: a.value,
          val: m
        });
      }
    }), s = G(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), d = G(() => ({
      width: typeof e.itemWidth == "number" ? e.itemWidth + "px" : e.itemWidth
    }));
    function r(m) {
      m != null && m.target && m.target.value !== void 0 && b({
        key: a.value,
        val: m.target.value
      });
    }
    const b = jt((m) => {
      n("on-change", m);
    }, 500);
    return (m, p) => {
      const c = Z("Option"), g = Z("Select"), k = Z("Input");
      return x(), D("div", null, [
        Y(g, {
          modelValue: f(a),
          "onUpdate:modelValue": p[0] || (p[0] = (v) => Pe(a) ? a.value = v : null),
          style: oe(f(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: ee(() => [
            (x(!0), D(be, null, Ce(e.selectOption, (v, C) => (x(), Q(c, {
              value: v == null ? void 0 : v.val,
              label: v == null ? void 0 : v.label,
              key: "selectInputOp" + (v == null ? void 0 : v.value) + C,
              style: oe({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Y(k, {
          modelValue: f(o),
          "onUpdate:modelValue": p[1] || (p[1] = (v) => Pe(o) ? o.value = v : null),
          placeholder: e.placeholder || f(O)("r.pInput"),
          style: oe(f(d)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: r
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Gt = { securityJsCode: "", key: "" };
function Fn({ securityJsCode: t, key: i }) {
  Gt.securityJsCode = t, Gt.key = i;
}
function Rn(t) {
  return Gt[t];
}
const Ul = /* @__PURE__ */ fe({
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
  setup(t, { emit: i }) {
    const n = i, e = t, a = G({
      get() {
        let S;
        return e.modelValue ? e.modelValue.name ? S = ue(e.modelValue) : S = {
          ...e.modelValue,
          name: null
        } : S = {
          name: null
        }, S;
      },
      set(S) {
        n("update:modelValue", ue(S));
      }
    }), o = G(() => dt(e.width) ? e.width + "px" : e.width), s = G(() => dt(e.height) ? e.height + "px" : e.height ? e.height : dt(e.width) ? e.width * 0.66 + "px" : "200px"), d = G(() => ({
      width: o.value,
      position: "relative"
    })), r = G(() => ({
      width: o.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    _e(
      () => e.modelValue,
      (S) => {
        if (S && S.lng && S.lat) {
          if (!v || !C)
            return;
          T({
            lng: S.lng,
            lat: S.lat,
            name: S.name
          });
        }
      }
    );
    const b = "mapId" + Math.floor(Math.random() * 1e9), m = N(null), p = N(null);
    let c;
    function g() {
      p.value && p.value.clientHeight < 10 || !p.value ? $e(g, 300) : $e(w, 100);
    }
    let k, v, C;
    function w() {
      sl.load({
        key: Rn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((S) => {
        k = S, v = new k.Map(b).on("complete", () => {
          var P, I, _, y;
          C = new k.Geocoder(), (P = e.modelValue) != null && P.lng && ((I = e.modelValue) != null && I.lat) && T({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const K = (y = (_ = m.value) == null ? void 0 : _.$el) == null ? void 0 : y.children;
          K && K.length > 1 && new k.AutoComplete({
            input: K[1]
          }).on("select", (h) => {
            var R, $, L;
            (R = h == null ? void 0 : h.poi) != null && R.name && (($ = h.poi.location) != null && $.lng && ((L = h.poi.location) != null && L.lat) ? (T({
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }), a.value = {
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }) : v.setCity(h.poi.name, () => {
              let U = v.getCenter();
              T({
                name: h.poi.name,
                lng: U.lng,
                lat: U.lat
              }), a.value = {
                name: h.poi.name,
                lng: U.lng,
                lat: U.lat
              };
            })), n("on-change", a.value);
          }), v.on("hotspotclick", (h) => {
            T({
              name: h.name,
              lng: h.lnglat.lng,
              lat: h.lnglat.lat
            }), a.value = {
              name: h.name,
              lng: h.lnglat.lng,
              lat: h.lnglat.lat
            };
          });
        });
      });
    }
    function T({ lng: S, lat: K, name: P }) {
      v.clearMap();
      let I = new k.LngLat(S, K), _ = new k.Marker({
        map: v,
        position: I,
        draggable: !0
      });
      v.add(_), B(S, K), _.on("dragend", () => {
        let y = _.getPosition();
        a.value = {
          name: P || null,
          lng: y.lng,
          lat: y.lat
        }, B(S, K);
      }), _.on("click", (y) => {
        var h, R;
        c && c.open(v, (R = (h = y == null ? void 0 : y.target) == null ? void 0 : h.getPosition) == null ? void 0 : R.call(h));
      }), v.setFitView();
    }
    function B(S, K) {
      C.getAddress([S, K], (P, I) => {
        P === "complete" && I.info === "OK" && I.regeocode && I.regeocode.formattedAddress ? c = new k.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + I.regeocode.formattedAddress + "</div>",
          offset: new k.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (c = null, console.warn("地图获取位置信息失败", I));
      });
    }
    return Me(g), _l(() => {
      var S;
      v && (v.destroy(), (S = sl) == null || S.reset(), v = null, C = null, c = null);
    }), (S, K) => (x(), D("div", {
      style: oe(f(d)),
      class: "containerIKJ"
    }, [
      Y(f(ma), {
        ref_key: "mapInputRef",
        ref: m,
        modelValue: f(a).name,
        "onUpdate:modelValue": K[0] || (K[0] = (P) => f(a).name = P),
        class: xe({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || f(O)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      F("div", {
        style: oe(f(r)),
        ref_key: "mapRef",
        ref: p,
        id: b
      }, null, 4)
    ], 4));
  }
});
var kl;
const Nl = /* @__PURE__ */ fe({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (kl = window == null ? void 0 : window.g) != null && kl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
  setup(t, { emit: i }) {
    const n = i, e = t, a = N([]), o = G({
      get() {
        let m = e.modelValue;
        return Array.isArray(m) ? ue(m) : dt(m) ? Ut({
          group: a.value,
          condition: (p) => (p == null ? void 0 : p.value) === m,
          pathKey: "value"
        }) : qt(m) ? m.split(e.separator) : [];
      },
      set(m) {
        if (e.onlyLastVal)
          Oe(m) ? (n("update:modelValue", null), n("on-label-change", null)) : n("update:modelValue", vt(m));
        else {
          if (ct(e.modelValue, m))
            return;
          n("update:modelValue", ue(m));
        }
      }
    });
    function s() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Ue.get(e.url).then((m) => {
        var c;
        let p = null;
        (c = m == null ? void 0 : m.data) != null && c.records ? p = m.data.records : m != null && m.data ? p = m.data : m && (p = m), p ? (typeof e.optionFilter == "function" && J(e.optionFilter) === "Function" && (p = e.optionFilter(p)), a.value = d(p)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function d(m) {
      let p = [];
      for (let c of m) {
        let g = {
          value: c[e.optionVal],
          label: c[e.optionLabel]
        };
        c != null && c.children && !Oe(c.children) && (g.children = d(c.children)), p.push(g);
      }
      return p;
    }
    function r(m) {
      return e.onlyLastLabel ? vt(m) : m.join(e.separator);
    }
    function b(m, p) {
      let c = "";
      Oe(p) || (c = p.map((g) => g == null ? void 0 : g.label).join(e.separator)), n("on-label-change", c);
    }
    return Me(s), (m, p) => {
      const c = Z("Cascader");
      return x(), Q(c, {
        data: f(a),
        modelValue: f(o),
        "onUpdate:modelValue": p[0] || (p[0] = (g) => Pe(o) ? o.value = g : null),
        onOnChange: b,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": r,
        placeholder: e.placeholder || f(O)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), El = /* @__PURE__ */ fe({
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
  setup(t, { emit: i }) {
    const n = i, e = t, a = N(), o = G({
      get() {
        if (e.modelValue && (dt(e.modelValue) || qt(e.modelValue))) {
          let d = String(e.modelValue).trim();
          if (/^\d*$/.test(d)) {
            let b = d.substring(0, 2) + "0000", m, p = s(d);
            return p.length < 7 ? m = d.substring(0, 4) + "00" : m = d.substring(0, 6), /^8\d+$/.test(d) ? [b, p] : [b, m, p];
          }
          return d.indexOf(e.separator) !== -1 ? d.split(e.separator) : [d];
        } else
          return Array.isArray(e.modelValue) ? ue(e.modelValue) : (a.value && (a.value.select = []), []);
      },
      set(d) {
        if (Oe(d))
          n("update:modelValue", null), n("on-name-change", null);
        else {
          let r = vt(d), b = "", m = "";
          if (r && (b = r.code), b && b.length < 12) {
            let p = [...b];
            for (; p.length < 12; )
              p.push(0);
            b = p.join("");
          }
          if (Array.isArray(d) && (m = d.map((p) => p == null ? void 0 : p.name).join(e.separator)), b) {
            if (b === e.modelValue)
              return;
            n("update:modelValue", b);
          }
          m && n("on-name-change", m);
        }
      }
    });
    function s(d) {
      let r = [...d];
      for (; r[r.length - 1] === "0"; )
        r.pop();
      return r.join("");
    }
    return (d, r) => (x(), Q(f(ga), ot(d.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: a,
      modelValue: f(o),
      "onUpdate:modelValue": r[0] || (r[0] = (b) => Pe(o) ? o.value = b : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || f(O)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
let Ee = 0;
function Gl(t, i, n, e) {
  var a, o, s;
  e && (e.innerHTML = ((a = t[i]) == null ? void 0 : a.name) ?? "", (o = t[i]) != null && o.name ? e.classList.contains("hide") && e.classList.remove("hide") : e.classList.contains("hide") || e.classList.add("hide")), n && (n.src = ((s = t[i]) == null ? void 0 : s.src) ?? t[i], Ee = i);
}
function ml(t, i, n, e) {
  if (t) {
    let a;
    Ee - 1 < 0 ? a = i.length - 1 : a = Ee - 1, Gl(i, a, n, e);
  }
}
function hl(t, i, n, e) {
  if (t) {
    let a;
    Ee + 1 > i.length - 1 ? a = 0 : a = Ee + 1, Gl(i, a, n, e);
  }
}
function tt(t, i = 0) {
  var w, T, B, S, K, P, I;
  const n = (..._) => Ge.apply(this, _), e = n("r.closePreview"), a = n("r.fullImg"), o = n("r.last"), s = n("r.next");
  let d, r, b;
  Ee = i;
  const m = Array.isArray(t);
  m ? (r = ((w = t[Ee]) == null ? void 0 : w.src) ?? t[Ee], b = (T = t[Ee]) == null ? void 0 : T.name) : r = t, m && t.length > 1 ? d = `${o} ： ←, ↑, A, W | ${s} ： →, ↓, D, S | ${e} ： Esc` : d = `${e} ： Esc`;
  let p = At(document.getElementsByTagName("body")), c = document.createElement("div");
  c.setAttribute("class", "fullScreenImgByDom"), c.innerHTML = `<div class='previewInner'><div class='pageFBt left${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-back' title='${o}' ></i></div><img src='${r}' alt='${a}' ><div class='pageFBt right${m && t.length > 1 ? "" : " hide"}'><i class='ivu-icon ivu-icon-ios-arrow-forward' title='${s}' ></i></div><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div><p class='pNotice cannotSelect'>${d}</p><p class='pName ${b ? "" : "hide"}'>${b}</p>`;
  function g() {
    let _ = At(document.getElementsByTagName("body"));
    _ && _.removeChild(c), document.removeEventListener("keyup", C);
  }
  (S = (B = c.querySelector(".ivu-icon-md-close")) == null ? void 0 : B.addEventListener) == null || S.call(B, "click", g);
  const k = c.querySelector("img"), v = c.querySelector(".pName");
  (K = c.querySelector(".pageFBt.left")) == null || K.addEventListener("click", function() {
    ml(m, t, k, v);
  }), (P = c.querySelector(".pageFBt.right")) == null || P.addEventListener("click", function() {
    hl(m, t, k, v);
  });
  function C(_) {
    _.keyCode === 37 || _.keyCode === 38 || _.keyCode === 87 || _.keyCode === 65 ? ml(m, t, k, v) : _.keyCode === 39 || _.keyCode === 40 || _.keyCode === 83 || _.keyCode === 68 ? hl(m, t, k, v) : _.keyCode === 27 && g();
  }
  document.addEventListener("keyup", C), (I = p == null ? void 0 : p.appendChild) == null || I.call(p, c), c.focus({ preventScroll: !0 });
}
const Kn = { class: "previewBoxM" }, Mn = { class: "imgLoading" }, zn = /* @__PURE__ */ F("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Dn = [
  zn
], Un = ["src", "alt"], Nn = { class: "deleteModal" }, En = { class: "previewBoxM" }, Gn = {
  key: 0,
  class: "previewImg"
}, Hn = ["src", "alt"], Wn = { class: "deleteModal" }, jn = { class: "customFileListM" }, qn = {
  key: 0,
  class: "customFileListItem"
}, Jn = ["onClick", "title"], Yn = { class: "btBoxJ" }, Xn = { class: "customFileListM" }, Qn = {
  key: 0,
  class: "customFileListItem"
}, Zn = { class: "listLoading" }, eo = /* @__PURE__ */ F("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), to = [
  eo
], lo = ["onClick", "title"], ao = { class: "btBoxJ" };
var wl;
const Hl = /* @__PURE__ */ fe({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (wl = window == null ? void 0 : window.g) != null && wl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
  setup(t, { emit: i }) {
    const n = i, e = t, a = yt([]), o = yt([]), s = G(() => !e.manualUpload && e.showImg && m.value ? "img" : e.manualUpload && e.showImg && m.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !m.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !m.value) ? "list" : ""), d = G(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), r = G({
      get() {
        return e.manualUpload ? b.value : b.value.map((h) => ({ id: h }));
      },
      set(h) {
        e.manualUpload ? b.value = h || [] : b.value = (h == null ? void 0 : h.map((R) => R == null ? void 0 : R.id)) || [];
      }
    }), b = G({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((h) => h !== "--") : J(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(h) {
        if (e.length === 1) {
          let R = At(h);
          n("update:modelValue", R ?? null), n("on-change", R ?? null);
        } else
          n("update:modelValue", ue(h)), n("on-change", ue(h));
      }
    }), m = G(() => {
      let h;
      if (e.manualUpload ? h = r.value : h = o.value, !h)
        return !1;
      for (let R of h) {
        let $;
        if (e.manualUpload ? $ = R == null ? void 0 : R.type : $ = R == null ? void 0 : R.mimeType, !$ || $ && !(Lt($) || $ === "loading"))
          return !1;
      }
      return !0;
    });
    _e(
      () => r.value,
      async (h) => {
        if (s.value === "localImg")
          h != null && h.length ? a.value = await c(h) : a.value = [];
        else if (h != null && h.length && s.value !== "localList") {
          let R = ue(h);
          const $ = ue(o.value);
          for (let L of R)
            if ((L == null ? void 0 : L.name) === void 0)
              if (L.id) {
                const U = Pt($, (z) => (z == null ? void 0 : z.id) === L.id);
                U ? (L.name = U.name, L.mimeType = U.mimeType) : (L.mimeType = "loading", Ue.get(e.url + "/" + L.id).then((z) => {
                  var le, ye, j, se, ie, H;
                  L.name = ((j = (ye = (le = z == null ? void 0 : z.data) == null ? void 0 : le.returnValue) == null ? void 0 : ye[0]) == null ? void 0 : j.name) || O("r.file") + ol(h, L), L.mimeType = ((H = (ie = (se = z == null ? void 0 : z.data) == null ? void 0 : se.returnValue) == null ? void 0 : ie[0]) == null ? void 0 : H.mimeType) || "unknown", oa(o);
                }).catch(() => {
                  L.name = O("r.file") + ol(R, L);
                }));
              } else
                L.name = O("r.unknown");
          o.value = R;
        } else
          o.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function p(h) {
      return (h == null ? void 0 : h.name) || (h == null ? void 0 : h.split) && vt(h.split("/")) || h;
    }
    async function c(h) {
      let R = [];
      for (let $ of h) {
        let L = await xt($);
        R.push(L);
      }
      return R;
    }
    function g(h) {
      if (!e.disabled) {
        let R = r.value;
        R == null || R.splice(h, 1), r.value = R;
      }
    }
    function k(h) {
      h != null && h.id && window.open(e.url + "/" + h.id + "/download");
    }
    function v(h) {
      return e.manualUpload ? (h == null ? void 0 : h.type) && Lt(h.type) : (h == null ? void 0 : h.id) && h.mimeType && Lt(h.mimeType);
    }
    function C(h) {
      if (e.manualUpload) {
        if (!h)
          return;
        xt(h).then((R) => {
          tt(R);
        });
      } else
        h != null && h.id && tt(e.url + "/" + h.id + "/download?preview=true");
    }
    function w(h) {
      J(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : J(h) === "File" && xt(h).then((R) => {
        kn(h.name, R);
      });
    }
    function T(h) {
      var R, $;
      if (e.manualUpload) {
        if (h) {
          let L = Kl(h.name);
          if ((R = e.format) != null && R.length && e.format.indexOf(L) < 0)
            return Re(
              O("r.wrongFileType"),
              O("r.supportType") + ((($ = e.format) == null ? void 0 : $.length) && String(e.format) || O("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && h.size > e.maxSize * 1024)
            return Re(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let U = r.value;
          U == null || U.push(h), r.value = U;
        }
        return !1;
      } else
        return !0;
    }
    function B(h) {
      console.warn(h), Re(O("r.uploadError"), "", "error");
    }
    function S(h, R, $) {
      var L, U, z, le, ye, j;
      if ((h == null ? void 0 : h.code) === 0) {
        let se = r.value;
        R.id = (U = (L = h.data) == null ? void 0 : L[0]) == null ? void 0 : U.id, R.name = (le = (z = h.data) == null ? void 0 : z[0]) == null ? void 0 : le.name, R.mimeType = (j = (ye = h.data) == null ? void 0 : ye[0]) == null ? void 0 : j.mimeType, se == null || se.push(R), r.value = se;
      } else
        Re(O("r.uploadFail"), (h == null ? void 0 : h.message) || "", "error");
    }
    function K() {
      Re(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function P() {
      var h;
      Re(
        O("r.wrongFileType"),
        O("r.supportType") + (((h = e.format) == null ? void 0 : h.length) && String(e.format) || O("r.none")),
        "warning"
      );
    }
    function I(h) {
      let R = h == null ? void 0 : h.id, $ = h == null ? void 0 : h.mimeType;
      R && (J($) === "String" && $.indexOf("image") > -1 ? tt(e.url + "/" + R + "/download?preview=true") : window.open(e.url + "/" + R + "/download?preview=true"));
    }
    function _(h) {
      var $, L, U;
      let R = (U = (L = ($ = h == null ? void 0 : h.response) == null ? void 0 : $.data) == null ? void 0 : L[0]) == null ? void 0 : U.id;
      y(null, R);
    }
    function y(h, R) {
      if (!(!R && R !== 0) && !e.disabled && b.value.indexOf(R) !== -1) {
        const $ = ue(b.value);
        let L = r.value;
        L == null || L.splice($.indexOf(R), 1), r.value = L;
      }
    }
    return (h, R) => {
      var z, le, ye, j, se, ie;
      const $ = Z("Button"), L = Z("Upload"), U = Z("Icon");
      return x(), D("div", null, [
        Y(L, {
          name: "files",
          action: f(d),
          "before-upload": T,
          "on-error": B,
          "on-success": S,
          "on-exceeded-size": K,
          "on-preview": I,
          "on-remove": _,
          "on-format-error": P,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((z = f(r)) == null ? void 0 : z.length) && ((le = f(r)) == null ? void 0 : le.length) >= e.length || !!e.disabled
        }, {
          default: ee(() => {
            var H, re;
            return [
              Y($, {
                icon: "md-cloud-upload",
                class: xe({
                  disabledR: e.length && ((H = f(r)) == null ? void 0 : H.length) && ((re = f(r)) == null ? void 0 : re.length) >= e.length || !!e.disabled
                })
              }, {
                default: ee(() => [
                  ge(E(f(O)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        me(F("div", Kn, [
          (x(!0), D(be, null, Ce(f(o), (H) => (x(), D(be, {
            key: H == null ? void 0 : H.id
          }, [
            !e.manualUpload && H && H.id !== null ? (x(), D("div", {
              key: 0,
              class: xe(["previewImg", { previewLoading: H.mimeType === "loading" }])
            }, [
              me(F("div", Mn, Dn, 512), [
                [ve, H.mimeType === "loading"]
              ]),
              me(F("img", {
                src: h.url + "/" + H.id + "/download?preview=true",
                alt: H.name
              }, null, 8, Un), [
                [ve, H.mimeType !== "loading"]
              ]),
              me(F("div", Nn, [
                Y(U, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: f(O)("r.fView"),
                  onClick: (re) => f(tt)(e.url + "/" + H.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                Y(U, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (re) => y(re, H.id),
                  title: f(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, H.mimeType !== "loading"]
              ])
            ], 2)) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, f(s) === "img" && ((ye = f(o)) == null ? void 0 : ye.length)]
        ]),
        me(F("div", En, [
          (x(!0), D(be, null, Ce(f(a), (H, re) => (x(), D(be, {
            key: "manualImg" + re
          }, [
            e.manualUpload && H ? (x(), D("div", Gn, [
              F("img", {
                src: H,
                alt: "manualImg" + re
              }, null, 8, Hn),
              F("div", Wn, [
                Y(U, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (he) => f(tt)(H),
                  title: f(O)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Y(U, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (he) => g(re),
                  title: f(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, f(s) === "localImg" && ((j = f(a)) == null ? void 0 : j.length)]
        ]),
        me(F("div", jn, [
          (x(!0), D(be, null, Ce(f(r), (H, re) => (x(), D(be, {
            key: "manualItem" + re
          }, [
            e.manualUpload && H ? (x(), D("p", qn, [
              H.name ? (x(), Q(U, {
                key: 0,
                type: f(dl)(H.name)
              }, null, 8, ["type"])) : ce("", !0),
              F("span", {
                class: xe(["upNameT", { previewName: v(H) }]),
                onClick: (he) => w(H),
                title: f(O)("r.download")
              }, E(p(H)), 11, Jn),
              F("span", Yn, [
                v(H) ? (x(), Q(U, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (he) => C(H),
                  title: f(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : ce("", !0),
                Y(U, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (he) => g(re),
                  title: f(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, f(s) === "localList" && ((se = f(r)) == null ? void 0 : se.length)]
        ]),
        me(F("div", Xn, [
          (x(!0), D(be, null, Ce(f(o), (H, re) => (x(), D(be, {
            key: "defaultItem" + re
          }, [
            !e.manualUpload && H ? (x(), D("div", Qn, [
              me(F("div", Zn, to, 512), [
                [ve, H.mimeType === "loading"]
              ]),
              me(Y(U, {
                type: f(dl)(H.name)
              }, null, 8, ["type"]), [
                [ve, H.mimeType !== "loading"]
              ]),
              me(F("span", {
                class: xe(["upNameT", { previewName: v(H) }]),
                onClick: (he) => k(H),
                title: f(O)("r.download")
              }, E(H.name || f(O)("r.file") + (re + 1)), 11, lo), [
                [ve, H.mimeType !== "loading"]
              ]),
              me(F("span", ao, [
                v(H) ? (x(), Q(U, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (he) => C(H),
                  title: f(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : ce("", !0),
                Y(U, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (he) => g(re),
                  title: f(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ve, H.mimeType !== "loading"]
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [ve, f(s) === "list" && ((ie = f(o)) == null ? void 0 : ie.length)]
        ])
      ]);
    };
  }
}), no = /* @__PURE__ */ F("div", { class: "bRoot" }, null, -1), Wl = /* @__PURE__ */ fe({
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
  setup(t, { emit: i }) {
    const n = i, e = t, a = N(!1), o = N(!1), s = N(!1), d = G({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(C) {
        n("update:modelValue", [C, r.value]), n("on-change", [C, r.value]);
      }
    }), r = G({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(C) {
        n("update:modelValue", [d.value, C]), n("on-change", [d.value, C]);
      }
    }), b = G(
      () => (d.value || "") + ((d.value || r.value) && " - " || "") + (r.value || "")
    ), m = N();
    Me(() => {
      m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        s.value = !0;
      }), m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        s.value = !1;
      }), m.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (C) => {
        var w;
        !e.disabled && (d.value || r.value) && ((w = C == null ? void 0 : C.stopPropagation) == null || w.call(C), k());
      });
    });
    function p() {
      e.disabled || (a.value = !0);
    }
    function c(C) {
      d.value = C, a.value = !1, o.value = !0;
    }
    function g(C) {
      r.value = C, o.value = !1;
    }
    function k() {
      n("update:modelValue", [null, null]), n("on-change", [null, null]);
    }
    function v() {
      a.value = !1, o.value = !1, d.value && r.value === null && (d.value = null);
    }
    return (C, w) => {
      const T = Z("DatePicker"), B = Z("Icon"), S = Z("Input");
      return x(), D("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: m
      }, [
        Y(T, {
          open: f(o),
          modelValue: f(r),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: g,
          onOnClickoutside: v
        }, {
          default: ee(() => [
            no
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        Y(T, {
          open: f(a),
          modelValue: f(d),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: c,
          onOnClickoutside: v
        }, {
          default: ee(() => [
            F("div", { onClick: p }, [
              Y(S, {
                class: "aRoot",
                modelValue: f(b),
                "onUpdate:modelValue": w[0] || (w[0] = (K) => Pe(b) ? b.value = K : null),
                readonly: "",
                placeholder: e.placeholder || f(O)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: ee(() => [
                  Y(B, {
                    type: f(s) && (f(d) || f(r)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), oo = { class: "editor-pro-root" }, jl = /* @__PURE__ */ fe({
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
  setup(t, { emit: i }) {
    const n = i, e = t, a = yt(), o = G({
      get() {
        return e.modelValue;
      },
      set(m) {
        n("update:modelValue", m), n("on-change", m);
      }
    }), s = G(
      () => Object.assign(
        {
          placeholder: e.placeholder || O("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), d = G(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(m, p) {
                let c = new FormData();
                c.append("files", m);
                const g = m.name, k = e.imgUploadUrl ?? "/node-serve/file";
                Ue.post(k, c, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((v) => {
                  if (v && v.data)
                    if (Array.isArray(v.data))
                      for (let C of v.data) {
                        const w = k + "/" + (C == null ? void 0 : C.id) + "/download";
                        p(w, g, w);
                      }
                    else {
                      const C = k + "/" + v.data.id + "/download";
                      p(C, g, C);
                    }
                }).catch(() => {
                  Re(O("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(m, p) {
                let c = new FormData();
                c.append("files", m);
                const g = e.videoUploadUrl ?? "/node-serve/file";
                Ue.post(g, c, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let v of k.data) {
                        const C = g + "/" + (v == null ? void 0 : v.id) + "/download";
                        p(C);
                      }
                    else {
                      const v = g + "/" + k.data.id + "/download";
                      p(v);
                    }
                }).catch(() => {
                  Re(O("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), r = G(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function b(m) {
      a.value = m;
    }
    return _e(
      () => e.disabled,
      (m) => {
        m ? a.value.disable() : a.value.enable();
      }
    ), Vl(() => {
      a.value && a.value.destroy();
    }), (m, p) => (x(), D("div", oo, [
      me(Y(f(ba), {
        class: "editor-pro-toolbar",
        editor: f(a),
        defaultConfig: f(s),
        mode: m.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ve, !m.disabled]
      ]),
      Y(f(ka), {
        class: "editor-pro-editor",
        modelValue: f(o),
        "onUpdate:modelValue": p[0] || (p[0] = (c) => Pe(o) ? o.value = c : null),
        defaultConfig: f(d),
        mode: m.mode,
        onOnCreated: b,
        style: oe(f(r))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), io = {
  key: 19,
  class: "formInfoTxtXN"
}, so = {
  key: 20,
  class: "formTitleTxtXN"
}, yl = /* @__PURE__ */ fe({
  __name: "ItemR",
  props: {
    item: {},
    itemStyle: {},
    valGroup: {},
    tempKeys: {},
    inline: { type: Boolean },
    disabled: { type: Boolean },
    labelWidth: {},
    itemWidth: {},
    mgrUrl: {},
    uploadUrl: {}
  },
  emits: [
    "item-change",
    "re-validate",
    "select-input-change",
    "al-name-change",
    "async-label-change"
  ],
  setup(t, { emit: i }) {
    const n = i, e = t, a = G(() => {
      var p;
      if (e.inline)
        return e.itemWidth;
      {
        const c = (p = e.itemStyle) == null ? void 0 : p.width;
        if (c) {
          if (c.indexOf("%") > -1) {
            const g = Number(c.replace("%", ""));
            return window.isNaN(g) ? `calc(100% - ${e.labelWidth}px)` : `calc((100% - ${e.labelWidth}px)*${g / 100})`;
          } else if (c.indexOf("px") > -1)
            return c;
          return `calc(100% - ${e.labelWidth}px)`;
        }
        return `calc(100% - ${e.labelWidth}px)`;
      }
    });
    function o(p) {
      return {
        withInfo: !!p.info,
        withTitle: !!p.title,
        inlineFormItemXN: e.inline,
        noLabel: p.type === "selectInput",
        [p.class]: p.class,
        slotInput: p.slotPosition
      };
    }
    function s(p, c) {
      n("item-change", {
        e: p,
        root: c
      });
    }
    function d(p, c) {
      n("re-validate", {
        e: p,
        root: c
      });
    }
    function r(p) {
      n("select-input-change", p);
    }
    function b(p, c) {
      n("al-name-change", {
        name: p,
        root: c
      });
    }
    function m(p, c) {
      n("async-label-change", {
        label: p,
        root: c
      });
    }
    return (p, c) => {
      const g = Z("InputNumber"), k = Z("Input"), v = Z("Option"), C = Z("Select"), w = Z("Radio"), T = Z("Icon"), B = Z("RadioGroup"), S = Z("Checkbox"), K = Z("CheckboxGroup"), P = Z("DatePicker"), I = Z("TimePicker"), _ = Z("FormItem");
      return e.item ? (x(), Q(_, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: xe(["relativeBox", o(e.item)])
      }, {
        default: ee(() => [
          e.item.type === "txt" ? (x(), D("div", {
            key: 0,
            style: oe([e.itemStyle, { display: "inline-block" }]),
            class: xe({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, E(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (x(), Q(g, {
            key: 1,
            style: oe(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[0] || (c[0] = (y) => e.tempKeys[e.item.tempKey] = y),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || f(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: c[1] || (c[1] = (y) => s(y, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (x(), Q(k, {
            key: 2,
            style: oe(p.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (y) => e.tempKeys[e.item.tempKey] = y),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || f(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (y) => s(y, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, nt({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: ee(() => [
                Ae(p.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: ee(() => [
                F("span", null, E(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: ee(() => [
                F("span", null, E(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (x(), Q(C, {
            key: 3,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (y) => p.tempKeys[e.item.tempKey] = y),
            style: oe(p.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || f(O)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (y) => s(y, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: ee(() => [
              (x(!0), D(be, null, Ce(e.item.options, (y, h) => (x(), Q(v, {
                value: y.val,
                label: y.label || y.val,
                key: "option-" + e.item.key + h,
                disabled: !!y.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (x(), Q(Dl, {
            key: 4,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (y) => p.tempKeys[e.item.tempKey] = y),
            "label-width": p.labelWidth,
            "item-width": f(a),
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || f(O)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: r
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (x(), Q(El, {
            key: 5,
            style: oe(p.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (y) => e.valGroup[e.item.key] = y),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || f(O)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (y) => b(y, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (x(), Q(Nl, {
            key: 6,
            style: oe(p.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[9] || (c[9] = (y) => e.valGroup[e.item.key] = y),
            url: e.item.url || p.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || f(O)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: c[10] || (c[10] = (y) => m(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (x(), Q(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (y) => s(y, e.item))
          }, {
            default: ee(() => [
              ge(E(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (x(), Q(B, {
            key: 8,
            style: oe(p.itemStyle),
            onOnChange: c[13] || (c[13] = (y) => d(y, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (y) => p.tempKeys[e.item.tempKey] = y)
          }, {
            default: ee(() => [
              (x(!0), D(be, null, Ce(e.item.options, (y) => (x(), Q(w, {
                key: "radioItem" + y.val,
                label: y.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: ee(() => [
                  y.icon && !e.item.buttonType ? (x(), Q(T, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : ce("", !0),
                  F("span", null, E(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (x(), Q(S, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (y) => e.valGroup[e.item.key] = y),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (y) => s(y, e.item))
          }, {
            default: ee(() => [
              ge(E(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (x(), Q(K, {
            key: 10,
            style: oe(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (y) => p.tempKeys[e.item.tempKey] = y),
            onOnChange: c[18] || (c[18] = (y) => d(y, e.item))
          }, {
            default: ee(() => [
              (x(!0), D(be, null, Ce(e.item.options, (y) => (x(), Q(S, {
                key: "checkItem" + y.val,
                label: y.val,
                disabled: !!e.item.disabled || e.disabled || y.disabled
              }, {
                default: ee(() => [
                  y.icon ? (x(), Q(T, {
                    key: 0,
                    type: y.icon
                  }, null, 8, ["type"])) : ce("", !0),
                  F("span", null, E(y.label || y.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (x(), Q(k, {
            key: 11,
            type: "textarea",
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (y) => p.tempKeys[e.item.tempKey] = y),
            autosize: e.item.autosize || { minRows: 2 },
            style: oe(p.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || f(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (y) => s(y, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (x(), Q(Hl, {
            key: 12,
            style: oe(p.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[21] || (c[21] = (y) => e.valGroup[e.item.key] = y),
            url: e.item.url || p.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: c[22] || (c[22] = (y) => d(y, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (x(), Q(P, {
            key: 13,
            style: oe(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[23] || (c[23] = (y) => p.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || f(O)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: c[24] || (c[24] = (y) => s(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (x(), Q(I, {
            key: 14,
            style: oe(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[25] || (c[25] = (y) => p.tempKeys[e.item.tempKey] = y),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || f(O)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: c[26] || (c[26] = (y) => s(y, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (x(), Q(Wl, {
            key: 15,
            style: oe(p.itemStyle),
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (y) => p.tempKeys[e.item.tempKey] = y),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || f(O)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (y) => s(y, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (x(), Q(jl, {
            key: 16,
            class: "inlineBlock",
            style: oe(p.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (y) => e.valGroup[e.item.key] = y),
            placeholder: e.item.placeholder || f(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (y) => s(y, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (x(), Q(Ul, {
            key: 17,
            modelValue: p.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (y) => p.tempKeys[e.item.tempKey] = y),
            style: oe(p.itemStyle),
            placeholder: e.item.placeholder || f(O)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (y) => s(y, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (x(), D("div", {
            key: 18,
            class: "inlineBlock",
            style: oe(p.itemStyle)
          }, [
            Ae(p.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ce("", !0),
          e.item.info ? (x(), D("div", io, E(e.item.info), 1)) : ce("", !0),
          e.item.title ? (x(), D("div", so, E(e.item.title), 1)) : ce("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ce("", !0);
    };
  }
}), ro = /* @__PURE__ */ F("input", { type: "text" }, null, -1), uo = { class: "inlineBlock" }, Vt = /* @__PURE__ */ fe({
  __name: "FormR",
  props: {
    formData: { default: () => [] },
    formRules: { default: () => ({}) },
    showMessage: { type: Boolean, default: !0 },
    labelWidth: { default: 160 },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    inline: { type: Boolean, default: !1 },
    showLongOkBt: { type: Boolean, default: !1 },
    longOkBtTxt: {},
    showInlineOkBt: { type: Boolean, default: !1 },
    inlineOkBtTxt: {},
    showInlineClearBt: { type: Boolean, default: !1 },
    inlineClearBtTxt: {},
    disabled: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 },
    trim: { type: Boolean, default: !0 },
    teamClass: { default: "formTeamBox" }
  },
  emits: ["on-item-change", "on-reset", "on-re-render", "on-submit"],
  setup(t, { expose: i, emit: n }) {
    var ll, al;
    const e = n, a = t, o = N(null), s = N({}), d = N([]), r = N({});
    let b = [];
    const m = ((ll = window == null ? void 0 : window.g) == null ? void 0 : ll.mgrURL) ?? "";
    let p = [], c = [];
    const g = N(!1), k = N(Math.random() * 1e8 + 1e3), v = (al = window == null ? void 0 : window.g) != null && al.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let C = !1;
    const w = G(() => Array.isArray(a.formData.length ? a.formData[0] : !1)), T = G(
      () => a.inline ? {
        width: a.itemWidth + a.labelWidth + "px"
      } : {}
    ), B = G(
      () => a.inline ? {
        width: "100%"
      } : { width: a.contentWidth }
    ), S = G(() => {
      let u = ue(a.formRules);
      for (let l in u)
        if (u.hasOwnProperty(l))
          if (Array.isArray(u[l]))
            for (let A of u[l])
              A && A && !(A.message || A.validator) && (A.message = O("r.required"));
          else
            J(u[l]) === "Object" && (u[l].message || u[l].validator || (u[l].message = O("r.required")));
      return u;
    }), K = G(() => {
      let u = [];
      if (w.value)
        for (let l of d.value)
          _(l, u);
      else
        _(d.value, u);
      return u.concat(p, c);
    }), P = G(() => {
      let u = [];
      if (w.value)
        for (let l of d.value)
          y(l, u);
      else
        y(d.value, u);
      return u;
    });
    function I(u) {
      return u.filter((l) => l == null ? void 0 : l.slotName);
    }
    function _(u, l) {
      for (let A of u)
        if (A.showing === !0 && A.key && A.type !== "selectInput" && (l.push(A.key), A.key2 && l.push(A.key2), A.collectLabel)) {
          if (!Array.isArray(A.collectLabel) && A.collectLabel.key)
            l.push(A.collectLabel.key);
          else if (Array.isArray(A.collectLabel))
            for (let V of A.collectLabel)
              V.key && l.push(V.key);
        }
    }
    function y(u, l) {
      for (let A of u)
        A.showing === !0 && A.key && A.type !== "selectInput" && l.push(A.key);
    }
    function h() {
      return new Promise((u) => {
        L(), $().then(() => {
          e("on-reset"), u(!0);
        });
      });
    }
    function R() {
      return new Promise((u) => {
        for (let l of b)
          l();
        b = [], r.value = {}, W(), re(), $().then(() => {
          e("on-re-render"), u(!0);
        });
      });
    }
    function $() {
      return new Promise((u) => {
        k.value = Math.floor(Math.random() * 1e8 + 1e3), Le(function() {
          u(!0);
        });
      });
    }
    function L() {
      let u = le();
      for (let l in s.value)
        if (s.value.hasOwnProperty(l))
          if (Be(u[l]))
            s.value[l] = u[l];
          else if (Array.isArray(s.value[l]))
            s.value[l] = [];
          else if (J(s.value[l]) === "Boolean")
            s.value[l] = !1;
          else {
            const A = et(a.formData, (V) => (V == null ? void 0 : V.key) === l);
            A && (A.type === "editor" || A.type === "editorPro") ? s.value[l] = "" : s.value[l] = null;
          }
      U(u);
    }
    function U(u) {
      for (let l in r.value)
        r.value.hasOwnProperty(l) && (Be(u[l]) ? r.value[l] = u[l] : Array.isArray(r.value[l]) ? r.value[l] = [] : J(r.value[l]) === "Object" && r.value[l].hasOwnProperty("key") && r.value[l].hasOwnProperty("val") ? r.value[l].val = null : r.value[l] = null);
    }
    function z(u) {
      let l = le();
      Be(l[u]) ? r.value[u] = l[u] : Array.isArray(r.value[u]) ? r.value[u] = [] : r.value[u] = null;
    }
    function le() {
      let u = {};
      if (w.value)
        for (let l of d.value)
          ye(l, u);
      else
        ye(d.value, u);
      return u;
    }
    function ye(u, l) {
      for (let A of u)
        A.tempKey && Be(A.defaultVal) && H(A, l), A.key && Be(A.defaultVal) && (l[A.key] = A.defaultVal), A.key2 && Be(A.defaultVal2) && (l[A.key2] = A.defaultVal2);
    }
    function j(u) {
      if (u.show) {
        if (J(u.show) === "Object")
          return ie(u, se(u.show));
        if (Array.isArray(u.show))
          if (u.showOr) {
            for (let l of u.show)
              if (se(l) === !0)
                return ie(u, !0);
            return ie(u, !1);
          } else {
            for (let l of u.show)
              if (se(l) === !1)
                return ie(u, !1);
            return ie(u, !0);
          }
        else if (typeof u.show == "function")
          return ie(u, u.show(s.value));
      } else
        u.showing || (u.showing = !0);
      return !0;
    }
    function se(u) {
      if (u.reg && typeof u.reg.test == "function")
        return u.reg.test(s.value[u.key]);
      if (Array.isArray(u.val)) {
        for (let l of u.val) {
          if ((s.value[u.key] || s.value[u.key] === 0 || s.value[u.key] === !1) && l === ".")
            return !0;
          if (s.value[u.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function ie(u, l) {
      return !u.showing && l && u.key ? (u.showing = l, u.defaultVal !== void 0 && (u.tempKey ? (r.value[u.tempKey] === null || r.value[u.tempKey] === void 0 || (J(r.value[u.tempKey]) === "Object" || Array.isArray(r.value[u.tempKey])) && Oe(r.value[u.tempKey])) && H(u, r.value) : (s.value[u.key] === null || s.value[u.key] === void 0) && (s.value[u.key] = u.defaultVal), u.key2 && u.deafultVal2 !== void 0 && (s.value[u.key2] === null || s.value[u.key2] === void 0) && u.type !== "inputMap" && (s.value[u.key2] = u.defaultVal2)), u.tempKey && de(r.value[u.tempKey], u)) : u.showing = l, l;
    }
    function H(u, l) {
      switch (u.type) {
        case "selectInput":
          l[u.tempKey] = {
            key: u.key,
            val: u.defaultVal
          };
          break;
        case "inputMap":
          u.key3 ? l[u.tempKey] = {
            lng: u.defaultVal || 0,
            lat: u.defaultVal2 || 0,
            name: u.defaultVal3 || ""
          } : l[u.tempKey] = {
            lng: u.defaultVal || 0,
            lat: u.defaultVal2 || 0
          };
          break;
        case "input":
        case "inputNumber":
        case "textarea":
          l[u.tempKey] = u.defaultVal;
          break;
        case "radioGroup":
        case "select":
        case "checkboxGroup":
          u.booleanVal ? l[u.tempKey] = u.defaultVal ? 1 : 0 : l[u.tempKey] = u.defaultVal;
          break;
        case "date":
        case "time":
        case "monthRange":
          u.dateType === "date" || u.dateType === "datetime" || u.dateType === "time" || u.dateType === "year" || u.dateType === "month" ? l[u.tempKey] = u.defaultVal : (u.dateType === "daterange" || u.dateType === "datetimerange" || u.dateType === "timerange" || u.type === "monthRange") && (l[u.tempKey] = u.defaultVal && u.defaultVal2 && [u.defaultVal, u.defaultVal2] || []);
          break;
      }
    }
    function re() {
      let u = ue(a.formData);
      if (w.value)
        for (let l of u)
          he(l);
      else
        he(u);
      d.value = u;
    }
    function he(u) {
      for (let l of u)
        switch (l.type) {
          case "selectInput":
            const A = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = A, r.value[A] = N({
              key: l.key || null,
              val: l.defaultVal || null
            }), b.push(
              _e(
                () => r.value[A],
                (q) => {
                  de(q, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const V = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = V, l.key3 ? r.value[V] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : r.value[V] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, b.push(
              _e(
                () => r.value[V],
                (q) => {
                  de(q, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const te = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = te, r.value[te] = l.defaultVal !== void 0 ? l.defaultVal : null, b.push(
              _e(
                () => r.value[te],
                (q) => {
                  de(q, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (l.options || (l.options = []), (l.type === "checkboxGroup" || l.type === "radioGroup") && (l.options = N(ue(l.options))), l.asyncOption)
              if (l.changeOption)
                if (Array.isArray(l.changeOption)) {
                  let q = !0;
                  for (let X of l.changeOption)
                    if (!X.valKey || !X.key) {
                      q = !1;
                      break;
                    }
                  q ? b.push(
                    _e(
                      () => {
                        let X = "";
                        if (Array.isArray(l.changeOption))
                          for (let pe of l.changeOption) {
                            let De = s.value[pe.valKey];
                            if (De || De === 0 || De === !1)
                              X += "&" + pe.key + "=" + De;
                            else if (!pe.notRequired)
                              return !1;
                          }
                        return X;
                      },
                      (X) => {
                        let pe = ue(r.value[l.tempKey]);
                        if (r.value[l.tempKey] = null, X && l.optionUrl) {
                          let De = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          ze((De + X).replace(/\?&/, "?"), l, pe);
                        } else
                          l.localOption ? Ne(l.options, [...l.localOption]) : Ne(l.options, []), Be(pe) && Je(pe, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : l.localOption ? Ne(l.options, [...l.localOption]) : Ne(l.options, []);
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && b.push(
                    _e(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? s.value[l.changeOption.valKey] : !1,
                      (q) => {
                        let X = ue(r.value[l.tempKey]);
                        if (r.value[l.tempKey] = null, (q || q === 0 || q === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let pe = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          ze((pe + "&" + l.changeOption.key + "=" + q).replace(/\?&/, "?"), l, X);
                        } else
                          l.localOption ? Ne(l.options, [...l.localOption]) : Ne(l.options, []), Be(X) && Je(X, l);
                      },
                      { immediate: !0 }
                    )
                  ) : J(l.changeOption) === "Boolean" && b.push(
                    _e(
                      () => {
                        const q = et(a.formData, (X) => (X == null ? void 0 : X.key) === l.key);
                        return q.optionUrl = ia(q.optionUrl), q.optionUrl.value;
                      },
                      (q) => {
                        let X = ue(r.value[l.tempKey]);
                        r.value[l.tempKey] = null, q ? ze(q, l, X) : (l.localOption ? Ne(l.options, [...l.localOption]) : Ne(l.options, []), Be(X) && Je(X, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && ze(l.optionUrl, l);
            else
              J(l.borrowOption) === "String" && Le(function() {
                l.options = et(d.value, (q) => (q == null ? void 0 : q.key) === l.borrowOption).options;
              });
            const ae = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = ae, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? r.value[ae] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? r.value[ae] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : r.value[ae] = l.defaultVal !== void 0 ? l.defaultVal : null, b.push(
              _e(
                () => r.value[ae],
                (q) => {
                  de(q, l);
                },
                {
                  immediate: !0
                }
              )
            ));
            break;
          case "date":
          case "time":
          case "monthRange":
            const Se = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = Se, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? r.value[Se] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (r.value[Se] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), b.push(
              _e(
                () => r.value[Se],
                (q) => {
                  de(q, l);
                }
              )
            );
            break;
        }
    }
    function ze(u, l, A) {
      Ue.get(u).then((V) => {
        var Se;
        let te;
        if (Pe(l.options) ? te = l.options.value : te = l.options, !te)
          return;
        let ae = ((Se = V == null ? void 0 : V.data) == null ? void 0 : Se.records) || (V == null ? void 0 : V.data) || V || [];
        Array.isArray(ae) ? (l.optionFilter && J(l.optionFilter) === "Function" && (ae = l.optionFilter(ae)), l.optionLabel && l.optionVal ? (te.length = 0, te.push(
          ...ae.map((q) => {
            let X;
            if (Array.isArray(l.optionLabel)) {
              let pe = "";
              l.optionLabel.forEach((De, nl) => {
                let St = String(q[De]);
                nl === 1 ? pe += "（" + St : nl > 1 ? pe += "、" + St : pe += St;
              }), X = {
                label: pe + "）",
                val: l.optionVal && q[l.optionVal]
              };
            } else
              X = {
                label: l.optionLabel && q[l.optionLabel],
                val: l.optionVal && q[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let pe of l.collectLabel)
                  pe.valKey && pe.valKey !== "label" && (X[pe.valKey] = q[pe.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (X[l.collectLabel.valKey] = q[l.collectLabel.valKey]);
            if (X.val !== null && X.val !== void 0)
              return X;
          })
        )) : (te.length = 0, te.push(...ae))) : te.length = 0, l.localOption && te.unshift(...l.localOption), Be(A) && Je(A, l), l.disableOptionByOthers && (J(l.disableOptionByOthers) === "String" ? b.push(
          _e(
            () => s.value[l.disableOptionByOthers],
            (q) => {
              if (z(l.tempKey), !!te) {
                for (let X of te)
                  X.disabled && (X.disabled = !1);
                if (q || q === 0 || q === !1)
                  for (let X of te)
                    X.val === q && (X.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && b.push(
          _e(
            () => l.disableOptionByOthers.filter((q) => q).map((q) => s.value[q]),
            (q) => {
              if (z(l.tempKey), !!te) {
                for (let X of te)
                  X.disabled && (X.disabled = !1);
                if (q) {
                  for (let X of te)
                    for (let pe = 0; pe < q.length; pe++)
                      if (X.val === q[pe]) {
                        X.disabled = !0, q.splice(pe, 1);
                        break;
                      }
                }
              }
            },
            {
              immediate: !0
            }
          )
        ));
      }).catch(() => {
        console.warn("拉取选项出错");
      });
    }
    function Je(u, l) {
      Array.isArray(Tt(l.options)) && Cl(Tt(l.options), { val: u }) !== -1 && (r.value[l.tempKey] = u);
    }
    function W() {
      if (s.value = {}, w.value)
        for (let u of a.formData)
          M(u);
      else
        M(a.formData);
    }
    function M(u) {
      for (let l of u)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (s.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function de(u, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            u && (u.beforeKey && delete s.value[u.beforeKey], s.value[u.key] = u.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            u ? (s.value[l.key] = u.lng, s.value[l.key2] = u.lat, l.key3 && (s.value[l.key3] = u.name)) : (s.value[l.key] = null, s.value[l.key2] = null, l.key3 && (s.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (u || u === 0) {
              let te = /^-?\d+(.\d+)?$/;
              l.numberVal && te.test(u) ? s.value[l.key] = Number(u) : s.value[l.key] = u;
            } else
              s.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? s.value[l.key] = u === void 0 || u === "" || u === null ? null : !!u : l.multiple || l.type === "checkboxGroup" ? s.value[l.key] = Object.assign([], u) : s.value[l.key] = u, l.collectLabel) {
              const te = ke(l, u);
              if (Array.isArray(l.collectLabel)) {
                for (let ae of l.collectLabel)
                  if (ae != null && ae.key && ae.valKey) {
                    const Se = we(ae.key);
                    let q = null;
                    Array.isArray(te) ? (q = te.map((pe) => pe[ae.valKey]), s.value[ae.key] = q, Se && (r.value[Se] = q)) : (te && Be(te[ae.valKey]) && (q = te[ae.valKey]), s.value[ae.key] = q, Se && (r.value[Se] = q));
                    let X = et(d.value, (pe) => (pe == null ? void 0 : pe.key) === ae.key);
                    X && X.tempKey && (r.value[X.tempKey] = s.value[ae.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const ae = we(l.collectLabel.key);
                let Se = null;
                Array.isArray(te) ? (Se = te.map(
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && X[l.collectLabel.valKey]
                ), s.value[l.collectLabel.key] = Se, ae && (r.value[ae] = Se)) : (te && Be(te[l.collectLabel.valKey]) && (Se = te[l.collectLabel.valKey]), s.value[l.collectLabel.key] = Se, ae && (r.value[ae] = Se));
                let q = et(
                  d.value,
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && (X == null ? void 0 : X.key) === l.collectLabel.key || !1
                );
                q && q.tempKey && (r.value[q.tempKey] = s.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let A = l.dateType;
            const V = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (A === "date" || A === "datetime" || A === "time" || A === "year" || A === "month")
              u ? (A === "time" ? s.value[l.key] = u : s.value[l.key] = rt(u).format(typeof l.format == "string" ? l.format : V[A]), A === "date" && l.addTime && (s.value[l.key] += " 00:00:00")) : s.value[l.key] = null;
            else if (l.type === "monthRange" || A === "daterange" || A === "datetimerange" || A === "timerange") {
              if (!l.key2)
                return;
              u && u[0] && u[1] ? (A === "timerange" ? (s.value[l.key] = u[0], s.value[l.key2] = u[1]) : l.type === "monthRange" ? (s.value[l.key] = typeof l.format == "string" && rt(u[0]).format(l.format) || u[0], s.value[l.key2] = typeof l.format == "string" && l.format && rt(u[1]).format(l.format) || u[1]) : (s.value[l.key] = rt(u[0]).format(l.format || A && V[A]), s.value[l.key2] = rt(u[1]).format(l.format || A && V[A])), A === "daterange" && l.addTime && (s.value[l.key] += " 00:00:00", s.value[l.key2] += " 23:59:59")) : (s.value[l.key] = null, s.value[l.key2] = null);
            }
            break;
        }
    }
    function ke(u, l) {
      const A = Tt(u.options);
      if (A)
        if (u != null && u.multiple || u.type === "checkboxGroup") {
          if (l) {
            let V = [];
            for (let te of A)
              l.indexOf(te == null ? void 0 : te.val) !== -1 && V.push(te);
            return V;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let V of A)
              if ((V == null ? void 0 : V.val) === l)
                return V;
          }
          return !1;
        }
    }
    function we(u) {
      if (w.value) {
        for (let l of d.value) {
          const A = ne(l, u);
          if (A)
            return A;
        }
        return !1;
      }
      return ne(d.value, u);
    }
    function ne(u, l) {
      for (let A of u)
        if (A.key === l)
          return A.tempKey;
      return !1;
    }
    function Fe(u, l) {
      let A = {};
      for (let V in s.value)
        s.value.hasOwnProperty(V) && u[V] !== void 0 && (A[V] = u[V], delete u[V]);
      it(A, l);
      for (let V in u)
        u.hasOwnProperty(V) && (c.indexOf(V) < 0 && c.push(V), s.value[V] = u[V]);
    }
    function Ye(u) {
      let l = ue(u);
      if (w.value) {
        let A = [];
        for (let V of a.formData)
          A.push(...Xe(V, l));
        return A;
      }
      return Xe(a.formData, l);
    }
    function Xe(u, l) {
      return u.filter((A) => {
        for (let V of Object.keys(l))
          if ((A == null ? void 0 : A.key) === V && P.value.indexOf(V) > -1 && !(l[V] === null || (Array.isArray(l[V]) || J(l[V]) === "Object") && Oe(l[V])))
            return delete l[V], !0;
        return !1;
      }).map((A) => A == null ? void 0 : A.key);
    }
    function it(u, l = !1) {
      let A = ue(u);
      He(u, l);
      for (let V in s.value)
        if (s.value.hasOwnProperty(V) && u[V] !== void 0 && u[V] !== "--") {
          if (Array.isArray(u[V]))
            u[V] = u[V].filter((te) => te !== "--");
          else if (J(u[V]) === "Object")
            for (let te in u[V])
              u[V].hasOwnProperty(te) && u[V][te] === "--" && (u[V][te] = null);
          s.value[V] = u[V];
        } else
          l || (s.value[V] = Array.isArray(s.value[V]) ? [] : null);
      Le(function() {
        Ql(Ye(A));
      });
    }
    function He(u, l = !1) {
      if (w.value)
        for (let A of d.value)
          pt(A, u, l);
      else
        pt(d.value, u, l);
    }
    function pt(u, l, A = !1) {
      for (let V of u)
        if (V.key && (A && (l[V.key] !== void 0 || V.key2 && l[V.key2] !== void 0) || !A) && V.tempKey)
          switch (V.type) {
            case "inputMap":
              if (!V.key2)
                continue;
              J(l[V.key]) === "Number" && J(l[V.key2] === "Number") ? V.key3 ? r.value[V.tempKey] = {
                lng: l[V.key],
                lat: l[V.key2],
                name: l[V.key3]
              } : r.value[V.tempKey] = {
                lng: l[V.key],
                lat: l[V.key2]
              } : V.key3 ? r.value[V.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : r.value[V.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[V.key] && l[V.key] !== "--" || l[V.key] === 0 ? r.value[V.tempKey] = l[V.key] : r.value[V.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[V.key] && l[V.key] !== "--" || l[V.key] === 0 || l[V.key] === !1 ? V.multiple || V.type === "checkboxGroup" ? r.value[V.tempKey] = [...l[V.key]] : V.booleanVal ? r.value[V.tempKey] = l[V.key] ? 1 : 0 : r.value[V.tempKey] = l[V.key] : V.multiple || V.type === "checkboxGroup" ? r.value[V.tempKey] = [] : r.value[V.tempKey] = null;
              break;
            case "date":
            case "time":
              if (V.dateType === "date" || V.dateType === "datetime" || V.dateType === "year" || V.dateType === "month" || V.dateType === "time")
                r.value[V.tempKey] = l[V.key] && l[V.key] !== "--" ? l[V.key] : null;
              else if (V.dateType === "daterange" || V.dateType === "datetimerange" || V.dateType === "timerange") {
                if (!V.key2)
                  continue;
                r.value[V.tempKey] = l[V.key] && l[V.key] !== "--" && l[V.key2] && l[V.key2] !== "--" && [l[V.key], l[V.key2]] || [];
              }
              break;
          }
    }
    function Jl(u) {
      if (Array.isArray(u))
        for (let l of u)
          Yt(l);
      else
        J(u) === "Object" && Yt(u);
    }
    function Yt(u) {
      const { index: l, indexB: A, key: V, val: te } = u;
      if (typeof l == "number")
        if (Array.isArray(d.value[l])) {
          if (typeof A == "number")
            if (V && u.hasOwnProperty("val"))
              d.value[l][A][V] = te;
            else
              for (let ae of Object.keys(u))
                ae !== "index" && V !== "indexB" && (d.value[l][A][ae] = u[ae]);
        } else if (V && u.hasOwnProperty("val"))
          d.value[l][V] = te;
        else
          for (let ae of Object.keys(u))
            ae !== "index" && (d.value[l][ae] = u[ae]);
    }
    function Xt({ label: u, root: l }) {
      l.key2 && (s.value[l.key2] = u), Qe({
        e: u,
        root: l
      });
    }
    function Qt(u) {
      u.beforeKey && da(p, (l) => l === u.beforeKey), u.key && (p.indexOf(u.key) === -1 && p.push(u.key), Qe({
        e: null,
        root: u
      }));
    }
    function Zt({ name: u, root: l }) {
      l.key2 && (s.value[l.key2] = u), Qe({
        e: u,
        root: l
      });
    }
    function el({ e: u, root: l }) {
      Qe({
        e: u,
        root: l
      }), Le(function() {
        var A, V;
        (V = (A = o.value) == null ? void 0 : A.validateField) == null || V.call(A, l.key);
      });
    }
    function Qe({ e: u, root: l }) {
      $e(() => {
        let A = {
          event: u
        };
        if (l.key && (A[l.key] = s.value[l.key]), l.key2 && (A[l.key2] = s.value[l.key2]), Array.isArray(l.collectLabel))
          for (let V of l.collectLabel)
            A[V.key] = s.value[V.key];
        else
          l.collectLabel && l.collectLabel.key && (A[l.collectLabel.key] = s.value[l.collectLabel.key]);
        e("on-item-change", A);
      }, 500);
    }
    function tl() {
      let u = {};
      for (let l of K.value)
        u[l] = s.value[l];
      return a.trim && (u = kt(u)), u;
    }
    function Yl() {
      var u, l;
      (l = (u = o.value) == null ? void 0 : u.validate) == null || l.call(u);
    }
    function Xl(u) {
      $e(() => {
        var l, A;
        (A = (l = o.value) == null ? void 0 : l.validateField) == null || A.call(l, u, () => {
        });
      }, 10);
    }
    function Ql(u) {
      $e(() => {
        var l, A;
        if (Array.isArray(u))
          for (let V of u)
            (A = (l = o.value) == null ? void 0 : l.validateField) == null || A.call(l, V, () => {
            });
      }, 10);
    }
    function Zl(u) {
      u !== void 0 && (g.value = !!u);
    }
    function Ct() {
      var u, l;
      a.disabled || (l = (u = o.value) == null ? void 0 : u.validate) == null || l.call(u, (A) => {
        C || (C = !0, A && (g.value = !0, e("on-submit", tl())), $e(() => {
          C = !1;
        }, 2e3));
      });
    }
    return Me(() => {
      W(), re();
    }), i({
      resetForm: h,
      refreshFormDom: $,
      reRenderForm: R,
      setItemToValGroup: Fe,
      updateValGroup: it,
      updateFormDataT: Jl,
      validate: Yl,
      reValidate: Xl,
      changeLoading: Zl,
      getValGroup: tl,
      submit: Ct
    }), (u, l) => {
      const A = Z("FormItem"), V = Z("Button"), te = Z("Form");
      return x(), Q(te, {
        ref_key: "formGroupXRef",
        ref: o,
        model: f(s),
        rules: f(S),
        "label-width": a.labelWidth,
        inline: a.inline,
        "show-message": a.showMessage,
        class: "formXN",
        key: f(k)
      }, {
        default: ee(() => [
          Y(A, { style: { display: "none" } }, {
            default: ee(() => [
              ro
            ]),
            _: 1
          }),
          f(w) ? (x(!0), D(be, { key: 0 }, Ce(f(d), (ae, Se) => (x(), D("div", {
            class: xe([u.teamClass, "formTeamBox" + Se]),
            key: "formTeamBox" + Se
          }, [
            (x(!0), D(be, null, Ce(ae, (q, X) => (x(), D(be, {
              key: "formItem" + X
            }, [
              j(q) ? (x(), Q(yl, {
                key: 0,
                item: q,
                style: oe(f(T)),
                "item-style": f(B),
                "val-group": f(s),
                "temp-keys": f(r),
                inline: a.inline,
                disabled: a.disabled,
                "label-width": a.labelWidth,
                "item-width": a.itemWidth,
                "mgr-url": f(m),
                "upload-url": f(v),
                onItemChange: Qe,
                onReValidate: el,
                onClearTempKeyItem: z,
                onSelectInputChange: Qt,
                onAlNameChange: Zt,
                onAsyncLabelChange: Xt
              }, nt({ _: 2 }, [
                Ce(I(ae), (pe) => ({
                  name: pe.slotName,
                  fn: ee((De) => [
                    Ae(u.$slots, pe.slotName, {
                      valGroup: De.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ce("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ce("", !0),
          (x(!0), D(be, null, Ce(f(d), (ae, Se) => (x(), D(be, {
            key: "formItem" + Se
          }, [
            !f(w) && j(ae) ? (x(), Q(yl, {
              key: 0,
              item: ae,
              style: oe(f(T)),
              "item-style": f(B),
              "val-group": f(s),
              "temp-keys": f(r),
              inline: a.inline,
              disabled: a.disabled,
              "label-width": a.labelWidth,
              "item-width": a.itemWidth,
              "mgr-url": f(m),
              "upload-url": f(v),
              onItemChange: Qe,
              onReValidate: el,
              onClearTempKeyItem: z,
              onSelectInputChange: Qt,
              onAlNameChange: Zt,
              onAsyncLabelChange: Xt
            }, nt({ _: 2 }, [
              Ce(I(u.formData), (q) => ({
                name: q.slotName,
                fn: ee((X) => [
                  Ae(u.$slots, q.slotName, {
                    valGroup: X.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ce("", !0)
          ], 64))), 128)),
          a.showLongOkBt ? (x(), Q(A, { key: 1 }, {
            default: ee(() => [
              Y(V, {
                onClick: Ct,
                style: oe(f(B)),
                type: "primary",
                loading: a.btnLoading && f(g),
                disabled: a.disabled
              }, {
                default: ee(() => [
                  ge(E(a.longOkBtTxt || f(O)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ce("", !0),
          F("div", uo, [
            a.showInlineOkBt ? (x(), Q(V, {
              key: 0,
              type: "primary",
              class: xe({ inlineFormBtXN: a.inline, okBtnXN: !0 }),
              onClick: Ct,
              loading: a.btnLoading && f(g),
              disabled: a.disabled
            }, {
              default: ee(() => [
                ge(E(a.inlineOkBtTxt || f(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ce("", !0),
            a.showInlineClearBt ? (x(), Q(V, {
              key: 1,
              onClick: h,
              class: xe({ inlineFormBtXN: a.inline }),
              type: "dashed"
            }, {
              default: ee(() => [
                ge(E(a.inlineClearBtTxt || f(O)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ce("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), co = /* @__PURE__ */ fe({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: () => Ve().formGroupWidth },
    labelWidth: { default: () => Ve().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(t, { expose: i, emit: n }) {
    const e = n, a = t, o = N({ width: a.with }), s = N(!1), d = N(), r = G(() => {
      var P, I;
      if (Array.isArray(a.formData))
        if (Array.isArray(a.formData[0])) {
          let _ = [];
          for (let y of a.formData)
            y && (_ = _.concat(
              y.filter((h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition)
            ));
          return _;
        } else
          return (I = (P = a.formData) == null ? void 0 : P.filter) == null ? void 0 : I.call(
            P,
            (_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition
          );
      return [];
    });
    function b() {
      return new Promise((P) => {
        var I, _;
        (_ = (I = d.value).resetForm) == null || _.call(I).then((y) => {
          P(y);
        });
      });
    }
    function m() {
      return new Promise((P) => {
        var I, _;
        (_ = (I = d.value).refreshFormDom) == null || _.call(I).then((y) => {
          P(y);
        });
      });
    }
    function p() {
      return new Promise((P) => {
        var I, _;
        (_ = (I = d.value).reRenderForm) == null || _.call(I).then((y) => {
          P(y);
        });
      });
    }
    function c(P, I) {
      var _, y;
      (y = (_ = d.value).setItemToValGroup) == null || y.call(_, P, I);
    }
    function g(P, I) {
      var _, y;
      (y = (_ = d.value).updateValGroup) == null || y.call(_, P, I);
    }
    function k(P) {
      var I, _;
      (_ = (I = d.value).updateFormDataT) == null || _.call(I, P);
    }
    function v() {
      var P, I;
      (I = (P = d.value).validate) == null || I.call(P);
    }
    function C(P) {
      var I, _;
      (_ = (I = d.value).reValidate) == null || _.call(I, P);
    }
    function w(P) {
      var I, _;
      P !== void 0 && (s.value = !!P, (_ = (I = d.value).changeLoading) == null || _.call(I, s.value));
    }
    function T() {
      var P, I;
      return (I = (P = d.value).getValGroup) == null ? void 0 : I.call(P);
    }
    function B() {
      s.value = !0;
    }
    function S() {
      var P, I;
      (I = (P = d.value).submit) == null || I.call(P);
    }
    function K() {
      e("on-cancel"), $e(() => {
        var P, I;
        s.value = !1, (I = (P = d.value).changeLoading) == null || I.call(P, !1);
      }, 1e3);
    }
    return i({
      resetForm: b,
      refreshFormDom: m,
      reRenderForm: p,
      setItemToValGroup: c,
      updateValGroup: g,
      updateFormDataT: k,
      validate: v,
      reValidate: C,
      changeLoading: w,
      getValGroup: T,
      submit: S,
      close: K
    }), (P, I) => {
      const _ = Z("Button");
      return x(), D("div", {
        style: oe(f(o)),
        class: "formGroupBoxVM"
      }, [
        Y(Vt, ot({
          ref_key: "formRRef",
          ref: d
        }, P.$attrs, {
          "form-data": a.formData,
          "label-width": a.labelWidth,
          "content-width": a.contentWidth,
          "item-width": a.itemWidth,
          btnLoading: a.btnLoading,
          onOnSubmit: B
        }), nt({ _: 2 }, [
          Ce(f(r), (y) => ({
            name: y.slotName,
            fn: ee(({ valGroup: h }) => [
              Ae(P.$slots, y.slotName, { valGroup: h })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        me(F("div", {
          class: "formFooterVM",
          style: oe({ marginLeft: a.labelWidth + "px" })
        }, [
          F("div", {
            style: oe({ width: a.contentWidth }),
            class: "btnBoxKAL"
          }, [
            a.showOkBt ? (x(), Q(_, {
              key: 0,
              onClick: S,
              class: "form-save-btn",
              loading: a.btnLoading && f(s)
            }, {
              default: ee(() => [
                ge(E(a.okBtTxt || f(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : ce("", !0),
            a.showCancelBt ? (x(), Q(_, {
              key: 1,
              onClick: K,
              class: "form-cancel-btn"
            }, {
              default: ee(() => [
                ge(E(a.cancelBtTxt || f(O)("r.cancel")), 1)
              ]),
              _: 1
            })) : ce("", !0)
          ], 4)
        ], 4), [
          [ve, a.showOkBt || a.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ht = /* @__PURE__ */ fe({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Ve().searchFormLabelWidth },
    itemWidth: { default: () => Ve().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: i, emit: n }) {
    const e = n, a = t, o = N(), s = G(() => {
      var B, S;
      if (Array.isArray(a.formData[0])) {
        let K = [];
        for (let P of a.formData)
          P && (K = K.concat(
            P.filter((I) => (I == null ? void 0 : I.type) === "custom" || (I == null ? void 0 : I.type) === "input" && I.slotName && I.slotPosition)
          ));
        return K;
      }
      return (S = (B = a.formData) == null ? void 0 : B.filter) == null ? void 0 : S.call(
        B,
        (K) => (K == null ? void 0 : K.type) === "custom" || (K == null ? void 0 : K.type) === "input" && K.slotName && K.slotPosition
      );
    });
    function d() {
      return new Promise((B) => {
        var S, K;
        (K = (S = o.value).resetForm) == null || K.call(S).then(() => {
          B();
        });
      });
    }
    function r() {
      return new Promise((B) => {
        var S, K;
        (K = (S = o.value).refreshFormDom) == null || K.call(S).then(() => {
          B();
        });
      });
    }
    function b() {
      return new Promise((B) => {
        var S, K;
        (K = (S = o.value).reRenderForm) == null || K.call(S).then(() => {
          B();
        });
      });
    }
    function m(B, S) {
      var K, P;
      (P = (K = o.value).setItemToValGroup) == null || P.call(K, B, S);
    }
    function p(B, S) {
      var K, P;
      (P = (K = o.value).updateValGroup) == null || P.call(K, B, S);
    }
    function c(B) {
      var S, K;
      (K = (S = o.value).updateFormDataT) == null || K.call(S, B);
    }
    function g() {
      var B, S;
      (S = (B = o.value).validate) == null || S.call(B);
    }
    function k(B) {
      var S, K;
      (K = (S = o.value).reValidate) == null || K.call(S, B);
    }
    function v(B) {
      var S, K;
      (K = (S = o.value).changeLoading) == null || K.call(S, B === void 0 ? !1 : B);
    }
    function C() {
      var B, S;
      return (S = (B = o.value).getValGroup) == null ? void 0 : S.call(B);
    }
    function w(B) {
      e("on-search", B);
    }
    function T() {
      var B, S;
      (S = (B = o.value).submit) == null || S.call(B);
    }
    return Me(() => {
      const B = o.value.$el;
      B != null && B.parentNode && B.parentNode.addEventListener("keyup", (S) => {
        (S == null ? void 0 : S.keyCode) === 13 && T();
      });
    }), i({
      resetForm: d,
      refreshFormDom: r,
      reRenderForm: b,
      setItemToValGroup: m,
      updateValGroup: p,
      updateFormDataT: c,
      validate: g,
      reValidate: k,
      changeLoading: v,
      getValGroup: C,
      submit: T
    }), (B, S) => (x(), Q(Vt, ot({
      ref_key: "formRRef",
      ref: o
    }, B.$attrs, {
      "form-data": a.formData,
      "label-width": a.labelWidth,
      "item-width": a.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": a.showInlineOkBt,
      "inline-ok-bt-txt": f(O)("r.check"),
      "show-inline-clear-bt": a.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), nt({ _: 2 }, [
      Ce(f(s), (K) => ({
        name: K.slotName,
        fn: ee(({ valGroup: P }) => [
          Ae(B.$slots, K.slotName, { valGroup: P })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), fo = /* @__PURE__ */ fe({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Ve().formModalWidth },
    labelWidth: { default: () => Ve().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: i, emit: n }) {
    const e = n, a = t, o = N(), s = N(!1), d = N(!1), r = G(() => {
      var _, y;
      if (Array.isArray(a.formData[0])) {
        let h = [];
        for (let R of a.formData)
          R && (h = h.concat(
            R.filter(($) => ($ == null ? void 0 : $.type) === "custom" || ($ == null ? void 0 : $.type) === "input" && $.slotName && $.slotPosition)
          ));
        return h;
      }
      return (y = (_ = a.formData) == null ? void 0 : _.filter) == null ? void 0 : y.call(
        _,
        (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
      );
    });
    function b() {
      return new Promise((_) => {
        var y, h;
        (h = (y = o.value).resetForm) == null || h.call(y).then(() => {
          _();
        });
      });
    }
    function m() {
      return new Promise((_) => {
        var y, h;
        (h = (y = o.value).refreshFormDom) == null || h.call(y).then(() => {
          _();
        });
      });
    }
    function p() {
      return new Promise((_) => {
        var y, h;
        (h = (y = o.value).reRenderForm) == null || h.call(y).then(() => {
          _();
        });
      });
    }
    function c(_, y) {
      var h, R;
      (R = (h = o.value).setItemToValGroup) == null || R.call(h, _, y);
    }
    function g(_, y) {
      var h, R;
      (R = (h = o.value).updateValGroup) == null || R.call(h, _, y);
    }
    function k(_) {
      var y, h;
      (h = (y = o.value).updateFormDataT) == null || h.call(y, _);
    }
    function v() {
      var _, y;
      (y = (_ = o.value).validate) == null || y.call(_);
    }
    function C(_) {
      var y, h;
      (h = (y = o.value).reValidate) == null || h.call(y, _);
    }
    function w(_) {
      var y, h;
      _ !== void 0 && (d.value = !!_, (h = (y = o.value).changeLoading) == null || h.call(y, d.value));
    }
    function T() {
      var _, y;
      return (y = (_ = o.value).getValGroup) == null ? void 0 : y.call(_);
    }
    function B() {
      d.value = !0;
    }
    function S() {
      var _, y;
      a.hideCancelBt ? P() : (y = (_ = o.value).submit) == null || y.call(_);
    }
    function K() {
      s.value = !0;
    }
    function P() {
      s.value = !1, $e(() => {
        var _, y;
        d.value = !1, (y = (_ = o.value).changeLoading) == null || y.call(_, !1);
      }, 1e3);
    }
    function I(_) {
      e(_ ? "on-open" : "on-close");
    }
    return i({
      resetForm: b,
      refreshFormDom: m,
      reRenderForm: p,
      setItemToValGroup: c,
      updateValGroup: g,
      updateFormDataT: k,
      validate: v,
      reValidate: C,
      changeLoading: w,
      getValGroup: T,
      submit: S,
      open: K,
      close: P
    }), (_, y) => {
      const h = Z("Button"), R = Z("Modal");
      return x(), Q(R, {
        class: xe(["formModal", { hideFooter: a.hideFooter }]),
        title: a.title || f(O)("r.title"),
        modelValue: f(s),
        "onUpdate:modelValue": y[0] || (y[0] = ($) => Pe(s) ? s.value = $ : null),
        "mask-closable": !1,
        "footer-hide": a.hideFooter,
        width: a.width,
        onOnVisibleChange: I
      }, {
        footer: ee(() => [
          Y(h, {
            onClick: S,
            class: "modal-save-btn",
            loading: a.btnLoading && f(d)
          }, {
            default: ee(() => [
              ge(E(a.okBtTxt || f(O)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          a.hideCancelBt ? ce("", !0) : (x(), Q(h, {
            key: 0,
            onClick: P,
            class: "modal-cancel-btn"
          }, {
            default: ee(() => [
              ge(E(a.cancelBtTxt || f(O)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: ee(() => [
          Y(Vt, ot({
            ref_key: "formRRef",
            ref: o
          }, _.$attrs, {
            "form-data": a.formData,
            "label-width": a.labelWidth,
            btnLoading: a.btnLoading,
            onOnSubmit: B
          }), nt({ _: 2 }, [
            Ce(f(r), ($) => ({
              name: $.slotName,
              fn: ee(({ valGroup: L }) => [
                Ae(_.$slots, $.slotName, { valGroup: L })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), po = /* @__PURE__ */ fe({
  __name: "CheckboxTree",
  props: {
    modelValue: { default: () => [] },
    data: { default: () => [] },
    expandAll: { type: Boolean, default: !1 },
    label: { default: "name" },
    collectVal: { default: "id" },
    leaf: { type: Boolean, default: !0 },
    inlineLeaf: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: i }) {
    const n = i, e = t, a = N(!0), o = N([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let d = [];
    const r = G(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), b = G(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    _e(
      () => e.data,
      (v) => {
        a.value = !1;
        let C = [];
        m(v, C), o.value = C, Le(function() {
          a.value = !0, e.inlineLeaf && Le(g);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), _e(
      () => b.value,
      (v) => {
        let C, w = "s";
        if (Array.isArray(e.collectVal) ? (C = e.collectVal[0] || "", w = "a") : C = e.collectVal, !C || JSON.stringify(v) === JSON.stringify(d)) {
          d = [];
          return;
        }
        lt({
          group: o.value,
          condition: (T) => (T == null ? void 0 : T.checked) === !0,
          key: "checked",
          val: !1
        }), lt(w === "a" ? {
          group: o.value,
          condition: (T) => Cl(v, [C, T == null ? void 0 : T[C]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: o.value,
          condition: (T) => v.indexOf(T == null ? void 0 : T[C]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), _e(
      () => e.disabled,
      (v) => {
        lt({
          group: o.value,
          condition: (C) => C && C.disableCheckbox !== v,
          key: "disableCheckbox",
          val: v
        }), e.inlineLeaf && Le(g);
      },
      { immediate: !0 }
    );
    function m(v, C = []) {
      for (let w of v) {
        let T = !1;
        r.value.length > 1 ? T = Pt(b.value, (S) => S[r.value[0]] === w[r.value[0]]) !== void 0 : T = r.value[0] ? b.value.indexOf(w[r.value[0]]) !== -1 : !1;
        let B = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let S of r.value)
          B[S] = w[S];
        C.push(B), w != null && w.children && w.children.length > 0 && (B.children = [], p(w.children, B.children));
      }
    }
    function p(v, C = []) {
      for (let w of v) {
        let T = !1;
        r.value.length > 1 ? T = Pt(b.value, (S) => S[r.value[0]] === w[r.value[0]]) !== void 0 : T = r.value[0] ? b.value.indexOf(w[r.value[0]]) !== -1 : !1;
        let B = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let S of r.value)
          B[S] = w[S];
        C.push(B), w != null && w.children && w.children.length > 0 && (B.children = [], m(w.children, B.children));
      }
    }
    function c(v, {
      data: C
    }) {
      let w = "", T = !0;
      if (C.children && C.children.length > 0) {
        for (let B of C.children)
          if (B.children !== void 0) {
            T = !1;
            break;
          }
        T && e.inlineLeaf && (w = "inlineChildXA");
      }
      return v(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: w
        },
        [
          v(
            "span",
            {
              style: {
                fontWeight: C.children ? "bold" : "normal"
              }
            },
            C.name
          )
        ]
      );
    }
    function g(v) {
      if (v) {
        v.expand && Le(g);
        return;
      }
      let C = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (C.length > 0)
        for (let w of C) {
          let T = w == null ? void 0 : w.parentElement, B = T == null ? void 0 : T.nextElementSibling;
          if (!B)
            return;
          if (B.tagName !== "BR") {
            let S = T == null ? void 0 : T.parentElement, K = document.createElement("br");
            S == null || S.insertBefore(K, B), B = K.nextElementSibling, (B == null ? void 0 : B.className.indexOf("inlineTreeNodeF")) === -1 && B.setAttribute("class", B.className + " inlineTreeNodeF");
          }
          for (; B != null && B.nextElementSibling; )
            B = B.nextElementSibling, B.className.indexOf("inlineTreeNodeF") === -1 && B.setAttribute("class", B.className + " inlineTreeNodeF");
        }
    }
    function k(v) {
      let C = [];
      if (e.leaf) {
        for (let w of v)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let T = {};
              for (let B of e.collectVal)
                T[B] = w[B];
              C.push(T);
            } else
              C.push(w[e.collectVal]);
      } else
        for (let w of v)
          if (Array.isArray(e.collectVal)) {
            let T = {};
            for (let B of e.collectVal)
              T[B] = w[B];
            C.push(T);
          } else
            C.push(w[e.collectVal]);
      d = C, n("update:modelValue", C), n("on-change", ue(C));
    }
    return (v, C) => {
      const w = Z("Tree");
      return f(a) ? (x(), Q(w, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: f(o),
        render: c,
        onOnCheckChange: k,
        onOnToggleExpand: g,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ce("", !0);
    };
  }
}), mo = { class: "transferBoxRL" }, ho = { class: "leftBoxLLL" }, yo = { class: "fullHeight flexColumnBox" }, vo = { class: "notGrow" }, go = { class: "titleLLL" }, bo = { class: "growFlexItem" }, ko = { class: "middleBoxLLL" }, wo = { class: "rightBoxLLL" }, _o = { class: "fullHeight flexColumnBox" }, Vo = { class: "notGrow" }, Co = { class: "titleLLL" }, So = { class: "growFlexItem" }, To = /* @__PURE__ */ fe({
  __name: "TransferBox",
  props: {
    titleLeft: {},
    titleRight: {},
    formDataLeft: { default: () => [] },
    formDataRight: { default: () => [] },
    formRulesLeft: { default: () => ({}) },
    formRulesRight: { default: () => ({}) },
    constSearchDataLeft: { default: () => ({}) },
    constSearchDataRight: { default: () => ({}) },
    leftTableColumns: { default: () => [] },
    rightTableColumns: { default: () => [] },
    leftTableUrl: {},
    rightTableUrl: {},
    addUrl: {},
    deleteUrl: {},
    addAllUrl: {},
    deleteAllUrl: {},
    addParamsHandle: { type: Function, default: (t) => t.map((i) => i == null ? void 0 : i.id) },
    deleteParamsHandle: { type: Function, default: (t) => t.map((i) => i == null ? void 0 : i.id) },
    addAllParamsHandle: { type: Function, default: (t) => t },
    deleteAllParamsHandle: { type: Function, default: (t) => t },
    addMethod: { default: "post" },
    addAllMethod: { default: "post" },
    deleteMethod: { default: "delete" },
    deleteAllMethod: { default: "delete" },
    searchFormLabelWith: {},
    usePagePro: { type: Boolean, default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Ve()) == null ? void 0 : t.pageShowSizer;
    } }
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: i, emit: n }) {
    const e = n, a = t;
    let o = N({}), s = N({}), d = N([]), r = N([]), b = N(0), m = N(0);
    const p = G(() => ({ ...a.constSearchDataLeft, ...o.value })), c = G(() => ({ ...a.constSearchDataRight, ...s.value })), g = G(() => b.value < 1), k = G(() => d.value.length < 1), v = G(() => r.value.length < 1), C = G(() => m.value < 1), w = N(), T = N(), B = N(), S = N();
    function K() {
      w.value.resetForm(), T.value.resetForm(), Oe(o.value) || (o.value = {}), Oe(s.value) || (s.value = {}), B.value.clearSelect(), S.value.clearSelect();
    }
    function P() {
      B.value.search(), S.value.search();
    }
    function I(j) {
      d.value = j;
    }
    function _(j) {
      r.value = j;
    }
    function y(j) {
      var se, ie, H, re, he;
      b.value = ((ie = (se = j == null ? void 0 : j.data) == null ? void 0 : se.page) == null ? void 0 : ie.total) || ((re = (H = j == null ? void 0 : j.data) == null ? void 0 : H.data) == null ? void 0 : re.total) || ((he = j == null ? void 0 : j.data) == null ? void 0 : he.total) || (j == null ? void 0 : j.total) || 0, e("on-data-change-l", j);
    }
    function h(j) {
      var se, ie, H, re, he;
      m.value = ((ie = (se = j == null ? void 0 : j.data) == null ? void 0 : se.page) == null ? void 0 : ie.total) || ((re = (H = j == null ? void 0 : j.data) == null ? void 0 : H.data) == null ? void 0 : re.total) || ((he = j == null ? void 0 : j.data) == null ? void 0 : he.total) || (j == null ? void 0 : j.total) || 0, e("on-data-change-r", j);
    }
    function R(j) {
      o.value = j;
    }
    function $(j) {
      s.value = j;
    }
    function L() {
      a.addUrl && ye("add");
    }
    function U() {
      a.deleteUrl && ye("delete");
    }
    function z() {
      a.addAllUrl && a.addUrl && ye("addAll");
    }
    function le() {
      a.deleteAllUrl && ye("deleteAll");
    }
    function ye(j) {
      let se, ie, H = {}, re = "";
      switch (j) {
        case "add":
          se = a.addMethod, ie = a.addUrl, H = a.addParamsHandle(r.value), re = O("r.add");
          break;
        case "delete":
          se = a.deleteMethod, ie = a.deleteUrl, H = a.deleteParamsHandle(d.value), re = O("r.remove");
          break;
        case "addAll":
          se = a.addAllMethod, ie = a.addAllUrl, H = a.addAllParamsHandle(c.value), re = O("r.addAll");
          break;
        case "deleteAll":
          se = a.deleteAllMethod, ie = a.deleteAllUrl, H = a.deleteAllParamsHandle(p.value), re = O("r.removeAll");
          break;
      }
      ie && se && Ue[se](ie, H, null, [], { spin: !0 }, !1).then((he) => {
        (he == null ? void 0 : he.code) === 0 ? (Re(re + O("r.success"), (he == null ? void 0 : he.message) || "", "success"), B.value && B.value.getTableData(), S.value && S.value.getTableData(), e("transferred")) : Re(re + O("r.failed"), (he == null ? void 0 : he.message) || "", "error");
      }).catch(() => {
        Re(re + O("r.error"), "", "error");
      });
    }
    return i({
      reset: K,
      search: P
    }), (j, se) => {
      const ie = Z("Icon"), H = Z("Button");
      return x(), D("div", mo, [
        F("div", ho, [
          F("div", yo, [
            F("div", vo, [
              F("div", go, E(a.titleLeft || f(O)("r.added")), 1),
              Y(Mt, null, {
                default: ee(() => [
                  Y(Ht, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": a.formDataLeft,
                    "form-rules": a.formRulesLeft,
                    "label-width": a.searchFormLabelWith,
                    onOnSearch: R
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            F("div", bo, [
              Y(Et, {
                ref_key: "lTabRef",
                ref: B,
                columns: a.leftTableColumns,
                url: a.leftTableUrl,
                "search-data": f(p),
                onOnSelectionChange: I,
                onOnDataChange: y,
                "init-data": !!(f(Oe)(a.constSearchDataLeft) && a.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: a.usePagePro,
                showTotal: a.showTotal,
                showSizer: a.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        F("div", ko, [
          Y(H, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: le,
            disabled: f(g)
          }, {
            default: ee(() => [
              ge(E(f(O)("r.removeAll")) + " ", 1),
              Y(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(H, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: U,
            disabled: f(k)
          }, {
            default: ee(() => [
              ge(E(f(O)("r.remove")) + " ", 1),
              Y(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(H, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: L,
            disabled: f(v)
          }, {
            default: ee(() => [
              Y(ie, { type: "ios-arrow-back" }),
              ge(" " + E(f(O)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(H, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: z,
            disabled: f(C)
          }, {
            default: ee(() => [
              Y(ie, { type: "ios-arrow-back" }),
              ge(" " + E(f(O)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        F("div", wo, [
          F("div", _o, [
            F("div", Vo, [
              F("div", Co, E(a.titleRight || f(O)("r.notAdded")), 1),
              Y(Mt, null, {
                default: ee(() => [
                  Y(Ht, {
                    ref_key: "rightFormRef",
                    ref: T,
                    "form-data": a.formDataRight,
                    "form-rules": a.formRulesRight,
                    "label-width": a.searchFormLabelWith,
                    onOnSearch: $
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            F("div", So, [
              Y(Et, {
                ref_key: "rTabRef",
                ref: S,
                columns: a.rightTableColumns,
                url: a.rightTableUrl,
                "search-data": f(c),
                onOnSelectionChange: _,
                onOnDataChange: h,
                "init-data": !!(f(Oe)(a.constSearchDataRight) && a.rightTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: a.usePagePro,
                showTotal: a.showTotal,
                showSizer: a.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ])
      ]);
    };
  }
}), Bo = { class: "boxLPA" }, xo = { class: "headerJ" }, Lo = { class: "firstT borderBoxAS" }, Oo = { class: "secondT borderBoxAS" }, Ao = { class: "firstCol borderBoxAS" }, Po = { class: "secondCol borderBoxAS" }, Io = /* @__PURE__ */ fe({
  __name: "CheckboxGroupTwoClass",
  props: {
    modelValue: { default: () => [] },
    data: { default: () => [] },
    firstTitle: {},
    secondTitle: {},
    label: { default: "name" },
    collectVal: { default: "id" },
    leaf: { type: Boolean, default: !0 },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: i }) {
    const n = t, e = i, a = N([]), o = G(() => {
      var p;
      let b = ue(n.data), m = ue(a.value);
      for (let c of b) {
        let g = 0;
        if (c != null && c.children && !Oe(c.children))
          for (let k of c.children) {
            for (let v = 0, C = m == null ? void 0 : m.length; v < C; v++)
              if (Array.isArray(n.collectVal)) {
                let w = !0;
                for (let T of n.collectVal)
                  if (((p = m[v]) == null ? void 0 : p[T]) !== (k == null ? void 0 : k[T])) {
                    w = !1;
                    break;
                  }
                if (w) {
                  k.checked = !0, g++, m.splice(v, 1);
                  break;
                }
              } else if (m[v] === k[n.collectVal]) {
                k.checked = !0, g++, m.splice(v, 1);
                break;
              }
            !k.checked && (k.checked = !1);
          }
        g === 0 ? (c.checked = !1, c.indeterminate = !1) : c.children && g === c.children.length ? (c.checked = !0, c.indeterminate = !1) : (c.checked = !1, c.indeterminate = !0);
      }
      return b;
    });
    _e(
      () => n.modelValue,
      (b, m) => {
        ct(a.value, b) || ct(b, m) || (a.value = b);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(b, m) {
      if (b.children)
        for (let p of b.children)
          p.checked = m;
      d();
    }
    function d() {
      r(o.value, !0);
    }
    function r(b, m) {
      let p = [];
      for (let c of b) {
        if (!m && !n.leaf && c.checked && c.indeterminate === !1)
          if (Array.isArray(n.collectVal)) {
            let g = {};
            for (let k of n.collectVal)
              g[k] = c[k];
            p.push(g);
          } else
            J(n.collectVal) === "String" && p.push(c[n.collectVal]);
        if (c.children) {
          for (let g of c.children)
            if (g.checked)
              if (Array.isArray(n.collectVal)) {
                let k = {};
                for (let v of n.collectVal)
                  k[v] = g[v];
                p.push(k);
              } else
                J(n.collectVal) === "String" && p.push(g[n.collectVal]);
        }
      }
      m ? (a.value = p, n.leaf ? (e("update:modelValue", p), e("on-change", ue(p))) : Le(function() {
        r(o.value);
      })) : (e("update:modelValue", p), e("on-change", ue(p)));
    }
    return (b, m) => {
      const p = Z("Checkbox");
      return x(), D("div", Bo, [
        F("div", xo, [
          F("div", Lo, E(b.firstTitle || f(O)("r.level.1")), 1),
          F("div", Oo, E(b.secondTitle || f(O)("r.level.2")), 1)
        ]),
        (x(!0), D(be, null, Ce(f(o), (c, g) => (x(), D("div", {
          class: "bodyJ",
          key: "checkboxJ" + g
        }, [
          F("div", Ao, [
            Y(p, {
              modelValue: c.checked,
              "onUpdate:modelValue": (k) => c.checked = k,
              indeterminate: c.indeterminate,
              onOnChange: (k) => s(c, k),
              disabled: b.disabled
            }, {
              default: ee(() => [
                ge(E(c[b.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          F("div", Po, [
            (x(!0), D(be, null, Ce(c.children, (k, v) => (x(), D("div", {
              class: "secItem",
              key: "secItem" + v
            }, [
              Y(p, {
                modelValue: k.checked,
                "onUpdate:modelValue": (C) => k.checked = C,
                onOnChange: d,
                disabled: b.disabled
              }, {
                default: ee(() => [
                  ge(E(k[b.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), $o = { class: "boxLPB" }, Fo = { class: "headerF" }, Ro = { class: "firstT borderBoxKa" }, Ko = { class: "secondT borderBoxKa" }, Mo = { class: "thirdT borderBoxKa" }, zo = { class: "firstCol borderBoxKa" }, Do = { class: "rightBoxAL" }, Uo = { class: "secondCol borderBoxKa" }, No = { class: "thirdCol borderBoxKa" }, Eo = /* @__PURE__ */ fe({
  __name: "CheckboxGroupThreeClass",
  props: {
    modelValue: { default: () => [] },
    data: { default: () => [] },
    firstTitle: {},
    secondTitle: {},
    thirdTitle: {},
    label: { default: "name" },
    collectVal: { default: "id" },
    leaf: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change"],
  setup(t, { emit: i }) {
    const n = i, e = t, a = N([]), o = G(() => {
      let m = ue(e.data), p = ue(a.value);
      for (let c of m) {
        let g = 0, k = 0;
        if (c != null && c.children && !Oe(c.children))
          for (let v of c.children) {
            let C = 0;
            if (v.children && !Oe(v.children))
              for (let w of v.children) {
                for (let T = 0, B = p.length; T < B; T++)
                  if (Array.isArray(e.collectVal)) {
                    let S = !0;
                    for (let K of e.collectVal)
                      if (p[T][K] !== w[K]) {
                        S = !1;
                        break;
                      }
                    if (S) {
                      w.checked = !0, C++, p.splice(T, 1);
                      break;
                    }
                  } else if (p[T] === w[e.collectVal]) {
                    w.checked = !0, C++, p.splice(T, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            C === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && C === v.children.length ? (v.checked = !0, v.indeterminate = !1, g++) : (v.checked = !1, v.indeterminate = !0, k++);
          }
        g === 0 && k === 0 ? (c.checked = !1, c.indeterminate = !1) : c.children && g === c.children.length ? (c.checked = !0, c.indeterminate = !1) : (c.checked = !1, c.indeterminate = !0);
      }
      return m;
    });
    _e(
      () => e.modelValue,
      (m, p) => {
        ct(a.value, m) || ct(m, p) || (a.value = m);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(m, p) {
      if (m.children) {
        for (let c of m.children)
          if (c.checked = p, c.children)
            for (let g of c.children)
              g.checked = p;
      }
      r();
    }
    function d(m, p) {
      if (m.children)
        for (let c of m.children)
          c.checked = p;
      r();
    }
    function r() {
      b(o.value, !0);
    }
    function b(m, p) {
      let c = [];
      for (let g of m) {
        if (!p && !e.leaf && (g != null && g.checked) && g.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let k = {};
            for (let v of e.collectVal)
              k[v] = g[v];
            c.push(k);
          } else
            J(e.collectVal) === "String" && c.push(g[e.collectVal]);
        if (g != null && g.children)
          for (let k of g.children) {
            if (!p && !e.leaf && k.checked && k.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let v = {};
                for (let C of e.collectVal)
                  v[C] = k[C];
                c.push(v);
              } else
                J(e.collectVal) === "String" && c.push(k[e.collectVal]);
            if (k.children) {
              for (let v of k.children)
                if (v.checked)
                  if (Array.isArray(e.collectVal)) {
                    let C = {};
                    for (let w of e.collectVal)
                      C[w] = v[w];
                    c.push(C);
                  } else
                    J(e.collectVal) === "String" && c.push(v[e.collectVal]);
            }
          }
      }
      p ? (a.value = c, e.leaf ? (n("update:modelValue", c), n("on-change", ue(c))) : Le(function() {
        b(o.value);
      })) : (n("update:modelValue", c), n("on-change", ue(c)));
    }
    return (m, p) => {
      const c = Z("Checkbox");
      return x(), D("div", $o, [
        F("div", Fo, [
          F("div", Ro, E(m.firstTitle || f(O)("r.level.1")), 1),
          F("div", Ko, E(m.secondTitle || f(O)("r.level.2")), 1),
          F("div", Mo, E(m.thirdTitle || f(O)("r.level.3")), 1)
        ]),
        (x(!0), D(be, null, Ce(f(o), (g, k) => (x(), D("div", {
          class: "bodyF",
          key: "checkboxJ" + k
        }, [
          F("div", zo, [
            Y(c, {
              modelValue: g.checked,
              "onUpdate:modelValue": (v) => g.checked = v,
              indeterminate: g.indeterminate,
              onOnChange: (v) => s(g, v),
              disabled: m.disabled
            }, {
              default: ee(() => [
                ge(E(g[m.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          F("div", Do, [
            (x(!0), D(be, null, Ce(g.children, (v, C) => (x(), D("div", {
              class: "rightBoxInner",
              key: "secItem" + C
            }, [
              F("div", Uo, [
                Y(c, {
                  modelValue: v.checked,
                  "onUpdate:modelValue": (w) => v.checked = w,
                  indeterminate: v.indeterminate,
                  onOnChange: (w) => d(v, w),
                  disabled: m.disabled
                }, {
                  default: ee(() => [
                    ge(E(v[m.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              F("div", No, [
                (x(!0), D(be, null, Ce(v.children, (w, T) => (x(), D("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  Y(c, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (B) => w.checked = B,
                    onOnChange: r,
                    disabled: m.disabled
                  }, {
                    default: ee(() => [
                      ge(E(w[m.label]), 1)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]))), 128))
              ])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), Go = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Ho = { class: "btsF" }, Wo = { key: 0 }, jo = {
  key: 1,
  class: "growFlexItem relativeBox"
}, qo = { class: "fullFlowContent" }, Jo = /* @__PURE__ */ fe({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const i = t, n = G(() => {
      let e = {
        width: i.fitToContent ? "fit-content" : i.width,
        height: i.fitToContent ? "fit-content" : i.height
      };
      i.inline && (e.display = "inline-block");
      for (let a in e)
        e.hasOwnProperty(a) && typeof e[a] == "number" && e[a] > 0 && (e[a] += "px");
      return e;
    });
    return (e, a) => (x(), D("div", {
      style: oe(f(n))
    }, [
      F("div", {
        class: xe(["wellCardR", { flexColumnBox: !i.fitToContent }])
      }, [
        F("div", {
          class: xe(["panelHeader", { notGrow: !i.fitToContent }])
        }, [
          F("div", Go, E(i.title || f(O)("r.title")), 1),
          F("div", Ho, [
            Ae(e.$slots, "bts")
          ])
        ], 2),
        i.fitToContent ? (x(), D("div", Wo, [
          Ae(e.$slots, "default")
        ])) : (x(), D("div", jo, [
          F("div", qo, [
            Ae(e.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), Yo = /* @__PURE__ */ fe({
  __name: "SelectScrollMore",
  props: {
    modelValue: {},
    url: {},
    searchData: { default: () => ({ size: 10 }) },
    getOptions: { type: Boolean, default: !0 },
    optionFilter: {},
    optionsLabelKey: { default: "name" },
    optionsValKey: { default: "id" },
    searchKey: { default: "name" },
    searchWordsRequired: { type: Boolean, default: !1 },
    collectLabel: { type: Boolean, default: !1 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "update-option-finish"],
  setup(t, { emit: i }) {
    const n = i, e = t;
    let a = N(1), o = 1;
    const s = N(""), d = yt([]);
    let r = {}, b = !0, m = !1;
    const p = "scm" + Math.random(), c = G(() => s.value ? O("r.searchFor") + s.value : e.placeholder || O("r.pInput")), g = G({
      get() {
        return e.modelValue ?? "";
      },
      set(P) {
        if (n("update:modelValue", P ?? ""), e.collectLabel && P !== void 0) {
          let I = {};
          for (let _ of d.value)
            if (_[e.optionsValKey] === P) {
              I = JSON.parse(JSON.stringify(_));
              break;
            }
          n("on-change", I);
        }
      }
    }), k = G(() => e.searchKey ? {
      ...e.searchData,
      current: a.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: a.value
    });
    _e(
      () => e.getOptions,
      (P) => {
        P ? b && K() : w();
      },
      { immediate: !0 }
    ), _e(
      () => e.url,
      (P) => {
        P && (m = !0);
      }
    );
    const v = N();
    function C() {
      v.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", B);
    }
    function w() {
      b || (g.value = "", b = !0, s.value = "", d.value = [], a.value = 1, o = 1, r = {}, m = !1);
    }
    function T(P) {
      for (let I of d.value)
        if ((I == null ? void 0 : I.label) === P)
          return !0;
      return !1;
    }
    const B = jt(function(P) {
      var _;
      const I = (_ = P == null ? void 0 : P.target) == null ? void 0 : _.value;
      T(I) || (Be(I) ? (m ? w() : (Oe(r) && (r.current = a.value, r.pages = o, r.options = ue(d.value)), Be(g.value) && (g.value = "")), s.value = String(I), d.value = [], a.value = 1, b = !0, K()) : m ? (w(), K()) : (g.value = "", s.value = "", r.current ? (a.value = r.current, o = r.pages, d.value = ue(r.options), r = {}) : K()));
    }, 600);
    function S() {
      m && w(), a.value < o ? (++a.value, Le(function() {
        K();
      })) : il.warning({
        background: !0,
        content: O("r.noMore")
      });
    }
    function K() {
      return new Promise((P, I) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Be(s.value)) {
            P(!1);
            return;
          }
          Ue.get(e.url, k.value).then((_) => {
            var R;
            b = !1;
            let y = [];
            (R = _ == null ? void 0 : _.data) != null && R.records ? (y = _.data.records, o = _.data.pages) : _ != null && _.data && J(_.data) === "Array" ? (y = _.data, o = _.pages) : _ != null && _.data && J(_.data) === "Object" && (y = [_.data], o = 1), typeof e.optionFilter == "function" && J(e.optionFilter) === "Function" && (y = e.optionFilter(y)), Oe(y) || (y = y.map(($, L) => {
              let U = O("r.optionLabel") + L;
              if (Array.isArray(e.optionsLabelKey)) {
                let z = [];
                for (let le = 1, ye = e.optionsLabelKey.length; le < ye; le++)
                  z.push($[e.optionsLabelKey[le]]);
                U = `${$[e.optionsLabelKey[0]]}(${String(z)})`;
              } else
                qt(e.optionsLabelKey) && (U = $[e.optionsLabelKey]);
              if (e.collectLabel) {
                let z = ue($);
                return delete z.value, delete z.label, {
                  value: $[e.optionsValKey],
                  label: U,
                  ...z
                };
              }
              return {
                value: $[e.optionsValKey],
                label: U
              };
            })), d.value.push(...y);
            let h = {};
            d.value = d.value.filter(($) => h[$ == null ? void 0 : $.value] ? !1 : (h[$ == null ? void 0 : $.value] = !0, !0)), Le(function() {
              n("update-option-finish");
            }), P(!0);
          }).catch(() => {
            il.error(O("r.getDataError")), I(O("r.getDataError"));
          });
        } else
          P(!1);
      });
    }
    return Me(C), (P, I) => {
      const _ = Z("Option"), y = Z("Select"), h = Wt("loadmore");
      return me((x(), Q(y, ot({
        modelValue: f(g),
        "onUpdate:modelValue": I[0] || (I[0] = (R) => Pe(g) ? g.value = R : null),
        ref_key: "selectScrollSourceRef",
        ref: v,
        "transfer-class-name": p
      }, P.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: f(c),
        disabled: P.disabled
      }), {
        default: ee(() => [
          (x(!0), D(be, null, Ce(f(d), (R, $) => (x(), Q(_, {
            key: "op" + $,
            value: R == null ? void 0 : R.value,
            label: R == null ? void 0 : R.label,
            disabled: R == null ? void 0 : R.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [h, S, p]
      ]);
    };
  }
}), vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: El,
  AsyncCascader: Nl,
  BtTablePage: Et,
  CheckboxGroupThreeClass: Eo,
  CheckboxGroupTwoClass: Io,
  CheckboxTree: po,
  EditorPro: jl,
  FormGroup: co,
  FormModal: fo,
  FormR: Vt,
  FullPop: Pa,
  HeaderBt: Bl,
  Hello: $a,
  IconTxtBtn: $t,
  InputMap: Ul,
  MonthRange: Wl,
  Page404: za,
  PagePro: zl,
  SearchForm: Ht,
  SelectInput: Dl,
  SelectScrollMore: Yo,
  ShowHidePanel: Mt,
  ShowHidePanelB: dn,
  SideMenu: nn,
  TableIconBtn: $l,
  TableSearch: pn,
  TableSetting: Rl,
  TransferBox: To,
  UploadGroup: Hl,
  WellCard: Jo
}, Symbol.toStringTag, { value: "Module" })), Xo = { class: "a4Line aL notPrint" }, Qo = { class: "a4Line aR notPrint" }, Zo = { class: "a4Line bL notPrint" }, ei = { class: "a4Line bR notPrint" }, ti = { class: "topsL notPrint" }, li = { class: "topsLTitle" }, ai = { class: "topsLBtn" }, ni = { class: "topsLHelp" }, oi = { key: 0 }, ii = /* @__PURE__ */ F("span", null, "1. ", -1), si = { key: 1 }, ri = /* @__PURE__ */ F("span", null, "2. ", -1), ui = { key: 2 }, di = /* @__PURE__ */ F("span", null, "1. ", -1), ci = ["innerHTML"], fi = /* @__PURE__ */ fe({
  __name: "PrintModal",
  setup(t) {
    const i = Sl(), n = N(), e = N(!1), a = N(!1), o = N(!1), s = N(715), d = N(!1), r = N(), b = "tablePrint_" + Date.now().toString(), m = N(""), p = N([]), c = N([]), g = N(!1), k = G(() => ({
      width: s.value + "px"
    })), v = () => {
      r.value && window.sessionStorage.removeItem("print_" + r.value), window.sessionStorage.removeItem(b), window.close();
    }, C = () => {
      d.value && (d.value = !1);
    }, w = () => {
      g.value = !0;
    }, T = (P) => {
      g.value && (s.value = (P == null ? void 0 : P.layerX) - 20);
    }, B = () => {
      g.value && (g.value = !1);
    }, S = () => {
      d.value = !1;
      let P = window.setTimeout(() => {
        window.clearTimeout(P), window.print();
      }, 100);
    }, K = () => {
      var P, I, _, y, h;
      if (r.value = (P = i == null ? void 0 : i.params) == null ? void 0 : P.isFrom, r.value) {
        let R = window.sessionStorage.getItem("print_" + r.value);
        if (R) {
          const $ = JSON.parse(R);
          if (!$) {
            e.value = !0;
            return;
          }
          p.value = $.columns, c.value = $.data, n.value = $.title, m.value = ((I = $ == null ? void 0 : $.config) == null ? void 0 : I.customClass) || "", a.value = ((_ = $ == null ? void 0 : $.config) == null ? void 0 : _.domPrint) || !1, o.value = ((y = $ == null ? void 0 : $.config) == null ? void 0 : y.autoPrint) || !1, s.value = ((h = $ == null ? void 0 : $.config) == null ? void 0 : h.width) || 715, document.title = (n.value || O("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return Me(() => {
      if (o.value) {
        let P = window.setTimeout(() => {
          window.clearTimeout(P), S();
        }, 100);
      }
      document.addEventListener("click", C), document.addEventListener("mousemove", T), document.addEventListener("mouseup", B);
    }), K(), (P, I) => {
      const _ = Z("Table");
      return x(), D("div", {
        class: xe(["tablePrintModal", [f(m)]])
      }, [
        me(F("div", { class: "msgL notPrint" }, E(f(O)("r.printGuide.9")), 513), [
          [ve, f(e)]
        ]),
        me(F("div", Xo, [
          F("p", null, E(f(O)("r.printGuide.7")), 1),
          ge(),
          F("p", null, E(f(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !f(e)]
        ]),
        me(F("div", Qo, [
          F("p", null, E(f(O)("r.printGuide.7")), 1),
          ge(),
          F("p", null, E(f(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !f(e)]
        ]),
        me(F("div", Zo, [
          F("p", null, E(f(O)("r.printGuide.8")), 1),
          ge(),
          F("p", null, E(f(O)("r.printGuide.5")), 1)
        ], 512), [
          [ve, !f(e)]
        ]),
        me(F("div", ei, [
          F("p", null, E(f(O)("r.printGuide.8")), 1),
          ge(),
          F("p", null, E(f(O)("r.printGuide.6")), 1)
        ], 512), [
          [ve, !f(e)]
        ]),
        me(F("div", ti, [
          F("div", li, E(f(n) || f(O)("r.print")), 1),
          F("div", ai, [
            Y($t, {
              icon: "md-help-circle",
              name: f(O)("r.help"),
              onClick: I[0] || (I[0] = Ot((y) => d.value = !f(d), ["stop"]))
            }, null, 8, ["name"]),
            Y($t, {
              icon: "md-print",
              name: f(O)("r.preview"),
              onClick: S
            }, null, 8, ["name"]),
            f(a) ? ce("", !0) : (x(), Q(Rl, {
              key: 0,
              modelValue: f(p),
              "onUpdate:modelValue": I[1] || (I[1] = (y) => Pe(p) ? p.value = y : null),
              "s-key": b,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Y($l, {
              icon: "md-close",
              onClick: v,
              title: f(O)("r.close")
            }, null, 8, ["title"])
          ]),
          me(F("div", ni, [
            f(a) ? ce("", !0) : (x(), D("p", oi, [
              ii,
              F("span", null, E(f(O)("r.printGuide.1")), 1)
            ])),
            f(a) ? ce("", !0) : (x(), D("p", si, [
              ri,
              F("span", null, E(f(O)("r.printGuide.2")), 1)
            ])),
            f(a) ? (x(), D("p", ui, [
              di,
              F("span", null, E(f(O)("r.printGuide.10")), 1)
            ])) : ce("", !0),
            F("p", null, [
              F("span", null, E(f(a) ? "2. " : "3. "), 1),
              F("span", null, E(f(O)("r.printGuide.3")), 1)
            ]),
            F("p", null, [
              F("span", null, E(f(a) ? "3. " : "4. "), 1),
              F("span", null, E(f(O)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ve, f(d)]
          ])
        ], 512), [
          [ve, !f(e)]
        ]),
        f(a) ? (x(), D("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: oe(f(k))
        }, [
          F("div", {
            class: "settingLine",
            onMousedown: Ot(w, ["stop"])
          }, null, 32)
        ], 4)) : ce("", !0),
        f(a) ? (x(), D("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: f(c),
          style: oe(f(k))
        }, null, 12, ci)) : ce("", !0),
        f(a) ? ce("", !0) : me((x(), Q(_, {
          key: 2,
          class: "tablePW",
          columns: f(p),
          data: f(c),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ve, !f(e)]
        ])
      ], 2);
    };
  }
});
let qe = null;
function gl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const i = document.createElement("style");
  i.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(i);
}
function pi(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: fi
  })), qe = t, location.pathname.indexOf("tablePrint") > -1 ? (qe.push(location.pathname), gl()) : location.hash.indexOf("tablePrint") > -1 && (qe.push(location.hash.replace(/^#/, "")), gl());
}
function ql(t) {
  return J(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && J(t.children) === "Array" && (t.children = t.children.map(ql))), t;
}
function mi(t, i, n, e) {
  var b, m, p;
  if (!qe)
    return;
  let a;
  if (!(e != null && e.domPrint)) {
    let c = ue(
      t.filter((g) => (g == null ? void 0 : g.key) || (g == null ? void 0 : g.children))
    );
    c[0].type === "selection" && c.shift(), c.length ? a = c.map(ql) : a = [];
  }
  let o = (m = (b = qe == null ? void 0 : qe.currentRoute) == null ? void 0 : b.value) == null ? void 0 : m.fullPath;
  o && (o = (p = o.replace) == null ? void 0 : p.call(o, /\//g, "_"));
  let s = {
    data: i,
    title: n,
    config: e
  };
  e != null && e.domPrint || (s.columns = a), window.sessionStorage.setItem("print_" + o, JSON.stringify(s));
  const d = qe.resolve({
    name: "tablePrint",
    params: { isFrom: o }
  });
  window.open(d == null ? void 0 : d.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const Jt = {
  print: mi,
  init: pi
};
function hi(t = "", i = "", n = {}) {
  n.domPrint = !0, n.width || (n.width = 715), Jt.print([], t, i, n);
}
function yi(t) {
  var o, s;
  const i = (...d) => Ge.apply(this, d), n = i("r.closePreview"), e = i("r.fullImg");
  let a = "previewImg" + Math.floor(Math.random() * 1e7);
  (s = (o = je) == null ? void 0 : o.info) == null || s.call(o, {
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (d) => Te(
      "div",
      {
        class: "previewModal",
        id: a
      },
      [
        Te(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Te("img", {
              src: t,
              alt: e
            }),
            Te(ha, {
              type: "md-close",
              title: n,
              class: "previewModalDelete",
              onClick() {
                var r, b;
                (b = (r = je) == null ? void 0 : r.remove) == null || b.call(r);
              }
            })
          ]
        )
      ]
    )
  }), $e(() => {
    var b, m, p, c, g, k;
    const d = (c = (p = (m = (b = document.getElementById(a)) == null ? void 0 : b.parentElement) == null ? void 0 : m.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : c.parentElement, r = (k = (g = document.getElementById(a)) == null ? void 0 : g.parentElement) == null ? void 0 : k.nextSibling;
    d && (d.style.height = "0"), d && (d.style.padding = "0"), r && (r.style.display = "none");
  }, 10);
}
const vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: Ue,
  $swal: Re,
  $swalConfirm: Fl,
  domPrint: hi,
  fullScreenImgByDom: tt,
  fullScreenImgPreview: yi,
  messageBox: Nt,
  setInterval: fn,
  setTimeout: $e,
  tablePrint: Jt
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      st(this, "title");
      st(this, "iconSvg");
      st(this, "tag");
      st(this, "alwaysEnable");
      this.title = Ge("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
    exec(e) {
      var r, b, m, p, c, g, k, v, C;
      const a = document.getElementById("editor-preview");
      let o = localStorage.getItem("editorPreviewW") || 300, s = localStorage.getItem("editorPreviewH") || 500;
      const d = (r = e == null ? void 0 : e.getHtml) == null ? void 0 : r.call(e);
      if (a) {
        let w = (g = (c = (p = (m = (b = a.children) == null ? void 0 : b[0]) == null ? void 0 : m.children) == null ? void 0 : p[1]) == null ? void 0 : c.children) == null ? void 0 : g[0], T = (C = (v = (k = a.children) == null ? void 0 : k[0]) == null ? void 0 : v.children) == null ? void 0 : C[1];
        w && (w.innerHTML = d, w.style.width = o + "px"), T && (T.style.height = s + "px"), a.style.display = "block";
      } else {
        const w = document.body, T = document.createElement("div");
        T.setAttribute("id", "editor-preview"), T.setAttribute("class", "editor-preview-mask"), T.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${o}' min='200'><span>高</span><input type='number' value='${s}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let B = T.children[0].children[1], S = T.children[0].children[1].children[0], K = T.children[0].children[0].children[0].children[1];
        const P = 40, I = 70, _ = ($) => {
          var z;
          if (($ == null ? void 0 : $.type) === "keyup") {
            let le = !1;
            if ($.key && (le = $.key !== "Enter"), le)
              return;
          }
          let L = (z = $ == null ? void 0 : $.target) == null ? void 0 : z.value;
          if (L = Number(L), S.style && S.style.width === L + "px")
            return;
          const U = w.clientWidth;
          L < 250 ? (L = 250, $.target.value = 250) : L > U - P && (L = U - P, $.target.value = U - P), S.style.width = L + "px", localStorage.setItem("editorPreviewW", L);
        };
        K.addEventListener("blur", _), K.addEventListener("keyup", _);
        let y = T.children[0].children[0].children[0].children[3];
        const h = ($) => {
          var z;
          if (($ == null ? void 0 : $.type) === "keyup") {
            let le = !1;
            if ($.key && (le = $.key !== "Enter"), le)
              return;
          }
          let L = (z = $ == null ? void 0 : $.target) == null ? void 0 : z.value;
          if (L = Number(L), B.style && B.style.height === L + "px")
            return;
          const U = w.clientHeight;
          L < 300 ? (L = 300, $.target.value = 300) : L > U - I && (L = U - I, $.target.value = U - I), B.style.height = L + "px", localStorage.setItem("editorPreviewH", L);
        };
        y.addEventListener("blur", h), y.addEventListener("keyup", h), T.children[0].children[0].children[1].addEventListener("click", () => {
          T.style.display = "none";
        }), S.innerHTML = d, S.style.width = o + "px", B.style.height = s + "px", w.append(T);
      }
    }
  }
  const i = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  wa.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const Mi = bt.use, zi = bt.i18n, bl = {
  ...vi,
  ...Za
}, gi = function(t, i = {}) {
  Ue.init(i.useStore || i.store, t), t.use(_a), i.locale && bt.use(i.locale), i.i18n && bt.i18n(i.i18n), i.router && (cn(i.router), Jt.init(i.router)), i.amap && Fn(i.amap), i.notRegistryGlobal || (Object.keys(vl).forEach((n) => {
    t.component(n) || t.component(n, vl[n]);
  }), Object.keys(bl).forEach((n) => {
    t.config.globalProperties[n] = bl[n];
  })), t.directive("has") || t.directive("has", (n, e) => {
    e.value && !Al(e.value) && (n.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(n, e) {
      var o;
      let a = n;
      e.arg && (a = (o = document.getElementsByClassName(e.arg)) == null ? void 0 : o[0]), a && a.addEventListener("scroll", function() {
        a.scrollTop > 0 && a.scrollHeight - a.scrollTop <= a.clientHeight && e.value();
      });
    }
  }), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.btTablePageAlign = "center", t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, Di = { install: gi };
export {
  Ue as $fetch,
  Re as $swal,
  Fl as $swalConfirm,
  El as AlCascaderMC,
  Nl as AsyncCascader,
  Et as BtTablePage,
  Eo as CheckboxGroupThreeClass,
  Io as CheckboxGroupTwoClass,
  po as CheckboxTree,
  jl as EditorPro,
  co as FormGroup,
  fo as FormModal,
  Vt as FormR,
  Pa as FullPop,
  Bl as HeaderBt,
  $a as Hello,
  $t as IconTxtBtn,
  Ul as InputMap,
  Wl as MonthRange,
  za as Page404,
  zl as PagePro,
  Ht as SearchForm,
  Dl as SelectInput,
  Yo as SelectScrollMore,
  Mt as ShowHidePanel,
  dn as ShowHidePanelB,
  nn as SideMenu,
  $l as TableIconBtn,
  pn as TableSearch,
  Rl as TableSetting,
  To as TransferBox,
  Hl as UploadGroup,
  Jo as WellCard,
  Rt as clearObj,
  Xa as dataFilterOrToUrl,
  Ha as decimalDigitsLimit,
  Di as default,
  hi as domPrint,
  Ll as downloadFileByFormSubmit,
  kn as downloadFileReaderFile,
  Ri as emptyInput,
  wn as fakeALinkClick,
  Wa as fileExport,
  et as findCollection,
  Ut as findPath,
  Na as formDataHeadConfig,
  tt as fullScreenImgByDom,
  yi as fullScreenImgPreview,
  ja as getColumnsKeys,
  xt as getFileSrc,
  Kl as getFileTypeByName,
  dl as getFileTypeIconByName,
  _n as getStringWidth,
  Al as hasPermission,
  Fi as htmlDecode,
  $i as htmlEncode,
  Qa as htmlPrint,
  zi as i18n,
  gi as install,
  Ft as isClient,
  Ja as isEmptyValue,
  Lt as isImgByFile,
  Pl as isNaN,
  qa as isNumberValue,
  Be as isValidValue,
  Mi as locale,
  Nt as messageBox,
  J as myTypeof,
  Ga as oneOf,
  Kt as removeEmptyValue,
  fn as setInterval,
  $e as setTimeout,
  lt as setValByOption,
  Ne as setValue,
  Il as siblingElems,
  Ki as stopBubbling,
  Ya as stringLength,
  Jt as tablePrint,
  Ea as toFormData,
  bn as toHump,
  xl as toLine,
  Ol as tooltipManual,
  kt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
