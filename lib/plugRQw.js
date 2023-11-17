var $t = Object.defineProperty;
var Dt = (a, o, e) => o in a ? $t(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e;
var Ze = (a, o, e) => (Dt(a, typeof o != "symbol" ? o + "" : o, e), e);
import { getCurrentInstance as hl, defineComponent as ue, resolveComponent as j, openBlock as B, createElementBlock as $, normalizeClass as Ae, normalizeStyle as Q, createBlock as q, createCommentVNode as me, renderSlot as xe, ref as H, computed as P, withDirectives as ye, unref as m, createElementVNode as L, toDisplayString as W, createVNode as E, withCtx as z, createTextVNode as fe, vShow as be, resolveDirective as at, h as ge, Fragment as pe, renderList as ve, onBeforeMount as Nt, watch as ke, nextTick as Pe, isRef as Ue, onMounted as Ge, withModifiers as Et, mergeProps as al, onUnmounted as Gt, shallowRef as wl, triggerRef as zt, onBeforeUnmount as Ht, createSlots as Xe } from "vue";
import Wt from "deepmerge";
import { isObject as jt, isFunction as qt, isPlainObject as Je, cloneDeep as se, isEmpty as Be, isBoolean as Jt, isNumber as Ye, debounce as Yt, isString as nt, last as dl, isEqual as ll, first as Vl, find as _l, indexOf as Wl, findIndex as ot, remove as Xt } from "lodash-es";
import ol from "sweetalert";
import { Tooltip as Zt, TableColumnConfig as Qt, Radio as ea, Input as la, Modal as Ne, Icon as ta, Button as kl } from "view-ui-plus";
import { useRouter as aa, useRoute as na } from "vue-router";
import { useI18n as oa } from "vue-i18n";
import Cl from "axios";
import ia from "ar-cascader";
import { Toolbar as sa, Editor as ra } from "@wangeditor/editor-for-vue";
import Qe from "moment";
import { Boot as ua } from "@wangeditor/editor";
const it = {
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
    return t.length === 1 && typeof t[0] == "object" && (u = t[0]), (!u || !u.hasOwnProperty) && (u = {}), e === void 0 ? "" : e.replace(da, (n, c, s, p) => {
      let r;
      return e[p - 1] === "{" && e[p + n.length] === "}" ? s : (r = a(u, s) ? u[s] : null, r ?? "");
    });
  }
  return o;
}
const fa = ca();
let cl = it;
const pa = {
  zh: it
};
let jl, ql = {}, Te, ma = function(a, o) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(a, o);
  if (Te && Te.global)
    return Te.global.t(a, o);
  if (Te && Te.locale) {
    if (!ql[Te.locale] || jl != Te.locale) {
      ql[Te.locale] = !0;
      let e = Te.getLocaleMessage(Te.locale) || {}, t = Wt(pa[Te.locale], e, { clone: !0 });
      cl = t, Te.setLocaleMessage(Te.locale, t), jl = Te.locale;
    }
    return Te.hlang(a, o);
  }
};
const $e = function(a, o) {
  let e = ma.apply(this, [a, o]);
  if (e != null)
    return e;
  const t = a.split(".");
  let u = cl;
  for (let n = 0, c = t.length; n < c; n++) {
    const s = t[n];
    if (e = u[s], n === c - 1)
      return fa(e, o);
    if (!e)
      return "";
    u = e;
  }
  return "";
}, ha = function(a) {
  cl = a || cl;
}, ya = function(a) {
  Te = a;
}, fl = {
  use: ha,
  t: $e,
  i18n: ya
};
function S(a, o) {
  var t, u, n;
  const e = (n = (u = (t = hl()) == null ? void 0 : t.appContext) == null ? void 0 : u.config) == null ? void 0 : n.globalProperties;
  return $e.apply(e, [a, o]);
}
const st = /* @__PURE__ */ ue({
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
      return B(), $("div", {
        class: Ae({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: Q({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: t
      }, [
        e.icon ? (B(), q(c, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : me("", !0),
        xe(u.$slots, "default")
      ], 6);
    };
  }
}), va = { class: "headerTxtAM" }, ga = { class: "contentAM" }, ba = /* @__PURE__ */ ue({
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
    let u = H(!1);
    const n = P(() => typeof t.headerFontSize == "number" ? t.headerFontSize + "px" : t.headerFontSize), c = P(() => ({ zIndex: t.zIndex }));
    function s() {
      u.value = !0, e("on-open");
    }
    function p(r) {
      u.value = !1, e("on-close", r === !0);
    }
    return o({
      open: s,
      close: p
    }), (r, d) => ye((B(), $("div", {
      class: "fullScreenPopBoxAM",
      style: Q(m(c))
    }, [
      L("div", {
        class: "headerAM",
        style: Q({ color: t.headerColor, backgroundColor: t.headerBg, fontSize: m(n) })
      }, [
        L("span", va, W(r.title || m(S)("r.title")), 1),
        E(st, {
          icon: "md-return-left",
          onClick: p
        }, {
          default: z(() => [
            fe(W(m(S)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      L("div", ga, [
        xe(r.$slots, "default")
      ])
    ], 4)), [
      [be, m(u)]
    ]);
  }
}), ka = { class: "msg" }, wa = /* @__PURE__ */ ue({
  __name: "Hello",
  setup(a) {
    let o = H("Greetings from Ricky.");
    return (e, t) => (B(), $("span", ka, W(m(o)), 1));
  }
});
function yl() {
  const { appContext: a } = hl();
  return a.config.globalProperties;
}
const Va = /* @__PURE__ */ ue({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => yl().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(a, { emit: o }) {
    const e = a, t = P(() => Math.floor(e.size / 17 * 12) + "px");
    function u(n) {
      e.disabled || o("click", n);
    }
    return (n, c) => {
      const s = j("Icon"), p = at("has");
      return ye((B(), $("div", {
        class: Ae(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: u,
        style: Q({ "font-size": m(t) })
      }, [
        E(s, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        fe(" " + W(e.name || m(S)("r.button")), 1)
      ], 6)), [
        [p, n.has]
      ]);
    };
  }
}), _a = { class: "c404K" }, Ca = /* @__PURE__ */ L("div", { class: "t404" }, "404", -1), Aa = { class: "ct404" }, Ba = { class: "p404" }, xa = /* @__PURE__ */ ue({
  __name: "Page404",
  setup(a) {
    const e = hl().appContext.config.globalProperties.$router;
    function t() {
      e.go(-1);
    }
    return (u, n) => {
      const c = j("Button");
      return B(), $("div", _a, [
        Ca,
        L("div", Aa, "UH OH! " + W(m(S)("r.pageNotFound")), 1),
        L("div", Ba, W(m(S)("r.notFoundMsg")), 1),
        E(c, {
          class: "bt404",
          onClick: t
        }, {
          default: z(() => [
            fe(W(m(S)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Le(a, o, e) {
  const t = (...u) => $e.apply(this, u);
  return new Promise((u, n) => {
    if (typeof a == "object" && !Array.isArray(a)) {
      let c = t("r.confirm"), s = t("r.cancel"), p = !1, r = "swalConfirmBt", d = "swalCancelBt";
      const f = /^HTML.*Element$/;
      a.type && (a.icon = a.type) && delete a.type, a.content && (a.text = a.content) && delete a.content, a.className = a.className || "swalBoxX";
      let _ = "";
      a.text && f.test(N(a.text)) ? _ = "content" : a.text && N(a.text) === "String" && (_ = "text"), a.buttons && (typeof a.buttons == "object" && !Array.isArray(a.buttons) ? a.buttons.cancel && (a.buttons.cancel.text && (s = a.buttons.cancel.text) && (p = !0), a.buttons.cancel.className && (d = a.buttons.cancel.className), a.buttons.confirm.text && (c = a.buttons.confirm.text), a.buttons.confirm.className && (r = a.buttons.confirm.className)) : Array.isArray(a.buttons) && (a.buttons[0] && (s = a.buttons[0], p = !0), a.buttons[1] && (c = a.buttons[1]))), ol({
        title: a.title,
        icon: a.icon,
        className: a.className,
        [_]: a.text,
        buttons: {
          confirm: {
            text: c,
            value: !0,
            visible: !0,
            className: r
          },
          cancel: {
            text: s,
            value: null,
            visible: p,
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
      }).then((s) => {
        u(s);
      }).catch((s) => {
        n(s);
      });
    } else if (typeof a == "boolean")
      !a && ol.close && ol.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function rt(a) {
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
function rl(a) {
  return new Promise((o) => {
    let e = new FileReader();
    e.readAsDataURL(a), e.onloadend = () => {
      o(e.result);
    };
  });
}
function Fl(a) {
  return (a == null ? void 0 : a.split(".").pop().toLocaleLowerCase()) || "";
}
function ul(a) {
  return N(a) === "String" && a.indexOf("image") > -1;
}
function Al(a) {
  const o = Fl(a);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(o) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(o) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(o) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(o) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(o) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(o) > -1 && (e = "ios-videocam"), e;
}
function ut(a, o) {
  let e = document.createElement("a");
  e.href = o, e.download = a, dt(e);
}
function dt(a) {
  let o = document.createEvent("MouseEvents");
  o.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(o);
}
function pl({
  group: a,
  condition: o,
  pathKey: e,
  childKey: t = "children",
  path: u = []
}) {
  if (a && jt(a)) {
    if (qt(o)) {
      if (Je(a)) {
        let n = a, c = se(u);
        if (o(n))
          return e && n[e] && c.push(n[e]), c;
        if (n[t] && !Be(n[t])) {
          e && n[e] && c.push(n[e]);
          let s = pl({
            group: n[t],
            condition: o,
            pathKey: e,
            childKey: t,
            path: c
          });
          if (!Be(s))
            return s;
        }
      } else if (Array.isArray(a))
        for (let n of a) {
          let c = se(u);
          if (o(n))
            return e && n[e] ? c.push(n[e]) : c.push(String(a.indexOf(n))), c;
          if (n[t] && n[t].length > 0) {
            e && n[e] ? c.push(n[e]) : c.push(String(a.indexOf(n)));
            let s = pl({
              group: n[t],
              condition: o,
              pathKey: e,
              childKey: t,
              path: c
            });
            if (!Be(s))
              return s;
          }
        }
    } else if (Array.isArray(a))
      for (let n of a) {
        let c = se(u);
        if (n === o)
          return c.push(String(a.indexOf(n))), c;
      }
  }
  return [];
}
function ct(a, o = 12) {
  if (N(a) === "String" && a.length > 0) {
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
function La(a) {
  a = a || window.Event, a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
}
const Oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: ut,
  emptyInput: Ia,
  fakeALinkClick: dt,
  findPath: pl,
  getFileSrc: rl,
  getFileTypeByName: Fl,
  getFileTypeIconByName: Al,
  getStringWidth: ct,
  htmlDecode: Sa,
  htmlEncode: Ta,
  isImgByFile: ul,
  stopBubbling: La,
  toHump: rt
}, Symbol.toStringTag, { value: "Module" }));
function N(a) {
  return Object.prototype.toString.call(a).replace(/\[object |]/g, "");
}
function ft(a) {
  return a.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function ml(a) {
  let o = N(a);
  if (o === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = N(a[e]);
        t === "String" ? a[e] = a[e].trim() : (t === "Object" || t === "Array") && ml(a[e]);
      }
  } else if (o === "Array")
    for (let e = 0, t = a.length; e < t; e++) {
      let u = N(a[e]);
      u === "String" ? a[e] = a[e].trim() : (u === "Array" || u === "Object") && ml(a[e]);
    }
  return a;
}
function Bl(a, o = []) {
  if (N(a) === "Array")
    return a.forEach((e, t) => {
      switch (N(e)) {
        case "Array":
        case "Object":
          Bl(e);
          break;
        default:
          a[t] = null;
      }
    }), a;
  if (N(a) === "Object") {
    for (let e in a)
      if (a.hasOwnProperty(e)) {
        let t = !0;
        for (let u of o)
          if (u === e) {
            t = !1;
            break;
          }
        if (t)
          switch (N(a[e])) {
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
  let t, u = "notFoundC", n = function(c, s) {
    if (Array.isArray(c)) {
      if (N(s) === "Function" && s(c))
        return u = c, [];
      for (let p of c) {
        if (u !== "notFoundC")
          break;
        if (N(s) === "Function" && s(p) || p === s)
          return u = p, [c.indexOf(p)];
        if (N(p) === "Array" || N(p) === "Object") {
          let r = n(p, s);
          if (r !== void 0)
            return [c.indexOf(p), ...r];
        }
      }
    } else if (N(c) === "Object") {
      if (N(s) === "Function" && s(c))
        return u = c, [];
      for (let p in c) {
        if (u !== "notFoundC")
          break;
        if (c.hasOwnProperty(p)) {
          if (N(s) === "Function" && s(p) || c[p] === s)
            return u = c[p], [p];
          if (N(c[p]) === "Object" || N(c[p]) === "Array") {
            let r = n(c[p], s);
            if (r !== void 0)
              return [p, ...r];
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
function Ra(a, o = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${o}})(\\d+$)`), t = a && String(a) || "";
  return e.test(t) ? Number(t.replace(e, "$1")) : a;
}
function pt(a, o = {}, e = "get") {
  let t = document.createElement("form"), u = document.getElementsByTagName("body")[0];
  u.appendChild(t), t.setAttribute("style", "display:none"), t.setAttribute("target", ""), t.setAttribute("method", e);
  let n = a;
  if (window && window.hasOwnProperty("g")) {
    let c = Object.keys(window.g).filter((s) => s.indexOf("URL") > -1).map((s) => s.replace("URL", ""));
    for (let s of c) {
      let p = new RegExp("^/" + s + "(?=/.*$)", "i");
      if (p.test(a) && window.g[s + "URL"]) {
        n = window.g[s + "URL"] + a.replace(p, "");
        break;
      }
    }
  }
  if (t.setAttribute("action", n), Je(o)) {
    for (let s in o)
      if (o.hasOwnProperty(s) && (o[s] || o[s] === 0 || o[s] === !1 || o[s] === "")) {
        let p = document.createElement("input");
        p.setAttribute("type", "hidden"), p.setAttribute("name", s), p.setAttribute("value", o[s]), t.appendChild(p);
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
    Le.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  pt(a, o, e);
}
function Ka(a, o, e = !1) {
  let t;
  if (a && N(o) === "Array") {
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
function we(a) {
  return a != null && a !== "";
}
function $a(a) {
  return /^-?\d+(.\d+)?$/.test(a);
}
function mt(a, o = !1, e = "") {
  return function(t, u) {
    var p, r;
    let n;
    if (Array.isArray(a)) {
      let d = [];
      for (let f of a)
        we((p = u.row) == null ? void 0 : p[f]) && d.push(u.row[f]);
      n = d.join(e);
    } else
      typeof a == "function" ? n = a(u) : n = (r = u.row) == null ? void 0 : r[a];
    let c = ct(n), s = u.column._width;
    return n && c > s ? ge(
      Zt,
      {
        style: {
          width: "100%"
        },
        content: n,
        maxWidth: s * 2
      },
      () => ge(
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
    ) : ge("span", o && !we(n) ? "--" : n);
  };
}
function Da(a) {
  if (Je(a)) {
    for (let o in a)
      if (a.hasOwnProperty(o) && we(a[o]))
        return !1;
    return !0;
  } else if (Array.isArray(a)) {
    for (let o of a)
      if (we(o))
        return !1;
    return !0;
  }
  return !we(a);
}
function Na(a) {
  return N(a) === "String" ? a.replace(/[^\x00-\xff]/g, "01").length : N(a) === "Number" ? (a += "", a.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function je({
  group: a,
  condition: o,
  key: e,
  val: t,
  childKey: u = "children"
}) {
  if (N(a) !== "Array" || N(o) !== "Function" || N(e) !== "String" || N(u) !== "String")
    return !1;
  a.forEach((n) => {
    o(n) && (N(t) === "Function" ? n[e] = t(n[e]) : n[e] = t), N(n[u]) === "Array" && n[u].length > 0 && je({
      group: n[u],
      condition: o,
      key: e,
      val: t,
      childKey: u
    });
  });
}
function ht(a) {
  let o = sessionStorage.getItem("btnPermissions");
  return o ? o.split(",").indexOf(a) > -1 : !1;
}
function yt(a) {
  return N(a) === "Number" && String(a) === "NaN";
}
function Ea(a, o = !1, e = !1) {
  if (N(a) !== "Object")
    return a;
  let t = Object.assign(a, {}), u = "";
  for (let n in t)
    if (t.hasOwnProperty(n)) {
      let c = t[n];
      c === void 0 || c === "" || N(c) === "String" && c.trim() === "" || c === null || yt(c) ? e ? o ? u += n + "=&" : t[n] = "" : delete t[n] : o && (u += n + "=" + c + "&");
    }
  return o ? u.length > 0 ? u.substring(0, u.length - 1) : "" : t;
}
function xl(a) {
  let o = {};
  if (Array.isArray(a)) {
    o = [];
    for (let e of a)
      Array.isArray(e) || Je(e) ? o.push(xl(e)) : we(e) && o.push(e);
  } else if (Je(a))
    for (let e in a)
      a.hasOwnProperty(e) && (Array.isArray(a[e]) || Je(a[e]) ? o[e] = xl(a[e]) : we(a[e]) && (o[e] = a[e]));
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
function vt(a) {
  let o = [], e = a;
  for (; a.previousSibling && (a = a.previousSibling); )
    a.nodeType === 1 && o.push(a);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && o.push(e);
  return o;
}
const gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Bl,
  dataFilterOrToUrl: Ea,
  decimalDigitsLimit: Ra,
  downloadFileByFormSubmit: pt,
  fileExport: Pa,
  findCollection: We,
  formDataHeadConfig: Ma,
  getColumnsKeys: Ka,
  hasPermission: ht,
  htmlPrint: Ga,
  isEmptyValue: Da,
  isNaN: yt,
  isNumberValue: $a,
  isValidValue: we,
  myTypeof: N,
  oneOf: Ua,
  removeEmptyValue: xl,
  setValByOption: je,
  siblingElems: vt,
  stringLength: Na,
  toFormData: Fa,
  toLine: ft,
  tooltipManual: mt,
  trimObj: ml
}, Symbol.toStringTag, { value: "Module" })), za = { class: "groupBoxRP" }, Ha = ["onClick"], Wa = /* @__PURE__ */ ue({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(a) {
    const o = a, e = aa();
    function t(n) {
      return n.path === o.pathName ? "active" : "";
    }
    function u(n, c) {
      n.preventDefault();
      let s = n.target;
      if (!c.children && !s.classList.contains("active")) {
        e.push(c.path);
        return;
      }
      let p = s.parentNode, r = vt(p);
      for (let d of r) {
        d.classList.remove("open");
        const f = d.querySelectorAll(".open");
        for (let _ of f)
          _.classList.remove("open");
      }
      p.classList.toggle("open");
    }
    return (n, c) => {
      const s = j("sideMenuGroup", !0);
      return B(), $("ul", za, [
        (B(!0), $(pe, null, ve(o.data, (p, r) => (B(), $("li", {
          class: Ae({ dropItemRP: p.children }),
          key: p.path + r
        }, [
          L("div", {
            class: Ae(["menuTxtR", t(p)]),
            onClick: (d) => u(d, p),
            style: Q({ paddingLeft: p.level * 20 + "px" })
          }, W(p.name || "-- no name --"), 15, Ha),
          p.children ? (B(), q(s, {
            key: 0,
            data: p.children,
            "path-name": o.pathName
          }, null, 8, ["data", "path-name"])) : me("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), ja = { class: "menuListR" }, qa = /* @__PURE__ */ ue({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(a, { emit: o }) {
    const e = a, t = na(), u = H(!0), n = H(), c = H(), s = P(() => u.value ? S("r.hideMenu") : S("r.showMenu")), p = P(() => u.value ? "ios-arrow-back" : "ios-arrow-forward");
    Nt(() => {
      let f = localStorage.getItem("menuDisplayR") || "";
      f !== "" ? u.value = JSON.parse(f) : (u.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ke(
      () => t.path,
      (f) => {
        n.value = f, Pe(d);
      },
      { immediate: !0 }
    );
    function r() {
      u.value = !u.value, localStorage.setItem("menuDisplayR", JSON.stringify(u.value)), o("on-change", u.value);
    }
    function d() {
      let f = c.value.querySelectorAll(".dropItemRP");
      for (let _ of f)
        _.querySelector(".active") && !_.classList.contains("open") && _.classList.add("open");
    }
    return (f, _) => {
      const b = j("Icon");
      return B(), $("div", {
        ref_key: "menuRef",
        ref: c,
        class: "menuBoxRP"
      }, [
        ye(L("div", ja, [
          E(Wa, {
            data: e.data,
            pathName: m(n)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [be, m(u)]
        ]),
        E(b, {
          type: m(p),
          size: 25,
          class: Ae([{ showIco: !m(u) }, "menuShowHideIco"]),
          title: m(s),
          onClick: r,
          color: m(u) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Ja = ["title"], Ya = /* @__PURE__ */ ue({
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
      const c = j("Icon"), s = at("has");
      return ye((B(), $("div", {
        class: Ae(["tableBtnsG", { disabled: e.disabled }]),
        onClick: t,
        title: e.title || m(S)("r.button")
      }, [
        E(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Ja)), [
        [s, e.has]
      ]);
    };
  }
}), Xa = { class: "contentX" }, Za = { class: "arrowA" }, Tl = /* @__PURE__ */ ue({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(a) {
    const o = a, e = H(!0), t = P(() => e ? "background:" + o.bg || "transparent" : "");
    return (u, n) => {
      const c = j("Icon");
      return B(), $("div", {
        style: Q(m(t))
      }, [
        ye(L("div", Xa, [
          xe(u.$slots, "default")
        ], 512), [
          [be, m(e)]
        ]),
        L("div", Za, [
          L("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (s) => e.value = !m(e))
          }, [
            E(c, {
              type: m(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Qa = { class: "contentZ" }, en = /* @__PURE__ */ ue({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = P({
      get() {
        return e.modelValue;
      },
      set(n) {
        o("update:modelValue", n);
      }
    }), u = P(() => t.value ? "background:" + e.bg : "");
    return (n, c) => (B(), $("div", {
      style: Q(m(u))
    }, [
      ye(L("div", Qa, [
        xe(n.$slots, "default")
      ], 512), [
        [be, m(t)]
      ])
    ], 4));
  }
});
let Sl = [], Il = [];
const ln = function(a) {
  a && a.beforeEach ? a.beforeEach(() => {
    Sl.map((o) => {
      window.clearTimeout(o);
    }), Il.map((o) => {
      window.clearInterval(o);
    }), Sl.length = 0, Il.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Se = function(a, o) {
  let e = window.setTimeout(a, o);
  return Sl.push(e), e;
}, bt = function(a, o) {
  let e = window.setInterval(a, o);
  return Il.push(e), e;
}, tn = /* @__PURE__ */ ue({
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
    const u = P({
      get() {
        return e.modelValue;
      },
      set(p) {
        o("update:modelValue", p);
      }
    }), n = P({
      get() {
        return e.open;
      },
      set(p) {
        o("on-toggle", p);
      }
    }), c = P(() => n.value ? "ios-arrow-up" : "ios-arrow-down");
    function s() {
      t || (t = !0, o("on-search", u.value), Se(() => {
        t = !1;
      }, 2e3));
    }
    return (p, r) => {
      const d = j("Input"), f = j("icon");
      return B(), $("div", {
        class: "tableSearchV",
        style: Q({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        xe(p.$slots, "default", {}, () => [
          E(d, {
            modelValue: m(u),
            "onUpdate:modelValue": r[0] || (r[0] = (_) => Ue(u) ? u.value = _ : null),
            style: Q({ width: e.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: e.placeholder || m(S)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        ye(L("span", {
          class: "sbt",
          onClick: r[1] || (r[1] = (_) => n.value = !m(n)),
          style: Q({ color: e.btnColor })
        }, [
          E(f, {
            type: m(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          fe(W(m(S)("r.adSearch")), 1)
        ], 4), [
          [be, e.showBtn]
        ])
      ], 4);
    };
  }
}), an = { class: "tabSetF" }, nn = { class: "topCheck" }, on = /* @__PURE__ */ ue({
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
    const e = a, t = H(!0), u = H(!1), n = H(!1), c = H([]), s = P(() => {
      let y = S("r.unknown");
      return e.modelValue.length > c.value.length && (c.value = se(e.modelValue)), c.value.map((V) => {
        let T = { label: V && V.title || y };
        return V && V.disableShowSetting && (T.disabled = !0), T;
      });
    }), p = P(() => s.value.filter((y) => y.disabled)), r = P({
      get() {
        return e.modelValue.map((y) => y && y.title || S("r.unknown"));
      },
      set(y) {
        let V = c.value.filter((T) => {
          for (let w of y)
            if (w === T.title)
              return !0;
          return !1;
        });
        o("update:modelValue", V);
      }
    }), { locale: d } = oa();
    Ge(() => {
      let y = S("r.unknown"), V;
      d.value ? V = localStorage.getItem(e.sKey + "_" + d.value) : V = localStorage.getItem(e.sKey), V ? r.value = JSON.parse(decodeURI(V)) : e.defaultCheck && (r.value = e.modelValue.filter((T) => T.showSettingCheck).map((T) => T && T.title || y));
    });
    function f(y) {
      y.length === s.value.length ? (t.value = !1, u.value = !0) : y.length > p.value.length ? (t.value = !0, u.value = !1) : (t.value = !1, u.value = !1);
    }
    ke(() => r.value, f, {
      immediate: !0,
      deep: !0
    });
    function _() {
      n.value || (n.value = !0);
    }
    function b() {
      d.value ? localStorage.setItem(e.sKey + "_" + d.value, encodeURI(JSON.stringify(r.value))) : localStorage.setItem(e.sKey, encodeURI(JSON.stringify(r.value))), n.value = !1;
    }
    function g() {
      t.value ? u.value = !1 : u.value = !u.value, t.value = !1, u.value ? r.value = s.value.map((y) => y.label) : r.value = p.value.map((y) => y.label);
    }
    return (y, V) => {
      const T = j("Icon"), w = j("Checkbox"), C = j("CheckboxGroup");
      return B(), $("div", an, [
        L("div", {
          class: "tabSetBt",
          onClick: _
        }, [
          E(T, {
            type: "md-settings",
            size: "17"
          }),
          L("span", null, W(m(S)("r.tabSetting")), 1)
        ]),
        ye(L("div", {
          class: "tabSetCard",
          style: Q({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          L("div", nn, [
            E(w, {
              indeterminate: m(t),
              modelValue: m(u),
              "onUpdate:modelValue": V[0] || (V[0] = (x) => Ue(u) ? u.value = x : null),
              onClick: Et(g, ["prevent"])
            }, {
              default: z(() => [
                fe(W(m(S)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            L("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: b
            }, W(m(S)("r.confirm")), 1)
          ]),
          E(C, {
            modelValue: m(r),
            "onUpdate:modelValue": V[1] || (V[1] = (x) => Ue(r) ? r.value = x : null)
          }, {
            default: z(() => [
              (B(!0), $(pe, null, ve(m(s), (x, I) => (B(), q(w, {
                class: "setItem",
                label: x && x.label,
                key: "tabSet_" + e.sKey + I,
                disabled: x && x.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [be, m(n)]
        ])
      ]);
    };
  }
});
let He = 0, tl = document.createElement("div");
tl.setAttribute("class", "spinModal");
tl.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(tl);
};
function Jl(a) {
  a ? tl.classList.add("show") : tl.classList.remove("show");
}
function kt(a) {
  let o = He;
  a ? He++ : He > 0 && He--, o !== He && (He === 0 ? Jl(!1) : o === 0 && Jl(!0));
}
const sn = window.location.origin;
let qe = null;
const Yl = (...a) => $e.apply(qe, a);
let Oe = Cl.create({
  baseURL: sn,
  withCredentials: !0
  // 允许携带cookie
});
function rn() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Oe.interceptors.request.use(
  (a) => a,
  (a) => Promise.reject(a)
);
function Xl() {
  var a, o;
  if (Oe.store)
    if (typeof Oe.store == "function") {
      const e = Oe.store();
      e.logout && e.logout();
    } else
      (o = (a = Oe.store) == null ? void 0 : a.dispatch) == null || o.call(a, "logout");
  else
    rn();
}
Oe.interceptors.response.use(
  (a) => {
    var o, e;
    return qe && (((o = a == null ? void 0 : a.data) == null ? void 0 : o.code) === 403 || ((e = a == null ? void 0 : a.data) == null ? void 0 : e.code) === 409) && qe.messageBox({
      content: Yl("r.http." + a.data.code),
      onOk: Xl
    }), a;
  },
  (a) => {
    var o, e;
    return qe && (((o = a == null ? void 0 : a.response) == null ? void 0 : o.status) === 403 || ((e = a == null ? void 0 : a.response) == null ? void 0 : e.status) === 409) && qe.messageBox({
      content: Yl("r.http." + a.response.status),
      onOk: Xl
    }), console.warn("请求出错：", a), Promise.reject(a);
  }
);
function De(a, o, e, t) {
  t && t.spin && kt(!1);
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
  return new Promise((s, p) => {
    switch (a) {
      case "get":
        Oe.get(o, { params: e }).then((d) => {
          let f = De(d, t, u, n);
          f ? s(f) : p(d);
        }).catch((d) => {
          De({}, t, u, n), p(d);
        });
        break;
      case "delete":
        let r = c ? "params" : "data";
        Oe.delete(o, { [r]: e }).then((d) => {
          let f = De(d, t, u, n);
          f ? s(f) : p(d);
        }).catch((d) => {
          De({}, t, u, n), p(d);
        });
        break;
      case "post":
        Oe.post(o, e, n).then((d) => {
          let f = De(d, t, u, n);
          f ? s(f) : p(d);
        }).catch((d) => {
          De({}, t, u, n), p(d);
        });
        break;
      case "put":
        Oe.put(o, e, n).then((d) => {
          let f = De(d, t, u, n);
          f ? s(f) : p(d);
        }).catch((d) => {
          De({}, t, u, n), p(d);
        });
        break;
    }
  });
}
function il(a, o, e = {}, t, u, n, c) {
  return new Promise((s, p) => {
    var r;
    if (o) {
      n && n.spin && kt(!0);
      let d = o;
      if (window && window.hasOwnProperty("g")) {
        const b = window.g;
        let g = Object.keys(b).filter((y) => y.indexOf("URL") > -1).map((y) => y.replace("URL", ""));
        for (let y of g) {
          let V = new RegExp("^/" + y + "(?=/.*$)", "i");
          if (V.test(o) && b[y + "URL"]) {
            d = b[y + "URL"] + o.replace(V, "");
            break;
          }
        }
      }
      let f;
      if (((r = n == null ? void 0 : n.headers) == null ? void 0 : r["Content-Type"]) === "multipart/form-data")
        f = e;
      else if (e && !Be(e))
        if (Array.isArray(e)) {
          f = [];
          for (let b of e)
            (b || b === 0 || b === !1 || b === "" && n && !n.noEmptyStr) && f.push(b);
        } else {
          f = {};
          for (let b in e)
            e.hasOwnProperty(b) && (e[b] || e[b] === 0 || e[b] === !1 || e[b] === "" && n && !n.noEmptyStr) && (f[b] = e[b]);
        }
      let _ = a.toLowerCase();
      un(_, d, f, t, u, n, c).then((b) => {
        s(b);
      }).catch((b) => {
        p(b);
      });
    } else
      console.error("没有请求地址:url"), p("没有请求地址:url");
  });
}
const Ke = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(a, o) {
    Oe.store = a, qe = o.config.globalProperties;
  },
  post(a, o, e, t, u) {
    return new Promise((n, c) => {
      il("post", a, o, e, t, u).then((s) => {
        n(s);
      }).catch((s) => {
        c(s);
      });
    });
  },
  put(a, o, e, t, u) {
    return new Promise((n, c) => {
      il("put", a, o, e, t, u).then((s) => {
        n(s);
      }).catch((s) => {
        c(s);
      });
    });
  },
  get(a, o, e, t, u) {
    return new Promise((n, c) => {
      il("get", a, o, e, t, u).then((s) => {
        n(s);
      }).catch((s) => {
        c(s);
      });
    });
  },
  delete(a, o, e, t, u, n = !0) {
    return new Promise((c, s) => {
      il("delete", a, o, e, t, u, n).then((p) => {
        c(p);
      }).catch((p) => {
        s(p);
      });
    });
  },
  all: Cl.all,
  spread: Cl.spread,
  config: Oe
}, dn = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, cn = { class: "topBtn" }, fn = { class: "fullHeight relativeBox" }, pn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, mn = { class: "pageContainer" }, hn = 300, Ll = /* @__PURE__ */ ue({
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
    const t = a, { globalProperties: u } = hl().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Qt });
    const c = u.pageSizes || [10, 20, 30, 40], s = H(t.data), p = H(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || t.pageSize
    ), r = H(1), d = H(0);
    let f = [], _, b, g = t.orderKey, y = t.orderDefault;
    const V = P(() => {
      for (let K of t.columns)
        if (K.fixed)
          return !0;
      return !1;
    }), T = P(() => t.selectionFixed || V.value), w = P(() => {
      let K = {
        ...t.searchData,
        current: r.value,
        size: p.value
      };
      return t.sortable === "custom" && (t.orderKeyFormat === "underline" ? K[y] = ft(g) : t.orderKeyFormat === "camelcase" && (K[y] = rt(g))), K;
    }), C = P(() => {
      let K = t.columns.filter((R) => R.type !== "selection");
      if (t.selection || t.radio) {
        let R;
        t.radio ? R = {
          title: " ",
          width: 65,
          render: (ce, de) => ge(ea, {
            value: de.row.btChecked
          })
        } : R = {
          type: "selection",
          width: 60
        }, t.selectionFixed && (R.fixed = t.selectionFixed), K.unshift(R);
      }
      return K.forEach((R) => {
        t.sortable === "custom" ? R.key && R.sortable !== !0 && R.sortable !== !1 && (R.sortable = "custom") : R.sortable = !1, R.align || (R.align = "center");
      }), t.tableEmptyTdHandle && K.forEach((R) => {
        R.key && R.render === void 0 && (R.tooltip ? R.render = mt(R.key, !0) : R.render = (ce, de) => {
          let Ve = de.row[R.key];
          return ce("span", Ve === "" || Ve === null || Ve === void 0 ? "--" : Ve);
        });
      }), K;
    }), x = P({
      get() {
        return s.value.map((K, R) => ({
          btKey: "bt-" + R,
          btChecked: !1,
          ...K
        }));
      },
      set(K) {
        s.value = K;
      }
    }), I = P(() => f.map((K) => K.id)), M = P(() => f.map((K) => K.btKey)), h = H();
    ke(() => t.searchData, O, { deep: !0 });
    function O() {
      r.value = 1, Re();
    }
    function v() {
      t.initData && Re();
    }
    function U(K) {
      s.value.unshift(se(K)), Se(() => {
        var R, ce;
        (ce = (R = h.value) == null ? void 0 : R.clickCurrentRow) == null || ce.call(R, 0);
      }, 100);
    }
    function Z(K, R, ce) {
      let de = null;
      if (Jt(R) && R ? de = b : Ye(R) && (de = R), de !== null) {
        let Ve = s.value[de];
        for (let ee in K)
          K.hasOwnProperty(ee) && (Ve[ee] = K[ee]);
        ce && Se(() => {
          var ee, Me;
          (Me = (ee = h.value) == null ? void 0 : ee.clickCurrentRow) == null || Me.call(ee, de);
        }, 10);
      }
    }
    function J(K) {
      s.value.splice(K, 1), Se(() => {
        var R, ce;
        (ce = (R = h.value) == null ? void 0 : R.clickCurrentRow) == null || ce.call(R, 0);
      }, 100);
    }
    function ne(K, R) {
      var ce, de;
      K.btChecked && t.radio || (t.selection || t.radio) && t.rowClickSelect && ((de = (ce = h.value) == null ? void 0 : ce.toggleSelect) == null || de.call(ce, R));
    }
    function he(K, R) {
      _ = R.btKey, b = Number(R.btKey.split("-")[1]), t.radio && (s.value[b].btChecked = !0);
    }
    function Ie(K) {
      if (t.radio)
        for (let R of x.value)
          R.btKey !== _ && (s.value[Number(R.btKey.split("-")[1])].btChecked = !1);
      f = K, e("on-selection-change", K);
    }
    function _e() {
      return se(f);
    }
    function G(K) {
      r.value = K, Re();
    }
    function re(K) {
      p.value = K, localStorage.setItem("btPageSize", String(K)), r.value === 1 && Re();
    }
    function oe({ key: K, order: R }) {
      y === "normal" ? (g = t.orderKey, y = t.orderDefault) : (g = K, y = R), r.value = 1, ie();
    }
    function F() {
      var K, R;
      if (t.radio) {
        if (M.value.length > 0 && x.value.length > 0) {
          let ce = M.value[0].split("-")[1];
          x.value[ce].btChecked = !1;
        }
      } else
        (R = (K = h.value) == null ? void 0 : K.selectAll) == null || R.call(K, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), _ = null, b = null;
    }
    function te() {
      s.value = [], F(), r.value = 1, d.value = 0;
    }
    function ie(K, R, ce) {
      return new Promise((de) => {
        K && (y = K), R && (g = R), t.url ? Ke.get(t.url, w.value, "", [], { spin: t.getDataLoading }).then((Ve) => {
          var Me, nl;
          let ee;
          ce || F(), typeof t.dataHandler == "function" ? ee = t.dataHandler(Ve) : ee = Ve, ee.data ? (ee.data.records || ee.data.records === null ? s.value = ee.data.records || [] : ee.data.page ? (ee.data.page.records || ee.data.page.records === null) && (s.value = ee.data.page.records || []) : ee.data.data ? (ee.data.data.records || ee.data.data.records === null) && (s.value = ee.data.data.records || []) : s.value = ee.data, d.value = ((Me = ee.data.page) == null ? void 0 : Me.total) || ((nl = ee.data.data) == null ? void 0 : nl.total) || ee.data.total || ee.total || 0, d.value === 0 && r.value > 1 && s.value && s.value.length === 0 ? r.value = 1 : r.value > 1 && d.value <= (r.value - 1) * p.value && (r.value--, Pe(function() {
            ie(K, R);
          })), e("on-data-change", ee), de(ee)) : (console.warn("请求返回数据有误，无法使用"), te(), e("on-data-change", ee));
        }).catch((Ve) => {
          console.warn(Ve), F(), te(), e("on-data-change", Ve);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Re(K, R, ce) {
      t.radio && (K || t.rowClickNum !== -1) ? ie(R, ce, K).then(() => {
        s.value.length > 0 && Se(() => {
          var de, Ve, ee, Me;
          K ? (Ve = (de = h.value) == null ? void 0 : de.clickCurrentRow) == null || Ve.call(de, b || 0) : (Me = (ee = h.value) == null ? void 0 : ee.clickCurrentRow) == null || Me.call(ee, t.rowClickNum);
        }, 10);
      }) : ie();
    }
    return Ge(v), o({
      selectedIds: I,
      addRow: U,
      setRowData: Z,
      deleteRow: J,
      getSelected: _e,
      clearSelect: F,
      clearTableData: te,
      getTableData: ie,
      getDataAndClickRow: Re
    }), (K, R) => {
      const ce = j("Table"), de = j("Page");
      return B(), $("div", dn, [
        ye(L("div", cn, [
          xe(K.$slots, "tableSetting"),
          xe(K.$slots, "topMsg"),
          xe(K.$slots, "topBtnGroup")
        ], 512), [
          [be, t.showTopRow]
        ]),
        L("div", {
          class: Ae(["tableContainer fullHeight", { noTop: !t.showTopRow, noPage: t.noPage }])
        }, [
          L("div", fn, [
            L("div", pn, [
              E(ce, al({
                ref_key: "tableRef",
                ref: h
              }, K.$attrs, {
                height: m(T) && hn || null,
                class: { noBorderTable: t.noBorderTable, fullHeightTable: !m(T), lightHeadO: t.lightHead },
                columns: m(C),
                data: m(x),
                "highlight-row": t.radio || t.highlightRow,
                onOnSelect: he,
                onOnSelectionChange: Ie,
                onOnSortChange: oe,
                onOnRowClick: ne
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        ye(L("div", mn, [
          E(de, {
            modelValue: m(r),
            "onUpdate:modelValue": R[0] || (R[0] = (Ve) => Ue(r) ? r.value = Ve : null),
            "page-size-opts": m(c),
            total: m(d),
            "page-size": m(p),
            "show-sizer": "",
            "show-total": "",
            showElevator: !t.noElevator,
            size: t.pageComponentSize,
            onOnChange: G,
            onOnPageSizeChange: re
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [be, !t.noPage]
        ])
      ], 512);
    };
  }
}), wt = /* @__PURE__ */ ue({
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
    const e = a, t = P({
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
    }), u = P({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(r) {
        o("update:modelValue", {
          key: t.value,
          val: r
        });
      }
    }), n = P(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = P(() => ({ width: e.itemWidth + "px" }));
    function s(r) {
      var d;
      ((d = r == null ? void 0 : r.target) == null ? void 0 : d.value) !== void 0 && p({
        key: t.value,
        val: r.target.value
      });
    }
    const p = Yt((r) => {
      o("on-change", r);
    }, 500);
    return (r, d) => {
      const f = j("Option"), _ = j("Select"), b = j("Input");
      return B(), $("div", null, [
        E(_, {
          modelValue: m(t),
          "onUpdate:modelValue": d[0] || (d[0] = (g) => Ue(t) ? t.value = g : null),
          style: Q(m(n)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: z(() => [
            (B(!0), $(pe, null, ve(e.selectOption, (g, y) => (B(), q(f, {
              value: g.val,
              key: "selectInputOp" + g.value + y,
              style: Q({ textAlign: e.labelTextAlign })
            }, {
              default: z(() => [
                fe(W(g.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        E(b, {
          modelValue: m(u),
          "onUpdate:modelValue": d[1] || (d[1] = (g) => Ue(u) ? u.value = g : null),
          placeholder: e.placeholder || m(S)("r.pInput"),
          style: Q(m(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: s
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vn(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Vt = { exports: {} };
(function(a, o) {
  (function(e, t) {
    a.exports = t();
  })(yn, function() {
    function e(f) {
      var _ = [];
      return f.AMapUI && _.push(t(f.AMapUI)), f.Loca && _.push(u(f.Loca)), Promise.all(_);
    }
    function t(f) {
      return new Promise(function(_, b) {
        var g = [];
        if (f.plugins)
          for (var y = 0; y < f.plugins.length; y += 1)
            c.AMapUI.plugins.indexOf(f.plugins[y]) == -1 && g.push(f.plugins[y]);
        if (s.AMapUI === n.failed)
          b("前次请求 AMapUI 失败");
        else if (s.AMapUI === n.notload) {
          s.AMapUI = n.loading, c.AMapUI.version = f.version || c.AMapUI.version, y = c.AMapUI.version;
          var V = document.body || document.head, T = document.createElement("script");
          T.type = "text/javascript", T.src = "https://webapi.amap.com/ui/" + y + "/main.js", T.onerror = function(w) {
            s.AMapUI = n.failed, b("请求 AMapUI 失败");
          }, T.onload = function() {
            if (s.AMapUI = n.loaded, g.length)
              window.AMapUI.loadUI(g, function() {
                for (var w = 0, C = g.length; w < C; w++) {
                  var x = g[w].split("/").slice(-1)[0];
                  window.AMapUI[x] = arguments[w];
                }
                for (_(); p.AMapUI.length; )
                  p.AMapUI.splice(0, 1)[0]();
              });
            else
              for (_(); p.AMapUI.length; )
                p.AMapUI.splice(0, 1)[0]();
          }, V.appendChild(T);
        } else
          s.AMapUI === n.loaded ? f.version && f.version !== c.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : g.length ? window.AMapUI.loadUI(g, function() {
            for (var w = 0, C = g.length; w < C; w++) {
              var x = g[w].split("/").slice(-1)[0];
              window.AMapUI[x] = arguments[w];
            }
            _();
          }) : _() : f.version && f.version !== c.AMapUI.version ? b("不允许多个版本 AMapUI 混用") : p.AMapUI.push(function(w) {
            w ? b(w) : g.length ? window.AMapUI.loadUI(g, function() {
              for (var C = 0, x = g.length; C < x; C++) {
                var I = g[C].split("/").slice(-1)[0];
                window.AMapUI[I] = arguments[C];
              }
              _();
            }) : _();
          });
      });
    }
    function u(f) {
      return new Promise(function(_, b) {
        if (s.Loca === n.failed)
          b("前次请求 Loca 失败");
        else if (s.Loca === n.notload) {
          s.Loca = n.loading, c.Loca.version = f.version || c.Loca.version;
          var g = c.Loca.version, y = c.AMap.version.startsWith("2"), V = g.startsWith("2");
          if (y && !V || !y && V)
            b("JSAPI 与 Loca 版本不对应！！");
          else {
            y = c.key, V = document.body || document.head;
            var T = document.createElement("script");
            T.type = "text/javascript", T.src = "https://webapi.amap.com/loca?v=" + g + "&key=" + y, T.onerror = function(w) {
              s.Loca = n.failed, b("请求 AMapUI 失败");
            }, T.onload = function() {
              for (s.Loca = n.loaded, _(); p.Loca.length; )
                p.Loca.splice(0, 1)[0]();
            }, V.appendChild(T);
          }
        } else
          s.Loca === n.loaded ? f.version && f.version !== c.Loca.version ? b("不允许多个版本 Loca 混用") : _() : f.version && f.version !== c.Loca.version ? b("不允许多个版本 Loca 混用") : p.Loca.push(function(w) {
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
    var c = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = { AMap: n.notload, AMapUI: n.notload, Loca: n.notload }, p = { AMap: [], AMapUI: [], Loca: [] }, r = [], d = function(f) {
      typeof f == "function" && (s.AMap === n.loaded ? f(window.AMap) : r.push(f));
    };
    return { load: function(f) {
      return new Promise(function(_, b) {
        if (s.AMap == n.failed)
          b("");
        else if (s.AMap == n.notload) {
          var g = f.key, y = f.version, V = f.plugins;
          g ? (window.AMap && location.host !== "lbs.amap.com" && b("禁止多种API加载方式混用"), c.key = g, c.AMap.version = y || c.AMap.version, c.AMap.plugins = V || c.AMap.plugins, s.AMap = n.loading, y = document.body || document.head, window.___onAPILoaded = function(w) {
            if (delete window.___onAPILoaded, w)
              s.AMap = n.failed, b(w);
            else
              for (s.AMap = n.loaded, e(f).then(function() {
                _(window.AMap);
              }).catch(b); r.length; )
                r.splice(0, 1)[0]();
          }, V = document.createElement("script"), V.type = "text/javascript", V.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + c.AMap.version + "&key=" + g + "&plugin=" + c.AMap.plugins.join(","), V.onerror = function(w) {
            s.AMap = n.failed, b(w);
          }, y.appendChild(V)) : b("请填写key");
        } else if (s.AMap == n.loaded)
          if (f.key && f.key !== c.key)
            b("多个不一致的 key");
          else if (f.version && f.version !== c.AMap.version)
            b("不允许多个版本 JSAPI 混用");
          else {
            if (g = [], f.plugins)
              for (y = 0; y < f.plugins.length; y += 1)
                c.AMap.plugins.indexOf(f.plugins[y]) == -1 && g.push(f.plugins[y]);
            g.length ? window.AMap.plugin(g, function() {
              e(f).then(function() {
                _(window.AMap);
              }).catch(b);
            }) : e(f).then(function() {
              _(window.AMap);
            }).catch(b);
          }
        else if (f.key && f.key !== c.key)
          b("多个不一致的 key");
        else if (f.version && f.version !== c.AMap.version)
          b("不允许多个版本 JSAPI 混用");
        else {
          var T = [];
          if (f.plugins)
            for (y = 0; y < f.plugins.length; y += 1)
              c.AMap.plugins.indexOf(f.plugins[y]) == -1 && T.push(f.plugins[y]);
          d(function() {
            T.length ? window.AMap.plugin(T, function() {
              e(f).then(function() {
                _(window.AMap);
              }).catch(b);
            }) : e(f).then(function() {
              _(window.AMap);
            }).catch(b);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, c = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = {
        AMap: n.notload,
        AMapUI: n.notload,
        Loca: n.notload
      }, p = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(Vt);
var gn = Vt.exports;
const sl = /* @__PURE__ */ vn(gn);
let Ol = { securityJsCode: "", key: "" };
function bn({ securityJsCode: a, key: o }) {
  Ol.securityJsCode = a, Ol.key = o;
}
function kn(a) {
  return Ol[a];
}
const _t = /* @__PURE__ */ ue({
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
    const e = a, t = P({
      get() {
        let C;
        return e.modelValue ? e.modelValue.name ? C = se(e.modelValue) : C = {
          ...e.modelValue,
          name: null
        } : C = {
          name: null
        }, C;
      },
      set(C) {
        o("update:modelValue", se(C));
      }
    }), u = P(() => Ye(e.width) ? e.width + "px" : e.width), n = P(() => Ye(e.height) ? e.height + "px" : e.height ? e.height : Ye(e.width) ? e.width * 0.66 + "px" : "200px"), c = P(() => ({
      width: u.value,
      position: "relative"
    })), s = P(() => ({
      width: u.value,
      height: n.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    ke(
      () => e.modelValue,
      (C) => {
        if (C && C.lng && C.lat) {
          if (!g || !y)
            return;
          T({
            lng: C.lng,
            lat: C.lat,
            name: C.name
          });
        }
      }
    );
    const p = "mapId" + Math.floor(Math.random() * 1e9), r = H(null), d = H(null);
    let f;
    function _() {
      d.value && d.value.clientHeight < 10 || !d.value ? Se(_, 300) : Se(V, 100);
    }
    let b, g, y;
    function V() {
      sl.load({
        key: kn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((C) => {
        b = C, g = new b.Map(p).on("complete", () => {
          var I, M, h, O;
          y = new b.Geocoder(), (I = e.modelValue) != null && I.lng && ((M = e.modelValue) != null && M.lat) && T({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const x = (O = (h = r.value) == null ? void 0 : h.$el) == null ? void 0 : O.children;
          x && x.length > 1 && new b.AutoComplete({
            input: x[1]
          }).on("select", (v) => {
            var U, Z, J;
            (U = v == null ? void 0 : v.poi) != null && U.name && ((Z = v.poi.location) != null && Z.lng && ((J = v.poi.location) != null && J.lat) ? (T({
              name: v.poi.name,
              lng: v.poi.location.lng,
              lat: v.poi.location.lat
            }), t.value = {
              name: v.poi.name,
              lng: v.poi.location.lng,
              lat: v.poi.location.lat
            }) : g.setCity(v.poi.name, () => {
              let ne = g.getCenter();
              T({
                name: v.poi.name,
                lng: ne.lng,
                lat: ne.lat
              }), t.value = {
                name: v.poi.name,
                lng: ne.lng,
                lat: ne.lat
              };
            })), o("on-change", t.value);
          }), g.on("hotspotclick", (v) => {
            T({
              name: v.name,
              lng: v.lnglat.lng,
              lat: v.lnglat.lat
            }), t.value = {
              name: v.name,
              lng: v.lnglat.lng,
              lat: v.lnglat.lat
            };
          });
        });
      });
    }
    function T({ lng: C, lat: x, name: I }) {
      g.clearMap();
      let M = new b.LngLat(C, x), h = new b.Marker({
        map: g,
        position: M,
        draggable: !0
      });
      g.add(h), w(C, x), h.on("dragend", () => {
        let O = h.getPosition();
        t.value = {
          name: I || null,
          lng: O.lng,
          lat: O.lat
        }, w(C, x);
      }), h.on("click", (O) => {
        f && f.open(g, O.target.getPosition());
      }), g.setFitView();
    }
    function w(C, x) {
      y.getAddress([C, x], (I, M) => {
        I === "complete" && M.info === "OK" && M.regeocode && M.regeocode.formattedAddress ? f = new b.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + M.regeocode.formattedAddress + "</div>",
          offset: new b.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (f = null, console.warn("地图获取位置信息失败", M));
      });
    }
    return Ge(_), Gt(() => {
      g && (g.destroy(), sl == null || sl.reset(), g = null, y = null, f = null);
    }), (C, x) => (B(), $("div", {
      style: Q(m(c)),
      class: "containerIKJ"
    }, [
      E(m(la), {
        ref_key: "mapInputRef",
        ref: r,
        modelValue: m(t).name,
        "onUpdate:modelValue": x[0] || (x[0] = (I) => m(t).name = I),
        class: Ae({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || m(S)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      L("div", {
        style: Q(m(s)),
        ref_key: "mapRef",
        ref: d,
        id: p
      }, null, 4)
    ], 4));
  }
});
var lt;
const Ct = /* @__PURE__ */ ue({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (lt = window == null ? void 0 : window.g) != null && lt.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const e = a, t = H([]), u = P({
      get() {
        let r = e.modelValue;
        return Array.isArray(r) ? se(r) : Ye(r) ? pl({
          group: t.value,
          condition: (d) => d.value === r,
          pathKey: "value"
        }) : nt(r) ? r.split(e.separator) : [];
      },
      set(r) {
        if (e.onlyLastVal)
          Be(r) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", dl(r));
        else {
          if (ll(e.modelValue, r))
            return;
          o("update:modelValue", se(r));
        }
      }
    });
    function n() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Ke.get(e.url).then((r) => {
        var f;
        let d = null;
        (f = r == null ? void 0 : r.data) != null && f.records ? d = r.data.records : r != null && r.data ? d = r.data : r && (d = r), d ? (typeof e.optionFilter == "function" && N(e.optionFilter) === "Function" && (d = e.optionFilter(d)), t.value = c(d)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(r) {
      let d = [];
      for (let f of r) {
        let _ = {
          value: f[e.optionVal],
          label: f[e.optionLabel]
        };
        f.children && !Be(f.children) && (_.children = c(f.children)), d.push(_);
      }
      return d;
    }
    function s(r) {
      return e.onlyLastLabel ? dl(r) : r.join(e.separator);
    }
    function p(r, d) {
      let f = "";
      Be(d) || (f = d.map((_) => _.label).join(e.separator)), o("on-label-change", f);
    }
    return Ge(n), (r, d) => {
      const f = j("Cascader");
      return B(), q(f, {
        data: m(t),
        modelValue: m(u),
        "onUpdate:modelValue": d[0] || (d[0] = (_) => Ue(u) ? u.value = _ : null),
        onOnChange: p,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || m(S)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), At = /* @__PURE__ */ ue({
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
    const e = a, t = H(), u = P({
      get() {
        if (e.modelValue && (Ye(e.modelValue) || nt(e.modelValue))) {
          let c = String(e.modelValue).trim();
          if (/^\d*$/.test(c)) {
            let p = c.substring(0, 2) + "0000", r, d = n(c);
            return d.length < 7 ? r = c.substring(0, 4) + "00" : r = c.substring(0, 6), /^8\d+$/.test(c) ? [p, d] : [p, r, d];
          }
          return c.indexOf(e.separator) !== -1 ? c.split(e.separator) : [c];
        } else
          return Array.isArray(e.modelValue) ? se(e.modelValue) : (t.value && (t.value.select = []), []);
      },
      set(c) {
        if (Be(c))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let s = dl(c), p = "", r = "";
          if (s && (p = s.code), p && p.length < 12) {
            let d = [...p];
            for (; d.length < 12; )
              d.push(0);
            p = d.join("");
          }
          if (Array.isArray(c) && (r = c.map((d) => d.name).join(e.separator)), p) {
            if (p === e.modelValue)
              return;
            o("update:modelValue", p);
          }
          r && o("on-name-change", r);
        }
      }
    });
    function n(c) {
      let s = [...c];
      for (; s[s.length - 1] === "0"; )
        s.pop();
      return s.join("");
    }
    return (c, s) => (B(), q(m(ia), al(c.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: t,
      modelValue: m(u),
      "onUpdate:modelValue": s[0] || (s[0] = (p) => Ue(u) ? u.value = p : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(S)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Ee(a) {
  var c, s, p;
  const o = (...r) => $e.apply(this, r), e = o("r.closePreview"), t = o("r.fullImg");
  let u = Vl(document.getElementsByTagName("body")), n = document.createElement("div");
  n.setAttribute("class", "fullScreenImgByDom"), n.innerHTML = `<div class='previewInner'><img src='${a}' alt='${t}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (s = (c = n.querySelector(".ivu-icon-md-close")) == null ? void 0 : c.addEventListener) == null || s.call(c, "click", function() {
    var d;
    let r = Vl(document.getElementsByTagName("body"));
    (d = r == null ? void 0 : r.removeChild) == null || d.call(r, n);
  }), (p = u == null ? void 0 : u.appendChild) == null || p.call(u, n);
}
const wn = { class: "previewBoxM" }, Vn = { class: "imgLoading" }, _n = /* @__PURE__ */ L("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Cn = [
  _n
], An = ["src", "alt"], Bn = { class: "deleteModal" }, xn = { class: "previewBoxM" }, Tn = {
  key: 0,
  class: "previewImg"
}, Sn = ["src", "alt"], In = { class: "deleteModal" }, Ln = { class: "customFileListM" }, On = {
  key: 0,
  class: "customFileListItem"
}, Mn = ["onClick", "title"], Fn = { class: "btBoxJ" }, Un = { class: "customFileListM" }, Rn = {
  key: 0,
  class: "customFileListItem"
}, Pn = { class: "listLoading" }, Kn = /* @__PURE__ */ L("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), $n = [
  Kn
], Dn = ["onClick", "title"], Nn = { class: "btBoxJ" };
var tt;
const Bt = /* @__PURE__ */ ue({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (tt = window == null ? void 0 : window.g) != null && tt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const e = a, t = wl([]), u = wl([]), n = P(() => !e.manualUpload && e.showImg && r.value ? "img" : e.manualUpload && e.showImg && r.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !r.value) ? "list" : ""), c = P(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), s = P({
      get() {
        return e.manualUpload ? p.value : p.value.map((v) => ({ id: v }));
      },
      set(v) {
        e.manualUpload ? p.value = v || [] : p.value = (v == null ? void 0 : v.map((U) => U.id)) || [];
      }
    }), p = P({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((v) => v !== "--") : N(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(v) {
        if (e.length === 1) {
          let U = Vl(v);
          o("update:modelValue", U ?? null), o("on-change", U ?? null);
        } else
          o("update:modelValue", se(v)), o("on-change", se(v));
      }
    }), r = P(() => {
      let v;
      if (e.manualUpload ? v = s.value : v = u.value, !v)
        return !1;
      for (let U of v) {
        let Z;
        if (e.manualUpload ? Z = U == null ? void 0 : U.type : Z = U == null ? void 0 : U.mimeType, !Z || Z && !(ul(Z) || Z === "loading"))
          return !1;
      }
      return !0;
    });
    ke(
      () => s.value,
      async (v) => {
        if (n.value === "localImg")
          v != null && v.length ? t.value = await f(v) : t.value = [];
        else if (v != null && v.length && n.value !== "localList") {
          let U = se(v);
          const Z = se(u.value);
          for (let J of U)
            if ((J == null ? void 0 : J.name) === void 0)
              if (J.id) {
                const ne = _l(Z, (he) => he.id === J.id);
                ne ? (J.name = ne.name, J.mimeType = ne.mimeType) : (J.mimeType = "loading", Ke.get(e.url + "/" + J.id).then((he) => {
                  var Ie, _e, G, re, oe, F;
                  J.name = ((G = (_e = (Ie = he == null ? void 0 : he.data) == null ? void 0 : Ie.returnValue) == null ? void 0 : _e[0]) == null ? void 0 : G.name) || S("r.file") + Wl(v, J), J.mimeType = ((F = (oe = (re = he == null ? void 0 : he.data) == null ? void 0 : re.returnValue) == null ? void 0 : oe[0]) == null ? void 0 : F.mimeType) || "unknown", zt(u);
                }).catch(() => {
                  J.name = S("r.file") + Wl(U, J);
                }));
              } else
                J.name = S("r.unknown");
          u.value = U;
        } else
          u.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function d(v) {
      return (v == null ? void 0 : v.name) || (v == null ? void 0 : v.split) && dl(v.split("/")) || v;
    }
    async function f(v) {
      let U = [];
      for (let Z of v) {
        let J = await rl(Z);
        U.push(J);
      }
      return U;
    }
    function _(v) {
      if (!e.disabled) {
        let U = s.value;
        U == null || U.splice(v, 1), s.value = U;
      }
    }
    function b(v) {
      v != null && v.id && window.open(e.url + "/" + v.id + "/download");
    }
    function g(v) {
      return e.manualUpload ? (v == null ? void 0 : v.type) && ul(v.type) : (v == null ? void 0 : v.id) && v.mimeType && ul(v.mimeType);
    }
    function y(v) {
      if (e.manualUpload) {
        if (!v)
          return;
        rl(v).then((U) => {
          Ee(U);
        });
      } else
        v != null && v.id && Ee(e.url + "/" + v.id + "/download?preview=true");
    }
    function V(v) {
      N(v) === "String" && v.indexOf("http") > -1 ? window.open(v) : N(v) === "File" && rl(v).then((U) => {
        ut(v.name, U);
      });
    }
    function T(v) {
      var U, Z;
      if (e.manualUpload) {
        if (v) {
          let J = Fl(v.name);
          if ((U = e.format) != null && U.length && e.format.indexOf(J) < 0)
            return Le(
              S("r.wrongFileType"),
              S("r.supportType") + (((Z = e.format) == null ? void 0 : Z.length) && String(e.format) || S("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && v.size > e.maxSize * 1024)
            return Le(S("r.fileIsBig"), S("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let ne = s.value;
          ne == null || ne.push(v), s.value = ne;
        }
        return !1;
      } else
        return !0;
    }
    function w(v) {
      console.warn(v), Le(S("r.uploadError"), "", "error");
    }
    function C(v, U, Z) {
      var J, ne, he, Ie, _e, G;
      if ((v == null ? void 0 : v.code) === 0) {
        let re = s.value;
        U.id = (ne = (J = v.data) == null ? void 0 : J[0]) == null ? void 0 : ne.id, U.name = (Ie = (he = v.data) == null ? void 0 : he[0]) == null ? void 0 : Ie.name, U.mimeType = (G = (_e = v.data) == null ? void 0 : _e[0]) == null ? void 0 : G.mimeType, re == null || re.push(U), s.value = re;
      } else
        Le(S("r.uploadFail"), (v == null ? void 0 : v.message) || "", "error");
    }
    function x() {
      Le(S("r.fileIsBig"), S("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function I() {
      var v;
      Le(
        S("r.wrongFileType"),
        S("r.supportType") + (((v = e.format) == null ? void 0 : v.length) && String(e.format) || S("r.none")),
        "warning"
      );
    }
    function M(v) {
      let U = v == null ? void 0 : v.id, Z = v == null ? void 0 : v.mimeType;
      U && (N(Z) === "String" && Z.indexOf("image") > -1 ? Ee(e.url + "/" + U + "/download?preview=true") : window.open(e.url + "/" + U + "/download?preview=true"));
    }
    function h(v) {
      var Z, J, ne;
      let U = (ne = (J = (Z = v == null ? void 0 : v.response) == null ? void 0 : Z.data) == null ? void 0 : J[0]) == null ? void 0 : ne.id;
      O(null, U);
    }
    function O(v, U) {
      if (!(!U && U !== 0) && !e.disabled && p.value.indexOf(U) !== -1) {
        const Z = se(p.value);
        let J = s.value;
        J == null || J.splice(Z.indexOf(U), 1), s.value = J;
      }
    }
    return (v, U) => {
      var he, Ie, _e, G, re, oe;
      const Z = j("Button"), J = j("Upload"), ne = j("Icon");
      return B(), $("div", null, [
        E(J, {
          name: "files",
          action: m(c),
          "before-upload": T,
          "on-error": w,
          "on-success": C,
          "on-exceeded-size": x,
          "on-preview": M,
          "on-remove": h,
          "on-format-error": I,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((he = m(s)) == null ? void 0 : he.length) && ((Ie = m(s)) == null ? void 0 : Ie.length) >= e.length || !!e.disabled
        }, {
          default: z(() => {
            var F, te;
            return [
              E(Z, {
                icon: "ios-cloud-upload-outline",
                class: Ae({
                  disabledR: e.length && ((F = m(s)) == null ? void 0 : F.length) && ((te = m(s)) == null ? void 0 : te.length) >= e.length || !!e.disabled
                })
              }, {
                default: z(() => [
                  fe(W(m(S)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        ye(L("div", wn, [
          (B(!0), $(pe, null, ve(m(u), (F) => (B(), $(pe, {
            key: F == null ? void 0 : F.id
          }, [
            !e.manualUpload && (F == null ? void 0 : F.id) !== null ? (B(), $("div", {
              key: 0,
              class: Ae(["previewImg", { previewLoading: F.mimeType === "loading" }])
            }, [
              ye(L("div", Vn, Cn, 512), [
                [be, F.mimeType === "loading"]
              ]),
              ye(L("img", {
                src: v.url + "/" + F.id + "/download?preview=true",
                alt: F.name
              }, null, 8, An), [
                [be, F.mimeType !== "loading"]
              ]),
              ye(L("div", Bn, [
                E(ne, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(S)("r.fView"),
                  onClick: (te) => m(Ee)(e.url + "/" + F.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                E(ne, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (te) => O(te, F.id),
                  title: m(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [be, F.mimeType !== "loading"]
              ])
            ], 2)) : me("", !0)
          ], 64))), 128))
        ], 512), [
          [be, m(n) === "img" && ((_e = m(u)) == null ? void 0 : _e.length)]
        ]),
        ye(L("div", xn, [
          (B(!0), $(pe, null, ve(m(t), (F, te) => (B(), $(pe, {
            key: "manualImg" + te
          }, [
            e.manualUpload && F !== null ? (B(), $("div", Tn, [
              L("img", {
                src: F,
                alt: "manualImg" + te
              }, null, 8, Sn),
              L("div", In, [
                E(ne, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ie) => m(Ee)(F),
                  title: m(S)("r.fView")
                }, null, 8, ["onClick", "title"]),
                E(ne, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ie) => _(te),
                  title: m(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : me("", !0)
          ], 64))), 128))
        ], 512), [
          [be, m(n) === "localImg" && ((G = m(t)) == null ? void 0 : G.length)]
        ]),
        ye(L("div", Ln, [
          (B(!0), $(pe, null, ve(m(s), (F, te) => (B(), $(pe, {
            key: "manualItem" + te
          }, [
            e.manualUpload && F !== null ? (B(), $("p", On, [
              F.name ? (B(), q(ne, {
                key: 0,
                type: m(Al)(F.name)
              }, null, 8, ["type"])) : me("", !0),
              L("span", {
                class: Ae(["upNameT", { previewName: g(F) }]),
                onClick: (ie) => V(F),
                title: m(S)("r.download")
              }, W(d(F)), 11, Mn),
              L("span", Fn, [
                g(F) ? (B(), q(ne, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ie) => y(F),
                  title: m(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : me("", !0),
                E(ne, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => _(te),
                  title: m(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : me("", !0)
          ], 64))), 128))
        ], 512), [
          [be, m(n) === "localList" && ((re = m(s)) == null ? void 0 : re.length)]
        ]),
        ye(L("div", Un, [
          (B(!0), $(pe, null, ve(m(u), (F, te) => (B(), $(pe, {
            key: "defaultItem" + te
          }, [
            !e.manualUpload && F !== null ? (B(), $("div", Rn, [
              ye(L("div", Pn, $n, 512), [
                [be, F.mimeType === "loading"]
              ]),
              ye(E(ne, {
                type: m(Al)(F.name)
              }, null, 8, ["type"]), [
                [be, F.mimeType !== "loading"]
              ]),
              ye(L("span", {
                class: Ae(["upNameT", { previewName: g(F) }]),
                onClick: (ie) => b(F),
                title: m(S)("r.download")
              }, W(F.name || m(S)("r.file") + (te + 1)), 11, Dn), [
                [be, F.mimeType !== "loading"]
              ]),
              ye(L("span", Nn, [
                g(F) ? (B(), q(ne, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ie) => y(F),
                  title: m(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : me("", !0),
                E(ne, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ie) => _(te),
                  title: m(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [be, F.mimeType !== "loading"]
              ])
            ])) : me("", !0)
          ], 64))), 128))
        ], 512), [
          [be, m(n) === "list" && ((oe = m(u)) == null ? void 0 : oe.length)]
        ])
      ]);
    };
  }
}), En = /* @__PURE__ */ L("div", { class: "bRoot" }, null, -1), xt = /* @__PURE__ */ ue({
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
    const e = a, t = H(!1), u = H(!1), n = H(!1), c = P({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(y) {
        o("update:modelValue", [y, s.value]), o("on-change", [y, s.value]);
      }
    }), s = P({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(y) {
        o("update:modelValue", [c.value, y]), o("on-change", [c.value, y]);
      }
    }), p = P(
      () => (c.value || "") + ((c.value || s.value) && " - " || "") + (s.value || "")
    ), r = H();
    Ge(() => {
      r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        n.value = !0;
      }), r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        n.value = !1;
      }), r.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (y) => {
        !e.disabled && (c.value || s.value) && (y.stopPropagation(), b());
      });
    });
    function d() {
      e.disabled || (t.value = !0);
    }
    function f(y) {
      c.value = y, t.value = !1, u.value = !0;
    }
    function _(y) {
      s.value = y, u.value = !1;
    }
    function b() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function g() {
      t.value = !1, u.value = !1, c.value && s.value === null && (c.value = null);
    }
    return (y, V) => {
      const T = j("DatePicker"), w = j("Icon"), C = j("Input");
      return B(), $("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: r
      }, [
        E(T, {
          open: m(u),
          modelValue: m(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: _,
          onOnClickoutside: g
        }, {
          default: z(() => [
            En
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        E(T, {
          open: m(t),
          modelValue: m(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: f,
          onOnClickoutside: g
        }, {
          default: z(() => [
            L("div", { onClick: d }, [
              E(C, {
                class: "aRoot",
                modelValue: m(p),
                "onUpdate:modelValue": V[0] || (V[0] = (x) => Ue(p) ? p.value = x : null),
                readonly: "",
                placeholder: e.placeholder || m(S)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: z(() => [
                  E(w, {
                    type: m(n) && (m(c) || m(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Gn = { class: "editor-pro-root" }, Tt = /* @__PURE__ */ ue({
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
    const e = a, t = wl(), u = P({
      get() {
        return e.modelValue;
      },
      set(r) {
        o("update:modelValue", r), o("on-change", r);
      }
    }), n = P(
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
    ), c = P(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(r, d) {
                let f = new FormData();
                f.append("files", r);
                const _ = r.name, b = e.imgUploadUrl ?? "/node-serve/file";
                Ke.post(b, f, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((g) => {
                  if (g && g.data)
                    if (Array.isArray(g.data))
                      for (let y of g.data) {
                        const V = b + "/" + y.id + "/download";
                        d(V, _, V);
                      }
                    else {
                      const y = b + "/" + g.data.id + "/download";
                      d(y, _, y);
                    }
                }).catch(() => {
                  Le(S("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(r, d) {
                let f = new FormData();
                f.append("files", r);
                const _ = e.videoUploadUrl ?? "/node-serve/file";
                Ke.post(_, f, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let g of b.data) {
                        const y = _ + "/" + g.id + "/download";
                        d(y);
                      }
                    else {
                      const g = _ + "/" + b.data.id + "/download";
                      d(g);
                    }
                }).catch(() => {
                  Le(S("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), s = P(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function p(r) {
      t.value = r;
    }
    return ke(
      () => e.disabled,
      (r) => {
        r ? t.value.disable() : t.value.enable();
      }
    ), Ht(() => {
      t.value && t.value.destroy();
    }), (r, d) => (B(), $("div", Gn, [
      ye(E(m(sa), {
        class: "editor-pro-toolbar",
        editor: m(t),
        defaultConfig: m(n),
        mode: r.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [be, !r.disabled]
      ]),
      E(m(ra), {
        class: "editor-pro-editor",
        modelValue: m(u),
        "onUpdate:modelValue": d[0] || (d[0] = (f) => Ue(u) ? u.value = f : null),
        defaultConfig: m(c),
        mode: r.mode,
        onOnCreated: p,
        style: Q(m(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), zn = {
  key: 19,
  class: "formInfoTxtXN"
}, Hn = {
  key: 20,
  class: "formTitleTxtXN"
}, Zl = /* @__PURE__ */ ue({
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
    function s(r, d) {
      o("al-name-change", {
        name: r,
        root: d
      });
    }
    function p(r, d) {
      o("async-label-change", {
        label: r,
        root: d
      });
    }
    return (r, d) => {
      const f = j("InputNumber"), _ = j("Input"), b = j("Option"), g = j("Select"), y = j("Radio"), V = j("Icon"), T = j("RadioGroup"), w = j("Checkbox"), C = j("CheckboxGroup"), x = j("DatePicker"), I = j("TimePicker"), M = j("FormItem");
      return B(), q(M, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Ae(["relativeBox", t(e.item)])
      }, {
        default: z(() => [
          e.item.type === "txt" ? (B(), $("div", {
            key: 0,
            style: Q([e.itemStyle, { display: "inline-block" }]),
            class: Ae({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, W(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (B(), q(f, {
            key: 1,
            style: Q(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[0] || (d[0] = (h) => e.tempKeys[e.item.tempKey] = h),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: d[1] || (d[1] = (h) => u(h, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (B(), q(_, {
            key: 2,
            style: Q(r.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[2] || (d[2] = (h) => e.tempKeys[e.item.tempKey] = h),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: d[3] || (d[3] = (h) => u(h, e.item)),
            clearable: e.item.clearable !== !1
          }, Xe({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: z(() => [
                xe(r.$slots, e.item.slotName)
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: z(() => [
                L("span", null, W(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: z(() => [
                L("span", null, W(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (B(), q(g, {
            key: 3,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[4] || (d[4] = (h) => r.tempKeys[e.item.tempKey] = h),
            style: Q(r.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(S)("r.pSelect"),
            onOnChange: d[5] || (d[5] = (h) => u(h, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: z(() => [
              (B(!0), $(pe, null, ve(e.item.options, (h, O) => (B(), q(b, {
                value: h.val,
                label: h.label || h.val,
                key: "option-" + e.item.key + O,
                disabled: !!h.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (B(), q(wt, {
            key: 4,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[6] || (d[6] = (h) => r.tempKeys[e.item.tempKey] = h),
            "label-width": r.labelWidth,
            "item-width": r.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (B(), q(At, {
            key: 5,
            style: Q(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[7] || (d[7] = (h) => e.valGroup[e.item.key] = h),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(S)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: d[8] || (d[8] = (h) => s(h, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (B(), q(Ct, {
            key: 6,
            style: Q(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[9] || (d[9] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || r.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || m(S)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: d[10] || (d[10] = (h) => p(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (B(), q(y, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[11] || (d[11] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: d[12] || (d[12] = (h) => u(h, e.item))
          }, {
            default: z(() => [
              fe(W(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (B(), q(T, {
            key: 8,
            style: Q(r.itemStyle),
            onOnChange: d[13] || (d[13] = (h) => n(h, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[14] || (d[14] = (h) => r.tempKeys[e.item.tempKey] = h)
          }, {
            default: z(() => [
              (B(!0), $(pe, null, ve(e.item.options, (h) => (B(), q(y, {
                key: "radioItem" + h.val,
                label: h.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: z(() => [
                  h.icon && !e.item.buttonType ? (B(), q(V, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : me("", !0),
                  L("span", null, W(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (B(), q(w, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[15] || (d[15] = (h) => e.valGroup[e.item.key] = h),
            disabled: !!e.item.disabled,
            onOnChange: d[16] || (d[16] = (h) => u(h, e.item))
          }, {
            default: z(() => [
              fe(W(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (B(), q(C, {
            key: 10,
            style: Q(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[17] || (d[17] = (h) => r.tempKeys[e.item.tempKey] = h),
            onOnChange: d[18] || (d[18] = (h) => n(h, e.item))
          }, {
            default: z(() => [
              (B(!0), $(pe, null, ve(e.item.options, (h) => (B(), q(w, {
                key: "checkItem" + h.val,
                label: h.val,
                disabled: !!e.item.disabled || e.disabled || h.disabled
              }, {
                default: z(() => [
                  h.icon ? (B(), q(V, {
                    key: 0,
                    type: h.icon
                  }, null, 8, ["type"])) : me("", !0),
                  L("span", null, W(h.label || h.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (B(), q(_, {
            key: 11,
            type: "textarea",
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[19] || (d[19] = (h) => r.tempKeys[e.item.tempKey] = h),
            autosize: e.item.autosize || { minRows: 2 },
            style: Q(r.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: d[20] || (d[20] = (h) => u(h, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (B(), q(Bt, {
            key: 12,
            style: Q(r.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[21] || (d[21] = (h) => e.valGroup[e.item.key] = h),
            url: e.item.url || r.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: d[22] || (d[22] = (h) => n(h, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (B(), q(x, {
            key: 13,
            style: Q(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[23] || (d[23] = (h) => r.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(S)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: d[24] || (d[24] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (B(), q(I, {
            key: 14,
            style: Q(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[25] || (d[25] = (h) => r.tempKeys[e.item.tempKey] = h),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(S)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: d[26] || (d[26] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (B(), q(xt, {
            key: 15,
            style: Q(r.itemStyle),
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[27] || (d[27] = (h) => r.tempKeys[e.item.tempKey] = h),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(S)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: d[28] || (d[28] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (B(), q(Tt, {
            key: 16,
            class: "inlineBlock",
            style: Q(r.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": d[29] || (d[29] = (h) => e.valGroup[e.item.key] = h),
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: d[30] || (d[30] = (h) => u(h, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (B(), q(_t, {
            key: 17,
            modelValue: r.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": d[31] || (d[31] = (h) => r.tempKeys[e.item.tempKey] = h),
            style: Q(r.itemStyle),
            placeholder: e.item.placeholder || m(S)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: d[32] || (d[32] = (h) => u(h, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (B(), $("div", {
            key: 18,
            class: "inlineBlock",
            style: Q(r.itemStyle)
          }, [
            xe(r.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : me("", !0),
          e.item.info ? (B(), $("div", zn, W(e.item.info), 1)) : me("", !0),
          e.item.title ? (B(), $("div", Hn, W(e.item.title), 1)) : me("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Wn = /* @__PURE__ */ L("input", { type: "text" }, null, -1), jn = { class: "inlineBlock" }, vl = /* @__PURE__ */ ue({
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
    var zl, Hl;
    const t = a, u = H(null), n = H({}), c = H([]), s = H({});
    let p = [];
    const r = ((zl = window == null ? void 0 : window.g) == null ? void 0 : zl.mgrURL) ?? "";
    let d = [], f = [];
    const _ = H(!1), b = H(Math.random() * 1e8 + 1e3), g = (Hl = window == null ? void 0 : window.g) != null && Hl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let y = !1;
    const V = P(() => Array.isArray(t.formData.length ? t.formData[0] : !1)), T = P(
      () => t.inline ? {
        width: t.itemWidth + t.labelWidth + "px"
      } : {}
    ), w = P(
      () => t.inline ? {
        width: "100%"
      } : { width: t.contentWidth }
    ), C = P(() => {
      let i = se(t.formRules);
      for (let l in i)
        if (i.hasOwnProperty(l))
          if (Array.isArray(i[l]))
            for (let A of i[l])
              A.message || A.validator || (A.message = S("r.required"));
          else
            N(i[l]) === "Object" && (i[l].message || i[l].validator || (i[l].message = S("r.required")));
      return i;
    }), x = P(() => {
      let i = [];
      if (V.value)
        for (let l of c.value)
          h(l, i);
      else
        h(c.value, i);
      return i.concat(d, f);
    }), I = P(() => {
      let i = [];
      if (V.value)
        for (let l of c.value)
          O(l, i);
      else
        O(c.value, i);
      return i;
    });
    function M(i) {
      return i.filter((l) => l.slotName);
    }
    function h(i, l) {
      for (let A of i)
        if (A.showing === !0 && A.key && A.type !== "selectInput" && (l.push(A.key), A.key2 && l.push(A.key2), A.collectLabel)) {
          if (!Array.isArray(A.collectLabel) && A.collectLabel.key)
            l.push(A.collectLabel.key);
          else if (Array.isArray(A.collectLabel))
            for (let k of A.collectLabel)
              k.key && l.push(k.key);
        }
    }
    function O(i, l) {
      for (let A of i)
        A.showing === !0 && A.key && A.type !== "selectInput" && l.push(A.key);
    }
    function v() {
      return new Promise((i) => {
        J(), Z().then(() => {
          e("on-reset"), i(!0);
        });
      });
    }
    function U() {
      return new Promise((i) => {
        for (let l of p)
          l();
        p = [], s.value = {}, R(), te(), Z().then(() => {
          e("on-re-render"), i(!0);
        });
      });
    }
    function Z() {
      return new Promise((i) => {
        b.value = Math.floor(Math.random() * 1e8 + 1e3), Pe(function() {
          i(!0);
        });
      });
    }
    function J() {
      let i = Ie();
      for (let l in n.value)
        if (n.value.hasOwnProperty(l))
          if (we(i[l]))
            n.value[l] = i[l];
          else if (Array.isArray(n.value[l]))
            n.value[l] = [];
          else if (N(n.value[l]) === "Boolean")
            n.value[l] = !1;
          else {
            const A = We(t.formData, (k) => k.key === l);
            A && (A.type === "editor" || A.type === "editorPro") ? n.value[l] = "" : n.value[l] = null;
          }
      ne(i);
    }
    function ne(i) {
      for (let l in s.value)
        s.value.hasOwnProperty(l) && (we(i[l]) ? s.value[l] = i[l] : Array.isArray(s.value[l]) ? s.value[l] = [] : N(s.value[l]) === "Object" && s.value[l].hasOwnProperty("key") && s.value[l].hasOwnProperty("val") ? s.value[l].val = null : s.value[l] = null);
    }
    function he(i) {
      let l = Ie();
      we(l[i]) ? s.value[i] = l[i] : Array.isArray(s.value[i]) ? s.value[i] = [] : s.value[i] = null;
    }
    function Ie() {
      let i = {};
      if (V.value)
        for (let l of c.value)
          _e(l, i);
      else
        _e(c.value, i);
      return i;
    }
    function _e(i, l) {
      for (let A of i)
        A.tempKey && we(A.defaultVal) && F(A, l), A.key && we(A.defaultVal) && (l[A.key] = A.defaultVal), A.key2 && we(A.defaultVal2) && (l[A.key2] = A.defaultVal2);
    }
    function G(i) {
      if (i.show) {
        if (N(i.show) === "Object")
          return oe(i, re(i.show));
        if (Array.isArray(i.show))
          if (i.showOr) {
            for (let l of i.show)
              if (re(l) === !0)
                return oe(i, !0);
            return oe(i, !1);
          } else {
            for (let l of i.show)
              if (re(l) === !1)
                return oe(i, !1);
            return oe(i, !0);
          }
        else if (N(i.show) === "Function")
          return oe(i, i.show(n.value));
      } else
        i.showing || (i.showing = !0);
      return !0;
    }
    function re(i) {
      if (i.reg && typeof i.reg.test == "function")
        return i.reg.test(n.value[i.key]);
      if (Array.isArray(i.val)) {
        for (let l of i.val) {
          if ((n.value[i.key] || n.value[i.key] === 0 || n.value[i.key] === !1) && l === ".")
            return !0;
          if (n.value[i.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function oe(i, l) {
      return !i.showing && l && i.key ? (i.showing = l, i.defaultVal !== void 0 && (i.tempKey ? (s.value[i.tempKey] === null || s.value[i.tempKey] === void 0 || (N(s.value[i.tempKey]) === "Object" || Array.isArray(s.value[i.tempKey])) && Be(s.value[i.tempKey])) && F(i, s.value) : (n.value[i.key] === null || n.value[i.key] === void 0) && (n.value[i.key] = i.defaultVal), i.key2 && i.deafultVal2 !== void 0 && (n.value[i.key2] === null || n.value[i.key2] === void 0) && i.type !== "inputMap" && (n.value[i.key2] = i.defaultVal2)), i.tempKey && de(s.value[i.tempKey], i)) : i.showing = l, l;
    }
    function F(i, l) {
      switch (i.type) {
        case "selectInput":
          l[i.tempKey] = {
            key: i.key,
            val: i.defaultVal
          };
          break;
        case "inputMap":
          i.key3 ? l[i.tempKey] = {
            lng: i.defaultVal || 0,
            lat: i.defaultVal2 || 0,
            name: i.defaultVal3 || ""
          } : l[i.tempKey] = {
            lng: i.defaultVal || 0,
            lat: i.defaultVal2 || 0
          };
          break;
        case "input":
        case "inputNumber":
        case "textarea":
          l[i.tempKey] = i.defaultVal;
          break;
        case "radioGroup":
        case "select":
        case "checkboxGroup":
          i.booleanVal ? l[i.tempKey] = i.defaultVal ? 1 : 0 : l[i.tempKey] = i.defaultVal;
          break;
        case "date":
        case "time":
        case "monthRange":
          i.dateType === "date" || i.dateType === "datetime" || i.dateType === "time" || i.dateType === "year" || i.dateType === "month" ? l[i.tempKey] = i.defaultVal : (i.dateType === "daterange" || i.dateType === "datetimerange" || i.dateType === "timerange" || i.type === "monthRange") && (l[i.tempKey] = i.defaultVal && i.defaultVal2 && [i.defaultVal, i.defaultVal2] || []);
          break;
      }
    }
    function te() {
      let i = se(t.formData);
      if (V.value)
        for (let l of i)
          ie(l);
      else
        ie(i);
      c.value = i;
    }
    function ie(i) {
      for (let l of i)
        switch (l.type) {
          case "selectInput":
            const A = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = A, s.value[A] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, p.push(
              ke(
                () => s.value[A],
                (D) => {
                  de(D, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const k = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = k, l.key3 ? s.value[k] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : s.value[k] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, p.push(
              ke(
                () => s.value[k],
                (D) => {
                  de(D, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const ae = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = ae, s.value[ae] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              ke(
                () => s.value[ae],
                (D) => {
                  de(D, l);
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
                  let D = !0;
                  for (let Y of l.changeOption)
                    if (!Y.valKey || !Y.key) {
                      D = !1;
                      break;
                    }
                  D ? p.push(
                    ke(
                      () => {
                        let Y = "";
                        if (Array.isArray(l.changeOption))
                          for (let Ce of l.changeOption) {
                            let Fe = n.value[Ce.valKey];
                            if (Fe || Fe === 0 || Fe === !1)
                              Y += "&" + Ce.key + "=" + Fe;
                            else if (!Ce.notRequired)
                              return !1;
                          }
                        return Y;
                      },
                      (Y) => {
                        let Ce = se(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, Y && l.optionUrl) {
                          let Fe = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Re((Fe + Y).replace(/\?&/, "?"), l, Ce);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), we(Ce) && K(Ce, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && p.push(
                    ke(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? n.value[l.changeOption.valKey] : !1,
                      (D) => {
                        let Y = se(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, (D || D === 0 || D === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let Ce = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Re((Ce + "&" + l.changeOption.key + "=" + D).replace(/\?&/, "?"), l, Y);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), we(Y) && K(Y, l);
                      },
                      { immediate: !0 }
                    )
                  ) : N(l.changeOption) === "Boolean" && p.push(
                    ke(
                      () => We(t.formData, (D) => D.key === l.key).optionUrl,
                      (D) => {
                        let Y = se(s.value[l.tempKey]);
                        s.value[l.tempKey] = null, D ? Re(D, l, Y) : (l.options = [], l.localOption && (l.options = [...l.localOption]), we(Y) && K(Y, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Re(l.optionUrl, l);
            else
              N(l.borrowOption) === "String" && (l.options = We(c.value, (D) => D.key === l.borrowOption).options);
            const le = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = le, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? s.value[le] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? s.value[le] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : s.value[le] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              ke(
                () => s.value[le],
                (D) => {
                  de(D, l);
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
            const X = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = X, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? s.value[X] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (s.value[X] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), p.push(
              ke(
                () => s.value[X],
                (D) => {
                  de(D, l);
                }
              )
            );
            break;
        }
    }
    function Re(i, l, A) {
      Ke.get(i).then((k) => {
        var le;
        if (!l.options)
          return;
        let ae = ((le = k == null ? void 0 : k.data) == null ? void 0 : le.records) || (k == null ? void 0 : k.data) || k || [];
        Array.isArray(ae) ? (l.optionFilter && N(l.optionFilter) === "Function" && (ae = l.optionFilter(ae)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...ae.map((X) => {
            let D;
            if (Array.isArray(l.optionLabel)) {
              let Y = "";
              l.optionLabel.forEach((Ce, Fe) => {
                let bl = String(X[Ce]);
                Fe === 1 ? Y += "（" + bl : Fe > 1 ? Y += "、" + bl : Y += bl;
              }), D = {
                label: Y + "）",
                val: l.optionVal && X[l.optionVal]
              };
            } else
              D = {
                label: l.optionLabel && X[l.optionLabel],
                val: l.optionVal && X[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let Y of l.collectLabel)
                  Y.valKey && Y.valKey !== "label" && (D[Y.valKey] = X[Y.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (D[l.collectLabel.valKey] = X[l.collectLabel.valKey]);
            if (D.val !== null && D.val !== void 0)
              return D;
          })
        )) : (l.options.length = 0, l.options.push(...ae))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), we(A) && K(A, l), l.disableOptionByOthers && (N(l.disableOptionByOthers) === "String" ? p.push(
          ke(
            () => n.value[l.disableOptionByOthers],
            (X) => {
              if (he(l.tempKey), !!l.options) {
                for (let D of l.options)
                  D.disabled && (D.disabled = !1);
                if (X || X === 0 || X === !1)
                  for (let D of l.options)
                    D.val === X && (D.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && p.push(
          ke(
            () => l.disableOptionByOthers.filter((X) => X).map((X) => n.value[X]),
            (X) => {
              if (he(l.tempKey), !!l.options) {
                for (let D of l.options)
                  D.disabled && (D.disabled = !1);
                if (X) {
                  for (let D of l.options)
                    for (let Y = 0; Y < X.length; Y++)
                      if (D.val === X[Y]) {
                        D.disabled = !0, X.splice(Y, 1);
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
    function K(i, l) {
      Array.isArray(l.options) && ot(l.options, { val: i }) !== -1 && (s.value[l.tempKey] = i);
    }
    function R() {
      if (n.value = {}, V.value)
        for (let i of t.formData)
          ce(i);
      else
        ce(t.formData);
    }
    function ce(i) {
      for (let l of i)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (n.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function de(i, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            i && (i.beforeKey && delete n.value[i.beforeKey], n.value[i.key] = i.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            i ? (n.value[l.key] = i.lng, n.value[l.key2] = i.lat, l.key3 && (n.value[l.key3] = i.name)) : (n.value[l.key] = null, n.value[l.key2] = null, l.key3 && (n.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (i || i === 0) {
              let ae = /^-?\d+(.\d+)?$/;
              l.numberVal && ae.test(i) ? n.value[l.key] = Number(i) : n.value[l.key] = i;
            } else
              n.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? n.value[l.key] = i === void 0 || i === "" || i === null ? null : !!i : l.multiple || l.type === "checkboxGroup" ? n.value[l.key] = Object.assign([], i) : n.value[l.key] = i, l.collectLabel) {
              const ae = Ve(l, i);
              if (Array.isArray(l.collectLabel)) {
                for (let le of l.collectLabel)
                  if (le.key && le.valKey) {
                    const X = ee(le.key);
                    let D = null;
                    Array.isArray(ae) ? (D = ae.map((Ce) => Ce[le.valKey]), n.value[le.key] = D, X && (s.value[X] = D)) : (ae && we(ae[le.valKey]) && (D = ae[le.valKey]), n.value[le.key] = D, X && (s.value[X] = D));
                    let Y = We(c.value, (Ce) => Ce.key === le.key);
                    Y && Y.tempKey && (s.value[Y.tempKey] = n.value[le.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const le = ee(l.collectLabel.key);
                let X = null;
                Array.isArray(ae) ? (X = ae.map(
                  (Y) => l.collectLabel && !Array.isArray(l.collectLabel) && Y[l.collectLabel.valKey]
                ), n.value[l.collectLabel.key] = X, le && (s.value[le] = X)) : (ae && we(ae[l.collectLabel.valKey]) && (X = ae[l.collectLabel.valKey]), n.value[l.collectLabel.key] = X, le && (s.value[le] = X));
                let D = We(
                  c.value,
                  (Y) => l.collectLabel && !Array.isArray(l.collectLabel) && Y.key === l.collectLabel.key || !1
                );
                D && D.tempKey && (s.value[D.tempKey] = n.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let A = l.dateType;
            const k = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "MM"
            };
            if (A === "date" || A === "datetime" || A === "time" || A === "year" || A === "month")
              i ? (A === "time" ? n.value[l.key] = i : n.value[l.key] = Qe(i).format(typeof l.format == "string" ? l.format : k[A]), A === "date" && l.addTime && (n.value[l.key] += " 00:00:00")) : n.value[l.key] = null;
            else if (l.type === "monthRange" || A === "daterange" || A === "datetimerange" || A === "timerange") {
              if (!l.key2)
                return;
              i && i[0] && i[1] ? (A === "timerange" ? (n.value[l.key] = i[0], n.value[l.key2] = i[1]) : l.type === "monthRange" ? (n.value[l.key] = typeof l.format == "string" && Qe(i[0]).format(l.format) || i[0], n.value[l.key2] = typeof l.format == "string" && l.format && Qe(i[1]).format(l.format) || i[1]) : (n.value[l.key] = Qe(i[0]).format(l.format || A && k[A]), n.value[l.key2] = Qe(i[1]).format(l.format || A && k[A])), A === "daterange" && l.addTime && (n.value[l.key] += " 00:00:00", n.value[l.key2] += " 23:59:59")) : (n.value[l.key] = null, n.value[l.key2] = null);
            }
            break;
        }
    }
    function Ve(i, l) {
      if (i.options)
        if (i.multiple || i.type === "checkboxGroup") {
          if (l) {
            let A = [];
            for (let k of i.options)
              l.indexOf(k.val) !== -1 && A.push(k);
            return A;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let A of i.options)
              if (A.val === l)
                return A;
          }
          return !1;
        }
    }
    function ee(i) {
      if (V.value) {
        for (let l of c.value) {
          const A = Me(l, i);
          if (A)
            return A;
        }
        return !1;
      }
      return Me(c.value, i);
    }
    function Me(i, l) {
      for (let A of i)
        if (A.key === l)
          return A.tempKey;
      return !1;
    }
    function nl(i, l) {
      let A = {};
      for (let k in n.value)
        n.value.hasOwnProperty(k) && i[k] !== void 0 && (A[k] = i[k], delete i[k]);
      Rl(A, l);
      for (let k in i)
        i.hasOwnProperty(k) && (f.indexOf(k) < 0 && f.push(k), n.value[k] = i[k]);
    }
    function Ot(i) {
      let l = se(i);
      if (V.value) {
        let A = [];
        for (let k of t.formData)
          A.push(...Ul(k, l));
        return A;
      }
      return Ul(t.formData, l);
    }
    function Ul(i, l) {
      return i.filter((A) => {
        for (let k of Object.keys(l))
          if (A.key === k && I.value.indexOf(k) > -1 && !(l[k] === null || (Array.isArray(l[k]) || N(l[k]) === "Object") && Be(l[k])))
            return delete l[k], !0;
        return !1;
      }).map((A) => A.key);
    }
    function Rl(i, l = !1) {
      let A = se(i);
      Mt(i, l);
      for (let k in n.value)
        if (n.value.hasOwnProperty(k) && i[k] !== void 0 && i[k] !== "--") {
          if (Array.isArray(i[k]))
            i[k] = i[k].filter((ae) => ae !== "--");
          else if (N(i[k]) === "Object")
            for (let ae in i[k])
              i[k].hasOwnProperty(ae) && i[k][ae] === "--" && (i[k][ae] = null);
          n.value[k] = i[k];
        } else
          l || (n.value[k] = Array.isArray(n.value[k]) ? [] : null);
      Pt(Ot(A));
    }
    function Mt(i, l = !1) {
      if (V.value)
        for (let A of c.value)
          Pl(A, i, l);
      else
        Pl(c.value, i, l);
    }
    function Pl(i, l, A = !1) {
      for (let k of i)
        if (k.key && (A && (l[k.key] !== void 0 || k.key2 && l[k.key2] !== void 0) || !A) && k.tempKey)
          switch (k.type) {
            case "inputMap":
              if (!k.key2)
                continue;
              N(l[k.key]) === "Number" && N(l[k.key2] === "Number") ? k.key3 ? s.value[k.tempKey] = {
                lng: l[k.key],
                lat: l[k.key2],
                name: l[k.key3]
              } : s.value[k.tempKey] = {
                lng: l[k.key],
                lat: l[k.key2]
              } : k.key3 ? s.value[k.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : s.value[k.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[k.key] && l[k.key] !== "--" || l[k.key] === 0 ? s.value[k.tempKey] = l[k.key] : s.value[k.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[k.key] && l[k.key] !== "--" || l[k.key] === 0 || l[k.key] === !1 ? k.multiple || k.type === "checkboxGroup" ? s.value[k.tempKey] = [...l[k.key]] : k.booleanVal ? s.value[k.tempKey] = l[k.key] ? 1 : 0 : s.value[k.tempKey] = l[k.key] : k.multiple || k.type === "checkboxGroup" ? s.value[k.tempKey] = [] : s.value[k.tempKey] = null;
              break;
            case "date":
            case "time":
              if (k.dateType === "date" || k.dateType === "datetime" || k.dateType === "year" || k.dateType === "month" || k.dateType === "time")
                s.value[k.tempKey] = l[k.key] && l[k.key] !== "--" ? l[k.key] : null;
              else if (k.dateType === "daterange" || k.dateType === "datetimerange" || k.dateType === "timerange") {
                if (!k.key2)
                  continue;
                s.value[k.tempKey] = l[k.key] && l[k.key] !== "--" && l[k.key2] && l[k.key2] !== "--" && [l[k.key], l[k.key2]] || [];
              }
              break;
          }
    }
    function Ft(i) {
      if (Array.isArray(i))
        for (let l of i)
          Kl(l);
      else
        N(i) === "Object" && Kl(i);
    }
    function Kl(i) {
      const { index: l, indexB: A, key: k, val: ae } = i;
      if (typeof l == "number")
        if (Array.isArray(c.value[l])) {
          if (typeof A == "number")
            if (k && (ae || ae !== void 0))
              c.value[l][A][k] = ae;
            else
              for (let le of Object.keys(i))
                le !== "index" && k !== "indexB" && (c.value[l][A][le] = i[le]);
        } else if (k && (ae || ae !== void 0))
          c.value[l][k] = ae;
        else
          for (let le of Object.keys(i))
            le !== "index" && (c.value[l][le] = i[le]);
    }
    function $l({ label: i, root: l }) {
      l.key2 && (n.value[l.key2] = i), ze({
        e: i,
        root: l
      });
    }
    function Dl(i) {
      i.beforeKey && Xt(d, (l) => l === i.beforeKey), i.key && (d.indexOf(i.key) === -1 && d.push(i.key), ze({
        e: null,
        root: i
      }));
    }
    function Nl({ name: i, root: l }) {
      l.key2 && (n.value[l.key2] = i), ze({
        e: i,
        root: l
      });
    }
    function El({ e: i, root: l }) {
      ze({
        e: i,
        root: l
      }), Pe(function() {
        var A, k;
        (k = (A = u.value) == null ? void 0 : A.validateField) == null || k.call(A, l.key);
      });
    }
    function ze({ e: i, root: l }) {
      Se(() => {
        let A = {
          event: i
        };
        if (l.key && (A[l.key] = n.value[l.key]), l.key2 && (A[l.key2] = n.value[l.key2]), Array.isArray(l.collectLabel))
          for (let k of l.collectLabel)
            A[k.key] = n.value[k.key];
        else
          l.collectLabel && l.collectLabel.key && (A[l.collectLabel.key] = n.value[l.collectLabel.key]);
        e("on-item-change", A);
      }, 500);
    }
    function Gl() {
      let i = {};
      for (let l of x.value)
        i[l] = n.value[l];
      return t.trim && (i = ml(i)), i;
    }
    function Ut() {
      var i, l;
      (l = (i = u.value) == null ? void 0 : i.validate) == null || l.call(i);
    }
    function Rt(i) {
      Se(() => {
        var l, A;
        (A = (l = u.value) == null ? void 0 : l.validateField) == null || A.call(l, i, () => {
        });
      }, 10);
    }
    function Pt(i) {
      Se(() => {
        var l, A;
        if (Array.isArray(i))
          for (let k of i)
            (A = (l = u.value) == null ? void 0 : l.validateField) == null || A.call(l, k, () => {
            });
      }, 10);
    }
    function Kt(i) {
      i !== void 0 && (_.value = !!i);
    }
    function gl() {
      var i, l;
      t.disabled || (l = (i = u.value) == null ? void 0 : i.validate) == null || l.call(i, (A) => {
        y || (y = !0, A && (_.value = !0, e("on-submit", Gl())), Se(() => {
          y = !1;
        }, 2e3));
      });
    }
    return Ge(() => {
      R(), te();
    }), o({
      resetForm: v,
      refreshFormDom: Z,
      reRenderForm: U,
      setItemToValGroup: nl,
      updateValGroup: Rl,
      updateFormDataT: Ft,
      validate: Ut,
      reValidate: Rt,
      changeLoading: Kt,
      getValGroup: Gl,
      submit: gl
    }), (i, l) => {
      const A = j("FormItem"), k = j("Button"), ae = j("Form");
      return B(), q(ae, {
        ref_key: "formGroupXRef",
        ref: u,
        model: m(n),
        rules: m(C),
        "label-width": t.labelWidth,
        inline: t.inline,
        "show-message": t.showMessage,
        class: "formXN",
        key: m(b)
      }, {
        default: z(() => [
          E(A, { style: { display: "none" } }, {
            default: z(() => [
              Wn
            ]),
            _: 1
          }),
          m(V) ? (B(!0), $(pe, { key: 0 }, ve(m(c), (le, X) => (B(), $("div", {
            class: Ae([i.teamClass, "formTeamBox" + X]),
            key: "formTeamBox" + X
          }, [
            (B(!0), $(pe, null, ve(le, (D, Y) => (B(), $(pe, {
              key: "formItem" + Y
            }, [
              G(D) ? (B(), q(Zl, {
                key: 0,
                item: D,
                style: Q(m(T)),
                "item-style": m(w),
                "val-group": m(n),
                "temp-keys": m(s),
                inline: t.inline,
                disabled: t.disabled,
                "label-width": t.labelWidth,
                "item-width": t.itemWidth,
                "mgr-url": m(r),
                "upload-url": m(g),
                onItemChange: ze,
                onReValidate: El,
                onClearTempKeyItem: he,
                onSelectInputChange: Dl,
                onAlNameChange: Nl,
                onAsyncLabelChange: $l
              }, Xe({ _: 2 }, [
                ve(M(le), (Ce) => ({
                  name: Ce.slotName,
                  fn: z((Fe) => [
                    xe(i.$slots, Ce.slotName, {
                      valGroup: Fe.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : me("", !0)
            ], 64))), 128))
          ], 2))), 128)) : me("", !0),
          (B(!0), $(pe, null, ve(m(c), (le, X) => (B(), $(pe, {
            key: "formItem" + X
          }, [
            !m(V) && G(le) ? (B(), q(Zl, {
              key: 0,
              item: le,
              style: Q(m(T)),
              "item-style": m(w),
              "val-group": m(n),
              "temp-keys": m(s),
              inline: t.inline,
              disabled: t.disabled,
              "label-width": t.labelWidth,
              "item-width": t.itemWidth,
              "mgr-url": m(r),
              "upload-url": m(g),
              onItemChange: ze,
              onReValidate: El,
              onClearTempKeyItem: he,
              onSelectInputChange: Dl,
              onAlNameChange: Nl,
              onAsyncLabelChange: $l
            }, Xe({ _: 2 }, [
              ve(M(i.formData), (D) => ({
                name: D.slotName,
                fn: z((Y) => [
                  xe(i.$slots, D.slotName, {
                    valGroup: Y.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : me("", !0)
          ], 64))), 128)),
          t.showLongOkBt ? (B(), q(A, { key: 1 }, {
            default: z(() => [
              E(k, {
                onClick: gl,
                style: Q(m(w)),
                type: "primary",
                loading: t.btnLoading && m(_),
                disabled: t.disabled
              }, {
                default: z(() => [
                  fe(W(t.longOkBtTxt || m(S)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : me("", !0),
          L("div", jn, [
            t.showInlineOkBt ? (B(), q(k, {
              key: 0,
              type: "primary",
              class: Ae({ inlineFormBtXN: t.inline, okBtnXN: !0 }),
              onClick: gl,
              loading: t.btnLoading && m(_),
              disabled: t.disabled
            }, {
              default: z(() => [
                fe(W(t.inlineOkBtTxt || m(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : me("", !0),
            t.showInlineClearBt ? (B(), q(k, {
              key: 1,
              onClick: v,
              class: Ae({ inlineFormBtXN: t.inline }),
              type: "dashed"
            }, {
              default: z(() => [
                fe(W(t.inlineClearBtTxt || m(S)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : me("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), qn = /* @__PURE__ */ ue({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: "100%" },
    labelWidth: { default: () => yl().formGroupLabelWidth },
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
    const t = a, u = H({ width: t.with }), n = H(!1), c = H(), s = P(() => {
      if (Array.isArray(t.formData))
        if (Array.isArray(t.formData[0])) {
          let I = [];
          for (let M of t.formData)
            I = I.concat(M.filter((h) => h.type === "custom"));
          return I;
        } else
          return t.formData.filter((I) => I.type === "custom");
      return [];
    });
    function p() {
      return new Promise((I) => {
        var M, h;
        (h = (M = c.value).resetForm) == null || h.call(M).then((O) => {
          I(O);
        });
      });
    }
    function r() {
      return new Promise((I) => {
        var M, h;
        (h = (M = c.value).refreshFormDom) == null || h.call(M).then((O) => {
          I(O);
        });
      });
    }
    function d() {
      return new Promise((I) => {
        var M, h;
        (h = (M = c.value).reRenderForm) == null || h.call(M).then((O) => {
          I(O);
        });
      });
    }
    function f(I, M) {
      var h, O;
      (O = (h = c.value).setItemToValGroup) == null || O.call(h, I, M);
    }
    function _(I, M) {
      var h, O;
      (O = (h = c.value).updateValGroup) == null || O.call(h, I, M);
    }
    function b(I) {
      var M, h;
      (h = (M = c.value).updateFormDataT) == null || h.call(M, I);
    }
    function g() {
      var I, M;
      (M = (I = c.value).validate) == null || M.call(I);
    }
    function y(I) {
      var M, h;
      (h = (M = c.value).reValidate) == null || h.call(M, I);
    }
    function V(I) {
      var M, h;
      I !== void 0 && (n.value = !!I, (h = (M = c.value).changeLoading) == null || h.call(M, n.value));
    }
    function T() {
      var I, M;
      return (M = (I = c.value).getValGroup) == null ? void 0 : M.call(I);
    }
    function w() {
      n.value = !0;
    }
    function C() {
      var I, M;
      (M = (I = c.value).submit) == null || M.call(I);
    }
    function x() {
      e("on-cancel"), Se(() => {
        var I, M;
        n.value = !1, (M = (I = c.value).changeLoading) == null || M.call(I, !1);
      }, 1e3);
    }
    return o({
      resetForm: p,
      refreshFormDom: r,
      reRenderForm: d,
      setItemToValGroup: f,
      updateValGroup: _,
      updateFormDataT: b,
      validate: g,
      reValidate: y,
      changeLoading: V,
      getValGroup: T,
      submit: C,
      close: x
    }), (I, M) => {
      const h = j("Button");
      return B(), $("div", {
        style: Q(m(u)),
        class: "formGroupBoxVM"
      }, [
        E(vl, al({
          ref_key: "formRRef",
          ref: c
        }, I.$attrs, {
          "form-data": t.formData,
          "label-width": t.labelWidth,
          "content-width": t.contentWidth,
          "item-width": t.itemWidth,
          btnLoading: t.btnLoading,
          onOnSubmit: w
        }), Xe({ _: 2 }, [
          ve(m(s), (O) => ({
            name: O.slotName,
            fn: z(({ valGroup: v }) => [
              xe(I.$slots, O.slotName, { valGroup: v })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        ye(L("div", {
          class: "formFooterVM",
          style: Q({ marginLeft: t.labelWidth + "px" })
        }, [
          L("div", {
            style: Q({ width: t.contentWidth }),
            class: "btnBoxKAL"
          }, [
            t.showOkBt ? (B(), q(h, {
              key: 0,
              onClick: C,
              class: "form-save-btn",
              loading: t.btnLoading && m(n)
            }, {
              default: z(() => [
                fe(W(t.okBtTxt || m(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : me("", !0),
            t.showCancelBt ? (B(), q(h, {
              key: 1,
              onClick: x,
              class: "form-cancel-btn"
            }, {
              default: z(() => [
                fe(W(t.cancelBtTxt || m(S)("r.cancel")), 1)
              ]),
              _: 1
            })) : me("", !0)
          ], 4)
        ], 4), [
          [be, t.showOkBt || t.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ml = /* @__PURE__ */ ue({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => yl().searchFormLabelWidth },
    itemWidth: { default: 202 },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = H(), n = P(() => {
      if (Array.isArray(t.formData[0])) {
        let w = [];
        for (let C of t.formData)
          w = w.concat(C.filter((x) => x.type === "custom"));
        return w;
      }
      return t.formData.filter((w) => w.type === "custom");
    });
    function c() {
      return new Promise((w) => {
        var C, x;
        (x = (C = u.value).resetForm) == null || x.call(C).then(() => {
          w();
        });
      });
    }
    function s() {
      return new Promise((w) => {
        var C, x;
        (x = (C = u.value).refreshFormDom) == null || x.call(C).then(() => {
          w();
        });
      });
    }
    function p() {
      return new Promise((w) => {
        var C, x;
        (x = (C = u.value).reRenderForm) == null || x.call(C).then(() => {
          w();
        });
      });
    }
    function r(w, C) {
      var x, I;
      (I = (x = u.value).setItemToValGroup) == null || I.call(x, w, C);
    }
    function d(w, C) {
      var x, I;
      (I = (x = u.value).updateValGroup) == null || I.call(x, w, C);
    }
    function f(w) {
      var C, x;
      (x = (C = u.value).updateFormDataT) == null || x.call(C, w);
    }
    function _() {
      var w, C;
      (C = (w = u.value).validate) == null || C.call(w);
    }
    function b(w) {
      var C, x;
      (x = (C = u.value).reValidate) == null || x.call(C, w);
    }
    function g(w) {
      var C, x;
      (x = (C = u.value).changeLoading) == null || x.call(C, w === void 0 ? !1 : w);
    }
    function y() {
      var w, C;
      return (C = (w = u.value).getValGroup) == null ? void 0 : C.call(w);
    }
    function V(w) {
      e("on-search", w);
    }
    function T() {
      var w, C;
      (C = (w = u.value).submit) == null || C.call(w);
    }
    return Ge(() => {
      const w = u.value.$el;
      w != null && w.parentNode && w.parentNode.addEventListener("keyup", (C) => {
        C.keyCode === 13 && T();
      });
    }), o({
      resetForm: c,
      refreshFormDom: s,
      reRenderForm: p,
      setItemToValGroup: r,
      updateValGroup: d,
      updateFormDataT: f,
      validate: _,
      reValidate: b,
      changeLoading: g,
      getValGroup: y,
      submit: T
    }), (w, C) => (B(), q(vl, al({
      ref_key: "formRRef",
      ref: u
    }, w.$attrs, {
      "form-data": t.formData,
      "label-width": t.labelWidth,
      "item-width": t.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": t.showInlineOkBt,
      "inline-ok-bt-txt": m(S)("r.check"),
      "show-inline-clear-bt": t.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: V
    }), Xe({ _: 2 }, [
      ve(m(n), (x) => ({
        name: x.slotName,
        fn: z(({ valGroup: I }) => [
          xe(w.$slots, x.slotName, { valGroup: I })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Jn = /* @__PURE__ */ ue({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: 520 },
    labelWidth: { default: () => yl().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(a, { expose: o, emit: e }) {
    const t = a, u = H(), n = H(!1), c = H(!1), s = P(() => {
      if (Array.isArray(t.formData[0])) {
        let h = [];
        for (let O of t.formData)
          h = h.concat(O.filter((v) => v.type === "custom"));
        return h;
      }
      return t.formData.filter((h) => h.type === "custom");
    });
    function p() {
      return new Promise((h) => {
        var O, v;
        (v = (O = u.value).resetForm) == null || v.call(O).then(() => {
          h();
        });
      });
    }
    function r() {
      return new Promise((h) => {
        var O, v;
        (v = (O = u.value).refreshFormDom) == null || v.call(O).then(() => {
          h();
        });
      });
    }
    function d() {
      return new Promise((h) => {
        var O, v;
        (v = (O = u.value).reRenderForm) == null || v.call(O).then(() => {
          h();
        });
      });
    }
    function f(h, O) {
      var v, U;
      (U = (v = u.value).setItemToValGroup) == null || U.call(v, h, O);
    }
    function _(h, O) {
      var v, U;
      (U = (v = u.value).updateValGroup) == null || U.call(v, h, O);
    }
    function b(h) {
      var O, v;
      (v = (O = u.value).updateFormDataT) == null || v.call(O, h);
    }
    function g() {
      var h, O;
      (O = (h = u.value).validate) == null || O.call(h);
    }
    function y(h) {
      var O, v;
      (v = (O = u.value).reValidate) == null || v.call(O, h);
    }
    function V(h) {
      var O, v;
      h !== void 0 && (c.value = !!h, (v = (O = u.value).changeLoading) == null || v.call(O, c.value));
    }
    function T() {
      var h, O;
      return (O = (h = u.value).getValGroup) == null ? void 0 : O.call(h);
    }
    function w() {
      c.value = !0;
    }
    function C() {
      var h, O;
      t.hideCancelBt ? I() : (O = (h = u.value).submit) == null || O.call(h);
    }
    function x() {
      n.value = !0;
    }
    function I() {
      n.value = !1, Se(() => {
        var h, O;
        c.value = !1, (O = (h = u.value).changeLoading) == null || O.call(h, !1);
      }, 1e3);
    }
    function M(h) {
      e(h ? "on-open" : "on-close");
    }
    return o({
      resetForm: p,
      refreshFormDom: r,
      reRenderForm: d,
      setItemToValGroup: f,
      updateValGroup: _,
      updateFormDataT: b,
      validate: g,
      reValidate: y,
      changeLoading: V,
      getValGroup: T,
      submit: C,
      open: x,
      close: I
    }), (h, O) => {
      const v = j("Button"), U = j("Modal");
      return B(), q(U, {
        class: Ae(["formModal", { hideFooter: t.hideFooter }]),
        title: t.title || m(S)("r.title"),
        modelValue: m(n),
        "onUpdate:modelValue": O[0] || (O[0] = (Z) => Ue(n) ? n.value = Z : null),
        "mask-closable": !1,
        "footer-hide": t.hideFooter,
        width: t.width,
        onOnVisibleChange: M
      }, {
        footer: z(() => [
          E(v, {
            onClick: C,
            class: "modal-save-btn",
            loading: t.btnLoading && m(c)
          }, {
            default: z(() => [
              fe(W(t.okBtTxt || m(S)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          t.hideCancelBt ? me("", !0) : (B(), q(v, {
            key: 0,
            onClick: I,
            class: "modal-cancel-btn"
          }, {
            default: z(() => [
              fe(W(t.cancelBtTxt || m(S)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: z(() => [
          E(vl, al({
            ref_key: "formRRef",
            ref: u
          }, h.$attrs, {
            "form-data": t.formData,
            "label-width": t.labelWidth,
            btnLoading: t.btnLoading,
            onOnSubmit: w
          }), Xe({ _: 2 }, [
            ve(m(s), (Z) => ({
              name: Z.slotName,
              fn: z(({ valGroup: J }) => [
                xe(h.$slots, Z.slotName, { valGroup: J })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Yn = /* @__PURE__ */ ue({
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
    const e = a, t = H(!0), u = H([]), n = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const s = P(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), p = P(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    ke(
      () => e.data,
      (g) => {
        t.value = !1;
        let y = [];
        r(g, y), u.value = y, Pe(function() {
          t.value = !0, e.inlineLeaf && Pe(_);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), ke(
      () => p.value,
      (g) => {
        let y, V = "s";
        if (Array.isArray(e.collectVal) ? (y = e.collectVal[0] || "", V = "a") : y = e.collectVal, !y || JSON.stringify(g) === JSON.stringify(c)) {
          c = [];
          return;
        }
        je({
          group: u.value,
          condition: (T) => T.checked === !0,
          key: "checked",
          val: !1
        }), je(V === "a" ? {
          group: u.value,
          condition: (T) => ot(g, [y, T[y]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: u.value,
          condition: (T) => g.indexOf(T[y]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), ke(
      () => e.disabled,
      (g) => {
        je({
          group: u.value,
          condition: (y) => y.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && Pe(_);
      },
      { immediate: !0 }
    );
    function r(g, y = []) {
      for (let V of g) {
        let T = !1;
        s.value.length > 1 ? T = _l(p.value, (C) => C[s.value[0]] === V[s.value[0]]) !== void 0 : T = s.value[0] ? p.value.indexOf(V[s.value[0]]) !== -1 : !1;
        let w = {
          name: V[e.label],
          expand: !!(e.expandAll || V.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let C of s.value)
          w[C] = V[C];
        y.push(w), V.children && V.children.length > 0 && (w.children = [], d(V.children, w.children));
      }
    }
    function d(g, y = []) {
      for (let V of g) {
        let T = !1;
        s.value.length > 1 ? T = _l(p.value, (C) => C[s.value[0]] === V[s.value[0]]) !== void 0 : T = s.value[0] ? p.value.indexOf(V[s.value[0]]) !== -1 : !1;
        let w = {
          name: V[e.label],
          expand: !!(e.expandAll || V.expand),
          checked: T,
          disableCheckbox: e.disabled
        };
        for (let C of s.value)
          w[C] = V[C];
        y.push(w), V.children && V.children.length > 0 && (w.children = [], r(V.children, w.children));
      }
    }
    function f(g, {
      data: y
    }) {
      let V = "", T = !0;
      if (y.children && y.children.length > 0) {
        for (let w of y.children)
          if (w.children !== void 0) {
            T = !1;
            break;
          }
        T && e.inlineLeaf && (V = "inlineChildXA");
      }
      return g(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: V
        },
        [
          g(
            "span",
            {
              style: {
                fontWeight: y.children ? "bold" : "normal"
              }
            },
            y.name
          )
        ]
      );
    }
    function _(g) {
      if (g) {
        g.expand && Pe(_);
        return;
      }
      let y = document.querySelectorAll("#" + n + " .inlineChildXA");
      if (y.length > 0)
        for (let V of y) {
          let T = V.parentElement, w = T == null ? void 0 : T.nextElementSibling;
          if (!w)
            return;
          if (w.tagName !== "BR") {
            let C = T == null ? void 0 : T.parentElement, x = document.createElement("br");
            C == null || C.insertBefore(x, w), w = x.nextElementSibling, (w == null ? void 0 : w.className.indexOf("inlineTreeNodeF")) === -1 && w.setAttribute("class", w.className + " inlineTreeNodeF");
          }
          for (; w != null && w.nextElementSibling; )
            w = w.nextElementSibling, w.className.indexOf("inlineTreeNodeF") === -1 && w.setAttribute("class", w.className + " inlineTreeNodeF");
        }
    }
    function b(g) {
      let y = [];
      if (e.leaf) {
        for (let V of g)
          if (!V.children)
            if (Array.isArray(e.collectVal)) {
              let T = {};
              for (let w of e.collectVal)
                T[w] = V[w];
              y.push(T);
            } else
              y.push(V[e.collectVal]);
      } else
        for (let V of g)
          if (Array.isArray(e.collectVal)) {
            let T = {};
            for (let w of e.collectVal)
              T[w] = V[w];
            y.push(T);
          } else
            y.push(V[e.collectVal]);
      c = y, o("update:modelValue", y), o("on-change", se(y));
    }
    return (g, y) => {
      const V = j("Tree");
      return m(t) ? (B(), q(V, {
        key: 0,
        id: n,
        class: "checkboxTreeGA",
        data: m(u),
        render: f,
        onOnCheckChange: b,
        onOnToggleExpand: _,
        "show-checkbox": ""
      }, null, 8, ["data"])) : me("", !0);
    };
  }
}), Xn = { class: "transferBoxRL" }, Zn = { class: "leftBoxLLL" }, Qn = { class: "fullHeight flexColumnBox" }, eo = { class: "notGrow" }, lo = { class: "titleLLL" }, to = { class: "growFlexItem" }, ao = { class: "middleBoxLLL" }, no = { class: "rightBoxLLL" }, oo = { class: "fullHeight flexColumnBox" }, io = { class: "notGrow" }, so = { class: "titleLLL" }, ro = { class: "growFlexItem" }, uo = /* @__PURE__ */ ue({
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
    let u = H({}), n = H({}), c = H([]), s = H([]), p = H(0), r = H(0);
    const d = P(() => ({ ...t.constSearchDataLeft, ...u.value })), f = P(() => ({ ...t.constSearchDataRight, ...n.value })), _ = P(() => p.value < 1), b = P(() => c.value.length < 1), g = P(() => s.value.length < 1), y = P(() => r.value < 1), V = H(), T = H(), w = H(), C = H();
    function x() {
      V.value.resetForm(), T.value.resetForm(), Be(u.value) || (u.value = {}), Be(n.value) || (n.value = {}), w.value.clearSelect(), C.value.clearSelect();
    }
    function I() {
      w.value.search(), C.value.search();
    }
    function M(G) {
      c.value = G;
    }
    function h(G) {
      s.value = G;
    }
    function O(G) {
      var re, oe, F, te, ie;
      p.value = ((oe = (re = G == null ? void 0 : G.data) == null ? void 0 : re.page) == null ? void 0 : oe.total) || ((te = (F = G == null ? void 0 : G.data) == null ? void 0 : F.data) == null ? void 0 : te.total) || ((ie = G == null ? void 0 : G.data) == null ? void 0 : ie.total) || (G == null ? void 0 : G.total) || 0;
    }
    function v(G) {
      var re, oe, F, te, ie;
      r.value = ((oe = (re = G == null ? void 0 : G.data) == null ? void 0 : re.page) == null ? void 0 : oe.total) || ((te = (F = G == null ? void 0 : G.data) == null ? void 0 : F.data) == null ? void 0 : te.total) || ((ie = G == null ? void 0 : G.data) == null ? void 0 : ie.total) || (G == null ? void 0 : G.total) || 0;
    }
    function U(G) {
      u.value = G;
    }
    function Z(G) {
      n.value = G;
    }
    function J() {
      t.addUrl && _e("add");
    }
    function ne() {
      t.deleteUrl && _e("delete");
    }
    function he() {
      t.addAllUrl && t.addUrl && _e("addAll");
    }
    function Ie() {
      t.deleteAllUrl && _e("deleteAll");
    }
    function _e(G) {
      let re, oe, F = {}, te = "";
      switch (G) {
        case "add":
          re = t.addMethod, oe = t.addUrl, F = t.addParamsHandle(s.value), te = S("r.add");
          break;
        case "delete":
          re = t.deleteMethod, oe = t.deleteUrl, F = t.deleteParamsHandle(c.value), te = S("r.remove");
          break;
        case "addAll":
          re = t.addAllMethod, oe = t.addAllUrl, F = t.addAllParamsHandle(f.value), te = S("r.addAll");
          break;
        case "deleteAll":
          re = t.deleteAllMethod, oe = t.deleteAllUrl, F = t.deleteAllParamsHandle(d.value), te = S("r.removeAll");
          break;
      }
      oe && re && Ke[re](oe, F, null, [], { spin: !0 }, !1).then((ie) => {
        (ie == null ? void 0 : ie.code) === 0 ? (Le(te + S("r.success"), (ie == null ? void 0 : ie.message) || "", "success"), w.value && w.value.getTableData(), C.value && C.value.getTableData(), e("transferred")) : Le(te + S("r.failed"), (ie == null ? void 0 : ie.message) || "", "error");
      }).catch(() => {
        Le(te + S("r.error"), "", "error");
      });
    }
    return o({
      reset: x,
      search: I
    }), (G, re) => {
      const oe = j("Icon"), F = j("Button");
      return B(), $("div", Xn, [
        L("div", Zn, [
          L("div", Qn, [
            L("div", eo, [
              L("div", lo, W(t.titleLeft || m(S)("r.added")), 1),
              E(Tl, null, {
                default: z(() => [
                  E(Ml, {
                    ref_key: "leftFormRef",
                    ref: V,
                    "form-data": t.formDataLeft,
                    "form-rules": t.formRulesLeft,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: U
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            L("div", to, [
              E(Ll, {
                ref_key: "lTabRef",
                ref: w,
                columns: t.leftTableColumns,
                url: t.leftTableUrl,
                "search-data": m(d),
                onOnSelectionChange: M,
                onOnDataChange: O,
                "init-data": !!(m(Be)(t.constSearchDataLeft) && t.leftTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ]),
        L("div", ao, [
          E(F, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Ie,
            disabled: m(_)
          }, {
            default: z(() => [
              fe(W(m(S)("r.removeAll")) + " ", 1),
              E(oe, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          E(F, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: ne,
            disabled: m(b)
          }, {
            default: z(() => [
              fe(W(m(S)("r.remove")) + " ", 1),
              E(oe, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          E(F, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: J,
            disabled: m(g)
          }, {
            default: z(() => [
              E(oe, { type: "ios-arrow-back" }),
              fe(" " + W(m(S)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          E(F, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: he,
            disabled: m(y)
          }, {
            default: z(() => [
              E(oe, { type: "ios-arrow-back" }),
              fe(" " + W(m(S)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        L("div", no, [
          L("div", oo, [
            L("div", io, [
              L("div", so, W(t.titleRight || m(S)("r.notAdded")), 1),
              E(Tl, null, {
                default: z(() => [
                  E(Ml, {
                    ref_key: "rightFormRef",
                    ref: T,
                    "form-data": t.formDataRight,
                    "form-rules": t.formRulesRight,
                    "label-width": t.searchFormLabelWith,
                    onOnSearch: Z
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            L("div", ro, [
              E(Ll, {
                ref_key: "rTabRef",
                ref: C,
                columns: t.rightTableColumns,
                url: t.rightTableUrl,
                "search-data": m(f),
                onOnSelectionChange: h,
                onOnDataChange: v,
                "init-data": !!(m(Be)(t.constSearchDataRight) && t.rightTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ])
      ]);
    };
  }
}), co = { class: "boxLPA" }, fo = { class: "headerJ" }, po = { class: "firstT borderBoxAS" }, mo = { class: "secondT borderBoxAS" }, ho = { class: "firstCol borderBoxAS" }, yo = { class: "secondCol borderBoxAS" }, vo = /* @__PURE__ */ ue({
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
    const e = a, t = H([]), u = P(() => {
      let p = se(e.data), r = se(t.value);
      for (let d of p) {
        let f = 0;
        if (d.children && !Be(d.children))
          for (let _ of d.children) {
            for (let b = 0, g = r.length; b < g; b++)
              if (Array.isArray(e.collectVal)) {
                let y = !0;
                for (let V of e.collectVal)
                  if (r[b][V] !== _[V]) {
                    y = !1;
                    break;
                  }
                if (y) {
                  _.checked = !0, f++, r.splice(b, 1);
                  break;
                }
              } else if (r[b] === _[e.collectVal]) {
                _.checked = !0, f++, r.splice(b, 1);
                break;
              }
            !_.checked && (_.checked = !1);
          }
        f === 0 ? (d.checked = !1, d.indeterminate = !1) : d.children && f === d.children.length ? (d.checked = !0, d.indeterminate = !1) : (d.checked = !1, d.indeterminate = !0);
      }
      return p;
    });
    ke(
      () => e.modelValue,
      (p, r) => {
        ll(t.value, p) || ll(p, r) || (t.value = p);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function n(p, r) {
      if (p.children)
        for (let d of p.children)
          d.checked = r;
      c();
    }
    function c() {
      s(u.value, !0);
    }
    function s(p, r) {
      let d = [];
      for (let f of p) {
        if (!r && !e.leaf && f.checked && f.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let _ = {};
            for (let b of e.collectVal)
              _[b] = f[b];
            d.push(_);
          } else
            N(e.collectVal) === "String" && d.push(f[e.collectVal]);
        if (f.children) {
          for (let _ of f.children)
            if (_.checked)
              if (Array.isArray(e.collectVal)) {
                let b = {};
                for (let g of e.collectVal)
                  b[g] = _[g];
                d.push(b);
              } else
                N(e.collectVal) === "String" && d.push(_[e.collectVal]);
        }
      }
      r ? (t.value = d, e.leaf ? (o("update:modelValue", d), o("on-change", se(d))) : Pe(function() {
        s(u.value);
      })) : (o("update:modelValue", d), o("on-change", se(d)));
    }
    return (p, r) => {
      const d = j("Checkbox");
      return B(), $("div", co, [
        L("div", fo, [
          L("div", po, W(p.firstTitle || m(S)("r.level.1")), 1),
          L("div", mo, W(p.secondTitle || m(S)("r.level.2")), 1)
        ]),
        (B(!0), $(pe, null, ve(m(u), (f, _) => (B(), $("div", {
          class: "bodyJ",
          key: "checkboxJ" + _
        }, [
          L("div", ho, [
            E(d, {
              modelValue: f.checked,
              "onUpdate:modelValue": (b) => f.checked = b,
              indeterminate: f.indeterminate,
              onOnChange: (b) => n(f, b),
              disabled: p.disabled
            }, {
              default: z(() => [
                fe(W(f[p.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          L("div", yo, [
            (B(!0), $(pe, null, ve(f.children, (b, g) => (B(), $("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              E(d, {
                modelValue: b.checked,
                "onUpdate:modelValue": (y) => b.checked = y,
                onOnChange: c,
                disabled: p.disabled
              }, {
                default: z(() => [
                  fe(W(b[p.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), go = { class: "boxLPB" }, bo = { class: "headerF" }, ko = { class: "firstT borderBoxKa" }, wo = { class: "secondT borderBoxKa" }, Vo = { class: "thirdT borderBoxKa" }, _o = { class: "firstCol borderBoxKa" }, Co = { class: "rightBoxAL" }, Ao = { class: "secondCol borderBoxKa" }, Bo = { class: "thirdCol borderBoxKa" }, xo = /* @__PURE__ */ ue({
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
    const e = a, t = H([]), u = P(() => {
      let r = se(e.data), d = se(t.value);
      for (let f of r) {
        let _ = 0, b = 0;
        if (f.children && !Be(f.children))
          for (let g of f.children) {
            let y = 0;
            if (g.children && !Be(g.children))
              for (let V of g.children) {
                for (let T = 0, w = d.length; T < w; T++)
                  if (Array.isArray(e.collectVal)) {
                    let C = !0;
                    for (let x of e.collectVal)
                      if (d[T][x] !== V[x]) {
                        C = !1;
                        break;
                      }
                    if (C) {
                      V.checked = !0, y++, d.splice(T, 1);
                      break;
                    }
                  } else if (d[T] === V[e.collectVal]) {
                    V.checked = !0, y++, d.splice(T, 1);
                    break;
                  }
                !V.checked && (V.checked = !1);
              }
            y === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && y === g.children.length ? (g.checked = !0, g.indeterminate = !1, _++) : (g.checked = !1, g.indeterminate = !0, b++);
          }
        _ === 0 && b === 0 ? (f.checked = !1, f.indeterminate = !1) : f.children && _ === f.children.length ? (f.checked = !0, f.indeterminate = !1) : (f.checked = !1, f.indeterminate = !0);
      }
      return r;
    });
    ke(
      () => e.modelValue,
      (r, d) => {
        ll(t.value, r) || ll(r, d) || (t.value = r);
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
            for (let _ of f.children)
              _.checked = d;
      }
      s();
    }
    function c(r, d) {
      if (r.children)
        for (let f of r.children)
          f.checked = d;
      s();
    }
    function s() {
      p(u.value, !0);
    }
    function p(r, d) {
      let f = [];
      for (let _ of r) {
        if (!d && !e.leaf && _.checked && _.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let b = {};
            for (let g of e.collectVal)
              b[g] = _[g];
            f.push(b);
          } else
            N(e.collectVal) === "String" && f.push(_[e.collectVal]);
        if (_.children)
          for (let b of _.children) {
            if (!d && !e.leaf && b.checked && b.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let y of e.collectVal)
                  g[y] = b[y];
                f.push(g);
              } else
                N(e.collectVal) === "String" && f.push(b[e.collectVal]);
            if (b.children) {
              for (let g of b.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let y = {};
                    for (let V of e.collectVal)
                      y[V] = g[V];
                    f.push(y);
                  } else
                    N(e.collectVal) === "String" && f.push(g[e.collectVal]);
            }
          }
      }
      d ? (t.value = f, e.leaf ? (o("update:modelValue", f), o("on-change", se(f))) : Pe(function() {
        p(u.value);
      })) : (o("update:modelValue", f), o("on-change", se(f)));
    }
    return (r, d) => {
      const f = j("Checkbox");
      return B(), $("div", go, [
        L("div", bo, [
          L("div", ko, W(r.firstTitle || m(S)("r.level.1")), 1),
          L("div", wo, W(r.secondTitle || m(S)("r.level.2")), 1),
          L("div", Vo, W(r.thirdTitle || m(S)("r.level.3")), 1)
        ]),
        (B(!0), $(pe, null, ve(m(u), (_, b) => (B(), $("div", {
          class: "bodyF",
          key: "checkboxJ" + b
        }, [
          L("div", _o, [
            E(f, {
              modelValue: _.checked,
              "onUpdate:modelValue": (g) => _.checked = g,
              indeterminate: _.indeterminate,
              onOnChange: (g) => n(_, g),
              disabled: r.disabled
            }, {
              default: z(() => [
                fe(W(_[r.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          L("div", Co, [
            (B(!0), $(pe, null, ve(_.children, (g, y) => (B(), $("div", {
              class: "rightBoxInner",
              key: "secItem" + y
            }, [
              L("div", Ao, [
                E(f, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (V) => g.checked = V,
                  indeterminate: g.indeterminate,
                  onOnChange: (V) => c(g, V),
                  disabled: r.disabled
                }, {
                  default: z(() => [
                    fe(W(g[r.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              L("div", Bo, [
                (B(!0), $(pe, null, ve(g.children, (V, T) => (B(), $("div", {
                  class: "thirdItem",
                  key: "thirdItem" + T
                }, [
                  E(f, {
                    modelValue: V.checked,
                    "onUpdate:modelValue": (w) => V.checked = w,
                    onOnChange: s,
                    disabled: r.disabled
                  }, {
                    default: z(() => [
                      fe(W(V[r.label]), 1)
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
}), To = { class: "flexColumnBox wellCardR" }, So = { class: "panelHeader notGrow" }, Io = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Lo = { class: "btsF" }, Oo = { class: "growFlexItem relativeBox" }, Mo = { class: "fullFlowContent" }, Fo = /* @__PURE__ */ ue({
  __name: "WellCard",
  props: {
    title: {},
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const o = a, e = P(() => {
      let t = {
        width: o.width,
        height: o.height
      };
      o.inline && (t.display = "inline-block");
      for (let u in t)
        t.hasOwnProperty(u) && typeof t[u] == "number" && t[u] > 0 && (t[u] += "px");
      return t;
    });
    return (t, u) => (B(), $("div", {
      style: Q(m(e))
    }, [
      L("div", To, [
        L("div", So, [
          L("div", Io, W(o.title || m(S)("r.title")), 1),
          L("div", Lo, [
            xe(t.$slots, "bts")
          ])
        ]),
        L("div", Oo, [
          L("div", Mo, [
            xe(t.$slots, "default")
          ])
        ])
      ])
    ], 4));
  }
}), Ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: At,
  AsyncCascader: Ct,
  BtTablePage: Ll,
  CheckboxGroupThreeClass: xo,
  CheckboxGroupTwoClass: vo,
  CheckboxTree: Yn,
  EditorPro: Tt,
  FormGroup: qn,
  FormModal: Jn,
  FormR: vl,
  FullPop: ba,
  HeaderBt: st,
  Hello: wa,
  IconTxtBtn: Va,
  InputMap: _t,
  MonthRange: xt,
  Page404: xa,
  SearchForm: Ml,
  SelectInput: wt,
  ShowHidePanel: Tl,
  ShowHidePanelB: en,
  SideMenu: qa,
  TableIconBtn: Ya,
  TableSearch: tn,
  TableSetting: on,
  TransferBox: uo,
  UploadGroup: Bt,
  WellCard: Fo
}, Symbol.toStringTag, { value: "Module" }));
function St(a) {
  const o = (...n) => $e.apply(this, n), e = o("r.closePreview"), t = o("r.fullImg");
  let u = "previewImg" + Math.floor(Math.random() * 1e7);
  Ne.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (n) => ge(
      "div",
      {
        class: "previewModal",
        id: u
      },
      [
        ge(
          "div",
          {
            class: "previewModalInner"
          },
          [
            ge("img", {
              src: a,
              alt: t
            }),
            ge(ta, {
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
  }), Se(() => {
    var s, p, r, d, f, _;
    const n = (d = (r = (p = (s = document.getElementById(u)) == null ? void 0 : s.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : r.parentElement) == null ? void 0 : d.parentElement, c = (_ = (f = document.getElementById(u)) == null ? void 0 : f.parentElement) == null ? void 0 : _.nextSibling;
    n && (n.style.height = "0"), n && (n.style.padding = "0"), c && (c.style.display = "none");
  }, 10);
}
let el = !1;
function It({
  height: a,
  width: o = 416,
  title: e,
  content: t,
  onOk: u,
  onCancel: n,
  okText: c,
  cancelText: s,
  noWarnIcon: p,
  footerAlign: r,
  cancelBt: d = !0
}) {
  const f = (...y) => $e.apply(this, y);
  let b = (a && Number(a) - 90 > 100 ? Number(a) - 90 + "px" : 0) || "100px", g = N(t) === "String";
  Ne.warning({
    width: o,
    footerHide: !0,
    render: () => ge(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: b
        }
      },
      [
        ge(
          "div",
          {
            class: "containerN"
          },
          [
            ge(
              "div",
              {
                class: "titleN"
              },
              [
                ge("span", e || f("r.info.title")),
                ge(
                  kl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      el || Ne.remove();
                    }
                  },
                  () => ge("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            ge(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: g ? "center" : "left"
                }
              },
              [
                ge("i", {
                  class: g && !p ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                ge("div", { class: "msgBoxConO" }, t || f("r.info.text"))
              ]
            ),
            ge(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: r || "center"
                }
              },
              [
                ge(
                  kl,
                  {
                    class: "okBtN",
                    onClick(y) {
                      var V, T, w, C, x, I, M, h, O;
                      if (u && typeof u == "function") {
                        const v = u();
                        if (v && N(v) === "Promise") {
                          el = !0;
                          const U = (y == null ? void 0 : y.currentTarget) || (y == null ? void 0 : y.target);
                          U && ((T = (V = U.classList) == null ? void 0 : V.add) == null || T.call(V, "ivu-btn-loading"), (C = (w = U.nextSibling) == null ? void 0 : w.setAttribute) == null || C.call(w, "disabled", "disabled"), (O = (h = ((M = (I = (x = U.parentElement) == null ? void 0 : x.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : M.call(I, ".titleN .closeN")).classList) == null ? void 0 : h.add) == null || O.call(h, "disabled")), Promise.resolve(v).then(() => {
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
                    ge("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    ge("span", c || f("r.confirm"))
                  ]
                ),
                ge(
                  kl,
                  {
                    class: ["cancelBtN", !d && "hide"],
                    onClick() {
                      el || (Ne.remove(), N(n) === "Function" && n && n());
                    }
                  },
                  () => s || f("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function Lt(a, o, e, t) {
  const u = (...n) => $e.apply(this, n);
  Le.call(this, {
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
      const s = t.getHtml();
      if (u) {
        let p = u.children[0].children[1].children[0], r = u.children[0].children[1];
        p.innerHTML = s, p.style.width = n + "px", r.style.height = c + "px", u.style.display = "block";
      } else {
        const p = document.body, r = document.createElement("div");
        r.setAttribute("id", "editor-preview"), r.setAttribute("class", "editor-preview-mask"), r.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${n}' min='200'><span>高</span><input type='number' value='${c}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let d = r.children[0].children[1], f = r.children[0].children[1].children[0], _ = r.children[0].children[0].children[0].children[1];
        const b = 40, g = 70, y = (C) => {
          if (C && C.type === "keyup") {
            let M = !1;
            if (C.key && (M = C.key !== "Enter"), M)
              return;
          }
          let x = C.target.value;
          if (x = Number(x), f.style && f.style.width === x + "px")
            return;
          const I = p.clientWidth;
          x < 250 ? (x = 250, C.target.value = 250) : x > I - b && (x = I - b, C.target.value = I - b), f.style.width = x + "px", localStorage.setItem("editorPreviewW", x);
        };
        _.addEventListener("blur", y), _.addEventListener("keyup", y);
        let V = r.children[0].children[0].children[0].children[3];
        const T = (C) => {
          if (C && C.type === "keyup") {
            let M = !1;
            if (C.key && (M = C.key !== "Enter"), M)
              return;
          }
          let x = C.target.value;
          if (x = Number(x), d.style && d.style.height === x + "px")
            return;
          const I = p.clientHeight;
          x < 300 ? (x = 300, C.target.value = 300) : x > I - g && (x = I - g, C.target.value = I - g), d.style.height = x + "px", localStorage.setItem("editorPreviewH", x);
        };
        V.addEventListener("blur", T), V.addEventListener("keyup", T), r.children[0].children[0].children[1].addEventListener("click", () => {
          r.style.display = "none";
        }), f.innerHTML = s, f.style.width = n + "px", d.style.height = c + "px", p.append(r);
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
const et = {
  $fetch: Ke,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: St,
  $swal: Le,
  $swalConfirm: Lt,
  messageBox: It,
  setInterval: bt,
  setTimeout: Se,
  ...gt
}, Uo = function(a, o = {}) {
  Ke.init(o.useStore || o.store, a), o.locale && fl.use(o.locale), o.i18n && fl.i18n(o.i18n), o.router && ln(o.router), o.amap && bn(o.amap), o.notRegistryGlobal || (Object.keys(Ql).forEach((e) => {
    a.component(e) || a.component(e, Ql[e]);
  }), Object.keys(et).forEach((e) => {
    a.config.globalProperties[e] = et[e];
  })), a.directive("has") || a.directive("has", (e, t) => {
    t.value && !ht(t.value) && (e.style.display = "none");
  }), a.directive("loadmore") || a.directive("loadmore", (e, t) => {
    let u;
    t.arg ? u = e.querySelector("." + t.arg) : u = e.querySelector(".ivu-select-dropdown") || e, u.addEventListener("scroll", function() {
      u.scrollTop > 0 && u.scrollHeight - u.scrollTop <= u.clientHeight && t.value();
    });
  }), a.config.globalProperties.searchFormLabelWidth = 84, a.config.globalProperties.formModalLabelWidth = 140, a.config.globalProperties.formGroupLabelWidth = 160, a.config.globalProperties.iconTxtBtnIconSize = 17;
}, Ro = fl.use, Po = fl.i18n, Xo = {
  locale: Ro,
  i18n: Po,
  install: Uo,
  ...gt,
  ...Oa,
  $fetch: Ke,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: St,
  $swal: Le,
  $swalConfirm: Lt,
  messageBox: It,
  setInterval: bt,
  setTimeout: Se
};
export {
  Ke as $fetch,
  Le as $swal,
  Lt as $swalConfirm,
  At as AlCascaderMC,
  Ct as AsyncCascader,
  Ll as BtTablePage,
  xo as CheckboxGroupThreeClass,
  vo as CheckboxGroupTwoClass,
  Yn as CheckboxTree,
  Tt as EditorPro,
  qn as FormGroup,
  Jn as FormModal,
  vl as FormR,
  ba as FullPop,
  st as HeaderBt,
  wa as Hello,
  Va as IconTxtBtn,
  _t as InputMap,
  xt as MonthRange,
  xa as Page404,
  Ml as SearchForm,
  wt as SelectInput,
  Tl as ShowHidePanel,
  en as ShowHidePanelB,
  qa as SideMenu,
  Ya as TableIconBtn,
  tn as TableSearch,
  on as TableSetting,
  uo as TransferBox,
  Bt as UploadGroup,
  Fo as WellCard,
  Bl as clearObj,
  Ea as dataFilterOrToUrl,
  Ra as decimalDigitsLimit,
  Xo as default,
  pt as downloadFileByFormSubmit,
  ut as downloadFileReaderFile,
  Ia as emptyInput,
  dt as fakeALinkClick,
  Pa as fileExport,
  We as findCollection,
  pl as findPath,
  Ma as formDataHeadConfig,
  Ee as fullScreenImgByDom,
  St as fullScreenImgPreview,
  Ka as getColumnsKeys,
  rl as getFileSrc,
  Fl as getFileTypeByName,
  Al as getFileTypeIconByName,
  ct as getStringWidth,
  ht as hasPermission,
  Sa as htmlDecode,
  Ta as htmlEncode,
  Ga as htmlPrint,
  Da as isEmptyValue,
  ul as isImgByFile,
  yt as isNaN,
  $a as isNumberValue,
  we as isValidValue,
  It as messageBox,
  N as myTypeof,
  Ua as oneOf,
  xl as removeEmptyValue,
  bt as setInterval,
  Se as setTimeout,
  je as setValByOption,
  vt as siblingElems,
  La as stopBubbling,
  Na as stringLength,
  Fa as toFormData,
  rt as toHump,
  ft as toLine,
  mt as tooltipManual,
  ml as trimObj
};
//# sourceMappingURL=plugRQw.js.map
