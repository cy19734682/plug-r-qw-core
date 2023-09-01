var Ft = Object.defineProperty;
var Ut = (t, i, e) => i in t ? Ft(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var Ze = (t, i, e) => (Ut(t, typeof i != "symbol" ? i + "" : i, e), e);
import { getCurrentInstance as pl, defineComponent as oe, resolveComponent as H, openBlock as B, createElementBlock as E, normalizeClass as ve, normalizeStyle as q, createBlock as $, createCommentVNode as se, renderSlot as Ae, ref as X, computed as R, withDirectives as be, unref as y, createElementVNode as D, toDisplayString as le, createVNode as Q, withCtx as Y, createTextVNode as ke, vShow as _e, resolveDirective as Zl, h as ue, Fragment as pe, renderList as he, onBeforeMount as Pt, watch as fe, nextTick as De, isRef as Le, onMounted as Xe, withModifiers as Kt, mergeProps as tl, onUnmounted as Rt, shallowRef as bl, onBeforeUnmount as Nt, createSlots as Je } from "vue";
import Et from "deepmerge";
import { isObject as Dt, isFunction as $t, isPlainObject as qe, cloneDeep as re, isEmpty as Ue, isBoolean as Gt, isNumber as Ye, debounce as zt, isString as Ql, last as rl, isEqual as Ht, first as wl, indexOf as El, findIndex as et, remove as Wt, find as Dl } from "lodash-es";
import nl from "sweetalert";
import { Tooltip as jt, TableColumnConfig as qt, Radio as Yt, Input as Jt, Modal as Ee, Icon as Xt, Button as gl } from "view-ui-plus";
import { useRouter as Zt, useRoute as Qt } from "vue-router";
import { useI18n as ea } from "vue-i18n";
import kl from "axios";
import la from "ar-cascader";
import { Toolbar as ta, Editor as aa } from "@wangeditor/editor-for-vue";
import Qe from "moment";
import { Boot as na } from "@wangeditor/editor";
const lt = {
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
}, oa = /(%|){([0-9a-zA-Z_]+)}/g;
function ia() {
  function t(e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  }
  function i(e, ...a) {
    let r;
    return a.length === 1 && typeof a[0] == "object" && (r = a[0]), (!r || !r.hasOwnProperty) && (r = {}), e === void 0 ? "" : e.replace(oa, (n, d, s, p) => {
      let u;
      return e[p - 1] === "{" && e[p + n.length] === "}" ? s : (u = t(r, s) ? r[s] : null, u ?? "");
    });
  }
  return i;
}
const sa = ia();
let ul = lt;
const ra = {
  zh: lt
};
let $l, Gl = {}, ge, ua = function(t, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, i);
  if (ge && ge.global)
    return ge.global.t(t, i);
  if (ge && ge.locale) {
    if (!Gl[ge.locale] || $l != ge.locale) {
      Gl[ge.locale] = !0;
      let e = ge.getLocaleMessage(ge.locale) || {}, a = Et(ra[ge.locale], e, { clone: !0 });
      ul = a, ge.setLocaleMessage(ge.locale, a), $l = ge.locale;
    }
    return ge.hlang(t, i);
  }
};
const Ke = function(t, i) {
  let e = ua.apply(this, [t, i]);
  if (e != null)
    return e;
  const a = t.split(".");
  let r = ul;
  for (let n = 0, d = a.length; n < d; n++) {
    const s = a[n];
    if (e = r[s], n === d - 1)
      return sa(e, i);
    if (!e)
      return "";
    r = e;
  }
  return "";
}, da = function(t) {
  ul = t || ul;
}, ca = function(t) {
  ge = t;
}, dl = {
  use: da,
  t: Ke,
  i18n: ca
};
function T(t, i) {
  var a, r, n;
  const e = (n = (r = (a = pl()) == null ? void 0 : a.appContext) == null ? void 0 : r.config) == null ? void 0 : n.globalProperties;
  return Ke.apply(e, [t, i]);
}
const tt = /* @__PURE__ */ oe({
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
      const d = H("Icon");
      return B(), E("div", {
        class: ve({ headerBtCTM: !0, withIconCTM: e.icon || e.withIcon, disabled: e.disabled }),
        style: q({ color: e.color, borderLeftColor: e.borderColor }),
        onClick: a
      }, [
        e.icon ? (B(), $(d, {
          key: 0,
          size: e.iconSize,
          type: e.icon
        }, null, 8, ["size", "type"])) : se("", !0),
        Ae(r.$slots, "default")
      ], 6);
    };
  }
}), fa = { class: "headerTxtAM" }, pa = { class: "contentAM" }, ma = /* @__PURE__ */ oe({
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
    let r = X(!1);
    const n = R(() => typeof a.headerFontSize == "number" ? a.headerFontSize + "px" : a.headerFontSize), d = R(() => ({ zIndex: a.zIndex }));
    function s() {
      r.value = !0, e("on-open");
    }
    function p(u) {
      r.value = !1, e("on-close", u === !0);
    }
    return i({
      open: s,
      close: p
    }), (u, c) => be((B(), E("div", {
      class: "fullScreenPopBoxAM",
      style: q(y(d))
    }, [
      D("div", {
        class: "headerAM",
        style: q({ color: a.headerColor, backgroundColor: a.headerBg, fontSize: y(n) })
      }, [
        D("span", fa, le(u.title || y(T)("r.title")), 1),
        Q(tt, {
          icon: "md-return-left",
          onClick: p
        }, {
          default: Y(() => [
            ke(le(y(T)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      D("div", pa, [
        Ae(u.$slots, "default")
      ])
    ], 4)), [
      [_e, y(r)]
    ]);
  }
}), ya = { class: "msg" }, ha = /* @__PURE__ */ oe({
  __name: "Hello",
  setup(t) {
    let i = X("Greetings from Ricky.");
    return (e, a) => (B(), E("span", ya, le(y(i)), 1));
  }
});
function ml() {
  const { appContext: t } = pl();
  return t.config.globalProperties;
}
const va = /* @__PURE__ */ oe({
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
    const e = t, a = R(() => Math.floor(e.size / 17 * 12) + "px");
    function r(n) {
      e.disabled || i("click", n);
    }
    return (n, d) => {
      const s = H("Icon"), p = Zl("has");
      return be((B(), E("div", {
        class: ve(["tabTopBtnsT", { disabled: e.disabled }]),
        onClick: r,
        style: q({ "font-size": y(a) })
      }, [
        Q(s, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"]),
        ke(" " + le(e.name || y(T)("r.button")), 1)
      ], 6)), [
        [p, n.has]
      ]);
    };
  }
}), ga = { class: "c404K" }, ba = /* @__PURE__ */ D("div", { class: "t404" }, "404", -1), wa = { class: "ct404" }, ka = { class: "p404" }, Va = /* @__PURE__ */ oe({
  __name: "Page404",
  setup(t) {
    const e = pl().appContext.config.globalProperties.$router;
    function a() {
      e.go(-1);
    }
    return (r, n) => {
      const d = H("Button");
      return B(), E("div", ga, [
        ba,
        D("div", wa, "UH OH! " + le(y(T)("r.pageNotFound")), 1),
        D("div", ka, le(y(T)("r.notFoundMsg")), 1),
        Q(d, {
          class: "bt404",
          onClick: a
        }, {
          default: Y(() => [
            ke(le(y(T)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Ie(t, i, e) {
  const a = (...r) => Ke.apply(this, r);
  return new Promise((r, n) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let d = a("r.confirm"), s = a("r.cancel"), p = !1, u = "swalConfirmBt", c = "swalCancelBt";
      const m = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let x = "";
      t.text && m.test(K(t.text)) ? x = "content" : t.text && K(t.text) === "String" && (x = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (s = t.buttons.cancel.text) && (p = !0), t.buttons.cancel.className && (c = t.buttons.cancel.className), t.buttons.confirm.text && (d = t.buttons.confirm.text), t.buttons.confirm.className && (u = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (s = t.buttons[0], p = !0), t.buttons[1] && (d = t.buttons[1]))), nl({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [x]: t.text,
        buttons: {
          confirm: {
            text: d,
            value: !0,
            visible: !0,
            className: u
          },
          cancel: {
            text: s,
            value: null,
            visible: p,
            className: c
          }
        }
      }).then((A) => {
        A && typeof t.onOk == "function" && t.onOk(), r(A);
      }).catch((A) => {
        n(A);
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
      nl({
        title: t,
        [d]: i || "",
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
function at(t) {
  return t.replace(/_(\w)/g, function(i, e) {
    return e.toUpperCase();
  });
}
function Aa(t) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = t : i.innerText = t, i.innerHTML;
}
function Ca(t) {
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
function Il(t) {
  return t.split(".").pop().toLocaleLowerCase();
}
function sl(t) {
  return K(t) === "String" && t.indexOf("image") > -1;
}
function Vl(t) {
  const i = Il(t);
  let e = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 ? e = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 ? e = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 ? e = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(i) > -1 ? e = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(i) > -1 ? e = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(i) > -1 && (e = "ios-videocam"), e;
}
function nt(t, i) {
  let e = document.createElement("a");
  e.href = i, e.download = t, ot(e);
}
function ot(t) {
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
  if (t && Dt(t)) {
    if ($t(i)) {
      if (qe(t)) {
        let n = t, d = re(r);
        if (i(n))
          return e && n[e] && d.push(n[e]), d;
        if (n[a] && !Ue(n[a])) {
          e && n[e] && d.push(n[e]);
          let s = cl({
            group: n[a],
            condition: i,
            pathKey: e,
            childKey: a,
            path: d
          });
          if (!Ue(s))
            return s;
        }
      } else if (Array.isArray(t))
        for (let n of t) {
          let d = re(r);
          if (i(n))
            return e && n[e] ? d.push(n[e]) : d.push(String(t.indexOf(n))), d;
          if (n[a] && n[a].length > 0) {
            e && n[e] ? d.push(n[e]) : d.push(String(t.indexOf(n)));
            let s = cl({
              group: n[a],
              condition: i,
              pathKey: e,
              childKey: a,
              path: d
            });
            if (!Ue(s))
              return s;
          }
        }
    } else if (Array.isArray(t))
      for (let n of t) {
        let d = re(r);
        if (n === i)
          return d.push(String(t.indexOf(n))), d;
      }
  }
  return [];
}
function it(t, i = 12) {
  if (K(t) === "String" && t.length > 0) {
    let e = document.createElement("span");
    e.style.fontSize = i + "px", e.style.fontFamily = "inherit", e.innerHTML = t, e.style.opacity = "0", e.style.position = "fixed", e.style.top = "3000px", document.body.append(e);
    const a = e.clientWidth;
    return document.body.removeChild(e), a;
  }
  return 0;
}
function _a(t) {
  return t === "" ? null : t;
}
function xa(t) {
  t = t || window.Event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
}
const Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFileReaderFile: nt,
  emptyInput: _a,
  fakeALinkClick: ot,
  findPath: cl,
  getFileSrc: il,
  getFileTypeByName: Il,
  getFileTypeIconByName: Vl,
  getStringWidth: it,
  htmlDecode: Ca,
  htmlEncode: Aa,
  isImgByFile: sl,
  stopBubbling: xa,
  toHump: at
}, Symbol.toStringTag, { value: "Module" }));
function K(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function st(t) {
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
function Al(t, i = []) {
  if (K(t) === "Array")
    return t.forEach((e, a) => {
      switch (K(e)) {
        case "Array":
        case "Object":
          Al(e);
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
              Al(t[e]);
              break;
            default:
              t[e] = null;
          }
      }
    return t;
  } else
    return t;
}
const Ia = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Sa(t) {
  let i = new FormData();
  for (let e in t)
    t.hasOwnProperty(e) && t[e] !== null && i.append(e, t[e]);
  return i;
}
function He(t, i, e = !1) {
  if (!t || !i)
    return !1;
  let a, r = "notFoundC", n = function(d, s) {
    if (Array.isArray(d)) {
      if (K(s) === "Function" && s(d))
        return r = d, [];
      for (let p of d) {
        if (r !== "notFoundC")
          break;
        if (K(s) === "Function" && s(p) || p === s)
          return r = p, [d.indexOf(p)];
        if (K(p) === "Array" || K(p) === "Object") {
          let u = n(p, s);
          if (u !== void 0)
            return [d.indexOf(p), ...u];
        }
      }
    } else if (K(d) === "Object") {
      if (K(s) === "Function" && s(d))
        return r = d, [];
      for (let p in d) {
        if (r !== "notFoundC")
          break;
        if (d.hasOwnProperty(p)) {
          if (K(s) === "Function" && s(p) || d[p] === s)
            return r = d[p], [p];
          if (K(d[p]) === "Object" || K(d[p]) === "Array") {
            let u = n(d[p], s);
            if (u !== void 0)
              return [p, ...u];
          }
        }
      }
    }
  };
  return a = n(t, i), e ? a || !1 : r === "notFoundC" ? !1 : r;
}
function Ta(t, i) {
  for (let e = 0, a = i.length; e < a; e++)
    if (t === i[e])
      return !0;
  return !1;
}
function Oa(t, i = 2) {
  let e = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), a = t && String(t) || "";
  return e.test(a) ? Number(a.replace(e, "$1")) : t;
}
function rt(t, i = {}, e = "get") {
  let a = document.createElement("form"), r = document.getElementsByTagName("body")[0];
  r.appendChild(a), a.setAttribute("style", "display:none"), a.setAttribute("target", ""), a.setAttribute("method", e);
  let n = t;
  if (window && window.hasOwnProperty("g")) {
    let d = Object.keys(window.g).filter((s) => s.indexOf("URL") > -1).map((s) => s.replace("URL", ""));
    for (let s of d) {
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
    let d = setTimeout(() => {
      r.removeChild(a), clearTimeout(d), d = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function La(t, i = {}, e = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    Ie.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  rt(t, i, e);
}
function Ma(t, i, e = !1) {
  let a;
  if (t && K(i) === "Array") {
    let r = localStorage.getItem(t);
    if (r) {
      let n = JSON.parse(decodeURI(r));
      a = i.filter((d) => d.key && n.indexOf(d.title) !== -1).map((d) => d.key);
    } else
      a = i.map((n) => n.key);
  } else
    a = [];
  return e || (a = String(a)), a;
}
function de(t) {
  return t != null && t !== "";
}
function Fa(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function ut(t, i = !1, e = "") {
  return function(a, r) {
    var p, u;
    let n;
    if (Array.isArray(t)) {
      let c = [];
      for (let m of t)
        de((p = r.row) == null ? void 0 : p[m]) && c.push(r.row[m]);
      n = c.join(e);
    } else
      typeof t == "function" ? n = t(r) : n = (u = r.row) == null ? void 0 : u[t];
    let d = it(n), s = r.column._width;
    return n && d > s ? ue(
      jt,
      {
        style: {
          width: "100%"
        },
        content: n,
        maxWidth: s * 2
      },
      () => ue(
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
    ) : ue("span", i && !de(n) ? "--" : n);
  };
}
function Ua(t) {
  if (qe(t)) {
    for (let i in t)
      if (t.hasOwnProperty(i) && de(t[i]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let i of t)
      if (de(i))
        return !1;
    return !0;
  }
  return !de(t);
}
function Pa(t) {
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
function dt(t) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(t) > -1 : !1;
}
function ct(t) {
  return K(t) === "Number" && String(t) === "NaN";
}
function Ka(t, i = !1, e = !1) {
  if (K(t) !== "Object")
    return t;
  let a = Object.assign(t, {}), r = "";
  for (let n in a)
    if (a.hasOwnProperty(n)) {
      let d = a[n];
      d === void 0 || d === "" || K(d) === "String" && d.trim() === "" || d === null || ct(d) ? e ? i ? r += n + "=&" : a[n] = "" : delete a[n] : i && (r += n + "=" + d + "&");
    }
  return i ? r.length > 0 ? r.substring(0, r.length - 1) : "" : a;
}
function Cl(t) {
  let i = {};
  if (Array.isArray(t)) {
    i = [];
    for (let e of t)
      Array.isArray(e) || qe(e) ? i.push(Cl(e)) : de(e) && i.push(e);
  } else if (qe(t))
    for (let e in t)
      t.hasOwnProperty(e) && (Array.isArray(t[e]) || qe(t[e]) ? i[e] = Cl(t[e]) : de(t[e]) && (i[e] = t[e]));
  return i;
}
function Ra(t) {
  const i = window.open();
  if (i) {
    i.document.write(t);
    let e = setTimeout(() => {
      i.print(), window.clearTimeout(e), e = null;
    }, 10);
  }
}
function ft(t) {
  let i = [], e = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && i.push(t);
  for (; e.nextSibling && (e = e.nextSibling); )
    e.nodeType === 1 && i.push(e);
  return i;
}
const pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Al,
  dataFilterOrToUrl: Ka,
  decimalDigitsLimit: Oa,
  downloadFileByFormSubmit: rt,
  fileExport: La,
  findCollection: He,
  formDataHeadConfig: Ia,
  getColumnsKeys: Ma,
  hasPermission: dt,
  htmlPrint: Ra,
  isEmptyValue: Ua,
  isNaN: ct,
  isNumberValue: Fa,
  isValidValue: de,
  myTypeof: K,
  oneOf: Ta,
  removeEmptyValue: Cl,
  setValByOption: We,
  siblingElems: ft,
  stringLength: Pa,
  toFormData: Sa,
  toLine: st,
  tooltipManual: ut,
  trimObj: fl
}, Symbol.toStringTag, { value: "Module" })), Na = { class: "groupBoxRP" }, Ea = ["onClick"], Da = /* @__PURE__ */ oe({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const i = t, e = Zt();
    function a(n) {
      return n.path === i.pathName ? "active" : "";
    }
    function r(n, d) {
      n.preventDefault();
      let s = n.target;
      if (!d.children && !s.classList.contains("active")) {
        e.push(d.path);
        return;
      }
      let p = s.parentNode, u = ft(p);
      for (let c of u) {
        c.classList.remove("open");
        const m = c.querySelectorAll(".open");
        for (let x of m)
          x.classList.remove("open");
      }
      p.classList.toggle("open");
    }
    return (n, d) => {
      const s = H("sideMenuGroup", !0);
      return B(), E("ul", Na, [
        (B(!0), E(pe, null, he(i.data, (p, u) => (B(), E("li", {
          class: ve({ dropItemRP: p.children }),
          key: p.path + u
        }, [
          D("div", {
            class: ve(["menuTxtR", a(p)]),
            onClick: (c) => r(c, p),
            style: q({ paddingLeft: p.level * 20 + "px" })
          }, le(p.name || "-- no name --"), 15, Ea),
          p.children ? (B(), $(s, {
            key: 0,
            data: p.children,
            "path-name": i.pathName
          }, null, 8, ["data", "path-name"])) : se("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), $a = { class: "menuListR" }, Ga = /* @__PURE__ */ oe({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: i }) {
    const e = t, a = Qt(), r = X(!0), n = X(), d = X(), s = R(() => r.value ? T("r.hideMenu") : T("r.showMenu")), p = R(() => r.value ? "ios-arrow-back" : "ios-arrow-forward");
    Pt(() => {
      let m = localStorage.getItem("menuDisplayR") || "";
      m !== "" ? r.value = JSON.parse(m) : (r.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), fe(
      () => a.path,
      (m) => {
        n.value = m, De(c);
      },
      { immediate: !0 }
    );
    function u() {
      r.value = !r.value, localStorage.setItem("menuDisplayR", JSON.stringify(r.value)), i("on-change", r.value);
    }
    function c() {
      let m = d.value.querySelectorAll(".dropItemRP");
      for (let x of m)
        x.querySelector(".active") && !x.classList.contains("open") && x.classList.add("open");
    }
    return (m, x) => {
      const A = H("Icon");
      return B(), E("div", {
        ref_key: "menuRef",
        ref: d,
        class: "menuBoxRP"
      }, [
        be(D("div", $a, [
          Q(Da, {
            data: e.data,
            pathName: y(n)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [_e, y(r)]
        ]),
        Q(A, {
          type: y(p),
          size: 25,
          class: ve([{ showIco: !y(r) }, "menuShowHideIco"]),
          title: y(s),
          onClick: u,
          color: y(r) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), za = ["title"], Ha = /* @__PURE__ */ oe({
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
      const d = H("Icon"), s = Zl("has");
      return be((B(), E("div", {
        class: ve(["tableBtnsG", { disabled: e.disabled }]),
        onClick: a,
        title: e.title || y(T)("r.button")
      }, [
        Q(d, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, za)), [
        [s, e.has]
      ]);
    };
  }
}), Wa = { class: "contentX" }, ja = { class: "arrowA" }, qa = /* @__PURE__ */ oe({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(t) {
    const i = t, e = X(!0), a = R(() => e ? "background:" + i.bg || "transparent" : "");
    return (r, n) => {
      const d = H("Icon");
      return B(), E("div", {
        style: q(y(a))
      }, [
        be(D("div", Wa, [
          Ae(r.$slots, "default")
        ], 512), [
          [_e, y(e)]
        ]),
        D("div", ja, [
          D("div", {
            class: "btA",
            onClick: n[0] || (n[0] = (s) => e.value = !y(e))
          }, [
            Q(d, {
              type: y(e) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Ya = { class: "contentZ" }, Ja = /* @__PURE__ */ oe({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    const e = t, a = R({
      get() {
        return e.modelValue;
      },
      set(n) {
        i("update:modelValue", n);
      }
    }), r = R(() => a.value ? "background:" + e.bg : "");
    return (n, d) => (B(), E("div", {
      style: q(y(r))
    }, [
      be(D("div", Ya, [
        Ae(n.$slots, "default")
      ], 512), [
        [_e, y(a)]
      ])
    ], 4));
  }
});
let _l = [], xl = [];
const Xa = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    _l.map((i) => {
      window.clearTimeout(i);
    }), xl.map((i) => {
      window.clearInterval(i);
    }), _l.length = 0, xl.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, we = function(t, i) {
  let e = window.setTimeout(t, i);
  return _l.push(e), e;
}, mt = function(t, i) {
  let e = window.setInterval(t, i);
  return xl.push(e), e;
}, Za = /* @__PURE__ */ oe({
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
    const r = R({
      get() {
        return e.modelValue;
      },
      set(p) {
        i("update:modelValue", p);
      }
    }), n = R({
      get() {
        return e.open;
      },
      set(p) {
        i("on-toggle", p);
      }
    }), d = R(() => n.value ? "ios-arrow-up" : "ios-arrow-down");
    function s() {
      a || (a = !0, i("on-search", r.value), we(() => {
        a = !1;
      }, 2e3));
    }
    return (p, u) => {
      const c = H("Input"), m = H("icon");
      return B(), E("div", {
        class: "tableSearchV",
        style: q({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Ae(p.$slots, "default", {}, () => [
          Q(c, {
            modelValue: y(r),
            "onUpdate:modelValue": u[0] || (u[0] = (x) => Le(r) ? r.value = x : null),
            style: q({ width: e.width }),
            search: "",
            onOnSearch: s,
            class: "searchInputC",
            placeholder: e.placeholder || y(T)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        be(D("span", {
          class: "sbt",
          onClick: u[1] || (u[1] = (x) => n.value = !y(n)),
          style: q({ color: e.btnColor })
        }, [
          Q(m, {
            type: y(d),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ke(le(y(T)("r.adSearch")), 1)
        ], 4), [
          [_e, e.showBtn]
        ])
      ], 4);
    };
  }
}), Qa = { class: "tabSetF" }, en = { class: "topCheck" }, ln = /* @__PURE__ */ oe({
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
    const e = t, a = X(!0), r = X(!1), n = X(!1), d = X([]), s = R(() => {
      let h = T("r.unknown");
      return e.modelValue.length > d.value.length && (d.value = re(e.modelValue)), d.value.map((C) => {
        let I = { label: C && C.title || h };
        return C && C.disableShowSetting && (I.disabled = !0), I;
      });
    }), p = R(() => s.value.filter((h) => h.disabled)), u = R({
      get() {
        return e.modelValue.map((h) => h && h.title || T("r.unknown"));
      },
      set(h) {
        let C = d.value.filter((I) => {
          for (let b of h)
            if (b === I.title)
              return !0;
          return !1;
        });
        i("update:modelValue", C);
      }
    }), { locale: c } = ea();
    Xe(() => {
      let h = T("r.unknown"), C;
      c.value ? C = localStorage.getItem(e.sKey + "_" + c.value) : C = localStorage.getItem(e.sKey), C ? u.value = JSON.parse(decodeURI(C)) : e.defaultCheck && (u.value = e.modelValue.filter((I) => I.showSettingCheck).map((I) => I && I.title || h));
    });
    function m(h) {
      h.length === s.value.length ? (a.value = !1, r.value = !0) : h.length > p.value.length ? (a.value = !0, r.value = !1) : (a.value = !1, r.value = !1);
    }
    fe(() => u.value, m, {
      immediate: !0,
      deep: !0
    });
    function x() {
      n.value || (n.value = !0);
    }
    function A() {
      c.value ? localStorage.setItem(e.sKey + "_" + c.value, encodeURI(JSON.stringify(u.value))) : localStorage.setItem(e.sKey, encodeURI(JSON.stringify(u.value))), n.value = !1;
    }
    function V() {
      a.value ? r.value = !1 : r.value = !r.value, a.value = !1, r.value ? u.value = s.value.map((h) => h.label) : u.value = p.value.map((h) => h.label);
    }
    return (h, C) => {
      const I = H("Icon"), b = H("Checkbox"), k = H("CheckboxGroup");
      return B(), E("div", Qa, [
        D("div", {
          class: "tabSetBt",
          onClick: x
        }, [
          Q(I, {
            type: "md-settings",
            size: "17"
          }),
          D("span", null, le(y(T)("r.tabSetting")), 1)
        ]),
        be(D("div", {
          class: "tabSetCard",
          style: q({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          D("div", en, [
            Q(b, {
              indeterminate: y(a),
              modelValue: y(r),
              "onUpdate:modelValue": C[0] || (C[0] = (_) => Le(r) ? r.value = _ : null),
              onClick: Kt(V, ["prevent"])
            }, {
              default: Y(() => [
                ke(le(y(T)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue", "onClick"]),
            D("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: A
            }, le(y(T)("r.confirm")), 1)
          ]),
          Q(k, {
            modelValue: y(u),
            "onUpdate:modelValue": C[1] || (C[1] = (_) => Le(u) ? u.value = _ : null)
          }, {
            default: Y(() => [
              (B(!0), E(pe, null, he(y(s), (_, S) => (B(), $(b, {
                class: "setItem",
                label: _ && _.label,
                key: "tabSet_" + e.sKey + S,
                disabled: _ && _.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [_e, y(n)]
        ])
      ]);
    };
  }
});
let ze = 0, ll = document.createElement("div");
ll.setAttribute("class", "spinModal");
ll.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ll);
};
function zl(t) {
  t ? ll.classList.add("show") : ll.classList.remove("show");
}
function yt(t) {
  let i = ze;
  t ? ze++ : ze > 0 && ze--, i !== ze && (ze === 0 ? zl(!1) : i === 0 && zl(!0));
}
const tn = window.location.origin;
let je = null;
const Hl = (...t) => Ke.apply(je, t);
let Se = kl.create({
  baseURL: tn,
  withCredentials: !0
  // 允许携带cookie
});
function an() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Se.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function Wl() {
  var t, i;
  if (Se.store)
    if (typeof Se.store == "function") {
      const e = Se.store();
      e.logout && e.logout();
    } else
      (i = (t = Se.store) == null ? void 0 : t.dispatch) == null || i.call(t, "logout");
  else
    an();
}
Se.interceptors.response.use(
  (t) => {
    var i, e;
    return je && (((i = t == null ? void 0 : t.data) == null ? void 0 : i.code) === 403 || ((e = t == null ? void 0 : t.data) == null ? void 0 : e.code) === 409) && je.messageBox({
      content: Hl("r.http." + t.data.code),
      onOk: Wl
    }), t;
  },
  (t) => {
    var i, e;
    return je && (((i = t == null ? void 0 : t.response) == null ? void 0 : i.status) === 403 || ((e = t == null ? void 0 : t.response) == null ? void 0 : e.status) === 409) && je.messageBox({
      content: Hl("r.http." + t.response.status),
      onOk: Wl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ne(t, i, e, a) {
  a && a.spin && yt(!1);
  let r = !0, n = t && t.data;
  if (n) {
    e = e || [];
    for (let d of e)
      n = n[d], r = r && n;
    return r ? n : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function nn(t, i, e, a, r, n, d) {
  return new Promise((s, p) => {
    switch (t) {
      case "get":
        Se.get(i, { params: e }).then((c) => {
          let m = Ne(c, a, r, n);
          m ? s(m) : p(c);
        }).catch((c) => {
          Ne({}, a, r, n), p(c);
        });
        break;
      case "delete":
        let u = d ? "params" : "data";
        Se.delete(i, { [u]: e }).then((c) => {
          let m = Ne(c, a, r, n);
          m ? s(m) : p(c);
        }).catch((c) => {
          Ne({}, a, r, n), p(c);
        });
        break;
      case "post":
        Se.post(i, e, n).then((c) => {
          let m = Ne(c, a, r, n);
          m ? s(m) : p(c);
        }).catch((c) => {
          Ne({}, a, r, n), p(c);
        });
        break;
      case "put":
        Se.put(i, e, n).then((c) => {
          let m = Ne(c, a, r, n);
          m ? s(m) : p(c);
        }).catch((c) => {
          Ne({}, a, r, n), p(c);
        });
        break;
    }
  });
}
function ol(t, i, e = {}, a, r, n, d) {
  return new Promise((s, p) => {
    var u;
    if (i) {
      n && n.spin && yt(!0);
      let c = i;
      if (window && window.hasOwnProperty("g")) {
        const A = window.g;
        let V = Object.keys(A).filter((h) => h.indexOf("URL") > -1).map((h) => h.replace("URL", ""));
        for (let h of V) {
          let C = new RegExp("^/" + h + "(?=/.*$)", "i");
          if (C.test(i) && A[h + "URL"]) {
            c = A[h + "URL"] + i.replace(C, "");
            break;
          }
        }
      }
      let m;
      if (((u = n == null ? void 0 : n.headers) == null ? void 0 : u["Content-Type"]) === "multipart/form-data")
        m = e;
      else if (e && !Ue(e))
        if (Array.isArray(e)) {
          m = [];
          for (let A of e)
            (A || A === 0 || A === !1 || A === "" && n && !n.noEmptyStr) && m.push(A);
        } else {
          m = {};
          for (let A in e)
            e.hasOwnProperty(A) && (e[A] || e[A] === 0 || e[A] === !1 || e[A] === "" && n && !n.noEmptyStr) && (m[A] = e[A]);
        }
      let x = t.toLowerCase();
      nn(x, c, m, a, r, n, d).then((A) => {
        s(A);
      }).catch((A) => {
        p(A);
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
    Se.store = t, je = i.config.globalProperties;
  },
  post(t, i, e, a, r) {
    return new Promise((n, d) => {
      ol("post", t, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  put(t, i, e, a, r) {
    return new Promise((n, d) => {
      ol("put", t, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  get(t, i, e, a, r) {
    return new Promise((n, d) => {
      ol("get", t, i, e, a, r).then((s) => {
        n(s);
      }).catch((s) => {
        d(s);
      });
    });
  },
  delete(t, i, e, a, r, n = !0) {
    return new Promise((d, s) => {
      ol("delete", t, i, e, a, r, n).then((p) => {
        d(p);
      }).catch((p) => {
        s(p);
      });
    });
  },
  all: kl.all,
  spread: kl.spread,
  config: Se
}, on = {
  class: "btTablePage fullHeight",
  ref: "tableBox"
}, sn = { class: "topBtn" }, rn = { class: "fullHeight relativeBox" }, un = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, dn = { class: "pageContainer" }, cn = 300, fn = /* @__PURE__ */ oe({
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
    }, ...qt });
    const d = r.pageSizes || [10, 20, 30, 40], s = X(a.data), p = X(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), u = X(1), c = X(0);
    let m = [], x, A, V = a.orderKey, h = a.orderDefault;
    const C = R(() => {
      for (let U of a.columns)
        if (U.fixed)
          return !0;
      return !1;
    }), I = R(() => a.selectionFixed || C.value), b = R(() => {
      let U = {
        ...a.searchData,
        current: u.value,
        size: p.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? U[h] = st(V) : a.orderKeyFormat === "camelcase" && (U[h] = at(V))), U;
    }), k = R(() => {
      let U = a.columns.filter((F) => F.type !== "selection");
      if (a.selection || a.radio) {
        let F;
        a.radio ? F = {
          title: " ",
          width: 65,
          render: (ne, ae) => ue(Yt, {
            value: ae.row.btChecked
          })
        } : F = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (F.fixed = a.selectionFixed), U.unshift(F);
      }
      return U.forEach((F) => {
        a.sortable === "custom" ? F.key && F.sortable !== !0 && F.sortable !== !1 && (F.sortable = "custom") : F.sortable = !1, F.align || (F.align = "center");
      }), a.tableEmptyTdHandle && U.forEach((F) => {
        F.key && F.render === void 0 && (F.tooltip ? F.render = ut(F.key, !0) : F.render = (ne, ae) => {
          let ce = ae.row[F.key];
          return ne("span", ce === "" || ce === null || ce === void 0 ? "--" : ce);
        });
      }), U;
    }), _ = R({
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
    }), S = R(() => m.map((U) => U.id)), M = R(() => m.map((U) => U.btKey)), f = X();
    fe(() => a.searchData, O, { deep: !0 });
    function O() {
      u.value = 1, Fe();
    }
    function v() {
      a.initData && Fe();
    }
    function L(U) {
      s.value.unshift(re(U)), we(() => {
        var F, ne;
        (ne = (F = f.value) == null ? void 0 : F.clickCurrentRow) == null || ne.call(F, 0);
      }, 100);
    }
    function N(U, F, ne) {
      let ae = null;
      if (Gt(F) && F ? ae = A : Ye(F) && (ae = F), ae !== null) {
        let ce = s.value[ae];
        for (let j in U)
          U.hasOwnProperty(j) && (ce[j] = U[j]);
        ne && we(() => {
          var j, Te;
          (Te = (j = f.value) == null ? void 0 : j.clickCurrentRow) == null || Te.call(j, ae);
        }, 10);
      }
    }
    function ee(U) {
      s.value.splice(U, 1), we(() => {
        var F, ne;
        (ne = (F = f.value) == null ? void 0 : F.clickCurrentRow) == null || ne.call(F, 0);
      }, 100);
    }
    function te(U, F) {
      var ne, ae;
      U.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((ae = (ne = f.value) == null ? void 0 : ne.toggleSelect) == null || ae.call(ne, F));
    }
    function G(U, F) {
      x = F.btKey, A = Number(F.btKey.split("-")[1]), a.radio && (s.value[A].btChecked = !0);
    }
    function ie(U) {
      if (a.radio)
        for (let F of _.value)
          F.btKey !== x && (s.value[Number(F.btKey.split("-")[1])].btChecked = !1);
      m = U, e("on-selection-change", U);
    }
    function me() {
      return re(m);
    }
    function Me(U) {
      u.value = U, Fe();
    }
    function Re(U) {
      p.value = U, localStorage.setItem("btPageSize", String(U)), u.value === 1 && Fe();
    }
    function Ce({ key: U, order: F }) {
      h === "normal" ? (V = a.orderKey, h = a.orderDefault) : (V = U, h = F), u.value = 1, Be();
    }
    function Ve() {
      var U, F;
      if (a.radio) {
        if (M.value.length > 0 && _.value.length > 0) {
          let ne = M.value[0].split("-")[1];
          _.value[ne].btChecked = !1;
        }
      } else
        (F = (U = f.value) == null ? void 0 : U.selectAll) == null || F.call(U, !1);
      m.length > 0 && (m = [], e("on-selection-change", [])), x = null, A = null;
    }
    function xe() {
      s.value = [], Ve(), u.value = 1, c.value = 0;
    }
    function Be(U, F, ne) {
      return new Promise((ae) => {
        U && (h = U), F && (V = F), a.url ? Pe.get(a.url, b.value, "", [], { spin: a.getDataLoading }).then((ce) => {
          var Te, al;
          let j;
          ne || Ve(), typeof a.dataHandler == "function" ? j = a.dataHandler(ce) : j = ce, j.data ? (j.data.records || j.data.records === null ? s.value = j.data.records || [] : j.data.page ? (j.data.page.records || j.data.page.records === null) && (s.value = j.data.page.records || []) : j.data.data ? (j.data.data.records || j.data.data.records === null) && (s.value = j.data.data.records || []) : s.value = j.data, c.value = ((Te = j.data.page) == null ? void 0 : Te.total) || ((al = j.data.data) == null ? void 0 : al.total) || j.data.total || j.total || 0, c.value === 0 && u.value > 1 && s.value && s.value.length === 0 ? u.value = 1 : u.value > 1 && c.value <= (u.value - 1) * p.value && (u.value--, De(function() {
            Be(U, F);
          })), e("on-data-change", j), ae(j)) : (console.warn("请求返回数据有误，无法使用"), xe(), e("on-data-change", j));
        }).catch((ce) => {
          console.warn(ce), Ve(), xe(), e("on-data-change", ce);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Fe(U, F, ne) {
      a.radio && (U || a.rowClickNum !== -1) ? Be(F, ne, U).then(() => {
        s.value.length > 0 && we(() => {
          var ae, ce, j, Te;
          U ? (ce = (ae = f.value) == null ? void 0 : ae.clickCurrentRow) == null || ce.call(ae, A || 0) : (Te = (j = f.value) == null ? void 0 : j.clickCurrentRow) == null || Te.call(j, a.rowClickNum);
        }, 10);
      }) : Be();
    }
    return Xe(v), i({
      selectedIds: S,
      addRow: L,
      setRowData: N,
      deleteRow: ee,
      getSelected: me,
      clearSelect: Ve,
      clearTableData: xe,
      getTableData: Be,
      getDataAndClickRow: Fe
    }), (U, F) => {
      const ne = H("Table"), ae = H("Page");
      return B(), E("div", on, [
        be(D("div", sn, [
          Ae(U.$slots, "tableSetting"),
          Ae(U.$slots, "topMsg"),
          Ae(U.$slots, "topBtnGroup")
        ], 512), [
          [_e, a.showTopRow]
        ]),
        D("div", {
          class: ve(["tableContainer fullHeight", { noTop: !a.showTopRow, noPage: a.noPage }])
        }, [
          D("div", rn, [
            D("div", un, [
              Q(ne, tl({
                ref_key: "tableRef",
                ref: f
              }, U.$attrs, {
                height: y(I) && cn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !y(I), lightHeadO: a.lightHead },
                columns: y(k),
                data: y(_),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: G,
                onOnSelectionChange: ie,
                onOnSortChange: Ce,
                onOnRowClick: te
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ], 2),
        be(D("div", dn, [
          Q(ae, {
            modelValue: y(u),
            "onUpdate:modelValue": F[0] || (F[0] = (ce) => Le(u) ? u.value = ce : null),
            "page-size-opts": y(d),
            total: y(c),
            "page-size": y(p),
            "show-sizer": "",
            "show-total": "",
            showElevator: !a.noElevator,
            size: a.pageComponentSize,
            onOnChange: Me,
            onOnPageSizeChange: Re
          }, null, 8, ["modelValue", "page-size-opts", "total", "page-size", "showElevator", "size"])
        ], 512), [
          [_e, !a.noPage]
        ])
      ], 512);
    };
  }
}), ht = /* @__PURE__ */ oe({
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
    const e = t, a = R({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(u) {
        let c = {
          key: u,
          val: null
        };
        a.value && a.value !== u && (c.beforeKey = a.value), i("update:modelValue", c), i("on-change", c);
      }
    }), r = R({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(u) {
        i("update:modelValue", {
          key: a.value,
          val: u
        });
      }
    }), n = R(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), d = R(() => ({ width: e.itemWidth + "px" }));
    function s(u) {
      var c;
      ((c = u == null ? void 0 : u.target) == null ? void 0 : c.value) !== void 0 && p({
        key: a.value,
        val: u.target.value
      });
    }
    const p = zt((u) => {
      i("on-change", u);
    }, 500);
    return (u, c) => {
      const m = H("Option"), x = H("Select"), A = H("Input");
      return B(), E("div", null, [
        Q(x, {
          modelValue: y(a),
          "onUpdate:modelValue": c[0] || (c[0] = (V) => Le(a) ? a.value = V : null),
          style: q(y(n)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: Y(() => [
            (B(!0), E(pe, null, he(e.selectOption, (V, h) => (B(), $(m, {
              value: V.val,
              key: "selectInputOp" + V.value + h,
              style: q({ textAlign: e.labelTextAlign })
            }, {
              default: Y(() => [
                ke(le(V.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Q(A, {
          modelValue: y(r),
          "onUpdate:modelValue": c[1] || (c[1] = (V) => Le(r) ? r.value = V : null),
          placeholder: e.placeholder || y(T)("r.pInput"),
          style: q(y(d)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: s
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var vt = { exports: {} };
(function(t, i) {
  (function(e, a) {
    t.exports = a();
  })(pn, function() {
    function e(m) {
      var x = [];
      return m.AMapUI && x.push(a(m.AMapUI)), m.Loca && x.push(r(m.Loca)), Promise.all(x);
    }
    function a(m) {
      return new Promise(function(x, A) {
        var V = [];
        if (m.plugins)
          for (var h = 0; h < m.plugins.length; h += 1)
            d.AMapUI.plugins.indexOf(m.plugins[h]) == -1 && V.push(m.plugins[h]);
        if (s.AMapUI === n.failed)
          A("前次请求 AMapUI 失败");
        else if (s.AMapUI === n.notload) {
          s.AMapUI = n.loading, d.AMapUI.version = m.version || d.AMapUI.version, h = d.AMapUI.version;
          var C = document.body || document.head, I = document.createElement("script");
          I.type = "text/javascript", I.src = "https://webapi.amap.com/ui/" + h + "/main.js", I.onerror = function(b) {
            s.AMapUI = n.failed, A("请求 AMapUI 失败");
          }, I.onload = function() {
            if (s.AMapUI = n.loaded, V.length)
              window.AMapUI.loadUI(V, function() {
                for (var b = 0, k = V.length; b < k; b++) {
                  var _ = V[b].split("/").slice(-1)[0];
                  window.AMapUI[_] = arguments[b];
                }
                for (x(); p.AMapUI.length; )
                  p.AMapUI.splice(0, 1)[0]();
              });
            else
              for (x(); p.AMapUI.length; )
                p.AMapUI.splice(0, 1)[0]();
          }, C.appendChild(I);
        } else
          s.AMapUI === n.loaded ? m.version && m.version !== d.AMapUI.version ? A("不允许多个版本 AMapUI 混用") : V.length ? window.AMapUI.loadUI(V, function() {
            for (var b = 0, k = V.length; b < k; b++) {
              var _ = V[b].split("/").slice(-1)[0];
              window.AMapUI[_] = arguments[b];
            }
            x();
          }) : x() : m.version && m.version !== d.AMapUI.version ? A("不允许多个版本 AMapUI 混用") : p.AMapUI.push(function(b) {
            b ? A(b) : V.length ? window.AMapUI.loadUI(V, function() {
              for (var k = 0, _ = V.length; k < _; k++) {
                var S = V[k].split("/").slice(-1)[0];
                window.AMapUI[S] = arguments[k];
              }
              x();
            }) : x();
          });
      });
    }
    function r(m) {
      return new Promise(function(x, A) {
        if (s.Loca === n.failed)
          A("前次请求 Loca 失败");
        else if (s.Loca === n.notload) {
          s.Loca = n.loading, d.Loca.version = m.version || d.Loca.version;
          var V = d.Loca.version, h = d.AMap.version.startsWith("2"), C = V.startsWith("2");
          if (h && !C || !h && C)
            A("JSAPI 与 Loca 版本不对应！！");
          else {
            h = d.key, C = document.body || document.head;
            var I = document.createElement("script");
            I.type = "text/javascript", I.src = "https://webapi.amap.com/loca?v=" + V + "&key=" + h, I.onerror = function(b) {
              s.Loca = n.failed, A("请求 AMapUI 失败");
            }, I.onload = function() {
              for (s.Loca = n.loaded, x(); p.Loca.length; )
                p.Loca.splice(0, 1)[0]();
            }, C.appendChild(I);
          }
        } else
          s.Loca === n.loaded ? m.version && m.version !== d.Loca.version ? A("不允许多个版本 Loca 混用") : x() : m.version && m.version !== d.Loca.version ? A("不允许多个版本 Loca 混用") : p.Loca.push(function(b) {
            b ? A(b) : A();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var n;
    (function(m) {
      m.notload = "notload", m.loading = "loading", m.loaded = "loaded", m.failed = "failed";
    })(n || (n = {}));
    var d = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = { AMap: n.notload, AMapUI: n.notload, Loca: n.notload }, p = { AMap: [], AMapUI: [], Loca: [] }, u = [], c = function(m) {
      typeof m == "function" && (s.AMap === n.loaded ? m(window.AMap) : u.push(m));
    };
    return { load: function(m) {
      return new Promise(function(x, A) {
        if (s.AMap == n.failed)
          A("");
        else if (s.AMap == n.notload) {
          var V = m.key, h = m.version, C = m.plugins;
          V ? (window.AMap && location.host !== "lbs.amap.com" && A("禁止多种API加载方式混用"), d.key = V, d.AMap.version = h || d.AMap.version, d.AMap.plugins = C || d.AMap.plugins, s.AMap = n.loading, h = document.body || document.head, window.___onAPILoaded = function(b) {
            if (delete window.___onAPILoaded, b)
              s.AMap = n.failed, A(b);
            else
              for (s.AMap = n.loaded, e(m).then(function() {
                x(window.AMap);
              }).catch(A); u.length; )
                u.splice(0, 1)[0]();
          }, C = document.createElement("script"), C.type = "text/javascript", C.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + d.AMap.version + "&key=" + V + "&plugin=" + d.AMap.plugins.join(","), C.onerror = function(b) {
            s.AMap = n.failed, A(b);
          }, h.appendChild(C)) : A("请填写key");
        } else if (s.AMap == n.loaded)
          if (m.key && m.key !== d.key)
            A("多个不一致的 key");
          else if (m.version && m.version !== d.AMap.version)
            A("不允许多个版本 JSAPI 混用");
          else {
            if (V = [], m.plugins)
              for (h = 0; h < m.plugins.length; h += 1)
                d.AMap.plugins.indexOf(m.plugins[h]) == -1 && V.push(m.plugins[h]);
            V.length ? window.AMap.plugin(V, function() {
              e(m).then(function() {
                x(window.AMap);
              }).catch(A);
            }) : e(m).then(function() {
              x(window.AMap);
            }).catch(A);
          }
        else if (m.key && m.key !== d.key)
          A("多个不一致的 key");
        else if (m.version && m.version !== d.AMap.version)
          A("不允许多个版本 JSAPI 混用");
        else {
          var I = [];
          if (m.plugins)
            for (h = 0; h < m.plugins.length; h += 1)
              d.AMap.plugins.indexOf(m.plugins[h]) == -1 && I.push(m.plugins[h]);
          c(function() {
            I.length ? window.AMap.plugin(I, function() {
              e(m).then(function() {
                x(window.AMap);
              }).catch(A);
            }) : e(m).then(function() {
              x(window.AMap);
            }).catch(A);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, d = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, s = {
        AMap: n.notload,
        AMapUI: n.notload,
        Loca: n.notload
      }, p = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(vt);
var yn = vt.exports;
const hn = /* @__PURE__ */ mn(yn);
let Bl = { securityJsCode: "", key: "" };
function vn({ securityJsCode: t, key: i }) {
  Bl.securityJsCode = t, Bl.key = i;
}
function gn(t) {
  return Bl[t];
}
const gt = /* @__PURE__ */ oe({
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
    const e = t, a = R({
      get() {
        let k;
        return e.modelValue ? e.modelValue.name ? k = re(e.modelValue) : k = {
          ...e.modelValue,
          name: null
        } : k = {
          name: null
        }, k;
      },
      set(k) {
        i("update:modelValue", re(k));
      }
    }), r = R(() => Ye(e.width) ? e.width + "px" : e.width), n = R(() => Ye(e.height) ? e.height + "px" : e.height ? e.height : Ye(e.width) ? e.width * 0.66 + "px" : "200px"), d = R(() => ({
      width: r.value,
      position: "relative"
    })), s = R(() => ({
      width: r.value,
      height: n.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    fe(
      () => e.modelValue,
      (k) => {
        if (k && k.lng && k.lat) {
          if (!V || !h)
            return;
          I({
            lng: k.lng,
            lat: k.lat,
            name: k.name
          });
        }
      }
    );
    const p = "mapId" + Math.floor(Math.random() * 1e9), u = X(null), c = X(null);
    let m;
    function x() {
      c.value && c.value.clientHeight < 10 || !c.value ? we(x, 300) : we(C, 100);
    }
    let A, V, h;
    function C() {
      hn.load({
        key: gn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((k) => {
        A = k, V = new A.Map(p).on("complete", () => {
          var S, M, f, O;
          h = new A.Geocoder(), (S = e.modelValue) != null && S.lng && ((M = e.modelValue) != null && M.lat) && I({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const _ = (O = (f = u.value) == null ? void 0 : f.$el) == null ? void 0 : O.children;
          _ && Array.isArray(_) && _.length > 1 && new A.AutoComplete({
            input: _[1]
          }).on("select", (v) => {
            var L, N, ee;
            (L = v == null ? void 0 : v.poi) != null && L.name && ((N = v.poi.location) != null && N.lng && ((ee = v.poi.location) != null && ee.lat) ? (I({
              name: v.poi.name,
              lng: v.poi.location.lng,
              lat: v.poi.location.lat
            }), a.value = {
              name: v.poi.name,
              lng: v.poi.location.lng,
              lat: v.poi.location.lat
            }) : V.setCity(v.poi.name, () => {
              let te = V.getCenter();
              I({
                name: v.poi.name,
                lng: te.lng,
                lat: te.lat
              }), a.value = {
                name: v.poi.name,
                lng: te.lng,
                lat: te.lat
              };
            })), i("on-change", a.value);
          }), V.on("hotspotclick", (v) => {
            I({
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
    function I({ lng: k, lat: _, name: S }) {
      V.clearMap();
      let M = new A.LngLat(k, _), f = new A.Marker({
        map: V,
        position: M,
        draggable: !0
      });
      V.add(f), b(k, _), f.on("dragend", () => {
        let O = f.getPosition();
        a.value = {
          name: S || null,
          lng: O.lng,
          lat: O.lat
        }, b(k, _);
      }), f.on("click", (O) => {
        m && m.open(V, O.target.getPosition());
      }), V.setFitView();
    }
    function b(k, _) {
      h.getAddress([k, _], (S, M) => {
        S === "complete" && M.info === "OK" && M.regeocode && M.regeocode.formattedAddress ? m = new A.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + M.regeocode.formattedAddress + "</div>",
          offset: new A.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (m = null, console.warn("地图获取位置信息失败", M));
      });
    }
    return Xe(x), Rt(() => {
      V && (V.destroy(), V = null, h = null, m = null);
    }), (k, _) => (B(), E("div", {
      style: q(y(d)),
      class: "containerIKJ"
    }, [
      Q(y(Jt), {
        ref_key: "mapInputRef",
        ref: u,
        modelValue: y(a).name,
        "onUpdate:modelValue": _[0] || (_[0] = (S) => y(a).name = S),
        class: ve({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || y(T)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      D("div", {
        style: q(y(s)),
        ref_key: "mapRef",
        ref: c,
        id: p
      }, null, 4)
    ], 4));
  }
});
var Jl;
const bt = /* @__PURE__ */ oe({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (Jl = window == null ? void 0 : window.g) != null && Jl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const e = t, a = X([]), r = R({
      get() {
        let u = e.modelValue;
        return Array.isArray(u) ? re(u) : Ye(u) ? cl({
          group: a.value,
          condition: (c) => c.value === u,
          pathKey: "value"
        }) : Ql(u) ? u.split(e.separator) : [];
      },
      set(u) {
        if (e.onlyLastVal)
          Ue(u) ? (i("update:modelValue", null), i("on-label-change", null)) : i("update:modelValue", rl(u));
        else {
          if (Ht(e.modelValue, u))
            return;
          i("update:modelValue", re(u));
        }
      }
    });
    function n() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Pe.get(e.url).then((u) => {
        var m;
        let c = null;
        (m = u == null ? void 0 : u.data) != null && m.records ? c = u.data.records : u != null && u.data ? c = u.data : u && (c = u), c ? (typeof e.optionFilter == "function" && K(e.optionFilter) === "Function" && (c = e.optionFilter(c)), a.value = d(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function d(u) {
      let c = [];
      for (let m of u) {
        let x = {
          value: m[e.optionVal],
          label: m[e.optionLabel]
        };
        m.children && !Ue(m.children) && (x.children = d(m.children)), c.push(x);
      }
      return c;
    }
    function s(u) {
      return e.onlyLastLabel ? rl(u) : u.join(e.separator);
    }
    function p(u, c) {
      let m = "";
      Ue(c) || (m = c.map((x) => x.label).join(e.separator)), i("on-label-change", m);
    }
    return Xe(n), (u, c) => {
      const m = H("Cascader");
      return B(), $(m, {
        data: y(a),
        modelValue: y(r),
        "onUpdate:modelValue": c[0] || (c[0] = (x) => Le(r) ? r.value = x : null),
        onOnChange: p,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": s,
        placeholder: e.placeholder || y(T)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), wt = /* @__PURE__ */ oe({
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
    const e = t, a = X(), r = R({
      get() {
        if (e.modelValue && (Ye(e.modelValue) || Ql(e.modelValue))) {
          let d = String(e.modelValue).trim();
          if (/^\d*$/.test(d)) {
            let p = d.substring(0, 2) + "0000", u, c = n(d);
            return c.length < 7 ? u = d.substring(0, 4) + "00" : u = d.substring(0, 6), /^8\d+$/.test(d) ? [p, c] : [p, u, c];
          }
          return d.indexOf(e.separator) !== -1 ? d.split(e.separator) : [d];
        } else
          return Array.isArray(e.modelValue) ? re(e.modelValue) : (a.value && (a.value.select = []), []);
      },
      set(d) {
        if (Ue(d))
          i("update:modelValue", null), i("on-name-change", null);
        else {
          let s = rl(d), p = "", u = "";
          if (s && (p = s.code), p && p.length < 12) {
            let c = [...p];
            for (; c.length < 12; )
              c.push(0);
            p = c.join("");
          }
          if (Array.isArray(d) && (u = d.map((c) => c.name).join(e.separator)), p) {
            if (p === e.modelValue)
              return;
            i("update:modelValue", p);
          }
          u && i("on-name-change", u);
        }
      }
    });
    function n(d) {
      let s = [...d];
      for (; s[s.length - 1] === "0"; )
        s.pop();
      return s.join("");
    }
    return (d, s) => (B(), $(y(la), tl(d.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: a,
      modelValue: y(r),
      "onUpdate:modelValue": s[0] || (s[0] = (p) => Le(r) ? r.value = p : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || y(T)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function $e(t) {
  var d, s, p;
  const i = (...u) => Ke.apply(this, u), e = i("r.closePreview"), a = i("r.fullImg");
  let r = wl(document.getElementsByTagName("body")), n = document.createElement("div");
  n.setAttribute("class", "fullScreenImgByDom"), n.innerHTML = `<div class='previewInner'><img src='${t}' alt='${a}' ><i class='ivu-icon ivu-icon-md-close' title='${e}' ></i></div>`, (s = (d = n.querySelector(".ivu-icon-md-close")) == null ? void 0 : d.addEventListener) == null || s.call(d, "click", function() {
    var c;
    let u = wl(document.getElementsByTagName("body"));
    (c = u == null ? void 0 : u.removeChild) == null || c.call(u, n);
  }), (p = r == null ? void 0 : r.appendChild) == null || p.call(r, n);
}
const bn = { class: "previewBoxM" }, wn = {
  key: 0,
  class: "previewImg"
}, kn = ["src", "alt"], Vn = { class: "deleteModal" }, An = { class: "previewBoxM" }, Cn = {
  key: 0,
  class: "previewImg"
}, _n = ["src", "alt"], xn = { class: "deleteModal" }, Bn = { class: "customFileListM" }, In = {
  key: 0,
  class: "customFileListItem"
}, Sn = ["onClick", "title"], Tn = { class: "btBoxJ" }, On = { class: "customFileListM" }, Ln = {
  key: 0,
  class: "customFileListItem"
}, Mn = ["onClick", "title"], Fn = { class: "btBoxJ" };
var Xl;
const kt = /* @__PURE__ */ oe({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (Xl = window == null ? void 0 : window.g) != null && Xl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const e = t, a = bl([]), r = bl([]), n = R(() => !e.manualUpload && e.showImg && u.value ? "img" : e.manualUpload && e.showImg && u.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "list" : ""), d = R(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), s = R({
      get() {
        if (e.manualUpload)
          return p.value;
        {
          let v = [];
          for (let L of p.value)
            typeof L == "object" && K(L) === "File" ? v.push(L) : (typeof L == "number" || typeof L == "string") && v.push({
              response: {
                data: [
                  {
                    id: L
                  }
                ]
              }
            });
          return v;
        }
      },
      set(v) {
        var L, N, ee;
        if (e.manualUpload)
          p.value = v;
        else {
          let te = [];
          for (let G of v)
            (ee = (N = (L = G.response) == null ? void 0 : L.data) == null ? void 0 : N[0]) != null && ee.id && te.push(G.response.data[0].id);
          p.value = te;
        }
      }
    }), p = R({
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
          let L = wl(v);
          i("update:modelValue", L ?? null), i("on-change", L ?? null);
        } else
          i("update:modelValue", re(v)), i("on-change", re(v));
      }
    }), u = R(() => {
      let v;
      e.manualUpload ? v = s.value : v = r.value;
      for (let L of v) {
        let N;
        if (e.manualUpload ? N = L && L.type : N = L && L.mimeType, !N || N && !sl(N))
          return !1;
      }
      return !0;
    });
    fe(
      () => s.value,
      async (v) => {
        var L, N, ee, te, G, ie, me, Me, Re;
        if (n.value === "localImg")
          (v == null ? void 0 : v.length) > 0 ? a.value = await m(v) : a.value = [];
        else if ((v == null ? void 0 : v.length) > 0 && n.value !== "localList") {
          let Ce = [];
          for (let Ve of v)
            if (Ve.name === void 0)
              if ((ee = (N = (L = Ve.response) == null ? void 0 : L.data) == null ? void 0 : N[0]) != null && ee.id) {
                let xe = await Pe.get(e.url + "/" + Ve.response.data[0].id).catch(() => {
                  Ce.push({ name: T("r.file") + El(v, Ve) });
                }), Be = re(Ve);
                Be.name = ((ie = (G = (te = xe == null ? void 0 : xe.data) == null ? void 0 : te.returnValue) == null ? void 0 : G[0]) == null ? void 0 : ie.name) || T("r.file") + El(v, Ve), Be.mimeType = ((Re = (Me = (me = xe == null ? void 0 : xe.data) == null ? void 0 : me.returnValue) == null ? void 0 : Me[0]) == null ? void 0 : Re.mimeType) || "unknown", Ce.push(Be);
              } else
                Ce.push({ name: T("r.unknown") });
            else
              Ce.push(Ve);
          r.value = Ce;
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
    async function m(v) {
      let L = [];
      for (let N of v) {
        let ee = await il(N);
        L.push(ee);
      }
      return L;
    }
    function x(v) {
      if (!e.disabled) {
        let L = s.value;
        L.splice(v, 1), s.value = L;
      }
    }
    function A(v) {
      var L, N, ee;
      (ee = (N = (L = v == null ? void 0 : v.response) == null ? void 0 : L.data) == null ? void 0 : N[0]) != null && ee.id && window.open(e.url + "/" + v.response.data[0].id + "/download");
    }
    function V(v) {
      var L, N, ee;
      return e.manualUpload ? v.type && sl(v.type) : ((ee = (N = (L = v == null ? void 0 : v.response) == null ? void 0 : L.data) == null ? void 0 : N[0]) == null ? void 0 : ee.id) && v.mimeType && sl(v.mimeType);
    }
    function h(v) {
      e.manualUpload ? il(v).then((L) => {
        $e(L);
      }) : $e(e.url + "/" + v.response.data[0].id + "/download?preview=true");
    }
    function C(v) {
      K(v) === "String" && v.indexOf("http") > -1 ? window.open(v) : K(v) === "File" && il(v).then((L) => {
        nt(v.name, L);
      });
    }
    function I(v) {
      if (e.manualUpload) {
        if (v) {
          let L = Il(v.name);
          if (e.format.length > 0 && e.format.indexOf(L) < 0)
            return Ie(
              T("r.wrongFileType"),
              T("r.supportType") + (e.format.length > 0 && String(e.format) || T("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && v.size > e.maxSize * 1024)
            return Ie(T("r.fileIsBig"), T("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let N = s.value;
          N.push(v), s.value = N;
        }
        return !1;
      } else
        return !0;
    }
    function b(v) {
      console.warn(v), Ie(T("r.uploadError"), "", "error");
    }
    function k(v, L, N) {
      if (v && v.code === 0) {
        let ee = s.value;
        ee.push(L), s.value = ee;
      } else
        Ie(T("r.uploadFail"), v && v.message || "", "error");
    }
    function _() {
      Ie(T("r.fileIsBig"), T("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function S() {
      Ie(
        T("r.wrongFileType"),
        T("r.supportType") + (e.format.length > 0 && String(e.format) || T("r.none")),
        "warning"
      );
    }
    function M(v) {
      var ee, te, G, ie, me, Me;
      let L = (G = (te = (ee = v == null ? void 0 : v.response) == null ? void 0 : ee.data) == null ? void 0 : te[0]) == null ? void 0 : G.id, N = (Me = (me = (ie = v == null ? void 0 : v.response) == null ? void 0 : ie.data) == null ? void 0 : me[0]) == null ? void 0 : Me.mimeType;
      L && (K(N) === "String" && N.indexOf("image") > -1 ? $e(e.url + "/" + L + "/download?preview=true") : window.open(e.url + "/" + L + "/download?preview=true"));
    }
    function f(v) {
      var N, ee, te;
      let L = (te = (ee = (N = v == null ? void 0 : v.response) == null ? void 0 : N.data) == null ? void 0 : ee[0]) == null ? void 0 : te.id;
      O(null, L);
    }
    function O(v, L) {
      if (!e.disabled && p.value.indexOf(L) !== -1) {
        const N = re(p.value);
        let ee = s.value;
        ee.splice(N.indexOf(L), 1), s.value = ee;
      }
    }
    return (v, L) => {
      const N = H("Button"), ee = H("Upload"), te = H("Icon");
      return B(), E("div", null, [
        Q(ee, {
          name: "files",
          action: y(d),
          "before-upload": I,
          "on-error": b,
          "on-success": k,
          "on-exceeded-size": _,
          "on-preview": M,
          "on-remove": f,
          "on-format-error": S,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length > 0 && y(s).length >= e.length || !!e.disabled
        }, {
          default: Y(() => [
            Q(N, {
              icon: "ios-cloud-upload-outline",
              class: ve({ disabledR: e.length > 0 && y(s).length >= e.length || !!e.disabled })
            }, {
              default: Y(() => [
                ke(le(y(T)("r.selectFile")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        be(D("div", bn, [
          (B(!0), E(pe, null, he(y(p), (G) => (B(), E(pe, { key: G }, [
            !e.manualUpload && G !== null ? (B(), E("div", wn, [
              D("img", {
                src: v.url + "/" + G + "/download?preview=true",
                alt: G
              }, null, 8, kn),
              D("div", Vn, [
                Q(te, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: y(T)("r.fView"),
                  onClick: (ie) => y($e)(e.url + "/" + G + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                Q(te, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ie) => O(ie, G),
                  title: y(T)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [_e, y(n) === "img" && y(p).length > 0]
        ]),
        be(D("div", An, [
          (B(!0), E(pe, null, he(y(a), (G, ie) => (B(), E(pe, {
            key: "manualImg" + ie
          }, [
            e.manualUpload && G !== null ? (B(), E("div", Cn, [
              D("img", {
                src: G,
                alt: "manualImg" + ie
              }, null, 8, _n),
              D("div", xn, [
                Q(te, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (me) => y($e)(G),
                  title: y(T)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Q(te, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (me) => x(ie),
                  title: y(T)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [_e, y(n) === "localImg" && y(a).length > 0]
        ]),
        be(D("div", Bn, [
          (B(!0), E(pe, null, he(y(s), (G, ie) => (B(), E(pe, {
            key: "manualItem" + ie
          }, [
            e.manualUpload && G !== null ? (B(), E("p", In, [
              G.name ? (B(), $(te, {
                key: 0,
                type: y(Vl)(G.name)
              }, null, 8, ["type"])) : se("", !0),
              D("span", {
                class: ve(["upNameT", { previewName: V(G) }]),
                onClick: (me) => C(G),
                title: y(T)("r.download")
              }, le(c(G)), 11, Sn),
              D("span", Tn, [
                V(G) ? (B(), $(te, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (me) => h(G),
                  title: y(T)("r.fView")
                }, null, 8, ["onClick", "title"])) : se("", !0),
                Q(te, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (me) => x(ie),
                  title: y(T)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [_e, y(n) === "localList" && y(s).length > 0]
        ]),
        be(D("div", On, [
          (B(!0), E(pe, null, he(y(r), (G, ie) => (B(), E(pe, {
            key: "defaultItem" + ie
          }, [
            !e.manualUpload && G !== null ? (B(), E("p", Ln, [
              Q(te, {
                type: y(Vl)(G.name)
              }, null, 8, ["type"]),
              D("span", {
                class: ve(["upNameT", { previewName: V(G) }]),
                onClick: (me) => A(G),
                title: y(T)("r.download")
              }, le(G.name || y(T)("r.file") + (ie + 1)), 11, Mn),
              D("span", Fn, [
                V(G) ? (B(), $(te, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (me) => h(G),
                  title: y(T)("r.fView")
                }, null, 8, ["onClick", "title"])) : se("", !0),
                Q(te, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (me) => x(ie),
                  title: y(T)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [_e, y(n) === "list" && y(r).length > 0]
        ])
      ]);
    };
  }
}), Un = /* @__PURE__ */ D("div", { class: "bRoot" }, null, -1), Vt = /* @__PURE__ */ oe({
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
    const e = t, a = X(!1), r = X(!1), n = X(!1), d = R({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(h) {
        i("update:modelValue", [h, s.value]), i("on-change", [h, s.value]);
      }
    }), s = R({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(h) {
        i("update:modelValue", [d.value, h]), i("on-change", [d.value, h]);
      }
    }), p = R(
      () => (d.value || "") + ((d.value || s.value) && " - " || "") + (s.value || "")
    ), u = X();
    Xe(() => {
      u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        n.value = !0;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        n.value = !1;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (h) => {
        !e.disabled && (d.value || s.value) && (h.stopPropagation(), A());
      });
    });
    function c() {
      e.disabled || (a.value = !0);
    }
    function m(h) {
      d.value = h, a.value = !1, r.value = !0;
    }
    function x(h) {
      s.value = h, r.value = !1;
    }
    function A() {
      i("update:modelValue", [null, null]), i("on-change", [null, null]);
    }
    function V() {
      a.value = !1, r.value = !1, d.value && s.value === null && (d.value = null);
    }
    return (h, C) => {
      const I = H("DatePicker"), b = H("Icon"), k = H("Input");
      return B(), E("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: u
      }, [
        Q(I, {
          open: y(r),
          modelValue: y(s),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: x,
          onOnClickoutside: V
        }, {
          default: Y(() => [
            Un
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        Q(I, {
          open: y(a),
          modelValue: y(d),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: m,
          onOnClickoutside: V
        }, {
          default: Y(() => [
            D("div", { onClick: c }, [
              Q(k, {
                class: "aRoot",
                modelValue: y(p),
                "onUpdate:modelValue": C[0] || (C[0] = (_) => Le(p) ? p.value = _ : null),
                readonly: "",
                placeholder: e.placeholder || y(T)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: Y(() => [
                  Q(b, {
                    type: y(n) && (y(d) || y(s)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Pn = { class: "editor-pro-root" }, At = /* @__PURE__ */ oe({
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
    const e = t, a = bl(), r = R({
      get() {
        return e.modelValue;
      },
      set(u) {
        i("update:modelValue", u), i("on-change", u);
      }
    }), n = R(
      () => Object.assign(
        {
          placeholder: e.placeholder || T("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), d = R(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(u, c) {
                let m = new FormData();
                m.append("files", u);
                const x = u.name, A = e.imgUploadUrl ?? "/node-serve/file";
                Pe.post(A, m, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((V) => {
                  if (V && V.data)
                    if (Array.isArray(V.data))
                      for (let h of V.data) {
                        const C = A + "/" + h.id + "/download";
                        c(C, x, C);
                      }
                    else {
                      const h = A + "/" + V.data.id + "/download";
                      c(h, x, h);
                    }
                }).catch(() => {
                  Ie(T("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(u, c) {
                let m = new FormData();
                m.append("files", u);
                const x = e.videoUploadUrl ?? "/node-serve/file";
                Pe.post(x, m, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((A) => {
                  if (A && A.data)
                    if (Array.isArray(A.data))
                      for (let V of A.data) {
                        const h = x + "/" + V.id + "/download";
                        c(h);
                      }
                    else {
                      const V = x + "/" + A.data.id + "/download";
                      c(V);
                    }
                }).catch(() => {
                  Ie(T("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), s = R(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function p(u) {
      a.value = u;
    }
    return fe(
      () => e.disabled,
      (u) => {
        u ? a.value.disable() : a.value.enable();
      }
    ), Nt(() => {
      a.value && a.value.destroy();
    }), (u, c) => (B(), E("div", Pn, [
      be(Q(y(ta), {
        class: "editor-pro-toolbar",
        editor: y(a),
        defaultConfig: y(n),
        mode: u.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [_e, !u.disabled]
      ]),
      Q(y(aa), {
        class: "editor-pro-editor",
        modelValue: y(r),
        "onUpdate:modelValue": c[0] || (c[0] = (m) => Le(r) ? r.value = m : null),
        defaultConfig: y(d),
        mode: u.mode,
        onOnCreated: p,
        style: q(y(s))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Kn = {
  key: 19,
  class: "formInfoTxtXN"
}, Rn = {
  key: 20,
  class: "formTitleTxtXN"
}, jl = /* @__PURE__ */ oe({
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
    function a(u) {
      return {
        withInfo: !!u.info,
        withTitle: !!u.title,
        inlineFormItemXN: e.inline,
        noLabel: u.type === "selectInput",
        [u.class]: u.class,
        slotInput: u.slotPosition
      };
    }
    function r(u, c) {
      i("item-change", {
        e: u,
        root: c
      });
    }
    function n(u, c) {
      i("re-validate", {
        e: u,
        root: c
      });
    }
    function d(u) {
      i("select-input-change", u);
    }
    function s(u, c) {
      i("al-name-change", {
        name: u,
        root: c
      });
    }
    function p(u, c) {
      i("async-label-change", {
        label: u,
        root: c
      });
    }
    return (u, c) => {
      const m = H("InputNumber"), x = H("Input"), A = H("Option"), V = H("Select"), h = H("Radio"), C = H("Icon"), I = H("RadioGroup"), b = H("Checkbox"), k = H("CheckboxGroup"), _ = H("DatePicker"), S = H("TimePicker"), M = H("FormItem");
      return B(), $(M, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: ve(["relativeBox", a(e.item)])
      }, {
        default: Y(() => [
          e.item.type === "txt" ? (B(), E("div", {
            key: 0,
            style: q([e.itemStyle, { display: "inline-block" }]),
            class: ve({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, le(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (B(), $(m, {
            key: 1,
            style: q(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[0] || (c[0] = (f) => e.tempKeys[e.item.tempKey] = f),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || y(T)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: c[1] || (c[1] = (f) => r(f, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (B(), $(x, {
            key: 2,
            style: q(u.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (f) => e.tempKeys[e.item.tempKey] = f),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || y(T)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (f) => r(f, e.item)),
            clearable: e.item.clearable !== !1
          }, Je({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: Y(() => [
                Ae(u.$slots, e.item.slotName)
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: Y(() => [
                D("span", null, le(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: Y(() => [
                D("span", null, le(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (B(), $(V, {
            key: 3,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (f) => u.tempKeys[e.item.tempKey] = f),
            style: q(u.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || y(T)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (f) => r(f, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: Y(() => [
              (B(!0), E(pe, null, he(e.item.options, (f, O) => (B(), $(A, {
                value: f.val,
                label: f.label || f.val,
                key: "option-" + e.item.key + O,
                disabled: !!f.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (B(), $(ht, {
            key: 4,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (f) => u.tempKeys[e.item.tempKey] = f),
            "label-width": u.labelWidth,
            "item-width": u.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || y(T)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: d
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (B(), $(wt, {
            key: 5,
            style: q(u.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (f) => e.valGroup[e.item.key] = f),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || y(T)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (f) => s(f, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (B(), $(bt, {
            key: 6,
            style: q(u.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[9] || (c[9] = (f) => e.valGroup[e.item.key] = f),
            url: e.item.url || u.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || y(T)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: c[10] || (c[10] = (f) => p(f, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (B(), $(h, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (f) => e.valGroup[e.item.key] = f),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (f) => r(f, e.item))
          }, {
            default: Y(() => [
              ke(le(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (B(), $(I, {
            key: 8,
            style: q(u.itemStyle),
            onOnChange: c[13] || (c[13] = (f) => n(f, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (f) => u.tempKeys[e.item.tempKey] = f)
          }, {
            default: Y(() => [
              (B(!0), E(pe, null, he(e.item.options, (f) => (B(), $(h, {
                key: "radioItem" + f.val,
                label: f.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || f.disabled
              }, {
                default: Y(() => [
                  f.icon && !e.item.buttonType ? (B(), $(C, {
                    key: 0,
                    type: f.icon
                  }, null, 8, ["type"])) : se("", !0),
                  D("span", null, le(f.label || f.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (B(), $(b, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (f) => e.valGroup[e.item.key] = f),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (f) => r(f, e.item))
          }, {
            default: Y(() => [
              ke(le(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (B(), $(k, {
            key: 10,
            style: q(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (f) => u.tempKeys[e.item.tempKey] = f),
            onOnChange: c[18] || (c[18] = (f) => n(f, e.item))
          }, {
            default: Y(() => [
              (B(!0), E(pe, null, he(e.item.options, (f) => (B(), $(b, {
                key: "checkItem" + f.val,
                label: f.val,
                disabled: !!e.item.disabled || e.disabled || f.disabled
              }, {
                default: Y(() => [
                  f.icon ? (B(), $(C, {
                    key: 0,
                    type: f.icon
                  }, null, 8, ["type"])) : se("", !0),
                  D("span", null, le(f.label || f.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (B(), $(x, {
            key: 11,
            type: "textarea",
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (f) => u.tempKeys[e.item.tempKey] = f),
            autosize: e.item.autosize || { minRows: 2 },
            style: q(u.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || y(T)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (f) => r(f, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (B(), $(kt, {
            key: 12,
            style: q(u.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[21] || (c[21] = (f) => e.valGroup[e.item.key] = f),
            url: e.item.url || u.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: c[22] || (c[22] = (f) => n(f, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (B(), $(_, {
            key: 13,
            style: q(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[23] || (c[23] = (f) => u.tempKeys[e.item.tempKey] = f),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || y(T)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: c[24] || (c[24] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (B(), $(S, {
            key: 14,
            style: q(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[25] || (c[25] = (f) => u.tempKeys[e.item.tempKey] = f),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || y(T)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: c[26] || (c[26] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (B(), $(Vt, {
            key: 15,
            style: q(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (f) => u.tempKeys[e.item.tempKey] = f),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || y(T)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (B(), $(At, {
            key: 16,
            class: "inlineBlock",
            style: q(u.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (f) => e.valGroup[e.item.key] = f),
            placeholder: e.item.placeholder || y(T)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (f) => r(f, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (B(), $(gt, {
            key: 17,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (f) => u.tempKeys[e.item.tempKey] = f),
            style: q(u.itemStyle),
            placeholder: e.item.placeholder || y(T)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (f) => r(f, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (B(), E("div", {
            key: 18,
            class: "inlineBlock",
            style: q(u.itemStyle)
          }, [
            Ae(u.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : se("", !0),
          e.item.info ? (B(), E("div", Kn, le(e.item.info), 1)) : se("", !0),
          e.item.title ? (B(), E("div", Rn, le(e.item.title), 1)) : se("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), Nn = /* @__PURE__ */ D("input", { type: "text" }, null, -1), En = { class: "inlineBlock" }, yl = /* @__PURE__ */ oe({
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
    var Rl, Nl;
    const a = t, r = X(null), n = X({}), d = X([]), s = X({});
    let p = [];
    const u = ((Rl = window == null ? void 0 : window.g) == null ? void 0 : Rl.mgrURL) ?? "";
    let c = [], m = [];
    const x = X(!1), A = X(Math.random() * 1e8 + 1e3), V = (Nl = window == null ? void 0 : window.g) != null && Nl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let h = !1;
    const C = R(() => Array.isArray(a.formData.length ? a.formData[0] : !1)), I = R(
      () => a.inline ? {
        width: a.itemWidth + a.labelWidth + "px"
      } : {}
    ), b = R(
      () => a.inline ? {
        width: "100%"
      } : { width: a.contentWidth }
    ), k = R(() => {
      let o = re(a.formRules);
      for (let l in o)
        if (o.hasOwnProperty(l))
          if (Array.isArray(o[l]))
            for (let w of o[l])
              w.message || w.validator || (w.message = T("r.required"));
          else
            K(o[l]) === "Object" && (o[l].message || o[l].validator || (o[l].message = T("r.required")));
      return o;
    }), _ = R(() => {
      let o = [];
      if (C.value)
        for (let l of d.value)
          f(l, o);
      else
        f(d.value, o);
      return o.concat(c, m);
    }), S = R(() => {
      let o = [];
      if (C.value)
        for (let l of d.value)
          O(l, o);
      else
        O(d.value, o);
      return o;
    });
    function M(o) {
      return o.filter((l) => l.slotName);
    }
    function f(o, l) {
      for (let w of o)
        if (w.showing === !0 && w.key && w.type !== "selectInput" && (l.push(w.key), w.key2 && l.push(w.key2), w.collectLabel)) {
          if (!Array.isArray(w.collectLabel) && w.collectLabel.key)
            l.push(w.collectLabel.key);
          else if (Array.isArray(w.collectLabel))
            for (let g of w.collectLabel)
              g.key && l.push(g.key);
        }
    }
    function O(o, l) {
      for (let w of o)
        w.showing === !0 && w.key && w.type !== "selectInput" && l.push(w.key);
    }
    function v() {
      return new Promise((o) => {
        ee(), N().then(() => {
          e("on-reset"), o(!0);
        });
      });
    }
    function L() {
      return new Promise((o) => {
        for (let l of p)
          l();
        p = [], s.value = {}, F(), xe(), N().then(() => {
          e("on-re-render"), o(!0);
        });
      });
    }
    function N() {
      return new Promise((o) => {
        A.value = Math.floor(Math.random() * 1e8 + 1e3), De(function() {
          o(!0);
        });
      });
    }
    function ee() {
      let o = ie();
      for (let l in n.value)
        if (n.value.hasOwnProperty(l))
          if (de(o[l]))
            n.value[l] = o[l];
          else if (Array.isArray(n.value[l]))
            n.value[l] = [];
          else if (K(n.value[l]) === "Boolean")
            n.value[l] = !1;
          else {
            const w = He(a.formData, (g) => g.key === l);
            w && (w.type === "editor" || w.type === "editorPro") ? n.value[l] = "" : n.value[l] = null;
          }
      te(o);
    }
    function te(o) {
      for (let l in s.value)
        s.value.hasOwnProperty(l) && (de(o[l]) ? s.value[l] = o[l] : Array.isArray(s.value[l]) ? s.value[l] = [] : K(s.value[l]) === "Object" && s.value[l].hasOwnProperty("key") && s.value[l].hasOwnProperty("val") ? s.value[l].val = null : s.value[l] = null);
    }
    function G(o) {
      let l = ie();
      de(l[o]) ? s.value[o] = l[o] : Array.isArray(s.value[o]) ? s.value[o] = [] : s.value[o] = null;
    }
    function ie() {
      let o = {};
      if (C.value)
        for (let l of d.value)
          me(l, o);
      else
        me(d.value, o);
      return o;
    }
    function me(o, l) {
      for (let w of o)
        w.tempKey && de(w.defaultVal) && Ve(w, l), w.key && de(w.defaultVal) && (l[w.key] = w.defaultVal), w.key2 && de(w.defaultVal2) && (l[w.key2] = w.defaultVal2);
    }
    function Me(o) {
      if (o.show) {
        if (K(o.show) === "Object")
          return Ce(o, Re(o.show));
        if (Array.isArray(o.show))
          if (o.showOr) {
            for (let l of o.show)
              if (Re(l) === !0)
                return Ce(o, !0);
            return Ce(o, !1);
          } else {
            for (let l of o.show)
              if (Re(l) === !1)
                return Ce(o, !1);
            return Ce(o, !0);
          }
        else if (K(o.show) === "Function")
          return Ce(o, o.show(n.value));
      } else
        o.showing || (o.showing = !0);
      return !0;
    }
    function Re(o) {
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
    function Ce(o, l) {
      return !o.showing && l && o.key ? (o.showing = l, o.defaultVal !== void 0 && (o.tempKey ? (s.value[o.tempKey] === null || s.value[o.tempKey] === void 0 || (K(s.value[o.tempKey]) === "Object" || Array.isArray(s.value[o.tempKey])) && Ue(s.value[o.tempKey])) && Ve(o, s.value) : (n.value[o.key] === null || n.value[o.key] === void 0) && (n.value[o.key] = o.defaultVal), o.key2 && o.deafultVal2 !== void 0 && (n.value[o.key2] === null || n.value[o.key2] === void 0) && o.type !== "inputMap" && (n.value[o.key2] = o.defaultVal2)), o.tempKey && ae(s.value[o.tempKey], o)) : o.showing = l, l;
    }
    function Ve(o, l) {
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
    function xe() {
      let o = re(a.formData);
      if (C.value)
        for (let l of o)
          Be(l);
      else
        Be(o);
      d.value = o;
    }
    function Be(o) {
      for (let l of o)
        switch (l.type) {
          case "selectInput":
            const w = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = w, s.value[w] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, p.push(
              fe(
                () => s.value[w],
                (P) => {
                  ae(P, l);
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
              fe(
                () => s.value[g],
                (P) => {
                  ae(P, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const Z = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = Z, s.value[Z] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              fe(
                () => s.value[Z],
                (P) => {
                  ae(P, l);
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
                  let P = !0;
                  for (let z of l.changeOption)
                    if (!z.valKey || !z.key) {
                      P = !1;
                      break;
                    }
                  P ? p.push(
                    fe(
                      () => {
                        let z = "";
                        if (Array.isArray(l.changeOption))
                          for (let ye of l.changeOption) {
                            let Oe = n.value[ye.valKey];
                            if (Oe || Oe === 0 || Oe === !1)
                              z += "&" + ye.key + "=" + Oe;
                            else if (!ye.notRequired)
                              return !1;
                          }
                        return z;
                      },
                      (z) => {
                        let ye = re(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, z && l.optionUrl) {
                          let Oe = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Fe((Oe + z).replace(/\?&/, "?"), l, ye);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), de(ye) && U(ye, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && p.push(
                    fe(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? n.value[l.changeOption.valKey] : !1,
                      (P) => {
                        let z = re(s.value[l.tempKey]);
                        if (s.value[l.tempKey] = null, (P || P === 0 || P === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let ye = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          Fe((ye + "&" + l.changeOption.key + "=" + P).replace(/\?&/, "?"), l, z);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), de(z) && U(z, l);
                      },
                      { immediate: !0 }
                    )
                  ) : K(l.changeOption) === "Boolean" && p.push(
                    fe(
                      () => He(a.formData, (P) => P.key === l.key).optionUrl,
                      (P) => {
                        let z = re(s.value[l.tempKey]);
                        s.value[l.tempKey] = null, P ? Fe(P, l, z) : (l.options = [], l.localOption && (l.options = [...l.localOption]), de(z) && U(z, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && Fe(l.optionUrl, l);
            else
              K(l.borrowOption) === "String" && (l.options = He(d.value, (P) => P.key === l.borrowOption).options);
            const J = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = J, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? s.value[J] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? s.value[J] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : s.value[J] = l.defaultVal !== void 0 ? l.defaultVal : null, p.push(
              fe(
                () => s.value[J],
                (P) => {
                  ae(P, l);
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
            const W = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = W, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? s.value[W] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (s.value[W] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), p.push(
              fe(
                () => s.value[W],
                (P) => {
                  ae(P, l);
                }
              )
            );
            break;
        }
    }
    function Fe(o, l, w) {
      Pe.get(o).then((g) => {
        var J;
        if (!l.options)
          return;
        let Z = ((J = g == null ? void 0 : g.data) == null ? void 0 : J.records) || (g == null ? void 0 : g.data) || g || [];
        Array.isArray(Z) ? (l.optionFilter && K(l.optionFilter) === "Function" && (Z = l.optionFilter(Z)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...Z.map((W) => {
            let P;
            if (Array.isArray(l.optionLabel)) {
              let z = "";
              l.optionLabel.forEach((ye, Oe) => {
                let vl = String(W[ye]);
                Oe === 1 ? z += "（" + vl : Oe > 1 ? z += "、" + vl : z += vl;
              }), P = {
                label: z + "）",
                val: l.optionVal && W[l.optionVal]
              };
            } else
              P = {
                label: l.optionLabel && W[l.optionLabel],
                val: l.optionVal && W[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let z of l.collectLabel)
                  z.valKey && z.valKey !== "label" && (P[z.valKey] = W[z.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (P[l.collectLabel.valKey] = W[l.collectLabel.valKey]);
            if (P.val !== null && P.val !== void 0)
              return P;
          })
        )) : (l.options.length = 0, l.options.push(...Z))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), de(w) && U(w, l), l.disableOptionByOthers && (K(l.disableOptionByOthers) === "String" ? p.push(
          fe(
            () => n.value[l.disableOptionByOthers],
            (W) => {
              if (G(l.tempKey), !!l.options) {
                for (let P of l.options)
                  P.disabled && (P.disabled = !1);
                if (W || W === 0 || W === !1)
                  for (let P of l.options)
                    P.val === W && (P.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && p.push(
          fe(
            () => l.disableOptionByOthers.filter((W) => W).map((W) => n.value[W]),
            (W) => {
              if (G(l.tempKey), !!l.options) {
                for (let P of l.options)
                  P.disabled && (P.disabled = !1);
                if (W) {
                  for (let P of l.options)
                    for (let z = 0; z < W.length; z++)
                      if (P.val === W[z]) {
                        P.disabled = !0, W.splice(z, 1);
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
      Array.isArray(l.options) && et(l.options, { val: o }) !== -1 && (s.value[l.tempKey] = o);
    }
    function F() {
      if (n.value = {}, C.value)
        for (let o of a.formData)
          ne(o);
      else
        ne(a.formData);
    }
    function ne(o) {
      for (let l of o)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (n.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (n.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function ae(o, l) {
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
              let Z = /^-?\d+(.\d+)?$/;
              l.numberVal && Z.test(o) ? n.value[l.key] = Number(o) : n.value[l.key] = o;
            } else
              n.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? n.value[l.key] = o === void 0 || o === "" || o === null ? null : !!o : l.multiple || l.type === "checkboxGroup" ? n.value[l.key] = Object.assign([], o) : n.value[l.key] = o, l.collectLabel) {
              const Z = ce(l, o);
              if (Array.isArray(l.collectLabel)) {
                for (let J of l.collectLabel)
                  if (J.key && J.valKey) {
                    const W = j(J.key);
                    let P = null;
                    Array.isArray(Z) ? (P = Z.map((ye) => ye[J.valKey]), n.value[J.key] = P, W && (s.value[W] = P)) : (Z && de(Z[J.valKey]) && (P = Z[J.valKey]), n.value[J.key] = P, W && (s.value[W] = P));
                    let z = He(d.value, (ye) => ye.key === J.key);
                    z && z.tempKey && (s.value[z.tempKey] = n.value[J.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const J = j(l.collectLabel.key);
                let W = null;
                Array.isArray(Z) ? (W = Z.map(
                  (z) => l.collectLabel && !Array.isArray(l.collectLabel) && z[l.collectLabel.valKey]
                ), n.value[l.collectLabel.key] = W, J && (s.value[J] = W)) : (Z && de(Z[l.collectLabel.valKey]) && (W = Z[l.collectLabel.valKey]), n.value[l.collectLabel.key] = W, J && (s.value[J] = W));
                let P = He(
                  d.value,
                  (z) => l.collectLabel && !Array.isArray(l.collectLabel) && z.key === l.collectLabel.key || !1
                );
                P && P.tempKey && (s.value[P.tempKey] = n.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let w = l.dateType;
            const g = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "MM"
            };
            if (w === "date" || w === "datetime" || w === "time" || w === "year" || w === "month")
              o ? (w === "time" ? n.value[l.key] = o : n.value[l.key] = Qe(o).format(typeof l.format == "string" ? l.format : g[w]), w === "date" && l.addTime && (n.value[l.key] += " 00:00:00")) : n.value[l.key] = null;
            else if (l.type === "monthRange" || w === "daterange" || w === "datetimerange" || w === "timerange") {
              if (!l.key2)
                return;
              o && o[0] && o[1] ? (w === "timerange" ? (n.value[l.key] = o[0], n.value[l.key2] = o[1]) : l.type === "monthRange" ? (n.value[l.key] = typeof l.format == "string" && Qe(o[0]).format(l.format) || o[0], n.value[l.key2] = typeof l.format == "string" && l.format && Qe(o[1]).format(l.format) || o[1]) : (n.value[l.key] = Qe(o[0]).format(l.format || w && g[w]), n.value[l.key2] = Qe(o[1]).format(l.format || w && g[w])), w === "daterange" && l.addTime && (n.value[l.key] += " 00:00:00", n.value[l.key2] += " 23:59:59")) : (n.value[l.key] = null, n.value[l.key2] = null);
            }
            break;
        }
    }
    function ce(o, l) {
      if (o.options)
        if (o.multiple || o.type === "checkboxGroup") {
          if (l) {
            let w = [];
            for (let g of o.options)
              l.indexOf(g.val) !== -1 && w.push(g);
            return w;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let w of o.options)
              if (w.val === l)
                return w;
          }
          return !1;
        }
    }
    function j(o) {
      if (C.value) {
        for (let l of d.value) {
          const w = Te(l, o);
          if (w)
            return w;
        }
        return !1;
      }
      return Te(d.value, o);
    }
    function Te(o, l) {
      for (let w of o)
        if (w.key === l)
          return w.tempKey;
      return !1;
    }
    function al(o, l) {
      let w = {};
      for (let g in n.value)
        n.value.hasOwnProperty(g) && o[g] !== void 0 && (w[g] = o[g], delete o[g]);
      Tl(w, l);
      for (let g in o)
        o.hasOwnProperty(g) && (m.indexOf(g) < 0 && m.push(g), n.value[g] = o[g]);
    }
    function Bt(o) {
      let l = re(o);
      if (C.value) {
        let w = [];
        for (let g of a.formData)
          w.push(...Sl(g, l));
        return w;
      }
      return Sl(a.formData, l);
    }
    function Sl(o, l) {
      return o.filter((w) => {
        for (let g of Object.keys(l))
          if (w.key === g && S.value.indexOf(g) > -1 && !(l[g] === null || (Array.isArray(l[g]) || K(l[g]) === "Object") && Ue(l[g])))
            return delete l[g], !0;
        return !1;
      }).map((w) => w.key);
    }
    function Tl(o, l = !1) {
      let w = re(o);
      It(o, l);
      for (let g in n.value)
        if (n.value.hasOwnProperty(g) && o[g] !== void 0 && o[g] !== "--") {
          if (Array.isArray(o[g]))
            o[g] = o[g].filter((Z) => Z !== "--");
          else if (K(o[g]) === "Object")
            for (let Z in o[g])
              o[g].hasOwnProperty(Z) && o[g][Z] === "--" && (o[g][Z] = null);
          n.value[g] = o[g];
        } else
          l || (n.value[g] = Array.isArray(n.value[g]) ? [] : null);
      Lt(Bt(w));
    }
    function It(o, l = !1) {
      if (C.value)
        for (let w of d.value)
          Ol(w, o, l);
      else
        Ol(d.value, o, l);
    }
    function Ol(o, l, w = !1) {
      for (let g of o)
        if (g.key && (w && (l[g.key] !== void 0 || g.key2 && l[g.key2] !== void 0) || !w) && g.tempKey)
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
    function St(o) {
      if (Array.isArray(o))
        for (let l of o)
          Ll(l);
      else
        K(o) === "Object" && Ll(o);
    }
    function Ll(o) {
      const { index: l, indexB: w, key: g, val: Z } = o;
      if (typeof l == "number")
        if (Array.isArray(d.value[l])) {
          if (typeof w == "number")
            if (g && (Z || Z !== void 0))
              d.value[l][w][g] = Z;
            else
              for (let J of Object.keys(o))
                J !== "index" && g !== "indexB" && (d.value[l][w][J] = o[J]);
        } else if (g && (Z || Z !== void 0))
          d.value[l][g] = Z;
        else
          for (let J of Object.keys(o))
            J !== "index" && (d.value[l][J] = o[J]);
    }
    function Ml({ label: o, root: l }) {
      l.key2 && (n.value[l.key2] = o), Ge({
        e: o,
        root: l
      });
    }
    function Fl(o) {
      o.beforeKey && Wt(c, (l) => l === o.beforeKey), o.key && (c.indexOf(o.key) === -1 && c.push(o.key), Ge({
        e: null,
        root: o
      }));
    }
    function Ul({ name: o, root: l }) {
      l.key2 && (n.value[l.key2] = o), Ge({
        e: o,
        root: l
      });
    }
    function Pl({ e: o, root: l }) {
      Ge({
        e: o,
        root: l
      }), De(function() {
        var w, g;
        (g = (w = r.value) == null ? void 0 : w.validateField) == null || g.call(w, l.key);
      });
    }
    function Ge({ e: o, root: l }) {
      we(() => {
        let w = {
          event: o
        };
        if (l.key && (w[l.key] = n.value[l.key]), l.key2 && (w[l.key2] = n.value[l.key2]), Array.isArray(l.collectLabel))
          for (let g of l.collectLabel)
            w[g.key] = n.value[g.key];
        else
          l.collectLabel && l.collectLabel.key && (w[l.collectLabel.key] = n.value[l.collectLabel.key]);
        e("on-item-change", w);
      }, 500);
    }
    function Kl() {
      let o = {};
      for (let l of _.value)
        o[l] = n.value[l];
      return a.trim && (o = fl(o)), o;
    }
    function Tt() {
      var o, l;
      (l = (o = r.value) == null ? void 0 : o.validate) == null || l.call(o);
    }
    function Ot(o) {
      we(() => {
        var l, w;
        (w = (l = r.value) == null ? void 0 : l.validateField) == null || w.call(l, o, () => {
        });
      }, 10);
    }
    function Lt(o) {
      we(() => {
        var l, w;
        if (Array.isArray(o))
          for (let g of o)
            (w = (l = r.value) == null ? void 0 : l.validateField) == null || w.call(l, g, () => {
            });
      }, 10);
    }
    function Mt(o) {
      o !== void 0 && (x.value = !!o);
    }
    function hl() {
      var o, l;
      a.disabled || (l = (o = r.value) == null ? void 0 : o.validate) == null || l.call(o, (w) => {
        h || (h = !0, w && (x.value = !0, e("on-submit", Kl())), we(() => {
          h = !1;
        }, 2e3));
      });
    }
    return Xe(() => {
      F(), xe();
    }), i({
      resetForm: v,
      refreshFormDom: N,
      reRenderForm: L,
      setItemToValGroup: al,
      updateValGroup: Tl,
      updateFormDataT: St,
      validate: Tt,
      reValidate: Ot,
      changeLoading: Mt,
      getValGroup: Kl,
      submit: hl
    }), (o, l) => {
      const w = H("FormItem"), g = H("Button"), Z = H("Form");
      return B(), $(Z, {
        ref_key: "formGroupXRef",
        ref: r,
        model: y(n),
        rules: y(k),
        "label-width": a.labelWidth,
        inline: a.inline,
        "show-message": a.showMessage,
        class: "formXN",
        key: y(A)
      }, {
        default: Y(() => [
          Q(w, { style: { display: "none" } }, {
            default: Y(() => [
              Nn
            ]),
            _: 1
          }),
          y(C) ? (B(!0), E(pe, { key: 0 }, he(y(d), (J, W) => (B(), E("div", {
            class: ve([o.teamClass, "formTeamBox" + W]),
            key: "formTeamBox" + W
          }, [
            (B(!0), E(pe, null, he(J, (P, z) => (B(), E(pe, {
              key: "formItem" + z
            }, [
              Me(P) ? (B(), $(jl, {
                key: 0,
                item: P,
                style: q(y(I)),
                "item-style": y(b),
                "val-group": y(n),
                "temp-keys": y(s),
                inline: a.inline,
                disabled: a.disabled,
                "label-width": a.labelWidth,
                "item-width": a.itemWidth,
                "mgr-url": y(u),
                "upload-url": y(V),
                onItemChange: Ge,
                onReValidate: Pl,
                onClearTempKeyItem: G,
                onSelectInputChange: Fl,
                onAlNameChange: Ul,
                onAsyncLabelChange: Ml
              }, Je({ _: 2 }, [
                he(M(J), (ye) => ({
                  name: ye.slotName,
                  fn: Y((Oe) => [
                    Ae(o.$slots, ye.slotName, {
                      valGroup: Oe.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : se("", !0)
            ], 64))), 128))
          ], 2))), 128)) : se("", !0),
          (B(!0), E(pe, null, he(y(d), (J, W) => (B(), E(pe, {
            key: "formItem" + W
          }, [
            !y(C) && Me(J) ? (B(), $(jl, {
              key: 0,
              item: J,
              style: q(y(I)),
              "item-style": y(b),
              "val-group": y(n),
              "temp-keys": y(s),
              inline: a.inline,
              disabled: a.disabled,
              "label-width": a.labelWidth,
              "item-width": a.itemWidth,
              "mgr-url": y(u),
              "upload-url": y(V),
              onItemChange: Ge,
              onReValidate: Pl,
              onClearTempKeyItem: G,
              onSelectInputChange: Fl,
              onAlNameChange: Ul,
              onAsyncLabelChange: Ml
            }, Je({ _: 2 }, [
              he(M(o.formData), (P) => ({
                name: P.slotName,
                fn: Y((z) => [
                  Ae(o.$slots, P.slotName, {
                    valGroup: z.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : se("", !0)
          ], 64))), 128)),
          a.showLongOkBt ? (B(), $(w, { key: 1 }, {
            default: Y(() => [
              Q(g, {
                onClick: hl,
                style: q(y(b)),
                type: "primary",
                loading: a.btnLoading && y(x),
                disabled: a.disabled
              }, {
                default: Y(() => [
                  ke(le(a.longOkBtTxt || y(T)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : se("", !0),
          D("div", En, [
            a.showInlineOkBt ? (B(), $(g, {
              key: 0,
              type: "primary",
              class: ve({ inlineFormBtXN: a.inline, okBtnXN: !0 }),
              onClick: hl,
              loading: a.btnLoading && y(x),
              disabled: a.disabled
            }, {
              default: Y(() => [
                ke(le(a.inlineOkBtTxt || y(T)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : se("", !0),
            a.showInlineClearBt ? (B(), $(g, {
              key: 1,
              onClick: v,
              class: ve({ inlineFormBtXN: a.inline }),
              type: "dashed"
            }, {
              default: Y(() => [
                ke(le(a.inlineClearBtTxt || y(T)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : se("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Dn = /* @__PURE__ */ oe({
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
    const a = t, r = X({ width: a.with }), n = X(!1), d = X(), s = R(() => {
      if (Array.isArray(a.formData))
        if (Array.isArray(a.formData[0])) {
          let S = [];
          for (let M of a.formData)
            S = S.concat(M.filter((f) => f.type === "custom"));
          return S;
        } else
          return a.formData.filter((S) => S.type === "custom");
      return [];
    });
    function p() {
      return new Promise((S) => {
        var M, f;
        (f = (M = d.value).resetForm) == null || f.call(M).then((O) => {
          S(O);
        });
      });
    }
    function u() {
      return new Promise((S) => {
        var M, f;
        (f = (M = d.value).refreshFormDom) == null || f.call(M).then((O) => {
          S(O);
        });
      });
    }
    function c() {
      return new Promise((S) => {
        var M, f;
        (f = (M = d.value).reRenderForm) == null || f.call(M).then((O) => {
          S(O);
        });
      });
    }
    function m(S, M) {
      var f, O;
      (O = (f = d.value).setItemToValGroup) == null || O.call(f, S, M);
    }
    function x(S, M) {
      var f, O;
      (O = (f = d.value).updateValGroup) == null || O.call(f, S, M);
    }
    function A(S) {
      var M, f;
      (f = (M = d.value).updateFormDataT) == null || f.call(M, S);
    }
    function V() {
      var S, M;
      (M = (S = d.value).validate) == null || M.call(S);
    }
    function h(S) {
      var M, f;
      (f = (M = d.value).reValidate) == null || f.call(M, S);
    }
    function C(S) {
      var M, f;
      S !== void 0 && (n.value = !!S, (f = (M = d.value).changeLoading) == null || f.call(M, n.value));
    }
    function I() {
      var S, M;
      return (M = (S = d.value).getValGroup) == null ? void 0 : M.call(S);
    }
    function b() {
      n.value = !0;
    }
    function k() {
      var S, M;
      (M = (S = d.value).submit) == null || M.call(S);
    }
    function _() {
      e("on-cancel"), we(() => {
        var S, M;
        n.value = !1, (M = (S = d.value).changeLoading) == null || M.call(S, !1);
      }, 1e3);
    }
    return i({
      resetForm: p,
      refreshFormDom: u,
      reRenderForm: c,
      setItemToValGroup: m,
      updateValGroup: x,
      updateFormDataT: A,
      validate: V,
      reValidate: h,
      changeLoading: C,
      getValGroup: I,
      submit: k,
      close: _
    }), (S, M) => {
      const f = H("Button");
      return B(), E("div", {
        style: q(y(r)),
        class: "formGroupBoxVM"
      }, [
        Q(yl, tl({
          ref_key: "formRRef",
          ref: d
        }, S.$attrs, {
          "form-data": a.formData,
          "label-width": a.labelWidth,
          "content-width": a.contentWidth,
          "item-width": a.itemWidth,
          btnLoading: a.btnLoading,
          onOnSubmit: b
        }), Je({ _: 2 }, [
          he(y(s), (O) => ({
            name: O.slotName,
            fn: Y(({ valGroup: v }) => [
              Ae(S.$slots, O.slotName, { valGroup: v })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        be(D("div", {
          class: "formFooterVM",
          style: q({ marginLeft: a.labelWidth + "px" })
        }, [
          D("div", {
            style: q({ width: a.contentWidth }),
            class: "btnBoxKAL"
          }, [
            a.showOkBt ? (B(), $(f, {
              key: 0,
              onClick: k,
              class: "form-save-btn",
              loading: a.btnLoading && y(n)
            }, {
              default: Y(() => [
                ke(le(a.okBtTxt || y(T)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : se("", !0),
            a.showCancelBt ? (B(), $(f, {
              key: 1,
              onClick: _,
              class: "form-cancel-btn"
            }, {
              default: Y(() => [
                ke(le(a.cancelBtTxt || y(T)("r.cancel")), 1)
              ]),
              _: 1
            })) : se("", !0)
          ], 4)
        ], 4), [
          [_e, a.showOkBt || a.showCancelBt]
        ])
      ], 4);
    };
  }
}), $n = /* @__PURE__ */ oe({
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
    const a = t, r = X(), n = R(() => {
      if (Array.isArray(a.formData[0])) {
        let b = [];
        for (let k of a.formData)
          b = b.concat(k.filter((_) => _.type === "custom"));
        return b;
      }
      return a.formData.filter((b) => b.type === "custom");
    });
    function d() {
      return new Promise((b) => {
        var k, _;
        (_ = (k = r.value).resetForm) == null || _.call(k).then(() => {
          b();
        });
      });
    }
    function s() {
      return new Promise((b) => {
        var k, _;
        (_ = (k = r.value).refreshFormDom) == null || _.call(k).then(() => {
          b();
        });
      });
    }
    function p() {
      return new Promise((b) => {
        var k, _;
        (_ = (k = r.value).reRenderForm) == null || _.call(k).then(() => {
          b();
        });
      });
    }
    function u(b, k) {
      var _, S;
      (S = (_ = r.value).setItemToValGroup) == null || S.call(_, b, k);
    }
    function c(b, k) {
      var _, S;
      (S = (_ = r.value).updateValGroup) == null || S.call(_, b, k);
    }
    function m(b) {
      var k, _;
      (_ = (k = r.value).updateFormDataT) == null || _.call(k, b);
    }
    function x() {
      var b, k;
      (k = (b = r.value).validate) == null || k.call(b);
    }
    function A(b) {
      var k, _;
      (_ = (k = r.value).reValidate) == null || _.call(k, b);
    }
    function V(b) {
      var k, _;
      (_ = (k = r.value).changeLoading) == null || _.call(k, b === void 0 ? !1 : b);
    }
    function h() {
      var b, k;
      return (k = (b = r.value).getValGroup) == null ? void 0 : k.call(b);
    }
    function C(b) {
      e("on-search", b);
    }
    function I() {
      var b, k;
      (k = (b = r.value).submit) == null || k.call(b);
    }
    return i({
      resetForm: d,
      refreshFormDom: s,
      reRenderForm: p,
      setItemToValGroup: u,
      updateValGroup: c,
      updateFormDataT: m,
      validate: x,
      reValidate: A,
      changeLoading: V,
      getValGroup: h,
      submit: I
    }), (b, k) => (B(), $(yl, tl({
      ref_key: "formRRef",
      ref: r
    }, b.$attrs, {
      "form-data": a.formData,
      "label-width": a.labelWidth,
      "item-width": a.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": a.showInlineOkBt,
      "inline-ok-bt-txt": y(T)("r.check"),
      "show-inline-clear-bt": a.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: C
    }), Je({ _: 2 }, [
      he(y(n), (_) => ({
        name: _.slotName,
        fn: Y(({ valGroup: S }) => [
          Ae(b.$slots, _.slotName, { valGroup: S })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Gn = /* @__PURE__ */ oe({
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
    const a = t, r = X(), n = X(!1), d = X(!1), s = R(() => {
      if (Array.isArray(a.formData[0])) {
        let f = [];
        for (let O of a.formData)
          f = f.concat(O.filter((v) => v.type === "custom"));
        return f;
      }
      return a.formData.filter((f) => f.type === "custom");
    });
    function p() {
      return new Promise((f) => {
        var O, v;
        (v = (O = r.value).resetForm) == null || v.call(O).then(() => {
          f();
        });
      });
    }
    function u() {
      return new Promise((f) => {
        var O, v;
        (v = (O = r.value).refreshFormDom) == null || v.call(O).then(() => {
          f();
        });
      });
    }
    function c() {
      return new Promise((f) => {
        var O, v;
        (v = (O = r.value).reRenderForm) == null || v.call(O).then(() => {
          f();
        });
      });
    }
    function m(f, O) {
      var v, L;
      (L = (v = r.value).setItemToValGroup) == null || L.call(v, f, O);
    }
    function x(f, O) {
      var v, L;
      (L = (v = r.value).updateValGroup) == null || L.call(v, f, O);
    }
    function A(f) {
      var O, v;
      (v = (O = r.value).updateFormDataT) == null || v.call(O, f);
    }
    function V() {
      var f, O;
      (O = (f = r.value).validate) == null || O.call(f);
    }
    function h(f) {
      var O, v;
      (v = (O = r.value).reValidate) == null || v.call(O, f);
    }
    function C(f) {
      var O, v;
      f !== void 0 && (d.value = !!f, (v = (O = r.value).changeLoading) == null || v.call(O, d.value));
    }
    function I() {
      var f, O;
      return (O = (f = r.value).getValGroup) == null ? void 0 : O.call(f);
    }
    function b() {
      d.value = !0;
    }
    function k() {
      var f, O;
      a.hideCancelBt ? S() : (O = (f = r.value).submit) == null || O.call(f);
    }
    function _() {
      n.value = !0;
    }
    function S() {
      n.value = !1, we(() => {
        var f, O;
        d.value = !1, (O = (f = r.value).changeLoading) == null || O.call(f, !1);
      }, 1e3);
    }
    function M(f) {
      e(f ? "on-open" : "on-close");
    }
    return i({
      resetForm: p,
      refreshFormDom: u,
      reRenderForm: c,
      setItemToValGroup: m,
      updateValGroup: x,
      updateFormDataT: A,
      validate: V,
      reValidate: h,
      changeLoading: C,
      getValGroup: I,
      submit: k,
      open: _,
      close: S
    }), (f, O) => {
      const v = H("Button"), L = H("Modal");
      return B(), $(L, {
        class: ve(["formModal", { hideFooter: a.hideFooter }]),
        title: a.title || y(T)("r.title"),
        modelValue: y(n),
        "onUpdate:modelValue": O[0] || (O[0] = (N) => Le(n) ? n.value = N : null),
        "mask-closable": !1,
        "footer-hide": a.hideFooter,
        width: a.width,
        onOnVisibleChange: M
      }, {
        footer: Y(() => [
          Q(v, {
            onClick: k,
            class: "modal-save-btn",
            loading: a.btnLoading && y(d)
          }, {
            default: Y(() => [
              ke(le(a.okBtTxt || y(T)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          a.hideCancelBt ? se("", !0) : (B(), $(v, {
            key: 0,
            onClick: S,
            class: "modal-cancel-btn"
          }, {
            default: Y(() => [
              ke(le(a.cancelBtTxt || y(T)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: Y(() => [
          Q(yl, tl({
            ref_key: "formRRef",
            ref: r
          }, f.$attrs, {
            "form-data": a.formData,
            "label-width": a.labelWidth,
            btnLoading: a.btnLoading,
            onOnSubmit: b
          }), Je({ _: 2 }, [
            he(y(s), (N) => ({
              name: N.slotName,
              fn: Y(({ valGroup: ee }) => [
                Ae(f.$slots, N.slotName, { valGroup: ee })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), zn = /* @__PURE__ */ oe({
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
    const e = t, a = X(!0), r = X([]), n = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let d = [];
    const s = R(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), p = R(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    fe(
      () => e.data,
      (V) => {
        a.value = !1;
        let h = [];
        u(V, h), r.value = h, De(function() {
          a.value = !0, e.inlineLeaf && De(x);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), fe(
      () => p.value,
      (V) => {
        let h, C = "s";
        if (Array.isArray(e.collectVal) ? (h = e.collectVal[0] || "", C = "a") : h = e.collectVal, !h || JSON.stringify(V) === JSON.stringify(d)) {
          d = [];
          return;
        }
        We({
          group: r.value,
          condition: (I) => I.checked === !0,
          key: "checked",
          val: !1
        }), We(C === "a" ? {
          group: r.value,
          condition: (I) => et(V, [h, I[h]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: r.value,
          condition: (I) => V.indexOf(I[h]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), fe(
      () => e.disabled,
      (V) => {
        We({
          group: r.value,
          condition: (h) => h.disableCheckbox !== V,
          key: "disableCheckbox",
          val: V
        }), e.inlineLeaf && De(x);
      },
      { immediate: !0 }
    );
    function u(V, h = []) {
      for (let C of V) {
        let I = !1;
        s.value.length > 1 ? I = Dl(p.value, (k) => k[s.value[0]] === C[s.value[0]]) !== void 0 : I = s.value[0] ? p.value.indexOf(C[s.value[0]]) !== -1 : !1;
        let b = {
          name: C[e.label],
          expand: !!(e.expandAll || C.expand),
          checked: I,
          disableCheckbox: e.disabled
        };
        for (let k of s.value)
          b[k] = C[k];
        h.push(b), C.children && C.children.length > 0 && (b.children = [], c(C.children, b.children));
      }
    }
    function c(V, h = []) {
      for (let C of V) {
        let I = !1;
        s.value.length > 1 ? I = Dl(p.value, (k) => k[s.value[0]] === C[s.value[0]]) !== void 0 : I = s.value[0] ? p.value.indexOf(C[s.value[0]]) !== -1 : !1;
        let b = {
          name: C[e.label],
          expand: !!(e.expandAll || C.expand),
          checked: I,
          disableCheckbox: e.disabled
        };
        for (let k of s.value)
          b[k] = C[k];
        h.push(b), C.children && C.children.length > 0 && (b.children = [], u(C.children, b.children));
      }
    }
    function m(V, {
      data: h
    }) {
      let C = "", I = !0;
      if (h.children && h.children.length > 0) {
        for (let b of h.children)
          if (b.children !== void 0) {
            I = !1;
            break;
          }
        I && e.inlineLeaf && (C = "inlineChildXA");
      }
      return V(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: C
        },
        [
          V(
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
    function x(V) {
      if (V) {
        V.expand && De(x);
        return;
      }
      let h = document.querySelectorAll("#" + n + " .inlineChildXA");
      if (h.length > 0)
        for (let C of h) {
          let I = C.parentElement, b = I == null ? void 0 : I.nextElementSibling;
          if (!b)
            return;
          if (b.tagName !== "BR") {
            let k = I == null ? void 0 : I.parentElement, _ = document.createElement("br");
            k == null || k.insertBefore(_, b), b = _.nextElementSibling, (b == null ? void 0 : b.className.indexOf("inlineTreeNodeF")) === -1 && b.setAttribute("class", b.className + " inlineTreeNodeF");
          }
          for (; b != null && b.nextElementSibling; )
            b = b.nextElementSibling, b.className.indexOf("inlineTreeNodeF") === -1 && b.setAttribute("class", b.className + " inlineTreeNodeF");
        }
    }
    function A(V) {
      let h = [];
      if (e.leaf) {
        for (let C of V)
          if (!C.children)
            if (Array.isArray(e.collectVal)) {
              let I = {};
              for (let b of e.collectVal)
                I[b] = C[b];
              h.push(I);
            } else
              h.push(C[e.collectVal]);
      } else
        for (let C of V)
          if (Array.isArray(e.collectVal)) {
            let I = {};
            for (let b of e.collectVal)
              I[b] = C[b];
            h.push(I);
          } else
            h.push(C[e.collectVal]);
      d = h, i("update:modelValue", h), i("on-change", re(h));
    }
    return (V, h) => {
      const C = H("Tree");
      return y(a) ? (B(), $(C, {
        key: 0,
        id: n,
        class: "checkboxTreeGA",
        data: y(r),
        render: m,
        onOnCheckChange: A,
        onOnToggleExpand: x,
        "show-checkbox": ""
      }, null, 8, ["data"])) : se("", !0);
    };
  }
}), ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: wt,
  AsyncCascader: bt,
  BtTablePage: fn,
  CheckboxTree: zn,
  EditorPro: At,
  FormGroup: Dn,
  FormModal: Gn,
  FormR: yl,
  FullPop: ma,
  HeaderBt: tt,
  Hello: ha,
  IconTxtBtn: va,
  InputMap: gt,
  MonthRange: Vt,
  Page404: Va,
  SearchForm: $n,
  SelectInput: ht,
  ShowHidePanel: qa,
  ShowHidePanelB: Ja,
  SideMenu: Ga,
  TableIconBtn: Ha,
  TableSearch: Za,
  TableSetting: ln,
  UploadGroup: kt
}, Symbol.toStringTag, { value: "Module" }));
function Ct(t) {
  const i = (...n) => Ke.apply(this, n), e = i("r.closePreview"), a = i("r.fullImg");
  let r = "previewImg" + Math.floor(Math.random() * 1e7);
  Ee.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (n) => ue(
      "div",
      {
        class: "previewModal",
        id: r
      },
      [
        ue(
          "div",
          {
            class: "previewModalInner"
          },
          [
            ue("img", {
              src: t,
              alt: a
            }),
            ue(Xt, {
              type: "md-close",
              size: 20,
              title: e,
              class: "previewModalDelete",
              onClick() {
                Ee.remove();
              }
            })
          ]
        )
      ]
    )
  }), we(() => {
    var s, p, u, c, m, x;
    const n = (c = (u = (p = (s = document.getElementById(r)) == null ? void 0 : s.parentElement) == null ? void 0 : p.parentElement) == null ? void 0 : u.parentElement) == null ? void 0 : c.parentElement, d = (x = (m = document.getElementById(r)) == null ? void 0 : m.parentElement) == null ? void 0 : x.nextSibling;
    n && (n.style.height = "0"), n && (n.style.padding = "0"), d && (d.style.display = "none");
  }, 10);
}
let el = !1;
function _t({
  height: t,
  width: i = 416,
  title: e,
  content: a,
  onOk: r,
  onCancel: n,
  okText: d,
  cancelText: s,
  noWarnIcon: p,
  footerAlign: u,
  cancelBt: c = !0
}) {
  const m = (...h) => Ke.apply(this, h);
  let A = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", V = K(a) === "String";
  Ee.warning({
    width: i,
    footerHide: !0,
    render: () => ue(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: A
        }
      },
      [
        ue(
          "div",
          {
            class: "containerN"
          },
          [
            ue(
              "div",
              {
                class: "titleN"
              },
              [
                ue("span", e || m("r.info.title")),
                ue(
                  gl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      el || Ee.remove();
                    }
                  },
                  () => ue("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            ue(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: V ? "center" : "left"
                }
              },
              [
                ue("i", {
                  class: V && !p ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                ue("div", { class: "msgBoxConO" }, a || m("r.info.text"))
              ]
            ),
            ue(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: u || "center"
                }
              },
              [
                ue(
                  gl,
                  {
                    class: "okBtN",
                    onClick(h) {
                      var C, I, b, k, _, S, M, f, O;
                      if (r && typeof r == "function") {
                        const v = r();
                        if (v && K(v) === "Promise") {
                          el = !0;
                          const L = (h == null ? void 0 : h.currentTarget) || (h == null ? void 0 : h.target);
                          L && ((I = (C = L.classList) == null ? void 0 : C.add) == null || I.call(C, "ivu-btn-loading"), (k = (b = L.nextSibling) == null ? void 0 : b.setAttribute) == null || k.call(b, "disabled", "disabled"), (O = (f = ((M = (S = (_ = L.parentElement) == null ? void 0 : _.parentElement) == null ? void 0 : S.querySelector) == null ? void 0 : M.call(S, ".titleN .closeN")).classList) == null ? void 0 : f.add) == null || O.call(f, "disabled")), Promise.resolve(v).then(() => {
                            el = !1, Ee.remove();
                          }).catch(() => {
                            el = !1, Ee.remove();
                          });
                        } else
                          Ee.remove();
                      }
                    }
                  },
                  () => [
                    ue("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    ue("span", d || m("r.confirm"))
                  ]
                ),
                ue(
                  gl,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      el || (Ee.remove(), K(n) === "Function" && n && n());
                    }
                  },
                  () => s || m("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
function xt(t, i, e, a) {
  const r = (...n) => Ke.apply(this, n);
  Ie.call(this, {
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
      let n = localStorage.getItem("editorPreviewW") || 300, d = localStorage.getItem("editorPreviewH") || 500;
      const s = a.getHtml();
      if (r) {
        let p = r.children[0].children[1].children[0], u = r.children[0].children[1];
        p.innerHTML = s, p.style.width = n + "px", u.style.height = d + "px", r.style.display = "block";
      } else {
        const p = document.body, u = document.createElement("div");
        u.setAttribute("id", "editor-preview"), u.setAttribute("class", "editor-preview-mask"), u.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${n}' min='200'><span>高</span><input type='number' value='${d}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let c = u.children[0].children[1], m = u.children[0].children[1].children[0], x = u.children[0].children[0].children[0].children[1];
        const A = 40, V = 70, h = (k) => {
          if (k && k.type === "keyup") {
            let M = !1;
            if (k.key && (M = k.key !== "Enter"), M)
              return;
          }
          let _ = k.target.value;
          if (_ = Number(_), m.style && m.style.width === _ + "px")
            return;
          const S = p.clientWidth;
          _ < 250 ? (_ = 250, k.target.value = 250) : _ > S - A && (_ = S - A, k.target.value = S - A), m.style.width = _ + "px", localStorage.setItem("editorPreviewW", _);
        };
        x.addEventListener("blur", h), x.addEventListener("keyup", h);
        let C = u.children[0].children[0].children[0].children[3];
        const I = (k) => {
          if (k && k.type === "keyup") {
            let M = !1;
            if (k.key && (M = k.key !== "Enter"), M)
              return;
          }
          let _ = k.target.value;
          if (_ = Number(_), c.style && c.style.height === _ + "px")
            return;
          const S = p.clientHeight;
          _ < 300 ? (_ = 300, k.target.value = 300) : _ > S - V && (_ = S - V, k.target.value = S - V), c.style.height = _ + "px", localStorage.setItem("editorPreviewH", _);
        };
        C.addEventListener("blur", I), C.addEventListener("keyup", I), u.children[0].children[0].children[1].addEventListener("click", () => {
          u.style.display = "none";
        }), m.innerHTML = s, m.style.width = n + "px", c.style.height = d + "px", p.append(u);
      }
    }
  }
  const i = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  na.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const Yl = {
  $fetch: Pe,
  fullScreenImgByDom: $e,
  fullScreenImgPreview: Ct,
  $swal: Ie,
  $swalConfirm: xt,
  messageBox: _t,
  setInterval: mt,
  setTimeout: we,
  ...pt
}, Hn = function(t, i = {}) {
  Pe.init(i.useStore || i.store, t), i.locale && dl.use(i.locale), i.i18n && dl.i18n(i.i18n), i.router && Xa(i.router), i.amap && vn(i.amap), i.notRegistryGlobal || (Object.keys(ql).forEach((e) => {
    t.component(e) || t.component(e, ql[e]);
  }), Object.keys(Yl).forEach((e) => {
    t.config.globalProperties[e] = Yl[e];
  })), t.directive("has") || t.directive("has", (e, a) => {
    a.value && !dt(a.value) && (e.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", (e, a) => {
    let r;
    a.arg ? r = e.querySelector("." + a.arg) : r = e.querySelector(".ivu-select-dropdown") || e, r.addEventListener("scroll", function() {
      r.scrollTop > 0 && r.scrollHeight - r.scrollTop <= r.clientHeight && a.value();
    });
  }), t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.iconTxtBtnIconSize = 17;
}, Wn = dl.use, jn = dl.i18n, so = {
  locale: Wn,
  i18n: jn,
  install: Hn,
  ...pt,
  ...Ba,
  $fetch: Pe,
  fullScreenImgByDom: $e,
  fullScreenImgPreview: Ct,
  $swal: Ie,
  $swalConfirm: xt,
  messageBox: _t,
  setInterval: mt,
  setTimeout: we
};
export {
  Pe as $fetch,
  Ie as $swal,
  xt as $swalConfirm,
  wt as AlCascaderMC,
  bt as AsyncCascader,
  fn as BtTablePage,
  zn as CheckboxTree,
  At as EditorPro,
  Dn as FormGroup,
  Gn as FormModal,
  yl as FormR,
  ma as FullPop,
  tt as HeaderBt,
  ha as Hello,
  va as IconTxtBtn,
  gt as InputMap,
  Vt as MonthRange,
  Va as Page404,
  $n as SearchForm,
  ht as SelectInput,
  qa as ShowHidePanel,
  Ja as ShowHidePanelB,
  Ga as SideMenu,
  Ha as TableIconBtn,
  Za as TableSearch,
  ln as TableSetting,
  kt as UploadGroup,
  Al as clearObj,
  Ka as dataFilterOrToUrl,
  Oa as decimalDigitsLimit,
  so as default,
  rt as downloadFileByFormSubmit,
  nt as downloadFileReaderFile,
  _a as emptyInput,
  ot as fakeALinkClick,
  La as fileExport,
  He as findCollection,
  cl as findPath,
  Ia as formDataHeadConfig,
  $e as fullScreenImgByDom,
  Ct as fullScreenImgPreview,
  Ma as getColumnsKeys,
  il as getFileSrc,
  Il as getFileTypeByName,
  Vl as getFileTypeIconByName,
  it as getStringWidth,
  dt as hasPermission,
  Ca as htmlDecode,
  Aa as htmlEncode,
  Ra as htmlPrint,
  Ua as isEmptyValue,
  sl as isImgByFile,
  ct as isNaN,
  Fa as isNumberValue,
  de as isValidValue,
  _t as messageBox,
  K as myTypeof,
  Ta as oneOf,
  Cl as removeEmptyValue,
  mt as setInterval,
  we as setTimeout,
  We as setValByOption,
  ft as siblingElems,
  xa as stopBubbling,
  Pa as stringLength,
  Sa as toFormData,
  at as toHump,
  st as toLine,
  ut as tooltipManual,
  fl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
