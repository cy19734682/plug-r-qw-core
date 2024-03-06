var Nt = Object.defineProperty;
var Et = (a, o, e) => o in a ? Nt(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e;
var Ze = (a, o, e) => (Et(a, typeof o != "symbol" ? o + "" : o, e), e);
import { getCurrentInstance as al, defineComponent as se, resolveComponent as j, openBlock as T, createElementBlock as D, normalizeClass as xe, normalizeStyle as ee, createBlock as Y, createCommentVNode as ye, renderSlot as Te, ref as z, computed as K, withDirectives as he, unref as h, createElementVNode as M, toDisplayString as q, createVNode as G, withCtx as W, createTextVNode as ge, vShow as we, resolveDirective as Ul, h as ke, Fragment as me, renderList as ve, onBeforeMount as Gt, watch as pe, nextTick as Oe, isRef as Fe, onMounted as Ee, withModifiers as zt, mergeProps as Xe, onUnmounted as Ht, shallowRef as dl, triggerRef as Wt, onBeforeUnmount as jt, createSlots as Ye } from "vue";
import qt from "deepmerge";
import { isObject as Jt, isFunction as Yt, isPlainObject as qe, cloneDeep as ne, isEmpty as Ae, isBoolean as Xt, isNumber as Je, debounce as rt, isString as Kl, last as cl, isEqual as ll, first as _l, find as Cl, indexOf as Jl, findIndex as st, remove as Zt } from "lodash-es";
import ol from "sweetalert";
import { Tooltip as Qt, Modal as Ne, Button as Vl, TableColumnConfig as ea, Radio as la, Input as ta, Message as Yl, Icon as aa } from "view-ui-plus";
import { useRouter as na, useRoute as oa } from "vue-router";
import Al from "axios";
import ia from "ar-cascader";
import { Toolbar as ra, Editor as sa } from "@wangeditor/editor-for-vue";
import Qe from "moment";
import { Boot as ua } from "@wangeditor/editor";
import da from "vue-json-viewer";
const ut = {
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
}, ca = /(%|){([0-9a-zA-Z_]+)}/g;
function fa() {
  function a(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function o(e, ...t) {
    let u;
    return t.length === 1 && typeof t[0] == "object" && (u = t[0]), (!u || !u.hasOwnProperty) && (u = {}), e === void 0 ? "" : e.replace(ca, (n, c, i, m) => {
      let s;
      return e[m - 1] === "{" && e[m + n.length] === "}" ? i : (s = a(u, i) ? u[i] : null, s ?? "");
    });
  }
  return o;
}
const pa = fa();
let fl = ut;
const ma = {
  zh: ut
};
let Xl, Zl = {}, Se, ha = function(a, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(a, o);
  if (Se && Se.global)
    return Se.global.t(a, o);
  if (Se && Se.locale) {
    if (!Zl[Se.locale] || Xl != Se.locale) {
      Zl[Se.locale] = !0;
      let e = Se.getLocaleMessage(Se.locale) || {}, t = qt(ma[Se.locale], e, { clone: !0 });
      fl = t, Se.setLocaleMessage(Se.locale, t), Xl = Se.locale;
    }
    return Se.hlang(a, o);
  }
};
const $e = function(a, o) {
  let e = ha.apply(this, [a, o]);
  if (e != null)
    return e;
  const t = a.split(".");
  let u = fl;
  for (let n = 0, c = t.length; n < c; n++) {
    const i = t[n];
    if (e = u[i], n === c - 1)
      return pa(e, o);
    if (!e)
      return "";
    u = e;
  }
  return "";
}, ya = function(a) {
  fl = a || fl;
}, va = function(a) {
  Se = a;
}, pl = {
  use: ya,
  t: $e,
  i18n: va
};
function S(a, o) {
  var t, u, n;
  const e = (n = (u = (t = al()) == null ? void 0 : t.appContext) == null ? void 0 : u.config) == null ? void 0 : n.globalProperties;
  return $e.apply(e, [a, o]);
}
const dt = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a;
    function t() {
      e.disabled || o("click");
    }
    return (u, n) => {
      const c = j("Icon");
      return T(), D("div", {
        class: xe({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: ee({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: t
      }, [
        e.icon ? (T(), Y(c, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : ye("", !0),
        Te(u.$slots, "default")
      ], 6);
    };
  }
}), ga = { class: "headerTxtAM" }, ba = { class: "contentAM" }, ka = /* @__PURE__ */ se({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(a, { expose: o, emit: e }) {
    const t = a;
    let u = z(!1);
    const n = K(() => typeof t.headerFontSize == "number" ? t.headerFontSize + "px" : t.headerFontSize), c = K(() => ({ zIndex: t.zIndex }));
    function i() {
      u.value = !0, e("on-open");
    }
    function m(s) {
      u.value = !1, e("on-close", s === !0);
    }
    return o({
      open: i,
      close: m
    }), (s, d) => he((T(), D("div", {
      class: "fullScreenPopBoxAM",
      style: ee(h(c))
    }, [
      M("div", {
        class: "headerAM",
        style: ee({ color: t.headerColor, backgroundColor: t.headerBg, fontSize: h(n) })
      }, [
        M("span", ga, q(s.title || h(S)("r.title")), 1),
        G(dt, {
          icon: "md-return-left",
          onClick: m
        }, {
          default: W(() => [
            ge(q(h(S)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      M("div", ba, [
        Te(s.$slots, "default")
      ])
    ], 4)), [
      [we, h(u)]
    ]);
  }
}), wa = { class: "msg" }, Va = /* @__PURE__ */ se({
  __name: "Hello",
  setup(a) {
    let o = z("Greetings from Ricky.");
    return (e, t) => (T(), D("span", wa, q(h(o)), 1));
  }
});
function gl() {
  const { appContext: a } = al();
  return a.config.globalProperties;
}
const _a = /* @__PURE__ */ se({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => gl().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(a, { emit: o }) {
    const e = a, t = K(() => Math.floor(e.size / 17 * 12) + "px");
    function u(n) {
      e.disabled || o("click", n);
    }
    return (n, c) => {
      const i = j("Icon"), m = Ul("has");
      return he((T(), D("div", {
        class: xe(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: u,
        style: ee({ "font-size": h(t) })
      }, [
        G(i, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        ge(" " + q(e.name || h(S)("r.button")), 1)
      ], 6)), [
        [m, n.has]
      ]);
    };
  }
}), Ca = { class: "c404K" }, Aa = /* @__PURE__ */ M("div", { class: "t404" }, "404", -1), Ba = { class: "ct404" }, xa = { class: "p404" }, Ta = /* @__PURE__ */ se({
  __name: "Page404",
  setup(a) {
    const e = al().appContext.config.globalProperties.$router;
    function t() {
      e.go(-1);
    }
    return (u, n) => {
      const c = j("Button");
      return T(), D("div", Ca, [
        Aa,
        M("div", Ba, "UH OH! " + q(h(S)("r.pageNotFound")), 1),
        M("div", xa, q(h(S)("r.notFoundMsg")), 1),
        G(c, {
          class: "bt404",
          onClick: t
        }, {
          default: W(() => [
            ge(q(h(S)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ie(a, o, e) {
  const t = (...u) => $e.apply(this, u);
  return new Promise((u, n) => {
    if (typeof a == "object" && !Array.isArray(a)) {
      let c = t("r.confirm"), i = t("r.cancel"), m = !1, s = "swalConfirmBt", d = "swalCancelBt";
      const f = /^HTML.*Element$/;
      a.type && (a.icon = a.type) && delete a.type, a.content && (a.text = a.content) && delete a.content, a.className = a.className || "swalBoxX";
      let w = "";
      a.text && f.test(P(a.text)) ? w = "content" : a.text && P(a.text) === "String" && (w = "text"), a.buttons && (typeof a.buttons == "object" && !Array.isArray(a.buttons) ? a.buttons.cancel && (a.buttons.cancel.text && (i = a.buttons.cancel.text) && (m = !0), a.buttons.cancel.className && (d = a.buttons.cancel.className), a.buttons.confirm.text && (c = a.buttons.confirm.text), a.buttons.confirm.className && (s = a.buttons.confirm.className)) : Array.isArray(a.buttons) && (a.buttons[0] && (i = a.buttons[0], m = !0), a.buttons[1] && (c = a.buttons[1]))), ol({
        title: a.title,
        icon: a.icon,
        className: a.className,
        [w]: a.text,
        buttons: {
          confirm: {
            text: c,
            value: !0,
            visible: !0,
            className: s
          },
          cancel: {
            text: i,
            value: null,
            visible: m,
            className: d
          }
        }
      }).then((b) => {
        b && typeof a.onOk == "function" && a.onOk(), u(b);
      }).catch((b) => {
        n(b);
      });
    } else if (typeof a == "string") {
      let c = "";
      if (o)
        switch (typeof o) {
          case "string":
            c = "text";
            break;
          case "object":
            c = "content";
            break;
        }
      ol({
        title: a,
        [c]: o || "",
        icon: e || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: t("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((i) => {
        u(i);
      }).catch((i) => {
        n(i);
      });
    } else if (typeof a == "boolean")
      !a && ol.close && ol.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function ct(a) {
  return a.replace(/_(\w)/g, function(o, e) {
    return e.toUpperCase();
  });
}
function Sa(a) {
  let o = document.createElement("div");
  return o.textContent !== void 0 ? o.textContent = a : o.innerText = a, o.innerHTML;
}
function La(a) {
  let o = document.createElement("div");
  return o.innerHTML = a, o.innerText || o.textContent;
}
function sl(a) {
  return new Promise((o) => {
    let e = new FileReader();
    e.readAsDataURL(a), e.onloadend = () => {
      o(e.result);
    };
  });
}
function Rl(a) {
  return (a == null ? void 0 : a.split(".").pop().toLocaleLowerCase()) || "";
}
function ul(a) {
  return P(a) === "String" && a.indexOf("image") > -1;
}
function Bl(a) {
  const o = Rl(a);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(o) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(o) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(o) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(o) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(o) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(o) > -1 && (e = "ios-videocam"), e;
}
function ft(a, o) {
  let e = document.createElement("a");
  e.href = o, e.download = a, pt(e);
}
function pt(a) {
  let o = document.createEvent("MouseEvents");
  o.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(o);
}
function ml({
  group: a,
  condition: o,
  pathKey: e,
  childKey: t = "children",
  path: u = []
}) {
  if (a && Jt(a)) {
    if (Yt(o)) {
      if (qe(a)) {
        let n = a, c = ne(u);
        if (o(n))
          return e && n[e] && c.push(n[e]), c;
        if (n[t] && !Ae(n[t])) {
          e && n[e] && c.push(n[e]);
          let i = ml({
            group: n[t],
            condition: o,
            pathKey: e,
            childKey: t,
            path: c
          });
          if (!Ae(i))
            return i;
        }
      } else if (Array.isArray(a))
        for (let n of a) {
          let c = ne(u);
          if (o(n))
            return e && n[e] ? c.push(n[e]) : c.push(String(a.indexOf(n))), c;
          if (n[t] && n[t].length > 0) {
            e && n[e] ? c.push(n[e]) : c.push(String(a.indexOf(n)));
            let i = ml({
              group: n[t],
              condition: o,
              pathKey: e,
              childKey: t,
              path: c
            });
            if (!Ae(i))
              return i;
          }
        }
    } else if (Array.isArray(a))
      for (let n of a) {
        let c = ne(u);
        if (n === o)
          return c.push(String(a.indexOf(n))), c;
      }
  }
  return [];
}
function mt(a, o = 12) {
  if (P(a) === "String" && a.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = o + "px", e.style.fontFamily = "inherit", e.innerHTML = a, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const t = e.clientWidth;
    return document.body.removeChild(e), t;
  }
  return 0;
}
function Ia(a) {
  return a === "" ? null : a;
}
function Oa(a) {
  a = a || window.Event, a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
}
const Ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: ft,
  emptyInput: Ia,
  fakeALinkClick: pt,
  findPath: ml,
  getFileSrc: sl,
  getFileTypeByName: Rl,
  getFileTypeIconByName: Bl,
  getStringWidth: mt,
  htmlDecode: La,
  htmlEncode: Sa,
  isImgByFile: ul,
  stopBubbling: Oa,
  toHump: ct
}, Symbol.toStringTag, { value: "Module" }));
function P(a) {
  return Object.prototype.toString.call(a).replace(/\[object |]/g, "");
}
function ht(a) {
  return a.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function hl(a) {
  let o = P(a);
  if (o === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = P(a[e]);
        t === "String" ? a[e] = a[e].trim() : (t === "Object" || t === "Array") && hl(a[e]);
      }
  } else if (o === "Array")
    for (let e = 0, t = a.length; e < t; e++) {
      let u = P(a[e]);
      u === "String" ? a[e] = a[e].trim() : (u === "Array" || u === "Object") && hl(a[e]);
    }
  return a;
}
function xl(a, o = []) {
  if (P(a) === "Array")
    return a.forEach((e, t) => {
      switch (P(e)) {
        case "Array":
        case "Object":
          xl(e);
          break;
        default:
          a[t] = null;
      }
    }), a;
  if (P(a) === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = !0;
        for (let u of o)
          if (u === e) {
            t = !1;
            break;
          }
        if (t)
          switch (P(a[e])) {
            case "Array":
            case "Object":
              xl(a[e]);
              break;
            default:
              a[e] = null;
          }
      }
    return a;
  } else
    return a;
}
const Fa = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Ua(a) {
  let o = new FormData();
  for (let e in a)
    a.hasOwnProperty(e) && a[e] !== null && o.append(e, a[e]);
  return o;
}
function We(a, o, e = !1) {
  if (!a || !o)
    return !1;
  let t, u = "notFoundC", n = function(c, i) {
    if (Array.isArray(c)) {
      if (P(i) === "Function" && i(c))
        return u = c, [];
      for (let m of c) {
        if (u !== "notFoundC")
          break;
        if (P(i) === "Function" && i(m) || m === i)
          return u = m, [c.indexOf(m)];
        if (P(m) === "Array" || P(m) === "Object") {
          let s = n(m, i);
          if (s !== void 0)
            return [c.indexOf(m), ...s];
        }
      }
    } else if (P(c) === "Object") {
      if (P(i) === "Function" && i(c))
        return u = c, [];
      for (let m in c) {
        if (u !== "notFoundC")
          break;
        if (c.hasOwnProperty(m)) {
          if (P(i) === "Function" && i(m) || c[m] === i)
            return u = c[m], [m];
          if (P(c[m]) === "Object" || P(c[m]) === "Array") {
            let s = n(c[m], i);
            if (s !== void 0)
              return [m, ...s];
          }
        }
      }
    }
  };
  return t = n(a, o), e ? t || !1 : u === "notFoundC" ? !1 : u;
}
function Ka(a, o) {
  for (let e = 0, t = o.length; e < t; e++)
    if (a === o[e])
      return !0;
  return !1;
}
function Ra(a, o = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${o}})(\\d+$)`), t = a && String(a) || "";
  return e.test(t) ? Number(t.replace(e, "$1")) : a;
}
function yt(a, o = {}, e = "get") {
  let t = document.createElement("form"), u = document.getElementsByTagName("body")[0];
  u.appendChild(t), t.setAttribute("style", "display:none"), t.setAttribute("target", ""), t.setAttribute("method", e);
  let n = a;
  if (window && window.hasOwnProperty("g")) {
    let c = Object.keys(window.g).filter((i) => i.indexOf("URL") > -1).map((i) => i.replace("URL", ""));
    for (let i of c) {
      let m = new RegExp("^/" + i + "(?=/.*$)", "i");
      if (m.test(a) && window.g[i + "URL"]) {
        n = window.g[i + "URL"] + a.replace(m, "");
        break;
      }
    }
  }
  if (t.setAttribute("action", n), qe(o)) {
    for (let i in o)
      if (o.hasOwnProperty(i) && (o[i] || o[i] === 0 || o[i] === !1 || o[i] === "")) {
        let m = document.createElement("input");
        m.setAttribute("type", "hidden"), m.setAttribute("name", i), m.setAttribute("value", o[i]), t.appendChild(m);
      }
    t.submit();
    let c = setTimeout(() => {
      u.removeChild(t), clearTimeout(c), c = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Pa(a, o = {}, e = "get") {
  if (o.hasOwnProperty("columns") && (o.columns === "" || o.columns === null || o.columns === void 0)) {
    Ie.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  yt(a, o, e);
}
function $a(a, o, e = !1) {
  let t;
  if (a && P(o) === "Array") {
    let u = localStorage.getItem(a);
    if (u) {
      let n = JSON.parse(decodeURI(u));
      t = o.filter((c) => c.key && n.indexOf(c.title) !== -1).map((c) => c.key);
    } else
      t = o.map((n) => n.key);
  } else
    t = [];
  return e || (t = String(t)), t;
}
function be(a) {
  return a != null && a !== "";
}
function Da(a) {
  return /^-?\d+(.\d+)?$/.test(a);
}
function vt(a, o = !1, e = "") {
  return function(t, u) {
    var m, s;
    let n;
    if (Array.isArray(a)) {
      let d = [];
      for (let f of a)
        be((m = u.row) == null ? void 0 : m[f]) && d.push(u.row[f]);
      n = d.join(e);
    } else
      typeof a == "function" ? n = a(u) : n = (s = u.row) == null ? void 0 : s[a];
    let c = mt(n), i = u.column._width;
    return n && c > i ? ke(
      Qt,
      {
        style: {
          width: "100%"
        },
        content: n,
        maxWidth: i * 2
      },
      () => ke(
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
        n
      )
    ) : ke("span", o && !be(n) ? "--" : n);
  };
}
function Na(a) {
  if (qe(a)) {
    for (let o in a)
      if (a.hasOwnProperty(o) && be(a[o]))
        return !1;
    return !0;
  } else if (Array.isArray(a)) {
    for (let o of a)
      if (be(o))
        return !1;
    return !0;
  }
  return !be(a);
}
function Ea(a) {
  return P(a) === "String" ? a.replace(/[^\x00-\xff]/g, "01").length : P(a) === "Number" ? (a += "", a.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function je({
  group: a,
  condition: o,
  key: e,
  val: t,
  childKey: u = "children"
}) {
  if (P(a) !== "Array" || P(o) !== "Function" || P(e) !== "String" || P(u) !== "String")
    return !1;
  a.forEach((n) => {
    o(n) && (P(t) === "Function" ? n[e] = t(n[e]) : n[e] = t), P(n[u]) === "Array" && n[u].length > 0 && je({
      group: n[u],
      condition: o,
      key: e,
      val: t,
      childKey: u
    });
  });
}
function gt(a) {
  let o = sessionStorage.getItem("btnPermissions");
  return o ? o.split(",").indexOf(a) > -1 : !1;
}
function bt(a) {
  return P(a) === "Number" && String(a) === "NaN";
}
function Ga(a, o = !1, e = !1) {
  if (P(a) !== "Object")
    return a;
  let t = Object.assign(a, {}), u = "";
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let c = t[n];
      c === void 0 || c === "" || P(c) === "String" && c.trim() === "" || c === null || bt(c) ? e ? o ? u += n + "=&" : t[n] = "" : delete t[n] : o && (u += n + "=" + c + "&");
    }
  return o ? u.length > 0 ? u.substring(0, u.length - 1) : "" : t;
}
function Tl(a) {
  let o = {};
  if (Array.isArray(a)) {
    o = [];
    for (let e of a)
      Array.isArray(e) || qe(e) ? o.push(Tl(e)) : be(e) && o.push(e);
  } else if (qe(a))
    for (let e in a)
      a.hasOwnProperty(e) && (Array.isArray(a[e]) || qe(a[e]) ? o[e] = Tl(a[e]) : be(a[e]) && (o[e] = a[e]));
  return o;
}
function za(a) {
  const o = window.open();
  if (o) {
    o.document.write(a);
    let e = setTimeout(() => {
      o.print(), window.clearTimeout(e), e = null;
    }, 10);
  }
}
function kt(a) {
  let o = [], e = a;
  for (; a.previousSibling && (a = a.previousSibling); )
    a.nodeType === 1 && o.push(a);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && o.push(e);
  return o;
}
const wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: xl,
  dataFilterOrToUrl: Ga,
  decimalDigitsLimit: Ra,
  downloadFileByFormSubmit: yt,
  fileExport: Pa,
  findCollection: We,
  formDataHeadConfig: Fa,
  getColumnsKeys: $a,
  hasPermission: gt,
  htmlPrint: za,
  isEmptyValue: Na,
  isNaN: bt,
  isNumberValue: Da,
  isValidValue: be,
  myTypeof: P,
  oneOf: Ka,
  removeEmptyValue: Tl,
  setValByOption: je,
  siblingElems: kt,
  stringLength: Ea,
  toFormData: Ua,
  toLine: ht,
  tooltipManual: vt,
  trimObj: hl
}, Symbol.toStringTag, { value: "Module" })), Ha = { class: "groupBoxRP" }, Wa = ["onClick"], ja = /* @__PURE__ */ se({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(a) {
    const o = a, e = na();
    function t(n) {
      return n.path === o.pathName ? "active" : "";
    }
    function u(n, c) {
      n.preventDefault();
      let i = n.target;
      if (!c.children && !i.classList.contains("active")) {
        e.push(c.path);
        return;
      }
      let m = i.parentNode, s = kt(m);
      for (let d of s) {
        d.classList.remove("open");
        const f = d.querySelectorAll(".open");
        for (let w of f)
          w.classList.remove("open");
      }
      m.classList.toggle("open");
    }
    return (n, c) => {
      const i = j("sideMenuGroup", !0);
      return T(), D("ul", Ha, [
        (T(!0), D(me, null, ve(o.data, (m, s) => (T(), D("li", {
          class: xe({ dropItemRP: m.children }),
          key: m.path + s
        }, [
          M("div", {
            class: xe(["menuTxtR", t(m)]),
            onClick: (d) => u(d, m),
            style: ee({ paddingLeft: m.level * 20 + "px" })
          }, q(m.name || "-- no name --"), 15, Wa),
          m.children ? (T(), Y(i, {
            key: 0,
            data: m.children,
            "path-name": o.pathName
          }, null, 8, ["data", "path-name"])) : ye("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), qa = { class: "menuListR" }, Ja = /* @__PURE__ */ se({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(a, { emit: o }) {
    const e = a, t = oa(), u = z(!0), n = z(), c = z(), i = K(() => u.value ? S("r.hideMenu") : S("r.showMenu")), m = K(() => u.value ? "ios-arrow-back" : "ios-arrow-forward");
    Gt(() => {
      let f = localStorage.getItem("menuDisplayR") || "";
      f !== "" ? u.value = JSON.parse(f) : (u.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), pe(
      () => t.path,
      (f) => {
        n.value = f, Oe(d);
      },
      { immediate: !0 }
    );
    function s() {
      u.value = !u.value, localStorage.setItem("menuDisplayR", JSON.stringify(u.value)), o("on-change", u.value);
    }
    function d() {
      let f = c.value.querySelectorAll(".dropItemRP");
      for (let w of f)
        w.querySelector(".active") && !w.classList.contains("open") && w.classList.add("open");
    }
    return (f, w) => {
      const b = j("Icon");
      return T(), D("div", {
        ref_key: "menuRef",
        ref: c,
        class: "menuBoxRP"
      }, [
        he(M("div", qa, [
          G(ja, {
            data: e.data,
            pathName: h(n)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [we, h(u)]
        ]),
        G(b, {
          type: h(m),
          size: 25,
          class: xe([{ showIco: !h(u) }, "menuShowHideIco"]),
          title: h(i),
          onClick: s,
          color: h(u) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Ya = ["title"], Xa = /* @__PURE__ */ se({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(a, { emit: o }) {
    const e = a;
    function t(u) {
      e.disabled || o("click", u);
    }
    return (u, n) => {
      const c = j("Icon"), i = Ul("has");
      return he((T(), D("div", {
        class: xe(["tableBtnsG", { disabled: e.disabled }]),
        onClick: t,
        title: e.title || h(S)("r.button")
      }, [
        G(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Ya)), [
        [i, e.has]
      ]);
    };
  }
}), Za = { class: "contentX" }, Qa = { class: "arrowA" }, Sl = /* @__PURE__ */ se({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(a) {
    const o = a, e = z(!0), t = K(() => e ? "background:" + o.bg || "transparent" : "");
    return (u, n) => {
      const c = j("Icon");
      return T(), D("div", {
        style: ee(h(t))
      }, [
        he(M("div", Za, [
          Te(u.$slots, "default")
        ], 512), [
          [we, h(e)]
        ]),
        M("div", Qa, [
          M("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (i) => e.value = !h(e))
          }, [
            G(c, {
              type: h(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), en = { class: "contentZ" }, ln = /* @__PURE__ */ se({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = K({
      get() {
        return e.modelValue;
      },
      set(n) {
        o("update:modelValue", n);
      }
    }), u = K(() => t.value ? "background:" + e.bg : "");
    return (n, c) => (T(), D("div", {
      style: ee(h(u))
    }, [
      he(M("div", en, [
        Te(n.$slots, "default")
      ], 512), [
        [we, h(t)]
      ])
    ], 4));
  }
});
let Ll = [], Il = [];
const tn = function(a) {
  a && a.beforeEach ? a.beforeEach(() => {
    Ll.map((o) => {
      window.clearTimeout(o);
    }), Il.map((o) => {
      window.clearInterval(o);
    }), Ll.length = 0, Il.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Le = function(a, o) {
  let e = window.setTimeout(a, o);
  return Ll.push(e), e;
}, Vt = function(a, o) {
  let e = window.setInterval(a, o);
  return Il.push(e), e;
}, an = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a;
    let t = !1;
    const u = K({
      get() {
        return e.modelValue;
      },
      set(m) {
        o("update:modelValue", m);
      }
    }), n = K({
      get() {
        return e.open;
      },
      set(m) {
        o("on-toggle", m);
      }
    }), c = K(() => n.value ? "ios-arrow-up" : "ios-arrow-down");
    function i() {
      t || (t = !0, o("on-search", u.value), Le(() => {
        t = !1;
      }, 2e3));
    }
    return (m, s) => {
      const d = j("Input"), f = j("icon");
      return T(), D("div", {
        class: "tableSearchV",
        style: ee({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Te(m.$slots, "default", {}, () => [
          G(d, {
            modelValue: h(u),
            "onUpdate:modelValue": s[0] || (s[0] = (w) => Fe(u) ? u.value = w : null),
            style: ee({ width: e.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: e.placeholder || h(S)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        he(M("span", {
          class: "sbt",
          onClick: s[1] || (s[1] = (w) => n.value = !h(n)),
          style: ee({ color: e.btnColor })
        }, [
          G(f, {
            type: h(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ge(q(h(S)("r.adSearch")), 1)
        ], 4), [
          [we, e.showBtn]
        ])
      ], 4);
    };
  }
}), nn = { class: "tabSetF" }, on = { class: "topCheck" }, rn = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    var g, C, I, V, _;
    const e = a, t = z(!0), u = z(!1), n = z(!1), c = z([]), i = K(() => {
      let A = S("r.unknown");
      return e.modelValue.length > c.value.length && (c.value = ne(e.modelValue)), c.value.map((B) => {
        let L = { label: B && B.title || A };
        return B && B.disableShowSetting && (L.disabled = !0), L;
      });
    }), m = K(() => i.value.filter((A) => A.disabled)), s = K({
      get() {
        return e.modelValue.map((A) => A && A.title || S("r.unknown"));
      },
      set(A) {
        let B = c.value.filter((L) => {
          for (let p of A)
            if (p === L.title)
              return !0;
          return !1;
        });
        o("update:modelValue", B);
      }
    }), d = (_ = (V = (I = (C = (g = al()) == null ? void 0 : g.appContext) == null ? void 0 : C.config) == null ? void 0 : I.globalProperties) == null ? void 0 : V.$i18n) == null ? void 0 : _.locale;
    Ee(() => {
      let A = S("r.unknown"), B;
      d ? B = localStorage.getItem(e.sKey + "_" + d) : B = localStorage.getItem(e.sKey), B ? s.value = JSON.parse(decodeURI(B)) : e.defaultCheck && (s.value = e.modelValue.filter((L) => L.showSettingCheck).map((L) => L && L.title || A));
    });
    function f(A) {
      A.length === i.value.length ? (t.value = !1, u.value = !0) : A.length > m.value.length ? (t.value = !0, u.value = !1) : (t.value = !1, u.value = !1);
    }
    pe(() => s.value, f, {
      immediate: !0,
      deep: !0
    });
    function w() {
      n.value || (n.value = !0);
    }
    function b() {
      d ? localStorage.setItem(e.sKey + "_" + d, encodeURI(JSON.stringify(s.value))) : localStorage.setItem(e.sKey, encodeURI(JSON.stringify(s.value))), n.value = !1;
    }
    function v() {
      t.value ? u.value = !1 : u.value = !u.value, t.value = !1, u.value ? s.value = i.value.map((A) => A.label) : s.value = m.value.map((A) => A.label);
    }
    return (A, B) => {
      const L = j("Icon"), p = j("Checkbox"), O = j("CheckboxGroup");
      return T(), D("div", nn, [
        M("div", {
          class: "tabSetBt",
          onClick: w
        }, [
          G(L, {
            type: "md-settings",
            size: "17"
          }),
          M("span", null, q(h(S)("r.tabSetting")), 1)
        ]),
        he(M("div", {
          class: "tabSetCard",
          style: ee({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          M("div", on, [
            G(p, {
              indeterminate: h(t),
              modelValue: h(u),
              "onUpdate:modelValue": B[0] || (B[0] = (y) => Fe(u) ? u.value = y : null),
              onClick: zt(v, ["prevent"])
            }, {
              default: W(() => [
                ge(q(h(S)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            M("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: b
            }, q(h(S)("r.confirm")), 1)
          ]),
          G(O, {
            modelValue: h(s),
            "onUpdate:modelValue": B[1] || (B[1] = (y) => Fe(s) ? s.value = y : null)
          }, {
            default: W(() => [
              (T(!0), D(me, null, ve(h(i), (y, F) => (T(), Y(p, {
                class: "setItem",
                label: y && y.label,
                key: "tabSet_" + e.sKey + F,
                disabled: y && y.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [we, h(n)]
        ])
      ]);
    };
  }
});
let el = !1;
function yl({
  height: a,
  width: o = 416,
  title: e,
  content: t,
  onOk: u,
  onCancel: n,
  onClose: c,
  okText: i,
  cancelText: m,
  noWarnIcon: s,
  footerAlign: d,
  cancelBt: f = !0
}) {
  const w = (...C) => $e.apply(this, C);
  let v = (a && Number(a) - 90 > 100 ? Number(a) - 90 + "px" : 0) || "100px", g = P(t) === "String";
  Ne.warning({
    width: o,
    footerHide: !0,
    render: () => ke(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: v
        }
      },
      [
        ke(
          "div",
          {
            class: "containerN"
          },
          [
            ke(
              "div",
              {
                class: "titleN"
              },
              [
                ke("span", e || w("r.info.title")),
                ke(
                  Vl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      el || (Ne.remove(), c && P(c) === "Function" && c());
                    }
                  },
                  () => ke("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            ke(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                ke("i", {
                  class: g && !s ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                ke("div", { class: "msgBoxConO" }, t || w("r.info.text"))
              ]
            ),
            ke(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: d || "center"
                }
              },
              [
                ke(
                  Vl,
                  {
                    class: "okBtN",
                    onClick(C) {
                      var I, V, _, A, B, L, p, O, y;
                      if (u && typeof u == "function") {
                        const F = u();
                        if (F && P(F) === "Promise") {
                          el = !0;
                          const E = (C == null ? void 0 : C.currentTarget) || (C == null ? void 0 : C.target);
                          E && ((V = (I = E.classList) == null ? void 0 : I.add) == null || V.call(I, "ivu-btn-loading"), (A = (_ = E.nextSibling) == null ? void 0 : _.setAttribute) == null || A.call(_, "disabled", "disabled"), (y = (O = ((p = (L = (B = E.parentElement) == null ? void 0 : B.parentElement) == null ? void 0 : L.querySelector) == null ? void 0 : p.call(L, ".titleN .closeN")).classList) == null ? void 0 : O.add) == null || y.call(O, "disabled")), Promise.resolve(F).then(() => {
                            el = !1, Ne.remove();
                          }).catch(() => {
                            el = !1, Ne.remove();
                          });
                        } else
                          Ne.remove();
                      }
                    }
                  },
                  () => [
                    ke("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    ke("span", i || w("r.confirm"))
                  ]
                ),
                ke(
                  Vl,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      el || (Ne.remove(), P(n) === "Function" && n && n());
                    }
                  },
                  () => m || w("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let He = 0, tl = document.createElement("div");
tl.setAttribute("class", "spinModal");
tl.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(tl);
};
function Ql(a) {
  a ? tl.classList.add("show") : tl.classList.remove("show");
}
function _t(a) {
  let o = He;
  a ? He++ : He > 0 && He--, o !== He && (He === 0 ? Ql(!1) : o === 0 && Ql(!0));
}
const sn = window.location.origin;
let vl = null;
const et = (...a) => $e.apply(vl, a);
let Me = Al.create({
  baseURL: sn,
  withCredentials: !0
  // 允许携带cookie
});
function un() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Me.interceptors.request.use(
  (a) => a,
  (a) => Promise.reject(a)
);
function lt() {
  var a, o;
  if (Me.store)
    if (typeof Me.store == "function") {
      const e = Me.store();
      e.logout && e.logout();
    } else
      (o = (a = Me.store) == null ? void 0 : a.dispatch) == null || o.call(a, "logout");
  else
    un();
}
Me.interceptors.response.use(
  (a) => {
    var o, e;
    return vl && (((o = a == null ? void 0 : a.data) == null ? void 0 : o.code) === 403 || ((e = a == null ? void 0 : a.data) == null ? void 0 : e.code) === 409) && yl({
      content: et("r.http." + a.data.code),
      onOk: lt
    }), a;
  },
  (a) => {
    var o, e;
    return vl && (((o = a == null ? void 0 : a.response) == null ? void 0 : o.status) === 403 || ((e = a == null ? void 0 : a.response) == null ? void 0 : e.status) === 409) && yl({
      content: et("r.http." + a.response.status),
      onOk: lt
    }), console.warn("请求出错：", a), Promise.reject(a);
  }
);
function De(a, o, e, t) {
  t && t.spin && _t(!1);
  let u = !0, n = a && a.data;
  if (n) {
    e = e || [];
    for (let c of e)
      n = n[c], u = u && n;
    return u ? n : (o && console.warn(o), !1);
  }
  return o && console.warn(o), !1;
}
function dn(a, o, e, t, u, n, c) {
  return new Promise((i, m) => {
    switch (a) {
      case "get":
        Me.get(o, { params: e }).then((d) => {
          let f = De(d, t, u, n);
          f ? i(f) : m(d);
        }).catch((d) => {
          De({}, t, u, n), m(d);
        });
        break;
      case "delete":
        let s = c ? "params" : "data";
        Me.delete(o, { [s]: e }).then((d) => {
          let f = De(d, t, u, n);
          f ? i(f) : m(d);
        }).catch((d) => {
          De({}, t, u, n), m(d);
        });
        break;
      case "post":
        Me.post(o, e, n).then((d) => {
          let f = De(d, t, u, n);
          f ? i(f) : m(d);
        }).catch((d) => {
          De({}, t, u, n), m(d);
        });
        break;
      case "put":
        Me.put(o, e, n).then((d) => {
          let f = De(d, t, u, n);
          f ? i(f) : m(d);
        }).catch((d) => {
          De({}, t, u, n), m(d);
        });
        break;
    }
  });
}
function il(a, o, e = {}, t, u, n, c) {
  return new Promise((i, m) => {
    var s;
    if (o) {
      n && n.spin && _t(!0);
      let d = o;
      if (window && window.hasOwnProperty("g")) {
        const b = window.g;
        let v = Object.keys(b).filter((g) => g.indexOf("URL") > -1).map((g) => g.replace("URL", ""));
        for (let g of v) {
          let C = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (C.test(o) && b[g + "URL"]) {
            d = b[g + "URL"] + o.replace(C, "");
            break;
          }
        }
      }
      let f;
      if (((s = n == null ? void 0 : n.headers) == null ? void 0 : s["Content-Type"]) === "multipart/form-data")
        f = e;
      else if (e && !Ae(e))
        if (Array.isArray(e)) {
          f = [];
          for (let b of e)
            (b || b === 0 || b === !1 || b === "" && n && !n.noEmptyStr) && f.push(b);
        } else {
          f = {};
          for (let b in e)
            e.hasOwnProperty(b) && (e[b] || e[b] === 0 || e[b] === !1 || e[b] === "" && n && !n.noEmptyStr) && (f[b] = e[b]);
        }
      let w = a.toLowerCase();
      dn(w, d, f, t, u, n, c).then((b) => {
        i(b);
      }).catch((b) => {
        m(b);
      });
    } else
      console.error("没有请求地址:url"), m("没有请求地址:url");
  });
}
const Re = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(a, o) {
    Me.store = a, vl = o.config.globalProperties;
  },
  post(a, o, e, t, u) {
    return new Promise((n, c) => {
      il("post", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        c(i);
      });
    });
  },
  put(a, o, e, t, u) {
    return new Promise((n, c) => {
      il("put", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        c(i);
      });
    });
  },
  get(a, o, e, t, u) {
    return new Promise((n, c) => {
      il("get", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        c(i);
      });
    });
  },
  delete(a, o, e, t, u, n = !0) {
    return new Promise((c, i) => {
      il("delete", a, o, e, t, u, n).then((m) => {
        c(m);
      }).catch((m) => {
        i(m);
      });
    });
  },
  all: Al.all,
  spread: Al.spread,
  config: Me
}, cn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, fn = { class: "topBtn" }, pn = { class: "tableContainer growFlexItem" }, mn = { class: "fullHeight relativeBox" }, hn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, yn = { class: "pageContainer" }, vn = 300, Ol = /* @__PURE__ */ se({
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
  setup(a, { expose: o, emit: e }) {
    const t = a, { globalProperties: u } = al().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...ea });
    const c = u.pageSizes || [10, 20, 30, 40], i = z(t.data), m = z(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || t.pageSize
    ), s = z(1), d = z(0);
    let f = [], w, b, v = t.orderKey, g = t.orderDefault;
    const C = K(() => {
      for (let R of t.columns)
        if (R.fixed)
          return !0;
      return !1;
    }), I = K(() => t.selectionFixed || C.value), V = K(() => {
      let R = {
        ...t.searchData,
        current: s.value,
        size: m.value
      };
      return t.sortable === "custom" && (t.orderKeyFormat === "underline" ? R[g] = ht(v) : t.orderKeyFormat === "camelcase" && (R[g] = ct(v))), R;
    }), _ = K(() => {
      let R = t.columns.filter(($) => $.type !== "selection");
      if (t.selection || t.radio) {
        let $;
        t.radio ? $ = {
          title: " ",
          width: 65,
          render: (fe, ce) => ke(la, {
            value: ce.row.btChecked
          })
        } : $ = {
          type: "selection",
          width: 60
        }, t.selectionFixed && ($.fixed = t.selectionFixed), R.unshift($);
      }
      return R.forEach(($) => {
        t.sortable === "custom" ? $.key && $.sortable !== !0 && $.sortable !== !1 && ($.sortable = "custom") : $.sortable = !1, $.align || ($.align = "center");
      }), t.tableEmptyTdHandle && R.forEach(($) => {
        $.key && $.render === void 0 && ($.tooltip ? $.render = vt($.key, !0) : $.render = (fe, ce) => {
          let Ce = ce.row[$.key];
          return fe("span", Ce === "" || Ce === null || Ce === void 0 ? "--" : Ce);
        });
      }), R;
    }), A = K({
      get() {
        return i.value.map((R, $) => ({
          btKey: "bt-" + $,
          btChecked: !1,
          ...R
        }));
      },
      set(R) {
        i.value = R;
      }
    }), B = K(() => f.map((R) => R.id)), L = K(() => f.map((R) => R.btKey)), p = z();
    pe(() => t.searchData, O, { deep: !0 }), pe(
      () => t.orderDefault,
      (R) => {
        g = R;
      }
    ), pe(
      () => t.orderKey,
      (R) => {
        v = R;
      }
    );
    function O() {
      s.value = 1, Pe();
    }
    function y() {
      t.initData && Pe();
    }
    function F(R) {
      i.value.unshift(ne(R)), Le(() => {
        var $, fe;
        (fe = ($ = p.value) == null ? void 0 : $.clickCurrentRow) == null || fe.call($, 0);
      }, 100);
    }
    function E(R, $, fe) {
      let ce = null;
      if (Xt($) && $ ? ce = b : Je($) && (ce = $), ce !== null) {
        let Ce = i.value[ce];
        for (let le in R)
          R.hasOwnProperty(le) && (Ce[le] = R[le]);
        fe && Le(() => {
          var le, Ue;
          (Ue = (le = p.value) == null ? void 0 : le.clickCurrentRow) == null || Ue.call(le, ce);
        }, 10);
      }
    }
    function J(R) {
      i.value.splice(R, 1), Le(() => {
        var $, fe;
        (fe = ($ = p.value) == null ? void 0 : $.clickCurrentRow) == null || fe.call($, 0);
      }, 100);
    }
    function Q(R, $) {
      var fe, ce;
      R.btChecked && t.radio || (t.selection || t.radio) && t.rowClickSelect && ((ce = (fe = p.value) == null ? void 0 : fe.toggleSelect) == null || ce.call(fe, $));
    }
    function ue(R, $) {
      w = $.btKey, b = Number($.btKey.split("-")[1]), t.radio && (i.value[b].btChecked = !0);
    }
    function _e(R) {
      if (t.radio)
        for (let $ of A.value)
          $.btKey !== w && (i.value[Number($.btKey.split("-")[1])].btChecked = !1);
      f = R, e("on-selection-change", R);
    }
    function Ve() {
      return ne(f);
    }
    function H(R) {
      s.value = R, Pe();
    }
    function de(R) {
      m.value = R, localStorage.setItem("btPageSize", String(R)), s.value === 1 && Pe();
    }
    function ie({ key: R, order: $ }) {
      g === "normal" ? (v = t.orderKey, g = t.orderDefault) : (v = R, g = $), s.value = 1, re();
    }
    function U() {
      var R, $;
      if (t.radio) {
        if (L.value.length > 0 && A.value.length > 0) {
          let fe = L.value[0].split("-")[1];
          A.value[fe].btChecked = !1;
        }
      } else
        ($ = (R = p.value) == null ? void 0 : R.selectAll) == null || $.call(R, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), w = null, b = null;
    }
    function ae() {
      i.value = [], U(), s.value = 1, d.value = 0;
    }
    function re(R, $, fe) {
      return new Promise((ce) => {
        R && (g = R), $ && (v = $), t.url ? Re[t.method](t.url, V.value, "", [], { spin: t.getDataLoading }).then((Ce) => {
          var Ue, nl;
          let le;
          fe || U(), typeof t.dataHandler == "function" ? le = t.dataHandler(Ce) : le = Ce, le.data ? (le.data.records || le.data.records === null ? i.value = le.data.records || [] : le.data.page ? (le.data.page.records || le.data.page.records === null) && (i.value = le.data.page.records || []) : le.data.data ? (le.data.data.records || le.data.data.records === null) && (i.value = le.data.data.records || []) : i.value = le.data, d.value = ((Ue = le.data.page) == null ? void 0 : Ue.total) || ((nl = le.data.data) == null ? void 0 : nl.total) || le.data.total || le.total || 0, d.value === 0 && s.value > 1 && i.value && i.value.length === 0 ? s.value = 1 : s.value > 1 && d.value <= (s.value - 1) * m.value && (s.value--, Oe(function() {
            re(R, $);
          })), e("on-data-change", le), ce(le)) : (console.warn("请求返回数据有误，无法使用"), ae(), e("on-data-change", le));
        }).catch((Ce) => {
          console.warn(Ce), U(), ae(), e("on-data-change", Ce);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Pe(R, $, fe) {
      t.radio && (R || t.rowClickNum !== -1) ? re($, fe, R).then(() => {
        i.value.length > 0 && Le(() => {
          var ce, Ce, le, Ue;
          R ? (Ce = (ce = p.value) == null ? void 0 : ce.clickCurrentRow) == null || Ce.call(ce, b || 0) : (Ue = (le = p.value) == null ? void 0 : le.clickCurrentRow) == null || Ue.call(le, t.rowClickNum);
        }, 10);
      }) : re();
    }
    return Ee(y), o({
      selectedIds: B,
      addRow: F,
      setRowData: E,
      deleteRow: J,
      getSelected: Ve,
      clearSelect: U,
      clearTableData: ae,
      getTableData: re,
      getDataAndClickRow: Pe
    }), (R, $) => {
      const fe = j("Table"), ce = j("Page");
      return T(), D("div", cn, [
        he(M("div", fn, [
          Te(R.$slots, "tableSetting"),
          Te(R.$slots, "topMsg"),
          Te(R.$slots, "topBtnGroup")
        ], 512), [
          [we, t.showTopRow]
        ]),
        M("div", pn, [
          M("div", mn, [
            M("div", hn, [
              G(fe, Xe({
                ref_key: "tableRef",
                ref: p
              }, R.$attrs, {
                height: h(I) && vn || null,
                class: { noBorderTable: t.noBorderTable, fullHeightTable: !h(I), lightHeadO: t.lightHead },
                columns: h(_),
                data: h(A),
                "highlight-row": t.radio || t.highlightRow,
                onOnSelect: ue,
                onOnSelectionChange: _e,
                onOnSortChange: ie,
                onOnRowClick: Q
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        he(M("div", yn, [
          G(ce, {
            modelValue: h(s),
            "onUpdate:modelValue": $[0] || ($[0] = (Ce) => Fe(s) ? s.value = Ce : null),
            "page-size-opts": h(c),
            total: h(d),
            "page-size": h(m),
            "show-sizer": "",
            "show-total": "",
            showElevator: !t.noElevator,
            size: t.pageComponentSize,
            onOnChange: H,
            onOnPageSizeChange: de
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [we, !t.noPage]
        ])
      ], 512);
    };
  }
}), Ct = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a, t = K({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(s) {
        let d = {
          key: s,
          val: null
        };
        t.value && t.value !== s && (d.beforeKey = t.value), o("update:modelValue", d), o("on-change", d);
      }
    }), u = K({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(s) {
        o("update:modelValue", {
          key: t.value,
          val: s
        });
      }
    }), n = K(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = K(() => ({ width: e.itemWidth + "px" }));
    function i(s) {
      var d;
      ((d = s == null ? void 0 : s.target) == null ? void 0 : d.value) !== void 0 && m({
        key: t.value,
        val: s.target.value
      });
    }
    const m = rt((s) => {
      o("on-change", s);
    }, 500);
    return (s, d) => {
      const f = j("Option"), w = j("Select"), b = j("Input");
      return T(), D("div", null, [
        G(w, {
          modelValue: h(t),
          "onUpdate:modelValue": d[0] || (d[0] = (v) => Fe(t) ? t.value = v : null),
          style: ee(h(n)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: W(() => [
            (T(!0), D(me, null, ve(e.selectOption, (v, g) => (T(), Y(f, {
              value: v.val,
              label: v.label,
              key: "selectInputOp" + v.value + g,
              style: ee({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        G(b, {
          modelValue: h(u),
          "onUpdate:modelValue": d[1] || (d[1] = (v) => Fe(u) ? u.value = v : null),
          placeholder: e.placeholder || h(S)("r.pInput"),
          style: ee(h(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: i
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bn(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var At = { exports: {} };
(function(a, o) {
  (function(e, t) {
    a.exports = t();
  })(gn, function() {
    function e(f) {
      var w = [];
      return f.AMapUI && w.push(t(f.AMapUI)), f.Loca && w.push(u(f.Loca)), Promise.all(w);
    }
    function t(f) {
      return new Promise(function(w, b) {
        var v = [];
        if (f.plugins)
          for (var g = 0; g < f.plugins.length; g += 1)
            c.AMapUI.plugins.indexOf(f.plugins[g]) == -1 && v.push(f.plugins[g]);
        if (i.AMapUI === n.failed)
          b("前次请求 AMapUI 失败");
        else if (i.AMapUI === n.notload) {
          i.AMapUI = n.loading, c.AMapUI.version = f.version || c.AMapUI.version, g = c.AMapUI.version;
          var C = document.body || document.head, I = document.createElement("script");
          I.type = "text/javascript", I.src = "https://webapi.amap.com/ui/" + g + "/main.js", I.onerror = function(V) {
            i.AMapUI = n.failed, b("请求 AMapUI 失败");
          }, I.onload = function() {
            if (i.AMapUI = n.loaded, v.length)
              window.AMapUI.loadUI(v, function() {
                for (var V = 0, _ = v.length; V < _; V++) {
                  var A = v[V].split("/").slice(-1)[0];
                  window.AMapUI[A] = arguments[V];
                }
                for (w(); m.AMapUI.length; )
                  m.AMapUI.splice(0, 1)[0]();
              });
            else
              for (w(); m.AMapUI.length; )
                m.AMapUI.splice(0, 1)[0]();
          }, C.appendChild(I);
        } else
          i.AMapUI === n.loaded ? f.version && f.version !== c.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : v.length ? window.AMapUI.loadUI(v, function() {
            for (var V = 0, _ = v.length; V < _; V++) {
              var A = v[V].split("/").slice(-1)[0];
              window.AMapUI[A] = arguments[V];
            }
            w();
          }) : w() : f.version && f.version !== c.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : m.AMapUI.push(function(V) {
            V ? b(V) : v.length ? window.AMapUI.loadUI(v, function() {
              for (var _ = 0, A = v.length; _ < A; _++) {
                var B = v[_].split("/").slice(-1)[0];
                window.AMapUI[B] = arguments[_];
              }
              w();
            }) : w();
          });
      });
    }
    function u(f) {
      return new Promise(function(w, b) {
        if (i.Loca === n.failed)
          b("前次请求 Loca 失败");
        else if (i.Loca === n.notload) {
          i.Loca = n.loading, c.Loca.version = f.version || c.Loca.version;
          var v = c.Loca.version, g = c.AMap.version.startsWith("2"), C = v.startsWith("2");
          if (g && !C || !g && C)
            b("JSAPI 与 Loca 版本不对应！！");
          else {
            g = c.key, C = document.body || document.head;
            var I = document.createElement("script");
            I.type = "text/javascript", I.src = "https://webapi.amap.com/loca?v=" + v + "&key=" + g, I.onerror = function(V) {
              i.Loca = n.failed, b("请求 AMapUI 失败");
            }, I.onload = function() {
              for (i.Loca = n.loaded, w(); m.Loca.length; )
                m.Loca.splice(0, 1)[0]();
            }, C.appendChild(I);
          }
        } else
          i.Loca === n.loaded ? f.version && f.version !== c.Loca.version ? b("不允许多个版本 Loca 混用") : w() : f.version && f.version !== c.Loca.version ? b("不允许多个版本 Loca 混用") : m.Loca.push(function(V) {
            V ? b(V) : b();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var n;
    (function(f) {
      f.notload = "notload", f.loading = "loading", f.loaded = "loaded", f.failed = "failed";
    })(n || (n = {}));
    var c = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = { AMap: n.notload, AMapUI: n.notload, Loca: n.notload }, m = { AMap: [], AMapUI: [], Loca: [] }, s = [], d = function(f) {
      typeof f == "function" && (i.AMap === n.loaded ? f(window.AMap) : s.push(f));
    };
    return { load: function(f) {
      return new Promise(function(w, b) {
        if (i.AMap == n.failed)
          b("");
        else if (i.AMap == n.notload) {
          var v = f.key, g = f.version, C = f.plugins;
          v ? (window.AMap && location.host !== "lbs.amap.com" && b("禁止多种API加载方式混用"), c.key = v, c.AMap.version = g || c.AMap.version, c.AMap.plugins = C || c.AMap.plugins, i.AMap = n.loading, g = document.body || document.head, window.___onAPILoaded = function(V) {
            if (delete window.___onAPILoaded, V)
              i.AMap = n.failed, b(V);
            else
              for (i.AMap = n.loaded, e(f).then(function() {
                w(window.AMap);
              }).catch(b); s.length; )
                s.splice(0, 1)[0]();
          }, C = document.createElement("script"), C.type = "text/javascript", C.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + c.AMap.version + "&key=" + v + "&plugin=" + c.AMap.plugins.join(","), C.onerror = function(V) {
            i.AMap = n.failed, b(V);
          }, g.appendChild(C)) : b("请填写key");
        } else if (i.AMap == n.loaded)
          if (f.key && f.key !== c.key)
            b("多个不一致的 key");
          else if (f.version && f.version !== c.AMap.version)
            b("不允许多个版本 JSAPI 混用");
          else {
            if (v = [], f.plugins)
              for (g = 0; g < f.plugins.length; g += 1)
                c.AMap.plugins.indexOf(f.plugins[g]) == -1 && v.push(f.plugins[g]);
            v.length ? window.AMap.plugin(v, function() {
              e(f).then(function() {
                w(window.AMap);
              }).catch(b);
            }) : e(f).then(function() {
              w(window.AMap);
            }).catch(b);
          }
        else if (f.key && f.key !== c.key)
          b("多个不一致的 key");
        else if (f.version && f.version !== c.AMap.version)
          b("不允许多个版本 JSAPI 混用");
        else {
          var I = [];
          if (f.plugins)
            for (g = 0; g < f.plugins.length; g += 1)
              c.AMap.plugins.indexOf(f.plugins[g]) == -1 && I.push(f.plugins[g]);
          d(function() {
            I.length ? window.AMap.plugin(I, function() {
              e(f).then(function() {
                w(window.AMap);
              }).catch(b);
            }) : e(f).then(function() {
              w(window.AMap);
            }).catch(b);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, c = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = {
        AMap: n.notload,
        AMapUI: n.notload,
        Loca: n.notload
      }, m = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(At);
var kn = At.exports;
const rl = /* @__PURE__ */ bn(kn);
let Ml = { securityJsCode: "", key: "" };
function wn({ securityJsCode: a, key: o }) {
  Ml.securityJsCode = a, Ml.key = o;
}
function Vn(a) {
  return Ml[a];
}
const Bt = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a, t = K({
      get() {
        let _;
        return e.modelValue ? e.modelValue.name ? _ = ne(e.modelValue) : _ = {
          ...e.modelValue,
          name: null
        } : _ = {
          name: null
        }, _;
      },
      set(_) {
        o("update:modelValue", ne(_));
      }
    }), u = K(() => Je(e.width) ? e.width + "px" : e.width), n = K(() => Je(e.height) ? e.height + "px" : e.height ? e.height : Je(e.width) ? e.width * 0.66 + "px" : "200px"), c = K(() => ({
      width: u.value,
      position: "relative"
    })), i = K(() => ({
      width: u.value,
      height: n.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    pe(
      () => e.modelValue,
      (_) => {
        if (_ && _.lng && _.lat) {
          if (!v || !g)
            return;
          I({
            lng: _.lng,
            lat: _.lat,
            name: _.name
          });
        }
      }
    );
    const m = "mapId" + Math.floor(Math.random() * 1e9), s = z(null), d = z(null);
    let f;
    function w() {
      d.value && d.value.clientHeight < 10 || !d.value ? Le(w, 300) : Le(C, 100);
    }
    let b, v, g;
    function C() {
      rl.load({
        key: Vn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((_) => {
        b = _, v = new b.Map(m).on("complete", () => {
          var B, L, p, O;
          g = new b.Geocoder(), (B = e.modelValue) != null && B.lng && ((L = e.modelValue) != null && L.lat) && I({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const A = (O = (p = s.value) == null ? void 0 : p.$el) == null ? void 0 : O.children;
          A && A.length > 1 && new b.AutoComplete({
            input: A[1]
          }).on("select", (y) => {
            var F, E, J;
            (F = y == null ? void 0 : y.poi) != null && F.name && ((E = y.poi.location) != null && E.lng && ((J = y.poi.location) != null && J.lat) ? (I({
              name: y.poi.name,
              lng: y.poi.location.lng,
              lat: y.poi.location.lat
            }), t.value = {
              name: y.poi.name,
              lng: y.poi.location.lng,
              lat: y.poi.location.lat
            }) : v.setCity(y.poi.name, () => {
              let Q = v.getCenter();
              I({
                name: y.poi.name,
                lng: Q.lng,
                lat: Q.lat
              }), t.value = {
                name: y.poi.name,
                lng: Q.lng,
                lat: Q.lat
              };
            })), o("on-change", t.value);
          }), v.on("hotspotclick", (y) => {
            I({
              name: y.name,
              lng: y.lnglat.lng,
              lat: y.lnglat.lat
            }), t.value = {
              name: y.name,
              lng: y.lnglat.lng,
              lat: y.lnglat.lat
            };
          });
        });
      });
    }
    function I({ lng: _, lat: A, name: B }) {
      v.clearMap();
      let L = new b.LngLat(_, A), p = new b.Marker({
        map: v,
        position: L,
        draggable: !0
      });
      v.add(p), V(_, A), p.on("dragend", () => {
        let O = p.getPosition();
        t.value = {
          name: B || null,
          lng: O.lng,
          lat: O.lat
        }, V(_, A);
      }), p.on("click", (O) => {
        f && f.open(v, O.target.getPosition());
      }), v.setFitView();
    }
    function V(_, A) {
      g.getAddress([_, A], (B, L) => {
        B === "complete" && L.info === "OK" && L.regeocode && L.regeocode.formattedAddress ? f = new b.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + L.regeocode.formattedAddress + "</div>",
          offset: new b.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (f = null, console.warn("地图获取位置信息失败", L));
      });
    }
    return Ee(w), Ht(() => {
      v && (v.destroy(), rl == null || rl.reset(), v = null, g = null, f = null);
    }), (_, A) => (T(), D("div", {
      style: ee(h(c)),
      class: "containerIKJ"
    }, [
      G(h(ta), {
        ref_key: "mapInputRef",
        ref: s,
        modelValue: h(t).name,
        "onUpdate:modelValue": A[0] || (A[0] = (B) => h(t).name = B),
        class: xe({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || h(S)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      M("div", {
        style: ee(h(i)),
        ref_key: "mapRef",
        ref: d,
        id: m
      }, null, 4)
    ], 4));
  }
});
var ot;
const xt = /* @__PURE__ */ se({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (ot = window == null ? void 0 : window.g) != null && ot.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
  setup(a, { emit: o }) {
    const e = a, t = z([]), u = K({
      get() {
        let s = e.modelValue;
        return Array.isArray(s) ? ne(s) : Je(s) ? ml({
          group: t.value,
          condition: (d) => d.value === s,
          pathKey: "value"
        }) : Kl(s) ? s.split(e.separator) : [];
      },
      set(s) {
        if (e.onlyLastVal)
          Ae(s) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", cl(s));
        else {
          if (ll(e.modelValue, s))
            return;
          o("update:modelValue", ne(s));
        }
      }
    });
    function n() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Re.get(e.url).then((s) => {
        var f;
        let d = null;
        (f = s == null ? void 0 : s.data) != null && f.records ? d = s.data.records : s != null && s.data ? d = s.data : s && (d = s), d ? (typeof e.optionFilter == "function" && P(e.optionFilter) === "Function" && (d = e.optionFilter(d)), t.value = c(d)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(s) {
      let d = [];
      for (let f of s) {
        let w = {
          value: f[e.optionVal],
          label: f[e.optionLabel]
        };
        f.children && !Ae(f.children) && (w.children = c(f.children)), d.push(w);
      }
      return d;
    }
    function i(s) {
      return e.onlyLastLabel ? cl(s) : s.join(e.separator);
    }
    function m(s, d) {
      let f = "";
      Ae(d) || (f = d.map((w) => w.label).join(e.separator)), o("on-label-change", f);
    }
    return Ee(n), (s, d) => {
      const f = j("Cascader");
      return T(), Y(f, {
        data: h(t),
        modelValue: h(u),
        "onUpdate:modelValue": d[0] || (d[0] = (w) => Fe(u) ? u.value = w : null),
        onOnChange: m,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": i,
        placeholder: e.placeholder || h(S)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Tt = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a, t = z(), u = K({
      get() {
        if (e.modelValue && (Je(e.modelValue) || Kl(e.modelValue))) {
          let c = String(e.modelValue).trim();
          if (/^\d*$/.test(c)) {
            let m = c.substring(0, 2) + "0000", s, d = n(c);
            return d.length < 7 ? s = c.substring(0, 4) + "00" : s = c.substring(0, 6), /^8\d+$/.test(c) ? [m, d] : [m, s, d];
          }
          return c.indexOf(e.separator) !== -1 ? c.split(e.separator) : [c];
        } else
          return Array.isArray(e.modelValue) ? ne(e.modelValue) : (t.value && (t.value.select = []), []);
      },
      set(c) {
        if (Ae(c))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let i = cl(c), m = "", s = "";
          if (i && (m = i.code), m && m.length < 12) {
            let d = [...m];
            for (; d.length < 12; )
              d.push(0);
            m = d.join("");
          }
          if (Array.isArray(c) && (s = c.map((d) => d.name).join(e.separator)), m) {
            if (m === e.modelValue)
              return;
            o("update:modelValue", m);
          }
          s && o("on-name-change", s);
        }
      }
    });
    function n(c) {
      let i = [...c];
      for (; i[i.length - 1] === "0"; )
        i.pop();
      return i.join("");
    }
    return (c, i) => (T(), Y(h(ia), Xe(c.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: t,
      modelValue: h(u),
      "onUpdate:modelValue": i[0] || (i[0] = (m) => Fe(u) ? u.value = m : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || h(S)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Ge(a) {
  var c, i, m;
  const o = (...s) => $e.apply(this, s), e = o("r.closePreview"), t = o("r.fullImg");
  let u = _l(document.getElementsByTagName("body")), n = document.createElement("div");
  n.setAttribute("class", "fullScreenImgByDom"), n.innerHTML = `<div class='previewInner'><img src='${a}' alt='${t}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (i = (c = n.querySelector(".ivu-icon-md-close")) == null ? void 0 : c.addEventListener) == null || i.call(c, "click", function() {
    var d;
    let s = _l(document.getElementsByTagName("body"));
    (d = s == null ? void 0 : s.removeChild) == null || d.call(s, n);
  }), (m = u == null ? void 0 : u.appendChild) == null || m.call(u, n);
}
const _n = { class: "previewBoxM" }, Cn = { class: "imgLoading" }, An = /* @__PURE__ */ M("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Bn = [
  An
], xn = ["src", "alt"], Tn = { class: "deleteModal" }, Sn = { class: "previewBoxM" }, Ln = {
  key: 0,
  class: "previewImg"
}, In = ["src", "alt"], On = { class: "deleteModal" }, Mn = { class: "customFileListM" }, Fn = {
  key: 0,
  class: "customFileListItem"
}, Un = ["onClick", "title"], Kn = { class: "btBoxJ" }, Rn = { class: "customFileListM" }, Pn = {
  key: 0,
  class: "customFileListItem"
}, $n = { class: "listLoading" }, Dn = /* @__PURE__ */ M("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Nn = [
  Dn
], En = ["onClick", "title"], Gn = { class: "btBoxJ" };
var it;
const St = /* @__PURE__ */ se({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (it = window == null ? void 0 : window.g) != null && it.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
  setup(a, { emit: o }) {
    const e = a, t = dl([]), u = dl([]), n = K(() => !e.manualUpload && e.showImg && s.value ? "img" : e.manualUpload && e.showImg && s.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !s.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !s.value) ? "list" : ""), c = K(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), i = K({
      get() {
        return e.manualUpload ? m.value : m.value.map((y) => ({ id: y }));
      },
      set(y) {
        e.manualUpload ? m.value = y || [] : m.value = (y == null ? void 0 : y.map((F) => F.id)) || [];
      }
    }), m = K({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((y) => y !== "--") : P(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(y) {
        if (e.length === 1) {
          let F = _l(y);
          o("update:modelValue", F ?? null), o("on-change", F ?? null);
        } else
          o("update:modelValue", ne(y)), o("on-change", ne(y));
      }
    }), s = K(() => {
      let y;
      if (e.manualUpload ? y = i.value : y = u.value, !y)
        return !1;
      for (let F of y) {
        let E;
        if (e.manualUpload ? E = F == null ? void 0 : F.type : E = F == null ? void 0 : F.mimeType, !E || E && !(ul(E) || E === "loading"))
          return !1;
      }
      return !0;
    });
    pe(
      () => i.value,
      async (y) => {
        if (n.value === "localImg")
          y != null && y.length ? t.value = await f(y) : t.value = [];
        else if (y != null && y.length && n.value !== "localList") {
          let F = ne(y);
          const E = ne(u.value);
          for (let J of F)
            if ((J == null ? void 0 : J.name) === void 0)
              if (J.id) {
                const Q = Cl(E, (ue) => ue.id === J.id);
                Q ? (J.name = Q.name, J.mimeType = Q.mimeType) : (J.mimeType = "loading", Re.get(e.url + "/" + J.id).then((ue) => {
                  var _e, Ve, H, de, ie, U;
                  J.name = ((H = (Ve = (_e = ue == null ? void 0 : ue.data) == null ? void 0 : _e.returnValue) == null ? void 0 : Ve[0]) == null ? void 0 : H.name) || S("r.file") + Jl(y, J), J.mimeType = ((U = (ie = (de = ue == null ? void 0 : ue.data) == null ? void 0 : de.returnValue) == null ? void 0 : ie[0]) == null ? void 0 : U.mimeType) || "unknown", Wt(u);
                }).catch(() => {
                  J.name = S("r.file") + Jl(F, J);
                }));
              } else
                J.name = S("r.unknown");
          u.value = F;
        } else
          u.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function d(y) {
      return (y == null ? void 0 : y.name) || (y == null ? void 0 : y.split) && cl(y.split("/")) || y;
    }
    async function f(y) {
      let F = [];
      for (let E of y) {
        let J = await sl(E);
        F.push(J);
      }
      return F;
    }
    function w(y) {
      if (!e.disabled) {
        let F = i.value;
        F == null || F.splice(y, 1), i.value = F;
      }
    }
    function b(y) {
      y != null && y.id && window.open(e.url + "/" + y.id + "/download");
    }
    function v(y) {
      return e.manualUpload ? (y == null ? void 0 : y.type) && ul(y.type) : (y == null ? void 0 : y.id) && y.mimeType && ul(y.mimeType);
    }
    function g(y) {
      if (e.manualUpload) {
        if (!y)
          return;
        sl(y).then((F) => {
          Ge(F);
        });
      } else
        y != null && y.id && Ge(e.url + "/" + y.id + "/download?preview=true");
    }
    function C(y) {
      P(y) === "String" && y.indexOf("http") > -1 ? window.open(y) : P(y) === "File" && sl(y).then((F) => {
        ft(y.name, F);
      });
    }
    function I(y) {
      var F, E;
      if (e.manualUpload) {
        if (y) {
          let J = Rl(y.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(J) < 0)
            return Ie(
              S("r.wrongFileType"),
              S("r.supportType") + (((E = e.format) == null ? void 0 : E.length) && String(e.format) || S("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && y.size > e.maxSize * 1024)
            return Ie(S("r.fileIsBig"), S("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Q = i.value;
          Q == null || Q.push(y), i.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function V(y) {
      console.warn(y), Ie(S("r.uploadError"), "", "error");
    }
    function _(y, F, E) {
      var J, Q, ue, _e, Ve, H;
      if ((y == null ? void 0 : y.code) === 0) {
        let de = i.value;
        F.id = (Q = (J = y.data) == null ? void 0 : J[0]) == null ? void 0 : Q.id, F.name = (_e = (ue = y.data) == null ? void 0 : ue[0]) == null ? void 0 : _e.name, F.mimeType = (H = (Ve = y.data) == null ? void 0 : Ve[0]) == null ? void 0 : H.mimeType, de == null || de.push(F), i.value = de;
      } else
        Ie(S("r.uploadFail"), (y == null ? void 0 : y.message) || "", "error");
    }
    function A() {
      Ie(S("r.fileIsBig"), S("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function B() {
      var y;
      Ie(
        S("r.wrongFileType"),
        S("r.supportType") + (((y = e.format) == null ? void 0 : y.length) && String(e.format) || S("r.none")),
        "warning"
      );
    }
    function L(y) {
      let F = y == null ? void 0 : y.id, E = y == null ? void 0 : y.mimeType;
      F && (P(E) === "String" && E.indexOf("image") > -1 ? Ge(e.url + "/" + F + "/download?preview=true") : window.open(e.url + "/" + F + "/download?preview=true"));
    }
    function p(y) {
      var E, J, Q;
      let F = (Q = (J = (E = y == null ? void 0 : y.response) == null ? void 0 : E.data) == null ? void 0 : J[0]) == null ? void 0 : Q.id;
      O(null, F);
    }
    function O(y, F) {
      if (!(!F && F !== 0) && !e.disabled && m.value.indexOf(F) !== -1) {
        const E = ne(m.value);
        let J = i.value;
        J == null || J.splice(E.indexOf(F), 1), i.value = J;
      }
    }
    return (y, F) => {
      var ue, _e, Ve, H, de, ie;
      const E = j("Button"), J = j("Upload"), Q = j("Icon");
      return T(), D("div", null, [
        G(J, {
          name: "files",
          action: h(c),
          "before-upload": I,
          "on-error": V,
          "on-success": _,
          "on-exceeded-size": A,
          "on-preview": L,
          "on-remove": p,
          "on-format-error": B,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((ue = h(i)) == null ? void 0 : ue.length) && ((_e = h(i)) == null ? void 0 : _e.length) >= e.length || !!e.disabled
        }, {
          default: W(() => {
            var U, ae;
            return [
              G(E, {
                icon: "ios-cloud-upload-outline",
                class: xe({
                  disabledR: e.length && ((U = h(i)) == null ? void 0 : U.length) && ((ae = h(i)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
                })
              }, {
                default: W(() => [
                  ge(q(h(S)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        he(M("div", _n, [
          (T(!0), D(me, null, ve(h(u), (U) => (T(), D(me, {
            key: U == null ? void 0 : U.id
          }, [
            !e.manualUpload && (U == null ? void 0 : U.id) !== null ? (T(), D("div", {
              key: 0,
              class: xe(["previewImg", { previewLoading: U.mimeType === "loading" }])
            }, [
              he(M("div", Cn, Bn, 512), [
                [we, U.mimeType === "loading"]
              ]),
              he(M("img", {
                src: y.url + "/" + U.id + "/download?preview=true",
                alt: U.name
              }, null, 8, xn), [
                [we, U.mimeType !== "loading"]
              ]),
              he(M("div", Tn, [
                G(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: h(S)("r.fView"),
                  onClick: (ae) => h(Ge)(e.url + "/" + U.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                G(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ae) => O(ae, U.id),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [we, U.mimeType !== "loading"]
              ])
            ], 2)) : ye("", !0)
          ], 64))), 128))
        ], 512), [
          [we, h(n) === "img" && ((Ve = h(u)) == null ? void 0 : Ve.length)]
        ]),
        he(M("div", Sn, [
          (T(!0), D(me, null, ve(h(t), (U, ae) => (T(), D(me, {
            key: "manualImg" + ae
          }, [
            e.manualUpload && U !== null ? (T(), D("div", Ln, [
              M("img", {
                src: U,
                alt: "manualImg" + ae
              }, null, 8, In),
              M("div", On, [
                G(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (re) => h(Ge)(U),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"]),
                G(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (re) => w(ae),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ye("", !0)
          ], 64))), 128))
        ], 512), [
          [we, h(n) === "localImg" && ((H = h(t)) == null ? void 0 : H.length)]
        ]),
        he(M("div", Mn, [
          (T(!0), D(me, null, ve(h(i), (U, ae) => (T(), D(me, {
            key: "manualItem" + ae
          }, [
            e.manualUpload && U !== null ? (T(), D("p", Fn, [
              U.name ? (T(), Y(Q, {
                key: 0,
                type: h(Bl)(U.name)
              }, null, 8, ["type"])) : ye("", !0),
              M("span", {
                class: xe(["upNameT", { previewName: v(U) }]),
                onClick: (re) => C(U),
                title: h(S)("r.download")
              }, q(d(U)), 11, Un),
              M("span", Kn, [
                v(U) ? (T(), Y(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (re) => g(U),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : ye("", !0),
                G(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (re) => w(ae),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ye("", !0)
          ], 64))), 128))
        ], 512), [
          [we, h(n) === "localList" && ((de = h(i)) == null ? void 0 : de.length)]
        ]),
        he(M("div", Rn, [
          (T(!0), D(me, null, ve(h(u), (U, ae) => (T(), D(me, {
            key: "defaultItem" + ae
          }, [
            !e.manualUpload && U !== null ? (T(), D("div", Pn, [
              he(M("div", $n, Nn, 512), [
                [we, U.mimeType === "loading"]
              ]),
              he(G(Q, {
                type: h(Bl)(U.name)
              }, null, 8, ["type"]), [
                [we, U.mimeType !== "loading"]
              ]),
              he(M("span", {
                class: xe(["upNameT", { previewName: v(U) }]),
                onClick: (re) => b(U),
                title: h(S)("r.download")
              }, q(U.name || h(S)("r.file") + (ae + 1)), 11, En), [
                [we, U.mimeType !== "loading"]
              ]),
              he(M("span", Gn, [
                v(U) ? (T(), Y(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (re) => g(U),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : ye("", !0),
                G(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (re) => w(ae),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [we, U.mimeType !== "loading"]
              ])
            ])) : ye("", !0)
          ], 64))), 128))
        ], 512), [
          [we, h(n) === "list" && ((ie = h(u)) == null ? void 0 : ie.length)]
        ])
      ]);
    };
  }
}), zn = /* @__PURE__ */ M("div", { class: "bRoot" }, null, -1), Lt = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a, t = z(!1), u = z(!1), n = z(!1), c = K({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(g) {
        o("update:modelValue", [g, i.value]), o("on-change", [g, i.value]);
      }
    }), i = K({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(g) {
        o("update:modelValue", [c.value, g]), o("on-change", [c.value, g]);
      }
    }), m = K(
      () => (c.value || "") + ((c.value || i.value) && " - " || "") + (i.value || "")
    ), s = z();
    Ee(() => {
      s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        n.value = !0;
      }), s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        n.value = !1;
      }), s.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (g) => {
        !e.disabled && (c.value || i.value) && (g.stopPropagation(), b());
      });
    });
    function d() {
      e.disabled || (t.value = !0);
    }
    function f(g) {
      c.value = g, t.value = !1, u.value = !0;
    }
    function w(g) {
      i.value = g, u.value = !1;
    }
    function b() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function v() {
      t.value = !1, u.value = !1, c.value && i.value === null && (c.value = null);
    }
    return (g, C) => {
      const I = j("DatePicker"), V = j("Icon"), _ = j("Input");
      return T(), D("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: s
      }, [
        G(I, {
          open: h(u),
          modelValue: h(i),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: w,
          onOnClickoutside: v
        }, {
          default: W(() => [
            zn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        G(I, {
          open: h(t),
          modelValue: h(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: f,
          onOnClickoutside: v
        }, {
          default: W(() => [
            M("div", { onClick: d }, [
              G(_, {
                class: "aRoot",
                modelValue: h(m),
                "onUpdate:modelValue": C[0] || (C[0] = (A) => Fe(m) ? m.value = A : null),
                readonly: "",
                placeholder: e.placeholder || h(S)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: W(() => [
                  G(V, {
                    type: h(n) && (h(c) || h(i)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Hn = { class: "editor-pro-root" }, It = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a, t = dl(), u = K({
      get() {
        return e.modelValue;
      },
      set(s) {
        o("update:modelValue", s), o("on-change", s);
      }
    }), n = K(
      () => Object.assign(
        {
          placeholder: e.placeholder || S("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), c = K(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(s, d) {
                let f = new FormData();
                f.append("files", s);
                const w = s.name, b = e.imgUploadUrl ?? "/node-serve/file";
                Re.post(b, f, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((v) => {
                  if (v && v.data)
                    if (Array.isArray(v.data))
                      for (let g of v.data) {
                        const C = b + "/" + g.id + "/download";
                        d(C, w, C);
                      }
                    else {
                      const g = b + "/" + v.data.id + "/download";
                      d(g, w, g);
                    }
                }).catch(() => {
                  Ie(S("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(s, d) {
                let f = new FormData();
                f.append("files", s);
                const w = e.videoUploadUrl ?? "/node-serve/file";
                Re.post(w, f, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let v of b.data) {
                        const g = w + "/" + v.id + "/download";
                        d(g);
                      }
                    else {
                      const v = w + "/" + b.data.id + "/download";
                      d(v);
                    }
                }).catch(() => {
                  Ie(S("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), i = K(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function m(s) {
      t.value = s;
    }
    return pe(
      () => e.disabled,
      (s) => {
        s ? t.value.disable() : t.value.enable();
      }
    ), jt(() => {
      t.value && t.value.destroy();
    }), (s, d) => (T(), D("div", Hn, [
      he(G(h(ra), {
        class: "editor-pro-toolbar",
        editor: h(t),
        defaultConfig: h(n),
        mode: s.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [we, !s.disabled]
      ]),
      G(h(sa), {
        class: "editor-pro-editor",
        modelValue: h(u),
        "onUpdate:modelValue": d[0] || (d[0] = (f) => Fe(u) ? u.value = f : null),
        defaultConfig: h(c),
        mode: s.mode,
        onOnCreated: m,
        style: ee(h(i))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Wn = {
  key: 19,
  class: "formInfoTxtXN"
}, jn = {
  key: 20,
  class: "formTitleTxtXN"
}, tt = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a;
    function t(s) {
      return {
        withInfo: !!s.info,
        withTitle: !!s.title,
        inlineFormItemXN: e.inline,
        noLabel: s.type === "selectInput",
        [s.class]: s.class,
        slotInput: s.slotPosition
      };
    }
    function u(s, d) {
      o("item-change", {
        e: s,
        root: d
      });
    }
    function n(s, d) {
      o("re-validate", {
        e: s,
        root: d
      });
    }
    function c(s) {
      o("select-input-change", s);
    }
    function i(s, d) {
      o("al-name-change", {
        name: s,
        root: d
      });
    }
    function m(s, d) {
      o("async-label-change", {
        label: s,
        root: d
      });
    }
    return (s, d) => {
      const f = j("InputNumber"), w = j("Input"), b = j("Option"), v = j("Select"), g = j("Radio"), C = j("Icon"), I = j("RadioGroup"), V = j("Checkbox"), _ = j("CheckboxGroup"), A = j("DatePicker"), B = j("TimePicker"), L = j("FormItem");
      return T(), Y(L, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: xe(["relativeBox", t(e.item)])
      }, {
        default: W(() => [
          e.item.type === "txt" ? (T(), D("div", {
            key: 0,
            style: ee([e.itemStyle, { display: "inline-block" }]),
            class: xe({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, q(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (T(), Y(f, {
            key: 1,
            style: ee(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[0] || (d[0] = (p) => e.tempKeys[e.item.tempKey] = p),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: d[1] || (d[1] = (p) => u(p, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), Y(w, {
            key: 2,
            style: ee(s.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[2] || (d[2] = (p) => e.tempKeys[e.item.tempKey] = p),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: d[3] || (d[3] = (p) => u(p, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, Ye({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: W(() => [
                Te(s.$slots, e.item.slotName)
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: W(() => [
                M("span", null, q(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: W(() => [
                M("span", null, q(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (T(), Y(v, {
            key: 3,
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[4] || (d[4] = (p) => s.tempKeys[e.item.tempKey] = p),
            style: ee(s.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || h(S)("r.pSelect"),
            onOnChange: d[5] || (d[5] = (p) => u(p, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: W(() => [
              (T(!0), D(me, null, ve(e.item.options, (p, O) => (T(), Y(b, {
                value: p.val,
                label: p.label || p.val,
                key: "option-" + e.item.key + O,
                disabled: !!p.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), Y(Ct, {
            key: 4,
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[6] || (d[6] = (p) => s.tempKeys[e.item.tempKey] = p),
            "label-width": s.labelWidth,
            "item-width": s.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), Y(Tt, {
            key: 5,
            style: ee(s.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[7] || (d[7] = (p) => e.valGroup[e.item.key] = p),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || h(S)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: d[8] || (d[8] = (p) => i(p, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), Y(xt, {
            key: 6,
            style: ee(s.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[9] || (d[9] = (p) => e.valGroup[e.item.key] = p),
            url: e.item.url || s.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || h(S)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: d[10] || (d[10] = (p) => m(p, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (T(), Y(g, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[11] || (d[11] = (p) => e.valGroup[e.item.key] = p),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: d[12] || (d[12] = (p) => u(p, e.item))
          }, {
            default: W(() => [
              ge(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (T(), Y(I, {
            key: 8,
            style: ee(s.itemStyle),
            onOnChange: d[13] || (d[13] = (p) => n(p, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[14] || (d[14] = (p) => s.tempKeys[e.item.tempKey] = p)
          }, {
            default: W(() => [
              (T(!0), D(me, null, ve(e.item.options, (p) => (T(), Y(g, {
                key: "radioItem" + p.val,
                label: p.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || p.disabled
              }, {
                default: W(() => [
                  p.icon && !e.item.buttonType ? (T(), Y(C, {
                    key: 0,
                    type: p.icon
                  }, null, 8, ["type"])) : ye("", !0),
                  M("span", null, q(p.label || p.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (T(), Y(V, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[15] || (d[15] = (p) => e.valGroup[e.item.key] = p),
            disabled: !!e.item.disabled,
            onOnChange: d[16] || (d[16] = (p) => u(p, e.item))
          }, {
            default: W(() => [
              ge(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (T(), Y(_, {
            key: 10,
            style: ee(s.itemStyle),
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[17] || (d[17] = (p) => s.tempKeys[e.item.tempKey] = p),
            onOnChange: d[18] || (d[18] = (p) => n(p, e.item))
          }, {
            default: W(() => [
              (T(!0), D(me, null, ve(e.item.options, (p) => (T(), Y(V, {
                key: "checkItem" + p.val,
                label: p.val,
                disabled: !!e.item.disabled || e.disabled || p.disabled
              }, {
                default: W(() => [
                  p.icon ? (T(), Y(C, {
                    key: 0,
                    type: p.icon
                  }, null, 8, ["type"])) : ye("", !0),
                  M("span", null, q(p.label || p.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (T(), Y(w, {
            key: 11,
            type: "textarea",
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[19] || (d[19] = (p) => s.tempKeys[e.item.tempKey] = p),
            autosize: e.item.autosize || { minRows: 2 },
            style: ee(s.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: d[20] || (d[20] = (p) => u(p, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), Y(St, {
            key: 12,
            style: ee(s.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[21] || (d[21] = (p) => e.valGroup[e.item.key] = p),
            url: e.item.url || s.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: d[22] || (d[22] = (p) => n(p, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), Y(A, {
            key: 13,
            style: ee(s.itemStyle),
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[23] || (d[23] = (p) => s.tempKeys[e.item.tempKey] = p),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || h(S)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: d[24] || (d[24] = (p) => u(p, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (T(), Y(B, {
            key: 14,
            style: ee(s.itemStyle),
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[25] || (d[25] = (p) => s.tempKeys[e.item.tempKey] = p),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || h(S)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: d[26] || (d[26] = (p) => u(p, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), Y(Lt, {
            key: 15,
            style: ee(s.itemStyle),
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[27] || (d[27] = (p) => s.tempKeys[e.item.tempKey] = p),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || h(S)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: d[28] || (d[28] = (p) => u(p, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), Y(It, {
            key: 16,
            class: "inlineBlock",
            style: ee(s.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[29] || (d[29] = (p) => e.valGroup[e.item.key] = p),
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: d[30] || (d[30] = (p) => u(p, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), Y(Bt, {
            key: 17,
            modelValue: s.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[31] || (d[31] = (p) => s.tempKeys[e.item.tempKey] = p),
            style: ee(s.itemStyle),
            placeholder: e.item.placeholder || h(S)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: d[32] || (d[32] = (p) => u(p, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (T(), D("div", {
            key: 18,
            class: "inlineBlock",
            style: ee(s.itemStyle)
          }, [
            Te(s.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ye("", !0),
          e.item.info ? (T(), D("div", Wn, q(e.item.info), 1)) : ye("", !0),
          e.item.title ? (T(), D("div", jn, q(e.item.title), 1)) : ye("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), qn = /* @__PURE__ */ M("input", { type: "text" }, null, -1), Jn = { class: "inlineBlock" }, bl = /* @__PURE__ */ se({
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
  setup(a, { expose: o, emit: e }) {
    var jl, ql;
    const t = a, u = z(null), n = z({}), c = z([]), i = z({});
    let m = [];
    const s = ((jl = window == null ? void 0 : window.g) == null ? void 0 : jl.mgrURL) ?? "";
    let d = [], f = [];
    const w = z(!1), b = z(Math.random() * 1e8 + 1e3), v = (ql = window == null ? void 0 : window.g) != null && ql.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let g = !1;
    const C = K(() => Array.isArray(t.formData.length ? t.formData[0] : !1)), I = K(
      () => t.inline ? {
        width: t.itemWidth + t.labelWidth + "px"
      } : {}
    ), V = K(
      () => t.inline ? {
        width: "100%"
      } : { width: t.contentWidth }
    ), _ = K(() => {
      let r = ne(t.formRules);
      for (let l in r)
        if (r.hasOwnProperty(l))
          if (Array.isArray(r[l]))
            for (let x of r[l])
              x.message || x.validator || (x.message = S("r.required"));
          else
            P(r[l]) === "Object" && (r[l].message || r[l].validator || (r[l].message = S("r.required")));
      return r;
    }), A = K(() => {
      let r = [];
      if (C.value)
        for (let l of c.value)
          p(l, r);
      else
        p(c.value, r);
      return r.concat(d, f);
    }), B = K(() => {
      let r = [];
      if (C.value)
        for (let l of c.value)
          O(l, r);
      else
        O(c.value, r);
      return r;
    });
    function L(r) {
      return r.filter((l) => l.slotName);
    }
    function p(r, l) {
      for (let x of r)
        if (x.showing === !0 && x.key && x.type !== "selectInput" && (l.push(x.key), x.key2 && l.push(x.key2), x.collectLabel)) {
          if (!Array.isArray(x.collectLabel) && x.collectLabel.key)
            l.push(x.collectLabel.key);
          else if (Array.isArray(x.collectLabel))
            for (let k of x.collectLabel)
              k.key && l.push(k.key);
        }
    }
    function O(r, l) {
      for (let x of r)
        x.showing === !0 && x.key && x.type !== "selectInput" && l.push(x.key);
    }
    function y() {
      return new Promise((r) => {
        J(), E().then(() => {
          e("on-reset"), r(!0);
        });
      });
    }
    function F() {
      return new Promise((r) => {
        for (let l of m)
          l();
        m = [], i.value = {}, $(), ae(), E().then(() => {
          e("on-re-render"), r(!0);
        });
      });
    }
    function E() {
      return new Promise((r) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), Oe(function() {
          r(!0);
        });
      });
    }
    function J() {
      let r = _e();
      for (let l in n.value)
        if (n.value.hasOwnProperty(l))
          if (be(r[l]))
            n.value[l] = r[l];
          else if (Array.isArray(n.value[l]))
            n.value[l] = [];
          else if (P(n.value[l]) === "Boolean")
            n.value[l] = !1;
          else {
            const x = We(t.formData, (k) => k.key === l);
            x && (x.type === "editor" || x.type === "editorPro") ? n.value[l] = "" : n.value[l] = null;
          }
      Q(r);
    }
    function Q(r) {
      for (let l in i.value)
        i.value.hasOwnProperty(l) && (be(r[l]) ? i.value[l] = r[l] : Array.isArray(i.value[l]) ? i.value[l] = [] : P(i.value[l]) === "Object" && i.value[l].hasOwnProperty("key") && i.value[l].hasOwnProperty("val") ? i.value[l].val = null : i.value[l] = null);
    }
    function ue(r) {
      let l = _e();
      be(l[r]) ? i.value[r] = l[r] : Array.isArray(i.value[r]) ? i.value[r] = [] : i.value[r] = null;
    }
    function _e() {
      let r = {};
      if (C.value)
        for (let l of c.value)
          Ve(l, r);
      else
        Ve(c.value, r);
      return r;
    }
    function Ve(r, l) {
      for (let x of r)
        x.tempKey && be(x.defaultVal) && U(x, l), x.key && be(x.defaultVal) && (l[x.key] = x.defaultVal), x.key2 && be(x.defaultVal2) && (l[x.key2] = x.defaultVal2);
    }
    function H(r) {
      if (r.show) {
        if (P(r.show) === "Object")
          return ie(r, de(r.show));
        if (Array.isArray(r.show))
          if (r.showOr) {
            for (let l of r.show)
              if (de(l) === !0)
                return ie(r, !0);
            return ie(r, !1);
          } else {
            for (let l of r.show)
              if (de(l) === !1)
                return ie(r, !1);
            return ie(r, !0);
          }
        else if (P(r.show) === "Function")
          return ie(r, r.show(n.value));
      } else
        r.showing || (r.showing = !0);
      return !0;
    }
    function de(r) {
      if (r.reg && typeof r.reg.test == "function")
        return r.reg.test(n.value[r.key]);
      if (Array.isArray(r.val)) {
        for (let l of r.val) {
          if ((n.value[r.key] || n.value[r.key] === 0 || n.value[r.key] === !1) && l === ".")
            return !0;
          if (n.value[r.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function ie(r, l) {
      return !r.showing && l && r.key ? (r.showing = l, r.defaultVal !== void 0 && (r.tempKey ? (i.value[r.tempKey] === null || i.value[r.tempKey] === void 0 || (P(i.value[r.tempKey]) === "Object" || Array.isArray(i.value[r.tempKey])) && Ae(i.value[r.tempKey])) && U(r, i.value) : (n.value[r.key] === null || n.value[r.key] === void 0) && (n.value[r.key] = r.defaultVal), r.key2 && r.deafultVal2 !== void 0 && (n.value[r.key2] === null || n.value[r.key2] === void 0) && r.type !== "inputMap" && (n.value[r.key2] = r.defaultVal2)), r.tempKey && ce(i.value[r.tempKey], r)) : r.showing = l, l;
    }
    function U(r, l) {
      switch (r.type) {
        case "selectInput":
          l[r.tempKey] = {
            key: r.key,
            val: r.defaultVal
          };
          break;
        case "inputMap":
          r.key3 ? l[r.tempKey] = {
            lng: r.defaultVal || 0,
            lat: r.defaultVal2 || 0,
            name: r.defaultVal3 || ""
          } : l[r.tempKey] = {
            lng: r.defaultVal || 0,
            lat: r.defaultVal2 || 0
          };
          break;
        case "input":
        case "inputNumber":
        case "textarea":
          l[r.tempKey] = r.defaultVal;
          break;
        case "radioGroup":
        case "select":
        case "checkboxGroup":
          r.booleanVal ? l[r.tempKey] = r.defaultVal ? 1 : 0 : l[r.tempKey] = r.defaultVal;
          break;
        case "date":
        case "time":
        case "monthRange":
          r.dateType === "date" || r.dateType === "datetime" || r.dateType === "time" || r.dateType === "year" || r.dateType === "month" ? l[r.tempKey] = r.defaultVal : (r.dateType === "daterange" || r.dateType === "datetimerange" || r.dateType === "timerange" || r.type === "monthRange") && (l[r.tempKey] = r.defaultVal && r.defaultVal2 && [r.defaultVal, r.defaultVal2] || []);
          break;
      }
    }
    function ae() {
      let r = ne(t.formData);
      if (C.value)
        for (let l of r)
          re(l);
      else
        re(r);
      c.value = r;
    }
    function re(r) {
      for (let l of r)
        switch (l.type) {
          case "selectInput":
            const x = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = x, i.value[x] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, m.push(
              pe(
                () => i.value[x],
                (N) => {
                  ce(N, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const k = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = k, l.key3 ? i.value[k] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : i.value[k] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, m.push(
              pe(
                () => i.value[k],
                (N) => {
                  ce(N, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const oe = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = oe, i.value[oe] = l.defaultVal !== void 0 ? l.defaultVal : null, m.push(
              pe(
                () => i.value[oe],
                (N) => {
                  ce(N, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (l.options || (l.options = []), l.asyncOption)
              if (l.changeOption)
                if (Array.isArray(l.changeOption)) {
                  let N = !0;
                  for (let X of l.changeOption)
                    if (!X.valKey || !X.key) {
                      N = !1;
                      break;
                    }
                  N ? m.push(
                    pe(
                      () => {
                        let X = "";
                        if (Array.isArray(l.changeOption))
                          for (let Be of l.changeOption) {
                            let Ke = n.value[Be.valKey];
                            if (Ke || Ke === 0 || Ke === !1)
                              X += "&" + Be.key + "=" + Ke;
                            else if (!Be.notRequired)
                              return !1;
                          }
                        return X;
                      },
                      (X) => {
                        let Be = ne(i.value[l.tempKey]);
                        if (i.value[l.tempKey] = null, X && l.optionUrl) {
                          let Ke = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Pe((Ke + X).replace(/\?&/, "?"), l, Be);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), be(Be) && R(Be, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && m.push(
                    pe(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? n.value[l.changeOption.valKey] : !1,
                      (N) => {
                        let X = ne(i.value[l.tempKey]);
                        if (i.value[l.tempKey] = null, (N || N === 0 || N === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let Be = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Pe((Be + "&" + l.changeOption.key + "=" + N).replace(/\?&/, "?"), l, X);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), be(X) && R(X, l);
                      },
                      { immediate: !0 }
                    )
                  ) : P(l.changeOption) === "Boolean" && m.push(
                    pe(
                      () => We(t.formData, (N) => N.key === l.key).optionUrl,
                      (N) => {
                        let X = ne(i.value[l.tempKey]);
                        i.value[l.tempKey] = null, N ? Pe(N, l, X) : (l.options = [], l.localOption && (l.options = [...l.localOption]), be(X) && R(X, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Pe(l.optionUrl, l);
            else
              P(l.borrowOption) === "String" && (l.options = We(c.value, (N) => N.key === l.borrowOption).options);
            const te = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = te, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? i.value[te] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? i.value[te] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : i.value[te] = l.defaultVal !== void 0 ? l.defaultVal : null, m.push(
              pe(
                () => i.value[te],
                (N) => {
                  ce(N, l);
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
            const Z = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = Z, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? i.value[Z] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (i.value[Z] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), m.push(
              pe(
                () => i.value[Z],
                (N) => {
                  ce(N, l);
                }
              )
            );
            break;
        }
    }
    function Pe(r, l, x) {
      Re.get(r).then((k) => {
        var te;
        if (!l.options)
          return;
        let oe = ((te = k == null ? void 0 : k.data) == null ? void 0 : te.records) || (k == null ? void 0 : k.data) || k || [];
        Array.isArray(oe) ? (l.optionFilter && P(l.optionFilter) === "Function" && (oe = l.optionFilter(oe)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...oe.map((Z) => {
            let N;
            if (Array.isArray(l.optionLabel)) {
              let X = "";
              l.optionLabel.forEach((Be, Ke) => {
                let wl = String(Z[Be]);
                Ke === 1 ? X += "（" + wl : Ke > 1 ? X += "、" + wl : X += wl;
              }), N = {
                label: X + "）",
                val: l.optionVal && Z[l.optionVal]
              };
            } else
              N = {
                label: l.optionLabel && Z[l.optionLabel],
                val: l.optionVal && Z[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let X of l.collectLabel)
                  X.valKey && X.valKey !== "label" && (N[X.valKey] = Z[X.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (N[l.collectLabel.valKey] = Z[l.collectLabel.valKey]);
            if (N.val !== null && N.val !== void 0)
              return N;
          })
        )) : (l.options.length = 0, l.options.push(...oe))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), be(x) && R(x, l), l.disableOptionByOthers && (P(l.disableOptionByOthers) === "String" ? m.push(
          pe(
            () => n.value[l.disableOptionByOthers],
            (Z) => {
              if (ue(l.tempKey), !!l.options) {
                for (let N of l.options)
                  N.disabled && (N.disabled = !1);
                if (Z || Z === 0 || Z === !1)
                  for (let N of l.options)
                    N.val === Z && (N.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && m.push(
          pe(
            () => l.disableOptionByOthers.filter((Z) => Z).map((Z) => n.value[Z]),
            (Z) => {
              if (ue(l.tempKey), !!l.options) {
                for (let N of l.options)
                  N.disabled && (N.disabled = !1);
                if (Z) {
                  for (let N of l.options)
                    for (let X = 0; X < Z.length; X++)
                      if (N.val === Z[X]) {
                        N.disabled = !0, Z.splice(X, 1);
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
    function R(r, l) {
      Array.isArray(l.options) && st(l.options, { val: r }) !== -1 && (i.value[l.tempKey] = r);
    }
    function $() {
      if (n.value = {}, C.value)
        for (let r of t.formData)
          fe(r);
      else
        fe(t.formData);
    }
    function fe(r) {
      for (let l of r)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (n.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function ce(r, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            r && (r.beforeKey && delete n.value[r.beforeKey], n.value[r.key] = r.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            r ? (n.value[l.key] = r.lng, n.value[l.key2] = r.lat, l.key3 && (n.value[l.key3] = r.name)) : (n.value[l.key] = null, n.value[l.key2] = null, l.key3 && (n.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (r || r === 0) {
              let oe = /^-?\d+(.\d+)?$/;
              l.numberVal && oe.test(r) ? n.value[l.key] = Number(r) : n.value[l.key] = r;
            } else
              n.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? n.value[l.key] = r === void 0 || r === "" || r === null ? null : !!r : l.multiple || l.type === "checkboxGroup" ? n.value[l.key] = Object.assign([], r) : n.value[l.key] = r, l.collectLabel) {
              const oe = Ce(l, r);
              if (Array.isArray(l.collectLabel)) {
                for (let te of l.collectLabel)
                  if (te.key && te.valKey) {
                    const Z = le(te.key);
                    let N = null;
                    Array.isArray(oe) ? (N = oe.map((Be) => Be[te.valKey]), n.value[te.key] = N, Z && (i.value[Z] = N)) : (oe && be(oe[te.valKey]) && (N = oe[te.valKey]), n.value[te.key] = N, Z && (i.value[Z] = N));
                    let X = We(c.value, (Be) => Be.key === te.key);
                    X && X.tempKey && (i.value[X.tempKey] = n.value[te.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const te = le(l.collectLabel.key);
                let Z = null;
                Array.isArray(oe) ? (Z = oe.map(
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && X[l.collectLabel.valKey]
                ), n.value[l.collectLabel.key] = Z, te && (i.value[te] = Z)) : (oe && be(oe[l.collectLabel.valKey]) && (Z = oe[l.collectLabel.valKey]), n.value[l.collectLabel.key] = Z, te && (i.value[te] = Z));
                let N = We(
                  c.value,
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && X.key === l.collectLabel.key || !1
                );
                N && N.tempKey && (i.value[N.tempKey] = n.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let x = l.dateType;
            const k = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "MM"
            };
            if (x === "date" || x === "datetime" || x === "time" || x === "year" || x === "month")
              r ? (x === "time" ? n.value[l.key] = r : n.value[l.key] = Qe(r).format(typeof l.format == "string" ? l.format : k[x]), x === "date" && l.addTime && (n.value[l.key] += " 00:00:00")) : n.value[l.key] = null;
            else if (l.type === "monthRange" || x === "daterange" || x === "datetimerange" || x === "timerange") {
              if (!l.key2)
                return;
              r && r[0] && r[1] ? (x === "timerange" ? (n.value[l.key] = r[0], n.value[l.key2] = r[1]) : l.type === "monthRange" ? (n.value[l.key] = typeof l.format == "string" && Qe(r[0]).format(l.format) || r[0], n.value[l.key2] = typeof l.format == "string" && l.format && Qe(r[1]).format(l.format) || r[1]) : (n.value[l.key] = Qe(r[0]).format(l.format || x && k[x]), n.value[l.key2] = Qe(r[1]).format(l.format || x && k[x])), x === "daterange" && l.addTime && (n.value[l.key] += " 00:00:00", n.value[l.key2] += " 23:59:59")) : (n.value[l.key] = null, n.value[l.key2] = null);
            }
            break;
        }
    }
    function Ce(r, l) {
      if (r.options)
        if (r.multiple || r.type === "checkboxGroup") {
          if (l) {
            let x = [];
            for (let k of r.options)
              l.indexOf(k.val) !== -1 && x.push(k);
            return x;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let x of r.options)
              if (x.val === l)
                return x;
          }
          return !1;
        }
    }
    function le(r) {
      if (C.value) {
        for (let l of c.value) {
          const x = Ue(l, r);
          if (x)
            return x;
        }
        return !1;
      }
      return Ue(c.value, r);
    }
    function Ue(r, l) {
      for (let x of r)
        if (x.key === l)
          return x.tempKey;
      return !1;
    }
    function nl(r, l) {
      let x = {};
      for (let k in n.value)
        n.value.hasOwnProperty(k) && r[k] !== void 0 && (x[k] = r[k], delete r[k]);
      $l(x, l);
      for (let k in r)
        r.hasOwnProperty(k) && (f.indexOf(k) < 0 && f.push(k), n.value[k] = r[k]);
    }
    function Ft(r) {
      let l = ne(r);
      if (C.value) {
        let x = [];
        for (let k of t.formData)
          x.push(...Pl(k, l));
        return x;
      }
      return Pl(t.formData, l);
    }
    function Pl(r, l) {
      return r.filter((x) => {
        for (let k of Object.keys(l))
          if (x.key === k && B.value.indexOf(k) > -1 && !(l[k] === null || (Array.isArray(l[k]) || P(l[k]) === "Object") && Ae(l[k])))
            return delete l[k], !0;
        return !1;
      }).map((x) => x.key);
    }
    function $l(r, l = !1) {
      let x = ne(r);
      Ut(r, l);
      for (let k in n.value)
        if (n.value.hasOwnProperty(k) && r[k] !== void 0 && r[k] !== "--") {
          if (Array.isArray(r[k]))
            r[k] = r[k].filter((oe) => oe !== "--");
          else if (P(r[k]) === "Object")
            for (let oe in r[k])
              r[k].hasOwnProperty(oe) && r[k][oe] === "--" && (r[k][oe] = null);
          n.value[k] = r[k];
        } else
          l || (n.value[k] = Array.isArray(n.value[k]) ? [] : null);
      Oe(function() {
        $t(Ft(x));
      });
    }
    function Ut(r, l = !1) {
      if (C.value)
        for (let x of c.value)
          Dl(x, r, l);
      else
        Dl(c.value, r, l);
    }
    function Dl(r, l, x = !1) {
      for (let k of r)
        if (k.key && (x && (l[k.key] !== void 0 || k.key2 && l[k.key2] !== void 0) || !x) && k.tempKey)
          switch (k.type) {
            case "inputMap":
              if (!k.key2)
                continue;
              P(l[k.key]) === "Number" && P(l[k.key2] === "Number") ? k.key3 ? i.value[k.tempKey] = {
                lng: l[k.key],
                lat: l[k.key2],
                name: l[k.key3]
              } : i.value[k.tempKey] = {
                lng: l[k.key],
                lat: l[k.key2]
              } : k.key3 ? i.value[k.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : i.value[k.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[k.key] && l[k.key] !== "--" || l[k.key] === 0 ? i.value[k.tempKey] = l[k.key] : i.value[k.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[k.key] && l[k.key] !== "--" || l[k.key] === 0 || l[k.key] === !1 ? k.multiple || k.type === "checkboxGroup" ? i.value[k.tempKey] = [...l[k.key]] : k.booleanVal ? i.value[k.tempKey] = l[k.key] ? 1 : 0 : i.value[k.tempKey] = l[k.key] : k.multiple || k.type === "checkboxGroup" ? i.value[k.tempKey] = [] : i.value[k.tempKey] = null;
              break;
            case "date":
            case "time":
              if (k.dateType === "date" || k.dateType === "datetime" || k.dateType === "year" || k.dateType === "month" || k.dateType === "time")
                i.value[k.tempKey] = l[k.key] && l[k.key] !== "--" ? l[k.key] : null;
              else if (k.dateType === "daterange" || k.dateType === "datetimerange" || k.dateType === "timerange") {
                if (!k.key2)
                  continue;
                i.value[k.tempKey] = l[k.key] && l[k.key] !== "--" && l[k.key2] && l[k.key2] !== "--" && [l[k.key], l[k.key2]] || [];
              }
              break;
          }
    }
    function Kt(r) {
      if (Array.isArray(r))
        for (let l of r)
          Nl(l);
      else
        P(r) === "Object" && Nl(r);
    }
    function Nl(r) {
      const { index: l, indexB: x, key: k, val: oe } = r;
      if (typeof l == "number")
        if (Array.isArray(c.value[l])) {
          if (typeof x == "number")
            if (k && r.hasOwnProperty("val"))
              c.value[l][x][k] = oe;
            else
              for (let te of Object.keys(r))
                te !== "index" && k !== "indexB" && (c.value[l][x][te] = r[te]);
        } else if (k && r.hasOwnProperty("val"))
          c.value[l][k] = oe;
        else
          for (let te of Object.keys(r))
            te !== "index" && (c.value[l][te] = r[te]);
    }
    function El({ label: r, root: l }) {
      l.key2 && (n.value[l.key2] = r), ze({
        e: r,
        root: l
      });
    }
    function Gl(r) {
      r.beforeKey && Zt(d, (l) => l === r.beforeKey), r.key && (d.indexOf(r.key) === -1 && d.push(r.key), ze({
        e: null,
        root: r
      }));
    }
    function zl({ name: r, root: l }) {
      l.key2 && (n.value[l.key2] = r), ze({
        e: r,
        root: l
      });
    }
    function Hl({ e: r, root: l }) {
      ze({
        e: r,
        root: l
      }), Oe(function() {
        var x, k;
        (k = (x = u.value) == null ? void 0 : x.validateField) == null || k.call(x, l.key);
      });
    }
    function ze({ e: r, root: l }) {
      Le(() => {
        let x = {
          event: r
        };
        if (l.key && (x[l.key] = n.value[l.key]), l.key2 && (x[l.key2] = n.value[l.key2]), Array.isArray(l.collectLabel))
          for (let k of l.collectLabel)
            x[k.key] = n.value[k.key];
        else
          l.collectLabel && l.collectLabel.key && (x[l.collectLabel.key] = n.value[l.collectLabel.key]);
        e("on-item-change", x);
      }, 500);
    }
    function Wl() {
      let r = {};
      for (let l of A.value)
        r[l] = n.value[l];
      return t.trim && (r = hl(r)), r;
    }
    function Rt() {
      var r, l;
      (l = (r = u.value) == null ? void 0 : r.validate) == null || l.call(r);
    }
    function Pt(r) {
      Le(() => {
        var l, x;
        (x = (l = u.value) == null ? void 0 : l.validateField) == null || x.call(l, r, () => {
        });
      }, 10);
    }
    function $t(r) {
      Le(() => {
        var l, x;
        if (Array.isArray(r))
          for (let k of r)
            (x = (l = u.value) == null ? void 0 : l.validateField) == null || x.call(l, k, () => {
            });
      }, 10);
    }
    function Dt(r) {
      r !== void 0 && (w.value = !!r);
    }
    function kl() {
      var r, l;
      t.disabled || (l = (r = u.value) == null ? void 0 : r.validate) == null || l.call(r, (x) => {
        g || (g = !0, x && (w.value = !0, e("on-submit", Wl())), Le(() => {
          g = !1;
        }, 2e3));
      });
    }
    return Ee(() => {
      $(), ae();
    }), o({
      resetForm: y,
      refreshFormDom: E,
      reRenderForm: F,
      setItemToValGroup: nl,
      updateValGroup: $l,
      updateFormDataT: Kt,
      validate: Rt,
      reValidate: Pt,
      changeLoading: Dt,
      getValGroup: Wl,
      submit: kl
    }), (r, l) => {
      const x = j("FormItem"), k = j("Button"), oe = j("Form");
      return T(), Y(oe, {
        ref_key: "formGroupXRef",
        ref: u,
        model: h(n),
        rules: h(_),
        "label-width": t.labelWidth,
        inline: t.inline,
        "show-message": t.showMessage,
        class: "formXN",
        key: h(b)
      }, {
        default: W(() => [
          G(x, { style: { display: "none" } }, {
            default: W(() => [
              qn
            ]),
            _: 1
          }),
          h(C) ? (T(!0), D(me, { key: 0 }, ve(h(c), (te, Z) => (T(), D("div", {
            class: xe([r.teamClass, "formTeamBox" + Z]),
            key: "formTeamBox" + Z
          }, [
            (T(!0), D(me, null, ve(te, (N, X) => (T(), D(me, {
              key: "formItem" + X
            }, [
              H(N) ? (T(), Y(tt, {
                key: 0,
                item: N,
                style: ee(h(I)),
                "item-style": h(V),
                "val-group": h(n),
                "temp-keys": h(i),
                inline: t.inline,
                disabled: t.disabled,
                "label-width": t.labelWidth,
                "item-width": t.itemWidth,
                "mgr-url": h(s),
                "upload-url": h(v),
                onItemChange: ze,
                onReValidate: Hl,
                onClearTempKeyItem: ue,
                onSelectInputChange: Gl,
                onAlNameChange: zl,
                onAsyncLabelChange: El
              }, Ye({ _: 2 }, [
                ve(L(te), (Be) => ({
                  name: Be.slotName,
                  fn: W((Ke) => [
                    Te(r.$slots, Be.slotName, {
                      valGroup: Ke.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ye("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ye("", !0),
          (T(!0), D(me, null, ve(h(c), (te, Z) => (T(), D(me, {
            key: "formItem" + Z
          }, [
            !h(C) && H(te) ? (T(), Y(tt, {
              key: 0,
              item: te,
              style: ee(h(I)),
              "item-style": h(V),
              "val-group": h(n),
              "temp-keys": h(i),
              inline: t.inline,
              disabled: t.disabled,
              "label-width": t.labelWidth,
              "item-width": t.itemWidth,
              "mgr-url": h(s),
              "upload-url": h(v),
              onItemChange: ze,
              onReValidate: Hl,
              onClearTempKeyItem: ue,
              onSelectInputChange: Gl,
              onAlNameChange: zl,
              onAsyncLabelChange: El
            }, Ye({ _: 2 }, [
              ve(L(r.formData), (N) => ({
                name: N.slotName,
                fn: W((X) => [
                  Te(r.$slots, N.slotName, {
                    valGroup: X.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ye("", !0)
          ], 64))), 128)),
          t.showLongOkBt ? (T(), Y(x, { key: 1 }, {
            default: W(() => [
              G(k, {
                onClick: kl,
                style: ee(h(V)),
                type: "primary",
                loading: t.btnLoading && h(w),
                disabled: t.disabled
              }, {
                default: W(() => [
                  ge(q(t.longOkBtTxt || h(S)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ye("", !0),
          M("div", Jn, [
            t.showInlineOkBt ? (T(), Y(k, {
              key: 0,
              type: "primary",
              class: xe({ inlineFormBtXN: t.inline, okBtnXN: !0 }),
              onClick: kl,
              loading: t.btnLoading && h(w),
              disabled: t.disabled
            }, {
              default: W(() => [
                ge(q(t.inlineOkBtTxt || h(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ye("", !0),
            t.showInlineClearBt ? (T(), Y(k, {
              key: 1,
              onClick: y,
              class: xe({ inlineFormBtXN: t.inline }),
              type: "dashed"
            }, {
              default: W(() => [
                ge(q(t.inlineClearBtTxt || h(S)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ye("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Yn = /* @__PURE__ */ se({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: "100%" },
    labelWidth: { default: () => gl().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = z({ width: t.with }), n = z(!1), c = z(), i = K(() => {
      if (Array.isArray(t.formData))
        if (Array.isArray(t.formData[0])) {
          let B = [];
          for (let L of t.formData)
            B = B.concat(L.filter((p) => p.type === "custom"));
          return B;
        } else
          return t.formData.filter((B) => B.type === "custom");
      return [];
    });
    function m() {
      return new Promise((B) => {
        var L, p;
        (p = (L = c.value).resetForm) == null || p.call(L).then((O) => {
          B(O);
        });
      });
    }
    function s() {
      return new Promise((B) => {
        var L, p;
        (p = (L = c.value).refreshFormDom) == null || p.call(L).then((O) => {
          B(O);
        });
      });
    }
    function d() {
      return new Promise((B) => {
        var L, p;
        (p = (L = c.value).reRenderForm) == null || p.call(L).then((O) => {
          B(O);
        });
      });
    }
    function f(B, L) {
      var p, O;
      (O = (p = c.value).setItemToValGroup) == null || O.call(p, B, L);
    }
    function w(B, L) {
      var p, O;
      (O = (p = c.value).updateValGroup) == null || O.call(p, B, L);
    }
    function b(B) {
      var L, p;
      (p = (L = c.value).updateFormDataT) == null || p.call(L, B);
    }
    function v() {
      var B, L;
      (L = (B = c.value).validate) == null || L.call(B);
    }
    function g(B) {
      var L, p;
      (p = (L = c.value).reValidate) == null || p.call(L, B);
    }
    function C(B) {
      var L, p;
      B !== void 0 && (n.value = !!B, (p = (L = c.value).changeLoading) == null || p.call(L, n.value));
    }
    function I() {
      var B, L;
      return (L = (B = c.value).getValGroup) == null ? void 0 : L.call(B);
    }
    function V() {
      n.value = !0;
    }
    function _() {
      var B, L;
      (L = (B = c.value).submit) == null || L.call(B);
    }
    function A() {
      e("on-cancel"), Le(() => {
        var B, L;
        n.value = !1, (L = (B = c.value).changeLoading) == null || L.call(B, !1);
      }, 1e3);
    }
    return o({
      resetForm: m,
      refreshFormDom: s,
      reRenderForm: d,
      setItemToValGroup: f,
      updateValGroup: w,
      updateFormDataT: b,
      validate: v,
      reValidate: g,
      changeLoading: C,
      getValGroup: I,
      submit: _,
      close: A
    }), (B, L) => {
      const p = j("Button");
      return T(), D("div", {
        style: ee(h(u)),
        class: "formGroupBoxVM"
      }, [
        G(bl, Xe({
          ref_key: "formRRef",
          ref: c
        }, B.$attrs, {
          "form-data": t.formData,
          "label-width": t.labelWidth,
          "content-width": t.contentWidth,
          "item-width": t.itemWidth,
          btnLoading: t.btnLoading,
          onOnSubmit: V
        }), Ye({ _: 2 }, [
          ve(h(i), (O) => ({
            name: O.slotName,
            fn: W(({ valGroup: y }) => [
              Te(B.$slots, O.slotName, { valGroup: y })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        he(M("div", {
          class: "formFooterVM",
          style: ee({ marginLeft: t.labelWidth + "px" })
        }, [
          M("div", {
            style: ee({ width: t.contentWidth }),
            class: "btnBoxKAL"
          }, [
            t.showOkBt ? (T(), Y(p, {
              key: 0,
              onClick: _,
              class: "form-save-btn",
              loading: t.btnLoading && h(n)
            }, {
              default: W(() => [
                ge(q(t.okBtTxt || h(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : ye("", !0),
            t.showCancelBt ? (T(), Y(p, {
              key: 1,
              onClick: A,
              class: "form-cancel-btn"
            }, {
              default: W(() => [
                ge(q(t.cancelBtTxt || h(S)("r.cancel")), 1)
              ]),
              _: 1
            })) : ye("", !0)
          ], 4)
        ], 4), [
          [we, t.showOkBt || t.showCancelBt]
        ])
      ], 4);
    };
  }
}), Fl = /* @__PURE__ */ se({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => gl().searchFormLabelWidth },
    itemWidth: { default: 202 },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = z(), n = K(() => {
      if (Array.isArray(t.formData[0])) {
        let V = [];
        for (let _ of t.formData)
          V = V.concat(_.filter((A) => A.type === "custom"));
        return V;
      }
      return t.formData.filter((V) => V.type === "custom");
    });
    function c() {
      return new Promise((V) => {
        var _, A;
        (A = (_ = u.value).resetForm) == null || A.call(_).then(() => {
          V();
        });
      });
    }
    function i() {
      return new Promise((V) => {
        var _, A;
        (A = (_ = u.value).refreshFormDom) == null || A.call(_).then(() => {
          V();
        });
      });
    }
    function m() {
      return new Promise((V) => {
        var _, A;
        (A = (_ = u.value).reRenderForm) == null || A.call(_).then(() => {
          V();
        });
      });
    }
    function s(V, _) {
      var A, B;
      (B = (A = u.value).setItemToValGroup) == null || B.call(A, V, _);
    }
    function d(V, _) {
      var A, B;
      (B = (A = u.value).updateValGroup) == null || B.call(A, V, _);
    }
    function f(V) {
      var _, A;
      (A = (_ = u.value).updateFormDataT) == null || A.call(_, V);
    }
    function w() {
      var V, _;
      (_ = (V = u.value).validate) == null || _.call(V);
    }
    function b(V) {
      var _, A;
      (A = (_ = u.value).reValidate) == null || A.call(_, V);
    }
    function v(V) {
      var _, A;
      (A = (_ = u.value).changeLoading) == null || A.call(_, V === void 0 ? !1 : V);
    }
    function g() {
      var V, _;
      return (_ = (V = u.value).getValGroup) == null ? void 0 : _.call(V);
    }
    function C(V) {
      e("on-search", V);
    }
    function I() {
      var V, _;
      (_ = (V = u.value).submit) == null || _.call(V);
    }
    return Ee(() => {
      const V = u.value.$el;
      V != null && V.parentNode && V.parentNode.addEventListener("keyup", (_) => {
        _.keyCode === 13 && I();
      });
    }), o({
      resetForm: c,
      refreshFormDom: i,
      reRenderForm: m,
      setItemToValGroup: s,
      updateValGroup: d,
      updateFormDataT: f,
      validate: w,
      reValidate: b,
      changeLoading: v,
      getValGroup: g,
      submit: I
    }), (V, _) => (T(), Y(bl, Xe({
      ref_key: "formRRef",
      ref: u
    }, V.$attrs, {
      "form-data": t.formData,
      "label-width": t.labelWidth,
      "item-width": t.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": t.showInlineOkBt,
      "inline-ok-bt-txt": h(S)("r.check"),
      "show-inline-clear-bt": t.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: C
    }), Ye({ _: 2 }, [
      ve(h(n), (A) => ({
        name: A.slotName,
        fn: W(({ valGroup: B }) => [
          Te(V.$slots, A.slotName, { valGroup: B })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Xn = /* @__PURE__ */ se({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: 520 },
    labelWidth: { default: () => gl().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = z(), n = z(!1), c = z(!1), i = K(() => {
      if (Array.isArray(t.formData[0])) {
        let p = [];
        for (let O of t.formData)
          p = p.concat(O.filter((y) => y.type === "custom"));
        return p;
      }
      return t.formData.filter((p) => p.type === "custom");
    });
    function m() {
      return new Promise((p) => {
        var O, y;
        (y = (O = u.value).resetForm) == null || y.call(O).then(() => {
          p();
        });
      });
    }
    function s() {
      return new Promise((p) => {
        var O, y;
        (y = (O = u.value).refreshFormDom) == null || y.call(O).then(() => {
          p();
        });
      });
    }
    function d() {
      return new Promise((p) => {
        var O, y;
        (y = (O = u.value).reRenderForm) == null || y.call(O).then(() => {
          p();
        });
      });
    }
    function f(p, O) {
      var y, F;
      (F = (y = u.value).setItemToValGroup) == null || F.call(y, p, O);
    }
    function w(p, O) {
      var y, F;
      (F = (y = u.value).updateValGroup) == null || F.call(y, p, O);
    }
    function b(p) {
      var O, y;
      (y = (O = u.value).updateFormDataT) == null || y.call(O, p);
    }
    function v() {
      var p, O;
      (O = (p = u.value).validate) == null || O.call(p);
    }
    function g(p) {
      var O, y;
      (y = (O = u.value).reValidate) == null || y.call(O, p);
    }
    function C(p) {
      var O, y;
      p !== void 0 && (c.value = !!p, (y = (O = u.value).changeLoading) == null || y.call(O, c.value));
    }
    function I() {
      var p, O;
      return (O = (p = u.value).getValGroup) == null ? void 0 : O.call(p);
    }
    function V() {
      c.value = !0;
    }
    function _() {
      var p, O;
      t.hideCancelBt ? B() : (O = (p = u.value).submit) == null || O.call(p);
    }
    function A() {
      n.value = !0;
    }
    function B() {
      n.value = !1, Le(() => {
        var p, O;
        c.value = !1, (O = (p = u.value).changeLoading) == null || O.call(p, !1);
      }, 1e3);
    }
    function L(p) {
      e(p ? "on-open" : "on-close");
    }
    return o({
      resetForm: m,
      refreshFormDom: s,
      reRenderForm: d,
      setItemToValGroup: f,
      updateValGroup: w,
      updateFormDataT: b,
      validate: v,
      reValidate: g,
      changeLoading: C,
      getValGroup: I,
      submit: _,
      open: A,
      close: B
    }), (p, O) => {
      const y = j("Button"), F = j("Modal");
      return T(), Y(F, {
        class: xe(["formModal", { hideFooter: t.hideFooter }]),
        title: t.title || h(S)("r.title"),
        modelValue: h(n),
        "onUpdate:modelValue": O[0] || (O[0] = (E) => Fe(n) ? n.value = E : null),
        "mask-closable": !1,
        "footer-hide": t.hideFooter,
        width: t.width,
        onOnVisibleChange: L
      }, {
        footer: W(() => [
          G(y, {
            onClick: _,
            class: "modal-save-btn",
            loading: t.btnLoading && h(c)
          }, {
            default: W(() => [
              ge(q(t.okBtTxt || h(S)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          t.hideCancelBt ? ye("", !0) : (T(), Y(y, {
            key: 0,
            onClick: B,
            class: "modal-cancel-btn"
          }, {
            default: W(() => [
              ge(q(t.cancelBtTxt || h(S)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: W(() => [
          G(bl, Xe({
            ref_key: "formRRef",
            ref: u
          }, p.$attrs, {
            "form-data": t.formData,
            "label-width": t.labelWidth,
            btnLoading: t.btnLoading,
            onOnSubmit: V
          }), Ye({ _: 2 }, [
            ve(h(i), (E) => ({
              name: E.slotName,
              fn: W(({ valGroup: J }) => [
                Te(p.$slots, E.slotName, { valGroup: J })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Zn = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a, t = z(!0), u = z([]), n = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const i = K(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), m = K(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    pe(
      () => e.data,
      (v) => {
        t.value = !1;
        let g = [];
        s(v, g), u.value = g, Oe(function() {
          t.value = !0, e.inlineLeaf && Oe(w);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), pe(
      () => m.value,
      (v) => {
        let g, C = "s";
        if (Array.isArray(e.collectVal) ? (g = e.collectVal[0] || "", C = "a") : g = e.collectVal, !g || JSON.stringify(v) === JSON.stringify(c)) {
          c = [];
          return;
        }
        je({
          group: u.value,
          condition: (I) => I.checked === !0,
          key: "checked",
          val: !1
        }), je(C === "a" ? {
          group: u.value,
          condition: (I) => st(v, [g, I[g]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: u.value,
          condition: (I) => v.indexOf(I[g]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), pe(
      () => e.disabled,
      (v) => {
        je({
          group: u.value,
          condition: (g) => g.disableCheckbox !== v,
          key: "disableCheckbox",
          val: v
        }), e.inlineLeaf && Oe(w);
      },
      { immediate: !0 }
    );
    function s(v, g = []) {
      for (let C of v) {
        let I = !1;
        i.value.length > 1 ? I = Cl(m.value, (_) => _[i.value[0]] === C[i.value[0]]) !== void 0 : I = i.value[0] ? m.value.indexOf(C[i.value[0]]) !== -1 : !1;
        let V = {
          name: C[e.label],
          expand: !!(e.expandAll || C.expand),
          checked: I,
          disableCheckbox: e.disabled
        };
        for (let _ of i.value)
          V[_] = C[_];
        g.push(V), C.children && C.children.length > 0 && (V.children = [], d(C.children, V.children));
      }
    }
    function d(v, g = []) {
      for (let C of v) {
        let I = !1;
        i.value.length > 1 ? I = Cl(m.value, (_) => _[i.value[0]] === C[i.value[0]]) !== void 0 : I = i.value[0] ? m.value.indexOf(C[i.value[0]]) !== -1 : !1;
        let V = {
          name: C[e.label],
          expand: !!(e.expandAll || C.expand),
          checked: I,
          disableCheckbox: e.disabled
        };
        for (let _ of i.value)
          V[_] = C[_];
        g.push(V), C.children && C.children.length > 0 && (V.children = [], s(C.children, V.children));
      }
    }
    function f(v, {
      data: g
    }) {
      let C = "", I = !0;
      if (g.children && g.children.length > 0) {
        for (let V of g.children)
          if (V.children !== void 0) {
            I = !1;
            break;
          }
        I && e.inlineLeaf && (C = "inlineChildXA");
      }
      return v(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: C
        },
        [
          v(
            "span",
            {
              style: {
                fontWeight: g.children ? "bold" : "normal"
              }
            },
            g.name
          )
        ]
      );
    }
    function w(v) {
      if (v) {
        v.expand && Oe(w);
        return;
      }
      let g = document.querySelectorAll("#" + n + " .inlineChildXA");
      if (g.length > 0)
        for (let C of g) {
          let I = C.parentElement, V = I == null ? void 0 : I.nextElementSibling;
          if (!V)
            return;
          if (V.tagName !== "BR") {
            let _ = I == null ? void 0 : I.parentElement, A = document.createElement("br");
            _ == null || _.insertBefore(A, V), V = A.nextElementSibling, (V == null ? void 0 : V.className.indexOf("inlineTreeNodeF")) === -1 && V.setAttribute("class", V.className + " inlineTreeNodeF");
          }
          for (; V != null && V.nextElementSibling; )
            V = V.nextElementSibling, V.className.indexOf("inlineTreeNodeF") === -1 && V.setAttribute("class", V.className + " inlineTreeNodeF");
        }
    }
    function b(v) {
      let g = [];
      if (e.leaf) {
        for (let C of v)
          if (!C.children)
            if (Array.isArray(e.collectVal)) {
              let I = {};
              for (let V of e.collectVal)
                I[V] = C[V];
              g.push(I);
            } else
              g.push(C[e.collectVal]);
      } else
        for (let C of v)
          if (Array.isArray(e.collectVal)) {
            let I = {};
            for (let V of e.collectVal)
              I[V] = C[V];
            g.push(I);
          } else
            g.push(C[e.collectVal]);
      c = g, o("update:modelValue", g), o("on-change", ne(g));
    }
    return (v, g) => {
      const C = j("Tree");
      return h(t) ? (T(), Y(C, {
        key: 0,
        id: n,
        class: "checkboxTreeGA",
        data: h(u),
        render: f,
        onOnCheckChange: b,
        onOnToggleExpand: w,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ye("", !0);
    };
  }
}), Qn = { class: "transferBoxRL" }, eo = { class: "leftBoxLLL" }, lo = { class: "fullHeight flexColumnBox" }, to = { class: "notGrow" }, ao = { class: "titleLLL" }, no = { class: "growFlexItem" }, oo = { class: "middleBoxLLL" }, io = { class: "rightBoxLLL" }, ro = { class: "fullHeight flexColumnBox" }, so = { class: "notGrow" }, uo = { class: "titleLLL" }, co = { class: "growFlexItem" }, fo = /* @__PURE__ */ se({
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
    addParamsHandle: { type: Function, default: (a) => a.map((o) => o.id) },
    deleteParamsHandle: { type: Function, default: (a) => a.map((o) => o.id) },
    addAllParamsHandle: { type: Function, default: (a) => a },
    deleteAllParamsHandle: { type: Function, default: (a) => a },
    addMethod: { default: "post" },
    addAllMethod: { default: "post" },
    deleteMethod: { default: "delete" },
    deleteAllMethod: { default: "delete" },
    searchFormLabelWith: {}
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(a, { expose: o, emit: e }) {
    const t = a;
    let u = z({}), n = z({}), c = z([]), i = z([]), m = z(0), s = z(0);
    const d = K(() => ({ ...t.constSearchDataLeft, ...u.value })), f = K(() => ({ ...t.constSearchDataRight, ...n.value })), w = K(() => m.value < 1), b = K(() => c.value.length < 1), v = K(() => i.value.length < 1), g = K(() => s.value < 1), C = z(), I = z(), V = z(), _ = z();
    function A() {
      C.value.resetForm(), I.value.resetForm(), Ae(u.value) || (u.value = {}), Ae(n.value) || (n.value = {}), V.value.clearSelect(), _.value.clearSelect();
    }
    function B() {
      V.value.search(), _.value.search();
    }
    function L(H) {
      c.value = H;
    }
    function p(H) {
      i.value = H;
    }
    function O(H) {
      var de, ie, U, ae, re;
      m.value = ((ie = (de = H == null ? void 0 : H.data) == null ? void 0 : de.page) == null ? void 0 : ie.total) || ((ae = (U = H == null ? void 0 : H.data) == null ? void 0 : U.data) == null ? void 0 : ae.total) || ((re = H == null ? void 0 : H.data) == null ? void 0 : re.total) || (H == null ? void 0 : H.total) || 0, e("on-data-change-l", H);
    }
    function y(H) {
      var de, ie, U, ae, re;
      s.value = ((ie = (de = H == null ? void 0 : H.data) == null ? void 0 : de.page) == null ? void 0 : ie.total) || ((ae = (U = H == null ? void 0 : H.data) == null ? void 0 : U.data) == null ? void 0 : ae.total) || ((re = H == null ? void 0 : H.data) == null ? void 0 : re.total) || (H == null ? void 0 : H.total) || 0, e("on-data-change-r", H);
    }
    function F(H) {
      u.value = H;
    }
    function E(H) {
      n.value = H;
    }
    function J() {
      t.addUrl && Ve("add");
    }
    function Q() {
      t.deleteUrl && Ve("delete");
    }
    function ue() {
      t.addAllUrl && t.addUrl && Ve("addAll");
    }
    function _e() {
      t.deleteAllUrl && Ve("deleteAll");
    }
    function Ve(H) {
      let de, ie, U = {}, ae = "";
      switch (H) {
        case "add":
          de = t.addMethod, ie = t.addUrl, U = t.addParamsHandle(i.value), ae = S("r.add");
          break;
        case "delete":
          de = t.deleteMethod, ie = t.deleteUrl, U = t.deleteParamsHandle(c.value), ae = S("r.remove");
          break;
        case "addAll":
          de = t.addAllMethod, ie = t.addAllUrl, U = t.addAllParamsHandle(f.value), ae = S("r.addAll");
          break;
        case "deleteAll":
          de = t.deleteAllMethod, ie = t.deleteAllUrl, U = t.deleteAllParamsHandle(d.value), ae = S("r.removeAll");
          break;
      }
      ie && de && Re[de](ie, U, null, [], { spin: !0 }, !1).then((re) => {
        (re == null ? void 0 : re.code) === 0 ? (Ie(ae + S("r.success"), (re == null ? void 0 : re.message) || "", "success"), V.value && V.value.getTableData(), _.value && _.value.getTableData(), e("transferred")) : Ie(ae + S("r.failed"), (re == null ? void 0 : re.message) || "", "error");
      }).catch(() => {
        Ie(ae + S("r.error"), "", "error");
      });
    }
    return o({
      reset: A,
      search: B
    }), (H, de) => {
      const ie = j("Icon"), U = j("Button");
      return T(), D("div", Qn, [
        M("div", eo, [
          M("div", lo, [
            M("div", to, [
              M("div", ao, q(t.titleLeft || h(S)("r.added")), 1),
              G(Sl, null, {
                default: W(() => [
                  G(Fl, {
                    ref_key: "leftFormRef",
                    ref: C,
                    "form-data": t.formDataLeft,
                    "form-rules": t.formRulesLeft,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: F
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", no, [
              G(Ol, {
                ref_key: "lTabRef",
                ref: V,
                columns: t.leftTableColumns,
                url: t.leftTableUrl,
                "search-data": h(d),
                onOnSelectionChange: L,
                onOnDataChange: O,
                "init-data": !!(h(Ae)(t.constSearchDataLeft) && t.leftTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ]),
        M("div", oo, [
          G(U, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: _e,
            disabled: h(w)
          }, {
            default: W(() => [
              ge(q(h(S)("r.removeAll")) + " ", 1),
              G(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          G(U, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Q,
            disabled: h(b)
          }, {
            default: W(() => [
              ge(q(h(S)("r.remove")) + " ", 1),
              G(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          G(U, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: J,
            disabled: h(v)
          }, {
            default: W(() => [
              G(ie, { type: "ios-arrow-back" }),
              ge(" " + q(h(S)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          G(U, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: ue,
            disabled: h(g)
          }, {
            default: W(() => [
              G(ie, { type: "ios-arrow-back" }),
              ge(" " + q(h(S)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        M("div", io, [
          M("div", ro, [
            M("div", so, [
              M("div", uo, q(t.titleRight || h(S)("r.notAdded")), 1),
              G(Sl, null, {
                default: W(() => [
                  G(Fl, {
                    ref_key: "rightFormRef",
                    ref: I,
                    "form-data": t.formDataRight,
                    "form-rules": t.formRulesRight,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: E
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", co, [
              G(Ol, {
                ref_key: "rTabRef",
                ref: _,
                columns: t.rightTableColumns,
                url: t.rightTableUrl,
                "search-data": h(f),
                onOnSelectionChange: p,
                onOnDataChange: y,
                "init-data": !!(h(Ae)(t.constSearchDataRight) && t.rightTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ])
      ]);
    };
  }
}), po = { class: "boxLPA" }, mo = { class: "headerJ" }, ho = { class: "firstT borderBoxAS" }, yo = { class: "secondT borderBoxAS" }, vo = { class: "firstCol borderBoxAS" }, go = { class: "secondCol borderBoxAS" }, bo = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a, t = z([]), u = K(() => {
      let m = ne(e.data), s = ne(t.value);
      for (let d of m) {
        let f = 0;
        if (d.children && !Ae(d.children))
          for (let w of d.children) {
            for (let b = 0, v = s.length; b < v; b++)
              if (Array.isArray(e.collectVal)) {
                let g = !0;
                for (let C of e.collectVal)
                  if (s[b][C] !== w[C]) {
                    g = !1;
                    break;
                  }
                if (g) {
                  w.checked = !0, f++, s.splice(b, 1);
                  break;
                }
              } else if (s[b] === w[e.collectVal]) {
                w.checked = !0, f++, s.splice(b, 1);
                break;
              }
            !w.checked && (w.checked = !1);
          }
        f === 0 ? (d.checked = !1, d.indeterminate = !1) : d.children && f === d.children.length ? (d.checked = !0, d.indeterminate = !1) : (d.checked = !1, d.indeterminate = !0);
      }
      return m;
    });
    pe(
      () => e.modelValue,
      (m, s) => {
        ll(t.value, m) || ll(m, s) || (t.value = m);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function n(m, s) {
      if (m.children)
        for (let d of m.children)
          d.checked = s;
      c();
    }
    function c() {
      i(u.value, !0);
    }
    function i(m, s) {
      let d = [];
      for (let f of m) {
        if (!s && !e.leaf && f.checked && f.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let w = {};
            for (let b of e.collectVal)
              w[b] = f[b];
            d.push(w);
          } else
            P(e.collectVal) === "String" && d.push(f[e.collectVal]);
        if (f.children) {
          for (let w of f.children)
            if (w.checked)
              if (Array.isArray(e.collectVal)) {
                let b = {};
                for (let v of e.collectVal)
                  b[v] = w[v];
                d.push(b);
              } else
                P(e.collectVal) === "String" && d.push(w[e.collectVal]);
        }
      }
      s ? (t.value = d, e.leaf ? (o("update:modelValue", d), o("on-change", ne(d))) : Oe(function() {
        i(u.value);
      })) : (o("update:modelValue", d), o("on-change", ne(d)));
    }
    return (m, s) => {
      const d = j("Checkbox");
      return T(), D("div", po, [
        M("div", mo, [
          M("div", ho, q(m.firstTitle || h(S)("r.level.1")), 1),
          M("div", yo, q(m.secondTitle || h(S)("r.level.2")), 1)
        ]),
        (T(!0), D(me, null, ve(h(u), (f, w) => (T(), D("div", {
          class: "bodyJ",
          key: "checkboxJ" + w
        }, [
          M("div", vo, [
            G(d, {
              modelValue: f.checked,
              "onUpdate:modelValue": (b) => f.checked = b,
              indeterminate: f.indeterminate,
              onOnChange: (b) => n(f, b),
              disabled: m.disabled
            }, {
              default: W(() => [
                ge(q(f[m.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", go, [
            (T(!0), D(me, null, ve(f.children, (b, v) => (T(), D("div", {
              class: "secItem",
              key: "secItem" + v
            }, [
              G(d, {
                modelValue: b.checked,
                "onUpdate:modelValue": (g) => b.checked = g,
                onOnChange: c,
                disabled: m.disabled
              }, {
                default: W(() => [
                  ge(q(b[m.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), ko = { class: "boxLPB" }, wo = { class: "headerF" }, Vo = { class: "firstT borderBoxKa" }, _o = { class: "secondT borderBoxKa" }, Co = { class: "thirdT borderBoxKa" }, Ao = { class: "firstCol borderBoxKa" }, Bo = { class: "rightBoxAL" }, xo = { class: "secondCol borderBoxKa" }, To = { class: "thirdCol borderBoxKa" }, So = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a, t = z([]), u = K(() => {
      let s = ne(e.data), d = ne(t.value);
      for (let f of s) {
        let w = 0, b = 0;
        if (f.children && !Ae(f.children))
          for (let v of f.children) {
            let g = 0;
            if (v.children && !Ae(v.children))
              for (let C of v.children) {
                for (let I = 0, V = d.length; I < V; I++)
                  if (Array.isArray(e.collectVal)) {
                    let _ = !0;
                    for (let A of e.collectVal)
                      if (d[I][A] !== C[A]) {
                        _ = !1;
                        break;
                      }
                    if (_) {
                      C.checked = !0, g++, d.splice(I, 1);
                      break;
                    }
                  } else if (d[I] === C[e.collectVal]) {
                    C.checked = !0, g++, d.splice(I, 1);
                    break;
                  }
                !C.checked && (C.checked = !1);
              }
            g === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && g === v.children.length ? (v.checked = !0, v.indeterminate = !1, w++) : (v.checked = !1, v.indeterminate = !0, b++);
          }
        w === 0 && b === 0 ? (f.checked = !1, f.indeterminate = !1) : f.children && w === f.children.length ? (f.checked = !0, f.indeterminate = !1) : (f.checked = !1, f.indeterminate = !0);
      }
      return s;
    });
    pe(
      () => e.modelValue,
      (s, d) => {
        ll(t.value, s) || ll(s, d) || (t.value = s);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function n(s, d) {
      if (s.children) {
        for (let f of s.children)
          if (f.checked = d, f.children)
            for (let w of f.children)
              w.checked = d;
      }
      i();
    }
    function c(s, d) {
      if (s.children)
        for (let f of s.children)
          f.checked = d;
      i();
    }
    function i() {
      m(u.value, !0);
    }
    function m(s, d) {
      let f = [];
      for (let w of s) {
        if (!d && !e.leaf && w.checked && w.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let v of e.collectVal)
              b[v] = w[v];
            f.push(b);
          } else
            P(e.collectVal) === "String" && f.push(w[e.collectVal]);
        if (w.children)
          for (let b of w.children) {
            if (!d && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let v = {};
                for (let g of e.collectVal)
                  v[g] = b[g];
                f.push(v);
              } else
                P(e.collectVal) === "String" && f.push(b[e.collectVal]);
            if (b.children) {
              for (let v of b.children)
                if (v.checked)
                  if (Array.isArray(e.collectVal)) {
                    let g = {};
                    for (let C of e.collectVal)
                      g[C] = v[C];
                    f.push(g);
                  } else
                    P(e.collectVal) === "String" && f.push(v[e.collectVal]);
            }
          }
      }
      d ? (t.value = f, e.leaf ? (o("update:modelValue", f), o("on-change", ne(f))) : Oe(function() {
        m(u.value);
      })) : (o("update:modelValue", f), o("on-change", ne(f)));
    }
    return (s, d) => {
      const f = j("Checkbox");
      return T(), D("div", ko, [
        M("div", wo, [
          M("div", Vo, q(s.firstTitle || h(S)("r.level.1")), 1),
          M("div", _o, q(s.secondTitle || h(S)("r.level.2")), 1),
          M("div", Co, q(s.thirdTitle || h(S)("r.level.3")), 1)
        ]),
        (T(!0), D(me, null, ve(h(u), (w, b) => (T(), D("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          M("div", Ao, [
            G(f, {
              modelValue: w.checked,
              "onUpdate:modelValue": (v) => w.checked = v,
              indeterminate: w.indeterminate,
              onOnChange: (v) => n(w, v),
              disabled: s.disabled
            }, {
              default: W(() => [
                ge(q(w[s.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", Bo, [
            (T(!0), D(me, null, ve(w.children, (v, g) => (T(), D("div", {
              class: "rightBoxInner",
              key: "secItem" + g
            }, [
              M("div", xo, [
                G(f, {
                  modelValue: v.checked,
                  "onUpdate:modelValue": (C) => v.checked = C,
                  indeterminate: v.indeterminate,
                  onOnChange: (C) => c(v, C),
                  disabled: s.disabled
                }, {
                  default: W(() => [
                    ge(q(v[s.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              M("div", To, [
                (T(!0), D(me, null, ve(v.children, (C, I) => (T(), D("div", {
                  class: "thirdItem",
                  key: "thirdItem" + I
                }, [
                  G(f, {
                    modelValue: C.checked,
                    "onUpdate:modelValue": (V) => C.checked = V,
                    onOnChange: i,
                    disabled: s.disabled
                  }, {
                    default: W(() => [
                      ge(q(C[s.label]), 1)
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
}), Lo = { class: "flexColumnBox wellCardR" }, Io = { class: "panelHeader notGrow" }, Oo = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Mo = { class: "btsF" }, Fo = { class: "growFlexItem relativeBox" }, Uo = { class: "fullFlowContent" }, Ko = /* @__PURE__ */ se({
  __name: "WellCard",
  props: {
    title: {},
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const o = a, e = K(() => {
      let t = {
        width: o.width,
        height: o.height
      };
      o.inline && (t.display = "inline-block");
      for (let u in t)
        t.hasOwnProperty(u) && typeof t[u] == "number" && t[u] > 0 && (t[u] += "px");
      return t;
    });
    return (t, u) => (T(), D("div", {
      style: ee(h(e))
    }, [
      M("div", Lo, [
        M("div", Io, [
          M("div", Oo, q(o.title || h(S)("r.title")), 1),
          M("div", Mo, [
            Te(t.$slots, "bts")
          ])
        ]),
        M("div", Fo, [
          M("div", Uo, [
            Te(t.$slots, "default")
          ])
        ])
      ])
    ], 4));
  }
}), Ro = /* @__PURE__ */ se({
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
  setup(a, { emit: o }) {
    const e = a;
    let t = z(1), u = 1;
    const n = z(""), c = dl([]);
    let i = {}, m = !0, s = !1;
    const d = "scm" + Math.random(), f = K(() => n.value ? S("r.searchFor") + n.value : e.placeholder || S("r.pInput")), w = K({
      get() {
        return e.modelValue ?? "";
      },
      set(B) {
        if (o("update:modelValue", B ?? ""), e.collectLabel && B !== void 0) {
          let L = {};
          for (let p of c.value)
            if (p[e.optionsValKey] === B) {
              L = JSON.parse(JSON.stringify(p));
              break;
            }
          o("on-change", L);
        }
      }
    }), b = K(() => e.searchKey ? {
      ...e.searchData,
      current: t.value,
      [e.searchKey]: n.value
    } : {
      ...e.searchData,
      current: t.value
    });
    pe(
      () => e.getOptions,
      (B) => {
        B ? m && A() : C();
      },
      { immediate: !0 }
    ), pe(
      () => e.url,
      (B) => {
        B && (s = !0);
      }
    );
    const v = z();
    function g() {
      v.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", V);
    }
    function C() {
      m || (w.value = "", m = !0, n.value = "", c.value = [], t.value = 1, u = 1, i = {}, s = !1);
    }
    function I(B) {
      for (let L of c.value)
        if (L.label === B)
          return !0;
      return !1;
    }
    const V = rt(function(B) {
      const L = B.target.value;
      I(L) || (be(L) ? (s ? C() : (Ae(i) && (i.current = t.value, i.pages = u, i.options = ne(c.value)), be(w.value) && (w.value = "")), n.value = String(L), c.value = [], t.value = 1, m = !0, A()) : s ? (C(), A()) : (w.value = "", n.value = "", i.current ? (t.value = i.current, u = i.pages, c.value = ne(i.options), i = {}) : A()));
    }, 600);
    function _() {
      s && C(), t.value < u ? (++t.value, Oe(function() {
        A();
      })) : Yl.warning({
        background: !0,
        content: S("r.noMore")
      });
    }
    function A() {
      return new Promise((B, L) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !be(n.value)) {
            B(!1);
            return;
          }
          Re.get(e.url, b.value).then((p) => {
            var F;
            m = !1;
            let O = [];
            (F = p == null ? void 0 : p.data) != null && F.records ? (O = p.data.records, u = p.data.pages) : p != null && p.data && P(p.data) === "Array" ? (O = p.data, u = p.pages) : p != null && p.data && P(p.data) === "Object" && (O = [p.data], u = 1), typeof e.optionFilter == "function" && P(e.optionFilter) === "Function" && (O = e.optionFilter(O)), Ae(O) || (O = O.map((E, J) => {
              let Q = S("r.optionLabel") + J;
              if (Array.isArray(e.optionsLabelKey)) {
                let ue = [];
                for (let _e = 1, Ve = e.optionsLabelKey.length; _e < Ve; _e++)
                  ue.push(E[e.optionsLabelKey[_e]]);
                Q = `${E[e.optionsLabelKey[0]]}(${String(ue)})`;
              } else
                Kl(e.optionsLabelKey) && (Q = E[e.optionsLabelKey]);
              if (e.collectLabel) {
                let ue = ne(E);
                return delete ue.value, delete ue.label, {
                  value: E[e.optionsValKey],
                  label: Q,
                  ...ue
                };
              }
              return {
                value: E[e.optionsValKey],
                label: Q
              };
            })), c.value.push(...O);
            let y = {};
            c.value = c.value.filter((E) => y[E.value] ? !1 : (y[E.value] = !0, !0)), Oe(function() {
              o("update-option-finish");
            }), B(!0);
          }).catch(() => {
            Yl.error(S("r.getDataError")), L(S("r.getDataError"));
          });
        } else
          B(!1);
      });
    }
    return Ee(g), (B, L) => {
      const p = j("Option"), O = j("Select"), y = Ul("loadmore");
      return he((T(), Y(O, Xe({
        modelValue: h(w),
        "onUpdate:modelValue": L[0] || (L[0] = (F) => Fe(w) ? w.value = F : null),
        ref_key: "selectScrollSourceRef",
        ref: v,
        "transfer-class-name": d
      }, B.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: h(f),
        disabled: B.disabled
      }), {
        default: W(() => [
          (T(!0), D(me, null, ve(h(c), (F, E) => (T(), Y(p, {
            key: "op" + E,
            value: F.value,
            label: F.label,
            disabled: F.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [y, _, d]
      ]);
    };
  }
}), at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Tt,
  AsyncCascader: xt,
  BtTablePage: Ol,
  CheckboxGroupThreeClass: So,
  CheckboxGroupTwoClass: bo,
  CheckboxTree: Zn,
  EditorPro: It,
  FormGroup: Yn,
  FormModal: Xn,
  FormR: bl,
  FullPop: ka,
  HeaderBt: dt,
  Hello: Va,
  IconTxtBtn: _a,
  InputMap: Bt,
  MonthRange: Lt,
  Page404: Ta,
  SearchForm: Fl,
  SelectInput: Ct,
  SelectScrollMore: Ro,
  ShowHidePanel: Sl,
  ShowHidePanelB: ln,
  SideMenu: Ja,
  TableIconBtn: Xa,
  TableSearch: an,
  TableSetting: rn,
  TransferBox: fo,
  UploadGroup: St,
  WellCard: Ko
}, Symbol.toStringTag, { value: "Module" }));
function Ot(a) {
  const o = (...n) => $e.apply(this, n), e = o("r.closePreview"), t = o("r.fullImg");
  let u = "previewImg" + Math.floor(Math.random() * 1e7);
  Ne.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (n) => ke(
      "div",
      {
        class: "previewModal",
        id: u
      },
      [
        ke(
          "div",
          {
            class: "previewModalInner"
          },
          [
            ke("img", {
              src: a,
              alt: t
            }),
            ke(aa, {
              type: "md-close",
              size: 20,
              title: e,
              class: "previewModalDelete",
              onClick() {
                Ne.remove();
              }
            })
          ]
        )
      ]
    )
  }), Le(() => {
    var i, m, s, d, f, w;
    const n = (d = (s = (m = (i = document.getElementById(u)) == null ? void 0 : i.parentElement) == null ? void 0 : m.parentElement) == null ? void 0 : s.parentElement) == null ? void 0 : d.parentElement, c = (w = (f = document.getElementById(u)) == null ? void 0 : f.parentElement) == null ? void 0 : w.nextSibling;
    n && (n.style.height = "0"), n && (n.style.padding = "0"), c && (c.style.display = "none");
  }, 10);
}
function Mt(a, o, e, t) {
  const u = (...n) => $e.apply(this, n);
  Ie.call(this, {
    title: a || u("r.info.title"),
    text: o || u("r.info.text"),
    icon: e || "warning",
    onOk: t,
    buttons: [u("r.cancel")]
  });
}
(() => {
  if (window.wangeditorMenuInit)
    return;
  class a {
    constructor() {
      Ze(this, "title");
      Ze(this, "iconSvg");
      Ze(this, "tag");
      Ze(this, "alwaysEnable");
      this.title = $e("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
    exec(t) {
      const u = document.getElementById("editor-preview");
      let n = localStorage.getItem("editorPreviewW") || 300, c = localStorage.getItem("editorPreviewH") || 500;
      const i = t.getHtml();
      if (u) {
        let m = u.children[0].children[1].children[0], s = u.children[0].children[1];
        m.innerHTML = i, m.style.width = n + "px", s.style.height = c + "px", u.style.display = "block";
      } else {
        const m = document.body, s = document.createElement("div");
        s.setAttribute("id", "editor-preview"), s.setAttribute("class", "editor-preview-mask"), s.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${n}' min='200'><span>高</span><input type='number' value='${c}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let d = s.children[0].children[1], f = s.children[0].children[1].children[0], w = s.children[0].children[0].children[0].children[1];
        const b = 40, v = 70, g = (_) => {
          if (_ && _.type === "keyup") {
            let L = !1;
            if (_.key && (L = _.key !== "Enter"), L)
              return;
          }
          let A = _.target.value;
          if (A = Number(A), f.style && f.style.width === A + "px")
            return;
          const B = m.clientWidth;
          A < 250 ? (A = 250, _.target.value = 250) : A > B - b && (A = B - b, _.target.value = B - b), f.style.width = A + "px", localStorage.setItem("editorPreviewW", A);
        };
        w.addEventListener("blur", g), w.addEventListener("keyup", g);
        let C = s.children[0].children[0].children[0].children[3];
        const I = (_) => {
          if (_ && _.type === "keyup") {
            let L = !1;
            if (_.key && (L = _.key !== "Enter"), L)
              return;
          }
          let A = _.target.value;
          if (A = Number(A), d.style && d.style.height === A + "px")
            return;
          const B = m.clientHeight;
          A < 300 ? (A = 300, _.target.value = 300) : A > B - v && (A = B - v, _.target.value = B - v), d.style.height = A + "px", localStorage.setItem("editorPreviewH", A);
        };
        C.addEventListener("blur", I), C.addEventListener("keyup", I), s.children[0].children[0].children[1].addEventListener("click", () => {
          s.style.display = "none";
        }), f.innerHTML = i, f.style.width = n + "px", d.style.height = c + "px", m.append(s);
      }
    }
  }
  const o = {
    key: "previewX",
    factory() {
      return new a();
    }
  };
  ua.registerMenu(o), window.wangeditorMenuInit = !0;
})();
const nt = {
  $fetch: Re,
  fullScreenImgByDom: Ge,
  fullScreenImgPreview: Ot,
  $swal: Ie,
  $swalConfirm: Mt,
  messageBox: yl,
  setInterval: Vt,
  setTimeout: Le,
  ...wt
}, Po = function(a, o = {}) {
  Re.init(o.useStore || o.store, a), a.use(da), o.locale && pl.use(o.locale), o.i18n && pl.i18n(o.i18n), o.router && tn(o.router), o.amap && wn(o.amap), o.notRegistryGlobal || (Object.keys(at).forEach((e) => {
    a.component(e) || a.component(e, at[e]);
  }), Object.keys(nt).forEach((e) => {
    a.config.globalProperties[e] = nt[e];
  })), a.directive("has") || a.directive("has", (e, t) => {
    t.value && !gt(t.value) && (e.style.display = "none");
  }), a.directive("loadmore") || a.directive("loadmore", {
    mounted(e, t) {
      var n;
      let u = e;
      t.arg && (u = (n = document.getElementsByClassName(t.arg)) == null ? void 0 : n[0]), u && u.addEventListener("scroll", function() {
        u.scrollTop > 0 && u.scrollHeight - u.scrollTop <= u.clientHeight && t.value();
      });
    }
  }), a.config.globalProperties.searchFormLabelWidth = 84, a.config.globalProperties.formModalLabelWidth = 140, a.config.globalProperties.formGroupLabelWidth = 160, a.config.globalProperties.iconTxtBtnIconSize = 17;
}, $o = pl.use, Do = pl.i18n, ei = {
  locale: $o,
  i18n: Do,
  install: Po,
  ...wt,
  ...Ma,
  $fetch: Re,
  fullScreenImgByDom: Ge,
  fullScreenImgPreview: Ot,
  $swal: Ie,
  $swalConfirm: Mt,
  messageBox: yl,
  setInterval: Vt,
  setTimeout: Le
};
export {
  Re as $fetch,
  Ie as $swal,
  Mt as $swalConfirm,
  Tt as AlCascaderMC,
  xt as AsyncCascader,
  Ol as BtTablePage,
  So as CheckboxGroupThreeClass,
  bo as CheckboxGroupTwoClass,
  Zn as CheckboxTree,
  It as EditorPro,
  Yn as FormGroup,
  Xn as FormModal,
  bl as FormR,
  ka as FullPop,
  dt as HeaderBt,
  Va as Hello,
  _a as IconTxtBtn,
  Bt as InputMap,
  Lt as MonthRange,
  Ta as Page404,
  Fl as SearchForm,
  Ct as SelectInput,
  Ro as SelectScrollMore,
  Sl as ShowHidePanel,
  ln as ShowHidePanelB,
  Ja as SideMenu,
  Xa as TableIconBtn,
  an as TableSearch,
  rn as TableSetting,
  fo as TransferBox,
  St as UploadGroup,
  Ko as WellCard,
  xl as clearObj,
  Ga as dataFilterOrToUrl,
  Ra as decimalDigitsLimit,
  ei as default,
  yt as downloadFileByFormSubmit,
  ft as downloadFileReaderFile,
  Ia as emptyInput,
  pt as fakeALinkClick,
  Pa as fileExport,
  We as findCollection,
  ml as findPath,
  Fa as formDataHeadConfig,
  Ge as fullScreenImgByDom,
  Ot as fullScreenImgPreview,
  $a as getColumnsKeys,
  sl as getFileSrc,
  Rl as getFileTypeByName,
  Bl as getFileTypeIconByName,
  mt as getStringWidth,
  gt as hasPermission,
  La as htmlDecode,
  Sa as htmlEncode,
  za as htmlPrint,
  Na as isEmptyValue,
  ul as isImgByFile,
  bt as isNaN,
  Da as isNumberValue,
  be as isValidValue,
  yl as messageBox,
  P as myTypeof,
  Ka as oneOf,
  Tl as removeEmptyValue,
  Vt as setInterval,
  Le as setTimeout,
  je as setValByOption,
  kt as siblingElems,
  Oa as stopBubbling,
  Ea as stringLength,
  Ua as toFormData,
  ct as toHump,
  ht as toLine,
  vt as tooltipManual,
  hl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
