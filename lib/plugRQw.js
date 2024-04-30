var Gl = Object.defineProperty;
var Hl = (l, u, o) => u in l ? Gl(l, u, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[u] = o;
var nt = (l, u, o) => (Hl(l, typeof u != "symbol" ? u + "" : u, o), o);
import { getCurrentInstance as bt, defineComponent as ue, resolveComponent as q, openBlock as L, createElementBlock as K, normalizeClass as Se, normalizeStyle as le, createBlock as X, createCommentVNode as re, renderSlot as Te, ref as W, computed as N, withDirectives as fe, unref as p, createElementVNode as M, toDisplayString as E, createVNode as j, withCtx as Y, createTextVNode as ve, vShow as ye, resolveDirective as Et, h as Ve, Fragment as ge, renderList as _e, onBeforeMount as Wl, watch as we, nextTick as Fe, isRef as Oe, onMounted as Ee, withModifiers as St, mergeProps as lt, onUnmounted as jl, shallowRef as pt, triggerRef as Jl, onBeforeUnmount as ql, createSlots as tt } from "vue";
import Yl from "deepmerge";
import { isObject as Xl, isFunction as Ql, isPlainObject as et, cloneDeep as ie, isEmpty as xe, debounce as ml, isNumber as st, isString as zt, last as mt, isEqual as rt, first as xt, find as Tt, indexOf as el, findIndex as hl, remove as Zl } from "lodash-es";
import dt from "sweetalert";
import { Tooltip as ea, Modal as He, Button as Ct, TableColumnConfig as ta, Radio as la, Input as aa, Message as tl, Icon as na } from "view-ui-plus";
import { useRouter as oa, useRoute as yl } from "vue-router";
import Lt from "axios";
import ia from "ar-cascader";
import { Toolbar as sa, Editor as ra } from "@wangeditor/editor-for-vue";
import ot from "moment";
import { Boot as ua } from "@wangeditor/editor";
import da from "vue-json-viewer";
const vl = {
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
}, ca = /(%|){([0-9a-zA-Z_]+)}/g;
function fa() {
  function l(o, e) {
    return Object.prototype.hasOwnProperty.call(o, e);
  }
  function u(o, ...e) {
    let n;
    return e.length === 1 && typeof e[0] == "object" && (n = e[0]), (!n || !n.hasOwnProperty) && (n = {}), o === void 0 ? "" : o.replace(ca, (a, s, c, f) => {
      let b;
      return o[f - 1] === "{" && o[f + a.length] === "}" ? c : (b = l(n, c) ? n[c] : null, b ?? "");
    });
  }
  return u;
}
const pa = fa();
let ht = vl;
const ma = {
  zh: vl
};
let ll, al = {}, Ie, ha = function(l, u) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(l, u);
  if (Ie && Ie.global)
    return Ie.global.t(l, u);
  if (Ie && Ie.locale) {
    if (!al[Ie.locale] || ll != Ie.locale) {
      al[Ie.locale] = !0;
      let o = Ie.getLocaleMessage(Ie.locale) || {}, e = Yl(ma[Ie.locale], o, { clone: !0 });
      ht = e, Ie.setLocaleMessage(Ie.locale, e), ll = Ie.locale;
    }
    return Ie.hlang(l, u);
  }
};
const ze = function(l, u) {
  let o = ha.apply(this, [l, u]);
  if (o != null)
    return o;
  const e = l.split(".");
  let n = ht;
  for (let a = 0, s = e.length; a < s; a++) {
    const c = e[a];
    if (o = n[c], a === s - 1)
      return pa(o, u);
    if (!o)
      return "";
    n = o;
  }
  return "";
}, ya = function(l) {
  ht = l || ht;
}, va = function(l) {
  Ie = l;
}, yt = {
  use: ya,
  t: ze,
  i18n: va
};
function I(l, u) {
  var e, n, a;
  const o = (a = (n = (e = bt()) == null ? void 0 : e.appContext) == null ? void 0 : n.config) == null ? void 0 : a.globalProperties;
  return ze.apply(o, [l, u]);
}
const gl = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = l, e = u;
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
        }, null, 8, ["size", "type"])) : re("", !0),
        Te(a.$slots, "default")
      ], 6);
    };
  }
}), ga = { class: "headerTxtAM" }, ba = { class: "contentAM" }, ka = /* @__PURE__ */ ue({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(l, { expose: u, emit: o }) {
    const e = l, n = o;
    let a = W(!1);
    const s = N(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), c = N(() => ({ zIndex: e.zIndex }));
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
        M("span", ga, E(d.title || p(I)("r.title")), 1),
        j(gl, {
          icon: "md-return-left",
          onClick: b
        }, {
          default: Y(() => [
            ve(E(p(I)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      M("div", ba, [
        Te(d.$slots, "default")
      ])
    ], 4)), [
      [ye, p(a)]
    ]);
  }
}), wa = { class: "msg" }, _a = /* @__PURE__ */ ue({
  __name: "Hello",
  setup(l) {
    let u = W("Greetings from Ricky.");
    return (o, e) => (L(), K("span", wa, E(p(u)), 1));
  }
});
function Re() {
  const { appContext: l } = bt();
  return l.config.globalProperties;
}
const It = /* @__PURE__ */ ue({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Re().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: u }) {
    const o = l, e = u, n = N(() => Math.floor(o.size / 17 * 12) + "px");
    function a(s) {
      o.disabled || e("click", s);
    }
    return (s, c) => {
      const f = q("Icon"), b = Et("has");
      return fe((L(), K("div", {
        class: Se(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: a,
        style: le({ "font-size": p(n) })
      }, [
        j(f, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        ve(" " + E(o.name || p(I)("r.button")), 1)
      ], 6)), [
        [b, s.has]
      ]);
    };
  }
}), Va = { class: "c404K" }, Ca = /* @__PURE__ */ M("div", { class: "t404" }, "404", -1), Aa = { class: "ct404" }, Ba = { class: "p404" }, Sa = /* @__PURE__ */ ue({
  __name: "Page404",
  setup(l) {
    const o = bt().appContext.config.globalProperties.$router;
    function e() {
      o.go(-1);
    }
    return (n, a) => {
      const s = q("Button");
      return L(), K("div", Va, [
        Ca,
        M("div", Aa, "UH OH! " + E(p(I)("r.pageNotFound")), 1),
        M("div", Ba, E(p(I)("r.notFoundMsg")), 1),
        j(s, {
          class: "bt404",
          onClick: e
        }, {
          default: Y(() => [
            ve(E(p(I)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Pe(l, u, o) {
  const e = (...n) => ze.apply(this, n);
  return new Promise((n, a) => {
    if (typeof l == "object" && !Array.isArray(l)) {
      let s = e("r.confirm"), c = e("r.cancel"), f = !1, b = "swalConfirmBt", d = "swalCancelBt";
      const i = /^HTML.*Element$/;
      l.type && (l.icon = l.type) && delete l.type, l.content && (l.text = l.content) && delete l.content, l.className = l.className || "swalBoxX";
      let v = "";
      l.text && i.test(G(l.text)) ? v = "content" : l.text && G(l.text) === "String" && (v = "text"), l.buttons && (typeof l.buttons == "object" && !Array.isArray(l.buttons) ? l.buttons.cancel && (l.buttons.cancel.text && (c = l.buttons.cancel.text) && (f = !0), l.buttons.cancel.className && (d = l.buttons.cancel.className), l.buttons.confirm.text && (s = l.buttons.confirm.text), l.buttons.confirm.className && (b = l.buttons.confirm.className)) : Array.isArray(l.buttons) && (l.buttons[0] && (c = l.buttons[0], f = !0), l.buttons[1] && (s = l.buttons[1]))), dt({
        title: l.title,
        icon: l.icon,
        className: l.className,
        [v]: l.text,
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
        g && typeof l.onOk == "function" && l.onOk(), n(g);
      }).catch((g) => {
        a(g);
      });
    } else if (typeof l == "string") {
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
      dt({
        title: l,
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
    } else if (typeof l == "boolean")
      !l && dt.close && dt.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function xa(l) {
  return l.replace(/_(\w)/g, function(u, o) {
    return o.toUpperCase();
  });
}
function bi(l) {
  let u = document.createElement("div");
  return u.textContent !== void 0 ? u.textContent = l : u.innerText = l, u.innerHTML;
}
function ki(l) {
  let u = document.createElement("div");
  return u.innerHTML = l, u.innerText || u.textContent;
}
function At(l) {
  return new Promise((u) => {
    let o = new FileReader();
    o.readAsDataURL(l), o.onloadend = () => {
      u(o.result);
    };
  });
}
function bl(l) {
  return (l == null ? void 0 : l.split(".").pop().toLocaleLowerCase()) || "";
}
function Bt(l) {
  return G(l) === "String" && l.indexOf("image") > -1;
}
function nl(l) {
  const u = bl(l);
  let o = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(u) > -1 ? o = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(u) > -1 ? o = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(u) > -1 ? o = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(u) > -1 ? o = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(u) > -1 ? o = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(u) > -1 && (o = "ios-videocam"), o;
}
function Ta(l, u) {
  let o = document.createElement("a");
  o.href = u, o.download = l, La(o);
}
function La(l) {
  let u = document.createEvent("MouseEvents");
  u.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.dispatchEvent(u);
}
function Ot({
  group: l,
  condition: u,
  pathKey: o,
  childKey: e = "children",
  path: n = []
}) {
  if (l && Xl(l)) {
    if (Ql(u)) {
      if (et(l)) {
        let a = l, s = ie(n);
        if (u(a))
          return o && a[o] && s.push(a[o]), s;
        if (a[e] && !xe(a[e])) {
          o && a[o] && s.push(a[o]);
          let c = Ot({
            group: a[e],
            condition: u,
            pathKey: o,
            childKey: e,
            path: s
          });
          if (!xe(c))
            return c;
        }
      } else if (Array.isArray(l))
        for (let a of l) {
          let s = ie(n);
          if (u(a))
            return o && a[o] ? s.push(a[o]) : s.push(String(l.indexOf(a))), s;
          if (a[e] && a[e].length > 0) {
            o && a[o] ? s.push(a[o]) : s.push(String(l.indexOf(a)));
            let c = Ot({
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
    } else if (Array.isArray(l))
      for (let a of l) {
        let s = ie(n);
        if (a === u)
          return s.push(String(l.indexOf(a))), s;
      }
  }
  return [];
}
function Ia(l, u = 12) {
  if (G(l) === "String" && l.length > 0) {
    let o = document.createElement("span");
    o.style.fontSize = u + "px", o.style.fontFamily = "inherit", o.innerHTML = l, o.style.opacity = "0", o.style.position = "fixed", o.style.top = "3000px", document.body.append(o);
    const e = o.clientWidth;
    return document.body.removeChild(o), e;
  }
  return 0;
}
function wi(l) {
  return l === "" ? null : l;
}
function _i(l) {
  var u;
  l = l || window.Event, l != null && l.stopPropagation ? (u = l.stopPropagation) == null || u.call(l) : l && (l.cancelBubble = !0);
}
function G(l) {
  return Object.prototype.toString.call(l).replace(/\[object |]/g, "");
}
function kl(l) {
  return l.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function vt(l) {
  let u = G(l);
  if (u === "Object") {
    for (let o in l)
      if (l.hasOwnProperty(o)) {
        let e = G(l[o]);
        e === "String" ? l[o] = l[o].trim() : (e === "Object" || e === "Array") && vt(l[o]);
      }
  } else if (u === "Array")
    for (let o = 0, e = l.length; o < e; o++) {
      let n = G(l[o]);
      n === "String" ? l[o] = l[o].trim() : (n === "Array" || n === "Object") && vt(l[o]);
    }
  return l;
}
function Mt(l, u = []) {
  if (G(l) === "Array")
    return l.forEach((o, e) => {
      switch (G(o)) {
        case "Array":
        case "Object":
          Mt(o);
          break;
        default:
          l[e] = null;
      }
    }), l;
  if (G(l) === "Object") {
    for (let o in l)
      if (l.hasOwnProperty(o)) {
        let e = !0;
        for (let n of u)
          if (n === o) {
            e = !1;
            break;
          }
        if (e)
          switch (G(l[o])) {
            case "Array":
            case "Object":
              Mt(l[o]);
              break;
            default:
              l[o] = null;
          }
      }
    return l;
  } else
    return l;
}
const Oa = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
function Ma(l) {
  let u = new FormData();
  for (let o in l)
    l.hasOwnProperty(o) && l[o] !== null && u.append(o, l[o]);
  return u;
}
function Xe(l, u, o = !1) {
  if (!l || !u)
    return !1;
  let e, n = "notFoundC", a = function(s, c) {
    if (Array.isArray(s)) {
      if (G(c) === "Function" && c(s))
        return n = s, [];
      for (let f of s) {
        if (n !== "notFoundC")
          break;
        if (G(c) === "Function" && c(f) || f === c)
          return n = f, [s.indexOf(f)];
        if (G(f) === "Array" || G(f) === "Object") {
          let b = a(f, c);
          if (b !== void 0)
            return [s.indexOf(f), ...b];
        }
      }
    } else if (G(s) === "Object") {
      if (G(c) === "Function" && c(s))
        return n = s, [];
      for (let f in s) {
        if (n !== "notFoundC")
          break;
        if (s.hasOwnProperty(f)) {
          if (G(c) === "Function" && c(f) || s[f] === c)
            return n = s[f], [f];
          if (G(s[f]) === "Object" || G(s[f]) === "Array") {
            let b = a(s[f], c);
            if (b !== void 0)
              return [f, ...b];
          }
        }
      }
    }
  };
  return e = a(l, u), o ? e || !1 : n === "notFoundC" ? !1 : n;
}
function Pa(l, u) {
  for (let o = 0, e = u.length; o < e; o++)
    if (l === u[o])
      return !0;
  return !1;
}
function Fa(l, u = 2) {
  let o = new RegExp(`(^-?\\d+\\.\\d{${u}})(\\d+$)`), e = l && String(l) || "";
  return o.test(e) ? Number(e.replace(o, "$1")) : l;
}
function wl(l, u = {}, o = "get") {
  let e = document.createElement("form"), n = document.getElementsByTagName("body")[0];
  n.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", o);
  let a = l;
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
      if (f.test(l) && window.g[c + "URL"]) {
        a = window.g[c + "URL"] + l.replace(f, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", a), et(u)) {
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
function Ua(l, u = {}, o = "get") {
  if (u.hasOwnProperty("columns") && (u.columns === "" || u.columns === null || u.columns === void 0)) {
    Pe.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  wl(l, u, o);
}
function $a(l, u, o = !1) {
  let e;
  if (l && G(u) === "Array") {
    let n = localStorage.getItem(l);
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
function Ce(l) {
  return l != null && l !== "";
}
function Ra(l) {
  return /^-?\d+(.\d+)?$/.test(l);
}
function _l(l, u = !1, o = "") {
  return function(e, n) {
    var f, b;
    let a;
    if (Array.isArray(l)) {
      let d = [];
      for (let i of l)
        Ce((f = n.row) == null ? void 0 : f[i]) && d.push(n.row[i]);
      a = d.join(o);
    } else
      typeof l == "function" ? a = l(n) : a = (b = n.row) == null ? void 0 : b[l];
    let s = Ia(a), c = n.column._width;
    return a && s > c ? Ve(
      ea,
      {
        style: {
          width: "100%"
        },
        content: a,
        maxWidth: c * 2
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
    ) : Ve("span", u && !Ce(a) ? "--" : a);
  };
}
function Ka(l) {
  if (et(l)) {
    for (let u in l)
      if (l.hasOwnProperty(u) && Ce(l[u]))
        return !1;
    return !0;
  } else if (Array.isArray(l)) {
    for (let u of l)
      if (Ce(u))
        return !1;
    return !0;
  }
  return !Ce(l);
}
function Da(l) {
  return G(l) === "String" ? l.replace(/[^\x00-\xff]/g, "01").length : G(l) === "Number" ? (l += "", l.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function Ze({
  group: l,
  condition: u,
  key: o,
  val: e,
  childKey: n = "children"
}) {
  if (G(l) !== "Array" || G(u) !== "Function" || G(o) !== "String" || G(n) !== "String")
    return !1;
  l.forEach((a) => {
    u(a) && (G(e) === "Function" ? a[o] = e(a[o]) : a[o] = e), G(a[n]) === "Array" && a[n].length > 0 && Ze({
      group: a[n],
      condition: u,
      key: o,
      val: e,
      childKey: n
    });
  });
}
function Vl(l) {
  let u = sessionStorage.getItem("btnPermissions");
  return u ? u.split(",").indexOf(l) > -1 : !1;
}
function Cl(l) {
  return G(l) === "Number" && String(l) === "NaN";
}
function Na(l, u = !1, o = !1) {
  if (G(l) !== "Object")
    return l;
  let e = Object.assign(l, {}), n = "";
  for (let a in e)
    if (e.hasOwnProperty(a)) {
      let s = e[a];
      s === void 0 || s === "" || G(s) === "String" && s.trim() === "" || s === null || Cl(s) ? o ? u ? n += a + "=&" : e[a] = "" : delete e[a] : u && (n += a + "=" + s + "&");
    }
  return u ? n.length > 0 ? n.substring(0, n.length - 1) : "" : e;
}
function Pt(l) {
  let u = {};
  if (Array.isArray(l)) {
    u = [];
    for (let o of l)
      Array.isArray(o) || et(o) ? u.push(Pt(o)) : Ce(o) && u.push(o);
  } else if (et(l))
    for (let o in l)
      l.hasOwnProperty(o) && (Array.isArray(l[o]) || et(l[o]) ? u[o] = Pt(l[o]) : Ce(l[o]) && (u[o] = l[o]));
  return u;
}
function Ea(l) {
  const u = window.open();
  if (u) {
    u.document.write(l);
    let o = setTimeout(() => {
      u.print(), window.clearTimeout(o), o = null;
    }, 10);
  }
}
function Al(l) {
  let u = [], o = l;
  for (; l.previousSibling && (l = l.previousSibling); )
    l.nodeType === 1 && u.push(l);
  for (; o.nextSibling && (o = o.nextSibling); )
    o.nodeType === 1 && u.push(o);
  return u;
}
const za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Mt,
  dataFilterOrToUrl: Na,
  decimalDigitsLimit: Fa,
  downloadFileByFormSubmit: wl,
  fileExport: Ua,
  findCollection: Xe,
  formDataHeadConfig: Oa,
  getColumnsKeys: $a,
  hasPermission: Vl,
  htmlPrint: Ea,
  isEmptyValue: Ka,
  isNaN: Cl,
  isNumberValue: Ra,
  isValidValue: Ce,
  myTypeof: G,
  oneOf: Pa,
  removeEmptyValue: Pt,
  setValByOption: Ze,
  siblingElems: Al,
  stringLength: Da,
  toFormData: Ma,
  toLine: kl,
  tooltipManual: _l,
  trimObj: vt
}, Symbol.toStringTag, { value: "Module" })), Ga = { class: "groupBoxRP" }, Ha = ["onClick"], Wa = /* @__PURE__ */ ue({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(l) {
    const u = oa(), o = l;
    function e(a) {
      return (a == null ? void 0 : a.path) === o.pathName ? "active" : "";
    }
    function n(a, s) {
      var d, i, v, g, A, y, w, k;
      (d = a == null ? void 0 : a.preventDefault) == null || d.call(a);
      let c = a == null ? void 0 : a.target;
      if (s && !s.children && !c.classList.contains("active")) {
        u.push(s.path);
        return;
      }
      let f = c.parentNode, b = Al(f);
      for (let V of b) {
        (v = (i = V == null ? void 0 : V.classList) == null ? void 0 : i.remove) == null || v.call(i, "open");
        const S = (g = V == null ? void 0 : V.querySelectorAll) == null ? void 0 : g.call(V, ".open");
        if (S && Array.isArray(S))
          for (let B of S)
            (y = (A = B == null ? void 0 : B.classList) == null ? void 0 : A.remove) == null || y.call(A, "open");
      }
      (k = (w = f == null ? void 0 : f.classList) == null ? void 0 : w.toggle) == null || k.call(w, "open");
    }
    return (a, s) => {
      const c = q("sideMenuGroup", !0);
      return L(), K("ul", Ga, [
        (L(!0), K(ge, null, _e(o.data, (f, b) => (L(), K(ge, {
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
            }, E(f.name || "-- no name --"), 15, Ha),
            f.children ? (L(), X(c, {
              key: 0,
              data: f.children,
              "path-name": o.pathName
            }, null, 8, ["data", "path-name"])) : re("", !0)
          ], 2)) : re("", !0)
        ], 64))), 128))
      ]);
    };
  }
}), ja = { class: "menuListR" }, Ja = /* @__PURE__ */ ue({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(l, { emit: u }) {
    const o = l, e = u, n = yl(), a = W(!0), s = W(), c = W(), f = N(() => a.value ? I("r.hideMenu") : I("r.showMenu")), b = N(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    Wl(() => {
      let v = localStorage.getItem("menuDisplayR") || "";
      v !== "" ? a.value = JSON.parse(v) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), we(
      () => n.path,
      (v) => {
        s.value = v, Fe(i);
      },
      { immediate: !0 }
    );
    function d() {
      a.value = !a.value, localStorage.setItem("menuDisplayR", JSON.stringify(a.value)), e("on-change", a.value);
    }
    function i() {
      var g, A, y, w, k;
      let v = c.value.querySelectorAll(".dropItemRP");
      for (let V of v)
        (g = V == null ? void 0 : V.querySelector) != null && g.call(V, ".active") && !((y = (A = V.classList) == null ? void 0 : A.contains) != null && y.call(A, "open")) && ((k = (w = V.classList) == null ? void 0 : w.add) == null || k.call(w, "open"));
    }
    return (v, g) => {
      const A = q("Icon");
      return L(), K("div", {
        ref_key: "menuRef",
        ref: c,
        class: "menuBoxRP"
      }, [
        fe(M("div", ja, [
          j(Wa, {
            data: o.data,
            pathName: p(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [ye, p(a)]
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
}), qa = ["title"], Bl = /* @__PURE__ */ ue({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(l, { emit: u }) {
    const o = u, e = l;
    function n(a) {
      e.disabled || o("click", a);
    }
    return (a, s) => {
      const c = q("Icon"), f = Et("has");
      return fe((L(), K("div", {
        class: Se(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || p(I)("r.button")
      }, [
        j(c, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, qa)), [
        [f, e.has]
      ]);
    };
  }
}), Ya = { class: "contentX" }, Xa = { class: "arrowA" }, Ft = /* @__PURE__ */ ue({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(l) {
    const u = l, o = W(!0), e = N(() => o ? "background:" + u.bg || "transparent" : "");
    return (n, a) => {
      const s = q("Icon");
      return L(), K("div", {
        style: le(p(e))
      }, [
        fe(M("div", Ya, [
          Te(n.$slots, "default")
        ], 512), [
          [ye, p(o)]
        ]),
        M("div", Xa, [
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
}), Qa = { class: "contentZ" }, Za = /* @__PURE__ */ ue({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: u }) {
    const o = l, e = u, n = N({
      get() {
        return o.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), a = N(() => n.value ? "background:" + o.bg : "");
    return (s, c) => (L(), K("div", {
      style: le(p(a))
    }, [
      fe(M("div", Qa, [
        Te(s.$slots, "default")
      ], 512), [
        [ye, p(n)]
      ])
    ], 4));
  }
});
let Ut = [], $t = [];
const en = function(l) {
  l && l.beforeEach ? l.beforeEach(() => {
    Ut.map((u) => {
      window.clearTimeout(u);
    }), $t.map((u) => {
      window.clearInterval(u);
    }), Ut.length = 0, $t.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Me = function(l, u) {
  let o = window.setTimeout(l, u);
  return Ut.push(o), o;
}, tn = function(l, u) {
  let o = window.setInterval(l, u);
  return $t.push(o), o;
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
  setup(l, { emit: u }) {
    const o = u, e = l;
    let n = !1;
    const a = N({
      get() {
        return e.modelValue;
      },
      set(b) {
        o("update:modelValue", b);
      }
    }), s = N({
      get() {
        return e.open;
      },
      set(b) {
        o("on-toggle", b);
      }
    }), c = N(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function f() {
      n || (n = !0, o("on-search", a.value), Me(() => {
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
            "onUpdate:modelValue": d[0] || (d[0] = (g) => Oe(a) ? a.value = g : null),
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
          ve(E(p(I)("r.adSearch")), 1)
        ], 4), [
          [ye, e.showBtn]
        ])
      ], 4);
    };
  }
}), an = { class: "tabSetF" }, nn = { class: "topCheck" }, Sl = /* @__PURE__ */ ue({
  __name: "TableSetting",
  props: {
    modelValue: { default: () => [] },
    sKey: {},
    top: { default: "30px" },
    right: { default: "0" },
    width: { default: "150px" },
    bg: { default: () => Re().tableSettingBg },
    defaultCheck: { type: Boolean, default: !1 },
    storage: { default: "localStorage" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: u }) {
    var w, k, V, S, B;
    const o = u, e = l, n = W(!0), a = W(!1), s = W(!1), c = W([]), f = N(() => {
      var x;
      let O = I("r.unknown");
      return ((x = e.modelValue) == null ? void 0 : x.length) > c.value.length && (c.value = ie(e.modelValue)), c.value.map((C) => {
        let m = { label: (C == null ? void 0 : C.title) || O };
        return C != null && C.disableShowSetting && (m.disabled = !0), m;
      });
    }), b = N(() => f.value.filter((O) => O == null ? void 0 : O.disabled)), d = N({
      get() {
        var O, x;
        return (x = (O = e.modelValue) == null ? void 0 : O.map) == null ? void 0 : x.call(O, (C) => (C == null ? void 0 : C.title) || I("r.unknown"));
      },
      set(O) {
        let x = c.value.filter((C) => {
          for (let m of O)
            if (m === (C == null ? void 0 : C.title))
              return !0;
          return !1;
        });
        o("update:modelValue", x);
      }
    }), i = (B = (S = (V = (k = (w = bt()) == null ? void 0 : w.appContext) == null ? void 0 : k.config) == null ? void 0 : V.globalProperties) == null ? void 0 : S.$i18n) == null ? void 0 : B.locale;
    Ee(() => {
      let O = I("r.unknown"), x;
      i ? x = window[e.storage].getItem(e.sKey + "_" + i) : x = window[e.storage].getItem(e.sKey), x ? d.value = JSON.parse(decodeURI(x)) : e.defaultCheck && (d.value = e.modelValue.filter((C) => C == null ? void 0 : C.showSettingCheck).map((C) => (C == null ? void 0 : C.title) || O));
    });
    function v(O) {
      O.length === f.value.length ? (n.value = !1, a.value = !0) : O.length > b.value.length ? (n.value = !0, a.value = !1) : (n.value = !1, a.value = !1);
    }
    we(() => d.value, v, {
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
    return (O, x) => {
      const C = q("Icon"), m = q("Checkbox"), F = q("CheckboxGroup");
      return L(), K("div", an, [
        M("div", {
          class: "tabSetBt",
          onClick: g
        }, [
          j(C, {
            type: "md-settings",
            size: "17"
          }),
          M("span", null, E(p(I)("r.tabSetting")), 1)
        ]),
        fe(M("div", {
          class: "tabSetCard",
          style: le({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          M("div", nn, [
            j(m, {
              indeterminate: p(n),
              modelValue: p(a),
              "onUpdate:modelValue": x[0] || (x[0] = (h) => Oe(a) ? a.value = h : null),
              onClick: St(y, ["prevent"])
            }, {
              default: Y(() => [
                ve(E(p(I)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue"]),
            M("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: A
            }, E(p(I)("r.confirm")), 1)
          ]),
          j(F, {
            modelValue: p(d),
            "onUpdate:modelValue": x[1] || (x[1] = (h) => Oe(d) ? d.value = h : null)
          }, {
            default: Y(() => [
              (L(!0), K(ge, null, _e(p(f), (h, U) => (L(), X(m, {
                class: "setItem",
                label: h && h.label,
                key: "tabSet_" + e.sKey + U,
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
let it = !1;
function Rt({
  height: l,
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
  const v = (...k) => ze.apply(this, k);
  let A = (l && Number(l) - 90 > 100 ? Number(l) - 90 + "px" : 0) || "100px", y = G(e) === "String";
  const w = typeof e == "function";
  He.warning({
    width: u,
    footerHide: !0,
    render: () => Ve(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: A
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
                Ve("span", o || v("r.info.title")),
                Ve(
                  Ct,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      it || (He.remove(), s && G(s) === "Function" && s());
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
                  textAlign: y ? "center" : "left"
                }
              },
              [
                Ve("i", {
                  class: y && !b ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ve("div", { class: "msgBoxConO" }, w ? [e(Ve)] : e || v("r.info.text"))
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
                  Ct,
                  {
                    class: "okBtN",
                    onClick(k) {
                      var V, S, B, O, x, C, m, F, h;
                      if (n && typeof n == "function") {
                        const U = n();
                        if (U && G(U) === "Promise") {
                          it = !0;
                          const P = (k == null ? void 0 : k.currentTarget) || (k == null ? void 0 : k.target);
                          P && ((S = (V = P.classList) == null ? void 0 : V.add) == null || S.call(V, "ivu-btn-loading"), (O = (B = P.nextSibling) == null ? void 0 : B.setAttribute) == null || O.call(B, "disabled", "disabled"), (h = (F = ((m = (C = (x = P.parentElement) == null ? void 0 : x.parentElement) == null ? void 0 : C.querySelector) == null ? void 0 : m.call(C, ".titleN .closeN")).classList) == null ? void 0 : F.add) == null || h.call(F, "disabled")), Promise.resolve(U).then(() => {
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
                    Ve("span", c || v("r.confirm"))
                  ]
                ),
                Ve(
                  Ct,
                  {
                    class: ["cancelBtN", !i && "hide"],
                    onClick() {
                      it || (He.remove(), G(a) === "Function" && a && a());
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
let Ye = 0, ut = document.createElement("div");
ut.setAttribute("class", "spinModal");
ut.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ut);
};
function ol(l) {
  l ? ut.classList.add("show") : ut.classList.remove("show");
}
function xl(l) {
  let u = Ye;
  l ? Ye++ : Ye > 0 && Ye--, u !== Ye && (Ye === 0 ? ol(!1) : u === 0 && ol(!0));
}
const on = window.location.origin;
let gt = null;
const il = (...l) => ze.apply(gt, l);
let Ue = Lt.create({
  baseURL: on,
  withCredentials: !0
  // 允许携带cookie
});
function sn() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Ue.interceptors.request.use(
  (l) => l,
  (l) => Promise.reject(l)
);
function sl() {
  var l, u;
  if (Ue.store)
    if (typeof Ue.store == "function") {
      const o = Ue.store();
      o.logout && o.logout();
    } else
      (u = (l = Ue.store) == null ? void 0 : l.dispatch) == null || u.call(l, "logout");
  else
    sn();
}
Ue.interceptors.response.use(
  (l) => {
    var u, o;
    return gt && (((u = l == null ? void 0 : l.data) == null ? void 0 : u.code) === 403 || ((o = l == null ? void 0 : l.data) == null ? void 0 : o.code) === 409) && Rt({
      content: il("r.http." + l.data.code),
      onOk: sl
    }), l;
  },
  (l) => {
    var u, o;
    return gt && (((u = l == null ? void 0 : l.response) == null ? void 0 : u.status) === 403 || ((o = l == null ? void 0 : l.response) == null ? void 0 : o.status) === 409) && Rt({
      content: il("r.http." + l.response.status),
      onOk: sl
    }), console.warn("请求出错：", l), Promise.reject(l);
  }
);
function Ge(l, u, o, e) {
  e && e.spin && xl(!1);
  let n = !0, a = l && l.data;
  if (a) {
    o = o || [];
    for (let s of o)
      a = a[s], n = n && a;
    return n ? a : (u && console.warn(u), !1);
  }
  return u && console.warn(u), !1;
}
function rn(l, u, o, e, n, a, s) {
  return new Promise((c, f) => {
    switch (l) {
      case "get":
        Ue.get(u, { params: o }).then((d) => {
          let i = Ge(d, e, n, a);
          i ? c(i) : f(d);
        }).catch((d) => {
          Ge({}, e, n, a), f(d);
        });
        break;
      case "delete":
        let b = s ? "params" : "data";
        Ue.delete(u, { [b]: o }).then((d) => {
          let i = Ge(d, e, n, a);
          i ? c(i) : f(d);
        }).catch((d) => {
          Ge({}, e, n, a), f(d);
        });
        break;
      case "post":
        Ue.post(u, o, a).then((d) => {
          let i = Ge(d, e, n, a);
          i ? c(i) : f(d);
        }).catch((d) => {
          Ge({}, e, n, a), f(d);
        });
        break;
      case "put":
        Ue.put(u, o, a).then((d) => {
          let i = Ge(d, e, n, a);
          i ? c(i) : f(d);
        }).catch((d) => {
          Ge({}, e, n, a), f(d);
        });
        break;
    }
  });
}
function ct(l, u, o = {}, e, n, a, s) {
  return new Promise((c, f) => {
    var b;
    if (u) {
      a && a.spin && xl(!0);
      let d = u;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let A = Object.keys(g).filter((y) => {
          var w;
          return ((w = y == null ? void 0 : y.indexOf) == null ? void 0 : w.call(y, "URL")) > -1;
        }).map((y) => {
          var w;
          return (w = y.replace) == null ? void 0 : w.call(y, "URL", "");
        });
        for (let y of A) {
          let w = new RegExp("^/" + y + "(?=/.*$)", "i");
          if (w.test(u) && g[y + "URL"]) {
            d = g[y + "URL"] + u.replace(w, "");
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
      let v = l.toLowerCase();
      rn(v, d, i, e, n, a, s).then((g) => {
        c(g);
      }).catch((g) => {
        f(g);
      });
    } else
      console.error("没有请求地址:url"), f("没有请求地址:url");
  });
}
const De = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(l, u) {
    Ue.store = l, gt = u.config.globalProperties;
  },
  post(l, u, o, e, n) {
    return new Promise((a, s) => {
      ct("post", l, u, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  put(l, u, o, e, n) {
    return new Promise((a, s) => {
      ct("put", l, u, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  get(l, u, o, e, n) {
    return new Promise((a, s) => {
      ct("get", l, u, o, e, n).then((c) => {
        a(c);
      }).catch((c) => {
        s(c);
      });
    });
  },
  delete(l, u, o, e, n, a = !0) {
    return new Promise((s, c) => {
      ct("delete", l, u, o, e, n, a).then((f) => {
        s(f);
      }).catch((f) => {
        c(f);
      });
    });
  },
  all: Lt.all,
  spread: Lt.spread,
  config: Ue
}, un = { class: "pageProSize" }, Tl = /* @__PURE__ */ ue({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var l;
      return ((l = Re()) == null ? void 0 : l.pageSizes) || [10, 20, 50, 100];
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(l, { emit: u }) {
    const o = u, e = l, n = N({
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
    return (s, c) => {
      const f = q("Page"), b = q("Option"), d = q("Select");
      return L(), K("div", {
        class: Se(["pagePro", { pageProDefault: e.size === "default" }])
      }, [
        j(f, {
          modelValue: p(n),
          "onUpdate:modelValue": c[0] || (c[0] = (i) => Oe(n) ? n.value = i : null),
          "page-size": p(a),
          total: e.total,
          size: e.size,
          "page-size-opts": e.pageSizeOpts,
          disabled: e.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        M("div", un, [
          j(d, {
            modelValue: p(a),
            "onUpdate:modelValue": c[1] || (c[1] = (i) => Oe(a) ? a.value = i : null),
            size: e.size,
            transfer: e.transfer,
            disabled: e.disabled
          }, {
            default: Y(() => [
              (L(!0), K(ge, null, _e(e.pageSizeOpts, (i) => (L(), X(b, {
                value: i,
                key: i
              }, {
                default: Y(() => [
                  ve(E(i) + " " + E(p(I)("r.page")), 1)
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
}), dn = {
  class: "btTablePage fullHeight flexColumnBox",
  ref: "tableBox"
}, cn = { class: "topBtn" }, fn = { class: "tableContainer growFlexItem" }, pn = { class: "fullHeight relativeBox" }, mn = {
  ref: "tableContainerLOI",
  class: "fullFlowContent"
}, hn = { class: "pageContainer" }, yn = 300, Kt = /* @__PURE__ */ ue({
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
    usePagePro: { type: Boolean, default: () => Re().btTablePageUsePagePro },
    pageSize: { default: 10 },
    pageComponentSize: { default: "default" },
    noElevator: { type: Boolean, default: !1 }
  },
  emits: ["on-selection-change", "on-data-change"],
  setup(l, { expose: u, emit: o }) {
    const e = o;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...ta });
    const a = l, s = Re().pageSizes || [10, 20, 50, 100], c = W(a.data), f = W(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), b = W(1), d = W(0);
    let i = [], v, g, A = a.orderKey, y = a.orderDefault;
    const w = N(() => {
      for (let R of a.columns)
        if (R != null && R.fixed)
          return !0;
      return !1;
    }), k = N(() => a.selectionFixed || w.value), V = N(() => {
      let R = {
        ...a.searchData,
        current: b.value,
        size: f.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? R[y] = kl(A) : a.orderKeyFormat === "camelcase" && (R[y] = xa(A))), R;
    }), S = N(() => {
      let R = a.columns.filter(($) => $ && $.type !== "selection");
      if (a.selection || a.radio) {
        let $;
        a.radio ? $ = {
          title: " ",
          width: 65,
          render: (he, pe) => Ve(la, {
            modelValue: pe.row.btChecked
          })
        } : $ = {
          type: "selection",
          width: 60
        }, a.selectionFixed && ($.fixed = a.selectionFixed), R.unshift($);
      }
      return R.forEach(($) => {
        $ && (a.sortable === "custom" ? $.key && $.sortable !== !0 && $.sortable !== !1 && ($.sortable = "custom") : $.sortable = !1, $.align || ($.align = "center"));
      }), a.tableEmptyTdHandle && R.forEach(($) => {
        $ != null && $.key && $.render === void 0 && ($.tooltip ? $.render = _l($.key, !0) : $.render = (he, pe) => {
          let ke = pe.row[$.key];
          return he("span", ke === "" || ke === null || ke === void 0 ? "--" : ke);
        });
      }), R;
    }), B = N({
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
    }), O = N(() => i.map((R) => R == null ? void 0 : R.id)), x = N(() => i.map((R) => R == null ? void 0 : R.btKey)), C = W();
    we(() => a.searchData, m, { deep: !0 }), we(
      () => a.orderDefault,
      (R) => {
        y = R;
      }
    ), we(
      () => a.orderKey,
      (R) => {
        A = R;
      }
    );
    function m() {
      b.value = 1, Ke();
    }
    function F() {
      a.initData && Ke();
    }
    function h(R) {
      c.value.unshift(ie(R)), Me(() => {
        var $, he;
        (he = ($ = C.value) == null ? void 0 : $.clickCurrentRow) == null || he.call($, 0);
      }, 100);
    }
    function U(R, $, he) {
      let pe = null;
      if ($ ? pe = g : typeof $ == "number" && (pe = $), pe !== null) {
        let ke = c.value[pe];
        for (let ee in R)
          R.hasOwnProperty(ee) && (ke[ee] = R[ee]);
        he && Me(() => {
          var ee, Le;
          (Le = (ee = C.value) == null ? void 0 : ee.clickCurrentRow) == null || Le.call(ee, pe);
        }, 10);
      }
    }
    function P(R) {
      c.value.splice(R, 1), Me(() => {
        var $, he;
        (he = ($ = C.value) == null ? void 0 : $.clickCurrentRow) == null || he.call($, 0);
      }, 100);
    }
    function z(R, $) {
      var he, pe;
      R.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((pe = (he = C.value) == null ? void 0 : he.toggleSelect) == null || pe.call(he, $));
    }
    function Q(R, $) {
      v = $.btKey, g = Number($.btKey.split("-")[1]), a.radio && (c.value[g].btChecked = !0);
    }
    function ne(R) {
      if (a.radio)
        for (let $ of B.value)
          $ != null && $.btKey && $.btKey !== v && (c.value[Number($.btKey.split("-")[1])].btChecked = !1);
      i = R, e("on-selection-change", R);
    }
    function be() {
      return ie(i);
    }
    function Ae() {
      Ke();
    }
    function J(R) {
      f.value = R, localStorage.setItem("btPageSize", String(R)), b.value === 1 && Ke();
    }
    function me({ key: R, order: $ }) {
      y === "normal" ? (A = a.orderKey, y = a.orderDefault) : (A = R, y = $), b.value = 1, ce();
    }
    function de(R) {
      var he, pe, ke, ee, Le, je, Je, at;
      const $ = R;
      if (typeof $ == "number")
        D(), g = $, v = (pe = (he = B.value) == null ? void 0 : he[$]) == null ? void 0 : pe.btKey, (ee = (ke = C.value) == null ? void 0 : ke.clickCurrentRow) == null || ee.call(ke, $);
      else if (Array.isArray($)) {
        if (a.radio || !a.selection)
          return;
        D();
        for (let Ne of $)
          (je = (Le = C.value) == null ? void 0 : Le.clickCurrentRow) == null || je.call(Le, Ne);
      } else if (typeof $ == "function")
        for (let Ne = 0; Ne < B.value.length; Ne++) {
          const wt = B.value[Ne];
          $(wt) && ((at = (Je = C.value) == null ? void 0 : Je.clickCurrentRow) == null || at.call(Je, Ne));
        }
    }
    function D() {
      var R, $;
      if (a.radio) {
        if (x.value.length > 0 && B.value.length > 0) {
          let he = x.value[0].split("-")[1];
          B.value[he].btChecked = !1;
        }
      } else
        ($ = (R = C.value) == null ? void 0 : R.selectAll) == null || $.call(R, !1);
      i.length > 0 && (i = [], e("on-selection-change", [])), v = null, g = null;
    }
    function oe() {
      c.value = [], D(), b.value = 1, d.value = 0;
    }
    function ce(R, $, he) {
      return new Promise((pe) => {
        R && (y = R), $ && (A = $), a.url ? De[a.method](a.url, V.value, "", [], { spin: a.getDataLoading }).then((ke) => {
          var Le, je;
          let ee;
          he || D(), typeof a.dataHandler == "function" ? ee = a.dataHandler(ke) : ee = ke, ee.data ? (ee.data.records || ee.data.records === null ? c.value = ee.data.records || [] : ee.data.page ? (ee.data.page.records || ee.data.page.records === null) && (c.value = ee.data.page.records || []) : ee.data.data ? (ee.data.data.records || ee.data.data.records === null) && (c.value = ee.data.data.records || []) : c.value = ee.data, d.value = ((Le = ee.data.page) == null ? void 0 : Le.total) || ((je = ee.data.data) == null ? void 0 : je.total) || ee.data.total || ee.total || 0, d.value === 0 && b.value > 1 && c.value && c.value.length === 0 ? b.value = 1 : b.value > 1 && d.value <= (b.value - 1) * f.value && (b.value--, Fe(function() {
            ce(R, $);
          })), e("on-data-change", ee), pe(ee)) : (console.warn("请求返回数据有误，无法使用"), oe(), e("on-data-change", ee));
        }).catch((ke) => {
          D(), oe(), e("on-data-change", ke);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function Ke(R, $, he) {
      a.radio && (R || a.rowClickNum !== -1) ? ce($, he, R).then(() => {
        c.value.length > 0 && Me(() => {
          var pe, ke, ee, Le;
          R ? (ke = (pe = C.value) == null ? void 0 : pe.clickCurrentRow) == null || ke.call(pe, g || 0) : (Le = (ee = C.value) == null ? void 0 : ee.clickCurrentRow) == null || Le.call(ee, a.rowClickNum);
        }, 10);
      }) : ce();
    }
    return Ee(F), u({
      selectedIds: O,
      addRow: h,
      setRowData: U,
      deleteRow: P,
      getSelected: be,
      selectRow: de,
      clearSelect: D,
      clearTableData: oe,
      getTableData: ce,
      getDataAndClickRow: Ke
    }), (R, $) => {
      const he = q("Table"), pe = q("Page");
      return L(), K("div", dn, [
        fe(M("div", cn, [
          Te(R.$slots, "tableSetting"),
          Te(R.$slots, "topMsg"),
          Te(R.$slots, "topBtnGroup")
        ], 512), [
          [ye, a.showTopRow]
        ]),
        M("div", fn, [
          M("div", pn, [
            M("div", mn, [
              j(he, lt({
                ref_key: "tableRef",
                ref: C
              }, R.$attrs, {
                height: p(k) && yn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !p(k), lightHeadO: a.lightHead },
                columns: p(S),
                data: p(B),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: Q,
                onOnSelectionChange: ne,
                onOnSortChange: me,
                onOnRowClick: z
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        fe(M("div", hn, [
          a.usePagePro ? (L(), X(Tl, {
            key: 0,
            modelValue: p(b),
            "onUpdate:modelValue": $[0] || ($[0] = (ke) => Oe(b) ? b.value = ke : null),
            total: p(d),
            "page-size": p(f),
            "page-size-opts": p(s),
            size: a.pageComponentSize,
            onOnChange: Ae,
            onOnPageSizeChange: J
          }, null, 8, ["modelValue", "total", "page-size", "page-size-opts", "size"])) : (L(), X(pe, {
            key: 1,
            modelValue: p(b),
            "onUpdate:modelValue": $[1] || ($[1] = (ke) => Oe(b) ? b.value = ke : null),
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
          [ye, !a.noPage]
        ])
      ], 512);
    };
  }
}), Ll = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = N({
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
    }), a = N({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(d) {
        o("update:modelValue", {
          key: n.value,
          val: d
        });
      }
    }), s = N(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), c = N(() => ({ width: e.itemWidth + "px" }));
    function f(d) {
      d != null && d.target && d.target.value !== void 0 && b({
        key: n.value,
        val: d.target.value
      });
    }
    const b = ml((d) => {
      o("on-change", d);
    }, 500);
    return (d, i) => {
      const v = q("Option"), g = q("Select"), A = q("Input");
      return L(), K("div", null, [
        j(g, {
          modelValue: p(n),
          "onUpdate:modelValue": i[0] || (i[0] = (y) => Oe(n) ? n.value = y : null),
          style: le(p(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: Y(() => [
            (L(!0), K(ge, null, _e(e.selectOption, (y, w) => (L(), X(v, {
              value: y == null ? void 0 : y.val,
              label: y == null ? void 0 : y.label,
              key: "selectInputOp" + (y == null ? void 0 : y.value) + w,
              style: le({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        j(A, {
          modelValue: p(a),
          "onUpdate:modelValue": i[1] || (i[1] = (y) => Oe(a) ? a.value = y : null),
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
var vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gn(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Il = { exports: {} };
(function(l, u) {
  (function(o, e) {
    l.exports = e();
  })(vn, function() {
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
          var w = document.body || document.head, k = document.createElement("script");
          k.type = "text/javascript", k.src = "https://webapi.amap.com/ui/" + y + "/main.js", k.onerror = function(V) {
            c.AMapUI = a.failed, g("请求 AMapUI 失败");
          }, k.onload = function() {
            if (c.AMapUI = a.loaded, A.length)
              window.AMapUI.loadUI(A, function() {
                for (var V = 0, S = A.length; V < S; V++) {
                  var B = A[V].split("/").slice(-1)[0];
                  window.AMapUI[B] = arguments[V];
                }
                for (v(); f.AMapUI.length; )
                  f.AMapUI.splice(0, 1)[0]();
              });
            else
              for (v(); f.AMapUI.length; )
                f.AMapUI.splice(0, 1)[0]();
          }, w.appendChild(k);
        } else
          c.AMapUI === a.loaded ? i.version && i.version !== s.AMapUI.version ? g("不允许多个版本 AMapUI 混用") : A.length ? window.AMapUI.loadUI(A, function() {
            for (var V = 0, S = A.length; V < S; V++) {
              var B = A[V].split("/").slice(-1)[0];
              window.AMapUI[B] = arguments[V];
            }
            v();
          }) : v() : i.version && i.version !== s.AMapUI.version ? g("不允许多个版本 AMapUI 混用") : f.AMapUI.push(function(V) {
            V ? g(V) : A.length ? window.AMapUI.loadUI(A, function() {
              for (var S = 0, B = A.length; S < B; S++) {
                var O = A[S].split("/").slice(-1)[0];
                window.AMapUI[O] = arguments[S];
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
          var A = s.Loca.version, y = s.AMap.version.startsWith("2"), w = A.startsWith("2");
          if (y && !w || !y && w)
            g("JSAPI 与 Loca 版本不对应！！");
          else {
            y = s.key, w = document.body || document.head;
            var k = document.createElement("script");
            k.type = "text/javascript", k.src = "https://webapi.amap.com/loca?v=" + A + "&key=" + y, k.onerror = function(V) {
              c.Loca = a.failed, g("请求 AMapUI 失败");
            }, k.onload = function() {
              for (c.Loca = a.loaded, v(); f.Loca.length; )
                f.Loca.splice(0, 1)[0]();
            }, w.appendChild(k);
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
          var A = i.key, y = i.version, w = i.plugins;
          A ? (window.AMap && location.host !== "lbs.amap.com" && g("禁止多种API加载方式混用"), s.key = A, s.AMap.version = y || s.AMap.version, s.AMap.plugins = w || s.AMap.plugins, c.AMap = a.loading, y = document.body || document.head, window.___onAPILoaded = function(V) {
            if (delete window.___onAPILoaded, V)
              c.AMap = a.failed, g(V);
            else
              for (c.AMap = a.loaded, o(i).then(function() {
                v(window.AMap);
              }).catch(g); b.length; )
                b.splice(0, 1)[0]();
          }, w = document.createElement("script"), w.type = "text/javascript", w.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + s.AMap.version + "&key=" + A + "&plugin=" + s.AMap.plugins.join(","), w.onerror = function(V) {
            c.AMap = a.failed, g(V);
          }, y.appendChild(w)) : g("请填写key");
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
          var k = [];
          if (i.plugins)
            for (y = 0; y < i.plugins.length; y += 1)
              s.AMap.plugins.indexOf(i.plugins[y]) == -1 && k.push(i.plugins[y]);
          d(function() {
            k.length ? window.AMap.plugin(k, function() {
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
})(Il);
var bn = Il.exports;
const ft = /* @__PURE__ */ gn(bn);
let Dt = { securityJsCode: "", key: "" };
function kn({ securityJsCode: l, key: u }) {
  Dt.securityJsCode = l, Dt.key = u;
}
function wn(l) {
  return Dt[l];
}
const Ol = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = N({
      get() {
        let B;
        return e.modelValue ? e.modelValue.name ? B = ie(e.modelValue) : B = {
          ...e.modelValue,
          name: null
        } : B = {
          name: null
        }, B;
      },
      set(B) {
        o("update:modelValue", ie(B));
      }
    }), a = N(() => st(e.width) ? e.width + "px" : e.width), s = N(() => st(e.height) ? e.height + "px" : e.height ? e.height : st(e.width) ? e.width * 0.66 + "px" : "200px"), c = N(() => ({
      width: a.value,
      position: "relative"
    })), f = N(() => ({
      width: a.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    we(
      () => e.modelValue,
      (B) => {
        if (B && B.lng && B.lat) {
          if (!y || !w)
            return;
          V({
            lng: B.lng,
            lat: B.lat,
            name: B.name
          });
        }
      }
    );
    const b = "mapId" + Math.floor(Math.random() * 1e9), d = W(null), i = W(null);
    let v;
    function g() {
      i.value && i.value.clientHeight < 10 || !i.value ? Me(g, 300) : Me(k, 100);
    }
    let A, y, w;
    function k() {
      ft.load({
        key: wn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((B) => {
        A = B, y = new A.Map(b).on("complete", () => {
          var x, C, m, F;
          w = new A.Geocoder(), (x = e.modelValue) != null && x.lng && ((C = e.modelValue) != null && C.lat) && V({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const O = (F = (m = d.value) == null ? void 0 : m.$el) == null ? void 0 : F.children;
          O && O.length > 1 && new A.AutoComplete({
            input: O[1]
          }).on("select", (h) => {
            var U, P, z;
            (U = h == null ? void 0 : h.poi) != null && U.name && ((P = h.poi.location) != null && P.lng && ((z = h.poi.location) != null && z.lat) ? (V({
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
    function V({ lng: B, lat: O, name: x }) {
      y.clearMap();
      let C = new A.LngLat(B, O), m = new A.Marker({
        map: y,
        position: C,
        draggable: !0
      });
      y.add(m), S(B, O), m.on("dragend", () => {
        let F = m.getPosition();
        n.value = {
          name: x || null,
          lng: F.lng,
          lat: F.lat
        }, S(B, O);
      }), m.on("click", (F) => {
        var h, U;
        v && v.open(y, (U = (h = F == null ? void 0 : F.target) == null ? void 0 : h.getPosition) == null ? void 0 : U.call(h));
      }), y.setFitView();
    }
    function S(B, O) {
      w.getAddress([B, O], (x, C) => {
        x === "complete" && C.info === "OK" && C.regeocode && C.regeocode.formattedAddress ? v = new A.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + C.regeocode.formattedAddress + "</div>",
          offset: new A.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (v = null, console.warn("地图获取位置信息失败", C));
      });
    }
    return Ee(g), jl(() => {
      y && (y.destroy(), ft == null || ft.reset(), y = null, w = null, v = null);
    }), (B, O) => (L(), K("div", {
      style: le(p(c)),
      class: "containerIKJ"
    }, [
      j(p(aa), {
        ref_key: "mapInputRef",
        ref: d,
        modelValue: p(n).name,
        "onUpdate:modelValue": O[0] || (O[0] = (x) => p(n).name = x),
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
var fl;
const Ml = /* @__PURE__ */ ue({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (fl = window == null ? void 0 : window.g) != null && fl.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = W([]), a = N({
      get() {
        let d = e.modelValue;
        return Array.isArray(d) ? ie(d) : st(d) ? Ot({
          group: n.value,
          condition: (i) => (i == null ? void 0 : i.value) === d,
          pathKey: "value"
        }) : zt(d) ? d.split(e.separator) : [];
      },
      set(d) {
        if (e.onlyLastVal)
          xe(d) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", mt(d));
        else {
          if (rt(e.modelValue, d))
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
      De.get(e.url).then((d) => {
        var v;
        let i = null;
        (v = d == null ? void 0 : d.data) != null && v.records ? i = d.data.records : d != null && d.data ? i = d.data : d && (i = d), i ? (typeof e.optionFilter == "function" && G(e.optionFilter) === "Function" && (i = e.optionFilter(i)), n.value = c(i)) : console.warn("级联数据错误，不能使用");
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
      return e.onlyLastLabel ? mt(d) : d.join(e.separator);
    }
    function b(d, i) {
      let v = "";
      xe(i) || (v = i.map((g) => g == null ? void 0 : g.label).join(e.separator)), o("on-label-change", v);
    }
    return Ee(s), (d, i) => {
      const v = q("Cascader");
      return L(), X(v, {
        data: p(n),
        modelValue: p(a),
        "onUpdate:modelValue": i[0] || (i[0] = (g) => Oe(a) ? a.value = g : null),
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
}), Pl = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = W(), a = N({
      get() {
        if (e.modelValue && (st(e.modelValue) || zt(e.modelValue))) {
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
          let f = mt(c), b = "", d = "";
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
    return (c, f) => (L(), X(p(ia), lt(c.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: n,
      modelValue: p(a),
      "onUpdate:modelValue": f[0] || (f[0] = (b) => Oe(a) ? a.value = b : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(I)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Qe(l) {
  var s, c, f;
  const u = (...b) => ze.apply(this, b), o = u("r.closePreview"), e = u("r.fullImg");
  let n = xt(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${l}' alt='${e}' ><i class='ivu-icon ivu-icon-md-close' title='${o}' ></i></div>`, (c = (s = a.querySelector(".ivu-icon-md-close")) == null ? void 0 : s.addEventListener) == null || c.call(s, "click", function() {
    var d;
    let b = xt(document.getElementsByTagName("body"));
    (d = b == null ? void 0 : b.removeChild) == null || d.call(b, a);
  }), (f = n == null ? void 0 : n.appendChild) == null || f.call(n, a);
}
const _n = { class: "previewBoxM" }, Vn = { class: "imgLoading" }, Cn = /* @__PURE__ */ M("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), An = [
  Cn
], Bn = ["src", "alt"], Sn = { class: "deleteModal" }, xn = { class: "previewBoxM" }, Tn = {
  key: 0,
  class: "previewImg"
}, Ln = ["src", "alt"], In = { class: "deleteModal" }, On = { class: "customFileListM" }, Mn = {
  key: 0,
  class: "customFileListItem"
}, Pn = ["onClick", "title"], Fn = { class: "btBoxJ" }, Un = { class: "customFileListM" }, $n = {
  key: 0,
  class: "customFileListItem"
}, Rn = { class: "listLoading" }, Kn = /* @__PURE__ */ M("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Dn = [
  Kn
], Nn = ["onClick", "title"], En = { class: "btBoxJ" };
var pl;
const Fl = /* @__PURE__ */ ue({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (pl = window == null ? void 0 : window.g) != null && pl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = pt([]), a = pt([]), s = N(() => !e.manualUpload && e.showImg && d.value ? "img" : e.manualUpload && e.showImg && d.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !d.value) ? "list" : ""), c = N(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), f = N({
      get() {
        return e.manualUpload ? b.value : b.value.map((h) => ({ id: h }));
      },
      set(h) {
        e.manualUpload ? b.value = h || [] : b.value = (h == null ? void 0 : h.map((U) => U == null ? void 0 : U.id)) || [];
      }
    }), b = N({
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
          let U = xt(h);
          o("update:modelValue", U ?? null), o("on-change", U ?? null);
        } else
          o("update:modelValue", ie(h)), o("on-change", ie(h));
      }
    }), d = N(() => {
      let h;
      if (e.manualUpload ? h = f.value : h = a.value, !h)
        return !1;
      for (let U of h) {
        let P;
        if (e.manualUpload ? P = U == null ? void 0 : U.type : P = U == null ? void 0 : U.mimeType, !P || P && !(Bt(P) || P === "loading"))
          return !1;
      }
      return !0;
    });
    we(
      () => f.value,
      async (h) => {
        if (s.value === "localImg")
          h != null && h.length ? n.value = await v(h) : n.value = [];
        else if (h != null && h.length && s.value !== "localList") {
          let U = ie(h);
          const P = ie(a.value);
          for (let z of U)
            if ((z == null ? void 0 : z.name) === void 0)
              if (z.id) {
                const Q = Tt(P, (ne) => (ne == null ? void 0 : ne.id) === z.id);
                Q ? (z.name = Q.name, z.mimeType = Q.mimeType) : (z.mimeType = "loading", De.get(e.url + "/" + z.id).then((ne) => {
                  var be, Ae, J, me, de, D;
                  z.name = ((J = (Ae = (be = ne == null ? void 0 : ne.data) == null ? void 0 : be.returnValue) == null ? void 0 : Ae[0]) == null ? void 0 : J.name) || I("r.file") + el(h, z), z.mimeType = ((D = (de = (me = ne == null ? void 0 : ne.data) == null ? void 0 : me.returnValue) == null ? void 0 : de[0]) == null ? void 0 : D.mimeType) || "unknown", Jl(a);
                }).catch(() => {
                  z.name = I("r.file") + el(U, z);
                }));
              } else
                z.name = I("r.unknown");
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
      return (h == null ? void 0 : h.name) || (h == null ? void 0 : h.split) && mt(h.split("/")) || h;
    }
    async function v(h) {
      let U = [];
      for (let P of h) {
        let z = await At(P);
        U.push(z);
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
      return e.manualUpload ? (h == null ? void 0 : h.type) && Bt(h.type) : (h == null ? void 0 : h.id) && h.mimeType && Bt(h.mimeType);
    }
    function w(h) {
      if (e.manualUpload) {
        if (!h)
          return;
        At(h).then((U) => {
          Qe(U);
        });
      } else
        h != null && h.id && Qe(e.url + "/" + h.id + "/download?preview=true");
    }
    function k(h) {
      G(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : G(h) === "File" && At(h).then((U) => {
        Ta(h.name, U);
      });
    }
    function V(h) {
      var U, P;
      if (e.manualUpload) {
        if (h) {
          let z = bl(h.name);
          if ((U = e.format) != null && U.length && e.format.indexOf(z) < 0)
            return Pe(
              I("r.wrongFileType"),
              I("r.supportType") + (((P = e.format) == null ? void 0 : P.length) && String(e.format) || I("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && h.size > e.maxSize * 1024)
            return Pe(I("r.fileIsBig"), I("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let Q = f.value;
          Q == null || Q.push(h), f.value = Q;
        }
        return !1;
      } else
        return !0;
    }
    function S(h) {
      console.warn(h), Pe(I("r.uploadError"), "", "error");
    }
    function B(h, U, P) {
      var z, Q, ne, be, Ae, J;
      if ((h == null ? void 0 : h.code) === 0) {
        let me = f.value;
        U.id = (Q = (z = h.data) == null ? void 0 : z[0]) == null ? void 0 : Q.id, U.name = (be = (ne = h.data) == null ? void 0 : ne[0]) == null ? void 0 : be.name, U.mimeType = (J = (Ae = h.data) == null ? void 0 : Ae[0]) == null ? void 0 : J.mimeType, me == null || me.push(U), f.value = me;
      } else
        Pe(I("r.uploadFail"), (h == null ? void 0 : h.message) || "", "error");
    }
    function O() {
      Pe(I("r.fileIsBig"), I("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function x() {
      var h;
      Pe(
        I("r.wrongFileType"),
        I("r.supportType") + (((h = e.format) == null ? void 0 : h.length) && String(e.format) || I("r.none")),
        "warning"
      );
    }
    function C(h) {
      let U = h == null ? void 0 : h.id, P = h == null ? void 0 : h.mimeType;
      U && (G(P) === "String" && P.indexOf("image") > -1 ? Qe(e.url + "/" + U + "/download?preview=true") : window.open(e.url + "/" + U + "/download?preview=true"));
    }
    function m(h) {
      var P, z, Q;
      let U = (Q = (z = (P = h == null ? void 0 : h.response) == null ? void 0 : P.data) == null ? void 0 : z[0]) == null ? void 0 : Q.id;
      F(null, U);
    }
    function F(h, U) {
      if (!(!U && U !== 0) && !e.disabled && b.value.indexOf(U) !== -1) {
        const P = ie(b.value);
        let z = f.value;
        z == null || z.splice(P.indexOf(U), 1), f.value = z;
      }
    }
    return (h, U) => {
      var ne, be, Ae, J, me, de;
      const P = q("Button"), z = q("Upload"), Q = q("Icon");
      return L(), K("div", null, [
        j(z, {
          name: "files",
          action: p(c),
          "before-upload": V,
          "on-error": S,
          "on-success": B,
          "on-exceeded-size": O,
          "on-preview": C,
          "on-remove": m,
          "on-format-error": x,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((ne = p(f)) == null ? void 0 : ne.length) && ((be = p(f)) == null ? void 0 : be.length) >= e.length || !!e.disabled
        }, {
          default: Y(() => {
            var D, oe;
            return [
              j(P, {
                icon: "ios-cloud-upload-outline",
                class: Se({
                  disabledR: e.length && ((D = p(f)) == null ? void 0 : D.length) && ((oe = p(f)) == null ? void 0 : oe.length) >= e.length || !!e.disabled
                })
              }, {
                default: Y(() => [
                  ve(E(p(I)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        fe(M("div", _n, [
          (L(!0), K(ge, null, _e(p(a), (D) => (L(), K(ge, {
            key: D == null ? void 0 : D.id
          }, [
            !e.manualUpload && D && D.id !== null ? (L(), K("div", {
              key: 0,
              class: Se(["previewImg", { previewLoading: D.mimeType === "loading" }])
            }, [
              fe(M("div", Vn, An, 512), [
                [ye, D.mimeType === "loading"]
              ]),
              fe(M("img", {
                src: h.url + "/" + D.id + "/download?preview=true",
                alt: D.name
              }, null, 8, Bn), [
                [ye, D.mimeType !== "loading"]
              ]),
              fe(M("div", Sn, [
                j(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(I)("r.fView"),
                  onClick: (oe) => p(Qe)(e.url + "/" + D.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                j(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (oe) => F(oe, D.id),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ye, D.mimeType !== "loading"]
              ])
            ], 2)) : re("", !0)
          ], 64))), 128))
        ], 512), [
          [ye, p(s) === "img" && ((Ae = p(a)) == null ? void 0 : Ae.length)]
        ]),
        fe(M("div", xn, [
          (L(!0), K(ge, null, _e(p(n), (D, oe) => (L(), K(ge, {
            key: "manualImg" + oe
          }, [
            e.manualUpload && D ? (L(), K("div", Tn, [
              M("img", {
                src: D,
                alt: "manualImg" + oe
              }, null, 8, Ln),
              M("div", In, [
                j(Q, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ce) => p(Qe)(D),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"]),
                j(Q, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ce) => g(oe),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : re("", !0)
          ], 64))), 128))
        ], 512), [
          [ye, p(s) === "localImg" && ((J = p(n)) == null ? void 0 : J.length)]
        ]),
        fe(M("div", On, [
          (L(!0), K(ge, null, _e(p(f), (D, oe) => (L(), K(ge, {
            key: "manualItem" + oe
          }, [
            e.manualUpload && D ? (L(), K("p", Mn, [
              D.name ? (L(), X(Q, {
                key: 0,
                type: p(nl)(D.name)
              }, null, 8, ["type"])) : re("", !0),
              M("span", {
                class: Se(["upNameT", { previewName: y(D) }]),
                onClick: (ce) => k(D),
                title: p(I)("r.download")
              }, E(i(D)), 11, Pn),
              M("span", Fn, [
                y(D) ? (L(), X(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ce) => w(D),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : re("", !0),
                j(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ce) => g(oe),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : re("", !0)
          ], 64))), 128))
        ], 512), [
          [ye, p(s) === "localList" && ((me = p(f)) == null ? void 0 : me.length)]
        ]),
        fe(M("div", Un, [
          (L(!0), K(ge, null, _e(p(a), (D, oe) => (L(), K(ge, {
            key: "defaultItem" + oe
          }, [
            !e.manualUpload && D ? (L(), K("div", $n, [
              fe(M("div", Rn, Dn, 512), [
                [ye, D.mimeType === "loading"]
              ]),
              fe(j(Q, {
                type: p(nl)(D.name)
              }, null, 8, ["type"]), [
                [ye, D.mimeType !== "loading"]
              ]),
              fe(M("span", {
                class: Se(["upNameT", { previewName: y(D) }]),
                onClick: (ce) => A(D),
                title: p(I)("r.download")
              }, E(D.name || p(I)("r.file") + (oe + 1)), 11, Nn), [
                [ye, D.mimeType !== "loading"]
              ]),
              fe(M("span", En, [
                y(D) ? (L(), X(Q, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ce) => w(D),
                  title: p(I)("r.fView")
                }, null, 8, ["onClick", "title"])) : re("", !0),
                j(Q, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ce) => g(oe),
                  title: p(I)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [ye, D.mimeType !== "loading"]
              ])
            ])) : re("", !0)
          ], 64))), 128))
        ], 512), [
          [ye, p(s) === "list" && ((de = p(a)) == null ? void 0 : de.length)]
        ])
      ]);
    };
  }
}), zn = /* @__PURE__ */ M("div", { class: "bRoot" }, null, -1), Ul = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = W(!1), a = W(!1), s = W(!1), c = N({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(w) {
        o("update:modelValue", [w, f.value]), o("on-change", [w, f.value]);
      }
    }), f = N({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(w) {
        o("update:modelValue", [c.value, w]), o("on-change", [c.value, w]);
      }
    }), b = N(
      () => (c.value || "") + ((c.value || f.value) && " - " || "") + (f.value || "")
    ), d = W();
    Ee(() => {
      d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        s.value = !0;
      }), d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        s.value = !1;
      }), d.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (w) => {
        var k;
        !e.disabled && (c.value || f.value) && ((k = w == null ? void 0 : w.stopPropagation) == null || k.call(w), A());
      });
    });
    function i() {
      e.disabled || (n.value = !0);
    }
    function v(w) {
      c.value = w, n.value = !1, a.value = !0;
    }
    function g(w) {
      f.value = w, a.value = !1;
    }
    function A() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function y() {
      n.value = !1, a.value = !1, c.value && f.value === null && (c.value = null);
    }
    return (w, k) => {
      const V = q("DatePicker"), S = q("Icon"), B = q("Input");
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
            zn
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
              j(B, {
                class: "aRoot",
                modelValue: p(b),
                "onUpdate:modelValue": k[0] || (k[0] = (O) => Oe(b) ? b.value = O : null),
                readonly: "",
                placeholder: e.placeholder || p(I)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: Y(() => [
                  j(S, {
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
}), Gn = { class: "editor-pro-root" }, $l = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = pt(), a = N({
      get() {
        return e.modelValue;
      },
      set(d) {
        o("update:modelValue", d), o("on-change", d);
      }
    }), s = N(
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
    ), c = N(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(d, i) {
                let v = new FormData();
                v.append("files", d);
                const g = d.name, A = e.imgUploadUrl ?? "/node-serve/file";
                De.post(A, v, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((y) => {
                  if (y && y.data)
                    if (Array.isArray(y.data))
                      for (let w of y.data) {
                        const k = A + "/" + (w == null ? void 0 : w.id) + "/download";
                        i(k, g, k);
                      }
                    else {
                      const w = A + "/" + y.data.id + "/download";
                      i(w, g, w);
                    }
                }).catch(() => {
                  Pe(I("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(d, i) {
                let v = new FormData();
                v.append("files", d);
                const g = e.videoUploadUrl ?? "/node-serve/file";
                De.post(g, v, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((A) => {
                  if (A && A.data)
                    if (Array.isArray(A.data))
                      for (let y of A.data) {
                        const w = g + "/" + (y == null ? void 0 : y.id) + "/download";
                        i(w);
                      }
                    else {
                      const y = g + "/" + A.data.id + "/download";
                      i(y);
                    }
                }).catch(() => {
                  Pe(I("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), f = N(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function b(d) {
      n.value = d;
    }
    return we(
      () => e.disabled,
      (d) => {
        d ? n.value.disable() : n.value.enable();
      }
    ), ql(() => {
      n.value && n.value.destroy();
    }), (d, i) => (L(), K("div", Gn, [
      fe(j(p(sa), {
        class: "editor-pro-toolbar",
        editor: p(n),
        defaultConfig: p(s),
        mode: d.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [ye, !d.disabled]
      ]),
      j(p(ra), {
        class: "editor-pro-editor",
        modelValue: p(a),
        "onUpdate:modelValue": i[0] || (i[0] = (v) => Oe(a) ? a.value = v : null),
        defaultConfig: p(c),
        mode: d.mode,
        onOnCreated: b,
        style: le(p(f))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Hn = {
  key: 19,
  class: "formInfoTxtXN"
}, Wn = {
  key: 20,
  class: "formTitleTxtXN"
}, rl = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l;
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
      const v = q("InputNumber"), g = q("Input"), A = q("Option"), y = q("Select"), w = q("Radio"), k = q("Icon"), V = q("RadioGroup"), S = q("Checkbox"), B = q("CheckboxGroup"), O = q("DatePicker"), x = q("TimePicker"), C = q("FormItem");
      return e.item ? (L(), X(C, {
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
          }, tt({ _: 2 }, [
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
              (L(!0), K(ge, null, _e(e.item.options, (m, F) => (L(), X(A, {
                value: m.val,
                label: m.label || m.val,
                key: "option-" + e.item.key + F,
                disabled: !!m.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (L(), X(Ll, {
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
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (L(), X(Pl, {
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
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (L(), X(Ml, {
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
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (L(), X(w, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[11] || (i[11] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: i[12] || (i[12] = (m) => a(m, e.item))
          }, {
            default: Y(() => [
              ve(E(e.item.label), 1)
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
              (L(!0), K(ge, null, _e(e.item.options, (m) => (L(), X(w, {
                key: "radioItem" + m.val,
                label: m.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: Y(() => [
                  m.icon && !e.item.buttonType ? (L(), X(k, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : re("", !0),
                  M("span", null, E(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (L(), X(S, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[15] || (i[15] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled,
            onOnChange: i[16] || (i[16] = (m) => a(m, e.item))
          }, {
            default: Y(() => [
              ve(E(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (L(), X(B, {
            key: 10,
            style: le(d.itemStyle),
            modelValue: d.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[17] || (i[17] = (m) => d.tempKeys[e.item.tempKey] = m),
            onOnChange: i[18] || (i[18] = (m) => s(m, e.item))
          }, {
            default: Y(() => [
              (L(!0), K(ge, null, _e(e.item.options, (m) => (L(), X(S, {
                key: "checkItem" + m.val,
                label: m.val,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: Y(() => [
                  m.icon ? (L(), X(k, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : re("", !0),
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
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (L(), X(Fl, {
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
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (L(), X(x, {
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
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (L(), X(Ul, {
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
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (L(), X($l, {
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
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (L(), X(Ol, {
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
          ], 4)) : re("", !0),
          e.item.info ? (L(), K("div", Hn, E(e.item.info), 1)) : re("", !0),
          e.item.title ? (L(), K("div", Wn, E(e.item.title), 1)) : re("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"])) : re("", !0);
    };
  }
}), jn = /* @__PURE__ */ M("input", { type: "text" }, null, -1), Jn = { class: "inlineBlock" }, kt = /* @__PURE__ */ ue({
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
  setup(l, { expose: u, emit: o }) {
    var Qt, Zt;
    const e = o, n = l, a = W(null), s = W({}), c = W([]), f = W({});
    let b = [];
    const d = ((Qt = window == null ? void 0 : window.g) == null ? void 0 : Qt.mgrURL) ?? "";
    let i = [], v = [];
    const g = W(!1), A = W(Math.random() * 1e8 + 1e3), y = (Zt = window == null ? void 0 : window.g) != null && Zt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let w = !1;
    const k = N(() => Array.isArray(n.formData.length ? n.formData[0] : !1)), V = N(
      () => n.inline ? {
        width: n.itemWidth + n.labelWidth + "px"
      } : {}
    ), S = N(
      () => n.inline ? {
        width: "100%"
      } : { width: n.contentWidth }
    ), B = N(() => {
      let r = ie(n.formRules);
      for (let t in r)
        if (r.hasOwnProperty(t))
          if (Array.isArray(r[t]))
            for (let T of r[t])
              T && (T.message || T.validator || (T.message = I("r.required")));
          else
            G(r[t]) === "Object" && (r[t].message || r[t].validator || (r[t].message = I("r.required")));
      return r;
    }), O = N(() => {
      let r = [];
      if (k.value)
        for (let t of c.value)
          m(t, r);
      else
        m(c.value, r);
      return r.concat(i, v);
    }), x = N(() => {
      let r = [];
      if (k.value)
        for (let t of c.value)
          F(t, r);
      else
        F(c.value, r);
      return r;
    });
    function C(r) {
      return r.filter((t) => t == null ? void 0 : t.slotName);
    }
    function m(r, t) {
      for (let T of r)
        if (T.showing === !0 && T.key && T.type !== "selectInput" && (t.push(T.key), T.key2 && t.push(T.key2), T.collectLabel)) {
          if (!Array.isArray(T.collectLabel) && T.collectLabel.key)
            t.push(T.collectLabel.key);
          else if (Array.isArray(T.collectLabel))
            for (let _ of T.collectLabel)
              _.key && t.push(_.key);
        }
    }
    function F(r, t) {
      for (let T of r)
        T.showing === !0 && T.key && T.type !== "selectInput" && t.push(T.key);
    }
    function h() {
      return new Promise((r) => {
        z(), P().then(() => {
          e("on-reset"), r(!0);
        });
      });
    }
    function U() {
      return new Promise((r) => {
        for (let t of b)
          t();
        b = [], f.value = {}, $(), oe(), P().then(() => {
          e("on-re-render"), r(!0);
        });
      });
    }
    function P() {
      return new Promise((r) => {
        A.value = Math.floor(Math.random() * 1e8 + 1e3), Fe(function() {
          r(!0);
        });
      });
    }
    function z() {
      let r = be();
      for (let t in s.value)
        if (s.value.hasOwnProperty(t))
          if (Ce(r[t]))
            s.value[t] = r[t];
          else if (Array.isArray(s.value[t]))
            s.value[t] = [];
          else if (G(s.value[t]) === "Boolean")
            s.value[t] = !1;
          else {
            const T = Xe(n.formData, (_) => (_ == null ? void 0 : _.key) === t);
            T && (T.type === "editor" || T.type === "editorPro") ? s.value[t] = "" : s.value[t] = null;
          }
      Q(r);
    }
    function Q(r) {
      for (let t in f.value)
        f.value.hasOwnProperty(t) && (Ce(r[t]) ? f.value[t] = r[t] : Array.isArray(f.value[t]) ? f.value[t] = [] : G(f.value[t]) === "Object" && f.value[t].hasOwnProperty("key") && f.value[t].hasOwnProperty("val") ? f.value[t].val = null : f.value[t] = null);
    }
    function ne(r) {
      let t = be();
      Ce(t[r]) ? f.value[r] = t[r] : Array.isArray(f.value[r]) ? f.value[r] = [] : f.value[r] = null;
    }
    function be() {
      let r = {};
      if (k.value)
        for (let t of c.value)
          Ae(t, r);
      else
        Ae(c.value, r);
      return r;
    }
    function Ae(r, t) {
      for (let T of r)
        T.tempKey && Ce(T.defaultVal) && D(T, t), T.key && Ce(T.defaultVal) && (t[T.key] = T.defaultVal), T.key2 && Ce(T.defaultVal2) && (t[T.key2] = T.defaultVal2);
    }
    function J(r) {
      if (r.show) {
        if (G(r.show) === "Object")
          return de(r, me(r.show));
        if (Array.isArray(r.show))
          if (r.showOr) {
            for (let t of r.show)
              if (me(t) === !0)
                return de(r, !0);
            return de(r, !1);
          } else {
            for (let t of r.show)
              if (me(t) === !1)
                return de(r, !1);
            return de(r, !0);
          }
        else if (typeof r.show == "function")
          return de(r, r.show(s.value));
      } else
        r.showing || (r.showing = !0);
      return !0;
    }
    function me(r) {
      if (r.reg && typeof r.reg.test == "function")
        return r.reg.test(s.value[r.key]);
      if (Array.isArray(r.val)) {
        for (let t of r.val) {
          if ((s.value[r.key] || s.value[r.key] === 0 || s.value[r.key] === !1) && t === ".")
            return !0;
          if (s.value[r.key] === t)
            return !0;
        }
        return !1;
      } else
        return !1;
    }
    function de(r, t) {
      return !r.showing && t && r.key ? (r.showing = t, r.defaultVal !== void 0 && (r.tempKey ? (f.value[r.tempKey] === null || f.value[r.tempKey] === void 0 || (G(f.value[r.tempKey]) === "Object" || Array.isArray(f.value[r.tempKey])) && xe(f.value[r.tempKey])) && D(r, f.value) : (s.value[r.key] === null || s.value[r.key] === void 0) && (s.value[r.key] = r.defaultVal), r.key2 && r.deafultVal2 !== void 0 && (s.value[r.key2] === null || s.value[r.key2] === void 0) && r.type !== "inputMap" && (s.value[r.key2] = r.defaultVal2)), r.tempKey && pe(f.value[r.tempKey], r)) : r.showing = t, t;
    }
    function D(r, t) {
      switch (r.type) {
        case "selectInput":
          t[r.tempKey] = {
            key: r.key,
            val: r.defaultVal
          };
          break;
        case "inputMap":
          r.key3 ? t[r.tempKey] = {
            lng: r.defaultVal || 0,
            lat: r.defaultVal2 || 0,
            name: r.defaultVal3 || ""
          } : t[r.tempKey] = {
            lng: r.defaultVal || 0,
            lat: r.defaultVal2 || 0
          };
          break;
        case "input":
        case "inputNumber":
        case "textarea":
          t[r.tempKey] = r.defaultVal;
          break;
        case "radioGroup":
        case "select":
        case "checkboxGroup":
          r.booleanVal ? t[r.tempKey] = r.defaultVal ? 1 : 0 : t[r.tempKey] = r.defaultVal;
          break;
        case "date":
        case "time":
        case "monthRange":
          r.dateType === "date" || r.dateType === "datetime" || r.dateType === "time" || r.dateType === "year" || r.dateType === "month" ? t[r.tempKey] = r.defaultVal : (r.dateType === "daterange" || r.dateType === "datetimerange" || r.dateType === "timerange" || r.type === "monthRange") && (t[r.tempKey] = r.defaultVal && r.defaultVal2 && [r.defaultVal, r.defaultVal2] || []);
          break;
      }
    }
    function oe() {
      let r = ie(n.formData);
      if (k.value)
        for (let t of r)
          ce(t);
      else
        ce(r);
      c.value = r;
    }
    function ce(r) {
      for (let t of r)
        switch (t.type) {
          case "selectInput":
            const T = "selectInput" + Math.floor(Math.random() * 1e8);
            t.tempKey = T, f.value[T] = {
              key: t.key || null,
              val: t.defaultVal || null
            }, b.push(
              we(
                () => f.value[T],
                (H) => {
                  pe(H, t);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const _ = "inputMap" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = _, t.key3 ? f.value[_] = t.defaultVal !== void 0 && t.defaultVal2 !== void 0 ? {
              lng: t.defaultVal,
              lat: t.defaultVal2,
              name: t.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : f.value[_] = t.defaultVal !== void 0 && t.defaultVal2 !== void 0 ? {
              lng: t.defaultVal,
              lat: t.defaultVal2
            } : {
              lng: null,
              lat: null
            }, b.push(
              we(
                () => f.value[_],
                (H) => {
                  pe(H, t);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const se = "inputT" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = se, f.value[se] = t.defaultVal !== void 0 ? t.defaultVal : null, b.push(
              we(
                () => f.value[se],
                (H) => {
                  pe(H, t);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (t.options || (t.options = []), t.asyncOption)
              if (t.changeOption)
                if (Array.isArray(t.changeOption)) {
                  let H = !0;
                  for (let Z of t.changeOption)
                    if (!Z.valKey || !Z.key) {
                      H = !1;
                      break;
                    }
                  H ? b.push(
                    we(
                      () => {
                        let Z = "";
                        if (Array.isArray(t.changeOption))
                          for (let Be of t.changeOption) {
                            let $e = s.value[Be.valKey];
                            if ($e || $e === 0 || $e === !1)
                              Z += "&" + Be.key + "=" + $e;
                            else if (!Be.notRequired)
                              return !1;
                          }
                        return Z;
                      },
                      (Z) => {
                        let Be = ie(f.value[t.tempKey]);
                        if (f.value[t.tempKey] = null, Z && t.optionUrl) {
                          let $e = t.optionUrl.indexOf("?") !== -1 ? t.optionUrl : t.optionUrl + "?";
                          Ke(($e + Z).replace(/\?&/, "?"), t, Be);
                        } else
                          t.options = [], t.localOption && (t.options = [...t.localOption]), Ce(Be) && R(Be, t);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (t.options = [], t.localOption && (t.options = [...t.localOption]));
                } else
                  typeof t.changeOption == "object" ? t.changeOption.valKey && t.changeOption.key && b.push(
                    we(
                      () => typeof t.changeOption == "object" && !Array.isArray(t.changeOption) ? s.value[t.changeOption.valKey] : !1,
                      (H) => {
                        let Z = ie(f.value[t.tempKey]);
                        if (f.value[t.tempKey] = null, (H || H === 0 || H === !1) && t.optionUrl && typeof t.changeOption == "object" && !Array.isArray(t.changeOption)) {
                          let Be = t.optionUrl.indexOf("?") !== -1 ? t.optionUrl : t.optionUrl + "?";
                          Ke((Be + "&" + t.changeOption.key + "=" + H).replace(/\?&/, "?"), t, Z);
                        } else
                          t.options = [], t.localOption && (t.options = [...t.localOption]), Ce(Z) && R(Z, t);
                      },
                      { immediate: !0 }
                    )
                  ) : G(t.changeOption) === "Boolean" && b.push(
                    we(
                      () => Xe(n.formData, (H) => (H == null ? void 0 : H.key) === t.key).optionUrl,
                      (H) => {
                        let Z = ie(f.value[t.tempKey]);
                        f.value[t.tempKey] = null, H ? Ke(H, t, Z) : (t.options = [], t.localOption && (t.options = [...t.localOption]), Ce(Z) && R(Z, t));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                t.optionUrl && Ke(t.optionUrl, t);
            else
              G(t.borrowOption) === "String" && (t.options = Xe(c.value, (H) => (H == null ? void 0 : H.key) === t.borrowOption).options);
            const ae = "opEle" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = ae, t.type === "select" && t.multiple || t.type === "checkboxGroup" ? f.value[ae] = t.defaultVal !== void 0 ? t.defaultVal : [] : t.booleanVal ? f.value[ae] = t.defaultVal !== void 0 ? t.defaultVal ? 1 : 0 : null : f.value[ae] = t.defaultVal !== void 0 ? t.defaultVal : null, b.push(
              we(
                () => f.value[ae],
                (H) => {
                  pe(H, t);
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
            const te = "date" + Math.floor(Math.random() * 1e8);
            t.tempKey = te, t.dateType === "date" || t.dateType === "datetime" || t.dateType === "time" || t.dateType === "year" || t.dateType === "month" ? f.value[te] = t.defaultVal || null : (t.dateType === "daterange" || t.dateType === "datetimerange" || t.dateType === "timerange" || t.type === "monthRange") && (f.value[te] = t.defaultVal && t.defaultVal2 && [t.defaultVal, t.defaultVal2] || []), b.push(
              we(
                () => f.value[te],
                (H) => {
                  pe(H, t);
                }
              )
            );
            break;
        }
    }
    function Ke(r, t, T) {
      De.get(r).then((_) => {
        var ae;
        if (!t.options)
          return;
        let se = ((ae = _ == null ? void 0 : _.data) == null ? void 0 : ae.records) || (_ == null ? void 0 : _.data) || _ || [];
        Array.isArray(se) ? (t.optionFilter && G(t.optionFilter) === "Function" && (se = t.optionFilter(se)), t.optionLabel && t.optionVal ? (t.options.length = 0, t.options.push(
          ...se.map((te) => {
            let H;
            if (Array.isArray(t.optionLabel)) {
              let Z = "";
              t.optionLabel.forEach((Be, $e) => {
                let Vt = String(te[Be]);
                $e === 1 ? Z += "（" + Vt : $e > 1 ? Z += "、" + Vt : Z += Vt;
              }), H = {
                label: Z + "）",
                val: t.optionVal && te[t.optionVal]
              };
            } else
              H = {
                label: t.optionLabel && te[t.optionLabel],
                val: t.optionVal && te[t.optionVal]
              };
            if (t.collectLabel)
              if (Array.isArray(t.collectLabel))
                for (let Z of t.collectLabel)
                  Z.valKey && Z.valKey !== "label" && (H[Z.valKey] = te[Z.valKey]);
              else
                t.collectLabel.valKey && t.collectLabel.valKey !== "label" && (H[t.collectLabel.valKey] = te[t.collectLabel.valKey]);
            if (H.val !== null && H.val !== void 0)
              return H;
          })
        )) : (t.options.length = 0, t.options.push(...se))) : t.options.length = 0, t.localOption && t.options.unshift(...t.localOption), Ce(T) && R(T, t), t.disableOptionByOthers && (G(t.disableOptionByOthers) === "String" ? b.push(
          we(
            () => s.value[t.disableOptionByOthers],
            (te) => {
              if (ne(t.tempKey), !!t.options) {
                for (let H of t.options)
                  H.disabled && (H.disabled = !1);
                if (te || te === 0 || te === !1)
                  for (let H of t.options)
                    H.val === te && (H.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(t.disableOptionByOthers) && b.push(
          we(
            () => t.disableOptionByOthers.filter((te) => te).map((te) => s.value[te]),
            (te) => {
              if (ne(t.tempKey), !!t.options) {
                for (let H of t.options)
                  H.disabled && (H.disabled = !1);
                if (te) {
                  for (let H of t.options)
                    for (let Z = 0; Z < te.length; Z++)
                      if (H.val === te[Z]) {
                        H.disabled = !0, te.splice(Z, 1);
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
    function R(r, t) {
      Array.isArray(t.options) && hl(t.options, { val: r }) !== -1 && (f.value[t.tempKey] = r);
    }
    function $() {
      if (s.value = {}, k.value)
        for (let r of n.formData)
          he(r);
      else
        he(n.formData);
    }
    function he(r) {
      for (let t of r)
        t.key && (t.type === "checkboxGroup" || t.type === "select" && t.multiple ? s.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : [] : t.type === "editor" || t.type === "editorPro" ? s.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : "" : (s.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : null, t.key2 && (s.value[t.key2] = t.defaultVal2 !== void 0 && t.show === void 0 ? t.defaultVal2 : null)));
    }
    function pe(r, t) {
      if (t.showing)
        switch (t.type) {
          case "selectInput":
            r && (r.beforeKey && delete s.value[r.beforeKey], s.value[r.key] = r.val);
            break;
          case "inputMap":
            if (!t.key || !t.key2)
              return;
            r ? (s.value[t.key] = r.lng, s.value[t.key2] = r.lat, t.key3 && (s.value[t.key3] = r.name)) : (s.value[t.key] = null, s.value[t.key2] = null, t.key3 && (s.value[t.key3] = null));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            if (!t.key)
              return;
            if (r || r === 0) {
              let se = /^-?\d+(.\d+)?$/;
              t.numberVal && se.test(r) ? s.value[t.key] = Number(r) : s.value[t.key] = r;
            } else
              s.value[t.key] = null;
            break;
          case "select":
          case "radioGroup":
          case "checkboxGroup":
            if (!t.key)
              return;
            if (t.booleanVal && !t.multiple ? s.value[t.key] = r === void 0 || r === "" || r === null ? null : !!r : t.multiple || t.type === "checkboxGroup" ? s.value[t.key] = Object.assign([], r) : s.value[t.key] = r, t.collectLabel) {
              const se = ke(t, r);
              if (Array.isArray(t.collectLabel)) {
                for (let ae of t.collectLabel)
                  if (ae != null && ae.key && ae.valKey) {
                    const te = ee(ae.key);
                    let H = null;
                    Array.isArray(se) ? (H = se.map((Be) => Be[ae.valKey]), s.value[ae.key] = H, te && (f.value[te] = H)) : (se && Ce(se[ae.valKey]) && (H = se[ae.valKey]), s.value[ae.key] = H, te && (f.value[te] = H));
                    let Z = Xe(c.value, (Be) => (Be == null ? void 0 : Be.key) === ae.key);
                    Z && Z.tempKey && (f.value[Z.tempKey] = s.value[ae.key]);
                  }
              } else if (typeof t.collectLabel == "object" && t.collectLabel.key && t.collectLabel.valKey) {
                const ae = ee(t.collectLabel.key);
                let te = null;
                Array.isArray(se) ? (te = se.map(
                  (Z) => t.collectLabel && !Array.isArray(t.collectLabel) && Z[t.collectLabel.valKey]
                ), s.value[t.collectLabel.key] = te, ae && (f.value[ae] = te)) : (se && Ce(se[t.collectLabel.valKey]) && (te = se[t.collectLabel.valKey]), s.value[t.collectLabel.key] = te, ae && (f.value[ae] = te));
                let H = Xe(
                  c.value,
                  (Z) => t.collectLabel && !Array.isArray(t.collectLabel) && (Z == null ? void 0 : Z.key) === t.collectLabel.key || !1
                );
                H && H.tempKey && (f.value[H.tempKey] = s.value[t.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!t.key)
              return;
            let T = t.dateType;
            const _ = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (T === "date" || T === "datetime" || T === "time" || T === "year" || T === "month")
              r ? (T === "time" ? s.value[t.key] = r : s.value[t.key] = ot(r).format(typeof t.format == "string" ? t.format : _[T]), T === "date" && t.addTime && (s.value[t.key] += " 00:00:00")) : s.value[t.key] = null;
            else if (t.type === "monthRange" || T === "daterange" || T === "datetimerange" || T === "timerange") {
              if (!t.key2)
                return;
              r && r[0] && r[1] ? (T === "timerange" ? (s.value[t.key] = r[0], s.value[t.key2] = r[1]) : t.type === "monthRange" ? (s.value[t.key] = typeof t.format == "string" && ot(r[0]).format(t.format) || r[0], s.value[t.key2] = typeof t.format == "string" && t.format && ot(r[1]).format(t.format) || r[1]) : (s.value[t.key] = ot(r[0]).format(t.format || T && _[T]), s.value[t.key2] = ot(r[1]).format(t.format || T && _[T])), T === "daterange" && t.addTime && (s.value[t.key] += " 00:00:00", s.value[t.key2] += " 23:59:59")) : (s.value[t.key] = null, s.value[t.key2] = null);
            }
            break;
        }
    }
    function ke(r, t) {
      if (r.options)
        if (r != null && r.multiple || r.type === "checkboxGroup") {
          if (t) {
            let T = [];
            for (let _ of r.options)
              t.indexOf(_ == null ? void 0 : _.val) !== -1 && T.push(_);
            return T;
          }
          return !1;
        } else {
          if (t || t === 0 || t === !1) {
            for (let T of r.options)
              if ((T == null ? void 0 : T.val) === t)
                return T;
          }
          return !1;
        }
    }
    function ee(r) {
      if (k.value) {
        for (let t of c.value) {
          const T = Le(t, r);
          if (T)
            return T;
        }
        return !1;
      }
      return Le(c.value, r);
    }
    function Le(r, t) {
      for (let T of r)
        if (T.key === t)
          return T.tempKey;
      return !1;
    }
    function je(r, t) {
      let T = {};
      for (let _ in s.value)
        s.value.hasOwnProperty(_) && r[_] !== void 0 && (T[_] = r[_], delete r[_]);
      Ne(T, t);
      for (let _ in r)
        r.hasOwnProperty(_) && (v.indexOf(_) < 0 && v.push(_), s.value[_] = r[_]);
    }
    function Je(r) {
      let t = ie(r);
      if (k.value) {
        let T = [];
        for (let _ of n.formData)
          T.push(...at(_, t));
        return T;
      }
      return at(n.formData, t);
    }
    function at(r, t) {
      return r.filter((T) => {
        for (let _ of Object.keys(t))
          if ((T == null ? void 0 : T.key) === _ && x.value.indexOf(_) > -1 && !(t[_] === null || (Array.isArray(t[_]) || G(t[_]) === "Object") && xe(t[_])))
            return delete t[_], !0;
        return !1;
      }).map((T) => T == null ? void 0 : T.key);
    }
    function Ne(r, t = !1) {
      let T = ie(r);
      wt(r, t);
      for (let _ in s.value)
        if (s.value.hasOwnProperty(_) && r[_] !== void 0 && r[_] !== "--") {
          if (Array.isArray(r[_]))
            r[_] = r[_].filter((se) => se !== "--");
          else if (G(r[_]) === "Object")
            for (let se in r[_])
              r[_].hasOwnProperty(se) && r[_][se] === "--" && (r[_][se] = null);
          s.value[_] = r[_];
        } else
          t || (s.value[_] = Array.isArray(s.value[_]) ? [] : null);
      Fe(function() {
        El(Je(T));
      });
    }
    function wt(r, t = !1) {
      if (k.value)
        for (let T of c.value)
          Ht(T, r, t);
      else
        Ht(c.value, r, t);
    }
    function Ht(r, t, T = !1) {
      for (let _ of r)
        if (_.key && (T && (t[_.key] !== void 0 || _.key2 && t[_.key2] !== void 0) || !T) && _.tempKey)
          switch (_.type) {
            case "inputMap":
              if (!_.key2)
                continue;
              G(t[_.key]) === "Number" && G(t[_.key2] === "Number") ? _.key3 ? f.value[_.tempKey] = {
                lng: t[_.key],
                lat: t[_.key2],
                name: t[_.key3]
              } : f.value[_.tempKey] = {
                lng: t[_.key],
                lat: t[_.key2]
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
              t[_.key] && t[_.key] !== "--" || t[_.key] === 0 ? f.value[_.tempKey] = t[_.key] : f.value[_.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              t[_.key] && t[_.key] !== "--" || t[_.key] === 0 || t[_.key] === !1 ? _.multiple || _.type === "checkboxGroup" ? f.value[_.tempKey] = [...t[_.key]] : _.booleanVal ? f.value[_.tempKey] = t[_.key] ? 1 : 0 : f.value[_.tempKey] = t[_.key] : _.multiple || _.type === "checkboxGroup" ? f.value[_.tempKey] = [] : f.value[_.tempKey] = null;
              break;
            case "date":
            case "time":
              if (_.dateType === "date" || _.dateType === "datetime" || _.dateType === "year" || _.dateType === "month" || _.dateType === "time")
                f.value[_.tempKey] = t[_.key] && t[_.key] !== "--" ? t[_.key] : null;
              else if (_.dateType === "daterange" || _.dateType === "datetimerange" || _.dateType === "timerange") {
                if (!_.key2)
                  continue;
                f.value[_.tempKey] = t[_.key] && t[_.key] !== "--" && t[_.key2] && t[_.key2] !== "--" && [t[_.key], t[_.key2]] || [];
              }
              break;
          }
    }
    function Kl(r) {
      if (Array.isArray(r))
        for (let t of r)
          Wt(t);
      else
        G(r) === "Object" && Wt(r);
    }
    function Wt(r) {
      const { index: t, indexB: T, key: _, val: se } = r;
      if (typeof t == "number")
        if (Array.isArray(c.value[t])) {
          if (typeof T == "number")
            if (_ && r.hasOwnProperty("val"))
              c.value[t][T][_] = se;
            else
              for (let ae of Object.keys(r))
                ae !== "index" && _ !== "indexB" && (c.value[t][T][ae] = r[ae]);
        } else if (_ && r.hasOwnProperty("val"))
          c.value[t][_] = se;
        else
          for (let ae of Object.keys(r))
            ae !== "index" && (c.value[t][ae] = r[ae]);
    }
    function jt({ label: r, root: t }) {
      t.key2 && (s.value[t.key2] = r), qe({
        e: r,
        root: t
      });
    }
    function Jt(r) {
      r.beforeKey && Zl(i, (t) => t === r.beforeKey), r.key && (i.indexOf(r.key) === -1 && i.push(r.key), qe({
        e: null,
        root: r
      }));
    }
    function qt({ name: r, root: t }) {
      t.key2 && (s.value[t.key2] = r), qe({
        e: r,
        root: t
      });
    }
    function Yt({ e: r, root: t }) {
      qe({
        e: r,
        root: t
      }), Fe(function() {
        var T, _;
        (_ = (T = a.value) == null ? void 0 : T.validateField) == null || _.call(T, t.key);
      });
    }
    function qe({ e: r, root: t }) {
      Me(() => {
        let T = {
          event: r
        };
        if (t.key && (T[t.key] = s.value[t.key]), t.key2 && (T[t.key2] = s.value[t.key2]), Array.isArray(t.collectLabel))
          for (let _ of t.collectLabel)
            T[_.key] = s.value[_.key];
        else
          t.collectLabel && t.collectLabel.key && (T[t.collectLabel.key] = s.value[t.collectLabel.key]);
        e("on-item-change", T);
      }, 500);
    }
    function Xt() {
      let r = {};
      for (let t of O.value)
        r[t] = s.value[t];
      return n.trim && (r = vt(r)), r;
    }
    function Dl() {
      var r, t;
      (t = (r = a.value) == null ? void 0 : r.validate) == null || t.call(r);
    }
    function Nl(r) {
      Me(() => {
        var t, T;
        (T = (t = a.value) == null ? void 0 : t.validateField) == null || T.call(t, r, () => {
        });
      }, 10);
    }
    function El(r) {
      Me(() => {
        var t, T;
        if (Array.isArray(r))
          for (let _ of r)
            (T = (t = a.value) == null ? void 0 : t.validateField) == null || T.call(t, _, () => {
            });
      }, 10);
    }
    function zl(r) {
      r !== void 0 && (g.value = !!r);
    }
    function _t() {
      var r, t;
      n.disabled || (t = (r = a.value) == null ? void 0 : r.validate) == null || t.call(r, (T) => {
        w || (w = !0, T && (g.value = !0, e("on-submit", Xt())), Me(() => {
          w = !1;
        }, 2e3));
      });
    }
    return Ee(() => {
      $(), oe();
    }), u({
      resetForm: h,
      refreshFormDom: P,
      reRenderForm: U,
      setItemToValGroup: je,
      updateValGroup: Ne,
      updateFormDataT: Kl,
      validate: Dl,
      reValidate: Nl,
      changeLoading: zl,
      getValGroup: Xt,
      submit: _t
    }), (r, t) => {
      const T = q("FormItem"), _ = q("Button"), se = q("Form");
      return L(), X(se, {
        ref_key: "formGroupXRef",
        ref: a,
        model: p(s),
        rules: p(B),
        "label-width": n.labelWidth,
        inline: n.inline,
        "show-message": n.showMessage,
        class: "formXN",
        key: p(A)
      }, {
        default: Y(() => [
          j(T, { style: { display: "none" } }, {
            default: Y(() => [
              jn
            ]),
            _: 1
          }),
          p(k) ? (L(!0), K(ge, { key: 0 }, _e(p(c), (ae, te) => (L(), K("div", {
            class: Se([r.teamClass, "formTeamBox" + te]),
            key: "formTeamBox" + te
          }, [
            (L(!0), K(ge, null, _e(ae, (H, Z) => (L(), K(ge, {
              key: "formItem" + Z
            }, [
              J(H) ? (L(), X(rl, {
                key: 0,
                item: H,
                style: le(p(V)),
                "item-style": p(S),
                "val-group": p(s),
                "temp-keys": p(f),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": p(d),
                "upload-url": p(y),
                onItemChange: qe,
                onReValidate: Yt,
                onClearTempKeyItem: ne,
                onSelectInputChange: Jt,
                onAlNameChange: qt,
                onAsyncLabelChange: jt
              }, tt({ _: 2 }, [
                _e(C(ae), (Be) => ({
                  name: Be.slotName,
                  fn: Y(($e) => [
                    Te(r.$slots, Be.slotName, {
                      valGroup: $e.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : re("", !0)
            ], 64))), 128))
          ], 2))), 128)) : re("", !0),
          (L(!0), K(ge, null, _e(p(c), (ae, te) => (L(), K(ge, {
            key: "formItem" + te
          }, [
            !p(k) && J(ae) ? (L(), X(rl, {
              key: 0,
              item: ae,
              style: le(p(V)),
              "item-style": p(S),
              "val-group": p(s),
              "temp-keys": p(f),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": p(d),
              "upload-url": p(y),
              onItemChange: qe,
              onReValidate: Yt,
              onClearTempKeyItem: ne,
              onSelectInputChange: Jt,
              onAlNameChange: qt,
              onAsyncLabelChange: jt
            }, tt({ _: 2 }, [
              _e(C(r.formData), (H) => ({
                name: H.slotName,
                fn: Y((Z) => [
                  Te(r.$slots, H.slotName, {
                    valGroup: Z.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : re("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (L(), X(T, { key: 1 }, {
            default: Y(() => [
              j(_, {
                onClick: _t,
                style: le(p(S)),
                type: "primary",
                loading: n.btnLoading && p(g),
                disabled: n.disabled
              }, {
                default: Y(() => [
                  ve(E(n.longOkBtTxt || p(I)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : re("", !0),
          M("div", Jn, [
            n.showInlineOkBt ? (L(), X(_, {
              key: 0,
              type: "primary",
              class: Se({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: _t,
              loading: n.btnLoading && p(g),
              disabled: n.disabled
            }, {
              default: Y(() => [
                ve(E(n.inlineOkBtTxt || p(I)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : re("", !0),
            n.showInlineClearBt ? (L(), X(_, {
              key: 1,
              onClick: h,
              class: Se({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: Y(() => [
                ve(E(n.inlineClearBtTxt || p(I)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : re("", !0)
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
    with: { default: () => Re().formGroupWidth },
    labelWidth: { default: () => Re().formGroupLabelWidth },
    contentWidth: { default: "70%" },
    itemWidth: { default: 200 },
    showOkBt: { type: Boolean, default: !0 },
    showCancelBt: { type: Boolean, default: !0 },
    okBtTxt: {},
    cancelBtTxt: {},
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-cancel"],
  setup(l, { expose: u, emit: o }) {
    const e = o, n = l, a = W({ width: n.with }), s = W(!1), c = W(), f = N(() => {
      var x, C;
      if (Array.isArray(n.formData))
        if (Array.isArray(n.formData[0])) {
          let m = [];
          for (let F of n.formData)
            F && (m = m.concat(
              F.filter((h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition)
            ));
          return m;
        } else
          return (C = (x = n.formData) == null ? void 0 : x.filter) == null ? void 0 : C.call(
            x,
            (m) => (m == null ? void 0 : m.type) === "custom" || (m == null ? void 0 : m.type) === "input" && m.slotName && m.slotPosition
          );
      return [];
    });
    function b() {
      return new Promise((x) => {
        var C, m;
        (m = (C = c.value).resetForm) == null || m.call(C).then((F) => {
          x(F);
        });
      });
    }
    function d() {
      return new Promise((x) => {
        var C, m;
        (m = (C = c.value).refreshFormDom) == null || m.call(C).then((F) => {
          x(F);
        });
      });
    }
    function i() {
      return new Promise((x) => {
        var C, m;
        (m = (C = c.value).reRenderForm) == null || m.call(C).then((F) => {
          x(F);
        });
      });
    }
    function v(x, C) {
      var m, F;
      (F = (m = c.value).setItemToValGroup) == null || F.call(m, x, C);
    }
    function g(x, C) {
      var m, F;
      (F = (m = c.value).updateValGroup) == null || F.call(m, x, C);
    }
    function A(x) {
      var C, m;
      (m = (C = c.value).updateFormDataT) == null || m.call(C, x);
    }
    function y() {
      var x, C;
      (C = (x = c.value).validate) == null || C.call(x);
    }
    function w(x) {
      var C, m;
      (m = (C = c.value).reValidate) == null || m.call(C, x);
    }
    function k(x) {
      var C, m;
      x !== void 0 && (s.value = !!x, (m = (C = c.value).changeLoading) == null || m.call(C, s.value));
    }
    function V() {
      var x, C;
      return (C = (x = c.value).getValGroup) == null ? void 0 : C.call(x);
    }
    function S() {
      s.value = !0;
    }
    function B() {
      var x, C;
      (C = (x = c.value).submit) == null || C.call(x);
    }
    function O() {
      e("on-cancel"), Me(() => {
        var x, C;
        s.value = !1, (C = (x = c.value).changeLoading) == null || C.call(x, !1);
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
      reValidate: w,
      changeLoading: k,
      getValGroup: V,
      submit: B,
      close: O
    }), (x, C) => {
      const m = q("Button");
      return L(), K("div", {
        style: le(p(a)),
        class: "formGroupBoxVM"
      }, [
        j(kt, lt({
          ref_key: "formRRef",
          ref: c
        }, x.$attrs, {
          "form-data": n.formData,
          "label-width": n.labelWidth,
          "content-width": n.contentWidth,
          "item-width": n.itemWidth,
          btnLoading: n.btnLoading,
          onOnSubmit: S
        }), tt({ _: 2 }, [
          _e(p(f), (F) => ({
            name: F.slotName,
            fn: Y(({ valGroup: h }) => [
              Te(x.$slots, F.slotName, { valGroup: h })
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
              onClick: B,
              class: "form-save-btn",
              loading: n.btnLoading && p(s)
            }, {
              default: Y(() => [
                ve(E(n.okBtTxt || p(I)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : re("", !0),
            n.showCancelBt ? (L(), X(m, {
              key: 1,
              onClick: O,
              class: "form-cancel-btn"
            }, {
              default: Y(() => [
                ve(E(n.cancelBtTxt || p(I)("r.cancel")), 1)
              ]),
              _: 1
            })) : re("", !0)
          ], 4)
        ], 4), [
          [ye, n.showOkBt || n.showCancelBt]
        ])
      ], 4);
    };
  }
}), Nt = /* @__PURE__ */ ue({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Re().searchFormLabelWidth },
    itemWidth: { default: () => Re().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(l, { expose: u, emit: o }) {
    const e = o, n = l, a = W(), s = N(() => {
      var S, B;
      if (Array.isArray(n.formData[0])) {
        let O = [];
        for (let x of n.formData)
          x && (O = O.concat(
            x.filter((C) => (C == null ? void 0 : C.type) === "custom" || (C == null ? void 0 : C.type) === "input" && C.slotName && C.slotPosition)
          ));
        return O;
      }
      return (B = (S = n.formData) == null ? void 0 : S.filter) == null ? void 0 : B.call(
        S,
        (O) => (O == null ? void 0 : O.type) === "custom" || (O == null ? void 0 : O.type) === "input" && O.slotName && O.slotPosition
      );
    });
    function c() {
      return new Promise((S) => {
        var B, O;
        (O = (B = a.value).resetForm) == null || O.call(B).then(() => {
          S();
        });
      });
    }
    function f() {
      return new Promise((S) => {
        var B, O;
        (O = (B = a.value).refreshFormDom) == null || O.call(B).then(() => {
          S();
        });
      });
    }
    function b() {
      return new Promise((S) => {
        var B, O;
        (O = (B = a.value).reRenderForm) == null || O.call(B).then(() => {
          S();
        });
      });
    }
    function d(S, B) {
      var O, x;
      (x = (O = a.value).setItemToValGroup) == null || x.call(O, S, B);
    }
    function i(S, B) {
      var O, x;
      (x = (O = a.value).updateValGroup) == null || x.call(O, S, B);
    }
    function v(S) {
      var B, O;
      (O = (B = a.value).updateFormDataT) == null || O.call(B, S);
    }
    function g() {
      var S, B;
      (B = (S = a.value).validate) == null || B.call(S);
    }
    function A(S) {
      var B, O;
      (O = (B = a.value).reValidate) == null || O.call(B, S);
    }
    function y(S) {
      var B, O;
      (O = (B = a.value).changeLoading) == null || O.call(B, S === void 0 ? !1 : S);
    }
    function w() {
      var S, B;
      return (B = (S = a.value).getValGroup) == null ? void 0 : B.call(S);
    }
    function k(S) {
      e("on-search", S);
    }
    function V() {
      var S, B;
      (B = (S = a.value).submit) == null || B.call(S);
    }
    return Ee(() => {
      const S = a.value.$el;
      S != null && S.parentNode && S.parentNode.addEventListener("keyup", (B) => {
        (B == null ? void 0 : B.keyCode) === 13 && V();
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
      getValGroup: w,
      submit: V
    }), (S, B) => (L(), X(kt, lt({
      ref_key: "formRRef",
      ref: a
    }, S.$attrs, {
      "form-data": n.formData,
      "label-width": n.labelWidth,
      "item-width": n.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": n.showInlineOkBt,
      "inline-ok-bt-txt": p(I)("r.check"),
      "show-inline-clear-bt": n.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: k
    }), tt({ _: 2 }, [
      _e(p(s), (O) => ({
        name: O.slotName,
        fn: Y(({ valGroup: x }) => [
          Te(S.$slots, O.slotName, { valGroup: x })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Yn = /* @__PURE__ */ ue({
  __name: "FormModal",
  props: {
    title: {},
    formData: { default: () => [] },
    width: { default: () => Re().formModalWidth },
    labelWidth: { default: () => Re().formModalLabelWidth },
    okBtTxt: {},
    cancelBtTxt: {},
    hideCancelBt: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    btnLoading: { type: Boolean, default: !1 }
  },
  emits: ["on-close", "on-open"],
  setup(l, { expose: u, emit: o }) {
    const e = o, n = l, a = W(), s = W(!1), c = W(!1), f = N(() => {
      var m, F;
      if (Array.isArray(n.formData[0])) {
        let h = [];
        for (let U of n.formData)
          U && (h = h.concat(
            U.filter((P) => (P == null ? void 0 : P.type) === "custom" || (P == null ? void 0 : P.type) === "input" && P.slotName && P.slotPosition)
          ));
        return h;
      }
      return (F = (m = n.formData) == null ? void 0 : m.filter) == null ? void 0 : F.call(
        m,
        (h) => (h == null ? void 0 : h.type) === "custom" || (h == null ? void 0 : h.type) === "input" && h.slotName && h.slotPosition
      );
    });
    function b() {
      return new Promise((m) => {
        var F, h;
        (h = (F = a.value).resetForm) == null || h.call(F).then(() => {
          m();
        });
      });
    }
    function d() {
      return new Promise((m) => {
        var F, h;
        (h = (F = a.value).refreshFormDom) == null || h.call(F).then(() => {
          m();
        });
      });
    }
    function i() {
      return new Promise((m) => {
        var F, h;
        (h = (F = a.value).reRenderForm) == null || h.call(F).then(() => {
          m();
        });
      });
    }
    function v(m, F) {
      var h, U;
      (U = (h = a.value).setItemToValGroup) == null || U.call(h, m, F);
    }
    function g(m, F) {
      var h, U;
      (U = (h = a.value).updateValGroup) == null || U.call(h, m, F);
    }
    function A(m) {
      var F, h;
      (h = (F = a.value).updateFormDataT) == null || h.call(F, m);
    }
    function y() {
      var m, F;
      (F = (m = a.value).validate) == null || F.call(m);
    }
    function w(m) {
      var F, h;
      (h = (F = a.value).reValidate) == null || h.call(F, m);
    }
    function k(m) {
      var F, h;
      m !== void 0 && (c.value = !!m, (h = (F = a.value).changeLoading) == null || h.call(F, c.value));
    }
    function V() {
      var m, F;
      return (F = (m = a.value).getValGroup) == null ? void 0 : F.call(m);
    }
    function S() {
      c.value = !0;
    }
    function B() {
      var m, F;
      n.hideCancelBt ? x() : (F = (m = a.value).submit) == null || F.call(m);
    }
    function O() {
      s.value = !0;
    }
    function x() {
      s.value = !1, Me(() => {
        var m, F;
        c.value = !1, (F = (m = a.value).changeLoading) == null || F.call(m, !1);
      }, 1e3);
    }
    function C(m) {
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
      reValidate: w,
      changeLoading: k,
      getValGroup: V,
      submit: B,
      open: O,
      close: x
    }), (m, F) => {
      const h = q("Button"), U = q("Modal");
      return L(), X(U, {
        class: Se(["formModal", { hideFooter: n.hideFooter }]),
        title: n.title || p(I)("r.title"),
        modelValue: p(s),
        "onUpdate:modelValue": F[0] || (F[0] = (P) => Oe(s) ? s.value = P : null),
        "mask-closable": !1,
        "footer-hide": n.hideFooter,
        width: n.width,
        onOnVisibleChange: C
      }, {
        footer: Y(() => [
          j(h, {
            onClick: B,
            class: "modal-save-btn",
            loading: n.btnLoading && p(c)
          }, {
            default: Y(() => [
              ve(E(n.okBtTxt || p(I)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          n.hideCancelBt ? re("", !0) : (L(), X(h, {
            key: 0,
            onClick: x,
            class: "modal-cancel-btn"
          }, {
            default: Y(() => [
              ve(E(n.cancelBtTxt || p(I)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: Y(() => [
          j(kt, lt({
            ref_key: "formRRef",
            ref: a
          }, m.$attrs, {
            "form-data": n.formData,
            "label-width": n.labelWidth,
            btnLoading: n.btnLoading,
            onOnSubmit: S
          }), tt({ _: 2 }, [
            _e(p(f), (P) => ({
              name: P.slotName,
              fn: Y(({ valGroup: z }) => [
                Te(m.$slots, P.slotName, { valGroup: z })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Xn = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = W(!0), a = W([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let c = [];
    const f = N(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), b = N(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    we(
      () => e.data,
      (y) => {
        n.value = !1;
        let w = [];
        d(y, w), a.value = w, Fe(function() {
          n.value = !0, e.inlineLeaf && Fe(g);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), we(
      () => b.value,
      (y) => {
        let w, k = "s";
        if (Array.isArray(e.collectVal) ? (w = e.collectVal[0] || "", k = "a") : w = e.collectVal, !w || JSON.stringify(y) === JSON.stringify(c)) {
          c = [];
          return;
        }
        Ze({
          group: a.value,
          condition: (V) => (V == null ? void 0 : V.checked) === !0,
          key: "checked",
          val: !1
        }), Ze(k === "a" ? {
          group: a.value,
          condition: (V) => hl(y, [w, V == null ? void 0 : V[w]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: a.value,
          condition: (V) => y.indexOf(V == null ? void 0 : V[w]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), we(
      () => e.disabled,
      (y) => {
        Ze({
          group: a.value,
          condition: (w) => w && w.disableCheckbox !== y,
          key: "disableCheckbox",
          val: y
        }), e.inlineLeaf && Fe(g);
      },
      { immediate: !0 }
    );
    function d(y, w = []) {
      for (let k of y) {
        let V = !1;
        f.value.length > 1 ? V = Tt(b.value, (B) => B[f.value[0]] === k[f.value[0]]) !== void 0 : V = f.value[0] ? b.value.indexOf(k[f.value[0]]) !== -1 : !1;
        let S = {
          name: k == null ? void 0 : k[e.label],
          expand: !!(e.expandAll || k != null && k.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let B of f.value)
          S[B] = k[B];
        w.push(S), k != null && k.children && k.children.length > 0 && (S.children = [], i(k.children, S.children));
      }
    }
    function i(y, w = []) {
      for (let k of y) {
        let V = !1;
        f.value.length > 1 ? V = Tt(b.value, (B) => B[f.value[0]] === k[f.value[0]]) !== void 0 : V = f.value[0] ? b.value.indexOf(k[f.value[0]]) !== -1 : !1;
        let S = {
          name: k == null ? void 0 : k[e.label],
          expand: !!(e.expandAll || k != null && k.expand),
          checked: V,
          disableCheckbox: e.disabled
        };
        for (let B of f.value)
          S[B] = k[B];
        w.push(S), k != null && k.children && k.children.length > 0 && (S.children = [], d(k.children, S.children));
      }
    }
    function v(y, {
      data: w
    }) {
      let k = "", V = !0;
      if (w.children && w.children.length > 0) {
        for (let S of w.children)
          if (S.children !== void 0) {
            V = !1;
            break;
          }
        V && e.inlineLeaf && (k = "inlineChildXA");
      }
      return y(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: k
        },
        [
          y(
            "span",
            {
              style: {
                fontWeight: w.children ? "bold" : "normal"
              }
            },
            w.name
          )
        ]
      );
    }
    function g(y) {
      if (y) {
        y.expand && Fe(g);
        return;
      }
      let w = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (w.length > 0)
        for (let k of w) {
          let V = k == null ? void 0 : k.parentElement, S = V == null ? void 0 : V.nextElementSibling;
          if (!S)
            return;
          if (S.tagName !== "BR") {
            let B = V == null ? void 0 : V.parentElement, O = document.createElement("br");
            B == null || B.insertBefore(O, S), S = O.nextElementSibling, (S == null ? void 0 : S.className.indexOf("inlineTreeNodeF")) === -1 && S.setAttribute("class", S.className + " inlineTreeNodeF");
          }
          for (; S != null && S.nextElementSibling; )
            S = S.nextElementSibling, S.className.indexOf("inlineTreeNodeF") === -1 && S.setAttribute("class", S.className + " inlineTreeNodeF");
        }
    }
    function A(y) {
      let w = [];
      if (e.leaf) {
        for (let k of y)
          if (!k.children)
            if (Array.isArray(e.collectVal)) {
              let V = {};
              for (let S of e.collectVal)
                V[S] = k[S];
              w.push(V);
            } else
              w.push(k[e.collectVal]);
      } else
        for (let k of y)
          if (Array.isArray(e.collectVal)) {
            let V = {};
            for (let S of e.collectVal)
              V[S] = k[S];
            w.push(V);
          } else
            w.push(k[e.collectVal]);
      c = w, o("update:modelValue", w), o("on-change", ie(w));
    }
    return (y, w) => {
      const k = q("Tree");
      return p(n) ? (L(), X(k, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: p(a),
        render: v,
        onOnCheckChange: A,
        onOnToggleExpand: g,
        "show-checkbox": ""
      }, null, 8, ["data"])) : re("", !0);
    };
  }
}), Qn = { class: "transferBoxRL" }, Zn = { class: "leftBoxLLL" }, eo = { class: "fullHeight flexColumnBox" }, to = { class: "notGrow" }, lo = { class: "titleLLL" }, ao = { class: "growFlexItem" }, no = { class: "middleBoxLLL" }, oo = { class: "rightBoxLLL" }, io = { class: "fullHeight flexColumnBox" }, so = { class: "notGrow" }, ro = { class: "titleLLL" }, uo = { class: "growFlexItem" }, co = /* @__PURE__ */ ue({
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
    addParamsHandle: { type: Function, default: (l) => l.map((u) => u == null ? void 0 : u.id) },
    deleteParamsHandle: { type: Function, default: (l) => l.map((u) => u == null ? void 0 : u.id) },
    addAllParamsHandle: { type: Function, default: (l) => l },
    deleteAllParamsHandle: { type: Function, default: (l) => l },
    addMethod: { default: "post" },
    addAllMethod: { default: "post" },
    deleteMethod: { default: "delete" },
    deleteAllMethod: { default: "delete" },
    searchFormLabelWith: {}
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(l, { expose: u, emit: o }) {
    const e = o, n = l;
    let a = W({}), s = W({}), c = W([]), f = W([]), b = W(0), d = W(0);
    const i = N(() => ({ ...n.constSearchDataLeft, ...a.value })), v = N(() => ({ ...n.constSearchDataRight, ...s.value })), g = N(() => b.value < 1), A = N(() => c.value.length < 1), y = N(() => f.value.length < 1), w = N(() => d.value < 1), k = W(), V = W(), S = W(), B = W();
    function O() {
      k.value.resetForm(), V.value.resetForm(), xe(a.value) || (a.value = {}), xe(s.value) || (s.value = {}), S.value.clearSelect(), B.value.clearSelect();
    }
    function x() {
      S.value.search(), B.value.search();
    }
    function C(J) {
      c.value = J;
    }
    function m(J) {
      f.value = J;
    }
    function F(J) {
      var me, de, D, oe, ce;
      b.value = ((de = (me = J == null ? void 0 : J.data) == null ? void 0 : me.page) == null ? void 0 : de.total) || ((oe = (D = J == null ? void 0 : J.data) == null ? void 0 : D.data) == null ? void 0 : oe.total) || ((ce = J == null ? void 0 : J.data) == null ? void 0 : ce.total) || (J == null ? void 0 : J.total) || 0, e("on-data-change-l", J);
    }
    function h(J) {
      var me, de, D, oe, ce;
      d.value = ((de = (me = J == null ? void 0 : J.data) == null ? void 0 : me.page) == null ? void 0 : de.total) || ((oe = (D = J == null ? void 0 : J.data) == null ? void 0 : D.data) == null ? void 0 : oe.total) || ((ce = J == null ? void 0 : J.data) == null ? void 0 : ce.total) || (J == null ? void 0 : J.total) || 0, e("on-data-change-r", J);
    }
    function U(J) {
      a.value = J;
    }
    function P(J) {
      s.value = J;
    }
    function z() {
      n.addUrl && Ae("add");
    }
    function Q() {
      n.deleteUrl && Ae("delete");
    }
    function ne() {
      n.addAllUrl && n.addUrl && Ae("addAll");
    }
    function be() {
      n.deleteAllUrl && Ae("deleteAll");
    }
    function Ae(J) {
      let me, de, D = {}, oe = "";
      switch (J) {
        case "add":
          me = n.addMethod, de = n.addUrl, D = n.addParamsHandle(f.value), oe = I("r.add");
          break;
        case "delete":
          me = n.deleteMethod, de = n.deleteUrl, D = n.deleteParamsHandle(c.value), oe = I("r.remove");
          break;
        case "addAll":
          me = n.addAllMethod, de = n.addAllUrl, D = n.addAllParamsHandle(v.value), oe = I("r.addAll");
          break;
        case "deleteAll":
          me = n.deleteAllMethod, de = n.deleteAllUrl, D = n.deleteAllParamsHandle(i.value), oe = I("r.removeAll");
          break;
      }
      de && me && De[me](de, D, null, [], { spin: !0 }, !1).then((ce) => {
        (ce == null ? void 0 : ce.code) === 0 ? (Pe(oe + I("r.success"), (ce == null ? void 0 : ce.message) || "", "success"), S.value && S.value.getTableData(), B.value && B.value.getTableData(), e("transferred")) : Pe(oe + I("r.failed"), (ce == null ? void 0 : ce.message) || "", "error");
      }).catch(() => {
        Pe(oe + I("r.error"), "", "error");
      });
    }
    return u({
      reset: O,
      search: x
    }), (J, me) => {
      const de = q("Icon"), D = q("Button");
      return L(), K("div", Qn, [
        M("div", Zn, [
          M("div", eo, [
            M("div", to, [
              M("div", lo, E(n.titleLeft || p(I)("r.added")), 1),
              j(Ft, null, {
                default: Y(() => [
                  j(Nt, {
                    ref_key: "leftFormRef",
                    ref: k,
                    "form-data": n.formDataLeft,
                    "form-rules": n.formRulesLeft,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: U
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", ao, [
              j(Kt, {
                ref_key: "lTabRef",
                ref: S,
                columns: n.leftTableColumns,
                url: n.leftTableUrl,
                "search-data": p(i),
                onOnSelectionChange: C,
                onOnDataChange: F,
                "init-data": !!(p(xe)(n.constSearchDataLeft) && n.leftTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ]),
        M("div", no, [
          j(D, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: be,
            disabled: p(g)
          }, {
            default: Y(() => [
              ve(E(p(I)("r.removeAll")) + " ", 1),
              j(de, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(D, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Q,
            disabled: p(A)
          }, {
            default: Y(() => [
              ve(E(p(I)("r.remove")) + " ", 1),
              j(de, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(D, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: z,
            disabled: p(y)
          }, {
            default: Y(() => [
              j(de, { type: "ios-arrow-back" }),
              ve(" " + E(p(I)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          j(D, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: ne,
            disabled: p(w)
          }, {
            default: Y(() => [
              j(de, { type: "ios-arrow-back" }),
              ve(" " + E(p(I)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        M("div", oo, [
          M("div", io, [
            M("div", so, [
              M("div", ro, E(n.titleRight || p(I)("r.notAdded")), 1),
              j(Ft, null, {
                default: Y(() => [
                  j(Nt, {
                    ref_key: "rightFormRef",
                    ref: V,
                    "form-data": n.formDataRight,
                    "form-rules": n.formRulesRight,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: P
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            M("div", uo, [
              j(Kt, {
                ref_key: "rTabRef",
                ref: B,
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
}), fo = { class: "boxLPA" }, po = { class: "headerJ" }, mo = { class: "firstT borderBoxAS" }, ho = { class: "secondT borderBoxAS" }, yo = { class: "firstCol borderBoxAS" }, vo = { class: "secondCol borderBoxAS" }, go = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = l, e = u, n = W([]), a = N(() => {
      var i;
      let b = ie(o.data), d = ie(n.value);
      for (let v of b) {
        let g = 0;
        if (v != null && v.children && !xe(v.children))
          for (let A of v.children) {
            for (let y = 0, w = d == null ? void 0 : d.length; y < w; y++)
              if (Array.isArray(o.collectVal)) {
                let k = !0;
                for (let V of o.collectVal)
                  if (((i = d[y]) == null ? void 0 : i[V]) !== (A == null ? void 0 : A[V])) {
                    k = !1;
                    break;
                  }
                if (k) {
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
    we(
      () => o.modelValue,
      (b, d) => {
        rt(n.value, b) || rt(b, d) || (n.value = b);
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
            G(o.collectVal) === "String" && i.push(v[o.collectVal]);
        if (v.children) {
          for (let g of v.children)
            if (g.checked)
              if (Array.isArray(o.collectVal)) {
                let A = {};
                for (let y of o.collectVal)
                  A[y] = g[y];
                i.push(A);
              } else
                G(o.collectVal) === "String" && i.push(g[o.collectVal]);
        }
      }
      d ? (n.value = i, o.leaf ? (e("update:modelValue", i), e("on-change", ie(i))) : Fe(function() {
        f(a.value);
      })) : (e("update:modelValue", i), e("on-change", ie(i)));
    }
    return (b, d) => {
      const i = q("Checkbox");
      return L(), K("div", fo, [
        M("div", po, [
          M("div", mo, E(b.firstTitle || p(I)("r.level.1")), 1),
          M("div", ho, E(b.secondTitle || p(I)("r.level.2")), 1)
        ]),
        (L(!0), K(ge, null, _e(p(a), (v, g) => (L(), K("div", {
          class: "bodyJ",
          key: "checkboxJ" + g
        }, [
          M("div", yo, [
            j(i, {
              modelValue: v.checked,
              "onUpdate:modelValue": (A) => v.checked = A,
              indeterminate: v.indeterminate,
              onOnChange: (A) => s(v, A),
              disabled: b.disabled
            }, {
              default: Y(() => [
                ve(E(v[b.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", vo, [
            (L(!0), K(ge, null, _e(v.children, (A, y) => (L(), K("div", {
              class: "secItem",
              key: "secItem" + y
            }, [
              j(i, {
                modelValue: A.checked,
                "onUpdate:modelValue": (w) => A.checked = w,
                onOnChange: c,
                disabled: b.disabled
              }, {
                default: Y(() => [
                  ve(E(A[b.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), bo = { class: "boxLPB" }, ko = { class: "headerF" }, wo = { class: "firstT borderBoxKa" }, _o = { class: "secondT borderBoxKa" }, Vo = { class: "thirdT borderBoxKa" }, Co = { class: "firstCol borderBoxKa" }, Ao = { class: "rightBoxAL" }, Bo = { class: "secondCol borderBoxKa" }, So = { class: "thirdCol borderBoxKa" }, xo = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l, n = W([]), a = N(() => {
      let d = ie(e.data), i = ie(n.value);
      for (let v of d) {
        let g = 0, A = 0;
        if (v != null && v.children && !xe(v.children))
          for (let y of v.children) {
            let w = 0;
            if (y.children && !xe(y.children))
              for (let k of y.children) {
                for (let V = 0, S = i.length; V < S; V++)
                  if (Array.isArray(e.collectVal)) {
                    let B = !0;
                    for (let O of e.collectVal)
                      if (i[V][O] !== k[O]) {
                        B = !1;
                        break;
                      }
                    if (B) {
                      k.checked = !0, w++, i.splice(V, 1);
                      break;
                    }
                  } else if (i[V] === k[e.collectVal]) {
                    k.checked = !0, w++, i.splice(V, 1);
                    break;
                  }
                !k.checked && (k.checked = !1);
              }
            w === 0 ? (y.checked = !1, y.indeterminate = !1) : y.children && w === y.children.length ? (y.checked = !0, y.indeterminate = !1, g++) : (y.checked = !1, y.indeterminate = !0, A++);
          }
        g === 0 && A === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && g === v.children.length ? (v.checked = !0, v.indeterminate = !1) : (v.checked = !1, v.indeterminate = !0);
      }
      return d;
    });
    we(
      () => e.modelValue,
      (d, i) => {
        rt(n.value, d) || rt(d, i) || (n.value = d);
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
            G(e.collectVal) === "String" && v.push(g[e.collectVal]);
        if (g != null && g.children)
          for (let A of g.children) {
            if (!i && !e.leaf && A.checked && A.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let y = {};
                for (let w of e.collectVal)
                  y[w] = A[w];
                v.push(y);
              } else
                G(e.collectVal) === "String" && v.push(A[e.collectVal]);
            if (A.children) {
              for (let y of A.children)
                if (y.checked)
                  if (Array.isArray(e.collectVal)) {
                    let w = {};
                    for (let k of e.collectVal)
                      w[k] = y[k];
                    v.push(w);
                  } else
                    G(e.collectVal) === "String" && v.push(y[e.collectVal]);
            }
          }
      }
      i ? (n.value = v, e.leaf ? (o("update:modelValue", v), o("on-change", ie(v))) : Fe(function() {
        b(a.value);
      })) : (o("update:modelValue", v), o("on-change", ie(v)));
    }
    return (d, i) => {
      const v = q("Checkbox");
      return L(), K("div", bo, [
        M("div", ko, [
          M("div", wo, E(d.firstTitle || p(I)("r.level.1")), 1),
          M("div", _o, E(d.secondTitle || p(I)("r.level.2")), 1),
          M("div", Vo, E(d.thirdTitle || p(I)("r.level.3")), 1)
        ]),
        (L(!0), K(ge, null, _e(p(a), (g, A) => (L(), K("div", {
          class: "bodyF",
          key: "checkboxJ" + A
        }, [
          M("div", Co, [
            j(v, {
              modelValue: g.checked,
              "onUpdate:modelValue": (y) => g.checked = y,
              indeterminate: g.indeterminate,
              onOnChange: (y) => s(g, y),
              disabled: d.disabled
            }, {
              default: Y(() => [
                ve(E(g[d.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          M("div", Ao, [
            (L(!0), K(ge, null, _e(g.children, (y, w) => (L(), K("div", {
              class: "rightBoxInner",
              key: "secItem" + w
            }, [
              M("div", Bo, [
                j(v, {
                  modelValue: y.checked,
                  "onUpdate:modelValue": (k) => y.checked = k,
                  indeterminate: y.indeterminate,
                  onOnChange: (k) => c(y, k),
                  disabled: d.disabled
                }, {
                  default: Y(() => [
                    ve(E(y[d.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              M("div", So, [
                (L(!0), K(ge, null, _e(y.children, (k, V) => (L(), K("div", {
                  class: "thirdItem",
                  key: "thirdItem" + V
                }, [
                  j(v, {
                    modelValue: k.checked,
                    "onUpdate:modelValue": (S) => k.checked = S,
                    onOnChange: f,
                    disabled: d.disabled
                  }, {
                    default: Y(() => [
                      ve(E(k[d.label]), 1)
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
}), To = { class: "flexColumnBox wellCardR" }, Lo = { class: "panelHeader notGrow" }, Io = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Oo = { class: "btsF" }, Mo = { class: "growFlexItem relativeBox" }, Po = { class: "fullFlowContent" }, Fo = /* @__PURE__ */ ue({
  __name: "WellCard",
  props: {
    title: {},
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(l) {
    const u = l, o = N(() => {
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
      M("div", To, [
        M("div", Lo, [
          M("div", Io, E(u.title || p(I)("r.title")), 1),
          M("div", Oo, [
            Te(e.$slots, "bts")
          ])
        ]),
        M("div", Mo, [
          M("div", Po, [
            Te(e.$slots, "default")
          ])
        ])
      ])
    ], 4));
  }
}), Uo = /* @__PURE__ */ ue({
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
  setup(l, { emit: u }) {
    const o = u, e = l;
    let n = W(1), a = 1;
    const s = W(""), c = pt([]);
    let f = {}, b = !0, d = !1;
    const i = "scm" + Math.random(), v = N(() => s.value ? I("r.searchFor") + s.value : e.placeholder || I("r.pInput")), g = N({
      get() {
        return e.modelValue ?? "";
      },
      set(x) {
        if (o("update:modelValue", x ?? ""), e.collectLabel && x !== void 0) {
          let C = {};
          for (let m of c.value)
            if (m[e.optionsValKey] === x) {
              C = JSON.parse(JSON.stringify(m));
              break;
            }
          o("on-change", C);
        }
      }
    }), A = N(() => e.searchKey ? {
      ...e.searchData,
      current: n.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: n.value
    });
    we(
      () => e.getOptions,
      (x) => {
        x ? b && O() : k();
      },
      { immediate: !0 }
    ), we(
      () => e.url,
      (x) => {
        x && (d = !0);
      }
    );
    const y = W();
    function w() {
      y.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", S);
    }
    function k() {
      b || (g.value = "", b = !0, s.value = "", c.value = [], n.value = 1, a = 1, f = {}, d = !1);
    }
    function V(x) {
      for (let C of c.value)
        if ((C == null ? void 0 : C.label) === x)
          return !0;
      return !1;
    }
    const S = ml(function(x) {
      var m;
      const C = (m = x == null ? void 0 : x.target) == null ? void 0 : m.value;
      V(C) || (Ce(C) ? (d ? k() : (xe(f) && (f.current = n.value, f.pages = a, f.options = ie(c.value)), Ce(g.value) && (g.value = "")), s.value = String(C), c.value = [], n.value = 1, b = !0, O()) : d ? (k(), O()) : (g.value = "", s.value = "", f.current ? (n.value = f.current, a = f.pages, c.value = ie(f.options), f = {}) : O()));
    }, 600);
    function B() {
      d && k(), n.value < a ? (++n.value, Fe(function() {
        O();
      })) : tl.warning({
        background: !0,
        content: I("r.noMore")
      });
    }
    function O() {
      return new Promise((x, C) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !Ce(s.value)) {
            x(!1);
            return;
          }
          De.get(e.url, A.value).then((m) => {
            var U;
            b = !1;
            let F = [];
            (U = m == null ? void 0 : m.data) != null && U.records ? (F = m.data.records, a = m.data.pages) : m != null && m.data && G(m.data) === "Array" ? (F = m.data, a = m.pages) : m != null && m.data && G(m.data) === "Object" && (F = [m.data], a = 1), typeof e.optionFilter == "function" && G(e.optionFilter) === "Function" && (F = e.optionFilter(F)), xe(F) || (F = F.map((P, z) => {
              let Q = I("r.optionLabel") + z;
              if (Array.isArray(e.optionsLabelKey)) {
                let ne = [];
                for (let be = 1, Ae = e.optionsLabelKey.length; be < Ae; be++)
                  ne.push(P[e.optionsLabelKey[be]]);
                Q = `${P[e.optionsLabelKey[0]]}(${String(ne)})`;
              } else
                zt(e.optionsLabelKey) && (Q = P[e.optionsLabelKey]);
              if (e.collectLabel) {
                let ne = ie(P);
                return delete ne.value, delete ne.label, {
                  value: P[e.optionsValKey],
                  label: Q,
                  ...ne
                };
              }
              return {
                value: P[e.optionsValKey],
                label: Q
              };
            })), c.value.push(...F);
            let h = {};
            c.value = c.value.filter((P) => h[P == null ? void 0 : P.value] ? !1 : (h[P == null ? void 0 : P.value] = !0, !0)), Fe(function() {
              o("update-option-finish");
            }), x(!0);
          }).catch(() => {
            tl.error(I("r.getDataError")), C(I("r.getDataError"));
          });
        } else
          x(!1);
      });
    }
    return Ee(w), (x, C) => {
      const m = q("Option"), F = q("Select"), h = Et("loadmore");
      return fe((L(), X(F, lt({
        modelValue: p(g),
        "onUpdate:modelValue": C[0] || (C[0] = (U) => Oe(g) ? g.value = U : null),
        ref_key: "selectScrollSourceRef",
        ref: y,
        "transfer-class-name": i
      }, x.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(v),
        disabled: x.disabled
      }), {
        default: Y(() => [
          (L(!0), K(ge, null, _e(p(c), (U, P) => (L(), X(m, {
            key: "op" + P,
            value: U == null ? void 0 : U.value,
            label: U == null ? void 0 : U.label,
            disabled: U == null ? void 0 : U.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [h, B, i]
      ]);
    };
  }
}), ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Pl,
  AsyncCascader: Ml,
  BtTablePage: Kt,
  CheckboxGroupThreeClass: xo,
  CheckboxGroupTwoClass: go,
  CheckboxTree: Xn,
  EditorPro: $l,
  FormGroup: qn,
  FormModal: Yn,
  FormR: kt,
  FullPop: ka,
  HeaderBt: gl,
  Hello: _a,
  IconTxtBtn: It,
  InputMap: Ol,
  MonthRange: Ul,
  Page404: Sa,
  PagePro: Tl,
  SearchForm: Nt,
  SelectInput: Ll,
  SelectScrollMore: Uo,
  ShowHidePanel: Ft,
  ShowHidePanelB: Za,
  SideMenu: Ja,
  TableIconBtn: Bl,
  TableSearch: ln,
  TableSetting: Sl,
  TransferBox: co,
  UploadGroup: Fl,
  WellCard: Fo
}, Symbol.toStringTag, { value: "Module" })), $o = { class: "a4Line aL notPrint" }, Ro = { class: "a4Line aR notPrint" }, Ko = { class: "a4Line bL notPrint" }, Do = { class: "a4Line bR notPrint" }, No = { class: "topsL notPrint" }, Eo = { class: "topsLTitle" }, zo = { class: "topsLBtn" }, Go = { class: "topsLHelp" }, Ho = { key: 0 }, Wo = /* @__PURE__ */ M("span", null, "1. ", -1), jo = { key: 1 }, Jo = /* @__PURE__ */ M("span", null, "2. ", -1), qo = { key: 2 }, Yo = /* @__PURE__ */ M("span", null, "1. ", -1), Xo = ["innerHTML"], Qo = /* @__PURE__ */ ue({
  __name: "PrintModal",
  setup(l) {
    const u = yl(), o = W(), e = W(!1), n = W(!1), a = W(!1), s = W(715), c = W(!1), f = W(), b = "tablePrint_" + Date.now().toString(), d = W(""), i = W([]), v = W([]), g = W(!1), A = N(() => ({
      width: s.value + "px"
    })), y = () => {
      f.value && window.sessionStorage.removeItem("print_" + f.value), window.sessionStorage.removeItem(b), window.close();
    }, w = () => {
      c.value && (c.value = !1);
    }, k = () => {
      g.value = !0;
    }, V = (x) => {
      g.value && (s.value = (x == null ? void 0 : x.layerX) - 20);
    }, S = () => {
      g.value && (g.value = !1);
    }, B = () => {
      c.value = !1;
      let x = window.setTimeout(() => {
        window.clearTimeout(x), window.print();
      }, 100);
    }, O = () => {
      var x, C, m, F, h;
      if (f.value = (x = u == null ? void 0 : u.params) == null ? void 0 : x.isFrom, f.value) {
        let U = window.sessionStorage.getItem("print_" + f.value);
        if (U) {
          const P = JSON.parse(U);
          if (!P) {
            e.value = !0;
            return;
          }
          i.value = P.columns, v.value = P.data, o.value = P.title, d.value = ((C = P == null ? void 0 : P.config) == null ? void 0 : C.customClass) || "", n.value = ((m = P == null ? void 0 : P.config) == null ? void 0 : m.domPrint) || !1, a.value = ((F = P == null ? void 0 : P.config) == null ? void 0 : F.autoPrint) || !1, s.value = ((h = P == null ? void 0 : P.config) == null ? void 0 : h.width) || 715, document.title = (o.value || I("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return Ee(() => {
      if (a.value) {
        let x = window.setTimeout(() => {
          window.clearTimeout(x), B();
        }, 100);
      }
      document.addEventListener("click", w), document.addEventListener("mousemove", V), document.addEventListener("mouseup", S);
    }), O(), (x, C) => {
      const m = q("Table");
      return L(), K("div", {
        class: Se(["tablePrintModal", [p(d)]])
      }, [
        fe(M("div", { class: "msgL notPrint" }, E(p(I)("r.printGuide.9")), 513), [
          [ye, p(e)]
        ]),
        fe(M("div", $o, [
          M("p", null, E(p(I)("r.printGuide.7")), 1),
          ve(),
          M("p", null, E(p(I)("r.printGuide.5")), 1)
        ], 512), [
          [ye, !p(e)]
        ]),
        fe(M("div", Ro, [
          M("p", null, E(p(I)("r.printGuide.7")), 1),
          ve(),
          M("p", null, E(p(I)("r.printGuide.6")), 1)
        ], 512), [
          [ye, !p(e)]
        ]),
        fe(M("div", Ko, [
          M("p", null, E(p(I)("r.printGuide.8")), 1),
          ve(),
          M("p", null, E(p(I)("r.printGuide.5")), 1)
        ], 512), [
          [ye, !p(e)]
        ]),
        fe(M("div", Do, [
          M("p", null, E(p(I)("r.printGuide.8")), 1),
          ve(),
          M("p", null, E(p(I)("r.printGuide.6")), 1)
        ], 512), [
          [ye, !p(e)]
        ]),
        fe(M("div", No, [
          M("div", Eo, E(p(o) || p(I)("r.print")), 1),
          M("div", zo, [
            j(It, {
              icon: "md-help-circle",
              name: p(I)("r.help"),
              onClick: C[0] || (C[0] = St((F) => c.value = !p(c), ["stop"]))
            }, null, 8, ["name"]),
            j(It, {
              icon: "md-print",
              name: p(I)("r.preview"),
              onClick: B
            }, null, 8, ["name"]),
            p(n) ? re("", !0) : (L(), X(Sl, {
              key: 0,
              modelValue: p(i),
              "onUpdate:modelValue": C[1] || (C[1] = (F) => Oe(i) ? i.value = F : null),
              "s-key": b,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            j(Bl, {
              icon: "md-close",
              onClick: y,
              title: p(I)("r.close")
            }, null, 8, ["title"])
          ]),
          fe(M("div", Go, [
            p(n) ? re("", !0) : (L(), K("p", Ho, [
              Wo,
              M("span", null, E(p(I)("r.printGuide.1")), 1)
            ])),
            p(n) ? re("", !0) : (L(), K("p", jo, [
              Jo,
              M("span", null, E(p(I)("r.printGuide.2")), 1)
            ])),
            p(n) ? (L(), K("p", qo, [
              Yo,
              M("span", null, E(p(I)("r.printGuide.10")), 1)
            ])) : re("", !0),
            M("p", null, [
              M("span", null, E(p(n) ? "2. " : "3. "), 1),
              M("span", null, E(p(I)("r.printGuide.3")), 1)
            ]),
            M("p", null, [
              M("span", null, E(p(n) ? "3. " : "4. "), 1),
              M("span", null, E(p(I)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [ye, p(c)]
          ])
        ], 512), [
          [ye, !p(e)]
        ]),
        p(n) ? (L(), K("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: le(p(A))
        }, [
          M("div", {
            class: "settingLine",
            onMousedown: St(k, ["stop"])
          }, null, 32)
        ], 4)) : re("", !0),
        p(n) ? (L(), K("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(v),
          style: le(p(A))
        }, null, 12, Xo)) : re("", !0),
        p(n) ? re("", !0) : fe((L(), X(m, {
          key: 2,
          class: "tablePW",
          columns: p(i),
          data: p(v),
          border: ""
        }, null, 8, ["columns", "data"])), [
          [ye, !p(e)]
        ])
      ], 2);
    };
  }
});
let We = null;
function dl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const u = document.createElement("style");
  u.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(u);
}
function Zo(l) {
  l != null && l.addRoute && (l.hasRoute("tablePrint") || l.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Qo
  })), We = l, location.pathname.indexOf("tablePrint") > -1 ? (We.push(location.pathname), dl()) : location.hash.indexOf("tablePrint") > -1 && (We.push(location.hash.replace(/^#/, "")), dl());
}
function Rl(l) {
  return G(l) === "Object" && (l.width = l.minWidth || 100, l.sortable = !1, delete l.minWidth, delete l.__id, l.resizable = !0, l.children && G(l.children) === "Array" && (l.children = l.children.map(Rl))), l;
}
function ei(l, u, o, e) {
  var b, d, i;
  if (!We)
    return;
  let n;
  if (!(e != null && e.domPrint)) {
    let v = ie(
      l.filter((g) => (g == null ? void 0 : g.key) || (g == null ? void 0 : g.children))
    );
    v[0].type === "selection" && v.shift(), v.length ? n = v.map(Rl) : n = [];
  }
  let a = (d = (b = We == null ? void 0 : We.currentRoute) == null ? void 0 : b.value) == null ? void 0 : d.fullPath;
  a && (a = (i = a.replace) == null ? void 0 : i.call(a, /\//g, "_"));
  let s = {
    data: u,
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
  print: ei,
  init: Zo
};
function ti(l = "", u = "", o = {}) {
  o.domPrint = !0, o.width || (o.width = 715), Gt.print([], l, u, o);
}
function li(l) {
  const u = (...a) => ze.apply(this, a), o = u("r.closePreview"), e = u("r.fullImg");
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
              src: l,
              alt: e
            }),
            Ve(na, {
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
  }), Me(() => {
    var c, f, b, d, i, v;
    const a = (d = (b = (f = (c = document.getElementById(n)) == null ? void 0 : c.parentElement) == null ? void 0 : f.parentElement) == null ? void 0 : b.parentElement) == null ? void 0 : d.parentElement, s = (v = (i = document.getElementById(n)) == null ? void 0 : i.parentElement) == null ? void 0 : v.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), s && (s.style.display = "none");
  }, 10);
}
function ai(l, u, o, e) {
  const n = (...a) => ze.apply(this, a);
  Pe.call(this, {
    title: l || n("r.info.title"),
    text: u || n("r.info.text"),
    icon: o || "warning",
    onOk: e,
    buttons: [n("r.cancel")]
  });
}
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: De,
  $swal: Pe,
  $swalConfirm: ai,
  domPrint: ti,
  fullScreenImgByDom: Qe,
  fullScreenImgPreview: li,
  messageBox: Rt,
  setInterval: tn,
  setTimeout: Me,
  tablePrint: Gt
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class l {
    constructor() {
      nt(this, "title");
      nt(this, "iconSvg");
      nt(this, "tag");
      nt(this, "alwaysEnable");
      this.title = ze("r.preview"), this.iconSvg = '<svg t="1656644788547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12356" width="256" height="256"><path d="M512 1024H135.4C60.7 1024 0 963.3 0 888.6V135.4C0 60.7 60.7 0 135.4 0h753.2C963.3 0 1024 60.7 1024 135.4V512c0 24.9-20.1 45-45 45s-45-20.1-45-45V135.4c0-25-20.4-45.4-45.4-45.4H135.4c-25 0-45.4 20.4-45.4 45.4v753.2c0 25 20.4 45.4 45.4 45.4H512c24.9 0 45 20.1 45 45s-20.1 45-45 45z" p-id="12357"></path><path d="M512 802c-77.5 0-150.3-30.2-205.1-84.9C252.2 662.3 222 589.5 222 512s30.2-150.3 84.9-205.1S434.5 222 512 222s150.3 30.2 205.1 84.9C771.8 361.7 802 434.5 802 512s-30.2 150.3-84.9 205.1C662.3 771.8 589.5 802 512 802z m0-490c-110.3 0-200 89.7-200 200s89.7 200 200 200 200-89.7 200-200-89.7-200-200-200z" p-id="12358"></path><path d="M978.5 1023.5c-11.5 0-23-4.4-31.8-13.2L653.2 716.8c-17.6-17.6-17.6-46.1 0-63.6 17.6-17.6 46.1-17.6 63.6 0l293.5 293.5c17.6 17.6 17.6 46.1 0 63.6-8.8 8.8-20.3 13.2-31.8 13.2z" p-id="12359"></path></svg>', this.tag = "button", this.alwaysEnable = !0;
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
      var f, b, d, i, v, g, A, y, w;
      const n = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, s = localStorage.getItem("editorPreviewH") || 500;
      const c = (f = e == null ? void 0 : e.getHtml) == null ? void 0 : f.call(e);
      if (n) {
        let k = (g = (v = (i = (d = (b = n.children) == null ? void 0 : b[0]) == null ? void 0 : d.children) == null ? void 0 : i[1]) == null ? void 0 : v.children) == null ? void 0 : g[0], V = (w = (y = (A = n.children) == null ? void 0 : A[0]) == null ? void 0 : y.children) == null ? void 0 : w[1];
        k && (k.innerHTML = c, k.style.width = a + "px"), V && (V.style.height = s + "px"), n.style.display = "block";
      } else {
        const k = document.body, V = document.createElement("div");
        V.setAttribute("id", "editor-preview"), V.setAttribute("class", "editor-preview-mask"), V.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${s}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let S = V.children[0].children[1], B = V.children[0].children[1].children[0], O = V.children[0].children[0].children[0].children[1];
        const x = 40, C = 70, m = (P) => {
          var ne;
          if ((P == null ? void 0 : P.type) === "keyup") {
            let be = !1;
            if (P.key && (be = P.key !== "Enter"), be)
              return;
          }
          let z = (ne = P == null ? void 0 : P.target) == null ? void 0 : ne.value;
          if (z = Number(z), B.style && B.style.width === z + "px")
            return;
          const Q = k.clientWidth;
          z < 250 ? (z = 250, P.target.value = 250) : z > Q - x && (z = Q - x, P.target.value = Q - x), B.style.width = z + "px", localStorage.setItem("editorPreviewW", z);
        };
        O.addEventListener("blur", m), O.addEventListener("keyup", m);
        let F = V.children[0].children[0].children[0].children[3];
        const h = (P) => {
          var ne;
          if ((P == null ? void 0 : P.type) === "keyup") {
            let be = !1;
            if (P.key && (be = P.key !== "Enter"), be)
              return;
          }
          let z = (ne = P == null ? void 0 : P.target) == null ? void 0 : ne.value;
          if (z = Number(z), S.style && S.style.height === z + "px")
            return;
          const Q = k.clientHeight;
          z < 300 ? (z = 300, P.target.value = 300) : z > Q - C && (z = Q - C, P.target.value = Q - C), S.style.height = z + "px", localStorage.setItem("editorPreviewH", z);
        };
        F.addEventListener("blur", h), F.addEventListener("keyup", h), V.children[0].children[0].children[1].addEventListener("click", () => {
          V.style.display = "none";
        }), B.innerHTML = c, B.style.width = a + "px", S.style.height = s + "px", k.append(V);
      }
    }
  }
  const u = {
    key: "previewX",
    factory() {
      return new l();
    }
  };
  ua.registerMenu(u), window.wangeditorMenuInit = !0;
})();
const Vi = yt.use, Ci = yt.i18n, cl = {
  ...ni,
  ...za
}, oi = function(l, u = {}) {
  De.init(u.useStore || u.store, l), l.use(da), u.locale && yt.use(u.locale), u.i18n && yt.i18n(u.i18n), u.router && (en(u.router), Gt.init(u.router)), u.amap && kn(u.amap), u.notRegistryGlobal || (Object.keys(ul).forEach((o) => {
    l.component(o) || l.component(o, ul[o]);
  }), Object.keys(cl).forEach((o) => {
    l.config.globalProperties[o] = cl[o];
  })), l.directive("has") || l.directive("has", (o, e) => {
    e.value && !Vl(e.value) && (o.style.display = "none");
  }), l.directive("loadmore") || l.directive("loadmore", {
    mounted(o, e) {
      var a;
      let n = o;
      e.arg && (n = (a = document.getElementsByClassName(e.arg)) == null ? void 0 : a[0]), n && n.addEventListener("scroll", function() {
        n.scrollTop > 0 && n.scrollHeight - n.scrollTop <= n.clientHeight && e.value();
      });
    }
  }), l.config.globalProperties.pageSizes = [10, 20, 50, 100], l.config.globalProperties.searchFormLabelWidth = 84, l.config.globalProperties.searchFormItemWidth = 202, l.config.globalProperties.formModalLabelWidth = 140, l.config.globalProperties.formModalWidth = 520, l.config.globalProperties.formGroupLabelWidth = 160, l.config.globalProperties.formGroupWidth = "100%", l.config.globalProperties.iconTxtBtnIconSize = 17, l.config.globalProperties.btTablePageUsePagePro = !1, l.config.globalProperties.tableSettingBg = "#fff";
}, Ai = { install: oi };
export {
  De as $fetch,
  Pe as $swal,
  ai as $swalConfirm,
  Pl as AlCascaderMC,
  Ml as AsyncCascader,
  Kt as BtTablePage,
  xo as CheckboxGroupThreeClass,
  go as CheckboxGroupTwoClass,
  Xn as CheckboxTree,
  $l as EditorPro,
  qn as FormGroup,
  Yn as FormModal,
  kt as FormR,
  ka as FullPop,
  gl as HeaderBt,
  _a as Hello,
  It as IconTxtBtn,
  Ol as InputMap,
  Ul as MonthRange,
  Sa as Page404,
  Tl as PagePro,
  Nt as SearchForm,
  Ll as SelectInput,
  Uo as SelectScrollMore,
  Ft as ShowHidePanel,
  Za as ShowHidePanelB,
  Ja as SideMenu,
  Bl as TableIconBtn,
  ln as TableSearch,
  Sl as TableSetting,
  co as TransferBox,
  Fl as UploadGroup,
  Fo as WellCard,
  Mt as clearObj,
  Na as dataFilterOrToUrl,
  Fa as decimalDigitsLimit,
  Ai as default,
  ti as domPrint,
  wl as downloadFileByFormSubmit,
  Ta as downloadFileReaderFile,
  wi as emptyInput,
  La as fakeALinkClick,
  Ua as fileExport,
  Xe as findCollection,
  Ot as findPath,
  Oa as formDataHeadConfig,
  Qe as fullScreenImgByDom,
  li as fullScreenImgPreview,
  $a as getColumnsKeys,
  At as getFileSrc,
  bl as getFileTypeByName,
  nl as getFileTypeIconByName,
  Ia as getStringWidth,
  Vl as hasPermission,
  ki as htmlDecode,
  bi as htmlEncode,
  Ea as htmlPrint,
  Ci as i18n,
  oi as install,
  Ka as isEmptyValue,
  Bt as isImgByFile,
  Cl as isNaN,
  Ra as isNumberValue,
  Ce as isValidValue,
  Vi as locale,
  Rt as messageBox,
  G as myTypeof,
  Pa as oneOf,
  Pt as removeEmptyValue,
  tn as setInterval,
  Me as setTimeout,
  Ze as setValByOption,
  Al as siblingElems,
  _i as stopBubbling,
  Da as stringLength,
  Gt as tablePrint,
  Ma as toFormData,
  xa as toHump,
  kl as toLine,
  _l as tooltipManual,
  vt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
