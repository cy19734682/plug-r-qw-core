var Nt = Object.defineProperty;
var Et = (a, o, e) => o in a ? Nt(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e;
var Qe = (a, o, e) => (Et(a, typeof o != "symbol" ? o + "" : o, e), e);
import { getCurrentInstance as nl, defineComponent as re, resolveComponent as j, openBlock as T, createElementBlock as $, normalizeClass as xe, normalizeStyle as ee, createBlock as J, createCommentVNode as he, renderSlot as Te, ref as z, computed as K, withDirectives as me, unref as h, createElementVNode as F, toDisplayString as q, createVNode as E, withCtx as W, createTextVNode as ve, vShow as we, resolveDirective as Fl, h as ke, Fragment as pe, renderList as ye, onBeforeMount as Gt, watch as be, nextTick as Oe, isRef as Fe, onMounted as Ee, withModifiers as zt, mergeProps as Ze, onUnmounted as Ht, shallowRef as cl, triggerRef as Wt, onBeforeUnmount as jt, createSlots as Xe } from "vue";
import qt from "deepmerge";
import { isObject as Jt, isFunction as Yt, isPlainObject as Je, cloneDeep as ne, isEmpty as Ae, isBoolean as Xt, isNumber as Ye, debounce as it, isString as Ul, last as fl, isEqual as tl, first as Vl, find as _l, indexOf as ql, findIndex as st, remove as Zt } from "lodash-es";
import il from "sweetalert";
import { Tooltip as Qt, TableColumnConfig as ea, Radio as la, Input as ta, Message as Jl, Modal as Ne, Icon as aa, Button as wl } from "view-ui-plus";
import { useRouter as na, useRoute as oa } from "vue-router";
import Cl from "axios";
import ia from "ar-cascader";
import { Toolbar as sa, Editor as ra } from "@wangeditor/editor-for-vue";
import el from "moment";
import { Boot as ua } from "@wangeditor/editor";
const rt = {
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
}, da = /(%|){([0-9a-zA-Z_]+)}/g;
function ca() {
  function a(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function o(e, ...t) {
    let u;
    return t.length === 1 && typeof t[0] == "object" && (u = t[0]), (!u || !u.hasOwnProperty) && (u = {}), e === void 0 ? "" : e.replace(da, (n, c, i, m) => {
      let r;
      return e[m - 1] === "{" && e[m + n.length] === "}" ? i : (r = a(u, i) ? u[i] : null, r ?? "");
    });
  }
  return o;
}
const fa = ca();
let pl = rt;
const pa = {
  zh: rt
};
let Yl, Xl = {}, Se, ma = function(a, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(a, o);
  if (Se && Se.global)
    return Se.global.t(a, o);
  if (Se && Se.locale) {
    if (!Xl[Se.locale] || Yl != Se.locale) {
      Xl[Se.locale] = !0;
      let e = Se.getLocaleMessage(Se.locale) || {}, t = qt(pa[Se.locale], e, { clone: !0 });
      pl = t, Se.setLocaleMessage(Se.locale, t), Yl = Se.locale;
    }
    return Se.hlang(a, o);
  }
};
const $e = function(a, o) {
  let e = ma.apply(this, [a, o]);
  if (e != null)
    return e;
  const t = a.split(".");
  let u = pl;
  for (let n = 0, c = t.length; n < c; n++) {
    const i = t[n];
    if (e = u[i], n === c - 1)
      return fa(e, o);
    if (!e)
      return "";
    u = e;
  }
  return "";
}, ha = function(a) {
  pl = a || pl;
}, ya = function(a) {
  Se = a;
}, ml = {
  use: ha,
  t: $e,
  i18n: ya
};
function S(a, o) {
  var t, u, n;
  const e = (n = (u = (t = nl()) == null ? void 0 : t.appContext) == null ? void 0 : u.config) == null ? void 0 : n.globalProperties;
  return $e.apply(e, [a, o]);
}
const ut = /* @__PURE__ */ re({
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
      return T(), $("div", {
        class: xe({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: ee({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: t
      }, [
        e.icon ? (T(), J(c, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : he("", !0),
        Te(u.$slots, "default")
      ], 6);
    };
  }
}), va = { class: "headerTxtAM" }, ga = { class: "contentAM" }, ba = /* @__PURE__ */ re({
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
    function m(r) {
      u.value = !1, e("on-close", r === !0);
    }
    return o({
      open: i,
      close: m
    }), (r, d) => me((T(), $("div", {
      class: "fullScreenPopBoxAM",
      style: ee(h(c))
    }, [
      F("div", {
        class: "headerAM",
        style: ee({ color: t.headerColor, backgroundColor: t.headerBg, fontSize: h(n) })
      }, [
        F("span", va, q(r.title || h(S)("r.title")), 1),
        E(ut, {
          icon: "md-return-left",
          onClick: m
        }, {
          default: W(() => [
            ve(q(h(S)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      F("div", ga, [
        Te(r.$slots, "default")
      ])
    ], 4)), [
      [we, h(u)]
    ]);
  }
}), ka = { class: "msg" }, wa = /* @__PURE__ */ re({
  __name: "Hello",
  setup(a) {
    let o = z("Greetings from Ricky.");
    return (e, t) => (T(), $("span", ka, q(h(o)), 1));
  }
});
function vl() {
  const { appContext: a } = nl();
  return a.config.globalProperties;
}
const Va = /* @__PURE__ */ re({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => vl().iconTxtBtnIconSize },
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
      const i = j("Icon"), m = Fl("has");
      return me((T(), $("div", {
        class: xe(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: u,
        style: ee({ "font-size": h(t) })
      }, [
        E(i, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        ve(" " + q(e.name || h(S)("r.button")), 1)
      ], 6)), [
        [m, n.has]
      ]);
    };
  }
}), _a = { class: "c404K" }, Ca = /* @__PURE__ */ F("div", { class: "t404" }, "404", -1), Aa = { class: "ct404" }, Ba = { class: "p404" }, xa = /* @__PURE__ */ re({
  __name: "Page404",
  setup(a) {
    const e = nl().appContext.config.globalProperties.$router;
    function t() {
      e.go(-1);
    }
    return (u, n) => {
      const c = j("Button");
      return T(), $("div", _a, [
        Ca,
        F("div", Aa, "UH OH! " + q(h(S)("r.pageNotFound")), 1),
        F("div", Ba, q(h(S)("r.notFoundMsg")), 1),
        E(c, {
          class: "bt404",
          onClick: t
        }, {
          default: W(() => [
            ve(q(h(S)("r.back")), 1)
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
      let c = t("r.confirm"), i = t("r.cancel"), m = !1, r = "swalConfirmBt", d = "swalCancelBt";
      const f = /^HTML.*Element$/;
      a.type && (a.icon = a.type) && delete a.type, a.content && (a.text = a.content) && delete a.content, a.className = a.className || "swalBoxX";
      let V = "";
      a.text && f.test(P(a.text)) ? V = "content" : a.text && P(a.text) === "String" && (V = "text"), a.buttons && (typeof a.buttons == "object" && !Array.isArray(a.buttons) ? a.buttons.cancel && (a.buttons.cancel.text && (i = a.buttons.cancel.text) && (m = !0), a.buttons.cancel.className && (d = a.buttons.cancel.className), a.buttons.confirm.text && (c = a.buttons.confirm.text), a.buttons.confirm.className && (r = a.buttons.confirm.className)) : Array.isArray(a.buttons) && (a.buttons[0] && (i = a.buttons[0], m = !0), a.buttons[1] && (c = a.buttons[1]))), il({
        title: a.title,
        icon: a.icon,
        className: a.className,
        [V]: a.text,
        buttons: {
          confirm: {
            text: c,
            value: !0,
            visible: !0,
            className: r
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
      il({
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
      !a && il.close && il.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function dt(a) {
  return a.replace(/_(\w)/g, function(o, e) {
    return e.toUpperCase();
  });
}
function Ta(a) {
  let o = document.createElement("div");
  return o.textContent !== void 0 ? o.textContent = a : o.innerText = a, o.innerHTML;
}
function Sa(a) {
  let o = document.createElement("div");
  return o.innerHTML = a, o.innerText || o.textContent;
}
function ul(a) {
  return new Promise((o) => {
    let e = new FileReader();
    e.readAsDataURL(a), e.onloadend = () => {
      o(e.result);
    };
  });
}
function Kl(a) {
  return (a == null ? void 0 : a.split(".").pop().toLocaleLowerCase()) || "";
}
function dl(a) {
  return P(a) === "String" && a.indexOf("image") > -1;
}
function Al(a) {
  const o = Kl(a);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(o) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(o) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(o) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(o) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(o) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(o) > -1 && (e = "ios-videocam"), e;
}
function ct(a, o) {
  let e = document.createElement("a");
  e.href = o, e.download = a, ft(e);
}
function ft(a) {
  let o = document.createEvent("MouseEvents");
  o.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(o);
}
function hl({
  group: a,
  condition: o,
  pathKey: e,
  childKey: t = "children",
  path: u = []
}) {
  if (a && Jt(a)) {
    if (Yt(o)) {
      if (Je(a)) {
        let n = a, c = ne(u);
        if (o(n))
          return e && n[e] && c.push(n[e]), c;
        if (n[t] && !Ae(n[t])) {
          e && n[e] && c.push(n[e]);
          let i = hl({
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
            let i = hl({
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
function pt(a, o = 12) {
  if (P(a) === "String" && a.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = o + "px", e.style.fontFamily = "inherit", e.innerHTML = a, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const t = e.clientWidth;
    return document.body.removeChild(e), t;
  }
  return 0;
}
function La(a) {
  return a === "" ? null : a;
}
function Ia(a) {
  a = a || window.Event, a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
}
const Oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: ct,
  emptyInput: La,
  fakeALinkClick: ft,
  findPath: hl,
  getFileSrc: ul,
  getFileTypeByName: Kl,
  getFileTypeIconByName: Al,
  getStringWidth: pt,
  htmlDecode: Sa,
  htmlEncode: Ta,
  isImgByFile: dl,
  stopBubbling: Ia,
  toHump: dt
}, Symbol.toStringTag, { value: "Module" }));
function P(a) {
  return Object.prototype.toString.call(a).replace(/\[object |]/g, "");
}
function mt(a) {
  return a.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function yl(a) {
  let o = P(a);
  if (o === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = P(a[e]);
        t === "String" ? a[e] = a[e].trim() : (t === "Object" || t === "Array") && yl(a[e]);
      }
  } else if (o === "Array")
    for (let e = 0, t = a.length; e < t; e++) {
      let u = P(a[e]);
      u === "String" ? a[e] = a[e].trim() : (u === "Array" || u === "Object") && yl(a[e]);
    }
  return a;
}
function Bl(a, o = []) {
  if (P(a) === "Array")
    return a.forEach((e, t) => {
      switch (P(e)) {
        case "Array":
        case "Object":
          Bl(e);
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
              Bl(a[e]);
              break;
            default:
              a[e] = null;
          }
      }
    return a;
  } else
    return a;
}
const Ma = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Fa(a) {
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
          let r = n(m, i);
          if (r !== void 0)
            return [c.indexOf(m), ...r];
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
            let r = n(c[m], i);
            if (r !== void 0)
              return [m, ...r];
          }
        }
      }
    }
  };
  return t = n(a, o), e ? t || !1 : u === "notFoundC" ? !1 : u;
}
function Ua(a, o) {
  for (let e = 0, t = o.length; e < t; e++)
    if (a === o[e])
      return !0;
  return !1;
}
function Ka(a, o = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${o}})(\\d+$)`), t = a && String(a) || "";
  return e.test(t) ? Number(t.replace(e, "$1")) : a;
}
function ht(a, o = {}, e = "get") {
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
  if (t.setAttribute("action", n), Je(o)) {
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
function Ra(a, o = {}, e = "get") {
  if (o.hasOwnProperty("columns") && (o.columns === "" || o.columns === null || o.columns === void 0)) {
    Ie.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  ht(a, o, e);
}
function Pa(a, o, e = !1) {
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
function ge(a) {
  return a != null && a !== "";
}
function $a(a) {
  return /^-?\d+(.\d+)?$/.test(a);
}
function yt(a, o = !1, e = "") {
  return function(t, u) {
    var m, r;
    let n;
    if (Array.isArray(a)) {
      let d = [];
      for (let f of a)
        ge((m = u.row) == null ? void 0 : m[f]) && d.push(u.row[f]);
      n = d.join(e);
    } else
      typeof a == "function" ? n = a(u) : n = (r = u.row) == null ? void 0 : r[a];
    let c = pt(n), i = u.column._width;
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
    ) : ke("span", o && !ge(n) ? "--" : n);
  };
}
function Da(a) {
  if (Je(a)) {
    for (let o in a)
      if (a.hasOwnProperty(o) && ge(a[o]))
        return !1;
    return !0;
  } else if (Array.isArray(a)) {
    for (let o of a)
      if (ge(o))
        return !1;
    return !0;
  }
  return !ge(a);
}
function Na(a) {
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
function vt(a) {
  let o = sessionStorage.getItem("btnPermissions");
  return o ? o.split(",").indexOf(a) > -1 : !1;
}
function gt(a) {
  return P(a) === "Number" && String(a) === "NaN";
}
function Ea(a, o = !1, e = !1) {
  if (P(a) !== "Object")
    return a;
  let t = Object.assign(a, {}), u = "";
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let c = t[n];
      c === void 0 || c === "" || P(c) === "String" && c.trim() === "" || c === null || gt(c) ? e ? o ? u += n + "=&" : t[n] = "" : delete t[n] : o && (u += n + "=" + c + "&");
    }
  return o ? u.length > 0 ? u.substring(0, u.length - 1) : "" : t;
}
function xl(a) {
  let o = {};
  if (Array.isArray(a)) {
    o = [];
    for (let e of a)
      Array.isArray(e) || Je(e) ? o.push(xl(e)) : ge(e) && o.push(e);
  } else if (Je(a))
    for (let e in a)
      a.hasOwnProperty(e) && (Array.isArray(a[e]) || Je(a[e]) ? o[e] = xl(a[e]) : ge(a[e]) && (o[e] = a[e]));
  return o;
}
function Ga(a) {
  const o = window.open();
  if (o) {
    o.document.write(a);
    let e = setTimeout(() => {
      o.print(), window.clearTimeout(e), e = null;
    }, 10);
  }
}
function bt(a) {
  let o = [], e = a;
  for (; a.previousSibling && (a = a.previousSibling); )
    a.nodeType === 1 && o.push(a);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && o.push(e);
  return o;
}
const kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Bl,
  dataFilterOrToUrl: Ea,
  decimalDigitsLimit: Ka,
  downloadFileByFormSubmit: ht,
  fileExport: Ra,
  findCollection: We,
  formDataHeadConfig: Ma,
  getColumnsKeys: Pa,
  hasPermission: vt,
  htmlPrint: Ga,
  isEmptyValue: Da,
  isNaN: gt,
  isNumberValue: $a,
  isValidValue: ge,
  myTypeof: P,
  oneOf: Ua,
  removeEmptyValue: xl,
  setValByOption: je,
  siblingElems: bt,
  stringLength: Na,
  toFormData: Fa,
  toLine: mt,
  tooltipManual: yt,
  trimObj: yl
}, Symbol.toStringTag, { value: "Module" })), za = { class: "groupBoxRP" }, Ha = ["onClick"], Wa = /* @__PURE__ */ re({
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
      let m = i.parentNode, r = bt(m);
      for (let d of r) {
        d.classList.remove("open");
        const f = d.querySelectorAll(".open");
        for (let V of f)
          V.classList.remove("open");
      }
      m.classList.toggle("open");
    }
    return (n, c) => {
      const i = j("sideMenuGroup", !0);
      return T(), $("ul", za, [
        (T(!0), $(pe, null, ye(o.data, (m, r) => (T(), $("li", {
          class: xe({ dropItemRP: m.children }),
          key: m.path + r
        }, [
          F("div", {
            class: xe(["menuTxtR", t(m)]),
            onClick: (d) => u(d, m),
            style: ee({ paddingLeft: m.level * 20 + "px" })
          }, q(m.name || "-- no name --"), 15, Ha),
          m.children ? (T(), J(i, {
            key: 0,
            data: m.children,
            "path-name": o.pathName
          }, null, 8, ["data", "path-name"])) : he("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), ja = { class: "menuListR" }, qa = /* @__PURE__ */ re({
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
    }), be(
      () => t.path,
      (f) => {
        n.value = f, Oe(d);
      },
      { immediate: !0 }
    );
    function r() {
      u.value = !u.value, localStorage.setItem("menuDisplayR", JSON.stringify(u.value)), o("on-change", u.value);
    }
    function d() {
      let f = c.value.querySelectorAll(".dropItemRP");
      for (let V of f)
        V.querySelector(".active") && !V.classList.contains("open") && V.classList.add("open");
    }
    return (f, V) => {
      const b = j("Icon");
      return T(), $("div", {
        ref_key: "menuRef",
        ref: c,
        class: "menuBoxRP"
      }, [
        me(F("div", ja, [
          E(Wa, {
            data: e.data,
            pathName: h(n)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [we, h(u)]
        ]),
        E(b, {
          type: h(m),
          size: 25,
          class: xe([{ showIco: !h(u) }, "menuShowHideIco"]),
          title: h(i),
          onClick: r,
          color: h(u) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Ja = ["title"], Ya = /* @__PURE__ */ re({
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
      const c = j("Icon"), i = Fl("has");
      return me((T(), $("div", {
        class: xe(["tableBtnsG", { disabled: e.disabled }]),
        onClick: t,
        title: e.title || h(S)("r.button")
      }, [
        E(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Ja)), [
        [i, e.has]
      ]);
    };
  }
}), Xa = { class: "contentX" }, Za = { class: "arrowA" }, Tl = /* @__PURE__ */ re({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(a) {
    const o = a, e = z(!0), t = K(() => e ? "background:" + o.bg || "transparent" : "");
    return (u, n) => {
      const c = j("Icon");
      return T(), $("div", {
        style: ee(h(t))
      }, [
        me(F("div", Xa, [
          Te(u.$slots, "default")
        ], 512), [
          [we, h(e)]
        ]),
        F("div", Za, [
          F("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (i) => e.value = !h(e))
          }, [
            E(c, {
              type: h(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Qa = { class: "contentZ" }, en = /* @__PURE__ */ re({
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
    return (n, c) => (T(), $("div", {
      style: ee(h(u))
    }, [
      me(F("div", Qa, [
        Te(n.$slots, "default")
      ], 512), [
        [we, h(t)]
      ])
    ], 4));
  }
});
let Sl = [], Ll = [];
const ln = function(a) {
  a && a.beforeEach ? a.beforeEach(() => {
    Sl.map((o) => {
      window.clearTimeout(o);
    }), Ll.map((o) => {
      window.clearInterval(o);
    }), Sl.length = 0, Ll.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Le = function(a, o) {
  let e = window.setTimeout(a, o);
  return Sl.push(e), e;
}, wt = function(a, o) {
  let e = window.setInterval(a, o);
  return Ll.push(e), e;
}, tn = /* @__PURE__ */ re({
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
    return (m, r) => {
      const d = j("Input"), f = j("icon");
      return T(), $("div", {
        class: "tableSearchV",
        style: ee({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Te(m.$slots, "default", {}, () => [
          E(d, {
            modelValue: h(u),
            "onUpdate:modelValue": r[0] || (r[0] = (V) => Fe(u) ? u.value = V : null),
            style: ee({ width: e.width }),
            search: "",
            onOnSearch: i,
            class: "searchInputC",
            placeholder: e.placeholder || h(S)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        me(F("span", {
          class: "sbt",
          onClick: r[1] || (r[1] = (V) => n.value = !h(n)),
          style: ee({ color: e.btnColor })
        }, [
          E(f, {
            type: h(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ve(q(h(S)("r.adSearch")), 1)
        ], 4), [
          [we, e.showBtn]
        ])
      ], 4);
    };
  }
}), an = { class: "tabSetF" }, nn = { class: "topCheck" }, on = /* @__PURE__ */ re({
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
    var g, C, I, w, _;
    const e = a, t = z(!0), u = z(!1), n = z(!1), c = z([]), i = K(() => {
      let A = S("r.unknown");
      return e.modelValue.length > c.value.length && (c.value = ne(e.modelValue)), c.value.map((B) => {
        let L = { label: B && B.title || A };
        return B && B.disableShowSetting && (L.disabled = !0), L;
      });
    }), m = K(() => i.value.filter((A) => A.disabled)), r = K({
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
    }), d = (_ = (w = (I = (C = (g = nl()) == null ? void 0 : g.appContext) == null ? void 0 : C.config) == null ? void 0 : I.globalProperties) == null ? void 0 : w.$i18n) == null ? void 0 : _.locale;
    Ee(() => {
      let A = S("r.unknown"), B;
      d ? B = localStorage.getItem(e.sKey + "_" + d) : B = localStorage.getItem(e.sKey), B ? r.value = JSON.parse(decodeURI(B)) : e.defaultCheck && (r.value = e.modelValue.filter((L) => L.showSettingCheck).map((L) => L && L.title || A));
    });
    function f(A) {
      A.length === i.value.length ? (t.value = !1, u.value = !0) : A.length > m.value.length ? (t.value = !0, u.value = !1) : (t.value = !1, u.value = !1);
    }
    be(() => r.value, f, {
      immediate: !0,
      deep: !0
    });
    function V() {
      n.value || (n.value = !0);
    }
    function b() {
      d ? localStorage.setItem(e.sKey + "_" + d, encodeURI(JSON.stringify(r.value))) : localStorage.setItem(e.sKey, encodeURI(JSON.stringify(r.value))), n.value = !1;
    }
    function v() {
      t.value ? u.value = !1 : u.value = !u.value, t.value = !1, u.value ? r.value = i.value.map((A) => A.label) : r.value = m.value.map((A) => A.label);
    }
    return (A, B) => {
      const L = j("Icon"), p = j("Checkbox"), O = j("CheckboxGroup");
      return T(), $("div", an, [
        F("div", {
          class: "tabSetBt",
          onClick: V
        }, [
          E(L, {
            type: "md-settings",
            size: "17"
          }),
          F("span", null, q(h(S)("r.tabSetting")), 1)
        ]),
        me(F("div", {
          class: "tabSetCard",
          style: ee({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          F("div", nn, [
            E(p, {
              indeterminate: h(t),
              modelValue: h(u),
              "onUpdate:modelValue": B[0] || (B[0] = (y) => Fe(u) ? u.value = y : null),
              onClick: zt(v, ["prevent"])
            }, {
              default: W(() => [
                ve(q(h(S)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            F("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: b
            }, q(h(S)("r.confirm")), 1)
          ]),
          E(O, {
            modelValue: h(r),
            "onUpdate:modelValue": B[1] || (B[1] = (y) => Fe(r) ? r.value = y : null)
          }, {
            default: W(() => [
              (T(!0), $(pe, null, ye(h(i), (y, M) => (T(), J(p, {
                class: "setItem",
                label: y && y.label,
                key: "tabSet_" + e.sKey + M,
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
let He = 0, al = document.createElement("div");
al.setAttribute("class", "spinModal");
al.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(al);
};
function Zl(a) {
  a ? al.classList.add("show") : al.classList.remove("show");
}
function Vt(a) {
  let o = He;
  a ? He++ : He > 0 && He--, o !== He && (He === 0 ? Zl(!1) : o === 0 && Zl(!0));
}
const sn = window.location.origin;
let qe = null;
const Ql = (...a) => $e.apply(qe, a);
let Me = Cl.create({
  baseURL: sn,
  withCredentials: !0
  // 允许携带cookie
});
function rn() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Me.interceptors.request.use(
  (a) => a,
  (a) => Promise.reject(a)
);
function et() {
  var a, o;
  if (Me.store)
    if (typeof Me.store == "function") {
      const e = Me.store();
      e.logout && e.logout();
    } else
      (o = (a = Me.store) == null ? void 0 : a.dispatch) == null || o.call(a, "logout");
  else
    rn();
}
Me.interceptors.response.use(
  (a) => {
    var o, e;
    return qe && (((o = a == null ? void 0 : a.data) == null ? void 0 : o.code) === 403 || ((e = a == null ? void 0 : a.data) == null ? void 0 : e.code) === 409) && qe.messageBox({
      content: Ql("r.http." + a.data.code),
      onOk: et
    }), a;
  },
  (a) => {
    var o, e;
    return qe && (((o = a == null ? void 0 : a.response) == null ? void 0 : o.status) === 403 || ((e = a == null ? void 0 : a.response) == null ? void 0 : e.status) === 409) && qe.messageBox({
      content: Ql("r.http." + a.response.status),
      onOk: et
    }), console.warn("请求出错：", a), Promise.reject(a);
  }
);
function De(a, o, e, t) {
  t && t.spin && Vt(!1);
  let u = !0, n = a && a.data;
  if (n) {
    e = e || [];
    for (let c of e)
      n = n[c], u = u && n;
    return u ? n : (o && console.warn(o), !1);
  }
  return o && console.warn(o), !1;
}
function un(a, o, e, t, u, n, c) {
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
        let r = c ? "params" : "data";
        Me.delete(o, { [r]: e }).then((d) => {
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
function sl(a, o, e = {}, t, u, n, c) {
  return new Promise((i, m) => {
    var r;
    if (o) {
      n && n.spin && Vt(!0);
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
      if (((r = n == null ? void 0 : n.headers) == null ? void 0 : r["Content-Type"]) === "multipart/form-data")
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
      let V = a.toLowerCase();
      un(V, d, f, t, u, n, c).then((b) => {
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
    Me.store = a, qe = o.config.globalProperties;
  },
  post(a, o, e, t, u) {
    return new Promise((n, c) => {
      sl("post", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        c(i);
      });
    });
  },
  put(a, o, e, t, u) {
    return new Promise((n, c) => {
      sl("put", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        c(i);
      });
    });
  },
  get(a, o, e, t, u) {
    return new Promise((n, c) => {
      sl("get", a, o, e, t, u).then((i) => {
        n(i);
      }).catch((i) => {
        c(i);
      });
    });
  },
  delete(a, o, e, t, u, n = !0) {
    return new Promise((c, i) => {
      sl("delete", a, o, e, t, u, n).then((m) => {
        c(m);
      }).catch((m) => {
        i(m);
      });
    });
  },
  all: Cl.all,
  spread: Cl.spread,
  config: Me
}, dn = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, cn = { class: "topBtn" }, fn = { class: "fullHeight relativeBox" }, pn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, mn = { class: "pageContainer" }, hn = 300, Il = /* @__PURE__ */ re({
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
  setup(a, { expose: o, emit: e }) {
    const t = a, { globalProperties: u } = nl().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...ea });
    const c = u.pageSizes || [10, 20, 30, 40], i = z(t.data), m = z(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || t.pageSize
    ), r = z(1), d = z(0);
    let f = [], V, b, v = t.orderKey, g = t.orderDefault;
    const C = K(() => {
      for (let D of t.columns)
        if (D.fixed)
          return !0;
      return !1;
    }), I = K(() => t.selectionFixed || C.value), w = K(() => {
      let D = {
        ...t.searchData,
        current: r.value,
        size: m.value
      };
      return t.sortable === "custom" && (t.orderKeyFormat === "underline" ? D[g] = mt(v) : t.orderKeyFormat === "camelcase" && (D[g] = dt(v))), D;
    }), _ = K(() => {
      let D = t.columns.filter((R) => R.type !== "selection");
      if (t.selection || t.radio) {
        let R;
        t.radio ? R = {
          title: " ",
          width: 65,
          render: (fe, ce) => ke(la, {
            value: ce.row.btChecked
          })
        } : R = {
          type: "selection",
          width: 60
        }, t.selectionFixed && (R.fixed = t.selectionFixed), D.unshift(R);
      }
      return D.forEach((R) => {
        t.sortable === "custom" ? R.key && R.sortable !== !0 && R.sortable !== !1 && (R.sortable = "custom") : R.sortable = !1, R.align || (R.align = "center");
      }), t.tableEmptyTdHandle && D.forEach((R) => {
        R.key && R.render === void 0 && (R.tooltip ? R.render = yt(R.key, !0) : R.render = (fe, ce) => {
          let Ce = ce.row[R.key];
          return fe("span", Ce === "" || Ce === null || Ce === void 0 ? "--" : Ce);
        });
      }), D;
    }), A = K({
      get() {
        return i.value.map((D, R) => ({
          btKey: "bt-" + R,
          btChecked: !1,
          ...D
        }));
      },
      set(D) {
        i.value = D;
      }
    }), B = K(() => f.map((D) => D.id)), L = K(() => f.map((D) => D.btKey)), p = z();
    be(() => t.searchData, O, { deep: !0 });
    function O() {
      r.value = 1, Pe();
    }
    function y() {
      t.initData && Pe();
    }
    function M(D) {
      i.value.unshift(ne(D)), Le(() => {
        var R, fe;
        (fe = (R = p.value) == null ? void 0 : R.clickCurrentRow) == null || fe.call(R, 0);
      }, 100);
    }
    function G(D, R, fe) {
      let ce = null;
      if (Xt(R) && R ? ce = b : Ye(R) && (ce = R), ce !== null) {
        let Ce = i.value[ce];
        for (let le in D)
          D.hasOwnProperty(le) && (Ce[le] = D[le]);
        fe && Le(() => {
          var le, Ue;
          (Ue = (le = p.value) == null ? void 0 : le.clickCurrentRow) == null || Ue.call(le, ce);
        }, 10);
      }
    }
    function Y(D) {
      i.value.splice(D, 1), Le(() => {
        var R, fe;
        (fe = (R = p.value) == null ? void 0 : R.clickCurrentRow) == null || fe.call(R, 0);
      }, 100);
    }
    function Q(D, R) {
      var fe, ce;
      D.btChecked && t.radio || (t.selection || t.radio) && t.rowClickSelect && ((ce = (fe = p.value) == null ? void 0 : fe.toggleSelect) == null || ce.call(fe, R));
    }
    function ue(D, R) {
      V = R.btKey, b = Number(R.btKey.split("-")[1]), t.radio && (i.value[b].btChecked = !0);
    }
    function _e(D) {
      if (t.radio)
        for (let R of A.value)
          R.btKey !== V && (i.value[Number(R.btKey.split("-")[1])].btChecked = !1);
      f = D, e("on-selection-change", D);
    }
    function Ve() {
      return ne(f);
    }
    function H(D) {
      r.value = D, Pe();
    }
    function de(D) {
      m.value = D, localStorage.setItem("btPageSize", String(D)), r.value === 1 && Pe();
    }
    function ie({ key: D, order: R }) {
      g === "normal" ? (v = t.orderKey, g = t.orderDefault) : (v = D, g = R), r.value = 1, se();
    }
    function U() {
      var D, R;
      if (t.radio) {
        if (L.value.length > 0 && A.value.length > 0) {
          let fe = L.value[0].split("-")[1];
          A.value[fe].btChecked = !1;
        }
      } else
        (R = (D = p.value) == null ? void 0 : D.selectAll) == null || R.call(D, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), V = null, b = null;
    }
    function ae() {
      i.value = [], U(), r.value = 1, d.value = 0;
    }
    function se(D, R, fe) {
      return new Promise((ce) => {
        D && (g = D), R && (v = R), t.url ? Re.get(t.url, w.value, "", [], { spin: t.getDataLoading }).then((Ce) => {
          var Ue, ol;
          let le;
          fe || U(), typeof t.dataHandler == "function" ? le = t.dataHandler(Ce) : le = Ce, le.data ? (le.data.records || le.data.records === null ? i.value = le.data.records || [] : le.data.page ? (le.data.page.records || le.data.page.records === null) && (i.value = le.data.page.records || []) : le.data.data ? (le.data.data.records || le.data.data.records === null) && (i.value = le.data.data.records || []) : i.value = le.data, d.value = ((Ue = le.data.page) == null ? void 0 : Ue.total) || ((ol = le.data.data) == null ? void 0 : ol.total) || le.data.total || le.total || 0, d.value === 0 && r.value > 1 && i.value && i.value.length === 0 ? r.value = 1 : r.value > 1 && d.value <= (r.value - 1) * m.value && (r.value--, Oe(function() {
            se(D, R);
          })), e("on-data-change", le), ce(le)) : (console.warn("请求返回数据有误，无法使用"), ae(), e("on-data-change", le));
        }).catch((Ce) => {
          console.warn(Ce), U(), ae(), e("on-data-change", Ce);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Pe(D, R, fe) {
      t.radio && (D || t.rowClickNum !== -1) ? se(R, fe, D).then(() => {
        i.value.length > 0 && Le(() => {
          var ce, Ce, le, Ue;
          D ? (Ce = (ce = p.value) == null ? void 0 : ce.clickCurrentRow) == null || Ce.call(ce, b || 0) : (Ue = (le = p.value) == null ? void 0 : le.clickCurrentRow) == null || Ue.call(le, t.rowClickNum);
        }, 10);
      }) : se();
    }
    return Ee(y), o({
      selectedIds: B,
      addRow: M,
      setRowData: G,
      deleteRow: Y,
      getSelected: Ve,
      clearSelect: U,
      clearTableData: ae,
      getTableData: se,
      getDataAndClickRow: Pe
    }), (D, R) => {
      const fe = j("Table"), ce = j("Page");
      return T(), $("div", dn, [
        me(F("div", cn, [
          Te(D.$slots, "tableSetting"),
          Te(D.$slots, "topMsg"),
          Te(D.$slots, "topBtnGroup")
        ], 512), [
          [we, t.showTopRow]
        ]),
        F("div", {
          class: xe(["tableContainer fullHeight", { noTop: !t.showTopRow, noPage: t.noPage }])
        }, [
          F("div", fn, [
            F("div", pn, [
              E(fe, Ze({
                ref_key: "tableRef",
                ref: p
              }, D.$attrs, {
                height: h(I) && hn || null,
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
        ], 2),
        me(F("div", mn, [
          E(ce, {
            modelValue: h(r),
            "onUpdate:modelValue": R[0] || (R[0] = (Ce) => Fe(r) ? r.value = Ce : null),
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
}), _t = /* @__PURE__ */ re({
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
      set(r) {
        let d = {
          key: r,
          val: null
        };
        t.value && t.value !== r && (d.beforeKey = t.value), o("update:modelValue", d), o("on-change", d);
      }
    }), u = K({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(r) {
        o("update:modelValue", {
          key: t.value,
          val: r
        });
      }
    }), n = K(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = K(() => ({ width: e.itemWidth + "px" }));
    function i(r) {
      var d;
      ((d = r == null ? void 0 : r.target) == null ? void 0 : d.value) !== void 0 && m({
        key: t.value,
        val: r.target.value
      });
    }
    const m = it((r) => {
      o("on-change", r);
    }, 500);
    return (r, d) => {
      const f = j("Option"), V = j("Select"), b = j("Input");
      return T(), $("div", null, [
        E(V, {
          modelValue: h(t),
          "onUpdate:modelValue": d[0] || (d[0] = (v) => Fe(t) ? t.value = v : null),
          style: ee(h(n)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: W(() => [
            (T(!0), $(pe, null, ye(e.selectOption, (v, g) => (T(), J(f, {
              value: v.val,
              label: v.label,
              key: "selectInputOp" + v.value + g,
              style: ee({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        E(b, {
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
var yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vn(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Ct = { exports: {} };
(function(a, o) {
  (function(e, t) {
    a.exports = t();
  })(yn, function() {
    function e(f) {
      var V = [];
      return f.AMapUI && V.push(t(f.AMapUI)), f.Loca && V.push(u(f.Loca)), Promise.all(V);
    }
    function t(f) {
      return new Promise(function(V, b) {
        var v = [];
        if (f.plugins)
          for (var g = 0; g < f.plugins.length; g += 1)
            c.AMapUI.plugins.indexOf(f.plugins[g]) == -1 && v.push(f.plugins[g]);
        if (i.AMapUI === n.failed)
          b("前次请求 AMapUI 失败");
        else if (i.AMapUI === n.notload) {
          i.AMapUI = n.loading, c.AMapUI.version = f.version || c.AMapUI.version, g = c.AMapUI.version;
          var C = document.body || document.head, I = document.createElement("script");
          I.type = "text/javascript", I.src = "https://webapi.amap.com/ui/" + g + "/main.js", I.onerror = function(w) {
            i.AMapUI = n.failed, b("请求 AMapUI 失败");
          }, I.onload = function() {
            if (i.AMapUI = n.loaded, v.length)
              window.AMapUI.loadUI(v, function() {
                for (var w = 0, _ = v.length; w < _; w++) {
                  var A = v[w].split("/").slice(-1)[0];
                  window.AMapUI[A] = arguments[w];
                }
                for (V(); m.AMapUI.length; )
                  m.AMapUI.splice(0, 1)[0]();
              });
            else
              for (V(); m.AMapUI.length; )
                m.AMapUI.splice(0, 1)[0]();
          }, C.appendChild(I);
        } else
          i.AMapUI === n.loaded ? f.version && f.version !== c.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : v.length ? window.AMapUI.loadUI(v, function() {
            for (var w = 0, _ = v.length; w < _; w++) {
              var A = v[w].split("/").slice(-1)[0];
              window.AMapUI[A] = arguments[w];
            }
            V();
          }) : V() : f.version && f.version !== c.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : m.AMapUI.push(function(w) {
            w ? b(w) : v.length ? window.AMapUI.loadUI(v, function() {
              for (var _ = 0, A = v.length; _ < A; _++) {
                var B = v[_].split("/").slice(-1)[0];
                window.AMapUI[B] = arguments[_];
              }
              V();
            }) : V();
          });
      });
    }
    function u(f) {
      return new Promise(function(V, b) {
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
            I.type = "text/javascript", I.src = "https://webapi.amap.com/loca?v=" + v + "&key=" + g, I.onerror = function(w) {
              i.Loca = n.failed, b("请求 AMapUI 失败");
            }, I.onload = function() {
              for (i.Loca = n.loaded, V(); m.Loca.length; )
                m.Loca.splice(0, 1)[0]();
            }, C.appendChild(I);
          }
        } else
          i.Loca === n.loaded ? f.version && f.version !== c.Loca.version ? b("不允许多个版本 Loca 混用") : V() : f.version && f.version !== c.Loca.version ? b("不允许多个版本 Loca 混用") : m.Loca.push(function(w) {
            w ? b(w) : b();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var n;
    (function(f) {
      f.notload = "notload", f.loading = "loading", f.loaded = "loaded", f.failed = "failed";
    })(n || (n = {}));
    var c = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, i = { AMap: n.notload, AMapUI: n.notload, Loca: n.notload }, m = { AMap: [], AMapUI: [], Loca: [] }, r = [], d = function(f) {
      typeof f == "function" && (i.AMap === n.loaded ? f(window.AMap) : r.push(f));
    };
    return { load: function(f) {
      return new Promise(function(V, b) {
        if (i.AMap == n.failed)
          b("");
        else if (i.AMap == n.notload) {
          var v = f.key, g = f.version, C = f.plugins;
          v ? (window.AMap && location.host !== "lbs.amap.com" && b("禁止多种API加载方式混用"), c.key = v, c.AMap.version = g || c.AMap.version, c.AMap.plugins = C || c.AMap.plugins, i.AMap = n.loading, g = document.body || document.head, window.___onAPILoaded = function(w) {
            if (delete window.___onAPILoaded, w)
              i.AMap = n.failed, b(w);
            else
              for (i.AMap = n.loaded, e(f).then(function() {
                V(window.AMap);
              }).catch(b); r.length; )
                r.splice(0, 1)[0]();
          }, C = document.createElement("script"), C.type = "text/javascript", C.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + c.AMap.version + "&key=" + v + "&plugin=" + c.AMap.plugins.join(","), C.onerror = function(w) {
            i.AMap = n.failed, b(w);
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
                V(window.AMap);
              }).catch(b);
            }) : e(f).then(function() {
              V(window.AMap);
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
                V(window.AMap);
              }).catch(b);
            }) : e(f).then(function() {
              V(window.AMap);
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
})(Ct);
var gn = Ct.exports;
const rl = /* @__PURE__ */ vn(gn);
let Ol = { securityJsCode: "", key: "" };
function bn({ securityJsCode: a, key: o }) {
  Ol.securityJsCode = a, Ol.key = o;
}
function kn(a) {
  return Ol[a];
}
const At = /* @__PURE__ */ re({
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
    }), u = K(() => Ye(e.width) ? e.width + "px" : e.width), n = K(() => Ye(e.height) ? e.height + "px" : e.height ? e.height : Ye(e.width) ? e.width * 0.66 + "px" : "200px"), c = K(() => ({
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
    be(
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
    const m = "mapId" + Math.floor(Math.random() * 1e9), r = z(null), d = z(null);
    let f;
    function V() {
      d.value && d.value.clientHeight < 10 || !d.value ? Le(V, 300) : Le(C, 100);
    }
    let b, v, g;
    function C() {
      rl.load({
        key: kn("key"),
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
          const A = (O = (p = r.value) == null ? void 0 : p.$el) == null ? void 0 : O.children;
          A && A.length > 1 && new b.AutoComplete({
            input: A[1]
          }).on("select", (y) => {
            var M, G, Y;
            (M = y == null ? void 0 : y.poi) != null && M.name && ((G = y.poi.location) != null && G.lng && ((Y = y.poi.location) != null && Y.lat) ? (I({
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
      v.add(p), w(_, A), p.on("dragend", () => {
        let O = p.getPosition();
        t.value = {
          name: B || null,
          lng: O.lng,
          lat: O.lat
        }, w(_, A);
      }), p.on("click", (O) => {
        f && f.open(v, O.target.getPosition());
      }), v.setFitView();
    }
    function w(_, A) {
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
    return Ee(V), Ht(() => {
      v && (v.destroy(), rl == null || rl.reset(), v = null, g = null, f = null);
    }), (_, A) => (T(), $("div", {
      style: ee(h(c)),
      class: "containerIKJ"
    }, [
      E(h(ta), {
        ref_key: "mapInputRef",
        ref: r,
        modelValue: h(t).name,
        "onUpdate:modelValue": A[0] || (A[0] = (B) => h(t).name = B),
        class: xe({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || h(S)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      F("div", {
        style: ee(h(i)),
        ref_key: "mapRef",
        ref: d,
        id: m
      }, null, 4)
    ], 4));
  }
});
var nt;
const Bt = /* @__PURE__ */ re({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (nt = window == null ? void 0 : window.g) != null && nt.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
        let r = e.modelValue;
        return Array.isArray(r) ? ne(r) : Ye(r) ? hl({
          group: t.value,
          condition: (d) => d.value === r,
          pathKey: "value"
        }) : Ul(r) ? r.split(e.separator) : [];
      },
      set(r) {
        if (e.onlyLastVal)
          Ae(r) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", fl(r));
        else {
          if (tl(e.modelValue, r))
            return;
          o("update:modelValue", ne(r));
        }
      }
    });
    function n() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Re.get(e.url).then((r) => {
        var f;
        let d = null;
        (f = r == null ? void 0 : r.data) != null && f.records ? d = r.data.records : r != null && r.data ? d = r.data : r && (d = r), d ? (typeof e.optionFilter == "function" && P(e.optionFilter) === "Function" && (d = e.optionFilter(d)), t.value = c(d)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(r) {
      let d = [];
      for (let f of r) {
        let V = {
          value: f[e.optionVal],
          label: f[e.optionLabel]
        };
        f.children && !Ae(f.children) && (V.children = c(f.children)), d.push(V);
      }
      return d;
    }
    function i(r) {
      return e.onlyLastLabel ? fl(r) : r.join(e.separator);
    }
    function m(r, d) {
      let f = "";
      Ae(d) || (f = d.map((V) => V.label).join(e.separator)), o("on-label-change", f);
    }
    return Ee(n), (r, d) => {
      const f = j("Cascader");
      return T(), J(f, {
        data: h(t),
        modelValue: h(u),
        "onUpdate:modelValue": d[0] || (d[0] = (V) => Fe(u) ? u.value = V : null),
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
}), xt = /* @__PURE__ */ re({
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
        if (e.modelValue && (Ye(e.modelValue) || Ul(e.modelValue))) {
          let c = String(e.modelValue).trim();
          if (/^\d*$/.test(c)) {
            let m = c.substring(0, 2) + "0000", r, d = n(c);
            return d.length < 7 ? r = c.substring(0, 4) + "00" : r = c.substring(0, 6), /^8\d+$/.test(c) ? [m, d] : [m, r, d];
          }
          return c.indexOf(e.separator) !== -1 ? c.split(e.separator) : [c];
        } else
          return Array.isArray(e.modelValue) ? ne(e.modelValue) : (t.value && (t.value.select = []), []);
      },
      set(c) {
        if (Ae(c))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let i = fl(c), m = "", r = "";
          if (i && (m = i.code), m && m.length < 12) {
            let d = [...m];
            for (; d.length < 12; )
              d.push(0);
            m = d.join("");
          }
          if (Array.isArray(c) && (r = c.map((d) => d.name).join(e.separator)), m) {
            if (m === e.modelValue)
              return;
            o("update:modelValue", m);
          }
          r && o("on-name-change", r);
        }
      }
    });
    function n(c) {
      let i = [...c];
      for (; i[i.length - 1] === "0"; )
        i.pop();
      return i.join("");
    }
    return (c, i) => (T(), J(h(ia), Ze(c.$attrs, {
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
  const o = (...r) => $e.apply(this, r), e = o("r.closePreview"), t = o("r.fullImg");
  let u = Vl(document.getElementsByTagName("body")), n = document.createElement("div");
  n.setAttribute("class", "fullScreenImgByDom"), n.innerHTML = `<div class='previewInner'><img src='${a}' alt='${t}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (i = (c = n.querySelector(".ivu-icon-md-close")) == null ? void 0 : c.addEventListener) == null || i.call(c, "click", function() {
    var d;
    let r = Vl(document.getElementsByTagName("body"));
    (d = r == null ? void 0 : r.removeChild) == null || d.call(r, n);
  }), (m = u == null ? void 0 : u.appendChild) == null || m.call(u, n);
}
const wn = { class: "previewBoxM" }, Vn = { class: "imgLoading" }, _n = /* @__PURE__ */ F("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Cn = [
  _n
], An = ["src", "alt"], Bn = { class: "deleteModal" }, xn = { class: "previewBoxM" }, Tn = {
  key: 0,
  class: "previewImg"
}, Sn = ["src", "alt"], Ln = { class: "deleteModal" }, In = { class: "customFileListM" }, On = {
  key: 0,
  class: "customFileListItem"
}, Mn = ["onClick", "title"], Fn = { class: "btBoxJ" }, Un = { class: "customFileListM" }, Kn = {
  key: 0,
  class: "customFileListItem"
}, Rn = { class: "listLoading" }, Pn = /* @__PURE__ */ F("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), $n = [
  Pn
], Dn = ["onClick", "title"], Nn = { class: "btBoxJ" };
var ot;
const Tt = /* @__PURE__ */ re({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (ot = window == null ? void 0 : window.g) != null && ot.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const e = a, t = cl([]), u = cl([]), n = K(() => !e.manualUpload && e.showImg && r.value ? "img" : e.manualUpload && e.showImg && r.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "list" : ""), c = K(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), i = K({
      get() {
        return e.manualUpload ? m.value : m.value.map((y) => ({ id: y }));
      },
      set(y) {
        e.manualUpload ? m.value = y || [] : m.value = (y == null ? void 0 : y.map((M) => M.id)) || [];
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
          let M = Vl(y);
          o("update:modelValue", M ?? null), o("on-change", M ?? null);
        } else
          o("update:modelValue", ne(y)), o("on-change", ne(y));
      }
    }), r = K(() => {
      let y;
      if (e.manualUpload ? y = i.value : y = u.value, !y)
        return !1;
      for (let M of y) {
        let G;
        if (e.manualUpload ? G = M == null ? void 0 : M.type : G = M == null ? void 0 : M.mimeType, !G || G && !(dl(G) || G === "loading"))
          return !1;
      }
      return !0;
    });
    be(
      () => i.value,
      async (y) => {
        if (n.value === "localImg")
          y != null && y.length ? t.value = await f(y) : t.value = [];
        else if (y != null && y.length && n.value !== "localList") {
          let M = ne(y);
          const G = ne(u.value);
          for (let Y of M)
            if ((Y == null ? void 0 : Y.name) === void 0)
              if (Y.id) {
                const Q = _l(G, (ue) => ue.id === Y.id);
                Q ? (Y.name = Q.name, Y.mimeType = Q.mimeType) : (Y.mimeType = "loading", Re.get(e.url + "/" + Y.id).then((ue) => {
                  var _e, Ve, H, de, ie, U;
                  Y.name = ((H = (Ve = (_e = ue == null ? void 0 : ue.data) == null ? void 0 : _e.returnValue) == null ? void 0 : Ve[0]) == null ? void 0 : H.name) || S("r.file") + ql(y, Y), Y.mimeType = ((U = (ie = (de = ue == null ? void 0 : ue.data) == null ? void 0 : de.returnValue) == null ? void 0 : ie[0]) == null ? void 0 : U.mimeType) || "unknown", Wt(u);
                }).catch(() => {
                  Y.name = S("r.file") + ql(M, Y);
                }));
              } else
                Y.name = S("r.unknown");
          u.value = M;
        } else
          u.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function d(y) {
      return (y == null ? void 0 : y.name) || (y == null ? void 0 : y.split) && fl(y.split("/")) || y;
    }
    async function f(y) {
      let M = [];
      for (let G of y) {
        let Y = await ul(G);
        M.push(Y);
      }
      return M;
    }
    function V(y) {
      if (!e.disabled) {
        let M = i.value;
        M == null || M.splice(y, 1), i.value = M;
      }
    }
    function b(y) {
      y != null && y.id && window.open(e.url + "/" + y.id + "/download");
    }
    function v(y) {
      return e.manualUpload ? (y == null ? void 0 : y.type) && dl(y.type) : (y == null ? void 0 : y.id) && y.mimeType && dl(y.mimeType);
    }
    function g(y) {
      if (e.manualUpload) {
        if (!y)
          return;
        ul(y).then((M) => {
          Ge(M);
        });
      } else
        y != null && y.id && Ge(e.url + "/" + y.id + "/download?preview=true");
    }
    function C(y) {
      P(y) === "String" && y.indexOf("http") > -1 ? window.open(y) : P(y) === "File" && ul(y).then((M) => {
        ct(y.name, M);
      });
    }
    function I(y) {
      var M, G;
      if (e.manualUpload) {
        if (y) {
          let Y = Kl(y.name);
          if ((M = e.format) != null && M.length && e.format.indexOf(Y) < 0)
            return Ie(
              S("r.wrongFileType"),
              S("r.supportType") + (((G = e.format) == null ? void 0 : G.length) && String(e.format) || S("r.none")),
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
    function w(y) {
      console.warn(y), Ie(S("r.uploadError"), "", "error");
    }
    function _(y, M, G) {
      var Y, Q, ue, _e, Ve, H;
      if ((y == null ? void 0 : y.code) === 0) {
        let de = i.value;
        M.id = (Q = (Y = y.data) == null ? void 0 : Y[0]) == null ? void 0 : Q.id, M.name = (_e = (ue = y.data) == null ? void 0 : ue[0]) == null ? void 0 : _e.name, M.mimeType = (H = (Ve = y.data) == null ? void 0 : Ve[0]) == null ? void 0 : H.mimeType, de == null || de.push(M), i.value = de;
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
      let M = y == null ? void 0 : y.id, G = y == null ? void 0 : y.mimeType;
      M && (P(G) === "String" && G.indexOf("image") > -1 ? Ge(e.url + "/" + M + "/download?preview=true") : window.open(e.url + "/" + M + "/download?preview=true"));
    }
    function p(y) {
      var G, Y, Q;
      let M = (Q = (Y = (G = y == null ? void 0 : y.response) == null ? void 0 : G.data) == null ? void 0 : Y[0]) == null ? void 0 : Q.id;
      O(null, M);
    }
    function O(y, M) {
      if (!(!M && M !== 0) && !e.disabled && m.value.indexOf(M) !== -1) {
        const G = ne(m.value);
        let Y = i.value;
        Y == null || Y.splice(G.indexOf(M), 1), i.value = Y;
      }
    }
    return (y, M) => {
      var ue, _e, Ve, H, de, ie;
      const G = j("Button"), Y = j("Upload"), Q = j("Icon");
      return T(), $("div", null, [
        E(Y, {
          name: "files",
          action: h(c),
          "before-upload": I,
          "on-error": w,
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
              E(G, {
                icon: "ios-cloud-upload-outline",
                class: xe({
                  disabledR: e.length && ((U = h(i)) == null ? void 0 : U.length) && ((ae = h(i)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
                })
              }, {
                default: W(() => [
                  ve(q(h(S)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        me(F("div", wn, [
          (T(!0), $(pe, null, ye(h(u), (U) => (T(), $(pe, {
            key: U == null ? void 0 : U.id
          }, [
            !e.manualUpload && (U == null ? void 0 : U.id) !== null ? (T(), $("div", {
              key: 0,
              class: xe(["previewImg", { previewLoading: U.mimeType === "loading" }])
            }, [
              me(F("div", Vn, Cn, 512), [
                [we, U.mimeType === "loading"]
              ]),
              me(F("img", {
                src: y.url + "/" + U.id + "/download?preview=true",
                alt: U.name
              }, null, 8, An), [
                [we, U.mimeType !== "loading"]
              ]),
              me(F("div", Bn, [
                E(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: h(S)("r.fView"),
                  onClick: (ae) => h(Ge)(e.url + "/" + U.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                E(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ae) => O(ae, U.id),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [we, U.mimeType !== "loading"]
              ])
            ], 2)) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [we, h(n) === "img" && ((Ve = h(u)) == null ? void 0 : Ve.length)]
        ]),
        me(F("div", xn, [
          (T(!0), $(pe, null, ye(h(t), (U, ae) => (T(), $(pe, {
            key: "manualImg" + ae
          }, [
            e.manualUpload && U !== null ? (T(), $("div", Tn, [
              F("img", {
                src: U,
                alt: "manualImg" + ae
              }, null, 8, Sn),
              F("div", Ln, [
                E(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (se) => h(Ge)(U),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"]),
                E(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (se) => V(ae),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [we, h(n) === "localImg" && ((H = h(t)) == null ? void 0 : H.length)]
        ]),
        me(F("div", In, [
          (T(!0), $(pe, null, ye(h(i), (U, ae) => (T(), $(pe, {
            key: "manualItem" + ae
          }, [
            e.manualUpload && U !== null ? (T(), $("p", On, [
              U.name ? (T(), J(Q, {
                key: 0,
                type: h(Al)(U.name)
              }, null, 8, ["type"])) : he("", !0),
              F("span", {
                class: xe(["upNameT", { previewName: v(U) }]),
                onClick: (se) => C(U),
                title: h(S)("r.download")
              }, q(d(U)), 11, Mn),
              F("span", Fn, [
                v(U) ? (T(), J(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (se) => g(U),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : he("", !0),
                E(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (se) => V(ae),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [we, h(n) === "localList" && ((de = h(i)) == null ? void 0 : de.length)]
        ]),
        me(F("div", Un, [
          (T(!0), $(pe, null, ye(h(u), (U, ae) => (T(), $(pe, {
            key: "defaultItem" + ae
          }, [
            !e.manualUpload && U !== null ? (T(), $("div", Kn, [
              me(F("div", Rn, $n, 512), [
                [we, U.mimeType === "loading"]
              ]),
              me(E(Q, {
                type: h(Al)(U.name)
              }, null, 8, ["type"]), [
                [we, U.mimeType !== "loading"]
              ]),
              me(F("span", {
                class: xe(["upNameT", { previewName: v(U) }]),
                onClick: (se) => b(U),
                title: h(S)("r.download")
              }, q(U.name || h(S)("r.file") + (ae + 1)), 11, Dn), [
                [we, U.mimeType !== "loading"]
              ]),
              me(F("span", Nn, [
                v(U) ? (T(), J(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (se) => g(U),
                  title: h(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : he("", !0),
                E(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (se) => V(ae),
                  title: h(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [we, U.mimeType !== "loading"]
              ])
            ])) : he("", !0)
          ], 64))), 128))
        ], 512), [
          [we, h(n) === "list" && ((ie = h(u)) == null ? void 0 : ie.length)]
        ])
      ]);
    };
  }
}), En = /* @__PURE__ */ F("div", { class: "bRoot" }, null, -1), St = /* @__PURE__ */ re({
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
    ), r = z();
    Ee(() => {
      r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        n.value = !0;
      }), r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        n.value = !1;
      }), r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (g) => {
        !e.disabled && (c.value || i.value) && (g.stopPropagation(), b());
      });
    });
    function d() {
      e.disabled || (t.value = !0);
    }
    function f(g) {
      c.value = g, t.value = !1, u.value = !0;
    }
    function V(g) {
      i.value = g, u.value = !1;
    }
    function b() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function v() {
      t.value = !1, u.value = !1, c.value && i.value === null && (c.value = null);
    }
    return (g, C) => {
      const I = j("DatePicker"), w = j("Icon"), _ = j("Input");
      return T(), $("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: r
      }, [
        E(I, {
          open: h(u),
          modelValue: h(i),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: V,
          onOnClickoutside: v
        }, {
          default: W(() => [
            En
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        E(I, {
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
            F("div", { onClick: d }, [
              E(_, {
                class: "aRoot",
                modelValue: h(m),
                "onUpdate:modelValue": C[0] || (C[0] = (A) => Fe(m) ? m.value = A : null),
                readonly: "",
                placeholder: e.placeholder || h(S)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: W(() => [
                  E(w, {
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
}), Gn = { class: "editor-pro-root" }, Lt = /* @__PURE__ */ re({
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
    const e = a, t = cl(), u = K({
      get() {
        return e.modelValue;
      },
      set(r) {
        o("update:modelValue", r), o("on-change", r);
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
              async customUpload(r, d) {
                let f = new FormData();
                f.append("files", r);
                const V = r.name, b = e.imgUploadUrl ?? "/node-serve/file";
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
                        d(C, V, C);
                      }
                    else {
                      const g = b + "/" + v.data.id + "/download";
                      d(g, V, g);
                    }
                }).catch(() => {
                  Ie(S("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(r, d) {
                let f = new FormData();
                f.append("files", r);
                const V = e.videoUploadUrl ?? "/node-serve/file";
                Re.post(V, f, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let v of b.data) {
                        const g = V + "/" + v.id + "/download";
                        d(g);
                      }
                    else {
                      const v = V + "/" + b.data.id + "/download";
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
    function m(r) {
      t.value = r;
    }
    return be(
      () => e.disabled,
      (r) => {
        r ? t.value.disable() : t.value.enable();
      }
    ), jt(() => {
      t.value && t.value.destroy();
    }), (r, d) => (T(), $("div", Gn, [
      me(E(h(sa), {
        class: "editor-pro-toolbar",
        editor: h(t),
        defaultConfig: h(n),
        mode: r.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [we, !r.disabled]
      ]),
      E(h(ra), {
        class: "editor-pro-editor",
        modelValue: h(u),
        "onUpdate:modelValue": d[0] || (d[0] = (f) => Fe(u) ? u.value = f : null),
        defaultConfig: h(c),
        mode: r.mode,
        onOnCreated: m,
        style: ee(h(i))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), zn = {
  key: 19,
  class: "formInfoTxtXN"
}, Hn = {
  key: 20,
  class: "formTitleTxtXN"
}, lt = /* @__PURE__ */ re({
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
    function t(r) {
      return {
        withInfo: !!r.info,
        withTitle: !!r.title,
        inlineFormItemXN: e.inline,
        noLabel: r.type === "selectInput",
        [r.class]: r.class,
        slotInput: r.slotPosition
      };
    }
    function u(r, d) {
      o("item-change", {
        e: r,
        root: d
      });
    }
    function n(r, d) {
      o("re-validate", {
        e: r,
        root: d
      });
    }
    function c(r) {
      o("select-input-change", r);
    }
    function i(r, d) {
      o("al-name-change", {
        name: r,
        root: d
      });
    }
    function m(r, d) {
      o("async-label-change", {
        label: r,
        root: d
      });
    }
    return (r, d) => {
      const f = j("InputNumber"), V = j("Input"), b = j("Option"), v = j("Select"), g = j("Radio"), C = j("Icon"), I = j("RadioGroup"), w = j("Checkbox"), _ = j("CheckboxGroup"), A = j("DatePicker"), B = j("TimePicker"), L = j("FormItem");
      return T(), J(L, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: xe(["relativeBox", t(e.item)])
      }, {
        default: W(() => [
          e.item.type === "txt" ? (T(), $("div", {
            key: 0,
            style: ee([e.itemStyle, { display: "inline-block" }]),
            class: xe({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, q(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (T(), J(f, {
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
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (T(), J(V, {
            key: 2,
            style: ee(r.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[2] || (d[2] = (p) => e.tempKeys[e.item.tempKey] = p),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: d[3] || (d[3] = (p) => u(p, e.item)),
            clearable: e.item.clearable !== !1
          }, Xe({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: W(() => [
                Te(r.$slots, e.item.slotName)
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: W(() => [
                F("span", null, q(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: W(() => [
                F("span", null, q(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (T(), J(v, {
            key: 3,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[4] || (d[4] = (p) => r.tempKeys[e.item.tempKey] = p),
            style: ee(r.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || h(S)("r.pSelect"),
            onOnChange: d[5] || (d[5] = (p) => u(p, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: W(() => [
              (T(!0), $(pe, null, ye(e.item.options, (p, O) => (T(), J(b, {
                value: p.val,
                label: p.label || p.val,
                key: "option-" + e.item.key + O,
                disabled: !!p.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (T(), J(_t, {
            key: 4,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[6] || (d[6] = (p) => r.tempKeys[e.item.tempKey] = p),
            "label-width": r.labelWidth,
            "item-width": r.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (T(), J(xt, {
            key: 5,
            style: ee(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[7] || (d[7] = (p) => e.valGroup[e.item.key] = p),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || h(S)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: d[8] || (d[8] = (p) => i(p, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (T(), J(Bt, {
            key: 6,
            style: ee(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[9] || (d[9] = (p) => e.valGroup[e.item.key] = p),
            url: e.item.url || r.mgrUrl + "/web/v1/umc/orgs",
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
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (T(), J(g, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[11] || (d[11] = (p) => e.valGroup[e.item.key] = p),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: d[12] || (d[12] = (p) => u(p, e.item))
          }, {
            default: W(() => [
              ve(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (T(), J(I, {
            key: 8,
            style: ee(r.itemStyle),
            onOnChange: d[13] || (d[13] = (p) => n(p, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[14] || (d[14] = (p) => r.tempKeys[e.item.tempKey] = p)
          }, {
            default: W(() => [
              (T(!0), $(pe, null, ye(e.item.options, (p) => (T(), J(g, {
                key: "radioItem" + p.val,
                label: p.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || p.disabled
              }, {
                default: W(() => [
                  p.icon && !e.item.buttonType ? (T(), J(C, {
                    key: 0,
                    type: p.icon
                  }, null, 8, ["type"])) : he("", !0),
                  F("span", null, q(p.label || p.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (T(), J(w, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[15] || (d[15] = (p) => e.valGroup[e.item.key] = p),
            disabled: !!e.item.disabled,
            onOnChange: d[16] || (d[16] = (p) => u(p, e.item))
          }, {
            default: W(() => [
              ve(q(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (T(), J(_, {
            key: 10,
            style: ee(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[17] || (d[17] = (p) => r.tempKeys[e.item.tempKey] = p),
            onOnChange: d[18] || (d[18] = (p) => n(p, e.item))
          }, {
            default: W(() => [
              (T(!0), $(pe, null, ye(e.item.options, (p) => (T(), J(w, {
                key: "checkItem" + p.val,
                label: p.val,
                disabled: !!e.item.disabled || e.disabled || p.disabled
              }, {
                default: W(() => [
                  p.icon ? (T(), J(C, {
                    key: 0,
                    type: p.icon
                  }, null, 8, ["type"])) : he("", !0),
                  F("span", null, q(p.label || p.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (T(), J(V, {
            key: 11,
            type: "textarea",
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[19] || (d[19] = (p) => r.tempKeys[e.item.tempKey] = p),
            autosize: e.item.autosize || { minRows: 2 },
            style: ee(r.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: d[20] || (d[20] = (p) => u(p, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (T(), J(Tt, {
            key: 12,
            style: ee(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[21] || (d[21] = (p) => e.valGroup[e.item.key] = p),
            url: e.item.url || r.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: d[22] || (d[22] = (p) => n(p, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (T(), J(A, {
            key: 13,
            style: ee(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[23] || (d[23] = (p) => r.tempKeys[e.item.tempKey] = p),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || h(S)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: d[24] || (d[24] = (p) => u(p, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (T(), J(B, {
            key: 14,
            style: ee(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[25] || (d[25] = (p) => r.tempKeys[e.item.tempKey] = p),
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
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (T(), J(St, {
            key: 15,
            style: ee(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[27] || (d[27] = (p) => r.tempKeys[e.item.tempKey] = p),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || h(S)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: d[28] || (d[28] = (p) => u(p, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (T(), J(Lt, {
            key: 16,
            class: "inlineBlock",
            style: ee(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[29] || (d[29] = (p) => e.valGroup[e.item.key] = p),
            placeholder: e.item.placeholder || h(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: d[30] || (d[30] = (p) => u(p, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (T(), J(At, {
            key: 17,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[31] || (d[31] = (p) => r.tempKeys[e.item.tempKey] = p),
            style: ee(r.itemStyle),
            placeholder: e.item.placeholder || h(S)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: d[32] || (d[32] = (p) => u(p, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (T(), $("div", {
            key: 18,
            class: "inlineBlock",
            style: ee(r.itemStyle)
          }, [
            Te(r.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : he("", !0),
          e.item.info ? (T(), $("div", zn, q(e.item.info), 1)) : he("", !0),
          e.item.title ? (T(), $("div", Hn, q(e.item.title), 1)) : he("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Wn = /* @__PURE__ */ F("input", { type: "text" }, null, -1), jn = { class: "inlineBlock" }, gl = /* @__PURE__ */ re({
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
    var Wl, jl;
    const t = a, u = z(null), n = z({}), c = z([]), i = z({});
    let m = [];
    const r = ((Wl = window == null ? void 0 : window.g) == null ? void 0 : Wl.mgrURL) ?? "";
    let d = [], f = [];
    const V = z(!1), b = z(Math.random() * 1e8 + 1e3), v = (jl = window == null ? void 0 : window.g) != null && jl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let g = !1;
    const C = K(() => Array.isArray(t.formData.length ? t.formData[0] : !1)), I = K(
      () => t.inline ? {
        width: t.itemWidth + t.labelWidth + "px"
      } : {}
    ), w = K(
      () => t.inline ? {
        width: "100%"
      } : { width: t.contentWidth }
    ), _ = K(() => {
      let s = ne(t.formRules);
      for (let l in s)
        if (s.hasOwnProperty(l))
          if (Array.isArray(s[l]))
            for (let x of s[l])
              x.message || x.validator || (x.message = S("r.required"));
          else
            P(s[l]) === "Object" && (s[l].message || s[l].validator || (s[l].message = S("r.required")));
      return s;
    }), A = K(() => {
      let s = [];
      if (C.value)
        for (let l of c.value)
          p(l, s);
      else
        p(c.value, s);
      return s.concat(d, f);
    }), B = K(() => {
      let s = [];
      if (C.value)
        for (let l of c.value)
          O(l, s);
      else
        O(c.value, s);
      return s;
    });
    function L(s) {
      return s.filter((l) => l.slotName);
    }
    function p(s, l) {
      for (let x of s)
        if (x.showing === !0 && x.key && x.type !== "selectInput" && (l.push(x.key), x.key2 && l.push(x.key2), x.collectLabel)) {
          if (!Array.isArray(x.collectLabel) && x.collectLabel.key)
            l.push(x.collectLabel.key);
          else if (Array.isArray(x.collectLabel))
            for (let k of x.collectLabel)
              k.key && l.push(k.key);
        }
    }
    function O(s, l) {
      for (let x of s)
        x.showing === !0 && x.key && x.type !== "selectInput" && l.push(x.key);
    }
    function y() {
      return new Promise((s) => {
        Y(), G().then(() => {
          e("on-reset"), s(!0);
        });
      });
    }
    function M() {
      return new Promise((s) => {
        for (let l of m)
          l();
        m = [], i.value = {}, R(), ae(), G().then(() => {
          e("on-re-render"), s(!0);
        });
      });
    }
    function G() {
      return new Promise((s) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), Oe(function() {
          s(!0);
        });
      });
    }
    function Y() {
      let s = _e();
      for (let l in n.value)
        if (n.value.hasOwnProperty(l))
          if (ge(s[l]))
            n.value[l] = s[l];
          else if (Array.isArray(n.value[l]))
            n.value[l] = [];
          else if (P(n.value[l]) === "Boolean")
            n.value[l] = !1;
          else {
            const x = We(t.formData, (k) => k.key === l);
            x && (x.type === "editor" || x.type === "editorPro") ? n.value[l] = "" : n.value[l] = null;
          }
      Q(s);
    }
    function Q(s) {
      for (let l in i.value)
        i.value.hasOwnProperty(l) && (ge(s[l]) ? i.value[l] = s[l] : Array.isArray(i.value[l]) ? i.value[l] = [] : P(i.value[l]) === "Object" && i.value[l].hasOwnProperty("key") && i.value[l].hasOwnProperty("val") ? i.value[l].val = null : i.value[l] = null);
    }
    function ue(s) {
      let l = _e();
      ge(l[s]) ? i.value[s] = l[s] : Array.isArray(i.value[s]) ? i.value[s] = [] : i.value[s] = null;
    }
    function _e() {
      let s = {};
      if (C.value)
        for (let l of c.value)
          Ve(l, s);
      else
        Ve(c.value, s);
      return s;
    }
    function Ve(s, l) {
      for (let x of s)
        x.tempKey && ge(x.defaultVal) && U(x, l), x.key && ge(x.defaultVal) && (l[x.key] = x.defaultVal), x.key2 && ge(x.defaultVal2) && (l[x.key2] = x.defaultVal2);
    }
    function H(s) {
      if (s.show) {
        if (P(s.show) === "Object")
          return ie(s, de(s.show));
        if (Array.isArray(s.show))
          if (s.showOr) {
            for (let l of s.show)
              if (de(l) === !0)
                return ie(s, !0);
            return ie(s, !1);
          } else {
            for (let l of s.show)
              if (de(l) === !1)
                return ie(s, !1);
            return ie(s, !0);
          }
        else if (P(s.show) === "Function")
          return ie(s, s.show(n.value));
      } else
        s.showing || (s.showing = !0);
      return !0;
    }
    function de(s) {
      if (s.reg && typeof s.reg.test == "function")
        return s.reg.test(n.value[s.key]);
      if (Array.isArray(s.val)) {
        for (let l of s.val) {
          if ((n.value[s.key] || n.value[s.key] === 0 || n.value[s.key] === !1) && l === ".")
            return !0;
          if (n.value[s.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function ie(s, l) {
      return !s.showing && l && s.key ? (s.showing = l, s.defaultVal !== void 0 && (s.tempKey ? (i.value[s.tempKey] === null || i.value[s.tempKey] === void 0 || (P(i.value[s.tempKey]) === "Object" || Array.isArray(i.value[s.tempKey])) && Ae(i.value[s.tempKey])) && U(s, i.value) : (n.value[s.key] === null || n.value[s.key] === void 0) && (n.value[s.key] = s.defaultVal), s.key2 && s.deafultVal2 !== void 0 && (n.value[s.key2] === null || n.value[s.key2] === void 0) && s.type !== "inputMap" && (n.value[s.key2] = s.defaultVal2)), s.tempKey && ce(i.value[s.tempKey], s)) : s.showing = l, l;
    }
    function U(s, l) {
      switch (s.type) {
        case "selectInput":
          l[s.tempKey] = {
            key: s.key,
            val: s.defaultVal
          };
          break;
        case "inputMap":
          s.key3 ? l[s.tempKey] = {
            lng: s.defaultVal || 0,
            lat: s.defaultVal2 || 0,
            name: s.defaultVal3 || ""
          } : l[s.tempKey] = {
            lng: s.defaultVal || 0,
            lat: s.defaultVal2 || 0
          };
          break;
        case "input":
        case "inputNumber":
        case "textarea":
          l[s.tempKey] = s.defaultVal;
          break;
        case "radioGroup":
        case "select":
        case "checkboxGroup":
          s.booleanVal ? l[s.tempKey] = s.defaultVal ? 1 : 0 : l[s.tempKey] = s.defaultVal;
          break;
        case "date":
        case "time":
        case "monthRange":
          s.dateType === "date" || s.dateType === "datetime" || s.dateType === "time" || s.dateType === "year" || s.dateType === "month" ? l[s.tempKey] = s.defaultVal : (s.dateType === "daterange" || s.dateType === "datetimerange" || s.dateType === "timerange" || s.type === "monthRange") && (l[s.tempKey] = s.defaultVal && s.defaultVal2 && [s.defaultVal, s.defaultVal2] || []);
          break;
      }
    }
    function ae() {
      let s = ne(t.formData);
      if (C.value)
        for (let l of s)
          se(l);
      else
        se(s);
      c.value = s;
    }
    function se(s) {
      for (let l of s)
        switch (l.type) {
          case "selectInput":
            const x = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = x, i.value[x] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, m.push(
              be(
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
              be(
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
              be(
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
                    be(
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
                          l.options = [], l.localOption && (l.options = [...l.localOption]), ge(Be) && D(Be, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && m.push(
                    be(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? n.value[l.changeOption.valKey] : !1,
                      (N) => {
                        let X = ne(i.value[l.tempKey]);
                        if (i.value[l.tempKey] = null, (N || N === 0 || N === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let Be = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Pe((Be + "&" + l.changeOption.key + "=" + N).replace(/\?&/, "?"), l, X);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), ge(X) && D(X, l);
                      },
                      { immediate: !0 }
                    )
                  ) : P(l.changeOption) === "Boolean" && m.push(
                    be(
                      () => We(t.formData, (N) => N.key === l.key).optionUrl,
                      (N) => {
                        let X = ne(i.value[l.tempKey]);
                        i.value[l.tempKey] = null, N ? Pe(N, l, X) : (l.options = [], l.localOption && (l.options = [...l.localOption]), ge(X) && D(X, l));
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
              be(
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
              be(
                () => i.value[Z],
                (N) => {
                  ce(N, l);
                }
              )
            );
            break;
        }
    }
    function Pe(s, l, x) {
      Re.get(s).then((k) => {
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
                let kl = String(Z[Be]);
                Ke === 1 ? X += "（" + kl : Ke > 1 ? X += "、" + kl : X += kl;
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
        )) : (l.options.length = 0, l.options.push(...oe))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), ge(x) && D(x, l), l.disableOptionByOthers && (P(l.disableOptionByOthers) === "String" ? m.push(
          be(
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
          be(
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
    function D(s, l) {
      Array.isArray(l.options) && st(l.options, { val: s }) !== -1 && (i.value[l.tempKey] = s);
    }
    function R() {
      if (n.value = {}, C.value)
        for (let s of t.formData)
          fe(s);
      else
        fe(t.formData);
    }
    function fe(s) {
      for (let l of s)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (n.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function ce(s, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            s && (s.beforeKey && delete n.value[s.beforeKey], n.value[s.key] = s.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            s ? (n.value[l.key] = s.lng, n.value[l.key2] = s.lat, l.key3 && (n.value[l.key3] = s.name)) : (n.value[l.key] = null, n.value[l.key2] = null, l.key3 && (n.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (s || s === 0) {
              let oe = /^-?\d+(.\d+)?$/;
              l.numberVal && oe.test(s) ? n.value[l.key] = Number(s) : n.value[l.key] = s;
            } else
              n.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? n.value[l.key] = s === void 0 || s === "" || s === null ? null : !!s : l.multiple || l.type === "checkboxGroup" ? n.value[l.key] = Object.assign([], s) : n.value[l.key] = s, l.collectLabel) {
              const oe = Ce(l, s);
              if (Array.isArray(l.collectLabel)) {
                for (let te of l.collectLabel)
                  if (te.key && te.valKey) {
                    const Z = le(te.key);
                    let N = null;
                    Array.isArray(oe) ? (N = oe.map((Be) => Be[te.valKey]), n.value[te.key] = N, Z && (i.value[Z] = N)) : (oe && ge(oe[te.valKey]) && (N = oe[te.valKey]), n.value[te.key] = N, Z && (i.value[Z] = N));
                    let X = We(c.value, (Be) => Be.key === te.key);
                    X && X.tempKey && (i.value[X.tempKey] = n.value[te.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const te = le(l.collectLabel.key);
                let Z = null;
                Array.isArray(oe) ? (Z = oe.map(
                  (X) => l.collectLabel && !Array.isArray(l.collectLabel) && X[l.collectLabel.valKey]
                ), n.value[l.collectLabel.key] = Z, te && (i.value[te] = Z)) : (oe && ge(oe[l.collectLabel.valKey]) && (Z = oe[l.collectLabel.valKey]), n.value[l.collectLabel.key] = Z, te && (i.value[te] = Z));
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
              s ? (x === "time" ? n.value[l.key] = s : n.value[l.key] = el(s).format(typeof l.format == "string" ? l.format : k[x]), x === "date" && l.addTime && (n.value[l.key] += " 00:00:00")) : n.value[l.key] = null;
            else if (l.type === "monthRange" || x === "daterange" || x === "datetimerange" || x === "timerange") {
              if (!l.key2)
                return;
              s && s[0] && s[1] ? (x === "timerange" ? (n.value[l.key] = s[0], n.value[l.key2] = s[1]) : l.type === "monthRange" ? (n.value[l.key] = typeof l.format == "string" && el(s[0]).format(l.format) || s[0], n.value[l.key2] = typeof l.format == "string" && l.format && el(s[1]).format(l.format) || s[1]) : (n.value[l.key] = el(s[0]).format(l.format || x && k[x]), n.value[l.key2] = el(s[1]).format(l.format || x && k[x])), x === "daterange" && l.addTime && (n.value[l.key] += " 00:00:00", n.value[l.key2] += " 23:59:59")) : (n.value[l.key] = null, n.value[l.key2] = null);
            }
            break;
        }
    }
    function Ce(s, l) {
      if (s.options)
        if (s.multiple || s.type === "checkboxGroup") {
          if (l) {
            let x = [];
            for (let k of s.options)
              l.indexOf(k.val) !== -1 && x.push(k);
            return x;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let x of s.options)
              if (x.val === l)
                return x;
          }
          return !1;
        }
    }
    function le(s) {
      if (C.value) {
        for (let l of c.value) {
          const x = Ue(l, s);
          if (x)
            return x;
        }
        return !1;
      }
      return Ue(c.value, s);
    }
    function Ue(s, l) {
      for (let x of s)
        if (x.key === l)
          return x.tempKey;
      return !1;
    }
    function ol(s, l) {
      let x = {};
      for (let k in n.value)
        n.value.hasOwnProperty(k) && s[k] !== void 0 && (x[k] = s[k], delete s[k]);
      Pl(x, l);
      for (let k in s)
        s.hasOwnProperty(k) && (f.indexOf(k) < 0 && f.push(k), n.value[k] = s[k]);
    }
    function Ft(s) {
      let l = ne(s);
      if (C.value) {
        let x = [];
        for (let k of t.formData)
          x.push(...Rl(k, l));
        return x;
      }
      return Rl(t.formData, l);
    }
    function Rl(s, l) {
      return s.filter((x) => {
        for (let k of Object.keys(l))
          if (x.key === k && B.value.indexOf(k) > -1 && !(l[k] === null || (Array.isArray(l[k]) || P(l[k]) === "Object") && Ae(l[k])))
            return delete l[k], !0;
        return !1;
      }).map((x) => x.key);
    }
    function Pl(s, l = !1) {
      let x = ne(s);
      Ut(s, l);
      for (let k in n.value)
        if (n.value.hasOwnProperty(k) && s[k] !== void 0 && s[k] !== "--") {
          if (Array.isArray(s[k]))
            s[k] = s[k].filter((oe) => oe !== "--");
          else if (P(s[k]) === "Object")
            for (let oe in s[k])
              s[k].hasOwnProperty(oe) && s[k][oe] === "--" && (s[k][oe] = null);
          n.value[k] = s[k];
        } else
          l || (n.value[k] = Array.isArray(n.value[k]) ? [] : null);
      $t(Ft(x));
    }
    function Ut(s, l = !1) {
      if (C.value)
        for (let x of c.value)
          $l(x, s, l);
      else
        $l(c.value, s, l);
    }
    function $l(s, l, x = !1) {
      for (let k of s)
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
    function Kt(s) {
      if (Array.isArray(s))
        for (let l of s)
          Dl(l);
      else
        P(s) === "Object" && Dl(s);
    }
    function Dl(s) {
      const { index: l, indexB: x, key: k, val: oe } = s;
      if (typeof l == "number")
        if (Array.isArray(c.value[l])) {
          if (typeof x == "number")
            if (k && s.hasOwnProperty("val"))
              c.value[l][x][k] = oe;
            else
              for (let te of Object.keys(s))
                te !== "index" && k !== "indexB" && (c.value[l][x][te] = s[te]);
        } else if (k && s.hasOwnProperty("val"))
          c.value[l][k] = oe;
        else
          for (let te of Object.keys(s))
            te !== "index" && (c.value[l][te] = s[te]);
    }
    function Nl({ label: s, root: l }) {
      l.key2 && (n.value[l.key2] = s), ze({
        e: s,
        root: l
      });
    }
    function El(s) {
      s.beforeKey && Zt(d, (l) => l === s.beforeKey), s.key && (d.indexOf(s.key) === -1 && d.push(s.key), ze({
        e: null,
        root: s
      }));
    }
    function Gl({ name: s, root: l }) {
      l.key2 && (n.value[l.key2] = s), ze({
        e: s,
        root: l
      });
    }
    function zl({ e: s, root: l }) {
      ze({
        e: s,
        root: l
      }), Oe(function() {
        var x, k;
        (k = (x = u.value) == null ? void 0 : x.validateField) == null || k.call(x, l.key);
      });
    }
    function ze({ e: s, root: l }) {
      Le(() => {
        let x = {
          event: s
        };
        if (l.key && (x[l.key] = n.value[l.key]), l.key2 && (x[l.key2] = n.value[l.key2]), Array.isArray(l.collectLabel))
          for (let k of l.collectLabel)
            x[k.key] = n.value[k.key];
        else
          l.collectLabel && l.collectLabel.key && (x[l.collectLabel.key] = n.value[l.collectLabel.key]);
        e("on-item-change", x);
      }, 500);
    }
    function Hl() {
      let s = {};
      for (let l of A.value)
        s[l] = n.value[l];
      return t.trim && (s = yl(s)), s;
    }
    function Rt() {
      var s, l;
      (l = (s = u.value) == null ? void 0 : s.validate) == null || l.call(s);
    }
    function Pt(s) {
      Le(() => {
        var l, x;
        (x = (l = u.value) == null ? void 0 : l.validateField) == null || x.call(l, s, () => {
        });
      }, 10);
    }
    function $t(s) {
      Le(() => {
        var l, x;
        if (Array.isArray(s))
          for (let k of s)
            (x = (l = u.value) == null ? void 0 : l.validateField) == null || x.call(l, k, () => {
            });
      }, 10);
    }
    function Dt(s) {
      s !== void 0 && (V.value = !!s);
    }
    function bl() {
      var s, l;
      t.disabled || (l = (s = u.value) == null ? void 0 : s.validate) == null || l.call(s, (x) => {
        g || (g = !0, x && (V.value = !0, e("on-submit", Hl())), Le(() => {
          g = !1;
        }, 2e3));
      });
    }
    return Ee(() => {
      R(), ae();
    }), o({
      resetForm: y,
      refreshFormDom: G,
      reRenderForm: M,
      setItemToValGroup: ol,
      updateValGroup: Pl,
      updateFormDataT: Kt,
      validate: Rt,
      reValidate: Pt,
      changeLoading: Dt,
      getValGroup: Hl,
      submit: bl
    }), (s, l) => {
      const x = j("FormItem"), k = j("Button"), oe = j("Form");
      return T(), J(oe, {
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
          E(x, { style: { display: "none" } }, {
            default: W(() => [
              Wn
            ]),
            _: 1
          }),
          h(C) ? (T(!0), $(pe, { key: 0 }, ye(h(c), (te, Z) => (T(), $("div", {
            class: xe([s.teamClass, "formTeamBox" + Z]),
            key: "formTeamBox" + Z
          }, [
            (T(!0), $(pe, null, ye(te, (N, X) => (T(), $(pe, {
              key: "formItem" + X
            }, [
              H(N) ? (T(), J(lt, {
                key: 0,
                item: N,
                style: ee(h(I)),
                "item-style": h(w),
                "val-group": h(n),
                "temp-keys": h(i),
                inline: t.inline,
                disabled: t.disabled,
                "label-width": t.labelWidth,
                "item-width": t.itemWidth,
                "mgr-url": h(r),
                "upload-url": h(v),
                onItemChange: ze,
                onReValidate: zl,
                onClearTempKeyItem: ue,
                onSelectInputChange: El,
                onAlNameChange: Gl,
                onAsyncLabelChange: Nl
              }, Xe({ _: 2 }, [
                ye(L(te), (Be) => ({
                  name: Be.slotName,
                  fn: W((Ke) => [
                    Te(s.$slots, Be.slotName, {
                      valGroup: Ke.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : he("", !0)
            ], 64))), 128))
          ], 2))), 128)) : he("", !0),
          (T(!0), $(pe, null, ye(h(c), (te, Z) => (T(), $(pe, {
            key: "formItem" + Z
          }, [
            !h(C) && H(te) ? (T(), J(lt, {
              key: 0,
              item: te,
              style: ee(h(I)),
              "item-style": h(w),
              "val-group": h(n),
              "temp-keys": h(i),
              inline: t.inline,
              disabled: t.disabled,
              "label-width": t.labelWidth,
              "item-width": t.itemWidth,
              "mgr-url": h(r),
              "upload-url": h(v),
              onItemChange: ze,
              onReValidate: zl,
              onClearTempKeyItem: ue,
              onSelectInputChange: El,
              onAlNameChange: Gl,
              onAsyncLabelChange: Nl
            }, Xe({ _: 2 }, [
              ye(L(s.formData), (N) => ({
                name: N.slotName,
                fn: W((X) => [
                  Te(s.$slots, N.slotName, {
                    valGroup: X.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : he("", !0)
          ], 64))), 128)),
          t.showLongOkBt ? (T(), J(x, { key: 1 }, {
            default: W(() => [
              E(k, {
                onClick: bl,
                style: ee(h(w)),
                type: "primary",
                loading: t.btnLoading && h(V),
                disabled: t.disabled
              }, {
                default: W(() => [
                  ve(q(t.longOkBtTxt || h(S)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : he("", !0),
          F("div", jn, [
            t.showInlineOkBt ? (T(), J(k, {
              key: 0,
              type: "primary",
              class: xe({ inlineFormBtXN: t.inline, okBtnXN: !0 }),
              onClick: bl,
              loading: t.btnLoading && h(V),
              disabled: t.disabled
            }, {
              default: W(() => [
                ve(q(t.inlineOkBtTxt || h(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : he("", !0),
            t.showInlineClearBt ? (T(), J(k, {
              key: 1,
              onClick: y,
              class: xe({ inlineFormBtXN: t.inline }),
              type: "dashed"
            }, {
              default: W(() => [
                ve(q(t.inlineClearBtTxt || h(S)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : he("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), qn = /* @__PURE__ */ re({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: "100%" },
    labelWidth: { default: () => vl().formGroupLabelWidth },
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
    function r() {
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
    function V(B, L) {
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
    function w() {
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
      refreshFormDom: r,
      reRenderForm: d,
      setItemToValGroup: f,
      updateValGroup: V,
      updateFormDataT: b,
      validate: v,
      reValidate: g,
      changeLoading: C,
      getValGroup: I,
      submit: _,
      close: A
    }), (B, L) => {
      const p = j("Button");
      return T(), $("div", {
        style: ee(h(u)),
        class: "formGroupBoxVM"
      }, [
        E(gl, Ze({
          ref_key: "formRRef",
          ref: c
        }, B.$attrs, {
          "form-data": t.formData,
          "label-width": t.labelWidth,
          "content-width": t.contentWidth,
          "item-width": t.itemWidth,
          btnLoading: t.btnLoading,
          onOnSubmit: w
        }), Xe({ _: 2 }, [
          ye(h(i), (O) => ({
            name: O.slotName,
            fn: W(({ valGroup: y }) => [
              Te(B.$slots, O.slotName, { valGroup: y })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        me(F("div", {
          class: "formFooterVM",
          style: ee({ marginLeft: t.labelWidth + "px" })
        }, [
          F("div", {
            style: ee({ width: t.contentWidth }),
            class: "btnBoxKAL"
          }, [
            t.showOkBt ? (T(), J(p, {
              key: 0,
              onClick: _,
              class: "form-save-btn",
              loading: t.btnLoading && h(n)
            }, {
              default: W(() => [
                ve(q(t.okBtTxt || h(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : he("", !0),
            t.showCancelBt ? (T(), J(p, {
              key: 1,
              onClick: A,
              class: "form-cancel-btn"
            }, {
              default: W(() => [
                ve(q(t.cancelBtTxt || h(S)("r.cancel")), 1)
              ]),
              _: 1
            })) : he("", !0)
          ], 4)
        ], 4), [
          [we, t.showOkBt || t.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ml = /* @__PURE__ */ re({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => vl().searchFormLabelWidth },
    itemWidth: { default: 202 },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = z(), n = K(() => {
      if (Array.isArray(t.formData[0])) {
        let w = [];
        for (let _ of t.formData)
          w = w.concat(_.filter((A) => A.type === "custom"));
        return w;
      }
      return t.formData.filter((w) => w.type === "custom");
    });
    function c() {
      return new Promise((w) => {
        var _, A;
        (A = (_ = u.value).resetForm) == null || A.call(_).then(() => {
          w();
        });
      });
    }
    function i() {
      return new Promise((w) => {
        var _, A;
        (A = (_ = u.value).refreshFormDom) == null || A.call(_).then(() => {
          w();
        });
      });
    }
    function m() {
      return new Promise((w) => {
        var _, A;
        (A = (_ = u.value).reRenderForm) == null || A.call(_).then(() => {
          w();
        });
      });
    }
    function r(w, _) {
      var A, B;
      (B = (A = u.value).setItemToValGroup) == null || B.call(A, w, _);
    }
    function d(w, _) {
      var A, B;
      (B = (A = u.value).updateValGroup) == null || B.call(A, w, _);
    }
    function f(w) {
      var _, A;
      (A = (_ = u.value).updateFormDataT) == null || A.call(_, w);
    }
    function V() {
      var w, _;
      (_ = (w = u.value).validate) == null || _.call(w);
    }
    function b(w) {
      var _, A;
      (A = (_ = u.value).reValidate) == null || A.call(_, w);
    }
    function v(w) {
      var _, A;
      (A = (_ = u.value).changeLoading) == null || A.call(_, w === void 0 ? !1 : w);
    }
    function g() {
      var w, _;
      return (_ = (w = u.value).getValGroup) == null ? void 0 : _.call(w);
    }
    function C(w) {
      e("on-search", w);
    }
    function I() {
      var w, _;
      (_ = (w = u.value).submit) == null || _.call(w);
    }
    return Ee(() => {
      const w = u.value.$el;
      w != null && w.parentNode && w.parentNode.addEventListener("keyup", (_) => {
        _.keyCode === 13 && I();
      });
    }), o({
      resetForm: c,
      refreshFormDom: i,
      reRenderForm: m,
      setItemToValGroup: r,
      updateValGroup: d,
      updateFormDataT: f,
      validate: V,
      reValidate: b,
      changeLoading: v,
      getValGroup: g,
      submit: I
    }), (w, _) => (T(), J(gl, Ze({
      ref_key: "formRRef",
      ref: u
    }, w.$attrs, {
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
    }), Xe({ _: 2 }, [
      ye(h(n), (A) => ({
        name: A.slotName,
        fn: W(({ valGroup: B }) => [
          Te(w.$slots, A.slotName, { valGroup: B })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Jn = /* @__PURE__ */ re({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: 520 },
    labelWidth: { default: () => vl().formModalLabelWidth },
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
    function r() {
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
      var y, M;
      (M = (y = u.value).setItemToValGroup) == null || M.call(y, p, O);
    }
    function V(p, O) {
      var y, M;
      (M = (y = u.value).updateValGroup) == null || M.call(y, p, O);
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
    function w() {
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
      refreshFormDom: r,
      reRenderForm: d,
      setItemToValGroup: f,
      updateValGroup: V,
      updateFormDataT: b,
      validate: v,
      reValidate: g,
      changeLoading: C,
      getValGroup: I,
      submit: _,
      open: A,
      close: B
    }), (p, O) => {
      const y = j("Button"), M = j("Modal");
      return T(), J(M, {
        class: xe(["formModal", { hideFooter: t.hideFooter }]),
        title: t.title || h(S)("r.title"),
        modelValue: h(n),
        "onUpdate:modelValue": O[0] || (O[0] = (G) => Fe(n) ? n.value = G : null),
        "mask-closable": !1,
        "footer-hide": t.hideFooter,
        width: t.width,
        onOnVisibleChange: L
      }, {
        footer: W(() => [
          E(y, {
            onClick: _,
            class: "modal-save-btn",
            loading: t.btnLoading && h(c)
          }, {
            default: W(() => [
              ve(q(t.okBtTxt || h(S)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          t.hideCancelBt ? he("", !0) : (T(), J(y, {
            key: 0,
            onClick: B,
            class: "modal-cancel-btn"
          }, {
            default: W(() => [
              ve(q(t.cancelBtTxt || h(S)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: W(() => [
          E(gl, Ze({
            ref_key: "formRRef",
            ref: u
          }, p.$attrs, {
            "form-data": t.formData,
            "label-width": t.labelWidth,
            btnLoading: t.btnLoading,
            onOnSubmit: w
          }), Xe({ _: 2 }, [
            ye(h(i), (G) => ({
              name: G.slotName,
              fn: W(({ valGroup: Y }) => [
                Te(p.$slots, G.slotName, { valGroup: Y })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Yn = /* @__PURE__ */ re({
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
    be(
      () => e.data,
      (v) => {
        t.value = !1;
        let g = [];
        r(v, g), u.value = g, Oe(function() {
          t.value = !0, e.inlineLeaf && Oe(V);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), be(
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
    ), be(
      () => e.disabled,
      (v) => {
        je({
          group: u.value,
          condition: (g) => g.disableCheckbox !== v,
          key: "disableCheckbox",
          val: v
        }), e.inlineLeaf && Oe(V);
      },
      { immediate: !0 }
    );
    function r(v, g = []) {
      for (let C of v) {
        let I = !1;
        i.value.length > 1 ? I = _l(m.value, (_) => _[i.value[0]] === C[i.value[0]]) !== void 0 : I = i.value[0] ? m.value.indexOf(C[i.value[0]]) !== -1 : !1;
        let w = {
          name: C[e.label],
          expand: !!(e.expandAll || C.expand),
          checked: I,
          disableCheckbox: e.disabled
        };
        for (let _ of i.value)
          w[_] = C[_];
        g.push(w), C.children && C.children.length > 0 && (w.children = [], d(C.children, w.children));
      }
    }
    function d(v, g = []) {
      for (let C of v) {
        let I = !1;
        i.value.length > 1 ? I = _l(m.value, (_) => _[i.value[0]] === C[i.value[0]]) !== void 0 : I = i.value[0] ? m.value.indexOf(C[i.value[0]]) !== -1 : !1;
        let w = {
          name: C[e.label],
          expand: !!(e.expandAll || C.expand),
          checked: I,
          disableCheckbox: e.disabled
        };
        for (let _ of i.value)
          w[_] = C[_];
        g.push(w), C.children && C.children.length > 0 && (w.children = [], r(C.children, w.children));
      }
    }
    function f(v, {
      data: g
    }) {
      let C = "", I = !0;
      if (g.children && g.children.length > 0) {
        for (let w of g.children)
          if (w.children !== void 0) {
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
    function V(v) {
      if (v) {
        v.expand && Oe(V);
        return;
      }
      let g = document.querySelectorAll("#" + n + " .inlineChildXA");
      if (g.length > 0)
        for (let C of g) {
          let I = C.parentElement, w = I == null ? void 0 : I.nextElementSibling;
          if (!w)
            return;
          if (w.tagName !== "BR") {
            let _ = I == null ? void 0 : I.parentElement, A = document.createElement("br");
            _ == null || _.insertBefore(A, w), w = A.nextElementSibling, (w == null ? void 0 : w.className.indexOf("inlineTreeNodeF")) === -1 && w.setAttribute("class", w.className + " inlineTreeNodeF");
          }
          for (; w != null && w.nextElementSibling; )
            w = w.nextElementSibling, w.className.indexOf("inlineTreeNodeF") === -1 && w.setAttribute("class", w.className + " inlineTreeNodeF");
        }
    }
    function b(v) {
      let g = [];
      if (e.leaf) {
        for (let C of v)
          if (!C.children)
            if (Array.isArray(e.collectVal)) {
              let I = {};
              for (let w of e.collectVal)
                I[w] = C[w];
              g.push(I);
            } else
              g.push(C[e.collectVal]);
      } else
        for (let C of v)
          if (Array.isArray(e.collectVal)) {
            let I = {};
            for (let w of e.collectVal)
              I[w] = C[w];
            g.push(I);
          } else
            g.push(C[e.collectVal]);
      c = g, o("update:modelValue", g), o("on-change", ne(g));
    }
    return (v, g) => {
      const C = j("Tree");
      return h(t) ? (T(), J(C, {
        key: 0,
        id: n,
        class: "checkboxTreeGA",
        data: h(u),
        render: f,
        onOnCheckChange: b,
        onOnToggleExpand: V,
        "show-checkbox": ""
      }, null, 8, ["data"])) : he("", !0);
    };
  }
}), Xn = { class: "transferBoxRL" }, Zn = { class: "leftBoxLLL" }, Qn = { class: "fullHeight flexColumnBox" }, eo = { class: "notGrow" }, lo = { class: "titleLLL" }, to = { class: "growFlexItem" }, ao = { class: "middleBoxLLL" }, no = { class: "rightBoxLLL" }, oo = { class: "fullHeight flexColumnBox" }, io = { class: "notGrow" }, so = { class: "titleLLL" }, ro = { class: "growFlexItem" }, uo = /* @__PURE__ */ re({
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
  emits: ["transferred"],
  setup(a, { expose: o, emit: e }) {
    const t = a;
    let u = z({}), n = z({}), c = z([]), i = z([]), m = z(0), r = z(0);
    const d = K(() => ({ ...t.constSearchDataLeft, ...u.value })), f = K(() => ({ ...t.constSearchDataRight, ...n.value })), V = K(() => m.value < 1), b = K(() => c.value.length < 1), v = K(() => i.value.length < 1), g = K(() => r.value < 1), C = z(), I = z(), w = z(), _ = z();
    function A() {
      C.value.resetForm(), I.value.resetForm(), Ae(u.value) || (u.value = {}), Ae(n.value) || (n.value = {}), w.value.clearSelect(), _.value.clearSelect();
    }
    function B() {
      w.value.search(), _.value.search();
    }
    function L(H) {
      c.value = H;
    }
    function p(H) {
      i.value = H;
    }
    function O(H) {
      var de, ie, U, ae, se;
      m.value = ((ie = (de = H == null ? void 0 : H.data) == null ? void 0 : de.page) == null ? void 0 : ie.total) || ((ae = (U = H == null ? void 0 : H.data) == null ? void 0 : U.data) == null ? void 0 : ae.total) || ((se = H == null ? void 0 : H.data) == null ? void 0 : se.total) || (H == null ? void 0 : H.total) || 0;
    }
    function y(H) {
      var de, ie, U, ae, se;
      r.value = ((ie = (de = H == null ? void 0 : H.data) == null ? void 0 : de.page) == null ? void 0 : ie.total) || ((ae = (U = H == null ? void 0 : H.data) == null ? void 0 : U.data) == null ? void 0 : ae.total) || ((se = H == null ? void 0 : H.data) == null ? void 0 : se.total) || (H == null ? void 0 : H.total) || 0;
    }
    function M(H) {
      u.value = H;
    }
    function G(H) {
      n.value = H;
    }
    function Y() {
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
      ie && de && Re[de](ie, U, null, [], { spin: !0 }, !1).then((se) => {
        (se == null ? void 0 : se.code) === 0 ? (Ie(ae + S("r.success"), (se == null ? void 0 : se.message) || "", "success"), w.value && w.value.getTableData(), _.value && _.value.getTableData(), e("transferred")) : Ie(ae + S("r.failed"), (se == null ? void 0 : se.message) || "", "error");
      }).catch(() => {
        Ie(ae + S("r.error"), "", "error");
      });
    }
    return o({
      reset: A,
      search: B
    }), (H, de) => {
      const ie = j("Icon"), U = j("Button");
      return T(), $("div", Xn, [
        F("div", Zn, [
          F("div", Qn, [
            F("div", eo, [
              F("div", lo, q(t.titleLeft || h(S)("r.added")), 1),
              E(Tl, null, {
                default: W(() => [
                  E(Ml, {
                    ref_key: "leftFormRef",
                    ref: C,
                    "form-data": t.formDataLeft,
                    "form-rules": t.formRulesLeft,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: M
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            F("div", to, [
              E(Il, {
                ref_key: "lTabRef",
                ref: w,
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
        F("div", ao, [
          E(U, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: _e,
            disabled: h(V)
          }, {
            default: W(() => [
              ve(q(h(S)("r.removeAll")) + " ", 1),
              E(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          E(U, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Q,
            disabled: h(b)
          }, {
            default: W(() => [
              ve(q(h(S)("r.remove")) + " ", 1),
              E(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          E(U, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: Y,
            disabled: h(v)
          }, {
            default: W(() => [
              E(ie, { type: "ios-arrow-back" }),
              ve(" " + q(h(S)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          E(U, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: ue,
            disabled: h(g)
          }, {
            default: W(() => [
              E(ie, { type: "ios-arrow-back" }),
              ve(" " + q(h(S)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        F("div", no, [
          F("div", oo, [
            F("div", io, [
              F("div", so, q(t.titleRight || h(S)("r.notAdded")), 1),
              E(Tl, null, {
                default: W(() => [
                  E(Ml, {
                    ref_key: "rightFormRef",
                    ref: I,
                    "form-data": t.formDataRight,
                    "form-rules": t.formRulesRight,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: G
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            F("div", ro, [
              E(Il, {
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
}), co = { class: "boxLPA" }, fo = { class: "headerJ" }, po = { class: "firstT borderBoxAS" }, mo = { class: "secondT borderBoxAS" }, ho = { class: "firstCol borderBoxAS" }, yo = { class: "secondCol borderBoxAS" }, vo = /* @__PURE__ */ re({
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
      let m = ne(e.data), r = ne(t.value);
      for (let d of m) {
        let f = 0;
        if (d.children && !Ae(d.children))
          for (let V of d.children) {
            for (let b = 0, v = r.length; b < v; b++)
              if (Array.isArray(e.collectVal)) {
                let g = !0;
                for (let C of e.collectVal)
                  if (r[b][C] !== V[C]) {
                    g = !1;
                    break;
                  }
                if (g) {
                  V.checked = !0, f++, r.splice(b, 1);
                  break;
                }
              } else if (r[b] === V[e.collectVal]) {
                V.checked = !0, f++, r.splice(b, 1);
                break;
              }
            !V.checked && (V.checked = !1);
          }
        f === 0 ? (d.checked = !1, d.indeterminate = !1) : d.children && f === d.children.length ? (d.checked = !0, d.indeterminate = !1) : (d.checked = !1, d.indeterminate = !0);
      }
      return m;
    });
    be(
      () => e.modelValue,
      (m, r) => {
        tl(t.value, m) || tl(m, r) || (t.value = m);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function n(m, r) {
      if (m.children)
        for (let d of m.children)
          d.checked = r;
      c();
    }
    function c() {
      i(u.value, !0);
    }
    function i(m, r) {
      let d = [];
      for (let f of m) {
        if (!r && !e.leaf && f.checked && f.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let V = {};
            for (let b of e.collectVal)
              V[b] = f[b];
            d.push(V);
          } else
            P(e.collectVal) === "String" && d.push(f[e.collectVal]);
        if (f.children) {
          for (let V of f.children)
            if (V.checked)
              if (Array.isArray(e.collectVal)) {
                let b = {};
                for (let v of e.collectVal)
                  b[v] = V[v];
                d.push(b);
              } else
                P(e.collectVal) === "String" && d.push(V[e.collectVal]);
        }
      }
      r ? (t.value = d, e.leaf ? (o("update:modelValue", d), o("on-change", ne(d))) : Oe(function() {
        i(u.value);
      })) : (o("update:modelValue", d), o("on-change", ne(d)));
    }
    return (m, r) => {
      const d = j("Checkbox");
      return T(), $("div", co, [
        F("div", fo, [
          F("div", po, q(m.firstTitle || h(S)("r.level.1")), 1),
          F("div", mo, q(m.secondTitle || h(S)("r.level.2")), 1)
        ]),
        (T(!0), $(pe, null, ye(h(u), (f, V) => (T(), $("div", {
          class: "bodyJ",
          key: "checkboxJ" + V
        }, [
          F("div", ho, [
            E(d, {
              modelValue: f.checked,
              "onUpdate:modelValue": (b) => f.checked = b,
              indeterminate: f.indeterminate,
              onOnChange: (b) => n(f, b),
              disabled: m.disabled
            }, {
              default: W(() => [
                ve(q(f[m.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          F("div", yo, [
            (T(!0), $(pe, null, ye(f.children, (b, v) => (T(), $("div", {
              class: "secItem",
              key: "secItem" + v
            }, [
              E(d, {
                modelValue: b.checked,
                "onUpdate:modelValue": (g) => b.checked = g,
                onOnChange: c,
                disabled: m.disabled
              }, {
                default: W(() => [
                  ve(q(b[m.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), go = { class: "boxLPB" }, bo = { class: "headerF" }, ko = { class: "firstT borderBoxKa" }, wo = { class: "secondT borderBoxKa" }, Vo = { class: "thirdT borderBoxKa" }, _o = { class: "firstCol borderBoxKa" }, Co = { class: "rightBoxAL" }, Ao = { class: "secondCol borderBoxKa" }, Bo = { class: "thirdCol borderBoxKa" }, xo = /* @__PURE__ */ re({
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
      let r = ne(e.data), d = ne(t.value);
      for (let f of r) {
        let V = 0, b = 0;
        if (f.children && !Ae(f.children))
          for (let v of f.children) {
            let g = 0;
            if (v.children && !Ae(v.children))
              for (let C of v.children) {
                for (let I = 0, w = d.length; I < w; I++)
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
            g === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && g === v.children.length ? (v.checked = !0, v.indeterminate = !1, V++) : (v.checked = !1, v.indeterminate = !0, b++);
          }
        V === 0 && b === 0 ? (f.checked = !1, f.indeterminate = !1) : f.children && V === f.children.length ? (f.checked = !0, f.indeterminate = !1) : (f.checked = !1, f.indeterminate = !0);
      }
      return r;
    });
    be(
      () => e.modelValue,
      (r, d) => {
        tl(t.value, r) || tl(r, d) || (t.value = r);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function n(r, d) {
      if (r.children) {
        for (let f of r.children)
          if (f.checked = d, f.children)
            for (let V of f.children)
              V.checked = d;
      }
      i();
    }
    function c(r, d) {
      if (r.children)
        for (let f of r.children)
          f.checked = d;
      i();
    }
    function i() {
      m(u.value, !0);
    }
    function m(r, d) {
      let f = [];
      for (let V of r) {
        if (!d && !e.leaf && V.checked && V.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let v of e.collectVal)
              b[v] = V[v];
            f.push(b);
          } else
            P(e.collectVal) === "String" && f.push(V[e.collectVal]);
        if (V.children)
          for (let b of V.children) {
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
    return (r, d) => {
      const f = j("Checkbox");
      return T(), $("div", go, [
        F("div", bo, [
          F("div", ko, q(r.firstTitle || h(S)("r.level.1")), 1),
          F("div", wo, q(r.secondTitle || h(S)("r.level.2")), 1),
          F("div", Vo, q(r.thirdTitle || h(S)("r.level.3")), 1)
        ]),
        (T(!0), $(pe, null, ye(h(u), (V, b) => (T(), $("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          F("div", _o, [
            E(f, {
              modelValue: V.checked,
              "onUpdate:modelValue": (v) => V.checked = v,
              indeterminate: V.indeterminate,
              onOnChange: (v) => n(V, v),
              disabled: r.disabled
            }, {
              default: W(() => [
                ve(q(V[r.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          F("div", Co, [
            (T(!0), $(pe, null, ye(V.children, (v, g) => (T(), $("div", {
              class: "rightBoxInner",
              key: "secItem" + g
            }, [
              F("div", Ao, [
                E(f, {
                  modelValue: v.checked,
                  "onUpdate:modelValue": (C) => v.checked = C,
                  indeterminate: v.indeterminate,
                  onOnChange: (C) => c(v, C),
                  disabled: r.disabled
                }, {
                  default: W(() => [
                    ve(q(v[r.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              F("div", Bo, [
                (T(!0), $(pe, null, ye(v.children, (C, I) => (T(), $("div", {
                  class: "thirdItem",
                  key: "thirdItem" + I
                }, [
                  E(f, {
                    modelValue: C.checked,
                    "onUpdate:modelValue": (w) => C.checked = w,
                    onOnChange: i,
                    disabled: r.disabled
                  }, {
                    default: W(() => [
                      ve(q(C[r.label]), 1)
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
}), To = { class: "flexColumnBox wellCardR" }, So = { class: "panelHeader notGrow" }, Lo = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Io = { class: "btsF" }, Oo = { class: "growFlexItem relativeBox" }, Mo = { class: "fullFlowContent" }, Fo = /* @__PURE__ */ re({
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
    return (t, u) => (T(), $("div", {
      style: ee(h(e))
    }, [
      F("div", To, [
        F("div", So, [
          F("div", Lo, q(o.title || h(S)("r.title")), 1),
          F("div", Io, [
            Te(t.$slots, "bts")
          ])
        ]),
        F("div", Oo, [
          F("div", Mo, [
            Te(t.$slots, "default")
          ])
        ])
      ])
    ], 4));
  }
}), Uo = /* @__PURE__ */ re({
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
    const n = z(""), c = cl([]);
    let i = {}, m = !0, r = !1;
    const d = "scm" + Math.random(), f = K(() => n.value ? S("r.searchFor") + n.value : e.placeholder || S("r.pInput")), V = K({
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
    be(
      () => e.getOptions,
      (B) => {
        B ? m && A() : C();
      },
      { immediate: !0 }
    ), be(
      () => e.url,
      (B) => {
        B && (r = !0);
      }
    );
    const v = z();
    function g() {
      v.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", w);
    }
    function C() {
      m || (V.value = "", m = !0, n.value = "", c.value = [], t.value = 1, u = 1, i = {}, r = !1);
    }
    function I(B) {
      for (let L of c.value)
        if (L.label === B)
          return !0;
      return !1;
    }
    const w = it(function(B) {
      const L = B.target.value;
      I(L) || (ge(L) ? (r ? C() : (Ae(i) && (i.current = t.value, i.pages = u, i.options = ne(c.value)), ge(V.value) && (V.value = "")), n.value = String(L), c.value = [], t.value = 1, m = !0, A()) : r ? (C(), A()) : (V.value = "", n.value = "", i.current ? (t.value = i.current, u = i.pages, c.value = ne(i.options), i = {}) : A()));
    }, 600);
    function _() {
      r && C(), t.value < u ? (++t.value, Oe(function() {
        A();
      })) : Jl.warning({
        background: !0,
        content: S("r.noMore")
      });
    }
    function A() {
      return new Promise((B, L) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !ge(n.value)) {
            B(!1);
            return;
          }
          Re.get(e.url, b.value).then((p) => {
            var M;
            m = !1;
            let O = [];
            (M = p == null ? void 0 : p.data) != null && M.records ? (O = p.data.records, u = p.data.pages) : p != null && p.data && P(p.data) === "Array" ? (O = p.data, u = p.pages) : p != null && p.data && P(p.data) === "Object" && (O = [p.data], u = 1), typeof e.optionFilter == "function" && P(e.optionFilter) === "Function" && (O = e.optionFilter(O)), Ae(O) || (O = O.map((G, Y) => {
              let Q = S("r.optionLabel") + Y;
              if (Array.isArray(e.optionsLabelKey)) {
                let ue = [];
                for (let _e = 1, Ve = e.optionsLabelKey.length; _e < Ve; _e++)
                  ue.push(G[e.optionsLabelKey[_e]]);
                Q = `${G[e.optionsLabelKey[0]]}(${String(ue)})`;
              } else
                Ul(e.optionsLabelKey) && (Q = G[e.optionsLabelKey]);
              if (e.collectLabel) {
                let ue = ne(G);
                return delete ue.value, delete ue.label, {
                  value: G[e.optionsValKey],
                  label: Q,
                  ...ue
                };
              }
              return {
                value: G[e.optionsValKey],
                label: Q
              };
            })), c.value.push(...O);
            let y = {};
            c.value = c.value.filter((G) => y[G.value] ? !1 : (y[G.value] = !0, !0)), Oe(function() {
              o("update-option-finish");
            }), B(!0);
          }).catch(() => {
            Jl.error(S("r.getDataError")), L(S("r.getDataError"));
          });
        } else
          B(!1);
      });
    }
    return Ee(g), (B, L) => {
      const p = j("Option"), O = j("Select"), y = Fl("loadmore");
      return me((T(), J(O, Ze({
        modelValue: h(V),
        "onUpdate:modelValue": L[0] || (L[0] = (M) => Fe(V) ? V.value = M : null),
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
          (T(!0), $(pe, null, ye(h(c), (M, G) => (T(), J(p, {
            key: "op" + G,
            value: M.value,
            label: M.label,
            disabled: M.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [y, _, d]
      ]);
    };
  }
}), tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: xt,
  AsyncCascader: Bt,
  BtTablePage: Il,
  CheckboxGroupThreeClass: xo,
  CheckboxGroupTwoClass: vo,
  CheckboxTree: Yn,
  EditorPro: Lt,
  FormGroup: qn,
  FormModal: Jn,
  FormR: gl,
  FullPop: ba,
  HeaderBt: ut,
  Hello: wa,
  IconTxtBtn: Va,
  InputMap: At,
  MonthRange: St,
  Page404: xa,
  SearchForm: Ml,
  SelectInput: _t,
  SelectScrollMore: Uo,
  ShowHidePanel: Tl,
  ShowHidePanelB: en,
  SideMenu: qa,
  TableIconBtn: Ya,
  TableSearch: tn,
  TableSetting: on,
  TransferBox: uo,
  UploadGroup: Tt,
  WellCard: Fo
}, Symbol.toStringTag, { value: "Module" }));
function It(a) {
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
    var i, m, r, d, f, V;
    const n = (d = (r = (m = (i = document.getElementById(u)) == null ? void 0 : i.parentElement) == null ? void 0 : m.parentElement) == null ? void 0 : r.parentElement) == null ? void 0 : d.parentElement, c = (V = (f = document.getElementById(u)) == null ? void 0 : f.parentElement) == null ? void 0 : V.nextSibling;
    n && (n.style.height = "0"), n && (n.style.padding = "0"), c && (c.style.display = "none");
  }, 10);
}
let ll = !1;
function Ot({
  height: a,
  width: o = 416,
  title: e,
  content: t,
  onOk: u,
  onCancel: n,
  okText: c,
  cancelText: i,
  noWarnIcon: m,
  footerAlign: r,
  cancelBt: d = !0
}) {
  const f = (...g) => $e.apply(this, g);
  let b = (a && Number(a) - 90 > 100 ? Number(a) - 90 + "px" : 0) || "100px", v = P(t) === "String";
  Ne.warning({
    width: o,
    footerHide: !0,
    render: () => ke(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: b
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
                ke("span", e || f("r.info.title")),
                ke(
                  wl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      ll || Ne.remove();
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
                  textAlign: v ? "center" : "left"
                }
              },
              [
                ke("i", {
                  class: v && !m ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                ke("div", { class: "msgBoxConO" }, t || f("r.info.text"))
              ]
            ),
            ke(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: r || "center"
                }
              },
              [
                ke(
                  wl,
                  {
                    class: "okBtN",
                    onClick(g) {
                      var C, I, w, _, A, B, L, p, O;
                      if (u && typeof u == "function") {
                        const y = u();
                        if (y && P(y) === "Promise") {
                          ll = !0;
                          const M = (g == null ? void 0 : g.currentTarget) || (g == null ? void 0 : g.target);
                          M && ((I = (C = M.classList) == null ? void 0 : C.add) == null || I.call(C, "ivu-btn-loading"), (_ = (w = M.nextSibling) == null ? void 0 : w.setAttribute) == null || _.call(w, "disabled", "disabled"), (O = (p = ((L = (B = (A = M.parentElement) == null ? void 0 : A.parentElement) == null ? void 0 : B.querySelector) == null ? void 0 : L.call(B, ".titleN .closeN")).classList) == null ? void 0 : p.add) == null || O.call(p, "disabled")), Promise.resolve(y).then(() => {
                            ll = !1, Ne.remove();
                          }).catch(() => {
                            ll = !1, Ne.remove();
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
                    ke("span", c || f("r.confirm"))
                  ]
                ),
                ke(
                  wl,
                  {
                    class: ["cancelBtN", !d && "hide"],
                    onClick() {
                      ll || (Ne.remove(), P(n) === "Function" && n && n());
                    }
                  },
                  () => i || f("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
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
      Qe(this, "title");
      Qe(this, "iconSvg");
      Qe(this, "tag");
      Qe(this, "alwaysEnable");
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
        let m = u.children[0].children[1].children[0], r = u.children[0].children[1];
        m.innerHTML = i, m.style.width = n + "px", r.style.height = c + "px", u.style.display = "block";
      } else {
        const m = document.body, r = document.createElement("div");
        r.setAttribute("id", "editor-preview"), r.setAttribute("class", "editor-preview-mask"), r.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${n}' min='200'><span>高</span><input type='number' value='${c}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let d = r.children[0].children[1], f = r.children[0].children[1].children[0], V = r.children[0].children[0].children[0].children[1];
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
        V.addEventListener("blur", g), V.addEventListener("keyup", g);
        let C = r.children[0].children[0].children[0].children[3];
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
        C.addEventListener("blur", I), C.addEventListener("keyup", I), r.children[0].children[0].children[1].addEventListener("click", () => {
          r.style.display = "none";
        }), f.innerHTML = i, f.style.width = n + "px", d.style.height = c + "px", m.append(r);
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
const at = {
  $fetch: Re,
  fullScreenImgByDom: Ge,
  fullScreenImgPreview: It,
  $swal: Ie,
  $swalConfirm: Mt,
  messageBox: Ot,
  setInterval: wt,
  setTimeout: Le,
  ...kt
}, Ko = function(a, o = {}) {
  Re.init(o.useStore || o.store, a), o.locale && ml.use(o.locale), o.i18n && ml.i18n(o.i18n), o.router && ln(o.router), o.amap && bn(o.amap), o.notRegistryGlobal || (Object.keys(tt).forEach((e) => {
    a.component(e) || a.component(e, tt[e]);
  }), Object.keys(at).forEach((e) => {
    a.config.globalProperties[e] = at[e];
  })), a.directive("has") || a.directive("has", (e, t) => {
    t.value && !vt(t.value) && (e.style.display = "none");
  }), a.directive("loadmore") || a.directive("loadmore", {
    mounted(e, t) {
      var n;
      let u = e;
      t.arg && (u = (n = document.getElementsByClassName(t.arg)) == null ? void 0 : n[0]), u && u.addEventListener("scroll", function() {
        u.scrollTop > 0 && u.scrollHeight - u.scrollTop <= u.clientHeight && t.value();
      });
    }
  }), a.config.globalProperties.searchFormLabelWidth = 84, a.config.globalProperties.formModalLabelWidth = 140, a.config.globalProperties.formGroupLabelWidth = 160, a.config.globalProperties.iconTxtBtnIconSize = 17;
}, Ro = ml.use, Po = ml.i18n, Xo = {
  locale: Ro,
  i18n: Po,
  install: Ko,
  ...kt,
  ...Oa,
  $fetch: Re,
  fullScreenImgByDom: Ge,
  fullScreenImgPreview: It,
  $swal: Ie,
  $swalConfirm: Mt,
  messageBox: Ot,
  setInterval: wt,
  setTimeout: Le
};
export {
  Re as $fetch,
  Ie as $swal,
  Mt as $swalConfirm,
  xt as AlCascaderMC,
  Bt as AsyncCascader,
  Il as BtTablePage,
  xo as CheckboxGroupThreeClass,
  vo as CheckboxGroupTwoClass,
  Yn as CheckboxTree,
  Lt as EditorPro,
  qn as FormGroup,
  Jn as FormModal,
  gl as FormR,
  ba as FullPop,
  ut as HeaderBt,
  wa as Hello,
  Va as IconTxtBtn,
  At as InputMap,
  St as MonthRange,
  xa as Page404,
  Ml as SearchForm,
  _t as SelectInput,
  Uo as SelectScrollMore,
  Tl as ShowHidePanel,
  en as ShowHidePanelB,
  qa as SideMenu,
  Ya as TableIconBtn,
  tn as TableSearch,
  on as TableSetting,
  uo as TransferBox,
  Tt as UploadGroup,
  Fo as WellCard,
  Bl as clearObj,
  Ea as dataFilterOrToUrl,
  Ka as decimalDigitsLimit,
  Xo as default,
  ht as downloadFileByFormSubmit,
  ct as downloadFileReaderFile,
  La as emptyInput,
  ft as fakeALinkClick,
  Ra as fileExport,
  We as findCollection,
  hl as findPath,
  Ma as formDataHeadConfig,
  Ge as fullScreenImgByDom,
  It as fullScreenImgPreview,
  Pa as getColumnsKeys,
  ul as getFileSrc,
  Kl as getFileTypeByName,
  Al as getFileTypeIconByName,
  pt as getStringWidth,
  vt as hasPermission,
  Sa as htmlDecode,
  Ta as htmlEncode,
  Ga as htmlPrint,
  Da as isEmptyValue,
  dl as isImgByFile,
  gt as isNaN,
  $a as isNumberValue,
  ge as isValidValue,
  Ot as messageBox,
  P as myTypeof,
  Ua as oneOf,
  xl as removeEmptyValue,
  wt as setInterval,
  Le as setTimeout,
  je as setValByOption,
  bt as siblingElems,
  Ia as stopBubbling,
  Na as stringLength,
  Fa as toFormData,
  dt as toHump,
  mt as toLine,
  yt as tooltipManual,
  yl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
