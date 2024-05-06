var Et = Object.defineProperty;
var Gt = (t, r, o) => r in t ? Et(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[r] = o;
var nl = (t, r, o) => (Gt(t, typeof r != "symbol" ? r + "" : r, o), o);
import { getCurrentInstance as gl, defineComponent as ue, resolveComponent as J, openBlock as B, createElementBlock as M, normalizeClass as Be, normalizeStyle as te, createBlock as X, createCommentVNode as se, renderSlot as Oe, ref as W, computed as N, withDirectives as fe, unref as p, createElementVNode as P, toDisplayString as U, createVNode as j, withCtx as Y, createTextVNode as ve, vShow as ye, resolveDirective as Ul, h as Ve, Fragment as ge, renderList as _e, onBeforeMount as Ht, watch as we, nextTick as Re, isRef as Pe, onMounted as Ne, withModifiers as Tl, mergeProps as tl, onUnmounted as Wt, shallowRef as fl, triggerRef as jt, onBeforeUnmount as qt, createSlots as ll } from "vue";
import Jt from "deepmerge";
import { isObject as Yt, isFunction as Xt, isPlainObject as el, cloneDeep as ie, isEmpty as xe, debounce as mt, isNumber as sl, isString as Nl, last as pl, isEqual as rl, first as Bl, find as xl, indexOf as Zl, findIndex as ht, remove as Qt } from "lodash-es";
import dl from "sweetalert";
import { Tooltip as Zt, Modal as He, Button as Vl, TableColumnConfig as ea, Radio as la, Input as ta, Message as et, Icon as aa } from "view-ui-plus";
import { useRouter as na, useRoute as yt } from "vue-router";
import Ll from "axios";
import lt from "@amap/amap-jsapi-loader";
import oa from "ar-cascader";
import { Toolbar as ia, Editor as sa } from "@wangeditor/editor-for-vue";
import ol from "moment";
import { Boot as ra } from "@wangeditor/editor";
import ua from "vue-json-viewer";
const vt = {
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
    page: "条/页",
    total: "共",
    items: "条",
    notSave: "您未保存，是否保存？"
  }
}, da = /(%|){([0-9a-zA-Z_]+)}/g;
function ca() {
  function t(o, e) {
    return Object.prototype.hasOwnProperty.call(o, e);
  }
  function r(o, ...e) {
    let n;
    return e.length === 1 && typeof e[0] == "object" && (n = e[0]), (!n || !n.hasOwnProperty) && (n = {}), o === void 0 ? "" : o.replace(da, (a, s, f, d) => {
      let y;
      return o[d - 1] === "{" && o[d + a.length] === "}" ? f : (y = t(n, f) ? n[f] : null, y ?? "");
    });
  }
  return r;
}
const fa = ca();
let ml = vt;
const pa = {
  zh: vt
};
let tt, at = {}, Ie, ma = function(t, r) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, r);
  if (Ie && Ie.global)
    return Ie.global.t(t, r);
  if (Ie && Ie.locale) {
    if (!at[Ie.locale] || tt != Ie.locale) {
      at[Ie.locale] = !0;
      let o = Ie.getLocaleMessage(Ie.locale) || {}, e = Jt(pa[Ie.locale], o, { clone: !0 });
      ml = e, Ie.setLocaleMessage(Ie.locale, e), tt = Ie.locale;
    }
    return Ie.hlang(t, r);
  }
};
const Ee = function(t, r) {
  let o = ma.apply(this, [t, r]);
  if (o != null)
    return o;
  const e = t.split(".");
  let n = ml;
  for (let a = 0, s = e.length; a < s; a++) {
    const f = e[a];
    if (o = n[f], a === s - 1)
      return fa(o, r);
    if (!o)
      return "";
    n = o;
  }
  return "";
}, ha = function(t) {
  ml = t || ml;
}, ya = function(t) {
  Ie = t;
}, hl = {
  use: ha,
  t: Ee,
  i18n: ya
};
function L(t, r) {
  var e, n, a;
  const o = (a = (n = (e = gl()) == null ? void 0 : e.appContext) == null ? void 0 : n.config) == null ? void 0 : a.globalProperties;
  return Ee.apply(o, [t, r]);
}
const gt = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = t, e = r;
    function n() {
      o.disabled || e("click");
    }
    return (a, s) => {
      const f = J("Icon");
      return B(), M("div", {
        class: Be({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: te({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: n
      }, [
        o.icon ? (B(), X(f, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : se("", !0),
        Oe(a.$slots, "default")
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
  setup(t, { expose: r, emit: o }) {
    const e = t, n = o;
    let a = W(!1);
    const s = N(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), f = N(() => ({ zIndex: e.zIndex }));
    function d() {
      a.value = !0, n("on-open");
    }
    function y(u) {
      a.value = !1, n("on-close", u === !0);
    }
    return r({
      open: d,
      close: y
    }), (u, c) => fe((B(), M("div", {
      class: "fullScreenPopBoxAM",
      style: te(p(f))
    }, [
      P("div", {
        class: "headerAM",
        style: te({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(s) })
      }, [
        P("span", va, U(u.title || p(L)("r.title")), 1),
        j(gt, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: Y(() => [
            ve(U(p(L)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      P("div", ga, [
        Oe(u.$slots, "default")
      ])
    ], 4)), [
      [ye, p(a)]
    ]);
  }
}), ka = { class: "msg" }, wa = /* @__PURE__ */ ue({
  __name: "Hello",
  setup(t) {
    let r = W("Greetings from Ricky.");
    return (o, e) => (B(), M("span", ka, U(p(r)), 1));
  }
});
function Le() {
  const { appContext: t } = gl();
  return t.config.globalProperties;
}
const Ol = /* @__PURE__ */ ue({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Le().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const o = t, e = r, n = N(() => Math.floor(o.size / 17 * 12) + "px");
    function a(s) {
      o.disabled || e("click", s);
    }
    return (s, f) => {
      const d = J("Icon"), y = Ul("has");
      return fe((B(), M("div", {
        class: Be(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: a,
        style: te({ "font-size": p(n) })
      }, [
        j(d, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        ve(" " + U(o.name || p(L)("r.button")), 1)
      ], 6)), [
        [y, s.has]
      ]);
    };
  }
}), _a = { class: "c404K" }, Va = /* @__PURE__ */ P("div", { class: "t404" }, "404", -1), Ca = { class: "ct404" }, Sa = { class: "p404" }, Ta = /* @__PURE__ */ ue({
  __name: "Page404",
  setup(t) {
    const o = gl().appContext.config.globalProperties.$router;
    function e() {
      o.go(-1);
    }
    return (n, a) => {
      const s = J("Button");
      return B(), M("div", _a, [
        Va,
        P("div", Ca, "UH OH! " + U(p(L)("r.pageNotFound")), 1),
        P("div", Sa, U(p(L)("r.notFoundMsg")), 1),
        j(s, {
          class: "bt404",
          onClick: e
        }, {
          default: Y(() => [
            ve(U(p(L)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function $e(t, r, o) {
  const e = (...n) => Ee.apply(this, n);
  return new Promise((n, a) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let s = e("r.confirm"), f = e("r.cancel"), d = !1, y = "swalConfirmBt", u = "swalCancelBt";
      const c = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let g = "";
      t.text && c.test(G(t.text)) ? g = "content" : t.text && G(t.text) === "String" && (g = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (f = t.buttons.cancel.text) && (d = !0), t.buttons.cancel.className && (u = t.buttons.cancel.className), t.buttons.confirm.text && (s = t.buttons.confirm.text), t.buttons.confirm.className && (y = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (f = t.buttons[0], d = !0), t.buttons[1] && (s = t.buttons[1]))), dl({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [g]: t.text,
        buttons: {
          confirm: {
            text: s,
            value: !0,
            visible: !0,
            className: y
          },
          cancel: {
            text: f,
            value: null,
            visible: d,
            className: u
          }
        }
      }).then((b) => {
        b && typeof t.onOk == "function" && t.onOk(), n(b);
      }).catch((b) => {
        a(b);
      });
    } else if (typeof t == "string") {
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
      dl({
        title: t,
        [s]: r || "",
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
      }).then((f) => {
        n(f);
      }).catch((f) => {
        a(f);
      });
    } else if (typeof t == "boolean")
      !t && dl.close && dl.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Ba(t) {
  return t.replace(/_(\w)/g, function(r, o) {
    return o.toUpperCase();
  });
}
function vi(t) {
  let r = document.createElement("div");
  return r.textContent !== void 0 ? r.textContent = t : r.innerText = t, r.innerHTML;
}
function gi(t) {
  let r = document.createElement("div");
  return r.innerHTML = t, r.innerText || r.textContent;
}
function Cl(t) {
  return new Promise((r) => {
    let o = new FileReader();
    o.readAsDataURL(t), o.onloadend = () => {
      r(o.result);
    };
  });
}
function bt(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function Sl(t) {
  return G(t) === "String" && t.indexOf("image") > -1;
}
function nt(t) {
  const r = bt(t);
  let o = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(r) > -1 ? o = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(r) > -1 ? o = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(r) > -1 ? o = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(r) > -1 ? o = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(r) > -1 ? o = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(r) > -1 && (o = "ios-videocam"), o;
}
function xa(t, r) {
  let o = document.createElement("a");
  o.href = r, o.download = t, La(o);
}
function La(t) {
  let r = document.createEvent("MouseEvents");
  r.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(r);
}
function Al({
  group: t,
  condition: r,
  pathKey: o,
  childKey: e = "children",
  path: n = []
}) {
  if (t && Yt(t)) {
    if (Xt(r)) {
      if (el(t)) {
        let a = t, s = ie(n);
        if (r(a))
          return o && a[o] && s.push(a[o]), s;
        if (a[e] && !xe(a[e])) {
          o && a[o] && s.push(a[o]);
          let f = Al({
            group: a[e],
            condition: r,
            pathKey: o,
            childKey: e,
            path: s
          });
          if (!xe(f))
            return f;
        }
      } else if (Array.isArray(t))
        for (let a of t) {
          let s = ie(n);
          if (r(a))
            return o && a[o] ? s.push(a[o]) : s.push(String(t.indexOf(a))), s;
          if (a[e] && a[e].length > 0) {
            o && a[o] ? s.push(a[o]) : s.push(String(t.indexOf(a)));
            let f = Al({
              group: a[e],
              condition: r,
              pathKey: o,
              childKey: e,
              path: s
            });
            if (!xe(f))
              return f;
          }
        }
    } else if (Array.isArray(t))
      for (let a of t) {
        let s = ie(n);
        if (a === r)
          return s.push(String(t.indexOf(a))), s;
      }
  }
  return [];
}
function Oa(t, r = 12) {
  if (G(t) === "String" && t.length > 0) {
    let o = document.createElement("span");
    o.style.fontSize = r + "px", o.style.fontFamily = "inherit", o.innerHTML = t, o.style.opacity = "0", o.style.position = "fixed", o.style.top = "3000px", document.body.append(o);
    const e = o.clientWidth;
    return document.body.removeChild(o), e;
  }
  return 0;
}
function bi(t) {
  return t === "" ? null : t;
}
function ki(t) {
  var r;
  t = t || window.Event, t != null && t.stopPropagation ? (r = t.stopPropagation) == null || r.call(t) : t && (t.cancelBubble = !0);
}
function G(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function kt(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function yl(t) {
  let r = G(t);
  if (r === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = G(t[o]);
        e === "String" ? t[o] = t[o].trim() : (e === "Object" || e === "Array") && yl(t[o]);
      }
  } else if (r === "Array")
    for (let o = 0, e = t.length; o < e; o++) {
      let n = G(t[o]);
      n === "String" ? t[o] = t[o].trim() : (n === "Array" || n === "Object") && yl(t[o]);
    }
  return t;
}
function Il(t, r = []) {
  if (G(t) === "Array")
    return t.forEach((o, e) => {
      switch (G(o)) {
        case "Array":
        case "Object":
          Il(o);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (G(t) === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = !0;
        for (let n of r)
          if (n === o) {
            e = !1;
            break;
          }
        if (e)
          switch (G(t[o])) {
            case "Array":
            case "Object":
              Il(t[o]);
              break;
            default:
              t[o] = null;
          }
      }
    return t;
  } else
    return t;
}
const Aa = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Ia(t) {
  let r = new FormData();
  for (let o in t)
    t.hasOwnProperty(o) && t[o] !== null && r.append(o, t[o]);
  return r;
}
function Xe(t, r, o = !1) {
  if (!t || !r)
    return !1;
  let e, n = "notFoundC", a = function(s, f) {
    if (Array.isArray(s)) {
      if (G(f) === "Function" && f(s))
        return n = s, [];
      for (let d of s) {
        if (n !== "notFoundC")
          break;
        if (G(f) === "Function" && f(d) || d === f)
          return n = d, [s.indexOf(d)];
        if (G(d) === "Array" || G(d) === "Object") {
          let y = a(d, f);
          if (y !== void 0)
            return [s.indexOf(d), ...y];
        }
      }
    } else if (G(s) === "Object") {
      if (G(f) === "Function" && f(s))
        return n = s, [];
      for (let d in s) {
        if (n !== "notFoundC")
          break;
        if (s.hasOwnProperty(d)) {
          if (G(f) === "Function" && f(d) || s[d] === f)
            return n = s[d], [d];
          if (G(s[d]) === "Object" || G(s[d]) === "Array") {
            let y = a(s[d], f);
            if (y !== void 0)
              return [d, ...y];
          }
        }
      }
    }
  };
  return e = a(t, r), o ? e || !1 : n === "notFoundC" ? !1 : n;
}
function Pa(t, r) {
  for (let o = 0, e = r.length; o < e; o++)
    if (t === r[o])
      return !0;
  return !1;
}
function Fa(t, r = 2) {
  let o = new RegExp(`(^-?\\d+\\.\\d{${r}})(\\d+$)`), e = t && String(t) || "";
  return o.test(e) ? Number(e.replace(o, "$1")) : t;
}
function wt(t, r = {}, o = "get") {
  let e = document.createElement("form"), n = document.getElementsByTagName("body")[0];
  n.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", o);
  let a = t;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((f) => {
      var d;
      return ((d = f == null ? void 0 : f.indexOf) == null ? void 0 : d.call(f, "URL")) > -1;
    }).map((f) => {
      var d;
      return (d = f.replace) == null ? void 0 : d.call(f, "URL", "");
    });
    for (let f of s) {
      let d = new RegExp("^/" + f + "(?=/.*$)", "i");
      if (d.test(t) && window.g[f + "URL"]) {
        a = window.g[f + "URL"] + t.replace(d, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", a), el(r)) {
    for (let f in r)
      if (r.hasOwnProperty(f) && (r[f] || r[f] === 0 || r[f] === !1 || r[f] === "")) {
        let d = document.createElement("input");
        d.setAttribute("type", "hidden"), d.setAttribute("name", f), d.setAttribute("value", r[f]), e.appendChild(d);
      }
    e.submit();
    let s = setTimeout(() => {
      n.removeChild(e), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function $a(t, r = {}, o = "get") {
  if (r.hasOwnProperty("columns") && (r.columns === "" || r.columns === null || r.columns === void 0)) {
    $e.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  wt(t, r, o);
}
function Ra(t, r, o = !1) {
  let e;
  if (t && G(r) === "Array") {
    let n = localStorage.getItem(t);
    if (n) {
      let a = JSON.parse(decodeURI(n));
      e = r.filter((s) => {
        var f;
        return (s == null ? void 0 : s.key) && ((f = a == null ? void 0 : a.indexOf) == null ? void 0 : f.call(a, s.title)) !== -1;
      }).map((s) => s.key);
    } else
      e = r.map((a) => a == null ? void 0 : a.key);
  } else
    e = [];
  return o || (e = String(e)), e;
}
function Ce(t) {
  return t != null && t !== "";
}
function Ka(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function _t(t, r = !1, o = "") {
  return function(e, n) {
    var d, y;
    let a;
    if (Array.isArray(t)) {
      let u = [];
      for (let c of t)
        Ce((d = n.row) == null ? void 0 : d[c]) && u.push(n.row[c]);
      a = u.join(o);
    } else
      typeof t == "function" ? a = t(n) : a = (y = n.row) == null ? void 0 : y[t];
    let s = Oa(a), f = n.column._width;
    return a && s > f ? Ve(
      Zt,
      {
        style: {
          width: "100%"
        },
        content: a,
        maxWidth: f * 2
      },
      () => Ve(
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
    ) : Ve("span", r && !Ce(a) ? "--" : a);
  };
}
function Ma(t) {
  if (el(t)) {
    for (let r in t)
      if (t.hasOwnProperty(r) && Ce(t[r]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let r of t)
      if (Ce(r))
        return !1;
    return !0;
  }
  return !Ce(t);
}
function Da(t) {
  return G(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : G(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function Ze({
  group: t,
  condition: r,
  key: o,
  val: e,
  childKey: n = "children"
}) {
  if (G(t) !== "Array" || G(r) !== "Function" || G(o) !== "String" || G(n) !== "String")
    return !1;
  t.forEach((a) => {
    r(a) && (G(e) === "Function" ? a[o] = e(a[o]) : a[o] = e), G(a[n]) === "Array" && a[n].length > 0 && Ze({
      group: a[n],
      condition: r,
      key: o,
      val: e,
      childKey: n
    });
  });
}
function Vt(t) {
  let r = sessionStorage.getItem("btnPermissions");
  return r ? r.split(",").indexOf(t) > -1 : !1;
}
function Ct(t) {
  return G(t) === "Number" && String(t) === "NaN";
}
function za(t, r = !1, o = !1) {
  if (G(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), n = "";
  for (let a in e)
    if (e.hasOwnProperty(a)) {
      let s = e[a];
      s === void 0 || s === "" || G(s) === "String" && s.trim() === "" || s === null || Ct(s) ? o ? r ? n += a + "=&" : e[a] = "" : delete e[a] : r && (n += a + "=" + s + "&");
    }
  return r ? n.length > 0 ? n.substring(0, n.length - 1) : "" : e;
}
function Pl(t) {
  let r = {};
  if (Array.isArray(t)) {
    r = [];
    for (let o of t)
      Array.isArray(o) || el(o) ? r.push(Pl(o)) : Ce(o) && r.push(o);
  } else if (el(t))
    for (let o in t)
      t.hasOwnProperty(o) && (Array.isArray(t[o]) || el(t[o]) ? r[o] = Pl(t[o]) : Ce(t[o]) && (r[o] = t[o]));
  return r;
}
function Ua(t) {
  const r = window.open();
  if (r) {
    r.document.write(t);
    let o = setTimeout(() => {
      r.print(), window.clearTimeout(o), o = null;
    }, 10);
  }
}
function St(t) {
  let r = [], o = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && r.push(t);
  for (; o.nextSibling && (o = o.nextSibling); )
    o.nodeType === 1 && r.push(o);
  return r;
}
const Na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Il,
  dataFilterOrToUrl: za,
  decimalDigitsLimit: Fa,
  downloadFileByFormSubmit: wt,
  fileExport: $a,
  findCollection: Xe,
  formDataHeadConfig: Aa,
  getColumnsKeys: Ra,
  hasPermission: Vt,
  htmlPrint: Ua,
  isEmptyValue: Ma,
  isNaN: Ct,
  isNumberValue: Ka,
  isValidValue: Ce,
  myTypeof: G,
  oneOf: Pa,
  removeEmptyValue: Pl,
  setValByOption: Ze,
  siblingElems: St,
  stringLength: Da,
  toFormData: Ia,
  toLine: kt,
  tooltipManual: _t,
  trimObj: yl
}, Symbol.toStringTag, { value: "Module" })), Ea = { class: "groupBoxRP" }, Ga = ["onClick"], Ha = /* @__PURE__ */ ue({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const r = na(), o = t;
    function e(a) {
      return (a == null ? void 0 : a.path) === o.pathName ? "active" : "";
    }
    function n(a, s) {
      var u, c, g, b, I, v, V, w;
      (u = a == null ? void 0 : a.preventDefault) == null || u.call(a);
      let f = a == null ? void 0 : a.target;
      if (s && !s.children && !f.classList.contains("active")) {
        r.push(s.path);
        return;
      }
      let d = f.parentNode, y = St(d);
      for (let O of y) {
        (g = (c = O == null ? void 0 : O.classList) == null ? void 0 : c.remove) == null || g.call(c, "open");
        const T = (b = O == null ? void 0 : O.querySelectorAll) == null ? void 0 : b.call(O, ".open");
        if (T && Array.isArray(T))
          for (let C of T)
            (v = (I = C == null ? void 0 : C.classList) == null ? void 0 : I.remove) == null || v.call(I, "open");
      }
      (w = (V = d == null ? void 0 : d.classList) == null ? void 0 : V.toggle) == null || w.call(V, "open");
    }
    return (a, s) => {
      const f = J("sideMenuGroup", !0);
      return B(), M("ul", Ea, [
        (B(!0), M(ge, null, _e(o.data, (d, y) => (B(), M(ge, {
          key: (d == null ? void 0 : d.path) + y
        }, [
          d ? (B(), M("li", {
            key: 0,
            class: Be({ dropItemRP: d.children })
          }, [
            P("div", {
              class: Be(["menuTxtR", e(d)]),
              onClick: (u) => n(u, d),
              style: te({ paddingLeft: d.level * 20 + "px" })
            }, U(d.name || "-- no name --"), 15, Ga),
            d.children ? (B(), X(f, {
              key: 0,
              data: d.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])) : se("", !0)
          ], 2)) : se("", !0)
        ], 64))), 128))
      ]);
    };
  }
}), Wa = { class: "menuListR" }, ja = /* @__PURE__ */ ue({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: r }) {
    const o = t, e = r, n = yt(), a = W(!0), s = W(), f = W(), d = N(() => a.value ? L("r.hideMenu") : L("r.showMenu")), y = N(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    Ht(() => {
      let g = localStorage.getItem("menuDisplayR") || "";
      g !== "" ? a.value = JSON.parse(g) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), we(
      () => n.path,
      (g) => {
        s.value = g, Re(c);
      },
      { immediate: !0 }
    );
    function u() {
      a.value = !a.value, localStorage.setItem("menuDisplayR", JSON.stringify(a.value)), e("on-change", a.value);
    }
    function c() {
      var b, I, v, V, w;
      let g = f.value.querySelectorAll(".dropItemRP");
      for (let O of g)
        (b = O == null ? void 0 : O.querySelector) != null && b.call(O, ".active") && !((v = (I = O.classList) == null ? void 0 : I.contains) != null && v.call(I, "open")) && ((w = (V = O.classList) == null ? void 0 : V.add) == null || w.call(V, "open"));
    }
    return (g, b) => {
      const I = J("Icon");
      return B(), M("div", {
        ref_key: "menuRef",
        ref: f,
        class: "menuBoxRP"
      }, [
        fe(P("div", Wa, [
          j(Ha, {
            data: o.data,
            pathName: p(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ye, p(a)]
        ]),
        j(I, {
          type: p(y),
          size: 25,
          class: Be([{ showIco: !p(a) }, "menuShowHideIco"]),
          title: p(d),
          onClick: u,
          color: p(a) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), qa = ["title"], Tt = /* @__PURE__ */ ue({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const o = r, e = t;
    function n(a) {
      e.disabled || o("click", a);
    }
    return (a, s) => {
      const f = J("Icon"), d = Ul("has");
      return fe((B(), M("div", {
        class: Be(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || p(L)("r.button")
      }, [
        j(f, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, qa)), [
        [d, e.has]
      ]);
    };
  }
}), Ja = { class: "contentX" }, Ya = { class: "arrowA" }, Fl = /* @__PURE__ */ ue({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(t) {
    const r = t, o = W(!0), e = N(() => o ? "background:" + r.bg || "transparent" : "");
    return (n, a) => {
      const s = J("Icon");
      return B(), M("div", {
        style: te(p(e))
      }, [
        fe(P("div", Ja, [
          Oe(n.$slots, "default")
        ], 512), [
          [ye, p(o)]
        ]),
        P("div", Ya, [
          P("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (f) => o.value = !p(o))
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
}), Xa = { class: "contentZ" }, Qa = /* @__PURE__ */ ue({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    const o = t, e = r, n = N({
      get() {
        return o.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), a = N(() => n.value ? "background:" + o.bg : "");
    return (s, f) => (B(), M("div", {
      style: te(p(a))
    }, [
      fe(P("div", Xa, [
        Oe(s.$slots, "default")
      ], 512), [
        [ye, p(n)]
      ])
    ], 4));
  }
});
let $l = [], Rl = [];
const Za = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    $l.map((r) => {
      window.clearTimeout(r);
    }), Rl.map((r) => {
      window.clearInterval(r);
    }), $l.length = 0, Rl.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Fe = function(t, r) {
  let o = window.setTimeout(t, r);
  return $l.push(o), o;
}, en = function(t, r) {
  let o = window.setInterval(t, r);
  return Rl.push(o), o;
}, ln = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t;
    let n = !1;
    const a = N({
      get() {
        return e.modelValue;
      },
      set(y) {
        o("update:modelValue", y);
      }
    }), s = N({
      get() {
        return e.open;
      },
      set(y) {
        o("on-toggle", y);
      }
    }), f = N(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function d() {
      n || (n = !0, o("on-search", a.value), Fe(() => {
        n = !1;
      }, 2e3));
    }
    return (y, u) => {
      const c = J("Input"), g = J("icon");
      return B(), M("div", {
        class: "tableSearchV",
        style: te({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Oe(y.$slots, "default", {}, () => [
          j(c, {
            modelValue: p(a),
            "onUpdate:modelValue": u[0] || (u[0] = (b) => Pe(a) ? a.value = b : null),
            style: te({ width: e.width }),
            search: "",
            onOnSearch: d,
            class: "searchInputC",
            placeholder: e.placeholder || p(L)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        fe(P("span", {
          class: "sbt",
          onClick: u[1] || (u[1] = (b) => s.value = !p(s)),
          style: te({ color: e.btnColor })
        }, [
          j(g, {
            type: p(f),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          ve(U(p(L)("r.adSearch")), 1)
        ], 4), [
          [ye, e.showBtn]
        ])
      ], 4);
    };
  }
}), tn = { class: "tabSetF" }, an = { class: "topCheck" }, Bt = /* @__PURE__ */ ue({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    top: { default: "30px" },
    right: { default: "0" },
    width: { default: "150px" },
    bg: { default: () => Le().tableSettingBg },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: r }) {
    var V, w, O, T, C;
    const o = r, e = t, n = W(!0), a = W(!1), s = W(!1), f = W([]), d = N(() => {
      var S;
      let A = L("r.unknown");
      return ((S = e.modelValue) == null ? void 0 : S.length) > f.value.length && (f.value = ie(e.modelValue)), f.value.map((_) => {
        let m = { label: (_ == null ? void 0 : _.title) || A };
        return _ != null && _.disableShowSetting && (m.disabled = !0), m;
      });
    }), y = N(() => d.value.filter((A) => A == null ? void 0 : A.disabled)), u = N({
      get() {
        var A, S;
        return (S = (A = e.modelValue) == null ? void 0 : A.map) == null ? void 0 : S.call(A, (_) => (_ == null ? void 0 : _.title) || L("r.unknown"));
      },
      set(A) {
        let S = f.value.filter((_) => {
          for (let m of A)
            if (m === (_ == null ? void 0 : _.title))
              return !0;
          return !1;
        });
        o("update:modelValue", S);
      }
    }), c = (C = (T = (O = (w = (V = gl()) == null ? void 0 : V.appContext) == null ? void 0 : w.config) == null ? void 0 : O.globalProperties) == null ? void 0 : T.$i18n) == null ? void 0 : C.locale;
    Ne(() => {
      let A = L("r.unknown"), S;
      c ? S = window[e.storage].getItem(e.sKey + "_" + c) : S = window[e.storage].getItem(e.sKey), S ? u.value = JSON.parse(decodeURI(S)) : e.defaultCheck && (u.value = e.modelValue.filter((_) => _ == null ? void 0 : _.showSettingCheck).map((_) => (_ == null ? void 0 : _.title) || A));
    });
    function g(A) {
      A.length === d.value.length ? (n.value = !1, a.value = !0) : A.length > y.value.length ? (n.value = !0, a.value = !1) : (n.value = !1, a.value = !1);
    }
    we(() => u.value, g, {
      immediate: !0,
      deep: !0
    });
    function b() {
      s.value || (s.value = !0);
    }
    function I() {
      c ? window[e.storage].setItem(e.sKey + "_" + c, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), s.value = !1;
    }
    function v() {
      n.value ? a.value = !1 : a.value = !a.value, n.value = !1, a.value ? u.value = d.value.map((A) => A == null ? void 0 : A.label) : u.value = y.value.map((A) => A == null ? void 0 : A.label);
    }
    return (A, S) => {
      const _ = J("Icon"), m = J("Checkbox"), $ = J("CheckboxGroup");
      return B(), M("div", tn, [
        P("div", {
          class: "tabSetBt",
          onClick: b
        }, [
          j(_, {
            type: "md-settings",
            size: "17"
          }),
          P("span", null, U(p(L)("r.tabSetting")), 1)
        ]),
        fe(P("div", {
          class: "tabSetCard",
          style: te({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          P("div", an, [
            j(m, {
              indeterminate: p(n),
              modelValue: p(a),
              "onUpdate:modelValue": S[0] || (S[0] = (h) => Pe(a) ? a.value = h : null),
              onClick: Tl(v, ["prevent"])
            }, {
              default: Y(() => [
                ve(U(p(L)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue"]),
            P("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: I
            }, U(p(L)("r.confirm")), 1)
          ]),
          j($, {
            modelValue: p(u),
            "onUpdate:modelValue": S[1] || (S[1] = (h) => Pe(u) ? u.value = h : null)
          }, {
            default: Y(() => [
              (B(!0), M(ge, null, _e(p(d), (h, R) => (B(), X(m, {
                class: "setItem",
                label: h && h.label,
                key: "tabSet_" + e.sKey + R,
                disabled: h && h.disabled
              }, null, 8, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 4), [
          [ye, p(s)]
        ])
      ]);
    };
  }
});
let il = !1;
function Kl({
  height: t,
  width: r = 416,
  title: o,
  content: e,
  onOk: n,
  onCancel: a,
  onClose: s,
  okText: f,
  cancelText: d,
  noWarnIcon: y,
  footerAlign: u,
  cancelBt: c = !0
}) {
  const g = (...w) => Ee.apply(this, w);
  let I = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", v = G(e) === "String";
  const V = typeof e == "function";
  He.warning({
    width: r,
    footerHide: !0,
    render: () => Ve(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: I
        }
      },
      [
        Ve(
          "div",
          {
            class: "containerN"
          },
          [
            Ve(
              "div",
              {
                class: "titleN"
              },
              [
                Ve("span", o || g("r.info.title")),
                Ve(
                  Vl,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      il || (He.remove(), s && G(s) === "Function" && s());
                    }
                  },
                  () => Ve("i", {
                    class: "ivu-icon ivu-icon-ios-close",
                    style: {
                      fontSize: "30px"
                    }
                  })
                )
              ]
            ),
            Ve(
              "div",
              {
                class: "contentN",
                style: {
                  textAlign: v ? "center" : "left"
                }
              },
              [
                Ve("i", {
                  class: v && !y ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ve("div", { class: "msgBoxConO" }, V ? [e(Ve)] : e || g("r.info.text"))
              ]
            ),
            Ve(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: u || "center"
                }
              },
              [
                Ve(
                  Vl,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var O, T, C, A, S, _, m, $, h;
                      if (n && typeof n == "function") {
                        const R = n();
                        if (R && G(R) === "Promise") {
                          il = !0;
                          const F = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          F && ((T = (O = F.classList) == null ? void 0 : O.add) == null || T.call(O, "ivu-btn-loading"), (A = (C = F.nextSibling) == null ? void 0 : C.setAttribute) == null || A.call(C, "disabled", "disabled"), (h = ($ = ((m = (_ = (S = F.parentElement) == null ? void 0 : S.parentElement) == null ? void 0 : _.querySelector) == null ? void 0 : m.call(_, ".titleN .closeN")).classList) == null ? void 0 : $.add) == null || h.call($, "disabled")), Promise.resolve(R).then(() => {
                            il = !1, He.remove();
                          }).catch(() => {
                            il = !1, He.remove();
                          });
                        } else
                          He.remove();
                      }
                    }
                  },
                  () => [
                    Ve("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Ve("span", f || g("r.confirm"))
                  ]
                ),
                Ve(
                  Vl,
                  {
                    class: ["cancelBtN", !c && "hide"],
                    onClick() {
                      il || (He.remove(), G(a) === "Function" && a && a());
                    }
                  },
                  () => d || g("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let Ye = 0, ul = document.createElement("div");
ul.setAttribute("class", "spinModal");
ul.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ul);
};
function ot(t) {
  t ? ul.classList.add("show") : ul.classList.remove("show");
}
function xt(t) {
  let r = Ye;
  t ? Ye++ : Ye > 0 && Ye--, r !== Ye && (Ye === 0 ? ot(!1) : r === 0 && ot(!0));
}
const nn = window.location.origin;
let vl = null;
const it = (...t) => Ee.apply(vl, t);
let Ke = Ll.create({
  baseURL: nn,
  withCredentials: !0
  // 允许携带cookie
});
function on() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Ke.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function st() {
  var t, r;
  if (Ke.store)
    if (typeof Ke.store == "function") {
      const o = Ke.store();
      o.logout && o.logout();
    } else
      (r = (t = Ke.store) == null ? void 0 : t.dispatch) == null || r.call(t, "logout");
  else
    on();
}
Ke.interceptors.response.use(
  (t) => {
    var r, o;
    return vl && (((r = t == null ? void 0 : t.data) == null ? void 0 : r.code) === 403 || ((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 409) && Kl({
      content: it("r.http." + t.data.code),
      onOk: st
    }), t;
  },
  (t) => {
    var r, o;
    return vl && (((r = t == null ? void 0 : t.response) == null ? void 0 : r.status) === 403 || ((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 409) && Kl({
      content: it("r.http." + t.response.status),
      onOk: st
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ge(t, r, o, e) {
  e && e.spin && xt(!1);
  let n = !0, a = t && t.data;
  if (a) {
    o = o || [];
    for (let s of o)
      a = a[s], n = n && a;
    return n ? a : (r && console.warn(r), !1);
  }
  return r && console.warn(r), !1;
}
function sn(t, r, o, e, n, a, s) {
  return new Promise((f, d) => {
    switch (t) {
      case "get":
        Ke.get(r, { params: o }).then((u) => {
          let c = Ge(u, e, n, a);
          c ? f(c) : d(u);
        }).catch((u) => {
          Ge({}, e, n, a), d(u);
        });
        break;
      case "delete":
        let y = s ? "params" : "data";
        Ke.delete(r, { [y]: o }).then((u) => {
          let c = Ge(u, e, n, a);
          c ? f(c) : d(u);
        }).catch((u) => {
          Ge({}, e, n, a), d(u);
        });
        break;
      case "post":
        Ke.post(r, o, a).then((u) => {
          let c = Ge(u, e, n, a);
          c ? f(c) : d(u);
        }).catch((u) => {
          Ge({}, e, n, a), d(u);
        });
        break;
      case "put":
        Ke.put(r, o, a).then((u) => {
          let c = Ge(u, e, n, a);
          c ? f(c) : d(u);
        }).catch((u) => {
          Ge({}, e, n, a), d(u);
        });
        break;
    }
  });
}
function cl(t, r, o = {}, e, n, a, s) {
  return new Promise((f, d) => {
    var y;
    if (r) {
      a && a.spin && xt(!0);
      let u = r;
      if (window && window.hasOwnProperty("g")) {
        const b = window.g;
        let I = Object.keys(b).filter((v) => {
          var V;
          return ((V = v == null ? void 0 : v.indexOf) == null ? void 0 : V.call(v, "URL")) > -1;
        }).map((v) => {
          var V;
          return (V = v.replace) == null ? void 0 : V.call(v, "URL", "");
        });
        for (let v of I) {
          let V = new RegExp("^/" + v + "(?=/.*$)", "i");
          if (V.test(r) && b[v + "URL"]) {
            u = b[v + "URL"] + r.replace(V, "");
            break;
          }
        }
      }
      let c;
      if (((y = a == null ? void 0 : a.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        c = o;
      else if (o && !xe(o))
        if (Array.isArray(o)) {
          c = [];
          for (let b of o)
            (b || b === 0 || b === !1 || b === "" && a && !a.noEmptyStr) && c.push(b);
        } else {
          c = {};
          for (let b in o)
            o.hasOwnProperty(b) && (o[b] || o[b] === 0 || o[b] === !1 || o[b] === "" && a && !a.noEmptyStr) && (c[b] = o[b]);
        }
      let g = t.toLowerCase();
      sn(g, u, c, e, n, a, s).then((b) => {
        f(b);
      }).catch((b) => {
        d(b);
      });
    } else
      console.error("没有请求地址:url"), d("没有请求地址:url");
  });
}
const ze = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, r) {
    Ke.store = t, vl = r.config.globalProperties;
  },
  post(t, r, o, e, n) {
    return new Promise((a, s) => {
      cl("post", t, r, o, e, n).then((f) => {
        a(f);
      }).catch((f) => {
        s(f);
      });
    });
  },
  put(t, r, o, e, n) {
    return new Promise((a, s) => {
      cl("put", t, r, o, e, n).then((f) => {
        a(f);
      }).catch((f) => {
        s(f);
      });
    });
  },
  get(t, r, o, e, n) {
    return new Promise((a, s) => {
      cl("get", t, r, o, e, n).then((f) => {
        a(f);
      }).catch((f) => {
        s(f);
      });
    });
  },
  delete(t, r, o, e, n, a = !0) {
    return new Promise((s, f) => {
      cl("delete", t, r, o, e, n, a).then((d) => {
        s(d);
      }).catch((d) => {
        f(d);
      });
    });
  },
  all: Ll.all,
  spread: Ll.spread,
  config: Ke
}, rn = { key: 0 }, un = {
  key: 1,
  class: "pageProSize"
}, Lt = /* @__PURE__ */ ue({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = Le()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowSizer;
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(t, { emit: r }) {
    const o = r, e = t, n = N({
      get() {
        return e.modelValue;
      },
      set(s) {
        o("update:modelValue", s), o("on-change", s);
      }
    }), a = N({
      get() {
        return e.pageSize;
      },
      set(s) {
        o("on-page-size-change", s), n.value !== 1 && (n.value = 1);
      }
    });
    return (s, f) => {
      const d = J("Page"), y = J("Option"), u = J("Select");
      return B(), M("div", {
        class: Be(["pagePro", { pageProDefault: e.size === "default" }])
      }, [
        e.showTotal ? (B(), M("span", rn, U(p(L)("r.total") + " ") + U(e.total) + U(" " + p(L)("r.items")), 1)) : se("", !0),
        j(d, {
          modelValue: p(n),
          "onUpdate:modelValue": f[0] || (f[0] = (c) => Pe(n) ? n.value = c : null),
          "page-size": p(a),
          total: e.total,
          size: e.size,
          "page-size-opts": e.pageSizeOpts,
          disabled: e.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        e.showSizer ? (B(), M("div", un, [
          j(u, {
            modelValue: p(a),
            "onUpdate:modelValue": f[1] || (f[1] = (c) => Pe(a) ? a.value = c : null),
            size: e.size,
            transfer: e.transfer,
            disabled: e.disabled
          }, {
            default: Y(() => [
              (B(!0), M(ge, null, _e(e.pageSizeOpts, (c) => (B(), X(y, {
                value: c,
                key: c
              }, {
                default: Y(() => [
                  ve(U(c) + " " + U(p(L)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : se("", !0)
      ], 2);
    };
  }
}), dn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, cn = { class: "topBtn" }, fn = { class: "tableContainer growFlexItem" }, pn = { class: "fullHeight relativeBox" }, mn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, hn = { class: "pageContainer" }, yn = 300, Ml = /* @__PURE__ */ ue({
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
      return (t = Le()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowSizer;
    } },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: r, emit: o }) {
    const e = o;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...ea });
    const a = t, s = Le().pageSizes || [10, 20, 50, 100], f = W(a.data), d = W(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), y = W(1), u = W(0);
    let c = [], g, b, I = a.orderKey, v = a.orderDefault;
    const V = N(() => {
      for (let D of a.columns)
        if (D != null && D.fixed)
          return !0;
      return !1;
    }), w = N(() => a.selectionFixed || V.value), O = N(() => {
      let D = {
        ...a.searchData,
        current: y.value,
        size: d.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? D[v] = kt(I) : a.orderKeyFormat === "camelcase" && (D[v] = Ba(I))), D;
    }), T = N(() => {
      let D = a.columns.filter((K) => K && K.type !== "selection");
      if (a.selection || a.radio) {
        let K;
        a.radio ? K = {
          title: " ",
          width: 65,
          render: (he, pe) => Ve(la, {
            modelValue: pe.row.btChecked
          })
        } : K = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (K.fixed = a.selectionFixed), D.unshift(K);
      }
      return D.forEach((K) => {
        K && (a.sortable === "custom" ? K.key && K.sortable !== !0 && K.sortable !== !1 && (K.sortable = "custom") : K.sortable = !1, K.align || (K.align = "center"));
      }), a.tableEmptyTdHandle && D.forEach((K) => {
        K != null && K.key && K.render === void 0 && (K.tooltip ? K.render = _t(K.key, !0) : K.render = (he, pe) => {
          let ke = pe.row[K.key];
          return he("span", ke === "" || ke === null || ke === void 0 ? "--" : ke);
        });
      }), D;
    }), C = N({
      get() {
        return f.value.map((D, K) => ({
          btKey: "bt-" + K,
          btChecked: !1,
          ...D
        }));
      },
      set(D) {
        f.value = D;
      }
    }), A = N(() => c.map((D) => D == null ? void 0 : D.id)), S = N(() => c.map((D) => D == null ? void 0 : D.btKey)), _ = W();
    we(() => a.searchData, m, { deep: !0 }), we(
      () => a.orderDefault,
      (D) => {
        v = D;
      }
    ), we(
      () => a.orderKey,
      (D) => {
        I = D;
      }
    );
    function m() {
      y.value = 1, De();
    }
    function $() {
      a.initData && De();
    }
    function h(D) {
      f.value.unshift(ie(D)), Fe(() => {
        var K, he;
        (he = (K = _.value) == null ? void 0 : K.clickCurrentRow) == null || he.call(K, 0);
      }, 100);
    }
    function R(D, K, he) {
      let pe = null;
      if (K ? pe = b : typeof K == "number" && (pe = K), pe !== null) {
        let ke = f.value[pe];
        for (let ee in D)
          D.hasOwnProperty(ee) && (ke[ee] = D[ee]);
        he && Fe(() => {
          var ee, Ae;
          (Ae = (ee = _.value) == null ? void 0 : ee.clickCurrentRow) == null || Ae.call(ee, pe);
        }, 10);
      }
    }
    function F(D) {
      f.value.splice(D, 1), Fe(() => {
        var K, he;
        (he = (K = _.value) == null ? void 0 : K.clickCurrentRow) == null || he.call(K, 0);
      }, 100);
    }
    function E(D, K) {
      var he, pe;
      D.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((pe = (he = _.value) == null ? void 0 : he.toggleSelect) == null || pe.call(he, K));
    }
    function Q(D, K) {
      g = K.btKey, b = Number(K.btKey.split("-")[1]), a.radio && (f.value[b].btChecked = !0);
    }
    function ne(D) {
      if (a.radio)
        for (let K of C.value)
          K != null && K.btKey && K.btKey !== g && (f.value[Number(K.btKey.split("-")[1])].btChecked = !1);
      c = D, e("on-selection-change", D);
    }
    function be() {
      return ie(c);
    }
    function Se() {
      De();
    }
    function q(D) {
      d.value = D, localStorage.setItem("btPageSize", String(D)), y.value === 1 && De();
    }
    function me({ key: D, order: K }) {
      v === "normal" ? (I = a.orderKey, v = a.orderDefault) : (I = D, v = K), y.value = 1, ce();
    }
    function de(D) {
      var he, pe, ke, ee, Ae, je, qe, al;
      const K = D;
      if (typeof K == "number")
        z(), b = K, g = (pe = (he = C.value) == null ? void 0 : he[K]) == null ? void 0 : pe.btKey, (ee = (ke = _.value) == null ? void 0 : ke.clickCurrentRow) == null || ee.call(ke, K);
      else if (Array.isArray(K)) {
        if (a.radio || !a.selection)
          return;
        z();
        for (let Ue of K)
          (je = (Ae = _.value) == null ? void 0 : Ae.clickCurrentRow) == null || je.call(Ae, Ue);
      } else if (typeof K == "function")
        for (let Ue = 0; Ue < C.value.length; Ue++) {
          const kl = C.value[Ue];
          K(kl) && ((al = (qe = _.value) == null ? void 0 : qe.clickCurrentRow) == null || al.call(qe, Ue));
        }
    }
    function z() {
      var D, K;
      if (a.radio) {
        if (S.value.length > 0 && C.value.length > 0) {
          let he = S.value[0].split("-")[1];
          C.value[he].btChecked = !1;
        }
      } else
        (K = (D = _.value) == null ? void 0 : D.selectAll) == null || K.call(D, !1);
      c.length > 0 && (c = [], e("on-selection-change", [])), g = null, b = null;
    }
    function oe() {
      f.value = [], z(), y.value = 1, u.value = 0;
    }
    function ce(D, K, he) {
      return new Promise((pe) => {
        D && (v = D), K && (I = K), a.url ? ze[a.method](a.url, O.value, "", [], { spin: a.getDataLoading }).then((ke) => {
          var Ae, je;
          let ee;
          he || z(), typeof a.dataHandler == "function" ? ee = a.dataHandler(ke) : ee = ke, ee.data ? (ee.data.records || ee.data.records === null ? f.value = ee.data.records || [] : ee.data.page ? (ee.data.page.records || ee.data.page.records === null) && (f.value = ee.data.page.records || []) : ee.data.data ? (ee.data.data.records || ee.data.data.records === null) && (f.value = ee.data.data.records || []) : f.value = ee.data, u.value = ((Ae = ee.data.page) == null ? void 0 : Ae.total) || ((je = ee.data.data) == null ? void 0 : je.total) || ee.data.total || ee.total || 0, u.value === 0 && y.value > 1 && f.value && f.value.length === 0 ? y.value = 1 : y.value > 1 && u.value <= (y.value - 1) * d.value && (y.value--, Re(function() {
            ce(D, K);
          })), e("on-data-change", ee), pe(ee)) : (console.warn("请求返回数据有误，无法使用"), oe(), e("on-data-change", ee));
        }).catch((ke) => {
          z(), oe(), e("on-data-change", ke);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function De(D, K, he) {
      a.radio && (D || a.rowClickNum !== -1) ? ce(K, he, D).then(() => {
        f.value.length > 0 && Fe(() => {
          var pe, ke, ee, Ae;
          D ? (ke = (pe = _.value) == null ? void 0 : pe.clickCurrentRow) == null || ke.call(pe, b || 0) : (Ae = (ee = _.value) == null ? void 0 : ee.clickCurrentRow) == null || Ae.call(ee, a.rowClickNum);
        }, 10);
      }) : ce();
    }
    return Ne($), r({
      selectedIds: A,
      addRow: h,
      setRowData: R,
      deleteRow: F,
      getSelected: be,
      selectRow: de,
      clearSelect: z,
      clearTableData: oe,
      getTableData: ce,
      getDataAndClickRow: De
    }), (D, K) => {
      const he = J("Table"), pe = J("Page");
      return B(), M("div", dn, [
        fe(P("div", cn, [
          Oe(D.$slots, "tableSetting"),
          Oe(D.$slots, "topMsg"),
          Oe(D.$slots, "topBtnGroup")
        ], 512), [
          [ye, a.showTopRow]
        ]),
        P("div", fn, [
          P("div", pn, [
            P("div", mn, [
              j(he, tl({
                ref_key: "tableRef",
                ref: _
              }, D.$attrs, {
                height: p(w) && yn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !p(w), lightHeadO: a.lightHead },
                columns: p(T),
                data: p(C),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: Q,
                onOnSelectionChange: ne,
                onOnSortChange: me,
                onOnRowClick: E
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        fe(P("div", hn, [
          a.usePagePro ? (B(), X(Lt, {
            key: 0,
            modelValue: p(y),
            "onUpdate:modelValue": K[0] || (K[0] = (ke) => Pe(y) ? y.value = ke : null),
            total: p(u),
            showTotal: a.showTotal,
            pageSize: p(d),
            showSizer: a.showSizer,
            pageSizeOpts: p(s),
            size: a.pageComponentSize,
            onOnChange: Se,
            onOnPageSizeChange: q
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (B(), X(pe, {
            key: 1,
            modelValue: p(y),
            "onUpdate:modelValue": K[1] || (K[1] = (ke) => Pe(y) ? y.value = ke : null),
            total: p(u),
            pageSize: p(d),
            pageSizeOpts: p(s),
            showSizer: a.showSizer,
            showTotal: a.showTotal,
            size: a.pageComponentSize,
            showElevator: !a.noElevator,
            onOnChange: Se,
            onOnPageSizeChange: q
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ye, !a.noPage]
        ])
      ], 512);
    };
  }
}), Ot = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = N({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(u) {
        let c = {
          key: u,
          val: null
        };
        n.value && n.value !== u && (c.beforeKey = n.value), o("update:modelValue", c), o("on-change", c);
      }
    }), a = N({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(u) {
        o("update:modelValue", {
          key: n.value,
          val: u
        });
      }
    }), s = N(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), f = N(() => ({ width: e.itemWidth + "px" }));
    function d(u) {
      u != null && u.target && u.target.value !== void 0 && y({
        key: n.value,
        val: u.target.value
      });
    }
    const y = mt((u) => {
      o("on-change", u);
    }, 500);
    return (u, c) => {
      const g = J("Option"), b = J("Select"), I = J("Input");
      return B(), M("div", null, [
        j(b, {
          modelValue: p(n),
          "onUpdate:modelValue": c[0] || (c[0] = (v) => Pe(n) ? n.value = v : null),
          style: te(p(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: Y(() => [
            (B(!0), M(ge, null, _e(e.selectOption, (v, V) => (B(), X(g, {
              value: v == null ? void 0 : v.val,
              label: v == null ? void 0 : v.label,
              key: "selectInputOp" + (v == null ? void 0 : v.value) + V,
              style: te({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        j(I, {
          modelValue: p(a),
          "onUpdate:modelValue": c[1] || (c[1] = (v) => Pe(a) ? a.value = v : null),
          placeholder: e.placeholder || p(L)("r.pInput"),
          style: te(p(f)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: d
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Dl = { securityJsCode: "", key: "" };
function vn({ securityJsCode: t, key: r }) {
  Dl.securityJsCode = t, Dl.key = r;
}
function gn(t) {
  return Dl[t];
}
const At = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = N({
      get() {
        let C;
        return e.modelValue ? e.modelValue.name ? C = ie(e.modelValue) : C = {
          ...e.modelValue,
          name: null
        } : C = {
          name: null
        }, C;
      },
      set(C) {
        o("update:modelValue", ie(C));
      }
    }), a = N(() => sl(e.width) ? e.width + "px" : e.width), s = N(() => sl(e.height) ? e.height + "px" : e.height ? e.height : sl(e.width) ? e.width * 0.66 + "px" : "200px"), f = N(() => ({
      width: a.value,
      position: "relative"
    })), d = N(() => ({
      width: a.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    we(
      () => e.modelValue,
      (C) => {
        if (C && C.lng && C.lat) {
          if (!v || !V)
            return;
          O({
            lng: C.lng,
            lat: C.lat,
            name: C.name
          });
        }
      }
    );
    const y = "mapId" + Math.floor(Math.random() * 1e9), u = W(null), c = W(null);
    let g;
    function b() {
      c.value && c.value.clientHeight < 10 || !c.value ? Fe(b, 300) : Fe(w, 100);
    }
    let I, v, V;
    function w() {
      lt.load({
        key: gn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((C) => {
        I = C, v = new I.Map(y).on("complete", () => {
          var S, _, m, $;
          V = new I.Geocoder(), (S = e.modelValue) != null && S.lng && ((_ = e.modelValue) != null && _.lat) && O({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const A = ($ = (m = u.value) == null ? void 0 : m.$el) == null ? void 0 : $.children;
          A && A.length > 1 && new I.AutoComplete({
            input: A[1]
          }).on("select", (h) => {
            var R, F, E;
            (R = h == null ? void 0 : h.poi) != null && R.name && ((F = h.poi.location) != null && F.lng && ((E = h.poi.location) != null && E.lat) ? (O({
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }), n.value = {
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }) : v.setCity(h.poi.name, () => {
              let Q = v.getCenter();
              O({
                name: h.poi.name,
                lng: Q.lng,
                lat: Q.lat
              }), n.value = {
                name: h.poi.name,
                lng: Q.lng,
                lat: Q.lat
              };
            })), o("on-change", n.value);
          }), v.on("hotspotclick", (h) => {
            O({
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
    function O({ lng: C, lat: A, name: S }) {
      v.clearMap();
      let _ = new I.LngLat(C, A), m = new I.Marker({
        map: v,
        position: _,
        draggable: !0
      });
      v.add(m), T(C, A), m.on("dragend", () => {
        let $ = m.getPosition();
        n.value = {
          name: S || null,
          lng: $.lng,
          lat: $.lat
        }, T(C, A);
      }), m.on("click", ($) => {
        var h, R;
        g && g.open(v, (R = (h = $ == null ? void 0 : $.target) == null ? void 0 : h.getPosition) == null ? void 0 : R.call(h));
      }), v.setFitView();
    }
    function T(C, A) {
      V.getAddress([C, A], (S, _) => {
        S === "complete" && _.info === "OK" && _.regeocode && _.regeocode.formattedAddress ? g = new I.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + _.regeocode.formattedAddress + "</div>",
          offset: new I.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (g = null, console.warn("地图获取位置信息失败", _));
      });
    }
    return Ne(b), Wt(() => {
      var C;
      v && (v.destroy(), (C = lt) == null || C.reset(), v = null, V = null, g = null);
    }), (C, A) => (B(), M("div", {
      style: te(p(f)),
      class: "containerIKJ"
    }, [
      j(p(ta), {
        ref_key: "mapInputRef",
        ref: u,
        modelValue: p(n).name,
        "onUpdate:modelValue": A[0] || (A[0] = (S) => p(n).name = S),
        class: Be({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || p(L)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      P("div", {
        style: te(p(d)),
        ref_key: "mapRef",
        ref: c,
        id: y
      }, null, 4)
    ], 4));
  }
});
var ft;
const It = /* @__PURE__ */ ue({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (ft = window == null ? void 0 : window.g) != null && ft.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = W([]), a = N({
      get() {
        let u = e.modelValue;
        return Array.isArray(u) ? ie(u) : sl(u) ? Al({
          group: n.value,
          condition: (c) => (c == null ? void 0 : c.value) === u,
          pathKey: "value"
        }) : Nl(u) ? u.split(e.separator) : [];
      },
      set(u) {
        if (e.onlyLastVal)
          xe(u) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", pl(u));
        else {
          if (rl(e.modelValue, u))
            return;
          o("update:modelValue", ie(u));
        }
      }
    });
    function s() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      ze.get(e.url).then((u) => {
        var g;
        let c = null;
        (g = u == null ? void 0 : u.data) != null && g.records ? c = u.data.records : u != null && u.data ? c = u.data : u && (c = u), c ? (typeof e.optionFilter == "function" && G(e.optionFilter) === "Function" && (c = e.optionFilter(c)), n.value = f(c)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function f(u) {
      let c = [];
      for (let g of u) {
        let b = {
          value: g[e.optionVal],
          label: g[e.optionLabel]
        };
        g != null && g.children && !xe(g.children) && (b.children = f(g.children)), c.push(b);
      }
      return c;
    }
    function d(u) {
      return e.onlyLastLabel ? pl(u) : u.join(e.separator);
    }
    function y(u, c) {
      let g = "";
      xe(c) || (g = c.map((b) => b == null ? void 0 : b.label).join(e.separator)), o("on-label-change", g);
    }
    return Ne(s), (u, c) => {
      const g = J("Cascader");
      return B(), X(g, {
        data: p(n),
        modelValue: p(a),
        "onUpdate:modelValue": c[0] || (c[0] = (b) => Pe(a) ? a.value = b : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": d,
        placeholder: e.placeholder || p(L)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Pt = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = W(), a = N({
      get() {
        if (e.modelValue && (sl(e.modelValue) || Nl(e.modelValue))) {
          let f = String(e.modelValue).trim();
          if (/^\d*$/.test(f)) {
            let y = f.substring(0, 2) + "0000", u, c = s(f);
            return c.length < 7 ? u = f.substring(0, 4) + "00" : u = f.substring(0, 6), /^8\d+$/.test(f) ? [y, c] : [y, u, c];
          }
          return f.indexOf(e.separator) !== -1 ? f.split(e.separator) : [f];
        } else
          return Array.isArray(e.modelValue) ? ie(e.modelValue) : (n.value && (n.value.select = []), []);
      },
      set(f) {
        if (xe(f))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let d = pl(f), y = "", u = "";
          if (d && (y = d.code), y && y.length < 12) {
            let c = [...y];
            for (; c.length < 12; )
              c.push(0);
            y = c.join("");
          }
          if (Array.isArray(f) && (u = f.map((c) => c == null ? void 0 : c.name).join(e.separator)), y) {
            if (y === e.modelValue)
              return;
            o("update:modelValue", y);
          }
          u && o("on-name-change", u);
        }
      }
    });
    function s(f) {
      let d = [...f];
      for (; d[d.length - 1] === "0"; )
        d.pop();
      return d.join("");
    }
    return (f, d) => (B(), X(p(oa), tl(f.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: n,
      modelValue: p(a),
      "onUpdate:modelValue": d[0] || (d[0] = (y) => Pe(a) ? a.value = y : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(L)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Qe(t) {
  var s, f, d;
  const r = (...y) => Ee.apply(this, y), o = r("r.closePreview"), e = r("r.fullImg");
  let n = Bl(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${t}' alt='${e}' ><i class='ivu-icon ivu-icon-md-close' title='${o}' ></i></div>`, (f = (s = a.querySelector(".ivu-icon-md-close")) == null ? void 0 : s.addEventListener) == null || f.call(s, "click", function() {
    var u;
    let y = Bl(document.getElementsByTagName("body"));
    (u = y == null ? void 0 : y.removeChild) == null || u.call(y, a);
  }), (d = n == null ? void 0 : n.appendChild) == null || d.call(n, a);
}
const bn = { class: "previewBoxM" }, kn = { class: "imgLoading" }, wn = /* @__PURE__ */ P("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), _n = [
  wn
], Vn = ["src", "alt"], Cn = { class: "deleteModal" }, Sn = { class: "previewBoxM" }, Tn = {
  key: 0,
  class: "previewImg"
}, Bn = ["src", "alt"], xn = { class: "deleteModal" }, Ln = { class: "customFileListM" }, On = {
  key: 0,
  class: "customFileListItem"
}, An = ["onClick", "title"], In = { class: "btBoxJ" }, Pn = { class: "customFileListM" }, Fn = {
  key: 0,
  class: "customFileListItem"
}, $n = { class: "listLoading" }, Rn = /* @__PURE__ */ P("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Kn = [
  Rn
], Mn = ["onClick", "title"], Dn = { class: "btBoxJ" };
var pt;
const Ft = /* @__PURE__ */ ue({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (pt = window == null ? void 0 : window.g) != null && pt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = fl([]), a = fl([]), s = N(() => !e.manualUpload && e.showImg && u.value ? "img" : e.manualUpload && e.showImg && u.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "list" : ""), f = N(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), d = N({
      get() {
        return e.manualUpload ? y.value : y.value.map((h) => ({ id: h }));
      },
      set(h) {
        e.manualUpload ? y.value = h || [] : y.value = (h == null ? void 0 : h.map((R) => R == null ? void 0 : R.id)) || [];
      }
    }), y = N({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((h) => h !== "--") : G(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(h) {
        if (e.length === 1) {
          let R = Bl(h);
          o("update:modelValue", R ?? null), o("on-change", R ?? null);
        } else
          o("update:modelValue", ie(h)), o("on-change", ie(h));
      }
    }), u = N(() => {
      let h;
      if (e.manualUpload ? h = d.value : h = a.value, !h)
        return !1;
      for (let R of h) {
        let F;
        if (e.manualUpload ? F = R == null ? void 0 : R.type : F = R == null ? void 0 : R.mimeType, !F || F && !(Sl(F) || F === "loading"))
          return !1;
      }
      return !0;
    });
    we(
      () => d.value,
      async (h) => {
        if (s.value === "localImg")
          h != null && h.length ? n.value = await g(h) : n.value = [];
        else if (h != null && h.length && s.value !== "localList") {
          let R = ie(h);
          const F = ie(a.value);
          for (let E of R)
            if ((E == null ? void 0 : E.name) === void 0)
              if (E.id) {
                const Q = xl(F, (ne) => (ne == null ? void 0 : ne.id) === E.id);
                Q ? (E.name = Q.name, E.mimeType = Q.mimeType) : (E.mimeType = "loading", ze.get(e.url + "/" + E.id).then((ne) => {
                  var be, Se, q, me, de, z;
                  E.name = ((q = (Se = (be = ne == null ? void 0 : ne.data) == null ? void 0 : be.returnValue) == null ? void 0 : Se[0]) == null ? void 0 : q.name) || L("r.file") + Zl(h, E), E.mimeType = ((z = (de = (me = ne == null ? void 0 : ne.data) == null ? void 0 : me.returnValue) == null ? void 0 : de[0]) == null ? void 0 : z.mimeType) || "unknown", jt(a);
                }).catch(() => {
                  E.name = L("r.file") + Zl(R, E);
                }));
              } else
                E.name = L("r.unknown");
          a.value = R;
        } else
          a.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function c(h) {
      return (h == null ? void 0 : h.name) || (h == null ? void 0 : h.split) && pl(h.split("/")) || h;
    }
    async function g(h) {
      let R = [];
      for (let F of h) {
        let E = await Cl(F);
        R.push(E);
      }
      return R;
    }
    function b(h) {
      if (!e.disabled) {
        let R = d.value;
        R == null || R.splice(h, 1), d.value = R;
      }
    }
    function I(h) {
      h != null && h.id && window.open(e.url + "/" + h.id + "/download");
    }
    function v(h) {
      return e.manualUpload ? (h == null ? void 0 : h.type) && Sl(h.type) : (h == null ? void 0 : h.id) && h.mimeType && Sl(h.mimeType);
    }
    function V(h) {
      if (e.manualUpload) {
        if (!h)
          return;
        Cl(h).then((R) => {
          Qe(R);
        });
      } else
        h != null && h.id && Qe(e.url + "/" + h.id + "/download?preview=true");
    }
    function w(h) {
      G(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : G(h) === "File" && Cl(h).then((R) => {
        xa(h.name, R);
      });
    }
    function O(h) {
      var R, F;
      if (e.manualUpload) {
        if (h) {
          let E = bt(h.name);
          if ((R = e.format) != null && R.length && e.format.indexOf(E) < 0)
            return $e(
              L("r.wrongFileType"),
              L("r.supportType") + (((F = e.format) == null ? void 0 : F.length) && String(e.format) || L("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && h.size > e.maxSize * 1024)
            return $e(L("r.fileIsBig"), L("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Q = d.value;
          Q == null || Q.push(h), d.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function T(h) {
      console.warn(h), $e(L("r.uploadError"), "", "error");
    }
    function C(h, R, F) {
      var E, Q, ne, be, Se, q;
      if ((h == null ? void 0 : h.code) === 0) {
        let me = d.value;
        R.id = (Q = (E = h.data) == null ? void 0 : E[0]) == null ? void 0 : Q.id, R.name = (be = (ne = h.data) == null ? void 0 : ne[0]) == null ? void 0 : be.name, R.mimeType = (q = (Se = h.data) == null ? void 0 : Se[0]) == null ? void 0 : q.mimeType, me == null || me.push(R), d.value = me;
      } else
        $e(L("r.uploadFail"), (h == null ? void 0 : h.message) || "", "error");
    }
    function A() {
      $e(L("r.fileIsBig"), L("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function S() {
      var h;
      $e(
        L("r.wrongFileType"),
        L("r.supportType") + (((h = e.format) == null ? void 0 : h.length) && String(e.format) || L("r.none")),
        "warning"
      );
    }
    function _(h) {
      let R = h == null ? void 0 : h.id, F = h == null ? void 0 : h.mimeType;
      R && (G(F) === "String" && F.indexOf("image") > -1 ? Qe(e.url + "/" + R + "/download?preview=true") : window.open(e.url + "/" + R + "/download?preview=true"));
    }
    function m(h) {
      var F, E, Q;
      let R = (Q = (E = (F = h == null ? void 0 : h.response) == null ? void 0 : F.data) == null ? void 0 : E[0]) == null ? void 0 : Q.id;
      $(null, R);
    }
    function $(h, R) {
      if (!(!R && R !== 0) && !e.disabled && y.value.indexOf(R) !== -1) {
        const F = ie(y.value);
        let E = d.value;
        E == null || E.splice(F.indexOf(R), 1), d.value = E;
      }
    }
    return (h, R) => {
      var ne, be, Se, q, me, de;
      const F = J("Button"), E = J("Upload"), Q = J("Icon");
      return B(), M("div", null, [
        j(E, {
          name: "files",
          action: p(f),
          "before-upload": O,
          "on-error": T,
          "on-success": C,
          "on-exceeded-size": A,
          "on-preview": _,
          "on-remove": m,
          "on-format-error": S,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((ne = p(d)) == null ? void 0 : ne.length) && ((be = p(d)) == null ? void 0 : be.length) >= e.length || !!e.disabled
        }, {
          default: Y(() => {
            var z, oe;
            return [
              j(F, {
                icon: "ios-cloud-upload-outline",
                class: Be({
                  disabledR: e.length && ((z = p(d)) == null ? void 0 : z.length) && ((oe = p(d)) == null ? void 0 : oe.length) >= e.length || !!e.disabled
                })
              }, {
                default: Y(() => [
                  ve(U(p(L)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        fe(P("div", bn, [
          (B(!0), M(ge, null, _e(p(a), (z) => (B(), M(ge, {
            key: z == null ? void 0 : z.id
          }, [
            !e.manualUpload && z && z.id !== null ? (B(), M("div", {
              key: 0,
              class: Be(["previewImg", { previewLoading: z.mimeType === "loading" }])
            }, [
              fe(P("div", kn, _n, 512), [
                [ye, z.mimeType === "loading"]
              ]),
              fe(P("img", {
                src: h.url + "/" + z.id + "/download?preview=true",
                alt: z.name
              }, null, 8, Vn), [
                [ye, z.mimeType !== "loading"]
              ]),
              fe(P("div", Cn, [
                j(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(L)("r.fView"),
                  onClick: (oe) => p(Qe)(e.url + "/" + z.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                j(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (oe) => $(oe, z.id),
                  title: p(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ye, z.mimeType !== "loading"]
              ])
            ], 2)) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [ye, p(s) === "img" && ((Se = p(a)) == null ? void 0 : Se.length)]
        ]),
        fe(P("div", Sn, [
          (B(!0), M(ge, null, _e(p(n), (z, oe) => (B(), M(ge, {
            key: "manualImg" + oe
          }, [
            e.manualUpload && z ? (B(), M("div", Tn, [
              P("img", {
                src: z,
                alt: "manualImg" + oe
              }, null, 8, Bn),
              P("div", xn, [
                j(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ce) => p(Qe)(z),
                  title: p(L)("r.fView")
                }, null, 8, ["onClick", "title"]),
                j(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ce) => b(oe),
                  title: p(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [ye, p(s) === "localImg" && ((q = p(n)) == null ? void 0 : q.length)]
        ]),
        fe(P("div", Ln, [
          (B(!0), M(ge, null, _e(p(d), (z, oe) => (B(), M(ge, {
            key: "manualItem" + oe
          }, [
            e.manualUpload && z ? (B(), M("p", On, [
              z.name ? (B(), X(Q, {
                key: 0,
                type: p(nt)(z.name)
              }, null, 8, ["type"])) : se("", !0),
              P("span", {
                class: Be(["upNameT", { previewName: v(z) }]),
                onClick: (ce) => w(z),
                title: p(L)("r.download")
              }, U(c(z)), 11, An),
              P("span", In, [
                v(z) ? (B(), X(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ce) => V(z),
                  title: p(L)("r.fView")
                }, null, 8, ["onClick", "title"])) : se("", !0),
                j(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ce) => b(oe),
                  title: p(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [ye, p(s) === "localList" && ((me = p(d)) == null ? void 0 : me.length)]
        ]),
        fe(P("div", Pn, [
          (B(!0), M(ge, null, _e(p(a), (z, oe) => (B(), M(ge, {
            key: "defaultItem" + oe
          }, [
            !e.manualUpload && z ? (B(), M("div", Fn, [
              fe(P("div", $n, Kn, 512), [
                [ye, z.mimeType === "loading"]
              ]),
              fe(j(Q, {
                type: p(nt)(z.name)
              }, null, 8, ["type"]), [
                [ye, z.mimeType !== "loading"]
              ]),
              fe(P("span", {
                class: Be(["upNameT", { previewName: v(z) }]),
                onClick: (ce) => I(z),
                title: p(L)("r.download")
              }, U(z.name || p(L)("r.file") + (oe + 1)), 11, Mn), [
                [ye, z.mimeType !== "loading"]
              ]),
              fe(P("span", Dn, [
                v(z) ? (B(), X(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ce) => V(z),
                  title: p(L)("r.fView")
                }, null, 8, ["onClick", "title"])) : se("", !0),
                j(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ce) => b(oe),
                  title: p(L)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ye, z.mimeType !== "loading"]
              ])
            ])) : se("", !0)
          ], 64))), 128))
        ], 512), [
          [ye, p(s) === "list" && ((de = p(a)) == null ? void 0 : de.length)]
        ])
      ]);
    };
  }
}), zn = /* @__PURE__ */ P("div", { class: "bRoot" }, null, -1), $t = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = W(!1), a = W(!1), s = W(!1), f = N({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(V) {
        o("update:modelValue", [V, d.value]), o("on-change", [V, d.value]);
      }
    }), d = N({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(V) {
        o("update:modelValue", [f.value, V]), o("on-change", [f.value, V]);
      }
    }), y = N(
      () => (f.value || "") + ((f.value || d.value) && " - " || "") + (d.value || "")
    ), u = W();
    Ne(() => {
      u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        s.value = !0;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        s.value = !1;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (V) => {
        var w;
        !e.disabled && (f.value || d.value) && ((w = V == null ? void 0 : V.stopPropagation) == null || w.call(V), I());
      });
    });
    function c() {
      e.disabled || (n.value = !0);
    }
    function g(V) {
      f.value = V, n.value = !1, a.value = !0;
    }
    function b(V) {
      d.value = V, a.value = !1;
    }
    function I() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function v() {
      n.value = !1, a.value = !1, f.value && d.value === null && (f.value = null);
    }
    return (V, w) => {
      const O = J("DatePicker"), T = J("Icon"), C = J("Input");
      return B(), M("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: u
      }, [
        j(O, {
          open: p(a),
          modelValue: p(d),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: b,
          onOnClickoutside: v
        }, {
          default: Y(() => [
            zn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        j(O, {
          open: p(n),
          modelValue: p(f),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: g,
          onOnClickoutside: v
        }, {
          default: Y(() => [
            P("div", { onClick: c }, [
              j(C, {
                class: "aRoot",
                modelValue: p(y),
                "onUpdate:modelValue": w[0] || (w[0] = (A) => Pe(y) ? y.value = A : null),
                readonly: "",
                placeholder: e.placeholder || p(L)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: Y(() => [
                  j(T, {
                    type: p(s) && (p(f) || p(d)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Un = { class: "editor-pro-root" }, Rt = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = fl(), a = N({
      get() {
        return e.modelValue;
      },
      set(u) {
        o("update:modelValue", u), o("on-change", u);
      }
    }), s = N(
      () => Object.assign(
        {
          placeholder: e.placeholder || L("r.pInput"),
          insertKeys: {
            index: 31,
            keys: ["previewX"]
          }
        },
        e.toolbarConfig
      )
    ), f = N(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(u, c) {
                let g = new FormData();
                g.append("files", u);
                const b = u.name, I = e.imgUploadUrl ?? "/node-serve/file";
                ze.post(I, g, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((v) => {
                  if (v && v.data)
                    if (Array.isArray(v.data))
                      for (let V of v.data) {
                        const w = I + "/" + (V == null ? void 0 : V.id) + "/download";
                        c(w, b, w);
                      }
                    else {
                      const V = I + "/" + v.data.id + "/download";
                      c(V, b, V);
                    }
                }).catch(() => {
                  $e(L("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(u, c) {
                let g = new FormData();
                g.append("files", u);
                const b = e.videoUploadUrl ?? "/node-serve/file";
                ze.post(b, g, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((I) => {
                  if (I && I.data)
                    if (Array.isArray(I.data))
                      for (let v of I.data) {
                        const V = b + "/" + (v == null ? void 0 : v.id) + "/download";
                        c(V);
                      }
                    else {
                      const v = b + "/" + I.data.id + "/download";
                      c(v);
                    }
                }).catch(() => {
                  $e(L("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), d = N(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function y(u) {
      n.value = u;
    }
    return we(
      () => e.disabled,
      (u) => {
        u ? n.value.disable() : n.value.enable();
      }
    ), qt(() => {
      n.value && n.value.destroy();
    }), (u, c) => (B(), M("div", Un, [
      fe(j(p(ia), {
        class: "editor-pro-toolbar",
        editor: p(n),
        defaultConfig: p(s),
        mode: u.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ye, !u.disabled]
      ]),
      j(p(sa), {
        class: "editor-pro-editor",
        modelValue: p(a),
        "onUpdate:modelValue": c[0] || (c[0] = (g) => Pe(a) ? a.value = g : null),
        defaultConfig: p(f),
        mode: u.mode,
        onOnCreated: y,
        style: te(p(d))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Nn = {
  key: 19,
  class: "formInfoTxtXN"
}, En = {
  key: 20,
  class: "formTitleTxtXN"
}, rt = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t;
    function n(u) {
      return {
        withInfo: !!u.info,
        withTitle: !!u.title,
        inlineFormItemXN: e.inline,
        noLabel: u.type === "selectInput",
        [u.class]: u.class,
        slotInput: u.slotPosition
      };
    }
    function a(u, c) {
      o("item-change", {
        e: u,
        root: c
      });
    }
    function s(u, c) {
      o("re-validate", {
        e: u,
        root: c
      });
    }
    function f(u) {
      o("select-input-change", u);
    }
    function d(u, c) {
      o("al-name-change", {
        name: u,
        root: c
      });
    }
    function y(u, c) {
      o("async-label-change", {
        label: u,
        root: c
      });
    }
    return (u, c) => {
      const g = J("InputNumber"), b = J("Input"), I = J("Option"), v = J("Select"), V = J("Radio"), w = J("Icon"), O = J("RadioGroup"), T = J("Checkbox"), C = J("CheckboxGroup"), A = J("DatePicker"), S = J("TimePicker"), _ = J("FormItem");
      return e.item ? (B(), X(_, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Be(["relativeBox", n(e.item)])
      }, {
        default: Y(() => [
          e.item.type === "txt" ? (B(), M("div", {
            key: 0,
            style: te([e.itemStyle, { display: "inline-block" }]),
            class: Be({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, U(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (B(), X(g, {
            key: 1,
            style: te(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[0] || (c[0] = (m) => e.tempKeys[e.item.tempKey] = m),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: c[1] || (c[1] = (m) => a(m, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (B(), X(b, {
            key: 2,
            style: te(u.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[2] || (c[2] = (m) => e.tempKeys[e.item.tempKey] = m),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[3] || (c[3] = (m) => a(m, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, ll({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: Y(() => [
                Oe(u.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: Y(() => [
                P("span", null, U(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: Y(() => [
                P("span", null, U(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (B(), X(v, {
            key: 3,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[4] || (c[4] = (m) => u.tempKeys[e.item.tempKey] = m),
            style: te(u.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(L)("r.pSelect"),
            onOnChange: c[5] || (c[5] = (m) => a(m, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: Y(() => [
              (B(!0), M(ge, null, _e(e.item.options, (m, $) => (B(), X(I, {
                value: m.val,
                label: m.label || m.val,
                key: "option-" + e.item.key + $,
                disabled: !!m.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (B(), X(Ot, {
            key: 4,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[6] || (c[6] = (m) => u.tempKeys[e.item.tempKey] = m),
            "label-width": u.labelWidth,
            "item-width": u.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: f
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (B(), X(Pt, {
            key: 5,
            style: te(u.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[7] || (c[7] = (m) => e.valGroup[e.item.key] = m),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(L)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: c[8] || (c[8] = (m) => d(m, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (B(), X(It, {
            key: 6,
            style: te(u.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[9] || (c[9] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || u.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(L)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: c[10] || (c[10] = (m) => y(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (B(), X(V, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[11] || (c[11] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c[12] || (c[12] = (m) => a(m, e.item))
          }, {
            default: Y(() => [
              ve(U(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (B(), X(O, {
            key: 8,
            style: te(u.itemStyle),
            onOnChange: c[13] || (c[13] = (m) => s(m, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[14] || (c[14] = (m) => u.tempKeys[e.item.tempKey] = m)
          }, {
            default: Y(() => [
              (B(!0), M(ge, null, _e(e.item.options, (m) => (B(), X(V, {
                key: "radioItem" + m.val,
                label: m.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: Y(() => [
                  m.icon && !e.item.buttonType ? (B(), X(w, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : se("", !0),
                  P("span", null, U(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (B(), X(T, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[15] || (c[15] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled,
            onOnChange: c[16] || (c[16] = (m) => a(m, e.item))
          }, {
            default: Y(() => [
              ve(U(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (B(), X(C, {
            key: 10,
            style: te(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[17] || (c[17] = (m) => u.tempKeys[e.item.tempKey] = m),
            onOnChange: c[18] || (c[18] = (m) => s(m, e.item))
          }, {
            default: Y(() => [
              (B(!0), M(ge, null, _e(e.item.options, (m) => (B(), X(T, {
                key: "checkItem" + m.val,
                label: m.val,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: Y(() => [
                  m.icon ? (B(), X(w, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : se("", !0),
                  P("span", null, U(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (B(), X(b, {
            key: 11,
            type: "textarea",
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[19] || (c[19] = (m) => u.tempKeys[e.item.tempKey] = m),
            autosize: e.item.autosize || { minRows: 2 },
            style: te(u.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: c[20] || (c[20] = (m) => a(m, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (B(), X(Ft, {
            key: 12,
            style: te(u.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[21] || (c[21] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || u.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: c[22] || (c[22] = (m) => s(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (B(), X(A, {
            key: 13,
            style: te(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[23] || (c[23] = (m) => u.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(L)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: c[24] || (c[24] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (B(), X(S, {
            key: 14,
            style: te(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[25] || (c[25] = (m) => u.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(L)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: c[26] || (c[26] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (B(), X($t, {
            key: 15,
            style: te(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[27] || (c[27] = (m) => u.tempKeys[e.item.tempKey] = m),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(L)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: c[28] || (c[28] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (B(), X(Rt, {
            key: 16,
            class: "inlineBlock",
            style: te(u.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": c[29] || (c[29] = (m) => e.valGroup[e.item.key] = m),
            placeholder: e.item.placeholder || p(L)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: c[30] || (c[30] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (B(), X(At, {
            key: 17,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": c[31] || (c[31] = (m) => u.tempKeys[e.item.tempKey] = m),
            style: te(u.itemStyle),
            placeholder: e.item.placeholder || p(L)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: c[32] || (c[32] = (m) => a(m, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (B(), M("div", {
            key: 18,
            class: "inlineBlock",
            style: te(u.itemStyle)
          }, [
            Oe(u.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : se("", !0),
          e.item.info ? (B(), M("div", Nn, U(e.item.info), 1)) : se("", !0),
          e.item.title ? (B(), M("div", En, U(e.item.title), 1)) : se("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : se("", !0);
    };
  }
}), Gn = /* @__PURE__ */ P("input", { type: "text" }, null, -1), Hn = { class: "inlineBlock" }, bl = /* @__PURE__ */ ue({
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
  setup(t, { expose: r, emit: o }) {
    var Xl, Ql;
    const e = o, n = t, a = W(null), s = W({}), f = W([]), d = W({});
    let y = [];
    const u = ((Xl = window == null ? void 0 : window.g) == null ? void 0 : Xl.mgrURL) ?? "";
    let c = [], g = [];
    const b = W(!1), I = W(Math.random() * 1e8 + 1e3), v = (Ql = window == null ? void 0 : window.g) != null && Ql.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let V = !1;
    const w = N(() => Array.isArray(n.formData.length ? n.formData[0] : !1)), O = N(
      () => n.inline ? {
        width: n.itemWidth + n.labelWidth + "px"
      } : {}
    ), T = N(
      () => n.inline ? {
        width: "100%"
      } : { width: n.contentWidth }
    ), C = N(() => {
      let i = ie(n.formRules);
      for (let l in i)
        if (i.hasOwnProperty(l))
          if (Array.isArray(i[l]))
            for (let x of i[l])
              x && (x.message || x.validator || (x.message = L("r.required")));
          else
            G(i[l]) === "Object" && (i[l].message || i[l].validator || (i[l].message = L("r.required")));
      return i;
    }), A = N(() => {
      let i = [];
      if (w.value)
        for (let l of f.value)
          m(l, i);
      else
        m(f.value, i);
      return i.concat(c, g);
    }), S = N(() => {
      let i = [];
      if (w.value)
        for (let l of f.value)
          $(l, i);
      else
        $(f.value, i);
      return i;
    });
    function _(i) {
      return i.filter((l) => l == null ? void 0 : l.slotName);
    }
    function m(i, l) {
      for (let x of i)
        if (x.showing === !0 && x.key && x.type !== "selectInput" && (l.push(x.key), x.key2 && l.push(x.key2), x.collectLabel)) {
          if (!Array.isArray(x.collectLabel) && x.collectLabel.key)
            l.push(x.collectLabel.key);
          else if (Array.isArray(x.collectLabel))
            for (let k of x.collectLabel)
              k.key && l.push(k.key);
        }
    }
    function $(i, l) {
      for (let x of i)
        x.showing === !0 && x.key && x.type !== "selectInput" && l.push(x.key);
    }
    function h() {
      return new Promise((i) => {
        E(), F().then(() => {
          e("on-reset"), i(!0);
        });
      });
    }
    function R() {
      return new Promise((i) => {
        for (let l of y)
          l();
        y = [], d.value = {}, K(), oe(), F().then(() => {
          e("on-re-render"), i(!0);
        });
      });
    }
    function F() {
      return new Promise((i) => {
        I.value = Math.floor(Math.random() * 1e8 + 1e3), Re(function() {
          i(!0);
        });
      });
    }
    function E() {
      let i = be();
      for (let l in s.value)
        if (s.value.hasOwnProperty(l))
          if (Ce(i[l]))
            s.value[l] = i[l];
          else if (Array.isArray(s.value[l]))
            s.value[l] = [];
          else if (G(s.value[l]) === "Boolean")
            s.value[l] = !1;
          else {
            const x = Xe(n.formData, (k) => (k == null ? void 0 : k.key) === l);
            x && (x.type === "editor" || x.type === "editorPro") ? s.value[l] = "" : s.value[l] = null;
          }
      Q(i);
    }
    function Q(i) {
      for (let l in d.value)
        d.value.hasOwnProperty(l) && (Ce(i[l]) ? d.value[l] = i[l] : Array.isArray(d.value[l]) ? d.value[l] = [] : G(d.value[l]) === "Object" && d.value[l].hasOwnProperty("key") && d.value[l].hasOwnProperty("val") ? d.value[l].val = null : d.value[l] = null);
    }
    function ne(i) {
      let l = be();
      Ce(l[i]) ? d.value[i] = l[i] : Array.isArray(d.value[i]) ? d.value[i] = [] : d.value[i] = null;
    }
    function be() {
      let i = {};
      if (w.value)
        for (let l of f.value)
          Se(l, i);
      else
        Se(f.value, i);
      return i;
    }
    function Se(i, l) {
      for (let x of i)
        x.tempKey && Ce(x.defaultVal) && z(x, l), x.key && Ce(x.defaultVal) && (l[x.key] = x.defaultVal), x.key2 && Ce(x.defaultVal2) && (l[x.key2] = x.defaultVal2);
    }
    function q(i) {
      if (i.show) {
        if (G(i.show) === "Object")
          return de(i, me(i.show));
        if (Array.isArray(i.show))
          if (i.showOr) {
            for (let l of i.show)
              if (me(l) === !0)
                return de(i, !0);
            return de(i, !1);
          } else {
            for (let l of i.show)
              if (me(l) === !1)
                return de(i, !1);
            return de(i, !0);
          }
        else if (typeof i.show == "function")
          return de(i, i.show(s.value));
      } else
        i.showing || (i.showing = !0);
      return !0;
    }
    function me(i) {
      if (i.reg && typeof i.reg.test == "function")
        return i.reg.test(s.value[i.key]);
      if (Array.isArray(i.val)) {
        for (let l of i.val) {
          if ((s.value[i.key] || s.value[i.key] === 0 || s.value[i.key] === !1) && l === ".")
            return !0;
          if (s.value[i.key] === l)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function de(i, l) {
      return !i.showing && l && i.key ? (i.showing = l, i.defaultVal !== void 0 && (i.tempKey ? (d.value[i.tempKey] === null || d.value[i.tempKey] === void 0 || (G(d.value[i.tempKey]) === "Object" || Array.isArray(d.value[i.tempKey])) && xe(d.value[i.tempKey])) && z(i, d.value) : (s.value[i.key] === null || s.value[i.key] === void 0) && (s.value[i.key] = i.defaultVal), i.key2 && i.deafultVal2 !== void 0 && (s.value[i.key2] === null || s.value[i.key2] === void 0) && i.type !== "inputMap" && (s.value[i.key2] = i.defaultVal2)), i.tempKey && pe(d.value[i.tempKey], i)) : i.showing = l, l;
    }
    function z(i, l) {
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
    function oe() {
      let i = ie(n.formData);
      if (w.value)
        for (let l of i)
          ce(l);
      else
        ce(i);
      f.value = i;
    }
    function ce(i) {
      for (let l of i)
        switch (l.type) {
          case "selectInput":
            const x = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = x, d.value[x] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, y.push(
              we(
                () => d.value[x],
                (H) => {
                  pe(H, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const k = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = k, l.key3 ? d.value[k] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : d.value[k] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, y.push(
              we(
                () => d.value[k],
                (H) => {
                  pe(H, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const re = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = re, d.value[re] = l.defaultVal !== void 0 ? l.defaultVal : null, y.push(
              we(
                () => d.value[re],
                (H) => {
                  pe(H, l);
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
                  H ? y.push(
                    we(
                      () => {
                        let Z = "";
                        if (Array.isArray(l.changeOption))
                          for (let Te of l.changeOption) {
                            let Me = s.value[Te.valKey];
                            if (Me || Me === 0 || Me === !1)
                              Z += "&" + Te.key + "=" + Me;
                            else if (!Te.notRequired)
                              return !1;
                          }
                        return Z;
                      },
                      (Z) => {
                        let Te = ie(d.value[l.tempKey]);
                        if (d.value[l.tempKey] = null, Z && l.optionUrl) {
                          let Me = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          De((Me + Z).replace(/\?&/, "?"), l, Te);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), Ce(Te) && D(Te, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && y.push(
                    we(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? s.value[l.changeOption.valKey] : !1,
                      (H) => {
                        let Z = ie(d.value[l.tempKey]);
                        if (d.value[l.tempKey] = null, (H || H === 0 || H === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let Te = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          De((Te + "&" + l.changeOption.key + "=" + H).replace(/\?&/, "?"), l, Z);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), Ce(Z) && D(Z, l);
                      },
                      { immediate: !0 }
                    )
                  ) : G(l.changeOption) === "Boolean" && y.push(
                    we(
                      () => Xe(n.formData, (H) => (H == null ? void 0 : H.key) === l.key).optionUrl,
                      (H) => {
                        let Z = ie(d.value[l.tempKey]);
                        d.value[l.tempKey] = null, H ? De(H, l, Z) : (l.options = [], l.localOption && (l.options = [...l.localOption]), Ce(Z) && D(Z, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && De(l.optionUrl, l);
            else
              G(l.borrowOption) === "String" && (l.options = Xe(f.value, (H) => (H == null ? void 0 : H.key) === l.borrowOption).options);
            const ae = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = ae, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? d.value[ae] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? d.value[ae] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : d.value[ae] = l.defaultVal !== void 0 ? l.defaultVal : null, y.push(
              we(
                () => d.value[ae],
                (H) => {
                  pe(H, l);
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
            const le = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = le, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? d.value[le] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (d.value[le] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), y.push(
              we(
                () => d.value[le],
                (H) => {
                  pe(H, l);
                }
              )
            );
            break;
        }
    }
    function De(i, l, x) {
      ze.get(i).then((k) => {
        var ae;
        if (!l.options)
          return;
        let re = ((ae = k == null ? void 0 : k.data) == null ? void 0 : ae.records) || (k == null ? void 0 : k.data) || k || [];
        Array.isArray(re) ? (l.optionFilter && G(l.optionFilter) === "Function" && (re = l.optionFilter(re)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...re.map((le) => {
            let H;
            if (Array.isArray(l.optionLabel)) {
              let Z = "";
              l.optionLabel.forEach((Te, Me) => {
                let _l = String(le[Te]);
                Me === 1 ? Z += "（" + _l : Me > 1 ? Z += "、" + _l : Z += _l;
              }), H = {
                label: Z + "）",
                val: l.optionVal && le[l.optionVal]
              };
            } else
              H = {
                label: l.optionLabel && le[l.optionLabel],
                val: l.optionVal && le[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let Z of l.collectLabel)
                  Z.valKey && Z.valKey !== "label" && (H[Z.valKey] = le[Z.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (H[l.collectLabel.valKey] = le[l.collectLabel.valKey]);
            if (H.val !== null && H.val !== void 0)
              return H;
          })
        )) : (l.options.length = 0, l.options.push(...re))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), Ce(x) && D(x, l), l.disableOptionByOthers && (G(l.disableOptionByOthers) === "String" ? y.push(
          we(
            () => s.value[l.disableOptionByOthers],
            (le) => {
              if (ne(l.tempKey), !!l.options) {
                for (let H of l.options)
                  H.disabled && (H.disabled = !1);
                if (le || le === 0 || le === !1)
                  for (let H of l.options)
                    H.val === le && (H.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && y.push(
          we(
            () => l.disableOptionByOthers.filter((le) => le).map((le) => s.value[le]),
            (le) => {
              if (ne(l.tempKey), !!l.options) {
                for (let H of l.options)
                  H.disabled && (H.disabled = !1);
                if (le) {
                  for (let H of l.options)
                    for (let Z = 0; Z < le.length; Z++)
                      if (H.val === le[Z]) {
                        H.disabled = !0, le.splice(Z, 1);
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
    function D(i, l) {
      Array.isArray(l.options) && ht(l.options, { val: i }) !== -1 && (d.value[l.tempKey] = i);
    }
    function K() {
      if (s.value = {}, w.value)
        for (let i of n.formData)
          he(i);
      else
        he(n.formData);
    }
    function he(i) {
      for (let l of i)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (s.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function pe(i, l) {
      if (l.showing)
        switch (l.type) {
          case "selectInput":
            i && (i.beforeKey && delete s.value[i.beforeKey], s.value[i.key] = i.val);
            break;
          case "inputMap":
            if (!l.key || !l.key2)
              return;
            i ? (s.value[l.key] = i.lng, s.value[l.key2] = i.lat, l.key3 && (s.value[l.key3] = i.name)) : (s.value[l.key] = null, s.value[l.key2] = null, l.key3 && (s.value[l.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!l.key)
              return;
            if (i || i === 0) {
              let re = /^-?\d+(.\d+)?$/;
              l.numberVal && re.test(i) ? s.value[l.key] = Number(i) : s.value[l.key] = i;
            } else
              s.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? s.value[l.key] = i === void 0 || i === "" || i === null ? null : !!i : l.multiple || l.type === "checkboxGroup" ? s.value[l.key] = Object.assign([], i) : s.value[l.key] = i, l.collectLabel) {
              const re = ke(l, i);
              if (Array.isArray(l.collectLabel)) {
                for (let ae of l.collectLabel)
                  if (ae != null && ae.key && ae.valKey) {
                    const le = ee(ae.key);
                    let H = null;
                    Array.isArray(re) ? (H = re.map((Te) => Te[ae.valKey]), s.value[ae.key] = H, le && (d.value[le] = H)) : (re && Ce(re[ae.valKey]) && (H = re[ae.valKey]), s.value[ae.key] = H, le && (d.value[le] = H));
                    let Z = Xe(f.value, (Te) => (Te == null ? void 0 : Te.key) === ae.key);
                    Z && Z.tempKey && (d.value[Z.tempKey] = s.value[ae.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const ae = ee(l.collectLabel.key);
                let le = null;
                Array.isArray(re) ? (le = re.map(
                  (Z) => l.collectLabel && !Array.isArray(l.collectLabel) && Z[l.collectLabel.valKey]
                ), s.value[l.collectLabel.key] = le, ae && (d.value[ae] = le)) : (re && Ce(re[l.collectLabel.valKey]) && (le = re[l.collectLabel.valKey]), s.value[l.collectLabel.key] = le, ae && (d.value[ae] = le));
                let H = Xe(
                  f.value,
                  (Z) => l.collectLabel && !Array.isArray(l.collectLabel) && (Z == null ? void 0 : Z.key) === l.collectLabel.key || !1
                );
                H && H.tempKey && (d.value[H.tempKey] = s.value[l.collectLabel.key]);
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
              month: "YYYY-MM"
            };
            if (x === "date" || x === "datetime" || x === "time" || x === "year" || x === "month")
              i ? (x === "time" ? s.value[l.key] = i : s.value[l.key] = ol(i).format(typeof l.format == "string" ? l.format : k[x]), x === "date" && l.addTime && (s.value[l.key] += " 00:00:00")) : s.value[l.key] = null;
            else if (l.type === "monthRange" || x === "daterange" || x === "datetimerange" || x === "timerange") {
              if (!l.key2)
                return;
              i && i[0] && i[1] ? (x === "timerange" ? (s.value[l.key] = i[0], s.value[l.key2] = i[1]) : l.type === "monthRange" ? (s.value[l.key] = typeof l.format == "string" && ol(i[0]).format(l.format) || i[0], s.value[l.key2] = typeof l.format == "string" && l.format && ol(i[1]).format(l.format) || i[1]) : (s.value[l.key] = ol(i[0]).format(l.format || x && k[x]), s.value[l.key2] = ol(i[1]).format(l.format || x && k[x])), x === "daterange" && l.addTime && (s.value[l.key] += " 00:00:00", s.value[l.key2] += " 23:59:59")) : (s.value[l.key] = null, s.value[l.key2] = null);
            }
            break;
        }
    }
    function ke(i, l) {
      if (i.options)
        if (i != null && i.multiple || i.type === "checkboxGroup") {
          if (l) {
            let x = [];
            for (let k of i.options)
              l.indexOf(k == null ? void 0 : k.val) !== -1 && x.push(k);
            return x;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let x of i.options)
              if ((x == null ? void 0 : x.val) === l)
                return x;
          }
          return !1;
        }
    }
    function ee(i) {
      if (w.value) {
        for (let l of f.value) {
          const x = Ae(l, i);
          if (x)
            return x;
        }
        return !1;
      }
      return Ae(f.value, i);
    }
    function Ae(i, l) {
      for (let x of i)
        if (x.key === l)
          return x.tempKey;
      return !1;
    }
    function je(i, l) {
      let x = {};
      for (let k in s.value)
        s.value.hasOwnProperty(k) && i[k] !== void 0 && (x[k] = i[k], delete i[k]);
      Ue(x, l);
      for (let k in i)
        i.hasOwnProperty(k) && (g.indexOf(k) < 0 && g.push(k), s.value[k] = i[k]);
    }
    function qe(i) {
      let l = ie(i);
      if (w.value) {
        let x = [];
        for (let k of n.formData)
          x.push(...al(k, l));
        return x;
      }
      return al(n.formData, l);
    }
    function al(i, l) {
      return i.filter((x) => {
        for (let k of Object.keys(l))
          if ((x == null ? void 0 : x.key) === k && S.value.indexOf(k) > -1 && !(l[k] === null || (Array.isArray(l[k]) || G(l[k]) === "Object") && xe(l[k])))
            return delete l[k], !0;
        return !1;
      }).map((x) => x == null ? void 0 : x.key);
    }
    function Ue(i, l = !1) {
      let x = ie(i);
      kl(i, l);
      for (let k in s.value)
        if (s.value.hasOwnProperty(k) && i[k] !== void 0 && i[k] !== "--") {
          if (Array.isArray(i[k]))
            i[k] = i[k].filter((re) => re !== "--");
          else if (G(i[k]) === "Object")
            for (let re in i[k])
              i[k].hasOwnProperty(re) && i[k][re] === "--" && (i[k][re] = null);
          s.value[k] = i[k];
        } else
          l || (s.value[k] = Array.isArray(s.value[k]) ? [] : null);
      Re(function() {
        Ut(qe(x));
      });
    }
    function kl(i, l = !1) {
      if (w.value)
        for (let x of f.value)
          Gl(x, i, l);
      else
        Gl(f.value, i, l);
    }
    function Gl(i, l, x = !1) {
      for (let k of i)
        if (k.key && (x && (l[k.key] !== void 0 || k.key2 && l[k.key2] !== void 0) || !x) && k.tempKey)
          switch (k.type) {
            case "inputMap":
              if (!k.key2)
                continue;
              G(l[k.key]) === "Number" && G(l[k.key2] === "Number") ? k.key3 ? d.value[k.tempKey] = {
                lng: l[k.key],
                lat: l[k.key2],
                name: l[k.key3]
              } : d.value[k.tempKey] = {
                lng: l[k.key],
                lat: l[k.key2]
              } : k.key3 ? d.value[k.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : d.value[k.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[k.key] && l[k.key] !== "--" || l[k.key] === 0 ? d.value[k.tempKey] = l[k.key] : d.value[k.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[k.key] && l[k.key] !== "--" || l[k.key] === 0 || l[k.key] === !1 ? k.multiple || k.type === "checkboxGroup" ? d.value[k.tempKey] = [...l[k.key]] : k.booleanVal ? d.value[k.tempKey] = l[k.key] ? 1 : 0 : d.value[k.tempKey] = l[k.key] : k.multiple || k.type === "checkboxGroup" ? d.value[k.tempKey] = [] : d.value[k.tempKey] = null;
              break;
            case "date":
            case "time":
              if (k.dateType === "date" || k.dateType === "datetime" || k.dateType === "year" || k.dateType === "month" || k.dateType === "time")
                d.value[k.tempKey] = l[k.key] && l[k.key] !== "--" ? l[k.key] : null;
              else if (k.dateType === "daterange" || k.dateType === "datetimerange" || k.dateType === "timerange") {
                if (!k.key2)
                  continue;
                d.value[k.tempKey] = l[k.key] && l[k.key] !== "--" && l[k.key2] && l[k.key2] !== "--" && [l[k.key], l[k.key2]] || [];
              }
              break;
          }
    }
    function Mt(i) {
      if (Array.isArray(i))
        for (let l of i)
          Hl(l);
      else
        G(i) === "Object" && Hl(i);
    }
    function Hl(i) {
      const { index: l, indexB: x, key: k, val: re } = i;
      if (typeof l == "number")
        if (Array.isArray(f.value[l])) {
          if (typeof x == "number")
            if (k && i.hasOwnProperty("val"))
              f.value[l][x][k] = re;
            else
              for (let ae of Object.keys(i))
                ae !== "index" && k !== "indexB" && (f.value[l][x][ae] = i[ae]);
        } else if (k && i.hasOwnProperty("val"))
          f.value[l][k] = re;
        else
          for (let ae of Object.keys(i))
            ae !== "index" && (f.value[l][ae] = i[ae]);
    }
    function Wl({ label: i, root: l }) {
      l.key2 && (s.value[l.key2] = i), Je({
        e: i,
        root: l
      });
    }
    function jl(i) {
      i.beforeKey && Qt(c, (l) => l === i.beforeKey), i.key && (c.indexOf(i.key) === -1 && c.push(i.key), Je({
        e: null,
        root: i
      }));
    }
    function ql({ name: i, root: l }) {
      l.key2 && (s.value[l.key2] = i), Je({
        e: i,
        root: l
      });
    }
    function Jl({ e: i, root: l }) {
      Je({
        e: i,
        root: l
      }), Re(function() {
        var x, k;
        (k = (x = a.value) == null ? void 0 : x.validateField) == null || k.call(x, l.key);
      });
    }
    function Je({ e: i, root: l }) {
      Fe(() => {
        let x = {
          event: i
        };
        if (l.key && (x[l.key] = s.value[l.key]), l.key2 && (x[l.key2] = s.value[l.key2]), Array.isArray(l.collectLabel))
          for (let k of l.collectLabel)
            x[k.key] = s.value[k.key];
        else
          l.collectLabel && l.collectLabel.key && (x[l.collectLabel.key] = s.value[l.collectLabel.key]);
        e("on-item-change", x);
      }, 500);
    }
    function Yl() {
      let i = {};
      for (let l of A.value)
        i[l] = s.value[l];
      return n.trim && (i = yl(i)), i;
    }
    function Dt() {
      var i, l;
      (l = (i = a.value) == null ? void 0 : i.validate) == null || l.call(i);
    }
    function zt(i) {
      Fe(() => {
        var l, x;
        (x = (l = a.value) == null ? void 0 : l.validateField) == null || x.call(l, i, () => {
        });
      }, 10);
    }
    function Ut(i) {
      Fe(() => {
        var l, x;
        if (Array.isArray(i))
          for (let k of i)
            (x = (l = a.value) == null ? void 0 : l.validateField) == null || x.call(l, k, () => {
            });
      }, 10);
    }
    function Nt(i) {
      i !== void 0 && (b.value = !!i);
    }
    function wl() {
      var i, l;
      n.disabled || (l = (i = a.value) == null ? void 0 : i.validate) == null || l.call(i, (x) => {
        V || (V = !0, x && (b.value = !0, e("on-submit", Yl())), Fe(() => {
          V = !1;
        }, 2e3));
      });
    }
    return Ne(() => {
      K(), oe();
    }), r({
      resetForm: h,
      refreshFormDom: F,
      reRenderForm: R,
      setItemToValGroup: je,
      updateValGroup: Ue,
      updateFormDataT: Mt,
      validate: Dt,
      reValidate: zt,
      changeLoading: Nt,
      getValGroup: Yl,
      submit: wl
    }), (i, l) => {
      const x = J("FormItem"), k = J("Button"), re = J("Form");
      return B(), X(re, {
        ref_key: "formGroupXRef",
        ref: a,
        model: p(s),
        rules: p(C),
        "label-width": n.labelWidth,
        inline: n.inline,
        "show-message": n.showMessage,
        class: "formXN",
        key: p(I)
      }, {
        default: Y(() => [
          j(x, { style: { display: "none" } }, {
            default: Y(() => [
              Gn
            ]),
            _: 1
          }),
          p(w) ? (B(!0), M(ge, { key: 0 }, _e(p(f), (ae, le) => (B(), M("div", {
            class: Be([i.teamClass, "formTeamBox" + le]),
            key: "formTeamBox" + le
          }, [
            (B(!0), M(ge, null, _e(ae, (H, Z) => (B(), M(ge, {
              key: "formItem" + Z
            }, [
              q(H) ? (B(), X(rt, {
                key: 0,
                item: H,
                style: te(p(O)),
                "item-style": p(T),
                "val-group": p(s),
                "temp-keys": p(d),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": p(u),
                "upload-url": p(v),
                onItemChange: Je,
                onReValidate: Jl,
                onClearTempKeyItem: ne,
                onSelectInputChange: jl,
                onAlNameChange: ql,
                onAsyncLabelChange: Wl
              }, ll({ _: 2 }, [
                _e(_(ae), (Te) => ({
                  name: Te.slotName,
                  fn: Y((Me) => [
                    Oe(i.$slots, Te.slotName, {
                      valGroup: Me.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : se("", !0)
            ], 64))), 128))
          ], 2))), 128)) : se("", !0),
          (B(!0), M(ge, null, _e(p(f), (ae, le) => (B(), M(ge, {
            key: "formItem" + le
          }, [
            !p(w) && q(ae) ? (B(), X(rt, {
              key: 0,
              item: ae,
              style: te(p(O)),
              "item-style": p(T),
              "val-group": p(s),
              "temp-keys": p(d),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": p(u),
              "upload-url": p(v),
              onItemChange: Je,
              onReValidate: Jl,
              onClearTempKeyItem: ne,
              onSelectInputChange: jl,
              onAlNameChange: ql,
              onAsyncLabelChange: Wl
            }, ll({ _: 2 }, [
              _e(_(i.formData), (H) => ({
                name: H.slotName,
                fn: Y((Z) => [
                  Oe(i.$slots, H.slotName, {
                    valGroup: Z.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : se("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (B(), X(x, { key: 1 }, {
            default: Y(() => [
              j(k, {
                onClick: wl,
                style: te(p(T)),
                type: "primary",
                loading: n.btnLoading && p(b),
                disabled: n.disabled
              }, {
                default: Y(() => [
                  ve(U(n.longOkBtTxt || p(L)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : se("", !0),
          P("div", Hn, [
            n.showInlineOkBt ? (B(), X(k, {
              key: 0,
              type: "primary",
              class: Be({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: wl,
              loading: n.btnLoading && p(b),
              disabled: n.disabled
            }, {
              default: Y(() => [
                ve(U(n.inlineOkBtTxt || p(L)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : se("", !0),
            n.showInlineClearBt ? (B(), X(k, {
              key: 1,
              onClick: h,
              class: Be({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: Y(() => [
                ve(U(n.inlineClearBtTxt || p(L)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : se("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Wn = /* @__PURE__ */ ue({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: () => Le().formGroupWidth },
    labelWidth: { default: () => Le().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(t, { expose: r, emit: o }) {
    const e = o, n = t, a = W({ width: n.with }), s = W(!1), f = W(), d = N(() => {
      var S, _;
      if (Array.isArray(n.formData))
        if (Array.isArray(n.formData[0])) {
          let m = [];
          for (let $ of n.formData)
            $ && (m = m.concat(
              $.filter((h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition)
            ));
          return m;
        } else
          return (_ = (S = n.formData) == null ? void 0 : S.filter) == null ? void 0 : _.call(
            S,
            (m) => (m == null ? void 0 : m.type) === "custom" || (m == null ? void 0 : m.type) === "input" && m.slotName && m.slotPosition
          );
      return [];
    });
    function y() {
      return new Promise((S) => {
        var _, m;
        (m = (_ = f.value).resetForm) == null || m.call(_).then(($) => {
          S($);
        });
      });
    }
    function u() {
      return new Promise((S) => {
        var _, m;
        (m = (_ = f.value).refreshFormDom) == null || m.call(_).then(($) => {
          S($);
        });
      });
    }
    function c() {
      return new Promise((S) => {
        var _, m;
        (m = (_ = f.value).reRenderForm) == null || m.call(_).then(($) => {
          S($);
        });
      });
    }
    function g(S, _) {
      var m, $;
      ($ = (m = f.value).setItemToValGroup) == null || $.call(m, S, _);
    }
    function b(S, _) {
      var m, $;
      ($ = (m = f.value).updateValGroup) == null || $.call(m, S, _);
    }
    function I(S) {
      var _, m;
      (m = (_ = f.value).updateFormDataT) == null || m.call(_, S);
    }
    function v() {
      var S, _;
      (_ = (S = f.value).validate) == null || _.call(S);
    }
    function V(S) {
      var _, m;
      (m = (_ = f.value).reValidate) == null || m.call(_, S);
    }
    function w(S) {
      var _, m;
      S !== void 0 && (s.value = !!S, (m = (_ = f.value).changeLoading) == null || m.call(_, s.value));
    }
    function O() {
      var S, _;
      return (_ = (S = f.value).getValGroup) == null ? void 0 : _.call(S);
    }
    function T() {
      s.value = !0;
    }
    function C() {
      var S, _;
      (_ = (S = f.value).submit) == null || _.call(S);
    }
    function A() {
      e("on-cancel"), Fe(() => {
        var S, _;
        s.value = !1, (_ = (S = f.value).changeLoading) == null || _.call(S, !1);
      }, 1e3);
    }
    return r({
      resetForm: y,
      refreshFormDom: u,
      reRenderForm: c,
      setItemToValGroup: g,
      updateValGroup: b,
      updateFormDataT: I,
      validate: v,
      reValidate: V,
      changeLoading: w,
      getValGroup: O,
      submit: C,
      close: A
    }), (S, _) => {
      const m = J("Button");
      return B(), M("div", {
        style: te(p(a)),
        class: "formGroupBoxVM"
      }, [
        j(bl, tl({
          ref_key: "formRRef",
          ref: f
        }, S.$attrs, {
          "form-data": n.formData,
          "label-width": n.labelWidth,
          "content-width": n.contentWidth,
          "item-width": n.itemWidth,
          btnLoading: n.btnLoading,
          onOnSubmit: T
        }), ll({ _: 2 }, [
          _e(p(d), ($) => ({
            name: $.slotName,
            fn: Y(({ valGroup: h }) => [
              Oe(S.$slots, $.slotName, { valGroup: h })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        fe(P("div", {
          class: "formFooterVM",
          style: te({ marginLeft: n.labelWidth + "px" })
        }, [
          P("div", {
            style: te({ width: n.contentWidth }),
            class: "btnBoxKAL"
          }, [
            n.showOkBt ? (B(), X(m, {
              key: 0,
              onClick: C,
              class: "form-save-btn",
              loading: n.btnLoading && p(s)
            }, {
              default: Y(() => [
                ve(U(n.okBtTxt || p(L)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : se("", !0),
            n.showCancelBt ? (B(), X(m, {
              key: 1,
              onClick: A,
              class: "form-cancel-btn"
            }, {
              default: Y(() => [
                ve(U(n.cancelBtTxt || p(L)("r.cancel")), 1)
              ]),
              _: 1
            })) : se("", !0)
          ], 4)
        ], 4), [
          [ye, n.showOkBt || n.showCancelBt]
        ])
      ], 4);
    };
  }
}), zl = /* @__PURE__ */ ue({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Le().searchFormLabelWidth },
    itemWidth: { default: () => Le().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: r, emit: o }) {
    const e = o, n = t, a = W(), s = N(() => {
      var T, C;
      if (Array.isArray(n.formData[0])) {
        let A = [];
        for (let S of n.formData)
          S && (A = A.concat(
            S.filter((_) => (_ == null ? void 0 : _.type) === "custom" || (_ == null ? void 0 : _.type) === "input" && _.slotName && _.slotPosition)
          ));
        return A;
      }
      return (C = (T = n.formData) == null ? void 0 : T.filter) == null ? void 0 : C.call(
        T,
        (A) => (A == null ? void 0 : A.type) === "custom" || (A == null ? void 0 : A.type) === "input" && A.slotName && A.slotPosition
      );
    });
    function f() {
      return new Promise((T) => {
        var C, A;
        (A = (C = a.value).resetForm) == null || A.call(C).then(() => {
          T();
        });
      });
    }
    function d() {
      return new Promise((T) => {
        var C, A;
        (A = (C = a.value).refreshFormDom) == null || A.call(C).then(() => {
          T();
        });
      });
    }
    function y() {
      return new Promise((T) => {
        var C, A;
        (A = (C = a.value).reRenderForm) == null || A.call(C).then(() => {
          T();
        });
      });
    }
    function u(T, C) {
      var A, S;
      (S = (A = a.value).setItemToValGroup) == null || S.call(A, T, C);
    }
    function c(T, C) {
      var A, S;
      (S = (A = a.value).updateValGroup) == null || S.call(A, T, C);
    }
    function g(T) {
      var C, A;
      (A = (C = a.value).updateFormDataT) == null || A.call(C, T);
    }
    function b() {
      var T, C;
      (C = (T = a.value).validate) == null || C.call(T);
    }
    function I(T) {
      var C, A;
      (A = (C = a.value).reValidate) == null || A.call(C, T);
    }
    function v(T) {
      var C, A;
      (A = (C = a.value).changeLoading) == null || A.call(C, T === void 0 ? !1 : T);
    }
    function V() {
      var T, C;
      return (C = (T = a.value).getValGroup) == null ? void 0 : C.call(T);
    }
    function w(T) {
      e("on-search", T);
    }
    function O() {
      var T, C;
      (C = (T = a.value).submit) == null || C.call(T);
    }
    return Ne(() => {
      const T = a.value.$el;
      T != null && T.parentNode && T.parentNode.addEventListener("keyup", (C) => {
        (C == null ? void 0 : C.keyCode) === 13 && O();
      });
    }), r({
      resetForm: f,
      refreshFormDom: d,
      reRenderForm: y,
      setItemToValGroup: u,
      updateValGroup: c,
      updateFormDataT: g,
      validate: b,
      reValidate: I,
      changeLoading: v,
      getValGroup: V,
      submit: O
    }), (T, C) => (B(), X(bl, tl({
      ref_key: "formRRef",
      ref: a
    }, T.$attrs, {
      "form-data": n.formData,
      "label-width": n.labelWidth,
      "item-width": n.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": n.showInlineOkBt,
      "inline-ok-bt-txt": p(L)("r.check"),
      "show-inline-clear-bt": n.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), ll({ _: 2 }, [
      _e(p(s), (A) => ({
        name: A.slotName,
        fn: Y(({ valGroup: S }) => [
          Oe(T.$slots, A.slotName, { valGroup: S })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), jn = /* @__PURE__ */ ue({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Le().formModalWidth },
    labelWidth: { default: () => Le().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: r, emit: o }) {
    const e = o, n = t, a = W(), s = W(!1), f = W(!1), d = N(() => {
      var m, $;
      if (Array.isArray(n.formData[0])) {
        let h = [];
        for (let R of n.formData)
          R && (h = h.concat(
            R.filter((F) => (F == null ? void 0 : F.type) === "custom" || (F == null ? void 0 : F.type) === "input" && F.slotName && F.slotPosition)
          ));
        return h;
      }
      return ($ = (m = n.formData) == null ? void 0 : m.filter) == null ? void 0 : $.call(
        m,
        (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
      );
    });
    function y() {
      return new Promise((m) => {
        var $, h;
        (h = ($ = a.value).resetForm) == null || h.call($).then(() => {
          m();
        });
      });
    }
    function u() {
      return new Promise((m) => {
        var $, h;
        (h = ($ = a.value).refreshFormDom) == null || h.call($).then(() => {
          m();
        });
      });
    }
    function c() {
      return new Promise((m) => {
        var $, h;
        (h = ($ = a.value).reRenderForm) == null || h.call($).then(() => {
          m();
        });
      });
    }
    function g(m, $) {
      var h, R;
      (R = (h = a.value).setItemToValGroup) == null || R.call(h, m, $);
    }
    function b(m, $) {
      var h, R;
      (R = (h = a.value).updateValGroup) == null || R.call(h, m, $);
    }
    function I(m) {
      var $, h;
      (h = ($ = a.value).updateFormDataT) == null || h.call($, m);
    }
    function v() {
      var m, $;
      ($ = (m = a.value).validate) == null || $.call(m);
    }
    function V(m) {
      var $, h;
      (h = ($ = a.value).reValidate) == null || h.call($, m);
    }
    function w(m) {
      var $, h;
      m !== void 0 && (f.value = !!m, (h = ($ = a.value).changeLoading) == null || h.call($, f.value));
    }
    function O() {
      var m, $;
      return ($ = (m = a.value).getValGroup) == null ? void 0 : $.call(m);
    }
    function T() {
      f.value = !0;
    }
    function C() {
      var m, $;
      n.hideCancelBt ? S() : ($ = (m = a.value).submit) == null || $.call(m);
    }
    function A() {
      s.value = !0;
    }
    function S() {
      s.value = !1, Fe(() => {
        var m, $;
        f.value = !1, ($ = (m = a.value).changeLoading) == null || $.call(m, !1);
      }, 1e3);
    }
    function _(m) {
      e(m ? "on-open" : "on-close");
    }
    return r({
      resetForm: y,
      refreshFormDom: u,
      reRenderForm: c,
      setItemToValGroup: g,
      updateValGroup: b,
      updateFormDataT: I,
      validate: v,
      reValidate: V,
      changeLoading: w,
      getValGroup: O,
      submit: C,
      open: A,
      close: S
    }), (m, $) => {
      const h = J("Button"), R = J("Modal");
      return B(), X(R, {
        class: Be(["formModal", { hideFooter: n.hideFooter }]),
        title: n.title || p(L)("r.title"),
        modelValue: p(s),
        "onUpdate:modelValue": $[0] || ($[0] = (F) => Pe(s) ? s.value = F : null),
        "mask-closable": !1,
        "footer-hide": n.hideFooter,
        width: n.width,
        onOnVisibleChange: _
      }, {
        footer: Y(() => [
          j(h, {
            onClick: C,
            class: "modal-save-btn",
            loading: n.btnLoading && p(f)
          }, {
            default: Y(() => [
              ve(U(n.okBtTxt || p(L)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          n.hideCancelBt ? se("", !0) : (B(), X(h, {
            key: 0,
            onClick: S,
            class: "modal-cancel-btn"
          }, {
            default: Y(() => [
              ve(U(n.cancelBtTxt || p(L)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: Y(() => [
          j(bl, tl({
            ref_key: "formRRef",
            ref: a
          }, m.$attrs, {
            "form-data": n.formData,
            "label-width": n.labelWidth,
            btnLoading: n.btnLoading,
            onOnSubmit: T
          }), ll({ _: 2 }, [
            _e(p(d), (F) => ({
              name: F.slotName,
              fn: Y(({ valGroup: E }) => [
                Oe(m.$slots, F.slotName, { valGroup: E })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), qn = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = W(!0), a = W([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let f = [];
    const d = N(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = N(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    we(
      () => e.data,
      (v) => {
        n.value = !1;
        let V = [];
        u(v, V), a.value = V, Re(function() {
          n.value = !0, e.inlineLeaf && Re(b);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), we(
      () => y.value,
      (v) => {
        let V, w = "s";
        if (Array.isArray(e.collectVal) ? (V = e.collectVal[0] || "", w = "a") : V = e.collectVal, !V || JSON.stringify(v) === JSON.stringify(f)) {
          f = [];
          return;
        }
        Ze({
          group: a.value,
          condition: (O) => (O == null ? void 0 : O.checked) === !0,
          key: "checked",
          val: !1
        }), Ze(w === "a" ? {
          group: a.value,
          condition: (O) => ht(v, [V, O == null ? void 0 : O[V]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: a.value,
          condition: (O) => v.indexOf(O == null ? void 0 : O[V]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), we(
      () => e.disabled,
      (v) => {
        Ze({
          group: a.value,
          condition: (V) => V && V.disableCheckbox !== v,
          key: "disableCheckbox",
          val: v
        }), e.inlineLeaf && Re(b);
      },
      { immediate: !0 }
    );
    function u(v, V = []) {
      for (let w of v) {
        let O = !1;
        d.value.length > 1 ? O = xl(y.value, (C) => C[d.value[0]] === w[d.value[0]]) !== void 0 : O = d.value[0] ? y.value.indexOf(w[d.value[0]]) !== -1 : !1;
        let T = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: O,
          disableCheckbox: e.disabled
        };
        for (let C of d.value)
          T[C] = w[C];
        V.push(T), w != null && w.children && w.children.length > 0 && (T.children = [], c(w.children, T.children));
      }
    }
    function c(v, V = []) {
      for (let w of v) {
        let O = !1;
        d.value.length > 1 ? O = xl(y.value, (C) => C[d.value[0]] === w[d.value[0]]) !== void 0 : O = d.value[0] ? y.value.indexOf(w[d.value[0]]) !== -1 : !1;
        let T = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: O,
          disableCheckbox: e.disabled
        };
        for (let C of d.value)
          T[C] = w[C];
        V.push(T), w != null && w.children && w.children.length > 0 && (T.children = [], u(w.children, T.children));
      }
    }
    function g(v, {
      data: V
    }) {
      let w = "", O = !0;
      if (V.children && V.children.length > 0) {
        for (let T of V.children)
          if (T.children !== void 0) {
            O = !1;
            break;
          }
        O && e.inlineLeaf && (w = "inlineChildXA");
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
                fontWeight: V.children ? "bold" : "normal"
              }
            },
            V.name
          )
        ]
      );
    }
    function b(v) {
      if (v) {
        v.expand && Re(b);
        return;
      }
      let V = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (V.length > 0)
        for (let w of V) {
          let O = w == null ? void 0 : w.parentElement, T = O == null ? void 0 : O.nextElementSibling;
          if (!T)
            return;
          if (T.tagName !== "BR") {
            let C = O == null ? void 0 : O.parentElement, A = document.createElement("br");
            C == null || C.insertBefore(A, T), T = A.nextElementSibling, (T == null ? void 0 : T.className.indexOf("inlineTreeNodeF")) === -1 && T.setAttribute("class", T.className + " inlineTreeNodeF");
          }
          for (; T != null && T.nextElementSibling; )
            T = T.nextElementSibling, T.className.indexOf("inlineTreeNodeF") === -1 && T.setAttribute("class", T.className + " inlineTreeNodeF");
        }
    }
    function I(v) {
      let V = [];
      if (e.leaf) {
        for (let w of v)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let O = {};
              for (let T of e.collectVal)
                O[T] = w[T];
              V.push(O);
            } else
              V.push(w[e.collectVal]);
      } else
        for (let w of v)
          if (Array.isArray(e.collectVal)) {
            let O = {};
            for (let T of e.collectVal)
              O[T] = w[T];
            V.push(O);
          } else
            V.push(w[e.collectVal]);
      f = V, o("update:modelValue", V), o("on-change", ie(V));
    }
    return (v, V) => {
      const w = J("Tree");
      return p(n) ? (B(), X(w, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: p(a),
        render: g,
        onOnCheckChange: I,
        onOnToggleExpand: b,
        "show-checkbox": ""
      }, null, 8, ["data"])) : se("", !0);
    };
  }
}), Jn = { class: "transferBoxRL" }, Yn = { class: "leftBoxLLL" }, Xn = { class: "fullHeight flexColumnBox" }, Qn = { class: "notGrow" }, Zn = { class: "titleLLL" }, eo = { class: "growFlexItem" }, lo = { class: "middleBoxLLL" }, to = { class: "rightBoxLLL" }, ao = { class: "fullHeight flexColumnBox" }, no = { class: "notGrow" }, oo = { class: "titleLLL" }, io = { class: "growFlexItem" }, so = /* @__PURE__ */ ue({
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
    addParamsHandle: { type: Function, default: (t) => t.map((r) => r == null ? void 0 : r.id) },
    deleteParamsHandle: { type: Function, default: (t) => t.map((r) => r == null ? void 0 : r.id) },
    addAllParamsHandle: { type: Function, default: (t) => t },
    deleteAllParamsHandle: { type: Function, default: (t) => t },
    addMethod: { default: "post" },
    addAllMethod: { default: "post" },
    deleteMethod: { default: "delete" },
    deleteAllMethod: { default: "delete" },
    searchFormLabelWith: {},
    usePagePro: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Le()) == null ? void 0 : t.pageShowSizer;
    } }
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: r, emit: o }) {
    const e = o, n = t;
    let a = W({}), s = W({}), f = W([]), d = W([]), y = W(0), u = W(0);
    const c = N(() => ({ ...n.constSearchDataLeft, ...a.value })), g = N(() => ({ ...n.constSearchDataRight, ...s.value })), b = N(() => y.value < 1), I = N(() => f.value.length < 1), v = N(() => d.value.length < 1), V = N(() => u.value < 1), w = W(), O = W(), T = W(), C = W();
    function A() {
      w.value.resetForm(), O.value.resetForm(), xe(a.value) || (a.value = {}), xe(s.value) || (s.value = {}), T.value.clearSelect(), C.value.clearSelect();
    }
    function S() {
      T.value.search(), C.value.search();
    }
    function _(q) {
      f.value = q;
    }
    function m(q) {
      d.value = q;
    }
    function $(q) {
      var me, de, z, oe, ce;
      y.value = ((de = (me = q == null ? void 0 : q.data) == null ? void 0 : me.page) == null ? void 0 : de.total) || ((oe = (z = q == null ? void 0 : q.data) == null ? void 0 : z.data) == null ? void 0 : oe.total) || ((ce = q == null ? void 0 : q.data) == null ? void 0 : ce.total) || (q == null ? void 0 : q.total) || 0, e("on-data-change-l", q);
    }
    function h(q) {
      var me, de, z, oe, ce;
      u.value = ((de = (me = q == null ? void 0 : q.data) == null ? void 0 : me.page) == null ? void 0 : de.total) || ((oe = (z = q == null ? void 0 : q.data) == null ? void 0 : z.data) == null ? void 0 : oe.total) || ((ce = q == null ? void 0 : q.data) == null ? void 0 : ce.total) || (q == null ? void 0 : q.total) || 0, e("on-data-change-r", q);
    }
    function R(q) {
      a.value = q;
    }
    function F(q) {
      s.value = q;
    }
    function E() {
      n.addUrl && Se("add");
    }
    function Q() {
      n.deleteUrl && Se("delete");
    }
    function ne() {
      n.addAllUrl && n.addUrl && Se("addAll");
    }
    function be() {
      n.deleteAllUrl && Se("deleteAll");
    }
    function Se(q) {
      let me, de, z = {}, oe = "";
      switch (q) {
        case "add":
          me = n.addMethod, de = n.addUrl, z = n.addParamsHandle(d.value), oe = L("r.add");
          break;
        case "delete":
          me = n.deleteMethod, de = n.deleteUrl, z = n.deleteParamsHandle(f.value), oe = L("r.remove");
          break;
        case "addAll":
          me = n.addAllMethod, de = n.addAllUrl, z = n.addAllParamsHandle(g.value), oe = L("r.addAll");
          break;
        case "deleteAll":
          me = n.deleteAllMethod, de = n.deleteAllUrl, z = n.deleteAllParamsHandle(c.value), oe = L("r.removeAll");
          break;
      }
      de && me && ze[me](de, z, null, [], { spin: !0 }, !1).then((ce) => {
        (ce == null ? void 0 : ce.code) === 0 ? ($e(oe + L("r.success"), (ce == null ? void 0 : ce.message) || "", "success"), T.value && T.value.getTableData(), C.value && C.value.getTableData(), e("transferred")) : $e(oe + L("r.failed"), (ce == null ? void 0 : ce.message) || "", "error");
      }).catch(() => {
        $e(oe + L("r.error"), "", "error");
      });
    }
    return r({
      reset: A,
      search: S
    }), (q, me) => {
      const de = J("Icon"), z = J("Button");
      return B(), M("div", Jn, [
        P("div", Yn, [
          P("div", Xn, [
            P("div", Qn, [
              P("div", Zn, U(n.titleLeft || p(L)("r.added")), 1),
              j(Fl, null, {
                default: Y(() => [
                  j(zl, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": n.formDataLeft,
                    "form-rules": n.formRulesLeft,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: R
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", eo, [
              j(Ml, {
                ref_key: "lTabRef",
                ref: T,
                columns: n.leftTableColumns,
                url: n.leftTableUrl,
                "search-data": p(c),
                onOnSelectionChange: _,
                onOnDataChange: $,
                "init-data": !!(p(xe)(n.constSearchDataLeft) && n.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: n.usePagePro,
                showTotal: n.showTotal,
                showSizer: n.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        P("div", lo, [
          j(z, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: be,
            disabled: p(b)
          }, {
            default: Y(() => [
              ve(U(p(L)("r.removeAll")) + " ", 1),
              j(de, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(z, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Q,
            disabled: p(I)
          }, {
            default: Y(() => [
              ve(U(p(L)("r.remove")) + " ", 1),
              j(de, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(z, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: E,
            disabled: p(v)
          }, {
            default: Y(() => [
              j(de, { type: "ios-arrow-back" }),
              ve(" " + U(p(L)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(z, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: ne,
            disabled: p(V)
          }, {
            default: Y(() => [
              j(de, { type: "ios-arrow-back" }),
              ve(" " + U(p(L)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        P("div", to, [
          P("div", ao, [
            P("div", no, [
              P("div", oo, U(n.titleRight || p(L)("r.notAdded")), 1),
              j(Fl, null, {
                default: Y(() => [
                  j(zl, {
                    ref_key: "rightFormRef",
                    ref: O,
                    "form-data": n.formDataRight,
                    "form-rules": n.formRulesRight,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: F
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            P("div", io, [
              j(Ml, {
                ref_key: "rTabRef",
                ref: C,
                columns: n.rightTableColumns,
                url: n.rightTableUrl,
                "search-data": p(g),
                onOnSelectionChange: m,
                onOnDataChange: h,
                "init-data": !!(p(xe)(n.constSearchDataRight) && n.rightTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: n.usePagePro,
                showTotal: n.showTotal,
                showSizer: n.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ])
      ]);
    };
  }
}), ro = { class: "boxLPA" }, uo = { class: "headerJ" }, co = { class: "firstT borderBoxAS" }, fo = { class: "secondT borderBoxAS" }, po = { class: "firstCol borderBoxAS" }, mo = { class: "secondCol borderBoxAS" }, ho = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = t, e = r, n = W([]), a = N(() => {
      var c;
      let y = ie(o.data), u = ie(n.value);
      for (let g of y) {
        let b = 0;
        if (g != null && g.children && !xe(g.children))
          for (let I of g.children) {
            for (let v = 0, V = u == null ? void 0 : u.length; v < V; v++)
              if (Array.isArray(o.collectVal)) {
                let w = !0;
                for (let O of o.collectVal)
                  if (((c = u[v]) == null ? void 0 : c[O]) !== (I == null ? void 0 : I[O])) {
                    w = !1;
                    break;
                  }
                if (w) {
                  I.checked = !0, b++, u.splice(v, 1);
                  break;
                }
              } else if (u[v] === I[o.collectVal]) {
                I.checked = !0, b++, u.splice(v, 1);
                break;
              }
            !I.checked && (I.checked = !1);
          }
        b === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && b === g.children.length ? (g.checked = !0, g.indeterminate = !1) : (g.checked = !1, g.indeterminate = !0);
      }
      return y;
    });
    we(
      () => o.modelValue,
      (y, u) => {
        rl(n.value, y) || rl(y, u) || (n.value = y);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(y, u) {
      if (y.children)
        for (let c of y.children)
          c.checked = u;
      f();
    }
    function f() {
      d(a.value, !0);
    }
    function d(y, u) {
      let c = [];
      for (let g of y) {
        if (!u && !o.leaf && g.checked && g.indeterminate === !1)
          if (Array.isArray(o.collectVal)) {
            let b = {};
            for (let I of o.collectVal)
              b[I] = g[I];
            c.push(b);
          } else
            G(o.collectVal) === "String" && c.push(g[o.collectVal]);
        if (g.children) {
          for (let b of g.children)
            if (b.checked)
              if (Array.isArray(o.collectVal)) {
                let I = {};
                for (let v of o.collectVal)
                  I[v] = b[v];
                c.push(I);
              } else
                G(o.collectVal) === "String" && c.push(b[o.collectVal]);
        }
      }
      u ? (n.value = c, o.leaf ? (e("update:modelValue", c), e("on-change", ie(c))) : Re(function() {
        d(a.value);
      })) : (e("update:modelValue", c), e("on-change", ie(c)));
    }
    return (y, u) => {
      const c = J("Checkbox");
      return B(), M("div", ro, [
        P("div", uo, [
          P("div", co, U(y.firstTitle || p(L)("r.level.1")), 1),
          P("div", fo, U(y.secondTitle || p(L)("r.level.2")), 1)
        ]),
        (B(!0), M(ge, null, _e(p(a), (g, b) => (B(), M("div", {
          class: "bodyJ",
          key: "checkboxJ" + b
        }, [
          P("div", po, [
            j(c, {
              modelValue: g.checked,
              "onUpdate:modelValue": (I) => g.checked = I,
              indeterminate: g.indeterminate,
              onOnChange: (I) => s(g, I),
              disabled: y.disabled
            }, {
              default: Y(() => [
                ve(U(g[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", mo, [
            (B(!0), M(ge, null, _e(g.children, (I, v) => (B(), M("div", {
              class: "secItem",
              key: "secItem" + v
            }, [
              j(c, {
                modelValue: I.checked,
                "onUpdate:modelValue": (V) => I.checked = V,
                onOnChange: f,
                disabled: y.disabled
              }, {
                default: Y(() => [
                  ve(U(I[y.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), yo = { class: "boxLPB" }, vo = { class: "headerF" }, go = { class: "firstT borderBoxKa" }, bo = { class: "secondT borderBoxKa" }, ko = { class: "thirdT borderBoxKa" }, wo = { class: "firstCol borderBoxKa" }, _o = { class: "rightBoxAL" }, Vo = { class: "secondCol borderBoxKa" }, Co = { class: "thirdCol borderBoxKa" }, So = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t, n = W([]), a = N(() => {
      let u = ie(e.data), c = ie(n.value);
      for (let g of u) {
        let b = 0, I = 0;
        if (g != null && g.children && !xe(g.children))
          for (let v of g.children) {
            let V = 0;
            if (v.children && !xe(v.children))
              for (let w of v.children) {
                for (let O = 0, T = c.length; O < T; O++)
                  if (Array.isArray(e.collectVal)) {
                    let C = !0;
                    for (let A of e.collectVal)
                      if (c[O][A] !== w[A]) {
                        C = !1;
                        break;
                      }
                    if (C) {
                      w.checked = !0, V++, c.splice(O, 1);
                      break;
                    }
                  } else if (c[O] === w[e.collectVal]) {
                    w.checked = !0, V++, c.splice(O, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            V === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && V === v.children.length ? (v.checked = !0, v.indeterminate = !1, b++) : (v.checked = !1, v.indeterminate = !0, I++);
          }
        b === 0 && I === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && b === g.children.length ? (g.checked = !0, g.indeterminate = !1) : (g.checked = !1, g.indeterminate = !0);
      }
      return u;
    });
    we(
      () => e.modelValue,
      (u, c) => {
        rl(n.value, u) || rl(u, c) || (n.value = u);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(u, c) {
      if (u.children) {
        for (let g of u.children)
          if (g.checked = c, g.children)
            for (let b of g.children)
              b.checked = c;
      }
      d();
    }
    function f(u, c) {
      if (u.children)
        for (let g of u.children)
          g.checked = c;
      d();
    }
    function d() {
      y(a.value, !0);
    }
    function y(u, c) {
      let g = [];
      for (let b of u) {
        if (!c && !e.leaf && (b != null && b.checked) && b.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let I = {};
            for (let v of e.collectVal)
              I[v] = b[v];
            g.push(I);
          } else
            G(e.collectVal) === "String" && g.push(b[e.collectVal]);
        if (b != null && b.children)
          for (let I of b.children) {
            if (!c && !e.leaf && I.checked && I.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let v = {};
                for (let V of e.collectVal)
                  v[V] = I[V];
                g.push(v);
              } else
                G(e.collectVal) === "String" && g.push(I[e.collectVal]);
            if (I.children) {
              for (let v of I.children)
                if (v.checked)
                  if (Array.isArray(e.collectVal)) {
                    let V = {};
                    for (let w of e.collectVal)
                      V[w] = v[w];
                    g.push(V);
                  } else
                    G(e.collectVal) === "String" && g.push(v[e.collectVal]);
            }
          }
      }
      c ? (n.value = g, e.leaf ? (o("update:modelValue", g), o("on-change", ie(g))) : Re(function() {
        y(a.value);
      })) : (o("update:modelValue", g), o("on-change", ie(g)));
    }
    return (u, c) => {
      const g = J("Checkbox");
      return B(), M("div", yo, [
        P("div", vo, [
          P("div", go, U(u.firstTitle || p(L)("r.level.1")), 1),
          P("div", bo, U(u.secondTitle || p(L)("r.level.2")), 1),
          P("div", ko, U(u.thirdTitle || p(L)("r.level.3")), 1)
        ]),
        (B(!0), M(ge, null, _e(p(a), (b, I) => (B(), M("div", {
          class: "bodyF",
          key: "checkboxJ" + I
        }, [
          P("div", wo, [
            j(g, {
              modelValue: b.checked,
              "onUpdate:modelValue": (v) => b.checked = v,
              indeterminate: b.indeterminate,
              onOnChange: (v) => s(b, v),
              disabled: u.disabled
            }, {
              default: Y(() => [
                ve(U(b[u.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          P("div", _o, [
            (B(!0), M(ge, null, _e(b.children, (v, V) => (B(), M("div", {
              class: "rightBoxInner",
              key: "secItem" + V
            }, [
              P("div", Vo, [
                j(g, {
                  modelValue: v.checked,
                  "onUpdate:modelValue": (w) => v.checked = w,
                  indeterminate: v.indeterminate,
                  onOnChange: (w) => f(v, w),
                  disabled: u.disabled
                }, {
                  default: Y(() => [
                    ve(U(v[u.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              P("div", Co, [
                (B(!0), M(ge, null, _e(v.children, (w, O) => (B(), M("div", {
                  class: "thirdItem",
                  key: "thirdItem" + O
                }, [
                  j(g, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (T) => w.checked = T,
                    onOnChange: d,
                    disabled: u.disabled
                  }, {
                    default: Y(() => [
                      ve(U(w[u.label]), 1)
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
}), To = { class: "flexColumnBox wellCardR" }, Bo = { class: "panelHeader notGrow" }, xo = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Lo = { class: "btsF" }, Oo = { class: "growFlexItem relativeBox" }, Ao = { class: "fullFlowContent" }, Io = /* @__PURE__ */ ue({
  __name: "WellCard",
  props: {
    title: {},
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, o = N(() => {
      let e = {
        width: r.width,
        height: r.height
      };
      r.inline && (e.display = "inline-block");
      for (let n in e)
        e.hasOwnProperty(n) && typeof e[n] == "number" && e[n] > 0 && (e[n] += "px");
      return e;
    });
    return (e, n) => (B(), M("div", {
      style: te(p(o))
    }, [
      P("div", To, [
        P("div", Bo, [
          P("div", xo, U(r.title || p(L)("r.title")), 1),
          P("div", Lo, [
            Oe(e.$slots, "bts")
          ])
        ]),
        P("div", Oo, [
          P("div", Ao, [
            Oe(e.$slots, "default")
          ])
        ])
      ])
    ], 4));
  }
}), Po = /* @__PURE__ */ ue({
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
  setup(t, { emit: r }) {
    const o = r, e = t;
    let n = W(1), a = 1;
    const s = W(""), f = fl([]);
    let d = {}, y = !0, u = !1;
    const c = "scm" + Math.random(), g = N(() => s.value ? L("r.searchFor") + s.value : e.placeholder || L("r.pInput")), b = N({
      get() {
        return e.modelValue ?? "";
      },
      set(S) {
        if (o("update:modelValue", S ?? ""), e.collectLabel && S !== void 0) {
          let _ = {};
          for (let m of f.value)
            if (m[e.optionsValKey] === S) {
              _ = JSON.parse(JSON.stringify(m));
              break;
            }
          o("on-change", _);
        }
      }
    }), I = N(() => e.searchKey ? {
      ...e.searchData,
      current: n.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: n.value
    });
    we(
      () => e.getOptions,
      (S) => {
        S ? y && A() : w();
      },
      { immediate: !0 }
    ), we(
      () => e.url,
      (S) => {
        S && (u = !0);
      }
    );
    const v = W();
    function V() {
      v.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", T);
    }
    function w() {
      y || (b.value = "", y = !0, s.value = "", f.value = [], n.value = 1, a = 1, d = {}, u = !1);
    }
    function O(S) {
      for (let _ of f.value)
        if ((_ == null ? void 0 : _.label) === S)
          return !0;
      return !1;
    }
    const T = mt(function(S) {
      var m;
      const _ = (m = S == null ? void 0 : S.target) == null ? void 0 : m.value;
      O(_) || (Ce(_) ? (u ? w() : (xe(d) && (d.current = n.value, d.pages = a, d.options = ie(f.value)), Ce(b.value) && (b.value = "")), s.value = String(_), f.value = [], n.value = 1, y = !0, A()) : u ? (w(), A()) : (b.value = "", s.value = "", d.current ? (n.value = d.current, a = d.pages, f.value = ie(d.options), d = {}) : A()));
    }, 600);
    function C() {
      u && w(), n.value < a ? (++n.value, Re(function() {
        A();
      })) : et.warning({
        background: !0,
        content: L("r.noMore")
      });
    }
    function A() {
      return new Promise((S, _) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Ce(s.value)) {
            S(!1);
            return;
          }
          ze.get(e.url, I.value).then((m) => {
            var R;
            y = !1;
            let $ = [];
            (R = m == null ? void 0 : m.data) != null && R.records ? ($ = m.data.records, a = m.data.pages) : m != null && m.data && G(m.data) === "Array" ? ($ = m.data, a = m.pages) : m != null && m.data && G(m.data) === "Object" && ($ = [m.data], a = 1), typeof e.optionFilter == "function" && G(e.optionFilter) === "Function" && ($ = e.optionFilter($)), xe($) || ($ = $.map((F, E) => {
              let Q = L("r.optionLabel") + E;
              if (Array.isArray(e.optionsLabelKey)) {
                let ne = [];
                for (let be = 1, Se = e.optionsLabelKey.length; be < Se; be++)
                  ne.push(F[e.optionsLabelKey[be]]);
                Q = `${F[e.optionsLabelKey[0]]}(${String(ne)})`;
              } else
                Nl(e.optionsLabelKey) && (Q = F[e.optionsLabelKey]);
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
            })), f.value.push(...$);
            let h = {};
            f.value = f.value.filter((F) => h[F == null ? void 0 : F.value] ? !1 : (h[F == null ? void 0 : F.value] = !0, !0)), Re(function() {
              o("update-option-finish");
            }), S(!0);
          }).catch(() => {
            et.error(L("r.getDataError")), _(L("r.getDataError"));
          });
        } else
          S(!1);
      });
    }
    return Ne(V), (S, _) => {
      const m = J("Option"), $ = J("Select"), h = Ul("loadmore");
      return fe((B(), X($, tl({
        modelValue: p(b),
        "onUpdate:modelValue": _[0] || (_[0] = (R) => Pe(b) ? b.value = R : null),
        ref_key: "selectScrollSourceRef",
        ref: v,
        "transfer-class-name": c
      }, S.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(g),
        disabled: S.disabled
      }), {
        default: Y(() => [
          (B(!0), M(ge, null, _e(p(f), (R, F) => (B(), X(m, {
            key: "op" + F,
            value: R == null ? void 0 : R.value,
            label: R == null ? void 0 : R.label,
            disabled: R == null ? void 0 : R.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [h, C, c]
      ]);
    };
  }
}), ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Pt,
  AsyncCascader: It,
  BtTablePage: Ml,
  CheckboxGroupThreeClass: So,
  CheckboxGroupTwoClass: ho,
  CheckboxTree: qn,
  EditorPro: Rt,
  FormGroup: Wn,
  FormModal: jn,
  FormR: bl,
  FullPop: ba,
  HeaderBt: gt,
  Hello: wa,
  IconTxtBtn: Ol,
  InputMap: At,
  MonthRange: $t,
  Page404: Ta,
  PagePro: Lt,
  SearchForm: zl,
  SelectInput: Ot,
  SelectScrollMore: Po,
  ShowHidePanel: Fl,
  ShowHidePanelB: Qa,
  SideMenu: ja,
  TableIconBtn: Tt,
  TableSearch: ln,
  TableSetting: Bt,
  TransferBox: so,
  UploadGroup: Ft,
  WellCard: Io
}, Symbol.toStringTag, { value: "Module" })), Fo = { class: "a4Line aL notPrint" }, $o = { class: "a4Line aR notPrint" }, Ro = { class: "a4Line bL notPrint" }, Ko = { class: "a4Line bR notPrint" }, Mo = { class: "topsL notPrint" }, Do = { class: "topsLTitle" }, zo = { class: "topsLBtn" }, Uo = { class: "topsLHelp" }, No = { key: 0 }, Eo = /* @__PURE__ */ P("span", null, "1. ", -1), Go = { key: 1 }, Ho = /* @__PURE__ */ P("span", null, "2. ", -1), Wo = { key: 2 }, jo = /* @__PURE__ */ P("span", null, "1. ", -1), qo = ["innerHTML"], Jo = /* @__PURE__ */ ue({
  __name: "PrintModal",
  setup(t) {
    const r = yt(), o = W(), e = W(!1), n = W(!1), a = W(!1), s = W(715), f = W(!1), d = W(), y = "tablePrint_" + Date.now().toString(), u = W(""), c = W([]), g = W([]), b = W(!1), I = N(() => ({
      width: s.value + "px"
    })), v = () => {
      d.value && window.sessionStorage.removeItem("print_" + d.value), window.sessionStorage.removeItem(y), window.close();
    }, V = () => {
      f.value && (f.value = !1);
    }, w = () => {
      b.value = !0;
    }, O = (S) => {
      b.value && (s.value = (S == null ? void 0 : S.layerX) - 20);
    }, T = () => {
      b.value && (b.value = !1);
    }, C = () => {
      f.value = !1;
      let S = window.setTimeout(() => {
        window.clearTimeout(S), window.print();
      }, 100);
    }, A = () => {
      var S, _, m, $, h;
      if (d.value = (S = r == null ? void 0 : r.params) == null ? void 0 : S.isFrom, d.value) {
        let R = window.sessionStorage.getItem("print_" + d.value);
        if (R) {
          const F = JSON.parse(R);
          if (!F) {
            e.value = !0;
            return;
          }
          c.value = F.columns, g.value = F.data, o.value = F.title, u.value = ((_ = F == null ? void 0 : F.config) == null ? void 0 : _.customClass) || "", n.value = ((m = F == null ? void 0 : F.config) == null ? void 0 : m.domPrint) || !1, a.value = (($ = F == null ? void 0 : F.config) == null ? void 0 : $.autoPrint) || !1, s.value = ((h = F == null ? void 0 : F.config) == null ? void 0 : h.width) || 715, document.title = (o.value || L("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return Ne(() => {
      if (a.value) {
        let S = window.setTimeout(() => {
          window.clearTimeout(S), C();
        }, 100);
      }
      document.addEventListener("click", V), document.addEventListener("mousemove", O), document.addEventListener("mouseup", T);
    }), A(), (S, _) => {
      const m = J("Table");
      return B(), M("div", {
        class: Be(["tablePrintModal", [p(u)]])
      }, [
        fe(P("div", { class: "msgL notPrint" }, U(p(L)("r.printGuide.9")), 513), [
          [ye, p(e)]
        ]),
        fe(P("div", Fo, [
          P("p", null, U(p(L)("r.printGuide.7")), 1),
          ve(),
          P("p", null, U(p(L)("r.printGuide.5")), 1)
        ], 512), [
          [ye, !p(e)]
        ]),
        fe(P("div", $o, [
          P("p", null, U(p(L)("r.printGuide.7")), 1),
          ve(),
          P("p", null, U(p(L)("r.printGuide.6")), 1)
        ], 512), [
          [ye, !p(e)]
        ]),
        fe(P("div", Ro, [
          P("p", null, U(p(L)("r.printGuide.8")), 1),
          ve(),
          P("p", null, U(p(L)("r.printGuide.5")), 1)
        ], 512), [
          [ye, !p(e)]
        ]),
        fe(P("div", Ko, [
          P("p", null, U(p(L)("r.printGuide.8")), 1),
          ve(),
          P("p", null, U(p(L)("r.printGuide.6")), 1)
        ], 512), [
          [ye, !p(e)]
        ]),
        fe(P("div", Mo, [
          P("div", Do, U(p(o) || p(L)("r.print")), 1),
          P("div", zo, [
            j(Ol, {
              icon: "md-help-circle",
              name: p(L)("r.help"),
              onClick: _[0] || (_[0] = Tl(($) => f.value = !p(f), ["stop"]))
            }, null, 8, ["name"]),
            j(Ol, {
              icon: "md-print",
              name: p(L)("r.preview"),
              onClick: C
            }, null, 8, ["name"]),
            p(n) ? se("", !0) : (B(), X(Bt, {
              key: 0,
              modelValue: p(c),
              "onUpdate:modelValue": _[1] || (_[1] = ($) => Pe(c) ? c.value = $ : null),
              "s-key": y,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            j(Tt, {
              icon: "md-close",
              onClick: v,
              title: p(L)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(P("div", Uo, [
            p(n) ? se("", !0) : (B(), M("p", No, [
              Eo,
              P("span", null, U(p(L)("r.printGuide.1")), 1)
            ])),
            p(n) ? se("", !0) : (B(), M("p", Go, [
              Ho,
              P("span", null, U(p(L)("r.printGuide.2")), 1)
            ])),
            p(n) ? (B(), M("p", Wo, [
              jo,
              P("span", null, U(p(L)("r.printGuide.10")), 1)
            ])) : se("", !0),
            P("p", null, [
              P("span", null, U(p(n) ? "2. " : "3. "), 1),
              P("span", null, U(p(L)("r.printGuide.3")), 1)
            ]),
            P("p", null, [
              P("span", null, U(p(n) ? "3. " : "4. "), 1),
              P("span", null, U(p(L)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ye, p(f)]
          ])
        ], 512), [
          [ye, !p(e)]
        ]),
        p(n) ? (B(), M("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: te(p(I))
        }, [
          P("div", {
            class: "settingLine",
            onMousedown: Tl(w, ["stop"])
          }, null, 32)
        ], 4)) : se("", !0),
        p(n) ? (B(), M("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(g),
          style: te(p(I))
        }, null, 12, qo)) : se("", !0),
        p(n) ? se("", !0) : fe((B(), X(m, {
          key: 2,
          class: "tablePW",
          columns: p(c),
          data: p(g),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ye, !p(e)]
        ])
      ], 2);
    };
  }
});
let We = null;
function dt() {
  document.documentElement.style.setProperty("overflow", "auto");
  const r = document.createElement("style");
  r.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(r);
}
function Yo(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Jo
  })), We = t, location.pathname.indexOf("tablePrint") > -1 ? (We.push(location.pathname), dt()) : location.hash.indexOf("tablePrint") > -1 && (We.push(location.hash.replace(/^#/, "")), dt());
}
function Kt(t) {
  return G(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && G(t.children) === "Array" && (t.children = t.children.map(Kt))), t;
}
function Xo(t, r, o, e) {
  var y, u, c;
  if (!We)
    return;
  let n;
  if (!(e != null && e.domPrint)) {
    let g = ie(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    g[0].type === "selection" && g.shift(), g.length ? n = g.map(Kt) : n = [];
  }
  let a = (u = (y = We == null ? void 0 : We.currentRoute) == null ? void 0 : y.value) == null ? void 0 : u.fullPath;
  a && (a = (c = a.replace) == null ? void 0 : c.call(a, /\//g, "_"));
  let s = {
    data: r,
    title: o,
    config: e
  };
  e != null && e.domPrint || (s.columns = n), window.sessionStorage.setItem("print_" + a, JSON.stringify(s));
  const f = We.resolve({
    name: "tablePrint",
    params: { isFrom: a }
  });
  window.open(f == null ? void 0 : f.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const El = {
  print: Xo,
  init: Yo
};
function Qo(t = "", r = "", o = {}) {
  o.domPrint = !0, o.width || (o.width = 715), El.print([], t, r, o);
}
function Zo(t) {
  const r = (...a) => Ee.apply(this, a), o = r("r.closePreview"), e = r("r.fullImg");
  let n = "previewImg" + Math.floor(Math.random() * 1e7);
  He.info({
    closable: !1,
    "transition-names": ["linear", "fade"],
    render: (a) => Ve(
      "div",
      {
        class: "previewModal",
        id: n
      },
      [
        Ve(
          "div",
          {
            class: "previewModalInner"
          },
          [
            Ve("img", {
              src: t,
              alt: e
            }),
            Ve(aa, {
              type: "md-close",
              size: 20,
              title: o,
              class: "previewModalDelete",
              onClick() {
                He.remove();
              }
            })
          ]
        )
      ]
    )
  }), Fe(() => {
    var f, d, y, u, c, g;
    const a = (u = (y = (d = (f = document.getElementById(n)) == null ? void 0 : f.parentElement) == null ? void 0 : d.parentElement) == null ? void 0 : y.parentElement) == null ? void 0 : u.parentElement, s = (g = (c = document.getElementById(n)) == null ? void 0 : c.parentElement) == null ? void 0 : g.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), s && (s.style.display = "none");
  }, 10);
}
function ei(t, r, o, e) {
  const n = (...a) => Ee.apply(this, a);
  $e.call(this, {
    title: t || n("r.info.title"),
    text: r || n("r.info.text"),
    icon: o || "warning",
    onOk: e,
    buttons: [n("r.cancel")]
  });
}
const li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: ze,
  $swal: $e,
  $swalConfirm: ei,
  domPrint: Qo,
  fullScreenImgByDom: Qe,
  fullScreenImgPreview: Zo,
  messageBox: Kl,
  setInterval: en,
  setTimeout: Fe,
  tablePrint: El
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      nl(this, "title");
      nl(this, "iconSvg");
      nl(this, "tag");
      nl(this, "alwaysEnable");
      this.title = Ee("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var d, y, u, c, g, b, I, v, V;
      const n = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, s = localStorage.getItem("editorPreviewH") || 500;
      const f = (d = e == null ? void 0 : e.getHtml) == null ? void 0 : d.call(e);
      if (n) {
        let w = (b = (g = (c = (u = (y = n.children) == null ? void 0 : y[0]) == null ? void 0 : u.children) == null ? void 0 : c[1]) == null ? void 0 : g.children) == null ? void 0 : b[0], O = (V = (v = (I = n.children) == null ? void 0 : I[0]) == null ? void 0 : v.children) == null ? void 0 : V[1];
        w && (w.innerHTML = f, w.style.width = a + "px"), O && (O.style.height = s + "px"), n.style.display = "block";
      } else {
        const w = document.body, O = document.createElement("div");
        O.setAttribute("id", "editor-preview"), O.setAttribute("class", "editor-preview-mask"), O.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${s}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let T = O.children[0].children[1], C = O.children[0].children[1].children[0], A = O.children[0].children[0].children[0].children[1];
        const S = 40, _ = 70, m = (F) => {
          var ne;
          if ((F == null ? void 0 : F.type) === "keyup") {
            let be = !1;
            if (F.key && (be = F.key !== "Enter"), be)
              return;
          }
          let E = (ne = F == null ? void 0 : F.target) == null ? void 0 : ne.value;
          if (E = Number(E), C.style && C.style.width === E + "px")
            return;
          const Q = w.clientWidth;
          E < 250 ? (E = 250, F.target.value = 250) : E > Q - S && (E = Q - S, F.target.value = Q - S), C.style.width = E + "px", localStorage.setItem("editorPreviewW", E);
        };
        A.addEventListener("blur", m), A.addEventListener("keyup", m);
        let $ = O.children[0].children[0].children[0].children[3];
        const h = (F) => {
          var ne;
          if ((F == null ? void 0 : F.type) === "keyup") {
            let be = !1;
            if (F.key && (be = F.key !== "Enter"), be)
              return;
          }
          let E = (ne = F == null ? void 0 : F.target) == null ? void 0 : ne.value;
          if (E = Number(E), T.style && T.style.height === E + "px")
            return;
          const Q = w.clientHeight;
          E < 300 ? (E = 300, F.target.value = 300) : E > Q - _ && (E = Q - _, F.target.value = Q - _), T.style.height = E + "px", localStorage.setItem("editorPreviewH", E);
        };
        $.addEventListener("blur", h), $.addEventListener("keyup", h), O.children[0].children[0].children[1].addEventListener("click", () => {
          O.style.display = "none";
        }), C.innerHTML = f, C.style.width = a + "px", T.style.height = s + "px", w.append(O);
      }
    }
  }
  const r = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  ra.registerMenu(r), window.wangeditorMenuInit = !0;
})();
const wi = hl.use, _i = hl.i18n, ct = {
  ...li,
  ...Na
}, ti = function(t, r = {}) {
  ze.init(r.useStore || r.store, t), t.use(ua), r.locale && hl.use(r.locale), r.i18n && hl.i18n(r.i18n), r.router && (Za(r.router), El.init(r.router)), r.amap && vn(r.amap), r.notRegistryGlobal || (Object.keys(ut).forEach((o) => {
    t.component(o) || t.component(o, ut[o]);
  }), Object.keys(ct).forEach((o) => {
    t.config.globalProperties[o] = ct[o];
  })), t.directive("has") || t.directive("has", (o, e) => {
    e.value && !Vt(e.value) && (o.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(o, e) {
      var a;
      let n = o;
      e.arg && (n = (a = document.getElementsByClassName(e.arg)) == null ? void 0 : a[0]), n && n.addEventListener("scroll", function() {
        n.scrollTop > 0 && n.scrollHeight - n.scrollTop <= n.clientHeight && e.value();
      });
    }
  }), t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !1, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, Vi = { install: ti };
export {
  ze as $fetch,
  $e as $swal,
  ei as $swalConfirm,
  Pt as AlCascaderMC,
  It as AsyncCascader,
  Ml as BtTablePage,
  So as CheckboxGroupThreeClass,
  ho as CheckboxGroupTwoClass,
  qn as CheckboxTree,
  Rt as EditorPro,
  Wn as FormGroup,
  jn as FormModal,
  bl as FormR,
  ba as FullPop,
  gt as HeaderBt,
  wa as Hello,
  Ol as IconTxtBtn,
  At as InputMap,
  $t as MonthRange,
  Ta as Page404,
  Lt as PagePro,
  zl as SearchForm,
  Ot as SelectInput,
  Po as SelectScrollMore,
  Fl as ShowHidePanel,
  Qa as ShowHidePanelB,
  ja as SideMenu,
  Tt as TableIconBtn,
  ln as TableSearch,
  Bt as TableSetting,
  so as TransferBox,
  Ft as UploadGroup,
  Io as WellCard,
  Il as clearObj,
  za as dataFilterOrToUrl,
  Fa as decimalDigitsLimit,
  Vi as default,
  Qo as domPrint,
  wt as downloadFileByFormSubmit,
  xa as downloadFileReaderFile,
  bi as emptyInput,
  La as fakeALinkClick,
  $a as fileExport,
  Xe as findCollection,
  Al as findPath,
  Aa as formDataHeadConfig,
  Qe as fullScreenImgByDom,
  Zo as fullScreenImgPreview,
  Ra as getColumnsKeys,
  Cl as getFileSrc,
  bt as getFileTypeByName,
  nt as getFileTypeIconByName,
  Oa as getStringWidth,
  Vt as hasPermission,
  gi as htmlDecode,
  vi as htmlEncode,
  Ua as htmlPrint,
  _i as i18n,
  ti as install,
  Ma as isEmptyValue,
  Sl as isImgByFile,
  Ct as isNaN,
  Ka as isNumberValue,
  Ce as isValidValue,
  wi as locale,
  Kl as messageBox,
  G as myTypeof,
  Pa as oneOf,
  Pl as removeEmptyValue,
  en as setInterval,
  Fe as setTimeout,
  Ze as setValByOption,
  St as siblingElems,
  ki as stopBubbling,
  Da as stringLength,
  El as tablePrint,
  Ia as toFormData,
  Ba as toHump,
  kt as toLine,
  _t as tooltipManual,
  yl as trimObj
};
//# sourceMappingURL=plugRQw.js.map
