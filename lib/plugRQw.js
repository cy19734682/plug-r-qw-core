var zl = Object.defineProperty;
var Gl = (l, d, o) => d in l ? zl(l, d, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[d] = o;
var tt = (l, d, o) => (Gl(l, typeof d != "symbol" ? d + "" : d, o), o);
import { getCurrentInstance as ht, defineComponent as re, resolveComponent as J, openBlock as S, createElementBlock as U, normalizeClass as Be, normalizeStyle as ee, createBlock as Y, createCommentVNode as ce, renderSlot as xe, ref as G, computed as K, withDirectives as de, unref as p, createElementVNode as L, toDisplayString as N, createVNode as W, withCtx as q, createTextVNode as he, vShow as me, resolveDirective as $t, h as Ve, Fragment as ve, renderList as ke, onBeforeMount as Hl, watch as be, nextTick as Pe, isRef as Ie, onMounted as De, withModifiers as _t, mergeProps as Ze, onUnmounted as Wl, shallowRef as ut, triggerRef as jl, onBeforeUnmount as Jl, createSlots as Qe } from "vue";
import ql from "deepmerge";
import { isObject as Yl, isFunction as Xl, isPlainObject as Ye, cloneDeep as oe, isEmpty as Se, isBoolean as Ql, isNumber as Xe, debounce as cl, isString as Kt, last as dt, isEqual as nt, first as Vt, find as Ct, indexOf as Xt, findIndex as fl, remove as Zl } from "lodash-es";
import it from "sweetalert";
import { Tooltip as ea, Modal as ze, Button as bt, TableColumnConfig as ta, Radio as la, Input as aa, Message as Qt, Icon as na } from "view-ui-plus";
import { useRouter as oa, useRoute as pl } from "vue-router";
import At from "axios";
import ia from "ar-cascader";
import { Toolbar as sa, Editor as ra } from "@wangeditor/editor-for-vue";
import lt from "moment";
import { Boot as ua } from "@wangeditor/editor";
import da from "vue-json-viewer";
const ml = {
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
  function d(o, ...e) {
    let n;
    return e.length === 1 && typeof e[0] == "object" && (n = e[0]), (!n || !n.hasOwnProperty) && (n = {}), o === void 0 ? "" : o.replace(ca, (a, s, f, c) => {
      let y;
      return o[c - 1] === "{" && o[c + a.length] === "}" ? f : (y = l(n, f) ? n[f] : null, y ?? "");
    });
  }
  return d;
}
const pa = fa();
let ct = ml;
const ma = {
  zh: ml
};
let Zt, el = {}, Le, ha = function(l, d) {
  if (typeof this == "object" && Reflect.has(this, "$t"))
    return this.$t(l, d);
  if (Le && Le.global)
    return Le.global.t(l, d);
  if (Le && Le.locale) {
    if (!el[Le.locale] || Zt != Le.locale) {
      el[Le.locale] = !0;
      let o = Le.getLocaleMessage(Le.locale) || {}, e = ql(ma[Le.locale], o, { clone: !0 });
      ct = e, Le.setLocaleMessage(Le.locale, e), Zt = Le.locale;
    }
    return Le.hlang(l, d);
  }
};
const Ne = function(l, d) {
  let o = ha.apply(this, [l, d]);
  if (o != null)
    return o;
  const e = l.split(".");
  let n = ct;
  for (let a = 0, s = e.length; a < s; a++) {
    const f = e[a];
    if (o = n[f], a === s - 1)
      return pa(o, d);
    if (!o)
      return "";
    n = o;
  }
  return "";
}, ya = function(l) {
  ct = l || ct;
}, va = function(l) {
  Le = l;
}, ft = {
  use: ya,
  t: Ne,
  i18n: va
};
function T(l, d) {
  var e, n, a;
  const o = (a = (n = (e = ht()) == null ? void 0 : e.appContext) == null ? void 0 : n.config) == null ? void 0 : a.globalProperties;
  return Ne.apply(o, [l, d]);
}
const hl = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = l, e = d;
    function n() {
      o.disabled || e("click");
    }
    return (a, s) => {
      const f = J("Icon");
      return S(), U("div", {
        class: Be({ headerBtCTM: !0, withIconCTM: o.icon || o.withIcon, disabled: o.disabled }),
        style: ee({ color: o.color, borderLeftColor: o.borderColor }),
        onClick: n
      }, [
        o.icon ? (S(), Y(f, {
          key: 0,
          size: o.iconSize,
          type: o.icon
        }, null, 8, ["size", "type"])) : ce("", !0),
        xe(a.$slots, "default")
      ], 6);
    };
  }
}), ga = { class: "headerTxtAM" }, ba = { class: "contentAM" }, ka = /* @__PURE__ */ re({
  __name: "FullPop",
  props: {
    title: {},
    headerColor: {},
    headerBg: {},
    headerFontSize: { default: 12 },
    zIndex: { default: 1e3 }
  },
  emits: ["on-open", "on-close"],
  setup(l, { expose: d, emit: o }) {
    const e = l, n = o;
    let a = G(!1);
    const s = K(() => typeof e.headerFontSize == "number" ? e.headerFontSize + "px" : e.headerFontSize), f = K(() => ({ zIndex: e.zIndex }));
    function c() {
      a.value = !0, n("on-open");
    }
    function y(u) {
      a.value = !1, n("on-close", u === !0);
    }
    return d({
      open: c,
      close: y
    }), (u, i) => de((S(), U("div", {
      class: "fullScreenPopBoxAM",
      style: ee(p(f))
    }, [
      L("div", {
        class: "headerAM",
        style: ee({ color: e.headerColor, backgroundColor: e.headerBg, fontSize: p(s) })
      }, [
        L("span", ga, N(u.title || p(T)("r.title")), 1),
        W(hl, {
          icon: "md-return-left",
          onClick: y
        }, {
          default: q(() => [
            he(N(p(T)("r.back")), 1)
          ]),
          _: 1
        })
      ], 4),
      L("div", ba, [
        xe(u.$slots, "default")
      ])
    ], 4)), [
      [me, p(a)]
    ]);
  }
}), wa = { class: "msg" }, _a = /* @__PURE__ */ re({
  __name: "Hello",
  setup(l) {
    let d = G("Greetings from Ricky.");
    return (o, e) => (S(), U("span", wa, N(p(d)), 1));
  }
});
function Ke() {
  const { appContext: l } = ht();
  return l.config.globalProperties;
}
const Bt = /* @__PURE__ */ re({
  __name: "IconTxtBtn",
  props: {
    name: {},
    icon: { default: "md-download" },
    size: { default: () => Ke().iconTxtBtnIconSize },
    disabled: { type: Boolean, default: !1 },
    has: { default: "" }
  },
  emits: ["click"],
  setup(l, { emit: d }) {
    const o = l, e = d, n = K(() => Math.floor(o.size / 17 * 12) + "px");
    function a(s) {
      o.disabled || e("click", s);
    }
    return (s, f) => {
      const c = J("Icon"), y = $t("has");
      return de((S(), U("div", {
        class: Be(["tabTopBtnsT", { disabled: o.disabled }]),
        onClick: a,
        style: ee({ "font-size": p(n) })
      }, [
        W(c, {
          type: o.icon,
          size: o.size
        }, null, 8, ["type", "size"]),
        he(" " + N(o.name || p(T)("r.button")), 1)
      ], 6)), [
        [y, s.has]
      ]);
    };
  }
}), Va = { class: "c404K" }, Ca = /* @__PURE__ */ L("div", { class: "t404" }, "404", -1), Aa = { class: "ct404" }, Ba = { class: "p404" }, Sa = /* @__PURE__ */ re({
  __name: "Page404",
  setup(l) {
    const o = ht().appContext.config.globalProperties.$router;
    function e() {
      o.go(-1);
    }
    return (n, a) => {
      const s = J("Button");
      return S(), U("div", Va, [
        Ca,
        L("div", Aa, "UH OH! " + N(p(T)("r.pageNotFound")), 1),
        L("div", Ba, N(p(T)("r.notFoundMsg")), 1),
        W(s, {
          class: "bt404",
          onClick: e
        }, {
          default: q(() => [
            he(N(p(T)("r.back")), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
function Me(l, d, o) {
  const e = (...n) => Ne.apply(this, n);
  return new Promise((n, a) => {
    if (typeof l == "object" && !Array.isArray(l)) {
      let s = e("r.confirm"), f = e("r.cancel"), c = !1, y = "swalConfirmBt", u = "swalCancelBt";
      const i = /^HTML.*Element$/;
      l.type && (l.icon = l.type) && delete l.type, l.content && (l.text = l.content) && delete l.content, l.className = l.className || "swalBoxX";
      let v = "";
      l.text && i.test(z(l.text)) ? v = "content" : l.text && z(l.text) === "String" && (v = "text"), l.buttons && (typeof l.buttons == "object" && !Array.isArray(l.buttons) ? l.buttons.cancel && (l.buttons.cancel.text && (f = l.buttons.cancel.text) && (c = !0), l.buttons.cancel.className && (u = l.buttons.cancel.className), l.buttons.confirm.text && (s = l.buttons.confirm.text), l.buttons.confirm.className && (y = l.buttons.confirm.className)) : Array.isArray(l.buttons) && (l.buttons[0] && (f = l.buttons[0], c = !0), l.buttons[1] && (s = l.buttons[1]))), it({
        title: l.title,
        icon: l.icon,
        className: l.className,
        [v]: l.text,
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
            visible: c,
            className: u
          }
        }
      }).then((g) => {
        g && typeof l.onOk == "function" && l.onOk(), n(g);
      }).catch((g) => {
        a(g);
      });
    } else if (typeof l == "string") {
      let s = "";
      if (d)
        switch (typeof d) {
          case "string":
            s = "text";
            break;
          case "object":
            s = "content";
            break;
        }
      it({
        title: l,
        [s]: d || "",
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
    } else if (typeof l == "boolean")
      !l && it.close && it.close();
    else
      throw new TypeError("swal第一个参数类型有误，仅支持Object/String/false");
  });
}
function Ta(l) {
  return l.replace(/_(\w)/g, function(d, o) {
    return o.toUpperCase();
  });
}
function bi(l) {
  let d = document.createElement("div");
  return d.textContent !== void 0 ? d.textContent = l : d.innerText = l, d.innerHTML;
}
function ki(l) {
  let d = document.createElement("div");
  return d.innerHTML = l, d.innerText || d.textContent;
}
function kt(l) {
  return new Promise((d) => {
    let o = new FileReader();
    o.readAsDataURL(l), o.onloadend = () => {
      d(o.result);
    };
  });
}
function yl(l) {
  return (l == null ? void 0 : l.split(".").pop().toLocaleLowerCase()) || "";
}
function wt(l) {
  return z(l) === "String" && l.indexOf("image") > -1;
}
function tl(l) {
  const d = yl(l);
  let o = "ios-document-outline";
  return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(d) > -1 ? o = "ios-image" : ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(d) > -1 ? o = "ios-film" : ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(d) > -1 ? o = "ios-musical-notes" : ["doc", "txt", "docx", "pages", "epub", "pdf"].indexOf(d) > -1 ? o = "md-document" : ["numbers", "csv", "xls", "xlsx"].indexOf(d) > -1 ? o = "ios-stats" : ["keynote", "ppt", "pptx"].indexOf(d) > -1 && (o = "ios-videocam"), o;
}
function xa(l, d) {
  let o = document.createElement("a");
  o.href = d, o.download = l, La(o);
}
function La(l) {
  let d = document.createEvent("MouseEvents");
  d.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.dispatchEvent(d);
}
function St({
  group: l,
  condition: d,
  pathKey: o,
  childKey: e = "children",
  path: n = []
}) {
  if (l && Yl(l)) {
    if (Xl(d)) {
      if (Ye(l)) {
        let a = l, s = oe(n);
        if (d(a))
          return o && a[o] && s.push(a[o]), s;
        if (a[e] && !Se(a[e])) {
          o && a[o] && s.push(a[o]);
          let f = St({
            group: a[e],
            condition: d,
            pathKey: o,
            childKey: e,
            path: s
          });
          if (!Se(f))
            return f;
        }
      } else if (Array.isArray(l))
        for (let a of l) {
          let s = oe(n);
          if (d(a))
            return o && a[o] ? s.push(a[o]) : s.push(String(l.indexOf(a))), s;
          if (a[e] && a[e].length > 0) {
            o && a[o] ? s.push(a[o]) : s.push(String(l.indexOf(a)));
            let f = St({
              group: a[e],
              condition: d,
              pathKey: o,
              childKey: e,
              path: s
            });
            if (!Se(f))
              return f;
          }
        }
    } else if (Array.isArray(l))
      for (let a of l) {
        let s = oe(n);
        if (a === d)
          return s.push(String(l.indexOf(a))), s;
      }
  }
  return [];
}
function Ia(l, d = 12) {
  if (z(l) === "String" && l.length > 0) {
    let o = document.createElement("span");
    o.style.fontSize = d + "px", o.style.fontFamily = "inherit", o.innerHTML = l, o.style.opacity = "0", o.style.position = "fixed", o.style.top = "3000px", document.body.append(o);
    const e = o.clientWidth;
    return document.body.removeChild(o), e;
  }
  return 0;
}
function wi(l) {
  return l === "" ? null : l;
}
function _i(l) {
  l = l || window.Event, l.stopPropagation ? l.stopPropagation() : l.cancelBubble = !0;
}
function z(l) {
  return Object.prototype.toString.call(l).replace(/\[object |]/g, "");
}
function vl(l) {
  return l.replace(/([A-Z])/g, "_$1").toLowerCase();
}
function pt(l) {
  let d = z(l);
  if (d === "Object") {
    for (let o in l)
      if (l.hasOwnProperty(o)) {
        let e = z(l[o]);
        e === "String" ? l[o] = l[o].trim() : (e === "Object" || e === "Array") && pt(l[o]);
      }
  } else if (d === "Array")
    for (let o = 0, e = l.length; o < e; o++) {
      let n = z(l[o]);
      n === "String" ? l[o] = l[o].trim() : (n === "Array" || n === "Object") && pt(l[o]);
    }
  return l;
}
function Tt(l, d = []) {
  if (z(l) === "Array")
    return l.forEach((o, e) => {
      switch (z(o)) {
        case "Array":
        case "Object":
          Tt(o);
          break;
        default:
          l[e] = null;
      }
    }), l;
  if (z(l) === "Object") {
    for (let o in l)
      if (l.hasOwnProperty(o)) {
        let e = !0;
        for (let n of d)
          if (n === o) {
            e = !1;
            break;
          }
        if (e)
          switch (z(l[o])) {
            case "Array":
            case "Object":
              Tt(l[o]);
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
  let d = new FormData();
  for (let o in l)
    l.hasOwnProperty(o) && l[o] !== null && d.append(o, l[o]);
  return d;
}
function je(l, d, o = !1) {
  if (!l || !d)
    return !1;
  let e, n = "notFoundC", a = function(s, f) {
    if (Array.isArray(s)) {
      if (z(f) === "Function" && f(s))
        return n = s, [];
      for (let c of s) {
        if (n !== "notFoundC")
          break;
        if (z(f) === "Function" && f(c) || c === f)
          return n = c, [s.indexOf(c)];
        if (z(c) === "Array" || z(c) === "Object") {
          let y = a(c, f);
          if (y !== void 0)
            return [s.indexOf(c), ...y];
        }
      }
    } else if (z(s) === "Object") {
      if (z(f) === "Function" && f(s))
        return n = s, [];
      for (let c in s) {
        if (n !== "notFoundC")
          break;
        if (s.hasOwnProperty(c)) {
          if (z(f) === "Function" && f(c) || s[c] === f)
            return n = s[c], [c];
          if (z(s[c]) === "Object" || z(s[c]) === "Array") {
            let y = a(s[c], f);
            if (y !== void 0)
              return [c, ...y];
          }
        }
      }
    }
  };
  return e = a(l, d), o ? e || !1 : n === "notFoundC" ? !1 : n;
}
function Pa(l, d) {
  for (let o = 0, e = d.length; o < e; o++)
    if (l === d[o])
      return !0;
  return !1;
}
function Fa(l, d = 2) {
  let o = new RegExp(`(^-?\\d+\\.\\d{${d}})(\\d+$)`), e = l && String(l) || "";
  return o.test(e) ? Number(e.replace(o, "$1")) : l;
}
function gl(l, d = {}, o = "get") {
  let e = document.createElement("form"), n = document.getElementsByTagName("body")[0];
  n.appendChild(e), e.setAttribute("style", "display:none"), e.setAttribute("target", ""), e.setAttribute("method", o);
  let a = l;
  if (window && window.hasOwnProperty("g")) {
    let s = Object.keys(window.g).filter((f) => f.indexOf("URL") > -1).map((f) => f.replace("URL", ""));
    for (let f of s) {
      let c = new RegExp("^/" + f + "(?=/.*$)", "i");
      if (c.test(l) && window.g[f + "URL"]) {
        a = window.g[f + "URL"] + l.replace(c, "");
        break;
      }
    }
  }
  if (e.setAttribute("action", a), Ye(d)) {
    for (let f in d)
      if (d.hasOwnProperty(f) && (d[f] || d[f] === 0 || d[f] === !1 || d[f] === "")) {
        let c = document.createElement("input");
        c.setAttribute("type", "hidden"), c.setAttribute("name", f), c.setAttribute("value", d[f]), e.appendChild(c);
      }
    e.submit();
    let s = setTimeout(() => {
      n.removeChild(e), clearTimeout(s), s = null;
    }, 8e3);
  } else
    console.error("请求数据格式有误，无法下载文件");
}
function Ua(l, d = {}, o = "get") {
  if (d.hasOwnProperty("columns") && (d.columns === "" || d.columns === null || d.columns === void 0)) {
    Me.call(this, {
      title: "需要导出的列不能为空",
      type: "warning"
    });
    return;
  }
  gl(l, d, o);
}
function $a(l, d, o = !1) {
  let e;
  if (l && z(d) === "Array") {
    let n = localStorage.getItem(l);
    if (n) {
      let a = JSON.parse(decodeURI(n));
      e = d.filter((s) => s.key && a.indexOf(s.title) !== -1).map((s) => s.key);
    } else
      e = d.map((a) => a.key);
  } else
    e = [];
  return o || (e = String(e)), e;
}
function _e(l) {
  return l != null && l !== "";
}
function Ka(l) {
  return /^-?\d+(.\d+)?$/.test(l);
}
function bl(l, d = !1, o = "") {
  return function(e, n) {
    var c, y;
    let a;
    if (Array.isArray(l)) {
      let u = [];
      for (let i of l)
        _e((c = n.row) == null ? void 0 : c[i]) && u.push(n.row[i]);
      a = u.join(o);
    } else
      typeof l == "function" ? a = l(n) : a = (y = n.row) == null ? void 0 : y[l];
    let s = Ia(a), f = n.column._width;
    return a && s > f ? Ve(
      ea,
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
    ) : Ve("span", d && !_e(a) ? "--" : a);
  };
}
function Ra(l) {
  if (Ye(l)) {
    for (let d in l)
      if (l.hasOwnProperty(d) && _e(l[d]))
        return !1;
    return !0;
  } else if (Array.isArray(l)) {
    for (let d of l)
      if (_e(d))
        return !1;
    return !0;
  }
  return !_e(l);
}
function Da(l) {
  return z(l) === "String" ? l.replace(/[^\x00-\xff]/g, "01").length : z(l) === "Number" ? (l += "", l.replace(/[^\x00-\xff]/g, "01").length) : 0;
}
function qe({
  group: l,
  condition: d,
  key: o,
  val: e,
  childKey: n = "children"
}) {
  if (z(l) !== "Array" || z(d) !== "Function" || z(o) !== "String" || z(n) !== "String")
    return !1;
  l.forEach((a) => {
    d(a) && (z(e) === "Function" ? a[o] = e(a[o]) : a[o] = e), z(a[n]) === "Array" && a[n].length > 0 && qe({
      group: a[n],
      condition: d,
      key: o,
      val: e,
      childKey: n
    });
  });
}
function kl(l) {
  let d = sessionStorage.getItem("btnPermissions");
  return d ? d.split(",").indexOf(l) > -1 : !1;
}
function wl(l) {
  return z(l) === "Number" && String(l) === "NaN";
}
function Na(l, d = !1, o = !1) {
  if (z(l) !== "Object")
    return l;
  let e = Object.assign(l, {}), n = "";
  for (let a in e)
    if (e.hasOwnProperty(a)) {
      let s = e[a];
      s === void 0 || s === "" || z(s) === "String" && s.trim() === "" || s === null || wl(s) ? o ? d ? n += a + "=&" : e[a] = "" : delete e[a] : d && (n += a + "=" + s + "&");
    }
  return d ? n.length > 0 ? n.substring(0, n.length - 1) : "" : e;
}
function xt(l) {
  let d = {};
  if (Array.isArray(l)) {
    d = [];
    for (let o of l)
      Array.isArray(o) || Ye(o) ? d.push(xt(o)) : _e(o) && d.push(o);
  } else if (Ye(l))
    for (let o in l)
      l.hasOwnProperty(o) && (Array.isArray(l[o]) || Ye(l[o]) ? d[o] = xt(l[o]) : _e(l[o]) && (d[o] = l[o]));
  return d;
}
function Ea(l) {
  const d = window.open();
  if (d) {
    d.document.write(l);
    let o = setTimeout(() => {
      d.print(), window.clearTimeout(o), o = null;
    }, 10);
  }
}
function _l(l) {
  let d = [], o = l;
  for (; l.previousSibling && (l = l.previousSibling); )
    l.nodeType === 1 && d.push(l);
  for (; o.nextSibling && (o = o.nextSibling); )
    o.nodeType === 1 && d.push(o);
  return d;
}
const za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearObj: Tt,
  dataFilterOrToUrl: Na,
  decimalDigitsLimit: Fa,
  downloadFileByFormSubmit: gl,
  fileExport: Ua,
  findCollection: je,
  formDataHeadConfig: Oa,
  getColumnsKeys: $a,
  hasPermission: kl,
  htmlPrint: Ea,
  isEmptyValue: Ra,
  isNaN: wl,
  isNumberValue: Ka,
  isValidValue: _e,
  myTypeof: z,
  oneOf: Pa,
  removeEmptyValue: xt,
  setValByOption: qe,
  siblingElems: _l,
  stringLength: Da,
  toFormData: Ma,
  toLine: vl,
  tooltipManual: bl,
  trimObj: pt
}, Symbol.toStringTag, { value: "Module" })), Ga = { class: "groupBoxRP" }, Ha = ["onClick"], Wa = /* @__PURE__ */ re({
  __name: "SideMenuGroup",
  props: {
    data: { default: () => [] },
    pathName: { default: "" }
  },
  setup(l) {
    const d = oa(), o = l;
    function e(a) {
      return a.path === o.pathName ? "active" : "";
    }
    function n(a, s) {
      a.preventDefault();
      let f = a.target;
      if (!s.children && !f.classList.contains("active")) {
        d.push(s.path);
        return;
      }
      let c = f.parentNode, y = _l(c);
      for (let u of y) {
        u.classList.remove("open");
        const i = u.querySelectorAll(".open");
        for (let v of i)
          v.classList.remove("open");
      }
      c.classList.toggle("open");
    }
    return (a, s) => {
      const f = J("sideMenuGroup", !0);
      return S(), U("ul", Ga, [
        (S(!0), U(ve, null, ke(o.data, (c, y) => (S(), U("li", {
          class: Be({ dropItemRP: c.children }),
          key: c.path + y
        }, [
          L("div", {
            class: Be(["menuTxtR", e(c)]),
            onClick: (u) => n(u, c),
            style: ee({ paddingLeft: c.level * 20 + "px" })
          }, N(c.name || "-- no name --"), 15, Ha),
          c.children ? (S(), Y(f, {
            key: 0,
            data: c.children,
            "path-name": o.pathName
          }, null, 8, ["data", "path-name"])) : ce("", !0)
        ], 2))), 128))
      ]);
    };
  }
}), ja = { class: "menuListR" }, Ja = /* @__PURE__ */ re({
  __name: "SideMenu",
  props: {
    data: { default: () => [] }
  },
  emits: ["on-change"],
  setup(l, { emit: d }) {
    const o = l, e = d, n = pl(), a = G(!0), s = G(), f = G(), c = K(() => a.value ? T("r.hideMenu") : T("r.showMenu")), y = K(() => a.value ? "ios-arrow-back" : "ios-arrow-forward");
    Hl(() => {
      let v = localStorage.getItem("menuDisplayR") || "";
      v !== "" ? a.value = JSON.parse(v) : (a.value = !0, localStorage.setItem("menuDisplayR", JSON.stringify(!0)));
    }), be(
      () => n.path,
      (v) => {
        s.value = v, Pe(i);
      },
      { immediate: !0 }
    );
    function u() {
      a.value = !a.value, localStorage.setItem("menuDisplayR", JSON.stringify(a.value)), e("on-change", a.value);
    }
    function i() {
      let v = f.value.querySelectorAll(".dropItemRP");
      for (let g of v)
        g.querySelector(".active") && !g.classList.contains("open") && g.classList.add("open");
    }
    return (v, g) => {
      const B = J("Icon");
      return S(), U("div", {
        ref_key: "menuRef",
        ref: f,
        class: "menuBoxRP"
      }, [
        de(L("div", ja, [
          W(Wa, {
            data: o.data,
            pathName: p(s)
          }, null, 8, ["data", "pathName"])
        ], 512), [
          [me, p(a)]
        ]),
        W(B, {
          type: p(y),
          size: 25,
          class: Be([{ showIco: !p(a) }, "menuShowHideIco"]),
          title: p(c),
          onClick: u,
          color: p(a) ? "#fff" : "#333"
        }, null, 8, ["type", "class", "title", "color"])
      ], 512);
    };
  }
}), qa = ["title"], Vl = /* @__PURE__ */ re({
  __name: "TableIconBtn",
  props: {
    icon: { default: "md-radio-button-on" },
    title: {},
    has: { default: "" },
    disabled: { type: Boolean, default: !1 },
    size: { default: 24 }
  },
  emits: ["click"],
  setup(l, { emit: d }) {
    const o = d, e = l;
    function n(a) {
      e.disabled || o("click", a);
    }
    return (a, s) => {
      const f = J("Icon"), c = $t("has");
      return de((S(), U("div", {
        class: Be(["tableBtnsG", { disabled: e.disabled }]),
        onClick: n,
        title: e.title || p(T)("r.button")
      }, [
        W(f, {
          type: e.icon,
          size: e.size
        }, null, 8, ["type", "size"])
      ], 10, qa)), [
        [c, e.has]
      ]);
    };
  }
}), Ya = { class: "contentX" }, Xa = { class: "arrowA" }, Lt = /* @__PURE__ */ re({
  __name: "ShowHidePanel",
  props: {
    bg: {}
  },
  setup(l) {
    const d = l, o = G(!0), e = K(() => o ? "background:" + d.bg || "transparent" : "");
    return (n, a) => {
      const s = J("Icon");
      return S(), U("div", {
        style: ee(p(e))
      }, [
        de(L("div", Ya, [
          xe(n.$slots, "default")
        ], 512), [
          [me, p(o)]
        ]),
        L("div", Xa, [
          L("div", {
            class: "btA",
            onClick: a[0] || (a[0] = (f) => o.value = !p(o))
          }, [
            W(s, {
              type: p(o) ? "ios-arrow-up" : "ios-arrow-down",
              size: "20"
            }, null, 8, ["type"])
          ])
        ])
      ], 4);
    };
  }
}), Qa = { class: "contentZ" }, Za = /* @__PURE__ */ re({
  __name: "ShowHidePanelB",
  props: {
    modelValue: { type: Boolean, default: !1 },
    bg: { default: "transparent" }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: d }) {
    const o = l, e = d, n = K({
      get() {
        return o.modelValue;
      },
      set(s) {
        e("update:modelValue", s);
      }
    }), a = K(() => n.value ? "background:" + o.bg : "");
    return (s, f) => (S(), U("div", {
      style: ee(p(a))
    }, [
      de(L("div", Qa, [
        xe(s.$slots, "default")
      ], 512), [
        [me, p(n)]
      ])
    ], 4));
  }
});
let It = [], Ot = [];
const en = function(l) {
  l && l.beforeEach ? l.beforeEach(() => {
    It.map((d) => {
      window.clearTimeout(d);
    }), Ot.map((d) => {
      window.clearInterval(d);
    }), It.length = 0, Ot.length = 0;
  }) : console.warn(
    "安装库plug-r-qw时未传入router，调用该库的定时器方法产生的定时器将不能自动销毁，请传入router：Vue.use(plugRQw,{router,...})"
  );
}, Oe = function(l, d) {
  let o = window.setTimeout(l, d);
  return It.push(o), o;
}, tn = function(l, d) {
  let o = window.setInterval(l, d);
  return Ot.push(o), o;
}, ln = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l;
    let n = !1;
    const a = K({
      get() {
        return e.modelValue;
      },
      set(y) {
        o("update:modelValue", y);
      }
    }), s = K({
      get() {
        return e.open;
      },
      set(y) {
        o("on-toggle", y);
      }
    }), f = K(() => s.value ? "ios-arrow-up" : "ios-arrow-down");
    function c() {
      n || (n = !0, o("on-search", a.value), Oe(() => {
        n = !1;
      }, 2e3));
    }
    return (y, u) => {
      const i = J("Input"), v = J("icon");
      return S(), U("div", {
        class: "tableSearchV",
        style: ee({ position: e.fixed ? "fixed" : "absolute", right: e.right, top: e.top })
      }, [
        xe(y.$slots, "default", {}, () => [
          W(i, {
            modelValue: p(a),
            "onUpdate:modelValue": u[0] || (u[0] = (g) => Ie(a) ? a.value = g : null),
            style: ee({ width: e.width }),
            search: "",
            onOnSearch: c,
            class: "searchInputC",
            placeholder: e.placeholder || p(T)("r.pInput")
          }, null, 8, ["modelValue", "style", "placeholder"])
        ]),
        de(L("span", {
          class: "sbt",
          onClick: u[1] || (u[1] = (g) => s.value = !p(s)),
          style: ee({ color: e.btnColor })
        }, [
          W(v, {
            type: p(f),
            color: e.btnColor
          }, null, 8, ["type", "color"]),
          he(N(p(T)("r.adSearch")), 1)
        ], 4), [
          [me, e.showBtn]
        ])
      ], 4);
    };
  }
}), an = { class: "tabSetF" }, nn = { class: "topCheck" }, Cl = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    var V, A, M, k, _;
    const o = d, e = l, n = G(!0), a = G(!1), s = G(!1), f = G([]), c = K(() => {
      let I = T("r.unknown");
      return e.modelValue.length > f.value.length && (f.value = oe(e.modelValue)), f.value.map((C) => {
        let O = { label: C && C.title || I };
        return C && C.disableShowSetting && (O.disabled = !0), O;
      });
    }), y = K(() => c.value.filter((I) => I.disabled)), u = K({
      get() {
        return e.modelValue.map((I) => I && I.title || T("r.unknown"));
      },
      set(I) {
        let C = f.value.filter((O) => {
          for (let m of I)
            if (m === O.title)
              return !0;
          return !1;
        });
        o("update:modelValue", C);
      }
    }), i = (_ = (k = (M = (A = (V = ht()) == null ? void 0 : V.appContext) == null ? void 0 : A.config) == null ? void 0 : M.globalProperties) == null ? void 0 : k.$i18n) == null ? void 0 : _.locale;
    De(() => {
      let I = T("r.unknown"), C;
      i ? C = window[e.storage].getItem(e.sKey + "_" + i) : C = window[e.storage].getItem(e.sKey), C ? u.value = JSON.parse(decodeURI(C)) : e.defaultCheck && (u.value = e.modelValue.filter((O) => O.showSettingCheck).map((O) => O && O.title || I));
    });
    function v(I) {
      I.length === c.value.length ? (n.value = !1, a.value = !0) : I.length > y.value.length ? (n.value = !0, a.value = !1) : (n.value = !1, a.value = !1);
    }
    be(() => u.value, v, {
      immediate: !0,
      deep: !0
    });
    function g() {
      s.value || (s.value = !0);
    }
    function B() {
      i ? window[e.storage].setItem(e.sKey + "_" + i, encodeURI(JSON.stringify(u.value))) : window[e.storage].setItem(e.sKey, encodeURI(JSON.stringify(u.value))), s.value = !1;
    }
    function b() {
      n.value ? a.value = !1 : a.value = !a.value, n.value = !1, a.value ? u.value = c.value.map((I) => I.label) : u.value = y.value.map((I) => I.label);
    }
    return (I, C) => {
      const O = J("Icon"), m = J("Checkbox"), P = J("CheckboxGroup");
      return S(), U("div", an, [
        L("div", {
          class: "tabSetBt",
          onClick: g
        }, [
          W(O, {
            type: "md-settings",
            size: "17"
          }),
          L("span", null, N(p(T)("r.tabSetting")), 1)
        ]),
        de(L("div", {
          class: "tabSetCard",
          style: ee({ top: e.top, right: e.right, width: e.width, backgroundColor: e.bg })
        }, [
          L("div", nn, [
            W(m, {
              indeterminate: p(n),
              modelValue: p(a),
              "onUpdate:modelValue": C[0] || (C[0] = (h) => Ie(a) ? a.value = h : null),
              onClick: _t(b, ["prevent"])
            }, {
              default: q(() => [
                he(N(p(T)("r.all")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "modelValue"]),
            L("span", {
              style: { cursor: "pointer", float: "right" },
              onClick: B
            }, N(p(T)("r.confirm")), 1)
          ]),
          W(P, {
            modelValue: p(u),
            "onUpdate:modelValue": C[1] || (C[1] = (h) => Ie(u) ? u.value = h : null)
          }, {
            default: q(() => [
              (S(!0), U(ve, null, ke(p(c), (h, F) => (S(), Y(m, {
                class: "setItem",
                label: h && h.label,
                key: "tabSet_" + e.sKey + F,
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
let at = !1;
function Mt({
  height: l,
  width: d = 416,
  title: o,
  content: e,
  onOk: n,
  onCancel: a,
  onClose: s,
  okText: f,
  cancelText: c,
  noWarnIcon: y,
  footerAlign: u,
  cancelBt: i = !0
}) {
  const v = (...V) => Ne.apply(this, V);
  let B = (l && Number(l) - 90 > 100 ? Number(l) - 90 + "px" : 0) || "100px", b = z(e) === "String";
  ze.warning({
    width: d,
    footerHide: !0,
    render: () => Ve(
      "div",
      {
        class: "customMessageBox",
        style: {
          height: B
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
                  bt,
                  {
                    class: "fr closeN",
                    type: "text",
                    onClick() {
                      at || (ze.remove(), s && z(s) === "Function" && s());
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
                  textAlign: b ? "center" : "left"
                }
              },
              [
                Ve("i", {
                  class: b && !y ? "ivu-icon ivu-icon-ios-alert-outline" : "hide",
                  style: {
                    fontSize: "60px",
                    color: "#f8bb86"
                  }
                }),
                Ve("div", { class: "msgBoxConO" }, e || v("r.info.text"))
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
                  bt,
                  {
                    class: "okBtN",
                    onClick(V) {
                      var A, M, k, _, I, C, O, m, P;
                      if (n && typeof n == "function") {
                        const h = n();
                        if (h && z(h) === "Promise") {
                          at = !0;
                          const F = (V == null ? void 0 : V.currentTarget) || (V == null ? void 0 : V.target);
                          F && ((M = (A = F.classList) == null ? void 0 : A.add) == null || M.call(A, "ivu-btn-loading"), (_ = (k = F.nextSibling) == null ? void 0 : k.setAttribute) == null || _.call(k, "disabled", "disabled"), (P = (m = ((O = (C = (I = F.parentElement) == null ? void 0 : I.parentElement) == null ? void 0 : C.querySelector) == null ? void 0 : O.call(C, ".titleN .closeN")).classList) == null ? void 0 : m.add) == null || P.call(m, "disabled")), Promise.resolve(h).then(() => {
                            at = !1, ze.remove();
                          }).catch(() => {
                            at = !1, ze.remove();
                          });
                        } else
                          ze.remove();
                      }
                    }
                  },
                  () => [
                    Ve("i", {
                      class: "ivu-load-loop ivu-icon ivu-icon-ios-loading"
                    }),
                    Ve("span", f || v("r.confirm"))
                  ]
                ),
                Ve(
                  bt,
                  {
                    class: ["cancelBtN", !i && "hide"],
                    onClick() {
                      at || (ze.remove(), z(a) === "Function" && a && a());
                    }
                  },
                  () => c || v("r.cancel")
                )
              ]
            )
          ]
        )
      ]
    )
  });
}
let We = 0, ot = document.createElement("div");
ot.setAttribute("class", "spinModal");
ot.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>';
window.onload = function() {
  document.getElementsByTagName("body")[0].append(ot);
};
function ll(l) {
  l ? ot.classList.add("show") : ot.classList.remove("show");
}
function Al(l) {
  let d = We;
  l ? We++ : We > 0 && We--, d !== We && (We === 0 ? ll(!1) : d === 0 && ll(!0));
}
const on = window.location.origin;
let mt = null;
const al = (...l) => Ne.apply(mt, l);
let Fe = At.create({
  baseURL: on,
  withCredentials: !0
  // 允许携带cookie
});
function sn() {
  console.info("store为空，请在安装插件时传入store实例：Vue.use(plugRQw,{store:store})，Pinia传{store:useStore}");
}
Fe.interceptors.request.use(
  (l) => l,
  (l) => Promise.reject(l)
);
function nl() {
  var l, d;
  if (Fe.store)
    if (typeof Fe.store == "function") {
      const o = Fe.store();
      o.logout && o.logout();
    } else
      (d = (l = Fe.store) == null ? void 0 : l.dispatch) == null || d.call(l, "logout");
  else
    sn();
}
Fe.interceptors.response.use(
  (l) => {
    var d, o;
    return mt && (((d = l == null ? void 0 : l.data) == null ? void 0 : d.code) === 403 || ((o = l == null ? void 0 : l.data) == null ? void 0 : o.code) === 409) && Mt({
      content: al("r.http." + l.data.code),
      onOk: nl
    }), l;
  },
  (l) => {
    var d, o;
    return mt && (((d = l == null ? void 0 : l.response) == null ? void 0 : d.status) === 403 || ((o = l == null ? void 0 : l.response) == null ? void 0 : o.status) === 409) && Mt({
      content: al("r.http." + l.response.status),
      onOk: nl
    }), console.warn("请求出错：", l), Promise.reject(l);
  }
);
function Ee(l, d, o, e) {
  e && e.spin && Al(!1);
  let n = !0, a = l && l.data;
  if (a) {
    o = o || [];
    for (let s of o)
      a = a[s], n = n && a;
    return n ? a : (d && console.warn(d), !1);
  }
  return d && console.warn(d), !1;
}
function rn(l, d, o, e, n, a, s) {
  return new Promise((f, c) => {
    switch (l) {
      case "get":
        Fe.get(d, { params: o }).then((u) => {
          let i = Ee(u, e, n, a);
          i ? f(i) : c(u);
        }).catch((u) => {
          Ee({}, e, n, a), c(u);
        });
        break;
      case "delete":
        let y = s ? "params" : "data";
        Fe.delete(d, { [y]: o }).then((u) => {
          let i = Ee(u, e, n, a);
          i ? f(i) : c(u);
        }).catch((u) => {
          Ee({}, e, n, a), c(u);
        });
        break;
      case "post":
        Fe.post(d, o, a).then((u) => {
          let i = Ee(u, e, n, a);
          i ? f(i) : c(u);
        }).catch((u) => {
          Ee({}, e, n, a), c(u);
        });
        break;
      case "put":
        Fe.put(d, o, a).then((u) => {
          let i = Ee(u, e, n, a);
          i ? f(i) : c(u);
        }).catch((u) => {
          Ee({}, e, n, a), c(u);
        });
        break;
    }
  });
}
function st(l, d, o = {}, e, n, a, s) {
  return new Promise((f, c) => {
    var y;
    if (d) {
      a && a.spin && Al(!0);
      let u = d;
      if (window && window.hasOwnProperty("g")) {
        const g = window.g;
        let B = Object.keys(g).filter((b) => b.indexOf("URL") > -1).map((b) => b.replace("URL", ""));
        for (let b of B) {
          let V = new RegExp("^/" + b + "(?=/.*$)", "i");
          if (V.test(d) && g[b + "URL"]) {
            u = g[b + "URL"] + d.replace(V, "");
            break;
          }
        }
      }
      let i;
      if (((y = a == null ? void 0 : a.headers) == null ? void 0 : y["Content-Type"]) === "multipart/form-data")
        i = o;
      else if (o && !Se(o))
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
      rn(v, u, i, e, n, a, s).then((g) => {
        f(g);
      }).catch((g) => {
        c(g);
      });
    } else
      console.error("没有请求地址:url"), c("没有请求地址:url");
  });
}
const Re = {
  /**
   * @description 初始化该请求插件，单独引入的话调用一次后，方可实现spin等功能，默认在该库安装时已自动化初始化了该请求插件
   * @function
   * @param {object} store 项目中vuex的store，或pinia的useStore
   * @param app 当前vue实例
   */
  init(l, d) {
    Fe.store = l, mt = d.config.globalProperties;
  },
  post(l, d, o, e, n) {
    return new Promise((a, s) => {
      st("post", l, d, o, e, n).then((f) => {
        a(f);
      }).catch((f) => {
        s(f);
      });
    });
  },
  put(l, d, o, e, n) {
    return new Promise((a, s) => {
      st("put", l, d, o, e, n).then((f) => {
        a(f);
      }).catch((f) => {
        s(f);
      });
    });
  },
  get(l, d, o, e, n) {
    return new Promise((a, s) => {
      st("get", l, d, o, e, n).then((f) => {
        a(f);
      }).catch((f) => {
        s(f);
      });
    });
  },
  delete(l, d, o, e, n, a = !0) {
    return new Promise((s, f) => {
      st("delete", l, d, o, e, n, a).then((c) => {
        s(c);
      }).catch((c) => {
        f(c);
      });
    });
  },
  all: At.all,
  spread: At.spread,
  config: Fe
}, un = { class: "pageProSize" }, Bl = /* @__PURE__ */ re({
  __name: "PagePro",
  props: {
    modelValue: { default: 1 },
    total: { default: 0 },
    pageSize: { default: 10 },
    size: { default: "default" },
    pageSizeOpts: { default: () => {
      var l;
      return ((l = Ke()) == null ? void 0 : l.pageSizes) || [10, 20, 50, 100];
    } },
    transfer: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "on-change", "on-page-size-change"],
  setup(l, { emit: d }) {
    const o = d, e = l, n = K({
      get() {
        return e.modelValue;
      },
      set(s) {
        o("update:modelValue", s), o("on-change", s);
      }
    }), a = K({
      get() {
        return e.pageSize;
      },
      set(s) {
        o("on-page-size-change", s), n.value !== 1 && (n.value = 1);
      }
    });
    return (s, f) => {
      const c = J("Page"), y = J("Option"), u = J("Select");
      return S(), U("div", {
        class: Be(["pagePro", { pageProDefault: e.size === "default" }])
      }, [
        W(c, {
          modelValue: p(n),
          "onUpdate:modelValue": f[0] || (f[0] = (i) => Ie(n) ? n.value = i : null),
          "page-size": p(a),
          total: e.total,
          size: e.size,
          "page-size-opts": e.pageSizeOpts,
          disabled: e.disabled,
          simple: ""
        }, null, 8, ["modelValue", "page-size", "total", "size", "page-size-opts", "disabled"]),
        L("div", un, [
          W(u, {
            modelValue: p(a),
            "onUpdate:modelValue": f[1] || (f[1] = (i) => Ie(a) ? a.value = i : null),
            size: e.size,
            transfer: e.transfer,
            disabled: e.disabled
          }, {
            default: q(() => [
              (S(!0), U(ve, null, ke(e.pageSizeOpts, (i) => (S(), Y(y, {
                value: i,
                key: i
              }, {
                default: q(() => [
                  he(N(i) + " " + N(p(T)("r.page")), 1)
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
}, hn = { class: "pageContainer" }, yn = 300, Pt = /* @__PURE__ */ re({
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
  setup(l, { expose: d, emit: o }) {
    const e = o;
    ({ ...{
      showSettingCheck: !1,
      disableShowSetting: !1
    }, ...ta });
    const a = l, s = Ke().pageSizes || [10, 20, 50, 100], f = G(a.data), c = G(
      localStorage.getItem("btPageSize") && Number(localStorage.getItem("btPageSize")) || a.pageSize
    ), y = G(1), u = G(0);
    let i = [], v, g, B = a.orderKey, b = a.orderDefault;
    const V = K(() => {
      for (let E of a.columns)
        if (E.fixed)
          return !0;
      return !1;
    }), A = K(() => a.selectionFixed || V.value), M = K(() => {
      let E = {
        ...a.searchData,
        current: y.value,
        size: c.value
      };
      return a.sortable === "custom" && (a.orderKeyFormat === "underline" ? E[b] = vl(B) : a.orderKeyFormat === "camelcase" && (E[b] = Ta(B))), E;
    }), k = K(() => {
      let E = a.columns.filter((D) => D.type !== "selection");
      if (a.selection || a.radio) {
        let D;
        a.radio ? D = {
          title: " ",
          width: 65,
          render: (ye, we) => Ve(la, {
            value: we.row.btChecked
          })
        } : D = {
          type: "selection",
          width: 60
        }, a.selectionFixed && (D.fixed = a.selectionFixed), E.unshift(D);
      }
      return E.forEach((D) => {
        a.sortable === "custom" ? D.key && D.sortable !== !0 && D.sortable !== !1 && (D.sortable = "custom") : D.sortable = !1, D.align || (D.align = "center");
      }), a.tableEmptyTdHandle && E.forEach((D) => {
        D.key && D.render === void 0 && (D.tooltip ? D.render = bl(D.key, !0) : D.render = (ye, we) => {
          let ge = we.row[D.key];
          return ye("span", ge === "" || ge === null || ge === void 0 ? "--" : ge);
        });
      }), E;
    }), _ = K({
      get() {
        return f.value.map((E, D) => ({
          btKey: "bt-" + D,
          btChecked: !1,
          ...E
        }));
      },
      set(E) {
        f.value = E;
      }
    }), I = K(() => i.map((E) => E.id)), C = K(() => i.map((E) => E.btKey)), O = G();
    be(() => a.searchData, m, { deep: !0 }), be(
      () => a.orderDefault,
      (E) => {
        b = E;
      }
    ), be(
      () => a.orderKey,
      (E) => {
        B = E;
      }
    );
    function m() {
      y.value = 1, ue();
    }
    function P() {
      a.initData && ue();
    }
    function h(E) {
      f.value.unshift(oe(E)), Oe(() => {
        var D, ye;
        (ye = (D = O.value) == null ? void 0 : D.clickCurrentRow) == null || ye.call(D, 0);
      }, 100);
    }
    function F(E, D, ye) {
      let we = null;
      if (Ql(D) && D ? we = g : Xe(D) && (we = D), we !== null) {
        let ge = f.value[we];
        for (let ae in E)
          E.hasOwnProperty(ae) && (ge[ae] = E[ae]);
        ye && Oe(() => {
          var ae, Ue;
          (Ue = (ae = O.value) == null ? void 0 : ae.clickCurrentRow) == null || Ue.call(ae, we);
        }, 10);
      }
    }
    function $(E) {
      f.value.splice(E, 1), Oe(() => {
        var D, ye;
        (ye = (D = O.value) == null ? void 0 : D.clickCurrentRow) == null || ye.call(D, 0);
      }, 100);
    }
    function X(E, D) {
      var ye, we;
      E.btChecked && a.radio || (a.selection || a.radio) && a.rowClickSelect && ((we = (ye = O.value) == null ? void 0 : ye.toggleSelect) == null || we.call(ye, D));
    }
    function te(E, D) {
      v = D.btKey, g = Number(D.btKey.split("-")[1]), a.radio && (f.value[g].btChecked = !0);
    }
    function fe(E) {
      if (a.radio)
        for (let D of _.value)
          D.btKey !== v && (f.value[Number(D.btKey.split("-")[1])].btChecked = !1);
      i = E, e("on-selection-change", E);
    }
    function Ae() {
      return oe(i);
    }
    function Ce() {
      ue();
    }
    function j(E) {
      c.value = E, localStorage.setItem("btPageSize", String(E)), y.value === 1 && ue();
    }
    function pe({ key: E, order: D }) {
      b === "normal" ? (B = a.orderKey, b = a.orderDefault) : (B = E, b = D), y.value = 1, le();
    }
    function ie() {
      var E, D;
      if (a.radio) {
        if (C.value.length > 0 && _.value.length > 0) {
          let ye = C.value[0].split("-")[1];
          _.value[ye].btChecked = !1;
        }
      } else
        (D = (E = O.value) == null ? void 0 : E.selectAll) == null || D.call(E, !1);
      i.length > 0 && (i = [], e("on-selection-change", [])), v = null, g = null;
    }
    function R() {
      f.value = [], ie(), y.value = 1, u.value = 0;
    }
    function le(E, D, ye) {
      return new Promise((we) => {
        E && (b = E), D && (B = D), a.url ? Re[a.method](a.url, M.value, "", [], { spin: a.getDataLoading }).then((ge) => {
          var Ue, et;
          let ae;
          ye || ie(), typeof a.dataHandler == "function" ? ae = a.dataHandler(ge) : ae = ge, ae.data ? (ae.data.records || ae.data.records === null ? f.value = ae.data.records || [] : ae.data.page ? (ae.data.page.records || ae.data.page.records === null) && (f.value = ae.data.page.records || []) : ae.data.data ? (ae.data.data.records || ae.data.data.records === null) && (f.value = ae.data.data.records || []) : f.value = ae.data, u.value = ((Ue = ae.data.page) == null ? void 0 : Ue.total) || ((et = ae.data.data) == null ? void 0 : et.total) || ae.data.total || ae.total || 0, u.value === 0 && y.value > 1 && f.value && f.value.length === 0 ? y.value = 1 : y.value > 1 && u.value <= (y.value - 1) * c.value && (y.value--, Pe(function() {
            le(E, D);
          })), e("on-data-change", ae), we(ae)) : (console.warn("请求返回数据有误，无法使用"), R(), e("on-data-change", ae));
        }).catch((ge) => {
          ie(), R(), e("on-data-change", ge);
        }) : console.warn("没有有效的请求地址，无法获取表格数据");
      });
    }
    function ue(E, D, ye) {
      a.radio && (E || a.rowClickNum !== -1) ? le(D, ye, E).then(() => {
        f.value.length > 0 && Oe(() => {
          var we, ge, ae, Ue;
          E ? (ge = (we = O.value) == null ? void 0 : we.clickCurrentRow) == null || ge.call(we, g || 0) : (Ue = (ae = O.value) == null ? void 0 : ae.clickCurrentRow) == null || Ue.call(ae, a.rowClickNum);
        }, 10);
      }) : le();
    }
    return De(P), d({
      selectedIds: I,
      addRow: h,
      setRowData: F,
      deleteRow: $,
      getSelected: Ae,
      clearSelect: ie,
      clearTableData: R,
      getTableData: le,
      getDataAndClickRow: ue
    }), (E, D) => {
      const ye = J("Table"), we = J("Page");
      return S(), U("div", dn, [
        de(L("div", cn, [
          xe(E.$slots, "tableSetting"),
          xe(E.$slots, "topMsg"),
          xe(E.$slots, "topBtnGroup")
        ], 512), [
          [me, a.showTopRow]
        ]),
        L("div", fn, [
          L("div", pn, [
            L("div", mn, [
              W(ye, Ze({
                ref_key: "tableRef",
                ref: O
              }, E.$attrs, {
                height: p(A) && yn || null,
                class: { noBorderTable: a.noBorderTable, fullHeightTable: !p(A), lightHeadO: a.lightHead },
                columns: p(k),
                data: p(_),
                "highlight-row": a.radio || a.highlightRow,
                onOnSelect: te,
                onOnSelectionChange: fe,
                onOnSortChange: pe,
                onOnRowClick: X
              }), null, 16, ["height", "class", "columns", "data", "highlight-row"])
            ], 512)
          ])
        ]),
        de(L("div", hn, [
          a.usePagePro ? (S(), Y(Bl, {
            key: 0,
            modelValue: p(y),
            "onUpdate:modelValue": D[0] || (D[0] = (ge) => Ie(y) ? y.value = ge : null),
            total: p(u),
            "page-size": p(c),
            "page-size-opts": p(s),
            size: a.pageComponentSize,
            onOnChange: Ce,
            onOnPageSizeChange: j
          }, null, 8, ["modelValue", "total", "page-size", "page-size-opts", "size"])) : (S(), Y(we, {
            key: 1,
            modelValue: p(y),
            "onUpdate:modelValue": D[1] || (D[1] = (ge) => Ie(y) ? y.value = ge : null),
            total: p(u),
            "page-size": p(c),
            "page-size-opts": p(s),
            size: a.pageComponentSize,
            "show-sizer": "",
            "show-total": "",
            showElevator: !a.noElevator,
            onOnChange: Ce,
            onOnPageSizeChange: j
          }, null, 8, ["modelValue", "total", "page-size", "page-size-opts", "size", "showElevator"]))
        ], 512), [
          [me, !a.noPage]
        ])
      ], 512);
    };
  }
}), Sl = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = K({
      get() {
        return e.modelValue && e.modelValue.key || null;
      },
      set(u) {
        let i = {
          key: u,
          val: null
        };
        n.value && n.value !== u && (i.beforeKey = n.value), o("update:modelValue", i), o("on-change", i);
      }
    }), a = K({
      get() {
        return e.modelValue && e.modelValue.val || null;
      },
      set(u) {
        o("update:modelValue", {
          key: n.value,
          val: u
        });
      }
    }), s = K(() => ({
      width: e.labelWidth + "px",
      textAlign: e.labelTextAlign
    })), f = K(() => ({ width: e.itemWidth + "px" }));
    function c(u) {
      var i;
      ((i = u == null ? void 0 : u.target) == null ? void 0 : i.value) !== void 0 && y({
        key: n.value,
        val: u.target.value
      });
    }
    const y = cl((u) => {
      o("on-change", u);
    }, 500);
    return (u, i) => {
      const v = J("Option"), g = J("Select"), B = J("Input");
      return S(), U("div", null, [
        W(g, {
          modelValue: p(n),
          "onUpdate:modelValue": i[0] || (i[0] = (b) => Ie(n) ? n.value = b : null),
          style: ee(p(s)),
          disabled: !!e.disabled,
          transfer: ""
        }, {
          default: q(() => [
            (S(!0), U(ve, null, ke(e.selectOption, (b, V) => (S(), Y(v, {
              value: b.val,
              label: b.label,
              key: "selectInputOp" + b.value + V,
              style: ee({ textAlign: e.labelTextAlign })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style", "disabled"]),
        W(B, {
          modelValue: p(a),
          "onUpdate:modelValue": i[1] || (i[1] = (b) => Ie(a) ? a.value = b : null),
          placeholder: e.placeholder || p(T)("r.pInput"),
          style: ee(p(f)),
          clearable: e.clearable,
          disabled: !!e.disabled,
          onOnChange: c
        }, null, 8, ["modelValue", "placeholder", "style", "clearable", "disabled"])
      ]);
    };
  }
});
var vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gn(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Tl = { exports: {} };
(function(l, d) {
  (function(o, e) {
    l.exports = e();
  })(vn, function() {
    function o(i) {
      var v = [];
      return i.AMapUI && v.push(e(i.AMapUI)), i.Loca && v.push(n(i.Loca)), Promise.all(v);
    }
    function e(i) {
      return new Promise(function(v, g) {
        var B = [];
        if (i.plugins)
          for (var b = 0; b < i.plugins.length; b += 1)
            s.AMapUI.plugins.indexOf(i.plugins[b]) == -1 && B.push(i.plugins[b]);
        if (f.AMapUI === a.failed)
          g("前次请求 AMapUI 失败");
        else if (f.AMapUI === a.notload) {
          f.AMapUI = a.loading, s.AMapUI.version = i.version || s.AMapUI.version, b = s.AMapUI.version;
          var V = document.body || document.head, A = document.createElement("script");
          A.type = "text/javascript", A.src = "https://webapi.amap.com/ui/" + b + "/main.js", A.onerror = function(M) {
            f.AMapUI = a.failed, g("请求 AMapUI 失败");
          }, A.onload = function() {
            if (f.AMapUI = a.loaded, B.length)
              window.AMapUI.loadUI(B, function() {
                for (var M = 0, k = B.length; M < k; M++) {
                  var _ = B[M].split("/").slice(-1)[0];
                  window.AMapUI[_] = arguments[M];
                }
                for (v(); c.AMapUI.length; )
                  c.AMapUI.splice(0, 1)[0]();
              });
            else
              for (v(); c.AMapUI.length; )
                c.AMapUI.splice(0, 1)[0]();
          }, V.appendChild(A);
        } else
          f.AMapUI === a.loaded ? i.version && i.version !== s.AMapUI.version ? g("不允许多个版本 AMapUI 混用") : B.length ? window.AMapUI.loadUI(B, function() {
            for (var M = 0, k = B.length; M < k; M++) {
              var _ = B[M].split("/").slice(-1)[0];
              window.AMapUI[_] = arguments[M];
            }
            v();
          }) : v() : i.version && i.version !== s.AMapUI.version ? g("不允许多个版本 AMapUI 混用") : c.AMapUI.push(function(M) {
            M ? g(M) : B.length ? window.AMapUI.loadUI(B, function() {
              for (var k = 0, _ = B.length; k < _; k++) {
                var I = B[k].split("/").slice(-1)[0];
                window.AMapUI[I] = arguments[k];
              }
              v();
            }) : v();
          });
      });
    }
    function n(i) {
      return new Promise(function(v, g) {
        if (f.Loca === a.failed)
          g("前次请求 Loca 失败");
        else if (f.Loca === a.notload) {
          f.Loca = a.loading, s.Loca.version = i.version || s.Loca.version;
          var B = s.Loca.version, b = s.AMap.version.startsWith("2"), V = B.startsWith("2");
          if (b && !V || !b && V)
            g("JSAPI 与 Loca 版本不对应！！");
          else {
            b = s.key, V = document.body || document.head;
            var A = document.createElement("script");
            A.type = "text/javascript", A.src = "https://webapi.amap.com/loca?v=" + B + "&key=" + b, A.onerror = function(M) {
              f.Loca = a.failed, g("请求 AMapUI 失败");
            }, A.onload = function() {
              for (f.Loca = a.loaded, v(); c.Loca.length; )
                c.Loca.splice(0, 1)[0]();
            }, V.appendChild(A);
          }
        } else
          f.Loca === a.loaded ? i.version && i.version !== s.Loca.version ? g("不允许多个版本 Loca 混用") : v() : i.version && i.version !== s.Loca.version ? g("不允许多个版本 Loca 混用") : c.Loca.push(function(M) {
            M ? g(M) : g();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var a;
    (function(i) {
      i.notload = "notload", i.loading = "loading", i.loaded = "loaded", i.failed = "failed";
    })(a || (a = {}));
    var s = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, f = { AMap: a.notload, AMapUI: a.notload, Loca: a.notload }, c = { AMap: [], AMapUI: [], Loca: [] }, y = [], u = function(i) {
      typeof i == "function" && (f.AMap === a.loaded ? i(window.AMap) : y.push(i));
    };
    return { load: function(i) {
      return new Promise(function(v, g) {
        if (f.AMap == a.failed)
          g("");
        else if (f.AMap == a.notload) {
          var B = i.key, b = i.version, V = i.plugins;
          B ? (window.AMap && location.host !== "lbs.amap.com" && g("禁止多种API加载方式混用"), s.key = B, s.AMap.version = b || s.AMap.version, s.AMap.plugins = V || s.AMap.plugins, f.AMap = a.loading, b = document.body || document.head, window.___onAPILoaded = function(M) {
            if (delete window.___onAPILoaded, M)
              f.AMap = a.failed, g(M);
            else
              for (f.AMap = a.loaded, o(i).then(function() {
                v(window.AMap);
              }).catch(g); y.length; )
                y.splice(0, 1)[0]();
          }, V = document.createElement("script"), V.type = "text/javascript", V.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + s.AMap.version + "&key=" + B + "&plugin=" + s.AMap.plugins.join(","), V.onerror = function(M) {
            f.AMap = a.failed, g(M);
          }, b.appendChild(V)) : g("请填写key");
        } else if (f.AMap == a.loaded)
          if (i.key && i.key !== s.key)
            g("多个不一致的 key");
          else if (i.version && i.version !== s.AMap.version)
            g("不允许多个版本 JSAPI 混用");
          else {
            if (B = [], i.plugins)
              for (b = 0; b < i.plugins.length; b += 1)
                s.AMap.plugins.indexOf(i.plugins[b]) == -1 && B.push(i.plugins[b]);
            B.length ? window.AMap.plugin(B, function() {
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
          var A = [];
          if (i.plugins)
            for (b = 0; b < i.plugins.length; b += 1)
              s.AMap.plugins.indexOf(i.plugins[b]) == -1 && A.push(i.plugins[b]);
          u(function() {
            A.length ? window.AMap.plugin(A, function() {
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
      delete window.AMap, delete window.AMapUI, delete window.Loca, s = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, f = {
        AMap: a.notload,
        AMapUI: a.notload,
        Loca: a.notload
      }, c = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(Tl);
var bn = Tl.exports;
const rt = /* @__PURE__ */ gn(bn);
let Ft = { securityJsCode: "", key: "" };
function kn({ securityJsCode: l, key: d }) {
  Ft.securityJsCode = l, Ft.key = d;
}
function wn(l) {
  return Ft[l];
}
const xl = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = K({
      get() {
        let _;
        return e.modelValue ? e.modelValue.name ? _ = oe(e.modelValue) : _ = {
          ...e.modelValue,
          name: null
        } : _ = {
          name: null
        }, _;
      },
      set(_) {
        o("update:modelValue", oe(_));
      }
    }), a = K(() => Xe(e.width) ? e.width + "px" : e.width), s = K(() => Xe(e.height) ? e.height + "px" : e.height ? e.height : Xe(e.width) ? e.width * 0.66 + "px" : "200px"), f = K(() => ({
      width: a.value,
      position: "relative"
    })), c = K(() => ({
      width: a.value,
      height: s.value,
      marginTop: "6px",
      opacity: e.showMap ? 1 : 0,
      position: e.showMap ? "relative" : "absolute",
      top: e.showMap ? 0 : "-10000px"
    }));
    be(
      () => e.modelValue,
      (_) => {
        if (_ && _.lng && _.lat) {
          if (!b || !V)
            return;
          M({
            lng: _.lng,
            lat: _.lat,
            name: _.name
          });
        }
      }
    );
    const y = "mapId" + Math.floor(Math.random() * 1e9), u = G(null), i = G(null);
    let v;
    function g() {
      i.value && i.value.clientHeight < 10 || !i.value ? Oe(g, 300) : Oe(A, 100);
    }
    let B, b, V;
    function A() {
      rt.load({
        key: wn("key"),
        version: "2.0",
        plugins: ["AMap.AutoComplete", "AMap.Geocoder"]
      }).then((_) => {
        B = _, b = new B.Map(y).on("complete", () => {
          var C, O, m, P;
          V = new B.Geocoder(), (C = e.modelValue) != null && C.lng && ((O = e.modelValue) != null && O.lat) && M({
            lng: e.modelValue.lng,
            lat: e.modelValue.lat,
            name: e.modelValue.name
          });
          const I = (P = (m = u.value) == null ? void 0 : m.$el) == null ? void 0 : P.children;
          I && I.length > 1 && new B.AutoComplete({
            input: I[1]
          }).on("select", (h) => {
            var F, $, X;
            (F = h == null ? void 0 : h.poi) != null && F.name && (($ = h.poi.location) != null && $.lng && ((X = h.poi.location) != null && X.lat) ? (M({
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }), n.value = {
              name: h.poi.name,
              lng: h.poi.location.lng,
              lat: h.poi.location.lat
            }) : b.setCity(h.poi.name, () => {
              let te = b.getCenter();
              M({
                name: h.poi.name,
                lng: te.lng,
                lat: te.lat
              }), n.value = {
                name: h.poi.name,
                lng: te.lng,
                lat: te.lat
              };
            })), o("on-change", n.value);
          }), b.on("hotspotclick", (h) => {
            M({
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
    function M({ lng: _, lat: I, name: C }) {
      b.clearMap();
      let O = new B.LngLat(_, I), m = new B.Marker({
        map: b,
        position: O,
        draggable: !0
      });
      b.add(m), k(_, I), m.on("dragend", () => {
        let P = m.getPosition();
        n.value = {
          name: C || null,
          lng: P.lng,
          lat: P.lat
        }, k(_, I);
      }), m.on("click", (P) => {
        v && v.open(b, P.target.getPosition());
      }), b.setFitView();
    }
    function k(_, I) {
      V.getAddress([_, I], (C, O) => {
        C === "complete" && O.info === "OK" && O.regeocode && O.regeocode.formattedAddress ? v = new B.InfoWindow({
          //创建信息窗体
          isCustom: !0,
          content: '<div class="mapInfoWindowIKJ">' + O.regeocode.formattedAddress + "</div>",
          offset: new B.Pixel(16, -45),
          closeWhenClickMap: !0
        }) : (v = null, console.warn("地图获取位置信息失败", O));
      });
    }
    return De(g), Wl(() => {
      b && (b.destroy(), rt == null || rt.reset(), b = null, V = null, v = null);
    }), (_, I) => (S(), U("div", {
      style: ee(p(f)),
      class: "containerIKJ"
    }, [
      W(p(aa), {
        ref_key: "mapInputRef",
        ref: u,
        modelValue: p(n).name,
        "onUpdate:modelValue": I[0] || (I[0] = (C) => p(n).name = C),
        class: Be({ mapInputIKJ: e.showMap }),
        placeholder: e.placeholder || p(T)("r.search"),
        disabled: e.disabled,
        icon: "ios-search"
      }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
      L("div", {
        style: ee(p(c)),
        ref_key: "mapRef",
        ref: i,
        id: y
      }, null, 4)
    ], 4));
  }
});
var ul;
const Ll = /* @__PURE__ */ re({
  __name: "AsyncCascader",
  props: {
    modelValue: {},
    url: { default: (ul = window == null ? void 0 : window.g) != null && ul.mgrURL ? window.g.mgrURL + "/web/v1/umc/orgs" : "" },
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = G([]), a = K({
      get() {
        let u = e.modelValue;
        return Array.isArray(u) ? oe(u) : Xe(u) ? St({
          group: n.value,
          condition: (i) => i.value === u,
          pathKey: "value"
        }) : Kt(u) ? u.split(e.separator) : [];
      },
      set(u) {
        if (e.onlyLastVal)
          Se(u) ? (o("update:modelValue", null), o("on-label-change", null)) : o("update:modelValue", dt(u));
        else {
          if (nt(e.modelValue, u))
            return;
          o("update:modelValue", oe(u));
        }
      }
    });
    function s() {
      if (!e.url) {
        console.error("没有用于拉取级联数据的有效接口地址");
        return;
      }
      Re.get(e.url).then((u) => {
        var v;
        let i = null;
        (v = u == null ? void 0 : u.data) != null && v.records ? i = u.data.records : u != null && u.data ? i = u.data : u && (i = u), i ? (typeof e.optionFilter == "function" && z(e.optionFilter) === "Function" && (i = e.optionFilter(i)), n.value = f(i)) : console.warn("级联数据错误，不能使用");
      }).catch(() => {
        console.warn("拉取级联数据出错");
      });
    }
    function f(u) {
      let i = [];
      for (let v of u) {
        let g = {
          value: v[e.optionVal],
          label: v[e.optionLabel]
        };
        v.children && !Se(v.children) && (g.children = f(v.children)), i.push(g);
      }
      return i;
    }
    function c(u) {
      return e.onlyLastLabel ? dt(u) : u.join(e.separator);
    }
    function y(u, i) {
      let v = "";
      Se(i) || (v = i.map((g) => g.label).join(e.separator)), o("on-label-change", v);
    }
    return De(s), (u, i) => {
      const v = J("Cascader");
      return S(), Y(v, {
        data: p(n),
        modelValue: p(a),
        "onUpdate:modelValue": i[0] || (i[0] = (g) => Ie(a) ? a.value = g : null),
        onOnChange: y,
        "change-on-select": "",
        transfer: "",
        disabled: e.disabled,
        "render-format": c,
        placeholder: e.placeholder || p(T)("r.pSelect"),
        filterable: e.filterable
      }, null, 8, ["data", "modelValue", "disabled", "placeholder", "filterable"]);
    };
  }
}), Il = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = G(), a = K({
      get() {
        if (e.modelValue && (Xe(e.modelValue) || Kt(e.modelValue))) {
          let f = String(e.modelValue).trim();
          if (/^\d*$/.test(f)) {
            let y = f.substring(0, 2) + "0000", u, i = s(f);
            return i.length < 7 ? u = f.substring(0, 4) + "00" : u = f.substring(0, 6), /^8\d+$/.test(f) ? [y, i] : [y, u, i];
          }
          return f.indexOf(e.separator) !== -1 ? f.split(e.separator) : [f];
        } else
          return Array.isArray(e.modelValue) ? oe(e.modelValue) : (n.value && (n.value.select = []), []);
      },
      set(f) {
        if (Se(f))
          o("update:modelValue", null), o("on-name-change", null);
        else {
          let c = dt(f), y = "", u = "";
          if (c && (y = c.code), y && y.length < 12) {
            let i = [...y];
            for (; i.length < 12; )
              i.push(0);
            y = i.join("");
          }
          if (Array.isArray(f) && (u = f.map((i) => i.name).join(e.separator)), y) {
            if (y === e.modelValue)
              return;
            o("update:modelValue", y);
          }
          u && o("on-name-change", u);
        }
      }
    });
    function s(f) {
      let c = [...f];
      for (; c[c.length - 1] === "0"; )
        c.pop();
      return c.join("");
    }
    return (f, c) => (S(), Y(p(ia), Ze(f.$attrs, {
      class: "alCascaderMC",
      ref_key: "alCRef",
      ref: n,
      modelValue: p(a),
      "onUpdate:modelValue": c[0] || (c[0] = (y) => Ie(a) ? a.value = y : null),
      level: e.level,
      disabled: e.disabled,
      placeholder: e.placeholder || p(T)("r.pSelect"),
      transfer: e.transfer,
      searchable: e.filterable
    }), null, 16, ["modelValue", "level", "disabled", "placeholder", "transfer", "searchable"]));
  }
});
function Je(l) {
  var s, f, c;
  const d = (...y) => Ne.apply(this, y), o = d("r.closePreview"), e = d("r.fullImg");
  let n = Vt(document.getElementsByTagName("body")), a = document.createElement("div");
  a.setAttribute("class", "fullScreenImgByDom"), a.innerHTML = `<div class='previewInner'><img src='${l}' alt='${e}' ><i class='ivu-icon ivu-icon-md-close' title='${o}' ></i></div>`, (f = (s = a.querySelector(".ivu-icon-md-close")) == null ? void 0 : s.addEventListener) == null || f.call(s, "click", function() {
    var u;
    let y = Vt(document.getElementsByTagName("body"));
    (u = y == null ? void 0 : y.removeChild) == null || u.call(y, a);
  }), (c = n == null ? void 0 : n.appendChild) == null || c.call(n, a);
}
const _n = { class: "previewBoxM" }, Vn = { class: "imgLoading" }, Cn = /* @__PURE__ */ L("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), An = [
  Cn
], Bn = ["src", "alt"], Sn = { class: "deleteModal" }, Tn = { class: "previewBoxM" }, xn = {
  key: 0,
  class: "previewImg"
}, Ln = ["src", "alt"], In = { class: "deleteModal" }, On = { class: "customFileListM" }, Mn = {
  key: 0,
  class: "customFileListItem"
}, Pn = ["onClick", "title"], Fn = { class: "btBoxJ" }, Un = { class: "customFileListM" }, $n = {
  key: 0,
  class: "customFileListItem"
}, Kn = { class: "listLoading" }, Rn = /* @__PURE__ */ L("div", {
  "data-loader": "circle-side",
  class: "loader-div"
}, null, -1), Dn = [
  Rn
], Nn = ["onClick", "title"], En = { class: "btBoxJ" };
var dl;
const Ol = /* @__PURE__ */ re({
  __name: "UploadGroup",
  props: {
    modelValue: { default: () => [] },
    url: { default: (dl = window == null ? void 0 : window.g) != null && dl.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "" },
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = ut([]), a = ut([]), s = K(() => !e.manualUpload && e.showImg && u.value ? "img" : e.manualUpload && e.showImg && u.value ? "localImg" : e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "localList" : !e.manualUpload && e.showUploadList && (!e.showImg || !u.value) ? "list" : ""), f = K(() => e.manualUpload ? "//jsonplaceholder.typicode.com/posts/" : e.url), c = K({
      get() {
        return e.manualUpload ? y.value : y.value.map((h) => ({ id: h }));
      },
      set(h) {
        e.manualUpload ? y.value = h || [] : y.value = (h == null ? void 0 : h.map((F) => F.id)) || [];
      }
    }), y = K({
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
          let F = Vt(h);
          o("update:modelValue", F ?? null), o("on-change", F ?? null);
        } else
          o("update:modelValue", oe(h)), o("on-change", oe(h));
      }
    }), u = K(() => {
      let h;
      if (e.manualUpload ? h = c.value : h = a.value, !h)
        return !1;
      for (let F of h) {
        let $;
        if (e.manualUpload ? $ = F == null ? void 0 : F.type : $ = F == null ? void 0 : F.mimeType, !$ || $ && !(wt($) || $ === "loading"))
          return !1;
      }
      return !0;
    });
    be(
      () => c.value,
      async (h) => {
        if (s.value === "localImg")
          h != null && h.length ? n.value = await v(h) : n.value = [];
        else if (h != null && h.length && s.value !== "localList") {
          let F = oe(h);
          const $ = oe(a.value);
          for (let X of F)
            if ((X == null ? void 0 : X.name) === void 0)
              if (X.id) {
                const te = Ct($, (fe) => fe.id === X.id);
                te ? (X.name = te.name, X.mimeType = te.mimeType) : (X.mimeType = "loading", Re.get(e.url + "/" + X.id).then((fe) => {
                  var Ae, Ce, j, pe, ie, R;
                  X.name = ((j = (Ce = (Ae = fe == null ? void 0 : fe.data) == null ? void 0 : Ae.returnValue) == null ? void 0 : Ce[0]) == null ? void 0 : j.name) || T("r.file") + Xt(h, X), X.mimeType = ((R = (ie = (pe = fe == null ? void 0 : fe.data) == null ? void 0 : pe.returnValue) == null ? void 0 : ie[0]) == null ? void 0 : R.mimeType) || "unknown", jl(a);
                }).catch(() => {
                  X.name = T("r.file") + Xt(F, X);
                }));
              } else
                X.name = T("r.unknown");
          a.value = F;
        } else
          a.value = [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function i(h) {
      return (h == null ? void 0 : h.name) || (h == null ? void 0 : h.split) && dt(h.split("/")) || h;
    }
    async function v(h) {
      let F = [];
      for (let $ of h) {
        let X = await kt($);
        F.push(X);
      }
      return F;
    }
    function g(h) {
      if (!e.disabled) {
        let F = c.value;
        F == null || F.splice(h, 1), c.value = F;
      }
    }
    function B(h) {
      h != null && h.id && window.open(e.url + "/" + h.id + "/download");
    }
    function b(h) {
      return e.manualUpload ? (h == null ? void 0 : h.type) && wt(h.type) : (h == null ? void 0 : h.id) && h.mimeType && wt(h.mimeType);
    }
    function V(h) {
      if (e.manualUpload) {
        if (!h)
          return;
        kt(h).then((F) => {
          Je(F);
        });
      } else
        h != null && h.id && Je(e.url + "/" + h.id + "/download?preview=true");
    }
    function A(h) {
      z(h) === "String" && h.indexOf("http") > -1 ? window.open(h) : z(h) === "File" && kt(h).then((F) => {
        xa(h.name, F);
      });
    }
    function M(h) {
      var F, $;
      if (e.manualUpload) {
        if (h) {
          let X = yl(h.name);
          if ((F = e.format) != null && F.length && e.format.indexOf(X) < 0)
            return Me(
              T("r.wrongFileType"),
              T("r.supportType") + ((($ = e.format) == null ? void 0 : $.length) && String(e.format) || T("r.none")),
              "warning"
            ), !1;
          if (e.maxSize && h.size > e.maxSize * 1024)
            return Me(T("r.fileIsBig"), T("r.supportSize") + e.maxSize + "kb", "warning"), !1;
          let te = c.value;
          te == null || te.push(h), c.value = te;
        }
        return !1;
      } else
        return !0;
    }
    function k(h) {
      console.warn(h), Me(T("r.uploadError"), "", "error");
    }
    function _(h, F, $) {
      var X, te, fe, Ae, Ce, j;
      if ((h == null ? void 0 : h.code) === 0) {
        let pe = c.value;
        F.id = (te = (X = h.data) == null ? void 0 : X[0]) == null ? void 0 : te.id, F.name = (Ae = (fe = h.data) == null ? void 0 : fe[0]) == null ? void 0 : Ae.name, F.mimeType = (j = (Ce = h.data) == null ? void 0 : Ce[0]) == null ? void 0 : j.mimeType, pe == null || pe.push(F), c.value = pe;
      } else
        Me(T("r.uploadFail"), (h == null ? void 0 : h.message) || "", "error");
    }
    function I() {
      Me(T("r.fileIsBig"), T("r.supportSize") + e.maxSize + " kb", "warning");
    }
    function C() {
      var h;
      Me(
        T("r.wrongFileType"),
        T("r.supportType") + (((h = e.format) == null ? void 0 : h.length) && String(e.format) || T("r.none")),
        "warning"
      );
    }
    function O(h) {
      let F = h == null ? void 0 : h.id, $ = h == null ? void 0 : h.mimeType;
      F && (z($) === "String" && $.indexOf("image") > -1 ? Je(e.url + "/" + F + "/download?preview=true") : window.open(e.url + "/" + F + "/download?preview=true"));
    }
    function m(h) {
      var $, X, te;
      let F = (te = (X = ($ = h == null ? void 0 : h.response) == null ? void 0 : $.data) == null ? void 0 : X[0]) == null ? void 0 : te.id;
      P(null, F);
    }
    function P(h, F) {
      if (!(!F && F !== 0) && !e.disabled && y.value.indexOf(F) !== -1) {
        const $ = oe(y.value);
        let X = c.value;
        X == null || X.splice($.indexOf(F), 1), c.value = X;
      }
    }
    return (h, F) => {
      var fe, Ae, Ce, j, pe, ie;
      const $ = J("Button"), X = J("Upload"), te = J("Icon");
      return S(), U("div", null, [
        W(X, {
          name: "files",
          action: p(f),
          "before-upload": M,
          "on-error": k,
          "on-success": _,
          "on-exceeded-size": I,
          "on-preview": O,
          "on-remove": m,
          "on-format-error": C,
          data: e.data,
          "max-size": e.maxSize,
          "show-upload-list": !1,
          "with-credentials": e.withCredentials,
          format: e.format,
          multiple: e.multiple || !1,
          disabled: e.length && ((fe = p(c)) == null ? void 0 : fe.length) && ((Ae = p(c)) == null ? void 0 : Ae.length) >= e.length || !!e.disabled
        }, {
          default: q(() => {
            var R, le;
            return [
              W($, {
                icon: "ios-cloud-upload-outline",
                class: Be({
                  disabledR: e.length && ((R = p(c)) == null ? void 0 : R.length) && ((le = p(c)) == null ? void 0 : le.length) >= e.length || !!e.disabled
                })
              }, {
                default: q(() => [
                  he(N(p(T)("r.selectFile")), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }),
          _: 1
        }, 8, ["action", "data", "max-size", "with-credentials", "format", "multiple", "disabled"]),
        de(L("div", _n, [
          (S(!0), U(ve, null, ke(p(a), (R) => (S(), U(ve, {
            key: R == null ? void 0 : R.id
          }, [
            !e.manualUpload && (R == null ? void 0 : R.id) !== null ? (S(), U("div", {
              key: 0,
              class: Be(["previewImg", { previewLoading: R.mimeType === "loading" }])
            }, [
              de(L("div", Vn, An, 512), [
                [me, R.mimeType === "loading"]
              ]),
              de(L("img", {
                src: h.url + "/" + R.id + "/download?preview=true",
                alt: R.name
              }, null, 8, Bn), [
                [me, R.mimeType !== "loading"]
              ]),
              de(L("div", Sn, [
                W(te, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  title: p(T)("r.fView"),
                  onClick: (le) => p(Je)(e.url + "/" + R.id + "/download?preview=true")
                }, null, 8, ["title", "onClick"]),
                W(te, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (le) => P(le, R.id),
                  title: p(T)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [me, R.mimeType !== "loading"]
              ])
            ], 2)) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [me, p(s) === "img" && ((Ce = p(a)) == null ? void 0 : Ce.length)]
        ]),
        de(L("div", Tn, [
          (S(!0), U(ve, null, ke(p(n), (R, le) => (S(), U(ve, {
            key: "manualImg" + le
          }, [
            e.manualUpload && R !== null ? (S(), U("div", xn, [
              L("img", {
                src: R,
                alt: "manualImg" + le
              }, null, 8, Ln),
              L("div", In, [
                W(te, {
                  type: "ios-expand",
                  size: "40",
                  class: "previewExpand",
                  onClick: (ue) => p(Je)(R),
                  title: p(T)("r.fView")
                }, null, 8, ["onClick", "title"]),
                W(te, {
                  type: "ios-trash-outline",
                  size: "40",
                  class: "previewDelete",
                  onClick: (ue) => g(le),
                  title: p(T)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [me, p(s) === "localImg" && ((j = p(n)) == null ? void 0 : j.length)]
        ]),
        de(L("div", On, [
          (S(!0), U(ve, null, ke(p(c), (R, le) => (S(), U(ve, {
            key: "manualItem" + le
          }, [
            e.manualUpload && R !== null ? (S(), U("p", Mn, [
              R.name ? (S(), Y(te, {
                key: 0,
                type: p(tl)(R.name)
              }, null, 8, ["type"])) : ce("", !0),
              L("span", {
                class: Be(["upNameT", { previewName: b(R) }]),
                onClick: (ue) => A(R),
                title: p(T)("r.download")
              }, N(i(R)), 11, Pn),
              L("span", Fn, [
                b(R) ? (S(), Y(te, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ue) => V(R),
                  title: p(T)("r.fView")
                }, null, 8, ["onClick", "title"])) : ce("", !0),
                W(te, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ue) => g(le),
                  title: p(T)("r.delete")
                }, null, 8, ["onClick", "title"])
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [me, p(s) === "localList" && ((pe = p(c)) == null ? void 0 : pe.length)]
        ]),
        de(L("div", Un, [
          (S(!0), U(ve, null, ke(p(a), (R, le) => (S(), U(ve, {
            key: "defaultItem" + le
          }, [
            !e.manualUpload && R !== null ? (S(), U("div", $n, [
              de(L("div", Kn, Dn, 512), [
                [me, R.mimeType === "loading"]
              ]),
              de(W(te, {
                type: p(tl)(R.name)
              }, null, 8, ["type"]), [
                [me, R.mimeType !== "loading"]
              ]),
              de(L("span", {
                class: Be(["upNameT", { previewName: b(R) }]),
                onClick: (ue) => B(R),
                title: p(T)("r.download")
              }, N(R.name || p(T)("r.file") + (le + 1)), 11, Nn), [
                [me, R.mimeType !== "loading"]
              ]),
              de(L("span", En, [
                b(R) ? (S(), Y(te, {
                  key: 0,
                  type: "md-qr-scanner",
                  size: "14",
                  class: "listBtH",
                  onClick: (ue) => V(R),
                  title: p(T)("r.fView")
                }, null, 8, ["onClick", "title"])) : ce("", !0),
                W(te, {
                  type: "ios-close",
                  size: "22",
                  class: "listBtH",
                  onClick: (ue) => g(le),
                  title: p(T)("r.delete")
                }, null, 8, ["onClick", "title"])
              ], 512), [
                [me, R.mimeType !== "loading"]
              ])
            ])) : ce("", !0)
          ], 64))), 128))
        ], 512), [
          [me, p(s) === "list" && ((ie = p(a)) == null ? void 0 : ie.length)]
        ])
      ]);
    };
  }
}), zn = /* @__PURE__ */ L("div", { class: "bRoot" }, null, -1), Ml = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = G(!1), a = G(!1), s = G(!1), f = K({
      get() {
        return e.modelValue && e.modelValue[0] || null;
      },
      set(V) {
        o("update:modelValue", [V, c.value]), o("on-change", [V, c.value]);
      }
    }), c = K({
      get() {
        return e.modelValue && e.modelValue[1] || null;
      },
      set(V) {
        o("update:modelValue", [f.value, V]), o("on-change", [f.value, V]);
      }
    }), y = K(
      () => (f.value || "") + ((f.value || c.value) && " - " || "") + (c.value || "")
    ), u = G();
    De(() => {
      u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseover", () => {
        s.value = !0;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("mouseout", () => {
        s.value = !1;
      }), u.value.querySelector(".aRoot .ivu-input-suffix").addEventListener("click", (V) => {
        !e.disabled && (f.value || c.value) && (V.stopPropagation(), B());
      });
    });
    function i() {
      e.disabled || (n.value = !0);
    }
    function v(V) {
      f.value = V, n.value = !1, a.value = !0;
    }
    function g(V) {
      c.value = V, a.value = !1;
    }
    function B() {
      o("update:modelValue", [null, null]), o("on-change", [null, null]);
    }
    function b() {
      n.value = !1, a.value = !1, f.value && c.value === null && (f.value = null);
    }
    return (V, A) => {
      const M = J("DatePicker"), k = J("Icon"), _ = J("Input");
      return S(), U("div", {
        class: "monthRangeBoxR",
        ref_key: "mPickerRef",
        ref: u
      }, [
        W(M, {
          open: p(a),
          modelValue: p(c),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options2,
          onOnChange: g,
          onOnClickoutside: b
        }, {
          default: q(() => [
            zn
          ]),
          _: 1
        }, 8, ["open", "modelValue", "placement", "options"]),
        W(M, {
          open: p(n),
          modelValue: p(f),
          transfer: "",
          type: "month",
          placement: e.placement,
          options: e.options1,
          onOnChange: v,
          onOnClickoutside: b
        }, {
          default: q(() => [
            L("div", { onClick: i }, [
              W(_, {
                class: "aRoot",
                modelValue: p(y),
                "onUpdate:modelValue": A[0] || (A[0] = (I) => Ie(y) ? y.value = I : null),
                readonly: "",
                placeholder: e.placeholder || p(T)("r.selectDate"),
                disabled: e.disabled
              }, {
                suffix: q(() => [
                  W(k, {
                    type: p(s) && (p(f) || p(c)) && !e.disabled ? "ios-close-circle" : "ios-calendar-outline"
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
}), Gn = { class: "editor-pro-root" }, Pl = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = ut(), a = K({
      get() {
        return e.modelValue;
      },
      set(u) {
        o("update:modelValue", u), o("on-change", u);
      }
    }), s = K(
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
    ), f = K(
      () => Object.assign(
        {
          readOnly: e.disabled,
          MENU_CONF: {
            uploadImage: {
              async customUpload(u, i) {
                let v = new FormData();
                v.append("files", u);
                const g = u.name, B = e.imgUploadUrl ?? "/node-serve/file";
                Re.post(B, v, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((b) => {
                  if (b && b.data)
                    if (Array.isArray(b.data))
                      for (let V of b.data) {
                        const A = B + "/" + V.id + "/download";
                        i(A, g, A);
                      }
                    else {
                      const V = B + "/" + b.data.id + "/download";
                      i(V, g, V);
                    }
                }).catch(() => {
                  Me(T("r.uploadFail"), "", "error");
                });
              }
            },
            uploadVideo: {
              async customUpload(u, i) {
                let v = new FormData();
                v.append("files", u);
                const g = e.videoUploadUrl ?? "/node-serve/file";
                Re.post(g, v, null, [], {
                  spin: !0,
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then((B) => {
                  if (B && B.data)
                    if (Array.isArray(B.data))
                      for (let b of B.data) {
                        const V = g + "/" + b.id + "/download";
                        i(V);
                      }
                    else {
                      const b = g + "/" + B.data.id + "/download";
                      i(b);
                    }
                }).catch(() => {
                  Me(T("r.uploadFail"), "", "error");
                });
              }
            }
          }
        },
        e.editorConfig
      )
    ), c = K(() => ({
      height: typeof e.height == "number" ? e.height + "px" : e.height
    }));
    function y(u) {
      n.value = u;
    }
    return be(
      () => e.disabled,
      (u) => {
        u ? n.value.disable() : n.value.enable();
      }
    ), Jl(() => {
      n.value && n.value.destroy();
    }), (u, i) => (S(), U("div", Gn, [
      de(W(p(sa), {
        class: "editor-pro-toolbar",
        editor: p(n),
        defaultConfig: p(s),
        mode: u.mode
      }, null, 8, ["editor", "defaultConfig", "mode"]), [
        [me, !u.disabled]
      ]),
      W(p(ra), {
        class: "editor-pro-editor",
        modelValue: p(a),
        "onUpdate:modelValue": i[0] || (i[0] = (v) => Ie(a) ? a.value = v : null),
        defaultConfig: p(f),
        mode: u.mode,
        onOnCreated: y,
        style: ee(p(c))
      }, null, 8, ["modelValue", "defaultConfig", "mode", "style"])
    ]));
  }
}), Hn = {
  key: 19,
  class: "formInfoTxtXN"
}, Wn = {
  key: 20,
  class: "formTitleTxtXN"
}, ol = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l;
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
    function a(u, i) {
      o("item-change", {
        e: u,
        root: i
      });
    }
    function s(u, i) {
      o("re-validate", {
        e: u,
        root: i
      });
    }
    function f(u) {
      o("select-input-change", u);
    }
    function c(u, i) {
      o("al-name-change", {
        name: u,
        root: i
      });
    }
    function y(u, i) {
      o("async-label-change", {
        label: u,
        root: i
      });
    }
    return (u, i) => {
      const v = J("InputNumber"), g = J("Input"), B = J("Option"), b = J("Select"), V = J("Radio"), A = J("Icon"), M = J("RadioGroup"), k = J("Checkbox"), _ = J("CheckboxGroup"), I = J("DatePicker"), C = J("TimePicker"), O = J("FormItem");
      return S(), Y(O, {
        label: e.item.type !== "radio" && e.item.type !== "checkbox" ? e.item.label : " ",
        prop: e.item.key || "",
        class: Be(["relativeBox", n(e.item)])
      }, {
        default: q(() => [
          e.item.type === "txt" ? (S(), U("div", {
            key: 0,
            style: ee([e.itemStyle, { display: "inline-block" }]),
            class: Be({ likeInputX: e.item.likeInput, disabled: !!e.item.disabled || e.disabled })
          }, N(e.item.valKey ? e.valGroup[e.item.valKey] || "无" : e.item.val), 7)) : e.item.type === "inputNumber" ? (S(), Y(v, {
            key: 1,
            style: ee(e.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[0] || (i[0] = (m) => e.tempKeys[e.item.tempKey] = m),
            max: e.item.max || e.item.max === 0 ? e.item.max : 1 / 0,
            min: e.item.min || e.item.min === 0 ? e.item.min : -1 / 0,
            precision: e.item.precision,
            step: e.item.step || 1,
            placeholder: e.item.placeholder || p(T)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            readonly: !!e.item.readonly,
            editable: e.item.editable !== !1,
            onOnBlur: i[1] || (i[1] = (m) => a(m, e.item)),
            "active-change": !!e.item.activeChange,
            clearable: e.item.clearable !== !1
          }, null, 8, ["style", "modelValue", "max", "min", "precision", "step", "placeholder", "disabled", "readonly", "editable", "active-change", "clearable"])) : e.item.type === "input" ? (S(), Y(g, {
            key: 2,
            style: ee(u.itemStyle),
            modelValue: e.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[2] || (i[2] = (m) => e.tempKeys[e.item.tempKey] = m),
            type: e.item.inputType ?? (e.item.password ? "password" : "text"),
            maxlength: e.item.maxLength || null,
            password: !!e.item.password,
            icon: e.item.icon,
            prefix: e.item.prefix,
            suffix: e.item.suffix,
            placeholder: e.item.placeholder || p(T)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: i[3] || (i[3] = (m) => a(m, e.item)),
            clearable: !e.item.password && e.item.inputType === "text" && e.item.clearable !== !1
          }, Qe({ _: 2 }, [
            e.item.slotPosition && e.item.slotName ? {
              name: e.item.slotPosition,
              fn: q(() => [
                xe(u.$slots, e.item.slotName, {
                  valGroup: e.valGroup
                })
              ]),
              key: "0"
            } : void 0,
            e.item.slotPosition !== "prepend" && e.item.prepend ? {
              name: "prepend",
              fn: q(() => [
                L("span", null, N(e.item.prepend), 1)
              ]),
              key: "1"
            } : void 0,
            e.item.slotPosition !== "append" && e.item.append ? {
              name: "append",
              fn: q(() => [
                L("span", null, N(e.item.append), 1)
              ]),
              key: "2"
            } : void 0
          ]), 1032, ["style", "modelValue", "type", "maxlength", "password", "icon", "prefix", "suffix", "placeholder", "disabled", "clearable"])) : e.item.type === "select" ? (S(), Y(b, {
            key: 3,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[4] || (i[4] = (m) => u.tempKeys[e.item.tempKey] = m),
            style: ee(u.itemStyle),
            filterable: e.item.filterable === !0 || e.item.filterable === !1 ? e.item.filterable : !1,
            disabled: !!e.item.disabled || e.disabled,
            multiple: !!e.item.multiple,
            placeholder: e.item.placeholder || p(T)("r.pSelect"),
            onOnChange: i[5] || (i[5] = (m) => a(m, e.item)),
            transfer: "",
            clearable: e.item.clearable !== !1
          }, {
            default: q(() => [
              (S(!0), U(ve, null, ke(e.item.options, (m, P) => (S(), Y(B, {
                value: m.val,
                label: m.label || m.val,
                key: "option-" + e.item.key + P,
                disabled: !!m.disabled
              }, null, 8, ["value", "label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue", "style", "filterable", "disabled", "multiple", "placeholder", "clearable"])) : e.item.type === "selectInput" ? (S(), Y(Sl, {
            key: 4,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[6] || (i[6] = (m) => u.tempKeys[e.item.tempKey] = m),
            "label-width": u.labelWidth,
            "item-width": u.itemWidth,
            "select-option": e.item.options || [],
            placeholder: e.item.placeholder || p(T)("r.pInput"),
            clearable: e.item.clearable !== !1,
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: f
          }, null, 8, ["modelValue", "label-width", "item-width", "select-option", "placeholder", "clearable", "disabled"])) : e.item.type === "alCascader" ? (S(), Y(Il, {
            key: 5,
            style: ee(u.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[7] || (i[7] = (m) => e.valGroup[e.item.key] = m),
            level: e.item.level || e.item.level === 0 ? e.item.level : 2,
            disabled: !!e.item.disabled || e.disabled,
            filterable: e.item.filterable !== !1,
            placeholder: e.item.placeholder || p(T)("r.pSelect"),
            "change-on-select": !!e.item.changeOnSelect,
            onOnNameChange: i[8] || (i[8] = (m) => c(m, e.item))
          }, null, 8, ["style", "modelValue", "level", "disabled", "filterable", "placeholder", "change-on-select"])) : e.item.type === "asyncCascader" ? (S(), Y(Ll, {
            key: 6,
            style: ee(u.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[9] || (i[9] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || u.mgrUrl + "/web/v1/umc/orgs",
            "option-val": e.item.optionVal || "id",
            "option-label": e.item.optionLabel || "name",
            "option-filter": e.item.optionFilter || null,
            "only-last-val": e.item.onlyLastVal !== !1,
            "only-last-label": e.item.onlyLastLabel !== !1,
            separator: e.item.separator || "/",
            placeholder: e.item.placeholder || p(T)("r.pSelect"),
            filterable: !!e.item.filterable,
            disabled: !!e.item.disabled || e.disabled,
            onOnLabelChange: i[10] || (i[10] = (m) => y(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "option-val", "option-label", "option-filter", "only-last-val", "only-last-label", "separator", "placeholder", "filterable", "disabled"])) : e.item.type === "radio" ? (S(), Y(V, {
            key: 7,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[11] || (i[11] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled || e.disabled,
            onOnChange: i[12] || (i[12] = (m) => a(m, e.item))
          }, {
            default: q(() => [
              he(N(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "radioGroup" ? (S(), Y(M, {
            key: 8,
            style: ee(u.itemStyle),
            onOnChange: i[13] || (i[13] = (m) => s(m, e.item)),
            type: e.item.buttonType ? "button" : null,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[14] || (i[14] = (m) => u.tempKeys[e.item.tempKey] = m)
          }, {
            default: q(() => [
              (S(!0), U(ve, null, ke(e.item.options, (m) => (S(), Y(V, {
                key: "radioItem" + m.val,
                label: m.val,
                border: !!e.item.itemBorder,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: q(() => [
                  m.icon && !e.item.buttonType ? (S(), Y(A, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : ce("", !0),
                  L("span", null, N(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "border", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "type", "modelValue"])) : e.item.type === "checkbox" ? (S(), Y(k, {
            key: 9,
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[15] || (i[15] = (m) => e.valGroup[e.item.key] = m),
            disabled: !!e.item.disabled,
            onOnChange: i[16] || (i[16] = (m) => a(m, e.item))
          }, {
            default: q(() => [
              he(N(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"])) : e.item.type === "checkboxGroup" ? (S(), Y(_, {
            key: 10,
            style: ee(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[17] || (i[17] = (m) => u.tempKeys[e.item.tempKey] = m),
            onOnChange: i[18] || (i[18] = (m) => s(m, e.item))
          }, {
            default: q(() => [
              (S(!0), U(ve, null, ke(e.item.options, (m) => (S(), Y(k, {
                key: "checkItem" + m.val,
                label: m.val,
                disabled: !!e.item.disabled || e.disabled || m.disabled
              }, {
                default: q(() => [
                  m.icon ? (S(), Y(A, {
                    key: 0,
                    type: m.icon
                  }, null, 8, ["type"])) : ce("", !0),
                  L("span", null, N(m.label || m.val), 1)
                ]),
                _: 2
              }, 1032, ["label", "disabled"]))), 128))
            ]),
            _: 1
          }, 8, ["style", "modelValue"])) : e.item.type === "textarea" ? (S(), Y(g, {
            key: 11,
            type: "textarea",
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[19] || (i[19] = (m) => u.tempKeys[e.item.tempKey] = m),
            autosize: e.item.autosize || { minRows: 2 },
            style: ee(u.itemStyle),
            maxlength: e.item.maxLength || null,
            "show-word-limit": !!e.item.showWordLimit,
            placeholder: e.item.placeholder || p(T)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            onOnBlur: i[20] || (i[20] = (m) => a(m, e.item)),
            clearable: e.item.clearable !== !1
          }, null, 8, ["modelValue", "autosize", "style", "maxlength", "show-word-limit", "placeholder", "disabled", "clearable"])) : e.item.type === "upload" ? (S(), Y(Ol, {
            key: 12,
            style: ee(u.itemStyle),
            class: "inlineBlock",
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[21] || (i[21] = (m) => e.valGroup[e.item.key] = m),
            url: e.item.url || u.uploadUrl,
            "manual-upload": !!e.item.manualUpload,
            format: e.item.format || [],
            data: e.item.data,
            "max-size": e.item.maxSize || 0,
            "show-img": !!e.item.showImg,
            length: e.item.length || 0,
            disabled: !!e.item.disabled || e.disabled,
            "with-credentials": e.item.withCredentials !== !1,
            onOnFileIdChange: i[22] || (i[22] = (m) => s(m, e.item))
          }, null, 8, ["style", "modelValue", "url", "manual-upload", "format", "data", "max-size", "show-img", "length", "disabled", "with-credentials"])) : e.item.type === "date" ? (S(), Y(I, {
            key: 13,
            style: ee(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[23] || (i[23] = (m) => u.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(T)("r.selectDate"),
            options: e.item.dateOptions || null,
            clearable: e.item.clearable !== !1,
            editable: !1,
            transfer: "",
            onOnChange: i[24] || (i[24] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "options", "clearable"])) : e.item.type === "time" ? (S(), Y(C, {
            key: 14,
            style: ee(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[25] || (i[25] = (m) => u.tempKeys[e.item.tempKey] = m),
            type: e.item.dateType,
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(T)("r.selectTime"),
            steps: e.item.steps || [],
            clearable: e.item.clearable !== !1,
            editable: !1,
            format: e.item.format || "HH:mm:ss",
            transfer: "",
            onOnChange: i[26] || (i[26] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "type", "disabled", "placeholder", "steps", "clearable", "format"])) : e.item.type === "monthRange" ? (S(), Y(Ml, {
            key: 15,
            style: ee(u.itemStyle),
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[27] || (i[27] = (m) => u.tempKeys[e.item.tempKey] = m),
            disabled: !!e.item.disabled || e.disabled,
            placement: "bottom-end",
            placeholder: e.item.placeholder || p(T)("r.selectDate"),
            options1: e.item.dateOptions1 || null,
            options2: e.item.dateOptions2 || null,
            onOnChange: i[28] || (i[28] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "disabled", "placeholder", "options1", "options2"])) : e.item.type === "editorPro" ? (S(), Y(Pl, {
            key: 16,
            class: "inlineBlock",
            style: ee(u.itemStyle),
            modelValue: e.valGroup[e.item.key],
            "onUpdate:modelValue": i[29] || (i[29] = (m) => e.valGroup[e.item.key] = m),
            placeholder: e.item.placeholder || p(T)("r.pInput"),
            disabled: !!e.item.disabled || e.disabled,
            "toolbar-config": e.item.toolbarConfig || {},
            "editor-config": e.item.editorConfig || {},
            mode: e.item.mode || "simple",
            height: e.item.height || 300,
            onInput: i[30] || (i[30] = (m) => a(m, e.item))
          }, null, 8, ["style", "modelValue", "placeholder", "disabled", "toolbar-config", "editor-config", "mode", "height"])) : e.item.type === "inputMap" ? (S(), Y(xl, {
            key: 17,
            modelValue: u.tempKeys[e.item.tempKey],
            "onUpdate:modelValue": i[31] || (i[31] = (m) => u.tempKeys[e.item.tempKey] = m),
            style: ee(u.itemStyle),
            placeholder: e.item.placeholder || p(T)("r.search"),
            disabled: !!e.item.disabled || e.disabled,
            "show-map": e.item.showMap !== !1,
            height: e.item.mapHeight || "250px",
            onOnChange: i[32] || (i[32] = (m) => a(m, e.item))
          }, null, 8, ["modelValue", "style", "placeholder", "disabled", "show-map", "height"])) : e.item.type === "custom" ? (S(), U("div", {
            key: 18,
            class: "inlineBlock",
            style: ee(u.itemStyle)
          }, [
            xe(u.$slots, e.item.slotName, {
              valGroup: e.valGroup
            })
          ], 4)) : ce("", !0),
          e.item.info ? (S(), U("div", Hn, N(e.item.info), 1)) : ce("", !0),
          e.item.title ? (S(), U("div", Wn, N(e.item.title), 1)) : ce("", !0)
        ]),
        _: 3
      }, 8, ["label", "prop", "class"]);
    };
  }
}), jn = /* @__PURE__ */ L("input", { type: "text" }, null, -1), Jn = { class: "inlineBlock" }, yt = /* @__PURE__ */ re({
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
  setup(l, { expose: d, emit: o }) {
    var qt, Yt;
    const e = o, n = l, a = G(null), s = G({}), f = G([]), c = G({});
    let y = [];
    const u = ((qt = window == null ? void 0 : window.g) == null ? void 0 : qt.mgrURL) ?? "";
    let i = [], v = [];
    const g = G(!1), B = G(Math.random() * 1e8 + 1e3), b = (Yt = window == null ? void 0 : window.g) != null && Yt.mgrURL ? window.g.mgrURL + "/web/v1/fsc/file" : "/file";
    let V = !1;
    const A = K(() => Array.isArray(n.formData.length ? n.formData[0] : !1)), M = K(
      () => n.inline ? {
        width: n.itemWidth + n.labelWidth + "px"
      } : {}
    ), k = K(
      () => n.inline ? {
        width: "100%"
      } : { width: n.contentWidth }
    ), _ = K(() => {
      let r = oe(n.formRules);
      for (let t in r)
        if (r.hasOwnProperty(t))
          if (Array.isArray(r[t]))
            for (let x of r[t])
              x.message || x.validator || (x.message = T("r.required"));
          else
            z(r[t]) === "Object" && (r[t].message || r[t].validator || (r[t].message = T("r.required")));
      return r;
    }), I = K(() => {
      let r = [];
      if (A.value)
        for (let t of f.value)
          m(t, r);
      else
        m(f.value, r);
      return r.concat(i, v);
    }), C = K(() => {
      let r = [];
      if (A.value)
        for (let t of f.value)
          P(t, r);
      else
        P(f.value, r);
      return r;
    });
    function O(r) {
      return r.filter((t) => t.slotName);
    }
    function m(r, t) {
      for (let x of r)
        if (x.showing === !0 && x.key && x.type !== "selectInput" && (t.push(x.key), x.key2 && t.push(x.key2), x.collectLabel)) {
          if (!Array.isArray(x.collectLabel) && x.collectLabel.key)
            t.push(x.collectLabel.key);
          else if (Array.isArray(x.collectLabel))
            for (let w of x.collectLabel)
              w.key && t.push(w.key);
        }
    }
    function P(r, t) {
      for (let x of r)
        x.showing === !0 && x.key && x.type !== "selectInput" && t.push(x.key);
    }
    function h() {
      return new Promise((r) => {
        X(), $().then(() => {
          e("on-reset"), r(!0);
        });
      });
    }
    function F() {
      return new Promise((r) => {
        for (let t of y)
          t();
        y = [], c.value = {}, ye(), le(), $().then(() => {
          e("on-re-render"), r(!0);
        });
      });
    }
    function $() {
      return new Promise((r) => {
        B.value = Math.floor(Math.random() * 1e8 + 1e3), Pe(function() {
          r(!0);
        });
      });
    }
    function X() {
      let r = Ae();
      for (let t in s.value)
        if (s.value.hasOwnProperty(t))
          if (_e(r[t]))
            s.value[t] = r[t];
          else if (Array.isArray(s.value[t]))
            s.value[t] = [];
          else if (z(s.value[t]) === "Boolean")
            s.value[t] = !1;
          else {
            const x = je(n.formData, (w) => w.key === t);
            x && (x.type === "editor" || x.type === "editorPro") ? s.value[t] = "" : s.value[t] = null;
          }
      te(r);
    }
    function te(r) {
      for (let t in c.value)
        c.value.hasOwnProperty(t) && (_e(r[t]) ? c.value[t] = r[t] : Array.isArray(c.value[t]) ? c.value[t] = [] : z(c.value[t]) === "Object" && c.value[t].hasOwnProperty("key") && c.value[t].hasOwnProperty("val") ? c.value[t].val = null : c.value[t] = null);
    }
    function fe(r) {
      let t = Ae();
      _e(t[r]) ? c.value[r] = t[r] : Array.isArray(c.value[r]) ? c.value[r] = [] : c.value[r] = null;
    }
    function Ae() {
      let r = {};
      if (A.value)
        for (let t of f.value)
          Ce(t, r);
      else
        Ce(f.value, r);
      return r;
    }
    function Ce(r, t) {
      for (let x of r)
        x.tempKey && _e(x.defaultVal) && R(x, t), x.key && _e(x.defaultVal) && (t[x.key] = x.defaultVal), x.key2 && _e(x.defaultVal2) && (t[x.key2] = x.defaultVal2);
    }
    function j(r) {
      if (r.show) {
        if (z(r.show) === "Object")
          return ie(r, pe(r.show));
        if (Array.isArray(r.show))
          if (r.showOr) {
            for (let t of r.show)
              if (pe(t) === !0)
                return ie(r, !0);
            return ie(r, !1);
          } else {
            for (let t of r.show)
              if (pe(t) === !1)
                return ie(r, !1);
            return ie(r, !0);
          }
        else if (typeof r.show == "function")
          return ie(r, r.show(s.value));
      } else
        r.showing || (r.showing = !0);
      return !0;
    }
    function pe(r) {
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
    function ie(r, t) {
      return !r.showing && t && r.key ? (r.showing = t, r.defaultVal !== void 0 && (r.tempKey ? (c.value[r.tempKey] === null || c.value[r.tempKey] === void 0 || (z(c.value[r.tempKey]) === "Object" || Array.isArray(c.value[r.tempKey])) && Se(c.value[r.tempKey])) && R(r, c.value) : (s.value[r.key] === null || s.value[r.key] === void 0) && (s.value[r.key] = r.defaultVal), r.key2 && r.deafultVal2 !== void 0 && (s.value[r.key2] === null || s.value[r.key2] === void 0) && r.type !== "inputMap" && (s.value[r.key2] = r.defaultVal2)), r.tempKey && ge(c.value[r.tempKey], r)) : r.showing = t, t;
    }
    function R(r, t) {
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
    function le() {
      let r = oe(n.formData);
      if (A.value)
        for (let t of r)
          ue(t);
      else
        ue(r);
      f.value = r;
    }
    function ue(r) {
      for (let t of r)
        switch (t.type) {
          case "selectInput":
            const x = "selectInput" + Math.floor(Math.random() * 1e8);
            t.tempKey = x, c.value[x] = {
              key: t.key || null,
              val: t.defaultVal || null
            }, y.push(
              be(
                () => c.value[x],
                (H) => {
                  ge(H, t);
                },
                { immediate: !0 }
              )
            );
            break;
          case "inputMap":
            const w = "inputMap" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = w, t.key3 ? c.value[w] = t.defaultVal !== void 0 && t.defaultVal2 !== void 0 ? {
              lng: t.defaultVal,
              lat: t.defaultVal2,
              name: t.defaultVal3 || ""
            } : {
              lng: null,
              lat: null,
              name: null
            } : c.value[w] = t.defaultVal !== void 0 && t.defaultVal2 !== void 0 ? {
              lng: t.defaultVal,
              lat: t.defaultVal2
            } : {
              lng: null,
              lat: null
            }, y.push(
              be(
                () => c.value[w],
                (H) => {
                  ge(H, t);
                },
                { immediate: !0 }
              )
            ));
            break;
          case "input":
          case "inputNumber":
          case "textarea":
            const se = "inputT" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = se, c.value[se] = t.defaultVal !== void 0 ? t.defaultVal : null, y.push(
              be(
                () => c.value[se],
                (H) => {
                  ge(H, t);
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
                  for (let Q of t.changeOption)
                    if (!Q.valKey || !Q.key) {
                      H = !1;
                      break;
                    }
                  H ? y.push(
                    be(
                      () => {
                        let Q = "";
                        if (Array.isArray(t.changeOption))
                          for (let Te of t.changeOption) {
                            let $e = s.value[Te.valKey];
                            if ($e || $e === 0 || $e === !1)
                              Q += "&" + Te.key + "=" + $e;
                            else if (!Te.notRequired)
                              return !1;
                          }
                        return Q;
                      },
                      (Q) => {
                        let Te = oe(c.value[t.tempKey]);
                        if (c.value[t.tempKey] = null, Q && t.optionUrl) {
                          let $e = t.optionUrl.indexOf("?") !== -1 ? t.optionUrl : t.optionUrl + "?";
                          E(($e + Q).replace(/\?&/, "?"), t, Te);
                        } else
                          t.options = [], t.localOption && (t.options = [...t.localOption]), _e(Te) && D(Te, t);
                      },
                      {
                        immediate: !0
                      }
                    )
                  ) : (t.options = [], t.localOption && (t.options = [...t.localOption]));
                } else
                  typeof t.changeOption == "object" ? t.changeOption.valKey && t.changeOption.key && y.push(
                    be(
                      () => typeof t.changeOption == "object" && !Array.isArray(t.changeOption) ? s.value[t.changeOption.valKey] : !1,
                      (H) => {
                        let Q = oe(c.value[t.tempKey]);
                        if (c.value[t.tempKey] = null, (H || H === 0 || H === !1) && t.optionUrl && typeof t.changeOption == "object" && !Array.isArray(t.changeOption)) {
                          let Te = t.optionUrl.indexOf("?") !== -1 ? t.optionUrl : t.optionUrl + "?";
                          E((Te + "&" + t.changeOption.key + "=" + H).replace(/\?&/, "?"), t, Q);
                        } else
                          t.options = [], t.localOption && (t.options = [...t.localOption]), _e(Q) && D(Q, t);
                      },
                      { immediate: !0 }
                    )
                  ) : z(t.changeOption) === "Boolean" && y.push(
                    be(
                      () => je(n.formData, (H) => H.key === t.key).optionUrl,
                      (H) => {
                        let Q = oe(c.value[t.tempKey]);
                        c.value[t.tempKey] = null, H ? E(H, t, Q) : (t.options = [], t.localOption && (t.options = [...t.localOption]), _e(Q) && D(Q, t));
                      },
                      {
                        immediate: !0
                      }
                    )
                  );
              else
                t.optionUrl && E(t.optionUrl, t);
            else
              z(t.borrowOption) === "String" && (t.options = je(f.value, (H) => H.key === t.borrowOption).options);
            const ne = "opEle" + Math.floor(Math.random() * 1e8);
            t.key && (t.tempKey = ne, t.type === "select" && t.multiple || t.type === "checkboxGroup" ? c.value[ne] = t.defaultVal !== void 0 ? t.defaultVal : [] : t.booleanVal ? c.value[ne] = t.defaultVal !== void 0 ? t.defaultVal ? 1 : 0 : null : c.value[ne] = t.defaultVal !== void 0 ? t.defaultVal : null, y.push(
              be(
                () => c.value[ne],
                (H) => {
                  ge(H, t);
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
            t.tempKey = Z, t.dateType === "date" || t.dateType === "datetime" || t.dateType === "time" || t.dateType === "year" || t.dateType === "month" ? c.value[Z] = t.defaultVal || null : (t.dateType === "daterange" || t.dateType === "datetimerange" || t.dateType === "timerange" || t.type === "monthRange") && (c.value[Z] = t.defaultVal && t.defaultVal2 && [t.defaultVal, t.defaultVal2] || []), y.push(
              be(
                () => c.value[Z],
                (H) => {
                  ge(H, t);
                }
              )
            );
            break;
        }
    }
    function E(r, t, x) {
      Re.get(r).then((w) => {
        var ne;
        if (!t.options)
          return;
        let se = ((ne = w == null ? void 0 : w.data) == null ? void 0 : ne.records) || (w == null ? void 0 : w.data) || w || [];
        Array.isArray(se) ? (t.optionFilter && z(t.optionFilter) === "Function" && (se = t.optionFilter(se)), t.optionLabel && t.optionVal ? (t.options.length = 0, t.options.push(
          ...se.map((Z) => {
            let H;
            if (Array.isArray(t.optionLabel)) {
              let Q = "";
              t.optionLabel.forEach((Te, $e) => {
                let gt = String(Z[Te]);
                $e === 1 ? Q += "（" + gt : $e > 1 ? Q += "、" + gt : Q += gt;
              }), H = {
                label: Q + "）",
                val: t.optionVal && Z[t.optionVal]
              };
            } else
              H = {
                label: t.optionLabel && Z[t.optionLabel],
                val: t.optionVal && Z[t.optionVal]
              };
            if (t.collectLabel)
              if (Array.isArray(t.collectLabel))
                for (let Q of t.collectLabel)
                  Q.valKey && Q.valKey !== "label" && (H[Q.valKey] = Z[Q.valKey]);
              else
                t.collectLabel.valKey && t.collectLabel.valKey !== "label" && (H[t.collectLabel.valKey] = Z[t.collectLabel.valKey]);
            if (H.val !== null && H.val !== void 0)
              return H;
          })
        )) : (t.options.length = 0, t.options.push(...se))) : t.options.length = 0, t.localOption && t.options.unshift(...t.localOption), _e(x) && D(x, t), t.disableOptionByOthers && (z(t.disableOptionByOthers) === "String" ? y.push(
          be(
            () => s.value[t.disableOptionByOthers],
            (Z) => {
              if (fe(t.tempKey), !!t.options) {
                for (let H of t.options)
                  H.disabled && (H.disabled = !1);
                if (Z || Z === 0 || Z === !1)
                  for (let H of t.options)
                    H.val === Z && (H.disabled = !0);
              }
            },
            {
              immediate: !0
            }
          )
        ) : Array.isArray(t.disableOptionByOthers) && y.push(
          be(
            () => t.disableOptionByOthers.filter((Z) => Z).map((Z) => s.value[Z]),
            (Z) => {
              if (fe(t.tempKey), !!t.options) {
                for (let H of t.options)
                  H.disabled && (H.disabled = !1);
                if (Z) {
                  for (let H of t.options)
                    for (let Q = 0; Q < Z.length; Q++)
                      if (H.val === Z[Q]) {
                        H.disabled = !0, Z.splice(Q, 1);
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
    function D(r, t) {
      Array.isArray(t.options) && fl(t.options, { val: r }) !== -1 && (c.value[t.tempKey] = r);
    }
    function ye() {
      if (s.value = {}, A.value)
        for (let r of n.formData)
          we(r);
      else
        we(n.formData);
    }
    function we(r) {
      for (let t of r)
        t.key && (t.type === "checkboxGroup" || t.type === "select" && t.multiple ? s.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : [] : t.type === "editor" || t.type === "editorPro" ? s.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : "" : (s.value[t.key] = t.defaultVal !== void 0 && t.show === void 0 ? t.defaultVal : null, t.key2 && (s.value[t.key2] = t.defaultVal2 !== void 0 && t.show === void 0 ? t.defaultVal2 : null)));
    }
    function ge(r, t) {
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
              const se = ae(t, r);
              if (Array.isArray(t.collectLabel)) {
                for (let ne of t.collectLabel)
                  if (ne.key && ne.valKey) {
                    const Z = Ue(ne.key);
                    let H = null;
                    Array.isArray(se) ? (H = se.map((Te) => Te[ne.valKey]), s.value[ne.key] = H, Z && (c.value[Z] = H)) : (se && _e(se[ne.valKey]) && (H = se[ne.valKey]), s.value[ne.key] = H, Z && (c.value[Z] = H));
                    let Q = je(f.value, (Te) => Te.key === ne.key);
                    Q && Q.tempKey && (c.value[Q.tempKey] = s.value[ne.key]);
                  }
              } else if (typeof t.collectLabel == "object" && t.collectLabel.key && t.collectLabel.valKey) {
                const ne = Ue(t.collectLabel.key);
                let Z = null;
                Array.isArray(se) ? (Z = se.map(
                  (Q) => t.collectLabel && !Array.isArray(t.collectLabel) && Q[t.collectLabel.valKey]
                ), s.value[t.collectLabel.key] = Z, ne && (c.value[ne] = Z)) : (se && _e(se[t.collectLabel.valKey]) && (Z = se[t.collectLabel.valKey]), s.value[t.collectLabel.key] = Z, ne && (c.value[ne] = Z));
                let H = je(
                  f.value,
                  (Q) => t.collectLabel && !Array.isArray(t.collectLabel) && Q.key === t.collectLabel.key || !1
                );
                H && H.tempKey && (c.value[H.tempKey] = s.value[t.collectLabel.key]);
              }
            }
            break;
          case "date":
          case "time":
          case "monthRange":
            if (!t.key)
              return;
            let x = t.dateType;
            const w = {
              date: "YYYY-MM-DD",
              daterange: "YYYY-MM-DD",
              datetime: "YYYY-MM-DD HH:mm:ss",
              datetimerange: "YYYY-MM-DD HH:mm:ss",
              year: "YYYY",
              month: "YYYY-MM"
            };
            if (x === "date" || x === "datetime" || x === "time" || x === "year" || x === "month")
              r ? (x === "time" ? s.value[t.key] = r : s.value[t.key] = lt(r).format(typeof t.format == "string" ? t.format : w[x]), x === "date" && t.addTime && (s.value[t.key] += " 00:00:00")) : s.value[t.key] = null;
            else if (t.type === "monthRange" || x === "daterange" || x === "datetimerange" || x === "timerange") {
              if (!t.key2)
                return;
              r && r[0] && r[1] ? (x === "timerange" ? (s.value[t.key] = r[0], s.value[t.key2] = r[1]) : t.type === "monthRange" ? (s.value[t.key] = typeof t.format == "string" && lt(r[0]).format(t.format) || r[0], s.value[t.key2] = typeof t.format == "string" && t.format && lt(r[1]).format(t.format) || r[1]) : (s.value[t.key] = lt(r[0]).format(t.format || x && w[x]), s.value[t.key2] = lt(r[1]).format(t.format || x && w[x])), x === "daterange" && t.addTime && (s.value[t.key] += " 00:00:00", s.value[t.key2] += " 23:59:59")) : (s.value[t.key] = null, s.value[t.key2] = null);
            }
            break;
        }
    }
    function ae(r, t) {
      if (r.options)
        if (r.multiple || r.type === "checkboxGroup") {
          if (t) {
            let x = [];
            for (let w of r.options)
              t.indexOf(w.val) !== -1 && x.push(w);
            return x;
          }
          return !1;
        } else {
          if (t || t === 0 || t === !1) {
            for (let x of r.options)
              if (x.val === t)
                return x;
          }
          return !1;
        }
    }
    function Ue(r) {
      if (A.value) {
        for (let t of f.value) {
          const x = et(t, r);
          if (x)
            return x;
        }
        return !1;
      }
      return et(f.value, r);
    }
    function et(r, t) {
      for (let x of r)
        if (x.key === t)
          return x.tempKey;
      return !1;
    }
    function Fl(r, t) {
      let x = {};
      for (let w in s.value)
        s.value.hasOwnProperty(w) && r[w] !== void 0 && (x[w] = r[w], delete r[w]);
      Nt(x, t);
      for (let w in r)
        r.hasOwnProperty(w) && (v.indexOf(w) < 0 && v.push(w), s.value[w] = r[w]);
    }
    function Ul(r) {
      let t = oe(r);
      if (A.value) {
        let x = [];
        for (let w of n.formData)
          x.push(...Dt(w, t));
        return x;
      }
      return Dt(n.formData, t);
    }
    function Dt(r, t) {
      return r.filter((x) => {
        for (let w of Object.keys(t))
          if (x.key === w && C.value.indexOf(w) > -1 && !(t[w] === null || (Array.isArray(t[w]) || z(t[w]) === "Object") && Se(t[w])))
            return delete t[w], !0;
        return !1;
      }).map((x) => x.key);
    }
    function Nt(r, t = !1) {
      let x = oe(r);
      $l(r, t);
      for (let w in s.value)
        if (s.value.hasOwnProperty(w) && r[w] !== void 0 && r[w] !== "--") {
          if (Array.isArray(r[w]))
            r[w] = r[w].filter((se) => se !== "--");
          else if (z(r[w]) === "Object")
            for (let se in r[w])
              r[w].hasOwnProperty(se) && r[w][se] === "--" && (r[w][se] = null);
          s.value[w] = r[w];
        } else
          t || (s.value[w] = Array.isArray(s.value[w]) ? [] : null);
      Pe(function() {
        Nl(Ul(x));
      });
    }
    function $l(r, t = !1) {
      if (A.value)
        for (let x of f.value)
          Et(x, r, t);
      else
        Et(f.value, r, t);
    }
    function Et(r, t, x = !1) {
      for (let w of r)
        if (w.key && (x && (t[w.key] !== void 0 || w.key2 && t[w.key2] !== void 0) || !x) && w.tempKey)
          switch (w.type) {
            case "inputMap":
              if (!w.key2)
                continue;
              z(t[w.key]) === "Number" && z(t[w.key2] === "Number") ? w.key3 ? c.value[w.tempKey] = {
                lng: t[w.key],
                lat: t[w.key2],
                name: t[w.key3]
              } : c.value[w.tempKey] = {
                lng: t[w.key],
                lat: t[w.key2]
              } : w.key3 ? c.value[w.tempKey] = {
                lng: null,
                lat: null,
                name: null
              } : c.value[w.tempKey] = {
                lng: null,
                lat: null
              };
              break;
            case "input":
            case "inputNumber":
            case "textarea":
              t[w.key] && t[w.key] !== "--" || t[w.key] === 0 ? c.value[w.tempKey] = t[w.key] : c.value[w.tempKey] = null;
              break;
            case "select":
            case "radioGroup":
            case "checkboxGroup":
              t[w.key] && t[w.key] !== "--" || t[w.key] === 0 || t[w.key] === !1 ? w.multiple || w.type === "checkboxGroup" ? c.value[w.tempKey] = [...t[w.key]] : w.booleanVal ? c.value[w.tempKey] = t[w.key] ? 1 : 0 : c.value[w.tempKey] = t[w.key] : w.multiple || w.type === "checkboxGroup" ? c.value[w.tempKey] = [] : c.value[w.tempKey] = null;
              break;
            case "date":
            case "time":
              if (w.dateType === "date" || w.dateType === "datetime" || w.dateType === "year" || w.dateType === "month" || w.dateType === "time")
                c.value[w.tempKey] = t[w.key] && t[w.key] !== "--" ? t[w.key] : null;
              else if (w.dateType === "daterange" || w.dateType === "datetimerange" || w.dateType === "timerange") {
                if (!w.key2)
                  continue;
                c.value[w.tempKey] = t[w.key] && t[w.key] !== "--" && t[w.key2] && t[w.key2] !== "--" && [t[w.key], t[w.key2]] || [];
              }
              break;
          }
    }
    function Kl(r) {
      if (Array.isArray(r))
        for (let t of r)
          zt(t);
      else
        z(r) === "Object" && zt(r);
    }
    function zt(r) {
      const { index: t, indexB: x, key: w, val: se } = r;
      if (typeof t == "number")
        if (Array.isArray(f.value[t])) {
          if (typeof x == "number")
            if (w && r.hasOwnProperty("val"))
              f.value[t][x][w] = se;
            else
              for (let ne of Object.keys(r))
                ne !== "index" && w !== "indexB" && (f.value[t][x][ne] = r[ne]);
        } else if (w && r.hasOwnProperty("val"))
          f.value[t][w] = se;
        else
          for (let ne of Object.keys(r))
            ne !== "index" && (f.value[t][ne] = r[ne]);
    }
    function Gt({ label: r, root: t }) {
      t.key2 && (s.value[t.key2] = r), He({
        e: r,
        root: t
      });
    }
    function Ht(r) {
      r.beforeKey && Zl(i, (t) => t === r.beforeKey), r.key && (i.indexOf(r.key) === -1 && i.push(r.key), He({
        e: null,
        root: r
      }));
    }
    function Wt({ name: r, root: t }) {
      t.key2 && (s.value[t.key2] = r), He({
        e: r,
        root: t
      });
    }
    function jt({ e: r, root: t }) {
      He({
        e: r,
        root: t
      }), Pe(function() {
        var x, w;
        (w = (x = a.value) == null ? void 0 : x.validateField) == null || w.call(x, t.key);
      });
    }
    function He({ e: r, root: t }) {
      Oe(() => {
        let x = {
          event: r
        };
        if (t.key && (x[t.key] = s.value[t.key]), t.key2 && (x[t.key2] = s.value[t.key2]), Array.isArray(t.collectLabel))
          for (let w of t.collectLabel)
            x[w.key] = s.value[w.key];
        else
          t.collectLabel && t.collectLabel.key && (x[t.collectLabel.key] = s.value[t.collectLabel.key]);
        e("on-item-change", x);
      }, 500);
    }
    function Jt() {
      let r = {};
      for (let t of I.value)
        r[t] = s.value[t];
      return n.trim && (r = pt(r)), r;
    }
    function Rl() {
      var r, t;
      (t = (r = a.value) == null ? void 0 : r.validate) == null || t.call(r);
    }
    function Dl(r) {
      Oe(() => {
        var t, x;
        (x = (t = a.value) == null ? void 0 : t.validateField) == null || x.call(t, r, () => {
        });
      }, 10);
    }
    function Nl(r) {
      Oe(() => {
        var t, x;
        if (Array.isArray(r))
          for (let w of r)
            (x = (t = a.value) == null ? void 0 : t.validateField) == null || x.call(t, w, () => {
            });
      }, 10);
    }
    function El(r) {
      r !== void 0 && (g.value = !!r);
    }
    function vt() {
      var r, t;
      n.disabled || (t = (r = a.value) == null ? void 0 : r.validate) == null || t.call(r, (x) => {
        V || (V = !0, x && (g.value = !0, e("on-submit", Jt())), Oe(() => {
          V = !1;
        }, 2e3));
      });
    }
    return De(() => {
      ye(), le();
    }), d({
      resetForm: h,
      refreshFormDom: $,
      reRenderForm: F,
      setItemToValGroup: Fl,
      updateValGroup: Nt,
      updateFormDataT: Kl,
      validate: Rl,
      reValidate: Dl,
      changeLoading: El,
      getValGroup: Jt,
      submit: vt
    }), (r, t) => {
      const x = J("FormItem"), w = J("Button"), se = J("Form");
      return S(), Y(se, {
        ref_key: "formGroupXRef",
        ref: a,
        model: p(s),
        rules: p(_),
        "label-width": n.labelWidth,
        inline: n.inline,
        "show-message": n.showMessage,
        class: "formXN",
        key: p(B)
      }, {
        default: q(() => [
          W(x, { style: { display: "none" } }, {
            default: q(() => [
              jn
            ]),
            _: 1
          }),
          p(A) ? (S(!0), U(ve, { key: 0 }, ke(p(f), (ne, Z) => (S(), U("div", {
            class: Be([r.teamClass, "formTeamBox" + Z]),
            key: "formTeamBox" + Z
          }, [
            (S(!0), U(ve, null, ke(ne, (H, Q) => (S(), U(ve, {
              key: "formItem" + Q
            }, [
              j(H) ? (S(), Y(ol, {
                key: 0,
                item: H,
                style: ee(p(M)),
                "item-style": p(k),
                "val-group": p(s),
                "temp-keys": p(c),
                inline: n.inline,
                disabled: n.disabled,
                "label-width": n.labelWidth,
                "item-width": n.itemWidth,
                "mgr-url": p(u),
                "upload-url": p(b),
                onItemChange: He,
                onReValidate: jt,
                onClearTempKeyItem: fe,
                onSelectInputChange: Ht,
                onAlNameChange: Wt,
                onAsyncLabelChange: Gt
              }, Qe({ _: 2 }, [
                ke(O(ne), (Te) => ({
                  name: Te.slotName,
                  fn: q(($e) => [
                    xe(r.$slots, Te.slotName, {
                      valGroup: $e.valGroup
                    })
                  ])
                }))
              ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ce("", !0)
            ], 64))), 128))
          ], 2))), 128)) : ce("", !0),
          (S(!0), U(ve, null, ke(p(f), (ne, Z) => (S(), U(ve, {
            key: "formItem" + Z
          }, [
            !p(A) && j(ne) ? (S(), Y(ol, {
              key: 0,
              item: ne,
              style: ee(p(M)),
              "item-style": p(k),
              "val-group": p(s),
              "temp-keys": p(c),
              inline: n.inline,
              disabled: n.disabled,
              "label-width": n.labelWidth,
              "item-width": n.itemWidth,
              "mgr-url": p(u),
              "upload-url": p(b),
              onItemChange: He,
              onReValidate: jt,
              onClearTempKeyItem: fe,
              onSelectInputChange: Ht,
              onAlNameChange: Wt,
              onAsyncLabelChange: Gt
            }, Qe({ _: 2 }, [
              ke(O(r.formData), (H) => ({
                name: H.slotName,
                fn: q((Q) => [
                  xe(r.$slots, H.slotName, {
                    valGroup: Q.valGroup
                  })
                ])
              }))
            ]), 1032, ["item", "style", "item-style", "val-group", "temp-keys", "inline", "disabled", "label-width", "item-width", "mgr-url", "upload-url"])) : ce("", !0)
          ], 64))), 128)),
          n.showLongOkBt ? (S(), Y(x, { key: 1 }, {
            default: q(() => [
              W(w, {
                onClick: vt,
                style: ee(p(k)),
                type: "primary",
                loading: n.btnLoading && p(g),
                disabled: n.disabled
              }, {
                default: q(() => [
                  he(N(n.longOkBtTxt || p(T)("r.confirm")), 1)
                ]),
                _: 1
              }, 8, ["style", "loading", "disabled"])
            ]),
            _: 1
          })) : ce("", !0),
          L("div", Jn, [
            n.showInlineOkBt ? (S(), Y(w, {
              key: 0,
              type: "primary",
              class: Be({ inlineFormBtXN: n.inline, okBtnXN: !0 }),
              onClick: vt,
              loading: n.btnLoading && p(g),
              disabled: n.disabled
            }, {
              default: q(() => [
                he(N(n.inlineOkBtTxt || p(T)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])) : ce("", !0),
            n.showInlineClearBt ? (S(), Y(w, {
              key: 1,
              onClick: h,
              class: Be({ inlineFormBtXN: n.inline }),
              type: "dashed"
            }, {
              default: q(() => [
                he(N(n.inlineClearBtTxt || p(T)("r.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : ce("", !0)
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
  setup(l, { expose: d, emit: o }) {
    const e = o, n = l, a = G({ width: n.with }), s = G(!1), f = G(), c = K(() => {
      if (Array.isArray(n.formData))
        if (Array.isArray(n.formData[0])) {
          let C = [];
          for (let O of n.formData)
            C = C.concat(
              O.filter((m) => m.type === "custom" || m.type === "input" && m.slotName && m.slotPosition)
            );
          return C;
        } else
          return n.formData.filter(
            (C) => C.type === "custom" || C.type === "input" && C.slotName && C.slotPosition
          );
      return [];
    });
    function y() {
      return new Promise((C) => {
        var O, m;
        (m = (O = f.value).resetForm) == null || m.call(O).then((P) => {
          C(P);
        });
      });
    }
    function u() {
      return new Promise((C) => {
        var O, m;
        (m = (O = f.value).refreshFormDom) == null || m.call(O).then((P) => {
          C(P);
        });
      });
    }
    function i() {
      return new Promise((C) => {
        var O, m;
        (m = (O = f.value).reRenderForm) == null || m.call(O).then((P) => {
          C(P);
        });
      });
    }
    function v(C, O) {
      var m, P;
      (P = (m = f.value).setItemToValGroup) == null || P.call(m, C, O);
    }
    function g(C, O) {
      var m, P;
      (P = (m = f.value).updateValGroup) == null || P.call(m, C, O);
    }
    function B(C) {
      var O, m;
      (m = (O = f.value).updateFormDataT) == null || m.call(O, C);
    }
    function b() {
      var C, O;
      (O = (C = f.value).validate) == null || O.call(C);
    }
    function V(C) {
      var O, m;
      (m = (O = f.value).reValidate) == null || m.call(O, C);
    }
    function A(C) {
      var O, m;
      C !== void 0 && (s.value = !!C, (m = (O = f.value).changeLoading) == null || m.call(O, s.value));
    }
    function M() {
      var C, O;
      return (O = (C = f.value).getValGroup) == null ? void 0 : O.call(C);
    }
    function k() {
      s.value = !0;
    }
    function _() {
      var C, O;
      (O = (C = f.value).submit) == null || O.call(C);
    }
    function I() {
      e("on-cancel"), Oe(() => {
        var C, O;
        s.value = !1, (O = (C = f.value).changeLoading) == null || O.call(C, !1);
      }, 1e3);
    }
    return d({
      resetForm: y,
      refreshFormDom: u,
      reRenderForm: i,
      setItemToValGroup: v,
      updateValGroup: g,
      updateFormDataT: B,
      validate: b,
      reValidate: V,
      changeLoading: A,
      getValGroup: M,
      submit: _,
      close: I
    }), (C, O) => {
      const m = J("Button");
      return S(), U("div", {
        style: ee(p(a)),
        class: "formGroupBoxVM"
      }, [
        W(yt, Ze({
          ref_key: "formRRef",
          ref: f
        }, C.$attrs, {
          "form-data": n.formData,
          "label-width": n.labelWidth,
          "content-width": n.contentWidth,
          "item-width": n.itemWidth,
          btnLoading: n.btnLoading,
          onOnSubmit: k
        }), Qe({ _: 2 }, [
          ke(p(c), (P) => ({
            name: P.slotName,
            fn: q(({ valGroup: h }) => [
              xe(C.$slots, P.slotName, { valGroup: h })
            ])
          }))
        ]), 1040, ["form-data", "label-width", "content-width", "item-width", "btnLoading"]),
        de(L("div", {
          class: "formFooterVM",
          style: ee({ marginLeft: n.labelWidth + "px" })
        }, [
          L("div", {
            style: ee({ width: n.contentWidth }),
            class: "btnBoxKAL"
          }, [
            n.showOkBt ? (S(), Y(m, {
              key: 0,
              onClick: _,
              class: "form-save-btn",
              loading: n.btnLoading && p(s)
            }, {
              default: q(() => [
                he(N(n.okBtTxt || p(T)("r.confirm")), 1)
              ]),
              _: 1
            }, 8, ["loading"])) : ce("", !0),
            n.showCancelBt ? (S(), Y(m, {
              key: 1,
              onClick: I,
              class: "form-cancel-btn"
            }, {
              default: q(() => [
                he(N(n.cancelBtTxt || p(T)("r.cancel")), 1)
              ]),
              _: 1
            })) : ce("", !0)
          ], 4)
        ], 4), [
          [me, n.showOkBt || n.showCancelBt]
        ])
      ], 4);
    };
  }
}), Ut = /* @__PURE__ */ re({
  __name: "SearchForm",
  props: {
    formData: { default: () => [] },
    labelWidth: { default: () => Ke().searchFormLabelWidth },
    itemWidth: { default: () => Ke().searchFormItemWidth },
    showInlineOkBt: { type: Boolean, default: !0 },
    showInlineClearBt: { type: Boolean, default: !0 }
  },
  emits: ["on-search"],
  setup(l, { expose: d, emit: o }) {
    const e = o, n = l, a = G(), s = K(() => {
      if (Array.isArray(n.formData[0])) {
        let k = [];
        for (let _ of n.formData)
          k = k.concat(_.filter((I) => I.type === "custom" || I.type === "input" && I.slotName && I.slotPosition));
        return k;
      }
      return n.formData.filter(
        (k) => k.type === "custom" || k.type === "input" && k.slotName && k.slotPosition
      );
    });
    function f() {
      return new Promise((k) => {
        var _, I;
        (I = (_ = a.value).resetForm) == null || I.call(_).then(() => {
          k();
        });
      });
    }
    function c() {
      return new Promise((k) => {
        var _, I;
        (I = (_ = a.value).refreshFormDom) == null || I.call(_).then(() => {
          k();
        });
      });
    }
    function y() {
      return new Promise((k) => {
        var _, I;
        (I = (_ = a.value).reRenderForm) == null || I.call(_).then(() => {
          k();
        });
      });
    }
    function u(k, _) {
      var I, C;
      (C = (I = a.value).setItemToValGroup) == null || C.call(I, k, _);
    }
    function i(k, _) {
      var I, C;
      (C = (I = a.value).updateValGroup) == null || C.call(I, k, _);
    }
    function v(k) {
      var _, I;
      (I = (_ = a.value).updateFormDataT) == null || I.call(_, k);
    }
    function g() {
      var k, _;
      (_ = (k = a.value).validate) == null || _.call(k);
    }
    function B(k) {
      var _, I;
      (I = (_ = a.value).reValidate) == null || I.call(_, k);
    }
    function b(k) {
      var _, I;
      (I = (_ = a.value).changeLoading) == null || I.call(_, k === void 0 ? !1 : k);
    }
    function V() {
      var k, _;
      return (_ = (k = a.value).getValGroup) == null ? void 0 : _.call(k);
    }
    function A(k) {
      e("on-search", k);
    }
    function M() {
      var k, _;
      (_ = (k = a.value).submit) == null || _.call(k);
    }
    return De(() => {
      const k = a.value.$el;
      k != null && k.parentNode && k.parentNode.addEventListener("keyup", (_) => {
        _.keyCode === 13 && M();
      });
    }), d({
      resetForm: f,
      refreshFormDom: c,
      reRenderForm: y,
      setItemToValGroup: u,
      updateValGroup: i,
      updateFormDataT: v,
      validate: g,
      reValidate: B,
      changeLoading: b,
      getValGroup: V,
      submit: M
    }), (k, _) => (S(), Y(yt, Ze({
      ref_key: "formRRef",
      ref: a
    }, k.$attrs, {
      "form-data": n.formData,
      "label-width": n.labelWidth,
      "item-width": n.itemWidth,
      inline: "",
      "show-long-ok-bt": !1,
      "show-inline-ok-bt": n.showInlineOkBt,
      "inline-ok-bt-txt": p(T)("r.check"),
      "show-inline-clear-bt": n.showInlineClearBt,
      "show-message": !1,
      onOnSubmit: A
    }), Qe({ _: 2 }, [
      ke(p(s), (I) => ({
        name: I.slotName,
        fn: q(({ valGroup: C }) => [
          xe(k.$slots, I.slotName, { valGroup: C })
        ])
      }))
    ]), 1040, ["form-data", "label-width", "item-width", "show-inline-ok-bt", "inline-ok-bt-txt", "show-inline-clear-bt"]));
  }
}), Yn = /* @__PURE__ */ re({
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
  setup(l, { expose: d, emit: o }) {
    const e = o, n = l, a = G(), s = G(!1), f = G(!1), c = K(() => {
      if (Array.isArray(n.formData[0])) {
        let m = [];
        for (let P of n.formData)
          m = m.concat(P.filter((h) => h.type === "custom" || h.type === "input" && h.slotName && h.slotPosition));
        return m;
      }
      return n.formData.filter(
        (m) => m.type === "custom" || m.type === "input" && m.slotName && m.slotPosition
      );
    });
    function y() {
      return new Promise((m) => {
        var P, h;
        (h = (P = a.value).resetForm) == null || h.call(P).then(() => {
          m();
        });
      });
    }
    function u() {
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
      var h, F;
      (F = (h = a.value).setItemToValGroup) == null || F.call(h, m, P);
    }
    function g(m, P) {
      var h, F;
      (F = (h = a.value).updateValGroup) == null || F.call(h, m, P);
    }
    function B(m) {
      var P, h;
      (h = (P = a.value).updateFormDataT) == null || h.call(P, m);
    }
    function b() {
      var m, P;
      (P = (m = a.value).validate) == null || P.call(m);
    }
    function V(m) {
      var P, h;
      (h = (P = a.value).reValidate) == null || h.call(P, m);
    }
    function A(m) {
      var P, h;
      m !== void 0 && (f.value = !!m, (h = (P = a.value).changeLoading) == null || h.call(P, f.value));
    }
    function M() {
      var m, P;
      return (P = (m = a.value).getValGroup) == null ? void 0 : P.call(m);
    }
    function k() {
      f.value = !0;
    }
    function _() {
      var m, P;
      n.hideCancelBt ? C() : (P = (m = a.value).submit) == null || P.call(m);
    }
    function I() {
      s.value = !0;
    }
    function C() {
      s.value = !1, Oe(() => {
        var m, P;
        f.value = !1, (P = (m = a.value).changeLoading) == null || P.call(m, !1);
      }, 1e3);
    }
    function O(m) {
      e(m ? "on-open" : "on-close");
    }
    return d({
      resetForm: y,
      refreshFormDom: u,
      reRenderForm: i,
      setItemToValGroup: v,
      updateValGroup: g,
      updateFormDataT: B,
      validate: b,
      reValidate: V,
      changeLoading: A,
      getValGroup: M,
      submit: _,
      open: I,
      close: C
    }), (m, P) => {
      const h = J("Button"), F = J("Modal");
      return S(), Y(F, {
        class: Be(["formModal", { hideFooter: n.hideFooter }]),
        title: n.title || p(T)("r.title"),
        modelValue: p(s),
        "onUpdate:modelValue": P[0] || (P[0] = ($) => Ie(s) ? s.value = $ : null),
        "mask-closable": !1,
        "footer-hide": n.hideFooter,
        width: n.width,
        onOnVisibleChange: O
      }, {
        footer: q(() => [
          W(h, {
            onClick: _,
            class: "modal-save-btn",
            loading: n.btnLoading && p(f)
          }, {
            default: q(() => [
              he(N(n.okBtTxt || p(T)("r.confirm")), 1)
            ]),
            _: 1
          }, 8, ["loading"]),
          n.hideCancelBt ? ce("", !0) : (S(), Y(h, {
            key: 0,
            onClick: C,
            class: "modal-cancel-btn"
          }, {
            default: q(() => [
              he(N(n.cancelBtTxt || p(T)("r.cancel")), 1)
            ]),
            _: 1
          }))
        ]),
        default: q(() => [
          W(yt, Ze({
            ref_key: "formRRef",
            ref: a
          }, m.$attrs, {
            "form-data": n.formData,
            "label-width": n.labelWidth,
            btnLoading: n.btnLoading,
            onOnSubmit: k
          }), Qe({ _: 2 }, [
            ke(p(c), ($) => ({
              name: $.slotName,
              fn: q(({ valGroup: X }) => [
                xe(m.$slots, $.slotName, { valGroup: X })
              ])
            }))
          ]), 1040, ["form-data", "label-width", "btnLoading"])
        ]),
        _: 3
      }, 8, ["title", "modelValue", "footer-hide", "class", "width"]);
    };
  }
}), Xn = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = G(!0), a = G([]), s = "CKT" + Math.floor(Math.random() * 1e7 + 1e7);
    let f = [];
    const c = K(() => Array.isArray(e.collectVal) ? e.collectVal : typeof e.collectVal == "string" ? [e.collectVal] : []), y = K(() => Array.isArray(e.modelValue) ? e.modelValue : []);
    be(
      () => e.data,
      (b) => {
        n.value = !1;
        let V = [];
        u(b, V), a.value = V, Pe(function() {
          n.value = !0, e.inlineLeaf && Pe(g);
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), be(
      () => y.value,
      (b) => {
        let V, A = "s";
        if (Array.isArray(e.collectVal) ? (V = e.collectVal[0] || "", A = "a") : V = e.collectVal, !V || JSON.stringify(b) === JSON.stringify(f)) {
          f = [];
          return;
        }
        qe({
          group: a.value,
          condition: (M) => M.checked === !0,
          key: "checked",
          val: !1
        }), qe(A === "a" ? {
          group: a.value,
          condition: (M) => fl(b, [V, M[V]]) !== -1,
          key: "checked",
          val: !0
        } : {
          group: a.value,
          condition: (M) => b.indexOf(M[V]) !== -1,
          key: "checked",
          val: !0
        });
      }
    ), be(
      () => e.disabled,
      (b) => {
        qe({
          group: a.value,
          condition: (V) => V.disableCheckbox !== b,
          key: "disableCheckbox",
          val: b
        }), e.inlineLeaf && Pe(g);
      },
      { immediate: !0 }
    );
    function u(b, V = []) {
      for (let A of b) {
        let M = !1;
        c.value.length > 1 ? M = Ct(y.value, (_) => _[c.value[0]] === A[c.value[0]]) !== void 0 : M = c.value[0] ? y.value.indexOf(A[c.value[0]]) !== -1 : !1;
        let k = {
          name: A[e.label],
          expand: !!(e.expandAll || A.expand),
          checked: M,
          disableCheckbox: e.disabled
        };
        for (let _ of c.value)
          k[_] = A[_];
        V.push(k), A.children && A.children.length > 0 && (k.children = [], i(A.children, k.children));
      }
    }
    function i(b, V = []) {
      for (let A of b) {
        let M = !1;
        c.value.length > 1 ? M = Ct(y.value, (_) => _[c.value[0]] === A[c.value[0]]) !== void 0 : M = c.value[0] ? y.value.indexOf(A[c.value[0]]) !== -1 : !1;
        let k = {
          name: A[e.label],
          expand: !!(e.expandAll || A.expand),
          checked: M,
          disableCheckbox: e.disabled
        };
        for (let _ of c.value)
          k[_] = A[_];
        V.push(k), A.children && A.children.length > 0 && (k.children = [], u(A.children, k.children));
      }
    }
    function v(b, {
      data: V
    }) {
      let A = "", M = !0;
      if (V.children && V.children.length > 0) {
        for (let k of V.children)
          if (k.children !== void 0) {
            M = !1;
            break;
          }
        M && e.inlineLeaf && (A = "inlineChildXA");
      }
      return b(
        "div",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: A
        },
        [
          b(
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
    function g(b) {
      if (b) {
        b.expand && Pe(g);
        return;
      }
      let V = document.querySelectorAll("#" + s + " .inlineChildXA");
      if (V.length > 0)
        for (let A of V) {
          let M = A.parentElement, k = M == null ? void 0 : M.nextElementSibling;
          if (!k)
            return;
          if (k.tagName !== "BR") {
            let _ = M == null ? void 0 : M.parentElement, I = document.createElement("br");
            _ == null || _.insertBefore(I, k), k = I.nextElementSibling, (k == null ? void 0 : k.className.indexOf("inlineTreeNodeF")) === -1 && k.setAttribute("class", k.className + " inlineTreeNodeF");
          }
          for (; k != null && k.nextElementSibling; )
            k = k.nextElementSibling, k.className.indexOf("inlineTreeNodeF") === -1 && k.setAttribute("class", k.className + " inlineTreeNodeF");
        }
    }
    function B(b) {
      let V = [];
      if (e.leaf) {
        for (let A of b)
          if (!A.children)
            if (Array.isArray(e.collectVal)) {
              let M = {};
              for (let k of e.collectVal)
                M[k] = A[k];
              V.push(M);
            } else
              V.push(A[e.collectVal]);
      } else
        for (let A of b)
          if (Array.isArray(e.collectVal)) {
            let M = {};
            for (let k of e.collectVal)
              M[k] = A[k];
            V.push(M);
          } else
            V.push(A[e.collectVal]);
      f = V, o("update:modelValue", V), o("on-change", oe(V));
    }
    return (b, V) => {
      const A = J("Tree");
      return p(n) ? (S(), Y(A, {
        key: 0,
        id: s,
        class: "checkboxTreeGA",
        data: p(a),
        render: v,
        onOnCheckChange: B,
        onOnToggleExpand: g,
        "show-checkbox": ""
      }, null, 8, ["data"])) : ce("", !0);
    };
  }
}), Qn = { class: "transferBoxRL" }, Zn = { class: "leftBoxLLL" }, eo = { class: "fullHeight flexColumnBox" }, to = { class: "notGrow" }, lo = { class: "titleLLL" }, ao = { class: "growFlexItem" }, no = { class: "middleBoxLLL" }, oo = { class: "rightBoxLLL" }, io = { class: "fullHeight flexColumnBox" }, so = { class: "notGrow" }, ro = { class: "titleLLL" }, uo = { class: "growFlexItem" }, co = /* @__PURE__ */ re({
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
    addParamsHandle: { type: Function, default: (l) => l.map((d) => d.id) },
    deleteParamsHandle: { type: Function, default: (l) => l.map((d) => d.id) },
    addAllParamsHandle: { type: Function, default: (l) => l },
    deleteAllParamsHandle: { type: Function, default: (l) => l },
    addMethod: { default: "post" },
    addAllMethod: { default: "post" },
    deleteMethod: { default: "delete" },
    deleteAllMethod: { default: "delete" },
    searchFormLabelWith: {}
  },
  emits: ["transferred", "on-data-change-l", "on-data-change-r"],
  setup(l, { expose: d, emit: o }) {
    const e = o, n = l;
    let a = G({}), s = G({}), f = G([]), c = G([]), y = G(0), u = G(0);
    const i = K(() => ({ ...n.constSearchDataLeft, ...a.value })), v = K(() => ({ ...n.constSearchDataRight, ...s.value })), g = K(() => y.value < 1), B = K(() => f.value.length < 1), b = K(() => c.value.length < 1), V = K(() => u.value < 1), A = G(), M = G(), k = G(), _ = G();
    function I() {
      A.value.resetForm(), M.value.resetForm(), Se(a.value) || (a.value = {}), Se(s.value) || (s.value = {}), k.value.clearSelect(), _.value.clearSelect();
    }
    function C() {
      k.value.search(), _.value.search();
    }
    function O(j) {
      f.value = j;
    }
    function m(j) {
      c.value = j;
    }
    function P(j) {
      var pe, ie, R, le, ue;
      y.value = ((ie = (pe = j == null ? void 0 : j.data) == null ? void 0 : pe.page) == null ? void 0 : ie.total) || ((le = (R = j == null ? void 0 : j.data) == null ? void 0 : R.data) == null ? void 0 : le.total) || ((ue = j == null ? void 0 : j.data) == null ? void 0 : ue.total) || (j == null ? void 0 : j.total) || 0, e("on-data-change-l", j);
    }
    function h(j) {
      var pe, ie, R, le, ue;
      u.value = ((ie = (pe = j == null ? void 0 : j.data) == null ? void 0 : pe.page) == null ? void 0 : ie.total) || ((le = (R = j == null ? void 0 : j.data) == null ? void 0 : R.data) == null ? void 0 : le.total) || ((ue = j == null ? void 0 : j.data) == null ? void 0 : ue.total) || (j == null ? void 0 : j.total) || 0, e("on-data-change-r", j);
    }
    function F(j) {
      a.value = j;
    }
    function $(j) {
      s.value = j;
    }
    function X() {
      n.addUrl && Ce("add");
    }
    function te() {
      n.deleteUrl && Ce("delete");
    }
    function fe() {
      n.addAllUrl && n.addUrl && Ce("addAll");
    }
    function Ae() {
      n.deleteAllUrl && Ce("deleteAll");
    }
    function Ce(j) {
      let pe, ie, R = {}, le = "";
      switch (j) {
        case "add":
          pe = n.addMethod, ie = n.addUrl, R = n.addParamsHandle(c.value), le = T("r.add");
          break;
        case "delete":
          pe = n.deleteMethod, ie = n.deleteUrl, R = n.deleteParamsHandle(f.value), le = T("r.remove");
          break;
        case "addAll":
          pe = n.addAllMethod, ie = n.addAllUrl, R = n.addAllParamsHandle(v.value), le = T("r.addAll");
          break;
        case "deleteAll":
          pe = n.deleteAllMethod, ie = n.deleteAllUrl, R = n.deleteAllParamsHandle(i.value), le = T("r.removeAll");
          break;
      }
      ie && pe && Re[pe](ie, R, null, [], { spin: !0 }, !1).then((ue) => {
        (ue == null ? void 0 : ue.code) === 0 ? (Me(le + T("r.success"), (ue == null ? void 0 : ue.message) || "", "success"), k.value && k.value.getTableData(), _.value && _.value.getTableData(), e("transferred")) : Me(le + T("r.failed"), (ue == null ? void 0 : ue.message) || "", "error");
      }).catch(() => {
        Me(le + T("r.error"), "", "error");
      });
    }
    return d({
      reset: I,
      search: C
    }), (j, pe) => {
      const ie = J("Icon"), R = J("Button");
      return S(), U("div", Qn, [
        L("div", Zn, [
          L("div", eo, [
            L("div", to, [
              L("div", lo, N(n.titleLeft || p(T)("r.added")), 1),
              W(Lt, null, {
                default: q(() => [
                  W(Ut, {
                    ref_key: "leftFormRef",
                    ref: A,
                    "form-data": n.formDataLeft,
                    "form-rules": n.formRulesLeft,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: F
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            L("div", ao, [
              W(Pt, {
                ref_key: "lTabRef",
                ref: k,
                columns: n.leftTableColumns,
                url: n.leftTableUrl,
                "search-data": p(i),
                onOnSelectionChange: O,
                onOnDataChange: P,
                "init-data": !!(p(Se)(n.constSearchDataLeft) && n.leftTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ]),
        L("div", no, [
          W(R, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: Ae,
            disabled: p(g)
          }, {
            default: q(() => [
              he(N(p(T)("r.removeAll")) + " ", 1),
              W(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          W(R, {
            class: "middleBtLLL",
            size: "large",
            type: "default",
            onClick: te,
            disabled: p(B)
          }, {
            default: q(() => [
              he(N(p(T)("r.remove")) + " ", 1),
              W(ie, { type: "ios-arrow-forward" })
            ]),
            _: 1
          }, 8, ["disabled"]),
          W(R, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: X,
            disabled: p(b)
          }, {
            default: q(() => [
              W(ie, { type: "ios-arrow-back" }),
              he(" " + N(p(T)("r.add")), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          W(R, {
            class: "middleBtLLL",
            size: "large",
            type: "primary",
            onClick: fe,
            disabled: p(V)
          }, {
            default: q(() => [
              W(ie, { type: "ios-arrow-back" }),
              he(" " + N(p(T)("r.addAll")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        L("div", oo, [
          L("div", io, [
            L("div", so, [
              L("div", ro, N(n.titleRight || p(T)("r.notAdded")), 1),
              W(Lt, null, {
                default: q(() => [
                  W(Ut, {
                    ref_key: "rightFormRef",
                    ref: M,
                    "form-data": n.formDataRight,
                    "form-rules": n.formRulesRight,
                    "label-width": n.searchFormLabelWith,
                    onOnSearch: $
                  }, null, 8, ["form-data", "form-rules", "label-width"])
                ]),
                _: 1
              })
            ]),
            L("div", uo, [
              W(Pt, {
                ref_key: "rTabRef",
                ref: _,
                columns: n.rightTableColumns,
                url: n.rightTableUrl,
                "search-data": p(v),
                onOnSelectionChange: m,
                onOnDataChange: h,
                "init-data": !!(p(Se)(n.constSearchDataRight) && n.rightTableUrl),
                "get-data-loading": "",
                selection: ""
              }, null, 8, ["columns", "url", "search-data", "init-data"])
            ])
          ])
        ])
      ]);
    };
  }
}), fo = { class: "boxLPA" }, po = { class: "headerJ" }, mo = { class: "firstT borderBoxAS" }, ho = { class: "secondT borderBoxAS" }, yo = { class: "firstCol borderBoxAS" }, vo = { class: "secondCol borderBoxAS" }, go = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = l, e = d, n = G([]), a = K(() => {
      let y = oe(o.data), u = oe(n.value);
      for (let i of y) {
        let v = 0;
        if (i.children && !Se(i.children))
          for (let g of i.children) {
            for (let B = 0, b = u.length; B < b; B++)
              if (Array.isArray(o.collectVal)) {
                let V = !0;
                for (let A of o.collectVal)
                  if (u[B][A] !== g[A]) {
                    V = !1;
                    break;
                  }
                if (V) {
                  g.checked = !0, v++, u.splice(B, 1);
                  break;
                }
              } else if (u[B] === g[o.collectVal]) {
                g.checked = !0, v++, u.splice(B, 1);
                break;
              }
            !g.checked && (g.checked = !1);
          }
        v === 0 ? (i.checked = !1, i.indeterminate = !1) : i.children && v === i.children.length ? (i.checked = !0, i.indeterminate = !1) : (i.checked = !1, i.indeterminate = !0);
      }
      return y;
    });
    be(
      () => o.modelValue,
      (y, u) => {
        nt(n.value, y) || nt(y, u) || (n.value = y);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(y, u) {
      if (y.children)
        for (let i of y.children)
          i.checked = u;
      f();
    }
    function f() {
      c(a.value, !0);
    }
    function c(y, u) {
      let i = [];
      for (let v of y) {
        if (!u && !o.leaf && v.checked && v.indeterminate === !1)
          if (Array.isArray(o.collectVal)) {
            let g = {};
            for (let B of o.collectVal)
              g[B] = v[B];
            i.push(g);
          } else
            z(o.collectVal) === "String" && i.push(v[o.collectVal]);
        if (v.children) {
          for (let g of v.children)
            if (g.checked)
              if (Array.isArray(o.collectVal)) {
                let B = {};
                for (let b of o.collectVal)
                  B[b] = g[b];
                i.push(B);
              } else
                z(o.collectVal) === "String" && i.push(g[o.collectVal]);
        }
      }
      u ? (n.value = i, o.leaf ? (e("update:modelValue", i), e("on-change", oe(i))) : Pe(function() {
        c(a.value);
      })) : (e("update:modelValue", i), e("on-change", oe(i)));
    }
    return (y, u) => {
      const i = J("Checkbox");
      return S(), U("div", fo, [
        L("div", po, [
          L("div", mo, N(y.firstTitle || p(T)("r.level.1")), 1),
          L("div", ho, N(y.secondTitle || p(T)("r.level.2")), 1)
        ]),
        (S(!0), U(ve, null, ke(p(a), (v, g) => (S(), U("div", {
          class: "bodyJ",
          key: "checkboxJ" + g
        }, [
          L("div", yo, [
            W(i, {
              modelValue: v.checked,
              "onUpdate:modelValue": (B) => v.checked = B,
              indeterminate: v.indeterminate,
              onOnChange: (B) => s(v, B),
              disabled: y.disabled
            }, {
              default: q(() => [
                he(N(v[y.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          L("div", vo, [
            (S(!0), U(ve, null, ke(v.children, (B, b) => (S(), U("div", {
              class: "secItem",
              key: "secItem" + b
            }, [
              W(i, {
                modelValue: B.checked,
                "onUpdate:modelValue": (V) => B.checked = V,
                onOnChange: f,
                disabled: y.disabled
              }, {
                default: q(() => [
                  he(N(B[y.label]), 1)
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]))), 128))
          ])
        ]))), 128))
      ]);
    };
  }
}), bo = { class: "boxLPB" }, ko = { class: "headerF" }, wo = { class: "firstT borderBoxKa" }, _o = { class: "secondT borderBoxKa" }, Vo = { class: "thirdT borderBoxKa" }, Co = { class: "firstCol borderBoxKa" }, Ao = { class: "rightBoxAL" }, Bo = { class: "secondCol borderBoxKa" }, So = { class: "thirdCol borderBoxKa" }, To = /* @__PURE__ */ re({
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
  setup(l, { emit: d }) {
    const o = d, e = l, n = G([]), a = K(() => {
      let u = oe(e.data), i = oe(n.value);
      for (let v of u) {
        let g = 0, B = 0;
        if (v.children && !Se(v.children))
          for (let b of v.children) {
            let V = 0;
            if (b.children && !Se(b.children))
              for (let A of b.children) {
                for (let M = 0, k = i.length; M < k; M++)
                  if (Array.isArray(e.collectVal)) {
                    let _ = !0;
                    for (let I of e.collectVal)
                      if (i[M][I] !== A[I]) {
                        _ = !1;
                        break;
                      }
                    if (_) {
                      A.checked = !0, V++, i.splice(M, 1);
                      break;
                    }
                  } else if (i[M] === A[e.collectVal]) {
                    A.checked = !0, V++, i.splice(M, 1);
                    break;
                  }
                !A.checked && (A.checked = !1);
              }
            V === 0 ? (b.checked = !1, b.indeterminate = !1) : b.children && V === b.children.length ? (b.checked = !0, b.indeterminate = !1, g++) : (b.checked = !1, b.indeterminate = !0, B++);
          }
        g === 0 && B === 0 ? (v.checked = !1, v.indeterminate = !1) : v.children && g === v.children.length ? (v.checked = !0, v.indeterminate = !1) : (v.checked = !1, v.indeterminate = !0);
      }
      return u;
    });
    be(
      () => e.modelValue,
      (u, i) => {
        nt(n.value, u) || nt(u, i) || (n.value = u);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function s(u, i) {
      if (u.children) {
        for (let v of u.children)
          if (v.checked = i, v.children)
            for (let g of v.children)
              g.checked = i;
      }
      c();
    }
    function f(u, i) {
      if (u.children)
        for (let v of u.children)
          v.checked = i;
      c();
    }
    function c() {
      y(a.value, !0);
    }
    function y(u, i) {
      let v = [];
      for (let g of u) {
        if (!i && !e.leaf && g.checked && g.indeterminate === !1)
          if (Array.isArray(e.collectVal)) {
            let B = {};
            for (let b of e.collectVal)
              B[b] = g[b];
            v.push(B);
          } else
            z(e.collectVal) === "String" && v.push(g[e.collectVal]);
        if (g.children)
          for (let B of g.children) {
            if (!i && !e.leaf && B.checked && B.indeterminate === !1)
              if (Array.isArray(e.collectVal)) {
                let b = {};
                for (let V of e.collectVal)
                  b[V] = B[V];
                v.push(b);
              } else
                z(e.collectVal) === "String" && v.push(B[e.collectVal]);
            if (B.children) {
              for (let b of B.children)
                if (b.checked)
                  if (Array.isArray(e.collectVal)) {
                    let V = {};
                    for (let A of e.collectVal)
                      V[A] = b[A];
                    v.push(V);
                  } else
                    z(e.collectVal) === "String" && v.push(b[e.collectVal]);
            }
          }
      }
      i ? (n.value = v, e.leaf ? (o("update:modelValue", v), o("on-change", oe(v))) : Pe(function() {
        y(a.value);
      })) : (o("update:modelValue", v), o("on-change", oe(v)));
    }
    return (u, i) => {
      const v = J("Checkbox");
      return S(), U("div", bo, [
        L("div", ko, [
          L("div", wo, N(u.firstTitle || p(T)("r.level.1")), 1),
          L("div", _o, N(u.secondTitle || p(T)("r.level.2")), 1),
          L("div", Vo, N(u.thirdTitle || p(T)("r.level.3")), 1)
        ]),
        (S(!0), U(ve, null, ke(p(a), (g, B) => (S(), U("div", {
          class: "bodyF",
          key: "checkboxJ" + B
        }, [
          L("div", Co, [
            W(v, {
              modelValue: g.checked,
              "onUpdate:modelValue": (b) => g.checked = b,
              indeterminate: g.indeterminate,
              onOnChange: (b) => s(g, b),
              disabled: u.disabled
            }, {
              default: q(() => [
                he(N(g[u.label]), 1)
              ]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
          ]),
          L("div", Ao, [
            (S(!0), U(ve, null, ke(g.children, (b, V) => (S(), U("div", {
              class: "rightBoxInner",
              key: "secItem" + V
            }, [
              L("div", Bo, [
                W(v, {
                  modelValue: b.checked,
                  "onUpdate:modelValue": (A) => b.checked = A,
                  indeterminate: b.indeterminate,
                  onOnChange: (A) => f(b, A),
                  disabled: u.disabled
                }, {
                  default: q(() => [
                    he(N(b[u.label]), 1)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "indeterminate", "onOnChange", "disabled"])
              ]),
              L("div", So, [
                (S(!0), U(ve, null, ke(b.children, (A, M) => (S(), U("div", {
                  class: "thirdItem",
                  key: "thirdItem" + M
                }, [
                  W(v, {
                    modelValue: A.checked,
                    "onUpdate:modelValue": (k) => A.checked = k,
                    onOnChange: c,
                    disabled: u.disabled
                  }, {
                    default: q(() => [
                      he(N(A[u.label]), 1)
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
}), xo = { class: "flexColumnBox wellCardR" }, Lo = { class: "panelHeader notGrow" }, Io = {
  class: "fl",
  style: { "font-weight": "bold" }
}, Oo = { class: "btsF" }, Mo = { class: "growFlexItem relativeBox" }, Po = { class: "fullFlowContent" }, Fo = /* @__PURE__ */ re({
  __name: "WellCard",
  props: {
    title: {},
    width: { default: "100%" },
    height: { default: "100%" },
    inline: { type: Boolean, default: !1 }
  },
  setup(l) {
    const d = l, o = K(() => {
      let e = {
        width: d.width,
        height: d.height
      };
      d.inline && (e.display = "inline-block");
      for (let n in e)
        e.hasOwnProperty(n) && typeof e[n] == "number" && e[n] > 0 && (e[n] += "px");
      return e;
    });
    return (e, n) => (S(), U("div", {
      style: ee(p(o))
    }, [
      L("div", xo, [
        L("div", Lo, [
          L("div", Io, N(d.title || p(T)("r.title")), 1),
          L("div", Oo, [
            xe(e.$slots, "bts")
          ])
        ]),
        L("div", Mo, [
          L("div", Po, [
            xe(e.$slots, "default")
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
  setup(l, { emit: d }) {
    const o = d, e = l;
    let n = G(1), a = 1;
    const s = G(""), f = ut([]);
    let c = {}, y = !0, u = !1;
    const i = "scm" + Math.random(), v = K(() => s.value ? T("r.searchFor") + s.value : e.placeholder || T("r.pInput")), g = K({
      get() {
        return e.modelValue ?? "";
      },
      set(C) {
        if (o("update:modelValue", C ?? ""), e.collectLabel && C !== void 0) {
          let O = {};
          for (let m of f.value)
            if (m[e.optionsValKey] === C) {
              O = JSON.parse(JSON.stringify(m));
              break;
            }
          o("on-change", O);
        }
      }
    }), B = K(() => e.searchKey ? {
      ...e.searchData,
      current: n.value,
      [e.searchKey]: s.value
    } : {
      ...e.searchData,
      current: n.value
    });
    be(
      () => e.getOptions,
      (C) => {
        C ? y && I() : A();
      },
      { immediate: !0 }
    ), be(
      () => e.url,
      (C) => {
        C && (u = !0);
      }
    );
    const b = G();
    function V() {
      b.value.$el.querySelector('.ivu-select-input[type="text"]').addEventListener("keyup", k);
    }
    function A() {
      y || (g.value = "", y = !0, s.value = "", f.value = [], n.value = 1, a = 1, c = {}, u = !1);
    }
    function M(C) {
      for (let O of f.value)
        if (O.label === C)
          return !0;
      return !1;
    }
    const k = cl(function(C) {
      const O = C.target.value;
      M(O) || (_e(O) ? (u ? A() : (Se(c) && (c.current = n.value, c.pages = a, c.options = oe(f.value)), _e(g.value) && (g.value = "")), s.value = String(O), f.value = [], n.value = 1, y = !0, I()) : u ? (A(), I()) : (g.value = "", s.value = "", c.current ? (n.value = c.current, a = c.pages, f.value = oe(c.options), c = {}) : I()));
    }, 600);
    function _() {
      u && A(), n.value < a ? (++n.value, Pe(function() {
        I();
      })) : Qt.warning({
        background: !0,
        content: T("r.noMore")
      });
    }
    function I() {
      return new Promise((C, O) => {
        if (e.getOptions) {
          if (e.searchWordsRequired && !_e(s.value)) {
            C(!1);
            return;
          }
          Re.get(e.url, B.value).then((m) => {
            var F;
            y = !1;
            let P = [];
            (F = m == null ? void 0 : m.data) != null && F.records ? (P = m.data.records, a = m.data.pages) : m != null && m.data && z(m.data) === "Array" ? (P = m.data, a = m.pages) : m != null && m.data && z(m.data) === "Object" && (P = [m.data], a = 1), typeof e.optionFilter == "function" && z(e.optionFilter) === "Function" && (P = e.optionFilter(P)), Se(P) || (P = P.map(($, X) => {
              let te = T("r.optionLabel") + X;
              if (Array.isArray(e.optionsLabelKey)) {
                let fe = [];
                for (let Ae = 1, Ce = e.optionsLabelKey.length; Ae < Ce; Ae++)
                  fe.push($[e.optionsLabelKey[Ae]]);
                te = `${$[e.optionsLabelKey[0]]}(${String(fe)})`;
              } else
                Kt(e.optionsLabelKey) && (te = $[e.optionsLabelKey]);
              if (e.collectLabel) {
                let fe = oe($);
                return delete fe.value, delete fe.label, {
                  value: $[e.optionsValKey],
                  label: te,
                  ...fe
                };
              }
              return {
                value: $[e.optionsValKey],
                label: te
              };
            })), f.value.push(...P);
            let h = {};
            f.value = f.value.filter(($) => h[$.value] ? !1 : (h[$.value] = !0, !0)), Pe(function() {
              o("update-option-finish");
            }), C(!0);
          }).catch(() => {
            Qt.error(T("r.getDataError")), O(T("r.getDataError"));
          });
        } else
          C(!1);
      });
    }
    return De(V), (C, O) => {
      const m = J("Option"), P = J("Select"), h = $t("loadmore");
      return de((S(), Y(P, Ze({
        modelValue: p(g),
        "onUpdate:modelValue": O[0] || (O[0] = (F) => Ie(g) ? g.value = F : null),
        ref_key: "selectScrollSourceRef",
        ref: b,
        "transfer-class-name": i
      }, C.$attrs, {
        transfer: "",
        filterable: "",
        placeholder: p(v),
        disabled: C.disabled
      }), {
        default: q(() => [
          (S(!0), U(ve, null, ke(p(f), (F, $) => (S(), Y(m, {
            key: "op" + $,
            value: F.value,
            label: F.label,
            disabled: F.disabled
          }, null, 8, ["value", "label", "disabled"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue", "placeholder", "disabled"])), [
        [h, _, i]
      ]);
    };
  }
}), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AlCascaderMC: Il,
  AsyncCascader: Ll,
  BtTablePage: Pt,
  CheckboxGroupThreeClass: To,
  CheckboxGroupTwoClass: go,
  CheckboxTree: Xn,
  EditorPro: Pl,
  FormGroup: qn,
  FormModal: Yn,
  FormR: yt,
  FullPop: ka,
  HeaderBt: hl,
  Hello: _a,
  IconTxtBtn: Bt,
  InputMap: xl,
  MonthRange: Ml,
  Page404: Sa,
  PagePro: Bl,
  SearchForm: Ut,
  SelectInput: Sl,
  SelectScrollMore: Uo,
  ShowHidePanel: Lt,
  ShowHidePanelB: Za,
  SideMenu: Ja,
  TableIconBtn: Vl,
  TableSearch: ln,
  TableSetting: Cl,
  TransferBox: co,
  UploadGroup: Ol,
  WellCard: Fo
}, Symbol.toStringTag, { value: "Module" })), $o = { class: "a4Line aL notPrint" }, Ko = { class: "a4Line aR notPrint" }, Ro = { class: "a4Line bL notPrint" }, Do = { class: "a4Line bR notPrint" }, No = { class: "topsL notPrint" }, Eo = { class: "topsLTitle" }, zo = { class: "topsLBtn" }, Go = { class: "topsLHelp" }, Ho = { key: 0 }, Wo = /* @__PURE__ */ L("span", null, "1. ", -1), jo = { key: 1 }, Jo = /* @__PURE__ */ L("span", null, "2. ", -1), qo = { key: 2 }, Yo = /* @__PURE__ */ L("span", null, "1. ", -1), Xo = ["innerHTML"], Qo = /* @__PURE__ */ re({
  __name: "PrintModal",
  setup(l) {
    const d = pl(), o = G(), e = G(!1), n = G(!1), a = G(!1), s = G(715), f = G(!1), c = G(), y = "tablePrint_" + Date.now().toString(), u = G(""), i = G([]), v = G([]), g = G(!1), B = K(() => ({
      width: s.value + "px"
    })), b = () => {
      c.value && window.sessionStorage.removeItem("print_" + c.value), window.sessionStorage.removeItem(y), window.close();
    }, V = () => {
      f.value && (f.value = !1);
    }, A = () => {
      g.value = !0;
    }, M = (C) => {
      g.value && (s.value = (C == null ? void 0 : C.layerX) - 20);
    }, k = () => {
      g.value && (g.value = !1);
    }, _ = () => {
      f.value = !1;
      let C = window.setTimeout(() => {
        window.clearTimeout(C), window.print();
      }, 100);
    }, I = () => {
      var C, O, m, P, h;
      if (c.value = (C = d == null ? void 0 : d.params) == null ? void 0 : C.isFrom, c.value) {
        let F = window.sessionStorage.getItem("print_" + c.value);
        if (F) {
          const $ = JSON.parse(F);
          if (!$) {
            e.value = !0;
            return;
          }
          i.value = $.columns, v.value = $.data, o.value = $.title, u.value = ((O = $ == null ? void 0 : $.config) == null ? void 0 : O.customClass) || "", n.value = ((m = $ == null ? void 0 : $.config) == null ? void 0 : m.domPrint) || !1, a.value = ((P = $ == null ? void 0 : $.config) == null ? void 0 : P.autoPrint) || !1, s.value = ((h = $ == null ? void 0 : $.config) == null ? void 0 : h.width) || 715, document.title = (o.value || T("r.print")) + "_" + (/* @__PURE__ */ new Date()).toLocaleString();
        } else
          e.value = !0;
      }
    };
    return De(() => {
      if (a.value) {
        let C = window.setTimeout(() => {
          window.clearTimeout(C), _();
        }, 100);
      }
      document.addEventListener("click", V), document.addEventListener("mousemove", M), document.addEventListener("mouseup", k);
    }), I(), (C, O) => {
      const m = J("Table");
      return S(), U("div", {
        class: Be(["tablePrintModal", [p(u)]])
      }, [
        de(L("div", { class: "msgL notPrint" }, N(p(T)("r.printGuide.9")), 513), [
          [me, p(e)]
        ]),
        de(L("div", $o, [
          L("p", null, N(p(T)("r.printGuide.7")), 1),
          he(),
          L("p", null, N(p(T)("r.printGuide.5")), 1)
        ], 512), [
          [me, !p(e)]
        ]),
        de(L("div", Ko, [
          L("p", null, N(p(T)("r.printGuide.7")), 1),
          he(),
          L("p", null, N(p(T)("r.printGuide.6")), 1)
        ], 512), [
          [me, !p(e)]
        ]),
        de(L("div", Ro, [
          L("p", null, N(p(T)("r.printGuide.8")), 1),
          he(),
          L("p", null, N(p(T)("r.printGuide.5")), 1)
        ], 512), [
          [me, !p(e)]
        ]),
        de(L("div", Do, [
          L("p", null, N(p(T)("r.printGuide.8")), 1),
          he(),
          L("p", null, N(p(T)("r.printGuide.6")), 1)
        ], 512), [
          [me, !p(e)]
        ]),
        de(L("div", No, [
          L("div", Eo, N(p(o) || p(T)("r.print")), 1),
          L("div", zo, [
            W(Bt, {
              icon: "md-help-circle",
              name: p(T)("r.help"),
              onClick: O[0] || (O[0] = _t((P) => f.value = !p(f), ["stop"]))
            }, null, 8, ["name"]),
            W(Bt, {
              icon: "md-print",
              name: p(T)("r.preview"),
              onClick: _
            }, null, 8, ["name"]),
            p(n) ? ce("", !0) : (S(), Y(Cl, {
              key: 0,
              modelValue: p(i),
              "onUpdate:modelValue": O[1] || (O[1] = (P) => Ie(i) ? i.value = P : null),
              "s-key": y,
              storage: "sessionStorage"
            }, null, 8, ["modelValue"])),
            W(Vl, {
              icon: "md-close",
              onClick: b,
              title: p(T)("r.close")
            }, null, 8, ["title"])
          ]),
          de(L("div", Go, [
            p(n) ? ce("", !0) : (S(), U("p", Ho, [
              Wo,
              L("span", null, N(p(T)("r.printGuide.1")), 1)
            ])),
            p(n) ? ce("", !0) : (S(), U("p", jo, [
              Jo,
              L("span", null, N(p(T)("r.printGuide.2")), 1)
            ])),
            p(n) ? (S(), U("p", qo, [
              Yo,
              L("span", null, N(p(T)("r.printGuide.10")), 1)
            ])) : ce("", !0),
            L("p", null, [
              L("span", null, N(p(n) ? "2. " : "3. "), 1),
              L("span", null, N(p(T)("r.printGuide.3")), 1)
            ]),
            L("p", null, [
              L("span", null, N(p(n) ? "3. " : "4. "), 1),
              L("span", null, N(p(T)("r.printGuide.4")), 1)
            ])
          ], 512), [
            [me, p(f)]
          ])
        ], 512), [
          [me, !p(e)]
        ]),
        p(n) ? (S(), U("div", {
          key: 0,
          class: "domPrintSetting notPrint",
          style: ee(p(B))
        }, [
          L("div", {
            class: "settingLine",
            onMousedown: _t(A, ["stop"])
          }, null, 32)
        ], 4)) : ce("", !0),
        p(n) ? (S(), U("div", {
          key: 1,
          class: "domPrintContent",
          innerHTML: p(v),
          style: ee(p(B))
        }, null, 12, Xo)) : ce("", !0),
        p(n) ? ce("", !0) : de((S(), Y(m, {
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
function sl() {
  document.documentElement.style.setProperty("overflow", "auto");
  const d = document.createElement("style");
  d.innerHTML = "body,div[data-v-app]{height:100% !important}", document.head.appendChild(d);
}
function Zo(l) {
  l != null && l.addRoute && (l.hasRoute("tablePrint") || l.addRoute({
    name: "tablePrint",
    path: "/tablePrint/:isFrom",
    component: Qo
  })), Ge = l, location.pathname.indexOf("tablePrint") > -1 ? (Ge.push(location.pathname), sl()) : location.hash.indexOf("tablePrint") > -1 && (Ge.push(location.hash.replace(/^#/, "")), sl());
}
function ei(l, d, o, e) {
  var y, u;
  if (!Ge)
    return;
  let n;
  if (!(e != null && e.domPrint)) {
    let i = oe(
      l.filter((v) => v.key)
    );
    i[0].type === "selection" && i.shift(), i.length ? n = i.map((v) => (v.width = v.minWidth || 100, v.sortable = !1, delete v.minWidth, delete v.__id, v.resizable = !0, v)) : n = [];
  }
  let a = (u = (y = Ge == null ? void 0 : Ge.currentRoute) == null ? void 0 : y.value) == null ? void 0 : u.fullPath;
  a && (a = a.replace(/\//g, "_"));
  let s = {
    data: d,
    title: o,
    config: e
  };
  e != null && e.domPrint || (s.columns = n), window.sessionStorage.setItem("print_" + a, JSON.stringify(s));
  const f = Ge.resolve({
    name: "tablePrint",
    params: { isFrom: a }
  });
  window.open(f == null ? void 0 : f.href, "_blank") || console.log("请不要禁用浏览器弹出窗口，否则无法正常使用该打印功能。");
}
const Rt = {
  print: ei,
  init: Zo
};
function ti(l = "", d = "", o = {}) {
  o.domPrint = !0, o.width || (o.width = 715), Rt.print([], l, d, o);
}
function li(l) {
  const d = (...a) => Ne.apply(this, a), o = d("r.closePreview"), e = d("r.fullImg");
  let n = "previewImg" + Math.floor(Math.random() * 1e7);
  ze.info({
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
                ze.remove();
              }
            })
          ]
        )
      ]
    )
  }), Oe(() => {
    var f, c, y, u, i, v;
    const a = (u = (y = (c = (f = document.getElementById(n)) == null ? void 0 : f.parentElement) == null ? void 0 : c.parentElement) == null ? void 0 : y.parentElement) == null ? void 0 : u.parentElement, s = (v = (i = document.getElementById(n)) == null ? void 0 : i.parentElement) == null ? void 0 : v.nextSibling;
    a && (a.style.height = "0"), a && (a.style.padding = "0"), s && (s.style.display = "none");
  }, 10);
}
function ai(l, d, o, e) {
  const n = (...a) => Ne.apply(this, a);
  Me.call(this, {
    title: l || n("r.info.title"),
    text: d || n("r.info.text"),
    icon: o || "warning",
    onOk: e,
    buttons: [n("r.cancel")]
  });
}
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $fetch: Re,
  $swal: Me,
  $swalConfirm: ai,
  domPrint: ti,
  fullScreenImgByDom: Je,
  fullScreenImgPreview: li,
  messageBox: Mt,
  setInterval: tn,
  setTimeout: Oe,
  tablePrint: Rt
}, Symbol.toStringTag, { value: "Module" }));
(() => {
  if (window.wangeditorMenuInit)
    return;
  class l {
    constructor() {
      tt(this, "title");
      tt(this, "iconSvg");
      tt(this, "tag");
      tt(this, "alwaysEnable");
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
      const n = document.getElementById("editor-preview");
      let a = localStorage.getItem("editorPreviewW") || 300, s = localStorage.getItem("editorPreviewH") || 500;
      const f = e.getHtml();
      if (n) {
        let c = n.children[0].children[1].children[0], y = n.children[0].children[1];
        c.innerHTML = f, c.style.width = a + "px", y.style.height = s + "px", n.style.display = "block";
      } else {
        const c = document.body, y = document.createElement("div");
        y.setAttribute("id", "editor-preview"), y.setAttribute("class", "editor-preview-mask"), y.innerHTML = `<div class='editor-preview-body'><div class='editor-preview-head'><div><span>宽</span><input type='number' value='${a}' min='200'><span>高</span><input type='number' value='${s}' min='300'></div><i class='ivu-icon ivu-icon-md-close'></i></div><div class='editor-preview-out-wall'><div class='editor-preview-wall r-editor-view'></div></div></div>`;
        let u = y.children[0].children[1], i = y.children[0].children[1].children[0], v = y.children[0].children[0].children[0].children[1];
        const g = 40, B = 70, b = (k) => {
          if (k && k.type === "keyup") {
            let C = !1;
            if (k.key && (C = k.key !== "Enter"), C)
              return;
          }
          let _ = k.target.value;
          if (_ = Number(_), i.style && i.style.width === _ + "px")
            return;
          const I = c.clientWidth;
          _ < 250 ? (_ = 250, k.target.value = 250) : _ > I - g && (_ = I - g, k.target.value = I - g), i.style.width = _ + "px", localStorage.setItem("editorPreviewW", _);
        };
        v.addEventListener("blur", b), v.addEventListener("keyup", b);
        let V = y.children[0].children[0].children[0].children[3];
        const A = (k) => {
          if (k && k.type === "keyup") {
            let C = !1;
            if (k.key && (C = k.key !== "Enter"), C)
              return;
          }
          let _ = k.target.value;
          if (_ = Number(_), u.style && u.style.height === _ + "px")
            return;
          const I = c.clientHeight;
          _ < 300 ? (_ = 300, k.target.value = 300) : _ > I - B && (_ = I - B, k.target.value = I - B), u.style.height = _ + "px", localStorage.setItem("editorPreviewH", _);
        };
        V.addEventListener("blur", A), V.addEventListener("keyup", A), y.children[0].children[0].children[1].addEventListener("click", () => {
          y.style.display = "none";
        }), i.innerHTML = f, i.style.width = a + "px", u.style.height = s + "px", c.append(y);
      }
    }
  }
  const d = {
    key: "previewX",
    factory() {
      return new l();
    }
  };
  ua.registerMenu(d), window.wangeditorMenuInit = !0;
})();
const Vi = ft.use, Ci = ft.i18n, rl = {
  ...ni,
  ...za
}, oi = function(l, d = {}) {
  Re.init(d.useStore || d.store, l), l.use(da), d.locale && ft.use(d.locale), d.i18n && ft.i18n(d.i18n), d.router && (en(d.router), Rt.init(d.router)), d.amap && kn(d.amap), d.notRegistryGlobal || (Object.keys(il).forEach((o) => {
    l.component(o) || l.component(o, il[o]);
  }), Object.keys(rl).forEach((o) => {
    l.config.globalProperties[o] = rl[o];
  })), l.directive("has") || l.directive("has", (o, e) => {
    e.value && !kl(e.value) && (o.style.display = "none");
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
  Re as $fetch,
  Me as $swal,
  ai as $swalConfirm,
  Il as AlCascaderMC,
  Ll as AsyncCascader,
  Pt as BtTablePage,
  To as CheckboxGroupThreeClass,
  go as CheckboxGroupTwoClass,
  Xn as CheckboxTree,
  Pl as EditorPro,
  qn as FormGroup,
  Yn as FormModal,
  yt as FormR,
  ka as FullPop,
  hl as HeaderBt,
  _a as Hello,
  Bt as IconTxtBtn,
  xl as InputMap,
  Ml as MonthRange,
  Sa as Page404,
  Bl as PagePro,
  Ut as SearchForm,
  Sl as SelectInput,
  Uo as SelectScrollMore,
  Lt as ShowHidePanel,
  Za as ShowHidePanelB,
  Ja as SideMenu,
  Vl as TableIconBtn,
  ln as TableSearch,
  Cl as TableSetting,
  co as TransferBox,
  Ol as UploadGroup,
  Fo as WellCard,
  Tt as clearObj,
  Na as dataFilterOrToUrl,
  Fa as decimalDigitsLimit,
  Ai as default,
  ti as domPrint,
  gl as downloadFileByFormSubmit,
  xa as downloadFileReaderFile,
  wi as emptyInput,
  La as fakeALinkClick,
  Ua as fileExport,
  je as findCollection,
  St as findPath,
  Oa as formDataHeadConfig,
  Je as fullScreenImgByDom,
  li as fullScreenImgPreview,
  $a as getColumnsKeys,
  kt as getFileSrc,
  yl as getFileTypeByName,
  tl as getFileTypeIconByName,
  Ia as getStringWidth,
  kl as hasPermission,
  ki as htmlDecode,
  bi as htmlEncode,
  Ea as htmlPrint,
  Ci as i18n,
  oi as install,
  Ra as isEmptyValue,
  wt as isImgByFile,
  wl as isNaN,
  Ka as isNumberValue,
  _e as isValidValue,
  Vi as locale,
  Mt as messageBox,
  z as myTypeof,
  Pa as oneOf,
  xt as removeEmptyValue,
  tn as setInterval,
  Oe as setTimeout,
  qe as setValByOption,
  _l as siblingElems,
  _i as stopBubbling,
  Da as stringLength,
  Rt as tablePrint,
  Ma as toFormData,
  Ta as toHump,
  vl as toLine,
  bl as tooltipManual,
  pt as trimObj
};
//# sourceMappingURL=plugRQw.js.map
