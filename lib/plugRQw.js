var Gt = Object.defineProperty;
var Ht = (t, u, o) => u in t ? Gt(t, u, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[u] = o;
var ll = (t, u, o) => (Ht(t, typeof u != "symbol" ? u + "" : u, o), o);
import { getCurrentInstance as hl, defineComponent as de, resolveComponent as q, openBlock as L, createElementBlock as K, normalizeClass as Se, normalizeStyle as le, createBlock as X, createCommentVNode as ue, renderSlot as Te, ref as W, computed as D, withDirectives as fe, unref as p, createElementVNode as M, toDisplayString as E, createVNode as j, withCtx as Y, createTextVNode as he, vShow as me, resolveDirective as $l, h as Ce, Fragment as ye, renderList as we, onBeforeMount as Wt, watch as ke, nextTick as Pe, isRef as Ie, onMounted as De, withModifiers as _l, mergeProps as Ze, onUnmounted as jt, shallowRef as ul, triggerRef as Jt, onBeforeUnmount as qt, createSlots as Qe } from "vue";
import Yt from "deepmerge";
import { isObject as Xt, isFunction as Qt, isPlainObject as Ye, cloneDeep as ie, isEmpty as xe, isBoolean as Zt, isNumber as Xe, debounce as ct, isString as Kl, last as dl, isEqual as nl, first as Vl, find as Cl, indexOf as Xl, findIndex as ft, remove as ea } from "lodash-es";
import il from "sweetalert";
import { Tooltip as la, Modal as ze, Button as bl, TableColumnConfig as ta, Radio as aa, Input as na, Message as Ql, Icon as oa } from "view-ui-plus";
import { useRouter as ia, useRoute as pt } from "vue-router";
import Al from "axios";
import sa from "ar-cascader";
import { Toolbar as ra, Editor as ua } from "@wangeditor/editor-for-vue";
import tl from "moment";
import { Boot as da } from "@wangeditor/editor";
import ca from "vue-json-viewer";
const mt = {
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
    page: "条/页"
  }
}, fa = /(%|){([0-9a-zA-Z_]+)}/g;
function pa() {
  function t(o, e) {
    return Object.prototype.hasOwnProperty.call(o, e);
  }
  function u(o, ...e) {
    let n;
    return e.length === 1 && typeof e[0] == "object" && (n = e[0]), (!n || !n.hasOwnProperty) && (n = {}), o === void 0 ? "" : o.replace(fa, (a, s, c, f) => {
      let b;
      return o[f - 1] === "{" && o[f + a.length] === "}" ? c : (b = t(n, c) ? n[c] : null, b ?? "");
    });
  }
  return u;
}
const ma = pa();
let cl = mt;
const ha = {
  zh: mt
};
let Zl, et = {}, Le, ya = function(t, u) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, u);
  if (Le && Le.global)
    return Le.global.t(t, u);
  if (Le && Le.locale) {
    if (!et[Le.locale] || Zl != Le.locale) {
      et[Le.locale] = !0;
      let o = Le.getLocaleMessage(Le.locale) || {}, e = Yt(ha[Le.locale], o, { clone: !0 });
      cl = e, Le.setLocaleMessage(Le.locale, e), Zl = Le.locale;
    }
    return Le.hlang(t, u);
  }
};
const Ne = function(t, u) {
  let o = ya.apply(this, [t, u]);
  if (o != null)
    return o;
  const e = t.split(".");
  let n = cl;
  for (let a = 0, s = e.length; a < s; a++) {
    const c = e[a];
    if (o = n[c], a === s - 1)
      return ma(o, u);
    if (!o)
      return "";
    n = o;
  }
  return "";
}, va = function(t) {
  cl = t || cl;
}, ga = function(t) {
  Le = t;
}, fl = {
  use: va,
  t: Ne,
  i18n: ga
};
function I(t, u) {
  var e, n, a;
  const o = (a = (n = (e = hl()) == null ? void 0 : e.appContext) == null ? void 0 : n.config) == null ? void 0 : a.globalProperties;
  return Ne.apply(o, [t, u]);
}
const ht = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = t, e = u;
    function n() {
      o.disabled || e("click");
    }
    return (a, s) => {
      const c = q("Icon");
      return L(), K("div", {
        class: Se({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: le({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: n
      }, [
        o.icon ? (L(), X(c, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : ue("", !0),
        Te(a.$slots, "default")
      ], 6);
    };
  }
}), ba = { class: "headerTxtAM" }, ka = { class: "contentAM" }, wa = /* @__PURE__ */ de({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: u, emit: o }) {
    const e = t, n = o;
    let a = W(!1);
    const s = D(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = D(() => ({ zIndex: e.zIndex }));
    function f() {
      a.value = !0, n("on-open");
    }
    function b(d) {
      a.value = !1, n("on-close", d === !0);
    }
    return u({
      open: f,
      close: b
    }), (d, i) => fe((L(), K("div", {
      class: "fullScreenPopBoxAM",
      style: le(p(c))
    }, [
      M("div", {
        class: "headerAM",
        style: le({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(s) })
      }, [
        M("span", ba, E(d.title || p(I)("r.title")), 1),
        j(ht, {
          icon: "md-return-left",
          onClick: b
        }, {
          default: Y(() => [
            he(E(p(I)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      M("div", ka, [
        Te(d.$slots, "default")
      ])
    ], 4)), [
      [me, p(a)]
    ]);
  }
}), _a = { class: "msg" }, Va = /* @__PURE__ */ de({
  __name: "Hello",
  setup(t) {
    let u = W("Greetings from Ricky.");
    return (o, e) => (L(), K("span", _a, E(p(u)), 1));
  }
});
function Ke() {
  const { appContext: t } = hl();
  return t.config.globalProperties;
}
const Bl = /* @__PURE__ */ de({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Ke().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const o = t, e = u, n = D(() => Math.floor(o.size / 17 * 12) + "px");
    function a(s) {
      o.disabled || e("click", s);
    }
    return (s, c) => {
      const f = q("Icon"), b = $l("has");
      return fe((L(), K("div", {
        class: Se(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: a,
        style: le({ "font-size": p(n) })
      }, [
        j(f, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        he(" " + E(o.name || p(I)("r.button")), 1)
      ], 6)), [
        [b, s.has]
      ]);
    };
  }
}), Ca = { class: "c404K" }, Aa = /* @__PURE__ */ M("div", { class: "t404" }, "404", -1), Ba = { class: "ct404" }, Sa = { class: "p404" }, xa = /* @__PURE__ */ de({
  __name: "Page404",
  setup(t) {
    const o = hl().appContext.config.globalProperties.$router;
    function e() {
      o.go(-1);
    }
    return (n, a) => {
      const s = q("Button");
      return L(), K("div", Ca, [
        Aa,
        M("div", Ba, "UH OH! " + E(p(I)("r.pageNotFound")), 1),
        M("div", Sa, E(p(I)("r.notFoundMsg")), 1),
        j(s, {
          class: "bt404",
          onClick: e
        }, {
          default: Y(() => [
            he(E(p(I)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Me(t, u, o) {
  const e = (...n) => Ne.apply(this, n);
  return new Promise((n, a) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let s = e("r.confirm"), c = e("r.cancel"), f = !1, b = "swalConfirmBt", d = "swalCancelBt";
      const i = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let v = "";
      t.text && i.test(z(t.text)) ? v = "content" : t.text && z(t.text) === "String" && (v = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (c = t.buttons.cancel.text) && (f = !0), t.buttons.cancel.className && (d = t.buttons.cancel.className), t.buttons.confirm.text && (s = t.buttons.confirm.text), t.buttons.confirm.className && (b = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (c = t.buttons[0], f = !0), t.buttons[1] && (s = t.buttons[1]))), il({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [v]: t.text,
        buttons: {
          confirm: {
            text: s,
            value: !0,
            visible: !0,
            className: b
          },
          cancel: {
            text: c,
            value: null,
            visible: f,
            className: d
          }
        }
      }).then((g) => {
        g && typeof t.onOk == "function" && t.onOk(), n(g);
      }).catch((g) => {
        a(g);
      });
    } else if (typeof t == "string") {
      let s = "";
      if (u)
        switch (typeof u) {
          case "string":
            s = "text";
            break;
          case "object":
            s = "content";
            break;
        }
      il({
        title: t,
        [s]: u || "",
        icon: o || "",
        className: "swalBoxX",
        buttons: {
          confirm: {
            text: e("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((c) => {
        n(c);
      }).catch((c) => {
        a(c);
      });
    } else if (typeof t == "boolean")
      !t && il.close && il.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Ta(t) {
  return t.replace(/_(\w)/g, function(u, o) {
    return o.toUpperCase();
  });
}
function ki(t) {
  let u = document.createElement("div");
  return u.textContent !== void 0 ? u.textContent = t : u.innerText = t, u.innerHTML;
}
function wi(t) {
  let u = document.createElement("div");
  return u.innerHTML = t, u.innerText || u.textContent;
}
function kl(t) {
  return new Promise((u) => {
    let o = new FileReader();
    o.readAsDataURL(t), o.onloadend = () => {
      u(o.result);
    };
  });
}
function yt(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function wl(t) {
  return z(t) === "String" && t.indexOf("image") > -1;
}
function lt(t) {
  const u = yt(t);
  let o = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(u) > -1 ? o = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(u) > -1 ? o = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(u) > -1 ? o = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(u) > -1 ? o = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(u) > -1 ? o = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(u) > -1 && (o = "ios-videocam"), o;
}
function La(t, u) {
  let o = document.createElement("a");
  o.href = u, o.download = t, Ia(o);
}
function Ia(t) {
  let u = document.createEvent("MouseEvents");
  u.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(u);
}
function Sl({
  group: t,
  condition: u,
  pathKey: o,
  childKey: e = "children",
  path: n = []
}) {
  if (t && Xt(t)) {
    if (Qt(u)) {
      if (Ye(t)) {
        let a = t, s = ie(n);
        if (u(a))
          return o && a[o] && s.push(a[o]), s;
        if (a[e] && !xe(a[e])) {
          o && a[o] && s.push(a[o]);
          let c = Sl({
            group: a[e],
            condition: u,
            pathKey: o,
            childKey: e,
            path: s
          });
          if (!xe(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let a of t) {
          let s = ie(n);
          if (u(a))
            return o && a[o] ? s.push(a[o]) : s.push(String(t.indexOf(a))), s;
          if (a[e] && a[e].length > 0) {
            o && a[o] ? s.push(a[o]) : s.push(String(t.indexOf(a)));
            let c = Sl({
              group: a[e],
              condition: u,
              pathKey: o,
              childKey: e,
              path: s
            });
            if (!xe(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let a of t) {
        let s = ie(n);
        if (a === u)
          return s.push(String(t.indexOf(a))), s;
      }
  }
  return [];
}
function Oa(t, u = 12) {
  if (z(t) === "String" && t.length > 0) {
    let o = document.createElement("span");
    o.style.fontSize = u + "px", o.style.fontFamily = "inherit", o.innerHTML = t, o.style.opacity = "0", o.style.position = "fixed", o.style.top = "3000px", document.body.append(o);
    const e = o.clientWidth;
    return document.body.removeChild(o), e;
  }
  return 0;
}
function _i(t) {
  return t === "" ? null : t;
}
function Vi(t) {
  var u;
  t = t || window.Event, t != null && t.stopPropagation ? (u = t.stopPropagation) == null || u.call(t) : t && (t.cancelBubble = !0);
}
function z(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function vt(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function pl(t) {
  let u = z(t);
  if (u === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = z(t[o]);
        e === "String" ? t[o] = t[o].trim() : (e === "Object" || e === "Array") && pl(t[o]);
      }
  } else if (u === "Array")
    for (let o = 0, e = t.length; o < e; o++) {
      let n = z(t[o]);
      n === "String" ? t[o] = t[o].trim() : (n === "Array" || n === "Object") && pl(t[o]);
    }
  return t;
}
function xl(t, u = []) {
  if (z(t) === "Array")
    return t.forEach((o, e) => {
      switch (z(o)) {
        case "Array":
        case "Object":
          xl(o);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (z(t) === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = !0;
        for (let n of u)
          if (n === o) {
            e = !1;
            break;
          }
        if (e)
          switch (z(t[o])) {
            case "Array":
            case "Object":
              xl(t[o]);
              break;
            default:
              t[o] = null;
          }
      }
    return t;
  } else
    return t;
}
const Ma = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Pa(t) {
  let u = new FormData();
  for (let o in t)
    t.hasOwnProperty(o) && t[o] !== null && u.append(o, t[o]);
  return u;
}
function je(t, u, o = !1) {
  if (!t || !u)
    return !1;
  let e, n = "notFoundC", a = function(s, c) {
    if (Array.isArray(s)) {
      if (z(c) === "Function" && c(s))
        return n = s, [];
      for (let f of s) {
        if (n !== "notFoundC")
          break;
        if (z(c) === "Function" && c(f) || f === c)
          return n = f, [s.indexOf(f)];
        if (z(f) === "Array" || z(f) === "Object") {
          let b = a(f, c);
          if (b !== void 0)
            return [s.indexOf(f), ...b];
        }
      }
    } else if (z(s) === "Object") {
      if (z(c) === "Function" && c(s))
        return n = s, [];
      for (let f in s) {
        if (n !== "notFoundC")
          break;
        if (s.hasOwnProperty(f)) {
          if (z(c) === "Function" && c(f) || s[f] === c)
            return n = s[f], [f];
          if (z(s[f]) === "Object" || z(s[f]) === "Array") {
            let b = a(s[f], c);
            if (b !== void 0)
              return [f, ...b];
          }
        }
      }
    }
  };
  return e = a(t, u), o ? e || !1 : n === "notFoundC" ? !1 : n;
}
function Fa(t, u) {
  for (let o = 0, e = u.length; o < e; o++)
    if (t === u[o])
      return !0;
  return !1;
}
function Ua(t, u = 2) {
  let o = new RegExp(`(^-?\\d+\\.\\d{${u}})(\\d+$)`), e = t && String(t) || "";
  return o.test(e) ? Number(e.replace(o, "$1")) : t;
}
function gt(t, u = {}, o = "get") {
  let e = document.createElement("form"), n = document.getElementsByTagName("body")[0];
  n.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", o);
  let a = t;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((c) => {
      var f;
      return ((f = c == null ? void 0 : c.indexOf) == null ? void 0 : f.call(c, "URL")) > -1;
    }).map((c) => {
      var f;
      return (f = c.replace) == null ? void 0 : f.call(c, "URL", "");
    });
    for (let c of s) {
      let f = new RegExp("^/" + c + "(?=/.*$)", "i");
      if (f.test(t) && window.g[c + "URL"]) {
        a = window.g[c + "URL"] + t.replace(f, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", a), Ye(u)) {
    for (let c in u)
      if (u.hasOwnProperty(c) && (u[c] || u[c] === 0 || u[c] === !1 || u[c] === "")) {
        let f = document.createElement("input");
        f.setAttribute("type", "hidden"), f.setAttribute("name", c), f.setAttribute("value", u[c]), e.appendChild(f);
      }
    e.submit();
    let s = setTimeout(() => {
      n.removeChild(e), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function $a(t, u = {}, o = "get") {
  if (u.hasOwnProperty("columns") && (u.columns === "" || u.columns === null || u.columns === void 0)) {
    Me.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  gt(t, u, o);
}
function Ka(t, u, o = !1) {
  let e;
  if (t && z(u) === "Array") {
    let n = localStorage.getItem(t);
    if (n) {
      let a = JSON.parse(decodeURI(n));
      e = u.filter((s) => {
        var c;
        return (s == null ? void 0 : s.key) && ((c = a == null ? void 0 : a.indexOf) == null ? void 0 : c.call(a, s.title)) !== -1;
      }).map((s) => s.key);
    } else
      e = u.map((a) => a == null ? void 0 : a.key);
  } else
    e = [];
  return o || (e = String(e)), e;
}
function Ve(t) {
  return t != null && t !== "";
}
function Ra(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function bt(t, u = !1, o = "") {
  return function(e, n) {
    var f, b;
    let a;
    if (Array.isArray(t)) {
      let d = [];
      for (let i of t)
        Ve((f = n.row) == null ? void 0 : f[i]) && d.push(n.row[i]);
      a = d.join(o);
    } else
      typeof t == "function" ? a = t(n) : a = (b = n.row) == null ? void 0 : b[t];
    let s = Oa(a), c = n.column._width;
    return a && s > c ? Ce(
      la,
      {
        style: {
          width: "100%"
        },
        content: a,
        maxWidth: c * 2
      },
      () => Ce(
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
    ) : Ce("span", u && !Ve(a) ? "--" : a);
  };
}
function Da(t) {
  if (Ye(t)) {
    for (let u in t)
      if (t.hasOwnProperty(u) && Ve(t[u]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let u of t)
      if (Ve(u))
        return !1;
    return !0;
  }
  return !Ve(t);
}
function Na(t) {
  return z(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : z(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function qe({
  group: t,
  condition: u,
  key: o,
  val: e,
  childKey: n = "children"
}) {
  if (z(t) !== "Array" || z(u) !== "Function" || z(o) !== "String" || z(n) !== "String")
    return !1;
  t.forEach((a) => {
    u(a) && (z(e) === "Function" ? a[o] = e(a[o]) : a[o] = e), z(a[n]) === "Array" && a[n].length > 0 && qe({
      group: a[n],
      condition: u,
      key: o,
      val: e,
      childKey: n
    });
  });
}
function kt(t) {
  let u = sessionStorage.getItem("btnPermissions");
  return u ? u.split(",").indexOf(t) > -1 : !1;
}
function wt(t) {
  return z(t) === "Number" && String(t) === "NaN";
}
function Ea(t, u = !1, o = !1) {
  if (z(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), n = "";
  for (let a in e)
    if (e.hasOwnProperty(a)) {
      let s = e[a];
      s === void 0 || s === "" || z(s) === "String" && s.trim() === "" || s === null || wt(s) ? o ? u ? n += a + "=&" : e[a] = "" : delete e[a] : u && (n += a + "=" + s + "&");
    }
  return u ? n.length > 0 ? n.substring(0, n.length - 1) : "" : e;
}
function Tl(t) {
  let u = {};
  if (Array.isArray(t)) {
    u = [];
    for (let o of t)
      Array.isArray(o) || Ye(o) ? u.push(Tl(o)) : Ve(o) && u.push(o);
  } else if (Ye(t))
    for (let o in t)
      t.hasOwnProperty(o) && (Array.isArray(t[o]) || Ye(t[o]) ? u[o] = Tl(t[o]) : Ve(t[o]) && (u[o] = t[o]));
  return u;
}
function za(t) {
  const u = window.open();
  if (u) {
    u.document.write(t);
    let o = setTimeout(() => {
      u.print(), window.clearTimeout(o), o = null;
    }, 10);
  }
}
function _t(t) {
  let u = [], o = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && u.push(t);
  for (; o.nextSibling && (o = o.nextSibling); )
    o.nodeType === 1 && u.push(o);
  return u;
}
const Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: xl,
  dataFilterOrToUrl: Ea,
  decimalDigitsLimit: Ua,
  downloadFileByFormSubmit: gt,
  fileExport: $a,
  findCollection: je,
  formDataHeadConfig: Ma,
  getColumnsKeys: Ka,
  hasPermission: kt,
  htmlPrint: za,
  isEmptyValue: Da,
  isNaN: wt,
  isNumberValue: Ra,
  isValidValue: Ve,
  myTypeof: z,
  oneOf: Fa,
  removeEmptyValue: Tl,
  setValByOption: qe,
  siblingElems: _t,
  stringLength: Na,
  toFormData: Pa,
  toLine: vt,
  tooltipManual: bt,
  trimObj: pl
}, Symbol.toStringTag, { value: "Module" })), Ha = { class: "groupBoxRP" }, Wa = ["onClick"], ja = /* @__PURE__ */ de({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const u = ia(), o = t;
    function e(a) {
      return (a == null ? void 0 : a.path) === o.pathName ? "active" : "";
    }
    function n(a, s) {
      var d, i, v, g, A, y, k, w;
      (d = a == null ? void 0 : a.preventDefault) == null || d.call(a);
      let c = a == null ? void 0 : a.target;
      if (s && !s.children && !c.classList.contains("active")) {
        u.push(s.path);
        return;
      }
      let f = c.parentNode, b = _t(f);
      for (let V of b) {
        (v = (i = V == null ? void 0 : V.classList) == null ? void 0 : i.remove) == null || v.call(i, "open");
        const C = (g = V == null ? void 0 : V.querySelectorAll) == null ? void 0 : g.call(V, ".open");
        if (C && Array.isArray(C))
          for (let x of C)
            (y = (A = x == null ? void 0 : x.classList) == null ? void 0 : A.remove) == null || y.call(A, "open");
      }
      (w = (k = f == null ? void 0 : f.classList) == null ? void 0 : k.toggle) == null || w.call(k, "open");
    }
    return (a, s) => {
      const c = q("sideMenuGroup", !0);
      return L(), K("ul", Ha, [
        (L(!0), K(ye, null, we(o.data, (f, b) => (L(), K(ye, {
          key: (f == null ? void 0 : f.path) + b
        }, [
          f ? (L(), K("li", {
            key: 0,
            class: Se({ dropItemRP: f.children })
          }, [
            M("div", {
              class: Se(["menuTxtR", e(f)]),
              onClick: (d) => n(d, f),
              style: le({ paddingLeft: f.level * 20 + "px" })
            }, E(f.name || "-- no name --"), 15, Wa),
            f.children ? (L(), X(c, {
              key: 0,
              data: f.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])) : ue("", !0)
          ], 2)) : ue("", !0)
        ], 64))), 128))
      ]);
    };
  }
}), Ja = { class: "menuListR" }, qa = /* @__PURE__ */ de({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: u }) {
    const o = t, e = u, n = pt(), a = W(!0), s = W(), c = W(), f = D(() => a.value ? I("r.hideMenu") : I("r.showMenu")), b = D(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    Wt(() => {
      let v = localStorage.getItem("menuDisplayR") || "";
      v !== "" ? a.value = JSON.parse(v) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), ke(
      () => n.path,
      (v) => {
        s.value = v, Pe(i);
      },
      { immediate: !0 }
    );
    function d() {
      a.value = !a.value, localStorage.setItem("menuDisplayR", JSON.stringify(a.value)), e("on-change", a.value);
    }
    function i() {
      var g, A, y, k, w;
      let v = c.value.querySelectorAll(".dropItemRP");
      for (let V of v)
        (g = V == null ? void 0 : V.querySelector) != null && g.call(V, ".active") && !((y = (A = V.classList) == null ? void 0 : A.contains) != null && y.call(A, "open")) && ((w = (k = V.classList) == null ? void 0 : k.add) == null || w.call(k, "open"));
    }
    return (v, g) => {
      const A = q("Icon");
      return L(), K("div", {
        ref_key: "menuRef",
        ref: c,
        class: "menuBoxRP"
      }, [
        fe(M("div", Ja, [
          j(ja, {
            data: o.data,
            pathName: p(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [me, p(a)]
        ]),
        j(A, {
          type: p(b),
          size: 25,
          class: Se([{ showIco: !p(a) }, "menuShowHideIco"]),
          title: p(f),
          onClick: d,
          color: p(a) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Ya = ["title"], Vt = /* @__PURE__ */ de({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const o = u, e = t;
    function n(a) {
      e.disabled || o("click", a);
    }
    return (a, s) => {
      const c = q("Icon"), f = $l("has");
      return fe((L(), K("div", {
        class: Se(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || p(I)("r.button")
      }, [
        j(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Ya)), [
        [f, e.has]
      ]);
    };
  }
}), Xa = { class: "contentX" }, Qa = { class: "arrowA" }, Ll = /* @__PURE__ */ de({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(t) {
    const u = t, o = W(!0), e = D(() => o ? "background:" + u.bg || "transparent" : "");
    return (n, a) => {
      const s = q("Icon");
      return L(), K("div", {
        style: le(p(e))
      }, [
        fe(M("div", Xa, [
          Te(n.$slots, "default")
        ], 512), [
          [me, p(o)]
        ]),
        M("div", Qa, [
          M("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (c) => o.value = !p(o))
          }, [
            j(s, {
              type: p(o) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Za = { class: "contentZ" }, en = /* @__PURE__ */ de({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: u }) {
    const o = t, e = u, n = D({
      get() {
        return o.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), a = D(() => n.value ? "background:" + o.bg : "");
    return (s, c) => (L(), K("div", {
      style: le(p(a))
    }, [
      fe(M("div", Za, [
        Te(s.$slots, "default")
      ], 512), [
        [me, p(n)]
      ])
    ], 4));
  }
});
let Il = [], Ol = [];
const ln = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    Il.map((u) => {
      window.clearTimeout(u);
    }), Ol.map((u) => {
      window.clearInterval(u);
    }), Il.length = 0, Ol.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Oe = function(t, u) {
  let o = window.setTimeout(t, u);
  return Il.push(o), o;
}, tn = function(t, u) {
  let o = window.setInterval(t, u);
  return Ol.push(o), o;
}, an = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t;
    let n = !1;
    const a = D({
      get() {
        return e.modelValue;
      },
      set(b) {
        o("update:modelValue", b);
      }
    }), s = D({
      get() {
        return e.open;
      },
      set(b) {
        o("on-toggle", b);
      }
    }), c = D(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function f() {
      n || (n = !0, o("on-search", a.value), Oe(() => {
        n = !1;
      }, 2e3));
    }
    return (b, d) => {
      const i = q("Input"), v = q("icon");
      return L(), K("div", {
        class: "tableSearchV",
        style: le({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Te(b.$slots, "default", {}, () => [
          j(i, {
            modelValue: p(a),
            "onUpdate:modelValue": d[0] || (d[0] = (g) => Ie(a) ? a.value = g : null),
            style: le({ width: e.width }),
            search: "",
            onOnSearch: f,
            class: "searchInputC",
            placeholder: e.placeholder || p(I)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        fe(M("span", {
          class: "sbt",
          onClick: d[1] || (d[1] = (g) => s.value = !p(s)),
          style: le({ color: e.btnColor })
        }, [
          j(v, {
            type: p(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          he(E(p(I)("r.adSearch")), 1)
        ], 4), [
          [me, e.showBtn]
        ])
      ], 4);
    };
  }
}), nn = { class: "tabSetF" }, on = { class: "topCheck" }, Ct = /* @__PURE__ */ de({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    top: { default: "30px" },
    right: { default: "0" },
    width: { default: "150px" },
    bg: { default: () => Ke().tableSettingBg },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: u }) {
    var k, w, V, C, x;
    const o = u, e = t, n = W(!0), a = W(!1), s = W(!1), c = W([]), f = D(() => {
      var S;
      let O = I("r.unknown");
      return ((S = e.modelValue) == null ? void 0 : S.length) > c.value.length && (c.value = ie(e.modelValue)), c.value.map((B) => {
        let m = { label: (B == null ? void 0 : B.title) || O };
        return B != null && B.disableShowSetting && (m.disabled = !0), m;
      });
    }), b = D(() => f.value.filter((O) => O == null ? void 0 : O.disabled)), d = D({
      get() {
        var O, S;
        return (S = (O = e.modelValue) == null ? void 0 : O.map) == null ? void 0 : S.call(O, (B) => (B == null ? void 0 : B.title) || I("r.unknown"));
      },
      set(O) {
        let S = c.value.filter((B) => {
          for (let m of O)
            if (m === (B == null ? void 0 : B.title))
              return !0;
          return !1;
        });
        o("update:modelValue", S);
      }
    }), i = (x = (C = (V = (w = (k = hl()) == null ? void 0 : k.appContext) == null ? void 0 : w.config) == null ? void 0 : V.globalProperties) == null ? void 0 : C.$i18n) == null ? void 0 : x.locale;
    De(() => {
      let O = I("r.unknown"), S;
      i ? S = window[e.storage].getItem(e.sKey + "_" + i) : S = window[e.storage].getItem(e.sKey), S ? d.value = JSON.parse(decodeURI(S)) : e.defaultCheck && (d.value = e.modelValue.filter((B) => B == null ? void 0 : B.showSettingCheck).map((B) => (B == null ? void 0 : B.title) || O));
    });
    function v(O) {
      O.length === f.value.length ? (n.value = !1, a.value = !0) : O.length > b.value.length ? (n.value = !0, a.value = !1) : (n.value = !1, a.value = !1);
    }
    ke(() => d.value, v, {
      immediate: !0,
      deep: !0
    });
    function g() {
      s.value || (s.value = !0);
    }
    function A() {
      i ? window[e.storage].setItem(e.sKey + "_" + i, encodeURI(JSON.stringify(d.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(d.value))), s.value = !1;
    }
    function y() {
      n.value ? a.value = !1 : a.value = !a.value, n.value = !1, a.value ? d.value = f.value.map((O) => O == null ? void 0 : O.label) : d.value = b.value.map((O) => O == null ? void 0 : O.label);
    }
    return (O, S) => {
      const B = q("Icon"), m = q("Checkbox"), P = q("CheckboxGroup");
      return L(), K("div", nn, [
        M("div", {
          class: "tabSetBt",
          onClick: g
        }, [
          j(B, {
            type: "md-settings",
            size: "17"
          }),
          M("span", null, E(p(I)("r.tabSetting")), 1)
        ]),
        fe(M("div", {
          class: "tabSetCard",
          style: le({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          M("div", on, [
            j(m, {
              indeterminate: p(n),
              modelValue: p(a),
              "onUpdate:modelValue": S[0] || (S[0] = (h) => Ie(a) ? a.value = h : null),
              onClick: _l(y, ["prevent"])
            }, {
              default: Y(() => [
                he(E(p(I)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue"]),
            M("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: A
            }, E(p(I)("r.confirm")), 1)
          ]),
          j(P, {
            modelValue: p(d),
            "onUpdate:modelValue": S[1] || (S[1] = (h) => Ie(d) ? d.value = h : null)
          }, {
            default: Y(() => [
              (L(!0), K(ye, null, we(p(f), (h, U) => (L(), X(m, {
                class: "setItem",
                label: h && h.label,
                key: "tabSet_" + e.sKey + U,
                disabled: h && h.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [me, p(s)]
        ])
      ]);
    };
  }
});
let al = !1;
function Ml({
  height: t,
  width: u = 416,
  title: o,
  content: e,
  onOk: n,
  onCancel: a,
  onClose: s,
  okText: c,
  cancelText: f,
  noWarnIcon: b,
  footerAlign: d,
  cancelBt: i = !0
}) {
  const v = (...k) => Ne.apply(this, k);
  let A = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", y = z(e) === "String";
  ze.warning({
    width: u,
    footerHide: !0,
    render: () => Ce(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: A
        }
      },
      [
        Ce(
          "div",
          {
            class: "containerN"
          },
          [
            Ce(
              "div",
              {
                class: "titleN"
              },
              [
                Ce("span", o || v("r.info.title")),
                Ce(
                  bl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      al || (ze.remove(), s && z(s) === "Function" && s());
                    }
                  },
                  () => Ce("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Ce(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: y ? "center" : "left"
                }
              },
              [
                Ce("i", {
                  class: y && !b ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ce("div", { class: "msgBoxConO" }, e || v("r.info.text"))
              ]
            ),
            Ce(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: d || "center"
                }
              },
              [
                Ce(
                  bl,
                  {
                    class: "okBtN",
                    onClick(k) {
                      var w, V, C, x, O, S, B, m, P;
                      if (n && typeof n == "function") {
                        const h = n();
                        if (h && z(h) === "Promise") {
                          al = !0;
                          const U = (k == null ? void 0 : k.currentTarget) || (k == null ? void 0 : k.target);
                          U && ((V = (w = U.classList) == null ? void 0 : w.add) == null || V.call(w, "ivu-btn-loading"), (x = (C = U.nextSibling) == null ? void 0 : C.setAttribute) == null || x.call(C, "disabled", "disabled"), (P = (m = ((B = (S = (O = U.parentElement) == null ? void 0 : O.parentElement) == null ? void 0 : S.querySelector) == null ? void 0 : B.call(S, ".titleN .closeN")).classList) == null ? void 0 : m.add) == null || P.call(m, "disabled")), Promise.resolve(h).then(() => {
                            al = !1, ze.remove();
                          }).catch(() => {
                            al = !1, ze.remove();
                          });
                        } else
                          ze.remove();
                      }
                    }
                  },
                  () => [
                    Ce("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Ce("span", c || v("r.confirm"))
                  ]
                ),
                Ce(
                  bl,
                  {
                    class: ["cancelBtN", !i && "hide"],
                    onClick() {
                      al || (ze.remove(), z(a) === "Function" && a && a());
                    }
                  },
                  () => f || v("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let We = 0, ol = document.createElement("div");
ol.setAttribute("class", "spinModal");
ol.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ol);
};
function tt(t) {
  t ? ol.classList.add("show") : ol.classList.remove("show");
}
function At(t) {
  let u = We;
  t ? We++ : We > 0 && We--, u !== We && (We === 0 ? tt(!1) : u === 0 && tt(!0));
}
const sn = window.location.origin;
let ml = null;
const at = (...t) => Ne.apply(ml, t);
let Fe = Al.create({
  baseURL: sn,
  withCredentials: !0
  // 允许携带cookie
});
function rn() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Fe.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function nt() {
  var t, u;
  if (Fe.store)
    if (typeof Fe.store == "function") {
      const o = Fe.store();
      o.logout && o.logout();
    } else
      (u = (t = Fe.store) == null ? void 0 : t.dispatch) == null || u.call(t, "logout");
  else
    rn();
}
Fe.interceptors.response.use(
  (t) => {
    var u, o;
    return ml && (((u = t == null ? void 0 : t.data) == null ? void 0 : u.code) === 403 || ((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 409) && Ml({
      content: at("r.http." + t.data.code),
      onOk: nt
    }), t;
  },
  (t) => {
    var u, o;
    return ml && (((u = t == null ? void 0 : t.response) == null ? void 0 : u.status) === 403 || ((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 409) && Ml({
      content: at("r.http." + t.response.status),
      onOk: nt
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ee(t, u, o, e) {
  e && e.spin && At(!1);
  let n = !0, a = t && t.data;
  if (a) {
    o = o || [];
    for (let s of o)
      a = a[s], n = n && a;
    return n ? a : (u && console.warn(u), !1);
  }
  return u && console.warn(u), !1;
}
function un(t, u, o, e, n, a, s) {
  return new Promise((c, f) => {
    switch (t) {
      case "get":
        Fe.get(u, { params: o }).then((d) => {
          let i = Ee(d, e, n, a);
          i ? c(i) : f(d);
        }).catch((d) => {
          Ee({}, e, n, a), f(d);
        });
        break;
      case "delete":
        let b = s ? "params" : "data";
        Fe.delete(u, { [b]: o }).then((d) => {
          let i = Ee(d, e, n, a);
          i ? c(i) : f(d);
        }).catch((d) => {
          Ee({}, e, n, a), f(d);
        });
        break;
      case "post":
        Fe.post(u, o, a).then((d) => {
          let i = Ee(d, e, n, a);
          i ? c(i) : f(d);
        }).catch((d) => {
          Ee({}, e, n, a), f(d);
        });
        break;
      case "put":
        Fe.put(u, o, a).then((d) => {
          let i = Ee(d, e, n, a);
          i ? c(i) : f(d);
        }).catch((d) => {
          Ee({}, e, n, a), f(d);
        });
        break;
    }
  });
}
function sl(t, u, o = {}, e, n, a, s) {
  return new Promise((c, f) => {
    var b;
    if (u) {
      a && a.spin && At(!0);
      let d = u;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let A = Object.keys(g).filter((y) => {
          var k;
          return ((k = y == null ? void 0 : y.indexOf) == null ? void 0 : k.call(y, "URL")) > -1;
        }).map((y) => {
          var k;
          return (k = y.replace) == null ? void 0 : k.call(y, "URL", "");
        });
        for (let y of A) {
          let k = new RegExp("^/" + y + "(?=/.*$)", "i");
          if (k.test(u) && g[y + "URL"]) {
            d = g[y + "URL"] + u.replace(k, "");
            break;
          }
        }
      }
      let i;
      if (((b = a == null ? void 0 : a.headers) == null ? void 0 : b["Content-Type"]) === "multipart/form-data")
        i = o;
      else if (o && !xe(o))
        if (Array.isArray(o)) {
          i = [];
          for (let g of o)
            (g || g === 0 || g === !1 || g === "" && a && !a.noEmptyStr) && i.push(g);
        } else {
          i = {};
          for (let g in o)
            o.hasOwnProperty(g) && (o[g] || o[g] === 0 || o[g] === !1 || o[g] === "" && a && !a.noEmptyStr) && (i[g] = o[g]);
        }
      let v = t.toLowerCase();
      un(v, d, i, e, n, a, s).then((g) => {
        c(g);
      }).catch((g) => {
        f(g);
      });
    } else
      console.error("没有请求地址:url"), f("没有请求地址:url");
  });
}
const Re = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, u) {
    Fe.store = t, ml = u.config.globalProperties;
  },
  post(t, u, o, e, n) {
    return new Promise((a, s) => {
      sl("post", t, u, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  put(t, u, o, e, n) {
    return new Promise((a, s) => {
      sl("put", t, u, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  get(t, u, o, e, n) {
    return new Promise((a, s) => {
      sl("get", t, u, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  delete(t, u, o, e, n, a = !0) {
    return new Promise((s, c) => {
      sl("delete", t, u, o, e, n, a).then((f) => {
        s(f);
      }).catch((f) => {
        c(f);
      });
    });
  },
  all: Al.all,
  spread: Al.spread,
  config: Fe
}, dn = { class: "pageProSize" }, Bt = /* @__PURE__ */ de({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = Ke()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(t, { emit: u }) {
    const o = u, e = t, n = D({
      get() {
        return e.modelValue;
      },
      set(s) {
        o("update:modelValue", s), o("on-change", s);
      }
    }), a = D({
      get() {
        return e.pageSize;
      },
      set(s) {
        o("on-page-size-change", s), n.value !== 1 && (n.value = 1);
      }
    });
    return (s, c) => {
      const f = q("Page"), b = q("Option"), d = q("Select");
      return L(), K("div", {
        class: Se(["pagePro", { pageProDefault: e.size === "default" }])
      }, [
        j(f, {
          modelValue: p(n),
          "onUpdate:modelValue": c[0] || (c[0] = (i) => Ie(n) ? n.value = i : null),
          "page-size": p(a),
          total: e.total,
          size: e.size,
          "page-size-opts": e.pageSizeOpts,
          disabled: e.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        M("div", dn, [
          j(d, {
            modelValue: p(a),
            "onUpdate:modelValue": c[1] || (c[1] = (i) => Ie(a) ? a.value = i : null),
            size: e.size,
            transfer: e.transfer,
            disabled: e.disabled
          }, {
            default: Y(() => [
              (L(!0), K(ye, null, we(e.pageSizeOpts, (i) => (L(), X(b, {
                value: i,
                key: i
              }, {
                default: Y(() => [
                  he(E(i) + " " + E(p(I)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])
      ], 2);
    };
  }
}), cn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, fn = { class: "topBtn" }, pn = { class: "tableContainer growFlexItem" }, mn = { class: "fullHeight relativeBox" }, hn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, yn = { class: "pageContainer" }, vn = 300, Pl = /* @__PURE__ */ de({
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
    usePagePro: { type: Boolean, default: () => Ke().btTablePageUsePagePro },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: u, emit: o }) {
    const e = o;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...ta });
    const a = t, s = Ke().pageSizes || [10, 20, 50, 100], c = W(a.data), f = W(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), b = W(1), d = W(0);
    let i = [], v, g, A = a.orderKey, y = a.orderDefault;
    const k = D(() => {
      for (let R of a.columns)
        if (R != null && R.fixed)
          return !0;
      return !1;
    }), w = D(() => a.selectionFixed || k.value), V = D(() => {
      let R = {
        ...a.searchData,
        current: b.value,
        size: f.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? R[y] = vt(A) : a.orderKeyFormat === "camelcase" && (R[y] = Ta(A))), R;
    }), C = D(() => {
      let R = a.columns.filter(($) => ($ == null ? void 0 : $.type) !== "selection");
      if (a.selection || a.radio) {
        let $;
        a.radio ? $ = {
          title: " ",
          width: 65,
          render: (ve, _e) => Ce(aa, {
            value: _e.row.btChecked
          })
        } : $ = {
          type: "selection",
          width: 60
        }, a.selectionFixed && ($.fixed = a.selectionFixed), R.unshift($);
      }
      return R.forEach(($) => {
        $ && (a.sortable === "custom" ? $.key && $.sortable !== !0 && $.sortable !== !1 && ($.sortable = "custom") : $.sortable = !1, $.align || ($.align = "center"));
      }), a.tableEmptyTdHandle && R.forEach(($) => {
        $ != null && $.key && $.render === void 0 && ($.tooltip ? $.render = bt($.key, !0) : $.render = (ve, _e) => {
          let be = _e.row[$.key];
          return ve("span", be === "" || be === null || be === void 0 ? "--" : be);
        });
      }), R;
    }), x = D({
      get() {
        return c.value.map((R, $) => ({
          btKey: "bt-" + $,
          btChecked: !1,
          ...R
        }));
      },
      set(R) {
        c.value = R;
      }
    }), O = D(() => i.map((R) => R == null ? void 0 : R.id)), S = D(() => i.map((R) => R == null ? void 0 : R.btKey)), B = W();
    ke(() => a.searchData, m, { deep: !0 }), ke(
      () => a.orderDefault,
      (R) => {
        y = R;
      }
    ), ke(
      () => a.orderKey,
      (R) => {
        A = R;
      }
    );
    function m() {
      b.value = 1, ce();
    }
    function P() {
      a.initData && ce();
    }
    function h(R) {
      c.value.unshift(ie(R)), Oe(() => {
        var $, ve;
        (ve = ($ = B.value) == null ? void 0 : $.clickCurrentRow) == null || ve.call($, 0);
      }, 100);
    }
    function U(R, $, ve) {
      let _e = null;
      if (Zt($) && $ ? _e = g : Xe($) && (_e = $), _e !== null) {
        let be = c.value[_e];
        for (let oe in R)
          R.hasOwnProperty(oe) && (be[oe] = R[oe]);
        ve && Oe(() => {
          var oe, Ue;
          (Ue = (oe = B.value) == null ? void 0 : oe.clickCurrentRow) == null || Ue.call(oe, _e);
        }, 10);
      }
    }
    function F(R) {
      c.value.splice(R, 1), Oe(() => {
        var $, ve;
        (ve = ($ = B.value) == null ? void 0 : $.clickCurrentRow) == null || ve.call($, 0);
      }, 100);
    }
    function G(R, $) {
      var ve, _e;
      R.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((_e = (ve = B.value) == null ? void 0 : ve.toggleSelect) == null || _e.call(ve, $));
    }
    function Q(R, $) {
      v = $.btKey, g = Number($.btKey.split("-")[1]), a.radio && (c.value[g].btChecked = !0);
    }
    function ne(R) {
      if (a.radio)
        for (let $ of x.value)
          $ != null && $.btKey && $.btKey !== v && (c.value[Number($.btKey.split("-")[1])].btChecked = !1);
      i = R, e("on-selection-change", R);
    }
    function ge() {
      return ie(i);
    }
    function Ae() {
      ce();
    }
    function J(R) {
      f.value = R, localStorage.setItem("btPageSize", String(R)), b.value === 1 && ce();
    }
    function pe({ key: R, order: $ }) {
      y === "normal" ? (A = a.orderKey, y = a.orderDefault) : (A = R, y = $), b.value = 1, ae();
    }
    function se() {
      var R, $;
      if (a.radio) {
        if (S.value.length > 0 && x.value.length > 0) {
          let ve = S.value[0].split("-")[1];
          x.value[ve].btChecked = !1;
        }
      } else
        ($ = (R = B.value) == null ? void 0 : R.selectAll) == null || $.call(R, !1);
      i.length > 0 && (i = [], e("on-selection-change", [])), v = null, g = null;
    }
    function N() {
      c.value = [], se(), b.value = 1, d.value = 0;
    }
    function ae(R, $, ve) {
      return new Promise((_e) => {
        R && (y = R), $ && (A = $), a.url ? Re[a.method](a.url, V.value, "", [], { spin: a.getDataLoading }).then((be) => {
          var Ue, el;
          let oe;
          ve || se(), typeof a.dataHandler == "function" ? oe = a.dataHandler(be) : oe = be, oe.data ? (oe.data.records || oe.data.records === null ? c.value = oe.data.records || [] : oe.data.page ? (oe.data.page.records || oe.data.page.records === null) && (c.value = oe.data.page.records || []) : oe.data.data ? (oe.data.data.records || oe.data.data.records === null) && (c.value = oe.data.data.records || []) : c.value = oe.data, d.value = ((Ue = oe.data.page) == null ? void 0 : Ue.total) || ((el = oe.data.data) == null ? void 0 : el.total) || oe.data.total || oe.total || 0, d.value === 0 && b.value > 1 && c.value && c.value.length === 0 ? b.value = 1 : b.value > 1 && d.value <= (b.value - 1) * f.value && (b.value--, Pe(function() {
            ae(R, $);
          })), e("on-data-change", oe), _e(oe)) : (console.warn("请求返回数据有误，无法使用"), N(), e("on-data-change", oe));
        }).catch((be) => {
          se(), N(), e("on-data-change", be);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function ce(R, $, ve) {
      a.radio && (R || a.rowClickNum !== -1) ? ae($, ve, R).then(() => {
        c.value.length > 0 && Oe(() => {
          var _e, be, oe, Ue;
          R ? (be = (_e = B.value) == null ? void 0 : _e.clickCurrentRow) == null || be.call(_e, g || 0) : (Ue = (oe = B.value) == null ? void 0 : oe.clickCurrentRow) == null || Ue.call(oe, a.rowClickNum);
        }, 10);
      }) : ae();
    }
    return De(P), u({
      selectedIds: O,
      addRow: h,
      setRowData: U,
      deleteRow: F,
      getSelected: ge,
      clearSelect: se,
      clearTableData: N,
      getTableData: ae,
      getDataAndClickRow: ce
    }), (R, $) => {
      const ve = q("Table"), _e = q("Page");
      return L(), K("div", cn, [
        fe(M("div", fn, [
          Te(R.$slots, "tableSetting"),
          Te(R.$slots, "topMsg"),
          Te(R.$slots, "topBtnGroup")
        ], 512), [
          [me, a.showTopRow]
        ]),
        M("div", pn, [
          M("div", mn, [
            M("div", hn, [
              j(ve, Ze({
                ref_key: "tableRef",
                ref: B
              }, R.$attrs, {
                height: p(w) && vn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !p(w), lightHeadO: a.lightHead },
                columns: p(C),
                data: p(x),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: Q,
                onOnSelectionChange: ne,
                onOnSortChange: pe,
                onOnRowClick: G
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        fe(M("div", yn, [
          a.usePagePro ? (L(), X(Bt, {
            key: 0,
            modelValue: p(b),
            "onUpdate:modelValue": $[0] || ($[0] = (be) => Ie(b) ? b.value = be : null),
            total: p(d),
            "page-size": p(f),
            "page-size-opts": p(s),
            size: a.pageComponentSize,
            onOnChange: Ae,
            onOnPageSizeChange: J
          }, null, 8, ["modelValue", "total", "page-size", "page-size-opts", "size"])) : (L(), X(_e, {
            key: 1,
            modelValue: p(b),
            "onUpdate:modelValue": $[1] || ($[1] = (be) => Ie(b) ? b.value = be : null),
            total: p(d),
            "page-size": p(f),
            "page-size-opts": p(s),
            size: a.pageComponentSize,
            "show-sizer": "",
            "show-total": "",
            showElevator: !a.noElevator,
            onOnChange: Ae,
            onOnPageSizeChange: J
          }, null, 8, ["modelValue", "total", "page-size", "page-size-opts", "size", "showElevator"]))
        ], 512), [
          [me, !a.noPage]
        ])
      ], 512);
    };
  }
}), St = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = D({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(d) {
        let i = {
          key: d,
          val: null
        };
        n.value && n.value !== d && (i.beforeKey = n.value), o("update:modelValue", i), o("on-change", i);
      }
    }), a = D({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(d) {
        o("update:modelValue", {
          key: n.value,
          val: d
        });
      }
    }), s = D(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = D(() => ({ width: e.itemWidth + "px" }));
    function f(d) {
      d != null && d.target && d.target.value !== void 0 && b({
        key: n.value,
        val: d.target.value
      });
    }
    const b = ct((d) => {
      o("on-change", d);
    }, 500);
    return (d, i) => {
      const v = q("Option"), g = q("Select"), A = q("Input");
      return L(), K("div", null, [
        j(g, {
          modelValue: p(n),
          "onUpdate:modelValue": i[0] || (i[0] = (y) => Ie(n) ? n.value = y : null),
          style: le(p(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: Y(() => [
            (L(!0), K(ye, null, we(e.selectOption, (y, k) => (L(), X(v, {
              value: y == null ? void 0 : y.val,
              label: y == null ? void 0 : y.label,
              key: "selectInputOp" + (y == null ? void 0 : y.value) + k,
              style: le({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        j(A, {
          modelValue: p(a),
          "onUpdate:modelValue": i[1] || (i[1] = (y) => Ie(a) ? a.value = y : null),
          placeholder: e.placeholder || p(I)("r.pInput"),
          style: le(p(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: f
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xt = { exports: {} };
(function(t, u) {
  (function(o, e) {
    t.exports = e();
  })(gn, function() {
    function o(i) {
      var v = [];
      return i.AMapUI && v.push(e(i.AMapUI)), i.Loca && v.push(n(i.Loca)), Promise.all(v);
    }
    function e(i) {
      return new Promise(function(v, g) {
        var A = [];
        if (i.plugins)
          for (var y = 0; y < i.plugins.length; y += 1)
            s.AMapUI.plugins.indexOf(i.plugins[y]) == -1 && A.push(i.plugins[y]);
        if (c.AMapUI === a.failed)
          g("前次请求 AMapUI 失败");
        else if (c.AMapUI === a.notload) {
          c.AMapUI = a.loading, s.AMapUI.version = i.version || s.AMapUI.version, y = s.AMapUI.version;
          var k = document.body || document.head, w = document.createElement("script");
          w.type = "text/javascript", w.src = "https://webapi.amap.com/ui/" + y + "/main.js", w.onerror = function(V) {
            c.AMapUI = a.failed, g("请求 AMapUI 失败");
          }, w.onload = function() {
            if (c.AMapUI = a.loaded, A.length)
              window.AMapUI.loadUI(A, function() {
                for (var V = 0, C = A.length; V < C; V++) {
                  var x = A[V].split("/").slice(-1)[0];
                  window.AMapUI[x] = arguments[V];
                }
                for (v(); f.AMapUI.length; )
                  f.AMapUI.splice(0, 1)[0]();
              });
            else
              for (v(); f.AMapUI.length; )
                f.AMapUI.splice(0, 1)[0]();
          }, k.appendChild(w);
        } else
          c.AMapUI === a.loaded ? i.version && i.version !== s.AMapUI.version ? g("不允许多个版本 AMapUI 混用") : A.length ? window.AMapUI.loadUI(A, function() {
            for (var V = 0, C = A.length; V < C; V++) {
              var x = A[V].split("/").slice(-1)[0];
              window.AMapUI[x] = arguments[V];
            }
            v();
          }) : v() : i.version && i.version !== s.AMapUI.version ? g("不允许多个版本 AMapUI 混用") : f.AMapUI.push(function(V) {
            V ? g(V) : A.length ? window.AMapUI.loadUI(A, function() {
              for (var C = 0, x = A.length; C < x; C++) {
                var O = A[C].split("/").slice(-1)[0];
                window.AMapUI[O] = arguments[C];
              }
              v();
            }) : v();
          });
      });
    }
    function n(i) {
      return new Promise(function(v, g) {
        if (c.Loca === a.failed)
          g("前次请求 Loca 失败");
        else if (c.Loca === a.notload) {
          c.Loca = a.loading, s.Loca.version = i.version || s.Loca.version;
          var A = s.Loca.version, y = s.AMap.version.startsWith("2"), k = A.startsWith("2");
          if (y && !k || !y && k)
            g("JSAPI 与 Loca 版本不对应！！");
          else {
            y = s.key, k = document.body || document.head;
            var w = document.createElement("script");
            w.type = "text/javascript", w.src = "https://webapi.amap.com/loca?v=" + A + "&key=" + y, w.onerror = function(V) {
              c.Loca = a.failed, g("请求 AMapUI 失败");
            }, w.onload = function() {
              for (c.Loca = a.loaded, v(); f.Loca.length; )
                f.Loca.splice(0, 1)[0]();
            }, k.appendChild(w);
          }
        } else
          c.Loca === a.loaded ? i.version && i.version !== s.Loca.version ? g("不允许多个版本 Loca 混用") : v() : i.version && i.version !== s.Loca.version ? g("不允许多个版本 Loca 混用") : f.Loca.push(function(V) {
            V ? g(V) : g();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var a;
    (function(i) {
      i.notload = "notload", i.loading = "loading", i.loaded = "loaded", i.failed = "failed";
    })(a || (a = {}));
    var s = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, c = { AMap: a.notload, AMapUI: a.notload, Loca: a.notload }, f = { AMap: [], AMapUI: [], Loca: [] }, b = [], d = function(i) {
      typeof i == "function" && (c.AMap === a.loaded ? i(window.AMap) : b.push(i));
    };
    return { load: function(i) {
      return new Promise(function(v, g) {
        if (c.AMap == a.failed)
          g("");
        else if (c.AMap == a.notload) {
          var A = i.key, y = i.version, k = i.plugins;
          A ? (window.AMap && location.host !== "lbs.amap.com" && g("禁止多种API加载方式混用"), s.key = A, s.AMap.version = y || s.AMap.version, s.AMap.plugins = k || s.AMap.plugins, c.AMap = a.loading, y = document.body || document.head, window.___onAPILoaded = function(V) {
            if (delete window.___onAPILoaded, V)
              c.AMap = a.failed, g(V);
            else
              for (c.AMap = a.loaded, o(i).then(function() {
                v(window.AMap);
              }).catch(g); b.length; )
                b.splice(0, 1)[0]();
          }, k = document.createElement("script"), k.type = "text/javascript", k.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + s.AMap.version + "&key=" + A + "&plugin=" + s.AMap.plugins.join(","), k.onerror = function(V) {
            c.AMap = a.failed, g(V);
          }, y.appendChild(k)) : g("请填写key");
        } else if (c.AMap == a.loaded)
          if (i.key && i.key !== s.key)
            g("多个不一致的 key");
          else if (i.version && i.version !== s.AMap.version)
            g("不允许多个版本 JSAPI 混用");
          else {
            if (A = [], i.plugins)
              for (y = 0; y < i.plugins.length; y += 1)
                s.AMap.plugins.indexOf(i.plugins[y]) == -1 && A.push(i.plugins[y]);
            A.length ? window.AMap.plugin(A, function() {
              o(i).then(function() {
                v(window.AMap);
              }).catch(g);
            }) : o(i).then(function() {
              v(window.AMap);
            }).catch(g);
          }
        else if (i.key && i.key !== s.key)
          g("多个不一致的 key");
        else if (i.version && i.version !== s.AMap.version)
          g("不允许多个版本 JSAPI 混用");
        else {
          var w = [];
          if (i.plugins)
            for (y = 0; y < i.plugins.length; y += 1)
              s.AMap.plugins.indexOf(i.plugins[y]) == -1 && w.push(i.plugins[y]);
          d(function() {
            w.length ? window.AMap.plugin(w, function() {
              o(i).then(function() {
                v(window.AMap);
              }).catch(g);
            }) : o(i).then(function() {
              v(window.AMap);
            }).catch(g);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, s = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, c = {
        AMap: a.notload,
        AMapUI: a.notload,
        Loca: a.notload
      }, f = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(xt);
var kn = xt.exports;
const rl = /* @__PURE__ */ bn(kn);
let Fl = { securityJsCode: "", key: "" };
function wn({ securityJsCode: t, key: u }) {
  Fl.securityJsCode = t, Fl.key = u;
}
function _n(t) {
  return Fl[t];
}
const Tt = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = D({
      get() {
        let x;
        return e.modelValue ? e.modelValue.name ? x = ie(e.modelValue) : x = {
          ...e.modelValue,
          name: null
        } : x = {
          name: null
        }, x;
      },
      set(x) {
        o("update:modelValue", ie(x));
      }
    }), a = D(() => Xe(e.width) ? e.width + "px" : e.width), s = D(() => Xe(e.height) ? e.height + "px" : e.height ? e.height : Xe(e.width) ? e.width * 0.66 + "px" : "200px"), c = D(() => ({
      width: a.value,
      position: "relative"
    })), f = D(() => ({
      width: a.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    ke(
      () => e.modelValue,
      (x) => {
        if (x && x.lng && x.lat) {
          if (!y || !k)
            return;
          V({
            lng: x.lng,
            lat: x.lat,
            name: x.name
          });
        }
      }
    );
    const b = "mapId" + Math.floor(Math.random() * 1e9), d = W(null), i = W(null);
    let v;
    function g() {
      i.value && i.value.clientHeight < 10 || !i.value ? Oe(g, 300) : Oe(w, 100);
    }
    let A, y, k;
    function w() {
      rl.load({
        key: _n("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((x) => {
        A = x, y = new A.Map(b).on("complete", () => {
          var S, B, m, P;
          k = new A.Geocoder(), (S = e.modelValue) != null && S.lng && ((B = e.modelValue) != null && B.lat) && V({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const O = (P = (m = d.value) == null ? void 0 : m.$el) == null ? void 0 : P.children;
          O && O.length > 1 && new A.AutoComplete({
            input: O[1]
          }).on("select", (h) => {
            var U, F, G;
            (U = h == null ? void 0 : h.poi) != null && U.name && ((F = h.poi.location) != null && F.lng && ((G = h.poi.location) != null && G.lat) ? (V({
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }), n.value = {
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }) : y.setCity(h.poi.name, () => {
              let Q = y.getCenter();
              V({
                name: h.poi.name,
                lng: Q.lng,
                lat: Q.lat
              }), n.value = {
                name: h.poi.name,
                lng: Q.lng,
                lat: Q.lat
              };
            })), o("on-change", n.value);
          }), y.on("hotspotclick", (h) => {
            V({
              name: h.name,
              lng: h.lnglat.lng,
              lat: h.lnglat.lat
            }), n.value = {
              name: h.name,
              lng: h.lnglat.lng,
              lat: h.lnglat.lat
            };
          });
        });
      });
    }
    function V({ lng: x, lat: O, name: S }) {
      y.clearMap();
      let B = new A.LngLat(x, O), m = new A.Marker({
        map: y,
        position: B,
        draggable: !0
      });
      y.add(m), C(x, O), m.on("dragend", () => {
        let P = m.getPosition();
        n.value = {
          name: S || null,
          lng: P.lng,
          lat: P.lat
        }, C(x, O);
      }), m.on("click", (P) => {
        var h, U;
        v && v.open(y, (U = (h = P == null ? void 0 : P.target) == null ? void 0 : h.getPosition) == null ? void 0 : U.call(h));
      }), y.setFitView();
    }
    function C(x, O) {
      k.getAddress([x, O], (S, B) => {
        S === "complete" && B.info === "OK" && B.regeocode && B.regeocode.formattedAddress ? v = new A.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + B.regeocode.formattedAddress + "</div>",
          offset: new A.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (v = null, console.warn("地图获取位置信息失败", B));
      });
    }
    return De(g), jt(() => {
      y && (y.destroy(), rl == null || rl.reset(), y = null, k = null, v = null);
    }), (x, O) => (L(), K("div", {
      style: le(p(c)),
      class: "containerIKJ"
    }, [
      j(p(na), {
        ref_key: "mapInputRef",
        ref: d,
        modelValue: p(n).name,
        "onUpdate:modelValue": O[0] || (O[0] = (S) => p(n).name = S),
        class: Se({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || p(I)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      M("div", {
        style: le(p(f)),
        ref_key: "mapRef",
        ref: i,
        id: b
      }, null, 4)
    ], 4));
  }
});
var ut;
const Lt = /* @__PURE__ */ de({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (ut = window == null ? void 0 : window.g) != null && ut.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = W([]), a = D({
      get() {
        let d = e.modelValue;
        return Array.isArray(d) ? ie(d) : Xe(d) ? Sl({
          group: n.value,
          condition: (i) => (i == null ? void 0 : i.value) === d,
          pathKey: "value"
        }) : Kl(d) ? d.split(e.separator) : [];
      },
      set(d) {
        if (e.onlyLastVal)
          xe(d) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", dl(d));
        else {
          if (nl(e.modelValue, d))
            return;
          o("update:modelValue", ie(d));
        }
      }
    });
    function s() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Re.get(e.url).then((d) => {
        var v;
        let i = null;
        (v = d == null ? void 0 : d.data) != null && v.records ? i = d.data.records : d != null && d.data ? i = d.data : d && (i = d), i ? (typeof e.optionFilter == "function" && z(e.optionFilter) === "Function" && (i = e.optionFilter(i)), n.value = c(i)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(d) {
      let i = [];
      for (let v of d) {
        let g = {
          value: v[e.optionVal],
          label: v[e.optionLabel]
        };
        v != null && v.children && !xe(v.children) && (g.children = c(v.children)), i.push(g);
      }
      return i;
    }
    function f(d) {
      return e.onlyLastLabel ? dl(d) : d.join(e.separator);
    }
    function b(d, i) {
      let v = "";
      xe(i) || (v = i.map((g) => g == null ? void 0 : g.label).join(e.separator)), o("on-label-change", v);
    }
    return De(s), (d, i) => {
      const v = q("Cascader");
      return L(), X(v, {
        data: p(n),
        modelValue: p(a),
        "onUpdate:modelValue": i[0] || (i[0] = (g) => Ie(a) ? a.value = g : null),
        onOnChange: b,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": f,
        placeholder: e.placeholder || p(I)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), It = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = W(), a = D({
      get() {
        if (e.modelValue && (Xe(e.modelValue) || Kl(e.modelValue))) {
          let c = String(e.modelValue).trim();
          if (/^\d*$/.test(c)) {
            let b = c.substring(0, 2) + "0000", d, i = s(c);
            return i.length < 7 ? d = c.substring(0, 4) + "00" : d = c.substring(0, 6), /^8\d+$/.test(c) ? [b, i] : [b, d, i];
          }
          return c.indexOf(e.separator) !== -1 ? c.split(e.separator) : [c];
        } else
          return Array.isArray(e.modelValue) ? ie(e.modelValue) : (n.value && (n.value.select = []), []);
      },
      set(c) {
        if (xe(c))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let f = dl(c), b = "", d = "";
          if (f && (b = f.code), b && b.length < 12) {
            let i = [...b];
            for (; i.length < 12; )
              i.push(0);
            b = i.join("");
          }
          if (Array.isArray(c) && (d = c.map((i) => i == null ? void 0 : i.name).join(e.separator)), b) {
            if (b === e.modelValue)
              return;
            o("update:modelValue", b);
          }
          d && o("on-name-change", d);
        }
      }
    });
    function s(c) {
      let f = [...c];
      for (; f[f.length - 1] === "0"; )
        f.pop();
      return f.join("");
    }
    return (c, f) => (L(), X(p(sa), Ze(c.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: n,
      modelValue: p(a),
      "onUpdate:modelValue": f[0] || (f[0] = (b) => Ie(a) ? a.value = b : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(I)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Je(t) {
  var s, c, f;
  const u = (...b) => Ne.apply(this, b), o = u("r.closePreview"), e = u("r.fullImg");
  let n = Vl(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${t}' alt='${e}' ><i class='ivu-icon ivu-icon-md-close' title='${o}' ></i></div>`, (c = (s = a.querySelector(".ivu-icon-md-close")) == null ? void 0 : s.addEventListener) == null || c.call(s, "click", function() {
    var d;
    let b = Vl(document.getElementsByTagName("body"));
    (d = b == null ? void 0 : b.removeChild) == null || d.call(b, a);
  }), (f = n == null ? void 0 : n.appendChild) == null || f.call(n, a);
}
const Vn = { class: "previewBoxM" }, Cn = { class: "imgLoading" }, An = /* @__PURE__ */ M("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Bn = [
  An
], Sn = ["src", "alt"], xn = { class: "deleteModal" }, Tn = { class: "previewBoxM" }, Ln = {
  key: 0,
  class: "previewImg"
}, In = ["src", "alt"], On = { class: "deleteModal" }, Mn = { class: "customFileListM" }, Pn = {
  key: 0,
  class: "customFileListItem"
}, Fn = ["onClick", "title"], Un = { class: "btBoxJ" }, $n = { class: "customFileListM" }, Kn = {
  key: 0,
  class: "customFileListItem"
}, Rn = { class: "listLoading" }, Dn = /* @__PURE__ */ M("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Nn = [
  Dn
], En = ["onClick", "title"], zn = { class: "btBoxJ" };
var dt;
const Ot = /* @__PURE__ */ de({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (dt = window == null ? void 0 : window.g) != null && dt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = ul([]), a = ul([]), s = D(() => !e.manualUpload && e.showImg && d.value ? "img" : e.manualUpload && e.showImg && d.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "list" : ""), c = D(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = D({
      get() {
        return e.manualUpload ? b.value : b.value.map((h) => ({ id: h }));
      },
      set(h) {
        e.manualUpload ? b.value = h || [] : b.value = (h == null ? void 0 : h.map((U) => U == null ? void 0 : U.id)) || [];
      }
    }), b = D({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((h) => h !== "--") : z(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(h) {
        if (e.length === 1) {
          let U = Vl(h);
          o("update:modelValue", U ?? null), o("on-change", U ?? null);
        } else
          o("update:modelValue", ie(h)), o("on-change", ie(h));
      }
    }), d = D(() => {
      let h;
      if (e.manualUpload ? h = f.value : h = a.value, !h)
        return !1;
      for (let U of h) {
        let F;
        if (e.manualUpload ? F = U == null ? void 0 : U.type : F = U == null ? void 0 : U.mimeType, !F || F && !(wl(F) || F === "loading"))
          return !1;
      }
      return !0;
    });
    ke(
      () => f.value,
      async (h) => {
        if (s.value === "localImg")
          h != null && h.length ? n.value = await v(h) : n.value = [];
        else if (h != null && h.length && s.value !== "localList") {
          let U = ie(h);
          const F = ie(a.value);
          for (let G of U)
            if ((G == null ? void 0 : G.name) === void 0)
              if (G.id) {
                const Q = Cl(F, (ne) => (ne == null ? void 0 : ne.id) === G.id);
                Q ? (G.name = Q.name, G.mimeType = Q.mimeType) : (G.mimeType = "loading", Re.get(e.url + "/" + G.id).then((ne) => {
                  var ge, Ae, J, pe, se, N;
                  G.name = ((J = (Ae = (ge = ne == null ? void 0 : ne.data) == null ? void 0 : ge.returnValue) == null ? void 0 : Ae[0]) == null ? void 0 : J.name) || I("r.file") + Xl(h, G), G.mimeType = ((N = (se = (pe = ne == null ? void 0 : ne.data) == null ? void 0 : pe.returnValue) == null ? void 0 : se[0]) == null ? void 0 : N.mimeType) || "unknown", Jt(a);
                }).catch(() => {
                  G.name = I("r.file") + Xl(U, G);
                }));
              } else
                G.name = I("r.unknown");
          a.value = U;
        } else
          a.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function i(h) {
      return (h == null ? void 0 : h.name) || (h == null ? void 0 : h.split) && dl(h.split("/")) || h;
    }
    async function v(h) {
      let U = [];
      for (let F of h) {
        let G = await kl(F);
        U.push(G);
      }
      return U;
    }
    function g(h) {
      if (!e.disabled) {
        let U = f.value;
        U == null || U.splice(h, 1), f.value = U;
      }
    }
    function A(h) {
      h != null && h.id && window.open(e.url + "/" + h.id + "/download");
    }
    function y(h) {
      return e.manualUpload ? (h == null ? void 0 : h.type) && wl(h.type) : (h == null ? void 0 : h.id) && h.mimeType && wl(h.mimeType);
    }
    function k(h) {
      if (e.manualUpload) {
        if (!h)
          return;
        kl(h).then((U) => {
          Je(U);
        });
      } else
        h != null && h.id && Je(e.url + "/" + h.id + "/download?preview=true");
    }
    function w(h) {
      z(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : z(h) === "File" && kl(h).then((U) => {
        La(h.name, U);
      });
    }
    function V(h) {
      var U, F;
      if (e.manualUpload) {
        if (h) {
          let G = yt(h.name);
          if ((U = e.format) != null && U.length && e.format.indexOf(G) < 0)
            return Me(
              I("r.wrongFileType"),
              I("r.supportType") + (((F = e.format) == null ? void 0 : F.length) && String(e.format) || I("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && h.size > e.maxSize * 1024)
            return Me(I("r.fileIsBig"), I("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Q = f.value;
          Q == null || Q.push(h), f.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function C(h) {
      console.warn(h), Me(I("r.uploadError"), "", "error");
    }
    function x(h, U, F) {
      var G, Q, ne, ge, Ae, J;
      if ((h == null ? void 0 : h.code) === 0) {
        let pe = f.value;
        U.id = (Q = (G = h.data) == null ? void 0 : G[0]) == null ? void 0 : Q.id, U.name = (ge = (ne = h.data) == null ? void 0 : ne[0]) == null ? void 0 : ge.name, U.mimeType = (J = (Ae = h.data) == null ? void 0 : Ae[0]) == null ? void 0 : J.mimeType, pe == null || pe.push(U), f.value = pe;
      } else
        Me(I("r.uploadFail"), (h == null ? void 0 : h.message) || "", "error");
    }
    function O() {
      Me(I("r.fileIsBig"), I("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function S() {
      var h;
      Me(
        I("r.wrongFileType"),
        I("r.supportType") + (((h = e.format) == null ? void 0 : h.length) && String(e.format) || I("r.none")),
        "warning"
      );
    }
    function B(h) {
      let U = h == null ? void 0 : h.id, F = h == null ? void 0 : h.mimeType;
      U && (z(F) === "String" && F.indexOf("image") > -1 ? Je(e.url + "/" + U + "/download?preview=true") : window.open(e.url + "/" + U + "/download?preview=true"));
    }
    function m(h) {
      var F, G, Q;
      let U = (Q = (G = (F = h == null ? void 0 : h.response) == null ? void 0 : F.data) == null ? void 0 : G[0]) == null ? void 0 : Q.id;
      P(null, U);
    }
    function P(h, U) {
      if (!(!U && U !== 0) && !e.disabled && b.value.indexOf(U) !== -1) {
        const F = ie(b.value);
        let G = f.value;
        G == null || G.splice(F.indexOf(U), 1), f.value = G;
      }
    }
    return (h, U) => {
      var ne, ge, Ae, J, pe, se;
      const F = q("Button"), G = q("Upload"), Q = q("Icon");
      return L(), K("div", null, [
        j(G, {
          name: "files",
          action: p(c),
          "before-upload": V,
          "on-error": C,
          "on-success": x,
          "on-exceeded-size": O,
          "on-preview": B,
          "on-remove": m,
          "on-format-error": S,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((ne = p(f)) == null ? void 0 : ne.length) && ((ge = p(f)) == null ? void 0 : ge.length) >= e.length || !!e.disabled
        }, {
          default: Y(() => {
            var N, ae;
            return [
              j(F, {
                icon: "ios-cloud-upload-outline",
                class: Se({
                  disabledR: e.length && ((N = p(f)) == null ? void 0 : N.length) && ((ae = p(f)) == null ? void 0 : ae.length) >= e.length || !!e.disabled
                })
              }, {
                default: Y(() => [
                  he(E(p(I)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        fe(M("div", Vn, [
          (L(!0), K(ye, null, we(p(a), (N) => (L(), K(ye, {
            key: N == null ? void 0 : N.id
          }, [
            !e.manualUpload && N && N.id !== null ? (L(), K("div", {
              key: 0,
              class: Se(["previewImg", { previewLoading: N.mimeType === "loading" }])
            }, [
              fe(M("div", Cn, Bn, 512), [
                [me, N.mimeType === "loading"]
              ]),
              fe(M("img", {
                src: h.url + "/" + N.id + "/download?preview=true",
                alt: N.name
              }, null, 8, Sn), [
                [me, N.mimeType !== "loading"]
              ]),
              fe(M("div", xn, [
                j(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(I)("r.fView"),
                  onClick: (ae) => p(Je)(e.url + "/" + N.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                j(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ae) => P(ae, N.id),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [me, N.mimeType !== "loading"]
              ])
            ], 2)) : ue("", !0)
          ], 64))), 128))
        ], 512), [
          [me, p(s) === "img" && ((Ae = p(a)) == null ? void 0 : Ae.length)]
        ]),
        fe(M("div", Tn, [
          (L(!0), K(ye, null, we(p(n), (N, ae) => (L(), K(ye, {
            key: "manualImg" + ae
          }, [
            e.manualUpload && N ? (L(), K("div", Ln, [
              M("img", {
                src: N,
                alt: "manualImg" + ae
              }, null, 8, In),
              M("div", On, [
                j(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ce) => p(Je)(N),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"]),
                j(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ce) => g(ae),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ], 512), [
          [me, p(s) === "localImg" && ((J = p(n)) == null ? void 0 : J.length)]
        ]),
        fe(M("div", Mn, [
          (L(!0), K(ye, null, we(p(f), (N, ae) => (L(), K(ye, {
            key: "manualItem" + ae
          }, [
            e.manualUpload && N ? (L(), K("p", Pn, [
              N.name ? (L(), X(Q, {
                key: 0,
                type: p(lt)(N.name)
              }, null, 8, ["type"])) : ue("", !0),
              M("span", {
                class: Se(["upNameT", { previewName: y(N) }]),
                onClick: (ce) => w(N),
                title: p(I)("r.download")
              }, E(i(N)), 11, Fn),
              M("span", Un, [
                y(N) ? (L(), X(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ce) => k(N),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                j(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ce) => g(ae),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ], 512), [
          [me, p(s) === "localList" && ((pe = p(f)) == null ? void 0 : pe.length)]
        ]),
        fe(M("div", $n, [
          (L(!0), K(ye, null, we(p(a), (N, ae) => (L(), K(ye, {
            key: "defaultItem" + ae
          }, [
            !e.manualUpload && N ? (L(), K("div", Kn, [
              fe(M("div", Rn, Nn, 512), [
                [me, N.mimeType === "loading"]
              ]),
              fe(j(Q, {
                type: p(lt)(N.name)
              }, null, 8, ["type"]), [
                [me, N.mimeType !== "loading"]
              ]),
              fe(M("span", {
                class: Se(["upNameT", { previewName: y(N) }]),
                onClick: (ce) => A(N),
                title: p(I)("r.download")
              }, E(N.name || p(I)("r.file") + (ae + 1)), 11, En), [
                [me, N.mimeType !== "loading"]
              ]),
              fe(M("span", zn, [
                y(N) ? (L(), X(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ce) => k(N),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : ue("", !0),
                j(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ce) => g(ae),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [me, N.mimeType !== "loading"]
              ])
            ])) : ue("", !0)
          ], 64))), 128))
        ], 512), [
          [me, p(s) === "list" && ((se = p(a)) == null ? void 0 : se.length)]
        ])
      ]);
    };
  }
}), Gn = /* @__PURE__ */ M("div", { class: "bRoot" }, null, -1), Mt = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = W(!1), a = W(!1), s = W(!1), c = D({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(k) {
        o("update:modelValue", [k, f.value]), o("on-change", [k, f.value]);
      }
    }), f = D({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(k) {
        o("update:modelValue", [c.value, k]), o("on-change", [c.value, k]);
      }
    }), b = D(
      () => (c.value || "") + ((c.value || f.value) && " - " || "") + (f.value || "")
    ), d = W();
    De(() => {
      d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        s.value = !0;
      }), d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        s.value = !1;
      }), d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (k) => {
        var w;
        !e.disabled && (c.value || f.value) && ((w = k == null ? void 0 : k.stopPropagation) == null || w.call(k), A());
      });
    });
    function i() {
      e.disabled || (n.value = !0);
    }
    function v(k) {
      c.value = k, n.value = !1, a.value = !0;
    }
    function g(k) {
      f.value = k, a.value = !1;
    }
    function A() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function y() {
      n.value = !1, a.value = !1, c.value && f.value === null && (c.value = null);
    }
    return (k, w) => {
      const V = q("DatePicker"), C = q("Icon"), x = q("Input");
      return L(), K("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: d
      }, [
        j(V, {
          open: p(a),
          modelValue: p(f),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: g,
          onOnClickoutside: y
        }, {
          default: Y(() => [
            Gn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        j(V, {
          open: p(n),
          modelValue: p(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: v,
          onOnClickoutside: y
        }, {
          default: Y(() => [
            M("div", { onClick: i }, [
              j(x, {
                class: "aRoot",
                modelValue: p(b),
                "onUpdate:modelValue": w[0] || (w[0] = (O) => Ie(b) ? b.value = O : null),
                readonly: "",
                placeholder: e.placeholder || p(I)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: Y(() => [
                  j(C, {
                    type: p(s) && (p(c) || p(f)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Hn = { class: "editor-pro-root" }, Pt = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = ul(), a = D({
      get() {
        return e.modelValue;
      },
      set(d) {
        o("update:modelValue", d), o("on-change", d);
      }
    }), s = D(
      () => Object.assign(
        {
          placeholder: e.placeholder || I("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), c = D(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(d, i) {
                let v = new FormData();
                v.append("files", d);
                const g = d.name, A = e.imgUploadUrl ?? "/node-serve/file";
                Re.post(A, v, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((y) => {
                  if (y && y.data)
                    if (Array.isArray(y.data))
                      for (let k of y.data) {
                        const w = A + "/" + (k == null ? void 0 : k.id) + "/download";
                        i(w, g, w);
                      }
                    else {
                      const k = A + "/" + y.data.id + "/download";
                      i(k, g, k);
                    }
                }).catch(() => {
                  Me(I("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(d, i) {
                let v = new FormData();
                v.append("files", d);
                const g = e.videoUploadUrl ?? "/node-serve/file";
                Re.post(g, v, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((A) => {
                  if (A && A.data)
                    if (Array.isArray(A.data))
                      for (let y of A.data) {
                        const k = g + "/" + (y == null ? void 0 : y.id) + "/download";
                        i(k);
                      }
                    else {
                      const y = g + "/" + A.data.id + "/download";
                      i(y);
                    }
                }).catch(() => {
                  Me(I("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), f = D(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function b(d) {
      n.value = d;
    }
    return ke(
      () => e.disabled,
      (d) => {
        d ? n.value.disable() : n.value.enable();
      }
    ), qt(() => {
      n.value && n.value.destroy();
    }), (d, i) => (L(), K("div", Hn, [
      fe(j(p(ra), {
        class: "editor-pro-toolbar",
        editor: p(n),
        defaultConfig: p(s),
        mode: d.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [me, !d.disabled]
      ]),
      j(p(ua), {
        class: "editor-pro-editor",
        modelValue: p(a),
        "onUpdate:modelValue": i[0] || (i[0] = (v) => Ie(a) ? a.value = v : null),
        defaultConfig: p(c),
        mode: d.mode,
        onOnCreated: b,
        style: le(p(f))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Wn = {
  key: 19,
  class: "formInfoTxtXN"
}, jn = {
  key: 20,
  class: "formTitleTxtXN"
}, ot = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t;
    function n(d) {
      return {
        withInfo: !!d.info,
        withTitle: !!d.title,
        inlineFormItemXN: e.inline,
        noLabel: d.type === "selectInput",
        [d.class]: d.class,
        slotInput: d.slotPosition
      };
    }
    function a(d, i) {
      o("item-change", {
        e: d,
        root: i
      });
    }
    function s(d, i) {
      o("re-validate", {
        e: d,
        root: i
      });
    }
    function c(d) {
      o("select-input-change", d);
    }
    function f(d, i) {
      o("al-name-change", {
        name: d,
        root: i
      });
    }
    function b(d, i) {
      o("async-label-change", {
        label: d,
        root: i
      });
    }
    return (d, i) => {
      const v = q("InputNumber"), g = q("Input"), A = q("Option"), y = q("Select"), k = q("Radio"), w = q("Icon"), V = q("RadioGroup"), C = q("Checkbox"), x = q("CheckboxGroup"), O = q("DatePicker"), S = q("TimePicker"), B = q("FormItem");
      return e.item ? (L(), X(B, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Se(["relativeBox", n(e.item)])
      }, {
        default: Y(() => [
          e.item.type === "txt" ? (L(), K("div", {
            key: 0,
            style: le([e.itemStyle, { display: "inline-block" }]),
            class: Se({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, E(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (L(), X(v, {
            key: 1,
            style: le(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[0] || (i[0] = (m) => e.tempKeys[e.item.tempKey] = m),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: i[1] || (i[1] = (m) => a(m, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (L(), X(g, {
            key: 2,
            style: le(d.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[2] || (i[2] = (m) => e.tempKeys[e.item.tempKey] = m),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: i[3] || (i[3] = (m) => a(m, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, Qe({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: Y(() => [
                Te(d.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: Y(() => [
                M("span", null, E(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: Y(() => [
                M("span", null, E(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (L(), X(y, {
            key: 3,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[4] || (i[4] = (m) => d.tempKeys[e.item.tempKey] = m),
            style: le(d.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(I)("r.pSelect"),
            onOnChange: i[5] || (i[5] = (m) => a(m, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: Y(() => [
              (L(!0), K(ye, null, we(e.item.options, (m, P) => (L(), X(A, {
                value: m.val,
                label: m.label || m.val,
                key: "option-" + e.item.key + P,
                disabled: !!m.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (L(), X(St, {
            key: 4,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[6] || (i[6] = (m) => d.tempKeys[e.item.tempKey] = m),
            "label-width": d.labelWidth,
            "item-width": d.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (L(), X(It, {
            key: 5,
            style: le(d.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[7] || (i[7] = (m) => e.valGroup[e.item.key] = m),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(I)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: i[8] || (i[8] = (m) => f(m, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (L(), X(Lt, {
            key: 6,
            style: le(d.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[9] || (i[9] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || d.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(I)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: i[10] || (i[10] = (m) => b(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (L(), X(k, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[11] || (i[11] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: i[12] || (i[12] = (m) => a(m, e.item))
          }, {
            default: Y(() => [
              he(E(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (L(), X(V, {
            key: 8,
            style: le(d.itemStyle),
            onOnChange: i[13] || (i[13] = (m) => s(m, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[14] || (i[14] = (m) => d.tempKeys[e.item.tempKey] = m)
          }, {
            default: Y(() => [
              (L(!0), K(ye, null, we(e.item.options, (m) => (L(), X(k, {
                key: "radioItem" + m.val,
                label: m.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: Y(() => [
                  m.icon && !e.item.buttonType ? (L(), X(w, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  M("span", null, E(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (L(), X(C, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[15] || (i[15] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled,
            onOnChange: i[16] || (i[16] = (m) => a(m, e.item))
          }, {
            default: Y(() => [
              he(E(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (L(), X(x, {
            key: 10,
            style: le(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[17] || (i[17] = (m) => d.tempKeys[e.item.tempKey] = m),
            onOnChange: i[18] || (i[18] = (m) => s(m, e.item))
          }, {
            default: Y(() => [
              (L(!0), K(ye, null, we(e.item.options, (m) => (L(), X(C, {
                key: "checkItem" + m.val,
                label: m.val,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: Y(() => [
                  m.icon ? (L(), X(w, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : ue("", !0),
                  M("span", null, E(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (L(), X(g, {
            key: 11,
            type: "textarea",
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[19] || (i[19] = (m) => d.tempKeys[e.item.tempKey] = m),
            autosize: e.item.autosize || { minRows: 2 },
            style: le(d.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: i[20] || (i[20] = (m) => a(m, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (L(), X(Ot, {
            key: 12,
            style: le(d.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[21] || (i[21] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || d.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: i[22] || (i[22] = (m) => s(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (L(), X(O, {
            key: 13,
            style: le(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[23] || (i[23] = (m) => d.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(I)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: i[24] || (i[24] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (L(), X(S, {
            key: 14,
            style: le(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[25] || (i[25] = (m) => d.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(I)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: i[26] || (i[26] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (L(), X(Mt, {
            key: 15,
            style: le(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[27] || (i[27] = (m) => d.tempKeys[e.item.tempKey] = m),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(I)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: i[28] || (i[28] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (L(), X(Pt, {
            key: 16,
            class: "inlineBlock",
            style: le(d.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[29] || (i[29] = (m) => e.valGroup[e.item.key] = m),
            placeholder: e.item.placeholder || p(I)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: i[30] || (i[30] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (L(), X(Tt, {
            key: 17,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[31] || (i[31] = (m) => d.tempKeys[e.item.tempKey] = m),
            style: le(d.itemStyle),
            placeholder: e.item.placeholder || p(I)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: i[32] || (i[32] = (m) => a(m, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (L(), K("div", {
            key: 18,
            class: "inlineBlock",
            style: le(d.itemStyle)
          }, [
            Te(d.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ue("", !0),
          e.item.info ? (L(), K("div", Wn, E(e.item.info), 1)) : ue("", !0),
          e.item.title ? (L(), K("div", jn, E(e.item.title), 1)) : ue("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : ue("", !0);
    };
  }
}), Jn = /* @__PURE__ */ M("input", { type: "text" }, null, -1), qn = { class: "inlineBlock" }, yl = /* @__PURE__ */ de({
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
  setup(t, { expose: u, emit: o }) {
    var ql, Yl;
    const e = o, n = t, a = W(null), s = W({}), c = W([]), f = W({});
    let b = [];
    const d = ((ql = window == null ? void 0 : window.g) == null ? void 0 : ql.mgrURL) ?? "";
    let i = [], v = [];
    const g = W(!1), A = W(Math.random() * 1e8 + 1e3), y = (Yl = window == null ? void 0 : window.g) != null && Yl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let k = !1;
    const w = D(() => Array.isArray(n.formData.length ? n.formData[0] : !1)), V = D(
      () => n.inline ? {
        width: n.itemWidth + n.labelWidth + "px"
      } : {}
    ), C = D(
      () => n.inline ? {
        width: "100%"
      } : { width: n.contentWidth }
    ), x = D(() => {
      let r = ie(n.formRules);
      for (let l in r)
        if (r.hasOwnProperty(l))
          if (Array.isArray(r[l]))
            for (let T of r[l])
              T && (T.message || T.validator || (T.message = I("r.required")));
          else
            z(r[l]) === "Object" && (r[l].message || r[l].validator || (r[l].message = I("r.required")));
      return r;
    }), O = D(() => {
      let r = [];
      if (w.value)
        for (let l of c.value)
          m(l, r);
      else
        m(c.value, r);
      return r.concat(i, v);
    }), S = D(() => {
      let r = [];
      if (w.value)
        for (let l of c.value)
          P(l, r);
      else
        P(c.value, r);
      return r;
    });
    function B(r) {
      return r.filter((l) => l == null ? void 0 : l.slotName);
    }
    function m(r, l) {
      for (let T of r)
        if (T.showing === !0 && T.key && T.type !== "selectInput" && (l.push(T.key), T.key2 && l.push(T.key2), T.collectLabel)) {
          if (!Array.isArray(T.collectLabel) && T.collectLabel.key)
            l.push(T.collectLabel.key);
          else if (Array.isArray(T.collectLabel))
            for (let _ of T.collectLabel)
              _.key && l.push(_.key);
        }
    }
    function P(r, l) {
      for (let T of r)
        T.showing === !0 && T.key && T.type !== "selectInput" && l.push(T.key);
    }
    function h() {
      return new Promise((r) => {
        G(), F().then(() => {
          e("on-reset"), r(!0);
        });
      });
    }
    function U() {
      return new Promise((r) => {
        for (let l of b)
          l();
        b = [], f.value = {}, ve(), ae(), F().then(() => {
          e("on-re-render"), r(!0);
        });
      });
    }
    function F() {
      return new Promise((r) => {
        A.value = Math.floor(Math.random() * 1e8 + 1e3), Pe(function() {
          r(!0);
        });
      });
    }
    function G() {
      let r = ge();
      for (let l in s.value)
        if (s.value.hasOwnProperty(l))
          if (Ve(r[l]))
            s.value[l] = r[l];
          else if (Array.isArray(s.value[l]))
            s.value[l] = [];
          else if (z(s.value[l]) === "Boolean")
            s.value[l] = !1;
          else {
            const T = je(n.formData, (_) => (_ == null ? void 0 : _.key) === l);
            T && (T.type === "editor" || T.type === "editorPro") ? s.value[l] = "" : s.value[l] = null;
          }
      Q(r);
    }
    function Q(r) {
      for (let l in f.value)
        f.value.hasOwnProperty(l) && (Ve(r[l]) ? f.value[l] = r[l] : Array.isArray(f.value[l]) ? f.value[l] = [] : z(f.value[l]) === "Object" && f.value[l].hasOwnProperty("key") && f.value[l].hasOwnProperty("val") ? f.value[l].val = null : f.value[l] = null);
    }
    function ne(r) {
      let l = ge();
      Ve(l[r]) ? f.value[r] = l[r] : Array.isArray(f.value[r]) ? f.value[r] = [] : f.value[r] = null;
    }
    function ge() {
      let r = {};
      if (w.value)
        for (let l of c.value)
          Ae(l, r);
      else
        Ae(c.value, r);
      return r;
    }
    function Ae(r, l) {
      for (let T of r)
        T.tempKey && Ve(T.defaultVal) && N(T, l), T.key && Ve(T.defaultVal) && (l[T.key] = T.defaultVal), T.key2 && Ve(T.defaultVal2) && (l[T.key2] = T.defaultVal2);
    }
    function J(r) {
      if (r.show) {
        if (z(r.show) === "Object")
          return se(r, pe(r.show));
        if (Array.isArray(r.show))
          if (r.showOr) {
            for (let l of r.show)
              if (pe(l) === !0)
                return se(r, !0);
            return se(r, !1);
          } else {
            for (let l of r.show)
              if (pe(l) === !1)
                return se(r, !1);
            return se(r, !0);
          }
        else if (typeof r.show == "function")
          return se(r, r.show(s.value));
      } else
        r.showing || (r.showing = !0);
      return !0;
    }
    function pe(r) {
      if (r.reg && typeof r.reg.test == "function")
        return r.reg.test(s.value[r.key]);
      if (Array.isArray(r.val)) {
        for (let l of r.val) {
          if ((s.value[r.key] || s.value[r.key] === 0 || s.value[r.key] === !1) && l === ".")
            return !0;
          if (s.value[r.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function se(r, l) {
      return !r.showing && l && r.key ? (r.showing = l, r.defaultVal !== void 0 && (r.tempKey ? (f.value[r.tempKey] === null || f.value[r.tempKey] === void 0 || (z(f.value[r.tempKey]) === "Object" || Array.isArray(f.value[r.tempKey])) && xe(f.value[r.tempKey])) && N(r, f.value) : (s.value[r.key] === null || s.value[r.key] === void 0) && (s.value[r.key] = r.defaultVal), r.key2 && r.deafultVal2 !== void 0 && (s.value[r.key2] === null || s.value[r.key2] === void 0) && r.type !== "inputMap" && (s.value[r.key2] = r.defaultVal2)), r.tempKey && be(f.value[r.tempKey], r)) : r.showing = l, l;
    }
    function N(r, l) {
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
      let r = ie(n.formData);
      if (w.value)
        for (let l of r)
          ce(l);
      else
        ce(r);
      c.value = r;
    }
    function ce(r) {
      for (let l of r)
        switch (l.type) {
          case "selectInput":
            const T = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = T, f.value[T] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, b.push(
              ke(
                () => f.value[T],
                (H) => {
                  be(H, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const _ = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = _, l.key3 ? f.value[_] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : f.value[_] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, b.push(
              ke(
                () => f.value[_],
                (H) => {
                  be(H, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const re = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = re, f.value[re] = l.defaultVal !== void 0 ? l.defaultVal : null, b.push(
              ke(
                () => f.value[re],
                (H) => {
                  be(H, l);
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
                  let H = !0;
                  for (let Z of l.changeOption)
                    if (!Z.valKey || !Z.key) {
                      H = !1;
                      break;
                    }
                  H ? b.push(
                    ke(
                      () => {
                        let Z = "";
                        if (Array.isArray(l.changeOption))
                          for (let Be of l.changeOption) {
                            let $e = s.value[Be.valKey];
                            if ($e || $e === 0 || $e === !1)
                              Z += "&" + Be.key + "=" + $e;
                            else if (!Be.notRequired)
                              return !1;
                          }
                        return Z;
                      },
                      (Z) => {
                        let Be = ie(f.value[l.tempKey]);
                        if (f.value[l.tempKey] = null, Z && l.optionUrl) {
                          let $e = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          R(($e + Z).replace(/\?&/, "?"), l, Be);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), Ve(Be) && $(Be, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && b.push(
                    ke(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? s.value[l.changeOption.valKey] : !1,
                      (H) => {
                        let Z = ie(f.value[l.tempKey]);
                        if (f.value[l.tempKey] = null, (H || H === 0 || H === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let Be = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          R((Be + "&" + l.changeOption.key + "=" + H).replace(/\?&/, "?"), l, Z);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), Ve(Z) && $(Z, l);
                      },
                      { immediate: !0 }
                    )
                  ) : z(l.changeOption) === "Boolean" && b.push(
                    ke(
                      () => je(n.formData, (H) => (H == null ? void 0 : H.key) === l.key).optionUrl,
                      (H) => {
                        let Z = ie(f.value[l.tempKey]);
                        f.value[l.tempKey] = null, H ? R(H, l, Z) : (l.options = [], l.localOption && (l.options = [...l.localOption]), Ve(Z) && $(Z, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && R(l.optionUrl, l);
            else
              z(l.borrowOption) === "String" && (l.options = je(c.value, (H) => (H == null ? void 0 : H.key) === l.borrowOption).options);
            const te = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = te, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? f.value[te] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? f.value[te] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : f.value[te] = l.defaultVal !== void 0 ? l.defaultVal : null, b.push(
              ke(
                () => f.value[te],
                (H) => {
                  be(H, l);
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
            const ee = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = ee, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? f.value[ee] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (f.value[ee] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), b.push(
              ke(
                () => f.value[ee],
                (H) => {
                  be(H, l);
                }
              )
            );
            break;
        }
    }
    function R(r, l, T) {
      Re.get(r).then((_) => {
        var te;
        if (!l.options)
          return;
        let re = ((te = _ == null ? void 0 : _.data) == null ? void 0 : te.records) || (_ == null ? void 0 : _.data) || _ || [];
        Array.isArray(re) ? (l.optionFilter && z(l.optionFilter) === "Function" && (re = l.optionFilter(re)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...re.map((ee) => {
            let H;
            if (Array.isArray(l.optionLabel)) {
              let Z = "";
              l.optionLabel.forEach((Be, $e) => {
                let gl = String(ee[Be]);
                $e === 1 ? Z += "（" + gl : $e > 1 ? Z += "、" + gl : Z += gl;
              }), H = {
                label: Z + "）",
                val: l.optionVal && ee[l.optionVal]
              };
            } else
              H = {
                label: l.optionLabel && ee[l.optionLabel],
                val: l.optionVal && ee[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let Z of l.collectLabel)
                  Z.valKey && Z.valKey !== "label" && (H[Z.valKey] = ee[Z.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (H[l.collectLabel.valKey] = ee[l.collectLabel.valKey]);
            if (H.val !== null && H.val !== void 0)
              return H;
          })
        )) : (l.options.length = 0, l.options.push(...re))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), Ve(T) && $(T, l), l.disableOptionByOthers && (z(l.disableOptionByOthers) === "String" ? b.push(
          ke(
            () => s.value[l.disableOptionByOthers],
            (ee) => {
              if (ne(l.tempKey), !!l.options) {
                for (let H of l.options)
                  H.disabled && (H.disabled = !1);
                if (ee || ee === 0 || ee === !1)
                  for (let H of l.options)
                    H.val === ee && (H.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && b.push(
          ke(
            () => l.disableOptionByOthers.filter((ee) => ee).map((ee) => s.value[ee]),
            (ee) => {
              if (ne(l.tempKey), !!l.options) {
                for (let H of l.options)
                  H.disabled && (H.disabled = !1);
                if (ee) {
                  for (let H of l.options)
                    for (let Z = 0; Z < ee.length; Z++)
                      if (H.val === ee[Z]) {
                        H.disabled = !0, ee.splice(Z, 1);
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
    function $(r, l) {
      Array.isArray(l.options) && ft(l.options, { val: r }) !== -1 && (f.value[l.tempKey] = r);
    }
    function ve() {
      if (s.value = {}, w.value)
        for (let r of n.formData)
          _e(r);
      else
        _e(n.formData);
    }
    function _e(r) {
      for (let l of r)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (s.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function be(r, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            r && (r.beforeKey && delete s.value[r.beforeKey], s.value[r.key] = r.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            r ? (s.value[l.key] = r.lng, s.value[l.key2] = r.lat, l.key3 && (s.value[l.key3] = r.name)) : (s.value[l.key] = null, s.value[l.key2] = null, l.key3 && (s.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (r || r === 0) {
              let re = /^-?\d+(.\d+)?$/;
              l.numberVal && re.test(r) ? s.value[l.key] = Number(r) : s.value[l.key] = r;
            } else
              s.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? s.value[l.key] = r === void 0 || r === "" || r === null ? null : !!r : l.multiple || l.type === "checkboxGroup" ? s.value[l.key] = Object.assign([], r) : s.value[l.key] = r, l.collectLabel) {
              const re = oe(l, r);
              if (Array.isArray(l.collectLabel)) {
                for (let te of l.collectLabel)
                  if (te != null && te.key && te.valKey) {
                    const ee = Ue(te.key);
                    let H = null;
                    Array.isArray(re) ? (H = re.map((Be) => Be[te.valKey]), s.value[te.key] = H, ee && (f.value[ee] = H)) : (re && Ve(re[te.valKey]) && (H = re[te.valKey]), s.value[te.key] = H, ee && (f.value[ee] = H));
                    let Z = je(c.value, (Be) => (Be == null ? void 0 : Be.key) === te.key);
                    Z && Z.tempKey && (f.value[Z.tempKey] = s.value[te.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const te = Ue(l.collectLabel.key);
                let ee = null;
                Array.isArray(re) ? (ee = re.map(
                  (Z) => l.collectLabel && !Array.isArray(l.collectLabel) && Z[l.collectLabel.valKey]
                ), s.value[l.collectLabel.key] = ee, te && (f.value[te] = ee)) : (re && Ve(re[l.collectLabel.valKey]) && (ee = re[l.collectLabel.valKey]), s.value[l.collectLabel.key] = ee, te && (f.value[te] = ee));
                let H = je(
                  c.value,
                  (Z) => l.collectLabel && !Array.isArray(l.collectLabel) && (Z == null ? void 0 : Z.key) === l.collectLabel.key || !1
                );
                H && H.tempKey && (f.value[H.tempKey] = s.value[l.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!l.key)
              return;
            let T = l.dateType;
            const _ = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (T === "date" || T === "datetime" || T === "time" || T === "year" || T === "month")
              r ? (T === "time" ? s.value[l.key] = r : s.value[l.key] = tl(r).format(typeof l.format == "string" ? l.format : _[T]), T === "date" && l.addTime && (s.value[l.key] += " 00:00:00")) : s.value[l.key] = null;
            else if (l.type === "monthRange" || T === "daterange" || T === "datetimerange" || T === "timerange") {
              if (!l.key2)
                return;
              r && r[0] && r[1] ? (T === "timerange" ? (s.value[l.key] = r[0], s.value[l.key2] = r[1]) : l.type === "monthRange" ? (s.value[l.key] = typeof l.format == "string" && tl(r[0]).format(l.format) || r[0], s.value[l.key2] = typeof l.format == "string" && l.format && tl(r[1]).format(l.format) || r[1]) : (s.value[l.key] = tl(r[0]).format(l.format || T && _[T]), s.value[l.key2] = tl(r[1]).format(l.format || T && _[T])), T === "daterange" && l.addTime && (s.value[l.key] += " 00:00:00", s.value[l.key2] += " 23:59:59")) : (s.value[l.key] = null, s.value[l.key2] = null);
            }
            break;
        }
    }
    function oe(r, l) {
      if (r.options)
        if (r != null && r.multiple || r.type === "checkboxGroup") {
          if (l) {
            let T = [];
            for (let _ of r.options)
              l.indexOf(_ == null ? void 0 : _.val) !== -1 && T.push(_);
            return T;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let T of r.options)
              if ((T == null ? void 0 : T.val) === l)
                return T;
          }
          return !1;
        }
    }
    function Ue(r) {
      if (w.value) {
        for (let l of c.value) {
          const T = el(l, r);
          if (T)
            return T;
        }
        return !1;
      }
      return el(c.value, r);
    }
    function el(r, l) {
      for (let T of r)
        if (T.key === l)
          return T.tempKey;
      return !1;
    }
    function Ut(r, l) {
      let T = {};
      for (let _ in s.value)
        s.value.hasOwnProperty(_) && r[_] !== void 0 && (T[_] = r[_], delete r[_]);
      Nl(T, l);
      for (let _ in r)
        r.hasOwnProperty(_) && (v.indexOf(_) < 0 && v.push(_), s.value[_] = r[_]);
    }
    function $t(r) {
      let l = ie(r);
      if (w.value) {
        let T = [];
        for (let _ of n.formData)
          T.push(...Dl(_, l));
        return T;
      }
      return Dl(n.formData, l);
    }
    function Dl(r, l) {
      return r.filter((T) => {
        for (let _ of Object.keys(l))
          if ((T == null ? void 0 : T.key) === _ && S.value.indexOf(_) > -1 && !(l[_] === null || (Array.isArray(l[_]) || z(l[_]) === "Object") && xe(l[_])))
            return delete l[_], !0;
        return !1;
      }).map((T) => T == null ? void 0 : T.key);
    }
    function Nl(r, l = !1) {
      let T = ie(r);
      Kt(r, l);
      for (let _ in s.value)
        if (s.value.hasOwnProperty(_) && r[_] !== void 0 && r[_] !== "--") {
          if (Array.isArray(r[_]))
            r[_] = r[_].filter((re) => re !== "--");
          else if (z(r[_]) === "Object")
            for (let re in r[_])
              r[_].hasOwnProperty(re) && r[_][re] === "--" && (r[_][re] = null);
          s.value[_] = r[_];
        } else
          l || (s.value[_] = Array.isArray(s.value[_]) ? [] : null);
      Pe(function() {
        Et($t(T));
      });
    }
    function Kt(r, l = !1) {
      if (w.value)
        for (let T of c.value)
          El(T, r, l);
      else
        El(c.value, r, l);
    }
    function El(r, l, T = !1) {
      for (let _ of r)
        if (_.key && (T && (l[_.key] !== void 0 || _.key2 && l[_.key2] !== void 0) || !T) && _.tempKey)
          switch (_.type) {
            case "inputMap":
              if (!_.key2)
                continue;
              z(l[_.key]) === "Number" && z(l[_.key2] === "Number") ? _.key3 ? f.value[_.tempKey] = {
                lng: l[_.key],
                lat: l[_.key2],
                name: l[_.key3]
              } : f.value[_.tempKey] = {
                lng: l[_.key],
                lat: l[_.key2]
              } : _.key3 ? f.value[_.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : f.value[_.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[_.key] && l[_.key] !== "--" || l[_.key] === 0 ? f.value[_.tempKey] = l[_.key] : f.value[_.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[_.key] && l[_.key] !== "--" || l[_.key] === 0 || l[_.key] === !1 ? _.multiple || _.type === "checkboxGroup" ? f.value[_.tempKey] = [...l[_.key]] : _.booleanVal ? f.value[_.tempKey] = l[_.key] ? 1 : 0 : f.value[_.tempKey] = l[_.key] : _.multiple || _.type === "checkboxGroup" ? f.value[_.tempKey] = [] : f.value[_.tempKey] = null;
              break;
            case "date":
            case "time":
              if (_.dateType === "date" || _.dateType === "datetime" || _.dateType === "year" || _.dateType === "month" || _.dateType === "time")
                f.value[_.tempKey] = l[_.key] && l[_.key] !== "--" ? l[_.key] : null;
              else if (_.dateType === "daterange" || _.dateType === "datetimerange" || _.dateType === "timerange") {
                if (!_.key2)
                  continue;
                f.value[_.tempKey] = l[_.key] && l[_.key] !== "--" && l[_.key2] && l[_.key2] !== "--" && [l[_.key], l[_.key2]] || [];
              }
              break;
          }
    }
    function Rt(r) {
      if (Array.isArray(r))
        for (let l of r)
          zl(l);
      else
        z(r) === "Object" && zl(r);
    }
    function zl(r) {
      const { index: l, indexB: T, key: _, val: re } = r;
      if (typeof l == "number")
        if (Array.isArray(c.value[l])) {
          if (typeof T == "number")
            if (_ && r.hasOwnProperty("val"))
              c.value[l][T][_] = re;
            else
              for (let te of Object.keys(r))
                te !== "index" && _ !== "indexB" && (c.value[l][T][te] = r[te]);
        } else if (_ && r.hasOwnProperty("val"))
          c.value[l][_] = re;
        else
          for (let te of Object.keys(r))
            te !== "index" && (c.value[l][te] = r[te]);
    }
    function Gl({ label: r, root: l }) {
      l.key2 && (s.value[l.key2] = r), He({
        e: r,
        root: l
      });
    }
    function Hl(r) {
      r.beforeKey && ea(i, (l) => l === r.beforeKey), r.key && (i.indexOf(r.key) === -1 && i.push(r.key), He({
        e: null,
        root: r
      }));
    }
    function Wl({ name: r, root: l }) {
      l.key2 && (s.value[l.key2] = r), He({
        e: r,
        root: l
      });
    }
    function jl({ e: r, root: l }) {
      He({
        e: r,
        root: l
      }), Pe(function() {
        var T, _;
        (_ = (T = a.value) == null ? void 0 : T.validateField) == null || _.call(T, l.key);
      });
    }
    function He({ e: r, root: l }) {
      Oe(() => {
        let T = {
          event: r
        };
        if (l.key && (T[l.key] = s.value[l.key]), l.key2 && (T[l.key2] = s.value[l.key2]), Array.isArray(l.collectLabel))
          for (let _ of l.collectLabel)
            T[_.key] = s.value[_.key];
        else
          l.collectLabel && l.collectLabel.key && (T[l.collectLabel.key] = s.value[l.collectLabel.key]);
        e("on-item-change", T);
      }, 500);
    }
    function Jl() {
      let r = {};
      for (let l of O.value)
        r[l] = s.value[l];
      return n.trim && (r = pl(r)), r;
    }
    function Dt() {
      var r, l;
      (l = (r = a.value) == null ? void 0 : r.validate) == null || l.call(r);
    }
    function Nt(r) {
      Oe(() => {
        var l, T;
        (T = (l = a.value) == null ? void 0 : l.validateField) == null || T.call(l, r, () => {
        });
      }, 10);
    }
    function Et(r) {
      Oe(() => {
        var l, T;
        if (Array.isArray(r))
          for (let _ of r)
            (T = (l = a.value) == null ? void 0 : l.validateField) == null || T.call(l, _, () => {
            });
      }, 10);
    }
    function zt(r) {
      r !== void 0 && (g.value = !!r);
    }
    function vl() {
      var r, l;
      n.disabled || (l = (r = a.value) == null ? void 0 : r.validate) == null || l.call(r, (T) => {
        k || (k = !0, T && (g.value = !0, e("on-submit", Jl())), Oe(() => {
          k = !1;
        }, 2e3));
      });
    }
    return De(() => {
      ve(), ae();
    }), u({
      resetForm: h,
      refreshFormDom: F,
      reRenderForm: U,
      setItemToValGroup: Ut,
      updateValGroup: Nl,
      updateFormDataT: Rt,
      validate: Dt,
      reValidate: Nt,
      changeLoading: zt,
      getValGroup: Jl,
      submit: vl
    }), (r, l) => {
      const T = q("FormItem"), _ = q("Button"), re = q("Form");
      return L(), X(re, {
        ref_key: "formGroupXRef",
        ref: a,
        model: p(s),
        rules: p(x),
        "label-width": n.labelWidth,
        inline: n.inline,
        "show-message": n.showMessage,
        class: "formXN",
        key: p(A)
      }, {
        default: Y(() => [
          j(T, { style: { display: "none" } }, {
            default: Y(() => [
              Jn
            ]),
            _: 1
          }),
          p(w) ? (L(!0), K(ye, { key: 0 }, we(p(c), (te, ee) => (L(), K("div", {
            class: Se([r.teamClass, "formTeamBox" + ee]),
            key: "formTeamBox" + ee
          }, [
            (L(!0), K(ye, null, we(te, (H, Z) => (L(), K(ye, {
              key: "formItem" + Z
            }, [
              J(H) ? (L(), X(ot, {
                key: 0,
                item: H,
                style: le(p(V)),
                "item-style": p(C),
                "val-group": p(s),
                "temp-keys": p(f),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": p(d),
                "upload-url": p(y),
                onItemChange: He,
                onReValidate: jl,
                onClearTempKeyItem: ne,
                onSelectInputChange: Hl,
                onAlNameChange: Wl,
                onAsyncLabelChange: Gl
              }, Qe({ _: 2 }, [
                we(B(te), (Be) => ({
                  name: Be.slotName,
                  fn: Y(($e) => [
                    Te(r.$slots, Be.slotName, {
                      valGroup: $e.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ue("", !0),
          (L(!0), K(ye, null, we(p(c), (te, ee) => (L(), K(ye, {
            key: "formItem" + ee
          }, [
            !p(w) && J(te) ? (L(), X(ot, {
              key: 0,
              item: te,
              style: le(p(V)),
              "item-style": p(C),
              "val-group": p(s),
              "temp-keys": p(f),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": p(d),
              "upload-url": p(y),
              onItemChange: He,
              onReValidate: jl,
              onClearTempKeyItem: ne,
              onSelectInputChange: Hl,
              onAlNameChange: Wl,
              onAsyncLabelChange: Gl
            }, Qe({ _: 2 }, [
              we(B(r.formData), (H) => ({
                name: H.slotName,
                fn: Y((Z) => [
                  Te(r.$slots, H.slotName, {
                    valGroup: Z.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ue("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (L(), X(T, { key: 1 }, {
            default: Y(() => [
              j(_, {
                onClick: vl,
                style: le(p(C)),
                type: "primary",
                loading: n.btnLoading && p(g),
                disabled: n.disabled
              }, {
                default: Y(() => [
                  he(E(n.longOkBtTxt || p(I)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ue("", !0),
          M("div", qn, [
            n.showInlineOkBt ? (L(), X(_, {
              key: 0,
              type: "primary",
              class: Se({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: vl,
              loading: n.btnLoading && p(g),
              disabled: n.disabled
            }, {
              default: Y(() => [
                he(E(n.inlineOkBtTxt || p(I)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ue("", !0),
            n.showInlineClearBt ? (L(), X(_, {
              key: 1,
              onClick: h,
              class: Se({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: Y(() => [
                he(E(n.inlineClearBtTxt || p(I)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ue("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Yn = /* @__PURE__ */ de({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: () => Ke().formGroupWidth },
    labelWidth: { default: () => Ke().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(t, { expose: u, emit: o }) {
    const e = o, n = t, a = W({ width: n.with }), s = W(!1), c = W(), f = D(() => {
      var S, B;
      if (Array.isArray(n.formData))
        if (Array.isArray(n.formData[0])) {
          let m = [];
          for (let P of n.formData)
            P && (m = m.concat(
              P.filter((h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition)
            ));
          return m;
        } else
          return (B = (S = n.formData) == null ? void 0 : S.filter) == null ? void 0 : B.call(
            S,
            (m) => (m == null ? void 0 : m.type) === "custom" || (m == null ? void 0 : m.type) === "input" && m.slotName && m.slotPosition
          );
      return [];
    });
    function b() {
      return new Promise((S) => {
        var B, m;
        (m = (B = c.value).resetForm) == null || m.call(B).then((P) => {
          S(P);
        });
      });
    }
    function d() {
      return new Promise((S) => {
        var B, m;
        (m = (B = c.value).refreshFormDom) == null || m.call(B).then((P) => {
          S(P);
        });
      });
    }
    function i() {
      return new Promise((S) => {
        var B, m;
        (m = (B = c.value).reRenderForm) == null || m.call(B).then((P) => {
          S(P);
        });
      });
    }
    function v(S, B) {
      var m, P;
      (P = (m = c.value).setItemToValGroup) == null || P.call(m, S, B);
    }
    function g(S, B) {
      var m, P;
      (P = (m = c.value).updateValGroup) == null || P.call(m, S, B);
    }
    function A(S) {
      var B, m;
      (m = (B = c.value).updateFormDataT) == null || m.call(B, S);
    }
    function y() {
      var S, B;
      (B = (S = c.value).validate) == null || B.call(S);
    }
    function k(S) {
      var B, m;
      (m = (B = c.value).reValidate) == null || m.call(B, S);
    }
    function w(S) {
      var B, m;
      S !== void 0 && (s.value = !!S, (m = (B = c.value).changeLoading) == null || m.call(B, s.value));
    }
    function V() {
      var S, B;
      return (B = (S = c.value).getValGroup) == null ? void 0 : B.call(S);
    }
    function C() {
      s.value = !0;
    }
    function x() {
      var S, B;
      (B = (S = c.value).submit) == null || B.call(S);
    }
    function O() {
      e("on-cancel"), Oe(() => {
        var S, B;
        s.value = !1, (B = (S = c.value).changeLoading) == null || B.call(S, !1);
      }, 1e3);
    }
    return u({
      resetForm: b,
      refreshFormDom: d,
      reRenderForm: i,
      setItemToValGroup: v,
      updateValGroup: g,
      updateFormDataT: A,
      validate: y,
      reValidate: k,
      changeLoading: w,
      getValGroup: V,
      submit: x,
      close: O
    }), (S, B) => {
      const m = q("Button");
      return L(), K("div", {
        style: le(p(a)),
        class: "formGroupBoxVM"
      }, [
        j(yl, Ze({
          ref_key: "formRRef",
          ref: c
        }, S.$attrs, {
          "form-data": n.formData,
          "label-width": n.labelWidth,
          "content-width": n.contentWidth,
          "item-width": n.itemWidth,
          btnLoading: n.btnLoading,
          onOnSubmit: C
        }), Qe({ _: 2 }, [
          we(p(f), (P) => ({
            name: P.slotName,
            fn: Y(({ valGroup: h }) => [
              Te(S.$slots, P.slotName, { valGroup: h })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        fe(M("div", {
          class: "formFooterVM",
          style: le({ marginLeft: n.labelWidth + "px" })
        }, [
          M("div", {
            style: le({ width: n.contentWidth }),
            class: "btnBoxKAL"
          }, [
            n.showOkBt ? (L(), X(m, {
              key: 0,
              onClick: x,
              class: "form-save-btn",
              loading: n.btnLoading && p(s)
            }, {
              default: Y(() => [
                he(E(n.okBtTxt || p(I)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : ue("", !0),
            n.showCancelBt ? (L(), X(m, {
              key: 1,
              onClick: O,
              class: "form-cancel-btn"
            }, {
              default: Y(() => [
                he(E(n.cancelBtTxt || p(I)("r.cancel")), 1)
              ]),
              _: 1
            })) : ue("", !0)
          ], 4)
        ], 4), [
          [me, n.showOkBt || n.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ul = /* @__PURE__ */ de({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Ke().searchFormLabelWidth },
    itemWidth: { default: () => Ke().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: u, emit: o }) {
    const e = o, n = t, a = W(), s = D(() => {
      var C, x;
      if (Array.isArray(n.formData[0])) {
        let O = [];
        for (let S of n.formData)
          S && (O = O.concat(
            S.filter((B) => (B == null ? void 0 : B.type) === "custom" || (B == null ? void 0 : B.type) === "input" && B.slotName && B.slotPosition)
          ));
        return O;
      }
      return (x = (C = n.formData) == null ? void 0 : C.filter) == null ? void 0 : x.call(
        C,
        (O) => (O == null ? void 0 : O.type) === "custom" || (O == null ? void 0 : O.type) === "input" && O.slotName && O.slotPosition
      );
    });
    function c() {
      return new Promise((C) => {
        var x, O;
        (O = (x = a.value).resetForm) == null || O.call(x).then(() => {
          C();
        });
      });
    }
    function f() {
      return new Promise((C) => {
        var x, O;
        (O = (x = a.value).refreshFormDom) == null || O.call(x).then(() => {
          C();
        });
      });
    }
    function b() {
      return new Promise((C) => {
        var x, O;
        (O = (x = a.value).reRenderForm) == null || O.call(x).then(() => {
          C();
        });
      });
    }
    function d(C, x) {
      var O, S;
      (S = (O = a.value).setItemToValGroup) == null || S.call(O, C, x);
    }
    function i(C, x) {
      var O, S;
      (S = (O = a.value).updateValGroup) == null || S.call(O, C, x);
    }
    function v(C) {
      var x, O;
      (O = (x = a.value).updateFormDataT) == null || O.call(x, C);
    }
    function g() {
      var C, x;
      (x = (C = a.value).validate) == null || x.call(C);
    }
    function A(C) {
      var x, O;
      (O = (x = a.value).reValidate) == null || O.call(x, C);
    }
    function y(C) {
      var x, O;
      (O = (x = a.value).changeLoading) == null || O.call(x, C === void 0 ? !1 : C);
    }
    function k() {
      var C, x;
      return (x = (C = a.value).getValGroup) == null ? void 0 : x.call(C);
    }
    function w(C) {
      e("on-search", C);
    }
    function V() {
      var C, x;
      (x = (C = a.value).submit) == null || x.call(C);
    }
    return De(() => {
      const C = a.value.$el;
      C != null && C.parentNode && C.parentNode.addEventListener("keyup", (x) => {
        (x == null ? void 0 : x.keyCode) === 13 && V();
      });
    }), u({
      resetForm: c,
      refreshFormDom: f,
      reRenderForm: b,
      setItemToValGroup: d,
      updateValGroup: i,
      updateFormDataT: v,
      validate: g,
      reValidate: A,
      changeLoading: y,
      getValGroup: k,
      submit: V
    }), (C, x) => (L(), X(yl, Ze({
      ref_key: "formRRef",
      ref: a
    }, C.$attrs, {
      "form-data": n.formData,
      "label-width": n.labelWidth,
      "item-width": n.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": n.showInlineOkBt,
      "inline-ok-bt-txt": p(I)("r.check"),
      "show-inline-clear-bt": n.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), Qe({ _: 2 }, [
      we(p(s), (O) => ({
        name: O.slotName,
        fn: Y(({ valGroup: S }) => [
          Te(C.$slots, O.slotName, { valGroup: S })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Xn = /* @__PURE__ */ de({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Ke().formModalWidth },
    labelWidth: { default: () => Ke().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: u, emit: o }) {
    const e = o, n = t, a = W(), s = W(!1), c = W(!1), f = D(() => {
      var m, P;
      if (Array.isArray(n.formData[0])) {
        let h = [];
        for (let U of n.formData)
          U && (h = h.concat(
            U.filter((F) => (F == null ? void 0 : F.type) === "custom" || (F == null ? void 0 : F.type) === "input" && F.slotName && F.slotPosition)
          ));
        return h;
      }
      return (P = (m = n.formData) == null ? void 0 : m.filter) == null ? void 0 : P.call(
        m,
        (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
      );
    });
    function b() {
      return new Promise((m) => {
        var P, h;
        (h = (P = a.value).resetForm) == null || h.call(P).then(() => {
          m();
        });
      });
    }
    function d() {
      return new Promise((m) => {
        var P, h;
        (h = (P = a.value).refreshFormDom) == null || h.call(P).then(() => {
          m();
        });
      });
    }
    function i() {
      return new Promise((m) => {
        var P, h;
        (h = (P = a.value).reRenderForm) == null || h.call(P).then(() => {
          m();
        });
      });
    }
    function v(m, P) {
      var h, U;
      (U = (h = a.value).setItemToValGroup) == null || U.call(h, m, P);
    }
    function g(m, P) {
      var h, U;
      (U = (h = a.value).updateValGroup) == null || U.call(h, m, P);
    }
    function A(m) {
      var P, h;
      (h = (P = a.value).updateFormDataT) == null || h.call(P, m);
    }
    function y() {
      var m, P;
      (P = (m = a.value).validate) == null || P.call(m);
    }
    function k(m) {
      var P, h;
      (h = (P = a.value).reValidate) == null || h.call(P, m);
    }
    function w(m) {
      var P, h;
      m !== void 0 && (c.value = !!m, (h = (P = a.value).changeLoading) == null || h.call(P, c.value));
    }
    function V() {
      var m, P;
      return (P = (m = a.value).getValGroup) == null ? void 0 : P.call(m);
    }
    function C() {
      c.value = !0;
    }
    function x() {
      var m, P;
      n.hideCancelBt ? S() : (P = (m = a.value).submit) == null || P.call(m);
    }
    function O() {
      s.value = !0;
    }
    function S() {
      s.value = !1, Oe(() => {
        var m, P;
        c.value = !1, (P = (m = a.value).changeLoading) == null || P.call(m, !1);
      }, 1e3);
    }
    function B(m) {
      e(m ? "on-open" : "on-close");
    }
    return u({
      resetForm: b,
      refreshFormDom: d,
      reRenderForm: i,
      setItemToValGroup: v,
      updateValGroup: g,
      updateFormDataT: A,
      validate: y,
      reValidate: k,
      changeLoading: w,
      getValGroup: V,
      submit: x,
      open: O,
      close: S
    }), (m, P) => {
      const h = q("Button"), U = q("Modal");
      return L(), X(U, {
        class: Se(["formModal", { hideFooter: n.hideFooter }]),
        title: n.title || p(I)("r.title"),
        modelValue: p(s),
        "onUpdate:modelValue": P[0] || (P[0] = (F) => Ie(s) ? s.value = F : null),
        "mask-closable": !1,
        "footer-hide": n.hideFooter,
        width: n.width,
        onOnVisibleChange: B
      }, {
        footer: Y(() => [
          j(h, {
            onClick: x,
            class: "modal-save-btn",
            loading: n.btnLoading && p(c)
          }, {
            default: Y(() => [
              he(E(n.okBtTxt || p(I)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          n.hideCancelBt ? ue("", !0) : (L(), X(h, {
            key: 0,
            onClick: S,
            class: "modal-cancel-btn"
          }, {
            default: Y(() => [
              he(E(n.cancelBtTxt || p(I)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: Y(() => [
          j(yl, Ze({
            ref_key: "formRRef",
            ref: a
          }, m.$attrs, {
            "form-data": n.formData,
            "label-width": n.labelWidth,
            btnLoading: n.btnLoading,
            onOnSubmit: C
          }), Qe({ _: 2 }, [
            we(p(f), (F) => ({
              name: F.slotName,
              fn: Y(({ valGroup: G }) => [
                Te(m.$slots, F.slotName, { valGroup: G })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Qn = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = W(!0), a = W([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const f = D(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), b = D(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    ke(
      () => e.data,
      (y) => {
        n.value = !1;
        let k = [];
        d(y, k), a.value = k, Pe(function() {
          n.value = !0, e.inlineLeaf && Pe(g);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), ke(
      () => b.value,
      (y) => {
        let k, w = "s";
        if (Array.isArray(e.collectVal) ? (k = e.collectVal[0] || "", w = "a") : k = e.collectVal, !k || JSON.stringify(y) === JSON.stringify(c)) {
          c = [];
          return;
        }
        qe({
          group: a.value,
          condition: (V) => (V == null ? void 0 : V.checked) === !0,
          key: "checked",
          val: !1
        }), qe(w === "a" ? {
          group: a.value,
          condition: (V) => ft(y, [k, V == null ? void 0 : V[k]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: a.value,
          condition: (V) => y.indexOf(V == null ? void 0 : V[k]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), ke(
      () => e.disabled,
      (y) => {
        qe({
          group: a.value,
          condition: (k) => (k == null ? void 0 : k.disableCheckbox) !== y,
          key: "disableCheckbox",
          val: y
        }), e.inlineLeaf && Pe(g);
      },
      { immediate: !0 }
    );
    function d(y, k = []) {
      for (let w of y) {
        let V = !1;
        f.value.length > 1 ? V = Cl(b.value, (x) => x[f.value[0]] === w[f.value[0]]) !== void 0 : V = f.value[0] ? b.value.indexOf(w[f.value[0]]) !== -1 : !1;
        let C = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let x of f.value)
          C[x] = w[x];
        k.push(C), w != null && w.children && w.children.length > 0 && (C.children = [], i(w.children, C.children));
      }
    }
    function i(y, k = []) {
      for (let w of y) {
        let V = !1;
        f.value.length > 1 ? V = Cl(b.value, (x) => x[f.value[0]] === w[f.value[0]]) !== void 0 : V = f.value[0] ? b.value.indexOf(w[f.value[0]]) !== -1 : !1;
        let C = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let x of f.value)
          C[x] = w[x];
        k.push(C), w != null && w.children && w.children.length > 0 && (C.children = [], d(w.children, C.children));
      }
    }
    function v(y, {
      data: k
    }) {
      let w = "", V = !0;
      if (k.children && k.children.length > 0) {
        for (let C of k.children)
          if (C.children !== void 0) {
            V = !1;
            break;
          }
        V && e.inlineLeaf && (w = "inlineChildXA");
      }
      return y(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: w
        },
        [
          y(
            "span",
            {
              style: {
                fontWeight: k.children ? "bold" : "normal"
              }
            },
            k.name
          )
        ]
      );
    }
    function g(y) {
      if (y) {
        y.expand && Pe(g);
        return;
      }
      let k = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (k.length > 0)
        for (let w of k) {
          let V = w == null ? void 0 : w.parentElement, C = V == null ? void 0 : V.nextElementSibling;
          if (!C)
            return;
          if (C.tagName !== "BR") {
            let x = V == null ? void 0 : V.parentElement, O = document.createElement("br");
            x == null || x.insertBefore(O, C), C = O.nextElementSibling, (C == null ? void 0 : C.className.indexOf("inlineTreeNodeF")) === -1 && C.setAttribute("class", C.className + " inlineTreeNodeF");
          }
          for (; C != null && C.nextElementSibling; )
            C = C.nextElementSibling, C.className.indexOf("inlineTreeNodeF") === -1 && C.setAttribute("class", C.className + " inlineTreeNodeF");
        }
    }
    function A(y) {
      let k = [];
      if (e.leaf) {
        for (let w of y)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let V = {};
              for (let C of e.collectVal)
                V[C] = w[C];
              k.push(V);
            } else
              k.push(w[e.collectVal]);
      } else
        for (let w of y)
          if (Array.isArray(e.collectVal)) {
            let V = {};
            for (let C of e.collectVal)
              V[C] = w[C];
            k.push(V);
          } else
            k.push(w[e.collectVal]);
      c = k, o("update:modelValue", k), o("on-change", ie(k));
    }
    return (y, k) => {
      const w = q("Tree");
      return p(n) ? (L(), X(w, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: p(a),
        render: v,
        onOnCheckChange: A,
        onOnToggleExpand: g,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ue("", !0);
    };
  }
}), Zn = { class: "transferBoxRL" }, eo = { class: "leftBoxLLL" }, lo = { class: "fullHeight flexColumnBox" }, to = { class: "notGrow" }, ao = { class: "titleLLL" }, no = { class: "growFlexItem" }, oo = { class: "middleBoxLLL" }, io = { class: "rightBoxLLL" }, so = { class: "fullHeight flexColumnBox" }, ro = { class: "notGrow" }, uo = { class: "titleLLL" }, co = { class: "growFlexItem" }, fo = /* @__PURE__ */ de({
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
    addParamsHandle: { type: Function, default: (t) => t.map((u) => u == null ? void 0 : u.id) },
    deleteParamsHandle: { type: Function, default: (t) => t.map((u) => u == null ? void 0 : u.id) },
    addAllParamsHandle: { type: Function, default: (t) => t },
    deleteAllParamsHandle: { type: Function, default: (t) => t },
    addMethod: { default: "post" },
    addAllMethod: { default: "post" },
    deleteMethod: { default: "delete" },
    deleteAllMethod: { default: "delete" },
    searchFormLabelWith: {}
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: u, emit: o }) {
    const e = o, n = t;
    let a = W({}), s = W({}), c = W([]), f = W([]), b = W(0), d = W(0);
    const i = D(() => ({ ...n.constSearchDataLeft, ...a.value })), v = D(() => ({ ...n.constSearchDataRight, ...s.value })), g = D(() => b.value < 1), A = D(() => c.value.length < 1), y = D(() => f.value.length < 1), k = D(() => d.value < 1), w = W(), V = W(), C = W(), x = W();
    function O() {
      w.value.resetForm(), V.value.resetForm(), xe(a.value) || (a.value = {}), xe(s.value) || (s.value = {}), C.value.clearSelect(), x.value.clearSelect();
    }
    function S() {
      C.value.search(), x.value.search();
    }
    function B(J) {
      c.value = J;
    }
    function m(J) {
      f.value = J;
    }
    function P(J) {
      var pe, se, N, ae, ce;
      b.value = ((se = (pe = J == null ? void 0 : J.data) == null ? void 0 : pe.page) == null ? void 0 : se.total) || ((ae = (N = J == null ? void 0 : J.data) == null ? void 0 : N.data) == null ? void 0 : ae.total) || ((ce = J == null ? void 0 : J.data) == null ? void 0 : ce.total) || (J == null ? void 0 : J.total) || 0, e("on-data-change-l", J);
    }
    function h(J) {
      var pe, se, N, ae, ce;
      d.value = ((se = (pe = J == null ? void 0 : J.data) == null ? void 0 : pe.page) == null ? void 0 : se.total) || ((ae = (N = J == null ? void 0 : J.data) == null ? void 0 : N.data) == null ? void 0 : ae.total) || ((ce = J == null ? void 0 : J.data) == null ? void 0 : ce.total) || (J == null ? void 0 : J.total) || 0, e("on-data-change-r", J);
    }
    function U(J) {
      a.value = J;
    }
    function F(J) {
      s.value = J;
    }
    function G() {
      n.addUrl && Ae("add");
    }
    function Q() {
      n.deleteUrl && Ae("delete");
    }
    function ne() {
      n.addAllUrl && n.addUrl && Ae("addAll");
    }
    function ge() {
      n.deleteAllUrl && Ae("deleteAll");
    }
    function Ae(J) {
      let pe, se, N = {}, ae = "";
      switch (J) {
        case "add":
          pe = n.addMethod, se = n.addUrl, N = n.addParamsHandle(f.value), ae = I("r.add");
          break;
        case "delete":
          pe = n.deleteMethod, se = n.deleteUrl, N = n.deleteParamsHandle(c.value), ae = I("r.remove");
          break;
        case "addAll":
          pe = n.addAllMethod, se = n.addAllUrl, N = n.addAllParamsHandle(v.value), ae = I("r.addAll");
          break;
        case "deleteAll":
          pe = n.deleteAllMethod, se = n.deleteAllUrl, N = n.deleteAllParamsHandle(i.value), ae = I("r.removeAll");
          break;
      }
      se && pe && Re[pe](se, N, null, [], { spin: !0 }, !1).then((ce) => {
        (ce == null ? void 0 : ce.code) === 0 ? (Me(ae + I("r.success"), (ce == null ? void 0 : ce.message) || "", "success"), C.value && C.value.getTableData(), x.value && x.value.getTableData(), e("transferred")) : Me(ae + I("r.failed"), (ce == null ? void 0 : ce.message) || "", "error");
      }).catch(() => {
        Me(ae + I("r.error"), "", "error");
      });
    }
    return u({
      reset: O,
      search: S
    }), (J, pe) => {
      const se = q("Icon"), N = q("Button");
      return L(), K("div", Zn, [
        M("div", eo, [
          M("div", lo, [
            M("div", to, [
              M("div", ao, E(n.titleLeft || p(I)("r.added")), 1),
              j(Ll, null, {
                default: Y(() => [
                  j(Ul, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": n.formDataLeft,
                    "form-rules": n.formRulesLeft,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: U
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", no, [
              j(Pl, {
                ref_key: "lTabRef",
                ref: C,
                columns: n.leftTableColumns,
                url: n.leftTableUrl,
                "search-data": p(i),
                onOnSelectionChange: B,
                onOnDataChange: P,
                "init-data": !!(p(xe)(n.constSearchDataLeft) && n.leftTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ]),
        M("div", oo, [
          j(N, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: ge,
            disabled: p(g)
          }, {
            default: Y(() => [
              he(E(p(I)("r.removeAll")) + " ", 1),
              j(se, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(N, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Q,
            disabled: p(A)
          }, {
            default: Y(() => [
              he(E(p(I)("r.remove")) + " ", 1),
              j(se, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(N, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: G,
            disabled: p(y)
          }, {
            default: Y(() => [
              j(se, { type: "ios-arrow-back" }),
              he(" " + E(p(I)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(N, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: ne,
            disabled: p(k)
          }, {
            default: Y(() => [
              j(se, { type: "ios-arrow-back" }),
              he(" " + E(p(I)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        M("div", io, [
          M("div", so, [
            M("div", ro, [
              M("div", uo, E(n.titleRight || p(I)("r.notAdded")), 1),
              j(Ll, null, {
                default: Y(() => [
                  j(Ul, {
                    ref_key: "rightFormRef",
                    ref: V,
                    "form-data": n.formDataRight,
                    "form-rules": n.formRulesRight,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: F
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", co, [
              j(Pl, {
                ref_key: "rTabRef",
                ref: x,
                columns: n.rightTableColumns,
                url: n.rightTableUrl,
                "search-data": p(v),
                onOnSelectionChange: m,
                onOnDataChange: h,
                "init-data": !!(p(xe)(n.constSearchDataRight) && n.rightTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ])
      ]);
    };
  }
}), po = { class: "boxLPA" }, mo = { class: "headerJ" }, ho = { class: "firstT borderBoxAS" }, yo = { class: "secondT borderBoxAS" }, vo = { class: "firstCol borderBoxAS" }, go = { class: "secondCol borderBoxAS" }, bo = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = t, e = u, n = W([]), a = D(() => {
      var i;
      let b = ie(o.data), d = ie(n.value);
      for (let v of b) {
        let g = 0;
        if (v != null && v.children && !xe(v.children))
          for (let A of v.children) {
            for (let y = 0, k = d == null ? void 0 : d.length; y < k; y++)
              if (Array.isArray(o.collectVal)) {
                let w = !0;
                for (let V of o.collectVal)
                  if (((i = d[y]) == null ? void 0 : i[V]) !== (A == null ? void 0 : A[V])) {
                    w = !1;
                    break;
                  }
                if (w) {
                  A.checked = !0, g++, d.splice(y, 1);
                  break;
                }
              } else if (d[y] === A[o.collectVal]) {
                A.checked = !0, g++, d.splice(y, 1);
                break;
              }
            !A.checked && (A.checked = !1);
          }
        g === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && g === v.children.length ? (v.checked = !0, v.indeterminate = !1) : (v.checked = !1, v.indeterminate = !0);
      }
      return b;
    });
    ke(
      () => o.modelValue,
      (b, d) => {
        nl(n.value, b) || nl(b, d) || (n.value = b);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(b, d) {
      if (b.children)
        for (let i of b.children)
          i.checked = d;
      c();
    }
    function c() {
      f(a.value, !0);
    }
    function f(b, d) {
      let i = [];
      for (let v of b) {
        if (!d && !o.leaf && v.checked && v.indeterminate === !1)
          if (Array.isArray(o.collectVal)) {
            let g = {};
            for (let A of o.collectVal)
              g[A] = v[A];
            i.push(g);
          } else
            z(o.collectVal) === "String" && i.push(v[o.collectVal]);
        if (v.children) {
          for (let g of v.children)
            if (g.checked)
              if (Array.isArray(o.collectVal)) {
                let A = {};
                for (let y of o.collectVal)
                  A[y] = g[y];
                i.push(A);
              } else
                z(o.collectVal) === "String" && i.push(g[o.collectVal]);
        }
      }
      d ? (n.value = i, o.leaf ? (e("update:modelValue", i), e("on-change", ie(i))) : Pe(function() {
        f(a.value);
      })) : (e("update:modelValue", i), e("on-change", ie(i)));
    }
    return (b, d) => {
      const i = q("Checkbox");
      return L(), K("div", po, [
        M("div", mo, [
          M("div", ho, E(b.firstTitle || p(I)("r.level.1")), 1),
          M("div", yo, E(b.secondTitle || p(I)("r.level.2")), 1)
        ]),
        (L(!0), K(ye, null, we(p(a), (v, g) => (L(), K("div", {
          class: "bodyJ",
          key: "checkboxJ" + g
        }, [
          M("div", vo, [
            j(i, {
              modelValue: v.checked,
              "onUpdate:modelValue": (A) => v.checked = A,
              indeterminate: v.indeterminate,
              onOnChange: (A) => s(v, A),
              disabled: b.disabled
            }, {
              default: Y(() => [
                he(E(v[b.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", go, [
            (L(!0), K(ye, null, we(v.children, (A, y) => (L(), K("div", {
              class: "secItem",
              key: "secItem" + y
            }, [
              j(i, {
                modelValue: A.checked,
                "onUpdate:modelValue": (k) => A.checked = k,
                onOnChange: c,
                disabled: b.disabled
              }, {
                default: Y(() => [
                  he(E(A[b.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), ko = { class: "boxLPB" }, wo = { class: "headerF" }, _o = { class: "firstT borderBoxKa" }, Vo = { class: "secondT borderBoxKa" }, Co = { class: "thirdT borderBoxKa" }, Ao = { class: "firstCol borderBoxKa" }, Bo = { class: "rightBoxAL" }, So = { class: "secondCol borderBoxKa" }, xo = { class: "thirdCol borderBoxKa" }, To = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t, n = W([]), a = D(() => {
      let d = ie(e.data), i = ie(n.value);
      for (let v of d) {
        let g = 0, A = 0;
        if (v != null && v.children && !xe(v.children))
          for (let y of v.children) {
            let k = 0;
            if (y.children && !xe(y.children))
              for (let w of y.children) {
                for (let V = 0, C = i.length; V < C; V++)
                  if (Array.isArray(e.collectVal)) {
                    let x = !0;
                    for (let O of e.collectVal)
                      if (i[V][O] !== w[O]) {
                        x = !1;
                        break;
                      }
                    if (x) {
                      w.checked = !0, k++, i.splice(V, 1);
                      break;
                    }
                  } else if (i[V] === w[e.collectVal]) {
                    w.checked = !0, k++, i.splice(V, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            k === 0 ? (y.checked = !1, y.indeterminate = !1) : y.children && k === y.children.length ? (y.checked = !0, y.indeterminate = !1, g++) : (y.checked = !1, y.indeterminate = !0, A++);
          }
        g === 0 && A === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && g === v.children.length ? (v.checked = !0, v.indeterminate = !1) : (v.checked = !1, v.indeterminate = !0);
      }
      return d;
    });
    ke(
      () => e.modelValue,
      (d, i) => {
        nl(n.value, d) || nl(d, i) || (n.value = d);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(d, i) {
      if (d.children) {
        for (let v of d.children)
          if (v.checked = i, v.children)
            for (let g of v.children)
              g.checked = i;
      }
      f();
    }
    function c(d, i) {
      if (d.children)
        for (let v of d.children)
          v.checked = i;
      f();
    }
    function f() {
      b(a.value, !0);
    }
    function b(d, i) {
      let v = [];
      for (let g of d) {
        if (!i && !e.leaf && (g != null && g.checked) && g.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let A = {};
            for (let y of e.collectVal)
              A[y] = g[y];
            v.push(A);
          } else
            z(e.collectVal) === "String" && v.push(g[e.collectVal]);
        if (g != null && g.children)
          for (let A of g.children) {
            if (!i && !e.leaf && A.checked && A.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let y = {};
                for (let k of e.collectVal)
                  y[k] = A[k];
                v.push(y);
              } else
                z(e.collectVal) === "String" && v.push(A[e.collectVal]);
            if (A.children) {
              for (let y of A.children)
                if (y.checked)
                  if (Array.isArray(e.collectVal)) {
                    let k = {};
                    for (let w of e.collectVal)
                      k[w] = y[w];
                    v.push(k);
                  } else
                    z(e.collectVal) === "String" && v.push(y[e.collectVal]);
            }
          }
      }
      i ? (n.value = v, e.leaf ? (o("update:modelValue", v), o("on-change", ie(v))) : Pe(function() {
        b(a.value);
      })) : (o("update:modelValue", v), o("on-change", ie(v)));
    }
    return (d, i) => {
      const v = q("Checkbox");
      return L(), K("div", ko, [
        M("div", wo, [
          M("div", _o, E(d.firstTitle || p(I)("r.level.1")), 1),
          M("div", Vo, E(d.secondTitle || p(I)("r.level.2")), 1),
          M("div", Co, E(d.thirdTitle || p(I)("r.level.3")), 1)
        ]),
        (L(!0), K(ye, null, we(p(a), (g, A) => (L(), K("div", {
          class: "bodyF",
          key: "checkboxJ" + A
        }, [
          M("div", Ao, [
            j(v, {
              modelValue: g.checked,
              "onUpdate:modelValue": (y) => g.checked = y,
              indeterminate: g.indeterminate,
              onOnChange: (y) => s(g, y),
              disabled: d.disabled
            }, {
              default: Y(() => [
                he(E(g[d.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", Bo, [
            (L(!0), K(ye, null, we(g.children, (y, k) => (L(), K("div", {
              class: "rightBoxInner",
              key: "secItem" + k
            }, [
              M("div", So, [
                j(v, {
                  modelValue: y.checked,
                  "onUpdate:modelValue": (w) => y.checked = w,
                  indeterminate: y.indeterminate,
                  onOnChange: (w) => c(y, w),
                  disabled: d.disabled
                }, {
                  default: Y(() => [
                    he(E(y[d.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              M("div", xo, [
                (L(!0), K(ye, null, we(y.children, (w, V) => (L(), K("div", {
                  class: "thirdItem",
                  key: "thirdItem" + V
                }, [
                  j(v, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (C) => w.checked = C,
                    onOnChange: f,
                    disabled: d.disabled
                  }, {
                    default: Y(() => [
                      he(E(w[d.label]), 1)
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
}, Mo = { class: "btsF" }, Po = { class: "growFlexItem relativeBox" }, Fo = { class: "fullFlowContent" }, Uo = /* @__PURE__ */ de({
  __name: "WellCard",
  props: {
    title: {},
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, o = D(() => {
      let e = {
        width: u.width,
        height: u.height
      };
      u.inline && (e.display = "inline-block");
      for (let n in e)
        e.hasOwnProperty(n) && typeof e[n] == "number" && e[n] > 0 && (e[n] += "px");
      return e;
    });
    return (e, n) => (L(), K("div", {
      style: le(p(o))
    }, [
      M("div", Lo, [
        M("div", Io, [
          M("div", Oo, E(u.title || p(I)("r.title")), 1),
          M("div", Mo, [
            Te(e.$slots, "bts")
          ])
        ]),
        M("div", Po, [
          M("div", Fo, [
            Te(e.$slots, "default")
          ])
        ])
      ])
    ], 4));
  }
}), $o = /* @__PURE__ */ de({
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
  setup(t, { emit: u }) {
    const o = u, e = t;
    let n = W(1), a = 1;
    const s = W(""), c = ul([]);
    let f = {}, b = !0, d = !1;
    const i = "scm" + Math.random(), v = D(() => s.value ? I("r.searchFor") + s.value : e.placeholder || I("r.pInput")), g = D({
      get() {
        return e.modelValue ?? "";
      },
      set(S) {
        if (o("update:modelValue", S ?? ""), e.collectLabel && S !== void 0) {
          let B = {};
          for (let m of c.value)
            if (m[e.optionsValKey] === S) {
              B = JSON.parse(JSON.stringify(m));
              break;
            }
          o("on-change", B);
        }
      }
    }), A = D(() => e.searchKey ? {
      ...e.searchData,
      current: n.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: n.value
    });
    ke(
      () => e.getOptions,
      (S) => {
        S ? b && O() : w();
      },
      { immediate: !0 }
    ), ke(
      () => e.url,
      (S) => {
        S && (d = !0);
      }
    );
    const y = W();
    function k() {
      y.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", C);
    }
    function w() {
      b || (g.value = "", b = !0, s.value = "", c.value = [], n.value = 1, a = 1, f = {}, d = !1);
    }
    function V(S) {
      for (let B of c.value)
        if ((B == null ? void 0 : B.label) === S)
          return !0;
      return !1;
    }
    const C = ct(function(S) {
      var m;
      const B = (m = S == null ? void 0 : S.target) == null ? void 0 : m.value;
      V(B) || (Ve(B) ? (d ? w() : (xe(f) && (f.current = n.value, f.pages = a, f.options = ie(c.value)), Ve(g.value) && (g.value = "")), s.value = String(B), c.value = [], n.value = 1, b = !0, O()) : d ? (w(), O()) : (g.value = "", s.value = "", f.current ? (n.value = f.current, a = f.pages, c.value = ie(f.options), f = {}) : O()));
    }, 600);
    function x() {
      d && w(), n.value < a ? (++n.value, Pe(function() {
        O();
      })) : Ql.warning({
        background: !0,
        content: I("r.noMore")
      });
    }
    function O() {
      return new Promise((S, B) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Ve(s.value)) {
            S(!1);
            return;
          }
          Re.get(e.url, A.value).then((m) => {
            var U;
            b = !1;
            let P = [];
            (U = m == null ? void 0 : m.data) != null && U.records ? (P = m.data.records, a = m.data.pages) : m != null && m.data && z(m.data) === "Array" ? (P = m.data, a = m.pages) : m != null && m.data && z(m.data) === "Object" && (P = [m.data], a = 1), typeof e.optionFilter == "function" && z(e.optionFilter) === "Function" && (P = e.optionFilter(P)), xe(P) || (P = P.map((F, G) => {
              let Q = I("r.optionLabel") + G;
              if (Array.isArray(e.optionsLabelKey)) {
                let ne = [];
                for (let ge = 1, Ae = e.optionsLabelKey.length; ge < Ae; ge++)
                  ne.push(F[e.optionsLabelKey[ge]]);
                Q = `${F[e.optionsLabelKey[0]]}(${String(ne)})`;
              } else
                Kl(e.optionsLabelKey) && (Q = F[e.optionsLabelKey]);
              if (e.collectLabel) {
                let ne = ie(F);
                return delete ne.value, delete ne.label, {
                  value: F[e.optionsValKey],
                  label: Q,
                  ...ne
                };
              }
              return {
                value: F[e.optionsValKey],
                label: Q
              };
            })), c.value.push(...P);
            let h = {};
            c.value = c.value.filter((F) => h[F == null ? void 0 : F.value] ? !1 : (h[F == null ? void 0 : F.value] = !0, !0)), Pe(function() {
              o("update-option-finish");
            }), S(!0);
          }).catch(() => {
            Ql.error(I("r.getDataError")), B(I("r.getDataError"));
          });
        } else
          S(!1);
      });
    }
    return De(k), (S, B) => {
      const m = q("Option"), P = q("Select"), h = $l("loadmore");
      return fe((L(), X(P, Ze({
        modelValue: p(g),
        "onUpdate:modelValue": B[0] || (B[0] = (U) => Ie(g) ? g.value = U : null),
        ref_key: "selectScrollSourceRef",
        ref: y,
        "transfer-class-name": i
      }, S.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(v),
        disabled: S.disabled
      }), {
        default: Y(() => [
          (L(!0), K(ye, null, we(p(c), (U, F) => (L(), X(m, {
            key: "op" + F,
            value: U == null ? void 0 : U.value,
            label: U == null ? void 0 : U.label,
            disabled: U == null ? void 0 : U.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [h, x, i]
      ]);
    };
  }
}), it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: It,
  AsyncCascader: Lt,
  BtTablePage: Pl,
  CheckboxGroupThreeClass: To,
  CheckboxGroupTwoClass: bo,
  CheckboxTree: Qn,
  EditorPro: Pt,
  FormGroup: Yn,
  FormModal: Xn,
  FormR: yl,
  FullPop: wa,
  HeaderBt: ht,
  Hello: Va,
  IconTxtBtn: Bl,
  InputMap: Tt,
  MonthRange: Mt,
  Page404: xa,
  PagePro: Bt,
  SearchForm: Ul,
  SelectInput: St,
  SelectScrollMore: $o,
  ShowHidePanel: Ll,
  ShowHidePanelB: en,
  SideMenu: qa,
  TableIconBtn: Vt,
  TableSearch: an,
  TableSetting: Ct,
  TransferBox: fo,
  UploadGroup: Ot,
  WellCard: Uo
}, Symbol.toStringTag, { value: "Module" })), Ko = { class: "a4Line aL notPrint" }, Ro = { class: "a4Line aR notPrint" }, Do = { class: "a4Line bL notPrint" }, No = { class: "a4Line bR notPrint" }, Eo = { class: "topsL notPrint" }, zo = { class: "topsLTitle" }, Go = { class: "topsLBtn" }, Ho = { class: "topsLHelp" }, Wo = { key: 0 }, jo = /* @__PURE__ */ M("span", null, "1. ", -1), Jo = { key: 1 }, qo = /* @__PURE__ */ M("span", null, "2. ", -1), Yo = { key: 2 }, Xo = /* @__PURE__ */ M("span", null, "1. ", -1), Qo = ["innerHTML"], Zo = /* @__PURE__ */ de({
  __name: "PrintModal",
  setup(t) {
    const u = pt(), o = W(), e = W(!1), n = W(!1), a = W(!1), s = W(715), c = W(!1), f = W(), b = "tablePrint_" + Date.now().toString(), d = W(""), i = W([]), v = W([]), g = W(!1), A = D(() => ({
      width: s.value + "px"
    })), y = () => {
      f.value && window.sessionStorage.removeItem("print_" + f.value), window.sessionStorage.removeItem(b), window.close();
    }, k = () => {
      c.value && (c.value = !1);
    }, w = () => {
      g.value = !0;
    }, V = (S) => {
      g.value && (s.value = (S == null ? void 0 : S.layerX) - 20);
    }, C = () => {
      g.value && (g.value = !1);
    }, x = () => {
      c.value = !1;
      let S = window.setTimeout(() => {
        window.clearTimeout(S), window.print();
      }, 100);
    }, O = () => {
      var S, B, m, P, h;
      if (f.value = (S = u == null ? void 0 : u.params) == null ? void 0 : S.isFrom, f.value) {
        let U = window.sessionStorage.getItem("print_" + f.value);
        if (U) {
          const F = JSON.parse(U);
          if (!F) {
            e.value = !0;
            return;
          }
          i.value = F.columns, v.value = F.data, o.value = F.title, d.value = ((B = F == null ? void 0 : F.config) == null ? void 0 : B.customClass) || "", n.value = ((m = F == null ? void 0 : F.config) == null ? void 0 : m.domPrint) || !1, a.value = ((P = F == null ? void 0 : F.config) == null ? void 0 : P.autoPrint) || !1, s.value = ((h = F == null ? void 0 : F.config) == null ? void 0 : h.width) || 715, document.title = (o.value || I("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return De(() => {
      if (a.value) {
        let S = window.setTimeout(() => {
          window.clearTimeout(S), x();
        }, 100);
      }
      document.addEventListener("click", k), document.addEventListener("mousemove", V), document.addEventListener("mouseup", C);
    }), O(), (S, B) => {
      const m = q("Table");
      return L(), K("div", {
        class: Se(["tablePrintModal", [p(d)]])
      }, [
        fe(M("div", { class: "msgL notPrint" }, E(p(I)("r.printGuide.9")), 513), [
          [me, p(e)]
        ]),
        fe(M("div", Ko, [
          M("p", null, E(p(I)("r.printGuide.7")), 1),
          he(),
          M("p", null, E(p(I)("r.printGuide.5")), 1)
        ], 512), [
          [me, !p(e)]
        ]),
        fe(M("div", Ro, [
          M("p", null, E(p(I)("r.printGuide.7")), 1),
          he(),
          M("p", null, E(p(I)("r.printGuide.6")), 1)
        ], 512), [
          [me, !p(e)]
        ]),
        fe(M("div", Do, [
          M("p", null, E(p(I)("r.printGuide.8")), 1),
          he(),
          M("p", null, E(p(I)("r.printGuide.5")), 1)
        ], 512), [
          [me, !p(e)]
        ]),
        fe(M("div", No, [
          M("p", null, E(p(I)("r.printGuide.8")), 1),
          he(),
          M("p", null, E(p(I)("r.printGuide.6")), 1)
        ], 512), [
          [me, !p(e)]
        ]),
        fe(M("div", Eo, [
          M("div", zo, E(p(o) || p(I)("r.print")), 1),
          M("div", Go, [
            j(Bl, {
              icon: "md-help-circle",
              name: p(I)("r.help"),
              onClick: B[0] || (B[0] = _l((P) => c.value = !p(c), ["stop"]))
            }, null, 8, ["name"]),
            j(Bl, {
              icon: "md-print",
              name: p(I)("r.preview"),
              onClick: x
            }, null, 8, ["name"]),
            p(n) ? ue("", !0) : (L(), X(Ct, {
              key: 0,
              modelValue: p(i),
              "onUpdate:modelValue": B[1] || (B[1] = (P) => Ie(i) ? i.value = P : null),
              "s-key": b,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            j(Vt, {
              icon: "md-close",
              onClick: y,
              title: p(I)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(M("div", Ho, [
            p(n) ? ue("", !0) : (L(), K("p", Wo, [
              jo,
              M("span", null, E(p(I)("r.printGuide.1")), 1)
            ])),
            p(n) ? ue("", !0) : (L(), K("p", Jo, [
              qo,
              M("span", null, E(p(I)("r.printGuide.2")), 1)
            ])),
            p(n) ? (L(), K("p", Yo, [
              Xo,
              M("span", null, E(p(I)("r.printGuide.10")), 1)
            ])) : ue("", !0),
            M("p", null, [
              M("span", null, E(p(n) ? "2. " : "3. "), 1),
              M("span", null, E(p(I)("r.printGuide.3")), 1)
            ]),
            M("p", null, [
              M("span", null, E(p(n) ? "3. " : "4. "), 1),
              M("span", null, E(p(I)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [me, p(c)]
          ])
        ], 512), [
          [me, !p(e)]
        ]),
        p(n) ? (L(), K("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: le(p(A))
        }, [
          M("div", {
            class: "settingLine",
            onMousedown: _l(w, ["stop"])
          }, null, 32)
        ], 4)) : ue("", !0),
        p(n) ? (L(), K("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(v),
          style: le(p(A))
        }, null, 12, Qo)) : ue("", !0),
        p(n) ? ue("", !0) : fe((L(), X(m, {
          key: 2,
          class: "tablePW",
          columns: p(i),
          data: p(v),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [me, !p(e)]
        ])
      ], 2);
    };
  }
});
let Ge = null;
function st() {
  document.documentElement.style.setProperty("overflow", "auto");
  const u = document.createElement("style");
  u.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(u);
}
function ei(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Zo
  })), Ge = t, location.pathname.indexOf("tablePrint") > -1 ? (Ge.push(location.pathname), st()) : location.hash.indexOf("tablePrint") > -1 && (Ge.push(location.hash.replace(/^#/, "")), st());
}
function Ft(t) {
  return z(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && z(t.children) === "Array" && (t.children = t.children.map(Ft))), t;
}
function li(t, u, o, e) {
  var b, d, i;
  if (!Ge)
    return;
  let n;
  if (!(e != null && e.domPrint)) {
    let v = ie(
      t.filter((g) => (g == null ? void 0 : g.key) || (g == null ? void 0 : g.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? n = v.map(Ft) : n = [];
  }
  let a = (d = (b = Ge == null ? void 0 : Ge.currentRoute) == null ? void 0 : b.value) == null ? void 0 : d.fullPath;
  a && (a = (i = a.replace) == null ? void 0 : i.call(a, /\//g, "_"));
  let s = {
    data: u,
    title: o,
    config: e
  };
  e != null && e.domPrint || (s.columns = n), window.sessionStorage.setItem("print_" + a, JSON.stringify(s));
  const c = Ge.resolve({
    name: "tablePrint",
    params: { isFrom: a }
  });
  window.open(c == null ? void 0 : c.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const Rl = {
  print: li,
  init: ei
};
function ti(t = "", u = "", o = {}) {
  o.domPrint = !0, o.width || (o.width = 715), Rl.print([], t, u, o);
}
function ai(t) {
  const u = (...a) => Ne.apply(this, a), o = u("r.closePreview"), e = u("r.fullImg");
  let n = "previewImg" + Math.floor(Math.random() * 1e7);
  ze.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (a) => Ce(
      "div",
      {
        class: "previewModal",
        id: n
      },
      [
        Ce(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Ce("img", {
              src: t,
              alt: e
            }),
            Ce(oa, {
              type: "md-close",
              size: 20,
              title: o,
              class: "previewModalDelete",
              onClick() {
                ze.remove();
              }
            })
          ]
        )
      ]
    )
  }), Oe(() => {
    var c, f, b, d, i, v;
    const a = (d = (b = (f = (c = document.getElementById(n)) == null ? void 0 : c.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : b.parentElement) == null ? void 0 : d.parentElement, s = (v = (i = document.getElementById(n)) == null ? void 0 : i.parentElement) == null ? void 0 : v.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), s && (s.style.display = "none");
  }, 10);
}
function ni(t, u, o, e) {
  const n = (...a) => Ne.apply(this, a);
  Me.call(this, {
    title: t || n("r.info.title"),
    text: u || n("r.info.text"),
    icon: o || "warning",
    onOk: e,
    buttons: [n("r.cancel")]
  });
}
const oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: Re,
  $swal: Me,
  $swalConfirm: ni,
  domPrint: ti,
  fullScreenImgByDom: Je,
  fullScreenImgPreview: ai,
  messageBox: Ml,
  setInterval: tn,
  setTimeout: Oe,
  tablePrint: Rl
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      ll(this, "title");
      ll(this, "iconSvg");
      ll(this, "tag");
      ll(this, "alwaysEnable");
      this.title = Ne("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var f, b, d, i, v, g, A, y, k;
      const n = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, s = localStorage.getItem("editorPreviewH") || 500;
      const c = (f = e == null ? void 0 : e.getHtml) == null ? void 0 : f.call(e);
      if (n) {
        let w = (g = (v = (i = (d = (b = n.children) == null ? void 0 : b[0]) == null ? void 0 : d.children) == null ? void 0 : i[1]) == null ? void 0 : v.children) == null ? void 0 : g[0], V = (k = (y = (A = n.children) == null ? void 0 : A[0]) == null ? void 0 : y.children) == null ? void 0 : k[1];
        w && (w.innerHTML = c, w.style.width = a + "px"), V && (V.style.height = s + "px"), n.style.display = "block";
      } else {
        const w = document.body, V = document.createElement("div");
        V.setAttribute("id", "editor-preview"), V.setAttribute("class", "editor-preview-mask"), V.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${s}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let C = V.children[0].children[1], x = V.children[0].children[1].children[0], O = V.children[0].children[0].children[0].children[1];
        const S = 40, B = 70, m = (F) => {
          var ne;
          if ((F == null ? void 0 : F.type) === "keyup") {
            let ge = !1;
            if (F.key && (ge = F.key !== "Enter"), ge)
              return;
          }
          let G = (ne = F == null ? void 0 : F.target) == null ? void 0 : ne.value;
          if (G = Number(G), x.style && x.style.width === G + "px")
            return;
          const Q = w.clientWidth;
          G < 250 ? (G = 250, F.target.value = 250) : G > Q - S && (G = Q - S, F.target.value = Q - S), x.style.width = G + "px", localStorage.setItem("editorPreviewW", G);
        };
        O.addEventListener("blur", m), O.addEventListener("keyup", m);
        let P = V.children[0].children[0].children[0].children[3];
        const h = (F) => {
          var ne;
          if ((F == null ? void 0 : F.type) === "keyup") {
            let ge = !1;
            if (F.key && (ge = F.key !== "Enter"), ge)
              return;
          }
          let G = (ne = F == null ? void 0 : F.target) == null ? void 0 : ne.value;
          if (G = Number(G), C.style && C.style.height === G + "px")
            return;
          const Q = w.clientHeight;
          G < 300 ? (G = 300, F.target.value = 300) : G > Q - B && (G = Q - B, F.target.value = Q - B), C.style.height = G + "px", localStorage.setItem("editorPreviewH", G);
        };
        P.addEventListener("blur", h), P.addEventListener("keyup", h), V.children[0].children[0].children[1].addEventListener("click", () => {
          V.style.display = "none";
        }), x.innerHTML = c, x.style.width = a + "px", C.style.height = s + "px", w.append(V);
      }
    }
  }
  const u = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  da.registerMenu(u), window.wangeditorMenuInit = !0;
})();
const Ci = fl.use, Ai = fl.i18n, rt = {
  ...oi,
  ...Ga
}, ii = function(t, u = {}) {
  Re.init(u.useStore || u.store, t), t.use(ca), u.locale && fl.use(u.locale), u.i18n && fl.i18n(u.i18n), u.router && (ln(u.router), Rl.init(u.router)), u.amap && wn(u.amap), u.notRegistryGlobal || (Object.keys(it).forEach((o) => {
    t.component(o) || t.component(o, it[o]);
  }), Object.keys(rt).forEach((o) => {
    t.config.globalProperties[o] = rt[o];
  })), t.directive("has") || t.directive("has", (o, e) => {
    e.value && !kt(e.value) && (o.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(o, e) {
      var a;
      let n = o;
      e.arg && (n = (a = document.getElementsByClassName(e.arg)) == null ? void 0 : a[0]), n && n.addEventListener("scroll", function() {
        n.scrollTop > 0 && n.scrollHeight - n.scrollTop <= n.clientHeight && e.value();
      });
    }
  }), t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.btTablePageUsePagePro = !1, t.config.globalProperties.tableSettingBg = "#fff";
}, Bi = { install: ii };
export {
  Re as $fetch,
  Me as $swal,
  ni as $swalConfirm,
  It as AlCascaderMC,
  Lt as AsyncCascader,
  Pl as BtTablePage,
  To as CheckboxGroupThreeClass,
  bo as CheckboxGroupTwoClass,
  Qn as CheckboxTree,
  Pt as EditorPro,
  Yn as FormGroup,
  Xn as FormModal,
  yl as FormR,
  wa as FullPop,
  ht as HeaderBt,
  Va as Hello,
  Bl as IconTxtBtn,
  Tt as InputMap,
  Mt as MonthRange,
  xa as Page404,
  Bt as PagePro,
  Ul as SearchForm,
  St as SelectInput,
  $o as SelectScrollMore,
  Ll as ShowHidePanel,
  en as ShowHidePanelB,
  qa as SideMenu,
  Vt as TableIconBtn,
  an as TableSearch,
  Ct as TableSetting,
  fo as TransferBox,
  Ot as UploadGroup,
  Uo as WellCard,
  xl as clearObj,
  Ea as dataFilterOrToUrl,
  Ua as decimalDigitsLimit,
  Bi as default,
  ti as domPrint,
  gt as downloadFileByFormSubmit,
  La as downloadFileReaderFile,
  _i as emptyInput,
  Ia as fakeALinkClick,
  $a as fileExport,
  je as findCollection,
  Sl as findPath,
  Ma as formDataHeadConfig,
  Je as fullScreenImgByDom,
  ai as fullScreenImgPreview,
  Ka as getColumnsKeys,
  kl as getFileSrc,
  yt as getFileTypeByName,
  lt as getFileTypeIconByName,
  Oa as getStringWidth,
  kt as hasPermission,
  wi as htmlDecode,
  ki as htmlEncode,
  za as htmlPrint,
  Ai as i18n,
  ii as install,
  Da as isEmptyValue,
  wl as isImgByFile,
  wt as isNaN,
  Ra as isNumberValue,
  Ve as isValidValue,
  Ci as locale,
  Ml as messageBox,
  z as myTypeof,
  Fa as oneOf,
  Tl as removeEmptyValue,
  tn as setInterval,
  Oe as setTimeout,
  qe as setValByOption,
  _t as siblingElems,
  Vi as stopBubbling,
  Na as stringLength,
  Rl as tablePrint,
  Pa as toFormData,
  Ta as toHump,
  vt as toLine,
  bt as tooltipManual,
  pl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
