var Wl = Object.defineProperty;
var jl = (t, i, o) => i in t ? Wl(t, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[i] = o;
var nt = (t, i, o) => (jl(t, typeof i != "symbol" ? i + "" : i, o), o);
import { getCurrentInstance as gt, defineComponent as pe, resolveComponent as X, openBlock as S, createElementBlock as D, normalizeClass as Be, normalizeStyle as ne, createBlock as Q, createCommentVNode as de, renderSlot as Le, ref as q, computed as H, withDirectives as fe, unref as p, createElementVNode as F, toDisplayString as G, createVNode as Y, withCtx as Z, createTextVNode as be, vShow as ge, resolveDirective as Nt, h as Ve, Fragment as ke, renderList as _e, onBeforeMount as ql, watch as we, nextTick as Fe, isRef as Ae, onMounted as Ne, onBeforeUnmount as hl, Teleport as Jl, withModifiers as Tt, mergeProps as lt, onUnmounted as Yl, shallowRef as ft, triggerRef as Xl, createSlots as tt } from "vue";
import Ql from "deepmerge";
import { isObject as Zl, isFunction as ea, isPlainObject as et, cloneDeep as ue, isEmpty as Oe, debounce as yl, isNumber as st, isString as Et, last as pt, isEqual as rt, first as Bt, find as xt, indexOf as el, findIndex as vl, remove as ta } from "lodash-es";
import dt from "sweetalert";
import { Tooltip as la, Modal as He, Button as Vt, TableColumnConfig as aa, Radio as na, Input as oa, Message as tl, Icon as ia } from "view-ui-plus";
import { useRouter as sa, useRoute as gl } from "vue-router";
import ra from "popper.js";
import Ot from "axios";
import ll from "@amap/amap-jsapi-loader";
import ua from "ar-cascader";
import { Toolbar as da, Editor as ca } from "@wangeditor/editor-for-vue";
import ot from "moment";
import { Boot as fa } from "@wangeditor/editor";
import pa from "vue-json-viewer";
const bl = {
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
}, ma = /(%|){([0-9a-zA-Z_]+)}/g;
function ha() {
  function t(o, e) {
    return Object.prototype.hasOwnProperty.call(o, e);
  }
  function i(o, ...e) {
    let n;
    return e.length === 1 && typeof e[0] == "object" && (n = e[0]), (!n || !n.hasOwnProperty) && (n = {}), o === void 0 ? "" : o.replace(ma, (a, s, c, u) => {
      let v;
      return o[u - 1] === "{" && o[u + a.length] === "}" ? c : (v = t(n, c) ? n[c] : null, v ?? "");
    });
  }
  return i;
}
const ya = ha();
let mt = bl;
const va = {
  zh: bl
};
let al, nl = {}, Pe, ga = function(t, i) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(t, i);
  if (Pe && Pe.global)
    return Pe.global.t(t, i);
  if (Pe && Pe.locale) {
    if (!nl[Pe.locale] || al != Pe.locale) {
      nl[Pe.locale] = !0;
      let o = Pe.getLocaleMessage(Pe.locale) || {}, e = Ql(va[Pe.locale], o, { clone: !0 });
      mt = e, Pe.setLocaleMessage(Pe.locale, e), al = Pe.locale;
    }
    return Pe.hlang(t, i);
  }
};
const Ee = function(t, i) {
  let o = ga.apply(this, [t, i]);
  if (o != null)
    return o;
  const e = t.split(".");
  let n = mt;
  for (let a = 0, s = e.length; a < s; a++) {
    const c = e[a];
    if (o = n[c], a === s - 1)
      return ya(o, i);
    if (!o)
      return "";
    n = o;
  }
  return "";
}, ba = function(t) {
  mt = t || mt;
}, ka = function(t) {
  Pe = t;
}, ht = {
  use: ba,
  t: Ee,
  i18n: ka
};
function O(t, i) {
  var e, n, a;
  const o = (a = (n = (e = gt()) == null ? void 0 : e.appContext) == null ? void 0 : n.config) == null ? void 0 : a.globalProperties;
  return Ee.apply(o, [t, i]);
}
const kl = /* @__PURE__ */ pe({
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
    const o = t, e = i;
    function n() {
      o.disabled || e("click");
    }
    return (a, s) => {
      const c = X("Icon");
      return S(), D("div", {
        class: Be({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: ne({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: n
      }, [
        o.icon ? (S(), Q(c, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : de("", !0),
        Le(a.$slots, "default")
      ], 6);
    };
  }
});
function Se() {
  const { appContext: t } = gt();
  return t.config.globalProperties;
}
const wa = { class: "headerTxtAM" }, _a = { class: "contentAM" }, Va = /* @__PURE__ */ pe({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: () => {
      var t;
      return (t = Se()) == null ? void 0 : t.fontSizeBase;
    } },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(t, { expose: i, emit: o }) {
    const e = t, n = o;
    let a = q(!1);
    const s = H(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = H(() => ({ zIndex: e.zIndex }));
    function u() {
      a.value = !0, n("on-open");
    }
    function v(d) {
      a.value = !1, n("on-close", d === !0);
    }
    return i({
      open: u,
      close: v
    }), (d, f) => fe((S(), D("div", {
      class: "fullScreenPopBoxAM",
      style: ne(p(c))
    }, [
      F("div", {
        class: "headerAM",
        style: ne({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(s) })
      }, [
        F("span", wa, G(d.title || p(O)("r.title")), 1),
        Y(kl, {
          icon: "md-return-left",
          onClick: v
        }, {
          default: Z(() => [
            be(G(p(O)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      F("div", _a, [
        Le(d.$slots, "default")
      ])
    ], 4)), [
      [ge, p(a)]
    ]);
  }
}), Ca = { class: "msg" }, Sa = /* @__PURE__ */ pe({
  __name: "Hello",
  setup(t) {
    let i = q("Greetings from Ricky.");
    return (o, e) => (S(), D("span", Ca, G(p(i)), 1));
  }
}), Lt = /* @__PURE__ */ pe({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Se().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(t, { emit: i }) {
    const o = t, e = i, n = H(() => {
      var s;
      return Math.floor(o.size / 17 * ((s = Se()) == null ? void 0 : s.fontSizeBase)) + "px";
    });
    function a(s) {
      o.disabled || e("click", s);
    }
    return (s, c) => {
      const u = X("Icon"), v = Nt("has");
      return fe((S(), D("div", {
        class: Be(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: a,
        style: ne({ "font-size": p(n) })
      }, [
        Y(u, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        be(" " + G(o.name || p(O)("r.button")), 1)
      ], 6)), [
        [v, s.has]
      ]);
    };
  }
}), Ta = { class: "c404K" }, Ba = /* @__PURE__ */ F("div", { class: "t404" }, "404", -1), xa = { class: "ct404" }, Oa = { class: "p404" }, La = /* @__PURE__ */ pe({
  __name: "Page404",
  setup(t) {
    const o = gt().appContext.config.globalProperties.$router;
    function e() {
      o.go(-1);
    }
    return (n, a) => {
      const s = X("Button");
      return S(), D("div", Ta, [
        Ba,
        F("div", xa, "UH OH! " + G(p(O)("r.pageNotFound")), 1),
        F("div", Oa, G(p(O)("r.notFoundMsg")), 1),
        Y(s, {
          class: "bt404",
          onClick: e
        }, {
          default: Z(() => [
            be(G(p(O)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function $e(t, i, o, e = !0) {
  const n = (...a) => Ee.apply(this, a);
  return new Promise((a, s) => {
    if (typeof t == "object" && !Array.isArray(t)) {
      let c = n("r.confirm"), u = n("r.cancel"), v = !1, d = "swalConfirmBt", f = "swalCancelBt";
      const y = /^HTML.*Element$/;
      t.type && (t.icon = t.type) && delete t.type, t.content && (t.text = t.content) && delete t.content, t.className = t.className || "swalBoxX";
      let b = "";
      t.text && y.test(j(t.text)) ? b = "content" : t.text && j(t.text) === "String" && (b = "text"), t.buttons && (typeof t.buttons == "object" && !Array.isArray(t.buttons) ? t.buttons.cancel && (t.buttons.cancel.text && (u = t.buttons.cancel.text) && (v = !0), t.buttons.cancel.className && (f = t.buttons.cancel.className), t.buttons.confirm.text && (c = t.buttons.confirm.text), t.buttons.confirm.className && (d = t.buttons.confirm.className)) : Array.isArray(t.buttons) && (t.buttons[0] && (u = t.buttons[0], v = !0), t.buttons[1] && (c = t.buttons[1]))), dt({
        title: t.title,
        icon: t.icon,
        className: t.className,
        [b]: t.text,
        buttons: {
          confirm: {
            text: c,
            value: !0,
            visible: !0,
            className: d
          },
          cancel: {
            text: u,
            value: null,
            visible: v,
            className: f
          }
        },
        closeOnClickOutside: t.closeOnClickOutside ?? !0
      }).then((C) => {
        C && typeof t.onOk == "function" && t.onOk(), a(C);
      }).catch((C) => {
        s(C);
      });
    } else if (typeof t == "string") {
      let c = "";
      if (i)
        switch (typeof i) {
          case "string":
            c = "text";
            break;
          case "object":
            c = "content";
            break;
        }
      dt({
        title: t,
        [c]: i || "",
        icon: o || "",
        className: "swalBoxX",
        closeOnClickOutside: e,
        buttons: {
          confirm: {
            text: n("r.confirm"),
            value: !0,
            visible: !0,
            className: "swalConfirmBt",
            closeModal: !0
          }
        }
      }).then((u) => {
        a(u);
      }).catch((u) => {
        s(u);
      });
    } else if (typeof t == "boolean")
      !t && dt.close && dt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Aa(t) {
  return t.replace(/_(\w)/g, function(i, o) {
    return o.toUpperCase();
  });
}
function Vi(t) {
  let i = document.createElement("div");
  return i.textContent !== void 0 ? i.textContent = t : i.innerText = t, i.innerHTML;
}
function Ci(t) {
  let i = document.createElement("div");
  return i.innerHTML = t, i.innerText || i.textContent;
}
function Ct(t) {
  return new Promise((i) => {
    let o = new FileReader();
    o.readAsDataURL(t), o.onloadend = () => {
      i(o.result);
    };
  });
}
function wl(t) {
  return (t == null ? void 0 : t.split(".").pop().toLocaleLowerCase()) || "";
}
function St(t) {
  return j(t) === "String" && t.indexOf("image") > -1;
}
function ol(t) {
  const i = wl(t);
  let o = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 ? o = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 ? o = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 ? o = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(i) > -1 ? o = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(i) > -1 ? o = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(i) > -1 && (o = "ios-videocam"), o;
}
function Ia(t, i) {
  let o = document.createElement("a");
  o.href = i, o.download = t, Pa(o);
}
function Pa(t) {
  let i = document.createEvent("MouseEvents");
  i.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
}
function At({
  group: t,
  condition: i,
  pathKey: o,
  childKey: e = "children",
  path: n = []
}) {
  if (t && Zl(t)) {
    if (ea(i)) {
      if (et(t)) {
        let a = t, s = ue(n);
        if (i(a))
          return o && a[o] && s.push(a[o]), s;
        if (a[e] && !Oe(a[e])) {
          o && a[o] && s.push(a[o]);
          let c = At({
            group: a[e],
            condition: i,
            pathKey: o,
            childKey: e,
            path: s
          });
          if (!Oe(c))
            return c;
        }
      } else if (Array.isArray(t))
        for (let a of t) {
          let s = ue(n);
          if (i(a))
            return o && a[o] ? s.push(a[o]) : s.push(String(t.indexOf(a))), s;
          if (a[e] && a[e].length > 0) {
            o && a[o] ? s.push(a[o]) : s.push(String(t.indexOf(a)));
            let c = At({
              group: a[e],
              condition: i,
              pathKey: o,
              childKey: e,
              path: s
            });
            if (!Oe(c))
              return c;
          }
        }
    } else if (Array.isArray(t))
      for (let a of t) {
        let s = ue(n);
        if (a === i)
          return s.push(String(t.indexOf(a))), s;
      }
  }
  return [];
}
function Fa(t, i = 12) {
  if (j(t) === "String" && t.length > 0) {
    let o = document.createElement("span");
    o.style.fontSize = i + "px", o.style.fontFamily = "inherit", o.innerHTML = t, o.style.opacity = "0", o.style.position = "fixed", o.style.top = "3000px", document.body.append(o);
    const e = o.clientWidth;
    return document.body.removeChild(o), e;
  }
  return 0;
}
function Si(t) {
  return t === "" ? null : t;
}
function Ti(t) {
  var i;
  t = t || window.Event, t != null && t.stopPropagation ? (i = t.stopPropagation) == null || i.call(t) : t && (t.cancelBubble = !0);
}
const It = typeof window < "u";
function j(t) {
  return Object.prototype.toString.call(t).replace(/\[object |]/g, "");
}
function _l(t) {
  return t.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function yt(t) {
  let i = j(t);
  if (i === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = j(t[o]);
        e === "String" ? t[o] = t[o].trim() : (e === "Object" || e === "Array") && yt(t[o]);
      }
  } else if (i === "Array")
    for (let o = 0, e = t.length; o < e; o++) {
      let n = j(t[o]);
      n === "String" ? t[o] = t[o].trim() : (n === "Array" || n === "Object") && yt(t[o]);
    }
  return t;
}
function Pt(t, i = []) {
  if (j(t) === "Array")
    return t.forEach((o, e) => {
      switch (j(o)) {
        case "Array":
        case "Object":
          Pt(o);
          break;
        default:
          t[e] = null;
      }
    }), t;
  if (j(t) === "Object") {
    for (let o in t)
      if (t.hasOwnProperty(o)) {
        let e = !0;
        for (let n of i)
          if (n === o) {
            e = !1;
            break;
          }
        if (e)
          switch (j(t[o])) {
            case "Array":
            case "Object":
              Pt(t[o]);
              break;
            default:
              t[o] = null;
          }
      }
    return t;
  } else
    return t;
}
const Ra = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function $a(t) {
  let i = new FormData();
  for (let o in t)
    t.hasOwnProperty(o) && t[o] !== null && i.append(o, t[o]);
  return i;
}
function Xe(t, i, o = !1) {
  if (!t || !i)
    return !1;
  let e, n = "notFoundC", a = function(s, c) {
    if (Array.isArray(s)) {
      if (j(c) === "Function" && c(s))
        return n = s, [];
      for (let u of s) {
        if (n !== "notFoundC")
          break;
        if (j(c) === "Function" && c(u) || u === c)
          return n = u, [s.indexOf(u)];
        if (j(u) === "Array" || j(u) === "Object") {
          let v = a(u, c);
          if (v !== void 0)
            return [s.indexOf(u), ...v];
        }
      }
    } else if (j(s) === "Object") {
      if (j(c) === "Function" && c(s))
        return n = s, [];
      for (let u in s) {
        if (n !== "notFoundC")
          break;
        if (s.hasOwnProperty(u)) {
          if (j(c) === "Function" && c(u) || s[u] === c)
            return n = s[u], [u];
          if (j(s[u]) === "Object" || j(s[u]) === "Array") {
            let v = a(s[u], c);
            if (v !== void 0)
              return [u, ...v];
          }
        }
      }
    }
  };
  return e = a(t, i), o ? e || !1 : n === "notFoundC" ? !1 : n;
}
function Ka(t, i) {
  for (let o = 0, e = i.length; o < e; o++)
    if (t === i[o])
      return !0;
  return !1;
}
function Ma(t, i = 2) {
  let o = new RegExp(`(^-?\\d+\\.\\d{${i}})(\\d+$)`), e = t && String(t) || "";
  return o.test(e) ? Number(e.replace(o, "$1")) : t;
}
function Vl(t, i = {}, o = "get") {
  let e = document.createElement("form"), n = document.getElementsByTagName("body")[0];
  n.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", o);
  let a = t;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((c) => {
      var u;
      return ((u = c == null ? void 0 : c.indexOf) == null ? void 0 : u.call(c, "URL")) > -1;
    }).map((c) => {
      var u;
      return (u = c.replace) == null ? void 0 : u.call(c, "URL", "");
    });
    for (let c of s) {
      let u = new RegExp("^/" + c + "(?=/.*$)", "i");
      if (u.test(t) && window.g[c + "URL"]) {
        a = window.g[c + "URL"] + t.replace(u, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", a), et(i)) {
    for (let c in i)
      if (i.hasOwnProperty(c) && (i[c] || i[c] === 0 || i[c] === !1 || i[c] === "")) {
        let u = document.createElement("input");
        u.setAttribute("type", "hidden"), u.setAttribute("name", c), u.setAttribute("value", i[c]), e.appendChild(u);
      }
    e.submit();
    let s = setTimeout(() => {
      n.removeChild(e), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function za(t, i = {}, o = "get") {
  if (i.hasOwnProperty("columns") && (i.columns === "" || i.columns === null || i.columns === void 0)) {
    $e.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  Vl(t, i, o);
}
function Da(t, i, o = !1) {
  let e;
  if (t && j(i) === "Array") {
    let n = localStorage.getItem(t);
    if (n) {
      let a = JSON.parse(decodeURI(n));
      e = i.filter((s) => {
        var c;
        return (s == null ? void 0 : s.key) && ((c = a == null ? void 0 : a.indexOf) == null ? void 0 : c.call(a, s.title)) !== -1;
      }).map((s) => s.key);
    } else
      e = i.map((a) => a == null ? void 0 : a.key);
  } else
    e = [];
  return o || (e = String(e)), e;
}
function Ce(t) {
  return t != null && t !== "";
}
function Ua(t) {
  return /^-?\d+(.\d+)?$/.test(t);
}
function Cl(t, i = !1, o = "", e = 12) {
  return function(n, a) {
    var v, d;
    let s;
    if (Array.isArray(t)) {
      let f = [];
      for (let y of t)
        Ce((v = a.row) == null ? void 0 : v[y]) && f.push(a.row[y]);
      s = f.join(o);
    } else
      typeof t == "function" ? s = t(a) : s = (d = a.row) == null ? void 0 : d[t];
    let c = Fa(s, e), u = a.column._width;
    return s && c > u ? Ve(
      la,
      {
        style: {
          width: "100%"
        },
        content: s,
        maxWidth: u * 2
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
        s
      )
    ) : Ve("span", i && !Ce(s) ? "--" : s);
  };
}
function Na(t) {
  if (et(t)) {
    for (let i in t)
      if (t.hasOwnProperty(i) && Ce(t[i]))
        return !1;
    return !0;
  } else if (Array.isArray(t)) {
    for (let i of t)
      if (Ce(i))
        return !1;
    return !0;
  }
  return !Ce(t);
}
function Ea(t) {
  return j(t) === "String" ? t.replace(/[^\x00-\xff]/g, "01").length : j(t) === "Number" ? (t += "", t.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function Ze({
  group: t,
  condition: i,
  key: o,
  val: e,
  childKey: n = "children"
}) {
  if (j(t) !== "Array" || j(i) !== "Function" || j(o) !== "String" || j(n) !== "String")
    return !1;
  t.forEach((a) => {
    i(a) && (j(e) === "Function" ? a[o] = e(a[o]) : a[o] = e), j(a[n]) === "Array" && a[n].length > 0 && Ze({
      group: a[n],
      condition: i,
      key: o,
      val: e,
      childKey: n
    });
  });
}
function Sl(t) {
  let i = sessionStorage.getItem("btnPermissions");
  return i ? i.split(",").indexOf(t) > -1 : !1;
}
function Tl(t) {
  return j(t) === "Number" && String(t) === "NaN";
}
function Ga(t, i = !1, o = !1) {
  if (j(t) !== "Object")
    return t;
  let e = Object.assign(t, {}), n = "";
  for (let a in e)
    if (e.hasOwnProperty(a)) {
      let s = e[a];
      s === void 0 || s === "" || j(s) === "String" && s.trim() === "" || s === null || Tl(s) ? o ? i ? n += a + "=&" : e[a] = "" : delete e[a] : i && (n += a + "=" + s + "&");
    }
  return i ? n.length > 0 ? n.substring(0, n.length - 1) : "" : e;
}
function Ft(t) {
  let i = {};
  if (Array.isArray(t)) {
    i = [];
    for (let o of t)
      Array.isArray(o) || et(o) ? i.push(Ft(o)) : Ce(o) && i.push(o);
  } else if (et(t))
    for (let o in t)
      t.hasOwnProperty(o) && (Array.isArray(t[o]) || et(t[o]) ? i[o] = Ft(t[o]) : Ce(t[o]) && (i[o] = t[o]));
  return i;
}
function Ha(t) {
  const i = window.open();
  if (i) {
    i.document.write(t);
    let o = setTimeout(() => {
      i.print(), window.clearTimeout(o), o = null;
    }, 10);
  }
}
function Bl(t) {
  let i = [], o = t;
  for (; t.previousSibling && (t = t.previousSibling); )
    t.nodeType === 1 && i.push(t);
  for (; o.nextSibling && (o = o.nextSibling); )
    o.nodeType === 1 && i.push(o);
  return i;
}
const Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Pt,
  dataFilterOrToUrl: Ga,
  decimalDigitsLimit: Ma,
  downloadFileByFormSubmit: Vl,
  fileExport: za,
  findCollection: Xe,
  formDataHeadConfig: Ra,
  getColumnsKeys: Da,
  hasPermission: Sl,
  htmlPrint: Ha,
  isClient: It,
  isEmptyValue: Na,
  isNaN: Tl,
  isNumberValue: Ua,
  isValidValue: Ce,
  myTypeof: j,
  oneOf: Ka,
  removeEmptyValue: Ft,
  setValByOption: Ze,
  siblingElems: Bl,
  stringLength: Ea,
  toFormData: $a,
  toLine: _l,
  tooltipManual: Cl,
  trimObj: yt
}, Symbol.toStringTag, { value: "Module" })), ja = { class: "groupBoxRP" }, qa = ["onClick"], Ja = /* @__PURE__ */ pe({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(t) {
    const i = sa(), o = t;
    function e(a) {
      return (a == null ? void 0 : a.path) === o.pathName ? "active" : "";
    }
    function n(a, s) {
      var d, f, y, b, C, g, _, w;
      (d = a == null ? void 0 : a.preventDefault) == null || d.call(a);
      let c = a == null ? void 0 : a.target;
      if (s && !s.children && !c.classList.contains("active")) {
        i.push(s.path);
        return;
      }
      let u = c.parentNode, v = Bl(u);
      for (let L of v) {
        (y = (f = L == null ? void 0 : L.classList) == null ? void 0 : f.remove) == null || y.call(f, "open");
        const B = (b = L == null ? void 0 : L.querySelectorAll) == null ? void 0 : b.call(L, ".open");
        if (B && Array.isArray(B))
          for (let V of B)
            (g = (C = V == null ? void 0 : V.classList) == null ? void 0 : C.remove) == null || g.call(C, "open");
      }
      (w = (_ = u == null ? void 0 : u.classList) == null ? void 0 : _.toggle) == null || w.call(_, "open");
    }
    return (a, s) => {
      const c = X("sideMenuGroup", !0);
      return S(), D("ul", ja, [
        (S(!0), D(ke, null, _e(o.data, (u, v) => (S(), D(ke, {
          key: (u == null ? void 0 : u.path) + v
        }, [
          u ? (S(), D("li", {
            key: 0,
            class: Be({ dropItemRP: u.children })
          }, [
            F("div", {
              class: Be(["menuTxtR", e(u)]),
              onClick: (d) => n(d, u),
              style: ne({ paddingLeft: u.level * 20 + "px" })
            }, G(u.name || "-- no name --"), 15, qa),
            u.children ? (S(), Q(c, {
              key: 0,
              data: u.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])) : de("", !0)
          ], 2)) : de("", !0)
        ], 64))), 128))
      ]);
    };
  }
}), Ya = { class: "menuListR" }, Xa = /* @__PURE__ */ pe({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(t, { emit: i }) {
    const o = t, e = i, n = gl(), a = q(!0), s = q(), c = q(), u = H(() => a.value ? O("r.hideMenu") : O("r.showMenu")), v = H(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    ql(() => {
      let y = localStorage.getItem("menuDisplayR") || "";
      y !== "" ? a.value = JSON.parse(y) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), we(
      () => n.path,
      (y) => {
        s.value = y, Fe(f);
      },
      { immediate: !0 }
    );
    function d() {
      a.value = !a.value, localStorage.setItem("menuDisplayR", JSON.stringify(a.value)), e("on-change", a.value);
    }
    function f() {
      var b, C, g, _, w;
      let y = c.value.querySelectorAll(".dropItemRP");
      for (let L of y)
        (b = L == null ? void 0 : L.querySelector) != null && b.call(L, ".active") && !((g = (C = L.classList) == null ? void 0 : C.contains) != null && g.call(C, "open")) && ((w = (_ = L.classList) == null ? void 0 : _.add) == null || w.call(_, "open"));
    }
    return (y, b) => {
      const C = X("Icon");
      return S(), D("div", {
        ref_key: "menuRef",
        ref: c,
        class: "menuBoxRP"
      }, [
        fe(F("div", Ya, [
          Y(Ja, {
            data: o.data,
            pathName: p(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ge, p(a)]
        ]),
        Y(C, {
          type: p(v),
          size: 25,
          class: Be([{ showIco: !p(a) }, "menuShowHideIco"]),
          title: p(u),
          onClick: d,
          color: p(a) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), Qa = ["title"], xl = /* @__PURE__ */ pe({
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
    const o = i, e = t;
    function n(a) {
      e.disabled || o("click", a);
    }
    return (a, s) => {
      const c = X("Icon"), u = Nt("has");
      return fe((S(), D("div", {
        class: Be(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || p(O)("r.button")
      }, [
        Y(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, Qa)), [
        [u, e.has]
      ]);
    };
  }
}), Za = { class: "contentX" }, en = { class: "arrowA" }, Rt = /* @__PURE__ */ pe({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(t) {
    const i = t, o = q(!0), e = H(() => o ? "background:" + i.bg || "transparent" : "");
    return (n, a) => {
      const s = X("Icon");
      return S(), D("div", {
        style: ne(p(e))
      }, [
        fe(F("div", Za, [
          Le(n.$slots, "default")
        ], 512), [
          [ge, p(o)]
        ]),
        F("div", en, [
          F("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (c) => o.value = !p(o))
          }, [
            Y(s, {
              type: p(o) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), tn = { class: "contentZ" }, ln = /* @__PURE__ */ pe({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    const o = t, e = i, n = H({
      get() {
        return o.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), a = H(() => n.value ? "background:" + o.bg : "");
    return (s, c) => (S(), D("div", {
      style: ne(p(a))
    }, [
      fe(F("div", tn, [
        Le(s.$slots, "default")
      ], 512), [
        [ge, p(n)]
      ])
    ], 4));
  }
});
let $t = [], Kt = [];
const an = function(t) {
  t && t.beforeEach ? t.beforeEach(() => {
    $t.map((i) => {
      window.clearTimeout(i);
    }), Kt.map((i) => {
      window.clearInterval(i);
    }), $t.length = 0, Kt.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Re = function(t, i) {
  let o = window.setTimeout(t, i);
  return $t.push(o), o;
}, nn = function(t, i) {
  let o = window.setInterval(t, i);
  return Kt.push(o), o;
}, on = /* @__PURE__ */ pe({
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
    const o = i, e = t;
    let n = !1;
    const a = H({
      get() {
        return e.modelValue;
      },
      set(v) {
        o("update:modelValue", v);
      }
    }), s = H({
      get() {
        return e.open;
      },
      set(v) {
        o("on-toggle", v);
      }
    }), c = H(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function u() {
      n || (n = !0, o("on-search", a.value), Re(() => {
        n = !1;
      }, 2e3));
    }
    return (v, d) => {
      const f = X("Input"), y = X("icon");
      return S(), D("div", {
        class: "tableSearchV",
        style: ne({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        Le(v.$slots, "default", {}, () => [
          Y(f, {
            modelValue: p(a),
            "onUpdate:modelValue": d[0] || (d[0] = (b) => Ae(a) ? a.value = b : null),
            style: ne({ width: e.width }),
            search: "",
            onOnSearch: u,
            class: "searchInputC",
            placeholder: e.placeholder || p(O)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        fe(F("span", {
          class: "sbt",
          onClick: d[1] || (d[1] = (b) => s.value = !p(s)),
          style: ne({ color: e.btnColor })
        }, [
          Y(y, {
            type: p(c),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          be(G(p(O)("r.adSearch")), 1)
        ], 4), [
          [ge, e.showBtn]
        ])
      ], 4);
    };
  }
}), sn = {
  beforeMount(t, i) {
    function o(e) {
      var n;
      if (t.contains(e.target))
        return !1;
      (n = i == null ? void 0 : i.value) == null || n.call(i, e);
    }
    t.__vueClickOutside__ = o, It && document.addEventListener("click", o);
  },
  unmounted(t) {
    It && document.removeEventListener("click", t.__vueClickOutside__), delete t.__vueClickOutside__;
  }
};
function Ol(t, i, o, e, n = !1) {
  const a = (...s) => Ee.apply(this, s);
  $e.call(this, {
    title: t || a("r.info.title"),
    text: i || a("r.info.text"),
    icon: o || "warning",
    onOk: e,
    buttons: [a("r.cancel")],
    closeOnClickOutside: n
  });
}
const rn = { class: "tabSetF" }, un = { class: "cannotSelect" }, dn = { class: "topCheck" }, cn = /* @__PURE__ */ F("span", { class: "iconfont icon-r-save" }, null, -1), Ll = /* @__PURE__ */ pe({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    width: { default: "240px" },
    bg: { default: () => Se().tableSettingBg },
    placement: { default: "bottom-end" },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" },
    transfer: { type: Boolean, default: () => Se().tableSettingTransfer },
    eventsEnabled: { type: Boolean, default: () => Se().tableSettingEventsEnabled }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: i }) {
    var m, R, h, $, P;
    const o = i, e = t, n = q(), a = q(), s = q(!0), c = q(!1), u = q(!1), v = q([]), d = H(() => {
      var U;
      let T = O("r.unknown");
      return ((U = e.modelValue) == null ? void 0 : U.length) > v.value.length && (v.value = ue(e.modelValue)), v.value.map((M) => {
        let te = { label: (M == null ? void 0 : M.title) || T };
        return M != null && M.disableShowSetting && (te.disabled = !0), te;
      });
    }), f = H(() => d.value.filter((T) => T == null ? void 0 : T.disabled)), y = H({
      get() {
        var T, U;
        return (U = (T = e.modelValue) == null ? void 0 : T.map) == null ? void 0 : U.call(T, (M) => (M == null ? void 0 : M.title) || O("r.unknown"));
      },
      set(T) {
        let U = v.value.filter((M) => {
          for (let te of T)
            if (te === (M == null ? void 0 : M.title))
              return !0;
          return !1;
        });
        o("update:modelValue", U);
      }
    }), b = (P = ($ = (h = (R = (m = gt()) == null ? void 0 : m.appContext) == null ? void 0 : R.config) == null ? void 0 : h.globalProperties) == null ? void 0 : $.$i18n) == null ? void 0 : P.locale;
    let C = null;
    Ne(() => {
      let T = O("r.unknown"), U = A();
      U ? y.value = JSON.parse(decodeURI(U)) : e.defaultCheck && (y.value = e.modelValue.filter((M) => M == null ? void 0 : M.showSettingCheck).map((M) => (M == null ? void 0 : M.title) || T)), Fe(function() {
        !n.value || !a.value || (C = new ra(n.value, a.value, {
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
          onUpdate: (M) => {
            var te;
            if (M != null && M.popper && ((te = M.instance) != null && te.popper)) {
              const he = g(M), { needChange: W } = he;
              if (W) {
                const { height: se } = he, ie = M.instance.popper;
                ie.style && (ie.style.height = `${se}px`);
              }
            }
          }
        }));
      }), Re(() => {
        var M;
        u.value = !0, (M = C == null ? void 0 : C.update) == null || M.call(C), Fe(function() {
          u.value = !1;
        });
      }, 0);
    }), hl(function() {
      var T;
      (T = C == null ? void 0 : C.destroy) == null || T.call(C);
    });
    function g(T) {
      var W, se;
      const { height: U } = T.popper, M = T.instance.popper, te = window.innerHeight;
      let he = 0;
      if ((W = M.childNodes) != null && W.length)
        for (let ie = 0; ie < M.childNodes.length; ie++)
          he += (se = M.childNodes[ie]) == null ? void 0 : se.offsetHeight;
      return te < U - 10 || U < he ? {
        needChange: !0,
        height: te - 10 < he ? te - 10 : he
      } : { needChange: !1 };
    }
    function _(T) {
      T.length === d.value.length ? (s.value = !1, c.value = !0) : T.length > f.value.length ? (s.value = !0, c.value = !1) : (s.value = !1, c.value = !1);
    }
    we(() => y.value, _, {
      immediate: !0,
      deep: !0
    });
    function w() {
      u.value && (I() && Ol(O("r.notSave"), "", "warning", B), u.value = !1);
    }
    function L() {
      u.value ? w() : (u.value = !0, Fe(function() {
        var T;
        (T = C == null ? void 0 : C.update) == null || T.call(C);
      }));
    }
    function B() {
      b ? window[e.storage].setItem(e.sKey + "_" + b, encodeURI(JSON.stringify(y.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(y.value))), w();
    }
    function V(T) {
      var U, M;
      if (u.value) {
        if (e.transfer) {
          const te = a.value;
          if (te === (T == null ? void 0 : T.target) || (U = te == null ? void 0 : te.contains) != null && U.call(te, T == null ? void 0 : T.target))
            return;
        }
        (M = T == null ? void 0 : T.preventDefault) == null || M.call(T), w();
      }
    }
    function K() {
      s.value ? c.value = !1 : c.value = !c.value, s.value = !1, c.value ? y.value = d.value.map((T) => T == null ? void 0 : T.label) : y.value = f.value.map((T) => T == null ? void 0 : T.label);
    }
    function A() {
      let T;
      return b ? T = window[e.storage].getItem(e.sKey + "_" + b) : T = window[e.storage].getItem(e.sKey), T;
    }
    function I() {
      var U;
      let T = A();
      if (T) {
        if (T = JSON.parse(decodeURI(T)), (T == null ? void 0 : T.length) !== ((U = y.value) == null ? void 0 : U.length))
          return !0;
        for (let M of T)
          if (y.value.indexOf(M) === -1)
            return !0;
      } else
        return !0;
      return !1;
    }
    return (T, U) => {
      const M = X("Icon"), te = X("Checkbox"), he = X("CheckboxGroup");
      return fe((S(), D("div", rn, [
        F("div", {
          ref_key: "buttonRef",
          ref: n,
          class: "tabSetBt",
          onClick: L
        }, [
          Y(M, {
            type: "md-settings",
            size: "17"
          }),
          F("span", un, G(p(O)("r.tabSetting")), 1)
        ], 512),
        (S(), Q(Jl, {
          to: "body",
          disabled: !e.transfer
        }, [
          fe(F("div", {
            ref_key: "popperRef",
            ref: a,
            class: "tabSetCard",
            style: ne({ width: e.width, backgroundColor: e.bg })
          }, [
            F("div", dn, [
              Y(te, {
                indeterminate: p(s),
                modelValue: p(c),
                "onUpdate:modelValue": U[0] || (U[0] = (W) => Ae(c) ? c.value = W : null),
                onClick: Tt(K, ["prevent"])
              }, {
                default: Z(() => [
                  be(G(p(O)("r.all")), 1)
                ]),
                _: 1
              }, 8, ["indeterminate", "modelValue"]),
              F("div", {
                class: "btnR",
                style: { float: "right", display: "inline-block" },
                onClick: B
              }, [
                cn,
                F("span", null, G(p(O)("r.save")), 1)
              ])
            ]),
            Y(he, {
              modelValue: p(y),
              "onUpdate:modelValue": U[1] || (U[1] = (W) => Ae(y) ? y.value = W : null)
            }, {
              default: Z(() => [
                (S(!0), D(ke, null, _e(p(d), (W, se) => (S(), Q(te, {
                  class: "setItem",
                  label: W && W.label,
                  key: "tabSet_" + e.sKey + se,
                  disabled: W && W.disabled
                }, null, 8, ["label", "disabled"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ], 4), [
            [ge, p(u)]
          ])
        ], 8, ["disabled"]))
      ])), [
        [p(sn), V]
      ]);
    };
  }
});
let it = !1;
function Mt({
  height: t,
  width: i = 416,
  title: o,
  content: e,
  onOk: n,
  onCancel: a,
  onClose: s,
  okText: c,
  cancelText: u,
  noWarnIcon: v,
  footerAlign: d,
  cancelBt: f = !0
}) {
  const y = (...w) => Ee.apply(this, w);
  let C = (t && Number(t) - 90 > 100 ? Number(t) - 90 + "px" : 0) || "100px", g = j(e) === "String";
  const _ = typeof e == "function";
  He.warning({
    width: i,
    footerHide: !0,
    render: () => Ve(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: C
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
                Ve("span", o || y("r.info.title")),
                Ve(
                  Vt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      it || (He.remove(), s && j(s) === "Function" && s());
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
                  textAlign: g ? "center" : "left"
                }
              },
              [
                Ve("i", {
                  class: g && !v ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ve("div", { class: "msgBoxConO" }, _ ? [e(Ve)] : e || y("r.info.text"))
              ]
            ),
            Ve(
              "div",
              {
                class: "footerN",
                style: {
                  textAlign: d || "center"
                }
              },
              [
                Ve(
                  Vt,
                  {
                    class: "okBtN",
                    onClick(w) {
                      var L, B, V, K, A, I, m, R, h;
                      if (n && typeof n == "function") {
                        const $ = n();
                        if ($ && j($) === "Promise") {
                          it = !0;
                          const P = (w == null ? void 0 : w.currentTarget) || (w == null ? void 0 : w.target);
                          P && ((B = (L = P.classList) == null ? void 0 : L.add) == null || B.call(L, "ivu-btn-loading"), (K = (V = P.nextSibling) == null ? void 0 : V.setAttribute) == null || K.call(V, "disabled", "disabled"), (h = (R = ((m = (I = (A = P.parentElement) == null ? void 0 : A.parentElement) == null ? void 0 : I.querySelector) == null ? void 0 : m.call(I, ".titleN .closeN")).classList) == null ? void 0 : R.add) == null || h.call(R, "disabled")), Promise.resolve($).then(() => {
                            it = !1, He.remove();
                          }).catch(() => {
                            it = !1, He.remove();
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
                    Ve("span", c || y("r.confirm"))
                  ]
                ),
                Ve(
                  Vt,
                  {
                    class: ["cancelBtN", !f && "hide"],
                    onClick() {
                      it || (He.remove(), j(a) === "Function" && a && a());
                    }
                  },
                  () => u || y("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let Ye = 0, ut = document.createElement("div");
ut.setAttribute("class", "spinModal");
ut.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ut);
};
function il(t) {
  t ? ut.classList.add("show") : ut.classList.remove("show");
}
function Al(t) {
  let i = Ye;
  t ? Ye++ : Ye > 0 && Ye--, i !== Ye && (Ye === 0 ? il(!1) : i === 0 && il(!0));
}
const fn = window.location.origin;
let vt = null;
const sl = (...t) => Ee.apply(vt, t);
let Ke = Ot.create({
  baseURL: fn,
  withCredentials: !0
  // 允许携带cookie
});
function pn() {
  console.info(
    "store为空，请在安装插件时传入store实例，vuex：app.use(plugRQw,{store})，Pinia：app.use(plugRQw,{useStore})"
  );
}
Ke.interceptors.request.use(
  (t) => t,
  (t) => Promise.reject(t)
);
function rl() {
  var t, i;
  if (Ke.store)
    if (typeof Ke.store == "function") {
      const o = Ke.store();
      o.logout && o.logout();
    } else
      (i = (t = Ke.store) == null ? void 0 : t.dispatch) == null || i.call(t, "logout");
  else
    pn();
}
Ke.interceptors.response.use(
  (t) => {
    var i, o;
    return vt && (((i = t == null ? void 0 : t.data) == null ? void 0 : i.code) === 403 || ((o = t == null ? void 0 : t.data) == null ? void 0 : o.code) === 409) && Mt({
      content: sl("r.http." + t.data.code),
      onOk: rl
    }), t;
  },
  (t) => {
    var i, o;
    return vt && (((i = t == null ? void 0 : t.response) == null ? void 0 : i.status) === 403 || ((o = t == null ? void 0 : t.response) == null ? void 0 : o.status) === 409) && Mt({
      content: sl("r.http." + t.response.status),
      onOk: rl
    }), console.warn("请求出错：", t), Promise.reject(t);
  }
);
function Ge(t, i, o, e) {
  e && e.spin && Al(!1);
  let n = !0, a = t && t.data;
  if (a) {
    o = o || [];
    for (let s of o)
      a = a[s], n = n && a;
    return n ? a : (i && console.warn(i), !1);
  }
  return i && console.warn(i), !1;
}
function mn(t, i, o, e, n, a, s) {
  return new Promise((c, u) => {
    switch (t) {
      case "get":
        Ke.get(i, { params: o }).then((d) => {
          let f = Ge(d, e, n, a);
          f ? c(f) : u(d);
        }).catch((d) => {
          Ge({}, e, n, a), u(d);
        });
        break;
      case "delete":
        let v = s ? "params" : "data";
        Ke.delete(i, { [v]: o }).then((d) => {
          let f = Ge(d, e, n, a);
          f ? c(f) : u(d);
        }).catch((d) => {
          Ge({}, e, n, a), u(d);
        });
        break;
      case "post":
        Ke.post(i, o, a).then((d) => {
          let f = Ge(d, e, n, a);
          f ? c(f) : u(d);
        }).catch((d) => {
          Ge({}, e, n, a), u(d);
        });
        break;
      case "put":
        Ke.put(i, o, a).then((d) => {
          let f = Ge(d, e, n, a);
          f ? c(f) : u(d);
        }).catch((d) => {
          Ge({}, e, n, a), u(d);
        });
        break;
    }
  });
}
function ct(t, i, o = {}, e, n, a, s) {
  return new Promise((c, u) => {
    var v;
    if (i) {
      a && a.spin && Al(!0);
      let d = i;
      if (window && window.hasOwnProperty("g")) {
        const b = window.g;
        let C = Object.keys(b).filter((g) => {
          var _;
          return ((_ = g == null ? void 0 : g.indexOf) == null ? void 0 : _.call(g, "URL")) > -1;
        }).map((g) => {
          var _;
          return (_ = g.replace) == null ? void 0 : _.call(g, "URL", "");
        });
        for (let g of C) {
          let _ = new RegExp("^/" + g + "(?=/.*$)", "i");
          if (_.test(i) && b[g + "URL"]) {
            d = b[g + "URL"] + i.replace(_, "");
            break;
          }
        }
      }
      let f;
      if (((v = a == null ? void 0 : a.headers) == null ? void 0 : v["Content-Type"]) === "multipart/form-data")
        f = o;
      else if (o && !Oe(o))
        if (Array.isArray(o)) {
          f = [];
          for (let b of o)
            (b || b === 0 || b === !1 || b === "" && a && !a.noEmptyStr) && f.push(b);
        } else {
          f = {};
          for (let b in o)
            o.hasOwnProperty(b) && (o[b] || o[b] === 0 || o[b] === !1 || o[b] === "" && a && !a.noEmptyStr) && (f[b] = o[b]);
        }
      let y = t.toLowerCase();
      mn(y, d, f, e, n, a, s).then((b) => {
        c(b);
      }).catch((b) => {
        u(b);
      });
    } else
      console.error("没有请求地址:url"), u("没有请求地址:url");
  });
}
const De = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(t, i) {
    Ke.store = t, vt = i.config.globalProperties;
  },
  post(t, i, o, e, n) {
    return new Promise((a, s) => {
      ct("post", t, i, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  put(t, i, o, e, n) {
    return new Promise((a, s) => {
      ct("put", t, i, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  get(t, i, o, e, n) {
    return new Promise((a, s) => {
      ct("get", t, i, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  delete(t, i, o, e, n, a = !0) {
    return new Promise((s, c) => {
      ct("delete", t, i, o, e, n, a).then((u) => {
        s(u);
      }).catch((u) => {
        c(u);
      });
    });
  },
  all: Ot.all,
  spread: Ot.spread,
  config: Ke
}, hn = {
  key: 0,
  class: "pageTotal"
}, yn = {
  key: 1,
  class: "pageProSize"
}, Il = /* @__PURE__ */ pe({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var t;
      return ((t = Se()) == null ? void 0 : t.pageSizes) || [10, 20, 50, 100];
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Se()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Se()) == null ? void 0 : t.pageShowSizer;
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(t, { emit: i }) {
    const o = i, e = t, n = H({
      get() {
        return e.modelValue;
      },
      set(s) {
        o("update:modelValue", s), o("on-change", s);
      }
    }), a = H({
      get() {
        return e.pageSize;
      },
      set(s) {
        o("on-page-size-change", s), n.value !== 1 && (n.value = 1);
      }
    });
    return (s, c) => {
      const u = X("Page"), v = X("Option"), d = X("Select");
      return S(), D("div", {
        class: Be(["pagePro", { pageProDefault: e.size === "default" }])
      }, [
        e.showTotal ? (S(), D("span", hn, G(p(O)("r.total") + " ") + G(e.total) + G(" " + p(O)("r.items")), 1)) : de("", !0),
        Y(u, {
          modelValue: p(n),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => Ae(n) ? n.value = f : null),
          "page-size": p(a),
          total: e.total,
          size: e.size,
          "page-size-opts": e.pageSizeOpts,
          disabled: e.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        e.showSizer ? (S(), D("div", yn, [
          Y(d, {
            modelValue: p(a),
            "onUpdate:modelValue": c[1] || (c[1] = (f) => Ae(a) ? a.value = f : null),
            size: e.size,
            transfer: e.transfer,
            disabled: e.disabled
          }, {
            default: Z(() => [
              (S(!0), D(ke, null, _e(e.pageSizeOpts, (f) => (S(), Q(v, {
                value: f,
                key: f
              }, {
                default: Z(() => [
                  be(G(f) + " " + G(p(O)("r.page")), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "size", "transfer", "disabled"])
        ])) : de("", !0)
      ], 2);
    };
  }
}), vn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, gn = { class: "topBtn" }, bn = { class: "tableContainer growFlexItem" }, kn = { class: "fullHeight relativeBox" }, wn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, _n = { class: "pageContainer" }, Vn = 300, zt = /* @__PURE__ */ pe({
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
      return (t = Se()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Se()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Se()) == null ? void 0 : t.pageShowSizer;
    } },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(t, { expose: i, emit: o }) {
    const e = o;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...aa });
    const a = t, s = Se().pageSizes || [10, 20, 50, 100], c = q(a.data), u = q(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), v = q(1), d = q(0);
    let f = [], y, b, C = a.orderKey, g = a.orderDefault;
    const _ = H(() => {
      for (let N of a.columns)
        if (N != null && N.fixed)
          return !0;
      return !1;
    }), w = H(() => a.selectionFixed || _.value), L = H(() => {
      let N = {
        ...a.searchData,
        current: v.value,
        size: u.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? N[g] = _l(C) : a.orderKeyFormat === "camelcase" && (N[g] = Aa(C))), N;
    }), B = H(() => {
      let N = a.columns.filter((z) => z && z.type !== "selection");
      if (a.selection || a.radio) {
        let z;
        a.radio ? z = {
          title: " ",
          width: 65,
          render: (ve, ye) => Ve(na, {
            modelValue: ye.row.btChecked
          })
        } : z = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (z.fixed = a.selectionFixed), N.unshift(z);
      }
      return N.forEach((z) => {
        z && (a.sortable === "custom" ? z.key && z.sortable !== !0 && z.sortable !== !1 && (z.sortable = "custom") : z.sortable = !1, z.align || (z.align = "center"));
      }), a.tableEmptyTdHandle && N.forEach((z) => {
        var ve;
        z != null && z.key && z.render === void 0 && (z.tooltip ? z.render = Cl(z.key, !0, (ve = Se()) == null ? void 0 : ve.fontSizeBase) : z.render = (ye, Te) => {
          let le = Te.row[z.key];
          return ye("span", le === "" || le === null || le === void 0 ? "--" : le);
        });
      }), N;
    }), V = H({
      get() {
        return c.value.map((N, z) => ({
          btKey: "bt-" + z,
          btChecked: !1,
          ...N
        }));
      },
      set(N) {
        c.value = N;
      }
    }), K = H(() => f.map((N) => N == null ? void 0 : N.id)), A = H(() => f.map((N) => N == null ? void 0 : N.btKey)), I = q();
    we(() => a.searchData, m, { deep: !0 }), we(
      () => a.orderDefault,
      (N) => {
        g = N;
      }
    ), we(
      () => a.orderKey,
      (N) => {
        C = N;
      }
    );
    function m() {
      v.value = 1, ze();
    }
    function R() {
      a.initData && ze();
    }
    function h(N) {
      c.value.unshift(ue(N)), Re(() => {
        var z, ve;
        (ve = (z = I.value) == null ? void 0 : z.clickCurrentRow) == null || ve.call(z, 0);
      }, 100);
    }
    function $(N, z, ve) {
      let ye = null;
      if (z ? ye = b : typeof z == "number" && (ye = z), ye !== null) {
        let Te = c.value[ye];
        for (let le in N)
          N.hasOwnProperty(le) && (Te[le] = N[le]);
        ve && Re(() => {
          var le, Ie;
          (Ie = (le = I.value) == null ? void 0 : le.clickCurrentRow) == null || Ie.call(le, ye);
        }, 10);
      }
    }
    function P(N) {
      c.value.splice(N, 1), Re(() => {
        var z, ve;
        (ve = (z = I.value) == null ? void 0 : z.clickCurrentRow) == null || ve.call(z, 0);
      }, 100);
    }
    function T(N, z) {
      var ve, ye;
      N.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((ye = (ve = I.value) == null ? void 0 : ve.toggleSelect) == null || ye.call(ve, z));
    }
    function U(N, z) {
      y = z.btKey, b = Number(z.btKey.split("-")[1]), a.radio && (c.value[b].btChecked = !0);
    }
    function M(N) {
      if (a.radio)
        for (let z of V.value)
          z != null && z.btKey && z.btKey !== y && (c.value[Number(z.btKey.split("-")[1])].btChecked = !1);
      f = N, e("on-selection-change", N);
    }
    function te() {
      return ue(f);
    }
    function he() {
      ze();
    }
    function W(N) {
      u.value = N, localStorage.setItem("btPageSize", String(N)), v.value === 1 && ze();
    }
    function se({ key: N, order: z }) {
      g === "normal" ? (C = a.orderKey, g = a.orderDefault) : (C = N, g = z), v.value = 1, me();
    }
    function ie(N) {
      var ve, ye, Te, le, Ie, je, qe, at;
      const z = N;
      if (typeof z == "number")
        E(), b = z, y = (ye = (ve = V.value) == null ? void 0 : ve[z]) == null ? void 0 : ye.btKey, (le = (Te = I.value) == null ? void 0 : Te.clickCurrentRow) == null || le.call(Te, z);
      else if (Array.isArray(z)) {
        if (a.radio || !a.selection)
          return;
        E();
        for (let Ue of z)
          (je = (Ie = I.value) == null ? void 0 : Ie.clickCurrentRow) == null || je.call(Ie, Ue);
      } else if (typeof z == "function")
        for (let Ue = 0; Ue < V.value.length; Ue++) {
          const kt = V.value[Ue];
          z(kt) && ((at = (qe = I.value) == null ? void 0 : qe.clickCurrentRow) == null || at.call(qe, Ue));
        }
    }
    function E() {
      var N, z;
      if (a.radio) {
        if (A.value.length > 0 && V.value.length > 0) {
          let ve = A.value[0].split("-")[1];
          V.value[ve].btChecked = !1;
        }
      } else
        (z = (N = I.value) == null ? void 0 : N.selectAll) == null || z.call(N, !1);
      f.length > 0 && (f = [], e("on-selection-change", [])), y = null, b = null;
    }
    function re() {
      c.value = [], E(), v.value = 1, d.value = 0;
    }
    function me(N, z, ve) {
      return new Promise((ye) => {
        N && (g = N), z && (C = z), a.url ? De[a.method](a.url, L.value, "", [], { spin: a.getDataLoading }).then((Te) => {
          var Ie, je;
          let le;
          ve || E(), typeof a.dataHandler == "function" ? le = a.dataHandler(Te) : le = Te, le.data ? (le.data.records || le.data.records === null ? c.value = le.data.records || [] : le.data.page ? (le.data.page.records || le.data.page.records === null) && (c.value = le.data.page.records || []) : le.data.data ? (le.data.data.records || le.data.data.records === null) && (c.value = le.data.data.records || []) : c.value = le.data, d.value = ((Ie = le.data.page) == null ? void 0 : Ie.total) || ((je = le.data.data) == null ? void 0 : je.total) || le.data.total || le.total || 0, d.value === 0 && v.value > 1 && c.value && c.value.length === 0 ? v.value = 1 : v.value > 1 && d.value <= (v.value - 1) * u.value && (v.value--, Fe(function() {
            me(N, z);
          })), e("on-data-change", le), ye(le)) : (console.warn("请求返回数据有误，无法使用"), re(), e("on-data-change", le));
        }).catch((Te) => {
          E(), re(), e("on-data-change", Te);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function ze(N, z, ve) {
      a.radio && (N || a.rowClickNum !== -1) ? me(z, ve, N).then(() => {
        c.value.length > 0 && Re(() => {
          var ye, Te, le, Ie;
          N ? (Te = (ye = I.value) == null ? void 0 : ye.clickCurrentRow) == null || Te.call(ye, b || 0) : (Ie = (le = I.value) == null ? void 0 : le.clickCurrentRow) == null || Ie.call(le, a.rowClickNum);
        }, 10);
      }) : me();
    }
    return Ne(R), i({
      selectedIds: K,
      addRow: h,
      setRowData: $,
      deleteRow: P,
      getSelected: te,
      selectRow: ie,
      clearSelect: E,
      clearTableData: re,
      getTableData: me,
      getDataAndClickRow: ze
    }), (N, z) => {
      const ve = X("Table"), ye = X("Page");
      return S(), D("div", vn, [
        fe(F("div", gn, [
          Le(N.$slots, "tableSetting"),
          Le(N.$slots, "topMsg"),
          Le(N.$slots, "topBtnGroup")
        ], 512), [
          [ge, a.showTopRow]
        ]),
        F("div", bn, [
          F("div", kn, [
            F("div", wn, [
              Y(ve, lt({
                ref_key: "tableRef",
                ref: I
              }, N.$attrs, {
                height: p(w) && Vn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !p(w), lightHeadO: a.lightHead },
                columns: p(B),
                data: p(V),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: U,
                onOnSelectionChange: M,
                onOnSortChange: se,
                onOnRowClick: T
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        fe(F("div", _n, [
          a.usePagePro ? (S(), Q(Il, {
            key: 0,
            modelValue: p(v),
            "onUpdate:modelValue": z[0] || (z[0] = (Te) => Ae(v) ? v.value = Te : null),
            total: p(d),
            showTotal: a.showTotal,
            pageSize: p(u),
            showSizer: a.showSizer,
            pageSizeOpts: p(s),
            size: a.pageComponentSize,
            onOnChange: he,
            onOnPageSizeChange: W
          }, null, 8, ["modelValue", "total", "showTotal", "pageSize", "showSizer", "pageSizeOpts", "size"])) : (S(), Q(ye, {
            key: 1,
            modelValue: p(v),
            "onUpdate:modelValue": z[1] || (z[1] = (Te) => Ae(v) ? v.value = Te : null),
            total: p(d),
            pageSize: p(u),
            pageSizeOpts: p(s),
            showSizer: a.showSizer,
            showTotal: a.showTotal,
            size: a.pageComponentSize,
            showElevator: !a.noElevator,
            onOnChange: he,
            onOnPageSizeChange: W
          }, null, 8, ["modelValue", "total", "pageSize", "pageSizeOpts", "showSizer", "showTotal", "size", "showElevator"]))
        ], 512), [
          [ge, !a.noPage]
        ])
      ], 512);
    };
  }
}), Pl = /* @__PURE__ */ pe({
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
    const o = i, e = t, n = H({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(d) {
        let f = {
          key: d,
          val: null
        };
        n.value && n.value !== d && (f.beforeKey = n.value), o("update:modelValue", f), o("on-change", f);
      }
    }), a = H({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(d) {
        o("update:modelValue", {
          key: n.value,
          val: d
        });
      }
    }), s = H(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = H(() => ({ width: e.itemWidth + "px" }));
    function u(d) {
      d != null && d.target && d.target.value !== void 0 && v({
        key: n.value,
        val: d.target.value
      });
    }
    const v = yl((d) => {
      o("on-change", d);
    }, 500);
    return (d, f) => {
      const y = X("Option"), b = X("Select"), C = X("Input");
      return S(), D("div", null, [
        Y(b, {
          modelValue: p(n),
          "onUpdate:modelValue": f[0] || (f[0] = (g) => Ae(n) ? n.value = g : null),
          style: ne(p(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: Z(() => [
            (S(!0), D(ke, null, _e(e.selectOption, (g, _) => (S(), Q(y, {
              value: g == null ? void 0 : g.val,
              label: g == null ? void 0 : g.label,
              key: "selectInputOp" + (g == null ? void 0 : g.value) + _,
              style: ne({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        Y(C, {
          modelValue: p(a),
          "onUpdate:modelValue": f[1] || (f[1] = (g) => Ae(a) ? a.value = g : null),
          placeholder: e.placeholder || p(O)("r.pInput"),
          style: ne(p(c)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: u
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
let Dt = { securityJsCode: "", key: "" };
function Cn({ securityJsCode: t, key: i }) {
  Dt.securityJsCode = t, Dt.key = i;
}
function Sn(t) {
  return Dt[t];
}
const Fl = /* @__PURE__ */ pe({
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
    const o = i, e = t, n = H({
      get() {
        let V;
        return e.modelValue ? e.modelValue.name ? V = ue(e.modelValue) : V = {
          ...e.modelValue,
          name: null
        } : V = {
          name: null
        }, V;
      },
      set(V) {
        o("update:modelValue", ue(V));
      }
    }), a = H(() => st(e.width) ? e.width + "px" : e.width), s = H(() => st(e.height) ? e.height + "px" : e.height ? e.height : st(e.width) ? e.width * 0.66 + "px" : "200px"), c = H(() => ({
      width: a.value,
      position: "relative"
    })), u = H(() => ({
      width: a.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    we(
      () => e.modelValue,
      (V) => {
        if (V && V.lng && V.lat) {
          if (!g || !_)
            return;
          L({
            lng: V.lng,
            lat: V.lat,
            name: V.name
          });
        }
      }
    );
    const v = "mapId" + Math.floor(Math.random() * 1e9), d = q(null), f = q(null);
    let y;
    function b() {
      f.value && f.value.clientHeight < 10 || !f.value ? Re(b, 300) : Re(w, 100);
    }
    let C, g, _;
    function w() {
      ll.load({
        key: Sn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((V) => {
        C = V, g = new C.Map(v).on("complete", () => {
          var A, I, m, R;
          _ = new C.Geocoder(), (A = e.modelValue) != null && A.lng && ((I = e.modelValue) != null && I.lat) && L({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const K = (R = (m = d.value) == null ? void 0 : m.$el) == null ? void 0 : R.children;
          K && K.length > 1 && new C.AutoComplete({
            input: K[1]
          }).on("select", (h) => {
            var $, P, T;
            ($ = h == null ? void 0 : h.poi) != null && $.name && ((P = h.poi.location) != null && P.lng && ((T = h.poi.location) != null && T.lat) ? (L({
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }), n.value = {
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }) : g.setCity(h.poi.name, () => {
              let U = g.getCenter();
              L({
                name: h.poi.name,
                lng: U.lng,
                lat: U.lat
              }), n.value = {
                name: h.poi.name,
                lng: U.lng,
                lat: U.lat
              };
            })), o("on-change", n.value);
          }), g.on("hotspotclick", (h) => {
            L({
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
    function L({ lng: V, lat: K, name: A }) {
      g.clearMap();
      let I = new C.LngLat(V, K), m = new C.Marker({
        map: g,
        position: I,
        draggable: !0
      });
      g.add(m), B(V, K), m.on("dragend", () => {
        let R = m.getPosition();
        n.value = {
          name: A || null,
          lng: R.lng,
          lat: R.lat
        }, B(V, K);
      }), m.on("click", (R) => {
        var h, $;
        y && y.open(g, ($ = (h = R == null ? void 0 : R.target) == null ? void 0 : h.getPosition) == null ? void 0 : $.call(h));
      }), g.setFitView();
    }
    function B(V, K) {
      _.getAddress([V, K], (A, I) => {
        A === "complete" && I.info === "OK" && I.regeocode && I.regeocode.formattedAddress ? y = new C.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + I.regeocode.formattedAddress + "</div>",
          offset: new C.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (y = null, console.warn("地图获取位置信息失败", I));
      });
    }
    return Ne(b), Yl(() => {
      var V;
      g && (g.destroy(), (V = ll) == null || V.reset(), g = null, _ = null, y = null);
    }), (V, K) => (S(), D("div", {
      style: ne(p(c)),
      class: "containerIKJ"
    }, [
      Y(p(oa), {
        ref_key: "mapInputRef",
        ref: d,
        modelValue: p(n).name,
        "onUpdate:modelValue": K[0] || (K[0] = (A) => p(n).name = A),
        class: Be({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || p(O)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      F("div", {
        style: ne(p(u)),
        ref_key: "mapRef",
        ref: f,
        id: v
      }, null, 4)
    ], 4));
  }
});
var pl;
const Rl = /* @__PURE__ */ pe({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (pl = window == null ? void 0 : window.g) != null && pl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
    const o = i, e = t, n = q([]), a = H({
      get() {
        let d = e.modelValue;
        return Array.isArray(d) ? ue(d) : st(d) ? At({
          group: n.value,
          condition: (f) => (f == null ? void 0 : f.value) === d,
          pathKey: "value"
        }) : Et(d) ? d.split(e.separator) : [];
      },
      set(d) {
        if (e.onlyLastVal)
          Oe(d) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", pt(d));
        else {
          if (rt(e.modelValue, d))
            return;
          o("update:modelValue", ue(d));
        }
      }
    });
    function s() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      De.get(e.url).then((d) => {
        var y;
        let f = null;
        (y = d == null ? void 0 : d.data) != null && y.records ? f = d.data.records : d != null && d.data ? f = d.data : d && (f = d), f ? (typeof e.optionFilter == "function" && j(e.optionFilter) === "Function" && (f = e.optionFilter(f)), n.value = c(f)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function c(d) {
      let f = [];
      for (let y of d) {
        let b = {
          value: y[e.optionVal],
          label: y[e.optionLabel]
        };
        y != null && y.children && !Oe(y.children) && (b.children = c(y.children)), f.push(b);
      }
      return f;
    }
    function u(d) {
      return e.onlyLastLabel ? pt(d) : d.join(e.separator);
    }
    function v(d, f) {
      let y = "";
      Oe(f) || (y = f.map((b) => b == null ? void 0 : b.label).join(e.separator)), o("on-label-change", y);
    }
    return Ne(s), (d, f) => {
      const y = X("Cascader");
      return S(), Q(y, {
        data: p(n),
        modelValue: p(a),
        "onUpdate:modelValue": f[0] || (f[0] = (b) => Ae(a) ? a.value = b : null),
        onOnChange: v,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": u,
        placeholder: e.placeholder || p(O)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), $l = /* @__PURE__ */ pe({
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
    const o = i, e = t, n = q(), a = H({
      get() {
        if (e.modelValue && (st(e.modelValue) || Et(e.modelValue))) {
          let c = String(e.modelValue).trim();
          if (/^\d*$/.test(c)) {
            let v = c.substring(0, 2) + "0000", d, f = s(c);
            return f.length < 7 ? d = c.substring(0, 4) + "00" : d = c.substring(0, 6), /^8\d+$/.test(c) ? [v, f] : [v, d, f];
          }
          return c.indexOf(e.separator) !== -1 ? c.split(e.separator) : [c];
        } else
          return Array.isArray(e.modelValue) ? ue(e.modelValue) : (n.value && (n.value.select = []), []);
      },
      set(c) {
        if (Oe(c))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let u = pt(c), v = "", d = "";
          if (u && (v = u.code), v && v.length < 12) {
            let f = [...v];
            for (; f.length < 12; )
              f.push(0);
            v = f.join("");
          }
          if (Array.isArray(c) && (d = c.map((f) => f == null ? void 0 : f.name).join(e.separator)), v) {
            if (v === e.modelValue)
              return;
            o("update:modelValue", v);
          }
          d && o("on-name-change", d);
        }
      }
    });
    function s(c) {
      let u = [...c];
      for (; u[u.length - 1] === "0"; )
        u.pop();
      return u.join("");
    }
    return (c, u) => (S(), Q(p(ua), lt(c.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: n,
      modelValue: p(a),
      "onUpdate:modelValue": u[0] || (u[0] = (v) => Ae(a) ? a.value = v : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(O)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Qe(t) {
  var s, c, u;
  const i = (...v) => Ee.apply(this, v), o = i("r.closePreview"), e = i("r.fullImg");
  let n = Bt(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${t}' alt='${e}' ><i class='ivu-icon ivu-icon-md-close' title='${o}' ></i></div>`, (c = (s = a.querySelector(".ivu-icon-md-close")) == null ? void 0 : s.addEventListener) == null || c.call(s, "click", function() {
    var d;
    let v = Bt(document.getElementsByTagName("body"));
    (d = v == null ? void 0 : v.removeChild) == null || d.call(v, a);
  }), (u = n == null ? void 0 : n.appendChild) == null || u.call(n, a);
}
const Tn = { class: "previewBoxM" }, Bn = { class: "imgLoading" }, xn = /* @__PURE__ */ F("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), On = [
  xn
], Ln = ["src", "alt"], An = { class: "deleteModal" }, In = { class: "previewBoxM" }, Pn = {
  key: 0,
  class: "previewImg"
}, Fn = ["src", "alt"], Rn = { class: "deleteModal" }, $n = { class: "customFileListM" }, Kn = {
  key: 0,
  class: "customFileListItem"
}, Mn = ["onClick", "title"], zn = { class: "btBoxJ" }, Dn = { class: "customFileListM" }, Un = {
  key: 0,
  class: "customFileListItem"
}, Nn = { class: "listLoading" }, En = /* @__PURE__ */ F("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Gn = [
  En
], Hn = ["onClick", "title"], Wn = { class: "btBoxJ" };
var ml;
const Kl = /* @__PURE__ */ pe({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (ml = window == null ? void 0 : window.g) != null && ml.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
    const o = i, e = t, n = ft([]), a = ft([]), s = H(() => !e.manualUpload && e.showImg && d.value ? "img" : e.manualUpload && e.showImg && d.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "list" : ""), c = H(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), u = H({
      get() {
        return e.manualUpload ? v.value : v.value.map((h) => ({ id: h }));
      },
      set(h) {
        e.manualUpload ? v.value = h || [] : v.value = (h == null ? void 0 : h.map(($) => $ == null ? void 0 : $.id)) || [];
      }
    }), v = H({
      get() {
        switch (typeof e.modelValue) {
          case "number":
            return [e.modelValue];
          case "string":
            return e.modelValue.indexOf("--") !== -1 ? [] : /^\d*$/.test(e.modelValue) ? [Number(e.modelValue)] : [e.modelValue];
          case "object":
            return Array.isArray(e.modelValue) ? e.modelValue.filter((h) => h !== "--") : j(e.modelValue) === "File" ? [e.modelValue] : [];
          default:
            return [];
        }
      },
      set(h) {
        if (e.length === 1) {
          let $ = Bt(h);
          o("update:modelValue", $ ?? null), o("on-change", $ ?? null);
        } else
          o("update:modelValue", ue(h)), o("on-change", ue(h));
      }
    }), d = H(() => {
      let h;
      if (e.manualUpload ? h = u.value : h = a.value, !h)
        return !1;
      for (let $ of h) {
        let P;
        if (e.manualUpload ? P = $ == null ? void 0 : $.type : P = $ == null ? void 0 : $.mimeType, !P || P && !(St(P) || P === "loading"))
          return !1;
      }
      return !0;
    });
    we(
      () => u.value,
      async (h) => {
        if (s.value === "localImg")
          h != null && h.length ? n.value = await y(h) : n.value = [];
        else if (h != null && h.length && s.value !== "localList") {
          let $ = ue(h);
          const P = ue(a.value);
          for (let T of $)
            if ((T == null ? void 0 : T.name) === void 0)
              if (T.id) {
                const U = xt(P, (M) => (M == null ? void 0 : M.id) === T.id);
                U ? (T.name = U.name, T.mimeType = U.mimeType) : (T.mimeType = "loading", De.get(e.url + "/" + T.id).then((M) => {
                  var te, he, W, se, ie, E;
                  T.name = ((W = (he = (te = M == null ? void 0 : M.data) == null ? void 0 : te.returnValue) == null ? void 0 : he[0]) == null ? void 0 : W.name) || O("r.file") + el(h, T), T.mimeType = ((E = (ie = (se = M == null ? void 0 : M.data) == null ? void 0 : se.returnValue) == null ? void 0 : ie[0]) == null ? void 0 : E.mimeType) || "unknown", Xl(a);
                }).catch(() => {
                  T.name = O("r.file") + el($, T);
                }));
              } else
                T.name = O("r.unknown");
          a.value = $;
        } else
          a.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function f(h) {
      return (h == null ? void 0 : h.name) || (h == null ? void 0 : h.split) && pt(h.split("/")) || h;
    }
    async function y(h) {
      let $ = [];
      for (let P of h) {
        let T = await Ct(P);
        $.push(T);
      }
      return $;
    }
    function b(h) {
      if (!e.disabled) {
        let $ = u.value;
        $ == null || $.splice(h, 1), u.value = $;
      }
    }
    function C(h) {
      h != null && h.id && window.open(e.url + "/" + h.id + "/download");
    }
    function g(h) {
      return e.manualUpload ? (h == null ? void 0 : h.type) && St(h.type) : (h == null ? void 0 : h.id) && h.mimeType && St(h.mimeType);
    }
    function _(h) {
      if (e.manualUpload) {
        if (!h)
          return;
        Ct(h).then(($) => {
          Qe($);
        });
      } else
        h != null && h.id && Qe(e.url + "/" + h.id + "/download?preview=true");
    }
    function w(h) {
      j(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : j(h) === "File" && Ct(h).then(($) => {
        Ia(h.name, $);
      });
    }
    function L(h) {
      var $, P;
      if (e.manualUpload) {
        if (h) {
          let T = wl(h.name);
          if (($ = e.format) != null && $.length && e.format.indexOf(T) < 0)
            return $e(
              O("r.wrongFileType"),
              O("r.supportType") + (((P = e.format) == null ? void 0 : P.length) && String(e.format) || O("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && h.size > e.maxSize * 1024)
            return $e(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let U = u.value;
          U == null || U.push(h), u.value = U;
        }
        return !1;
      } else
        return !0;
    }
    function B(h) {
      console.warn(h), $e(O("r.uploadError"), "", "error");
    }
    function V(h, $, P) {
      var T, U, M, te, he, W;
      if ((h == null ? void 0 : h.code) === 0) {
        let se = u.value;
        $.id = (U = (T = h.data) == null ? void 0 : T[0]) == null ? void 0 : U.id, $.name = (te = (M = h.data) == null ? void 0 : M[0]) == null ? void 0 : te.name, $.mimeType = (W = (he = h.data) == null ? void 0 : he[0]) == null ? void 0 : W.mimeType, se == null || se.push($), u.value = se;
      } else
        $e(O("r.uploadFail"), (h == null ? void 0 : h.message) || "", "error");
    }
    function K() {
      $e(O("r.fileIsBig"), O("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function A() {
      var h;
      $e(
        O("r.wrongFileType"),
        O("r.supportType") + (((h = e.format) == null ? void 0 : h.length) && String(e.format) || O("r.none")),
        "warning"
      );
    }
    function I(h) {
      let $ = h == null ? void 0 : h.id, P = h == null ? void 0 : h.mimeType;
      $ && (j(P) === "String" && P.indexOf("image") > -1 ? Qe(e.url + "/" + $ + "/download?preview=true") : window.open(e.url + "/" + $ + "/download?preview=true"));
    }
    function m(h) {
      var P, T, U;
      let $ = (U = (T = (P = h == null ? void 0 : h.response) == null ? void 0 : P.data) == null ? void 0 : T[0]) == null ? void 0 : U.id;
      R(null, $);
    }
    function R(h, $) {
      if (!(!$ && $ !== 0) && !e.disabled && v.value.indexOf($) !== -1) {
        const P = ue(v.value);
        let T = u.value;
        T == null || T.splice(P.indexOf($), 1), u.value = T;
      }
    }
    return (h, $) => {
      var M, te, he, W, se, ie;
      const P = X("Button"), T = X("Upload"), U = X("Icon");
      return S(), D("div", null, [
        Y(T, {
          name: "files",
          action: p(c),
          "before-upload": L,
          "on-error": B,
          "on-success": V,
          "on-exceeded-size": K,
          "on-preview": I,
          "on-remove": m,
          "on-format-error": A,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((M = p(u)) == null ? void 0 : M.length) && ((te = p(u)) == null ? void 0 : te.length) >= e.length || !!e.disabled
        }, {
          default: Z(() => {
            var E, re;
            return [
              Y(P, {
                icon: "ios-cloud-upload-outline",
                class: Be({
                  disabledR: e.length && ((E = p(u)) == null ? void 0 : E.length) && ((re = p(u)) == null ? void 0 : re.length) >= e.length || !!e.disabled
                })
              }, {
                default: Z(() => [
                  be(G(p(O)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        fe(F("div", Tn, [
          (S(!0), D(ke, null, _e(p(a), (E) => (S(), D(ke, {
            key: E == null ? void 0 : E.id
          }, [
            !e.manualUpload && E && E.id !== null ? (S(), D("div", {
              key: 0,
              class: Be(["previewImg", { previewLoading: E.mimeType === "loading" }])
            }, [
              fe(F("div", Bn, On, 512), [
                [ge, E.mimeType === "loading"]
              ]),
              fe(F("img", {
                src: h.url + "/" + E.id + "/download?preview=true",
                alt: E.name
              }, null, 8, Ln), [
                [ge, E.mimeType !== "loading"]
              ]),
              fe(F("div", An, [
                Y(U, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(O)("r.fView"),
                  onClick: (re) => p(Qe)(e.url + "/" + E.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                Y(U, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (re) => R(re, E.id),
                  title: p(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, E.mimeType !== "loading"]
              ])
            ], 2)) : de("", !0)
          ], 64))), 128))
        ], 512), [
          [ge, p(s) === "img" && ((he = p(a)) == null ? void 0 : he.length)]
        ]),
        fe(F("div", In, [
          (S(!0), D(ke, null, _e(p(n), (E, re) => (S(), D(ke, {
            key: "manualImg" + re
          }, [
            e.manualUpload && E ? (S(), D("div", Pn, [
              F("img", {
                src: E,
                alt: "manualImg" + re
              }, null, 8, Fn),
              F("div", Rn, [
                Y(U, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (me) => p(Qe)(E),
                  title: p(O)("r.fView")
                }, null, 8, ["onClick", "title"]),
                Y(U, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (me) => b(re),
                  title: p(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : de("", !0)
          ], 64))), 128))
        ], 512), [
          [ge, p(s) === "localImg" && ((W = p(n)) == null ? void 0 : W.length)]
        ]),
        fe(F("div", $n, [
          (S(!0), D(ke, null, _e(p(u), (E, re) => (S(), D(ke, {
            key: "manualItem" + re
          }, [
            e.manualUpload && E ? (S(), D("p", Kn, [
              E.name ? (S(), Q(U, {
                key: 0,
                type: p(ol)(E.name)
              }, null, 8, ["type"])) : de("", !0),
              F("span", {
                class: Be(["upNameT", { previewName: g(E) }]),
                onClick: (me) => w(E),
                title: p(O)("r.download")
              }, G(f(E)), 11, Mn),
              F("span", zn, [
                g(E) ? (S(), Q(U, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (me) => _(E),
                  title: p(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : de("", !0),
                Y(U, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (me) => b(re),
                  title: p(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : de("", !0)
          ], 64))), 128))
        ], 512), [
          [ge, p(s) === "localList" && ((se = p(u)) == null ? void 0 : se.length)]
        ]),
        fe(F("div", Dn, [
          (S(!0), D(ke, null, _e(p(a), (E, re) => (S(), D(ke, {
            key: "defaultItem" + re
          }, [
            !e.manualUpload && E ? (S(), D("div", Un, [
              fe(F("div", Nn, Gn, 512), [
                [ge, E.mimeType === "loading"]
              ]),
              fe(Y(U, {
                type: p(ol)(E.name)
              }, null, 8, ["type"]), [
                [ge, E.mimeType !== "loading"]
              ]),
              fe(F("span", {
                class: Be(["upNameT", { previewName: g(E) }]),
                onClick: (me) => C(E),
                title: p(O)("r.download")
              }, G(E.name || p(O)("r.file") + (re + 1)), 11, Hn), [
                [ge, E.mimeType !== "loading"]
              ]),
              fe(F("span", Wn, [
                g(E) ? (S(), Q(U, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (me) => _(E),
                  title: p(O)("r.fView")
                }, null, 8, ["onClick", "title"])) : de("", !0),
                Y(U, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (me) => b(re),
                  title: p(O)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ge, E.mimeType !== "loading"]
              ])
            ])) : de("", !0)
          ], 64))), 128))
        ], 512), [
          [ge, p(s) === "list" && ((ie = p(a)) == null ? void 0 : ie.length)]
        ])
      ]);
    };
  }
}), jn = /* @__PURE__ */ F("div", { class: "bRoot" }, null, -1), Ml = /* @__PURE__ */ pe({
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
    const o = i, e = t, n = q(!1), a = q(!1), s = q(!1), c = H({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(_) {
        o("update:modelValue", [_, u.value]), o("on-change", [_, u.value]);
      }
    }), u = H({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(_) {
        o("update:modelValue", [c.value, _]), o("on-change", [c.value, _]);
      }
    }), v = H(
      () => (c.value || "") + ((c.value || u.value) && " - " || "") + (u.value || "")
    ), d = q();
    Ne(() => {
      d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        s.value = !0;
      }), d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        s.value = !1;
      }), d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (_) => {
        var w;
        !e.disabled && (c.value || u.value) && ((w = _ == null ? void 0 : _.stopPropagation) == null || w.call(_), C());
      });
    });
    function f() {
      e.disabled || (n.value = !0);
    }
    function y(_) {
      c.value = _, n.value = !1, a.value = !0;
    }
    function b(_) {
      u.value = _, a.value = !1;
    }
    function C() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function g() {
      n.value = !1, a.value = !1, c.value && u.value === null && (c.value = null);
    }
    return (_, w) => {
      const L = X("DatePicker"), B = X("Icon"), V = X("Input");
      return S(), D("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: d
      }, [
        Y(L, {
          open: p(a),
          modelValue: p(u),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: b,
          onOnClickoutside: g
        }, {
          default: Z(() => [
            jn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        Y(L, {
          open: p(n),
          modelValue: p(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: y,
          onOnClickoutside: g
        }, {
          default: Z(() => [
            F("div", { onClick: f }, [
              Y(V, {
                class: "aRoot",
                modelValue: p(v),
                "onUpdate:modelValue": w[0] || (w[0] = (K) => Ae(v) ? v.value = K : null),
                readonly: "",
                placeholder: e.placeholder || p(O)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: Z(() => [
                  Y(B, {
                    type: p(s) && (p(c) || p(u)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), qn = { class: "editor-pro-root" }, zl = /* @__PURE__ */ pe({
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
    const o = i, e = t, n = ft(), a = H({
      get() {
        return e.modelValue;
      },
      set(d) {
        o("update:modelValue", d), o("on-change", d);
      }
    }), s = H(
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
    ), c = H(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(d, f) {
                let y = new FormData();
                y.append("files", d);
                const b = d.name, C = e.imgUploadUrl ?? "/node-serve/file";
                De.post(C, y, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((g) => {
                  if (g && g.data)
                    if (Array.isArray(g.data))
                      for (let _ of g.data) {
                        const w = C + "/" + (_ == null ? void 0 : _.id) + "/download";
                        f(w, b, w);
                      }
                    else {
                      const _ = C + "/" + g.data.id + "/download";
                      f(_, b, _);
                    }
                }).catch(() => {
                  $e(O("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(d, f) {
                let y = new FormData();
                y.append("files", d);
                const b = e.videoUploadUrl ?? "/node-serve/file";
                De.post(b, y, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((C) => {
                  if (C && C.data)
                    if (Array.isArray(C.data))
                      for (let g of C.data) {
                        const _ = b + "/" + (g == null ? void 0 : g.id) + "/download";
                        f(_);
                      }
                    else {
                      const g = b + "/" + C.data.id + "/download";
                      f(g);
                    }
                }).catch(() => {
                  $e(O("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), u = H(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function v(d) {
      n.value = d;
    }
    return we(
      () => e.disabled,
      (d) => {
        d ? n.value.disable() : n.value.enable();
      }
    ), hl(() => {
      n.value && n.value.destroy();
    }), (d, f) => (S(), D("div", qn, [
      fe(Y(p(da), {
        class: "editor-pro-toolbar",
        editor: p(n),
        defaultConfig: p(s),
        mode: d.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ge, !d.disabled]
      ]),
      Y(p(ca), {
        class: "editor-pro-editor",
        modelValue: p(a),
        "onUpdate:modelValue": f[0] || (f[0] = (y) => Ae(a) ? a.value = y : null),
        defaultConfig: p(c),
        mode: d.mode,
        onOnCreated: v,
        style: ne(p(u))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Jn = {
  key: 19,
  class: "formInfoTxtXN"
}, Yn = {
  key: 20,
  class: "formTitleTxtXN"
}, ul = /* @__PURE__ */ pe({
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
    const o = i, e = t;
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
    function a(d, f) {
      o("item-change", {
        e: d,
        root: f
      });
    }
    function s(d, f) {
      o("re-validate", {
        e: d,
        root: f
      });
    }
    function c(d) {
      o("select-input-change", d);
    }
    function u(d, f) {
      o("al-name-change", {
        name: d,
        root: f
      });
    }
    function v(d, f) {
      o("async-label-change", {
        label: d,
        root: f
      });
    }
    return (d, f) => {
      const y = X("InputNumber"), b = X("Input"), C = X("Option"), g = X("Select"), _ = X("Radio"), w = X("Icon"), L = X("RadioGroup"), B = X("Checkbox"), V = X("CheckboxGroup"), K = X("DatePicker"), A = X("TimePicker"), I = X("FormItem");
      return e.item ? (S(), Q(I, {
        key: 0,
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Be(["relativeBox", n(e.item)])
      }, {
        default: Z(() => [
          e.item.type === "txt" ? (S(), D("div", {
            key: 0,
            style: ne([e.itemStyle, { display: "inline-block" }]),
            class: Be({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, G(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), Q(y, {
            key: 1,
            style: ne(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[0] || (f[0] = (m) => e.tempKeys[e.item.tempKey] = m),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: f[1] || (f[1] = (m) => a(m, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), Q(b, {
            key: 2,
            style: ne(d.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[2] || (f[2] = (m) => e.tempKeys[e.item.tempKey] = m),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: f[3] || (f[3] = (m) => a(m, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, tt({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: Z(() => [
                Le(d.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: Z(() => [
                F("span", null, G(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: Z(() => [
                F("span", null, G(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), Q(g, {
            key: 3,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[4] || (f[4] = (m) => d.tempKeys[e.item.tempKey] = m),
            style: ne(d.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(O)("r.pSelect"),
            onOnChange: f[5] || (f[5] = (m) => a(m, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: Z(() => [
              (S(!0), D(ke, null, _e(e.item.options, (m, R) => (S(), Q(C, {
                value: m.val,
                label: m.label || m.val,
                key: "option-" + e.item.key + R,
                disabled: !!m.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), Q(Pl, {
            key: 4,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[6] || (f[6] = (m) => d.tempKeys[e.item.tempKey] = m),
            "label-width": d.labelWidth,
            "item-width": d.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: c
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), Q($l, {
            key: 5,
            style: ne(d.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[7] || (f[7] = (m) => e.valGroup[e.item.key] = m),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(O)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: f[8] || (f[8] = (m) => u(m, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), Q(Rl, {
            key: 6,
            style: ne(d.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[9] || (f[9] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || d.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(O)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: f[10] || (f[10] = (m) => v(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), Q(_, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[11] || (f[11] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: f[12] || (f[12] = (m) => a(m, e.item))
          }, {
            default: Z(() => [
              be(G(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), Q(L, {
            key: 8,
            style: ne(d.itemStyle),
            onOnChange: f[13] || (f[13] = (m) => s(m, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[14] || (f[14] = (m) => d.tempKeys[e.item.tempKey] = m)
          }, {
            default: Z(() => [
              (S(!0), D(ke, null, _e(e.item.options, (m) => (S(), Q(_, {
                key: "radioItem" + m.val,
                label: m.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: Z(() => [
                  m.icon && !e.item.buttonType ? (S(), Q(w, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : de("", !0),
                  F("span", null, G(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (S(), Q(B, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[15] || (f[15] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled,
            onOnChange: f[16] || (f[16] = (m) => a(m, e.item))
          }, {
            default: Z(() => [
              be(G(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), Q(V, {
            key: 10,
            style: ne(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[17] || (f[17] = (m) => d.tempKeys[e.item.tempKey] = m),
            onOnChange: f[18] || (f[18] = (m) => s(m, e.item))
          }, {
            default: Z(() => [
              (S(!0), D(ke, null, _e(e.item.options, (m) => (S(), Q(B, {
                key: "checkItem" + m.val,
                label: m.val,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: Z(() => [
                  m.icon ? (S(), Q(w, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : de("", !0),
                  F("span", null, G(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), Q(b, {
            key: 11,
            type: "textarea",
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[19] || (f[19] = (m) => d.tempKeys[e.item.tempKey] = m),
            autosize: e.item.autosize || { minRows: 2 },
            style: ne(d.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: f[20] || (f[20] = (m) => a(m, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), Q(Kl, {
            key: 12,
            style: ne(d.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[21] || (f[21] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || d.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: f[22] || (f[22] = (m) => s(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), Q(K, {
            key: 13,
            style: ne(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[23] || (f[23] = (m) => d.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(O)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: f[24] || (f[24] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (S(), Q(A, {
            key: 14,
            style: ne(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[25] || (f[25] = (m) => d.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(O)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: f[26] || (f[26] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), Q(Ml, {
            key: 15,
            style: ne(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[27] || (f[27] = (m) => d.tempKeys[e.item.tempKey] = m),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(O)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: f[28] || (f[28] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), Q(zl, {
            key: 16,
            class: "inlineBlock",
            style: ne(d.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": f[29] || (f[29] = (m) => e.valGroup[e.item.key] = m),
            placeholder: e.item.placeholder || p(O)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: f[30] || (f[30] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), Q(Fl, {
            key: 17,
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": f[31] || (f[31] = (m) => d.tempKeys[e.item.tempKey] = m),
            style: ne(d.itemStyle),
            placeholder: e.item.placeholder || p(O)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: f[32] || (f[32] = (m) => a(m, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), D("div", {
            key: 18,
            class: "inlineBlock",
            style: ne(d.itemStyle)
          }, [
            Le(d.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : de("", !0),
          e.item.info ? (S(), D("div", Jn, G(e.item.info), 1)) : de("", !0),
          e.item.title ? (S(), D("div", Yn, G(e.item.title), 1)) : de("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : de("", !0);
    };
  }
}), Xn = /* @__PURE__ */ F("input", { type: "text" }, null, -1), Qn = { class: "inlineBlock" }, bt = /* @__PURE__ */ pe({
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
  setup(t, { expose: i, emit: o }) {
    var Qt, Zt;
    const e = o, n = t, a = q(null), s = q({}), c = q([]), u = q({});
    let v = [];
    const d = ((Qt = window == null ? void 0 : window.g) == null ? void 0 : Qt.mgrURL) ?? "";
    let f = [], y = [];
    const b = q(!1), C = q(Math.random() * 1e8 + 1e3), g = (Zt = window == null ? void 0 : window.g) != null && Zt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let _ = !1;
    const w = H(() => Array.isArray(n.formData.length ? n.formData[0] : !1)), L = H(
      () => n.inline ? {
        width: n.itemWidth + n.labelWidth + "px"
      } : {}
    ), B = H(
      () => n.inline ? {
        width: "100%"
      } : { width: n.contentWidth }
    ), V = H(() => {
      let r = ue(n.formRules);
      for (let l in r)
        if (r.hasOwnProperty(l))
          if (Array.isArray(r[l]))
            for (let x of r[l])
              x && x && !(x.message || x.validator) && (x.message = O("r.required"));
          else
            j(r[l]) === "Object" && (r[l].message || r[l].validator || (r[l].message = O("r.required")));
      return r;
    }), K = H(() => {
      let r = [];
      if (w.value)
        for (let l of c.value)
          m(l, r);
      else
        m(c.value, r);
      return r.concat(f, y);
    }), A = H(() => {
      let r = [];
      if (w.value)
        for (let l of c.value)
          R(l, r);
      else
        R(c.value, r);
      return r;
    });
    function I(r) {
      return r.filter((l) => l == null ? void 0 : l.slotName);
    }
    function m(r, l) {
      for (let x of r)
        if (x.showing === !0 && x.key && x.type !== "selectInput" && (l.push(x.key), x.key2 && l.push(x.key2), x.collectLabel)) {
          if (!Array.isArray(x.collectLabel) && x.collectLabel.key)
            l.push(x.collectLabel.key);
          else if (Array.isArray(x.collectLabel))
            for (let k of x.collectLabel)
              k.key && l.push(k.key);
        }
    }
    function R(r, l) {
      for (let x of r)
        x.showing === !0 && x.key && x.type !== "selectInput" && l.push(x.key);
    }
    function h() {
      return new Promise((r) => {
        T(), P().then(() => {
          e("on-reset"), r(!0);
        });
      });
    }
    function $() {
      return new Promise((r) => {
        for (let l of v)
          l();
        v = [], u.value = {}, z(), re(), P().then(() => {
          e("on-re-render"), r(!0);
        });
      });
    }
    function P() {
      return new Promise((r) => {
        C.value = Math.floor(Math.random() * 1e8 + 1e3), Fe(function() {
          r(!0);
        });
      });
    }
    function T() {
      let r = te();
      for (let l in s.value)
        if (s.value.hasOwnProperty(l))
          if (Ce(r[l]))
            s.value[l] = r[l];
          else if (Array.isArray(s.value[l]))
            s.value[l] = [];
          else if (j(s.value[l]) === "Boolean")
            s.value[l] = !1;
          else {
            const x = Xe(n.formData, (k) => (k == null ? void 0 : k.key) === l);
            x && (x.type === "editor" || x.type === "editorPro") ? s.value[l] = "" : s.value[l] = null;
          }
      U(r);
    }
    function U(r) {
      for (let l in u.value)
        u.value.hasOwnProperty(l) && (Ce(r[l]) ? u.value[l] = r[l] : Array.isArray(u.value[l]) ? u.value[l] = [] : j(u.value[l]) === "Object" && u.value[l].hasOwnProperty("key") && u.value[l].hasOwnProperty("val") ? u.value[l].val = null : u.value[l] = null);
    }
    function M(r) {
      let l = te();
      Ce(l[r]) ? u.value[r] = l[r] : Array.isArray(u.value[r]) ? u.value[r] = [] : u.value[r] = null;
    }
    function te() {
      let r = {};
      if (w.value)
        for (let l of c.value)
          he(l, r);
      else
        he(c.value, r);
      return r;
    }
    function he(r, l) {
      for (let x of r)
        x.tempKey && Ce(x.defaultVal) && E(x, l), x.key && Ce(x.defaultVal) && (l[x.key] = x.defaultVal), x.key2 && Ce(x.defaultVal2) && (l[x.key2] = x.defaultVal2);
    }
    function W(r) {
      if (r.show) {
        if (j(r.show) === "Object")
          return ie(r, se(r.show));
        if (Array.isArray(r.show))
          if (r.showOr) {
            for (let l of r.show)
              if (se(l) === !0)
                return ie(r, !0);
            return ie(r, !1);
          } else {
            for (let l of r.show)
              if (se(l) === !1)
                return ie(r, !1);
            return ie(r, !0);
          }
        else if (typeof r.show == "function")
          return ie(r, r.show(s.value));
      } else
        r.showing || (r.showing = !0);
      return !0;
    }
    function se(r) {
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
    function ie(r, l) {
      return !r.showing && l && r.key ? (r.showing = l, r.defaultVal !== void 0 && (r.tempKey ? (u.value[r.tempKey] === null || u.value[r.tempKey] === void 0 || (j(u.value[r.tempKey]) === "Object" || Array.isArray(u.value[r.tempKey])) && Oe(u.value[r.tempKey])) && E(r, u.value) : (s.value[r.key] === null || s.value[r.key] === void 0) && (s.value[r.key] = r.defaultVal), r.key2 && r.deafultVal2 !== void 0 && (s.value[r.key2] === null || s.value[r.key2] === void 0) && r.type !== "inputMap" && (s.value[r.key2] = r.defaultVal2)), r.tempKey && ye(u.value[r.tempKey], r)) : r.showing = l, l;
    }
    function E(r, l) {
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
    function re() {
      let r = ue(n.formData);
      if (w.value)
        for (let l of r)
          me(l);
      else
        me(r);
      c.value = r;
    }
    function me(r) {
      for (let l of r)
        switch (l.type) {
          case "selectInput":
            const x = "selectInput" + Math.floor(Math.random() * 1e8);
            l.tempKey = x, u.value[x] = {
              key: l.key || null,
              val: l.defaultVal || null
            }, v.push(
              we(
                () => u.value[x],
                (J) => {
                  ye(J, l);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const k = "inputMap" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = k, l.key3 ? u.value[k] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2,
              name: l.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : u.value[k] = l.defaultVal !== void 0 && l.defaultVal2 !== void 0 ? {
              lng: l.defaultVal,
              lat: l.defaultVal2
            } : {
              lng: null,
              lat: null
            }, v.push(
              we(
                () => u.value[k],
                (J) => {
                  ye(J, l);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const ce = "inputT" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = ce, u.value[ce] = l.defaultVal !== void 0 ? l.defaultVal : null, v.push(
              we(
                () => u.value[ce],
                (J) => {
                  ye(J, l);
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
                  let J = !0;
                  for (let ee of l.changeOption)
                    if (!ee.valKey || !ee.key) {
                      J = !1;
                      break;
                    }
                  J ? v.push(
                    we(
                      () => {
                        let ee = "";
                        if (Array.isArray(l.changeOption))
                          for (let xe of l.changeOption) {
                            let Me = s.value[xe.valKey];
                            if (Me || Me === 0 || Me === !1)
                              ee += "&" + xe.key + "=" + Me;
                            else if (!xe.notRequired)
                              return !1;
                          }
                        return ee;
                      },
                      (ee) => {
                        let xe = ue(u.value[l.tempKey]);
                        if (u.value[l.tempKey] = null, ee && l.optionUrl) {
                          let Me = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          ze((Me + ee).replace(/\?&/, "?"), l, xe);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), Ce(xe) && N(xe, l);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (l.options = [], l.localOption && (l.options = [...l.localOption]));
                } else
                  typeof l.changeOption == "object" ? l.changeOption.valKey && l.changeOption.key && v.push(
                    we(
                      () => typeof l.changeOption == "object" && !Array.isArray(l.changeOption) ? s.value[l.changeOption.valKey] : !1,
                      (J) => {
                        let ee = ue(u.value[l.tempKey]);
                        if (u.value[l.tempKey] = null, (J || J === 0 || J === !1) && l.optionUrl && typeof l.changeOption == "object" && !Array.isArray(l.changeOption)) {
                          let xe = l.optionUrl.indexOf("?") !== -1 ? l.optionUrl : l.optionUrl + "?";
                          ze((xe + "&" + l.changeOption.key + "=" + J).replace(/\?&/, "?"), l, ee);
                        } else
                          l.options = [], l.localOption && (l.options = [...l.localOption]), Ce(ee) && N(ee, l);
                      },
                      { immediate: !0 }
                    )
                  ) : j(l.changeOption) === "Boolean" && v.push(
                    we(
                      () => {
                        const J = Xe(n.formData, (ee) => (ee == null ? void 0 : ee.key) === l.key).optionUrl;
                        return Ae(J) ? J.value : J;
                      },
                      (J) => {
                        let ee = ue(u.value[l.tempKey]);
                        u.value[l.tempKey] = null, J ? ze(J, l, ee) : (l.options = [], l.localOption && (l.options = [...l.localOption]), Ce(ee) && N(ee, l));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                l.optionUrl && ze(l.optionUrl, l);
            else
              j(l.borrowOption) === "String" && (l.options = Xe(c.value, (J) => (J == null ? void 0 : J.key) === l.borrowOption).options);
            const oe = "opEle" + Math.floor(Math.random() * 1e8);
            l.key && (l.tempKey = oe, l.type === "select" && l.multiple || l.type === "checkboxGroup" ? u.value[oe] = l.defaultVal !== void 0 ? l.defaultVal : [] : l.booleanVal ? u.value[oe] = l.defaultVal !== void 0 ? l.defaultVal ? 1 : 0 : null : u.value[oe] = l.defaultVal !== void 0 ? l.defaultVal : null, v.push(
              we(
                () => u.value[oe],
                (J) => {
                  ye(J, l);
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
            const ae = "date" + Math.floor(Math.random() * 1e8);
            l.tempKey = ae, l.dateType === "date" || l.dateType === "datetime" || l.dateType === "time" || l.dateType === "year" || l.dateType === "month" ? u.value[ae] = l.defaultVal || null : (l.dateType === "daterange" || l.dateType === "datetimerange" || l.dateType === "timerange" || l.type === "monthRange") && (u.value[ae] = l.defaultVal && l.defaultVal2 && [l.defaultVal, l.defaultVal2] || []), v.push(
              we(
                () => u.value[ae],
                (J) => {
                  ye(J, l);
                }
              )
            );
            break;
        }
    }
    function ze(r, l, x) {
      De.get(r).then((k) => {
        var oe;
        if (!l.options)
          return;
        let ce = ((oe = k == null ? void 0 : k.data) == null ? void 0 : oe.records) || (k == null ? void 0 : k.data) || k || [];
        Array.isArray(ce) ? (l.optionFilter && j(l.optionFilter) === "Function" && (ce = l.optionFilter(ce)), l.optionLabel && l.optionVal ? (l.options.length = 0, l.options.push(
          ...ce.map((ae) => {
            let J;
            if (Array.isArray(l.optionLabel)) {
              let ee = "";
              l.optionLabel.forEach((xe, Me) => {
                let _t = String(ae[xe]);
                Me === 1 ? ee += "（" + _t : Me > 1 ? ee += "、" + _t : ee += _t;
              }), J = {
                label: ee + "）",
                val: l.optionVal && ae[l.optionVal]
              };
            } else
              J = {
                label: l.optionLabel && ae[l.optionLabel],
                val: l.optionVal && ae[l.optionVal]
              };
            if (l.collectLabel)
              if (Array.isArray(l.collectLabel))
                for (let ee of l.collectLabel)
                  ee.valKey && ee.valKey !== "label" && (J[ee.valKey] = ae[ee.valKey]);
              else
                l.collectLabel.valKey && l.collectLabel.valKey !== "label" && (J[l.collectLabel.valKey] = ae[l.collectLabel.valKey]);
            if (J.val !== null && J.val !== void 0)
              return J;
          })
        )) : (l.options.length = 0, l.options.push(...ce))) : l.options.length = 0, l.localOption && l.options.unshift(...l.localOption), Ce(x) && N(x, l), l.disableOptionByOthers && (j(l.disableOptionByOthers) === "String" ? v.push(
          we(
            () => s.value[l.disableOptionByOthers],
            (ae) => {
              if (M(l.tempKey), !!l.options) {
                for (let J of l.options)
                  J.disabled && (J.disabled = !1);
                if (ae || ae === 0 || ae === !1)
                  for (let J of l.options)
                    J.val === ae && (J.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(l.disableOptionByOthers) && v.push(
          we(
            () => l.disableOptionByOthers.filter((ae) => ae).map((ae) => s.value[ae]),
            (ae) => {
              if (M(l.tempKey), !!l.options) {
                for (let J of l.options)
                  J.disabled && (J.disabled = !1);
                if (ae) {
                  for (let J of l.options)
                    for (let ee = 0; ee < ae.length; ee++)
                      if (J.val === ae[ee]) {
                        J.disabled = !0, ae.splice(ee, 1);
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
    function N(r, l) {
      Array.isArray(l.options) && vl(l.options, { val: r }) !== -1 && (u.value[l.tempKey] = r);
    }
    function z() {
      if (s.value = {}, w.value)
        for (let r of n.formData)
          ve(r);
      else
        ve(n.formData);
    }
    function ve(r) {
      for (let l of r)
        l.key && (l.type === "checkboxGroup" || l.type === "select" && l.multiple ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : [] : l.type === "editor" || l.type === "editorPro" ? s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : "" : (s.value[l.key] = l.defaultVal !== void 0 && l.show === void 0 ? l.defaultVal : null, l.key2 && (s.value[l.key2] = l.defaultVal2 !== void 0 && l.show === void 0 ? l.defaultVal2 : null)));
    }
    function ye(r, l) {
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
              let ce = /^-?\d+(.\d+)?$/;
              l.numberVal && ce.test(r) ? s.value[l.key] = Number(r) : s.value[l.key] = r;
            } else
              s.value[l.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!l.key)
              return;
            if (l.booleanVal && !l.multiple ? s.value[l.key] = r === void 0 || r === "" || r === null ? null : !!r : l.multiple || l.type === "checkboxGroup" ? s.value[l.key] = Object.assign([], r) : s.value[l.key] = r, l.collectLabel) {
              const ce = Te(l, r);
              if (Array.isArray(l.collectLabel)) {
                for (let oe of l.collectLabel)
                  if (oe != null && oe.key && oe.valKey) {
                    const ae = le(oe.key);
                    let J = null;
                    Array.isArray(ce) ? (J = ce.map((xe) => xe[oe.valKey]), s.value[oe.key] = J, ae && (u.value[ae] = J)) : (ce && Ce(ce[oe.valKey]) && (J = ce[oe.valKey]), s.value[oe.key] = J, ae && (u.value[ae] = J));
                    let ee = Xe(c.value, (xe) => (xe == null ? void 0 : xe.key) === oe.key);
                    ee && ee.tempKey && (u.value[ee.tempKey] = s.value[oe.key]);
                  }
              } else if (typeof l.collectLabel == "object" && l.collectLabel.key && l.collectLabel.valKey) {
                const oe = le(l.collectLabel.key);
                let ae = null;
                Array.isArray(ce) ? (ae = ce.map(
                  (ee) => l.collectLabel && !Array.isArray(l.collectLabel) && ee[l.collectLabel.valKey]
                ), s.value[l.collectLabel.key] = ae, oe && (u.value[oe] = ae)) : (ce && Ce(ce[l.collectLabel.valKey]) && (ae = ce[l.collectLabel.valKey]), s.value[l.collectLabel.key] = ae, oe && (u.value[oe] = ae));
                let J = Xe(
                  c.value,
                  (ee) => l.collectLabel && !Array.isArray(l.collectLabel) && (ee == null ? void 0 : ee.key) === l.collectLabel.key || !1
                );
                J && J.tempKey && (u.value[J.tempKey] = s.value[l.collectLabel.key]);
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
              r ? (x === "time" ? s.value[l.key] = r : s.value[l.key] = ot(r).format(typeof l.format == "string" ? l.format : k[x]), x === "date" && l.addTime && (s.value[l.key] += " 00:00:00")) : s.value[l.key] = null;
            else if (l.type === "monthRange" || x === "daterange" || x === "datetimerange" || x === "timerange") {
              if (!l.key2)
                return;
              r && r[0] && r[1] ? (x === "timerange" ? (s.value[l.key] = r[0], s.value[l.key2] = r[1]) : l.type === "monthRange" ? (s.value[l.key] = typeof l.format == "string" && ot(r[0]).format(l.format) || r[0], s.value[l.key2] = typeof l.format == "string" && l.format && ot(r[1]).format(l.format) || r[1]) : (s.value[l.key] = ot(r[0]).format(l.format || x && k[x]), s.value[l.key2] = ot(r[1]).format(l.format || x && k[x])), x === "daterange" && l.addTime && (s.value[l.key] += " 00:00:00", s.value[l.key2] += " 23:59:59")) : (s.value[l.key] = null, s.value[l.key2] = null);
            }
            break;
        }
    }
    function Te(r, l) {
      if (r.options)
        if (r != null && r.multiple || r.type === "checkboxGroup") {
          if (l) {
            let x = [];
            for (let k of r.options)
              l.indexOf(k == null ? void 0 : k.val) !== -1 && x.push(k);
            return x;
          }
          return !1;
        } else {
          if (l || l === 0 || l === !1) {
            for (let x of r.options)
              if ((x == null ? void 0 : x.val) === l)
                return x;
          }
          return !1;
        }
    }
    function le(r) {
      if (w.value) {
        for (let l of c.value) {
          const x = Ie(l, r);
          if (x)
            return x;
        }
        return !1;
      }
      return Ie(c.value, r);
    }
    function Ie(r, l) {
      for (let x of r)
        if (x.key === l)
          return x.tempKey;
      return !1;
    }
    function je(r, l) {
      let x = {};
      for (let k in s.value)
        s.value.hasOwnProperty(k) && r[k] !== void 0 && (x[k] = r[k], delete r[k]);
      Ue(x, l);
      for (let k in r)
        r.hasOwnProperty(k) && (y.indexOf(k) < 0 && y.push(k), s.value[k] = r[k]);
    }
    function qe(r) {
      let l = ue(r);
      if (w.value) {
        let x = [];
        for (let k of n.formData)
          x.push(...at(k, l));
        return x;
      }
      return at(n.formData, l);
    }
    function at(r, l) {
      return r.filter((x) => {
        for (let k of Object.keys(l))
          if ((x == null ? void 0 : x.key) === k && A.value.indexOf(k) > -1 && !(l[k] === null || (Array.isArray(l[k]) || j(l[k]) === "Object") && Oe(l[k])))
            return delete l[k], !0;
        return !1;
      }).map((x) => x == null ? void 0 : x.key);
    }
    function Ue(r, l = !1) {
      let x = ue(r);
      kt(r, l);
      for (let k in s.value)
        if (s.value.hasOwnProperty(k) && r[k] !== void 0 && r[k] !== "--") {
          if (Array.isArray(r[k]))
            r[k] = r[k].filter((ce) => ce !== "--");
          else if (j(r[k]) === "Object")
            for (let ce in r[k])
              r[k].hasOwnProperty(ce) && r[k][ce] === "--" && (r[k][ce] = null);
          s.value[k] = r[k];
        } else
          l || (s.value[k] = Array.isArray(s.value[k]) ? [] : null);
      Fe(function() {
        Gl(qe(x));
      });
    }
    function kt(r, l = !1) {
      if (w.value)
        for (let x of c.value)
          Ht(x, r, l);
      else
        Ht(c.value, r, l);
    }
    function Ht(r, l, x = !1) {
      for (let k of r)
        if (k.key && (x && (l[k.key] !== void 0 || k.key2 && l[k.key2] !== void 0) || !x) && k.tempKey)
          switch (k.type) {
            case "inputMap":
              if (!k.key2)
                continue;
              j(l[k.key]) === "Number" && j(l[k.key2] === "Number") ? k.key3 ? u.value[k.tempKey] = {
                lng: l[k.key],
                lat: l[k.key2],
                name: l[k.key3]
              } : u.value[k.tempKey] = {
                lng: l[k.key],
                lat: l[k.key2]
              } : k.key3 ? u.value[k.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : u.value[k.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              l[k.key] && l[k.key] !== "--" || l[k.key] === 0 ? u.value[k.tempKey] = l[k.key] : u.value[k.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              l[k.key] && l[k.key] !== "--" || l[k.key] === 0 || l[k.key] === !1 ? k.multiple || k.type === "checkboxGroup" ? u.value[k.tempKey] = [...l[k.key]] : k.booleanVal ? u.value[k.tempKey] = l[k.key] ? 1 : 0 : u.value[k.tempKey] = l[k.key] : k.multiple || k.type === "checkboxGroup" ? u.value[k.tempKey] = [] : u.value[k.tempKey] = null;
              break;
            case "date":
            case "time":
              if (k.dateType === "date" || k.dateType === "datetime" || k.dateType === "year" || k.dateType === "month" || k.dateType === "time")
                u.value[k.tempKey] = l[k.key] && l[k.key] !== "--" ? l[k.key] : null;
              else if (k.dateType === "daterange" || k.dateType === "datetimerange" || k.dateType === "timerange") {
                if (!k.key2)
                  continue;
                u.value[k.tempKey] = l[k.key] && l[k.key] !== "--" && l[k.key2] && l[k.key2] !== "--" && [l[k.key], l[k.key2]] || [];
              }
              break;
          }
    }
    function Ul(r) {
      if (Array.isArray(r))
        for (let l of r)
          Wt(l);
      else
        j(r) === "Object" && Wt(r);
    }
    function Wt(r) {
      const { index: l, indexB: x, key: k, val: ce } = r;
      if (typeof l == "number")
        if (Array.isArray(c.value[l])) {
          if (typeof x == "number")
            if (k && r.hasOwnProperty("val"))
              c.value[l][x][k] = ce;
            else
              for (let oe of Object.keys(r))
                oe !== "index" && k !== "indexB" && (c.value[l][x][oe] = r[oe]);
        } else if (k && r.hasOwnProperty("val"))
          c.value[l][k] = ce;
        else
          for (let oe of Object.keys(r))
            oe !== "index" && (c.value[l][oe] = r[oe]);
    }
    function jt({ label: r, root: l }) {
      l.key2 && (s.value[l.key2] = r), Je({
        e: r,
        root: l
      });
    }
    function qt(r) {
      r.beforeKey && ta(f, (l) => l === r.beforeKey), r.key && (f.indexOf(r.key) === -1 && f.push(r.key), Je({
        e: null,
        root: r
      }));
    }
    function Jt({ name: r, root: l }) {
      l.key2 && (s.value[l.key2] = r), Je({
        e: r,
        root: l
      });
    }
    function Yt({ e: r, root: l }) {
      Je({
        e: r,
        root: l
      }), Fe(function() {
        var x, k;
        (k = (x = a.value) == null ? void 0 : x.validateField) == null || k.call(x, l.key);
      });
    }
    function Je({ e: r, root: l }) {
      Re(() => {
        let x = {
          event: r
        };
        if (l.key && (x[l.key] = s.value[l.key]), l.key2 && (x[l.key2] = s.value[l.key2]), Array.isArray(l.collectLabel))
          for (let k of l.collectLabel)
            x[k.key] = s.value[k.key];
        else
          l.collectLabel && l.collectLabel.key && (x[l.collectLabel.key] = s.value[l.collectLabel.key]);
        e("on-item-change", x);
      }, 500);
    }
    function Xt() {
      let r = {};
      for (let l of K.value)
        r[l] = s.value[l];
      return n.trim && (r = yt(r)), r;
    }
    function Nl() {
      var r, l;
      (l = (r = a.value) == null ? void 0 : r.validate) == null || l.call(r);
    }
    function El(r) {
      Re(() => {
        var l, x;
        (x = (l = a.value) == null ? void 0 : l.validateField) == null || x.call(l, r, () => {
        });
      }, 10);
    }
    function Gl(r) {
      Re(() => {
        var l, x;
        if (Array.isArray(r))
          for (let k of r)
            (x = (l = a.value) == null ? void 0 : l.validateField) == null || x.call(l, k, () => {
            });
      }, 10);
    }
    function Hl(r) {
      r !== void 0 && (b.value = !!r);
    }
    function wt() {
      var r, l;
      n.disabled || (l = (r = a.value) == null ? void 0 : r.validate) == null || l.call(r, (x) => {
        _ || (_ = !0, x && (b.value = !0, e("on-submit", Xt())), Re(() => {
          _ = !1;
        }, 2e3));
      });
    }
    return Ne(() => {
      z(), re();
    }), i({
      resetForm: h,
      refreshFormDom: P,
      reRenderForm: $,
      setItemToValGroup: je,
      updateValGroup: Ue,
      updateFormDataT: Ul,
      validate: Nl,
      reValidate: El,
      changeLoading: Hl,
      getValGroup: Xt,
      submit: wt
    }), (r, l) => {
      const x = X("FormItem"), k = X("Button"), ce = X("Form");
      return S(), Q(ce, {
        ref_key: "formGroupXRef",
        ref: a,
        model: p(s),
        rules: p(V),
        "label-width": n.labelWidth,
        inline: n.inline,
        "show-message": n.showMessage,
        class: "formXN",
        key: p(C)
      }, {
        default: Z(() => [
          Y(x, { style: { display: "none" } }, {
            default: Z(() => [
              Xn
            ]),
            _: 1
          }),
          p(w) ? (S(!0), D(ke, { key: 0 }, _e(p(c), (oe, ae) => (S(), D("div", {
            class: Be([r.teamClass, "formTeamBox" + ae]),
            key: "formTeamBox" + ae
          }, [
            (S(!0), D(ke, null, _e(oe, (J, ee) => (S(), D(ke, {
              key: "formItem" + ee
            }, [
              W(J) ? (S(), Q(ul, {
                key: 0,
                item: J,
                style: ne(p(L)),
                "item-style": p(B),
                "val-group": p(s),
                "temp-keys": p(u),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": p(d),
                "upload-url": p(g),
                onItemChange: Je,
                onReValidate: Yt,
                onClearTempKeyItem: M,
                onSelectInputChange: qt,
                onAlNameChange: Jt,
                onAsyncLabelChange: jt
              }, tt({ _: 2 }, [
                _e(I(oe), (xe) => ({
                  name: xe.slotName,
                  fn: Z((Me) => [
                    Le(r.$slots, xe.slotName, {
                      valGroup: Me.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : de("", !0)
            ], 64))), 128))
          ], 2))), 128)) : de("", !0),
          (S(!0), D(ke, null, _e(p(c), (oe, ae) => (S(), D(ke, {
            key: "formItem" + ae
          }, [
            !p(w) && W(oe) ? (S(), Q(ul, {
              key: 0,
              item: oe,
              style: ne(p(L)),
              "item-style": p(B),
              "val-group": p(s),
              "temp-keys": p(u),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": p(d),
              "upload-url": p(g),
              onItemChange: Je,
              onReValidate: Yt,
              onClearTempKeyItem: M,
              onSelectInputChange: qt,
              onAlNameChange: Jt,
              onAsyncLabelChange: jt
            }, tt({ _: 2 }, [
              _e(I(r.formData), (J) => ({
                name: J.slotName,
                fn: Z((ee) => [
                  Le(r.$slots, J.slotName, {
                    valGroup: ee.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : de("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (S(), Q(x, { key: 1 }, {
            default: Z(() => [
              Y(k, {
                onClick: wt,
                style: ne(p(B)),
                type: "primary",
                loading: n.btnLoading && p(b),
                disabled: n.disabled
              }, {
                default: Z(() => [
                  be(G(n.longOkBtTxt || p(O)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : de("", !0),
          F("div", Qn, [
            n.showInlineOkBt ? (S(), Q(k, {
              key: 0,
              type: "primary",
              class: Be({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: wt,
              loading: n.btnLoading && p(b),
              disabled: n.disabled
            }, {
              default: Z(() => [
                be(G(n.inlineOkBtTxt || p(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : de("", !0),
            n.showInlineClearBt ? (S(), Q(k, {
              key: 1,
              onClick: h,
              class: Be({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: Z(() => [
                be(G(n.inlineClearBtTxt || p(O)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : de("", !0)
          ])
        ]),
        _: 3
      }, 8, ["model", "rules", "label-width", "inline", "show-message"]);
    };
  }
}), Zn = /* @__PURE__ */ pe({
  __name: "FormGroup",
  props: {
    formData: { default: () => [] },
    with: { default: () => Se().formGroupWidth },
    labelWidth: { default: () => Se().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(t, { expose: i, emit: o }) {
    const e = o, n = t, a = q({ width: n.with }), s = q(!1), c = q(), u = H(() => {
      var A, I;
      if (Array.isArray(n.formData))
        if (Array.isArray(n.formData[0])) {
          let m = [];
          for (let R of n.formData)
            R && (m = m.concat(
              R.filter((h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition)
            ));
          return m;
        } else
          return (I = (A = n.formData) == null ? void 0 : A.filter) == null ? void 0 : I.call(
            A,
            (m) => (m == null ? void 0 : m.type) === "custom" || (m == null ? void 0 : m.type) === "input" && m.slotName && m.slotPosition
          );
      return [];
    });
    function v() {
      return new Promise((A) => {
        var I, m;
        (m = (I = c.value).resetForm) == null || m.call(I).then((R) => {
          A(R);
        });
      });
    }
    function d() {
      return new Promise((A) => {
        var I, m;
        (m = (I = c.value).refreshFormDom) == null || m.call(I).then((R) => {
          A(R);
        });
      });
    }
    function f() {
      return new Promise((A) => {
        var I, m;
        (m = (I = c.value).reRenderForm) == null || m.call(I).then((R) => {
          A(R);
        });
      });
    }
    function y(A, I) {
      var m, R;
      (R = (m = c.value).setItemToValGroup) == null || R.call(m, A, I);
    }
    function b(A, I) {
      var m, R;
      (R = (m = c.value).updateValGroup) == null || R.call(m, A, I);
    }
    function C(A) {
      var I, m;
      (m = (I = c.value).updateFormDataT) == null || m.call(I, A);
    }
    function g() {
      var A, I;
      (I = (A = c.value).validate) == null || I.call(A);
    }
    function _(A) {
      var I, m;
      (m = (I = c.value).reValidate) == null || m.call(I, A);
    }
    function w(A) {
      var I, m;
      A !== void 0 && (s.value = !!A, (m = (I = c.value).changeLoading) == null || m.call(I, s.value));
    }
    function L() {
      var A, I;
      return (I = (A = c.value).getValGroup) == null ? void 0 : I.call(A);
    }
    function B() {
      s.value = !0;
    }
    function V() {
      var A, I;
      (I = (A = c.value).submit) == null || I.call(A);
    }
    function K() {
      e("on-cancel"), Re(() => {
        var A, I;
        s.value = !1, (I = (A = c.value).changeLoading) == null || I.call(A, !1);
      }, 1e3);
    }
    return i({
      resetForm: v,
      refreshFormDom: d,
      reRenderForm: f,
      setItemToValGroup: y,
      updateValGroup: b,
      updateFormDataT: C,
      validate: g,
      reValidate: _,
      changeLoading: w,
      getValGroup: L,
      submit: V,
      close: K
    }), (A, I) => {
      const m = X("Button");
      return S(), D("div", {
        style: ne(p(a)),
        class: "formGroupBoxVM"
      }, [
        Y(bt, lt({
          ref_key: "formRRef",
          ref: c
        }, A.$attrs, {
          "form-data": n.formData,
          "label-width": n.labelWidth,
          "content-width": n.contentWidth,
          "item-width": n.itemWidth,
          btnLoading: n.btnLoading,
          onOnSubmit: B
        }), tt({ _: 2 }, [
          _e(p(u), (R) => ({
            name: R.slotName,
            fn: Z(({ valGroup: h }) => [
              Le(A.$slots, R.slotName, { valGroup: h })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        fe(F("div", {
          class: "formFooterVM",
          style: ne({ marginLeft: n.labelWidth + "px" })
        }, [
          F("div", {
            style: ne({ width: n.contentWidth }),
            class: "btnBoxKAL"
          }, [
            n.showOkBt ? (S(), Q(m, {
              key: 0,
              onClick: V,
              class: "form-save-btn",
              loading: n.btnLoading && p(s)
            }, {
              default: Z(() => [
                be(G(n.okBtTxt || p(O)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : de("", !0),
            n.showCancelBt ? (S(), Q(m, {
              key: 1,
              onClick: K,
              class: "form-cancel-btn"
            }, {
              default: Z(() => [
                be(G(n.cancelBtTxt || p(O)("r.cancel")), 1)
              ]),
              _: 1
            })) : de("", !0)
          ], 4)
        ], 4), [
          [ge, n.showOkBt || n.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ut = /* @__PURE__ */ pe({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Se().searchFormLabelWidth },
    itemWidth: { default: () => Se().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(t, { expose: i, emit: o }) {
    const e = o, n = t, a = q(), s = H(() => {
      var B, V;
      if (Array.isArray(n.formData[0])) {
        let K = [];
        for (let A of n.formData)
          A && (K = K.concat(
            A.filter((I) => (I == null ? void 0 : I.type) === "custom" || (I == null ? void 0 : I.type) === "input" && I.slotName && I.slotPosition)
          ));
        return K;
      }
      return (V = (B = n.formData) == null ? void 0 : B.filter) == null ? void 0 : V.call(
        B,
        (K) => (K == null ? void 0 : K.type) === "custom" || (K == null ? void 0 : K.type) === "input" && K.slotName && K.slotPosition
      );
    });
    function c() {
      return new Promise((B) => {
        var V, K;
        (K = (V = a.value).resetForm) == null || K.call(V).then(() => {
          B();
        });
      });
    }
    function u() {
      return new Promise((B) => {
        var V, K;
        (K = (V = a.value).refreshFormDom) == null || K.call(V).then(() => {
          B();
        });
      });
    }
    function v() {
      return new Promise((B) => {
        var V, K;
        (K = (V = a.value).reRenderForm) == null || K.call(V).then(() => {
          B();
        });
      });
    }
    function d(B, V) {
      var K, A;
      (A = (K = a.value).setItemToValGroup) == null || A.call(K, B, V);
    }
    function f(B, V) {
      var K, A;
      (A = (K = a.value).updateValGroup) == null || A.call(K, B, V);
    }
    function y(B) {
      var V, K;
      (K = (V = a.value).updateFormDataT) == null || K.call(V, B);
    }
    function b() {
      var B, V;
      (V = (B = a.value).validate) == null || V.call(B);
    }
    function C(B) {
      var V, K;
      (K = (V = a.value).reValidate) == null || K.call(V, B);
    }
    function g(B) {
      var V, K;
      (K = (V = a.value).changeLoading) == null || K.call(V, B === void 0 ? !1 : B);
    }
    function _() {
      var B, V;
      return (V = (B = a.value).getValGroup) == null ? void 0 : V.call(B);
    }
    function w(B) {
      e("on-search", B);
    }
    function L() {
      var B, V;
      (V = (B = a.value).submit) == null || V.call(B);
    }
    return Ne(() => {
      const B = a.value.$el;
      B != null && B.parentNode && B.parentNode.addEventListener("keyup", (V) => {
        (V == null ? void 0 : V.keyCode) === 13 && L();
      });
    }), i({
      resetForm: c,
      refreshFormDom: u,
      reRenderForm: v,
      setItemToValGroup: d,
      updateValGroup: f,
      updateFormDataT: y,
      validate: b,
      reValidate: C,
      changeLoading: g,
      getValGroup: _,
      submit: L
    }), (B, V) => (S(), Q(bt, lt({
      ref_key: "formRRef",
      ref: a
    }, B.$attrs, {
      "form-data": n.formData,
      "label-width": n.labelWidth,
      "item-width": n.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": n.showInlineOkBt,
      "inline-ok-bt-txt": p(O)("r.check"),
      "show-inline-clear-bt": n.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: w
    }), tt({ _: 2 }, [
      _e(p(s), (K) => ({
        name: K.slotName,
        fn: Z(({ valGroup: A }) => [
          Le(B.$slots, K.slotName, { valGroup: A })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), eo = /* @__PURE__ */ pe({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Se().formModalWidth },
    labelWidth: { default: () => Se().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(t, { expose: i, emit: o }) {
    const e = o, n = t, a = q(), s = q(!1), c = q(!1), u = H(() => {
      var m, R;
      if (Array.isArray(n.formData[0])) {
        let h = [];
        for (let $ of n.formData)
          $ && (h = h.concat(
            $.filter((P) => (P == null ? void 0 : P.type) === "custom" || (P == null ? void 0 : P.type) === "input" && P.slotName && P.slotPosition)
          ));
        return h;
      }
      return (R = (m = n.formData) == null ? void 0 : m.filter) == null ? void 0 : R.call(
        m,
        (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
      );
    });
    function v() {
      return new Promise((m) => {
        var R, h;
        (h = (R = a.value).resetForm) == null || h.call(R).then(() => {
          m();
        });
      });
    }
    function d() {
      return new Promise((m) => {
        var R, h;
        (h = (R = a.value).refreshFormDom) == null || h.call(R).then(() => {
          m();
        });
      });
    }
    function f() {
      return new Promise((m) => {
        var R, h;
        (h = (R = a.value).reRenderForm) == null || h.call(R).then(() => {
          m();
        });
      });
    }
    function y(m, R) {
      var h, $;
      ($ = (h = a.value).setItemToValGroup) == null || $.call(h, m, R);
    }
    function b(m, R) {
      var h, $;
      ($ = (h = a.value).updateValGroup) == null || $.call(h, m, R);
    }
    function C(m) {
      var R, h;
      (h = (R = a.value).updateFormDataT) == null || h.call(R, m);
    }
    function g() {
      var m, R;
      (R = (m = a.value).validate) == null || R.call(m);
    }
    function _(m) {
      var R, h;
      (h = (R = a.value).reValidate) == null || h.call(R, m);
    }
    function w(m) {
      var R, h;
      m !== void 0 && (c.value = !!m, (h = (R = a.value).changeLoading) == null || h.call(R, c.value));
    }
    function L() {
      var m, R;
      return (R = (m = a.value).getValGroup) == null ? void 0 : R.call(m);
    }
    function B() {
      c.value = !0;
    }
    function V() {
      var m, R;
      n.hideCancelBt ? A() : (R = (m = a.value).submit) == null || R.call(m);
    }
    function K() {
      s.value = !0;
    }
    function A() {
      s.value = !1, Re(() => {
        var m, R;
        c.value = !1, (R = (m = a.value).changeLoading) == null || R.call(m, !1);
      }, 1e3);
    }
    function I(m) {
      e(m ? "on-open" : "on-close");
    }
    return i({
      resetForm: v,
      refreshFormDom: d,
      reRenderForm: f,
      setItemToValGroup: y,
      updateValGroup: b,
      updateFormDataT: C,
      validate: g,
      reValidate: _,
      changeLoading: w,
      getValGroup: L,
      submit: V,
      open: K,
      close: A
    }), (m, R) => {
      const h = X("Button"), $ = X("Modal");
      return S(), Q($, {
        class: Be(["formModal", { hideFooter: n.hideFooter }]),
        title: n.title || p(O)("r.title"),
        modelValue: p(s),
        "onUpdate:modelValue": R[0] || (R[0] = (P) => Ae(s) ? s.value = P : null),
        "mask-closable": !1,
        "footer-hide": n.hideFooter,
        width: n.width,
        onOnVisibleChange: I
      }, {
        footer: Z(() => [
          Y(h, {
            onClick: V,
            class: "modal-save-btn",
            loading: n.btnLoading && p(c)
          }, {
            default: Z(() => [
              be(G(n.okBtTxt || p(O)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          n.hideCancelBt ? de("", !0) : (S(), Q(h, {
            key: 0,
            onClick: A,
            class: "modal-cancel-btn"
          }, {
            default: Z(() => [
              be(G(n.cancelBtTxt || p(O)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: Z(() => [
          Y(bt, lt({
            ref_key: "formRRef",
            ref: a
          }, m.$attrs, {
            "form-data": n.formData,
            "label-width": n.labelWidth,
            btnLoading: n.btnLoading,
            onOnSubmit: B
          }), tt({ _: 2 }, [
            _e(p(u), (P) => ({
              name: P.slotName,
              fn: Z(({ valGroup: T }) => [
                Le(m.$slots, P.slotName, { valGroup: T })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), to = /* @__PURE__ */ pe({
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
    const o = i, e = t, n = q(!0), a = q([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const u = H(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), v = H(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    we(
      () => e.data,
      (g) => {
        n.value = !1;
        let _ = [];
        d(g, _), a.value = _, Fe(function() {
          n.value = !0, e.inlineLeaf && Fe(b);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), we(
      () => v.value,
      (g) => {
        let _, w = "s";
        if (Array.isArray(e.collectVal) ? (_ = e.collectVal[0] || "", w = "a") : _ = e.collectVal, !_ || JSON.stringify(g) === JSON.stringify(c)) {
          c = [];
          return;
        }
        Ze({
          group: a.value,
          condition: (L) => (L == null ? void 0 : L.checked) === !0,
          key: "checked",
          val: !1
        }), Ze(w === "a" ? {
          group: a.value,
          condition: (L) => vl(g, [_, L == null ? void 0 : L[_]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: a.value,
          condition: (L) => g.indexOf(L == null ? void 0 : L[_]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), we(
      () => e.disabled,
      (g) => {
        Ze({
          group: a.value,
          condition: (_) => _ && _.disableCheckbox !== g,
          key: "disableCheckbox",
          val: g
        }), e.inlineLeaf && Fe(b);
      },
      { immediate: !0 }
    );
    function d(g, _ = []) {
      for (let w of g) {
        let L = !1;
        u.value.length > 1 ? L = xt(v.value, (V) => V[u.value[0]] === w[u.value[0]]) !== void 0 : L = u.value[0] ? v.value.indexOf(w[u.value[0]]) !== -1 : !1;
        let B = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: L,
          disableCheckbox: e.disabled
        };
        for (let V of u.value)
          B[V] = w[V];
        _.push(B), w != null && w.children && w.children.length > 0 && (B.children = [], f(w.children, B.children));
      }
    }
    function f(g, _ = []) {
      for (let w of g) {
        let L = !1;
        u.value.length > 1 ? L = xt(v.value, (V) => V[u.value[0]] === w[u.value[0]]) !== void 0 : L = u.value[0] ? v.value.indexOf(w[u.value[0]]) !== -1 : !1;
        let B = {
          name: w == null ? void 0 : w[e.label],
          expand: !!(e.expandAll || w != null && w.expand),
          checked: L,
          disableCheckbox: e.disabled
        };
        for (let V of u.value)
          B[V] = w[V];
        _.push(B), w != null && w.children && w.children.length > 0 && (B.children = [], d(w.children, B.children));
      }
    }
    function y(g, {
      data: _
    }) {
      let w = "", L = !0;
      if (_.children && _.children.length > 0) {
        for (let B of _.children)
          if (B.children !== void 0) {
            L = !1;
            break;
          }
        L && e.inlineLeaf && (w = "inlineChildXA");
      }
      return g(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: w
        },
        [
          g(
            "span",
            {
              style: {
                fontWeight: _.children ? "bold" : "normal"
              }
            },
            _.name
          )
        ]
      );
    }
    function b(g) {
      if (g) {
        g.expand && Fe(b);
        return;
      }
      let _ = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (_.length > 0)
        for (let w of _) {
          let L = w == null ? void 0 : w.parentElement, B = L == null ? void 0 : L.nextElementSibling;
          if (!B)
            return;
          if (B.tagName !== "BR") {
            let V = L == null ? void 0 : L.parentElement, K = document.createElement("br");
            V == null || V.insertBefore(K, B), B = K.nextElementSibling, (B == null ? void 0 : B.className.indexOf("inlineTreeNodeF")) === -1 && B.setAttribute("class", B.className + " inlineTreeNodeF");
          }
          for (; B != null && B.nextElementSibling; )
            B = B.nextElementSibling, B.className.indexOf("inlineTreeNodeF") === -1 && B.setAttribute("class", B.className + " inlineTreeNodeF");
        }
    }
    function C(g) {
      let _ = [];
      if (e.leaf) {
        for (let w of g)
          if (!w.children)
            if (Array.isArray(e.collectVal)) {
              let L = {};
              for (let B of e.collectVal)
                L[B] = w[B];
              _.push(L);
            } else
              _.push(w[e.collectVal]);
      } else
        for (let w of g)
          if (Array.isArray(e.collectVal)) {
            let L = {};
            for (let B of e.collectVal)
              L[B] = w[B];
            _.push(L);
          } else
            _.push(w[e.collectVal]);
      c = _, o("update:modelValue", _), o("on-change", ue(_));
    }
    return (g, _) => {
      const w = X("Tree");
      return p(n) ? (S(), Q(w, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: p(a),
        render: y,
        onOnCheckChange: C,
        onOnToggleExpand: b,
        "show-checkbox": ""
      }, null, 8, ["data"])) : de("", !0);
    };
  }
}), lo = { class: "transferBoxRL" }, ao = { class: "leftBoxLLL" }, no = { class: "fullHeight flexColumnBox" }, oo = { class: "notGrow" }, io = { class: "titleLLL" }, so = { class: "growFlexItem" }, ro = { class: "middleBoxLLL" }, uo = { class: "rightBoxLLL" }, co = { class: "fullHeight flexColumnBox" }, fo = { class: "notGrow" }, po = { class: "titleLLL" }, mo = { class: "growFlexItem" }, ho = /* @__PURE__ */ pe({
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
      return (t = Se()) == null ? void 0 : t.btTablePageUsePagePro;
    } },
    showTotal: { type: Boolean, default: () => {
      var t;
      return (t = Se()) == null ? void 0 : t.pageShowTotal;
    } },
    showSizer: { type: Boolean, default: () => {
      var t;
      return (t = Se()) == null ? void 0 : t.pageShowSizer;
    } }
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(t, { expose: i, emit: o }) {
    const e = o, n = t;
    let a = q({}), s = q({}), c = q([]), u = q([]), v = q(0), d = q(0);
    const f = H(() => ({ ...n.constSearchDataLeft, ...a.value })), y = H(() => ({ ...n.constSearchDataRight, ...s.value })), b = H(() => v.value < 1), C = H(() => c.value.length < 1), g = H(() => u.value.length < 1), _ = H(() => d.value < 1), w = q(), L = q(), B = q(), V = q();
    function K() {
      w.value.resetForm(), L.value.resetForm(), Oe(a.value) || (a.value = {}), Oe(s.value) || (s.value = {}), B.value.clearSelect(), V.value.clearSelect();
    }
    function A() {
      B.value.search(), V.value.search();
    }
    function I(W) {
      c.value = W;
    }
    function m(W) {
      u.value = W;
    }
    function R(W) {
      var se, ie, E, re, me;
      v.value = ((ie = (se = W == null ? void 0 : W.data) == null ? void 0 : se.page) == null ? void 0 : ie.total) || ((re = (E = W == null ? void 0 : W.data) == null ? void 0 : E.data) == null ? void 0 : re.total) || ((me = W == null ? void 0 : W.data) == null ? void 0 : me.total) || (W == null ? void 0 : W.total) || 0, e("on-data-change-l", W);
    }
    function h(W) {
      var se, ie, E, re, me;
      d.value = ((ie = (se = W == null ? void 0 : W.data) == null ? void 0 : se.page) == null ? void 0 : ie.total) || ((re = (E = W == null ? void 0 : W.data) == null ? void 0 : E.data) == null ? void 0 : re.total) || ((me = W == null ? void 0 : W.data) == null ? void 0 : me.total) || (W == null ? void 0 : W.total) || 0, e("on-data-change-r", W);
    }
    function $(W) {
      a.value = W;
    }
    function P(W) {
      s.value = W;
    }
    function T() {
      n.addUrl && he("add");
    }
    function U() {
      n.deleteUrl && he("delete");
    }
    function M() {
      n.addAllUrl && n.addUrl && he("addAll");
    }
    function te() {
      n.deleteAllUrl && he("deleteAll");
    }
    function he(W) {
      let se, ie, E = {}, re = "";
      switch (W) {
        case "add":
          se = n.addMethod, ie = n.addUrl, E = n.addParamsHandle(u.value), re = O("r.add");
          break;
        case "delete":
          se = n.deleteMethod, ie = n.deleteUrl, E = n.deleteParamsHandle(c.value), re = O("r.remove");
          break;
        case "addAll":
          se = n.addAllMethod, ie = n.addAllUrl, E = n.addAllParamsHandle(y.value), re = O("r.addAll");
          break;
        case "deleteAll":
          se = n.deleteAllMethod, ie = n.deleteAllUrl, E = n.deleteAllParamsHandle(f.value), re = O("r.removeAll");
          break;
      }
      ie && se && De[se](ie, E, null, [], { spin: !0 }, !1).then((me) => {
        (me == null ? void 0 : me.code) === 0 ? ($e(re + O("r.success"), (me == null ? void 0 : me.message) || "", "success"), B.value && B.value.getTableData(), V.value && V.value.getTableData(), e("transferred")) : $e(re + O("r.failed"), (me == null ? void 0 : me.message) || "", "error");
      }).catch(() => {
        $e(re + O("r.error"), "", "error");
      });
    }
    return i({
      reset: K,
      search: A
    }), (W, se) => {
      const ie = X("Icon"), E = X("Button");
      return S(), D("div", lo, [
        F("div", ao, [
          F("div", no, [
            F("div", oo, [
              F("div", io, G(n.titleLeft || p(O)("r.added")), 1),
              Y(Rt, null, {
                default: Z(() => [
                  Y(Ut, {
                    ref_key: "leftFormRef",
                    ref: w,
                    "form-data": n.formDataLeft,
                    "form-rules": n.formRulesLeft,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: $
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            F("div", so, [
              Y(zt, {
                ref_key: "lTabRef",
                ref: B,
                columns: n.leftTableColumns,
                url: n.leftTableUrl,
                "search-data": p(f),
                onOnSelectionChange: I,
                onOnDataChange: R,
                "init-data": !!(p(Oe)(n.constSearchDataLeft) && n.leftTableUrl),
                "get-data-loading": "",
                selection: "",
                usePagePro: n.usePagePro,
                showTotal: n.showTotal,
                showSizer: n.showSizer
              }, null, 8, ["columns", "url", "search-data", "init-data", "usePagePro", "showTotal", "showSizer"])
            ])
          ])
        ]),
        F("div", ro, [
          Y(E, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: te,
            disabled: p(b)
          }, {
            default: Z(() => [
              be(G(p(O)("r.removeAll")) + " ", 1),
              Y(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(E, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: U,
            disabled: p(C)
          }, {
            default: Z(() => [
              be(G(p(O)("r.remove")) + " ", 1),
              Y(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(E, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: T,
            disabled: p(g)
          }, {
            default: Z(() => [
              Y(ie, { type: "ios-arrow-back" }),
              be(" " + G(p(O)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          Y(E, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: M,
            disabled: p(_)
          }, {
            default: Z(() => [
              Y(ie, { type: "ios-arrow-back" }),
              be(" " + G(p(O)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        F("div", uo, [
          F("div", co, [
            F("div", fo, [
              F("div", po, G(n.titleRight || p(O)("r.notAdded")), 1),
              Y(Rt, null, {
                default: Z(() => [
                  Y(Ut, {
                    ref_key: "rightFormRef",
                    ref: L,
                    "form-data": n.formDataRight,
                    "form-rules": n.formRulesRight,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: P
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            F("div", mo, [
              Y(zt, {
                ref_key: "rTabRef",
                ref: V,
                columns: n.rightTableColumns,
                url: n.rightTableUrl,
                "search-data": p(y),
                onOnSelectionChange: m,
                onOnDataChange: h,
                "init-data": !!(p(Oe)(n.constSearchDataRight) && n.rightTableUrl),
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
}), yo = { class: "boxLPA" }, vo = { class: "headerJ" }, go = { class: "firstT borderBoxAS" }, bo = { class: "secondT borderBoxAS" }, ko = { class: "firstCol borderBoxAS" }, wo = { class: "secondCol borderBoxAS" }, _o = /* @__PURE__ */ pe({
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
    const o = t, e = i, n = q([]), a = H(() => {
      var f;
      let v = ue(o.data), d = ue(n.value);
      for (let y of v) {
        let b = 0;
        if (y != null && y.children && !Oe(y.children))
          for (let C of y.children) {
            for (let g = 0, _ = d == null ? void 0 : d.length; g < _; g++)
              if (Array.isArray(o.collectVal)) {
                let w = !0;
                for (let L of o.collectVal)
                  if (((f = d[g]) == null ? void 0 : f[L]) !== (C == null ? void 0 : C[L])) {
                    w = !1;
                    break;
                  }
                if (w) {
                  C.checked = !0, b++, d.splice(g, 1);
                  break;
                }
              } else if (d[g] === C[o.collectVal]) {
                C.checked = !0, b++, d.splice(g, 1);
                break;
              }
            !C.checked && (C.checked = !1);
          }
        b === 0 ? (y.checked = !1, y.indeterminate = !1) : y.children && b === y.children.length ? (y.checked = !0, y.indeterminate = !1) : (y.checked = !1, y.indeterminate = !0);
      }
      return v;
    });
    we(
      () => o.modelValue,
      (v, d) => {
        rt(n.value, v) || rt(v, d) || (n.value = v);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(v, d) {
      if (v.children)
        for (let f of v.children)
          f.checked = d;
      c();
    }
    function c() {
      u(a.value, !0);
    }
    function u(v, d) {
      let f = [];
      for (let y of v) {
        if (!d && !o.leaf && y.checked && y.indeterminate === !1)
          if (Array.isArray(o.collectVal)) {
            let b = {};
            for (let C of o.collectVal)
              b[C] = y[C];
            f.push(b);
          } else
            j(o.collectVal) === "String" && f.push(y[o.collectVal]);
        if (y.children) {
          for (let b of y.children)
            if (b.checked)
              if (Array.isArray(o.collectVal)) {
                let C = {};
                for (let g of o.collectVal)
                  C[g] = b[g];
                f.push(C);
              } else
                j(o.collectVal) === "String" && f.push(b[o.collectVal]);
        }
      }
      d ? (n.value = f, o.leaf ? (e("update:modelValue", f), e("on-change", ue(f))) : Fe(function() {
        u(a.value);
      })) : (e("update:modelValue", f), e("on-change", ue(f)));
    }
    return (v, d) => {
      const f = X("Checkbox");
      return S(), D("div", yo, [
        F("div", vo, [
          F("div", go, G(v.firstTitle || p(O)("r.level.1")), 1),
          F("div", bo, G(v.secondTitle || p(O)("r.level.2")), 1)
        ]),
        (S(!0), D(ke, null, _e(p(a), (y, b) => (S(), D("div", {
          class: "bodyJ",
          key: "checkboxJ" + b
        }, [
          F("div", ko, [
            Y(f, {
              modelValue: y.checked,
              "onUpdate:modelValue": (C) => y.checked = C,
              indeterminate: y.indeterminate,
              onOnChange: (C) => s(y, C),
              disabled: v.disabled
            }, {
              default: Z(() => [
                be(G(y[v.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          F("div", wo, [
            (S(!0), D(ke, null, _e(y.children, (C, g) => (S(), D("div", {
              class: "secItem",
              key: "secItem" + g
            }, [
              Y(f, {
                modelValue: C.checked,
                "onUpdate:modelValue": (_) => C.checked = _,
                onOnChange: c,
                disabled: v.disabled
              }, {
                default: Z(() => [
                  be(G(C[v.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), Vo = { class: "boxLPB" }, Co = { class: "headerF" }, So = { class: "firstT borderBoxKa" }, To = { class: "secondT borderBoxKa" }, Bo = { class: "thirdT borderBoxKa" }, xo = { class: "firstCol borderBoxKa" }, Oo = { class: "rightBoxAL" }, Lo = { class: "secondCol borderBoxKa" }, Ao = { class: "thirdCol borderBoxKa" }, Io = /* @__PURE__ */ pe({
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
    const o = i, e = t, n = q([]), a = H(() => {
      let d = ue(e.data), f = ue(n.value);
      for (let y of d) {
        let b = 0, C = 0;
        if (y != null && y.children && !Oe(y.children))
          for (let g of y.children) {
            let _ = 0;
            if (g.children && !Oe(g.children))
              for (let w of g.children) {
                for (let L = 0, B = f.length; L < B; L++)
                  if (Array.isArray(e.collectVal)) {
                    let V = !0;
                    for (let K of e.collectVal)
                      if (f[L][K] !== w[K]) {
                        V = !1;
                        break;
                      }
                    if (V) {
                      w.checked = !0, _++, f.splice(L, 1);
                      break;
                    }
                  } else if (f[L] === w[e.collectVal]) {
                    w.checked = !0, _++, f.splice(L, 1);
                    break;
                  }
                !w.checked && (w.checked = !1);
              }
            _ === 0 ? (g.checked = !1, g.indeterminate = !1) : g.children && _ === g.children.length ? (g.checked = !0, g.indeterminate = !1, b++) : (g.checked = !1, g.indeterminate = !0, C++);
          }
        b === 0 && C === 0 ? (y.checked = !1, y.indeterminate = !1) : y.children && b === y.children.length ? (y.checked = !0, y.indeterminate = !1) : (y.checked = !1, y.indeterminate = !0);
      }
      return d;
    });
    we(
      () => e.modelValue,
      (d, f) => {
        rt(n.value, d) || rt(d, f) || (n.value = d);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(d, f) {
      if (d.children) {
        for (let y of d.children)
          if (y.checked = f, y.children)
            for (let b of y.children)
              b.checked = f;
      }
      u();
    }
    function c(d, f) {
      if (d.children)
        for (let y of d.children)
          y.checked = f;
      u();
    }
    function u() {
      v(a.value, !0);
    }
    function v(d, f) {
      let y = [];
      for (let b of d) {
        if (!f && !e.leaf && (b != null && b.checked) && b.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let C = {};
            for (let g of e.collectVal)
              C[g] = b[g];
            y.push(C);
          } else
            j(e.collectVal) === "String" && y.push(b[e.collectVal]);
        if (b != null && b.children)
          for (let C of b.children) {
            if (!f && !e.leaf && C.checked && C.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let g = {};
                for (let _ of e.collectVal)
                  g[_] = C[_];
                y.push(g);
              } else
                j(e.collectVal) === "String" && y.push(C[e.collectVal]);
            if (C.children) {
              for (let g of C.children)
                if (g.checked)
                  if (Array.isArray(e.collectVal)) {
                    let _ = {};
                    for (let w of e.collectVal)
                      _[w] = g[w];
                    y.push(_);
                  } else
                    j(e.collectVal) === "String" && y.push(g[e.collectVal]);
            }
          }
      }
      f ? (n.value = y, e.leaf ? (o("update:modelValue", y), o("on-change", ue(y))) : Fe(function() {
        v(a.value);
      })) : (o("update:modelValue", y), o("on-change", ue(y)));
    }
    return (d, f) => {
      const y = X("Checkbox");
      return S(), D("div", Vo, [
        F("div", Co, [
          F("div", So, G(d.firstTitle || p(O)("r.level.1")), 1),
          F("div", To, G(d.secondTitle || p(O)("r.level.2")), 1),
          F("div", Bo, G(d.thirdTitle || p(O)("r.level.3")), 1)
        ]),
        (S(!0), D(ke, null, _e(p(a), (b, C) => (S(), D("div", {
          class: "bodyF",
          key: "checkboxJ" + C
        }, [
          F("div", xo, [
            Y(y, {
              modelValue: b.checked,
              "onUpdate:modelValue": (g) => b.checked = g,
              indeterminate: b.indeterminate,
              onOnChange: (g) => s(b, g),
              disabled: d.disabled
            }, {
              default: Z(() => [
                be(G(b[d.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          F("div", Oo, [
            (S(!0), D(ke, null, _e(b.children, (g, _) => (S(), D("div", {
              class: "rightBoxInner",
              key: "secItem" + _
            }, [
              F("div", Lo, [
                Y(y, {
                  modelValue: g.checked,
                  "onUpdate:modelValue": (w) => g.checked = w,
                  indeterminate: g.indeterminate,
                  onOnChange: (w) => c(g, w),
                  disabled: d.disabled
                }, {
                  default: Z(() => [
                    be(G(g[d.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              F("div", Ao, [
                (S(!0), D(ke, null, _e(g.children, (w, L) => (S(), D("div", {
                  class: "thirdItem",
                  key: "thirdItem" + L
                }, [
                  Y(y, {
                    modelValue: w.checked,
                    "onUpdate:modelValue": (B) => w.checked = B,
                    onOnChange: u,
                    disabled: d.disabled
                  }, {
                    default: Z(() => [
                      be(G(w[d.label]), 1)
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
}), Po = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Fo = { class: "btsF" }, Ro = { key: 0 }, $o = {
  key: 1,
  class: "growFlexItem relativeBox"
}, Ko = { class: "fullFlowContent" }, Mo = /* @__PURE__ */ pe({
  __name: "WellCard",
  props: {
    title: {},
    fitToContent: { type: Boolean, default: !1 },
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const i = t, o = H(() => {
      let e = {
        width: i.fitToContent ? "fit-content" : i.width,
        height: i.fitToContent ? "fit-content" : i.height
      };
      i.inline && (e.display = "inline-block");
      for (let n in e)
        e.hasOwnProperty(n) && typeof e[n] == "number" && e[n] > 0 && (e[n] += "px");
      return e;
    });
    return (e, n) => (S(), D("div", {
      style: ne(p(o))
    }, [
      F("div", {
        class: Be(["wellCardR", { flexColumnBox: !i.fitToContent }])
      }, [
        F("div", {
          class: Be(["panelHeader", { notGrow: !i.fitToContent }])
        }, [
          F("div", Po, G(i.title || p(O)("r.title")), 1),
          F("div", Fo, [
            Le(e.$slots, "bts")
          ])
        ], 2),
        i.fitToContent ? (S(), D("div", Ro, [
          Le(e.$slots, "default")
        ])) : (S(), D("div", $o, [
          F("div", Ko, [
            Le(e.$slots, "default")
          ])
        ]))
      ], 2)
    ], 4));
  }
}), zo = /* @__PURE__ */ pe({
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
    const o = i, e = t;
    let n = q(1), a = 1;
    const s = q(""), c = ft([]);
    let u = {}, v = !0, d = !1;
    const f = "scm" + Math.random(), y = H(() => s.value ? O("r.searchFor") + s.value : e.placeholder || O("r.pInput")), b = H({
      get() {
        return e.modelValue ?? "";
      },
      set(A) {
        if (o("update:modelValue", A ?? ""), e.collectLabel && A !== void 0) {
          let I = {};
          for (let m of c.value)
            if (m[e.optionsValKey] === A) {
              I = JSON.parse(JSON.stringify(m));
              break;
            }
          o("on-change", I);
        }
      }
    }), C = H(() => e.searchKey ? {
      ...e.searchData,
      current: n.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: n.value
    });
    we(
      () => e.getOptions,
      (A) => {
        A ? v && K() : w();
      },
      { immediate: !0 }
    ), we(
      () => e.url,
      (A) => {
        A && (d = !0);
      }
    );
    const g = q();
    function _() {
      g.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", B);
    }
    function w() {
      v || (b.value = "", v = !0, s.value = "", c.value = [], n.value = 1, a = 1, u = {}, d = !1);
    }
    function L(A) {
      for (let I of c.value)
        if ((I == null ? void 0 : I.label) === A)
          return !0;
      return !1;
    }
    const B = yl(function(A) {
      var m;
      const I = (m = A == null ? void 0 : A.target) == null ? void 0 : m.value;
      L(I) || (Ce(I) ? (d ? w() : (Oe(u) && (u.current = n.value, u.pages = a, u.options = ue(c.value)), Ce(b.value) && (b.value = "")), s.value = String(I), c.value = [], n.value = 1, v = !0, K()) : d ? (w(), K()) : (b.value = "", s.value = "", u.current ? (n.value = u.current, a = u.pages, c.value = ue(u.options), u = {}) : K()));
    }, 600);
    function V() {
      d && w(), n.value < a ? (++n.value, Fe(function() {
        K();
      })) : tl.warning({
        background: !0,
        content: O("r.noMore")
      });
    }
    function K() {
      return new Promise((A, I) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Ce(s.value)) {
            A(!1);
            return;
          }
          De.get(e.url, C.value).then((m) => {
            var $;
            v = !1;
            let R = [];
            ($ = m == null ? void 0 : m.data) != null && $.records ? (R = m.data.records, a = m.data.pages) : m != null && m.data && j(m.data) === "Array" ? (R = m.data, a = m.pages) : m != null && m.data && j(m.data) === "Object" && (R = [m.data], a = 1), typeof e.optionFilter == "function" && j(e.optionFilter) === "Function" && (R = e.optionFilter(R)), Oe(R) || (R = R.map((P, T) => {
              let U = O("r.optionLabel") + T;
              if (Array.isArray(e.optionsLabelKey)) {
                let M = [];
                for (let te = 1, he = e.optionsLabelKey.length; te < he; te++)
                  M.push(P[e.optionsLabelKey[te]]);
                U = `${P[e.optionsLabelKey[0]]}(${String(M)})`;
              } else
                Et(e.optionsLabelKey) && (U = P[e.optionsLabelKey]);
              if (e.collectLabel) {
                let M = ue(P);
                return delete M.value, delete M.label, {
                  value: P[e.optionsValKey],
                  label: U,
                  ...M
                };
              }
              return {
                value: P[e.optionsValKey],
                label: U
              };
            })), c.value.push(...R);
            let h = {};
            c.value = c.value.filter((P) => h[P == null ? void 0 : P.value] ? !1 : (h[P == null ? void 0 : P.value] = !0, !0)), Fe(function() {
              o("update-option-finish");
            }), A(!0);
          }).catch(() => {
            tl.error(O("r.getDataError")), I(O("r.getDataError"));
          });
        } else
          A(!1);
      });
    }
    return Ne(_), (A, I) => {
      const m = X("Option"), R = X("Select"), h = Nt("loadmore");
      return fe((S(), Q(R, lt({
        modelValue: p(b),
        "onUpdate:modelValue": I[0] || (I[0] = ($) => Ae(b) ? b.value = $ : null),
        ref_key: "selectScrollSourceRef",
        ref: g,
        "transfer-class-name": f
      }, A.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(y),
        disabled: A.disabled
      }), {
        default: Z(() => [
          (S(!0), D(ke, null, _e(p(c), ($, P) => (S(), Q(m, {
            key: "op" + P,
            value: $ == null ? void 0 : $.value,
            label: $ == null ? void 0 : $.label,
            disabled: $ == null ? void 0 : $.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [h, V, f]
      ]);
    };
  }
}), dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: $l,
  AsyncCascader: Rl,
  BtTablePage: zt,
  CheckboxGroupThreeClass: Io,
  CheckboxGroupTwoClass: _o,
  CheckboxTree: to,
  EditorPro: zl,
  FormGroup: Zn,
  FormModal: eo,
  FormR: bt,
  FullPop: Va,
  HeaderBt: kl,
  Hello: Sa,
  IconTxtBtn: Lt,
  InputMap: Fl,
  MonthRange: Ml,
  Page404: La,
  PagePro: Il,
  SearchForm: Ut,
  SelectInput: Pl,
  SelectScrollMore: zo,
  ShowHidePanel: Rt,
  ShowHidePanelB: ln,
  SideMenu: Xa,
  TableIconBtn: xl,
  TableSearch: on,
  TableSetting: Ll,
  TransferBox: ho,
  UploadGroup: Kl,
  WellCard: Mo
}, Symbol.toStringTag, { value: "Module" })), Do = { class: "a4Line aL notPrint" }, Uo = { class: "a4Line aR notPrint" }, No = { class: "a4Line bL notPrint" }, Eo = { class: "a4Line bR notPrint" }, Go = { class: "topsL notPrint" }, Ho = { class: "topsLTitle" }, Wo = { class: "topsLBtn" }, jo = { class: "topsLHelp" }, qo = { key: 0 }, Jo = /* @__PURE__ */ F("span", null, "1. ", -1), Yo = { key: 1 }, Xo = /* @__PURE__ */ F("span", null, "2. ", -1), Qo = { key: 2 }, Zo = /* @__PURE__ */ F("span", null, "1. ", -1), ei = ["innerHTML"], ti = /* @__PURE__ */ pe({
  __name: "PrintModal",
  setup(t) {
    const i = gl(), o = q(), e = q(!1), n = q(!1), a = q(!1), s = q(715), c = q(!1), u = q(), v = "tablePrint_" + Date.now().toString(), d = q(""), f = q([]), y = q([]), b = q(!1), C = H(() => ({
      width: s.value + "px"
    })), g = () => {
      u.value && window.sessionStorage.removeItem("print_" + u.value), window.sessionStorage.removeItem(v), window.close();
    }, _ = () => {
      c.value && (c.value = !1);
    }, w = () => {
      b.value = !0;
    }, L = (A) => {
      b.value && (s.value = (A == null ? void 0 : A.layerX) - 20);
    }, B = () => {
      b.value && (b.value = !1);
    }, V = () => {
      c.value = !1;
      let A = window.setTimeout(() => {
        window.clearTimeout(A), window.print();
      }, 100);
    }, K = () => {
      var A, I, m, R, h;
      if (u.value = (A = i == null ? void 0 : i.params) == null ? void 0 : A.isFrom, u.value) {
        let $ = window.sessionStorage.getItem("print_" + u.value);
        if ($) {
          const P = JSON.parse($);
          if (!P) {
            e.value = !0;
            return;
          }
          f.value = P.columns, y.value = P.data, o.value = P.title, d.value = ((I = P == null ? void 0 : P.config) == null ? void 0 : I.customClass) || "", n.value = ((m = P == null ? void 0 : P.config) == null ? void 0 : m.domPrint) || !1, a.value = ((R = P == null ? void 0 : P.config) == null ? void 0 : R.autoPrint) || !1, s.value = ((h = P == null ? void 0 : P.config) == null ? void 0 : h.width) || 715, document.title = (o.value || O("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return Ne(() => {
      if (a.value) {
        let A = window.setTimeout(() => {
          window.clearTimeout(A), V();
        }, 100);
      }
      document.addEventListener("click", _), document.addEventListener("mousemove", L), document.addEventListener("mouseup", B);
    }), K(), (A, I) => {
      const m = X("Table");
      return S(), D("div", {
        class: Be(["tablePrintModal", [p(d)]])
      }, [
        fe(F("div", { class: "msgL notPrint" }, G(p(O)("r.printGuide.9")), 513), [
          [ge, p(e)]
        ]),
        fe(F("div", Do, [
          F("p", null, G(p(O)("r.printGuide.7")), 1),
          be(),
          F("p", null, G(p(O)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        fe(F("div", Uo, [
          F("p", null, G(p(O)("r.printGuide.7")), 1),
          be(),
          F("p", null, G(p(O)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        fe(F("div", No, [
          F("p", null, G(p(O)("r.printGuide.8")), 1),
          be(),
          F("p", null, G(p(O)("r.printGuide.5")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        fe(F("div", Eo, [
          F("p", null, G(p(O)("r.printGuide.8")), 1),
          be(),
          F("p", null, G(p(O)("r.printGuide.6")), 1)
        ], 512), [
          [ge, !p(e)]
        ]),
        fe(F("div", Go, [
          F("div", Ho, G(p(o) || p(O)("r.print")), 1),
          F("div", Wo, [
            Y(Lt, {
              icon: "md-help-circle",
              name: p(O)("r.help"),
              onClick: I[0] || (I[0] = Tt((R) => c.value = !p(c), ["stop"]))
            }, null, 8, ["name"]),
            Y(Lt, {
              icon: "md-print",
              name: p(O)("r.preview"),
              onClick: V
            }, null, 8, ["name"]),
            p(n) ? de("", !0) : (S(), Q(Ll, {
              key: 0,
              modelValue: p(f),
              "onUpdate:modelValue": I[1] || (I[1] = (R) => Ae(f) ? f.value = R : null),
              "s-key": v,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            Y(xl, {
              icon: "md-close",
              onClick: g,
              title: p(O)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(F("div", jo, [
            p(n) ? de("", !0) : (S(), D("p", qo, [
              Jo,
              F("span", null, G(p(O)("r.printGuide.1")), 1)
            ])),
            p(n) ? de("", !0) : (S(), D("p", Yo, [
              Xo,
              F("span", null, G(p(O)("r.printGuide.2")), 1)
            ])),
            p(n) ? (S(), D("p", Qo, [
              Zo,
              F("span", null, G(p(O)("r.printGuide.10")), 1)
            ])) : de("", !0),
            F("p", null, [
              F("span", null, G(p(n) ? "2. " : "3. "), 1),
              F("span", null, G(p(O)("r.printGuide.3")), 1)
            ]),
            F("p", null, [
              F("span", null, G(p(n) ? "3. " : "4. "), 1),
              F("span", null, G(p(O)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ge, p(c)]
          ])
        ], 512), [
          [ge, !p(e)]
        ]),
        p(n) ? (S(), D("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: ne(p(C))
        }, [
          F("div", {
            class: "settingLine",
            onMousedown: Tt(w, ["stop"])
          }, null, 32)
        ], 4)) : de("", !0),
        p(n) ? (S(), D("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(y),
          style: ne(p(C))
        }, null, 12, ei)) : de("", !0),
        p(n) ? de("", !0) : fe((S(), Q(m, {
          key: 2,
          class: "tablePW",
          columns: p(f),
          data: p(y),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ge, !p(e)]
        ])
      ], 2);
    };
  }
});
let We = null;
function cl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const i = document.createElement("style");
  i.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(i);
}
function li(t) {
  t != null && t.addRoute && (t.hasRoute("tablePrint") || t.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: ti
  })), We = t, location.pathname.indexOf("tablePrint") > -1 ? (We.push(location.pathname), cl()) : location.hash.indexOf("tablePrint") > -1 && (We.push(location.hash.replace(/^#/, "")), cl());
}
function Dl(t) {
  return j(t) === "Object" && (t.width = t.minWidth || 100, t.sortable = !1, delete t.minWidth, delete t.__id, t.resizable = !0, t.children && j(t.children) === "Array" && (t.children = t.children.map(Dl))), t;
}
function ai(t, i, o, e) {
  var v, d, f;
  if (!We)
    return;
  let n;
  if (!(e != null && e.domPrint)) {
    let y = ue(
      t.filter((b) => (b == null ? void 0 : b.key) || (b == null ? void 0 : b.children))
    );
    y[0].type === "selection" && y.shift(), y.length ? n = y.map(Dl) : n = [];
  }
  let a = (d = (v = We == null ? void 0 : We.currentRoute) == null ? void 0 : v.value) == null ? void 0 : d.fullPath;
  a && (a = (f = a.replace) == null ? void 0 : f.call(a, /\//g, "_"));
  let s = {
    data: i,
    title: o,
    config: e
  };
  e != null && e.domPrint || (s.columns = n), window.sessionStorage.setItem("print_" + a, JSON.stringify(s));
  const c = We.resolve({
    name: "tablePrint",
    params: { isFrom: a }
  });
  window.open(c == null ? void 0 : c.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const Gt = {
  print: ai,
  init: li
};
function ni(t = "", i = "", o = {}) {
  o.domPrint = !0, o.width || (o.width = 715), Gt.print([], t, i, o);
}
function oi(t) {
  const i = (...a) => Ee.apply(this, a), o = i("r.closePreview"), e = i("r.fullImg");
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
            Ve(ia, {
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
  }), Re(() => {
    var c, u, v, d, f, y;
    const a = (d = (v = (u = (c = document.getElementById(n)) == null ? void 0 : c.parentElement) == null ? void 0 : u.parentElement) == null ? void 0 : v.parentElement) == null ? void 0 : d.parentElement, s = (y = (f = document.getElementById(n)) == null ? void 0 : f.parentElement) == null ? void 0 : y.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), s && (s.style.display = "none");
  }, 10);
}
const ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: De,
  $swal: $e,
  $swalConfirm: Ol,
  domPrint: ni,
  fullScreenImgByDom: Qe,
  fullScreenImgPreview: oi,
  messageBox: Mt,
  setInterval: nn,
  setTimeout: Re,
  tablePrint: Gt
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class t {
    constructor() {
      nt(this, "title");
      nt(this, "iconSvg");
      nt(this, "tag");
      nt(this, "alwaysEnable");
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
      var u, v, d, f, y, b, C, g, _;
      const n = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, s = localStorage.getItem("editorPreviewH") || 500;
      const c = (u = e == null ? void 0 : e.getHtml) == null ? void 0 : u.call(e);
      if (n) {
        let w = (b = (y = (f = (d = (v = n.children) == null ? void 0 : v[0]) == null ? void 0 : d.children) == null ? void 0 : f[1]) == null ? void 0 : y.children) == null ? void 0 : b[0], L = (_ = (g = (C = n.children) == null ? void 0 : C[0]) == null ? void 0 : g.children) == null ? void 0 : _[1];
        w && (w.innerHTML = c, w.style.width = a + "px"), L && (L.style.height = s + "px"), n.style.display = "block";
      } else {
        const w = document.body, L = document.createElement("div");
        L.setAttribute("id", "editor-preview"), L.setAttribute("class", "editor-preview-mask"), L.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${s}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let B = L.children[0].children[1], V = L.children[0].children[1].children[0], K = L.children[0].children[0].children[0].children[1];
        const A = 40, I = 70, m = (P) => {
          var M;
          if ((P == null ? void 0 : P.type) === "keyup") {
            let te = !1;
            if (P.key && (te = P.key !== "Enter"), te)
              return;
          }
          let T = (M = P == null ? void 0 : P.target) == null ? void 0 : M.value;
          if (T = Number(T), V.style && V.style.width === T + "px")
            return;
          const U = w.clientWidth;
          T < 250 ? (T = 250, P.target.value = 250) : T > U - A && (T = U - A, P.target.value = U - A), V.style.width = T + "px", localStorage.setItem("editorPreviewW", T);
        };
        K.addEventListener("blur", m), K.addEventListener("keyup", m);
        let R = L.children[0].children[0].children[0].children[3];
        const h = (P) => {
          var M;
          if ((P == null ? void 0 : P.type) === "keyup") {
            let te = !1;
            if (P.key && (te = P.key !== "Enter"), te)
              return;
          }
          let T = (M = P == null ? void 0 : P.target) == null ? void 0 : M.value;
          if (T = Number(T), B.style && B.style.height === T + "px")
            return;
          const U = w.clientHeight;
          T < 300 ? (T = 300, P.target.value = 300) : T > U - I && (T = U - I, P.target.value = U - I), B.style.height = T + "px", localStorage.setItem("editorPreviewH", T);
        };
        R.addEventListener("blur", h), R.addEventListener("keyup", h), L.children[0].children[0].children[1].addEventListener("click", () => {
          L.style.display = "none";
        }), V.innerHTML = c, V.style.width = a + "px", B.style.height = s + "px", w.append(L);
      }
    }
  }
  const i = {
    key: "previewX",
    factory() {
      return new t();
    }
  };
  fa.registerMenu(i), window.wangeditorMenuInit = !0;
})();
const Bi = ht.use, xi = ht.i18n, fl = {
  ...ii,
  ...Wa
}, si = function(t, i = {}) {
  De.init(i.useStore || i.store, t), t.use(pa), i.locale && ht.use(i.locale), i.i18n && ht.i18n(i.i18n), i.router && (an(i.router), Gt.init(i.router)), i.amap && Cn(i.amap), i.notRegistryGlobal || (Object.keys(dl).forEach((o) => {
    t.component(o) || t.component(o, dl[o]);
  }), Object.keys(fl).forEach((o) => {
    t.config.globalProperties[o] = fl[o];
  })), t.directive("has") || t.directive("has", (o, e) => {
    e.value && !Sl(e.value) && (o.style.display = "none");
  }), t.directive("loadmore") || t.directive("loadmore", {
    mounted(o, e) {
      var a;
      let n = o;
      e.arg && (n = (a = document.getElementsByClassName(e.arg)) == null ? void 0 : a[0]), n && n.addEventListener("scroll", function() {
        n.scrollTop > 0 && n.scrollHeight - n.scrollTop <= n.clientHeight && e.value();
      });
    }
  }), t.config.globalProperties.fontSizeBase = 14, t.config.globalProperties.pageSizes = [10, 20, 50, 100], t.config.globalProperties.searchFormLabelWidth = 84, t.config.globalProperties.searchFormItemWidth = 202, t.config.globalProperties.formModalLabelWidth = 140, t.config.globalProperties.formModalWidth = 520, t.config.globalProperties.formGroupLabelWidth = 160, t.config.globalProperties.formGroupWidth = "100%", t.config.globalProperties.iconTxtBtnIconSize = 17, t.config.globalProperties.btTablePageUsePagePro = !0, t.config.globalProperties.pageShowTotal = !0, t.config.globalProperties.pageShowSizer = !0, t.config.globalProperties.tableSettingBg = "#fff", t.config.globalProperties.tableSettingTransfer = !0, t.config.globalProperties.tableSettingEventsEnabled = !0;
}, Oi = { install: si };
export {
  De as $fetch,
  $e as $swal,
  Ol as $swalConfirm,
  $l as AlCascaderMC,
  Rl as AsyncCascader,
  zt as BtTablePage,
  Io as CheckboxGroupThreeClass,
  _o as CheckboxGroupTwoClass,
  to as CheckboxTree,
  zl as EditorPro,
  Zn as FormGroup,
  eo as FormModal,
  bt as FormR,
  Va as FullPop,
  kl as HeaderBt,
  Sa as Hello,
  Lt as IconTxtBtn,
  Fl as InputMap,
  Ml as MonthRange,
  La as Page404,
  Il as PagePro,
  Ut as SearchForm,
  Pl as SelectInput,
  zo as SelectScrollMore,
  Rt as ShowHidePanel,
  ln as ShowHidePanelB,
  Xa as SideMenu,
  xl as TableIconBtn,
  on as TableSearch,
  Ll as TableSetting,
  ho as TransferBox,
  Kl as UploadGroup,
  Mo as WellCard,
  Pt as clearObj,
  Ga as dataFilterOrToUrl,
  Ma as decimalDigitsLimit,
  Oi as default,
  ni as domPrint,
  Vl as downloadFileByFormSubmit,
  Ia as downloadFileReaderFile,
  Si as emptyInput,
  Pa as fakeALinkClick,
  za as fileExport,
  Xe as findCollection,
  At as findPath,
  Ra as formDataHeadConfig,
  Qe as fullScreenImgByDom,
  oi as fullScreenImgPreview,
  Da as getColumnsKeys,
  Ct as getFileSrc,
  wl as getFileTypeByName,
  ol as getFileTypeIconByName,
  Fa as getStringWidth,
  Sl as hasPermission,
  Ci as htmlDecode,
  Vi as htmlEncode,
  Ha as htmlPrint,
  xi as i18n,
  si as install,
  It as isClient,
  Na as isEmptyValue,
  St as isImgByFile,
  Tl as isNaN,
  Ua as isNumberValue,
  Ce as isValidValue,
  Bi as locale,
  Mt as messageBox,
  j as myTypeof,
  Ka as oneOf,
  Ft as removeEmptyValue,
  nn as setInterval,
  Re as setTimeout,
  Ze as setValByOption,
  Bl as siblingElems,
  Ti as stopBubbling,
  Ea as stringLength,
  Gt as tablePrint,
  $a as toFormData,
  Aa as toHump,
  _l as toLine,
  Cl as tooltipManual,
  yt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
