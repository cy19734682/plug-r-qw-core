var Pt = Object.defineProperty;
var Kt = (t, i, e) => i in t ? Pt(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var Ze = (t, i, e) => (Kt(t, typeof i != "symbol" ? i + "" : i, e), e);
import { getCurrentInstance as pl, defineComponent as ue, resolveComponent as W, openBlock as B, createElementBlock as E, normalizeClass as Ae, normalizeStyle as Z, createBlock as q, createCommentVNode as fe, renderSlot as Se, ref as z, computed as P, withDirectives as xe, unref as m, createElementVNode as D, toDisplayString as le, createVNode as N, withCtx as j, createTextVNode as ge, vShow as Ie, resolveDirective as lt, h as he, Fragment as ke, renderList as _e, onBeforeMount as Dt, watch as we, nextTick as $e, isRef as Ue, onMounted as Xe, withModifiers as Nt, mergeProps as tl, onUnmounted as $t, shallowRef as bl, onBeforeUnmount as Et, createSlots as Je } from "vue";
import zt from "deepmerge";
import { isObject as Gt, isFunction as Ht, isPlainObject as qe, cloneDeep as me, isEmpty as Te, isBoolean as Wt, isNumber as Ye, debounce as jt, isString as tt, last as rl, isEqual as qt, first as wl, indexOf as zl, findIndex as at, remove as Yt, find as Gl } from "lodash-es";
import nl from "sweetalert";
import { Tooltip as Jt, TableColumnConfig as Xt, Radio as Zt, Input as Qt, Modal as Ne, Icon as ea, Button as gl } from "view-ui-plus";
import { useRouter as la, useRoute as ta } from "vue-router";
import { useI18n as aa } from "vue-i18n";
import kl from "axios";
import na from "ar-cascader";
import { Toolbar as oa, Editor as ia } from "@wangeditor/editor-for-vue";
import Qe from "moment";
import { Boot as sa } from "@wangeditor/editor";
const nt = {
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
}, ra = /(%|){([0-9a-zA-Z_]+)}/g;
function ua() {
  function t(e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  }
  function i(e, ...a) {
    let r;
    return a.length === 1 && typeof a[0] == "object" && (r = a[0]), (!r || !r.hasOwnProperty) && (r = {}), e === void 0 ? "" : e.replace(ra, (n, u, s, p) => {
      let d;
      return e[p - 1] === "{" && e[p + n.length] === "}" ? s : (d = t(r, s) ? r[s] : null, d ?? "");
    });
  }
  return i;
}
const da = ua();
let ul = nt;
const ca = {
  zh: nt
};
let Hl, Wl = {}, Ce, fa = function(t, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, i);
  if (Ce && Ce.global)
    return Ce.global.t(t, i);
  if (Ce && Ce.locale) {
    if (!Wl[Ce.locale] || Hl != Ce.locale) {
      Wl[Ce.locale] = !0;
      let e = Ce.getLocaleMessage(Ce.locale) || {}, a = zt(ca[Ce.locale], e, { clone: !0 });
      ul = a, Ce.setLocaleMessage(Ce.locale, a), Hl = Ce.locale;
    }
    return Ce.hlang(t, i);
  }
};
const Ke = function(t, i) {
  let e = fa.apply(this, [t, i]);
  if (e != null)
    return e;
  const a = t.split(".");
  let r = ul;
  for (let n = 0, u = a.length; n < u; n++) {
    const s = a[n];
    if (e = r[s], n === u - 1)
      return da(e, i);
    if (!e)
      return "";
    r = e;
  }
  return "";
}, pa = function(t) {
  ul = t || ul;
}, ma = function(t) {
  Ce = t;
}, dl = {
  use: pa,
  t: Ke,
  i18n: ma
};
function S(t, i) {
  var a, r, n;
  const e = (n = (r = (a = pl()) == null ? void 0 : a.appContext) == null ? void 0 : r.config) == null ? void 0 : n.globalProperties;
  return Ke.apply(e, [t, i]);
}
const ot = /* @__PURE__ */ ue({
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
    const e = t;
    function a() {
      e.disabled || i("click");
    }
    return (r, n) => {
      const u = W("Icon");
      return B(), E("div", {
        class: Ae({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: Z({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: a
      }, [
        e.icon ? (B(), q(u, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : fe("", !0),
        Se(r.$slots, "default")
      ], 6);
    };
  }
}), ya = { class: "headerTxtAM" }, ha = { class: "contentAM" }, va = /* @__PURE__ */ ue({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: i, emit: e }) {
    const a = t;
    let r = z(!1);
    const n = P(() => typeof a.headerFontSize == "number" ? a.headerFontSize + "px" : a.headerFontSize), u = P(() => ({ zIndex: a.zIndex }));
    function s() {
      r.value = !0, e("on-open");
    }
    function p(d) {
      r.value = !1, e("on-close", d === !0);
    }
    return i({
      open: s,
      close: p
    }), (d, c) => xe((B(), E("div", {
      class: "fullScreenPopBoxAM",
      style: Z(m(u))
    }, [
      D("div", {
        class: "headerAM",
        style: Z({ color: a.headerColor, backgroundColor: a.headerBg, fontSize: m(n) })
      }, [
        D("span", ya, le(d.title || m(S)("r.title")), 1),
        N(ot, {
          icon: "md-return-left",
          onClick: p
        }, {
          default: j(() => [
            ge(le(m(S)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      D("div", ha, [
        Se(d.$slots, "default")
      ])
    ], 4)), [
      [Ie, m(r)]
    ]);
  }
}), ga = { class: "msg" }, ba = /* @__PURE__ */ ue({
  __name: "Hello",
  setup(t) {
    let i = z("Greetings from Ricky.");
    return (e, a) => (B(), E("span", ga, le(m(i)), 1));
  }
});
function ml() {
  const { appContext: t } = pl();
  return t.config.globalProperties;
}
const wa = /* @__PURE__ */ ue({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => ml().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const e = t, a = P(() => Math.floor(e.size / 17 * 12) + "px");
    function r(n) {
      e.disabled || i("click", n);
    }
    return (n, u) => {
      const s = W("Icon"), p = lt("has");
      return xe((B(), E("div", {
        class: Ae(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: r,
        style: Z({ "font-size": m(a) })
      }, [
        N(s, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        ge(" " + le(e.name || m(S)("r.button")), 1)
      ], 6)), [
        [p, n.has]
      ]);
    };
  }
}), ka = { class: "c404K" }, Va = /* @__PURE__ */ D("div", { class: "t404" }, "404", -1), _a = { class: "ct404" }, Aa = { class: "p404" }, Ca = /* @__PURE__ */ ue({
  __name: "Page404",
  setup(t) {
    const e = pl().appContext.config.globalProperties.$router;
    function a() {
      e.go(-1);
    }
    return (r, n) => {
      const u = W("Button");
      return B(), E("div", ka, [
        Va,
        D("div", _a, "UH OH! " + le(m(S)("r.pageNotFound")), 1),
        D("div", Aa, le(m(S)("r.notFoundMsg")), 1),
        N(u, {
          class: "bt404",
          onClick: a
        }, {
          default: j(() => [
            ge(le(m(S)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Le(t, i, e) {
  const a = (...r) => Ke.apply(this, r);
  return new Promise((r, n) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let u = a("r.confirm"), s = a("r.cancel"), p = !1, d = "swalConfirmBt", c = "swalCancelBt";
      const y = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let x = "";
      t.text && y.test(K(t.text)) ? x = "content" : t.text && K(t.text) === "String" && (x = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (s = t.buttons.cancel.text) && (p = !0), t.buttons.cancel.className && (c = t.buttons.cancel.className), t.buttons.confirm.text && (u = t.buttons.confirm.text), t.buttons.confirm.className && (d = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (s = t.buttons[0], p = !0), t.buttons[1] && (u = t.buttons[1]))), nl({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [x]: t.text,
        buttons: {
          confirm: {
            text: u,
            value: !0,
            visible: !0,
            className: d
          },
          cancel: {
            text: s,
            value: null,
            visible: p,
            className: c
          }
        }
      }).then((_) => {
        _ && typeof t.onOk == "function" && t.onOk(), r(_);
      }).catch((_) => {
        n(_);
      });
    } else if (typeof t == "string") {
      let u = "";
      if (i)
        switch (typeof i) {
          case "string":
            u = "text";
            break;
          case "object":
            u = "content";
            break;
        }
      nl({
        title: t,
        [u]: i || "",
        icon: e || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: a("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((s) => {
        r(s);
      }).catch((s) => {
        n(s);
      });
    } else if (typeof t == "boolean")
      !t && nl.close && nl.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function it(t) {
  return t.replace(/_(\w)/g, function(i, e) {
    return e.toUpperCase();
  });
}
function xa(t) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = t : i.innerText = t, i.innerHTML;
}
function Ba(t) {
  let i = document.createElement("div");
  return i.innerHTML = t, i.innerText || i.textContent;
}
function il(t) {
  return new Promise((i) => {
    let e = new FileReader();
    e.readAsDataURL(t), e.onloadend = () => {
      i(e.result);
    };
  });
}
function Tl(t) {
  return t.split(".").pop().toLocaleLowerCase();
}
function sl(t) {
  return K(t) === "String" && t.indexOf("image") > -1;
}
function Vl(t) {
  const i = Tl(t);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(i) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(i) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(i) > -1 && (e = "ios-videocam"), e;
}
function st(t, i) {
  let e = document.createElement("a");
  e.href = i, e.download = t, rt(e);
}
function rt(t) {
  let i = document.createEvent("MouseEvents");
  i.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
}
function cl({
  group: t,
  condition: i,
  pathKey: e,
  childKey: a = "children",
  path: r = []
}) {
  if (t && Gt(t)) {
    if (Ht(i)) {
      if (qe(t)) {
        let n = t, u = me(r);
        if (i(n))
          return e && n[e] && u.push(n[e]), u;
        if (n[a] && !Te(n[a])) {
          e && n[e] && u.push(n[e]);
          let s = cl({
            group: n[a],
            condition: i,
            pathKey: e,
            childKey: a,
            path: u
          });
          if (!Te(s))
            return s;
        }
      } else if (Array.isArray(t))
        for (let n of t) {
          let u = me(r);
          if (i(n))
            return e && n[e] ? u.push(n[e]) : u.push(String(t.indexOf(n))), u;
          if (n[a] && n[a].length > 0) {
            e && n[e] ? u.push(n[e]) : u.push(String(t.indexOf(n)));
            let s = cl({
              group: n[a],
              condition: i,
              pathKey: e,
              childKey: a,
              path: u
            });
            if (!Te(s))
              return s;
          }
        }
    } else if (Array.isArray(t))
      for (let n of t) {
        let u = me(r);
        if (n === i)
          return u.push(String(t.indexOf(n))), u;
      }
  }
  return [];
}
function ut(t, i = 12) {
  if (K(t) === "String" && t.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = i + "px", e.style.fontFamily = "inherit", e.innerHTML = t, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const a = e.clientWidth;
    return document.body.removeChild(e), a;
  }
  return 0;
}
function La(t) {
  return t === "" ? null : t;
}
function Sa(t) {
  t = t || window.Event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
}
const Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: st,
  emptyInput: La,
  fakeALinkClick: rt,
  findPath: cl,
  getFileSrc: il,
  getFileTypeByName: Tl,
  getFileTypeIconByName: Vl,
  getStringWidth: ut,
  htmlDecode: Ba,
  htmlEncode: xa,
  isImgByFile: sl,
  stopBubbling: Sa,
  toHump: it
}, Symbol.toStringTag, { value: "Module" }));
function K(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function dt(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function fl(t) {
  let i = K(t);
  if (i === "Object") {
    for (let e in t)
      if (t.hasOwnProperty(e)) {
        let a = K(t[e]);
        a === "String" ? t[e] = t[e].trim() : (a === "Object" || a === "Array") && fl(t[e]);
      }
  } else if (i === "Array")
    for (let e = 0, a = t.length; e < a; e++) {
      let r = K(t[e]);
      r === "String" ? t[e] = t[e].trim() : (r === "Array" || r === "Object") && fl(t[e]);
    }
  return t;
}
function _l(t, i = []) {
  if (K(t) === "Array")
    return t.forEach((e, a) => {
      switch (K(e)) {
        case "Array":
        case "Object":
          _l(e);
          break;
        default:
          t[a] = null;
      }
    }), t;
  if (K(t) === "Object") {
    for (let e in t)
      if (t.hasOwnProperty(e)) {
        let a = !0;
        for (let r of i)
          if (r === e) {
            a = !1;
            break;
          }
        if (a)
          switch (K(t[e])) {
            case "Array":
            case "Object":
              _l(t[e]);
              break;
            default:
              t[e] = null;
          }
      }
    return t;
  } else
    return t;
}
const Ta = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Oa(t) {
  let i = new FormData();
  for (let e in t)
    t.hasOwnProperty(e) && t[e] !== null && i.append(e, t[e]);
  return i;
}
function He(t, i, e = !1) {
  if (!t || !i)
    return !1;
  let a, r = "notFoundC", n = function(u, s) {
    if (Array.isArray(u)) {
      if (K(s) === "Function" && s(u))
        return r = u, [];
      for (let p of u) {
        if (r !== "notFoundC")
          break;
        if (K(s) === "Function" && s(p) || p === s)
          return r = p, [u.indexOf(p)];
        if (K(p) === "Array" || K(p) === "Object") {
          let d = n(p, s);
          if (d !== void 0)
            return [u.indexOf(p), ...d];
        }
      }
    } else if (K(u) === "Object") {
      if (K(s) === "Function" && s(u))
        return r = u, [];
      for (let p in u) {
        if (r !== "notFoundC")
          break;
        if (u.hasOwnProperty(p)) {
          if (K(s) === "Function" && s(p) || u[p] === s)
            return r = u[p], [p];
          if (K(u[p]) === "Object" || K(u[p]) === "Array") {
            let d = n(u[p], s);
            if (d !== void 0)
              return [p, ...d];
          }
        }
      }
    }
  };
  return a = n(t, i), e ? a || !1 : r === "notFoundC" ? !1 : r;
}
function Ma(t, i) {
  for (let e = 0, a = i.length; e < a; e++)
    if (t === i[e])
      return !0;
  return !1;
}
function Fa(t, i = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), a = t && String(t) || "";
  return e.test(a) ? Number(a.replace(e, "$1")) : t;
}
function ct(t, i = {}, e = "get") {
  let a = document.createElement("form"), r = document.getElementsByTagName("body")[0];
  r.appendChild(a), a.setAttribute("style", "display:none"), a.setAttribute("target", ""), a.setAttribute("method", e);
  let n = t;
  if (window && window.hasOwnProperty("g")) {
    let u = Object.keys(window.g).filter((s) => s.indexOf("URL") > -1).map((s) => s.replace("URL", ""));
    for (let s of u) {
      let p = new RegExp("^/" + s + "(?=/.*$)", "i");
      if (p.test(t) && window.g[s + "URL"]) {
        n = window.g[s + "URL"] + t.replace(p, "");
        break;
      }
    }
  }
  if (a.setAttribute("action", n), qe(i)) {
    for (let s in i)
      if (i.hasOwnProperty(s) && (i[s] || i[s] === 0 || i[s] === !1 || i[s] === "")) {
        let p = document.createElement("input");
        p.setAttribute("type", "hidden"), p.setAttribute("name", s), p.setAttribute("value", i[s]), a.appendChild(p);
      }
    a.submit();
    let u = setTimeout(() => {
      r.removeChild(a), clearTimeout(u), u = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Ua(t, i = {}, e = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    Le.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  ct(t, i, e);
}
function Ra(t, i, e = !1) {
  let a;
  if (t && K(i) === "Array") {
    let r = localStorage.getItem(t);
    if (r) {
      let n = JSON.parse(decodeURI(r));
      a = i.filter((u) => u.key && n.indexOf(u.title) !== -1).map((u) => u.key);
    } else
      a = i.map((n) => n.key);
  } else
    a = [];
  return e || (a = String(a)), a;
}
function ve(t) {
  return t != null && t !== "";
}
function Pa(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function ft(t, i = !1, e = "") {
  return function(a, r) {
    var p, d;
    let n;
    if (Array.isArray(t)) {
      let c = [];
      for (let y of t)
        ve((p = r.row) == null ? void 0 : p[y]) && c.push(r.row[y]);
      n = c.join(e);
    } else
      typeof t == "function" ? n = t(r) : n = (d = r.row) == null ? void 0 : d[t];
    let u = ut(n), s = r.column._width;
    return n && u > s ? he(
      Jt,
      {
        style: {
          width: "100%"
        },
        content: n,
        maxWidth: s * 2
      },
      () => he(
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
    ) : he("span", i && !ve(n) ? "--" : n);
  };
}
function Ka(t) {
  if (qe(t)) {
    for (let i in t)
      if (t.hasOwnProperty(i) && ve(t[i]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let i of t)
      if (ve(i))
        return !1;
    return !0;
  }
  return !ve(t);
}
function Da(t) {
  return K(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : K(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function We({
  group: t,
  condition: i,
  key: e,
  val: a,
  childKey: r = "children"
}) {
  if (K(t) !== "Array" || K(i) !== "Function" || K(e) !== "String" || K(r) !== "String")
    return !1;
  t.forEach((n) => {
    i(n) && (K(a) === "Function" ? n[e] = a(n[e]) : n[e] = a), K(n[r]) === "Array" && n[r].length > 0 && We({
      group: n[r],
      condition: i,
      key: e,
      val: a,
      childKey: r
    });
  });
}
function pt(t) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(t) > -1 : !1;
}
function mt(t) {
  return K(t) === "Number" && String(t) === "NaN";
}
function Na(t, i = !1, e = !1) {
  if (K(t) !== "Object")
    return t;
  let a = Object.assign(t, {}), r = "";
  for (let n in a)
    if (a.hasOwnProperty(n)) {
      let u = a[n];
      u === void 0 || u === "" || K(u) === "String" && u.trim() === "" || u === null || mt(u) ? e ? i ? r += n + "=&" : a[n] = "" : delete a[n] : i && (r += n + "=" + u + "&");
    }
  return i ? r.length > 0 ? r.substring(0, r.length - 1) : "" : a;
}
function Al(t) {
  let i = {};
  if (Array.isArray(t)) {
    i = [];
    for (let e of t)
      Array.isArray(e) || qe(e) ? i.push(Al(e)) : ve(e) && i.push(e);
  } else if (qe(t))
    for (let e in t)
      t.hasOwnProperty(e) && (Array.isArray(t[e]) || qe(t[e]) ? i[e] = Al(t[e]) : ve(t[e]) && (i[e] = t[e]));
  return i;
}
function $a(t) {
  const i = window.open();
  if (i) {
    i.document.write(t);
    let e = setTimeout(() => {
      i.print(), window.clearTimeout(e), e = null;
    }, 10);
  }
}
function yt(t) {
  let i = [], e = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && i.push(t);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && i.push(e);
  return i;
}
const ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: _l,
  dataFilterOrToUrl: Na,
  decimalDigitsLimit: Fa,
  downloadFileByFormSubmit: ct,
  fileExport: Ua,
  findCollection: He,
  formDataHeadConfig: Ta,
  getColumnsKeys: Ra,
  hasPermission: pt,
  htmlPrint: $a,
  isEmptyValue: Ka,
  isNaN: mt,
  isNumberValue: Pa,
  isValidValue: ve,
  myTypeof: K,
  oneOf: Ma,
  removeEmptyValue: Al,
  setValByOption: We,
  siblingElems: yt,
  stringLength: Da,
  toFormData: Oa,
  toLine: dt,
  tooltipManual: ft,
  trimObj: fl
}, Symbol.toStringTag, { value: "Module" })), Ea = { class: "groupBoxRP" }, za = ["onClick"], Ga = /* @__PURE__ */ ue({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const i = t, e = la();
    function a(n) {
      return n.path === i.pathName ? "active" : "";
    }
    function r(n, u) {
      n.preventDefault();
      let s = n.target;
      if (!u.children && !s.classList.contains("active")) {
        e.push(u.path);
        return;
      }
      let p = s.parentNode, d = yt(p);
      for (let c of d) {
        c.classList.remove("open");
        const y = c.querySelectorAll(".open");
        for (let x of y)
          x.classList.remove("open");
      }
      p.classList.toggle("open");
    }
    return (n, u) => {
      const s = W("sideMenuGroup", !0);
      return B(), E("ul", Ea, [
        (B(!0), E(ke, null, _e(i.data, (p, d) => (B(), E("li", {
          class: Ae({ dropItemRP: p.children }),
          key: p.path + d
        }, [
          D("div", {
            class: Ae(["menuTxtR", a(p)]),
            onClick: (c) => r(c, p),
            style: Z({ paddingLeft: p.level * 20 + "px" })
          }, le(p.name || "-- no name --"), 15, za),
          p.children ? (B(), q(s, {
            key: 0,
            data: p.children,
            "path-name": i.pathName
          }, null, 8, ["data", "path-name"])) : fe("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), Ha = { class: "menuListR" }, Wa = /* @__PURE__ */ ue({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: i }) {
    const e = t, a = ta(), r = z(!0), n = z(), u = z(), s = P(() => r.value ? S("r.hideMenu") : S("r.showMenu")), p = P(() => r.value ? "ios-arrow-back" : "ios-arrow-forward");
    Dt(() => {
      let y = localStorage.getItem("menuDisplayR") || "";
      y !== "" ? r.value = JSON.parse(y) : (r.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), we(
      () => a.path,
      (y) => {
        n.value = y, $e(c);
      },
      { immediate: !0 }
    );
    function d() {
      r.value = !r.value, localStorage.setItem("menuDisplayR", JSON.stringify(r.value)), i("on-change", r.value);
    }
    function c() {
      let y = u.value.querySelectorAll(".dropItemRP");
      for (let x of y)
        x.querySelector(".active") && !x.classList.contains("open") && x.classList.add("open");
    }
    return (y, x) => {
      const _ = W("Icon");
      return B(), E("div", {
        ref_key: "menuRef",
        ref: u,
        class: "menuBoxRP"
      }, [
        xe(D("div", Ha, [
          N(Ga, {
            data: e.data,
            pathName: m(n)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [Ie, m(r)]
        ]),
        N(_, {
          type: m(p),
          size: 25,
          class: Ae([{ showIco: !m(r) }, "menuShowHideIco"]),
          title: m(s),
          onClick: d,
          color: m(r) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), ja = ["title"], qa = /* @__PURE__ */ ue({
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
    const e = t;
    function a(r) {
      e.disabled || i("click", r);
    }
    return (r, n) => {
      const u = W("Icon"), s = lt("has");
      return xe((B(), E("div", {
        class: Ae(["tableBtnsG", { disabled: e.disabled }]),
        onClick: a,
        title: e.title || m(S)("r.button")
      }, [
        N(u, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, ja)), [
        [s, e.has]
      ]);
    };
  }
}), Ya = { class: "contentX" }, Ja = { class: "arrowA" }, Cl = /* @__PURE__ */ ue({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(t) {
    const i = t, e = z(!0), a = P(() => e ? "background:" + i.bg || "transparent" : "");
    return (r, n) => {
      const u = W("Icon");
      return B(), E("div", {
        style: Z(m(a))
      }, [
        xe(D("div", Ya, [
          Se(r.$slots, "default")
        ], 512), [
          [Ie, m(e)]
        ]),
        D("div", Ja, [
          D("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (s) => e.value = !m(e))
          }, [
            N(u, {
              type: m(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Xa = { class: "contentZ" }, Za = /* @__PURE__ */ ue({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    const e = t, a = P({
      get() {
        return e.modelValue;
      },
      set(n) {
        i("update:modelValue", n);
      }
    }), r = P(() => a.value ? "background:" + e.bg : "");
    return (n, u) => (B(), E("div", {
      style: Z(m(r))
    }, [
      xe(D("div", Xa, [
        Se(n.$slots, "default")
      ], 512), [
        [Ie, m(a)]
      ])
    ], 4));
  }
});
let xl = [], Bl = [];
const Qa = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    xl.map((i) => {
      window.clearTimeout(i);
    }), Bl.map((i) => {
      window.clearInterval(i);
    }), xl.length = 0, Bl.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Be = function(t, i) {
  let e = window.setTimeout(t, i);
  return xl.push(e), e;
}, vt = function(t, i) {
  let e = window.setInterval(t, i);
  return Bl.push(e), e;
}, en = /* @__PURE__ */ ue({
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
    const e = t;
    let a = !1;
    const r = P({
      get() {
        return e.modelValue;
      },
      set(p) {
        i("update:modelValue", p);
      }
    }), n = P({
      get() {
        return e.open;
      },
      set(p) {
        i("on-toggle", p);
      }
    }), u = P(() => n.value ? "ios-arrow-up" : "ios-arrow-down");
    function s() {
      a || (a = !0, i("on-search", r.value), Be(() => {
        a = !1;
      }, 2e3));
    }
    return (p, d) => {
      const c = W("Input"), y = W("icon");
      return B(), E("div", {
        class: "tableSearchV",
        style: Z({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Se(p.$slots, "default", {}, () => [
          N(c, {
            modelValue: m(r),
            "onUpdate:modelValue": d[0] || (d[0] = (x) => Ue(r) ? r.value = x : null),
            style: Z({ width: e.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: e.placeholder || m(S)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        xe(D("span", {
          class: "sbt",
          onClick: d[1] || (d[1] = (x) => n.value = !m(n)),
          style: Z({ color: e.btnColor })
        }, [
          N(y, {
            type: m(u),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ge(le(m(S)("r.adSearch")), 1)
        ], 4), [
          [Ie, e.showBtn]
        ])
      ], 4);
    };
  }
}), ln = { class: "tabSetF" }, tn = { class: "topCheck" }, an = /* @__PURE__ */ ue({
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
  setup(t, { emit: i }) {
    const e = t, a = z(!0), r = z(!1), n = z(!1), u = z([]), s = P(() => {
      let h = S("r.unknown");
      return e.modelValue.length > u.value.length && (u.value = me(e.modelValue)), u.value.map((A) => {
        let L = { label: A && A.title || h };
        return A && A.disableShowSetting && (L.disabled = !0), L;
      });
    }), p = P(() => s.value.filter((h) => h.disabled)), d = P({
      get() {
        return e.modelValue.map((h) => h && h.title || S("r.unknown"));
      },
      set(h) {
        let A = u.value.filter((L) => {
          for (let b of h)
            if (b === L.title)
              return !0;
          return !1;
        });
        i("update:modelValue", A);
      }
    }), { locale: c } = aa();
    Xe(() => {
      let h = S("r.unknown"), A;
      c.value ? A = localStorage.getItem(e.sKey + "_" + c.value) : A = localStorage.getItem(e.sKey), A ? d.value = JSON.parse(decodeURI(A)) : e.defaultCheck && (d.value = e.modelValue.filter((L) => L.showSettingCheck).map((L) => L && L.title || h));
    });
    function y(h) {
      h.length === s.value.length ? (a.value = !1, r.value = !0) : h.length > p.value.length ? (a.value = !0, r.value = !1) : (a.value = !1, r.value = !1);
    }
    we(() => d.value, y, {
      immediate: !0,
      deep: !0
    });
    function x() {
      n.value || (n.value = !0);
    }
    function _() {
      c.value ? localStorage.setItem(e.sKey + "_" + c.value, encodeURI(JSON.stringify(d.value))) : localStorage.setItem(e.sKey, encodeURI(JSON.stringify(d.value))), n.value = !1;
    }
    function k() {
      a.value ? r.value = !1 : r.value = !r.value, a.value = !1, r.value ? d.value = s.value.map((h) => h.label) : d.value = p.value.map((h) => h.label);
    }
    return (h, A) => {
      const L = W("Icon"), b = W("Checkbox"), w = W("CheckboxGroup");
      return B(), E("div", ln, [
        D("div", {
          class: "tabSetBt",
          onClick: x
        }, [
          N(L, {
            type: "md-settings",
            size: "17"
          }),
          D("span", null, le(m(S)("r.tabSetting")), 1)
        ]),
        xe(D("div", {
          class: "tabSetCard",
          style: Z({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          D("div", tn, [
            N(b, {
              indeterminate: m(a),
              modelValue: m(r),
              "onUpdate:modelValue": A[0] || (A[0] = (C) => Ue(r) ? r.value = C : null),
              onClick: Nt(k, ["prevent"])
            }, {
              default: j(() => [
                ge(le(m(S)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            D("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: _
            }, le(m(S)("r.confirm")), 1)
          ]),
          N(w, {
            modelValue: m(d),
            "onUpdate:modelValue": A[1] || (A[1] = (C) => Ue(d) ? d.value = C : null)
          }, {
            default: j(() => [
              (B(!0), E(ke, null, _e(m(s), (C, I) => (B(), q(b, {
                class: "setItem",
                label: C && C.label,
                key: "tabSet_" + e.sKey + I,
                disabled: C && C.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [Ie, m(n)]
        ])
      ]);
    };
  }
});
let Ge = 0, ll = document.createElement("div");
ll.setAttribute("class", "spinModal");
ll.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ll);
};
function jl(t) {
  t ? ll.classList.add("show") : ll.classList.remove("show");
}
function gt(t) {
  let i = Ge;
  t ? Ge++ : Ge > 0 && Ge--, i !== Ge && (Ge === 0 ? jl(!1) : i === 0 && jl(!0));
}
const nn = window.location.origin;
let je = null;
const ql = (...t) => Ke.apply(je, t);
let Oe = kl.create({
  baseURL: nn,
  withCredentials: !0
  // 允许携带cookie
});
function on() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Oe.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function Yl() {
  var t, i;
  if (Oe.store)
    if (typeof Oe.store == "function") {
      const e = Oe.store();
      e.logout && e.logout();
    } else
      (i = (t = Oe.store) == null ? void 0 : t.dispatch) == null || i.call(t, "logout");
  else
    on();
}
Oe.interceptors.response.use(
  (t) => {
    var i, e;
    return je && (((i = t == null ? void 0 : t.data) == null ? void 0 : i.code) === 403 || ((e = t == null ? void 0 : t.data) == null ? void 0 : e.code) === 409) && je.messageBox({
      content: ql("r.http." + t.data.code),
      onOk: Yl
    }), t;
  },
  (t) => {
    var i, e;
    return je && (((i = t == null ? void 0 : t.response) == null ? void 0 : i.status) === 403 || ((e = t == null ? void 0 : t.response) == null ? void 0 : e.status) === 409) && je.messageBox({
      content: ql("r.http." + t.response.status),
      onOk: Yl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function De(t, i, e, a) {
  a && a.spin && gt(!1);
  let r = !0, n = t && t.data;
  if (n) {
    e = e || [];
    for (let u of e)
      n = n[u], r = r && n;
    return r ? n : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function sn(t, i, e, a, r, n, u) {
  return new Promise((s, p) => {
    switch (t) {
      case "get":
        Oe.get(i, { params: e }).then((c) => {
          let y = De(c, a, r, n);
          y ? s(y) : p(c);
        }).catch((c) => {
          De({}, a, r, n), p(c);
        });
        break;
      case "delete":
        let d = u ? "params" : "data";
        Oe.delete(i, { [d]: e }).then((c) => {
          let y = De(c, a, r, n);
          y ? s(y) : p(c);
        }).catch((c) => {
          De({}, a, r, n), p(c);
        });
        break;
      case "post":
        Oe.post(i, e, n).then((c) => {
          let y = De(c, a, r, n);
          y ? s(y) : p(c);
        }).catch((c) => {
          De({}, a, r, n), p(c);
        });
        break;
      case "put":
        Oe.put(i, e, n).then((c) => {
          let y = De(c, a, r, n);
          y ? s(y) : p(c);
        }).catch((c) => {
          De({}, a, r, n), p(c);
        });
        break;
    }
  });
}
function ol(t, i, e = {}, a, r, n, u) {
  return new Promise((s, p) => {
    var d;
    if (i) {
      n && n.spin && gt(!0);
      let c = i;
      if (window && window.hasOwnProperty("g")) {
        const _ = window.g;
        let k = Object.keys(_).filter((h) => h.indexOf("URL") > -1).map((h) => h.replace("URL", ""));
        for (let h of k) {
          let A = new RegExp("^/" + h + "(?=/.*$)", "i");
          if (A.test(i) && _[h + "URL"]) {
            c = _[h + "URL"] + i.replace(A, "");
            break;
          }
        }
      }
      let y;
      if (((d = n == null ? void 0 : n.headers) == null ? void 0 : d["Content-Type"]) === "multipart/form-data")
        y = e;
      else if (e && !Te(e))
        if (Array.isArray(e)) {
          y = [];
          for (let _ of e)
            (_ || _ === 0 || _ === !1 || _ === "" && n && !n.noEmptyStr) && y.push(_);
        } else {
          y = {};
          for (let _ in e)
            e.hasOwnProperty(_) && (e[_] || e[_] === 0 || e[_] === !1 || e[_] === "" && n && !n.noEmptyStr) && (y[_] = e[_]);
        }
      let x = t.toLowerCase();
      sn(x, c, y, a, r, n, u).then((_) => {
        s(_);
      }).catch((_) => {
        p(_);
      });
    } else
      console.error("没有请求地址:url"), p("没有请求地址:url");
  });
}
const Pe = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, i) {
    Oe.store = t, je = i.config.globalProperties;
  },
  post(t, i, e, a, r) {
    return new Promise((n, u) => {
      ol("post", t, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        u(s);
      });
    });
  },
  put(t, i, e, a, r) {
    return new Promise((n, u) => {
      ol("put", t, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        u(s);
      });
    });
  },
  get(t, i, e, a, r) {
    return new Promise((n, u) => {
      ol("get", t, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        u(s);
      });
    });
  },
  delete(t, i, e, a, r, n = !0) {
    return new Promise((u, s) => {
      ol("delete", t, i, e, a, r, n).then((p) => {
        u(p);
      }).catch((p) => {
        s(p);
      });
    });
  },
  all: kl.all,
  spread: kl.spread,
  config: Oe
}, rn = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, un = { class: "topBtn" }, dn = { class: "fullHeight relativeBox" }, cn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, fn = { class: "pageContainer" }, pn = 300, Ll = /* @__PURE__ */ ue({
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
  setup(t, { expose: i, emit: e }) {
    const a = t, { globalProperties: r } = pl().appContext.config;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...Xt });
    const u = r.pageSizes || [10, 20, 30, 40], s = z(a.data), p = z(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), d = z(1), c = z(0);
    let y = [], x, _, k = a.orderKey, h = a.orderDefault;
    const A = P(() => {
      for (let U of a.columns)
        if (U.fixed)
          return !0;
      return !1;
    }), L = P(() => a.selectionFixed || A.value), b = P(() => {
      let U = {
        ...a.searchData,
        current: d.value,
        size: p.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? U[h] = dt(k) : a.orderKeyFormat === "camelcase" && (U[h] = it(k))), U;
    }), w = P(() => {
      let U = a.columns.filter((F) => F.type !== "selection");
      if (a.selection || a.radio) {
        let F;
        a.radio ? F = {
          title: " ",
          width: 65,
          render: (ce, se) => he(Zt, {
            value: se.row.btChecked
          })
        } : F = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (F.fixed = a.selectionFixed), U.unshift(F);
      }
      return U.forEach((F) => {
        a.sortable === "custom" ? F.key && F.sortable !== !0 && F.sortable !== !1 && (F.sortable = "custom") : F.sortable = !1, F.align || (F.align = "center");
      }), a.tableEmptyTdHandle && U.forEach((F) => {
        F.key && F.render === void 0 && (F.tooltip ? F.render = ft(F.key, !0) : F.render = (ce, se) => {
          let be = se.row[F.key];
          return ce("span", be === "" || be === null || be === void 0 ? "--" : be);
        });
      }), U;
    }), C = P({
      get() {
        return s.value.map((U, F) => ({
          btKey: "bt-" + F,
          btChecked: !1,
          ...U
        }));
      },
      set(U) {
        s.value = U;
      }
    }), I = P(() => y.map((U) => U.id)), M = P(() => y.map((U) => U.btKey)), f = z();
    we(() => a.searchData, T, { deep: !0 });
    function T() {
      d.value = 1, Re();
    }
    function v() {
      a.initData && Re();
    }
    function O(U) {
      s.value.unshift(me(U)), Be(() => {
        var F, ce;
        (ce = (F = f.value) == null ? void 0 : F.clickCurrentRow) == null || ce.call(F, 0);
      }, 100);
    }
    function $(U, F, ce) {
      let se = null;
      if (Wt(F) && F ? se = _ : Ye(F) && (se = F), se !== null) {
        let be = s.value[se];
        for (let X in U)
          U.hasOwnProperty(X) && (be[X] = U[X]);
        ce && Be(() => {
          var X, Me;
          (Me = (X = f.value) == null ? void 0 : X.clickCurrentRow) == null || Me.call(X, se);
        }, 10);
      }
    }
    function Q(U) {
      s.value.splice(U, 1), Be(() => {
        var F, ce;
        (ce = (F = f.value) == null ? void 0 : F.clickCurrentRow) == null || ce.call(F, 0);
      }, 100);
    }
    function ae(U, F) {
      var ce, se;
      U.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((se = (ce = f.value) == null ? void 0 : ce.toggleSelect) == null || se.call(ce, F));
    }
    function H(U, F) {
      x = F.btKey, _ = Number(F.btKey.split("-")[1]), a.radio && (s.value[_].btChecked = !0);
    }
    function de(U) {
      if (a.radio)
        for (let F of C.value)
          F.btKey !== x && (s.value[Number(F.btKey.split("-")[1])].btChecked = !1);
      y = U, e("on-selection-change", U);
    }
    function pe() {
      return me(y);
    }
    function G(U) {
      d.value = U, Re();
    }
    function ye(U) {
      p.value = U, localStorage.setItem("btPageSize", String(U)), d.value === 1 && Re();
    }
    function ne({ key: U, order: F }) {
      h === "normal" ? (k = a.orderKey, h = a.orderDefault) : (k = U, h = F), d.value = 1, ie();
    }
    function oe() {
      var U, F;
      if (a.radio) {
        if (M.value.length > 0 && C.value.length > 0) {
          let ce = M.value[0].split("-")[1];
          C.value[ce].btChecked = !1;
        }
      } else
        (F = (U = f.value) == null ? void 0 : U.selectAll) == null || F.call(U, !1);
      y.length > 0 && (y = [], e("on-selection-change", [])), x = null, _ = null;
    }
    function re() {
      s.value = [], oe(), d.value = 1, c.value = 0;
    }
    function ie(U, F, ce) {
      return new Promise((se) => {
        U && (h = U), F && (k = F), a.url ? Pe.get(a.url, b.value, "", [], { spin: a.getDataLoading }).then((be) => {
          var Me, al;
          let X;
          ce || oe(), typeof a.dataHandler == "function" ? X = a.dataHandler(be) : X = be, X.data ? (X.data.records || X.data.records === null ? s.value = X.data.records || [] : X.data.page ? (X.data.page.records || X.data.page.records === null) && (s.value = X.data.page.records || []) : X.data.data ? (X.data.data.records || X.data.data.records === null) && (s.value = X.data.data.records || []) : s.value = X.data, c.value = ((Me = X.data.page) == null ? void 0 : Me.total) || ((al = X.data.data) == null ? void 0 : al.total) || X.data.total || X.total || 0, c.value === 0 && d.value > 1 && s.value && s.value.length === 0 ? d.value = 1 : d.value > 1 && c.value <= (d.value - 1) * p.value && (d.value--, $e(function() {
            ie(U, F);
          })), e("on-data-change", X), se(X)) : (console.warn("请求返回数据有误，无法使用"), re(), e("on-data-change", X));
        }).catch((be) => {
          console.warn(be), oe(), re(), e("on-data-change", be);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Re(U, F, ce) {
      a.radio && (U || a.rowClickNum !== -1) ? ie(F, ce, U).then(() => {
        s.value.length > 0 && Be(() => {
          var se, be, X, Me;
          U ? (be = (se = f.value) == null ? void 0 : se.clickCurrentRow) == null || be.call(se, _ || 0) : (Me = (X = f.value) == null ? void 0 : X.clickCurrentRow) == null || Me.call(X, a.rowClickNum);
        }, 10);
      }) : ie();
    }
    return Xe(v), i({
      selectedIds: I,
      addRow: O,
      setRowData: $,
      deleteRow: Q,
      getSelected: pe,
      clearSelect: oe,
      clearTableData: re,
      getTableData: ie,
      getDataAndClickRow: Re
    }), (U, F) => {
      const ce = W("Table"), se = W("Page");
      return B(), E("div", rn, [
        xe(D("div", un, [
          Se(U.$slots, "tableSetting"),
          Se(U.$slots, "topMsg"),
          Se(U.$slots, "topBtnGroup")
        ], 512), [
          [Ie, a.showTopRow]
        ]),
        D("div", {
          class: Ae(["tableContainer fullHeight", { noTop: !a.showTopRow, noPage: a.noPage }])
        }, [
          D("div", dn, [
            D("div", cn, [
              N(ce, tl({
                ref_key: "tableRef",
                ref: f
              }, U.$attrs, {
                height: m(L) && pn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !m(L), lightHeadO: a.lightHead },
                columns: m(w),
                data: m(C),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: H,
                onOnSelectionChange: de,
                onOnSortChange: ne,
                onOnRowClick: ae
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        xe(D("div", fn, [
          N(se, {
            modelValue: m(d),
            "onUpdate:modelValue": F[0] || (F[0] = (be) => Ue(d) ? d.value = be : null),
            "page-size-opts": m(u),
            total: m(c),
            "page-size": m(p),
            "show-sizer": "",
            "show-total": "",
            showElevator: !a.noElevator,
            size: a.pageComponentSize,
            onOnChange: G,
            onOnPageSizeChange: ye
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [Ie, !a.noPage]
        ])
      ], 512);
    };
  }
}), bt = /* @__PURE__ */ ue({
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
    const e = t, a = P({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(d) {
        let c = {
          key: d,
          val: null
        };
        a.value && a.value !== d && (c.beforeKey = a.value), i("update:modelValue", c), i("on-change", c);
      }
    }), r = P({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(d) {
        i("update:modelValue", {
          key: a.value,
          val: d
        });
      }
    }), n = P(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), u = P(() => ({ width: e.itemWidth + "px" }));
    function s(d) {
      var c;
      ((c = d == null ? void 0 : d.target) == null ? void 0 : c.value) !== void 0 && p({
        key: a.value,
        val: d.target.value
      });
    }
    const p = jt((d) => {
      i("on-change", d);
    }, 500);
    return (d, c) => {
      const y = W("Option"), x = W("Select"), _ = W("Input");
      return B(), E("div", null, [
        N(x, {
          modelValue: m(a),
          "onUpdate:modelValue": c[0] || (c[0] = (k) => Ue(a) ? a.value = k : null),
          style: Z(m(n)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: j(() => [
            (B(!0), E(ke, null, _e(e.selectOption, (k, h) => (B(), q(y, {
              value: k.val,
              key: "selectInputOp" + k.value + h,
              style: Z({ textAlign: e.labelTextAlign })
            }, {
              default: j(() => [
                ge(le(k.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        N(_, {
          modelValue: m(r),
          "onUpdate:modelValue": c[1] || (c[1] = (k) => Ue(r) ? r.value = k : null),
          placeholder: e.placeholder || m(S)("r.pInput"),
          style: Z(m(u)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: s
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var wt = { exports: {} };
(function(t, i) {
  (function(e, a) {
    t.exports = a();
  })(mn, function() {
    function e(y) {
      var x = [];
      return y.AMapUI && x.push(a(y.AMapUI)), y.Loca && x.push(r(y.Loca)), Promise.all(x);
    }
    function a(y) {
      return new Promise(function(x, _) {
        var k = [];
        if (y.plugins)
          for (var h = 0; h < y.plugins.length; h += 1)
            u.AMapUI.plugins.indexOf(y.plugins[h]) == -1 && k.push(y.plugins[h]);
        if (s.AMapUI === n.failed)
          _("前次请求 AMapUI 失败");
        else if (s.AMapUI === n.notload) {
          s.AMapUI = n.loading, u.AMapUI.version = y.version || u.AMapUI.version, h = u.AMapUI.version;
          var A = document.body || document.head, L = document.createElement("script");
          L.type = "text/javascript", L.src = "https://webapi.amap.com/ui/" + h + "/main.js", L.onerror = function(b) {
            s.AMapUI = n.failed, _("请求 AMapUI 失败");
          }, L.onload = function() {
            if (s.AMapUI = n.loaded, k.length)
              window.AMapUI.loadUI(k, function() {
                for (var b = 0, w = k.length; b < w; b++) {
                  var C = k[b].split("/").slice(-1)[0];
                  window.AMapUI[C] = arguments[b];
                }
                for (x(); p.AMapUI.length; )
                  p.AMapUI.splice(0, 1)[0]();
              });
            else
              for (x(); p.AMapUI.length; )
                p.AMapUI.splice(0, 1)[0]();
          }, A.appendChild(L);
        } else
          s.AMapUI === n.loaded ? y.version && y.version !== u.AMapUI.version ? _("不允许多个版本 AMapUI 混用") : k.length ? window.AMapUI.loadUI(k, function() {
            for (var b = 0, w = k.length; b < w; b++) {
              var C = k[b].split("/").slice(-1)[0];
              window.AMapUI[C] = arguments[b];
            }
            x();
          }) : x() : y.version && y.version !== u.AMapUI.version ? _("不允许多个版本 AMapUI 混用") : p.AMapUI.push(function(b) {
            b ? _(b) : k.length ? window.AMapUI.loadUI(k, function() {
              for (var w = 0, C = k.length; w < C; w++) {
                var I = k[w].split("/").slice(-1)[0];
                window.AMapUI[I] = arguments[w];
              }
              x();
            }) : x();
          });
      });
    }
    function r(y) {
      return new Promise(function(x, _) {
        if (s.Loca === n.failed)
          _("前次请求 Loca 失败");
        else if (s.Loca === n.notload) {
          s.Loca = n.loading, u.Loca.version = y.version || u.Loca.version;
          var k = u.Loca.version, h = u.AMap.version.startsWith("2"), A = k.startsWith("2");
          if (h && !A || !h && A)
            _("JSAPI 与 Loca 版本不对应！！");
          else {
            h = u.key, A = document.body || document.head;
            var L = document.createElement("script");
            L.type = "text/javascript", L.src = "https://webapi.amap.com/loca?v=" + k + "&key=" + h, L.onerror = function(b) {
              s.Loca = n.failed, _("请求 AMapUI 失败");
            }, L.onload = function() {
              for (s.Loca = n.loaded, x(); p.Loca.length; )
                p.Loca.splice(0, 1)[0]();
            }, A.appendChild(L);
          }
        } else
          s.Loca === n.loaded ? y.version && y.version !== u.Loca.version ? _("不允许多个版本 Loca 混用") : x() : y.version && y.version !== u.Loca.version ? _("不允许多个版本 Loca 混用") : p.Loca.push(function(b) {
            b ? _(b) : _();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var n;
    (function(y) {
      y.notload = "notload", y.loading = "loading", y.loaded = "loaded", y.failed = "failed";
    })(n || (n = {}));
    var u = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = { AMap: n.notload, AMapUI: n.notload, Loca: n.notload }, p = { AMap: [], AMapUI: [], Loca: [] }, d = [], c = function(y) {
      typeof y == "function" && (s.AMap === n.loaded ? y(window.AMap) : d.push(y));
    };
    return { load: function(y) {
      return new Promise(function(x, _) {
        if (s.AMap == n.failed)
          _("");
        else if (s.AMap == n.notload) {
          var k = y.key, h = y.version, A = y.plugins;
          k ? (window.AMap && location.host !== "lbs.amap.com" && _("禁止多种API加载方式混用"), u.key = k, u.AMap.version = h || u.AMap.version, u.AMap.plugins = A || u.AMap.plugins, s.AMap = n.loading, h = document.body || document.head, window.___onAPILoaded = function(b) {
            if (delete window.___onAPILoaded, b)
              s.AMap = n.failed, _(b);
            else
              for (s.AMap = n.loaded, e(y).then(function() {
                x(window.AMap);
              }).catch(_); d.length; )
                d.splice(0, 1)[0]();
          }, A = document.createElement("script"), A.type = "text/javascript", A.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + u.AMap.version + "&key=" + k + "&plugin=" + u.AMap.plugins.join(","), A.onerror = function(b) {
            s.AMap = n.failed, _(b);
          }, h.appendChild(A)) : _("请填写key");
        } else if (s.AMap == n.loaded)
          if (y.key && y.key !== u.key)
            _("多个不一致的 key");
          else if (y.version && y.version !== u.AMap.version)
            _("不允许多个版本 JSAPI 混用");
          else {
            if (k = [], y.plugins)
              for (h = 0; h < y.plugins.length; h += 1)
                u.AMap.plugins.indexOf(y.plugins[h]) == -1 && k.push(y.plugins[h]);
            k.length ? window.AMap.plugin(k, function() {
              e(y).then(function() {
                x(window.AMap);
              }).catch(_);
            }) : e(y).then(function() {
              x(window.AMap);
            }).catch(_);
          }
        else if (y.key && y.key !== u.key)
          _("多个不一致的 key");
        else if (y.version && y.version !== u.AMap.version)
          _("不允许多个版本 JSAPI 混用");
        else {
          var L = [];
          if (y.plugins)
            for (h = 0; h < y.plugins.length; h += 1)
              u.AMap.plugins.indexOf(y.plugins[h]) == -1 && L.push(y.plugins[h]);
          c(function() {
            L.length ? window.AMap.plugin(L, function() {
              e(y).then(function() {
                x(window.AMap);
              }).catch(_);
            }) : e(y).then(function() {
              x(window.AMap);
            }).catch(_);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, u = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = {
        AMap: n.notload,
        AMapUI: n.notload,
        Loca: n.notload
      }, p = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(wt);
var hn = wt.exports;
const vn = /* @__PURE__ */ yn(hn);
let Sl = { securityJsCode: "", key: "" };
function gn({ securityJsCode: t, key: i }) {
  Sl.securityJsCode = t, Sl.key = i;
}
function bn(t) {
  return Sl[t];
}
const kt = /* @__PURE__ */ ue({
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
    const e = t, a = P({
      get() {
        let w;
        return e.modelValue ? e.modelValue.name ? w = me(e.modelValue) : w = {
          ...e.modelValue,
          name: null
        } : w = {
          name: null
        }, w;
      },
      set(w) {
        i("update:modelValue", me(w));
      }
    }), r = P(() => Ye(e.width) ? e.width + "px" : e.width), n = P(() => Ye(e.height) ? e.height + "px" : e.height ? e.height : Ye(e.width) ? e.width * 0.66 + "px" : "200px"), u = P(() => ({
      width: r.value,
      position: "relative"
    })), s = P(() => ({
      width: r.value,
      height: n.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    we(
      () => e.modelValue,
      (w) => {
        if (w && w.lng && w.lat) {
          if (!k || !h)
            return;
          L({
            lng: w.lng,
            lat: w.lat,
            name: w.name
          });
        }
      }
    );
    const p = "mapId" + Math.floor(Math.random() * 1e9), d = z(null), c = z(null);
    let y;
    function x() {
      c.value && c.value.clientHeight < 10 || !c.value ? Be(x, 300) : Be(A, 100);
    }
    let _, k, h;
    function A() {
      vn.load({
        key: bn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((w) => {
        _ = w, k = new _.Map(p).on("complete", () => {
          var I, M, f, T;
          h = new _.Geocoder(), (I = e.modelValue) != null && I.lng && ((M = e.modelValue) != null && M.lat) && L({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const C = (T = (f = d.value) == null ? void 0 : f.$el) == null ? void 0 : T.children;
          C && C.length > 1 && new _.AutoComplete({
            input: C[1]
          }).on("select", (v) => {
            var O, $, Q;
            (O = v == null ? void 0 : v.poi) != null && O.name && (($ = v.poi.location) != null && $.lng && ((Q = v.poi.location) != null && Q.lat) ? (L({
              name: v.poi.name,
              lng: v.poi.location.lng,
              lat: v.poi.location.lat
            }), a.value = {
              name: v.poi.name,
              lng: v.poi.location.lng,
              lat: v.poi.location.lat
            }) : k.setCity(v.poi.name, () => {
              let ae = k.getCenter();
              L({
                name: v.poi.name,
                lng: ae.lng,
                lat: ae.lat
              }), a.value = {
                name: v.poi.name,
                lng: ae.lng,
                lat: ae.lat
              };
            })), i("on-change", a.value);
          }), k.on("hotspotclick", (v) => {
            L({
              name: v.name,
              lng: v.lnglat.lng,
              lat: v.lnglat.lat
            }), a.value = {
              name: v.name,
              lng: v.lnglat.lng,
              lat: v.lnglat.lat
            };
          });
        });
      });
    }
    function L({ lng: w, lat: C, name: I }) {
      k.clearMap();
      let M = new _.LngLat(w, C), f = new _.Marker({
        map: k,
        position: M,
        draggable: !0
      });
      k.add(f), b(w, C), f.on("dragend", () => {
        let T = f.getPosition();
        a.value = {
          name: I || null,
          lng: T.lng,
          lat: T.lat
        }, b(w, C);
      }), f.on("click", (T) => {
        y && y.open(k, T.target.getPosition());
      }), k.setFitView();
    }
    function b(w, C) {
      h.getAddress([w, C], (I, M) => {
        I === "complete" && M.info === "OK" && M.regeocode && M.regeocode.formattedAddress ? y = new _.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + M.regeocode.formattedAddress + "</div>",
          offset: new _.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (y = null, console.warn("地图获取位置信息失败", M));
      });
    }
    return Xe(x), $t(() => {
      k && (k.destroy(), k = null, h = null, y = null);
    }), (w, C) => (B(), E("div", {
      style: Z(m(u)),
      class: "containerIKJ"
    }, [
      N(m(Qt), {
        ref_key: "mapInputRef",
        ref: d,
        modelValue: m(a).name,
        "onUpdate:modelValue": C[0] || (C[0] = (I) => m(a).name = I),
        class: Ae({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || m(S)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      D("div", {
        style: Z(m(s)),
        ref_key: "mapRef",
        ref: c,
        id: p
      }, null, 4)
    ], 4));
  }
});
var Ql;
const Vt = /* @__PURE__ */ ue({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Ql = window == null ? void 0 : window.g) != null && Ql.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const e = t, a = z([]), r = P({
      get() {
        let d = e.modelValue;
        return Array.isArray(d) ? me(d) : Ye(d) ? cl({
          group: a.value,
          condition: (c) => c.value === d,
          pathKey: "value"
        }) : tt(d) ? d.split(e.separator) : [];
      },
      set(d) {
        if (e.onlyLastVal)
          Te(d) ? (i("update:modelValue", null), i("on-label-change", null)) : i("update:modelValue", rl(d));
        else {
          if (qt(e.modelValue, d))
            return;
          i("update:modelValue", me(d));
        }
      }
    });
    function n() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Pe.get(e.url).then((d) => {
        var y;
        let c = null;
        (y = d == null ? void 0 : d.data) != null && y.records ? c = d.data.records : d != null && d.data ? c = d.data : d && (c = d), c ? (typeof e.optionFilter == "function" && K(e.optionFilter) === "Function" && (c = e.optionFilter(c)), a.value = u(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function u(d) {
      let c = [];
      for (let y of d) {
        let x = {
          value: y[e.optionVal],
          label: y[e.optionLabel]
        };
        y.children && !Te(y.children) && (x.children = u(y.children)), c.push(x);
      }
      return c;
    }
    function s(d) {
      return e.onlyLastLabel ? rl(d) : d.join(e.separator);
    }
    function p(d, c) {
      let y = "";
      Te(c) || (y = c.map((x) => x.label).join(e.separator)), i("on-label-change", y);
    }
    return Xe(n), (d, c) => {
      const y = W("Cascader");
      return B(), q(y, {
        data: m(a),
        modelValue: m(r),
        "onUpdate:modelValue": c[0] || (c[0] = (x) => Ue(r) ? r.value = x : null),
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
}), _t = /* @__PURE__ */ ue({
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
    const e = t, a = z(), r = P({
      get() {
        if (e.modelValue && (Ye(e.modelValue) || tt(e.modelValue))) {
          let u = String(e.modelValue).trim();
          if (/^\d*$/.test(u)) {
            let p = u.substring(0, 2) + "0000", d, c = n(u);
            return c.length < 7 ? d = u.substring(0, 4) + "00" : d = u.substring(0, 6), /^8\d+$/.test(u) ? [p, c] : [p, d, c];
          }
          return u.indexOf(e.separator) !== -1 ? u.split(e.separator) : [u];
        } else
          return Array.isArray(e.modelValue) ? me(e.modelValue) : (a.value && (a.value.select = []), []);
      },
      set(u) {
        if (Te(u))
          i("update:modelValue", null), i("on-name-change", null);
        else {
          let s = rl(u), p = "", d = "";
          if (s && (p = s.code), p && p.length < 12) {
            let c = [...p];
            for (; c.length < 12; )
              c.push(0);
            p = c.join("");
          }
          if (Array.isArray(u) && (d = u.map((c) => c.name).join(e.separator)), p) {
            if (p === e.modelValue)
              return;
            i("update:modelValue", p);
          }
          d && i("on-name-change", d);
        }
      }
    });
    function n(u) {
      let s = [...u];
      for (; s[s.length - 1] === "0"; )
        s.pop();
      return s.join("");
    }
    return (u, s) => (B(), q(m(na), tl(u.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: a,
      modelValue: m(r),
      "onUpdate:modelValue": s[0] || (s[0] = (p) => Ue(r) ? r.value = p : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || m(S)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Ee(t) {
  var u, s, p;
  const i = (...d) => Ke.apply(this, d), e = i("r.closePreview"), a = i("r.fullImg");
  let r = wl(document.getElementsByTagName("body")), n = document.createElement("div");
  n.setAttribute("class", "fullScreenImgByDom"), n.innerHTML = `<div class='previewInner'><img src='${t}' alt='${a}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (s = (u = n.querySelector(".ivu-icon-md-close")) == null ? void 0 : u.addEventListener) == null || s.call(u, "click", function() {
    var c;
    let d = wl(document.getElementsByTagName("body"));
    (c = d == null ? void 0 : d.removeChild) == null || c.call(d, n);
  }), (p = r == null ? void 0 : r.appendChild) == null || p.call(r, n);
}
const wn = { class: "previewBoxM" }, kn = {
  key: 0,
  class: "previewImg"
}, Vn = ["src", "alt"], _n = { class: "deleteModal" }, An = { class: "previewBoxM" }, Cn = {
  key: 0,
  class: "previewImg"
}, xn = ["src", "alt"], Bn = { class: "deleteModal" }, Ln = { class: "customFileListM" }, Sn = {
  key: 0,
  class: "customFileListItem"
}, In = ["onClick", "title"], Tn = { class: "btBoxJ" }, On = { class: "customFileListM" }, Mn = {
  key: 0,
  class: "customFileListItem"
}, Fn = ["onClick", "title"], Un = { class: "btBoxJ" };
var et;
const At = /* @__PURE__ */ ue({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (et = window == null ? void 0 : window.g) != null && et.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const e = t, a = bl([]), r = bl([]), n = P(() => !e.manualUpload && e.showImg && d.value ? "img" : e.manualUpload && e.showImg && d.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "list" : ""), u = P(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), s = P({
      get() {
        if (e.manualUpload)
          return p.value;
        {
          let v = [];
          for (let O of p.value)
            typeof O == "object" && K(O) === "File" ? v.push(O) : (typeof O == "number" || typeof O == "string") && v.push({
              response: {
                data: [
                  {
                    id: O
                  }
                ]
              }
            });
          return v;
        }
      },
      set(v) {
        var O, $, Q;
        if (e.manualUpload)
          p.value = v;
        else {
          let ae = [];
          for (let H of v)
            (Q = ($ = (O = H.response) == null ? void 0 : O.data) == null ? void 0 : $[0]) != null && Q.id && ae.push(H.response.data[0].id);
          p.value = ae;
        }
      }
    }), p = P({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((v) => v !== "--") : K(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(v) {
        if (e.length === 1) {
          let O = wl(v);
          i("update:modelValue", O ?? null), i("on-change", O ?? null);
        } else
          i("update:modelValue", me(v)), i("on-change", me(v));
      }
    }), d = P(() => {
      let v;
      e.manualUpload ? v = s.value : v = r.value;
      for (let O of v) {
        let $;
        if (e.manualUpload ? $ = O && O.type : $ = O && O.mimeType, !$ || $ && !sl($))
          return !1;
      }
      return !0;
    });
    we(
      () => s.value,
      async (v) => {
        var O, $, Q, ae, H, de, pe, G, ye;
        if (n.value === "localImg")
          (v == null ? void 0 : v.length) > 0 ? a.value = await y(v) : a.value = [];
        else if ((v == null ? void 0 : v.length) > 0 && n.value !== "localList") {
          let ne = [];
          for (let oe of v)
            if (oe.name === void 0)
              if ((Q = ($ = (O = oe.response) == null ? void 0 : O.data) == null ? void 0 : $[0]) != null && Q.id) {
                let re = await Pe.get(e.url + "/" + oe.response.data[0].id).catch(() => {
                  ne.push({ name: S("r.file") + zl(v, oe) });
                }), ie = me(oe);
                ie.name = ((de = (H = (ae = re == null ? void 0 : re.data) == null ? void 0 : ae.returnValue) == null ? void 0 : H[0]) == null ? void 0 : de.name) || S("r.file") + zl(v, oe), ie.mimeType = ((ye = (G = (pe = re == null ? void 0 : re.data) == null ? void 0 : pe.returnValue) == null ? void 0 : G[0]) == null ? void 0 : ye.mimeType) || "unknown", ne.push(ie);
              } else
                ne.push({ name: S("r.unknown") });
            else
              ne.push(oe);
          r.value = ne;
        } else
          r.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function c(v) {
      return v.name || v.split && rl(v.split("/")) || v;
    }
    async function y(v) {
      let O = [];
      for (let $ of v) {
        let Q = await il($);
        O.push(Q);
      }
      return O;
    }
    function x(v) {
      if (!e.disabled) {
        let O = s.value;
        O.splice(v, 1), s.value = O;
      }
    }
    function _(v) {
      var O, $, Q;
      (Q = ($ = (O = v == null ? void 0 : v.response) == null ? void 0 : O.data) == null ? void 0 : $[0]) != null && Q.id && window.open(e.url + "/" + v.response.data[0].id + "/download");
    }
    function k(v) {
      var O, $, Q;
      return e.manualUpload ? v.type && sl(v.type) : ((Q = ($ = (O = v == null ? void 0 : v.response) == null ? void 0 : O.data) == null ? void 0 : $[0]) == null ? void 0 : Q.id) && v.mimeType && sl(v.mimeType);
    }
    function h(v) {
      e.manualUpload ? il(v).then((O) => {
        Ee(O);
      }) : Ee(e.url + "/" + v.response.data[0].id + "/download?preview=true");
    }
    function A(v) {
      K(v) === "String" && v.indexOf("http") > -1 ? window.open(v) : K(v) === "File" && il(v).then((O) => {
        st(v.name, O);
      });
    }
    function L(v) {
      if (e.manualUpload) {
        if (v) {
          let O = Tl(v.name);
          if (e.format.length > 0 && e.format.indexOf(O) < 0)
            return Le(
              S("r.wrongFileType"),
              S("r.supportType") + (e.format.length > 0 && String(e.format) || S("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && v.size > e.maxSize * 1024)
            return Le(S("r.fileIsBig"), S("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let $ = s.value;
          $.push(v), s.value = $;
        }
        return !1;
      } else
        return !0;
    }
    function b(v) {
      console.warn(v), Le(S("r.uploadError"), "", "error");
    }
    function w(v, O, $) {
      if (v && v.code === 0) {
        let Q = s.value;
        Q.push(O), s.value = Q;
      } else
        Le(S("r.uploadFail"), v && v.message || "", "error");
    }
    function C() {
      Le(S("r.fileIsBig"), S("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function I() {
      Le(
        S("r.wrongFileType"),
        S("r.supportType") + (e.format.length > 0 && String(e.format) || S("r.none")),
        "warning"
      );
    }
    function M(v) {
      var Q, ae, H, de, pe, G;
      let O = (H = (ae = (Q = v == null ? void 0 : v.response) == null ? void 0 : Q.data) == null ? void 0 : ae[0]) == null ? void 0 : H.id, $ = (G = (pe = (de = v == null ? void 0 : v.response) == null ? void 0 : de.data) == null ? void 0 : pe[0]) == null ? void 0 : G.mimeType;
      O && (K($) === "String" && $.indexOf("image") > -1 ? Ee(e.url + "/" + O + "/download?preview=true") : window.open(e.url + "/" + O + "/download?preview=true"));
    }
    function f(v) {
      var $, Q, ae;
      let O = (ae = (Q = ($ = v == null ? void 0 : v.response) == null ? void 0 : $.data) == null ? void 0 : Q[0]) == null ? void 0 : ae.id;
      T(null, O);
    }
    function T(v, O) {
      if (!e.disabled && p.value.indexOf(O) !== -1) {
        const $ = me(p.value);
        let Q = s.value;
        Q.splice($.indexOf(O), 1), s.value = Q;
      }
    }
    return (v, O) => {
      const $ = W("Button"), Q = W("Upload"), ae = W("Icon");
      return B(), E("div", null, [
        N(Q, {
          name: "files",
          action: m(u),
          "before-upload": L,
          "on-error": b,
          "on-success": w,
          "on-exceeded-size": C,
          "on-preview": M,
          "on-remove": f,
          "on-format-error": I,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && m(s).length >= e.length || !!e.disabled
        }, {
          default: j(() => [
            N($, {
              icon: "ios-cloud-upload-outline",
              class: Ae({ disabledR: e.length > 0 && m(s).length >= e.length || !!e.disabled })
            }, {
              default: j(() => [
                ge(le(m(S)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        xe(D("div", wn, [
          (B(!0), E(ke, null, _e(m(p), (H) => (B(), E(ke, { key: H }, [
            !e.manualUpload && H !== null ? (B(), E("div", kn, [
              D("img", {
                src: v.url + "/" + H + "/download?preview=true",
                alt: H
              }, null, 8, Vn),
              D("div", _n, [
                N(ae, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: m(S)("r.fView"),
                  onClick: (de) => m(Ee)(e.url + "/" + H + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                N(ae, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (de) => T(de, H),
                  title: m(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ], 512), [
          [Ie, m(n) === "img" && m(p).length > 0]
        ]),
        xe(D("div", An, [
          (B(!0), E(ke, null, _e(m(a), (H, de) => (B(), E(ke, {
            key: "manualImg" + de
          }, [
            e.manualUpload && H !== null ? (B(), E("div", Cn, [
              D("img", {
                src: H,
                alt: "manualImg" + de
              }, null, 8, xn),
              D("div", Bn, [
                N(ae, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (pe) => m(Ee)(H),
                  title: m(S)("r.fView")
                }, null, 8, ["onClick", "title"]),
                N(ae, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (pe) => x(de),
                  title: m(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ], 512), [
          [Ie, m(n) === "localImg" && m(a).length > 0]
        ]),
        xe(D("div", Ln, [
          (B(!0), E(ke, null, _e(m(s), (H, de) => (B(), E(ke, {
            key: "manualItem" + de
          }, [
            e.manualUpload && H !== null ? (B(), E("p", Sn, [
              H.name ? (B(), q(ae, {
                key: 0,
                type: m(Vl)(H.name)
              }, null, 8, ["type"])) : fe("", !0),
              D("span", {
                class: Ae(["upNameT", { previewName: k(H) }]),
                onClick: (pe) => A(H),
                title: m(S)("r.download")
              }, le(c(H)), 11, In),
              D("span", Tn, [
                k(H) ? (B(), q(ae, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (pe) => h(H),
                  title: m(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : fe("", !0),
                N(ae, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (pe) => x(de),
                  title: m(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ], 512), [
          [Ie, m(n) === "localList" && m(s).length > 0]
        ]),
        xe(D("div", On, [
          (B(!0), E(ke, null, _e(m(r), (H, de) => (B(), E(ke, {
            key: "defaultItem" + de
          }, [
            !e.manualUpload && H !== null ? (B(), E("p", Mn, [
              N(ae, {
                type: m(Vl)(H.name)
              }, null, 8, ["type"]),
              D("span", {
                class: Ae(["upNameT", { previewName: k(H) }]),
                onClick: (pe) => _(H),
                title: m(S)("r.download")
              }, le(H.name || m(S)("r.file") + (de + 1)), 11, Fn),
              D("span", Un, [
                k(H) ? (B(), q(ae, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (pe) => h(H),
                  title: m(S)("r.fView")
                }, null, 8, ["onClick", "title"])) : fe("", !0),
                N(ae, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (pe) => x(de),
                  title: m(S)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : fe("", !0)
          ], 64))), 128))
        ], 512), [
          [Ie, m(n) === "list" && m(r).length > 0]
        ])
      ]);
    };
  }
}), Rn = /* @__PURE__ */ D("div", { class: "bRoot" }, null, -1), Ct = /* @__PURE__ */ ue({
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
    const e = t, a = z(!1), r = z(!1), n = z(!1), u = P({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(h) {
        i("update:modelValue", [h, s.value]), i("on-change", [h, s.value]);
      }
    }), s = P({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(h) {
        i("update:modelValue", [u.value, h]), i("on-change", [u.value, h]);
      }
    }), p = P(
      () => (u.value || "") + ((u.value || s.value) && " - " || "") + (s.value || "")
    ), d = z();
    Xe(() => {
      d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        n.value = !0;
      }), d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        n.value = !1;
      }), d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (h) => {
        !e.disabled && (u.value || s.value) && (h.stopPropagation(), _());
      });
    });
    function c() {
      e.disabled || (a.value = !0);
    }
    function y(h) {
      u.value = h, a.value = !1, r.value = !0;
    }
    function x(h) {
      s.value = h, r.value = !1;
    }
    function _() {
      i("update:modelValue", [null, null]), i("on-change", [null, null]);
    }
    function k() {
      a.value = !1, r.value = !1, u.value && s.value === null && (u.value = null);
    }
    return (h, A) => {
      const L = W("DatePicker"), b = W("Icon"), w = W("Input");
      return B(), E("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: d
      }, [
        N(L, {
          open: m(r),
          modelValue: m(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: x,
          onOnClickoutside: k
        }, {
          default: j(() => [
            Rn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        N(L, {
          open: m(a),
          modelValue: m(u),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: y,
          onOnClickoutside: k
        }, {
          default: j(() => [
            D("div", { onClick: c }, [
              N(w, {
                class: "aRoot",
                modelValue: m(p),
                "onUpdate:modelValue": A[0] || (A[0] = (C) => Ue(p) ? p.value = C : null),
                readonly: "",
                placeholder: e.placeholder || m(S)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: j(() => [
                  N(b, {
                    type: m(n) && (m(u) || m(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Pn = { class: "editor-pro-root" }, xt = /* @__PURE__ */ ue({
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
    const e = t, a = bl(), r = P({
      get() {
        return e.modelValue;
      },
      set(d) {
        i("update:modelValue", d), i("on-change", d);
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
    ), u = P(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(d, c) {
                let y = new FormData();
                y.append("files", d);
                const x = d.name, _ = e.imgUploadUrl ?? "/node-serve/file";
                Pe.post(_, y, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((k) => {
                  if (k && k.data)
                    if (Array.isArray(k.data))
                      for (let h of k.data) {
                        const A = _ + "/" + h.id + "/download";
                        c(A, x, A);
                      }
                    else {
                      const h = _ + "/" + k.data.id + "/download";
                      c(h, x, h);
                    }
                }).catch(() => {
                  Le(S("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(d, c) {
                let y = new FormData();
                y.append("files", d);
                const x = e.videoUploadUrl ?? "/node-serve/file";
                Pe.post(x, y, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((_) => {
                  if (_ && _.data)
                    if (Array.isArray(_.data))
                      for (let k of _.data) {
                        const h = x + "/" + k.id + "/download";
                        c(h);
                      }
                    else {
                      const k = x + "/" + _.data.id + "/download";
                      c(k);
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
    function p(d) {
      a.value = d;
    }
    return we(
      () => e.disabled,
      (d) => {
        d ? a.value.disable() : a.value.enable();
      }
    ), Et(() => {
      a.value && a.value.destroy();
    }), (d, c) => (B(), E("div", Pn, [
      xe(N(m(oa), {
        class: "editor-pro-toolbar",
        editor: m(a),
        defaultConfig: m(n),
        mode: d.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [Ie, !d.disabled]
      ]),
      N(m(ia), {
        class: "editor-pro-editor",
        modelValue: m(r),
        "onUpdate:modelValue": c[0] || (c[0] = (y) => Ue(r) ? r.value = y : null),
        defaultConfig: m(u),
        mode: d.mode,
        onOnCreated: p,
        style: Z(m(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Kn = {
  key: 19,
  class: "formInfoTxtXN"
}, Dn = {
  key: 20,
  class: "formTitleTxtXN"
}, Jl = /* @__PURE__ */ ue({
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
    const e = t;
    function a(d) {
      return {
        withInfo: !!d.info,
        withTitle: !!d.title,
        inlineFormItemXN: e.inline,
        noLabel: d.type === "selectInput",
        [d.class]: d.class,
        slotInput: d.slotPosition
      };
    }
    function r(d, c) {
      i("item-change", {
        e: d,
        root: c
      });
    }
    function n(d, c) {
      i("re-validate", {
        e: d,
        root: c
      });
    }
    function u(d) {
      i("select-input-change", d);
    }
    function s(d, c) {
      i("al-name-change", {
        name: d,
        root: c
      });
    }
    function p(d, c) {
      i("async-label-change", {
        label: d,
        root: c
      });
    }
    return (d, c) => {
      const y = W("InputNumber"), x = W("Input"), _ = W("Option"), k = W("Select"), h = W("Radio"), A = W("Icon"), L = W("RadioGroup"), b = W("Checkbox"), w = W("CheckboxGroup"), C = W("DatePicker"), I = W("TimePicker"), M = W("FormItem");
      return B(), q(M, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Ae(["relativeBox", a(e.item)])
      }, {
        default: j(() => [
          e.item.type === "txt" ? (B(), E("div", {
            key: 0,
            style: Z([e.itemStyle, { display: "inline-block" }]),
            class: Ae({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, le(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (B(), q(y, {
            key: 1,
            style: Z(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[0] || (c[0] = (f) => e.tempKeys[e.item.tempKey] = f),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: c[1] || (c[1] = (f) => r(f, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (B(), q(x, {
            key: 2,
            style: Z(d.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (f) => e.tempKeys[e.item.tempKey] = f),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (f) => r(f, e.item)),
            clearable: e.item.clearable !== !1
          }, Je({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: j(() => [
                Se(d.$slots, e.item.slotName)
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: j(() => [
                D("span", null, le(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: j(() => [
                D("span", null, le(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (B(), q(k, {
            key: 3,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (f) => d.tempKeys[e.item.tempKey] = f),
            style: Z(d.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || m(S)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (f) => r(f, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: j(() => [
              (B(!0), E(ke, null, _e(e.item.options, (f, T) => (B(), q(_, {
                value: f.val,
                label: f.label || f.val,
                key: "option-" + e.item.key + T,
                disabled: !!f.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (B(), q(bt, {
            key: 4,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (f) => d.tempKeys[e.item.tempKey] = f),
            "label-width": d.labelWidth,
            "item-width": d.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: u
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (B(), q(_t, {
            key: 5,
            style: Z(d.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (f) => e.valGroup[e.item.key] = f),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || m(S)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (f) => s(f, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (B(), q(Vt, {
            key: 6,
            style: Z(d.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[9] || (c[9] = (f) => e.valGroup[e.item.key] = f),
            url: e.item.url || d.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || m(S)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: c[10] || (c[10] = (f) => p(f, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (B(), q(h, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (f) => e.valGroup[e.item.key] = f),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (f) => r(f, e.item))
          }, {
            default: j(() => [
              ge(le(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (B(), q(L, {
            key: 8,
            style: Z(d.itemStyle),
            onOnChange: c[13] || (c[13] = (f) => n(f, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (f) => d.tempKeys[e.item.tempKey] = f)
          }, {
            default: j(() => [
              (B(!0), E(ke, null, _e(e.item.options, (f) => (B(), q(h, {
                key: "radioItem" + f.val,
                label: f.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || f.disabled
              }, {
                default: j(() => [
                  f.icon && !e.item.buttonType ? (B(), q(A, {
                    key: 0,
                    type: f.icon
                  }, null, 8, ["type"])) : fe("", !0),
                  D("span", null, le(f.label || f.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (B(), q(b, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (f) => e.valGroup[e.item.key] = f),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (f) => r(f, e.item))
          }, {
            default: j(() => [
              ge(le(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (B(), q(w, {
            key: 10,
            style: Z(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (f) => d.tempKeys[e.item.tempKey] = f),
            onOnChange: c[18] || (c[18] = (f) => n(f, e.item))
          }, {
            default: j(() => [
              (B(!0), E(ke, null, _e(e.item.options, (f) => (B(), q(b, {
                key: "checkItem" + f.val,
                label: f.val,
                disabled: !!e.item.disabled || e.disabled || f.disabled
              }, {
                default: j(() => [
                  f.icon ? (B(), q(A, {
                    key: 0,
                    type: f.icon
                  }, null, 8, ["type"])) : fe("", !0),
                  D("span", null, le(f.label || f.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (B(), q(x, {
            key: 11,
            type: "textarea",
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (f) => d.tempKeys[e.item.tempKey] = f),
            autosize: e.item.autosize || { minRows: 2 },
            style: Z(d.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (f) => r(f, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (B(), q(At, {
            key: 12,
            style: Z(d.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[21] || (c[21] = (f) => e.valGroup[e.item.key] = f),
            url: e.item.url || d.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: c[22] || (c[22] = (f) => n(f, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (B(), q(C, {
            key: 13,
            style: Z(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[23] || (c[23] = (f) => d.tempKeys[e.item.tempKey] = f),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(S)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: c[24] || (c[24] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (B(), q(I, {
            key: 14,
            style: Z(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[25] || (c[25] = (f) => d.tempKeys[e.item.tempKey] = f),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(S)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: c[26] || (c[26] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (B(), q(Ct, {
            key: 15,
            style: Z(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (f) => d.tempKeys[e.item.tempKey] = f),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || m(S)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (B(), q(xt, {
            key: 16,
            class: "inlineBlock",
            style: Z(d.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (f) => e.valGroup[e.item.key] = f),
            placeholder: e.item.placeholder || m(S)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (B(), q(kt, {
            key: 17,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (f) => d.tempKeys[e.item.tempKey] = f),
            style: Z(d.itemStyle),
            placeholder: e.item.placeholder || m(S)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (f) => r(f, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (B(), E("div", {
            key: 18,
            class: "inlineBlock",
            style: Z(d.itemStyle)
          }, [
            Se(d.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : fe("", !0),
          e.item.info ? (B(), E("div", Kn, le(e.item.info), 1)) : fe("", !0),
          e.item.title ? (B(), E("div", Dn, le(e.item.title), 1)) : fe("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Nn = /* @__PURE__ */ D("input", { type: "text" }, null, -1), $n = { class: "inlineBlock" }, yl = /* @__PURE__ */ ue({
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
  setup(t, { expose: i, emit: e }) {
    var $l, El;
    const a = t, r = z(null), n = z({}), u = z([]), s = z({});
    let p = [];
    const d = (($l = window == null ? void 0 : window.g) == null ? void 0 : $l.mgrURL) ?? "";
    let c = [], y = [];
    const x = z(!1), _ = z(Math.random() * 1e8 + 1e3), k = (El = window == null ? void 0 : window.g) != null && El.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let h = !1;
    const A = P(() => Array.isArray(a.formData.length ? a.formData[0] : !1)), L = P(
      () => a.inline ? {
        width: a.itemWidth + a.labelWidth + "px"
      } : {}
    ), b = P(
      () => a.inline ? {
        width: "100%"
      } : { width: a.contentWidth }
    ), w = P(() => {
      let o = me(a.formRules);
      for (let l in o)
        if (o.hasOwnProperty(l))
          if (Array.isArray(o[l]))
            for (let V of o[l])
              V.message || V.validator || (V.message = S("r.required"));
          else
            K(o[l]) === "Object" && (o[l].message || o[l].validator || (o[l].message = S("r.required")));
      return o;
    }), C = P(() => {
      let o = [];
      if (A.value)
        for (let l of u.value)
          f(l, o);
      else
        f(u.value, o);
      return o.concat(c, y);
    }), I = P(() => {
      let o = [];
      if (A.value)
        for (let l of u.value)
          T(l, o);
      else
        T(u.value, o);
      return o;
    });
    function M(o) {
      return o.filter((l) => l.slotName);
    }
    function f(o, l) {
      for (let V of o)
        if (V.showing === !0 && V.key && V.type !== "selectInput" && (l.push(V.key), V.key2 && l.push(V.key2), V.collectLabel)) {
          if (!Array.isArray(V.collectLabel) && V.collectLabel.key)
            l.push(V.collectLabel.key);
          else if (Array.isArray(V.collectLabel))
            for (let g of V.collectLabel)
              g.key && l.push(g.key);
        }
    }
    function T(o, l) {
      for (let V of o)
        V.showing === !0 && V.key && V.type !== "selectInput" && l.push(V.key);
    }
    function v() {
      return new Promise((o) => {
        Q(), $().then(() => {
          e("on-reset"), o(!0);
        });
      });
    }
    function O() {
      return new Promise((o) => {
        for (let l of p)
          l();
        p = [], s.value = {}, F(), re(), $().then(() => {
          e("on-re-render"), o(!0);
        });
      });
    }
    function $() {
      return new Promise((o) => {
        _.value = Math.floor(Math.random() * 1e8 + 1e3), $e(function() {
          o(!0);
        });
      });
    }
    function Q() {
      let o = de();
      for (let l in n.value)
        if (n.value.hasOwnProperty(l))
          if (ve(o[l]))
            n.value[l] = o[l];
          else if (Array.isArray(n.value[l]))
            n.value[l] = [];
          else if (K(n.value[l]) === "Boolean")
            n.value[l] = !1;
          else {
            const V = He(a.formData, (g) => g.key === l);
            V && (V.type === "editor" || V.type === "editorPro") ? n.value[l] = "" : n.value[l] = null;
          }
      ae(o);
    }
    function ae(o) {
      for (let l in s.value)
        s.value.hasOwnProperty(l) && (ve(o[l]) ? s.value[l] = o[l] : Array.isArray(s.value[l]) ? s.value[l] = [] : K(s.value[l]) === "Object" && s.value[l].hasOwnProperty("key") && s.value[l].hasOwnProperty("val") ? s.value[l].val = null : s.value[l] = null);
    }
    function H(o) {
      let l = de();
      ve(l[o]) ? s.value[o] = l[o] : Array.isArray(s.value[o]) ? s.value[o] = [] : s.value[o] = null;
    }
    function de() {
      let o = {};
      if (A.value)
        for (let l of u.value)
          pe(l, o);
      else
        pe(u.value, o);
      return o;
    }
    function pe(o, l) {
      for (let V of o)
        V.tempKey && ve(V.defaultVal) && oe(V, l), V.key && ve(V.defaultVal) && (l[V.key] = V.defaultVal), V.key2 && ve(V.defaultVal2) && (l[V.key2] = V.defaultVal2);
    }
    function G(o) {
      if (o.show) {
        if (K(o.show) === "Object")
          return ne(o, ye(o.show));
        if (Array.isArray(o.show))
          if (o.showOr) {
            for (let l of o.show)
              if (ye(l) === !0)
                return ne(o, !0);
            return ne(o, !1);
          } else {
            for (let l of o.show)
              if (ye(l) === !1)
                return ne(o, !1);
            return ne(o, !0);
          }
        else if (K(o.show) === "Function")
          return ne(o, o.show(n.value));
      } else
        o.showing || (o.showing = !0);
      return !0;
    }
    function ye(o) {
      if (o.reg && typeof o.reg.test == "function")
        return o.reg.test(n.value[o.key]);
      if (Array.isArray(o.val)) {
        for (let l of o.val) {
          if ((n.value[o.key] || n.value[o.key] === 0 || n.value[o.key] === !1) && l === ".")
            return !0;
          if (n.value[o.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function ne(o, l) {
      return !o.showing && l && o.key ? (o.showing = l, o.defaultVal !== void 0 && (o.tempKey ? (s.value[o.tempKey] === null || s.value[o.tempKey] === void 0 || (K(s.value[o.tempKey]) === "Object" || Array.isArray(s.value[o.tempKey])) && Te(s.value[o.tempKey])) && oe(o, s.value) : (n.value[o.key] === null || n.value[o.key] === void 0) && (n.value[o.key] = o.defaultVal), o.key2 && o.deafultVal2 !== void 0 && (n.value[o.key2] === null || n.value[o.key2] === void 0) && o.type !== "inputMap" && (n.value[o.key2] = o.defaultVal2)), o.tempKey && se(s.value[o.tempKey], o)) : o.showing = l, l;
    }
    function oe(o, l) {
      switch (o.type) {
        case "selectInput":
          l[o.tempKey] = {
            key: o.key,
            val: o.defaultVal
          };
          break;
        case "inputMap":
          o.key3 ? l[o.tempKey] = {
            lng: o.defaultVal || 0,
            lat: o.defaultVal2 || 0,
            name: o.defaultVal3 || ""
          } : l[o.tempKey] = {
            lng: o.defaultVal || 0,
            lat: o.defaultVal2 || 0
          };
          break;
        case "input":
        case "inputNumber":
        case "textarea":
          l[o.tempKey] = o.defaultVal;
          break;
        case "radioGroup":
        case "select":
        case "checkboxGroup":
          o.booleanVal ? l[o.tempKey] = o.defaultVal ? 1 : 0 : l[o.tempKey] = o.defaultVal;
          break;
        case "date":
        case "time":
        case "monthRange":
          o.dateType === "date" || o.dateType === "datetime" || o.dateType === "time" || o.dateType === "year" || o.dateType === "month" ? l[o.tempKey] = o.defaultVal : (o.dateType === "daterange" || o.dateType === "datetimerange" || o.dateType === "timerange" || o.type === "monthRange") && (l[o.tempKey] = o.defaultVal && o.defaultVal2 && [o.defaultVal, o.defaultVal2] || []);
          break;
      }
    }
    function re() {
      let o = me(a.formData);
      if (A.value)
        for (let l of o)
          ie(l);
      else
        ie(o);
      u.value = o;
    }
    function ie(o) {
      for (let l of o)
        switch (l.type) {
          case "selectInput":
            const V = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = V, s.value[V] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, p.push(
              we(
                () => s.value[V],
                (R) => {
                  se(R, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const g = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = g, l.key3 ? s.value[g] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : s.value[g] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, p.push(
              we(
                () => s.value[g],
                (R) => {
                  se(R, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const te = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = te, s.value[te] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              we(
                () => s.value[te],
                (R) => {
                  se(R, l);
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
                  let R = !0;
                  for (let Y of l.changeOption)
                    if (!Y.valKey || !Y.key) {
                      R = !1;
                      break;
                    }
                  R ? p.push(
                    we(
                      () => {
                        let Y = "";
                        if (Array.isArray(l.changeOption))
                          for (let Ve of l.changeOption) {
                            let Fe = n.value[Ve.valKey];
                            if (Fe || Fe === 0 || Fe === !1)
                              Y += "&" + Ve.key + "=" + Fe;
                            else if (!Ve.notRequired)
                              return !1;
                          }
                        return Y;
                      },
                      (Y) => {
                        let Ve = me(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, Y && l.optionUrl) {
                          let Fe = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Re((Fe + Y).replace(/\?&/, "?"), l, Ve);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), ve(Ve) && U(Ve, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && p.push(
                    we(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? n.value[l.changeOption.valKey] : !1,
                      (R) => {
                        let Y = me(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, (R || R === 0 || R === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let Ve = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Re((Ve + "&" + l.changeOption.key + "=" + R).replace(/\?&/, "?"), l, Y);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), ve(Y) && U(Y, l);
                      },
                      { immediate: !0 }
                    )
                  ) : K(l.changeOption) === "Boolean" && p.push(
                    we(
                      () => He(a.formData, (R) => R.key === l.key).optionUrl,
                      (R) => {
                        let Y = me(s.value[l.tempKey]);
                        s.value[l.tempKey] = null, R ? Re(R, l, Y) : (l.options = [], l.localOption && (l.options = [...l.localOption]), ve(Y) && U(Y, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Re(l.optionUrl, l);
            else
              K(l.borrowOption) === "String" && (l.options = He(u.value, (R) => R.key === l.borrowOption).options);
            const ee = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = ee, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? s.value[ee] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? s.value[ee] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : s.value[ee] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              we(
                () => s.value[ee],
                (R) => {
                  se(R, l);
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
            const J = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = J, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? s.value[J] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (s.value[J] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), p.push(
              we(
                () => s.value[J],
                (R) => {
                  se(R, l);
                }
              )
            );
            break;
        }
    }
    function Re(o, l, V) {
      Pe.get(o).then((g) => {
        var ee;
        if (!l.options)
          return;
        let te = ((ee = g == null ? void 0 : g.data) == null ? void 0 : ee.records) || (g == null ? void 0 : g.data) || g || [];
        Array.isArray(te) ? (l.optionFilter && K(l.optionFilter) === "Function" && (te = l.optionFilter(te)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...te.map((J) => {
            let R;
            if (Array.isArray(l.optionLabel)) {
              let Y = "";
              l.optionLabel.forEach((Ve, Fe) => {
                let vl = String(J[Ve]);
                Fe === 1 ? Y += "（" + vl : Fe > 1 ? Y += "、" + vl : Y += vl;
              }), R = {
                label: Y + "）",
                val: l.optionVal && J[l.optionVal]
              };
            } else
              R = {
                label: l.optionLabel && J[l.optionLabel],
                val: l.optionVal && J[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let Y of l.collectLabel)
                  Y.valKey && Y.valKey !== "label" && (R[Y.valKey] = J[Y.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (R[l.collectLabel.valKey] = J[l.collectLabel.valKey]);
            if (R.val !== null && R.val !== void 0)
              return R;
          })
        )) : (l.options.length = 0, l.options.push(...te))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), ve(V) && U(V, l), l.disableOptionByOthers && (K(l.disableOptionByOthers) === "String" ? p.push(
          we(
            () => n.value[l.disableOptionByOthers],
            (J) => {
              if (H(l.tempKey), !!l.options) {
                for (let R of l.options)
                  R.disabled && (R.disabled = !1);
                if (J || J === 0 || J === !1)
                  for (let R of l.options)
                    R.val === J && (R.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && p.push(
          we(
            () => l.disableOptionByOthers.filter((J) => J).map((J) => n.value[J]),
            (J) => {
              if (H(l.tempKey), !!l.options) {
                for (let R of l.options)
                  R.disabled && (R.disabled = !1);
                if (J) {
                  for (let R of l.options)
                    for (let Y = 0; Y < J.length; Y++)
                      if (R.val === J[Y]) {
                        R.disabled = !0, J.splice(Y, 1);
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
    function U(o, l) {
      Array.isArray(l.options) && at(l.options, { val: o }) !== -1 && (s.value[l.tempKey] = o);
    }
    function F() {
      if (n.value = {}, A.value)
        for (let o of a.formData)
          ce(o);
      else
        ce(a.formData);
    }
    function ce(o) {
      for (let l of o)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (n.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function se(o, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            o && (o.beforeKey && delete n.value[o.beforeKey], n.value[o.key] = o.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            o ? (n.value[l.key] = o.lng, n.value[l.key2] = o.lat, l.key3 && (n.value[l.key3] = o.name)) : (n.value[l.key] = null, n.value[l.key2] = null, l.key3 && (n.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (o || o === 0) {
              let te = /^-?\d+(.\d+)?$/;
              l.numberVal && te.test(o) ? n.value[l.key] = Number(o) : n.value[l.key] = o;
            } else
              n.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? n.value[l.key] = o === void 0 || o === "" || o === null ? null : !!o : l.multiple || l.type === "checkboxGroup" ? n.value[l.key] = Object.assign([], o) : n.value[l.key] = o, l.collectLabel) {
              const te = be(l, o);
              if (Array.isArray(l.collectLabel)) {
                for (let ee of l.collectLabel)
                  if (ee.key && ee.valKey) {
                    const J = X(ee.key);
                    let R = null;
                    Array.isArray(te) ? (R = te.map((Ve) => Ve[ee.valKey]), n.value[ee.key] = R, J && (s.value[J] = R)) : (te && ve(te[ee.valKey]) && (R = te[ee.valKey]), n.value[ee.key] = R, J && (s.value[J] = R));
                    let Y = He(u.value, (Ve) => Ve.key === ee.key);
                    Y && Y.tempKey && (s.value[Y.tempKey] = n.value[ee.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const ee = X(l.collectLabel.key);
                let J = null;
                Array.isArray(te) ? (J = te.map(
                  (Y) => l.collectLabel && !Array.isArray(l.collectLabel) && Y[l.collectLabel.valKey]
                ), n.value[l.collectLabel.key] = J, ee && (s.value[ee] = J)) : (te && ve(te[l.collectLabel.valKey]) && (J = te[l.collectLabel.valKey]), n.value[l.collectLabel.key] = J, ee && (s.value[ee] = J));
                let R = He(
                  u.value,
                  (Y) => l.collectLabel && !Array.isArray(l.collectLabel) && Y.key === l.collectLabel.key || !1
                );
                R && R.tempKey && (s.value[R.tempKey] = n.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let V = l.dateType;
            const g = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "MM"
            };
            if (V === "date" || V === "datetime" || V === "time" || V === "year" || V === "month")
              o ? (V === "time" ? n.value[l.key] = o : n.value[l.key] = Qe(o).format(typeof l.format == "string" ? l.format : g[V]), V === "date" && l.addTime && (n.value[l.key] += " 00:00:00")) : n.value[l.key] = null;
            else if (l.type === "monthRange" || V === "daterange" || V === "datetimerange" || V === "timerange") {
              if (!l.key2)
                return;
              o && o[0] && o[1] ? (V === "timerange" ? (n.value[l.key] = o[0], n.value[l.key2] = o[1]) : l.type === "monthRange" ? (n.value[l.key] = typeof l.format == "string" && Qe(o[0]).format(l.format) || o[0], n.value[l.key2] = typeof l.format == "string" && l.format && Qe(o[1]).format(l.format) || o[1]) : (n.value[l.key] = Qe(o[0]).format(l.format || V && g[V]), n.value[l.key2] = Qe(o[1]).format(l.format || V && g[V])), V === "daterange" && l.addTime && (n.value[l.key] += " 00:00:00", n.value[l.key2] += " 23:59:59")) : (n.value[l.key] = null, n.value[l.key2] = null);
            }
            break;
        }
    }
    function be(o, l) {
      if (o.options)
        if (o.multiple || o.type === "checkboxGroup") {
          if (l) {
            let V = [];
            for (let g of o.options)
              l.indexOf(g.val) !== -1 && V.push(g);
            return V;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let V of o.options)
              if (V.val === l)
                return V;
          }
          return !1;
        }
    }
    function X(o) {
      if (A.value) {
        for (let l of u.value) {
          const V = Me(l, o);
          if (V)
            return V;
        }
        return !1;
      }
      return Me(u.value, o);
    }
    function Me(o, l) {
      for (let V of o)
        if (V.key === l)
          return V.tempKey;
      return !1;
    }
    function al(o, l) {
      let V = {};
      for (let g in n.value)
        n.value.hasOwnProperty(g) && o[g] !== void 0 && (V[g] = o[g], delete o[g]);
      Ml(V, l);
      for (let g in o)
        o.hasOwnProperty(g) && (y.indexOf(g) < 0 && y.push(g), n.value[g] = o[g]);
    }
    function It(o) {
      let l = me(o);
      if (A.value) {
        let V = [];
        for (let g of a.formData)
          V.push(...Ol(g, l));
        return V;
      }
      return Ol(a.formData, l);
    }
    function Ol(o, l) {
      return o.filter((V) => {
        for (let g of Object.keys(l))
          if (V.key === g && I.value.indexOf(g) > -1 && !(l[g] === null || (Array.isArray(l[g]) || K(l[g]) === "Object") && Te(l[g])))
            return delete l[g], !0;
        return !1;
      }).map((V) => V.key);
    }
    function Ml(o, l = !1) {
      let V = me(o);
      Tt(o, l);
      for (let g in n.value)
        if (n.value.hasOwnProperty(g) && o[g] !== void 0 && o[g] !== "--") {
          if (Array.isArray(o[g]))
            o[g] = o[g].filter((te) => te !== "--");
          else if (K(o[g]) === "Object")
            for (let te in o[g])
              o[g].hasOwnProperty(te) && o[g][te] === "--" && (o[g][te] = null);
          n.value[g] = o[g];
        } else
          l || (n.value[g] = Array.isArray(n.value[g]) ? [] : null);
      Ut(It(V));
    }
    function Tt(o, l = !1) {
      if (A.value)
        for (let V of u.value)
          Fl(V, o, l);
      else
        Fl(u.value, o, l);
    }
    function Fl(o, l, V = !1) {
      for (let g of o)
        if (g.key && (V && (l[g.key] !== void 0 || g.key2 && l[g.key2] !== void 0) || !V) && g.tempKey)
          switch (g.type) {
            case "inputMap":
              if (!g.key2)
                continue;
              K(l[g.key]) === "Number" && K(l[g.key2] === "Number") ? g.key3 ? s.value[g.tempKey] = {
                lng: l[g.key],
                lat: l[g.key2],
                name: l[g.key3]
              } : s.value[g.tempKey] = {
                lng: l[g.key],
                lat: l[g.key2]
              } : g.key3 ? s.value[g.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : s.value[g.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[g.key] && l[g.key] !== "--" || l[g.key] === 0 ? s.value[g.tempKey] = l[g.key] : s.value[g.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[g.key] && l[g.key] !== "--" || l[g.key] === 0 || l[g.key] === !1 ? g.multiple || g.type === "checkboxGroup" ? s.value[g.tempKey] = [...l[g.key]] : g.booleanVal ? s.value[g.tempKey] = l[g.key] ? 1 : 0 : s.value[g.tempKey] = l[g.key] : g.multiple || g.type === "checkboxGroup" ? s.value[g.tempKey] = [] : s.value[g.tempKey] = null;
              break;
            case "date":
            case "time":
              if (g.dateType === "date" || g.dateType === "datetime" || g.dateType === "year" || g.dateType === "month" || g.dateType === "time")
                s.value[g.tempKey] = l[g.key] && l[g.key] !== "--" ? l[g.key] : null;
              else if (g.dateType === "daterange" || g.dateType === "datetimerange" || g.dateType === "timerange") {
                if (!g.key2)
                  continue;
                s.value[g.tempKey] = l[g.key] && l[g.key] !== "--" && l[g.key2] && l[g.key2] !== "--" && [l[g.key], l[g.key2]] || [];
              }
              break;
          }
    }
    function Ot(o) {
      if (Array.isArray(o))
        for (let l of o)
          Ul(l);
      else
        K(o) === "Object" && Ul(o);
    }
    function Ul(o) {
      const { index: l, indexB: V, key: g, val: te } = o;
      if (typeof l == "number")
        if (Array.isArray(u.value[l])) {
          if (typeof V == "number")
            if (g && (te || te !== void 0))
              u.value[l][V][g] = te;
            else
              for (let ee of Object.keys(o))
                ee !== "index" && g !== "indexB" && (u.value[l][V][ee] = o[ee]);
        } else if (g && (te || te !== void 0))
          u.value[l][g] = te;
        else
          for (let ee of Object.keys(o))
            ee !== "index" && (u.value[l][ee] = o[ee]);
    }
    function Rl({ label: o, root: l }) {
      l.key2 && (n.value[l.key2] = o), ze({
        e: o,
        root: l
      });
    }
    function Pl(o) {
      o.beforeKey && Yt(c, (l) => l === o.beforeKey), o.key && (c.indexOf(o.key) === -1 && c.push(o.key), ze({
        e: null,
        root: o
      }));
    }
    function Kl({ name: o, root: l }) {
      l.key2 && (n.value[l.key2] = o), ze({
        e: o,
        root: l
      });
    }
    function Dl({ e: o, root: l }) {
      ze({
        e: o,
        root: l
      }), $e(function() {
        var V, g;
        (g = (V = r.value) == null ? void 0 : V.validateField) == null || g.call(V, l.key);
      });
    }
    function ze({ e: o, root: l }) {
      Be(() => {
        let V = {
          event: o
        };
        if (l.key && (V[l.key] = n.value[l.key]), l.key2 && (V[l.key2] = n.value[l.key2]), Array.isArray(l.collectLabel))
          for (let g of l.collectLabel)
            V[g.key] = n.value[g.key];
        else
          l.collectLabel && l.collectLabel.key && (V[l.collectLabel.key] = n.value[l.collectLabel.key]);
        e("on-item-change", V);
      }, 500);
    }
    function Nl() {
      let o = {};
      for (let l of C.value)
        o[l] = n.value[l];
      return a.trim && (o = fl(o)), o;
    }
    function Mt() {
      var o, l;
      (l = (o = r.value) == null ? void 0 : o.validate) == null || l.call(o);
    }
    function Ft(o) {
      Be(() => {
        var l, V;
        (V = (l = r.value) == null ? void 0 : l.validateField) == null || V.call(l, o, () => {
        });
      }, 10);
    }
    function Ut(o) {
      Be(() => {
        var l, V;
        if (Array.isArray(o))
          for (let g of o)
            (V = (l = r.value) == null ? void 0 : l.validateField) == null || V.call(l, g, () => {
            });
      }, 10);
    }
    function Rt(o) {
      o !== void 0 && (x.value = !!o);
    }
    function hl() {
      var o, l;
      a.disabled || (l = (o = r.value) == null ? void 0 : o.validate) == null || l.call(o, (V) => {
        h || (h = !0, V && (x.value = !0, e("on-submit", Nl())), Be(() => {
          h = !1;
        }, 2e3));
      });
    }
    return Xe(() => {
      F(), re();
    }), i({
      resetForm: v,
      refreshFormDom: $,
      reRenderForm: O,
      setItemToValGroup: al,
      updateValGroup: Ml,
      updateFormDataT: Ot,
      validate: Mt,
      reValidate: Ft,
      changeLoading: Rt,
      getValGroup: Nl,
      submit: hl
    }), (o, l) => {
      const V = W("FormItem"), g = W("Button"), te = W("Form");
      return B(), q(te, {
        ref_key: "formGroupXRef",
        ref: r,
        model: m(n),
        rules: m(w),
        "label-width": a.labelWidth,
        inline: a.inline,
        "show-message": a.showMessage,
        class: "formXN",
        key: m(_)
      }, {
        default: j(() => [
          N(V, { style: { display: "none" } }, {
            default: j(() => [
              Nn
            ]),
            _: 1
          }),
          m(A) ? (B(!0), E(ke, { key: 0 }, _e(m(u), (ee, J) => (B(), E("div", {
            class: Ae([o.teamClass, "formTeamBox" + J]),
            key: "formTeamBox" + J
          }, [
            (B(!0), E(ke, null, _e(ee, (R, Y) => (B(), E(ke, {
              key: "formItem" + Y
            }, [
              G(R) ? (B(), q(Jl, {
                key: 0,
                item: R,
                style: Z(m(L)),
                "item-style": m(b),
                "val-group": m(n),
                "temp-keys": m(s),
                inline: a.inline,
                disabled: a.disabled,
                "label-width": a.labelWidth,
                "item-width": a.itemWidth,
                "mgr-url": m(d),
                "upload-url": m(k),
                onItemChange: ze,
                onReValidate: Dl,
                onClearTempKeyItem: H,
                onSelectInputChange: Pl,
                onAlNameChange: Kl,
                onAsyncLabelChange: Rl
              }, Je({ _: 2 }, [
                _e(M(ee), (Ve) => ({
                  name: Ve.slotName,
                  fn: j((Fe) => [
                    Se(o.$slots, Ve.slotName, {
                      valGroup: Fe.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : fe("", !0)
            ], 64))), 128))
          ], 2))), 128)) : fe("", !0),
          (B(!0), E(ke, null, _e(m(u), (ee, J) => (B(), E(ke, {
            key: "formItem" + J
          }, [
            !m(A) && G(ee) ? (B(), q(Jl, {
              key: 0,
              item: ee,
              style: Z(m(L)),
              "item-style": m(b),
              "val-group": m(n),
              "temp-keys": m(s),
              inline: a.inline,
              disabled: a.disabled,
              "label-width": a.labelWidth,
              "item-width": a.itemWidth,
              "mgr-url": m(d),
              "upload-url": m(k),
              onItemChange: ze,
              onReValidate: Dl,
              onClearTempKeyItem: H,
              onSelectInputChange: Pl,
              onAlNameChange: Kl,
              onAsyncLabelChange: Rl
            }, Je({ _: 2 }, [
              _e(M(o.formData), (R) => ({
                name: R.slotName,
                fn: j((Y) => [
                  Se(o.$slots, R.slotName, {
                    valGroup: Y.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : fe("", !0)
          ], 64))), 128)),
          a.showLongOkBt ? (B(), q(V, { key: 1 }, {
            default: j(() => [
              N(g, {
                onClick: hl,
                style: Z(m(b)),
                type: "primary",
                loading: a.btnLoading && m(x),
                disabled: a.disabled
              }, {
                default: j(() => [
                  ge(le(a.longOkBtTxt || m(S)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : fe("", !0),
          D("div", $n, [
            a.showInlineOkBt ? (B(), q(g, {
              key: 0,
              type: "primary",
              class: Ae({ inlineFormBtXN: a.inline, okBtnXN: !0 }),
              onClick: hl,
              loading: a.btnLoading && m(x),
              disabled: a.disabled
            }, {
              default: j(() => [
                ge(le(a.inlineOkBtTxt || m(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : fe("", !0),
            a.showInlineClearBt ? (B(), q(g, {
              key: 1,
              onClick: v,
              class: Ae({ inlineFormBtXN: a.inline }),
              type: "dashed"
            }, {
              default: j(() => [
                ge(le(a.inlineClearBtTxt || m(S)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : fe("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), En = /* @__PURE__ */ ue({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: "100%" },
    labelWidth: { default: () => ml().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(t, { expose: i, emit: e }) {
    const a = t, r = z({ width: a.with }), n = z(!1), u = z(), s = P(() => {
      if (Array.isArray(a.formData))
        if (Array.isArray(a.formData[0])) {
          let I = [];
          for (let M of a.formData)
            I = I.concat(M.filter((f) => f.type === "custom"));
          return I;
        } else
          return a.formData.filter((I) => I.type === "custom");
      return [];
    });
    function p() {
      return new Promise((I) => {
        var M, f;
        (f = (M = u.value).resetForm) == null || f.call(M).then((T) => {
          I(T);
        });
      });
    }
    function d() {
      return new Promise((I) => {
        var M, f;
        (f = (M = u.value).refreshFormDom) == null || f.call(M).then((T) => {
          I(T);
        });
      });
    }
    function c() {
      return new Promise((I) => {
        var M, f;
        (f = (M = u.value).reRenderForm) == null || f.call(M).then((T) => {
          I(T);
        });
      });
    }
    function y(I, M) {
      var f, T;
      (T = (f = u.value).setItemToValGroup) == null || T.call(f, I, M);
    }
    function x(I, M) {
      var f, T;
      (T = (f = u.value).updateValGroup) == null || T.call(f, I, M);
    }
    function _(I) {
      var M, f;
      (f = (M = u.value).updateFormDataT) == null || f.call(M, I);
    }
    function k() {
      var I, M;
      (M = (I = u.value).validate) == null || M.call(I);
    }
    function h(I) {
      var M, f;
      (f = (M = u.value).reValidate) == null || f.call(M, I);
    }
    function A(I) {
      var M, f;
      I !== void 0 && (n.value = !!I, (f = (M = u.value).changeLoading) == null || f.call(M, n.value));
    }
    function L() {
      var I, M;
      return (M = (I = u.value).getValGroup) == null ? void 0 : M.call(I);
    }
    function b() {
      n.value = !0;
    }
    function w() {
      var I, M;
      (M = (I = u.value).submit) == null || M.call(I);
    }
    function C() {
      e("on-cancel"), Be(() => {
        var I, M;
        n.value = !1, (M = (I = u.value).changeLoading) == null || M.call(I, !1);
      }, 1e3);
    }
    return i({
      resetForm: p,
      refreshFormDom: d,
      reRenderForm: c,
      setItemToValGroup: y,
      updateValGroup: x,
      updateFormDataT: _,
      validate: k,
      reValidate: h,
      changeLoading: A,
      getValGroup: L,
      submit: w,
      close: C
    }), (I, M) => {
      const f = W("Button");
      return B(), E("div", {
        style: Z(m(r)),
        class: "formGroupBoxVM"
      }, [
        N(yl, tl({
          ref_key: "formRRef",
          ref: u
        }, I.$attrs, {
          "form-data": a.formData,
          "label-width": a.labelWidth,
          "content-width": a.contentWidth,
          "item-width": a.itemWidth,
          btnLoading: a.btnLoading,
          onOnSubmit: b
        }), Je({ _: 2 }, [
          _e(m(s), (T) => ({
            name: T.slotName,
            fn: j(({ valGroup: v }) => [
              Se(I.$slots, T.slotName, { valGroup: v })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        xe(D("div", {
          class: "formFooterVM",
          style: Z({ marginLeft: a.labelWidth + "px" })
        }, [
          D("div", {
            style: Z({ width: a.contentWidth }),
            class: "btnBoxKAL"
          }, [
            a.showOkBt ? (B(), q(f, {
              key: 0,
              onClick: w,
              class: "form-save-btn",
              loading: a.btnLoading && m(n)
            }, {
              default: j(() => [
                ge(le(a.okBtTxt || m(S)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : fe("", !0),
            a.showCancelBt ? (B(), q(f, {
              key: 1,
              onClick: C,
              class: "form-cancel-btn"
            }, {
              default: j(() => [
                ge(le(a.cancelBtTxt || m(S)("r.cancel")), 1)
              ]),
              _: 1
            })) : fe("", !0)
          ], 4)
        ], 4), [
          [Ie, a.showOkBt || a.showCancelBt]
        ])
      ], 4);
    };
  }
}), Il = /* @__PURE__ */ ue({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => ml().searchFormLabelWidth },
    itemWidth: { default: 202 },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: i, emit: e }) {
    const a = t, r = z(), n = P(() => {
      if (Array.isArray(a.formData[0])) {
        let b = [];
        for (let w of a.formData)
          b = b.concat(w.filter((C) => C.type === "custom"));
        return b;
      }
      return a.formData.filter((b) => b.type === "custom");
    });
    function u() {
      return new Promise((b) => {
        var w, C;
        (C = (w = r.value).resetForm) == null || C.call(w).then(() => {
          b();
        });
      });
    }
    function s() {
      return new Promise((b) => {
        var w, C;
        (C = (w = r.value).refreshFormDom) == null || C.call(w).then(() => {
          b();
        });
      });
    }
    function p() {
      return new Promise((b) => {
        var w, C;
        (C = (w = r.value).reRenderForm) == null || C.call(w).then(() => {
          b();
        });
      });
    }
    function d(b, w) {
      var C, I;
      (I = (C = r.value).setItemToValGroup) == null || I.call(C, b, w);
    }
    function c(b, w) {
      var C, I;
      (I = (C = r.value).updateValGroup) == null || I.call(C, b, w);
    }
    function y(b) {
      var w, C;
      (C = (w = r.value).updateFormDataT) == null || C.call(w, b);
    }
    function x() {
      var b, w;
      (w = (b = r.value).validate) == null || w.call(b);
    }
    function _(b) {
      var w, C;
      (C = (w = r.value).reValidate) == null || C.call(w, b);
    }
    function k(b) {
      var w, C;
      (C = (w = r.value).changeLoading) == null || C.call(w, b === void 0 ? !1 : b);
    }
    function h() {
      var b, w;
      return (w = (b = r.value).getValGroup) == null ? void 0 : w.call(b);
    }
    function A(b) {
      e("on-search", b);
    }
    function L() {
      var b, w;
      (w = (b = r.value).submit) == null || w.call(b);
    }
    return i({
      resetForm: u,
      refreshFormDom: s,
      reRenderForm: p,
      setItemToValGroup: d,
      updateValGroup: c,
      updateFormDataT: y,
      validate: x,
      reValidate: _,
      changeLoading: k,
      getValGroup: h,
      submit: L
    }), (b, w) => (B(), q(yl, tl({
      ref_key: "formRRef",
      ref: r
    }, b.$attrs, {
      "form-data": a.formData,
      "label-width": a.labelWidth,
      "item-width": a.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": a.showInlineOkBt,
      "inline-ok-bt-txt": m(S)("r.check"),
      "show-inline-clear-bt": a.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: A
    }), Je({ _: 2 }, [
      _e(m(n), (C) => ({
        name: C.slotName,
        fn: j(({ valGroup: I }) => [
          Se(b.$slots, C.slotName, { valGroup: I })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), zn = /* @__PURE__ */ ue({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: 520 },
    labelWidth: { default: () => ml().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: i, emit: e }) {
    const a = t, r = z(), n = z(!1), u = z(!1), s = P(() => {
      if (Array.isArray(a.formData[0])) {
        let f = [];
        for (let T of a.formData)
          f = f.concat(T.filter((v) => v.type === "custom"));
        return f;
      }
      return a.formData.filter((f) => f.type === "custom");
    });
    function p() {
      return new Promise((f) => {
        var T, v;
        (v = (T = r.value).resetForm) == null || v.call(T).then(() => {
          f();
        });
      });
    }
    function d() {
      return new Promise((f) => {
        var T, v;
        (v = (T = r.value).refreshFormDom) == null || v.call(T).then(() => {
          f();
        });
      });
    }
    function c() {
      return new Promise((f) => {
        var T, v;
        (v = (T = r.value).reRenderForm) == null || v.call(T).then(() => {
          f();
        });
      });
    }
    function y(f, T) {
      var v, O;
      (O = (v = r.value).setItemToValGroup) == null || O.call(v, f, T);
    }
    function x(f, T) {
      var v, O;
      (O = (v = r.value).updateValGroup) == null || O.call(v, f, T);
    }
    function _(f) {
      var T, v;
      (v = (T = r.value).updateFormDataT) == null || v.call(T, f);
    }
    function k() {
      var f, T;
      (T = (f = r.value).validate) == null || T.call(f);
    }
    function h(f) {
      var T, v;
      (v = (T = r.value).reValidate) == null || v.call(T, f);
    }
    function A(f) {
      var T, v;
      f !== void 0 && (u.value = !!f, (v = (T = r.value).changeLoading) == null || v.call(T, u.value));
    }
    function L() {
      var f, T;
      return (T = (f = r.value).getValGroup) == null ? void 0 : T.call(f);
    }
    function b() {
      u.value = !0;
    }
    function w() {
      var f, T;
      a.hideCancelBt ? I() : (T = (f = r.value).submit) == null || T.call(f);
    }
    function C() {
      n.value = !0;
    }
    function I() {
      n.value = !1, Be(() => {
        var f, T;
        u.value = !1, (T = (f = r.value).changeLoading) == null || T.call(f, !1);
      }, 1e3);
    }
    function M(f) {
      e(f ? "on-open" : "on-close");
    }
    return i({
      resetForm: p,
      refreshFormDom: d,
      reRenderForm: c,
      setItemToValGroup: y,
      updateValGroup: x,
      updateFormDataT: _,
      validate: k,
      reValidate: h,
      changeLoading: A,
      getValGroup: L,
      submit: w,
      open: C,
      close: I
    }), (f, T) => {
      const v = W("Button"), O = W("Modal");
      return B(), q(O, {
        class: Ae(["formModal", { hideFooter: a.hideFooter }]),
        title: a.title || m(S)("r.title"),
        modelValue: m(n),
        "onUpdate:modelValue": T[0] || (T[0] = ($) => Ue(n) ? n.value = $ : null),
        "mask-closable": !1,
        "footer-hide": a.hideFooter,
        width: a.width,
        onOnVisibleChange: M
      }, {
        footer: j(() => [
          N(v, {
            onClick: w,
            class: "modal-save-btn",
            loading: a.btnLoading && m(u)
          }, {
            default: j(() => [
              ge(le(a.okBtTxt || m(S)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          a.hideCancelBt ? fe("", !0) : (B(), q(v, {
            key: 0,
            onClick: I,
            class: "modal-cancel-btn"
          }, {
            default: j(() => [
              ge(le(a.cancelBtTxt || m(S)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: j(() => [
          N(yl, tl({
            ref_key: "formRRef",
            ref: r
          }, f.$attrs, {
            "form-data": a.formData,
            "label-width": a.labelWidth,
            btnLoading: a.btnLoading,
            onOnSubmit: b
          }), Je({ _: 2 }, [
            _e(m(s), ($) => ({
              name: $.slotName,
              fn: j(({ valGroup: Q }) => [
                Se(f.$slots, $.slotName, { valGroup: Q })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Gn = /* @__PURE__ */ ue({
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
    const e = t, a = z(!0), r = z([]), n = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let u = [];
    const s = P(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), p = P(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    we(
      () => e.data,
      (k) => {
        a.value = !1;
        let h = [];
        d(k, h), r.value = h, $e(function() {
          a.value = !0, e.inlineLeaf && $e(x);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), we(
      () => p.value,
      (k) => {
        let h, A = "s";
        if (Array.isArray(e.collectVal) ? (h = e.collectVal[0] || "", A = "a") : h = e.collectVal, !h || JSON.stringify(k) === JSON.stringify(u)) {
          u = [];
          return;
        }
        We({
          group: r.value,
          condition: (L) => L.checked === !0,
          key: "checked",
          val: !1
        }), We(A === "a" ? {
          group: r.value,
          condition: (L) => at(k, [h, L[h]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: r.value,
          condition: (L) => k.indexOf(L[h]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), we(
      () => e.disabled,
      (k) => {
        We({
          group: r.value,
          condition: (h) => h.disableCheckbox !== k,
          key: "disableCheckbox",
          val: k
        }), e.inlineLeaf && $e(x);
      },
      { immediate: !0 }
    );
    function d(k, h = []) {
      for (let A of k) {
        let L = !1;
        s.value.length > 1 ? L = Gl(p.value, (w) => w[s.value[0]] === A[s.value[0]]) !== void 0 : L = s.value[0] ? p.value.indexOf(A[s.value[0]]) !== -1 : !1;
        let b = {
          name: A[e.label],
          expand: !!(e.expandAll || A.expand),
          checked: L,
          disableCheckbox: e.disabled
        };
        for (let w of s.value)
          b[w] = A[w];
        h.push(b), A.children && A.children.length > 0 && (b.children = [], c(A.children, b.children));
      }
    }
    function c(k, h = []) {
      for (let A of k) {
        let L = !1;
        s.value.length > 1 ? L = Gl(p.value, (w) => w[s.value[0]] === A[s.value[0]]) !== void 0 : L = s.value[0] ? p.value.indexOf(A[s.value[0]]) !== -1 : !1;
        let b = {
          name: A[e.label],
          expand: !!(e.expandAll || A.expand),
          checked: L,
          disableCheckbox: e.disabled
        };
        for (let w of s.value)
          b[w] = A[w];
        h.push(b), A.children && A.children.length > 0 && (b.children = [], d(A.children, b.children));
      }
    }
    function y(k, {
      data: h
    }) {
      let A = "", L = !0;
      if (h.children && h.children.length > 0) {
        for (let b of h.children)
          if (b.children !== void 0) {
            L = !1;
            break;
          }
        L && e.inlineLeaf && (A = "inlineChildXA");
      }
      return k(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: A
        },
        [
          k(
            "span",
            {
              style: {
                fontWeight: h.children ? "bold" : "normal"
              }
            },
            h.name
          )
        ]
      );
    }
    function x(k) {
      if (k) {
        k.expand && $e(x);
        return;
      }
      let h = document.querySelectorAll("#" + n + " .inlineChildXA");
      if (h.length > 0)
        for (let A of h) {
          let L = A.parentElement, b = L == null ? void 0 : L.nextElementSibling;
          if (!b)
            return;
          if (b.tagName !== "BR") {
            let w = L == null ? void 0 : L.parentElement, C = document.createElement("br");
            w == null || w.insertBefore(C, b), b = C.nextElementSibling, (b == null ? void 0 : b.className.indexOf("inlineTreeNodeF")) === -1 && b.setAttribute("class", b.className + " inlineTreeNodeF");
          }
          for (; b != null && b.nextElementSibling; )
            b = b.nextElementSibling, b.className.indexOf("inlineTreeNodeF") === -1 && b.setAttribute("class", b.className + " inlineTreeNodeF");
        }
    }
    function _(k) {
      let h = [];
      if (e.leaf) {
        for (let A of k)
          if (!A.children)
            if (Array.isArray(e.collectVal)) {
              let L = {};
              for (let b of e.collectVal)
                L[b] = A[b];
              h.push(L);
            } else
              h.push(A[e.collectVal]);
      } else
        for (let A of k)
          if (Array.isArray(e.collectVal)) {
            let L = {};
            for (let b of e.collectVal)
              L[b] = A[b];
            h.push(L);
          } else
            h.push(A[e.collectVal]);
      u = h, i("update:modelValue", h), i("on-change", me(h));
    }
    return (k, h) => {
      const A = W("Tree");
      return m(a) ? (B(), q(A, {
        key: 0,
        id: n,
        class: "checkboxTreeGA",
        data: m(r),
        render: y,
        onOnCheckChange: _,
        onOnToggleExpand: x,
        "show-checkbox": ""
      }, null, 8, ["data"])) : fe("", !0);
    };
  }
}), Hn = { class: "transferBoxRL" }, Wn = { class: "leftBoxLLL" }, jn = { class: "fullHeight flexColumnBox" }, qn = { class: "notGrow" }, Yn = { class: "titleLLL" }, Jn = { class: "growFlexItem" }, Xn = { class: "middleBoxLLL" }, Zn = { class: "rightBoxLLL" }, Qn = { class: "fullHeight flexColumnBox" }, eo = { class: "notGrow" }, lo = { class: "titleLLL" }, to = { class: "growFlexItem" }, ao = /* @__PURE__ */ ue({
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
    addParamsHandle: { type: Function, default: (t) => t.map((i) => i.id) },
    deleteParamsHandle: { type: Function, default: (t) => t.map((i) => i.id) },
    addAllParamsHandle: { type: Function, default: (t) => t },
    deleteAllParamsHandle: { type: Function, default: (t) => t },
    addMethod: { default: "post" },
    addAllMethod: { default: "post" },
    deleteMethod: { default: "delete" },
    deleteAllMethod: { default: "delete" },
    searchFormLabelWith: {}
  },
  emits: ["transferred"],
  setup(t, { expose: i, emit: e }) {
    const a = t;
    let r = z({}), n = z({}), u = z([]), s = z([]), p = z(0), d = z(0);
    const c = P(() => ({ ...a.constSearchDataLeft, ...r.value })), y = P(() => ({ ...a.constSearchDataRight, ...n.value })), x = P(() => p.value < 1), _ = P(() => u.value.length < 1), k = P(() => s.value.length < 1), h = P(() => d.value < 1), A = z(), L = z(), b = z(), w = z();
    function C() {
      A.value.resetForm(), L.value.resetForm(), Te(r.value) || (r.value = {}), Te(n.value) || (n.value = {}), b.value.clearSelect(), w.value.clearSelect();
    }
    function I() {
      b.value.search(), w.value.search();
    }
    function M(G) {
      u.value = G;
    }
    function f(G) {
      s.value = G;
    }
    function T(G) {
      var ye, ne, oe, re, ie;
      p.value = ((ne = (ye = G == null ? void 0 : G.data) == null ? void 0 : ye.page) == null ? void 0 : ne.total) || ((re = (oe = G == null ? void 0 : G.data) == null ? void 0 : oe.data) == null ? void 0 : re.total) || ((ie = G == null ? void 0 : G.data) == null ? void 0 : ie.total) || (G == null ? void 0 : G.total) || 0;
    }
    function v(G) {
      var ye, ne, oe, re, ie;
      d.value = ((ne = (ye = G == null ? void 0 : G.data) == null ? void 0 : ye.page) == null ? void 0 : ne.total) || ((re = (oe = G == null ? void 0 : G.data) == null ? void 0 : oe.data) == null ? void 0 : re.total) || ((ie = G == null ? void 0 : G.data) == null ? void 0 : ie.total) || (G == null ? void 0 : G.total) || 0;
    }
    function O(G) {
      r.value = G;
    }
    function $(G) {
      n.value = G;
    }
    function Q() {
      a.addUrl && pe("add");
    }
    function ae() {
      a.deleteUrl && pe("delete");
    }
    function H() {
      a.addAllUrl && a.addUrl && pe("addAll");
    }
    function de() {
      a.deleteAllUrl && pe("deleteAll");
    }
    function pe(G) {
      let ye, ne, oe = {}, re = "";
      switch (G) {
        case "add":
          ye = a.addMethod, ne = a.addUrl, oe = a.addParamsHandle(s.value), re = S("r.add");
          break;
        case "delete":
          ye = a.deleteMethod, ne = a.deleteUrl, oe = a.deleteParamsHandle(u.value), re = S("r.remove");
          break;
        case "addAll":
          ye = a.addAllMethod, ne = a.addAllUrl, oe = a.addAllParamsHandle(y.value), re = S("r.addAll");
          break;
        case "deleteAll":
          ye = a.deleteAllMethod, ne = a.deleteAllUrl, oe = a.deleteAllParamsHandle(c.value), re = S("r.removeAll");
          break;
      }
      ne && ye && Pe[ye](ne, oe, null, [], { spin: !0 }, !1).then((ie) => {
        (ie == null ? void 0 : ie.code) === 0 ? (Le(re + S("r.success"), (ie == null ? void 0 : ie.message) || "", "success"), b.value && b.value.getTableData(), w.value && w.value.getTableData(), e("transferred")) : Le(re + S("r.failed"), (ie == null ? void 0 : ie.message) || "", "error");
      }).catch(() => {
        Le(re + S("r.error"), "", "error");
      });
    }
    return i({
      reset: C,
      search: I
    }), (G, ye) => {
      const ne = W("Icon"), oe = W("Button");
      return B(), E("div", Hn, [
        D("div", Wn, [
          D("div", jn, [
            D("div", qn, [
              D("div", Yn, le(a.titleLeft || m(S)("r.added")), 1),
              N(Cl, null, {
                default: j(() => [
                  N(Il, {
                    ref_key: "leftFormRef",
                    ref: A,
                    "form-data": a.formDataLeft,
                    "form-rules": a.formRulesLeft,
                    "label-width": a.searchFormLabelWith,
                    onOnSearch: O
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            D("div", Jn, [
              N(Ll, {
                ref_key: "lTabRef",
                ref: b,
                columns: a.leftTableColumns,
                url: a.leftTableUrl,
                "search-data": m(c),
                onOnSelectionChange: M,
                onOnDataChange: T,
                "init-data": !!(m(Te)(a.constSearchDataLeft) && a.leftTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ]),
        D("div", Xn, [
          N(oe, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: de,
            disabled: m(x)
          }, {
            default: j(() => [
              ge(le(m(S)("r.removeAll")) + " ", 1),
              N(ne, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          N(oe, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: ae,
            disabled: m(_)
          }, {
            default: j(() => [
              ge(le(m(S)("r.remove")) + " ", 1),
              N(ne, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          N(oe, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: Q,
            disabled: m(k)
          }, {
            default: j(() => [
              N(ne, { type: "ios-arrow-back" }),
              ge(" " + le(m(S)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          N(oe, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: H,
            disabled: m(h)
          }, {
            default: j(() => [
              N(ne, { type: "ios-arrow-back" }),
              ge(" " + le(m(S)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        D("div", Zn, [
          D("div", Qn, [
            D("div", eo, [
              D("div", lo, le(a.titleRight || m(S)("r.notAdded")), 1),
              N(Cl, null, {
                default: j(() => [
                  N(Il, {
                    ref_key: "rightFormRef",
                    ref: L,
                    "form-data": a.formDataRight,
                    "form-rules": a.formRulesRight,
                    "label-width": a.searchFormLabelWith,
                    onOnSearch: $
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            D("div", to, [
              N(Ll, {
                ref_key: "rTabRef",
                ref: w,
                columns: a.rightTableColumns,
                url: a.rightTableUrl,
                "search-data": m(y),
                onOnSelectionChange: f,
                onOnDataChange: v,
                "init-data": !!(m(Te)(a.constSearchDataRight) && a.rightTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ])
      ]);
    };
  }
}), Xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: _t,
  AsyncCascader: Vt,
  BtTablePage: Ll,
  CheckboxTree: Gn,
  EditorPro: xt,
  FormGroup: En,
  FormModal: zn,
  FormR: yl,
  FullPop: va,
  HeaderBt: ot,
  Hello: ba,
  IconTxtBtn: wa,
  InputMap: kt,
  MonthRange: Ct,
  Page404: Ca,
  SearchForm: Il,
  SelectInput: bt,
  ShowHidePanel: Cl,
  ShowHidePanelB: Za,
  SideMenu: Wa,
  TableIconBtn: qa,
  TableSearch: en,
  TableSetting: an,
  TransferBox: ao,
  UploadGroup: At
}, Symbol.toStringTag, { value: "Module" }));
function Bt(t) {
  const i = (...n) => Ke.apply(this, n), e = i("r.closePreview"), a = i("r.fullImg");
  let r = "previewImg" + Math.floor(Math.random() * 1e7);
  Ne.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (n) => he(
      "div",
      {
        class: "previewModal",
        id: r
      },
      [
        he(
          "div",
          {
            class: "previewModalInner"
          },
          [
            he("img", {
              src: t,
              alt: a
            }),
            he(ea, {
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
  }), Be(() => {
    var s, p, d, c, y, x;
    const n = (c = (d = (p = (s = document.getElementById(r)) == null ? void 0 : s.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : d.parentElement) == null ? void 0 : c.parentElement, u = (x = (y = document.getElementById(r)) == null ? void 0 : y.parentElement) == null ? void 0 : x.nextSibling;
    n && (n.style.height = "0"), n && (n.style.padding = "0"), u && (u.style.display = "none");
  }, 10);
}
let el = !1;
function Lt({
  height: t,
  width: i = 416,
  title: e,
  content: a,
  onOk: r,
  onCancel: n,
  okText: u,
  cancelText: s,
  noWarnIcon: p,
  footerAlign: d,
  cancelBt: c = !0
}) {
  const y = (...h) => Ke.apply(this, h);
  let _ = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", k = K(a) === "String";
  Ne.warning({
    width: i,
    footerHide: !0,
    render: () => he(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: _
        }
      },
      [
        he(
          "div",
          {
            class: "containerN"
          },
          [
            he(
              "div",
              {
                class: "titleN"
              },
              [
                he("span", e || y("r.info.title")),
                he(
                  gl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      el || Ne.remove();
                    }
                  },
                  () => he("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            he(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: k ? "center" : "left"
                }
              },
              [
                he("i", {
                  class: k && !p ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                he("div", { class: "msgBoxConO" }, a || y("r.info.text"))
              ]
            ),
            he(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: d || "center"
                }
              },
              [
                he(
                  gl,
                  {
                    class: "okBtN",
                    onClick(h) {
                      var A, L, b, w, C, I, M, f, T;
                      if (r && typeof r == "function") {
                        const v = r();
                        if (v && K(v) === "Promise") {
                          el = !0;
                          const O = (h == null ? void 0 : h.currentTarget) || (h == null ? void 0 : h.target);
                          O && ((L = (A = O.classList) == null ? void 0 : A.add) == null || L.call(A, "ivu-btn-loading"), (w = (b = O.nextSibling) == null ? void 0 : b.setAttribute) == null || w.call(b, "disabled", "disabled"), (T = (f = ((M = (I = (C = O.parentElement) == null ? void 0 : C.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : M.call(I, ".titleN .closeN")).classList) == null ? void 0 : f.add) == null || T.call(f, "disabled")), Promise.resolve(v).then(() => {
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
                    he("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    he("span", u || y("r.confirm"))
                  ]
                ),
                he(
                  gl,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      el || (Ne.remove(), K(n) === "Function" && n && n());
                    }
                  },
                  () => s || y("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function St(t, i, e, a) {
  const r = (...n) => Ke.apply(this, n);
  Le.call(this, {
    title: t || r("r.info.title"),
    text: i || r("r.info.text"),
    icon: e || "warning",
    onOk: a,
    buttons: [r("r.cancel")]
  });
}
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      Ze(this, "title");
      Ze(this, "iconSvg");
      Ze(this, "tag");
      Ze(this, "alwaysEnable");
      this.title = Ke("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
    exec(a) {
      const r = document.getElementById("editor-preview");
      let n = localStorage.getItem("editorPreviewW") || 300, u = localStorage.getItem("editorPreviewH") || 500;
      const s = a.getHtml();
      if (r) {
        let p = r.children[0].children[1].children[0], d = r.children[0].children[1];
        p.innerHTML = s, p.style.width = n + "px", d.style.height = u + "px", r.style.display = "block";
      } else {
        const p = document.body, d = document.createElement("div");
        d.setAttribute("id", "editor-preview"), d.setAttribute("class", "editor-preview-mask"), d.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${n}' min='200'><span>高</span><input type='number' value='${u}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let c = d.children[0].children[1], y = d.children[0].children[1].children[0], x = d.children[0].children[0].children[0].children[1];
        const _ = 40, k = 70, h = (w) => {
          if (w && w.type === "keyup") {
            let M = !1;
            if (w.key && (M = w.key !== "Enter"), M)
              return;
          }
          let C = w.target.value;
          if (C = Number(C), y.style && y.style.width === C + "px")
            return;
          const I = p.clientWidth;
          C < 250 ? (C = 250, w.target.value = 250) : C > I - _ && (C = I - _, w.target.value = I - _), y.style.width = C + "px", localStorage.setItem("editorPreviewW", C);
        };
        x.addEventListener("blur", h), x.addEventListener("keyup", h);
        let A = d.children[0].children[0].children[0].children[3];
        const L = (w) => {
          if (w && w.type === "keyup") {
            let M = !1;
            if (w.key && (M = w.key !== "Enter"), M)
              return;
          }
          let C = w.target.value;
          if (C = Number(C), c.style && c.style.height === C + "px")
            return;
          const I = p.clientHeight;
          C < 300 ? (C = 300, w.target.value = 300) : C > I - k && (C = I - k, w.target.value = I - k), c.style.height = C + "px", localStorage.setItem("editorPreviewH", C);
        };
        A.addEventListener("blur", L), A.addEventListener("keyup", L), d.children[0].children[0].children[1].addEventListener("click", () => {
          d.style.display = "none";
        }), y.innerHTML = s, y.style.width = n + "px", c.style.height = u + "px", p.append(d);
      }
    }
  }
  const i = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  sa.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const Zl = {
  $fetch: Pe,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Bt,
  $swal: Le,
  $swalConfirm: St,
  messageBox: Lt,
  setInterval: vt,
  setTimeout: Be,
  ...ht
}, no = function(t, i = {}) {
  Pe.init(i.useStore || i.store, t), i.locale && dl.use(i.locale), i.i18n && dl.i18n(i.i18n), i.router && Qa(i.router), i.amap && gn(i.amap), i.notRegistryGlobal || (Object.keys(Xl).forEach((e) => {
    t.component(e) || t.component(e, Xl[e]);
  }), Object.keys(Zl).forEach((e) => {
    t.config.globalProperties[e] = Zl[e];
  })), t.directive("has") || t.directive("has", (e, a) => {
    a.value && !pt(a.value) && (e.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", (e, a) => {
    let r;
    a.arg ? r = e.querySelector("." + a.arg) : r = e.querySelector(".ivu-select-dropdown") || e, r.addEventListener("scroll", function() {
      r.scrollTop > 0 && r.scrollHeight - r.scrollTop <= r.clientHeight && a.value();
    });
  }), t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.iconTxtBtnIconSize = 17;
}, oo = dl.use, io = dl.i18n, ko = {
  locale: oo,
  i18n: io,
  install: no,
  ...ht,
  ...Ia,
  $fetch: Pe,
  fullScreenImgByDom: Ee,
  fullScreenImgPreview: Bt,
  $swal: Le,
  $swalConfirm: St,
  messageBox: Lt,
  setInterval: vt,
  setTimeout: Be
};
export {
  Pe as $fetch,
  Le as $swal,
  St as $swalConfirm,
  _t as AlCascaderMC,
  Vt as AsyncCascader,
  Ll as BtTablePage,
  Gn as CheckboxTree,
  xt as EditorPro,
  En as FormGroup,
  zn as FormModal,
  yl as FormR,
  va as FullPop,
  ot as HeaderBt,
  ba as Hello,
  wa as IconTxtBtn,
  kt as InputMap,
  Ct as MonthRange,
  Ca as Page404,
  Il as SearchForm,
  bt as SelectInput,
  Cl as ShowHidePanel,
  Za as ShowHidePanelB,
  Wa as SideMenu,
  qa as TableIconBtn,
  en as TableSearch,
  an as TableSetting,
  ao as TransferBox,
  At as UploadGroup,
  _l as clearObj,
  Na as dataFilterOrToUrl,
  Fa as decimalDigitsLimit,
  ko as default,
  ct as downloadFileByFormSubmit,
  st as downloadFileReaderFile,
  La as emptyInput,
  rt as fakeALinkClick,
  Ua as fileExport,
  He as findCollection,
  cl as findPath,
  Ta as formDataHeadConfig,
  Ee as fullScreenImgByDom,
  Bt as fullScreenImgPreview,
  Ra as getColumnsKeys,
  il as getFileSrc,
  Tl as getFileTypeByName,
  Vl as getFileTypeIconByName,
  ut as getStringWidth,
  pt as hasPermission,
  Ba as htmlDecode,
  xa as htmlEncode,
  $a as htmlPrint,
  Ka as isEmptyValue,
  sl as isImgByFile,
  mt as isNaN,
  Pa as isNumberValue,
  ve as isValidValue,
  Lt as messageBox,
  K as myTypeof,
  Ma as oneOf,
  Al as removeEmptyValue,
  vt as setInterval,
  Be as setTimeout,
  We as setValByOption,
  yt as siblingElems,
  Sa as stopBubbling,
  Da as stringLength,
  Oa as toFormData,
  it as toHump,
  dt as toLine,
  ft as tooltipManual,
  fl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
